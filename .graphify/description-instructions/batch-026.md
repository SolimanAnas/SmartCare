# Node Description Batch 27 of 63

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

- "scripts_driver_open": "open()" | kind=code-symbol | source=promo/megacode/scripts/driver.js:L7 | neighbors=[driver.js, explore2.js, peek_vert.js, record.js]
- "scripts_generate_screenshots": "generate_screenshots.py" | kind=code-symbol | source=scripts/generate_screenshots.py:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, compress(), main()]
- "scripts_generate_splash": "generate_splash.py" | kind=code-symbol | source=scripts/generate_splash.py:L1 | neighbors=[83a1ea8 Ship the Offline & PWA section …, d1b235f Merge pull request #15 Offline …, device_entry(), main()]
- "scripts_record_advance": "advance()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L50 | neighbors=[record.js, auto(), frame(), waitFor()]
- "scripts_sheet": "sheet.py" | kind=code-symbol | source=promo/megacode/scripts/sheet.py:L1 | neighbors=[17232c9 Fix Ruff lint failure in Megaco…, 2a5f204 Add SmartCare Megacode cinemati…, 6663113 PR #63 Update ECG simulator, 7421ea4 Megacode cinematic promo]
- "src_install_prompt_build": "build()" | kind=code-symbol | source=src/install-prompt.js:L147 | neighbors=[install-prompt.js, hide(), snooze(), show()]
- "src_install_prompt_inapp": "inApp()" | kind=code-symbol | source=src/install-prompt.js:L49 | neighbors=[install-prompt.js, autoShow(), store(), open()]
- "src_install_prompt_store": "store()" | kind=code-symbol | source=src/install-prompt.js:L34 | neighbors=[install-prompt.js, get(), inApp(), set()]
- "src_render_state_renderemptyorerror": "renderEmptyOrError()" | kind=code-symbol | source=src/render-state.js:L49 | neighbors=[render-state.js, escapeHtml(), icon(), renderState()]
- "tests_bls_reviewer_spec": "bls-reviewer.spec.js" | kind=code-symbol | source=tests/bls-reviewer.spec.js:L1 | neighbors=[154f42d Merge pull request #25 BLS revi…, 5157b39 Fix horizontal overflow on phon…, 82ff814 Add Playwright smoke test for B…, f953366 PR #26 BLS-reviewer]
- "tests_check_exam_flow_spec": "_check_exam_flow.spec.js" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L1 | neighbors=[106f200 Add MCI exam page with final ex…, e98b15c Merge PR #36 MCI Course, PAGES, 99f095b fix: resolve mixed SVG quote mi…]
- "tests_homepage_search_spec": "homepage-search.spec.js" | kind=code-symbol | source=tests/homepage-search.spec.js:L1 | neighbors=[0673752 PR #67 Homepage Redesigned ✨, 1543337 Fix raw markup in Last Visited,…, 6026b7a Redesign the home page: courses…, 8c61be7 Merge pull request #22 raw mark…]
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
