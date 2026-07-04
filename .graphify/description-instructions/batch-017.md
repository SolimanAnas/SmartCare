# Node Description Batch 18 of 48

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

- "commit:repo:github.com/SolimanAnas/SmartCare@c2479e9d0726a40d4d94cfbee9e025dedf321257": "c2479e9 Adding ECG & Drug calc 👍❤️💊" | kind=Commit | source=git | neighbors=[03f6898 Update sw.js, feat/lucide-svg-migration, fix/lucide-quote-consistency, de383e7 Add new files to service worker…]
- "commit:repo:github.com/SolimanAnas/SmartCare@c6c0a5cdb1fc6cf80ee0c44eabfa981c32b15305": "c6c0a5c chore: update core app - service worker, landing page, exam page, and c…" | kind=Commit | source=git | neighbors=[074617f feat: update chapter files with…, main, a4df22b fix: resolve CI lint failure an…, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@c75db552003a9077740036675dfd11920e4350ee": "c75db55 Update index.html" | kind=Commit | source=git | neighbors=[35a1e71 Update login.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, 3ecc147 Update index.html]
- "commit:repo:github.com/SolimanAnas/SmartCare@c9f040012caa5c4a566b770192bca7a146688efc": "c9f0400 Update index.html" | kind=Commit | source=git | neighbors=[07ec89d Update index.html, feat/lucide-svg-migration, fix/lucide-quote-consistency, d55c93d Update sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@d183462b1428daee70e9e992ba586e3c55c7f7a1": "d183462 Fix redirect URL for login page" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, fix/lucide-quote-consistency, 6a7c398 Update login page subhead and b…, e8be921 Remove leading slash from login…]
- "commit:repo:github.com/SolimanAnas/SmartCare@e6ace1cbab9503be7a68ceb32e257ba0cc12a056": "e6ace1c Add files via upload" | kind=Commit | source=git | neighbors=[9d96839 Added Login pages, feat/lucide-svg-migration, fix/lucide-quote-consistency, 668149a Log in & sign up 👍]
- "commit:repo:github.com/SolimanAnas/SmartCare@e8be9216e3b1e09a9a6d77fa1da9b919a7b030fb": "e8be921 Remove leading slash from login redirect URL" | kind=Commit | source=git | neighbors=[006f9af Update requirements.txt, feat/lucide-svg-migration, fix/lucide-quote-consistency, d183462 Fix redirect URL for login page]
- "commit:repo:github.com/SolimanAnas/SmartCare@eff053b6c11e2d6434d9f6b0cb42098b310531fa": "eff053b Ship all six Critical Fixes from the v2.0 roadmap audit" | kind=Commit | source=git | neighbors=[5b68bae docs: add comprehensive v2.0 up…, main, 2e2f605 Ship the Security section from …, sw.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@f3d2625949a03b0fdcb69988a24786569bba09bf": "f3d2625 Update README.md" | kind=Commit | source=git | neighbors=[3f5e261 Revise README to enhance projec…, feat/lucide-svg-migration, fix/lucide-quote-consistency, 4fb7ba0 Fix formatting in README for Li…]
- "commit:repo:github.com/SolimanAnas/SmartCare@fefe4cdb3029f7ea702a5a865d265739e1e9e272": "fefe4cd chore: bump SW to v2.2 for initial public release" | kind=Commit | source=git | neighbors=[d546791 feat: add screenshots, orientat…, main, 40d423a Remove unused admin/login/signu…, sw.js]
- "content_c9": "c9.js" | kind=code-symbol | source=content/c9.js:L1 | neighbors=[59a9f95 toc: implement prehospital (EMT…, 8a6ee0b Fix invisible table borders and…, 9b0bbbb content: deploy chapters 6-10 w…, a4deb03 Merge pull request #8 from Soli…]
- "itls_build": "build.py" | kind=code-symbol | source=courses/itls/build.py:L1 | neighbors=[1a00316 feat(itls): restructure itls co…, a4df22b fix: resolve CI lint failure an…, load(), main()]
- "migrations_20260702000001_create_user_state": "20260702000001_create_user_state.sql" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, auth.users, public.user_state]
- "prometric_exam_examengine_buildnavigator": ".buildNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L443 | neighbors=[ExamEngine, .updateNavigator(), .retryIncorrect(), .startExam()]
- "prometric_exam_examengine_constructor": ".constructor()" | kind=code-symbol | source=src/prometric/exam.js:L2 | neighbors=[ExamEngine, .init(), .loadQuestionHistory(), .loadStats()]
- "prometric_exam_examengine_navigate": ".navigate()" | kind=code-symbol | source=src/prometric/exam.js:L707 | neighbors=[ExamEngine, .handleKeyboard(), .handleTouchEnd(), .renderQuestion()]
- "prometric_exam_examengine_newexam": ".newExam()" | kind=code-symbol | source=src/prometric/exam.js:L814 | neighbors=[ExamEngine, .goToStep(), .removeTouchListeners(), .showScreen()]
- "prometric_exam_examengine_removetouchlisteners": ".removeTouchListeners()" | kind=code-symbol | source=src/prometric/exam.js:L789 | neighbors=[ExamEngine, .endExam(), .newExam(), .retryIncorrect()]
- "prometric_exam_examengine_shufflearray": ".shuffleArray()" | kind=code-symbol | source=src/prometric/exam.js:L338 | neighbors=[ExamEngine, .retryIncorrect(), .shuffleOptions(), .startExam()]
- "prometric_exam_examengine_starttimer": ".startTimer()" | kind=code-symbol | source=src/prometric/exam.js:L720 | neighbors=[ExamEngine, .resumeExam(), .retryIncorrect(), .startExam()]
- "prometric_exam_examengine_toggleflag": ".toggleFlag()" | kind=code-symbol | source=src/prometric/exam.js:L699 | neighbors=[ExamEngine, .handleKeyboard(), .showToast(), .updateNavigator()]
- "prometric_exam_examengine_updateavailablecount": ".updateAvailableCount()" | kind=code-symbol | source=src/prometric/exam.js:L150 | neighbors=[ExamEngine, .selectMode(), .selectSetting(), .filterQuestions()]
- "scripts_assemble_chapters_assemble": "assemble()" | kind=code-symbol | source=scripts/assemble_chapters.py:L90 | neighbors=[assemble_chapters.py, extract_sections(), main(), Assemble a complete chapter JS file.]
- "scripts_build_precache_build_list": "build_list()" | kind=code-symbol | source=scripts/build_precache.py:L115 | neighbors=[build_precache.py, collect_content_files(), collect_globs(), main()]
- "scripts_build_precache_collect_content_files": "collect_content_files()" | kind=code-symbol | source=scripts/build_precache.py:L65 | neighbors=[build_precache.py, build_list(), rel(), content/: *.meta.js + any full bundle t…]
- "scripts_build_precache_main": "main()" | kind=code-symbol | source=scripts/build_precache.py:L139 | neighbors=[build_precache.py, build_list(), content_hash(), rel()]
- "scripts_build_precache_rel": "rel()" | kind=code-symbol | source=scripts/build_precache.py:L61 | neighbors=[build_precache.py, collect_content_files(), collect_globs(), main()]
- "scripts_check_contrast_contrast": "contrast()" | kind=code-symbol | source=scripts/check_contrast.py:L46 | neighbors=[check_contrast.py, hex_to_rgb(), luminance(), main()]
- "scripts_generate_screenshots": "generate_screenshots.py" | kind=code-symbol | source=scripts/generate_screenshots.py:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, 94235c6 Ship the critical hardening lis…, compress(), main()]
- "scripts_generate_splash": "generate_splash.py" | kind=code-symbol | source=scripts/generate_splash.py:L1 | neighbors=[83a1ea8 Ship the Offline & PWA section …, d1b235f Merge pull request #15 Offline …, device_entry(), main()]
- "server_create_app": "create_app()" | kind=code-symbol | source=server.py:L84 | neighbors=[server.py, _register_csrf_guard(), _register_routes(), _register_security_headers()]
- "src_render_state_renderemptyorerror": "renderEmptyOrError()" | kind=code-symbol | source=src/render-state.js:L49 | neighbors=[render-state.js, escapeHtml(), icon(), renderState()]
- "tests_test_api_fakeresp": "_FakeResp" | kind=code-symbol | source=tests/test_api.py:L15 | neighbors=[test_api.py, .__init__(), .json(), .raise_for_status()]
- "tests_test_api_testadminusers_test_admin_can_list_users": ".test_admin_can_list_users()" | kind=code-symbol | source=tests/test_api.py:L146 | neighbors=[An authenticated admin (role == 'Admin'…, TestAdminUsers, _login(), _register()]
- "tests_test_api_testadminusers_test_admin_users_forbidden_for_regular_user": ".test_admin_users_forbidden_for_regular_user()" | kind=code-symbol | source=tests/test_api.py:L140 | neighbors=[A signed-in non-admin must be forbidden…, TestAdminUsers, _login(), _register()]
- "tests_test_api_testlogin_test_login_generic_error_message": ".test_login_generic_error_message()" | kind=code-symbol | source=tests/test_api.py:L106 | neighbors=[Both bad-user and bad-password return t…, TestLogin, _login(), _register()]
- "tests_test_api_teststaticfiles": "TestStaticFiles" | kind=code-symbol | source=tests/test_api.py:L210 | neighbors=[test_api.py, .test_manifest_json(), .test_nonexistent_file_returns_404(), .test_style_css()]
- "vendor_chart_4_5_1_umd_min_ae": "Ae()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, ._computeGridLineItems(), .drawBorder(), .getPixelForDecimal()]
- "vendor_chart_4_5_1_umd_min_as_cancel": ".cancel()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[as(), .tick(), ._createAnimations(), .stop()]
- "vendor_chart_4_5_1_umd_min_at": "at()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L7 | neighbors=[chart-4.5.1.umd.min.js, a(), e(), ._dataCheck()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-017.json

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
