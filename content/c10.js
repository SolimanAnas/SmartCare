/* ========== Chapter 10 – Clinical Procedures & Skills ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c10.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c10",
  "title": "Clinical Procedures & Skills",
  "shortTitle": "10. Clinical Procedures & Skills",
  "sections": [
    {
      "id": "c10s1",
      "shortTitle": "10.1 Airway & Breathing Skills",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Airway & Breathing Skills",
        "lead": "Open it, clear it, keep it open, then breathe for them if they can't. Most airways are managed with positioning, suction, a simple adjunct and a good two-hand bag-mask seal. Slow, gentle breaths beat fast, big ones.",
        "sections": [
          {
            "type": "steps",
            "title": "Open and clear",
            "icon": "wind",
            "steps": [
              {
                "title": "Open",
                "text": "Head-tilt chin-lift; jaw thrust if spinal injury is possible (head-tilt if the jaw thrust doesn't open it)."
              },
              {
                "title": "Suction",
                "text": "Rigid (Yankauer) for the mouth. Measure, suction on the way out, no longer than 15 seconds in adults (10 seconds in children, 5 seconds in infants). Oxygen before and after."
              },
              {
                "title": "Look",
                "text": "Remove loose dentures and visible objects; leave well-fitting dentures for a better mask seal."
              }
            ]
          },
          {
            "type": "table",
            "title": "Adjuncts",
            "icon": "ruler",
            "stack": true,
            "columns": [
              "Device",
              "Size",
              "Insert",
              "Avoid"
            ],
            "rows": [
              [
                "Oropharyngeal airway",
                "Corner of mouth to earlobe (or angle of jaw)",
                "Adults: upside down, rotate 180°. Children: right way up with a tongue depressor",
                "Any gag reflex"
              ],
              [
                "Nasopharyngeal airway",
                "Nostril to earlobe",
                "Lubricate; bevel toward the septum; gentle rotation if resistance",
                "Suspected basal skull fracture (relative), severe facial trauma"
              ]
            ],
            "figures": [
              {
                "src": "../images/guides/c10s1-217.webp",
                "alt": "Two side views: sizing an oral airway from the corner of the mouth to the earlobe, and a nasal airway from the nostril to the earlobe, each shown inserted in a cutaway head.",
                "w": 1200,
                "h": 896,
                "pos": "before"
              }
            ]
          },
          {
            "type": "steps",
            "title": "Bag-mask ventilation",
            "icon": "hand",
            "steps": [
              {
                "title": "Seal",
                "text": "Two people when possible: two-hand thumb-and-palm grip with a jaw lift, partner squeezes. One person: E-C clamp.",
                "figures": [
                  {
                    "src": "../images/guides/c7s8-159.webp",
                    "alt": "Two-person bag-mask: one rescuer with both hands sealing the mask (thumbs on the mask, fingers lifting the jaw), the other squeezing the bag.",
                    "w": 1200,
                    "h": 896
                  }
                ]
              },
              {
                "title": "Volume",
                "text": "Just enough for visible chest rise, over 1 second."
              },
              {
                "title": "Rate",
                "text": "Adults: 1 breath every 6 seconds. Children and infants: 1 every 2–3 seconds. CPR without an advanced airway: 30:2 (adults), 15:2 (children, two rescuers)."
              },
              {
                "title": "Too much hurts",
                "text": "Fast, big breaths inflate the stomach (vomiting, aspiration), lower venous return and blood pressure, and can cause barotrauma."
              }
            ]
          },
          {
            "type": "table",
            "title": "Oxygen devices",
            "icon": "activity",
            "stack": true,
            "columns": [
              "Device",
              "Flow",
              "Approx. FiO₂"
            ],
            "rows": [
              [
                "Nasal cannula",
                "1–6 L/min",
                "24–44%"
              ],
              [
                "Simple mask",
                "6–10 L/min",
                "35–55%"
              ],
              [
                "Non-rebreather",
                "12–15 L/min",
                "60–90%"
              ],
              [
                "Bag-mask with reservoir",
                "15 L/min",
                "Close to 100%"
              ]
            ],
            "notes": [
              "Titrate to SpO₂ 94–98%; 88–92% for COPD with CO₂ retention."
            ]
          },
          {
            "type": "list",
            "title": "Stoma and tracheostomy",
            "icon": "user",
            "items": [
              "A laryngectomy stoma is the only airway: ventilate the stoma with a small round mask",
              "Tracheostomy: bag directly onto the tube; if it fails, suction, change the inner tube, or replace it",
              "Partial neck breathers: close the mouth and nose while ventilating the stoma"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Breathing patterns",
                    "sub": "Recognise inadequate breathing",
                    "href": "../pages/respiratory-patterns.html?p=hypopnea",
                    "icon": "wind"
                  },
                  {
                    "label": "O₂ duration calculator",
                    "sub": "Cylinder time remaining",
                    "href": "../pages/Carevent.html",
                    "icon": "clock"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Sizing an oropharyngeal airway:",
          "options": [
            "Corner of the mouth to the earlobe",
            "Nostril to earlobe",
            "Tragus to angle of jaw only",
            "Nose to xiphoid"
          ],
          "correct": 0,
          "explanation": "Nostril to earlobe sizes a nasal airway."
        },
        {
          "q": "Unresponsive crash victim, possible neck injury, has vomited. Sequence?",
          "options": [
            "Jaw thrust, suction, then an adjunct (avoid the nose if a skull fracture is possible)",
            "Head-tilt, OPA, then suction",
            "OPA then suction around it",
            "Suction then head-tilt"
          ],
          "correct": 0,
          "explanation": "Head-tilt only if the jaw thrust fails."
        },
        {
          "q": "Bagging at 20/min with big, slow-to-release breaths causes:",
          "options": [
            "Gastric inflation, low blood pressure and barotrauma",
            "Oxygen toxicity",
            "Bronchospasm",
            "Hypertension"
          ],
          "correct": 0,
          "explanation": "Aim for 1 breath every 6 seconds, visible chest rise."
        },
        {
          "q": "COPD patient on 15 L/min becomes drowsy with SpO₂ 99%. Most likely?",
          "options": [
            "CO₂ retention from too much oxygen: titrate to 88–92% and assist breathing if needed",
            "A stroke",
            "Faulty mask",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "V/Q mismatch and the Haldane effect raise CO₂."
        },
        {
          "q": "Maximum suction time in an adult:",
          "options": [
            "15 seconds",
            "30 seconds",
            "60 seconds",
            "Until clear"
          ],
          "correct": 0,
          "explanation": "10 seconds in children, 5 in infants."
        },
        {
          "q": "An OPA is inserted in a child:",
          "options": [
            "Right way up with a tongue depressor",
            "Upside down and rotated",
            "Through the nose",
            "Only after intubation"
          ],
          "correct": 0,
          "explanation": "Rotation can injure the palate."
        },
        {
          "q": "Adult rescue breathing rate with a pulse:",
          "options": [
            "1 breath every 6 seconds",
            "1 every 2 seconds",
            "1 every 10 seconds",
            "30 per minute"
          ],
          "correct": 0,
          "explanation": "AHA 2025."
        },
        {
          "q": "A nasal airway is relatively contraindicated in:",
          "options": [
            "Suspected basal skull fracture",
            "Intact gag reflex",
            "Seizure",
            "Hypoglycaemia"
          ],
          "correct": 0,
          "explanation": "Gag reflex is a reason to choose an NPA over an OPA."
        },
        {
          "q": "Best single bag-mask technique improvement:",
          "options": [
            "Two-person, two-hand seal with a jaw lift",
            "Squeeze harder",
            "Faster rate",
            "Bigger bag"
          ],
          "correct": 0,
          "explanation": "Most failures are seal failures."
        },
        {
          "q": "Patient with a laryngectomy stoma stops breathing. Ventilate:",
          "options": [
            "Through the stoma with a small mask",
            "Mouth and nose",
            "Not at all",
            "With an OPA"
          ],
          "correct": 0,
          "explanation": "The stoma is the only airway."
        }
      ],
      "flashcards": [
        {
          "question": "Head-tilt chin-lift vs jaw thrust",
          "answer": "Head-tilt chin-lift: no suspected spinal injury. Jaw thrust: possible spinal injury – but open the airway with head-tilt if the jaw thrust fails.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Oropharyngeal airway",
          "answer": "Size corner of mouth to earlobe. Adult: insert upside down and rotate 180°. Child: right way up with a tongue depressor. Only with no gag reflex.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Nasopharyngeal airway",
          "answer": "Size nostril to earlobe; lubricate; bevel toward the septum. Tolerated with a gag reflex. Caution with suspected basal skull fracture.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Suction rules",
          "answer": "Measure; suction on the way out; adults 15 seconds, children 10, infants 5; oxygen before and after; watch SpO₂ and heart rate.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Oxygen device FiO₂",
          "answer": "Nasal cannula 24–44% (1–6 L/min); simple mask 35–55%; non-rebreather 60–90%; bag-mask with reservoir close to 100%.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Bag-mask technique",
          "answer": "Two-hand seal with jaw lift and a second person squeezing is best. One person: E-C clamp. Breaths over 1 second, just enough for chest rise.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Ventilation rates",
          "answer": "Adult with a pulse or an advanced airway: 1 every 6 seconds. Child or infant: 1 every 2–3 seconds.",
          "category": "Airway & Breathing Skills"
        },
        {
          "question": "Stoma ventilation",
          "answer": "Small round mask over the stoma; laryngectomy patients can only breathe through it. Tracheostomy: bag onto the tube; suction or replace if blocked.",
          "category": "Airway & Breathing Skills"
        }
      ],
      "critical": [
        {
          "id": "crit_10_1_1",
          "scenario": "Nursing home: 82-year-old unresponsive, no trauma, snoring respirations, secretions in the mouth, loose dentures, no gag. RR 6, SpO₂ 84%.",
          "question": "Airway sequence?",
          "options": [
            {
              "t": "Head-tilt chin-lift, suction (15 seconds max), remove loose dentures, OPA, bag-mask with oxygen at 1 breath every 6 seconds",
              "f": "Correct."
            },
            {
              "t": "Non-rebreather only",
              "f": "RR 6 needs ventilation."
            },
            {
              "t": "OPA before suction",
              "f": "Clear the airway first."
            },
            {
              "t": "Jaw thrust only and wait",
              "f": "He needs breaths."
            }
          ],
          "correct": 0,
          "explanation": "Check glucose and look for the cause.",
          "kpi": "Performs a systematic basic airway sequence"
        },
        {
          "id": "crit_10_1_2",
          "scenario": "52-year-old in respiratory distress, drowsy, gag present; SpO₂ 90% on a non-rebreather; right nostril narrowed by a deviated septum.",
          "question": "Adjunct and technique?",
          "options": [
            {
              "t": "Nasal airway sized nostril to earlobe, well lubricated, into the left nostril with the bevel toward the septum; assist ventilation if needed",
              "f": "Correct."
            },
            {
              "t": "Oral airway",
              "f": "She has a gag reflex."
            },
            {
              "t": "Force the right nostril",
              "f": "Causes bleeding."
            },
            {
              "t": "No adjunct ever with a gag",
              "f": "An NPA is tolerated."
            }
          ],
          "correct": 0,
          "explanation": "In the left nostril, insert tip-up and rotate gently if needed.",
          "kpi": "Selects and inserts an appropriate airway adjunct"
        },
        {
          "id": "crit_10_1_3",
          "scenario": "You're bagging an apnoeic overdose patient alone. The abdomen is swelling and SpO₂ is falling despite chest rise.",
          "question": "What's going wrong?",
          "options": [
            {
              "t": "Breaths too fast or too big: slow to 1 every 6 seconds, just enough for chest rise; get a second person for a two-hand seal; suction ready for vomit",
              "f": "Correct."
            },
            {
              "t": "Squeeze harder",
              "f": "Worsens gastric inflation."
            },
            {
              "t": "Faster rate",
              "f": "Same problem."
            },
            {
              "t": "Stop ventilating",
              "f": "He's apnoeic."
            }
          ],
          "correct": 0,
          "explanation": "Naloxone once ventilation is controlled.",
          "kpi": "Recognizes and corrects excessive ventilation"
        }
      ]
    },
    {
      "id": "c10s2",
      "shortTitle": "10.2 Oxygen & Ventilation Skills",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Oxygen & Ventilation Skills",
        "lead": "Oxygen is a drug: give enough to reach the target, not more. SpO₂ tells you about oxygenation; capnography tells you about ventilation, circulation and tube position. Know how long your cylinder will last before you need it.",
        "sections": [
          {
            "type": "steps",
            "title": "Cylinder time",
            "icon": "clock",
            "steps": [
              {
                "title": "Formula",
                "text": "Minutes = (gauge pressure − 200 psi reserve) × cylinder factor ÷ flow (L/min)."
              },
              {
                "title": "Factors",
                "text": "D 0.16; E 0.28; M 1.56; H 3.14."
              },
              {
                "title": "Example",
                "text": "E cylinder at 2000 psi, 15 L/min: (2000 − 200) × 0.28 ÷ 15 ≈ 34 minutes."
              }
            ]
          },
          {
            "type": "list",
            "title": "Oxygen safety",
            "icon": "triangle-alert",
            "items": [
              "No smoking or open flames; no oil, grease or petroleum products on fittings or skin",
              "Secure cylinders: a broken valve turns them into missiles",
              "Open valves slowly; replace at 200 psi"
            ]
          },
          {
            "type": "table",
            "title": "Capnography (ETCO₂)",
            "icon": "activity",
            "stack": true,
            "columns": [
              "Reading",
              "Means"
            ],
            "rows": [
              [
                "35–45 mmHg",
                "Normal ventilation"
              ],
              [
                "Above 45 mmHg",
                "Hypoventilation: assist breathing"
              ],
              [
                "Below 35 mmHg",
                "Hyperventilation, low cardiac output, PE"
              ],
              [
                "Below 10 mmHg in CPR",
                "Poor compressions: improve them"
              ],
              [
                "Sudden rise in CPR",
                "Possible ROSC: check the pulse"
              ],
              [
                "No waveform after intubation",
                "Oesophageal tube until proven otherwise"
              ]
            ]
          },
          {
            "type": "list",
            "title": "When SpO₂ misleads",
            "icon": "eye",
            "items": [
              "Carbon monoxide: reads falsely normal",
              "Poor perfusion, cold hands, movement: no reading or wrong",
              "Severe anaemia: normal % but little oxygen carried",
              "Methaemoglobinaemia: stuck around 85%",
              "Dark nail polish and darker skin can overestimate saturation"
            ]
          },
          {
            "type": "list",
            "title": "When to assist ventilation",
            "icon": "wind",
            "items": [
              "Apnoea or agonal breathing",
              "Respiratory rate below 8/min or too shallow",
              "Hypoxia despite high-flow oxygen",
              "Exhaustion or falling consciousness with rising CO₂"
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
                    "label": "O₂ duration calculator",
                    "sub": "Cylinder minutes left",
                    "href": "../pages/Carevent.html",
                    "icon": "clock"
                  },
                  {
                    "label": "Breathing patterns",
                    "sub": "Agonal and slow breathing",
                    "href": "../pages/respiratory-patterns.html?p=agonal",
                    "icon": "wind"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "E cylinder at 1600 psi, 15 L/min. Minutes left (keeping a 200 psi reserve)?",
          "options": [
            "About 26",
            "About 45",
            "About 60",
            "About 10"
          ],
          "correct": 0,
          "explanation": "(1600 − 200) × 0.28 ÷ 15."
        },
        {
          "q": "ETCO₂ stays at 8 mmHg during CPR. Most likely?",
          "options": [
            "Compressions aren't generating enough output: improve them",
            "Hyperventilation",
            "Pulmonary embolism only",
            "Faulty monitor"
          ],
          "correct": 0,
          "explanation": "Aim for above 10 mmHg."
        },
        {
          "q": "COPD patient on a non-rebreather: SpO₂ 100%, ETCO₂ 68 mmHg, drowsy. This is:",
          "options": [
            "Good oxygenation but severe hypoventilation: titrate oxygen down and assist breathing",
            "Normal",
            "Falsely high ETCO₂",
            "Falsely high SpO₂"
          ],
          "correct": 0,
          "explanation": "SpO₂ doesn't measure ventilation."
        },
        {
          "q": "House-fire victim: confused, headache, SpO₂ 99%. Why distrust the SpO₂?",
          "options": [
            "Pulse oximeters read carbon monoxide as oxygen",
            "CO lowers SpO₂",
            "Smoke makes oximeters read low",
            "CO doesn't affect oxygen"
          ],
          "correct": 0,
          "explanation": "100% oxygen and consider hyperbaric care."
        },
        {
          "q": "Normal ETCO₂:",
          "options": [
            "35–45 mmHg",
            "10–20 mmHg",
            "60–80 mmHg",
            "90–100 mmHg"
          ],
          "correct": 0,
          "explanation": "Above 45: hypoventilation."
        },
        {
          "q": "Sudden sustained ETCO₂ rise during CPR suggests:",
          "options": [
            "ROSC",
            "Tube displacement",
            "Better hyperventilation",
            "Cardiac arrest worsening"
          ],
          "correct": 0,
          "explanation": "Check for a pulse."
        },
        {
          "q": "No ETCO₂ waveform after intubation:",
          "options": [
            "Oesophageal tube until proven otherwise",
            "Normal",
            "Low battery",
            "Good sign"
          ],
          "correct": 0,
          "explanation": "Remove and re-oxygenate."
        },
        {
          "q": "Cylinder factor for an E cylinder:",
          "options": [
            "0.28",
            "0.16",
            "1.56",
            "3.14"
          ],
          "correct": 0,
          "explanation": "D 0.16; M 1.56; H 3.14."
        },
        {
          "q": "Which is unsafe near oxygen?",
          "options": [
            "Petroleum jelly on the lips",
            "Water-based lubricant",
            "A cotton blanket",
            "Plastic tubing"
          ],
          "correct": 0,
          "explanation": "Oils and grease can ignite."
        },
        {
          "q": "Assist ventilation when the adult respiratory rate is below:",
          "options": [
            "8/min (or breathing is too shallow)",
            "20/min",
            "16/min",
            "30/min"
          ],
          "correct": 0,
          "explanation": "Also apnoea, agonal breathing or exhaustion."
        }
      ],
      "flashcards": [
        {
          "question": "Oxygen cylinders",
          "answer": "D: portable. E: most common portable on ambulances. M and H: large onboard supply. Full at about 2000 psi; change at 200 psi.",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "Cylinder duration",
          "answer": "(Pressure − 200 psi) × factor ÷ flow. Factors: D 0.16, E 0.28, M 1.56, H 3.14. E at 2000 psi, 15 L/min ≈ 34 minutes.",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "Oxygen safety",
          "answer": "No smoking, no oil or grease, secure cylinders, open slowly, keep away from heat, replace at 200 psi.",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "Pulse oximetry errors",
          "answer": "CO (falsely normal), poor perfusion, motion, severe anaemia, methaemoglobinaemia, nail polish; can overestimate in darker skin.",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "ETCO₂ values",
          "answer": "Normal 35–45 mmHg. Low: hyperventilation, low output, PE. High: hypoventilation. Sudden rise in CPR: ROSC.",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "Capnography and tube position",
          "answer": "A sustained waveform confirms tracheal placement. No waveform: oesophageal until proven otherwise.",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "Complications of positive pressure ventilation",
          "answer": "Gastric inflation (vomiting, aspiration), lower venous return (hypotension), barotrauma (pneumothorax).",
          "category": "Oxygen & Ventilation Skills"
        },
        {
          "question": "Indications for assisted ventilation",
          "answer": "Apnoea, agonal breathing, RR below 8/min or too shallow, hypoxia despite high-flow oxygen, exhaustion or falling consciousness.",
          "category": "Oxygen & Ventilation Skills"
        }
      ],
      "critical": [
        {
          "id": "crit_10_2_1",
          "scenario": "CPR with a supraglottic airway: ETCO₂ has been 12–15 mmHg; it suddenly rises to 42 mmHg and stays there.",
          "question": "Meaning and action?",
          "options": [
            {
              "t": "Likely ROSC: check the pulse and rhythm; if a pulse is present start post-arrest care",
              "f": "Correct."
            },
            {
              "t": "Airway dislodged",
              "f": "A dislodged airway lowers ETCO₂."
            },
            {
              "t": "Hyperventilate to bring it down",
              "f": "Never."
            },
            {
              "t": "Give epinephrine",
              "f": "Check for a pulse first."
            }
          ],
          "correct": 0,
          "explanation": "ETCO₂ is the earliest sign of ROSC.",
          "kpi": "Interprets capnography during CPR"
        },
        {
          "id": "crit_10_2_2",
          "scenario": "COPD on home oxygen 2 L/min: SpO₂ 86%. A first responder put her on 15 L/min; now SpO₂ 99%, drowsy, ETCO₂ 72 mmHg.",
          "question": "Cause and response?",
          "options": [
            {
              "t": "CO₂ retention from excess oxygen: titrate to 88–92%, assist ventilation or CPAP/NIV per protocol, monitor ETCO₂",
              "f": "Correct."
            },
            {
              "t": "Stroke: rapid transport only",
              "f": "Fix the CO₂ first."
            },
            {
              "t": "Stop oxygen completely",
              "f": "Dangerous: titrate down, don't remove."
            },
            {
              "t": "Sedate her",
              "f": "Worsens hypoventilation."
            }
          ],
          "correct": 0,
          "explanation": "SpO₂ 99% is too high for her.",
          "kpi": "Titrates oxygen in a CO₂-retaining patient"
        },
        {
          "id": "crit_10_2_3",
          "scenario": "Long rural transport with a patient needing 15 L/min. Your portable E cylinder reads 1000 psi.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Calculate: (1000 − 200) × 0.28 ÷ 15 ≈ 15 minutes – switch to the onboard supply before moving and bring a spare",
              "f": "Correct."
            },
            {
              "t": "It'll last the trip",
              "f": "Always calculate."
            },
            {
              "t": "Lower the flow to make it last regardless of need",
              "f": "Treat the patient's need."
            },
            {
              "t": "Turn it off between checks",
              "f": "Unsafe."
            }
          ],
          "correct": 0,
          "explanation": "Running out mid-transport is avoidable.",
          "kpi": "Calculates oxygen cylinder duration for transport"
        }
      ]
    },
    {
      "id": "c10s3",
      "shortTitle": "10.3 Bleeding Control & Wound Care",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Bleeding Control & Wound Care",
        "lead": "Hands, then tourniquet or packing – fast. A tourniquet goes 5–7 cm above the wound and is tightened until the bleeding stops; packing goes deep into the wound with 3 minutes of hard pressure. Then clean and cover wounds, but don't close dirty ones.",
        "sections": [
          {
            "type": "steps",
            "title": "Tourniquet",
            "icon": "droplet",
            "steps": [
              {
                "title": "Place",
                "text": "5–7 cm (2–3 inches) above the wound, not over a joint; on the forearm or lower leg if there's room, otherwise above the elbow or knee.",
                "figures": [
                  {
                    "src": "../images/guides/c10s3-221.webp",
                    "alt": "A commercial tourniquet placed 5–7 cm above a forearm wound with the windlass locked and the time written on the label.",
                    "caption": "Tourniquet 5–7 cm above the wound, windlass locked. Write the time on the label.",
                    "w": 1200,
                    "h": 896
                  }
                ]
              },
              {
                "title": "Tighten",
                "text": "Until bleeding stops and the distal pulse disappears; lock the windlass."
              },
              {
                "title": "Not stopped?",
                "text": "Tighten more, then a second tourniquet just above the first."
              },
              {
                "title": "Record",
                "text": "Write the time on it. Never loosen it in the field – leave removal to the hospital."
              }
            ]
          },
          {
            "type": "steps",
            "title": "Wound packing (groin, armpit, neck)",
            "icon": "hand",
            "steps": [
              {
                "title": "Find the source",
                "text": "Expose; clear pooled blood."
              },
              {
                "title": "Pack",
                "text": "Hemostatic or plain gauze pushed deep onto the bleeding point until the wound is full.",
                "figures": [
                  {
                    "src": "../images/guides/c6s2-114.webp",
                    "alt": "Wound packing in the groin: gauze pushed deep with two fingers, then both hands pressing with straight arms.",
                    "w": 1200,
                    "h": 896
                  }
                ]
              },
              {
                "title": "Press",
                "text": "Hard, for at least 3 minutes without peeking."
              },
              {
                "title": "Bandage",
                "text": "Pressure dressing; reassess. Pelvic bleeding: binder at the greater trochanters."
              }
            ]
          },
          {
            "type": "table",
            "title": "Wound care",
            "icon": "bandage",
            "stack": true,
            "columns": [
              "Wound",
              "Do"
            ],
            "rows": [
              [
                "Minor cuts",
                "Irrigate well, clean dressing"
              ],
              [
                "Bites",
                "Irrigate thoroughly; don't close; record the animal and tetanus status; rabies per local guidance"
              ],
              [
                "Punctures, dirty or crush wounds",
                "Don't close with strips: infection risk"
              ],
              [
                "Impaled object",
                "Stabilise in place; remove only if it blocks the airway or CPR"
              ],
              [
                "Amputated part",
                "Wrap in moist sterile gauze, seal in a bag, place on ice – never directly on ice"
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
                    "label": "Trauma assessment",
                    "sub": "Find all bleeding",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Tourniquet applied but arterial bleeding continues. Next?",
          "options": [
            "Tighten further until it stops; add a second above if needed",
            "Release it",
            "Second one below the first",
            "Cover and go"
          ],
          "correct": 0,
          "explanation": "A loose tourniquet can increase venous bleeding."
        },
        {
          "q": "Gunshot high in the groin: no room for a tourniquet. You:",
          "options": [
            "Pack deep with hemostatic gauze and press hard for 3 minutes",
            "Tourniquet as high as possible and hope",
            "Light pressure only",
            "Don't touch"
          ],
          "correct": 0,
          "explanation": "Junctional bleeding needs packing."
        },
        {
          "q": "Below-knee amputation just under the knee with heavy bleeding. Tourniquet where?",
          "options": [
            "On the thigh, 5–7 cm above the knee",
            "Over the knee",
            "At the ankle",
            "Directly on the stump"
          ],
          "correct": 0,
          "explanation": "No room below the knee; never over a joint."
        },
        {
          "q": "A doctor on scene asks you to loosen a thigh tourniquet placed 20 minutes ago because bleeding has stopped. You:",
          "options": [
            "Keep it on; removal is done in hospital with control ready",
            "Release it",
            "Loosen it partly",
            "Release and press"
          ],
          "correct": 0,
          "explanation": "Field release risks fatal re-bleeding."
        },
        {
          "q": "Can tourniquets work on the forearm?",
          "options": [
            "Yes: place 5–7 cm above the wound if there's room",
            "Never: two bones",
            "Only with two tourniquets",
            "Only in children"
          ],
          "correct": 0,
          "explanation": "The old 'upper arm only' rule isn't supported."
        },
        {
          "q": "Hemostatic packing needs pressure for at least:",
          "options": [
            "3 minutes",
            "10 seconds",
            "30 seconds",
            "Until arrival only"
          ],
          "correct": 0,
          "explanation": "Don't peek."
        },
        {
          "q": "Amputated finger: how to transport?",
          "options": [
            "Moist gauze, sealed bag, then on ice",
            "Directly on ice",
            "In water",
            "Dry in a pocket"
          ],
          "correct": 0,
          "explanation": "Direct ice causes frostbite."
        },
        {
          "q": "Should a dog bite be closed with strips in the field?",
          "options": [
            "No: irrigate and leave open",
            "Yes, tightly",
            "Glue it",
            "Suture it"
          ],
          "correct": 0,
          "explanation": "Closure traps bacteria."
        },
        {
          "q": "Impaled knife in the thigh, bleeding controlled. You:",
          "options": [
            "Stabilise it in place with bulky dressings",
            "Pull it out",
            "Push it in further",
            "Cut it flush with the skin"
          ],
          "correct": 0,
          "explanation": "Remove only if it blocks the airway or CPR."
        },
        {
          "q": "Pelvic binder placement:",
          "options": [
            "At the greater trochanters",
            "At the iliac crests",
            "Around the waist",
            "Around the knees"
          ],
          "correct": 0,
          "explanation": "Too high doesn't close the pelvis."
        }
      ],
      "flashcards": [
        {
          "question": "First step for external bleeding",
          "answer": "Firm direct pressure. If soaked, add layers or switch to a tourniquet (limb) or packing (junctional).",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Tourniquet rules",
          "answer": "5–7 cm above the wound, not over a joint, tighten until bleeding stops and the distal pulse is gone, record the time, never loosen in the field.",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Wound packing",
          "answer": "Pack deep onto the bleeding point until full, press hard for at least 3 minutes, then a pressure dressing.",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Junctional bleeding",
          "answer": "Groin, armpit or neck where a tourniquet won't fit: packing, pressure, rapid transport.",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Pelvic binder",
          "answer": "Suspected pelvic fracture with shock: at the greater trochanters, not the iliac crests.",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Bite wounds",
          "answer": "Irrigate thoroughly, control bleeding, dressing, don't close. Record animal details, rabies risk and tetanus status.",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Wounds not to close in the field",
          "answer": "Deep, dirty, puncture, bite and crush wounds: closure traps bacteria.",
          "category": "Bleeding Control & Wound Care"
        },
        {
          "question": "Amputated parts",
          "answer": "Moist sterile gauze, sealed bag, on ice (not directly on ice); label and transport with the patient.",
          "category": "Bleeding Control & Wound Care"
        }
      ],
      "critical": [
        {
          "id": "crit_10_3_1",
          "scenario": "Crash: a driver has bright red blood spurting from a deep forearm laceration, a large pool on the ground, pale and anxious.",
          "question": "Sequence?",
          "options": [
            {
              "t": "Direct pressure immediately, then a tourniquet 5–7 cm above the wound (forearm if room, otherwise upper arm), tighten until bleeding stops, record the time",
              "f": "Correct."
            },
            {
              "t": "Elevate and wait",
              "f": "Not effective."
            },
            {
              "t": "Full assessment first",
              "f": "Massive bleeding comes first."
            },
            {
              "t": "Tourniquet over the elbow",
              "f": "Never over a joint."
            }
          ],
          "correct": 0,
          "explanation": "Then treat for shock and transport.",
          "kpi": "Controls life-threatening extremity hemorrhage"
        },
        {
          "id": "crit_10_3_2",
          "scenario": "Rebar through the inner thigh just below the groin crease; a thigh tourniquet hasn't stopped the steady bleeding.",
          "question": "Next?",
          "options": [
            {
              "t": "Leave the tourniquet, pack the wound around the bar with hemostatic gauze, press hard for 3 minutes, stabilise the bar, rapid transport",
              "f": "Correct."
            },
            {
              "t": "Pull the rebar out",
              "f": "Can cause catastrophic bleeding."
            },
            {
              "t": "Remove the tourniquet",
              "f": "It may still be helping."
            },
            {
              "t": "Wait for surgery",
              "f": "Act now."
            }
          ],
          "correct": 0,
          "explanation": "Junctional wounds need packing and pressure.",
          "kpi": "Manages junctional hemorrhage with an impaled object"
        },
        {
          "id": "crit_10_3_3",
          "scenario": "Stray-dog bite: deep punctures on the palm, minor bleeding, dog gone. Tetanus status unknown.",
          "question": "Management?",
          "options": [
            {
              "t": "Irrigate well, control bleeding, dressing, don't close; record the dog's details and that it can't be observed; hospital for rabies and tetanus assessment",
              "f": "Correct."
            },
            {
              "t": "Close with strips",
              "f": "Infection risk."
            },
            {
              "t": "Nothing: minor bleeding",
              "f": "Rabies and infection risk."
            },
            {
              "t": "Find the dog first",
              "f": "Animal control's job."
            }
          ],
          "correct": 0,
          "explanation": "Hand bites infect easily.",
          "kpi": "Provides appropriate bite wound care and documentation"
        }
      ]
    },
    {
      "id": "c10s4",
      "shortTitle": "10.4 Splinting & Bandaging",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Splinting & Bandaging",
        "lead": "Splint the joint above and below a bone injury, or the bones above and below a joint injury, in the position found unless circulation is lost. Pad, secure and check pulse, movement and sensation before and after – every time.",
        "sections": [
          {
            "type": "steps",
            "title": "Every splint",
            "icon": "bone",
            "steps": [
              {
                "title": "Check PMS",
                "text": "Pulse, movement and sensation below the injury; remove rings and watches.",
                "figures": [
                  {
                    "src": "../images/guides/c10s4-223.webp",
                    "alt": "Three small panels: feeling a radial pulse, asking the patient to wiggle fingers, touching the fingertip for sensation.",
                    "w": 1200,
                    "h": 896
                  }
                ]
              },
              {
                "title": "Choose",
                "text": "Rigid, vacuum, sling and swath, traction (mid-shaft femur only), pelvic binder."
              },
              {
                "title": "Position",
                "text": "As found. If the limb is pulseless and severely angulated, one gentle in-line traction to restore circulation, per protocol."
              },
              {
                "title": "Secure",
                "text": "Joint above and below; pad bony points and gaps; straps not over the injury."
              },
              {
                "title": "Recheck PMS",
                "text": "Document before and after; loosen if circulation worsens."
              }
            ]
          },
          {
            "type": "table",
            "title": "Which splint?",
            "icon": "list",
            "stack": true,
            "columns": [
              "Injury",
              "Splint"
            ],
            "rows": [
              [
                "Mid-thigh deformity, isolated",
                "Traction splint"
              ],
              [
                "Short, externally rotated leg (hip)",
                "Scoop or vacuum mattress, padding between the legs – no traction"
              ],
              [
                "Shoulder dislocation or clavicle",
                "Sling and swath, padded armpit, as found"
              ],
              [
                "Forearm or wrist",
                "Rigid or vacuum splint including elbow and wrist; hand in position of function"
              ],
              [
                "Finger",
                "Buddy tape with padding"
              ],
              [
                "Knee",
                "In the position found, bones above and below"
              ]
            ],
            "figures": [
              {
                "src": "../images/guides/c10s4-224.webp",
                "alt": "A sling and swath on a seated patient, padding in the armpit, the swath binding the arm to the chest.",
                "w": 1200,
                "h": 896,
                "pos": "after"
              }
            ]
          },
          {
            "type": "criteria",
            "title": "Traction splint",
            "icon": "ruler",
            "include": [
              "Isolated, closed mid-shaft femur fracture"
            ],
            "exclude": [
              "Hip or pelvic injury",
              "Knee or lower leg or ankle injury on the same side",
              "Partial amputation or bone ends out of the wound"
            ]
          },
          {
            "type": "list",
            "title": "Dislocations",
            "icon": "triangle-alert",
            "items": [
              "Splint in the position found; don't reduce unless your protocol allows a specific reduction",
              "Pulseless limb: urgent transport; one gentle realignment attempt if protocol allows"
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
                    "label": "Trauma assessment",
                    "sub": "Limbs and PMS",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Closed mid-shaft forearm fracture: correct technique?",
          "options": [
            "Immobilise elbow and wrist, pad, check PMS before and after",
            "Splint tightly over the fracture",
            "Straighten it first",
            "Only the fracture site"
          ],
          "correct": 0,
          "explanation": "Joint above and below."
        },
        {
          "q": "Motorcyclist with a short, externally rotated leg and groin pain, thigh not deformed. Traction splint?",
          "options": [
            "No: likely hip fracture – scoop or vacuum mattress, pad between the legs",
            "Yes",
            "Only if pulses are absent",
            "Only for children"
          ],
          "correct": 0,
          "explanation": "Traction is for mid-thigh fractures."
        },
        {
          "q": "Fall onto the shoulder: arm held away from the body, squared-off shoulder. You:",
          "options": [
            "Sling and swath in the position found, pad the armpit, check PMS",
            "Reduce it",
            "Traction splint",
            "Hang the arm down"
          ],
          "correct": 0,
          "explanation": "Don't reduce unless protocol allows."
        },
        {
          "q": "Teenager with a deformed mid-thigh after a fall. Before a traction splint you must rule out:",
          "options": [
            "Hip, pelvic, knee and lower-leg injuries on the same side",
            "Nothing",
            "Head injury only",
            "Abdominal pain only"
          ],
          "correct": 0,
          "explanation": "Traction pulls through those joints."
        },
        {
          "q": "PMS stands for:",
          "options": [
            "Pulse, movement, sensation",
            "Pain, motion, swelling",
            "Position, mobility, strength",
            "Pulse, muscle, skin"
          ],
          "correct": 0,
          "explanation": "Check before and after splinting."
        },
        {
          "q": "Splinting a joint injury: immobilise",
          "options": [
            "The bones above and below",
            "Only the joint",
            "The whole body",
            "Nothing: joints don't need splinting"
          ],
          "correct": 0,
          "explanation": "Bone injury: the joints above and below."
        },
        {
          "q": "After splinting, the fingers are cold and numb. You:",
          "options": [
            "Loosen and re-pad the splint and recheck",
            "Leave it",
            "Add another strap",
            "Elevate only"
          ],
          "correct": 0,
          "explanation": "Splints shouldn't cut off circulation."
        },
        {
          "q": "Buddy taping is used for:",
          "options": [
            "Finger and toe injuries",
            "Femur fractures",
            "Pelvic fractures",
            "Shoulder dislocations"
          ],
          "correct": 0,
          "explanation": "With padding between digits."
        },
        {
          "q": "Pulseless, severely angulated lower leg fracture. Per most protocols:",
          "options": [
            "One gentle in-line traction to realign, then splint and recheck",
            "Splint as found regardless",
            "Force it straight repeatedly",
            "Traction splint"
          ],
          "correct": 0,
          "explanation": "Restoring circulation saves the limb."
        },
        {
          "q": "Best device for a suspected hip fracture:",
          "options": [
            "Scoop stretcher or vacuum mattress",
            "Traction splint",
            "Short board",
            "Walking with help"
          ],
          "correct": 0,
          "explanation": "Pad and support; analgesia."
        }
      ],
      "flashcards": [
        {
          "question": "Splinting principles",
          "answer": "Joint above and below (or bones above and below a joint), position found, pad, secure away from the injury, PMS before and after.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "Traction splint contraindications",
          "answer": "Hip or pelvic injury, knee or lower-leg injury on the same side, partial amputation or protruding bone. Only for isolated mid-shaft femur fractures.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "Dislocations",
          "answer": "Splint as found and transport. Reduce only where your protocol allows; a pulseless limb is urgent.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "Sling and swath",
          "answer": "Sling supports the forearm; swath binds the arm to the chest. For clavicle, shoulder and upper-arm injuries.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "Buddy taping",
          "answer": "Tape an injured finger or toe to its neighbour with padding between; check circulation before and after.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "Spinal motion restriction equipment",
          "answer": "Collar, extrication device, long board for extrication only, scoop and vacuum mattress for transport.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "When the spine can be cleared (NEXUS)",
          "answer": "No midline tenderness, normal alertness, no intoxication, no focal deficit, no distracting injury.",
          "category": "Splinting & Bandaging"
        },
        {
          "question": "PMS checks",
          "answer": "Pulse (radial or pedal), Movement (wiggle fingers or toes), Sensation (light touch). Before and after every splint.",
          "category": "Splinting & Bandaging"
        }
      ],
      "critical": [
        {
          "id": "crit_10_4_1",
          "scenario": "Cyclist hit by a car: deformed right mid-thigh, no hip or knee pain, no other injuries, stable vital signs.",
          "question": "Splint and critical steps?",
          "options": [
            {
              "t": "Traction splint for an isolated mid-shaft femur fracture; check PMS before and after; analgesia; monitor for blood loss",
              "f": "Correct."
            },
            {
              "t": "Short board only",
              "f": "Traction reduces pain and bleeding."
            },
            {
              "t": "No splint",
              "f": "Splint long bones."
            },
            {
              "t": "Traction without checking PMS",
              "f": "Always check before and after."
            }
          ],
          "correct": 0,
          "explanation": "A femur can hide 1–1.5 L of blood.",
          "kpi": "Applies a traction splint with appropriate checks"
        },
        {
          "id": "crit_10_4_2",
          "scenario": "17-year-old football player with an obviously dislocated shoulder begs you to 'pop it back in'.",
          "question": "Management?",
          "options": [
            {
              "t": "Explain that you'll splint it as found (sling and swath, padded armpit), check PMS, ice and analgesia, and transport",
              "f": "Correct."
            },
            {
              "t": "Reduce it",
              "f": "Not without protocol authorisation."
            },
            {
              "t": "Let the coach do it",
              "f": "Risk of nerve and vessel injury."
            },
            {
              "t": "Traction splint the arm",
              "f": "Wrong device."
            }
          ],
          "correct": 0,
          "explanation": "Associated fractures need X-ray before reduction.",
          "kpi": "Splints a dislocation in the position found"
        },
        {
          "id": "crit_10_4_3",
          "scenario": "Fall of about 4 m onto lumber: severe low back pain, weak legs, a head wound.",
          "question": "Motion restriction approach?",
          "options": [
            {
              "t": "Manual stabilisation, collar, log-roll onto a scoop or vacuum mattress, pad, recheck neuro, trauma centre",
              "f": "Correct."
            },
            {
              "t": "Sit him up for comfort",
              "f": "New weakness means possible cord injury."
            },
            {
              "t": "Walk him to the ambulance",
              "f": "Never."
            },
            {
              "t": "Long board for the whole transport",
              "f": "Use a scoop or vacuum mattress."
            }
          ],
          "correct": 0,
          "explanation": "Neuro deficit plus midline pain requires spinal motion restriction.",
          "kpi": "Applies spinal motion restriction for neurologic deficit"
        }
      ]
    },
    {
      "id": "c10s5",
      "shortTitle": "10.5 Spinal Motion Restriction Skills",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Spinal Motion Restriction Skills",
        "lead": "Decide by assessment, not by mechanism alone. Patients who need it get a collar and a flat, padded, well-fitted surface – a scoop or vacuum mattress, not a long board for the ride. Patients who don't need it are better off without it.",
        "sections": [
          {
            "type": "criteria",
            "title": "Spinal motion restriction (blunt trauma)",
            "icon": "bone",
            "include": [
              "Altered consciousness or intoxication",
              "Midline spinal pain or tenderness",
              "New numbness, weakness or tingling",
              "Spinal deformity",
              "Distracting injury or circumstances (including children who can't be assessed)"
            ],
            "exclude": [
              "Alert, sober, no midline pain or tenderness, normal neuro exam, no distracting injury (NEXUS)",
              "Penetrating trauma without neuro deficit: no spinal immobilisation"
            ]
          },
          {
            "type": "steps",
            "title": "Techniques",
            "icon": "user",
            "steps": [
              {
                "title": "Manual stabilisation",
                "text": "Hold the head in line from the start."
              },
              {
                "title": "Collar",
                "text": "Size from the top of the shoulder (trapezius) to the angle of the jaw; neutral position.",
                "figures": [
                  {
                    "src": "../images/guides/c10s5-225.webp",
                    "alt": "Measuring finger-widths from the top of the shoulder to the angle of the jaw, then matching the collar's sizing post.",
                    "w": 1200,
                    "h": 896
                  }
                ]
              },
              {
                "title": "Ambulatory patient",
                "text": "Collar on, let them step and sit onto the stretcher; no board."
              },
              {
                "title": "Log roll",
                "text": "At least 4 people: one at the head calls the moves; minimise rolls (a scoop needs none)."
              },
              {
                "title": "Secure",
                "text": "Pad gaps; straps torso first (chest then pelvis), then head, then legs. Recheck neuro."
              },
              {
                "title": "Breathing worse?",
                "text": "Loosen chest straps; tilt the whole board for vomiting; sit up if safe."
              }
            ]
          },
          {
            "type": "table",
            "title": "Special cases",
            "icon": "triangle-alert",
            "stack": true,
            "columns": [
              "Patient",
              "Adjust"
            ],
            "rows": [
              [
                "Children under about 8",
                "Pad under the shoulders: the large head flexes the neck"
              ],
              [
                "Older adults with kyphosis",
                "Pad to their shape; don't force them flat; collar may not fit – use towels"
              ],
              [
                "Pregnancy over 20 weeks",
                "Tilt the whole board to the left, or wedge under the right hip"
              ],
              [
                "Child in an intact car seat",
                "May transport in the seat if it fits the stretcher and the child is stable"
              ],
              [
                "Unsafe scene or arrest in a car",
                "Rapid extrication with as much alignment as possible"
              ]
            ],
            "figures": [
              {
                "src": "../images/guides/c10s5-226.webp",
                "alt": "Side view of a child on a flat board with the head flexed forward, then corrected with padding under the shoulders so the neck is neutral.",
                "w": 1200,
                "h": 896,
                "pos": "after"
              }
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
                    "label": "Trauma assessment",
                    "sub": "Neuro and spine exam",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "GCS",
                    "sub": "Level of consciousness",
                    "href": "../pages/GCS.html",
                    "icon": "brain"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Restrained driver, low-speed rear-end, GCS 15, no midline tenderness, normal neuro, sober, no distracting injury. Motion restriction?",
          "options": [
            "None needed: document and transport sitting if wanted",
            "Full board and collar",
            "Collar only",
            "Vacuum mattress"
          ],
          "correct": 0,
          "explanation": "Meets all NEXUS criteria."
        },
        {
          "q": "Which mechanism alone requires spinal motion restriction?",
          "options": [
            "None: decide by assessment",
            "Any fall over 1 m",
            "Any crash",
            "Any fall from standing"
          ],
          "correct": 0,
          "explanation": "Mechanism raises suspicion; findings decide."
        },
        {
          "q": "78-year-old after a ground-level fall: neck pain with midline tenderness, normal neuro. Best transport?",
          "options": [
            "Collar (or padding) and secured on the stretcher in a comfortable position, padded to her shape",
            "Long board",
            "No restriction: older people are harmed by boards",
            "Manual stabilisation only"
          ],
          "correct": 0,
          "explanation": "Older adults fracture with low energy."
        },
        {
          "q": "Patient on a board becomes short of breath. You:",
          "options": [
            "Loosen chest straps; if no better, move to a scoop or vacuum mattress and sit up if safe",
            "Leave him",
            "Lay flatter",
            "Intubate"
          ],
          "correct": 0,
          "explanation": "Boards restrict breathing."
        },
        {
          "q": "NEXUS criteria include all EXCEPT:",
          "options": [
            "Age under 65",
            "No midline tenderness",
            "Normal alertness",
            "No distracting injury"
          ],
          "correct": 0,
          "explanation": "Also no intoxication, no focal deficit."
        },
        {
          "q": "Collar sizing:",
          "options": [
            "Trapezius to the angle of the jaw",
            "Chin to sternum",
            "Ear to shoulder",
            "One size fits all"
          ],
          "correct": 0,
          "explanation": "Neutral position."
        },
        {
          "q": "Minimum crew for a log roll:",
          "options": [
            "4",
            "1",
            "2",
            "3"
          ],
          "correct": 0,
          "explanation": "Head person leads."
        },
        {
          "q": "Children under about 8 on a flat surface need:",
          "options": [
            "Padding under the shoulders",
            "A pillow under the head",
            "Nothing extra",
            "Head-down tilt"
          ],
          "correct": 0,
          "explanation": "Large occiput flexes the neck."
        },
        {
          "q": "Stab wound to the neck, normal neuro. Collar?",
          "options": [
            "No: penetrating trauma without deficit doesn't need immobilisation",
            "Yes, always",
            "Only with a board",
            "Only if bleeding"
          ],
          "correct": 0,
          "explanation": "Collars hide bleeding and airway problems."
        },
        {
          "q": "Best surface for transport when restriction is needed:",
          "options": [
            "Scoop stretcher or vacuum mattress",
            "Long board",
            "Short board",
            "Stair chair"
          ],
          "correct": 0,
          "explanation": "Boards are for extrication."
        }
      ],
      "flashcards": [
        {
          "question": "NEXUS criteria",
          "answer": "No posterior midline tenderness, no focal neuro deficit, normal alertness, no intoxication, no distracting injury.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "What a collar does",
          "answer": "Limits movement only partly and reminds the patient not to move; it's not a substitute for a good surface and padding.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "Collar sizing",
          "answer": "From the top of the shoulder (trapezius) to the angle of the jaw, with the neck neutral.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "Log roll crew",
          "answer": "At least 4: one at the head calling the moves, three at the body. Scoops avoid rolling.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "Rapid extrication",
          "answer": "Unsafe scene, cardiac arrest, or a patient who needs immediate life-saving care.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "Children under about 8",
          "answer": "Large occiput flexes the neck on a flat surface: pad under the shoulders. Pediatric collar.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "Pregnancy over 20 weeks",
          "answer": "Tilt the whole board left or wedge under the right hip to prevent supine hypotension.",
          "category": "Spinal Motion Restriction Skills"
        },
        {
          "question": "Securing order",
          "answer": "Pad gaps, torso first (chest then pelvis), then head, then legs. Recheck neuro after.",
          "category": "Spinal Motion Restriction Skills"
        }
      ],
      "critical": [
        {
          "id": "crit_10_5_1",
          "scenario": "High-speed side impact: driver's door crushed, fuel leaking. Driver alert, no spine pain, normal neuro, but a deformed femur.",
          "question": "Sequence?",
          "options": [
            {
              "t": "Rapid extrication for the fuel hazard with manual alignment; the femur is a distracting injury so restrict motion (collar, scoop or vacuum), then splint",
              "f": "Correct."
            },
            {
              "t": "Full careful extrication with a short board first",
              "f": "Fuel leak: rapid extrication."
            },
            {
              "t": "Clear the spine: no tenderness",
              "f": "Distracting injury invalidates NEXUS."
            },
            {
              "t": "Splint the femur in the car first",
              "f": "Get out of danger first."
            }
          ],
          "correct": 0,
          "explanation": "Scene hazards decide the speed; findings decide restriction.",
          "kpi": "Applies rapid extrication and NEXUS correctly"
        },
        {
          "id": "crit_10_5_2",
          "scenario": "Fall of 4 m onto his feet: both heels very painful, no spine pain, normal neuro, sober, GCS 15.",
          "question": "Motion restriction?",
          "options": [
            {
              "t": "Yes: painful heel fractures are distracting injuries and axial loading often fractures the lumbar spine",
              "f": "Correct."
            },
            {
              "t": "No: NEXUS negative",
              "f": "Distraction makes the exam unreliable."
            },
            {
              "t": "Collar only",
              "f": "Lumbar spine is at risk."
            },
            {
              "t": "Walk him to the stretcher",
              "f": "He can't bear weight."
            }
          ],
          "correct": 0,
          "explanation": "Scoop or vacuum mattress; splint the heels.",
          "kpi": "Recognizes distracting injuries in axial-load mechanisms"
        },
        {
          "id": "crit_10_5_3",
          "scenario": "5-year-old in an intact car seat after a moderate rear-end crash: crying but consolable, no tenderness, moves everything.",
          "question": "Best approach?",
          "options": [
            {
              "t": "No restriction needed if the exam is reliable; transport in the car seat secured to the stretcher and explain to the parents",
              "f": "Correct."
            },
            {
              "t": "Board and collar always for children",
              "f": "Not if assessment is normal."
            },
            {
              "t": "Parents drive him",
              "f": "Transport if evaluation is wanted."
            },
            {
              "t": "Remove him from the seat onto a board",
              "f": "Unnecessary movement."
            }
          ],
          "correct": 0,
          "explanation": "If the child can't be assessed reliably, restrict in the seat with padding.",
          "kpi": "Applies selective spinal motion restriction in children"
        }
      ]
    },
    {
      "id": "c10s6",
      "shortTitle": "10.6 Patient Movement & Lifting",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Patient Movement & Lifting",
        "lead": "The safest lift is the one you plan. Know the weight and the route, get enough people, use the power lift and power grip, and talk on every move. Around helicopters, approach only when the crew signals you, from the front and never from uphill or the tail.",
        "sections": [
          {
            "type": "steps",
            "title": "Power lift and grip",
            "icon": "dumbbell",
            "steps": [
              {
                "title": "Feet",
                "text": "Shoulder-width apart, one slightly forward."
              },
              {
                "title": "Back",
                "text": "Straight and locked; bend at the hips and knees."
              },
              {
                "title": "Grip",
                "text": "Palms up, whole hand around the handle (power grip), hands about 25 cm apart."
              },
              {
                "title": "Lift",
                "text": "Load close; push up with the legs; exhale; pivot, never twist."
              },
              {
                "title": "Talk",
                "text": "One leader: \"Ready? Lift on three: one, two, three.\" Same for lowering."
              }
            ],
            "figures": [
              {
                "src": "../images/guides/c10s6-227.webp",
                "alt": "Power lift from the side (straight back, squat, load close) and a close-up of the palms-up power grip on a stretcher handle.",
                "w": 1200,
                "h": 896,
                "pos": "before"
              }
            ]
          },
          {
            "type": "table",
            "title": "Stairs and tight spaces",
            "icon": "move-vertical",
            "stack": true,
            "columns": [
              "Situation",
              "Do"
            ],
            "rows": [
              [
                "Stair chair down stairs",
                "Patient facing down (feet first); the person at the feet takes much of the weight, the head person controls; tracks if fitted"
              ],
              [
                "Can't sit (spinal, unconscious)",
                "Scoop, flexible stretcher or a carry sheet with enough people"
              ],
              [
                "Bariatric",
                "4–6 or more people, rated equipment, mechanical lifts, fire service early"
              ],
              [
                "You or your partner hurt",
                "Stop, secure the patient, call for more help"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Helicopter landing zone",
            "icon": "plane-takeoff",
            "items": [
              "At least 30 × 30 m (100 × 100 feet), firm, as level as possible, clear of wires, poles and loose objects",
              "Mark the corners with lights; tell the crew about wires, slopes and wind",
              "No one approaches until the crew signals",
              "Approach from the front, in the pilot's view – never from the tail or the uphill side",
              "Secure loose items; no running; eye protection"
            ],
            "figures": [
              {
                "src": "../images/guides/c10s6-228.webp",
                "alt": "A landing zone with lit corners, wind indicator, a power line marked as a hazard, and the safe approach arc at the front of the helicopter, tail and uphill sides crossed out.",
                "w": 1200,
                "h": 896,
                "pos": "before"
              }
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
                    "label": "Trauma assessment",
                    "sub": "Before moving an injured patient",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "A provider lifts a board bending at the waist, legs straight, fingers-only grip. He's violating:",
          "options": [
            "Leg lift, straight back and power grip",
            "Only the grip",
            "Nothing if his back is straight",
            "Nothing"
          ],
          "correct": 0,
          "explanation": "All three principles."
        },
        {
          "q": "90 kg patient in a stair chair down narrow stairs. Most accurate?",
          "options": [
            "Patient faces down the stairs; the foot-end rescuer takes much of the weight; both use their legs",
            "Head first down the stairs",
            "Both face the same way",
            "Two people always enough"
          ],
          "correct": 0,
          "explanation": "Use tracks if the chair has them."
        },
        {
          "q": "At night the wind at your landing zone shifts direction. You:",
          "options": [
            "Radio the new wind direction, adjust markings if needed, stay clear on landing",
            "Leave it",
            "Stand in the middle with a torch",
            "Point headlights at the LZ"
          ],
          "correct": 0,
          "explanation": "Helicopters land into the wind; lights in the pilot's eyes blind them."
        },
        {
          "q": "180 kg patient who can't sit must go down narrow stairs. Best?",
          "options": [
            "Flexible or bariatric carry device with 4–6 or more rescuers",
            "Stair chair with 4",
            "Let them walk",
            "Two people with a board"
          ],
          "correct": 0,
          "explanation": "Call extra crews early."
        },
        {
          "q": "Power grip means:",
          "options": [
            "Palms up, whole hand around the handle",
            "Fingertips only",
            "Palms down",
            "One hand"
          ],
          "correct": 0,
          "explanation": "Maximum strength and control."
        },
        {
          "q": "Approach a landed helicopter:",
          "options": [
            "From the front, when signalled, in the pilot's view",
            "From the tail",
            "From the uphill side",
            "Running, as soon as it lands"
          ],
          "correct": 0,
          "explanation": "Tail rotors kill."
        },
        {
          "q": "Minimum landing zone size commonly used:",
          "options": [
            "About 30 × 30 m (100 × 100 feet)",
            "5 × 5 m",
            "10 × 10 feet",
            "Any car park space"
          ],
          "correct": 0,
          "explanation": "Larger at night or for big aircraft."
        },
        {
          "q": "Your partner hurts their back halfway down the stairs. You:",
          "options": [
            "Stop, secure the patient safely, call for help",
            "Carry on alone",
            "Drag the chair",
            "Ask the patient to walk"
          ],
          "correct": 0,
          "explanation": "Two injured providers help no one."
        },
        {
          "q": "Turning while carrying:",
          "options": [
            "Pivot your whole body",
            "Twist at the waist",
            "Twist quickly",
            "Lean to the side"
          ],
          "correct": 0,
          "explanation": "Never twist under load."
        },
        {
          "q": "Team lift communication:",
          "options": [
            "One leader counts; lift on the agreed word",
            "Everyone counts",
            "No count needed",
            "Lift when you feel ready"
          ],
          "correct": 0,
          "explanation": "Same for lowering."
        }
      ],
      "flashcards": [
        {
          "question": "Body mechanics",
          "answer": "Lift with your legs, back straight, feet shoulder-width apart, load close, pivot don't twist.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Power lift",
          "answer": "Squat with a straight back, power grip, load close, push up with the legs, exhale.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Power grip",
          "answer": "Palms up, whole hand around the handle, hands about 25 cm apart.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Stair chair down stairs",
          "answer": "Patient faces down the stairs; foot-end rescuer takes much of the weight; head-end controls; coordinate each step; tracks if fitted.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Landing zone",
          "answer": "At least about 30 × 30 m (100 × 100 feet), firm, level, clear of wires and debris, corners lit. Approach from the front when signalled; never the tail or uphill side.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Direct vs prepared lifts",
          "answer": "Raise the stretcher and use transfer devices to reduce bending; lift from the ground only when needed.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Bariatric moves",
          "answer": "4–6 or more rescuers, rated equipment, lifts and transfer mats, plan the route, call for help early.",
          "category": "Patient Movement & Lifting"
        },
        {
          "question": "Team lifting words",
          "answer": "One leader: \"Ready? Lift on three: one, two, three.\" Same pattern to lower.",
          "category": "Patient Movement & Lifting"
        }
      ],
      "critical": [
        {
          "id": "crit_10_6_1",
          "scenario": "Third-floor walk-up: 100 kg woman with heart failure, SpO₂ 89%, can't walk. You and your partner are tired; narrow stairs with a turn.",
          "question": "Plan?",
          "options": [
            {
              "t": "Oxygen and position of comfort now, call for more people (fire service), then carry in a stair chair sitting up",
              "f": "Correct."
            },
            {
              "t": "Carry her alone now",
              "f": "Injury risk to all."
            },
            {
              "t": "Let her walk down",
              "f": "She's hypoxic and breathless."
            },
            {
              "t": "Lay her flat on a board",
              "f": "Worsens breathing."
            }
          ],
          "correct": 0,
          "explanation": "If she deteriorates, a faster carry device with whoever is there.",
          "kpi": "Plans a safe move with adequate resources"
        },
        {
          "id": "crit_10_6_2",
          "scenario": "Night landing zone in a sloping field; wind from the north; power line along one fence.",
          "question": "Setup and approach?",
          "options": [
            {
              "t": "Choose the flattest area away from the line, light the corners, tell the crew about the wires, slope and wind; approach only when signalled, from the front and downhill side",
              "f": "Correct."
            },
            {
              "t": "Approach from the uphill side",
              "f": "The rotor is lowest there."
            },
            {
              "t": "Shine headlights at the aircraft",
              "f": "Blinds the pilot."
            },
            {
              "t": "Don't mention the wires",
              "f": "Wires are the biggest hazard."
            }
          ],
          "correct": 0,
          "explanation": "Secure loose items; eye protection.",
          "kpi": "Establishes a safe helicopter landing zone"
        },
        {
          "id": "crit_10_6_3",
          "scenario": "Carrying a stable 75 kg man in a stair chair to the lift, your partner feels sharp back pain and can't continue.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Stop, lower and secure the chair, check your partner, call for more help, reassure the patient",
              "f": "Correct."
            },
            {
              "t": "Carry on alone",
              "f": "You'll be hurt too."
            },
            {
              "t": "Ask the patient to walk the rest",
              "f": "Not your plan to change."
            },
            {
              "t": "Ask bystanders to lift without guidance",
              "f": "Use trained help."
            }
          ],
          "correct": 0,
          "explanation": "Report the injury.",
          "kpi": "Responds safely to a crew injury during a move"
        }
      ]
    },
    {
      "id": "c10s7",
      "shortTitle": "10.7 ECG Acquisition — 12-Lead",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "ECG Acquisition — 12-Lead",
        "lead": "A good 12-lead starts with good skin contact and the right intercostal spaces. Get it within 10 minutes of first contact for chest pain, add right-sided and posterior leads when the pattern asks for them, and transmit early.",
        "sections": [
          {
            "type": "steps",
            "title": "Placement",
            "icon": "target",
            "steps": [
              {
                "title": "Find the 4th space",
                "text": "Angle of Louis = 2nd rib; the space below is the 2nd intercostal space; count down to the 4th."
              },
              {
                "title": "V1 and V2",
                "text": "4th intercostal space, right and left of the sternum."
              },
              {
                "title": "V4",
                "text": "5th intercostal space, mid-clavicular line."
              },
              {
                "title": "V3",
                "text": "Halfway between V2 and V4."
              },
              {
                "title": "V5 and V6",
                "text": "Same level as V4: anterior and mid-axillary lines."
              },
              {
                "title": "Breasts",
                "text": "Place V3–V6 under the breast tissue, not on it; after mastectomy, use the same landmarks."
              },
              {
                "title": "Limbs",
                "text": "RA, LA, RL, LL on the limbs (or shoulders and hips)."
              }
            ]
          },
          {
            "type": "table",
            "title": "Extra leads",
            "icon": "zoom-in",
            "stack": true,
            "columns": [
              "When",
              "Add"
            ],
            "rows": [
              [
                "Inferior STEMI (II, III, aVF)",
                "V4R: right 5th intercostal space, mid-clavicular – RV infarction"
              ],
              [
                "ST depression in V1–V3",
                "V7–V9: posterior, same level as V6 – posterior MI"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Artifact",
            "icon": "activity",
            "stack": true,
            "columns": [
              "Problem",
              "Fix"
            ],
            "rows": [
              [
                "Wandering baseline",
                "Better skin prep and contact; reduce movement and breathing motion"
              ],
              [
                "Muscle tremor",
                "Warm the patient, support the arms, ask them to relax"
              ],
              [
                "Mains interference (50 or 60 Hz)",
                "Unplug nearby devices; check cables"
              ],
              [
                "Lead off",
                "Reattach; check the cable"
              ]
            ],
            "notes": [
              "Skin prep: clip hair, alcohol or abrasion, dry, press electrodes firmly."
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
                    "ecg": "stemiInf",
                    "label": "Inferior STEMI",
                    "sub": "Add V4R before nitrates.",
                    "lead": "III"
                  },
                  {
                    "ecg": "stemiInfRv",
                    "label": "Inferior with RV infarction",
                    "sub": "ST elevation in V4R.",
                    "lead": "V4R"
                  },
                  {
                    "ecg": "stemiPost",
                    "label": "Posterior MI",
                    "sub": "ST depression V1–V3: add V7–V9.",
                    "lead": "V2"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "ECG simulator",
                    "sub": "Rhythms and 12-leads",
                    "href": "../pages/ecg.html",
                    "icon": "activity"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "12-lead has a wandering baseline in several leads. First step?",
          "options": [
            "Re-prep the skin and reapply electrodes firmly; reduce movement",
            "Replace the battery",
            "Change filters only",
            "Lay the patient flat"
          ],
          "correct": 0,
          "explanation": "Most artifact is contact or movement."
        },
        {
          "q": "V1 was placed in the 2nd intercostal space. Error?",
          "options": [
            "V1 belongs in the 4th space right of the sternum",
            "None",
            "V1 goes in the 5th space",
            "Only limb leads matter"
          ],
          "correct": 0,
          "explanation": "High V1/V2 is the commonest error."
        },
        {
          "q": "Inferior ST elevation with ST depression in V3–V4. Extra leads?",
          "options": [
            "V4R for RV involvement and V7–V9 for posterior MI",
            "None",
            "V7 only",
            "Posterior only"
          ],
          "correct": 0,
          "explanation": "Changes treatment and destination."
        },
        {
          "q": "Time goal for a 12-lead in suspected ACS:",
          "options": [
            "Within 10 minutes of first contact",
            "Within 30 minutes",
            "Only if pain persists",
            "No goal"
          ],
          "correct": 0,
          "explanation": "Transmit early."
        },
        {
          "q": "V4 placement:",
          "options": [
            "5th intercostal space, mid-clavicular line",
            "4th space, sternum",
            "6th space, axilla",
            "2nd space"
          ],
          "correct": 0,
          "explanation": "V5 and V6 at the same level."
        },
        {
          "q": "Where is V4R?",
          "options": [
            "Right 5th intercostal space, mid-clavicular line",
            "Left 4th space",
            "Back",
            "Right shoulder"
          ],
          "correct": 0,
          "explanation": "Mirror of V4."
        },
        {
          "q": "Where are V7–V9?",
          "options": [
            "Posterior chest at the level of V6",
            "Right chest",
            "Abdomen",
            "Neck"
          ],
          "correct": 0,
          "explanation": "Posterior axillary line to beside the spine."
        },
        {
          "q": "Fine regular interference on all leads with a heater running nearby:",
          "options": [
            "Mains (50 or 60 Hz) interference: unplug devices",
            "Muscle tremor",
            "VF",
            "Lead reversal"
          ],
          "correct": 0,
          "explanation": "Check cables too."
        },
        {
          "q": "Female patient: where do V3–V6 go?",
          "options": [
            "Under the breast tissue",
            "On top of the breast",
            "Above the breast",
            "Skip them"
          ],
          "correct": 0,
          "explanation": "Breast tissue lowers voltage and shifts position."
        },
        {
          "q": "Best skin preparation:",
          "options": [
            "Clip hair, clean, dry, press electrodes firmly",
            "Apply lotion",
            "Leave hair",
            "Wet the skin"
          ],
          "correct": 0,
          "explanation": "Contact is everything."
        }
      ],
      "flashcards": [
        {
          "question": "V1",
          "answer": "4th intercostal space, right of the sternum. Find the angle of Louis (2nd rib) and count down.",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "V4",
          "answer": "5th intercostal space, mid-clavicular line; V5 and V6 on the same level.",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "Limb leads",
          "answer": "RA, LA, RL (ground), LL – on the limbs or on the shoulders and lower abdomen.",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "Most common placement error",
          "answer": "V1 and V2 too high (2nd or 3rd intercostal space).",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "Diagnostic-quality ECG",
          "answer": "Skin prep: clip hair, clean, dry, press electrodes firmly; still, warm, relaxed patient.",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "Four kinds of artifact",
          "answer": "Wandering baseline (contact, movement), mains interference (50 or 60 Hz), muscle tremor, lead off.",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "Right-sided V4R",
          "answer": "In every inferior STEMI to look for RV infarction (before nitrates).",
          "category": "ECG Acquisition — 12-Lead"
        },
        {
          "question": "Posterior leads V7–V9",
          "answer": "When V1–V3 show ST depression: possible posterior MI.",
          "category": "ECG Acquisition — 12-Lead"
        }
      ],
      "critical": [
        {
          "id": "crit_10_7_1",
          "scenario": "Chest pain radiating to the jaw; he's shivering in a cold ambulance and keeps lifting his arms to talk. The tracing is coarse and irregular.",
          "question": "Best sequence?",
          "options": [
            {
              "t": "Warm him, support his arms, re-prep the skin, ask him to relax and breathe slowly, then repeat the 12-lead",
              "f": "Correct."
            },
            {
              "t": "Transmit the noisy tracing",
              "f": "Can hide or mimic STEMI."
            },
            {
              "t": "Skip the ECG",
              "f": "He needs one within 10 minutes."
            },
            {
              "t": "Treat as VF",
              "f": "Check the patient: he's talking."
            }
          ],
          "correct": 0,
          "explanation": "Tremor artifact can mimic arrhythmias.",
          "kpi": "Troubleshoots artifact to obtain a diagnostic 12-lead"
        },
        {
          "id": "crit_10_7_2",
          "scenario": "72-year-old with syncope after bilateral mastectomy with prostheses; you need a 12-lead.",
          "question": "How do you adjust?",
          "options": [
            {
              "t": "Remove the prostheses, use standard landmarks (4th and 5th spaces) and note any adjustments on the tracing",
              "f": "Correct."
            },
            {
              "t": "Place electrodes on the prostheses",
              "f": "No contact."
            },
            {
              "t": "Skip the chest leads",
              "f": "Needed for syncope."
            },
            {
              "t": "Guess the positions",
              "f": "Use bony landmarks."
            }
          ],
          "correct": 0,
          "explanation": "Ask permission and preserve privacy.",
          "kpi": "Adapts lead placement to patient anatomy"
        },
        {
          "id": "crit_10_7_3",
          "scenario": "Chest pain call; your partner reminds you of the 10-minute ECG goal. The patient is sitting up, talking, mildly distressed.",
          "question": "Most efficient approach?",
          "options": [
            {
              "t": "Partner sets up the monitor and electrodes while you take the history; expose the chest with privacy; acquire and transmit early",
              "f": "Correct."
            },
            {
              "t": "Full history first, then the ECG",
              "f": "Do both at once."
            },
            {
              "t": "Wait until the ambulance",
              "f": "Delays the cath lab."
            },
            {
              "t": "Only if pain is severe",
              "f": "All suspected ACS."
            }
          ],
          "correct": 0,
          "explanation": "Parallel tasks save minutes.",
          "kpi": "Acquires a 12-lead within 10 minutes of contact"
        }
      ]
    },
    {
      "id": "c10s8",
      "shortTitle": "10.8 Medication Administration Skills",
      "guide": {
        "group": "c10",
        "groupLabel": "Chapter 10 · Clinical Procedures & Skills",
        "title": "Medication Administration Skills",
        "lead": "The hands-on part of pharmacology: confirm the indication, check the contraindications, give it by the right technique, then watch what it does. Write it down as soon as it's given.",
        "sections": [
          {
            "type": "table",
            "title": "Technique by route",
            "icon": "syringe",
            "stack": true,
            "columns": [
              "Route",
              "How"
            ],
            "rows": [
              [
                "Sublingual (nitroglycerin)",
                "Under the tongue, mouth closed, don't swallow; sitting or lying"
              ],
              [
                "Oral and buccal (aspirin, glucose)",
                "Aspirin chewed; glucose gel between cheek and gum – only if alert and swallowing"
              ],
              [
                "IM auto-injector",
                "Outer mid-thigh, through clothing if needed; hold as the device instructs; massage the site"
              ],
              [
                "Intranasal",
                "Atomiser, half in each nostril, about 1 mL per side at most"
              ],
              [
                "Nebulised",
                "6–8 L/min oxygen or air; mask or mouthpiece; can run in-line with CPAP or bag-mask"
              ],
              [
                "Metered-dose inhaler",
                "Spacer, shake, one puff, slow deep breaths"
              ]
            ],
            "figures": [
              {
                "src": "../images/guides/c5s4-070.webp",
                "alt": "An auto-injector pressed into the outer middle thigh through clothing, with the target area shaded on the anterolateral thigh.",
                "w": 1024,
                "h": 1024,
                "pos": "after"
              }
            ]
          },
          {
            "type": "table",
            "title": "Before you give",
            "icon": "clipboard-list",
            "stack": true,
            "columns": [
              "Drug",
              "Don't give if"
            ],
            "rows": [
              [
                "Nitroglycerin",
                "SBP below 90 mmHg (or 30 below baseline), HR below 50 or above 100, RV infarction, PDE-5 inhibitor (24 hours sildenafil or vardenafil, 48 hours tadalafil)"
              ],
              [
                "Aspirin",
                "Allergy, active bleeding"
              ],
              [
                "Oral glucose",
                "Can't swallow or protect the airway"
              ],
              [
                "Activated charcoal",
                "Reduced consciousness, caustics, hydrocarbons; only with medical direction"
              ]
            ]
          },
          {
            "type": "doses",
            "title": "Common BLS doses",
            "icon": "pill",
            "rows": [
              {
                "drug": "Epinephrine auto-injector",
                "dose": "0.3 mg IM; 0.15 mg if under 25 kg",
                "note": "Outer thigh",
                "level": "BLS"
              },
              {
                "drug": "Aspirin",
                "dose": "162–325 mg chewed",
                "note": "Suspected ACS",
                "level": "BLS"
              },
              {
                "drug": "Naloxone (child)",
                "dose": "0.1 mg/kg, maximum 2 mg",
                "note": "Titrate to breathing; ventilate first",
                "level": "BLS"
              },
              {
                "drug": "Albuterol",
                "dose": "2.5 mg nebulised",
                "note": "Repeat per protocol",
                "level": "BLS"
              }
            ]
          },
          {
            "type": "list",
            "title": "Record",
            "icon": "notebook-pen",
            "items": [
              "Drug, dose, route, site, time, who gave it",
              "Vital signs and symptoms before and after",
              "Side effects; who authorised it (medical direction if required)"
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
                    "sub": "Pediatric doses",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  },
                  {
                    "label": "Drug index",
                    "sub": "Indications and contraindications",
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
          "q": "Before nitroglycerin, the patient says he took sildenafil 12 hours ago. You:",
          "options": [
            "Withhold nitroglycerin and tell medical direction and the hospital",
            "Give it: only 4 hours matters",
            "Half dose",
            "Give and monitor BP every 2 minutes"
          ],
          "correct": 0,
          "explanation": "Sildenafil within 24 hours; tadalafil within 48 hours."
        },
        {
          "q": "Unresponsive hypoglycaemic patient (42 mg/dL) who can't swallow. Next?",
          "options": [
            "No oral glucose; IM glucagon or IV dextrose per protocol",
            "Glucose gel in the cheek anyway",
            "Sublingual glucose",
            "Wait for hospital"
          ],
          "correct": 0,
          "explanation": "Aspiration risk."
        },
        {
          "q": "20 kg child with anaphylaxis. Epinephrine?",
          "options": [
            "0.15 mg IM (junior auto-injector) into the outer thigh",
            "0.3 mg IM",
            "0.15 mg into the deltoid",
            "0.3 mg deltoid"
          ],
          "correct": 0,
          "explanation": "Under 25 kg: 0.15 mg."
        },
        {
          "q": "After aspirin 324 mg for chest pain, most important follow-up?",
          "options": [
            "Document time, dose and response, and reassess",
            "Nitroglycerin regardless of BP",
            "Lay flat",
            "12-lead only after drugs"
          ],
          "correct": 0,
          "explanation": "And get the 12-lead early."
        },
        {
          "q": "Nitroglycerin is given:",
          "options": [
            "Under the tongue, mouth closed, not swallowed",
            "Swallowed with water",
            "Chewed",
            "Inhaled"
          ],
          "correct": 0,
          "explanation": "Have the patient sit or lie."
        },
        {
          "q": "Nebuliser driving flow:",
          "options": [
            "6–8 L/min",
            "1–2 L/min",
            "15 L/min only",
            "No flow needed"
          ],
          "correct": 0,
          "explanation": "Fine mist."
        },
        {
          "q": "Activated charcoal is contraindicated with:",
          "options": [
            "Reduced consciousness",
            "An alert patient after a recent pill ingestion",
            "Paracetamol overdose",
            "Children"
          ],
          "correct": 0,
          "explanation": "Aspiration risk; medical direction only."
        },
        {
          "q": "Naloxone for a 14 kg toddler (oxycodone, RR 6):",
          "options": [
            "0.1 mg/kg = 1.4 mg, titrated after ventilation",
            "4 mg spray only",
            "0.01 mg",
            "None"
          ],
          "correct": 0,
          "explanation": "Maximum 2 mg."
        },
        {
          "q": "Nitroglycerin is withheld if the heart rate is:",
          "options": [
            "Below 50 or above 100",
            "60–100",
            "Any rate",
            "Above 60"
          ],
          "correct": 0,
          "explanation": "Also SBP below 90 mmHg."
        },
        {
          "q": "Using a metered-dose inhaler in an emergency:",
          "options": [
            "With a spacer, one puff at a time, slow deep breaths",
            "Spray into the air",
            "Without shaking",
            "Several puffs at once"
          ],
          "correct": 0,
          "explanation": "Spacers improve delivery."
        }
      ],
      "flashcards": [
        {
          "question": "Six rights",
          "answer": "Right patient, medication, dose, route, time, documentation.",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Three label checks",
          "answer": "When taking it out, when preparing, before giving.",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Epinephrine auto-injector",
          "answer": "Outer mid-thigh IM. Adult 0.3 mg; under 25 kg 0.15 mg.",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Nitroglycerin contraindications",
          "answer": "SBP below 90 mmHg (or 30 below baseline), HR below 50 or above 100, RV infarction, PDE-5 inhibitor within 24 hours (sildenafil, vardenafil) or 48 hours (tadalafil).",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Activated charcoal contraindications",
          "answer": "Reduced consciousness or unprotected airway, caustics, hydrocarbons. Only with medical direction.",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Common EMS routes",
          "answer": "Oral, buccal, sublingual, IM, intranasal, inhaled (and IV/IO at advanced levels).",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Pediatric doses",
          "answer": "Weight-based; length-based tape for weight and equipment; have a partner check every pediatric dose.",
          "category": "Medication Administration Skills"
        },
        {
          "question": "Documenting a drug",
          "answer": "Time, drug, dose, route, site, response before and after, side effects, who authorised it.",
          "category": "Medication Administration Skills"
        }
      ],
      "critical": [
        {
          "id": "crit_10_8_1",
          "scenario": "Crushing chest pain, SBP 92, HR 104; took tadalafil 36 hours ago. Your partner wants to give nitroglycerin because it's 'clearly an MI'.",
          "question": "Correct action?",
          "options": [
            {
              "t": "Withhold nitroglycerin (tadalafil within 48 hours and borderline BP); aspirin chewed, 12-lead, oxygen to target, transport",
              "f": "Correct."
            },
            {
              "t": "Give nitroglycerin: it's an MI",
              "f": "Risk of profound hypotension."
            },
            {
              "t": "Half dose",
              "f": "Still contraindicated."
            },
            {
              "t": "No aspirin either",
              "f": "Aspirin is safe here."
            }
          ],
          "correct": 0,
          "explanation": "Tell the hospital about the tadalafil.",
          "kpi": "Identifies PDE-5 inhibitor contraindication to nitroglycerin"
        },
        {
          "id": "crit_10_8_2",
          "scenario": "3-year-old (14 kg) with an empty oxycodone bottle nearby: lethargic, RR 6, SpO₂ 82%. You have naloxone 2 mg/2 mL, an atomiser and syringes.",
          "question": "Dose and technique?",
          "options": [
            {
              "t": "Bag-mask with oxygen first; naloxone 0.1 mg/kg = 1.4 mg (1.4 mL), split between nostrils; reassess; transport and watch for re-sedation",
              "f": "Correct."
            },
            {
              "t": "4 mg adult spray only",
              "f": "Use the weight-based dose you can titrate."
            },
            {
              "t": "Naloxone before ventilating",
              "f": "Oxygen first."
            },
            {
              "t": "Observe at home after waking",
              "f": "Oxycodone outlasts naloxone."
            }
          ],
          "correct": 0,
          "explanation": "Long-acting opioids need hospital observation.",
          "kpi": "Calculates and administers pediatric naloxone"
        },
        {
          "id": "crit_10_8_3",
          "scenario": "COPD flare: RR 28, SpO₂ 85%, wheeze. She offers her own nebuliser and albuterol vials.",
          "question": "Correct sequence?",
          "options": [
            {
              "t": "Oxygen titrated to 88–92%, check her vials' drug and concentration, give nebulised albuterol with your equipment per protocol, reassess",
              "f": "Correct."
            },
            {
              "t": "High-flow oxygen to 100%",
              "f": "Risk of CO₂ retention."
            },
            {
              "t": "Use her vials without checking",
              "f": "Check drug, dose and expiry."
            },
            {
              "t": "Withhold albuterol",
              "f": "She's wheezing."
            }
          ],
          "correct": 0,
          "explanation": "Add ipratropium if your protocol allows.",
          "kpi": "Administers nebulised bronchodilator safely in COPD"
        }
      ]
    }
  ]
};
