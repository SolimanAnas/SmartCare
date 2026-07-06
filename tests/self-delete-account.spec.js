import { test, expect } from '@playwright/test';

// Regression test for a real bug: pages/login.html's "Delete my account"
// button used to call the Flask-backed DELETE /api/account (server.py).
// The production build serves purely static pages via GitHub Pages, with
// no Flask backend deployed anywhere reachable from the client, so that
// fetch silently failed there — account deletion was completely broken in
// production. Fixed by adding a Supabase Edge Function
// (supabase/functions/self-delete-account) and pointing the client at it,
// the same way pages/admin.html already reaches the admin-* functions.

test('delete-account button calls the self-delete-account Edge Function, not /api/account', async ({ page }) => {
  const requestedUrls = [];
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('/functions/v1/') || url.includes('/api/account')) {
      requestedUrls.push({ url, method: route.request().method(), headers: route.request().headers() });
      return route.fulfill({ status: 500, body: JSON.stringify({ error: 'stubbed' }) });
    }
    return route.continue();
  });

  await page.goto('pages/login.html', { waitUntil: 'networkidle' });

  // Force the signed-in view and stub a fake access token — this test only
  // needs to observe which URL the delete button calls, not exercise a real
  // Supabase sign-in.
  await page.evaluate(() => {
    document.getElementById('signedOut').classList.add('hidden');
    document.getElementById('signedIn').classList.remove('hidden');
    window.SmartCareCloud.getAccessToken = () => Promise.resolve('fake-jwt-token');
  });

  page.once('dialog', (dialog) => dialog.accept('DELETE'));
  await page.locator('#deleteAccountBtn').click();

  await expect.poll(() => requestedUrls.length).toBeGreaterThan(0);

  const call = requestedUrls[0];
  expect(call.url).toContain('/functions/v1/self-delete-account');
  expect(call.url).not.toContain('/api/account');
  expect(call.method).toBe('DELETE');
  expect(call.headers['authorization']).toBe('Bearer fake-jwt-token');
  expect(call.headers['apikey']).toBeTruthy();
});
