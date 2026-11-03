# Node Description Batch 19 of 62

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

- "shared_admin_audit": "audit()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L50 | neighbors=[index.ts, index.ts, index.ts, admin.ts, requireAdmin()]
- "shared_admin_corsheaders": "corsHeaders()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L15 | neighbors=[index.ts, index.ts, index.ts, admin.ts, json()]
- "tests_courses_page_spec": "courses-page.spec.js" | kind=code-symbol | source=tests/courses-page.spec.js:L1 | neighbors=[62386af PR #51 Megacode 3, c8b8f6e PR #52 Improved UI/UX of Course…, cee8997 Courses page: opaque cards, pol…, f272ce6 Courses page: compact, collapsi…, { test, expect }]
- "tests_home_spec": "home.spec.js" | kind=code-symbol | source=tests/home.spec.js:L1 | neighbors=[0673752 PR #67 Homepage Redesigned ✨, 582a9d8 Chapter 3 rewrite  ✅, 6026b7a Redesign the home page: courses…, bd1c53b Thinner greeting card; key, too…, trackErrors()]
- "tests_test_api_auth": "_auth()" | kind=code-symbol | source=tests/test_api.py:L68 | neighbors=[test_api.py, .test_not_configured_returns_503(), .test_only_deletes_the_caller_own_accou…, .test_self_delete_works_no_admin_requir…, .test_self_delete_is_audited()]
- "tests_test_api_testaccountselfdelete": "TestAccountSelfDelete" | kind=code-symbol | source=tests/test_api.py:L87 | neighbors=[test_api.py, .test_not_configured_returns_503(), .test_only_deletes_the_caller_own_accou…, .test_requires_auth(), .test_self_delete_works_no_admin_requir…]
- "tests_test_api_testauditlogging": "TestAuditLogging" | kind=code-symbol | source=tests/test_api.py:L156 | neighbors=[test_api.py, .test_self_delete_is_audited(), .test_admin_action_is_audited(), .test_failed_login_is_audited(), .test_successful_login_is_audited()]
- "tests_test_api_testlogin": "TestLogin" | kind=code-symbol | source=tests/test_api.py:L88 | neighbors=[test_api.py, .test_login_generic_error_message(), .test_login_nonexistent_user(), .test_login_success(), .test_login_wrong_password()]
- "vendor_chart_4_5_1_umd_min_afterdatasetsupdate": "afterDatasetsUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, aa(), ra(), .getDatasetMeta(), .isDatasetVisible()]
- "vendor_chart_4_5_1_umd_min_ba": "Ba()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getAfterBody(), .getBeforeBody(), .getFooter(), .getTitle()]
- "vendor_chart_4_5_1_umd_min_bt": "Bt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Ft(), vt(), zt(), Gt()]
- "vendor_chart_4_5_1_umd_min_fi": "Fi()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bi(), Ci(), f(), zi()]
- "vendor_chart_4_5_1_umd_min_ft": "Ft()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, Bt(), zt(), .rotate(), xt]
- "vendor_chart_4_5_1_umd_min_getaxis": "_getAxis()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _calculateBarIndexPixels(), getFirstScaleIdForIndexAxis(), l(), _getAxisCount()]
- "vendor_chart_4_5_1_umd_min_getruler": "_getRuler()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _getStackCount(), .getParsed(), zn(), updateElements()]
- "vendor_chart_4_5_1_umd_min_getstacks": "_getStacks()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, _getStackCount(), _getStackIndex(), .getParsed(), .getMatchingVisibleMetas()]
- "vendor_chart_4_5_1_umd_min_gettimestampsfortable": "_getTimestampsForTable()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getDataTimestamps(), .getLabelTimestamps(), .normalize(), initOffsets()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-018.json

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
