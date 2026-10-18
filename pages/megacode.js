/**
 * SmartCare · ACLS Megacode simulator
 *
 *   Synth   beat-scheduled ECG synthesis (rate-agnostic: every P/QRS is an event,
 *           so HR changes, AV dissociation, dropped beats and pacing all work)
 *   Resp    capnography breath generator
 *   Mon     sweep-mode bedside monitor (ECG II · Pleth · CO₂) on one canvas
 *   Snd     WebAudio QRS beep, alarms, charge whine, shock thump
 *   Sim     scenario stage machine, ACLS rules, scoring, debrief
 *
 * Scenario data lives in megacode-scenarios.js (MEGACODE_SCENARIOS).
 */
(() => {
'use strict';

/* global MEGACODE_SCENARIOS */
const SCN = typeof MEGACODE_SCENARIOS !== 'undefined' ? MEGACODE_SCENARIOS : [];
const $ = (s, r = document) => r.querySelector(s);
const ico = n => `<svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#${n}"/></svg>`;
const fmt = s => { s = Math.max(0, Math.floor(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, w) => a + (b - a) * w;
const G = (t, mu, s, a) => a * Math.exp(-0.5 * ((t - mu) / s) ** 2);
const AG = (t, mu, sr, sf, a) => { const d = t - mu; return a * Math.exp(-0.5 * (d / (d < 0 ? sr : sf)) ** 2); };
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
};

/* ═══════════════════════ RHYTHM CATALOGUE ═══════════════════════ */
const RHY = {
  sbrady: ['Sinus bradycardia', 'Regular rhythm, a P wave before every QRS, rate < 60/min.'],
  avb2: ['2nd-degree AV block type II', 'Constant PR interval with sudden non-conducted P waves — more P waves than QRS complexes.'],
  avb3: ['3rd-degree (complete) AV block', 'P waves march through independently of the QRS — complete AV dissociation with a slow escape rhythm.'],
  escape: ['Ventricular escape rhythm', 'No P waves, wide bizarre QRS, rate 20–40/min.'],
  svt: ['Supraventricular tachycardia', 'Regular narrow-complex tachycardia > 150/min with no visible P waves.'],
  vt: ['Monomorphic VT', 'Regular, wide-complex tachycardia with uniform QRS morphology.'],
  stach: ['Sinus tachycardia', 'P before every QRS, rate > 100/min, gradual onset.'],
  afib: ['Atrial fibrillation', 'Irregularly irregular, no discernible P waves.'],
  vf: ['Ventricular fibrillation', 'Chaotic, irregular deflections with no identifiable QRS complexes.'],
  pvt: ['Pulseless VT', 'Wide regular complexes on the monitor — and no pulse. Treat exactly like VF.'],
  pea: ['PEA', 'Organized electrical activity on the monitor, but no palpable pulse.'],
  asys: ['Asystole', 'Flat line — confirm in a second lead and check the gain and leads.']
};
const PULSE_GRP = ['sbrady', 'avb2', 'avb3', 'escape', 'svt', 'vt', 'stach', 'afib'];
const ARREST_GRP = ['vf', 'pvt', 'pea', 'asys'];
const ARREST = new Set(['vf', 'pvt', 'pea', 'asys']);
const SHOCKABLE = new Set(['vf', 'pvt']);
const TYPE_CHIP = {
  brady: ['Brady', 'p-brady'], tachyU: ['Unstable tachy', 'p-tachy'], tachyS: ['Stable tachy', 'p-tachy'],
  resp: ['Resp. failure', 'p-resp'], vf: ['VF', 'p-shock'], pvt: ['pVT', 'p-shock'], pea: ['PEA', 'p-pea'],
  asys: ['Asystole', 'p-asys'], rosc: ['ROSC', 'p-rosc']
};
const pathClass = p => /VF|pVT/.test(p) ? 'p-shock' : /PEA/.test(p) ? 'p-pea' : /Asys/.test(p) ? 'p-asys' : /ROSC/.test(p) ? 'p-rosc'
  : /Brady/.test(p) ? 'p-brady' : /VT|SVT|tachy/i.test(p) ? 'p-tachy' : 'p-resp';
const HTS = [
  ['hypovolemia', 'Hypovolemia', 'Bleeding, dehydration'],
  ['hypoxia', 'Hypoxia', 'Airway, ventilation, O₂'],
  ['acidosis', 'Hydrogen ion', 'Acidosis'],
  ['hyperK', 'Hypo-/Hyperkalemia', 'Renal failure, dialysis'],
  ['hypothermia', 'Hypothermia', 'Core temperature'],
  ['tension', 'Tension pneumothorax', 'Unequal breath sounds, auto-PEEP'],
  ['tamponade', 'Tamponade, cardiac', 'Effusion on POCUS'],
  ['toxins', 'Toxins', 'Overdose, sedatives'],
  ['thrombosisP', 'Thrombosis, pulmonary', 'Massive PE'],
  ['thrombosisC', 'Thrombosis, coronary', 'ACS / STEMI, stent']
];
const NEED_LABEL = { vent: 'effective ventilation', epi: 'epinephrine', calcium: 'calcium', bicarb: 'sodium bicarbonate', ventSlow: 'allowing full exhalation (auto-PEEP)' };

/* ═══════════════════════ ECG SYNTHESIS ═══════════════════════ */
function qrsWave(dt, b) {
  const w = b.w || 0;
  let v = G(dt, 0, lerp(0.009, 0.024, w), -0.08)
    + G(dt, lerp(0.018, 0.062, w), lerp(0.0085, 0.036, w), b.amp || 1.55)
    + G(dt, lerp(0.034, 0.118, w), lerp(0.010, 0.032, w), lerp(-0.32, -0.62, w));
  if (b.stE) v += G(dt, lerp(0.10, 0.16, w), 0.05, b.stE);
  const tc = lerp(0.23, 0.31, w) + (b.longQT ? 0.16 : 0);
  if (b.peakT) v += G(dt, tc - 0.02, 0.03, 0.95);
  else v += AG(dt, tc, 0.055, 0.08, w > 0.7 ? -0.36 : 0.32);
  return v;
}
const rPeak = b => lerp(0.018, 0.062, b.w || 0);

const Synth = {
  r: { k: 'asys' }, beats: [], spikes: [], pleth: [], marks: [],
  nextV: 0, nextA: 0, nextP: 0, aN: 0, vN: 0,
  pace: { on: false, rate: 70, capture: false },
  shockT: -99, cpr: false, pulse: false, perf: 1, onQRS: null,
  set(r, t) {
    this.r = { ...r };
    this.beats = this.beats.filter(b => b.t < t);
    this.nextV = t + 0.3; this.nextA = t + 0.12; this.aN = 0; this.vN = 0;
  },
  setPace(p, t) {
    const was = this.pace.on;
    Object.assign(this.pace, p);
    if (this.pace.on && !was) this.nextP = t + 0.25;
  },
  push(b) { this.beats.push(b); },
  qrs(t, o) { this.push({ t, k: 'Q', ...o }); },
  schedule(tA) {
    const r = this.r, cap = this.pace.on && this.pace.capture;
    if (this.pace.on) {
      while (this.nextP <= tA) {
        this.spikes.push(this.nextP);
        if (cap) this.qrs(this.nextP + 0.03, { w: 1, amp: 1.35 });
        this.nextP += 60 / this.pace.rate;
      }
    }
    const rr = hr => (60 / Math.max(hr, 1)) * (1 + (Math.random() - 0.5) * 0.035);
    switch (r.k) {
      case 'sinus':
        while (this.nextV <= tA) {
          const t = this.nextV, iv = rr(r.hr);
          this.vN++;
          if (r.pvc && this.vN % r.pvc === 0) {
            if (!cap) this.qrs(t + 0.16 - iv * 0.32, { w: 1, amp: 1.7 });
          } else {
            this.push({ t, k: 'P' });
            if (!cap) this.qrs(t + (r.pr || 0.16), { w: r.wide || 0, peakT: r.peakT, longQT: r.longQT, stE: r.stE });
          }
          this.nextV += iv;
        }
        break;
      case 'svt': case 'vt': case 'escape':
        while (this.nextV <= tA) {
          if (!cap) this.qrs(this.nextV, r.k === 'svt' ? { w: 0, amp: 1.45 } : { w: r.k === 'vt' ? 1 : (r.wide ?? 0.9), amp: r.k === 'vt' ? 1.9 : 1.5, longQT: r.longQT });
          this.nextV += r.k === 'vt' ? 60 / r.hr : rr(r.hr);
        }
        break;
      case 'avb3':
        while (this.nextA <= tA) { this.push({ t: this.nextA, k: 'P' }); this.nextA += 60 / (r.aRate || 80); }
        while (this.nextV <= tA) { if (!cap) this.qrs(this.nextV, { w: r.wide ?? 0 }); this.nextV += rr(r.hr); }
        break;
      case 'avb2':
        while (this.nextA <= tA) {
          const t = this.nextA;
          this.push({ t, k: 'P' });
          if (this.aN % (r.ratio || 2) === 0 && !cap) this.qrs(t + (r.pr || 0.2), { w: r.wide || 0 });
          this.aN++;
          this.nextA += 60 / (r.aRate || 80);
        }
        break;
      default: break;
    }
  },
  update(t) {
    for (const b of this.beats) {
      if (b.k === 'Q' && !b.fired && t >= b.t + rPeak(b)) {
        b.fired = true;
        this.marks.push(b.t + rPeak(b));
        if (this.pulse) this.pleth.push({ t: b.t + rPeak(b), a: this.perf });
        if (this.onQRS) this.onQRS(b);
      }
    }
    if (this.beats.length > 40 || this.beats.some(b => b.t < t - 1.5)) this.beats = this.beats.filter(b => b.t >= t - 1.5);
    if (this.spikes.length > 8) this.spikes = this.spikes.filter(s => s >= t - 1);
    if (this.marks.length > 8) this.marks = this.marks.filter(s => s >= t - 1);
    if (this.pleth.length > 8) this.pleth = this.pleth.filter(p => p.t >= t - 1.6);
  },
  hr() {
    const r = this.r;
    if (this.pace.on && this.pace.capture) return this.pace.rate;
    if (r.k === 'vf' || r.k === 'asys') return 0;
    if (r.k === 'avb2') return Math.round((r.aRate || 80) / (r.ratio || 2));
    return r.hr || 0;
  },
  hasR() { return !['vf', 'asys'].includes(this.r.k); },
  ecg(t) {
    let v = 0;
    for (const b of this.beats) {
      const dt = t - b.t;
      if (dt < -0.12 || dt > 0.95) continue;
      v += b.k === 'P' ? G(dt, 0.04, 0.02, 0.13) : qrsWave(dt, b);
    }
    const k = this.r.k;
    if (k === 'vf') {
      const a = this.r.amp || 0.6;
      const m = 0.62 + 0.3 * Math.sin(2 * Math.PI * 0.23 * t) + 0.14 * Math.sin(2 * Math.PI * 0.61 * t + 1);
      v += a * m * (0.62 * Math.sin(2 * Math.PI * 4.7 * t + 0.8 * Math.sin(2 * Math.PI * 0.7 * t))
        + 0.36 * Math.sin(2 * Math.PI * 6.9 * t + 1.3) + 0.26 * Math.sin(2 * Math.PI * 3.1 * t + 2.2)) + (Math.random() - 0.5) * 0.05;
    }
    v += 0.03 * Math.sin(2 * Math.PI * 0.21 * t) + (Math.random() - 0.5) * (k === 'asys' ? 0.03 : 0.022);
    if (this.cpr) {
      const c = (t * 1.85) % 1;
      v += c < 0.42 ? 1.2 * Math.sin(Math.PI * c / 0.42) : -0.16 * Math.sin(Math.PI * (c - 0.42) / 0.58);
    }
    const ds = t - this.shockT;
    if (ds >= 0 && ds < 1.5) v += ds < 0.05 ? 5 : 3.2 * Math.exp(-(ds - 0.05) * 4.2) * Math.cos(ds * 2.6);
    return v;
  },
  spikeIn(t0, t1) { return this.spikes.some(s => s >= t0 && s < t1); },
  markIn(t0, t1) { return this.marks.some(s => s >= t0 && s < t1); },
  pl(t) {
    let v = 0;
    for (const p of this.pleth) {
      const d = t - p.t - 0.17;
      if (d < 0 || d > 1.2) continue;
      const s = d < 0.14 ? (1 - Math.cos(Math.PI * d / 0.14)) / 2 : Math.exp(-(d - 0.14) * 3.3);
      v += p.a * (s + G(d, 0.36, 0.035, 0.1));
    }
    if (this.cpr) { const c = (t * 1.85) % 1; v += 0.28 * Math.max(0, Math.sin(Math.PI * c / 0.55)); }
    return Math.min(v, 1.25);
  }
};

const Resp = {
  rr: 0, et: 0, t0: 0,
  setRate(rr, t) { if (Math.abs(rr - this.rr) > 0.5) { this.rr = rr; this.t0 = t; } },
  co2(t) {
    if (this.rr <= 0) return 0;
    const per = 60 / this.rr, tau = (t - this.t0) % per, E = Math.min(per * 0.58, 2.6);
    let s;
    if (tau < 0.16) s = Math.sin(Math.PI / 2 * tau / 0.16);
    else if (tau < E) s = 0.9 + 0.1 * (tau - 0.16) / Math.max(0.01, E - 0.16);
    else if (tau < E + 0.14) s = 1 - (tau - E) / 0.14;
    else s = 0;
    let v = this.et * s;
    if (Synth.cpr && v > 1) v += 1.6 * Math.sin(2 * Math.PI * 1.85 * t);
    return Math.max(0, v);
  }
};

/* ═══════════════════════ MONITOR (sweep mode) ═══════════════════════ */
const Mon = {
  cv: null, ctx: null, W: 0, H: 0, dpr: 1, t: 0, ch: [],
  init() {
    this.cv = $('#monCanvas');
    this.resize();
    if (window.ResizeObserver) new ResizeObserver(() => this.resize()).observe(this.cv.parentElement);
    else window.addEventListener('resize', () => this.resize());
  },
  resize() {
    const r = this.cv.parentElement.getBoundingClientRect();
    const W = Math.max(120, Math.floor(r.width)), H = Math.max(120, Math.floor(r.height));
    if (W === this.W && H === this.H) return;
    this.W = W; this.H = H;
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.cv.width = W * this.dpr; this.cv.height = H * this.dpr;
    this.ctx = this.cv.getContext('2d');
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    const sp = W / (W < 520 ? 4.4 : 6.4);
    this.ch = [['ecg', sp], ['pl', sp], ['co2', sp / 3]].map(([id, speed]) => ({
      id, speed, x: 0, carry: 0, buf: new Float32Array(W).fill(NaN), mk: new Uint8Array(W)
    }));
  },
  frame(dt) {
    const t0 = this.t;
    this.t += dt;
    Synth.schedule(this.t + 0.6);
    for (const c of this.ch) {
      const px = dt * c.speed + c.carry, n = Math.floor(px);
      c.carry = px - n;
      for (let i = 1; i <= n; i++) {
        const ta = t0 + dt * (i - 1) / n, tb = t0 + dt * i / n;
        let v = NaN, mk = 0;
        if (c.id === 'ecg') {
          Synth.update(tb);
          if (S && S.monitor) {
            let best = 0;
            for (let j = 1; j <= 3; j++) { const s = Synth.ecg(ta + (tb - ta) * j / 3); if (Math.abs(s) > Math.abs(best)) best = s; }
            v = Synth.spikeIn(ta, tb) ? 2.9 : best;
            if (S.defib.sync && Synth.markIn(ta, tb)) mk = 1;
          }
        } else if (c.id === 'pl') {
          if (S && S.monitor && !plethLost()) v = Synth.pl(tb);
        } else if (S && S.capno) v = Resp.co2(tb);
        c.buf[c.x] = v; c.mk[c.x] = mk;
        c.x = (c.x + 1) % this.W;
      }
    }
    this.draw();
  },
  draw() {
    const { ctx, W, H } = this;
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    const rows = [
      { c: this.ch[0], y: 0, h: H * 0.5, col: '#2bff88', glow: 'rgba(43,255,136,.55)', lab: 'II  ×1.0', map: (v, y, h) => clamp(y + h * 0.6 - v * h * 0.29, y + 3, y + h - 3) },
      { c: this.ch[1], y: H * 0.5, h: H * 0.25, col: '#22d3ee', glow: 'rgba(34,211,238,.5)', lab: 'PLETH', map: (v, y, h) => y + h * 0.9 - v * h * 0.72 },
      { c: this.ch[2], y: H * 0.75, h: H * 0.25, col: '#facc15', glow: 'rgba(250,204,21,.45)', lab: 'CO₂  0–50', map: (v, y, h) => clamp(y + h * 0.9 - (v / 50) * h * 0.76, y + 2, y + h - 1) }
    ];
    ctx.font = '600 10px "DM Mono", ui-monospace, monospace';
    rows.forEach((row, i) => {
      if (i) { ctx.strokeStyle = '#0f1a22'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, row.y + 0.5); ctx.lineTo(W, row.y + 0.5); ctx.stroke(); }
      if (i === 2) {
        ctx.setLineDash([2, 4]); ctx.strokeStyle = 'rgba(250,204,21,.13)';
        [0, 50].forEach(m => { const yy = row.map(m, row.y, row.h); ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke(); });
        ctx.setLineDash([]);
      }
      ctx.fillStyle = row.col; ctx.globalAlpha = 0.8; ctx.fillText(row.lab, 8, row.y + 13); ctx.globalAlpha = 1;
      const c = row.c, gap = 14;
      ctx.strokeStyle = row.col; ctx.lineWidth = 1.7; ctx.lineJoin = 'round';
      ctx.shadowColor = row.glow; ctx.shadowBlur = 6;
      ctx.beginPath();
      let pen = false, any = false;
      for (let x = 0; x < W; x++) {
        const d = (x - c.x + W) % W;
        const v = c.buf[x];
        if (d < gap || Number.isNaN(v)) { pen = false; continue; }
        const y = row.map(v, row.y, row.h);
        if (!pen) { ctx.moveTo(x, y); pen = true; } else ctx.lineTo(x, y);
        any = true;
      }
      ctx.stroke(); ctx.shadowBlur = 0;
      if (i === 0) {
        ctx.fillStyle = '#e5e7eb';
        for (let x = 0; x < W; x++) if (c.mk[x] && (x - c.x + W) % W >= gap) { ctx.beginPath(); ctx.moveTo(x - 4, row.y + 18); ctx.lineTo(x + 4, row.y + 18); ctx.lineTo(x, row.y + 25); ctx.fill(); }
      }
      if (!any) {
        const msg = i === 0 ? 'LEADS OFF — attach monitor' : i === 1 ? (S && S.monitor ? 'NO PULSATILE SIGNAL' : 'SpO₂ PROBE OFF') : 'NO CO₂ — connect capnography';
        ctx.fillStyle = row.col; ctx.globalAlpha = 0.5;
        ctx.setLineDash([6, 6]); ctx.strokeStyle = row.col; ctx.lineWidth = 1;
        const yy = row.y + row.h * (i === 0 ? 0.6 : 0.9);
        ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillText(msg, Math.max(8, W / 2 - msg.length * 3.1), row.y + row.h * (i === 0 ? 0.42 : 0.55));
        ctx.globalAlpha = 1;
      }
    });
  }
};

/* ═══════════════════════ AUDIO ═══════════════════════ */
const Snd = {
  ctx: null, on: store.get('megacode.sound', true), chargeNode: null,
  init() {
    if (!this.ctx) { try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { this.ctx = null; } }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },
  tone(f, d, vol = 0.05, type = 'sine', when = 0) {
    if (!this.on || !this.ctx) return;
    const c = this.ctx, t = c.currentTime + when, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + d + 0.03);
  },
  beep(spo2) { this.tone(spo2 ? clamp(380 + (spo2 - 80) * 16, 360, 720) : 640, 0.085, 0.045); },
  alarm() { [0, 0.2, 0.4].forEach((w, i) => this.tone(i === 1 ? 784 : 988, 0.15, 0.035, 'square', w)); },
  med() { [0, 0.25].forEach(w => this.tone(620, 0.14, 0.03, 'triangle', w)); },
  ready() { this.tone(1450, 0.12, 0.03, 'square'); },
  charge(dur) {
    if (!this.on || !this.ctx) return;
    const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(380, t); o.frequency.exponentialRampToValueAtTime(1900, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.018, t + 0.1); g.gain.setValueAtTime(0.018, t + dur - 0.05); g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.05);
  },
  shock() {
    if (!this.on || !this.ctx) return;
    const c = this.ctx, t = c.currentTime, len = Math.floor(c.sampleRate * 0.35), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.18));
    const s = c.createBufferSource(), g = c.createGain(), f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 900; g.gain.value = 0.35;
    s.buffer = buf; s.connect(f).connect(g).connect(c.destination); s.start(t);
    this.tone(70, 0.3, 0.18, 'sine');
  },
  win() { [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.22, 0.04, 'triangle', i * 0.12)); }
};

