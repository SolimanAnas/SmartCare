import { test, expect } from '@playwright/test';

// Regression test for a real bug: content/c-index.js's `shortTitle` field
// used to embed a raw <svg> icon string inside what every other chapter
// treats as plain text. recordLastVisited() (app.js) stores shortTitle
// verbatim as the "Continue Where You Left Off" title; index.html's
// renderLastVisited() correctly escapes it for display — but escaping HTML
// that was never supposed to be there just shows the tag characters as
// literal visible text. Fixed at the source (c-index.js now uses a plain
// "Index" string) and defensively in escapeHtml() (index.html), which now
// strips any tags before escaping so a stale localStorage entry — or any
// future instance of the same mistake — degrades to plain text instead.

test('stale broken shortTitle in localStorage renders as plain text, not raw markup', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    const badEntry = {
      id: 'c-index',
      title: '<svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#clipboard-list"/></svg> Index',
      url: 'chapters/c-index.html',
      timestamp: Date.now()
    };
    localStorage.setItem('smartcare_last_visited', JSON.stringify([badEntry]));
  });
  await page.reload({ waitUntil: 'networkidle' });
  const titleText = await page.locator('.lv-title').first().textContent();
  expect(titleText.trim()).toBe('Index');
  expect(titleText).not.toContain('<svg');
});

test('visiting c-index.html fresh records a clean "Index" title', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.removeItem('smartcare_last_visited'));
  await page.goto('chapters/c-index.html', { waitUntil: 'networkidle' });
  await page.goto('/', { waitUntil: 'networkidle' });
  const titleText = await page.locator('.lv-title').first().textContent();
  expect(titleText.trim()).toBe('Index');
});
