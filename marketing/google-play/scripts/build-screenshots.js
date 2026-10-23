#!/usr/bin/env node
/*
 * Compose the Google Play promotional screenshots from the raw captures.
 *
 * Usage (from the repo root, after capture-screenshots.js):
 *   node marketing/google-play/scripts/build-screenshots.js
 *
 * Reads  marketing/google-play/raw/NN-*.png
 * Writes marketing/google-play/screenshots/NN-*.png  (1080×1920, 9:16, 24-bit PNG, no alpha)
 *        marketing/google-play/previews/contact-sheet.png
 *
 * Each slide is an HTML/CSS layout rendered by Chromium at exactly 1080×1920.
 * The raw capture is placed inside a phone frame, scaled down uniformly and
 * otherwise untouched — no retouching, cropping or overlays on the app UI.
 * After rendering, every output is checked against the Play Console rules
 * (PNG, 24-bit without alpha, sides 320–3840 px, long side ≤ 2× short side,
 * ≤ 8 MB) and the script exits non-zero if any file fails.
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

const ROOT = path.resolve(__dirname, '..');
const REPO = path.resolve(ROOT, '..', '..');
const RAW = path.join(ROOT, 'raw');
const OUT = path.join(ROOT, 'screenshots');
const PREV = path.join(ROOT, 'previews');
const EXECUTABLE = process.env.CHROMIUM_PATH || (fs.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);

const W = 1080, H = 1920;

// Headline copy. Every claim maps to something visible in the app:
// counts come from the app's own UI (12 megacode scenarios, 2,749 questions,
// 24 ECG rhythms) and "offline" was verified with the service worker and the
// network disabled.
const SLIDES = [
  {
    raw: '01-home.png', out: '01-smartcare-home.png', brand: true,
    title: 'Your clinical<br>learning <em>companion</em>',
    sub: 'Courses, exams, simulators and EMS tools — even offline.',
  },
  {
    raw: '02-courses.png', out: '02-clinical-courses.png', kicker: 'Course library',
    title: 'Every key course<br><em>in one place</em>',
    sub: 'BLS, ACLS, PALS, ITLS, BDLS, MCI, PEPP and more.',
  },
  {
    raw: '03-acls-megacode.png', out: '03-acls-megacode.png', kicker: 'ACLS Megacode', tone: 'red',
    title: 'Run the code.<br><em>Read the monitor.</em>',
    sub: '12 megacode scenarios on a live patient monitor.',
  },
  {
    raw: '04-ecg-trainer.png', out: '04-ecg-learning.png', kicker: 'ECG Trainer', tone: 'red',
    title: 'Build your<br><em>ECG confidence</em>',
    sub: '24 live rhythms with criteria and treatment notes.',
  },
  {
    raw: '05-exam-practice.png', out: '05-exam-practice.png', kicker: 'Exam practice',
    title: 'Train smarter.<br><em>Practice with purpose.</em>',
    sub: '2,749 Paramedic & EMT questions in tutor or timed mode.',
  },
  {
    raw: '06-exam-results.png', out: '06-knowledge-assessment.png', kicker: 'Results & insights',
    title: 'Test your<br><em>clinical knowledge</em>',
    sub: 'Scores, pass indicator and performance by topic.',
  },
  {
    raw: '07-ems-tools.png', out: '07-clinical-tools.png', kicker: 'EMS tools',
    title: 'Clinical tools at<br>your <em>fingertips</em>',
    sub: 'GCS, APGAR, burns, triage and more — for study use.',
  },
  {
    raw: '08-study-planner.png', out: '08-study-planner.png', kicker: 'Study planner',
    title: 'Your learning.<br><em>Your pace.</em>',
    sub: 'A day-by-day plan built around your exam date.',
  },
];

const dataUri = (file, mime) => `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;

const FONTS = `
@font-face{font-family:"Inter";src:url(${dataUri(path.join(REPO, 'fonts/inter-var.woff2'), 'font/woff2')}) format("woff2");font-weight:100 900}
@font-face{font-family:"Barlow Condensed";src:url(${dataUri(path.join(REPO, 'fonts/barlow-condensed-700.woff2'), 'font/woff2')}) format("woff2");font-weight:700}`;

const ICON = dataUri(path.join(REPO, 'icons/icon-192x192.png'), 'image/png');

// One PQRST complex, tiled across the canvas as a faint monitor trace.
function ecgPath(y0, width) {
  const beat = [[0, 0], [38, 0], [48, -10], [58, 0], [72, 0], [78, 12], [88, -120], [98, 34], [106, 0], [130, 0], [150, -22], [170, 0], [210, 0]];
  let d = `M0 ${y0}`;
  for (let x = 0; x < width + 210; x += 210) for (const [dx, dy] of beat) d += ` L${x + dx} ${y0 + dy}`;
  return d;
}

function slideHtml(s) {
  const red = s.tone === 'red';
  const kicker = s.brand
    ? `<div class="brand"><img src="${ICON}" alt=""><div><b>SmartCare</b><span>Clinical Learning Platform</span></div></div>`
    : `<div class="kicker"><i></i>${s.kicker}</div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${FONTS}
:root{--acc1:#38bdf8;--acc2:#60a5fa;--glow:${red ? 'rgba(239,68,68,.30)' : 'rgba(37,99,235,.42)'};--glow2:${red ? 'rgba(37,99,235,.22)' : 'rgba(14,165,233,.18)'};--trace:${red ? 'rgba(248,113,113,.45)' : 'rgba(96,165,250,.40)'}}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden;background:#060d1b}
body{position:relative;font-family:"Inter",sans-serif;color:#fff;
  background:
    radial-gradient(900px 700px at 50% 78%, var(--glow), transparent 70%),
    radial-gradient(700px 520px at 100% 0%, var(--glow2), transparent 70%),
    radial-gradient(600px 600px at 0% 40%, rgba(214,51,132,.10), transparent 70%),
    linear-gradient(180deg,#071226 0%,#0a1730 45%,#060d1b 100%)}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(148,163,184,.13) 1.4px,transparent 1.6px);background-size:36px 36px;
  -webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,.9),rgba(0,0,0,.15) 55%,transparent)}
svg.trace{position:absolute;left:0;top:0}
header{position:absolute;left:84px;right:84px;top:92px;height:330px;display:flex;flex-direction:column;align-items:center;text-align:center}
header.hero{top:74px}
.kicker{display:inline-flex;align-items:center;gap:14px;padding:10px 24px 10px 20px;border-radius:999px;border:1.5px solid rgba(125,211,252,.35);
  background:rgba(14,165,233,.10);font:700 30px/1 "Barlow Condensed",sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#bae6fd}
.kicker i{width:12px;height:12px;border-radius:50%;background:${red ? '#f87171' : '#38bdf8'};box-shadow:0 0 14px ${red ? '#f87171' : '#38bdf8'}}
.brand{display:flex;align-items:center;gap:18px}
.brand img{width:68px;height:68px;border-radius:16px;box-shadow:0 6px 20px rgba(0,0,0,.4)}
.brand div{display:flex;flex-direction:column;align-items:flex-start;text-align:left}
.brand b{font-weight:800;font-size:38px;letter-spacing:-.01em;line-height:1.05}
.brand span{font:700 22px/1.2 "Barlow Condensed",sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#93c5fd}
h1{margin-top:30px;font-weight:800;font-size:76px;line-height:1.04;letter-spacing:-.028em;text-wrap:balance}
h1 em{font-style:normal;background:linear-gradient(90deg,${red ? '#fda4af,#f87171' : '#7dd3fc,#60a5fa'});-webkit-background-clip:text;background-clip:text;color:transparent}
p.sub{margin-top:22px;font-weight:500;font-size:31px;line-height:1.3;color:rgba(226,232,240,.78);letter-spacing:-.005em}
.phone{position:absolute;left:50%;bottom:44px;width:664px;transform:translateX(-50%);border-radius:88px;padding:16px;
  background:linear-gradient(145deg,#3a4556 0%,#151b26 38%,#0b0f17 70%,#2a3343 100%);
  box-shadow:0 0 0 2px rgba(255,255,255,.10) inset,0 0 0 1px rgba(0,0,0,.6),0 70px 120px rgba(0,0,0,.55),0 0 160px var(--glow)}
.phone:before{content:"";position:absolute;right:-6px;top:300px;width:6px;height:130px;border-radius:0 4px 4px 0;background:#2a3343;box-shadow:0 190px 0 #2a3343}
.screen{width:100%;border-radius:72px;overflow:hidden;background:#000;box-shadow:0 0 0 3px #05070b}
.screen img{display:block;width:100%;height:auto} /* keep the capture's exact aspect ratio */
</style></head><body>
<div class="dots"></div>
<svg class="trace" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>
  <linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".05"/><stop offset=".22" stop-color="#fff" stop-opacity="1"/><stop offset=".78" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity=".05"/></linearGradient>
  <mask id="m"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask></defs>
  <path d="${ecgPath(1010, W)}" fill="none" stroke="var(--trace)" stroke-width="4" stroke-linejoin="round" mask="url(#m)" style="filter:drop-shadow(0 0 8px var(--trace))"/>
