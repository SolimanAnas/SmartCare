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

- "scripts_build_courses_main": "main()" | kind=code-symbol | source=scripts/build_courses.py:L6 | neighbors=[build_courses.py]
- "scripts_build_ecg_reference_datauri": "dataUri()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L38 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_defs": "defs()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L84 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_e": "E" | kind=code-symbol | source=scripts/build_ecg_reference.js:L25 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_fs": "fs" | kind=code-symbol | source=scripts/build_ecg_reference.js:L16 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_indexhtml": "indexHtml()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L193 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_keep_html": "KEEP_HTML" | kind=code-symbol | source=scripts/build_ecg_reference.js:L22 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_kind_order": "KIND_ORDER" | kind=code-symbol | source=scripts/build_ecg_reference.js:L136 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_l": "L" | kind=code-symbol | source=scripts/build_ecg_reference.js:L26 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_logo": "LOGO" | kind=code-symbol | source=scripts/build_ecg_reference.js:L39 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_logo_small": "LOGO_SMALL" | kind=code-symbol | source=scripts/build_ecg_reference.js:L40 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_mi_img": "MI_IMG" | kind=code-symbol | source=scripts/build_ecg_reference.js:L41 | neighbors=[build_ecg_reference.js]
- "scripts_build_ecg_reference_mihtml": "miHtml()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L217 | neighbors=[build_ecg_reference.js]
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
