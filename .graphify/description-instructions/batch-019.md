# Node Description Batch 20 of 49

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

- "vendor_chart_4_5_1_umd_min_getlabelandvalue": "getLabelAndValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bn(), .getParsed(), .getLabels()]
- "vendor_chart_4_5_1_umd_min_getstackcount": "_getStackCount()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), _getRuler(), _getStacks()]
- "vendor_chart_4_5_1_umd_min_he": "he()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ce(), .get(), .route()]
- "vendor_chart_4_5_1_umd_min_ho_tickformatfunction": "._tickFormatFunction()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ho(), .generateTickLabels(), ._getLabelCapacity(), d()]
- "vendor_chart_4_5_1_umd_min_initoffsets": "initOffsets()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, buildLookupTable(), _getTimestampsForTable(), jo()]
- "vendor_chart_4_5_1_umd_min_io": "io()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, no(), .path(), .pathSegment()]
- "vendor_chart_4_5_1_umd_min_je": "je()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ti(), yn(), ze()]
- "vendor_chart_4_5_1_umd_min_ji": "ji()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _i(), getRange(), r()]
- "vendor_chart_4_5_1_umd_min_jo": "jo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, getDecimalForValue(), getValueForPixel(), initOffsets()]
- "vendor_chart_4_5_1_umd_min_js_getallparsedvalues": ".getAllParsedValues()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[.getDataTimestamps(), js, a(), zn()]
- "vendor_chart_4_5_1_umd_min_js_getcontext": ".getContext()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, Ci(), .getDataset(), .getParsed()]
- "vendor_chart_4_5_1_umd_min_js_getminmax": ".getMinMax()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, g(), ._getOtherScale(), .getUserBounds()]
- "vendor_chart_4_5_1_umd_min_js_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, a(), n(), o()]
- "vendor_chart_4_5_1_umd_min_js_resolvedatasetelementoptions": ".resolveDatasetElementOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getStyle(), ._resolveElementOptions(), update()]
- "vendor_chart_4_5_1_umd_min_js_resyncelements": "._resyncElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .buildOrUpdateElements(), ._insertElements(), ._removeElements()]
- "vendor_chart_4_5_1_umd_min_js_update": "._update()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, l(), Ls(), o()]
- "vendor_chart_4_5_1_umd_min_kn": "kn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, qn(), .update(), ._updateMetasets()]
- "vendor_chart_4_5_1_umd_min_ko": "ko()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, r(), wo(), .buildTicks()]
- "vendor_chart_4_5_1_umd_min_kt": "kt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .hslString(), qt(), _t()]
- "vendor_chart_4_5_1_umd_min_la": "la()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, da(), a(), ha()]
- "vendor_chart_4_5_1_umd_min_le": "Le()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, draw(), Ee(), ._drawColorBox()]
- "vendor_chart_4_5_1_umd_min_ln": "ln()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, u(), .buildOrUpdateControllers(), un()]
- "vendor_chart_4_5_1_umd_min_lt": "lt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .normalize(), n(), zn()]
- "vendor_chart_4_5_1_umd_min_ms": "ms()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ct(), e(), ge()]
- "vendor_chart_4_5_1_umd_min_n_clearcache": ".clearCache()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .clear(), .update(), .destroy()]
- "vendor_chart_4_5_1_umd_min_n_getmaxborderwidth": ".getMaxBorderWidth()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .getDatasetMeta(), .isDatasetVisible(), .update()]
- "vendor_chart_4_5_1_umd_min_n_getringweight": "._getRingWeight()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), l(), ._getRingWeightOffset(), .update()]
- "vendor_chart_4_5_1_umd_min_n_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .getDataset(), o(), r()]
- "vendor_chart_4_5_1_umd_min_n_updateelements": ".updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .updateElement(), ._circumference(), ._getRotation()]
- "vendor_chart_4_5_1_umd_min_ni": "Ni()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, e(), ._drawDataset(), ua()]
- "vendor_chart_4_5_1_umd_min_on_descriptors": "._descriptors()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on, ._createDescriptors(), ._notifyStateChanges(), .notify()]
- "vendor_chart_4_5_1_umd_min_oo_path": ".path()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[no(), oo, io(), n()]
- "vendor_chart_4_5_1_umd_min_oo_updatecontrolpoints": ".updateControlPoints()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[beforeDraw(), draw(), oo, hi()]
- "vendor_chart_4_5_1_umd_min_os": "os()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ns(), ss(), update()]
- "vendor_chart_4_5_1_umd_min_p": "p()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, m(), .drawTitle(), .drawBody()]
- "vendor_chart_4_5_1_umd_min_po": "po()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, parse(), ki(), l()]
- "vendor_chart_4_5_1_umd_min_pt": "pt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .getUserBounds(), Z(), update()]
- "vendor_chart_4_5_1_umd_min_ro_getpointlabelcontext": ".getPointLabelContext()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[co(), ro(), .drawGrid(), Ci()]
- "vendor_chart_4_5_1_umd_min_rs": "rs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), as(), update()]
- "vendor_chart_4_5_1_umd_min_sn_getelement": ".getElement()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[addElements(), sn, ._get(), .buildOrUpdateControllers()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-019.json

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
