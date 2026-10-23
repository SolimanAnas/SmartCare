#!/usr/bin/env node
/*
 * Capture genuine SmartCare screens for the Google Play listing.
 *
 * Usage (from the repo root):
 *   python3 -m http.server 8899          # in another shell
 *   node marketing/google-play/scripts/capture-screenshots.js [--base http://127.0.0.1:8899]
 *
 * Writes marketing/google-play/raw/*.png — unedited captures of the running
 * app at a 412×915 CSS-px phone viewport with a 3× device pixel ratio
 * (1236×2745 px), the same shape as a modern 20:9 Android phone.
 *
 * Every screen is driven through the app's own UI or the same global
 * functions its buttons call. Nothing on the page is restyled or injected.
 * To keep re-runs reproducible:
 *   - Math.random is replaced with a seeded PRNG (question order, scenario
 *     picks), so the same questions come up each run;
 *   - Date is pinned to 23 Oct 2026, 09:41 for pages that print dates/greetings;
 *   - the exam-results run advances a fake clock ~45 s per question, so the
 *     "time spent" figure reflects a plausible pace instead of the few
 *     milliseconds an automated click-through takes.
 *
 * Set CHROMIUM_PATH to use a specific Chromium build.
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'raw');
const argBase = process.argv.indexOf('--base');
const BASE = argBase > -1 ? process.argv[argBase + 1] : 'http://127.0.0.1:8899';
const EXECUTABLE = process.env.CHROMIUM_PATH || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);

const VIEWPORT = { width: 412, height: 915 };
const DPR = 3;
const FIXED_NOW = new Date('2026-10-23T09:41:00');

// Seeded PRNG (mulberry32) installed before any page script runs.
const SEED_SCRIPT = `(() => {
  let a = 0x5eedc0de;
  Math.random = function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
})();`;

const settle = (pg, ms) => pg.waitForTimeout(ms);

async function waitExamReady(pg) {
  await pg.waitForSelector('#loading-overlay', { state: 'hidden', timeout: 20000 });
  await pg.waitForFunction(() => window.examEngine);
  await settle(pg, 600);
}

async function startPrometric(pg, count) {
  await waitExamReady(pg);
  await pg.click('.wizard-next[data-next="2"]'); await settle(pg, 300);
  await pg.click('.wizard-next[data-next="3"]'); await settle(pg, 300);
  await pg.click(`[data-setting="count"][data-value="${count}"]`);
  await pg.click('#start-exam'); await settle(pg, 1200);
}

const SHOTS = [
  {
    file: '01-home.png',
    url: 'index.html',
    fixedTime: true,
    feature: 'Home — course library, quick access, search',
    run: async (pg) => { await settle(pg, 2500); },
  },
  {
    file: '02-courses.png',
    url: 'pages/courses.html',
    feature: 'Courses catalog — BLS, ACLS, Megacode, ITLS, BDLS…',
    run: async (pg) => { await settle(pg, 2500); },
  },
  {
    file: '03-acls-megacode.png',
    url: 'pages/megacode.html',
    feature: 'ACLS Megacode — scenario 4 (Roadside Dialysis Patient), Quick Code mode, live monitor in VT',
    run: async (pg) => {
      await settle(pg, 1200);
      await pg.click('.sc-card[data-id="4"]'); await settle(pg, 600);
      await pg.click('[data-mode="quick"]');
      await pg.click('[data-x="go"]');
      await settle(pg, 7000);
    },
  },
  {
    file: '04-ecg-trainer.png',
    url: 'pages/ecg.html',
    feature: 'ECG Trainer — Inferior STEMI (RCA) with territory map',
    run: async (pg) => {
      await settle(pg, 1500);
      // Same call the rhythm picker makes when an item is tapped.
      await pg.evaluate(() => pickRhythm('stemi_inf', 'Inferior STEMI (RCA)', 'STEMI / ACS'));
      await settle(pg, 4500);
    },
  },
  {
    file: '05-exam-practice.png',
    url: 'src/prometric/exam.html',
    feature: 'Prometric Paramedic/EMT exam engine — tutor mode, answer checked with explanation',
    run: async (pg) => {
      await startPrometric(pg, 25);
      // Step forward (Next) to the first question that has a concise explanation.
      for (let k = 0; k < 24; k++) {
        const ok = await pg.evaluate(() => {
          const q = examEngine.questions[examEngine.currentIndex];
          return !!q.explanation && q.explanation.length < 220 && q.text.length < 170
            && !/[a-z]-[a-z]/.test(q.explanation);
        });
        if (ok) break;
        await pg.click('#next-question'); await settle(pg, 200);
      }
      const c = await pg.evaluate(() => examEngine.questions[examEngine.currentIndex].shuffledCorrect);
      await pg.locator('.option-item').nth('ABCD'.indexOf(c)).click(); await settle(pg, 200);
      await pg.click('#submit-answer'); await settle(pg, 1000);
      // Submitting scrolls the explanation into view; return every scroller to the top.
      await pg.evaluate(() => document.querySelectorAll('*').forEach(el => { if (el.scrollTop) el.scrollTop = 0; }));
      await pg.evaluate(() => window.scrollTo(0, 0)); await settle(pg, 400);
    },
  },
  {
    file: '06-exam-results.png',
    url: 'src/prometric/exam.html',
    fakeClock: true,
    feature: 'Exam results — score, pass indicator, insights, performance by topic (25-question run, 22 correct)',
    run: async (pg) => {
      await startPrometric(pg, 25);
      const n = await pg.evaluate(() => examEngine.questions.length);
      for (let i = 0; i < n; i++) {
        const c = await pg.evaluate(() => examEngine.questions[examEngine.currentIndex].shuffledCorrect);
        // Three deliberate misses so the result reads like a real attempt.
        const pick = [3, 11, 19].includes(i) ? 'ABCD'[('ABCD'.indexOf(c) + 1) % 4] : c;
        await pg.clock.runFor(30000 + (i * 7919) % 30000);
        await pg.locator('.option-item').nth('ABCD'.indexOf(pick)).click();
        await pg.click('#submit-answer'); await pg.clock.runFor(8000);
        await pg.click('#submit-answer'); await pg.clock.runFor(500);
      }
      await pg.clock.runFor(2000);
      await pg.evaluate(() => window.scrollTo(0, 0));
      await pg.clock.runFor(1500);
    },
  },
  {
    file: '07-ems-tools.png',
    url: 'pages/ems-tools.html',
    feature: 'EMS Tools — clinical calculators and decision-support tools',
    run: async (pg) => { await settle(pg, 2500); },
  },
  {
    file: '08-study-planner.png',
    url: 'pages/prometric-planner.html',
    fixedTime: true,
    feature: 'Prometric Study Planner — exam in 60 days, 6 days/wk, 90 min/day',
    run: async (pg) => {
      await settle(pg, 1200);
      await pg.fill('#examDate', '2026-12-22');
      await pg.locator('#examDate').dispatchEvent('change');
      await pg.click('#daysPerWeek .chip[data-val="6"]');
      await pg.click('#minsPerDay .chip[data-val="90"]');
      await pg.getByRole('button', { name: /Generate my study plan/i }).click();
      await settle(pg, 1200);
      await pg.evaluate(() => window.scrollTo(0, 0)); await settle(pg, 400);
    },
  },
];

(async () => {
  fs.mkdirSync(RAW, { recursive: true });
  const only = process.argv.slice(2).filter(a => /^\d\d$/.test(a));
  const browser = await chromium.launch(EXECUTABLE ? { executablePath: EXECUTABLE } : {});
  const manifest = [];
  for (const s of SHOTS) {
    if (only.length && !only.includes(s.file.slice(0, 2))) continue;
    const ctx = await browser.newContext({
      viewport: VIEWPORT, deviceScaleFactor: DPR, isMobile: true, hasTouch: true,
      serviceWorkers: 'block', colorScheme: 'dark', locale: 'en-US', timezoneId: 'UTC',
    });
    await ctx.addInitScript(SEED_SCRIPT);
    const pg = await ctx.newPage();
    const errors = [];
    pg.on('pageerror', e => errors.push(e.message));
    if (s.fakeClock) await pg.clock.install({ time: FIXED_NOW });
    else if (s.fixedTime) await pg.clock.setFixedTime(FIXED_NOW);
    await pg.goto(`${BASE}/${s.url}`, { waitUntil: 'domcontentloaded' });
    if (s.fakeClock) await pg.clock.runFor(2500);
    await s.run(pg);
    const out = path.join(RAW, s.file);
    await pg.screenshot({ path: out });
    console.log(`captured ${s.file}  <- ${s.url}${errors.length ? '  [page errors: ' + errors.join(' | ') + ']' : ''}`);
    manifest.push({ file: s.file, url: s.url, feature: s.feature, viewport: `${VIEWPORT.width}x${VIEWPORT.height}@${DPR}x`, errors });
    await ctx.close();
  }
  await browser.close();
  if (!only.length) fs.writeFileSync(path.join(RAW, 'capture-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
})();
