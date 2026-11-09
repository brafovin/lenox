import * as THREE from 'three';
import { ID, DEF, itemIcon } from './registry.js';
import { moveEntity, lineOfSight, fluidAt, overlapsSolid, raycast } from './physics.js';
import * as M from './models.js';

const GRAV = 30;
const rnd = (a, b) => a + Math.random() * (b - a);
const angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };

export const CFG = {
  pig: { hp: 10, w: 0.8, h: 0.9, speed: 1.5, passive: true, rig: M.pigRig, drops: [['RAW_PORKCHOP', 1, 3, 1]], label: 'Schwein' },
  cow: { hp: 10, w: 0.9, h: 1.4, speed: 1.4, passive: true, rig: M.cowRig, drops: [['RAW_BEEF', 1, 3, 1]], label: 'Kuh' },
  sheep: { hp: 8, w: 0.9, h: 1.2, speed: 1.4, passive: true, rig: M.sheepRig, drops: [['RAW_MUTTON', 1, 2, 1], ['WOLLE', 1, 1, 1]], label: 'Schaf' },
  chicken: { hp: 4, w: 0.4, h: 0.7, speed: 1.3, passive: true, rig: M.chickenRig, drops: [['RAW_CHICKEN', 1, 1, 1]], label: 'Huhn' },
  zombie: { hp: 20, w: 0.6, h: 1.95, speed: 2.4, hostile: true, ai: 'melee', dmg: 3, burn: true, rig: () => M.zombieRig(false), drops: [['ROTTEN_FLESH', 0, 2, 1], ['IRON_INGOT', 1, 1, 0.03]], label: 'Zombie' },
  baby_zombie: { hp: 10, w: 0.4, h: 1.05, speed: 3.6, hostile: true, ai: 'melee', dmg: 2, burn: true, rig: () => M.zombieRig(true), drops: [['ROTTEN_FLESH', 0, 1, 1]], label: 'Baby-Zombie' },
  skeleton: { hp: 20, w: 0.6, h: 1.95, speed: 2.2, hostile: true, ai: 'skeleton', burn: true, rig: () => M.skeletonRig(false), drops: [['BONE', 0, 2, 1]], label: 'Skelett' },
  wither_skeleton: { hp: 20, w: 0.7, h: 2.4, speed: 2.6, hostile: true, ai: 'melee', dmg: 5, rig: () => M.skeletonRig(true), drops: [['COAL', 0, 1, 0.6], ['BONE', 0, 2, 1]], label: 'Wither-Skelett' },
  creeper: { hp: 20, w: 0.6, h: 1.7, speed: 2.3, hostile: true, ai: 'creeper', rig: M.creeperRig, drops: [['GUNPOWDER', 0, 2, 1]], label: 'Creeper' },
  spider: { hp: 16, w: 1.4, h: 0.9, speed: 3.3, hostile: true, ai: 'spider', dmg: 2, rig: M.spiderRig, drops: [['STRING', 0, 2, 1]], label: 'Spinne' },
  enderman: { hp: 40, w: 0.6, h: 2.9, speed: 5, ai: 'enderman', dmg: 6, rig: M.endermanRig, drops: [['ENDER_PEARL', 1, 1, 0.75]], label: 'Enderman' },
  silverfish: { hp: 8, w: 0.4, h: 0.3, speed: 3.2, hostile: true, ai: 'melee', dmg: 1, rig: M.silverfishRig, drops: [], label: 'Silberfischchen' },
  blaze: { hp: 20, w: 0.6, h: 1.8, speed: 2.6, hostile: true, ai: 'blaze', fly: true, rig: M.blazeRig, drops: [['BLAZE_ROD', 1, 1, 0.8]], label: 'Lohe' },
  ghast: { hp: 10, w: 3.6, h: 3.6, speed: 1.5, hostile: true, ai: 'ghast', fly: true, rig: M.ghastRig, drops: [['GUNPOWDER', 0, 2, 1]], label: 'Ghast' },
  magma_cube: { hp: 12, w: 1.0, h: 1.0, speed: 3, hostile: true, ai: 'magma', rig: M.magmaRig, drops: [], label: 'Magmawürfel' },
  dragon: { hp: 200, w: 8, h: 4, label: 'Enderdrache' },
  crystal: { hp: 1, w: 1.2, h: 2, label: 'Endkristall' },
};
const MAGMA = { size: [2.2, 1.5, 1.0, 0.6], hp: [12, 8, 4, 2], dmg: [4, 3, 2, 1] };

