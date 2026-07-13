# Node Description Batch 33 of 49

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

- "prometric_exam_examengine_handletouchend": ".handleTouchEnd()" | kind=code-symbol | source=src/prometric/exam.js:L225 | neighbors=[ExamEngine, .navigate()]
- "prometric_exam_examengine_initwizard": ".initWizard()" | kind=code-symbol | source=src/prometric/exam.js:L82 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loadchartjs": ".loadChartJS()" | kind=code-symbol | source=src/prometric/exam.js:L51 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loaddatabase": ".loadDatabase()" | kind=code-symbol | source=src/prometric/exam.js:L42 | neighbors=[ExamEngine, .init()]
- "prometric_exam_examengine_loadquestionhistory": ".loadQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L320 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_loadstats": ".loadStats()" | kind=code-symbol | source=src/prometric/exam.js:L1091 | neighbors=[ExamEngine, .constructor()]
- "prometric_exam_examengine_pauseexam": ".pauseExam()" | kind=code-symbol | source=src/prometric/exam.js:L760 | neighbors=[ExamEngine, .showModal()]
- "prometric_exam_examengine_renderheatmap": ".renderHeatmap()" | kind=code-symbol | source=src/prometric/exam.js:L1161 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_renderimprovementchart": ".renderImprovementChart()" | kind=code-symbol | source=src/prometric/exam.js:L1126 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_renderinsights": ".renderInsights()" | kind=code-symbol | source=src/prometric/exam.js:L885 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_renderstrengthsweaknesses": ".renderStrengthsWeaknesses()" | kind=code-symbol | source=src/prometric/exam.js:L1204 | neighbors=[ExamEngine, .renderAnalyticsDashboard()]
- "prometric_exam_examengine_rendertopicperformance": ".renderTopicPerformance()" | kind=code-symbol | source=src/prometric/exam.js:L922 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_savequestionhistory": ".saveQuestionHistory()" | kind=code-symbol | source=src/prometric/exam.js:L328 | neighbors=[ExamEngine, .submitAnswer()]
- "prometric_exam_examengine_savestats": ".saveStats()" | kind=code-symbol | source=src/prometric/exam.js:L1099 | neighbors=[ExamEngine, .calculateResults()]
- "prometric_exam_examengine_selectmode": ".selectMode()" | kind=code-symbol | source=src/prometric/exam.js:L126 | neighbors=[ExamEngine, .updateAvailableCount()]
- "prometric_exam_examengine_selectsetting": ".selectSetting()" | kind=code-symbol | source=src/prometric/exam.js:L140 | neighbors=[ExamEngine, .updateAvailableCount()]
- "prometric_exam_examengine_settheme": ".setTheme()" | kind=code-symbol | source=src/prometric/exam.js:L74 | neighbors=[ExamEngine, .initTheme()]
- "prometric_exam_examengine_showresults": ".showResults()" | kind=code-symbol | source=src/prometric/exam.js:L944 | neighbors=[ExamEngine, .showScreen()]
- "prometric_exam_examengine_showtoast": ".showToast()" | kind=code-symbol | source=src/prometric/exam.js:L1070 | neighbors=[ExamEngine, .toggleFlag()]
- "prometric_exam_examengine_shuffleoptions": ".shuffleOptions()" | kind=code-symbol | source=src/prometric/exam.js:L346 | neighbors=[ExamEngine, .shuffleArray()]
- "prometric_exam_examengine_updatelivescore": ".updateLiveScore()" | kind=code-symbol | source=src/prometric/exam.js:L500 | neighbors=[ExamEngine, .updateNavigator()]
- "scripts_assemble_chapters_main": "main()" | kind=code-symbol | source=scripts/assemble_chapters.py:L122 | neighbors=[assemble_chapters.py, assemble()]
- "scripts_build_precache_content_hash": "content_hash()" | kind=code-symbol | source=scripts/build_precache.py:L133 | neighbors=[build_precache.py, main()]
- "scripts_build_toc_esc": "esc()" | kind=code-symbol | source=scripts/build_toc.py:L88 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_build_toc_main": "main()" | kind=code-symbol | source=scripts/build_toc.py:L131 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_check_contrast_hex_to_rgb": "hex_to_rgb()" | kind=code-symbol | source=scripts/check_contrast.py:L30 | neighbors=[check_contrast.py, contrast()]
- "scripts_check_contrast_luminance": "luminance()" | kind=code-symbol | source=scripts/check_contrast.py:L37 | neighbors=[check_contrast.py, contrast()]
- "scripts_generate_screenshots_compress": "compress()" | kind=code-symbol | source=scripts/generate_screenshots.py:L54 | neighbors=[generate_screenshots.py, main()]
- "scripts_generate_screenshots_main": "main()" | kind=code-symbol | source=scripts/generate_screenshots.py:L60 | neighbors=[generate_screenshots.py, compress()]
- "scripts_generate_splash_device_entry": "device_entry()" | kind=code-symbol | source=scripts/generate_splash.py:L41 | neighbors=[generate_splash.py, main()]
- "scripts_generate_splash_main": "main()" | kind=code-symbol | source=scripts/generate_splash.py:L51 | neighbors=[generate_splash.py, device_entry()]
- "scripts_split_content_loadchapterdata": "loadChapterData()" | kind=code-symbol | source=scripts/split_content.js:L24 | neighbors=[split_content.js, main()]
- "scripts_split_content_main": "main()" | kind=code-symbol | source=scripts/split_content.js:L37 | neighbors=[split_content.js, loadChapterData()]
- "scripts_validate_content_load_known_single_option": "load_known_single_option()" | kind=code-symbol | source=scripts/validate_content.py:L199 | neighbors=[validate_content.py, main()]
- "scripts_validate_content_validate_manifest_shape": "validate_manifest_shape()" | kind=code-symbol | source=scripts/validate_content.py:L57 | neighbors=[validate_content.py, main()]
- "scripts_validate_content_validate_pearl": "validate_pearl()" | kind=code-symbol | source=scripts/validate_content.py:L149 | neighbors=[validate_content.py, validate_bank_content()]
- "server_register_csrf_guard": "_register_csrf_guard()" | kind=code-symbol | source=server.py:L217 | neighbors=[server.py, create_app()]
- "server_register_routes": "_register_routes()" | kind=code-symbol | source=server.py:L136 | neighbors=[server.py, create_app()]
- "server_register_security_headers": "_register_security_headers()" | kind=code-symbol | source=server.py:L239 | neighbors=[server.py, create_app()]
- "server_user": "User" | kind=code-symbol | source=server.py:L136 | neighbors=[server.py, UserMixin]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-032.json

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