/* ═══════════════════════ SIM STATE ═══════════════════════ */
let S = null;
let SC = null;
const isArrest = () => S && ARREST.has(S.stage.type);
const secKey = (st = S.stage) => SHOCKABLE.has(st.type) ? 'shock' : (st.type === 'pea' || st.type === 'asys') ? 'nonshock' : st.type;
const sd = (k = secKey()) => (S.sd[k] = S.sd[k] || { quizR: null, quizS: null, acts: {}, drugGood: 0, drugBad: 0, clearErr: 0, resume: [], pauses: [], early: 0, overdue: 0, hts: false, vent: false, shocks: 0, badShock: 0, checks: 0, snap: null });
const plethLost = () => !S || !S.stage || isArrest() && !S.cpr || (SC.noSpo2 && S.idx === 0);
const stCount = k => S.st[k] || 0;
const conscious = () => S.stage && !ARREST.has(S.stage.type) && !/unresponsive|apneic|barely|bats|not follow/i.test(S.stage.cons || '');

function newSim(sc, mode) {
  SC = sc;
  S = {
    sc, mode, idx: -1, stage: null, simT: 0, stageT0: 0, paused: false, over: false,
    monitor: !!sc.monitorOn, capno: !!sc.capnoOn, iv: !!sc.ivStart, o2: !!sc.o2Start, bvm: false, airway: false, vent: false,
    cpr: false, everCPR: false, cycle: 0, pauseStart: null, arrestT: 0, cprT: 0, warned10: false,
    shocks: 0, arrestShocks: 0, epi: 0, lastEpi: null, amio: 0, lido: 0, atropine: 0, adenosine: 0,
    used: {}, st: {}, checks: 0, justChecked: false,
    defib: { energy: 200, sync: false, charged: false, charging: false, chargeT0: 0 },
    pacer: { on: false, rate: 70, mA: 0, capture: false },
    nibp: null, nibpAt: null,
    pending: null, quizDone: {}, pulseChecked: false, roscId: false, roscT: null, roscIdT: null,
    pressor: false, fluids: 0, vd: { hr: 0, sbp: 0, spo2: 0 }, ivFail: 0, sedation: false,
    v: { hr: 0, sbp: 0, dbp: 0, spo2: 0, rr: 0, etco2: 0 },
    log: [], errs: [], sd: {}, roles: false, compCycles: 0, switched: false, fatigue: false,
    lastShockT: null, awaitResume: false, pauses: [], resumeLags: [], earlyChecks: 0, overdueWarned: false,
    clues: {}, flags: new Set(), alarmQuietUntil: 0, lastAlarm: -99, everArrest: false, destDone: false
  };
  if (sc.monitorOn) S.flags.add('monitorEarly');
}

function goStage(i, msg) {
  const prevArrest = S.stage ? isArrest() : false;
  if (S.stage) snapSection();
  S.idx = i; S.stage = SC.stages[i];
  S.stageT0 = S.simT; S.st = {}; S.checks = 0; S.pending = null; S.pulseChecked = false; S.vd = { hr: 0, sbp: 0, spo2: 0 };
  sd();
  Synth.set(S.stage.rhythm, Mon.t);
  if (S.pacer.capture) { S.pacer.capture = false; Synth.setPace({ capture: false }, Mon.t); }
  const arrest = isArrest();
  if (arrest && !prevArrest) {
    S.everArrest = true; S.arrestShocks = 0; S.awaitResume = false; S.warned10 = false;
    if (!S.cpr) S.pauseStart = S.simT;
    S.v.sbp = 0; S.v.dbp = 0;
  }
  if (!arrest && prevArrest) S.roscT = S.simT;
  if (S.stage.type === 'rosc') { S.pressor = false; S.fluids = 0; }
  if (msg) { pushLog('scene', msg); toast('scene', msg, 7000); }
  if (i === 0) Object.assign(S.v, targetV(), { hr: Synth.hr() });
  renderProgress();
}
function snapSection() {
  const d = sd();
  d.snap = { monitor: S.monitor, iv: S.iv, o2ok: S.o2 || (S.stage.v && S.stage.v.spo2 >= 94) };
}

/* ── exits ─────────────────────────────────────────── */
function needOk(k) { return k === 'vent' ? S.vent : stCount(k) > 0; }
function matchExit(ex, ctx) {
  if (ex.on === 'action' && ctx.type === 'action') {
    if (!ex.any.includes(ctx.key)) return false;
    return ex.any.reduce((n, k) => n + stCount(k), 0) >= (ex.n || 1);
  }
  if (ex.on === 'time' && ctx.type === 'tick') return S.simT - S.stageT0 >= ex.sec;
  if (ex.on === 'tick' && ctx.type === 'tick') return !!ex.test(S);
  if (ex.on === 'check' && ctx.type === 'check') {
    if (S.checks < (ex.checks || 1)) return false;
    if (ex.shocks && stCount('shock') < ex.shocks) return false;
    const okAll = (ex.needAll || []).every(needOk), okAny = !ex.needAny || ex.needAny.some(needOk);
    if (okAll && okAny) return true;
    if (ex.fallback && S.checks >= ex.fallback) {
      const miss = [...(ex.needAll || []).filter(k => !needOk(k)), ...(ex.needAny && !okAny ? [ex.needAny.map(k => NEED_LABEL[k] || k).join(' / ')] : [])];
      judge('warn', `Key treatment not given in time: ${miss.map(k => NEED_LABEL[k] || k).join(', ')}. The case moves on — review this in the debrief.`);
      return true;
    }
  }
  return false;
}
function evalExits(ctx) {
  if (!S || S.over || S.pending || !S.stage.exit) return;
  for (const ex of S.stage.exit) {
    if (matchExit(ex, ctx)) {
      if (ex.delay && ctx.type !== 'check') S.pending = { at: S.simT + ex.delay, ex };
      else goStage(S.idx + 1, ex.msg);
      return;
    }
  }
}

/* ── vitals ─────────────────────────────────────────── */
function targetV() {
  const st = S.stage, b = st.v || {};
  if (isArrest()) {
    const et = S.cpr ? (st.etco2 || 18) * (S.fatigue ? 0.6 : 1) : 5;
    return { sbp: 0, dbp: 0, spo2: 0, rr: S.vent ? 10 : 0, etco2: S.vent ? et : 0 };
  }
  const capSbp = S.pacer.capture ? ((st.fx && st.fx.capture && st.fx.capture.sbp) || 14) : 0;
  const sbp = b.sbp + S.vd.sbp + (S.pressor ? 20 : 0) + Math.min(2, S.fluids) * 5 + capSbp;
  const o2Bonus = S.o2 && !(SC.o2Start && S.idx === 0) && b.spo2 < 97 ? 4 : 0;
  let rr = b.rr;
  if (S.vent && rr < 10) rr = 10;
  const spo2 = Math.min(100, b.spo2 + S.vd.spo2 + o2Bonus);
  return { sbp, dbp: b.dbp + (sbp - b.sbp) * 0.55, spo2, rr, etco2: rr > 0 ? (b.etco2 || 38) : 0 };
}
function easeVitals(dt) {
  const T = targetV(), k = Math.min(1, dt * 0.3);
  for (const key of ['sbp', 'dbp', 'spo2', 'etco2']) S.v[key] += (T[key] - S.v[key]) * (isArrest() && (key === 'sbp' || key === 'dbp') ? 1 : k);
  S.v.rr = T.rr;
  S.v.hr = Synth.hr();
  Synth.pulse = !isArrest();
  Synth.perf = clamp((S.v.sbp - 45) / 70, 0.15, 1);
  Resp.et = S.v.etco2;
  Resp.setRate(S.v.rr, Mon.t);
}

/* ── feedback ─────────────────────────────────────────── */
function pushLog(kind, text) {
  S.log.push({ t: S.simT, kind, text });
  const el = document.createElement('div');
  el.className = `le ${kind}`;
  el.innerHTML = `<span class="lt">${fmt(S.simT)}</span><span>${text}</span>`;
  const log = $('#log');
  log.prepend(el);
  while (log.children.length > 120) log.lastChild.remove();
}
function judge(kind, text, tag) {
  if (kind === 'warn' || kind === 'bad') S.errs.push({ t: S.simT, kind, text, sec: secKey() });
  const d = sd();
  if (tag === 'drug') { if (kind === 'good') d.drugGood++; else if (kind === 'bad' || kind === 'warn') d.drugBad++; }
  if (S.mode === 'train') { pushLog(kind, text); toast(kind, text); }
}
const TOAST_ICON = { good: '✅', warn: '⚠️', bad: '⛔', info: 'ℹ️', scene: '🚨', find: '🔎', act: '•' };
function toast(kind, text, ms = 4600) {
  const box = $('#toasts');
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.innerHTML = `<span class="ti">${TOAST_ICON[kind] || 'ℹ️'}</span><span>${text}</span>`;
  box.appendChild(el);
  while (box.children.length > 3) box.firstChild.remove();
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 220); }, ms);
}
function find(text) { pushLog('find', text); toast('find', text, 6000); }
function did(text) { pushLog('act', text); }

