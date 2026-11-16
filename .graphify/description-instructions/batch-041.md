# Node Description Batch 42 of 63

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

- "content_c9_meta": "c9.meta.js" | kind=code-symbol | source=content/c9.meta.js:L1 | neighbors=[662adfb Ship the Performance section fr…, 829493a Merge Merged: pull request #13 …]
- "cpg_guide_dosetable": "doseTable()" | kind=code-symbol | source=cpg-guide.js:L43 | neighbors=[cpg-guide.js, step()]
- "cpg_guide_ecghref": "ecgHref()" | kind=code-symbol | source=cpg-guide.js:L157 | neighbors=[cpg-guide.js, strip()]
- "cpg_guide_legend": "legend()" | kind=code-symbol | source=cpg-guide.js:L192 | neighbors=[cpg-guide.js, renderGuide()]
- "cpg_guide_level": "level()" | kind=code-symbol | source=cpg-guide.js:L31 | neighbors=[cpg-guide.js, step()]
- "cpg_guide_strip": "strip()" | kind=code-symbol | source=cpg-guide.js:L161 | neighbors=[cpg-guide.js, ecgHref()]
- "cpg_guide_usedlevels": "usedLevels()" | kind=code-symbol | source=cpg-guide.js:L203 | neighbors=[cpg-guide.js, renderGuide()]
- "cpg_strip_svg": "svg()" | kind=code-symbol | source=cpg-strip.js:L35 | neighbors=[cpg-strip.js, trace()]
- "cpg_strip_trace": "trace()" | kind=code-symbol | source=cpg-strip.js:L17 | neighbors=[cpg-strip.js, svg()]
- "empact_build_load": "load()" | kind=code-symbol | source=courses/empact/build.py:L24 | neighbors=[build.py, main()]
- "empact_build_main": "main()" | kind=code-symbol | source=courses/empact/build.py:L29 | neighbors=[build.py, load()]
- "google_flow_run_batch_click": "click()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L28 | neighbors=[run-batch.mjs, prepare()]
- "google_flow_run_batch_controls": "controls()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L24 | neighbors=[run-batch.mjs, prepare()]
- "itls_build_load": "load()" | kind=code-symbol | source=courses/itls/build.py:L24 | neighbors=[build.py, main()]
- "itls_build_main": "main()" | kind=code-symbol | source=courses/itls/build.py:L29 | neighbors=[build.py, load()]
- "mci_build_load": "load()" | kind=code-symbol | source=courses/mci/build.py:L31 | neighbors=[build.py, main()]
- "medical_build_load": "load()" | kind=code-symbol | source=courses/medical/build.py:L24 | neighbors=[build.py, main()]
- "medical_build_main": "main()" | kind=code-symbol | source=courses/medical/build.py:L29 | neighbors=[build.py, load()]
- "migrations_20260702000001_create_user_state_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L7 | neighbors=[20260702000001_create_user_state.sql, public.user_state]
- "migrations_20260702000001_create_user_state_public_user_state": "public.user_state" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L6 | neighbors=[20260702000001_create_user_state.sql, auth.users]
- "migrations_20260702000002_create_profiles_on_auth_user_created": "on_auth_user_created" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L52 | neighbors=[20260702000002_create_profiles.sql, auth.users]
- "migrations_20260702000002_create_profiles_public_handle_new_user": "public.handle_new_user()" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L31 | neighbors=[20260702000002_create_profiles.sql, public.profiles]
- "migrations_20261103000001_tighten_user_state_grants": "20261103000001_tighten_user_state_grants.sql" | kind=code-symbol | source=supabase/migrations/20261103000001_tighten_user_state_grants.sql:L1 | neighbors=[7a36fde Tighten Edge Function CORS and …, a409382 Tighten Edge Function CORS and …]
- "migrations_20261103000002_cap_user_state_size": "20261103000002_cap_user_state_size.sql" | kind=code-symbol | source=supabase/migrations/20261103000002_cap_user_state_size.sql:L1 | neighbors=[7a36fde Tighten Edge Function CORS and …, a409382 Tighten Edge Function CORS and …]
- "pals_build_load": "load()" | kind=code-symbol | source=courses/pals/build.py:L24 | neighbors=[build.py, main()]
- "pals_build_main": "main()" | kind=code-symbol | source=courses/pals/build.py:L29 | neighbors=[build.py, load()]
- "pepp_build_load": "load()" | kind=code-symbol | source=courses/pepp/build.py:L24 | neighbors=[build.py, main()]
- "pepp_build_main": "main()" | kind=code-symbol | source=courses/pepp/build.py:L29 | neighbors=[build.py, load()]
- "prometric_exam_examengine_bindevents": ".bindEvents()" | kind=code-symbol | source=src/prometric/exam.js:L231 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_gotostep": ".goToStep()" | kind=code-symbol | source=src/prometric/exam.js:L114 | neighbors=[ExamEngine, .newExam()]
- "prometric_exam_examengine_handletouchend": ".handleTouchEnd()" | kind=code-symbol | source=src/prometric/exam.js:L1026 | neighbors=[ExamEngine, .navigate()]
- "prometric_exam_examengine_initwizard": ".initWizard()" | kind=code-symbol | source=src/prometric/exam.js:L82 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loaddatabase": ".loadDatabase()" | kind=code-symbol | source=src/prometric/exam.js:L116 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loadquestionhistory": ".loadQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L324 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_loadsetup": ".loadSetup()" | kind=code-symbol | source=src/prometric/exam.js:L188 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_loadstats": ".loadStats()" | kind=code-symbol | source=src/prometric/exam.js:L1095 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_rendertopicperformance": ".renderTopicPerformance()" | kind=code-symbol | source=src/prometric/exam.js:L1248 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_rendertopics": ".renderTopics()" | kind=code-symbol | source=src/prometric/exam.js:L205 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_resultbuckets": ".resultBuckets()" | kind=code-symbol | source=src/prometric/exam.js:L1284 | neighbors=[ExamEngine, .renderResultsList()]
- "prometric_exam_examengine_savequestionhistory": ".saveQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L478 | neighbors=[ExamEngine, .submitAnswer()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-041.json

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
