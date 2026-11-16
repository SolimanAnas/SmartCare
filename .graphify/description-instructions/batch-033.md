# Node Description Batch 34 of 63

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

- "scripts_compose_rationale_448": "Cold open: dark bay, alarm light, the real monitor glowing in perspective, slow" | kind=entity | source=promo/megacode/scripts/compose.py:L448 | neighbors=[Bokeh, Capture, render_open()]
- "scripts_compose_rationale_501": "The genuine debrief sheet as a floating glass screen occupying `rect` (x0, y0, x" | kind=entity | source=promo/megacode/scripts/compose.py:L501 | neighbors=[debrief_card(), Bokeh, Capture]
- "scripts_compose_refine_tap": "refine_tap()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L323 | neighbors=[compose.py, Modals re-centre when feedback appears,…, taps()]
- "scripts_compose_shock_times": "shock_times()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L277 | neighbors=[compose.py, Output times of the engine's shock cues…, app_events()]
- "scripts_compose_shot": "shot()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L110 | neighbors=[compose.py, build_edit(), build_edit_play()]
- "scripts_compose_shot_at": "shot_at()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L255 | neighbors=[compose.py, render_frame(), render_play_overlays()]
- "scripts_compose_taps": "taps()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L360 | neighbors=[compose.py, refine_tap(), src_index()]
- "scripts_compose_write_timeline": "write_timeline()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L710 | neighbors=[compose.py, main(), app_events()]
- "scripts_explore": "explore.js" | kind=code-symbol | source=promo/megacode/scripts/explore.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo, { chromium }]
- "scripts_extract_itls_toc": "extract_itls_toc.py" | kind=code-symbol | source=scripts/extract_itls_toc.py:L1 | neighbors=[Extract TOC from International Trauma L…, 0bee1e7 fix(ci): resolve ruff linting e…, b791fda content: deploy chapters 4-5 (C…]
- "scripts_gen_create_src_folders": "create_src_folders()" | kind=code-symbol | source=scripts/gen.py:L24 | neighbors=[gen.py, main(), Creates the necessary src/COURSE folder…]
- "scripts_gen_generate_course_page": "generate_course_page()" | kind=code-symbol | source=scripts/gen.py:L32 | neighbors=[gen.py, main(), Replaces placeholders in the template w…]
- "scripts_gen_main": "main()" | kind=code-symbol | source=scripts/gen.py:L55 | neighbors=[gen.py, create_src_folders(), generate_course_page()]
- "scripts_generate_all_itls_data": "generate_all_itls_data.py" | kind=code-symbol | source=scripts/generate_all_itls_data.py:L1 | neighbors=[main(), 20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…]
- "scripts_generate_maskable_icons": "generate_maskable_icons.py" | kind=code-symbol | source=scripts/generate_maskable_icons.py:L1 | neighbors=[83a1ea8 Ship the Offline & PWA section …, d1b235f Merge pull request #15 Offline …, main()]
- "scripts_record_auto": "auto()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L105 | neighbors=[record.js, advance(), click()]
- "scripts_record_waitfor": "waitFor()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L100 | neighbors=[record.js, advance(), frame()]
- "scripts_validate_content_load_json_lenient": "load_json_lenient()" | kind=code-symbol | source=scripts/validate_content.py:L50 | neighbors=[validate_content.py, Several banks were authored with a UTF-…, validate_bank_content()]
- "scripts_validate_content_question_core_fields": "question_core_fields()" | kind=code-symbol | source=scripts/validate_content.py:L104 | neighbors=[validate_content.py, Extract (text, options, correct_answer)…, validate_question()]
- "scripts_validate_content_rel": "rel()" | kind=code-symbol | source=scripts/validate_content.py:L46 | neighbors=[validate_content.py, main(), validate_manifest_coverage()]
- "scripts_validate_content_validate_manifest_coverage": "validate_manifest_coverage()" | kind=code-symbol | source=scripts/validate_content.py:L91 | neighbors=[validate_content.py, main(), rel()]
- "scripts_validate_content_validate_question": "validate_question()" | kind=code-symbol | source=scripts/validate_content.py:L113 | neighbors=[validate_content.py, validate_bank_content(), question_core_fields()]
- "shared_admin_serviceclient": "serviceClient()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L41 | neighbors=[admin.ts, requireUser(), requireAdmin()]
- "src_install_prompt_get": "get()" | kind=code-symbol | source=src/install-prompt.js:L35 | neighbors=[install-prompt.js, store(), snoozed()]
- "src_install_prompt_open": "open()" | kind=code-symbol | source=src/install-prompt.js:L220 | neighbors=[install-prompt.js, inApp(), show()]
- "src_install_prompt_snoozed": "snoozed()" | kind=code-symbol | source=src/install-prompt.js:L58 | neighbors=[install-prompt.js, autoShow(), get()]
- "src_render_state_escapehtml": "escapeHtml()" | kind=code-symbol | source=src/render-state.js:L23 | neighbors=[render-state.js, icon(), renderEmptyOrError()]
- "src_render_state_icon": "icon()" | kind=code-symbol | source=src/render-state.js:L31 | neighbors=[render-state.js, escapeHtml(), renderEmptyOrError()]
- "src_render_state_renderstate": "renderState()" | kind=code-symbol | source=src/render-state.js:L70 | neighbors=[render-state.js, renderEmptyOrError(), renderLoading()]
- "sw_networkfirst": "networkFirst()" | kind=code-symbol | source=sw.js:L123 | neighbors=[sw.js, offlineFallback(), staleWhileRevalidate()]
- "sw_offlinefallback": "offlineFallback()" | kind=code-symbol | source=sw.js:L193 | neighbors=[sw.js, networkFirst(), staleWhileRevalidate()]
- "sw_stalewhilerevalidate": "staleWhileRevalidate()" | kind=code-symbol | source=sw.js:L150 | neighbors=[sw.js, networkFirst(), offlineFallback()]
- "tests_megacode_quick_spec": "megacode-quick.spec.js" | kind=code-symbol | source=tests/megacode-quick.spec.js:L1 | neighbors=[700555c #49_2 acls-megacode-scenarios, cb54779 Megacode: add Quick Code lite m…, { test, expect }]
- "tests_test_content_guides_study_strings": "study_strings()" | kind=code-symbol | source=tests/test_content_guides.py:L77 | neighbors=[test_content_guides.py, Right answers and explanations state fa…, test_numbers_match_the_reference_notes()]
- "tests_test_content_guides_unify": "unify()" | kind=code-symbol | source=tests/test_content_guides.py:L48 | neighbors=[test_content_guides.py, page_text(), test_numbers_match_the_reference_notes()]
- "tests_test_courses_page_chapter_counts": "_chapter_counts()" | kind=code-symbol | source=tests/test_courses_page.py:L12 | neighbors=[test_courses_page.py, test_every_reviewer_course_has_a_chapte…, test_reviewer_chapter_counts_match_mani…]
- "vendor_chart_4_5_1_umd_min_afterdraw": "afterDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .notifyPlugins(), ._willRender()]
- "vendor_chart_4_5_1_umd_min_afterupdate": "afterUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .adjustHitBoxes(), .buildLabels()]
- "vendor_chart_4_5_1_umd_min_ai": "ai()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, q(), hi()]
- "vendor_chart_4_5_1_umd_min_as_active": ".active()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), ._animateOptions(), ._createAnimations()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-033.json

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
