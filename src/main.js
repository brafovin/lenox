import { Game } from './game.js';
import { SKINS } from './models.js';

const $ = (id) => document.getElementById(id);
const game = new Game($('c'));
window.game = game;
import * as REG from './registry.js';
window.REG = REG;

let skin = Object.assign({}, SKINS.Steve);
let skinName = 'Steve';

function renderPreview() {
  const el = $('skinprev'); el.innerHTML = '';
  const u = 6;
  const box = (w, h, c) => { const i = document.createElement('i'); i.style.width = w * u + 'px'; i.style.height = h * u + 'px'; i.style.background = c; return i; };
  const row = (...els) => { const d = document.createElement('div'); els.forEach((e) => d.appendChild(e)); el.appendChild(d); };
  const head = box(8, 8, skin.skin); head.style.borderTop = `${u * 3}px solid ${skin.hair}`; head.style.height = (8 * u - u * 3) + 'px';
  const eyes = document.createElement('div'); eyes.style.cssText = `display:flex;gap:${u * 2}px;position:absolute;left:${u * 1.5}px;top:${u * 4}px`;
  const eye = () => { const i = document.createElement('i'); i.style.cssText = `width:${u}px;height:${u}px;background:${skin.eyes || '#223'};`; return i; };
  eyes.append(eye(), eye());
  const wrap = document.createElement('div'); wrap.style.position = 'relative'; wrap.appendChild(head); wrap.appendChild(eyes);
  row(wrap);
  row(box(4, 12, skin.skin), box(8, 12, skin.shirt), box(4, 12, skin.skin));
  row(box(4, 12, skin.pants), box(4, 12, skin.pants));
}
function setSkin(name) {
  skinName = name; skin = Object.assign({}, SKINS[name]);
  document.querySelectorAll('.skinbtn').forEach((b) => b.classList.toggle('on', b.textContent === name));
  ['skin', 'hair', 'shirt', 'pants'].forEach((k) => { $('c_' + k).value = skin[k]; });
  renderPreview();
}
Object.keys(SKINS).forEach((n) => { const b = document.createElement('button'); b.className = 'skinbtn'; b.textContent = n; b.onclick = () => setSkin(n); $('skins').appendChild(b); });
['skin', 'hair', 'shirt', 'pants'].forEach((k) => { $('c_' + k).oninput = (e) => { skin[k] = e.target.value; renderPreview(); }; });
setSkin('Steve');

async function create() {
  game.initAudio();
  $('menu').style.display = 'none';
  $('loading').style.display = 'flex';
  await game.start({ seed: $('seed').value.trim(), dist: parseInt($('dist').value, 10), skin }, (t, f) => { $('loadtext').textContent = t; $('loadfill').style.width = Math.round(f * 100) + '%'; });
  $('loading').style.display = 'none';
  $('hud').style.display = 'block';
  game.lock();
  setTimeout(() => { if (document.pointerLockElement !== $('c') && !game.player.dead && !game.ui.screen) game.setPaused(true); }, 500);
}
$('create').onclick = create;
$('resume').onclick = () => { game.initAudio(); game.setPaused(false); };
$('respawn').onclick = () => game.respawn();
$('tomenu').onclick = $('tomenu2').onclick = () => location.reload();
// Klick auf Spielfläche bei Pause
document.addEventListener('keydown', (e) => { if (e.code === 'Escape' && game.paused) { /* ESC im Pausenmenü: weiter */ } });
