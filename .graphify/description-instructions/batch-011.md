# Node Description Batch 12 of 49

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

- "vendor_supabase_js_2_110_0_signup": "signUp()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs, m(), _notifyAllSubscribers(), re(), _returnResult(), _saveSession()] | lang=en
- "vendor_supabase_js_2_110_0_starttimeout": "startTimeout()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, push(), send(), cancelTimeout(), makeRef(), on()] | lang=en
- "vendor_supabase_js_2_110_0_teardown": "teardown()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L11 | neighbors=[supabase-js-2.110.0.mjs, disconnect(), heartbeatTimeout(), removeChannel(), destroy(), reset()] | lang=en
- "vendor_supabase_js_2_110_0_x": "x()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, constructor(), _initRealtimeClient(), _initSupabaseAuthClient(), bs(), ki()] | lang=en
- "app_setmaincontent": "setMainContent()" | kind=code-symbol | source=app.js:L498 | neighbors=[app.js, renderComingSoon(), handleScroll(), initBottomNav(), initFooterAwareNav(), initScrollReveal()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@23060c04d7670be603a3f4f724158d8558d896fa": "23060c0 Integrate BLS reviewer into platform (courses page, precache, sitemap)" | kind=Commit | source=git | neighbors=[main, 82ff814 Add Playwright smoke test for B…, precache-manifest.js, build_precache.py, generate_sitemap.py, e956daa Author BLS chapters c10-c12 (ch…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4ccb8df39beb29a7be104defbab78a78df578875": "4ccb8df Merge pull request #9 from SolimanAnas/claude/chapters-html-summary-fix…" | kind=Commit | source=git | neighbors=[main, 95f6363 Merge pull request #10 from Sol…, c4f8810 Wire admin.html to real app use…, sw.js, a4deb03 Merge pull request #8 from Soli…, b1f4385 Bump service worker cache to v2…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@69ad0559354068097fea7335f58f33b6b903690a": "69ad055 Merge pull request #17 html Clean-up🗑️" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, main, 3c15b4d V2 ⭐ : Question Review, All Que…, precache-manifest.js, build_precache.py, c9e85ef Deduplicate the 8 standalone ex…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6acd5dce49981e775cd75f9db8362011c0eba9c2": "6acd5dc feat: add SVT rhythm, improve PSVT simulation, add ECG test data" | kind=Commit | source=git | neighbors=[65ac830 feat: restructure Chapter 1 — m…, app.js, main, 8a6ee0b Fix invisible table borders and…, a4deb03 Merge pull request #8 from Soli…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9b12c8496163af9e2a4ca6f179ac66805c9614ca": "9b12c84 Merge pull request #20" | kind=Commit | source=git | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, main, bdf7315 Add Emil Kowalski design engine…, precache-manifest.js, exam-review-a11y.spec.js, bb51308 Merge pull request #19  Exam th…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@acb0328a04314c841d761f093fd6e90643fe1a75": "acb0328 About ✅ Merge pull request #11 from SolimanAnas/claude/chapters-html-su…" | kind=Commit | source=git | neighbors=[70a3f4d Clean up about.html copy and re…, 95f6363 Merge pull request #10 from Sol…, main, 5b68bae docs: add comprehensive v2.0 up…, 5f7c4f2 Merge pull request #12 Step 1&2…, sw.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd7b1a92049634d6568c39d6c949ed847ca7c5a9": "bd7b1a9 Completing ACLS Course Reviewer" | kind=Commit | source=git | neighbors=[2e859ad Adding PALS Course, build.py, main, bundle.js, precache-manifest.js, acls-reviewer.spec.js] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@c9e85ef04b6b81ccf3aea9853b5843c8aafc62ef": "c9e85ef Deduplicate the 8 standalone exam-review pages into a shared engine" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, main, 69ad055 Merge pull request #17 html Cle…, feedaf7 Add fresh production-readiness …, precache-manifest.js, build_precache.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d00c567a0f375f4287d37c668d00ef9fb61e1394": "d00c567 feat: Remove Scope of Practice chapter s1 and archive s1.html and s1.js" | kind=Commit | source=git | neighbors=[8541abe chore: Change index page title …, main, fe7449d docs: Update curriculum content…, c1.js, c6.js, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f953366624005ffe9ab6d60808a50dfb0d22b4da": "f953366 PR #26 BLS-reviewer" | kind=Commit | source=git | neighbors=[154f42d Merge pull request #25 BLS revi…, 5157b39 Fix horizontal overflow on phon…, main, 2e859ad Adding PALS Course, precache-manifest.js, bls-reviewer.spec.js] | lang=en
- "content_c10": "c10.js" | kind=code-symbol | source=content/c10.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…, de0dcb2 feat: Add Open Graph metadata, …, fe7449d docs: Update curriculum content…] | lang=en
- "content_c4": "c4.js" | kind=code-symbol | source=content/c4.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 98557d8 docs: Update curriculum content…, a4deb03 Merge pull request #8 from Soli…, b791fda content: deploy chapters 4-5 (C…, fe7449d docs: Update curriculum content…] | lang=en
- "content_c5": "c5.js" | kind=code-symbol | source=content/c5.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 98557d8 docs: Update curriculum content…, a4deb03 Merge pull request #8 from Soli…, b791fda content: deploy chapters 4-5 (C…, fe7449d docs: Update curriculum content…] | lang=en
- "migrations_20260702000002_create_profiles": "20260702000002_create_profiles.sql" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, auth.users, on_auth_user_created, public.handle_new_user(), public.profiles] | lang=en
- "prometric_exam_examengine_calculateresults": ".calculateResults()" | kind=code-symbol | source=src/prometric/exam.js:L829 | neighbors=[ExamEngine, .renderInsights(), .renderTopicPerformance(), .saveStats(), .showScreen(), .endExam()] | lang=en
- "prometric_exam_examengine_endexam": ".endExam()" | kind=code-symbol | source=src/prometric/exam.js:L797 | neighbors=[ExamEngine, .calculateResults(), .closeModal(), .removeTouchListeners(), .showScreen(), .nextOrEnd()] | lang=en
- "prometric_exam_examengine_handlekeyboard": ".handleKeyboard()" | kind=code-symbol | source=src/prometric/exam.js:L191 | neighbors=[ExamEngine, .navigate(), .nextOrEnd(), .selectOption(), .submitAnswer(), .toggleFlag()] | lang=en
- "prometric_exam_examengine_submitanswer": ".submitAnswer()" | kind=code-symbol | source=src/prometric/exam.js:L616 | neighbors=[ExamEngine, .handleKeyboard(), .adjustCatDifficulty(), .nextOrEnd(), .saveQuestionHistory(), .updateNavigator()] | lang=en
- "scripts_gen": "gen.py" | kind=code-symbol | source=scripts/gen.py:L1 | neighbors=[1d86134 Secure SDLC Phase 0: fix critic…, 4999b7f swot-its-compliance-GaiuJ, 99cd25c Organized the Repo, Fixing all …, create_src_folders(), generate_course_page(), main()] | lang=en
- "scripts_generate_sitemap": "generate_sitemap.py" | kind=code-symbol | source=scripts/generate_sitemap.py:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 23060c0 Integrate BLS reviewer into pla…, 2e859ad Adding PALS Course, 53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, main()] | lang=en
- "scripts_validate_content_main": "main()" | kind=code-symbol | source=scripts/validate_content.py:L207 | neighbors=[validate_content.py, load_known_single_option(), rel(), validate_bank_content(), validate_manifest_coverage(), validate_manifest_shape()] | lang=en
- "shared_admin_json": "json()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L29 | neighbors=[index.ts, index.ts, index.ts, admin.ts, corsHeaders(), requireAdmin()] | lang=en
- "src_theme": "theme.js" | kind=code-symbol | source=src/theme.js:L1 | neighbors=[d1b235f Merge pull request #15 Offline …, d708b15 Ship the UI/UX Improvements sec…, current(), init(), next(), set()] | lang=en
- "vendor_chart_4_5_1_umd_min_aa": "aa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), .getDataset(), .getParsed(), .getDatasetMeta(), afterDatasetsUpdate()] | lang=en
- "vendor_chart_4_5_1_umd_min_ao": "ao()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getPointPosition(), .getProps(), Y(), inXRange(), inYRange()] | lang=en
- "vendor_chart_4_5_1_umd_min_ce": "ce()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, he(), x(), .describe(), .override(), .set()] | lang=en
- "vendor_chart_4_5_1_umd_min_ci": "Ci()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Fi(), .getContext(), .getPointLabelContext(), .getContext(), .getContext()] | lang=en
- "vendor_chart_4_5_1_umd_min_dataset": "dataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), .getDatasetMeta(), ve(), Xi(), Yi()] | lang=en
- "vendor_chart_4_5_1_umd_min_de_apply": ".apply()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ca, d(), de, .constructor(), dt(), .parse()] | lang=en
- "vendor_chart_4_5_1_umd_min_g": "g()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, n(), o(), .getMinMax(), m(), .update()] | lang=en
- "vendor_chart_4_5_1_umd_min_hi": "hi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ai(), li(), Re(), ri(), .updateControlPoints()] | lang=en
- "vendor_chart_4_5_1_umd_min_ho_buildticks": ".buildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), e(), ._getLabelCapacity(), .getLabelTimestamps(), nt(), .diff()] | lang=en
- "vendor_chart_4_5_1_umd_min_ho_generate": "._generate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .getDataTimestamps(), ._getLabelCapacity(), l(), .diff(), .startOf()] | lang=en
- "vendor_chart_4_5_1_umd_min_jt_rotate": ".rotate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[Ee(), jt(), Ft(), It(), ne(), .drawLabels()] | lang=en
- "vendor_chart_4_5_1_umd_min_lo": "lo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ho(), ki(), s(), wi(), Z()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-011.json

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
