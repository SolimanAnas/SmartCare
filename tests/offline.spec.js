import { test, expect } from '@playwright/test';

// Guards the actual promise behind the "offline-capable PWA" claim: the
// service worker must install every precache-manifest.js entry without
// failures, and a representative set of pages/assets must still respond
// once the network is cut. Regression test for two real incidents this
// session: pages/GCS.html was silently missing from the old hand-maintained
// PRE_CACHE list, and the Supabase SDK previously came from a CDN that's
// unreachable offline.

const KEY_PAGES = [
  '/',
  'chapters/c1.html?view=summary',
  'pages/admin.html',
  'pages/GCS.html',
  'pages/drug-calculator.html',
];

const VENDORED_ASSETS = [
  'vendor/chart-4.5.1.umd.min.js',
  'vendor/supabase-js-2.110.0.mjs',
  'vendor/fontawesome/css/all.min.css',
];

test.describe('offline completeness', () => {
  test('service worker installs every precached entry with zero failures', async ({ page, context }) => {
    const swWarnings = [];
    page.on('console', (msg) => {
      if (msg.text().includes('Pre-cache failed')) swWarnings.push(msg.text());
    });

    await page.goto('/');
    await page.evaluate(async () => {
      const reg = await navigator.serviceWorker.register('sw.js');
      await navigator.serviceWorker.ready;
      return reg.active !== null;
    });
    // Install runs in the background after `ready`; give pre-caching a
    // moment to finish fetching every manifest entry.
    await page.waitForTimeout(3000);

    expect(swWarnings, `service worker failed to pre-cache: ${swWarnings.join(', ')}`).toHaveLength(0);
  });

  test('key pages load offline after the service worker has installed', async ({ page, context }) => {
    await page.goto('/');
    await page.evaluate(async () => {
      await navigator.serviceWorker.register('sw.js');
      await navigator.serviceWorker.ready;
    });
    await page.waitForTimeout(3000);

    await context.setOffline(true);
    for (const path of KEY_PAGES) {
      const resp = await page.goto(path);
      expect(resp, `${path} did not respond offline`).not.toBeNull();
      expect(resp.status(), `${path} returned ${resp.status()} offline`).toBe(200);
    }
  });

  test('vendored third-party assets are servable offline', async ({ page, context }) => {
    await page.goto('/');
    await page.evaluate(async () => {
      await navigator.serviceWorker.register('sw.js');
      await navigator.serviceWorker.ready;
    });
    await page.waitForTimeout(3000);

    await context.setOffline(true);
    const results = await page.evaluate(async (assets) => {
      const out = {};
      for (const url of assets) {
        try {
          out[url] = (await fetch(url)).status;
        } catch (e) {
          out[url] = 'FETCH_FAILED';
        }
      }
      return out;
    }, VENDORED_ASSETS);

    for (const [url, status] of Object.entries(results)) {
      expect(status, `${url} was not servable offline (got ${status})`).toBe(200);
    }
  });
});
