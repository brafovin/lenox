import { DEF, ID, TILE, TILE_COLS } from './registry.js';
import { CS, WH, LP } from './consts.js';

const RW = CS + LP * 2;
const N = DEF.length;
const opaqueT = new Uint8Array(256), lightT = new Uint8Array(256), cullSame = new Uint8Array(256), groupT = new Uint8Array(256);
const fluidT = new Uint8Array(256);
DEF.forEach((d) => {
  if (!d || !d.block) return;
  opaqueT[d.id] = d.opaque ? 1 : 0;
  lightT[d.id] = d.light || 0;
  cullSame[d.id] = (d.sameCull || d.fluid || d.name === 'LEAVES' || d.name === 'JUNGLE_LEAVES') ? 1 : 0;
  groupT[d.id] = d.group === 'opaque' ? 0 : d.group === 'cutout' ? 1 : 2;
  fluidT[d.id] = d.fluid ? 1 : 0;
});
// Fackel/Kreuz-Blöcke und Portale lassen Licht durch (opaque=false)

const FACE = [
  { n: [1, 0, 0], c: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]], shade: 0.68, t: [1, 2] },
  { n: [-1, 0, 0], c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], shade: 0.68, t: [1, 2] },
  { n: [0, 1, 0], c: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], shade: 1.0, t: [0, 2] },
  { n: [0, -1, 0], c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], shade: 0.5, t: [0, 2] },
  { n: [0, 0, 1], c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], shade: 0.82, t: [0, 1] },
  { n: [0, 0, -1], c: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], shade: 0.82, t: [0, 1] },
];
const UVC = [[0, 0], [1, 0], [1, 1], [0, 1]];
const TS = 1 / TILE_COLS;

export function tileUV(tile) {
  const col = tile % TILE_COLS, row = (tile / TILE_COLS) | 0;
  const e = 0.0004;
  return [col * TS + e, 1 - (row + 1) * TS + e, (col + 1) * TS - e, 1 - row * TS - e];
}
export function faceTile(d, f) {
  let name;
  if (f === 2) name = d.tiles[0]; else if (f === 3) name = d.tiles[1];
  else name = (d.tiles[3] && (f === 4 || f === 5)) ? d.tiles[3] : d.tiles[2];
  return TILE[name];
}

class Buf {
  constructor() { this.pos = []; this.uv = []; this.light = []; this.idx = []; this.n = 0; }
}

