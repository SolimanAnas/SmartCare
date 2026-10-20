import { test, expect } from '@playwright/test';

// Smoke test for the MCI course reviewer (courses/mci/index.html).
// Verifies the app boots from data/bundle.js (window.MCI_DATA), renders the
// 14-chapter sidebar and all content tabs (incl. the MCI-only Drill tab),
// grades a quiz answer, plays a drill round to the results screen, and stays
// free of horizontal overflow on phones. Modeled on the Medical/BDLS specs.

test('MCI reviewer boots and renders sidebar + first chapter', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });

  const hasData = await page.evaluate(() => !!(window.MCI_DATA && window.MCI_DATA.manifest));
  expect(hasData).toBe(true);

  await expect(page.locator('#chapters .chap')).toHaveCount(14);
  await expect(page.locator('#ctitle')).toContainText('MCI Fundamentals');
});

test('a chapter link (#c06) opens the reviewer at that chapter', async ({ page }) => {
  await page.goto('courses/mci/index.html#c06', { waitUntil: 'networkidle' });
  await expect(page.locator('#ctitle')).toContainText('START');
  await expect(page.locator('#chapters .chap.active')).toContainText('START & JumpSTART');
});

test('MCI reviewer exposes all seven content tabs', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
  const tabs = page.locator('#tabs .tab');
  await expect(tabs).toHaveCount(7);
  const labels = (await tabs.allTextContents()).join(' ');
  for (const t of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables', 'Drill']) {
    expect(labels).toContain(t);
  }
});

test('MCI reviewer quiz tab renders questions and grades an answer', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
  await page.locator('#tabs .tab', { hasText: 'Quiz' }).click();
  expect(await page.locator('.q-card').count()).toBeGreaterThan(0);
  await page.locator('.q-card').first().locator('.opt').first().click();
  await expect(page.locator('.rationale.show').first()).toBeVisible();
});

test('MCI triage drill plays through to a results screen', async ({ page }) => {
  await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
  await page.locator('#chapters .chap', { hasText: 'START & JumpSTART' }).click();
  await expect(page.locator('#ctitle')).toContainText('START');
  await page.locator('#tabs .tab', { hasText: 'Drill' }).click();
  await page.locator('[data-drill]').first().click();

  const rounds = await page.evaluate(() => window.MCI_DATA.drills.c06.drills[0].items.length);
  for (let i = 0; i < rounds; i++) {
    await page.locator('.dr-opt').first().click();
    await expect(page.locator('.dr-fb')).toBeVisible();
    await page.locator('#drNext').click();
  }
  await expect(page.locator('.dr-end .score')).toBeVisible();
  await expect(page.locator('.dr-end .rank')).not.toBeEmpty();
});

// Mobile regression guard (shared shell): no page-level horizontal overflow on
// a table-heavy chapter across every tab, including an active drill round.
for (const vp of [{ w: 360, h: 740 }, { w: 320, h: 568 }]) {
  test(`MCI reviewer has no horizontal overflow at ${vp.w}px`, async ({ page }) => {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.goto('courses/mci/index.html', { waitUntil: 'networkidle' });
    await page.locator('#chapters .chap', { hasText: 'Chemical Agents' }).first().click();
    const overflow = () => page.evaluate(() => {
      const d = document.scrollingElement;
      return d.scrollWidth - d.clientWidth;
    });
    for (const tab of ['Summary', 'Flashcards', 'Quiz', 'Scenarios', 'Algorithms', 'Tables', 'Drill']) {
      await page.locator('#tabs .tab', { hasText: tab }).click();
      if (tab === 'Drill') await page.locator('[data-drill]').first().click();
      const o = await overflow();
      expect(o, `${tab} tab overflows by ${o}px at ${vp.w}px`).toBeLessThanOrEqual(1);
    }
  });
}

// Exam page (pages/mci.html): all three banks are offered, the question-count
// buttons slice the set, and an exam can be answered and submitted through to
// the results screen.
test('MCI exam page lists all banks and runs a 20-question exam to results', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('pages/mci.html', { waitUntil: 'networkidle' });
  await expect(page.locator('#bankSeg button')).toHaveText(['Exam 1', 'Exam 2', 'Practice']);

  await page.locator('#modeExamBtn').click(); // Study mode (default) hides End/Submit
  await page.locator('#qSeg button[data-n="20"]').click();
  await page.locator('#bankSeg button', { hasText: 'Exam 1' }).click();
  await page.locator('#startBtn').click();
  await expect(page.locator('#examScreen')).toBeVisible();
  await expect(page.locator('#examName')).toHaveText('MCI Exam 1');
  await expect(page.locator('#qBadge')).toHaveText('Question 1 of 20');

  for (let i = 0; i < 20; i++) {
    await page.locator('#optsList .opt-wrap').first().click();
    if (i < 19) await page.locator('#nextBtn').click();
  }
  await page.locator('#endBtn').click();
  await page.locator('#endModal .mbtn-submit').click();
  await expect(page.locator('#resultsScreen')).toBeVisible();
  expect(errors).toEqual([]);
});

test('MCI practice bank loads all generated reviewer questions', async ({ page }) => {
  await page.goto('pages/mci.html', { waitUntil: 'networkidle' });
  await page.locator('#bankSeg button', { hasText: 'Practice' }).click();
  await page.locator('#qSeg button[data-n="9999"]').click();
  await page.locator('#startBtn').click();
  await expect(page.locator('#examScreen')).toBeVisible();
  const total = await page.evaluate(async () => (await (await fetch('../src/MCI/MCI-practice.json')).json()).questions.length);
  await expect(page.locator('#qBadge')).toHaveText(`Question 1 of ${total}`);
});

// The START triage and METHANE tools open inside the page, and Back (the
// page's own arrow or the browser's) returns to the MCI home.
test('MCI field tools open in the page and Back returns home', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('pages/mci.html', { waitUntil: 'networkidle' });

  await page.locator('a.tool-tile[href="#start-triage"]').click();
  await expect(page.locator('#toolTitleText')).toHaveText('START triage');
  for (let i = 0; i < 3; i++) await page.locator('[data-st="no"]').click();
  await expect(page.locator('.st-cat')).toHaveText('Expectant');
  await page.locator('.tool-back').click();
  await expect(page.locator('#selectorScreen')).toBeVisible();

  await page.locator('a.tool-tile[href="#methane"]').click();
  await expect(page.locator('#toolTitleText')).toHaveText('METHANE report');
  await page.locator('[data-multi="type"] button', { hasText: 'Explosion' }).click();
  await expect(page.locator('#mtReport')).toContainText('T - Type of incident: Explosion');
  await page.goBack();
  await expect(page.locator('#selectorScreen')).toBeVisible();
  expect(errors).toEqual([]);
});