let nextId = 1;
export class Mob {
  constructor(type, x, y, z, opts = {}) {
    this.kind = 'mob'; this.type = type; this.id = nextId++;
    const c = CFG[type];
    this.cfg = c;
    this.gen = opts.gen || 0;
    this.x = x; this.y = y; this.z = z; this.vx = this.vy = this.vz = 0;
    this.w = c.w; this.h = c.h;
    this.hp = c.hp;
    if (type === 'magma_cube') { const s = MAGMA.size[this.gen]; this.w = s; this.h = s; this.hp = MAGMA.hp[this.gen]; }
    this.maxHp = this.hp;
    this.yaw = Math.random() * 6.28;
    this.onGround = false; this.t = 0; this.cool = 0; this.flash = 0; this.dead = false; this.deadT = 0;
    this.wanderT = 0; this.wdx = 0; this.wdz = 0; this.fleeT = 0; this.fuse = -1; this.aggro = false; this.shootT = rnd(1, 3); this.burst = 0; this.hopT = rnd(0.5, 2);
    this.rig = c.rig ? c.rig() : null;
    if (this.rig) {
      this.mesh = this.rig.root;
      if (type === 'magma_cube') this.mesh.scale.setScalar(this.w);
    }
    this.speedNow = 0;
    this.noDespawn = !!opts.persistent;
    this.fire = 0;
  }
  aabbs() { const hw = this.w / 2; return [[this.x - hw, this.y, this.z - hw, this.x + hw, this.y + this.h, this.z + hw]]; }