/* ═══════════════════════ ACTIONS ═══════════════════════ */
const NO_IV = new Set(['aspirin', 'ntg', 'vagal', 'albuterol']);
const DRUGS = {
  epi: ['Epinephrine', () => '1 mg IV/IO'],
  amio: ['Amiodarone', () => S.amio ? '150 mg IV/IO' : '300 mg IV/IO'],
  lido: ['Lidocaine', () => S.lido ? '0.5–0.75 mg/kg' : '1–1.5 mg/kg'],
  atropine: ['Atropine', () => '1 mg IV (max 3 mg)'],
  dopamine: ['Dopamine infusion', () => '5–20 mcg/kg/min'],
  epiInf: ['Epinephrine infusion', () => '2–10 mcg/min'],
  adenosine: ['Adenosine', () => S.adenosine ? '12 mg rapid push' : '6 mg rapid push + flush'],
  diltiazem: ['Diltiazem', () => '15–20 mg IV'],
  bblocker: ['Metoprolol', () => '5 mg IV'],
  sedation: ['Sedation / analgesia', () => 'midazolam · fentanyl'],
  calcium: ['Calcium chloride', () => '10% · 1 g IV'],
  bicarb: ['Sodium bicarbonate', () => '50 mEq IV'],
  mag: ['Magnesium sulfate', () => '1–2 g IV'],
  naloxone: ['Naloxone', () => '0.4–2 mg IV'],
  flumazenil: ['Flumazenil', () => '0.2 mg IV'],
  glucagon: ['Glucagon / high-dose insulin', () => 'CCB / β-blocker antidote'],
  lipid: ['Lipid emulsion 20%', () => '1.5 mL/kg bolus'],
  aspirin: ['Aspirin', () => '162–325 mg chewed'],
  ntg: ['Nitroglycerin', () => '0.4 mg SL'],
  albuterol: ['Albuterol', () => 'nebulized, continuous']
};
const ACTS = [
  { k: 'roles', tab: 'assess', g: 'Team', e: '👥', l: 'Assign team roles', d: 'closed-loop comms' },
  { k: 'monitor', tab: 'assess', g: 'Assess', e: '📟', l: 'Attach monitor + pads', d: 'ECG · SpO₂ · defib pads' },
  { k: 'resp', tab: 'assess', g: 'Assess', e: '🗣️', l: 'Responsiveness & breathing', d: 'look · listen · feel' },
  { k: 'pulse', tab: 'assess', g: 'Assess', e: '❤️', l: 'Check pulse', d: '≤ 10 s, carotid' },
  { k: 'nibp', tab: 'assess', g: 'Assess', e: '🩺', l: 'Check BP (NIBP)', d: 'cuff' },
  { k: 'ecg12', tab: 'assess', g: 'Assess', e: '📈', l: '12-lead ECG', d: 'STEMI? QRS width?' },
  { k: 'glucose', tab: 'assess', g: 'Assess', e: '🩸', l: 'Blood glucose', d: 'finger-stick' },
  { k: 'history', tab: 'assess', g: 'History', e: '📋', l: 'History / SAMPLE', d: 'scene · family · chart' },
  { k: 'exam', tab: 'assess', g: 'History', e: '👂', l: 'Physical exam', d: 'skin · lungs' },
  { k: 'pocus', tab: 'assess', g: 'History', e: '🔊', l: 'Bedside ultrasound', d: 'during pause only' },
  { k: 'o2', tab: 'airway', g: 'Oxygenation', e: '💨', l: 'Oxygen', d: 'titrate SpO₂ ≥ 94%' },
  { k: 'bvm', tab: 'airway', g: 'Ventilation', e: '🫁', l: 'Bag-mask ventilation', d: '100% O₂ · 30:2' },
  { k: 'airway', tab: 'airway', g: 'Ventilation', e: '🩻', l: 'Advanced airway', d: 'ETT / supraglottic' },
  { k: 'capno', tab: 'airway', g: 'Ventilation', e: '📉', l: 'Waveform capnography', d: 'confirm tube · CPR quality' },
  { k: 'ventSlow', tab: 'airway', g: 'Ventilation', e: '⏱️', l: 'Disconnect bag / slow rate', d: '1 breath q6s · auto-PEEP' },
  { k: 'albuterol', tab: 'airway', g: 'Ventilation', e: '🌬️', drug: true },
  { k: 'switch', tab: 'circ', g: 'CPR', e: '🔁', l: 'Switch compressors', d: 'every 2 min' },
  { k: 'iv', tab: 'circ', g: 'Access', e: '💉', l: 'IV access', d: 'large-bore' },
  { k: 'io', tab: 'circ', g: 'Access', e: '🦴', l: 'IO access', d: 'humeral / tibial' },
  { k: 'fluids', tab: 'circ', g: 'Access', e: '💧', l: 'Fluid bolus', d: 'NS / LR 1 L' },
  ...['epi', 'amio', 'lido'].map(k => ({ k, tab: 'drugs', g: 'Cardiac arrest', e: '💉', drug: true })),
  ...['atropine', 'dopamine', 'epiInf'].map(k => ({ k, tab: 'drugs', g: 'Bradycardia / pressors', e: '💊', drug: true })),
  { k: 'vagal', tab: 'drugs', g: 'Tachycardia', e: '🫸', l: 'Vagal maneuver', d: 'modified Valsalva' },
  ...['adenosine', 'diltiazem', 'bblocker', 'sedation'].map(k => ({ k, tab: 'drugs', g: 'Tachycardia', e: '💊', drug: true })),
  ...['calcium', 'bicarb', 'mag', 'naloxone', 'flumazenil', 'glucagon', 'lipid', 'aspirin', 'ntg'].map(k => ({ k, tab: 'drugs', g: 'Specific causes', e: '🧪', drug: true })),
  { k: 'hts', tab: 'post', g: 'Team', e: '🔍', l: "H's & T's", d: 'reversible causes' },
  { k: 'cathlab', tab: 'post', g: 'Post-ROSC', e: '🏥', l: 'Activate cath lab', d: 'STEMI / cardiac cause' },
  { k: 'ttm', tab: 'post', g: 'Post-ROSC', e: '❄️', l: 'Targeted temp. mgmt', d: '32–36 °C ≥ 24 h' },
  { k: 'labs', tab: 'post', g: 'Post-ROSC', e: '🧪', l: 'Labs & ABG', d: 'K⁺ · lactate · troponin' },
  { k: 'transport', tab: 'post', g: 'Post-ROSC', e: '🚑', l: 'Transport / disposition', d: 'destination' },
  { k: 'end', tab: 'post', g: 'Finish', e: '🏁', l: 'End scenario', d: 'go to debrief' }
];
const TABS = [
  { id: 'assess', l: 'Assess', i: 'stethoscope' },
  { id: 'airway', l: 'Airway', i: 'wind' },
  { id: 'circ', l: 'CPR & Access', i: 'hand' },
  { id: 'elec', l: 'Defib / Pace', i: 'zap' },
  { id: 'drugs', l: 'Drugs', i: 'syringe' },
  { id: 'post', l: 'Team & ROSC', i: 'clipboard-list' }
];

function count(k) {
  S.st[k] = (S.st[k] || 0) + 1;
  S.used[k] = (S.used[k] || 0) + 1;
  const d = sd(); d.acts[k] = (d.acts[k] || 0) + 1;
}

function doAction(k) {
  if (!S || S.over) return;
  const st = S.stage, t = st.type, arrest = isArrest(), fx = (st.fx || {})[k];
  const spo2 = Math.round(S.v.spo2);
  if (DRUGS[k]) {
    if (!S.iv && !NO_IV.has(k)) { toast('bad', 'No vascular access — establish IV or IO first.'); return; }
  }
  const fxJudge = () => { if (fx) { judge(fx.kind || 'info', fx.msg, DRUGS[k] ? 'drug' : undefined); if (fx.hr) Synth.r.hr += fx.hr; if (fx.sbp) S.vd.sbp += fx.sbp; if (fx.spo2) S.vd.spo2 += fx.spo2; return true; } return false; };

  switch (k) {
    case 'roles':
      if (S.roles) { toast('info', 'Roles are already assigned.'); return; }
      S.roles = true; count(k); did('Team roles assigned: compressor, airway, monitor/defib, IV/meds, recorder.');
      judge('good', 'Roles assigned — you are Team Leader. Use closed-loop communication.');
      renderTeam(); break;
    case 'monitor':
      if (S.monitor) { toast('info', 'Monitor and pads are already on.'); return; }
      S.monitor = true; count(k); did('Monitor leads, defibrillator pads and SpO₂ probe attached.');
      if (S.simT < 60) S.flags.add('monitorEarly');
      judge('good', 'Monitor on — read the rhythm.'); break;
    case 'resp':
      count(k);
      find(arrest ? 'Unresponsive. No breathing or only gasping.' : `${st.cons || 'Responsive'}. Respirations ${Math.round(S.v.rr)}/min.`);
      break;
    case 'pulse': pulseCheck(); return;
    case 'nibp':
      if (S.nibpBusy) return;
      count(k); S.nibpBusy = true; did('NIBP cycling…');
      $('#sBp').textContent = 'measuring…';
      setTimeout(() => {
        if (!S) return;
        S.nibpBusy = false;
        if (isArrest()) { S.nibp = null; find('NIBP: unable to obtain a reading.'); $('#sBp').textContent = 'no reading'; return; }
        S.nibp = { s: Math.round(S.v.sbp), d: Math.round(S.v.dbp), t: S.simT };
        if (S.stage.type === 'rosc') sd('rosc').bp = true;
        find(`NIBP ${S.nibp.s}/${S.nibp.d} mmHg (MAP ${Math.round((S.nibp.s + 2 * S.nibp.d) / 3)}).`);
      }, 3500);
      break;
    case 'ecg12':
      if (arrest) { judge('warn', "Don't interrupt CPR for a 12-lead during cardiac arrest — get one after ROSC."); return; }
      count(k); if (t === 'rosc') sd('rosc').ecg12 = true;
      find(`12-lead: ${st.ecg12 || 'no acute changes.'}`); break;
    case 'glucose': count(k); find(`Blood glucose ${st.glucose || SC.glucose || '110 mg/dL'}.`); break;
    case 'history': count(k); find(st.history || SC.history || 'No further history available.'); showClue(); break;
    case 'exam': count(k); find(st.exam || SC.exam || 'No further findings.'); break;
    case 'pocus':
      if (arrest && S.cpr) { toast('warn', 'Do the ultrasound during the rhythm-check pause — without prolonging it.'); return; }
      count(k);
      if (fx) { find(`POCUS: ${fx.msg}`); break; }
      find(`POCUS: ${st.pocus || (arrest ? 'No pericardial effusion, no RV dilation.' : 'Normal contractility, no pericardial effusion.')}`); break;
    case 'o2':
      if (S.o2 && !fx) { toast('info', 'Oxygen is already running.'); return; }
      S.o2 = true; count(k); did('Oxygen applied.');
      if (fxJudge()) break;
      if (arrest) judge('info', 'During CPR, oxygenate with the bag-mask at 100% O₂.');
      else if (spo2 < 94) judge('good', `SpO₂ ${spo2}% — oxygen indicated. Titrate to ${t === 'rosc' ? '92–98%' : '≥ 94%'}.`);
      else judge('info', `SpO₂ ${spo2}% — supplemental oxygen is not required in a non-hypoxemic patient. Monitor.`);
      break;
    case 'bvm':
      count(k); did('Bag-mask ventilation with 100% O₂.');
      if (fxJudge()) { S.bvm = S.vent = true; break; }
      if (S.bvm) { toast('info', 'Bag-mask ventilation is ongoing.'); break; }
      S.bvm = S.vent = true;
      if (arrest) judge('good', 'Bag-mask ventilation: 30 compressions : 2 breaths, each breath over 1 s with visible chest rise.');
      else if (S.v.rr < 10) judge('good', 'Assisted ventilation for inadequate respirations — 1 breath every 6 s.');
      else judge('warn', 'The patient is breathing adequately — bag-mask ventilation is not indicated.');
      break;
    case 'airway':
      if (S.airway) { toast('info', 'An advanced airway is already in place.'); return; }
      if (!arrest && conscious() && t !== 'resp') { judge('bad', 'Conscious patient with a patent airway — an advanced airway is not indicated.'); return; }
      S.airway = S.vent = true; count(k); did('Advanced airway placed.');
      if (t === 'rosc') sd('rosc').airway = true;
      if (fxJudge()) break;
      judge('good', arrest ? 'Advanced airway in: switch to continuous compressions with 1 breath every 6 s. Confirm with waveform capnography.' : 'Airway secured — confirm placement with waveform capnography.');
      break;
    case 'capno':
      if (!S.monitor) { toast('bad', 'Attach the monitor first.'); return; }
      if (S.capno) { toast('info', 'Capnography is already connected.'); return; }
      S.capno = true; count(k); did('Waveform capnography connected.');
      if (t === 'rosc') sd('rosc').capno = true;
      judge('good', arrest ? 'Capnography on — ETCO₂ < 10 mmHg suggests poor CPR; a sudden rise to ≥ 40 suggests ROSC.' : 'Capnography connected — target ETCO₂ 35–45 mmHg.');
      break;
    case 'ventSlow':
      count(k); did('Bag disconnected to allow full exhalation; ventilation slowed.');
      if (fxJudge()) break;
      judge('info', S.vent ? 'Ventilation rate checked — 1 breath every 6 s, avoid hyperventilation.' : 'No assisted ventilation is in progress.');
      break;
    case 'switch':
      if (!arrest) { toast('info', 'No compressions in progress.'); return; }
      count(k); S.switched = true; S.compCycles = 0;
      did('Compressors switched.');
      if (S.fatigue) { S.fatigue = false; judge('good', 'Fresh compressor — CPR quality and ETCO₂ recover.'); }
      else if (!S.cpr) judge('good', 'Switching compressors during the rhythm check — no extra hands-off time.');
      else judge('info', 'Ideally switch during the rhythm-check pause to avoid an extra interruption.');
      break;
    case 'iv':
      if (S.iv) { toast('info', 'IV access is already established.'); return; }
      count(k);
      if (fx && fx.fail && S.ivFail < fx.fail) { S.ivFail++; did('Peripheral IV attempt — failed.'); judge(fx.kind || 'warn', fx.msg); break; }
      S.iv = true; did('IV access established.'); judge('good', 'IV access established.'); break;
    case 'io':
      if (S.iv) { toast('info', 'Vascular access is already established.'); return; }
      count(k); S.iv = true; did('IO access established.');
      judge('good', arrest || S.ivFail ? 'IO access established — a fast, reliable route.' : 'IO access established. (IV is preferred when it is quickly obtainable.)'); break;
    case 'fluids':
      count(k); S.fluids++; did('Fluid bolus 1 L NS/LR.');
      if (fxJudge()) break;
      if (t === 'rosc') judge(S.v.sbp < 90 ? 'good' : 'info', S.v.sbp < 90 ? 'Fluid bolus for post-ROSC hypotension (target SBP ≥ 90, MAP ≥ 65).' : 'BP is adequate — avoid fluid overload.');
      else if (arrest) judge('info', 'Fluids help if hypovolemia is a suspected cause.');
      else if (t === 'tachyU') judge('warn', 'Fluids will not fix an unstable tachyarrhythmia — synchronized cardioversion is the treatment.');
      else judge('info', 'Fluid bolus given.');
      break;
    case 'hts': openHts(); return;
    case 'transport': transport(); return;
    case 'end': confirmEnd(); return;
    case 'cathlab':
      count(k); did('Cath lab / interventional team activated.');
      if (fxJudge()) break;
      if (/ST elevation|STEMI/i.test(st.ecg12 || '')) judge('good', 'Emergent coronary angiography for STEMI — correct.');
      else judge('info', 'Consider emergent angiography if STEMI or a suspected cardiac cause with shock/instability.');
      break;
    case 'ttm':
      count(k); did('Targeted temperature management initiated.');
      if (t === 'rosc') { sd('rosc').ttm = true; judge(conscious() ? 'info' : 'good', conscious() ? 'He is following commands — TTM is for comatose survivors.' : 'TTM 32–36 °C for ≥ 24 h — comatose after ROSC.'); }
      else judge('info', 'TTM is started after ROSC in patients who do not follow commands.');
      break;
    case 'labs':
      count(k); did('Labs and ABG sent.');
      if (t === 'rosc') { sd('rosc').labs = true; judge('good', 'Post-ROSC labs: ABG, electrolytes, lactate, troponin.'); }
      else judge('info', 'Labs sent — useful when hunting for H\'s & T\'s.');
      break;
    case 'vagal':
      count(k); did('Vagal maneuver attempted.');
      if (fxJudge()) break;
      judge(t === 'tachyS' ? 'good' : t === 'tachyU' ? 'warn' : 'info', t === 'tachyS' ? 'Vagal maneuver — first step for stable narrow-complex SVT.' : t === 'tachyU' ? 'Unstable — go straight to synchronized cardioversion.' : 'Vagal maneuvers are for stable SVT.');
      break;
    default:
      if (DRUGS[k]) { giveDrug(k, fx, fxJudge); return; }
  }
  evalExits({ type: 'action', key: k });
  refreshUI(true);
}

