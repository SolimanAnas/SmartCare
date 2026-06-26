# SmartCare — Clinical Accuracy Review

> **Purpose:** Review the **medical content** of the EMT curriculum chapters (`content/c1–c10.js`)
> for clinical accuracy — correctness of facts, numbers, drug doses, and the *correct answers*
> of quizzes and critical scenarios. (Code/syntax was verified separately.)
> **Scope:** EMT / prehospital level, aligned to current AHA/NREMT-style teaching.
> **Reviewer:** automated clinical review pass. **Not** a substitute for sign-off by a physician /
> medical director before public release.

## How to read the findings

Each chapter has its own file (`c1-foundations.md`, etc.). Findings are tagged:

| Tag | Meaning | Action |
|---|---|---|
| 🔴 **ERROR** | Clinically wrong / a wrong "correct" answer — would teach incorrect medicine | Fix before release |
| 🟠 **VERIFY** | Debatable, source-dependent, or potentially outdated | Confirm against your source/protocol |
| 🟡 **NUANCE** | Accurate but could mislead / oversimplified | Optional clarification |
| 🟢 **OK** | Reviewed and clinically sound | — |

## Cross-cutting (non-medical) data-quality note

- **Encoding / mojibake:** `c1` (~259) and `c6` (~155) still contain `â€"`/`â€™`-type corrupted
  characters (em-dashes, apostrophes, quotes rendered as garbage). The earlier fix only targeted
  `�` and `Â°`. This is cosmetic, not medical, but affects content quality — worth a cleanup pass
  with a proper Latin-1→UTF-8 demojibake (e.g., `ftfy`).

## Progress — ✅ COMPLETE. See **`SUMMARY.md`** for the consolidated fix list.

| Chapter | Reviewed | File | Verdict |
|---|---|---|---|
| c1 Foundations of Care | ✅ | `c1-foundations.md` | 🟢 1 error (CHART), 2 verify |
| c2 Patient Assessment | ✅ | `c2-assessment.md` | 🟢 no errors |
| c3 Airway & Ventilation | ✅ | `c3-airway.md` | 🟢 all accurate |
| c4 Cardiovascular & Resuscitation | ✅ | `c4-cardiovascular.md` | 🟢 1 nuance + scope |
| c5 Medical Emergencies | ✅ | `c5-medical.md` | 🟢 1 verify (terminology) |
| c6 Trauma Emergencies | ✅ | `c6-trauma.md` | 🟢 1 inconsistency |
| c7 Special Populations | ✅ | `c7-special-populations.md` | 🟢 1 outdated (meconium) |
| c8 Environmental & Disaster | ✅ | `c8-environmental.md` | 🟠 1 hazmat error |
| c9 Emergency Pharmacology | ✅ | `c9-pharmacology.md` | 🟢 math all correct + scope |
| c10 Clinical Procedures & Skills | ✅ | `c10-procedures.md` | 🟢 2 minor nuances |

**Headline:** across ~600+ quiz items, only **3 clear errors** and a short verify list — strong content.
