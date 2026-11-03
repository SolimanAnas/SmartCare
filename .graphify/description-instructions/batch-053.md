# Node Description Batch 54 of 62

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

- "scripts_compose_lib_rationale_112": "Turn a camera view (smaller than frame) into a floating screen with shadow + edg" | kind=entity | source=promo/megacode/scripts/compose_lib.py:L112 | neighbors=[card()] | lang=pt
- "scripts_compose_lib_rationale_136": "PIL PERSPECTIVE coefficients mapping output (dst) points back to source points." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L136 | neighbors=[perspective_coeffs()] | lang=en
- "scripts_compose_lib_rationale_145": "Warp the full src onto quad (tl, tr, br, bl) in a W×H RGBA canvas." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L145 | neighbors=[perspective()] | lang=en
- "scripts_compose_lib_rationale_172": "Out-of-focus clinical lights drifting slowly — a stylised resuscitation-bay back" | kind=entity | source=promo/megacode/scripts/compose_lib.py:L172 | neighbors=[Bokeh] | lang=pt
- "scripts_compose_lib_rationale_256": "Word-by-word rise + fade. Returns width drawn." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L256 | neighbors=[words_reveal()] | lang=en
- "scripts_compose_lib_rationale_271": "Small uppercase label with a red bar: e.g.  ▍RECOGNIZE THE RHYTHM" | kind=entity | source=promo/megacode/scripts/compose_lib.py:L271 | neighbors=[kicker()] | lang=en
- "scripts_compose_lib_rationale_285": "Persistent corner label over footage: dark glass pill with red dot." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L285 | neighbors=[chip()] | lang=en
- "scripts_compose_lib_rationale_301": "Touch indicator where the learner tapped (age in seconds since the tap)." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L301 | neighbors=[tap_ring()] | lang=en
- "scripts_compose_lib_rationale_48": "Frames + manifest of one recorded layout (land / vert)." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L48 | neighbors=[Capture] | lang=en
- "scripts_compose_lib_rationale_75": "Render src (RGB) as seen by a camera centred on (cx, cy) in normalised source" | kind=entity | source=promo/megacode/scripts/compose_lib.py:L75 | neighbors=[camera_view()] | lang=en
- "scripts_compose_lib_vignette": "vignette()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L211 | neighbors=[compose_lib.py] | lang=en
- "scripts_compose_lib_with_alpha": "with_alpha()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L323 | neighbors=[compose_lib.py] | lang=en
- "scripts_driver_chromium": "{ chromium }" | kind=code-symbol | source=promo/megacode/scripts/driver.js:L2 | neighbors=[driver.js] | lang=en
- "scripts_driver_path": "path" | kind=code-symbol | source=promo/megacode/scripts/driver.js:L3 | neighbors=[driver.js] | lang=en
- "scripts_explore_chromium": "{ chromium }" | kind=code-symbol | source=promo/megacode/scripts/explore.js:L1 | neighbors=[explore.js] | lang=en
- "scripts_explore2_open": "{ open }" | kind=code-symbol | source=promo/megacode/scripts/explore2.js:L1 | neighbors=[explore2.js] | lang=en
- "scripts_extract_itls_toc_rationale_1": "Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in" | kind=entity | source=scripts/extract_itls_toc.py:L1 | neighbors=[extract_itls_toc.py] | lang=en
- "scripts_gen_rationale_25": "Creates the necessary src/COURSE folders." | kind=entity | source=scripts/gen.py:L25 | neighbors=[create_src_folders()] | lang=en
- "scripts_gen_rationale_33": "Replaces placeholders in the template with course-specific data." | kind=entity | source=scripts/gen.py:L33 | neighbors=[generate_course_page()] | lang=en
- "scripts_generate_all_itls_data_main": "main()" | kind=code-symbol | source=scripts/generate_all_itls_data.py:L975 | neighbors=[generate_all_itls_data.py] | lang=en
- "scripts_generate_maskable_icons_main": "main()" | kind=code-symbol | source=scripts/generate_maskable_icons.py:L29 | neighbors=[generate_maskable_icons.py] | lang=en
- "scripts_generate_sitemap_main": "main()" | kind=code-symbol | source=scripts/generate_sitemap.py:L33 | neighbors=[generate_sitemap.py] | lang=en
- "scripts_peek_vert_open": "{ open }" | kind=code-symbol | source=promo/megacode/scripts/peek_vert.js:L1 | neighbors=[peek_vert.js] | lang=en
- "scripts_poster_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/poster.py:L25 | neighbors=[poster.py] | lang=en
- "scripts_record_answers": "ANSWERS" | kind=code-symbol | source=promo/megacode/scripts/record.js:L17 | neighbors=[record.js] | lang=en
- "scripts_record_begin": "begin()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L67 | neighbors=[record.js] | lang=en
- "scripts_record_end": "end()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L74 | neighbors=[record.js] | lang=en
- "scripts_record_fs": "fs" | kind=code-symbol | source=promo/megacode/scripts/record.js:L5 | neighbors=[record.js] | lang=en
- "scripts_record_open": "{ open }" | kind=code-symbol | source=promo/megacode/scripts/record.js:L7 | neighbors=[record.js] | lang=en
- "scripts_record_out": "OUT" | kind=code-symbol | source=promo/megacode/scripts/record.js:L13 | neighbors=[record.js] | lang=en
- "scripts_record_path": "path" | kind=code-symbol | source=promo/megacode/scripts/record.js:L6 | neighbors=[record.js] | lang=en
- "scripts_record_quiz": "QUIZ" | kind=code-symbol | source=promo/megacode/scripts/record.js:L38 | neighbors=[record.js] | lang=en
- "scripts_split_content_chapter_ids": "CHAPTER_IDS" | kind=code-symbol | source=scripts/split_content.js:L22 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_content_dir": "CONTENT_DIR" | kind=code-symbol | source=scripts/split_content.js:L17 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_fs": "fs" | kind=code-symbol | source=scripts/split_content.js:L12 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_path": "path" | kind=code-symbol | source=scripts/split_content.js:L13 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_root": "ROOT" | kind=code-symbol | source=scripts/split_content.js:L16 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_vm": "vm" | kind=code-symbol | source=scripts/split_content.js:L14 | neighbors=[split_content.js] | lang=en
- "scripts_validate_content_rationale_105": "Extract (text, options, correct_answer) regardless of which of the\r     bank's s" | kind=entity | source=scripts/validate_content.py:L105 | neighbors=[question_core_fields()] | lang=en
- "scripts_validate_content_rationale_51": "Several banks were authored with a UTF-8 BOM; browsers' fetch().json()\r     tole" | kind=entity | source=scripts/validate_content.py:L51 | neighbors=[load_json_lenient()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-053.json

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
