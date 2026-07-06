import { test, expect } from '@playwright/test';

test('med-index.html: drug= URL param cannot inject script via XSS payload', async ({ page }) => {
  let alertFired = false;
  page.on('dialog', async (dialog) => {
    alertFired = true;
    await dialog.dismiss();
  });

  const payload = '<img src=x onerror=alert(document.cookie)>';
  await page.goto('pages/med-index.html?drug=' + encodeURIComponent(payload), { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  expect(alertFired).toBe(false);

  // The payload should render as literal escaped text, not as a live <img> tag.
  const injectedImg = await page.locator('.es-title img').count();
  expect(injectedImg).toBe(0);

  const titleText = await page.locator('.es-title').textContent();
  expect(titleText).toContain('<img src=x onerror=alert(document.cookie)>');
});
