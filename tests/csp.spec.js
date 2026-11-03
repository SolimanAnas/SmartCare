import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Every page GitHub Pages publishes must carry a Content-Security-Policy meta
// tag (Pages can't send headers), and loading it must not trigger a single
// CSP violation. When a page starts using a new external origin, this test
// fails until the page's policy allows it.

const ROOT = path.resolve(__dirname, '..');
// Mirrors .pagesignore: folders that are never published.
const SKIP_DIRS = new Set([
  '.git', '.github', 'node_modules', 'tests', 'scripts', 'supabase', 'docs',
  'reports', 'pdf_sections', '_archive', 'content_starters_backup', '.graphify',
  'graphify-out', 'playwright-report', 'test-results', 'venv', '.venv',
]);

function publishedPages(dir = ROOT, rel = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') && entry.isDirectory()) continue;
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) out.push(...publishedPages(path.join(dir, entry.name), relPath));
    } else if (entry.name.endsWith('.html') && relPath !== 'graphify.html') {
      out.push(relPath);
    }
  }
  return out.sort();
}

const PAGES = publishedPages();

test('there are pages to check', () => {
  expect(PAGES.length).toBeGreaterThan(50);
});

for (const rel of PAGES) {
  test(`CSP: ${rel}`, async ({ page }) => {
    const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    expect(html, `${rel} has no Content-Security-Policy meta tag`).toMatch(
      /<meta[^>]+http-equiv=["']Content-Security-Policy["']/i,
    );

    const violations = [];
    await page.exposeFunction('__cspViolation', v => violations.push(v));
    await page.addInitScript(() => {
      document.addEventListener('securitypolicyviolation', e => {
        window.__cspViolation(`${e.effectiveDirective} blocked ${e.blockedURI || '(inline)'}`);
      });
    });
    page.on('console', m => {
      if (/Content Security Policy/i.test(m.text())) violations.push(m.text());
    });

    await page.goto(`/${rel}`, { waitUntil: 'load' });
    await page.waitForTimeout(500);
    expect(violations, `CSP violations on ${rel}`).toEqual([]);
  });
}
