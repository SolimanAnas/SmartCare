# Node Description Batch 26 of 63

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

- "prometric_exam_examengine_applytheme": ".applyTheme()" | kind=code-symbol | source=src/prometric/exam.js:L167 | neighbors=[ExamEngine, .renderImprovementChart(), .initTheme(), .setTheme()]
- "prometric_exam_examengine_calculatetopicaccuracy": ".calculateTopicAccuracy()" | kind=code-symbol | source=src/prometric/exam.js:L460 | neighbors=[ExamEngine, .filterQuestions(), .renderHeatmap(), .renderStrengthsWeaknesses()]
- "prometric_exam_examengine_closemodal": ".closeModal()" | kind=code-symbol | source=src/prometric/exam.js:L1594 | neighbors=[ExamEngine, .endExam(), .resumeExam(), .showModal()]
- "prometric_exam_examengine_getselectedtopics": ".getSelectedTopics()" | kind=code-symbol | source=src/prometric/exam.js:L349 | neighbors=[ExamEngine, .filterQuestions(), .onTopicsChanged(), .updateAvailableCount()]
- "prometric_exam_examengine_inittheme": ".initTheme()" | kind=code-symbol | source=src/prometric/exam.js:L155 | neighbors=[ExamEngine, .init(), .applyTheme(), .setTheme()]
- "prometric_exam_examengine_navigate": ".navigate()" | kind=code-symbol | source=src/prometric/exam.js:L885 | neighbors=[ExamEngine, .handleKeyboard(), .handleTouchEnd(), .renderQuestion()]
- "prometric_exam_examengine_opennavigator": ".openNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L911 | neighbors=[ExamEngine, .setSheetInert(), .syncNavigatorState(), .toggleNavigator()]
- "prometric_exam_examengine_removetouchlisteners": ".removeTouchListeners()" | kind=code-symbol | source=src/prometric/exam.js:L793 | neighbors=[ExamEngine, .endExam(), .newExam(), .retryIncorrect()]
- "prometric_exam_examengine_renderhint": ".renderHint()" | kind=code-symbol | source=src/prometric/exam.js:L731 | neighbors=[ExamEngine, .renderQuestion(), .showHint(), .submitAnswer()]
- "prometric_exam_examengine_renderprogresssummary": ".renderProgressSummary()" | kind=code-symbol | source=src/prometric/exam.js:L436 | neighbors=[ExamEngine, .goToSetup(), .init(), plural()]
- "prometric_exam_examengine_savesetup": ".saveSetup()" | kind=code-symbol | source=src/prometric/exam.js:L201 | neighbors=[ExamEngine, .onTopicsChanged(), .selectMode(), .selectSetting()]
- "prometric_exam_examengine_selectmode": ".selectMode()" | kind=code-symbol | source=src/prometric/exam.js:L290 | neighbors=[ExamEngine, .saveSetup(), .updateAvailableCount(), .updateModeUI()]
- "prometric_exam_examengine_selectoption": ".selectOption()" | kind=code-symbol | source=src/prometric/exam.js:L783 | neighbors=[ExamEngine, .handleKeyboard(), .updateActionButtons(), .updateNavigator()]
- "prometric_exam_examengine_selectsetting": ".selectSetting()" | kind=code-symbol | source=src/prometric/exam.js:L312 | neighbors=[ExamEngine, .saveSetup(), .syncSettingButtons(), .updateAvailableCount()]
- "prometric_exam_examengine_setsheetinert": ".setSheetInert()" | kind=code-symbol | source=src/prometric/exam.js:L947 | neighbors=[ExamEngine, .closeNavigator(), .openNavigator(), .syncNavigatorState()]
- "prometric_exam_examengine_showmodal": ".showModal()" | kind=code-symbol | source=src/prometric/exam.js:L1555 | neighbors=[ExamEngine, .confirmEnd(), .pauseExam(), .closeModal()]
- "prometric_exam_examengine_togglenavigator": ".toggleNavigator()" | kind=code-symbol | source=src/prometric/exam.js:L901 | neighbors=[ExamEngine, .closeNavigator(), .openNavigator(), .syncNavigatorState()]
- "prometric_exam_examengine_updateactionbuttons": ".updateActionButtons()" | kind=code-symbol | source=src/prometric/exam.js:L754 | neighbors=[ExamEngine, .renderQuestion(), .selectOption(), .submitAnswer()]
- "prometric_exam_examengine_updatetimerhint": ".updateTimerHint()" | kind=code-symbol | source=src/prometric/exam.js:L427 | neighbors=[ExamEngine, .updateAvailableCount(), formatDuration(), plural()]
- "prometric_exam_formatnumber": "formatNumber()" | kind=code-symbol | source=src/prometric/exam.js:L40 | neighbors=[exam.js, .renderAnalyticsDashboard(), .updateAvailableCount(), plural()]
- "prometric_exam_icon": "icon()" | kind=code-symbol | source=src/prometric/exam.js:L34 | neighbors=[exam.js, .calculateResults(), .renderFeedback(), .resultItemHTML()]
- "prometric_progress_addexam": "addExam()" | kind=code-symbol | source=src/prometric/progress.js:L116 | neighbors=[progress.js, compactExam(), loadExams(), write()]
- "prometric_progress_compacthistory": "compactHistory()" | kind=code-symbol | source=src/prometric/progress.js:L79 | neighbors=[progress.js, count(), loadHistory(), migrate()]
- "prometric_progress_loadexams": "loadExams()" | kind=code-symbol | source=src/prometric/progress.js:L111 | neighbors=[progress.js, addExam(), read(), summary()]
- "scripts_assemble_chapters_assemble": "assemble()" | kind=code-symbol | source=scripts/assemble_chapters.py:L90 | neighbors=[assemble_chapters.py, extract_sections(), main(), Assemble a complete chapter JS file.]
- "scripts_audio_bp": "bp()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L90 | neighbors=[audio.py, foley_tap(), voice_chain(), whoosh()]
- "scripts_audio_foley_tap": "foley_tap()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L240 | neighbors=[audio.py, bp(), tl(), main()]
- "scripts_audio_impact": "impact()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L254 | neighbors=[audio.py, lp(), tl(), main()]
- "scripts_audio_place": "place()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L31 | neighbors=[audio.py, main(), Add mono/stereo clip x into stereo buf …, score()]
- "scripts_audio_reverb": "reverb()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L95 | neighbors=[audio.py, main(), lp(), score()]
- "scripts_audio_whoosh": "whoosh()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L245 | neighbors=[audio.py, main(), bp(), tl()]
- "scripts_build_ecg_reference_esc": "esc()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L34 | neighbors=[build_ecg_reference.js, card(), paper(), rhythmStrip()]
- "scripts_build_precache_build_list": "build_list()" | kind=code-symbol | source=scripts/build_precache.py:L134 | neighbors=[build_precache.py, collect_content_files(), collect_globs(), main()]
- "scripts_build_precache_main": "main()" | kind=code-symbol | source=scripts/build_precache.py:L160 | neighbors=[build_precache.py, build_list(), content_hash(), rel()]
- "scripts_build_precache_rel": "rel()" | kind=code-symbol | source=scripts/build_precache.py:L80 | neighbors=[build_precache.py, collect_content_files(), collect_globs(), main()]
- "scripts_check_contrast_contrast": "contrast()" | kind=code-symbol | source=scripts/check_contrast.py:L46 | neighbors=[check_contrast.py, hex_to_rgb(), luminance(), main()]
- "scripts_compose_build_edit": "build_edit()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L119 | neighbors=[compose.py, clk(), mk(), shot()]
- "scripts_compose_lib_ramp": "ramp()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L43 | neighbors=[compose_lib.py, kicker(), ease(), words_reveal()]
- "scripts_compose_render_play_overlays": "render_play_overlays()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L233 | neighbors=[compose.py, render_frame(), cam_at(), shot_at()]
- "scripts_compose_render_reveal": "render_reveal()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L513 | neighbors=[compose.py, render_frame(), debrief_card(), end_card()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-025.json

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
