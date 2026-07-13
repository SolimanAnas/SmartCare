# PALS Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **PALS (Pediatric Advanced Life Support) Course Reviewer** at `courses/pals/`, cloned from the completed **BLS reviewer** at `courses/bls/`, with all clinical content aligned to the **2025 AHA/AAP Guidelines for CPR and ECC — Part 8: Pediatric Advanced Life Support** (*Circulation*, October 2025; the 2025 pediatric guidelines are issued jointly by the AHA and the American Academy of Pediatrics).
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/bls/` | **Primary reference implementation.** Six-tab reviewer, `build.py` → `data/bundle.js` (`window.BLS_DATA`), namespaced localStorage. | Copy this architecture exactly. |
| `courses/bls/README.md`, `docs/BLS.md`, `docs/ACLS.md` | Reference README, and the plan documents for the sibling courses. | Mirror the README; follow the same phase/gate discipline. Build after ACLS if both are queued, so conventions stay aligned. |
| `courses/bls/data/bls/chapters/c08.json`, `c09.json` | The BLS Child/Infant chapters. | PALS builds on these — cross-reference, don't contradict them. |
| `pages/pals.html` | Existing PALS **exam** page (57 questions, per `data/courses.json`). | Do **not** modify. The reviewer is a separate product. |
| `pages/courses.html` | Card renderer with the `REVIEWER_LINKS` map (currently `itls`, `bls`, and `acls` once that plan lands). | Add `pals: { review: '../courses/pals/index.html', exam: 'pals.html' }`. |
| `data/courses.json` | Registry (`pals` exam entry exists; `bls-reviewer` shows the reviewer-entry pattern). | Add a `pals-reviewer` entry. |
| `scripts/build_precache.py`, `scripts/generate_sitemap.py` | PWA precache + sitemap generators. | Add `courses/pals` entries; regenerate both outputs. |
| `tests/bls-reviewer.spec.js` | Playwright smoke test pattern. | Clone as `tests/pals-reviewer.spec.js`. |
| `icons/courses/thumb/pals.png` | Branded thumbnail — already exists. | Reference from the sidebar brand. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules (`graphify update .` after code changes, when available). | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/bls/` does.** PALS is a re-skin with new content: `window.PALS_DATA`, `pals_` localStorage prefix, `data/pals/**` paths.

---

## 1. Product definition

A **PALS Provider course reviewer** for paramedics, nurses, physicians, and pediatric/ED/ICU staff preparing for the **AHA PALS Provider** course/exam. Self-contained, offline-capable, pure data + one HTML file. Per chapter: summary (objectives, pearls, red flags, mistakes, memory aids, decision trees), flashcards, AHA-style MCQs with rationales, case scenarios with pediatric vitals, structured algorithms, and comparison tables. PALS is defined by its **systematic assess–categorize–decide–act approach** and by **weight-based dosing** — age-banded vitals tables and mg/kg drug tables are first-class content.

---

## 2. Clinical source of truth — 2025 AHA/AAP Guidelines (CRITICAL)

### 2.1 Verification protocol

- Before authoring, **web-verify every ⚠️ item in §2.3** (cpr.heart.org, *Circulation* Part 8, AHA 2025 Highlights, AAP News summary). Never author a weight-based dose, energy dose, or age-banded vital range from memory.
- Facts in §2.2 are verified (October 2025 sources) or long-stable; still sanity-check while authoring.
- `references[]` per chapter; **original wording only**; no AHA flowchart reproductions.
- Record verification (source + date) in `courses/pals/README.md` under "Guideline provenance", plus the standard disclaimer.

### 2.2 Verified / stable core facts (safe to use, still sanity-check)

**Confirmed 2025 changes (verified October 2025 via AHA/AAP releases and professional summaries):**
- The pediatric guidelines are now issued **jointly by the AHA and AAP**.
- **Epinephrine for nonshockable rhythms: give the initial dose as early as possible** — ideally within the first 3–5 minutes of pulselessness — while ensuring effective compressions and ventilation.
- **All pauses in compressions should be under 10 seconds** (new explicit pediatric recommendation).
- **Ventilation with an advanced airway (or isolated respiratory arrest): 1 breath every 2–3 seconds (20–30/min).**
- Ratios: 30:2 single rescuer; **15:2 with 2+ rescuers for pre-pubertal patients** (post-pubertal follow adult 30:2).
- Children **12 and older can be taught effective CPR and defibrillation** (training recommendation; useful for a systems-of-care chapter).