function giveDrug(k, fx, fxJudge) {
  const st = S.stage, t = st.type, arrest = isArrest(), shockable = SHOCKABLE.has(t);
  const [name, dose] = DRUGS[k];
  const label = `${name} ${dose()}`;
  // hard limits
  if (k === 'amio' && S.amio >= 2) { judge('bad', 'Amiodarone: maximum 2 bolus doses (300 mg, then 150 mg).', 'drug'); return; }
  if (k === 'atropine' && S.atropine >= 3) { judge('bad', 'Atropine maximum total dose is 3 mg.', 'drug'); return; }
  count(k); did(`${label} given.`);
  if (k === 'epi') { const since = S.lastEpi == null ? null : S.simT - S.lastEpi; S.epi++; S.lastEpi = S.simT; S._epiSince = since; }
  if (k === 'amio') S.amio++;
  if (k === 'lido') S.lido++;
  if (k === 'atropine') S.atropine++;
  if (k === 'adenosine') S.adenosine++;
  if (k === 'sedation') S.sedation = true;
  if (k === 'dopamine' || k === 'epiInf') S.pressor = true;
  if (fxJudge()) { evalExits({ type: 'action', key: k }); refreshUI(true); return; }

  let kind = 'info', msg = `${name} given.`;
  switch (k) {
    case 'epi':
      if (!arrest) { kind = 'bad'; msg = t === 'brady' ? 'Epinephrine 1 mg IV push is for cardiac arrest only. For bradycardia use an infusion (2–10 mcg/min).' : 'Epinephrine 1 mg bolus is for cardiac arrest only — this patient has a pulse.'; }
      else if (S._epiSince != null && S._epiSince < 170) { kind = 'warn'; msg = `Too soon — last dose ${fmt(S._epiSince)} ago. Give epinephrine every 3–5 minutes.`; }
      else if (shockable && S.arrestShocks < 2) { kind = 'warn'; msg = 'In VF/pVT, epinephrine is given after the 2nd shock — prioritize defibrillation and CPR.'; }
      else { kind = 'good'; msg = shockable ? 'Epinephrine 1 mg — correct timing after the 2nd shock. Repeat every 3–5 min.' : 'Epinephrine 1 mg as soon as possible in a non-shockable rhythm. Repeat every 3–5 min.'; }
      break;
    case 'amio': case 'lido': {
      const n = k === 'amio' ? S.amio : S.lido;
      if (shockable) {
        if (S.arrestShocks < 3) { kind = 'warn'; msg = `${name} is for VF/pVT refractory to shocks — give it after the 3rd shock.`; }
        else { kind = 'good'; msg = `${name} ${n > 1 ? 'second dose' : 'first dose'} for refractory VF/pVT.`; }
      } else if (arrest) { kind = 'bad'; msg = 'Antiarrhythmics have no role in PEA or asystole.'; }
      else if (t === 'tachyU') { kind = 'warn'; msg = 'The patient is unstable — synchronized cardioversion first; drugs should not delay it.'; }
      else if (t === 'brady') { kind = 'bad'; msg = 'Antiarrhythmics can worsen bradycardia and block.'; }
      else if (t === 'rosc') { kind = 'info'; msg = 'A post-ROSC antiarrhythmic infusion may be considered after VF/pVT arrest.'; }
      else { kind = 'warn'; msg = `${name} is not first-line for this rhythm.`; }
      break;
    }
    case 'atropine':
      if (t === 'brady') { kind = 'good'; msg = 'Atropine 1 mg IV — first-line for symptomatic bradycardia. Repeat every 3–5 min, max 3 mg.'; }
      else if (t === 'resp') { kind = 'warn'; msg = 'This bradycardia is driven by hypoxia — fix oxygenation and ventilation first.'; }
      else if (arrest) { kind = 'bad'; msg = 'Atropine is no longer recommended in PEA or asystole.'; }
      else if (t === 'rosc' && S.v.hr < 50) { kind = 'info'; msg = 'Atropine for post-ROSC bradycardia with hypotension.'; }
      else { kind = 'bad'; msg = 'Atropine is not indicated — the heart rate is not slow.'; }
      break;
    case 'dopamine': case 'epiInf':
      if (t === 'brady') { kind = 'good'; msg = `${name} — second-line therapy when atropine is ineffective.`; }
      else if (t === 'rosc') { kind = S.v.sbp < 90 ? 'good' : 'info'; msg = S.v.sbp < 90 ? `${name} for post-ROSC hypotension — titrate to SBP ≥ 90 / MAP ≥ 65.` : 'BP is adequate — no vasopressor needed now.'; }
      else if (arrest) { kind = 'bad'; msg = 'Vasopressor infusions are not used during CPR — give epinephrine 1 mg boluses.'; S.pressor = false; }
      else if (t === 'resp') { kind = 'warn'; msg = 'Fix ventilation and oxygenation first.'; }
      else { kind = 'warn'; msg = `${name} will worsen a tachycardia.`; }
      break;
    case 'adenosine':
      if (t === 'tachyS' && Synth.r.k === 'svt') { kind = 'good'; msg = S.adenosine > 1 ? 'Adenosine 12 mg — second dose.' : 'Adenosine 6 mg rapid push with a flush — if no conversion, 12 mg.'; }
      else if (t === 'tachyU') { kind = 'warn'; msg = 'Unstable wide-complex tachycardia — synchronized cardioversion, not adenosine.'; }
      else { kind = 'bad'; msg = 'Adenosine is not indicated for this rhythm.'; }
      break;
    case 'diltiazem': case 'bblocker':
      if (t === 'tachyS') { kind = 'good'; msg = `${name} — rate control for stable narrow-complex tachycardia.`; }
      else if (t === 'tachyU') { kind = 'bad'; msg = 'Unstable wide-complex tachycardia — AV-nodal blockers can cause collapse. Cardiovert.'; }
      else if (arrest) { kind = 'bad'; msg = 'Not a cardiac arrest drug.'; }
      else { kind = 'bad'; msg = 'This would worsen bradycardia and hypotension.'; }
      break;
    case 'sedation':
      if (arrest) { kind = 'bad'; msg = 'The patient is in cardiac arrest — no sedation.'; }
      else if (conscious() && (t === 'tachyU' || S.pacer.on)) { kind = 'good'; msg = 'Analgesia/sedation before cardioversion or pacing — as long as it does not delay therapy.'; }
      else { kind = 'info'; msg = 'Sedation given.'; }
      break;
    case 'calcium': msg = 'Calcium is for hyperkalemia, hypocalcemia or calcium-channel-blocker overdose.'; break;
    case 'bicarb': msg = 'Routine bicarbonate is not recommended — consider it for hyperkalemia or TCA overdose.'; break;
    case 'mag': msg = 'Magnesium is for torsades de pointes (polymorphic VT with long QT).'; break;
    case 'naloxone': case 'flumazenil': msg = 'Reversal agents are for suspected opioid / benzodiazepine toxicity.'; break;
    case 'glucagon': case 'lipid': msg = 'An antidote for specific toxicities — no clear indication here.'; break;
    case 'aspirin':
      if (arrest) { kind = 'bad'; msg = 'Not during cardiac arrest.'; }
      else if (/ST|STEMI|ischem|chest/i.test((st.ecg12 || '') + SC.leadIn)) { kind = 'good'; msg = 'Aspirin 162–325 mg chewed for suspected ACS.'; }
      break;
    case 'ntg':
      if (arrest) { kind = 'bad'; msg = 'Not during cardiac arrest.'; }
      else if (S.v.sbp < 90) { kind = 'bad'; msg = `SBP ${Math.round(S.v.sbp)} mmHg — nitrates are contraindicated in hypotension.`; }
      break;
    case 'albuterol': msg = 'Albuterol nebulized.'; break;
    default: break;
  }
  judge(kind, msg, kind === 'info' ? undefined : 'drug');
  evalExits({ type: 'action', key: k });
  refreshUI(true);
}

function pulseCheck() {
  if (S.cpr) { toast('warn', 'Pause compressions to check a pulse.'); return; }
  count('pulse');
  const st = S.stage;
  if (st.type === 'rosc') {
    if (!S.roscId) {
      S.roscId = true; S.roscIdT = S.simT; sd('rosc').roscId = true;
      pushLog('good', 'Pulse present — ROSC!');
      toast('good', `Pulse present — <b>ROSC!</b> ${st.pulseText || ''}. Begin post-cardiac arrest care.`, 7000);
      Snd.win();
      $('#avatar').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }], { duration: 600, easing: 'cubic-bezier(.23,1,.32,1)' });
    } else find(`Pulse: ${st.pulseText || 'present'}.`);
  } else if (isArrest()) {
    S.pulseChecked = true;
    find(st.type === 'pea' ? 'No pulse — organized rhythm without a pulse.' : 'No pulse.');
  } else {
    find(`Pulse: ${st.pulseText || 'present'}.`);
  }
  refreshUI(true);
}

/* ── CPR ─────────────────────────────────────────── */
function toggleCPR() {
  if (!S || S.over) return;
  const st = S.stage;
  if (!S.cpr) {
    if (!isArrest()) {
      if (st.type === 'rosc' && !S.roscId) judge('warn', 'You resumed CPR on an organized rhythm without checking for a pulse.');
      else { judge('bad', 'The patient has a pulse — chest compressions are not indicated.'); return; }
    } else if (S.justChecked && st.type === 'pea' && !S.pulseChecked) {
      judge('warn', 'Organized rhythm on the monitor — check a pulse during the rhythm check to tell PEA from ROSC.');
    }
    S.cpr = true; Synth.cpr = true; S.everCPR = true; S.justChecked = false;
    if (isArrest() && S.pauseStart != null) {
      const p = S.simT - S.pauseStart, first = !S.pauses.length && S.simT - S.stageT0 < 60 && !S.flags.has('firstPause');
      S.flags.add('firstPause');
      S.pauses.push(p); sd().pauses.push(p);
      if (first && p > 20) judge('warn', `It took ${Math.round(p)} s to start compressions — start CPR immediately when the pulse is lost.`);
      else if (!first && p > 10.5) judge('warn', `Hands-off time was ${Math.round(p)} s — keep pauses under 10 s.`);
    }
    if (S.awaitResume && S.lastShockT != null) {
      const lag = S.simT - S.lastShockT;
      S.resumeLags.push(lag); sd().resume.push(lag); S.awaitResume = false;
      if (lag > 10) judge('warn', `CPR resumed ${Math.round(lag)} s after the shock — resume compressions immediately, without a pulse check.`);
    }
    if (S.pacer.on && isArrest()) judge('warn', 'The pacer is still on — turn pacing off during cardiac arrest.');
    S.pauseStart = null; S.overdueWarned = false; S.warned10 = false;
    did('CPR — compressions 100–120/min, depth ≥ 2 in, full recoil.');
  } else {
    S.cpr = false; Synth.cpr = false; S.pauseStart = S.simT;
    if (isArrest() || st.type === 'rosc') {
      if (S.cycle >= 90) {
        S.checks++; sd().checks++; S.cycle = 0; S.justChecked = true;
        did('Compressions paused — rhythm check.');
        if (!S.switched) S.compCycles++; else S.compCycles = 0;
        S.switched = false;
        if (S.compCycles >= 2 && !S.fatigue && isArrest()) { S.fatigue = true; judge('warn', 'Compressor fatigue — CPR quality is dropping (watch the ETCO₂). Switch compressors every 2 minutes.'); }
        evalExits({ type: 'check' });
      } else if (st.type === 'rosc') {
        did('Compressions paused.');
        if (st.etco2Rosc) judge('good', 'Good call — the abrupt ETCO₂ rise is a ROSC signal. Check the pulse.');
      } else {
        did('Compressions paused.');
        if (S.cycle > 8) { S.earlyChecks++; sd().early++; judge('warn', `CPR interrupted at ${fmt(S.cycle)} — complete 2-minute cycles before rhythm checks.`); }
      }
    } else did('Compressions stopped.');
  }
  refreshUI(true);
}

function skipAhead() {
  if (!S || S.over) return;
  const arrestCpr = isArrest() && S.cpr;
  if (isArrest() && !S.cpr) { toast('warn', 'Start compressions first — never let time pass hands-off.'); return; }
  const target = arrestCpr ? Math.max(0, 120 - S.cycle) : 30;
  if (target < 1) { toast('info', 'The 2-minute cycle is complete — pause for the rhythm check.'); return; }
  const idx0 = S.idx;
  let done = 0;
  while (done < target && S.idx === idx0 && !S.over) { tick(1); done++; }
  toast('info', `⏩ ${arrestCpr ? 'CPR continued' : 'Time advanced'} +${fmt(done)}${S.idx !== idx0 ? ' — something changed!' : ''}`, 2600);
  refreshUI(true);
}

