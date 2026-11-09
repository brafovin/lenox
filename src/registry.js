// Blöcke, Items, Texturen, Icons, Rezepte
import { mulberry32 } from './util.js';

export const ID = {};
export const DEF = [];
export const TILE = {};
const TILE_LIST = [];
let nb = 1, ni = 256;
DEF[0] = { id: 0, name: 'AIR', label: 'Luft', block: true, solid: false, opaque: false, hardness: 0, group: 'cutout', tiles: ['stone', 'stone', 'stone'], maxStack: 64, drops: null, air: true };

// ---------- Texturen (prozedural gezeichnet, 16x16) ----------
const rgb = (r, g, b, a = 1) => `rgba(${Math.max(0, Math.min(255, r)) | 0},${Math.max(0, Math.min(255, g)) | 0},${Math.max(0, Math.min(255, b)) | 0},${a})`;
const P = (g, x, y, c) => { g.fillStyle = c; g.fillRect(x, y, 1, 1); };
function noisy(g, r, base, v) {
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const k = (r() - 0.5) * v; P(g, x, y, rgb(base[0] + k, base[1] + k, base[2] + k)); }
}
function speck(g, r, col, n, sz = 1) {
  for (let i = 0; i < n; i++) { const x = (r() * 16) | 0, y = (r() * 16) | 0; for (let a = 0; a < sz; a++) for (let b = 0; b < sz; b++) if (x + a < 16 && y + b < 16) P(g, x + a, y + b, col); }
}
function bricks(g, r, base, mortar, rows, v = 16) {
  noisy(g, r, base, v);
  const rh = 16 / rows;
  for (let j = 0; j < rows; j++) {
    const y0 = (j * rh) | 0;
    for (let x = 0; x < 16; x++) P(g, x, y0, mortar);
    const off = j % 2 ? 4 : 0;
    for (let x = off; x < 16; x += 8) for (let y = y0; y < y0 + rh; y++) P(g, x % 16, y, mortar);
  }
}
const stoneGen = (g, r) => noisy(g, r, [125, 125, 125], 26);
const GEN = {
  stone: stoneGen,
  dirt: (g, r) => { noisy(g, r, [134, 96, 67], 24); speck(g, r, rgb(100, 70, 50), 8); },
  grass_top: (g, r) => { noisy(g, r, [95, 159, 53], 28); speck(g, r, rgb(120, 180, 70), 12); },
  grass_side: (g, r) => {
    GEN.dirt(g, r);
    for (let x = 0; x < 16; x++) { const h = 3 + ((r() * 2) | 0); for (let y = 0; y < h; y++) { const k = (r() - 0.5) * 26; P(g, x, y, rgb(95 + k, 159 + k, 53 + k)); } }
  },
  cobble: (g, r) => {
    noisy(g, r, [118, 118, 118], 22);
    const rows = [0, 5, 10];
    rows.forEach((y0, j) => {
      const hgt = j === 2 ? 6 : 5;
      for (let x = 0; x < 16; x++) P(g, x, y0, rgb(70, 70, 70));
      let x = (r() * 4) | 0;
      while (x < 16) { for (let y = y0; y < y0 + hgt; y++) P(g, x, y, rgb(70, 70, 70)); x += 4 + ((r() * 4) | 0); }
    });
  },
  sand: (g, r) => { noisy(g, r, [219, 207, 163], 14); speck(g, r, rgb(200, 188, 145), 8); },
  gravel: (g, r) => { noisy(g, r, [132, 124, 122], 44); speck(g, r, rgb(80, 78, 78), 14); speck(g, r, rgb(170, 165, 160), 10); },
  log_side: (g, r) => { for (let x = 0; x < 16; x++) { const s = (x % 4 === 0 || x % 7 === 3) ? -22 : 0; for (let y = 0; y < 16; y++) { const k = (r() - 0.5) * 12 + s; P(g, x, y, rgb(102 + k, 81 + k, 50 + k)); } } },
  log_top: (g, r) => {
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
      const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5)); const ring = (d | 0) % 3 === 0 ? -16 : 0; const bark = d > 6.5;
      const k = (r() - 0.5) * 10 + ring; bark ? P(g, x, y, rgb(95 + k, 75 + k, 45 + k)) : P(g, x, y, rgb(166 + k, 133 + k, 82 + k));
    }
  },
  leaves: (g, r) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { if (r() < 0.2) continue; const k = (r() - 0.5) * 55; P(g, x, y, rgb(56 + k, 128 + k, 38 + k)); } },
  planks: (g, r) => {
    noisy(g, r, [160, 130, 80], 14);
    for (let y = 3; y < 16; y += 4) for (let x = 0; x < 16; x++) P(g, x, y, rgb(120, 94, 55));
    for (let j = 0; j < 4; j++) { const x = (r() * 16) | 0; for (let y = j * 4; y < j * 4 + 3; y++) P(g, x, y, rgb(130, 102, 60)); }
  },
  sandstone_side: (g, r) => { noisy(g, r, [216, 203, 155], 10); for (let x = 0; x < 16; x++) { P(g, x, 3, rgb(190, 176, 128)); P(g, x, 12, rgb(190, 176, 128)); } },
  sandstone_top: (g, r) => noisy(g, r, [222, 210, 165], 8),
  coal_ore: null, iron_ore: null, gold_ore: null, diamond_ore: null, redstone_ore: null, lapis_ore: null,
  bedrock: (g, r) => { noisy(g, r, [70, 70, 70], 60); speck(g, r, rgb(20, 20, 20), 22, 2); speck(g, r, rgb(110, 110, 110), 8); },
  water: (g, r) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const k = (r() - 0.5) * 30; P(g, x, y, rgb(36 + k, 90 + k, 205 + k, 0.7)); } },
  lava: (g, r) => { noisy(g, r, [225, 95, 12], 70); speck(g, r, rgb(255, 215, 60), 18, 2); speck(g, r, rgb(160, 40, 5), 10, 2); },
  obsidian: (g, r) => { noisy(g, r, [22, 14, 38], 16); speck(g, r, rgb(60, 36, 100), 12); },
  craft_top: (g, r) => { noisy(g, r, [160, 130, 80], 14); for (let i = 0; i < 16; i += 5) for (let k = 0; k < 16; k++) { P(g, i, k, rgb(90, 66, 35)); P(g, k, i, rgb(90, 66, 35)); } },
  craft_side: (g, r) => {
    noisy(g, r, [150, 118, 70], 14);
    for (let x = 0; x < 16; x++) { P(g, x, 0, rgb(80, 55, 30)); P(g, x, 1, rgb(80, 55, 30)); P(g, x, 15, rgb(100, 72, 40)); }
    for (let y = 3; y < 14; y++) { P(g, 3, y, rgb(110, 110, 120)); P(g, 4, y, rgb(110, 110, 120)); P(g, 11, y, rgb(140, 90, 40)); P(g, 12, y, rgb(140, 90, 40)); }
    for (let x = 6; x < 10; x++) P(g, x, 5, rgb(190, 190, 200));
  },
  furnace_front: (g, r) => { GEN.cobble(g, r); for (let y = 8; y < 14; y++) for (let x = 4; x < 12; x++) P(g, x, y, rgb(20, 20, 20)); for (let x = 4; x < 12; x++) P(g, x, 13, rgb(230, 120, 20)); for (let x = 3; x < 13; x++) { P(g, x, 3, rgb(30, 30, 30)); P(g, x, 4, rgb(30, 30, 30)); } },
  furnace_side: (g, r) => GEN.cobble(g, r),
  furnace_top: (g, r) => { noisy(g, r, [98, 98, 98], 14); for (let i = 0; i < 16; i++) { P(g, i, 0, rgb(60, 60, 60)); P(g, 0, i, rgb(60, 60, 60)); P(g, i, 15, rgb(60, 60, 60)); P(g, 15, i, rgb(60, 60, 60)); } },
  glass: (g) => { g.clearRect(0, 0, 16, 16); for (let i = 0; i < 16; i++) { P(g, i, 0, rgb(200, 230, 240)); P(g, i, 15, rgb(200, 230, 240)); P(g, 0, i, rgb(200, 230, 240)); P(g, 15, i, rgb(200, 230, 240)); } for (let i = 3; i < 7; i++) P(g, i, i, rgb(255, 255, 255, 0.8)); },
  cactus_side: (g, r) => { noisy(g, r, [14, 108, 30], 24); for (let y = 0; y < 16; y += 3) for (let x = 1; x < 16; x += 4) P(g, x, y, rgb(200, 220, 170)); for (let y = 0; y < 16; y++) { P(g, 0, y, rgb(8, 70, 20)); P(g, 15, y, rgb(8, 70, 20)); } },
  cactus_top: (g, r) => { noisy(g, r, [30, 130, 40], 20); for (let i = 0; i < 16; i++) { P(g, i, 0, rgb(10, 80, 24)); P(g, 0, i, rgb(10, 80, 24)); P(g, i, 15, rgb(10, 80, 24)); P(g, 15, i, rgb(10, 80, 24)); } },
  netherrack: (g, r) => { noisy(g, r, [112, 44, 44], 34); speck(g, r, rgb(70, 22, 24), 14, 2); speck(g, r, rgb(150, 70, 66), 8); },
  soul_sand: (g, r) => { noisy(g, r, [84, 66, 54], 16); for (let i = 0; i < 6; i++) { const x = 1 + ((r() * 12) | 0), y = 1 + ((r() * 12) | 0); P(g, x, y, rgb(40, 30, 26)); P(g, x + 1, y, rgb(40, 30, 26)); P(g, x, y + 1, rgb(54, 42, 34)); } },
  glowstone: (g, r) => { noisy(g, r, [200, 150, 70], 50); speck(g, r, rgb(255, 235, 150), 22, 2); speck(g, r, rgb(150, 100, 40), 10, 2); },
  nether_brick: (g, r) => bricks(g, r, [56, 28, 34], rgb(24, 10, 14), 4, 10),
  ancient_side: (g, r) => { noisy(g, r, [96, 66, 56], 20); for (let y = 0; y < 16; y += 4) for (let x = 0; x < 16; x++) P(g, x, y, rgb(60, 38, 34)); speck(g, r, rgb(150, 110, 90), 10); },
  ancient_top: (g, r) => { noisy(g, r, [126, 94, 78], 20); for (let i = 0; i < 16; i += 5) for (let k = 0; k < 16; k++) { P(g, i, k, rgb(80, 54, 46)); P(g, k, i, rgb(80, 54, 46)); } },
  end_stone: (g, r) => { noisy(g, r, [222, 222, 160], 16); speck(g, r, rgb(190, 190, 120), 14); },
  portal: (g, r) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const s = Math.sin(x * 0.7 + y * 0.4) * 30 + (r() - 0.5) * 50; P(g, x, y, rgb(120 + s, 30 + s * 0.5, 210 + s, 0.62)); } },
  mossy: (g, r) => { GEN.cobble(g, r); speck(g, r, rgb(70, 120, 50), 40); speck(g, r, rgb(90, 140, 60), 14, 2); },
  stone_bricks: (g, r) => bricks(g, r, [126, 126, 126], rgb(80, 80, 80), 4, 14),
  frame_top: (g, r) => { noisy(g, r, [66, 108, 92], 14); for (let y = 3; y < 13; y++) for (let x = 3; x < 13; x++) P(g, x, y, rgb(34, 60, 50)); for (let y = 5; y < 11; y++) for (let x = 5; x < 11; x++) P(g, x, y, rgb(10, 24, 20)); },
  frame_side: (g, r) => { noisy(g, r, [222, 222, 160], 12); for (let y = 0; y < 9; y++) for (let x = 0; x < 16; x++) { const k = (r() - 0.5) * 14; P(g, x, y, rgb(66 + k, 108 + k, 92 + k)); } },
  frame_top_eye: (g, r) => { GEN.frame_top(g, r); for (let y = 4; y < 12; y++) for (let x = 4; x < 12; x++) { const d = Math.hypot(x - 7.5, y - 7.5); if (d < 4) P(g, x, y, d < 1.8 ? rgb(10, 50, 20) : rgb(70, 200, 110)); } },
  end_portal: (g, r) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) P(g, x, y, rgb(6, 10, 20)); speck(g, r, rgb(60, 220, 190), 18); speck(g, r, rgb(255, 255, 255), 6); },
  chest_top: (g, r) => { noisy(g, r, [165, 115, 45], 12); for (let i = 0; i < 16; i++) { P(g, i, 0, rgb(90, 55, 20)); P(g, 0, i, rgb(90, 55, 20)); P(g, i, 15, rgb(90, 55, 20)); P(g, 15, i, rgb(90, 55, 20)); } },
  chest_side: (g, r) => { noisy(g, r, [155, 105, 40], 12); for (let x = 0; x < 16; x++) { P(g, x, 0, rgb(90, 55, 20)); P(g, x, 15, rgb(90, 55, 20)); P(g, x, 5, rgb(110, 70, 28)); } for (let y = 0; y < 16; y++) { P(g, 0, y, rgb(90, 55, 20)); P(g, 15, y, rgb(90, 55, 20)); } },
  chest_front: (g, r) => { GEN.chest_side(g, r); for (let y = 4; y < 9; y++) for (let x = 7; x < 9; x++) P(g, x, y, rgb(210, 210, 215)); for (let x = 7; x < 9; x++) P(g, x, 9, rgb(60, 60, 70)); },
  torch: (g) => { g.clearRect(0, 0, 16, 16); for (let y = 7; y < 16; y++) { P(g, 7, y, rgb(120, 85, 40)); P(g, 8, y, rgb(96, 66, 30)); } for (let y = 4; y < 7; y++) { P(g, 7, y, rgb(255, 200, 40)); P(g, 8, y, rgb(255, 160, 20)); } P(g, 7, 3, rgb(255, 240, 120)); P(g, 8, 3, rgb(255, 210, 60)); },
  flower_red: (g) => { g.clearRect(0, 0, 16, 16); for (let y = 8; y < 16; y++) P(g, 8, y, rgb(40, 130, 30)); P(g, 7, 12, rgb(40, 130, 30)); P(g, 9, 10, rgb(40, 130, 30)); for (let y = 4; y < 8; y++) for (let x = 6; x < 11; x++) P(g, x, y, rgb(210, 30, 40)); P(g, 8, 6, rgb(250, 220, 60)); },
  flower_yellow: (g) => { g.clearRect(0, 0, 16, 16); for (let y = 8; y < 16; y++) P(g, 8, y, rgb(40, 130, 30)); P(g, 7, 12, rgb(40, 130, 30)); for (let y = 4; y < 8; y++) for (let x = 6; x < 11; x++) P(g, x, y, rgb(250, 220, 40)); P(g, 8, 6, rgb(230, 150, 20)); },
  tall_grass: (g, r) => { g.clearRect(0, 0, 16, 16); for (let i = 0; i < 7; i++) { const x = 1 + ((r() * 14) | 0), h = 5 + ((r() * 9) | 0); for (let y = 16 - h; y < 16; y++) P(g, x, y, rgb(70 + (r() * 40), 140 + (r() * 30), 40)); } },
  dead_bush: (g, r) => { g.clearRect(0, 0, 16, 16); for (let i = 0; i < 5; i++) { let x = 8, y = 15; const dx = (r() - 0.5) * 1.4; for (let k = 0; k < 8; k++) { P(g, x | 0, y, rgb(110, 76, 40)); x += dx; y--; } } },
  jlog_side: (g, r) => { for (let x = 0; x < 16; x++) { const s = (x % 5 === 0) ? -25 : 0; for (let y = 0; y < 16; y++) { const k = (r() - 0.5) * 14 + s; P(g, x, y, rgb(88 + k, 70 + k, 30 + k)); } } speck(g, r, rgb(50, 110, 40), 12); },
  jlog_top: (g, r) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5)); const k = (r() - 0.5) * 10 + ((d | 0) % 3 === 0 ? -14 : 0); d > 6.5 ? P(g, x, y, rgb(80 + k, 64 + k, 28 + k)) : P(g, x, y, rgb(170 + k, 130 + k, 80 + k)); } },
  jleaves: (g, r) => { for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { if (r() < 0.16) continue; const k = (r() - 0.5) * 50; P(g, x, y, rgb(30 + k, 120 + k, 20 + k)); } },
  wool: (g, r) => { noisy(g, r, [235, 235, 235], 16); },
  path_top: (g, r) => { noisy(g, r, [150, 120, 70], 22); speck(g, r, rgb(120, 96, 52), 12); },
  magma: (g, r) => { noisy(g, r, [90, 26, 10], 30); for (let i = 0; i < 9; i++) { const x = (r() * 14) | 0, y = (r() * 14) | 0; for (let k = 0; k < 4; k++) P(g, x + k, y + (k % 2), rgb(255, 150 + r() * 80, 20)); } },
  plank_door: null,
};
const oreCol = { coal_ore: [24, 24, 24], iron_ore: [216, 175, 147], gold_ore: [252, 238, 75], diamond_ore: [92, 219, 213], redstone_ore: [210, 20, 20], lapis_ore: [34, 70, 190] };
for (const k in oreCol) {
  GEN[k] = (g, r) => {
    stoneGen(g, r);
    const c = oreCol[k];
    for (let i = 0; i < 7; i++) {
      const x = 1 + ((r() * 12) | 0), y = 1 + ((r() * 12) | 0);
      const pts = [[0, 0], [1, 0], [0, 1], [1, 1], [2, 1], [-1, 0]];
      const n = 3 + ((r() * 3) | 0);
      for (let j = 0; j < n; j++) { const q = pts[j]; const v = (r() - 0.5) * 40; P(g, x + q[0], y + q[1], rgb(c[0] + v, c[1] + v, c[2] + v)); }
    }
  };
}
delete GEN.plank_door;
Object.keys(GEN).forEach((k, i) => { TILE[k] = i; TILE_LIST.push(k); });

