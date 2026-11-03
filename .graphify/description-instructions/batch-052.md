# Node Description Batch 53 of 62

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

- "scripts_build_ecg_reference_out_pdf": "OUT_PDF" | kind=code-symbol | source=scripts/build_ecg_reference.js:L21 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_path": "path" | kind=code-symbol | source=scripts/build_ecg_reference.js:L17 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_pathwayshtml": "pathwaysHtml()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L201 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_qr": "qr()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L43 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_root": "ROOT" | kind=code-symbol | source=scripts/build_ecg_reference.js:L20 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_shortd": "shortD()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L152 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_start": "START" | kind=code-symbol | source=scripts/build_ecg_reference.js:L37 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_twelve": "TWELVE" | kind=code-symbol | source=scripts/build_ecg_reference.js:L45 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_vm": "vm" | kind=code-symbol | source=scripts/build_ecg_reference.js:L18 | neighbors=[build_ecg_reference.js]
- "scripts_build_precache_rationale_66": "content/: *.meta.js + any full bundle that ISN'T superseded by a\r     meta.js (c" | kind=entity | source=scripts/build_precache.py:L66 | neighbors=[collect_content_files()]
- "scripts_build_precache_rationale_72": "content/: *.meta.js + any full bundle that ISN'T superseded by a\r     meta.js (c" | kind=entity | source=scripts/build_precache.py:L72 | neighbors=[collect_content_files()]
- "scripts_build_precache_rationale_85": "content/: *.meta.js + any full bundle that ISN'T superseded by a\r     meta.js (c" | kind=entity | source=scripts/build_precache.py:L85 | neighbors=[collect_content_files()]
- "scripts_build_screenshots_checkpng": "checkPng()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L156 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_chromium": "{ chromium }" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L21 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_contactsheethtml": "contactSheetHtml()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L144 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_fs": "fs" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L19 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_icon": "ICON" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L85 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_out": "OUT" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L26 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_path": "path" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L20 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_prev": "PREV" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L27 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_raw": "RAW" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L25 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_repo": "REPO" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L24 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_root": "ROOT" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L23 | neighbors=[build-screenshots.js]
- "scripts_build_screenshots_slides": "SLIDES" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L36 | neighbors=[build-screenshots.js]
- "scripts_capture_screenshots_argbase": "argBase" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L31 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_chromium": "{ chromium }" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L27 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_fixed_now": "FIXED_NOW" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L37 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_fs": "fs" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L25 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_path": "path" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L26 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_raw": "RAW" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L30 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_root": "ROOT" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L29 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_shots": "SHOTS" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L66 | neighbors=[capture-screenshots.js]
- "scripts_capture_screenshots_viewport": "VIEWPORT" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L35 | neighbors=[capture-screenshots.js]
- "scripts_check_contrast_rationale_53": "Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block." | kind=entity | source=scripts/check_contrast.py:L53 | neighbors=[parse_themes()]
- "scripts_compose_lib_bokeh_init": ".__init__()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L174 | neighbors=[Bokeh]
- "scripts_compose_lib_capture_clicks": ".clicks()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L62 | neighbors=[Capture]
- "scripts_compose_lib_capture_init": ".__init__()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L50 | neighbors=[Capture]
- "scripts_compose_lib_capture_mark": ".mark()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L58 | neighbors=[Capture]
- "scripts_compose_lib_paste_center": "paste_center()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L314 | neighbors=[compose_lib.py]
- "scripts_compose_lib_rationale_1": "Rendering primitives for the Megacode promo compositor (PIL + numpy)." | kind=entity | source=promo/megacode/scripts/compose_lib.py:L1 | neighbors=[compose_lib.py]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-052.json

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
