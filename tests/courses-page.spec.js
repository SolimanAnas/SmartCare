// pages/courses.html: progress bars read each reviewer's real progress,
// sections collapse/expand (and remember it), search stays usable, and the
// menu control lives in the header instead of floating over the search box.
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/pages/courses.html');
  await page.evaluate(() => {
    localStorage.clear();
    const viewed = n => Object.fromEntries(Array.from({ length: n }, (_, i) => ['ch' + i, { viewed: true }]));
    localStorage.setItem('acls_progress', JSON.stringify(viewed(7)));                   // 7 of 14
    localStorage.setItem('bls_progress', JSON.stringify({ ...viewed(12), extra: { viewed: true } })); // capped at 12/12
    localStorage.setItem('megacode.best', JSON.stringify({ 1: { pass: true }, 2: { pass: false } }));
  });
  await page.reload();
});

test('progress bars reflect real reviewer progress', async ({ page }) => {
  const acls = page.locator('.course-card[data-id="acls"]');
  await expect(acls.locator('.cc-pct')).toHaveText('7/14 chapters');
  await expect(acls.locator('.cc-progress-fill')).toHaveAttribute('style', /width: 50%/);
  await expect(page.locator('.course-card[data-id="bls"] .cc-pct')).toHaveText('✓ 12/12 chapters');
  await expect(page.locator('.course-card[data-id="megacode"] .cc-pct')).toHaveText('1/12 passed');
  await expect(page.locator('.course-card[data-id="itls"] .cc-progress')).toHaveClass(/is-new/);
  await expect(page.locator('.course-card[data-id="itls"] .cc-pct')).toHaveText('0/22 chapters');
  await expect(page.locator('.course-card[data-id="bls"] .cc-progress')).toHaveClass(/is-done/);
  await expect(page.locator('.course-card[data-id="prometric"] .cc-progress')).toHaveClass(/is-untracked/);
  await expect(page.locator('#pageSubtitle')).toContainText('3 started');
});

test('collapse all / expand all, remembered across reloads', async ({ page }) => {
  const sections = page.locator('#courseList .cat');
  await expect(sections.first()).not.toHaveClass(/collapsed/);
  await page.click('#toggleAllBtn');
  await expect(page.locator('#courseList .cat:not(.collapsed)')).toHaveCount(0);
  await expect(page.locator('#toggleAllBtn')).toHaveAttribute('aria-label', 'Expand all sections');
  await page.reload();
  await expect(page.locator('#courseList .cat:not(.collapsed)')).toHaveCount(0);
  await page.locator('.cat[data-cat="cardiac"] .cat-h').click();
  await expect(page.locator('.cat[data-cat="cardiac"]')).not.toHaveClass(/collapsed/);
  await expect(page.locator('#toggleAllBtn')).toHaveAttribute('aria-label', 'Collapse all sections');
  await page.click('#toggleAllBtn');
  await page.click('#toggleAllBtn');
  await expect(page.locator('#courseList .cat.collapsed')).toHaveCount(0);
});

test('search stays reachable while scrolling and filters results', async ({ page }) => {
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(400);
  const box = await page.locator('#searchInput').boundingBox();
  expect(box.y).toBeGreaterThan(0);
  expect(box.y).toBeLessThan(140);
  await page.fill('#searchInput', 'pediatric');
  await expect(page.locator('.results-grid .course-card')).toHaveCount(3);
  await page.click('#searchClear');
  await expect(page.locator('#courseList .cat')).not.toHaveCount(0);
});

test('menu control sits in the header, not over the search box', async ({ page }) => {
  const menu = await page.locator('#drawerTrigger').boundingBox();
  const header = await page.locator('header').boundingBox();
  const search = await page.locator('.search-wrap').boundingBox();
  expect(menu.y + menu.height).toBeLessThanOrEqual(header.y + header.height);
  expect(search.y).toBeGreaterThanOrEqual(header.y + header.height);
  await page.click('#drawerTrigger');
  await expect(page.locator('#notificationDrawer')).toHaveClass(/open/);
});

test('every card has the same action row; Megacode offers Scenarios + Random case', async ({ page }) => {
  const cards = page.locator('#courseList .course-card');
  const n = await cards.count();
  expect(n).toBeGreaterThan(10);
  await expect(page.locator('#courseList .course-card:not(:has(.cc-actions .cc-btn-primary))')).toHaveCount(0);
  const mega = page.locator('.course-card[data-id="megacode"]');
  await expect(mega.locator('.cc-btn')).toHaveText(['Scenarios', 'Random case']);
  await mega.locator('.cc-btn', { hasText: 'Random case' }).click();
  await expect(page).toHaveURL(/megacode\.html\?s=random/);
  await expect(page.locator('.sheet .sh-k')).toContainText('Megacode');
});

test('toggles panel is opaque and readable', async ({ page }) => {
  await page.click('#drawerTrigger');
  const bg = await page.locator('#notificationDrawer').evaluate(el => getComputedStyle(el).backgroundColor);
  const alpha = bg.startsWith('rgba') ? parseFloat(bg.split(',')[3]) : 1;
  expect(alpha).toBeGreaterThan(0.9);
});
