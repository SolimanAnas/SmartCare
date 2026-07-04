# Node Description Batch 35 of 48

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

- "vendor_chart_4_5_1_umd_min_js_ondatasplice": "._onDataSplice()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._sync()]
- "vendor_chart_4_5_1_umd_min_js_ondataunshift": "._onDataUnshift()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._sync()]
- "vendor_chart_4_5_1_umd_min_js_parseprimitivedata": ".parsePrimitiveData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .getLabels()]
- "vendor_chart_4_5_1_umd_min_js_removedatasethoverstyle": "._removeDatasetHoverStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._setStyle()]
- "vendor_chart_4_5_1_umd_min_js_removeelements": "._removeElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._resyncElements()]
- "vendor_chart_4_5_1_umd_min_js_removehoverstyle": ".removeHoverStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._setStyle()]
- "vendor_chart_4_5_1_umd_min_js_resolvedataelementoptions": ".resolveDataElementOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._resolveElementOptions()]
- "vendor_chart_4_5_1_umd_min_js_setdatasethoverstyle": "._setDatasetHoverStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._setStyle()]
- "vendor_chart_4_5_1_umd_min_js_sethoverstyle": ".setHoverStyle()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, ._setStyle()]
- "vendor_chart_4_5_1_umd_min_js_updateindex": ".updateIndex()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js, .buildOrUpdateControllers()]
- "vendor_chart_4_5_1_umd_min_jt_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), Gt()]
- "vendor_chart_4_5_1_umd_min_jt_darken": ".darken()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), te()]
- "vendor_chart_4_5_1_umd_min_jt_greyscale": ".greyscale()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), _t()]
- "vendor_chart_4_5_1_umd_min_jt_hexstring": ".hexString()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), te()]
- "vendor_chart_4_5_1_umd_min_jt_rgbstring": ".rgbString()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), wt()]
- "vendor_chart_4_5_1_umd_min_jt_saturate": ".saturate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt(), te()]
- "vendor_chart_4_5_1_umd_min_ks": "ks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ct()]
- "vendor_chart_4_5_1_umd_min_li": "li()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, hi()]
- "vendor_chart_4_5_1_umd_min_ls": "Ls()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._update()]
- "vendor_chart_4_5_1_umd_min_ma": "ma()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, pa()]
- "vendor_chart_4_5_1_umd_min_mo": "mo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabels()]
- "vendor_chart_4_5_1_umd_min_n_cachedscopes": "._cachedScopes()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .getOptionScopes()]
- "vendor_chart_4_5_1_umd_min_n_calculatecircumference": ".calculateCircumference()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ._circumference()]
- "vendor_chart_4_5_1_umd_min_n_data": ".data()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), gn()]
- "vendor_chart_4_5_1_umd_min_n_getlabelandvalue": ".getLabelAndValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), ne()]
- "vendor_chart_4_5_1_umd_min_n_getmaxoffset": ".getMaxOffset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n(), .update()]
- "vendor_chart_4_5_1_umd_min_nn": "Nn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, wn()]
- "vendor_chart_4_5_1_umd_min_nt": "nt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .buildTicks()]
- "vendor_chart_4_5_1_umd_min_o_computeticklimit": ".computeTickLimit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[o(), ._resolveTickFontOptions()]
- "vendor_chart_4_5_1_umd_min_o_determinedatalimits": ".determineDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[o(), a()]
- "vendor_chart_4_5_1_umd_min_o_getpixelforvalue": ".getPixelForValue()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[o(), .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_o_getvalueforpixel": ".getValueForPixel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[o(), .getDecimalForPixel()]
- "vendor_chart_4_5_1_umd_min_oo_draw": ".draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo, no()]
- "vendor_chart_4_5_1_umd_min_oo_pathsegment": ".pathSegment()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo, io()]
- "vendor_chart_4_5_1_umd_min_oo_segments": ".segments()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo, zi()]
- "vendor_chart_4_5_1_umd_min_parseobjectdata": "parseObjectData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, l()]
- "vendor_chart_4_5_1_umd_min_parseprimitivedata": "parsePrimitiveData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Vn()]
- "vendor_chart_4_5_1_umd_min_pn": "Pn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, d()]
- "vendor_chart_4_5_1_umd_min_qn": "qn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, kn()]
- "vendor_chart_4_5_1_umd_min_qs": "Qs()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .drawTitle()]

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
