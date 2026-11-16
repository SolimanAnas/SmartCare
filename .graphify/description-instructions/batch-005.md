# Node Description Batch 6 of 63

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

- "commit:repo:github.com/SolimanAnas/SmartCare@1eee11b7334ff1e088cf071c8f48f2ecb735ece1": "1eee11b create exam-2.html — redesigned exam page using CPG-2025 style" | kind=Commit | source=git | neighbors=[093fcc2 fix(ui): remove auto-advance, s…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@20ed56a79d717b7e6d4c98d22a80a4a52f99878c": "20ed56a Integrate PEPP reviewer into platform, add Playwright coverage" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 79e6410 Scaffold Medical reviewer (cour…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@26ac1b00eb98e145aa83b91cf1b197816c78b3ea": "26ac1b0 new index with pdf" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@28f8e2f6779bb201ccb4b92f7ee2449f1cd256fc": "28f8e2f docs: add Secure SDLC validation reports from security review" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@292c5bc7082a36b41cbcf4be4904cbacb9e098e4": "292c5bc Major Updates ✅❤️🔥" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@3a000d0e58f2c386151985770f31fb45caff9822": "3a000d0 Integrate Medical reviewer into platform, add Playwright coverage" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 877d856 Medical-bdls-empact-pepp-review…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@46e3cd18d996a13eac5c05f88d8664e9c2dc8f00": "46e3cd1 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@557325c525978b1ee3c395cdb41c34b2e9fa1000": "557325c fix(ui): add light theme CSS, hide duplicate topic badge when same as s…" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b49a0fb9fab9a3ad27becbe0764b8403a39f08b": "5b49a0f fix(id 669): replace rationale with detailed PALS/PEPP explanation for …" | kind=Commit | source=git | neighbors=[2f06b84 fix text contrast: bump text-se…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5dada8ede88ace10f37589dd1aef6e1a89def489": "5dada8e replace exams.html with exam.html; update all references" | kind=Commit | source=git | neighbors=[1eee11b create exam-2.html — redesigned…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6018c486290643178ef98d49670eebe488de10df": "6018c48 PR #57 MCI Exam 1" | kind=Commit | source=git | neighbors=[5cfcb95 PR #55 fix Home ring, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6026b7a9c97039ae6f109e0d6de20c9543a47f7c": "6026b7a Redesign the home page: courses and exams first, quick tools, chapter g…" | kind=Commit | source=git | neighbors=[437e8d4 Merge pull request #66  ECG, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@639f5a4ef4f52c1fdca5c69417fcc52802929827": "639f5a4 PR #39 medications-cleanup-xnuh0i" | kind=Commit | source=git | neighbors=[1bd0a15 PR #38 medications-cleanup-xnuh…, app.js, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@67cb179681e80e87af69aaf2f62b470867df6171": "67cb179 Add files via upload" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6dced57d06aaec2218e8c845bef0b6d7c097c2b5": "6dced57 chore(ci): remove claude/** branch trigger from CI" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c821aed82020dcd71e48c31e7068945a05c8c8b": "7c821ae Merge pull request #14 Admin dashboard ✅" | kind=Commit | source=git | neighbors=[index.ts, index.ts, index.ts, guide-images, worktree-pr85-supabase-deploy, d1b235f Merge pull request #15 Offline …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@80805769d56ab15f1b5de308cf5744af5ab6ef81": "8080576 PR #30, Redesign drug monograph pages and wire the formulary into Chapt…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, f73818b Adding respiratory patterns] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@817a4bf03d2a73456df2cdecc65ce024ca5a18bc": "817a4bf Merge pull request #23 Fixed: reflected XSS" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 154f42d Merge pull request #25 BLS revi…, f3382e1 Add agentic implementation plan…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@828970b9ca92bcb318fa4e3d08d51e1ebf900909": "828970b Prometric Question Bank Updated ✅" | kind=Commit | source=git | neighbors=[3cde249 Improved the prometric exam pag…, main, 260450d Prometric question 721: protect…, c84b797 Question Bank Updated ✅✅, precache-manifest.js, exam.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8bcf3b43612588c4702a142f1ffdedb292352304": "8bcf3b4 updated the index with drug formulary 💊✅" | kind=Commit | source=git | neighbors=[dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1, feat/lucide-svg-migration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@99f095bb1bd3a484b8ea01fe604e4134e977e584": "99f095b fix: resolve mixed SVG quote mismatches in 3 content JS files" | kind=Commit | source=git | neighbors=[39ba202 fix: restore encoding and apply…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@9beafed833955099764549ba0194caf10a351273": "9beafed Add files via upload" | kind=Commit | source=git | neighbors=[0e6242c Add files via upload, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a831ff4d5ac4125bde634c450e31bcb05e7e9c52": "a831ff4 Merge pull request #8 from SolimanAnas/ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@a8c0f4070c0c42ce99cfdc01a9837463ee193856": "a8c0f40 PR #59 MCI UI update" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy, 2e4d5a6 MCI: Officer roles with two-row…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@aed54cba6f6b669811fb513fa2e3bf070542dc1c": "aed54cb PR #48 acls-megacode-scenarios" | kind=Commit | source=git | neighbors=[6a16b91 Add ACLS Megacode simulator wit…, 7b23e68 PR #47 Update Question bank, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@b2fa6465c0c79fa2a654cbef90b1ff4b7858db5e": "b2fa646 Formulary group A: cardiac and resuscitation drugs as guides" | kind=Commit | source=git | neighbors=[123b1c0 Chapter 10 rewrite: Clinical Pr…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bb5130804dd42ccbe4464b66778492692e8e1664": "bb51308 Merge pull request #19  Exam themes fix ✅" | kind=Commit | source=git | neighbors=[3c15b4d V2 ⭐ : Question Review, All Que…, 5d2d46f Fix WCAG AA contrast failure in…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd49bc7e641b6005687f299826864a5a6d5d1578": "bd49bc7 feat: shuffle pool, prioritize unseen questions, show available count" | kind=Commit | source=git | neighbors=[a6cda1e fix(ui): hide kbd-hint on mobil…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@bd7b1a92049634d6568c39d6c949ed847ca7c5a9": "bd7b1a9 Completing ACLS Course Reviewer" | kind=Commit | source=git | neighbors=[2e859ad Adding PALS Course, build.py, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@c5d90aabbe122211d0a696b25fd99efc6f42c0ab": "c5d90aa Updated the exam engine" | kind=Commit | source=git | neighbors=[7e5c153 Updated the exam engine ✅, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c72292fa1ec0759c13f3423902a4493d87a9f0bf": "c72292f Merge branch 'main' into ports/health-and-docs" | kind=Commit | source=git | neighbors=[6dced57 chore(ci): remove claude/** bra…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c8b8f6e5cd3be8c45bfd0b2c38384fac2098eba2": "c8b8f6e PR #52 Improved UI/UX of Courses page" | kind=Commit | source=git | neighbors=[62386af PR #51 Megacode 3, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@cc66485854a2a64618c79eec19ce634274d37b81": "cc66485 Update sw.js" | kind=Commit | source=git | neighbors=[959f4cd Create courses.html 🚑, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ded2017d33b0dca77eb14fbca9f14b016b0c6c8f": "ded2017 Update sw.js" | kind=Commit | source=git | neighbors=[cc66485 Update sw.js, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e2bc409ab40b5eddb828dfef54c7fdad83cefcea": "e2bc409 fix: allow cdn.jsdelivr.net in CSP and make Chart.js load non-fatal" | kind=Commit | source=git | neighbors=[70abbed Merge pull request #9 from Soli…, dependabot/github_actions/actions/check…, dependabot/github_actions/actions/setup…, dependabot/github_actions/actions/setup…, dependabot/pip/google-auth-2.55.1, dependabot/pip/pytest-9.1.1] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ef31570c6f99e0b82b1cfbacb427c699ef60b82e": "ef31570 Fix offline precache gap, add content governance + validation, add clin…" | kind=Commit | source=git | neighbors=[ccr-b58d9c43-7az2tj, guide-images, guide-images-best, worktree-pr85-supabase-deploy, 503d0e1 Fix 36 single-option questions …, precache-manifest.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff03b3dffddee4bc2eea6bc861d0bc57d10c2bc4": "ff03b3d Formulary group B: respiratory and allergy drugs as guides" | kind=Commit | source=git | neighbors=[5f4c3e6 Formulary group A: cardiac & re…, ccr-b58d9c43-7az2tj, guide-images, guide-images-best, main, worktree-pr85-supabase-deploy] | lang=en
- "content_c7": "c7.js" | kind=code-symbol | source=content/c7.js:L1 | neighbors=[1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 5e168b5 Chapter 7 Update : Special Popu…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, d6c133e Rewrite chapter 7 (Special Popu…] | lang=en
- "content_c8": "c8.js" | kind=code-symbol | source=content/c8.js:L1 | neighbors=[1116a68 Chapter 8 rewrite: Environmenta…, 1cf1fb1 Merge pull request #99 from Sol…, 294f48b Keep only the guide illustratio…, 7543d58 Add illustrations to the chapte…, b40ee4a Add illustrations to the chapte…, fb463cf Rewrite chapter 8 (Environmenta…] | lang=en
- "prometric_exam_examengine_showscreen": ".showScreen()" | kind=code-symbol | source=src/prometric/exam.js:L1540 | neighbors=[ExamEngine, .beginSession(), .endExam(), .goToSetup(), .init(), .showAnalytics()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-005.json

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
