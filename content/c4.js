/* ========== Chapter 4 – Cardiovascular & Resuscitation ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c4.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c4",
  "title": "Cardiovascular & Resuscitation",
  "shortTitle": "4. Cardiovascular & Resuscitation",
  "sections": [
    {
      "id": "c4s1",
      "shortTitle": "4.1 Cardiac Anatomy & Physiology",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Cardiac Anatomy & Physiology",
        "lead": "You don't need a textbook heart in the field, just enough to predict trouble. Which artery feeds which wall tells you what an MI will do. Which pacemaker is firing tells you how slow the heart can go. And cardiac output = rate × volume tells you why both too fast and too slow can cause shock.",
        "sections": [
          {
            "type": "table",
            "title": "Four chambers, four valves",
            "icon": "heart",
            "columns": [
              "Chamber",
              "Gets blood from",
              "Sends it through",
              "To"
            ],
            "rows": [
              [
                "Right atrium",
                "Venae cavae",
                "Tricuspid valve",
                "Right ventricle"
              ],
              [
                "Right ventricle",
                "Right atrium",
                "Pulmonic valve",
                "Lungs"
              ],
              [
                "Left atrium",
                "Pulmonary veins",
                "Mitral valve",
                "Left ventricle"
              ],
              [
                "Left ventricle (thickest wall)",
                "Left atrium",
                "Aortic valve",
                "Whole body"
              ]
            ],
            "notes": [
              "S1 (\"lub\") = mitral and tricuspid closing. S2 (\"dub\") = aortic and pulmonic closing.",
              "The coronary arteries fill mainly in diastole, so a very fast rate can starve the heart muscle."
            ]
          },
          {
            "type": "table",
            "title": "Which artery, which wall, what to expect",
            "icon": "target",
            "columns": [
              "Artery",
              "Feeds",
              "When it blocks, expect"
            ],
            "rows": [
              [
                "Left anterior descending (LAD)",
                "Anterior wall and septum",
                "Big MI, pump failure, pulmonary edema, cardiogenic shock"
              ],
              [
                "Circumflex",
                "Lateral wall",
                "Lateral ST elevation; can be electrically quiet"
              ],
              [
                "Right coronary (RCA)",
                "Right ventricle, inferior wall, and in most people the SA and AV nodes",
                "Bradycardia, heart block, RV infarction with low BP"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Pacemakers: who takes over",
            "icon": "zap",
            "columns": [
              "Site",
              "Rate",
              "QRS"
            ],
            "rows": [
              [
                "SA node",
                "60–100/min",
                "Narrow"
              ],
              [
                "AV junction (escape)",
                "40–60/min",
                "Narrow"
              ],
              [
                "Ventricles (escape)",
                "20–40/min",
                "Wide"
              ]
            ],
            "notes": [
              "The AV node delay lets the atria empty first (atrial kick).",
              "The slower and wider the escape, the lower it sits and the less reliable it is."
            ]
          },
          {
            "type": "groups",
            "title": "Cardiac output = rate × stroke volume",
            "icon": "activity",
            "groups": [
              {
                "title": "Rate problems",
                "items": [
                  "Too slow: not enough beats (heart block)",
                  "Too fast: no time to fill (rapid VT, SVT)"
                ]
              },
              {
                "title": "Volume problems",
                "items": [
                  "Preload low: bleeding, dehydration, nitrates in RV infarction",
                  "Contractility low: MI, cardiomyopathy",
                  "Afterload high: severe hypertension"
                ]
              },
              {
                "title": "Nerves",
                "items": [
                  "Sympathetic (beta-1): faster, stronger, quicker conduction",
                  "Vagus: slower"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "See the pacemakers",
            "icon": "monitor",
            "groups": [
              {
                "title": "Rhythms",
                "items": [
                  {
                    "ecg": "nsr",
                    "label": "Sinus rhythm",
                    "sub": "SA node, 60–100/min"
                  },
                  {
                    "ecg": "junctional",
                    "label": "Junctional escape",
                    "sub": "AV junction, narrow QRS"
                  },
                  {
                    "ecg": "ivr",
                    "label": "Idioventricular escape",
                    "sub": "Ventricles, wide and slow"
                  },
                  {
                    "ecg": "chb",
                    "label": "Complete heart block",
                    "sub": "Atria and ventricles each on their own"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Which valve separates the left atrium from the left ventricle?",
          "options": [
            "Mitral valve",
            "Tricuspid valve",
            "Pulmonic valve",
            "Aortic valve"
          ],
          "correct": 0,
          "explanation": "Tricuspid on the right, mitral on the left."
        },
        {
          "q": "Which part of the conduction system is the natural pacemaker, firing at 60–100/min?",
          "options": [
            "SA node",
            "AV node",
            "Bundle of His",
            "Purkinje fibres"
          ],
          "correct": 0,
          "explanation": "If it fails, the AV junction (40–60/min) or the ventricles (20–40/min) take over."
        },
        {
          "q": "What does S1 (\"lub\") represent?",
          "options": [
            "The mitral and tricuspid valves closing",
            "The aortic and pulmonic valves closing",
            "Blood flowing in the coronary arteries",
            "The atria contracting"
          ],
          "correct": 0,
          "explanation": "S2 is the semilunar valves closing."
        },
        {
          "q": "Which chamber has the thickest wall?",
          "options": [
            "Left ventricle",
            "Right ventricle",
            "Left atrium",
            "Right atrium"
          ],
          "correct": 0,
          "explanation": "It pumps against systemic resistance."
        },
        {
          "q": "ST elevation in the anterior leads points to a blocked:",
          "options": [
            "Left anterior descending artery",
            "Right coronary artery",
            "Circumflex artery",
            "Pulmonary artery"
          ],
          "correct": 0,
          "explanation": "The LAD feeds the anterior wall and septum."
        },
        {
          "q": "Why does an inferior MI often cause bradycardia or heart block?",
          "options": [
            "The right coronary artery usually supplies the SA and AV nodes",
            "The LAD supplies the AV node",
            "Inferior MIs always cause shock",
            "Pain triggers the vagus nerve in every MI"
          ],
          "correct": 0,
          "explanation": "Watch the rate and prepare to pace."
        },
        {
          "q": "A ventricular escape rhythm usually runs at:",
          "options": [
            "20–40/min",
            "40–60/min",
            "60–100/min",
            "100–150/min"
          ],
          "correct": 0,
          "explanation": "Wide QRS, slow and unreliable."
        },
        {
          "q": "Cardiac output equals:",
          "options": [
            "Heart rate × stroke volume",
            "Blood pressure × heart rate",
            "Stroke volume × vascular resistance",
            "Preload − afterload"
          ],
          "correct": 0,
          "explanation": "BP = cardiac output × systemic vascular resistance."
        },
        {
          "q": "Why can a very fast heart rate cause chest pain even with normal arteries?",
          "options": [
            "The coronaries fill in diastole, which gets too short",
            "Fast rates raise the oxygen in the blood",
            "The valves stop closing",
            "The SA node runs out of energy"
          ],
          "correct": 0,
          "explanation": "Less filling time for both the ventricles and the coronaries."
        },
        {
          "q": "Sympathetic (beta-1) stimulation of the heart:",
          "options": [
            "Increases rate, contractility and conduction speed",
            "Slows the rate",
            "Blocks the AV node",
            "Has no effect on contractility"
          ],
          "correct": 0,
          "explanation": "The vagus nerve does the opposite to the rate."
        }
      ],
      "flashcards": [
        {
          "question": "Four chambers; thickest wall?",
          "answer": "Right atrium, right ventricle, left atrium, left ventricle. The left ventricle is thickest: it pumps against systemic resistance.",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "AV valves vs semilunar valves",
          "answer": "AV: tricuspid (right) and mitral (left). Semilunar: pulmonic (right) and aortic (left).",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Three main coronary arteries",
          "answer": "LAD: anterior wall and septum. Circumflex: lateral wall. Right coronary: right ventricle, inferior wall, and in most people the SA and AV nodes.",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Blood flow through the heart",
          "answer": "Venae cavae → right atrium → tricuspid → right ventricle → pulmonic → lungs → pulmonary veins → left atrium → mitral → left ventricle → aortic valve → aorta.",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Systole vs diastole",
          "answer": "Systole: ventricles contract and eject. Diastole: ventricles relax and fill, and the coronary arteries fill.",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Conduction system, in order",
          "answer": "SA node (60–100/min) → AV node → bundle of His → bundle branches → Purkinje fibres. Escapes: junction 40–60/min, ventricles 20–40/min.",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Why the AV node delay matters",
          "answer": "It lets the atria empty into the ventricles before they contract (atrial kick).",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Sympathetic effect on the heart",
          "answer": "Via beta-1: faster rate, stronger contraction, quicker conduction.",
          "category": "Cardiac Anatomy & Physiology"
        },
        {
          "question": "Cardiac output",
          "answer": "Heart rate × stroke volume. Stroke volume depends on preload, contractility and afterload.",
          "category": "Cardiac Anatomy & Physiology"
        }
      ],
      "critical": [
        {
          "id": "crit_4_1_1",
          "scenario": "A 58-year-old has crushing chest pain for 45 minutes. BP 104/68, HR 118, SpO₂ 96%. The 12-lead shows ST elevation in V1–V4. He becomes short of breath and you hear crackles at both bases.",
          "question": "Which artery is blocked, and why the crackles?",
          "options": [
            {
              "t": "LAD: the anterior wall is failing, so blood backs up into the lungs",
              "f": "Correct. A large anterior MI causes acute pump failure."
            },
            {
              "t": "Right coronary: right ventricular failure",
              "f": "V1–V4 is the anterior wall; RV failure gives clear lungs and raised JVP."
            },
            {
              "t": "Circumflex: lateral wall",
              "f": "Lateral MI shows in I, aVL, V5–V6."
            },
            {
              "t": "Pneumonia, unrelated to the MI",
              "f": "New crackles during an anterior MI are pump failure until proven otherwise."
            }
          ],
          "correct": 0,
          "explanation": "Expect cardiogenic shock: pre-notify the PCI centre, sit him up and avoid large fluid boluses.",
          "kpi": "Correlates ECG territory with coronary anatomy and recognizes acute pump failure"
        },
        {
          "id": "crit_4_1_2",
          "scenario": "A 72-year-old fainted for 15 seconds. BP 102/64, HR 38, lightheaded. The monitor shows regular P waves that don't relate to the wide QRS complexes at 38/min.",
          "question": "What's happening in the conduction system?",
          "options": [
            {
              "t": "Complete heart block: nothing gets through the AV node, and a slow ventricular escape drives the heart",
              "f": "Correct. The wide QRS shows the escape sits low."
            },
            {
              "t": "Sinus bradycardia with first-degree block",
              "f": "In first-degree block every P wave is followed by a QRS."
            },
            {
              "t": "Atrial fibrillation with slow response",
              "f": "There are clear, regular P waves."
            },
            {
              "t": "Normal for her age",
              "f": "Syncope with a rate of 38 is not normal."
            }
          ],
          "correct": 0,
          "explanation": "Ventricular escapes (20–40/min) are slow and unreliable: prepare to pace and transport.",
          "kpi": "Recognizes complete heart block and its impact on cardiac output from conduction system dysfunction"
        },
        {
          "id": "crit_4_1_3",
          "scenario": "A 45-year-old with poorly controlled hypertension has sudden tearing chest pain through to his back. BP 188/104 right arm, 146/88 left arm. The left radial pulse is weaker. No STEMI on the 12-lead.",
          "question": "What does the arm difference suggest?",
          "options": [
            {
              "t": "Aortic dissection involving the arch branches",
              "f": "Correct. A difference above 20 mmHg or a pulse deficit supports it."
            },
            {
              "t": "Left main coronary occlusion",
              "f": "That doesn't cause a pressure difference between arms."
            },
            {
              "t": "A faulty BP cuff, so ignore it",
              "f": "Recheck, but a real difference is a red flag."
            },
            {
              "t": "Pulmonary embolism",
              "f": "PE doesn't cause unequal arm pressures."
            }
          ],
          "correct": 0,
          "explanation": "Withhold aspirin if dissection is suspected and transport fast to a centre with cardiothoracic surgery.",
          "kpi": "Recognizes aortic dissection anatomy and the significance of BP differential/pulse deficits"
        }
      ]
    },
    {
      "id": "c4s2",
      "shortTitle": "4.2 Chest Pain / Acute Coronary Syndrome",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Chest Pain & Acute Coronary Syndrome",
        "lead": "Time is muscle. Get a 12-lead in the first 10 minutes, give aspirin and treat the pain. If it's a STEMI, go straight to a PCI centre. Before nitrates, check the BP, the right ventricle and the bathroom cabinet.",
        "sections": [
          {
            "type": "steps",
            "title": "Chest pain: first 10 minutes",
            "icon": "timer",
            "steps": [
              {
                "title": "12-lead ECG",
                "text": "Within 10 minutes of reaching the patient; transmit and repeat if the pain changes."
              },
              {
                "title": "Aspirin",
                "text": "Non-enteric, chewed, unless truly allergic or actively bleeding.",
                "doses": [
                  {
                    "drug": "Aspirin",
                    "dose": "162–325 mg chewed",
                    "note": "Once"
                  }
                ]
              },
              {
                "title": "Oxygen only if needed",
                "text": "SpO₂ below 90% or short of breath. Routine oxygen doesn't help."
              },
              {
                "title": "Nitroglycerin for ongoing pain",
                "text": "Only after the checks below.",
                "doses": [
                  {
                    "drug": "Nitroglycerin",
                    "dose": "0.4 mg sublingual",
                    "note": "Every 5 minutes, up to 3 doses"
                  }
                ]
              },
              {
                "title": "Destination",
                "text": "STEMI: straight to a PCI-capable centre with pre-notification. Aim for first contact to device in 90 minutes or less."
              }
            ]
          },
          {
            "type": "criteria",
            "title": "Nitrates: check first",
            "icon": "triangle-alert",
            "include": [
              "Ongoing ischemic chest pain",
              "Systolic BP 90 mmHg or more",
              "IV access ready if your protocol requires it"
            ],
            "exclude": [
              "Systolic BP below 90 mmHg; heart rate below 50/min",
              "Inferior STEMI until V4R rules out RV infarction",
              "Sildenafil or vardenafil within 24 hours",
              "Tadalafil within 48 hours"
            ]
          },
          {
            "type": "groups",
            "title": "Not every ACS hurts",
            "icon": "eye",
            "groups": [
              {
                "title": "Think ACS without chest pain in",
                "items": [
                  "Women",
                  "Older adults",
                  "People with diabetes"
                ]
              },
              {
                "title": "They may report",
                "items": [
                  "Breathlessness, fatigue, nausea",
                  "Epigastric pain or \"indigestion\"",
                  "Jaw, arm or back pain; sweating"
                ]
              },
              {
                "title": "Other killers with chest pain",
                "items": [
                  "Aortic dissection, pulmonary embolism",
                  "Tension pneumothorax, tamponade",
                  "Esophageal rupture"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "Recognise it",
            "icon": "monitor",
            "groups": [
              {
                "title": "12-lead patterns",
                "items": [
                  {
                    "ecg": "stemiAnt",
                    "label": "Anterior STEMI",
                    "sub": "LAD: V1–V4",
                    "lead": "V3"
                  },
                  {
                    "ecg": "stemiInf",
                    "label": "Inferior STEMI",
                    "sub": "Right coronary: II, III, aVF",
                    "lead": "III"
                  },
                  {
                    "ecg": "stemiInfRv",
                    "label": "RV infarction",
                    "sub": "V4R: no nitrates",
                    "lead": "V4R"
                  },
                  {
                    "ecg": "nstemi",
                    "label": "NSTEMI pattern",
                    "sub": "ST depression: still ACS",
                    "lead": "V5"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "ACLS course",
                    "sub": "ACS algorithm and cases",
                    "href": "../pages/acls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Aspirin, nitroglycerin",
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
          "q": "Which best describes a STEMI?",
          "options": [
            "Complete coronary occlusion causing full-thickness injury",
            "Partial occlusion with reversible ischemia only",
            "Spasm without plaque rupture",
            "Demand ischemia without occlusion"
          ],
          "correct": 0,
          "explanation": "The ECG shows ST elevation."
        },
        {
          "q": "Aspirin for suspected ACS:",
          "options": [
            "162–325 mg chewed",
            "81 mg swallowed whole",
            "325 mg enteric-coated swallowed whole",
            "500 mg IV"
          ],
          "correct": 0,
          "explanation": "Non-enteric and chewed for fast absorption."
        },
        {
          "q": "Inferior STEMI. After nitroglycerin, BP falls from 128/78 to 72/40. Most likely cause?",
          "options": [
            "Right ventricular infarction: nitrates dropped the preload it depends on",
            "Allergy to nitroglycerin",
            "Nitrate-induced stroke",
            "Vasovagal reaction to the IV"
          ],
          "correct": 0,
          "explanation": "Record V4R before nitrates in inferior STEMI; give fluid for hypotension per protocol."
        },
        {
          "q": "When should the first 12-lead be done in chest pain?",
          "options": [
            "Within 10 minutes of reaching the patient",
            "Only at the hospital",
            "After 3 doses of nitroglycerin",
            "Only if the pain lasts over an hour"
          ],
          "correct": 0,
          "explanation": "Transmit it and pre-notify."
        },
        {
          "q": "Nitroglycerin dose for ischemic chest pain:",
          "options": [
            "0.4 mg sublingual every 5 minutes, up to 3 doses",
            "4 mg sublingual once",
            "0.4 mg every minute until pain-free",
            "1 mg IV push"
          ],
          "correct": 0,
          "explanation": "Check BP before each dose."
        },
        {
          "q": "A patient took tadalafil 30 hours ago. Nitroglycerin?",
          "options": [
            "No: tadalafil within 48 hours rules it out",
            "Yes: it's been more than 24 hours",
            "Yes, at half dose",
            "Only if BP is above 90 mmHg"
          ],
          "correct": 0,
          "explanation": "Sildenafil and vardenafil: 24 hours. Tadalafil: 48 hours."
        },
        {
          "q": "Oxygen in suspected ACS is indicated when:",
          "options": [
            "SpO₂ is below 90% or the patient is short of breath",
            "Always, at 15 L/min",
            "Never",
            "Only after aspirin"
          ],
          "correct": 0,
          "explanation": "Routine oxygen does not help patients with normal saturation."
        },
        {
          "q": "Best destination for a STEMI?",
          "options": [
            "A PCI-capable centre, with pre-notification",
            "The closest hospital, always",
            "A clinic for an outpatient stress test",
            "Any hospital with a CT scanner"
          ],
          "correct": 0,
          "explanation": "Target: first contact to device 90 minutes or less."
        },
        {
          "q": "Who is most likely to have ACS without chest pain?",
          "options": [
            "An older woman with diabetes",
            "A 25-year-old athlete",
            "A child",
            "A smoker with typical pressure pain"
          ],
          "correct": 0,
          "explanation": "Women, older adults and people with diabetes present atypically more often."
        },
        {
          "q": "Which systolic BP rules out nitroglycerin?",
          "options": [
            "Below 90 mmHg",
            "Below 140 mmHg",
            "Above 120 mmHg",
            "Above 160 mmHg"
          ],
          "correct": 0,
          "explanation": "Also heart rate below 50/min, RV infarction, or recent PDE-5 inhibitors."
        }
      ],
      "flashcards": [
        {
          "question": "The three acute coronary syndromes",
          "answer": "Unstable angina (no necrosis), NSTEMI (necrosis, no ST elevation), STEMI (complete occlusion, ST elevation).",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "Aspirin in ACS",
          "answer": "162–325 mg, non-enteric, chewed. It blocks platelet aggregation; chewing speeds absorption.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "Nitroglycerin: when not to give",
          "answer": "Systolic BP below 90 mmHg, heart rate below 50/min, suspected RV infarction, sildenafil or vardenafil within 24 hours, tadalafil within 48 hours.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "STEMI destination",
          "answer": "Straight to a PCI-capable centre with pre-notification; first contact to device 90 minutes or less.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "OPQRST",
          "answer": "Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "Why diabetics may have ACS without pain",
          "answer": "Nerve damage blunts cardiac pain; they present with breathlessness, nausea, fatigue or confusion.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "Non-modifiable risk factors",
          "answer": "Age (men 45 or older, women 55 or older), male sex, family history of premature coronary disease.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        },
        {
          "question": "Oxygen for every chest pain?",
          "answer": "No. Give it if SpO₂ is below 90% or the patient is short of breath.",
          "category": "Chest Pain / Acute Coronary Syndrome"
        }
      ],
      "critical": [
        {
          "id": "crit_4_2_1",
          "scenario": "A 58-year-old has \"an elephant on my chest\" radiating to the jaw, pale and sweaty. BP 142/88, HR 104, SpO₂ 97%. He takes tadalafil and took it yesterday.",
          "question": "Best sequence?",
          "options": [
            {
              "t": "Aspirin chewed, no nitroglycerin, no oxygen (saturation normal), 12-lead and PCI centre with pre-notification",
              "f": "Correct. Tadalafil within 48 hours rules out nitrates."
            },
            {
              "t": "Aspirin and nitroglycerin: the interaction is minor",
              "f": "It can cause severe, hard-to-treat hypotension."
            },
            {
              "t": "High-flow oxygen for all chest pain",
              "f": "Not needed with SpO₂ 97%."
            },
            {
              "t": "Closest hospital regardless of PCI",
              "f": "A likely STEMI should go to PCI."
            }
          ],
          "correct": 0,
          "explanation": "Aspirin is safe; the PDE-5 inhibitor only rules out the nitrate.",
          "kpi": "Applies contraindication knowledge for nitrate administration and prioritizes aspirin"
        },
        {
          "id": "crit_4_2_2",
          "scenario": "A 65-year-old woman with diabetes has had nausea, indigestion and unusual fatigue for 2 hours. No chest pain. BP 106/70, HR 108, cool and slightly sweaty.",
          "question": "Interpretation and plan?",
          "options": [
            {
              "t": "Possible atypical ACS: aspirin, 12-lead and emergency transport",
              "f": "Correct. No pain doesn't rule out ACS."
            },
            {
              "t": "No chest pain, so not cardiac: routine transport",
              "f": "Diabetes and female sex make painless ACS likelier."
            },
            {
              "t": "Viral illness: advise rest",
              "f": "Sweating and tachycardia with risk factors need a 12-lead."
            },
            {
              "t": "Give an antacid and reassess",
              "f": "Don't explain away \"indigestion\" in a high-risk patient."
            }
          ],
          "correct": 0,
          "explanation": "Women, older adults and people with diabetes often present without chest pain.",
          "kpi": "Recognizes atypical ACS presentation in high-risk populations (diabetics, women)"
        },
        {
          "id": "crit_4_2_3",
          "scenario": "A 52-year-old has ST elevation in V1–V4. A non-PCI hospital is 8 minutes away; a PCI centre is 28 minutes away. Your protocol allows bypass up to 30 minutes.",
          "question": "Destination?",
          "options": [
            {
              "t": "The PCI centre, pre-notified",
              "f": "Correct. Going straight to PCI beats a stop and transfer."
            },
            {
              "t": "The closer hospital: closer is always better",
              "f": "A transfer adds time to reperfusion."
            },
            {
              "t": "Treat on scene until the pain settles",
              "f": "Reperfusion is the treatment."
            },
            {
              "t": "Whichever the family prefers",
              "f": "Explain why the PCI centre is the right choice."
            }
          ],
          "correct": 0,
          "explanation": "First contact to device should be 90 minutes or less; a stop at a non-PCI hospital usually blows that target.",
          "kpi": "Applies STEMI destination protocols and understands the importance of primary PCI over secondary transfer"
        }
      ]
    },
    {
      "id": "c4s3",
      "shortTitle": "4.3 Heart Failure & Pulmonary Edema",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Heart Failure & Pulmonary Edema",
        "lead": "A drowning patient sitting bolt upright, with crackles, frothy sputum and a high BP, needs CPAP, nitrates and the seat back up, not a fluid bolus. Low BP changes everything: that's cardiogenic shock.",
        "sections": [
          {
            "type": "table",
            "title": "Left or right?",
            "icon": "heart",
            "columns": [
              "",
              "Left heart failure",
              "Right heart failure"
            ],
            "rows": [
              [
                "Backs up into",
                "Lungs",
                "Body"
              ],
              [
                "You see",
                "Breathlessness, orthopnea, night waking, crackles, pink frothy sputum",
                "Raised JVP, leg and sacral edema, big liver"
              ],
              [
                "Commonest cause",
                "MI, hypertension, valve disease",
                "Left heart failure; lung disease; PE"
              ]
            ]
          },
          {
            "type": "gate",
            "title": "Acute pulmonary edema",
            "icon": "wind",
            "question": "Is the systolic BP 90 mmHg or more?",
            "items": [
              "Sit them up, legs down",
              "Oxygen to SpO₂ 94–98%"
            ],
            "yes": "CPAP 5–10 cmH₂O, nitrates per protocol, diuretic per protocol, transport.",
            "no": "Cardiogenic shock: no nitrates, no CPAP. Assist ventilation if failing; vasopressors (ALS); PCI centre if STEMI."
          },
          {
            "type": "groups",
            "title": "Why did they decompensate?",
            "icon": "clipboard-list",
            "groups": [
              {
                "title": "Ask about",
                "items": [
                  "Stopped or missed medicines (water pills)",
                  "Salt and fluid binges",
                  "New chest pain (ischemia)"
                ]
              },
              {
                "title": "Look for",
                "items": [
                  "Fast atrial fibrillation",
                  "Infection or fever",
                  "Very high BP; kidney failure; PE"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Heart failure or COPD?",
            "icon": "stethoscope",
            "items": [
              "Wheeze can be \"cardiac asthma\" (swollen airway walls)",
              "Crackles, raised JVP, edema and orthopnea point to the heart",
              "CPAP helps both; don't delay it for nebulizers"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "See it",
                "items": [
                  {
                    "label": "Cheyne-Stokes breathing",
                    "sub": "Seen in severe heart failure",
                    "href": "../pages/respiratory-patterns.html?p=cheyneStokes",
                    "icon": "wind"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Nitroglycerin, furosemide",
                    "href": "../pages/med-index.html",
                    "icon": "pill"
                  }
                ]
              },
              {
                "title": "Common trigger",
                "items": [
                  {
                    "ecg": "afibRvr",
                    "label": "AF with rapid response",
                    "sub": "Loses atrial kick, shortens filling"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Most effective prehospital treatment for acute cardiogenic pulmonary edema with a good BP?",
          "options": [
            "CPAP",
            "High-flow oxygen by mask alone",
            "IV fluid bolus",
            "Albuterol nebulizer"
          ],
          "correct": 0,
          "explanation": "Plus upright position and nitrates per protocol."
        },
        {
          "q": "Raised JVP in suspected heart failure suggests:",
          "options": [
            "Right-sided failure and high venous pressure",
            "Left-sided failure only",
            "Dehydration",
            "Pneumothorax only"
          ],
          "correct": 0,
          "explanation": "Tension pneumothorax and tamponade also raise it, so look at the whole picture."
        },
        {
          "q": "Why sit a pulmonary edema patient upright?",
          "options": [
            "Less venous return and easier breathing",
            "To raise BP",
            "To help them sleep",
            "To prevent vomiting"
          ],
          "correct": 0,
          "explanation": "Lying flat makes the hypoxia worse."
        },
        {
          "q": "Which rules out CPAP?",
          "options": [
            "Systolic BP below 90 mmHg",
            "SpO₂ 88%",
            "Respiratory rate 30",
            "Crackles at both bases"
          ],
          "correct": 0,
          "explanation": "Also unresponsiveness, vomiting and suspected pneumothorax."
        },
        {
          "q": "Pink frothy sputum means:",
          "options": [
            "Severe pulmonary edema",
            "Pneumonia",
            "A nosebleed",
            "Normal secretions"
          ],
          "correct": 0,
          "explanation": "Fluid and blood in the alveoli."
        },
        {
          "q": "Peripheral edema and a big liver point to:",
          "options": [
            "Right heart failure",
            "Left heart failure only",
            "Asthma",
            "Hypovolemia"
          ],
          "correct": 0,
          "explanation": "Blood backs up into the body."
        },
        {
          "q": "Commonest trigger for decompensation?",
          "options": [
            "Stopping medicines or salt and fluid excess",
            "Exercise",
            "Cold weather",
            "Caffeine"
          ],
          "correct": 0,
          "explanation": "Also ischemia, AF, infection and very high BP."
        },
        {
          "q": "Nitroglycerin helps pulmonary edema mainly by:",
          "options": [
            "Reducing preload (venodilation)",
            "Raising heart rate",
            "Causing diuresis",
            "Bronchodilation"
          ],
          "correct": 0,
          "explanation": "Only with an adequate BP."
        },
        {
          "q": "Orthopnea is:",
          "options": [
            "Breathlessness lying flat",
            "Breathlessness on exertion only",
            "Fast breathing at rest",
            "Wheezing at night"
          ],
          "correct": 0,
          "explanation": "Ask how many pillows they sleep on."
        },
        {
          "q": "Typical CPAP starting pressure for pulmonary edema:",
          "options": [
            "5–10 cmH₂O",
            "20–25 cmH₂O",
            "1–2 cmH₂O",
            "30 cmH₂O"
          ],
          "correct": 0,
          "explanation": "Titrate per protocol and watch the BP."
        }
      ],
      "flashcards": [
        {
          "question": "Left vs right heart failure",
          "answer": "Left: backs up into the lungs (crackles, orthopnea, frothy sputum). Right: backs up into the body (raised JVP, edema, big liver).",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Signs of acute decompensated heart failure",
          "answer": "Breathlessness, orthopnea, night waking, raised JVP, edema, crackles, pink frothy sputum, sitting upright; high BP early, low BP ominous.",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Best prehospital treatment for pulmonary edema",
          "answer": "CPAP: splints the alveoli open, lowers preload and work of breathing (with an adequate BP).",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Why keep them upright?",
          "answer": "Less venous return and congestion, and better diaphragm movement. Lying flat worsens hypoxia.",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Triggers for decompensation",
          "answer": "Stopped medicines, salt or fluid excess, ischemia, arrhythmia (AF), infection, very high BP, kidney failure, PE.",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Nitroglycerin in pulmonary edema",
          "answer": "Venodilator: lowers preload and congestion. Only if systolic BP is 90 mmHg or more (or your protocol's threshold).",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Furosemide",
          "answer": "Loop diuretic: diuresis plus early venodilation; slower than CPAP and nitrates, so give per protocol.",
          "category": "Heart Failure & Pulmonary Edema"
        },
        {
          "question": "Pink frothy sputum",
          "answer": "Severe pulmonary edema: fluid and red cells in the alveoli. A late, ominous sign.",
          "category": "Heart Failure & Pulmonary Edema"
        }
      ],
      "critical": [
        {
          "id": "crit_4_3_1",
          "scenario": "A 78-year-old with heart failure ran out of her water pills 5 days ago. Tripoding, 2-word sentences. BP 168/100, HR 112, RR 32, SpO₂ 84%. Crackles halfway up, leg edema, raised JVP.",
          "question": "Cause and priority?",
          "options": [
            {
              "t": "Decompensated heart failure from missed medicines: sit up, CPAP, nitrates per protocol",
              "f": "Correct."
            },
            {
              "t": "Asthma: albuterol first",
              "f": "Crackles, JVP and edema point to the heart."
            },
            {
              "t": "Fluid bolus for the tachycardia",
              "f": "She's fluid overloaded."
            },
            {
              "t": "Lie her flat for transport",
              "f": "Lying flat worsens the hypoxia."
            }
          ],
          "correct": 0,
          "explanation": "CPAP improves oxygenation and reduces preload and work of breathing; her BP allows nitrates.",
          "kpi": "Recognizes ADHF from history and exam, initiates CPAP as priority intervention"
        },
        {
          "id": "crit_4_3_2",
          "scenario": "A 72-year-old with heart failure and COPD can't lie flat. Wheezes everywhere and fine crackles at the bases; mild JVP, ankle edema. BP 148/88, SpO₂ 89%.",
          "question": "How do you read this?",
          "options": [
            {
              "t": "Likely heart failure with \"cardiac asthma\": CPAP, adding a bronchodilator if wheeze persists",
              "f": "Correct. CPAP helps both conditions."
            },
            {
              "t": "COPD only: nebulizers and never CPAP",
              "f": "CPAP is used in COPD exacerbations too."
            },
            {
              "t": "Give a fluid bolus",
              "f": "Not with crackles and raised JVP."
            },
            {
              "t": "Wait for wheeze to settle before CPAP",
              "f": "Don't delay CPAP."
            }
          ],
          "correct": 0,
          "explanation": "Crackles, raised JVP, edema and orthopnea point to fluid overload even when wheeze is loud.",
          "kpi": "Differentiates ADHF from COPD exacerbation and applies CPAP appropriately"
        },
        {
          "id": "crit_4_3_3",
          "scenario": "On CPAP for pulmonary edema, a 68-year-old first improved. Now she's lethargic: BP 72/40, HR 56, shallow breathing, SpO₂ 89%, EtCO₂ falling.",
          "question": "What now?",
          "options": [
            {
              "t": "Cardiogenic shock and failing breathing: remove CPAP, ventilate with a BVM and oxygen, prepare for arrest",
              "f": "Correct."
            },
            {
              "t": "Turn the CPAP up",
              "f": "More pressure lowers venous return further."
            },
            {
              "t": "Give nitroglycerin",
              "f": "Never with this BP."
            },
            {
              "t": "Keep going: she's resting",
              "f": "Falling consciousness and EtCO₂ mean falling cardiac output."
            }
          ],
          "correct": 0,
          "explanation": "Falling EtCO₂ with hypotension means less blood reaching the lungs. Have the pads on and call for ALS (vasopressors).",
          "kpi": "Recognizes transition from ADHF to cardiogenic shock and initiates appropriate rescue ventilation"
        }
      ]
    },
    {
      "id": "c4s4",
      "shortTitle": "4.4 Hypertensive Emergencies",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Hypertensive Emergencies",
        "lead": "A high number alone isn't an emergency; damage to an organ is. Find the organ that's suffering and treat that. Don't chase the BP down in the field. Pregnancy, the aorta and the brain are the three you can't miss.",
        "sections": [
          {
            "type": "gate",
            "title": "Urgency or emergency?",
            "icon": "activity",
            "question": "Systolic above 180 and/or diastolic above 120 mmHg. Any acute organ damage?",
            "items": [
              "Brain: severe headache, confusion, seizures, stroke signs, vision loss",
              "Heart: chest pain, pulmonary edema",
              "Aorta: tearing pain to the back",
              "Pregnancy, or up to 6 weeks after delivery"
            ],
            "no": "Urgency: calm, recheck, transport for review. No field BP lowering.",
            "yes": "Emergency: treat the damaged organ, emergency transport to the right centre."
          },
          {
            "type": "table",
            "title": "Treat the organ, not the number",
            "icon": "target",
            "columns": [
              "Problem",
              "Do",
              "Don't"
            ],
            "rows": [
              [
                "ACS",
                "Aspirin, 12-lead, PCI centre",
                "Delay for BP"
              ],
              [
                "Pulmonary edema",
                "Sit up, CPAP, nitrates",
                "Lie flat; fluids"
              ],
              [
                "Stroke / bleed",
                "Stroke centre; glucose; airway",
                "Lower BP"
              ],
              [
                "Aortic dissection",
                "Rapid transport to cardiothoracic surgery",
                "Aspirin"
              ],
              [
                "Preeclampsia / eclampsia",
                "Left lateral, dim lights, seizure precautions; magnesium (ALS)",
                "Supine position"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Can't-miss patterns",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Aortic dissection",
                "items": [
                  "Sudden tearing pain to the back",
                  "Arm BP difference above 20 mmHg or a pulse deficit",
                  "Neuro deficits, fainting"
                ]
              },
              {
                "title": "Preeclampsia",
                "items": [
                  "BP 140/90 or more after 20 weeks; severe 160/110 or more",
                  "Headache, visual spots, right upper abdominal pain, edema",
                  "Eclampsia = seizures"
                ]
              },
              {
                "title": "Cushing's triad",
                "items": [
                  "High BP with widening pulse pressure",
                  "Bradycardia; irregular breathing",
                  "Raised intracranial pressure: don't lower BP"
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
                    "sub": "Track consciousness in a suspected bleed",
                    "href": "../pages/GCS.html",
                    "icon": "brain"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Magnesium sulfate, labetalol",
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
          "q": "What separates a hypertensive emergency from an urgency?",
          "options": [
            "Acute organ damage",
            "The systolic number",
            "The diastolic number",
            "The patient's age"
          ],
          "correct": 0,
          "explanation": "Both have severe hypertension."
        },
        {
          "q": "Ripping chest pain to the back; BP 186/94 right arm and 142/78 left. Diagnosis and destination?",
          "options": [
            "Aortic dissection: emergency transport to a centre with cardiothoracic surgery",
            "ACS: nearest PCI centre",
            "PE: CT angiography",
            "Pericarditis: anti-inflammatories"
          ],
          "correct": 0,
          "explanation": "An arm difference above 20 mmHg is a red flag."
        },
        {
          "q": "Cushing's triad indicates:",
          "options": [
            "Raised intracranial pressure with risk of herniation",
            "Aortic dissection",
            "Acute MI",
            "Hypertensive urgency"
          ],
          "correct": 0,
          "explanation": "The high BP is protecting brain perfusion."
        },
        {
          "q": "Severe hypertension is defined as:",
          "options": [
            "Systolic above 180 and/or diastolic above 120 mmHg",
            "Systolic above 140 mmHg",
            "Diastolic above 90 mmHg",
            "Any BP above 160/100 mmHg"
          ],
          "correct": 0,
          "explanation": "Then look for organ damage."
        },
        {
          "q": "Should EMS lower a high BP in the field?",
          "options": [
            "No: treat the organ problem and transport",
            "Yes, to normal within 10 minutes",
            "Yes, with sublingual nifedipine",
            "Only if the patient asks"
          ],
          "correct": 0,
          "explanation": "Fast drops can cause stroke and organ ischemia."
        },
        {
          "q": "Preeclampsia is new BP of 140/90 or more after:",
          "options": [
            "20 weeks of pregnancy",
            "10 weeks of pregnancy",
            "Delivery only",
            "36 weeks only"
          ],
          "correct": 0,
          "explanation": "Severe features include 160/110 or more."
        },
        {
          "q": "Best position for a woman with preeclampsia in late pregnancy?",
          "options": [
            "Left lateral",
            "Supine",
            "Prone",
            "Trendelenburg"
          ],
          "correct": 0,
          "explanation": "Takes the uterus off the vena cava."
        },
        {
          "q": "Can preeclampsia appear after the baby is born?",
          "options": [
            "Yes, up to 6 weeks after delivery",
            "No, never",
            "Only within 1 hour",
            "Only with twins"
          ],
          "correct": 0,
          "explanation": "Ask about recent delivery in any woman with headache and high BP."
        },
        {
          "q": "Which drug should you withhold when aortic dissection is suspected?",
          "options": [
            "Aspirin",
            "Oxygen",
            "Ondansetron",
            "Saline lock"
          ],
          "correct": 0,
          "explanation": "It can worsen bleeding if the aorta is torn."
        },
        {
          "q": "Headache, confusion and vision changes with BP 224/128 suggest:",
          "options": [
            "Hypertensive encephalopathy, an emergency",
            "A tension headache",
            "Hypertensive urgency",
            "Migraine only"
          ],
          "correct": 0,
          "explanation": "Brain damage from failed autoregulation."
        }
      ],
      "flashcards": [
        {
          "question": "Hypertensive urgency vs emergency",
          "answer": "Both: systolic above 180 and/or diastolic above 120 mmHg. Emergency has acute organ damage (brain, heart, aorta, kidneys, eyes, pregnancy).",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "Signs of organ damage",
          "answer": "Brain: severe headache, confusion, seizures, vision loss, stroke signs. Heart: chest pain, pulmonary edema. Aorta: tearing pain to the back.",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "Common trigger for a hypertensive crisis",
          "answer": "Stopping medicines: rebound after clonidine or beta-blockers.",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "Lower BP in the field?",
          "answer": "No. Treat the organ problem and transport; fast drops cut perfusion.",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "Cushing's triad",
          "answer": "High BP (wide pulse pressure), bradycardia, irregular breathing = raised intracranial pressure. Don't lower the BP.",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "Aortic dissection: key features",
          "answer": "Sudden tearing pain to the back, arm BP difference above 20 mmHg, pulse deficit, history of hypertension.",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "EMS care in hypertensive emergency",
          "answer": "Position of comfort, oxygen if hypoxic, treat the organ problem (aspirin for ACS, CPAP for edema), calm, transport to the right centre.",
          "category": "Hypertensive Emergencies"
        },
        {
          "question": "Preeclampsia and eclampsia",
          "answer": "New BP 140/90 or more after 20 weeks (severe 160/110 or more) with organ signs; up to 6 weeks after delivery. Eclampsia = seizures.",
          "category": "Hypertensive Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_4_4_1",
          "scenario": "A 55-year-old stopped his BP medicines 3 weeks ago. \"Worst headache\" for 2 hours, confused and not tracking your finger. BP 224/128. No chest pain or weakness.",
          "question": "Urgency or emergency, and what do you do?",
          "options": [
            {
              "t": "Emergency (brain involvement): supportive care, emergency transport, no field BP lowering",
              "f": "Correct."
            },
            {
              "t": "Urgency: no chest pain, so routine transport",
              "f": "Confusion and vision problems are organ damage."
            },
            {
              "t": "Lower his BP quickly with whatever is available",
              "f": "Fast drops risk stroke."
            },
            {
              "t": "Give his old medicines and leave him at home",
              "f": "He needs hospital treatment."
            }
          ],
          "correct": 0,
          "explanation": "Hypertensive encephalopathy: the hospital lowers BP slowly with IV drugs and close monitoring.",
          "kpi": "Differentiates hypertensive emergency from urgency and identifies CNS end-organ damage"
        },
        {
          "id": "crit_4_4_2",
          "scenario": "A woman 32 weeks pregnant has a worsening headache and spots in her vision. BP 178/112, HR 104, leg edema. No seizures yet.",
          "question": "Diagnosis and transport risks?",
          "options": [
            {
              "t": "Severe preeclampsia: left lateral, dim lights, seizure precautions, emergency transport to obstetrics",
              "f": "Correct."
            },
            {
              "t": "Normal late-pregnancy changes",
              "f": "BP 160/110 or more with symptoms is severe."
            },
            {
              "t": "Migraine: give paracetamol and stay home",
              "f": "Spots in the vision are a warning sign of eclampsia."
            },
            {
              "t": "Lie her supine for comfort",
              "f": "Supine compresses the vena cava."
            }
          ],
          "correct": 0,
          "explanation": "Risks: eclampsia, stroke, placental abruption. Magnesium sulfate is given by ALS per protocol.",
          "kpi": "Recognizes preeclampsia as a hypertensive emergency and implements seizure precautions"
        },
        {
          "id": "crit_4_4_3",
          "scenario": "A 63-year-old collapsed 10 minutes ago. Unresponsive with snoring, left-sided weakness. BP 198/118, HR 52, breathing 8 with pauses, SpO₂ 88%. Unequal pupils.",
          "question": "What does this triad mean, and your priority?",
          "options": [
            {
              "t": "Raised intracranial pressure (likely bleed): airway and ventilation, head up 30°, stroke centre with neurosurgery; don't lower BP",
              "f": "Correct."
            },
            {
              "t": "Inferior MI: aspirin and PCI centre",
              "f": "This is a neurological emergency."
            },
            {
              "t": "Give a drug to lower the BP",
              "f": "The BP is keeping blood flowing to the brain."
            },
            {
              "t": "Recovery position and routine transport",
              "f": "Breathing 8 with pauses needs ventilation."
            }
          ],
          "correct": 0,
          "explanation": "Ventilate 10 breaths/min to EtCO₂ 35–45 mmHg; brief hyperventilation only for signs of herniation, per protocol.",
          "kpi": "Recognizes Cushing's triad as a sign of elevated ICP and prioritizes neurological management over BP control"
        }
      ]
    },
    {
      "id": "c4s5",
      "shortTitle": "4.5 Dysrhythmia Recognition",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Dysrhythmia Recognition",
        "lead": "Read the strip the same way every time, then look at the patient. The rhythm name matters less than one question: is this patient stable? Unstable slow means atropine and pacing. Unstable fast means electricity.",
        "sections": [
          {
            "type": "steps",
            "title": "Read every strip in order",
            "icon": "list",
            "steps": [
              {
                "title": "Rate",
                "text": "Slow below 60/min; fast above 100/min."
              },
              {
                "title": "Rhythm",
                "text": "Regular, regularly irregular, or irregularly irregular."
              },
              {
                "title": "P waves",
                "text": "Present? One before every QRS?"
              },
              {
                "title": "PR interval",
                "text": "Normal 0.12–0.20 s. Longer: AV block. Changing: Wenckebach."
              },
              {
                "title": "QRS width",
                "text": "Narrow less than 0.12 s (from above the ventricles); wide 0.12 s or more."
              },
              {
                "title": "Now the patient",
                "text": "Unstable = low BP, altered mental status, shock signs, ischemic chest pain or acute heart failure."
              }
            ]
          },
          {
            "type": "pathways",
            "title": "With a pulse and unstable",
            "icon": "zap",
            "paths": [
              {
                "title": "Too slow",
                "tone": "noshock",
                "steps": [
                  {
                    "text": "Oxygen if hypoxic; 12-lead; look for a cause (MI, drugs, high potassium)."
                  },
                  {
                    "text": "Atropine 1 mg IV every 3–5 minutes, maximum 3 mg.",
                    "level": "ALS"
                  },
                  {
                    "text": "No response: transcutaneous pacing.",
                    "level": "ALS"
                  },
                  {
                    "text": "Or infusion: dopamine 5–20 mcg/kg/min or epinephrine 2–10 mcg/min.",
                    "level": "ALS"
                  }
                ]
              },
              {
                "title": "Too fast",
                "tone": "shock",
                "steps": [
                  {
                    "text": "Synchronized cardioversion (sedate if possible).",
                    "level": "ALS"
                  },
                  {
                    "text": "Stable narrow regular (SVT): vagal manoeuvres (modified Valsalva) first."
                  },
                  {
                    "text": "Then adenosine 6 mg rapid IV push with a flush, then 12 mg.",
                    "level": "ALS"
                  },
                  {
                    "text": "Stable wide regular: treat as VT; amiodarone 150 mg over 10 minutes or expert advice.",
                    "level": "ALS"
                  }
                ]
              }
            ],
            "after": "Atropine often fails in Mobitz II and complete heart block with a wide QRS: go to pacing."
          },
          {
            "type": "table",
            "title": "Heart blocks at a glance",
            "icon": "activity",
            "columns": [
              "Block",
              "Key finding",
              "Risk"
            ],
            "rows": [
              [
                "First degree",
                "PR longer than 0.20 s, every P conducted",
                "Low"
              ],
              [
                "Second degree, Mobitz I (Wenckebach)",
                "PR lengthens until a QRS drops",
                "Usually low (AV node)"
              ],
              [
                "Second degree, Mobitz II",
                "Fixed PR, sudden dropped QRS",
                "High: may progress; prepare to pace"
              ],
              [
                "Third degree (complete)",
                "P waves and QRS unrelated",
                "High: pace"
              ]
            ]
          },
          {
            "type": "tools",
            "title": "Rhythm library",
            "icon": "monitor",
            "groups": [
              {
                "title": "Slow",
                "items": [
                  {
                    "ecg": "sbrady",
                    "label": "Sinus bradycardia",
                    "sub": "P before every QRS, below 60/min"
                  },
                  {
                    "ecg": "wenckebach",
                    "label": "Mobitz I",
                    "sub": "PR stretches, then a drop"
                  },
                  {
                    "ecg": "mobitz2",
                    "label": "Mobitz II",
                    "sub": "Fixed PR, sudden drop"
                  },
                  {
                    "ecg": "chb",
                    "label": "Complete heart block",
                    "sub": "P waves march through"
                  }
                ]
              },
              {
                "title": "Fast",
                "items": [
                  {
                    "ecg": "svt",
                    "label": "SVT",
                    "sub": "Narrow, regular, P waves hidden"
                  },
                  {
                    "ecg": "afib",
                    "label": "Atrial fibrillation",
                    "sub": "Irregularly irregular, no P waves"
                  },
                  {
                    "ecg": "aflutter",
                    "label": "Atrial flutter",
                    "sub": "Sawtooth waves"
                  },
                  {
                    "ecg": "vt",
                    "label": "Ventricular tachycardia",
                    "sub": "Wide, regular, fast"
                  }
                ]
              },
              {
                "title": "Arrest",
                "items": [
                  {
                    "ecg": "vfCoarse",
                    "label": "Ventricular fibrillation",
                    "sub": "Shock"
                  },
                  {
                    "ecg": "asystole",
                    "label": "Asystole",
                    "sub": "No shock: CPR, epinephrine"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Regular rhythm at 48/min, normal P waves, PR 0.16 s, narrow QRS. Dizzy, BP 82/50. Rhythm and first drug?",
          "options": [
            "Symptomatic sinus bradycardia: atropine 1 mg IV, pace if no response",
            "Sinus tachycardia: treat the cause",
            "First-degree block: no treatment",
            "Junctional rhythm: amiodarone"
          ],
          "correct": 0,
          "explanation": "Repeat every 3–5 minutes to a maximum of 3 mg."
        },
        {
          "q": "A \"sawtooth\" baseline in II, III and aVF is:",
          "options": [
            "Atrial flutter",
            "Atrial fibrillation",
            "Ventricular tachycardia",
            "Wandering pacemaker"
          ],
          "correct": 0,
          "explanation": "AF has a chaotic baseline with no clear waves."
        },
        {
          "q": "Unresponsive, BP 70/40. P waves at 90/min and wide QRS at 38/min with no relationship. Rhythm and priority?",
          "options": [
            "Complete heart block with a ventricular escape: pace and transport",
            "Sinus bradycardia: atropine only",
            "Mobitz II: observe",
            "Idioventricular rhythm: defibrillate"
          ],
          "correct": 0,
          "explanation": "Atropine rarely works with a wide-QRS escape."
        },
        {
          "q": "PR lengthens beat by beat until a QRS drops. This is:",
          "options": [
            "Mobitz I (Wenckebach)",
            "Mobitz II",
            "First-degree block",
            "Complete heart block"
          ],
          "correct": 0,
          "explanation": "Usually at the AV node and lower risk."
        },
        {
          "q": "\"Irregularly irregular, no P waves\" describes:",
          "options": [
            "Atrial fibrillation",
            "Sinus arrhythmia",
            "Atrial flutter with fixed block",
            "Mobitz I"
          ],
          "correct": 0,
          "explanation": "Check the pulse deficit and rate."
        },
        {
          "q": "First step for a stable patient in SVT:",
          "options": [
            "Vagal manoeuvres such as the modified Valsalva",
            "Synchronized cardioversion",
            "Defibrillation",
            "Atropine"
          ],
          "correct": 0,
          "explanation": "Then adenosine 6 mg, then 12 mg (ALS)."
        },
        {
          "q": "Fast rhythm with chest pain, BP 70/40 and confusion. Treatment?",
          "options": [
            "Synchronized cardioversion",
            "Vagal manoeuvres",
            "Observe",
            "Adenosine only"
          ],
          "correct": 0,
          "explanation": "Unstable tachycardia needs electricity."
        },
        {
          "q": "Maximum total atropine dose for bradycardia:",
          "options": [
            "3 mg",
            "1 mg",
            "0.5 mg",
            "10 mg"
          ],
          "correct": 0,
          "explanation": "Given as 1 mg every 3–5 minutes."
        },
        {
          "q": "Wide QRS means at least:",
          "options": [
            "0.12 s",
            "0.04 s",
            "0.20 s",
            "0.08 s"
          ],
          "correct": 0,
          "explanation": "A wide fast rhythm is VT until proven otherwise."
        },
        {
          "q": "Organised electrical activity on the monitor, but no pulse:",
          "options": [
            "PEA: CPR, epinephrine, look for the cause",
            "Normal sinus rhythm: stop CPR",
            "VF: shock",
            "Asystole: stop"
          ],
          "correct": 0,
          "explanation": "Hs and Ts."
        }
      ],
      "flashcards": [
        {
          "question": "Strip reading in order",
          "answer": "Rate, rhythm, P waves, PR interval, QRS width. Then: is the patient stable?",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "Sinus tachycardia vs sinus bradycardia",
          "answer": "Above 100/min vs below 60/min. Both have normal P waves before every QRS.",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "AF vs atrial flutter",
          "answer": "AF: no P waves, irregularly irregular. Flutter: sawtooth waves (II, III, aVF), often regular.",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "Wide, regular, fast, no P waves",
          "answer": "Ventricular tachycardia. No pulse: defibrillate. Pulse and unstable: synchronized cardioversion. Stable: amiodarone or expert advice.",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "Shockable arrest rhythms",
          "answer": "VF and pulseless VT. Asystole and PEA are not shockable.",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "PEA",
          "answer": "Organised electrical activity without a pulse. CPR, epinephrine, and find the reversible cause (Hs and Ts).",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "Mobitz I vs Mobitz II",
          "answer": "I: PR lengthens until a QRS drops (usually benign). II: fixed PR with sudden drops (dangerous, prepare to pace).",
          "category": "Dysrhythmia Recognition"
        },
        {
          "question": "Third-degree (complete) block",
          "answer": "P waves and QRS complexes unrelated, each at its own rate. Pace.",
          "category": "Dysrhythmia Recognition"
        }
      ],
      "critical": [
        {
          "id": "crit_4_5_1",
          "scenario": "An 82-year-old on metoprolol is pale, sweaty and confused. BP 78/44, HR 38. Regular rhythm with normal P waves, normal PR and narrow QRS.",
          "question": "Rhythm and immediate treatment?",
          "options": [
            {
              "t": "Symptomatic sinus bradycardia: atropine 1 mg IV, pacing if no response",
              "f": "Correct. Think of the beta-blocker too."
            },
            {
              "t": "Junctional rhythm: amiodarone 300 mg",
              "f": "There are normal P waves; amiodarone slows the heart further."
            },
            {
              "t": "Observe: he's elderly",
              "f": "He is hypotensive and confused."
            },
            {
              "t": "Defibrillate",
              "f": "He has a pulse."
            }
          ],
          "correct": 0,
          "explanation": "Atropine 1 mg every 3–5 minutes, maximum 3 mg; pacing or an epinephrine infusion if it fails. Tell the hospital about the metoprolol.",
          "kpi": "Symptomatic bradycardia management"
        },
        {
          "id": "crit_4_5_2",
          "scenario": "A 68-year-old with a previous MI has palpitations for 45 minutes. Alert, BP 108/72. Regular wide QRS at about 170/min, no P waves visible.",
          "question": "Rhythm and ALS treatment to anticipate?",
          "options": [
            {
              "t": "Stable monomorphic VT: amiodarone 150 mg over 10 minutes or synchronized cardioversion per protocol",
              "f": "Correct. With heart disease, wide and regular is VT."
            },
            {
              "t": "SVT with aberrancy: vagal manoeuvres only",
              "f": "Assume VT with known heart disease."
            },
            {
              "t": "Defibrillate now",
              "f": "She has a pulse and a stable BP."
            },
            {
              "t": "Sinus tachycardia: fluids",
              "f": "There are no P waves."
            }
          ],
          "correct": 0,
          "explanation": "It can degenerate to VF: pads on, close monitoring, and cardioversion if she becomes unstable.",
          "kpi": "Wide-complex tachycardia recognition"
        },
        {
          "id": "crit_4_5_3",
          "scenario": "Bystander CPR is under way and the AED said \"no shock\". Your monitor shows narrow complexes at about 70/min. There's no carotid or femoral pulse. She had sudden chest pain and breathlessness before collapsing.",
          "question": "Rhythm and likely cause?",
          "options": [
            {
              "t": "PEA, likely from a massive pulmonary embolism: continue CPR, epinephrine, treat the cause",
              "f": "Correct. No pulse means PEA, whatever the monitor looks like."
            },
            {
              "t": "Normal sinus rhythm: stop CPR",
              "f": "Without a pulse it is PEA."
            },
            {
              "t": "VF: the AED was wrong, shock now",
              "f": "The complexes are organised."
            },
            {
              "t": "Asystole: stop resuscitation",
              "f": "There is electrical activity."
            }
          ],
          "correct": 0,
          "explanation": "Epinephrine 1 mg every 3–5 minutes; pulmonary embolism may need thrombolysis on medical direction.",
          "kpi": "PEA recognition and management"
        }
      ]
    },
    {
      "id": "c4s6",
      "shortTitle": "4.6 ECG Basics & 12-Lead / STEMI",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "ECG Basics & the 12-Lead",
        "lead": "The 12-lead is the fastest way to open a blocked artery: if you find the STEMI, the cath lab gets ready before you arrive. Know the boxes, place the leads right, read the territories, and know what mimics a STEMI.",
        "sections": [
          {
            "type": "table",
            "title": "The paper",
            "icon": "ruler",
            "columns": [
              "Measure",
              "Value"
            ],
            "rows": [
              [
                "Small box (25 mm/s)",
                "0.04 s"
              ],
              [
                "Large box",
                "0.20 s"
              ],
              [
                "Calibration",
                "10 mm = 1 mV"
              ],
              [
                "Normal PR",
                "0.12–0.20 s (3–5 small boxes)"
              ],
              [
                "Normal QRS",
                "Less than 0.12 s"
              ],
              [
                "Quick rate",
                "QRS complexes in a 6-second strip × 10"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Chest leads",
            "icon": "target",
            "columns": [
              "Lead",
              "Where"
            ],
            "rows": [
              [
                "V1",
                "4th intercostal space, right sternal border"
              ],
              [
                "V2",
                "4th intercostal space, left sternal border"
              ],
              [
                "V3",
                "Between V2 and V4"
              ],
              [
                "V4",
                "5th intercostal space, mid-clavicular line"
              ],
              [
                "V5 / V6",
                "Anterior / mid-axillary line, level with V4"
              ],
              [
                "V4R",
                "V4 position on the right chest"
              ],
              [
                "V7–V9",
                "Posterior, level with V6"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Territories",
            "icon": "heart",
            "columns": [
              "Wall",
              "Leads",
              "Artery",
              "Watch for"
            ],
            "rows": [
              [
                "Inferior",
                "II, III, aVF",
                "Right coronary",
                "Bradycardia, block; record V4R"
              ],
              [
                "Anterior / septal",
                "V1–V4",
                "LAD",
                "Pump failure, VF"
              ],
              [
                "Lateral",
                "I, aVL, V5–V6",
                "Circumflex",
                "Often subtle"
              ],
              [
                "Posterior",
                "ST depression V1–V3",
                "Circumflex / right coronary",
                "Record V7–V9"
              ]
            ],
            "notes": [
              "STEMI: new ST elevation in 2 contiguous leads, 1 mm (V2–V3: 2 mm men 40 or older, 2.5 mm men under 40, 1.5 mm women).",
              "Reciprocal ST depression supports a STEMI."
            ]
          },
          {
            "type": "groups",
            "title": "Equivalents and mimics",
            "icon": "eye",
            "groups": [
              {
                "title": "Treat like STEMI",
                "items": [
                  "Posterior MI (V7–V9 elevation)",
                  "LBBB or paced rhythm with ongoing ischemic symptoms (Sgarbossa)",
                  "de Winter T waves (LAD occlusion)"
                ]
              },
              {
                "title": "High risk, not STEMI",
                "items": [
                  "Wellens' T waves: critical LAD narrowing",
                  "ST depression with ongoing pain"
                ]
              },
              {
                "title": "STEMI mimics",
                "items": [
                  "Pericarditis: diffuse concave ST elevation, PR depression",
                  "Early repolarization; LVH; LBBB",
                  "Hyperkalemia; Brugada pattern"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "See the patterns",
            "icon": "monitor",
            "groups": [
              {
                "title": "STEMI and equivalents",
                "items": [
                  {
                    "ecg": "stemiInf",
                    "label": "Inferior STEMI",
                    "sub": "Lead III",
                    "lead": "III"
                  },
                  {
                    "ecg": "stemiAnt",
                    "label": "Anterior STEMI",
                    "sub": "Lead V2",
                    "lead": "V2"
                  },
                  {
                    "ecg": "stemiLat",
                    "label": "Lateral STEMI",
                    "sub": "Lead aVL",
                    "lead": "aVL"
                  },
                  {
                    "ecg": "stemiPost",
                    "label": "Posterior MI",
                    "sub": "V2: ST depression",
                    "lead": "V2"
                  },
                  {
                    "ecg": "deWinter",
                    "label": "de Winter T waves",
                    "sub": "Lead V3",
                    "lead": "V3"
                  },
                  {
                    "ecg": "wellens",
                    "label": "Wellens' T waves",
                    "sub": "Lead V2",
                    "lead": "V2"
                  }
                ]
              },
              {
                "title": "Mimics",
                "items": [
                  {
                    "ecg": "pericarditis",
                    "label": "Pericarditis",
                    "sub": "Diffuse ST elevation"
                  },
                  {
                    "ecg": "lbbb",
                    "label": "LBBB",
                    "sub": "Lead V1",
                    "lead": "V1"
                  },
                  {
                    "ecg": "hyperK",
                    "label": "Hyperkalemia",
                    "sub": "Peaked T waves",
                    "lead": "V3"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "ECG Simulator",
                    "sub": "All rhythms and 12 leads",
                    "href": "../pages/ecg.html",
                    "icon": "activity"
                  },
                  {
                    "label": "ECG tests",
                    "sub": "Test your reading",
                    "href": "../pages/ecg-test.html",
                    "icon": "clipboard-list"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "At 25 mm/s the PR interval is 4 small boxes. Value and normal?",
          "options": [
            "0.16 s: normal",
            "0.08 s: short",
            "0.20 s: prolonged",
            "0.04 s: unmeasurable"
          ],
          "correct": 0,
          "explanation": "Normal PR is 0.12–0.20 s."
        },
        {
          "q": "Inferior ST elevation and BP 82/50. Extra lead and drug to avoid?",
          "options": [
            "V4R; avoid nitroglycerin",
            "V7–V9; avoid furosemide",
            "High lateral leads; avoid aspirin",
            "None; avoid oxygen"
          ],
          "correct": 0,
          "explanation": "RV infarction is preload dependent."
        },
        {
          "q": "Ischemic chest pain with LBBB on the 12-lead. Your response?",
          "options": [
            "Manage like a STEMI: Sgarbossa criteria help; pre-notify the PCI centre",
            "Ignore: LBBB makes the ECG unreadable",
            "Only if reciprocal changes are present",
            "Not STEMI unless ST elevation exceeds 4 mm"
          ],
          "correct": 0,
          "explanation": "LBBB with ongoing ischemic symptoms is a STEMI equivalent."
        },
        {
          "q": "One small box at 25 mm/s equals:",
          "options": [
            "0.04 s",
            "0.20 s",
            "0.10 s",
            "1 second"
          ],
          "correct": 0,
          "explanation": "A large box (5 small) is 0.20 s."
        },
        {
          "q": "Which leads look at the lateral wall?",
          "options": [
            "I, aVL, V5–V6",
            "II, III, aVF",
            "V1–V2",
            "aVR only"
          ],
          "correct": 0,
          "explanation": "Usually the circumflex artery."
        },
        {
          "q": "ST depression in V1–V3 with ongoing chest pain. Next step?",
          "options": [
            "Record V7–V9 to look for a posterior MI",
            "Ignore: depression is never a STEMI",
            "Repeat in an hour",
            "Give a fluid bolus"
          ],
          "correct": 0,
          "explanation": "Posterior MI shows as mirror-image depression in V1–V3."
        },
        {
          "q": "STEMI threshold in V2–V3 for a woman:",
          "options": [
            "1.5 mm",
            "2.5 mm",
            "4 mm",
            "0.5 mm"
          ],
          "correct": 0,
          "explanation": "Men 40 or older 2 mm; men under 40 2.5 mm; other leads 1 mm."
        },
        {
          "q": "Diffuse concave ST elevation with PR depression and positional pain suggests:",
          "options": [
            "Pericarditis",
            "Inferior STEMI",
            "Hypokalemia",
            "Posterior MI"
          ],
          "correct": 0,
          "explanation": "A classic STEMI mimic: still needs hospital assessment."
        },
        {
          "q": "Where does V4 go?",
          "options": [
            "5th intercostal space, mid-clavicular line",
            "4th intercostal space, left sternal border",
            "Mid-axillary line",
            "Under the left nipple, wherever it is"
          ],
          "correct": 0,
          "explanation": "V5 and V6 sit level with V4."
        },
        {
          "q": "Quick rate from a 6-second strip:",
          "options": [
            "Count the QRS complexes and multiply by 10",
            "Count large boxes and divide by 300",
            "Count P waves only",
            "Measure the PR interval"
          ],
          "correct": 0,
          "explanation": "Works for irregular rhythms too."
        }
      ],
      "flashcards": [
        {
          "question": "One large box at 25 mm/s",
          "answer": "0.20 s. One small box is 0.04 s.",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "Normal PR interval",
          "answer": "0.12–0.20 s (3–5 small boxes): SA node through the atria and AV node to the ventricles.",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "Standard calibration",
          "answer": "10 mm = 1 mV (the square pulse at the start).",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "V1 and V2 placement",
          "answer": "V1: 4th intercostal space, right sternal border. V2: 4th intercostal space, left sternal border.",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "STEMI criteria",
          "answer": "New ST elevation in 2 contiguous leads: 1 mm, except V2–V3 (2 mm men 40 or older, 2.5 mm men under 40, 1.5 mm women).",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "Territories",
          "answer": "Inferior II, III, aVF. Anterior V1–V4. Lateral I, aVL, V5–V6. Posterior: ST depression V1–V3, elevation in V7–V9.",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "Three STEMI mimics",
          "answer": "Pericarditis (diffuse ST elevation, PR depression), early repolarization, LVH. Also LBBB, hyperkalemia, Brugada.",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "When to record the first 12-lead",
          "answer": "Within 10 minutes of reaching a chest pain patient; repeat when symptoms change.",
          "category": "ECG Basics & 12-Lead / STEMI"
        },
        {
          "question": "Wellens' T waves",
          "answer": "Deep or biphasic T waves in V2–V3 after pain: critical LAD narrowing. High risk.",
          "category": "ECG Basics & 12-Lead / STEMI"
        }
      ],
      "critical": [
        {
          "id": "crit_4_6_1",
          "scenario": "A 55-year-old has chest pressure for 90 minutes. BP 146/90. ST elevation of 3 mm in II, III and aVF with ST depression in I and aVL. He has a true aspirin allergy (hives and wheeze).",
          "question": "Territory, complication and the allergy?",
          "options": [
            {
              "t": "Inferior STEMI: expect bradycardia and hypotension, record V4R; no aspirin – tell the PCI team about the allergy",
              "f": "Correct."
            },
            {
              "t": "Anterior STEMI: give aspirin rectally",
              "f": "This is inferior; and the allergy rules out aspirin by any route."
            },
            {
              "t": "Inferior STEMI: give enteric-coated aspirin instead",
              "f": "Enteric coating doesn't prevent an allergic reaction."
            },
            {
              "t": "Not a STEMI because of the reciprocal changes",
              "f": "Reciprocal depression supports a STEMI."
            }
          ],
          "correct": 0,
          "explanation": "The hospital chooses another antiplatelet. Pre-notify the PCI centre and avoid nitrates until V4R rules out RV infarction.",
          "kpi": "Inferior STEMI recognition and RV involvement"
        },
        {
          "id": "crit_4_6_2",
          "scenario": "A healthy 42-year-old has sharp chest pain that's worse lying flat and better leaning forward, 10 days after a cold. Diffuse concave ST elevation, PR depression, no reciprocal changes. The machine reads \"***ACUTE MI***\".",
          "question": "Most likely diagnosis and action?",
          "options": [
            {
              "t": "Pericarditis, a STEMI mimic: share your suspicion, transport for assessment",
              "f": "Correct. Don't trust the machine's label alone."
            },
            {
              "t": "STEMI: activate the cath lab",
              "f": "Diffuse changes with PR depression and positional pain point to pericarditis."
            },
            {
              "t": "Normal ECG: discharge",
              "f": "She still needs assessment to exclude MI."
            },
            {
              "t": "Hyperkalemia: give calcium",
              "f": "No peaked T waves or wide QRS."
            }
          ],
          "correct": 0,
          "explanation": "STEMI is regional with reciprocal change; pericarditis is diffuse with PR depression. When unsure, transmit the ECG.",
          "kpi": "STEMI vs. mimic differentiation"
        },
        {
          "id": "crit_4_6_3",
          "scenario": "A 60-year-old has crushing chest pain. The 12-lead shows 2 mm ST depression in V1–V3 and tall R waves in V2, nothing else.",
          "question": "What should you do?",
          "options": [
            {
              "t": "Record V7–V9: elevation there means a posterior STEMI, so pre-notify the PCI centre",
              "f": "Correct."
            },
            {
              "t": "NSTEMI: routine transport",
              "f": "Isolated V1–V3 depression may be a posterior STEMI."
            },
            {
              "t": "Give nitroglycerin and repeat tomorrow",
              "f": "Ongoing pain needs action now."
            },
            {
              "t": "Ignore: depression is never an emergency",
              "f": "It can be the mirror of a posterior STEMI."
            }
          ],
          "correct": 0,
          "explanation": "In V7–V9, 0.5 mm of ST elevation is enough.",
          "kpi": "Recognizes a posterior STEMI from anterior ST depression and records posterior leads"
        }
      ]
    },
    {
      "id": "c4s7",
      "shortTitle": "4.7 Cardiac Arrest & High-Quality CPR",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Cardiac Arrest & High-Quality CPR",
        "lead": "Survival comes from compressions and early shocks. Push hard and fast, let the chest come all the way up, and never stop for long. Watch the capnograph: it tells you how good your CPR is and when the heart comes back.",
        "sections": [
          {
            "type": "table",
            "title": "High-quality CPR: the numbers",
            "icon": "timer",
            "columns": [
              "What",
              "Target"
            ],
            "rows": [
              [
                "Rate",
                "100–120/min"
              ],
              [
                "Depth (adult)",
                "At least 5 cm (2 inches), not more than 6 cm (2.4 inches)"
              ],
              [
                "Recoil",
                "Full: don't lean"
              ],
              [
                "Pauses",
                "Under 10 seconds"
              ],
              [
                "Compression fraction",
                "At least 60%, aim for 80% or more"
              ],
              [
                "No advanced airway",
                "30:2"
              ],
              [
                "Advanced airway",
                "1 breath every 6 seconds (10 breaths/min), compressions continuous"
              ],
              [
                "Compressor change",
                "Every 2 minutes"
              ]
            ]
          },
          {
            "type": "pathways",
            "title": "Shock or no shock",
            "icon": "zap",
            "paths": [
              {
                "title": "VF / pulseless VT",
                "tone": "shock",
                "steps": [
                  {
                    "text": "Shock, then CPR for 2 minutes straight away."
                  },
                  {
                    "text": "Epinephrine 1 mg IV/IO every 3–5 minutes after the first shocks fail.",
                    "level": "ALS"
                  },
                  {
                    "text": "Amiodarone 300 mg, then 150 mg (or lidocaine 1–1.5 mg/kg, then 0.5–0.75 mg/kg).",
                    "level": "ALS"
                  }
                ]
              },
              {
                "title": "Asystole / PEA",
                "tone": "noshock",
                "steps": [
                  {
                    "text": "CPR for 2 minutes between rhythm checks."
                  },
                  {
                    "text": "Epinephrine 1 mg IV/IO as soon as possible, then every 3–5 minutes.",
                    "level": "ALS"
                  },
                  {
                    "text": "Find and treat the cause (Hs and Ts)."
                  }
                ]
              }
            ],
            "after": "Advanced airway and drugs never at the cost of compressions."
          },
          {
            "type": "table",
            "title": "Read the capnograph",
            "icon": "activity",
            "columns": [
              "EtCO₂ during CPR",
              "Means",
              "Do"
            ],
            "rows": [
              [
                "Below 10 mmHg",
                "Poor compressions, or a very poor outlook if it stays low",
                "Switch compressor; check depth, rate, recoil"
              ],
              [
                "Rising steadily",
                "Better compressions",
                "Keep going"
              ],
              [
                "Sudden jump to 35–45 mmHg or more",
                "Probable ROSC",
                "Check for a pulse at the next pause"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Hs and Ts",
            "icon": "clipboard-list",
            "groups": [
              {
                "title": "Hs",
                "items": [
                  "Hypovolemia",
                  "Hypoxia",
                  "Hydrogen ion (acidosis)",
                  "Hypo-/hyperkalemia",
                  "Hypothermia"
                ]
              },
              {
                "title": "Ts",
                "items": [
                  "Tension pneumothorax",
                  "Tamponade",
                  "Toxins",
                  "Thrombosis: pulmonary or coronary"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "Practice",
            "icon": "monitor",
            "groups": [
              {
                "title": "Arrest rhythms",
                "items": [
                  {
                    "ecg": "vfCoarse",
                    "label": "Ventricular fibrillation",
                    "sub": "Shockable"
                  },
                  {
                    "ecg": "pulselessVt",
                    "label": "Pulseless VT",
                    "sub": "Shockable"
                  },
                  {
                    "ecg": "pea",
                    "label": "PEA",
                    "sub": "Not shockable"
                  },
                  {
                    "ecg": "asystole",
                    "label": "Asystole",
                    "sub": "Not shockable"
                  }
                ]
              },
              {
                "title": "Run a code",
                "items": [
                  {
                    "label": "ACLS megacode",
                    "sub": "Lead a simulated arrest",
                    "href": "../pages/megacode.html",
                    "icon": "heart-pulse"
                  },
                  {
                    "label": "BLS course",
                    "sub": "Compressions, ventilation, AED",
                    "href": "../pages/bls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "AHA algorithms",
                    "sub": "Adult cardiac arrest",
                    "href": "../pages/aha.html",
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
          "q": "EtCO₂ stays at 8 mmHg after 6 minutes of CPR and the compressor is tiring. Best action?",
          "options": [
            "Switch compressors and check depth, rate and recoil",
            "Keep the same compressor to avoid a pause",
            "Speed up to 140/min",
            "Give more epinephrine first"
          ],
          "correct": 0,
          "explanation": "Below 10 mmHg means poor compressions."
        },
        {
          "q": "Ventilation rate with an advanced airway in place during CPR:",
          "options": [
            "1 breath every 6 seconds (10 breaths/min)",
            "1 breath every 3 seconds",
            "2 breaths every 30 compressions",
            "No ventilation"
          ],
          "correct": 0,
          "explanation": "Compressions continue without pauses."
        },
        {
          "q": "At a rhythm check, EtCO₂ jumps from 12 to 52 mmHg. Most likely?",
          "options": [
            "ROSC: check for a pulse",
            "Hyperventilation",
            "A faulty sensor",
            "Epinephrine effect only"
          ],
          "correct": 0,
          "explanation": "A sudden rise is the earliest sign of ROSC."
        },
        {
          "q": "Adult compression rate:",
          "options": [
            "100–120/min",
            "60–80/min",
            "80–100/min",
            "120–150/min"
          ],
          "correct": 0,
          "explanation": "Faster than 120 reduces depth and filling."
        },
        {
          "q": "Adult compression depth:",
          "options": [
            "At least 5 cm, not more than 6 cm",
            "About 3 cm",
            "At least 8 cm",
            "One quarter of chest depth"
          ],
          "correct": 0,
          "explanation": "2 to 2.4 inches."
        },
        {
          "q": "Compression-to-ventilation ratio for an adult without an advanced airway:",
          "options": [
            "30:2",
            "15:2",
            "5:1",
            "15:1"
          ],
          "correct": 0,
          "explanation": "With an advanced airway: continuous compressions."
        },
        {
          "q": "Maximum time for a pulse check:",
          "options": [
            "10 seconds",
            "30 seconds",
            "5 seconds",
            "1 minute"
          ],
          "correct": 0,
          "explanation": "If unsure, start compressions."
        },
        {
          "q": "An unresponsive patient is gasping occasionally. You should:",
          "options": [
            "Treat as cardiac arrest: start CPR",
            "Wait: they're breathing",
            "Put them in the recovery position",
            "Give oxygen and observe"
          ],
          "correct": 0,
          "explanation": "Agonal gasps are not normal breathing."
        },
        {
          "q": "Epinephrine dose in adult cardiac arrest:",
          "options": [
            "1 mg IV/IO every 3–5 minutes",
            "0.5 mg IM once",
            "1 mg every minute",
            "10 mg once"
          ],
          "correct": 0,
          "explanation": "As soon as possible for non-shockable rhythms."
        },
        {
          "q": "First amiodarone dose for shock-refractory VF:",
          "options": [
            "300 mg",
            "150 mg",
            "50 mg",
            "1 g"
          ],
          "correct": 0,
          "explanation": "Second dose 150 mg."
        }
      ],
      "flashcards": [
        {
          "question": "Chain of survival",
          "answer": "Early recognition and call for help, early CPR, rapid defibrillation, advanced resuscitation, post-cardiac arrest care, recovery.",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "Adult compression rate and depth",
          "answer": "100–120/min; at least 5 cm (2 inches), not more than 6 cm (2.4 inches).",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "Chest compression fraction",
          "answer": "The share of arrest time spent compressing: at least 60%, aim for 80% or more.",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "Compressions to ventilations",
          "answer": "30:2. With an advanced airway: 1 breath every 6 seconds (10 breaths/min) with continuous compressions.",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "When to switch compressors",
          "answer": "Every 2 minutes, or sooner if tiring.",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "EtCO₂ below 10 mmHg during CPR",
          "answer": "Compressions are probably poor: switch compressors and check depth, rate and recoil.",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "Earliest sign of ROSC",
          "answer": "A sudden, sustained rise in EtCO₂ (to 35–45 mmHg or more). Check for a pulse.",
          "category": "Cardiac Arrest & High-Quality CPR"
        },
        {
          "question": "Why full recoil matters",
          "answer": "The heart refills between compressions; leaning cuts venous return and coronary perfusion.",
          "category": "Cardiac Arrest & High-Quality CPR"
        }
      ],
      "critical": [
        {
          "id": "crit_4_7_1",
          "scenario": "A 60-year-old collapsed on a treadmill. Bystander CPR and one AED shock before you arrive. With your team compressing, EtCO₂ is 14 mmHg after 1 minute.",
          "question": "What do you prioritise, and what does 14 mmHg mean?",
          "options": [
            {
              "t": "Keep high-quality 30:2 CPR with minimal pauses, analyse at the end of the cycle; coach depth and rate to push EtCO₂ higher",
              "f": "Correct."
            },
            {
              "t": "Stop CPR to intubate now",
              "f": "Airways never at the cost of compressions."
            },
            {
              "t": "14 mmHg is perfect: change nothing",
              "f": "Above 10 is acceptable, but higher is better."
            },
            {
              "t": "Shock again immediately",
              "f": "Complete the 2 minutes first."
            }
          ],
          "correct": 0,
          "explanation": "Above 10 mmHg shows blood is moving; coaching often raises it further.",
          "kpi": "Compression quality assessment via EtCO₂"
        },
        {
          "id": "crit_4_7_2",
          "scenario": "Two-rescuer CPR, fine VF. EtCO₂ 8 mmHg after 4 minutes. Your partner is tiring: shallow compressions about 4 cm, rate about 90/min, leaning between compressions.",
          "question": "Most important immediate action?",
          "options": [
            {
              "t": "Swap compressors now and target 5–6 cm, 100–120/min and full recoil; shock at the next check",
              "f": "Correct."
            },
            {
              "t": "Keep going: swapping wastes time",
              "f": "Poor compressions waste more."
            },
            {
              "t": "Ventilate faster to make up for it",
              "f": "Over-ventilation lowers venous return."
            },
            {
              "t": "Stop and check for a pulse",
              "f": "VF has no pulse; keep compressing."
            }
          ],
          "correct": 0,
          "explanation": "Fatigue is a common cause of poor CPR. EtCO₂ below 10 mmHg confirms it.",
          "kpi": "Compressor fatigue management"
        },
        {
          "id": "crit_4_7_3",
          "scenario": "After one shock and 2 doses of epinephrine, the rhythm check shows narrow complexes at 80/min. EtCO₂ has jumped from 11 to 48 mmHg and there's a strong carotid pulse.",
          "question": "What phase is this, and your priorities?",
          "options": [
            {
              "t": "ROSC: stop compressions, ventilate 10 breaths/min, SpO₂ 92–98%, BP, 12-lead, transport to a PCI-capable cardiac arrest centre",
              "f": "Correct."
            },
            {
              "t": "PEA: continue CPR and give more epinephrine",
              "f": "There's a strong pulse."
            },
            {
              "t": "Remove the pads: it's over",
              "f": "Re-arrest is common; keep them on."
            },
            {
              "t": "Ventilate fast to wash out CO₂",
              "f": "Hyperventilation lowers cardiac output."
            }
          ],
          "correct": 0,
          "explanation": "Post-ROSC care (4.9): avoid hypoxia, hyperoxia, hypotension and hyperventilation; temperature control in hospital.",
          "kpi": "ROSC recognition and post-arrest care transition"
        }
      ]
    },
    {
      "id": "c4s8",
      "shortTitle": "4.8 AED & Defibrillation",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "AED & Defibrillation",
        "lead": "Every minute without a shock in VF lowers survival. Get the pads on fast, keep compressing while the AED gets ready, and go straight back to compressions after the shock. Don't check the pulse after a shock.",
        "sections": [
          {
            "type": "steps",
            "title": "Using the AED",
            "icon": "zap",
            "steps": [
              {
                "title": "Power on",
                "text": "Keep compressions going while your partner prepares the pads."
              },
              {
                "title": "Pads on bare, dry chest",
                "text": "Anterolateral (right upper chest below the clavicle; left side in the mid-axillary line) or anteroposterior."
              },
              {
                "title": "Analyse: hands off",
                "text": "Nobody touches the patient."
              },
              {
                "title": "Shock if advised",
                "text": "Look and shout \"clear\"."
              },
              {
                "title": "Compress immediately",
                "text": "For 2 minutes before the next analysis. No pulse or rhythm check right after the shock."
              }
            ]
          },
          {
            "type": "table",
            "title": "Pad problems",
            "icon": "wrench",
            "columns": [
              "Problem",
              "Fix"
            ],
            "rows": [
              [
                "Hairy chest",
                "Shave, or rip off a first set of pads"
              ],
              [
                "Wet or sweaty",
                "Dry the chest; move out of standing water"
              ],
              [
                "Medication patch",
                "Remove it and wipe the skin"
              ],
              [
                "Implanted pacemaker or ICD",
                "Don't place a pad directly over it"
              ],
              [
                "\"Check electrodes\"",
                "Press firmly, dry, shave or replace pads"
              ],
              [
                "Oxygen",
                "Keep the source away from the chest during the shock"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Energy",
            "icon": "battery",
            "columns": [
              "Patient",
              "Shock"
            ],
            "rows": [
              [
                "Adult, biphasic",
                "Per manufacturer (typically 120–200 J); 200 J if unknown"
              ],
              [
                "Adult, monophasic",
                "360 J"
              ],
              [
                "Child",
                "First 2 J/kg, second 4 J/kg, then 4 J/kg or more (max 10 J/kg or adult dose)"
              ]
            ],
            "notes": [
              "Under 8 years: pediatric pads or attenuator if available, otherwise a standard AED.",
              "Infants: manual defibrillator preferred, then attenuated AED, then standard AED.",
              "If pads could touch on a small chest, use anteroposterior."
            ]
          },
          {
            "type": "tools",
            "title": "Know the rhythms",
            "icon": "monitor",
            "groups": [
              {
                "title": "Shock",
                "items": [
                  {
                    "ecg": "vfCoarse",
                    "label": "Coarse VF",
                    "sub": "Shock"
                  },
                  {
                    "ecg": "vfFine",
                    "label": "Fine VF",
                    "sub": "Still shockable"
                  },
                  {
                    "ecg": "pulselessVt",
                    "label": "Pulseless VT",
                    "sub": "Shock"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "BLS course",
                    "sub": "AED scenarios",
                    "href": "../pages/bls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "PALS course",
                    "sub": "Pediatric defibrillation",
                    "href": "../pages/pals.html",
                    "icon": "baby"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "The AED has just delivered a shock. What next?",
          "options": [
            "Resume compressions immediately",
            "Check for a pulse",
            "Re-analyse the rhythm",
            "Give 5 ventilations"
          ],
          "correct": 0,
          "explanation": "2 minutes of CPR before the next analysis."
        },
        {
          "q": "A 6-year-old in arrest; only adult pads, no attenuator. You should:",
          "options": [
            "Use the adult pads, anteroposterior so they don't touch",
            "Not use the AED",
            "Use anterolateral pads, overlapping is fine",
            "Cut the pads in half"
          ],
          "correct": 0,
          "explanation": "A shock is better than no shock."
        },
        {
          "q": "\"Check electrodes\" keeps appearing; the chest is very hairy. Best action?",
          "options": [
            "Remove the pads, shave, apply new pads firmly",
            "Ignore the message",
            "Press on the pads with your hands during analysis",
            "Abandon the AED"
          ],
          "correct": 0,
          "explanation": "Never touch the patient during analysis."
        },
        {
          "q": "Shockable rhythms:",
          "options": [
            "VF and pulseless VT",
            "Asystole and PEA",
            "Sinus bradycardia",
            "Any rhythm without a pulse"
          ],
          "correct": 0,
          "explanation": "Asystole and PEA need CPR and epinephrine."
        },
        {
          "q": "Biphasic energy when the manufacturer's dose is unknown:",
          "options": [
            "200 J",
            "50 J",
            "100 J",
            "500 J"
          ],
          "correct": 0,
          "explanation": "Monophasic: 360 J."
        },
        {
          "q": "First shock dose for a child:",
          "options": [
            "2 J/kg",
            "4 J/kg",
            "10 J/kg",
            "200 J regardless of size"
          ],
          "correct": 0,
          "explanation": "Second shock 4 J/kg."
        },
        {
          "q": "A nitroglycerin patch sits where the pad goes. You should:",
          "options": [
            "Remove it and wipe the skin before applying the pad",
            "Put the pad over it",
            "Skip the shock",
            "Move the pad to the abdomen"
          ],
          "correct": 0,
          "explanation": "Patches can burn and block energy."
        },
        {
          "q": "A bulge under the left clavicle (pacemaker). Pad placement?",
          "options": [
            "Not directly over the device",
            "Directly over it",
            "Skip the AED",
            "Use only one pad"
          ],
          "correct": 0,
          "explanation": "Anteroposterior placement works well."
        },
        {
          "q": "Patient in arrest lying in a puddle:",
          "options": [
            "Move out of the water and dry the chest before the shock",
            "Shock where they are",
            "Don't use an AED in the rain",
            "Shock only after ROSC"
          ],
          "correct": 0,
          "explanation": "A dry chest and no standing water protect rescuers and the shock."
        },
        {
          "q": "Preferred defibrillator for an infant:",
          "options": [
            "Manual defibrillator",
            "Standard adult AED only",
            "No defibrillation in infants",
            "An adult AED with pads overlapping"
          ],
          "correct": 0,
          "explanation": "Then an attenuated AED, then a standard AED."
        }
      ],
      "flashcards": [
        {
          "question": "AED in 4 steps",
          "answer": "Power on; pads on bare chest; analyse (hands off); shock if advised, then CPR at once.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Anterolateral pad placement",
          "answer": "Right upper chest below the clavicle; left side of the chest in the mid-axillary line.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Shockable rhythms",
          "answer": "VF and pulseless VT. Asystole and PEA are not shockable.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Safety before a shock",
          "answer": "Look and shout \"clear\"; oxygen away from the chest; remove patches; dry chest; pads well stuck and not touching.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Pediatric pads",
          "answer": "Under 8 years: pediatric pads or attenuator. None available: standard AED, pads anteroposterior if they'd touch. A lone rescuer with an unwitnessed collapse gives about 2 minutes of CPR before fetching the AED.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Right after a shock",
          "answer": "Compressions immediately for 2 minutes. No pulse or rhythm check.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Adult energy",
          "answer": "Biphasic per manufacturer (typically 120–200 J; 200 J if unknown). Monophasic 360 J.",
          "category": "AED & Defibrillation"
        },
        {
          "question": "Child energy",
          "answer": "First 2 J/kg, second 4 J/kg, later 4 J/kg or more (max 10 J/kg or adult dose).",
          "category": "AED & Defibrillation"
        }
      ],
      "critical": [
        {
          "id": "crit_4_8_1",
          "scenario": "The mall AED shocked once and prompted CPR. 30 seconds into compressions, your monitor through the pads shows fine VF. Your partner asks whether to shock again.",
          "question": "Shock now or continue CPR?",
          "options": [
            {
              "t": "Continue CPR for the full 2 minutes, then re-analyse",
              "f": "Correct. The waveform during compressions is artefact-prone and the heart needs perfusion."
            },
            {
              "t": "Shock again immediately",
              "f": "Stacked shocks interrupt perfusion; finish the cycle."
            },
            {
              "t": "Stop CPR to look at the rhythm",
              "f": "Every pause lowers coronary perfusion."
            },
            {
              "t": "Check for a pulse now",
              "f": "Not until the 2-minute check."
            }
          ],
          "correct": 0,
          "explanation": "Keep pre- and post-shock pauses short.",
          "kpi": "Post-shock CPR timing"
        },
        {
          "id": "crit_4_8_2",
          "scenario": "A sweaty 68-year-old in arrest. The pads keep sliding off even after drying; the AED says \"Check electrodes – poor contact\".",
          "question": "How do you fix it?",
          "options": [
            {
              "t": "Dry again, apply a fresh set of pads, press firmly especially at the edges; switch to the manual defibrillator's pads if needed",
              "f": "Correct."
            },
            {
              "t": "Ignore the warning: it'll shock anyway",
              "f": "High impedance can stop the shock and cause burns."
            },
            {
              "t": "Hold the pads on during analysis",
              "f": "Never touch the patient during analysis or a shock."
            },
            {
              "t": "Give up on defibrillation",
              "f": "Fix the contact; keep compressing meanwhile."
            }
          ],
          "correct": 0,
          "explanation": "Good contact is needed for the AED to analyse and for an effective shock.",
          "kpi": "AED troubleshooting — pad adhesion"
        },
        {
          "id": "crit_4_8_3",
          "scenario": "A man collapsed at a bus stop in heavy rain. He's lying in a puddle, pulseless, with a bump under the left clavicle.",
          "question": "How do you prepare the shock?",
          "options": [
            {
              "t": "Move him out of the water, dry the chest, place the pads away from the device (anteroposterior works)",
              "f": "Correct."
            },
            {
              "t": "Shock where he lies",
              "f": "Standing water is a hazard; move first."
            },
            {
              "t": "Pad directly over the bump",
              "f": "It blocks energy and can damage the device."
            },
            {
              "t": "No AED because of the pacemaker",
              "f": "Implanted devices don't stop defibrillation."
            }
          ],
          "correct": 0,
          "explanation": "Keep compressions going during preparation; pause only to analyse and shock.",
          "kpi": "Prepares safe defibrillation in a wet environment with an implanted device"
        }
      ]
    },
    {
      "id": "c4s9",
      "shortTitle": "4.9 Post-Cardiac-Arrest (ROSC) Care",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Post-Cardiac Arrest (ROSC) Care",
        "lead": "ROSC is the start of the next emergency. The heart is stunned and the brain is vulnerable. Re-arrest is common. Get the oxygen, ventilation and BP right, find the STEMI, and take them where they can open the artery.",
        "sections": [
          {
            "type": "table",
            "title": "Targets",
            "icon": "target",
            "columns": [
              "What",
              "Target",
              "Avoid"
            ],
            "rows": [
              [
                "Ventilation",
                "10 breaths/min (1 every 6 seconds)",
                "Hyperventilation"
              ],
              [
                "EtCO₂",
                "35–45 mmHg",
                "Low CO₂ (brain vasoconstriction)"
              ],
              [
                "SpO₂",
                "92–98%",
                "Hypoxia and hyperoxia"
              ],
              [
                "Blood pressure",
                "Systolic 90 mmHg or more; MAP 65 mmHg or more",
                "Hypotension"
              ],
              [
                "Temperature",
                "Prevent fever",
                "Rapid cold IV fluids in the field"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "After the pulse comes back",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Confirm",
                "text": "Pulse and BP. Keep the pads on: re-arrest is common."
              },
              {
                "title": "Airway and breathing",
                "text": "Secure the airway; ventilate to the targets; waveform capnography."
              },
              {
                "title": "Circulation",
                "text": "Treat hypotension: fluid if the lungs are clear; vasopressor infusion per protocol.",
                "level": "ALS"
              },
              {
                "title": "12-lead",
                "text": "As soon as possible: STEMI means emergency angiography."
              },
              {
                "title": "Glucose and seizures",
                "text": "Check glucose; treat seizures."
              },
              {
                "title": "Destination",
                "text": "PCI-capable cardiac arrest centre where available; pre-notify."
              }
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Look for",
                "items": [
                  {
                    "ecg": "stemiAnt",
                    "label": "STEMI after ROSC",
                    "sub": "Emergency angiography",
                    "lead": "V3"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "ACLS megacode",
                    "sub": "Cases run through to post-ROSC care",
                    "href": "../pages/megacode.html",
                    "icon": "heart-pulse"
                  },
                  {
                    "label": "AHA algorithms",
                    "sub": "Post-cardiac arrest care",
                    "href": "../pages/aha.html",
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
          "q": "Earliest objective sign of ROSC during CPR?",
          "options": [
            "A sudden rise in EtCO₂",
            "Spontaneous breathing",
            "Eyes opening",
            "Sinus rhythm on the monitor"
          ],
          "correct": 0,
          "explanation": "Check for a pulse at the next pause."
        },
        {
          "q": "Post-ROSC SpO₂ is 100% on a non-rebreather. Best action?",
          "options": [
            "Wean oxygen to SpO₂ 92–98%",
            "Keep 100%: it's ideal",
            "Switch to 6 L/min regardless",
            "Remove all oxygen"
          ],
          "correct": 0,
          "explanation": "Hyperoxia also harms."
        },
        {
          "q": "ROSC after VF arrest. 4 mm ST elevation in V1–V4, SBP 82, SpO₂ 96%. Best plan?",
          "options": [
            "Treat hypotension (fluid if lungs clear), STEMI alert, transport to the PCI centre",
            "Closest hospital to stabilise first",
            "Cold saline and the closest ED",
            "Ventilate at 20/min"
          ],
          "correct": 0,
          "explanation": "STEMI after ROSC needs emergency angiography."
        },
        {
          "q": "Ventilation rate after ROSC:",
          "options": [
            "10 breaths/min",
            "20 breaths/min",
            "30 breaths/min",
            "As fast as possible"
          ],
          "correct": 0,
          "explanation": "Target EtCO₂ 35–45 mmHg."
        },
        {
          "q": "Minimum systolic BP target after ROSC:",
          "options": [
            "90 mmHg",
            "60 mmHg",
            "70 mmHg",
            "160 mmHg"
          ],
          "correct": 0,
          "explanation": "And MAP 65 mmHg or more."
        },
        {
          "q": "Should you start rapid cold IV fluids in the field after ROSC?",
          "options": [
            "No",
            "Yes, 2 litres",
            "Yes, always",
            "Only in children"
          ],
          "correct": 0,
          "explanation": "It caused re-arrest and pulmonary edema in trials; prevent fever instead."
        },
        {
          "q": "Why check glucose after ROSC?",
          "options": [
            "Hypo- and hyperglycemia harm the brain and are treatable",
            "It predicts the rhythm",
            "It's required before a 12-lead",
            "It replaces the GCS"
          ],
          "correct": 0,
          "explanation": "Also treat seizures."
        },
        {
          "q": "Why avoid hyperventilation after ROSC?",
          "options": [
            "It lowers cardiac output and constricts brain vessels",
            "It raises CO₂",
            "It causes hypoglycemia",
            "It has no effect"
          ],
          "correct": 0,
          "explanation": "Raised chest pressure cuts venous return."
        },
        {
          "q": "Why keep the pads on after ROSC?",
          "options": [
            "Re-arrest is common",
            "They warm the patient",
            "They record BP",
            "Protocol only, no reason"
          ],
          "correct": 0,
          "explanation": "Be ready to shock again."
        },
        {
          "q": "Best destination after ROSC with STEMI?",
          "options": [
            "A PCI-capable cardiac arrest centre",
            "The nearest clinic",
            "Home with follow-up",
            "Any hospital without a cath lab"
          ],
          "correct": 0,
          "explanation": "Pre-notify."
        }
      ],
      "flashcards": [
        {
          "question": "Definitive sign of ROSC",
          "answer": "A palpable central pulse with a measurable blood pressure.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Capnography sign of ROSC",
          "answer": "A sudden, sustained rise in EtCO₂ (to 35–45 mmHg or more).",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Post-ROSC SpO₂ target",
          "answer": "92–98%: avoid both hypoxia and hyperoxia.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Post-ROSC ventilation",
          "answer": "10 breaths/min (1 every 6 seconds), EtCO₂ 35–45 mmHg. Don't hyperventilate.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Post-ROSC blood pressure",
          "answer": "Systolic 90 mmHg or more and MAP 65 mmHg or more.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Why a 12-lead early after ROSC?",
          "answer": "To find a STEMI: emergency angiography at a PCI-capable centre.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Temperature after ROSC",
          "answer": "Prevent fever. Hospitals control temperature (32–37.5 °C); no rapid cold IV fluids in the field.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        },
        {
          "question": "Post-ROSC threats",
          "answer": "Hypotension, hypoxia, hyperoxia, hyperventilation, re-arrest, seizures, abnormal glucose.",
          "category": "Post-Cardiac-Arrest (ROSC) Care"
        }
      ],
      "critical": [
        {
          "id": "crit_4_9_1",
          "scenario": "After 8 minutes of CPR the AED says \"no shock\". You feel a strong carotid pulse; EtCO₂ jumps from 28 to 52 mmHg. She starts to gasp. Your partner moves to the stretcher.",
          "question": "Priority immediately after ROSC?",
          "options": [
            {
              "t": "Recheck pulse, full vital signs including BP, titrate oxygen to SpO₂ 92–98%, prepare a 12-lead",
              "f": "Correct."
            },
            {
              "t": "Cold packs to the groin and armpits",
              "f": "Not before stabilising airway, breathing and BP."
            },
            {
              "t": "Remove the pads",
              "f": "Keep them on in case of re-arrest."
            },
            {
              "t": "Ventilate fast to bring the EtCO₂ down",
              "f": "That harms circulation."
            }
          ],
          "correct": 0,
          "explanation": "Confirm, stabilise, 12-lead, then decide the destination.",
          "kpi": "Prioritises post-ROSC reassessment and stabilisation over secondary interventions"
        },
        {
          "id": "crit_4_9_2",
          "scenario": "ROSC with inferior STEMI. BP 88/52, HR 115, lungs clear, opens eyes to pain. Non-PCI hospital 8 minutes away; PCI centre 22 minutes away.",
          "question": "Best destination?",
          "options": [
            {
              "t": "The PCI centre, treating hypotension with fluid en route",
              "f": "Correct. He needs the artery opened."
            },
            {
              "t": "The closer hospital, then transfer",
              "f": "A transfer delays reperfusion."
            },
            {
              "t": "Stay on scene until the BP is normal",
              "f": "Treat en route."
            },
            {
              "t": "Nitroglycerin for the STEMI",
              "f": "Not with this BP."
            }
          ],
          "correct": 0,
          "explanation": "Keep the pads on and be ready for re-arrest.",
          "kpi": "Transport destination decision-making in post-ROSC STEMI"
        },
        {
          "id": "crit_4_9_3",
          "scenario": "Intubated after ROSC, a 70-year-old is being bagged at about 22 breaths/min with big breaths. SpO₂ 99%, BP 118/74, EtCO₂ 22 mmHg.",
          "question": "Most important ventilation change?",
          "options": [
            {
              "t": "Slow to 10 breaths/min with gentle breaths, aiming for EtCO₂ 35–45 mmHg",
              "f": "Correct."
            },
            {
              "t": "Faster still: she's moving",
              "f": "Movement doesn't call for hyperventilation."
            },
            {
              "t": "No change: SpO₂ is 99%",
              "f": "Low EtCO₂ shows over-ventilation."
            },
            {
              "t": "Stop ventilating",
              "f": "She still needs support."
            }
          ],
          "correct": 0,
          "explanation": "Over-ventilation raises chest pressure, lowers cardiac output and narrows brain vessels.",
          "kpi": "Avoidance of hyperventilation in post-arrest care"
        }
      ]
    },
    {
      "id": "c4s10",
      "shortTitle": "4.10 Shock & Hemorrhage",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Shock & Hemorrhage",
        "lead": "Shock is not a BP number. It's when tissues don't get enough oxygen. Catch it early from the anxiety, the fast pulse and the cold, pale skin; hypotension is late. In trauma, stop the bleeding first.",
        "sections": [
          {
            "type": "table",
            "title": "Four kinds of shock",
            "icon": "activity",
            "columns": [
              "Type",
              "Cause",
              "Clues",
              "Key action"
            ],
            "rows": [
              [
                "Hypovolemic",
                "Bleeding, vomiting, diarrhea, burns",
                "Flat neck veins, cold and pale",
                "Stop bleeding; fluids or blood"
              ],
              [
                "Cardiogenic",
                "MI, arrhythmia, heart failure",
                "Crackles, raised JVP",
                "Cautious fluid; PCI; vasopressors (ALS)"
              ],
              [
                "Distributive",
                "Sepsis, anaphylaxis, spinal cord injury",
                "Warm skin early; rash, fever, wheeze",
                "Fluids; IM epinephrine for anaphylaxis"
              ],
              [
                "Obstructive",
                "Tension pneumothorax, tamponade, PE",
                "Raised JVP, absent breath sounds, muffled heart sounds",
                "Relieve the obstruction (ALS)"
              ]
            ],
            "stack": true
          },
          {
            "type": "steps",
            "title": "Life-threatening limb bleeding",
            "icon": "droplet",
            "steps": [
              {
                "title": "Direct pressure",
                "text": "Hard, on the bleeding point."
              },
              {
                "title": "Tourniquet",
                "text": "5–7 cm (2–3 inches) above the wound, not over a joint. Tighten until the bleeding stops; note the time."
              },
              {
                "title": "Still bleeding?",
                "text": "A second tourniquet above the first."
              },
              {
                "title": "Junctional wound (groin, armpit, neck)",
                "text": "Pack with hemostatic gauze and press."
              },
              {
                "title": "Tranexamic acid",
                "text": "Within 3 hours of injury, per protocol.",
                "doses": [
                  {
                    "drug": "Tranexamic acid",
                    "dose": "1 g IV over 10 minutes",
                    "note": "Within 3 hours",
                    "level": "ALS"
                  }
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "How much blood is gone?",
            "icon": "droplet",
            "columns": [
              "Class",
              "Loss",
              "Picture"
            ],
            "rows": [
              [
                "I",
                "Up to 15%",
                "Little change"
              ],
              [
                "II",
                "15–30%",
                "Tachycardia, anxiety, narrowed pulse pressure; BP maintained"
              ],
              [
                "III",
                "31–40%",
                "Hypotension, confusion, marked tachycardia"
              ],
              [
                "IV",
                "More than 40%",
                "Lethargic, very low BP: about to arrest"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Every shock patient",
            "icon": "thermometer",
            "items": [
              "Oxygen to SpO₂ 94–98%",
              "Keep warm: cold, acid and clotting failure feed each other",
              "Pelvic binder for suspected pelvic fracture with shock",
              "Rapid transport to the right centre; fluids en route (4.11)"
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
                    "label": "Trauma assessment",
                    "sub": "Primary survey walk-through",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "GCS calculator",
                    "sub": "Track mental status",
                    "href": "../pages/GCS.html",
                    "icon": "brain"
                  }
                ]
              },
              {
                "title": "The first sign",
                "items": [
                  {
                    "ecg": "stach",
                    "label": "Sinus tachycardia",
                    "sub": "Compensation: look for the cause"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Which picture fits class III hemorrhage?",
          "options": [
            "Hypotension, confusion, marked tachycardia",
            "Normal BP, mild anxiety",
            "Bradycardia, warm skin",
            "High BP, bounding pulses"
          ],
          "correct": 0,
          "explanation": "31–40% blood loss: compensation is failing."
        },
        {
          "q": "Fall from a ladder: confused, cold and clammy, HR 124, BP 88/60, deformed femur. First priority?",
          "options": [
            "Treat shock: oxygen, keep warm, splint, rapid transport to a trauma centre with fluids en route",
            "Detailed secondary survey on scene",
            "Elevate the legs and wait for ALS",
            "Hyperventilate with a BVM"
          ],
          "correct": 0,
          "explanation": "A femur fracture can hide a lot of blood."
        },
        {
          "q": "Spinal injury at T3: BP 82, HR 52, warm, flushed skin. Type of shock?",
          "options": [
            "Neurogenic: loss of sympathetic tone",
            "Hypovolemic",
            "Cardiogenic",
            "Septic"
          ],
          "correct": 0,
          "explanation": "Bradycardia and warm skin are the clues. Still look for bleeding."
        },
        {
          "q": "Earliest measurable sign of shock:",
          "options": [
            "Tachycardia",
            "Hypotension",
            "Cyanosis",
            "Bradycardia"
          ],
          "correct": 0,
          "explanation": "Hypotension is late."
        },
        {
          "q": "Where should a limb tourniquet go?",
          "options": [
            "5–7 cm above the wound, not over a joint",
            "Directly on the wound",
            "Below the wound",
            "Over the nearest joint"
          ],
          "correct": 0,
          "explanation": "Tighten until the bleeding stops; note the time."
        },
        {
          "q": "Tranexamic acid is given within:",
          "options": [
            "3 hours of injury",
            "24 hours",
            "10 minutes only",
            "After arrival only"
          ],
          "correct": 0,
          "explanation": "1 g IV over 10 minutes, per protocol."
        },
        {
          "q": "Hypotension, raised neck veins and muffled heart sounds after a stab wound:",
          "options": [
            "Cardiac tamponade (Beck's triad)",
            "Tension pneumothorax",
            "Neurogenic shock",
            "Anaphylaxis"
          ],
          "correct": 0,
          "explanation": "Rapid transport for surgical decompression."
        },
        {
          "q": "Why keep a bleeding patient warm?",
          "options": [
            "Cold worsens clotting failure and acidosis",
            "For comfort only",
            "To raise the BP directly",
            "It doesn't matter"
          ],
          "correct": 0,
          "explanation": "Hypothermia, acidosis and coagulopathy feed each other."
        },
        {
          "q": "Shock with hives, wheeze and swelling after a bee sting. First drug?",
          "options": [
            "IM epinephrine into the thigh",
            "Oral antihistamine",
            "Nebulized albuterol only",
            "IV fluids only"
          ],
          "correct": 0,
          "explanation": "0.01 mg/kg, maximum 0.5 mg; repeat after 5 minutes if needed."
        },
        {
          "q": "Hypotension, absent breath sounds on one side and distended neck veins after chest trauma:",
          "options": [
            "Tension pneumothorax: needle decompression (ALS)",
            "Hypovolemic shock: fluids only",
            "Cardiogenic shock",
            "Neurogenic shock"
          ],
          "correct": 0,
          "explanation": "An obstructive shock: relieve it."
        }
      ],
      "flashcards": [
        {
          "question": "Four categories of shock",
          "answer": "Hypovolemic, cardiogenic, distributive, obstructive.",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "Why hypotension is a late sign",
          "answer": "Compensation keeps BP up until large losses (class III, 31–40%).",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "First measurable sign of compensated shock",
          "answer": "Tachycardia.",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "Class II vs class III hemorrhage",
          "answer": "II (15–30%): tachycardia, narrowed pulse pressure, BP maintained. III (31–40%): hypotension, confusion, marked tachycardia.",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "Controlling limb bleeding",
          "answer": "Direct pressure; tourniquet 5–7 cm above the wound for life-threatening limb bleeding; hemostatic packing for junctional wounds.",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "Permissive hypotension",
          "answer": "In hemorrhage without head injury: small fluid boluses to a radial pulse or systolic 80–90 mmHg, so clots aren't disrupted.",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "Skin in compensated shock",
          "answer": "Pale, cool, clammy: vasoconstriction and sympathetic sweating.",
          "category": "Shock & Hemorrhage"
        },
        {
          "question": "Why keep a shock patient warm?",
          "answer": "Cold worsens clotting failure and acidosis, especially in hemorrhage.",
          "category": "Shock & Hemorrhage"
        }
      ],
      "critical": [
        {
          "id": "crit_4_10_1",
          "scenario": "A worker fell onto rebar. Bright red blood spurts from the upper thigh. Pale, sweaty, agitated; HR about 130, no radial pulse.",
          "question": "First intervention?",
          "options": [
            {
              "t": "Control the bleeding: direct pressure, then a tourniquet 5–7 cm above the wound",
              "f": "Correct. Bleeding control comes first."
            },
            {
              "t": "Oxygen and a full set of vital signs",
              "f": "He'll bleed out while you measure."
            },
            {
              "t": "IV fluids first",
              "f": "Fluid can't replace blood still pouring out."
            },
            {
              "t": "Splint and move to the ambulance",
              "f": "Stop the bleeding first."
            }
          ],
          "correct": 0,
          "explanation": "Then oxygen, warmth, permissive fluids and rapid transport to a trauma centre.",
          "kpi": "Prioritises haemorrhage control over other interventions in exsanguinating extremity injury"
        },
        {
          "id": "crit_4_10_2",
          "scenario": "An 82-year-old has black stools for 3 days and coffee-ground vomit. Confused, pale, cool. HR 112, BP 90/68. Hospital 25 minutes away.",
          "question": "Best plan?",
          "options": [
            {
              "t": "Oxygen to target, IV access en route, small fluid boluses to keep systolic 80–90 mmHg, keep warm, transport",
              "f": "Correct."
            },
            {
              "t": "No fluids ever in bleeding",
              "f": "Permissive, not zero: she's confused."
            },
            {
              "t": "Large boluses to a normal BP",
              "f": "That can worsen bleeding."
            },
            {
              "t": "Treat on scene for 30 minutes",
              "f": "She needs a hospital to stop the bleeding."
            }
          ],
          "correct": 0,
          "explanation": "Reassess mental status and BP after each bolus.",
          "kpi": "Applies permissive hypotension principle in non-traumatic haemorrhagic shock"
        },
        {
          "id": "crit_4_10_3",
          "scenario": "A 60-year-old with anterior STEMI: HR 118, BP 88/60, SpO₂ 91%, crackles at both bases and pink frothy sputum. Your partner wants a full fluid bolus.",
          "question": "Fluid plan?",
          "options": [
            {
              "t": "No large bolus: this is cardiogenic shock with pulmonary edema; at most a small cautious challenge on medical direction, and go to PCI",
              "f": "Correct."
            },
            {
              "t": "Full bolus now",
              "f": "The lungs are already wet."
            },
            {
              "t": "Nitroglycerin to raise BP",
              "f": "Nitrates lower BP."
            },
            {
              "t": "CPAP and nitrates",
              "f": "Not with a systolic below 90 mmHg."
            }
          ],
          "correct": 0,
          "explanation": "The treatment is opening the artery; vasopressors are ALS.",
          "kpi": "Identifies cardiogenic shock and avoids fluid overload in the setting of pulmonary oedema"
        }
      ]
    },
    {
      "id": "c4s11",
      "shortTitle": "4.11 Fluid Resuscitation",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Fluid Resuscitation",
        "lead": "Fluid is a drug: the right type, the right dose, the right patient. Bleeding patients need just enough to keep a radial pulse. Head injury and sepsis need more. Failing hearts need very little. Reassess after every bolus.",
        "sections": [
          {
            "type": "table",
            "title": "Who gets what",
            "icon": "droplet",
            "columns": [
              "Patient",
              "Target / dose"
            ],
            "rows": [
              [
                "Bleeding, no head injury",
                "Boluses of about 250 mL to a radial pulse or systolic 80–90 mmHg; blood where available"
              ],
              [
                "Bleeding with head injury",
                "Avoid hypotension: systolic at least 110 mmHg in most adults"
              ],
              [
                "Sepsis with hypotension",
                "At least 30 mL/kg crystalloid within 3 hours"
              ],
              [
                "Child in shock",
                "10–20 mL/kg, reassess after each"
              ],
              [
                "Cardiogenic shock / pulmonary edema",
                "No large boluses; small challenge (250 mL) only if lungs clear"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "After every bolus",
            "icon": "eye",
            "groups": [
              {
                "title": "Working",
                "items": [
                  "Clearer mental status",
                  "Heart rate falling, BP rising",
                  "Stronger pulses, warmer skin"
                ]
              },
              {
                "title": "Stop: overload",
                "items": [
                  "New crackles",
                  "Worse breathing",
                  "Rising JVP"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Practical points",
            "icon": "wrench",
            "items": [
              "Isotonic crystalloid: 0.9% saline or a balanced solution (lactated Ringer's)",
              "Large volumes of saline cause hyperchloremic acidosis",
              "Dose = mL/kg × weight: 20 mL/kg × 70 kg = 1400 mL",
              "IO access when IV fails in a critical patient",
              "Warm the fluids",
              "PASG/MAST: no longer used"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Calculate",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Weight-based doses and volumes",
                    "href": "../pages/drug-calculator.html",
                    "icon": "scale"
                  },
                  {
                    "label": "PALS course",
                    "sub": "Pediatric shock",
                    "href": "../pages/pals.html",
                    "icon": "baby"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "A 70 kg adult needs 20 mL/kg. Volume?",
          "options": [
            "1400 mL",
            "700 mL",
            "1000 mL",
            "2000 mL"
          ],
          "correct": 0,
          "explanation": "20 mL/kg × 70 kg = 1400 mL."
        },
        {
          "q": "A risk of large volumes of 0.9% saline:",
          "options": [
            "Hyperchloremic acidosis",
            "Hypoglycemia",
            "Hyperkalemia only",
            "None"
          ],
          "correct": 0,
          "explanation": "Balanced solutions such as lactated Ringer's avoid most of it."
        },
        {
          "q": "Cardiogenic shock after anterior MI: BP 86/58, crackles halfway up, SpO₂ 88%. Fluid strategy?",
          "options": [
            "No large bolus; a small cautious challenge only on medical direction, then PCI",
            "20 mL/kg now",
            "500 mL of D5W",
            "Withhold everything including oxygen"
          ],
          "correct": 0,
          "explanation": "With wet lungs, fluid worsens oxygenation."
        },
        {
          "q": "Permissive hypotension target in bleeding without head injury:",
          "options": [
            "Radial pulse or systolic 80–90 mmHg",
            "Systolic 120 mmHg",
            "Systolic 60 mmHg",
            "Normal BP for age"
          ],
          "correct": 0,
          "explanation": "Enough to perfuse, not enough to blow off clots."
        },
        {
          "q": "Bleeding with a serious head injury. BP target?",
          "options": [
            "Avoid hypotension: systolic at least 110 mmHg",
            "Systolic 80 mmHg",
            "Lowest possible",
            "No target"
          ],
          "correct": 0,
          "explanation": "Hypotension doubles the damage to an injured brain."
        },
        {
          "q": "Initial fluid in septic shock (adult):",
          "options": [
            "At least 30 mL/kg crystalloid within 3 hours",
            "250 mL only",
            "None until antibiotics",
            "5 mL/kg"
          ],
          "correct": 0,
          "explanation": "Reassess for overload as you go."
        },
        {
          "q": "Fluid bolus for a child in shock:",
          "options": [
            "10–20 mL/kg, reassess after each",
            "50 mL/kg at once",
            "1 litre",
            "5 mL/kg only"
          ],
          "correct": 0,
          "explanation": "Smaller boluses with heart disease."
        },
        {
          "q": "IV access fails in a peri-arrest patient. Next?",
          "options": [
            "IO access",
            "Keep trying IV for 10 minutes",
            "Oral fluids",
            "Wait for hospital"
          ],
          "correct": 0,
          "explanation": "IO works for fluids and drugs."
        },
        {
          "q": "A sign that the patient is responding to fluid:",
          "options": [
            "Heart rate falling and mental status improving",
            "New crackles",
            "Rising JVP",
            "Worsening breathlessness"
          ],
          "correct": 0,
          "explanation": "Crackles and rising JVP mean overload."
        },
        {
          "q": "Why warm IV fluids?",
          "options": [
            "Cold fluid worsens hypothermia and clotting",
            "Warm fluid works faster",
            "To prevent infection",
            "No reason"
          ],
          "correct": 0,
          "explanation": "Especially in trauma."
        }
      ],
      "flashcards": [
        {
          "question": "Standard bolus",
          "answer": "20 mL/kg isotonic crystalloid in many protocols; reassess after each. Bleeding: smaller boluses (about 250 mL).",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "Saline vs lactated Ringer's",
          "answer": "Both isotonic. Large volumes of saline cause hyperchloremic acidosis; balanced solutions are closer to plasma.",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "Signs fluids are working",
          "answer": "Clearer mental status, falling heart rate, rising BP, stronger pulses, warmer skin.",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "Signs of fluid overload",
          "answer": "New crackles, worse breathing, rising JVP: stop.",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "IO access",
          "answer": "Vascular access through the bone marrow when IV fails in a critical patient (arrest, shock, children).",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "Large boluses in cardiogenic shock?",
          "answer": "No: the failing heart can't move the volume, so it backs up into the lungs.",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "MAST/PASG",
          "answer": "No longer used: no survival benefit.",
          "category": "Fluid Resuscitation"
        },
        {
          "question": "Septic shock fluids",
          "answer": "At least 30 mL/kg crystalloid within the first 3 hours, reassessing for overload.",
          "category": "Fluid Resuscitation"
        }
      ],
      "critical": [
        {
          "id": "crit_4_11_1",
          "scenario": "An 80 kg man was stabbed in the abdomen. A pressure dressing slows the bleeding. HR 116, BP 98/72, anxious. Trauma centre 15 minutes away.",
          "question": "Fluid strategy?",
          "options": [
            {
              "t": "IV access en route; small boluses (about 250 mL) only if the radial pulse weakens or systolic falls below 80–90 mmHg",
              "f": "Correct. Permissive hypotension."
            },
            {
              "t": "1600 mL as fast as possible",
              "f": "Normalising BP can wash out clots."
            },
            {
              "t": "No access: just drive",
              "f": "Get access en route in case he deteriorates."
            },
            {
              "t": "Stay on scene until BP is normal",
              "f": "He needs surgery."
            }
          ],
          "correct": 0,
          "explanation": "The definitive fix is surgical bleeding control; don't delay transport for fluids.",
          "kpi": "Applies permissive hypotension with appropriate crystalloid dosing in penetrating trauma"
        },
        {
          "id": "crit_4_11_2",
          "scenario": "A 65-year-old with heart failure and COPD: crackles everywhere, raised JVP, pink frothy sputum. BP 110/70, HR 104, SpO₂ 84%. A student suggests a 20 mL/kg bolus.",
          "question": "Correct fluid plan?",
          "options": [
            {
              "t": "No fluid: this is cardiogenic pulmonary edema. CPAP, nitrates per protocol, upright, transport",
              "f": "Correct."
            },
            {
              "t": "250 mL challenge",
              "f": "He's already overloaded."
            },
            {
              "t": "20 mL/kg bolus",
              "f": "That could tip him into respiratory failure."
            },
            {
              "t": "Lie him flat and give fluid",
              "f": "Both make it worse."
            }
          ],
          "correct": 0,
          "explanation": "IV access is for drugs here, not volume.",
          "kpi": "Identifies cardiogenic pulmonary oedema and appropriately withholds fluids"
        },
        {
          "id": "crit_4_11_3",
          "scenario": "A 4-year-old (16 kg) with 2 days of vomiting and diarrhea is drowsy, with cold hands, capillary refill 4 seconds and HR 170. Lungs clear.",
          "question": "Fluid plan?",
          "options": [
            {
              "t": "IV or IO access; 10–20 mL/kg bolus, reassess after each",
              "f": "Correct."
            },
            {
              "t": "Oral fluids only",
              "f": "A drowsy child in shock needs IV or IO fluid."
            },
            {
              "t": "1 litre over 5 minutes",
              "f": "Dose by weight and reassess."
            },
            {
              "t": "Wait for hospital",
              "f": "Treat shock en route."
            }
          ],
          "correct": 0,
          "explanation": "16 kg × 20 mL/kg = 320 mL; stop for crackles, a big liver or worse breathing.",
          "kpi": "Doses pediatric fluid boluses by weight and reassesses"
        }
      ]
    },
    {
      "id": "c4s12",
      "shortTitle": "4.12 Pediatric Cardiac Arrest & BLS",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Pediatric Cardiac Arrest & BLS",
        "lead": "Children's hearts usually stop because they ran out of oxygen. Good ventilation matters as much as compressions. Know the ratios and depths, start CPR for a slow heart with poor perfusion, and dose everything by weight.",
        "sections": [
          {
            "type": "table",
            "title": "Infant, child, adult",
            "icon": "baby",
            "stack": true,
            "columns": [
              "",
              "Infant (under 1 year)",
              "Child (1 year to puberty)",
              "Adult"
            ],
            "rows": [
              [
                "Pulse check",
                "Brachial",
                "Carotid or femoral",
                "Carotid"
              ],
              [
                "Technique",
                "Two thumbs encircling, or heel of one hand",
                "One or two hands",
                "Two hands"
              ],
              [
                "Depth",
                "About 4 cm (1.5 inches)",
                "About 5 cm (2 inches)",
                "5–6 cm"
              ],
              [
                "Rate",
                "100–120/min",
                "100–120/min",
                "100–120/min"
              ],
              [
                "One rescuer",
                "30:2",
                "30:2",
                "30:2"
              ],
              [
                "Two rescuers",
                "15:2",
                "15:2",
                "30:2"
              ],
              [
                "Advanced airway",
                "1 breath every 2–3 seconds",
                "1 breath every 2–3 seconds",
                "1 breath every 6 seconds"
              ]
            ],
            "notes": [
              "The two-finger technique is no longer recommended for infants.",
              "Depth: at least one third of the chest depth."
            ]
          },
          {
            "type": "gate",
            "title": "Slow heart with a pulse",
            "icon": "heart-pulse",
            "question": "Heart rate below 60/min with poor perfusion despite good oxygenation and ventilation?",
            "items": [
              "Poor perfusion: mottled or pale, cold, slow capillary refill, altered consciousness"
            ],
            "no": "Keep ventilating with oxygen; monitor closely.",
            "yes": "Start CPR."
          },
          {
            "type": "doses",
            "title": "Weight-based doses",
            "icon": "syringe",
            "rows": [
              {
                "drug": "Epinephrine",
                "dose": "0.01 mg/kg IV/IO (0.1 mL/kg of 0.1 mg/mL)",
                "note": "Every 3–5 minutes; maximum 1 mg",
                "level": "ALS"
              },
              {
                "drug": "Amiodarone",
                "dose": "5 mg/kg IV/IO",
                "note": "Shock-refractory VF / pVT",
                "level": "ALS"
              },
              {
                "drug": "Defibrillation",
                "dose": "2 J/kg, then 4 J/kg",
                "note": "Later shocks 4 J/kg or more"
              }
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Dose and practise",
                "items": [
                  {
                    "label": "Drug calculator",
                    "sub": "Pediatric doses by weight",
                    "href": "../pages/drug-calculator.html",
                    "icon": "scale"
                  },
                  {
                    "label": "PALS course",
                    "sub": "Pediatric arrest and bradycardia",
                    "href": "../pages/pals.html",
                    "icon": "baby"
                  },
                  {
                    "label": "BLS course",
                    "sub": "Infant and child CPR",
                    "href": "../pages/bls.html",
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
          "q": "Commonest cause of cardiac arrest in children:",
          "options": [
            "Respiratory failure and hypoxia",
            "A primary heart rhythm problem",
            "Congenital heart disease",
            "Drug overdose"
          ],
          "correct": 0,
          "explanation": "So airway and ventilation are critical."
        },
        {
          "q": "Two-rescuer compression-to-ventilation ratio for a child:",
          "options": [
            "15:2",
            "30:2",
            "5:1",
            "10:2"
          ],
          "correct": 0,
          "explanation": "One rescuer uses 30:2."
        },
        {
          "q": "Start CPR on an infant with a pulse when the heart rate is:",
          "options": [
            "Below 60/min with poor perfusion despite ventilation",
            "Below 100/min",
            "Below 80/min",
            "Below 40/min only"
          ],
          "correct": 0,
          "explanation": "Ventilate first; a slow heart often responds to oxygen."
        },
        {
          "q": "Recommended infant compression technique (2025):",
          "options": [
            "Two thumbs encircling the chest, or the heel of one hand",
            "Two fingers",
            "A fist",
            "Two hands on top of each other"
          ],
          "correct": 0,
          "explanation": "Two fingers often fail to reach the right depth."
        },
        {
          "q": "Infant compression depth:",
          "options": [
            "About 4 cm (1.5 inches)",
            "About 1 cm",
            "About 6 cm",
            "About 8 cm"
          ],
          "correct": 0,
          "explanation": "At least one third of the chest depth."
        },
        {
          "q": "Child compression depth:",
          "options": [
            "About 5 cm (2 inches)",
            "About 2 cm",
            "About 8 cm",
            "Same as an infant"
          ],
          "correct": 0,
          "explanation": "At least one third of the chest depth."
        },
        {
          "q": "Ventilation rate in a child with an advanced airway during CPR:",
          "options": [
            "1 breath every 2–3 seconds",
            "1 breath every 6 seconds",
            "2 breaths every 15 compressions",
            "As fast as possible"
          ],
          "correct": 0,
          "explanation": "20–30 breaths/min with continuous compressions."
        },
        {
          "q": "Pediatric epinephrine dose in arrest:",
          "options": [
            "0.01 mg/kg IV/IO",
            "1 mg for everyone",
            "0.1 mg/kg",
            "0.5 mg IM"
          ],
          "correct": 0,
          "explanation": "Maximum 1 mg, every 3–5 minutes."
        },
        {
          "q": "Where do you check an infant's pulse?",
          "options": [
            "Brachial artery",
            "Carotid artery",
            "Radial artery",
            "Temporal artery"
          ],
          "correct": 0,
          "explanation": "Child: carotid or femoral."
        },
        {
          "q": "Best way to avoid pediatric dosing errors?",
          "options": [
            "Length-based tape or a drug calculator",
            "Guessing from age",
            "Using adult doses",
            "Halving the adult dose"
          ],
          "correct": 0,
          "explanation": "Read doses from the tape or calculator."
        }
      ],
      "flashcards": [
        {
          "question": "Commonest cause of pediatric arrest",
          "answer": "Respiratory failure and hypoxia, not a primary heart problem.",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "Two-rescuer ratio, infant or child",
          "answer": "15:2 (adults 30:2).",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "Child compression depth",
          "answer": "About 5 cm (2 inches): at least one third of the chest depth.",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "Infant compression technique",
          "answer": "Two thumbs encircling the chest, or the heel of one hand. The two-finger technique is no longer recommended.",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "AED for a child under 8",
          "answer": "Pediatric pads or attenuator if available; if not, a standard AED.",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "When to start CPR with a pulse",
          "answer": "Heart rate below 60/min with poor perfusion despite good oxygenation and ventilation.",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "One-rescuer ratio for a child",
          "answer": "30:2, the same as adults.",
          "category": "Pediatric Cardiac Arrest & BLS"
        },
        {
          "question": "Pediatric epinephrine",
          "answer": "0.01 mg/kg IV/IO (0.1 mL/kg of 0.1 mg/mL), maximum 1 mg, every 3–5 minutes.",
          "category": "Pediatric Cardiac Arrest & BLS"
        }
      ],
      "critical": [
        {
          "id": "crit_4_12_1",
          "scenario": "A 6-month-old is unresponsive and not breathing, with no pulse. Two EMS providers start CPR.",
          "question": "Technique and ratio?",
          "options": [
            {
              "t": "Two thumbs encircling the chest, 15:2",
              "f": "Correct."
            },
            {
              "t": "Two fingers, 30:2",
              "f": "Two fingers is no longer recommended, and two rescuers use 15:2."
            },
            {
              "t": "Two hands like an adult, 30:2",
              "f": "Too forceful for an infant."
            },
            {
              "t": "Rescue breaths only",
              "f": "No pulse means compressions too."
            }
          ],
          "correct": 0,
          "explanation": "Depth about 4 cm, rate 100–120/min.",
          "kpi": "Applies correct pediatric 2-rescuer CPR technique and ratio"
        },
        {
          "id": "crit_4_12_2",
          "scenario": "A 3-year-old in respiratory distress goes limp. HR 40, mottled, no improvement despite good BVM ventilation with oxygen.",
          "question": "Next step?",
          "options": [
            {
              "t": "Start chest compressions",
              "f": "Correct."
            },
            {
              "t": "Keep ventilating and reassess in 2 minutes",
              "f": "A heart rate below 60 with poor perfusion needs CPR now."
            },
            {
              "t": "Atropine first",
              "f": "Oxygen, ventilation and CPR come first."
            },
            {
              "t": "Transport without CPR",
              "f": "Start CPR."
            }
          ],
          "correct": 0,
          "explanation": "Heart rate below 60/min with poor perfusion despite adequate ventilation is treated as arrest.",
          "kpi": "Initiates CPR for pediatric bradycardia with poor perfusion"
        },
        {
          "id": "crit_4_12_3",
          "scenario": "A 5-year-old is in VF. Your AED has only adult pads and no attenuator.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Use the standard AED, pads anteroposterior so they don't touch",
              "f": "Correct."
            },
            {
              "t": "Don't shock without pediatric pads",
              "f": "Withholding a shock is worse."
            },
            {
              "t": "Overlap the pads on the front",
              "f": "Touching pads short-circuit the shock."
            },
            {
              "t": "CPR only until the hospital",
              "f": "VF needs a shock."
            }
          ],
          "correct": 0,
          "explanation": "A shock is better than no shock.",
          "kpi": "Defibrillates a child appropriately when pediatric equipment is unavailable"
        }
      ]
    },
    {
      "id": "c4s13",
      "shortTitle": "4.13 Termination of Resuscitation & Verification of Death",
      "guide": {
        "group": "c4",
        "groupLabel": "Chapter 4 · Cardiovascular & Resuscitation",
        "title": "Termination of Resuscitation & Verification of Death",
        "lead": "Knowing when not to start, and when to stop, is part of good resuscitation. Follow clear rules with medical direction, think of the special cases, and care for the family as much as the patient.",
        "sections": [
          {
            "type": "criteria",
            "title": "Don't start",
            "icon": "ban",
            "include": [
              "Decapitation, decomposition, incineration",
              "Rigor mortis, dependent lividity",
              "Injuries incompatible with life",
              "Blunt trauma: pulseless, apneic, no organised rhythm on arrival",
              "A valid DNR, POLST or advance directive"
            ],
            "exclude": [
              "Any doubt: start and seek advice",
              "Hypothermia, drowning, pregnancy, children, suspected poisoning: resuscitate"
            ]
          },
          {
            "type": "table",
            "title": "Termination rules (with medical direction)",
            "icon": "clipboard-list",
            "columns": [
              "BLS rule",
              "ALS rule adds"
            ],
            "rows": [
              [
                "Arrest not witnessed by EMS",
                "Not witnessed by a bystander"
              ],
              [
                "No shock delivered",
                "No bystander CPR"
              ],
              [
                "No ROSC",
                "No ROSC after full ALS"
              ]
            ],
            "notes": [
              "EtCO₂ below 10 mmHg after 20 minutes of ALS is one factor, never the only one."
            ]
          },
          {
            "type": "steps",
            "title": "After a death",
            "icon": "hand-heart",
            "steps": [
              {
                "title": "Tell the family",
                "text": "Sit down, use their name and say \"died\", not euphemisms."
              },
              {
                "title": "Support",
                "text": "Answer questions; call family, friends or a faith leader."
              },
              {
                "title": "Record",
                "text": "Time of death and the decision process."
              },
              {
                "title": "Scene",
                "text": "Possible crime: touch as little as possible; notify police or the coroner per local rules."
              }
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
                    "ecg": "asystole",
                    "label": "Asystole",
                    "sub": "Confirm in 2 leads and check the gain"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Which finding allows you to withhold resuscitation?",
          "options": [
            "Rigor mortis with dependent lividity",
            "Cool skin",
            "A weak pulse",
            "Agonal breathing"
          ],
          "correct": 0,
          "explanation": "Signs of obvious, irreversible death."
        },
        {
          "q": "Before terminating resuscitation in the field you generally must:",
          "options": [
            "Get medical direction per protocol",
            "Decide alone",
            "Wait 60 minutes",
            "Transport regardless"
          ],
          "correct": 0,
          "explanation": "Follow local termination rules."
        },
        {
          "q": "The family shows a valid DNR during an arrest. You should:",
          "options": [
            "Honor it and give comfort care",
            "Start full resuscitation anyway",
            "Ignore it unless family insist",
            "Transport with CPR"
          ],
          "correct": 0,
          "explanation": "Support the family and document."
        },
        {
          "q": "The BLS termination rule includes:",
          "options": [
            "Not witnessed by EMS, no shock delivered, no ROSC",
            "Any arrest over 5 minutes",
            "Patient over 80",
            "No family present"
          ],
          "correct": 0,
          "explanation": "The ALS rule adds no bystander witness and no bystander CPR."
        },
        {
          "q": "EtCO₂ below 10 mmHg after 20 minutes of ALS:",
          "options": [
            "Is one factor in the decision, never the only one",
            "Means stop immediately",
            "Means ROSC is close",
            "Is meaningless"
          ],
          "correct": 0,
          "explanation": "Combine it with the whole picture."
        },
        {
          "q": "A hypothermic patient in arrest:",
          "options": [
            "Resuscitate and transport for rewarming",
            "Withhold: cold skin means death",
            "Stop after 5 minutes",
            "Only compress, never shock"
          ],
          "correct": 0,
          "explanation": "Hypothermia is a special case."
        },
        {
          "q": "Blunt trauma, pulseless, apneic, no organised rhythm on arrival:",
          "options": [
            "Resuscitation can be withheld per protocol",
            "Always transport with CPR",
            "Shock 3 times then stop",
            "Give epinephrine first"
          ],
          "correct": 0,
          "explanation": "Outcomes are extremely poor."
        },
        {
          "q": "Best words when telling a family:",
          "options": [
            "\"I'm sorry, he died\"",
            "\"He's gone to a better place\"",
            "\"We lost him\"",
            "\"He passed on\""
          ],
          "correct": 0,
          "explanation": "Clear words prevent misunderstanding."
        },
        {
          "q": "A death may involve a crime. You should:",
          "options": [
            "Disturb the scene as little as possible and notify police",
            "Clean up for the family",
            "Move the body to the ambulance",
            "Remove all tubes and lines"
          ],
          "correct": 0,
          "explanation": "Document anything you had to move."
        },
        {
          "q": "Which is NOT a reason to withhold resuscitation?",
          "options": [
            "The patient looks old",
            "Decapitation",
            "Decomposition",
            "Valid DNR"
          ],
          "correct": 0,
          "explanation": "Age alone never is."
        }
      ],
      "flashcards": [
        {
          "question": "Signs of obvious death",
          "answer": "Decapitation, decomposition, incineration, rigor mortis, dependent lividity, injuries incompatible with life.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "Dependent lividity",
          "answer": "Blood pooling in the lowest parts of the body after death: reddish-purple discoloration.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "Documents that withhold resuscitation",
          "answer": "A valid DNR, POLST or advance directive.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "BLS termination rule",
          "answer": "Not witnessed by EMS, no shock delivered, no ROSC: consider termination with medical direction.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "Telling the family",
          "answer": "Clearly and kindly, using \"died\" or \"dead\", not euphemisms.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "Possible crime scene",
          "answer": "Disturb as little as possible, document what you moved, notify police.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "ALS termination rule adds",
          "answer": "Not witnessed by a bystander and no bystander CPR.",
          "category": "Termination of Resuscitation & Verification of Death"
        },
        {
          "question": "Special cases: keep going",
          "answer": "Hypothermia, drowning, pregnancy, children, suspected poisoning.",
          "category": "Termination of Resuscitation & Verification of Death"
        }
      ],
      "critical": [
        {
          "id": "crit_4_13_1",
          "scenario": "A pulseless, apneic patient is cold, with obvious rigor mortis and dependent lividity.",
          "question": "Appropriate action?",
          "options": [
            {
              "t": "Withhold resuscitation, follow the death-in-the-field protocol and support the family",
              "f": "Correct."
            },
            {
              "t": "Start CPR and transport",
              "f": "Signs of obvious death."
            },
            {
              "t": "Shock once to be sure",
              "f": "Not indicated."
            },
            {
              "t": "Call for ALS and start CPR",
              "f": "Not with obvious death."
            }
          ],
          "correct": 0,
          "explanation": "Record the time and findings.",
          "kpi": "Recognizes obvious death and withholds futile resuscitation"
        },
        {
          "id": "crit_4_13_2",
          "scenario": "An arrest not witnessed by anyone. After full CPR there's been no ROSC and every AED analysis said \"no shock\".",
          "question": "Next step?",
          "options": [
            {
              "t": "Contact medical direction to consider termination per protocol",
              "f": "Correct: the BLS rule is met."
            },
            {
              "t": "Continue indefinitely until the ED",
              "f": "Transport with CPR rarely changes the outcome here."
            },
            {
              "t": "Stop without telling anyone",
              "f": "Follow protocol with medical direction."
            },
            {
              "t": "Shock anyway",
              "f": "The rhythm isn't shockable."
            }
          ],
          "correct": 0,
          "explanation": "Not witnessed by EMS, no shock, no ROSC.",
          "kpi": "Applies BLS termination criteria with medical direction"
        },
        {
          "id": "crit_4_13_3",
          "scenario": "As you prepare to resuscitate a pulseless relative, the family produces a valid DNR/POLST.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Honor it, withhold resuscitation, support the family and document",
              "f": "Correct."
            },
            {
              "t": "Resuscitate anyway in case they change their mind",
              "f": "A valid order must be honored."
            },
            {
              "t": "Ask the neighbours what to do",
              "f": "Follow the document and protocol."
            },
            {
              "t": "Transport with CPR to let the hospital decide",
              "f": "That ignores the patient's wishes."
            }
          ],
          "correct": 0,
          "explanation": "If the document's validity is unclear, start and contact medical direction.",
          "kpi": "Honors a valid DNR order"
        }
      ]
    }
  ]
};
