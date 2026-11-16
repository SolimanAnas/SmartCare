# Node Description Batch 7 of 63

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "prometric_exam_examengine_startexam": ".startExam()" | kind=code-symbol | source=src/prometric/exam.js:L527 | neighbors=[ExamEngine, .beginSession(), .filterQuestions(), .orderPool(), .updateAvailableCount(), .buildNavigator()] | lang=en
- "vendor_chart_4_5_1_umd_min_sn_each": "._each()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, .add(), .addControllers(), .addElements(), .addPlugins(), .addScales()] | lang=en
- "vendor_chart_4_5_1_umd_min_wa_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, ki(), n(), Si(), Ta(), ._createItems()] | lang=en
- "vendor_supabase_js_2_110_0_callrefreshtoken": "_callRefreshToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _debug(), Kt(), _notifyAllSubscribers(), _refreshAccessToken(), _removeSession()] | lang=en
- "vendor_supabase_js_2_110_0_isconnected": "isConnected()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, canPush(), connect(), flushSendBuffer(), _handleNodeJsRaceCondition(), connectionState()] | lang=en
- "vendor_supabase_js_2_110_0_on": "on()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), build(), isJoined(), isJoining(), log()] | lang=en
- "vendor_supabase_js_2_110_0_recoverandrefresh": "_recoverAndRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, initialize(), _onVisibilityChanged(), bt(), _callRefreshToken(), _debug()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithsolana": "signInWithSolana()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, decode(), encode(), join(), m(), _notifyAllSubscribers()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0275018a2a311d203486773a2d00f1991e1aa1c8": "0275018 layout fix 🔥" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@036671140919a7f04fad56697aaca3eb57cab3f0": "0366711 ECG Fixed ✅ Crisp waveform ⭐" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 2b928c2 ECG Simulator: downloadable rhy…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@03d0cadfaed45183a2e1a802c603b879d6d3ec02": "03d0cad Update ecg.html" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0588b953be3cd9290956d8ad72efa143890dec1b": "0588b95 Update styles.css ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@059df1ba6a204ca8f88626bb10d274ad8e218394": "059df1b SOP updated 🔥✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05bf1a891fec8750d495833c18b6ba4d181690ff": "05bf1a8 Update courses.html 👍" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@05dca1e75ebf704b906e2bd88c7d689a4434506d": "05dca1e Add Google Play preview cut of the Megacode promo" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 7421ea4 Megacode cinematic promo] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@095f95c88d1d8546f9490396fed3753d9add2491": "095f95c Update ecg.html" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0a261809777131229afe724574981fcd785ba76e": "0a26180 Update ecg-engine.js" | kind=Commit | source=git | neighbors=[095f95c Update ecg.html, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@1312361be7217426b985e81599ca71121a1cd3af": "1312361 deps(deps): bump flask-limiter from 3.9.0 to 4.1.1 (#6)" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@13162ef816cc130a27aa5872a5624d36179c18e7": "13162ef Unified Style✅⭐" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@14bac52a782ca2e2c6e0f13e1c3bac0ffdbf626e": "14bac52 Rewrite chapter 9 (Emergency Pharmacology) as guides" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1571a9df05c662fa8c333a95455af7dc1bf8b002": "1571a9d Assessment  Added ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@15cf55dcf1383e430a199006bdf1d080e85336cb": "15cf55d Update ecg-engine.js" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@176d26407954ee009039e3984b6b452adab4de71": "176d264 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1b4fd7daa77350c3ae81836a601714e7057064ec": "1b4fd7d PR #42 Add animated dose-calculator illustration to calculator pages" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 1c05231 Fix layout issues found in a mo…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@23060c04d7670be603a3f4f724158d8558d896fa": "23060c0 Integrate BLS reviewer into platform (courses page, precache, sitemap)" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 82ff814 Add Playwright smoke test for B…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2455787d4095aa1fdd4e4d03ed2080a998d9c524": "2455787 Update index.html 💊" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2520f226ef5688df0e156ca844bfa0f76cfd81e5": "2520f22 Secure SDLC Phase 2 cont.: XSS hardening + CSRF protection" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@266c2ed570387416999830d96487f11d2830d266": "266c2ed Add server.py and server.bat to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@291f91326d1edb0b84f55706929ea98d3c51b825": "291f913 Answers Corrected ✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2a89ecb420716ea3c8e1986113d043b4c80ec796": "2a89ecb fix(ui): add kbd key styling, clean up footer hint separators" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@2b928c26d4e6ba57696f3697cf952536077da595": "2b928c2 ECG Simulator: downloadable rhythm reference PDF" | kind=Commit | source=git | neighbors=[0366711 ECG Fixed ✅ Crisp waveform ⭐, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2f06b846b938f65b7b61643d8f3fc34bbcfc9540": "2f06b84 fix text contrast: bump text-secondary for readability; add dark-theme …" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2fabb59f97b4c183f82310ea9fb87eafc61ffb85": "2fabb59 fix(exam): use innerHTML for SVG pass/fail indicator in prometric exam …" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@312f7b961a8f3bfe088bae0419839b02fbfec4df": "312f7b9 PR #46 Audience levels" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 734b6ca Prometric exam: add an Exam Lev…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@32fc6dae772cc257ea8f48c955d9a975b556a59c": "32fc6da new index" | kind=Commit | source=git | neighbors=[0275018 layout fix 🔥, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@354c93e156c8d4542484d91a39703a494bfa6455": "354c93e fix: restore server.py to repo (CI needs it for tests and Bandit)" | kind=Commit | source=git | neighbors=[266c2ed Add server.py and server.bat to…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@35ac6663bb7ca30026160d64d91183c7253fbd01": "35ac666 Rewrite chapter 5 (Medical Emergencies) as guides" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 0159986 Chapter 5 rewrite: Medical Emer…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@395d37d5aa0920c4df09d31a1953a28e9897c42a": "395d37d Update ems-tools.html ▶️" | kind=Commit | source=git | neighbors=[26a1bc4 Adding O2 Cylinder Calculator ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3af30adc0b69a399b29eeea793e2aa0cc51d15c1": "3af30ad Update styles.css" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3d93108d2b7a6c57d72c49b002b0e0712e5f26dd": "3d93108 Delete server.py" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-006.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
