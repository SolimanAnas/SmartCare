// End-to-end smoke test for the ACLS Megacode simulator (pages/megacode.html):
// plays Megacode 1 (brady → pVT → PEA → ROSC) through to the debrief using the
// real controls, and fails on any page error along the way.
const { test, expect } = require('@playwright/test');

async function answerQuiz(page) {
  const sheet = page.locator('.sheet');
  await expect(sheet.locator('.quiz-q').first()).toBeVisible();
  await sheet.locator('.qo[data-k]').first().click();
  const stable = sheet.locator('.qo[data-s]');
  if (await stable.count()) await stable.first().click();
  await sheet.locator('[data-x="ok"]').last().click();
  await expect(page.locator('.sheet')).toHaveCount(0);
}

async function cprCycleThenCheck(page) {
  await page.click('#qCpr');
  await page.click('#qSkip');
  await page.click('#qCpr');
}

async function shockNow(page) {
  await page.click('#qCharge');
  await expect(page.locator('#qShock')).toBeEnabled({ timeout: 6000 });
  await page.click('#qShock');
}

test('megacode 1 plays from bradycardia to ROSC and debrief', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/pages/megacode.html');
  await expect(page.locator('.sc-card')).toHaveCount(12);

  await page.locator('.sc-card[data-id="1"]').click();
  await page.locator('[data-mode="train"]').click();
  await page.locator('[data-x="go"]').click();
  await expect(page.locator('#viewSim')).toBeVisible();

  // Brady phase: monitor, rhythm quiz, IV, atropine, pacing → pVT
  await page.locator('[data-act="roles"]').click();
  await page.locator('[data-act="monitor"]').click();
  await answerQuiz(page);
  await page.locator('[data-tab="circ"]').click();
  await page.locator('[data-act="iv"]').click();
  await page.locator('[data-tab="drugs"]').click();
  await page.locator('[data-act="atropine"]').click();
  await page.locator('[data-tab="elec"]').click();
  await page.locator('#pToggle').click();
  await expect(page.locator('#monAlarm')).toHaveText(/VTACH/, { timeout: 10000 });

  // pVT: quiz, pacer off, shock ×3 with CPR cycles, epi after 2nd, amio after 3rd
  await answerQuiz(page);
  await page.locator('#pToggle').click();
  await shockNow(page);
  await cprCycleThenCheck(page);
  await shockNow(page);
  await page.click('#qCpr');
  await page.locator('[data-tab="drugs"]').click();
  await page.locator('[data-act="epi"]').click();
  await page.locator('[data-tab="airway"]').click();
  await page.locator('[data-act="bvm"]').click();
  await page.click('#qSkip');
  await page.click('#qCpr');
  await shockNow(page);
  await page.click('#qCpr');
  await page.locator('[data-tab="drugs"]').click();
  await page.locator('[data-act="amio"]').click();
  await page.click('#qSkip');
  await page.click('#qCpr');

  // PEA: pulse check → quiz → CPR, epi, H's & T's → ROSC at the next check
  await expect(page.locator('#prog .p-cur')).toHaveText('PEA');
  await page.click('#qPulse');
  await answerQuiz(page);
  await page.click('#qCpr');
  await page.locator('[data-tab="drugs"]').click();
  await page.locator('[data-act="epi"]').click();
  await page.locator('[data-tab="post"]').click();
  await page.locator('[data-act="hts"]').click();
  await page.locator('.ht[data-h="hypoxia"]').click();
  await page.locator('[data-x="ok"]').click();
  await page.click('#qSkip');
  await page.click('#qCpr');
  await expect(page.locator('#prog .p-cur')).toHaveText('ROSC');
  await page.click('#qPulse');
  await expect(page.locator('#ptSt')).toContainText('ROSC');

  await page.locator('[data-act="end"]').click();
  await page.locator('[data-x="yes"]').click();
  await expect(page.locator('.res-banner')).toBeVisible();
  await expect(page.locator('.cl-sec')).toHaveCount(5);
  expect(errors).toEqual([]);
});

test('every scenario starts and renders the live monitor', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  for (let id = 1; id <= 12; id++) {
    await page.goto(`/pages/megacode.html?s=${id}`);
    await page.locator('[data-mode="train"]').click();
    await page.locator('[data-x="go"]').click();
    await page.locator('[data-act="monitor"]').click();
    await page.waitForTimeout(600);
    await expect(page.locator('#hdrTitle')).toContainText(`Megacode ${id}`);
  }
  expect(errors).toEqual([]);
});
