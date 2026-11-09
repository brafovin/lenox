import * as THREE from 'three';
import { ID, DEF, buildAtlas, tileCanvas, crackCanvases, itemIcon, SMELT, FUEL, TILE } from './registry.js';
import { World, CS, WH } from './world.js';
import { SEA } from './consts.js';
import { meshChunk, blockGeometryData } from './mesher.js';
import { raycast, rayAABB, moveEntity, fluidAt, overlapsSolid } from './physics.js';
import { Mob, Dragon, Crystal, Proj, ItemDrop, spriteFor, CFG } from './mobs.js';
import { playerRig, SKINS, setFlash } from './models.js';
import { UI, Inventory } from './ui.js';
import { seedFromString, clamp } from './util.js';

THREE.ColorManagement.enabled = false;

const VERT = `
attribute vec3 aLight; varying vec2 vUv; varying vec3 vL; varying float vD;
void main(){ vUv = uv; vL = aLight; vec4 mv = modelViewMatrix * vec4(position,1.0); vD = length(mv.xyz); gl_Position = projectionMatrix * mv; }`;
const FRAG = `
uniform sampler2D map; uniform float uDay; uniform float uAmb; uniform vec3 uFog; uniform float uNear; uniform float uFar; uniform float uAT; uniform float uBright; uniform float uTime;
varying vec2 vUv; varying vec3 vL; varying float vD;
void main(){
  vec4 c = texture2D(map, vUv);
  if (c.a < uAT) discard;
  float l = max(max(vL.x * uDay, vL.y), uAmb);
  float b = clamp(l * vL.z * uBright, 0.0, 1.0);
  vec3 col = c.rgb * b;
  col += vec3(0.12,0.05,0.0) * vL.y * 0.5;
  float f = smoothstep(uNear, uFar, vD);
  gl_FragColor = vec4(mix(col, uFog, f), c.a);
}`;

