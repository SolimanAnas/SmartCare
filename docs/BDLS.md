# BDLS Course Reviewer — Implementation Plan (for an agentic AI)

> **Audience:** an autonomous coding agent that will implement this end-to-end in the SmartCare repo.
> **Goal:** build a self-contained **BDLS (Basic Disaster Life Support) Course Reviewer** at `courses/bdls/`, cloned from the completed **PALS reviewer** at `courses/pals/` (itself cloned from BLS, which mirrors ITLS), with all content aligned to the **National Disaster Life Support Foundation (NDLSF) Basic Disaster Life Support Provider Course** — the all-hazards "DISASTER paradigm" curriculum.
> **Deliverable:** pure-JSON course data + a standalone offline-capable HTML reviewer + platform integration, validated by a build script.

---

## 0. Context: what already exists (read these first)

| Path | What it is | How to use it |
|---|---|---|
| `courses/pals/` | **Primary reference implementation.** Six-tab reviewer (Summary / Flashcards / Quiz / Scenarios / Algorithms / Tables), `build.py` → `data/bundle.js` (`window.PALS_DATA`), namespaced localStorage. | Copy this architecture exactly. |
| `docs/BLS.md`, `docs/ACLS.md`, `docs/PALS.md` | The plan documents for the sibling reviewers. | Follow the same phase/gate discipline; keep terminology and structure consistent. |
| `courses/pals/README.md` | Layout, schemas, ID conventions, guideline-provenance section. | Your `courses/bdls/README.md` mirrors this, with a "Curriculum provenance" section in place of "Guideline provenance" (BDLS is not an AHA course). |
| `src/BDLS/BDLS.json` (40 exam MCQs — topics: Disaster 15, Trauma 10, Environmental & Toxicology 8, Patient Assessment 4, Medical/Behavioral/Geriatric 2, Patient Safety 1), `pages/bdls.html` | Existing BDLS **exam** page and question bank. | Do **not** modify or move. The reviewer is a separate product; the exam stays as-is. Use the topic distribution as a sanity check for the chapter plan in §3. |
| `pages/courses.html` | Course catalog; `REVIEWER_LINKS` map (line ~1735) currently has `itls`, `bls`, `pals`, `acls`. | Add `bdls: { review: '../courses/bdls/index.html', exam: 'bdls.html' }`. |
| `data/courses.json` | Course registry — a `bdls` exam entry exists (`link: "bdls.html"`, `count: 40`); the `bls-reviewer`/`acls-reviewer`/`pals-reviewer` entries show the reviewer-entry pattern. | Add a `bdls-reviewer` entry after the existing `bdls` entry. |
| `scripts/build_precache.py` (lines ~38–45) | PWA precache list — has `courses/itls`, `courses/bls`, `courses/acls`, `courses/pals` (index.html + bundle.js each). | Add the BDLS equivalents; regenerate `precache-manifest.js`. |
| `scripts/generate_sitemap.py` (`SCAN_DIRS`, line ~17–20) | Includes `courses/itls`, `courses/bls`, `courses/acls`, `courses/pals`. | Add `courses/bdls`; regenerate `sitemap.xml`. |
| `tests/pals-reviewer.spec.js` (or `bls-reviewer.spec.js`) | Playwright smoke-test pattern, including mobile no-overflow checks. | Clone as `tests/bdls-reviewer.spec.js`. |
| `icons/courses/thumb/bdls.png` | Branded thumbnail — **already exists**. | Reference from the sidebar brand and course card; no new asset needed. |
| `CLAUDE.md` / `AGENTS.md` | Repo agent rules — run `graphify update .` after modifying code, when available. | Obey. |

**Rule of thumb: when in doubt, do exactly what `courses/pals/` does.** BDLS is a re-skin with new content: `window.BDLS_DATA`, `bdls_` localStorage prefix, `data/bdls/**` paths.

---

## 1. Product definition

