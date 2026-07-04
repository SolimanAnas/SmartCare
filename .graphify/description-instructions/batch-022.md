# Node Description Batch 23 of 48

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

- "commit:repo:github.com/SolimanAnas/SmartCare@4389d53bda9ae06f02d07ca5f034c22dff5a839d": "4389d53 Improve drawer toggle panel identification on index.html" | kind=Commit | source=git | neighbors=[main, b1f4385 Bump service worker cache to v2…, 90c10bb Make hero greeting on index.htm…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4561a63df1296ad06c0f1a7ab9a7034c72d30cd1": "4561a63 fix: correct SUPABASE_URL typo (zltfrrudihtrtxutvdqq.supabase.co)" | kind=Commit | source=git | neighbors=[main, 24d0345 fix: correct SUPABASE_URL typo …, aa81a0c fix: set SUPABASE_URL in supaba…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@5b68bae00b78a61ac933c7fb7c18299e78178303": "5b68bae docs: add comprehensive v2.0 upgrade roadmap from full repository audit" | kind=Commit | source=git | neighbors=[main, eff053b Ship all six Critical Fixes fro…, acb0328 About ✅ Merge pull request #11 …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b988aa93af5c5e028873d87c0cbd12b0379784f": "5b988aa Create .nojekyll" | kind=Commit | source=git | neighbors=[40d423a Remove unused admin/login/signu…, main, 1a56d75 feat: graphify rebuild with des…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5dddc2fc156b7d7c32e9a543f909731384dafe25": "5dddc2f feat: update ECG-study.html footer to match index.html branding" | kind=Commit | source=git | neighbors=[main, 5d23c19 fix: improve heading and index-…, bae7406 chore: graphify auto-update, EC…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@60c17820d11ca70af36e0dffe44414c34a7b9672": "60c1782 chore: stop tracking TOC/ directory (now gitignored)" | kind=Commit | source=git | neighbors=[main, de0dcb2 feat: Add Open Graph metadata, …, 9b0bbbb content: deploy chapters 6-10 w…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@67cd1ebdd38c3b3a718d12f11d183faaa761dfd6": "67cd1eb fix: update contact email and all URLs in privacy policy" | kind=Commit | source=git | neighbors=[main, 18fb7dc Added ├── .well-known/, d5777e9 feat: comprehensive privacy pol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c55b58a08f87310c2157a2ecec18a123b5f5594": "6c55b58 fix: sync section-header & continue-label colors with index.html sectio…" | kind=Commit | source=git | neighbors=[main, 0245fab update: refresh PWA icons and f…, ff409d5 fix: match section-header style…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c988c004c1065d2ba9e8065b9e0cdd475988565": "7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supaba…" | kind=Commit | source=git | neighbors=[24d0345 fix: correct SUPABASE_URL typo …, main, 0465774 feat: Google Identity Services …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8541abefec7ae7fa9d781e820ae6356b7c77b72b": "8541abe chore: Change index page title from landing page to clinical learning p…" | kind=Commit | source=git | neighbors=[main, d00c567 feat: Remove Scope of Practice …, 92652ca feat: Update search placeholder…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@90c10bb9124d5ae485f96aeae6b5c0b137683cdd": "90c10bb Make hero greeting on index.html sign-in aware" | kind=Commit | source=git | neighbors=[8a6ee0b Fix invisible table borders and…, main, 4389d53 Improve drawer toggle panel ide…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@98be90d66a0dcd109768dee26ba7727d0e6608ab": "98be90d Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, 213cb39 NEW CHAPTERS ADDED V 4.0.1, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa3705ce2c482dd0e6d4138b26ebca7007daa232": "aa3705c Add mid-cycle v2.0 audit: verify roadmap status against code, re-priori…" | kind=Commit | source=git | neighbors=[83a1ea8 Ship the Offline & PWA section …, main, 94235c6 Ship the critical hardening lis…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa81a0c05ca6c23af3be35bcd63b1bbbe66aca54": "aa81a0c fix: set SUPABASE_URL in supabase-config.js" | kind=Commit | source=git | neighbors=[main, 4561a63 fix: correct SUPABASE_URL typo …, b0748c1 feat: Supabase integration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9276aedf9c658368f229db910044abccc835060": "c9276ae chore: update graphify knowledge graph" | kind=Commit | source=git | neighbors=[1fc629e fix(app.js): handle DOMContentL…, main, 1a00316 feat(itls): restructure itls co…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d546791e464c038a52e24f9309be76c8b998d88f": "d546791 feat: add screenshots, orientation, and safe categories to manifest" | kind=Commit | source=git | neighbors=[18fb7dc Added ├── .well-known/, main, fefe4cd chore: bump SW to v2.2 for init…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d5777e9b8a0fe40413ec7e62d9487650a17bb5f7": "d5777e9 feat: comprehensive privacy policy with premium UI/UX design" | kind=Commit | source=git | neighbors=[829a86d update: refresh PWA icons from …, main, 67cd1eb fix: update contact email and a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d641fa0ed1193b3e8493f17ea46f056c534b259f": "d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pa…" | kind=Commit | source=git | neighbors=[1a00316 feat(itls): restructure itls co…, main, 074617f feat: update chapter files with…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d7918ff93f973a6649510d7bf4ebeac6b20d0e70": "d7918ff fix: commit package-lock.json — CI's npm ci can't run without it" | kind=Commit | source=git | neighbors=[d7008b7 Add the actual content changes …, main, 53ec4c1 Merge pull request #16 ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@feedaf7c27886f8816012f5856135349bf1a1366": "feedaf7 Add fresh production-readiness audit (July 2026)" | kind=Commit | source=git | neighbors=[c9e85ef Deduplicate the 8 standalone ex…, main, ef31570 Fix offline precache gap, add c…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff409d5260a1de9557f95c0878f5781ccf2651b8": "ff409d5 fix: match section-header style to index.html section-label" | kind=Commit | source=git | neighbors=[7f26548 fix: UTF-8 mojibake across exam…, main, 6c55b58 fix: sync section-header & cont…] | lang=en
- "migrations_20260702000002_create_profiles_auth_users": "auth.users" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L7 | neighbors=[20260702000002_create_profiles.sql, on_auth_user_created, public.profiles] | lang=en
- "migrations_20260702000002_create_profiles_public_profiles": "public.profiles" | kind=code-symbol | source=supabase/migrations/20260702000002_create_profiles.sql:L6 | neighbors=[20260702000002_create_profiles.sql, public.handle_new_user(), auth.users] | lang=en
- "playwright_config": "playwright.config.js" | kind=code-symbol | source=playwright.config.js:L1 | neighbors=[53ec4c1 Merge pull request #16 ✅, beb9c47 fix(ui): swap CSS to 0dad921 gl…, d7008b7 Add the actual content changes …] | lang=en
- "prometric_exam_examengine_closemodal": ".closeModal()" | kind=code-symbol | source=src/prometric/exam.js:L1086 | neighbors=[ExamEngine, .endExam(), .resumeExam()] | lang=en
- "prometric_exam_examengine_inittheme": ".initTheme()" | kind=code-symbol | source=src/prometric/exam.js:L65 | neighbors=[ExamEngine, .init(), .setTheme()] | lang=en
- "prometric_exam_examengine_resumeexam": ".resumeExam()" | kind=code-symbol | source=src/prometric/exam.js:L770 | neighbors=[ExamEngine, .closeModal(), .startTimer()] | lang=en
- "prometric_exam_examengine_selectoption": ".selectOption()" | kind=code-symbol | source=src/prometric/exam.js:L602 | neighbors=[ExamEngine, .handleKeyboard(), .updateNavigator()] | lang=en
- "prometric_exam_examengine_showanalytics": ".showAnalytics()" | kind=code-symbol | source=src/prometric/exam.js:L1104 | neighbors=[ExamEngine, .renderAnalyticsDashboard(), .showScreen()] | lang=en
- "prometric_exam_examengine_showmodal": ".showModal()" | kind=code-symbol | source=src/prometric/exam.js:L1044 | neighbors=[ExamEngine, .confirmEnd(), .pauseExam()] | lang=en
- "prometric_exam_examengine_updateprogressbar": ".updateProgressBar()" | kind=code-symbol | source=src/prometric/exam.js:L492 | neighbors=[ExamEngine, .startExam(), .updateNavigator()] | lang=en
- "scripts_assemble_chapters_extract_sections": "extract_sections()" | kind=code-symbol | source=scripts/assemble_chapters.py:L44 | neighbors=[assemble_chapters.py, assemble(), Extract section objects from a TOC sect…] | lang=en
- "scripts_build_courses": "build_courses.py" | kind=code-symbol | source=scripts/build_courses.py:L1 | neighbors=[20fdfa2 feat(itls): complete itls revie…, a4df22b fix: resolve CI lint failure an…, main()] | lang=en
- "scripts_build_precache_collect_globs": "collect_globs()" | kind=code-symbol | source=scripts/build_precache.py:L94 | neighbors=[build_precache.py, build_list(), rel()] | lang=en
- "scripts_build_toc_gen_chapter": "gen_chapter()" | kind=code-symbol | source=scripts/build_toc.py:L92 | neighbors=[build_toc.py, esc(), main()] | lang=en
- "scripts_check_contrast_main": "main()" | kind=code-symbol | source=scripts/check_contrast.py:L65 | neighbors=[check_contrast.py, contrast(), parse_themes()] | lang=en
- "scripts_check_contrast_parse_themes": "parse_themes()" | kind=code-symbol | source=scripts/check_contrast.py:L52 | neighbors=[check_contrast.py, main(), Extract {theme_name: {var_name: hex}} f…] | lang=en
- "scripts_extract_itls_toc": "extract_itls_toc.py" | kind=code-symbol | source=scripts/extract_itls_toc.py:L1 | neighbors=[0bee1e7 fix(ci): resolve ruff linting e…, b791fda content: deploy chapters 4-5 (C…, Extract TOC from International Trauma L…] | lang=en
- "scripts_gen_create_src_folders": "create_src_folders()" | kind=code-symbol | source=scripts/gen.py:L24 | neighbors=[gen.py, main(), Creates the necessary src/COURSE folder…] | lang=en
- "scripts_gen_generate_course_page": "generate_course_page()" | kind=code-symbol | source=scripts/gen.py:L32 | neighbors=[gen.py, main(), Replaces placeholders in the template w…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-022.json

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
