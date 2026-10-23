const { open } = require('./driver');
(async () => {
  const { browser, page } = await open({ dsf: 1 });
  const vt = () => page.evaluate(() => performance.now() / 1000);
  await page.click('#scGrid [data-id="7"]'); await page.clock.runFor(400);
  await page.click('[data-mode="quick"]'); await page.click('[data-x="go"]');
  for (let i = 0; i < 4000; i++) {
    await page.clock.runFor(100);
    const st = await page.evaluate(() => {
      const q = document.querySelector('.qo:not([disabled])');
      const lo = [...document.querySelectorAll('#liteOpts .lo:not([disabled])')].map(b => b.innerText);
      return { quiz: !!q, quizTxt: [...document.querySelectorAll('.qo:not([disabled])')].map(b => b.innerText), lo, q: document.querySelector('#liteQ')?.innerText,
        next: !!document.querySelector('#liteNext:not([disabled])'), end: !!document.querySelector('#liteEnd'), modalOk: !!document.querySelector('[data-x="ok"]'),
        res: !!document.querySelector('.res-banner'), stage: document.querySelector('#monScreen .mon-alarm, .rhy-tag')?.innerText };
    });
    const t = (await vt()).toFixed(1);
    if (st.res) { console.log(t, 'RESULTS'); await page.screenshot({ path: 'capture/x9_res.png', fullPage: false }); break; }
    if (st.quiz) {
      const btns = page.locator('.qo:not([disabled])');
      await btns.first().click(); await page.clock.runFor(50);
      const right = await page.locator('.qo.right').allInnerTexts();
      console.log(t, 'QUIZ', JSON.stringify(st.quizTxt), 'RIGHT', right.join('|'), await page.locator('.quiz-fb').allInnerTexts());
      continue;
    }
    if (st.modalOk) { await page.locator('[data-x="ok"]').last().click(); continue; }
    if (st.lo.length) {
      console.log(t, 'DECISION', st.q, JSON.stringify(st.lo));
      await page.locator('#liteOpts .lo:not([disabled])').first().click(); await page.clock.runFor(50);
      console.log('   picked', st.lo[0], '->', await page.locator('#liteFb').innerText());
      continue;
    }
    if (st.next) { await page.click('#liteNext'); continue; }
    if (st.end) { console.log(t, 'END'); await page.click('#liteEnd'); continue; }
  }
  await browser.close();
})();