  damage(amount, g, fx, fz, kb = 1) {
    if (this.dead) return;
    this.hp -= amount;
    this.flash = 0.25;
    if (this.rig) M.setFlash(this.rig, true);
    const dx = this.x - fx, dz = this.z - fz, d = Math.hypot(dx, dz) || 1;
    if (!this.cfg.fly) { this.vx += dx / d * 6 * kb; this.vz += dz / d * 6 * kb; this.vy = Math.max(this.vy, 4.5 * Math.min(kb, 1)); } else { this.vx += dx / d * 4 * kb; this.vz += dz / d * 4 * kb; }
    if (this.cfg.passive) { this.fleeT = 5; this.fleeFrom = [fx, fz]; }
    if (this.type === 'enderman') { this.aggro = true; if (Math.random() < 0.5) this.teleport(g); }
    if (this.type === 'spider' || this.type === 'zombie') this.aggro = true;
    g.sfx('hit');
    if (this.hp <= 0) this.die(g);
  }
  die(g) {
    this.dead = true; this.deadT = 0.6;
    g.sfx('mobdie');
    const c = this.cfg;
    if (c.drops) for (const [name, a, b, p] of c.drops) {
      if (Math.random() > p) continue;
      const n = a + Math.floor(Math.random() * (b - a + 1));
      if (n > 0) g.spawnItem(ID[name], n, this.x, this.y + 0.5, this.z);
    }
    if (this.type === 'magma_cube') {
      if (this.gen < 3) for (let i = 0; i < 2; i++) { const m = g.addMob('magma_cube', this.x + (i ? 0.4 : -0.4), this.y + 0.3, this.z, { gen: this.gen + 1 }); if (m) { m.vx = (i ? 3 : -3); m.vy = 5; } }
      else g.spawnItem(ID.SLIME_BALL, 1, this.x, this.y + 0.5, this.z);
    }
    if (this.type === 'blaze' || this.type === 'ghast') this.fallT = 1;
  }
  teleport(g) {
    const w = g.world;
    for (let k = 0; k < 24; k++) {
      const a = Math.random() * 6.28, r = rnd(5, 14);
      const nx = this.x + Math.cos(a) * r, nz = this.z + Math.sin(a) * r;
      if (!w.hasChunkAt(Math.floor(nx), Math.floor(nz))) continue;
      for (let y = Math.floor(this.y) + 6; y > Math.floor(this.y) - 8; y--) {
        if (w.isSolid(Math.floor(nx), y - 1, Math.floor(nz)) && !w.isSolid(Math.floor(nx), y, Math.floor(nz)) && !w.isSolid(Math.floor(nx), y + 1, Math.floor(nz)) && !w.isSolid(Math.floor(nx), y + 2, Math.floor(nz)) && !DEF[w.getBlock(Math.floor(nx), y - 1, Math.floor(nz))].fluid) {
          this.x = nx; this.y = y; this.z = nz; this.vx = this.vy = this.vz = 0; g.sfx('tp'); return true;
        }
      }
    }
    return false;
  }
  steer(tx, tz, speed, dt) {
    const dx = tx - this.x, dz = tz - this.z, d = Math.hypot(dx, dz);
    if (d < 0.05) { this.vx *= 0.8; this.vz *= 0.8; return; }
    const k = Math.min(1, dt * (this.onGround || this.cfg.fly ? 12 : 2.5));
    this.vx += (dx / d * speed - this.vx) * k; this.vz += (dz / d * speed - this.vz) * k;
    const ty = Math.atan2(dx, dz);
    this.yaw += angDiff(this.yaw, ty) * Math.min(1, dt * 10);
    if ((this.hitX || this.hitZ) && this.onGround) this.vy = 8.4;
  }
  update(dt, g) {
    const c = this.cfg, w = g.world, p = g.player;
    this.t += dt;
    if (this.flash > 0) { this.flash -= dt; if (this.flash <= 0 && this.rig) M.setFlash(this.rig, false); }
    if (this.dead) {
      this.deadT -= dt;
      if (this.mesh) { this.mesh.rotation.z = Math.min(Math.PI / 2, this.mesh.rotation.z + dt * 6); }
      if (c.fly) { this.vy -= GRAV * dt * 0.5; moveEntity(w, this, dt); }
      return this.deadT <= 0;
    }
    if (this.cool > 0) this.cool -= dt;
    const dx = p.x - this.x, dz = p.z - this.z, dy = (p.y + 1) - (this.y + this.h * 0.5);
    const dist = Math.hypot(dx, dz);
    const dist3 = Math.hypot(dx, dy, dz);
    const inWater = fluidAt(w, this.x, this.y + 0.3, this.z) === 'water';
    const inLava = fluidAt(w, this.x, this.y + 0.3, this.z) === 'lava';
    if (inLava && this.type !== 'magma_cube' && this.type !== 'blaze' && this.type !== 'ghast') { this.fire += dt; if (this.fire > 0.5) { this.fire = 0; this.damage(3, g, this.x, this.z, 0); } }
    // Brennen bei Tageslicht
    if (c.burn && g.dim === 'overworld' && g.isDay() && w.skyLit(Math.floor(this.x), Math.floor(this.y + 1), Math.floor(this.z)) && !inWater) { this.fire += dt; if (this.fire >= 1) { this.fire = 0; this.damage(1.5, g, this.x, this.z, 0); } }
    // Physik
    if (!c.fly) {
      this.vy -= GRAV * dt;
      if (this.vy < -50) this.vy = -50;
      if (inWater) { this.vy = Math.max(this.vy, -2); if (this.hitX || this.hitZ || Math.random() < 0.05) this.vy = 3; this.vx *= 0.9; this.vz *= 0.9; }
    }
    this.ai(dt, g, { dx, dz, dy, dist, dist3, inWater });
    moveEntity(w, this, dt);
    if (this.onGround) { this.vx *= Math.pow(0.0005, dt) > 0.5 ? 1 : 1; }
    this.speedNow = Math.hypot(this.vx, this.vz);
    if (this.mesh) {
      this.mesh.position.set(this.x, this.y, this.z);
      this.mesh.rotation.y = this.yaw;
      if (this.rig.update) this.rig.update(dt, this.type === 'magma_cube' ? 0 : this.speedNow, 0);
      if (this.type === 'creeper' && this.fuse >= 0) { const s = 1 + Math.sin(this.fuse * 30) * 0.06 + this.fuse * 0.12; this.mesh.scale.set(s, s, s); M.setFlash(this.rig, Math.floor(this.fuse * 8) % 2 === 0, 0x888888); }
    }
    if (this.y < -20) return true;
    return false;
  }
  wander(dt, g, speed) {
    this.wanderT -= dt;
    if (this.wanderT <= 0) {
      this.wanderT = rnd(2, 6);
      if (Math.random() < 0.4) { this.wdx = 0; this.wdz = 0; } else { const a = Math.random() * 6.28; this.wdx = Math.cos(a); this.wdz = Math.sin(a); }
    }
    if (this.wdx || this.wdz) this.steer(this.x + this.wdx, this.z + this.wdz, speed, dt);
    else { this.vx *= 0.8; this.vz *= 0.8; }
  }
  melee(g, dmg) {
    if (this.cool <= 0) { this.cool = 1; g.hurtPlayer(dmg, this.x, this.z, 1, this.cfg.label); }
  }
  ai(dt, g, s) {
    const c = this.cfg, p = g.player;
    const night = !g.isDay();
    switch (c.ai) {
      case undefined: { // passiv
        if (this.fleeT > 0) { this.fleeT -= dt; const fx = this.fleeFrom; this.steer(this.x + (this.x - fx[0]), this.z + (this.z - fx[1]), c.speed * 2.2, dt); }
        else this.wander(dt, g, c.speed * 0.6);
        break;
      }
      case 'melee': {
        const range = this.type === 'silverfish' ? 12 : 22;
        if (s.dist < range && (s.dist < 10 || lineOfSight(g.world, this.x, this.y + 1.5, this.z, p.x, p.y + 1.5, p.z)) && !p.dead) {
          this.steer(p.x, p.z, c.speed, dt);
          if (s.dist < 1.2 + this.w * 0.5 && Math.abs(s.dy) < 1.8) this.melee(g, c.dmg);
        } else this.wander(dt, g, c.speed * 0.4);
        break;
      }
      case 'skeleton': {
        if (s.dist < 18 && !p.dead) {
          const los = lineOfSight(g.world, this.x, this.y + 1.6, this.z, p.x, p.y + 1.6, p.z);
          const ty = Math.atan2(s.dx, s.dz); this.yaw += angDiff(this.yaw, ty) * Math.min(1, dt * 10);
          if (s.dist > 9 || !los) this.steer(p.x, p.z, c.speed, dt);
          else if (s.dist < 5) this.steer(this.x - s.dx, this.z - s.dz, c.speed, dt);
          else { this.vx *= 0.8; this.vz *= 0.8; }
          this.shootT -= dt;
          if (this.shootT <= 0 && los && s.dist < 16) {
            this.shootT = rnd(1.4, 2.2);
            const ex = this.x, ey = this.y + 1.6, ez = this.z;
            const tx = p.x, ty2 = p.y + 1.3, tz = p.z;
            const d = Math.hypot(tx - ex, ty2 - ey, tz - ez);
            g.addProj('arrow', ex, ey, ez, (tx - ex) / d * 20 + rnd(-1, 1), (ty2 - ey) / d * 20 + d * 0.25, (tz - ez) / d * 20 + rnd(-1, 1), { dmg: 3 });
            g.sfx('shoot');
          }
        } else this.wander(dt, g, c.speed * 0.4);
        break;
      }
      case 'creeper': {
        if (s.dist < 16 && !p.dead && lineOfSight(g.world, this.x, this.y + 1, this.z, p.x, p.y + 1, p.z)) {
          if (this.fuse < 0) { this.steer(p.x, p.z, c.speed, dt); if (s.dist < 3) { this.fuse = 0; g.sfx('fuse'); } }
          else {
            this.vx *= 0.7; this.vz *= 0.7;
            this.fuse += dt;
            if (s.dist > 6) { this.fuse = -1; this.mesh.scale.set(1, 1, 1); M.setFlash(this.rig, false); }
            else if (this.fuse >= 1.5) { this.dead = true; this.deadT = 0; g.explode(this.x, this.y + 0.8, this.z, 3.2, { dmg: 22, blocks: true }); this.mesh.visible = false; }
          }
        } else { this.fuse = -1; this.wander(dt, g, c.speed * 0.4); }
        break;
      }
      case 'spider': {
        const hostile = night || this.aggro || !g.world.skyLit(Math.floor(this.x), Math.floor(this.y + 1), Math.floor(this.z));
        if (hostile && s.dist < 20 && !p.dead) {
          this.steer(p.x, p.z, c.speed, dt);
          if (s.dist < 4 && s.dist > 1.8 && this.onGround && this.cool <= 0 && Math.random() < dt * 2) { this.vy = 6; this.vx = s.dx / s.dist * 6; this.vz = s.dz / s.dist * 6; }
          if (s.dist < 1.6 && Math.abs(s.dy) < 1.5) this.melee(g, c.dmg);
          if ((this.hitX || this.hitZ)) this.vy = 5; // klettern
        } else this.wander(dt, g, c.speed * 0.4);
        break;
      }
      case 'enderman': {
        if (!this.aggro && g.dim !== null && !p.dead && s.dist < 40) {
          const eye = p.eye(), look = g.lookDir();
          const hx = this.x - eye[0], hy = this.y + 2.6 - eye[1], hz = this.z - eye[2];
          const hd = Math.hypot(hx, hy, hz);
          if (hd < 40 && (hx * look[0] + hy * look[1] + hz * look[2]) / hd > 0.985 && lineOfSight(g.world, eye[0], eye[1], eye[2], this.x, this.y + 2.6, this.z)) { this.aggro = true; g.sfx('scream'); }
        }
        if (this.aggro && !p.dead) {
          this.steer(p.x, p.z, c.speed, dt);
          if (s.dist < 1.6 && Math.abs(s.dy) < 2.5) this.melee(g, c.dmg);
          if (s.dist > 14 && Math.random() < dt * 0.4) this.teleportNear(g);
          if (this.rig.head) this.rig.head.rotation.x = -0.15;
        } else { this.wander(dt, g, c.speed * 0.2); if (Math.random() < dt * 0.03) this.teleport(g); }
        break;
      }
      case 'magma': {
        this.hopT -= dt;
        const sz = this.gen;
        if (s.dist < 18 && !p.dead) {
          const ty = Math.atan2(s.dx, s.dz); this.yaw += angDiff(this.yaw, ty) * Math.min(1, dt * 8);
          if (this.onGround && this.hopT <= 0) { this.hopT = rnd(0.7, 1.4); this.vy = 7 + (3 - sz); this.vx = s.dx / (s.dist || 1) * 4; this.vz = s.dz / (s.dist || 1) * 4; }
          if (s.dist < this.w * 0.5 + 0.6 && Math.abs(s.dy) < this.h + 1) this.melee(g, MAGMA.dmg[this.gen]);
        } else if (this.onGround) { this.vx *= 0.8; this.vz *= 0.8; if (this.hopT <= 0) { this.hopT = rnd(1.5, 3); const a = Math.random() * 6.28; this.vy = 6; this.vx = Math.cos(a) * 2; this.vz = Math.sin(a) * 2; } }
        if (this.onGround && this.vy === 0) { /* Landung */ }
        if (this.mesh) { const sq = this.onGround ? 1 : 1.15; this.rig.body.scale.set(1 / Math.sqrt(sq), sq, 1 / Math.sqrt(sq)); }
        break;
      }
      case 'blaze': {
        if (s.dist < 30 && !p.dead) {
          const ty = Math.atan2(s.dx, s.dz); this.yaw += angDiff(this.yaw, ty) * Math.min(1, dt * 6);
          const los = lineOfSight(g.world, this.x, this.y + 1, this.z, p.x, p.y + 1, p.z);
          const wantY = p.y + 2.5;
          this.vy += (Math.max(-3, Math.min(3, wantY - this.y)) - this.vy) * Math.min(1, dt * 3);
          if (s.dist > 10 || !los) { this.vx += (s.dx / (s.dist || 1) * c.speed - this.vx) * Math.min(1, dt * 3); this.vz += (s.dz / (s.dist || 1) * c.speed - this.vz) * Math.min(1, dt * 3); }
          else if (s.dist < 5) { this.vx += (-s.dx / (s.dist || 1) * c.speed - this.vx) * Math.min(1, dt * 3); this.vz += (-s.dz / (s.dist || 1) * c.speed - this.vz) * Math.min(1, dt * 3); }
          else { this.vx *= 0.9; this.vz *= 0.9; }
          this.shootT -= dt;
          if (los && this.shootT <= 0 && s.dist < 24) { this.burst = 3; this.shootT = 3; this.burstT = 0; }
          if (this.burst > 0) { this.burstT -= dt; if (this.burstT <= 0) { this.burstT = 0.25; this.burst--; const ex = this.x, ey = this.y + 1.2, ez = this.z; const d = Math.hypot(p.x - ex, p.y + 1 - ey, p.z - ez) || 1; g.addProj('fireball', ex, ey, ez, (p.x - ex) / d * 14, (p.y + 1 - ey) / d * 14, (p.z - ez) / d * 14, { dmg: 5 }); g.sfx('fire'); } }
        } else { this.vx *= 0.95; this.vz *= 0.95; this.vy = Math.sin(this.t) * 0.5; }
        break;
      }
      case 'ghast': {
        if (s.dist < 48 && !p.dead) {
          const ty = Math.atan2(s.dx, s.dz); this.yaw += angDiff(this.yaw, ty) * Math.min(1, dt * 3);
          const los = lineOfSight(g.world, this.x, this.y + 1.5, this.z, p.x, p.y + 1, p.z);
          if (s.dist > 22 || !los) { this.vx += (s.dx / s.dist * 2.2 - this.vx) * Math.min(1, dt); this.vz += (s.dz / s.dist * 2.2 - this.vz) * Math.min(1, dt); this.vy += ((p.y + 4 - this.y) * 0.3 - this.vy) * Math.min(1, dt); }
          else { this.vx *= 0.97; this.vz *= 0.97; this.vy += (Math.sin(this.t * 0.7) * 0.5 - this.vy) * Math.min(1, dt); }
          this.shootT -= dt;
          if (los && this.shootT <= 0 && s.dist < 40) { this.shootT = 3.5; const ex = this.x, ey = this.y + 2, ez = this.z; const d = Math.hypot(p.x - ex, p.y + 1 - ey, p.z - ez) || 1; g.addProj('bigfire', ex, ey, ez, (p.x - ex) / d * 9, (p.y + 1 - ey) / d * 9, (p.z - ez) / d * 9, { dmg: 6, owner: this }); g.sfx('fire'); }
        } else { this.vx *= 0.97; this.vz *= 0.97; this.vy = Math.sin(this.t * 0.5) * 0.4; }
        break;
      }
    }
  }
  teleportNear(g) {
    const p = g.player;
    for (let k = 0; k < 12; k++) {
      const a = Math.random() * 6.28, r = rnd(4, 8);
      const nx = p.x + Math.cos(a) * r, nz = p.z + Math.sin(a) * r;
      for (let y = Math.floor(p.y) + 4; y > Math.floor(p.y) - 6; y--) {
        const w = g.world;
        if (w.isSolid(Math.floor(nx), y - 1, Math.floor(nz)) && !w.isSolid(Math.floor(nx), y, Math.floor(nz)) && !w.isSolid(Math.floor(nx), y + 1, Math.floor(nz)) && !w.isSolid(Math.floor(nx), y + 2, Math.floor(nz))) { this.x = nx; this.y = y; this.z = nz; return; }
      }
    }
  }
}

