import * as THREE from 'three';
import { mulberry32 } from './util.js';

const texCache = new Map();
function mkTex(key, draw) {
  if (texCache.has(key)) return texCache.get(key);
  const cv = document.createElement('canvas'); cv.width = cv.height = 16;
  draw(cv.getContext('2d'));
  const t = new THREE.CanvasTexture(cv);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter;
  texCache.set(key, t);
  return t;
}
function noiseTex(color, v = 0.12, seed = 1) {
  return mkTex('n' + color + v + seed, (g) => {
    g.fillStyle = color; g.fillRect(0, 0, 16, 16);
    const r = mulberry32(seed + color.length * 13 + color.charCodeAt(1) * 7);
    for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) { const k = r(); if (k < 0.3) { g.fillStyle = `rgba(0,0,0,${v * r()})`; g.fillRect(x, y, 1, 1); } else if (k > 0.8) { g.fillStyle = `rgba(255,255,255,${v * 0.6 * r()})`; g.fillRect(x, y, 1, 1); } }
  });
}
function faceTex(key, base, paint) {
  return mkTex('f' + key + base, (g) => { g.fillStyle = base; g.fillRect(0, 0, 16, 16); paint(g); });
}
const R = (g, c, x, y, w, h) => { g.fillStyle = c; g.fillRect(x, y, w, h); };

export const SKINS = {
  Steve: { skin: '#c8956a', hair: '#3a2a1a', shirt: '#1ab5b5', pants: '#3a3aa0', shoes: '#5a5a5a', eyes: '#3a4ad0' },
  Alex: { skin: '#e0b090', hair: '#d98a2a', shirt: '#4caf50', pants: '#6b4a2a', shoes: '#4a3a2a', eyes: '#2a8a3a' },
  Ninja: { skin: '#d9a77c', hair: '#111111', shirt: '#222222', pants: '#1a1a1a', shoes: '#111111', eyes: '#222222' },
  Feuer: { skin: '#e8b088', hair: '#a02010', shirt: '#d42a1a', pants: '#3a2a2a', shoes: '#2a2a2a', eyes: '#c03020' },
  Eis: { skin: '#e8c8b0', hair: '#e8f4ff', shirt: '#5ac8fa', pants: '#2a4a8a', shoes: '#cccccc', eyes: '#2060d0' },
};

function mat(map, extra) {
  return new THREE.MeshLambertMaterial(Object.assign({ map }, extra || {}));
}
function mk(parent, size, material, pos) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
  m.position.set(pos[0], pos[1], pos[2]);
  parent.add(m);
  return m;
}
function limb(parent, size, material, pivot) {
  const p = new THREE.Group();
  p.position.set(pivot[0], pivot[1], pivot[2]);
  const m = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], size[2]), material);
  m.position.y = -size[1] / 2;
  p.add(m); parent.add(p);
  return p;
}
function collectMats(root) {
  const arr = [];
  root.traverse((o) => { if (o.isMesh) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if (m.emissive && !arr.includes(m)) arr.push(m); }); });
  return arr;
}
function headMats(side, top, bottom, front, back) {
  return [mat(side), mat(side), mat(top), mat(bottom), mat(front), mat(back || side)];
}

