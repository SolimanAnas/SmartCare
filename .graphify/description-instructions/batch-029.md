# Node Description Batch 30 of 62

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

- "cpg_guide_renderdrug": "renderDrug()" | kind=code-symbol | source=cpg-guide.js:L224 | neighbors=[cpg-guide.js, section(), source()]
- "cpg_guide_section": "section()" | kind=code-symbol | source=cpg-guide.js:L173 | neighbors=[cpg-guide.js, renderDrug(), figures()]
- "cpg_guide_source": "source()" | kind=code-symbol | source=cpg-guide.js:L185 | neighbors=[cpg-guide.js, renderDrug(), renderGuide()]
- "google_flow_run_batch_done": "done()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L70 | neighbors=[run-batch.mjs, logRows(), isDone()]
- "google_flow_run_batch_isdone": "isDone()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L86 | neighbors=[run-batch.mjs, done(), logRows()]
- "google_flow_run_batch_logrows": "logRows()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L69 | neighbors=[run-batch.mjs, done(), isDone()]
- "google_flow_run_batch_prepare": "prepare()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L31 | neighbors=[run-batch.mjs, click(), controls()]
- "mci_build_main": "main()" | kind=code-symbol | source=courses/mci/build.py:L72 | neighbors=[build.py, load(), write_practice_bank()]
- "mci_build_write_practice_bank": "write_practice_bank()" | kind=code-symbol | source=courses/mci/build.py:L36 | neighbors=[build.py, main(), Emit src/MCI/MCI-practice.json in the s…]
- "migrations_20260702000002_create_profiles_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L7 | neighbors=[20260702000002_create_profiles.sql, on_auth_user_created, public.profiles]
- "migrations_20260702000002_create_profiles_public_profiles": "public.profiles" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L6 | neighbors=[20260702000002_create_profiles.sql, public.handle_new_user(), auth.users]
- "pals_build": "build.py" | kind=code-symbol | source=courses/pals/build.py:L1 | neighbors=[2e859ad Adding PALS Course, load(), main()]
- "prometric_exam_examengine_closemodal": ".closeModal()" | kind=code-symbol | source=src/prometric/exam.js:L1090 | neighbors=[ExamEngine, .endExam(), .resumeExam()]
- "prometric_exam_examengine_inittheme": ".initTheme()" | kind=code-symbol | source=src/prometric/exam.js:L65 | neighbors=[ExamEngine, .init(), .setTheme()]
- "prometric_exam_examengine_resumeexam": ".resumeExam()" | kind=code-symbol | source=src/prometric/exam.js:L774 | neighbors=[ExamEngine, .closeModal(), .startTimer()]
- "prometric_exam_examengine_selectoption": ".selectOption()" | kind=code-symbol | source=src/prometric/exam.js:L606 | neighbors=[ExamEngine, .handleKeyboard(), .updateNavigator()]
- "prometric_exam_examengine_showanalytics": ".showAnalytics()" | kind=code-symbol | source=src/prometric/exam.js:L1108 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .showScreen()]
- "prometric_exam_examengine_showmodal": ".showModal()" | kind=code-symbol | source=src/prometric/exam.js:L1048 | neighbors=[ExamEngine, .confirmEnd(), .pauseExam()]
- "prometric_exam_examengine_updateprogressbar": ".updateProgressBar()" | kind=code-symbol | source=src/prometric/exam.js:L496 | neighbors=[ExamEngine, .startExam(), .updateNavigator()]
- "scripts_assemble_chapters_extract_sections": "extract_sections()" | kind=code-symbol | source=scripts/assemble_chapters.py:L44 | neighbors=[assemble_chapters.py, assemble(), Extract section objects from a TOC sect…]
- "scripts_audio_env": "env()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L43 | neighbors=[audio.py, app_sound(), score()]
- "scripts_audio_saw": "saw()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L54 | neighbors=[audio.py, app_sound(), score()]
- "scripts_build_courses": "build_courses.py" | kind=code-symbol | source=scripts/build_courses.py:L1 | neighbors=[main(), 20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…]
- "scripts_build_ecg_reference_grid": "grid()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L78 | neighbors=[build_ecg_reference.js, rhythmStrip(), twelveLead()]
- "scripts_build_ecg_reference_twelvelead": "twelveLead()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L113 | neighbors=[build_ecg_reference.js, card(), grid()]
- "scripts_build_precache_collect_globs": "collect_globs()" | kind=code-symbol | source=scripts/build_precache.py:L113 | neighbors=[build_precache.py, build_list(), rel()]
- "scripts_build_screenshots_slidehtml": "slideHtml()" | kind=code-symbol | source=marketing/google-play/scripts/build-screenshots.js:L95 | neighbors=[build-screenshots.js, dataUri(), ecgPath()]
- "scripts_build_toc_gen_chapter": "gen_chapter()" | kind=code-symbol | source=scripts/build_toc.py:L92 | neighbors=[build_toc.py, esc(), main()]
- "scripts_capture_screenshots_settle": "settle()" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L50 | neighbors=[capture-screenshots.js, startPrometric(), waitExamReady()]
- "scripts_capture_screenshots_startprometric": "startPrometric()" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L58 | neighbors=[capture-screenshots.js, settle(), waitExamReady()]
- "scripts_capture_screenshots_waitexamready": "waitExamReady()" | kind=code-symbol | source=marketing/google-play/scripts/capture-screenshots.js:L52 | neighbors=[capture-screenshots.js, startPrometric(), settle()]
- "scripts_check_contrast_main": "main()" | kind=code-symbol | source=scripts/check_contrast.py:L65 | neighbors=[check_contrast.py, contrast(), parse_themes()]
- "scripts_check_contrast_parse_themes": "parse_themes()" | kind=code-symbol | source=scripts/check_contrast.py:L52 | neighbors=[check_contrast.py, main(), Extract {theme_name: {var_name: hex}} f…]
- "scripts_compose_cam_at": "cam_at()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L262 | neighbors=[compose.py, render_full(), render_play_overlays()]
- "scripts_compose_clk": "clk()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L96 | neighbors=[compose.py, build_edit(), build_edit_play()]
- "scripts_compose_end_card": "end_card()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L553 | neighbors=[compose.py, _disclaimer(), render_reveal()]
- "scripts_compose_lib_card": "card()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L111 | neighbors=[compose_lib.py, rounded_mask(), Turn a camera view (smaller than frame)…]
- "scripts_compose_lib_draw_tracked": "draw_tracked()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L245 | neighbors=[compose_lib.py, chip(), kicker()]
- "scripts_compose_lib_ease": "ease()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L30 | neighbors=[compose_lib.py, ramp(), tap_ring()]
- "scripts_compose_lib_font": "font()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L25 | neighbors=[compose_lib.py, chip(), kicker()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-029.json

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
