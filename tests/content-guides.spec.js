import { test, expect } from '@playwright/test';

// Rewritten topics render as guides (cpg-guide.js) instead of HTML
// summaries, and their study sets must still open. Facts and study-set sizes
// are checked by tests/test_content_guides.py; this checks the pages.

const CHAPTERS = { c2: 11, c3: 9, c4: 13, c5: 11, c6: 11 };
const topics = Object.entries(CHAPTERS).flatMap(([c, n]) =>
  Array.from({ length: n }, (_, i) => [c, `${c}s${i + 1}`]));

test.describe('rewritten topics', () => {
  test.use({ viewport: { width: 360, height: 760 } });

  for (const [chapter, section] of topics) {
    test(`${section} renders its guide without overflow`, async ({ page }) => {
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.goto(`/chapters/${chapter}.html?view=summary&section=${section}`);
      const guide = page.locator('.cpg-guide');
      await expect(guide).toBeVisible();
      await expect(guide.locator('h2, h1').first()).not.toBeEmpty();
      const info = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > window.innerWidth,
        emptyStrips: [...document.querySelectorAll('.cpg-guide svg[aria-label*="rhythm strip"]')]
          .filter(s => !s.querySelector('path')).length,
        // Sections hide their overflow, so the page never scrolls sideways even
        // when content is cut off: nothing outside a scrolling table may pass
        // the screen's right edge.
        offscreen: [...document.querySelectorAll('.cpg-guide *')]
          .filter(el => !el.closest('.g-table-wrap') && el.getBoundingClientRect().right > window.innerWidth + 1)
          .map(el => el.className || el.tagName).slice(0, 5),
      }));
      expect(info.overflow).toBe(false);
      expect(info.offscreen).toEqual([]);
      expect(info.emptyStrips).toBe(0);
      expect(errors).toEqual([]);
    });
  }

  test('tool links from the rewritten guides point at pages that exist', async ({ page, request }) => {
    const hrefs = new Set();
    for (const [chapter, section] of topics) {
      await page.goto(`/chapters/${chapter}.html?view=summary&section=${section}`);
      await expect(page.locator('.cpg-guide')).toBeVisible();
      for (const h of await page.locator('.cpg-guide a[href]').evaluateAll(as => as.map(a => a.href))) hrefs.add(h.split('?')[0].split('#')[0]);
    }
    expect(hrefs.size).toBeGreaterThan(0);
    for (const h of hrefs) expect((await request.get(h)).status(), h).toBe(200);
  });

  test('flashcards, quiz and scenarios open for a rewritten topic', async ({ page }) => {
    await page.goto('/chapters/c3.html?view=flashcards&section=c3s3');
    await expect(page.locator('#flashcard')).toBeVisible();
    await expect(page.locator('.fc-progress')).toContainText('of 8');

    await page.goto('/chapters/c3.html?view=quiz&section=c3s3');
    await page.locator('[data-quiz-size]').last().click();
    await expect(page.locator('#quizOptionsContainer .option-btn')).toHaveCount(4);

    await page.goto('/chapters/c3.html?view=critical&section=c3s3');
    await expect(page.locator('.critical-card')).toBeVisible();
    await expect(page.locator('#criticalOptionsContainer .option-btn').first()).toBeVisible();
  });
});