/* ── defibrillator / pacer ─────────────────────────────────────────── */
function setEnergy(j) { S.defib.energy = j; if (S.defib.charged) { S.defib.charged = false; toast('info', 'Energy changed — device disarmed. Charge again.'); } refreshUI(true); }
function toggleSync() {
  if (!S.monitor) { toast('bad', 'Attach the pads/monitor first.'); return; }
  S.defib.sync = !S.defib.sync;
  did(`SYNC ${S.defib.sync ? 'ON' : 'OFF'}.`);
  refreshUI(true);
}
function charge() {
  if (!S || S.over) return;
  if (!S.monitor) { toast('bad', 'Pads are not attached — attach the monitor/pads first.'); return; }
  if (S.defib.charging || S.defib.charged) return;
  S.defib.charging = true; S.defib.chargeT0 = performance.now();
  Snd.charge(2.4);
  did(`Charging ${S.defib.energy} J${S.defib.sync ? ' (SYNC)' : ''}…`);
  if (isArrest() && S.cpr) S.flags.add('chargedDuringCpr');
  refreshUI(true);
}
function disarm() { if (S.defib.charged || S.defib.charging) { S.defib.charged = S.defib.charging = false; did('Defibrillator disarmed.'); refreshUI(true); } }
function shock() {
  if (!S || S.over) return;
  const D = S.defib, st = S.stage, t = st.type;
  if (!D.charged) { toast('info', D.charging ? 'Still charging…' : 'Charge the defibrillator first.'); return; }
  if (S.cpr) { judge('bad', 'Compressions are still going — announce "Clear!" and stop CPR before you shock.'); sd().clearErr++; S.errs.push({ t: S.simT, kind: 'bad', text: 'Attempted shock during compressions.', sec: secKey() }); return; }
  if (D.sync && !Synth.hasR()) { judge('warn', 'SYNC mode cannot find an R wave — no shock delivered. Turn SYNC off for VF.'); return; }
  // deliver
  D.charged = false;
  Synth.shockT = Mon.t + 0.02;
  Snd.shock();
  const scr = $('#monScreen'); scr.classList.remove('flash'); void scr.offsetWidth; scr.classList.add('flash');
  const wasSync = D.sync;
  did(`${wasSync ? 'Synchronized cardioversion' : 'Defibrillation'} — ${D.energy} J delivered.`);
  if (S.pacer.on && isArrest()) { S.pacer.on = false; S.pacer.capture = false; Synth.setPace({ on: false, capture: false }, Mon.t); judge('warn', 'Pacing was still running — discontinue pacing in cardiac arrest (pacer turned off).'); }
  if (wasSync) { D.sync = false; pushLog('info', 'SYNC disengaged after the shock (device default) — re-select it for a repeat cardioversion.'); }
  let key = wasSync ? 'sync' : 'shock';
  if (SHOCKABLE.has(t)) {
    key = 'shock';
    S.shocks++; S.arrestShocks++; sd().shocks++;
    S.lastShockT = S.simT; S.awaitResume = true;
    if (wasSync) judge('warn', 'Pulseless VT/VF should be defibrillated with an unsynchronized shock.');
    else if (D.energy < 120) judge('warn', `${D.energy} J is low for defibrillation — use the manufacturer dose (biphasic 120–200 J; if unknown use the maximum).`);
    else judge('good', `Shock ${S.arrestShocks} delivered — resume CPR immediately, starting with compressions.`);
  } else if (ARREST.has(t)) {
    sd().badShock++; S.lastShockT = S.simT; S.awaitResume = true;
    judge('bad', `${RHY[t === 'pea' ? 'pea' : 'asys'][0]} is non-shockable! Defibrillation does not help — resume CPR and give epinephrine.`);
  } else if (t === 'tachyU') {
    if (wasSync) {
      judge(D.energy < 100 ? 'warn' : 'good', D.energy < 100 ? `Synchronized cardioversion at ${D.energy} J — monomorphic VT usually needs ≥ 100 J.` : `Synchronized cardioversion at ${D.energy} J.`);
      if (conscious() && !S.sedation) judge('info', 'Consider sedation before cardioversion when it does not delay treatment.');
    } else {
      judge('bad', 'Unsynchronized shock on a perfusing rhythm — risk of R-on-T VF! Use SYNC for cardioversion.');
      const nx = SC.stages[S.idx + 1];
      if (nx && nx.type === 'vf') { goStage(S.idx + 1, 'The unsynchronized shock lands on the T wave — the monitor shows VF. No pulse!'); refreshUI(true); return; }
    }
  } else if (t === 'tachyS') {
    judge(wasSync ? 'warn' : 'bad', wasSync ? 'Stable SVT — vagal maneuvers and adenosine come before cardioversion.' : 'Unsynchronized shock on a stable perfusing rhythm — dangerous!');
  } else {
    judge('bad', 'This patient has a pulse — defibrillation is not indicated!');
  }
  count(key);
  evalExits({ type: 'action', key });
  refreshUI(true);
}
function togglePacer() {
  if (!S.monitor) { toast('bad', 'Attach the pads first.'); return; }
  const P = S.pacer;
  if (!P.on) {
    if (isArrest()) { judge('bad', 'Pacing is not effective in cardiac arrest.'); return; }
    P.on = true; Synth.setPace({ on: true, rate: P.rate, capture: false }, Mon.t);
    did(`Transcutaneous pacing ON — ${P.rate} ppm, ${P.mA} mA.`);
    count('paceOn');
    if (S.stage.type === 'brady' || S.stage.type === 'resp') judge('good', 'Transcutaneous pacing started — increase the mA until electrical capture, then confirm a mechanical (femoral) pulse.');
    else judge('warn', 'Pacing is for symptomatic bradycardia.');
    if (conscious() && !S.sedation) judge('info', 'Pacing is painful — provide analgesia/sedation.');
    evalExits({ type: 'action', key: 'paceOn' });
  } else {
    P.on = false; P.capture = false; Synth.setPace({ on: false, capture: false }, Mon.t);
    did('Pacing OFF.');
  }
  updateCapture();
  refreshUI(true);
}
function pacerStep(field, delta) {
  const P = S.pacer;
  if (field === 'rate') P.rate = clamp(P.rate + delta, 40, 120);
  else P.mA = clamp(P.mA + delta, 0, 200);
  Synth.setPace({ rate: P.rate }, Mon.t);
  updateCapture();
  refreshUI(true);
}
function updateCapture() {
  const P = S.pacer, th = S.stage.paceThreshold || 60;
  const cap = P.on && P.mA >= th && !isArrest();
  if (cap !== P.capture) {
    P.capture = cap; Synth.setPace({ capture: cap }, Mon.t);
    if (cap) {
      did(`Electrical capture at ${P.mA} mA.`);
      count('capture');
      const fx = (S.stage.fx || {}).capture;
      if (fx) judge(fx.kind || 'good', fx.msg);
      else judge('good', `Capture at ${P.mA} mA — confirm a femoral pulse. Set the output ~10 mA above threshold.`);
      evalExits({ type: 'action', key: 'capture' });
    } else if (P.on) did('Loss of capture.');
  }
}

/* ═══════════════════════ TICK ═══════════════════════ */
function tick(dt) {
  if (!S || S.over) return;
  S.simT += dt;
  const arrest = isArrest();
  if (arrest) { S.arrestT += dt; if (S.cpr) S.cprT += dt; }
  if (S.cpr) S.cycle += dt;
  if (S.vent) sd().vent = true;
  if (S.pending && S.simT >= S.pending.at) { const ex = S.pending.ex; S.pending = null; goStage(S.idx + 1, ex.msg); }
  evalExits({ type: 'tick' });
  const st = S.stage;
  if (st.clue && !S.clues[S.idx] && S.simT - S.stageT0 >= st.clue.after) showClue();
  if (S.cpr && isArrest() && S.cycle >= 150 && !S.overdueWarned) { S.overdueWarned = true; sd().overdue++; judge('warn', 'Rhythm check overdue — pause for a rhythm check every 2 minutes.'); }
  if (isArrest() && !S.cpr && S.pauseStart != null && S.everCPR && !S.warned10 && S.simT - S.pauseStart > 10) {
    S.warned10 = true;
    if (S.mode === 'train') toast('warn', 'Hands-off for 10 s — resume compressions now!');
  }
  if (st.etco2Rosc && S.cpr && S.simT - S.stageT0 > 35 && !S.flags.has('etco2hint' + S.idx)) {
    S.flags.add('etco2hint' + S.idx);
    if (S.mode === 'train') toast('warn', 'ETCO₂ jumped to ~40 mmHg during CPR — what does that suggest?');
  }
  easeVitals(dt);
}
function showClue() {
  const st = S.stage;
  if (st.clue && !S.clues[S.idx]) { S.clues[S.idx] = true; find(st.clue.text); }
}

/* ═══════════════════════ COACH ═══════════════════════ */
function hint() {
  const st = S.stage, t = st.type, arrest = isArrest(), D = S.defib;
  if (!S.monitor) return 'Attach the <b>monitor and pads</b> to see the rhythm.';
  if (!S.roles && S.simT > 4) return '<b>Assign team roles</b> — you are the Team Leader.';
  if (st.quiz && !S.quizDone[S.idx] && !(t === 'pea' && !S.pulseChecked) && !S.cpr && t !== 'rosc') return 'Look at the monitor — <b>identify the rhythm</b>.';
  if (arrest) {
    if (!S.cpr) {
      if (t === 'pea' && S.justChecked && !S.pulseChecked) return 'Organized rhythm — <b>check a pulse</b> (≤ 10 s).';
      if (SHOCKABLE.has(t)) {
        if (S.awaitResume) return 'Shock delivered — <b>resume CPR immediately</b>.';
        if (D.sync) return 'Turn <b>SYNC off</b> — defibrillate VF/pVT unsynchronized.';
        if (!D.charged && !D.charging) return `<b>Charge</b> the defibrillator (${D.energy} J) — announce "Charging".`;
        if (D.charged) return '"<b>Clear!</b>" — deliver the <b>shock</b>.';
        return 'Charging…';
      }
      return 'Non-shockable — <b>start CPR</b> now (Space).';
    }
    if (S.cycle >= 118) return `2 minutes done — ${SHOCKABLE.has(t) ? 'charge, then ' : ''}<b>pause for a rhythm check</b>.`;
    if (st.etco2Rosc && S.simT - S.stageT0 > 30) return 'ETCO₂ is rising sharply — <b>pause and check a pulse</b>.';
    const epiDue = S.lastEpi == null || S.simT - S.lastEpi >= 180;
    if (!S.iv) return 'Get <b>IV / IO access</b> while CPR continues.';
    if (!S.vent) return 'Ventilate — <b>bag-mask 30:2</b> or place an advanced airway.';
    if (SHOCKABLE.has(t)) {
      if (S.arrestShocks >= 2 && epiDue) return 'Give <b>epinephrine 1 mg</b> (after the 2nd shock, then every 3–5 min).';
      if (S.arrestShocks >= 3 && S.amio < 1) return 'Refractory VF/pVT — <b>amiodarone 300 mg</b>.';
      if (S.arrestShocks >= 5 && S.amio === 1) return 'Still refractory — second dose <b>amiodarone 150 mg</b>.';
    } else {
      if (epiDue) return 'Give <b>epinephrine 1 mg ASAP</b> in PEA/asystole.';
      if (!sd().hts) return "Search for reversible causes — open <b>H's & T's</b>.";
    }
    if (!S.capno) return 'Connect <b>waveform capnography</b> to monitor CPR quality.';
    if (S.fatigue) return '<b>Switch compressors</b> — fatigue is degrading CPR.';
    if (!S.defib.charged && SHOCKABLE.has(t) && S.cycle > 100) return 'Pre-<b>charge</b> the defibrillator during compressions.';
    return 'High-quality CPR — use <b>Skip to check</b> to advance to the rhythm check.';
  }
  if (t === 'rosc') {
    const r = sd('rosc');
    if (!S.roscId) return 'Organized rhythm with ETCO₂ rise — <b>check a pulse</b>.';
    if (S.cpr) return 'ROSC confirmed — <b>stop compressions</b>.';
    if (!r.bp) return 'Post-ROSC: <b>check the BP</b> (target SBP ≥ 90, MAP ≥ 65).';
    if (S.v.sbp < 90 && !S.pressor && S.fluids < 1) return 'Hypotension — <b>fluid bolus</b> and/or a <b>vasopressor infusion</b>.';
    if (!S.airway) return 'Secure the airway — <b>advanced airway</b>.';
    if (!S.capno) return 'Connect <b>waveform capnography</b> — target ETCO₂ 35–45.';
    if (!r.ecg12) return 'Obtain a <b>12-lead ECG</b>.';
    if (!r.labs) return 'Order <b>labs / ABG</b>.';
    if (!r.ttm && !conscious()) return 'Not following commands — consider <b>targeted temperature management</b>.';
    if (st.dest && !S.destDone) return 'Decide the <b>transport destination</b>.';
    return 'Post-arrest care done — <b>End scenario</b> for your debrief.';
  }
  if (t === 'resp') {
    if (!S.vent) return 'Inadequate breathing — start <b>bag-mask ventilation</b>.';
    if (st.fx && st.fx.naloxone && !S.used.naloxone && !S.used.flumazenil) return 'Sedation-induced — give <b>reversal agents</b> (naloxone / flumazenil).';
    if (!S.airway) return 'Prepare an <b>advanced airway</b>.';
    return 'Reassess oxygenation and the rhythm.';
  }
  const spo2 = S.v.spo2;
  if (spo2 < 94 && !S.o2) return `SpO₂ ${Math.round(spo2)}% — give <b>oxygen</b>.`;
  if (!S.iv) return 'Establish <b>IV access</b>.';
  if (!S.used.nibp) return '<b>Check the blood pressure</b>.';
  if (t === 'brady') {
    if (st.stable) { if (!S.used.ecg12) return 'Get a <b>12-lead ECG</b>.'; if (!S.used.aspirin) return 'Suspected ACS — <b>aspirin</b>.'; if (!S.used.cathlab) return '<b>Activate the cath lab</b>.'; return 'Stable bradycardia — monitor and observe.'; }
    if (!S.atropine && !st.atropineOptional) return 'Symptomatic bradycardia — <b>atropine 1 mg IV</b>.';
    if (!S.pacer.on && !S.pressor) return 'Atropine ineffective → <b>transcutaneous pacing</b> or <b>dopamine / epinephrine infusion</b>.';
    if (S.pacer.on && !S.pacer.capture) return `Increase the pacer <b>mA</b> until capture (Defib / Pace tab).`;
    return 'Reassess perfusion; get a <b>12-lead</b>, consider causes.';
  }
  if (t === 'tachyU') {
    if (conscious() && !S.sedation && !S.used.sync) return 'Unstable — prepare <b>synchronized cardioversion</b> (sedate if it won\'t delay).';
    if (!D.sync) return 'Turn <b>SYNC ON</b> (Defib / Pace tab).';
    if (!D.charged) return `<b>Charge</b> — synchronized ${D.energy} J (VT: start at 100 J).`;
    return '"Clear!" — deliver the <b>synchronized shock</b>.';
  }
  if (t === 'tachyS') {
    if (!S.used.ecg12) return 'Stable — get a <b>12-lead ECG</b> to define the rhythm.';
    if (!S.used.vagal) return 'Try a <b>vagal maneuver</b>.';
    return 'Consider <b>adenosine</b> (6 mg → 12 mg) — or a rate-control agent if adenosine is contraindicated.';
  }
  return 'Reassess the patient.';
}

/* ═══════════════════════ UI: PICKER ═══════════════════════ */
let filter = 'all';
function bestMap() { return store.get('megacode.best', {}); }
function renderPicker() {
  const F = [['all', 'All 12'], ['brady', 'Bradycardia'], ['tachy', 'Tachycardia'], ['ooh', 'Out-of-hospital'], ['ih', 'In-hospital']];
  $('#filters').innerHTML = F.map(([k, l]) => `<button type="button" class="chip${filter === k ? ' on' : ''}" data-f="${k}" role="tab" aria-selected="${filter === k}">${l}</button>`).join('');
  const best = bestMap();
  const list = SCN.filter(s => {
    const first = s.stages.find(x => x.type !== 'resp') || s.stages[0];
    if (filter === 'brady') return first.type === 'brady';
    if (filter === 'tachy') return first.type === 'tachyU' || first.type === 'tachyS';
    if (filter === 'ooh') return s.setting === 'ooh';
    if (filter === 'ih') return s.setting !== 'ooh';
    return true;
  });
  $('#scGrid').innerHTML = list.map(s => {
    const b = best[s.id];
    const set = s.setting === 'ooh' ? '🚑 Out-of-hospital' : s.setting === 'ed' ? '🏥 Emergency dept' : '🏥 In-hospital';
    return `<button type="button" class="sc-card" data-id="${s.id}">
      ${b ? `<span class="sc-best ${b.pass ? 'pass' : 'nr'}">${b.pass ? '✓ PASS' : 'Best'} ${b.score}%</span>` : ''}
      <div class="sc-top"><div class="sc-num">${s.id}</div><div><div class="sc-title">${s.title}</div><div class="sc-meta">${set} · ${s.sex === 'F' ? '♀' : '♂'} ${s.age} y</div></div></div>
      <div class="path">${s.path.map(p => `<span class="pth ${pathClass(p)}">${p}</span>`).join('<span class="pth-sep">→</span>')}</div>
      <div class="sc-lead">${s.leadIn}</div>
    </button>`;
  }).join('');
  $('#statPassed').textContent = Object.values(best).filter(x => x.pass).length;
}

