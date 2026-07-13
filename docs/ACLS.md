# ACLS Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **ACLS (Advanced Cardiovascular Life Support) Course Reviewer** at `courses/acls/`, cloned from the completed **BLS reviewer** at `courses/bls/` (which itself mirrors `courses/itls/`), with all clinical content aligned to the **2025 AHA Guidelines for CPR and ECC** (published in *Circulation*, October 2025).
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/bls/` | **Primary reference implementation.** Six-tab reviewer (Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables), `build.py` → `data/bundle.js` (`window.BLS_DATA`), `bls_`-namespaced localStorage. | Copy this architecture exactly; it is newer than ITLS and already renders all six tabs. |
| `courses/bls/README.md` | Layout, schemas, ID conventions, guideline-provenance section. | Your `courses/acls/README.md` mirrors this. |
| `docs/BLS.md` | The plan that produced the BLS reviewer. | Follow the same phase/gate discipline. |
| `courses/itls/` | The original reviewer this pattern came from. | Secondary reference only. |
| `src/ACLS/acls.json` (33 exam MCQs), `pages/acls.html` | Existing ACLS **exam** page and question bank. | Do **not** modify. The reviewer is a separate product; the exam stays as-is. |
| `pages/courses.html` | Course catalog. The card renderer has a `REVIEWER_LINKS` map (search for it) that gives a course dual **Review/Exam** buttons — currently `itls` and `bls`. | Add `acls: { review: '../courses/acls/index.html', exam: 'acls.html' }`. |
| `data/courses.json` | Course registry (`acls` exam entry exists; a `bls-reviewer` entry shows the pattern). | Add an `acls-reviewer` entry. |
| `scripts/build_precache.py` | PWA precache list (has `courses/bls/index.html` + bundle). | Add the ACLS equivalents; regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (`SCAN_DIRS`) | Includes `courses/itls`, `courses/bls`. | Add `courses/acls`; regenerate `sitemap.xml`. |
| `tests/bls-reviewer.spec.js` | Playwright smoke test for the BLS reviewer. | Clone as `tests/acls-reviewer.spec.js`. |
| `icons/courses/thumb/acls.png` | Branded thumbnail — already exists. | Reference from the sidebar brand and card. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules (run `graphify update .` after code changes, when available). | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/bls/` does.** ACLS is a re-skin with new content: `window.ACLS_DATA`, `acls_` localStorage prefix, `data/acls/**` paths.

---

## 1. Product definition

An **ACLS Provider course reviewer** for paramedics, nurses, physicians, and other advanced providers preparing for the **AHA ACLS Provider** course/exam. Self-contained, offline-capable, pure data + one HTML file. Per chapter: summary (objectives, pearls, red flags, mistakes, memory aids, decision trees), flashcards, AHA-style MCQs with rationales, case scenarios with vitals, structured algorithms, and comparison tables. ACLS is *very* algorithm- and drug-table-heavy — every chapter with an official AHA algorithm gets one, and drug/energy tables are first-class content.

---

## 2. Clinical source of truth — 2025 AHA Guidelines (CRITICAL)

All content must reflect the **2025 AHA Guidelines for CPR and ECC — Part 9: Adult Advanced Life Support** (*Circulation*, October 2025) plus the Executive Summary (Part 1). The 2025 release is a full rewrite superseding 2020 and the 2023 focused update.

### 2.1 Verification protocol

- Before authoring, **web-verify every ⚠️ item in §2.3** (cpr.heart.org, *Circulation* Part 9, AHA 2025 Highlights PDF). Do not author drug doses or energy settings from memory.
- Facts in §2.2 are verified (October 2025 sources) or long-stable; still sanity-check while authoring.
- Every chapter JSON gets `references[]` naming the guideline part relied on. **Original wording only** — no verbatim AHA text, no reproduction of AHA flowchart graphics (describe algorithms as structured steps).
- Record what you verified (source + date) in `courses/acls/README.md` under "Guideline provenance", and add the standard educational disclaimer.

### 2.2 Verified / stable core facts (safe to use, still sanity-check)

**Confirmed 2025 changes (verified October 2025 via AHA newsroom, *Circulation* Part 9, and professional summaries):**
- **Routine calcium is discontinued** in cardiac arrest — give calcium only for specific indications (hyperkalemia, hypocalcemia, calcium-channel-blocker toxicity).
- **Epinephrine** remains 1 mg IV/IO every 3–5 minutes; for **nonshockable rhythms give it as soon as feasible** after arrest is confirmed.
- **Cardioversion of atrial fibrillation/flutter: use ≥200 J for the first shock** (shift away from escalating from low energies).
- **Post-arrest temperature management standardized** for all patients who do not follow commands after ROSC.
- **ECPR is Class 2a** (reasonable) for selected refractory arrests within a trained, equipped system of care.
- A **therapeutic trial of a nonsedating antiseizure medication** may be reasonable for survivors with EEG patterns on the ictal–interictal continuum.

