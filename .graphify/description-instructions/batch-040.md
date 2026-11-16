# Node Description Batch 41 of 62

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
- "scripts_audio_midi": "midi()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L107 | neighbors=[audio.py, score()]
- "scripts_audio_read_wav": "read_wav()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L262 | neighbors=[audio.py, main()]
- "scripts_audio_square": "square()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L66 | neighbors=[audio.py, app_sound()]
- "scripts_audio_tri": "tri()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L76 | neighbors=[audio.py, app_sound()]
- "scripts_build_ecg_reference_actions": "actions()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L139 | neighbors=[build_ecg_reference.js, card()]
- "scripts_build_ecg_reference_calpulse": "calPulse()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L90 | neighbors=[build_ecg_reference.js, rhythmStrip()]
- "scripts_build_ecg_reference_paper": "paper()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L30 | neighbors=[build_ecg_reference.js, esc()]
- "scripts_build_ecg_reference_record": "record()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L47 | neighbors=[build_ecg_reference.js, card()]
- "scripts_build_ecg_reference_trace": "trace()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L59 | neighbors=[build_ecg_reference.js, rhythmStrip()]
- "scripts_build_precache_content_hash": "content_hash()" | kind=code-symbol | source=scripts/build_precache.py:L146 | neighbors=[build_precache.py, main()]
- "scripts_build_screenshots_datauri": "dataUri()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L79 | neighbors=[build-screenshots.js, slideHtml()]
- "scripts_build_screenshots_ecgpath": "ecgPath()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L88 | neighbors=[build-screenshots.js, slideHtml()]
- "scripts_build_toc_esc": "esc()" | kind=code-symbol | source=scripts/build_toc.py:L88 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_build_toc_main": "main()" | kind=code-symbol | source=scripts/build_toc.py:L131 | neighbors=[build_toc.py, gen_chapter()]
- "scripts_check_contrast_hex_to_rgb": "hex_to_rgb()" | kind=code-symbol | source=scripts/check_contrast.py:L30 | neighbors=[check_contrast.py, contrast()]
- "scripts_check_contrast_luminance": "luminance()" | kind=code-symbol | source=scripts/check_contrast.py:L37 | neighbors=[check_contrast.py, contrast()]
- "scripts_compose_captions": "captions()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L213 | neighbors=[compose.py, Narration as burned-in captions (the st…]
- "scripts_compose_disclaimer": "_disclaimer()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L623 | neighbors=[compose.py, end_card()]
- "scripts_compose_lib_bokeh_render": ".render()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L196 | neighbors=[Bokeh, .sprite()]
- "scripts_compose_lib_bokeh_sprite": ".sprite()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L185 | neighbors=[Bokeh, .render()]
- "scripts_compose_lib_camera_view": "camera_view()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L74 | neighbors=[compose_lib.py, Render src (RGB) as seen by a camera ce…]
- "scripts_compose_lib_capture_frame": ".frame()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L69 | neighbors=[Capture, .frames()]
- "scripts_compose_lib_capture_frames": ".frames()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L65 | neighbors=[Capture, .frame()]
- "scripts_compose_lib_grade": "grade()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L228 | neighbors=[compose_lib.py, _grain()]
- "scripts_compose_lib_gradient_bg": "gradient_bg()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L159 | neighbors=[compose_lib.py, _grid()]
- "scripts_compose_lib_grain": "_grain()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L224 | neighbors=[compose_lib.py, grade()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-040.json

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