A **BDLS Provider course reviewer** for physicians, nurses, paramedics, EMS/EMT personnel, public-health staff, and other health professionals preparing for the **NDLSF Basic Disaster Life Support** course/exam. Self-contained, offline-capable, pure data + one HTML file. Per chapter: summary (objectives, pearls, red flags, mistakes, memory aids, decision trees), flashcards, exam-style MCQs with rationales, realistic disaster-response scenarios, structured algorithms, and comparison tables. BDLS is organized around the **DISASTER paradigm** (Detect, Incident command, Scene security & safety, Assess hazards, Support, Triage & treatment, Evacuation, Recovery) and an **all-hazards framework** spanning natural, man-made, traumatic/explosive, nuclear/radiological, biological, and chemical events — mnemonic/paradigm callouts and hazard-comparison tables are first-class content.

---

## 2. Curriculum source of truth — NDLSF BDLS Provider Course (CRITICAL)

Unlike BLS/ACLS/PALS, BDLS has no annually-revised AHA-style guideline document — it is a standardized, competency-based **awareness-level course (~7.5 contact hours)** maintained by the National Disaster Life Support Foundation (NDLSF, successor to the NDLS Education Consortium originally at George Washington University). Certifications are valid for **three years**.

### 2.1 Verification protocol

- Before authoring, **web-verify every ⚠️ item in §2.3** (ndlsf.org, register3.ndlsf.org, affiliated university EMS/CME program pages, published NDLS textbook/journal summaries). Do not assume AHA-style annual revision cycles apply here — confirm the current provider-manual edition/version actually in use.
- Facts in §2.2 were verified via NDLSF's public course description (ndlsf.org/bdls) and cross-referenced training-provider summaries; still sanity-check while authoring, since NDLSF does not publish a single canonical "guidelines PDF" the way AHA does.
- Every chapter JSON gets a `references[]` entry naming the curriculum domain relied on (e.g. `"NDLSF Basic Disaster Life Support Provider Course — All-Hazards Framework"`). No verbatim copying from NDLS course materials: **all wording must be original** (same policy as the sibling courses).
- Record what you verified (source + date) in `courses/bdls/README.md` under a "Curriculum provenance" heading, and add the standard disclaimer: educational reviewer, not a substitute for an official NDLSF BDLS course, certification card, or local/regional disaster-response protocols.

### 2.2 Verified / stable core facts (safe to use, still sanity-check)

- **Course identity:** BDLS is a competency-based, awareness-level course teaching a common lexicon and knowledge base for the clinical and public-health management of all ages/populations affected by disasters and public-health emergencies, using an **all-hazards approach**.
- **The DISASTER paradigm** (introduced in the Core Disaster Life Support course, reused throughout BDLS): **D**etect, **I**ncident command, **S**cene security & safety, **A**ssess hazards, **S**upport, **T**riage & treatment, **E**vacuation, **R**ecovery. This is the organizing mnemonic for the whole course — every chapter should tie back to it.
- **All-hazards content domains:** natural and accidental man-made disasters; traumatic and explosive events (blast injury mechanisms — primary/secondary/tertiary/quaternary); nuclear and radiological events; biological events (including bioterrorism recognition and reporting to public health authorities); chemical events (recognition, PPE, decontamination zones — hot/warm/cold).
- **Reporting pathway:** suspected bioterrorism or unusual disease clustering is reported to the **local or state public health department** (not media, not a personal physician), per the existing exam bank's own answer key — keep this consistent.
- **Certification validity:** 3 years from issuance.
- **Format:** interactive, scenario- and discussion-based; designed for a broad multidisciplinary health-professional audience, not EMS-only.

### 2.3 ⚠️ Items to VERIFY before authoring

1. **Current provider-manual edition/version number** — NDLSF's public materials do not surface a clear "edition N" the way AHA does; confirm via ndlsf.org / register3.ndlsf.org whether a specific current edition exists, and if not, state plainly in the README that BDLS is versioned by course registration rather than numbered editions.
2. **Mass-casualty triage system(s) taught** — confirm whether current BDLS materials reference START/JumpSTART specifically or a more generic "triage and treatment" step within the DISASTER paradigm without naming a specific algorithm.
3. **Incident Command System (ICS) / NIMS terminology** — confirm current alignment with FEMA NIMS ICS structure and role titles as taught in BDLS.
4. **Decontamination zone terminology and sequence** (hot/warm/cold, or exclusion/contamination-reduction/support) as currently taught.
5. **Any post-2020 curriculum revisions** reflecting pandemic-era lessons (e.g., updated biological-event/pandemic-response content, PPE guidance) — confirm what, if anything, changed.
6. **Course duration and CE credit specifics** if referenced in the README disclaimer (confirm ~7.5 hours is still accurate).