/* ═══════════════════════ UI: SIM ═══════════════════════ */
const UI = { btn: {}, lastFull: 0, tab: store.get('megacode.tab', 'assess') };
function buildDock() {
  $('#tabs').innerHTML = TABS.map(t => `<button type="button" class="tab${UI.tab === t.id ? ' on' : ''}" data-tab="${t.id}" role="tab" aria-selected="${UI.tab === t.id}">${ico(t.i)} ${t.l}</button>`).join('');
  const panels = TABS.map(tb => {
    if (tb.id === 'elec') return `<div class="panel${UI.tab === 'elec' ? ' on' : ''}" data-panel="elec">${defibHtml()}</div>`;
    const acts = ACTS.filter(a => a.tab === tb.id);
    let html = '', g = null;
    for (const a of acts) {
      if (a.g !== g) { if (g !== null) html += '</div>'; html += `<div class="grp-t">${a.g}</div><div class="act-grid">`; g = a.g; }
      const l = a.drug ? DRUGS[a.k][0] : a.l;
      html += `<button type="button" class="act" data-act="${a.k}"><span class="ai">${a.e}</span><span class="at">${l}<span class="ad" data-d="${a.k}">${a.drug ? DRUGS[a.k][1]() : a.d}</span></span></button>`;
    }
    if (tb.id === 'circ') html = `<div class="grp-t">Compressions</div><div class="act-grid"><button type="button" class="act" data-act="cpr"><span class="ai">🫀</span><span class="at"><span data-cprl>Start CPR</span><span class="ad">Space · 100–120/min</span></span></button><button type="button" class="act" data-act="skip"><span class="ai">⏩</span><span class="at">Skip ahead<span class="ad">to rhythm check</span></span></button></div>` + html;
    return `<div class="panel${UI.tab === tb.id ? ' on' : ''}" data-panel="${tb.id}">${html}</div></div>`;
  }).join('');
  $('#panels').innerHTML = panels;
  UI.btn = {};
  document.querySelectorAll('#panels [data-act]').forEach(b => { UI.btn[b.dataset.act] = b; });
}
function defibHtml() {
  return `<div class="defib">
    <div class="dbox"><div class="dbox-t">${ico('zap')} Defibrillator · biphasic</div>
      <div class="e-chips" id="eChips">${[50, 100, 120, 150, 200, 360].map(j => `<button type="button" class="e-chip" data-j="${j}">${j} J</button>`).join('')}</div>
      <div class="d-row">
        <button type="button" class="d-btn d-sync" id="dSync">SYNC OFF</button>
        <button type="button" class="d-btn d-charge" id="dCharge">CHARGE</button>
        <button type="button" class="d-btn d-shock" id="dShock">⚡ SHOCK</button>
        <button type="button" class="d-btn" id="dDisarm">Disarm</button>
      </div>
      <p class="hint-s">Defibrillate VF/pVT unsynchronized (120–200 J). Cardiovert unstable tachycardia with SYNC ON (narrow regular 50–100 J, monomorphic VT 100 J). White ▼ markers on the ECG show the sync detecting R waves.</p>
    </div>
    <div class="dbox"><div class="dbox-t">${ico('activity')} Transcutaneous pacer</div>
      <div class="stepper"><span class="sl">Rate</span><button type="button" class="st-b" data-ps="rate:-10" aria-label="Decrease rate">−</button><span class="sv" id="pRate">70 ppm</span><button type="button" class="st-b" data-ps="rate:10" aria-label="Increase rate">+</button></div>
      <div class="stepper"><span class="sl">Output</span><button type="button" class="st-b" data-ps="mA:-10" aria-label="Decrease output">−</button><span class="sv" id="pmA">0 mA</span><button type="button" class="st-b" data-ps="mA:10" aria-label="Increase output">+</button></div>
      <div class="d-row"><button type="button" class="d-btn" id="pToggle">PACER OFF</button></div>
      <p class="hint-s" id="pState">Start pacing, then raise the output until each spike is followed by a wide QRS (capture).</p>
    </div>
  </div>`;
}
function renderProgress() {
  if (!S) return;
  const html = SC.stages.map((s, i) => {
    const [l, c] = TYPE_CHIP[s.type];
    if (i < S.idx) return `<span class="pth ${c}">${l}</span>`;
    if (i === S.idx) return `<span class="pth ${c} p-cur">${l}</span>`;
    return '<span class="pth p-unk">?</span>';
  }).join('<span class="pth-sep">→</span>');
  $('#prog').innerHTML = html;
}
function renderTeam() {
  const R = ['Leader', 'Compressor', 'Airway', 'Monitor/Defib', 'IV/Meds', 'Recorder'];
  $('#team').innerHTML = R.map((r, i) => `<span class="tm${S.roles || i === 0 ? ' on' : ''}">${r}</span>`).join('');
}

function refreshUI(force) {
  if (!S) return;
  const now = performance.now();
  if (!force && now - UI.lastFull < 180) return;
  UI.lastFull = now;
  const st = S.stage, t = st.type, arrest = isArrest(), D = S.defib, P = S.pacer;
  // numerics
  const hr = Synth.hr();
  const vHr = $('#vHr'), sHr = $('#sHr');
  if (!S.monitor) { vHr.textContent = '---'; sHr.textContent = 'leads off'; }
  else if (S.cpr) { vHr.textContent = '---'; sHr.textContent = 'CPR artifact'; }
  else if (Synth.r.k === 'vf') { vHr.textContent = '---'; sHr.textContent = 'VF'; }
  else { vHr.textContent = String(hr); sHr.textContent = P.capture ? 'paced' : 'bpm'; }
  const alarmHr = S.monitor && !S.cpr && (Synth.r.k === 'vf' || Synth.r.k === 'asys' || hr < 45 || hr > 140);
  $('#nHr').classList.toggle('alarming', !!alarmHr);
  const vS = $('#vSpo2'), sS = $('#sSpo2');
  if (!S.monitor) { vS.textContent = '--'; sS.textContent = 'probe off'; }
  else if (plethLost() || arrest) { vS.textContent = '--'; sS.textContent = SC.noSpo2 && S.idx === 0 ? 'poor signal' : 'no pulse'; }
  else { vS.textContent = String(Math.round(S.v.spo2)); sS.textContent = S.o2 ? 'on O₂' : 'room air'; }
  $('#nSpo2').classList.toggle('alarming', S.monitor && !arrest && !plethLost() && S.v.spo2 < 90);
  const vC = $('#vCo2'), sC = $('#sCo2');
  if (!S.capno) { vC.textContent = '--'; sC.textContent = 'not connected'; }
  else if (S.v.rr <= 0) { vC.textContent = '--'; sC.textContent = 'no breaths'; }
  else { vC.textContent = String(Math.round(S.v.etco2)); sC.textContent = `awRR ${Math.round(S.v.rr)}`; }
  if (S.nibp) { $('#vBp').textContent = `${S.nibp.s}/${S.nibp.d}`; if (!S.nibpBusy) $('#sBp').textContent = `(${Math.round((S.nibp.s + 2 * S.nibp.d) / 3)}) @ ${fmt(S.nibp.t)}`; }
  else { $('#vBp').textContent = '---/---'; if (!S.nibpBusy) $('#sBp').textContent = 'tap Check BP'; }
  $('#nBp').classList.toggle('alarming', !!S.nibp && S.nibp.s < 90);
  // alarm label
  let al = null, lvl = 'lo';
  if (!S.monitor) al = 'LEADS OFF';
  else if (Synth.r.k === 'vf') { al = '*** VFIB'; lvl = 'hi'; }
  else if (Synth.r.k === 'vt' && !P.capture) { al = '*** VTACH'; lvl = 'hi'; }
  else if (Synth.r.k === 'asys') { al = '*** ASYSTOLE'; lvl = 'hi'; }
  else if (hr < 45) { al = '** BRADY'; lvl = 'med'; }
  else if (hr > 140) { al = '** TACHY'; lvl = 'med'; }
  else if (!arrest && !plethLost() && S.v.spo2 < 90) { al = '** SpO₂ LOW'; lvl = 'med'; }
  const A = $('#monAlarm');
  A.hidden = !al; if (al) { A.textContent = al; A.className = `alarm ${lvl}`; }
  if (al && lvl === 'hi' && !S.cpr && !S.paused && S.simT - S.lastAlarm > 4) { S.lastAlarm = S.simT; Snd.alarm(); }
  else if (al && lvl === 'med' && !S.paused && S.simT - S.lastAlarm > 9) { S.lastAlarm = S.simT; Snd.med(); }
  $('#monClock').textContent = fmt(S.simT);
  // monitor bottom bar
  $('#mbEnergy').textContent = `${D.energy} J`;
  const mc = $('#mbCharge');
  if (!S.monitor) { mc.textContent = 'PADS OFF'; mc.className = 'mb-item'; }
  else if (D.charging) { mc.textContent = 'CHARGING…'; mc.className = 'mb-item mb-charged'; }
  else if (D.charged) { mc.textContent = 'CHARGED — PRESS SHOCK'; mc.className = 'mb-item mb-charged'; }
  else { mc.textContent = 'PADS ✓'; mc.className = 'mb-item'; }
  $('#mbSync').hidden = !D.sync;
  $('#mbPace').hidden = !P.on; $('#mbPaceV').textContent = `${P.rate} ppm · ${P.mA} mA${P.capture ? ' · CAPTURE' : ''}`;
  $('#mbCpr').hidden = !S.cpr;
  // quick bar
  const q = $('#qCpr');
  q.classList.toggle('running', S.cpr);
  q.classList.toggle('q-due', S.cpr && S.cycle >= 118);
  $('#qCprL').textContent = S.cpr ? 'Pause CPR' : 'Start CPR';
  $('#qCprS').textContent = S.cpr ? `rhythm check · ${fmt(S.cycle)}` : 'Space';
  const qc = $('#qCharge');
  qc.disabled = !S.monitor || D.charged || D.charging;
  qc.classList.toggle('charging', D.charging);
  $('#qChargeS').textContent = `${D.energy} J${D.sync ? ' SYNC' : ''}`;
  const qs = $('#qShock');
  qs.disabled = !D.charged; qs.classList.toggle('ready', D.charged);
  $('#qShockS').textContent = D.sync ? 'SYNC · Clear!' : 'Clear!';
  $('#qPulse').disabled = S.cpr;
  const arrestCpr = arrest && S.cpr;
  $('#qSkip').querySelector('span').textContent = arrestCpr ? 'Skip to check' : 'Wait 30 s';
  $('#qSkipS').textContent = arrestCpr ? `−${fmt(Math.max(0, 120 - S.cycle))}` : 'advance time';
  // coach
  $('#coach').hidden = S.mode !== 'train';
  if (S.mode === 'train') $('#coachT').innerHTML = hint();
  // patient card
  const av = $('#avatar');
  av.textContent = SC.sex === 'F' ? '👩' : '👨';
  av.className = `avatar ${arrest ? 'crit' : S.v.sbp < 90 || S.v.spo2 < 90 ? 'warn' : 'ok'}`;
  $('#ptName').textContent = `${SC.sex === 'F' ? 'Female' : 'Male'}, ${SC.age} y · ${SC.place}`;
  $('#ptSt').innerHTML = arrest ? `<b style="color:#fca5a5">Pulseless${S.cpr ? ' — CPR in progress' : ''}</b>` : `<b>${st.cons || '—'}</b>${t === 'rosc' && S.roscId ? ' · <span style="color:#86efac">ROSC</span>' : ''}`;
  // timers
  $('#tCode').textContent = fmt(S.simT);
  $('#tCodeS').textContent = S.everArrest ? `arrest ${fmt(S.arrestT)}` : 'elapsed';
  const eb = $('#tEpiBox');
  if (S.lastEpi == null) { $('#tEpi').textContent = '—'; eb.className = 'tmr'; }
  else { const e = S.simT - S.lastEpi; $('#tEpi').textContent = fmt(e); eb.className = `tmr ${e < 180 ? '' : e <= 300 ? 'good' : 'bad'}`; }
  $('#tEpiS').textContent = S.lastEpi != null && S.simT - S.lastEpi >= 180 && arrest ? 'due now' : `${S.epi} dose${S.epi === 1 ? '' : 's'}`;
  const ccf = S.arrestT > 5 ? S.cprT / S.arrestT : null;
  $('#tCcf').textContent = ccf == null ? '—' : `${Math.round(ccf * 100)}%`;
  $('#tCcfBox').className = `tmr ${ccf == null ? '' : ccf >= 0.8 ? 'good' : ccf >= 0.6 ? 'warn' : 'bad'}`;
  const frac = clamp(S.cycle / 120, 0, 1);
  $('#ringFg').style.strokeDashoffset = String(213.6 * (1 - frac));
  $('#ring').classList.toggle('due', S.cycle >= 118);
  $('#ringV').textContent = fmt(S.cycle);
  $('#iShocks').textContent = S.shocks; $('#iAmio').textContent = S.amio;
  const ho = $('#iHands');
  if (arrest && !S.cpr && S.pauseStart != null) { ho.className = 'handsoff'; ho.textContent = `Hands-off ${Math.floor(S.simT - S.pauseStart)} s`; }
  else { ho.className = ''; ho.textContent = S.cpr ? 'Compressions on' : ' '; }
  // dock state
  const B = UI.btn;
  const doneFor = { monitor: S.monitor, capno: S.capno, iv: S.iv, io: !!S.used.io && S.iv, roles: S.roles, airway: S.airway, o2: S.o2, bvm: S.bvm };
  for (const k in B) {
    const b = B[k];
    if (k in doneFor) b.classList.toggle('done', !!doneFor[k]);
    if (k === 'pulse') b.disabled = S.cpr;
    if (k === 'capno') b.disabled = !S.monitor && !S.capno;
    if (DRUGS[k]) { const d = b.querySelector('[data-d]'); const txt = DRUGS[k][1](); if (d.textContent !== txt) d.textContent = txt; b.disabled = !S.iv && !NO_IV.has(k); }
  }
  if (B.cpr) { B.cpr.querySelector('[data-cprl]').textContent = S.cpr ? 'Pause CPR · rhythm check' : 'Start CPR'; }
  // defib panel
  document.querySelectorAll('#eChips .e-chip').forEach(c => c.classList.toggle('on', +c.dataset.j === D.energy));
  const ds = $('#dSync'); if (ds) { ds.textContent = D.sync ? 'SYNC ON' : 'SYNC OFF'; ds.classList.toggle('on', D.sync); }
  const dc = $('#dCharge'); if (dc) { dc.disabled = !S.monitor || D.charged || D.charging; dc.textContent = D.charging ? 'CHARGING…' : D.charged ? 'CHARGED' : 'CHARGE'; }
  const dsh = $('#dShock'); if (dsh) { dsh.disabled = !D.charged; dsh.classList.toggle('ready', D.charged); }
  const pt = $('#pToggle'); if (pt) { pt.textContent = P.on ? 'PACER ON — tap to stop' : 'START PACING'; pt.classList.toggle('pace-on', P.on); }
  $('#pRate').textContent = `${P.rate} ppm`; $('#pmA').textContent = `${P.mA} mA`;
  $('#pState').textContent = !P.on ? 'Start pacing, then raise the output until each spike is followed by a wide QRS (capture).' : P.capture ? `✓ Electrical capture at ${P.mA} mA — check a femoral pulse.` : 'No capture yet — increase the output (mA).';
}

/* ═══════════════════════ MODALS ═══════════════════════ */
let modalStack = 0;
const modalOpen = () => modalStack > 0;
function openModal(html, opts = {}) {
  const root = $('#modalRoot');
  const m = document.createElement('div');
  m.className = 'modal';
  if (opts.see) m.style.cssText = 'background:rgba(0,0,0,.35);backdrop-filter:none;-webkit-backdrop-filter:none';
  m.innerHTML = `<div class="sheet${opts.wide ? ' wide' : ''}" role="dialog" aria-modal="true">${html}</div>`;
  root.appendChild(m);
  modalStack++;
  const close = () => { if (!m.isConnected) return; m.remove(); modalStack--; };
  if (opts.dismiss) m.addEventListener('click', e => { if (e.target === m) close(); });
  setTimeout(() => { const f = m.querySelector('[data-autofocus]') || m.querySelector('button'); if (f) f.focus(); }, 40);
  return { el: m, close };
}

