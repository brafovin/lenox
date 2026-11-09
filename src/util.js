// Zufall, Hash und Perlin-Noise
export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash3(x, y, z, s) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 1103515245) + Math.imul(z | 0, 668265263) + Math.imul(s | 0, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

export function seedFromString(str) {
  if (str === undefined || str === null || str === '') return (Math.random() * 2 ** 31) | 0;
  if (/^-?\d+$/.test(str)) return parseInt(str, 10) | 0;
  let h = 1779033703;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h | 0;
}

const G3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];

export class Noise {
  constructor(seed) {
    const r = mulberry32(seed);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) { const j = (r() * (i + 1)) | 0; const t = p[i]; p[i] = p[j]; p[j] = t; }
    this.p = new Uint8Array(512);
    for (let i = 0; i < 512; i++) this.p[i] = p[i & 255];
  }
  n2(x, y) {
    const p = this.p;
    const X = Math.floor(x), Y = Math.floor(y);
    x -= X; y -= Y;
    const xi = X & 255, yi = Y & 255;
    const u = x * x * x * (x * (x * 6 - 15) + 10), v = y * y * y * (y * (y * 6 - 15) + 10);
    const g = (h, dx, dy) => { const q = G3[h % 12]; return q[0] * dx + q[1] * dy; };
    const aa = p[p[xi] + yi], ab = p[p[xi] + yi + 1], ba = p[p[xi + 1] + yi], bb = p[p[xi + 1] + yi + 1];
    const x1 = g(aa, x, y) + u * (g(ba, x - 1, y) - g(aa, x, y));
    const x2 = g(ab, x, y - 1) + u * (g(bb, x - 1, y - 1) - g(ab, x, y - 1));
    return x1 + v * (x2 - x1);
  }
  n3(x, y, z) {
    const p = this.p;
    const X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
    x -= X; y -= Y; z -= Z;
    const xi = X & 255, yi = Y & 255, zi = Z & 255;
    const f = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const u = f(x), v = f(y), w = f(z);
    const g = (h, dx, dy, dz) => { const q = G3[h % 12]; return q[0] * dx + q[1] * dy + q[2] * dz; };
    const A = p[xi] + yi, AA = p[A] + zi, AB = p[A + 1] + zi, B = p[xi + 1] + yi, BA = p[B] + zi, BB = p[B + 1] + zi;
    const l = (a, b, t) => a + t * (b - a);
    return l(
      l(l(g(p[AA], x, y, z), g(p[BA], x - 1, y, z), u), l(g(p[AB], x, y - 1, z), g(p[BB], x - 1, y - 1, z), u), v),
      l(l(g(p[AA + 1], x, y, z - 1), g(p[BA + 1], x - 1, y, z - 1), u), l(g(p[AB + 1], x, y - 1, z - 1), g(p[BB + 1], x - 1, y - 1, z - 1), u), v),
      w);
  }
  fbm2(x, y, oct = 4) {
    let a = 1, f = 1, s = 0, n = 0;
    for (let i = 0; i < oct; i++) { s += a * this.n2(x * f, y * f); n += a; a *= 0.5; f *= 2; }
    return s / n;
  }
  fbm3(x, y, z, oct = 3) {
    let a = 1, f = 1, s = 0, n = 0;
    for (let i = 0; i < oct; i++) { s += a * this.n3(x * f, y * f, z * f); n += a; a *= 0.5; f *= 2; }
    return s / n;
  }
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
