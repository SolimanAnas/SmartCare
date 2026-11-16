# Node Description Batch 54 of 63

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "google_flow_update_tracker_log": "log" | kind=code-symbol | source=.google-flow/update-tracker.js:L7 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_out": "out" | kind=code-symbol | source=.google-flow/update-tracker.js:L15 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_parseline": "parseLine()" | kind=code-symbol | source=.google-flow/update-tracker.js:L5 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_picks_notes_needs_pro_rerun_rerun": "{ picks, notes, needs_pro_rerun: rerun }" | kind=code-symbol | source=.google-flow/update-tracker.js:L8 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_quote": "quote()" | kind=code-symbol | source=.google-flow/update-tracker.js:L6 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_rows": "rows" | kind=code-symbol | source=.google-flow/update-tracker.js:L11 | neighbors=[update-tracker.js] | lang=en
- "mci_build_rationale_37": "Emit src/MCI/MCI-practice.json in the shared exam-engine shape\r     (text / opti" | kind=entity | source=courses/mci/build.py:L37 | neighbors=[write_practice_bank()] | lang=en
- "prometric_exam_default_settings": "DEFAULT_SETTINGS" | kind=code-symbol | source=src/prometric/exam.js:L22 | neighbors=[exam.js] | lang=en
- "prometric_exam_examengine_attemptsof": ".attemptsOf()" | kind=code-symbol | source=src/prometric/exam.js:L474 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_buildoption": ".buildOption()" | kind=code-symbol | source=src/prometric/exam.js:L677 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_handletouchstart": ".handleTouchStart()" | kind=code-symbol | source=src/prometric/exam.js:L1019 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_questionstate": ".questionState()" | kind=code-symbol | source=src/prometric/exam.js:L598 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_showmobilepanel": ".showMobilePanel()" | kind=code-symbol | source=src/prometric/exam.js:L240 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_togglefocusmode": ".toggleFocusMode()" | kind=code-symbol | source=src/prometric/exam.js:L236 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_html_escapes": "HTML_ESCAPES" | kind=code-symbol | source=src/prometric/exam.js:L37 | neighbors=[exam.js] | lang=en
- "prometric_exam_letters": "LETTERS" | kind=code-symbol | source=src/prometric/exam.js:L4 | neighbors=[exam.js] | lang=en
- "prometric_exam_modes": "MODES" | kind=code-symbol | source=src/prometric/exam.js:L9 | neighbors=[exam.js] | lang=en
- "prometric_exam_theme_info": "THEME_INFO" | kind=code-symbol | source=src/prometric/exam.js:L11 | neighbors=[exam.js] | lang=en
- "scripts_apply_guide_images_chapterids": "chapterIds" | kind=code-symbol | source=scripts/apply_guide_images.js:L65 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_content": "CONTENT" | kind=code-symbol | source=scripts/apply_guide_images.js:L14 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_figures": "{ figures }" | kind=code-symbol | source=scripts/apply_guide_images.js:L15 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_findsection": "findSection()" | kind=code-symbol | source=scripts/apply_guide_images.js:L35 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_fs": "fs" | kind=code-symbol | source=scripts/apply_guide_images.js:L9 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_load": "load()" | kind=code-symbol | source=scripts/apply_guide_images.js:L18 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_path": "path" | kind=code-symbol | source=scripts/apply_guide_images.js:L10 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_problems": "problems" | kind=code-symbol | source=scripts/apply_guide_images.js:L16 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_root": "ROOT" | kind=code-symbol | source=scripts/apply_guide_images.js:L13 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_stripfigures": "stripFigures()" | kind=code-symbol | source=scripts/apply_guide_images.js:L38 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_apply_guide_images_vm": "vm" | kind=code-symbol | source=scripts/apply_guide_images.js:L11 | neighbors=[apply_guide_images.js] | lang=en
- "scripts_assemble_chapters_rationale_45": "Extract section objects from a TOC section file.      The file has the pattern:" | kind=entity | source=scripts/assemble_chapters.py:L45 | neighbors=[extract_sections()] | lang=en
- "scripts_assemble_chapters_rationale_91": "Assemble a complete chapter JS file." | kind=entity | source=scripts/assemble_chapters.py:L91 | neighbors=[assemble()] | lang=pt
- "scripts_audio_rationale_113": "cue: dict of section times from the edit (s1..s6)." | kind=entity | source=promo/megacode/scripts/audio.py:L113 | neighbors=[score()] | lang=en
- "scripts_audio_rationale_272": "Gentle broadcast chain for the TTS narration: HPF, presence, warmth, light compr" | kind=entity | source=promo/megacode/scripts/audio.py:L272 | neighbors=[voice_chain()] | lang=en
- "scripts_audio_rationale_32": "Add mono/stereo clip x into stereo buf at time t." | kind=entity | source=promo/megacode/scripts/audio.py:L32 | neighbors=[place()] | lang=en
- "scripts_build_courses_main": "main()" | kind=code-symbol | source=scripts/build_courses.py:L6 | neighbors=[build_courses.py] | lang=en
- "scripts_build_ecg_reference_datauri": "dataUri()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L38 | neighbors=[build_ecg_reference.js] | lang=en
- "scripts_build_ecg_reference_defs": "defs()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L84 | neighbors=[build_ecg_reference.js] | lang=en
- "scripts_build_ecg_reference_e": "E" | kind=code-symbol | source=scripts/build_ecg_reference.js:L25 | neighbors=[build_ecg_reference.js] | lang=en
- "scripts_build_ecg_reference_fs": "fs" | kind=code-symbol | source=scripts/build_ecg_reference.js:L16 | neighbors=[build_ecg_reference.js] | lang=en
- "scripts_build_ecg_reference_indexhtml": "indexHtml()" | kind=code-symbol | source=scripts/build_ecg_reference.js:L193 | neighbors=[build_ecg_reference.js] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-053.json

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
