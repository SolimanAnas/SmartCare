# PPET Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **PPET (Prehospital Pediatric Emergency [Transport/Treatment]) Course Reviewer** at `courses/ppet/`, cloned from the completed **PALS reviewer** at `courses/pals/`, with clinical content aligned to current pediatric prehospital care guidance: the **2025 AHA/AAP Guidelines for CPR and ECC — Part 8 (Pediatric Advanced Life Support)** for resuscitation numbers, and **NAEMT Emergency Pediatric Care (EPC)** / National EMS Education Standards content domains for general pediatric assessment, trauma, and medical emergencies.
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/pals/` | **Primary reference implementation.** Six-tab reviewer (Summary/Flashcards/Quiz/Scenarios/Algorithms/Tables), `build.py` → `data/bundle.js` (`window.PALS_DATA`), namespaced localStorage. | Copy this architecture exactly — it is the newest, most mature reviewer. |
| `courses/pals/README.md`, `docs/BLS.md`, `docs/ACLS.md`, `docs/PALS.md` | Reference README and sibling plan docs. | Mirror the README; follow the same phase/gate discipline. |
| `docs/PEPP.md` | Sibling plan doc for **PEPP** (Pediatric Education for Prehospital Professionals), a broader general pediatric prehospital course that may be built around the same time. | **Read it before authoring PPET chapters.** PPET's exam bank (see below) overlaps heavily with general pediatric assessment/resuscitation/trauma content that PEPP will also cover. Before finalizing the PPET chapter list, diff it against the actual PEPP chapter list once `courses/pepp/` exists, and differentiate rather than duplicate (see §1). |
| `src/PPET/ppet.json`, `src/PPET/exam2.json` | Existing PPET **exam** question bank (57 questions total per `data/courses.json`), used by `pages/ppet.html`. Do **not** modify or move. | Skim for topic coverage before writing the manifest — see §1 for what was actually found. |
| `pages/ppet.html` | Existing PPET exam page. | Leave as-is. |
| `data/courses.json` | Course registry; `ppet` entry exists (`link: "ppet.html"`, `count: 57`); `pals-reviewer`/`acls-reviewer` entries show the reviewer-entry pattern. | Add a `ppet-reviewer` entry pointing to `../courses/ppet/index.html`. |
| `pages/courses.html` | Course catalog; `REVIEWER_LINKS` map at ~line 1735 currently has `itls`, `bls`, `pals`, `acls`, `ecg-course`. | Add `ppet: { review: '../courses/ppet/index.html', exam: 'ppet.html' }`. |
| `scripts/build_precache.py` | PWA precache list (has the other reviewers' `index.html` + `bundle.js`). | Add the PPET equivalents; regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (`SCAN_DIRS`) | Includes `courses/itls`, `courses/bls`, `courses/acls`, `courses/pals`. | Add `courses/ppet`; regenerate `sitemap.xml`. |
| `tests/pals-reviewer.spec.js` | Playwright smoke-test pattern. | Clone as `tests/ppet-reviewer.spec.js`. |
| `icons/courses/thumb/ppet.png` | Branded thumbnail — **already exists**. | Reference from the sidebar brand and card; no new asset needed. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules (run `graphify update .` after code changes, when available). | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/pals/` does.** PPET is a re-skin with new content: `window.PPET_DATA`, `ppet_` localStorage prefix, `data/ppet/**` paths.

---

## 1. Product definition