---

## 3. Course structure — `manifest.json`

Mirror `courses/pals/data/pals/manifest.json` field-for-field. Key values: `"id": "bdls"`, `"title": "BDLS — Basic Disaster Life Support"`, `"edition": "Based on the NDLSF Basic Disaster Life Support Provider Course"`, `"certification": "NDLSF BDLS Provider"`, `"difficulty": "Beginner to Intermediate"`, `"estimatedHours": 8`, audience: physicians, nurses, paramedics, EMTs, public-health professionals, hospital and emergency-management staff; prerequisites: none formally required (awareness-level course).

### Chapter plan (12 chapters, `c01`–`c12`)

| id | # | Title | Section | Difficulty |
|---|---|---|---|---|
| c01 | 1 | Foundations of Disaster Health & the DISASTER Paradigm | Foundations | Beginner |
| c02 | 2 | Incident Command System & Emergency Management Structure | Foundations | Beginner |
| c03 | 3 | Scene Security, Safety & Personal Protective Measures | Foundations | Intermediate |
| c04 | 4 | All-Hazards Assessment & Risk Recognition | Assessment | Intermediate |
| c05 | 5 | Patient Assessment in the Disaster Setting | Assessment | Intermediate |
| c06 | 6 | Mass Casualty Triage & Field Treatment | Triage & Treatment | Advanced |
| c07 | 7 | Evacuation, Surge Capacity & Patient Movement | Support | Intermediate |
| c08 | 8 | Recovery, Psychological Impact & Behavioral Health | Recovery | Intermediate |
| c09 | 9 | Natural & Accidental Man-Made Disasters | Hazard-Specific | Intermediate |
| c10 | 10 | Traumatic & Explosive Events / Blast Injury | Hazard-Specific | Advanced |
| c11 | 11 | Nuclear & Radiological Events | Hazard-Specific | Advanced |
| c12 | 12 | Biological & Chemical Events (Bioterrorism, Hazmat & Decontamination) | Hazard-Specific | Advanced |

Notes: c01–c02 establish the DISASTER paradigm and ICS as the recurring frame every later chapter references. c05 covers vulnerable/at-risk population identification (a recurring exam theme). c06 carries the mass-casualty triage content flagged for verification in §2.3. c12 merges biological and chemical events since both hinge on hazard recognition + PPE/decon technique and the existing exam bank groups them under "Environmental and Toxicology."

---

## 4. Data schemas & content targets

Schemas are **identical** to PALS/BLS (see `courses/pals/README.md` "Schema quick reference"); do not invent fields. IDs: `cNN_qMM`, `cNN_fcMM`, `cNN_sMM`, `cNN_algMM`, `cNN_tMM` — globally unique, enforced by `build.py`.

Targets (per chapter / course total): summary sections 5–8; objectives 5–9; pearls/flags/mistakes/aids 4–6 each; flashcards 12–16 (**≥ 150 total**); quiz questions 12–16 (**≥ 160 total**, ~50 % Easy / 35 % Medium / 15 % Hard — BDLS is awareness-level, skew easier than ACLS/PALS); scenarios 2–3 (**≥ 30 total**); algorithms — every chapter c02, c04, c06, c07 gets at least one (**≥ 6 total**: ICS activation, DISASTER paradigm overview, all-hazards size-up, triage/treatment flow); tables — mandatory: DISASTER paradigm reference table (c01), hazard-type comparison table (c04 or c09–c12), decontamination-zone table (c12), triage-category table (c06) (**≥ 8 total**).

Scenario vitals/detail should read like disaster-response cases: scene description, hazard type, number of patients, resource constraints, and the DISASTER-paradigm step being tested — not single-patient clinical vitals in isolation. Every quiz rationale teaches the *why* and names the paradigm step or hazard domain it belongs to.

---

## 5. App shell, build script, README

