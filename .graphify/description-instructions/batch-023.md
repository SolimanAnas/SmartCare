# Node Description Batch 24 of 49

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

- "commit:repo:github.com/SolimanAnas/SmartCare@aa3705ce2c482dd0e6d4138b26ebca7007daa232": "aa3705c Add mid-cycle v2.0 audit: verify roadmap status against code, re-priori…" | kind=Commit | source=git | neighbors=[83a1ea8 Ship the Offline & PWA section …, main, 94235c6 Ship the critical hardening lis…]
- "commit:repo:github.com/SolimanAnas/SmartCare@aa81a0c05ca6c23af3be35bcd63b1bbbe66aca54": "aa81a0c fix: set SUPABASE_URL in supabase-config.js" | kind=Commit | source=git | neighbors=[main, 4561a63 fix: correct SUPABASE_URL typo …, b0748c1 feat: Supabase integration]
- "commit:repo:github.com/SolimanAnas/SmartCare@c9276aedf9c658368f229db910044abccc835060": "c9276ae chore: update graphify knowledge graph" | kind=Commit | source=git | neighbors=[1fc629e fix(app.js): handle DOMContentL…, main, 1a00316 feat(itls): restructure itls co…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d546791e464c038a52e24f9309be76c8b998d88f": "d546791 feat: add screenshots, orientation, and safe categories to manifest" | kind=Commit | source=git | neighbors=[18fb7dc Added ├── .well-known/, main, fefe4cd chore: bump SW to v2.2 for init…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d5777e9b8a0fe40413ec7e62d9487650a17bb5f7": "d5777e9 feat: comprehensive privacy policy with premium UI/UX design" | kind=Commit | source=git | neighbors=[829a86d update: refresh PWA icons from …, main, 67cd1eb fix: update contact email and a…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d641fa0ed1193b3e8493f17ea46f056c534b259f": "d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pa…" | kind=Commit | source=git | neighbors=[1a00316 feat(itls): restructure itls co…, main, 074617f feat: update chapter files with…]
- "commit:repo:github.com/SolimanAnas/SmartCare@d7918ff93f973a6649510d7bf4ebeac6b20d0e70": "d7918ff fix: commit package-lock.json — CI's npm ci can't run without it" | kind=Commit | source=git | neighbors=[d7008b7 Add the actual content changes …, main, 53ec4c1 Merge pull request #16 ✅]
- "commit:repo:github.com/SolimanAnas/SmartCare@e9a2970ac4d468aa16c5f6977b0d134651b8fd56": "e9a2970 Add agentic implementation plans for ACLS and PALS reviewers" | kind=Commit | source=git | neighbors=[82ff814 Add Playwright smoke test for B…, main, 5157b39 Fix horizontal overflow on phon…]
- "commit:repo:github.com/SolimanAnas/SmartCare@f3382e1e94cfa0b78d93256a3c9dbd64dc054bfa": "f3382e1 Add agentic implementation plan for BLS course reviewer (docs/BLS.md)" | kind=Commit | source=git | neighbors=[817a4bf Merge pull request #23 Fixed: r…, main, a75c415 Scaffold BLS reviewer (courses/…]
- "commit:repo:github.com/SolimanAnas/SmartCare@feedaf7c27886f8816012f5856135349bf1a1366": "feedaf7 Add fresh production-readiness audit (July 2026)" | kind=Commit | source=git | neighbors=[c9e85ef Deduplicate the 8 standalone ex…, main, ef31570 Fix offline precache gap, add c…]
- "commit:repo:github.com/SolimanAnas/SmartCare@ff409d5260a1de9557f95c0878f5781ccf2651b8": "ff409d5 fix: match section-header style to index.html section-label" | kind=Commit | source=git | neighbors=[7f26548 fix: UTF-8 mojibake across exam…, main, 6c55b58 fix: sync section-header & cont…]
- "migrations_20260702000002_create_profiles_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L7 | neighbors=[20260702000002_create_profiles.sql, on_auth_user_created, public.profiles]
- "migrations_20260702000002_create_profiles_public_profiles": "public.profiles" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L6 | neighbors=[20260702000002_create_profiles.sql, public.handle_new_user(), auth.users]
- "pals_build": "build.py" | kind=code-symbol | source=courses/pals/build.py:L1 | neighbors=[2e859ad Adding PALS Course, load(), main()]
- "playwright_config": "playwright.config.js" | kind=code-symbol | source=playwright.config.js:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, beb9c47 fix(ui): swap CSS to 0dad921 gl…, d7008b7 Add the actual content changes …]
- "prometric_exam_examengine_closemodal": ".closeModal()" | kind=code-symbol | source=src/prometric/exam.js:L1086 | neighbors=[ExamEngine, .endExam(), .resumeExam()]
- "prometric_exam_examengine_inittheme": ".initTheme()" | kind=code-symbol | source=src/prometric/exam.js:L65 | neighbors=[ExamEngine, .init(), .setTheme()]
- "prometric_exam_examengine_resumeexam": ".resumeExam()" | kind=code-symbol | source=src/prometric/exam.js:L770 | neighbors=[ExamEngine, .closeModal(), .startTimer()]
- "prometric_exam_examengine_selectoption": ".selectOption()" | kind=code-symbol | source=src/prometric/exam.js:L602 | neighbors=[ExamEngine, .handleKeyboard(), .updateNavigator()]
- "prometric_exam_examengine_showanalytics": ".showAnalytics()" | kind=code-symbol | source=src/prometric/exam.js:L1104 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .showScreen()]
- "prometric_exam_examengine_showmodal": ".showModal()" | kind=code-symbol | source=src/prometric/exam.js:L1044 | neighbors=[ExamEngine, .confirmEnd(), .pauseExam()]
- "prometric_exam_examengine_updateprogressbar": ".updateProgressBar()" | kind=code-symbol | source=src/prometric/exam.js:L492 | neighbors=[ExamEngine, .startExam(), .updateNavigator()]
- "scripts_assemble_chapters_extract_sections": "extract_sections()" | kind=code-symbol | source=scripts/assemble_chapters.py:L44 | neighbors=[assemble_chapters.py, assemble(), Extract section objects from a TOC sect…]
- "scripts_build_courses": "build_courses.py" | kind=code-symbol | source=scripts/build_courses.py:L1 | neighbors=[20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…, main()]
- "scripts_build_precache_collect_globs": "collect_globs()" | kind=code-symbol | source=scripts/build_precache.py:L100 | neighbors=[build_precache.py, build_list(), rel()]
- "scripts_build_toc_gen_chapter": "gen_chapter()" | kind=code-symbol | source=scripts/build_toc.py:L92 | neighbors=[build_toc.py, esc(), main()]
- "scripts_check_contrast_main": "main()" | kind=code-symbol | source=scripts/check_contrast.py:L65 | neighbors=[check_contrast.py, contrast(), parse_themes()]
- "scripts_check_contrast_parse_themes": "parse_themes()" | kind=code-symbol | source=scripts/check_contrast.py:L52 | neighbors=[check_contrast.py, main(), Extract {theme_name: {var_name: hex}} f…]
- "scripts_extract_itls_toc": "extract_itls_toc.py" | kind=code-symbol | source=scripts/extract_itls_toc.py:L1 | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, b791fda content: deploy chapters 4-5 (C…, Extract TOC from International Trauma L…]
- "scripts_gen_create_src_folders": "create_src_folders()" | kind=code-symbol | source=scripts/gen.py:L24 | neighbors=[gen.py, main(), Creates the necessary src/COURSE folder…]
- "scripts_gen_generate_course_page": "generate_course_page()" | kind=code-symbol | source=scripts/gen.py:L32 | neighbors=[gen.py, main(), Replaces placeholders in the template w…]
- "scripts_gen_main": "main()" | kind=code-symbol | source=scripts/gen.py:L55 | neighbors=[gen.py, create_src_folders(), generate_course_page()]
- "scripts_generate_all_itls_data": "generate_all_itls_data.py" | kind=code-symbol | source=scripts/generate_all_itls_data.py:L1 | neighbors=[20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…, main()]
- "scripts_generate_maskable_icons": "generate_maskable_icons.py" | kind=code-symbol | source=scripts/generate_maskable_icons.py:L1 | neighbors=[83a1ea8 Ship the Offline & PWA section …, d1b235f Merge pull request #15 Offline …, main()]
- "scripts_validate_content_load_json_lenient": "load_json_lenient()" | kind=code-symbol | source=scripts/validate_content.py:L50 | neighbors=[validate_content.py, Several banks were authored with a UTF-…, validate_bank_content()]
- "scripts_validate_content_question_core_fields": "question_core_fields()" | kind=code-symbol | source=scripts/validate_content.py:L104 | neighbors=[validate_content.py, Extract (text, options, correct_answer)…, validate_question()]
- "scripts_validate_content_rel": "rel()" | kind=code-symbol | source=scripts/validate_content.py:L46 | neighbors=[validate_content.py, main(), validate_manifest_coverage()]
- "scripts_validate_content_validate_manifest_coverage": "validate_manifest_coverage()" | kind=code-symbol | source=scripts/validate_content.py:L91 | neighbors=[validate_content.py, main(), rel()]
- "scripts_validate_content_validate_question": "validate_question()" | kind=code-symbol | source=scripts/validate_content.py:L113 | neighbors=[validate_content.py, validate_bank_content(), question_core_fields()]
- "server_admin_emails": "_admin_emails()" | kind=code-symbol | source=server.py:L150 | neighbors=[server.py, _is_admin(), Allow-list of admin emails sourced from…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-023.json

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
