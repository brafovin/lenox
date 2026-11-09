import { Noise, mulberry32, hash3 } from './util.js';
import { ID, DEF } from './registry.js';
import { CS, WH, SEA } from './consts.js';

const ckey = (x, z) => ((x >> 4) + 32768) * 65536 + ((z >> 4) + 32768);

// Puffer für Strukturen, nach Chunks einsortiert
class SBuf {
  constructor() { this.ch = new Map(); this.chests = []; this.spawns = []; }
  set(x, y, z, id) {
    if (y < 0 || y >= WH) return;
    const k = ckey(x, z);
    let a = this.ch.get(k);
    if (!a) { a = []; this.ch.set(k, a); }
    a.push(x, y, z, id);
  }
  fill(x1, y1, z1, x2, y2, z2, id) {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++)
      for (let z = Math.min(z1, z2); z <= Math.max(z1, z2); z++)
        for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) this.set(x, y, z, id);
  }
  chest(x, y, z, table) { this.set(x, y, z, ID.CHEST); this.chests.push({ x, y, z, table }); }
  spawn(type, x, y, z) { this.spawns.push({ type, x, y, z }); }
}

function makeLoot(table, rng) {
  const L = [];
  const add = (name, p, a, b) => { if (rng() < p) L.push({ id: ID[name], n: a + ((rng() * (b - a + 1)) | 0) }); };
  switch (table) {
    case 'village':
      add('IRON_INGOT', 0.6, 1, 4); add('COAL', 0.7, 2, 6); add('APPLE', 0.6, 1, 3); add('PLANKS', 0.6, 4, 12); add('OBSIDIAN', 0.35, 2, 4);
      add('GOLD_INGOT', 0.3, 1, 3); add('DIAMOND', 0.06, 1, 1); add('IRON_PICKAXE', 0.15, 1, 1); add('BUCKET', 0.3, 1, 1); add('TORCH', 0.5, 4, 8);
      add('STEAK', 0.35, 2, 4); add('FLINT_AND_STEEL', 0.12, 1, 1); add('IRON_SWORD', 0.12, 1, 1); add('LOG', 0.5, 2, 6);
      break;
    case 'desert':
      add('DIAMOND', 0.3, 1, 3); add('IRON_INGOT', 0.7, 1, 5); add('GOLD_INGOT', 0.7, 2, 6); add('BONE', 0.7, 3, 6); add('ROTTEN_FLESH', 0.6, 2, 5); add('GUNPOWDER', 0.5, 1, 4); add('OBSIDIAN', 0.2, 1, 2);
      break;
    case 'jungle':
      add('IRON_INGOT', 0.7, 1, 5); add('GOLD_INGOT', 0.6, 2, 5); add('DIAMOND', 0.25, 1, 2); add('BONE', 0.6, 2, 6); add('ROTTEN_FLESH', 0.5, 2, 4); add('STRING', 0.4, 1, 4);
      break;
    case 'ship':
      add('IRON_INGOT', 0.7, 1, 5); add('GOLD_INGOT', 0.5, 1, 3); add('COAL', 0.7, 3, 8); add('DIAMOND', 0.12, 1, 1); add('APPLE', 0.5, 2, 4); add('BUCKET', 0.3, 1, 1); add('STEAK', 0.4, 2, 5); add('TORCH', 0.5, 3, 6);
      break;
    case 'stronghold':
      add('IRON_INGOT', 0.7, 1, 5); add('GOLD_INGOT', 0.5, 1, 3); add('REDSTONE', 0.5, 2, 6); add('COAL', 0.6, 3, 8); add('DIAMOND', 0.1, 1, 1);
      add('APPLE', 0.5, 1, 3); add('IRON_PICKAXE', 0.15, 1, 1); add('FLINT_AND_STEEL', 0.1, 1, 1); add('ENDER_PEARL', 0.1, 1, 1);
      break;
    case 'nether':
      add('GOLD_INGOT', 0.7, 2, 6); add('IRON_INGOT', 0.6, 1, 4); add('OBSIDIAN', 0.4, 2, 4); add('FLINT_AND_STEEL', 0.25, 1, 1); add('DIAMOND', 0.2, 1, 2);
      add('NETHERITE_SCRAP', 0.1, 1, 1); add('STEAK', 0.4, 2, 5);
      break;
  }
  const slots = new Array(27).fill(null);
  for (const it of L) { let s = (rng() * 27) | 0, t = 0; while (slots[s] && t++ < 30) s = (s + 1) % 27; slots[s] = it.id >= 256 && DEF[it.id].tool ? { id: it.id, n: 1, d: 0 } : { id: it.id, n: it.n }; }
  return slots;
}

export class Generator {
  constructor(dim, seed, world) {
    this.dim = dim; this.seed = seed; this.world = world;
    this.n1 = new Noise(seed); this.n2 = new Noise(seed + 1337); this.n3 = new Noise(seed + 4242);
    this.sc = new Map();
    this.strongholds = [];
    for (let k = 0; k < 3; k++) {
      const a = hash3(k, 0, 0, seed) * 6.283 + k * 2.1;
      const r = 280 + hash3(k, 1, 0, seed) * 120;
      this.strongholds.push({ x: Math.round(Math.cos(a) * r / 4) * 4, z: Math.round(Math.sin(a) * r / 4) * 4 });
    }
  }

  // ---------- Overworld: Höhe und Biome ----------
  cont(x, z) {
    const d = Math.hypot(x, z);
    return this.n1.fbm2(x * 0.0022, z * 0.0022, 4) * 1.7 + Math.max(0, 1 - d / 160) * 0.9;
  }
  heightAt(x, z) {
    const c = this.cont(x, z);
    const hills = this.n2.fbm2(x * 0.012, z * 0.012, 4);
    let h;
    if (c < 0) h = SEA - 1 + c * 16 + hills * 3;
    else h = SEA + 1 + c * 9 + hills * (3 + c * 9) + Math.max(0, c - 0.55) * 45;
    return Math.min(WH - 8, Math.max(3, Math.floor(h)));
  }
  biomeAt(x, z) {
    const d = Math.hypot(x, z);
    const c = this.cont(x, z);
    if (c < 0 && d > 90) return 'ocean';
    if (d < 85) return 'plains';
    const t = this.n3.fbm2(x * 0.004 + 100, z * 0.004, 3), m = this.n3.fbm2(x * 0.004, z * 0.004 + 200, 3);
    if (t > 0.1 && m < 0) return 'desert';
    if (t > 0.08 && m > 0.1) return 'jungle';
    if (m > 0.04) return 'forest';
    return 'plains';
  }
  findSpawn() {
    for (let r = 0; r < 400; r += 4) for (let a = 0; a < 6.28; a += 0.5) {
      const x = Math.round(Math.cos(a) * r), z = Math.round(Math.sin(a) * r);
      if (this.heightAt(x, z) > SEA + 1 && this.biomeAt(x, z) !== 'ocean') return { x: x + 0.5, z: z + 0.5 };
    }
    return { x: 0.5, z: 0.5 };
  }

