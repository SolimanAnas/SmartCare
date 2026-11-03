# Node Description Batch 31 of 62

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

- "scripts_compose_lib_perspective": "perspective()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L144 | neighbors=[compose_lib.py, perspective_coeffs(), Warp the full src onto quad (tl, tr, br…]
- "scripts_compose_lib_perspective_coeffs": "perspective_coeffs()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L135 | neighbors=[compose_lib.py, perspective(), PIL PERSPECTIVE coefficients mapping ou…]
- "scripts_compose_lib_tap_ring": "tap_ring()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L300 | neighbors=[compose_lib.py, Touch indicator where the learner tappe…, ease()]
- "scripts_compose_lib_words_reveal": "words_reveal()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L255 | neighbors=[compose_lib.py, Word-by-word rise + fade. Returns width…, ramp()]
- "scripts_compose_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L726 | neighbors=[compose.py, render_frame(), write_timeline()]
- "scripts_compose_mk": "mk()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L101 | neighbors=[compose.py, build_edit(), build_edit_play()]
- "scripts_compose_rationale_175": "33 s store-listing cut: the real app on screen from the first frame, core loop i" | kind=entity | source=promo/megacode/scripts/compose.py:L175 | neighbors=[build_edit_play(), Bokeh, Capture]
- "scripts_compose_rationale_214": "Narration as burned-in captions (the store autoplays muted), split by sentence a" | kind=entity | source=promo/megacode/scripts/compose.py:L214 | neighbors=[captions(), Bokeh, Capture]
- "scripts_compose_rationale_278": "Output times of the engine's shock cues (noise bursts) — drives flash + impact." | kind=entity | source=promo/megacode/scripts/compose.py:L278 | neighbors=[Bokeh, Capture, shock_times()]
- "scripts_compose_rationale_290": "Map the tapped Web Audio events into output time through the edit." | kind=entity | source=promo/megacode/scripts/compose.py:L290 | neighbors=[app_events(), Bokeh, Capture]
- "scripts_compose_rationale_324": "Modals re-centre when feedback appears, so the tapped button moves on the very n" | kind=entity | source=promo/megacode/scripts/compose.py:L324 | neighbors=[Bokeh, Capture, refine_tap()]
- "scripts_compose_rationale_434": "Cinematic macro of the real monitor: tight crop, slow push, shallow focus, glow." | kind=entity | source=promo/megacode/scripts/compose.py:L434 | neighbors=[Bokeh, Capture, render_macro()]
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
- "server_admin_emails": "_admin_emails()" | kind=code-symbol | source=server.py:L150 | neighbors=[server.py, _is_admin(), Allow-list of admin emails sourced from…]
- "server_audit": "_audit()" | kind=code-symbol | source=server.py:L20 | neighbors=[server.py, Write a structured audit record for aut…, Write a structured audit record for aut…]
- "server_is_admin": "_is_admin()" | kind=code-symbol | source=server.py:L156 | neighbors=[server.py, _admin_emails(), A user is an admin if their role is 'Ad…]
- "server_supabase_admin_configured": "_supabase_admin_configured()" | kind=code-symbol | source=server.py:L83 | neighbors=[server.py, _require_supabase_user(), _supabase_user_from_token()]
- "src_render_state_escapehtml": "escapeHtml()" | kind=code-symbol | source=src/render-state.js:L23 | neighbors=[render-state.js, icon(), renderEmptyOrError()]
- "src_render_state_icon": "icon()" | kind=code-symbol | source=src/render-state.js:L31 | neighbors=[render-state.js, escapeHtml(), renderEmptyOrError()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-030.json

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
