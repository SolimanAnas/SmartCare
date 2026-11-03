# Node Description Batch 15 of 62

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/SolimanAnas/SmartCare@be729fd04efa9f48b6fae009accd2a837f298e16": "be729fd Merge pull request #29 from restore-medications" | kind=Commit | source=git | neighbors=[7d02ca2 Rename drug formulary numbering…, 82a7b90 fix: rebuild precache-manifest.…, main, 8080576 PR #30, Redesign drug monograph…, curriculum-index.js, precache-manifest.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@c5c05673fdfe84ce3190d71397c8f32dd2b3df83": "c5c0567 Exam pages: Practice / Exam modes; MCI's third bank is Exam 3" | kind=Commit | source=git | neighbors=[c254251 Exam pages: one design for ever…, main, 81f95d0 ⭐PR #60 Unified Course Design s…, precache-manifest.js, exam-pages.spec.js, mci-reviewer.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@c9e85ef04b6b81ccf3aea9853b5843c8aafc62ef": "c9e85ef Deduplicate the 8 standalone exam-review pages into a shared engine" | kind=Commit | source=git | neighbors=[53ec4c1 Merge pull request #16 ✅, main, 69ad055 Merge pull request #17 html Cle…, feedaf7 Add fresh production-readiness …, precache-manifest.js, build_precache.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@cb4bd6458d98a117b115d428146ad1970853837b": "cb4bd64 Redesign drug monograph pages and wire the formulary into Chapter 11" | kind=Commit | source=git | neighbors=[7d02ca2 Rename drug formulary numbering…, main, 8080576 PR #30, Redesign drug monograph…, curriculum-index.js, formulary.js, precache-manifest.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@cb54779d521f4ea6263770989d5af714ec258bf9": "cb54779 Megacode: add Quick Code lite mode (now the default)" | kind=Commit | source=git | neighbors=[aed54cb PR #48 acls-megacode-scenarios, main, 700555c #49_2 acls-megacode-scenarios, precache-manifest.js, megacode-quick.spec.js, megacode.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@ce11d74b6ab584ea2bc7a2bf64aab9515cdef4e5": "ce11d74 Rewrite chapter 10 (Clinical Procedures & Skills) as guides" | kind=Commit | source=git | neighbors=[cae9224 Chapter 9 rewrite: Emergency Ph…, main, e3854cc Drop endotracheal drug delivery…, c10.js, precache-manifest.js, content-guides.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d00c567a0f375f4287d37c668d00ef9fb61e1394": "d00c567 feat: Remove Scope of Practice chapter s1 and archive s1.html and s1.js" | kind=Commit | source=git | neighbors=[8541abe chore: Change index page title …, main, fe7449d docs: Update curriculum content…, c1.js, c6.js, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d3c384340b974b079e168631b3f1d6f7af358a90": "d3c3843 Update medication list" | kind=Commit | source=git | neighbors=[main, 2550192 PR #37 Medications update, curriculum-index.js, formulary.js, precache-manifest.js, e98b15c Merge PR #36 MCI Course]
- "commit:repo:github.com/SolimanAnas/SmartCare@d6c133efce4bb7fb0d116f5e881d4d0561d898f6": "d6c133e Rewrite chapter 7 (Special Populations) as guides" | kind=Commit | source=git | neighbors=[a7f8828 Chapter 6 update : Trauma Emerg…, main, 5e168b5 Chapter 7 Update : Special Popu…, c7.js, precache-manifest.js, content-guides.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@e7131006c6e9c7c4e51b27507faa9217ce7a7780": "e713100 PR #58 Courses page layout fix" | kind=Commit | source=git | neighbors=[6018c48 PR #57 MCI Exam 1, main, a8c0f40 PR #59 MCI UI update, d72ee1e MCI: new course home and exam s…, precache-manifest.js, e984ef6 Courses page: re-check chip sta…]
- "commit:repo:github.com/SolimanAnas/SmartCare@eb1ff626a688911b1f020353cea66edcfd6e6f21": "eb1ff62 Rewrite chapter 1 (Foundations of Care) as guides" | kind=Commit | source=git | neighbors=[5e168b5 Chapter 7 Update : Special Popu…, main, 54bf4f2 Chapter 1 rewrite: Foundations …, c1.js, precache-manifest.js, content-guides.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@f272ce6dbdd19c08361ef52fdcbf7da2a6f262bc": "f272ce6 Courses page: compact, collapsible layout with real progress" | kind=Commit | source=git | neighbors=[6ee3cd6 PR #50 acls-megacode-scenarios, main, 62386af PR #51 Megacode 3, precache-manifest.js, courses-page.spec.js, test_courses_page.py]
- "commit:repo:github.com/SolimanAnas/SmartCare@f953366624005ffe9ab6d60808a50dfb0d22b4da": "f953366 PR #26 BLS-reviewer" | kind=Commit | source=git | neighbors=[154f42d Merge pull request #25 BLS revi…, 5157b39 Fix horizontal overflow on phon…, main, 2e859ad Adding PALS Course, precache-manifest.js, bls-reviewer.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@fa0335e98562bad624985ede1c0a908db6542b3d": "fa0335e Add 190 paramedic-level (ALS) questions to the Prometric exam" | kind=Commit | source=git | neighbors=[734b6ca Prometric exam: add an Exam Lev…, app.js, main, 7b23e68 PR #47 Update Question bank, precache-manifest.js, prometric.spec.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@fb463cfa3b4a0857dc1a11ef10170467e7cb796a": "fb463cf Rewrite chapter 8 (Environmental & Disaster) as guides" | kind=Commit | source=git | neighbors=[54bf4f2 Chapter 1 rewrite: Foundations …, main, 1116a68 Chapter 8 rewrite: Environmenta…, c8.js, precache-manifest.js, content-guides.spec.js]
- "mci_build": "build.py" | kind=code-symbol | source=courses/mci/build.py:L1 | neighbors=[106f200 Add MCI exam page with final ex…, 22c0924 Add MCI (Mass Casualty Incident…, e98b15c Merge PR #36 MCI Course, load(), main(), write_practice_bank()]
- "migrations_20260702000002_create_profiles": "20260702000002_create_profiles.sql" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, auth.users, on_auth_user_created, public.handle_new_user(), public.profiles]
- "prometric_exam_examengine_calculateresults": ".calculateResults()" | kind=code-symbol | source=src/prometric/exam.js:L833 | neighbors=[ExamEngine, .renderInsights(), .renderTopicPerformance(), .saveStats(), .showScreen(), .endExam()]
- "prometric_exam_examengine_endexam": ".endExam()" | kind=code-symbol | source=src/prometric/exam.js:L801 | neighbors=[ExamEngine, .calculateResults(), .closeModal(), .removeTouchListeners(), .showScreen(), .nextOrEnd()]
- "prometric_exam_examengine_handlekeyboard": ".handleKeyboard()" | kind=code-symbol | source=src/prometric/exam.js:L191 | neighbors=[ExamEngine, .navigate(), .nextOrEnd(), .selectOption(), .submitAnswer(), .toggleFlag()]
- "prometric_exam_examengine_submitanswer": ".submitAnswer()" | kind=code-symbol | source=src/prometric/exam.js:L620 | neighbors=[ExamEngine, .handleKeyboard(), .adjustCatDifficulty(), .nextOrEnd(), .saveQuestionHistory(), .updateNavigator()]
- "scripts_audio_voice_chain": "voice_chain()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L271 | neighbors=[audio.py, main(), Gentle broadcast chain for the TTS narr…, bp(), hp(), lp()]
- "scripts_build_ecg_reference_card": "card()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L163 | neighbors=[build_ecg_reference.js, actions(), esc(), record(), rhythmStrip(), twelveLead()]
- "scripts_build_ecg_reference_rhythmstrip": "rhythmStrip()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L96 | neighbors=[build_ecg_reference.js, card(), calPulse(), esc(), grid(), trace()]
- "scripts_build_precache_collect_content_files": "collect_content_files()" | kind=code-symbol | source=scripts/build_precache.py:L84 | neighbors=[build_precache.py, build_list(), rel(), content/: *.meta.js + any full bundle t…, content/: *.meta.js + any full bundle t…, content/: *.meta.js + any full bundle t…]
- "scripts_compose_app_events": "app_events()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L289 | neighbors=[compose.py, cap_of(), src_index(), Map the tapped Web Audio events into ou…, shock_times(), write_timeline()]
- "scripts_compose_lib_kicker": "kicker()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L270 | neighbors=[compose_lib.py, draw_tracked(), font(), lerp(), ramp(), Small uppercase label with a red bar: e…]
- "scripts_compose_render_macro": "render_macro()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L433 | neighbors=[compose.py, Cinematic macro of the real monitor: ti…, render_frame(), cap_of(), region_view(), src_index()]
- "scripts_gen": "gen.py" | kind=code-symbol | source=scripts/gen.py:L1 | neighbors=[create_src_folders(), generate_course_page(), main(), 1d86134 Secure SDLC Phase 0: fix critic…, 4999b7f swot-its-compliance-GaiuJ, 99cd25c Organized the Repo, Fixing all …]
- "scripts_validate_content_main": "main()" | kind=code-symbol | source=scripts/validate_content.py:L207 | neighbors=[validate_content.py, load_known_single_option(), rel(), validate_bank_content(), validate_manifest_coverage(), validate_manifest_shape()]
- "shared_admin_json": "json()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L29 | neighbors=[index.ts, index.ts, index.ts, admin.ts, corsHeaders(), requireAdmin()]
- "src_theme": "theme.js" | kind=code-symbol | source=src/theme.js:L1 | neighbors=[d1b235f Merge pull request #15 Offline …, d708b15 Ship the UI/UX Improvements sec…, current(), init(), next(), set()]
- "tests_exam_pages_spec": "exam-pages.spec.js" | kind=code-symbol | source=tests/exam-pages.spec.js:L1 | neighbors=[66d3118 BDLS update ,ECG engine update ✅, 81f95d0 ⭐PR #60 Unified Course Design s…, 8f44320 Update exam-page tests for the …, c254251 Exam pages: one design for ever…, c5c0567 Exam pages: Practice / Exam mod…, COURSES]
- "tests_test_content_guides_test_numbers_match_the_reference_notes": "test_numbers_match_the_reference_notes()" | kind=code-symbol | source=tests/test_content_guides.py:L125 | neighbors=[test_content_guides.py, page_text(), squash(), strings(), study_strings(), unify()]
- "tests_test_courses_page": "test_courses_page.py" | kind=code-symbol | source=tests/test_courses_page.py:L1 | neighbors=[62386af PR #51 Megacode 3, f272ce6 Courses page: compact, collapsi…, _chapter_counts(), test_every_reviewer_course_has_a_chapte…, test_reviewer_chapter_counts_match_mani…, pages/courses.html progress bars divide…]
- "vendor_chart_4_5_1_umd_min_aa": "aa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), .getDataset(), .getParsed(), .getDatasetMeta(), afterDatasetsUpdate()]
- "vendor_chart_4_5_1_umd_min_ao": "ao()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getPointPosition(), .getProps(), Y(), inXRange(), inYRange()]
- "vendor_chart_4_5_1_umd_min_ce": "ce()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, he(), x(), .describe(), .override(), .set()]
- "vendor_chart_4_5_1_umd_min_ci": "Ci()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Fi(), .getContext(), .getPointLabelContext(), .getContext(), .getContext()]
- "vendor_chart_4_5_1_umd_min_dataset": "dataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), .getDatasetMeta(), ve(), Xi(), Yi()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-014.json

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