export const TILE_COLS = 16;
export function buildAtlas() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = TILE_COLS * 16;
  const ctx = cv.getContext('2d');
  const tc = document.createElement('canvas'); tc.width = tc.height = 16;
  const tg = tc.getContext('2d');
  TILE_LIST.forEach((name, i) => {
    tg.clearRect(0, 0, 16, 16);
    GEN[name](tg, mulberry32(1000 + i * 77));
    ctx.drawImage(tc, (i % TILE_COLS) * 16, ((i / TILE_COLS) | 0) * 16);
  });
  return cv;
}
export function tileCanvas(name) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 16;
  const g = cv.getContext('2d');
  const i = TILE[name];
  GEN[name](g, mulberry32(1000 + i * 77));
  return cv;
}
export function crackCanvases() {
  const out = [];
  const r = mulberry32(555);
  const pts = [];
  for (let k = 0; k < 6; k++) { let x = 3 + r() * 10, y = 3 + r() * 10; const a = r() * 6.28; for (let s = 0; s < 22; s++) { pts.push([x | 0, y | 0]); x += Math.cos(a + (r() - 0.5) * 1.6) * 0.9 + (r() - 0.5); y += Math.sin(a + (r() - 0.5) * 1.6) * 0.9 + (r() - 0.5); } }
  for (let s = 0; s < 10; s++) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 16;
    const g = cv.getContext('2d');
    const n = Math.floor(pts.length * (s + 1) / 10);
    for (let i = 0; i < n; i++) { const p = pts[i]; if (p[0] >= 0 && p[0] < 16 && p[1] >= 0 && p[1] < 16) P(g, p[0], p[1], 'rgba(0,0,0,0.75)'); }
    out.push(cv);
  }
  return out;
}