**Long-stable PALS core (2020-era, carried forward — sanity-check against Part 8):**
- Systematic approach: initial impression (Pediatric Assessment Triangle: appearance, breathing, circulation) → primary ABCDE → secondary → diagnostic tests; assess–categorize (respiratory distress vs failure; compensated vs hypotensive shock)–decide–act.
- Respiratory categories: upper airway obstruction, lower airway obstruction, lung tissue disease, disordered control of breathing — each with characteristic findings and first-line management.
- Shock types: hypovolemic, distributive (septic, anaphylactic, neurogenic), cardiogenic, obstructive; compensated vs hypotensive; fluid bolus **10–20 mL/kg** isotonic crystalloid with reassessment after each bolus (cautious boluses in cardiogenic shock and severe malnutrition/febrile illness settings).
- Cardiac arrest drugs: **epinephrine 0.01 mg/kg (0.1 mL/kg of 0.1 mg/mL) IV/IO every 3–5 min**; refractory VF/pVT: **amiodarone 5 mg/kg bolus (may repeat ×2)** or **lidocaine 1 mg/kg**.
- Defibrillation: **first shock 2 J/kg, second 4 J/kg, subsequent ≥4 J/kg, max 10 J/kg or adult dose**.
- Synchronized cardioversion: **0.5–1 J/kg first, then 2 J/kg** if ineffective.
- SVT: vagal maneuvers → **adenosine 0.1 mg/kg (max 6 mg) rapid IV push, second dose 0.2 mg/kg (max 12 mg)**; unstable → synchronized cardioversion. Distinguish SVT from sinus tachycardia (history, rate thresholds, P waves, variability).
- Bradycardia: HR <60 with poor perfusion despite adequate oxygenation/ventilation → **start compressions**; epinephrine; **atropine 0.02 mg/kg** for increased vagal tone or primary AV block.
- Vascular access: IO early when IV is not rapidly available; drugs, fluids, and blood products can all go IO.
- Post-arrest care (PCAC): titrate oxygen to normoxemia, avoid hypotension for age, targeted temperature management/fever avoidance, treat seizures, multimodal neuroprognostication.
- Family presence during resuscitation is encouraged with a designated support person.

### 2.3 ⚠️ Items to VERIFY before authoring (2025-specific or dose/detail-critical)

1. Exact 2025 wording/class for **early epinephrine in nonshockable pediatric arrest** and any change for shockable rhythms.
2. **Post-arrest temperature control** in children — 2025 targets, duration, and fever-avoidance wording.
3. **Fluid-refractory septic shock** vasoactive choice and any 2025 sepsis-pathway changes.
4. **Cuffed vs uncuffed ET tubes**, cricoid pressure, and DOPE troubleshooting wording in 2025.
5. Age-banded **normal vital ranges** (HR, RR, SBP with the 70 + 2×age hypotension formula) — confirm the table the 2025 course materials use.
6. **Respiratory arrest ventilation rate** vs BLS rescue-breathing rate — confirm both remain 1 per 2–3 s and are stated consistently with `courses/bls` c07–c09.
7. Any renamed/merged boxes in the 2025 Pediatric Cardiac Arrest, Bradycardia, and Tachycardia algorithms; status of the **pediatric septic shock** and **anaphylaxis** pathways.
8. **Opioid-associated pediatric emergencies** — how Part 8 integrates naloxone guidance (cross-reference `courses/bls` c11).

---

## 3. Course structure — `manifest.json`

Mirror the BLS manifest field-for-field. Key values: `"id": "pals"`, `"title": "PALS — Pediatric Advanced Life Support"`, `"edition": "Based on the AHA/AAP 2025 Guidelines for CPR and ECC"`, `"certification": "AHA PALS Provider"`, `"difficulty": "Intermediate to Advanced"`, `"estimatedHours": 16`, audience: paramedics, nurses, physicians, respiratory therapists, pediatric/ED/ICU staff; prerequisites: BLS provider competency (child/infant), basic ECG recognition, basic pharmacology.

### Chapter plan (13 chapters, `c01`–`c13`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | The Systematic Approach & Pediatric Assessment Triangle | Foundations | Intermediate |
| c02 | 2 | Pediatric BLS Foundation & Team Dynamics | Foundations | Intermediate |
| c03 | 3 | Airway Management & Ventilation in Children | Airway & Breathing | Advanced |
| c04 | 4 | Respiratory Distress & Failure: The Four Categories | Airway & Breathing | Advanced |
| c05 | 5 | Recognizing Shock: Types & Compensation | Shock | Advanced |
| c06 | 6 | Managing Shock: Fluids & Vasoactive Support | Shock | Advanced |
| c07 | 7 | Pediatric Cardiac Arrest: VF / Pulseless VT | Cardiac Arrest | Advanced |
| c08 | 8 | Pediatric Cardiac Arrest: Asystole / PEA | Cardiac Arrest | Advanced |
| c09 | 9 | Pharmacology & Vascular Access (IV/IO, Weight-Based Dosing) | Cardiac Arrest | Advanced |
| c10 | 10 | Bradycardia With a Pulse | Rhythm Disturbances | Intermediate |
| c11 | 11 | Tachycardia With a Pulse: SVT vs Sinus | Rhythm Disturbances | Advanced |
| c12 | 12 | Post-Cardiac Arrest Care | Post-Arrest | Advanced |
| c13 | 13 | Special Circumstances & Family Presence | Special Topics | Intermediate |