// ---------- Humanoid ----------
export function makeHumanoid(o) {
  const u = o.u || 1 / 16;
  const [hw, hh, hd] = o.head || [8, 8, 8], [bw, bh, bd] = o.body || [8, 12, 4], [aw, ah, ad] = o.arm || [4, 12, 4], [lw, lh, ld] = o.leg || [4, 12, 4];
  const root = new THREE.Group();
  const legH = lh * u, bodyH = bh * u;
  const c = o.colors;
  const bodyM = mat(noiseTex(c.shirt, 0.14, 2));
  const legM = mat(noiseTex(c.pants, 0.14, 3));
  const armM = mat(noiseTex(c.arm || c.skin, 0.14, 4));
  const front = faceTex(o.name + 'face', c.skin, o.face);
  const side = o.sideTex ? noiseTex(o.sideTex, 0.14, 5) : noiseTex(c.skin, 0.12, 5);
  const top = noiseTex(c.hair || c.skin, 0.14, 6);
  const headM = headMats(side, top, noiseTex(c.skin, 0.12, 7), front, o.backTex ? noiseTex(c.hair || c.skin, 0.14, 8) : side);
  const legs = [limb(root, [lw * u, legH, ld * u], legM, [-lw * u / 2 - 0.001, legH, 0]), limb(root, [lw * u, legH, ld * u], legM, [lw * u / 2 + 0.001, legH, 0])];
  mk(root, [bw * u, bodyH, bd * u], bodyM, [0, legH + bodyH / 2, 0]);
  const sh = legH + bodyH - (o.shoulder ?? 2) * u;
  const arms = [limb(root, [aw * u, ah * u, ad * u], armM, [-(bw / 2 + aw / 2) * u - 0.001, sh, 0]), limb(root, [aw * u, ah * u, ad * u], armM, [(bw / 2 + aw / 2) * u + 0.001, sh, 0])];
  const head = new THREE.Group(); head.position.set(0, legH + bodyH, 0);
  mk(head, [hw * u, hh * u, hd * u], headM, [0, hh * u / 2, 0]);
  root.add(head);
  if (o.hatColor) mk(head, [(hw + 1) * u, (hh + 1) * u, (hd + 1) * u], mat(noiseTex(o.hatColor, 0.1, 9), { transparent: true, opacity: 0.0 }), [0, hh * u / 2, 0]).visible = false;
  const rig = { root, legs, arms, head, phase: 0, atk: 0, mats: [], height: (lh + bh + hh) * u };
  rig.update = (dt, speed, atk, extra) => {
    rig.phase += dt * speed * (o.stride || 2.6);
    const amp = Math.min(1, speed / 3) * 0.9;
    legs[0].rotation.x = Math.sin(rig.phase) * amp; legs[1].rotation.x = -Math.sin(rig.phase) * amp;
    const base = o.armsForward ? -1.45 : 0;
    arms[0].rotation.x = base - Math.sin(rig.phase) * amp * (o.armsForward ? 0.15 : 1); arms[1].rotation.x = base + Math.sin(rig.phase) * amp * (o.armsForward ? 0.15 : 1);
    if (atk > 0) { arms[1].rotation.x = base - Math.sin(atk * Math.PI) * 1.6; }
  };
  rig.mats = collectMats(root);
  return rig;
}

export function playerRig(skin) {
  const c = Object.assign({}, SKINS.Steve, skin || {});
  return makeHumanoid({
    name: 'p' + JSON.stringify(c), u: 0.05625,
    colors: { skin: c.skin, hair: c.hair, shirt: c.shirt, pants: c.pants, arm: c.skin },
    face: (g) => { R(g, c.hair, 0, 0, 16, 4); R(g, c.hair, 0, 4, 2, 3); R(g, c.hair, 14, 4, 2, 3); R(g, '#ffffff', 3, 8, 3, 2); R(g, '#ffffff', 10, 8, 3, 2); R(g, c.eyes, 4, 8, 2, 2); R(g, c.eyes, 10, 8, 2, 2); R(g, '#8a5a3a', 6, 11, 4, 1); R(g, '#a06a4a', 7, 12, 2, 1); },
    sideTex: c.hair, backTex: true,
  });
}

function zombieFace(g) { R(g, '#1a3a1a', 0, 0, 16, 3); R(g, '#000000', 3, 7, 3, 3); R(g, '#000000', 10, 7, 3, 3); R(g, '#2a4a2a', 5, 12, 6, 2); }
function skeletonFace(g) { R(g, '#000000', 3, 6, 3, 3); R(g, '#000000', 10, 6, 3, 3); R(g, '#8a8a8a', 7, 9, 2, 2); R(g, '#555555', 4, 12, 8, 1); R(g, '#777777', 4, 13, 8, 1); }
function endermanFace(g) { R(g, '#a020f0', 2, 8, 5, 2); R(g, '#e090ff', 3, 8, 2, 2); R(g, '#a020f0', 9, 8, 5, 2); R(g, '#e090ff', 10, 8, 2, 2); }

