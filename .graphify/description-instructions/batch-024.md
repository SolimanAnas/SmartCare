# Node Description Batch 25 of 62

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

- "tests_test_api_testadminusers_test_admin_can_list_users": ".test_admin_can_list_users()" | kind=code-symbol | source=tests/test_api.py:L146 | neighbors=[An authenticated admin (role == 'Admin'…, TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_admin_users_forbidden_for_regular_user": ".test_admin_users_forbidden_for_regular_user()" | kind=code-symbol | source=tests/test_api.py:L140 | neighbors=[A signed-in non-admin must be forbidden…, TestAdminUsers, _login(), _register()]
- "tests_test_api_testlogin_test_login_generic_error_message": ".test_login_generic_error_message()" | kind=code-symbol | source=tests/test_api.py:L106 | neighbors=[Both bad-user and bad-password return t…, TestLogin, _login(), _register()]
- "tests_test_api_teststaticfiles": "TestStaticFiles" | kind=code-symbol | source=tests/test_api.py:L210 | neighbors=[test_api.py, .test_manifest_json(), .test_nonexistent_file_returns_404(), .test_style_css()]
- "tests_test_content_guides_page_text": "page_text()" | kind=code-symbol | source=tests/test_content_guides.py:L54 | neighbors=[test_content_guides.py, unify(), A page string without its inline tags (…, test_numbers_match_the_reference_notes()]
- "vendor_chart_4_5_1_umd_min_ae": "Ae()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._computeGridLineItems(), .drawBorder(), .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_as_cancel": ".cancel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), .tick(), ._createAnimations(), .stop()]
- "vendor_chart_4_5_1_umd_min_at": "at()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, a(), e(), ._dataCheck()]
- "vendor_chart_4_5_1_umd_min_b": "b()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, x(), eo(), .init()]
- "vendor_chart_4_5_1_umd_min_beforedatasetsdraw": "beforeDatasetsDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, oa(), .getSortedVisibleDatasetMetas(), ua()]
- "vendor_chart_4_5_1_umd_min_beforedraw": "beforeDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .updateControlPoints(), .getSortedVisibleDatasetMetas(), ua()]
- "vendor_chart_4_5_1_umd_min_bn": "Bn()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarValuePixels(), getLabelAndValue(), updateElements()]
- "vendor_chart_4_5_1_umd_min_bo_handletickrangeoptions": ".handleTickRangeOptions()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[bo, a(), o(), .getUserBounds()]
- "vendor_chart_4_5_1_umd_min_de_describe": ".describe()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, .constructor(), ce(), .register()]
- "vendor_chart_4_5_1_umd_min_en_register": ".register()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[en, .describe(), r(), x()]
- "vendor_chart_4_5_1_umd_min_fa": "fa()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), .first(), ua()]
- "vendor_chart_4_5_1_umd_min_ga": "ga()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ia(), .first(), ua()]
- "vendor_chart_4_5_1_umd_min_ge": "ge()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ms(), .isAttached(), we()]
- "vendor_chart_4_5_1_umd_min_getcenterpoint": "getCenterPoint()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getProps(), tooltipPosition(), Ui()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-024.json

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
