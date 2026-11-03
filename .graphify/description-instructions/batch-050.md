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
- "google_flow_generate_batches_subject": "SUBJECT" | kind=code-symbol | source=.google-flow/generate-batches.js:L59 | neighbors=[generate-batches.js]
- "google_flow_generate_batches_svg": "SVG" | kind=code-symbol | source=.google-flow/generate-batches.js:L6 | neighbors=[generate-batches.js]
- "google_flow_run_all_from_to": "[from, to]" | kind=code-symbol | source=.google-flow/run-all.mjs:L8 | neighbors=[run-all.mjs]
- "google_flow_run_all_limited": "limited" | kind=code-symbol | source=.google-flow/run-all.mjs:L12 | neighbors=[run-all.mjs]
- "google_flow_run_all_models": "MODELS" | kind=code-symbol | source=.google-flow/run-all.mjs:L11 | neighbors=[run-all.mjs]
- "google_flow_run_all_names": "names" | kind=code-symbol | source=.google-flow/run-all.mjs:L9 | neighbors=[run-all.mjs]
- "google_flow_run_batch_arg": "arg()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L18 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_batcharg": "batchArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L19 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_idsarg": "idsArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L19 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_jobs": "jobs" | kind=code-symbol | source=.google-flow/run-batch.mjs:L66 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_limited": "limited" | kind=code-symbol | source=.google-flow/run-batch.mjs:L85 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_load": "load()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L10 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_log": "LOG" | kind=code-symbol | source=.google-flow/run-batch.mjs:L20 | neighbors=[run-batch.mjs]
- "google_flow_run_batch_modelarg": "modelArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L19 | neighbors=[run-batch.mjs]

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