</svg>
<header${s.brand ? ' class="hero"' : ''}>${kicker}<h1>${s.title}</h1><p class="sub">${s.sub}</p></header>
<div class="phone"><div class="screen"><img src="${dataUri(path.join(RAW, s.raw), 'image/png')}" alt=""></div></div>
</body></html>`;
}

function contactSheetHtml(files) {
  const tw = 360, th = 640;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${FONTS}
*{margin:0;box-sizing:border-box}body{width:${tw * 4 + 40 * 5}px;background:#e2e8f0;font-family:Inter,sans-serif;padding:40px}
h2{font-size:30px;font-weight:800;color:#0f172a;margin-bottom:6px}p{font-size:18px;color:#475569;margin-bottom:28px}
.g{display:grid;grid-template-columns:repeat(4,${tw}px);gap:40px}figure{margin:0}img{width:${tw}px;height:${th}px;border-radius:14px;box-shadow:0 10px 30px rgba(15,23,42,.25);display:block}
figcaption{margin-top:12px;font-size:17px;font-weight:600;color:#1e293b}</style></head><body>
<h2>SmartCare — Google Play phone screenshots</h2><p>Upload order 1–8 · 1080 × 1920 px · 24-bit PNG</p>
<div class="g">${files.map(f => `<figure><img src="${dataUri(path.join(OUT, f), 'image/png')}"><figcaption>${f}</figcaption></figure>`).join('')}</div></body></html>`;
}

