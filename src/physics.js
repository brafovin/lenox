import { DEF } from './registry.js';

const EPS = 1e-3;

function resolve(world, e, axis, amt) {
  const hw = e.w / 2;
  const minX = Math.floor(e.x - hw + 1e-4), maxX = Math.floor(e.x + hw - 1e-4);
  const minY = Math.floor(e.y + 1e-4), maxY = Math.floor(e.y + e.h - 1e-4);
  const minZ = Math.floor(e.z - hw + 1e-4), maxZ = Math.floor(e.z + hw - 1e-4);
  let hit = false;
  let val = amt > 0 ? Infinity : -Infinity;
  for (let y = minY; y <= maxY; y++) for (let z = minZ; z <= maxZ; z++) for (let x = minX; x <= maxX; x++) {
    if (!world.isSolid(x, y, z)) continue;
    hit = true;
    if (axis === 'x') val = amt > 0 ? Math.min(val, x - hw - EPS) : Math.max(val, x + 1 + hw + EPS);
    else if (axis === 'z') val = amt > 0 ? Math.min(val, z - hw - EPS) : Math.max(val, z + 1 + hw + EPS);
    else val = amt > 0 ? Math.min(val, y - e.h - EPS) : Math.max(val, y + 1);
  }
  if (hit) {
    e[axis] = val;
    if (axis === 'x') { e.vx = 0; e.hitX = true; }
    else if (axis === 'z') { e.vz = 0; e.hitZ = true; }
    else { if (amt < 0) e.onGround = true; e.vy = 0; }
  }
  return hit;
}

// Bewegt Entity e um dt; liest e.vx, vy, vz
export function moveEntity(world, e, dt, sneakEdge) {
  e.onGround = false; e.hitX = false; e.hitZ = false;
  const steps = Math.max(1, Math.ceil(Math.max(Math.abs(e.vx), Math.abs(e.vy), Math.abs(e.vz)) * dt / 0.35));
  const sd = dt / steps;
  for (let s = 0; s < steps; s++) {
    let d = e.vy * sd;
    if (d) { e.y += d; resolve(world, e, 'y', d); }
    const wasGround = e.onGround || e.wasGround;
    d = e.vx * sd;
    if (d) {
      const ox = e.x; e.x += d; resolve(world, e, 'x', d);
      if (sneakEdge && wasGround && !groundBelow(world, e)) { e.x = ox; e.vx = 0; }
    }
    d = e.vz * sd;
    if (d) {
      const oz = e.z; e.z += d; resolve(world, e, 'z', d);
      if (sneakEdge && wasGround && !groundBelow(world, e)) { e.z = oz; e.vz = 0; }
    }
  }
  e.wasGround = e.onGround;
}

export function groundBelow(world, e) {
  const hw = e.w / 2;
  for (const dx of [-hw, hw]) for (const dz of [-hw, hw]) if (world.isSolid(Math.floor(e.x + dx), Math.floor(e.y - 0.05), Math.floor(e.z + dz))) return true;
  return false;
}

export function fluidAt(world, x, y, z) {
  const id = world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
  const d = DEF[id];
  return d.fluid || null;
}

export function overlapsSolid(world, x, y, z, w, h) {
  const hw = w / 2;
  for (let by = Math.floor(y + 1e-4); by <= Math.floor(y + h - 1e-4); by++)
    for (let bz = Math.floor(z - hw + 1e-4); bz <= Math.floor(z + hw - 1e-4); bz++)
      for (let bx = Math.floor(x - hw + 1e-4); bx <= Math.floor(x + hw - 1e-4); bx++)
        if (world.isSolid(bx, by, bz)) return true;
  return false;
}

// Voxel-Raycast
export function raycast(world, ox, oy, oz, dx, dy, dz, maxDist, fluids) {
  let x = Math.floor(ox), y = Math.floor(oy), z = Math.floor(oz);
  const sx = dx > 0 ? 1 : -1, sy = dy > 0 ? 1 : -1, sz = dz > 0 ? 1 : -1;
  const tdx = dx ? Math.abs(1 / dx) : Infinity, tdy = dy ? Math.abs(1 / dy) : Infinity, tdz = dz ? Math.abs(1 / dz) : Infinity;
  let tx = dx ? ((dx > 0 ? x + 1 - ox : ox - x) * tdx) : Infinity;
  let ty = dy ? ((dy > 0 ? y + 1 - oy : oy - y) * tdy) : Infinity;
  let tz = dz ? ((dz > 0 ? z + 1 - oz : oz - z) * tdz) : Infinity;
  let nx = 0, ny = 0, nz = 0, t = 0;
  for (let i = 0; i < 200; i++) {
    const id = world.getBlock(x, y, z);
    if (id) {
      const d = DEF[id];
      const hit = d.portal ? false : d.fluid ? !!fluids : d.special === 'endportal' ? false : true;
      if (hit) return { x, y, z, id, nx, ny, nz, t };
    }
    if (tx < ty && tx < tz) { t = tx; if (t > maxDist) break; x += sx; tx += tdx; nx = -sx; ny = 0; nz = 0; }
    else if (ty < tz) { t = ty; if (t > maxDist) break; y += sy; ty += tdy; nx = 0; ny = -sy; nz = 0; }
    else { t = tz; if (t > maxDist) break; z += sz; tz += tdz; nx = 0; ny = 0; nz = -sz; }
  }
  return null;
}

// Strahl gegen AABB, liefert t oder -1
export function rayAABB(ox, oy, oz, dx, dy, dz, minx, miny, minz, maxx, maxy, maxz) {
  let t0 = 0, t1 = Infinity;
  const o = [ox, oy, oz], d = [dx, dy, dz], mn = [minx, miny, minz], mx = [maxx, maxy, maxz];
  for (let i = 0; i < 3; i++) {
    if (Math.abs(d[i]) < 1e-9) { if (o[i] < mn[i] || o[i] > mx[i]) return -1; }
    else {
      let a = (mn[i] - o[i]) / d[i], b = (mx[i] - o[i]) / d[i];
      if (a > b) { const t = a; a = b; b = t; }
      t0 = Math.max(t0, a); t1 = Math.min(t1, b);
      if (t0 > t1) return -1;
    }
  }
  return t0;
}

export function lineOfSight(world, x1, y1, z1, x2, y2, z2) {
  const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
  const dist = Math.hypot(dx, dy, dz);
  if (dist < 0.01) return true;
  const hit = raycast(world, x1, y1, z1, dx / dist, dy / dist, dz / dist, dist, false);
  if (!hit) return true;
  return !DEF[hit.id].opaque;
}
