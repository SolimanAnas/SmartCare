# Node Description Batch 44 of 63

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

- "scripts_compose_lib_lerp": "lerp()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L39 | neighbors=[compose_lib.py, kicker()]
- "scripts_compose_lib_rounded_mask": "rounded_mask()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L105 | neighbors=[compose_lib.py, card()]
- "scripts_compose_lib_text_size": "text_size()" | kind=code-symbol | source=promo/megacode/scripts/compose_lib.py:L240 | neighbors=[compose_lib.py, chip()]
- "scripts_compose_region_view": "region_view()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L420 | neighbors=[compose.py, render_macro()]
- "scripts_compose_render_titles": "render_titles()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L633 | neighbors=[compose.py, render_frame()]
- "scripts_compose_to_out": "to_out()" | kind=code-symbol | source=promo/megacode/scripts/compose.py:L386 | neighbors=[compose.py, render_full()]
- "scripts_generate_screenshots_compress": "compress()" | kind=code-symbol | source=scripts/generate_screenshots.py:L54 | neighbors=[generate_screenshots.py, main()]
- "scripts_generate_screenshots_main": "main()" | kind=code-symbol | source=scripts/generate_screenshots.py:L60 | neighbors=[generate_screenshots.py, compress()]
- "scripts_generate_splash_device_entry": "device_entry()" | kind=code-symbol | source=scripts/generate_splash.py:L41 | neighbors=[generate_splash.py, main()]
- "scripts_generate_splash_main": "main()" | kind=code-symbol | source=scripts/generate_splash.py:L51 | neighbors=[generate_splash.py, device_entry()]
- "scripts_inject": "inject.js" | kind=code-symbol | source=promo/megacode/scripts/inject.js:L1 | neighbors=[2a5f204 Add SmartCare Megacode cinemati…, 7421ea4 Megacode cinematic promo]
- "scripts_qa_blacks": "blacks()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L36 | neighbors=[qa.py, main()]
- "scripts_qa_loudness": "loudness()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L28 | neighbors=[qa.py, main()]
- "scripts_qa_probe": "probe()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L23 | neighbors=[qa.py, main()]
- "scripts_qa_sheet": "sheet()" | kind=code-symbol | source=promo/megacode/scripts/qa.py:L41 | neighbors=[qa.py, main()]
- "scripts_record_click": "click()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L76 | neighbors=[record.js, auto()]
- "scripts_record_hold": "hold()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L66 | neighbors=[record.js, frame()]
- "scripts_record_scrollto": "scrollTo()" | kind=code-symbol | source=promo/megacode/scripts/record.js:L84 | neighbors=[record.js, frame()]
- "scripts_split_content_loadchapterdata": "loadChapterData()" | kind=code-symbol | source=scripts/split_content.js:L24 | neighbors=[split_content.js, main()]
- "scripts_split_content_main": "main()" | kind=code-symbol | source=scripts/split_content.js:L37 | neighbors=[split_content.js, loadChapterData()]
- "scripts_validate_content_load_known_single_option": "load_known_single_option()" | kind=code-symbol | source=scripts/validate_content.py:L199 | neighbors=[validate_content.py, main()]
- "scripts_validate_content_validate_manifest_shape": "validate_manifest_shape()" | kind=code-symbol | source=scripts/validate_content.py:L57 | neighbors=[validate_content.py, main()]
- "scripts_validate_content_validate_pearl": "validate_pearl()" | kind=code-symbol | source=scripts/validate_content.py:L149 | neighbors=[validate_content.py, validate_bank_content()]
- "shared_admin_adminemails": "adminEmails()" | kind=code-symbol | source=supabase/functions/_shared/admin.ts:L48 | neighbors=[admin.ts, requireAdmin()]
- "src_install_prompt_busy": "busy()" | kind=code-symbol | source=src/install-prompt.js:L203 | neighbors=[install-prompt.js, autoShow()]
- "src_install_prompt_ensurehomescreenmeta": "ensureHomeScreenMeta()" | kind=code-symbol | source=src/install-prompt.js:L73 | neighbors=[install-prompt.js, show()]
- "src_install_prompt_hide": "hide()" | kind=code-symbol | source=src/install-prompt.js:L140 | neighbors=[install-prompt.js, build()]
- "src_install_prompt_set": "set()" | kind=code-symbol | source=src/install-prompt.js:L36 | neighbors=[install-prompt.js, store()]
- "src_install_prompt_snooze": "snooze()" | kind=code-symbol | source=src/install-prompt.js:L61 | neighbors=[install-prompt.js, build()]
- "src_render_state_renderloading": "renderLoading()" | kind=code-symbol | source=src/render-state.js:L39 | neighbors=[render-state.js, renderState()]
- "src_theme_current": "current()" | kind=code-symbol | source=src/theme.js:L23 | neighbors=[theme.js, next()]
- "src_theme_next": "next()" | kind=code-symbol | source=src/theme.js:L40 | neighbors=[theme.js, current()]
- "tests_bdls_reviewer_spec": "bdls-reviewer.spec.js" | kind=code-symbol | source=tests/bdls-reviewer.spec.js:L1 | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…]
- "tests_empact_reviewer_spec": "empact-reviewer.spec.js" | kind=code-symbol | source=tests/empact-reviewer.spec.js:L1 | neighbors=[2b1ffb7 Port BDLS and EMPACT course rev…, f008f88 Merge pull request #27 BDLS & E…]
- "tests_exam_review_a11y_spec": "exam-review-a11y.spec.js" | kind=code-symbol | source=tests/exam-review-a11y.spec.js:L1 | neighbors=[2ab1c09 Fix invisible Show Hint/confide…, 9b12c84 Merge pull request #20]
- "tests_init": "__init__.py" | kind=code-symbol | source=tests/__init__.py:L1 | neighbors=[67cb179 Add files via upload, 8f311cd Merge branch 'main' of https://…]
- "tests_last_visited_spec": "last-visited.spec.js" | kind=code-symbol | source=tests/last-visited.spec.js:L1 | neighbors=[1543337 Fix raw markup in Last Visited,…, 8c61be7 Merge pull request #22 raw mark…]
- "tests_med_index_xss_spec": "med-index-xss.spec.js" | kind=code-symbol | source=tests/med-index-xss.spec.js:L1 | neighbors=[817a4bf Merge pull request #23 Fixed: r…, 81d920a Fix reflected XSS in med-index.…]
- "tests_medical_reviewer_spec": "medical-reviewer.spec.js" | kind=code-symbol | source=tests/medical-reviewer.spec.js:L1 | neighbors=[3a000d0 Integrate Medical reviewer into…, 877d856 Medical-bdls-empact-pepp-review…]
- "tests_pepp_reviewer_spec": "pepp-reviewer.spec.js" | kind=code-symbol | source=tests/pepp-reviewer.spec.js:L1 | neighbors=[20ed56a Integrate PEPP reviewer into pl…, 877d856 Medical-bdls-empact-pepp-review…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-043.json

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