// ---------- Blöcke ----------
function B(name, label, tiles, o = {}) {
  const id = nb++;
  ID[name] = id;
  DEF[id] = Object.assign({ id, name, label, block: true, solid: true, opaque: true, hardness: 1, group: 'opaque', maxStack: 64, tool: null, tier: 0, needs: false }, o);
  const t = tiles;
  DEF[id].tiles = typeof t === 'string' ? [t, t, t] : t;
  return id;
}
const PICK = { tool: 'pickaxe', needs: true };
B('STONE', 'Stein', 'stone', { hardness: 1.5, drop: 'COBBLE', ...PICK });
B('GRASS', 'Grasblock', ['grass_top', 'dirt', 'grass_side'], { hardness: 0.6, tool: 'shovel', drop: 'DIRT' });
B('DIRT', 'Erde', 'dirt', { hardness: 0.5, tool: 'shovel' });
B('COBBLE', 'Bruchstein', 'cobble', { hardness: 2, ...PICK });
B('SAND', 'Sand', 'sand', { hardness: 0.5, tool: 'shovel', gravity: true });
B('GRAVEL', 'Kies', 'gravel', { hardness: 0.6, tool: 'shovel', gravity: true });
B('LOG', 'Eichenstamm', ['log_top', 'log_top', 'log_side'], { hardness: 2, tool: 'axe' });
B('LEAVES', 'Eichenlaub', 'leaves', { hardness: 0.2, opaque: false, group: 'cutout', tool: 'axe' });
B('PLANKS', 'Holzbretter', 'planks', { hardness: 2, tool: 'axe' });
B('SANDSTONE', 'Sandstein', ['sandstone_top', 'sandstone_top', 'sandstone_side'], { hardness: 0.8, ...PICK });
B('COAL_ORE', 'Kohleerz', 'coal_ore', { hardness: 3, drop: 'COAL', ...PICK });
B('IRON_ORE', 'Eisenerz', 'iron_ore', { hardness: 3, tier: 1, ...PICK });
B('GOLD_ORE', 'Golderz', 'gold_ore', { hardness: 3, tier: 2, ...PICK });
B('DIAMOND_ORE', 'Diamanterz', 'diamond_ore', { hardness: 3, tier: 2, drop: 'DIAMOND', ...PICK });
B('REDSTONE_ORE', 'Redstone-Erz', 'redstone_ore', { hardness: 3, tier: 2, drop: ['REDSTONE', 4, 5], ...PICK });
B('LAPIS_ORE', 'Lapislazuli-Erz', 'lapis_ore', { hardness: 3, tier: 1, drop: ['LAPIS', 4, 8], ...PICK });
B('BEDROCK', 'Grundgestein', 'bedrock', { hardness: -1 });
B('WATER', 'Wasser', 'water', { solid: false, opaque: false, group: 'trans', fluid: 'water', hardness: -1 });
B('LAVA', 'Lava', 'lava', { solid: false, opaque: false, group: 'opaque', fluid: 'lava', light: 13, hardness: -1 });
B('OBSIDIAN', 'Obsidian', 'obsidian', { hardness: 50, tier: 3, ...PICK });
B('CRAFTING_TABLE', 'Werkbank', ['craft_top', 'planks', 'craft_side'], { hardness: 2.5, tool: 'axe', ui: 'craft' });
B('FURNACE', 'Ofen', ['furnace_top', 'furnace_top', 'furnace_front'], { hardness: 3.5, ui: 'furnace', ...PICK });
B('GLASS', 'Glas', 'glass', { hardness: 0.3, opaque: false, group: 'cutout', drop: null, sameCull: true });
B('CACTUS', 'Kaktus', ['cactus_top', 'cactus_top', 'cactus_side'], { hardness: 0.4, opaque: false, group: 'cutout', damage: true });
B('NETHERRACK', 'Netherrack', 'netherrack', { hardness: 0.4, ...PICK });
B('SOUL_SAND', 'Seelensand', 'soul_sand', { hardness: 0.5, tool: 'shovel' });
B('GLOWSTONE', 'Leuchtstein', 'glowstone', { hardness: 0.3, light: 15 });
B('NETHER_BRICK', 'Netherziegel', 'nether_brick', { hardness: 2, ...PICK });
B('ANCIENT_DEBRIS', 'Antiker Schrott', ['ancient_top', 'ancient_top', 'ancient_side'], { hardness: 30, tier: 3, ...PICK });
B('END_STONE', 'Endstein', 'end_stone', { hardness: 3, ...PICK });
B('PORTAL_X', 'Portal', 'portal', { solid: false, opaque: false, group: 'trans', hardness: -2, portal: 'x' });
B('PORTAL_Z', 'Portal', 'portal', { solid: false, opaque: false, group: 'trans', hardness: -2, portal: 'z' });
B('MOSSY_COBBLE', 'Bemooster Bruchstein', 'mossy', { hardness: 2, ...PICK });
B('STONE_BRICKS', 'Steinziegel', 'stone_bricks', { hardness: 1.5, ...PICK });
B('END_FRAME', 'Endportalrahmen', ['frame_top', 'end_stone', 'frame_side'], { hardness: -1, h: 13 / 16, special: 'frame' });
B('END_FRAME_EYE', 'Endportalrahmen', ['frame_top_eye', 'end_stone', 'frame_side'], { hardness: -1, h: 13 / 16, special: 'frame' });
B('END_PORTAL', 'Endportal', 'end_portal', { solid: false, opaque: false, group: 'opaque', hardness: -1, special: 'endportal', h: 0.75 });
B('CHEST', 'Truhe', ['chest_top', 'chest_top', 'chest_side', 'chest_front'], { hardness: 2.5, tool: 'axe', ui: 'chest' });
B('TORCH', 'Fackel', 'torch', { solid: false, opaque: false, group: 'cutout', cross: true, hardness: 0, light: 14, torch: true });
B('FLOWER_RED', 'Mohn', 'flower_red', { solid: false, opaque: false, group: 'cutout', cross: true, hardness: 0, plant: true });
B('FLOWER_YELLOW', 'Löwenzahn', 'flower_yellow', { solid: false, opaque: false, group: 'cutout', cross: true, hardness: 0, plant: true });
B('TALL_GRASS', 'Gras', 'tall_grass', { solid: false, opaque: false, group: 'cutout', cross: true, hardness: 0, plant: true, drop: null });
B('DEAD_BUSH', 'Toter Busch', 'dead_bush', { solid: false, opaque: false, group: 'cutout', cross: true, hardness: 0, plant: true, drop: 'STICK' });
B('JUNGLE_LOG', 'Dschungelstamm', ['jlog_top', 'jlog_top', 'jlog_side'], { hardness: 2, tool: 'axe' });
B('JUNGLE_LEAVES', 'Dschungellaub', 'jleaves', { hardness: 0.2, opaque: false, group: 'cutout', tool: 'axe' });
B('WOLLE', 'Wolle', 'wool', { hardness: 0.8 });
B('PATH', 'Dorfweg', ['path_top', 'dirt', 'dirt'], { hardness: 0.65, tool: 'shovel', drop: 'DIRT' });
B('MAGMA', 'Magmablock', 'magma', { hardness: 0.5, light: 3, ...PICK });
if (nb >= 256) throw new Error('zu viele Blöcke');
// Skylight-Tag: die Gesteinsstruktur (Blocklight Emission) wird im Mesher gelesen

