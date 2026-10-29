/* ========== Chapter 5 – Medical Emergencies ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c5.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c5",
  "title": "Medical Emergencies",
  "shortTitle": "5. Medical Emergencies",
  "sections": [
    {
      "id": "c5s1",
      "shortTitle": "5.1 Respiratory Emergencies",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Respiratory Emergencies",
        "lead": "Breathless patients tell you how sick they are by how they talk, sit and look. Treat what you hear: wheeze, crackles or nothing at all. Then give the right amount of oxygen. A quiet asthmatic isn't better, and a COPD patient doesn't need 100%.",
        "sections": [
          {
            "type": "table",
            "title": "Who is breathless, and why?",
            "icon": "stethoscope",
            "stack": true,
            "columns": [
              "Condition",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Asthma",
                "Wheeze, known asthma, trigger",
                "Bronchodilator, oxygen, steroid"
              ],
              [
                "COPD exacerbation",
                "Smoker, more sputum, wheeze",
                "Oxygen to 88–92%, bronchodilator, CPAP/NIV"
              ],
              [
                "Pneumonia",
                "Fever, cough, focal crackles",
                "Oxygen, sepsis screen (5.9)"
              ],
              [
                "Pulmonary embolism",
                "Sudden onset, pleuritic pain, fast pulse, clear lungs",
                "Oxygen, rapid transport, watch for collapse"
              ],
              [
                "Pneumothorax",
                "Sudden pain, one side quiet",
                "Oxygen; tension needs decompression (ALS)"
              ],
              [
                "Heart failure",
                "Crackles, orthopnea, edema",
                "Sit up, CPAP, nitrates (see Heart Failure)"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "How bad is this asthma?",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Severe",
                "items": [
                  "Speaks in words, hunched forward, agitated",
                  "Respiratory rate above 30, heart rate above 120",
                  "SpO₂ below 90%, accessory muscles"
                ]
              },
              {
                "title": "Life-threatening",
                "items": [
                  "Drowsy or confused",
                  "Silent chest: too little air to wheeze",
                  "Assist ventilation and rapid transport"
                ]
              }
            ]
          },
          {
            "type": "steps",
            "title": "Severe asthma",
            "icon": "wind",
            "steps": [
              {
                "title": "Sit up, oxygen",
                "text": "Target SpO₂ 94–98%."
              },
              {
                "title": "Bronchodilators",
                "doses": [
                  {
                    "drug": "Salbutamol (albuterol)",
                    "dose": "2.5–5 mg nebulized",
                    "note": "Repeat as needed"
                  },
                  {
                    "drug": "Ipratropium",
                    "dose": "0.5 mg nebulized",
                    "note": "With salbutamol in severe attacks"
                  }
                ]
              },
              {
                "title": "Corticosteroid early",
                "text": "Per protocol."
              },
              {
                "title": "Not improving",
                "doses": [
                  {
                    "drug": "Magnesium sulfate",
                    "dose": "2 g IV over 20 minutes",
                    "level": "ALS"
                  }
                ]
              },
              {
                "title": "Tiring or silent chest",
                "text": "Assist ventilation with a BVM; prepare for arrest."
              }
            ]
          },
          {
            "type": "list",
            "title": "COPD and oxygen",
            "icon": "droplet",
            "items": [
              "Target 88–92% in patients at risk of CO₂ retention",
              "Venturi mask 24–28%; drive nebulizers with air plus nasal oxygen when possible",
              "Too much oxygen raises CO₂ by worsening ventilation-perfusion mismatch: titrate, don't withhold",
              "Never use a paper bag for \"hyperventilation\": rule out PE, asthma, DKA and hypoxia first"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Breathing patterns",
                "items": [
                  {
                    "label": "Tachypnea",
                    "sub": "Fast and shallow",
                    "href": "../pages/respiratory-patterns.html?p=tachypnea",
                    "icon": "wind"
                  },
                  {
                    "label": "Kussmaul",
                    "sub": "Not lungs: metabolic acidosis (DKA)",
                    "href": "../pages/respiratory-patterns.html?p=kussmaul",
                    "icon": "wind"
                  },
                  {
                    "label": "O₂ duration calculator",
                    "sub": "How long will the cylinder last?",
                    "href": "../pages/Carevent.html",
                    "icon": "timer"
                  }
                ]
              },
              {
                "title": "Pulmonary embolism on the ECG",
                "items": [
                  {
                    "ecg": "pe",
                    "label": "PE pattern",
                    "sub": "Sinus tachycardia, right heart strain"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "An asthmatic's wheeze becomes much quieter while she gets drowsier. This means:",
          "options": [
            "Impending respiratory failure: silent chest",
            "Recovery",
            "Pneumonia",
            "The bronchodilator has worked"
          ],
          "correct": 0,
          "explanation": "Too little air moves to make a wheeze. Assist ventilation."
        },
        {
          "q": "Sudden breathlessness, sharp right chest pain and SpO₂ 84% after a 12-hour flight. Suspect:",
          "options": [
            "Pulmonary embolism",
            "Asthma",
            "Hyperventilation",
            "Pneumonia"
          ],
          "correct": 0,
          "explanation": "Long travel is a classic risk factor."
        },
        {
          "q": "A COPD patient on 15 L/min by non-rebreather becomes drowsy and her breathing slows. Most likely?",
          "options": [
            "CO₂ retention from too much oxygen: titrate to 88–92% and support breathing",
            "She is improving and resting",
            "A pneumothorax from the mask",
            "A stroke"
          ],
          "correct": 0,
          "explanation": "Mainly ventilation-perfusion mismatch; titrate, don't remove oxygen."
        },
        {
          "q": "Target SpO₂ for most acutely breathless patients:",
          "options": [
            "94–98%",
            "88–92%",
            "100%",
            "85–90%"
          ],
          "correct": 0,
          "explanation": "88–92% for those at risk of CO₂ retention."
        },
        {
          "q": "First drug for an asthma attack:",
          "options": [
            "Inhaled salbutamol (albuterol)",
            "Oral antihistamine",
            "IV fluids",
            "Furosemide"
          ],
          "correct": 0,
          "explanation": "Add ipratropium in severe attacks."
        },
        {
          "q": "Which is a life-threatening asthma sign?",
          "options": [
            "Drowsiness or confusion",
            "Wheeze on expiration",
            "Respiratory rate 22",
            "Speaking in sentences"
          ],
          "correct": 0,
          "explanation": "Also silent chest and falling SpO₂ despite oxygen."
        },
        {
          "q": "Fever, cough with green sputum and crackles over one lung suggest:",
          "options": [
            "Pneumonia",
            "Asthma",
            "PE",
            "Heart failure"
          ],
          "correct": 0,
          "explanation": "New confusion adds sepsis concern."
        },
        {
          "q": "Magnesium sulfate in severe asthma is given:",
          "options": [
            "2 g IV over 20 minutes (ALS)",
            "2 g IM",
            "20 g orally",
            "Never"
          ],
          "correct": 0,
          "explanation": "When the attack isn't responding to bronchodilators."
        },
        {
          "q": "Why not use a paper bag for a hyperventilating patient?",
          "options": [
            "It can cause hypoxia, and the cause may be serious",
            "It works too slowly",
            "It raises oxygen too much",
            "Bags are not sterile"
          ],
          "correct": 0,
          "explanation": "Rule out PE, asthma, DKA and hypoxia."
        },
        {
          "q": "Which mask suits a COPD patient needing controlled oxygen?",
          "options": [
            "Venturi mask 24–28%",
            "Non-rebreather at 15 L/min",
            "Simple mask at 2 L/min",
            "No oxygen ever"
          ],
          "correct": 0,
          "explanation": "Titrate to 88–92%."
        }
      ],
      "flashcards": [
        {
          "question": "Signs of an acute asthma attack",
          "answer": "Expiratory wheeze, prolonged expiration, accessory muscles, tripod position, short sentences, tachypnea, tachycardia.",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "Silent chest in asthma",
          "answer": "Too little air moving to wheeze: a late sign of impending respiratory failure. Assist ventilation.",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "COPD: chronic vs acute",
          "answer": "Acute exacerbation: worse breathlessness, more and purulent sputum, falling SpO₂, drowsiness (CO₂ retention).",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "Signs of pneumonia",
          "answer": "Fever, chills, productive cough, pleuritic pain, focal crackles, tachypnea, hypoxia.",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "Pulmonary embolism",
          "answer": "Sudden breathlessness, pleuritic pain, tachycardia, hypoxia, sometimes collapse. Risks: surgery, immobility, travel, cancer, pregnancy, estrogen, previous clot.",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "Hyperventilation from anxiety",
          "answer": "A diagnosis of exclusion: rule out PE, asthma, DKA, hypoxia. Calm reassurance; never a paper bag.",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "CPAP in respiratory emergencies",
          "answer": "Splints alveoli open: pulmonary edema and COPD. Not for unresponsive, apneic or hypotensive patients, or when vomiting.",
          "category": "Respiratory Emergencies"
        },
        {
          "question": "Oxygen targets",
          "answer": "Most patients 94–98%. At risk of CO₂ retention (e.g. COPD): 88–92%.",
          "category": "Respiratory Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_5_1_1",
          "scenario": "A 24-year-old asthmatic is tripoding, speaking 2–3 words, RR 32, HR 124, SpO₂ 89%, loud wheeze. After a nebulizer he becomes quiet: barely audible wheeze, RR 14, drowsy, SpO₂ 84%.",
          "question": "What does this mean, and what now?",
          "options": [
            {
              "t": "Respiratory failure: assist ventilation with a BVM and oxygen, call ALS, transport fast",
              "f": "Correct."
            },
            {
              "t": "The nebulizer worked: monitor",
              "f": "Falling SpO₂ and drowsiness mean failure."
            },
            {
              "t": "Give an antihistamine",
              "f": "Not the problem."
            },
            {
              "t": "Let him sleep",
              "f": "He's tiring out."
            }
          ],
          "correct": 0,
          "explanation": "A silent chest with falling consciousness is a pre-arrest sign.",
          "kpi": "Recognising respiratory decompensation"
        },
        {
          "id": "crit_5_1_2",
          "scenario": "A 72-year-old has had a cough with green sputum for 4 days and fever today. HR 118, RR 28, SpO₂ 86%, BP 104/68, crackles at the right base, newly confused.",
          "question": "What do you suspect, and the priority?",
          "options": [
            {
              "t": "Pneumonia with possible sepsis: oxygen to target, sepsis screen, pre-alert and rapid transport",
              "f": "Correct."
            },
            {
              "t": "Simple fever: routine transport",
              "f": "New confusion with infection is a red flag."
            },
            {
              "t": "COPD: nebulizer only",
              "f": "Fever and focal crackles point to pneumonia."
            },
            {
              "t": "Give paracetamol and leave her home",
              "f": "She needs hospital care."
            }
          ],
          "correct": 0,
          "explanation": "Fluids per protocol if hypotensive; watch for septic shock.",
          "kpi": "Sepsis recognition in pneumonia"
        },
        {
          "id": "crit_5_1_3",
          "scenario": "A 45-year-old with a DVT two months ago stopped her blood thinners last week. Sudden sharp chest pain and breathlessness at rest, RR 32, SpO₂ 88%, HR 122. Swollen left calf.",
          "question": "Most likely diagnosis and management?",
          "options": [
            {
              "t": "Pulmonary embolism: oxygen to target, position of comfort, rapid transport, be ready for arrest",
              "f": "Correct."
            },
            {
              "t": "Anxiety attack: reassure",
              "f": "Never assume anxiety with this history."
            },
            {
              "t": "Pneumonia: no rush",
              "f": "Sudden onset with a DVT history is PE until proven otherwise."
            },
            {
              "t": "Massage the calf to ease the pain",
              "f": "Never massage a suspected clot."
            }
          ],
          "correct": 0,
          "explanation": "Recent DVT and stopping anticoagulants are major risk factors.",
          "kpi": "PE recognition and risk stratification"
        }
      ]
    },
    {
      "id": "c5s2",
      "shortTitle": "5.2 Neurological Emergencies",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Neurological Emergencies",
        "lead": "In stroke, time is brain: find the deficit, record when they were last known well, check the glucose and go to the right stroke centre. In seizures, protect the patient, time the seizure and treat when it reaches 5 minutes.",
        "sections": [
          {
            "type": "table",
            "title": "BE-FAST",
            "icon": "brain",
            "columns": [
              "",
              "Check"
            ],
            "rows": [
              [
                "Balance",
                "Sudden loss of balance or coordination"
              ],
              [
                "Eyes",
                "Sudden vision loss or double vision"
              ],
              [
                "Face",
                "Smile: one side droops"
              ],
              [
                "Arm",
                "Both arms up: one drifts"
              ],
              [
                "Speech",
                "Slurred, wrong words, can't understand"
              ],
              [
                "Time",
                "When were they last known well?"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Suspected stroke",
            "icon": "timer",
            "steps": [
              {
                "title": "Glucose",
                "text": "Low glucose mimics stroke: treat it first (5.3)."
              },
              {
                "title": "Last known well",
                "text": "Exact time. Thrombolysis up to 4.5 hours; thrombectomy for large-vessel occlusion up to 24 hours in selected patients."
              },
              {
                "title": "Oxygen only if needed",
                "text": "SpO₂ below 94%."
              },
              {
                "title": "Leave the BP alone",
                "text": "Don't lower it in the field."
              },
              {
                "title": "Destination",
                "text": "Stroke centre; thrombectomy-capable centre for suspected large-vessel occlusion per protocol. Pre-notify."
              }
            ]
          },
          {
            "type": "pathways",
            "title": "Seizures",
            "icon": "zap",
            "paths": [
              {
                "title": "During",
                "tone": "noshock",
                "steps": [
                  {
                    "text": "Protect the head; move hazards; time it."
                  },
                  {
                    "text": "Nothing in the mouth; don't restrain."
                  },
                  {
                    "text": "Check glucose."
                  }
                ]
              },
              {
                "title": "5 minutes or more (status epilepticus)",
                "tone": "shock",
                "steps": [
                  {
                    "text": "Midazolam 10 mg IM (over 40 kg) or 5 mg IM (13–40 kg), or buccal/intranasal per protocol.",
                    "level": "ALS"
                  },
                  {
                    "text": "Oxygen; support airway and ventilation."
                  },
                  {
                    "text": "Repeat per protocol; rapid transport."
                  }
                ]
              }
            ],
            "after": "Afterwards: recovery position, look for injury, transport if it's a first seizure, injury, pregnancy, diabetes or no return to baseline."
          },
          {
            "type": "groups",
            "title": "Other red flags",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Thunderclap headache",
                "items": [
                  "Worst ever, peaks within a minute",
                  "Subarachnoid hemorrhage until proven otherwise"
                ]
              },
              {
                "title": "Meningitis",
                "items": [
                  "Fever, stiff neck, headache, photophobia, confusion",
                  "Non-blanching rash: meningococcal sepsis",
                  "Droplet precautions"
                ]
              },
              {
                "title": "Altered mental status: AEIOU-TIPS",
                "items": [
                  "Alcohol, Epilepsy, Insulin, Overdose/Oxygen, Uremia",
                  "Trauma/Temperature, Infection, Psychiatric/Poisoning, Stroke/Shock"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Assess",
                "items": [
                  {
                    "label": "GCS calculator",
                    "sub": "Score and track consciousness",
                    "href": "../pages/GCS.html",
                    "icon": "brain"
                  },
                  {
                    "label": "Cheyne-Stokes breathing",
                    "sub": "Brain injury, stroke",
                    "href": "../pages/respiratory-patterns.html?p=cheyneStokes",
                    "icon": "wind"
                  },
                  {
                    "label": "Medical assessment",
                    "sub": "Structured medical exam",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "The Cincinnati Prehospital Stroke Scale checks:",
          "options": [
            "Facial droop, arm drift and speech",
            "Balance, vision and headache",
            "Grip, pupils and gait",
            "BP, heart rate and breathing"
          ],
          "correct": 0,
          "explanation": "BE-FAST adds balance and eyes."
        },
        {
          "q": "Continuous jerking of all four limbs for 6 minutes:",
          "options": [
            "Status epilepticus",
            "Absence seizure",
            "Postictal state",
            "Simple faint"
          ],
          "correct": 0,
          "explanation": "5 minutes or more: treat with a benzodiazepine."
        },
        {
          "q": "Slurred speech and right arm weakness with glucose 48 mg/dL resolve completely after glucose. This was:",
          "options": [
            "Hypoglycemia mimicking stroke",
            "A stroke that resolved by chance",
            "An unrelated TIA",
            "A seizure"
          ],
          "correct": 0,
          "explanation": "Always check glucose in stroke-like symptoms."
        },
        {
          "q": "The most important time to document in suspected stroke:",
          "options": [
            "When the patient was last known well",
            "When the ambulance was called",
            "When symptoms were first noticed by a stranger",
            "Arrival at hospital"
          ],
          "correct": 0,
          "explanation": "It decides thrombolysis and thrombectomy eligibility."
        },
        {
          "q": "Thrombolysis for ischemic stroke is possible up to:",
          "options": [
            "4.5 hours from last known well",
            "24 hours for everyone",
            "1 hour only",
            "No time limit"
          ],
          "correct": 0,
          "explanation": "Thrombectomy for large-vessel occlusion can extend to 24 hours in selected patients."
        },
        {
          "q": "Oxygen in suspected stroke:",
          "options": [
            "Only if SpO₂ is below 94%",
            "Always 15 L/min",
            "Never",
            "Only after CT"
          ],
          "correct": 0,
          "explanation": "Routine oxygen doesn't help."
        },
        {
          "q": "IM midazolam for status epilepticus in a 70 kg adult:",
          "options": [
            "10 mg",
            "1 mg",
            "50 mg",
            "0.5 mg"
          ],
          "correct": 0,
          "explanation": "5 mg for 13–40 kg."
        },
        {
          "q": "During a tonic-clonic seizure you should:",
          "options": [
            "Protect the head and time the seizure",
            "Put something between the teeth",
            "Hold the limbs still",
            "Give oral glucose"
          ],
          "correct": 0,
          "explanation": "Nothing in the mouth; no restraint."
        },
        {
          "q": "\"Worst headache of my life\", peaking within a minute, suggests:",
          "options": [
            "Subarachnoid hemorrhage",
            "Migraine",
            "Tension headache",
            "Sinusitis"
          ],
          "correct": 0,
          "explanation": "A thunderclap headache is a neurological emergency."
        },
        {
          "q": "Fever, stiff neck and a non-blanching rash. Precautions?",
          "options": [
            "Droplet: mask yourself and the patient",
            "None needed",
            "Airborne N95 only",
            "Contact precautions only"
          ],
          "correct": 0,
          "explanation": "Meningococcal disease until proven otherwise."
        }
      ],
      "flashcards": [
        {
          "question": "Ischemic vs hemorrhagic stroke",
          "answer": "Ischemic (about 87%): a clot blocks an artery. Hemorrhagic: a vessel bursts; often sudden severe headache, vomiting and rapid decline.",
          "category": "Neurological Emergencies"
        },
        {
          "question": "BE-FAST",
          "answer": "Balance, Eyes, Face, Arm, Speech, Time. Balance and eyes catch posterior strokes.",
          "category": "Neurological Emergencies"
        },
        {
          "question": "Phases of a tonic-clonic seizure",
          "answer": "Tonic (stiffening, loss of consciousness), clonic (rhythmic jerking, incontinence, tongue biting), postictal (confusion, drowsiness).",
          "category": "Neurological Emergencies"
        },
        {
          "question": "Status epilepticus",
          "answer": "A seizure lasting 5 minutes or more, or repeated seizures without recovery between. Treat with a benzodiazepine.",
          "category": "Neurological Emergencies"
        },
        {
          "question": "Seizure dos and don'ts",
          "answer": "Do: protect the head, time it, loosen clothing, stay. Don't: restrain, put anything in the mouth, give anything to drink.",
          "category": "Neurological Emergencies"
        },
        {
          "question": "AEIOU-TIPS",
          "answer": "Alcohol, Epilepsy/electrolytes, Insulin, Overdose/Oxygen, Uremia, Trauma/Temperature, Infection, Psychiatric/Poisoning, Stroke/Shock.",
          "category": "Neurological Emergencies"
        },
        {
          "question": "Signs of bacterial meningitis",
          "answer": "Fever, stiff neck, severe headache, confusion, photophobia; a non-blanching rash suggests meningococcal sepsis. Droplet precautions.",
          "category": "Neurological Emergencies"
        },
        {
          "question": "Unconscious hypoglycemic patient",
          "answer": "Airway first; glucagon IM or IV dextrose (ALS); recovery position; never oral glucose.",
          "category": "Neurological Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_5_2_1",
          "scenario": "A 72-year-old was fine at breakfast 2 hours ago. Now: slurred speech, left facial droop, can't lift the left arm. Glucose 112 mg/dL.",
          "question": "Diagnosis and critical information?",
          "options": [
            {
              "t": "Acute stroke: record last known well (2 hours ago), BE-FAST, oxygen only if SpO₂ below 94%, rapid transport to a stroke centre with pre-notification",
              "f": "Correct."
            },
            {
              "t": "Bell's palsy: routine transport",
              "f": "Arm weakness and speech problems rule that out."
            },
            {
              "t": "Lower her BP first",
              "f": "Leave BP alone in the field."
            },
            {
              "t": "Wait to see if it resolves",
              "f": "Time is brain."
            }
          ],
          "correct": 0,
          "explanation": "She's within 4.5 hours for thrombolysis; screen for large-vessel occlusion per protocol.",
          "kpi": "Stroke recognition and time documentation"
        },
        {
          "id": "crit_5_2_2",
          "scenario": "A 30-year-old had a 3-minute generalized seizure at work, his first ever. Now confused and drowsy, bitten tongue, stable vital signs, glucose 96 mg/dL.",
          "question": "Priorities?",
          "options": [
            {
              "t": "Monitor airway and mental status, recovery position, check injuries, transport for evaluation",
              "f": "Correct: a first seizure needs a cause found."
            },
            {
              "t": "No transport: it stopped",
              "f": "First seizures need assessment."
            },
            {
              "t": "Give midazolam now",
              "f": "The seizure has stopped."
            },
            {
              "t": "Put a bite block in",
              "f": "Nothing in the mouth."
            }
          ],
          "correct": 0,
          "explanation": "Causes include bleeding, tumour, infection and metabolic problems.",
          "kpi": "Seizure management and transport decision"
        },
        {
          "id": "crit_5_2_3",
          "scenario": "A 19-year-old student has fever 39.6 °C, vomiting, severe headache and can't touch chin to chest. A non-blanching purple rash on her legs.",
          "question": "Diagnosis and precautions?",
          "options": [
            {
              "t": "Bacterial (meningococcal) meningitis: mask the patient and yourself, oxygen, rapid transport and pre-alert",
              "f": "Correct."
            },
            {
              "t": "Viral illness: routine transport",
              "f": "A non-blanching rash is an emergency."
            },
            {
              "t": "Migraine: dark room and rest",
              "f": "Fever and rash rule that out."
            },
            {
              "t": "No precautions needed",
              "f": "Droplet precautions."
            }
          ],
          "correct": 0,
          "explanation": "She needs antibiotics urgently; give them per protocol if your service carries them.",
          "kpi": "Meningitis recognition and infection control"
        }
      ]
    },
    {
      "id": "c5s3",
      "shortTitle": "5.3 Endocrine Emergencies",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Endocrine Emergencies",
        "lead": "Check the glucose in every patient with altered mental status. Low sugar is quick to kill and quick to fix. High sugar with ketones (DKA) or severe dehydration (HHS) needs fluids and a hospital. Don't forget the steroid-dependent patient in shock.",
        "sections": [
          {
            "type": "table",
            "title": "Low or high?",
            "icon": "droplet",
            "stack": true,
            "columns": [
              "",
              "Hypoglycemia",
              "DKA",
              "HHS"
            ],
            "rows": [
              [
                "Glucose",
                "Below 70 mg/dL (3.9 mmol/L)",
                "Usually 250 mg/dL (13.9 mmol/L) or more",
                "600 mg/dL (33.3 mmol/L) or more"
              ],
              [
                "Onset",
                "Minutes",
                "Hours to a day",
                "Days"
              ],
              [
                "Skin",
                "Pale, cool, sweaty",
                "Warm, dry",
                "Very dry"
              ],
              [
                "Breathing",
                "Normal",
                "Deep and fast (Kussmaul), fruity breath",
                "Normal"
              ],
              [
                "Typical patient",
                "Insulin or sulfonylurea",
                "Type 1, missed insulin or infection",
                "Older, type 2"
              ]
            ]
          },
          {
            "type": "gate",
            "title": "Hypoglycemia",
            "icon": "candy",
            "question": "Awake and able to swallow safely?",
            "items": [
              "Below 54 mg/dL (3.0 mmol/L) is severe"
            ],
            "yes": "15–20 g oral glucose; recheck after 15 minutes; repeat if still low; then food.",
            "no": "Glucagon 1 mg IM (0.5 mg if under 25 kg) or nasal glucagon 3 mg; or IV dextrose 10%, 100 mL (ALS). Never oral glucose when unresponsive."
          },
          {
            "type": "groups",
            "title": "Don't leave them at home if",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Recurrence risk",
                "items": [
                  "Sulfonylurea (glibenclamide/glyburide, gliclazide)",
                  "Long-acting insulin or an intentional overdose",
                  "No one to watch them; can't eat"
                ]
              },
              {
                "title": "Other causes",
                "items": [
                  "Infection, kidney failure, alcohol",
                  "First episode or unexplained"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "DKA, HHS and adrenal crisis",
            "icon": "activity",
            "items": [
              "DKA and HHS: fluids (0.9% saline 1 L over the first hour in adults per protocol), monitor, transport",
              "Never stop insulin on sick days; check ketones",
              "Adrenal crisis (known adrenal insufficiency or steroid dependence, shock, vomiting): hydrocortisone 100 mg IM/IV"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "See and dose",
                "items": [
                  {
                    "label": "Kussmaul breathing",
                    "sub": "DKA: blowing off CO₂",
                    "href": "../pages/respiratory-patterns.html?p=kussmaul",
                    "icon": "wind"
                  },
                  {
                    "label": "Drug calculator",
                    "sub": "Glucagon, dextrose by weight",
                    "href": "../pages/drug-calculator.html",
                    "icon": "scale"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Type 1 diabetic, unconscious, warm dry skin, fruity breath, deep breathing at 30/min:",
          "options": [
            "Diabetic ketoacidosis",
            "Hypoglycemia",
            "HHS",
            "Pancreatitis"
          ],
          "correct": 0,
          "explanation": "Kussmaul breathing compensates for acidosis."
        },
        {
          "q": "A confused diabetic given oral glucose becomes unconscious. Next?",
          "options": [
            "Protect the airway, give glucagon IM (or IV dextrose) and transport",
            "Wait 10 more minutes",
            "More oral glucose",
            "Start CPR"
          ],
          "correct": 0,
          "explanation": "Never oral glucose when unresponsive."
        },
        {
          "q": "Type 2 diabetic, lethargic and very dehydrated, glucose 940 mg/dL, no Kussmaul breathing or fruity breath:",
          "options": [
            "Hyperosmolar hyperglycemic state (HHS)",
            "DKA",
            "Simple hyperglycemia",
            "Hypoglycemia"
          ],
          "correct": 0,
          "explanation": "Extreme glucose without significant ketosis."
        },
        {
          "q": "Hypoglycemia is glucose below:",
          "options": [
            "70 mg/dL (3.9 mmol/L)",
            "100 mg/dL",
            "120 mg/dL",
            "40 mg/dL only"
          ],
          "correct": 0,
          "explanation": "Below 54 mg/dL (3.0 mmol/L) is severe."
        },
        {
          "q": "Oral glucose dose for an awake hypoglycemic adult:",
          "options": [
            "15–20 g",
            "1–2 g",
            "100 g",
            "50 g IV"
          ],
          "correct": 0,
          "explanation": "Recheck after 15 minutes."
        },
        {
          "q": "Glucagon dose for an unconscious adult:",
          "options": [
            "1 mg IM",
            "10 mg IM",
            "0.1 mg IM",
            "1 g IV"
          ],
          "correct": 0,
          "explanation": "0.5 mg if under 25 kg; nasal glucagon 3 mg."
        },
        {
          "q": "Why transport a patient whose hypoglycemia was caused by gliclazide?",
          "options": [
            "Sulfonylureas cause prolonged, recurrent lows",
            "Gliclazide is illegal",
            "They always need insulin",
            "Glucose doesn't work on them"
          ],
          "correct": 0,
          "explanation": "Same for long-acting insulin and overdoses."
        },
        {
          "q": "IV dextrose for an adult hypoglycemic (ALS):",
          "options": [
            "Dextrose 10%, 100 mL",
            "Dextrose 50%, 500 mL",
            "Dextrose 5%, 10 mL",
            "Saline only"
          ],
          "correct": 0,
          "explanation": "Repeat as needed and recheck."
        },
        {
          "q": "A steroid-dependent patient is vomiting and in shock. Think of:",
          "options": [
            "Adrenal crisis: hydrocortisone 100 mg IM/IV",
            "Simple gastroenteritis",
            "Hypoglycemia only",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "Fluids too; check glucose."
        },
        {
          "q": "Sick-day rule for insulin users:",
          "options": [
            "Never stop insulin; check glucose and ketones more often",
            "Stop insulin if not eating",
            "Double the insulin",
            "Only drink water"
          ],
          "correct": 0,
          "explanation": "Stopping insulin triggers DKA."
        }
      ],
      "flashcards": [
        {
          "question": "DKA vs HHS",
          "answer": "DKA: hyperglycemia + ketones + acidosis, hours, Kussmaul, fruity breath, type 1. HHS: glucose 600 mg/dL (33.3 mmol/L) or more, no significant ketosis, days, profound dehydration, older type 2.",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "Signs of hypoglycemia",
          "answer": "Fast onset, pale cool sweaty skin, tremor, hunger, tachycardia, confusion or odd behaviour, seizures, focal deficits. Glucose below 70 mg/dL (3.9 mmol/L).",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "Treating an awake hypoglycemic",
          "answer": "15–20 g oral glucose; recheck after 15 minutes; repeat if still low; then food.",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "Glucagon",
          "answer": "1 mg IM (0.5 mg if under 25 kg), or nasal glucagon 3 mg, when the patient can't swallow safely.",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "Kussmaul breathing",
          "answer": "Deep, fast breathing that blows off CO₂ to compensate for metabolic acidosis, as in DKA.",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "The three Ps of hyperglycemia",
          "answer": "Polyuria, polydipsia, polyphagia: from osmotic diuresis.",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "Sick-day rules",
          "answer": "Never stop insulin; check glucose and ketones more often; drink fluids; seek help early if vomiting or unable to eat.",
          "category": "Endocrine Emergencies"
        },
        {
          "question": "First step in an altered diabetic patient",
          "answer": "Check the glucose straight away and treat a low before looking for the cause.",
          "category": "Endocrine Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_5_3_1",
          "scenario": "A type 1 diabetic became confused, then unresponsive. Shallow breathing, pale and sweaty, HR 112. Glucose 32 mg/dL.",
          "question": "Management?",
          "options": [
            {
              "t": "Airway, recovery position, glucagon 1 mg IM (or IV dextrose 10% by ALS), recheck and transport",
              "f": "Correct."
            },
            {
              "t": "Oral glucose gel between the cheek and gum",
              "f": "Aspiration risk when unresponsive."
            },
            {
              "t": "Insulin",
              "f": "That would kill her."
            },
            {
              "t": "Wait for her to wake up",
              "f": "Treat now."
            }
          ],
          "correct": 0,
          "explanation": "Once awake and able to swallow, give oral carbohydrate: glucagon's effect is short.",
          "kpi": "Hypoglycemia treatment — unconscious patient"
        },
        {
          "id": "crit_5_3_2",
          "scenario": "A 20-year-old with type 1 diabetes ran out of insulin 3 days ago. Vomiting, abdominal pain, drowsy, warm dry skin, RR 32 and deep, fruity breath. Glucose 480 mg/dL, SpO₂ 97%.",
          "question": "Condition and management?",
          "options": [
            {
              "t": "DKA: airway, IV fluids per protocol, monitor, rapid transport for insulin and electrolytes",
              "f": "Correct."
            },
            {
              "t": "Hypoglycemia: oral glucose",
              "f": "His glucose is very high."
            },
            {
              "t": "Give his own insulin dose and leave",
              "f": "He needs hospital treatment."
            },
            {
              "t": "Slow his breathing with a bag",
              "f": "The fast breathing is compensation."
            }
          ],
          "correct": 0,
          "explanation": "0.9% saline 1 L over the first hour in adults per protocol; watch for low potassium arrhythmias.",
          "kpi": "DKA recognition and transport priority"
        },
        {
          "id": "crit_5_3_3",
          "scenario": "A 55-year-old with type 2 diabetes on metformin and glyburide (a sulfonylurea) has eaten little for a week with a UTI. Glucose 65 mg/dL, cool and clammy, confused but swallowing safely.",
          "question": "Best treatment?",
          "options": [
            {
              "t": "15–20 g oral glucose, recheck after 15 minutes, then transport: the sulfonylurea can cause recurrent lows",
              "f": "Correct."
            },
            {
              "t": "Type 2 diabetics can't get hypoglycemia",
              "f": "Sulfonylureas cause it."
            },
            {
              "t": "Glucagon IM",
              "f": "She can swallow."
            },
            {
              "t": "Treat and leave her home",
              "f": "Lows can recur for many hours."
            }
          ],
          "correct": 0,
          "explanation": "The infection is a second reason to transport.",
          "kpi": "Hypoglycemia in Type 2 diabetes"
        }
      ]
    },
    {
      "id": "c5s4",
      "shortTitle": "5.4 Allergy & Anaphylaxis",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Allergy & Anaphylaxis",
        "lead": "Anaphylaxis kills by swelling, wheeze or shock, often within minutes. The only first-line drug is IM epinephrine into the thigh, given early and repeated if needed. Antihistamines are not the treatment. Low BP is not needed to make the diagnosis.",
        "sections": [
          {
            "type": "gate",
            "title": "Is it anaphylaxis?",
            "icon": "triangle-alert",
            "question": "After exposure (food, sting, drug), skin or mucosal signs plus any of these? Or one of these after a known allergen even without skin signs?",
            "items": [
              "Breathing: wheeze, stridor, hoarse voice, breathlessness, low SpO₂",
              "Circulation: low BP, collapse, fainting",
              "Severe gut symptoms: cramps, vomiting"
            ],
            "yes": "Anaphylaxis: IM epinephrine now.",
            "no": "Local or mild allergic reaction: monitor, antihistamine per protocol, reassess."
          },
          {
            "type": "steps",
            "title": "Treat anaphylaxis",
            "icon": "syringe",
            "steps": [
              {
                "title": "IM epinephrine, anterolateral thigh",
                "doses": [
                  {
                    "drug": "Epinephrine (1 mg/mL)",
                    "dose": "0.01 mg/kg IM, maximum 0.5 mg",
                    "note": "Adult 0.5 mg"
                  },
                  {
                    "drug": "Auto-injector",
                    "dose": "0.15 mg (about 15–30 kg); 0.3 mg (30 kg or more)"
                  }
                ]
              },
              {
                "title": "Position",
                "text": "Lying with legs raised if BP is low; sitting if breathing is the problem; never stand up suddenly."
              },
              {
                "title": "Oxygen, call ALS, monitor",
                "text": "Remove the trigger if still present (sting)."
              },
              {
                "title": "Repeat",
                "text": "Another IM dose after 5 minutes if not improving."
              },
              {
                "title": "Still not improving after 2 doses",
                "text": "Refractory: IV epinephrine infusion and fluid bolus (500–1000 mL adult, 10 mL/kg child).",
                "level": "ALS"
              }
            ]
          },
          {
            "type": "list",
            "title": "After epinephrine",
            "icon": "clock",
            "items": [
              "Antihistamines and steroids are second-line: they don't treat airway swelling, wheeze or shock",
              "Biphasic reactions happen in up to 5%",
              "Hospital observation: at least 6 hours, 12 hours after 2 doses or a severe reaction",
              "Every anaphylaxis patient is transported"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Dose",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Epinephrine by weight",
                    "href": "../pages/drug-calculator.html",
                    "icon": "scale"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Epinephrine",
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
          "q": "Bee sting 10 minutes ago: hives, wheeze, BP 88/50. First drug?",
          "options": [
            "IM epinephrine into the anterolateral thigh",
            "IM diphenhydramine",
            "Oxygen only",
            "Oral steroid"
          ],
          "correct": 0,
          "explanation": "Adult 0.5 mg (0.3 mg by auto-injector)."
        },
        {
          "q": "Hives and mild wheeze after eating peanuts; BP 118/76, SpO₂ 95%. Anaphylaxis?",
          "options": [
            "Yes: skin plus breathing involvement",
            "No: BP is normal",
            "No: needs hypotension",
            "Yes: any peanut reaction is anaphylaxis"
          ],
          "correct": 0,
          "explanation": "Low BP is not required."
        },
        {
          "q": "Ten minutes after epinephrine, wheeze returns and SpO₂ falls to 89%. Do:",
          "options": [
            "Repeat IM epinephrine",
            "Give diphenhydramine and wait",
            "Start CPR",
            "Just turn up the oxygen"
          ],
          "correct": 0,
          "explanation": "Repeat after 5 minutes if not improving."
        },
        {
          "q": "IM epinephrine dose by weight:",
          "options": [
            "0.01 mg/kg, maximum 0.5 mg",
            "0.1 mg/kg",
            "1 mg for everyone",
            "0.001 mg/kg"
          ],
          "correct": 0,
          "explanation": "Of the 1 mg/mL solution, into the thigh."
        },
        {
          "q": "Best injection site:",
          "options": [
            "Anterolateral thigh",
            "Deltoid",
            "Buttock",
            "Abdomen"
          ],
          "correct": 0,
          "explanation": "Fastest absorption."
        },
        {
          "q": "A 20 kg child's auto-injector dose:",
          "options": [
            "0.15 mg",
            "0.5 mg",
            "1 mg",
            "0.05 mg"
          ],
          "correct": 0,
          "explanation": "0.3 mg from 30 kg."
        },
        {
          "q": "Role of antihistamines in anaphylaxis:",
          "options": [
            "Second-line, for itch and hives only",
            "First-line",
            "They reverse airway swelling",
            "They replace epinephrine if BP is normal"
          ],
          "correct": 0,
          "explanation": "Never delay epinephrine for them."
        },
        {
          "q": "Best position for a hypotensive anaphylaxis patient:",
          "options": [
            "Lying with legs raised",
            "Standing",
            "Sitting bolt upright",
            "Prone"
          ],
          "correct": 0,
          "explanation": "Sitting if breathing is the main problem; never stand suddenly."
        },
        {
          "q": "Biphasic reactions occur in:",
          "options": [
            "Up to 5% of cases",
            "Every case",
            "None",
            "Over half of cases"
          ],
          "correct": 0,
          "explanation": "So everyone is observed in hospital."
        },
        {
          "q": "No improvement after 2 IM doses. This is:",
          "options": [
            "Refractory anaphylaxis: IV epinephrine and fluids (ALS)",
            "Normal: wait",
            "An antihistamine-resistant rash",
            "A reason to stop epinephrine"
          ],
          "correct": 0,
          "explanation": "Call ALS early."
        }
      ],
      "flashcards": [
        {
          "question": "Anaphylaxis definition",
          "answer": "A severe systemic reaction: skin or mucosal signs plus breathing, circulation or severe gut problems; or breathing or circulation problems after a known allergen even without skin signs.",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "Signs by system",
          "answer": "Airway: tongue swelling, stridor, hoarse voice. Breathing: wheeze, low SpO₂. Circulation: low BP, collapse. Skin: hives, flushing, swelling. Gut: cramps, vomiting.",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "First-line treatment",
          "answer": "IM epinephrine into the anterolateral thigh: the only drug that reverses the whole reaction. Delay is linked to deaths.",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "Epinephrine doses",
          "answer": "0.01 mg/kg IM of 1 mg/mL, maximum 0.5 mg (adult 0.5 mg). Auto-injectors 0.15 mg (about 15–30 kg) or 0.3 mg (30 kg or more).",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "Repeating epinephrine",
          "answer": "After 5 minutes if not improving. No improvement after 2 doses: refractory, IV epinephrine (ALS).",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "Antihistamines",
          "answer": "Second-line: help itch and hives, but don't treat airway swelling, bronchospasm or shock.",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "Biphasic anaphylaxis",
          "answer": "Symptoms return hours later in up to 5%. Observe in hospital at least 6 hours (12 hours after 2 doses or a severe reaction).",
          "category": "Allergy & Anaphylaxis"
        },
        {
          "question": "Positioning",
          "answer": "Lying with legs raised if hypotensive; sitting if breathing is the problem; never stand up suddenly.",
          "category": "Allergy & Anaphylaxis"
        }
      ],
      "critical": [
        {
          "id": "crit_5_4_1",
          "scenario": "15 minutes after eating shrimp, a 24-year-old has wheeze, hives, swollen lips and says her throat is closing. SpO₂ 91%, BP 104/68.",
          "question": "Treatment sequence?",
          "options": [
            {
              "t": "IM epinephrine 0.5 mg into the thigh now, oxygen, sit her up, call ALS, transport",
              "f": "Correct."
            },
            {
              "t": "Antihistamine first, then reassess",
              "f": "Never delay epinephrine."
            },
            {
              "t": "Wait for low BP before epinephrine",
              "f": "Low BP isn't required."
            },
            {
              "t": "Lie her flat with legs raised",
              "f": "Breathing is the problem: let her sit."
            }
          ],
          "correct": 0,
          "explanation": "Skin, airway and breathing involvement: anaphylaxis. Repeat after 5 minutes if not improving.",
          "kpi": "Anaphylaxis recognition and epinephrine administration"
        },
        {
          "id": "crit_5_4_2",
          "scenario": "A 7-year-old (20 kg) with known wasp allergy was stung: facial hives, wheeze, vomiting, SpO₂ 93%. His mother hands you his auto-injector.",
          "question": "Dose and site?",
          "options": [
            {
              "t": "0.15 mg IM into the anterolateral thigh",
              "f": "Correct for about 15–30 kg."
            },
            {
              "t": "0.3 mg into the deltoid",
              "f": "Thigh, and 0.3 mg is for 30 kg or more."
            },
            {
              "t": "Antihistamine only",
              "f": "He has anaphylaxis."
            },
            {
              "t": "Wait for ALS",
              "f": "Give it now."
            }
          ],
          "correct": 0,
          "explanation": "Weight-based: 0.01 mg/kg = 0.2 mg; the 0.15 mg device is the right auto-injector.",
          "kpi": "Pediatric anaphylaxis dosing"
        },
        {
          "id": "crit_5_4_3",
          "scenario": "8 minutes after epinephrine, a patient who had improved says her throat is tight again; wheeze is back, SpO₂ 91%, BP down from 118/74 to 98/64. 12 minutes to hospital.",
          "question": "Next action?",
          "options": [
            {
              "t": "Repeat IM epinephrine in the other thigh, oxygen, monitor, notify the hospital",
              "f": "Correct."
            },
            {
              "t": "Wait for the hospital",
              "f": "Repeat after 5 minutes if not improving."
            },
            {
              "t": "Antihistamine instead",
              "f": "Not first-line."
            },
            {
              "t": "Sit her bolt upright and stand her up to walk in",
              "f": "Never stand an anaphylaxis patient up suddenly."
            }
          ],
          "correct": 0,
          "explanation": "If 2 doses fail, it's refractory: ALS for IV epinephrine and fluids.",
          "kpi": "Repeat epinephrine for refractory anaphylaxis"
        }
      ]
    },
    {
      "id": "c5s5",
      "shortTitle": "5.5 Toxicology & Overdose",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Toxicology & Overdose",
        "lead": "You rarely know the drug, but the body tells you the class. Read the pupils, skin, temperature and breathing. Support the airway and breathing first, then the antidote. Some poisons look harmless for hours, so bring the containers and transport.",
        "sections": [
          {
            "type": "table",
            "title": "Toxidromes",
            "icon": "eye",
            "stack": true,
            "columns": [
              "Toxidrome",
              "Pupils",
              "Skin / temperature",
              "Other clues",
              "Examples"
            ],
            "rows": [
              [
                "Opioid",
                "Pinpoint",
                "Normal or cool",
                "Slow, shallow breathing; sedation",
                "Heroin, fentanyl, oxycodone"
              ],
              [
                "Sympathomimetic",
                "Big",
                "Sweaty, hot",
                "Agitation, fast pulse, high BP",
                "Cocaine, amphetamines"
              ],
              [
                "Anticholinergic",
                "Big",
                "Hot, dry, red",
                "Delirium, urinary retention",
                "Antihistamines, some plants"
              ],
              [
                "Cholinergic",
                "Small",
                "Wet",
                "Salivation, bronchorrhea, vomiting, diarrhea, slow pulse",
                "Organophosphate pesticides, nerve agents"
              ],
              [
                "Sedative-hypnotic",
                "Normal",
                "Normal",
                "Sedation, normal vital signs early",
                "Benzodiazepines, alcohol"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Opioid overdose",
            "icon": "wind",
            "steps": [
              {
                "title": "Airway and BVM first",
                "text": "Ventilate with oxygen before any drug."
              },
              {
                "title": "Naloxone",
                "doses": [
                  {
                    "drug": "Naloxone IV/IM",
                    "dose": "0.4 mg",
                    "note": "Titrate, repeat every 2–3 minutes"
                  },
                  {
                    "drug": "Naloxone intranasal spray",
                    "dose": "4 mg"
                  }
                ]
              },
              {
                "title": "Aim for breathing",
                "text": "Not full wakefulness: abrupt withdrawal brings vomiting and agitation."
              },
              {
                "title": "Transport",
                "text": "Naloxone can wear off before the opioid."
              }
            ]
          },
          {
            "type": "table",
            "title": "Specific poisons",
            "icon": "flask-conical",
            "stack": true,
            "columns": [
              "Poison",
              "Watch for",
              "Do"
            ],
            "rows": [
              [
                "Carbon monoxide",
                "Headache, nausea, several people or pets ill; SpO₂ falsely normal",
                "100% oxygen by non-rebreather at 15 L/min"
              ],
              [
                "Cyanide (smoke)",
                "Collapse, low BP, seizures",
                "Hydroxocobalamin 5 g IV (ALS)"
              ],
              [
                "Tricyclic antidepressant",
                "Seizures, low BP, QRS wider than 100 ms",
                "Sodium bicarbonate 1–2 mEq/kg IV (ALS)"
              ],
              [
                "Beta-blocker / calcium-channel blocker",
                "Looks well, then bradycardia and shock",
                "Monitor closely; transport early"
              ],
              [
                "Paracetamol",
                "Few early symptoms",
                "Transport: antidote works best early"
              ],
              [
                "Stimulants",
                "Hyperthermia, agitation",
                "Cool; benzodiazepines (ALS); avoid struggling against restraint"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Every poisoning",
            "icon": "clipboard-list",
            "items": [
              "Scene safety first (gas, chemicals)",
              "Bring all containers and pills; note the time",
              "Contact the poison centre",
              "Activated charcoal 50 g within 1 hour only with a protected airway and per protocol",
              "Alcohol withdrawal can cause seizures and delirium tremens: benzodiazepines (ALS)"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "ECG clues",
                "items": [
                  {
                    "ecg": "sbrady",
                    "label": "Bradycardia",
                    "sub": "Beta-blocker, calcium-channel blocker"
                  },
                  {
                    "ecg": "torsades",
                    "label": "Torsades de pointes",
                    "sub": "QT-prolonging drugs"
                  },
                  {
                    "ecg": "stach",
                    "label": "Sinus tachycardia",
                    "sub": "Stimulants, anticholinergics"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Unresponsive, breathing 6/min, pinpoint pupils. First intervention?",
          "options": [
            "Open the airway and ventilate with a BVM, then naloxone",
            "Naloxone before anything else",
            "Non-rebreather mask only",
            "Chest compressions"
          ],
          "correct": 0,
          "explanation": "Fix the breathing first."
        },
        {
          "q": "A family has headache, nausea and confusion; the furnace runs nonstop; SpO₂ 98% on all. Cause?",
          "options": [
            "Carbon monoxide: SpO₂ is falsely normal; 100% oxygen",
            "Viral gastroenteritis",
            "Food poisoning",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "Several people ill in one building is a clue."
        },
        {
          "q": "Amitriptyline overdose with seizures and a wide-complex tachycardia. Explanation?",
          "options": [
            "Tricyclic sodium-channel blockade: wide QRS, seizures, arrest risk",
            "Unrelated psychiatric seizure",
            "Hyperkalemia from the seizure",
            "Only CNS depression"
          ],
          "correct": 0,
          "explanation": "Sodium bicarbonate (ALS) for QRS wider than 100 ms."
        },
        {
          "q": "Naloxone intranasal spray dose:",
          "options": [
            "4 mg",
            "0.04 mg",
            "40 mg",
            "0.4 mg only"
          ],
          "correct": 0,
          "explanation": "IV/IM: 0.4 mg titrated."
        },
        {
          "q": "Goal after naloxone:",
          "options": [
            "Adequate breathing",
            "Fully awake and alert",
            "Pupils dilated",
            "Vomiting"
          ],
          "correct": 0,
          "explanation": "Abrupt full reversal causes withdrawal."
        },
        {
          "q": "Big pupils, hot dry red skin, delirium and urinary retention:",
          "options": [
            "Anticholinergic",
            "Cholinergic",
            "Opioid",
            "Sedative"
          ],
          "correct": 0,
          "explanation": "\"Hot as a hare, dry as a bone, red as a beet, mad as a hatter.\""
        },
        {
          "q": "Pinpoint pupils, drooling, wheeze with secretions, vomiting and a slow pulse after spraying crops:",
          "options": [
            "Cholinergic (organophosphate)",
            "Anticholinergic",
            "Sympathomimetic",
            "Opioid only"
          ],
          "correct": 0,
          "explanation": "Decontaminate; large doses of atropine (ALS)."
        },
        {
          "q": "Treatment for carbon monoxide poisoning:",
          "options": [
            "100% oxygen by non-rebreather at 15 L/min",
            "Nasal cannula 2 L/min",
            "Naloxone",
            "No oxygen if SpO₂ is normal"
          ],
          "correct": 0,
          "explanation": "Hyperbaric oxygen in severe cases."
        },
        {
          "q": "A beta-blocker overdose patient feels fine. Plan?",
          "options": [
            "Transport and monitor: they can crash suddenly",
            "Leave at home",
            "Give naloxone",
            "Encourage sleep"
          ],
          "correct": 0,
          "explanation": "Delayed bradycardia and shock."
        },
        {
          "q": "Activated charcoal is considered:",
          "options": [
            "Within 1 hour of a toxic ingestion with a protected airway, per protocol",
            "For every overdose at any time",
            "For corrosives",
            "When the patient is drowsy and can't protect the airway"
          ],
          "correct": 0,
          "explanation": "50 g in adults."
        }
      ],
      "flashcards": [
        {
          "question": "Opioid overdose triad",
          "answer": "Respiratory depression, reduced consciousness, pinpoint pupils.",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Naloxone doses",
          "answer": "0.4 mg IV/IM, titrated and repeated every 2–3 minutes; or 4 mg intranasal spray. Ventilate first.",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Why transport after naloxone?",
          "answer": "Naloxone can wear off before the opioid: breathing can fail again.",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Delirium tremens",
          "answer": "Severe alcohol withdrawal: confusion, fever, tachycardia, high BP, hallucinations, seizures. Benzodiazepines (ALS).",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Stimulant overdose",
          "answer": "Agitation, hypertension, tachycardia, hyperthermia, big pupils, sweating; risk of seizures, MI, stroke. Cool, benzodiazepines, avoid struggling against restraint.",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Tricyclic overdose ECG",
          "answer": "QRS wider than 100 ms from sodium-channel blockade: seizures and arrest risk. Sodium bicarbonate (ALS).",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Carbon monoxide and pulse oximetry",
          "answer": "Standard oximeters read carboxyhemoglobin as oxygen: SpO₂ is falsely normal. 100% oxygen at 15 L/min.",
          "category": "Toxicology & Overdose"
        },
        {
          "question": "Toxidrome: big pupils, hot dry red skin, delirium",
          "answer": "Anticholinergic.",
          "category": "Toxicology & Overdose"
        }
      ],
      "critical": [
        {
          "id": "crit_5_5_1",
          "scenario": "A 24-year-old with a history of heroin use: RR 4 and shallow, SpO₂ 80%, HR 62, pupils 1 mm, no response to pain. A syringe on the nightstand.",
          "question": "Sequence of interventions?",
          "options": [
            {
              "t": "Open the airway, ventilate with a BVM and oxygen, then naloxone (0.4 mg IV/IM titrated or 4 mg intranasal) while ventilating",
              "f": "Correct."
            },
            {
              "t": "Naloxone first, ventilate only if it fails",
              "f": "Hypoxia is the immediate threat."
            },
            {
              "t": "Recovery position and observe",
              "f": "RR 4 needs ventilation."
            },
            {
              "t": "Chest compressions",
              "f": "He has a pulse."
            }
          ],
          "correct": 0,
          "explanation": "Transport even if he wakes: naloxone can wear off first.",
          "kpi": "Prioritizes airway and ventilation before medication administration in opioid overdose"
        },
        {
          "id": "crit_5_5_2",
          "scenario": "A 22-year-old took cocaine 30 minutes ago: agitated, confused, hot (39.6 °C), BP 180/104, HR 138, big pupils. Friends are holding him down on the bed.",
          "question": "How do you manage him?",
          "options": [
            {
              "t": "Police for safety, clear the room, de-escalate, cool him, avoid prolonged struggling against restraint, ALS sedation per protocol, rapid transport",
              "f": "Correct."
            },
            {
              "t": "Let the friends hold him down harder",
              "f": "Struggling raises heat and acidosis; risk of sudden death."
            },
            {
              "t": "Lie him prone to control him",
              "f": "Never prone."
            },
            {
              "t": "Leave him to sleep it off",
              "f": "Hyperthermia is life-threatening."
            }
          ],
          "correct": 0,
          "explanation": "Severe sympathomimetic toxicity: cooling and benzodiazepines are the treatment.",
          "kpi": "Recognizes the dangers of physical restraint in hyperthermic stimulant overdose"
        },
        {
          "id": "crit_5_5_3",
          "scenario": "A 45-year-old took an unknown number of her husband's heart pills 90 minutes ago. She felt fine; now she's drowsy and HR has dropped to 58. Bottles: metoprolol, lisinopril, amiodarone.",
          "question": "Concern and action?",
          "options": [
            {
              "t": "Beta-blocker toxicity developing: frequent vital signs, monitor and 12-lead, contact medical direction or the poison centre, rapid transport with the bottles",
              "f": "Correct."
            },
            {
              "t": "She's just relaxing: continue routinely",
              "f": "Drowsiness and falling HR are toxicity."
            },
            {
              "t": "Give naloxone",
              "f": "Not an opioid."
            },
            {
              "t": "Leave the bottles behind",
              "f": "Bring every container."
            }
          ],
          "correct": 0,
          "explanation": "Cardiac drug overdoses can look well before sudden bradycardia and shock.",
          "kpi": "Recognizes delayed toxicity in polypharmacy overdose despite initial normal vital signs"
        }
      ]
    },
    {
      "id": "c5s6",
      "shortTitle": "5.6 Gastrointestinal & Abdominal",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Gastrointestinal & Abdominal Emergencies",
        "lead": "You won't make the final diagnosis, but you can find the dangerous belly: shock, a rigid abdomen, a pulsatile mass, blood, or pain far worse than the examination. Keep them nil by mouth, treat pain and nausea, and transport the right way.",
        "sections": [
          {
            "type": "table",
            "title": "Where it hurts",
            "icon": "target",
            "columns": [
              "Pain",
              "Think of"
            ],
            "rows": [
              [
                "Central, moving to the right lower quadrant",
                "Appendicitis"
              ],
              [
                "Right upper quadrant to the shoulder, after fatty food",
                "Cholecystitis"
              ],
              [
                "Epigastric through to the back, better leaning forward",
                "Pancreatitis"
              ],
              [
                "Colicky, distended, vomiting, no stool or gas",
                "Bowel obstruction"
              ],
              [
                "Sudden abdominal or back pain with collapse",
                "Ruptured aortic aneurysm"
              ],
              [
                "Lower abdominal pain and fainting, childbearing age",
                "Ruptured ectopic pregnancy"
              ],
              [
                "Severe pain, soft belly (pain out of proportion)",
                "Mesenteric ischemia"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Red flags",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Peritonitis",
                "items": [
                  "Lies still; guarding, rigidity, rebound tenderness"
                ]
              },
              {
                "title": "Bleeding",
                "items": [
                  "Vomited blood or coffee grounds; black tarry stool (upper)",
                  "Bright red or maroon blood (lower)",
                  "Dizzy or BP drops on sitting up: significant loss"
                ]
              },
              {
                "title": "Hidden disease",
                "items": [
                  "Older adults, diabetes, steroids: little pain, serious disease"
                ]
              }
            ]
          },
          {
            "type": "steps",
            "title": "Suspected ruptured aortic aneurysm",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Recognise",
                "text": "Men over 65, smokers, hypertension; sudden pain, collapse, pulsatile mass."
              },
              {
                "title": "Handle gently",
                "text": "Don't palpate deeply; minimal movement."
              },
              {
                "title": "Permissive hypotension",
                "text": "If conscious, accept systolic about 70–90 mmHg."
              },
              {
                "title": "Go",
                "text": "Straight to a vascular surgery centre with pre-notification."
              }
            ]
          },
          {
            "type": "list",
            "title": "Every abdominal patient",
            "icon": "clipboard-list",
            "items": [
              "Nothing by mouth",
              "Position of comfort",
              "Antiemetic: ondansetron 4 mg IV/IM (ALS)",
              "Analgesia per protocol (5.11)",
              "Shock: treat as hemorrhage (see Shock & Hemorrhage)"
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
                    "label": "Medical assessment",
                    "sub": "Abdominal exam steps",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  },
                  {
                    "label": "Medical course",
                    "sub": "GI emergencies questions",
                    "href": "../pages/medical.html",
                    "icon": "graduation-cap"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Pain started around the navel 8 hours ago and moved to the right lower quadrant; nausea, low fever. Most likely?",
          "options": [
            "Appendicitis",
            "Cholecystitis",
            "Pancreatitis",
            "Diverticulitis"
          ],
          "correct": 0,
          "explanation": "Migration to the right lower quadrant is classic."
        },
        {
          "q": "Hypertensive smoker, 70, with sudden tearing abdominal pain to the back, pale, BP 90/58, pulsatile mass. Action?",
          "options": [
            "Don't palpate deeply; gentle, rapid transport to a vascular surgery centre",
            "Palpate firmly to confirm",
            "Cold packs to the abdomen",
            "Water to rule out indigestion"
          ],
          "correct": 0,
          "explanation": "Ruptured aortic aneurysm: minimal handling."
        },
        {
          "q": "On warfarin: coffee-ground vomit, black stools, BP 104/68 lying and 84/52 sitting. Means:",
          "options": [
            "Significant upper GI bleed with major blood loss",
            "Minor bleed, resolving",
            "Bleeding has stopped",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "Lie flat, IV access en route, close monitoring."
        },
        {
          "q": "Three signs of peritonitis:",
          "options": [
            "Guarding, rigidity, rebound tenderness",
            "Fever, cough, wheeze",
            "Diarrhea, cramps, bloating",
            "Jaundice, itching, dark urine"
          ],
          "correct": 0,
          "explanation": "They lie still because movement hurts."
        },
        {
          "q": "Black tarry stool means:",
          "options": [
            "Upper GI bleeding (melena)",
            "Lower GI bleeding",
            "Normal iron tablets only",
            "Constipation"
          ],
          "correct": 0,
          "explanation": "Bright red or maroon blood suggests a lower source."
        },
        {
          "q": "Epigastric pain to the back, eased by leaning forward, after heavy drinking:",
          "options": [
            "Pancreatitis",
            "Appendicitis",
            "Renal colic",
            "Gastroenteritis"
          ],
          "correct": 0,
          "explanation": "Gallstones are the other common cause."
        },
        {
          "q": "A 26-year-old woman has lower abdominal pain and fainted. Must consider:",
          "options": [
            "Ruptured ectopic pregnancy",
            "Irritable bowel",
            "Food poisoning",
            "Muscle strain"
          ],
          "correct": 0,
          "explanation": "Any woman of childbearing age."
        },
        {
          "q": "Permissive hypotension target in a conscious patient with ruptured aortic aneurysm:",
          "options": [
            "Systolic about 70–90 mmHg",
            "Systolic 140 mmHg",
            "Normal BP for age",
            "No target"
          ],
          "correct": 0,
          "explanation": "Raising BP can worsen bleeding."
        },
        {
          "q": "Severe abdominal pain with a soft, barely tender abdomen in an older patient with AF:",
          "options": [
            "Mesenteric ischemia",
            "Constipation",
            "Anxiety",
            "Muscle cramp"
          ],
          "correct": 0,
          "explanation": "Pain out of proportion is the clue."
        },
        {
          "q": "Antiemetic dose of ondansetron (ALS):",
          "options": [
            "4 mg IV/IM",
            "40 mg IV",
            "0.4 mg IV",
            "4 g IV"
          ],
          "correct": 0,
          "explanation": "Per protocol."
        }
      ],
      "flashcards": [
        {
          "question": "Three signs of peritonitis",
          "answer": "Guarding, rigidity, rebound tenderness.",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "Melena vs hematochezia",
          "answer": "Melena: black tarry stool, upper GI bleed. Hematochezia: bright red or maroon blood, usually lower GI bleed.",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "Appendicitis",
          "answer": "Central pain moving to the right lower quadrant, nausea, loss of appetite, low-grade fever.",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "Cholecystitis",
          "answer": "Right upper quadrant pain to the right shoulder, often after fatty food, with nausea and fever.",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "Pancreatitis",
          "answer": "Epigastric pain through to the back, better leaning forward, vomiting. Gallstones and alcohol.",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "Abdominal aortic aneurysm",
          "answer": "Sudden abdominal, back or flank pain, collapse, pulsatile mass. Don't palpate deeply; gentle handling; vascular surgery centre.",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "GI bleed with shock",
          "answer": "Lie flat, oxygen to target, IV access en route, nothing by mouth, rapid transport. Bring the medication list (anticoagulants, NSAIDs).",
          "category": "Gastrointestinal & Abdominal"
        },
        {
          "question": "Pain out of proportion to examination",
          "answer": "Think mesenteric ischemia, especially in older patients with AF or vascular disease.",
          "category": "Gastrointestinal & Abdominal"
        }
      ],
      "critical": [
        {
          "id": "crit_5_6_1",
          "scenario": "A 24-year-old lies very still. Pain started centrally 4 hours ago and is now right lower. Vomited twice. HR 102, temperature 38.1 °C. The right lower quadrant is rigid and he flinches when you release pressure.",
          "question": "What does this suggest, and management?",
          "options": [
            {
              "t": "Appendicitis with peritonitis: nothing by mouth, position of comfort, analgesia and antiemetic per protocol, transport",
              "f": "Correct."
            },
            {
              "t": "Gastritis: drink fluids",
              "f": "Peritoneal signs need surgery assessment."
            },
            {
              "t": "Let him walk to the ambulance",
              "f": "Movement hurts; keep him comfortable."
            },
            {
              "t": "Give a laxative",
              "f": "Never."
            }
          ],
          "correct": 0,
          "explanation": "Fever and rising heart rate suggest the inflammation is progressing.",
          "kpi": "Recognizes peritoneal signs including guarding, rigidity, and rebound tenderness"
        },
        {
          "id": "crit_5_6_2",
          "scenario": "An 82-year-old taking naproxen has black stools; sitting up drops BP from 100/64 to 84/50 and he vomits coffee-ground material.",
          "question": "Source and management?",
          "options": [
            {
              "t": "Upper GI bleed (likely NSAID ulcer) with major blood loss: lie flat, oxygen to target, IV access en route, rapid transport",
              "f": "Correct."
            },
            {
              "t": "Hemorrhoids: oral fluids, routine",
              "f": "Coffee grounds and melena are upper GI."
            },
            {
              "t": "Sit him up to stop vomiting",
              "f": "His BP falls when upright."
            },
            {
              "t": "Give aspirin for pain",
              "f": "That worsens bleeding."
            }
          ],
          "correct": 0,
          "explanation": "Older patients decompensate fast; bring the naproxen.",
          "kpi": "Recognizes upper GI bleeding from melena and hematemesis with orthostatic hypotension"
        },
        {
          "id": "crit_5_6_3",
          "scenario": "A 72-year-old heavy smoker collapsed with sudden ripping lower abdominal and back pain. BP 82/56, HR 118, confused. A firm pulsatile mass above the navel.",
          "question": "Diagnosis and priority?",
          "options": [
            {
              "t": "Ruptured aortic aneurysm: no deep palpation, minimal handling, accept systolic about 70–90 mmHg, rapid transport to vascular surgery",
              "f": "Correct."
            },
            {
              "t": "Kidney stone: analgesia and routine transport",
              "f": "Shock and a pulsatile mass mean rupture."
            },
            {
              "t": "Large fluid boluses to normal BP",
              "f": "That can worsen the bleeding."
            },
            {
              "t": "Palpate deeply to measure it",
              "f": "Can worsen the rupture."
            }
          ],
          "correct": 0,
          "explanation": "Don't delay transport for IV access.",
          "kpi": "Identifies ruptured AAA by the triad of shock, tearing pain, and pulsatile mass"
        }
      ]
    },
    {
      "id": "c5s7",
      "shortTitle": "5.7 Genitourinary & Renal",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Genitourinary & Renal Emergencies",
        "lead": "In older adults a UTI may show up only as confusion or a fall. Testicular pain is a race against time. Dialysis patients bring two killers: fluid overload and high potassium. Protect the fistula arm.",
        "sections": [
          {
            "type": "table",
            "title": "Common presentations",
            "icon": "droplet",
            "columns": [
              "Problem",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "UTI in older adults",
                "Confusion, falls, fever or low temperature",
                "Sepsis screen (5.9)"
              ],
              [
                "Pyelonephritis",
                "Fever, flank pain, rigors, vomiting",
                "Sepsis screen; fluids per protocol"
              ],
              [
                "Renal colic",
                "Sudden colicky flank pain to the groin, restless, blood in urine",
                "Analgesia, antiemetic"
              ],
              [
                "Testicular torsion",
                "Sudden testicular pain, vomiting",
                "Time critical: best within 6 hours; surgical centre"
              ],
              [
                "Urinary retention",
                "Painful, distended bladder",
                "Analgesia; transport"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Dialysis patients",
            "icon": "activity",
            "groups": [
              {
                "title": "Fistula arm",
                "items": [
                  "No BP cuff, no IV",
                  "Bleeding: firm direct pressure"
                ]
              },
              {
                "title": "Missed dialysis: fluid",
                "items": [
                  "Breathless, crackles, edema, high BP",
                  "Sit up, oxygen, CPAP (see Heart Failure)"
                ]
              },
              {
                "title": "Missed dialysis: potassium",
                "items": [
                  "Weakness, palpitations, slow pulse",
                  "Peaked T waves, then wide QRS, sine wave, arrest"
                ]
              }
            ]
          },
          {
            "type": "doses",
            "title": "Hyperkalemia with ECG changes (ALS)",
            "icon": "zap",
            "rows": [
              {
                "drug": "Calcium gluconate 10%",
                "dose": "30 mL IV",
                "note": "Or calcium chloride 10% 10 mL",
                "level": "ALS"
              },
              {
                "drug": "Salbutamol",
                "dose": "10–20 mg nebulized",
                "note": "Shifts potassium into cells",
                "level": "ALS"
              }
            ]
          },
          {
            "type": "tools",
            "title": "See it",
            "icon": "monitor",
            "groups": [
              {
                "title": "ECG",
                "items": [
                  {
                    "ecg": "hyperK",
                    "label": "Hyperkalemia",
                    "sub": "Peaked T waves",
                    "lead": "V3"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "A 78-year-old nursing home resident is newly confused with fever, no urinary symptoms. Suspect:",
          "options": [
            "UTI presenting atypically (possible sepsis)",
            "Stroke only",
            "Dehydration only",
            "Normal aging"
          ],
          "correct": 0,
          "explanation": "Older adults often lack urinary symptoms."
        },
        {
          "q": "Missed two dialysis sessions: weak, palpitations, peaked T waves, HR 58. Priority?",
          "options": [
            "Hyperkalemia emergency: monitor and transport emergently",
            "Wait for the next session",
            "Oral potassium",
            "Normal for dialysis patients"
          ],
          "correct": 0,
          "explanation": "Can progress to arrest within hours."
        },
        {
          "q": "Where should you NOT take a BP in a dialysis patient?",
          "options": [
            "The fistula arm",
            "The other arm",
            "The leg",
            "Anywhere is fine"
          ],
          "correct": 0,
          "explanation": "Protects the access."
        },
        {
          "q": "Sudden severe testicular pain with vomiting in a 14-year-old:",
          "options": [
            "Testicular torsion: urgent surgical centre",
            "Muscle strain: rest",
            "Hernia: push it back",
            "Infection: wait for a doctor's appointment"
          ],
          "correct": 0,
          "explanation": "Best salvaged within 6 hours."
        },
        {
          "q": "Colicky flank pain to the groin, can't keep still, blood in the urine:",
          "options": [
            "Renal colic (kidney stone)",
            "Appendicitis",
            "Aortic aneurysm is impossible",
            "Pyelonephritis only"
          ],
          "correct": 0,
          "explanation": "In older patients, rule out aneurysm too."
        },
        {
          "q": "Fever, flank pain and rigors suggest:",
          "options": [
            "Pyelonephritis",
            "Bladder stone",
            "Renal colic",
            "Prostatitis only"
          ],
          "correct": 0,
          "explanation": "Screen for sepsis."
        },
        {
          "q": "Hyperkalemia ECG progression:",
          "options": [
            "Peaked T waves → wide QRS → sine wave → arrest",
            "ST elevation → Q waves",
            "Delta waves",
            "Long QT only"
          ],
          "correct": 0,
          "explanation": "Treat with calcium (ALS) when changes appear."
        },
        {
          "q": "First drug for hyperkalemia with ECG changes (ALS):",
          "options": [
            "IV calcium",
            "IV potassium",
            "Furosemide alone",
            "Naloxone"
          ],
          "correct": 0,
          "explanation": "Stabilizes the heart membrane."
        },
        {
          "q": "Bleeding from a fistula after dialysis:",
          "options": [
            "Firm direct pressure",
            "Tourniquet above the fistula immediately",
            "Ignore",
            "Cold water only"
          ],
          "correct": 0,
          "explanation": "Elevate and press firmly."
        },
        {
          "q": "A dialysis patient with crackles, edema and SpO₂ 86% after missed sessions:",
          "options": [
            "Fluid overload: sit up, oxygen, CPAP, rapid transport",
            "Asthma: nebulizer only",
            "Give a fluid bolus",
            "Lie flat"
          ],
          "correct": 0,
          "explanation": "Dialysis is the definitive treatment."
        }
      ],
      "flashcards": [
        {
          "question": "UTI in older adults",
          "answer": "May present only with confusion, falls or sepsis, without urinary symptoms.",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Pyelonephritis",
          "answer": "Fever, flank pain, rigors, vomiting; can become sepsis.",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Renal colic",
          "answer": "Sudden colicky flank pain to the groin, restless, nausea, blood in urine.",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Fistula arm",
          "answer": "No BP cuff or IV in the arm with the fistula or graft; use the other arm.",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Missed dialysis: fluid overload",
          "answer": "Breathlessness, crackles, raised JVP, edema, high BP. Sit up, oxygen, CPAP, transport.",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Hyperkalemia in dialysis patients",
          "answer": "Bradycardia, block, VF or asystole. ECG: peaked T waves → wide QRS → sine wave → arrest.",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Acute kidney injury causes",
          "answer": "Pre-renal (low flow), renal (direct damage: toxins, NSAIDs), post-renal (obstruction: stones, prostate).",
          "category": "Genitourinary & Renal"
        },
        {
          "question": "Testicular torsion",
          "answer": "Sudden testicular pain with vomiting: time critical, best within 6 hours. Urgent surgical centre.",
          "category": "Genitourinary & Renal"
        }
      ],
      "critical": [
        {
          "id": "crit_5_7_1",
          "scenario": "An 82-year-old with dementia and recurrent UTIs is more confused since this morning. BP 90/58, HR 108, temperature 38.6 °C, warm dry skin, tender lower abdomen.",
          "question": "Most likely cause?",
          "options": [
            {
              "t": "Urosepsis: oxygen to target, fluids per protocol, pre-alert, urgent transport",
              "f": "Correct."
            },
            {
              "t": "Worsening dementia: no transport",
              "f": "New confusion with fever and low BP is sepsis."
            },
            {
              "t": "Dehydration: oral fluids",
              "f": "She needs hospital care."
            },
            {
              "t": "Stroke only",
              "f": "Fever and low BP point to sepsis."
            }
          ],
          "correct": 0,
          "explanation": "Older patients with sepsis decompensate quickly.",
          "kpi": "Recognizes urosepsis presenting as altered mental status in an elderly patient"
        },
        {
          "id": "crit_5_7_2",
          "scenario": "A dialysis patient missed three sessions: sitting up, can't finish sentences, BP 178/96, RR 32, SpO₂ 86%, crackles, raised JVP, leg edema. Left forearm fistula.",
          "question": "Primary problem and plan?",
          "options": [
            {
              "t": "Fluid overload with pulmonary edema: sit up, oxygen, CPAP, no BP or IV in the left arm, emergency transport for dialysis",
              "f": "Correct."
            },
            {
              "t": "Asthma: albuterol only",
              "f": "Crackles and edema mean fluid."
            },
            {
              "t": "Fluid bolus",
              "f": "She's overloaded."
            },
            {
              "t": "IV in the left arm",
              "f": "Protect the fistula."
            }
          ],
          "correct": 0,
          "explanation": "Monitor for hyperkalemia too: get a rhythm strip.",
          "kpi": "Recognizes pulmonary edema from fluid overload in a missed-dialysis patient"
        },
        {
          "id": "crit_5_7_3",
          "scenario": "A dialysis patient who missed sessions is weak with HR 44. The monitor shows tall peaked T waves and a widening QRS.",
          "question": "What's happening and the priority?",
          "options": [
            {
              "t": "Severe hyperkalemia: pads on, ALS for IV calcium and nebulized salbutamol, emergency transport",
              "f": "Correct."
            },
            {
              "t": "Atropine only and routine transport",
              "f": "Treat the potassium."
            },
            {
              "t": "Give potassium",
              "f": "Never."
            },
            {
              "t": "Wait for the next dialysis",
              "f": "This can arrest at any moment."
            }
          ],
          "correct": 0,
          "explanation": "Calcium gluconate 10% 30 mL IV (or calcium chloride 10% 10 mL) stabilizes the heart.",
          "kpi": "Recognizes hyperkalemia ECG changes and arranges membrane-stabilizing treatment"
        }
      ]
    },
    {
      "id": "c5s8",
      "shortTitle": "5.8 Hematologic Emergencies",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Hematologic Emergencies",
        "lead": "Blood disorders turn small problems into big ones. A sickle cell patient in pain needs analgesia fast. An anticoagulated patient with a bump on the head needs a scan. Severe sickle cell, chest symptoms and fever can kill quickly.",
        "sections": [
          {
            "type": "groups",
            "title": "Sickle cell disease",
            "icon": "droplet",
            "groups": [
              {
                "title": "Pain crisis",
                "items": [
                  "Severe bone, chest or abdominal pain",
                  "Analgesia promptly (within 30 minutes of arrival)",
                  "Keep warm; fluids; oxygen if SpO₂ below 94%"
                ]
              },
              {
                "title": "Can kill",
                "items": [
                  "Acute chest syndrome: chest pain, fever, cough, hypoxia",
                  "Stroke (children), splenic sequestration (pale, big spleen, shock)",
                  "Fever: no working spleen, overwhelming infection",
                  "Priapism"
                ]
              },
              {
                "title": "Triggers",
                "items": [
                  "Infection, dehydration, cold",
                  "Hypoxia, stress, altitude"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "Bleeding risk",
            "icon": "triangle-alert",
            "columns": [
              "Patient",
              "Watch for",
              "Do"
            ],
            "rows": [
              [
                "Anticoagulants (warfarin, apixaban, rivaroxaban, edoxaban, dabigatran)",
                "Head injury, GI bleed",
                "Any head injury: hospital; CT within 8 hours even if well"
              ],
              [
                "Hemophilia",
                "Joint and muscle bleeds, head injury",
                "Bring their factor and treatment card"
              ],
              [
                "Transfusion reaction",
                "Fever, rash, wheeze, low BP during a transfusion",
                "Stop it, keep the line, oxygen, keep the bag"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Clots and anemia",
            "icon": "activity",
            "items": [
              "DVT: one swollen, warm, painful leg; don't massage it",
              "PE can follow (5.1)",
              "Severe anemia: pale, tired, breathless, fast pulse, chest pain"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Related",
                "items": [
                  {
                    "label": "Trauma assessment",
                    "sub": "Head injury on anticoagulants",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "GCS calculator",
                    "sub": "Baseline and repeat",
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
          "q": "A 16-year-old with sickle cell disease has severe limb pain, temperature 37.9 °C, SpO₂ 94%. Priority?",
          "options": [
            "Prompt analgesia, keep warm, fluids, gentle handling and transport",
            "Aspirin and cold packs",
            "Make him walk it off",
            "Wait for the pain to settle"
          ],
          "correct": 0,
          "explanation": "Cold promotes sickling; oxygen if SpO₂ falls below 94%."
        },
        {
          "q": "A 75-year-old on warfarin hit his head; small cut, now well. Plan?",
          "options": [
            "Neuro assessment and transport for CT",
            "Dress the wound and leave",
            "Vitamin K and observe at home",
            "No assessment needed"
          ],
          "correct": 0,
          "explanation": "Anticoagulated head injuries need a scan within 8 hours even if well."
        },
        {
          "q": "Chest pain, fever, cough and hypoxia in sickle cell disease:",
          "options": [
            "Acute chest syndrome: a leading cause of death",
            "Simple chest wall pain",
            "Anxiety",
            "Muscle strain"
          ],
          "correct": 0,
          "explanation": "Oxygen, analgesia, rapid transport."
        },
        {
          "q": "A trigger for a sickle cell crisis:",
          "options": [
            "Cold exposure",
            "Warm bath",
            "Rest",
            "Drinking water"
          ],
          "correct": 0,
          "explanation": "Also infection, dehydration, hypoxia, stress, altitude."
        },
        {
          "q": "Fever in a child with sickle cell disease is dangerous because:",
          "options": [
            "No working spleen: overwhelming infection",
            "Fever causes anemia",
            "It's never dangerous",
            "It means dehydration only"
          ],
          "correct": 0,
          "explanation": "Treat as an emergency."
        },
        {
          "q": "A suspected transfusion reaction. First action?",
          "options": [
            "Stop the transfusion",
            "Speed it up",
            "Give more blood",
            "Remove the cannula"
          ],
          "correct": 0,
          "explanation": "Keep the line with new tubing; keep the bag."
        },
        {
          "q": "One swollen, warm, painful calf. Avoid:",
          "options": [
            "Massaging it",
            "Elevating it",
            "Transport",
            "Asking about recent surgery"
          ],
          "correct": 0,
          "explanation": "Could dislodge clot to the lungs."
        },
        {
          "q": "A hemophilia patient hits his head and feels fine. Plan?",
          "options": [
            "Emergency transport with his factor and treatment card",
            "Ice and rest at home",
            "Wait 24 hours",
            "Aspirin for the headache"
          ],
          "correct": 0,
          "explanation": "Intracranial bleeding can be delayed."
        },
        {
          "q": "A pale child with sickle cell disease, big spleen and shock:",
          "options": [
            "Splenic sequestration: emergency",
            "Viral illness",
            "Normal for sickle cell",
            "Constipation"
          ],
          "correct": 0,
          "explanation": "Blood pools in the spleen."
        },
        {
          "q": "Which is an anticoagulant?",
          "options": [
            "Apixaban",
            "Paracetamol",
            "Salbutamol",
            "Ondansetron"
          ],
          "correct": 0,
          "explanation": "Also warfarin, rivaroxaban, edoxaban, dabigatran."
        }
      ],
      "flashcards": [
        {
          "question": "Severe anemia",
          "answer": "Pallor, fatigue, breathlessness on exertion, dizziness, tachycardia, chest pain.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Acute chest syndrome",
          "answer": "Chest pain, fever, cough, breathlessness, hypoxia in sickle cell disease; a leading cause of death.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Sickle cell crisis triggers",
          "answer": "Infection, dehydration, cold, hypoxia, stress, altitude.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Anticoagulants and head injury",
          "answer": "Bleeding risk is high and signs can be delayed: hospital assessment and CT within 8 hours even if well.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Deep vein thrombosis",
          "answer": "One swollen, warm, red, painful leg. Don't massage it; it can cause PE.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Transfusion reaction",
          "answer": "Stop the transfusion, keep the line with new tubing, oxygen, monitor, keep the bag.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Hemophilia and head injury",
          "answer": "Missing clotting factor: even minor head trauma can bleed. Emergency transport with their factor and card.",
          "category": "Hematologic Emergencies"
        },
        {
          "question": "Sickle cell pain: EMS care",
          "answer": "Prompt analgesia (within 30 minutes of arrival), warmth, fluids, oxygen if SpO₂ below 94%, gentle handling.",
          "category": "Hematologic Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_5_8_1",
          "scenario": "A 22-year-old with sickle cell disease has worsening chest pain, cough and breathlessness for 12 hours after a cold; vomiting for 2 days. SpO₂ 90%, temperature 38.8 °C, HR 114.",
          "question": "Diagnosis and management?",
          "options": [
            {
              "t": "Acute chest syndrome: oxygen, analgesia, sit up, keep warm, rapid transport with pre-alert",
              "f": "Correct."
            },
            {
              "t": "Simple pain crisis: 2 L/min and routine transport",
              "f": "Hypoxia, fever and chest symptoms are acute chest syndrome."
            },
            {
              "t": "Cold packs for the pain",
              "f": "Cold promotes sickling."
            },
            {
              "t": "Withhold analgesia until hospital",
              "f": "Treat pain promptly."
            }
          ],
          "correct": 0,
          "explanation": "Hypoxia drives more sickling; these patients may need exchange transfusion.",
          "kpi": "Differentiates acute chest syndrome from simple vaso-occlusive crisis in sickle cell disease"
        },
        {
          "id": "crit_5_8_2",
          "scenario": "A 70-year-old on apixaban fell down three stairs and hit his head. GCS 15, no symptoms, small bruise. He wants to stay home.",
          "question": "How do you manage this?",
          "options": [
            {
              "t": "Explain the delayed bleeding risk, recommend transport for CT; if he still refuses, involve medical direction and document carefully",
              "f": "Correct."
            },
            {
              "t": "Accept the refusal: he looks fine",
              "f": "Anticoagulation hides delayed bleeds."
            },
            {
              "t": "Force him to go",
              "f": "A capable adult can refuse; inform and document."
            },
            {
              "t": "Tell him to stop the apixaban",
              "f": "Not your decision."
            }
          ],
          "correct": 0,
          "explanation": "Anticoagulated head injuries need a CT within 8 hours even if well.",
          "kpi": "Recognizes the danger of seemingly minor head trauma in anticoagulated patients"
        },
        {
          "id": "crit_5_8_3",
          "scenario": "The day after hip replacement: sudden breathlessness and left chest pain. HR 118, RR 28, SpO₂ 88%. The left leg is swollen, warm and red.",
          "question": "Likely sequence and management?",
          "options": [
            {
              "t": "DVT that has caused a pulmonary embolism: oxygen, sit up, don't massage the leg, rapid transport",
              "f": "Correct."
            },
            {
              "t": "Normal post-op swelling and anxiety",
              "f": "Hypoxia and tachycardia aren't anxiety."
            },
            {
              "t": "Massage the leg to improve flow",
              "f": "Never."
            },
            {
              "t": "Walk her to the ambulance",
              "f": "Minimise exertion."
            }
          ],
          "correct": 0,
          "explanation": "Massive PE can cause collapse: be ready for arrest.",
          "kpi": "Recognizes the progression from DVT to pulmonary embolism with characteristic findings"
        }
      ]
    },
    {
      "id": "c5s9",
      "shortTitle": "5.9 Infectious Disease & Sepsis",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Infectious Disease & Sepsis",
        "lead": "Sepsis is infection plus failing organs, and it kills when it's caught late. Look for it in every patient with an infection who seems \"off\". Screen, start treatment, pre-alert the hospital, and protect yourself with the right precautions.",
        "sections": [
          {
            "type": "gate",
            "title": "Could this be sepsis?",
            "icon": "thermometer",
            "question": "Suspected infection plus any sign of organ trouble?",
            "items": [
              "New confusion or drowsiness",
              "Respiratory rate 22 or more; SpO₂ falling",
              "Systolic 100 mmHg or less; mottled or cold skin",
              "Little urine; temperature above 38 °C or below 36 °C"
            ],
            "yes": "Sepsis alert: oxygen to SpO₂ 94–98%, IV access and fluids per protocol, pre-alert, rapid transport. Antibiotics within 1 hour for shock or probable sepsis.",
            "no": "Keep reassessing: sepsis can develop over hours."
          },
          {
            "type": "table",
            "title": "Screening tools",
            "icon": "clipboard-list",
            "columns": [
              "Tool",
              "High risk",
              "Note"
            ],
            "rows": [
              [
                "qSOFA",
                "2 or more of: respiratory rate 22 or more, systolic 100 mmHg or less, altered mentation",
                "Not to be used alone: misses many cases"
              ],
              [
                "NEWS2",
                "5 or more; 7 or more is high risk",
                "Uses the full set of vital signs"
              ],
              [
                "SIRS",
                "Temperature above 38 °C or below 36 °C, heart rate above 90/min, respiratory rate above 20/min",
                "Sensitive, not specific"
              ]
            ],
            "notes": [
              "Septic shock: needs vasopressors to keep MAP 65 mmHg or more, with lactate above 2 mmol/L, despite fluids.",
              "Fluids: at least 30 mL/kg within 3 hours for hypotension; smaller boluses with heart failure."
            ]
          },
          {
            "type": "table",
            "title": "Protect yourself",
            "icon": "shield",
            "columns": [
              "Precaution",
              "For",
              "Wear"
            ],
            "rows": [
              [
                "Standard",
                "Everyone",
                "Gloves; eye protection for splashes; hand hygiene"
              ],
              [
                "Contact",
                "MRSA, C. difficile",
                "Gown and gloves; soap and water for C. difficile"
              ],
              [
                "Droplet",
                "Meningitis, influenza, pertussis",
                "Surgical mask on you and the patient"
              ],
              [
                "Airborne",
                "Tuberculosis, measles, chickenpox",
                "N95 or better; mask the patient; fresh-air ventilation"
              ]
            ]
          },
          {
            "type": "list",
            "title": "High-risk patients",
            "icon": "triangle-alert",
            "items": [
              "Neutropenic fever (on chemotherapy): emergency",
              "No spleen (including sickle cell)",
              "Very young, very old, immunosuppressed",
              "Non-blanching rash with fever: meningococcal sepsis"
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
                    "label": "Medical course",
                    "sub": "Sepsis and infection questions",
                    "href": "../pages/medical.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "Medical assessment",
                    "sub": "Full set of vital signs",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "A nursing home resident with a smelly urine has confusion, RR 24, BP 98/62, temperature 38.9 °C. Interpretation?",
          "options": [
            "Suspected sepsis: qSOFA 3, rapid transport and pre-alert",
            "Simple UTI with age-related confusion",
            "Normal for her age",
            "Dementia, with an incidental UTI"
          ],
          "correct": 0,
          "explanation": "All three qSOFA criteria are present."
        },
        {
          "q": "Precautions for suspected active tuberculosis:",
          "options": [
            "Airborne: N95 or better",
            "Droplet only",
            "Standard only",
            "Contact only"
          ],
          "correct": 0,
          "explanation": "Also mask the patient."
        },
        {
          "q": "Spreading leg cellulitis with confusion; after 500 mL of fluid, BP falls from 104/68 to 92/56. This suggests:",
          "options": [
            "Progression to septic shock",
            "An allergic reaction to saline",
            "An expected, harmless drop",
            "A vasovagal reaction"
          ],
          "correct": 0,
          "explanation": "Pre-alert; continue fluids per protocol."
        },
        {
          "q": "qSOFA criteria:",
          "options": [
            "Respiratory rate 22 or more, systolic 100 mmHg or less, altered mentation",
            "Fever, cough, rash",
            "Heart rate above 90, temperature above 38 °C, white count",
            "SpO₂, glucose, GCS"
          ],
          "correct": 0,
          "explanation": "2 or more is high risk, but don't use it alone to rule sepsis out."
        },
        {
          "q": "Septic shock is defined by:",
          "options": [
            "Vasopressors needed for MAP 65 mmHg or more and lactate above 2 mmol/L despite fluids",
            "Any fever with low BP",
            "Heart rate above 120",
            "Positive blood cultures"
          ],
          "correct": 0,
          "explanation": "Sepsis-3 definition."
        },
        {
          "q": "Fluid for septic shock (adult):",
          "options": [
            "At least 30 mL/kg within 3 hours",
            "250 mL only",
            "None",
            "5 mL/kg"
          ],
          "correct": 0,
          "explanation": "Smaller boluses with heart failure; reassess."
        },
        {
          "q": "Which disease needs droplet precautions?",
          "options": [
            "Bacterial meningitis",
            "Tuberculosis",
            "C. difficile",
            "MRSA"
          ],
          "correct": 0,
          "explanation": "Surgical mask on you and the patient."
        },
        {
          "q": "Hand hygiene after a C. difficile patient:",
          "options": [
            "Soap and water",
            "Alcohol rub",
            "Nothing if gloved",
            "Wipes only"
          ],
          "correct": 0,
          "explanation": "Alcohol doesn't kill the spores."
        },
        {
          "q": "Fever in a patient on chemotherapy:",
          "options": [
            "An emergency: neutropenic sepsis risk",
            "Usually harmless",
            "Treat at home with paracetamol",
            "Only a concern above 40 °C"
          ],
          "correct": 0,
          "explanation": "They can't fight infection."
        },
        {
          "q": "Antibiotics for septic shock should be given within:",
          "options": [
            "1 hour",
            "24 hours",
            "12 hours",
            "After discharge"
          ],
          "correct": 0,
          "explanation": "Pre-alerting helps the hospital start early."
        }
      ],
      "flashcards": [
        {
          "question": "qSOFA",
          "answer": "Respiratory rate 22 or more, systolic 100 mmHg or less, altered mentation. 2 or more is high risk; not to be used alone as a screen.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "SIRS criteria",
          "answer": "Temperature above 38 °C or below 36 °C, heart rate above 90/min, respiratory rate above 20/min, abnormal white count.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "Septic shock",
          "answer": "Sepsis needing vasopressors to keep MAP 65 mmHg or more, with lactate above 2 mmol/L, despite fluids.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "Common sources of sepsis",
          "answer": "Lungs (pneumonia), urine, abdomen, skin and soft tissue.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "Airborne precautions",
          "answer": "Tuberculosis, measles, chickenpox: N95 or better; mask the patient.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "C. difficile hand hygiene",
          "answer": "Soap and water: alcohol rub doesn't kill the spores.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "Meningococcal disease",
          "answer": "Fever, stiff neck, headache, confusion, photophobia, non-blanching rash. Droplet precautions.",
          "category": "Infectious Disease & Sepsis"
        },
        {
          "question": "EMS care in sepsis",
          "answer": "Screen (NEWS2, qSOFA, judgement), oxygen to 94–98%, IV fluids per protocol, monitor, pre-alert, rapid transport.",
          "category": "Infectious Disease & Sepsis"
        }
      ],
      "critical": [
        {
          "id": "crit_5_9_1",
          "scenario": "A 68-year-old with COPD and diabetes: green sputum for 3 days, confused for 6 hours. HR 118, BP 104/70, RR 26, SpO₂ 89%, temperature 39.4 °C, right basal crackles.",
          "question": "Diagnosis and priority?",
          "options": [
            {
              "t": "Pneumonia with sepsis: oxygen to target, fluids per protocol, monitor closely, pre-alert, rapid transport",
              "f": "Correct."
            },
            {
              "t": "COPD exacerbation only: nebulizer",
              "f": "Fever, focal crackles and confusion point to pneumonia with sepsis."
            },
            {
              "t": "Dementia: routine transport",
              "f": "This confusion is new."
            },
            {
              "t": "Withhold oxygen because of COPD",
              "f": "Titrate it; don't withhold."
            }
          ],
          "correct": 0,
          "explanation": "A sepsis pre-alert lets the hospital start antibiotics early.",
          "kpi": "Recognises sepsis using qSOFA in a patient with pneumonia"
        },
        {
          "id": "crit_5_9_2",
          "scenario": "A 19-year-old student: severe headache, fever 40.1 °C, vomiting, stiff neck, lethargic. Purple non-blanching spots on her trunk and legs.",
          "question": "Diagnosis and precautions?",
          "options": [
            {
              "t": "Meningococcal meningitis and sepsis: droplet precautions (mask her and yourself), oxygen, rapid transport, pre-alert",
              "f": "Correct."
            },
            {
              "t": "Viral meningitis: routine transport",
              "f": "A non-blanching rash means meningococcal disease until proven otherwise."
            },
            {
              "t": "No precautions needed",
              "f": "Droplet precautions."
            },
            {
              "t": "Airborne N95 only",
              "f": "Droplet is the requirement; an N95 also protects."
            }
          ],
          "correct": 0,
          "explanation": "Exposed crew may need prophylactic antibiotics.",
          "kpi": "Identifies meningococcal meningitis and applies appropriate droplet precautions"
        },
        {
          "id": "crit_5_9_3",
          "scenario": "At a shelter, a 55-year-old has coughed for 6 weeks with night sweats, weight loss and blood-streaked sputum. Temperature 38.5 °C, SpO₂ 92%.",
          "question": "Likely diagnosis and precautions?",
          "options": [
            {
              "t": "Active tuberculosis: N95 for you, surgical mask on the patient, oxygen to target, fresh-air ventilation, pre-alert for isolation",
              "f": "Correct."
            },
            {
              "t": "Pneumonia: standard precautions only",
              "f": "This history is TB until proven otherwise."
            },
            {
              "t": "Droplet precautions only",
              "f": "TB is airborne."
            },
            {
              "t": "Refuse transport",
              "f": "Protect yourself and transport."
            }
          ],
          "correct": 0,
          "explanation": "Exposed contacts may need screening.",
          "kpi": "Recognises tuberculosis and applies appropriate airborne precautions"
        }
      ]
    },
    {
      "id": "c5s10",
      "shortTitle": "5.10 Behavioral & Psychiatric",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Behavioral & Psychiatric Emergencies",
        "lead": "Never assume behaviour is \"just psychiatric\": check the glucose, oxygen and temperature first. Keep yourself safe, talk before you touch, and never restrain anyone face down. Ask directly about suicide; asking doesn't plant the idea.",
        "sections": [
          {
            "type": "list",
            "title": "Rule out the medical causes",
            "icon": "stethoscope",
            "items": [
              "Hypoglycemia, hypoxia",
              "Head injury, stroke, postictal state",
              "Intoxication or withdrawal",
              "Infection, sepsis, hyperthermia",
              "Check glucose, SpO₂ and temperature on everyone"
            ]
          },
          {
            "type": "steps",
            "title": "The agitated patient",
            "icon": "shield",
            "steps": [
              {
                "title": "Scene safety",
                "text": "Police if there's a weapon or violence; keep an exit."
              },
              {
                "title": "Talk first",
                "text": "One calm speaker, space, listen, acknowledge feelings, offer choices."
              },
              {
                "title": "Hyperactive delirium?",
                "text": "Hot, sweating, very strong, stripping clothes, fast pulse: a medical emergency with risk of sudden death."
              },
              {
                "title": "Restraint only if needed",
                "text": "Minimal; never prone or with weight on the back or neck."
              },
              {
                "title": "Sedation per protocol",
                "text": "Ketamine or midazolam.",
                "level": "ALS"
              },
              {
                "title": "Monitor continuously",
                "text": "SpO₂, EtCO₂, breathing; cool if hot."
              }
            ]
          },
          {
            "type": "groups",
            "title": "Suicide risk",
            "icon": "hand-heart",
            "groups": [
              {
                "title": "Ask directly",
                "items": [
                  "\"Are you thinking about killing yourself?\"",
                  "Plan, means, intent, timing"
                ]
              },
              {
                "title": "Higher risk",
                "items": [
                  "Previous attempt (the strongest predictor)",
                  "Access to lethal means; isolation; recent loss"
                ]
              },
              {
                "title": "Do",
                "items": [
                  "Never leave them alone",
                  "Remove means (with police if needed)",
                  "Record their exact words"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Other situations",
            "icon": "message-circle-question",
            "items": [
              "Psychosis: calm, don't argue with or reinforce delusions, keep distance and an exit",
              "Panic attack is a diagnosis of exclusion: PE, ACS, asthma, anaphylaxis, hypoglycemia first; never a paper bag",
              "Involuntary holds: danger to self, danger to others, or unable to care for self; rules vary by jurisdiction"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Assess",
                "items": [
                  {
                    "label": "GCS calculator",
                    "sub": "Document level of consciousness",
                    "href": "../pages/GCS.html",
                    "icon": "brain"
                  },
                  {
                    "label": "Medical assessment",
                    "sub": "Look for the medical cause",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Agitated man shouting at unseen people, sweating, HR 124, hot, stripping off in the cold; glucose and SpO₂ normal. Highest priority?",
          "options": [
            "Hyperactive delirium with possible stimulant use: medical emergency – cool, de-escalate, rapid transport",
            "Schizophrenia: psychiatric transport",
            "Hypoglycemia despite the reading",
            "Panic attack: reassure"
          ],
          "correct": 0,
          "explanation": "It can progress to sudden cardiac arrest."
        },
        {
          "q": "A 22-year-old has chest tightness, palpitations, tingling and fear of dying during an exam. Next step?",
          "options": [
            "Rule out PE, ACS, asthma and anaphylaxis, then calm reassurance and slow breathing",
            "Paper bag breathing",
            "Non-rebreather for presumed hypoxia",
            "Lights and sirens for presumed PE"
          ],
          "correct": 0,
          "explanation": "Panic is a diagnosis of exclusion."
        },
        {
          "q": "Police have a sweating, struggling methamphetamine user handcuffed face down. Most important action?",
          "options": [
            "Get him onto his side now and monitor breathing and SpO₂",
            "Leave him prone: he's still fighting",
            "Sit on his back to calm him",
            "Cold packs only"
          ],
          "correct": 0,
          "explanation": "Prone restraint can cause positional asphyxia and sudden death."
        },
        {
          "q": "First check in any patient with abnormal behaviour:",
          "options": [
            "Glucose, SpO₂ and temperature",
            "Psychiatric history only",
            "Their insurance",
            "Whether they are known to police"
          ],
          "correct": 0,
          "explanation": "Medical causes first."
        },
        {
          "q": "Strongest predictor of completed suicide:",
          "options": [
            "A previous attempt",
            "Being female",
            "Young age",
            "Living with family"
          ],
          "correct": 0,
          "explanation": "Plan and access to means add risk."
        },
        {
          "q": "Asking directly \"Are you thinking about killing yourself?\":",
          "options": [
            "Is recommended and doesn't plant the idea",
            "Increases suicide risk",
            "Is illegal",
            "Should be avoided"
          ],
          "correct": 0,
          "explanation": "Then ask about plan, means and intent."
        },
        {
          "q": "A patient insists the TV is controlling him. You should:",
          "options": [
            "Stay calm, acknowledge his fear, not argue or agree",
            "Argue the delusion is false",
            "Agree with him",
            "Restrain him immediately"
          ],
          "correct": 0,
          "explanation": "Keep distance and an exit."
        },
        {
          "q": "Positioning for a restrained patient:",
          "options": [
            "Never prone; on the side or seated, monitored",
            "Prone with weight on the back",
            "Hog-tied",
            "Face down on the stretcher"
          ],
          "correct": 0,
          "explanation": "Continuous SpO₂ and EtCO₂ after sedation."
        },
        {
          "q": "Grounds for an involuntary hold generally include:",
          "options": [
            "Danger to self, to others, or unable to care for self",
            "Refusing treatment for a minor injury",
            "Being rude",
            "Intoxication alone"
          ],
          "correct": 0,
          "explanation": "Rules vary by jurisdiction."
        },
        {
          "q": "The term \"excited delirium\":",
          "options": [
            "Is no longer used; say hyperactive delirium with severe agitation",
            "Is a psychiatric diagnosis",
            "Means a calm patient",
            "Is the preferred term"
          ],
          "correct": 0,
          "explanation": "Treat it as a medical emergency."
        }
      ],
      "flashcards": [
        {
          "question": "Medical causes to rule out first",
          "answer": "Hypoglycemia, hypoxia, intoxication or withdrawal, head injury, infection or sepsis, stroke, postictal state, hyperthermia.",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Hyperactive delirium with severe agitation",
          "answer": "Agitation, hyperthermia, sweating, tachycardia, unusual strength: a medical emergency that can cause sudden death. (\"Excited delirium\" is no longer used.)",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Restraint safety",
          "answer": "Never prone or with weight on the back or neck. Side or seated; monitor breathing, SpO₂ and EtCO₂ continuously.",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Assessing suicide risk",
          "answer": "Ask directly; plan, means, intent, timing; previous attempts, isolation, recent loss.",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Approaching psychosis",
          "answer": "Calm and respectful; acknowledge feelings; don't argue with or reinforce delusions; keep distance and an exit.",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Panic attack or emergency?",
          "answer": "Panic is a diagnosis of exclusion: rule out PE, ACS, asthma, anaphylaxis, hypoglycemia.",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Verbal de-escalation",
          "answer": "One calm speaker, space, listen, acknowledge feelings, offer choices, keep an exit.",
          "category": "Behavioral & Psychiatric"
        },
        {
          "question": "Involuntary holds",
          "answer": "Danger to self, danger to others, or unable to care for self; criteria vary by jurisdiction.",
          "category": "Behavioral & Psychiatric"
        }
      ],
      "critical": [
        {
          "id": "crit_5_10_1",
          "scenario": "A man with paranoid schizophrenia off his medication is shouting that \"the government watches me through the lights\" in a crowded community centre. The manager asks you to calm him down.",
          "question": "Safest initial approach?",
          "options": [
            {
              "t": "Clear the room, keep a safe distance with an exit, one calm speaker, acknowledge his fear without challenging the delusion, offer choices; police as backup",
              "f": "Correct."
            },
            {
              "t": "Approach together and tell him to leave or police will come",
              "f": "Confrontation escalates."
            },
            {
              "t": "Argue that nobody is watching him",
              "f": "Arguing with delusions doesn't work."
            },
            {
              "t": "Restrain him immediately",
              "f": "Talk first."
            }
          ],
          "correct": 0,
          "explanation": "\"I can see you're scared. No one here wants to hurt you.\"",
          "kpi": "Applies de-escalation principles in a patient with paranoid psychosis"
        },
        {
          "id": "crit_5_10_2",
          "scenario": "A 55-year-old widow living alone says she can't go on and has saved her BP pills to take at once; 30 tablets are in her drawer. She's willing to go to hospital.",
          "question": "Priorities?",
          "options": [
            {
              "t": "High risk: never leave her alone, remove the pills with her permission, constant observation, record her exact words, transport",
              "f": "Correct."
            },
            {
              "t": "She's voluntary, so no further action",
              "f": "Plan and means make her high risk."
            },
            {
              "t": "Leave the pills: they're hers",
              "f": "Remove the means."
            },
            {
              "t": "Let her pack alone while you wait outside",
              "f": "Never leave her alone."
            }
          ],
          "correct": 0,
          "explanation": "With her consent, involve a trusted contact.",
          "kpi": "Recognises high suicide risk and implements safety precautions including constant observation and means removal"
        },
        {
          "id": "crit_5_10_3",
          "scenario": "A man with a seizure-disorder bracelet is confused in a parking lot: pupils 1–2 mm, HR 54, RR 8 and shallow, SpO₂ 88%. An unidentified pill lies nearby.",
          "question": "Priority?",
          "options": [
            {
              "t": "Treat the opioid toxidrome: open the airway, ventilate with a BVM and oxygen, naloxone while ventilating, bring the pill",
              "f": "Correct."
            },
            {
              "t": "Postictal state: oxygen and routine transport",
              "f": "Pinpoint pupils and RR 8 point to opioids."
            },
            {
              "t": "Psychiatric: calm him down",
              "f": "He's hypoventilating."
            },
            {
              "t": "Recovery position and wait",
              "f": "RR 8 with SpO₂ 88% needs ventilation."
            }
          ],
          "correct": 0,
          "explanation": "Treat what you see, not just the history.",
          "kpi": "Prioritises presenting toxidrome over medical history when managing altered mental status"
        }
      ]
    },
    {
      "id": "c5s11",
      "shortTitle": "5.11 Pain Management",
      "guide": {
        "group": "c5",
        "groupLabel": "Chapter 5 · Medical Emergencies",
        "title": "Pain Management",
        "lead": "Pain relief is part of good care, not an extra. Measure pain with a scale that fits the patient, use the splint and cold pack before and alongside drugs, reassess after every intervention and write it down. Children, older adults and people with dementia are the most often undertreated.",
        "sections": [
          {
            "type": "table",
            "title": "Choose the scale",
            "icon": "ruler",
            "columns": [
              "Patient",
              "Scale"
            ],
            "rows": [
              [
                "Adults and older children who can rate it",
                "Numeric 0–10: mild 1–3, moderate 4–6, severe 7–10"
              ],
              [
                "Children 3 years and older",
                "Wong-Baker FACES"
              ],
              [
                "Children 2 months to 7 years, non-verbal patients",
                "FLACC: face, legs, activity, cry, consolability (each 0–2)"
              ]
            ],
            "notes": [
              "A change of 2 points or more is meaningful.",
              "Reassess after every intervention."
            ]
          },
          {
            "type": "list",
            "title": "Without drugs",
            "icon": "hand",
            "items": [
              "Splint the injury; support in position of comfort",
              "Cold pack wrapped in cloth",
              "Reassurance, distraction (toys, videos for children)",
              "Gentle handling and a smooth ride"
            ]
          },
          {
            "type": "doses",
            "title": "Drugs (per protocol)",
            "icon": "pill",
            "rows": [
              {
                "drug": "Paracetamol",
                "dose": "1 g (15 mg/kg child)",
                "note": "Oral or IV"
              },
              {
                "drug": "Ibuprofen",
                "dose": "400 mg (10 mg/kg child)",
                "note": "Oral; avoid in kidney disease, bleeding"
              },
              {
                "drug": "Methoxyflurane",
                "dose": "3 mL inhaled",
                "note": "Maximum 6 mL per day; self-administered"
              },
              {
                "drug": "Nitrous oxide",
                "dose": "50:50, self-administered",
                "note": "Not for pneumothorax, bowel obstruction, decompression illness"
              },
              {
                "drug": "Fentanyl",
                "dose": "1 mcg/kg IV or intranasal",
                "note": "1.5 mcg/kg intranasal in children",
                "level": "ALS"
              },
              {
                "drug": "Morphine",
                "dose": "0.1 mg/kg IV",
                "level": "ALS"
              },
              {
                "drug": "Ketamine",
                "dose": "0.1–0.3 mg/kg IV",
                "note": "Analgesic dose",
                "level": "ALS"
              }
            ]
          },
          {
            "type": "groups",
            "title": "Safety",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Opioids",
                "items": [
                  "Monitor respiratory rate, SpO₂, EtCO₂ and sedation",
                  "Naloxone ready"
                ]
              },
              {
                "title": "Fractures",
                "items": [
                  "Mid-shaft femur: traction splint helps pain",
                  "Hip fracture: padded immobilisation (pillows, vacuum mattress, scoop); no traction splint"
                ]
              },
              {
                "title": "Document",
                "items": [
                  "Scale, scores, drug, dose, route, time, reassessment"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Dose",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Weight-based analgesia",
                    "href": "../pages/drug-calculator.html",
                    "icon": "scale"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Analgesics",
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
          "q": "A 6-year-old with a forearm fracture can't rate pain in numbers. Best scale?",
          "options": [
            "Wong-Baker FACES",
            "Numeric 0–10",
            "FLACC",
            "Adult scale via the parent"
          ],
          "correct": 0,
          "explanation": "FACES works from 3 years; FLACC is for those who can't self-report."
        },
        {
          "q": "Pain falls from 8 to 5 after splinting. This means:",
          "options": [
            "A meaningful improvement: the splint is working",
            "The splint is wrong",
            "Remove the splint",
            "The patient is exaggerating"
          ],
          "correct": 0,
          "explanation": "2 points or more is meaningful."
        },
        {
          "q": "Who can have nitrous oxide?",
          "options": [
            "An alert woman in labour who can hold the mouthpiece",
            "A stab wound with pneumothorax",
            "A confused head-injured patient",
            "A child who can't hold the mask"
          ],
          "correct": 0,
          "explanation": "It expands gas pockets and needs self-administration."
        },
        {
          "q": "Hip fracture in an 82-year-old. Immobilise with:",
          "options": [
            "Padded immobilisation: pillows, vacuum mattress or scoop",
            "A traction splint",
            "Nothing",
            "A walking frame"
          ],
          "correct": 0,
          "explanation": "Traction splints are for mid-shaft femur fractures."
        },
        {
          "q": "FLACC scores:",
          "options": [
            "Face, legs, activity, cry, consolability",
            "Fever, lungs, airway, circulation, consciousness",
            "Fracture, laceration, abrasion, contusion, crush",
            "Pupils only"
          ],
          "correct": 0,
          "explanation": "Each 0–2, total 0–10."
        },
        {
          "q": "Intranasal fentanyl in children:",
          "options": [
            "1.5 mcg/kg",
            "15 mcg/kg",
            "0.1 mcg/kg",
            "1.5 mg/kg"
          ],
          "correct": 0,
          "explanation": "Adults 1 mcg/kg IV or intranasal."
        },
        {
          "q": "Methoxyflurane maximum:",
          "options": [
            "6 mL per day",
            "60 mL per day",
            "No limit",
            "1 mL per day"
          ],
          "correct": 0,
          "explanation": "3 mL per inhaler."
        },
        {
          "q": "Before giving an opioid, have ready:",
          "options": [
            "Naloxone and monitoring",
            "Glucagon",
            "Adenosine",
            "Nothing"
          ],
          "correct": 0,
          "explanation": "Watch breathing, SpO₂, EtCO₂ and sedation."
        },
        {
          "q": "Ketamine analgesic dose (ALS):",
          "options": [
            "0.1–0.3 mg/kg IV",
            "1–2 mg/kg IV",
            "10 mg/kg IM",
            "0.01 mg/kg"
          ],
          "correct": 0,
          "explanation": "Higher doses sedate."
        },
        {
          "q": "Who is most often undertreated for pain?",
          "options": [
            "Children, older adults and people with dementia",
            "Young men",
            "Athletes",
            "Nobody"
          ],
          "correct": 0,
          "explanation": "Use observational scales when needed."
        }
      ],
      "flashcards": [
        {
          "question": "Numeric rating scale",
          "answer": "0–10: mild 1–3, moderate 4–6, severe 7–10. A change of 2 points or more is meaningful.",
          "category": "Pain Management"
        },
        {
          "question": "Wong-Baker FACES",
          "answer": "Faces scale for children 3 years and older, or limited language: the patient points to a face.",
          "category": "Pain Management"
        },
        {
          "question": "FLACC",
          "answer": "Face, legs, activity, cry, consolability, each 0–2: for children 2 months to 7 years and non-verbal patients.",
          "category": "Pain Management"
        },
        {
          "question": "Non-drug pain relief",
          "answer": "Splint, cold pack wrapped in cloth, position of comfort, reassurance, distraction, gentle handling.",
          "category": "Pain Management"
        },
        {
          "question": "Methoxyflurane",
          "answer": "Self-administered inhaled analgesic: 3 mL, maximum 6 mL per day. Not with kidney impairment, malignant hyperthermia history or reduced consciousness.",
          "category": "Pain Management"
        },
        {
          "question": "Nitrous oxide contraindications",
          "answer": "Pneumothorax, bowel obstruction, decompression illness, head injury with reduced consciousness, inability to self-administer.",
          "category": "Pain Management"
        },
        {
          "question": "Barriers to good analgesia",
          "answer": "Undertreatment of children, older adults, people with dementia and minority groups; bias; language barriers; protocol limits.",
          "category": "Pain Management"
        },
        {
          "question": "Documenting analgesia",
          "answer": "Scale, scores before and after, drug, dose, route, time, side effects, response.",
          "category": "Pain Management"
        }
      ],
      "critical": [
        {
          "id": "crit_5_11_1",
          "scenario": "A 4-year-old fell from the monkey bars; her forearm is angulated and she won't let anyone touch it. Her mother asks you to do something for the pain.",
          "question": "Assessment and management?",
          "options": [
            {
              "t": "FACES score, distraction and reassurance, well-padded splint with gentle handling, wrapped cold pack, analgesia per protocol, reassess with FACES",
              "f": "Correct."
            },
            {
              "t": "Too young to assess: splint fast and go",
              "f": "Children from 3 years can use FACES."
            },
            {
              "t": "No analgesia for children",
              "f": "Children are often undertreated."
            },
            {
              "t": "Straighten the arm first",
              "f": "Splint in the position found unless the circulation is compromised."
            }
          ],
          "correct": 0,
          "explanation": "Intranasal fentanyl 1.5 mcg/kg is one option per protocol.",
          "kpi": "Appropriate paediatric pain assessment using age-validated tool with multi-modal management"
        },
        {
          "id": "crit_5_11_2",
          "scenario": "An 82-year-old with dementia fell: right leg shortened and externally rotated, moaning and flinching when anyone approaches. She can't use a number scale.",
          "question": "Best pain approach?",
          "options": [
            {
              "t": "FLACC score, padded immobilisation (pillows, vacuum mattress, scoop), cold pack, gentle handling, analgesia per protocol, reassess FLACC",
              "f": "Correct."
            },
            {
              "t": "Traction splint",
              "f": "Not for hip fractures."
            },
            {
              "t": "No pain score, so no analgesia",
              "f": "Use an observational scale."
            },
            {
              "t": "Walk her to the stretcher",
              "f": "Don't weight-bear a suspected fracture."
            }
          ],
          "correct": 0,
          "explanation": "People with dementia are often undertreated; FLACC lets you measure and reassess.",
          "kpi": "Uses FLACC scale for pain assessment in a non-verbal elderly patient with dementia"
        },
        {
          "id": "crit_5_11_3",
          "scenario": "A 28-year-old with an isolated closed mid-shaft femur fracture, alert, pain 9/10. After several breaths of methoxyflurane his pain is 6/10. He asks to use it more.",
          "question": "Next step?",
          "options": [
            {
              "t": "Let him keep self-administering (up to the daily maximum), apply a traction splint, cold pack, reassess and document",
              "f": "Correct."
            },
            {
              "t": "Take the inhaler away: it has done all it can",
              "f": "It's self-titrated."
            },
            {
              "t": "No splint until hospital",
              "f": "A traction splint is one of the best pain treatments here."
            },
            {
              "t": "Give methoxyflurane and nitrous oxide together, unmonitored",
              "f": "Reassess and monitor."
            }
          ],
          "correct": 0,
          "explanation": "Combining drugs and splinting works better than either alone; ALS can add IV analgesia.",
          "kpi": "Combines pharmacological and non-pharmacological interventions for multi-modal pain management"
        }
      ]
    }
  ]
};
