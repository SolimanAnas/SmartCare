# Node Description Batch 41 of 48

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

- "app_rendersectiontabs": "renderSectionTabs()" | kind=code-symbol | source=app.js:L285 | neighbors=[app.js] | lang=en
- "app_timeago": "timeAgo()" | kind=code-symbol | source=app.js:L54 | neighbors=[app.js] | lang=en
- "app_updatebottomnavvisibility": "updateBottomNavVisibility()" | kind=code-symbol | source=app.js:L376 | neighbors=[app.js] | lang=en
- "app_updatefooternavposition": "updateFooterNavPosition()" | kind=code-symbol | source=app.js:L387 | neighbors=[app.js] | lang=en
- "app_updateheadervisibility": "updateHeaderVisibility()" | kind=code-symbol | source=app.js:L353 | neighbors=[app.js] | lang=en
- "app_updateprogressbarposition": "updateProgressBarPosition()" | kind=code-symbol | source=app.js:L366 | neighbors=[app.js] | lang=en
- "app_updatescrollprogress": "updateScrollProgress()" | kind=code-symbol | source=app.js:L396 | neighbors=[app.js] | lang=en
- "content_c_index_generateindexhtml": "generateIndexHTML()" | kind=code-symbol | source=content/c-index.js:L18 | neighbors=[c-index.js] | lang=en
- "data_bundle": "bundle.js" | kind=code-symbol | source=courses/itls/data/bundle.js:L1 | neighbors=[1a00316 feat(itls): restructure itls co…] | lang=en
- "prometric_exam_examengine_formattime": ".formatTime()" | kind=code-symbol | source=src/prometric/exam.js:L754 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_handletouchstart": ".handleTouchStart()" | kind=code-symbol | source=src/prometric/exam.js:L220 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_showmobilepanel": ".showMobilePanel()" | kind=code-symbol | source=src/prometric/exam.js:L240 | neighbors=[ExamEngine] | lang=en
- "prometric_exam_examengine_togglefocusmode": ".toggleFocusMode()" | kind=code-symbol | source=src/prometric/exam.js:L236 | neighbors=[ExamEngine] | lang=en
- "scripts_assemble_chapters_rationale_45": "Extract section objects from a TOC section file.      The file has the pattern:" | kind=entity | source=scripts/assemble_chapters.py:L45 | neighbors=[extract_sections()] | lang=en
- "scripts_assemble_chapters_rationale_91": "Assemble a complete chapter JS file." | kind=entity | source=scripts/assemble_chapters.py:L91 | neighbors=[assemble()] | lang=pt
- "scripts_build_courses_main": "main()" | kind=code-symbol | source=scripts/build_courses.py:L6 | neighbors=[build_courses.py] | lang=en
- "scripts_build_precache_rationale_66": "content/: *.meta.js + any full bundle that ISN'T superseded by a\r     meta.js (c" | kind=entity | source=scripts/build_precache.py:L66 | neighbors=[collect_content_files()] | lang=en
- "scripts_check_contrast_rationale_53": "Extract {theme_name: {var_name: hex}} for each :root/[data-theme] block." | kind=entity | source=scripts/check_contrast.py:L53 | neighbors=[parse_themes()] | lang=en
- "scripts_extract_itls_toc_rationale_1": "Extract TOC from International Trauma Life Support.pdf using PyMuPDF's built-in" | kind=entity | source=scripts/extract_itls_toc.py:L1 | neighbors=[extract_itls_toc.py] | lang=en
- "scripts_gen_rationale_25": "Creates the necessary src/COURSE folders." | kind=entity | source=scripts/gen.py:L25 | neighbors=[create_src_folders()] | lang=en
- "scripts_gen_rationale_33": "Replaces placeholders in the template with course-specific data." | kind=entity | source=scripts/gen.py:L33 | neighbors=[generate_course_page()] | lang=en
- "scripts_generate_all_itls_data_main": "main()" | kind=code-symbol | source=scripts/generate_all_itls_data.py:L975 | neighbors=[generate_all_itls_data.py] | lang=en
- "scripts_generate_maskable_icons_main": "main()" | kind=code-symbol | source=scripts/generate_maskable_icons.py:L29 | neighbors=[generate_maskable_icons.py] | lang=en
- "scripts_generate_sitemap_main": "main()" | kind=code-symbol | source=scripts/generate_sitemap.py:L28 | neighbors=[generate_sitemap.py] | lang=en
- "scripts_split_content_chapter_ids": "CHAPTER_IDS" | kind=code-symbol | source=scripts/split_content.js:L22 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_content_dir": "CONTENT_DIR" | kind=code-symbol | source=scripts/split_content.js:L17 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_fs": "fs" | kind=code-symbol | source=scripts/split_content.js:L12 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_path": "path" | kind=code-symbol | source=scripts/split_content.js:L13 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_root": "ROOT" | kind=code-symbol | source=scripts/split_content.js:L16 | neighbors=[split_content.js] | lang=en
- "scripts_split_content_vm": "vm" | kind=code-symbol | source=scripts/split_content.js:L14 | neighbors=[split_content.js] | lang=en
- "scripts_validate_content_rationale_105": "Extract (text, options, correct_answer) regardless of which of the\r     bank's s" | kind=entity | source=scripts/validate_content.py:L105 | neighbors=[question_core_fields()] | lang=en
- "scripts_validate_content_rationale_51": "Several banks were authored with a UTF-8 BOM; browsers' fetch().json()\r     tole" | kind=entity | source=scripts/validate_content.py:L51 | neighbors=[load_json_lenient()] | lang=en
- "server_load_user": "load_user()" | kind=code-symbol | source=server.py:L146 | neighbors=[server.py] | lang=en
- "server_rationale_151": "Allow-list of admin emails sourced from the environment (no hard-coding)." | kind=entity | source=server.py:L151 | neighbors=[_admin_emails()] | lang=en
- "server_rationale_157": "A user is an admin if their role is 'Admin' or they are allow-listed." | kind=entity | source=server.py:L157 | neighbors=[_is_admin()] | lang=en
- "server_rationale_35": "Write a structured audit record for auth and admin events." | kind=entity | source=server.py:L35 | neighbors=[_audit()] | lang=en
- "server_rationale_61": "Return an error string, or None if valid." | kind=entity | source=server.py:L61 | neighbors=[_validate_email()] | lang=en
- "server_rationale_70": "Return an error string, or None if the password meets policy." | kind=entity | source=server.py:L70 | neighbors=[_validate_password()] | lang=en
- "shared_admin_admincaller": "AdminCaller" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L60 | neighbors=[admin.ts] | lang=en
- "shared_admin_allowed_origins": "ALLOWED_ORIGINS" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L10 | neighbors=[admin.ts] | lang=en

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