// ---------- Enderdrache ----------
export class Dragon {
  constructor(x, y, z) {
    this.kind = 'mob'; this.type = 'dragon'; this.id = nextId++;
    this.cfg = CFG.dragon;
    this.x = x; this.y = y; this.z = z; this.vx = this.vy = this.vz = 0; this.w = 8; this.h = 4;
    this.hp = 200; this.maxHp = 200; this.yaw = 0; this.dead = false; this.deadT = 0; this.flash = 0;
    this.rig = M.dragonRig(); this.mesh = this.rig.root;
    this.ang = 0; this.state = 'circle'; this.stT = rnd(10, 16); this.hitCool = 0; this.noDespawn = true; this.healT = 0;
    this.tx = 0; this.ty = 0; this.tz = 0; this.dying = 0; this.t = 0;
  }
  headPos() { return [this.x + Math.sin(this.yaw) * 7, this.y + 0.8, this.z + Math.cos(this.yaw) * 7]; }
  aabbs() {
    const h = this.headPos();
    return [[this.x - 3.2, this.y - 2.5, this.z - 3.2, this.x + 3.2, this.y + 2.5, this.z + 3.2], [h[0] - 1.8, h[1] - 1.5, h[2] - 1.8, h[0] + 1.8, h[1] + 1.5, h[2] + 1.8]];
  }
  damage(amount, g, fx, fz) {
    if (this.dead || this.dying > 0) return;
    this.hp -= amount; this.flash = 0.2; M.setFlash(this.rig, true);
    g.sfx('hit');
    if (this.hp <= 0) { this.dying = 5; this.hp = 0; g.sfx('dragondie'); }
  }
  update(dt, g) {
    const p = g.player;
    this.t += dt;
    if (this.flash > 0) { this.flash -= dt; if (this.flash <= 0) M.setFlash(this.rig, false); }
    if (this.dying > 0) {
      this.dying -= dt;
      this.y += Math.sin(this.t * 3) * 0.02;
      this.vy = -2;
      this.y += this.vy * dt * 0.3;
      this.rig.update(dt, 0, 0, {});
      this.mesh.position.set(this.x, this.y, this.z);
      this.mesh.rotation.z = Math.sin(this.t * 20) * 0.05;
      if (Math.random() < dt * 14) g.puff(this.x + rnd(-4, 4), this.y + rnd(-2, 2), this.z + rnd(-4, 4));
      if (this.dying <= 0) { this.dead = true; g.onDragonDead(this); return true; }
      return false;
    }
    // Heilung durch Kristalle
    const crystals = g.world.entities.filter((e) => e.type === 'crystal' && !e.dead);
    this.crystals = crystals.length;
    if (crystals.length && this.hp < this.maxHp) { this.healT += dt; if (this.healT >= 1) { this.healT = 0; this.hp = Math.min(this.maxHp, this.hp + crystals.length * 1.2); } }
    this.stT -= dt;
    let tx, ty, tz, speed;
    if (this.state === 'circle') {
      this.ang += dt * 0.32;
      tx = Math.cos(this.ang) * 34; tz = Math.sin(this.ang) * 34; ty = 74 + Math.sin(this.t * 0.5) * 6; speed = 16;
      if (this.stT <= 0 && !p.dead) {
        this.cycles = (this.cycles || 0) + 1;
        if (this.cycles % 3 === 0) { this.state = 'perch'; this.stT = 16; g.log('Der Enderdrache landet in der Mitte der Insel - jetzt ist deine Chance!'); }
        else { this.state = 'charge'; this.stT = 6; g.log('Der Enderdrache greift an!'); }
      }
    } else if (this.state === 'perch') {
      tx = 0; tz = 0; ty = 53;
      const dd = Math.hypot(this.x, this.z, this.y - 53);
      speed = dd < 3 ? 0 : 14;
      if (dd < 6) { const face = Math.atan2(p.x - this.x, p.z - this.z); this.yaw += angDiff(this.yaw, face) * Math.min(1, dt * 1.5); }
      if (this.stT <= 0) { this.state = 'circle'; this.stT = rnd(14, 22); this.ang = Math.atan2(this.z, this.x); }
    } else {
      tx = p.x; tz = p.z; ty = p.y + 1; speed = 22;
      if (this.stT <= 0 || (Math.hypot(this.x - p.x, this.z - p.z) < 5 && this.stT < 4.5)) { this.state = 'circle'; this.stT = rnd(14, 22); this.ang = Math.atan2(this.z, this.x); }
    }
    const dx = tx - this.x, dy = ty - this.y, dz = tz - this.z, d = Math.hypot(dx, dy, dz) || 1;
    const k = Math.min(1, dt * 1.6);
    this.vx += (dx / d * speed - this.vx) * k; this.vy += (dy / d * speed - this.vy) * k; this.vz += (dz / d * speed - this.vz) * k;
    this.x += this.vx * dt; this.y += this.vy * dt; this.z += this.vz * dt;
    const ty2 = Math.atan2(this.vx, this.vz);
    if (this.state !== 'perch' && Math.hypot(this.vx, this.vz) > 1) this.yaw += angDiff(this.yaw, ty2) * Math.min(1, dt * 2.5);
    // Schaden an Spieler
    this.hitCool -= dt;
    if (this.hitCool <= 0 && !p.dead) {
      for (const b of this.aabbs()) {
        if (p.x > b[0] - 0.4 && p.x < b[3] + 0.4 && p.y + 1.8 > b[1] && p.y < b[4] && p.z > b[2] - 0.4 && p.z < b[5] + 0.4) {
          this.hitCool = 1.6; g.hurtPlayer(4, this.x, this.z, 2.2, 'Enderdrache'); break;
        }
      }
    }
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.rotation.y = this.yaw;
    this.mesh.rotation.z = -angDiff(this.yaw, ty2) * 0.3;
    this.rig.update(dt, 0, 0, { open: this.state === 'charge' });
    return false;
  }
}

