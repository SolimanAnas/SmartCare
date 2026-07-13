# Node Description Batch 35 of 49

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

- "vendor_chart_4_5_1_umd_min_as_tick": ".tick()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), .cancel()]
- "vendor_chart_4_5_1_umd_min_as_wait": ".wait()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), ._animateOptions()]
- "vendor_chart_4_5_1_umd_min_be": "Be()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ne()]
- "vendor_chart_4_5_1_umd_min_beforelayout": "beforeLayout()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Go()]
- "vendor_chart_4_5_1_umd_min_bi": "Bi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Fi()]
- "vendor_chart_4_5_1_umd_min_bo_getlabelforvalue": ".getLabelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, ne()]
- "vendor_chart_4_5_1_umd_min_bo_getticklimit": ".getTickLimit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, .buildTicks()]
- "vendor_chart_4_5_1_umd_min_bo_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, s()]
- "vendor_chart_4_5_1_umd_min_buildlookuptable": "buildLookupTable()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, initOffsets()]
- "vendor_chart_4_5_1_umd_min_buildticks": "buildTicks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabels()]
- "vendor_chart_4_5_1_umd_min_cn": "cn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, hn()]
- "vendor_chart_4_5_1_umd_min_de_get": ".get()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, he()]
- "vendor_chart_4_5_1_umd_min_de_override": ".override()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, ce()]
- "vendor_chart_4_5_1_umd_min_de_route": ".route()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, he()]
- "vendor_chart_4_5_1_umd_min_de_set": ".set()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, ce()]
- "vendor_chart_4_5_1_umd_min_dn": "dn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, fe()]
- "vendor_chart_4_5_1_umd_min_do": "Do()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, co()]
- "vendor_chart_4_5_1_umd_min_ei": "ei()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e()]
- "vendor_chart_4_5_1_umd_min_en_isfortype": ".isForType()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en, ._getRegistryForType()]
- "vendor_chart_4_5_1_umd_min_fo": "fo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw()]
- "vendor_chart_4_5_1_umd_min_generate": "_generate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getDataTimestamps()]
- "vendor_chart_4_5_1_umd_min_generatelabels": "generateLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._getSortedDatasetMetas()]
- "vendor_chart_4_5_1_umd_min_getdecimalforvalue": "getDecimalForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, jo()]
- "vendor_chart_4_5_1_umd_min_getmaxoverflow": "getMaxOverflow()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, size()]
- "vendor_chart_4_5_1_umd_min_getpixelforvalue": "getPixelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_getrange": "getRange()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ji()]
- "vendor_chart_4_5_1_umd_min_go": "Go()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, beforeLayout()]
- "vendor_chart_4_5_1_umd_min_gs": "Gs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._computeGridLineItems()]
- "vendor_chart_4_5_1_umd_min_h": "H()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks()]
- "vendor_chart_4_5_1_umd_min_hn": "hn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, cn()]
- "vendor_chart_4_5_1_umd_min_ho_generateticklabels": ".generateTickLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), ._tickFormatFunction()]
- "vendor_chart_4_5_1_umd_min_ho_getpixelforvalue": ".getPixelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_ho_getvalueforpixel": ".getValueForPixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .getDecimalForPixel()]
- "vendor_chart_4_5_1_umd_min_ho_initoffsets": ".initOffsets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), Z()]
- "vendor_chart_4_5_1_umd_min_ho_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), Vo()]
- "vendor_chart_4_5_1_umd_min_init": "init()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabels()]
- "vendor_chart_4_5_1_umd_min_initialize": "initialize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getDataset()]
- "vendor_chart_4_5_1_umd_min_js_addelements": ".addElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._dataCheck()]
- "vendor_chart_4_5_1_umd_min_js_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getMeta()]
- "vendor_chart_4_5_1_umd_min_js_getlabelandvalue": ".getLabelAndValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getParsed()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-034.json

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