Notes: c02 recaps and cross-references `courses/bls` c08/c09 (ratios, two-thumb technique, HR<60 trigger) without contradicting them. c08 carries the 2025 early-epinephrine emphasis prominently. c09 is the weight-based dosing hub (epinephrine, amiodarone, lidocaine, atropine, adenosine, glucose, fluid volumes; length-based tape). c13 covers trauma arrest basics, drowning, opioid emergencies (cross-ref BLS c11–c12), single-ventricle awareness (as verified), and family presence.

---

## 4. Data schemas & content targets

Schemas **identical** to BLS (`courses/bls/README.md`); IDs `cNN_qMM` / `cNN_fcMM` / `cNN_sMM` / `cNN_algMM` / `cNN_tMM`, globally unique, enforced by `build.py`.

Targets (per chapter / course total): summary sections 5–8; objectives 5–9; pearls/flags/mistakes/aids 4–6 each; flashcards 15–20 (**≥ 190 total**); quiz questions 16–20 (**≥ 215 total**, ~40/40/20 difficulty, case-style stems with age + weight given whenever a dose is asked); scenarios 3 (**39 total**); algorithms — at least one in each of c04–c12 (**≥ 11 total**); tables — mandatory: age-banded normal vitals (c01), respiratory-category comparison (c04), shock-type comparison (c05), **weight-based drug table** (c09), defibrillation/cardioversion energy table (c07/c11), SVT vs sinus tachycardia table (c11), post-arrest targets (c12) (**≥ 10 total**).

Scenario vitals must be **age-appropriate** (a normal HR for a 6-month-old is tachycardic for a teen) and scenarios should state weight when dosing is involved. Every rationale teaches the *why*.

---

## 5. App shell, build script, README

1. Copy `courses/bls/index.html` → `courses/pals/index.html`. Rename: `BLS_DATA` → `PALS_DATA`, `data/bls/` → `data/pals/`, localStorage `bls_*` → `pals_*`, title/brand "PALS Reviewer — Pediatric Advanced Life Support", icon `../../icons/courses/thumb/pals.png`, `<meta>` description. Keep all six tabs; add nothing in v1.
2. Copy `courses/bls/build.py` → `courses/pals/build.py`; `DATA` → `data/pals`, global → `window.PALS_DATA`. Must end `Validation OK.`
3. `courses/pals/README.md` mirroring BLS: layout, totals, run instructions, schema reference, **guideline provenance** (note the joint AHA/AAP authorship), disclaimer.

## 6. Platform integration

1. `pages/courses.html` — add `pals` to the `REVIEWER_LINKS` map (the `pals` entry already exists in the `COURSES` array).
2. `data/courses.json` — add `{ "id": "pals-reviewer", "shortTitle": "PALS Reviewer", "title": "Pediatric Advanced Life Support — Course Reviewer", "link": "../courses/pals/index.html", "available": true, "icon": "👶", "count": <final quiz total> }` after the existing `pals` entry.
3. `scripts/build_precache.py` — add `courses/pals/index.html` + `courses/pals/data/bundle.js`; regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/pals` to `SCAN_DIRS`; regenerate `sitemap.xml`.
5. Mirror any other `courses/bls` registration points found by grep.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify (no code).** Resolve every §2.3 ⚠️ item with a source; write provenance notes. *Gate: all resolved — especially the vitals table and every mg/kg dose.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01 content. *Gate: `python courses/pals/build.py` → `Validation OK.`*
**Phase 2 — Author, 3–4 chapters per batch** (c01–c03, c04–c06, c07–c09, c10–c13). *Gate per batch: validation OK, targets met, every weight-based dose and energy value double-checked against the verified table; consistency check against `courses/bls` pediatric chapters.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; 3 chapters × all tabs clicked through over HTTP, no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep; clinical-number grep (all mg/kg doses, J/kg energies, rates, ratios); clone the BLS Playwright spec → `tests/pals-reviewer.spec.js` and run; final counts into README + `data/courses.json`; `graphify update .` if available.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter the BLS/ITLS/ACLS reviewers or `pages/pals.html`.
- **Weight-based doses are the highest-risk content in this course.** A wrong mg/kg number in a study tool is dangerous — every dose must trace to a verified source; unresolved items go into README provenance as flagged gaps, never guesses.
- Stay consistent with `courses/bls` c08/c09 (ratios, techniques, HR<60 rule) — the two courses must never disagree.
- No copyrighted AHA/AAP text or flowchart reproductions; original wording; algorithms as structured steps.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric units for dosing (mg/kg, mL/kg, J/kg).
