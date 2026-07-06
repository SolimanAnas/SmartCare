import { test, expect } from '@playwright/test';

// Functional check for a fix in sw.js: the three caching strategies
// (networkFirst, staleWhileRevalidate, cacheFirst) used to write to the
// cache in a fire-and-forget promise, not wrapped in event.waitUntil() —
// the browser is free to terminate a service worker as soon as its
// respondWith() promise resolves, so a background cache.put() could get
// cut short before it finished. Fixed by threading `event` through each
// strategy and wrapping the background write in event.waitUntil(). This
// test exercises the actual outcome: fetch something not already
// precached, then immediately confirm it's servable offline.

test('a fresh (non-precached) resource fetched via SWR becomes available offline immediately after', async ({ page, context }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    await navigator.serviceWorker.register('sw.js');
    await navigator.serviceWorker.ready;
  });
  await page.waitForTimeout(2000);

  // c1.html is precached but its "?section=" query variants get fetched
  // live via networkFirst/SWR the first time — good stand-in for "a
  // same-origin app-shell asset not already in the cache".
  const url = 'chapters/c1.html?view=summary&section=c1s3';
  await page.goto(url, { waitUntil: 'networkidle' });

  await context.setOffline(true);
  const resp = await page.goto(url);
  expect(resp).not.toBeNull();
  expect(resp.status()).toBe(200);
});
