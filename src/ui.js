import { DEF, ID, iconURL, matchRecipe, SMELT, FUEL } from './registry.js';

const maxStack = (id) => DEF[id].maxStack || 64;
const isTool = (id) => !!DEF[id].tool || id === ID.FLINT_AND_STEEL;

export class Inventory {
  constructor() { this.slots = new Array(36).fill(null); this.sel = 0; }
  held() { return this.slots[this.sel]; }
  canAdd(st) {
    let n = st.n;
    for (let i = 0; i < 36 && n > 0; i++) { const s = this.slots[i]; if (!s) n -= maxStack(st.id); else if (s.id === st.id && !isTool(st.id)) n -= maxStack(st.id) - s.n; }
    return n <= 0 || this.slots.some((s) => !s || (s.id === st.id && !isTool(st.id) && s.n < maxStack(st.id)));
  }
  // gibt true zurück wenn komplett hinzugefügt, sonst bleibt Rest in st
  add(st) {
    if (!st || st.n <= 0) return true;
    const order = [];
    for (let i = 0; i < 36; i++) order.push(i);
    if (!isTool(st.id)) for (const i of order) { const s = this.slots[i]; if (s && s.id === st.id) { const m = maxStack(st.id) - s.n; const t = Math.min(m, st.n); s.n += t; st.n -= t; if (st.n <= 0) return true; } }
    for (const i of order) { if (!this.slots[i]) { const t = Math.min(maxStack(st.id), st.n); this.slots[i] = Object.assign({}, st, { n: t }); st.n -= t; if (st.n <= 0) return true; } }
    return st.n <= 0;
  }
  removeFromSel(n = 1) { const s = this.slots[this.sel]; if (!s) return; s.n -= n; if (s.n <= 0) this.slots[this.sel] = null; }
  count(id) { let c = 0; for (const s of this.slots) if (s && s.id === id) c += s.n; return c; }
}

// ---------- Icons für HUD ----------
function pixelIcon(rows, colors, scale = 1) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 9;
  const g = cv.getContext('2d');
  rows.forEach((r, y) => { for (let x = 0; x < 9; x++) { const c = colors[r[x]]; if (c) { g.fillStyle = c; g.fillRect(x, y, 1, 1); } } });
  return cv.toDataURL();
}
const HEART = ['.XX...XX.', 'XooXXXooX', 'XoRRRRRRX', 'XRRRRRRRX', '.XRRRRRX.', '..XRRRX..', '...XRX...', '....X....', '.........'];
const heartFull = pixelIcon(HEART.map((r) => r.replace(/o/g, 'h')), { X: '#000', R: '#e0201c', h: '#ff8a8a' });
const heartEmpty = pixelIcon(HEART.map((r) => r.replace(/[oR]/g, 'E')), { X: '#000', E: '#3a1010' });
const heartHalf = pixelIcon(HEART.map((r) => r.split('').map((c, i) => (c === 'o' ? (i < 4 ? 'h' : 'E') : c === 'R' ? (i < 5 ? 'R' : 'E') : c)).join('')), { X: '#000', R: '#e0201c', h: '#ff8a8a', E: '#3a1010' });
const FOOD = ['.....XXX.', '....XbbbX', '...XbBBbX', '..XbBBBbX', '.XbBBBbX.', 'XwXbBbX..', 'XwwXbX...', '.XXX.....', '.........'];
const foodFull = pixelIcon(FOOD, { X: '#000', b: '#d08840', B: '#a8602a', w: '#f2f2e6' });
const foodEmpty = pixelIcon(FOOD.map((r) => r.replace(/[bB]/g, 'E')), { X: '#000', E: '#3a2a10', w: '#6a6a60' });
const foodHalf = pixelIcon(FOOD.map((r) => r.split('').map((c, i) => ((c === 'b' || c === 'B') ? (i < 5 ? c : 'E') : c)).join('')), { X: '#000', b: '#d08840', B: '#a8602a', E: '#3a2a10', w: '#f2f2e6' });
const bubble = pixelIcon(['..XXXXX..', '.XwwwwwX.', 'XwhhwwwwX', 'XwhwwwwwX', 'XwwwwwwwX', 'XwwwwwwwX', '.XwwwwwX.', '..XXXXX..', '.........'], { X: '#1a3a8a', w: '#6aa0ff', h: '#e0f0ff' });