const DIMS = { overworld: 'Oberwelt', nether: 'Nether', end: 'Das Ende' };
const rnd = (a, b) => a + Math.random() * (b - a);
const maxStack = (id) => DEF[id].maxStack || 64;

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.autoClear = false;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(72, 1, 0.05, 500);
    this.camera.rotation.order = 'YXZ';
    this.handScene = new THREE.Scene();
    this.handCam = new THREE.PerspectiveCamera(60, 1, 0.01, 10);
    this.amb = new THREE.AmbientLight(0xffffff, 2.6); this.scene.add(this.amb);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.6); this.sun.position.set(0.4, 1, 0.3); this.scene.add(this.sun);
    this.handScene.add(new THREE.AmbientLight(0xffffff, 1));
    // Textur-Atlas & Materialien
    const atlas = buildAtlas();
    this.atlasCanvas = atlas;
    this.atlas = new THREE.CanvasTexture(atlas);
    this.atlas.magFilter = THREE.NearestFilter; this.atlas.minFilter = THREE.NearestFilter; this.atlas.generateMipmaps = false;
    this.U = { map: { value: this.atlas }, uDay: { value: 1 }, uAmb: { value: 0.06 }, uFog: { value: new THREE.Color(0x8fb8ff) }, uNear: { value: 60 }, uFar: { value: 100 }, uBright: { value: 1.12 }, uTime: { value: 0 } };
    const mkMat = (at, trans, side) => new THREE.ShaderMaterial({ uniforms: Object.assign({}, this.U, { uAT: { value: at } }), vertexShader: VERT, fragmentShader: FRAG, transparent: trans, depthWrite: !trans, side });
    this.mats = [mkMat(0.01, false, THREE.FrontSide), mkMat(0.5, false, THREE.DoubleSide), mkMat(0.02, true, THREE.DoubleSide)];
    // Himmel
    this.sunMesh = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), new THREE.MeshBasicMaterial({ color: 0xfff2a0, fog: false, depthWrite: false }));
    this.moonMesh = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ color: 0xdfe6f5, fog: false, depthWrite: false }));
    this.sunMesh.renderOrder = -10; this.moonMesh.renderOrder = -10;
    this.scene.add(this.sunMesh, this.moonMesh);
    const sp = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) { const a = Math.random() * 6.283, b = Math.acos(Math.random() * 2 - 1); sp[i * 3] = Math.sin(b) * Math.cos(a) * 420; sp[i * 3 + 1] = Math.abs(Math.cos(b)) * 420; sp[i * 3 + 2] = Math.sin(b) * Math.sin(a) * 420; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0 }));
    this.scene.add(this.stars);
    // Markierung & Risse
    this.sel = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.004, 1.004, 1.004)), new THREE.LineBasicMaterial({ color: 0x000000 }));
    this.sel.visible = false; this.scene.add(this.sel);
    this.crackTex = crackCanvases().map((cv) => { const t = new THREE.CanvasTexture(cv); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; return t; });
    this.crack = new THREE.Mesh(new THREE.BoxGeometry(1.01, 1.01, 1.01), new THREE.MeshBasicMaterial({ map: this.crackTex[0], transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    this.crack.visible = false; this.scene.add(this.crack);
    this.particles = [];
    this.pGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    this.pMats = new Map();
    this.keys = {};
    this.mouse = { l: false, r: false };
    this.inv = new Inventory();
    this.ui = new UI(this);
    this.renderDist = 6;
    this.skin = Object.assign({}, SKINS.Steve);
    this.playing = false; this.paused = false;
    this.camMode = 0; this.showDebug = false;
    this.fps = 60; this._fa = 0; this._fc = 0;
    this.buildHand();
    this.offsets = [];
    for (let dx = -16; dx <= 16; dx++) for (let dz = -16; dz <= 16; dz++) this.offsets.push([dx, dz, dx * dx + dz * dz]);
    this.offsets.sort((a, b) => a[2] - b[2]);
    this.bindInput();
    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.worlds = {};
    this.last = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.handCam.aspect = w / h; this.handCam.updateProjectionMatrix();
  }

  // ---------- Start ----------
  async start(opts, progress) {
    this.seed = seedFromString(opts.seed);
    this.renderDist = opts.dist || 6;
    this.skin = Object.assign({}, SKINS.Steve, opts.skin || {});
    // altes aufräumen
    for (const k in this.worlds) this.scene.remove(this.worlds[k].group);
    this.worlds = {};
    this.inv = new Inventory(); this.ui.inv = this.inv; this.ui.last.sel = -1; this.ui.last.hp = -1; this.ui.last.food = -1;
    this.ui.screen = null; this.ui.cursor = null;
    this.worldFor('overworld');
    this.world = this.worlds.overworld; this.dim = 'overworld';
    this.scene.add(this.world.group);
    const sp = this.world.gen.findSpawn();
    this.spawn = { x: sp.x, z: sp.z };
    const pcx = Math.floor(sp.x / 16), pcz = Math.floor(sp.z / 16);
    const R = 3;
    let done = 0; const total = (2 * R + 3) ** 2;
    for (let dx = -R - 1; dx <= R + 1; dx++) for (let dz = -R - 1; dz <= R + 1; dz++) {
      this.genChunk(pcx + dx, pcz + dz); done++;
      if (done % 6 === 0) { progress && progress('Gelände wird erzeugt...', done / total * 0.6); await new Promise((r) => setTimeout(r, 0)); }
    }
    let n = 0;
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      const c = this.world.getChunk(pcx + dx, pcz + dz); this.meshNow(c); n++;
      if (n % 4 === 0) { progress && progress('Blöcke werden gebaut...', 0.6 + n / ((2 * R + 1) ** 2) * 0.4); await new Promise((r) => setTimeout(r, 0)); }
    }
    this.player = this.newPlayer();
    const y = this.safeY(sp.x, sp.z);
    this.player.x = sp.x; this.player.y = y; this.player.z = sp.z;
    this.player.yaw = 0; this.player.pitch = 0;
    this.time = 1200 * 0.04; // früher Morgen
    this.portalT = 0; this.portalReady = true;
    this.endInit = false; this.endDefeated = false; this.boss = null;
    this.setupDim();
    this.updateHeld(true);
    this.rig = null;
    this.rebuildPlayerRig();
    this.playing = true; this.paused = false;
    this.last = performance.now();
    this.ui.toast('Willkommen in der Welt! Drücke E für das Inventar.', 5000);
  }
  rebuildPlayerRig() {
    if (this.rig) this.scene.remove(this.rig.root);
    this.rig = playerRig(this.skin);
    this.rig.root.visible = false;
    this.scene.add(this.rig.root);
    // Handfarbe
    this.armMat.color.set(this.skin.skin); this.sleeveMat.color.set(this.skin.shirt);
  }
  newPlayer() {
    return { x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, w: 0.6, h: 1.8, yaw: 0, pitch: 0, hp: 20, food: 20, sat: 5, exh: 0, dead: false, onGround: false, sneaking: false, sprinting: false, air: 300, headInWater: false, inWater: false, invuln: 0, peakY: 0, burn: 0, regenT: 0, starveT: 0, atk: 0, eatT: 0, cause: '', eye() { return [this.x, this.y + (this.sneaking ? 1.27 : 1.62), this.z]; } };
  }
  worldFor(dim) {
    if (!this.worlds[dim]) {
      const w = new World(dim, this.seed + (dim === 'nether' ? 7 : dim === 'end' ? 13 : 0));
      w.group = new THREE.Group();
      this.worlds[dim] = w;
    }
    return this.worlds[dim];
  }
  safeY(x, z) {
    const w = this.world;
    for (let y = WH - 2; y > 1; y--) {
      const id = w.getBlock(Math.floor(x), y, Math.floor(z));
      if (DEF[id].solid && !w.isSolid(Math.floor(x), y + 1, Math.floor(z)) && !w.isSolid(Math.floor(x), y + 2, Math.floor(z))) return y + 1;
    }
    return 40;
  }
  genChunk(cx, cz) {
    const w = this.world;
    const had = w.chunks.has(World.key(cx, cz));
    const c = w.ensureChunk(cx, cz);
    if (!had) this.processSpawns(c);
    return c;
  }
  processSpawns(c) {
    for (const s of c.spawns) {
      if (s.type === 'crystal') { const cr = new Crystal(s.x, s.y, s.z); this.world.entities.push(cr); this.world.group.add(cr.mesh); }
      else this.addMob(s.type, s.x, s.y, s.z);
    }
    c.spawns = [];
  }

  // ---------- Hand ----------
  buildHand() {
    this.hand = new THREE.Group();
    this.armMat = new THREE.MeshBasicMaterial({ color: 0xc8956a });
    this.sleeveMat = new THREE.MeshBasicMaterial({ color: 0x1ab5b5 });
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.55), this.armMat); arm.position.set(0, 0, 0);
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.205, 0.205, 0.25), this.sleeveMat); sleeve.position.set(0, 0, 0.2);
    this.hand.add(arm, sleeve);
    this.hand.position.set(0.38, -0.34, -0.6);
    this.hand.rotation.set(-0.1, 0.25, 0);
    this.heldHolder = new THREE.Group(); this.hand.add(this.heldHolder);
    this.handScene.add(this.hand);
    this.swing = 0; this.swinging = false;
    this.heldId = -1;
  }
  updateHeld(force) {
    const st = this.inv.held();
    const id = st ? st.id : 0;
    if (id === this.heldId && !force) return;
    this.heldId = id;
    while (this.heldHolder.children.length) this.heldHolder.remove(this.heldHolder.children[0]);
    if (!id) { this.hand.children[0].visible = true; return; }
    const d = DEF[id];
    if (d.block && !d.cross) {
      const gd = blockGeometryData(d);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(gd.pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(gd.uv, 2)); geo.setAttribute('color', new THREE.Float32BufferAttribute(gd.col, 3)); geo.setIndex(gd.idx);
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: this.atlas, vertexColors: true, transparent: true, alphaTest: 0.1 }));
      m.scale.setScalar(0.32); m.position.set(0, 0.17, -0.22); m.rotation.set(0.2, 0.7, 0);
      this.heldHolder.add(m);
    } else {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.46), new THREE.MeshBasicMaterial({ map: spriteFor(id), transparent: true, alphaTest: 0.1, side: THREE.DoubleSide }));
      m.position.set(0.02, 0.2, -0.3); m.rotation.set(0.1, -0.6, -0.5);
      this.heldHolder.add(m);
    }
  }

  // ---------- Input ----------
  bindInput() {
    const c = this.canvas;
    window.addEventListener('keydown', (e) => {
      if (!this.playing) return;
      if (e.code === 'F5' || e.code === 'F3' || e.code === 'F4' || e.code === 'Tab') e.preventDefault();
      if (e.repeat) { this.keys[e.code] = true; return; }
      this.keys[e.code] = true;
      if (this.player.dead) return;
      if (e.code === 'KeyE') { if (this.ui.screen) this.closeScreen(); else if (!this.paused) this.openScreen('inventory'); }
      else if (e.code === 'Escape' && this.ui.screen) this.closeScreen();
      if (this.ui.screen) return;
      if (e.code.startsWith('Digit')) { const n = +e.code.slice(5); if (n >= 1 && n <= 9) { this.inv.sel = n - 1; this.updateHeld(); } }
      else if (e.code === 'KeyQ') this.dropHeld(e.ctrlKey);
      else if (e.code === 'F3') { this.showDebug = !this.showDebug; document.getElementById('debug').style.display = this.showDebug ? 'block' : 'none'; }
      else if (e.code === 'F5') { this.camMode = (this.camMode + 1) % 3; }
      else if (e.code === 'F4' || e.code === 'KeyL') this.locate();
      else if (e.code === 'KeyW') { const t = performance.now(); if (t - (this._wt || 0) < 280) this.sprintLatch = true; this._wt = t; }
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; if (e.code === 'KeyW') this.sprintLatch = false; });
    window.addEventListener('blur', () => { this.keys = {}; this.mouse.l = this.mouse.r = false; });
    window.addEventListener('mousedown', (e) => {
      if (!this.playing || this.paused || this.ui.screen || this.player.dead) return;
      if (document.pointerLockElement !== c) return;
      if (e.button === 0) { this.mouse.l = true; this.clickL = true; }
      if (e.button === 2) { this.mouse.r = true; this.clickR = true; }
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouse.l = false; if (e.button === 2) { this.mouse.r = false; this.player && (this.player.eatT = 0); } });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (!this.playing || document.pointerLockElement !== c || this.paused || this.ui.screen || this.player.dead) return;
      const p = this.player;
      p.yaw -= e.movementX * 0.0022; p.pitch -= e.movementY * 0.0022;
      p.pitch = clamp(p.pitch, -1.55, 1.55);
    });
    window.addEventListener('wheel', (e) => {
      if (!this.playing || this.ui.screen || this.paused) return;
      this.inv.sel = (this.inv.sel + (e.deltaY > 0 ? 1 : 8)) % 9; this.updateHeld();
    }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      const locked = document.pointerLockElement === c;
      if (!locked && this.playing && !this.ui.screen && !this.player.dead && !this.suppressPause) this.setPaused(true);
      this.suppressPause = false;
    });
  }
  lock() { try { const r = this.canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (e) { /* ignore */ } }
  setPaused(v) {
    this.paused = v;
    document.getElementById('pause').style.display = v ? 'flex' : 'none';
    if (!v) this.lock();
  }
  openScreen(kind, tile) {
    this.suppressPause = true;
    if (document.pointerLockElement) document.exitPointerLock();
    this.ui.open(kind, tile);
    this.mouse.l = this.mouse.r = false;
  }
  closeScreen() {
    this.ui.close();
    this.lock();
  }

  // ---------- Audio ----------
  initAudio() {
    if (this.audio) return;
    try { this.audio = new (window.AudioContext || window.webkitAudioContext)(); this.master = this.audio.createGain(); this.master.gain.value = 0.25; this.master.connect(this.audio.destination); } catch (e) { this.audio = null; }
  }
  sfx(name) {
    if (!this.audio) return;
    const now = this.audio.currentTime;
    this._sfxT = this._sfxT || {};
    if (this._sfxT[name] && now - this._sfxT[name] < 0.05) return;
    this._sfxT[name] = now;
    const A = this.audio;
    const tone = (f, d, type, v, to) => { const o = A.createOscillator(), g = A.createGain(); o.type = type; o.frequency.setValueAtTime(f, now); if (to) o.frequency.exponentialRampToValueAtTime(to, now + d); g.gain.setValueAtTime(v, now); g.gain.exponentialRampToValueAtTime(0.001, now + d); o.connect(g); g.connect(this.master); o.start(now); o.stop(now + d); };
    const noise = (d, v, f) => { const n = A.sampleRate * d, b = A.createBuffer(1, n, A.sampleRate), ch = b.getChannelData(0); for (let i = 0; i < n; i++) ch[i] = Math.random() * 2 - 1; const s = A.createBufferSource(); s.buffer = b; const fl = A.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = f; const g = A.createGain(); g.gain.setValueAtTime(v, now); g.gain.exponentialRampToValueAtTime(0.001, now + d); s.connect(fl); fl.connect(g); g.connect(this.master); s.start(now); };
    switch (name) {
      case 'break': noise(0.18, 0.9, 1800); break;
      case 'place': tone(160, 0.1, 'square', 0.3, 90); break;
      case 'hit': tone(220, 0.08, 'sawtooth', 0.4, 110); break;
      case 'hurt': tone(300, 0.25, 'sawtooth', 0.5, 90); break;
      case 'mobdie': tone(200, 0.4, 'sawtooth', 0.4, 50); break;
      case 'explode': noise(0.9, 1.2, 700); tone(70, 0.6, 'sine', 0.6, 30); break;
      case 'pop': tone(600, 0.08, 'sine', 0.25, 900); break;
      case 'shoot': tone(500, 0.15, 'triangle', 0.25, 200); break;
      case 'fire': noise(0.3, 0.5, 900); break;
      case 'fuse': noise(0.8, 0.4, 3000); break;
      case 'tp': tone(900, 0.2, 'sine', 0.4, 200); break;
      case 'scream': tone(400, 0.5, 'sawtooth', 0.3, 800); break;
      case 'portal': tone(120, 1.2, 'sine', 0.4, 400); break;
      case 'eat': noise(0.1, 0.5, 2500); break;
      case 'dragondie': noise(2, 1, 400); tone(80, 2, 'sawtooth', 0.5, 20); break;
    }
  }

  log(msg) { this.ui.toast(msg); }

  // ---------- Inventar-Helfer ----------
  isDay() { return this.dayFactor > 0.45; }
  pickup(st) { const ok = this.inv.add(st); this.updateHeld(); return ok; }
  canPickup(st) { return this.inv.canAdd(st); }
  pickupOrDrop(st) { if (!this.inv.add(st)) this.dropFromPlayer(st); this.updateHeld(); }
  dropFromPlayer(st) {
    const p = this.player, d = this.lookDir(), e = p.eye();
    this.spawnItem(st.id, st.n, e[0], e[1] - 0.3, e[2], [d[0] * 5, d[1] * 5 + 2, d[2] * 5], st.d);
  }
  dropHeld(all) {
    const st = this.inv.held(); if (!st) return;
    const out = Object.assign({}, st, { n: all ? st.n : 1 });
    this.dropFromPlayer(out);
    this.inv.removeFromSel(out.n);
    this.updateHeld();
  }
  spawnItem(id, n, x, y, z, vel, dmg) {
    if (!id || n <= 0) return;
    const st = { id, n };
    if (DEF[id].tool || DEF[id].dur) st.d = dmg || 0;
    const it = new ItemDrop(st, x, y, z, vel);
    it.delay = vel ? 1.2 : 0.5;
    this.world.entities.push(it); this.world.group.add(it.mesh);
  }
  damageHeld(n = 1) {
    const st = this.inv.held(); if (!st) return;
    const d = DEF[st.id]; const mx = d.tool ? d.tool.dur : d.dur;
    if (!mx) return;
    st.d = (st.d || 0) + n;
    if (st.d >= mx) { this.inv.slots[this.inv.sel] = null; this.sfx('break'); this.log(d.label + ' ist kaputtgegangen'); }
    this.updateHeld(true);
  }
  heldTool() { const st = this.inv.held(); return st && DEF[st.id].tool ? DEF[st.id].tool : null; }

  lookDir() {
    const p = this.player, cp = Math.cos(p.pitch);
    return [-Math.sin(p.yaw) * cp, Math.sin(p.pitch), -Math.cos(p.yaw) * cp];
  }

  // ---------- Hauptschleife ----------
  loop(t) {
    requestAnimationFrame((tt) => this.loop(tt));
    let dt = (t - this.last) / 1000; this.last = t;
    if (dt > 0.1) dt = 0.1;
    this._fa += dt; this._fc++;
    if (this._fa >= 0.5) { this.fps = Math.round(this._fc / this._fa); this._fa = 0; this._fc = 0; }
    if (!this.playing) { return; }
    if (!this.paused) this.update(dt);
    this.render(dt);
  }

  update(dt) {
    const p = this.player;
    this.time += dt;
    this.updateSkyState();
    if (!p.dead) {
      this.updatePlayer(dt);
      this.updateActions(dt);
    } else this.updateDead(dt);
    this.updateEntities(dt);
    this.updateFurnaces(dt);
    this.updateChunks(7);
    this.updateSpawning(dt);
    this.updateParticles(dt);
    this.updatePortalLogic(dt);
    this.ui.update();
    p.invuln = Math.max(0, p.invuln - dt);
    p.atk += dt;
    if (this.boss) this.updateBossBar();
    if (this.showDebug) this.updateDebug();
  }

  // ---------- Spieler ----------
  updatePlayer(dt) {
    const p = this.player, k = this.keys, w = this.world;
    const locked = this.ui.screen || this.paused;
    let fw = locked ? 0 : (k.KeyW ? 1 : 0) - (k.KeyS ? 1 : 0), st = locked ? 0 : (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
    p.sneaking = !locked && !!(k.ShiftLeft || k.ShiftRight);
    const jump = !locked && !!k.Space;
    p.sprinting = !locked && (k.ControlLeft || k.KeyR || this.sprintLatch) && fw > 0 && !p.sneaking && p.food > 6;
    if (fw <= 0) this.sprintLatch = false;
    const len = Math.hypot(fw, st);
    if (len > 0) { fw /= len; st /= len; }
    const sy = Math.sin(p.yaw), cy = Math.cos(p.yaw);
    const wx = -sy * fw + cy * st, wz = -cy * fw - sy * st;
    const fl = fluidAt(w, p.x, p.y + 0.4, p.z);
    p.inWater = fl === 'water'; p.inLava = fl === 'lava';
    p.headInWater = fluidAt(w, p.x, p.y + 1.62, p.z) === 'water';
    let speed = p.sneaking ? 1.3 : p.sprinting ? 5.6 : 4.3;
    if (p.inWater) speed *= 0.6; if (p.inLava) speed *= 0.35;
    const acc = p.onGround ? 14 : (p.inWater || p.inLava) ? 6 : 2.2;
    const k2 = Math.min(1, acc * dt);
    p.vx += (wx * speed - p.vx) * k2; p.vz += (wz * speed - p.vz) * k2;
    if (p.inWater || p.inLava) {
      p.vy -= 10 * dt;
      if (jump) p.vy = Math.min(p.vy + 32 * dt, p.inLava ? 2.6 : 3.8);
      p.vy = Math.max(p.vy, -4); p.vy *= Math.pow(0.25, dt);
    } else {
      p.vy -= 32 * dt; if (p.vy < -70) p.vy = -70;
      if (jump && p.onGround) { p.vy = 9.2; if (p.sprinting) { p.vx += wx * 2; p.vz += wz * 2; p.exh += 0.2; } else p.exh += 0.05; }
    }
    moveEntity(w, p, dt, p.sneaking);
    // Fallschaden
    if (p.onGround || p.inWater || p.inLava) {
      const fall = p.peakY - p.y;
      if (fall > 3.2 && !p.inWater && !p.inLava) this.hurtPlayer(Math.ceil(fall - 3), null, null, 0, 'Fallschaden', true);
      p.peakY = p.y;
    } else if (p.y > p.peakY) p.peakY = p.y;
    if (p.inWater) p.peakY = p.y;
    if (p.y < -40) { this.hurtPlayer(100, null, null, 0, 'Sturz in die Leere', true); }
    // Hunger
    const moved = Math.hypot(p.vx, p.vz);
    if (p.sprinting && moved > 1) p.exh += 0.1 * moved * dt * 1.2;
    if (p.exh >= 4) { p.exh -= 4; if (p.sat > 0) p.sat = Math.max(0, p.sat - 1); else p.food = Math.max(0, p.food - 1); }
    p.regenT += dt;
    if (p.food >= 18 && p.hp < 20) { const iv = (p.food >= 20 && p.sat > 0) ? 0.5 : 4; if (p.regenT >= iv) { p.regenT = 0; p.hp = Math.min(20, p.hp + 1); p.exh += 1.5; } }
    else if (p.food <= 0) { if (p.regenT >= 4) { p.regenT = 0; if (p.hp > 1) this.hurtPlayer(1, null, null, 0, 'Verhungern', true); } }
    else if (p.food < 18) p.regenT = 0;
    // Luft
    if (p.headInWater) { p.air -= dt * 20; if (p.air <= 0) { p.air = 0; p.airT = (p.airT || 0) + dt; if (p.airT >= 1) { p.airT = 0; this.hurtPlayer(2, null, null, 0, 'Ertrinken', true); } } }
    else p.air = Math.min(300, p.air + dt * 100);
    // Lava / Feuer / Kaktus
    if (p.inLava) { p.burn = 8; p.lavaT = (p.lavaT || 0) + dt; if (p.lavaT > 0.4) { p.lavaT = 0; this.hurtPlayer(4, null, null, 0, 'Lava', true); } }
    if (p.burn > 0) { if (p.inWater) p.burn = 0; else { p.burn -= dt; p.burnT = (p.burnT || 0) + dt; if (p.burnT >= 1) { p.burnT = 0; this.hurtPlayer(1, null, null, 0, 'Feuer', true); } } }
    if (this.cactusNear(p)) { p.cactT = (p.cactT || 0) + dt; if (p.cactT > 0.5) { p.cactT = 0; this.hurtPlayer(1, null, null, 0, 'Kaktus', true); } }
    // Overlays
    document.getElementById('water').style.opacity = this.camInWater() ? 1 : 0;
    document.getElementById('fire').style.opacity = p.burn > 0 ? 1 : 0;
  }
  camInWater() { const e = this.player.eye(); return fluidAt(this.world, e[0], e[1], e[2]) === 'water'; }
  cactusNear(p) {
    const w = this.world;
    for (const dx of [-0.4, 0.4]) for (const dz of [-0.4, 0.4]) for (const y of [0.2, 1.0]) { if (w.getBlock(Math.floor(p.x + dx * 1.3), Math.floor(p.y + y), Math.floor(p.z + dz * 1.3)) === ID.CACTUS) return true; }
    return false;
  }
  hurtPlayer(amount, fx, fz, kb = 1, src = '', force) {
    const p = this.player;
    if (p.dead || amount <= 0) return;
    if (p.invuln > 0 && !force) return;
    p.hp -= amount;
    p.invuln = force ? 0.3 : 0.55;
    this.sfx('hurt');
    const f = document.getElementById('flash'); f.style.opacity = 0.55; clearTimeout(this._ft); this._ft = setTimeout(() => (f.style.opacity = 0), 220);
    if (fx !== null && fx !== undefined && kb > 0) { const dx = p.x - fx, dz = p.z - fz, d = Math.hypot(dx, dz) || 1; p.vx += dx / d * 6 * kb; p.vz += dz / d * 6 * kb; p.vy = Math.max(p.vy, 4.5); }
    p.exh += 0.1;
    if (p.hp <= 0) { p.hp = 0; this.die(src); }
  }
  die(src) {
    const p = this.player;
    p.dead = true; p.cause = src;
    this.suppressPause = true;
    if (document.pointerLockElement) document.exitPointerLock();
    this.ui.close();
    document.getElementById('death').style.display = 'flex';
    document.getElementById('deathcause').textContent = src ? `Todesursache: ${src}` : '';
    this.mouse.l = this.mouse.r = false;
    this.camTilt = 0;
  }
  updateDead(dt) { this.camTilt = Math.min(1.2, (this.camTilt || 0) + dt * 2); }
  respawn() {
    document.getElementById('death').style.display = 'none';
    const p = this.player;
    if (this.dim !== 'overworld') this.enterDimension('overworld', this.spawn.x, 0, this.spawn.z, true);
    p.hp = 20; p.food = 20; p.sat = 5; p.dead = false; p.vx = p.vy = p.vz = 0; p.burn = 0; p.air = 300; p.invuln = 2;
    p.x = this.spawn.x; p.z = this.spawn.z; this.ensureAround(p.x, p.z, 2); p.y = this.safeY(p.x, p.z); p.peakY = p.y;
    this.ui.last.hp = -1; this.ui.last.food = -1;
    this.lock();
  }
  eatFood(st) {
    const f = DEF[st.id].food;
    this.player.food = Math.min(20, this.player.food + f);
    this.player.sat = Math.min(this.player.food, this.player.sat + f * 0.6);
    this.sfx('eat');
    if (st.id === ID.ROTTEN_FLESH && Math.random() < 0.8) { this.hurtPlayer(2, null, null, 0, 'Vergiftung', true); }
  }

  // ---------- Aktionen: Abbauen, Platzieren, Angreifen ----------
  updateActions(dt) {
    const p = this.player, w = this.world;
    const locked = this.ui.screen || this.paused;
    const e = p.eye(), d = this.lookDir();
    const held = this.inv.held();
    const wantFluid = held && (held.id === ID.BUCKET);
    this.target = locked ? null : raycast(w, e[0], e[1], e[2], d[0], d[1], d[2], 5, wantFluid);
    // Entity-Treffer
    this.entTarget = null;
    if (!locked) {
      let best = 3.4;
      const blockT = this.target ? this.target.t : 99;
      for (const en of w.entities) {
        if (en.kind !== 'mob' || en.dead) continue;
        for (const b of en.aabbs()) {
          const t = rayAABB(e[0], e[1], e[2], d[0], d[1], d[2], b[0], b[1], b[2], b[3], b[4], b[5]);
          if (t >= 0 && t < best && t < blockT) { best = t; this.entTarget = en; }
        }
      }
    }
    // Markierung
    if (this.target && !this.entTarget && this.camMode === 0) { this.sel.visible = true; this.sel.position.set(this.target.x + 0.5, this.target.y + 0.5, this.target.z + 0.5); }
    else this.sel.visible = false;
    // Linksklick
    if (this.clickL) {
      this.clickL = false;
      if (this.entTarget) this.attack(this.entTarget);
      this.swinging = true; this.swing = 0.0001;
    }
    if (!this.mouse.l || locked) { this.mineT = 0; this.mineKey = null; this.crack.visible = false; }
    else if (!this.entTarget && this.target) {
      const t = this.target;
      const key = t.x + ',' + t.y + ',' + t.z;
      if (this.mineKey !== key) { this.mineKey = key; this.mineT = 0; }
      const def = DEF[t.id];
      if (def.hardness < 0) { this.crack.visible = false; }
      else {
        const tool = this.heldTool();
        const harvest = !def.needs || (tool && tool.type === def.tool && tool.tier >= def.tier);
        let sp = 1;
        if (tool && tool.type === def.tool) sp = tool.speed;
        let need = def.hardness === 0 ? 0 : def.hardness * (harvest ? 1.5 : 5) / sp;
        if (!p.onGround && !p.inWater) need *= 5;
        if (p.headInWater) need *= 5;
        this.mineT += dt;
        this.swinging = true;
        if (this.mineT >= need) {
          this.breakBlock(t.x, t.y, t.z, harvest, true);
          if (def.hardness > 0) this.damageHeld(1);
          p.exh += 0.005;
          this.mineKey = null; this.mineT = 0; this.crack.visible = false;
          this.mineCool = 0.18;
        } else {
          const stage = Math.min(9, Math.floor(this.mineT / need * 10));
          this.crack.visible = true; this.crack.position.set(t.x + 0.5, t.y + 0.5, t.z + 0.5); this.crack.material.map = this.crackTex[stage];
          this.mineSfx = (this.mineSfx || 0) - dt; if (this.mineSfx <= 0) { this.mineSfx = 0.25; this.sfx('hit'); }
        }
      }
    }
    if (this.mineCool > 0) { this.mineCool -= dt; }
    // Rechtsklick
    if (this.clickR) { this.clickR = false; this.useItem(); this.placeCool = 0.25; }
    else if (this.mouse.r && !locked) {
      this.placeCool = (this.placeCool || 0) - dt;
      const h = this.inv.held();
      if (h && DEF[h.id].food && p.food < 20) {
        p.eatT += dt; this.swinging = true;
        if (p.eatT >= 1.6) { p.eatT = 0; this.eatFood(h); this.inv.removeFromSel(1); this.updateHeld(); }
      } else if (h && h.id < 256 && this.placeCool <= 0) { this.placeCool = 0.25; this.useItem(); }
    }
    // Hand-Animation
    if (this.swinging) { this.swing += dt * 4.5; if (this.swing >= 1) { this.swing = 0; this.swinging = this.mouse.l && !locked || (this.mouse.r && !locked && this.inv.held() && DEF[this.inv.held().id].food); } }
  }

  attack(en) {
    const p = this.player;
    const tool = this.heldTool();
    let dmg = tool ? tool.dmg : 1;
    if (tool && tool.type === 'shovel') dmg = tool.dmg - 1;
    if (tool && tool.type === 'pickaxe') dmg = tool.dmg;
    const charge = Math.min(1, p.atk / 0.6);
    dmg *= 0.2 + 0.8 * charge * charge;
    if (!p.onGround && p.vy < 0 && charge > 0.9) { dmg *= 1.5; }
    p.atk = 0;
    p.exh += 0.1;
    en.damage(dmg, this, p.x, p.z, 0.8 + (p.sprinting ? 0.6 : 0));
    if (tool) this.damageHeld(tool.type === 'sword' ? 1 : 2);
  }

  breakBlock(x, y, z, harvest = true, byPlayer = false) {
    const w = this.world;
    const id = w.getBlock(x, y, z);
    if (!id) return;
    const d = DEF[id];
    if (d.hardness < 0 && byPlayer) return;
    const tk = w.tileKey(x, y, z), tile = w.tiles.get(tk);
    if (tile) {
      const drop = (s) => { if (s) this.spawnItem(s.id, s.n, x + 0.5, y + 0.5, z + 0.5, null, s.d); };
      if (tile.type === 'chest') tile.items.forEach(drop); else { drop(tile.in); drop(tile.fuel); drop(tile.out); }
      w.tiles.delete(tk);
    }
    w.setBlock(x, y, z, 0);
    this.burst(x, y, z, id);
    this.sfx('break');
    if (harvest || !byPlayer) {
      if (id === ID.GRAVEL && Math.random() < 0.15) this.spawnItem(ID.FLINT, 1, x + 0.5, y + 0.5, z + 0.5);
      else if ((id === ID.LEAVES || id === ID.JUNGLE_LEAVES)) {
        if (Math.random() < 0.06) this.spawnItem(ID.APPLE, 1, x + 0.5, y + 0.5, z + 0.5);
        if (Math.random() < 0.1) this.spawnItem(ID.STICK, 1, x + 0.5, y + 0.5, z + 0.5);
      }
      else if (d.drops) {
        const n = d.drops[1] + Math.floor(Math.random() * (d.drops[2] - d.drops[1] + 1));
        if (n > 0) this.spawnItem(d.drops[0], n, x + 0.5, y + 0.5, z + 0.5);
      }
    }
    this.afterChange(x, y, z, id);
  }
  afterChange(x, y, z, oldId) {
    const w = this.world;
    const above = w.getBlock(x, y + 1, z);
    if (above && DEF[above].cross) { this.breakBlock(x, y + 1, z, true, false); }
    else if (above && DEF[above].gravity) this.settle(x, y + 1, z);
    if (oldId === ID.OBSIDIAN) {
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) { const b = w.getBlock(x + dx, y + dy, z + dz); if (DEF[b].portal) this.removePortal(x + dx, y + dy, z + dz); }
    }
  }
  settle(x, y, z) {
    const w = this.world;
    const id = w.getBlock(x, y, z);
    if (!DEF[id].gravity) return;
    const canFall = (yy) => { const b = DEF[w.getBlock(x, yy, z)]; return yy >= 0 && (!w.getBlock(x, yy, z) || b.fluid || b.cross); };
    let yy = y;
    while (yy > 0 && canFall(yy - 1)) yy--;
    if (yy !== y) { w.setBlock(x, y, z, 0); w.setBlock(x, yy, z, id); this.settle(x, y + 1, z); }
  }
  removePortal(x, y, z) {
    const w = this.world; const stack = [[x, y, z]]; let n = 0;
    while (stack.length && n < 800) {
      const [a, b, c] = stack.pop();
      if (!DEF[w.getBlock(a, b, c)].portal) continue;
      w.setBlock(a, b, c, 0); n++;
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) stack.push([a + dx, b + dy, c + dz]);
    }
    this.sfx('break');
  }

  useItem() {
    const p = this.player, w = this.world;
    const held = this.inv.held();
    const t = this.target;
    this.swinging = true; this.swing = Math.max(this.swing, 0.0001);
    // Interaktion mit Blöcken
    if (t && !p.sneaking) {
      const d = DEF[t.id];
      if (d.ui) {
        let tile = w.tiles.get(w.tileKey(t.x, t.y, t.z));
        if (d.ui === 'furnace' && !tile) { tile = { type: 'furnace', in: null, fuel: null, out: null, burn: 0, burnMax: 0, cook: 0 }; w.tiles.set(w.tileKey(t.x, t.y, t.z), tile); }
        if (d.ui === 'chest' && !tile) { tile = { type: 'chest', items: new Array(27).fill(null) }; w.tiles.set(w.tileKey(t.x, t.y, t.z), tile); }
        this.openScreen(d.ui, tile);
        return;
      }
    }
    if (!held) return;
    const hid = held.id;
    const hd = DEF[hid];
    // Eimer
    if (hid === ID.BUCKET) {
      if (t && DEF[t.id].fluid) {
        w.setBlock(t.x, t.y, t.z, 0);
        this.inv.slots[this.inv.sel] = held.n > 1 ? (held.n--, held) : null;
        const full = { id: DEF[t.id].fluid === 'water' ? ID.WATER_BUCKET : ID.LAVA_BUCKET, n: 1 };
        if (!this.inv.slots[this.inv.sel]) this.inv.slots[this.inv.sel] = full; else this.pickupOrDrop(full);
        this.updateHeld(true); this.sfx('pop');
      }
      return;
    }
    if (hid === ID.WATER_BUCKET || hid === ID.LAVA_BUCKET) {
      if (!t) return;
      let x = t.x + t.nx, y = t.y + t.ny, z = t.z + t.nz;
      const b = w.getBlock(t.x, t.y, t.z);
      if (DEF[b].fluid || DEF[b].cross) { x = t.x; y = t.y; z = t.z; }
      const cur = w.getBlock(x, y, z);
      if (cur && !DEF[cur].fluid && !DEF[cur].cross) return;
      if (hid === ID.WATER_BUCKET && this.dim === 'nether') { this.log('Das Wasser verdunstet im Nether.'); this.inv.slots[this.inv.sel] = { id: ID.BUCKET, n: 1 }; this.updateHeld(true); return; }
      this.placeFluid(x, y, z, hid === ID.WATER_BUCKET ? ID.WATER : ID.LAVA);
      this.inv.slots[this.inv.sel] = { id: ID.BUCKET, n: 1 }; this.updateHeld(true);
      return;
    }
    if (hid === ID.FLINT_AND_STEEL) {
      if (t) {
        const x = t.x + t.nx, y = t.y + t.ny, z = t.z + t.nz;
        if (this.tryLightPortal(x, y, z)) { this.damageHeld(1); this.sfx('fire'); }
        else if (t.id === ID.END_FRAME) { /* nichts */ }
        else { this.sfx('fire'); }
      }
      return;
    }
    if (hid === ID.ENDER_PEARL) {
      const e = p.eye(), d = this.lookDir();
      this.addProj('pearl', e[0], e[1] - 0.1, e[2], d[0] * 26, d[1] * 26 + 2, d[2] * 26, { fromPlayer: true });
      this.inv.removeFromSel(1); this.updateHeld(); this.sfx('shoot');
      return;
    }
    if (hid === ID.ENDER_EYE) {
      if (t && t.id === ID.END_FRAME) {
        this.world.setBlock(t.x, t.y, t.z, ID.END_FRAME_EYE);
        this.inv.removeFromSel(1); this.updateHeld(); this.sfx('place');
        this.checkEndPortal(t.x, t.y, t.z);
        return;
      }
      if (this.dim === 'overworld') {
        const near = this.nearestStronghold();
        const e = p.eye();
        this.addProj('eye', e[0], e[1] - 0.2, e[2], 0, 0, 0, { tx: near.x, tz: near.z });
        this.inv.removeFromSel(1); this.updateHeld(); this.sfx('shoot');
        this.log('Das Enderauge fliegt in Richtung des Strongholds...');
      } else this.log('Das Enderauge funktioniert nur in der Oberwelt.');
      return;
    }
    if (hd.food) { return; }
    // Block platzieren
    if (hid < 256 && t) {
      const x = t.x + t.nx, y = t.y + t.ny, z = t.z + t.nz;
      if (y < 0 || y >= WH) return;
      const cur = w.getBlock(x, y, z);
      const cd = DEF[cur];
      if (cur && !cd.fluid && !cd.cross) return;
      if (hd.solid && overlapsSolidBox(p, x, y, z)) return;
      for (const en of w.entities) { if (en.kind === 'mob' && !en.dead && hd.solid && aabbOverlapBlock(en, x, y, z)) return; }
      w.setBlock(x, y, z, hid);
      if (hd.fluid) this.fluidInteract(x, y, z);
      this.sfx('place');
      this.inv.removeFromSel(1); this.updateHeld();
      if (hd.gravity) this.settle(x, y, z);
      if (hid === ID.OBSIDIAN) { /* ok */ }
    }
  }
  placeFluid(x, y, z, id) {
    this.world.setBlock(x, y, z, id);
    this.sfx('place');
    this.fluidInteract(x, y, z);
  }
  fluidInteract(x, y, z) {
    const w = this.world;
    const id = w.getBlock(x, y, z);
    const opp = id === ID.WATER ? ID.LAVA : ID.WATER;
    if (id === ID.WATER) {
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) { if (w.getBlock(x + dx, y + dy, z + dz) === ID.LAVA) { w.setBlock(x + dx, y + dy, z + dz, ID.OBSIDIAN); this.sfx('fire'); } }
    } else if (id === ID.LAVA) {
      for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) { if (w.getBlock(x + dx, y + dy, z + dz) === ID.WATER) { w.setBlock(x, y, z, ID.OBSIDIAN); this.sfx('fire'); break; } }
    }
  }

  // ---------- Portale ----------
  tryLightPortal(x, y, z) {
    const w = this.world;
    const isAir = (a, b, c) => w.getBlock(a, b, c) === 0;
    for (const axis of ['x', 'z']) {
      const dx = axis === 'x' ? 1 : 0, dz = axis === 'x' ? 0 : 1;
      let by = y, g = 0;
      while (isAir(x, by - 1, z) && g++ < 22) by--;
      if (w.getBlock(x, by - 1, z) !== ID.OBSIDIAN) continue;
      let lx = x, lz = z; g = 0;
      while (isAir(lx - dx, by, lz - dz) && g++ < 22) { lx -= dx; lz -= dz; }
      if (w.getBlock(lx - dx, by, lz - dz) !== ID.OBSIDIAN) continue;
      let rx = x, rz = z; g = 0;
      while (isAir(rx + dx, by, rz + dz) && g++ < 22) { rx += dx; rz += dz; }
      if (w.getBlock(rx + dx, by, rz + dz) !== ID.OBSIDIAN) continue;
      const width = Math.abs(rx - lx) + Math.abs(rz - lz) + 1;
      if (width < 2 || width > 21) continue;
      let h = 0;
      const rowAir = (yy) => { for (let i = 0; i < width; i++) if (!isAir(lx + dx * i, yy, lz + dz * i)) return false; return true; };
      while (h < 21 && rowAir(by + h)) h++;
      if (h < 3) continue;
      let ok = true;
      for (let i = 0; i < width; i++) if (w.getBlock(lx + dx * i, by + h, lz + dz * i) !== ID.OBSIDIAN || w.getBlock(lx + dx * i, by - 1, lz + dz * i) !== ID.OBSIDIAN) ok = false;
      for (let j = 0; j < h; j++) if (w.getBlock(lx - dx, by + j, lz - dz) !== ID.OBSIDIAN || w.getBlock(rx + dx, by + j, rz + dz) !== ID.OBSIDIAN) ok = false;
      if (!ok) continue;
      for (let i = 0; i < width; i++) for (let j = 0; j < h; j++) w.setBlock(lx + dx * i, by + j, lz + dz * i, axis === 'x' ? ID.PORTAL_X : ID.PORTAL_Z);
      this.log('Das Netherportal wurde entzündet!');
      this.sfx('portal');
      return true;
    }
    return false;
  }
  checkEndPortal(fx, fy, fz) {
    const w = this.world;
    for (let cx = fx - 2; cx <= fx + 2; cx++) for (let cz = fz - 2; cz <= fz + 2; cz++) {
      let ok = true;
      for (let d = -1; d <= 1 && ok; d++) {
        for (const [a, b] of [[cx - 2, cz + d], [cx + 2, cz + d], [cx + d, cz - 2], [cx + d, cz + 2]]) if (w.getBlock(a, fy, b) !== ID.END_FRAME_EYE) ok = false;
      }
      if (ok) {
        for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) w.setBlock(cx + a, fy, cz + b, ID.END_PORTAL);
        this.log('Das Endportal ist offen!'); this.sfx('portal');
        return true;
      }
    }
    return false;
  }
  nearestStronghold() {
    const p = this.player; let best = null, bd = 1e12;
    for (const s of this.worlds.overworld.gen.strongholds) { const d = Math.hypot(s.x - p.x, s.z - p.z); if (d < bd) { bd = d; best = s; } }
    return best;
  }
  updatePortalLogic(dt) {
    const p = this.player;
    if (p.dead) return;
    const w = this.world;
    const inb = (y) => w.getBlock(Math.floor(p.x), Math.floor(p.y + y), Math.floor(p.z));
    const b0 = DEF[inb(0.1)], b1 = DEF[inb(1.0)];
    const inPortal = !!(b0.portal || b1.portal);
    const inEnd = b0.special === 'endportal' || DEF[inb(-0.2)].special === 'endportal' || DEF[inb(0.5)].special === 'endportal';
    if (inEnd) {
      if (this.dim === 'overworld') { this.enterDimension('end', 34.5, 49, 0.5); this.log('Du betrittst Das Ende...'); }
      else if (this.dim === 'end') { this.enterDimension('overworld', this.spawn.x, 0, this.spawn.z, true); this.log('Du kehrst in die Oberwelt zurück. Gut gemacht!'); }
      return;
    }
    const po = document.getElementById('portalfx');
    if (inPortal && this.portalReady) {
      this.portalT += dt; po.style.opacity = Math.min(0.85, this.portalT / 3.5);
      if (this.portalT === dt) this.sfx('portal');
      if (this.portalT >= 3.5) { this.portalT = 0; po.style.opacity = 0; this.useNetherPortal(); }
    } else {
      if (!inPortal) { this.portalReady = true; }
      this.portalT = Math.max(0, this.portalT - dt * 2); po.style.opacity = Math.min(0.85, this.portalT / 3.5);
    }
  }
  useNetherPortal() {
    const p = this.player;
    const to = this.dim === 'nether' ? 'overworld' : 'nether';
    const tx = Math.floor(to === 'nether' ? p.x / 8 : p.x * 8), tz = Math.floor(to === 'nether' ? p.z / 8 : p.z * 8);
    const dest = this.worldFor(to);
    const prev = this.world;
    this.world = dest;
    const rad = to === 'nether' ? 16 : 24;
    this.ensureAround(tx, tz, Math.ceil(rad / 16) + 1);
    let spot = this.findPortalNear(dest, tx, tz, rad);
    if (!spot) spot = this.buildPortal(dest, tx, tz, to);
    this.world = prev;
    this.enterDimension(to, spot.x, spot.y, spot.z);
    this.portalReady = false;
  }
  ensureAround(x, z, r) {
    const cx = Math.floor(x / 16), cz = Math.floor(z / 16);
    for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) this.genChunk(cx + dx, cz + dz);
  }
  findPortalNear(w, tx, tz, rad) {
    let best = null, bd = 1e9;
    const y0 = 1, y1 = w.dim === 'nether' ? 62 : WH - 2;
    for (let x = tx - rad; x <= tx + rad; x++) for (let z = tz - rad; z <= tz + rad; z++) for (let y = y0; y <= y1; y++) {
      const d = DEF[w.getBlock(x, y, z)];
      if (d.portal) { const dd = (x - tx) ** 2 + (z - tz) ** 2 + (y * 0.01); if (dd < bd) { bd = dd; best = { x, y, z }; } }
    }
    if (!best) return null;
    let y = best.y; while (DEF[w.getBlock(best.x, y - 1, best.z)].portal) y--;
    return { x: best.x + 0.5, y, z: best.z + 0.5 };
  }
  buildPortal(w, tx, tz, to) {
    let px = tx, pz = tz, py;
    const clearFree = (x, y, z) => { for (let a = 0; a < 4; a++) for (let c = -1; c <= 1; c++) for (let h = 0; h < 5; h++) { if (w.isSolid(x + a, y + h, z + c) || DEF[w.getBlock(x + a, y + h, z + c)].fluid) return false; } for (let a = 0; a < 4; a++) for (let c = -1; c <= 1; c++) if (!w.isSolid(x + a, y - 1, z + c) || DEF[w.getBlock(x + a, y - 1, z + c)].fluid) return false; return true; };
    if (to === 'nether') {
      let found = false;
      for (let r = 0; r <= 24 && !found; r += 2) for (let a = 0; a < 8 && !found; a++) {
        const x = Math.round(tx + Math.cos(a * 0.785) * r), z = Math.round(tz + Math.sin(a * 0.785) * r);
        for (let y = 52; y > 18; y--) if (clearFree(x, y, z)) { px = x; pz = z; py = y; found = true; break; }
      }
      if (!found) {
        py = 34; px = tx; pz = tz;
        for (let a = -1; a < 5; a++) for (let c = -2; c <= 2; c++) { for (let h = 0; h < 7; h++) w.setBlock(px + a, py + h, pz + c, 0); w.setBlock(px + a, py - 1, pz + c, ID.NETHERRACK); }
      }
    } else {
      const top = w.surfaceY(tx, tz);
      py = Math.max(top, SEA) + 1; px = tx; pz = tz;
      for (let a = -1; a < 5; a++) for (let c = -2; c <= 2; c++) { for (let h = 0; h < 6; h++) w.setBlock(px + a, py + h, pz + c, 0); }
    }
    // Rahmen entlang X
    for (let a = -1; a <= 2; a++) for (let c = -1; c <= 1; c++) w.setBlock(px + a, py - 1, pz + c, ID.OBSIDIAN);
    for (let h = 0; h < 4; h++) { w.setBlock(px - 1, py + h, pz, ID.OBSIDIAN); w.setBlock(px + 2, py + h, pz, ID.OBSIDIAN); }
    for (let a = 0; a <= 1; a++) { w.setBlock(px + a, py + 3, pz, ID.OBSIDIAN); for (let h = 0; h < 3; h++) w.setBlock(px + a, py + h, pz, ID.PORTAL_X); }
    return { x: px + 1.0, y: py, z: pz + 0.5 };
  }

  // ---------- Dimensionen ----------
  enterDimension(name, x, y, z, safe) {
    const p = this.player;
    this.scene.remove(this.world.group);
    this.world = this.worldFor(name); this.dim = name;
    this.scene.add(this.world.group);
    this.ensureAround(x, z, 2);
    for (const c of this.world.chunks.values()) { c.dirty = true; this.world.dirtyList.add(c); }
    for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) { const c = this.world.getChunk(Math.floor(x / 16) + dx, Math.floor(z / 16) + dz); if (c && !c.group) this.meshNow(c); }
    p.x = x; p.z = z; p.vx = p.vy = p.vz = 0;
    p.y = (y > 0 && !safe) ? y : this.safeY(x, z);
    p.peakY = p.y;
    this.setupDim();
    this.mineKey = null;
    this.showTitle(DIMS[name]);
    if (name === 'end' && !this.endInit) {
      this.endInit = true;
      setTimeout(() => {
        if (this.dim !== 'end') return;
        const d = new Dragon(0, 78, 0); this.world.entities.push(d); this.world.group.add(d.mesh); this.boss = d;
        document.getElementById('boss').style.display = 'block';
        this.log('Der Enderdrache erwacht! Zerstöre die Kristalle auf den Obsidian-Türmen.');
      }, 800);
    }
    if (name === 'end' && this.boss && !this.boss.dead) document.getElementById('boss').style.display = 'block'; else if (name !== 'end') document.getElementById('boss').style.display = 'none';
  }
  showTitle(t) {
    const el = document.getElementById('title'); el.textContent = t; el.style.opacity = 1; clearTimeout(this._tt); this._tt = setTimeout(() => (el.style.opacity = 0), 2400);
  }
  setupDim() {
    const dim = this.dim;
    const far = Math.min(this.renderDist * 16 - 8, 220);
    this.U.uDay.value = 1;
    if (dim === 'overworld') { this.U.uAmb.value = 0.07; this.U.uNear.value = far * 0.55; this.U.uFar.value = far; }
    else if (dim === 'nether') { this.U.uAmb.value = 0.62; this.U.uNear.value = 8; this.U.uFar.value = Math.min(far, 90); this.U.uFog.value.set(0x300808); this.scene.background = new THREE.Color(0x300808); this.sunMesh.visible = this.moonMesh.visible = false; this.stars.material.opacity = 0; }
    else { this.U.uAmb.value = 0.5; this.U.uNear.value = far * 0.7; this.U.uFar.value = far * 1.1; this.U.uFog.value.set(0x07040e); this.scene.background = new THREE.Color(0x07040e); this.sunMesh.visible = this.moonMesh.visible = false; this.stars.material.opacity = 1; }
    this.scene.fog = new THREE.Fog(this.U.uFog.value.getHex(), this.U.uNear.value, this.U.uFar.value);
    this.sky2 = null;
  }

  // ---------- Himmel ----------
  updateSkyState() {
    const phase = (this.time % 1200) / 1200;
    const ang = phase * Math.PI * 2;
    const s = Math.sin(ang);
    this.dayFactor = this.dim === 'overworld' ? clamp((s + 0.18) / 0.5, 0, 1) : 1;
    this.sunAng = ang;
  }
  updateSky(dt) {
    if (this.dim !== 'overworld') {
      if (this.dim === 'end') { this.stars.position.copy(this.camera.position); }
      return;
    }
    const df = this.dayFactor, s = Math.sin(this.sunAng);
    this.U.uDay.value = 0.26 + 0.74 * df;
    const day = new THREE.Color(0x8ec0ff), night = new THREE.Color(0x070b1c), dusk = new THREE.Color(0xe8803a);
    const c = night.clone().lerp(day, df);
    const sunset = Math.max(0, 1 - Math.abs(s) * 5) ;
    c.lerp(dusk, sunset * 0.5);
    let fogc = c;
    const uw = this.camInWater();
    if (uw) { fogc = new THREE.Color(0x14327e).multiplyScalar(0.35 + 0.65 * df); this.U.uNear.value = 0; this.U.uFar.value = 22; }
    else { const far = Math.min(this.renderDist * 16 - 8, 220); this.U.uNear.value = far * 0.55; this.U.uFar.value = far; }
    this.U.uFog.value.copy(fogc);
    this.scene.background = fogc.clone();
    this.scene.fog.color.copy(fogc); this.scene.fog.near = this.U.uNear.value; this.scene.fog.far = this.U.uFar.value;
    this.amb.intensity = (0.35 + 0.6 * df) * 2.9; this.sun.intensity = (0.15 + 0.5 * df) * 3;
    const cp = this.camera.position;
    this.sunMesh.visible = true; this.moonMesh.visible = true;
    const dx = Math.cos(this.sunAng), dy = Math.sin(this.sunAng);
    this.sunMesh.position.set(cp.x + dx * 400, cp.y + dy * 400, cp.z + 60); this.sunMesh.lookAt(cp);
    this.moonMesh.position.set(cp.x - dx * 400, cp.y - dy * 400, cp.z + 60); this.moonMesh.lookAt(cp);
    this.stars.position.copy(cp); this.stars.material.opacity = clamp(1 - df * 1.6, 0, 1);
  }

  // ---------- Chunks ----------
  meshNow(c) {
    if (!c) return;
    const w = this.world;
    const out = meshChunk(w, c);
    if (c.group) { this.disposeGroup(c.group); w.group.remove(c.group); }
    const g = new THREE.Group();
    g.position.set(c.cx * CS, 0, c.cz * CS);
    out.forEach((b, i) => {
      if (!b.n) return;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(b.pos, 3));
      geo.setAttribute('uv', new THREE.BufferAttribute(b.uv, 2));
      geo.setAttribute('aLight', new THREE.BufferAttribute(b.light, 3));
      geo.setIndex(new THREE.BufferAttribute(b.idx, 1));
      geo.computeBoundingSphere();
      const m = new THREE.Mesh(geo, this.mats[i]);
      if (i === 2) m.renderOrder = 2;
      g.add(m);
    });
    c.group = g; c.dirty = false;
    w.dirtyList.delete(c);
    w.group.add(g);
  }
  disposeGroup(g) { g.children.forEach((m) => m.geometry && m.geometry.dispose()); }
  updateChunks(budget) {
    const w = this.world, p = this.player;
    const pcx = Math.floor(p.x / 16), pcz = Math.floor(p.z / 16);
    const R = this.renderDist;
    const t0 = performance.now();
    // Generieren
    for (const [dx, dz, d2] of this.offsets) {
      if (d2 > (R + 1) * (R + 1)) break;
      if (!w.chunks.has(World.key(pcx + dx, pcz + dz))) { this.genChunk(pcx + dx, pcz + dz); if (performance.now() - t0 > budget * 0.5) break; }
    }
    // Meshen
    if (w.dirtyList.size) {
      const list = [];
      for (const c of w.dirtyList) { const d2 = (c.cx - pcx) ** 2 + (c.cz - pcz) ** 2; if (d2 <= R * R + 1) list.push([d2, c]); }
      list.sort((a, b) => a[0] - b[0]);
      let n = 0;
      for (const [d2, c] of list) {
        let ready = true;
        for (let dx = -1; dx <= 1 && ready; dx++) for (let dz = -1; dz <= 1; dz++) if (!w.chunks.has(World.key(c.cx + dx, c.cz + dz))) { ready = false; break; }
        if (!ready) continue;
        this.meshNow(c); n++;
        if (performance.now() - t0 > budget || n >= 4) break;
      }
    }
    // Entladen
    this._unl = (this._unl || 0) + 1;
    if (this._unl % 40 === 0) {
      for (const c of w.chunks.values()) {
        if (!c.group) continue;
        if ((c.cx - pcx) ** 2 + (c.cz - pcz) ** 2 > (R + 2) * (R + 2)) { this.disposeGroup(c.group); w.group.remove(c.group); c.group = null; c.dirty = true; }
      }
    }
  }

  // ---------- Entitäten ----------
  addMob(type, x, y, z, opts) {
    let m;
    if (type === 'dragon') m = new Dragon(x, y, z);
    else if (type === 'crystal') m = new Crystal(x, y, z);
    else { if (!CFG[type]) return null; m = new Mob(type, x, y, z, opts); }
    this.world.entities.push(m); this.world.group.add(m.mesh);
    return m;
  }
  addProj(type, x, y, z, vx, vy, vz, o) {
    const pr = new Proj(type, x, y, z, vx, vy, vz, o);
    pr.mesh.position.set(x, y, z);
    this.world.entities.push(pr); this.world.group.add(pr.mesh);
    return pr;
  }
  updateEntities(dt) {
    const w = this.world, p = this.player;
    const ents = w.entities;
    for (let i = ents.length - 1; i >= 0; i--) {
      const e = ents[i];
      const far = Math.hypot(e.x - p.x, e.z - p.z);
      if (far > 130 && !e.noDespawn) { this.removeEnt(i); continue; }
      if (far > 90 && e.kind === 'mob' && !e.noDespawn && e.cfg && e.cfg.hostile) { this.removeEnt(i); continue; }
      if (far > 110 && e.noDespawn) continue;
      let rm = false;
      try { rm = e.update(dt, this); } catch (err) { console.error(err); rm = true; }
      if (rm || e.dead && e.kind !== 'mob') this.removeEnt(i);
    }
    // Spieler-Modell
    if (this.rig) {
      this.rig.root.visible = this.camMode > 0 && !p.dead;
      this.rig.root.position.set(p.x, p.y, p.z);
      this.rig.root.rotation.y = p.yaw + Math.PI;
      this.rig.update(dt, Math.hypot(p.vx, p.vz) * (p.onGround ? 1 : 0), this.swinging ? this.swing : 0, {});
      this.rig.head.rotation.x = -p.pitch;
    }
  }
  removeEnt(i) {
    const e = this.world.entities[i];
    if (e.mesh) { this.world.group.remove(e.mesh); e.mesh.traverse((o) => { if (o.geometry && !o.isSprite) o.geometry.dispose(); }); }
    this.world.entities.splice(i, 1);
  }
  updateFurnaces(dt) {
    for (const t of this.world.tiles.values()) {
      if (t.type !== 'furnace') continue;
      const res = t.in ? SMELT[t.in.id] : 0;
      const can = res && (!t.out || (t.out.id === res && t.out.n < maxStack(res)));
      if (t.burn > 0) t.burn -= dt;
      if (can && t.burn <= 0 && t.fuel && FUEL[t.fuel.id]) { t.burn = t.burnMax = FUEL[t.fuel.id]; t.fuel.n--; if (t.fuel.n <= 0) t.fuel = null; }
      if (can && t.burn > 0) {
        t.cook += dt;
        if (t.cook >= 10) {
          t.cook = 0;
          if (t.out) t.out.n++; else t.out = { id: res, n: 1 };
          t.in.n--; if (t.in.n <= 0) t.in = null;
        }
      } else if (t.cook > 0) t.cook = Math.max(0, t.cook - dt * 2);
      if (t.burn < 0) t.burn = 0;
    }
  }
  updateSpawning(dt) {
    this.spawnT = (this.spawnT || 0) - dt;
    if (this.spawnT > 0) return;
    this.spawnT = 1.2;
    const w = this.world, p = this.player;
    if (p.dead) return;
    const mobs = w.entities.filter((e) => e.kind === 'mob' && !e.dead);
    const hostile = mobs.filter((e) => e.cfg && e.cfg.hostile).length;
    if (this.dim === 'overworld') {
      if (hostile >= 18) return;
      for (let k = 0; k < 3; k++) {
        const a = Math.random() * 6.283, r = rnd(18, 40);
        const x = Math.floor(p.x + Math.cos(a) * r), z = Math.floor(p.z + Math.sin(a) * r);
        if (!w.hasChunkAt(x, z)) continue;
        let y = -1;
        for (let yy = Math.floor(p.y) + 12; yy > Math.floor(p.y) - 20; yy--) if (w.isSolid(x, yy - 1, z) && !w.isSolid(x, yy, z) && !w.isSolid(x, yy + 1, z) && !DEF[w.getBlock(x, yy - 1, z)].fluid && !DEF[w.getBlock(x, yy, z)].fluid) { y = yy; break; }
        if (y < 0) continue;
        const sky = w.skyLit(x, y, z);
        if (sky && this.isDay()) continue;
        const below = w.getBlock(x, y - 1, z);
        const rr = Math.random();
        let type = rr < 0.38 ? 'zombie' : rr < 0.62 ? 'skeleton' : rr < 0.82 ? 'creeper' : rr < 0.96 ? 'spider' : 'enderman';
        if (type === 'zombie' && Math.random() < 0.05) type = 'baby_zombie';
        if (type === 'enderman' && sky === false) type = 'zombie';
        this.addMob(type, x + 0.5, y, z + 0.5);
        break;
      }
      // Tiere nachspawnen
      if (this.isDay() && mobs.length - hostile < 12 && Math.random() < 0.25) {
        const a = Math.random() * 6.283, r = rnd(24, 44);
        const x = Math.floor(p.x + Math.cos(a) * r), z = Math.floor(p.z + Math.sin(a) * r);
        if (w.hasChunkAt(x, z)) { const y = w.topY(x, z); if (y > 0 && w.getBlock(x, y, z) === ID.GRASS) this.addMob(['pig', 'cow', 'sheep', 'chicken'][(Math.random() * 4) | 0], x + 0.5, y + 1, z + 0.5); }
      }
    } else if (this.dim === 'end') {
      const ends = mobs.filter((e) => e.type === 'enderman').length;
      if (ends < 5) {
        const a = Math.random() * 6.283, r = rnd(15, 30);
        const x = Math.floor(p.x + Math.cos(a) * r), z = Math.floor(p.z + Math.sin(a) * r);
        if (Math.hypot(x, z) < 40 && w.hasChunkAt(x, z)) { const y = w.topY(x, z); if (y > 0 && w.getBlock(x, y, z) === ID.END_STONE) this.addMob('enderman', x + 0.5, y + 1, z + 0.5); }
      }
    } else if (this.dim === 'nether') {
      if (hostile < 14 && Math.random() < 0.3) {
        const a = Math.random() * 6.283, r = rnd(20, 40);
        const x = Math.floor(p.x + Math.cos(a) * r), z = Math.floor(p.z + Math.sin(a) * r);
        if (w.hasChunkAt(x, z)) {
          for (let yy = 56; yy > 16; yy--) if (w.getBlock(x, yy - 1, z) === ID.NETHERRACK && !w.isSolid(x, yy, z) && !w.isSolid(x, yy + 1, z)) { this.addMob(Math.random() < 0.6 ? 'magma_cube' : 'ghast', x + 0.5, Math.random() < 0.5 ? yy : yy + 6, z + 0.5); break; }
        }
      }
    }
  }
  onDragonDead(d) {
    this.endDefeated = true; this.boss = null;
    document.getElementById('boss').style.display = 'none';
    const w = this.world;
    const y = 49;
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) w.setBlock(a, y, b, ID.END_PORTAL);
    for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) { if (Math.max(Math.abs(a), Math.abs(b)) === 2) w.setBlock(a, y, b, ID.BEDROCK); }
    for (let h = 0; h < 4; h++) w.setBlock(0, y + h, 0, ID.BEDROCK);
    w.setBlock(0, y + 4, 0, ID.TORCH); w.setBlock(1, y + 3, 0, ID.TORCH); w.setBlock(-1, y + 3, 0, ID.TORCH);
    for (let i = 0; i < 20; i++) this.puff(rnd(-4, 4), 50 + rnd(0, 6), rnd(-4, 4));
    this.sfx('explode');
    this.showTitle('Enderdrache besiegt!');
    this.log('Du hast den Enderdrachen besiegt! Betritt das Portal in der Mitte, um zurückzukehren.');
    this.spawnItem(ID.DIAMOND, 3, 0.5, y + 2, 2.5);
  }
  updateBossBar() {
    const b = this.boss;
    if (!b || b.dead) return;
    document.getElementById('bossfill').style.width = (Math.max(0, b.hp) / b.maxHp * 100) + '%';
  }
  explode(x, y, z, r, o = {}) {
    const p = this.player;
    const d = Math.hypot(p.x - x, p.y + 1 - y, p.z - z);
    if (d < r * 2 && o.dmg) {
      const f = 1 - d / (r * 2);
      this.hurtPlayer(Math.max(1, Math.round(o.dmg * f)), x, z, 1.5, 'Explosion', true);
    }
    this.sfx('explode');
    for (let i = 0; i < (o.big ? 12 : 22); i++) this.puff(x + rnd(-r, r) * 0.6, y + rnd(-r, r) * 0.6, z + rnd(-r, r) * 0.6);
    if (o.blocks) {
      const w = this.world, R = Math.ceil(r);
      for (let a = -R; a <= R; a++) for (let b = -R; b <= R; b++) for (let c = -R; c <= R; c++) {
        if (a * a + b * b + c * c > r * r) continue;
        const bx = Math.floor(x) + a, by = Math.floor(y) + b, bz = Math.floor(z) + c;
        const id = w.getBlock(bx, by, bz);
        if (!id) continue;
        const bd = DEF[id];
        if (bd.hardness < 0 || id === ID.OBSIDIAN || bd.fluid) continue;
        if (Math.random() < 0.9) this.breakBlock(bx, by, bz, Math.random() < 0.3, false);
      }
    }
  }
  pearlLand(x, y, z, pr) {
    const p = this.player;
    // sicheren Punkt suchen
    const w = this.world;
    let nx = x - pr.vx * 0.02, ny = y - pr.vy * 0.02, nz = z - pr.vz * 0.02;
    for (let k = 0; k < 6; k++) { if (!overlapsSolid(w, nx, ny, nz, 0.6, 1.8)) break; ny += 0.5; }
    p.x = nx; p.y = ny; p.z = nz; p.vx = p.vy = p.vz = 0; p.peakY = p.y;
    this.sfx('tp');
    this.hurtPlayer(5, null, null, 0, 'Enderperlen-Teleport', true);
  }
  puff(x, y, z) {
    const key = 'puff';
    let mat = this.pMats.get(key); if (!mat) { mat = new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.8 }); this.pMats.set(key, mat); }
    const m = new THREE.Mesh(this.pGeo, mat); m.position.set(x, y, z); m.scale.setScalar(rnd(2, 5));
    this.world.group.add(m); this.particles.push({ m, vx: rnd(-1, 1), vy: rnd(0.5, 2), vz: rnd(-1, 1), life: 0.8, grav: -1, g: this.world.group });
  }
  blockColor(id) {
    this._bc = this._bc || {};
    if (this._bc[id]) return this._bc[id];
    const d = DEF[id];
    let col = 0x888888;
    try {
      const cv = tileCanvas(d.tiles[2]); const data = cv.getContext('2d').getImageData(0, 0, 16, 16).data;
      let r = 0, g = 0, b = 0, n = 0; for (let i = 0; i < data.length; i += 4) if (data[i + 3] > 100) { r += data[i]; g += data[i + 1]; b += data[i + 2]; n++; }
      if (n) col = ((r / n) << 16) | ((g / n) << 8) | (b / n);
    } catch (e) { /* ignore */ }
    this._bc[id] = col; return col;
  }
  burst(x, y, z, id) {
    const col = this.blockColor(id);
    let mat = this.pMats.get(col); if (!mat) { mat = new THREE.MeshBasicMaterial({ color: col }); this.pMats.set(col, mat); }
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(this.pGeo, mat); m.position.set(x + Math.random(), y + Math.random(), z + Math.random());
      this.world.group.add(m); this.particles.push({ m, vx: rnd(-2, 2), vy: rnd(1, 4), vz: rnd(-2, 2), life: 0.7, grav: 14, g: this.world.group });
    }
  }
  updateParticles(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const q = this.particles[i];
      q.life -= dt; q.vy -= q.grav * dt;
      q.m.position.x += q.vx * dt; q.m.position.y += q.vy * dt; q.m.position.z += q.vz * dt;
      if (q.life <= 0) { q.g.remove(q.m); this.particles.splice(i, 1); }
    }
  }
  locate() {
    const p = this.player;
    const res = this.world.gen.locate(p.x, p.z);
    const names = { village: 'Dorf', desert: 'Wüstentempel', jungle: 'Dschungeltempel', ship: 'Schiffswrack', stronghold: 'Stronghold', fortress: 'Netherfestung' };
    const keys = Object.keys(res);
    if (!keys.length) { this.log('Hier gibt es keine bekannten Strukturen.'); return; }
    for (const k of keys) this.log(`${names[k] || k}: x=${Math.round(res[k].x)}, z=${Math.round(res[k].z)} (${Math.round(res[k].d)} Blöcke entfernt)`);
  }
  updateDebug() {
    const p = this.player;
    const bm = this.dim === 'overworld' ? this.world.gen.biomeAt(Math.floor(p.x), Math.floor(p.z)) : this.dim;
    document.getElementById('debug').textContent = `Minecraft-Klon | ${this.fps} FPS\nXYZ: ${p.x.toFixed(1)} / ${p.y.toFixed(1)} / ${p.z.toFixed(1)}\nWelt: ${DIMS[this.dim]} | Biom: ${bm}\nChunk: ${Math.floor(p.x / 16)}, ${Math.floor(p.z / 16)} | geladen: ${this.world.chunks.size}\nEntitäten: ${this.world.entities.length} | Tageszeit: ${Math.floor((this.time % 1200) / 1200 * 24)}h\n[L] Strukturen finden`;
  }

  // ---------- Rendering ----------
  render(dt) {
    const p = this.player, cam = this.camera;
    const e = p.eye();
    let cx = e[0], cy = e[1], cz = e[2];
    const sneakDrop = 0;
    cam.rotation.set(p.pitch, p.yaw, p.dead ? (this.camTilt || 0) : 0);
    cam.fov = 72 + (p.sprinting ? 8 : 0) * 1;
    cam.updateProjectionMatrix();
    if (this.camMode > 0) {
      const d = this.lookDir(); const sg = this.camMode === 1 ? -1 : 1;
      let dist = 4;
      const rh = raycast(this.world, e[0], e[1], e[2], sg * d[0], sg * d[1], sg * d[2], dist, false);
      if (rh) dist = Math.max(0.5, rh.t - 0.3);
      cx = e[0] + sg * d[0] * dist; cy = e[1] + sg * d[1] * dist; cz = e[2] + sg * d[2] * dist;
      if (this.camMode === 2) cam.rotation.set(-p.pitch, p.yaw + Math.PI, 0);
    }
    cam.position.set(cx, cy, cz);
    // Wasser / Himmel
    this.updateSky(dt);
    this.U.uTime.value = this.time;
    // Entity-Licht
    if (this.dim === 'nether') { this.amb.intensity = 2.8; this.sun.intensity = 1; this.amb.color.set(0xffaa88); }
    else if (this.dim === 'end') { this.amb.intensity = 2.3; this.sun.intensity = 1; this.amb.color.set(0xccbbff); }
    else this.amb.color.set(0xffffff);
    // Item-Drops drehen
    // Hand
    this.updateHeld();
    const first = this.camMode === 0 && !p.dead;
    this.hand.visible = first;
    if (first) {
      const sw = this.swing > 0 ? Math.sin(this.swing * Math.PI) : 0;
      const bob = Math.sin(this.time * 9) * 0.012 * Math.min(1, Math.hypot(p.vx, p.vz) / 4) * (p.onGround ? 1 : 0);
      this.hand.position.set(0.38 - sw * 0.1, -0.34 - sw * 0.1 + bob + (p.eatT > 0 ? Math.sin(this.time * 20) * 0.02 : 0), -0.6 - sw * 0.1);
      this.hand.rotation.set(-0.1 - sw * 1.1, 0.25 - sw * 0.3, -sw * 0.2);
    }
    this.renderer.clear();
    this.renderer.render(this.scene, cam);
    if (first) { this.renderer.clearDepth(); this.renderer.render(this.handScene, this.handCam); }
  }
}

function overlapsSolidBox(p, x, y, z) {
  const hw = p.w / 2;
  return p.x + hw > x && p.x - hw < x + 1 && p.z + hw > z && p.z - hw < z + 1 && p.y + p.h > y && p.y < y + 1;
}
function aabbOverlapBlock(e, x, y, z) {
  const hw = e.w / 2;
  return e.x + hw > x && e.x - hw < x + 1 && e.z + hw > z && e.z - hw < z + 1 && e.y + e.h > y && e.y < y + 1;
}
