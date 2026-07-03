import { test, expect } from '@playwright/test';

// Regression test for a real bug: <button> doesn't inherit color/font from
// the page by default in any browser (UA stylesheet uses system colors
// instead), so any exam-review.css button class that forgot to set its own
// `color` silently rendered near-black text — invisible against the dark
// and green themes. Confirmed via a user screenshot showing "Show Hint"
// and the Sure/Maybe/Guessed confidence buttons as unreadable. Fixed with
// a `button{color:inherit;font:inherit}` base rule in exam-review.css;
// this asserts every interactive button actually resolves to a real theme
// color, not the browser's black-ish system default.

test('every visible button in the exam flow has a real (non-black) computed color', async ({ page }) => {
  await page.goto('pages/bls.html', { waitUntil: 'networkidle' });
  await page.locator('#modeStudyBtn').click();
  await page.locator('.exam-card').first().click();
  await expect(page.locator('#examScreen')).toBeVisible({ timeout: 5000 });

  const broken = await page.evaluate(() => {
    const results = [];
    document.querySelectorAll('button').forEach((btn) => {
      const rect = btn.getBoundingClientRect();
      const visible = rect.width > 0 && rect.height > 0 && getComputedStyle(btn).display !== 'none';
      if (!visible) return;
      const color = getComputedStyle(btn).color;
      if (color === 'rgb(0, 0, 0)') {
        results.push(btn.id || btn.className || btn.textContent.trim().slice(0, 30));
      }
    });
    return results;
  });

  expect(broken, `buttons rendering pure black (invisible on dark themes): ${JSON.stringify(broken)}`).toEqual([]);
});
