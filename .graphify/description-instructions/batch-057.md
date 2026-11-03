# Node Description Batch 58 of 62

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

- "vendor_chart_4_5_1_umd_min_ii": "ii()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_js_draw": ".draw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_getdataelement": ".getDataElement()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_getmaxoverflow": ".getMaxOverflow()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_parsearraydata": ".parseArrayData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_parseobjectdata": ".parseObjectData()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_reset": ".reset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_updateelements": ".updateElements()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_js_updaterangefromparsed": ".updateRangeFromParsed()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[js]
- "vendor_chart_4_5_1_umd_min_jt_alpha": ".alpha()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_clearer": ".clearer()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_clone": ".clone()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_desaturate": ".desaturate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_lighten": ".lighten()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_mix": ".mix()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_negate": ".negate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_opaquer": ".opaquer()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_jt_valid": ".valid()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[jt()]
- "vendor_chart_4_5_1_umd_min_k": "K()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_legend": "Legend()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_n_linkscales": ".linkScales()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n()]
- "vendor_chart_4_5_1_umd_min_n_options": ".options()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n()]
- "vendor_chart_4_5_1_umd_min_n_platform": ".platform()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n()]
- "vendor_chart_4_5_1_umd_min_n_plugins": ".plugins()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n()]
- "vendor_chart_4_5_1_umd_min_n_type": ".type()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[n()]
- "vendor_chart_4_5_1_umd_min_on_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[on]
- "vendor_chart_4_5_1_umd_min_oo_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo]
- "vendor_chart_4_5_1_umd_min_oo_last": ".last()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo]
- "vendor_chart_4_5_1_umd_min_oo_points": ".points()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[oo]
- "vendor_chart_4_5_1_umd_min_qe": "qe()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_qi": "qi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_qo": "qo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_reset": "reset()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js]
- "vendor_chart_4_5_1_umd_min_rn_add": ".add()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[rn()]
- "vendor_chart_4_5_1_umd_min_rn_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[rn()]
- "vendor_chart_4_5_1_umd_min_rn_format": ".format()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[rn()]
- "vendor_chart_4_5_1_umd_min_rn_init": ".init()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[rn()]
- "vendor_chart_4_5_1_umd_min_rn_override": ".override()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[rn()]
- "vendor_chart_4_5_1_umd_min_rn_parse": ".parse()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[rn()]
- "vendor_chart_4_5_1_umd_min_ro_computeticklimit": ".computeTickLimit()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[ro()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-057.json

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
