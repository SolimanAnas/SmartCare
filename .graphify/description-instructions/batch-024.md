# Node Description Batch 25 of 49

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

- "scripts_validate_content_validate_manifest_coverage": "validate_manifest_coverage()" | kind=code-symbol | source=scripts/validate_content.py:L91 | neighbors=[validate_content.py, main(), rel()]
- "scripts_validate_content_validate_question": "validate_question()" | kind=code-symbol | source=scripts/validate_content.py:L113 | neighbors=[validate_content.py, validate_bank_content(), question_core_fields()]
- "server_admin_emails": "_admin_emails()" | kind=code-symbol | source=server.py:L150 | neighbors=[server.py, _is_admin(), Allow-list of admin emails sourced from…]
- "server_audit": "_audit()" | kind=code-symbol | source=server.py:L20 | neighbors=[server.py, Write a structured audit record for aut…, Write a structured audit record for aut…]
- "server_is_admin": "_is_admin()" | kind=code-symbol | source=server.py:L156 | neighbors=[server.py, _admin_emails(), A user is an admin if their role is 'Ad…]
- "server_supabase_admin_configured": "_supabase_admin_configured()" | kind=code-symbol | source=server.py:L83 | neighbors=[server.py, _require_supabase_user(), _supabase_user_from_token()]
- "src_render_state_escapehtml": "escapeHtml()" | kind=code-symbol | source=src/render-state.js:L23 | neighbors=[render-state.js, icon(), renderEmptyOrError()]
- "src_render_state_icon": "icon()" | kind=code-symbol | source=src/render-state.js:L31 | neighbors=[render-state.js, escapeHtml(), renderEmptyOrError()]
- "src_render_state_renderstate": "renderState()" | kind=code-symbol | source=src/render-state.js:L70 | neighbors=[render-state.js, renderEmptyOrError(), renderLoading()]
- "sw_networkfirst": "networkFirst()" | kind=code-symbol | source=sw.js:L129 | neighbors=[sw.js, offlineFallback(), staleWhileRevalidate()]
- "sw_offlinefallback": "offlineFallback()" | kind=code-symbol | source=sw.js:L199 | neighbors=[sw.js, networkFirst(), staleWhileRevalidate()]
- "sw_stalewhilerevalidate": "staleWhileRevalidate()" | kind=code-symbol | source=sw.js:L156 | neighbors=[sw.js, networkFirst(), offlineFallback()]
- "tests_test_api_testaccountselfdelete_test_only_deletes_the_caller_own_account": ".test_only_deletes_the_caller_own_account()" | kind=code-symbol | source=tests/test_api.py:L111 | neighbors=[There is no id parameter on this route …, TestAccountSelfDelete, _auth()]
- "tests_test_api_testaccountselfdelete_test_self_delete_works_no_admin_required": ".test_self_delete_works_no_admin_required()" | kind=code-symbol | source=tests/test_api.py:L101 | neighbors=[A completely ordinary (non-admin) signe…, TestAccountSelfDelete, _auth()]
- "tests_test_api_testadminusers_test_admin_delete_user": ".test_admin_delete_user()" | kind=code-symbol | source=tests/test_api.py:L166 | neighbors=[TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_admin_role_update": ".test_admin_role_update()" | kind=code-symbol | source=tests/test_api.py:L155 | neighbors=[TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_non_admin_cannot_update_role": ".test_non_admin_cannot_update_role()" | kind=code-symbol | source=tests/test_api.py:L180 | neighbors=[TestAdminUsers, _login(), _register()]
- "tests_test_api_testauditlogging_test_admin_action_is_audited": ".test_admin_action_is_audited()" | kind=code-symbol | source=tests/test_api.py:L236 | neighbors=[TestAuditLogging, _login(), _register()]
- "tests_test_api_testauditlogging_test_successful_login_is_audited": ".test_successful_login_is_audited()" | kind=code-symbol | source=tests/test_api.py:L220 | neighbors=[TestAuditLogging, _login(), _register()]
- "tests_test_api_testcsrfguard_test_get_requests_not_blocked": ".test_get_requests_not_blocked()" | kind=code-symbol | source=tests/test_api.py:L204 | neighbors=[GET requests are never subject to the C…, TestCsrfGuard, GET requests are never subject to the C…]
- "tests_test_api_testcsrfguard_test_post_without_json_content_type_rejected": ".test_post_without_json_content_type_rejected()" | kind=code-symbol | source=tests/test_api.py:L177 | neighbors=[A plain-form request to an /api/ endpoi…, TestCsrfGuard, A plain-form POST to an API endpoint mu…]
- "tests_test_api_testgooglelogin": "TestGoogleLogin" | kind=code-symbol | source=tests/test_api.py:L115 | neighbors=[test_api.py, .test_google_login_bad_token(), .test_google_login_missing_token()]
- "tests_test_api_testlogin_test_login_success": ".test_login_success()" | kind=code-symbol | source=tests/test_api.py:L89 | neighbors=[TestLogin, _login(), _register()]
- "tests_test_api_testlogin_test_login_wrong_password": ".test_login_wrong_password()" | kind=code-symbol | source=tests/test_api.py:L97 | neighbors=[TestLogin, _login(), _register()]
- "tests_test_api_testsecurityheaders": "TestSecurityHeaders" | kind=code-symbol | source=tests/test_api.py:L125 | neighbors=[test_api.py, .test_csp_blocks_framing(), .test_security_headers_present()]
- "vendor_chart_4_5_1_umd_min_afterdraw": "afterDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .notifyPlugins(), ._willRender()]
- "vendor_chart_4_5_1_umd_min_afterupdate": "afterUpdate()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .adjustHitBoxes(), .buildLabels()]
- "vendor_chart_4_5_1_umd_min_ai": "ai()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, q(), hi()]
- "vendor_chart_4_5_1_umd_min_as_active": ".active()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), ._animateOptions(), ._createAnimations()]
- "vendor_chart_4_5_1_umd_min_beforedatasetdraw": "beforeDatasetDraw()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, oa(), ua()]
- "vendor_chart_4_5_1_umd_min_cs": "cs" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .acquireContext(), .updateConfig()]
- "vendor_chart_4_5_1_umd_min_ct": "ct()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, ks(), ms()]
- "vendor_chart_4_5_1_umd_min_de_constructor": ".constructor()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[de, .apply(), .describe()]
- "vendor_chart_4_5_1_umd_min_determinedatalimits": "determineDataLimits()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .getLabels(), .getUserBounds()]
- "vendor_chart_4_5_1_umd_min_di": "Di()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), .update()]
- "vendor_chart_4_5_1_umd_min_dt": "dt()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, .apply(), .constructor()]
- "vendor_chart_4_5_1_umd_min_ea": "ea()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, s(), pa()]
- "vendor_chart_4_5_1_umd_min_ee": "Ee()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, .rotate(), Le()]
- "vendor_chart_4_5_1_umd_min_eo": "eo()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, b(), .getPointPosition()]
- "vendor_chart_4_5_1_umd_min_es": "es()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._getSortedDatasetMetas(), ss()]

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
