# Clinical Review — Summary & Fix List

**Scope:** all 10 chapters (`c1–c10`), ~600+ quiz items + ~750 flashcards + critical scenarios.
**Bottom line:** 🟢 **The medical content is impressively accurate and clinically sophisticated.**
*This automated review does not replace physician / medical-director sign-off before public release.*

---

## ✅ Fixes applied (this pass)

**Encoding:** full demojibake with `ftfy.fix_encoding` — **418+ corrupted characters** repaired in
c1 & c6 (em/en-dashes, smart quotes, °, ≈, ×). **0 mojibake remaining; 10/10 chapters valid JS.**

**Content fixes applied:**
| Item | Fix |
|---|---|
| c1 · 1.8 CHART "P" | → **"H"** (History) |
| c1 · 1.4 meningococcal | removed the gown — droplet = mask + eye protection |
| c4 · 4.6 new LBBB | softened to "treated as a STEMI equivalent (confirm with Sgarbossa)" |
| c5 · 5.10 "excited delirium" (5×) | → **"hyperactive (agitated) delirium"** |
| c6 · 6.1 fall height | 18-foot → **25-foot** (now consistent with the >20 ft criterion) |
| c7 · 7.1 meconium | → **begin PPV**; routine tracheal suctioning removed (current NRP) |
| c8 · 8.6 hazmat Q5 | corrected: **Yellow = Class 5 Oxidizer**; **UN 1971 = methane** |
| **c8 placard color table** | corrected 4 rows: **Class 1 = Orange, Class 2.3 = White, Class 4.1 = Red/White striped, Class 5 = Yellow** (found during fixing) |
| c10 · 10.3 tourniquet | removed "air embolism" from the release rationale |

**Reviewed and intentionally left (defensible / correct as written):** HIV PEP "within 2 h" (correct
*ideal*); "struck by a vehicle" leading EMS death (cited both ways — confirm with your source);
sarin "faint fruity odor" (impure sarin can be faintly fruity); E-cylinder "≈30 min" (depends on
whether the 200 psi safe-residual convention is taught).

---

## Original findings (for reference)

---

## 🔴 Clear errors — fix before release (3)

| # | Location | Problem | Fix |
|---|---|---|---|
| 1 | **c1 · 1.8 Q11** | "What does the **'P' in CHART**" — CHART has no P (C-H-A-R-T = Chief complaint, History, Assessment, Rx, Transport). | Change the letter to **H** (History) or **R** (Rx). |
| 2 | **c8 · 8.6 Q5** | Hazmat: "**yellow placard = Class 4**" (yellow = **Class 5 Oxidizer**); "**UN 1971 not a valid UN number**" (UN 1971 = **methane**, valid Class 2.1). | Rebuild with a correct color→class map and a real UN number. |
| 3 | **c6 · 6.1 Q4** | Scenario "fall from an **18-foot** window" but rationale cites "fall **>20 ft** is a mechanism criterion" — internally inconsistent (18 < 20). | Change height to >20 ft, or change the rationale/threshold. |

## 🟠 Verify / update (source- or guideline-dependent)

| Location | Item | Note |
|---|---|---|
| **c7 · 7.1 Q4** | Meconium, non-vigorous newborn → "suction trachea before stimulating" | **Outdated NRP.** Current NRP: **begin PPV**; routine tracheal suction no longer recommended. (Recommend treating as a fix.) |
| **c5 · 5.10** | "Excited delirium" terminology | Contested term (AMA 2023 rejected). Management is correct; consider "hyperactive delirium with severe agitation." |
| **c1 · 1.4 Q12** | Meningococcal → "add eye protection **and a gown**" | Droplet precautions = mask + eye protection; a **gown is contact-level**, not required. |
| **c4 · 4.6 Q3** | "New LBBB + ischemic symptoms = STEMI equivalent" | Classic teaching; modern guidelines refine with **Sgarbossa criteria**. Acceptable at EMT level. |
| **c1 / c2** | "Leading cause of on-duty EMS death = struck by a vehicle" | Many sources cite **transportation/ambulance collisions**. Confirm against your source (consistent across both chapters). |
| **c1 · 1.4 Q4** | HIV PEP "within 2 hours" | Reasonable ideal; standard wording is "ASAP, up to 72 h." |
| **c8 · 8.7 Q1** | Sarin "smells of sweet fruit" | Nerve agents are generally **odorless** — consider removing the odor cue. |

## 🟡 Minor nuances (optional)
- **c10 · 10.2** E-cylinder "≈30 min" omits the 200 psi safe residual (≈26 min with it).
- **c10 · 10.3 Q4** tourniquet-release rationale lists "air embolism" (real concern = reperfusion/rebleed).

## 🟠 Scope observation (decision, not error)
Chapters **c4** and **c9** (and parts of c5–c8) contain substantial **ALS / paramedic-level** content —
atropine/pacing, IV/IO meds and dosing, V4R/posterior leads, ketamine, 2-PAM, vasopressors. All
clinically correct, but **beyond EMT-Basic scope**. Given the "prehospital EMT" framing, decide whether
to keep as enrichment, **tag items as AEMT/Paramedic level**, or trim.

## Cross-cutting data-quality (non-medical)
- **Mojibake** (`â€"`/`â€™`/`"”` corrupted dashes, apostrophes, quotes) remains in **c1 (~259)** and
  **c6 (~155)**, with traces in c9. The earlier fix only handled `�`/`Â°`. Run a proper
  Latin-1→UTF-8 demojibake (e.g., `ftfy`) — cosmetic but affects readability.

---

## Per-chapter verdicts
| Chapter | Verdict |
|---|---|
| c1 Foundations | 🟢 strong — 1 error (CHART), 2 verify |
| c2 Assessment | 🟢 excellent — no errors |
| c3 Airway | 🟢 all accurate |
| c4 Cardiovascular | 🟢 excellent — 1 nuance, scope note |
| c5 Medical | 🟢 excellent — 1 terminology verify |
| c6 Trauma | 🟢 excellent — 1 inconsistency |
| c7 Special Populations | 🟢 excellent — 1 outdated (meconium) |
| c8 Environmental | 🟠 strong — **1 hazmat error** |
| c9 Pharmacology | 🟢 excellent — math all correct, scope note |
| c10 Procedures | 🟢 sound — 2 minor nuances |
