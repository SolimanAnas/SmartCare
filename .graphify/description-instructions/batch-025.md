# Node Description Batch 26 of 49

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

- "vendor_chart_4_5_1_umd_min_getaxiscount": "_getAxisCount()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), _getAxis()]
- "vendor_chart_4_5_1_umd_min_getfirstscaleidforindexaxis": "getFirstScaleIdForIndexAxis()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), _getAxis()]
- "vendor_chart_4_5_1_umd_min_getstackindex": "_getStackIndex()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), _getStacks()]
- "vendor_chart_4_5_1_umd_min_getvalueforpixel": "getValueForPixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, jo(), .getDecimalForPixel()]
- "vendor_chart_4_5_1_umd_min_gi": "gi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, mi(), .interpolate()]
- "vendor_chart_4_5_1_umd_min_gn": "gn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .constructor(), .data()]
- "vendor_chart_4_5_1_umd_min_ha": "ha()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, tt(), la()]
- "vendor_chart_4_5_1_umd_min_ho_getlabelbounds": "._getLabelBounds()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .determineDataLimits(), .getLabelTimestamps()]
- "vendor_chart_4_5_1_umd_min_ho_getlabelsize": "._getLabelSize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), ._getLabelCapacity(), ._resolveTickFontOptions()]
- "vendor_chart_4_5_1_umd_min_ho_init": ".init()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), b(), .formats()]
- "vendor_chart_4_5_1_umd_min_inxrange": "inXRange()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ao(), co()]
- "vendor_chart_4_5_1_umd_min_inyrange": "inYRange()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ao(), co()]
- "vendor_chart_4_5_1_umd_min_is": "is()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ss(), update()]
- "vendor_chart_4_5_1_umd_min_j": "j()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks(), .buildTicks()]
- "vendor_chart_4_5_1_umd_min_jn": "jn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, l(), updateElements()]
- "vendor_chart_4_5_1_umd_min_js_applystack": ".applyStack()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_calculateBarValuePixels(), js, updateElements()]
- "vendor_chart_4_5_1_umd_min_js_destroy": "._destroy()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, rt(), ._destroyDatasetMeta()]
- "vendor_chart_4_5_1_umd_min_js_getmeta": ".getMeta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .constructor(), .getDatasetMeta()]
- "vendor_chart_4_5_1_umd_min_js_getstyle": ".getStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .resolveDatasetElementOptions(), ._setStyle()]
- "vendor_chart_4_5_1_umd_min_js_includeoptions": ".includeOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getSharedOptions(), updateElements()]
- "vendor_chart_4_5_1_umd_min_js_insertelements": "._insertElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, r(), ._resyncElements()]
- "vendor_chart_4_5_1_umd_min_js_ondatapush": "._onDataPush()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getDataset(), ._sync()]
- "vendor_chart_4_5_1_umd_min_js_updatesharedoptions": ".updateSharedOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getSharedOptions(), updateElements()]
- "vendor_chart_4_5_1_umd_min_jt_interpolate": ".interpolate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), a(), wt()]
- "vendor_chart_4_5_1_umd_min_jt_rgb": ".rgb()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), qt(), wt()]
- "vendor_chart_4_5_1_umd_min_ke": "ke()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._initialize(), .resize()]
- "vendor_chart_4_5_1_umd_min_mi": "mi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, gi(), vi()]
- "vendor_chart_4_5_1_umd_min_mt": "mt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, _t(), update()]
- "vendor_chart_4_5_1_umd_min_n_calculatetotal": ".calculateTotal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .getDataVisibility(), .update()]
- "vendor_chart_4_5_1_umd_min_n_chartoptionscopes": ".chartOptionScopes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .constructor(), .update()]
- "vendor_chart_4_5_1_umd_min_n_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), fn(), gn()]
- "vendor_chart_4_5_1_umd_min_n_datasetanimationscopekeys": ".datasetAnimationScopeKeys()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[._resolveAnimations(), n(), xn()]
- "vendor_chart_4_5_1_umd_min_n_datasetelementscopekeys": ".datasetElementScopeKeys()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[._resolveElementOptions(), n(), xn()]
- "vendor_chart_4_5_1_umd_min_n_datasetscopekeys": ".datasetScopeKeys()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.configure(), n(), xn()]
- "vendor_chart_4_5_1_umd_min_n_getcircumference": "._getCircumference()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._circumference(), ._getRotationExtents()]
- "vendor_chart_4_5_1_umd_min_n_getrotation": "._getRotation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._getRotationExtents(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_n_getvisibledatasetweighttotal": "._getVisibleDatasetWeightTotal()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._getRingWeightOffset(), .update()]
- "vendor_chart_4_5_1_umd_min_n_pluginscopekeys": ".pluginScopeKeys()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), xn(), rn()]
- "vendor_chart_4_5_1_umd_min_nearest": "nearest()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ve(), Xi()]
- "vendor_chart_4_5_1_umd_min_ns": "ns()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, s(), os()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-025.json

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
