# Node Description Batch 20 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@4663aec108b93ea7468094e61a901e18575e5cd2": "4663aec fix: Resolve unused variable and import lint errors in scripts/assemble…" | kind=Commit | source=git | neighbors=[main, 98557d8 docs: Update curriculum content…, c3.js, assemble_chapters.py, de0dcb2 feat: Add Open Graph metadata, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@65ac83070cccc7cd7444423f185168b346e61b5d": "65ac830 feat: restructure Chapter 1 — merge EMS sections, remove c1s11, slim TOC" | kind=Commit | source=git | neighbors=[5d23c19 fix: improve heading and index-…, main, 6acd5dc feat: add SVT rhythm, improve P…, c1.js, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@668149a45ae5b9ebb527f2f7c89a48b2016e2620": "668149a Log in & sign up 👍" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, bfe43fb Update requirements.txt, server.py, e6ace1c Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c15c3c2cad2b28fde9b04bb81d920b6726d77e6": "6c15c3c Bump CACHE_VERSION to v5.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, a2d7309 💊👍, sw.js, de383e7 Add new files to service worker…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@718cde2e8302dccc085948c22020bf198151e79a": "718cde2 Major update has been implemented ✅" | kind=Commit | source=git | neighbors=[app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, b042359 Reduced image SIZE ✅, 8deb40e Completed the content] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@86a3d5cedadffe0c9c4ef5f27f37e102498996fa": "86a3d5c update PWA icons" | kind=Commit | source=git | neighbors=[411adfd update: refresh PWA icons from …, main, 829a86d update: refresh PWA icons from …, server.py, sw.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b0748c157d69da7ba9a0f4a36c3b75a4507e23fa": "b0748c1 feat: Supabase integration" | kind=Commit | source=git | neighbors=[1a56d75 feat: graphify rebuild with des…, main, aa81a0c fix: set SUPABASE_URL in supaba…, server.py, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c4f88109afac2738db596a6f664ca81a9a55bf56": "c4f8810 Wire admin.html to real app users via a hidden login-page gate" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, b7039e9 Bump service worker cache to v2…, server.py, test_api.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d55c93dcf7b0c3ae14f610c549fdb2c0fef2f40c": "d55c93d Update sw.js" | kind=Commit | source=git | neighbors=[c9f0400 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 03f6898 Update sw.js, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de0dcb23bc50e1bac63072ac92b0c6cf50064a03": "de0dcb2 feat: Add Open Graph metadata, SEO improvements, and favicons across al…" | kind=Commit | source=git | neighbors=[60c1782 chore: stop tracking TOC/ direc…, main, 4663aec fix: Resolve unused variable an…, c1.js, c10.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de383e747d6f97e5aa226bfa8b03215ee7a26d35": "de383e7 Add new files to service worker cache" | kind=Commit | source=git | neighbors=[c2479e9 Adding ECG & Drug calc 👍❤️💊, feat/lucide-svg-migration, fix/lucide-quote-consistency, 6c15c3c Bump CACHE_VERSION to v5.1, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@edb1e1dbda5ffca730d259d0b805ba477fd8a1c2": "edb1e1d Version 4.0.1" | kind=Commit | source=git | neighbors=[213cb39 NEW CHAPTERS ADDED V 4.0.1, app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ee415248e8ad2b627a156220d25dc5f2148fc3f6": "ee41524 fix: wrap long line in test_admin_role_update for ruff line-length limit" | kind=Commit | source=git | neighbors=[b7039e9 Bump service worker cache to v2…, main, 70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, test_api.py] | lang=en
- "playwright_config": "playwright.config.js" | kind=code-symbol | source=playwright.config.js:L1 | neighbors=[1fa9c3a Run Playwright tests in parallel, 53ec4c1 Merge pull request #16 ✅, afeb5dc feat: Run Playwright tests in p…, d7008b7 Add the actual content changes …, beb9c47 fix(ui): swap CSS to 0dad921 gl…] | lang=en
- "prometric_exam_examengine_filterquestions": ".filterQuestions()" | kind=code-symbol | source=src/prometric/exam.js:L261 | neighbors=[ExamEngine, .calculateTopicAccuracy(), .getSelectedTopics(), .startExam(), .updateAvailableCount()] | lang=en
- "prometric_exam_examengine_nextorend": ".nextOrEnd()" | kind=code-symbol | source=src/prometric/exam.js:L694 | neighbors=[ExamEngine, .handleKeyboard(), .endExam(), .renderQuestion(), .submitAnswer()] | lang=en
- "prometric_exam_examengine_renderanalyticsdashboard": ".renderAnalyticsDashboard()" | kind=code-symbol | source=src/prometric/exam.js:L1113 | neighbors=[ExamEngine, .renderHeatmap(), .renderImprovementChart(), .renderStrengthsWeaknesses(), .showAnalytics()] | lang=en
- "scripts_assemble_chapters": "assemble_chapters.py" | kind=code-symbol | source=scripts/assemble_chapters.py:L1 | neighbors=[assemble(), extract_sections(), main(), 4663aec fix: Resolve unused variable an…, 9b0bbbb content: deploy chapters 6-10 w…] | lang=en
- "scripts_build_toc": "build_toc.py" | kind=code-symbol | source=scripts/build_toc.py:L1 | neighbors=[esc(), gen_chapter(), main(), 0bee1e7 fix(ci): resolve ruff linting e…, 59a9f95 toc: implement prehospital (EMT…] | lang=en
- "scripts_compose_build_edit_play": "build_edit_play()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L174 | neighbors=[compose.py, clk(), mk(), shot(), 33 s store-listing cut: the real app on…] | lang=en
- "scripts_compose_cap_of": "cap_of()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L70 | neighbors=[compose.py, app_events(), debrief_card(), render_macro(), render_open()] | lang=en
- "scripts_compose_debrief_card": "debrief_card()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L500 | neighbors=[compose.py, cap_of(), src_index(), The genuine debrief sheet as a floating…, render_reveal()] | lang=en
- "scripts_compose_lib_chip": "chip()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L284 | neighbors=[compose_lib.py, draw_tracked(), font(), text_size(), Persistent corner label over footage: d…] | lang=en
- "scripts_compose_render_full": "render_full()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L397 | neighbors=[compose.py, render_frame(), cam_at(), src_index(), to_out()] | lang=en
- "scripts_compose_render_open": "render_open()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L447 | neighbors=[compose.py, Cold open: dark bay, alarm light, the r…, render_frame(), cap_of(), src_index()] | lang=en
- "scripts_explore2": "explore2.js" | kind=code-symbol | source=promo/megacode/scripts/explore2.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, driver.js, open(), { open }] | lang=en
- "scripts_peek_vert": "peek_vert.js" | kind=code-symbol | source=promo/megacode/scripts/peek_vert.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, driver.js, open(), { open }] | lang=en
- "scripts_poster": "poster.py" | kind=code-symbol | source=promo/megacode/scripts/poster.py:L1 | neighbors=[17232c9 Fix Ruff lint failure in Megaco…, 2a5f204 Add SmartCare Megacode cinemati…, 6663113 PR #63 Update ECG simulator, 7421ea4 Megacode cinematic promo, main()] | lang=en
- "scripts_qa_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L62 | neighbors=[qa.py, blacks(), loudness(), probe(), sheet()] | lang=en
- "scripts_record_frame": "frame()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L51 | neighbors=[record.js, advance(), hold(), scrollTo(), waitFor()] | lang=en
- "scripts_validate_content_validate_bank_content": "validate_bank_content()" | kind=code-symbol | source=scripts/validate_content.py:L157 | neighbors=[validate_content.py, main(), load_json_lenient(), validate_pearl(), validate_question()] | lang=en
- "shared_admin_audit": "audit()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L50 | neighbors=[index.ts, index.ts, index.ts, admin.ts, requireAdmin()] | lang=en
- "shared_admin_corsheaders": "corsHeaders()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L15 | neighbors=[index.ts, index.ts, index.ts, admin.ts, json()] | lang=en
- "tests_courses_page_spec": "courses-page.spec.js" | kind=code-symbol | source=tests/courses-page.spec.js:L1 | neighbors=[62386af PR #51 Megacode 3, c8b8f6e PR #52 Improved UI/UX of Course…, cee8997 Courses page: opaque cards, pol…, f272ce6 Courses page: compact, collapsi…, { test, expect }] | lang=en
- "tests_home_spec": "home.spec.js" | kind=code-symbol | source=tests/home.spec.js:L1 | neighbors=[0673752 PR #67 Homepage Redesigned ✨, 582a9d8 Chapter 3 rewrite  ✅, 6026b7a Redesign the home page: courses…, bd1c53b Thinner greeting card; key, too…, trackErrors()] | lang=en
- "tests_test_api_auth": "_auth()" | kind=code-symbol | source=tests/test_api.py:L68 | neighbors=[test_api.py, .test_not_configured_returns_503(), .test_only_deletes_the_caller_own_accou…, .test_self_delete_works_no_admin_requir…, .test_self_delete_is_audited()] | lang=en
- "tests_test_api_testaccountselfdelete": "TestAccountSelfDelete" | kind=code-symbol | source=tests/test_api.py:L87 | neighbors=[test_api.py, .test_not_configured_returns_503(), .test_only_deletes_the_caller_own_accou…, .test_requires_auth(), .test_self_delete_works_no_admin_requir…] | lang=en
- "tests_test_api_testauditlogging": "TestAuditLogging" | kind=code-symbol | source=tests/test_api.py:L156 | neighbors=[test_api.py, .test_self_delete_is_audited(), .test_admin_action_is_audited(), .test_failed_login_is_audited(), .test_successful_login_is_audited()] | lang=en
- "tests_test_api_testlogin": "TestLogin" | kind=code-symbol | source=tests/test_api.py:L88 | neighbors=[test_api.py, .test_login_generic_error_message(), .test_login_nonexistent_user(), .test_login_success(), .test_login_wrong_password()] | lang=en
- "vendor_chart_4_5_1_umd_min_afterdatasetsupdate": "afterDatasetsUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, aa(), ra(), .getDatasetMeta(), .isDatasetVisible()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-019.json

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
