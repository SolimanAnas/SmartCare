# Node Description Batch 15 of 48

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

- "vendor_chart_4_5_1_umd_min_gt": "Gt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bt(), o(), vt(), .constructor()]
- "vendor_chart_4_5_1_umd_min_ho_getlabelcapacity": "._getLabelCapacity()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .buildTicks(), ._generate(), ._getLabelSize(), ._tickFormatFunction()]
- "vendor_chart_4_5_1_umd_min_ho_normalize": ".normalize()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[_getTimestampsForTable(), ho(), .getDataTimestamps(), .getLabelTimestamps(), lt()]
- "vendor_chart_4_5_1_umd_min_i": "_i()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ji(), s(), .getSortedVisibleDatasetMetas(), Si()]
- "vendor_chart_4_5_1_umd_min_ia": "ia()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, fa(), ga(), ki(), pa()]
- "vendor_chart_4_5_1_umd_min_ie": "Ie()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._drawDataset(), .drawLabels(), ua(), .draw()]
- "vendor_chart_4_5_1_umd_min_index": "index()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getSortedVisibleDatasetMetas(), ve(), Xi(), Yi()]
- "vendor_chart_4_5_1_umd_min_it": "It()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, s(), .hslString(), .rotate(), xt]
- "vendor_chart_4_5_1_umd_min_js_buildorupdateelements": ".buildOrUpdateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._dataCheck(), .getDataset(), ._resyncElements(), .update()]
- "vendor_chart_4_5_1_umd_min_js_configure": ".configure()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getDataset(), .createResolver(), .datasetScopeKeys(), .getOptionScopes()]
- "vendor_chart_4_5_1_umd_min_js_getsharedoptions": ".getSharedOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .includeOptions(), .updateSharedOptions(), ._setStyle(), updateElements()]
- "vendor_chart_4_5_1_umd_min_js_linkscales": ".linkScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getDataset(), .getScaleForId(), l(), s()]
- "vendor_chart_4_5_1_umd_min_js_resolveanimations": "._resolveAnimations()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getDataset(), .createResolver(), .datasetAnimationScopeKeys(), .getOptionScopes()]
- "vendor_chart_4_5_1_umd_min_js_updateelement": ".updateElement()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .updateElements(), update(), updateElements(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_jt_hslstring": ".hslString()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), It(), kt(), n(), wt()]
- "vendor_chart_4_5_1_umd_min_n_circumference": "._circumference()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .calculateCircumference(), ._getCircumference(), .getDataVisibility(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_n_getringweightoffset": "._getRingWeightOffset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._getRingWeight(), .isDatasetVisible(), ._getVisibleDatasetWeightTotal(), .update()]
- "vendor_chart_4_5_1_umd_min_na": "na()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), n(), o(), oo]
- "vendor_chart_4_5_1_umd_min_on_notify": ".notify()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on, d(), ._createDescriptors(), ._descriptors(), .notifyPlugins()]
- "vendor_chart_4_5_1_umd_min_onclick": "onClick()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .hide(), .isDatasetVisible(), .show(), .toggleDataVisibility()]
- "vendor_chart_4_5_1_umd_min_rn_startof": ".startOf()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.determineDataLimits(), ._generate(), no(), rn(), Vo()]
- "vendor_chart_4_5_1_umd_min_ro_drawgrid": ".drawGrid()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro(), .getDistanceFromCenterForValue(), .getPointLabelContext(), .getPointPosition(), Si()]
- "vendor_chart_4_5_1_umd_min_ro_getindexangle": ".getIndexAngle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[co(), ro(), .drawLabels(), .getPointPosition(), .updateElements()]
- "vendor_chart_4_5_1_umd_min_sn_get": "._get()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[sn, .getController(), .getElement(), .getPlugin(), .getScale()]
- "vendor_chart_4_5_1_umd_min_tn_bindevents": ".bindEvents()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .bindResponsiveEvents(), .bindUserEvents(), ._checkEventBindings(), ._initialize()]
- "vendor_chart_4_5_1_umd_min_tn_converttickstolabels": "._convertTicksToLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, s(), .afterTickToLabelConversion(), .beforeTickToLabelConversion(), .update()]
- "vendor_chart_4_5_1_umd_min_tn_destroydatasetmeta": "._destroyDatasetMeta()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .buildOrUpdateControllers(), ._destroy(), .stop(), ._updateMetasets()]
- "vendor_chart_4_5_1_umd_min_tn_draw": ".draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .clear(), ._drawDatasets(), ._isVisible(), .notifyPlugins()]
- "vendor_chart_4_5_1_umd_min_tn_drawdatasets": "._drawDatasets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .draw(), ._drawDataset(), .getSortedVisibleDatasetMetas(), .notifyPlugins()]
- "vendor_chart_4_5_1_umd_min_tn_drawlabels": ".drawLabels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, Ie(), ._computeLabelArea(), .getLabelItems(), ze()]
- "vendor_chart_4_5_1_umd_min_tn_fit": ".fit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._calculatePadding(), ._getLabelSizes(), ._handleMargins(), ._isVisible()]
- "vendor_chart_4_5_1_umd_min_tn_getdecimalforpixel": ".getDecimalForPixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[getValueForPixel(), .getValueForPixel(), .getValueForPixel(), .getValueForPixel(), tn]
- "vendor_chart_4_5_1_umd_min_tn_handleevent": "._handleEvent()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, ._eventHandler(), d(), f(), ._updateHoverStyles()]
- "vendor_chart_4_5_1_umd_min_tn_updatedatasets": "._updateDatasets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .update(), .getDatasetMeta(), .notifyPlugins(), ._updateDataset()]
- "vendor_chart_4_5_1_umd_min_tn_updatescales": "._updateScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .update(), .buildOrUpdateScales(), .ensureScalesHaveIDs(), u()]
- "vendor_chart_4_5_1_umd_min_tn_updatevisibility": "._updateVisibility()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, .hide(), .show(), .getDatasetMeta(), .setDatasetVisibility()]
- "vendor_chart_4_5_1_umd_min_ts_createanimations": "._createAnimations()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ts(), ._animateOptions(), .active(), .cancel(), .update()]
- "vendor_chart_4_5_1_umd_min_tt": "tt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, co(), ha(), inRange(), ._getLegendItemAt()]
- "vendor_chart_4_5_1_umd_min_ve": "ve()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, dataset(), index(), nearest(), l()]
- "vendor_chart_4_5_1_umd_min_wa_drawfooter": ".drawFooter()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[wa, .draw(), Oi(), Si(), x()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-014.json

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