// ---------- Items ----------
function I(name, label, ic, o = {}) {
  const id = ni++;
  ID[name] = id;
  DEF[id] = Object.assign({ id, name, label, maxStack: 64, ic }, o);
  return id;
}
export const MATS = {
  WOODEN: { label: 'Holz', tier: 0, speed: 2, color: '#a07a44', sword: 4, axe: 3, pickaxe: 2, shovel: 2.5, dur: 59 },
  STONE: { label: 'Stein', tier: 1, speed: 4, color: '#8b8b8b', sword: 5, axe: 4, pickaxe: 3, shovel: 3.5, dur: 131 },
  GOLDEN: { label: 'Gold', tier: 0, speed: 12, color: '#f7d63a', sword: 4, axe: 3, pickaxe: 2, shovel: 2.5, dur: 32 },
  IRON: { label: 'Eisen', tier: 2, speed: 6, color: '#dcdcdc', sword: 6, axe: 5, pickaxe: 4, shovel: 4.5, dur: 250 },
  DIAMOND: { label: 'Diamant', tier: 3, speed: 8, color: '#43e8d4', sword: 7, axe: 6, pickaxe: 5, shovel: 5.5, dur: 1561 },
  NETHERITE: { label: 'Netherit', tier: 4, speed: 9, color: '#54464f', sword: 8, axe: 7, pickaxe: 6, shovel: 6.5, dur: 2031 },
};
const TYPE_LABEL = { sword: 'schwert', pickaxe: 'spitzhacke', axe: 'axt', shovel: 'schaufel' };
for (const m in MATS) {
  for (const t of ['sword', 'pickaxe', 'axe', 'shovel']) {
    const M = MATS[m];
    I(`${m}_${t.toUpperCase()}`, `${M.label}${TYPE_LABEL[t]}`, ['tool', t, M.color], { maxStack: 1, tool: { type: t, tier: M.tier, speed: M.speed, dmg: M[t] ?? M.sword, dur: M.dur } });
  }
}
I('STICK', 'Stock', ['stick', '#9a7240']);
I('COAL', 'Kohle', ['coal', '#202020']);
I('CHARCOAL', 'Holzkohle', ['coal', '#4a3a2c']);
I('IRON_INGOT', 'Eisenbarren', ['ingot', '#d8d8d8']);
I('GOLD_INGOT', 'Goldbarren', ['ingot', '#f7d63a']);
I('DIAMOND', 'Diamant', ['gem', '#43e8d4']);
I('REDSTONE', 'Redstone', ['dust', '#d01818']);
I('LAPIS', 'Lapislazuli', ['gem', '#2a4cc8']);
I('NETHERITE_SCRAP', 'Netherit-Schrott', ['ingot', '#7a5a4c']);
I('NETHERITE_INGOT', 'Netheritbarren', ['ingot', '#54464f']);
I('FLINT', 'Feuerstein', ['flint']);
I('FLINT_AND_STEEL', 'Feuerzeug', ['flintsteel'], { maxStack: 1, dur: 64 });
I('BUCKET', 'Eimer', ['bucket', null], { maxStack: 16 });
I('WATER_BUCKET', 'Wassereimer', ['bucket', '#2a5fe0'], { maxStack: 1 });
I('LAVA_BUCKET', 'Lavaeimer', ['bucket', '#f08a10'], { maxStack: 1 });
I('BLAZE_ROD', 'Lohenrute', ['stick', '#f2b21a', 2]);
I('BLAZE_POWDER', 'Lohenpulver', ['dust', '#f2a01a']);
I('ENDER_PEARL', 'Enderperle', ['round', '#0d6b5a', '#2fd6b0'], { maxStack: 16 });
I('ENDER_EYE', 'Enderauge', ['eye'], { maxStack: 64 });
I('SLIME_BALL', 'Schleimball', ['round', '#5ec04a', '#a6f28a']);
I('GUNPOWDER', 'Schießpulver', ['dust', '#6e6e6e']);
I('BONE', 'Knochen', ['bone']);
I('STRING', 'Faden', ['string']);
I('APPLE', 'Apfel', ['apple'], { food: 4 });
I('RAW_PORKCHOP', 'Rohes Schweinefleisch', ['meat', '#e88a8a', '#c06060'], { food: 3 });
I('COOKED_PORKCHOP', 'Gebratenes Schweinefleisch', ['meat', '#b4683a', '#7a4020'], { food: 8 });
I('RAW_BEEF', 'Rohes Rindfleisch', ['meat', '#c44a4a', '#8c2a2a'], { food: 3 });
I('STEAK', 'Steak', ['meat', '#8a4a28', '#5a2c14'], { food: 8 });
I('RAW_CHICKEN', 'Rohes Hühnchen', ['meat', '#f0c0b0', '#d09a88'], { food: 2 });
I('COOKED_CHICKEN', 'Gebratenes Hühnchen', ['meat', '#d4994a', '#9c6428'], { food: 6 });
I('RAW_MUTTON', 'Rohes Hammelfleisch', ['meat', '#d0605a', '#a03a38'], { food: 2 });
I('COOKED_MUTTON', 'Gebratenes Hammelfleisch', ['meat', '#a46030', '#6c3c18'], { food: 6 });
I('ROTTEN_FLESH', 'Verrottetes Fleisch', ['meat', '#7a8a4a', '#566030'], { food: 4 });
if (ni >= 512) throw new Error('zu viele Items');

