# Node Description Batch 51 of 62

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

- "app_updatebottomnavvisibility": "updateBottomNavVisibility()" | kind=code-symbol | source=app.js:L395 | neighbors=[app.js]
- "app_updatefooternavposition": "updateFooterNavPosition()" | kind=code-symbol | source=app.js:L406 | neighbors=[app.js]
- "app_updateheadervisibility": "updateHeaderVisibility()" | kind=code-symbol | source=app.js:L372 | neighbors=[app.js]
- "app_updateprogressbarposition": "updateProgressBarPosition()" | kind=code-symbol | source=app.js:L385 | neighbors=[app.js]
- "app_updatescrollprogress": "updateScrollProgress()" | kind=code-symbol | source=app.js:L415 | neighbors=[app.js]
- "cpg_guide_list": "list()" | kind=code-symbol | source=cpg-guide.js:L37 | neighbors=[cpg-guide.js]
- "cpg_guide_stackedtable": "stackedTable()" | kind=code-symbol | source=cpg-guide.js:L56 | neighbors=[cpg-guide.js]
- "google_flow_generate_batches_anatomy": "ANATOMY" | kind=code-symbol | source=.google-flow/generate-batches.js:L12 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_batches": "batches" | kind=code-symbol | source=.google-flow/generate-batches.js:L159 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_byid": "byId" | kind=code-symbol | source=.google-flow/generate-batches.js:L106 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_chapters": "chapters" | kind=code-symbol | source=.google-flow/generate-batches.js:L157 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_count": "count()" | kind=code-symbol | source=.google-flow/generate-batches.js:L180 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_counted": "counted" | kind=code-symbol | source=.google-flow/generate-batches.js:L173 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_csv": "csv" | kind=code-symbol | source=.google-flow/generate-batches.js:L210 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_days": "days()" | kind=code-symbol | source=.google-flow/generate-batches.js:L184 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_entries": "entries" | kind=code-symbol | source=.google-flow/generate-batches.js:L89 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_famorder": "famOrder" | kind=code-symbol | source=.google-flow/generate-batches.js:L158 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_fix": "FIX" | kind=code-symbol | source=.google-flow/generate-batches.js:L16 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_flow": "flow" | kind=code-symbol | source=.google-flow/generate-batches.js:L153 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_force_pro": "FORCE_PRO" | kind=code-symbol | source=.google-flow/generate-batches.js:L9 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_fs": "fs" | kind=code-symbol | source=.google-flow/generate-batches.js:L2 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_keep": "KEEP" | kind=code-symbol | source=.google-flow/generate-batches.js:L84 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_labels": "LABELS" | kind=code-symbol | source=.google-flow/generate-batches.js:L42 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_many": "MANY" | kind=code-symbol | source=.google-flow/generate-batches.js:L15 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_md": "md" | kind=code-symbol | source=.google-flow/generate-batches.js:L87 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_object": "OBJECT" | kind=code-symbol | source=.google-flow/generate-batches.js:L13 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_out": "OUT" | kind=code-symbol | source=.google-flow/generate-batches.js:L3 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_overlay": "OVERLAY" | kind=code-symbol | source=.google-flow/generate-batches.js:L8 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_path": "path" | kind=code-symbol | source=.google-flow/generate-batches.js:L2 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_pilot": "PILOT" | kind=code-symbol | source=.google-flow/generate-batches.js:L10 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_progen": "proGen" | kind=code-symbol | source=.google-flow/generate-batches.js:L183 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_prompt": "prompt()" | kind=code-symbol | source=.google-flow/generate-batches.js:L126 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_q": "q()" | kind=code-symbol | source=.google-flow/generate-batches.js:L209 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_reuse": "REUSE" | kind=code-symbol | source=.google-flow/generate-batches.js:L7 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_rows": "rows" | kind=code-symbol | source=.google-flow/generate-batches.js:L221 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_scene": "SCENE" | kind=code-symbol | source=.google-flow/generate-batches.js:L14 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_sensitive": "SENSITIVE" | kind=code-symbol | source=.google-flow/generate-batches.js:L40 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_square": "SQUARE" | kind=code-symbol | source=.google-flow/generate-batches.js:L11 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_stats": "stats" | kind=code-symbol | source=.google-flow/generate-batches.js:L185 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_stdgen": "stdGen" | kind=code-symbol | source=.google-flow/generate-batches.js:L183 | neighbors=[generate-batches.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-050.json

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
