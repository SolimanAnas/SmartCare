// Leaderboard: the "High score 🎊" toast (pages/high-score.js) and the public
// board (pages/leaderboard.html). Supabase is never contacted for real — REST
// reads are fulfilled from a fixture, and the guest path needs no network.
const { test, expect } = require('@playwright/test');

const ROWS = [
  { user_id: 'u1', test_id: 'mc-exam-1', test_label: 'Megacode 1 · Bradycardia', score: 100, questions: null, achieved_at: '2026-10-01T10:00:00Z', leaderboard_players: { display_name: 'Alice' } },
  { user_id: 'u2', test_id: 'mc-exam-1', test_label: 'Megacode 1 · Bradycardia', score: 95, questions: null, achieved_at: '2026-10-02T10:00:00Z', leaderboard_players: { display_name: 'Bob' } },
  { user_id: 'u2', test_id: 'mc-exam-2', test_label: 'Megacode 2 · VF', score: 90, questions: null, achieved_at: '2026-10-03T10:00:00Z', leaderboard_players: { display_name: 'Bob' } },
  { user_id: 'u3', test_id: 'mc-quick-2', test_label: 'Megacode 2 · VF (Quick Code)', score: 88, questions: null, achieved_at: '2026-10-04T10:00:00Z', leaderboard_players: { display_name: '<img src=x onerror=window.__xss=1>' } },
];

async function mockBoard(page, rows = ROWS) {
  await page.route('**/rest/v1/leaderboard_scores**', route => route.fulfill({
    status: 200, contentType: 'application/json', body: JSON.stringify(rows),
  }));
}

test('high score toast only shows for qualifying, new-best results', async ({ page }) => {
  await page.goto('pages/acls.html');
  await page.evaluate(() => localStorage.clear());
  const r = await page.evaluate(() => {
    const H = window.SmartCareHighScore;
    const base = { section: 'courses', testId: 'acls-acls-exam', testLabel: 'ACLS Exam', questions: 25 };
    return {
      low: H._qualifies({ ...base, score: 84 }),
      short: H._qualifies({ ...base, score: 100, questions: 10 }),
      megacodeNoQs: H._qualifies({ section: 'megacode', testId: 'mc-exam-1', testLabel: 'MC 1', score: 85 }),
      ok: H._qualifies({ ...base, score: 85 }),
      badSection: H._qualifies({ ...base, section: 'nope', score: 99 }),
      slug: H.slug('Pre-Test — 8th Edition'),
    };
  });
  expect(r).toEqual({ low: false, short: false, megacodeNoQs: true, ok: true, badSection: false, slug: 'pre-test-8th-edition' });

  // Already published 95 → a 90 isn't a new best, a 97 is.
  await page.evaluate(() => localStorage.setItem('smartcare_leaderboard_published', JSON.stringify({ 'courses:acls-acls-exam': 95 })));
  expect(await page.evaluate(() => SmartCareHighScore._qualifies({ section: 'courses', testId: 'acls-acls-exam', score: 90, questions: 25 }))).toBe(false);
  expect(await page.evaluate(() => SmartCareHighScore._qualifies({ section: 'courses', testId: 'acls-acls-exam', score: 97, questions: 25 }))).toBe(true);
});

test('submitting a high-scoring course exam pops the toast; guests are routed to sign in', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('pages/acls.html');
  await page.evaluate(() => localStorage.clear());

  await page.evaluate(async () => {
    setModeUI('exam');
    document.getElementById('qCount').value = '25';
    await startExam('../src/ACLS/acls.json', 'ACLS Exam');
    ST.qs.forEach(q => { ST.answers[q.id] = q.correct_answer; });
    submitExam();
  });

  const toast = page.locator('.schs');
  await expect(toast).toBeVisible();
  await expect(toast).toContainText('High score');
  await expect(toast).toContainText('100% · ACLS Exam');

  await toast.getByRole('button', { name: /Publish to leaderboard/ }).click();
  const signIn = toast.getByRole('link', { name: 'Sign in & publish' });
  await expect(signIn).toBeVisible({ timeout: 15000 });
  expect(await signIn.getAttribute('href')).toMatch(/pages\/login\.html\?next=leaderboard\.html$/);

  const pending = await page.evaluate(() => JSON.parse(localStorage.getItem('leaderboard.pending')));
  expect(pending.entry).toMatchObject({ section: 'courses', testId: 'acls-acls-exam', score: 100, questions: 25 });
  expect(errors).toEqual([]);
});

test('study mode and low scores never pop the toast', async ({ page }) => {
  await page.goto('pages/acls.html');
  await page.evaluate(() => localStorage.clear());
  await page.evaluate(async () => {
    setModeUI('study');
    document.getElementById('qCount').value = '25';
    await startExam('../src/ACLS/acls.json', 'ACLS Exam');
    ST.qs.forEach(q => { ST.answers[q.id] = q.correct_answer; });
    submitExam();
  });
  await expect(page.locator('#resultsScreen')).toHaveClass(/active/);
  await expect(page.locator('.schs')).toHaveCount(0);
});