export function zombieRig(baby) {
  const rig = makeHumanoid({ name: 'zombie', u: 0.05625, colors: { skin: '#4f8a3a', shirt: '#2a8a98', pants: '#3a3a8a', hair: '#3f7030', arm: '#4f8a3a' }, face: zombieFace, armsForward: true, stride: 2.2 });
  if (baby) { rig.root.scale.setScalar(0.55); rig.head.scale.setScalar(1.35); rig.head.position.y *= 1.0; }
  return rig;
}
export function skeletonRig(wither) {
  const rig = makeHumanoid({ name: wither ? 'wither' : 'skel', u: wither ? 0.0675 : 0.05625, colors: wither ? { skin: '#2a2a2a', shirt: '#242424', pants: '#202020', hair: '#2a2a2a', arm: '#2a2a2a' } : { skin: '#c0c0c0', shirt: '#a8a8a8', pants: '#b4b4b4', hair: '#c0c0c0', arm: '#b4b4b4' }, face: wither ? (g) => { R(g, '#000000', 3, 6, 3, 3); R(g, '#000000', 10, 6, 3, 3); R(g, '#444444', 4, 12, 8, 1); } : skeletonFace, body: [8, 12, 4], arm: [2, 12, 2], leg: [2, 12, 2], armsForward: !!wither, stride: 2.4 });
  return rig;
}
export function endermanRig() {
  const rig = makeHumanoid({ name: 'ender', u: 0.0625, colors: { skin: '#161616', shirt: '#101010', pants: '#101010', hair: '#161616', arm: '#101010' }, face: endermanFace, body: [8, 12, 4], arm: [2, 30, 2], leg: [2, 30, 2], shoulder: 0, stride: 2.0 });
  rig.mouth = null;
  return rig;
}