export class UI {
  constructor(game) {
    this.g = game;
    this.cursor = null;
    this.screen = null;
    this.hud = document.getElementById('hud');
    this.hearts = []; this.foods = []; this.bubbles = [];
    const hb = document.getElementById('hearts'), fb = document.getElementById('food'), bb = document.getElementById('air');
    for (let i = 0; i < 10; i++) {
      const h = document.createElement('img'); h.src = heartFull; hb.appendChild(h); this.hearts.push(h);
      const f = document.createElement('img'); f.src = foodFull; fb.appendChild(f); this.foods.push(f);
      const b = document.createElement('img'); b.src = bubble; bb.appendChild(b); this.bubbles.push(b);
    }
    this.hotbarEl = document.getElementById('hotbar');
    this.hotSlots = [];
    for (let i = 0; i < 9; i++) { const s = this.makeSlot(); s.el.classList.add('hot'); const num = document.createElement('span'); num.className = 'num'; num.textContent = i + 1; s.el.appendChild(num); this.hotbarEl.appendChild(s.el); this.hotSlots.push(s); }
    this.cursorEl = document.getElementById('cursoritem');
    this.screenEl = document.getElementById('screen');
    this.tip = document.getElementById('tooltip');
    this.toastEl = document.getElementById('toast');
    this.last = { hp: -1, food: -1, sel: -1, air: -1 };
    window.addEventListener('mousemove', (e) => { this.cursorEl.style.left = e.clientX + 'px'; this.cursorEl.style.top = e.clientY + 'px'; this.tip.style.left = (e.clientX + 14) + 'px'; this.tip.style.top = (e.clientY - 28) + 'px'; });
  }
  makeSlot() {
    const el = document.createElement('div'); el.className = 'slot';
    const img = document.createElement('img'); img.draggable = false; el.appendChild(img);
    const cnt = document.createElement('span'); cnt.className = 'count'; el.appendChild(cnt);
    const dur = document.createElement('div'); dur.className = 'dur'; const bar = document.createElement('div'); dur.appendChild(bar); el.appendChild(dur);
    return { el, img, cnt, dur, bar, key: null };
  }
  paint(slot, st) {
    const key = st ? st.id + ':' + st.n + ':' + (st.d || 0) : '';
    if (slot.key === key) return;
    slot.key = key;
    if (!st) { slot.img.style.display = 'none'; slot.cnt.textContent = ''; slot.dur.style.display = 'none'; return; }
    slot.img.style.display = 'block'; slot.img.src = iconURL(st.id);
    slot.cnt.textContent = st.n > 1 ? st.n : '';
    const dd = DEF[st.id];
    const mx = dd.tool ? dd.tool.dur : dd.dur;
    if (mx && st.d > 0) { slot.dur.style.display = 'block'; const f = 1 - st.d / mx; slot.bar.style.width = (f * 100) + '%'; slot.bar.style.background = f > 0.5 ? '#4f4' : f > 0.25 ? '#fd4' : '#f44'; } else slot.dur.style.display = 'none';
  }
  toast(msg, ms = 2800) {
    const d = document.createElement('div'); d.className = 'toastline'; d.textContent = msg; this.toastEl.appendChild(d);
    setTimeout(() => d.classList.add('fade'), ms - 600); setTimeout(() => d.remove(), ms);
    while (this.toastEl.children.length > 5) this.toastEl.firstChild.remove();
  }
  update() {
    const g = this.g, p = g.player;
    const hp = Math.ceil(p.hp), food = Math.ceil(p.food);
    const low = p.hp <= 6;
    if (this.last.hp !== hp) {
      this.last.hp = hp;
      for (let i = 0; i < 10; i++) { const v = hp - i * 2; this.hearts[i].src = v >= 2 ? heartFull : v === 1 ? heartHalf : heartEmpty; }
    }
    if (this.last.food !== food) {
      this.last.food = food;
      for (let i = 0; i < 10; i++) { const v = food - i * 2; this.foods[i].src = v >= 2 ? foodFull : v === 1 ? foodHalf : foodEmpty; }
    }
    const air = p.headInWater ? Math.ceil(p.air / 30) : 0;
    if (this.last.air !== air) { this.last.air = air; document.getElementById('air').style.display = air > 0 && p.air < 300 ? 'flex' : 'none'; this.bubbles.forEach((b, i) => { b.style.visibility = i < air ? 'visible' : 'hidden'; }); }
    for (let i = 0; i < 9; i++) this.paint(this.hotSlots[i], g.inv.slots[i]);
    if (this.last.sel !== g.inv.sel) {
      this.last.sel = g.inv.sel;
      this.hotSlots.forEach((s, i) => s.el.classList.toggle('sel', i === g.inv.sel));
      const st = g.inv.held();
      const n = document.getElementById('helditem');
      n.textContent = st ? DEF[st.id].label : ''; n.style.opacity = 1; clearTimeout(this._ht); this._ht = setTimeout(() => (n.style.opacity = 0), 1800);
    }
    if (this.screen) this.refreshScreen();
  }