**Long-stable ACLS core (2020-era, carried forward — sanity-check against Part 9):**
- High-quality CPR underpins everything: 100–120/min, 2–2.4 in, full recoil, pauses <10 s, CCF ≥60 %, switch compressors ~2 min; advanced airway → continuous compressions + 1 ventilation every 6 s.
- Waveform capnography: confirm/monitor ET tube; ETCO₂ persistently <10 mmHg → improve CPR quality; abrupt sustained rise → likely ROSC.
- VF/pVT: defibrillate ASAP (biphasic, manufacturer-recommended energy), resume compressions immediately, epinephrine after the second shock pattern, **amiodarone 300 mg then 150 mg** IV/IO or **lidocaine 1–1.5 mg/kg then 0.5–0.75 mg/kg** for refractory VF/pVT.
- Asystole/PEA: no shocks; epinephrine ASAP; hunt reversible causes.
- Reversible causes — the **H's and T's**: hypovolemia, hypoxia, hydrogen ion (acidosis), hypo-/hyperkalemia, hypothermia; tension pneumothorax, tamponade, toxins, thrombosis (pulmonary and coronary).
- Bradycardia (symptomatic): **atropine 1 mg** IV (repeat q3–5 min, max 3 mg) → transcutaneous pacing and/or dopamine or epinephrine infusion.
- Tachycardia (with pulse): unstable → synchronized cardioversion; stable narrow regular → vagal maneuvers, **adenosine 6 mg then 12 mg** rapid IV push; stable wide → consider antiarrhythmic infusion and expert consultation.
- Post-ROSC bundle: manage airway, titrate SpO₂ 92–98 %, avoid hypotension (SBP <90 / MAP <65), obtain 12-lead ECG, treat the cause (urgent coronary angiography when indicated), temperature control, neuroprognostication no earlier than ~72 h with multimodal data.
- ACS and stroke chapters: MONA-era dogma is dead — aspirin promptly, reperfusion timelines (door-to-balloon / door-to-needle), stroke chain (recognition scales, CT, thrombolysis/thrombectomy windows). Verify current specifics (⚠️ below).

### 2.3 ⚠️ Items to VERIFY before authoring (changed in 2023–2025 or dose/detail-critical)

1. **Refractory VF strategies** — status of **dual sequential external defibrillation (DSED)** and **vector-change defibrillation** in the 2025 text (the 2023 focused update allowed considering them; confirm 2025 class/wording).
2. **Vasopressin** — its current place (alone or with methylprednisolone) in the 2025 recommendations.
3. Exact 2025 wording for **temperature control** targets/duration after ROSC.
4. **IV vs IO first-line access** wording (2023 favored IV first; confirm 2025).
5. Energy specifics for **synchronized cardioversion by rhythm** (SVT, atrial flutter, VT with pulse) in 2025 — including the ≥200 J AF recommendation's scope.
6. ACS and stroke chapter specifics: current thrombolysis windows, BP thresholds, and any 2025 changes to the stroke algorithm.
7. Mechanical CPR devices — 2025 stance (routine use vs specific circumstances).
8. Any renamed/merged boxes in the 2025 Adult Cardiac Arrest, Bradycardia, and Tachycardia algorithms.

---

## 3. Course structure — `manifest.json`

Mirror `courses/bls/data/bls/manifest.json` field-for-field. Key values: `"id": "acls"`, `"title": "ACLS — Advanced Cardiovascular Life Support"`, `"edition": "Based on the AHA 2025 Guidelines for CPR and ECC"`, `"certification": "AHA ACLS Provider"`, `"difficulty": "Intermediate to Advanced"`, `"estimatedHours": 16`, audience: paramedics, nurses, physicians, respiratory therapists, medical/nursing students; prerequisites: BLS provider competency, basic ECG rhythm recognition, basic pharmacology.

### Chapter plan (14 chapters, `c01`–`c14`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | Systems of Care & the Chain of Survival | Foundations | Intermediate |
| c02 | 2 | High-Quality BLS Inside ACLS & Team Dynamics | Foundations | Intermediate |
| c03 | 3 | Airway Management & Waveform Capnography | Airway | Advanced |
| c04 | 4 | Rhythm Recognition for ACLS | Rhythms | Advanced |
| c05 | 5 | Defibrillation, Cardioversion & Pacing | Electrical Therapy | Advanced |
| c06 | 6 | Cardiac Arrest: VF / Pulseless VT | Cardiac Arrest | Advanced |
| c07 | 7 | Cardiac Arrest: Asystole / PEA | Cardiac Arrest | Advanced |
| c08 | 8 | Pharmacology of Cardiac Arrest | Cardiac Arrest | Advanced |
| c09 | 9 | Reversible Causes: H's & T's and Refractory Arrest | Cardiac Arrest | Advanced |
| c10 | 10 | Bradycardia With a Pulse | Peri-Arrest | Intermediate |
| c11 | 11 | Tachycardia With a Pulse | Peri-Arrest | Advanced |
| c12 | 12 | Acute Coronary Syndromes | Emergencies | Intermediate |
| c13 | 13 | Acute Stroke | Emergencies | Intermediate |
| c14 | 14 | Post-Cardiac Arrest Care, ECPR & Recovery | Post-Arrest | Advanced |