function openBriefing(sc) {
  const fields = ['HR', 'BP', 'RR', 'SpO₂', 'Temp', 'Weight', 'Age'];
  const vit = fields.map(f => `<div class="vit"><div class="vl">${f}</div><div class="vv${sc.known[f] ? '' : ' unk'}">${sc.known[f] || 'assess'}</div></div>`).join('');
  const extra = Object.keys(sc.known).filter(k => !fields.includes(k)).map(f => `<div class="vit"><div class="vl">${f}</div><div class="vv">${sc.known[f]}</div></div>`).join('');
  let mode = store.get('megacode.mode', 'train');
  const set = sc.setting === 'ooh' ? '🚑 Out-of-hospital' : sc.setting === 'ed' ? '🏥 Emergency department' : '🏥 In-hospital';
  const m = openModal(`
    <div class="sh-k">Megacode ${sc.id} · ${set}</div>
    <div class="sh-t">${sc.title}</div>
    <p class="sh-p">${sc.leadIn}</p>
    <div class="vit-grid">${vit}${extra}</div>
    <ul class="bul">${sc.assessment.map(a => `<li>${a}</li>`).join('')}</ul>
    <p class="sh-p" style="margin-bottom:10px"><b>What are your initial actions?</b></p>
    <div class="mode-row">
      <button type="button" class="mode${mode === 'train' ? ' on' : ''}" data-mode="train"><b>🎓 Training</b><span>Coach hints and instant feedback on every action.</span></button>
      <button type="button" class="mode${mode === 'exam' ? ' on' : ''}" data-mode="exam"><b>📝 Megacode test</b><span>No hints. Every decision is scored at the end.</span></button>
    </div>
    <p class="hint-s" style="margin:-4px 0 14px">Keyboard: <b>Space</b> CPR · <b>C</b> charge · <b>S</b> shock · <b>P</b> pulse check</p>
    <div class="sh-actions"><button type="button" class="btn" data-x="back">Back</button><button type="button" class="btn btn-primary" data-x="go" data-autofocus>${ico('play')} Start scenario</button></div>`);
  m.el.addEventListener('click', e => {
    const md = e.target.closest('[data-mode]');
    if (md) { mode = md.dataset.mode; store.set('megacode.mode', mode); m.el.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === mode)); }
    const x = e.target.closest('[data-x]');
    if (!x) return;
    m.close();
    if (x.dataset.x === 'go') startSim(sc, mode);
  });
}

function openQuiz() {
  const st = S.stage, q = st.quiz, idx = S.idx;
  S.quizDone[idx] = true;
  const pool = ARREST.has(st.type) ? ARREST_GRP : PULSE_GRP;
  const others = pool.filter(k => k !== q.rhythm).sort(() => Math.random() - 0.5).slice(0, 3);
  const opts = [q.rhythm, ...others].sort(() => Math.random() - 0.5);
  const exam = S.mode === 'exam';
  const m = openModal(`
    <div class="sh-k">Rhythm check</div>
    <div class="quiz-q">What rhythm is on the monitor?</div>
    <div class="quiz-opts" id="qOpts">${opts.map(k => `<button type="button" class="qo" data-k="${k}">${RHY[k][0]}</button>`).join('')}</div>
    <div id="qMore"></div>`, { see: true });
  const sec = sd();
  m.el.addEventListener('click', function onPick(e) {
    const b = e.target.closest('.qo[data-k]');
    if (!b) return;
    m.el.removeEventListener('click', onPick);
    const ok = b.dataset.k === q.rhythm;
    sec.quizR = sec.quizR === null ? ok : sec.quizR && ok;
    did(`Rhythm identified as ${RHY[b.dataset.k][0]}.`);
    m.el.querySelectorAll('.qo').forEach(x => { x.disabled = true; if (!exam && x.dataset.k === q.rhythm) x.classList.add('right'); });
    if (!ok && !exam) b.classList.add('wrong'); else if (exam) b.style.borderColor = '#94a3b8';
    if (!ok) S.errs.push({ t: S.simT, kind: 'warn', text: `Rhythm misidentified (${RHY[b.dataset.k][0]} — was ${RHY[q.rhythm][0]}).`, sec: secKey() });
    const more = $('#qMore', m.el);
    const fbHtml = exam ? '<div class="quiz-fb">Answer recorded.</div>' : `<div class="quiz-fb">${ok ? '✅ Correct' : `⛔ It's <b>${RHY[q.rhythm][0]}</b>`} — ${RHY[q.rhythm][1]}</div>`;
    if (q.stable === undefined) {
      more.innerHTML = `${fbHtml}<div class="sh-actions"><button type="button" class="btn btn-primary" data-x="ok" data-autofocus>Continue</button></div>`;
      more.querySelector('[data-x]').addEventListener('click', () => { m.close(); refreshUI(true); });
      more.querySelector('[data-x]').focus();
      return;
    }
    more.innerHTML = `${fbHtml}<div class="quiz-q">Is the patient stable?</div>
      <div class="quiz-opts"><button type="button" class="qo" data-s="1">Stable</button><button type="button" class="qo" data-s="0">Unstable / symptomatic</button></div><div id="qMore2"></div>`;
    more.addEventListener('click', function onS(e2) {
      const sb = e2.target.closest('.qo[data-s]');
      if (!sb) return;
      more.removeEventListener('click', onS);
      const sOk = (sb.dataset.s === '1') === q.stable;
      sec.quizS = sec.quizS === null ? sOk : sec.quizS && sOk;
      if (!sOk) S.errs.push({ t: S.simT, kind: 'warn', text: `Stability misjudged — the patient was ${q.stable ? 'stable' : 'unstable'}.`, sec: secKey() });
      more.querySelectorAll('.qo[data-s]').forEach(x => { x.disabled = true; if (!exam && (x.dataset.s === '1') === q.stable) x.classList.add('right'); });
      if (!sOk && !exam) sb.classList.add('wrong'); else if (exam) sb.style.borderColor = '#94a3b8';
      const signs = [];
      const v = st.v || {};
      if (v.sbp < 90) signs.push(`hypotension (${v.sbp}/${v.dbp})`);
      if (/confus|drows|unresp|light-headed|barely|not following/i.test(st.cons || '')) signs.push('altered mental status');
      if (/chest/i.test(st.cons + SC.leadIn + SC.assessment.join(' '))) signs.push('ischemic chest discomfort');
      if (/crackles/i.test(SC.assessment.join(' '))) signs.push('acute heart failure');
      const why = q.stable ? 'No signs of hypoperfusion — treat the cause and choose drug therapy calmly.' : `Unstable signs: ${signs.length ? signs.join(', ') : 'signs of shock'}.`;
      $('#qMore2', more).innerHTML = `${exam ? '<div class="quiz-fb">Answer recorded.</div>' : `<div class="quiz-fb">${sOk ? '✅' : '⛔'} ${why}</div>`}<div class="sh-actions"><button type="button" class="btn btn-primary" data-x="ok">Continue</button></div>`;
      const c = $('#qMore2 [data-x]', more); c.addEventListener('click', () => { m.close(); refreshUI(true); }); c.focus();
    });
  });
}

function openHts() {
  const sel = new Set();
  const m = openModal(`
    <div class="sh-k">Reversible causes</div>
    <div class="sh-t">H's &amp; T's</div>
    <p class="sh-p">Select the causes your team should consider for this patient.</p>
    <div class="ht-grid">${HTS.map(([k, l, d]) => `<button type="button" class="ht" data-h="${k}">${l}<small>${d}</small></button>`).join('')}</div>
    <div class="sh-actions"><button type="button" class="btn" data-x="cancel">Cancel</button><button type="button" class="btn btn-primary" data-x="ok">Verbalize to team</button></div>`, { dismiss: false });
  m.el.addEventListener('click', e => {
    const h = e.target.closest('[data-h]');
    if (h) { const k = h.dataset.h; if (sel.has(k)) sel.delete(k); else sel.add(k); h.classList.toggle('on', sel.has(k)); return; }
    const x = e.target.closest('[data-x]');
    if (!x) return;
    m.close();
    if (x.dataset.x !== 'ok' || !sel.size) { if (x.dataset.x === 'ok') toast('info', 'Select at least one cause.'); return; }
    count('hts');
    const names = [...sel].map(k => HTS.find(h => h[0] === k)[1]);
    did(`H's & T's verbalized: ${names.join(', ')}.`);
    const d = sd(); d.hts = true;
    const exp = S.stage.hts || [];
    const hit = exp.filter(k => sel.has(k)), miss = exp.filter(k => !sel.has(k));
    if (!exp.length) judge('good', "Good — reversible causes considered.");
    else if (!miss.length) judge('good', `Spot on — ${hit.map(k => HTS.find(h => h[0] === k)[1]).join(', ')} fits this case.`);
    else if (hit.length) judge('good', `Good thinking. Also consider: ${miss.map(k => HTS.find(h => h[0] === k)[1]).join(', ')}.`);
    else judge('warn', `Reconsider — the clues point toward ${miss.map(k => HTS.find(h => h[0] === k)[1]).join(', ')}.`);
    showClue();
    refreshUI(true);
  });
}

function transport() {
  const st = S.stage;
  if (st.type !== 'rosc') { toast('info', SC.setting === 'ooh' ? 'Stabilize first — resuscitate on scene until ROSC.' : 'Stabilize first — disposition is decided after ROSC.'); return; }
  if (!st.dest) {
    count('transport'); did('Transfer to ICU / cath lab arranged.');
    judge('good', 'Disposition: transfer to the ICU / cath lab with the post-cardiac arrest bundle.');
    S.destDone = true; refreshUI(true); return;
  }
  const m = openModal(`
    <div class="sh-k">Transport decision</div>
    <div class="sh-t">${st.dest.q}</div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">${st.dest.options.map((o, i) => `<button type="button" class="qo" style="text-align:left" data-o="${i}">${o.t}</button>`).join('')}</div>
    <div id="dMore"></div>`, { see: true });
  m.el.addEventListener('click', function pick(e) {
    const b = e.target.closest('[data-o]');
    if (!b) return;
    m.el.removeEventListener('click', pick);
    const o = st.dest.options[+b.dataset.o];
    count('transport'); S.destDone = true; did(`Transport: ${o.t}.`);
    if (!o.ok) S.errs.push({ t: S.simT, kind: 'warn', text: `Destination: ${o.t} — ${o.why}`, sec: 'rosc' });
    m.el.querySelectorAll('[data-o]').forEach(x => { x.disabled = true; });
    b.classList.add(o.ok ? 'right' : 'wrong');
    $('#dMore', m.el).innerHTML = `<div class="quiz-fb">${o.ok ? '✅' : '⚠️'} ${o.why}</div><div class="sh-actions"><button type="button" class="btn btn-primary" data-x="ok">Continue</button></div>`;
    $('#dMore [data-x]', m.el).addEventListener('click', () => { m.close(); refreshUI(true); });
  });
}

function confirmEnd() {
  const m = openModal(`
    <div class="sh-k">Stop test</div>
    <div class="sh-t">End the scenario?</div>
    <p class="sh-p">${S.roscId ? 'Your team achieved ROSC. Ending now takes you to the debrief.' : 'ROSC has not been achieved yet — ending now will be scored as incomplete.'}</p>
    <div class="sh-actions"><button type="button" class="btn" data-x="no">Keep going</button><button type="button" class="btn btn-primary" data-x="yes" data-autofocus>${ico('flag')} End &amp; debrief</button></div>`, { dismiss: true });
  m.el.addEventListener('click', e => {
    const x = e.target.closest('[data-x]');
    if (!x) return;
    m.close();
    if (x.dataset.x === 'yes') endSim();
  });
}

/* ═══════════════════════ DEBRIEF ═══════════════════════ */
function checklist() {
  const types = SC.stages.slice(0, S.idx + 1).map(s => s.type);
  const all = SC.stages.map(s => s.type);
  const has = t => types.includes(t);
  const d = k => S.sd[k] || sd(k);
  const ccf = S.arrestT > 5 ? S.cprT / S.arrestT : 1;
  const maxP = S.pauses.length ? Math.max(...S.pauses) : 0;
  const sections = [];
  sections.push({
    h: 'Team Leader', items: [
      { t: 'Assigns team member roles', ok: S.roles },
      { t: 'Ensures high-quality CPR at all times', ok: !S.everArrest || ccf >= 0.8, why: S.everArrest ? `Chest compression fraction ${Math.round(ccf * 100)}% (target > 80%) · longest pause ${Math.round(maxP)} s` : 'No arrest phase reached.' },
      { t: 'Ensures that team members communicate well', ok: S.roles && S.errs.filter(e => e.kind === 'bad').length <= 2, why: 'Roles assigned + few critical errors.' }
    ]
  });
  const snapOf = k => d(k).snap || { monitor: S.monitor, iv: S.iv, o2ok: S.o2 || true };
  if (all.includes('brady') && has('brady')) {
    const st = SC.stages.find(s => s.type === 'brady'), b = d('brady'), sn = snapOf('brady'), a = b.acts;
    sections.push({
      h: 'Bradycardia Management', items: [
        { t: 'Starts oxygen if needed, places monitor, starts IV', ok: sn.monitor && sn.iv && sn.o2ok },
        { t: 'Places monitor leads in proper position', ok: sn.monitor },
        { t: st.stable ? 'Recognizes stable bradycardia' : 'Recognizes symptomatic bradycardia', ok: b.quizR === true && b.quizS !== false },
        st.stable ? { t: 'Recognizes that no atropine is needed (stable BP)', ok: !a.atropine } : { t: 'Administers correct dose of atropine', ok: !!a.atropine || (st.atropineOptional && !!(a.paceOn || a.dopamine || a.epiInf)) },
        st.stable ? { t: 'Prepares for definitive therapy (aspirin, cath lab)', ok: !!(a.cathlab || a.aspirin) } : { t: 'Prepares for second-line treatment (pacing / dopamine / epinephrine)', ok: !!(a.paceOn || a.dopamine || a.epiInf) }
      ]
    });
  }
  if (has('tachyU')) {
    const b = d('tachyU'), sn = snapOf('tachyU');
    sections.push({
      h: 'Tachycardia Management', items: [
        { t: 'Starts oxygen if needed, places monitor, starts IV', ok: sn.monitor && sn.iv && sn.o2ok },
        { t: 'Places monitor leads in proper position', ok: sn.monitor },
        { t: 'Recognizes unstable tachycardia', ok: b.quizR === true },
        { t: 'Recognizes symptoms due to tachycardia', ok: b.quizS === true },
        { t: 'Performs immediate synchronized cardioversion', ok: !!b.acts.sync && !S.errs.some(e => /Unsynchronized shock on a perfusing/.test(e.text)) }
      ]
    });
  }
  if (has('tachyS')) {
    const b = d('tachyS'), sn = snapOf('tachyS'), a = b.acts;
    sections.push({
      h: 'Tachycardia Management', items: [
        { t: 'Starts oxygen if needed, places monitor, starts IV', ok: sn.monitor && sn.iv && sn.o2ok },
        { t: 'Places monitor leads in proper position', ok: sn.monitor },
        { t: 'Recognizes tachycardia (specific diagnosis)', ok: b.quizR === true },
        { t: 'Recognizes no symptoms due to tachycardia', ok: b.quizS === true },
        { t: 'Considers appropriate initial drug therapy', ok: !!(a.vagal || a.adenosine || a.diltiazem) }
      ]
    });
  }
  if (has('resp')) {
    const b = d('resp'), st = SC.stages.find(s => s.type === 'resp');
    const items = [{ t: 'Recognizes respiratory failure and supports ventilation (BVM / advanced airway)', ok: b.vent }];
    if (st.fx && st.fx.naloxone) items.push({ t: 'Gives reversal agents for sedation (naloxone / flumazenil)', ok: !!(b.acts.naloxone || b.acts.flumazenil) });
    sections.push({ h: 'Respiratory Management', items });
  }
  if (has('vf') || has('pvt')) {
    const b = d('shock');
    const name = has('vf') && has('pvt') ? 'VF / Pulseless VT' : has('vf') ? 'VF' : 'Pulseless VT';
    sections.push({
      h: `${name} Management`, items: [
        { t: `Recognizes ${name}`, ok: b.quizR === true },
        { t: 'Clears before analyze and shock', ok: b.clearErr === 0 && b.shocks > 0 },
        { t: 'Immediately resumes CPR after shocks', ok: b.resume.length > 0 && b.resume.every(x => x <= 10), why: b.resume.length ? `Shock → compressions: ${b.resume.map(x => `${Math.round(x)} s`).join(', ')}` : 'No shock followed by CPR.' },
        { t: 'Appropriate airway management', ok: b.vent },
        { t: 'Appropriate cycles of drug–rhythm check/shock–CPR', ok: b.early === 0 && b.overdue === 0 && b.checks > 0, why: `${b.checks} rhythm checks · ${b.early} early interruptions · ${b.overdue} overdue` },
        { t: 'Administers appropriate drug(s) and doses', ok: b.drugBad === 0 && (b.drugGood > 0 || b.shocks < 2) }
      ]
    });
  }
  if (has('pea') || has('asys')) {
    const b = d('nonshock');
    const name = has('pea') && has('asys') ? 'Asystole and PEA' : has('pea') ? 'PEA' : 'Asystole';
    sections.push({
      h: `${name} Management`, items: [
        { t: `Recognizes ${name}`, ok: b.quizR === true },
        { t: "Verbalizes potential reversible causes (H's and T's)", ok: b.hts },
        { t: 'Administers appropriate drug(s) and doses', ok: b.drugGood > 0 && b.drugBad === 0 && b.badShock === 0 },
        { t: 'Immediately resumes CPR after rhythm checks', ok: b.pauses.length > 0 && b.pauses.every(x => x <= 10.5), why: b.pauses.length ? `Pauses: ${b.pauses.map(x => `${Math.round(x)} s`).join(', ')}` : 'No CPR during this phase.' }
      ]
    });
  }
  if (all.includes('rosc')) {
    const r = d('rosc');
    const parts = [['BP', r.bp], ['12-lead', r.ecg12], ['SpO₂', S.monitor], ['ETT', S.airway], ['Capnography', S.capno], ['Labs', r.labs]];
    sections.push({
      h: 'Post–Cardiac Arrest Care', items: [
        { t: 'Identifies ROSC', ok: S.roscId },
        { t: 'BP and 12-lead ECG performed, O₂ saturation monitored, intubation and waveform capnography, laboratory tests', ok: S.roscId && parts.every(p => p[1]), why: parts.map(([l, v]) => `${v ? '✓' : '✗'} ${l}`).join(' · ') },
        { t: 'Considers targeted temperature management', ok: !!r.ttm }
      ]
    });
  }
  return sections;
}