// Drops auflösen
DEF.forEach((d) => {
  if (!d || !d.block) return;
  const dr = d.drop;
  if (dr === undefined) d.drops = [d.id, 1, 1];
  else if (dr === null) d.drops = null;
  else if (typeof dr === 'string') d.drops = [ID[dr], 1, 1];
  else d.drops = [ID[dr[0]], dr[1], dr[2]];
});

export const itemDef = (id) => DEF[id];

// ---------- Icons ----------
const iconCache = new Map();
const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const shade = (c, k) => `rgb(${Math.max(0, Math.min(255, c[0] * k)) | 0},${Math.max(0, Math.min(255, c[1] * k)) | 0},${Math.max(0, Math.min(255, c[2] * k)) | 0})`;
function pline(g, x0, y0, x1, y1, col, th = 1) {
  const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
  for (let i = 0; i <= n; i++) {
    const x = Math.round(x0 + (x1 - x0) * i / n), y = Math.round(y0 + (y1 - y0) * i / n);
    for (let a = 0; a < th; a++) for (let b = 0; b < th; b++) P(g, x + a, y + b, col);
  }
}
function drawItemIcon(g, def) {
  const ic = def.ic;
  const r = mulberry32(def.id * 31 + 7);
  const k = ic[0];
  if (k === 'tool') {
    const c = hex(ic[2]), t = ic[1];
    const stick = '#7a5428';
    if (t === 'sword') {
      pline(g, 3, 12, 6, 9, stick, 1); pline(g, 2, 13, 3, 12, stick);
      pline(g, 4, 8, 8, 12, '#8a6a30', 1); pline(g, 5, 8, 8, 11, '#8a6a30');
      pline(g, 6, 9, 14, 1, shade(c, 1), 2); pline(g, 7, 10, 14, 3, shade(c, 0.78), 1); pline(g, 7, 8, 13, 1, shade(c, 1.2), 1);
    } else if (t === 'pickaxe') {
      pline(g, 3, 13, 12, 4, stick, 2);
      pline(g, 4, 4, 7, 2, shade(c, 1), 2); pline(g, 7, 2, 12, 2, shade(c, 1), 2); pline(g, 12, 2, 14, 6, shade(c, 1), 2);
      pline(g, 4, 5, 7, 3, shade(c, 0.78), 1); pline(g, 13, 4, 15, 8, shade(c, 0.78), 1);
    } else if (t === 'axe') {
      pline(g, 3, 14, 11, 6, stick, 2);
      for (let y = 1; y < 8; y++) for (let x = 7; x < 14; x++) { if ((x - 7) + Math.abs(y - 4) * 0.8 < 7 - 1 && x - y > 3 - 0) P(g, x, y, (x + y) % 3 ? shade(c, 1) : shade(c, 0.82)); }
      pline(g, 6, 3, 10, 7, shade(c, 0.7), 1);
    } else {
      pline(g, 3, 14, 10, 7, stick, 2);
      for (let y = 1; y < 8; y++) for (let x = 8; x < 15; x++) { const d = Math.hypot(x - 11, y - 4); if (d < 3.4) P(g, x, y, d > 2.4 ? shade(c, 0.8) : shade(c, 1.05)); }
    }
  } else if (k === 'stick') {
    const c = hex(ic[1]); pline(g, 3, 13, 12, 4, shade(c, 1), ic[2] || 2); pline(g, 4, 13, 12, 5, shade(c, 0.7), 1);
  } else if (k === 'coal') {
    const c = hex(ic[1]);
    for (let y = 4; y < 13; y++) for (let x = 4; x < 13; x++) { const d = Math.hypot(x - 8, y - 8.5); if (d < 4.2 + (r() - 0.5) * 1.5) P(g, x, y, shade(c, 0.8 + r() * 0.5)); }
    P(g, 6, 6, shade(c, 2)); P(g, 7, 6, shade(c, 1.7));
  } else if (k === 'ingot') {
    const c = hex(ic[1]);
    for (let j = 0; j < 6; j++) for (let x = 7 - j; x < 15 - j; x++) P(g, x, 5 + j, j === 0 ? shade(c, 1.25) : j === 5 ? shade(c, 0.6) : shade(c, 0.95));
    for (let j = 0; j < 6; j++) P(g, 14 - j, 5 + j, shade(c, 0.7));
  } else if (k === 'gem') {
    const c = hex(ic[1]);
    const rows = [[7, 8], [6, 9], [4, 11], [3, 12], [3, 12], [4, 11], [5, 10], [6, 9], [7, 8]];
    rows.forEach((rw, i) => { for (let x = rw[0]; x <= rw[1]; x++) P(g, x, 3 + i, shade(c, (x < 8 ? 1.2 : 0.8) - i * 0.02)); });
    P(g, 6, 5, '#ffffff'); P(g, 7, 6, shade(c, 1.5));
  } else if (k === 'dust') {
    const c = hex(ic[1]);
    for (let i = 0; i < 50; i++) { const a = r() * 6.28, d = r() * 5; const x = 8 + Math.cos(a) * d, y = 10 + Math.sin(a) * d * 0.55; P(g, x | 0, y | 0, shade(c, 0.7 + r() * 0.6)); }
  } else if (k === 'flint') {
    const pts = [[6, 3], [10, 4], [12, 8], [10, 12], [6, 13], [4, 9]];
    for (let y = 2; y < 14; y++) for (let x = 3; x < 13; x++) { let ins = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { if (((pts[i][1] > y) !== (pts[j][1] > y)) && (x < (pts[j][0] - pts[i][0]) * (y - pts[i][1]) / (pts[j][1] - pts[i][1]) + pts[i][0])) ins = !ins; } if (ins) P(g, x, y, shade([70, 70, 74], 0.8 + r() * 0.5)); }
  } else if (k === 'flintsteel') {
    pline(g, 2, 13, 9, 6, '#b8b8c0', 2); pline(g, 3, 13, 9, 7, '#707078', 1);
    for (let y = 3; y < 10; y++) for (let x = 8; x < 14; x++) if (Math.hypot(x - 10.5, y - 6.5) < 3) P(g, x, y, shade([60, 60, 66], 0.8 + r() * 0.6));
    P(g, 12, 3, '#ffcc33'); P(g, 13, 2, '#ff8822');
  } else if (k === 'bucket') {
    for (let y = 4; y < 13; y++) { const w = 5 - Math.floor((y - 4) / 3); for (let x = 8 - w; x < 8 + w; x++) P(g, x, y, (x === 8 - w || y === 12) ? '#7a7a82' : '#b9b9c2'); }
    for (let x = 3; x < 13; x++) P(g, x, 4, '#d8d8e0');
    if (ic[1]) for (let x = 4; x < 12; x++) { P(g, x, 5, ic[1]); P(g, x, 6, ic[1]); }
  } else if (k === 'round') {
    const c = hex(ic[1]), h = hex(ic[2]);
    for (let y = 3; y < 14; y++) for (let x = 3; x < 14; x++) { const d = Math.hypot(x - 8, y - 8); if (d < 5) P(g, x, y, d < 3 ? shade(h, 0.9) : shade(c, 1.1)); }
    P(g, 6, 6, '#ffffff'); P(g, 7, 6, shade(h, 1.4));
  } else if (k === 'eye') {
    for (let y = 3; y < 14; y++) for (let x = 3; x < 14; x++) { const d = Math.hypot(x - 8, y - 8); if (d < 5) P(g, x, y, d < 2 ? '#0a2a14' : d < 3.4 ? '#46c46e' : '#1f6a4a'); }
    P(g, 6, 6, '#c8ffd8');
  } else if (k === 'bone') {
    pline(g, 4, 12, 12, 4, '#ecece4', 2); P(g, 3, 11, '#ecece4'); P(g, 4, 13, '#ecece4'); P(g, 12, 3, '#ecece4'); P(g, 13, 5, '#ecece4');
  } else if (k === 'string') {
    for (let i = 2; i < 14; i++) P(g, i, 8 + Math.round(Math.sin(i * 0.9) * 2), '#f0f0f0');
  } else if (k === 'apple') {
    for (let y = 4; y < 14; y++) for (let x = 3; x < 14; x++) { const d = Math.hypot((x - 8.5) * 0.9, y - 9); if (d < 4.6) P(g, x, y, shade([200, 30, 30], d > 3.4 ? 0.7 : 1.05)); }
    P(g, 8, 3, '#6a4a20'); P(g, 8, 4, '#6a4a20'); P(g, 9, 3, '#3a9a30'); P(g, 6, 7, '#ff9a9a');
  } else if (k === 'meat') {
    const a = hex(ic[1]), b = hex(ic[2]);
    for (let y = 3; y < 14; y++) for (let x = 2; x < 14; x++) { const u = (x - 8) * 0.7 + (y - 8) * 0.7, v = (x - 8) * 0.7 - (y - 8) * 0.7; if ((u * u) / 36 + (v * v) / 14 < 1) P(g, x, y, (u * u) / 36 + (v * v) / 14 > 0.6 ? shade(b, 1) : shade(a, 0.9 + r() * 0.2)); }
    pline(g, 3, 12, 5, 10, '#f0ece0', 2);
  }
}
export function itemIcon(id) {
  if (iconCache.has(id)) return iconCache.get(id);
  const cv = document.createElement('canvas'); cv.width = cv.height = 16;
  const g = cv.getContext('2d');
  g.imageSmoothingEnabled = false;
  const d = DEF[id];
  if (!d) return cv;
  if (d.block) {
    if (d.cross) {
      g.drawImage(tileCanvas(d.tiles[2]), 0, 0);
    } else {
      cv.width = cv.height = 32;
      const g2 = cv.getContext('2d'); g2.imageSmoothingEnabled = false;
      const tt = tileCanvas(d.tiles[0]), ts = tileCanvas(d.tiles[3] || d.tiles[2]);
      // oben
      g2.save(); g2.setTransform(14 / 16, 7 / 16, -14 / 16, 7 / 16, 16, 2); g2.drawImage(tt, 0, 0); g2.restore();
      g2.save(); g2.setTransform(14 / 16, 7 / 16, 0, 14 / 16, 2, 9); g2.drawImage(tileCanvas(d.tiles[2]), 0, 0); g2.fillStyle = 'rgba(0,0,0,0.22)'; g2.fillRect(0, 0, 16, 16); g2.restore();
      g2.save(); g2.setTransform(14 / 16, -7 / 16, 0, 14 / 16, 16, 16); g2.drawImage(ts, 0, 0); g2.fillStyle = 'rgba(0,0,0,0.4)'; g2.fillRect(0, 0, 16, 16); g2.restore();
    }
  } else drawItemIcon(g, d);
  iconCache.set(id, cv);
  return cv;
}
const urlCache = new Map();
export function iconURL(id) {
  if (!urlCache.has(id)) urlCache.set(id, itemIcon(id).toDataURL());
  return urlCache.get(id);
}

