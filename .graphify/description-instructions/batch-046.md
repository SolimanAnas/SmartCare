# Node Description Batch 47 of 49

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

- "vendor_chart_4_5_1_umd_min_tn_ishorizontal": ".isHorizontal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_options": ".options()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_register": ".register()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_registry": ".registry()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_setdimensions": ".setDimensions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_tobase64image": ".toBase64Image()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tn_unregister": ".unregister()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn]
- "vendor_chart_4_5_1_umd_min_tooltip": "Tooltip()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_ts_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ts()]
- "vendor_chart_4_5_1_umd_min_uo": "uo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_updaterangefromparsed": "updateRangeFromParsed()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_va": "va()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_wa_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa]
- "vendor_chart_4_5_1_umd_min_wa_initialize": ".initialize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa]
- "vendor_chart_4_5_1_umd_min_wa_ishorizontal": ".isHorizontal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa]
- "vendor_chart_4_5_1_umd_min_wa_resolveanimations": "._resolveAnimations()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa]
- "vendor_chart_4_5_1_umd_min_xs": "xs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_xt_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt]
- "vendor_chart_4_5_1_umd_min_xt_notify": "._notify()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt]
- "vendor_chart_4_5_1_umd_min_xt_remove": ".remove()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt]
- "vendor_chart_4_5_1_umd_min_xt_update": "._update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt]
- "vendor_chart_4_5_1_umd_min_ya_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya]
- "vendor_chart_4_5_1_umd_min_ya_ishorizontal": ".isHorizontal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya]
- "vendor_chart_4_5_1_umd_min_ya_setdimensions": ".setDimensions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya]
- "vendor_chart_4_5_1_umd_min_yn_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn()]
- "vendor_chart_4_5_1_umd_min_yn_getminmax": ".getMinMax()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn()]
- "vendor_chart_4_5_1_umd_min_yn_parseobjectdata": ".parseObjectData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn()]
- "vendor_chart_4_5_1_umd_min_zo": "Zo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_supabase_js_2_110_0_abortsignal": "abortSignal()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_analytics": "analytics()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_as": "As()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_asstream": "asStream()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_bn": "Bn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_cancelceremony": "cancelCeremony()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L33 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_cn": "cn()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_copybindings": "copyBindings()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_csv": "csv()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L9 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_dr": "dr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L6 | neighbors=[supabase-js-2.110.0.mjs]
- "vendor_supabase_js_2_110_0_ds": "ds()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-046.json

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
