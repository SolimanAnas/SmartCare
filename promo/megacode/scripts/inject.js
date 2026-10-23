// Injected before the Megacode page loads (capture only — the app itself is untouched).
// 1) Seeded Math.random so option order is reproducible between runs.
// 2) Taps Web Audio start/stop calls so the app's own sounds can be re-rendered offline
//    in sync with the captured frames (headless capture has no audio output).
(() => {
  let s = 0x5eed1e5 >>> 0;
  Math.random = () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  window.__snd = [];
  const tap = (proto, kind) => {
    const st = proto.start, sp = proto.stop;
    proto.start = function (when = 0, ...r) {
      const c = this.context, off = Math.max(0, when - c.currentTime);
      this.__ev = { kind, t: performance.now() / 1000 + off, type: this.type, f: this.frequency ? this.frequency.value : 0, dur: null };
      window.__snd.push(this.__ev);
      return st.call(this, when, ...r);
    };
    proto.stop = function (when = 0, ...r) {
      if (this.__ev) this.__ev.dur = Math.max(0, when - this.context.currentTime) - (this.__ev.t - performance.now() / 1000) ;
      return sp.call(this, when, ...r);
    };
  };
  tap(OscillatorNode.prototype, 'osc');
  tap(AudioBufferSourceNode.prototype, 'noise');
})();
