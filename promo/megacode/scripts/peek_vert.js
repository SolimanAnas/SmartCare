const { open } = require('./driver');
(async () => {
  const { browser, page } = await open({ width: 450, height: 800, dsf: 1 });
  await page.click('#scGrid [data-id="7"]'); await page.clock.runFor(400);
  await page.screenshot({ path: 'capture/v1.png' });
  await page.click('[data-mode="quick"]'); await page.click('[data-x="go"]'); await page.clock.runFor(1000);
  await page.screenshot({ path: 'capture/v2.png' });
  await page.clock.runFor(1500);
  await page.screenshot({ path: 'capture/v3.png' });
  await browser.close();
})();
