# Node Description Batch 40 of 62

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

- "medical_build_load": "load()" | kind=code-symbol | source=courses/medical/build.py:L24 | neighbors=[build.py, main()]
- "medical_build_main": "main()" | kind=code-symbol | source=courses/medical/build.py:L29 | neighbors=[build.py, load()]
- "migrations_20260702000001_create_user_state_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L7 | neighbors=[20260702000001_create_user_state.sql, public.user_state]
- "migrations_20260702000001_create_user_state_public_user_state": "public.user_state" | kind=code-symbol | source=supabase/migrations/20260702000001_create_user_state.sql:L6 | neighbors=[20260702000001_create_user_state.sql, auth.users]
- "migrations_20260702000002_create_profiles_on_auth_user_created": "on_auth_user_created" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L52 | neighbors=[20260702000002_create_profiles.sql, auth.users]
- "migrations_20260702000002_create_profiles_public_handle_new_user": "public.handle_new_user()" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L31 | neighbors=[20260702000002_create_profiles.sql, public.profiles]
- "pals_build_load": "load()" | kind=code-symbol | source=courses/pals/build.py:L24 | neighbors=[build.py, main()]
- "pals_build_main": "main()" | kind=code-symbol | source=courses/pals/build.py:L29 | neighbors=[build.py, load()]
- "pepp_build_load": "load()" | kind=code-symbol | source=courses/pepp/build.py:L24 | neighbors=[build.py, main()]
- "pepp_build_main": "main()" | kind=code-symbol | source=courses/pepp/build.py:L29 | neighbors=[build.py, load()]
- "prometric_exam_examengine_adjustcatdifficulty": ".adjustCatDifficulty()" | kind=code-symbol | source=src/prometric/exam.js:L661 | neighbors=[ExamEngine, .submitAnswer()]
- "prometric_exam_examengine_bindevents": ".bindEvents()" | kind=code-symbol | source=src/prometric/exam.js:L157 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_calculatetopicaccuracy": ".calculateTopicAccuracy()" | kind=code-symbol | source=src/prometric/exam.js:L304 | neighbors=[ExamEngine, .filterQuestions()]
- "prometric_exam_examengine_confirmend": ".confirmEnd()" | kind=code-symbol | source=src/prometric/exam.js:L785 | neighbors=[ExamEngine, .showModal()]
- "prometric_exam_examengine_getselectedtopics": ".getSelectedTopics()" | kind=code-symbol | source=src/prometric/exam.js:L253 | neighbors=[ExamEngine, .filterQuestions()]
- "prometric_exam_examengine_gotoquestion": ".goToQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L719 | neighbors=[ExamEngine, .renderQuestion()]
- "prometric_exam_examengine_gotostep": ".goToStep()" | kind=code-symbol | source=src/prometric/exam.js:L114 | neighbors=[ExamEngine, .newExam()]
- "prometric_exam_examengine_handletouchend": ".handleTouchEnd()" | kind=code-symbol | source=src/prometric/exam.js:L225 | neighbors=[ExamEngine, .navigate()]
- "prometric_exam_examengine_initwizard": ".initWizard()" | kind=code-symbol | source=src/prometric/exam.js:L82 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loadchartjs": ".loadChartJS()" | kind=code-symbol | source=src/prometric/exam.js:L51 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loaddatabase": ".loadDatabase()" | kind=code-symbol | source=src/prometric/exam.js:L42 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loadquestionhistory": ".loadQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L324 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_loadstats": ".loadStats()" | kind=code-symbol | source=src/prometric/exam.js:L1095 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_pauseexam": ".pauseExam()" | kind=code-symbol | source=src/prometric/exam.js:L764 | neighbors=[ExamEngine, .showModal()]
- "prometric_exam_examengine_renderheatmap": ".renderHeatmap()" | kind=code-symbol | source=src/prometric/exam.js:L1165 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_renderimprovementchart": ".renderImprovementChart()" | kind=code-symbol | source=src/prometric/exam.js:L1130 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_renderinsights": ".renderInsights()" | kind=code-symbol | source=src/prometric/exam.js:L889 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_renderstrengthsweaknesses": ".renderStrengthsWeaknesses()" | kind=code-symbol | source=src/prometric/exam.js:L1208 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_rendertopicperformance": ".renderTopicPerformance()" | kind=code-symbol | source=src/prometric/exam.js:L926 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_savequestionhistory": ".saveQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L332 | neighbors=[ExamEngine, .submitAnswer()]
- "prometric_exam_examengine_savestats": ".saveStats()" | kind=code-symbol | source=src/prometric/exam.js:L1103 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_selectmode": ".selectMode()" | kind=code-symbol | source=src/prometric/exam.js:L126 | neighbors=[ExamEngine, .updateAvailableCount()]
- "prometric_exam_examengine_selectsetting": ".selectSetting()" | kind=code-symbol | source=src/prometric/exam.js:L140 | neighbors=[ExamEngine, .updateAvailableCount()]
- "prometric_exam_examengine_settheme": ".setTheme()" | kind=code-symbol | source=src/prometric/exam.js:L74 | neighbors=[ExamEngine, .initTheme()]
- "prometric_exam_examengine_showresults": ".showResults()" | kind=code-symbol | source=src/prometric/exam.js:L948 | neighbors=[ExamEngine, .showScreen()]
- "prometric_exam_examengine_showtoast": ".showToast()" | kind=code-symbol | source=src/prometric/exam.js:L1074 | neighbors=[ExamEngine, .toggleFlag()]
- "prometric_exam_examengine_shuffleoptions": ".shuffleOptions()" | kind=code-symbol | source=src/prometric/exam.js:L350 | neighbors=[ExamEngine, .shuffleArray()]
- "prometric_exam_examengine_updatelivescore": ".updateLiveScore()" | kind=code-symbol | source=src/prometric/exam.js:L504 | neighbors=[ExamEngine, .updateNavigator()]
- "scripts_assemble_chapters_main": "main()" | kind=code-symbol | source=scripts/assemble_chapters.py:L122 | neighbors=[assemble_chapters.py, assemble()]
- "scripts_audio_hp": "hp()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L85 | neighbors=[audio.py, voice_chain()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-039.json

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