Notes: c02 folds in team dynamics (roles, closed-loop communication, CPR coach). c05 carries the 2025 ≥200 J AF-cardioversion change. c08 carries the 2025 calcium change prominently. c09 covers DSED/vector change (as verified). c14 covers temperature control, ECPR (Class 2a), antiseizure trial, and the recovery link.

---

## 4. Data schemas & content targets

Schemas are **identical** to BLS (see `courses/bls/README.md` "Schema quick reference"); do not invent fields. IDs: `cNN_qMM`, `cNN_fcMM`, `cNN_sMM`, `cNN_algMM`, `cNN_tMM` — globally unique, enforced by `build.py`.

Targets (per chapter / course total): summary sections 5–8; objectives 5–9; pearls/flags/mistakes/aids 4–6 each; flashcards 15–20 (**≥ 200 total**); quiz questions 16–20 (**≥ 230 total**, ~40 % Easy / 40 % Medium / 20 % Hard, megacode-style scenario lead-ins encouraged); scenarios 3 (**42 total**); algorithms — every chapter c05–c11 and c14 has at least one (**≥ 12 total**); tables — mandatory: arrest-drug table with doses (c08), energy-settings table (c05), H's & T's table (c09), bradycardia vs tachycardia drug table (c10/c11), post-ROSC targets table (c14) (**≥ 10 total**).

Scenario vitals should look like ACLS cases: include rhythm descriptions ("monitor shows a wide-complex tachycardia at 180"), ETCO₂ where relevant, and repeated assessment. Every quiz rationale teaches the *why* and names the guideline concept.

---

## 5. App shell, build script, README

1. Copy `courses/bls/index.html` → `courses/acls/index.html`. Rename: `BLS_DATA` → `ACLS_DATA`, `data/bls/` → `data/acls/`, localStorage keys `bls_*` → `acls_*`, title/brand "ACLS Reviewer — Advanced Cardiovascular Life Support", icon `../../icons/courses/thumb/acls.png`, `<meta>` description. Keep all six tabs and every feature; add nothing in v1.
2. Copy `courses/bls/build.py` → `courses/acls/build.py`; change `DATA` to `data/acls`, output global to `window.ACLS_DATA`, header comment. Must end `Validation OK.`
3. Write `courses/acls/README.md` mirroring the BLS one: layout, totals, run instructions, schema reference, **guideline provenance**, disclaimer ("not a substitute for an official AHA ACLS course, certification card, or local protocols").

## 6. Platform integration

1. `pages/courses.html` — add `acls` to the `REVIEWER_LINKS` map (one line; the renderer already handles the dual-button card). The `acls` entry already exists in the `COURSES` array.
2. `data/courses.json` — add `{ "id": "acls-reviewer", "shortTitle": "ACLS Reviewer", "title": "Advanced Cardiovascular Life Support — Course Reviewer", "link": "../courses/acls/index.html", "available": true, "icon": "❤️", "count": <final quiz total> }` after the existing `acls` entry.
3. `scripts/build_precache.py` — add `courses/acls/index.html` and `courses/acls/data/bundle.js`; run it to regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/acls` to `SCAN_DIRS`; run it to regenerate `sitemap.xml`.
5. `grep -rn "courses/bls" --include='*.{html,js,py,json}' .` and mirror any registration point you find for ACLS.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify (no code).** Resolve every §2.3 ⚠️ item with a source; write provenance notes. *Gate: all resolved.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01 content. *Gate: `python courses/acls/build.py` → `Validation OK.`*
**Phase 2 — Author, 3–4 chapters per batch** (c01–c04, c05–c08, c09–c11, c12–c14), running build.py per batch. *Gate per batch: validation OK, targets met, spot-check 3 quiz answers per chapter against verified facts — every drug dose and energy value double-checked.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; click through 3 chapters × all tabs served over HTTP with no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep (correct-index bounds, required fields — see the python snippet pattern used for BLS); clinical-number consistency grep (doses, energies, ratios); clone `tests/bls-reviewer.spec.js` → `tests/acls-reviewer.spec.js` and run it; record final counts in README + `data/courses.json`; `graphify update .` if available.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter BLS/ITLS reviewers, `src/ACLS/*`, or `pages/acls.html`.
- **Drug doses and energy settings are the highest-risk content in this course** — never author them from memory; every dose in a table or rationale must trace to a verified source, and flag any unresolved item in README provenance rather than guessing.
- No copyrighted AHA text or flowchart reproductions; original wording; describe algorithms as steps.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric+imperial where AHA uses both.
