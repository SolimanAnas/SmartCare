# Node Description Batch 27 of 48

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

- "vendor_chart_4_5_1_umd_min_tn_beforecalculatelabelrotation": ".beforeCalculateLabelRotation()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforedatalimits": ".beforeDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._callHooks(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforefit": ".beforeFit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforesetdimensions": ".beforeSetDimensions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_beforeticktolabelconversion": ".beforeTickToLabelConversion()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, d(), ._convertTicksToLabels()]
- "vendor_chart_4_5_1_umd_min_tn_binduserevents": ".bindUserEvents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .bindEvents(), u()]
- "vendor_chart_4_5_1_umd_min_tn_buildorupdatescales": ".buildOrUpdateScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, u(), ._updateScales()]
- "vendor_chart_4_5_1_umd_min_tn_clear": ".clear()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.clearCache(), tn, .draw()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-026.json

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
