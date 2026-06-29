# Node Description Batch 7 of 14

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

- "scripts_gen": "gen.py" | kind=code-symbol | source=scripts/gen.py:L1 | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, 4999b7f swot-its-compliance-GaiuJ, 99cd25c Organized the Repo, Fixing all …, create_src_folders(), generate_course_page(), main()] | lang=en
- "app_setmaincontent": "setMainContent()" | kind=code-symbol | source=app.js:L565 | neighbors=[app.js, renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav()] | lang=en
- "app_switchsection": "switchSection()" | kind=code-symbol | source=app.js:L524 | neighbors=[app.js, bootApp(), handleScroll(), initBottomNav(), initFooterAwareNav()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@03f6898862ab5b7297cba7df54116f3ce9035b9d": "03f6898 Update sw.js" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c2479e9 Adding ECG & Drug calc 👍❤️💊, sw.js, d55c93d Update sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a00316819db35a82adaf7032ff8dccf28b57ecc": "1a00316 feat(itls): restructure itls course - replace static chapters with buil…" | kind=Commit | source=git | neighbors=[main, d641fa0 feat: improve SEO, Open Graph m…, bundle.js, build.py, c9276ae chore: update graphify knowledg…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1a56d75fd8f004df1227b903f4968fce222bd55f": "1a56d75 feat: graphify rebuild with descriptions + interactive file map view" | kind=Commit | source=git | neighbors=[main, b0748c1 feat: Supabase integration, c-index.js, sw.js, 5b988aa Create .nojekyll] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@236ac266e44dc9ad03abd77ae10b7c21d5715dcd": "236ac26 local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 061bcae local hashed authentication (SH…, 707c033 Major Updates ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4663aec108b93ea7468094e61a901e18575e5cd2": "4663aec fix: Resolve unused variable and import lint errors in scripts/assemble…" | kind=Commit | source=git | neighbors=[main, 98557d8 docs: Update curriculum content…, c3.js, assemble_chapters.py, de0dcb2 feat: Add Open Graph metadata, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@668149a45ae5b9ebb527f2f7c89a48b2016e2620": "668149a Log in & sign up 👍" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bfe43fb Update requirements.txt, server.py, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c15c3c2cad2b28fde9b04bb81d920b6726d77e6": "6c15c3c Bump CACHE_VERSION to v5.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a2d7309 💊👍, sw.js, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@718cde2e8302dccc085948c22020bf198151e79a": "718cde2 Major update has been implemented ✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, b042359 Reduced image SIZE ✅, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@86a3d5cedadffe0c9c4ef5f27f37e102498996fa": "86a3d5c update PWA icons" | kind=Commit | source=git | neighbors=[411adfd update: refresh PWA icons from …, main, 829a86d update: refresh PWA icons from …, server.py, sw.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b0748c157d69da7ba9a0f4a36c3b75a4507e23fa": "b0748c1 feat: Supabase integration" | kind=Commit | source=git | neighbors=[1a56d75 feat: graphify rebuild with des…, main, aa81a0c fix: set SUPABASE_URL in supaba…, server.py, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d55c93dcf7b0c3ae14f610c549fdb2c0fef2f40c": "d55c93d Update sw.js" | kind=Commit | source=git | neighbors=[c9f0400 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 03f6898 Update sw.js, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de0dcb23bc50e1bac63072ac92b0c6cf50064a03": "de0dcb2 feat: Add Open Graph metadata, SEO improvements, and favicons across al…" | kind=Commit | source=git | neighbors=[60c1782 chore: stop tracking TOC/ direc…, main, 4663aec fix: Resolve unused variable an…, c1.js, c10.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de383e747d6f97e5aa226bfa8b03215ee7a26d35": "de383e7 Add new files to service worker cache" | kind=Commit | source=git | neighbors=[c2479e9 Adding ECG & Drug calc 👍❤️💊, feat/lucide-svg-migration, fix/lucide-quote-consistency, 6c15c3c Bump CACHE_VERSION to v5.1, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@edb1e1dbda5ffca730d259d0b805ba477fd8a1c2": "edb1e1d Version 4.0.1" | kind=Commit | source=git | neighbors=[213cb39 NEW CHAPTERS ADDED V 4.0.1, app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 69889e8 Delete chapters/c3.html] | lang=en
- "content_c6": "c6.js" | kind=code-symbol | source=content/c6.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 7f26548 fix: UTF-8 mojibake across exam…, 9b0bbbb content: deploy chapters 6-10 w…, d00c567 feat: Remove Scope of Practice …, fe7449d docs: Update curriculum content…] | lang=en
- "prometric_exam_examengine_filterquestions": ".filterQuestions()" | kind=code-symbol | source=src/prometric/exam.js:L259 | neighbors=[ExamEngine, .calculateTopicAccuracy(), .getSelectedTopics(), .startExam(), .updateAvailableCount()] | lang=en
- "prometric_exam_examengine_nextorend": ".nextOrEnd()" | kind=code-symbol | source=src/prometric/exam.js:L688 | neighbors=[ExamEngine, .handleKeyboard(), .endExam(), .renderQuestion(), .submitAnswer()] | lang=en
- "prometric_exam_examengine_renderanalyticsdashboard": ".renderAnalyticsDashboard()" | kind=code-symbol | source=src/prometric/exam.js:L1107 | neighbors=[ExamEngine, .renderHeatmap(), .renderImprovementChart(), .renderStrengthsWeaknesses(), .showAnalytics()] | lang=en
- "scripts_assemble_chapters": "assemble_chapters.py" | kind=code-symbol | source=scripts/assemble_chapters.py:L1 | neighbors=[4663aec fix: Resolve unused variable an…, 9b0bbbb content: deploy chapters 6-10 w…, assemble(), extract_sections(), main()] | lang=en
- "scripts_build_toc": "build_toc.py" | kind=code-symbol | source=scripts/build_toc.py:L1 | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, 59a9f95 toc: implement prehospital (EMT…, esc(), gen_chapter(), main()] | lang=en
- "tests_test_api_testcsrfguard": "TestCsrfGuard" | kind=code-symbol | source=tests/test_api.py:L248 | neighbors=[test_api.py, .test_get_requests_not_blocked(), .test_post_without_json_content_type_re…, .test_post_without_xrw_header_rejected(), .test_valid_json_post_allowed()] | lang=en
- "tests_test_api_testlogin": "TestLogin" | kind=code-symbol | source=tests/test_api.py:L88 | neighbors=[test_api.py, .test_login_generic_error_message(), .test_login_nonexistent_user(), .test_login_success(), .test_login_wrong_password()] | lang=en
- "app_rendercomingsoon": "renderComingSoon()" | kind=code-symbol | source=app.js:L337 | neighbors=[app.js, bootApp(), setMainContent(), updateHeader()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@006f9af1ad1a1bbcd287dc250a76824c22388f19": "006f9af Update requirements.txt" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, e8be921 Remove leading slash from login…, bfe43fb Update requirements.txt] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@061bcaea764dbcdde05eff0ec5f6d1311114d9bc": "061bcae local hashed authentication (SHA-256)✅" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9d96839 Added Login pages, 236ac26 local hashed authentication (SH…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@07ec89d204627921b78d499e08f2571bcbc9bee2": "07ec89d Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, c9f0400 Update index.html, 9ed5dd4 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0801c559b31cf09ddc0994cae7077465833ac82b": "0801c55 Update styles.css" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 508e087 Update index.html, 730ad49 BLS] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1fc629ed8067812d2115ce0199634b321a6a231d": "1fc629e fix(app.js): handle DOMContentLoaded race condition for dynamically inj…" | kind=Commit | source=git | neighbors=[app.js, main, c9276ae chore: update graphify knowledg…, 20fdfa2 feat(itls): complete itls revie…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@30733863a7d00ae86a2ada463d90a25c6ef25149": "3073386 Update login.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 35a1e71 Update login.html, a9eb59e Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@349d35ae67680ca2ad186a9ca1811b9454fd3c2a": "349d35a Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 3f5e261 Revise README to enhance projec…, afa5eb0 Add files via upload] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@35a1e71c5c2ffd02e382b436b2f7eee1be57d954": "35a1e71 Update login.html" | kind=Commit | source=git | neighbors=[3073386 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, c75db55 Update index.html] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@3ecc147b35eb3e6948ba67c859c489066222418c": "3ecc147 Update index.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 9ed5dd4 Update index.html, c75db55 Update index.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3f5e26121b7d69f098e5dd4d1204d495c1eca664": "3f5e261 Revise README to enhance project documentation" | kind=Commit | source=git | neighbors=[349d35a Add files via upload, feat/lucide-svg-migration, fix/lucide-quote-consistency, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4fb7ba040a790e01ce1b9ce07446c7ffd4603b53": "4fb7ba0 Fix formatting in README for Live Demo link" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a9eb59e Update README.md, f3d2625 Update README.md] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@508e08701627fbfd39a37fe6c0f5ff394ac4e414": "508e087 Update index.html" | kind=Commit | source=git | neighbors=[0801c55 Update styles.css, feat/lucide-svg-migration, fix/lucide-quote-consistency, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@680d70693d693c7dbadddb4ecbac5fbc6e194561": "680d706 Browslow tape" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 730ad49 BLS, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69889e8c8c739569db5fa221249f0c802ce0d30c": "69889e8 Delete chapters/c3.html" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 680d706 Browslow tape, edb1e1d Version 4.0.1] | lang=en

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
