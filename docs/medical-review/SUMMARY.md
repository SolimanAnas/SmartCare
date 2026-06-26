# Clinical Review — Summary & Fix List

**Scope:** all 10 chapters (`c1–c10`), ~600+ quiz items + ~750 flashcards + critical scenarios.
**Bottom line:** 🟢 **The medical content is impressively accurate and clinically sophisticated.**
Across the whole curriculum there are only **3 clear errors** and a short list of verify/nuance items.
*This automated review does not replace physician / medical-director sign-off before public release.*

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
