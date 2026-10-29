import { test, expect } from '@playwright/test';

// Home page (index.html): the compact layout, one collapsible group per
// chapter with its topics as rows, search, completion ticks and the
// statistics panel.

function trackErrors(page) {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  return errors;
}

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 780 });
  await page.addInitScript(() => { if (!sessionStorage.getItem('seeded')) { localStorage.clear(); sessionStorage.setItem('seeded', '1'); } });
});

test('every chapter is a group with its topics, and every link opens', async ({ page, request }) => {
  const errors = trackErrors(page);
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await expect(page.locator('details.h-group')).toHaveCount(11);
  await expect(page.locator('.h-row-chapter')).toHaveCount(11);
  const topics = await page.evaluate(() => window.CURRICULUM_INDEX.filter(c => c.id !== 'formulary').reduce((n, c) => n + c.sections.length, 0));
  await expect(page.locator('.h-row:not(.h-row-chapter)')).toHaveCount(topics + 1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  const hrefs = new Set();
  for (const a of await page.locator('.h-row-main, .h-act, a.h-tile, a.h-mega, a.h-link[href], a.h-hero').all()) {
    hrefs.add(new URL(await a.getAttribute('href'), page.url()).href.split('?')[0]);
  }
  for (const href of hrefs) expect((await request.get(href)).status(), href).toBe(200);
  expect(errors).toEqual([]);
});

test('search opens the group with a matching topic and hides the rest', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await page.fill('#searchInput', 'bleeding control');
  const trauma = page.locator('details.h-group[data-group="c6"]');
  await expect(trauma).toHaveAttribute('open', '');
  await expect(page.locator('details.h-group[data-group="c3"]')).toBeHidden();
  await page.click('#searchClearBtn');
  await expect(trauma).not.toHaveAttribute('open', '');
  await expect(page.locator('details.h-group[data-group="c3"]')).toBeVisible();
});

test('ticking a chapter updates the progress bar and its badge, and survives a reload', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  const c4 = page.locator('details.h-group[data-group="c4"]');
  await c4.locator('summary').click();
  await c4.locator('.h-row-chapter .h-check').click();
  await expect(c4).toHaveClass(/is-done/);
  await expect(page.locator('#heroBar')).toHaveAttribute('style', /width:\s*9%/);
  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.locator('details.h-group[data-group="c4"]')).toHaveAttribute('open', '');
  await expect(page.locator('details.h-group[data-group="c4"]')).toHaveClass(/is-done/);
});

test('the statistics row opens the progress panel', async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto('/index.html', { waitUntil: 'networkidle' });
  await page.click('.h-link[data-chapter="statistics"]');
  await expect(page.locator('.gs-sheet')).toBeVisible();
  expect(errors).toEqual([]);
});
