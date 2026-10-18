// Quick Code (lite mode) autoplayer: for every scenario, keep picking options
// until the correct one is found (wrong picks lock out), answer the rhythm
// quizzes, and drive the case to the debrief. Fails on any page error or if a
// scenario gets stuck before ROSC.
const { test, expect } = require('@playwright/test');

for (let id = 1; id <= 12; id++) {
  test(`quick code: megacode ${id} reaches ROSC and debrief`, async ({ page }) => {
    test.setTimeout(150000);
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(`/pages/megacode.html?s=${id}`);
    await page.locator('[data-mode="quick"]').click();
    await page.locator('[data-x="go"]').click();
    await expect(page.locator('#lite')).toBeVisible();
    await expect(page.locator('.dock')).toBeHidden();

    let decisions = 0;
    for (let step = 0; step < 400; step++) {
      if (await page.locator('.res-banner').count()) break;
      const sheet = page.locator('.sheet');
      if (await sheet.count()) {
        const q = sheet.locator('.qo:not([disabled])').first();
        if (await q.count()) { await q.click(); continue; }
        const ok = sheet.locator('[data-x="ok"]').last();
        if (await ok.count()) { await ok.click(); continue; }
      }
      const end = page.locator('#liteEnd:visible');
      if (await end.count()) { await end.click(); continue; }
      const next = page.locator('#liteNext:not([disabled]):visible');
      if (await next.count()) { await next.click(); continue; }
      const opt = page.locator('#liteOpts .lo:not([disabled]):visible').first();
      if (await opt.count()) { await opt.click(); decisions++; continue; }
      await page.waitForTimeout(250);
    }
    await expect(page.locator('.res-banner')).toBeVisible();
    await expect(page.locator('.res-s')).toContainText('ROSC achieved');
    expect(decisions).toBeGreaterThan(5);
    expect(errors).toEqual([]);
  });
}