1. Copy `courses/pals/index.html` → `courses/bdls/index.html`. Rename: `PALS_DATA` → `BDLS_DATA`, `data/pals/` → `data/bdls/`, localStorage keys `pals_*` → `bdls_*`, title/brand "BDLS Reviewer — Basic Disaster Life Support", icon `../../icons/courses/thumb/bdls.png`, `<meta>` description. Keep all six tabs and every feature; add nothing in v1.
2. **Mobile-friendliness is a hard requirement**, inherited as-is from the PALS/BLS shell — `minmax(0, 1fr)` grid tracks (desktop and the ≤820px media query), `min-width: 0` on the sidebar, tables inside `.table-wrap { overflow-x: auto }`. Never reintroduce a bare `1fr` track. BDLS hazard-comparison tables can be wide: they must scroll inside `.table-wrap`, never the page body.
3. Copy `courses/pals/build.py` → `courses/bdls/build.py`; change `DATA` to `data/bdls`, output global to `window.BDLS_DATA`, header comment. Must end `Validation OK.`
4. Write `courses/bdls/README.md` mirroring the PALS one: layout, totals, run instructions, schema reference, **curriculum provenance** (§2.1), disclaimer ("not a substitute for an official NDLSF BDLS course, certification card, or local/regional disaster-response protocols").

## 6. Platform integration

1. `pages/courses.html` — add `bdls` to the `REVIEWER_LINKS` map (one line; the renderer already handles the dual-button card). The `bdls` entry already exists in the `COURSES`/`data/courses.json` array.
2. `data/courses.json` — add `{ "id": "bdls-reviewer", "shortTitle": "BDLS Reviewer", "title": "Basic Disaster Life Support — Course Reviewer", "link": "../courses/bdls/index.html", "available": true, "icon": "🌪️", "count": <final quiz total> }` after the existing `bdls` entry.
3. `scripts/build_precache.py` — add `courses/bdls/index.html` and `courses/bdls/data/bundle.js`; run it to regenerate `precache-manifest.js`.
4. `scripts/generate_sitemap.py` — add `courses/bdls` to `SCAN_DIRS`; run it to regenerate `sitemap.xml`.
5. `grep -rn "courses/pals" --include='*.{html,js,py,json}' .` and mirror any registration point you find for BDLS.

## 7. Execution plan (phases, each ends with a commit)

**Phase 0 — Verify (no code).** Resolve every §2.3 ⚠️ item with a source; write provenance notes. *Gate: all resolved or explicitly documented as unresolvable with rationale.*
**Phase 1 — Scaffold.** Tree + manifest + adapted build.py/index.html/README + full c01 content. *Gate: `python courses/bdls/build.py` → `Validation OK.`*
**Phase 2 — Author, 3–4 chapters per batch** (c01–c03, c04–c06, c07–c09, c10–c12), running build.py per batch. *Gate per batch: validation OK, targets met, spot-check 3 quiz answers per chapter against §2.2/§2.3 findings.*
**Phase 3 — Integration (§6).** *Gate: reviewer reachable from courses page; precache + sitemap regenerated; click through 3 chapters × all tabs served over HTTP with no console errors.*
**Phase 4 — QA.** Clean build; programmatic answer-integrity sweep (correct-index bounds, required fields); clone `tests/pals-reviewer.spec.js` → `tests/bdls-reviewer.spec.js` and run it — **including mobile no-horizontal-overflow tests (360px and 320px viewports) on the widest table chapter**, a hard gate; record final counts in README + `data/courses.json`; `graphify update .` if available.
**Phase 5 — Ship.** Final commit, push. No PR unless asked.

## 8. Guardrails

- Never alter BLS/ACLS/PALS/ITLS reviewers, `src/BDLS/*`, or `pages/bdls.html`.
- Do not present BDLS content as if it carries AHA-style annual guideline authority — it does not; cite NDLSF/course-provider sources specifically, and say so plainly in the README if a specific claim couldn't be externally verified.
- No copyrighted NDLS course-manual text or proprietary diagrams; original wording; describe algorithms as steps.
- Frozen schema, globally unique IDs, pure-data JSON, American English, metric+imperial where relevant.
