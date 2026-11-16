# Node Description Batch 33 of 63

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

- "prometric_exam_formatduration": "formatDuration()" | kind=code-symbol | source=src/prometric/exam.js:L43 | neighbors=[exam.js, .updateTimerHint(), plural()]
- "prometric_progress_clear": "clear()" | kind=code-symbol | source=src/prometric/progress.js:L160 | neighbors=[progress.js, remove(), write()]
- "prometric_progress_compactexam": "compactExam()" | kind=code-symbol | source=src/prometric/progress.js:L63 | neighbors=[progress.js, addExam(), count()]
- "prometric_progress_count": "count()" | kind=code-symbol | source=src/prometric/progress.js:L58 | neighbors=[progress.js, compactExam(), compactHistory()]
- "prometric_progress_loadhistory": "loadHistory()" | kind=code-symbol | source=src/prometric/progress.js:L126 | neighbors=[progress.js, compactHistory(), read()]
- "prometric_progress_remove": "remove()" | kind=code-symbol | source=src/prometric/progress.js:L50 | neighbors=[progress.js, clear(), migrate()]
- "scripts_apply_guide_images_place": "place()" | kind=code-symbol | source=scripts/apply_guide_images.js:L58 | neighbors=[apply_guide_images.js, figure(), target()]
- "scripts_assemble_chapters_extract_sections": "extract_sections()" | kind=code-symbol | source=scripts/assemble_chapters.py:L44 | neighbors=[assemble_chapters.py, assemble(), Extract section objects from a TOC sect…]
- "scripts_audio_env": "env()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L43 | neighbors=[audio.py, app_sound(), score()]
- "scripts_audio_saw": "saw()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L54 | neighbors=[audio.py, app_sound(), score()]
- "scripts_build_courses": "build_courses.py" | kind=code-symbol | source=scripts/build_courses.py:L1 | neighbors=[main(), 20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…]
- "scripts_build_ecg_reference_grid": "grid()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L78 | neighbors=[build_ecg_reference.js, rhythmStrip(), twelveLead()]
- "scripts_build_ecg_reference_twelvelead": "twelveLead()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L113 | neighbors=[build_ecg_reference.js, card(), grid()]
- "scripts_build_precache_collect_globs": "collect_globs()" | kind=code-symbol | source=scripts/build_precache.py:L113 | neighbors=[build_precache.py, build_list(), rel()]
- "scripts_build_screenshots_slidehtml": "slideHtml()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L95 | neighbors=[build-screenshots.js, dataUri(), ecgPath()]
- "scripts_build_toc_gen_chapter": "gen_chapter()" | kind=code-symbol | source=scripts/build_toc.py:L92 | neighbors=[build_toc.py, esc(), main()]
- "scripts_capture_screenshots_settle": "settle()" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L50 | neighbors=[capture-screenshots.js, startPrometric(), waitExamReady()]
- "scripts_capture_screenshots_startprometric": "startPrometric()" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L58 | neighbors=[capture-screenshots.js, settle(), waitExamReady()]
- "scripts_capture_screenshots_waitexamready": "waitExamReady()" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L52 | neighbors=[capture-screenshots.js, startPrometric(), settle()]
- "scripts_check_contrast_main": "main()" | kind=code-symbol | source=scripts/check_contrast.py:L65 | neighbors=[check_contrast.py, contrast(), parse_themes()]
- "scripts_check_contrast_parse_themes": "parse_themes()" | kind=code-symbol | source=scripts/check_contrast.py:L52 | neighbors=[check_contrast.py, main(), Extract {theme_name: {var_name: hex}} f…]
- "scripts_compose_cam_at": "cam_at()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L262 | neighbors=[compose.py, render_full(), render_play_overlays()]
- "scripts_compose_clk": "clk()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L96 | neighbors=[compose.py, build_edit(), build_edit_play()]
- "scripts_compose_end_card": "end_card()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L553 | neighbors=[compose.py, _disclaimer(), render_reveal()]
- "scripts_compose_lib_card": "card()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L111 | neighbors=[compose_lib.py, rounded_mask(), Turn a camera view (smaller than frame)…]
- "scripts_compose_lib_draw_tracked": "draw_tracked()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L245 | neighbors=[compose_lib.py, chip(), kicker()]
- "scripts_compose_lib_ease": "ease()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L30 | neighbors=[compose_lib.py, ramp(), tap_ring()]
- "scripts_compose_lib_font": "font()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L25 | neighbors=[compose_lib.py, chip(), kicker()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-032.json

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
