/* ========== Chapter 3 – Airway & Ventilation ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c3.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c3",
  "title": "Airway & Ventilation",
  "shortTitle": "3. Airway & Ventilation",
  "sections": [
    {
      "id": "c3s1",
      "shortTitle": "3.1 Airway Anatomy & Physiology",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Airway Anatomy & Physiology",
        "lead": "Air has to travel from the nose and mouth to the alveoli. In an unresponsive patient the tongue is the usual blocker, and children are built differently. Know where each problem sits and you know which fix to reach for.",
        "sections": [
          {
            "type": "table",
            "title": "From nose to alveoli",
            "icon": "wind",
            "columns": [
              "Part",
              "What it does",
              "What can go wrong"
            ],
            "rows": [
              {
                "group": "Upper airway"
              },
              [
                "Nose and mouth",
                "Warm, humidify and filter air",
                "Blood, vomit, swelling"
              ],
              [
                "Pharynx",
                "Shared path for air and food",
                "The tongue falls back here when tone is lost"
              ],
              [
                "Epiglottis",
                "Covers the glottis when swallowing",
                "Swelling (epiglottitis) blocks the inlet"
              ],
              [
                "Larynx and vocal cords",
                "Narrowest point of the adult airway",
                "Spasm, swelling, foreign body"
              ],
              {
                "group": "Lower airway"
              },
              [
                "Trachea → carina",
                "Splits into the two mainstem bronchi",
                "The right bronchus is more vertical: objects and deep tubes go right"
              ],
              [
                "Bronchioles",
                "Carry air to the alveoli",
                "Bronchospasm (wheeze)"
              ],
              [
                "Alveoli",
                "Gas exchange: O₂ in, CO₂ out",
                "Fluid, collapse, infection"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Children are not small adults",
            "icon": "baby",
            "stack": true,
            "columns": [
              "",
              "Adult",
              "Infant / young child",
              "So you…"
            ],
            "rows": [
              [
                "Tongue",
                "Proportionate",
                "Large for the mouth",
                "Expect obstruction early"
              ],
              [
                "Occiput",
                "Flat",
                "Large: flexes the neck when supine",
                "Pad under the shoulders"
              ],
              [
                "Narrowest point",
                "Vocal cords",
                "Cricoid, below the cords",
                "Gentle, correct-size equipment"
              ],
              [
                "Breathing",
                "Mouth or nose",
                "Infants prefer the nose",
                "Suction a blocked nose"
              ],
              [
                "Normal rate",
                "12–20 breaths/min",
                "Infant 30–53; toddler 22–37",
                "Compare with age, not adult norms"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Open the airway",
            "icon": "hand",
            "steps": [
              {
                "title": "Head-tilt / chin-lift",
                "text": "No suspected spinal injury: lifts the tongue off the back of the pharynx."
              },
              {
                "title": "Jaw thrust",
                "text": "Suspected spinal injury: open the airway without moving the neck."
              },
              {
                "title": "Then keep it open",
                "text": "Adjunct, positioning and suction (3.4, 3.7)."
              }
            ]
          },
          {
            "type": "tools",
            "title": "See it",
            "icon": "monitor",
            "groups": [
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "BLS course",
                    "sub": "Airway and rescue breathing practice",
                    "href": "../pages/bls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "PALS course",
                    "sub": "Pediatric airway differences",
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
          "q": "In an unresponsive supine patient, the most common airway obstruction is:",
          "options": [
            "The tongue",
            "Vomit",
            "Blood",
            "Dentures"
          ],
          "correct": 0,
          "explanation": "With lost muscle tone the tongue falls back against the posterior pharynx."
        },
        {
          "q": "Gas exchange between the lungs and the blood happens in the:",
          "options": [
            "Alveoli",
            "Trachea",
            "Bronchioles",
            "Larynx"
          ],
          "correct": 0,
          "explanation": "Across the thin alveolar-capillary membrane."
        },
        {
          "q": "In a young child, the narrowest part of the airway is the:",
          "options": [
            "Cricoid, below the vocal cords",
            "Vocal cords",
            "Carina",
            "Nostrils"
          ],
          "correct": 0,
          "explanation": "In adults it is the vocal cords."
        },
        {
          "q": "Which structure covers the glottis during swallowing?",
          "options": [
            "Epiglottis",
            "Uvula",
            "Carina",
            "Thyroid cartilage"
          ],
          "correct": 0,
          "explanation": "It directs food into the esophagus."
        },
        {
          "q": "An ET tube advanced too far usually enters the:",
          "options": [
            "Right mainstem bronchus",
            "Left mainstem bronchus",
            "Esophagus",
            "Stomach"
          ],
          "correct": 0,
          "explanation": "The right bronchus is shorter, wider and more vertical."
        },
        {
          "q": "Which manoeuvre opens the airway without moving the neck?",
          "options": [
            "Jaw thrust",
            "Head-tilt/chin-lift",
            "Neck extension with a towel",
            "Recovery position"
          ],
          "correct": 0,
          "explanation": "Use it when a spinal injury is suspected."
        },
        {
          "q": "How do you keep an infant's airway neutral when lying flat?",
          "options": [
            "Pad under the shoulders",
            "Pad under the head",
            "Hyperextend the neck",
            "Flex the chin to the chest"
          ],
          "correct": 0,
          "explanation": "The large occiput flexes the neck."
        },
        {
          "q": "Normal adult respiratory rate?",
          "options": [
            "12–20 breaths/min",
            "8–10 breaths/min",
            "20–30 breaths/min",
            "30–40 breaths/min"
          ],
          "correct": 0,
          "explanation": "Compare children with their age range."
        },
        {
          "q": "Why does a small amount of swelling matter more in a child?",
          "options": [
            "The airway is narrower, so resistance rises steeply",
            "Children have more mucus",
            "Children breathe slower",
            "It doesn't"
          ],
          "correct": 0,
          "explanation": "Small changes in radius have a large effect on airflow."
        },
        {
          "q": "Normal respiratory rate for an infant?",
          "options": [
            "30–53 breaths/min",
            "12–20 breaths/min",
            "18–25 breaths/min",
            "60–80 breaths/min"
          ],
          "correct": 0,
          "explanation": "Toddler 22–37; adult 12–20."
        }
      ],
      "flashcards": [
        {
          "question": "Commonest airway obstruction (unresponsive, supine)",
          "answer": "The tongue falling back against the posterior pharynx.",
          "category": "Anatomy"
        },
        {
          "question": "Epiglottis",
          "answer": "Covers the glottis during swallowing, keeping food out of the trachea.",
          "category": "Anatomy"
        },
        {
          "question": "Where is gas exchanged?",
          "answer": "In the alveoli, across the alveolar-capillary membrane (O₂ in, CO₂ out).",
          "category": "Anatomy"
        },
        {
          "question": "Why do aspirated objects go right?",
          "answer": "The right mainstem bronchus is shorter, wider and more vertical.",
          "category": "Anatomy"
        },
        {
          "question": "Narrowest point of the airway",
          "answer": "Adult: vocal cords. Young child: the cricoid, below the cords.",
          "category": "Anatomy"
        },
        {
          "question": "Child's tongue",
          "answer": "Large for the mouth, so it obstructs easily.",
          "category": "Anatomy"
        },
        {
          "question": "Keeping a small child's airway neutral",
          "answer": "Pad under the shoulders to offset the large occiput.",
          "category": "Anatomy"
        },
        {
          "question": "Head-tilt/chin-lift vs jaw thrust",
          "answer": "Jaw thrust when spinal injury is suspected; otherwise head-tilt/chin-lift.",
          "category": "Anatomy"
        }
      ],
      "critical": [
        {
          "id": "crit_3_1_1",
          "scenario": "An unresponsive adult is supine and snoring loudly with each breath. SpO₂ 90%.",
          "question": "Most likely cause and first action?",
          "options": [
            {
              "t": "The tongue: open the airway with a head-tilt/chin-lift",
              "f": "Correct. Snoring is soft-tissue obstruction."
            },
            {
              "t": "Fluid: suction immediately",
              "f": "Fluid gurgles; snoring is the tongue."
            },
            {
              "t": "Bronchospasm: give a bronchodilator",
              "f": "Wheeze, not snoring, suggests bronchospasm."
            },
            {
              "t": "Start chest compressions",
              "f": "He is breathing."
            }
          ],
          "correct": 0,
          "explanation": "Then consider an adjunct to keep it open.",
          "kpi": "Recognizes tongue obstruction and performs a manual airway maneuver"
        },
        {
          "id": "crit_3_1_2",
          "scenario": "A 2-year-old is unresponsive. A new provider puts a folded towel under the child's head, as for an adult.",
          "question": "What's the problem?",
          "options": [
            {
              "t": "It flexes the neck and can block the airway: pad under the shoulders instead",
              "f": "Correct."
            },
            {
              "t": "Nothing: that's correct",
              "f": "The large occiput already flexes the neck."
            },
            {
              "t": "The towel should be thicker",
              "f": "That makes flexion worse."
            },
            {
              "t": "Children need full neck extension",
              "f": "Aim for neutral."
            }
          ],
          "correct": 0,
          "explanation": "Neutral position for infants and small children.",
          "kpi": "Applies age-appropriate airway positioning"
        },
        {
          "id": "crit_3_1_3",
          "scenario": "After an intubation, breath sounds are heard only over the right chest.",
          "question": "Most likely explanation?",
          "options": [
            {
              "t": "The tube is in the right mainstem bronchus",
              "f": "Correct: it's straighter, so deep tubes go right."
            },
            {
              "t": "Left tension pneumothorax, certainly",
              "f": "Possible, but a deep tube is the commonest cause."
            },
            {
              "t": "Esophageal intubation",
              "f": "That gives no breath sounds on either side."
            },
            {
              "t": "Normal finding",
              "f": "Breath sounds should be equal."
            }
          ],
          "correct": 0,
          "explanation": "Pull back carefully and reassess; confirm with capnography.",
          "kpi": "Recognizes right mainstem intubation from unilateral breath sounds"
        }
      ]
    },
    {
      "id": "c3s2",
      "shortTitle": "3.2 Airway Assessment",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Airway Assessment",
        "lead": "Look, listen and feel, then act on what you hear. Each airway sound points to a cause and a fix. Agitation is an early sign of hypoxia and cyanosis a late one, so don't wait for blue.",
        "sections": [
          {
            "type": "table",
            "title": "Hear it, fix it",
            "icon": "stethoscope",
            "columns": [
              "Sound",
              "Means",
              "Do"
            ],
            "rows": [
              [
                "Snoring",
                "Tongue / soft tissue",
                "Reposition; OPA or NPA"
              ],
              [
                "Gurgling",
                "Fluid: blood, vomit, secretions",
                "Suction now"
              ],
              [
                "Stridor (high-pitched, inspiratory)",
                "Upper airway narrowing: swelling, croup, foreign body",
                "Oxygen, calm, rapid transport; prepare for obstruction"
              ],
              [
                "Wheeze (expiratory)",
                "Lower airway bronchospasm",
                "Bronchodilator per protocol"
              ],
              [
                "Silence with effort",
                "No air moving",
                "Act now: open the airway, ventilate"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Is breathing adequate?",
            "icon": "eye",
            "groups": [
              {
                "title": "Work of breathing",
                "items": [
                  "Accessory muscles, retractions, nasal flaring",
                  "Tripod position; 1–2 word sentences",
                  "See-saw (paradoxical) movement"
                ]
              },
              {
                "title": "Rate and rhythm",
                "items": [
                  "Adult normal 12–20 breaths/min",
                  "Too fast, too slow, irregular or shallow",
                  "Compare children with age norms (3.1)"
                ]
              },
              {
                "title": "Oxygenation",
                "items": [
                  "Early hypoxia: restless, anxious, fast heart rate",
                  "Late: cyanosis, slowing heart rate (children), drowsiness",
                  "SpO₂ normal 94–98%; unreliable with poor perfusion or CO poisoning"
                ]
              }
            ]
          },
          {
            "type": "tools",
            "title": "Hear and see the patterns",
            "icon": "monitor",
            "groups": [
              {
                "title": "Respiratory patterns",
                "items": [
                  {
                    "label": "Kussmaul",
                    "sub": "Deep and fast: metabolic acidosis (DKA)",
                    "href": "../pages/respiratory-patterns.html?p=kussmaul",
                    "icon": "wind"
                  },
                  {
                    "label": "Cheyne-Stokes",
                    "sub": "Waxing and waning with pauses: brain injury, heart failure",
                    "href": "../pages/respiratory-patterns.html?p=cheyneStokes",
                    "icon": "wind"
                  },
                  {
                    "label": "Ataxic (Biot)",
                    "sub": "Irregular: brainstem injury",
                    "href": "../pages/respiratory-patterns.html?p=ataxic",
                    "icon": "wind"
                  },
                  {
                    "label": "Agonal gasps",
                    "sub": "Cardiac arrest: start CPR",
                    "href": "../pages/respiratory-patterns.html?p=agonal",
                    "icon": "wind"
                  },
                  {
                    "label": "Paradoxical",
                    "sub": "Chest and abdomen move in opposite directions",
                    "href": "../pages/respiratory-patterns.html?p=paradoxical",
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
          "q": "Gurgling respirations are best managed by:",
          "options": [
            "Suction",
            "High-flow oxygen",
            "An oropharyngeal airway",
            "Chest compressions"
          ],
          "correct": 0,
          "explanation": "Gurgling means fluid in the airway."
        },
        {
          "q": "High-pitched inspiratory stridor suggests:",
          "options": [
            "Upper airway narrowing or swelling",
            "Lower airway bronchospasm",
            "Normal breathing",
            "Hyperventilation"
          ],
          "correct": 0,
          "explanation": "A true airway emergency."
        },
        {
          "q": "Earliest sign of hypoxia?",
          "options": [
            "Restlessness or anxiety",
            "Cyanosis",
            "Bradycardia",
            "Cardiac arrest"
          ],
          "correct": 0,
          "explanation": "Cyanosis is late."
        },
        {
          "q": "Snoring respirations: first fix?",
          "options": [
            "Reposition the airway",
            "Suction",
            "Bronchodilator",
            "Cricoid pressure"
          ],
          "correct": 0,
          "explanation": "Then an adjunct."
        },
        {
          "q": "Wheeze is usually heard on:",
          "options": [
            "Expiration, from lower airway narrowing",
            "Inspiration, from the larynx",
            "Only in children",
            "Only with fluid in the airway"
          ],
          "correct": 0,
          "explanation": "Stridor is the inspiratory, upper-airway sound."
        },
        {
          "q": "SpO₂ reads 99% in a patient pulled from a house fire with headache and confusion. Why be cautious?",
          "options": [
            "Carbon monoxide gives a falsely normal reading",
            "The probe is always wrong in fires",
            "99% is too low",
            "SpO₂ can't be measured in adults"
          ],
          "correct": 0,
          "explanation": "Treat the patient, not the number: high-flow oxygen."
        },
        {
          "q": "Deep, rapid breathing in a patient with high blood sugar and fruity breath is:",
          "options": [
            "Kussmaul breathing",
            "Cheyne-Stokes",
            "Agonal breathing",
            "Apneustic breathing"
          ],
          "correct": 0,
          "explanation": "Compensation for metabolic acidosis (DKA)."
        },
        {
          "q": "Occasional gasps in an unresponsive patient with no pulse:",
          "options": [
            "Agonal breathing: start CPR",
            "Adequate breathing: monitor",
            "Kussmaul: give fluids",
            "Normal sleep breathing"
          ],
          "correct": 0,
          "explanation": "Agonal gasps are not effective breathing."
        },
        {
          "q": "Which is a sign of increased work of breathing?",
          "options": [
            "Speaking in 1–2 word sentences",
            "Normal speech",
            "Rate of 14 breaths/min",
            "Pink skin"
          ],
          "correct": 0,
          "explanation": "Also tripod position, retractions, nasal flaring."
        },
        {
          "q": "Normal SpO₂ on room air?",
          "options": [
            "94–98%",
            "80–85%",
            "88–92% for everyone",
            "100% only"
          ],
          "correct": 0,
          "explanation": "88–92% is the target for COPD retainers, not normal."
        }
      ],
      "flashcards": [
        {
          "question": "Snoring",
          "answer": "Tongue / soft tissue: reposition and consider an adjunct.",
          "category": "Assessment"
        },
        {
          "question": "Gurgling",
          "answer": "Fluid in the airway: suction now.",
          "category": "Assessment"
        },
        {
          "question": "Stridor",
          "answer": "Upper airway narrowing (anaphylaxis, croup, epiglottitis, foreign body): a true emergency.",
          "category": "Assessment"
        },
        {
          "question": "Stridor vs wheeze",
          "answer": "Stridor: upper airway, inspiratory. Wheeze: lower airway bronchospasm, expiratory.",
          "category": "Assessment"
        },
        {
          "question": "Earliest sign of hypoxia",
          "answer": "Restlessness, anxiety or altered mental status; cyanosis is late.",
          "category": "Assessment"
        },
        {
          "question": "Signs of inadequate breathing",
          "answer": "Accessory muscles, retractions, 1–2 word speech, abnormal rate or depth, nasal flaring, tripod position.",
          "category": "Assessment"
        },
        {
          "question": "Calm and sleepy after agitation",
          "answer": "May be worsening hypoxia and impending respiratory failure, not improvement.",
          "category": "Assessment"
        },
        {
          "question": "When is SpO₂ misleading?",
          "answer": "Poor perfusion, cold hands, and carbon monoxide poisoning (falsely normal).",
          "category": "Assessment"
        },
        {
          "question": "Kussmaul breathing",
          "answer": "Deep and rapid: compensation for metabolic acidosis, e.g. DKA.",
          "category": "Assessment"
        }
      ],
      "critical": [
        {
          "id": "crit_3_2_1",
          "scenario": "During a severe allergic reaction, a woman's voice becomes hoarse and she develops high-pitched inspiratory stridor.",
          "question": "What does this mean?",
          "options": [
            {
              "t": "Impending airway obstruction from swelling: a critical emergency",
              "f": "Correct: treat anaphylaxis and prepare for airway compromise."
            },
            {
              "t": "Mild bronchospasm",
              "f": "Stridor is upper airway."
            },
            {
              "t": "Anxiety",
              "f": "Never assume anxiety with stridor."
            },
            {
              "t": "Normal for allergies",
              "f": "It's an airway threat."
            }
          ],
          "correct": 0,
          "explanation": "Upper airway swelling can close the airway quickly.",
          "kpi": "Recognizes anaphylactic airway swelling as a critical threat"
        },
        {
          "id": "crit_3_2_2",
          "scenario": "A restless, anxious trauma patient has clear lungs and SpO₂ 96%.",
          "question": "What should you consider?",
          "options": [
            {
              "t": "Early hypoxia or shock: reassess airway, breathing and perfusion",
              "f": "Correct."
            },
            {
              "t": "Only anxiety: reassure",
              "f": "Restlessness can be early hypoxia."
            },
            {
              "t": "Nothing: SpO₂ is normal",
              "f": "SpO₂ can lag or mislead with poor perfusion."
            },
            {
              "t": "Sedate him",
              "f": "Find the cause first."
            }
          ],
          "correct": 0,
          "explanation": "Treat the patient, not the number.",
          "kpi": "Treats altered mental status as a possible early hypoxia sign"
        },
        {
          "id": "crit_3_2_3",
          "scenario": "An asthmatic who was wheezing loudly is now quiet, drowsy, with a barely audible chest.",
          "question": "What does the silent chest mean?",
          "options": [
            {
              "t": "Severe airflow limitation and impending respiratory failure",
              "f": "Correct."
            },
            {
              "t": "The attack is resolving",
              "f": "Silence with fatigue is ominous."
            },
            {
              "t": "Mild asthma",
              "f": "It's life-threatening."
            },
            {
              "t": "She is asleep",
              "f": "Drowsiness is a failure sign."
            }
          ],
          "correct": 0,
          "explanation": "Assist ventilation and transport rapidly.",
          "kpi": "Recognizes the silent chest as a sign of decompensation"
        }
      ]
    },
    {
      "id": "c3s3",
      "shortTitle": "3.3 Foreign Body Airway Obstruction (FBAO)",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Choking (Foreign Body Airway Obstruction)",
        "lead": "Decide whether the cough is effective or not. If it is, leave it alone. If it isn't, act at once with back blows and thrusts, chosen by age and body type. If the patient goes limp, start CPR and look in the mouth each time you open the airway.",
        "sections": [
          {
            "type": "gate",
            "title": "Is the cough effective?",
            "icon": "triangle-alert",
            "question": "Can they cough forcefully, speak or cry?",
            "yes": "Mild obstruction: encourage coughing, don't interfere, monitor and transport.",
            "no": "Severe obstruction (silent or weak cough, can't speak, stridor, cyanosis): act now."
          },
          {
            "type": "pathways",
            "title": "Severe obstruction: by patient",
            "icon": "hand",
            "paths": [
              {
                "title": "Adult or child over 1 year",
                "tone": "shock",
                "steps": [
                  {
                    "text": "5 back blows between the shoulder blades, leaning them forward."
                  },
                  {
                    "text": "5 abdominal thrusts."
                  },
                  {
                    "text": "Repeat 5 + 5 until it clears or they become unresponsive."
                  },
                  {
                    "text": "Late pregnancy or obese: chest thrusts instead of abdominal thrusts."
                  }
                ]
              },
              {
                "title": "Infant under 1 year",
                "tone": "noshock",
                "steps": [
                  {
                    "text": "Head down along your forearm: 5 back blows."
                  },
                  {
                    "text": "Turn over: 5 chest thrusts (two fingers, lower sternum)."
                  },
                  {
                    "text": "Repeat 5 + 5. Never abdominal thrusts."
                  }
                ]
              }
            ],
            "after": "Becomes unresponsive: lower to the ground and start CPR. Each time you open the airway, look in the mouth and remove an object only if you can see it. No blind finger sweeps."
          },
          {
            "type": "list",
            "title": "After it clears",
            "icon": "clipboard-list",
            "items": [
              "Anyone who needed abdominal thrusts should be checked for internal injury.",
              "Persistent cough, difficulty swallowing or the feeling something is still there: assess in hospital."
            ]
          },
          {
            "type": "tools",
            "title": "Practice",
            "icon": "monitor",
            "groups": [
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "AHA algorithms",
                    "sub": "Adult and pediatric choking algorithms",
                    "href": "../pages/aha.html",
                    "icon": "activity"
                  },
                  {
                    "label": "BLS course",
                    "sub": "Choking and CPR practice questions",
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
          "q": "A choking adult is coughing forcefully and can still speak. You should:",
          "options": [
            "Encourage coughing and monitor",
            "Start abdominal thrusts",
            "Do a blind finger sweep",
            "Start CPR"
          ],
          "correct": 0,
          "explanation": "Mild obstruction: don't interfere."
        },
        {
          "q": "A responsive choking 6-month-old with a silent cough:",
          "options": [
            "5 back blows, then 5 chest thrusts",
            "Abdominal thrusts",
            "Blind finger sweep",
            "A single sharp slap"
          ],
          "correct": 0,
          "explanation": "Never abdominal thrusts in infants."
        },
        {
          "q": "A choking adult becomes unresponsive. Next step?",
          "options": [
            "Lower them to the ground and start CPR, looking in the mouth before breaths",
            "Keep doing standing thrusts",
            "Deep blind finger sweep",
            "Wait for ALS"
          ],
          "correct": 0,
          "explanation": "Remove an object only if visible."
        },
        {
          "q": "Severe obstruction in a responsive adult: current AHA/ERC sequence?",
          "options": [
            "5 back blows, then 5 abdominal thrusts, repeated",
            "Abdominal thrusts only",
            "Chest compressions while standing",
            "Back blows only, up to 20"
          ],
          "correct": 0,
          "explanation": "Repeat until it clears or they become unresponsive."
        },
        {
          "q": "A woman in late pregnancy is choking and can't speak. Instead of abdominal thrusts, use:",
          "options": [
            "Chest thrusts",
            "Leg raise",
            "Blind finger sweep",
            "Nothing: wait"
          ],
          "correct": 0,
          "explanation": "Same for obese patients."
        },
        {
          "q": "Why avoid blind finger sweeps?",
          "options": [
            "They can push the object deeper",
            "They are too slow",
            "They hurt the rescuer",
            "They are only for infants"
          ],
          "correct": 0,
          "explanation": "Remove only what you can see."
        },
        {
          "q": "Which sign shows severe obstruction?",
          "options": [
            "Silent or weak cough and unable to speak",
            "Loud forceful cough",
            "Talking between coughs",
            "Crying loudly"
          ],
          "correct": 0,
          "explanation": "Also stridor and cyanosis."
        },
        {
          "q": "After successful abdominal thrusts, the patient feels fine. What do you advise?",
          "options": [
            "Medical assessment for internal injury",
            "Nothing more needed",
            "Drink water and go home",
            "Repeat thrusts to be sure"
          ],
          "correct": 0,
          "explanation": "Thrusts can injure internal organs."
        },
        {
          "q": "Universal sign of choking?",
          "options": [
            "Hands clutching the throat",
            "Pointing at the chest",
            "Raising both arms",
            "Coughing loudly"
          ],
          "correct": 0,
          "explanation": "Ask: 'Are you choking?'"
        },
        {
          "q": "Infant chest thrusts are given:",
          "options": [
            "With two fingers on the lower half of the sternum",
            "With a fist on the abdomen",
            "With the heel of the hand on the back",
            "On the upper abdomen"
          ],
          "correct": 0,
          "explanation": "Alternating with 5 back blows."
        }
      ],
      "flashcards": [
        {
          "question": "Universal choking sign",
          "answer": "Both hands clutching the throat, unable to speak or cough effectively.",
          "category": "FBAO"
        },
        {
          "question": "Mild obstruction",
          "answer": "Effective cough: encourage coughing, do not interfere, monitor.",
          "category": "FBAO"
        },
        {
          "question": "Severe obstruction, adult or child over 1 year",
          "answer": "5 back blows then 5 abdominal thrusts, repeated until relieved or unresponsive.",
          "category": "FBAO"
        },
        {
          "question": "Severe obstruction, infant under 1 year",
          "answer": "5 back blows then 5 chest thrusts; never abdominal thrusts.",
          "category": "FBAO"
        },
        {
          "question": "Late pregnancy or obese",
          "answer": "Chest thrusts instead of abdominal thrusts.",
          "category": "FBAO"
        },
        {
          "question": "Becomes unresponsive",
          "answer": "Lower to the ground and start CPR; look in the mouth whenever you open the airway; remove only a visible object.",
          "category": "FBAO"
        },
        {
          "question": "Blind finger sweeps",
          "answer": "No: they can push the object deeper.",
          "category": "FBAO"
        },
        {
          "question": "After abdominal thrusts",
          "answer": "Check for internal injury, even if the patient feels well.",
          "category": "FBAO"
        }
      ],
      "critical": [
        {
          "id": "crit_3_3_1",
          "scenario": "At a restaurant a man stands up, clutches his throat, can't speak and is turning blue.",
          "question": "Immediate action?",
          "options": [
            {
              "t": "5 back blows, then 5 abdominal thrusts; repeat until it clears",
              "f": "Correct: severe obstruction."
            },
            {
              "t": "Encourage him to cough",
              "f": "He can't cough effectively."
            },
            {
              "t": "Blind finger sweep",
              "f": "Never blind."
            },
            {
              "t": "Lay him down and start CPR",
              "f": "He is still responsive."
            }
          ],
          "correct": 0,
          "explanation": "Current AHA/ERC sequence for adults.",
          "kpi": "Differentiates mild from severe FBAO and acts appropriately"
        },
        {
          "id": "crit_3_3_2",
          "scenario": "A woman 30 weeks pregnant is choking on food, can't speak and is panicking.",
          "question": "Which technique?",
          "options": [
            {
              "t": "Back blows, then chest thrusts instead of abdominal thrusts",
              "f": "Correct."
            },
            {
              "t": "Abdominal thrusts",
              "f": "Not in late pregnancy."
            },
            {
              "t": "Wait for her to cough it out",
              "f": "She can't."
            },
            {
              "t": "Blind finger sweep",
              "f": "Never blind."
            }
          ],
          "correct": 0,
          "explanation": "Same adaptation for obese patients.",
          "kpi": "Selects chest thrusts for the pregnant choking patient"
        },
        {
          "id": "crit_3_3_3",
          "scenario": "You are giving back blows to a choking infant. The infant goes limp.",
          "question": "What next?",
          "options": [
            {
              "t": "Start infant CPR; look in the mouth each time you open the airway and remove the object only if visible",
              "f": "Correct."
            },
            {
              "t": "Abdominal thrusts",
              "f": "Never in infants."
            },
            {
              "t": "Keep giving back blows only",
              "f": "Unresponsive: CPR."
            },
            {
              "t": "Blind finger sweep",
              "f": "Never blind."
            }
          ],
          "correct": 0,
          "explanation": "Compressions may dislodge the object.",
          "kpi": "Transitions to CPR for the unresponsive choking infant"
        }
      ]
    },
    {
      "id": "c3s4",
      "shortTitle": "3.4 Airway Adjuncts",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Airway Adjuncts",
        "lead": "Open the airway by hand first. An adjunct then holds the tongue out of the way. Choose an OPA or NPA by the gag reflex, size it on the patient, and keep suction ready, because an adjunct doesn't protect against aspiration.",
        "sections": [
          {
            "type": "table",
            "title": "OPA or NPA?",
            "icon": "clipboard-list",
            "stack": true,
            "columns": [
              "",
              "Oropharyngeal (OPA)",
              "Nasopharyngeal (NPA)"
            ],
            "rows": [
              [
                "Use when",
                "Unresponsive, no gag reflex",
                "Gag reflex present; semi-conscious; clenched jaw"
              ],
              [
                "Size",
                "Corner of the mouth to the angle of the jaw",
                "Tip of the nose to the earlobe; width of the nostril"
              ],
              [
                "Insert",
                "Adult: upside down, rotate 180°. Child: right way up with a tongue depressor",
                "Lubricate; bevel toward the septum; larger nostril"
              ],
              [
                "Avoid",
                "Any gag reflex: vomiting and aspiration",
                "Suspected basal skull fracture or severe midface trauma"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Get it right",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Wrong size",
                "items": [
                  "Too long: pushes the epiglottis over the glottis",
                  "Too short: pushes the tongue back into the airway"
                ]
              },
              {
                "title": "Gagging",
                "items": [
                  "Remove the OPA at once, suction ready; consider an NPA"
                ]
              },
              {
                "title": "Basal skull fracture signs",
                "items": [
                  "Raccoon eyes, Battle's sign, clear fluid (CSF) from the nose or ears: no NPA"
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "An OPA should only be used in a patient who:",
          "options": [
            "Is unresponsive with no gag reflex",
            "Has an intact gag reflex",
            "Is alert and talking",
            "Has facial trauma"
          ],
          "correct": 0,
          "explanation": "A gag reflex means vomiting risk."
        },
        {
          "q": "Contraindication to an NPA?",
          "options": [
            "Suspected basal skull fracture",
            "Snoring respirations",
            "Unresponsiveness",
            "An intact gag reflex"
          ],
          "correct": 0,
          "explanation": "It could pass into the cranial vault."
        },
        {
          "q": "The patient gags during OPA insertion. You should:",
          "options": [
            "Remove it and be ready to suction",
            "Push it in further",
            "Tape it in place",
            "Insert a second OPA"
          ],
          "correct": 0,
          "explanation": "Consider an NPA instead."
        },
        {
          "q": "How is an OPA sized?",
          "options": [
            "Corner of the mouth to the angle of the jaw",
            "Tip of the nose to the earlobe",
            "Chin to sternum",
            "By the patient's age only"
          ],
          "correct": 0,
          "explanation": "NPA: nose tip to earlobe."
        },
        {
          "q": "How is an NPA sized?",
          "options": [
            "Tip of the nose to the earlobe",
            "Corner of the mouth to the jaw angle",
            "Width of the mouth",
            "Length of the index finger"
          ],
          "correct": 0,
          "explanation": "Diameter roughly that of the nostril."
        },
        {
          "q": "NPA bevel should face:",
          "options": [
            "The septum",
            "The cheek",
            "The floor of the nose",
            "Any direction"
          ],
          "correct": 0,
          "explanation": "Lubricate; use the larger nostril."
        },
        {
          "q": "Adult OPA insertion technique:",
          "options": [
            "Upside down, then rotate 180°",
            "Sideways and leave it",
            "Right way up without a tongue depressor, always",
            "Through the nose"
          ],
          "correct": 0,
          "explanation": "Children: right way up with a tongue depressor."
        },
        {
          "q": "An OPA that is too long can:",
          "options": [
            "Push the epiglottis over the glottis",
            "Improve ventilation",
            "Protect against aspiration",
            "Nothing"
          ],
          "correct": 0,
          "explanation": "Too short pushes the tongue back."
        },
        {
          "q": "Do adjuncts protect against aspiration?",
          "options": [
            "No: keep suction ready",
            "Yes, completely",
            "Only NPAs do",
            "Only in children"
          ],
          "correct": 0,
          "explanation": "They only hold the airway open."
        },
        {
          "q": "A semi-conscious patient with a clenched jaw and snoring needs an adjunct. Best choice?",
          "options": [
            "NPA (no facial trauma)",
            "OPA",
            "No adjunct ever",
            "Blind finger sweep"
          ],
          "correct": 0,
          "explanation": "NPA is tolerated with a gag reflex."
        }
      ],
      "flashcards": [
        {
          "question": "OPA contraindication",
          "answer": "An intact gag reflex: it can cause vomiting and aspiration.",
          "category": "Adjuncts"
        },
        {
          "question": "OPA sizing",
          "answer": "Corner of the mouth to the angle of the jaw (or earlobe).",
          "category": "Adjuncts"
        },
        {
          "question": "Adult OPA insertion",
          "answer": "Upside down (tip to the palate), then rotate 180° as it is advanced.",
          "category": "Adjuncts"
        },
        {
          "question": "When an NPA instead of an OPA",
          "answer": "Gag reflex present but the patient still needs help keeping the airway open.",
          "category": "Adjuncts"
        },
        {
          "question": "NPA contraindication",
          "answer": "Suspected basal skull fracture or significant midface trauma.",
          "category": "Adjuncts"
        },
        {
          "question": "NPA sizing",
          "answer": "Length: nose tip to earlobe. Diameter: about the nostril.",
          "category": "Adjuncts"
        },
        {
          "question": "Do adjuncts prevent aspiration?",
          "answer": "No: they hold the airway open but don't seal it. Keep suction ready.",
          "category": "Adjuncts"
        },
        {
          "question": "Wrong-size OPA",
          "answer": "Too long: pushes the epiglottis down. Too short: pushes the tongue back.",
          "category": "Adjuncts"
        }
      ],
      "critical": [
        {
          "id": "crit_3_4_1",
          "scenario": "You insert an OPA in a semi-conscious overdose patient. He gags and starts to retch.",
          "question": "Action?",
          "options": [
            {
              "t": "Remove the OPA, be ready to suction, consider an NPA",
              "f": "Correct."
            },
            {
              "t": "Push it further in",
              "f": "Vomiting risk."
            },
            {
              "t": "Tape it in place",
              "f": "He can't tolerate it."
            },
            {
              "t": "Insert a larger OPA",
              "f": "Still a gag reflex."
            }
          ],
          "correct": 0,
          "explanation": "A gag reflex means NPA, not OPA.",
          "kpi": "Selects the correct adjunct based on gag reflex"
        },
        {
          "id": "crit_3_4_2",
          "scenario": "A patient with facial trauma, raccoon eyes and clear fluid from the nose needs an adjunct.",
          "question": "Which?",
          "options": [
            {
              "t": "OPA if there's no gag reflex; avoid the NPA",
              "f": "Correct: suspected basal skull fracture."
            },
            {
              "t": "NPA in the larger nostril",
              "f": "Contraindicated."
            },
            {
              "t": "Two NPAs",
              "f": "Contraindicated."
            },
            {
              "t": "No airway management",
              "f": "He still needs an airway."
            }
          ],
          "correct": 0,
          "explanation": "Raccoon eyes and CSF suggest a basal skull fracture.",
          "kpi": "Applies NPA contraindication in suspected skull fracture"
        },
        {
          "id": "crit_3_4_3",
          "scenario": "After inserting an OPA, the snoring gets worse and air movement falls.",
          "question": "Most likely problem?",
          "options": [
            {
              "t": "Wrong size or position, pushing the tongue back",
              "f": "Correct: remove, resize, reinsert."
            },
            {
              "t": "It's working",
              "f": "Worse snoring means worse obstruction."
            },
            {
              "t": "Bronchospasm",
              "f": "No wheeze."
            },
            {
              "t": "Normal after insertion",
              "f": "No."
            }
          ],
          "correct": 0,
          "explanation": "Re-size from the corner of the mouth to the angle of the jaw.",
          "kpi": "Troubleshoots a malpositioned airway adjunct"
        }
      ]
    },
    {
      "id": "c3s5",
      "shortTitle": "3.5 Oxygen Therapy",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Oxygen Therapy",
        "lead": "Oxygen is a drug, so give it to a target rather than to everyone. Aim for 94–98%, or 88–92% if the patient is at risk of CO₂ retention. Never withhold it from a critically hypoxic patient.",
        "sections": [
          {
            "type": "table",
            "title": "Targets",
            "icon": "target",
            "columns": [
              "Patient",
              "Target SpO₂"
            ],
            "rows": [
              [
                "Most acutely ill patients",
                "94–98%"
              ],
              [
                "At risk of CO₂ retention (e.g. COPD)",
                "88–92%"
              ],
              [
                "Normal SpO₂ and not breathless (e.g. uncomplicated chest pain, stroke)",
                "No supplemental oxygen"
              ]
            ],
            "notes": [
              "Critically hypoxic COPD patient: treat the hypoxia first, then titrate down to 88–92%, watching rate and mental status."
            ]
          },
          {
            "type": "table",
            "title": "Choose the device",
            "icon": "wind",
            "columns": [
              "Device",
              "Flow",
              "About",
              "For"
            ],
            "rows": [
              [
                "Nasal cannula",
                "1–6 L/min",
                "24–44%",
                "Mild hypoxia; won't tolerate a mask"
              ],
              [
                "Simple face mask",
                "6–10 L/min",
                "40–60%",
                "Moderate hypoxia (at least 6 L/min to flush CO₂)"
              ],
              [
                "Non-rebreather",
                "10–15 L/min",
                "60–90%",
                "Severe hypoxia; keep the reservoir inflated"
              ],
              [
                "BVM + reservoir",
                "15 L/min",
                "Close to 100%",
                "Inadequate or absent breathing: it ventilates"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Safety",
            "icon": "triangle-alert",
            "items": [
              "Oxygen feeds fire: no smoking or open flame nearby.",
              "Cylinders are under high pressure: secure them and protect the valve."
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Tools",
                "items": [
                  {
                    "label": "O₂ duration calculator",
                    "sub": "How long will this cylinder last?",
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
          "q": "Target SpO₂ for a general medical patient?",
          "options": [
            "94–98%",
            "88–92%",
            "100% always",
            "Below 90%"
          ],
          "correct": 0,
          "explanation": "BTS target for most acutely ill patients."
        },
        {
          "q": "Non-rebreather flow rate?",
          "options": [
            "10–15 L/min",
            "2 L/min",
            "6 L/min",
            "1 L/min"
          ],
          "correct": 0,
          "explanation": "Keep the reservoir inflated."
        },
        {
          "q": "COPD patient in mild distress, SpO₂ 90%. Target?",
          "options": [
            "88–92%",
            "100%",
            "94–98%",
            "No oxygen ever"
          ],
          "correct": 0,
          "explanation": "Risk of CO₂ retention."
        },
        {
          "q": "Nasal cannula flow range?",
          "options": [
            "1–6 L/min",
            "10–15 L/min",
            "6–10 L/min",
            "15 L/min"
          ],
          "correct": 0,
          "explanation": "About 24–44% oxygen."
        },
        {
          "q": "Why must a simple face mask run at least 6 L/min?",
          "options": [
            "To flush exhaled CO₂ out of the mask",
            "To humidify air",
            "To save oxygen",
            "It doesn't matter"
          ],
          "correct": 0,
          "explanation": "Below that the patient rebreathes CO₂."
        },
        {
          "q": "An alert chest pain patient has SpO₂ 97% on room air. Oxygen?",
          "options": [
            "Not needed: monitor",
            "High-flow NRB for all chest pain",
            "Nasal cannula at 6 L/min",
            "BVM ventilation"
          ],
          "correct": 0,
          "explanation": "Unneeded oxygen may be harmful."
        },
        {
          "q": "Critically hypoxic COPD patient, SpO₂ 78%. What do you do?",
          "options": [
            "Give oxygen, then titrate to 88–92%",
            "Withhold oxygen to protect the drive",
            "Give only 1 L/min whatever happens",
            "Wait for blood gases"
          ],
          "correct": 0,
          "explanation": "Never withhold oxygen from life-threatening hypoxia."
        },
        {
          "q": "The NRB reservoir collapses fully on each breath. Fix?",
          "options": [
            "Increase the flow until it stays inflated",
            "Remove the mask",
            "Switch to nasal cannula",
            "Nothing"
          ],
          "correct": 0,
          "explanation": "Flow is too low."
        },
        {
          "q": "Which device delivers close to 100% and ventilates?",
          "options": [
            "BVM with reservoir at 15 L/min",
            "Nasal cannula",
            "Simple mask",
            "Venturi mask at 4 L/min"
          ],
          "correct": 0,
          "explanation": "For absent or inadequate breathing."
        },
        {
          "q": "Main hazard of oxygen around a patient who smokes?",
          "options": [
            "Fire: oxygen supports combustion",
            "Explosion of the mask",
            "Hypothermia",
            "None"
          ],
          "correct": 0,
          "explanation": "No smoking or open flame."
        }
      ],
      "flashcards": [
        {
          "question": "General SpO₂ target",
          "answer": "94–98%.",
          "category": "Oxygen"
        },
        {
          "question": "Target with risk of CO₂ retention (COPD)",
          "answer": "88–92%.",
          "category": "Oxygen"
        },
        {
          "question": "Non-rebreather",
          "answer": "10–15 L/min, about 60–90%; keep the reservoir inflated.",
          "category": "Oxygen"
        },
        {
          "question": "Simple face mask minimum flow",
          "answer": "At least 6 L/min, to flush exhaled CO₂.",
          "category": "Oxygen"
        },
        {
          "question": "Nasal cannula",
          "answer": "1–6 L/min, about 24–44%.",
          "category": "Oxygen"
        },
        {
          "question": "Oxygen hazards",
          "answer": "Supports combustion; cylinders are high pressure: secure them, no flame.",
          "category": "Oxygen"
        },
        {
          "question": "Critically hypoxic COPD",
          "answer": "Never withhold: treat the hypoxia, then titrate to 88–92%.",
          "category": "Oxygen"
        },
        {
          "question": "Normal SpO₂ and not breathless",
          "answer": "No supplemental oxygen (e.g. uncomplicated chest pain or stroke).",
          "category": "Oxygen"
        }
      ],
      "critical": [
        {
          "id": "crit_3_5_1",
          "scenario": "A COPD patient (SpO₂ 86%) is put on an NRB at 15 L/min. Minutes later he is drowsy with a slowing respiratory rate.",
          "question": "Concern and action?",
          "options": [
            {
              "t": "CO₂ retention from too much oxygen: titrate to 88–92% and be ready to ventilate",
              "f": "Correct."
            },
            {
              "t": "He's comfortable: leave it",
              "f": "Drowsiness and slowing rate are danger signs."
            },
            {
              "t": "Turn the oxygen off",
              "f": "Titrate, don't stop."
            },
            {
              "t": "Give a sedative",
              "f": "No."
            }
          ],
          "correct": 0,
          "explanation": "Watch rate and mental status.",
          "kpi": "Titrates oxygen and monitors ventilation in COPD"
        },
        {
          "id": "crit_3_5_2",
          "scenario": "A critically ill trauma patient (SpO₂ 80%) is on an NRB, but the reservoir collapses with every breath.",
          "question": "What's wrong?",
          "options": [
            {
              "t": "Flow too low: increase until the reservoir stays inflated",
              "f": "Correct."
            },
            {
              "t": "Normal NRB function",
              "f": "The bag should stay partly inflated."
            },
            {
              "t": "Switch to nasal cannula",
              "f": "Less oxygen."
            },
            {
              "t": "The mask is too tight",
              "f": "Flow is the issue."
            }
          ],
          "correct": 0,
          "explanation": "10–15 L/min, reservoir inflated.",
          "kpi": "Recognizes and corrects inadequate NRB flow"
        },
        {
          "id": "crit_3_5_3",
          "scenario": "An alert chest pain patient has SpO₂ 97% on room air. A colleague wants high-flow oxygen 'because it's a heart attack'.",
          "question": "Best approach?",
          "options": [
            {
              "t": "No supplemental oxygen; monitor SpO₂",
              "f": "Correct."
            },
            {
              "t": "NRB at 15 L/min",
              "f": "Unneeded oxygen may be harmful."
            },
            {
              "t": "Nasal cannula at 6 L/min for all chest pain",
              "f": "Not indicated."
            },
            {
              "t": "BVM",
              "f": "He's breathing well."
            }
          ],
          "correct": 0,
          "explanation": "Give oxygen to a target, not by reflex.",
          "kpi": "Avoids unnecessary oxygen in a normoxic patient"
        }
      ]
    },
    {
      "id": "c3s6",
      "shortTitle": "3.6 Ventilation",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Assisted Ventilation",
        "lead": "If breathing is absent or inadequate, you breathe for the patient. Get a good seal, give small breaths at a slow rate, and stop each one when the chest rises. Faster and harder breaths make things worse, not better.",
        "sections": [
          {
            "type": "table",
            "title": "The numbers",
            "icon": "timer",
            "columns": [
              "Patient (with a pulse)",
              "Rate",
              "Each breath"
            ],
            "rows": [
              [
                "Adult",
                "1 every 6 seconds (10 breaths/min)",
                "About 1 second; visible chest rise"
              ],
              [
                "Infant or child",
                "1 every 2–3 seconds (20–30 breaths/min)",
                "About 1 second; visible chest rise"
              ]
            ],
            "notes": [
              "Adult volume is about 500–600 mL (6–7 mL/kg): just enough to see the chest rise.",
              "Oxygen at 15 L/min with the reservoir attached."
            ]
          },
          {
            "type": "steps",
            "title": "Good BVM technique",
            "icon": "hand",
            "steps": [
              {
                "title": "Open and hold",
                "text": "Head-tilt/chin-lift or jaw thrust; OPA or NPA."
              },
              {
                "title": "Seal with two people",
                "text": "One holds the mask with both hands (E-C clamp), the other squeezes. Far better than one rescuer."
              },
              {
                "title": "Squeeze gently",
                "text": "Over about 1 second, stop at chest rise, let it fall."
              },
              {
                "title": "Watch",
                "text": "Chest rise, SpO₂, colour, gastric distension."
              }
            ]
          },
          {
            "type": "table",
            "title": "Troubleshooting",
            "icon": "wrench",
            "columns": [
              "Problem",
              "Cause",
              "Fix"
            ],
            "rows": [
              [
                "No chest rise",
                "Poor seal or position; obstruction",
                "Two-rescuer seal, reposition, adjunct, suction"
              ],
              [
                "Stomach swelling",
                "Too fast or too much volume",
                "Slower, smaller breaths"
              ],
              [
                "Falling blood pressure",
                "High pressure in the chest reduces venous return",
                "Correct rate; don't over-ventilate"
              ]
            ],
            "notes": [
              "Routine cricoid pressure is not recommended."
            ]
          },
          {
            "type": "tools",
            "title": "Practice",
            "icon": "monitor",
            "groups": [
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "BLS course",
                    "sub": "Rescue breathing and BVM questions",
                    "href": "../pages/bls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "Apnea",
                    "sub": "What absent breathing looks like",
                    "href": "../pages/respiratory-patterns.html?p=apnea",
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
          "q": "Rescue breathing rate for an adult with a pulse:",
          "options": [
            "1 breath every 6 seconds",
            "1 breath every 3 seconds",
            "1 breath every 10 seconds",
            "As fast as possible"
          ],
          "correct": 0,
          "explanation": "10 breaths/min."
        },
        {
          "q": "Common complication of ventilating too fast and too hard:",
          "options": [
            "Gastric distension and aspiration",
            "Bradycardia only",
            "Hypertension",
            "Hyperoxia only"
          ],
          "correct": 0,
          "explanation": "Slow down, smaller breaths."
        },
        {
          "q": "One rescuer can't keep a BVM seal and the chest barely rises. Best fix?",
          "options": [
            "Switch to two-rescuer BVM",
            "Squeeze harder",
            "Ventilate faster",
            "Stop ventilating"
          ],
          "correct": 0,
          "explanation": "Two hands on the mask."
        },
        {
          "q": "Rescue breathing rate for an infant or child with a pulse (AHA 2025):",
          "options": [
            "1 breath every 2–3 seconds (20–30 breaths/min)",
            "1 breath every 6 seconds",
            "1 breath every 10 seconds",
            "40 breaths/min"
          ],
          "correct": 0,
          "explanation": "Updated from the older 'every 3 seconds'."
        },
        {
          "q": "How long should each BVM breath take?",
          "options": [
            "About 1 second",
            "3 seconds",
            "As short as possible",
            "5 seconds"
          ],
          "correct": 0,
          "explanation": "Gentle, until the chest rises."
        },
        {
          "q": "How much volume per breath?",
          "options": [
            "Just enough for visible chest rise",
            "As much as the bag holds",
            "Until the abdomen rises",
            "A fixed 1 litre"
          ],
          "correct": 0,
          "explanation": "Adult about 500–600 mL."
        },
        {
          "q": "Why can over-ventilation drop blood pressure?",
          "options": [
            "Raised pressure in the chest reduces venous return",
            "It causes hypoxia",
            "It slows the heart directly",
            "It doesn't"
          ],
          "correct": 0,
          "explanation": "Less blood returns to the heart."
        },
        {
          "q": "Is routine cricoid pressure recommended during BVM ventilation?",
          "options": [
            "No",
            "Yes, always",
            "Only in adults",
            "Only by one rescuer"
          ],
          "correct": 0,
          "explanation": "AHA 2025."
        },
        {
          "q": "BVM oxygen flow to get close to 100%:",
          "options": [
            "15 L/min with the reservoir attached",
            "2 L/min",
            "6 L/min without reservoir",
            "Room air"
          ],
          "correct": 0,
          "explanation": "Reservoir attached."
        },
        {
          "q": "First thing to check when the chest won't rise despite a good seal:",
          "options": [
            "Head position and obstruction; suction if needed",
            "Squeeze harder",
            "Ventilate faster",
            "Give up"
          ],
          "correct": 0,
          "explanation": "Reposition and clear the airway."
        }
      ],
      "flashcards": [
        {
          "question": "Adult ventilation rate (with a pulse)",
          "answer": "1 breath every 6 seconds (10 breaths/min).",
          "category": "Ventilation"
        },
        {
          "question": "Infant or child ventilation rate (with a pulse)",
          "answer": "1 breath every 2–3 seconds (20–30 breaths/min).",
          "category": "Ventilation"
        },
        {
          "question": "BVM breath volume",
          "answer": "Just enough for visible chest rise (adult about 500–600 mL).",
          "category": "Ventilation"
        },
        {
          "question": "Why two-rescuer BVM?",
          "answer": "Both hands seal the mask (E-C clamp) while the other person squeezes.",
          "category": "Ventilation"
        },
        {
          "question": "Gastric distension",
          "answer": "From ventilating too fast or with too much volume: slow down, smaller breaths.",
          "category": "Ventilation"
        },
        {
          "question": "Commonest cause of poor chest rise",
          "answer": "A poor mask seal: two-rescuer technique and reposition.",
          "category": "Ventilation"
        },
        {
          "question": "Near-100% oxygen with a BVM",
          "answer": "Oxygen at 15 L/min with the reservoir attached.",
          "category": "Ventilation"
        },
        {
          "question": "Cricoid pressure",
          "answer": "Not recommended routinely.",
          "category": "Ventilation"
        }
      ],
      "critical": [
        {
          "id": "crit_3_6_1",
          "scenario": "You are ventilating an apneic adult at about 30 breaths per minute. The pulse begins to weaken.",
          "question": "What's wrong?",
          "options": [
            {
              "t": "Too fast: slow to 1 breath every 6 seconds",
              "f": "Correct: over-ventilation lowers venous return."
            },
            {
              "t": "Too slow",
              "f": "30/min is far too fast."
            },
            {
              "t": "Normal response",
              "f": "No."
            },
            {
              "t": "Give fluids and keep the rate",
              "f": "Fix the rate."
            }
          ],
          "correct": 0,
          "explanation": "10 breaths/min for adults.",
          "kpi": "Ventilates at the correct rate to preserve circulation"
        },
        {
          "id": "crit_3_6_2",
          "scenario": "During one-rescuer BVM you can't keep a seal, and the abdomen is distending.",
          "question": "Two most important corrections?",
          "options": [
            {
              "t": "Two-rescuer BVM for a better seal; smaller, slower breaths",
              "f": "Correct."
            },
            {
              "t": "Squeeze harder and faster",
              "f": "Worsens distension."
            },
            {
              "t": "Stop ventilating",
              "f": "He needs ventilation."
            },
            {
              "t": "Apply cricoid pressure",
              "f": "Not recommended routinely."
            }
          ],
          "correct": 0,
          "explanation": "Seal and rate.",
          "kpi": "Optimizes BVM seal and avoids gastric insufflation"
        },
        {
          "id": "crit_3_6_3",
          "scenario": "An OPA is in place, but the chest doesn't rise despite a good two-hand seal.",
          "question": "Next?",
          "options": [
            {
              "t": "Reposition the head and airway, check for obstruction, suction if needed",
              "f": "Correct."
            },
            {
              "t": "Squeeze as hard as possible",
              "f": "Find the cause."
            },
            {
              "t": "Remove the OPA and wait",
              "f": "No."
            },
            {
              "t": "Ventilate faster",
              "f": "No."
            }
          ],
          "correct": 0,
          "explanation": "Consider foreign body obstruction.",
          "kpi": "Systematically troubleshoots failed ventilation"
        },
        {
          "id": "crit_3_6_4",
          "scenario": "A 4-year-old with a pulse has slow, gasping breaths after a seizure.",
          "question": "Ventilation rate?",
          "options": [
            {
              "t": "1 breath every 2–3 seconds (20–30 breaths/min)",
              "f": "Correct: AHA 2025 pediatric rate."
            },
            {
              "t": "1 breath every 6 seconds",
              "f": "That's the adult rate."
            },
            {
              "t": "1 breath every 10 seconds",
              "f": "Too slow."
            },
            {
              "t": "40–60 breaths/min",
              "f": "Too fast."
            }
          ],
          "correct": 0,
          "explanation": "Gentle breaths to chest rise.",
          "kpi": "Ventilates a child with a pulse at 1 breath every 2–3 seconds"
        }
      ]
    },
    {
      "id": "c3s7",
      "shortTitle": "3.7 Suction",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Suction",
        "lead": "If you hear gurgling, suction now. Insert the catheter without suction, suction only as you withdraw, keep each pass short, and re-oxygenate between passes. Watch the heart rate, especially in children.",
        "sections": [
          {
            "type": "table",
            "title": "Which catheter",
            "icon": "wrench",
            "columns": [
              "Catheter",
              "For"
            ],
            "rows": [
              [
                "Rigid (Yankauer, tonsil tip)",
                "Mouth and oropharynx; thick secretions, vomit"
              ],
              [
                "Soft (French)",
                "Nose; through an adjunct or tube"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Technique",
            "icon": "list",
            "steps": [
              {
                "title": "Pre-oxygenate",
                "text": "If time allows."
              },
              {
                "title": "Measure",
                "text": "Corner of the mouth to the earlobe; never beyond what you can see."
              },
              {
                "title": "Insert without suction",
                "text": "Then suction only while withdrawing."
              },
              {
                "title": "Keep it short",
                "text": "Adult 15 seconds, child 10 seconds, infant 5 seconds per pass."
              },
              {
                "title": "Re-oxygenate",
                "text": "Ventilate or oxygenate between passes; watch heart rate and SpO₂."
              }
            ],
            "after": "Vomiting with no spinal concern: roll the patient onto the side first."
          },
          {
            "type": "tools",
            "title": "Watch the monitor",
            "icon": "monitor",
            "groups": [
              {
                "title": "Rhythms",
                "items": [
                  {
                    "ecg": "sbrady",
                    "label": "Sinus bradycardia",
                    "sub": "Vagal response or hypoxia during suction: stop and oxygenate"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Suction should be applied:",
          "options": [
            "Only while withdrawing the catheter",
            "While inserting",
            "Continuously throughout",
            "Only in infants"
          ],
          "correct": 0,
          "explanation": "Insert without suction."
        },
        {
          "q": "Maximum suction time per attempt in an adult:",
          "options": [
            "15 seconds",
            "5 seconds",
            "30 seconds",
            "60 seconds"
          ],
          "correct": 0,
          "explanation": "Child 10, infant 5."
        },
        {
          "q": "Prolonged suction can cause:",
          "options": [
            "Hypoxia and bradycardia",
            "Hypertension and tachycardia",
            "Fever and seizures",
            "Hyperglycemia and vomiting"
          ],
          "correct": 0,
          "explanation": "Oxygen is removed and the vagus stimulated."
        },
        {
          "q": "Maximum suction time per attempt in an infant:",
          "options": [
            "5 seconds",
            "15 seconds",
            "10 seconds",
            "20 seconds"
          ],
          "correct": 0,
          "explanation": "Watch the heart rate closely."
        },
        {
          "q": "Best catheter for thick vomit in the mouth:",
          "options": [
            "Rigid Yankauer (tonsil tip)",
            "Soft French catheter",
            "NPA",
            "Oxygen tubing"
          ],
          "correct": 0,
          "explanation": "Soft catheters for the nose and tubes."
        },
        {
          "q": "How deep do you insert a rigid catheter?",
          "options": [
            "No further than you can see (corner of mouth to earlobe)",
            "Until resistance",
            "Into the trachea",
            "As far as it goes"
          ],
          "correct": 0,
          "explanation": "Stay in the visible field."
        },
        {
          "q": "Heart rate drops during infant suction. You:",
          "options": [
            "Stop and oxygenate or ventilate",
            "Suction longer",
            "Give atropine immediately",
            "Ignore it"
          ],
          "correct": 0,
          "explanation": "Vagal response or hypoxia."
        },
        {
          "q": "Between suction passes you should:",
          "options": [
            "Re-oxygenate or ventilate",
            "Keep suctioning",
            "Remove the oxygen",
            "Wait 5 minutes"
          ],
          "correct": 0,
          "explanation": "Suction removes oxygen."
        },
        {
          "q": "A soft (French) catheter is best for:",
          "options": [
            "The nose and suctioning through a tube",
            "Thick vomit in the mouth",
            "Large food pieces",
            "Chest drains"
          ],
          "correct": 0,
          "explanation": "Rigid catheters for the oropharynx."
        },
        {
          "q": "Patient vomits; no spinal concern. Quickest way to clear the airway?",
          "options": [
            "Roll onto the side, then suction",
            "Keep ventilating",
            "Sit them up and wait",
            "Blind finger sweep"
          ],
          "correct": 0,
          "explanation": "Gravity helps."
        }
      ],
      "flashcards": [
        {
          "question": "When to apply suction",
          "answer": "Only while withdrawing; insert without suction.",
          "category": "Suction"
        },
        {
          "question": "Maximum time per pass",
          "answer": "Adult 15 seconds, child 10 seconds, infant 5 seconds.",
          "category": "Suction"
        },
        {
          "question": "Measuring depth",
          "answer": "Corner of the mouth to the earlobe; never beyond what you can see.",
          "category": "Suction"
        },
        {
          "question": "Thick vomit in the mouth",
          "answer": "Rigid Yankauer (tonsil tip).",
          "category": "Suction"
        },
        {
          "question": "Complications of prolonged suction",
          "answer": "Hypoxia and vagal bradycardia, especially in children.",
          "category": "Suction"
        },
        {
          "question": "Between passes",
          "answer": "Re-oxygenate or ventilate.",
          "category": "Suction"
        },
        {
          "question": "Soft (French) catheter",
          "answer": "Nose, adjuncts and tubes.",
          "category": "Suction"
        },
        {
          "question": "Vomiting, no spinal concern",
          "answer": "Roll onto the side, then suction.",
          "category": "Suction"
        }
      ],
      "critical": [
        {
          "id": "crit_3_7_1",
          "scenario": "A patient vomits during BVM ventilation; the airway fills with fluid.",
          "question": "Immediate action?",
          "options": [
            {
              "t": "Stop, roll the patient (no spinal concern) or suction until clear, then resume",
              "f": "Correct."
            },
            {
              "t": "Keep ventilating through the vomit",
              "f": "Causes aspiration."
            },
            {
              "t": "Blind finger sweep",
              "f": "No."
            },
            {
              "t": "Wait for it to drain",
              "f": "Act now."
            }
          ],
          "correct": 0,
          "explanation": "Clear the airway before ventilating.",
          "kpi": "Prioritizes airway clearance over continued ventilation"
        },
        {
          "id": "crit_3_7_2",
          "scenario": "While suctioning an infant's airway for 20 seconds, the heart rate falls from 140 to 80.",
          "question": "What happened and what do you do?",
          "options": [
            {
              "t": "Vagal bradycardia / hypoxia: stop, oxygenate or ventilate; limit infant passes to 5 seconds",
              "f": "Correct."
            },
            {
              "t": "Keep suctioning: the airway must be clear",
              "f": "Stop and oxygenate."
            },
            {
              "t": "Normal: ignore",
              "f": "Bradycardia in infants is dangerous."
            },
            {
              "t": "Start CPR immediately",
              "f": "Ventilate first; CPR if HR stays below 60 with poor perfusion."
            }
          ],
          "correct": 0,
          "explanation": "Short passes, oxygen between.",
          "kpi": "Recognizes suction-induced bradycardia and limits attempt time"
        },
        {
          "id": "crit_3_7_3",
          "scenario": "You're about to suction an adult's mouth and aren't sure how deep to go.",
          "question": "How do you decide?",
          "options": [
            {
              "t": "Measure from the corner of the mouth to the earlobe and stay in the visible field",
              "f": "Correct."
            },
            {
              "t": "Insert until you meet resistance",
              "f": "Risk of trauma and gagging."
            },
            {
              "t": "As deep as possible",
              "f": "No."
            },
            {
              "t": "Same as an NPA length, past the tongue",
              "f": "Stay where you can see."
            }
          ],
          "correct": 0,
          "explanation": "Suction while withdrawing.",
          "kpi": "Measures suction depth correctly"
        }
      ]
    },
    {
      "id": "c3s8",
      "shortTitle": "3.8 Advanced Airways",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Advanced Airways",
        "lead": "When basic measures aren't enough, a trained provider places a supraglottic airway or an endotracheal tube. Everyone has a job: prepare, pre-oxygenate, confirm with waveform capnography, and keep watching it.",
        "sections": [
          {
            "type": "table",
            "title": "Two families",
            "icon": "clipboard-list",
            "stack": true,
            "columns": [
              "",
              "Supraglottic (i-gel, King LT, LMA)",
              "Endotracheal tube"
            ],
            "rows": [
              [
                "Sits",
                "Above the vocal cords",
                "Through the vocal cords"
              ],
              [
                "Insertion",
                "Blind, quick; fewer CPR pauses",
                "Laryngoscopy; advanced skill"
              ],
              [
                "Protection",
                "Partial",
                "Definitive"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Confirm and keep confirming",
            "icon": "circle-check-big",
            "steps": [
              {
                "title": "Waveform capnography",
                "text": "Recommended to confirm and continuously monitor placement. Normal EtCO₂ 35–45 mmHg."
              },
              {
                "title": "Listen",
                "text": "Breath sounds on both sides; nothing over the epigastrium."
              },
              {
                "title": "Look",
                "text": "Equal chest rise; secure the device; recheck after every move."
              },
              {
                "title": "In cardiac arrest",
                "text": "1 breath every 6 seconds (10 breaths/min) with continuous compressions."
              }
            ]
          },
          {
            "type": "groups",
            "title": "Deteriorating? DOPE",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "D – Displacement",
                "items": [
                  "Sudden loss of the capnography waveform: displaced until proven otherwise"
                ]
              },
              {
                "title": "O – Obstruction",
                "items": [
                  "Secretions, kinked tube: suction"
                ]
              },
              {
                "title": "P – Pneumothorax",
                "items": [
                  "Absent breath sounds one side, rising resistance, falling SpO₂"
                ]
              },
              {
                "title": "E – Equipment",
                "items": [
                  "Oxygen source, bag, connections, capnography"
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
                "title": "Practice",
                "items": [
                  {
                    "label": "ACLS course",
                    "sub": "Airway during cardiac arrest",
                    "href": "../pages/acls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "ACLS Megacode",
                    "sub": "Run an arrest with an advanced airway",
                    "href": "../pages/megacode.html",
                    "icon": "heart-pulse"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Most reliable way to confirm and monitor an advanced airway:",
          "options": [
            "Waveform capnography",
            "Chest rise alone",
            "Pulse oximetry",
            "Skin colour"
          ],
          "correct": 0,
          "explanation": "Recommended by AHA 2025."
        },
        {
          "q": "A supraglottic airway (e.g. i-gel) sits:",
          "options": [
            "Above the vocal cords",
            "Through the vocal cords",
            "In the esophagus deliberately",
            "In a bronchus"
          ],
          "correct": 0,
          "explanation": "Blind insertion."
        },
        {
          "q": "In DOPE, the 'P' stands for:",
          "options": [
            "Pneumothorax",
            "Position",
            "Pulse",
            "Pressure"
          ],
          "correct": 0,
          "explanation": "Displacement, Obstruction, Pneumothorax, Equipment."
        },
        {
          "q": "Normal end-tidal CO₂:",
          "options": [
            "35–45 mmHg",
            "10–15 mmHg",
            "60–80 mmHg",
            "90–100 mmHg"
          ],
          "correct": 0,
          "explanation": "A sudden drop to zero suggests displacement."
        },
        {
          "q": "Ventilation rate after an advanced airway in cardiac arrest:",
          "options": [
            "1 breath every 6 seconds with continuous compressions",
            "30:2 pauses",
            "1 breath every 2 seconds",
            "Only during pauses"
          ],
          "correct": 0,
          "explanation": "10 breaths/min."
        },
        {
          "q": "Before any intubation attempt, the assisting provider should first:",
          "options": [
            "Pre-oxygenate",
            "Remove the oxygen",
            "Give a sedative",
            "Deflate the cuff"
          ],
          "correct": 0,
          "explanation": "Raise the oxygen reserve."
        },
        {
          "q": "Breath sounds heard over the epigastrium after intubation suggest:",
          "options": [
            "Esophageal placement",
            "Correct placement",
            "Right mainstem placement",
            "Pneumothorax"
          ],
          "correct": 0,
          "explanation": "Confirm with capnography."
        },
        {
          "q": "Why are supraglottic airways popular in cardiac arrest?",
          "options": [
            "Quick insertion with fewer CPR interruptions",
            "They protect fully against aspiration",
            "They need laryngoscopy",
            "They pass the vocal cords"
          ],
          "correct": 0,
          "explanation": "Above the cords, blind."
        },
        {
          "q": "Capnography waveform suddenly disappears after moving the patient:",
          "options": [
            "Suspect displacement and reassess at once",
            "Normal after movement",
            "Increase oxygen and ignore",
            "Turn off the monitor"
          ],
          "correct": 0,
          "explanation": "Displacement until proven otherwise."
        },
        {
          "q": "Which is an endotracheal tube feature?",
          "options": [
            "Passes through the vocal cords",
            "Inserted blind above the cords",
            "Never needs confirmation",
            "Only for children"
          ],
          "correct": 0,
          "explanation": "Definitive airway; advanced skill."
        }
      ],
      "flashcards": [
        {
          "question": "Gold standard to confirm and monitor placement",
          "answer": "Continuous waveform capnography (EtCO₂).",
          "category": "Advanced"
        },
        {
          "question": "Supraglottic examples",
          "answer": "i-gel, King LT, LMA.",
          "category": "Advanced"
        },
        {
          "question": "Supraglottic vs ETT",
          "answer": "Supraglottic: above the cords, blind. ETT: through the cords, definitive.",
          "category": "Advanced"
        },
        {
          "question": "DOPE",
          "answer": "Displacement, Obstruction, Pneumothorax, Equipment failure.",
          "category": "Advanced"
        },
        {
          "question": "Other confirmation",
          "answer": "Bilateral breath sounds, no epigastric sounds, equal chest rise.",
          "category": "Advanced"
        },
        {
          "question": "Sudden loss of waveform",
          "answer": "Displacement (or loss of circulation): reassess immediately.",
          "category": "Advanced"
        },
        {
          "question": "Normal EtCO₂",
          "answer": "35–45 mmHg.",
          "category": "Advanced"
        },
        {
          "question": "Ventilation with an advanced airway in arrest",
          "answer": "1 breath every 6 seconds, compressions continuous.",
          "category": "Advanced"
        }
      ],
      "critical": [
        {
          "id": "crit_3_8_1",
          "scenario": "After moving an intubated patient onto the stretcher, the capnography waveform disappears.",
          "question": "Most likely meaning?",
          "options": [
            {
              "t": "Tube displacement: reassess placement and breath sounds now",
              "f": "Correct."
            },
            {
              "t": "Normal after movement",
              "f": "No."
            },
            {
              "t": "Equipment always",
              "f": "Displacement until proven otherwise."
            },
            {
              "t": "Improved ventilation",
              "f": "No."
            }
          ],
          "correct": 0,
          "explanation": "D in DOPE.",
          "kpi": "Recognizes loss of capnography waveform as airway displacement"
        },
        {
          "id": "crit_3_8_2",
          "scenario": "An intubated patient becomes hard to ventilate: SpO₂ falling, no breath sounds on the right, trachea deviated left.",
          "question": "Which DOPE cause?",
          "options": [
            {
              "t": "Tension pneumothorax (P)",
              "f": "Correct."
            },
            {
              "t": "Displacement",
              "f": "Unilateral signs and tracheal shift point to pneumothorax."
            },
            {
              "t": "Obstruction",
              "f": "Would affect both sides."
            },
            {
              "t": "Equipment failure",
              "f": "Doesn't shift the trachea."
            }
          ],
          "correct": 0,
          "explanation": "Needs decompression by a qualified provider.",
          "kpi": "Differentiates DOPE causes of post-intubation deterioration"
        },
        {
          "id": "crit_3_8_3",
          "scenario": "A paramedic asks you to assist with intubation. SpO₂ is 88%.",
          "question": "Your first action?",
          "options": [
            {
              "t": "Pre-oxygenate with BVM or NRB to raise SpO₂ before the attempt",
              "f": "Correct."
            },
            {
              "t": "Remove the oxygen so they can see",
              "f": "No."
            },
            {
              "t": "Start chest compressions",
              "f": "He has a pulse."
            },
            {
              "t": "Nothing until the tube is in",
              "f": "Prepare and pre-oxygenate."
            }
          ],
          "correct": 0,
          "explanation": "Oxygen reserve buys time.",
          "kpi": "Pre-oxygenates before an advanced airway attempt"
        }
      ]
    },
    {
      "id": "c3s9",
      "shortTitle": "3.9 Respiratory Failure",
      "guide": {
        "group": "c3",
        "groupLabel": "Chapter 3 · Airway & Ventilation",
        "title": "Respiratory Distress vs Failure",
        "lead": "In distress the patient is compensating. In failure they can't keep it up. Watch for drowsiness, a slowing rate, a quiet chest and SpO₂ falling despite oxygen, and start ventilating then. Don't wait for apnea.",
        "sections": [
          {
            "type": "table",
            "title": "Spot the change",
            "icon": "activity",
            "stack": true,
            "columns": [
              "",
              "Distress (compensating)",
              "Failure (decompensating)"
            ],
            "rows": [
              [
                "Mental status",
                "Alert, anxious",
                "Drowsy, confused, unresponsive"
              ],
              [
                "Effort",
                "Working hard",
                "Tiring, slowing, irregular"
              ],
              [
                "Speech",
                "Short sentences",
                "Single words or none"
              ],
              [
                "Air movement",
                "Audible",
                "Poor: silent chest"
              ],
              [
                "SpO₂",
                "Held on oxygen",
                "Falling despite oxygen"
              ],
              [
                "Do",
                "Oxygen, position, treat the cause",
                "Ventilate with a BVM now"
              ]
            ],
            "notes": [
              "Children: bradycardia with breathing difficulty is a pre-arrest sign. Ventilate."
            ]
          },
          {
            "type": "groups",
            "title": "CPAP (where your protocol allows)",
            "icon": "wind",
            "groups": [
              {
                "title": "Who",
                "items": [
                  "Conscious, breathing on their own, able to protect the airway",
                  "Moderate to severe distress, e.g. pulmonary edema or COPD",
                  "Typical start 5–10 cmH₂O"
                ]
              },
              {
                "title": "Not for",
                "items": [
                  "Unresponsive or can't protect the airway",
                  "Hypotension (systolic below 90 mmHg)",
                  "Suspected pneumothorax, vomiting, facial trauma"
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
                "title": "Respiratory patterns",
                "items": [
                  {
                    "label": "Tachypnea",
                    "sub": "Distress: fast and shallow",
                    "href": "../pages/respiratory-patterns.html?p=tachypnea",
                    "icon": "wind"
                  },
                  {
                    "label": "Bradypnea",
                    "sub": "Failure or drugs: slowing",
                    "href": "../pages/respiratory-patterns.html?p=bradypnea",
                    "icon": "wind"
                  },
                  {
                    "label": "Hypopnea",
                    "sub": "Shallow, ineffective breaths",
                    "href": "../pages/respiratory-patterns.html?p=hypopnea",
                    "icon": "wind"
                  }
                ]
              },
              {
                "title": "Rhythms",
                "items": [
                  {
                    "ecg": "sbrady",
                    "label": "Bradycardia in a hypoxic child",
                    "sub": "Pre-arrest: ventilate now"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "A patient in respiratory distress becomes drowsy with a slowing rate. This means:",
          "options": [
            "Respiratory failure: assist ventilation",
            "Improvement",
            "A normal response to oxygen",
            "Anxiety only"
          ],
          "correct": 0,
          "explanation": "Decompensation."
        },
        {
          "q": "Treatment once distress becomes failure:",
          "options": [
            "Assisted ventilation with a BVM",
            "More reassurance",
            "A nasal cannula",
            "Wait 15 minutes and reassess"
          ],
          "correct": 0,
          "explanation": "Don't wait for apnea."
        },
        {
          "q": "In severe asthma, a sudden silent chest with fatigue means:",
          "options": [
            "Impending respiratory failure",
            "The attack is resolving",
            "Mild bronchospasm",
            "A normal exam"
          ],
          "correct": 0,
          "explanation": "Almost no air is moving."
        },
        {
          "q": "Which sign suggests distress, not yet failure?",
          "options": [
            "Alert and anxious with increased effort",
            "Drowsy and quiet",
            "SpO₂ falling on oxygen",
            "Single-word answers"
          ],
          "correct": 0,
          "explanation": "Still compensating."
        },
        {
          "q": "A hypoxic child with breathing difficulty becomes bradycardic. This is:",
          "options": [
            "A pre-arrest sign: ventilate",
            "Reassuring",
            "Normal for children",
            "A sign to stop oxygen"
          ],
          "correct": 0,
          "explanation": "Hypoxia slows a child's heart."
        },
        {
          "q": "Which patient is NOT suitable for CPAP?",
          "options": [
            "Unresponsive patient",
            "Alert patient with pulmonary edema",
            "Alert COPD patient in distress",
            "Conscious patient protecting the airway"
          ],
          "correct": 0,
          "explanation": "CPAP needs a conscious, cooperative patient."
        },
        {
          "q": "CPAP is contraindicated with systolic BP below:",
          "options": [
            "90 mmHg",
            "140 mmHg",
            "60 mmHg",
            "120 mmHg"
          ],
          "correct": 0,
          "explanation": "It can lower blood pressure further."
        },
        {
          "q": "Typical starting CPAP pressure:",
          "options": [
            "5–10 cmH₂O",
            "20–30 cmH₂O",
            "1–2 cmH₂O",
            "40 cmH₂O"
          ],
          "correct": 0,
          "explanation": "Per local protocol."
        },
        {
          "q": "Should you wait for apnea before ventilating?",
          "options": [
            "No: ventilate when breathing becomes inadequate",
            "Yes",
            "Only in children",
            "Only after 10 minutes"
          ],
          "correct": 0,
          "explanation": "Earlier is safer."
        },
        {
          "q": "Which finding marks failure?",
          "options": [
            "SpO₂ falling despite oxygen",
            "Talking in full sentences",
            "Respiratory rate 18",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "Plus drowsiness and slowing rate."
        }
      ],
      "flashcards": [
        {
          "question": "Distress vs failure",
          "answer": "Distress: compensating. Failure: can no longer oxygenate or ventilate adequately.",
          "category": "Failure"
        },
        {
          "question": "Key treatment in failure",
          "answer": "Immediate BVM ventilation; don't wait for apnea.",
          "category": "Failure"
        },
        {
          "question": "Signs of failure",
          "answer": "Drowsiness, slowing or irregular breathing, SpO₂ falling on oxygen, single words, silent chest.",
          "category": "Failure"
        },
        {
          "question": "Silent chest in asthma",
          "answer": "Almost no air moving: impending respiratory failure.",
          "category": "Failure"
        },
        {
          "question": "Drowsy with slowing rate after distress",
          "answer": "Respiratory failure: start BVM ventilation.",
          "category": "Failure"
        },
        {
          "question": "Wait for apnea?",
          "answer": "No: assist as soon as breathing becomes inadequate.",
          "category": "Failure"
        },
        {
          "question": "Bradycardia in a hypoxic child",
          "answer": "Pre-arrest sign: ventilate.",
          "category": "Failure"
        },
        {
          "question": "CPAP contraindications",
          "answer": "Unresponsive, can't protect airway, systolic below 90 mmHg, pneumothorax, vomiting, facial trauma.",
          "category": "Failure"
        }
      ],
      "critical": [
        {
          "id": "crit_3_9_1",
          "scenario": "A COPD patient in distress on an NRB becomes confused, then drowsy; the rate falls from 28 to 8.",
          "question": "What's happening and what do you do?",
          "options": [
            {
              "t": "Respiratory failure: start BVM ventilation and transport rapidly",
              "f": "Correct."
            },
            {
              "t": "He's resting: let him sleep",
              "f": "Failure signs."
            },
            {
              "t": "Remove all oxygen",
              "f": "He needs ventilation."
            },
            {
              "t": "Start CPAP",
              "f": "Not for a drowsy patient who can't protect his airway."
            }
          ],
          "correct": 0,
          "explanation": "Assist ventilation now.",
          "kpi": "Escalates to assisted ventilation at the onset of failure"
        },
        {
          "id": "crit_3_9_2",
          "scenario": "A young asthmatic who was wheezing loudly and tripoding is now quiet, slumped, barely moving air.",
          "question": "Interpretation?",
          "options": [
            {
              "t": "Decompensation: silent chest and fatigue mean impending arrest; assist ventilation",
              "f": "Correct."
            },
            {
              "t": "Improvement",
              "f": "Silence with fatigue is ominous."
            },
            {
              "t": "Anxiety settling",
              "f": "No."
            },
            {
              "t": "Normal recovery",
              "f": "No."
            }
          ],
          "correct": 0,
          "explanation": "Ventilate and transport.",
          "kpi": "Recognizes the silent chest as decompensation, not improvement"
        },
        {
          "id": "crit_3_9_3",
          "scenario": "A near-drowning patient breathes 6 times a minute with shallow effort, SpO₂ 84% on an NRB.",
          "question": "Next step?",
          "options": [
            {
              "t": "BVM ventilation at 1 breath every 6 seconds",
              "f": "Correct."
            },
            {
              "t": "Increase NRB flow and observe",
              "f": "Breathing is inadequate."
            },
            {
              "t": "Nasal cannula",
              "f": "Less support."
            },
            {
              "t": "Wait for apnea",
              "f": "Never."
            }
          ],
          "correct": 0,
          "explanation": "Inadequate breathing needs ventilation.",
          "kpi": "Identifies inadequate minute ventilation and assists breathing"
        },
        {
          "id": "crit_3_9_4",
          "scenario": "An alert patient with pulmonary edema is in severe distress: SpO₂ 86%, BP 150/90, protecting the airway.",
          "question": "Which support fits (where your protocol allows)?",
          "options": [
            {
              "t": "CPAP starting at 5–10 cmH₂O, with close monitoring",
              "f": "Correct: conscious, cooperative, normotensive."
            },
            {
              "t": "Immediate BVM at 30 breaths/min",
              "f": "Too fast, and he's breathing well enough for CPAP."
            },
            {
              "t": "Nasal cannula only",
              "f": "Inadequate for severe distress."
            },
            {
              "t": "Nothing until hospital",
              "f": "Treat now."
            }
          ],
          "correct": 0,
          "explanation": "Watch for fatigue: switch to BVM if he deteriorates.",
          "kpi": "Selects CPAP for a conscious patient with pulmonary edema"
        }
      ]
    }
  ]
};