  generate(chunk) {
    if (this.dim === 'overworld') this.genOverworld(chunk);
    else if (this.dim === 'nether') this.genNether(chunk);
    else this.genEnd(chunk);
    // Höhenkarte und maxY
    const b = chunk.b;
    let maxY = 0;
    const blk = new Uint8Array(256);
    DEF.forEach((d) => { if (d && d.block && d.opaque && !d.fluid && !d.cross) blk[d.id] = 1; });
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
      let hm = -1;
      for (let y = WH - 1; y >= 0; y--) { const v = b[x + 16 * (z + 16 * y)]; if (v) { if (y > maxY) maxY = y; if (blk[v] && hm < 0) hm = y; if (hm >= 0 && maxY >= y) break; } }
      chunk.hm[x + z * 16] = hm;
    }
    chunk.maxY = maxY;
  }

  genOverworld(chunk) {
    const cx = chunk.cx, cz = chunk.cz, x0 = cx * 16, z0 = cz * 16;
    const b = chunk.b;
    const I = (x, y, z) => x + 16 * (z + 16 * y);
    const hs = new Int16Array(256), bio = new Array(256);
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) { hs[x + z * 16] = this.heightAt(x0 + x, z0 + z); bio[x + z * 16] = this.biomeAt(x0 + x, z0 + z); }
    const rng = mulberry32(hash3(cx, cz, this.seed, 11) * 4294967296);
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
      const h = hs[x + z * 16], bm = bio[x + z * 16];
      const wx = x0 + x, wz = z0 + z;
      b[I(x, 0, z)] = ID.BEDROCK;
      if (rng() < 0.5) b[I(x, 1, z)] = ID.BEDROCK;
      const beach = h <= SEA + 1;
      for (let y = 1; y <= h; y++) {
        let id = ID.STONE;
        if (y === h) id = (bm === 'desert' || beach) ? (bm === 'ocean' && h < SEA - 2 ? ID.GRAVEL : ID.SAND) : (h > 72 ? ID.STONE : ID.GRASS);
        else if (y >= h - 3) id = (bm === 'desert' || beach) ? (y >= h - 2 ? ID.SAND : ID.SANDSTONE) : (h > 72 ? ID.STONE : ID.DIRT);
        if (y > 1 || b[I(x, y, z)] === 0) b[I(x, y, z)] = id;
      }
      for (let y = h + 1; y <= SEA; y++) b[I(x, y, z)] = ID.WATER;
      // Höhlen
      for (let y = 5; y < h - 2; y++) {
        const a = this.n1.n3(wx * 0.045 + 10, y * 0.07, wz * 0.045), c = this.n2.n3(wx * 0.045, y * 0.07 + 5, wz * 0.045 + 30);
        let carve = a * a + c * c < 0.006;
        if (!carve && y < 34) carve = this.n3.n3(wx * 0.02, y * 0.04, wz * 0.02 + 70) > 0.55;
        if (carve) b[I(x, y, z)] = y <= 9 ? ID.LAVA : 0;
      }
    }
    // Erze
    const ores = [['COAL_ORE', 18, 8, 5, 70], ['IRON_ORE', 14, 5, 4, 56], ['GOLD_ORE', 3, 4, 4, 28], ['REDSTONE_ORE', 6, 5, 4, 16], ['LAPIS_ORE', 2, 4, 4, 28], ['DIAMOND_ORE', 2, 4, 4, 15]];
    for (const [name, cnt, size, ymin, ymax] of ores) {
      for (let k = 0; k < cnt; k++) {
        let x = (rng() * 16) | 0, z = (rng() * 16) | 0, y = ymin + ((rng() * (ymax - ymin)) | 0);
        for (let s = 0; s < size; s++) {
          if (x >= 0 && x < 16 && z >= 0 && z < 16 && y > 1 && b[I(x, y, z)] === ID.STONE) b[I(x, y, z)] = ID[name];
          x += ((rng() * 3) | 0) - 1; y += ((rng() * 3) | 0) - 1; z += ((rng() * 3) | 0) - 1;
        }
      }
    }
    // Pflanzen, Bäume
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
      const h = hs[x + z * 16], bm = bio[x + z * 16];
      if (h <= SEA) continue;
      const top = b[I(x, h, z)];
      if (h + 1 >= WH) continue;
      const r = rng();
      if (top === ID.GRASS) {
        if (r < (bm === 'jungle' ? 0.2 : 0.09)) b[I(x, h + 1, z)] = ID.TALL_GRASS;
        else if (r < 0.1 + 0.012 && bm !== 'jungle') b[I(x, h + 1, z)] = rng() < 0.5 ? ID.FLOWER_RED : ID.FLOWER_YELLOW;
      } else if (top === ID.SAND && bm === 'desert') {
        if (r < 0.006) { const ch = 1 + ((rng() * 3) | 0); for (let k = 1; k <= ch; k++) b[I(x, h + k, z)] = ID.CACTUS; }
        else if (r < 0.02) b[I(x, h + 1, z)] = ID.DEAD_BUSH;
      }
    }
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) this.placeTrees(chunk, cx + dx, cz + dz, b);
    // Strukturen
    this.applyStructures(chunk);
    // Tiere
    if (rng() < 0.1) {
      const n = 2 + ((rng() * 3) | 0);
      const types = ['pig', 'cow', 'sheep', 'chicken'];
      const t = types[(rng() * 4) | 0];
      for (let k = 0; k < n; k++) {
        const x = (rng() * 16) | 0, z = (rng() * 16) | 0, h = hs[x + z * 16];
        if (b[I(x, h, z)] === ID.GRASS) chunk.spawns.push({ type: t, x: x0 + x + 0.5, y: h + 1, z: z0 + z + 0.5 });
      }
    }
  }

  treeList(cx, cz) {
    const k = 't' + cx + ',' + cz;
    if (this.sc.has(k)) return this.sc.get(k);
    const rng = mulberry32(hash3(cx, cz, this.seed, 77) * 4294967296);
    const out = [];
    const bmC = this.biomeAt(cx * 16 + 8, cz * 16 + 8);
    const dens = { plains: 1.5, forest: 9, jungle: 11, desert: 0, ocean: 0 }[bmC] ?? 1;
    const n = Math.floor(dens + rng() * 2);
    for (let i = 0; i < n; i++) {
      const x = cx * 16 + ((rng() * 16) | 0), z = cz * 16 + ((rng() * 16) | 0);
      const bm = this.biomeAt(x, z);
      if (bm === 'desert' || bm === 'ocean') continue;
      const h = this.heightAt(x, z);
      if (h <= SEA + 1 || h > 70) continue;
      const jungle = bm === 'jungle';
      out.push({ x, z, h, jungle, th: jungle ? 7 + ((rng() * 6) | 0) : 4 + ((rng() * 3) | 0), r2: rng() });
    }
    this.sc.set(k, out);
    return out;
  }
  placeTrees(chunk, tcx, tcz, b) {
    const x0 = chunk.cx * 16, z0 = chunk.cz * 16;
    const log = (x, y, z, id) => { const lx = x - x0, lz = z - z0; if (lx < 0 || lx > 15 || lz < 0 || lz > 15 || y >= WH) return; b[lx + 16 * (lz + 16 * y)] = id; };
    const leaf = (x, y, z, id) => { const lx = x - x0, lz = z - z0; if (lx < 0 || lx > 15 || lz < 0 || lz > 15 || y >= WH) return; const i = lx + 16 * (lz + 16 * y); if (b[i] === 0 || b[i] === ID.TALL_GRASS) b[i] = id; };
    for (const t of this.treeList(tcx, tcz)) {
      if (Math.abs(t.x - x0 - 8) > 20 || Math.abs(t.z - z0 - 8) > 20) continue;
      const LG = t.jungle ? ID.JUNGLE_LOG : ID.LOG, LV = t.jungle ? ID.JUNGLE_LEAVES : ID.LEAVES;
      const top = t.h + t.th;
      for (let y = t.h + 1; y <= top; y++) log(t.x, y, t.z, LG);
      // Boden unter dem Stamm: Erde
      if (t.jungle) {
        for (let y = top - 3; y <= top + 2; y++) { const rr = y >= top ? 2 : 3; for (let dx = -rr; dx <= rr; dx++) for (let dz = -rr; dz <= rr; dz++) { if (Math.abs(dx) + Math.abs(dz) > rr + 1) continue; if (dx === 0 && dz === 0 && y <= top) continue; leaf(t.x + dx, y, t.z + dz, LV); } }
      } else {
        for (let y = top - 2; y <= top + 1; y++) {
          const rr = y <= top - 1 ? 2 : 1;
          for (let dx = -rr; dx <= rr; dx++) for (let dz = -rr; dz <= rr; dz++) {
            if (Math.abs(dx) === rr && Math.abs(dz) === rr && (y > top - 1 || ((dx * 7 + dz * 13 + t.x) & 1))) continue;
            if (dx === 0 && dz === 0 && y <= top) continue;
            leaf(t.x + dx, y, t.z + dz, LV);
          }
        }
      }
    }
  }

  // ---------- Strukturen ----------
  surfaceStructure(gx, gz) {
    const k = 's' + gx + ',' + gz;
    if (this.sc.has(k)) return this.sc.get(k);
    let res = null;
    const rng = mulberry32(hash3(gx, gz, this.seed, 5) * 4294967296);
    let x = gx * 128 + 28 + Math.floor(rng() * 72), z = gz * 128 + 28 + Math.floor(rng() * 72);
    if (gx === 0 && gz === 0) { res = { type: 'village', x: 56, z: 40 }; }
    else {
      const bm = this.biomeAt(x, z);
      const r = rng();
      const h = this.heightAt(x, z);
      if (bm === 'plains' || bm === 'forest') { if (r < 0.5) res = { type: 'village', x, z }; }
      else if (bm === 'desert') { if (r < 0.45) res = { type: 'desert', x, z }; else if (r < 0.7) res = { type: 'village', x, z }; }
      else if (bm === 'jungle') { if (r < 0.6) res = { type: 'jungle', x, z }; }
      else if (bm === 'ocean' && h < SEA - 3) { if (r < 0.7) res = { type: 'ship', x, z }; }
    }
    if (res) res.rng = rng;
    this.sc.set(k, res);
    return res;
  }
  structBuf(s, kind) {
    const k = 'b' + kind + s.x + ',' + s.z;
    if (this.sc.has(k)) return this.sc.get(k);
    const sb = new SBuf();
    const rng = mulberry32(hash3(s.x, s.z, this.seed, 99) * 4294967296);
    if (kind === 'village') this.buildVillage(sb, s, rng);
    else if (kind === 'desert') this.buildDesert(sb, s, rng);
    else if (kind === 'jungle') this.buildJungle(sb, s, rng);
    else if (kind === 'ship') this.buildShip(sb, s, rng);
    else if (kind === 'stronghold') this.buildStronghold(sb, s, rng);
    else if (kind === 'fortress') this.buildFortress(sb, s, rng);
    this.sc.set(k, sb);
    return sb;
  }
  // Liste aller Strukturen die ein Chunk berühren könnten
  structuresNear(cx, cz) {
    const list = [];
    const px = cx * 16 + 8, pz = cz * 16 + 8;
    if (this.dim === 'overworld') {
      const gx0 = Math.floor(px / 128), gz0 = Math.floor(pz / 128);
      for (let gx = gx0 - 1; gx <= gx0 + 1; gx++) for (let gz = gz0 - 1; gz <= gz0 + 1; gz++) {
        const s = this.surfaceStructure(gx, gz);
        if (s && Math.abs(s.x - px) < 60 && Math.abs(s.z - pz) < 60) list.push(this.structBuf(s, s.type));
      }
      for (const sh of this.strongholds) if (Math.abs(sh.x - px) < 48 && Math.abs(sh.z - pz) < 48) list.push(this.structBuf(sh, 'stronghold'));
    } else if (this.dim === 'nether') {
      for (const f of this.fortresses(px, pz)) if (Math.abs(f.x - px) < 52 && Math.abs(f.z - pz) < 52) list.push(this.structBuf(f, 'fortress'));
    }
    return list;
  }
  fortresses(px, pz) {
    const out = [];
    const gx0 = Math.floor(px / 160), gz0 = Math.floor(pz / 160);
    for (let gx = gx0 - 1; gx <= gx0 + 1; gx++) for (let gz = gz0 - 1; gz <= gz0 + 1; gz++) {
      if (gx === 0 && gz === 0) { out.push({ x: 56, z: 24 }); continue; }
      if (hash3(gx, gz, this.seed, 31) < 0.45) out.push({ x: gx * 160 + 40 + Math.floor(hash3(gx, gz, this.seed, 32) * 80), z: gz * 160 + 40 + Math.floor(hash3(gx, gz, this.seed, 33) * 80) });
    }
    return out;
  }
  // Alle bekannten Struktur-Orte (für F4)
  locate(px, pz) {
    const res = {};
    const upd = (name, x, z) => { const d = Math.hypot(x - px, z - pz); if (!res[name] || d < res[name].d) res[name] = { x, z, d }; };
    if (this.dim === 'overworld') {
      const gx0 = Math.floor(px / 128), gz0 = Math.floor(pz / 128);
      for (let gx = gx0 - 6; gx <= gx0 + 6; gx++) for (let gz = gz0 - 6; gz <= gz0 + 6; gz++) { const s = this.surfaceStructure(gx, gz); if (s) upd(s.type, s.x, s.z); }
      for (const sh of this.strongholds) upd('stronghold', sh.x, sh.z);
    } else if (this.dim === 'nether') {
      for (const f of this.fortresses(px, pz)) upd('fortress', f.x, f.z);
    }
    return res;
  }
  applyStructures(chunk) {
    const k = ckey(chunk.cx * 16, chunk.cz * 16);
    for (const sb of this.structuresNear(chunk.cx, chunk.cz)) {
      const a = sb.ch.get(k);
      if (a) {
        for (let i = 0; i < a.length; i += 4) {
          const x = a[i] - chunk.cx * 16, z = a[i + 2] - chunk.cz * 16;
          chunk.b[x + 16 * (z + 16 * a[i + 1])] = a[i + 3];
        }
      }
      for (const c of sb.chests) {
        if ((c.x >> 4) === chunk.cx && (c.z >> 4) === chunk.cz) this.world.tiles.set(c.x + ',' + c.y + ',' + c.z, { type: 'chest', items: makeLoot(c.table, mulberry32(hash3(c.x, c.y, c.z, this.seed) * 4294967296)) });
      }
      for (const s of sb.spawns) if ((s.x >> 4) === chunk.cx && (s.z >> 4) === chunk.cz) chunk.spawns.push({ type: s.type, x: s.x + 0.5, y: s.y, z: s.z + 0.5 });
    }
  }

  gy(x, z) { return Math.max(this.heightAt(x, z), SEA + 1); }

  buildVillage(sb, s, rng) {
    const cx = s.x, cz = s.z;
    const gy0 = this.gy(cx, cz);
    // Wege
    const path = (x, z) => { const g = this.gy(x, z); sb.set(x, g, z, ID.PATH); for (let k = 1; k <= 3; k++) sb.set(x, g + k, z, 0); };
    for (let d = -34; d <= 34; d++) { for (let w = -1; w <= 1; w++) { path(cx + d, cz + w); path(cx + w, cz + d); } }
    // Brunnen
    for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
      sb.fill(cx + dx, gy0 - 3, cz + dz, cx + dx, gy0 + 6, cz + dz, 0);
      sb.set(cx + dx, gy0, cz + dz, ID.COBBLE);
      sb.fill(cx + dx, gy0 - 3, cz + dz, cx + dx, gy0 - 1, cz + dz, ID.COBBLE);
      if (Math.abs(dx) < 2 && Math.abs(dz) < 2) { sb.set(cx + dx, gy0, cz + dz, ID.WATER); }
      else sb.set(cx + dx, gy0 + 1, cz + dz, ID.COBBLE);
    }
    for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) { sb.fill(cx + dx, gy0 + 1, cz + dz, cx + dx, gy0 + 4, cz + dz, ID.LOG); }
    sb.fill(cx - 2, gy0 + 5, cz - 2, cx + 2, gy0 + 5, cz + 2, ID.PLANKS);
    // Häuser
    const spots = [[-14, -12], [14, -12], [-14, 12], [14, 12], [-26, 0], [26, 0], [0, -24], [0, 24], [-26, -22], [26, 22]];
    let chestsPlaced = 0;
    spots.forEach(([dx, dz], i) => {
      if (rng() < 0.15 && i > 4) return;
      const hx = cx + dx + ((rng() * 4) | 0) - 2, hz = cz + dz + ((rng() * 4) | 0) - 2;
      const w = 5 + ((rng() * 2) | 0) * 2, d = 5 + ((rng() * 2) | 0) * 2; // 5 oder 7
      const kind = i === 3 ? 'smith' : i === 0 ? 'house' : rng() < 0.3 ? 'farm' : rng() < 0.5 ? 'stone' : 'house';
      const g = this.gy(hx, hz);
      const x1 = hx - ((w / 2) | 0), x2 = x1 + w - 1, z1 = hz - ((d / 2) | 0), z2 = z1 + d - 1;
      if (kind === 'farm') {
        sb.fill(x1 - 1, g, z1 - 1, x2 + 1, g + 5, z2 + 1, 0);
        sb.fill(x1 - 1, g - 3, z1 - 1, x2 + 1, g - 1, z2 + 1, ID.DIRT);
        sb.fill(x1, g, z1, x2, g, z2, ID.GRASS);
        for (let x = x1; x <= x2; x++) for (let z = z1; z <= z2; z++) { if ((x - x1) % 2 === 1) continue; if (rng() < 0.6) sb.set(x, g + 1, z, rng() < 0.5 ? ID.FLOWER_YELLOW : ID.TALL_GRASS); }
        sb.set(hx, g, hz, ID.WATER);
        return;
      }
      const wall = kind === 'house' || kind === 'smith' && false ? ID.PLANKS : ID.COBBLE;
      sb.fill(x1 - 1, g + 1, z1 - 1, x2 + 1, g + 8, z2 + 1, 0);
      sb.fill(x1, g - 4, z1, x2, g - 1, z2, ID.COBBLE);
      sb.fill(x1, g, z1, x2, g, z2, kind === 'house' ? ID.PLANKS : ID.COBBLE);
      for (let y = g + 1; y <= g + 3; y++) {
        for (let x = x1; x <= x2; x++) for (let z = z1; z <= z2; z++) {
          const edge = x === x1 || x === x2 || z === z1 || z === z2;
          if (!edge) continue;
          const corner = (x === x1 || x === x2) && (z === z1 || z === z2);
          sb.set(x, y, z, corner ? ID.LOG : wall);
        }
      }
      // Tür Richtung Dorfmitte, Fenster
      const doorSide = Math.abs(cx - hx) > Math.abs(cz - hz) ? (cx > hx ? 'x2' : 'x1') : (cz > hz ? 'z2' : 'z1');
      const dpos = doorSide[0] === 'x' ? [doorSide === 'x2' ? x2 : x1, hz] : [hx, doorSide === 'z2' ? z2 : z1];
      sb.set(dpos[0], g + 1, dpos[1], 0); sb.set(dpos[0], g + 2, dpos[1], 0);
      for (const [wx, wz] of [[hx, z1], [hx, z2], [x1, hz], [x2, hz]]) { if (wx === dpos[0] && wz === dpos[1]) continue; sb.set(wx, g + 2, wz, ID.GLASS); }
      // Dach
      sb.fill(x1 - 1, g + 4, z1 - 1, x2 + 1, g + 4, z2 + 1, kind === 'house' ? ID.LOG : ID.COBBLE);
      sb.fill(x1, g + 4, z1, x2, g + 4, z2, ID.PLANKS);
      sb.fill(x1 + 1, g + 5, z1 + 1, x2 - 1, g + 5, z2 - 1, ID.PLANKS);
      // Innen
      sb.set(x1 + 1, g + 2, z1 + 1, ID.TORCH);
      if (kind === 'smith') {
        sb.chest(x2 - 1, g + 1, z2 - 1, 'village'); sb.chest(x2 - 1, g + 1, z2 - 2, 'village');
        sb.set(x1 + 1, g + 1, z2 - 1, ID.FURNACE);
        sb.set(x1 + 1, g + 1, z2 - 2, ID.CRAFTING_TABLE);
        sb.fill(x2 + 1, g + 1, z2 - 1, x2 + 1, g + 1, z2 - 1, 0);
      } else if (chestsPlaced < 4 && rng() < 0.7) { sb.chest(x2 - 1, g + 1, z2 - 1, 'village'); chestsPlaced++; }
      else if (rng() < 0.5) sb.set(x2 - 1, g + 1, z2 - 1, ID.CRAFTING_TABLE);
      // Fackel draußen
      sb.set(dpos[0] + (doorSide === 'x2' ? 1 : doorSide === 'x1' ? -1 : 0), g + 1, dpos[1] + (doorSide === 'z2' ? 1 : doorSide === 'z1' ? -1 : 0), ID.TORCH);
    });
  }

  buildDesert(sb, s, rng) {
    const cx = s.x, cz = s.z, g = this.heightAt(cx, cz);
    const y0 = Math.max(g, SEA + 1);
    sb.fill(cx - 10, y0 - 6, cz - 10, cx + 10, y0 - 1, cz + 10, ID.SANDSTONE);
    sb.fill(cx - 11, y0 + 1, cz - 11, cx + 11, y0 + 14, cz + 11, 0);
    for (let k = 0; k <= 10; k++) { const h = 10 - k; sb.fill(cx - h, y0 + k, cz - h, cx + h, y0 + k, cz + h, ID.SANDSTONE); }
    // Innenraum
    sb.fill(cx - 5, y0 + 1, cz - 5, cx + 5, y0 + 5, cz + 5, 0);
    sb.fill(cx - 5, y0 - 1, cz - 5, cx + 5, y0 - 1, cz + 5, ID.SANDSTONE);
    sb.fill(cx - 1, y0, cz + 5, cx + 1, y0 + 3, cz + 11, 0);
    sb.fill(cx - 1, y0 - 1, cz + 5, cx + 1, y0 - 1, cz + 11, ID.SANDSTONE);
    for (const [dx, dz] of [[-4, -4], [4, -4], [-4, 4], [4, 4]]) { sb.set(cx + dx, y0, cz + dz, ID.SANDSTONE); sb.set(cx + dx, y0 + 1, cz + dz, ID.SANDSTONE); sb.set(cx + dx, y0 + 2, cz + dz, ID.SANDSTONE); }
    sb.chest(cx - 4, y0 + 3, cz - 4, 'desert'); sb.chest(cx + 4, y0 + 3, cz - 4, 'desert'); sb.chest(cx - 4, y0 + 3, cz + 4, 'desert'); sb.chest(cx + 4, y0 + 3, cz + 4, 'desert');
    sb.chest(cx, y0, cz - 5, 'desert');
    sb.set(cx, y0 + 3, cz, ID.TORCH);
    for (const [dx, dz] of [[-5, 0], [5, 0], [0, -5]]) sb.set(cx + dx, y0 + 2, cz + dz, ID.TORCH);
    sb.spawn('zombie', cx + 2, y0 + 1, cz - 2); sb.spawn('skeleton', cx - 2, y0 + 1, cz + 2); sb.spawn('spider', cx, y0 + 1, cz);
  }

  buildJungle(sb, s, rng) {
    const cx = s.x, cz = s.z, g = Math.max(this.heightAt(cx, cz), SEA + 1);
    const mix = (x, y, z) => sb.set(x, y, z, rng() < 0.55 ? ID.MOSSY_COBBLE : ID.COBBLE);
    sb.fill(cx - 7, g - 5, cz - 8, cx + 7, g - 1, cz + 8, ID.COBBLE);
    sb.fill(cx - 8, g + 1, cz - 9, cx + 8, g + 14, cz + 9, 0);
    for (let y = g; y <= g + 6; y++) for (let x = cx - 6; x <= cx + 6; x++) for (let z = cz - 7; z <= cz + 7; z++) mix(x, y, z);
    for (let y = g + 7; y <= g + 10; y++) for (let x = cx - 4; x <= cx + 4; x++) for (let z = cz - 5; z <= cz + 5; z++) mix(x, y, z);
    sb.fill(cx - 5, g + 1, cz - 6, cx + 5, g + 5, cz + 6, 0);
    sb.fill(cx - 3, g + 8, cz - 4, cx + 3, g + 9, cz + 4, 0);
    sb.fill(cx - 1, g + 1, cz + 6, cx + 1, g + 3, cz + 8, 0);
    sb.fill(cx - 1, g + 6, cz - 1, cx + 1, g + 7, cz + 1, 0);
    for (let x = cx - 5; x <= cx + 5; x++) for (let z = cz - 6; z <= cz + 6; z++) if (!(Math.abs(x - cx) <= 1 && Math.abs(z - cz) <= 1)) sb.set(x, g + 6, z, ID.MOSSY_COBBLE);
    sb.chest(cx - 4, g + 1, cz - 5, 'jungle'); sb.chest(cx + 4, g + 1, cz - 5, 'jungle'); sb.chest(cx, g + 8, cz - 3, 'jungle');
    sb.set(cx - 3, g + 2, cz + 3, ID.TORCH); sb.set(cx + 3, g + 2, cz + 3, ID.TORCH); sb.set(cx, g + 9, cz + 2, ID.TORCH);
    sb.spawn('spider', cx, g + 1, cz); sb.spawn('zombie', cx + 2, g + 1, cz + 2); sb.spawn('skeleton', cx - 2, g + 8, cz);
  }

  buildShip(sb, s, rng) {
    const rot = rng() < 0.5;
    const g = this.heightAt(s.x, s.z);
    const y0 = g;
    const P = (u, v, y, id) => { if (rot) sb.set(s.x + u, y, s.z + v, id); else sb.set(s.x + v, y, s.z + u, id); };
    for (let u = 0; u < 15; u++) {
      const half = u < 1 || u > 13 ? 0 : (u < 3 || u > 11) ? 1 : 2;
      for (let v = -half; v <= half; v++) {
        if (rng() < 0.1) continue;
        P(u, v, y0, ID.PLANKS);
        if (Math.abs(v) === half) for (let y = y0 + 1; y <= y0 + 3 + (u > 11 ? 1 : 0); y++) if (rng() > 0.15) P(u, v, y, y % 2 ? ID.PLANKS : ID.LOG);
      }
      if (u === 0 || u === 14) P(u, 0, y0 + 1, ID.PLANKS);
    }
    for (let y = y0 + 1; y <= y0 + 9; y++) P(6, 0, y, ID.LOG);
    for (let v = -2; v <= 2; v++) P(6, v, y0 + 7, ID.PLANKS);
    if (rot) sb.chest(s.x + 11, y0 + 1, s.z, 'ship'); else sb.chest(s.x, y0 + 1, s.z + 11, 'ship');
    if (rot) sb.chest(s.x + 3, y0 + 1, s.z + 1, 'ship'); else sb.chest(s.x + 1, y0 + 1, s.z + 3, 'ship');
  }

  buildStronghold(sb, s, rng) {
    const yb = 10, pitch = 12;
    const rc = (i, j) => [s.x + (i - 2) * pitch, s.z + (j - 2) * pitch];
    const brick = (x, y, z) => { const r = rng(); sb.set(x, y, z, r < 0.12 ? ID.MOSSY_COBBLE : r < 0.2 ? ID.COBBLE : ID.STONE_BRICKS); };
    const shell = (x1, y1, z1, x2, y2, z2) => { for (let y = y1; y <= y2; y++) for (let z = z1; z <= z2; z++) for (let x = x1; x <= x2; x++) brick(x, y, z); };
    // Gänge per DFS
    const links = [];
    const seen = new Set(['2,2']);
    const stack = [[2, 2]];
    while (stack.length) {
      const [i, j] = stack[stack.length - 1];
      const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([a, b]) => [i + a, j + b]).filter(([a, b]) => a >= 0 && a < 5 && b >= 0 && b < 5 && !seen.has(a + ',' + b));
      if (!nb.length) { stack.pop(); continue; }
      const n = nb[(rng() * nb.length) | 0];
      seen.add(n[0] + ',' + n[1]); links.push([i, j, n[0], n[1]]); stack.push(n);
    }
    for (let k = 0; k < 6; k++) { const i = (rng() * 4) | 0, j = (rng() * 5) | 0; links.push([i, j, i + 1, j]); const a = (rng() * 5) | 0, b = (rng() * 4) | 0; links.push([a, b, a, b + 1]); }
    // Hüllen
    for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) {
      const [x, z] = rc(i, j);
      const big = i === 2 && j === 2;
      const h = big ? 6 : 4, ceil = big ? 7 : 5;
      shell(x - h - 1, yb - 1, z - h - 1, x + h + 1, yb + ceil, z + h + 1);
    }
    for (const [i, j, a, b] of links) {
      const [x1, z1] = rc(i, j), [x2, z2] = rc(a, b);
      shell(Math.min(x1, x2) - 2, yb - 1, Math.min(z1, z2) - 2, Math.max(x1, x2) + 2, yb + 4, Math.max(z1, z2) + 2);
    }
    // Innenräume freiräumen
    for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) {
      const [x, z] = rc(i, j);
      const big = i === 2 && j === 2;
      const h = big ? 6 : 4 - 1 + 0, hh = big ? 6 : 3;
      sb.fill(x - hh, yb, z - hh, x + hh, yb + (big ? 6 : 4), z + hh, 0);
      if (!big) {
        const r = rng();
        if (r < 0.3) sb.chest(x + 2, yb, z + 2, 'stronghold');
        sb.set(x - hh, yb + 2, z, ID.TORCH); sb.set(x + hh, yb + 2, z, ID.TORCH);
        if (r > 0.55) { sb.spawn(['silverfish', 'zombie', 'skeleton', 'silverfish'][(rng() * 4) | 0], x - 1, yb, z - 1); sb.spawn('silverfish', x + 1, yb, z + 1); }
      }
    }
    for (const [i, j, a, b] of links) {
      const [x1, z1] = rc(i, j), [x2, z2] = rc(a, b);
      sb.fill(Math.min(x1, x2), yb, Math.min(z1, z2) - 1, Math.max(x1, x2), yb + 2, Math.max(z1, z2) + 1, 0);
      sb.fill(Math.min(x1, x2) - 1, yb, Math.min(z1, z2), Math.max(x1, x2) + 1, yb + 2, Math.max(z1, z2), 0);
      sb.fill(Math.min(x1, x2) - 1, yb, Math.min(z1, z2) - 1, Math.max(x1, x2) + 1, yb + 2, Math.max(z1, z2) + 1, 0);
    }
    // Portalraum: Boden und Rahmen
    const [px, pz] = rc(2, 2);
    sb.fill(px - 3, yb, pz - 3, px + 3, yb + 2, pz + 3, ID.STONE_BRICKS);
    sb.fill(px - 1, yb, pz - 1, px + 1, yb + 2, pz + 1, ID.LAVA);
    sb.fill(px - 1, yb + 3, pz - 1, px + 1, yb + 3, pz + 1, 0);
    for (let d = -1; d <= 1; d++) { sb.set(px - 2, yb + 3, pz + d, ID.END_FRAME); sb.set(px + 2, yb + 3, pz + d, ID.END_FRAME); sb.set(px + d, yb + 3, pz - 2, ID.END_FRAME); sb.set(px + d, yb + 3, pz + 2, ID.END_FRAME); }
    for (const [dx, dz] of [[-5, -5], [5, -5], [-5, 5], [5, 5]]) { sb.set(px + dx, yb + 2, pz + dz, ID.TORCH); }
    sb.spawn('silverfish', px + 4, yb, pz + 4); sb.spawn('silverfish', px - 4, yb, pz - 4); sb.spawn('zombie', px + 4, yb, pz - 4); sb.spawn('skeleton', px - 4, yb, pz + 4);
    sb.portalRoom = { x: px, y: yb + 3, z: pz };
  }

  // ---------- Nether ----------
  netherDensity(x, y, z) {
    const hv = this.n1.fbm3(x * 0.016, y * 0.035, z * 0.016, 3);
    const band = 1 - Math.abs(y - 34) / 20;
    let d = hv * 1.2 + band * 0.9 - 0.62;
    if (y > 52) d += (y - 52) * 0.3;
    return d;
  }
  genNether(chunk) {
    const x0 = chunk.cx * 16, z0 = chunk.cz * 16, b = chunk.b;
    const I = (x, y, z) => x + 16 * (z + 16 * y);
    const rng = mulberry32(hash3(chunk.cx, chunk.cz, this.seed, 13) * 4294967296);
    const LAVA_Y = 14;
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
      const wx = x0 + x, wz = z0 + z;
      for (let y = 0; y < 64; y++) {
        let id = 0;
        if (y === 0 || y === 63 || (y === 62 && rng() < 0.5) || (y === 1 && rng() < 0.5)) id = ID.BEDROCK;
        else if (y <= 2) id = ID.NETHERRACK;
        else if (this.netherDensity(wx, y, wz) > 0) id = ID.NETHERRACK;
        else if (y <= LAVA_Y) id = ID.LAVA;
        b[I(x, y, z)] = id;
      }
    }
    // Dekoration
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) for (let y = 4; y < 62; y++) {
      const i = I(x, y, z);
      if (b[i] !== ID.NETHERRACK) continue;
      const r = rng();
      const above = b[I(x, y + 1, z)], below = b[I(x, y - 1, z)];
      if (above === 0 && y > LAVA_Y && r < 0.12 && this.n2.n2((x0 + x) * 0.07, (z0 + z) * 0.07) > 0.1) b[i] = ID.SOUL_SAND;
      else if (below === 0 && r < 0.003 && y > 20) { b[i] = ID.GLOWSTONE; for (let k = 0; k < 6; k++) { const xx = x + ((rng() * 3) | 0) - 1, zz = z + ((rng() * 3) | 0) - 1, yy = y - ((rng() * 3) | 0); if (xx >= 0 && xx < 16 && zz >= 0 && zz < 16 && b[I(xx, yy, zz)] === ID.NETHERRACK) b[I(xx, yy, zz)] = ID.GLOWSTONE; } }
      else if (r > 0.9985 && y < 44 && y > 16) b[i] = ID.ANCIENT_DEBRIS;
      else if (r > 0.992 && r <= 0.9985) b[i] = ID.GOLD_ORE;
      else if (r > 0.99 && r <= 0.992 && above === 0) b[i] = ID.MAGMA;
    }
    this.applyStructures(chunk);
    // Mobs
    if (rng() < 0.07) { const x = (rng() * 16) | 0, z = (rng() * 16) | 0; let ok = true; for (let y = 36; y < 46; y++) if (b[I(x, y, z)]) ok = false; if (ok) chunk.spawns.push({ type: 'ghast', x: x0 + x + 0.5, y: 40, z: z0 + z + 0.5 }); }
    if (rng() < 0.25) { const x = (rng() * 16) | 0, z = (rng() * 16) | 0; for (let y = 56; y > LAVA_Y + 1; y--) if (b[I(x, y, z)] === ID.NETHERRACK && !b[I(x, y + 1, z)]) { chunk.spawns.push({ type: 'magma_cube', x: x0 + x + 0.5, y: y + 1, z: z0 + z + 0.5 }); break; } }
  }
  netherSolid(x, y, z) { return this.netherDensity(x, y, z) > 0; }

  buildFortress(sb, s, rng) {
    const fx = s.x, fz = s.z, y0 = 36;
    const NB = ID.NETHER_BRICK;
    const pillar = (x, z) => { for (let y = y0 - 1; y > 3; y--) { if (this.netherSolid(x, y, z) && y > 14) break; sb.set(x, y, z, NB); } };
    const bridge = (alongX, a, b) => {
      for (let t = a; t <= b; t++) {
        for (let v = -2; v <= 2; v++) {
          const x = alongX ? fx + t : fx + v, z = alongX ? fz + v : fz + t;
          for (let y = y0 + 1; y <= y0 + 5; y++) sb.set(x, y, z, 0);
          sb.set(x, y0, x === 0 ? z : z, NB);
          const edge = Math.abs(v) === 2;
          if (edge) {
            for (let y = y0 + 1; y <= y0 + 4; y++) sb.set(x, y, z, (y === y0 + 3 && (t % 3 !== 0)) ? 0 : NB);
          }
          sb.set(x, y0 + 5, z, NB);
        }
        if (t % 9 === 0) { for (const v of [-2, 2]) pillar(alongX ? fx + t : fx + v, alongX ? fz + v : fz + t); }
        if (t % 6 === 0) { const x = alongX ? fx + t : fx, z = alongX ? fz : fz + t; sb.set(x, y0 + 4, z, ID.GLOWSTONE); }
      }
    };
    // Haupthalle
    sb.fill(fx - 7, y0, fz - 7, fx + 7, y0 + 9, fz + 7, 0);
    sb.fill(fx - 7, y0 - 1, fz - 7, fx + 7, y0, fz + 7, NB);
    for (let y = y0 + 1; y <= y0 + 7; y++) for (let k = -7; k <= 7; k++) { sb.set(fx + k, y, fz - 7, NB); sb.set(fx + k, y, fz + 7, NB); sb.set(fx - 7, y, fz + k, NB); sb.set(fx + 7, y, fz + k, NB); }
    sb.fill(fx - 7, y0 + 8, fz - 7, fx + 7, y0 + 8, fz + 7, NB);
    sb.fill(fx - 6, y0 + 1, fz - 6, fx + 6, y0 + 7, fz + 6, 0);
    // Öffnungen
    sb.fill(fx - 7, y0 + 1, fz - 1, fx - 7, y0 + 3, fz + 1, 0); sb.fill(fx + 7, y0 + 1, fz - 1, fx + 7, y0 + 3, fz + 1, 0);
    sb.fill(fx - 1, y0 + 1, fz - 7, fx + 1, y0 + 3, fz - 7, 0); sb.fill(fx - 1, y0 + 1, fz + 7, fx + 1, y0 + 3, fz + 7, 0);
    for (const [dx, dz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) { sb.fill(fx + dx, y0 + 1, fz + dz, fx + dx, y0 + 6, fz + dz, NB); }
    sb.fill(fx - 1, y0 + 1, fz - 1, fx + 1, y0 + 1, fz + 1, NB);
    sb.set(fx, y0 + 2, fz, ID.GLOWSTONE);
    sb.chest(fx - 5, y0 + 1, fz - 5, 'nether'); sb.chest(fx + 5, y0 + 1, fz + 5, 'nether');
    for (let k = 0; k < 4; k++) sb.spawn('blaze', fx + ((k % 2) * 6 - 3), y0 + 2, fz + ((k >> 1) * 6 - 3));
    // Brücken
    bridge(true, 8, 34); bridge(true, -34, -8); bridge(false, 8, 30); bridge(false, -30, -8);
    // Endtürme
    for (const [tx, tz] of [[35, 0], [-35, 0], [0, 31], [0, -31]]) {
      sb.fill(fx + tx - 4, y0, fz + tz - 4, fx + tx + 4, y0 + 6, fz + tz + 4, NB);
      sb.fill(fx + tx - 3, y0 + 1, fz + tz - 3, fx + tx + 3, y0 + 5, fz + tz + 3, 0);
      sb.fill(fx + tx - 4, y0 + 1, fz + tz - 1, fx + tx + 4, y0 + 3, fz + tz + 1, 0);
      sb.fill(fx + tx - 1, y0 + 1, fz + tz - 4, fx + tx + 1, y0 + 3, fz + tz + 4, 0);
      sb.set(fx + tx, y0 + 5, fz + tz, ID.GLOWSTONE);
      pillar(fx + tx - 4, fz + tz - 4); pillar(fx + tx + 4, fz + tz - 4); pillar(fx + tx - 4, fz + tz + 4); pillar(fx + tx + 4, fz + tz + 4);
      sb.spawn('wither_skeleton', fx + tx, y0 + 1, fz + tz);
    }
    for (const t of [-20, -14, 14, 20]) { sb.spawn('wither_skeleton', fx + t, y0 + 1, fz); sb.spawn('wither_skeleton', fx, y0 + 1, fz + t); }
    sb.chest(fx + 35, y0 + 1, fz + 2, 'nether');
  }

  // ---------- End ----------
  pillars() {
    if (this._pillars) return this._pillars;
    const hs = [16, 20, 24, 28, 22, 18];
    this._pillars = hs.map((h, i) => ({ x: Math.round(Math.cos(i * Math.PI / 3 + 0.3) * 26), z: Math.round(Math.sin(i * Math.PI / 3 + 0.3) * 26), h, r: i % 2 ? 2.6 : 3.3 }));
    return this._pillars;
  }
  genEnd(chunk) {
    const x0 = chunk.cx * 16, z0 = chunk.cz * 16, b = chunk.b;
    const I = (x, y, z) => x + 16 * (z + 16 * y);
    const TOP = 48;
    const rng = mulberry32(hash3(chunk.cx, chunk.cz, this.seed, 17) * 4294967296);
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
      const wx = x0 + x, wz = z0 + z;
      const r = Math.hypot(wx, wz);
      const R = 44 + this.n1.n2(wx * 0.05, wz * 0.05) * 6;
      if (r < R) {
        const t = Math.floor((1 - (r / R) ** 2) * 16) + 2;
        for (let y = TOP - t; y <= TOP; y++) b[I(x, y, z)] = ID.END_STONE;
      }
      for (const p of this.pillars()) {
        if (Math.hypot(wx - p.x, wz - p.z) <= p.r) {
          for (let y = TOP - 4; y <= TOP + p.h; y++) b[I(x, y, z)] = ID.OBSIDIAN;
          if (Math.hypot(wx - p.x, wz - p.z) < 1.2) b[I(x, TOP + p.h + 1, z)] = ID.BEDROCK;
        }
      }
    }
    // Landeplattform
    if (chunk.cx >= 1 && chunk.cx <= 3 && chunk.cz >= -1 && chunk.cz <= 0) {
      for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
        const x = 34 + dx - x0, z = dz - z0;
        if (x < 0 || x > 15 || z < 0 || z > 15) continue;
        b[I(x, TOP, z)] = ID.OBSIDIAN;
        for (let y = TOP + 1; y <= TOP + 4; y++) b[I(x, y, z)] = 0;
      }
    }
    for (const p of this.pillars()) {
      if ((p.x >> 4) === chunk.cx && (p.z >> 4) === chunk.cz) chunk.spawns.push({ type: 'crystal', x: p.x + 0.5, y: TOP + p.h + 2, z: p.z + 0.5 });
    }
    const r0 = Math.hypot(x0 + 8, z0 + 8);
    if (r0 < 44 && r0 > 8 && rng() < 0.5) {
      const n = 1 + ((rng() * 2) | 0);
      for (let k = 0; k < n; k++) { const x = x0 + ((rng() * 16) | 0), z = z0 + ((rng() * 16) | 0); if (Math.hypot(x - 34, z) > 6) chunk.spawns.push({ type: 'enderman', x: x + 0.5, y: TOP + 1, z: z + 0.5 }); }
    }
  }
}
