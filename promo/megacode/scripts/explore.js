const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
  p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('http://localhost:8765/pages/megacode.html', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: 'capture/x1_picker.png' });
  await p.click('#scGrid [data-id="7"]'); await p.waitForTimeout(800);
  await p.screenshot({ path: 'capture/x2_brief.png' });
  await p.click('[data-mode="quick"]'); await p.click('[data-x="go"]'); await p.waitForTimeout(3000);
  await p.screenshot({ path: 'capture/x3_sim.png' });
  console.log(await p.locator('#lite').innerText());
  await b.close();
})();
