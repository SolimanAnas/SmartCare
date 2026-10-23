// Shared Playwright driver: deterministic virtual clock, frame stepping, screenshots.
const { chromium } = require('playwright-core');
const path = require('path');
const CHROME = process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const URL = process.env.MEGACODE_URL || 'http://localhost:8765/pages/megacode.html';

async function open({ width = 1600, height = 900, dsf = 2 } = {}) {
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: dsf });
  page.on('pageerror', e => console.error('PAGEERR', e.message));
  await page.addInitScript({ path: path.join(__dirname, 'inject.js') });
  // Freeze time: the page only advances when we call clock.runFor() (one video frame at a time).
  await page.clock.install({ time: new Date('2026-10-22T09:00:00Z') });
  await page.clock.pauseAt(new Date('2026-10-22T09:00:01Z'));
  await page.goto(URL, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.clock.runFor(500);
  return { browser, page };
}
module.exports = { open };