// Minimal PNG header check (no image library needed).
function checkPng(file) {
  const b = fs.readFileSync(file);
  const problems = [];
  if (b.toString('latin1', 1, 4) !== 'PNG') problems.push('not a PNG');
  const w = b.readUInt32BE(16), h = b.readUInt32BE(20), depth = b[24], colorType = b[25];
  if (!(depth === 8 && colorType === 2)) problems.push(`colour type ${colorType}/${depth}-bit (need 24-bit RGB, no alpha)`);
  if (Math.min(w, h) < 320 || Math.max(w, h) > 3840) problems.push('side outside 320–3840 px');
  if (Math.max(w, h) > 2 * Math.min(w, h)) problems.push('long side > 2× short side');
  if (b.length > 8 * 1024 * 1024) problems.push('larger than 8 MB');
  return { w, h, kb: Math.round(b.length / 1024), problems };
}

(async () => {
  for (const d of [OUT, PREV]) fs.mkdirSync(d, { recursive: true });
  const browser = await chromium.launch(EXECUTABLE ? { executablePath: EXECUTABLE } : {});
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  let failed = false;
  for (const s of SLIDES) {
    await page.setContent(slideHtml(s), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const out = path.join(OUT, s.out);
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: W, height: H } });
    const r = checkPng(out);
    failed ||= r.problems.length > 0;
    console.log(`${s.out}  ${r.w}x${r.h}  ${r.kb} KB  ${r.problems.length ? 'FAIL: ' + r.problems.join('; ') : 'ok'}`);
  }
  const sheet = contactSheetHtml(SLIDES.map(s => s.out));
  await page.setViewportSize({ width: 360 * 4 + 40 * 5, height: 800 });
  await page.setContent(sheet, { waitUntil: 'load' });
  await page.screenshot({ path: path.join(PREV, 'contact-sheet.png'), fullPage: true });
  console.log('previews/contact-sheet.png');
  await browser.close();
  if (failed) process.exit(1);
})();
