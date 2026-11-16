# Node Description Batch 52 of 62

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

- "google_flow_generate_batches_subject": "SUBJECT" | kind=code-symbol | source=.google-flow/generate-batches.js:L59 | neighbors=[generate-batches.js] | lang=en
- "google_flow_generate_batches_svg": "SVG" | kind=code-symbol | source=.google-flow/generate-batches.js:L6 | neighbors=[generate-batches.js] | lang=en
- "google_flow_run_all_from_to": "[from, to]" | kind=code-symbol | source=.google-flow/run-all.mjs:L8 | neighbors=[run-all.mjs] | lang=en
- "google_flow_run_all_limited": "limited" | kind=code-symbol | source=.google-flow/run-all.mjs:L12 | neighbors=[run-all.mjs] | lang=en
- "google_flow_run_all_models": "MODELS" | kind=code-symbol | source=.google-flow/run-all.mjs:L11 | neighbors=[run-all.mjs] | lang=en
- "google_flow_run_all_names": "names" | kind=code-symbol | source=.google-flow/run-all.mjs:L9 | neighbors=[run-all.mjs] | lang=en
- "google_flow_run_batch_arg": "arg()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L18 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_batcharg": "batchArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L19 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_idsarg": "idsArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L19 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_jobs": "jobs" | kind=code-symbol | source=.google-flow/run-batch.mjs:L66 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_limited": "limited" | kind=code-symbol | source=.google-flow/run-batch.mjs:L85 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_load": "load()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L10 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_log": "LOG" | kind=code-symbol | source=.google-flow/run-batch.mjs:L20 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_modelarg": "modelArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L19 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_nextletter": "nextLetter()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L87 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_pagenotice": "pageNotice()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L61 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_queuearg": "queueArg" | kind=code-symbol | source=.google-flow/run-batch.mjs:L74 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_saved": "saved" | kind=code-symbol | source=.google-flow/run-batch.mjs:L92 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_run_batch_sleep": "sleep()" | kind=code-symbol | source=.google-flow/run-batch.mjs:L22 | neighbors=[run-batch.mjs] | lang=en
- "google_flow_update_tracker_counts": "counts" | kind=code-symbol | source=.google-flow/update-tracker.js:L14 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_fs": "fs" | kind=code-symbol | source=.google-flow/update-tracker.js:L3 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_generated": "generated" | kind=code-symbol | source=.google-flow/update-tracker.js:L9 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_head": "head" | kind=code-symbol | source=.google-flow/update-tracker.js:L12 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_iid_itrack_istatus_inotes": "[iId, iTrack, iStatus, iNotes]" | kind=code-symbol | source=.google-flow/update-tracker.js:L13 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_log": "log" | kind=code-symbol | source=.google-flow/update-tracker.js:L7 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_out": "out" | kind=code-symbol | source=.google-flow/update-tracker.js:L15 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_parseline": "parseLine()" | kind=code-symbol | source=.google-flow/update-tracker.js:L5 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_picks_notes_needs_pro_rerun_rerun": "{ picks, notes, needs_pro_rerun: rerun }" | kind=code-symbol | source=.google-flow/update-tracker.js:L8 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_quote": "quote()" | kind=code-symbol | source=.google-flow/update-tracker.js:L6 | neighbors=[update-tracker.js] | lang=en
- "google_flow_update_tracker_rows": "rows" | kind=code-symbol | source=.google-flow/update-tracker.js:L11 | neighbors=[update-tracker.js] | lang=en
- "mci_build_rationale_37": "Emit src/MCI/MCI-practice.json in the shared exam-engine shape\r     (text / opti" | kind=entity | source=courses/mci/build.py:L37 | neighbors=[write_practice_bank()] | lang=en
- "prometric_exam_examengine_formattime": ".formatTime()" | kind=code-symbol | source=src/prometric/exam.js:L758 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_handletouchstart": ".handleTouchStart()" | kind=code-symbol | source=src/prometric/exam.js:L220 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_showmobilepanel": ".showMobilePanel()" | kind=code-symbol | source=src/prometric/exam.js:L240 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_togglefocusmode": ".toggleFocusMode()" | kind=code-symbol | source=src/prometric/exam.js:L236 | neighbors=[ExamEngine] | lang=en
- "scripts_assemble_chapters_rationale_45": "Extract section objects from a TOC section file.      The file has the pattern:" | kind=entity | source=scripts/assemble_chapters.py:L45 | neighbors=[extract_sections()] | lang=en
- "scripts_assemble_chapters_rationale_91": "Assemble a complete chapter JS file." | kind=entity | source=scripts/assemble_chapters.py:L91 | neighbors=[assemble()] | lang=pt
- "scripts_audio_rationale_113": "cue: dict of section times from the edit (s1..s6)." | kind=entity | source=promo/megacode/scripts/audio.py:L113 | neighbors=[score()] | lang=en
- "scripts_audio_rationale_272": "Gentle broadcast chain for the TTS narration: HPF, presence, warmth, light compr" | kind=entity | source=promo/megacode/scripts/audio.py:L272 | neighbors=[voice_chain()] | lang=en
- "scripts_audio_rationale_32": "Add mono/stereo clip x into stereo buf at time t." | kind=entity | source=promo/megacode/scripts/audio.py:L32 | neighbors=[place()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-051.json

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
