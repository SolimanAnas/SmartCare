# Node Description Batch 5 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@255019262de882fd08a4fb633618be21176437da": "2550192 PR #37 Medications update" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 1bd0a15 PR #38 medications-cleanup-xnuh…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@2c020d470472d8cf602e296c02f7f390f9c89939": "2c020d4 Remove the Flask server; move account deletion to a Supabase Edge Funct…" | kind=Commit | source=git | neighbors=[index.ts, index.ts, index.ts, index.ts, ccr-b58d9c43-7az2tj, guide-images-best] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@437e8d45ff16c635ac295ebadb65f73b5c06cefb": "437e8d4 Merge pull request #66  ECG" | kind=Commit | source=git | neighbors=[0366711 ECG Fixed ✅ Crisp waveform ⭐, 2b928c2 ECG Simulator: downloadable rhy…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@54bf4f28d0049fdbe037cbd81a7849021b48ecd9": "54bf4f2 Chapter 1 rewrite: Foundations of Care ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 1116a68 Chapter 8 rewrite: Environmenta…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5bc6effd8407ed4c459a27b8f16ceb2644102d37": "5bc6eff Security review: Remove the Flask server 🛡️" | kind=Commit | source=git | neighbors=[2c020d4 Remove the Flask server; move a…, index.ts, index.ts, index.ts, index.ts, guide-images-best] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5e168b53c4cd186e3cfe1f134e78712d695dc1f7": "5e168b5 Chapter 7 Update : Special Populations ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 54bf4f2 Chapter 1 rewrite: Foundations …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5f461d469bfa19460cfb19eb755c827981c0a568": "5f461d4 feat(ui): mobile-friendly responsive layout, touch swipe navigation, mo…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@62386afea699c17e620dc8f7234f08257f2c825c": "62386af PR #51 Megacode 3" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, c8b8f6e PR #52 Improved UI/UX of Course…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6f6a46e6c0401f529d4fdfdf422293ee606a5f28": "6f6a46e Rewrite chapter 4 (Cardiovascular & Resuscitation) as guides" | kind=Commit | source=git | neighbors=[582a9d8 Chapter 3 rewrite  ✅, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@700555c4601acf9c630d0bdaec8e78480d055b37": "700555c #49_2 acls-megacode-scenarios" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 6ee3cd6 PR #50 acls-megacode-scenarios] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@70abbed3010f771cedec4f0af14bc8dfcf8e90db": "70abbed Merge pull request #9 from SolimanAnas/fix/ci-ruff-reports" | kind=Commit | source=git | neighbors=[28f8e2f docs: add Secure SDLC validatio…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7dfcee83bed9e6dd3d5168b247e4f01627e7da1b": "7dfcee8 Updated the exam engine ❤️✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8ac7ca0f3c856538cd265046c4962b786f691ccc": "8ac7ca0 Formulary group C: sedation, seizure, airway, pain & nausea drugs ✅" | kind=Commit | source=git | neighbors=[05afd15 Cap IV diazepam and midazolam s…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8bee5a7fde08e64a6e7b24ba5c1128f5f627b04d": "8bee5a7 Merge pull request #10 from SolimanAnas/claude/prometric-page-not-openi…" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@992b39336a8044fda9f948e9d23a75fd2a442501": "992b393 Drug Formulary group B: respiratory & allergy drugs ✅" | kind=Commit | source=git | neighbors=[5f4c3e6 Formulary group A: cardiac & re…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a7f8828c04f15180e4dcd979bb5380ef4325d412": "a7f8828 Chapter 6 update : Trauma Emergencies ✅" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 5e168b5 Chapter 7 Update : Special Popu…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@b5294ba6eec453e98d1323e4e57fd8f97b43c483": "b5294ba PR #41 Redesign formulary overview card; fix card titles never revealing" | kind=Commit | source=git | neighbors=[8389b95 Redesign formulary overview car…, 8fa52dc  PR #40 Redesign Medication Ind…, app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cae9224244ed50785b12091b7a642a9d56a702c1": "cae9224 Chapter 9 rewrite: Emergency Pharmacology ✅" | kind=Commit | source=git | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, 14bac52 Rewrite chapter 9 (Emergency Ph…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ccd6185d17a3880815564cc103489a9609ee93e2": "ccd6185 fix(ui): shrink fixed buttons on mobile, add screen padding to prevent …" | kind=Commit | source=git | neighbors=[557325c fix(ui): add light theme CSS, h…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@dfc25ad82adfbf65cff63cdec1bed0b0a862419f": "dfc25ad Merge pull request #83 from Hypertonic saline: separate hyponatraemic s…" | kind=Commit | source=git | neighbors=[500f1a7 Hypertonic saline: dose for mod…, d01251f Formulary group D (fluids, gluc…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ed28729ef8c6d7ca7b5f72131616750faddd8648": "ed28729 Chapter 2 rewrite: Patient Assessment ✅" | kind=Commit | source=git | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 7d4e283 Falling consciousness in respir…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "content_c10": "c10.js" | kind=code-symbol | source=content/c10.js:L1 | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, 1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, ce11d74 Rewrite chapter 10 (Clinical Pr…] | lang=en
- "content_c3": "c3.js" | kind=code-symbol | source=content/c3.js:L1 | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 582a9d8 Chapter 3 rewrite  ✅, 6bcfae8 Infant choking: chest thrusts w…, 7208d8e Rewrite chapter 3 (Airway & Ven…, 7543d58 Add illustrations to the chapte…] | lang=en
- "content_c5": "c5.js" | kind=code-symbol | source=content/c5.js:L1 | neighbors=[0159986 Chapter 5 rewrite: Medical Emer…, 1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 35ac666 Rewrite chapter 5 (Medical Emer…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…] | lang=en
- "content_c9": "c9.js" | kind=code-symbol | source=content/c9.js:L1 | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, 14bac52 Rewrite chapter 9 (Emergency Ph…, 1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…] | lang=en
- "prometric_exam_examengine_init": ".init()" | kind=code-symbol | source=src/prometric/exam.js:L101 | neighbors=[ExamEngine, .constructor(), .applySettingsToUI(), .bindEvents(), .initTheme(), .loadDatabase()] | lang=en
- "scripts_audio_main": "main()" | kind=code-symbol | source=promo/megacode/scripts/audio.py:L282 | neighbors=[audio.py, app_sound(), foley_tap(), impact(), lp(), place()] | lang=en
- "scripts_split_content": "split_content.js" | kind=code-symbol | source=scripts/split_content.js:L1 | neighbors=[582a9d8 Chapter 3 rewrite  ✅, 662adfb Ship the Performance section fr…, 7208d8e Rewrite chapter 3 (Airway & Ven…, 829493a Merge Merged: pull request #13 …, CHAPTER_IDS, CONTENT_DIR] | lang=en
- "scripts_validate_content": "validate_content.py" | kind=code-symbol | source=scripts/validate_content.py:L1 | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, ef31570 Fix offline precache gap, add c…, load_json_lenient(), load_known_single_option(), main(), question_core_fields()] | lang=en
- "vendor_chart_4_5_1_umd_min_calculatebarindexpixels": "_calculateBarIndexPixels()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, a(), _getAxis(), _getAxisCount(), getFirstScaleIdForIndexAxis(), _getStackCount()] | lang=en
- "vendor_chart_4_5_1_umd_min_tn_buildorupdatecontrollers": ".buildOrUpdateControllers()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[tn, e(), .updateIndex(), ln(), .getController(), .getElement()] | lang=en
- "vendor_chart_4_5_1_umd_min_ua": "ua()" | kind=code-symbol | source=vendor/chart-4.5.1.umd.min.js:L13 | neighbors=[chart-4.5.1.umd.min.js, beforeDatasetDraw(), beforeDatasetsDraw(), beforeDraw(), da(), fa()] | lang=en
- "vendor_supabase_js_2_110_0_connect": "connect()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L12 | neighbors=[supabase-js-2.110.0.mjs, connectWithFallback(), _handleNodeJsRaceCondition(), isConnected(), isConnecting(), isDisconnecting()] | lang=en
- "vendor_supabase_js_2_110_0_l": "L()" | kind=code-symbol | source=vendor/supabase-js-2.110.0.mjs:L18 | neighbors=[supabase-js-2.110.0.mjs, _adminDeletePasskey(), _adminListPasskeys(), _deletePasskey(), _listPasskeys(), registerPasskey()] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0277cd528b810324f3641c4fe6e1c1d68d55411f": "0277cd5 feat(ui): redesign prometric page with Vital Signs medical-monitor aest…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0673752ad75866bec4eec8512f863e809ab73873": "0673752 PR #67 Homepage Redesigned ✨" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 582a9d8 Chapter 3 rewrite  ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0ac5f99358c3f93109576216ff93f6f2f30fba98": "0ac5f99 feat(ui): cherry-pick loading overlay, home button, kbd hints, and JS f…" | kind=Commit | source=git | neighbors=[0277cd5 feat(ui): redesign prometric pa…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@0e6242c2c1d329897a7e19a444029cce13c3abf7": "0e6242c Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@106f20048776f64596d2902d09a49e2e52eaf92c": "106f200 Add MCI exam page with final exam and generated practice bank" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, e98b15c Merge PR #36 MCI Course] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1d86134cb4354c77c56508110db1b6214e8a63d7": "1d86134 Secure SDLC Phase 0: fix critical access-control, secrets & CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en

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
