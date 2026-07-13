# Node Description Batch 38 of 49

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

- "vendor_chart_4_5_1_umd_min_tn_beforeupdate": ".beforeUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d()]
- "vendor_chart_4_5_1_umd_min_tn_calculatepadding": "._calculatePadding()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .fit()]
- "vendor_chart_4_5_1_umd_min_tn_computelabelarea": "._computeLabelArea()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .drawLabels()]
- "vendor_chart_4_5_1_umd_min_tn_drawborder": ".drawBorder()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Ae()]
- "vendor_chart_4_5_1_umd_min_tn_generateticklabels": ".generateTickLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d()]
- "vendor_chart_4_5_1_umd_min_tn_getactiveelements": ".getActiveElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .getElementsAtEventForMode()]
- "vendor_chart_4_5_1_umd_min_tn_getbasepixel": ".getBasePixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .getBaseValue()]
- "vendor_chart_4_5_1_umd_min_tn_getcontext": ".getContext()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Ci()]
- "vendor_chart_4_5_1_umd_min_tn_getpadding": ".getPadding()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ss(), tn]
- "vendor_chart_4_5_1_umd_min_tn_getuniformdatachanges": "._getUniformDataChanges()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._updateHiddenIndices()]
- "vendor_chart_4_5_1_umd_min_tn_getxaxislabelalignment": "._getXAxisLabelAlignment()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._computeLabelItems()]
- "vendor_chart_4_5_1_umd_min_tn_handlemargins": "._handleMargins()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .fit()]
- "vendor_chart_4_5_1_umd_min_tn_ispluginenabled": ".isPluginEnabled()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.initialize(), tn]
- "vendor_chart_4_5_1_umd_min_tn_removeunreferencedmetasets": "._removeUnreferencedMetasets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .buildOrUpdateControllers()]
- "vendor_chart_4_5_1_umd_min_tn_stop": ".stop()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._destroyDatasetMeta()]
- "vendor_chart_4_5_1_umd_min_tn_toggledatavisibility": ".toggleDataVisibility()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[onClick(), tn]
- "vendor_chart_4_5_1_umd_min_to": "to()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Re()]
- "vendor_chart_4_5_1_umd_min_tooltipposition": "tooltipPosition()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, getCenterPoint()]
- "vendor_chart_4_5_1_umd_min_ts_configure": ".configure()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ts(), o()]
- "vendor_chart_4_5_1_umd_min_ts_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ts(), ._createAnimations()]
- "vendor_chart_4_5_1_umd_min_w": "w()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ._exec()]
- "vendor_chart_4_5_1_umd_min_wa_drawargs": "._drawArgs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .draw()]
- "vendor_chart_4_5_1_umd_min_wa_getactiveelements": ".getActiveElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .getElementsAtEventForMode()]
- "vendor_chart_4_5_1_umd_min_wa_getcontext": ".getContext()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, Ci()]
- "vendor_chart_4_5_1_umd_min_wa_willrender": "._willRender()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[afterDraw(), wa]
- "vendor_chart_4_5_1_umd_min_ws": "ws()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, vs()]
- "vendor_chart_4_5_1_umd_min_xa": "xa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, pa()]
- "vendor_chart_4_5_1_umd_min_xe": "xe()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, pe()]
- "vendor_chart_4_5_1_umd_min_xo": "xo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks()]
- "vendor_chart_4_5_1_umd_min_xt_add": ".add()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt, ._getAnims()]
- "vendor_chart_4_5_1_umd_min_xt_refresh": "._refresh()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt, .start()]
- "vendor_chart_4_5_1_umd_min_xt_start": ".start()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt, ._refresh()]
- "vendor_chart_4_5_1_umd_min_xt_stop": ".stop()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[xt, .cancel()]
- "vendor_chart_4_5_1_umd_min_ya_fitcols": "._fitCols()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, .fit()]
- "vendor_chart_4_5_1_umd_min_ya_fitrows": "._fitRows()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, .fit()]
- "vendor_chart_4_5_1_umd_min_ya_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, .buildLabels()]
- "vendor_chart_4_5_1_umd_min_yn_countvisibleelements": ".countVisibleElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_yn_getlabelandvalue": ".getLabelAndValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), ne()]
- "vendor_chart_4_5_1_umd_min_yn_update": ".update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), ._updateRadius()]
- "vendor_supabase_js_2_110_0_bs": "bs()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L34 | neighbors=[supabase-js-2.110.0.mjs, x()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-037.json

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