  // ---------- Bildschirme ----------
  open(kind, tile) {
    const g = this.g;
    this.screen = { kind, tile, slots: [] };
    const n = kind === 'craft' ? 3 : kind === 'inventory' ? 2 : 0;
    this.screen.n = n;
    this.screen.grid = n ? new Array(n * n).fill(null) : null;
    const el = this.screenEl; el.innerHTML = ''; el.style.display = 'flex';
    const panel = document.createElement('div'); panel.className = 'panel'; el.appendChild(panel);
    const title = document.createElement('div'); title.className = 'ptitle';
    title.textContent = kind === 'craft' ? 'Werkbank' : kind === 'furnace' ? 'Ofen' : kind === 'chest' ? 'Truhe' : 'Inventar & Handwerk';
    panel.appendChild(title);
    const S = this.screen;
    const mkRow = (slots, cols) => { const d = document.createElement('div'); d.className = 'grid'; d.style.gridTemplateColumns = `repeat(${cols}, 44px)`; slots.forEach((s) => d.appendChild(s.el)); return d; };
    const reg = (get, set, opts = {}) => { const s = this.makeSlot(); s.get = get; s.set = set; Object.assign(s, opts); s.el.addEventListener('mousedown', (e) => { e.preventDefault(); this.click(s, e); }); s.el.addEventListener('mouseenter', () => { const st = s.get(); if (st) { this.tip.textContent = DEF[st.id].label; this.tip.style.display = 'block'; } }); s.el.addEventListener('mouseleave', () => (this.tip.style.display = 'none')); S.slots.push(s); return s; };
    const inv = g.inv;
    if (n) {
      const crow = document.createElement('div'); crow.className = 'craftrow';
      const gs = []; for (let i = 0; i < n * n; i++) gs.push(reg(() => S.grid[i], (v) => { S.grid[i] = v; }, { grid: true }));
      crow.appendChild(mkRow(gs, n));
      const arrow = document.createElement('div'); arrow.className = 'arrow'; arrow.textContent = '➜'; crow.appendChild(arrow);
      S.out = reg(() => S.outStack, () => {}, { output: true });
      crow.appendChild(S.out.el);
      panel.appendChild(crow);
    } else if (kind === 'furnace') {
      const t = tile;
      const row = document.createElement('div'); row.className = 'furnace';
      const col = document.createElement('div'); col.className = 'fcol';
      S.fin = reg(() => t.in, (v) => { t.in = v; }, { furnace: 'in' });
      S.flame = document.createElement('div'); S.flame.className = 'flame'; S.flameFill = document.createElement('div'); S.flame.appendChild(S.flameFill);
      S.ffuel = reg(() => t.fuel, (v) => { t.fuel = v; }, { furnace: 'fuel' });
      col.append(S.fin.el, S.flame, S.ffuel.el);
      const prog = document.createElement('div'); prog.className = 'prog'; S.progFill = document.createElement('div'); prog.appendChild(S.progFill);
      S.fout = reg(() => t.out, (v) => { t.out = v; }, { output: true, furnaceOut: true });
      row.append(col, prog, S.fout.el);
      panel.appendChild(row);
    } else if (kind === 'chest') {
      const gs = []; for (let i = 0; i < 27; i++) gs.push(reg(() => tile.items[i], (v) => { tile.items[i] = v; }, { chest: true }));
      panel.appendChild(mkRow(gs, 9));
    }
    const lbl = document.createElement('div'); lbl.className = 'ptitle small'; lbl.textContent = 'Inventar'; panel.appendChild(lbl);
    const main = []; for (let i = 9; i < 36; i++) main.push(reg(() => inv.slots[i], (v) => { inv.slots[i] = v; }, { inv: true }));
    panel.appendChild(mkRow(main, 9));
    const hot = []; for (let i = 0; i < 9; i++) hot.push(reg(() => inv.slots[i], (v) => { inv.slots[i] = v; }, { inv: true }));
    const hrow = mkRow(hot, 9); hrow.style.marginTop = '8px'; panel.appendChild(hrow);
    el.onmousedown = (e) => { if (e.target === el) this.dropCursor(e.button === 2); };
    el.oncontextmenu = (e) => e.preventDefault();
    this.refreshScreen();
  }
  dropCursor(one) {
    if (!this.cursor) return;
    const g = this.g;
    if (one && this.cursor.n > 1) { g.dropFromPlayer(Object.assign({}, this.cursor, { n: 1 })); this.cursor.n--; }
    else { g.dropFromPlayer(this.cursor); this.cursor = null; }
  }
  close() {
    const S = this.screen; if (!S) return;
    const g = this.g;
    if (S.grid) S.grid.forEach((s) => { if (s) g.pickupOrDrop(s); });
    if (this.cursor) { g.pickupOrDrop(this.cursor); this.cursor = null; }
    this.screen = null;
    this.screenEl.style.display = 'none'; this.screenEl.innerHTML = '';
    this.tip.style.display = 'none';
    this.cursorEl.style.display = 'none';
  }
  recomputeOutput() {
    const S = this.screen;
    if (!S.grid) return;
    const rc = matchRecipe(S.grid.map((s) => (s ? s.id : 0)), S.n, S.n);
    S.recipe = rc;
    if (rc) { const d = DEF[rc.out]; S.outStack = { id: rc.out, n: rc.n }; if (d.tool || d.dur) S.outStack.d = 0; } else S.outStack = null;
  }
  refreshScreen() {
    const S = this.screen;
    if (!S) return;
    this.recomputeOutput();
    for (const s of S.slots) this.paint(s, s.get());
    if (S.kind === 'furnace') {
      const t = S.tile;
      S.flameFill.style.height = (t.burnMax > 0 && t.burn > 0 ? (t.burn / t.burnMax) * 100 : 0) + '%';
      S.progFill.style.width = (t.cook / 10 * 100) + '%';
    }
    const c = this.cursor;
    if (c) { this.cursorEl.style.display = 'block'; this.cursorEl.innerHTML = `<img src="${iconURL(c.id)}"><span>${c.n > 1 ? c.n : ''}</span>`; } else this.cursorEl.style.display = 'none';
  }
  same(a, b) { return a && b && a.id === b.id && !isTool(a.id) && (a.d || 0) === (b.d || 0); }
  click(s, e) {
    const S = this.screen;
    const right = e.button === 2;
    const cur = this.cursor;
    const st = s.get();
    if (e.shiftKey && !right) { this.shiftClick(s); this.refreshScreen(); return; }
    if (s.output) {
      if (!st) return;
      if (s.furnaceOut) {
        if (!cur) { this.cursor = st; s.set(null); } else if (this.same(cur, st) && cur.n + st.n <= maxStack(cur.id)) { cur.n += st.n; s.set(null); }
        this.refreshScreen(); return;
      }
      if (cur && !(this.same(cur, st) && cur.n + st.n <= maxStack(cur.id))) return;
      this.takeCraft();
      this.refreshScreen(); return;
    }
    if (s.furnace === 'in' && cur && !SMELT[cur.id] && false) return;
    if (!right) {
      if (!cur) { if (st) { this.cursor = st; s.set(null); } }
      else if (!st) { s.set(cur); this.cursor = null; }
      else if (this.same(cur, st)) { const t = Math.min(maxStack(st.id) - st.n, cur.n); st.n += t; cur.n -= t; if (cur.n <= 0) this.cursor = null; }
      else { s.set(cur); this.cursor = st; }
    } else {
      if (!cur) { if (st) { const h = Math.ceil(st.n / 2); this.cursor = Object.assign({}, st, { n: h }); st.n -= h; if (st.n <= 0) s.set(null); } }
      else if (!st) { s.set(Object.assign({}, cur, { n: 1 })); cur.n--; if (cur.n <= 0) this.cursor = null; }
      else if (this.same(cur, st) && st.n < maxStack(st.id)) { st.n++; cur.n--; if (cur.n <= 0) this.cursor = null; }
      else if (!this.same(cur, st)) { s.set(cur); this.cursor = st; }
    }
    this.refreshScreen();
  }
  takeCraft() {
    const S = this.screen;
    if (!S.outStack) return false;
    const out = Object.assign({}, S.outStack);
    if (!this.cursor) this.cursor = out; else this.cursor.n += out.n;
    S.grid.forEach((s, i) => { if (s) { s.n--; if (s.n <= 0) S.grid[i] = null; } });
    this.g.sfx('pop');
    this.recomputeOutput();
    return true;
  }
  shiftClick(s) {
    const S = this.screen, g = this.g;
    const st = s.get();
    if (!st) return;
    if (s.output && !s.furnaceOut) {
      let guard = 0;
      while (S.outStack && guard++ < 64) {
        const out = Object.assign({}, S.outStack);
        if (!g.inv.canAdd(out)) break;
        g.inv.add(out);
        S.grid.forEach((x, i) => { if (x) { x.n--; if (x.n <= 0) S.grid[i] = null; } });
        this.recomputeOutput();
      }
      return;
    }
    const copy = Object.assign({}, st);
    let moved = false;
    if (s.inv) {
      // in Container verschieben
      if (S.kind === 'chest') { moved = this.addToList(S.tile.items, copy); }
      else if (S.kind === 'furnace') {
        const t = S.tile;
        if (SMELT[copy.id] && !t.in) { t.in = Object.assign({}, copy); copy.n = 0; moved = true; }
        else if (SMELT[copy.id] && this.same(t.in, copy)) { const m = Math.min(copy.n, maxStack(copy.id) - t.in.n); t.in.n += m; copy.n -= m; moved = true; }
        else if (FUEL[copy.id] && !t.fuel) { t.fuel = Object.assign({}, copy); copy.n = 0; moved = true; }
        else if (FUEL[copy.id] && this.same(t.fuel, copy)) { const m = Math.min(copy.n, maxStack(copy.id) - t.fuel.n); t.fuel.n += m; copy.n -= m; moved = true; }
      } else if (S.grid) { moved = this.addToList(S.grid, copy); }
      if (!moved) { // Hotbar <-> Inventar
        const idx = g.inv.slots.indexOf(st);
        const range = idx < 9 ? [9, 36] : [0, 9];
        const tmp = g.inv.slots.slice(range[0], range[1]);
        if (this.addToList(tmp, copy)) { for (let i = range[0]; i < range[1]; i++) g.inv.slots[i] = tmp[i - range[0]]; moved = true; }
      }
    } else {
      const tmp = g.inv.slots.slice();
      if (this.addToHotbarFirst(tmp, copy)) { g.inv.slots.splice(0, 36, ...tmp); moved = true; }
    }
    if (moved) { if (copy.n <= 0) s.set(null); else st.n = copy.n; }
  }
  addToHotbarFirst(list, st) { return this.addToList(list, st); }
  addToList(list, st) {
    let any = false;
    if (!isTool(st.id)) for (let i = 0; i < list.length && st.n > 0; i++) { const s = list[i]; if (s && s.id === st.id) { const m = Math.min(maxStack(st.id) - s.n, st.n); if (m > 0) { s.n += m; st.n -= m; any = true; } } }
    for (let i = 0; i < list.length && st.n > 0; i++) { if (!list[i]) { const m = Math.min(maxStack(st.id), st.n); list[i] = Object.assign({}, st, { n: m }); st.n -= m; any = true; } }
    return any;
  }
}
