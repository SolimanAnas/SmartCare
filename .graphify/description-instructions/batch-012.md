# Node Description Batch 13 of 14

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "content_starters_backup_s1": "s1.js" | kind=code-symbol | source=content_starters_backup/s1.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…] | lang=en
- "data_bundle": "bundle.js" | kind=code-symbol | source=courses/itls/data/bundle.js:L1 | neighbors=[1a00316 feat(itls): restructure itls co…] | lang=en
- "playwright_config": "playwright.config.js" | kind=code-symbol | source=playwright.config.js:L1 | neighbors=[beb9c47 fix(ui): swap CSS to 0dad921 gl…] | lang=en
- "prometric_exam_examengine_formattime": ".formatTime()" | kind=code-symbol | source=src/prometric/exam.js:L752 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_handletouchstart": ".handleTouchStart()" | kind=code-symbol | source=src/prometric/exam.js:L218 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_showmobilepanel": ".showMobilePanel()" | kind=code-symbol | source=src/prometric/exam.js:L238 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_togglefocusmode": ".toggleFocusMode()" | kind=code-symbol | source=src/prometric/exam.js:L234 | neighbors=[ExamEngine] | lang=en
- "scripts_assemble_chapters_rationale_45": "Extract section objects from a TOC section file.      The file has the pattern:" | kind=entity | source=scripts/assemble_chapters.py:L45 | neighbors=[extract_sections()] | lang=en
- "scripts_assemble_chapters_rationale_91": "Assemble a complete chapter JS file." | kind=entity | source=scripts/assemble_chapters.py:L91 | neighbors=[assemble()] | lang=pt
- "scripts_build_courses_main": "main()" | kind=code-symbol | source=scripts/build_courses.py:L6 | neighbors=[build_courses.py] | lang=en
- "scripts_extract_itls_toc_rationale_1": "Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in" | kind=entity | source=scripts/extract_itls_toc.py:L1 | neighbors=[extract_itls_toc.py] | lang=en
- "scripts_gen_rationale_25": "Creates the necessary src/COURSE folders." | kind=entity | source=scripts/gen.py:L25 | neighbors=[create_src_folders()] | lang=en
- "scripts_gen_rationale_33": "Replaces placeholders in the template with course-specific data." | kind=entity | source=scripts/gen.py:L33 | neighbors=[generate_course_page()] | lang=en
- "scripts_generate_all_itls_data_main": "main()" | kind=code-symbol | source=scripts/generate_all_itls_data.py:L975 | neighbors=[generate_all_itls_data.py] | lang=en
- "server_load_user": "load_user()" | kind=code-symbol | source=server.py:L146 | neighbors=[server.py] | lang=en
- "server_rationale_151": "Allow-list of admin emails sourced from the environment (no hard-coding)." | kind=entity | source=server.py:L151 | neighbors=[_admin_emails()] | lang=en
- "server_rationale_157": "A user is an admin if their role is 'Admin' or they are allow-listed." | kind=entity | source=server.py:L157 | neighbors=[_is_admin()] | lang=en
- "server_rationale_35": "Write a structured audit record for auth and admin events." | kind=entity | source=server.py:L35 | neighbors=[_audit()] | lang=en
- "server_rationale_61": "Return an error string, or None if valid." | kind=entity | source=server.py:L61 | neighbors=[_validate_email()] | lang=en
- "server_rationale_70": "Return an error string, or None if the password meets policy." | kind=entity | source=server.py:L70 | neighbors=[_validate_password()] | lang=en
- "sw_cache_first_patterns": "CACHE_FIRST_PATTERNS" | kind=code-symbol | source=sw.js:L68 | neighbors=[sw.js] | lang=en
- "sw_cachefirst": "cacheFirst()" | kind=code-symbol | source=sw.js:L195 | neighbors=[sw.js] | lang=en
- "sw_iscacheable": "isCacheable()" | kind=code-symbol | source=sw.js:L237 | neighbors=[sw.js] | lang=en
- "sw_networkfirst": "networkFirst()" | kind=code-symbol | source=sw.js:L146 | neighbors=[sw.js] | lang=en
- "sw_pre_cache": "PRE_CACHE" | kind=code-symbol | source=sw.js:L10 | neighbors=[sw.js] | lang=en
- "tests_check_exam_flow_spec_pages": "PAGES" | kind=code-symbol | source=tests/_check_exam_flow.spec.js:L3 | neighbors=[_check_exam_flow.spec.js] | lang=en
- "tests_conftest_app": "app()" | kind=code-symbol | source=tests/conftest.py:L12 | neighbors=[conftest.py] | lang=en
- "tests_conftest_client": "client()" | kind=code-symbol | source=tests/conftest.py:L32 | neighbors=[conftest.py] | lang=en
- "tests_conftest_runner": "runner()" | kind=code-symbol | source=tests/conftest.py:L45 | neighbors=[conftest.py] | lang=en
- "tests_prometric_spec_navigatewizard": "navigateWizard()" | kind=code-symbol | source=tests/prometric.spec.js:L54 | neighbors=[prometric.spec.js] | lang=en
- "tests_test_api_rationale_1": "Smoke tests for the SmartCare Flask API." | kind=entity | source=tests/test_api.py:L1 | neighbors=[test_api.py] | lang=en
- "tests_test_api_rationale_107": "Both bad-user and bad-password return the same message (anti-enumeration)." | kind=entity | source=tests/test_api.py:L107 | neighbors=[.test_login_generic_error_message()] | lang=en
- "tests_test_api_rationale_136": "Anonymous access to the admin API must be denied (no PII leak)." | kind=entity | source=tests/test_api.py:L136 | neighbors=[.test_admin_users_requires_auth()] | lang=en
- "tests_test_api_rationale_141": "A signed-in non-admin must be forbidden (broken-access-control fix)." | kind=entity | source=tests/test_api.py:L141 | neighbors=[.test_admin_users_forbidden_for_regular…] | lang=pt
- "tests_test_api_rationale_147": "An authenticated admin (role == 'Admin') can list users." | kind=entity | source=tests/test_api.py:L147 | neighbors=[.test_admin_can_list_users()] | lang=en
- "tests_test_api_rationale_250": "A plain-form POST to an API endpoint must be rejected (CSRF)." | kind=entity | source=tests/test_api.py:L250 | neighbors=[.test_post_without_json_content_type_re…] | lang=en
- "tests_test_api_rationale_260": "A POST missing X-Requested-With must be rejected." | kind=entity | source=tests/test_api.py:L260 | neighbors=[.test_post_without_xrw_header_rejected()] | lang=pt
- "tests_test_api_rationale_269": "A well-formed JSON POST with the CSRF headers must reach the handler." | kind=entity | source=tests/test_api.py:L269 | neighbors=[.test_valid_json_post_allowed()] | lang=en
- "tests_test_api_rationale_279": "GET requests are never subject to the CSRF guard." | kind=entity | source=tests/test_api.py:L279 | neighbors=[.test_get_requests_not_blocked()] | lang=en
- "tests_test_api_testgooglelogin_test_google_login_bad_token": ".test_google_login_bad_token()" | kind=code-symbol | source=tests/test_api.py:L121 | neighbors=[TestGoogleLogin] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-012.json

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
