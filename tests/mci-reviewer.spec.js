import { test, expect } from '@playwright/test';

// Smoke test for the MCI course reviewer (courses/mci/index.html).
// Verifies the app boots from data/bundle.js (window.MCI_DATA), renders the
// 14-chapter sidebar and all content tabs (incl. the MCI-only Drill tab),
// grades a quiz answer, plays a drill round to the results screen, and stays
// free of horizontal overflow on phones. Modeled on the Medical/BDLS specs.

test('MCI reviewer boots and renders sidebar + first chapter', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });

  const hasData = await page.evaluate(() => !!(window.MCI_DATA && window.MCI_DATA.manifest));
  expect(hasData).toBe(true);

  await expect(page.locator('#chapters .chap')).toHaveCount(14);
  await expect(page.locator('#ctitle')).toContainText('MCI Fundamentals');
});

test('MCI reviewer exposes all seven content tabs', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
  const tabs = page.locator('#tabs .tab');
  await expect(tabs).toHaveCount(7);
  const labels = (await tabs.allTextContents()).join(' ');
  for (const t of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables', 'Drill']) {
    expect(labels).toContain(t);
  }
});

test('MCI reviewer quiz tab renders questions and grades an answer', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
  await page.locator('#tabs .tab', { hasText: 'Quiz' }).click();
  expect(await page.locator('.q-card').count()).toBeGreaterThan(0);
  await page.locator('.q-card').first().locator('.opt').first().click();
  await expect(page.locator('.rationale.show').first()).toBeVisible();
});

test('MCI triage drill plays through to a results screen', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
  await page.locator('#chapters .chap', { hasText: 'START & JumpSTART' }).click();
  await expect(page.locator('#ctitle')).toContainText('START');
  await page.locator('#tabs .tab', { hasText: 'Drill' }).click();
  await page.locator('[data-drill]').first().click();

  const rounds = await page.evaluate(() => window.MCI_DATA.drills.c06.drills[0].items.length);
  for (let i = 0; i < rounds; i++) {
    await page.locator('.dr-opt').first().click();
    await expect(page.locator('.dr-fb')).toBeVisible();
    await page.locator('#drNext').click();
  }
  await expect(page.locator('.dr-end .score')).toBeVisible();
  await expect(page.locator('.dr-end .rank')).not.toBeEmpty();
});

// Mobile regression guard (shared shell): no page-level horizontal overflow on
// a table-heavy chapter across every tab, including an active drill round.
for (const vp of [{ w: 360, h: 740 }, { w: 320, h: 568 }]) {
  test(`MCI reviewer has no horizontal overflow at ${vp.w}px`, async ({ page }) => {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
    await page.locator('#chapters .chap', { hasText: 'Chemical Agents' }).first().click();
    const overflow = () => page.evaluate(() => {
      const d = document.scrollingElement;
      return d.scrollWidth - d.clientWidth;
    });
    for (const tab of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables', 'Drill']) {
      await page.locator('#tabs .tab', { hasText: tab }).click();
      if (tab === 'Drill') await page.locator('[data-drill]').first().click();
      const o = await overflow();
      expect(o, `${tab} tab overflows by ${o}px at ${vp.w}px`).toBeLessThanOrEqual(1);
    }
  });
}
