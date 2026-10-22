// Records the genuine SmartCare Megacode engine (Scenario 7 · Crescendo Angina, Quick Code mode)
// frame-by-frame on a virtual clock. Output: capture/<layout>/<segment>/fNNNNN.jpg + manifest.json
//   node scripts/record.js land   (1600×900 @2x → 3200×1800 frames)
//   node scripts/record.js vert   (450×800 @3x → 1350×2400 frames, the app's mobile layout)
const fs = require('fs');
const path = require('path');
const { open } = require('./driver');

const LAYOUT = process.argv[2] || 'land';
const VIEW = LAYOUT === 'vert' ? { width: 450, height: 800, dsf: 3 } : { width: 1600, height: 900, dsf: 2 };
// ONLY=<segment> replays the identical run but screenshots just that segment (into capture/<layout>_only)
const ONLY = process.env.ONLY || '';
const OUT = path.join(__dirname, '..', 'capture', LAYOUT + (ONLY ? '_only' : ''));
const FPS = 30;

// Correct Team-Leader call for every question this scenario asks (taken from a probe run of the engine).
const ANSWERS = [
  ['Wide-complex tachycardia with a pulse', 'Synchronized cardioversion'],
  ['Set up the cardioversion', 'SYNC ON · 100 J'],
  ['the patient is pulseless', 'Defibrillate 200 J — unsynchronized'],
  ['Shock delivered', 'Resume CPR immediately'],
  ['ventilate during CPR', 'Bag-mask 30:2'],
  ['cycle is nearly up', 'switch compressors, pause'],
  ['Rhythm check: still', 'Defibrillate 200 J — unsynchronized'],
  ['Drug now?', 'Epinephrine 1 mg IV/IO'],
  ['Organized rhythm on the monitor', 'Check a carotid pulse'],
  ['PEA — no pulse', 'Resume CPR now'],
  ['reversible cause', 'Thrombosis, coronary'],
  ['Treat thrombosis', 'Plan emergent PCI'],
  ['ROSC! First priorities', 'Check BP, titrate'],
  ['post-ROSC bundle', 'Advanced airway + capnography'],
  ['does not follow commands', 'Targeted temperature management'],
  ['Treatment is under way', 'Reassess'],
  ['ETCO₂ suddenly jumps', 'Check a carotid pulse'],
  ['after ROSC. Next?', 'Fluid bolus + vasopressor'],
  ['12-lead shows ST elevation', 'Emergent coronary angiography'],
];
const QUIZ = ['Monomorphic VT', 'Ventricular fibrillation', 'PEA', 'Unstable / symptomatic'];

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const { browser, page } = await open(VIEW);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Animation.enable');
  const man = { layout: LAYOUT, fps: FPS, view: VIEW, segments: [] };
  let seg = null, n = 0, vtMs = 0;

  const now = () => page.evaluate(() => performance.now() / 1000);
  async function advance(ms) { vtMs += ms; await page.clock.runFor(ms); }
  async function frame() {
    // keep the fake clock on an exact 30 fps grid
    const target = Math.round((n + 1) * 1000 / FPS) - Math.round(n * 1000 / FPS);
    await advance(target);
    const t0 = Date.now();
    if (seg) {
      const f = path.join(seg.dir, `f${String(seg.frames).padStart(5, '0')}.jpg`);
      await page.screenshot({ path: f, type: 'jpeg', quality: 93 });
      seg.frames++;
      // CSS animations run on wall-clock time; scale them so they advance ~1 video frame per capture
      const real = Date.now() - t0;
      await cdp.send('Animation.setPlaybackRate', { playbackRate: Math.min(1, 33 / Math.max(33, real)) });
    }
    n++;
  }
  async function hold(sec) { for (let i = 0; i < Math.round(sec * FPS); i++) await frame(); }
  async function begin(name) {
    if (ONLY && name !== ONLY) { seg = null; return; }
    seg = { name, dir: path.join(OUT, name), frames: 0, t0: await now(), clicks: [], marks: [] };
    fs.mkdirSync(seg.dir, { recursive: true });
    man.segments.push(seg);
    await cdp.send('Animation.setPlaybackRate', { playbackRate: 0.15 });
  }
  async function end() { if (!seg) return; seg.t1 = await now(); delete seg.dir; seg = null; await cdp.send('Animation.setPlaybackRate', { playbackRate: 1 }); }
  const mark = label => seg && seg.marks.push({ frame: seg.frames, label });
  async function click(loc, label) {
    loc = loc.first();
    await loc.scrollIntoViewIfNeeded();
    const b = await loc.boundingBox();
    if (seg) seg.clicks.push({ frame: seg.frames, x: (b.x + b.width / 2) / VIEW.width, y: (b.y + b.height / 2) / VIEW.height, w: b.width / VIEW.width, h: b.height / VIEW.height, label });
    await loc.click();
  }
  // Genuine user scroll, eased over `sec` (window, or the open modal sheet when sel is given).
  async function scrollTo(y, sec = 0.5, sel = null) {
    const get = () => page.evaluate(s => { const el = s ? [...document.querySelectorAll(s)].find(e => e.scrollHeight > e.clientHeight + 4) : null; return el ? el.scrollTop : scrollY; }, sel);
    const y0 = await get();
    if (Math.abs(y0 - y) < 2) return;
    const N = Math.max(1, Math.round(sec * FPS));
    for (let i = 1; i <= N; i++) {
      const p = i / N, e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      await page.evaluate(([s, v]) => { const el = s ? [...document.querySelectorAll(s)].find(e => e.scrollHeight > e.clientHeight + 4) : null; if (el) el.scrollTop = v; else scrollTo(0, v); }, [sel, y0 + (y - y0) * e]);
      await frame();
    }
  }
  const showMonitor = () => scrollTo(0, 0.5);
  const lo = txt => page.locator('#liteOpts .lo:not([disabled])', { hasText: txt });
  const qo = txt => page.locator('.qo:not([disabled])', { hasText: txt });
  const liteQ = () => page.locator('#liteQ').innerText().catch(() => '');

  async function waitFor(fn, maxSec = 20, rec = true) {
    for (let i = 0; i < maxSec * FPS; i++) { if (await fn()) return true; if (rec) await frame(); else await advance(33); }
    throw new Error('timeout waiting');
  }
  // Plays the engine forward with correct calls until stop() is true (frames not recorded unless a segment is open).
  async function auto(stop, maxSteps = 400) {
    for (let i = 0; i < maxSteps; i++) {
      if (await stop()) return;
      await advance(100);
      if (await page.locator('.qo:not([disabled])').count()) {
        for (const q of QUIZ) if (await qo(q).count()) { await qo(q).first().click(); break; }
        await advance(100); continue;
      }
      if (await page.locator('[data-x="ok"]').count()) { await page.locator('[data-x="ok"]').last().click(); continue; }
      if (await page.locator('#liteOpts .lo:not([disabled])').count()) {
        const q = await liteQ();
        const a = ANSWERS.find(([k]) => q.includes(k));
        if (!a) throw new Error('No answer for: ' + q + ' | ' + (await page.locator('#liteOpts .lo').allInnerTexts()).join(' / '));
        await lo(a[1]).first().click(); continue;
      }
      if (await page.locator('#liteNext:not([disabled])').count()) { await page.click('#liteNext'); continue; }
    }
    throw new Error('auto: step limit');
  }
  const has = sel => async () => (await page.locator(sel).count()) > 0;
  const qHas = s => async () => (await page.locator('#liteOpts .lo:not([disabled])').count()) > 0 && (await liteQ()).includes(s);

  // ── 1 · Scenario picker → briefing → start ──────────────────────────
  await begin('picker');
  await hold(1.0);
  const card = page.locator('#scGrid [data-id="7"]');
  const y0 = await page.evaluate(() => scrollY);
  const yT = await card.evaluate(el => el.getBoundingClientRect().top + scrollY - innerHeight * 0.32);
  const N = Math.round(1.4 * FPS);
  for (let i = 1; i <= N; i++) { const p = i / N, e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; await page.evaluate(y => scrollTo(0, y), y0 + (yT - y0) * e); await frame(); }
  await hold(0.6);
  await click(card, 'scenario');
  await hold(2.6);
  await click(page.locator('[data-mode="quick"]'), 'mode');
  await hold(0.5);
  await click(page.locator('[data-x="go"]'), 'start');
  mark('simStart');
  await hold(0.2);
  await end();

  // ── 2 · Unstable VT: rhythm + stability ─────────────────────────────
  await begin('vt');
  await waitFor(has('.qo:not([disabled])'));
  mark('quiz'); await hold(1.0);
  await click(qo('Monomorphic VT'), 'answer'); await hold(1.4);
  await click(qo('Unstable / symptomatic'), 'answer'); await hold(1.4);
  await click(page.locator('[data-x="ok"]').last(), 'continue'); await hold(0.3);
  await waitFor(qHas('Wide-complex'));
  mark('decision1'); await hold(1.3);
  await click(lo('Synchronized cardioversion'), 'answer'); await hold(1.6);
  await click(page.locator('#liteNext'), 'continue');
  await waitFor(qHas('Set up the cardioversion'));
  mark('decision2'); await hold(1.3);
  await click(lo('SYNC ON · 100 J'), 'answer');
  mark('charging');
  await showMonitor();
  // charge → synchronized shock → the rhythm degenerates to VF
  await waitFor(async () => (await page.locator('#monScreen.flash').count()) > 0, 12);
  mark('syncShock');
  await waitFor(has('#liteNext:not([disabled])'), 12);
  await hold(1.6);
  await click(page.locator('#liteNext'), 'continue');
  await showMonitor();
  await waitFor(has('.qo:not([disabled])'), 15);
  mark('vfQuiz'); await hold(0.9);
  await end();

  // ── 3 · VF: identify, defibrillate, resume CPR ──────────────────────
  await begin('vf');
  await click(qo('Ventricular fibrillation'), 'answer'); await hold(1.3);
  await click(page.locator('[data-x="ok"]').last(), 'continue');
  await waitFor(qHas('pulseless'));
  mark('vfDecision'); await hold(1.2);
  await click(lo('Defibrillate 200 J — unsynchronized'), 'answer');
  mark('defibCharging');
  await showMonitor();
  await waitFor(has('#liteNext:not([disabled])'), 12);
  mark('defibShocked'); await hold(1.0);
  await click(page.locator('#liteNext'), 'continue');
  await waitFor(qHas('Shock delivered'), 12);
  mark('afterShock'); await hold(1.0);
  await click(lo('Resume CPR immediately'), 'answer'); await hold(1.2);
  await click(page.locator('#liteNext'), 'continue');
  await showMonitor();
  mark('cpr'); await hold(2.6);
  await end();

  // ── fast-forward: ventilation, 2nd shock, epinephrine → rhythm check shows an organized rhythm
  await auto(qHas('Organized rhythm on the monitor'));

  // ── 4 · PEA: pulse check, rhythm, and a learning moment ─────────────
  await begin('pea');
  await hold(1.0);
  await click(lo('Check a carotid pulse'), 'answer'); await hold(1.4);
  await click(page.locator('#liteNext'), 'continue');
  await waitFor(has('.qo:not([disabled])'));
  await hold(0.8);
  await click(qo('PEA'), 'answer'); await hold(1.2);
  await click(page.locator('[data-x="ok"]').last(), 'continue');
  await waitFor(qHas('PEA — no pulse'));
  mark('peaDecision'); await hold(1.2);
  await click(lo('Atropine 1 mg IV'), 'wrong'); mark('wrong'); await hold(2.6);
  await click(lo('Resume CPR now'), 'answer'); mark('fixed'); await hold(1.8);
  await end();

  // ── fast-forward: reversible cause, cath lab, epinephrine → next organized rhythm
  await page.click('#liteNext');
  await auto(qHas('Organized rhythm on the monitor'));

  // ── 5 · ROSC ────────────────────────────────────────────────────────
  await begin('rosc');
  await hold(0.8);
  await click(lo('Check a carotid pulse'), 'answer'); mark('pulse');
  await showMonitor(); await hold(2.3);
  await end();

  // ── fast-forward: post-ROSC care → wrap-up
  await page.click('#liteNext');
  await auto(has('#liteEnd'));

  // ── 6 · Debrief ─────────────────────────────────────────────────────
  await begin('debrief');
  await hold(0.6);
  await click(page.locator('#liteEnd'), 'finish');
  await advance(50);
  await scrollTo(0, 0.04, '.modal, .sheet');
  await hold(3.6);
  await end();

  man.sound = await page.evaluate(() => window.__snd);
  man.result = await page.locator('.res-banner').innerText().catch(() => '');
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(man, null, 1));
  console.log('done', man.segments.map(s => `${s.name}:${s.frames}`).join(' '), '|', man.result.replace(/\n/g, ' '));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
