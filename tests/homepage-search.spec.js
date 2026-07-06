import { test, expect } from '@playwright/test';

// Regression test: index.html's homepage search used to only match a
// chapter's own shortTitle/title/id (see filterCards' data-search), so
// searching for a term that only appears inside a sub-chapter topic (e.g.
// "STEMI", which lives in c4's "4.6 ECG Basics & 12-Lead / STEMI" but not
// in c4's own title "Cardiovascular & Resuscitation") returned nothing.
// Fixed by extracting the shared chapter/topic data that
// chapters/c-index.html's own search already used into
// content/curriculum-index.js, and having index.html's renderMenu() fold
// each chapter's topic titles into its data-search attribute too.

test('index.html search matches a sub-chapter topic, not just chapter titles', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.fill('#searchInput', 'STEMI');
  await page.waitForTimeout(150);
  const c4Card = page.locator('.chapter-card[data-search*="STEMI"]');
  const c4Visible = await c4Card.evaluate(el => !el.classList.contains('filtered-out'));
  expect(c4Visible).toBe(true);

  // Sanity: a nonsense query should show zero results.
  await page.fill('#searchInput', 'zzzznonexistentqueryzzzz');
  await page.waitForTimeout(150);
  const emptyVisible = await page.locator('#searchEmpty').isVisible();
  expect(emptyVisible).toBe(true);
});

test('chapters/c-index.html search still matches sub-chapter topics after the refactor', async ({ page }) => {
  await page.goto('chapters/c-index.html?view=summary', { waitUntil: 'networkidle' });
  await page.fill('#indexSearchInput', 'STEMI');
  await page.waitForTimeout(150);
  const visibleCards = await page.locator('.acc-card:not([style*="display: none"])').count();
  expect(visibleCards).toBeGreaterThan(0);
});
