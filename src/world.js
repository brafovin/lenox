import { DEF, ID } from './registry.js';
import { Generator } from './gen.js';

import { CS, WH, LP } from './consts.js';
export { CS, WH, LP };

export class Chunk {
  constructor(cx, cz) {
    this.cx = cx; this.cz = cz;
    this.b = new Uint8Array(CS * CS * WH);
    this.hm = new Int16Array(256).fill(-1);
    this.maxY = 0;
    this.dirty = true;
    this.group = null;
    this.spawns = [];
    this.meshed = false;
  }
}

const blocksSky = new Uint8Array(256);
DEF.forEach((d) => { if (d && d.block && d.opaque && !d.fluid && !d.cross) blocksSky[d.id] = 1; });

export class World {
  constructor(dim, seed) {
    this.dim = dim;
    this.seed = seed;
    this.chunks = new Map();
    this.tiles = new Map(); // "x,y,z" -> Tile-Entity (Ofen, Truhe)
    this.gen = new Generator(dim, seed, this);
    this.dirtyList = new Set();
    this.entities = [];
    this.skyless = dim !== 'overworld';
  }
  static key(cx, cz) { return (cx + 32768) * 65536 + (cz + 32768); }
  getChunk(cx, cz) { return this.chunks.get(World.key(cx, cz)); }
  ensureChunk(cx, cz) {
    let c = this.chunks.get(World.key(cx, cz));
    if (c) return c;
    c = new Chunk(cx, cz);
    this.chunks.set(World.key(cx, cz), c);
    this.gen.generate(c);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) { const n = this.getChunk(cx + dx, cz + dz); if (n && n !== c) { n.dirty = true; this.dirtyList.add(n); } }
    c.dirty = true; this.dirtyList.add(c);
    return c;
  }
  getBlock(x, y, z) {
    if (y < 0 || y >= WH) return 0;
    const c = this.chunks.get(World.key(x >> 4, z >> 4));
    if (!c) return 0;
    return c.b[(x & 15) + 16 * ((z & 15) + 16 * y)];
  }
  hasChunkAt(x, z) { return this.chunks.has(World.key(x >> 4, z >> 4)); }
  isSolid(x, y, z) {
    if (y < 0) return true;
    if (y >= WH) return false;
    const c = this.chunks.get(World.key(x >> 4, z >> 4));
    if (!c) return true;
    return DEF[c.b[(x & 15) + 16 * ((z & 15) + 16 * y)]].solid === true;
  }
  setBlock(x, y, z, id, noDirty) {
    if (y < 0 || y >= WH) return false;
    const cx = x >> 4, cz = z >> 4;
    const c = this.chunks.get(World.key(cx, cz));
    if (!c) return false;
    const lx = x & 15, lz = z & 15;
    const i = lx + 16 * (lz + 16 * y);
    const old = c.b[i];
    if (old === id) return false;
    c.b[i] = id;
    const col = lx + lz * 16;
    if (blocksSky[id]) { if (y > c.hm[col]) c.hm[col] = y; }
    else if (blocksSky[old] && y === c.hm[col]) {
      let yy = y - 1;
      while (yy >= 0 && !blocksSky[c.b[lx + 16 * (lz + 16 * yy)]]) yy--;
      c.hm[col] = yy;
    }
    if (id && y > c.maxY) c.maxY = y;
    if (!noDirty) this.markDirty(x, y, z);
    return true;
  }
  markDirty(x, y, z) {
    const cx = x >> 4, cz = z >> 4, lx = x & 15, lz = z & 15;
    const mark = (a, b) => { const c = this.getChunk(a, b); if (c) { c.dirty = true; this.dirtyList.add(c); } };
    mark(cx, cz);
    const dx = lx < LP ? -1 : lx >= 16 - LP ? 1 : 0;
    const dz = lz < LP ? -1 : lz >= 16 - LP ? 1 : 0;
    if (dx) mark(cx + dx, cz);
    if (dz) mark(cx, cz + dz);
    if (dx && dz) mark(cx + dx, cz + dz);
  }
  // Himmelslicht: Position über der höchsten blockierenden Schicht
  skyLit(x, y, z) {
    if (this.skyless) return false;
    const c = this.getChunk(x >> 4, z >> 4);
    if (!c) return true;
    return y > c.hm[(x & 15) + (z & 15) * 16];
  }
  topY(x, z) {
    const c = this.getChunk(x >> 4, z >> 4);
    if (!c) return 0;
    return c.hm[(x & 15) + (z & 15) * 16];
  }
  // Oberste feste Oberfläche (inkl. Wasser) für Spawn
  surfaceY(x, z) {
    for (let y = WH - 1; y >= 0; y--) { const d = DEF[this.getBlock(x, y, z)]; if (d.solid || d.fluid) return y; }
    return 0;
  }
  tileKey(x, y, z) { return x + ',' + y + ',' + z; }
}
