/* ========== Chapter 2 – Patient Assessment ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c2.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c2",
  "title": "Patient Assessment",
  "shortTitle": "2. Patient Assessment",
  "sections": [
    {
      "id": "c2s1",
      "shortTitle": "2.1 Anatomy & Physiology Essentials",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Anatomy & Physiology Essentials",
        "lead": "You need two things from anatomy on the road: words that everyone understands in your handover, and a mental map of what sits under the spot that hurts. That map tells you which organ may be bleeding or inflamed.",
        "sections": [
          {
            "type": "table",
            "title": "Say it precisely",
            "icon": "message-circle-question",
            "columns": [
              "Term",
              "Means",
              "Example"
            ],
            "rows": [
              [
                "Medial / lateral",
                "Towards / away from the midline",
                "The nose is medial to the eyes"
              ],
              [
                "Proximal / distal",
                "Closer to / farther from the trunk",
                "A cut 10 cm distal to the elbow is on the forearm"
              ],
              [
                "Anterior / posterior",
                "Front / back",
                "Posterior chest wound"
              ],
              [
                "Superior / inferior",
                "Above / below",
                "The diaphragm is inferior to the lungs"
              ]
            ],
            "notes": [
              "All terms assume the anatomical position: standing, facing forward, palms forward.",
              "Planes: sagittal (left/right), frontal (front/back), transverse (top/bottom)."
            ]
          },
          {
            "type": "table",
            "title": "What's under the pain?",
            "icon": "target",
            "columns": [
              "Quadrant",
              "Main organs",
              "Think of"
            ],
            "rows": [
              [
                "Right upper",
                "Liver, gallbladder",
                "Liver laceration, cholecystitis"
              ],
              [
                "Left upper",
                "Stomach, spleen",
                "Splenic rupture after blunt trauma"
              ],
              [
                "Right lower",
                "Appendix",
                "Appendicitis"
              ],
              [
                "Left lower",
                "Sigmoid colon",
                "Diverticulitis"
              ],
              [
                "Behind (retroperitoneal)",
                "Kidneys, aorta",
                "Renal colic, aortic aneurysm"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Pain that travels",
            "icon": "activity",
            "groups": [
              {
                "title": "Right shoulder",
                "items": [
                  "Gallbladder (phrenic nerve)"
                ]
              },
              {
                "title": "Left shoulder",
                "items": [
                  "Spleen or blood under the left diaphragm (Kehr's sign)"
                ]
              },
              {
                "title": "Jaw, left arm",
                "items": [
                  "Heart (ACS)"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Body cavities",
            "icon": "list",
            "items": [
              "Cranial and spinal: brain and spinal cord",
              "Thoracic: heart, lungs, great vessels",
              "Abdominal and pelvic, separated from the chest by the diaphragm"
            ]
          },
          {
            "type": "tools",
            "title": "Practice",
            "icon": "monitor",
            "groups": [
              {
                "title": "Use it",
                "items": [
                  {
                    "label": "Medical assessment",
                    "sub": "Body systems exam",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  },
                  {
                    "label": "Trauma assessment",
                    "sub": "Head-to-toe by region",
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
          "q": "In the anatomical position, the palms face:",
          "options": [
            "Forward",
            "Backward",
            "Towards the body",
            "Downward"
          ],
          "correct": 0,
          "explanation": "All directional terms assume this position."
        },
        {
          "q": "Closer to the midline is:",
          "options": [
            "Medial",
            "Lateral",
            "Distal",
            "Superior"
          ],
          "correct": 0,
          "explanation": "Lateral is away from the midline."
        },
        {
          "q": "The transverse plane divides the body into:",
          "options": [
            "Superior and inferior parts",
            "Left and right",
            "Front and back",
            "Medial and lateral"
          ],
          "correct": 0,
          "explanation": "Sagittal: left/right. Frontal: front/back."
        },
        {
          "q": "The spleen lies in which quadrant?",
          "options": [
            "Left upper",
            "Right upper",
            "Right lower",
            "Left lower"
          ],
          "correct": 0,
          "explanation": "Watch it after blunt left-sided trauma."
        },
        {
          "q": "Structural organisation from simplest:",
          "options": [
            "Cells → tissues → organs → systems → organism",
            "Cells → organs → tissues → systems → organism",
            "Tissues → cells → organs → systems → organism",
            "Cells → tissues → systems → organs → organism"
          ],
          "correct": 0,
          "explanation": "Four tissue types: epithelial, connective, muscle, nervous."
        },
        {
          "q": "Which system includes the brain and spinal cord?",
          "options": [
            "Nervous",
            "Cardiovascular",
            "Endocrine",
            "Musculoskeletal"
          ],
          "correct": 0,
          "explanation": "Central nervous system."
        },
        {
          "q": "A wound \"proximal to the left wrist\" is:",
          "options": [
            "Between the left wrist and shoulder",
            "On the left hand",
            "On the wrist itself",
            "On the fingers"
          ],
          "correct": 0,
          "explanation": "Proximal = closer to the trunk."
        },
        {
          "q": "Blunt trauma to the left upper quadrant: highest risk organ?",
          "options": [
            "Spleen",
            "Appendix",
            "Liver",
            "Sigmoid colon"
          ],
          "correct": 0,
          "explanation": "Left shoulder pain (Kehr's sign) can accompany splenic bleeding."
        },
        {
          "q": "Right shoulder pain with right upper quadrant tenderness after a fatty meal suggests:",
          "options": [
            "Gallbladder inflammation (referred via the phrenic nerve)",
            "Spleen injury",
            "Appendicitis",
            "Kidney stone"
          ],
          "correct": 0,
          "explanation": "Kehr's sign is the left shoulder."
        },
        {
          "q": "Which organs are retroperitoneal?",
          "options": [
            "Kidneys and aorta",
            "Liver and spleen",
            "Stomach and appendix",
            "Heart and lungs"
          ],
          "correct": 0,
          "explanation": "Their pain is often in the back or flank."
        }
      ],
      "flashcards": [
        {
          "question": "Anatomical position",
          "answer": "Standing, facing forward, arms at the sides, palms forward. All directional terms refer to it.",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "Proximal",
          "answer": "Closer to the trunk or point of attachment: the shoulder is proximal to the elbow.",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "Plane that splits left and right equally",
          "answer": "The mid-sagittal (median) plane.",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "Four quadrants and an organ in each",
          "answer": "Right upper: liver, gallbladder. Left upper: stomach, spleen. Right lower: appendix. Left lower: sigmoid colon.",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "Four tissue types",
          "answer": "Epithelial (covering), connective (support), muscle (movement), nervous (control).",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "Cavity holding the heart and lungs",
          "answer": "The thoracic cavity, above the diaphragm.",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "System for gas exchange",
          "answer": "The respiratory system: airways, lungs, diaphragm. It also helps regulate pH.",
          "category": "Anatomy & Physiology Essentials"
        },
        {
          "question": "Anterior vs posterior",
          "answer": "Anterior (ventral): front. Posterior (dorsal): back.",
          "category": "Anatomy & Physiology Essentials"
        }
      ],
      "critical": [
        {
          "id": "crit_2_1_1",
          "scenario": "Handing over a crash patient, the doctor asks where exactly the forearm cut is. It's on the front of the right forearm, 10 cm below the elbow.",
          "question": "How do you describe it?",
          "options": [
            {
              "t": "10 cm distal to the right elbow on the anterior forearm",
              "f": "Correct."
            },
            {
              "t": "10 cm proximal to the right elbow, lateral forearm",
              "f": "Below the elbow is distal; the front is anterior."
            },
            {
              "t": "Lower right arm",
              "f": "Too vague."
            },
            {
              "t": "10 cm superior to the right wrist",
              "f": "Use the closer landmark and the right terms."
            }
          ],
          "correct": 0,
          "explanation": "Precise terms prevent errors in handover and documentation.",
          "kpi": "Uses correct directional terminology (distal, proximal, anterior, posterior, medial, lateral) in documentation"
        },
        {
          "id": "crit_2_1_2",
          "scenario": "A worker fell from a ladder onto his right side: right upper quadrant pain and tenderness over the lower right ribs. BP 100/68, HR 112, no external bleeding.",
          "question": "Assessment priority?",
          "options": [
            {
              "t": "Suspect liver injury with internal bleeding: early shock signs, rapid transport to a trauma centre",
              "f": "Correct."
            },
            {
              "t": "Spinal injury is the only concern",
              "f": "Organ location plus vital signs point to bleeding."
            },
            {
              "t": "Rib fracture only: routine transport",
              "f": "Tachycardia with a soft BP is early shock."
            },
            {
              "t": "Give fluids to a normal BP on scene",
              "f": "Transport; permissive fluids en route."
            }
          ],
          "correct": 0,
          "explanation": "The liver is large, vascular and sits behind the lower right ribs.",
          "kpi": "Accurately correlates organ location (RUQ=liver) with mechanism of injury to anticipate internal injuries"
        },
        {
          "id": "crit_2_1_3",
          "scenario": "A 66-year-old with gallstones has had severe pain for 6 hours after a large meal: worst in the right upper quadrant with guarding, spreading to the right shoulder blade. Temperature 38.4 °C.",
          "question": "Which system is most likely involved?",
          "options": [
            {
              "t": "Biliary: the gallbladder refers pain to the right shoulder via the phrenic nerve",
              "f": "Correct."
            },
            {
              "t": "Urinary: kidney stone",
              "f": "Stones cause flank pain to the groin."
            },
            {
              "t": "Spleen: Kehr's sign",
              "f": "Kehr's sign is the left shoulder."
            },
            {
              "t": "Heart only",
              "f": "Always consider ACS, but this pattern is biliary."
            }
          ],
          "correct": 0,
          "explanation": "Guarding means peritoneal irritation; fever suggests infection.",
          "kpi": "Applies knowledge of referred pain patterns and organ location to differential assessment"
        }
      ]
    },
    {
      "id": "c2s2",
      "shortTitle": "2.2 Pathophysiology of Perfusion & Shock",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Perfusion & Shock",
        "lead": "Perfusion needs three things: a working pump, enough fluid and an intact container. Shock is what happens when one of them fails. Catch it while the body is still compensating, because by the time the BP falls, a lot has already gone wrong.",
        "sections": [
          {
            "type": "table",
            "title": "Which part failed?",
            "icon": "heart-pulse",
            "stack": true,
            "columns": [
              "Type",
              "Failure",
              "Skin and signs",
              "Examples"
            ],
            "rows": [
              [
                "Hypovolemic",
                "Fluid",
                "Pale, cool, clammy; flat neck veins",
                "Bleeding, vomiting, burns"
              ],
              [
                "Cardiogenic",
                "Pump",
                "Cold and wet: crackles, raised JVP",
                "MI, arrhythmia"
              ],
              [
                "Distributive",
                "Container (dilated)",
                "Often warm early; rash, fever; slow pulse in neurogenic",
                "Sepsis, anaphylaxis, spinal cord injury"
              ],
              [
                "Obstructive",
                "Flow blocked",
                "Raised JVP; absent breath sounds on one side",
                "Tension pneumothorax, tamponade, PE"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Stages",
            "icon": "trending-down",
            "columns": [
              "Stage",
              "BP",
              "You see"
            ],
            "rows": [
              [
                "Compensated",
                "Normal",
                "Anxiety, tachycardia, pale cool skin, slow capillary refill, narrowing pulse pressure"
              ],
              [
                "Decompensated",
                "Falling",
                "Hypotension, confusion, weak pulses, low SpO₂"
              ],
              [
                "Irreversible",
                "Very low",
                "Organ failure, arrest"
              ]
            ],
            "notes": [
              "Tachycardia is usually the first measurable sign; hypotension is late.",
              "Older patients and those on beta-blockers may not get tachycardic."
            ]
          },
          {
            "type": "list",
            "title": "Don't be fooled by",
            "icon": "triangle-alert",
            "items": [
              "A \"normal\" BP in a young, fit trauma patient",
              "\"Her BP is always low\": look at the trend, mental status and skin",
              "Warm skin in early sepsis or neurogenic shock"
            ]
          },
          {
            "type": "tools",
            "title": "See it",
            "icon": "monitor",
            "groups": [
              {
                "title": "The first sign",
                "items": [
                  {
                    "ecg": "stach",
                    "label": "Sinus tachycardia",
                    "sub": "Compensation: find the cause"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "The three parts of the perfusion triangle:",
          "options": [
            "Pump (heart), fluid (blood), container (vessels)",
            "Heart, lungs, brain",
            "Arteries, veins, capillaries",
            "Oxygen, CO₂, hemoglobin"
          ],
          "correct": 0,
          "explanation": "Shock follows failure of any one."
        },
        {
          "q": "In compensated shock the BP is:",
          "options": [
            "Maintained",
            "Significantly low",
            "Very high",
            "Unobtainable"
          ],
          "correct": 0,
          "explanation": "Tachycardia and vasoconstriction hold it up."
        },
        {
          "q": "Shock with bradycardia and warm, dry skin:",
          "options": [
            "Neurogenic",
            "Hypovolemic",
            "Cardiogenic",
            "Septic"
          ],
          "correct": 0,
          "explanation": "Lost sympathetic tone."
        },
        {
          "q": "Anaphylactic shock is:",
          "options": [
            "Distributive",
            "Hypovolemic",
            "Cardiogenic",
            "Obstructive"
          ],
          "correct": 0,
          "explanation": "Vessels dilate and leak."
        },
        {
          "q": "Earliest measurable sign of compensated shock:",
          "options": [
            "Tachycardia",
            "Hypotension",
            "Bradycardia",
            "Cyanosis"
          ],
          "correct": 0,
          "explanation": "Hypotension is late."
        },
        {
          "q": "Spinal cord injury above T6, hypotension, bradycardia, warm dry skin:",
          "options": [
            "Neurogenic shock",
            "Hidden bleeding only",
            "Cardiogenic shock",
            "Septic shock"
          ],
          "correct": 0,
          "explanation": "Still look for bleeding."
        },
        {
          "q": "Best finding to separate obstructive from cardiogenic shock:",
          "options": [
            "Absent breath sounds on one side (tension pneumothorax)",
            "Low BP",
            "Raised JVP",
            "Cool, clammy skin"
          ],
          "correct": 0,
          "explanation": "Both can raise the JVP."
        },
        {
          "q": "Trauma patient: tachycardic, cool skin, normal BP. Stage?",
          "options": [
            "Compensated shock",
            "Irreversible",
            "Decompensated",
            "No shock: BP is normal"
          ],
          "correct": 0,
          "explanation": "Treat before the BP falls."
        },
        {
          "q": "\"Cold and wet\" (crackles, raised JVP, low BP) suggests:",
          "options": [
            "Cardiogenic shock",
            "Hypovolemic shock",
            "Neurogenic shock",
            "Anaphylaxis"
          ],
          "correct": 0,
          "explanation": "Avoid large fluid boluses."
        },
        {
          "q": "An early sign of compensated shock on the BP itself:",
          "options": [
            "Narrowing pulse pressure",
            "Widening pulse pressure",
            "High systolic",
            "No change ever"
          ],
          "correct": 0,
          "explanation": "Diastolic rises with vasoconstriction."
        }
      ],
      "flashcards": [
        {
          "question": "Perfusion triangle",
          "answer": "Pump (heart), fluid (blood volume), container (vessels). All three must work.",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Hypoxia vs hypoperfusion",
          "answer": "Hypoxia: too little oxygen at tissue level. Hypoperfusion (shock): too little blood flow to deliver it; it causes hypoxia.",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Three stages of shock",
          "answer": "Compensated (BP maintained), decompensated (hypotension, organ damage), irreversible (organ failure).",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Why BP is a late sign",
          "answer": "Tachycardia and vasoconstriction maintain BP until compensation fails.",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Four categories of shock",
          "answer": "Hypovolemic, cardiogenic, distributive (septic, anaphylactic, neurogenic), obstructive.",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Neurogenic shock",
          "answer": "Warm, dry skin and bradycardia from lost sympathetic tone; most other shock is tachycardic and cool.",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Early signs of compensated shock",
          "answer": "Anxiety, tachycardia, pale cool skin, sweating, slow capillary refill, narrowing pulse pressure, normal BP.",
          "category": "Pathophysiology of Perfusion & Shock"
        },
        {
          "question": "Cardiogenic shock",
          "answer": "Cold and wet: cool clammy skin, hypotension, crackles, raised JVP.",
          "category": "Pathophysiology of Perfusion & Shock"
        }
      ],
      "critical": [
        {
          "id": "crit_2_2_1",
          "scenario": "An unrestrained driver in a high-speed crash is anxious and restless, pale and sweaty. BP 118/74, HR 118. Left upper quadrant tenderness. Your partner says the BP is normal, so he's fine.",
          "question": "Interpretation?",
          "options": [
            {
              "t": "Compensated shock, likely from spleen bleeding: rapid transport to a trauma centre",
              "f": "Correct."
            },
            {
              "t": "Normal vital signs: he's just anxious",
              "f": "Tachycardia, skin signs and restlessness are compensation."
            },
            {
              "t": "Wait for the BP to fall before acting",
              "f": "Too late."
            },
            {
              "t": "Large fluid bolus on scene",
              "f": "Transport; permissive fluids en route."
            }
          ],
          "correct": 0,
          "explanation": "Recognise shock before hypotension.",
          "kpi": "Recognizes compensated shock despite normal blood pressure using tachycardia, skin signs, and mental status"
        },
        {
          "id": "crit_2_2_2",
          "scenario": "A 78-year-old on furosemide has eaten and drunk little for 24 hours with diarrhea. Newly confused, BP 88/56, HR 104, cool pale skin, clear lungs. Her daughter says her BP is always low.",
          "question": "How do you read the BP?",
          "options": [
            {
              "t": "Shock: confusion, tachycardia and cool skin show hypoperfusion whatever her usual BP; likely hypovolemic",
              "f": "Correct."
            },
            {
              "t": "Normal for her: no action",
              "f": "New confusion with tachycardia isn't normal."
            },
            {
              "t": "Cardiogenic: no fluids",
              "f": "Clear lungs and fluid losses point to hypovolemia."
            },
            {
              "t": "Dementia: routine transport",
              "f": "This is new."
            }
          ],
          "correct": 0,
          "explanation": "Diuretic plus poor intake plus diarrhea: oxygen to target, fluids per protocol, transport.",
          "kpi": "Recognizes hypoperfusion in elderly patients considering baseline status and medication effects"
        },
        {
          "id": "crit_2_2_3",
          "scenario": "A peanut-allergic 22-year-old ate peanut butter: hives, swollen lips and tongue, stridor, wheeze. BP 88/52, HR 122, SpO₂ 88%. Her auto-injector hasn't been used.",
          "question": "Priority, and type of shock?",
          "options": [
            {
              "t": "IM epinephrine into the thigh now: anaphylactic (distributive) shock",
              "f": "Correct."
            },
            {
              "t": "CPAP and fluids first",
              "f": "Epinephrine first."
            },
            {
              "t": "Antihistamine first",
              "f": "Not first-line."
            },
            {
              "t": "Hypovolemic shock: fluids only",
              "f": "It's distributive."
            }
          ],
          "correct": 0,
          "explanation": "Adult auto-injector 0.3 mg; repeat after 5 minutes if needed. Stridor means airway swelling: call ALS.",
          "kpi": "Identifies anaphylactic shock and initiates epinephrine as the priority intervention"
        }
      ]
    },
    {
      "id": "c2s3",
      "shortTitle": "2.3 Scene Size-up & Safety",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Scene Size-up & Safety",
        "lead": "The size-up starts with the dispatch information and never stops. Before you touch anyone, know that it's safe, what happened, how many patients there are and what help you need. An injured rescuer helps nobody.",
        "sections": [
          {
            "type": "steps",
            "title": "Every scene",
            "icon": "eye",
            "steps": [
              {
                "title": "Safe?",
                "text": "Traffic, violence, weapons, fire, gas, chemicals, power lines, animals, unstable structures."
              },
              {
                "title": "PPE",
                "text": "Gloves always; eye protection, mask, gown as needed."
              },
              {
                "title": "What happened?",
                "text": "Mechanism of injury or nature of illness."
              },
              {
                "title": "How many patients?",
                "text": "Scan the whole scene before focusing on one."
              },
              {
                "title": "What help?",
                "text": "Police, fire, ALS, more ambulances, specialist teams; declare a multiple-casualty incident early."
              }
            ]
          },
          {
            "type": "groups",
            "title": "Stage, don't enter",
            "icon": "ban",
            "groups": [
              {
                "title": "Violence",
                "items": [
                  "Fighting, weapons, domestic disturbance",
                  "Wait for police to secure the scene"
                ]
              },
              {
                "title": "Hazards",
                "items": [
                  "Fire, smoke, hazardous materials, confined spaces",
                  "Downed power lines: at least one full pole span away, treat as live"
                ]
              },
              {
                "title": "Roadway",
                "items": [
                  "Block with the vehicle, lights on, high-visibility clothing",
                  "Transportation incidents are the leading cause of on-duty EMS deaths"
                ]
              }
            ]
          },
          {
            "type": "criteria",
            "title": "Spinal motion restriction (blunt trauma)",
            "icon": "bone",
            "include": [
              "Altered consciousness or intoxication",
              "Midline spinal pain or tenderness",
              "New numbness, weakness or tingling",
              "Spinal deformity",
              "Distracting injury or circumstances"
            ],
            "exclude": [
              "Alert, sober, no midline pain or tenderness, normal neuro exam, no distracting injury",
              "Long backboard for transport: use a collar and scoop or vacuum mattress instead"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Major incidents",
                "items": [
                  {
                    "label": "METHANE report",
                    "sub": "Structured first report",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  },
                  {
                    "label": "MCI course",
                    "sub": "Scene management",
                    "href": "../pages/mci.html",
                    "icon": "siren"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "The scene size-up begins:",
          "options": [
            "With the dispatch information",
            "At the patient's side",
            "After the primary assessment",
            "At the hospital"
          ],
          "correct": 0,
          "explanation": "And continues throughout the call."
        },
        {
          "q": "Leading cause of on-duty EMS deaths:",
          "options": [
            "Transportation incidents: ambulance crashes and roadside struck-by",
            "Needlestick injuries",
            "Heart attacks only",
            "Patient assaults"
          ],
          "correct": 0,
          "explanation": "Seat belts, safe driving, scene blocking, high-visibility clothing."
        },
        {
          "q": "Which is NOT part of the scene size-up?",
          "options": [
            "A full set of vital signs",
            "Mechanism of injury",
            "Extra resources",
            "Number of patients"
          ],
          "correct": 0,
          "explanation": "Vital signs come later."
        },
        {
          "q": "High-speed rollover, patient walking around:",
          "options": [
            "Assess thoroughly for hidden injuries",
            "No injuries: they're walking",
            "Only check where it hurts",
            "Transport without assessment"
          ],
          "correct": 0,
          "explanation": "Mechanism raises suspicion; walking doesn't rule out injury."
        },
        {
          "q": "When should PPE go on?",
          "options": [
            "Before patient contact",
            "After the primary assessment",
            "Only if infectious",
            "At handover"
          ],
          "correct": 0,
          "explanation": "Gloves at minimum."
        },
        {
          "q": "You suspect violence at the scene:",
          "options": [
            "Stage at a safe distance and wait for police",
            "Enter cautiously together",
            "Announce yourself loudly and go in",
            "Call medical direction"
          ],
          "correct": 0,
          "explanation": "No patient is worth a rescuer's life."
        },
        {
          "q": "Alert, sober man fell 2.5 m from a ladder: no neck or back pain, no midline tenderness, normal neuro exam, no other injuries. Spinal motion restriction?",
          "options": [
            "Not required by the 2018 joint guidance (follow local protocol)",
            "Long backboard always for any fall",
            "Collar plus backboard for transport",
            "Walk him around to test"
          ],
          "correct": 0,
          "explanation": "SMR is for altered patients, midline pain or tenderness, neuro signs, deformity or distraction."
        },
        {
          "q": "Two-car crash: one walking patient, one in a car, and a reported third in a back seat. First?",
          "options": [
            "Confirm the number and condition of all patients",
            "Help with the walking patient",
            "Start extrication of the car patient",
            "Assess only the patient nearest you"
          ],
          "correct": 0,
          "explanation": "Then call for resources."
        },
        {
          "q": "Downed power line across a crashed car:",
          "options": [
            "Stay at least one pole span away; treat as live; call the utility",
            "Move it with a wooden stick",
            "Approach in rubber boots",
            "Ignore if sparks have stopped"
          ],
          "correct": 0,
          "explanation": "Tell the occupants to stay in the car."
        },
        {
          "q": "Long backboards are now mainly for:",
          "options": [
            "Extrication",
            "Transport of all trauma patients",
            "Comfort",
            "Children only"
          ],
          "correct": 0,
          "explanation": "Transport on a scoop or vacuum mattress with a collar when SMR is needed."
        }
      ],
      "flashcards": [
        {
          "question": "Size-up questions",
          "answer": "Safe? PPE? Mechanism or nature of illness? How many patients? What extra resources?",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "Leading cause of on-duty EMS deaths",
          "answer": "Transportation incidents: ambulance crashes and being struck at the roadside. Belt up, block, wear high-visibility clothing.",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "MOI vs NOI",
          "answer": "Mechanism of injury: how trauma happened. Nature of illness: the medical complaint.",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "When not to enter",
          "answer": "Violence, weapons, fire, hazardous materials, downed power lines, unstable structures or any hazard you can't control. Stage and wait.",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "Spinal motion restriction criteria",
          "answer": "Altered consciousness or intoxication, midline spinal pain or tenderness, neuro signs, spinal deformity, distracting injury.",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "When to declare a multiple-casualty incident",
          "answer": "When patients outnumber resources. Scan the whole scene first.",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "Minimum PPE",
          "answer": "Gloves; add eye protection, mask, gown by expected exposure.",
          "category": "Scene Size-up & Safety"
        },
        {
          "question": "Downed power lines",
          "answer": "Stay at least one full pole span away, treat as live, call the utility, set a perimeter.",
          "category": "Scene Size-up & Safety"
        }
      ],
      "critical": [
        {
          "id": "crit_2_3_1",
          "scenario": "\"Domestic disturbance\"; police not yet there. A man holding a baseball bat is shouting at a woman with blood on her face. Broken glass on the porch. Your partner wants to go in.",
          "question": "Immediate action?",
          "options": [
            {
              "t": "Stage at a safe distance and wait for police to secure the scene",
              "f": "Correct."
            },
            {
              "t": "Approach and calm them from a distance",
              "f": "Too risky with a weapon present."
            },
            {
              "t": "Go in fast: she's bleeding",
              "f": "Rescuer safety first."
            },
            {
              "t": "Leave the area entirely",
              "f": "Stage nearby, ready to go in."
            }
          ],
          "correct": 0,
          "explanation": "Violence plus a weapon: police first.",
          "kpi": "Recognizes an unsafe scene and stages for law enforcement before entering"
        },
        {
          "id": "crit_2_3_2",
          "scenario": "Night, rain, a crash against the median of a busy highway. No police or fire yet. Your partner unloads equipment on the traffic side.",
          "question": "Immediate safety measures?",
          "options": [
            {
              "t": "Park to block the scene from traffic, all warning lights on, high-visibility clothing, police for traffic control, work on the protected side",
              "f": "Correct."
            },
            {
              "t": "Rush to the patient; deal with traffic later",
              "f": "Struck-by deaths happen exactly like this."
            },
            {
              "t": "Turn off lights to avoid dazzling drivers",
              "f": "Make the scene visible."
            },
            {
              "t": "Park far beyond the crash",
              "f": "Use the vehicle to shield the scene."
            }
          ],
          "correct": 0,
          "explanation": "Keep watching the traffic throughout.",
          "kpi": "Prioritizes scene safety (vehicle positioning, high-visibility vests, traffic control) before patient contact at roadway incidents"
        },
        {
          "id": "crit_2_3_3",
          "scenario": "11 pm, \"person down\" behind a store; the caller hung up. Legs visible behind a dumpster in a dark, secluded lane. Your partner wants to run ahead alone.",
          "question": "Before approaching?",
          "options": [
            {
              "t": "Request police and assess from a safe position before going in",
              "f": "Correct: unknown, isolated and dark."
            },
            {
              "t": "Run in alone to save time",
              "f": "Never split up at an unsafe scene."
            },
            {
              "t": "Approach together with a torch",
              "f": "Safety can't be assured yet."
            },
            {
              "t": "Shout from the ambulance and leave",
              "f": "Stay and get help."
            }
          ],
          "correct": 0,
          "explanation": "It could be a crime, a trap or hazardous drugs.",
          "kpi": "Recognizes high-risk scene indicators (secluded location, poor lighting, limited dispatch info) and stages for law enforcement"
        }
      ]
    },
    {
      "id": "c2s4",
      "shortTitle": "2.4 Primary Assessment (XABCDE)",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Primary Assessment (XABCDE)",
        "lead": "Find and fix what kills first, in the order it kills. Massive bleeding beats airway, airway beats breathing, and so on. Treat each problem as you find it, then decide quickly: is this patient time-critical?",
        "sections": [
          {
            "type": "steps",
            "title": "XABCDE",
            "icon": "list",
            "steps": [
              {
                "title": "General impression",
                "text": "Sick or not sick? Responsive? Obvious bleeding?"
              },
              {
                "title": "X – exsanguinating bleeding",
                "text": "Tourniquet or packing now, before the airway."
              },
              {
                "title": "A – airway",
                "text": "Talking? Sounds? Head-tilt/chin-lift (medical) or jaw thrust with in-line stabilisation (trauma); suction; OPA or NPA."
              },
              {
                "title": "B – breathing",
                "text": "Rate, depth, effort, symmetry, breath sounds, SpO₂. Ventilate if inadequate."
              },
              {
                "title": "C – circulation",
                "text": "Pulse, skin, capillary refill, other bleeding; shock?"
              },
              {
                "title": "D – disability",
                "text": "AVPU or GCS, pupils, glucose."
              },
              {
                "title": "E – expose and environment",
                "text": "Look for hidden injuries; keep warm; transport decision."
              }
            ]
          },
          {
            "type": "table",
            "title": "AVPU",
            "icon": "brain",
            "columns": [
              "",
              "Patient"
            ],
            "rows": [
              [
                "A",
                "Alert"
              ],
              [
                "V",
                "Responds to voice"
              ],
              [
                "P",
                "Responds only to pain"
              ],
              [
                "U",
                "Unresponsive"
              ]
            ]
          },
          {
            "type": "table",
            "title": "OPA or NPA?",
            "icon": "wind",
            "columns": [
              "",
              "OPA",
              "NPA"
            ],
            "rows": [
              [
                "Gag reflex",
                "Absent",
                "Present or absent"
              ],
              [
                "Avoid",
                "Conscious patients",
                "Suspected basal skull fracture"
              ]
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
                    "sub": "For the D step",
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
          "q": "First priority in XABCDE on reaching the patient:",
          "options": [
            "Control catastrophic external bleeding",
            "Check the airway",
            "Count the breathing",
            "Check a pulse"
          ],
          "correct": 0,
          "explanation": "X comes before A."
        },
        {
          "q": "Unresponsive trauma patient, suspected spinal injury. Airway technique:",
          "options": [
            "Jaw thrust with manual in-line stabilisation",
            "Head-tilt/chin-lift",
            "Recovery position",
            "Turn prone"
          ],
          "correct": 0,
          "explanation": "Head-tilt/chin-lift for medical patients."
        },
        {
          "q": "Which is NOT a sign of adequate breathing?",
          "options": [
            "Accessory muscle use",
            "Rate 16",
            "Equal chest rise",
            "Clear breath sounds"
          ],
          "correct": 0,
          "explanation": "Accessory muscles mean increased work."
        },
        {
          "q": "Responds only to a painful stimulus. AVPU?",
          "options": [
            "P",
            "A",
            "V",
            "U"
          ],
          "correct": 0,
          "explanation": "Record the GCS too."
        },
        {
          "q": "An OPA is indicated in:",
          "options": [
            "An unresponsive patient with no gag reflex",
            "A coughing, gagging patient",
            "A conscious snoring patient",
            "An awake stroke patient"
          ],
          "correct": 0,
          "explanation": "Use an NPA if there's a gag reflex."
        },
        {
          "q": "Tachycardia, cool pale skin and slow capillary refill in the C step:",
          "options": [
            "Shock",
            "Adequate perfusion",
            "Respiratory failure only",
            "Neurological injury only"
          ],
          "correct": 0,
          "explanation": "Look for bleeding and a cause."
        },
        {
          "q": "Arterial spurting from a lower leg wound. Sequence?",
          "options": [
            "Tourniquet now, then the airway",
            "Airway first",
            "IV first",
            "Breathing first"
          ],
          "correct": 0,
          "explanation": "X before A."
        },
        {
          "q": "Snoring, RR 8, SpO₂ 85%, no bleeding. Next?",
          "options": [
            "Open the airway, then assist ventilation with a BVM",
            "Non-rebreather mask only",
            "Chest compressions",
            "Pulse check and drive"
          ],
          "correct": 0,
          "explanation": "Fix A, then B."
        },
        {
          "q": "Best position for an unresponsive medical patient breathing adequately (no spinal concern):",
          "options": [
            "Recovery position",
            "Supine flat",
            "Prone",
            "Sitting upright"
          ],
          "correct": 0,
          "explanation": "Lets fluids drain from the mouth."
        },
        {
          "q": "\"D\" includes:",
          "options": [
            "AVPU or GCS, pupils and glucose",
            "Detailed head-to-toe",
            "Drug history",
            "Destination"
          ],
          "correct": 0,
          "explanation": "Hypoglycemia is quickly reversible."
        }
      ],
      "flashcards": [
        {
          "question": "X in XABCDE",
          "answer": "Exsanguinating (catastrophic) external bleeding: control it before the airway.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "Head-tilt/chin-lift vs jaw thrust",
          "answer": "Head-tilt/chin-lift for medical patients; jaw thrust with in-line stabilisation for suspected spinal injury.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "What to assess in B",
          "answer": "Rate, depth, effort, symmetry, breath sounds, SpO₂, and skin colour.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "AVPU",
          "answer": "Alert, responds to Voice, responds to Pain, Unresponsive.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "The primary assessment's goal",
          "answer": "Find and fix immediate threats to life in order, then decide if the patient is time-critical.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "Unresponsive medical patient breathing adequately",
          "answer": "Recovery position (lateral), unless spinal injury is suspected.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "OPA vs NPA",
          "answer": "OPA: unresponsive, no gag reflex. NPA: gag reflex present; avoid with suspected basal skull fracture.",
          "category": "Primary Assessment (XABCDE)"
        },
        {
          "question": "E in XABCDE",
          "answer": "Expose to find injuries and signs; protect from the environment (keep warm); make the transport decision.",
          "category": "Primary Assessment (XABCDE)"
        }
      ],
      "critical": [
        {
          "id": "crit_2_4_1",
          "scenario": "A mid-forearm amputation in machinery: arterial spurting despite a coworker's belt tourniquet. Pale and sweaty, airway patent, RR 24.",
          "question": "Priority action?",
          "options": [
            {
              "t": "Take over bleeding control: commercial tourniquet above the wound, tighten until bleeding stops, note the time",
              "f": "Correct: that's X."
            },
            {
              "t": "Oxygen first for the fast breathing",
              "f": "He's bleeding to death."
            },
            {
              "t": "IV fluids first",
              "f": "Stop the bleeding first."
            },
            {
              "t": "Leave the belt: it's on",
              "f": "It isn't working."
            }
          ],
          "correct": 0,
          "explanation": "Then work through A to E and transport rapidly to a trauma centre.",
          "kpi": "Prioritizes exsanguinating hemorrhage control (X) above all other primary assessment steps"
        },
        {
          "id": "crit_2_4_2",
          "scenario": "A 6-year-old asthmatic is tripoding with wheeze, retractions, can't finish sentences. RR 38, HR 140, SpO₂ 88%, blue lips. No bleeding.",
          "question": "How do you prioritise with XABCDE?",
          "options": [
            {
              "t": "X clear, A patent; B is the problem: oxygen to target, bronchodilator per protocol, let him sit up, ventilate if he tires, transport",
              "f": "Correct."
            },
            {
              "t": "C first: IV for the heart rate",
              "f": "The tachycardia is from hypoxia."
            },
            {
              "t": "Lie him flat to rest",
              "f": "Let him sit."
            },
            {
              "t": "D first: check glucose",
              "f": "Breathing first."
            }
          ],
          "correct": 0,
          "explanation": "Drowsiness or a quieter chest means he's tiring: assist ventilation.",
          "kpi": "Correctly sequences XABCDE priorities in a severe respiratory emergency — prioritizing breathing interventions"
        },
        {
          "id": "crit_2_4_3",
          "scenario": "A driver hit a tree at 65 km/h. Confused, snoring respirations, RR 10 and shallow, SpO₂ 91%, weak radial pulse 116, pale and sweaty, angulated right femur.",
          "question": "Most important intervention first?",
          "options": [
            {
              "t": "Open the airway with a jaw thrust and in-line stabilisation, adjunct as tolerated, then assist ventilation",
              "f": "Correct: A, then B."
            },
            {
              "t": "Splint the femur first",
              "f": "Airway and breathing come first."
            },
            {
              "t": "Backboard and go",
              "f": "He needs his airway managed now."
            },
            {
              "t": "Check pupils first",
              "f": "D after A, B and C."
            }
          ],
          "correct": 0,
          "explanation": "Then treat shock and splint during movement; rapid transport to a trauma centre.",
          "kpi": "Prioritizes airway management (A) over extremity injuries in the XABCDE sequence"
        }
      ]
    },
    {
      "id": "c2s5",
      "shortTitle": "2.5 Vital Signs",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Vital Signs",
        "lead": "One set of vital signs is a snapshot; the trend is the story. Know the normal ranges for each age, measure carefully with the right equipment, and repeat often. A falling BP and a rising pulse matter more than any single number.",
        "sections": [
          {
            "type": "table",
            "title": "Normal at rest (awake)",
            "icon": "activity",
            "stack": true,
            "columns": [
              "Age",
              "Heart rate /min",
              "Breaths /min"
            ],
            "rows": [
              [
                "Infant",
                "100–180",
                "30–53"
              ],
              [
                "Toddler",
                "98–140",
                "22–37"
              ],
              [
                "Preschool",
                "80–120",
                "20–28"
              ],
              [
                "School age",
                "75–118",
                "18–25"
              ],
              [
                "Adolescent",
                "60–100",
                "12–20"
              ],
              [
                "Adult",
                "60–100",
                "12–20"
              ]
            ],
            "notes": [
              "SpO₂ 94–98% on room air; temperature about 37 °C (fever 38 °C or more); capillary refill 2 seconds or less.",
              "Hypotension in children: systolic below 70 mmHg (infants), below 70 + (2 × age in years) for ages 1–10, below 90 mmHg from 10 years."
            ]
          },
          {
            "type": "groups",
            "title": "Measure it right",
            "icon": "wrench",
            "groups": [
              {
                "title": "BP cuff",
                "items": [
                  "Bladder about 40% of arm circumference wide and 80% long",
                  "Too small reads falsely high; too large reads falsely low"
                ]
              },
              {
                "title": "Pulse sites",
                "items": [
                  "Infant: brachial",
                  "Unresponsive adult or child: carotid (femoral also)",
                  "Radial present: some perfusion"
                ]
              },
              {
                "title": "Postural (orthostatic) change",
                "items": [
                  "Systolic falls 20 mmHg or more, or diastolic 10 mmHg or more, within 3 minutes of standing",
                  "Pulse rise of 30/min or more suggests significant volume loss",
                  "Stop if they feel faint"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "How often?",
            "icon": "clock",
            "columns": [
              "Patient",
              "Recheck"
            ],
            "rows": [
              [
                "Unstable",
                "Every 5 minutes"
              ],
              [
                "Stable",
                "Every 15 minutes"
              ],
              [
                "Any patient",
                "After every intervention"
              ]
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
                    "label": "PALS course",
                    "sub": "Pediatric vital signs",
                    "href": "../pages/pals.html",
                    "icon": "baby"
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
          "q": "Commonest cause of a falsely high BP reading:",
          "options": [
            "A cuff that is too small",
            "A cuff that is too large",
            "Stethoscope placement",
            "Measuring over a vein"
          ],
          "correct": 0,
          "explanation": "Bladder about 40% of the arm circumference wide."
        },
        {
          "q": "A 6-month-old has a heart rate of 150. You should:",
          "options": [
            "Recognise it as normal for an infant and assess the rest",
            "Start CPR",
            "Give oxygen and call ALS",
            "Assume sepsis"
          ],
          "correct": 0,
          "explanation": "Infant normal 100–180/min."
        },
        {
          "q": "Opioid overdose vital sign pattern:",
          "options": [
            "Slow breathing and slow pulse",
            "Fast breathing and fast pulse",
            "High BP and fast breathing",
            "Hyperthermia and tachycardia"
          ],
          "correct": 0,
          "explanation": "Plus pinpoint pupils."
        },
        {
          "q": "Trauma: BP 118/72, HR 96, then 15 minutes later BP 96/62, HR 122, cool and clammy. Trend?",
          "options": [
            "Compensated shock moving to decompensation: act now",
            "Improving",
            "Normal stress response",
            "Drug side effect"
          ],
          "correct": 0,
          "explanation": "Falling BP with rising pulse."
        },
        {
          "q": "Normal adult resting heart rate:",
          "options": [
            "60–100/min",
            "40–60/min",
            "100–140/min",
            "80–120/min"
          ],
          "correct": 0,
          "explanation": "Fit athletes may be lower."
        },
        {
          "q": "Hypotension threshold for a 4-year-old:",
          "options": [
            "Systolic below 78 mmHg",
            "Systolic below 100 mmHg",
            "Systolic below 60 mmHg",
            "Systolic below 90 mmHg"
          ],
          "correct": 0,
          "explanation": "70 + (2 × age): 70 + 8 = 78."
        },
        {
          "q": "Pulse to check in an infant:",
          "options": [
            "Brachial",
            "Carotid",
            "Radial",
            "Temporal"
          ],
          "correct": 0,
          "explanation": "On the inside of the upper arm."
        },
        {
          "q": "How often should an unstable patient's vital signs be rechecked?",
          "options": [
            "Every 5 minutes",
            "Every 15 minutes",
            "Every 30 minutes",
            "Only at the hospital"
          ],
          "correct": 0,
          "explanation": "And after every intervention."
        },
        {
          "q": "Normal infant breathing rate:",
          "options": [
            "30–53/min",
            "12–20/min",
            "60–80/min",
            "10–15/min"
          ],
          "correct": 0,
          "explanation": "Adults 12–20/min."
        },
        {
          "q": "On standing, systolic falls from 112 to 84 and pulse rises from 88 to 122. This is:",
          "options": [
            "A significant postural drop suggesting volume loss",
            "Normal",
            "An MI",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "Systolic fall of 20 mmHg or more, pulse rise of 30/min or more."
        }
      ],
      "flashcards": [
        {
          "question": "Normal adult heart rate",
          "answer": "60–100/min at rest.",
          "category": "Vital Signs"
        },
        {
          "question": "Normal breathing rates by age",
          "answer": "Adult 12–20; adolescent 12–20; school age 18–25; preschool 20–28; toddler 22–37; infant 30–53/min.",
          "category": "Vital Signs"
        },
        {
          "question": "Pulse for an unresponsive adult",
          "answer": "Carotid: beside the trachea, inside the sternocleidomastoid.",
          "category": "Vital Signs"
        },
        {
          "question": "Pulse for an infant",
          "answer": "Brachial: inside of the upper arm.",
          "category": "Vital Signs"
        },
        {
          "question": "Cuff too small",
          "answer": "Falsely high BP. The bladder should be about 40% of arm circumference wide and 80% long.",
          "category": "Vital Signs"
        },
        {
          "question": "Recheck frequency",
          "answer": "Every 5 minutes if unstable, every 15 minutes if stable, and after every intervention.",
          "category": "Vital Signs"
        },
        {
          "question": "Normal SpO₂",
          "answer": "94–98% on room air for most people.",
          "category": "Vital Signs"
        },
        {
          "question": "Orthostatic (postural) hypotension",
          "answer": "Systolic fall of 20 mmHg or more, or diastolic 10 mmHg or more, within 3 minutes of standing. A pulse rise of 30/min or more suggests significant volume loss.",
          "category": "Vital Signs"
        }
      ],
      "critical": [
        {
          "id": "crit_2_5_1",
          "scenario": "A 72-year-old felt dizzy on standing. Seated: HR 88, BP 112/70. On standing he goes pale: HR 122, BP 84/56. You sit him back down.",
          "question": "What do the trends mean?",
          "options": [
            {
              "t": "A significant postural drop: likely volume depletion; transport for assessment and fluids",
              "f": "Correct."
            },
            {
              "t": "Heart attack: aspirin and emergency transport",
              "f": "The pattern points to volume loss; look for bleeding (melena) too."
            },
            {
              "t": "Normal for age",
              "f": "A 28 mmHg fall and 34/min rise is not normal."
            },
            {
              "t": "Make him stand again to confirm",
              "f": "Don't risk a faint."
            }
          ],
          "correct": 0,
          "explanation": "Systolic fall of 20 mmHg or more, pulse rise of 30/min or more. Ask about bleeding, diuretics, vomiting and diarrhea.",
          "kpi": "Orthostatic vital sign interpretation"
        },
        {
          "id": "crit_2_5_2",
          "scenario": "A 5-year-old has had fever and vomiting for 24 hours: lethargic, dry mouth, no urine for 8 hours. HR 148, BP 82/58, capillary refill 4 seconds, temperature 39.1 °C.",
          "question": "Interpretation and next action?",
          "options": [
            {
              "t": "Shock from dehydration (tachycardia, slow refill, lethargy); BP still just above the limit: oxygen, keep warm, rapid transport, fluids per protocol",
              "f": "Correct."
            },
            {
              "t": "Fever only: cool and routine transport",
              "f": "Lethargy and slow refill mean shock."
            },
            {
              "t": "Normal for a child with fever",
              "f": "Not with these perfusion signs."
            },
            {
              "t": "Wait for hypotension before treating",
              "f": "Hypotension is late in children."
            }
          ],
          "correct": 0,
          "explanation": "Her limit is 70 + (2 × 5) = 80 mmHg. Children compensate until they suddenly don't.",
          "kpi": "Pediatric shock recognition"
        },
        {
          "id": "crit_2_5_3",
          "scenario": "High-speed crash: confused, cool and clammy. HR 128, BP 104/70, RR 24, SpO₂ 94%. Eight minutes later: HR 136, BP 86/56, RR 28, SpO₂ 91%. 12 minutes to the trauma centre.",
          "question": "Interpretation and action?",
          "options": [
            {
              "t": "Decompensated shock: oxygen to target, vital signs every 5 minutes, ALS intercept, pre-alert, lights and sirens",
              "f": "Correct."
            },
            {
              "t": "Still compensating: routine transport",
              "f": "BP is falling."
            },
            {
              "t": "Stop to start two IVs",
              "f": "Don't delay transport."
            },
            {
              "t": "Large boluses to normal BP",
              "f": "Permissive fluids only."
            }
          ],
          "correct": 0,
          "explanation": "Falling BP with rising pulse means compensation is failing.",
          "kpi": "Shock trend recognition"
        }
      ]
    },
    {
      "id": "c2s6",
      "shortTitle": "2.6 Monitoring Devices",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Monitoring Devices",
        "lead": "Monitors extend your senses but they can lie. Look at the waveform before you trust the number, and treat the patient, not the screen. Capnography and glucose are two of the most useful checks you have.",
        "sections": [
          {
            "type": "groups",
            "title": "Pulse oximetry: when it lies",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Reads low or fails",
                "items": [
                  "Cold hands, poor perfusion, movement",
                  "Nail polish; poor waveform"
                ]
              },
              {
                "title": "Reads falsely normal",
                "items": [
                  "Carbon monoxide: binds hemoglobin about 200–250 times more strongly than oxygen"
                ]
              },
              {
                "title": "Do",
                "items": [
                  "Check the waveform; warm the hand; try the ear",
                  "Match it with the patient's colour, breathing and mental status"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "Read the capnograph",
            "icon": "activity",
            "columns": [
              "Finding",
              "Means"
            ],
            "rows": [
              [
                "EtCO₂ 35–45 mmHg, square waveform",
                "Normal ventilation"
              ],
              [
                "Shark-fin waveform",
                "Bronchospasm (asthma, COPD)"
              ],
              [
                "Rising EtCO₂ with drowsiness",
                "Hypoventilation: assist breathing"
              ],
              [
                "Low EtCO₂, fast breathing",
                "Hyperventilation or poor perfusion"
              ],
              [
                "Flat line after intubation",
                "Tube out or no circulation: check now"
              ],
              [
                "During CPR below 10 mmHg",
                "Poor compressions"
              ],
              [
                "Sudden rise during CPR",
                "Probable ROSC"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Cardiac monitor leads",
            "icon": "zap",
            "columns": [
              "Lead",
              "AHA colours",
              "IEC colours"
            ],
            "rows": [
              [
                "Right arm",
                "White",
                "Red"
              ],
              [
                "Left arm",
                "Black",
                "Yellow"
              ],
              [
                "Left leg",
                "Red",
                "Green"
              ],
              [
                "Right leg",
                "Green",
                "Black"
              ]
            ],
            "notes": [
              "AHA: \"white on right, smoke over fire\".",
              "A rhythm strip can't rule out a STEMI: record a 12-lead within 10 minutes for chest pain."
            ]
          },
          {
            "type": "list",
            "title": "Glucose",
            "icon": "droplet",
            "items": [
              "Check in altered mental status, seizures, stroke symptoms, diabetes",
              "Hypoglycemia: below 70 mg/dL (3.9 mmol/L)",
              "A normal reading hours ago doesn't rule out a low now"
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
                    "label": "ECG Simulator",
                    "sub": "Rhythms and 12 leads",
                    "href": "../pages/ecg.html",
                    "icon": "activity"
                  },
                  {
                    "label": "O₂ duration calculator",
                    "sub": "Cylinder time",
                    "href": "../pages/Carevent.html",
                    "icon": "timer"
                  }
                ]
              },
              {
                "title": "Baseline",
                "items": [
                  {
                    "ecg": "nsr",
                    "label": "Sinus rhythm",
                    "sub": "Know normal first"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "SpO₂ 92% with cold, pale hands, weak radial pulse and a poor waveform. Best action?",
          "options": [
            "Warm the hand, try the earlobe, match with clinical signs",
            "Accept the number",
            "Immediate high-flow oxygen without looking",
            "Change the battery"
          ],
          "correct": 0,
          "explanation": "Trust the waveform, then the number."
        },
        {
          "q": "During CPR, EtCO₂ jumps from 12 to 42 mmHg:",
          "options": [
            "Probable ROSC",
            "Hyperventilation",
            "Device fault",
            "Tube displaced"
          ],
          "correct": 0,
          "explanation": "Check for a pulse at the next pause."
        },
        {
          "q": "Asthmatic using accessory muscles, 2-word sentences, EtCO₂ 52 mmHg with a shark-fin waveform:",
          "options": [
            "Bronchospasm with CO₂ retention: tiring, may need assisted ventilation",
            "Normal",
            "Anxiety hyperventilation",
            "Pulmonary embolism"
          ],
          "correct": 0,
          "explanation": "High EtCO₂ in asthma is a danger sign."
        },
        {
          "q": "Which rhythm is NOT shockable?",
          "options": [
            "Asystole",
            "Ventricular fibrillation",
            "Pulseless VT",
            "A rhythm the AED calls \"shock advised\""
          ],
          "correct": 0,
          "explanation": "Asystole needs CPR and epinephrine."
        },
        {
          "q": "Normal EtCO₂:",
          "options": [
            "35–45 mmHg",
            "10–20 mmHg",
            "50–60 mmHg",
            "80–100 mmHg"
          ],
          "correct": 0,
          "explanation": "With a square waveform."
        },
        {
          "q": "Hypoglycemia threshold:",
          "options": [
            "Below 70 mg/dL (3.9 mmol/L)",
            "Below 40 mg/dL",
            "Below 100 mg/dL",
            "Below 120 mg/dL"
          ],
          "correct": 0,
          "explanation": "Treat with glucose."
        },
        {
          "q": "Smoke-inhalation patient: SpO₂ 98%, headache, confusion. Why be cautious?",
          "options": [
            "Carbon monoxide makes SpO₂ falsely normal",
            "98% is low",
            "The sensor is always wrong in men",
            "Smoke raises SpO₂ permanently"
          ],
          "correct": 0,
          "explanation": "100% oxygen."
        },
        {
          "q": "IEC colour for the right-arm electrode:",
          "options": [
            "Red",
            "White",
            "Yellow",
            "Green"
          ],
          "correct": 0,
          "explanation": "AHA uses white."
        },
        {
          "q": "Can a 3-lead rhythm strip rule out a STEMI?",
          "options": [
            "No: record a 12-lead",
            "Yes",
            "Only in lead II",
            "Only in women"
          ],
          "correct": 0,
          "explanation": "Within 10 minutes for chest pain."
        },
        {
          "q": "Flat capnography line just after intubation:",
          "options": [
            "Tube displaced or no circulation: check immediately",
            "Normal",
            "Good ventilation",
            "Low battery only"
          ],
          "correct": 0,
          "explanation": "Assume displacement until proven otherwise."
        }
      ],
      "flashcards": [
        {
          "question": "Normal EtCO₂",
          "answer": "35–45 mmHg.",
          "category": "Monitoring Devices"
        },
        {
          "question": "Shark-fin capnography waveform",
          "answer": "Bronchospasm: air trapping in asthma or COPD.",
          "category": "Monitoring Devices"
        },
        {
          "question": "Most important reason to check glucose",
          "answer": "Altered mental status of unknown cause: hypoglycemia is quick to reverse.",
          "category": "Monitoring Devices"
        },
        {
          "question": "Hypoglycemia threshold",
          "answer": "Below 70 mg/dL (3.9 mmol/L).",
          "category": "Monitoring Devices"
        },
        {
          "question": "Sudden EtCO₂ rise during CPR",
          "answer": "Probable ROSC: cardiac output is carrying CO₂ back to the lungs.",
          "category": "Monitoring Devices"
        },
        {
          "question": "Limb lead colours",
          "answer": "AHA: white right arm, black left arm, red left leg (\"white on right, smoke over fire\"). IEC: red right arm, yellow left arm, green left leg.",
          "category": "Monitoring Devices"
        },
        {
          "question": "Carbon monoxide and SpO₂",
          "answer": "The oximeter reads carboxyhemoglobin as oxygenated: SpO₂ looks normal while the patient is hypoxic.",
          "category": "Monitoring Devices"
        },
        {
          "question": "EtCO₂ during CPR",
          "answer": "Below 10 mmHg suggests poor compressions: check depth, rate and recoil.",
          "category": "Monitoring Devices"
        }
      ],
      "critical": [
        {
          "id": "crit_2_6_1",
          "scenario": "Rescued from a smoke-filled room after 10 minutes: confused, coughing, headache. SpO₂ 98% on a non-rebreather with a good waveform; pink, warm skin.",
          "question": "Most critical concern?",
          "options": [
            {
              "t": "Carbon monoxide poisoning with falsely normal SpO₂: keep 100% oxygen, monitor, transport",
              "f": "Correct."
            },
            {
              "t": "SpO₂ 98% proves good oxygenation",
              "f": "Not with CO."
            },
            {
              "t": "Remove the oxygen: he's fine",
              "f": "He needs 100% oxygen."
            },
            {
              "t": "Anxiety",
              "f": "Confusion after smoke is poisoning until proven otherwise."
            }
          ],
          "correct": 0,
          "explanation": "Synthetic materials also raise the risk of cyanide.",
          "kpi": "CO poisoning recognition"
        },
        {
          "id": "crit_2_6_2",
          "scenario": "A 68-year-old with heart failure and COPD on a non-rebreather: SpO₂ 91%, shark-fin waveform, EtCO₂ rising from 46 to 54 mmHg over 8 minutes, getting drowsier.",
          "question": "Next action?",
          "options": [
            {
              "t": "Respiratory failure with CO₂ retention and falling consciousness: assist ventilation with a BVM, titrate oxygen to 88–92%, call ALS and prepare for advanced airway support",
              "f": "Correct. CPAP/NIV is only for patients awake enough to protect their airway."
            },
            {
              "t": "SpO₂ is above 90%: keep monitoring",
              "f": "Rising CO₂ and drowsiness mean failure."
            },
            {
              "t": "Increase the oxygen and wait",
              "f": "More oxygen can worsen CO₂ retention."
            },
            {
              "t": "Let her sleep",
              "f": "She's tiring out."
            }
          ],
          "correct": 0,
          "explanation": "The trend matters more than any one number. Had she been alert and protecting her airway, CPAP/NIV would be an option.",
          "kpi": "Capnography trend interpretation"
        },
        {
          "id": "crit_2_6_3",
          "scenario": "A 78-year-old diabetic on insulin skipped breakfast and is more confused. Glucose now 48 mg/dL. Staff insist it was 132 two hours ago.",
          "question": "Interpretation and action?",
          "options": [
            {
              "t": "The current reading is valid: treat the hypoglycemia (oral glucose if he can swallow safely, otherwise glucagon) and transport",
              "f": "Correct."
            },
            {
              "t": "Trust the earlier reading",
              "f": "Glucose changes fast."
            },
            {
              "t": "Recheck in an hour",
              "f": "Treat now."
            },
            {
              "t": "Give his insulin",
              "f": "That would worsen the low."
            }
          ],
          "correct": 0,
          "explanation": "Insulin without food drops glucose quickly.",
          "kpi": "Hypoglycemia diagnosis and treatment"
        }
      ]
    },
    {
      "id": "c2s7",
      "shortTitle": "2.7 History Taking (SAMPLE / OPQRST)",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "History Taking (SAMPLE / OPQRST)",
        "lead": "Most diagnoses come from the history. Ask open questions first and listen. Use SAMPLE and OPQRST so nothing is missed, check with family and the scene, and always ask about blood thinners.",
        "sections": [
          {
            "type": "table",
            "title": "SAMPLE",
            "icon": "clipboard-list",
            "columns": [
              "",
              "Ask"
            ],
            "rows": [
              [
                "Signs and symptoms",
                "What's wrong? What do you see?"
              ],
              [
                "Allergies",
                "Medicines, foods, latex"
              ],
              [
                "Medications",
                "Including blood thinners, insulin, inhalers, recent changes"
              ],
              [
                "Past history",
                "Heart, lungs, diabetes, surgery, pregnancy"
              ],
              [
                "Last oral intake",
                "What and when"
              ],
              [
                "Events",
                "What happened just before?"
              ]
            ]
          },
          {
            "type": "table",
            "title": "OPQRST (pain and other symptoms)",
            "icon": "target",
            "columns": [
              "",
              "Ask"
            ],
            "rows": [
              [
                "Onset",
                "Sudden or gradual? Doing what?"
              ],
              [
                "Provocation / palliation",
                "What makes it worse or better?"
              ],
              [
                "Quality",
                "Pressure, sharp, tearing, burning?"
              ],
              [
                "Region / radiation",
                "Where? Does it spread?"
              ],
              [
                "Severity",
                "0–10 (or FACES, FLACC)"
              ],
              [
                "Time",
                "How long? Constant or coming and going?"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Get the whole story",
            "icon": "message-circle-question",
            "groups": [
              {
                "title": "Technique",
                "items": [
                  "Open questions first, then closed ones to clarify",
                  "Professional interpreter for language barriers",
                  "Ask family, carers, medication lists; look at the scene"
                ]
              },
              {
                "title": "Red-flag answers",
                "items": [
                  "Chest pain over 20 minutes or not settling with rest or nitroglycerin: ACS",
                  "\"Tearing\" pain: aortic dissection",
                  "Black stools, blood thinners, new confusion"
                ]
              },
              {
                "title": "Refusals: check capacity",
                "items": [
                  "Understands, appreciates, reasons, communicates a choice",
                  "Confusion, intoxication or head injury can remove capacity",
                  "Document carefully"
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
                "title": "Use it",
                "items": [
                  {
                    "label": "Medical assessment",
                    "sub": "Structured history and exam",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Look up a patient's medicines",
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
          "q": "In SAMPLE, P stands for:",
          "options": [
            "Past medical history",
            "Pain",
            "Prior medications",
            "Physical exam"
          ],
          "correct": 0,
          "explanation": "Medications are M."
        },
        {
          "q": "A trauma patient on warfarin is at risk of:",
          "options": [
            "Life-threatening internal bleeding",
            "Allergic reactions",
            "Hypoglycemia",
            "Seizures"
          ],
          "correct": 0,
          "explanation": "Ask about blood thinners in every trauma."
        },
        {
          "q": "Chest pressure for 3 hours, partial relief with nitroglycerin. Most concerning element?",
          "options": [
            "The duration: suggests an evolving MI",
            "Exertional onset",
            "Arm radiation",
            "Partial relief"
          ],
          "correct": 0,
          "explanation": "More than 20 minutes suggests ACS rather than stable angina."
        },
        {
          "q": "Sudden tearing back pain to the groin, pale, HR 122, BP 84/56 in an older man:",
          "options": [
            "Ruptured aortic aneurysm",
            "Muscle spasm",
            "Kidney stone only",
            "Herniated disc"
          ],
          "correct": 0,
          "explanation": "Time-critical surgery."
        },
        {
          "q": "SAMPLE stands for:",
          "options": [
            "Signs/symptoms, Allergies, Medications, Past history, Last intake, Events",
            "Symptoms, Age, Mechanism, Pain, Location, Events",
            "Signs, Airway, Medications, Pulse, Lungs, Exam",
            "Safety, Allergies, Mental status, Pupils, Lungs, ECG"
          ],
          "correct": 0,
          "explanation": "Use it every time."
        },
        {
          "q": "The Q in OPQRST asks about:",
          "options": [
            "Quality: what the pain feels like",
            "Quantity of medication",
            "Quick onset",
            "Questions for family"
          ],
          "correct": 0,
          "explanation": "Pressure, sharp, tearing, burning."
        },
        {
          "q": "Best first question for a conscious patient:",
          "options": [
            "\"Tell me what happened.\"",
            "\"Is the pain sharp?\"",
            "\"Did you fall?\"",
            "\"Yes or no: chest pain?\""
          ],
          "correct": 0,
          "explanation": "Open first, closed to clarify."
        },
        {
          "q": "\"Tearing\" chest pain to the back suggests:",
          "options": [
            "Aortic dissection",
            "Pericarditis",
            "Muscle strain",
            "Reflux"
          ],
          "correct": 0,
          "explanation": "Check arm BPs and pulses."
        },
        {
          "q": "A patient wants to refuse care. Which suggests they lack capacity?",
          "options": [
            "They can't explain the risks you described",
            "They disagree with you",
            "They're angry",
            "They want to see their own doctor"
          ],
          "correct": 0,
          "explanation": "Capacity: understand, appreciate, reason, communicate."
        },
        {
          "q": "Who often has ACS without typical chest pain?",
          "options": [
            "Women, older adults and people with diabetes",
            "Young athletes",
            "Children only",
            "Nobody"
          ],
          "correct": 0,
          "explanation": "Fatigue, nausea, breathlessness, weakness."
        }
      ],
      "flashcards": [
        {
          "question": "SAMPLE",
          "answer": "Signs and symptoms, Allergies, Medications, Past history, Last oral intake, Events.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "OPQRST",
          "answer": "Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "Why ask about anticoagulants in trauma?",
          "answer": "Warfarin, apixaban, rivaroxaban and dabigatran raise the risk of life-threatening bleeding, even from minor injuries.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "Pain scale for pre-verbal or cognitively impaired patients",
          "answer": "FLACC: face, legs, activity, cry, consolability.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "A patient refuses care",
          "answer": "Check capacity, explain the risks, offer alternatives, involve medical direction if needed, document thoroughly, invite them to call back.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "\"Tearing\" pain",
          "answer": "Aortic dissection until proven otherwise.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "Open vs closed questions",
          "answer": "Open (\"Tell me what happened\") gives the story; closed (\"Did it start suddenly?\") clarifies details.",
          "category": "History Taking (SAMPLE / OPQRST)"
        },
        {
          "question": "Who has atypical ACS?",
          "answer": "People with diabetes, women and older adults: fatigue, nausea, breathlessness, weakness or confusion.",
          "category": "History Taking (SAMPLE / OPQRST)"
        }
      ],
      "critical": [
        {
          "id": "crit_2_7_1",
          "scenario": "A 58-year-old with diabetes feels weak and tired. He plays it down. His wife tells you privately he had black, tarry stools yesterday and today. HR 108, BP 96/60, pale and cool.",
          "question": "Which history changes the picture, and next action?",
          "options": [
            {
              "t": "The wife's report of melena: upper GI bleed with early shock – lie flat, oxygen to target, IV access en route, rapid transport",
              "f": "Correct."
            },
            {
              "t": "The diabetes: give orange juice",
              "f": "Check glucose, but melena explains the picture."
            },
            {
              "t": "A stomach bug: routine transport",
              "f": "Melena plus tachycardia is bleeding."
            },
            {
              "t": "Respect his wish not to discuss it and leave",
              "f": "Collateral history saves lives."
            }
          ],
          "correct": 0,
          "explanation": "Always seek collateral history; patients often minimise.",
          "kpi": "Collateral history gathering"
        },
        {
          "id": "crit_2_7_2",
          "scenario": "An injured driver with a deformed femur shouts that your questions are stupid and demands you drive now.",
          "question": "How do you get the essential history?",
          "options": [
            {
              "t": "Acknowledge his pain, explain briefly why you need allergies and medicines for safe pain relief, ask just those now, the rest en route",
              "f": "Correct."
            },
            {
              "t": "Insist on the full SAMPLE before moving",
              "f": "Prioritise and keep moving."
            },
            {
              "t": "Skip all questions",
              "f": "Allergies and medicines are needed for safe treatment."
            },
            {
              "t": "Argue until he complies",
              "f": "De-escalate instead."
            }
          ],
          "correct": 0,
          "explanation": "Trust builds once pain is treated.",
          "kpi": "Difficult patient management"
        },
        {
          "id": "crit_2_7_3",
          "scenario": "A 78-year-old living alone \"fell\", can't remember how, doesn't know the day, and wants only help up. Empty fridge; an empty bottle of her BP medicine.",
          "question": "Best approach?",
          "options": [
            {
              "t": "Treat the confusion as a possible cause of the fall; gather clues from the scene; she lacks capacity to refuse – explain kindly and transport",
              "f": "Correct."
            },
            {
              "t": "Help her up and get a signed refusal",
              "f": "She can't reliably understand the risks."
            },
            {
              "t": "Call a taxi to her doctor",
              "f": "She needs assessment now."
            },
            {
              "t": "Force her onto the stretcher without explanation",
              "f": "Explain calmly."
            }
          ],
          "correct": 0,
          "explanation": "Ask about the events before the fall: infection, dehydration, missed medicines.",
          "kpi": "Capacity assessment and refusal management"
        }
      ]
    },
    {
      "id": "c2s8",
      "shortTitle": "2.8 Secondary Assessment",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Secondary Assessment",
        "lead": "After the life threats are handled, look properly. Go head to toe for big mechanisms and unresponsive patients, or do a focused exam for one clear complaint. In a time-critical patient, do it en route, never at the cost of transport.",
        "sections": [
          {
            "type": "table",
            "title": "Look and feel: DCAP-BTLS",
            "icon": "hand",
            "columns": [
              "Letter",
              "Look for"
            ],
            "rows": [
              [
                "D",
                "Deformities"
              ],
              [
                "C",
                "Contusions"
              ],
              [
                "A",
                "Abrasions"
              ],
              [
                "P",
                "Punctures / penetrations"
              ],
              [
                "B",
                "Burns"
              ],
              [
                "T",
                "Tenderness"
              ],
              [
                "L",
                "Lacerations"
              ],
              [
                "S",
                "Swelling"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Signs worth knowing",
            "icon": "eye",
            "stack": true,
            "columns": [
              "Region",
              "Sign",
              "Suggests"
            ],
            "rows": [
              [
                "Head",
                "Raccoon eyes, Battle's sign, clear fluid from nose or ears",
                "Basal skull fracture"
              ],
              [
                "Eyes",
                "Unequal or unreactive pupils (record size in mm)",
                "Brain injury, drugs"
              ],
              [
                "Neck",
                "Raised JVP; tracheal deviation (late)",
                "Tension pneumothorax, tamponade, heart failure"
              ],
              [
                "Chest",
                "Paradoxical movement; crepitus; crackling under the skin",
                "Flail chest; rib fracture; air leak"
              ],
              [
                "Abdomen",
                "Seat-belt bruise, bruising around the navel or flanks, rigidity",
                "Internal injury or bleeding"
              ],
              [
                "Limbs",
                "Crepitus, deformity, no distal pulse",
                "Fracture; vascular injury"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Special handling",
            "icon": "triangle-alert",
            "items": [
              "Pelvis: don't rock it; pelvic binder at the greater trochanters for suspected fracture with shock",
              "Open chest wound: vented chest seal (or an occlusive dressing taped on three sides); watch for tension",
              "Check circulation, motor and sensation (CMS) before and after every splint"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Walk through it",
                "items": [
                  {
                    "label": "Trauma assessment",
                    "sub": "Head-to-toe trauma exam",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "Medical assessment",
                    "sub": "Focused medical exam",
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
          "q": "A grating sensation over the forearm is:",
          "options": [
            "Crepitus: likely fracture",
            "Muscle strain",
            "Air under the skin",
            "Normal"
          ],
          "correct": 0,
          "explanation": "Splint and check CMS."
        },
        {
          "q": "High-speed crash, alert with chest pain from the steering wheel, stable vitals. Approach?",
          "options": [
            "Rapid head-to-toe with attention to the chest: the mechanism warrants it",
            "No secondary exam",
            "Chest only",
            "Wait for the hospital"
          ],
          "correct": 0,
          "explanation": "Big mechanisms hide injuries."
        },
        {
          "q": "Bruising behind the ear is:",
          "options": [
            "Battle's sign",
            "Raccoon eyes",
            "Cushing's reflex",
            "Halo sign"
          ],
          "correct": 0,
          "explanation": "Suggests basal skull fracture."
        },
        {
          "q": "DCAP-BTLS: the P stands for:",
          "options": [
            "Punctures / penetrations",
            "Pulses",
            "Pain",
            "Pupils"
          ],
          "correct": 0,
          "explanation": "Deformities, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling."
        },
        {
          "q": "PERRL means:",
          "options": [
            "Pupils equal, round, reactive to light",
            "Pulse even, regular, rate low",
            "Perfusion equal right and left",
            "Pain eased, resting, relaxed, lying"
          ],
          "correct": 0,
          "explanation": "Record size in mm."
        },
        {
          "q": "A section of chest moving in on inspiration:",
          "options": [
            "Flail chest (paradoxical movement)",
            "Normal breathing",
            "Pneumonia",
            "Asthma"
          ],
          "correct": 0,
          "explanation": "Several ribs broken in more than one place."
        },
        {
          "q": "A stab wound to the back of the chest, no bubbling. Best dressing?",
          "options": [
            "Vented chest seal (or occlusive dressing taped on three sides)",
            "Leave it open",
            "Pack it tightly",
            "Plain gauze only"
          ],
          "correct": 0,
          "explanation": "Watch for tension pneumothorax."
        },
        {
          "q": "Suspected pelvic fracture with shock:",
          "options": [
            "Pelvic binder at the greater trochanters; don't rock the pelvis",
            "Rock the pelvis repeatedly to confirm",
            "Bind at the waist",
            "Sit the patient up"
          ],
          "correct": 0,
          "explanation": "One gentle check at most."
        },
        {
          "q": "When should you skip the detailed secondary exam on scene?",
          "options": [
            "Time-critical patients: do it en route",
            "Always",
            "Never",
            "Only in children"
          ],
          "correct": 0,
          "explanation": "Transport comes first."
        },
        {
          "q": "Before and after splinting, check:",
          "options": [
            "Circulation, motor and sensation",
            "Blood glucose",
            "Pupils only",
            "Temperature"
          ],
          "correct": 0,
          "explanation": "CMS in every limb you splint."
        }
      ],
      "flashcards": [
        {
          "question": "DCAP-BTLS",
          "answer": "Deformities, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling.",
          "category": "Secondary Assessment"
        },
        {
          "question": "Rapid head-to-toe vs focused exam",
          "answer": "Rapid head-to-toe: significant mechanism or unresponsive. Focused: a stable patient with one clear complaint.",
          "category": "Secondary Assessment"
        },
        {
          "question": "PERRL",
          "answer": "Pupils Equal, Round, Reactive to Light. Record size in mm and reactivity.",
          "category": "Secondary Assessment"
        },
        {
          "question": "Crepitus in a limb",
          "answer": "Bone ends grating: a fracture. Splint before moving.",
          "category": "Secondary Assessment"
        },
        {
          "question": "Basal skull fracture signs",
          "answer": "Raccoon eyes, Battle's sign (behind the ear), clear fluid from the nose or ears.",
          "category": "Secondary Assessment"
        },
        {
          "question": "CMS",
          "answer": "Circulation (distal pulse, colour), Motor, Sensation: checked before and after splinting.",
          "category": "Secondary Assessment"
        },
        {
          "question": "When to skip the full secondary assessment",
          "answer": "Time-critical patients (arrest, ongoing resuscitation, shock needing surgery): do it en route if at all.",
          "category": "Secondary Assessment"
        },
        {
          "question": "JVD",
          "answer": "Distended neck veins: tension pneumothorax, tamponade or heart failure.",
          "category": "Secondary Assessment"
        }
      ],
      "critical": [
        {
          "id": "crit_2_8_1",
          "scenario": "Thrown from an ATV: bleeding scalp cut, deformed left forearm and femur, chest abrasions, left upper quadrant tenderness. Alert, SpO₂ 97%, strong radial pulses. 18 minutes to the trauma centre.",
          "question": "Best approach?",
          "options": [
            {
              "t": "Pressure on the scalp, splint the femur and forearm with CMS checks, IV en route, and reassess the abdomen often during rapid transport",
              "f": "Correct."
            },
            {
              "t": "Treat the most visible injury and take your time",
              "f": "The abdomen is the hidden threat."
            },
            {
              "t": "Rock the pelvis to check stability",
              "f": "Never."
            },
            {
              "t": "Full splinting of everything on scene before moving",
              "f": "Splint during packaging; don't delay transport."
            }
          ],
          "correct": 0,
          "explanation": "Left upper quadrant tenderness may be a bleeding spleen: watch for shock.",
          "kpi": "Multi-system trauma prioritization"
        },
        {
          "id": "crit_2_8_2",
          "scenario": "A 67-year-old with heart failure, breathless for 3 hours: tripoding, BP 158/94, HR 108, RR 26, SpO₂ 89%. Crackles at both bases, ankle edema, raised JVP.",
          "question": "Key finding and priority?",
          "options": [
            {
              "t": "Crackles with raised JVP and edema: acute heart failure – sit up, oxygen to target, CPAP, nitrates per protocol",
              "f": "Correct."
            },
            {
              "t": "Wheeze: albuterol only",
              "f": "Crackles, JVP and edema point to the heart."
            },
            {
              "t": "Fluid bolus",
              "f": "She's overloaded."
            },
            {
              "t": "Lie her flat",
              "f": "Upright."
            }
          ],
          "correct": 0,
          "explanation": "A focused exam that confirms the field impression.",
          "kpi": "Focused medical assessment — CHF recognition"
        },
        {
          "id": "crit_2_8_3",
          "scenario": "Log-rolling a stabbed 22-year-old reveals a second 3 cm wound on the right posterior chest. Breath sounds reduced on the right, trachea midline, BP 110/70, SpO₂ 93%.",
          "question": "What do you do with the wound?",
          "options": [
            {
              "t": "Vented chest seal (or occlusive dressing taped on three sides) and watch for tension pneumothorax",
              "f": "Correct."
            },
            {
              "t": "Leave it open to drain",
              "f": "It can suck air into the chest."
            },
            {
              "t": "Pack it tightly",
              "f": "Seal it instead."
            },
            {
              "t": "Ignore it: it's small",
              "f": "Any chest wound can enter the pleura."
            }
          ],
          "correct": 0,
          "explanation": "Signs of tension: worsening hypoxia, raised JVP, falling BP, deviated trachea (late).",
          "kpi": "Open pneumothorax management"
        }
      ]
    },
    {
      "id": "c2s9",
      "shortTitle": "2.9 Reassessment & Trending",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Reassessment & Trending",
        "lead": "Patients change, and you only notice if you look again. Repeat the primary assessment and vital signs on a schedule and after every intervention, then compare. A falling pulse in a bleeding patient is not good news.",
        "sections": [
          {
            "type": "steps",
            "title": "Every reassessment",
            "icon": "refresh-ccw",
            "steps": [
              {
                "title": "Primary assessment again",
                "text": "XABCDE first: problems show here before the numbers change."
              },
              {
                "title": "Vital signs",
                "text": "Every 5 minutes if unstable, every 15 minutes if stable, and after every intervention."
              },
              {
                "title": "Did it work?",
                "text": "Check each intervention: oxygen, splint, tourniquet, drugs."
              },
              {
                "title": "Mental status and pain",
                "text": "AVPU or GCS; pain score."
              },
              {
                "title": "Still the right plan?",
                "text": "Destination, speed, ALS, pre-alert."
              }
            ]
          },
          {
            "type": "table",
            "title": "Trends that mean trouble",
            "icon": "trending-down",
            "columns": [
              "Trend",
              "Means"
            ],
            "rows": [
              [
                "BP falling, pulse rising",
                "Shock decompensating"
              ],
              [
                "Pulse suddenly falls in a tachycardic trauma patient",
                "Pre-arrest, not improvement"
              ],
              [
                "Narrowing pulse pressure",
                "Vasoconstriction: early shock"
              ],
              [
                "GCS down by 2 points or more",
                "Brain deteriorating"
              ],
              [
                "Respiratory rate rising, SpO₂ falling",
                "Breathing failing"
              ],
              [
                "EtCO₂ rising with drowsiness",
                "Hypoventilation"
              ]
            ]
          },
          {
            "type": "list",
            "title": "When it gets worse",
            "icon": "triangle-alert",
            "items": [
              "Go back to XABCDE",
              "Escalate treatment; call for ALS",
              "Pre-alert and reconsider the destination",
              "Document time-stamped findings and responses"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Track",
                "items": [
                  {
                    "label": "GCS calculator",
                    "sub": "Score and compare over time",
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
          "q": "Chest pain patient, pain-free after nitroglycerin, stable vital signs. Reassess every:",
          "options": [
            "15 minutes (stable)",
            "5 minutes",
            "Only at the hospital",
            "Never"
          ],
          "correct": 0,
          "explanation": "Back to every 5 minutes if anything changes."
        },
        {
          "q": "Trauma: HR 124 at first, now 88 with BP 82/50. This means:",
          "options": [
            "Pre-arrest: compensation is failing",
            "Improvement",
            "Stability",
            "Pain relief"
          ],
          "correct": 0,
          "explanation": "Act immediately."
        },
        {
          "q": "First thing to recheck in a reassessment:",
          "options": [
            "The primary assessment (XABCDE)",
            "The secondary exam",
            "Paperwork",
            "Pain score only"
          ],
          "correct": 0,
          "explanation": "Problems show there first."
        },
        {
          "q": "Why is trending better than one reading?",
          "options": [
            "It shows the direction: improving or deteriorating",
            "It's quicker",
            "Single readings are always wrong",
            "It isn't"
          ],
          "correct": 0,
          "explanation": "Trends drive decisions."
        },
        {
          "q": "A narrowing pulse pressure in trauma suggests:",
          "options": [
            "Early shock (vasoconstriction)",
            "Improvement",
            "Head injury only",
            "Normal"
          ],
          "correct": 0,
          "explanation": "Diastolic rises before the systolic falls."
        },
        {
          "q": "GCS drops from 14 to 11. This is:",
          "options": [
            "Significant deterioration",
            "Normal fluctuation",
            "Measurement error",
            "Improvement"
          ],
          "correct": 0,
          "explanation": "A fall of 2 points or more matters."
        },
        {
          "q": "Reassessment after giving oxygen should include:",
          "options": [
            "Whether SpO₂ and work of breathing improved",
            "Nothing until the hospital",
            "Only the BP",
            "Only the glucose"
          ],
          "correct": 0,
          "explanation": "Check every intervention worked."
        },
        {
          "q": "On reassessment the patient is worse. First?",
          "options": [
            "Back to XABCDE",
            "Complete the paperwork",
            "Turn off the monitor",
            "Wait 15 minutes"
          ],
          "correct": 0,
          "explanation": "Then escalate and pre-alert."
        },
        {
          "q": "Unstable patient: vital signs every:",
          "options": [
            "5 minutes",
            "15 minutes",
            "30 minutes",
            "60 minutes"
          ],
          "correct": 0,
          "explanation": "And after every intervention."
        },
        {
          "q": "Documentation of reassessment must include:",
          "options": [
            "Time-stamped vital signs and responses to treatment",
            "Only the first set",
            "Only the worst set",
            "Nothing"
          ],
          "correct": 0,
          "explanation": "Shows the trend to the hospital."
        }
      ],
      "flashcards": [
        {
          "question": "Reassessment frequency",
          "answer": "Unstable: every 5 minutes. Stable: every 15 minutes. And after every intervention.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "Parts of a reassessment",
          "answer": "Primary assessment, vital signs, interventions, pain, mental status, transport decision.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "Why trend?",
          "answer": "One reading is a snapshot; the trend shows if the patient is improving, stable or deteriorating.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "Sudden drop in heart rate in a tachycardic trauma patient",
          "answer": "Pre-arrest: compensation has failed. Not improvement.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "First thing in a reassessment",
          "answer": "The primary assessment: XABCDE.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "Documenting reassessment",
          "answer": "Time-stamped vital signs, GCS/AVPU, responses to treatment, pain, new findings.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "Narrowing pulse pressure",
          "answer": "Vasoconstriction in early (compensated) shock: precedes hypotension.",
          "category": "Reassessment & Trending"
        },
        {
          "question": "Deterioration on reassessment",
          "answer": "Back to XABCDE, escalate treatment, call ALS, pre-alert, reconsider destination.",
          "category": "Reassessment & Trending"
        }
      ],
      "critical": [
        {
          "id": "crit_2_9_1",
          "scenario": "GI bleed: at first alert, BP 104/68, HR 108. Fifteen minutes into transport she only opens her eyes to a loud voice; BP 84/52, HR 124 and thready, pale and sweaty.",
          "question": "Best next action?",
          "options": [
            {
              "t": "Back to XABCDE, oxygen to target, IV fluids per protocol, pre-alert the hospital, ALS intercept, faster transport",
              "f": "Correct."
            },
            {
              "t": "Continue routinely: she responds to voice",
              "f": "Falling consciousness is cerebral hypoperfusion."
            },
            {
              "t": "Sit her up",
              "f": "Lie her flat."
            },
            {
              "t": "Stop to get a full history",
              "f": "Keep moving."
            }
          ],
          "correct": 0,
          "explanation": "She has moved from compensated to decompensated shock; the hospital can prepare blood.",
          "kpi": "Recognition of decompensated shock on reassessment"
        },
        {
          "id": "crit_2_9_2",
          "scenario": "COPD exacerbation: at first BP 148/92, HR 102, RR 28, SpO₂ 86%. After 10 minutes of oxygen and sitting up: BP 136/84, HR 96, RR 24, SpO₂ 93%, still working but feels better.",
          "question": "What does the trend show?",
          "options": [
            {
              "t": "Improving: continue, titrate oxygen to 88–92% if he retains CO₂, reassess in 5–15 minutes",
              "f": "Correct."
            },
            {
              "t": "Deteriorating: SpO₂ still low",
              "f": "Every value is moving the right way."
            },
            {
              "t": "No change",
              "f": "There's clear improvement."
            },
            {
              "t": "Stop the oxygen",
              "f": "Titrate it."
            }
          ],
          "correct": 0,
          "explanation": "If SpO₂ plateaus while he stays alert, consider CPAP/NIV per protocol; if he tires or gets drowsy, assist with a BVM.",
          "kpi": "Trend interpretation — improvement"
        },
        {
          "id": "crit_2_9_3",
          "scenario": "A head-injured patient was GCS 14 at the scene. Ten minutes later he's GCS 11 and his right pupil is larger.",
          "question": "What now?",
          "options": [
            {
              "t": "Serious deterioration: airway and ventilation to target EtCO₂, pre-alert the trauma centre, ALS, faster transport",
              "f": "Correct."
            },
            {
              "t": "He's sleepy: let him rest",
              "f": "A fall of 3 points with a new pupil change is an emergency."
            },
            {
              "t": "Recheck in 30 minutes",
              "f": "Reassess every 5 minutes."
            },
            {
              "t": "Sit him up and give fluids to raise his BP high",
              "f": "Avoid hypotension, but the priority is airway and transport."
            }
          ],
          "correct": 0,
          "explanation": "A GCS fall of 2 points or more, or a new unequal pupil, suggests rising intracranial pressure.",
          "kpi": "Recognizes neurological deterioration through serial GCS and pupil checks"
        }
      ]
    },
    {
      "id": "c2s10",
      "shortTitle": "2.10 Clinical Decision Making",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Clinical Decision Making",
        "lead": "Good clinicians make a working diagnosis early, then try to prove it wrong. Gather the facts, think of the worst it could be, act, reassess, and change your mind when the evidence changes. Know the traps your brain sets.",
        "sections": [
          {
            "type": "steps",
            "title": "The reasoning cycle",
            "icon": "refresh-ccw",
            "steps": [
              {
                "title": "Gather",
                "text": "Scene, history, exam, vital signs, monitors."
              },
              {
                "title": "Interpret",
                "text": "What fits? What doesn't?"
              },
              {
                "title": "Field impression",
                "text": "Most likely and worst possible (differential)."
              },
              {
                "title": "Act",
                "text": "Protocol, treatment, destination."
              },
              {
                "title": "Reassess",
                "text": "Did it work? Anything new?"
              },
              {
                "title": "Revise",
                "text": "Change the impression when the evidence changes."
              }
            ]
          },
          {
            "type": "table",
            "title": "Thinking traps",
            "icon": "brain",
            "columns": [
              "Trap",
              "What it looks like",
              "Antidote"
            ],
            "rows": [
              [
                "Anchoring",
                "Sticking with the first impression",
                "\"What else could this be?\""
              ],
              [
                "Confirmation bias",
                "Only noticing what fits",
                "Look for findings that don't fit"
              ],
              [
                "Premature closure",
                "Stopping once you have an answer",
                "Finish the assessment"
              ],
              [
                "Diagnostic momentum",
                "Accepting someone else's label",
                "Assess for yourself"
              ],
              [
                "Availability bias",
                "Thinking of what you saw recently",
                "Consider the worst case first"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Trauma centre: high-risk (red) criteria",
            "icon": "hospital",
            "groups": [
              {
                "title": "Injury",
                "items": [
                  "Penetrating injury to head, neck, torso or proximal limbs",
                  "Skull deformity; chest wall instability; suspected pelvic fracture",
                  "2 or more proximal long-bone fractures",
                  "Crushed, mangled or pulseless limb; amputation above the wrist or ankle",
                  "Bleeding needing a tourniquet or packing",
                  "Spinal injury with new weakness"
                ]
              },
              {
                "title": "Mental status",
                "items": [
                  "Unable to follow commands (motor GCS below 6)"
                ]
              },
              {
                "title": "Breathing",
                "items": [
                  "Respiratory rate below 10 or above 29/min",
                  "Needs ventilation, or SpO₂ below 90%"
                ]
              },
              {
                "title": "Circulation (adult)",
                "items": [
                  "Systolic below 90 mmHg",
                  "Heart rate greater than systolic BP"
                ]
              },
              {
                "title": "Moderate risk (yellow) includes",
                "items": [
                  "Falls over 10 feet (3 m); high-risk crashes",
                  "Age 65 or older, or anticoagulation, with significant injury"
                ]
              }
            ]
          },
          {
            "type": "groups",
            "title": "Teamwork and protocols",
            "icon": "handshake",
            "groups": [
              {
                "title": "Two-challenge rule",
                "items": [
                  "Voice a safety concern twice",
                  "Still unresolved: escalate"
                ]
              },
              {
                "title": "Deviating from protocol",
                "items": [
                  "What the protocol said, why you deviated, what you did",
                  "Who authorised it (medical direction) and the outcome"
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
                "title": "Practice",
                "items": [
                  {
                    "label": "Trauma assessment",
                    "sub": "Destination decisions",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "Medical course",
                    "sub": "Case-based questions",
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
          "q": "The nurse says \"another UTI\", but you find unequal pupils and one-sided weakness. Accepting her label would be:",
          "options": [
            "Diagnostic momentum",
            "Hindsight bias",
            "Availability bias",
            "The two-challenge rule"
          ],
          "correct": 0,
          "explanation": "Assess for yourself: this may be a stroke or bleed."
        },
        {
          "q": "You decide \"heart failure\" and ignore unilateral leg swelling and a recent long flight. Which bias?",
          "options": [
            "Anchoring",
            "Availability",
            "Diagnostic momentum",
            "None"
          ],
          "correct": 0,
          "explanation": "PE should be on the list."
        },
        {
          "q": "Most important when documenting a protocol deviation:",
          "options": [
            "Medical direction contact and the orders received (or why contact wasn't possible)",
            "Your opinion of the protocol",
            "Your confidence",
            "Your trainer's name"
          ],
          "correct": 0,
          "explanation": "Plus what you did and the outcome."
        },
        {
          "q": "A field impression is:",
          "options": [
            "A working diagnosis that guides treatment and changes with new evidence",
            "A final diagnosis",
            "The dispatch code",
            "The hospital's diagnosis"
          ],
          "correct": 0,
          "explanation": "Hold it loosely."
        },
        {
          "q": "Best antidote to anchoring:",
          "options": [
            "Ask \"What else could this be?\"",
            "Decide faster",
            "Ignore new findings",
            "Follow the first protocol you think of"
          ],
          "correct": 0,
          "explanation": "Build a differential."
        },
        {
          "q": "Stopping your assessment once you think you know the answer:",
          "options": [
            "Premature closure",
            "Two-challenge rule",
            "Triage",
            "Reassessment"
          ],
          "correct": 0,
          "explanation": "Finish the assessment."
        },
        {
          "q": "Two-challenge rule:",
          "options": [
            "Voice a safety concern twice, then escalate",
            "Ask the patient twice",
            "Two people sign the form",
            "Two attempts at IV"
          ],
          "correct": 0,
          "explanation": "A crew-safety tool."
        },
        {
          "q": "Which is a high-risk (red) trauma triage criterion?",
          "options": [
            "Heart rate greater than systolic BP in an adult",
            "Ankle sprain",
            "Age 30",
            "Minor scalp cut"
          ],
          "correct": 0,
          "explanation": "Also systolic below 90 mmHg."
        },
        {
          "q": "Fall from 12 feet, alert and stable. Field triage?",
          "options": [
            "Moderate-risk mechanism: a trauma centre per protocol",
            "Closest clinic",
            "No transport",
            "Any hospital"
          ],
          "correct": 0,
          "explanation": "Falls over 10 feet (3 m)."
        },
        {
          "q": "Worst-first thinking for chest pain means:",
          "options": [
            "Treat as ACS until proven otherwise",
            "Assume reflux",
            "Wait for symptoms to settle",
            "Treat as anxiety"
          ],
          "correct": 0,
          "explanation": "Then consider dissection, PE, pneumothorax."
        }
      ],
      "flashcards": [
        {
          "question": "Field impression vs diagnosis",
          "answer": "A field impression is your working diagnosis that guides treatment and transport; it changes as evidence comes in.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Reasoning cycle",
          "answer": "Gather → interpret → field impression → act → reassess → revise.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Documenting a protocol deviation",
          "answer": "What the protocol said, why you deviated, what you did, who authorised it, and the outcome.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Anchoring",
          "answer": "Locking onto the first impression and ignoring contrary evidence. Counter: build a differential and look for what doesn't fit.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Worst-case thinking",
          "answer": "Ask \"What's the worst this could be?\" and manage for it while you work it out.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Two-challenge rule",
          "answer": "Voice a safety concern twice; if unresolved, escalate to a supervisor or medical direction.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Premature closure",
          "answer": "Stopping the assessment once you have an answer: you miss findings that contradict it.",
          "category": "Clinical Decision Making"
        },
        {
          "question": "Protocol vs field impression",
          "answer": "A protocol is the approved treatment guide; your field impression decides which protocol applies.",
          "category": "Clinical Decision Making"
        }
      ],
      "critical": [
        {
          "id": "crit_2_10_1",
          "scenario": "A 52-year-old is gasping: tripoding, one-word answers, RR 36, SpO₂ 82%, HR 112. Clear lungs, no JVD, no edema, no fever. He had knee surgery 10 days ago and has been mostly immobile.",
          "question": "Field impression and plan?",
          "options": [
            {
              "t": "Possible pulmonary embolism: oxygen to target, position of comfort, rapid transport and pre-alert, watch for collapse",
              "f": "Correct."
            },
            {
              "t": "Anxiety: coach slow breathing",
              "f": "SpO₂ 82% isn't anxiety."
            },
            {
              "t": "Asthma: nebulizer only",
              "f": "No wheeze; risk factors point to PE."
            },
            {
              "t": "Heart failure: CPAP and nitrates",
              "f": "No crackles, JVD or edema."
            }
          ],
          "correct": 0,
          "explanation": "Sudden breathlessness with clear lungs and hypoxia plus recent surgery is PE until proven otherwise.",
          "kpi": "Field impression — pulmonary embolism recognition"
        },
        {
          "id": "crit_2_10_2",
          "scenario": "A worker fell 12 feet onto his feet: severe low back pain, both heels deformed, alert, stable vital signs. Trauma centre 35 minutes; community hospital 12 minutes. The foreman asks why not the closer hospital.",
          "question": "Destination and explanation?",
          "options": [
            {
              "t": "Trauma centre: a fall over 10 feet with a heel-and-spine (axial load) pattern can hide spinal fractures and bleeding",
              "f": "Correct."
            },
            {
              "t": "Closest hospital: he's stable",
              "f": "The mechanism and injury pattern point to the trauma centre."
            },
            {
              "t": "No transport needed",
              "f": "He has fractures."
            },
            {
              "t": "Let him choose by walking to the ambulance",
              "f": "Never weight-bear these injuries."
            }
          ],
          "correct": 0,
          "explanation": "Field triage 2021 lists falls over 10 feet (3 m) as a moderate-risk mechanism.",
          "kpi": "Trauma destination decision making"
        },
        {
          "id": "crit_2_10_3",
          "scenario": "A 74-year-old has crushing central chest pain radiating to the left arm for 45 minutes. BP 98/66, HR 92, SpO₂ 94%. Your protocol allows nitroglycerin only with systolic above 100 mmHg.",
          "question": "Best course?",
          "options": [
            {
              "t": "Hold nitroglycerin per protocol, aspirin, 12-lead now and transmit, no oxygen (SpO₂ above 90%), contact medical direction, frequent BP checks",
              "f": "Correct."
            },
            {
              "t": "Give nitroglycerin anyway",
              "f": "Protocol limits exist for good reason, especially in RV infarction."
            },
            {
              "t": "High-flow oxygen and leave the 12-lead to the hospital",
              "f": "12-lead within 10 minutes; oxygen only below 90%."
            },
            {
              "t": "No aspirin because of the low BP",
              "f": "Aspirin is still indicated."
            }
          ],
          "correct": 0,
          "explanation": "Document that nitroglycerin was held and why.",
          "kpi": "Protocol adherence decision making — chest pain"
        }
      ]
    },
    {
      "id": "c2s11",
      "shortTitle": "2.11 Field Triage (START / SALT)",
      "guide": {
        "group": "c2",
        "groupLabel": "Chapter 2 · Patient Assessment",
        "title": "Field Triage (START / JumpSTART / SALT)",
        "lead": "When patients outnumber rescuers, the goal changes: do the most good for the most people. Triage fast, with simple rules, and only do life-saving interventions as you go. Then re-triage, because patients change.",
        "sections": [
          {
            "type": "pathways",
            "title": "START (adults)",
            "icon": "siren",
            "paths": [
              {
                "title": "Sort",
                "tone": "noshock",
                "steps": [
                  {
                    "text": "\"If you can walk, come here\": walkers are green (minor)."
                  },
                  {
                    "text": "Not breathing: open the airway. Still not breathing = black."
                  },
                  {
                    "text": "Control major bleeding as you go."
                  }
                ]
              },
              {
                "title": "Red (immediate) if any",
                "tone": "shock",
                "steps": [
                  {
                    "text": "Respiratory rate above 30/min"
                  },
                  {
                    "text": "No radial pulse or capillary refill over 2 seconds"
                  },
                  {
                    "text": "Can't follow simple commands"
                  }
                ]
              }
            ],
            "after": "Everyone else is yellow (delayed)."
          },
          {
            "type": "table",
            "title": "JumpSTART (about 1–8 years)",
            "icon": "baby",
            "columns": [
              "Finding",
              "Category"
            ],
            "rows": [
              [
                "Walking",
                "Green"
              ],
              [
                "Apneic with a pulse: 5 rescue breaths → breathing",
                "Red"
              ],
              [
                "Apneic with a pulse: 5 rescue breaths → still apneic",
                "Black"
              ],
              [
                "Respiratory rate below 15 or above 45/min",
                "Red"
              ],
              [
                "No palpable peripheral pulse",
                "Red"
              ],
              [
                "AVPU P (inappropriate) or U",
                "Red"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "SALT",
            "icon": "list",
            "steps": [
              {
                "title": "Sort",
                "text": "Walk; wave or move purposefully; still. Assess the still first."
              },
              {
                "title": "Assess",
                "text": "Individually."
              },
              {
                "title": "Life-saving interventions",
                "text": "Control major hemorrhage, open the airway (2 rescue breaths in children), chest decompression, auto-injector antidotes."
              },
              {
                "title": "Treatment / transport",
                "text": "Immediate, delayed, minimal, expectant, dead."
              }
            ]
          },
          {
            "type": "list",
            "title": "Running the scene",
            "icon": "megaphone",
            "items": [
              "Roles: incident command, triage, treatment, transport, staging",
              "First report: METHANE – major incident, exact location, type, hazards, access, number of casualties, emergency services",
              "Re-triage repeatedly"
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
                    "label": "EMS tools: START triage",
                    "sub": "Interactive triage",
                    "href": "../pages/ems-tools.html",
                    "icon": "siren"
                  },
                  {
                    "label": "METHANE report",
                    "sub": "Structured first report",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  },
                  {
                    "label": "MCI course",
                    "sub": "Triage and incident roles",
                    "href": "../pages/mci.html",
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
          "q": "START: respiratory rate 32/min. Category?",
          "options": [
            "Red (immediate)",
            "Green",
            "Yellow",
            "Black"
          ],
          "correct": 0,
          "explanation": "Above 30/min is red."
        },
        {
          "q": "JumpSTART: apneic child with a strong pulse after airway opening. Do:",
          "options": [
            "Give 5 rescue breaths, then reassess",
            "Tag black",
            "Start CPR",
            "Tag yellow and move on"
          ],
          "correct": 0,
          "explanation": "Breathing after the breaths = red."
        },
        {
          "q": "SALT: after a tourniquet and airway opening, the patient has a pulse but stays unresponsive. Category?",
          "options": [
            "Immediate",
            "Minimal",
            "Delayed",
            "Dead"
          ],
          "correct": 0,
          "explanation": "Can't follow commands."
        },
        {
          "q": "START: adult not breathing after the airway is opened:",
          "options": [
            "Black",
            "Red",
            "Give 5 breaths",
            "Yellow"
          ],
          "correct": 0,
          "explanation": "No rescue breaths in adult START."
        },
        {
          "q": "START: no radial pulse:",
          "options": [
            "Red",
            "Yellow",
            "Green",
            "Black"
          ],
          "correct": 0,
          "explanation": "Or capillary refill over 2 seconds."
        },
        {
          "q": "JumpSTART red respiratory rates:",
          "options": [
            "Below 15 or above 45/min",
            "Below 10 or above 30/min",
            "Above 20/min",
            "Any rate"
          ],
          "correct": 0,
          "explanation": "Children breathe faster normally."
        },
        {
          "q": "SALT life-saving interventions include:",
          "options": [
            "Major hemorrhage control, airway opening, chest decompression, auto-injector antidotes",
            "Full CPR",
            "IV fluids",
            "Splinting every fracture"
          ],
          "correct": 0,
          "explanation": "Quick interventions only."
        },
        {
          "q": "First step of SALT:",
          "options": [
            "Global sorting: walk, wave, still",
            "Individual vital signs",
            "Transport",
            "Tagging the dead"
          ],
          "correct": 0,
          "explanation": "Assess the still first."
        },
        {
          "q": "METHANE's A stands for:",
          "options": [
            "Access",
            "Airway",
            "Ambulances",
            "Assessment"
          ],
          "correct": 0,
          "explanation": "Major incident, Exact location, Type, Hazards, Access, Number, Emergency services."
        },
        {
          "q": "Why re-triage?",
          "options": [
            "Patients' conditions change",
            "To fill time",
            "To change tags for fun",
            "It's not needed"
          ],
          "correct": 0,
          "explanation": "Upgrade or downgrade as needed."
        }
      ],
      "flashcards": [
        {
          "question": "RPM in START",
          "answer": "Respirations (above 30/min = red), Perfusion (no radial pulse or refill over 2 seconds = red), Mental status (can't follow commands = red).",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "START categories",
          "answer": "Red (immediate), yellow (delayed), green (minor), black (dead/expectant).",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "START vs JumpSTART",
          "answer": "JumpSTART gives 5 rescue breaths to an apneic child with a pulse: breathing = red, not black.",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "Who gets JumpSTART?",
          "answer": "Children about 1–8 years (a child-sized patient); adapted for infants too.",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "SALT life-saving interventions",
          "answer": "Control major hemorrhage, open the airway (2 rescue breaths in children), chest decompression, auto-injector antidotes.",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "SALT",
          "answer": "Sort, Assess, Lifesaving interventions, Treatment/Transport. Categories: immediate, delayed, minimal, expectant, dead.",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "Triage tag",
          "answer": "Category colour, patient ID, vital signs, treatments, decontamination status, destination.",
          "category": "Field Triage (START / SALT)"
        },
        {
          "question": "Incident roles",
          "answer": "Incident command, triage, treatment, transport, staging.",
          "category": "Field Triage (START / SALT)"
        }
      ],
      "critical": [
        {
          "id": "crit_2_11_1",
          "scenario": "Bus rollover, about 20 patients. Eight walk to you. A man on the ground: RR 28, radial pulse, squeezes your hand on request. A woman half out of a window isn't breathing even after you open her airway.",
          "question": "START categories?",
          "options": [
            {
              "t": "Walkers green; the man yellow; the woman black",
              "f": "Correct."
            },
            {
              "t": "Walkers green; the man yellow; the woman red with rescue breaths",
              "f": "Adult START gives no rescue breaths."
            },
            {
              "t": "Walkers yellow; the man red; the woman black",
              "f": "RR 28 with a pulse and commands = yellow."
            },
            {
              "t": "Everyone red",
              "f": "Use the algorithm."
            }
          ],
          "correct": 0,
          "explanation": "Hard but correct: resources go to salvageable patients.",
          "kpi": "START triage application in MCI"
        },
        {
          "id": "crit_2_11_2",
          "scenario": "Explosion. A 7-year-old is apneic with a strong brachial pulse; after 5 rescue breaths he breathes at 28/min but doesn't respond to voice. An adult with a bleeding thigh has a weak radial pulse, RR 26, alert.",
          "question": "Categories?",
          "options": [
            {
              "t": "Child red (breathing after rescue breaths, unresponsive); adult red (bleeding with poor perfusion – tourniquet as a life-saving intervention)",
              "f": "Correct."
            },
            {
              "t": "Child yellow; adult red",
              "f": "Unresponsive after breaths is red."
            },
            {
              "t": "Child black; adult yellow",
              "f": "The child breathes after rescue breaths."
            },
            {
              "t": "Both green",
              "f": "Neither can walk."
            }
          ],
          "correct": 0,
          "explanation": "JumpSTART saves children that adult START would tag black.",
          "kpi": "JumpSTART application and pediatric triage"
        },
        {
          "id": "crit_2_11_3",
          "scenario": "Highway pile-up: 3 red, 4 yellow, 6 green, 2 black; 4 ambulances on scene, a fifth in 8 minutes. One red patient becomes apneic with no pulse.",
          "question": "Priority and resources?",
          "options": [
            {
              "t": "Re-triage him as expectant/dead and send ambulances to the remaining red patients first",
              "f": "Correct."
            },
            {
              "t": "Send an ambulance with CPR for him now",
              "f": "That takes resources from salvageable patients."
            },
            {
              "t": "Stop triage and run a resuscitation",
              "f": "Not in a mass-casualty incident."
            },
            {
              "t": "Transport green patients first",
              "f": "Reds first."
            }
          ],
          "correct": 0,
          "explanation": "Re-triage is continuous; it's the hardest call in triage.",
          "kpi": "MCI resource allocation and re-triage decisions"
        }
      ]
    }
  ]
};
