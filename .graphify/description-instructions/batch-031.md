# Node Description Batch 32 of 63

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

- "cpg_guide_source": "source()" | kind=code-symbol | source=cpg-guide.js:L185 | neighbors=[cpg-guide.js, renderDrug(), renderGuide()]
- "google_flow_run_batch_done": "done()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L70 | neighbors=[run-batch.mjs, logRows(), isDone()]
- "google_flow_run_batch_isdone": "isDone()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L86 | neighbors=[run-batch.mjs, done(), logRows()]
- "google_flow_run_batch_logrows": "logRows()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L69 | neighbors=[run-batch.mjs, done(), isDone()]
- "google_flow_run_batch_prepare": "prepare()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L31 | neighbors=[run-batch.mjs, click(), controls()]
- "google_flow_sheet": "sheet.py" | kind=code-symbol | source=.google-flow/sheet.py:L1 | neighbors=[dc19fef Add google-flow workspace and s…, 9724717 Add google-flow workspace and s…, d35441e Add google-flow workspace and s…]
- "mci_build_main": "main()" | kind=code-symbol | source=courses/mci/build.py:L72 | neighbors=[build.py, load(), write_practice_bank()]
- "mci_build_write_practice_bank": "write_practice_bank()" | kind=code-symbol | source=courses/mci/build.py:L36 | neighbors=[build.py, main(), Emit src/MCI/MCI-practice.json in the s…]
- "migrations_20260702000002_create_profiles_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L7 | neighbors=[20260702000002_create_profiles.sql, on_auth_user_created, public.profiles]
- "migrations_20260702000002_create_profiles_public_profiles": "public.profiles" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L6 | neighbors=[20260702000002_create_profiles.sql, public.handle_new_user(), auth.users]
- "pals_build": "build.py" | kind=code-symbol | source=courses/pals/build.py:L1 | neighbors=[2e859ad Adding PALS Course, load(), main()]
- "prometric_exam_escapehtml": "escapeHtml()" | kind=code-symbol | source=src/prometric/exam.js:L38 | neighbors=[exam.js, .renderFeedback(), .resultItemHTML()]
- "prometric_exam_examengine_basepool": ".basePool()" | kind=code-symbol | source=src/prometric/exam.js:L354 | neighbors=[ExamEngine, .filterQuestions(), .updateTopicCounts()]
- "prometric_exam_examengine_formattime": ".formatTime()" | kind=code-symbol | source=src/prometric/exam.js:L1064 | neighbors=[ExamEngine, .beginSession(), .calculateResults()]
- "prometric_exam_examengine_gotoquestion": ".goToQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L892 | neighbors=[ExamEngine, .closeNavigator(), .renderQuestion()]
- "prometric_exam_examengine_gradeoptions": ".gradeOptions()" | kind=code-symbol | source=src/prometric/exam.js:L693 | neighbors=[ExamEngine, .renderQuestion(), .submitAnswer()]
- "prometric_exam_examengine_loadchartjs": ".loadChartJS()" | kind=code-symbol | source=src/prometric/exam.js:L140 | neighbors=[ExamEngine, .showAnalytics(), .init()]
- "prometric_exam_examengine_orderpool": ".orderPool()" | kind=code-symbol | source=src/prometric/exam.js:L513 | neighbors=[ExamEngine, .shuffleArray(), .startExam()]
- "prometric_exam_examengine_pauseexam": ".pauseExam()" | kind=code-symbol | source=src/prometric/exam.js:L1070 | neighbors=[ExamEngine, .closeNavigator(), .showModal()]
- "prometric_exam_examengine_preparequestion": ".prepareQuestion()" | kind=code-symbol | source=src/prometric/exam.js:L506 | neighbors=[ExamEngine, .shuffleOptions(), .retargetUpcoming()]
- "prometric_exam_examengine_renderheatmap": ".renderHeatmap()" | kind=code-symbol | source=src/prometric/exam.js:L1492 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .calculateTopicAccuracy()]
- "prometric_exam_examengine_renderinsights": ".renderInsights()" | kind=code-symbol | source=src/prometric/exam.js:L1203 | neighbors=[ExamEngine, .calculateResults(), plural()]
- "prometric_exam_examengine_renderresultslist": ".renderResultsList()" | kind=code-symbol | source=src/prometric/exam.js:L1300 | neighbors=[ExamEngine, .resultBuckets(), .showResults()]
- "prometric_exam_examengine_renderstrengthsweaknesses": ".renderStrengthsWeaknesses()" | kind=code-symbol | source=src/prometric/exam.js:L1513 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .calculateTopicAccuracy()]
- "prometric_exam_examengine_resultitemhtml": ".resultItemHTML()" | kind=code-symbol | source=src/prometric/exam.js:L1322 | neighbors=[ExamEngine, escapeHtml(), icon()]
- "prometric_exam_examengine_resumeexam": ".resumeExam()" | kind=code-symbol | source=src/prometric/exam.js:L1088 | neighbors=[ExamEngine, .closeModal(), .startTimer()]
- "prometric_exam_examengine_retargetupcoming": ".retargetUpcoming()" | kind=code-symbol | source=src/prometric/exam.js:L853 | neighbors=[ExamEngine, .adjustCatDifficulty(), .prepareQuestion()]
- "prometric_exam_examengine_setchartmessage": ".setChartMessage()" | kind=code-symbol | source=src/prometric/exam.js:L1389 | neighbors=[ExamEngine, .renderImprovementChart(), .showAnalytics()]
- "prometric_exam_examengine_settheme": ".setTheme()" | kind=code-symbol | source=src/prometric/exam.js:L163 | neighbors=[ExamEngine, .applyTheme(), .initTheme()]
- "prometric_exam_examengine_showhint": ".showHint()" | kind=code-symbol | source=src/prometric/exam.js:L744 | neighbors=[ExamEngine, .handleKeyboard(), .renderHint()]
- "prometric_exam_examengine_showresults": ".showResults()" | kind=code-symbol | source=src/prometric/exam.js:L1294 | neighbors=[ExamEngine, .renderResultsList(), .showScreen()]
- "prometric_exam_examengine_showtoast": ".showToast()" | kind=code-symbol | source=src/prometric/exam.js:L1605 | neighbors=[ExamEngine, .adjustCatDifficulty(), .toggleFlag()]
- "prometric_exam_examengine_shuffleoptions": ".shuffleOptions()" | kind=code-symbol | source=src/prometric/exam.js:L492 | neighbors=[ExamEngine, .prepareQuestion(), .shuffleArray()]
- "prometric_exam_examengine_syncsettingbuttons": ".syncSettingButtons()" | kind=code-symbol | source=src/prometric/exam.js:L320 | neighbors=[ExamEngine, .applySettingsToUI(), .selectSetting()]
- "prometric_exam_examengine_synctopicclasses": ".syncTopicClasses()" | kind=code-symbol | source=src/prometric/exam.js:L343 | neighbors=[ExamEngine, .applySettingsToUI(), .onTopicsChanged()]
- "prometric_exam_examengine_updatecatindicator": ".updateCatIndicator()" | kind=code-symbol | source=src/prometric/exam.js:L776 | neighbors=[ExamEngine, .adjustCatDifficulty(), .renderQuestion()]
- "prometric_exam_examengine_updateflagbutton": ".updateFlagButton()" | kind=code-symbol | source=src/prometric/exam.js:L772 | neighbors=[ExamEngine, .renderQuestion(), .toggleFlag()]
- "prometric_exam_examengine_updatemodeui": ".updateModeUI()" | kind=code-symbol | source=src/prometric/exam.js:L299 | neighbors=[ExamEngine, .applySettingsToUI(), .selectMode()]
- "prometric_exam_examengine_updateprogressbar": ".updateProgressBar()" | kind=code-symbol | source=src/prometric/exam.js:L496 | neighbors=[ExamEngine, .startExam(), .updateNavigator()]
- "prometric_exam_examengine_updatetopiccounts": ".updateTopicCounts()" | kind=code-symbol | source=src/prometric/exam.js:L414 | neighbors=[ExamEngine, .updateAvailableCount(), .basePool()]

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