function endSim() {
  if (!S || S.over) return;
  snapSection();
  S.over = true; S.cpr = false; Synth.cpr = false;
  const secs = checklist();
  const items = secs.flatMap(s => s.items);
  const okN = items.filter(i => i.ok).length;
  const score = Math.round(okN / items.length * 100);
  const pass = S.roscId && score >= 85 && !S.errs.some(e => /non-shockable|has a pulse — defibrillation|chest compressions are not indicated/i.test(e.text));
  const best = bestMap(), prev = best[SC.id];
  if (!prev || score > prev.score || (pass && !prev.pass)) { best[SC.id] = { score, pass, date: Date.now() }; store.set('megacode.best', best); }
  const ccf = S.arrestT > 5 ? Math.round(S.cprT / S.arrestT * 100) + '%' : '—';
  const maxP = S.pauses.length ? Math.round(Math.max(...S.pauses)) + ' s' : '—';
  const lag = S.resumeLags.length ? Math.round(S.resumeLags.reduce((a, b) => a + b, 0) / S.resumeLags.length) + ' s' : '—';
  const stat = (l, v) => `<div class="vit"><div class="vl">${l}</div><div class="vv">${v}</div></div>`;
  const errs = S.errs.slice(0, 40);
  const html = `
    <div class="sh-k">Debrief · Megacode ${SC.id}</div>
    <div class="sh-t">${SC.title}</div>
    <div class="res-banner ${pass ? 'pass' : 'nr'}">
      <div class="res-score">${score}%</div>
      <div><div class="res-l">${pass ? 'PASS' : 'NR — needs remediation'}</div><div class="res-s">${okN}/${items.length} critical performance steps · ${S.roscId ? 'ROSC achieved' : 'ROSC not achieved'}</div></div>
    </div>
    <div class="stat-row">${stat('Total time', fmt(S.simT))}${stat('Arrest time', fmt(S.arrestT))}${stat('CPR fraction', ccf)}${stat('Shocks', S.shocks)}${stat('Epinephrine', S.epi)}${stat('Longest pause', maxP)}${stat('Shock → CPR', lag)}${stat('Flags', S.errs.length)}</div>
    ${secs.map(s => `<div class="cl-sec"><div class="cl-h"><span>${s.h}</span><span>${s.items.filter(i => i.ok).length}/${s.items.length}</span></div>${s.items.map(i => `<div class="cl-i"><span class="cl-m ${i.ok ? 'y' : 'n'}">${i.ok ? '✓' : '✗'}</span><span>${i.t}${i.why ? `<span class="cl-why">${i.why}</span>` : ''}</span></div>`).join('')}</div>`).join('')}
    ${errs.length ? `<div class="grp-t" style="margin-top:14px">What to work on</div><div class="err-list">${errs.map(e => `<div class="le ${e.kind}"><span class="lt">${fmt(e.t)}</span><span>${e.text}</span></div>`).join('')}</div>` : ''}
    <div class="teach"><h4>Teaching points</h4><ul>${SC.teach.map(t => `<li>${t}</li>`).join('')}</ul></div>
    <details class="tl"><summary>Full code record (${S.log.length} entries)</summary><div class="err-list">${S.log.map(e => `<div class="le ${e.kind}"><span class="lt">${fmt(e.t)}</span><span>${e.text}</span></div>`).join('')}</div></details>
    <div class="sh-actions" style="margin-top:14px"><button type="button" class="btn" data-x="list">All scenarios</button><button type="button" class="btn btn-primary" data-x="retry" data-autofocus>${ico('rotate-ccw')} Run it again</button></div>`;
  if (pass) Snd.win();
  const m = openModal(html, { wide: true });
  m.el.addEventListener('click', e => {
    const x = e.target.closest('[data-x]');
    if (!x) return;
    m.close();
    if (x.dataset.x === 'retry') openBriefing(SC); else showPicker();
  });
}

/* ═══════════════════════ VIEW SWITCHING ═══════════════════════ */
let view = 'pick';
function startSim(sc, mode) {
  Snd.init();
  newSim(sc, mode);
  view = 'sim';
  $('#viewPick').hidden = true; $('#viewSim').hidden = false; $('#pauseBtn').hidden = false;
  $('#hdrTitle').textContent = `Megacode ${sc.id} · ${sc.title}`;
  $('#hdrSub').textContent = `${sc.place} · ${mode === 'train' ? 'Training mode' : 'Megacode test'}`;
  $('#monPt').textContent = `ADULT · ${sc.sex} ${sc.age}y · ${sc.place.toUpperCase()}`;
  $('#log').innerHTML = '';
  $('#toasts').innerHTML = '';
  Synth.beats = []; Synth.spikes = []; Synth.pleth = []; Synth.marks = []; Synth.cpr = false; Synth.shockT = -99;
  Synth.setPace({ on: false, capture: false, rate: 70 }, Mon.t);
  buildDock();
  window.scrollTo(0, 0);
  Mon.W = 0; Mon.resize();
  goStage(0, null);
  pushLog('scene', sc.leadIn);
  if (sc.monitorOn) pushLog('find', 'The bedside monitor is already connected.');
  if (sc.ivStart) pushLog('find', 'A peripheral IV is in place.');
  if (sc.o2Start) pushLog('find', 'Supplemental oxygen is already running.');
  renderTeam();
  refreshUI(true);
}
function showPicker() {
  view = 'pick';
  S = null; SC = null;
  Synth.cpr = false;
  $('#viewSim').hidden = true; $('#viewPick').hidden = false; $('#pauseBtn').hidden = true;
  $('#hdrTitle').textContent = 'ACLS Megacode';
  $('#hdrSub').textContent = 'Live monitor simulator · 12 AHA scenarios';
  renderPicker();
  window.scrollTo(0, 0);
}
function setPaused(p) {
  if (!S) return;
  S.paused = p;
  $('#pauseBtn').innerHTML = p ? `${ico('play')}<span class="lbl">Resume</span>` : `${ico('pause')}<span class="lbl">Pause</span>`;
  $('#pauseBtn').classList.toggle('on', p);
  let ov = $('#pauseOv');
  if (p && !ov) { ov = document.createElement('div'); ov.id = 'pauseOv'; ov.className = 'mon-overlay'; ov.innerHTML = '<div class="ov-t">SIMULATION PAUSED</div>'; $('#monScreen').appendChild(ov); }
  if (!p && ov) ov.remove();
}

/* ═══════════════════════ EVENTS ═══════════════════════ */
function bind() {
  $('#filters').addEventListener('click', e => { const c = e.target.closest('[data-f]'); if (c) { filter = c.dataset.f; renderPicker(); } });
  $('#scGrid').addEventListener('click', e => { const c = e.target.closest('[data-id]'); if (c) { Snd.init(); openBriefing(SCN.find(s => s.id === +c.dataset.id)); } });
  $('#randomBtn').addEventListener('click', () => { Snd.init(); openBriefing(SCN[Math.floor(Math.random() * SCN.length)]); });
  $('#soundBtn').addEventListener('click', () => {
    Snd.on = !Snd.on; store.set('megacode.sound', Snd.on); Snd.init();
    $('#soundBtn').classList.toggle('on', Snd.on); $('#soundBtn').setAttribute('aria-pressed', String(Snd.on)); $('#soundIco').textContent = Snd.on ? '🔊' : '🔇';
  });
  $('#soundBtn').classList.toggle('on', Snd.on); $('#soundBtn').setAttribute('aria-pressed', String(Snd.on)); $('#soundIco').textContent = Snd.on ? '🔊' : '🔇';
  $('#pauseBtn').addEventListener('click', () => setPaused(!S.paused));
  $('#backBtn').addEventListener('click', e => {
    if (view !== 'sim') return;
    e.preventDefault();
    if (S && S.over) { showPicker(); return; }
    const m = openModal(`<div class="sh-k">Leave scenario</div><div class="sh-t">Abandon this megacode?</div><p class="sh-p">Your progress in this run will be lost.</p>
      <div class="sh-actions"><button type="button" class="btn" data-x="no">Stay</button><button type="button" class="btn btn-primary" data-x="yes">Leave</button></div>`, { dismiss: true });
    m.el.addEventListener('click', ev => { const x = ev.target.closest('[data-x]'); if (!x) return; m.close(); if (x.dataset.x === 'yes') showPicker(); });
  });
  $('#qCpr').addEventListener('click', toggleCPR);
  $('#qCharge').addEventListener('click', charge);
  $('#qShock').addEventListener('click', shock);
  $('#qPulse').addEventListener('click', () => doAction('pulse'));
  $('#qSkip').addEventListener('click', skipAhead);
  $('#endBtn').addEventListener('click', () => S && !S.over && confirmEnd());
  $('#tabs').addEventListener('click', e => {
    const tb = e.target.closest('[data-tab]');
    if (!tb) return;
    UI.tab = tb.dataset.tab; store.set('megacode.tab', UI.tab);
    document.querySelectorAll('#tabs .tab').forEach(x => { x.classList.toggle('on', x === tb); x.setAttribute('aria-selected', String(x === tb)); });
    document.querySelectorAll('#panels .panel').forEach(p => p.classList.toggle('on', p.dataset.panel === UI.tab));
  });
  $('#panels').addEventListener('click', e => {
    if (!S || S.over) return;
    const a = e.target.closest('[data-act]');
    if (a && !a.disabled) {
      const k = a.dataset.act;
      if (k === 'cpr') toggleCPR(); else if (k === 'skip') skipAhead(); else doAction(k);
      return;
    }
    const j = e.target.closest('[data-j]'); if (j) { setEnergy(+j.dataset.j); return; }
    const ps = e.target.closest('[data-ps]'); if (ps) { const [f, dlt] = ps.dataset.ps.split(':'); pacerStep(f, +dlt); return; }
    const id = (e.target.closest('button') || {}).id;
    if (id === 'dSync') toggleSync(); else if (id === 'dCharge') charge(); else if (id === 'dShock') shock(); else if (id === 'dDisarm') disarm(); else if (id === 'pToggle') togglePacer();
  });
  document.addEventListener('keydown', e => {
    if (view !== 'sim' || !S || S.over || modalOpen() || e.target.matches('input,textarea,select')) return;
    if (e.key === ' ' && !e.target.closest('button')) { e.preventDefault(); toggleCPR(); }
    else if (e.key === 'c' || e.key === 'C') charge();
    else if (e.key === 's' || e.key === 'S') shock();
    else if (e.key === 'p' || e.key === 'P') doAction('pulse');
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && S && !S.over && !S.paused) setPaused(true); });
}

Synth.onQRS = () => {
  if (!S || !S.monitor || Synth.cpr) return;
  const h = $('#heart'); h.classList.add('on'); setTimeout(() => h.classList.remove('on'), 140);
  Snd.beep(!isArrest() && !plethLost() ? S.v.spo2 : 0);
};

/* ═══════════════════════ LOOP ═══════════════════════ */
let lastTs = null;
function loop(ts) {
  requestAnimationFrame(loop);
  if (lastTs == null) lastTs = ts;
  const dt = Math.min(0.1, (ts - lastTs) / 1000);
  lastTs = ts;
  if (view !== 'sim' || !S || !S.stage) return;
  if (!S.paused && !S.over && !modalOpen()) tick(dt);
  const D = S.defib;
  if (D.charging) {
    const p = (performance.now() - D.chargeT0) / 2400;
    $('#chargeBar').style.width = `${Math.min(100, p * 100)}%`;
    if (p >= 1) { D.charging = false; D.charged = true; Snd.ready(); did(`Charged — ${D.energy} J.`); refreshUI(true); }
  } else $('#chargeBar').style.width = D.charged ? '100%' : '0';
  if (D.charged && !S.paused && Math.floor(ts / 900) !== UI.lastReady) { UI.lastReady = Math.floor(ts / 900); Snd.ready(); }
  if (!S.over && !S.paused && !modalOpen() && S.stage.quiz && !S.quizDone[S.idx] && S.monitor && !S.cpr && S.stage.type !== 'rosc'
    && !(S.stage.type === 'pea' && !S.pulseChecked) && S.simT - S.stageT0 > 1.6) openQuiz();
  Mon.frame(dt);
  refreshUI(false);
}

function init() {
  Mon.init();
  renderPicker();
  bind();
  requestAnimationFrame(loop);
  const q = new URLSearchParams(location.search).get('s');
  if (q && SCN.find(s => s.id === +q)) openBriefing(SCN.find(s => s.id === +q));
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
