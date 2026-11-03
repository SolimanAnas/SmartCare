# Node Description Batch 55 of 62

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "server_load_user": "load_user()" | kind=code-symbol | source=server.py:L146 | neighbors=[server.py]
- "server_rationale_121": "Abort with 503/401 unless the caller has a valid Supabase session.\r     Returns" | kind=entity | source=server.py:L121 | neighbors=[_require_supabase_user()]
- "server_rationale_151": "Allow-list of admin emails sourced from the environment (no hard-coding)." | kind=entity | source=server.py:L151 | neighbors=[_admin_emails()]
- "server_rationale_157": "A user is an admin if their role is 'Admin' or they are allow-listed." | kind=entity | source=server.py:L157 | neighbors=[_is_admin()]
- "server_rationale_21": "Write a structured audit record for auth and admin events." | kind=entity | source=server.py:L21 | neighbors=[_audit()]
- "server_rationale_35": "Write a structured audit record for auth and admin events." | kind=entity | source=server.py:L35 | neighbors=[_audit()]
- "server_rationale_61": "Return an error string, or None if valid." | kind=entity | source=server.py:L61 | neighbors=[_validate_email()]
- "server_rationale_70": "Return an error string, or None if the password meets policy." | kind=entity | source=server.py:L70 | neighbors=[_validate_password()]
- "server_rationale_99": "Resolve a Supabase access token (from the browser's session) to\r     {id, email}" | kind=entity | source=server.py:L99 | neighbors=[_supabase_user_from_token()]
- "server_supabase_service_headers": "_supabase_service_headers()" | kind=code-symbol | source=server.py:L87 | neighbors=[server.py]
- "shared_admin_admincaller": "AdminCaller" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L60 | neighbors=[admin.ts]
- "shared_admin_allowed_origins": "ALLOWED_ORIGINS" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L10 | neighbors=[admin.ts]
- "src_theme_init": "init()" | kind=code-symbol | source=src/theme.js:L34 | neighbors=[theme.js]
- "src_theme_set": "set()" | kind=code-symbol | source=src/theme.js:L27 | neighbors=[theme.js]
- "sw_cache_first_patterns": "CACHE_FIRST_PATTERNS" | kind=code-symbol | source=sw.js:L30 | neighbors=[sw.js]
- "sw_cachefirst": "cacheFirst()" | kind=code-symbol | source=sw.js:L236 | neighbors=[sw.js]
- "sw_iscacheable": "isCacheable()" | kind=code-symbol | source=sw.js:L285 | neighbors=[sw.js]
- "sw_pre_cache": "PRE_CACHE" | kind=code-symbol | source=sw.js:L10 | neighbors=[sw.js]
- "tests_acls_reviewer_spec": "acls-reviewer.spec.js" | kind=code-symbol | source=tests/acls-reviewer.spec.js:L1 | neighbors=[bd7b1a9 Completing ACLS Course Reviewer]
- "tests_check_exam_flow_spec_pages": "PAGES" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L3 | neighbors=[_check_exam_flow.spec.js]
- "tests_conftest_app": "app()" | kind=code-symbol | source=tests/conftest.py:L7 | neighbors=[conftest.py]
- "tests_conftest_client": "client()" | kind=code-symbol | source=tests/conftest.py:L19 | neighbors=[conftest.py]
- "tests_conftest_runner": "runner()" | kind=code-symbol | source=tests/conftest.py:L32 | neighbors=[conftest.py]
- "tests_content_guides_spec_chapters": "CHAPTERS" | kind=code-symbol | source=tests/content-guides.spec.js:L8 | neighbors=[content-guides.spec.js]
- "tests_content_guides_spec_formulary": "FORMULARY" | kind=code-symbol | source=tests/content-guides.spec.js:L10 | neighbors=[content-guides.spec.js]
- "tests_content_guides_spec_topics": "topics" | kind=code-symbol | source=tests/content-guides.spec.js:L11 | neighbors=[content-guides.spec.js]
- "tests_courses_page_spec_test_expect": "{ test, expect }" | kind=code-symbol | source=tests/courses-page.spec.js:L4 | neighbors=[courses-page.spec.js]
- "tests_ecg_simulator_spec_test_expect": "{ test, expect }" | kind=code-symbol | source=tests/ecg-simulator.spec.js:L6 | neighbors=[ecg-simulator.spec.js]
- "tests_ecg_simulator_spec_trackerrors": "trackErrors()" | kind=code-symbol | source=tests/ecg-simulator.spec.js:L8 | neighbors=[ecg-simulator.spec.js]
- "tests_exam_pages_spec_courses": "COURSES" | kind=code-symbol | source=tests/exam-pages.spec.js:L6 | neighbors=[exam-pages.spec.js]
- "tests_home_spec_trackerrors": "trackErrors()" | kind=code-symbol | source=tests/home.spec.js:L7 | neighbors=[home.spec.js]
- "tests_megacode_quick_spec_test_expect": "{ test, expect }" | kind=code-symbol | source=tests/megacode-quick.spec.js:L5 | neighbors=[megacode-quick.spec.js]
- "tests_megacode_spec_answerquiz": "answerQuiz()" | kind=code-symbol | source=tests/megacode.spec.js:L6 | neighbors=[megacode.spec.js]
- "tests_megacode_spec_cprcyclethencheck": "cprCycleThenCheck()" | kind=code-symbol | source=tests/megacode.spec.js:L16 | neighbors=[megacode.spec.js]
- "tests_megacode_spec_shocknow": "shockNow()" | kind=code-symbol | source=tests/megacode.spec.js:L22 | neighbors=[megacode.spec.js]
- "tests_megacode_spec_test_expect": "{ test, expect }" | kind=code-symbol | source=tests/megacode.spec.js:L4 | neighbors=[megacode.spec.js]
- "tests_offline_spec_exam_content_assets": "EXAM_CONTENT_ASSETS" | kind=code-symbol | source=tests/offline.spec.js:L31 | neighbors=[offline.spec.js]
- "tests_offline_spec_key_pages": "KEY_PAGES" | kind=code-symbol | source=tests/offline.spec.js:L11 | neighbors=[offline.spec.js]
- "tests_offline_spec_vendored_assets": "VENDORED_ASSETS" | kind=code-symbol | source=tests/offline.spec.js:L19 | neighbors=[offline.spec.js]
- "tests_pals_reviewer_spec": "pals-reviewer.spec.js" | kind=code-symbol | source=tests/pals-reviewer.spec.js:L1 | neighbors=[2e859ad Adding PALS Course]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-054.json

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
