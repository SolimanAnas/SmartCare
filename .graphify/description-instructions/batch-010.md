# Node Description Batch 11 of 13

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

- "tests_test_api_testlogin_test_login_nonexistent_user": ".test_login_nonexistent_user()" | kind=code-symbol | source=tests/test_api.py:L102 | neighbors=[TestLogin, _login()]
- "tests_test_api_testlogout": "TestLogout" | kind=code-symbol | source=tests/test_api.py:L127 | neighbors=[test_api.py, .test_logout_requires_auth()]
- "tests_test_api_testregister_test_common_password_blocked": ".test_common_password_blocked()" | kind=code-symbol | source=tests/test_api.py:L68 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_invalid_email_rejected": ".test_invalid_email_rejected()" | kind=code-symbol | source=tests/test_api.py:L73 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_no_digit": ".test_password_no_digit()" | kind=code-symbol | source=tests/test_api.py:L63 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_no_lowercase": ".test_password_no_lowercase()" | kind=code-symbol | source=tests/test_api.py:L58 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_no_uppercase": ".test_password_no_uppercase()" | kind=code-symbol | source=tests/test_api.py:L53 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_password_too_short": ".test_password_too_short()" | kind=code-symbol | source=tests/test_api.py:L48 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_register_creates_user": ".test_register_creates_user()" | kind=code-symbol | source=tests/test_api.py:L32 | neighbors=[TestRegister, _register()]
- "tests_test_api_testregister_test_register_duplicate_email": ".test_register_duplicate_email()" | kind=code-symbol | source=tests/test_api.py:L37 | neighbors=[TestRegister, _register()]
- "app_applytheme": "applyTheme()" | kind=code-symbol | source=app.js:L1270 | neighbors=[app.js]
- "app_createripple": "createRipple()" | kind=code-symbol | source=app.js:L1069 | neighbors=[app.js]
- "app_initindexsearch": "initIndexSearch()" | kind=code-symbol | source=app.js:L876 | neighbors=[app.js]
- "app_refreshstatsbadge": "refreshStatsBadge()" | kind=code-symbol | source=app.js:L1289 | neighbors=[app.js]
- "app_renderbottomnav": "renderBottomNav()" | kind=code-symbol | source=app.js:L387 | neighbors=[app.js]
- "app_rendersectionnavigation": "renderSectionNavigation()" | kind=code-symbol | source=app.js:L406 | neighbors=[app.js]
- "app_rendersectiontabs": "renderSectionTabs()" | kind=code-symbol | source=app.js:L372 | neighbors=[app.js]
- "app_timeago": "timeAgo()" | kind=code-symbol | source=app.js:L96 | neighbors=[app.js]
- "app_updatebottomnavvisibility": "updateBottomNavVisibility()" | kind=code-symbol | source=app.js:L463 | neighbors=[app.js]
- "app_updatefooternavposition": "updateFooterNavPosition()" | kind=code-symbol | source=app.js:L474 | neighbors=[app.js]
- "app_updateheadervisibility": "updateHeaderVisibility()" | kind=code-symbol | source=app.js:L440 | neighbors=[app.js]
- "app_updateprogressbarposition": "updateProgressBarPosition()" | kind=code-symbol | source=app.js:L453 | neighbors=[app.js]
- "app_updatescrollprogress": "updateScrollProgress()" | kind=code-symbol | source=app.js:L483 | neighbors=[app.js]
- "content_c_index_generateindexhtml": "generateIndexHTML()" | kind=code-symbol | source=content/c-index.js:L18 | neighbors=[c-index.js]
- "content_starters_backup_c_index_generateindexhtml": "generateIndexHTML()" | kind=code-symbol | source=content_starters_backup/c-index.js:L18 | neighbors=[c-index.js]
- "content_starters_backup_c0": "c0.js" | kind=code-symbol | source=content_starters_backup/c0.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c1": "c1.js" | kind=code-symbol | source=content_starters_backup/c1.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c10": "c10.js" | kind=code-symbol | source=content_starters_backup/c10.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c2": "c2.js" | kind=code-symbol | source=content_starters_backup/c2.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c3": "c3.js" | kind=code-symbol | source=content_starters_backup/c3.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c4": "c4.js" | kind=code-symbol | source=content_starters_backup/c4.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c5": "c5.js" | kind=code-symbol | source=content_starters_backup/c5.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c6": "c6.js" | kind=code-symbol | source=content_starters_backup/c6.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c7": "c7.js" | kind=code-symbol | source=content_starters_backup/c7.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c8": "c8.js" | kind=code-symbol | source=content_starters_backup/c8.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_c9": "c9.js" | kind=code-symbol | source=content_starters_backup/c9.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_m1_38": "m1-38.js" | kind=code-symbol | source=content_starters_backup/m1-38.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "content_starters_backup_s1": "s1.js" | kind=code-symbol | source=content_starters_backup/s1.js:L1 | neighbors=[b791fda content: deploy chapters 4-5 (C…]
- "playwright_config": "playwright.config.js" | kind=code-symbol | source=playwright.config.js:L1 | neighbors=[beb9c47 fix(ui): swap CSS to 0dad921 gl…]
- "prometric_exam_examengine_formattime": ".formatTime()" | kind=code-symbol | source=src/prometric/exam.js:L752 | neighbors=[ExamEngine]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-010.json

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
