import { test, expect } from '@playwright/test';

// Smoke tests for the ACLS course reviewer (courses/acls/index.html). Verifies
// the app boots from data/bundle.js (window.ACLS_DATA), renders the chapter
// sidebar and all six content tabs, and that switching tabs and chapters
// surfaces real content.

const BASE = 'courses/acls/index.html';

test('ACLS reviewer boots and renders sidebar + first chapter', async ({ page }) => {
  await page.goto(BASE, { waitUntil: 'networkidle' });

  const hasData = await page.evaluate(() => !!(window.ACLS_DATA && window.ACLS_DATA.manifest));
  expect(hasData).toBe(true);

  // Sidebar lists all 14 chapters.
  const chapters = page.locator('#chapters .chap');
  await expect(chapters).toHaveCount(14);

  // First chapter title renders in the header.
  await expect(page.locator('#ctitle')).toContainText('Systems of Care');
});

test('ACLS reviewer exposes all six content tabs', async ({ page }) => {
  await page.goto(BASE, { waitUntil: 'networkidle' });
  const tabs = page.locator('#tabs .tab');
  await expect(tabs).toHaveCount(6);
  const labels = (await tabs.allTextContents()).join(' ');
  for (const t of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables']) {
    expect(labels).toContain(t);
  }
});

test('ACLS reviewer quiz tab renders questions and grades an answer', async ({ page }) => {
  await page.goto(BASE, { waitUntil: 'networkidle' });

  await page.locator('#tabs .tab', { hasText: 'Quiz' }).click();
  const qCards = page.locator('.q-card');
  expect(await qCards.count()).toBeGreaterThan(0);

  // Answer the first question and confirm a rationale is revealed.
  await page.locator('.q-card').first().locator('.opt').first().click();
  await expect(page.locator('.rationale.show').first()).toBeVisible();
});

test('ACLS reviewer switches chapters via the sidebar', async ({ page }) => {
  await page.goto(BASE, { waitUntil: 'networkidle' });
  // Click the Pharmacology chapter (chapter 8) and confirm the header updates.
  await page.locator('#chapters .chap', { hasText: 'Pharmacology' }).click();
  await expect(page.locator('#ctitle')).toContainText('Pharmacology');
});

// Regression test: the reviewer's grid track must not overflow at phone widths.
// Walks every tab on a table-heavy chapter (c08 Pharmacology) and fails on any
// page-level horizontal overflow.
for (const vp of [{ w: 360, h: 740 }, { w: 320, h: 568 }]) {
  test(`ACLS reviewer has no horizontal overflow at ${vp.w}px`, async ({ page }) => {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.locator('#chapters .chap', { hasText: 'Pharmacology' }).first().click();
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
