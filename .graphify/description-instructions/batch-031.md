# Node Description Batch 32 of 49

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

- "vendor_supabase_js_2_110_0_zr": "zr()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L17 | neighbors=[supabase-js-2.110.0.mjs, initialize(), y()]
- "acls_build_load": "load()" | kind=code-symbol | source=courses/acls/build.py:L24 | neighbors=[build.py, main()]
- "acls_build_main": "main()" | kind=code-symbol | source=courses/acls/build.py:L29 | neighbors=[build.py, load()]
- "app_initbatteryindicator": "initBatteryIndicator()" | kind=code-symbol | source=app.js:L110 | neighbors=[app.js, initChapterPage()]
- "app_initscrollreveal": "initScrollReveal()" | kind=code-symbol | source=app.js:L532 | neighbors=[app.js, setMainContent()]
- "app_recordlastvisited": "recordLastVisited()" | kind=code-symbol | source=app.js:L37 | neighbors=[app.js, initChapterPage()]
- "app_updateheader": "updateHeader()" | kind=code-symbol | source=app.js:L238 | neighbors=[app.js, renderComingSoon()]
- "bls_build_load": "load()" | kind=code-symbol | source=courses/bls/build.py:L24 | neighbors=[build.py, main()]
- "bls_build_main": "main()" | kind=code-symbol | source=courses/bls/build.py:L29 | neighbors=[build.py, load()]
- "commit:repo:github.com/SolimanAnas/SmartCare@224ab831c8425237c6980236996ae43fb14d8737": "224ab83 deps(deps): bump google-auth from 2.53.0 to 2.55.1" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/pip/google-auth-2.55.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@755284cd614315df67e3a15aaacb18093c6d8400": "755284c ci(deps)(deps): bump actions/checkout from 4 to 7" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/github_actions/actions/check…]
- "commit:repo:github.com/SolimanAnas/SmartCare@cb7e171493f7f62d600c7ed42b359f525dead499": "cb7e171 deps(deps): bump pytest from 9.0.3 to 9.1.1" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/pip/pytest-9.1.1]
- "commit:repo:github.com/SolimanAnas/SmartCare@cd24feaf092b8444f058985570e0a18082d74874": "cd24fea ci(deps)(deps): bump actions/setup-python from 5 to 6" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/github_actions/actions/setup…]
- "commit:repo:github.com/SolimanAnas/SmartCare@f95455824d4bb69e3f52741aca22ca53609903bb": "f954558 ci(deps)(deps): bump actions/setup-node from 4 to 6" | kind=Commit | source=git | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, dependabot/github_actions/actions/setup…]
- "content_c1_meta": "c1.meta.js" | kind=code-symbol | source=content/c1.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c10_meta": "c10.meta.js" | kind=code-symbol | source=content/c10.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c2_meta": "c2.meta.js" | kind=code-symbol | source=content/c2.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c3_meta": "c3.meta.js" | kind=code-symbol | source=content/c3.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c4_meta": "c4.meta.js" | kind=code-symbol | source=content/c4.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c5_meta": "c5.meta.js" | kind=code-symbol | source=content/c5.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c6_meta": "c6.meta.js" | kind=code-symbol | source=content/c6.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c7_meta": "c7.meta.js" | kind=code-symbol | source=content/c7.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c8_meta": "c8.meta.js" | kind=code-symbol | source=content/c8.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_c9_meta": "c9.meta.js" | kind=code-symbol | source=content/c9.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "content_curriculum_index": "curriculum-index.js" | kind=code-symbol | source=content/curriculum-index.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…]
- "itls_build_load": "load()" | kind=code-symbol | source=courses/itls/build.py:L24 | neighbors=[build.py, main()]
- "itls_build_main": "main()" | kind=code-symbol | source=courses/itls/build.py:L29 | neighbors=[build.py, load()]
- "migrations_20260702000001_create_user_state_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L7 | neighbors=[20260702000001_create_user_state.sql, public.user_state]
- "migrations_20260702000001_create_user_state_public_user_state": "public.user_state" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L6 | neighbors=[20260702000001_create_user_state.sql, auth.users]
- "migrations_20260702000002_create_profiles_on_auth_user_created": "on_auth_user_created" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L52 | neighbors=[20260702000002_create_profiles.sql, auth.users]
- "migrations_20260702000002_create_profiles_public_handle_new_user": "public.handle_new_user()" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L31 | neighbors=[20260702000002_create_profiles.sql, public.profiles]
- "pals_build_load": "load()" | kind=code-symbol | source=courses/pals/build.py:L24 | neighbors=[build.py, main()]
- "pals_build_main": "main()" | kind=code-symbol | source=courses/pals/build.py:L29 | neighbors=[build.py, load()]
- "prometric_exam_examengine_adjustcatdifficulty": ".adjustCatDifficulty()" | kind=code-symbol | source=src/prometric/exam.js:L657 | neighbors=[ExamEngine, .submitAnswer()]
- "prometric_exam_examengine_bindevents": ".bindEvents()" | kind=code-symbol | source=src/prometric/exam.js:L157 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_calculatetopicaccuracy": ".calculateTopicAccuracy()" | kind=code-symbol | source=src/prometric/exam.js:L300 | neighbors=[ExamEngine, .filterQuestions()]
- "prometric_exam_examengine_confirmend": ".confirmEnd()" | kind=code-symbol | source=src/prometric/exam.js:L781 | neighbors=[ExamEngine, .showModal()]
- "prometric_exam_examengine_getselectedtopics": ".getSelectedTopics()" | kind=code-symbol | source=src/prometric/exam.js:L253 | neighbors=[ExamEngine, .filterQuestions()]
- "prometric_exam_examengine_gotoquestion": ".goToQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L715 | neighbors=[ExamEngine, .renderQuestion()]
- "prometric_exam_examengine_gotostep": ".goToStep()" | kind=code-symbol | source=src/prometric/exam.js:L114 | neighbors=[ExamEngine, .newExam()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-031.json

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
