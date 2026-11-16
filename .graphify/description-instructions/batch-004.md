# Node Description Batch 5 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@81f95d0a2e0242bc2d6a14ce8ba7d8f7b474bf48": "81f95d0 ⭐PR #60 Unified Course Design star ⭐" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 2a5f204 Add SmartCare Megacode cinemati…, 7dcb4bd Merge pull request #61 from Sol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ccd6185d17a3880815564cc103489a9609ee93e2": "ccd6185 fix(ui): shrink fixed buttons on mobile, add screen padding to prevent …" | kind=Commit | source=git | neighbors=[557325c fix(ui): add light theme CSS, h…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d01251f918b6992b204ae001307edda2c939de14": "d01251f Formulary group D (fluids, glucose, antidotes, obstetric) and overview …" | kind=Commit | source=git | neighbors=[6bb10e4 Formulary group D: fluids, gluc…, 8ac7ca0 Formulary group C: sedation, se…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e2bc409ab40b5eddb828dfef54c7fdad83cefcea": "e2bc409 fix: allow cdn.jsdelivr.net in CSP and make Chart.js load non-fatal" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff0d1a13bca921ba15aeeadffdaf550bc2c83fe8": "ff0d1a1 feat: add /api/health probe and API/deployment docs" | kind=Commit | source=git | neighbors=[4999b7f swot-its-compliance-GaiuJ, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "content_c6": "c6.js" | kind=code-symbol | source=content/c6.js:L1 | neighbors=[7543d58 Add illustrations to the chapte…, a497e1f Rewrite chapter 6 (Trauma Emerg…, a7f8828 Chapter 6 update : Trauma Emerg…, b40ee4a Add illustrations to the chapte…, e5cb445 Herniation signs: any one sign …, 59a9f95 toc: implement prehospital (EMT…] | lang=en
- "scripts_audio_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L282 | neighbors=[audio.py, app_sound(), foley_tap(), impact(), lp(), place()] | lang=en
- "scripts_split_content": "split_content.js" | kind=code-symbol | source=scripts/split_content.js:L1 | neighbors=[582a9d8 Chapter 3 rewrite  ✅, 662adfb Ship the Performance section fr…, 7208d8e Rewrite chapter 3 (Airway & Ven…, 829493a Merge Merged: pull request #13 …, CHAPTER_IDS, CONTENT_DIR] | lang=en
- "scripts_validate_content": "validate_content.py" | kind=code-symbol | source=scripts/validate_content.py:L1 | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, ef31570 Fix offline precache gap, add c…, load_json_lenient(), load_known_single_option(), main(), question_core_fields()] | lang=en
- "tests_mci_reviewer_spec": "mci-reviewer.spec.js" | kind=code-symbol | source=tests/mci-reviewer.spec.js:L1 | neighbors=[106f200 Add MCI exam page with final ex…, 22c0924 Add MCI (Mass Casualty Incident…, 2e4d5a6 MCI: Officer roles with two-row…, 6018c48 PR #57 MCI Exam 1, 66d3118 BDLS update ,ECG engine update ✅, 81f95d0 ⭐PR #60 Unified Course Design s…] | lang=en
- "vendor_chart_4_5_1_umd_min_calculatebarindexpixels": "_calculateBarIndexPixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis(), _getStackCount()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_buildorupdatecontrollers": ".buildOrUpdateControllers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, e(), .updateIndex(), ln(), .getController(), .getElement()] | lang=en
- "vendor_chart_4_5_1_umd_min_ua": "ua()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, beforeDatasetDraw(), beforeDatasetsDraw(), beforeDraw(), da(), fa()] | lang=en
- "vendor_supabase_js_2_110_0_connect": "connect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), _handleNodeJsRaceCondition(), isConnected(), isConnecting(), isDisconnecting()] | lang=en
- "vendor_supabase_js_2_110_0_l": "L()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _deletePasskey(), _listPasskeys(), registerPasskey()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0159986df1b3d8b150b9e9d8f1fc199963a5ccc0": "0159986 Chapter 5 rewrite: Medical Emergencies ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 78cc7e6 Rewrite chapter 2 (Patient Asse…, ed28729 Chapter 2 rewrite: Patient Asse…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0277cd528b810324f3641c4fe6e1c1d68d55411f": "0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aest…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0ac5f99358c3f93109576216ff93f6f2f30fba98": "0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS f…" | kind=Commit | source=git | neighbors=[0277cd5 feat(ui): redesign prometric pa…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0e6242c2c1d329897a7e19a444029cce13c3abf7": "0e6242c Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@17232c9a91c8616537acf15a117e26cb5afdba4a": "17232c9 Fix Ruff lint failure in Megacode promo scripts" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6663113 PR #63 Update ECG simulator, audio.py] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1bd0a15c3bb8cfb385aba8a57cc73cbb79e2274c": "1bd0a15 PR #38 medications-cleanup-xnuh0i" | kind=Commit | source=git | neighbors=[app.js, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 639f5a4 PR #39 medications-cleanup-xnuh…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@1eee11b7334ff1e088cf071c8f48f2ecb735ece1": "1eee11b create exam-2.html — redesigned exam page using CPG-2025 style" | kind=Commit | source=git | neighbors=[093fcc2 fix(ui): remove auto-advance, s…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@255019262de882fd08a4fb633618be21176437da": "2550192 PR #37 Medications update" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1bd0a15 PR #38 medications-cleanup-xnuh…, dd8f4c7 Bump Werkzeug to 3.1.9 for CVE-…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@266c2ed570387416999830d96487f11d2830d266": "266c2ed Add server.py and server.bat to .gitignore" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@26ac1b00eb98e145aa83b91cf1b197816c78b3ea": "26ac1b0 new index with pdf" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@28f8e2f6779bb201ccb4b92f7ee2449f1cd256fc": "28f8e2f docs: add Secure SDLC validation reports from security review" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@292c5bc7082a36b41cbcf4be4904cbacb9e098e4": "292c5bc Major Updates ✅❤️🔥" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@354c93e156c8d4542484d91a39703a494bfa6455": "354c93e fix: restore server.py to repo (CI needs it for tests and Bandit)" | kind=Commit | source=git | neighbors=[266c2ed Add server.py and server.bat to…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3d93108d2b7a6c57d72c49b002b0e0712e5f26dd": "3d93108 Delete server.py" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@437e8d45ff16c635ac295ebadb65f73b5c06cefb": "437e8d4 Merge pull request #66  ECG" | kind=Commit | source=git | neighbors=[0366711 ECG Fixed ✅ Crisp waveform ⭐, 2b928c2 ECG Simulator: downloadable rhy…, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@46e3cd18d996a13eac5c05f88d8664e9c2dc8f00": "46e3cd1 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@54bf4f28d0049fdbe037cbd81a7849021b48ecd9": "54bf4f2 Chapter 1 rewrite: Foundations of Care ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 1116a68 Chapter 8 rewrite: Environmenta…, fb463cf Rewrite chapter 8 (Environmenta…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@557325c525978b1ee3c395cdb41c34b2e9fa1000": "557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as s…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b49a0fb9fab9a3ad27becbe0764b8403a39f08b": "5b49a0f fix(id 669): replace rationale with detailed PALS/PEPP explanation for …" | kind=Commit | source=git | neighbors=[2f06b84 fix text contrast: bump text-se…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5dada8ede88ace10f37589dd1aef6e1a89def489": "5dada8e replace exams.html with exam.html; update all references" | kind=Commit | source=git | neighbors=[1eee11b create exam-2.html — redesigned…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5e168b53c4cd186e3cfe1f134e78712d695dc1f7": "5e168b5 Chapter 7 Update : Special Populations ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 54bf4f2 Chapter 1 rewrite: Foundations …, eb1ff62 Rewrite chapter 1 (Foundations …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@62386afea699c17e620dc8f7234f08257f2c825c": "62386af PR #51 Megacode 3" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, c8b8f6e PR #52 Improved UI/UX of Course…, cee8997 Courses page: opaque cards, pol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6dced57d06aaec2218e8c845bef0b6d7c097c2b5": "6dced57 chore(ci): remove claude/** branch trigger from CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6f6a46e6c0401f529d4fdfdf422293ee606a5f28": "6f6a46e Rewrite chapter 4 (Cardiovascular & Resuscitation) as guides" | kind=Commit | source=git | neighbors=[582a9d8 Chapter 3 rewrite  ✅, ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 2ac796c Pulmonary edema gate: CPAP only…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@700555c4601acf9c630d0bdaec8e78480d055b37": "700555c #49_2 acls-megacode-scenarios" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, main, worktree-pr85-supabase-deploy, 6ee3cd6 PR #50 acls-megacode-scenarios, cc9ac57 List ACLS Megacode on the Cours…] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-004.json

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
