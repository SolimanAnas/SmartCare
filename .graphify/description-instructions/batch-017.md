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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

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
- "vendor_chart_4_5_1_umd_min_de_apply": ".apply()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ca, d(), de, .constructor(), dt(), .parse()]
- "vendor_chart_4_5_1_umd_min_g": "g()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, n(), o(), .getMinMax(), m(), .update()]
- "vendor_chart_4_5_1_umd_min_hi": "hi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ai(), li(), Re(), ri(), .updateControlPoints()]
- "vendor_chart_4_5_1_umd_min_ho_buildticks": ".buildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), e(), ._getLabelCapacity(), .getLabelTimestamps(), nt(), .diff()]
- "vendor_chart_4_5_1_umd_min_ho_generate": "._generate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .getDataTimestamps(), ._getLabelCapacity(), l(), .diff(), .startOf()]
- "vendor_chart_4_5_1_umd_min_jt_rotate": ".rotate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[Ee(), jt(), Ft(), It(), ne(), .drawLabels()]
- "vendor_chart_4_5_1_umd_min_lo": "lo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ho(), ki(), s(), wi(), Z()]
- "vendor_chart_4_5_1_umd_min_m": "m()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, g(), o(), p(), v(), x()]
- "vendor_chart_4_5_1_umd_min_n_getrotationextents": "._getRotationExtents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._getCircumference(), ._getRotation(), .getDatasetMeta(), .isDatasetVisible(), .update()]
- "vendor_chart_4_5_1_umd_min_parse": "parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), l(), po(), s(), .getLabels()]
- "vendor_chart_4_5_1_umd_min_re": "Re()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw(), hi(), .isPointInArea(), to(), Yi()]
- "vendor_chart_4_5_1_umd_min_ri": "ri()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, hi(), a(), l(), r(), v()]
- "vendor_chart_4_5_1_umd_min_ro_getpointpositionforvalue": ".getPointPositionForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[da(), ro(), .getBasePosition(), .getDistanceFromCenterForValue(), .getPointPosition(), updateElements()]
- "vendor_chart_4_5_1_umd_min_t": "_t()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .greyscale(), kt(), mt(), vt(), wt()]
- "vendor_chart_4_5_1_umd_min_ta": "Ta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ki(), Si(), u(), .update(), ._updateAnimationTarget()]
- "vendor_chart_4_5_1_umd_min_tn_calculatelabelrotation": ".calculateLabelRotation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._getLabelSizes(), ._isVisible(), Y(), Z(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_computelabelsizes": "._computeLabelSizes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, n(), s(), ._resolveTickFontOptions(), u(), ._getLabelSizes()]
- "vendor_chart_4_5_1_umd_min_tn_drawdataset": "._drawDataset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Ie(), Ni(), .notifyPlugins(), ze(), ._drawDatasets()]
- "vendor_chart_4_5_1_umd_min_tn_eventhandler": "._eventHandler()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._handleEvent(), .isPointInArea(), .notifyPlugins(), .render(), .update()]

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
