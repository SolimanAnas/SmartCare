import { test, expect } from '@playwright/test';

// Smoke test for the BLS course reviewer (courses/bls/index.html). Verifies
// the app boots from data/bundle.js (window.BLS_DATA), renders the chapter
// sidebar and all six content tabs, and that switching tabs and chapters
// surfaces real content. Modeled on the ITLS reviewer structure.

test('BLS reviewer boots and renders sidebar + first chapter', async ({ page }) => {
  await page.goto('courses/bls/index.html', { waitUntil: 'networkidle' });

  // Bundle loaded the dataset onto the global.
  const hasData = await page.evaluate(() => !!(window.BLS_DATA && window.BLS_DATA.manifest));
  expect(hasData).toBe(true);

  // Sidebar lists all 12 chapters.
  const chapters = page.locator('#chapters .chap');
  await expect(chapters).toHaveCount(12);

  // First chapter title renders in the header (Chain of Survival).
  await expect(page.locator('#ctitle')).toContainText('Chain of Survival');
});

test('BLS reviewer exposes all six content tabs', async ({ page }) => {
  await page.goto('courses/bls/index.html', { waitUntil: 'networkidle' });
  const tabs = page.locator('#tabs .tab');
  await expect(tabs).toHaveCount(6);
  const labels = (await tabs.allTextContents()).join(' ');
  for (const t of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables']) {
    expect(labels).toContain(t);
  }
});

test('BLS reviewer quiz tab renders questions and grades an answer', async ({ page }) => {
  await page.goto('courses/bls/index.html', { waitUntil: 'networkidle' });

  // Switch to the Quiz tab.
  await page.locator('#tabs .tab', { hasText: 'Quiz' }).click();
  const qCards = page.locator('.q-card');
  expect(await qCards.count()).toBeGreaterThan(0);

  // Answer the first question and confirm a rationale is revealed.
  await page.locator('.q-card').first().locator('.opt').first().click();
  await expect(page.locator('.rationale.show').first()).toBeVisible();
});

test('BLS reviewer switches chapters via the sidebar', async ({ page }) => {
  await page.goto('courses/bls/index.html', { waitUntil: 'networkidle' });
  // Click the AED chapter (chapter 5) and confirm the header updates.
  await page.locator('#chapters .chap', { hasText: 'Automated External Defibrillation' }).click();
  await expect(page.locator('#ctitle')).toContainText('Automated External Defibrillation');
});

// Regression test for a real bug: the reviewer's `1fr` grid track could not
// shrink below the sidebar's min-content width — the nowrap chapter titles
// propagated ~440px of intrinsic width up through the nested flex layout,
// forcing ~170-210px of horizontal scroll on phones. Fixed with
// `minmax(0, 1fr)` grid tracks and `min-width: 0` on the sidebar. This test
// walks every tab (including the table-heavy c03) at phone widths and fails
// on any page-level horizontal overflow.
for (const vp of [{ w: 360, h: 740 }, { w: 320, h: 568 }]) {
  test(`BLS reviewer has no horizontal overflow at ${vp.w}px`, async ({ page }) => {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.goto('courses/bls/index.html', { waitUntil: 'networkidle' });
    await page.locator('#chapters .chap', { hasText: 'High-Quality CPR' }).first().click();
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
