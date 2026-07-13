# Node Description Batch 28 of 49

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

- "vendor_chart_4_5_1_umd_min_tn_drawgrid": ".drawGrid()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, a(), ._computeGridLineItems()]
- "vendor_chart_4_5_1_umd_min_tn_ensurescaleshaveids": ".ensureScalesHaveIDs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, u(), ._updateScales()]
- "vendor_chart_4_5_1_umd_min_tn_getlabelitems": ".getLabelItems()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .drawLabels(), ._computeLabelItems()]
- "vendor_chart_4_5_1_umd_min_tn_getlinewidthforvalue": ".getLineWidthForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_calculateBarValuePixels(), tn, ._isVisible()]
- "vendor_chart_4_5_1_umd_min_tn_getvisibledatasetcount": ".getVisibleDatasetCount()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .getSortedVisibleDatasetMetas(), ._updateRadius()]
- "vendor_chart_4_5_1_umd_min_tn_getyaxislabelalignment": "._getYAxisLabelAlignment()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._computeLabelItems(), ._getLabelSizes()]
- "vendor_chart_4_5_1_umd_min_tn_hide": ".hide()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[onClick(), tn, ._updateVisibility()]
- "vendor_chart_4_5_1_umd_min_tn_layers": "._layers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, l(), ._isVisible()]
- "vendor_chart_4_5_1_umd_min_tn_maxdigits": "._maxDigits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.buildTicks(), tn, ._resolveTickFontOptions()]
- "vendor_chart_4_5_1_umd_min_tn_reset": ".reset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .notifyPlugins(), ._resetElements()]
- "vendor_chart_4_5_1_umd_min_tn_resetelements": "._resetElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .reset(), u()]
- "vendor_chart_4_5_1_umd_min_tn_setactiveelements": ".setActiveElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, f(), ._updateHoverStyles()]
- "vendor_chart_4_5_1_umd_min_tn_setdatasetvisibility": ".setDatasetVisibility()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .getDatasetMeta(), ._updateVisibility()]
- "vendor_chart_4_5_1_umd_min_tn_show": ".show()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[onClick(), tn, ._updateVisibility()]
- "vendor_chart_4_5_1_umd_min_tn_ticksize": "._tickSize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._getLabelSizes(), Ys()]
- "vendor_chart_4_5_1_umd_min_tn_updatehiddenindices": "._updateHiddenIndices()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .update(), ._getUniformDataChanges()]
- "vendor_chart_4_5_1_umd_min_un": "un()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, fn(), ln()]
- "vendor_chart_4_5_1_umd_min_us": "Us()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, l(), Ys()]
- "vendor_chart_4_5_1_umd_min_v": "v()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, m(), ri()]
- "vendor_chart_4_5_1_umd_min_wa_createitems": "._createItems()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, u(), .update()]
- "vendor_chart_4_5_1_umd_min_wa_drawbackground": ".drawBackground()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .drawCaret(), wi()]
- "vendor_chart_4_5_1_umd_min_wa_drawcaret": ".drawCaret()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .drawBackground(), .getCaretPosition()]
- "vendor_chart_4_5_1_umd_min_wa_getbody": ".getBody()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, u(), .update()]
- "vendor_chart_4_5_1_umd_min_wa_getcaretposition": ".getCaretPosition()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .drawCaret(), wi()]
- "vendor_chart_4_5_1_umd_min_wa_getfooter": ".getFooter()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, Ba(), .update()]
- "vendor_chart_4_5_1_umd_min_wa_gettitle": ".getTitle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, Ba(), .update()]
- "vendor_chart_4_5_1_umd_min_wa_handleevent": ".handleEvent()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, f(), ._positionChanged()]
- "vendor_chart_4_5_1_umd_min_wa_positionchanged": "._positionChanged()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .handleEvent(), .setActiveElements()]
- "vendor_chart_4_5_1_umd_min_wa_setactiveelements": ".setActiveElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, f(), ._positionChanged()]
- "vendor_chart_4_5_1_umd_min_wa_updateanimationtarget": "._updateAnimationTarget()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .draw(), Ta()]
- "vendor_chart_4_5_1_umd_min_wn": "wn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Nn(), o()]
- "vendor_chart_4_5_1_umd_min_wo": "wo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ko(), et()]
- "vendor_chart_4_5_1_umd_min_xt_listen": ".listen()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[.constructor(), xt, ._getAnims()]
- "vendor_chart_4_5_1_umd_min_xt_running": ".running()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[.render(), .resize(), xt]
- "vendor_chart_4_5_1_umd_min_ya_getlegenditemat": "._getLegendItemAt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, tt(), .handleEvent()]
- "vendor_chart_4_5_1_umd_min_ya_handleevent": ".handleEvent()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ya, d(), ._getLegendItemAt()]
- "vendor_chart_4_5_1_umd_min_ye": "Ye()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), .resolveNamedOptions()]
- "vendor_chart_4_5_1_umd_min_yn_computeangle": "._computeAngle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), .getDataVisibility(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_yn_updateradius": "._updateRadius()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[yn(), .update(), .getVisibleDatasetCount()]
- "vendor_chart_4_5_1_umd_min_za": "za()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getAfterBody(), .getBeforeBody()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-027.json

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