// ---------- Rezepte ----------
export const RECIPES = [];
const rid = (v) => (Array.isArray(v) ? v.map((x) => ID[x]) : ID[v]);
function R(out, n, rows, key) {
  const k = {};
  for (const c in key) k[c] = rid(key[c]);
  RECIPES.push({ out: ID[out], n, shape: rows.map((s) => s.split('')), key: k });
}
function S(out, n, list) { RECIPES.push({ out: ID[out], n, list: list.map(rid) }); }
S('PLANKS', 4, [['LOG', 'JUNGLE_LOG']]);
R('STICK', 4, ['P', 'P'], { P: 'PLANKS' });
R('CRAFTING_TABLE', 1, ['PP', 'PP'], { P: 'PLANKS' });
R('FURNACE', 1, ['CCC', 'C.C', 'CCC'], { C: 'COBBLE' });
R('CHEST', 1, ['PPP', 'P.P', 'PPP'], { P: 'PLANKS' });
R('TORCH', 4, ['C', 'S'], { C: ['COAL', 'CHARCOAL'], S: 'STICK' });
const matItem = { WOODEN: 'PLANKS', STONE: 'COBBLE', GOLDEN: 'GOLD_INGOT', IRON: 'IRON_INGOT', DIAMOND: 'DIAMOND', NETHERITE: 'NETHERITE_INGOT' };
for (const m in MATS) {
  const M = matItem[m];
  R(`${m}_SWORD`, 1, ['M', 'M', 'S'], { M, S: 'STICK' });
  R(`${m}_PICKAXE`, 1, ['MMM', '.S.', '.S.'], { M, S: 'STICK' });
  R(`${m}_AXE`, 1, ['MM', 'MS', '.S'], { M, S: 'STICK' });
  R(`${m}_SHOVEL`, 1, ['M', 'S', 'S'], { M, S: 'STICK' });
}
R('BUCKET', 1, ['I.I', '.I.'], { I: 'IRON_INGOT' });
S('FLINT_AND_STEEL', 1, ['IRON_INGOT', 'FLINT']);
S('BLAZE_POWDER', 2, ['BLAZE_ROD']);
S('ENDER_EYE', 1, ['ENDER_PEARL', 'BLAZE_POWDER']);
S('NETHERITE_INGOT', 1, ['NETHERITE_SCRAP', 'NETHERITE_SCRAP', 'NETHERITE_SCRAP', 'NETHERITE_SCRAP', 'GOLD_INGOT', 'GOLD_INGOT', 'GOLD_INGOT', 'GOLD_INGOT']);
R('STONE_BRICKS', 4, ['SS', 'SS'], { S: 'STONE' });
R('SANDSTONE', 1, ['SS', 'SS'], { S: 'SAND' });
R('GLASS', 1, ['G'], { G: 'GLASS' }); // Dummy (wird ignoriert)
RECIPES.pop();

