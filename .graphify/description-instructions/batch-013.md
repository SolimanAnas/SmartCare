# Node Description Batch 14 of 62

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

- "vendor_supabase_js_2_110_0_onconnclose": "onConnClose()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, clearHeartbeats(), hasLogger(), log(), scheduleTimeout(), triggerChanError()] | lang=en
- "vendor_supabase_js_2_110_0_onvisibilitychanged": "_onVisibilityChanged()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _handleVisibilityChange(), _acquireLock(), _debug(), _recoverAndRefresh(), _startAutoRefresh()] | lang=en
- "vendor_supabase_js_2_110_0_removesession": "_removeSession()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, _callRefreshToken(), getUser(), __loadSession(), _recoverAndRefresh(), _debug()] | lang=en
- "vendor_supabase_js_2_110_0_sendheartbeat": "sendHeartbeat()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, heartbeatCallback(), heartbeatTimeout(), isConnected(), log(), makeRef()] | lang=en
- "vendor_supabase_js_2_110_0_signout": "signOut()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _handleTokenChanged(), _acquireLock(), join(), m(), _useSession()] | lang=en
- "vendor_supabase_js_2_110_0_signup": "signUp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), re(), _returnResult(), _saveSession()] | lang=en
- "vendor_supabase_js_2_110_0_starttimeout": "startTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, push(), send(), cancelTimeout(), makeRef(), on()] | lang=en
- "vendor_supabase_js_2_110_0_teardown": "teardown()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, disconnect(), heartbeatTimeout(), removeChannel(), destroy(), reset()] | lang=en
- "vendor_supabase_js_2_110_0_x": "x()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _initRealtimeClient(), _initSupabaseAuthClient(), bs(), ki()] | lang=en
- "app_setmaincontent": "setMainContent()" | kind=code-symbol | source=app.js:L517 | neighbors=[app.js, renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav(), initScrollReveal()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@036671140919a7f04fad56697aaca3eb57cab3f0": "0366711 ECG Fixed ✅ Crisp waveform ⭐" | kind=Commit | source=git | neighbors=[main, 2b928c2 ECG Simulator: downloadable rhy…, 437e8d4 Merge pull request #66  ECG, precache-manifest.js, 66d3118 BDLS update ,ECG engine update ✅, 81e5289 ECG Simulator: crisp waveform r…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05dca1e75ebf704b906e2bd88c7d689a4434506d": "05dca1e Add Google Play preview cut of the Megacode promo" | kind=Commit | source=git | neighbors=[main, 7421ea4 Megacode cinematic promo, audio.py, compose.py, qa.py, 2a5f204 Add SmartCare Megacode cinemati…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@14bac52a782ca2e2c6e0f13e1c3bac0ffdbf626e": "14bac52 Rewrite chapter 9 (Emergency Pharmacology) as guides" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, main, cae9224 Chapter 9 rewrite: Emergency Ph…, c9.js, precache-manifest.js, content-guides.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1b4fd7daa77350c3ae81836a601714e7057064ec": "1b4fd7d PR #42 Add animated dose-calculator illustration to calculator pages" | kind=Commit | source=git | neighbors=[main, 1c05231 Fix layout issues found in a mo…, 9fa33da PR #43 Mobile layout fixes acro…, precache-manifest.js, 580d672 Add animated dose-calculator il…, b5294ba PR #41 Redesign formulary overv…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@23060c04d7670be603a3f4f724158d8558d896fa": "23060c0 Integrate BLS reviewer into platform (courses page, precache, sitemap)" | kind=Commit | source=git | neighbors=[main, 82ff814 Add Playwright smoke test for B…, precache-manifest.js, build_precache.py, generate_sitemap.py, e956daa Author BLS chapters c10-c12 (ch…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2b928c26d4e6ba57696f3697cf952536077da595": "2b928c2 ECG Simulator: downloadable rhythm reference PDF" | kind=Commit | source=git | neighbors=[0366711 ECG Fixed ✅ Crisp waveform ⭐, main, 437e8d4 Merge pull request #66  ECG, precache-manifest.js, build_ecg_reference.js, ecg-simulator.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@312f7b961a8f3bfe088bae0419839b02fbfec4df": "312f7b9 PR #46 Audience levels" | kind=Commit | source=git | neighbors=[main, 734b6ca Prometric exam: add an Exam Lev…, 7b23e68 PR #47 Update Question bank, precache-manifest.js, 5f7bbc6 PR #45 Update Log in & Supabase, 68635a5 Rename Prometric EMT Exam to Pr…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@35ac6663bb7ca30026160d64d91183c7253fbd01": "35ac666 Rewrite chapter 5 (Medical Emergencies) as guides" | kind=Commit | source=git | neighbors=[main, 0159986 Chapter 5 rewrite: Medical Emer…, c5.js, precache-manifest.js, content-guides.spec.js, 63e2100 Chapter 4 rewrite: Cardiovascul…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4ccb8df39beb29a7be104defbab78a78df578875": "4ccb8df Merge pull request #9 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[main, 95f6363 Merge pull request #10 from Sol…, c4f8810 Wire admin.html to real app use…, sw.js, a4deb03 Merge pull request #8 from Soli…, b1f4385 Bump service worker cache to v2…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5cfcb956b26e38caf7e3dacd44dc3584b65771a3": "5cfcb95 PR #55 fix Home ring" | kind=Commit | source=git | neighbors=[3f751ad Regenerate precache-manifest.js…, main, 6018c48 PR #57 MCI Exam 1, b890616 Add MCI Exam 1 (core MCI operat…, precache-manifest.js, 7605a9f PR #53 New ribbon to the MEGACO…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f7bbc677ea817063888d9e6e3464e514359008c": "5f7bbc6 PR #45 Update Log in & Supabase" | kind=Commit | source=git | neighbors=[main, 312f7b9 PR #46 Audience levels, 68635a5 Rename Prometric EMT Exam to Pr…, precache-manifest.js, 79ddf21 Use Google's ID-token sign-in s…, 9dca257 PR #44 Redesign SmartCare Cloud…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69ad0559354068097fea7335f58f33b6b903690a": "69ad055 Merge pull request #17 html Clean-up🗑️" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, main, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js, build_precache.py, c9e85ef Deduplicate the 8 standalone ex…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6acd5dce49981e775cd75f9db8362011c0eba9c2": "6acd5dc feat: add SVT rhythm, improve PSVT simulation, add ECG test data" | kind=Commit | source=git | neighbors=[65ac830 feat: restructure Chapter 1 — m…, app.js, main, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6bb10e45a56fa3ca25487aeeeb83f8253cb39129": "6bb10e4 Formulary group D: fluids, glucose, antidotes and obstetric drugs as gu…" | kind=Commit | source=git | neighbors=[main, d01251f Formulary group D (fluids, gluc…, formulary.js, precache-manifest.js, content-guides.spec.js, 8ac7ca0 Formulary group C: sedation, se…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6ee3cd6f216c7bd47a825665b4b1cb27b7af3014": "6ee3cd6 PR #50 acls-megacode-scenarios" | kind=Commit | source=git | neighbors=[main, 62386af PR #51 Megacode 3, f272ce6 Courses page: compact, collapsi…, precache-manifest.js, 700555c #49_2 acls-megacode-scenarios, d37eeda Home: feature ACLS Megacode in …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@734b6caebe1f096db0b08380e1b38f101ed1770e": "734b6ca Prometric exam: add an Exam Level filter and the missing topics" | kind=Commit | source=git | neighbors=[312f7b9 PR #46 Audience levels, main, fa0335e Add 190 paramedic-level (ALS) q…, precache-manifest.js, exam.js, prometric.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7605a9f1d52edcc6cebe818da690655f00baaf78": "7605a9f PR #53 New ribbon to the MEGACODE home tab" | kind=Commit | source=git | neighbors=[66b6296 Home: add a NEW corner ribbon t…, main, 5cfcb95 PR #55 fix Home ring, 8253b1e Fix home progress ring overflow…, precache-manifest.js, c8b8f6e PR #52 Improved UI/UX of Course…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@78cc7e6e4e11609130337a8913be7586cdc91f59": "78cc7e6 Rewrite chapter 2 (Patient Assessment) as guides" | kind=Commit | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, main, 7d4e283 Falling consciousness in respir…, c2.js, precache-manifest.js, content-guides.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7d02ca27bc687d7b618c92d793f56853a47d431c": "7d02ca2 Rename drug formulary numbering to plain Drug N, add 10 more medications" | kind=Commit | source=git | neighbors=[467bf94 Restore full M1-38 medication f…, main, be729fd Merge pull request #29 from res…, cb4bd64 Redesign drug monograph pages a…, curriculum-index.js, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7dcb4bd168559d9eef4321ba0424a016783d6794": "7dcb4bd Merge pull request #61 from SolimanAnas/ccr-d2edeac7-v6zk4b" | kind=Commit | source=git | neighbors=[main, 7421ea4 Megacode cinematic promo, build-screenshots.js, capture-screenshots.js, 81f95d0 ⭐PR #60 Unified Course Design s…, c7f6894 Add Google Play screenshot camp…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8389b95c59edd76ff9f9013c3736bd7582f799fa": "8389b95 Redesign formulary overview card; fix card titles never revealing" | kind=Commit | source=git | neighbors=[app.js, main, b5294ba PR #41 Redesign formulary overv…, formulary.js, precache-manifest.js, 8fa52dc  PR #40 Redesign Medication Ind…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8f65c40f16fd546b860ed990a5cbebe84bbf2f73": "8f65c40 Formulary group C: sedation, seizure, airway, pain and nausea drugs as …" | kind=Commit | source=git | neighbors=[main, 3e50ecd Merge remote-tracking branch 'o…, formulary.js, precache-manifest.js, content-guides.spec.js, ff03b3d Formulary group B: respiratory …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8fa52dcab8adc150f2546b05a6a5a806dbce7bc2": "8fa52dc  PR #40 Redesign Medication Index for mobile with animated theme toggle" | kind=Commit | source=git | neighbors=[639f5a4 PR #39 medications-cleanup-xnuh…, 70e6861 Redesign Medication Index for m…, main, 8389b95 Redesign formulary overview car…, b5294ba PR #41 Redesign formulary overv…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b12c8496163af9e2a4ca6f179ac66805c9614ca": "9b12c84 Merge pull request #20" | kind=Commit | source=git | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, main, bdf7315 Add Emil Kowalski design engine…, precache-manifest.js, exam-review-a11y.spec.js, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9dca2579814880105435db4feb3a0d62095e4b7a": "9dca257 PR #44 Redesign SmartCare Cloud page; add local profile name for guests" | kind=Commit | source=git | neighbors=[main, 5f7bbc6 PR #45 Update Log in & Supabase, 79ddf21 Use Google's ID-token sign-in s…, precache-manifest.js, 9fa33da PR #43 Mobile layout fixes acro…, dbf642d Redesign SmartCare Cloud page; …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9fa33dacbb72bdda1b1a53304a6726a965cd6d3b": "9fa33da PR #43 Mobile layout fixes across pages + animated Global Statistics da…" | kind=Commit | source=git | neighbors=[1b4fd7d PR #42 Add animated dose-calcul…, main, 9dca257 PR #44 Redesign SmartCare Cloud…, dbf642d Redesign SmartCare Cloud page; …, precache-manifest.js, a572e0a Redesign Global Statistics as a…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a497e1f84516bd0facac114a3d66e7055ea88113": "a497e1f Rewrite chapter 6 (Trauma Emergencies) as guides" | kind=Commit | source=git | neighbors=[main, e5cb445 Herniation signs: any one sign …, c6.js, precache-manifest.js, content-guides.spec.js, ed28729 Chapter 2 rewrite: Patient Asse…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@acb0328a04314c841d761f093fd6e90643fe1a75": "acb0328 About ✅ Merge pull request #11 from SolimanAnas/claude/chapters-html-su…" | kind=Commit | source=git | neighbors=[70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, main, 5b68bae docs: add comprehensive v2.0 up…, 5f7c4f2 Merge pull request #12 Step 1&2…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ae7e23ef60eff3d44104567cf6d4fae7de61b2b1": "ae7e23e Fix Table of Contents chapters not expanding and white-square artifacts" | kind=Commit | source=git | neighbors=[773db00 Update remaining formulary coun…, app.js, main, 1bd0a15 PR #38 medications-cleanup-xnuh…, c-index.js, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@afeb5dc2f14de51d1103881fbc05d5ac536344e5": "afeb5dc feat: Run Playwright tests in parallel⭐" | kind=Commit | source=git | neighbors=[1fa9c3a Run Playwright tests in parallel, main, 123b1c0 Chapter 10 rewrite: Clinical Pr…, playwright.config.js, megacode.spec.js, cae9224 Chapter 9 rewrite: Emergency Ph…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-013.json

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
