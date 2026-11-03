# Node Description Batch 29 of 62

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

- "commit:repo:github.com/SolimanAnas/SmartCare@04af7e8a04b95def18cba3521ef83cb3d46d09bf": "04af7e8 fix: correct UTF-8 mojibake in index.html (arrows, dashes, ellipsis, sy…" | kind=Commit | source=git | neighbors=[main, 7f26548 fix: UTF-8 mojibake across exam…, a4df22b fix: resolve CI lint failure an…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@074617fb80abc2dfd95727de3b786f490098ea7e": "074617f feat: update chapter files with SEO and accessibility improvements" | kind=Commit | source=git | neighbors=[main, c6c0a5c chore: update core app - servic…, d641fa0 feat: improve SEO, Open Graph m…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@18fb7dc6b575d168d26a094106448fc9450c7ce1": "18fb7dc Added ├── .well-known/" | kind=Commit | source=git | neighbors=[main, d546791 feat: add screenshots, orientat…, 67cd1eb fix: update contact email and a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@1ca0f6508d8af6649a9677b9f8c06b5735eced0d": "1ca0f65 Ship the High priority list from the mid-cycle audit" | kind=Commit | source=git | neighbors=[main, d7008b7 Add the actual content changes …, 94235c6 Ship the critical hardening lis…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@213cb39f0d6e9525ba772b3c13089eed29d72086": "213cb39 NEW CHAPTERS ADDED V 4.0.1" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, edb1e1d Version 4.0.1, 98be90d Add files via upload] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@24d03450954f61f2a9c9ddc507ddcac3342d7716": "24d0345 fix: correct SUPABASE_URL typo round 2 (missing r in htrtr)" | kind=Commit | source=git | neighbors=[main, 7c988c0 chore: commit graphify auto-upd…, 4561a63 fix: correct SUPABASE_URL typo …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@396b4ed5ef40675d7e883c83cf1713803df56808": "396b4ed fix: remove all DCAS branding, fix license ISC→MIT, update package.json…" | kind=Commit | source=git | neighbors=[main, ccbb5d2 license: switch from MIT to All…, 954bb06 docs: rewrite README with profe…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@39cc6bba95ea026c09c42c0f51d4637430307b0a": "39cc6bb fix: remove extra '})' causing syntax error in login.html" | kind=Commit | source=git | neighbors=[0465774 feat: Google Identity Services …, main, bae7406 chore: graphify auto-update, EC…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@40d423a44d417ace48a649708990f8a719c1eb22": "40d423a Remove unused admin/login/signup pages" | kind=Commit | source=git | neighbors=[main, 5b988aa Create .nojekyll, fefe4cd chore: bump SW to v2.2 for init…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@411adfde74e797e1ca7a7b580827cd87c17075b6": "411adfd update: refresh PWA icons from updated source image" | kind=Commit | source=git | neighbors=[0245fab update: refresh PWA icons and f…, main, 86a3d5c update PWA icons] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4389d53bda9ae06f02d07ca5f034c22dff5a839d": "4389d53 Improve drawer toggle panel identification on index.html" | kind=Commit | source=git | neighbors=[main, b1f4385 Bump service worker cache to v2…, 90c10bb Make hero greeting on index.htm…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@4561a63df1296ad06c0f1a7ab9a7034c72d30cd1": "4561a63 fix: correct SUPABASE_URL typo (zltfrrudihtrtxutvdqq.supabase.co)" | kind=Commit | source=git | neighbors=[main, 24d0345 fix: correct SUPABASE_URL typo …, aa81a0c fix: set SUPABASE_URL in supaba…] | lang=pt
- "commit:repo:github.com/SolimanAnas/SmartCare@5b68bae00b78a61ac933c7fb7c18299e78178303": "5b68bae docs: add comprehensive v2.0 upgrade roadmap from full repository audit" | kind=Commit | source=git | neighbors=[main, eff053b Ship all six Critical Fixes fro…, acb0328 About ✅ Merge pull request #11 …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5b988aa93af5c5e028873d87c0cbd12b0379784f": "5b988aa Create .nojekyll" | kind=Commit | source=git | neighbors=[40d423a Remove unused admin/login/signu…, main, 1a56d75 feat: graphify rebuild with des…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@5dddc2fc156b7d7c32e9a543f909731384dafe25": "5dddc2f feat: update ECG-study.html footer to match index.html branding" | kind=Commit | source=git | neighbors=[main, 5d23c19 fix: improve heading and index-…, bae7406 chore: graphify auto-update, EC…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@60c17820d11ca70af36e0dffe44414c34a7b9672": "60c1782 chore: stop tracking TOC/ directory (now gitignored)" | kind=Commit | source=git | neighbors=[main, de0dcb2 feat: Add Open Graph metadata, …, 9b0bbbb content: deploy chapters 6-10 w…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@67cd1ebdd38c3b3a718d12f11d183faaa761dfd6": "67cd1eb fix: update contact email and all URLs in privacy policy" | kind=Commit | source=git | neighbors=[main, 18fb7dc Added ├── .well-known/, d5777e9 feat: comprehensive privacy pol…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@6c55b58a08f87310c2157a2ecec18a123b5f5594": "6c55b58 fix: sync section-header & continue-label colors with index.html sectio…" | kind=Commit | source=git | neighbors=[main, 0245fab update: refresh PWA icons and f…, ff409d5 fix: match section-header style…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7c988c004c1065d2ba9e8065b9e0cdd475988565": "7c988c0 chore: commit graphify auto-updates, 404.html /SmartCare/ paths, supaba…" | kind=Commit | source=git | neighbors=[24d0345 fix: correct SUPABASE_URL typo …, main, 0465774 feat: Google Identity Services …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@7d6035c5436e22994a3860684af7677dafcb21a8": "7d6035c Regenerate all PWA/app icons from icon3.png - 16 PNGs + favicon.ico" | kind=Commit | source=git | neighbors=[main, d6f12c6 Add course documentation: BDLS,…, fdbf310 Fix CI: regenerate precache-man…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8541abefec7ae7fa9d781e820ae6356b7c77b72b": "8541abe chore: Change index page title from landing page to clinical learning p…" | kind=Commit | source=git | neighbors=[main, d00c567 feat: Remove Scope of Practice …, 92652ca feat: Update search placeholder…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@8cbf9e5a66c9cfba634ae3b463e02d6f33d0275e": "8cbf9e5 Add attribution rule to repository assistant instructions" | kind=Commit | source=git | neighbors=[main, 17232c9 Fix Ruff lint failure in Megaco…, d93e86e ECG Simulator: rebuild engine, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@90c10bb9124d5ae485f96aeae6b5c0b137683cdd": "90c10bb Make hero greeting on index.html sign-in aware" | kind=Commit | source=git | neighbors=[8a6ee0b Fix invisible table borders and…, main, 4389d53 Improve drawer toggle panel ide…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@94cae4048dc29d7a89a13a52378f77dc8ac59cb6": "94cae40 Courses page: stop filter-chip flicker, slimmer fixed-height header" | kind=Commit | source=git | neighbors=[6018c48 PR #57 MCI Exam 1, main, 8fedbbf Regenerate precache-manifest.js…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@954bb064a268334230a9296e410fd5ab4a9ad516": "954bb06 docs: rewrite README with professional structure, course catalog, archi…" | kind=Commit | source=git | neighbors=[877d856 Medical-bdls-empact-pepp-review…, main, 396b4ed fix: remove all DCAS branding, …] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@98be90d66a0dcd109768dee26ba7727d0e6608ab": "98be90d Add files via upload" | kind=Commit | source=git | neighbors=[feat/lucide-svg-migration, 213cb39 NEW CHAPTERS ADDED V 4.0.1, c-index.js] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa3705ce2c482dd0e6d4138b26ebca7007daa232": "aa3705c Add mid-cycle v2.0 audit: verify roadmap status against code, re-priori…" | kind=Commit | source=git | neighbors=[83a1ea8 Ship the Offline & PWA section …, main, 94235c6 Ship the critical hardening lis…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@aa81a0c05ca6c23af3be35bcd63b1bbbe66aca54": "aa81a0c fix: set SUPABASE_URL in supabase-config.js" | kind=Commit | source=git | neighbors=[main, 4561a63 fix: correct SUPABASE_URL typo …, b0748c1 feat: Supabase integration] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@c9276aedf9c658368f229db910044abccc835060": "c9276ae chore: update graphify knowledge graph" | kind=Commit | source=git | neighbors=[1fc629e fix(app.js): handle DOMContentL…, main, 1a00316 feat(itls): restructure itls co…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ccbb5d2d97f41a4247bc568437690533412774b7": "ccbb5d2 license: switch from MIT to All Rights Reserved (proprietary)" | kind=Commit | source=git | neighbors=[396b4ed fix: remove all DCAS branding, …, main, 82a7b90 fix: rebuild precache-manifest.…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d546791e464c038a52e24f9309be76c8b998d88f": "d546791 feat: add screenshots, orientation, and safe categories to manifest" | kind=Commit | source=git | neighbors=[18fb7dc Added ├── .well-known/, main, fefe4cd chore: bump SW to v2.2 for init…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d5777e9b8a0fe40413ec7e62d9487650a17bb5f7": "d5777e9 feat: comprehensive privacy policy with premium UI/UX design" | kind=Commit | source=git | neighbors=[829a86d update: refresh PWA icons from …, main, 67cd1eb fix: update contact email and a…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d641fa0ed1193b3e8493f17ea46f056c534b259f": "d641fa0 feat: improve SEO, Open Graph metadata, and accessibility across all pa…" | kind=Commit | source=git | neighbors=[1a00316 feat(itls): restructure itls co…, main, 074617f feat: update chapter files with…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@d7918ff93f973a6649510d7bf4ebeac6b20d0e70": "d7918ff fix: commit package-lock.json — CI's npm ci can't run without it" | kind=Commit | source=git | neighbors=[d7008b7 Add the actual content changes …, main, 53ec4c1 Merge pull request #16 ✅] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@dd8f4c77fbd3de36596880d1c75f8e37f9089e3b": "dd8f4c7 Bump Werkzeug to 3.1.9 for CVE-2026-102598" | kind=Commit | source=git | neighbors=[2550192 PR #37 Medications update, main, 773db00 Update remaining formulary coun…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@e9a2970ac4d468aa16c5f6977b0d134651b8fd56": "e9a2970 Add agentic implementation plans for ACLS and PALS reviewers" | kind=Commit | source=git | neighbors=[82ff814 Add Playwright smoke test for B…, main, 5157b39 Fix horizontal overflow on phon…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@f3382e1e94cfa0b78d93256a3c9dbd64dc054bfa": "f3382e1 Add agentic implementation plan for BLS course reviewer (docs/BLS.md)" | kind=Commit | source=git | neighbors=[817a4bf Merge pull request #23 Fixed: r…, main, a75c415 Scaffold BLS reviewer (courses/…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@feedaf7c27886f8816012f5856135349bf1a1366": "feedaf7 Add fresh production-readiness audit (July 2026)" | kind=Commit | source=git | neighbors=[c9e85ef Deduplicate the 8 standalone ex…, main, ef31570 Fix offline precache gap, add c…] | lang=en
- "commit:repo:github.com/SolimanAnas/SmartCare@ff409d5260a1de9557f95c0878f5781ccf2651b8": "ff409d5 fix: match section-header style to index.html section-label" | kind=Commit | source=git | neighbors=[7f26548 fix: UTF-8 mojibake across exam…, main, 6c55b58 fix: sync section-header & cont…] | lang=en
- "cpg_guide_figures": "figures()" | kind=code-symbol | source=cpg-guide.js:L69 | neighbors=[cpg-guide.js, section(), step()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Apps\SmartCare\.graphify\description-instructions\batch-028.json

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
