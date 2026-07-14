import { test, expect } from '@playwright/test';

// Smoke test for the EMPACT course reviewer (courses/empact/index.html).
// Verifies the app boots from data/bundle.js (window.EMPACT_DATA), renders
// the chapter sidebar and all six content tabs, grades a quiz answer,
// switches chapters, and stays free of horizontal overflow on phones.
// Modeled on the BLS/BDLS specs.

test('EMPACT reviewer boots and renders sidebar + first chapter', async ({ page }) => {
  await page.goto('courses/empact/index.html', { waitUntil: 'networkidle' });

  // Bundle loaded the dataset onto the global.
  const hasData = await page.evaluate(() => !!(window.EMPACT_DATA && window.EMPACT_DATA.manifest));
  expect(hasData).toBe(true);

  // Sidebar lists all 10 chapters.
  const chapters = page.locator('#chapters .chap');
  await expect(chapters).toHaveCount(10);

  // First chapter title renders in the header (Systematic Approach).
  await expect(page.locator('#ctitle')).toContainText('Systematic Approach');
});

test('EMPACT reviewer exposes all six content tabs', async ({ page }) => {
  await page.goto('courses/empact/index.html', { waitUntil: 'networkidle' });
  const tabs = page.locator('#tabs .tab');
  await expect(tabs).toHaveCount(6);
  const labels = (await tabs.allTextContents()).join(' ');
  for (const t of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables']) {
    expect(labels).toContain(t);
  }
});

test('EMPACT reviewer quiz tab renders questions and grades an answer', async ({ page }) => {
  await page.goto('courses/empact/index.html', { waitUntil: 'networkidle' });

  // Switch to the Quiz tab.
  await page.locator('#tabs .tab', { hasText: 'Quiz' }).click();
  const qCards = page.locator('.q-card');
  expect(await qCards.count()).toBeGreaterThan(0);

  // Answer the first question and confirm a rationale is revealed.
  await page.locator('.q-card').first().locator('.opt').first().click();
  await expect(page.locator('.rationale.show').first()).toBeVisible();
});

test('EMPACT reviewer switches chapters via the sidebar', async ({ page }) => {
  await page.goto('courses/empact/index.html', { waitUntil: 'networkidle' });
  // Click the Cardiovascular Emergencies chapter and confirm the header updates.
  await page.locator('#chapters .chap', { hasText: 'Cardiovascular' }).click();
  await expect(page.locator('#ctitle')).toContainText('Cardiovascular');
});

// Mobile regression guard (shared shell): the reviewer's grid track must be
// `minmax(0, 1fr)` with a `min-width: 0` sidebar, or nowrap chapter titles
// force horizontal scroll on phones. Walks every tab on a table-heavy chapter
// at phone widths and fails on any page-level horizontal overflow.
for (const vp of [{ w: 360, h: 740 }, { w: 320, h: 568 }]) {
  test(`EMPACT reviewer has no horizontal overflow at ${vp.w}px`, async ({ page }) => {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.goto('courses/empact/index.html', { waitUntil: 'networkidle' });
    await page.locator('#chapters .chap', { hasText: 'Cardiovascular' }).first().click();
    for (const tab of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables']) {
      await page.locator('#tabs .tab', { hasText: tab }).click();
      const overflow = await page.evaluate(() => {
        const d = document.scrollingElement;
        return d.scrollWidth - d.clientWidth;
      });
      expect(overflow, `${tab} tab overflows by ${overflow}px at ${vp.w}px`).toBeLessThanOrEqual(1);
    }
  });
}
