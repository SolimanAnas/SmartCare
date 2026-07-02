import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 10000 },
  fullyParallel: false,
  retries: 1,
  workers: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'http://127.0.0.1:8899',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    // Only set when a pre-installed browser must be used instead of the one
    // `npx playwright install` would fetch (e.g. a sandboxed CI runner with
    // no download access) — normal local/CI runs leave this unset.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : {},
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
  webServer: {
    command: 'python3 -m http.server 8899',
    url: 'http://127.0.0.1:8899',
    reuseExistingServer: !process.env.CI,
    timeout: 15000,
  },
});
