# Node Description Batch 17 of 62

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

- "vendor_supabase_js_2_110_0_onmessage": "onMessage()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, makeRef(), push(), ping(), _setupConnectionHandlers(), trigger()] | lang=en
- "vendor_supabase_js_2_110_0_onopen": "onOpen()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), constructor(), makeRef(), push(), _setupConnectionHandlers()] | lang=en
- "vendor_supabase_js_2_110_0_q": "Q()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, join(), Qr(), rr(), signInWithSolana(), sr()] | lang=en
- "vendor_supabase_js_2_110_0_receive": "receive()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, constructor(), leave(), hasReceived(), push(), subscribe()] | lang=en
- "vendor_supabase_js_2_110_0_register": "_register()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, _challenge(), _enroll(), then(), _verify(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinanonymously": "signInAnonymously()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithidtoken": "signInWithIdToken()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_signinwithpassword": "signInWithPassword()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startpasskeyauthentication": "_startPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startpasskeyregistration": "_startPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_stopautorefresh": "_stopAutoRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, dispose(), _onVisibilityChanged(), _startAutoRefresh(), _debug(), _removeVisibilityChangedCallback()] | lang=en
- "vendor_supabase_js_2_110_0_verifyotp": "verifyOtp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_verifypasskeyregistration": "_verifyPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()] | lang=en
- "app_switchsection": "switchSection()" | kind=code-symbol | source=app.js:L456 | neighbors=[app.js, bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@03f6898862ab5b7297cba7df54116f3ce9035b9d": "03f6898 Update sw.js" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c2479e9 Adding ECG & Drug calc 👍❤️💊, sw.js, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@05afd154bc1cce4ecfa6d4ad627b1c2e0615dd59": "05afd15 Cap IV diazepam and midazolam seizure doses at 10 mg per dose (AES)" | kind=Commit | source=git | neighbors=[main, 8ac7ca0 Formulary group C: sedation, se…, formulary.js, precache-manifest.js, 3e50ecd Merge remote-tracking branch 'o…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07b8707f007a6b5c203fc88e4173968e67b994f0": "07b8707 Show BDLS pre-test first in exam bank pickers" | kind=Commit | source=git | neighbors=[main, 6663113 PR #63 Update ECG simulator, d93e86e ECG Simulator: rebuild engine, …, precache-manifest.js, 1378508 Add BDLS v3.0 pre-test question…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@179984fa63966139110698d7ec4730c859409e32": "179984f Scaffold PEPP reviewer (courses/pepp) with c01-c02 content" | kind=Commit | source=git | neighbors=[main, 27fd0d1 Author PEPP chapters c03-c04 (p…, bundle.js, build.py, 2b1ffb7 Port BDLS and EMPACT course rev…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a00316819db35a82adaf7032ff8dccf28b57ecc": "1a00316 feat(itls): restructure itls course - replace static chapters with buil…" | kind=Commit | source=git | neighbors=[main, d641fa0 feat: improve SEO, Open Graph m…, bundle.js, build.py, c9276ae chore: update graphify knowledg…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a56d75fd8f004df1227b903f4968fce222bd55f": "1a56d75 feat: graphify rebuild with descriptions + interactive file map view" | kind=Commit | source=git | neighbors=[main, b0748c1 feat: Supabase integration, c-index.js, sw.js, 5b988aa Create .nojekyll] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fa9c3ab0d4f0cb60f6a872bfce54320e2d020a5": "1fa9c3a Run Playwright tests in parallel" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, main, afeb5dc feat: Run Playwright tests in p…, playwright.config.js, megacode.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@236ac266e44dc9ad03abd77ae10b7c21d5715dcd": "236ac26 local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 061bcae local hashed authentication (SH…, 707c033 Major Updates ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2ab1c09879d07807a9999bf121c4580560a8df9f": "2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes" | kind=Commit | source=git | neighbors=[main, 9b12c84 Merge pull request #20, precache-manifest.js, exam-review-a11y.spec.js, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2c062613f9029de90a0335e4dd8c3ef49ebf75f2": "2c06261 Remove Respiratory Patterns tab from index.html" | kind=Commit | source=git | neighbors=[main, 22c0924 Add MCI (Mass Casualty Incident…, e98b15c Merge PR #36 MCI Course, precache-manifest.js, b8bb380 fix: rebuild precache-manifest.…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2e4d5a6d7bf13d870d73b02fb093176e5779861b": "2e4d5a6 MCI: Officer roles with two-row tabs and swipe between roles" | kind=Commit | source=git | neighbors=[main, c254251 Exam pages: one design for ever…, precache-manifest.js, mci-reviewer.spec.js, a8c0f40 PR #59 MCI UI update] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@301bb11e09abee8e1fc3c51b3ea52b2afcef575d": "301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' …" | kind=Commit | source=git | neighbors=[main, 1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…, precache-manifest.js, e1be186 fix: make precache build determ…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4663aec108b93ea7468094e61a901e18575e5cd2": "4663aec fix: Resolve unused variable and import lint errors in scripts/assemble…" | kind=Commit | source=git | neighbors=[main, 98557d8 docs: Update curriculum content…, c3.js, assemble_chapters.py, de0dcb2 feat: Add Open Graph metadata, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@467bf9440fad0deff10ec2bf8189cbc10228b644": "467bf94 Restore full M1-38 medication formulary, de-branded from source" | kind=Commit | source=git | neighbors=[main, 7d02ca2 Rename drug formulary numbering…, curriculum-index.js, precache-manifest.js, 82a7b90 fix: rebuild precache-manifest.…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5157b39de21c35f150fbad2092e22d9d7d7d016b": "5157b39 Fix horizontal overflow on phones in BLS and ITLS reviewers" | kind=Commit | source=git | neighbors=[main, f953366 PR #26 BLS-reviewer, precache-manifest.js, bls-reviewer.spec.js, e9a2970 Add agentic implementation plan…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@55997dbc7ab441a14f719fc1d335da66a2bb34bd": "55997db ECG Simulator: easy mode, visible rhythm picker, advanced toggle" | kind=Commit | source=git | neighbors=[main, 8f44320 Update exam-page tests for the …, precache-manifest.js, ecg-simulator.spec.js, 6663113 PR #63 Update ECG simulator] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d2d46fe76134bde01e41fb2fef194250c331615": "5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, main, bb51308 Merge pull request #19  Exam th…, precache-manifest.js, check_contrast.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@65ac83070cccc7cd7444423f185168b346e61b5d": "65ac830 feat: restructure Chapter 1 — merge EMS sections, remove c1s11, slim TOC" | kind=Commit | source=git | neighbors=[5d23c19 fix: improve heading and index-…, main, 6acd5dc feat: add SVT rhythm, improve P…, c1.js, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@668149a45ae5b9ebb527f2f7c89a48b2016e2620": "668149a Log in & sign up 👍" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bfe43fb Update requirements.txt, server.py, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6a16b9152f4c550ee94a520947d61899ba8ae505": "6a16b91 Add ACLS Megacode simulator with live monitor emulator" | kind=Commit | source=git | neighbors=[main, aed54cb PR #48 acls-megacode-scenarios, precache-manifest.js, megacode.spec.js, 7b23e68 PR #47 Update Question bank] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c15c3c2cad2b28fde9b04bb81d920b6726d77e6": "6c15c3c Bump CACHE_VERSION to v5.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a2d7309 💊👍, sw.js, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@718cde2e8302dccc085948c22020bf198151e79a": "718cde2 Major update has been implemented ✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, b042359 Reduced image SIZE ✅, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@792897bb17591278098df24c63fb6d8496eeb07f": "792897b Remove unstyled tap ripple that rendered as a white square" | kind=Commit | source=git | neighbors=[1bd0a15 PR #38 medications-cleanup-xnuh…, app.js, main, 639f5a4 PR #39 medications-cleanup-xnuh…, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@79e641016c73f54f3c9bd312ca47304e00640be9": "79e6410 Scaffold Medical reviewer (courses/medical) with c01 content" | kind=Commit | source=git | neighbors=[20ed56a Integrate PEPP reviewer into pl…, main, 508b810 Author Medical chapters c02-c03…, bundle.js, build.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81d920a4245b514a03f34f327988c3b2bbeb1278": "81d920a Fix reflected XSS in med-index.html, add Google Play production audit" | kind=Commit | source=git | neighbors=[main, 817a4bf Merge pull request #23 Fixed: r…, precache-manifest.js, med-index-xss.spec.js, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@82a7b904e12802a66894bf104a4dc953ea50508f": "82a7b90 fix: rebuild precache-manifest.js" | kind=Commit | source=git | neighbors=[main, 467bf94 Restore full M1-38 medication f…, be729fd Merge pull request #29 from res…, precache-manifest.js, ccbb5d2 license: switch from MIT to All…] | lang=pt

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-016.json

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