export class Crystal {
  constructor(x, y, z) {
    this.kind = 'mob'; this.type = 'crystal'; this.id = nextId++;
    this.cfg = CFG.crystal; this.x = x; this.y = y; this.z = z; this.vx = this.vy = this.vz = 0; this.w = 1.2; this.h = 2; this.hp = 1; this.maxHp = 1; this.dead = false; this.noDespawn = true; this.noPhys = true;
    this.rig = M.crystalRig(); this.mesh = this.rig.root; this.mesh.position.set(x, y - 1, z);
  }
  aabbs() { return [[this.x - 0.7, this.y - 0.5, this.z - 0.7, this.x + 0.7, this.y + 1.7, this.z + 0.7]]; }
  damage(a, g) { if (this.dead) return; this.dead = true; g.explode(this.x, this.y + 0.5, this.z, 3, { dmg: 10, blocks: false, big: true }); g.log('Ein Endkristall wurde zerstört!'); }
  update(dt) { this.rig.update(dt); return this.dead; }
}

// ---------- Projektile ----------
export class Proj {
  constructor(type, x, y, z, vx, vy, vz, o = {}) {
    this.kind = 'proj'; this.type = type; this.x = x; this.y = y; this.z = z; this.vx = vx; this.vy = vy; this.vz = vz;
    this.dmg = o.dmg || 3; this.owner = o.owner; this.fromPlayer = !!o.fromPlayer; this.life = 0; this.dead = false; this.o = o;
    let mesh;
    if (type === 'arrow') { mesh = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.7), new THREE.MeshBasicMaterial({ color: 0xc8b090 })); }
    else if (type === 'fireball' || type === 'bigfire') {
      const s = type === 'bigfire' ? 1.1 : 0.3;
      mesh = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), new THREE.MeshBasicMaterial({ color: type === 'bigfire' ? 0xff8030 : 0xffaa20 }));
      const inner = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.6, s * 0.6), new THREE.MeshBasicMaterial({ color: 0xffee88 })); mesh.add(inner);
    }
    else if (type === 'pearl') { mesh = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), new THREE.MeshBasicMaterial({ color: 0x1fb89a })); }
    else if (type === 'eye') { mesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), new THREE.MeshBasicMaterial({ color: 0x3cc470 })); this.sx = x; this.sz = z; }
    this.mesh = mesh;
    this.w = 0.2; this.h = 0.2;
  }
  update(dt, g) {
    this.life += dt;
    const w = g.world, p = g.player;
    if (this.type === 'eye') return this.updateEye(dt, g);
    if (this.type === 'arrow') this.vy -= 10 * dt;
    else if (this.type === 'pearl') this.vy -= 20 * dt;
    const nx = this.x + this.vx * dt, ny = this.y + this.vy * dt, nz = this.z + this.vz * dt;
    // Treffer-Check gegen Spieler
    if (!this.fromPlayer && !p.dead && Math.abs(nx - p.x) < 0.5 && nz > p.z - 0.5 && nz < p.z + 0.5 && ny > p.y && ny < p.y + 1.9) {
      if (this.type === 'bigfire') g.explode(nx, ny, nz, 2.2, { dmg: this.dmg + 4, blocks: false, big: true });
      else g.hurtPlayer(this.dmg, this.x - this.vx, this.z - this.vz, 0.6, this.type === 'arrow' ? 'Skelett' : 'Lohe');
      this.dead = true; return true;
    }
    // Mobs (zurückgeschlagener Feuerball)
    if (this.fromPlayer && (this.type === 'bigfire' || this.type === 'fireball')) {
      for (const e of w.entities) { if (e.kind !== 'mob' || e.dead || e === this.owner && this.life < 0.5) continue; for (const b of e.aabbs()) { if (nx > b[0] && nx < b[3] && ny > b[1] && ny < b[4] && nz > b[2] && nz < b[5]) { e.damage(this.type === 'bigfire' ? 20 : 5, g, this.x, this.z, 1); if (this.type === 'bigfire') g.explode(nx, ny, nz, 2, { dmg: 0, blocks: false, big: true }); this.dead = true; return true; } } }
    }
    if (w.isSolid(Math.floor(nx), Math.floor(ny), Math.floor(nz))) {
      if (this.type === 'bigfire') g.explode(this.x, this.y, this.z, 2.2, { dmg: this.dmg + 4, blocks: false, big: true });
      else if (this.type === 'pearl') { g.pearlLand(this.x, this.y, this.z, this); }
      this.dead = true; return true;
    }
    if (this.type === 'pearl' && ny < -5) { this.dead = true; return true; }
    this.x = nx; this.y = ny; this.z = nz;
    if (this.life > 12 || this.y < -10) { this.dead = true; return true; }
    this.mesh.position.set(this.x, this.y, this.z);
    if (this.type === 'arrow') this.mesh.lookAt(this.x + this.vx, this.y + this.vy, this.z + this.vz);
    return false;
  }
  updateEye(dt, g) {
    const o = this.o;
    const t = this.life;
    if (t < 1.4) {
      if (o.tx !== undefined) {
        const dx = o.tx - this.x, dz = o.tz - this.z, d = Math.hypot(dx, dz) || 1;
        const sp = Math.min(9, d * 2 + 2) ;
        this.x += dx / d * sp * dt; this.z += dz / d * sp * dt;
      } else { this.x += this.vx * dt; this.z += this.vz * dt; }
      this.y += (t < 0.9 ? 3.5 : 0.5) * dt;
    } else {
      this.vy -= 18 * dt; this.y += this.vy * dt;
      if (t > 2.3 || g.world.isSolid(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))) {
        if (Math.random() < 0.8) g.spawnItem(ID.ENDER_EYE, 1, this.x, this.y + 0.3, this.z); else g.log('Das Enderauge ist zersprungen.');
        this.dead = true; return true;
      }
    }
    this.mesh.position.set(this.x, this.y, this.z);
    return false;
  }
}