**Naming reality check (do this before anything else):** "PPET" does not correspond to a single widely-recognized external certifying body the way AHA's BLS/ACLS/PALS do. A web search turned up no course formally named "Prehospital Pediatric Emergency Transport" or "PPET." The closest real-world analog by content and audience is **NAEMT's Emergency Pediatric Care (EPC)** course (critical pediatric physiology, illness/injury recognition, and interventions for EMS/fire/EMT/paramedic/RN/PA providers) — see [naemt.org/education/medical-education/epc](https://www.naemt.org/education/medical-education/epc). This is *not* the specialized 84-hour interfacility **Pediatric and Neonatal Critical Care Transport (PNCCT)** credential ([edhspace.umbc.edu](https://edhspace.umbc.edu/pediatric-neonatal-critical-care-transport-program/)), which is a distinct, narrower critical-care-transport-team credential — do not conflate the two.

**What the existing exam bank actually tests** (ground truth — skim `src/PPET/ppet.json` and `src/PPET/exam2.json` before authoring): general prehospital pediatric emergency care, not narrow interfacility transport logistics. Observed topic tags across the 114 questions: Pediatrics (general assessment/physiology), Resuscitation/Shock, Airway, Trauma, Respiratory, Assessment, Medical, Neurological, Pharmacology, OB/GYN (newborn-adjacent), Vascular Access, Toxicology. Sample stems cover CPR ratios by age band, choking management, bag-mask ventilation rates, mental-status checks in infants, and blood-loss thresholds — i.e., core PALS/BLS-pediatric and general pediatric-assessment knowledge, not transport-team-specific content (no isolette management, altitude physiology, or interfacility handoff protocol stems were found in the sample reviewed).

**Product definition, given the above:** a **Prehospital Pediatric Emergency Care reviewer** for EMTs, paramedics, and EMS/ED nurses who need a field-level (not critical-care-transport-team-level) pediatric knowledge refresher — positioned as the NAEMT-EPC-flavored counterpart to PEPP's broader AAP-curriculum approach and to PALS's ALS-arrest-algorithm depth. Per chapter: summary (objectives, pearls, red flags, mistakes, memory aids, decision trees), flashcards, EPC/NREMT-style MCQs with rationales, case scenarios with pediatric vitals, structured algorithms (age-banded CPR/choking/BLS-pediatric algorithms only — do not re-author ACLS-style drug algorithms; PPET is a BLS/first-response-level product), and comparison tables (the signature PPET table is age-banded vitals/dosing-by-weight quick reference, mirrored from — not contradicting — PALS/BLS pediatric chapters).

**Differentiation guardrail:** PPET must not duplicate PEPP or PALS content verbatim. If `docs/PEPP.md`/`courses/pepp/` exists when this is implemented, compare chapter lists and either (a) narrow PPET to a shorter "field quick-reference" scope (fewer, denser chapters focused on assessment + BLS-pediatric + transport decision-making: recognize sick vs. not sick, stabilize, and when/how to transport) or (b) flag the overlap in `courses/ppet/README.md` and get it resolved before authoring content, rather than silently shipping two near-identical courses.

---

## 2. Clinical source of truth (CRITICAL)

Because PPET has no single owning guideline body, treat it as a **synthesis** product governed by three real sources, in priority order:

1. **2025 AHA/AAP Guidelines for CPR and ECC — Part 8: Pediatric Advanced Life Support** (*Circulation*, October 2025) for every resuscitation number (CPR ratios, compression depth, ventilation rates, choking algorithm) — **must be identical to the numbers used in `courses/pals/` and `courses/bls/`**, since this content is directly shared.
2. **NAEMT Emergency Pediatric Care (EPC)** course structure/content domains for general assessment, trauma, medical, toxicology, and vascular-access framing (field-provider level, not critical-care-transport level).
3. **National EMS Education Standards** (pediatric-patients section) for scope/depth appropriate to EMT/paramedic audiences.

### 2.1 Verification protocol

- Before authoring, **web-verify every ⚠️ item in §2.3** (cpr.heart.org, *Circulation* Part 8, naemt.org/education/medical-education/epc, current National EMS Education Standards). Never author a resuscitation number, weight-based dose, or age-band cutoff from memory — copy it from the already-verified `courses/pals/` and `courses/bls/` chapter JSON where the same fact appears there, so numbers stay consistent across courses.
- Every chapter JSON gets `references[]` naming the source relied on (guideline part, or "NAEMT EPC course domain," or "National EMS Education Standards — Pediatric Patients"). **Original wording only** — no verbatim AHA/NAEMT text, no flowchart reproductions.
- Record what was verified (source + date) in `courses/ppet/README.md` under "Guideline & scope provenance," including the naming-reality-check note from §1, plus the standard educational disclaimer ("not a substitute for an official EMS pediatric course, certification, or local protocols; not affiliated with NAEMT or AAP").

### 2.2 Stable core facts (safe to use, still sanity-check against `courses/pals/`/`courses/bls/`)

- CPR ratios: child/infant 2-rescuer 15:2, single-rescuer 30:2 (same as BLS/PALS chapters — copy, don't re-derive).
- Compression depth: infant ≥ ⅓ AP diameter (~1.5 in / 4 cm); child ≥ ⅓ AP diameter (~2 in / 5 cm).
- Ventilation during respiratory arrest with a pulse: infant/child roughly 1 breath every 2–3 s (20–30/min) — confirm exact current wording against the BLS/PALS chapters rather than the older "1 breath every 3–5 s" phrasing that appears in the legacy exam bank (⚠️ the existing `src/PPET/ppet.json` question bank reflects a prior guidelines cycle in places — do not carry outdated ratios into the new reviewer content).
- Infant choking (responsive): 5 back slaps alternating with 5 chest thrusts; unresponsive → start CPR.
- Two-thumb–encircling-hands technique preferred for 2-rescuer infant compressions.
- Pediatric shock recognition: tachycardia is the earliest compensated sign; hypotension is late and pre-arrest.

### 2.3 ⚠️ Items to VERIFY before authoring

1. Current (2025-cycle) infant/child ventilation rate during respiratory-arrest-with-pulse and confirm it matches what was used in `courses/bls/` c08/c09 and `courses/pals/` — do not trust the older ratio phrasing found in the legacy `src/PPET/ppet.json` exam bank.
2. NAEMT EPC's current course edition/content domain list (confirm via naemt.org — the course is periodically revised).
3. Any 2025 AHA/AAP changes to the pediatric choking algorithm (alternating back-blows/abdominal- or chest-thrusts) — mirror exactly what `courses/bls/`/`courses/pals/` finalized.
4. Whether "PNCCT"-style interfacility-transport content (isolette, transport physiology, air-medical considerations) should be added at all — recommend **excluding it** unless a stakeholder explicitly wants PPET to become a transport-team product, since the existing exam bank and the closest real analog (NAEMT EPC) don't cover it.
5. Age-band cutoffs used for "infant" vs. "child" vs. "adolescent" — confirm consistency with BLS/PALS definitions before building the vitals-by-age table.

---

## 3. Course structure — `manifest.json`

Mirror `courses/pals/data/pals/manifest.json` field-for-field. Key values: `"id": "ppet"`, `"title": "PPET — Prehospital Pediatric Emergency Care"`, `"edition": "Aligned with the 2025 AHA/AAP Guidelines for CPR and ECC and NAEMT Emergency Pediatric Care course domains"`, `"certification": "Not a formal external certification — a field-level pediatric knowledge reviewer for EMS providers"`, `"difficulty": "Beginner to Intermediate"`, `"estimatedHours": 8`, audience: EMTs, paramedics, EMS/ED nurses; prerequisites: BLS provider competency.

### Chapter plan (9 chapters, `c01`–`c09`)

Sized to the smaller (114-question) source bank and the narrower "field reviewer" scope from §1 — deliberately shorter than PEPP/PALS to avoid duplicating them.

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | Pediatric Assessment Triangle & Primary Survey | Assessment | Beginner |
| c02 | 2 | Pediatric Airway Management & Ventilation | Airway | Intermediate |
| c03 | 3 | Pediatric BLS: CPR, Choking & AED Use | Resuscitation | Intermediate |
| c04 | 4 | Recognizing & Managing Pediatric Shock | Resuscitation | Intermediate |
| c05 | 5 | Pediatric Respiratory Emergencies | Medical | Intermediate |
| c06 | 6 | Pediatric Trauma & Injury Patterns | Trauma | Intermediate |
| c07 | 7 | Pediatric Medical Emergencies: Seizures, Fever, Altered Mental Status | Medical | Intermediate |
| c08 | 8 | Pediatric Toxicology & Vascular Access Basics | Medical | Intermediate |
| c09 | 9 | Newborn & Infant-Specific Considerations, Transport Decision-Making | Special Populations | Intermediate |

Notes: c03/c04 must reuse (not re-derive) the exact resuscitation numbers from `courses/bls/` and `courses/pals/`. c09 covers newborn stabilization basics plus the "when/how to transport" decision framing that is PPET's actual differentiator from PEPP — keep it brief and field-level, not an interfacility-transport-team module.

---

## 4. Data schemas & content targets

Schemas are **identical** to PALS/BLS (see `courses/pals/README.md` "Schema quick reference"); do not invent fields. IDs: `cNN_qMM`, `cNN_fcMM`, `cNN_sMM`, `cNN_algMM`, `cNN_tMM` — globally unique, enforced by `build.py`.

Targets (per chapter / course total, scaled down from PALS given the narrower scope): summary sections 4–6; objectives 4–6; pearls/flags/mistakes/aids 3–5 each; flashcards 10–14 (**≥ 100 total**); quiz questions 12–15 (**≥ 115 total**, replacing/expanding the legacy 114-question bank 1:1 topic-for-topic where reasonable, ~40% Easy / 40% Medium / 20% Hard); scenarios 2–3 (**≥ 22 total**); algorithms — c02, c03, c04 each get at least one age-banded algorithm (**≥ 4 total**); tables — mandatory: age-band vitals-by-weight quick reference (c01), CPR-ratio-by-age table (c03), pediatric shock-signs table (c04) (**≥ 6 total**).

Every quiz rationale must name the source concept (guideline vs. EPC-domain vs. education-standard) and, where a number is shared with BLS/PALS, state that consistency explicitly (e.g., "same 15:2 ratio as PALS c0X").

---

## 5. App shell, build script, README

1. Copy `courses/pals/index.html` → `courses/ppet/index.html`. Rename: `PALS_DATA` → `PPET_DATA`, `data/pals/` → `data/ppet/`, localStorage keys `pals_*` → `ppet_*`, title/brand "PPET Reviewer — Prehospital Pediatric Emergency Care", icon `../../icons/courses/thumb/ppet.png`, `<meta>` description. Keep all six tabs.
2. **Mobile-friendliness is a hard requirement** — preserve the `minmax(0, 1fr)` grid tracks, `min-width: 0` sidebar, `.table-wrap { overflow-x: auto }`, and mobile media-query overrides exactly as they exist in `courses/pals/index.html`. Never reintroduce a bare `1fr` track.
3. Copy `courses/pals/build.py` → `courses/ppet/build.py`; change `DATA` to `data/ppet`, output global to `window.PPET_DATA`, header comment. Must end `Validation OK.`
4. Write `courses/ppet/README.md` mirroring the PALS one: layout, totals, run instructions, schema reference, **guideline & scope provenance** (including the §1 naming-reality-check note), disclaimer.

## 6. Platform integration

1. `pages/courses.html` — add `ppet` to the `REVIEWER_LINKS` map (line ~1735). The `ppet` entry already exists in the `COURSES` array via `data/courses.json`.
2. `data/courses.json` — add `{ "id": "ppet-reviewer", "shortTitle": "PPET Reviewer", "title": "Prehospital Pediatric Emergency Care — Course Reviewer", "link": "../courses/ppet/index.html", "available": true, "icon": "🚼", "count": <final quiz total> }` after the existing `ppet` entry.
3. `scripts/build_precache.py` — add `courses/ppet/index.html` and `courses/ppet/data/bundle.js`; regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/ppet` to `SCAN_DIRS`; regenerate `sitemap.xml`.
5. `grep -rn "courses/pals" --include='*.{html,js,py,json}' .` and mirror any registration point found for PPET.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify & scope (no code).** Resolve every §2.3 ⚠️ item; if `courses/pepp/` already exists, diff chapter lists and finalize the differentiation call from §1. *Gate: all resolved, scope decision documented.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01 content. *Gate: `python courses/ppet/build.py` → `Validation OK.`*
**Phase 2 — Author, 3 chapters per batch** (c01–c03, c04–c06, c07–c09), running build.py per batch. *Gate per batch: validation OK, targets met, spot-check every resuscitation number against the corresponding BLS/PALS chapter for exact consistency.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; click through all chapters × all tabs served over HTTP with no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep; clone `tests/pals-reviewer.spec.js` → `tests/ppet-reviewer.spec.js` and run it, including mobile no-horizontal-overflow tests (360px/320px, all six tabs); record final counts in README + `data/courses.json`; `graphify update .` if available.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter BLS/ACLS/PALS/ITLS/PEPP reviewers, `src/PPET/*`, or `pages/ppet.html`.
- Never invent a formal "PPET certification" edition/version number — the honest framing from §1 must be preserved in the shipped README and app footer.
- Resuscitation numbers are the highest-risk content: they must match `courses/bls/`/`courses/pals/` exactly, not be re-derived independently.
- No copyrighted AHA/NAEMT text or flowchart reproductions; original wording; describe algorithms as steps.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric+imperial where guidelines use both.
