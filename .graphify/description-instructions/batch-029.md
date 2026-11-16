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

- "commit:repo:github.com/SolimanAnas/SmartCare@6c55b58a08f87310c2157a2ecec18a123b5f5594": "6c55b58 fix: sync section-header & continue-label colors with index.html sectio…" | kind=Commit | source=git | neighbors=[main, 0245fab update: refresh PWA icons and f…, ff409d5 fix: match section-header style…]
- "commit:repo:github.com/SolimanAnas/SmartCare@7c988c004c1065d2ba9e8065b9e0cdd475988565": "7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supaba…" | kind=Commit | source=git | neighbors=[24d0345 fix: correct SUPABASE_URL typo …, main, 0465774 feat: Google Identity Services …]
- "commit:repo:github.com/SolimanAnas/SmartCare@8541abefec7ae7fa9d781e820ae6356b7c77b72b": "8541abe chore: Change index page title from landing page to clinical learning p…" | kind=Commit | source=git | neighbors=[main, d00c567 feat: Remove Scope of Practice …, 92652ca feat: Update search placeholder…]
- "commit:repo:github.com/SolimanAnas/SmartCare@90c10bb9124d5ae485f96aeae6b5c0b137683cdd": "90c10bb Make hero greeting on index.html sign-in aware" | kind=Commit | source=git | neighbors=[8a6ee0b Fix invisible table borders and…, main, 4389d53 Improve drawer toggle panel ide…]
- "commit:repo:github.com/SolimanAnas/SmartCare@98be90d66a0dcd109768dee26ba7727d0e6608ab": "98be90d Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, 213cb39 NEW CHAPTERS ADDED V 4.0.1, c-index.js]
- "commit:repo:github.com/SolimanAnas/SmartCare@aa81a0c05ca6c23af3be35bcd63b1bbbe66aca54": "aa81a0c fix: set SUPABASE_URL in supabase-config.js" | kind=Commit | source=git | neighbors=[main, 4561a63 fix: correct SUPABASE_URL typo …, b0748c1 feat: Supabase integration]
- "commit:repo:github.com/SolimanAnas/SmartCare@c9276aedf9c658368f229db910044abccc835060": "c9276ae chore: update graphify knowledge graph" | kind=Commit | source=git | neighbors=[1fc629e fix(app.js): handle DOMContentL…, main, 1a00316 feat(itls): restructure itls co…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d546791e464c038a52e24f9309be76c8b998d88f": "d546791 feat: add screenshots, orientation, and safe categories to manifest" | kind=Commit | source=git | neighbors=[18fb7dc Added ├── .well-known/, main, fefe4cd chore: bump SW to v2.2 for init…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d5777e9b8a0fe40413ec7e62d9487650a17bb5f7": "d5777e9 feat: comprehensive privacy policy with premium UI/UX design" | kind=Commit | source=git | neighbors=[829a86d update: refresh PWA icons from …, main, 67cd1eb fix: update contact email and a…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d641fa0ed1193b3e8493f17ea46f056c534b259f": "d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pa…" | kind=Commit | source=git | neighbors=[1a00316 feat(itls): restructure itls co…, main, 074617f feat: update chapter files with…]
- "commit:repo:github.com/SolimanAnas/SmartCare@ff409d5260a1de9557f95c0878f5781ccf2651b8": "ff409d5 fix: match section-header style to index.html section-label" | kind=Commit | source=git | neighbors=[7f26548 fix: UTF-8 mojibake across exam…, main, 6c55b58 fix: sync section-header & cont…]
- "cpg_guide_figures": "figures()" | kind=code-symbol | source=cpg-guide.js:L69 | neighbors=[cpg-guide.js, section(), step()]
- "cpg_guide_renderdrug": "renderDrug()" | kind=code-symbol | source=cpg-guide.js:L208 | neighbors=[cpg-guide.js, section(), source()]
- "cpg_guide_section": "section()" | kind=code-symbol | source=cpg-guide.js:L159 | neighbors=[cpg-guide.js, renderDrug(), figures()]
- "cpg_guide_source": "source()" | kind=code-symbol | source=cpg-guide.js:L169 | neighbors=[cpg-guide.js, renderDrug(), renderGuide()]
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
