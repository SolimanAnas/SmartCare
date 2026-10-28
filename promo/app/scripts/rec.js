// Frame-accurate recorder for genuine SmartCare screens (shared by every scene in record.js).
// Each scene opens the real page in a fresh phone-sized context on a frozen virtual clock; the page
// only advances when we step it by exactly one video frame, so animations play at true speed.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE = process.env.BASE || 'http://localhost:8765/';
const VIEW = { width: 412, height: 800, dsf: 2.5 };
const FPS = 30;

// Seeded PRNG so question order and picks repeat on every run (same as the Play screenshots).
const SEED = `(() => { let a = 0x5eedc0de; Math.random = function () { a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; })();`;

async function launch() {
  return chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
}

async function scene(browser, outDir, name, url, { init = [], theme = 'dark', storage = {} } = {}) {
  const ctx = await browser.newContext({
    viewport: { width: VIEW.width, height: VIEW.height }, deviceScaleFactor: VIEW.dsf, isMobile: true, hasTouch: true,
    serviceWorkers: 'block', colorScheme: theme, locale: 'en-US', timezoneId: 'UTC',
  });
  await ctx.addInitScript(SEED);
  await ctx.addInitScript(s => { try { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); } catch (e) {} }, storage);
  for (const s of init) await ctx.addInitScript(s);
  // Where the tap actually landed (the element can still be animating when we measure it).
  await ctx.addInitScript(() => addEventListener('pointerdown', e => { window.__tap = [e.clientX, e.clientY]; }, true));
  const page = await ctx.newPage();
  page.on('pageerror', e => console.error(`  [${name}] PAGEERR`, e.message));
  await page.clock.install({ time: new Date('2026-10-23T09:41:00Z') });
  await page.clock.pauseAt(new Date('2026-10-23T09:41:01Z'));
  await page.goto(BASE + url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Animation.enable');

  const dir = path.join(outDir, name);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const seg = { name, frames: 0, clicks: [], marks: [] };
  let n = 0, rec = false;

  const r = {
    page, seg,
    async advance(ms) { await page.clock.runFor(ms); },
    // Let the page settle without recording (real time for network, virtual time for timers).
    async settle(ms = 1000) { for (let i = 0; i < ms / 100; i++) { await page.clock.runFor(100); await page.waitForTimeout(15); } },
    // Advance (unrecorded) until fn() is truthy in the page.
    async until(fn, maxMs = 20000, arg) {
      for (let t = 0; t < maxMs; t += 100) { if (await page.evaluate(fn, arg).catch(() => false)) return; await page.clock.runFor(100); await page.waitForTimeout(10); }
      throw new Error(`${name}: timed out waiting for ${fn}`);
    },
    start() { rec = true; },
    async frame() {
      const step = Math.round((n + 1) * 1000 / FPS) - Math.round(n * 1000 / FPS);
      await page.clock.runFor(step);
      n++;
      if (!rec) return;
      const t0 = Date.now();
      await page.screenshot({ path: path.join(dir, `f${String(seg.frames).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 90 });
      seg.frames++;
      // CSS animations run on wall-clock time: slow them so they move ~1 video frame per capture.
      await cdp.send('Animation.setPlaybackRate', { playbackRate: Math.min(1, 33 / Math.max(33, Date.now() - t0)) });
    },
    async hold(sec) { for (let i = 0; i < Math.round(sec * FPS); i++) await r.frame(); },
    mark(label) { seg.marks.push({ frame: seg.frames, label }); },
    async tap(loc, label = '') {
      loc = typeof loc === 'string' ? page.locator(loc) : loc;
      loc = loc.first();
      await loc.scrollIntoViewIfNeeded();
      await page.evaluate(() => { window.__tap = null; });
      await loc.click();
      const [x, y] = await page.evaluate(() => window.__tap || [-1, -1]);
      if (x >= 0) seg.clicks.push({ frame: seg.frames, x: x / VIEW.width, y: y / VIEW.height, label });
    },
    // Eased scroll of the window (or the first scrollable element matching sel) to y over `sec`.
    async scroll(y, sec = 0.8, sel = null) {
      const get = () => page.evaluate(s => { const el = s && document.querySelector(s); return el ? el.scrollTop : scrollY; }, sel);
      const y0 = await get();
      const N = Math.max(1, Math.round(sec * FPS));
      for (let i = 1; i <= N; i++) {
        const p = i / N, e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        await page.evaluate(([s, v]) => { const el = s && document.querySelector(s); if (el) el.scrollTop = v; else window.scrollTo(0, v); }, [sel, y0 + (y - y0) * e]);
        await r.frame();
      }
    },
    async scrollToEl(loc, offset = 120, sec = 0.8) {
      loc = typeof loc === 'string' ? page.locator(loc).first() : loc.first();
      const y = await loc.evaluate((e, o) => e.getBoundingClientRect().top + scrollY - o, offset);
      await r.scroll(Math.max(0, y), sec);
    },
    async done() {
      fs.writeFileSync(path.join(dir, 'seg.json'), JSON.stringify(seg, null, 1));
      await ctx.close();
      console.log(`  ${name}: ${seg.frames} frames (${(seg.frames / FPS).toFixed(1)} s)`);
    },
  };
  return r;
}

module.exports = { launch, scene, VIEW, FPS };
