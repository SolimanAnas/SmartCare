// Records every scene of the SmartCare app promo from the real app, frame by frame.
//   node scripts/record.js            # all scenes
//   node scripts/record.js ecg mega   # just these
// Output: capture/<scene>/fNNNNN.jpg + seg.json (tap positions and marks for the edit).
const path = require('path');
const { launch, scene } = require('./rec');

const OUT = path.join(__dirname, '..', 'capture');

// app.js keeps its quiz state private, so find the right answer with a dry run: the PRNG is seeded,
// so a throwaway context sees the same question, answers it, and reads which option the app marks correct.
async function dryRunCorrect(b, url, setup = async () => {}) {
  const r = await scene(b, OUT, '_dry', url);
  await r.settle(2000);
  await setup(r);
  await r.page.click('.option-btn >> nth=0');
  await r.settle(600);
  const i = await r.page.evaluate(() => [...document.querySelectorAll('.option-btn')].findIndex(e => e.classList.contains('correct')));
  await r.done();
  return i;
}

const SCENES = {
  async home(b) {
    const r = await scene(b, OUT, 'home', 'index.html');
    await r.settle(2500);
    r.start();
    await r.hold(1.2);
    await r.scroll(560, 2.4);
    await r.hold(1.4);
    await r.done();
  },

  async courses(b) {
    const r = await scene(b, OUT, 'courses', 'pages/courses.html');
    await r.settle(2500);
    r.start();
    await r.hold(0.8);
    await r.scroll(1500, 4.2);
    await r.hold(0.6);
    await r.done();
  },

  // Chapter study modes: summary → flashcards → quiz → clinical scenario (chapter 3, Airway).
  async summary(b) {
    const r = await scene(b, OUT, 'summary', 'chapters/c3.html?view=summary');
    await r.settle(2000);
    r.start();
    await r.hold(0.8);
    await r.scroll(420, 1.6);
    await r.hold(0.5);
    await r.done();
  },

  async cards(b) {
    const r = await scene(b, OUT, 'cards', 'chapters/c3.html?view=flashcards');
    await r.settle(2000);
    r.start();
    await r.hold(0.7);
    await r.tap('#flashcard', 'flip');
    await r.hold(1.6);
    await r.done();
  },

  async quiz(b) {
    const setup = async r => { await r.page.click('[data-quiz-size="3"]'); await r.settle(800); };
    const c = await dryRunCorrect(b, 'chapters/c3.html?view=quiz', setup);
    const r = await scene(b, OUT, 'quiz', 'chapters/c3.html?view=quiz');
    await r.settle(2000);
    await setup(r);
    r.start();
    await r.hold(0.9);
    await r.tap(`.option-btn[data-opt-index="${c}"]`, 'answer');
    await r.hold(1.6);
    await r.done();
  },

  async scenario(b) {
    const c = await dryRunCorrect(b, 'chapters/c3.html?view=critical');
    const r = await scene(b, OUT, 'scenario', 'chapters/c3.html?view=critical');
    await r.settle(2000);
    r.start();
    await r.hold(0.9);
    await r.tap(`.option-btn[data-opt-index="${c}"]`, 'answer');
    await r.hold(1.6);
    await r.done();
  },

  // ACLS Megacode, scenario 7 (Crescendo Angina) in Quick Code mode: pick the case, start, read the monitor.
  async mega(b) {
    const r = await scene(b, OUT, 'mega', 'pages/megacode.html');
    await r.settle(2000);
    r.start();
    await r.hold(0.6);
    await r.scrollToEl('.sc-card[data-id="7"]', 220, 1.0);
    await r.tap('.sc-card[data-id="7"]', 'case');
    await r.hold(0.8);
    await r.tap('[data-mode="quick"]', 'quick');
    await r.hold(0.4);
    await r.tap('[data-x="go"]', 'go');
    r.mark('monitor');
    for (let i = 0; i < 400 && !(await r.page.locator('.qo:not([disabled])').count()); i++) await r.frame();
    await r.hold(1.2);
    await r.tap(r.page.locator('.qo:not([disabled])', { hasText: 'Monomorphic VT' }), 'answer');
    await r.hold(1.6);
    await r.done();
  },

  // ECG simulator: live NSR → search the 68-rhythm library → anterior STEMI → 12-lead view.
  async ecg(b) {
    const r = await scene(b, OUT, 'ecg', 'pages/ecg.html');
    await r.settle(2500);
    r.start();
    await r.hold(1.0);
    await r.tap('#pickBtn', 'library');
    await r.hold(0.6);
    await r.page.locator('#libSearch').pressSequentially('VT', { delay: 0 });
    await r.hold(0.5);
    await r.tap('.li[data-key="vt"]', 'vt');
    r.mark('vt');
    await r.hold(1.8);
    await r.tap('#view12', '12lead');
    r.mark('12lead');
    await r.hold(1.8);
    await r.done();
  },

  async resp(b) {
    const r = await scene(b, OUT, 'resp', 'pages/respiratory-patterns.html');
    await r.settle(2000);
    await r.page.locator('.pat[data-key="cheyneStokes"]').click();
    await r.page.evaluate(() => window.scrollTo(0, 0));
    await r.settle(4000);
    r.start();
    await r.hold(3.0);
    await r.done();
  },

  // Prometric Paramedic / EMT exam engine: choose a mode, answer, read the explanation.
  async exam(b) {
    const r = await scene(b, OUT, 'exam', 'src/prometric/exam.html');
    await r.until(() => window.examEngine && getComputedStyle(document.querySelector('#loading-overlay')).display === 'none' || document.querySelector('#loading-overlay')?.hidden);
    await r.settle(800);
    r.start();
    await r.hold(1.4);
    await r.tap('.wizard-next[data-next="2"]', 'next');
    await r.hold(0.5);
    await r.tap('.wizard-next[data-next="3"]', 'next');
    await r.hold(0.5);
    await r.tap('[data-setting="count"][data-value="25"]', 'count');
    await r.hold(0.3);
    await r.tap('#start-exam', 'start');
    await r.hold(1.3);
    const c = await r.page.evaluate(() => examEngine.questions[examEngine.currentIndex].shuffledCorrect);
    await r.tap(r.page.locator('.option-item').nth('ABCD'.indexOf(c)), 'answer');
    await r.hold(0.4);
    await r.tap('#submit-answer', 'submit');
    await r.hold(2.2);
    await r.done();
  },

  // Exam results: a 25-question run (22 right, 3 deliberate misses) on a fake ~45 s/question pace.
  async results(b) {
    const r = await scene(b, OUT, 'results', 'src/prometric/exam.html');
    await r.until(() => window.examEngine && getComputedStyle(document.querySelector('#loading-overlay')).display === 'none');
    await r.settle(600);
    const p = r.page;
    await p.click('.wizard-next[data-next="2"]'); await r.settle(300);
    await p.click('.wizard-next[data-next="3"]'); await r.settle(300);
    await p.click('[data-setting="count"][data-value="25"]');
    await p.click('#start-exam'); await r.settle(1200);
    const n = await p.evaluate(() => examEngine.questions.length);
    for (let i = 0; i < n; i++) {
      const c = await p.evaluate(() => examEngine.questions[examEngine.currentIndex].shuffledCorrect);
      const pick = [3, 11, 19].includes(i) ? 'ABCD'[('ABCD'.indexOf(c) + 1) % 4] : c;
      await r.advance(30000 + (i * 7919) % 30000);
      await p.locator('.option-item').nth('ABCD'.indexOf(pick)).click();
      await p.click('#submit-answer'); await r.advance(8000);
      await p.click('#submit-answer'); await r.advance(500);
    }
    await r.settle(2000);
    await p.evaluate(() => window.scrollTo(0, 0));
    await r.settle(300);
    r.start();
    await r.hold(1.6);
    await r.scroll(700, 1.8);
    await r.hold(0.6);
    await r.done();
  },

  async planner(b) {
    const r = await scene(b, OUT, 'planner', 'pages/prometric-planner.html');
    await r.settle(1500);
    const p = r.page;
    await p.fill('#examDate', '2026-12-22');
    await p.locator('#examDate').dispatchEvent('change');
    r.start();
    await r.hold(0.6);
    await r.tap('#daysPerWeek .chip[data-val="6"]', 'days');
    await r.hold(0.3);
    await r.tap('#minsPerDay .chip[data-val="90"]', 'mins');
    await r.hold(0.3);
    await r.tap(p.getByRole('button', { name: /Generate my study plan/i }), 'generate');
    await r.hold(0.4);
    await r.scroll(0, 0.6);
    await r.hold(0.8);
    await r.scroll(520, 1.4);
    await r.hold(0.6);
    await r.done();
  },

  // EMS tools grid, then the START triage tool.
  async tools(b) {
    const r = await scene(b, OUT, 'tools', 'pages/ems-tools.html');
    await r.settle(2000);
    r.start();
    await r.hold(1.0);
    await r.scroll(300, 1.2);
    await r.hold(0.5);
    await r.tap('.tool-card[onclick="openStart()"]', 'start');
    await r.hold(1.6);
    await r.done();
  },

  async drug(b) {
    const r = await scene(b, OUT, 'drug', 'pages/drug-calculator.html');
    await r.settle(2000);
    r.start();
    await r.hold(0.8);
    await r.tap('[data-drug="Epinephrine (Adrenaline)"]', 'drug');
    await r.hold(0.8);
    await r.tap('#ac-1_3_years', 'age');
    await r.hold(2.0);
    await r.done();
  },

  async aha(b) {
    const r = await scene(b, OUT, 'aha', 'pages/aha.html');
    await r.settle(2500);
    r.start();
    await r.hold(0.6);
    await r.scroll(560, 1.2);
    await r.hold(0.3);
    await r.tap(r.page.locator('.algo-card', { hasText: 'Adult VF / pVT' }), 'algo');
    await r.hold(2.0);
    await r.done();
  },

  // MCI reviewer: timed, game-style triage drill (chapter 6, START & JumpSTART).
  async mci(b) {
    const setup = async r => {
      await r.until(() => document.querySelectorAll('#tabs .tab').length > 3);
      await r.page.locator('#tabs .tab', { hasText: 'Drill' }).click();
      await r.settle(500);
      await r.page.locator('[data-drill]').first().click();
      await r.settle(500);
    };
    const d = await (async () => {
      const r = await scene(b, OUT, '_dry', 'courses/mci/index.html#c06');
      await setup(r);
      await r.page.locator('.dr-opt').first().click();
      await r.settle(400);
      const k = await r.page.evaluate(() => document.querySelector('.dr-opt.correct')?.dataset.k);
      await r.done();
      return k;
    })();
    const r = await scene(b, OUT, 'mci', 'courses/mci/index.html#c06');
    await setup(r);
    await r.page.evaluate(() => document.querySelector('.dr-card')?.scrollIntoView({ block: 'start' }));
    await r.settle(200);
    r.start();
    await r.hold(1.6);
    await r.tap(`.dr-opt[data-k="${d}"]`, 'answer');
    await r.hold(1.8);
    await r.done();
  },

  // Home: search every chapter, then flip through the themes.
  async search(b) {
    const r = await scene(b, OUT, 'search', 'index.html');
    await r.settle(2500);
    r.start();
    await r.hold(0.5);
    await r.tap('#searchInput', 'search');
    for (const ch of 'anaphylaxis') { await r.page.keyboard.type(ch); await r.hold(0.07); }
    await r.hold(1.6);
    await r.done();
  },

  async themes(b) {
    const r = await scene(b, OUT, 'themes', 'index.html');
    await r.settle(2500);
    r.start();
    await r.hold(0.6);
    for (let i = 0; i < 5; i++) {
      await r.tap('#themeToggle', 'theme');
      await r.hold(0.75);
    }
    await r.done();
  },

  async ecgcourse(b) {
    const r = await scene(b, OUT, 'ecgcourse', 'pages/ECG-study.html');
    await r.settle(2500);
    r.start();
    await r.hold(0.8);
    await r.scroll(700, 2.0);
    await r.hold(0.5);
    await r.done();
  },
};

(async () => {
  const want = process.argv.slice(2);
  const b = await launch();
  for (const [k, fn] of Object.entries(SCENES)) if (!want.length || want.includes(k)) await fn(b);
  await b.close();
  require('fs').rmSync(path.join(OUT, '_dry'), { recursive: true, force: true });
})();
