# Node Description Batch 41 of 62

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

- "scripts_audio_midi": "midi()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L107 | neighbors=[audio.py, score()]
- "scripts_audio_read_wav": "read_wav()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L262 | neighbors=[audio.py, main()]
- "scripts_audio_square": "square()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L66 | neighbors=[audio.py, app_sound()]
- "scripts_audio_tri": "tri()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L76 | neighbors=[audio.py, app_sound()]
- "scripts_build_ecg_reference_actions": "actions()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L139 | neighbors=[build_ecg_reference.js, card()]
- "scripts_build_ecg_reference_calpulse": "calPulse()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L90 | neighbors=[build_ecg_reference.js, rhythmStrip()]
- "scripts_build_ecg_reference_paper": "paper()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L30 | neighbors=[build_ecg_reference.js, esc()]
- "scripts_build_ecg_reference_record": "record()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L47 | neighbors=[build_ecg_reference.js, card()]
- "scripts_build_ecg_reference_trace": "trace()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L59 | neighbors=[build_ecg_reference.js, rhythmStrip()]
- "scripts_build_precache_content_hash": "content_hash()" | kind=code-symbol | source=scripts/build_precache.py:L146 | neighbors=[build_precache.py, main()]
- "scripts_build_screenshots_datauri": "dataUri()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L79 | neighbors=[build-screenshots.js, slideHtml()]
- "scripts_build_screenshots_ecgpath": "ecgPath()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L88 | neighbors=[build-screenshots.js, slideHtml()]
- "scripts_build_toc_esc": "esc()" | kind=code-symbol | source=scripts/build_toc.py:L88 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_build_toc_main": "main()" | kind=code-symbol | source=scripts/build_toc.py:L131 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_check_contrast_hex_to_rgb": "hex_to_rgb()" | kind=code-symbol | source=scripts/check_contrast.py:L30 | neighbors=[check_contrast.py, contrast()]
- "scripts_check_contrast_luminance": "luminance()" | kind=code-symbol | source=scripts/check_contrast.py:L37 | neighbors=[check_contrast.py, contrast()]
- "scripts_compose_captions": "captions()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L213 | neighbors=[compose.py, Narration as burned-in captions (the st…]
- "scripts_compose_disclaimer": "_disclaimer()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L623 | neighbors=[compose.py, end_card()]
- "scripts_compose_lib_bokeh_render": ".render()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L196 | neighbors=[Bokeh, .sprite()]
- "scripts_compose_lib_bokeh_sprite": ".sprite()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L185 | neighbors=[Bokeh, .render()]
- "scripts_compose_lib_camera_view": "camera_view()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L74 | neighbors=[compose_lib.py, Render src (RGB) as seen by a camera ce…]
- "scripts_compose_lib_capture_frame": ".frame()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L69 | neighbors=[Capture, .frames()]
- "scripts_compose_lib_capture_frames": ".frames()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L65 | neighbors=[Capture, .frame()]
- "scripts_compose_lib_grade": "grade()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L228 | neighbors=[compose_lib.py, _grain()]
- "scripts_compose_lib_gradient_bg": "gradient_bg()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L159 | neighbors=[compose_lib.py, _grid()]
- "scripts_compose_lib_grain": "_grain()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L224 | neighbors=[compose_lib.py, grade()]
- "scripts_compose_lib_grid": "_grid()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L154 | neighbors=[compose_lib.py, gradient_bg()]
- "scripts_compose_lib_lerp": "lerp()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L39 | neighbors=[compose_lib.py, kicker()]
- "scripts_compose_lib_rounded_mask": "rounded_mask()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L105 | neighbors=[compose_lib.py, card()]
- "scripts_compose_lib_text_size": "text_size()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L240 | neighbors=[compose_lib.py, chip()]
- "scripts_compose_region_view": "region_view()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L420 | neighbors=[compose.py, render_macro()]
- "scripts_compose_render_titles": "render_titles()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L633 | neighbors=[compose.py, render_frame()]
- "scripts_compose_to_out": "to_out()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L386 | neighbors=[compose.py, render_full()]
- "scripts_generate_screenshots_compress": "compress()" | kind=code-symbol | source=scripts/generate_screenshots.py:L54 | neighbors=[generate_screenshots.py, main()]
- "scripts_generate_screenshots_main": "main()" | kind=code-symbol | source=scripts/generate_screenshots.py:L60 | neighbors=[generate_screenshots.py, compress()]
- "scripts_generate_splash_device_entry": "device_entry()" | kind=code-symbol | source=scripts/generate_splash.py:L41 | neighbors=[generate_splash.py, main()]
- "scripts_generate_splash_main": "main()" | kind=code-symbol | source=scripts/generate_splash.py:L51 | neighbors=[generate_splash.py, device_entry()]
- "scripts_inject": "inject.js" | kind=code-symbol | source=promo/megacode/scripts/inject.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo]
- "scripts_qa_blacks": "blacks()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L36 | neighbors=[qa.py, main()]
- "scripts_qa_loudness": "loudness()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L28 | neighbors=[qa.py, main()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-040.json

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
