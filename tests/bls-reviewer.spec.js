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
