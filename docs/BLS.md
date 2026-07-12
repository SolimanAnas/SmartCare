# BLS Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent (e.g. Claude Sonnet) that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **BLS (Basic Life Support) Course Reviewer** at `courses/bls/`, modeled 1:1 on the existing **ITLS reviewer** at `courses/itls/`, with all clinical content aligned to the **latest AHA Guidelines for CPR and ECC (2025 Guidelines, October 2025, plus the 2020 baseline and 2023/2024 focused updates they supersede/absorb)**.
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration (courses list, precache, sitemap), all validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/itls/` | The reference implementation you are cloning. | Copy its architecture exactly. |
| `courses/itls/README.md` | Explains the ITLS reviewer's file layout, schemas, ID conventions, build. | Your `courses/bls/README.md` mirrors this. |
| `courses/itls/build.py` | Bundles `data/itls/**` JSON → `data/bundle.js` (`window.ITLS_DATA`), validates JSON, unique IDs, chapter cross-refs, prints coverage table. | Adapt to `data/bls/**` → `window.BLS_DATA`. |
| `courses/itls/index.html` | The single-file reviewer app: chapter sidebar with search, Summary / Flashcards / Quiz / Scenarios tabs, flip-cards, scored quizzes, `localStorage` progress. Loads `data/bundle.js`, falls back to fetching per-chapter JSON. | Adapt branding, data key, storage keys, colors. |
| `courses/itls/data/itls/manifest.json` | Course + chapter index (id, title, section, difficulty…). | Template for `manifest.json` of BLS. |
| `courses/itls/data/itls/{chapters,flashcards,quizzes,scenarios,algorithms,tables}/cNN.json` | Per-chapter canonical content. | Schemas are identical for BLS (section 4). |
| `src/BLS/bls.json` (284 exam MCQs), `src/BLS/bls-post-test.json` | Existing BLS **exam question bank** used by `pages/bls.html`. | Do **not** modify or move. The reviewer is a separate product; optionally link to `pages/bls.html` from the reviewer README/UI as "exam practice". |
| `pages/bls.html` | Existing BLS exam page. | Leave as-is. |
| `data/courses.json` | Homepage/app course registry (`bls` entry currently → `bls.html`). | Add a **new** `bls-reviewer` entry (section 7). |
| `pages/courses.html` | Courses catalog page; ITLS card registered around line ~1489 and a review button around line ~1754. | Add the BLS reviewer card the same way. |
| `scripts/build_precache.py` (lines ~38–39) | PWA precache list includes `courses/itls/index.html` + `courses/itls/data/bundle.js`. | Add the BLS equivalents, then regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (line ~17, `SCAN_DIRS`) | Includes `courses/itls`. | Add `courses/bls`, regenerate `sitemap.xml`. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules — notably: run `graphify update .` after modifying code. | Obey. |

**Rule of thumb throughout: when in doubt, do exactly what ITLS does.** The ITLS reviewer is the approved UX and data contract; BLS is a re-skin with new content.

---

## 1. Product definition

A **BLS Provider course reviewer** for EMTs, nurses, nursing students, paramedics, and healthcare providers preparing for the **AHA BLS Provider** course/exam. Self-contained, offline-capable, pure data + one HTML file.

Per chapter it offers (same six content types as ITLS):

1. **Summary** — concise original-wording study notes with learning objectives, clinical pearls, red flags, common mistakes, memory aids, decision trees.
2. **Flashcards** — Q/A cards with categories.
3. **Quiz** — AHA-BLS-exam-style MCQs with rationale + difficulty.
4. **Scenarios** — realistic case vignettes with vitals, one best answer, explanation, clinical pearl.
5. **Algorithms** — structured stepwise clinical algorithms (BLS is algorithm-heavy; every chapter that has an official AHA algorithm gets one).
6. **Tables** — structured comparison tables (adult vs child vs infant is the signature BLS table).

---

## 2. Clinical source of truth — AHA guidelines (CRITICAL)

All clinical content must reflect the **2025 American Heart Association Guidelines for CPR and Emergency Cardiovascular Care** (published in *Circulation*, October 2025 — the first full rewrite since 2020, incorporating the 2023 opioid/focused updates and the 2024 drowning-focused update).

### 2.1 Verification protocol for the implementing agent

- Before writing content, **verify guideline specifics with web research** (cpr.heart.org, AHA/ILCOR publications in *Circulation*, AHA 2025 Guidelines highlights PDF). Do not rely on memory for anything marked ⚠️ below.
- Facts in §2.2 are long-stable and may be used directly. Items in §2.3 changed (or may have changed) in 2024–2025 and **must be verified before authoring**.
- Every chapter JSON gets a `references[]` entry naming the guideline section relied on (e.g. `"AHA 2025 Guidelines for CPR and ECC — Adult Basic Life Support"`). No verbatim copying from AHA materials: **all wording must be original** (same policy as ITLS: "rewritten in original summary form").
- Add the standard disclaimer (README + app footer): educational reviewer, not a substitute for an official AHA course, certification card, or local protocols.

### 2.2 Stable core numbers (safe to use, still sanity-check)

- **Adult CPR:** rate 100–120/min; depth ≥ 2 in (5 cm) and ≤ 2.4 in (6 cm); full chest recoil; minimize interruptions (< 10 s); chest compression fraction target ≥ 60 % (ideally > 80 %); ratio 30:2 without an advanced airway; with an advanced airway → continuous compressions + 1 breath every 6 s.
- **Child (1 yr–puberty):** depth ≥ ⅓ AP chest diameter (~2 in / 5 cm); 30:2 single rescuer, **15:2 with 2+ rescuers**.
- **Infant (< 1 yr):** depth ≥ ⅓ AP diameter (~1.5 in / 4 cm); 30:2 single / 15:2 multi; two-thumb–encircling-hands technique for 2-rescuer CPR (⚠️ verify 2025 stance on preferring two-thumbs even for lone rescuers).
- **Pulse check:** ≤ 10 s; carotid (adult/child), brachial (infant); if no pulse or unsure → compressions.
- **Rescue breathing (pulse present, not breathing normally):** adult 1 breath every 6 s; infant/child 1 breath every 2–3 s (20–30/min).
- **Breaths:** each over ~1 s, visible chest rise, avoid over-ventilation.
- **AED:** attach and use as soon as available; resume compressions immediately after shock; pediatric dose-attenuator pads for < 8 yr; for infants, manual defibrillator preferred → dose attenuator → adult pads (anteroposterior) as last resort; standard pad precautions (wet chest, patches, pacemakers, hairy chest).
- **Chains of Survival:** distinct IHCA vs OHCA adult chains and pediatric chains, each **6 links** (recovery link added in 2020 — ⚠️ confirm 2025 wording/order).
- **Opioid-associated emergency:** suspected opioid poisoning with pulse but abnormal breathing → rescue breathing + naloxone; in arrest → high-quality CPR first, naloxone as adjunct.
- **Infant choking:** cycles of 5 back slaps + 5 chest thrusts; unresponsive → start CPR, look in mouth before breaths; no blind finger sweeps.

### 2.3 ⚠️ Items that changed / may have changed in the 2024–2025 cycle — VERIFY EACH

1. **Adult/child choking sequence** — 2025 guidance (per ILCOR 2024 CoSTR) favors **alternating 5 back blows/slaps with 5 abdominal thrusts** for responsive adults/children (chest thrusts for pregnant/obese). Verify the exact 2025 AHA recommendation and mirror it.
2. **Drowning** (2024 focused update, carried into 2025): ventilation-first emphasis — rescue breaths ASAP (even in-water by trained rescuers), CPR **with breaths** (A-B-C style) rather than compression-only; naloxone/AED nuances. Verify.
3. **Recovery position** wording and post-ROSC lay-rescuer actions.
4. **Lay-rescuer compression-only vs conventional CPR** framing in 2025 (dispatcher-assisted CPR language).
5. **Infant single-rescuer compression technique** (two fingers vs two thumbs) — see §2.2.
6. Any renamed/merged algorithm boxes in the 2025 Adult BLS and Pediatric BLS algorithms (single-rescuer vs 2+ rescuer variants).
7. Chain-of-Survival graphics/link names in 2025.

Record what you verified (source + date) in `courses/bls/README.md` under a "Guideline provenance" heading.

---

## 3. Course structure — `manifest.json`

Create `courses/bls/data/bls/manifest.json` following the ITLS manifest schema exactly. Proposed content:

```json
{
  "id": "bls",
  "title": "BLS — Basic Life Support",
  "subtitle": "The Ultimate Provider Course Reviewer",
  "version": "1.0.0",
  "edition": "Based on the AHA 2025 Guidelines for CPR and ECC",
  "description": "A comprehensive, self-contained study reviewer for Basic Life Support. Each chapter includes a concise summary, clinical pearls, red flags, common mistakes, memory aids, decision trees, high-yield flashcards, AHA-style quiz questions, and realistic scenarios. Designed for EMTs, nurses, nursing students, paramedics, and all healthcare providers preparing for BLS Provider certification.",
  "icon": "heart-pulse",
  "color": "#c8102e",
  "accentColor": "#1f6feb",
  "estimatedHours": 12,
  "difficulty": "Beginner to Intermediate",
  "certification": "AHA BLS Provider",
  "examLink": "https://cpr.heart.org/",
  "audience": ["EMT", "AEMT", "Paramedic", "Nurse", "Nursing Student", "Physician", "Healthcare Provider"],
  "prerequisites": ["None — BLS is the entry-level resuscitation course"],
  "contentTypes": ["summary", "flashcards", "quizzes", "scenarios", "algorithms", "tables"],
  "chapters": [ ...see table below... ]
}
```

### Chapter plan (12 chapters, `c01`–`c12`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | Chain of Survival & Systems of Care | Foundations | Beginner |
| c02 | 2 | Scene Safety, Assessment & Recognition of Cardiac Arrest | Foundations | Beginner |
| c03 | 3 | High-Quality CPR: Adult (1-Rescuer) | Adult BLS | Beginner |
| c04 | 4 | Adult 2-Rescuer CPR & Team Dynamics | Adult BLS | Intermediate |
| c05 | 5 | Automated External Defibrillation (AED) | Adult BLS | Beginner |
| c06 | 6 | Ventilation: Barrier Devices, Pocket Mask & Bag-Mask | Airway & Breathing | Intermediate |
| c07 | 7 | Rescue Breathing & Advanced Airway Considerations | Airway & Breathing | Intermediate |
| c08 | 8 | Child BLS | Pediatric BLS | Intermediate |
| c09 | 9 | Infant BLS | Pediatric BLS | Intermediate |
| c10 | 10 | Foreign-Body Airway Obstruction (Adult, Child, Infant) | Emergencies | Beginner |
| c11 | 11 | Opioid-Associated Life-Threatening Emergencies | Emergencies | Intermediate |
| c12 | 12 | Special Circumstances: Drowning, Pregnancy, Recovery & Post-Arrest Care | Emergencies | Intermediate |

Notes:
- c04 covers roles, closed-loop communication, compressor switch every 5 cycles/2 min, CCF.
- c05 covers adult pads; pediatric AED specifics live in c08/c09 with cross-references.
- c12 folds in the 2024 drowning update, maternal CPR basics (left uterine displacement awareness), recovery position, ROSC recognition, and duty-to-continue/termination basics at BLS level.

---

## 4. Data schemas (identical to ITLS — do not invent new fields)

ID convention: globally unique, `cNN_qMM` (quiz), `cNN_fcMM` (flashcard), `cNN_sMM` (scenario). `build.py` enforces uniqueness.

- **`chapters/cNN.json`**: `id, title, shortTitle, estimatedStudyTime (min), difficulty, learningObjectives[], summary[{title, content}], clinicalPearls[], redFlags[], commonMistakes[], memoryAids[], decisionTrees[{title, content}], references[]`
- **`flashcards/cNN.json`**: `{ "chapter": "cNN", "cards": [{ id, question, answer, category }] }`
- **`quizzes/cNN.json`**: `{ "chapter": "cNN", "questions": [{ id, question, options[4 with "A."–"D." prefixes], correct (0-based index), rationale, difficulty ("Easy"|"Medium"|"Hard") }] }`
- **`scenarios/cNN.json`**: `{ "chapter": "cNN", "cases": [{ id, title, presentation, vitals{hr,bp,rr,spo2,temp}, question, options["A: …"…], correct (index), explanation, clinicalPearl }] }`
- **`algorithms/cNN.json`**, **`tables/cNN.json`**: mirror the structure of `courses/itls/data/itls/algorithms/c01.json` and `tables/c01.json` (read them first; keys are `algorithms` / `tables` lists).

Pure data only — UTF-8, pretty-printed, no HTML/JS inside JSON.

### Content targets per chapter (minimums)

| Type | Per chapter | Course total |
|---|---|---|
| Summary sections | 5–8 | — |
| Learning objectives | 5–9 | — |
| Clinical pearls / red flags / mistakes / memory aids | 4–6 each | — |
| Flashcards | 15–20 | ≥ 180 |
| Quiz questions | 18–25 | ≥ 220 |
| Scenarios | 3 | 36 |
| Algorithms | 1+ where an official AHA algorithm exists (c02, c03, c04, c05, c08, c09, c10, c11, c12) | ≥ 9 |
| Tables | at least c03 (Summary of High-Quality CPR Components: Adult vs Child vs Infant — the signature table), plus AED pad table (c05), breathing-rates table (c07), choking-by-age table (c10) | ≥ 4 |

Quiz style: match the AHA BLS exam register (single best answer, scenario-lead-ins, "What is your next action?"). Distribute difficulties roughly 40 % Easy / 40 % Medium / 20 % Hard. Every rationale must teach the *why*, and cite the guideline concept (not a page number).

---

## 5. App shell — `courses/bls/index.html`

Start from a copy of `courses/itls/index.html`, then:

1. Rename the data global: `window.ITLS_DATA` → `window.BLS_DATA`; fetch fallback path `data/itls/` → `data/bls/`.
2. Rebrand: title "BLS — Basic Life Support Reviewer", header/subtitle text, `<meta>` description. Keep the SmartCare visual language; you may shift the accent from ITLS red toward the AHA red already chosen in the manifest (`#c8102e` is fine to keep).
3. Namespace persistence: every `localStorage` key gets a `bls_` prefix (audit the ITLS file for its keys and rename all of them) so ITLS and BLS progress never collide.
4. Keep all six tabs and every feature (sidebar search, flip-cards, scored quiz, progress). Do not add features in v1.
5. Keep the offline model: works from `file://` via `data/bundle.js`, falls back to fetch when served.

## 6. Build script — `courses/bls/build.py`

Copy `courses/itls/build.py`, change `DATA` to `data/bls`, output global to `window.BLS_DATA`, and the header comment. Behavior (validation, coverage table, exit codes) stays identical. Run it after every content batch; it must end with `Validation OK.`

Also write `courses/bls/README.md` mirroring the ITLS README: layout, totals, run instructions, schema quick-reference, regeneration, integration notes, **guideline provenance (§2.3)**, and the disclaimer.

---

## 7. Platform integration

1. **`data/courses.json`** — add a new entry (keep the existing `bls` exam entry untouched):
   `{ "id": "bls-reviewer", "shortTitle": "BLS Reviewer", "title": "Basic Life Support — Course Reviewer", "link": "../courses/bls/index.html", "available": true, "icon": "🫀", "count": <final quiz total> }`
2. **`pages/courses.html`** — register the card the same way ITLS is registered (see the `itls` entry near line 1489 and the review-button block near line 1754). Category: `cardiac` if that taxonomy exists there (check the file), else match ITLS's pattern.
3. **`scripts/build_precache.py`** — add `courses/bls/index.html` and `courses/bls/data/bundle.js` next to the ITLS entries; regenerate `precache-manifest.js` by running the script.
4. **`scripts/generate_sitemap.py`** — add `courses/bls` to `SCAN_DIRS`; regenerate `sitemap.xml`.
5. Search for any other ITLS-reviewer registration points before finishing: `grep -rn "courses/itls" --include='*.{html,js,py,json}' .` and mirror each hit for `courses/bls` where it makes sense (e.g. service worker, manifest, README indexes).

---

## 8. Execution plan (phases, each ends with a commit)

Work on branch `claude/bls-reviewer-agentic-plan-ia0mcf` unless instructed otherwise; push with `git push -u origin <branch>`.

**Phase 0 — Verify guidelines (no code).** Web-verify every §2.3 item; write the provenance notes. *Gate: each ⚠️ item resolved with a source.*

**Phase 1 — Scaffold.** Create `courses/bls/` tree: `manifest.json`, empty-but-valid content files for c01 (all six types), adapted `build.py`, adapted `index.html`, `README.md`. *Gate: `python courses/bls/build.py` → `Validation OK.`; opening `index.html` shows c01.*

**Phase 2 — Author content, 3 chapters per batch (c01–c03, c04–c06, c07–c09, c10–c12).** For each chapter: chapter JSON → flashcards → quiz → scenarios → algorithm/table where specified. Re-run `build.py` per batch. *Gate per batch: validation OK, coverage table shows targets met, spot-check 3 random quiz answers against the verified guideline facts.*

**Phase 3 — Integration (§7).** *Gate: BLS reviewer reachable from courses page; precache + sitemap regenerated; no console errors when served (`python -m http.server` from repo root, load `/courses/bls/index.html`, click through all tabs of 3 chapters).*

**Phase 4 — QA sweep.**
- `python courses/bls/build.py` clean; final counts recorded in README + `data/courses.json` count field.
- Clinical self-review pass: re-read every number (rates, depths, ratios, breath timing, AED ages) against §2.2/§2.3 notes; fix drift.
- Consistency pass: every `correct` index actually matches the rationale; options are plausible distractors; no duplicate questions across chapters.
- If Playwright is set up (`playwright.config.js`, `tests/`), add a smoke spec modeled on the existing ITLS/exam-flow test that loads the BLS reviewer and asserts the sidebar and tabs render; run the suite.
- Run `graphify update .` (repo rule) after code changes.

**Phase 5 — Ship.** Final commit, push. Do not open a PR unless asked.

---

## 9. Guardrails

- **Never** alter ITLS files, `src/BLS/*` question banks, or `pages/bls.html` behavior.
- **No copyrighted AHA text or images** — original wording only; describe algorithms as structured steps, don't reproduce AHA flowchart graphics.
- **No invented clinical facts.** If a 2025 detail can't be verified, state the 2020-guideline value and flag it in README provenance rather than guessing.
- Keep JSON pure data; keep IDs globally unique; keep the schema frozen (the app and any future native integration depend on it).
- American English, metric + imperial for depths (as AHA does: "at least 2 inches (5 cm)").