const matches = (spec, id) => (Array.isArray(spec) ? spec.includes(id) : spec === id);
// grid: Array von Item-IDs (0 = leer), w x h
export function matchRecipe(grid, w, h) {
  let minX = w, minY = h, maxX = -1, maxY = -1, count = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (grid[y * w + x]) { count++; minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
  if (!count) return null;
  const gw = maxX - minX + 1, gh = maxY - minY + 1;
  for (const rc of RECIPES) {
    if (rc.list) {
      if (rc.list.length !== count) continue;
      const used = new Array(rc.list.length).fill(false);
      let ok = true;
      for (let i = 0; i < grid.length && ok; i++) {
        const id = grid[i]; if (!id) continue;
        let f = false;
        for (let j = 0; j < rc.list.length; j++) if (!used[j] && matches(rc.list[j], id)) { used[j] = true; f = true; break; }
        if (!f) ok = false;
      }
      if (ok) return rc;
    } else {
      const sh = rc.shape;
      if (sh.length !== gh || sh[0].length !== gw) continue;
      for (const mirror of [false, true]) {
        let ok = true;
        for (let y = 0; y < gh && ok; y++) for (let x = 0; x < gw && ok; x++) {
          const c = sh[y][mirror ? gw - 1 - x : x];
          const id = grid[(minY + y) * w + minX + x];
          if (c === '.') { if (id) ok = false; } else if (!id || !matches(rc.key[c], id)) ok = false;
        }
        if (ok) return rc;
      }
    }
  }
  return null;
}

// ---------- Schmelzen ----------
export const SMELT = {};
const sm = (a, b) => { SMELT[ID[a]] = ID[b]; };
sm('IRON_ORE', 'IRON_INGOT'); sm('GOLD_ORE', 'GOLD_INGOT'); sm('SAND', 'GLASS'); sm('COBBLE', 'STONE');
sm('ANCIENT_DEBRIS', 'NETHERITE_SCRAP'); sm('LOG', 'CHARCOAL'); sm('JUNGLE_LOG', 'CHARCOAL');
sm('RAW_PORKCHOP', 'COOKED_PORKCHOP'); sm('RAW_BEEF', 'STEAK'); sm('RAW_CHICKEN', 'COOKED_CHICKEN'); sm('RAW_MUTTON', 'COOKED_MUTTON');
sm('COAL_ORE', 'COAL');
export const FUEL = {};
const fu = (a, s) => { FUEL[ID[a]] = s; };
fu('COAL', 80); fu('CHARCOAL', 80); fu('LOG', 15); fu('JUNGLE_LOG', 15); fu('PLANKS', 15); fu('STICK', 5); fu('BLAZE_ROD', 120); fu('CRAFTING_TABLE', 15);

export function isBlockItem(id) { return id > 0 && id < 256; }