test('leaderboard ranks each section separately and escapes names', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await mockBoard(page);
  await page.goto('pages/leaderboard.html?section=megacode');

  // Overall: Bob (2 high scores) > Alice (1 @ 100) > u3 (1 @ 88).
  const podium = page.locator('.podium .pod');
  await expect(podium).toHaveCount(3);
  await expect(page.locator('.pod.p1')).toContainText('Bob');
  await expect(page.locator('.pod.p1')).toContainText('2 high scores');
  await expect(page.locator('.pod.p2')).toContainText('Alice');
  await expect(page.locator('.pod.p3')).toContainText('<img src=x onerror=window.__xss=1>');
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();

  // One test: best score first.
  await page.selectOption('#testSel', 'mc-exam-1');
  await expect(page.locator('#board')).not.toContainText('<img');
  const rows = page.locator('#board .row-i');
  await expect(rows).toHaveCount(2);
  await expect(rows.nth(0)).toContainText('Alice');
  await expect(rows.nth(0)).toContainText('100%');
  await expect(rows.nth(1)).toContainText('Bob');

  // Sections are independent boards.
  await page.unroute('**/rest/v1/leaderboard_scores**');
  await mockBoard(page, []);
  await page.getByRole('tab', { name: /Prometric/ }).click();
  await expect(page.getByRole('tab', { name: /Prometric/ })).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#board')).toContainText('No high scores yet');
  await expect(page.locator('#rule')).toContainText('Prometric');
  expect(errors).toEqual([]);
});

test('leaderboard shows a pending guest score with a sign-in button', async ({ page }) => {
  await mockBoard(page);
  await page.goto('pages/leaderboard.html');
  await page.evaluate(() => localStorage.setItem('leaderboard.pending', JSON.stringify({
    entry: { section: 'prometric', testId: 'prometric-emt', testLabel: 'Prometric · EMT', score: 91, questions: 50 },
    at: Date.now(),
  })));
  await page.reload();
  const box = page.locator('#pending');
  await expect(box).toBeVisible();
  await expect(box).toContainText('91% · Prometric · EMT');
  await expect(box.getByRole('link', { name: 'Sign in & publish' })).toHaveAttribute('href', 'login.html?next=leaderboard.html');
  // Opens on the pending score's own section.
  await expect(page.getByRole('tab', { name: /Prometric/ })).toHaveAttribute('aria-selected', 'true');

  await box.getByRole('button', { name: 'Discard' }).click();
  await expect(box).toBeHidden();
});

test('leaderboard has no horizontal overflow at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await mockBoard(page);
  await page.goto('pages/leaderboard.html?section=megacode');
  await expect(page.locator('.podium')).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test('signed-in users name themselves once, then publish from the toast', async ({ page }) => {
  // Stand-in for pages/supabase-client.js: high-score.js uses an existing
  // window.SmartCareCloud instead of lazy-loading the real one.
  await page.addInitScript(() => {
    window.__submitted = [];
    window.SmartCareCloud = {
      getUser: () => Promise.resolve({ id: 'u9', user_metadata: { full_name: 'Dana Medic' } }),
      getLeaderboardName: () => Promise.resolve(null),
      submitHighScore: e => { window.__submitted.push(e); return Promise.resolve(true); },
    };
  });
  await page.goto('pages/megacode.html');
  await page.evaluate(() => localStorage.clear());
  await page.evaluate(() => SmartCareHighScore.report({ section: 'megacode', testId: 'mc-exam-4', testLabel: 'Megacode 4 · PEA', score: 92 }));

  const toast = page.locator('.schs');
  await toast.getByRole('button', { name: /Publish to leaderboard/ }).click();
  const name = toast.getByLabel(/Name shown on the leaderboard/);
  await expect(name).toHaveValue('Dana Medic');
  await name.fill('  Dana  ');
  await toast.getByRole('button', { name: 'Publish' }).click();
  await expect(toast).toContainText('You’re on the board, Dana!');
  await expect(toast.getByRole('link', { name: 'View leaderboard' })).toHaveAttribute('href', /leaderboard\.html\?section=megacode$/);

  const sent = await page.evaluate(() => window.__submitted);
  expect(sent).toEqual([{ section: 'megacode', testId: 'mc-exam-4', testLabel: 'Megacode 4 · PEA', score: 92, questions: null, name: 'Dana' }]);
  // Remembered as published → the same score won't be offered again.
  expect(await page.evaluate(() => SmartCareHighScore._qualifies({ section: 'megacode', testId: 'mc-exam-4', score: 92 }))).toBe(false);
});