export function meshChunk(world, chunk) {
  const cx0 = chunk.cx * CS - LP, cz0 = chunk.cz * CS - LP;
  // Chunk-Referenzen 3x3
  const cr = [];
  let topY = chunk.maxY;
  for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
    const c = world.getChunk(chunk.cx + dx, chunk.cz + dz);
    cr.push(c || null);
    if (c && c.maxY > topY) topY = c.maxY;
  }
  const YT = Math.min(WH, topY + 3);
  const RS = RW * RW;
  const rb = new Uint8Array(RS * YT);
  for (let rz = 0; rz < RW; rz++) {
    const wz = cz0 + rz, czz = (wz >> 4) - chunk.cz + 1, lz = wz & 15;
    for (let rx = 0; rx < RW; rx++) {
      const wx = cx0 + rx, cxx = (wx >> 4) - chunk.cx + 1, lx = wx & 15;
      const c = cr[czz * 3 + cxx];
      if (!c) continue;
      let si = lx + 16 * lz, di = rx + RW * rz;
      for (let y = 0; y < YT; y++) { rb[di] = c.b[si]; si += 256; di += RS; }
    }
  }
  const sky = new Uint8Array(RS * YT), blk = new Uint8Array(RS * YT);
  const skyless = world.skyless;
  const top = new Int16Array(RS).fill(-1);
  const q = [];
  // Himmelslicht
  for (let rz = 0; rz < RW; rz++) for (let rx = 0; rx < RW; rx++) {
    const col = rx + RW * rz;
    let t = -1;
    if (!skyless) for (let y = YT - 1; y >= 0; y--) { const b = rb[col + RS * y]; if (b && opaqueT[b] && !fluidT[b]) { t = y; break; } }
    top[col] = t;
    if (skyless) { for (let y = 0; y < YT; y++) sky[col + RS * y] = 15; }
    else { for (let y = t + 1; y < YT; y++) sky[col + RS * y] = 15; }
  }
  const spread = (arr, decay) => {
    let h = 0;
    while (h < q.length) {
      const i = q[h++];
      const L = arr[i] - decay;
      if (L <= 0) continue;
      const y = (i / RS) | 0, rem = i - y * RS, z = (rem / RW) | 0, x = rem - z * RW;
      const tryN = (ni) => { if (arr[ni] < L && !opaqueT[rb[ni]]) { arr[ni] = L; q.push(ni); } };
      if (x > 0) tryN(i - 1); if (x < RW - 1) tryN(i + 1);
      if (z > 0) tryN(i - RW); if (z < RW - 1) tryN(i + RW);
      if (y > 0) tryN(i - RS); if (y < YT - 1) tryN(i + RS);
    }
  };
  if (!skyless) {
    q.length = 0;
    for (let rz = 1; rz < RW - 1; rz++) for (let rx = 1; rx < RW - 1; rx++) {
      const col = rx + RW * rz;
      const t = top[col];
      const m = Math.max(top[col - 1], top[col + 1], top[col - RW], top[col + RW]);
      for (let y = t + 1; y <= m && y < YT; y++) q.push(col + RS * y);
    }
    spread(sky, 2);
  }
  // Blocklicht
  q.length = 0;
  for (let i = 0; i < rb.length; i++) { const b = rb[i]; if (b && lightT[b]) { blk[i] = lightT[b]; q.push(i); } }
  spread(blk, 2);

  const bufs = [new Buf(), new Buf(), new Buf()];
  const add = (g, vs, uvs, ls) => {
    const B = bufs[g];
    for (let k = 0; k < 4; k++) { B.pos.push(vs[k][0], vs[k][1], vs[k][2]); B.uv.push(uvs[k][0], uvs[k][1]); B.light.push(ls[k][0], ls[k][1], ls[k][2]); }
    const n = B.n;
    if (ls[0][3] + ls[2][3] > ls[1][3] + ls[3][3]) B.idx.push(n + 1, n + 2, n + 3, n + 1, n + 3, n);
    else B.idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
    B.n += 4;
  };

  for (let y = 0; y < YT; y++) {
    for (let z = 0; z < CS; z++) for (let x = 0; x < CS; x++) {
      const rx = x + LP, rz = z + LP;
      const ci = rx + RW * rz + RS * y;
      const b = rb[ci];
      if (!b) continue;
      const d = DEF[b];
      const g = groupT[b];
      const wx = x, wy = y, wz = z;
      if (d.cross) {
        const s = sky[ci] / 15, bl = blk[ci] / 15;
        const uv = tileUV(TILE[d.tiles[2]]);
        const L = [s, bl, 1.0, s + bl];
        const q1 = [[wx + 0.1, wy, wz + 0.1], [wx + 0.9, wy, wz + 0.9], [wx + 0.9, wy + 1, wz + 0.9], [wx + 0.1, wy + 1, wz + 0.1]];
        const q2 = [[wx + 0.9, wy, wz + 0.1], [wx + 0.1, wy, wz + 0.9], [wx + 0.1, wy + 1, wz + 0.9], [wx + 0.9, wy + 1, wz + 0.1]];
        const uvs = [[uv[0], uv[1]], [uv[2], uv[1]], [uv[2], uv[3]], [uv[0], uv[3]]];
        add(1, q1, uvs, [L, L, L, L]); add(1, q2, uvs, [L, L, L, L]);
        continue;
      }
      if (d.portal) {
        const s = sky[ci] / 15, bl = blk[ci] / 15;
        const uv = tileUV(TILE.portal);
        const L = [Math.max(s, 0.9), Math.max(bl, 0.9), 1.0, 2];
        const uvs = [[uv[0], uv[1]], [uv[2], uv[1]], [uv[2], uv[3]], [uv[0], uv[3]]];
        const qq = d.portal === 'x'
          ? [[wx, wy, wz + 0.5], [wx + 1, wy, wz + 0.5], [wx + 1, wy + 1, wz + 0.5], [wx, wy + 1, wz + 0.5]]
          : [[wx + 0.5, wy, wz], [wx + 0.5, wy, wz + 1], [wx + 0.5, wy + 1, wz + 1], [wx + 0.5, wy + 1, wz]];
        add(2, qq, uvs, [L, L, L, L]);
        continue;
      }
      if (d.special === 'endportal') {
        const uv = tileUV(TILE.end_portal);
        const L = [1, 1, 1, 2];
        add(0, [[wx, wy + 0.75, wz + 1], [wx + 1, wy + 0.75, wz + 1], [wx + 1, wy + 0.75, wz], [wx, wy + 0.75, wz]], [[uv[0], uv[1]], [uv[2], uv[1]], [uv[2], uv[3]], [uv[0], uv[3]]], [L, L, L, L]);
        continue;
      }
      const isFluid = fluidT[b];
      const hgt = d.h || 1;
      for (let f = 0; f < 6; f++) {
        const F = FACE[f];
        const nx = rx + F.n[0], ny = y + F.n[1], nz = rz + F.n[2];
        let nb = 0;
        if (ny >= 0 && ny < YT) nb = rb[nx + RW * nz + RS * ny];
        if (nb) {
          if (opaqueT[nb] && !(DEF[nb].h)) continue;
          if (nb === b && cullSame[b]) continue;
        }
        if (isFluid && nb && fluidT[nb] && nb === b) continue;
        // Licht an den 4 Ecken
        const ni = nx + RW * nz + RS * Math.min(Math.max(ny, 0), YT - 1);
        const [a1, a2] = F.t;
        const ls = [];
        const vs = [];
        const tile = faceTile(d, f);
        const uv = tileUV(tile);
        for (let k = 0; k < 4; k++) {
          const c = F.c[k];
          const s1 = c[a1] * 2 - 1, s2 = c[a2] * 2 - 1;
          const o1 = [0, 0, 0], o2 = [0, 0, 0];
          o1[a1] = s1; o2[a2] = s2;
          const i1 = ni + o1[0] + RW * o1[2] + RS * o1[1];
          const i2 = ni + o2[0] + RW * o2[2] + RS * o2[1];
          const ic = ni + o1[0] + o2[0] + RW * (o1[2] + o2[2]) + RS * (o1[1] + o2[1]);
          const op1 = opaqueT[rb[i1]], op2 = opaqueT[rb[i2]];
          let ss = sky[ni], bb = blk[ni], cnt = 1;
          const nOpaque = nb && opaqueT[nb];
          if (nOpaque) { ss = 0; bb = 0; }
          if (!op1) { ss += sky[i1]; bb += blk[i1]; }
          if (!op2) { ss += sky[i2]; bb += blk[i2]; }
          if (!(op1 && op2) && !opaqueT[rb[ic]]) { ss += sky[ic]; bb += blk[ic]; }
          ss /= 4; bb /= 4;
          const lv = ss / 15 + bb / 15;
          ls.push([ss / 15, bb / 15, F.shade, lv]);
          let vy = c[1];
          if (isFluid && vy === 1) { const above = rb[rx + RW * rz + RS * Math.min(y + 1, YT - 1)]; if (above !== b) vy = 0.88; }
          else if (hgt !== 1) vy = vy * hgt;
          vs.push([x + c[0], y + vy, z + c[2]]);
        }
        add(g, vs, [[uv[0], uv[1]], [uv[2], uv[1]], [uv[2], uv[3]], [uv[0], uv[3]]], ls);
      }
    }
  }
  return bufs.map((B) => ({
    pos: new Float32Array(B.pos), uv: new Float32Array(B.uv), light: new Float32Array(B.light),
    idx: B.n > 65535 ? new Uint32Array(B.idx) : new Uint16Array(B.idx), n: B.n,
  }));
}

// kleine Block-Geometrie (Hand, Item-Drops)
export function blockGeometryData(d) {
  const pos = [], uv = [], idx = [], col = [];
  FACE.forEach((F, f) => {
    const u = tileUV(faceTile(d, f));
    const n = pos.length / 3;
    F.c.forEach((c, k) => { pos.push(c[0] - 0.5, c[1] - 0.5, c[2] - 0.5); uv.push(k === 0 || k === 3 ? u[0] : u[2], k < 2 ? u[1] : u[3]); const s = F.shade; col.push(s, s, s); });
    idx.push(n, n + 1, n + 2, n, n + 2, n + 3);
  });
  return { pos, uv, idx, col };
}
