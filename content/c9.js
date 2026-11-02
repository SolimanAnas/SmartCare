/* ========== Chapter 9 – Emergency Pharmacology ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c9.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c9",
  "title": "Emergency Pharmacology",
  "shortTitle": "9. Emergency Pharmacology",
  "sections": [
    {
      "id": "c9s1",
      "shortTitle": "9.1 Principles of Pharmacology & Drug Classes",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Principles of Pharmacology & Drug Classes",
        "lead": "You don't need to memorise every drug, but you must know what each one you give does, how it gets in, how long it lasts and how it can hurt. Agonists switch receptors on, antagonists block them, and narrow-margin drugs turn dangerous with small changes.",
        "sections": [
          {
            "type": "table",
            "title": "Key terms",
            "icon": "book-open",
            "stack": true,
            "columns": [
              "Term",
              "Means"
            ],
            "rows": [
              [
                "Agonist",
                "Binds and activates a receptor (epinephrine on adrenergic receptors)"
              ],
              [
                "Antagonist",
                "Binds and blocks (naloxone on opioid receptors)"
              ],
              [
                "Partial agonist",
                "Activates weakly and blocks full agonists (buprenorphine)"
              ],
              [
                "Half-life",
                "Time for the level to halve; steady state takes about 4–5 half-lives"
              ],
              [
                "Therapeutic index",
                "Gap between effective and toxic dose; narrow for digoxin, lithium, warfarin, phenytoin"
              ],
              [
                "First-pass effect",
                "The liver breaks down swallowed drugs before they circulate; IV, IO, IM, sublingual, intranasal and inhaled routes avoid it"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Receptors you use",
            "icon": "target",
            "stack": true,
            "columns": [
              "Receptor",
              "Effect",
              "Drug"
            ],
            "rows": [
              [
                "Alpha-1",
                "Vasoconstriction",
                "Epinephrine, norepinephrine"
              ],
              [
                "Beta-1",
                "Faster, stronger heart",
                "Epinephrine, dobutamine"
              ],
              [
                "Beta-2",
                "Bronchodilation",
                "Albuterol, epinephrine"
              ],
              [
                "Muscarinic (parasympathetic)",
                "Slow heart, secretions",
                "Blocked by atropine"
              ],
              [
                "Mu-opioid",
                "Analgesia, breathing depression",
                "Fentanyl, morphine; blocked by naloxone"
              ],
              [
                "GABA-A",
                "Sedation, stops seizures",
                "Midazolam, diazepam"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Drug names",
            "icon": "tag",
            "items": [
              "Chemical: the molecule",
              "Generic: the official name – use it (exams and safe practice)",
              "Trade or brand: the maker's name (Narcan, EpiPen)"
            ]
          },
          {
            "type": "table",
            "title": "Controlled drug schedules (US)",
            "icon": "shield",
            "stack": true,
            "columns": [
              "Schedule",
              "Examples"
            ],
            "rows": [
              [
                "I",
                "No accepted medical use: heroin"
              ],
              [
                "II",
                "High abuse potential: morphine, fentanyl, oxycodone, codeine alone"
              ],
              [
                "III",
                "Ketamine, codeine combinations (with acetaminophen)"
              ],
              [
                "IV",
                "Midazolam, diazepam, lorazepam"
              ],
              [
                "V",
                "Low-dose codeine cough mixtures"
              ]
            ],
            "notes": [
              "Other countries use their own schedules; the principle – tighter control for higher abuse risk – is the same."
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Rhythm",
                "items": [
                  {
                    "ecg": "chb",
                    "label": "Complete heart block",
                    "sub": "Narrow-margin drugs (digoxin, beta-blockers) can cause it.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Medication index",
                    "sub": "Home medicines and classes",
                    "href": "../pages/med-index.html",
                    "icon": "pill"
                  },
                  {
                    "label": "Drug index",
                    "sub": "Emergency drugs",
                    "href": "../pages/drug-index.html",
                    "icon": "book-open"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Most important instruction for nitroglycerin tablets:",
          "options": [
            "Let it dissolve under the tongue; don't swallow",
            "Swallow with water",
            "Crush in food",
            "Hold between cheek and gum and chew"
          ],
          "correct": 0,
          "explanation": "Sublingual absorption avoids the first-pass effect."
        },
        {
          "q": "Older man on warfarin and digoxin with new confusion and nausea. Most relevant drug feature?",
          "options": [
            "Both have a narrow therapeutic index",
            "Both are controlled drugs",
            "Both are beta-blockers",
            "Both are cleared only by the kidneys"
          ],
          "correct": 0,
          "explanation": "Small changes cause toxicity."
        },
        {
          "q": "Anaphylaxis with stridor and SBP 82: first-line drug and mechanism?",
          "options": [
            "Epinephrine IM: alpha (vessels) and beta (heart, bronchi) agonist",
            "Diphenhydramine: antihistamine",
            "Albuterol: beta-2 only",
            "Dexamethasone: slow anti-inflammatory"
          ],
          "correct": 0,
          "explanation": "Treats every part of the reaction."
        },
        {
          "q": "Naloxone is best described as:",
          "options": [
            "A competitive mu-opioid antagonist that displaces opioids",
            "A partial agonist",
            "A permanent receptor blocker",
            "A kappa agonist"
          ],
          "correct": 0,
          "explanation": "It wears off sooner than many opioids."
        },
        {
          "q": "An agonist:",
          "options": [
            "Binds and activates a receptor",
            "Binds and blocks",
            "Destroys receptors",
            "Speeds metabolism"
          ],
          "correct": 0,
          "explanation": "Epinephrine is an agonist."
        },
        {
          "q": "Steady state after regular dosing takes about:",
          "options": [
            "4–5 half-lives",
            "1 half-life",
            "10 half-lives",
            "24 hours always"
          ],
          "correct": 0,
          "explanation": "Elimination then equals intake."
        },
        {
          "q": "Which route is affected by the first-pass effect?",
          "options": [
            "Oral (swallowed)",
            "IV",
            "Sublingual",
            "Inhaled"
          ],
          "correct": 0,
          "explanation": "The liver acts before the drug circulates."
        },
        {
          "q": "Albuterol mainly stimulates:",
          "options": [
            "Beta-2 receptors",
            "Alpha-1",
            "Muscarinic",
            "Mu-opioid"
          ],
          "correct": 0,
          "explanation": "Bronchodilation; tachycardia is a side effect."
        },
        {
          "q": "Atropine works by:",
          "options": [
            "Blocking muscarinic (parasympathetic) receptors",
            "Stimulating beta-1",
            "Blocking opioid receptors",
            "Stimulating GABA"
          ],
          "correct": 0,
          "explanation": "Speeds a vagal bradycardia, dries secretions."
        },
        {
          "q": "Which name should you use for drugs?",
          "options": [
            "Generic name",
            "Brand name",
            "Chemical name",
            "Street name"
          ],
          "correct": 0,
          "explanation": "Generic names are standard and safer."
        }
      ],
      "flashcards": [
        {
          "question": "Three drug names",
          "answer": "Chemical (molecule), generic (official), trade or brand (manufacturer). Use generic names.",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "Agonist vs antagonist",
          "answer": "Agonist binds and activates (epinephrine). Antagonist binds and blocks (naloxone).",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "ADME",
          "answer": "Absorption, Distribution, Metabolism, Excretion: what the body does to a drug.",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "First-pass effect",
          "answer": "Liver breakdown of swallowed drugs before they circulate. Avoided by IV, IO, IM, sublingual, intranasal, inhaled and (partly) rectal routes.",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "Steady state",
          "answer": "About 4–5 half-lives of regular dosing.",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "Narrow therapeutic index",
          "answer": "Toxic dose close to effective dose: digoxin, lithium, warfarin, phenytoin, theophylline.",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "US drug schedules",
          "answer": "I: heroin. II: morphine, fentanyl, oxycodone, codeine alone. III: ketamine, codeine combinations. IV: benzodiazepines. V: low-dose codeine mixtures.",
          "category": "Principles of Pharmacology & Drug Classes"
        },
        {
          "question": "Nitroglycerin",
          "answer": "Ischaemic chest pain: 0.4 mg sublingual every 5 minutes, up to 3. Not if SBP below 90 mmHg, sildenafil or vardenafil within 24 hours, tadalafil within 48 hours; caution in RV infarction.",
          "category": "Principles of Pharmacology & Drug Classes"
        }
      ],
      "critical": [
        {
          "id": "crit_9_1_1",
          "scenario": "Nursing home: 80-year-old on digoxin, warfarin and furosemide, vomiting for 2 days, confused, HR 42 irregular. The nurse asks if she should give tonight's digoxin.",
          "question": "Response and management?",
          "options": [
            {
              "t": "No: suspect digoxin toxicity (dehydration raises levels). Monitor, IV access, fluids per protocol, 12-lead, transport",
              "f": "Correct."
            },
            {
              "t": "Give the digoxin: she missed doses",
              "f": "The picture is toxicity."
            },
            {
              "t": "Give atropine and leave her",
              "f": "She needs hospital."
            },
            {
              "t": "Stop the warfarin only",
              "f": "Digoxin is the problem now."
            }
          ],
          "correct": 0,
          "explanation": "Narrow-margin drugs plus dehydration and diuretics are a classic combination.",
          "kpi": "Recognizes narrow therapeutic index drug toxicity"
        },
        {
          "id": "crit_9_1_2",
          "scenario": "Inferior STEMI: after one nitroglycerin his BP falls from 148/92 to 78/50 and he feels faint. Right-sided ECG shows ST elevation in V4R.",
          "question": "Cause and next step?",
          "options": [
            {
              "t": "Right ventricular infarction – preload-dependent; stop nitrates, lie flat, fluid bolus per protocol, pre-alert",
              "f": "Correct."
            },
            {
              "t": "Give more nitroglycerin",
              "f": "Worsens hypotension."
            },
            {
              "t": "Morphine",
              "f": "Also lowers preload."
            },
            {
              "t": "Normal response; ignore",
              "f": "He's in shock."
            }
          ],
          "correct": 0,
          "explanation": "Check V4R in every inferior STEMI before nitrates.",
          "kpi": "Recognizes nitrate-induced hypotension in RV infarction"
        },
        {
          "id": "crit_9_1_3",
          "scenario": "24-year-old unresponsive, RR 4, pinpoint pupils; bottles of oxycodone and alprazolam nearby.",
          "question": "Pharmacological approach?",
          "options": [
            {
              "t": "Ventilate first, then naloxone titrated to breathing (not to waking); no flumazenil",
              "f": "Correct."
            },
            {
              "t": "Flumazenil for the alprazolam",
              "f": "Can cause seizures in chronic users."
            },
            {
              "t": "Large naloxone dose to wake him fully",
              "f": "Causes violent withdrawal."
            },
            {
              "t": "Nothing until hospital",
              "f": "He needs breathing support now."
            }
          ],
          "correct": 0,
          "explanation": "Benzodiazepines add to breathing depression; support ventilation.",
          "kpi": "Applies receptor pharmacology to a mixed overdose"
        }
      ]
    },
    {
      "id": "c9s2",
      "shortTitle": "9.2 Routes of Administration",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Routes of Administration",
        "lead": "Choose the route that gets the drug where it's needed fast enough, with the least risk. IV and IO are fastest; intranasal and IM avoid needles in veins and are often good enough; oral is slowest and needs a safe airway.",
        "sections": [
          {
            "type": "table",
            "title": "Routes compared",
            "icon": "syringe",
            "stack": true,
            "columns": [
              "Route",
              "Onset",
              "Notes"
            ],
            "rows": [
              [
                "IV / IO",
                "Seconds to a minute",
                "Same drugs and doses by either. IO if IV fails in a critical patient"
              ],
              [
                "Inhaled / nebulised",
                "Minutes",
                "Albuterol, ipratropium; needs adequate breathing"
              ],
              [
                "Intranasal",
                "Minutes",
                "Atomiser, half in each nostril, about 1 mL per nostril at most: naloxone, midazolam, fentanyl"
              ],
              [
                "IM",
                "5–10 minutes",
                "Outer thigh for epinephrine; works in shock better than SC"
              ],
              [
                "Sublingual",
                "1–3 minutes",
                "Nitroglycerin: dissolve under the tongue"
              ],
              [
                "Oral",
                "30 minutes or more",
                "Aspirin (chewed), oral glucose: only if alert and swallowing"
              ],
              [
                "Transdermal",
                "Hours",
                "Remove nitroglycerin or fentanyl patches if the patient becomes unstable (gloves)"
              ]
            ]
          },
          {
            "type": "table",
            "title": "IM sites (adult)",
            "icon": "target",
            "stack": true,
            "columns": [
              "Site",
              "Volume",
              "Use"
            ],
            "rows": [
              [
                "Vastus lateralis (outer thigh)",
                "Up to 5 mL",
                "Epinephrine; all ages; easiest in emergencies"
              ],
              [
                "Ventrogluteal",
                "Up to 3 mL",
                "Larger volumes; away from the sciatic nerve"
              ],
              [
                "Deltoid",
                "Up to 1 mL",
                "Small volumes, vaccines"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Vascular access in cardiac arrest",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Try IV first",
                "text": "A peripheral IV is a reasonable first choice (AHA 2025).",
                "level": "ALS"
              },
              {
                "title": "IO if IV fails",
                "text": "Tibia or humerus; flush; same doses. Don't keep trying veins while drugs are delayed.",
                "level": "ALS"
              },
              {
                "title": "Not via the tube",
                "text": "Endotracheal drugs are no longer recommended in adults (AHA 2025): levels are unpredictable. If IV and IO both fail, central access may be considered at hospital."
              }
            ]
          },
          {
            "type": "list",
            "title": "Cannula sizes",
            "icon": "ruler",
            "items": [
              "14–16 G: trauma and rapid fluids",
              "18 G: most adult emergencies",
              "20–22 G: routine and small veins",
              "24 G: infants",
              "Smaller gauge number = bigger needle = faster flow"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Use it",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Doses and volumes by route",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "20 kg child seizing for 10 minutes, no IV. Best route for midazolam?",
          "options": [
            "Intranasal with an atomiser, half in each nostril",
            "Oral",
            "Deltoid IM, slow onset",
            "Subcutaneous"
          ],
          "correct": 0,
          "explanation": "Rapid, needle-free; IM thigh is the alternative."
        },
        {
          "q": "Cardiac arrest, two failed IV attempts. Next?",
          "options": [
            "IO access now",
            "Keep trying IVs",
            "All drugs via the ET tube",
            "No access: transport"
          ],
          "correct": 0,
          "explanation": "IO gives the same drugs and doses."
        },
        {
          "q": "Patient sprays nitroglycerin on top of the tongue and swallows straight away. You:",
          "options": [
            "Explain it must be sprayed under the tongue and not swallowed",
            "Fine: any mouth contact works",
            "Hold it 10 seconds then swallow",
            "Inhale it instead"
          ],
          "correct": 0,
          "explanation": "Swallowed nitroglycerin is mostly destroyed by the liver."
        },
        {
          "q": "Best IM site for a 3 mL injection in an adult:",
          "options": [
            "Vastus lateralis or ventrogluteal",
            "Deltoid",
            "Dorsogluteal near the sciatic nerve",
            "Forearm"
          ],
          "correct": 0,
          "explanation": "Deltoid takes up to about 1 mL."
        },
        {
          "q": "Fastest routes:",
          "options": [
            "IV and IO",
            "IM",
            "Oral",
            "Transdermal"
          ],
          "correct": 0,
          "explanation": "Directly into the circulation."
        },
        {
          "q": "Why is aspirin chewed?",
          "options": [
            "Faster absorption and antiplatelet effect",
            "It tastes better",
            "To avoid the stomach completely",
            "Chewing makes it IV"
          ],
          "correct": 0,
          "explanation": "Give 162–325 mg chewed."
        },
        {
          "q": "Maximum practical intranasal volume per nostril:",
          "options": [
            "About 1 mL",
            "5 mL",
            "10 mL",
            "Unlimited"
          ],
          "correct": 0,
          "explanation": "More runs out or down the throat."
        },
        {
          "q": "Hypotensive patient wearing a nitroglycerin patch. You:",
          "options": [
            "Remove it with gloves on",
            "Leave it",
            "Add a second patch",
            "Cover it with tape"
          ],
          "correct": 0,
          "explanation": "Patches keep lowering blood pressure."
        },
        {
          "q": "Which cannula flows fastest?",
          "options": [
            "14 G",
            "18 G",
            "20 G",
            "24 G"
          ],
          "correct": 0,
          "explanation": "Smaller gauge number, larger lumen."
        },
        {
          "q": "Oral glucose is only for patients who:",
          "options": [
            "Are alert enough to swallow and protect their airway",
            "Are unconscious",
            "Are seizing",
            "Have no IV"
          ],
          "correct": 0,
          "explanation": "Otherwise glucagon IM or IV dextrose."
        }
      ],
      "flashcards": [
        {
          "question": "Fastest routes",
          "answer": "IV and IO: seconds to a minute.",
          "category": "Routes of Administration"
        },
        {
          "question": "IO access",
          "answer": "When IV fails or is too slow in a critical patient. Every IV drug can go IO at the same dose.",
          "category": "Routes of Administration"
        },
        {
          "question": "IM sites",
          "answer": "Vastus lateralis (up to 5 mL; epinephrine), ventrogluteal (up to 3 mL), deltoid (up to 1 mL).",
          "category": "Routes of Administration"
        },
        {
          "question": "Chewed aspirin",
          "answer": "Chewing speeds absorption and the antiplatelet effect.",
          "category": "Routes of Administration"
        },
        {
          "question": "Cannula sizes",
          "answer": "14–16 G trauma; 18 G most emergencies; 20–22 G routine; 24 G infants. Smaller number = bigger needle.",
          "category": "Routes of Administration"
        },
        {
          "question": "Routes that avoid the first-pass effect",
          "answer": "IV, IO, IM, intranasal, sublingual, inhaled, transdermal, and partly rectal. Oral does not.",
          "category": "Routes of Administration"
        },
        {
          "question": "Intranasal technique",
          "answer": "Atomiser on a syringe; half the dose in each nostril, about 1 mL per nostril at most. Naloxone, midazolam, fentanyl.",
          "category": "Routes of Administration"
        },
        {
          "question": "Transdermal patches in unstable patients",
          "answer": "Find and remove nitroglycerin or fentanyl patches (with gloves) if the patient becomes hypotensive or arrests.",
          "category": "Routes of Administration"
        }
      ],
      "critical": [
        {
          "id": "crit_9_2_1",
          "scenario": "Anaphylaxis after shrimp: stridor, wheeze, swollen lips, BP 84/50.",
          "question": "Which IM site and why IM?",
          "options": [
            {
              "t": "Outer mid-thigh (vastus lateralis): fast, reliable absorption even in shock; IM is quicker to give and safer than IV epinephrine",
              "f": "Correct."
            },
            {
              "t": "Deltoid: easiest",
              "f": "Slower absorption."
            },
            {
              "t": "Subcutaneous: safer",
              "f": "Absorption is too slow in shock."
            },
            {
              "t": "IV bolus 1 mg",
              "f": "Arrest dose: causes arrhythmias."
            }
          ],
          "correct": 0,
          "explanation": "Repeat after 5 minutes if no improvement.",
          "kpi": "Selects correct route and site for anaphylaxis epinephrine"
        },
        {
          "id": "crit_9_2_2",
          "scenario": "Cardiac arrest: two failed IV attempts, 2 minutes in, no drugs given.",
          "question": "Next step for access?",
          "options": [
            {
              "t": "IO now (tibia or humerus) and give epinephrine",
              "f": "Correct."
            },
            {
              "t": "Third IV attempt",
              "f": "Delays drugs."
            },
            {
              "t": "Endotracheal epinephrine",
              "f": "No longer recommended in adult arrest: unpredictable absorption."
            },
            {
              "t": "Skip drugs",
              "f": "Epinephrine is indicated."
            }
          ],
          "correct": 0,
          "explanation": "Never interrupt compressions for access.",
          "kpi": "Moves promptly to IO access in cardiac arrest"
        },
        {
          "id": "crit_9_2_3",
          "scenario": "Suspected opioid overdose, RR 4–6, pinpoint pupils, no IV, you have naloxone 2 mg/2 mL and an atomiser.",
          "question": "Route and technique?",
          "options": [
            {
              "t": "Ventilate, then intranasal naloxone: 1 mL in each nostril, titrate to breathing",
              "f": "Correct."
            },
            {
              "t": "All 2 mL in one nostril",
              "f": "Runs out; poor absorption."
            },
            {
              "t": "Oral naloxone",
              "f": "Destroyed by first-pass effect."
            },
            {
              "t": "Wait for IV",
              "f": "Delays treatment."
            }
          ],
          "correct": 0,
          "explanation": "Needle-free, rapid, safe for the crew.",
          "kpi": "Administers intranasal naloxone correctly"
        }
      ]
    },
    {
      "id": "c9s3",
      "shortTitle": "9.3 Rights of Medication Administration",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Rights of Medication Administration",
        "lead": "Every dose passes the same checks: right patient, drug, dose, route and time – plus a reason to give it, an assessment before, a reassessment after, and a record. Read the label three times, say it aloud, and stop if anything doesn't fit.",
        "sections": [
          {
            "type": "groups",
            "title": "The rights",
            "icon": "circle-check-big",
            "groups": [
              {
                "title": "Original five",
                "items": [
                  "Right patient (2 identifiers)",
                  "Right drug",
                  "Right dose",
                  "Right route",
                  "Right time"
                ]
              },
              {
                "title": "Added",
                "items": [
                  "Right indication",
                  "Right assessment before",
                  "Right evaluation after",
                  "Right documentation",
                  "Right to refuse"
                ]
              }
            ]
          },
          {
            "type": "steps",
            "title": "Three checks",
            "icon": "eye",
            "steps": [
              {
                "title": "1. Taking it out",
                "text": "Name, concentration, dose, expiry."
              },
              {
                "title": "2. Drawing it up",
                "text": "Same again; calculate the volume."
              },
              {
                "title": "3. Before giving",
                "text": "Read it aloud to your partner (closed loop); check the patient and allergies."
              }
            ]
          },
          {
            "type": "table",
            "title": "Check before you give",
            "icon": "clipboard-list",
            "stack": true,
            "columns": [
              "Drug",
              "Check first"
            ],
            "rows": [
              [
                "Nitroglycerin",
                "SBP 90 mmHg or more; no sildenafil or vardenafil in 24 hours, no tadalafil in 48 hours; right-sided ECG in inferior STEMI"
              ],
              [
                "Aspirin",
                "No allergy or active bleeding"
              ],
              [
                "Albuterol",
                "Wheeze, heart rate, SpO₂"
              ],
              [
                "Glucagon or dextrose",
                "Measured glucose below 70 mg/dL"
              ],
              [
                "Naloxone",
                "Breathing depression, not just drowsiness"
              ],
              [
                "Epinephrine",
                "Concentration in mg/mL: 1 mg/mL is IM; 0.1 mg/mL is IV in arrest"
              ]
            ],
            "notes": [
              "Ratio labels (1:1000, 1:10,000) are being replaced by mg/mL because they cause tenfold errors."
            ]
          },
          {
            "type": "list",
            "title": "After you give it",
            "icon": "activity",
            "items": [
              "Reassess effect and side effects: vital signs, symptoms, SpO₂",
              "Document drug, dose, route, time, who gave it, response – after giving, not before",
              "Tell the receiving team"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Use it",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Check doses and volumes",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Correct use of the three-check system for albuterol:",
          "options": [
            "Check when taking it out, when preparing it, and before giving it",
            "Once when you pick it up",
            "Only for unfamiliar drugs",
            "Your partner reads it once"
          ],
          "correct": 0,
          "explanation": "Each check covers name, concentration, dose and expiry."
        },
        {
          "q": "Chest pain, SBP 96, took sildenafil 12 hours ago. Nitroglycerin?",
          "options": [
            "No: sildenafil within 24 hours contraindicates nitrates",
            "Yes, full dose",
            "Half dose",
            "Yes, with close monitoring"
          ],
          "correct": 0,
          "explanation": "Tadalafil: within 48 hours."
        },
        {
          "q": "A nurse hands you a pre-filled syringe 'for Mrs Johnson's seizures, give it IM'. You:",
          "options": [
            "Confirm the patient with 2 identifiers, check she is seizing, verify drug, dose and route yourself",
            "Give it as asked",
            "Give a reduced dose",
            "Give it while calling medical direction"
          ],
          "correct": 0,
          "explanation": "You are responsible for every drug you give."
        },
        {
          "q": "After nebulised albuterol, most important?",
          "options": [
            "Reassess breath sounds, work of breathing, SpO₂ and heart rate",
            "Check glucose",
            "12-lead for ST elevation",
            "Document before reassessing"
          ],
          "correct": 0,
          "explanation": "Right evaluation."
        },
        {
          "q": "How many identifiers should confirm a patient's identity?",
          "options": [
            "At least 2",
            "1",
            "None if they're alone",
            "Only the room number"
          ],
          "correct": 0,
          "explanation": "Name and date of birth, or ID band."
        },
        {
          "q": "Epinephrine 1 mg/mL is used for:",
          "options": [
            "IM anaphylaxis",
            "IV push in cardiac arrest",
            "Nebulised asthma only",
            "Never"
          ],
          "correct": 0,
          "explanation": "0.1 mg/mL is the arrest concentration."
        },
        {
          "q": "Glucagon should be given only after:",
          "options": [
            "Measuring a glucose below 70 mg/dL",
            "Any confusion",
            "Any diabetic history",
            "A meal"
          ],
          "correct": 0,
          "explanation": "Right indication."
        },
        {
          "q": "When do you document a drug?",
          "options": [
            "After giving it",
            "Before giving it",
            "At the end of the shift",
            "Only if asked"
          ],
          "correct": 0,
          "explanation": "Pre-charting causes double doses."
        },
        {
          "q": "A capable patient refuses aspirin. You:",
          "options": [
            "Explain the risk, respect the decision and document it",
            "Give it anyway",
            "Leave without documenting",
            "Call police"
          ],
          "correct": 0,
          "explanation": "Right to refuse."
        },
        {
          "q": "Tadalafil was taken 30 hours ago. Nitroglycerin is:",
          "options": [
            "Contraindicated: within 48 hours",
            "Fine after 24 hours",
            "Safe at half dose",
            "Only a problem with sildenafil"
          ],
          "correct": 0,
          "explanation": "Tadalafil lasts longer."
        }
      ],
      "flashcards": [
        {
          "question": "Five original rights",
          "answer": "Right patient, drug, dose, route, time.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "Expanded rights",
          "answer": "Right indication, right assessment before, right evaluation after, right documentation, right to refuse.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "Three-check system",
          "answer": "When taking it out, when preparing it, immediately before giving it: name, concentration, dose, expiry. Read aloud.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "Identifying the patient",
          "answer": "At least 2 identifiers: ID band, name and date of birth, or a carer's confirmation. Never a room number.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "Checks before common drugs",
          "answer": "Nitroglycerin: SBP 90 mmHg or more, no PDE-5 inhibitor (24 hours sildenafil/vardenafil, 48 hours tadalafil). Albuterol: wheeze, HR, SpO₂. Glucagon/dextrose: glucose below 70 mg/dL.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "When to document",
          "answer": "After giving: drug, dose, route, time, who gave it and the response.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "Informed refusal of a drug",
          "answer": "Capacity, understanding of risks and benefits, documented with their reasons.",
          "category": "Rights of Medication Administration"
        },
        {
          "question": "Epinephrine concentrations",
          "answer": "1 mg/mL (old label 1:1000) for IM anaphylaxis. 0.1 mg/mL (old 1:10,000) for IV in arrest. Giving 1 mg/mL IV by mistake is a tenfold error.",
          "category": "Rights of Medication Administration"
        }
      ],
      "critical": [
        {
          "id": "crit_9_3_1",
          "scenario": "Nursing home, COPD flare. Your partner pulls out a nebule and starts to give it before you've identified the patient or listened to the chest.",
          "question": "Most appropriate response?",
          "options": [
            {
              "t": "Pause: confirm identity with 2 identifiers, check allergies, assess wheeze and vital signs, verify drug and dose aloud, then give and reassess",
              "f": "Correct."
            },
            {
              "t": "Let it go: it's albuterol",
              "f": "Every drug gets the checks."
            },
            {
              "t": "Give double to save time",
              "f": "Never."
            },
            {
              "t": "Refuse to treat",
              "f": "Treat safely."
            }
          ],
          "correct": 0,
          "explanation": "A few seconds of checks prevents most errors.",
          "kpi": "Applies the rights of medication administration under time pressure"
        },
        {
          "id": "crit_9_3_2",
          "scenario": "You plan fentanyl 50 mcg IV. Your partner hands you a 2 mL vial labelled 100 mcg/2 mL and you nearly draw up the whole vial.",
          "question": "What does this near miss teach?",
          "options": [
            {
              "t": "Read the concentration, not just the total: 100 mcg/2 mL is 50 mcg/mL, so 50 mcg is 1 mL. Read labels aloud and double-check calculations",
              "f": "Correct."
            },
            {
              "t": "Always give the whole vial",
              "f": "That's a double dose here."
            },
            {
              "t": "Concentration doesn't matter",
              "f": "It decides the volume."
            },
            {
              "t": "Don't mention it",
              "f": "Near misses should be reported and learned from."
            }
          ],
          "correct": 0,
          "explanation": "Volume = dose ÷ concentration.",
          "kpi": "Verifies concentration and calculates volume correctly"
        },
        {
          "id": "crit_9_3_3",
          "scenario": "60-year-old with typical chest pain, capable, refuses aspirin because 'it upsets my stomach'.",
          "question": "Management?",
          "options": [
            {
              "t": "Explain the benefit briefly, respect his refusal, document his capacity and reasons, continue other care",
              "f": "Correct."
            },
            {
              "t": "Crush it into a drink",
              "f": "Deception is unethical."
            },
            {
              "t": "Insist until he agrees",
              "f": "Coercion."
            },
            {
              "t": "Refuse all further care",
              "f": "He refused one drug, not all care."
            }
          ],
          "correct": 0,
          "explanation": "Tell the hospital he hasn't had aspirin.",
          "kpi": "Manages an informed medication refusal"
        }
      ]
    },
    {
      "id": "c9s4",
      "shortTitle": "9.4 Dose & Simple Calculations",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Dose & Simple Calculations",
        "lead": "Most drug errors are maths errors. Convert to kilograms and the same units first, use one formula – what you want, divided by what you have, times what it's in – and check the answer makes sense before you draw it up.",
        "sections": [
          {
            "type": "steps",
            "title": "The formula",
            "icon": "hash",
            "steps": [
              {
                "title": "Units first",
                "text": "1 g = 1000 mg; 1 mg = 1000 mcg. Pounds ÷ 2.2 = kg."
              },
              {
                "title": "Weight-based dose",
                "text": "Dose = weight (kg) × dose per kg."
              },
              {
                "title": "Volume",
                "text": "Volume = dose wanted ÷ concentration (what you have per mL)."
              },
              {
                "title": "Sense check",
                "text": "Is the volume reasonable? A tiny or huge volume usually means a units or decimal error."
              }
            ]
          },
          {
            "type": "table",
            "title": "Worked examples",
            "icon": "list",
            "stack": true,
            "columns": [
              "Order",
              "Have",
              "Give"
            ],
            "rows": [
              [
                "Aspirin 324 mg",
                "81 mg tablets",
                "4 tablets"
              ],
              [
                "Fentanyl 100 mcg",
                "50 mcg/mL",
                "2 mL"
              ],
              [
                "Morphine 4 mg",
                "10 mg/mL",
                "0.4 mL"
              ],
              [
                "Epinephrine 1 mg IV (arrest)",
                "0.1 mg/mL",
                "10 mL"
              ],
              [
                "Midazolam 0.2 mg/kg IN, 8 kg infant",
                "5 mg/mL",
                "1.6 mg = 0.32 mL"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Drip rates",
            "icon": "droplet",
            "steps": [
              {
                "title": "Formula",
                "text": "Drops/min = volume (mL) × drop factor (drops/mL) ÷ time (minutes)."
              },
              {
                "title": "Example",
                "text": "500 mL over 4 hours with a 15 drops/mL set = 500 × 15 ÷ 240 ≈ 31 drops/min."
              },
              {
                "title": "Microdrip shortcut",
                "text": "With 60 drops/mL tubing, drops/min equals mL/hour."
              },
              {
                "title": "Sets",
                "text": "Macrodrip 10, 15 or 20 drops/mL; microdrip 60 drops/mL."
              }
            ]
          },
          {
            "type": "list",
            "title": "Children",
            "icon": "baby",
            "items": [
              "Use a measured or length-based weight; never guess",
              "Check against the maximum adult dose",
              "Small volumes: use a 1 mL syringe"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Use it",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Check your maths",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Order: aspirin 324 mg. You have 81 mg tablets. Give:",
          "options": [
            "4 tablets",
            "2 tablets",
            "3 tablets",
            "5 tablets"
          ],
          "correct": 0,
          "explanation": "324 ÷ 81 = 4."
        },
        {
          "q": "8 kg infant seizing: midazolam 0.2 mg/kg IN; vial 5 mg/mL. Volume?",
          "options": [
            "0.32 mL",
            "0.16 mL",
            "1.6 mL",
            "3.2 mL"
          ],
          "correct": 0,
          "explanation": "8 × 0.2 = 1.6 mg; 1.6 ÷ 5 = 0.32 mL."
        },
        {
          "q": "500 mL over 4 hours, 15 drops/mL set. Drip rate?",
          "options": [
            "About 31 drops/min",
            "21 drops/min",
            "42 drops/min",
            "125 drops/min"
          ],
          "correct": 0,
          "explanation": "500 × 15 ÷ 240."
        },
        {
          "q": "Arrest: epinephrine 1 mg IV. Which vial and volume?",
          "options": [
            "0.1 mg/mL, 10 mL",
            "1 mg/mL, 1 mL IV push",
            "1 mg/mL, 0.1 mL",
            "0.1 mg/mL, 1 mL"
          ],
          "correct": 0,
          "explanation": "Use the 0.1 mg/mL IV preparation."
        },
        {
          "q": "Fentanyl 100 mcg ordered; you have 50 mcg/mL. Give:",
          "options": [
            "2 mL",
            "0.5 mL",
            "5 mL",
            "1 mL"
          ],
          "correct": 0,
          "explanation": "100 ÷ 50."
        },
        {
          "q": "Morphine 4 mg ordered; you have 10 mg/mL. Give:",
          "options": [
            "0.4 mL",
            "4 mL",
            "0.04 mL",
            "2 mL"
          ],
          "correct": 0,
          "explanation": "4 ÷ 10."
        },
        {
          "q": "154 lb is:",
          "options": [
            "70 kg",
            "340 kg",
            "77 kg",
            "154 kg"
          ],
          "correct": 0,
          "explanation": "154 ÷ 2.2."
        },
        {
          "q": "40 lb child; drug 5 mg/kg. Dose?",
          "options": [
            "About 91 mg",
            "200 mg",
            "45 mg",
            "18 mg"
          ],
          "correct": 0,
          "explanation": "40 ÷ 2.2 = 18.2 kg; × 5."
        },
        {
          "q": "With 60 drops/mL tubing, 125 mL/hour is:",
          "options": [
            "125 drops/min",
            "60 drops/min",
            "250 drops/min",
            "31 drops/min"
          ],
          "correct": 0,
          "explanation": "Microdrip shortcut."
        },
        {
          "q": "1 mg equals:",
          "options": [
            "1000 mcg",
            "100 mcg",
            "10 mcg",
            "0.1 mcg"
          ],
          "correct": 0,
          "explanation": "1 g = 1000 mg."
        }
      ],
      "flashcards": [
        {
          "question": "Dose formula",
          "answer": "Volume = dose wanted ÷ concentration. (What you want ÷ what you have × what it's in.)",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "Metric conversions",
          "answer": "1 g = 1000 mg; 1 mg = 1000 mcg; 1 g = 1,000,000 mcg.",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "Pounds to kilograms",
          "answer": "Divide by 2.2: 154 lb = 70 kg.",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "Drip sets",
          "answer": "Macrodrip 10, 15 or 20 drops/mL; microdrip 60 drops/mL.",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "Microdrip shortcut",
          "answer": "With 60 drops/mL tubing, drops/min = mL/hour: 125 mL/hour = 125 drops/min.",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "Fentanyl 100 mcg from 50 mcg/mL",
          "answer": "100 ÷ 50 = 2 mL.",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "40 lb child, 5 mg/kg",
          "answer": "40 ÷ 2.2 = 18.2 kg; × 5 = about 91 mg. Always convert to kg first.",
          "category": "Dose & Simple Calculations"
        },
        {
          "question": "Length-based tape",
          "answer": "Estimates a child's weight from length when no scale is available, with pre-calculated doses.",
          "category": "Dose & Simple Calculations"
        }
      ],
      "critical": [
        {
          "id": "crit_9_4_1",
          "scenario": "5-year-old seizing for 8 minutes; mother says he weighs 40 lb. Protocol: midazolam 0.2 mg/kg IN (maximum 10 mg); vial 5 mg/mL.",
          "question": "Dose and volume?",
          "options": [
            {
              "t": "40 ÷ 2.2 ≈ 18 kg; 18 × 0.2 = 3.6 mg; 3.6 ÷ 5 = 0.72 mL, split between nostrils",
              "f": "Correct."
            },
            {
              "t": "40 × 0.2 = 8 mg",
              "f": "You used pounds."
            },
            {
              "t": "0.36 mL",
              "f": "That's half the dose."
            },
            {
              "t": "10 mg for every child",
              "f": "Weight-based below the maximum."
            }
          ],
          "correct": 0,
          "explanation": "Confirm the weight against a length-based tape.",
          "kpi": "Calculates a weight-based pediatric dose correctly"
        },
        {
          "id": "crit_9_4_2",
          "scenario": "70 kg adult, dehydrated and hypotensive. Protocol: 20 mL/kg bolus. 15 drops/mL set; over 1 hour.",
          "question": "Volume and drip rate?",
          "options": [
            {
              "t": "70 × 20 = 1400 mL; 1400 × 15 ÷ 60 = 350 drops/min – too fast to count; run wide open or use a pressure bag and reassess",
              "f": "Correct."
            },
            {
              "t": "140 mL; 35 drops/min",
              "f": "Decimal error."
            },
            {
              "t": "1400 mL; 23 drops/min",
              "f": "Wrong time unit."
            },
            {
              "t": "No calculation needed",
              "f": "Know the volume you're giving."
            }
          ],
          "correct": 0,
          "explanation": "Reassess lungs and blood pressure after each portion.",
          "kpi": "Calculates fluid volume and infusion rate"
        },
        {
          "id": "crit_9_4_3",
          "scenario": "Your partner asks for ondansetron 4 mg. New vials are labelled 4 mg/2 mL; you drew up 4 mL thinking it was 1 mg/mL.",
          "question": "What failed and how do you prevent it?",
          "options": [
            {
              "t": "Concentration was misread (it's 2 mg/mL, so 4 mg is 2 mL). Read the concentration at every check, say it aloud, recalculate, and report the near miss",
              "f": "Correct."
            },
            {
              "t": "Nothing failed: give it",
              "f": "That's a double dose."
            },
            {
              "t": "Blame the supplier",
              "f": "Labels change; checks catch it."
            },
            {
              "t": "Give half and hope",
              "f": "Recalculate properly."
            }
          ],
          "correct": 0,
          "explanation": "Changes in stock are a known error trap: tell the whole team.",
          "kpi": "Identifies concentration-reading errors and prevention strategies"
        }
      ]
    },
    {
      "id": "c9s5",
      "shortTitle": "9.5 Emergency Drug Formulary",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Emergency Drug Formulary",
        "lead": "The core prehospital drugs on one page: what they're for, the usual adult dose and the one thing that stops you giving them. Your protocol sets the exact doses and who may give them; check the full formulary for children.",
        "sections": [
          {
            "type": "doses",
            "title": "BLS drugs",
            "icon": "pill",
            "rows": [
              {
                "drug": "Oxygen",
                "dose": "To SpO₂ 94–98%",
                "note": "COPD at risk of CO₂ retention: 88–92%",
                "level": "BLS"
              },
              {
                "drug": "Aspirin",
                "dose": "162–325 mg chewed",
                "note": "Suspected ACS. Not with allergy or active bleeding",
                "level": "BLS"
              },
              {
                "drug": "Nitroglycerin",
                "dose": "0.4 mg sublingual every 5 minutes, up to 3",
                "note": "Not if SBP below 90 mmHg or PDE-5 inhibitor (24 hours sildenafil, 48 hours tadalafil)",
                "level": "BLS"
              },
              {
                "drug": "Oral glucose",
                "dose": "15 g",
                "note": "Only if alert and able to swallow",
                "level": "BLS"
              },
              {
                "drug": "Epinephrine auto-injector",
                "dose": "0.3 mg IM (0.15 mg small child)",
                "note": "Anaphylaxis; outer thigh; repeat after 5 minutes",
                "level": "BLS"
              },
              {
                "drug": "Naloxone",
                "dose": "4 mg intranasal spray, or 0.4–2 mg IM/IN",
                "note": "Opioid breathing depression; titrate to breathing",
                "level": "BLS"
              },
              {
                "drug": "Albuterol",
                "dose": "2.5–5 mg nebulised",
                "note": "Repeat every 20 minutes up to 3; tachycardia, tremor",
                "level": "BLS"
              }
            ]
          },
          {
            "type": "doses",
            "title": "ALS drugs",
            "icon": "syringe",
            "rows": [
              {
                "drug": "Epinephrine (arrest)",
                "dose": "1 mg IV/IO (0.1 mg/mL)",
                "note": "Every 3–5 minutes",
                "level": "ALS"
              },
              {
                "drug": "Epinephrine (anaphylaxis)",
                "dose": "0.01 mg/kg IM, maximum 0.5 mg (1 mg/mL)",
                "note": "Repeat after 5 minutes; infusion for refractory shock",
                "level": "ALS"
              },
              {
                "drug": "Amiodarone",
                "dose": "300 mg IV/IO, then 150 mg",
                "note": "Shock-refractory VF or pulseless VT",
                "level": "ALS"
              },
              {
                "drug": "Adenosine",
                "dose": "6 mg rapid IV, then 12 mg",
                "note": "Stable regular narrow-complex tachycardia",
                "level": "ALS"
              },
              {
                "drug": "Atropine",
                "dose": "1 mg IV every 3–5 minutes, maximum 3 mg",
                "note": "Symptomatic bradycardia; not used in arrest",
                "level": "ALS"
              },
              {
                "drug": "Glucagon",
                "dose": "1 mg IM (0.5 mg if under 25 kg)",
                "note": "Hypoglycaemia without IV; needs liver glycogen",
                "level": "ALS"
              },
              {
                "drug": "Dextrose 10%",
                "dose": "Adult 25 g (250 mL), titrated; child 5 mL/kg",
                "note": "Hypoglycaemia below 70 mg/dL",
                "level": "ALS"
              },
              {
                "drug": "Midazolam",
                "dose": "10 mg IM (over 40 kg) or 0.2 mg/kg IN (maximum 10 mg)",
                "note": "Seizure lasting 5 minutes or more",
                "level": "ALS"
              },
              {
                "drug": "Fentanyl",
                "dose": "1 mcg/kg IV/IN (maximum 100 mcg)",
                "note": "Short-acting; watch breathing",
                "level": "ALS"
              },
              {
                "drug": "Ketamine (analgesia)",
                "dose": "0.1–0.3 mg/kg IV",
                "note": "Opioid-sparing; little effect on breathing",
                "level": "ALS"
              },
              {
                "drug": "Ondansetron",
                "dose": "4 mg IV/IM/ODT",
                "note": "Caution with long QT",
                "level": "ALS"
              }
            ]
          },
          {
            "type": "list",
            "title": "Don't forget",
            "icon": "triangle-alert",
            "items": [
              "Naloxone lasts 30–90 minutes: shorter than many opioids – watch for re-sedation",
              "Atropine was removed from arrest algorithms",
              "Glucagon works poorly in starvation, alcohol use and liver disease",
              "Fentanyl lasts 30–60 minutes; morphine 3–5 hours"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Rhythms",
                "items": [
                  {
                    "ecg": "svt",
                    "label": "SVT",
                    "sub": "Adenosine 6 mg rapid IV, then 12 mg.",
                    "lead": "II"
                  },
                  {
                    "ecg": "sbrady",
                    "label": "Symptomatic bradycardia",
                    "sub": "Atropine 1 mg, up to 3 mg.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Adult and pediatric doses",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  },
                  {
                    "label": "Drug index",
                    "sub": "Full formulary",
                    "href": "../pages/drug-index.html",
                    "icon": "book-open"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Chest pain, BP 132/84; took sildenafil yesterday evening (14 hours ago). Drugs?",
          "options": [
            "Aspirin chewed; withhold nitroglycerin",
            "Aspirin and nitroglycerin",
            "Oxygen only",
            "Nitroglycerin only"
          ],
          "correct": 0,
          "explanation": "Sildenafil within 24 hours contraindicates nitrates."
        },
        {
          "q": "Hives, wheeze, facial swelling, BP 88/54 after shellfish. First drug?",
          "options": [
            "Epinephrine IM into the outer thigh",
            "Albuterol",
            "Diphenhydramine",
            "Oxygen only"
          ],
          "correct": 0,
          "explanation": "Anaphylaxis: epinephrine first."
        },
        {
          "q": "After intranasal naloxone a heroin user wakes vomiting, agitated and sweating. This is:",
          "options": [
            "Precipitated withdrawal: support, protect airway, de-escalate",
            "A seizure",
            "An allergy to naloxone",
            "Stimulant toxicity"
          ],
          "correct": 0,
          "explanation": "Titrate naloxone to breathing next time."
        },
        {
          "q": "7-year-old (23 kg) diabetic, confused, glucose 'LOW', no IV. First?",
          "options": [
            "Glucagon 0.5 mg IM",
            "Oral glucose while confused",
            "Wait for hospital",
            "Dextrose orally"
          ],
          "correct": 0,
          "explanation": "Under 25 kg: 0.5 mg. With IV: D10 5 mL/kg."
        },
        {
          "q": "Adult dose of aspirin in suspected ACS:",
          "options": [
            "162–325 mg chewed",
            "1 g",
            "75 mg swallowed",
            "650 mg IV"
          ],
          "correct": 0,
          "explanation": "Chewed for speed."
        },
        {
          "q": "Amiodarone first dose in refractory VF:",
          "options": [
            "300 mg IV/IO",
            "150 mg",
            "1 mg",
            "6 mg"
          ],
          "correct": 0,
          "explanation": "Second dose 150 mg."
        },
        {
          "q": "Atropine dose for symptomatic bradycardia:",
          "options": [
            "1 mg IV every 3–5 minutes, maximum 3 mg",
            "0.5 mg once",
            "3 mg IM",
            "6 mg rapid push"
          ],
          "correct": 0,
          "explanation": "Not used in cardiac arrest."
        },
        {
          "q": "Adenosine first dose:",
          "options": [
            "6 mg rapid IV push with flush",
            "12 mg slow",
            "1 mg/kg",
            "0.5 mg"
          ],
          "correct": 0,
          "explanation": "Then 12 mg."
        },
        {
          "q": "Oxygen target for most adults:",
          "options": [
            "SpO₂ 94–98%",
            "100% always",
            "85–88%",
            "Above 90% only"
          ],
          "correct": 0,
          "explanation": "88–92% for COPD with CO₂ retention."
        },
        {
          "q": "Why watch a patient after naloxone?",
          "options": [
            "It lasts 30–90 minutes, shorter than many opioids",
            "It causes hypoglycaemia",
            "It raises blood pressure for days",
            "It stops breathing"
          ],
          "correct": 0,
          "explanation": "Re-sedation risk."
        }
      ],
      "flashcards": [
        {
          "question": "Seven rights",
          "answer": "Right patient, drug, dose, route, time, documentation, and the right to refuse.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Nitroglycerin",
          "answer": "0.4 mg sublingual every 5 minutes, up to 3. Not if SBP below 90 mmHg or PDE-5 inhibitor (24 hours sildenafil/vardenafil, 48 hours tadalafil).",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Epinephrine doses",
          "answer": "Anaphylaxis: 0.01 mg/kg IM (maximum 0.5 mg) of 1 mg/mL, outer thigh. Arrest: 1 mg IV/IO of 0.1 mg/mL every 3–5 minutes.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Aspirin",
          "answer": "162–325 mg chewed for suspected ACS: faster absorption.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Naloxone duration",
          "answer": "30–90 minutes: shorter than many opioids. Watch for re-sedation.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Glucagon",
          "answer": "1 mg IM (0.5 mg under 25 kg). Works in about 10 minutes; needs liver glycogen; often causes vomiting.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Albuterol",
          "answer": "2.5–5 mg nebulised, repeat every 20 minutes up to 3. Side effects: tachycardia, tremor, anxiety.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Atropine in arrest?",
          "answer": "No: removed from arrest algorithms (no benefit). Used for symptomatic bradycardia: 1 mg, up to 3 mg.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Ondansetron",
          "answer": "4 mg IV, IM or dissolving tablet. Caution with long QT and other QT-prolonging drugs.",
          "category": "Emergency Drug Formulary"
        },
        {
          "question": "Fentanyl vs morphine",
          "answer": "Fentanyl: about 100 times more potent, lasts 30–60 minutes. Morphine: 3–5 hours, more histamine release and hypotension.",
          "category": "Emergency Drug Formulary"
        }
      ],
      "critical": [
        {
          "id": "crit_9_5_1",
          "scenario": "Nursing home: 78-year-old on metoprolol and metformin, confused and sweaty, glucose 42 mg/dL. He follows commands and swallows safely.",
          "question": "Management?",
          "options": [
            {
              "t": "Oral glucose 15 g, recheck in 15 minutes; glucagon IM or IV dextrose if he worsens or can't swallow; look for the cause",
              "f": "Correct."
            },
            {
              "t": "Nothing: he's talking",
              "f": "Treat the hypoglycaemia."
            },
            {
              "t": "Insulin",
              "f": "Dangerous."
            },
            {
              "t": "Large oral fluids",
              "f": "Give glucose, not volume."
            }
          ],
          "correct": 0,
          "explanation": "Beta-blockers hide the warning tremor and tachycardia.",
          "kpi": "Selects the correct glucose route for level of consciousness"
        },
        {
          "id": "crit_9_5_2",
          "scenario": "24-year-old after a break-up: hyperventilating, crying, 'I can't breathe'; SpO₂ 100%, clear lungs, no hives or swelling. A bystander hands you an EpiPen.",
          "question": "Give epinephrine?",
          "options": [
            {
              "t": "No: no signs of anaphylaxis. Calm reassurance, coached breathing, rule out other causes",
              "f": "Correct."
            },
            {
              "t": "Yes, to be safe",
              "f": "Causes tachycardia and anxiety without benefit."
            },
            {
              "t": "Albuterol",
              "f": "No wheeze."
            },
            {
              "t": "Paper bag rebreathing",
              "f": "Can cause hypoxia; coach instead."
            }
          ],
          "correct": 0,
          "explanation": "Right indication is part of every drug decision.",
          "kpi": "Withholds a drug without an indication"
        },
        {
          "id": "crit_9_5_3",
          "scenario": "66-year-old on digoxin, metoprolol and warfarin, 3 days of diarrhoea: confused, HR 52 irregular, BP 82/56.",
          "question": "Likely cause and drug considerations?",
          "options": [
            {
              "t": "Digoxin toxicity from dehydration: monitor, IV fluids, atropine if bradycardia is symptomatic, transport for levels and antidote",
              "f": "Correct."
            },
            {
              "t": "Give digoxin for the AF",
              "f": "Worsens toxicity."
            },
            {
              "t": "Adenosine",
              "f": "For SVT, not this."
            },
            {
              "t": "Nitroglycerin",
              "f": "He's hypotensive."
            }
          ],
          "correct": 0,
          "explanation": "Digoxin-specific antibody is the hospital antidote.",
          "kpi": "Recognizes digoxin toxicity and avoids harmful drugs"
        }
      ]
    },
    {
      "id": "c9s6",
      "shortTitle": "9.6 Medication-Assisted Treatment",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Medication-Assisted Treatment",
        "lead": "Many patients take medicines for opioid or alcohol use disorder. Know which ones block opioids, which ones partly replace them and which ones make alcohol dangerous – because they change how you treat overdose and pain. Speak with respect: these are patients in treatment.",
        "sections": [
          {
            "type": "table",
            "title": "Opioid use disorder",
            "icon": "pill",
            "stack": true,
            "columns": [
              "Drug",
              "Action",
              "What it means for you"
            ],
            "rows": [
              [
                "Methadone",
                "Full agonist, long-acting",
                "Overdose lasts long: repeated naloxone or infusion; QT prolongation"
              ],
              [
                "Buprenorphine (with or without naloxone)",
                "Partial agonist; ceiling effect",
                "Overdose still possible with fentanyl, alcohol or benzodiazepines; may need higher or repeated naloxone. Pain: give analgesia – opioids still work at higher doses"
              ],
              [
                "Naltrexone (tablet or monthly injection)",
                "Antagonist",
                "Opioid analgesics won't work: use ketamine, NSAIDs, acetaminophen"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Alcohol use disorder",
            "icon": "flask-conical",
            "stack": true,
            "columns": [
              "Drug",
              "What it means for you"
            ],
            "rows": [
              [
                "Disulfiram",
                "Alcohol causes flushing, vomiting, chest pain, tachycardia, low BP: fluids, antiemetic, monitor"
              ],
              [
                "Acamprosate",
                "Reduces cravings; few interactions"
              ],
              [
                "Naltrexone",
                "Blocks opioid analgesia (as above)"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Overdose reversal done well",
            "icon": "wind",
            "steps": [
              {
                "title": "Breathe for them",
                "text": "Bag-mask with oxygen first."
              },
              {
                "title": "Titrate naloxone",
                "text": "Small doses to adequate breathing, not to full wakefulness."
              },
              {
                "title": "Precipitated withdrawal",
                "text": "Vomiting, agitation, sweating, pain: protect the airway, antiemetic, calm de-escalation. It isn't life-threatening in adults but drives refusals."
              },
              {
                "title": "Leave naloxone and links",
                "text": "Leave-behind naloxone and referral to treatment where your service offers it; some services start buprenorphine after reversal."
              }
            ]
          },
          {
            "type": "table",
            "title": "Words matter",
            "icon": "message-circle-question",
            "stack": true,
            "columns": [
              "Instead of",
              "Say"
            ],
            "rows": [
              [
                "Addict, junkie",
                "Person with a substance use disorder"
              ],
              [
                "Clean / dirty",
                "Negative / positive; in recovery"
              ],
              [
                "Relapse, failure",
                "Return to use"
              ]
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Use it",
                "items": [
                  {
                    "label": "Breathing patterns",
                    "sub": "Opioid slow breathing",
                    "href": "../pages/respiratory-patterns.html?p=bradypnea",
                    "icon": "wind"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Look up treatment medicines",
                    "href": "../pages/med-index.html",
                    "icon": "pill"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Man on buprenorphine-naloxone used heroin: unresponsive, RR 8, SpO₂ 86%. You:",
          "options": [
            "Ventilate and give naloxone; higher or repeated doses may be needed",
            "Withhold naloxone: buprenorphine protects him",
            "Oxygen only",
            "Flumazenil"
          ],
          "correct": 0,
          "explanation": "Buprenorphine doesn't prevent overdose with full agonists."
        },
        {
          "q": "Patient on monthly naltrexone with renal colic wants pain relief. You know:",
          "options": [
            "Opioids won't work: use non-opioids such as ketamine or NSAIDs",
            "Double the morphine",
            "No analgesia allowed",
            "Fentanyl overrides the block"
          ],
          "correct": 0,
          "explanation": "Naltrexone blocks mu receptors."
        },
        {
          "q": "After 8 mg intranasal naloxone from family: awake, agitated, vomiting, sweating. Priority?",
          "options": [
            "Precipitated withdrawal: protect the airway, antiemetic, de-escalate",
            "More naloxone",
            "Diazepam",
            "Lights and sirens for hypertension"
          ],
          "correct": 0,
          "explanation": "Titrate next time."
        },
        {
          "q": "Man with alcohol use disorder on a 'new medication for drinking', drank today, now flushed and vomiting. Key question?",
          "options": [
            "Is he on disulfiram?",
            "Is he on naltrexone?",
            "Medicine doesn't matter",
            "Is he on acamprosate?"
          ],
          "correct": 0,
          "explanation": "Disulfiram reaction."
        },
        {
          "q": "Buprenorphine is:",
          "options": [
            "A partial mu agonist with a ceiling effect",
            "A full agonist",
            "An antagonist",
            "A benzodiazepine"
          ],
          "correct": 0,
          "explanation": "Limits breathing depression when taken alone."
        },
        {
          "q": "Methadone overdose is a particular problem because:",
          "options": [
            "It lasts much longer than naloxone",
            "It doesn't affect breathing",
            "Naloxone doesn't work",
            "It causes hypoglycaemia"
          ],
          "correct": 0,
          "explanation": "Repeated doses or infusion; observe in hospital."
        },
        {
          "q": "Naloxone goal in overdose:",
          "options": [
            "Adequate breathing",
            "Full wakefulness",
            "Pupils normal",
            "Patient sitting up"
          ],
          "correct": 0,
          "explanation": "Avoids severe withdrawal."
        },
        {
          "q": "Disulfiram reaction treatment:",
          "options": [
            "Fluids, antiemetic, monitoring; vasopressors if needed",
            "More alcohol",
            "Naloxone",
            "Flumazenil"
          ],
          "correct": 0,
          "explanation": "Supportive care."
        },
        {
          "q": "Preferred language:",
          "options": [
            "\"Person with a substance use disorder\"",
            "\"Addict\"",
            "\"Junkie\"",
            "\"Frequent flyer\""
          ],
          "correct": 0,
          "explanation": "Stigma keeps people from care."
        },
        {
          "q": "Patient on buprenorphine with appendicitis pain. You:",
          "options": [
            "Treat the pain: ketamine or titrated opioids (may need higher doses)",
            "No analgesia",
            "Naloxone first",
            "Only acetaminophen ever"
          ],
          "correct": 0,
          "explanation": "Buprenorphine doesn't remove the need for analgesia."
        }
      ],
      "flashcards": [
        {
          "question": "Medicines for opioid use disorder",
          "answer": "Methadone (full agonist), buprenorphine (partial agonist), naltrexone (antagonist).",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Buprenorphine ceiling effect",
          "answer": "Higher doses add little effect, limiting breathing depression when taken alone – but full agonists still work at higher doses for pain.",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Precipitated withdrawal",
          "answer": "Sudden withdrawal when naloxone or buprenorphine displaces a full agonist: vomiting, diarrhoea, pain, agitation, sweating. Supportive care.",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Can someone on buprenorphine overdose?",
          "answer": "Yes: with fentanyl, alcohol, benzodiazepines, or if opioid-naive. Ventilate and give naloxone.",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Pain on naltrexone",
          "answer": "Opioids are blocked. Use ketamine, NSAIDs, acetaminophen or regional anaesthesia.",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Medicines for alcohol use disorder",
          "answer": "Disulfiram (aversive), acamprosate (cravings), naltrexone (reduces heavy drinking).",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Disulfiram reaction",
          "answer": "Alcohol plus disulfiram: flushing, headache, vomiting, chest pain, tachycardia, low BP. Fluids, antiemetic, monitor.",
          "category": "Medication-Assisted Treatment"
        },
        {
          "question": "Person-first language",
          "answer": "\"Person with a substance use disorder\", \"return to use\", \"positive/negative\" – not \"addict\", \"relapse\", \"dirty\".",
          "category": "Medication-Assisted Treatment"
        }
      ],
      "critical": [
        {
          "id": "crit_9_6_1",
          "scenario": "28-year-old stable on buprenorphine for 2 years: severe right lower abdominal pain, fever, guarding.",
          "question": "Pain management?",
          "options": [
            {
              "t": "Give analgesia: ketamine 0.1–0.3 mg/kg IV, or titrated fentanyl (may need more than usual); ondansetron; transport",
              "f": "Correct."
            },
            {
              "t": "No analgesia: she's on buprenorphine",
              "f": "Untreated pain is harmful."
            },
            {
              "t": "Naloxone first",
              "f": "Causes withdrawal."
            },
            {
              "t": "Tell her to take extra buprenorphine",
              "f": "Not effective for acute pain."
            }
          ],
          "correct": 0,
          "explanation": "Tell the hospital so they continue her buprenorphine.",
          "kpi": "Provides analgesia for a patient on buprenorphine"
        },
        {
          "id": "crit_9_6_2",
          "scenario": "34-year-old stopped heroin 18 hours ago: vomiting, diarrhoea, cramps, sweating, dilated pupils, goosebumps, HR 124, distressed.",
          "question": "Diagnosis and management?",
          "options": [
            {
              "t": "Opioid withdrawal: supportive care (fluids, antiemetic), calm reassurance, transport or referral; buprenorphine per local protocol",
              "f": "Correct."
            },
            {
              "t": "Naloxone",
              "f": "Worsens withdrawal."
            },
            {
              "t": "Overdose: ventilate",
              "f": "He's breathing fast, not slow."
            },
            {
              "t": "Leave: not an emergency",
              "f": "Withdrawal drives return to use and dehydration."
            }
          ],
          "correct": 0,
          "explanation": "This is a chance to connect him with treatment.",
          "kpi": "Recognizes and supports opioid withdrawal"
        },
        {
          "id": "crit_9_6_3",
          "scenario": "52-year-old on disulfiram drank several beers 2 hours ago: flushing, headache, vomiting, chest tightness, HR 118, BP 86/52.",
          "question": "Diagnosis and management?",
          "options": [
            {
              "t": "Disulfiram reaction: oxygen, monitor and 12-lead, IV fluids, antiemetic, transport; vasopressors if hypotension persists",
              "f": "Correct."
            },
            {
              "t": "Anaphylaxis: epinephrine",
              "f": "No allergic signs."
            },
            {
              "t": "More fluids by mouth",
              "f": "He's vomiting."
            },
            {
              "t": "Reassure and leave",
              "f": "Hypotension needs treatment."
            }
          ],
          "correct": 0,
          "explanation": "Check the 12-lead: chest pain may be cardiac.",
          "kpi": "Recognizes and manages a disulfiram-alcohol reaction"
        }
      ]
    },
    {
      "id": "c9s7",
      "shortTitle": "9.7 Medication Safety & Error Prevention",
      "guide": {
        "group": "c9",
        "groupLabel": "Chapter 9 · Emergency Pharmacology",
        "title": "Medication Safety & Error Prevention",
        "lead": "Errors come from look-alike packs, decimal points, fatigue and rush. Organise the drug bag so the wrong drug is hard to grab, read every label aloud, calculate twice, and when something goes wrong, tell the truth quickly – the patient's safety and the next patient's depend on it.",
        "sections": [
          {
            "type": "table",
            "title": "Error traps",
            "icon": "triangle-alert",
            "stack": true,
            "columns": [
              "Trap",
              "Example",
              "Defence"
            ],
            "rows": [
              [
                "Look-alike, sound-alike",
                "Epinephrine / ephedrine; DOPamine / DOBUTamine",
                "Tall-man lettering, separate storage, read aloud"
              ],
              [
                "Concentration",
                "Epinephrine 1 mg/mL vs 0.1 mg/mL",
                "Label in mg/mL; separate IM and IV stock"
              ],
              [
                "Decimals",
                ".5 mg read as 5 mg; 1.0 mg as 10 mg",
                "Leading zero always (0.5 mg); never a trailing zero (1 mg)"
              ],
              [
                "Units",
                "mg vs mcg",
                "Write \"mcg\" or \"micrograms\" in full, never µg"
              ],
              [
                "Fatigue and rush",
                "3 a.m. calls, codes",
                "Closed-loop, two-person check for high-alert drugs"
              ]
            ]
          },
          {
            "type": "list",
            "title": "High-alert drugs",
            "icon": "zap",
            "items": [
              "Opioids and sedatives",
              "Epinephrine and other vasopressors",
              "Insulin",
              "Anticoagulants",
              "Concentrated electrolytes (potassium chloride)"
            ]
          },
          {
            "type": "steps",
            "title": "If an error happens",
            "icon": "clipboard-list",
            "steps": [
              {
                "title": "Patient first",
                "text": "Assess and treat any effect."
              },
              {
                "title": "Tell",
                "text": "Medical direction and the receiving hospital, honestly and now."
              },
              {
                "title": "Record",
                "text": "Accurate documentation and an incident report."
              },
              {
                "title": "Learn",
                "text": "Debrief; fix the system (storage, labels, training)."
              }
            ]
          },
          {
            "type": "table",
            "title": "Just culture",
            "icon": "scale",
            "stack": true,
            "columns": [
              "Behaviour",
              "Response"
            ],
            "rows": [
              [
                "Human error (a slip)",
                "Console; fix the system"
              ],
              [
                "At-risk behaviour (a shortcut)",
                "Coach"
              ],
              [
                "Reckless behaviour",
                "Discipline"
              ]
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Use it",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Second check for doses",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "After giving IM 'epinephrine', you notice the vial was ephedrine. The patient improved. You:",
          "options": [
            "Notify medical direction and the hospital, document accurately, file an incident report",
            "Do nothing",
            "Tell a supervisor next week",
            "Discard the vial"
          ],
          "correct": 0,
          "explanation": "Honesty protects the patient."
        },
        {
          "q": "Morphine 4 mg ordered; vial 10 mg/mL. Draw up:",
          "options": [
            "0.4 mL",
            "4 mL",
            "0.04 mL",
            "2 mL"
          ],
          "correct": 0,
          "explanation": "Dose ÷ concentration."
        },
        {
          "q": "Dark nightclub; you gave 'naloxone' but nothing happened. The empty vial says ondansetron. Most likely?",
          "options": [
            "A look-alike packaging error",
            "Needs another dose",
            "Not an opioid overdose",
            "Expired naloxone"
          ],
          "correct": 0,
          "explanation": "Read labels aloud, even in the dark."
        },
        {
          "q": "A partner hurriedly asks for 'epinephrine for the code'. Best safety step?",
          "options": [
            "Read the label aloud with the concentration as you hand it over",
            "Wait for them to fetch it",
            "Refuse without a written order",
            "Ban verbal orders"
          ],
          "correct": 0,
          "explanation": "Closed-loop communication."
        },
        {
          "q": "LASA means:",
          "options": [
            "Look-alike, sound-alike drugs",
            "Low-acuity safe administration",
            "Last available supply alert",
            "Labelled as stated always"
          ],
          "correct": 0,
          "explanation": "Separate and label them."
        },
        {
          "q": "Correct way to write half a milligram:",
          "options": [
            "0.5 mg",
            ".5 mg",
            "0.50 mg",
            "1/2 mg"
          ],
          "correct": 0,
          "explanation": "Always a leading zero."
        },
        {
          "q": "Which is a high-alert medication?",
          "options": [
            "Insulin",
            "Oral glucose",
            "Saline flush",
            "Oxygen"
          ],
          "correct": 0,
          "explanation": "Also opioids, vasopressors, anticoagulants."
        },
        {
          "q": "Just culture response to an honest slip:",
          "options": [
            "Console the person and fix the system",
            "Discipline",
            "Ignore it",
            "Hide it"
          ],
          "correct": 0,
          "explanation": "Reckless behaviour is different."
        },
        {
          "q": "Unsure about a drug or dose:",
          "options": [
            "Don't give it until you've checked",
            "Give half",
            "Guess",
            "Give it and check later"
          ],
          "correct": 0,
          "explanation": "Ask a partner, medical direction or a reference."
        },
        {
          "q": "Tall-man lettering is used to:",
          "options": [
            "Distinguish similar drug names (DOPamine vs DOBUTamine)",
            "Make labels bigger",
            "Show high doses",
            "Mark expired drugs"
          ],
          "correct": 0,
          "explanation": "Highlights the different letters."
        }
      ],
      "flashcards": [
        {
          "question": "Seven rights",
          "answer": "Right patient, drug, dose, route, time, documentation, and the right to refuse.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "Look-alike, sound-alike drugs",
          "answer": "Similar names or packs (epinephrine/ephedrine, dopamine/dobutamine). Separate them, use tall-man lettering, read aloud.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "Three-check system",
          "answer": "When taking it out, when preparing, before giving – read the label aloud each time.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "After a medication error",
          "answer": "Assess and treat the patient, tell medical direction and the hospital honestly, document, incident report, debrief and fix the system.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "Decimal danger",
          "answer": "0.1 mg vs 1 mg is tenfold. Always a leading zero, never a trailing zero. Volume = dose ÷ concentration; check with a partner.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "Just culture",
          "answer": "Human error: console and fix the system. At-risk behaviour: coach. Reckless behaviour: discipline. Encourages reporting.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "High-alert medications",
          "answer": "Opioids, sedatives, vasopressors (epinephrine), insulin, anticoagulants, concentrated electrolytes.",
          "category": "Medication Safety & Error Prevention"
        },
        {
          "question": "Not sure about a drug?",
          "answer": "Don't give it. Check with a partner, medical direction or a reference. \"Let me check\" is always acceptable.",
          "category": "Medication Safety & Error Prevention"
        }
      ],
      "critical": [
        {
          "id": "crit_9_7_1",
          "scenario": "First week on the job: the drug bag is disorganised. Asked for oral glucose, you hand over a tube of lidocaine gel, which your partner squeezes into the patient's cheek before noticing.",
          "question": "What now, and what failed?",
          "options": [
            {
              "t": "Remove it, give the correct oral glucose, monitor; tell medical direction, document, report – and fix the bag layout and label-reading",
              "f": "Correct."
            },
            {
              "t": "No harm done: say nothing",
              "f": "Every error is reported."
            },
            {
              "t": "Blame the new provider",
              "f": "The system allowed it."
            },
            {
              "t": "Give glucagon instead without telling anyone",
              "f": "Honesty first."
            }
          ],
          "correct": 0,
          "explanation": "Organised stock and reading aloud prevent most of these.",
          "kpi": "Responds to a medication error and identifies system causes"
        },
        {
          "id": "crit_9_7_2",
          "scenario": "68-year-old with chest pain; meds include metoprolol, lisinopril and tadalafil 'as needed', last taken 2 days ago. SpO₂ 93%.",
          "question": "Which drugs are indicated, which contraindicated?",
          "options": [
            {
              "t": "Aspirin chewed and oxygen to 94–98%; withhold nitroglycerin – tadalafil within 48 hours",
              "f": "Correct."
            },
            {
              "t": "Nitroglycerin is fine after 24 hours",
              "f": "That rule is for sildenafil; tadalafil is 48 hours."
            },
            {
              "t": "No aspirin with metoprolol",
              "f": "No interaction problem."
            },
            {
              "t": "High-flow oxygen to 100%",
              "f": "Titrate to target."
            }
          ],
          "correct": 0,
          "explanation": "Ask about PDE-5 inhibitors by name; patients often don't mention them.",
          "kpi": "Identifies drug contraindications before administration"
        },
        {
          "id": "crit_9_7_3",
          "scenario": "3 a.m., 6-year-old with severe asthma. Your tired partner draws up albuterol 5 mg instead of the protocol's 2.5 mg for this child; you notice before giving.",
          "question": "What does this teach?",
          "options": [
            {
              "t": "A near miss: give the correct dose now; afterwards debrief, use weight-based charts or the calculator, and two-person checks for children",
              "f": "Correct."
            },
            {
              "t": "Give 5 mg: albuterol is safe",
              "f": "Follow the protocol dose."
            },
            {
              "t": "Ignore it: no harm",
              "f": "Near misses reveal risks."
            },
            {
              "t": "Report your partner for discipline",
              "f": "This is human error: fix the system."
            }
          ],
          "correct": 0,
          "explanation": "Fatigue is a known error factor at night.",
          "kpi": "Uses a near miss to improve medication safety"
        }
      ]
    }
  ]
};
