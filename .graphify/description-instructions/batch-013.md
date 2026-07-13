# Node Description Batch 14 of 49

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

- "vendor_supabase_js_2_110_0_signinwithpassword": "signInWithPassword()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startpasskeyauthentication": "_startPasskeyAuthentication()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, signInWithPasskey(), L(), m(), _returnResult(), y()] | lang=en
- "vendor_supabase_js_2_110_0_startpasskeyregistration": "_startPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_stopautorefresh": "_stopAutoRefresh()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, dispose(), _onVisibilityChanged(), _startAutoRefresh(), _debug(), _removeVisibilityChangedCallback()] | lang=en
- "vendor_supabase_js_2_110_0_verifyotp": "verifyOtp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), _returnResult(), _saveSession(), y()] | lang=en
- "vendor_supabase_js_2_110_0_verifypasskeyregistration": "_verifyPasskeyRegistration()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, registerPasskey(), L(), _returnResult(), _useSession(), y()] | lang=en
- "app_switchsection": "switchSection()" | kind=code-symbol | source=app.js:L437 | neighbors=[app.js, bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@03f6898862ab5b7297cba7df54116f3ce9035b9d": "03f6898 Update sw.js" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c2479e9 Adding ECG & Drug calc 👍❤️💊, sw.js, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a00316819db35a82adaf7032ff8dccf28b57ecc": "1a00316 feat(itls): restructure itls course - replace static chapters with buil…" | kind=Commit | source=git | neighbors=[main, d641fa0 feat: improve SEO, Open Graph m…, bundle.js, build.py, c9276ae chore: update graphify knowledg…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a56d75fd8f004df1227b903f4968fce222bd55f": "1a56d75 feat: graphify rebuild with descriptions + interactive file map view" | kind=Commit | source=git | neighbors=[main, b0748c1 feat: Supabase integration, c-index.js, sw.js, 5b988aa Create .nojekyll] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@236ac266e44dc9ad03abd77ae10b7c21d5715dcd": "236ac26 local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 061bcae local hashed authentication (SH…, 707c033 Major Updates ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2ab1c09879d07807a9999bf121c4580560a8df9f": "2ab1c09 Fix invisible Show Hint/confidence/modal buttons on dark themes" | kind=Commit | source=git | neighbors=[main, 9b12c84 Merge pull request #20, precache-manifest.js, exam-review-a11y.spec.js, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@301bb11e09abee8e1fc3c51b3ea52b2afcef575d": "301bb11 Fix NaN days ago — index.html reads h.timestamp (stored as 'timestamp' …" | kind=Commit | source=git | neighbors=[main, 1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…, precache-manifest.js, e1be186 fix: make precache build determ…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4663aec108b93ea7468094e61a901e18575e5cd2": "4663aec fix: Resolve unused variable and import lint errors in scripts/assemble…" | kind=Commit | source=git | neighbors=[main, 98557d8 docs: Update curriculum content…, c3.js, assemble_chapters.py, de0dcb2 feat: Add Open Graph metadata, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5157b39de21c35f150fbad2092e22d9d7d7d016b": "5157b39 Fix horizontal overflow on phones in BLS and ITLS reviewers" | kind=Commit | source=git | neighbors=[main, f953366 PR #26 BLS-reviewer, precache-manifest.js, bls-reviewer.spec.js, e9a2970 Add agentic implementation plan…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5d2d46fe76134bde01e41fb2fef194250c331615": "5d2d46f Fix WCAG AA contrast failure in exam-review.css across all 4 themes" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, main, bb51308 Merge pull request #19  Exam th…, precache-manifest.js, check_contrast.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@65ac83070cccc7cd7444423f185168b346e61b5d": "65ac830 feat: restructure Chapter 1 — merge EMS sections, remove c1s11, slim TOC" | kind=Commit | source=git | neighbors=[5d23c19 fix: improve heading and index-…, main, 6acd5dc feat: add SVT rhythm, improve P…, c1.js, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@668149a45ae5b9ebb527f2f7c89a48b2016e2620": "668149a Log in & sign up 👍" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bfe43fb Update requirements.txt, server.py, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c15c3c2cad2b28fde9b04bb81d920b6726d77e6": "6c15c3c Bump CACHE_VERSION to v5.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a2d7309 💊👍, sw.js, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@718cde2e8302dccc085948c22020bf198151e79a": "718cde2 Major update has been implemented ✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, b042359 Reduced image SIZE ✅, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@81d920a4245b514a03f34f327988c3b2bbeb1278": "81d920a Fix reflected XSS in med-index.html, add Google Play production audit" | kind=Commit | source=git | neighbors=[main, 817a4bf Merge pull request #23 Fixed: r…, precache-manifest.js, med-index-xss.spec.js, 8c61be7 Merge pull request #22 raw mark…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@82ff8147054f4e897f78e7ef89d0a099aa4bdd69": "82ff814 Add Playwright smoke test for BLS reviewer" | kind=Commit | source=git | neighbors=[23060c0 Integrate BLS reviewer into pla…, main, 154f42d Merge pull request #25 BLS revi…, e9a2970 Add agentic implementation plan…, bls-reviewer.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@86a3d5cedadffe0c9c4ef5f27f37e102498996fa": "86a3d5c update PWA icons" | kind=Commit | source=git | neighbors=[411adfd update: refresh PWA icons from …, main, 829a86d update: refresh PWA icons from …, server.py, sw.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@a75c4158aacb58e82200796ce98542adeafacd4b": "a75c415 Scaffold BLS reviewer (courses/bls) with c01 content" | kind=Commit | source=git | neighbors=[build.py, main, 7c0b047 Author BLS chapters c02-c03 (as…, bundle.js, f3382e1 Add agentic implementation plan…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b0748c157d69da7ba9a0f4a36c3b75a4507e23fa": "b0748c1 feat: Supabase integration" | kind=Commit | source=git | neighbors=[1a56d75 feat: graphify rebuild with des…, main, aa81a0c fix: set SUPABASE_URL in supaba…, server.py, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bdf7315f1488a89cf1ea12d35672b6dec1133ef7": "bdf7315 Add Emil Kowalski design engineering skills, direction-aware navigation…" | kind=Commit | source=git | neighbors=[9b12c84 Merge pull request #20, app.js, main, 8abc850 Fix CI: restore server.py — tes…, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c4f88109afac2738db596a6f664ca81a9a55bf56": "c4f8810 Wire admin.html to real app users via a hidden login-page gate" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, b7039e9 Bump service worker cache to v2…, server.py, test_api.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d55c93dcf7b0c3ae14f610c549fdb2c0fef2f40c": "d55c93d Update sw.js" | kind=Commit | source=git | neighbors=[c9f0400 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 03f6898 Update sw.js, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de0dcb23bc50e1bac63072ac92b0c6cf50064a03": "de0dcb2 feat: Add Open Graph metadata, SEO improvements, and favicons across al…" | kind=Commit | source=git | neighbors=[60c1782 chore: stop tracking TOC/ direc…, main, 4663aec fix: Resolve unused variable an…, c1.js, c10.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de383e747d6f97e5aa226bfa8b03215ee7a26d35": "de383e7 Add new files to service worker cache" | kind=Commit | source=git | neighbors=[c2479e9 Adding ECG & Drug calc 👍❤️💊, feat/lucide-svg-migration, fix/lucide-quote-consistency, 6c15c3c Bump CACHE_VERSION to v5.1, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e1be186ec2f3437fde9e9d8b0e054af17358b9e7": "e1be186 fix: make precache build deterministic across Windows/Linux" | kind=Commit | source=git | neighbors=[bc0cb4e Regenerate precache-manifest.js…, main, 301bb11 Fix NaN days ago — index.html r…, precache-manifest.js, build_precache.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@edb1e1dbda5ffca730d259d0b805ba477fd8a1c2": "edb1e1d Version 4.0.1" | kind=Commit | source=git | neighbors=[213cb39 NEW CHAPTERS ADDED V 4.0.1, app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ee415248e8ad2b627a156220d25dc5f2148fc3f6": "ee41524 fix: wrap long line in test_admin_role_update for ruff line-length limit" | kind=Commit | source=git | neighbors=[b7039e9 Bump service worker cache to v2…, main, 70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, test_api.py] | lang=en
- "content_c3": "c3.js" | kind=code-symbol | source=content/c3.js:L1 | neighbors=[4663aec fix: Resolve unused variable an…, 59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 98557d8 docs: Update curriculum content…, a4deb03 Merge pull request #8 from Soli…] | lang=en
- "content_c7": "c7.js" | kind=code-symbol | source=content/c7.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…, fe7449d docs: Update curriculum content…] | lang=en
- "content_c8": "c8.js" | kind=code-symbol | source=content/c8.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…, fe7449d docs: Update curriculum content…] | lang=en
- "prometric_exam_examengine_filterquestions": ".filterQuestions()" | kind=code-symbol | source=src/prometric/exam.js:L261 | neighbors=[ExamEngine, .calculateTopicAccuracy(), .getSelectedTopics(), .startExam(), .updateAvailableCount()] | lang=en
- "prometric_exam_examengine_nextorend": ".nextOrEnd()" | kind=code-symbol | source=src/prometric/exam.js:L690 | neighbors=[ExamEngine, .handleKeyboard(), .endExam(), .renderQuestion(), .submitAnswer()] | lang=en
- "prometric_exam_examengine_renderanalyticsdashboard": ".renderAnalyticsDashboard()" | kind=code-symbol | source=src/prometric/exam.js:L1109 | neighbors=[ExamEngine, .renderHeatmap(), .renderImprovementChart(), .renderStrengthsWeaknesses(), .showAnalytics()] | lang=en
- "scripts_assemble_chapters": "assemble_chapters.py" | kind=code-symbol | source=scripts/assemble_chapters.py:L1 | neighbors=[4663aec fix: Resolve unused variable an…, 9b0bbbb content: deploy chapters 6-10 w…, assemble(), extract_sections(), main()] | lang=en

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
