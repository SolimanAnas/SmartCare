# Node Description Batch 18 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@82ff8147054f4e897f78e7ef89d0a099aa4bdd69": "82ff814 Add Playwright smoke test for BLS reviewer" | kind=Commit | source=git | neighbors=[23060c0 Integrate BLS reviewer into pla…, main, 154f42d Merge pull request #25 BLS revi…, e9a2970 Add agentic implementation plan…, bls-reviewer.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@86a3d5cedadffe0c9c4ef5f27f37e102498996fa": "86a3d5c update PWA icons" | kind=Commit | source=git | neighbors=[411adfd update: refresh PWA icons from …, main, 829a86d update: refresh PWA icons from …, server.py, sw.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@8f44320b2d51de18bbcebcfaace8e63d74d8689e": "8f44320 Update exam-page tests for the BDLS pre-test bank" | kind=Commit | source=git | neighbors=[55997db ECG Simulator: easy mode, visib…, main, 66d3118 BDLS update ,ECG engine update ✅, exam-pages.spec.js, mci-reviewer.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a75c4158aacb58e82200796ce98542adeafacd4b": "a75c415 Scaffold BLS reviewer (courses/bls) with c01 content" | kind=Commit | source=git | neighbors=[build.py, main, 7c0b047 Author BLS chapters c02-c03 (as…, bundle.js, f3382e1 Add agentic implementation plan…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ae06d27b93687add7c48c70ece474d81eb0017e9": "ae06d27 PALS illustrations ✅" | kind=Commit | source=git | neighbors=[6477974 BLS illustrations ✅, main, fdbf310 Fix CI: regenerate precache-man…, bundle.js, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b0748c157d69da7ba9a0f4a36c3b75a4507e23fa": "b0748c1 feat: Supabase integration" | kind=Commit | source=git | neighbors=[1a56d75 feat: graphify rebuild with des…, main, aa81a0c fix: set SUPABASE_URL in supaba…, server.py, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b890616e8e35b0e9bc9d5fe3eaa4a53a38d682b8": "b890616 Add MCI Exam 1 (core MCI operations); current exam becomes Exam 2" | kind=Commit | source=git | neighbors=[5cfcb95 PR #55 fix Home ring, main, 6018c48 PR #57 MCI Exam 1, precache-manifest.js, mci-reviewer.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd1c53b4288d4f5d38797f4b910a1842871e9bff": "bd1c53b Thinner greeting card; key, tooltips and labels for the row action icons" | kind=Commit | source=git | neighbors=[6026b7a Redesign the home page: courses…, main, 7208d8e Rewrite chapter 3 (Airway & Ven…, precache-manifest.js, home.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bdf7315f1488a89cf1ea12d35672b6dec1133ef7": "bdf7315 Add Emil Kowalski design engineering skills, direction-aware navigation…" | kind=Commit | source=git | neighbors=[9b12c84 Merge pull request #20, app.js, main, 8abc850 Fix CI: restore server.py — tes…, server.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c2542511d7adcbe948825790273d2bd6730ce9a3": "c254251 Exam pages: one design for every course, on a shared engine" | kind=Commit | source=git | neighbors=[2e4d5a6 MCI: Officer roles with two-row…, main, c5c0567 Exam pages: Practice / Exam mod…, precache-manifest.js, exam-pages.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c4f88109afac2738db596a6f664ca81a9a55bf56": "c4f8810 Wire admin.html to real app users via a hidden login-page gate" | kind=Commit | source=git | neighbors=[4ccb8df Merge pull request #9 from Soli…, main, b7039e9 Bump service worker cache to v2…, server.py, test_api.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c7f6894cab5cee8ccb8a7955dbe389756c6ae26d": "c7f6894 Add Google Play screenshot campaign built from real app captures" | kind=Commit | source=git | neighbors=[81f95d0 ⭐PR #60 Unified Course Design s…, main, 7dcb4bd Merge pull request #61 from Sol…, build-screenshots.js, capture-screenshots.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cee89970fb6aa9be41d15abede9ef919cce6b022": "cee8997 Courses page: opaque cards, polished buttons, unified progress, readabl…" | kind=Commit | source=git | neighbors=[62386af PR #51 Megacode 3, main, c8b8f6e PR #52 Improved UI/UX of Course…, precache-manifest.js, courses-page.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d55c93dcf7b0c3ae14f610c549fdb2c0fef2f40c": "d55c93d Update sw.js" | kind=Commit | source=git | neighbors=[c9f0400 Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 03f6898 Update sw.js, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d72ee1ed6094e0d1cd558e386b85504c968f1277": "d72ee1e MCI: new course home and exam screens, START/METHANE tools in the page" | kind=Commit | source=git | neighbors=[main, a8c0f40 PR #59 MCI UI update, precache-manifest.js, mci-reviewer.spec.js, e713100 PR #58 Courses page layout fix] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d93e86e78e55e2b3882174367e6e12d5ab262557": "d93e86e ECG Simulator: rebuild engine, rhythms and lab UI" | kind=Commit | source=git | neighbors=[07b8707 Show BDLS pre-test first in exa…, main, 8cbf9e5 Add attribution rule to reposit…, precache-manifest.js, ecg-simulator.spec.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de0dcb23bc50e1bac63072ac92b0c6cf50064a03": "de0dcb2 feat: Add Open Graph metadata, SEO improvements, and favicons across al…" | kind=Commit | source=git | neighbors=[60c1782 chore: stop tracking TOC/ direc…, main, 4663aec fix: Resolve unused variable an…, c1.js, c10.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@de383e747d6f97e5aa226bfa8b03215ee7a26d35": "de383e7 Add new files to service worker cache" | kind=Commit | source=git | neighbors=[c2479e9 Adding ECG & Drug calc 👍❤️💊, feat/lucide-svg-migration, fix/lucide-quote-consistency, 6c15c3c Bump CACHE_VERSION to v5.1, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e1be186ec2f3437fde9e9d8b0e054af17358b9e7": "e1be186 fix: make precache build deterministic across Windows/Linux" | kind=Commit | source=git | neighbors=[bc0cb4e Regenerate precache-manifest.js…, main, 301bb11 Fix NaN days ago — index.html r…, precache-manifest.js, build_precache.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@edb1e1dbda5ffca730d259d0b805ba477fd8a1c2": "edb1e1d Version 4.0.1" | kind=Commit | source=git | neighbors=[213cb39 NEW CHAPTERS ADDED V 4.0.1, app.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, 69889e8 Delete chapters/c3.html] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ee415248e8ad2b627a156220d25dc5f2148fc3f6": "ee41524 fix: wrap long line in test_admin_role_update for ruff line-length limit" | kind=Commit | source=git | neighbors=[b7039e9 Bump service worker cache to v2…, main, 70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, test_api.py] | lang=en
- "google_flow_run_all": "run-all.mjs" | kind=code-symbol | source=.google-flow/run-all.mjs:L1 | neighbors=[d35441e Add google-flow workspace and s…, [from, to], limited, MODELS, names] | lang=en
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-017.json

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