// ---------- Items am Boden ----------
const spriteTex = new Map();
export function spriteFor(id) {
  if (spriteTex.has(id)) return spriteTex.get(id);
  const cv = itemIcon(id);
  const t = new THREE.CanvasTexture(cv);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter;
  spriteTex.set(id, t);
  return t;
}
export class ItemDrop {
  constructor(stack, x, y, z, vel) {
    this.kind = 'item'; this.stack = stack; this.x = x; this.y = y; this.z = z;
    this.vx = vel ? vel[0] : rnd(-1.5, 1.5); this.vy = vel ? vel[1] : rnd(2, 4); this.vz = vel ? vel[2] : rnd(-1.5, 1.5);
    this.w = 0.3; this.h = 0.3; this.age = 0; this.delay = 0.6; this.dead = false;
    const mat = new THREE.SpriteMaterial({ map: spriteFor(stack.id), transparent: true, alphaTest: 0.1 });
    this.mesh = new THREE.Sprite(mat);
    const s = DEF[stack.id].block && !DEF[stack.id].cross ? 0.38 : 0.45;
    this.mesh.scale.set(s, s, s);
    this.size = s;
  }
  update(dt, g) {
    this.age += dt; this.delay -= dt;
    this.vy -= GRAV * dt;
    moveEntity(g.world, this, dt);
    if (this.onGround) { this.vx *= 0.8; this.vz *= 0.8; }
    const inLava = fluidAt(g.world, this.x, this.y, this.z) === 'lava';
    if (inLava) { this.dead = true; return true; }
    this.mesh.position.set(this.x, this.y + this.size * 0.5 + Math.sin(this.age * 3) * 0.04 + 0.1, this.z);
    const p = g.player;
    if (this.delay <= 0 && !p.dead) {
      const dx = p.x - this.x, dy = p.y + 0.9 - this.y, dz = p.z - this.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < 1.2 * 1.2) { if (g.pickup(this.stack)) { this.dead = true; g.sfx('pop'); return true; } }
      else if (d2 < 3 * 3 && g.canPickup(this.stack)) { const d = Math.sqrt(d2); this.vx += dx / d * 20 * dt; this.vz += dz / d * 20 * dt; this.vy += dy / d * 20 * dt; }
    }
    if (this.age > 300) { this.dead = true; return true; }
    return false;
  }
}