// ---------- Creeper ----------
export function creeperRig() {
  const root = new THREE.Group();
  const u = 1 / 16;
  const green = noiseTex('#4aa84a', 0.3, 21);
  const bodyM = mat(green);
  const face = faceTex('creeper', '#4aa84a', (g) => { R(g, '#000000', 2, 4, 4, 4); R(g, '#000000', 10, 4, 4, 4); R(g, '#000000', 6, 8, 4, 5); R(g, '#000000', 4, 10, 2, 5); R(g, '#000000', 10, 10, 2, 5); });
  const head = new THREE.Group(); head.position.set(0, 18 * u, 0);
  mk(head, [8 * u, 8 * u, 8 * u], [bodyM, bodyM, bodyM, bodyM, mat(face), bodyM], [0, 4 * u, 0]);
  root.add(head);
  mk(root, [8 * u, 12 * u, 4 * u], bodyM, [0, 12 * u, 0]);
  const legs = [[-2, 2], [2, 2], [-2, -2], [2, -2]].map(([x, z]) => limb(root, [4 * u, 6 * u, 4 * u], bodyM, [x * u, 6 * u, z * u]));
  const rig = { root, legs, head, phase: 0, mats: [], height: 1.6, fuse: 0 };
  rig.update = (dt, speed) => { rig.phase += dt * speed * 3; const a = Math.min(1, speed / 3) * 0.8; legs[0].rotation.x = Math.sin(rig.phase) * a; legs[3].rotation.x = Math.sin(rig.phase) * a; legs[1].rotation.x = -Math.sin(rig.phase) * a; legs[2].rotation.x = -Math.sin(rig.phase) * a; };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Vierbeiner ----------
function quad(o) {
  const root = new THREE.Group();
  const bodyM = mat(noiseTex(o.body, 0.18, 31)), legM = mat(noiseTex(o.leg || o.body, 0.18, 32)), headSide = mat(noiseTex(o.head, 0.16, 33));
  const front = mat(faceTex(o.name, o.head, o.face));
  const [bw, bh, bd] = o.bs, [hw, hh, hd] = o.hs, [lw, lh, ld] = o.ls;
  mk(root, [bw, bh, bd], bodyM, [0, lh + bh / 2, 0]);
  const headG = new THREE.Group(); headG.position.set(0, lh + bh * (o.headY ?? 0.8), bd / 2 + hd * 0.2);
  mk(headG, [hw, hh, hd], [headSide, headSide, headSide, headSide, front, headSide], [0, 0, hd / 2 - hd * 0.2]);
  root.add(headG);
  const legs = [[-1, 1], [1, 1], [-1, -1], [1, -1]].map(([sx, sz]) => limb(root, [lw, lh, ld], legM, [sx * (bw / 2 - lw / 2), lh, sz * (bd / 2 - ld / 2 - 0.02)]));
  const rig = { root, legs, head: headG, phase: 0, mats: [], height: lh + bh + (o.extraH || 0) };
  rig.update = (dt, speed) => { rig.phase += dt * speed * 3.2; const a = Math.min(1, speed / 2) * 0.7; legs[0].rotation.x = Math.sin(rig.phase) * a; legs[3].rotation.x = Math.sin(rig.phase) * a; legs[1].rotation.x = -Math.sin(rig.phase) * a; legs[2].rotation.x = -Math.sin(rig.phase) * a; };
  rig.mats = collectMats(root);
  return rig;
}
export function pigRig() {
  return quad({ name: 'pig', body: '#f0a0a8', head: '#f0a0a8', bs: [0.6, 0.55, 0.9], hs: [0.5, 0.5, 0.45], ls: [0.22, 0.3, 0.22], headY: 0.75,
    face: (g) => { R(g, '#ffffff', 3, 5, 3, 2); R(g, '#ffffff', 10, 5, 3, 2); R(g, '#3a2a6a', 4, 5, 2, 2); R(g, '#3a2a6a', 10, 5, 2, 2); R(g, '#d07880', 5, 9, 6, 4); R(g, '#a05860', 6, 10, 1, 2); R(g, '#a05860', 9, 10, 1, 2); } });
}
export function cowRig() {
  return quad({ name: 'cow', body: '#5a3a24', head: '#4a3020', leg: '#4a3020', bs: [0.7, 0.75, 1.1], hs: [0.5, 0.5, 0.45], ls: [0.24, 0.5, 0.24], headY: 0.85,
    face: (g) => { R(g, '#ffffff', 3, 5, 3, 2); R(g, '#ffffff', 10, 5, 3, 2); R(g, '#000000', 4, 5, 2, 2); R(g, '#000000', 10, 5, 2, 2); R(g, '#c8b8a0', 4, 10, 8, 5); R(g, '#3a2a20', 5, 12, 2, 2); R(g, '#3a2a20', 9, 12, 2, 2); } });
}
export function sheepRig() {
  return quad({ name: 'sheep', body: '#e8e8e8', head: '#b8a890', leg: '#b8a890', bs: [0.75, 0.7, 1.0], hs: [0.4, 0.45, 0.4], ls: [0.2, 0.42, 0.2], headY: 0.8,
    face: (g) => { R(g, '#ffffff', 3, 5, 3, 2); R(g, '#ffffff', 10, 5, 3, 2); R(g, '#000000', 4, 5, 2, 2); R(g, '#000000', 10, 5, 2, 2); R(g, '#8a7a62', 5, 10, 6, 4); } });
}
export function chickenRig() {
  const root = new THREE.Group();
  const w = mat(noiseTex('#f4f4f4', 0.15, 41)), y = mat(noiseTex('#e0a020', 0.1, 42)), rd = mat(noiseTex('#d02020', 0.1, 43));
  mk(root, [0.3, 0.3, 0.4], w, [0, 0.4, 0]);
  const head = new THREE.Group(); head.position.set(0, 0.62, 0.2);
  const face = mat(faceTex('chicken', '#f4f4f4', (g) => { R(g, '#000000', 3, 4, 2, 2); R(g, '#000000', 11, 4, 2, 2); R(g, '#e0a020', 5, 8, 6, 3); R(g, '#d02020', 6, 11, 4, 3); }));
  mk(head, [0.2, 0.25, 0.2], [w, w, w, w, face, w], [0, 0.1, 0.05]);
  root.add(head);
  mk(root, [0.1, 0.1, 0.1], y, [0, 0.65, 0.32]);
  const legs = [limb(root, [0.06, 0.25, 0.06], y, [-0.08, 0.25, 0]), limb(root, [0.06, 0.25, 0.06], y, [0.08, 0.25, 0])];
  const wing = [limb(root, [0.05, 0.2, 0.3], w, [-0.18, 0.5, 0]), limb(root, [0.05, 0.2, 0.3], w, [0.18, 0.5, 0])];
  const rig = { root, legs, head, phase: 0, mats: [], height: 0.75 };
  rig.update = (dt, speed) => { rig.phase += dt * speed * 4; const a = Math.min(1, speed / 2) * 0.8; legs[0].rotation.x = Math.sin(rig.phase) * a; legs[1].rotation.x = -Math.sin(rig.phase) * a; wing[0].rotation.z = 0.2 + Math.abs(Math.sin(rig.phase * 0.5)) * 0.1; wing[1].rotation.z = -wing[0].rotation.z; };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Spinne ----------
export function spiderRig() {
  const root = new THREE.Group();
  const m = mat(noiseTex('#1a1a1a', 0.5, 51));
  const face = mat(faceTex('spider', '#1a1a1a', (g) => { R(g, '#d01010', 2, 5, 4, 3); R(g, '#d01010', 10, 5, 4, 3); R(g, '#ff4040', 3, 6, 1, 1); R(g, '#ff4040', 11, 6, 1, 1); R(g, '#a00808', 6, 4, 1, 1); R(g, '#a00808', 9, 4, 1, 1); R(g, '#000', 5, 10, 6, 3); }));
  mk(root, [0.65, 0.55, 0.9], m, [0, 0.45, -0.45]);
  mk(root, [0.5, 0.45, 0.5], m, [0, 0.45, 0.1]);
  const head = new THREE.Group(); head.position.set(0, 0.45, 0.4);
  mk(head, [0.5, 0.45, 0.5], [m, m, m, m, face, m], [0, 0, 0.1]);
  root.add(head);
  const legs = [];
  for (let i = 0; i < 4; i++) for (const s of [-1, 1]) {
    const pivot = new THREE.Group(); pivot.position.set(s * 0.2, 0.45, 0.2 - i * 0.18);
    const seg = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 0.08), m); seg.position.x = s * 0.45; pivot.add(seg);
    pivot.rotation.z = s * -0.5; pivot.rotation.y = s * (0.35 - i * 0.22);
    root.add(pivot); legs.push({ p: pivot, base: pivot.rotation.z, i, s });
  }
  const rig = { root, head, legs, phase: 0, mats: [], height: 0.9 };
  rig.update = (dt, speed) => { rig.phase += dt * speed * 4; legs.forEach((l) => { l.p.rotation.z = l.base + Math.sin(rig.phase + l.i * 1.3 + (l.s > 0 ? 1.5 : 0)) * 0.3 * Math.min(1, speed / 2); }); };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Silberfischchen ----------
export function silverfishRig() {
  const root = new THREE.Group();
  const m = mat(noiseTex('#8a8a90', 0.35, 61));
  const face = mat(faceTex('silver', '#8a8a90', (g) => { R(g, '#000', 3, 5, 3, 3); R(g, '#000', 10, 5, 3, 3); }));
  const segs = [];
  const sizes = [[0.25, 0.25, 0.2], [0.3, 0.3, 0.2], [0.35, 0.3, 0.25], [0.3, 0.25, 0.2], [0.22, 0.2, 0.2]];
  let z = 0.3;
  sizes.forEach((s, i) => { z -= s[2] / 2; const mm = mk(root, s, i === 0 ? [m, m, m, m, face, m] : m, [0, s[1] / 2, z]); z -= s[2] / 2; segs.push(mm); });
  const rig = { root, segs, phase: 0, mats: [], height: 0.3, head: segs[0] };
  rig.update = (dt, speed) => { rig.phase += dt * speed * 6; segs.forEach((s, i) => { s.position.x = Math.sin(rig.phase - i * 0.8) * 0.05 * Math.min(1, speed / 2); }); };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Lohe ----------
export function blazeRig() {
  const root = new THREE.Group();
  const yel = mat(noiseTex('#f2b82a', 0.3, 71), { emissive: new THREE.Color(0x553300) });
  const face = mat(faceTex('blaze', '#e8a828', (g) => { R(g, '#3a1a00', 2, 5, 4, 3); R(g, '#3a1a00', 10, 5, 4, 3); R(g, '#3a1a00', 5, 11, 6, 2); }), { emissive: new THREE.Color(0x553300) });
  const head = new THREE.Group(); head.position.set(0, 1.5, 0);
  mk(head, [0.5, 0.5, 0.5], [yel, yel, yel, yel, face, yel], [0, 0.25, 0]);
  root.add(head);
  const rods = new THREE.Group(); root.add(rods);
  const rl = [];
  for (let i = 0; i < 12; i++) {
    const ring = i % 3, a = (i / 12) * Math.PI * 2;
    const rr = 0.38 + ring * 0.08;
    const rod = mk(rods, [0.12, 0.55, 0.12], yel, [Math.cos(a) * rr, 1.05 - ring * 0.3, Math.sin(a) * rr]);
    rl.push({ rod, a, rr, ring });
  }
  const rig = { root, head, phase: 0, mats: [], height: 1.8 };
  rig.update = (dt, speed) => { rig.phase += dt; rl.forEach((r) => { const a = r.a + rig.phase * (1.4 + r.ring * 0.3); r.rod.position.x = Math.cos(a) * r.rr; r.rod.position.z = Math.sin(a) * r.rr; r.rod.position.y = 1.05 - r.ring * 0.32 + Math.sin(rig.phase * 2 + r.a) * 0.06; }); };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Ghast ----------
export function ghastRig() {
  const root = new THREE.Group();
  const m = mat(noiseTex('#f4f4f4', 0.08, 81));
  const face = mat(faceTex('ghast', '#f4f4f4', (g) => { R(g, '#c8c8c8', 1, 4, 5, 1); R(g, '#c8c8c8', 10, 4, 5, 1); R(g, '#000000', 2, 5, 4, 1); R(g, '#000000', 10, 5, 4, 1); R(g, '#c8c8c8', 6, 10, 4, 3); R(g, '#000', 7, 11, 2, 1); }));
  const body = new THREE.Group(); body.position.set(0, 2, 0);
  mk(body, [4, 4, 4], [m, m, m, m, face, m], [0, 0, 0]);
  root.add(body);
  const legs = [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]].map(([x, z]) => limb(root, [0.7, 1.6, 0.7], m, [x, 0.2, z]));
  const rig = { root, head: body, legs, phase: 0, mats: [], height: 4, fire: 0 };
  rig.update = (dt) => { rig.phase += dt; legs.forEach((l, i) => { l.rotation.x = Math.sin(rig.phase * 2 + i) * 0.15; }); };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Magma Cube ----------
export function magmaRig() {
  const root = new THREE.Group();
  const tex = mkTex('magma', (g) => {
    g.fillStyle = '#3a1008'; g.fillRect(0, 0, 16, 16);
    const r = mulberry32(91);
    for (let i = 0; i < 40; i++) { g.fillStyle = r() < 0.5 ? '#e05a10' : '#8a2a08'; g.fillRect((r() * 16) | 0, (r() * 16) | 0, 2, 1); }
    for (let x = 0; x < 16; x++) { g.fillStyle = '#f08a20'; g.fillRect(x, 8, 1, 1); }
  });
  const face = mkTex('magmaface', (g) => { g.drawImage(tex.image, 0, 0); R(g, '#ffe040', 3, 4, 3, 3); R(g, '#ffe040', 10, 4, 3, 3); R(g, '#000', 4, 5, 1, 1); R(g, '#000', 11, 5, 1, 1); R(g, '#200800', 5, 10, 6, 2); });
  const m = new THREE.MeshLambertMaterial({ map: tex, emissive: new THREE.Color(0x401000) });
  const mf = new THREE.MeshLambertMaterial({ map: face, emissive: new THREE.Color(0x401000) });
  const body = new THREE.Group();
  mk(body, [1, 1, 1], [m, m, m, m, mf, m], [0, 0.5, 0]);
  root.add(body);
  const rig = { root, head: body, body, phase: 0, mats: [], height: 1 };
  rig.update = (dt) => { rig.phase += dt; };
  rig.mats = collectMats(root);
  return rig;
}

// ---------- Enderdrache ----------
export function dragonRig() {
  const root = new THREE.Group();
  const m = mat(noiseTex('#161616', 0.4, 101), { emissive: new THREE.Color(0x0a0410) });
  const m2 = mat(noiseTex('#2a2030', 0.4, 102), { emissive: new THREE.Color(0x0a0410) });
  const body = new THREE.Group(); root.add(body);
  mk(body, [5, 4, 9], m, [0, 0, 0]);
  const neck = new THREE.Group(); neck.position.set(0, 0.4, 4.4); body.add(neck);
  const necks = [];
  for (let i = 0; i < 3; i++) { const s = new THREE.Group(); s.position.set(0, 0, i * 2); neck.add(s); mk(s, [2.2, 2.2, 2.4], m, [0, 0, 0]); necks.push(s); mk(s, [0.5, 0.7, 0.5], m2, [0, 1.4, 0]); }
  const head = new THREE.Group(); head.position.set(0, 0.2, 6.2); neck.add(head);
  const face = mat(faceTex('dragon', '#161616', (g) => { R(g, '#d080ff', 2, 4, 4, 2); R(g, '#d080ff', 10, 4, 4, 2); R(g, '#000', 5, 9, 1, 2); R(g, '#000', 10, 9, 1, 2); }), { emissive: new THREE.Color(0x0a0410) });
  mk(head, [3, 2.2, 3.6], [m, m, m, m, face, m], [0, 0.2, 0.5]);
  const jaw = new THREE.Group(); jaw.position.set(0, -0.6, 0.6); head.add(jaw);
  mk(jaw, [2.8, 0.7, 3.2], m2, [0, 0, 1]);
  const tails = [];
  for (let i = 0; i < 6; i++) { const s = new THREE.Group(); s.position.set(0, 0, -4.5 - i * 2); body.add(s); mk(s, [2.6 - i * 0.3, 2.2 - i * 0.2, 2.2], m, [0, 0, 0]); tails.push(s); }
  const wings = [];
  for (const sd of [-1, 1]) {
    const w1 = new THREE.Group(); w1.position.set(sd * 2.5, 1.6, 0.5); body.add(w1);
    mk(w1, [9, 0.5, 5], m2, [sd * 4.5, 0, 0]);
    const w2 = new THREE.Group(); w2.position.set(sd * 9, 0, 0); w1.add(w2);
    mk(w2, [9, 0.35, 4], m2, [sd * 4.5, 0, -0.4]);
    wings.push({ w1, w2, sd });
  }
  for (const sx of [-1, 1]) for (const sz of [1.5, -2.5]) mk(body, [1.4, 2.6, 1.4], m, [sx * 1.8, -2.2, sz]);
  const rig = { root, head, jaw, body, wings, necks, tails, phase: 0, mats: [], height: 4 };
  rig.update = (dt, speed, atk, extra) => {
    rig.phase += dt * 2.4;
    const f = Math.sin(rig.phase);
    wings.forEach((w) => { w.w1.rotation.z = -w.sd * f * 0.5; w.w2.rotation.z = -w.sd * f * 0.35; });
    necks.forEach((n, i) => { n.rotation.x = Math.sin(rig.phase * 0.5 + i) * 0.06; });
    tails.forEach((t, i) => { t.position.y = Math.sin(rig.phase * 0.7 - i * 0.6) * 0.3 * (i + 1) * 0.3; });
    jaw.rotation.x = (extra && extra.open) ? 0.5 : 0.05;
  };
  rig.mats = collectMats(root);
  return rig;
}

export function crystalRig() {
  const root = new THREE.Group();
  const m1 = new THREE.MeshBasicMaterial({ color: 0xff7ae0, transparent: true, opacity: 0.75 });
  const m2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const inner = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.55, 0.55), m2); inner.position.y = 1;
  const outer = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), m1); outer.position.y = 1;
  const holder = new THREE.Group(); holder.add(outer, inner); root.add(holder);
  const rig = { root, holder, mats: [], phase: 0, height: 2 };
  rig.update = (dt) => { rig.phase += dt; holder.rotation.y += dt * 1.5; holder.rotation.x = Math.PI / 4; holder.position.y = Math.sin(rig.phase * 2) * 0.15; };
  return rig;
}

export function setFlash(rig, on, color = 0x771111) {
  rig.mats.forEach((m) => { if (m.emissive) { if (on) { m.userData.oe = m.userData.oe ?? m.emissive.getHex(); m.emissive.setHex(color); } else if (m.userData.oe !== undefined) { m.emissive.setHex(m.userData.oe); } } });
}
