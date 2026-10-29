/* ========== Chapter 6 – Trauma Emergencies ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c6.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c6",
  "title": "Trauma Emergencies",
  "shortTitle": "6. Trauma Emergencies",
  "sections": [
    {
      "id": "c6s1",
      "shortTitle": "6.1 Trauma Systems & Kinematics",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Trauma Systems & Kinematics",
        "lead": "Read the wreck before you read the patient. Energy rises with the square of speed, and each crash is really three collisions. The mechanism tells you which hidden injuries to hunt for, and the field triage criteria tell you where to take the patient.",
        "sections": [
          {
            "type": "table",
            "title": "Mechanism → suspect",
            "icon": "target",
            "stack": true,
            "columns": [
              "Mechanism",
              "Look for"
            ],
            "rows": [
              [
                "Frontal, up-and-over",
                "Head and neck, chest (steering wheel), liver and spleen, aorta"
              ],
              [
                "Frontal, down-and-under",
                "Knees, femurs, hips (posterior dislocation)"
              ],
              [
                "Side impact, driver's side",
                "Left ribs, spleen, pelvis, neck"
              ],
              [
                "Lap belt only",
                "Bowel injury, lumbar (Chance) fracture"
              ],
              [
                "Fall onto the feet",
                "Heels, legs, pelvis, lumbar spine"
              ],
              [
                "Child pedestrian (Waddell's triad)",
                "Femur, chest or abdomen, head"
              ],
              [
                "Blast",
                "Ears and lungs (pressure), fragments, being thrown, burns"
              ]
            ],
            "notes": [
              "Kinetic energy = ½ × mass × velocity²: doubling speed gives 4 times the energy.",
              "Three collisions: vehicle, body, organs."
            ]
          },
          {
            "type": "groups",
            "title": "Trauma centre: high-risk (red)",
            "icon": "hospital",
            "groups": [
              {
                "title": "Injuries",
                "items": [
                  "Penetrating injury to head, neck, torso or proximal limbs",
                  "Skull deformity; chest wall instability; suspected pelvic fracture",
                  "2 or more proximal long-bone fractures; crushed, mangled or pulseless limb; amputation above the wrist or ankle",
                  "Bleeding needing a tourniquet or packing; spinal injury with new weakness"
                ]
              },
              {
                "title": "Physiology",
                "items": [
                  "Unable to follow commands (motor GCS below 6)",
                  "Respiratory rate below 10 or above 29/min, or SpO₂ below 90%",
                  "Systolic below 90 mmHg or heart rate greater than systolic BP",
                  "Age 65 or older with systolic below 110 mmHg"
                ]
              }
            ]
          },
          {
            "type": "groups",
            "title": "Moderate-risk (yellow)",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Mechanism",
                "items": [
                  "Fall over 10 feet (3 m), any age",
                  "Ejection, major intrusion, death in the same compartment",
                  "Pedestrian or cyclist struck at over 20 mph; rider thrown"
                ]
              },
              {
                "title": "Patient",
                "items": [
                  "Age 65 or older, anticoagulants, pregnancy over 20 weeks",
                  "Burns with trauma; children (pediatric-capable centre)",
                  "EMS judgement"
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
                    "sub": "Mechanism and primary survey",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "ITLS course",
                    "sub": "Trauma life support review",
                    "href": "../pages/itls.html",
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
          "q": "High-speed side impact on the driver's side, left upper quadrant and hip pain. Highest-risk organ?",
          "options": [
            "Spleen",
            "Liver",
            "Pancreas",
            "Appendix"
          ],
          "correct": 0,
          "explanation": "Left-sided impact loads the spleen and left ribs."
        },
        {
          "q": "Which finding alone sends an adult to the highest-level trauma centre (Field Triage 2021)?",
          "options": [
            "Systolic below 90 mmHg",
            "Heart rate 104",
            "GCS 14",
            "Respiratory rate 24"
          ],
          "correct": 0,
          "explanation": "Also respiratory rate below 10 or above 29/min, SpO₂ below 90%, or unable to follow commands."
        },
        {
          "q": "Unrestrained driver, bent steering wheel, wheel-shaped chest bruise, stable vital signs. Highest suspicion?",
          "options": [
            "Cardiac and pulmonary contusion (and aortic injury)",
            "Isolated clavicle fracture",
            "Leg fracture only",
            "Neck strain"
          ],
          "correct": 0,
          "explanation": "Stable now doesn't mean safe."
        },
        {
          "q": "An alert adult fell 25 feet with no visible injury and stable vital signs. Destination?",
          "options": [
            "Trauma centre: falls over 10 feet (3 m) are a moderate-risk mechanism",
            "Any clinic",
            "No transport",
            "Only if pain develops"
          ],
          "correct": 0,
          "explanation": "Field Triage 2021 uses over 10 feet for all ages."
        },
        {
          "q": "Doubling vehicle speed multiplies crash energy by:",
          "options": [
            "4",
            "2",
            "8",
            "1.5"
          ],
          "correct": 0,
          "explanation": "Energy rises with the square of velocity."
        },
        {
          "q": "Waddell's triad applies to:",
          "options": [
            "Child pedestrians: femur, chest/abdomen and head injuries",
            "Motorcyclists only",
            "Falls in older adults",
            "Diving injuries"
          ],
          "correct": 0,
          "explanation": "Children are hit higher on the body than adults."
        },
        {
          "q": "\"Down-and-under\" frontal crashes injure:",
          "options": [
            "Knees, femurs and hips",
            "The spleen only",
            "The cervical spine only",
            "The hands"
          ],
          "correct": 0,
          "explanation": "Watch for posterior hip dislocation."
        },
        {
          "q": "A lap-belt-only restraint is linked to:",
          "options": [
            "Bowel injury and lumbar (Chance) fractures",
            "Clavicle fractures",
            "Skull fractures",
            "No injuries"
          ],
          "correct": 0,
          "explanation": "Look for a seat-belt sign."
        },
        {
          "q": "Which is a moderate-risk (yellow) patient factor?",
          "options": [
            "Taking anticoagulants",
            "Age 30",
            "Wearing a helmet",
            "Being right-handed"
          ],
          "correct": 0,
          "explanation": "Also age 65 or older and pregnancy over 20 weeks."
        },
        {
          "q": "The third collision in a crash is:",
          "options": [
            "Organs hitting the inside of the body",
            "The car hitting the object",
            "The body hitting the car",
            "The ambulance arriving"
          ],
          "correct": 0,
          "explanation": "Brain against skull, aorta tearing, liver and spleen tearing."
        }
      ],
      "flashcards": [
        {
          "question": "Trauma centre levels",
          "answer": "Level I: comprehensive, research and teaching. II: comprehensive care. III: resuscitate and stabilise. IV: stabilise in remote areas. Other countries use major trauma centres and units.",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Field triage 2021",
          "answer": "High-risk (red): injury patterns and physiology. Moderate-risk (yellow): mechanism and patient factors. Plus EMS judgement.",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Three collisions",
          "answer": "Vehicle hits object; body hits vehicle; organs hit the inside of the body.",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Why speed matters",
          "answer": "Kinetic energy = ½ × mass × velocity²: doubling speed gives 4 times the energy.",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Frontal crash patterns",
          "answer": "Up-and-over: head, chest, abdomen. Down-and-under: knees, femurs, hips.",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Blunt vs penetrating",
          "answer": "Blunt spreads energy widely (hidden injuries); penetrating concentrates it along the track (small wound, deep damage).",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Blast injury phases",
          "answer": "Primary (pressure), secondary (fragments), tertiary (thrown), quaternary (burns, crush, inhalation), quinary (later effects).",
          "category": "Trauma Systems & Kinematics"
        },
        {
          "question": "Waddell's triad",
          "answer": "Child pedestrian: femur fracture, chest or abdominal injury, head injury.",
          "category": "Trauma Systems & Kinematics"
        }
      ],
      "critical": [
        {
          "id": "crit_6_1_1",
          "scenario": "An unrestrained driver hit a barrier at about 90 km/h with severe intrusion. Wheel-shaped chest bruise. BP 106/74, HR 116, RR 26, SpO₂ 93%. Reduced breath sounds on the left, crackles on the right.",
          "question": "What do you suspect, and the transport priority?",
          "options": [
            {
              "t": "Cardiac and pulmonary contusion, hemo- or pneumothorax, possible aortic injury: oxygen to target, rapid assessment, trauma centre",
              "f": "Correct."
            },
            {
              "t": "Simple rib bruise: routine transport",
              "f": "The mechanism and findings say otherwise."
            },
            {
              "t": "Panic attack",
              "f": "Hypoxia and abnormal breath sounds are injury."
            },
            {
              "t": "Full secondary survey on scene first",
              "f": "Time-critical: go."
            }
          ],
          "correct": 0,
          "explanation": "Aortic injury can look stable until it ruptures.",
          "kpi": "Uses mechanism of injury to anticipate thoracic injuries and destination"
        },
        {
          "id": "crit_6_1_2",
          "scenario": "A man fell 25 feet onto his feet. Severe low back pain, both heels painful, weak legs (3/5), sensation intact. BP 118/74, HR 104.",
          "question": "Injury pattern?",
          "options": [
            {
              "t": "Axial load: both heels, possible lumbar burst fracture and cord injury – spinal motion restriction, trauma centre",
              "f": "Correct."
            },
            {
              "t": "Heel fractures only: closest hospital",
              "f": "Weak legs mean the spine is involved."
            },
            {
              "t": "Muscle strain",
              "f": "Not with weakness."
            },
            {
              "t": "Walk him to the ambulance to test",
              "f": "Never."
            }
          ],
          "correct": 0,
          "explanation": "Falls over 10 feet (3 m) are a moderate-risk mechanism; new weakness makes it high-risk.",
          "kpi": "Recognizes axial loading injury patterns and spinal involvement"
        },
        {
          "id": "crit_6_1_3",
          "scenario": "A 7-year-old (22 kg) was hit by a car: deformed right thigh, left chest bruise, chin cut, holding his abdomen. BP 98/62, HR 130.",
          "question": "Pattern and plan?",
          "options": [
            {
              "t": "Waddell's triad (femur, chest/abdomen, head): rapid assessment, splint, pediatric trauma centre",
              "f": "Correct."
            },
            {
              "t": "Femur only: splint and closest hospital",
              "f": "Look for the other two injuries."
            },
            {
              "t": "Minor injuries: parents can drive him",
              "f": "His heart rate suggests bleeding."
            },
            {
              "t": "Treat the chin cut first",
              "f": "Priorities: bleeding, breathing, abdomen."
            }
          ],
          "correct": 0,
          "explanation": "A femur fracture alone can lose a lot of blood in a child.",
          "kpi": "Recognizes Waddell's triad and selects a pediatric trauma centre"
        }
      ]
    },
    {
      "id": "c6s2",
      "shortTitle": "6.2 Bleeding Control",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Bleeding Control",
        "lead": "Bleeding is the most preventable cause of trauma death. Press hard, use a tourniquet early for life-threatening limb bleeding, and pack junctional wounds. Then think about where you can't see the blood: chest, belly, pelvis and long bones.",
        "sections": [
          {
            "type": "steps",
            "title": "Life-threatening external bleeding",
            "icon": "droplet",
            "steps": [
              {
                "title": "Direct pressure",
                "text": "Hard, on the bleeding point."
              },
              {
                "title": "Limb: tourniquet",
                "text": "5–7 cm (2–3 inches) above the wound, not over a joint. Tighten until the bleeding stops and the distal pulse disappears. Write the time."
              },
              {
                "title": "Still bleeding?",
                "text": "Tighten more; add a second tourniquet above the first. Never loosen it in the field."
              },
              {
                "title": "Junctional (groin, armpit, neck)",
                "text": "Pack the wound with hemostatic or plain gauze; press at least 3 minutes; pressure dressing."
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
            "title": "Where else is the blood?",
            "icon": "search",
            "columns": [
              "Site",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Chest",
                "Reduced breath sounds, dull percussion",
                "Rapid transport; massive hemothorax is 1500 mL or more"
              ],
              [
                "Abdomen",
                "Distension, tenderness, seat-belt sign, Kehr's sign",
                "Rapid transport"
              ],
              [
                "Pelvis / retroperitoneum",
                "Pelvic pain, Grey Turner's bruising, shock",
                "Pelvic binder"
              ],
              [
                "Long bones",
                "Femur can lose 1–1.5 L",
                "Splint (traction for mid-shaft femur)"
              ]
            ]
          },
          {
            "type": "list",
            "title": "No longer recommended",
            "icon": "ban",
            "items": [
              "Elevation and pressure points",
              "Loosening a tourniquet to \"check\"",
              "Improvised tourniquets when a commercial one is available"
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
                    "label": "Trauma assessment",
                    "sub": "Find and stop bleeding",
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
          "q": "Spurting forearm bleeding continues despite firm pressure. Next?",
          "options": [
            "Tourniquet 5–7 cm above the wound",
            "Another 5 minutes of pressure",
            "Tourniquet over the wound",
            "Elevate and apply ice"
          ],
          "correct": 0,
          "explanation": "Not over a joint; write the time."
        },
        {
          "q": "Left shoulder pain after a blow to the left upper abdomen. Suggests:",
          "options": [
            "Kehr's sign: splenic injury",
            "Diaphragm spasm",
            "Neck injury",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "Blood under the diaphragm irritates the phrenic nerve."
        },
        {
          "q": "Which is true of tourniquets?",
          "options": [
            "Tighten until bleeding stops and the distal pulse disappears; never loosen in the field",
            "Loosen every 15 minutes",
            "Place over a joint",
            "Only after 20 minutes of pressure"
          ],
          "correct": 0,
          "explanation": "Loosening risks fatal re-bleeding."
        },
        {
          "q": "Deformed femur, tender pelvis, BP 88/60, HR 130, distended abdomen. Blood loss?",
          "options": [
            "Several litres: femur, pelvis and abdomen together",
            "About 500 mL",
            "Under 250 mL",
            "None"
          ],
          "correct": 0,
          "explanation": "Femur 1–1.5 L; pelvis can exceed 2–3 L."
        },
        {
          "q": "Bleeding groin wound (junctional):",
          "options": [
            "Pack the wound and press firmly for at least 3 minutes",
            "Tourniquet around the groin",
            "Elevate the leg",
            "Leave it"
          ],
          "correct": 0,
          "explanation": "Then a pressure dressing."
        },
        {
          "q": "Tranexamic acid must be given within:",
          "options": [
            "3 hours of injury",
            "24 hours",
            "10 minutes only",
            "1 week"
          ],
          "correct": 0,
          "explanation": "1 g IV over 10 minutes."
        },
        {
          "q": "Tourniquet still leaking after full tightening:",
          "options": [
            "Add a second tourniquet above the first",
            "Remove it and try pressure",
            "Loosen it",
            "Ignore"
          ],
          "correct": 0,
          "explanation": "Side by side, proximal."
        },
        {
          "q": "Bright red spurting blood is from:",
          "options": [
            "An artery",
            "A vein",
            "Capillaries",
            "The skin only"
          ],
          "correct": 0,
          "explanation": "Venous bleeding is dark and steady."
        },
        {
          "q": "Massive hemothorax is blood in the chest of at least:",
          "options": [
            "1500 mL",
            "150 mL",
            "50 mL",
            "5 L"
          ],
          "correct": 0,
          "explanation": "Dull percussion, reduced breath sounds, shock."
        },
        {
          "q": "Which bleeding method is no longer recommended?",
          "options": [
            "Elevation and pressure points",
            "Direct pressure",
            "Tourniquets",
            "Wound packing"
          ],
          "correct": 0,
          "explanation": "They don't reliably stop bleeding."
        }
      ],
      "flashcards": [
        {
          "question": "Arterial, venous, capillary bleeding",
          "answer": "Arterial: bright red, spurting. Venous: dark, steady. Capillary: oozing.",
          "category": "Bleeding Control"
        },
        {
          "question": "Sequence for external bleeding",
          "answer": "Direct pressure → tourniquet (limb) or packing (junctional) → pressure dressing. Elevation and pressure points are no longer recommended.",
          "category": "Bleeding Control"
        },
        {
          "question": "Applying a tourniquet",
          "answer": "5–7 cm above the wound, not over a joint; tighten until bleeding stops; write the time; never loosen in the field; add a second if needed.",
          "category": "Bleeding Control"
        },
        {
          "question": "Kehr's sign",
          "answer": "Left shoulder pain from blood under the diaphragm: think spleen.",
          "category": "Bleeding Control"
        },
        {
          "question": "Fracture blood loss",
          "answer": "Femur 1–1.5 L; tibia or humerus about 0.5–0.75 L; pelvis can exceed 2–3 L.",
          "category": "Bleeding Control"
        },
        {
          "question": "Signs of internal bleeding",
          "answer": "Distension, tenderness, bruising (seat-belt, Cullen's, Grey Turner's), Kehr's sign, unexplained tachycardia, narrowing pulse pressure, cool pale skin, anxiety.",
          "category": "Bleeding Control"
        },
        {
          "question": "\"On the floor and four more\"",
          "answer": "External bleeding, plus chest, abdomen, pelvis/retroperitoneum and long bones.",
          "category": "Bleeding Control"
        },
        {
          "question": "Wound packing",
          "answer": "Find the bleeding point, pack gauze deep and tight until full, press at least 3 minutes, then a pressure dressing.",
          "category": "Bleeding Control"
        }
      ],
      "critical": [
        {
          "id": "crit_6_2_1",
          "scenario": "A saw cut to the lower leg spurts despite 5 minutes of pressure; gauze soaked. BP 96/62, HR 124. Trauma centre 35 minutes away.",
          "question": "Next step?",
          "options": [
            {
              "t": "Commercial tourniquet above the wound (above the knee if needed), tighten until bleeding stops, write the time, transport",
              "f": "Correct."
            },
            {
              "t": "Another 10 minutes of pressure",
              "f": "He's already in shock."
            },
            {
              "t": "Elevate the leg",
              "f": "Not effective."
            },
            {
              "t": "Fluids first",
              "f": "Stop the bleeding first."
            }
          ],
          "correct": 0,
          "explanation": "Tranexamic acid per protocol if within 3 hours.",
          "kpi": "Escalates to tourniquet for uncontrolled extremity hemorrhage"
        },
        {
          "id": "crit_6_2_2",
          "scenario": "High-speed crash: seat-belt bruising, deformed left femur, tender pelvis. During transport BP falls from 104/68 to 86/54, HR 132, new confusion. 18 minutes to go.",
          "question": "Likely source and priority?",
          "options": [
            {
              "t": "Pelvic and abdominal bleeding: pelvic binder at the greater trochanters, small fluid boluses to systolic 80–90 mmHg, pre-alert, keep warm",
              "f": "Correct."
            },
            {
              "t": "The femur only: traction splint and more fluid",
              "f": "The pelvis and abdomen are bigger risks."
            },
            {
              "t": "Large boluses to a normal BP",
              "f": "Permissive hypotension."
            },
            {
              "t": "Stop and do a full survey",
              "f": "Keep moving."
            }
          ],
          "correct": 0,
          "explanation": "Pelvic bleeding can't be controlled in the field; the binder reduces the volume.",
          "kpi": "Identifies occult pelvic/abdominal hemorrhage and applies pelvic binding"
        },
        {
          "id": "crit_6_2_3",
          "scenario": "Mid-upper-arm amputation: a bystander's tourniquet looks loose and the stump bleeds briskly. BP 84/50, HR 138, barely responsive.",
          "question": "Next action?",
          "options": [
            {
              "t": "Tighten it; if bleeding continues, a second tourniquet above it; pressure on other wounds; permissive fluids; rapid transport",
              "f": "Correct."
            },
            {
              "t": "Remove it and start again from scratch",
              "f": "Don't release the first one."
            },
            {
              "t": "Pressure dressing over the stump only",
              "f": "Not for arterial bleeding."
            },
            {
              "t": "Aggressive fluids to systolic above 100 mmHg",
              "f": "Permissive hypotension."
            }
          ],
          "correct": 0,
          "explanation": "Bring the amputated part wrapped in moist gauze, bagged, on ice.",
          "kpi": "Corrects an ineffective tourniquet"
        }
      ]
    },
    {
      "id": "c6s3",
      "shortTitle": "6.3 Shock in Trauma",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Shock in Trauma",
        "lead": "In trauma, shock means bleeding until proven otherwise. Stop the bleeding, keep the patient warm, and give just enough fluid to keep a radial pulse. A head injury needs a higher BP. Don't miss the shocks that need a needle or a surgeon rather than fluid.",
        "sections": [
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
            "type": "steps",
            "title": "Hemorrhagic shock",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Stop the bleeding",
                "text": "Tourniquet, packing, pelvic binder."
              },
              {
                "title": "Oxygen and warmth",
                "text": "SpO₂ 94–98%; blankets, warm the ambulance."
              },
              {
                "title": "Go",
                "text": "Rapid transport and pre-alert; IV/IO access en route."
              },
              {
                "title": "Permissive fluids",
                "text": "Small boluses (about 250 mL) to a radial pulse or systolic 80–90 mmHg; blood where available; avoid large volumes of crystalloid."
              },
              {
                "title": "Head injury?",
                "text": "No permissive hypotension: systolic at least 110 mmHg in most adults."
              }
            ]
          },
          {
            "type": "table",
            "title": "Shock that fluid won't fix",
            "icon": "triangle-alert",
            "stack": true,
            "columns": [
              "Type",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Tension pneumothorax",
                "Absent breath sounds one side, distended neck veins, hypoxia",
                "Needle decompression (ALS)"
              ],
              [
                "Cardiac tamponade",
                "Muffled heart sounds, distended neck veins, equal breath sounds",
                "Rapid transport for surgery"
              ],
              [
                "Neurogenic",
                "Bradycardia, warm dry skin, cord injury",
                "Fluids, vasopressors, atropine (ALS); still look for bleeding"
              ]
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Clues on the monitor",
                "items": [
                  {
                    "ecg": "stach",
                    "label": "Sinus tachycardia",
                    "sub": "Hemorrhage: the first sign"
                  },
                  {
                    "ecg": "alternans",
                    "label": "Electrical alternans",
                    "sub": "Tamponade: alternating QRS height"
                  },
                  {
                    "ecg": "sbrady",
                    "label": "Bradycardia",
                    "sub": "Neurogenic shock"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Stab wound to the right upper quadrant: BP 106/70, HR 118, pale and sweaty, anxious. Class?",
          "options": [
            "Class II (15–30%)",
            "Class I",
            "Class III",
            "Class IV"
          ],
          "correct": 0,
          "explanation": "BP maintained with tachycardia."
        },
        {
          "q": "GCS 10 after a crash, BP 120/70, deformed thigh. Fluid target?",
          "options": [
            "Avoid hypotension: systolic at least 110 mmHg",
            "Permissive: systolic 80–90 mmHg",
            "No fluids ever",
            "One litre regardless"
          ],
          "correct": 0,
          "explanation": "Low BP doubles brain injury."
        },
        {
          "q": "BP 86/54, HR 112, warm dry legs, cool arms, no sensation below the nipples. Shock type?",
          "options": [
            "Neurogenic, from a thoracic cord injury",
            "Hypovolemic only",
            "Cardiogenic",
            "Vasovagal"
          ],
          "correct": 0,
          "explanation": "Still look for bleeding."
        },
        {
          "q": "Permissive hypotension target (no head injury):",
          "options": [
            "Radial pulse or systolic 80–90 mmHg",
            "Systolic 120 mmHg",
            "Systolic 60 mmHg",
            "Normal BP for age"
          ],
          "correct": 0,
          "explanation": "Enough to perfuse without blowing off clots."
        },
        {
          "q": "Class III hemorrhage is:",
          "options": [
            "31–40% loss: hypotension and confusion",
            "Up to 15%",
            "15–30%",
            "More than 60%"
          ],
          "correct": 0,
          "explanation": "Compensation is failing."
        },
        {
          "q": "Why avoid large volumes of crystalloid in bleeding?",
          "options": [
            "They dilute clotting factors, cool the patient and raise BP enough to re-bleed",
            "They're too expensive",
            "They cause hypoglycemia",
            "They don't"
          ],
          "correct": 0,
          "explanation": "Blood products where available."
        },
        {
          "q": "Shock with absent breath sounds on one side and distended neck veins:",
          "options": [
            "Tension pneumothorax: needle decompression (ALS)",
            "Hypovolemia: more fluid",
            "Neurogenic shock",
            "Anaphylaxis"
          ],
          "correct": 0,
          "explanation": "Fluid won't fix it."
        },
        {
          "q": "Shock with muffled heart sounds, distended neck veins, equal breath sounds after a stab wound:",
          "options": [
            "Cardiac tamponade",
            "Tension pneumothorax",
            "Massive hemothorax",
            "Neurogenic shock"
          ],
          "correct": 0,
          "explanation": "Rapid transport for surgery."
        },
        {
          "q": "Why keep trauma patients warm?",
          "options": [
            "Hypothermia worsens clotting and acidosis",
            "For comfort only",
            "To raise BP directly",
            "It's not important"
          ],
          "correct": 0,
          "explanation": "The lethal triad."
        },
        {
          "q": "Oxygen target in trauma shock:",
          "options": [
            "SpO₂ 94–98%",
            "88–92%",
            "100% always",
            "None"
          ],
          "correct": 0,
          "explanation": "Titrate."
        }
      ],
      "flashcards": [
        {
          "question": "Shock types in trauma",
          "answer": "Hypovolemic/hemorrhagic (commonest), obstructive (tension pneumothorax, tamponade), neurogenic (cord injury), cardiogenic (blunt cardiac injury).",
          "category": "Shock in Trauma"
        },
        {
          "question": "Compensated vs decompensated",
          "answer": "Compensated (class I–II, up to 30%): BP held by tachycardia and vasoconstriction. Decompensated (class III–IV): hypotension, confusion.",
          "category": "Shock in Trauma"
        },
        {
          "question": "ATLS hemorrhage classes",
          "answer": "I up to 15%; II 15–30% (tachycardia, BP maintained); III 31–40% (hypotension, confusion); IV more than 40% (pre-arrest).",
          "category": "Shock in Trauma"
        },
        {
          "question": "Permissive hypotension",
          "answer": "Small boluses to a radial pulse or systolic 80–90 mmHg. Not with head injury: keep systolic at least 110 mmHg in most adults.",
          "category": "Shock in Trauma"
        },
        {
          "question": "Neurogenic vs hemorrhagic shock",
          "answer": "Neurogenic: bradycardia, warm dry skin, cord injury. Hemorrhagic: tachycardia, cool pale clammy skin, bleeding.",
          "category": "Shock in Trauma"
        },
        {
          "question": "Prehospital fluid in hemorrhage",
          "answer": "IV/IO en route; boluses of about 250 mL titrated to a radial pulse or systolic 80–90 mmHg; blood where available; avoid large crystalloid volumes.",
          "category": "Shock in Trauma"
        },
        {
          "question": "Tension pneumothorax vs tamponade",
          "answer": "Tension: absent breath sounds one side, hyperresonance. Tamponade: equal breath sounds, muffled heart sounds. Both: distended neck veins, low BP.",
          "category": "Shock in Trauma"
        },
        {
          "question": "Prehospital shock care",
          "answer": "Stop bleeding, oxygen to target, keep warm, pelvic binder if needed, permissive fluids, rapid transport, pre-alert.",
          "category": "Shock in Trauma"
        }
      ],
      "critical": [
        {
          "id": "crit_6_3_1",
          "scenario": "Gunshot to the right upper chest. At first BP 102/74, flat neck veins, clear breath sounds. Ten minutes later: BP 88/60, HR 130, SpO₂ 89%, distended neck veins, right chest hyperresonant with absent breath sounds.",
          "question": "Cause of the sudden decline?",
          "options": [
            {
              "t": "Tension pneumothorax: needle decompression (ALS) now, then rapid transport",
              "f": "Correct."
            },
            {
              "t": "Hemorrhage: more fluid",
              "f": "Distended neck veins and hyperresonance point to tension."
            },
            {
              "t": "Tamponade",
              "f": "Breath sounds are absent on one side."
            },
            {
              "t": "Anxiety",
              "f": "This is obstructive shock."
            }
          ],
          "correct": 0,
          "explanation": "Adults: 4th or 5th intercostal space just in front of the mid-axillary line, or 2nd space mid-clavicular.",
          "kpi": "Recognizes tension pneumothorax as obstructive shock"
        },
        {
          "id": "crit_6_3_2",
          "scenario": "A belted driver in a frontal crash: seat-belt bruise, epigastric tenderness. BP 100/68 at first; 15 minutes later 84/52, HR 126, confused, abdomen distending.",
          "question": "Source and adjustment?",
          "options": [
            {
              "t": "Intra-abdominal bleeding: small fluid boluses to systolic 80–90 mmHg, keep warm, update the trauma centre",
              "f": "Correct."
            },
            {
              "t": "Just a bruise: continue routinely",
              "f": "She's decompensating."
            },
            {
              "t": "Large boluses to normal BP",
              "f": "Permissive hypotension."
            },
            {
              "t": "Sit her up to stop vomiting",
              "f": "Keep her flat or on her side."
            }
          ],
          "correct": 0,
          "explanation": "The seat-belt sign is a red flag for liver, spleen and mesenteric injury.",
          "kpi": "Recognizes progression to decompensated hemorrhagic shock"
        },
        {
          "id": "crit_6_3_3",
          "scenario": "Rollover: BP 88/56, HR 60, warm dry skin, thoracic spine tenderness, no sensation below the nipples, no leg movement.",
          "question": "How do you tell neurogenic from hemorrhagic shock, and manage?",
          "options": [
            {
              "t": "Neurogenic (warm, dry, slow pulse, cord injury): spinal motion restriction, fluids, ALS for vasopressors and atropine – and keep looking for bleeding",
              "f": "Correct."
            },
            {
              "t": "Hemorrhagic: MAST trousers",
              "f": "MAST/PASG is no longer used."
            },
            {
              "t": "No treatment: it's just the spine",
              "f": "Low BP harms the injured cord."
            },
            {
              "t": "Cardiogenic",
              "f": "Not with this picture."
            }
          ],
          "correct": 0,
          "explanation": "Both can coexist after a rollover.",
          "kpi": "Differentiates neurogenic from hemorrhagic shock"
        }
      ]
    },
    {
      "id": "c6s4",
      "shortTitle": "6.4 Soft-Tissue Injuries & Wound Care",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Soft-Tissue Injuries & Wound Care",
        "lead": "Most wounds look worse than they are, but a few hide real danger. Stabilise impaled objects, save amputated parts properly, cover evisceration, and watch any crushed limb for compartment syndrome.",
        "sections": [
          {
            "type": "table",
            "title": "Special wounds",
            "icon": "bandage",
            "stack": true,
            "columns": [
              "Wound",
              "Do",
              "Don't"
            ],
            "rows": [
              [
                "Impaled object",
                "Stabilise with bulky dressings",
                "Remove (unless it blocks the airway, is through the cheek blocking care, or prevents CPR)"
              ],
              [
                "Amputated part",
                "Moist saline gauze → sealed bag → on ice or in ice water",
                "Put it directly on ice or submerge it"
              ],
              [
                "Evisceration",
                "Moist sterile dressing plus an occlusive layer; keep warm",
                "Push organs back"
              ],
              [
                "Partial avulsion / degloving",
                "Keep the flap attached, gently replace, moist dressing",
                "Cut the flap off"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Crush injuries",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Compartment syndrome",
                "items": [
                  "Pain out of proportion and on passive stretch (earliest)",
                  "Then paresthesia, pallor, paralysis, cold, pulselessness (late)",
                  "Loosen dressings and splints; limb at heart level; urgent surgery"
                ]
              },
              {
                "title": "Crush syndrome (long entrapment)",
                "items": [
                  "On release: high potassium, myoglobin, arrhythmia, kidney injury",
                  "IV fluid before release where possible; cardiac monitor; ALS"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Tetanus (CDC)",
            "icon": "syringe",
            "items": [
              "Clean minor wound: booster if more than 10 years since the last dose",
              "Other wounds: booster if more than 5 years",
              "Unknown or fewer than 3 doses, dirty wound: vaccine plus tetanus immune globulin",
              "Note the risk and the vaccination history in your handover"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Crush injury",
                "items": [
                  {
                    "ecg": "hyperK",
                    "label": "Hyperkalemia",
                    "sub": "Peaked T waves after release",
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
          "q": "A 3 cm jagged glass wound exposing muscle is:",
          "options": [
            "A laceration",
            "An incision",
            "An abrasion",
            "A puncture"
          ],
          "correct": 0,
          "explanation": "Knives make incisions (clean cuts)."
        },
        {
          "q": "Crush injury: pain out of proportion and pain on passive finger stretch. Suspect:",
          "options": [
            "Compartment syndrome: loosen dressings, transport for fasciotomy",
            "Simple bruise",
            "Nerve injury only",
            "Fracture only"
          ],
          "correct": 0,
          "explanation": "Pulselessness is late."
        },
        {
          "q": "Preserving an amputated finger:",
          "options": [
            "Moist saline gauze, sealed bag, on ice or in ice water",
            "Directly in ice water",
            "Dry gauze in a bag on ice",
            "Submerged in saline"
          ],
          "correct": 0,
          "explanation": "Direct ice causes frostbite; soaking macerates."
        },
        {
          "q": "Rebar impaled in the abdomen:",
          "options": [
            "Stabilise it with bulky dressings; don't remove",
            "Pull it out",
            "Push it in further",
            "Cut it flush to the skin"
          ],
          "correct": 0,
          "explanation": "It may be plugging a bleeding vessel."
        },
        {
          "q": "Bowel protruding from a wound:",
          "options": [
            "Moist sterile dressing plus an occlusive layer",
            "Push it back",
            "Dry gauze",
            "Leave uncovered"
          ],
          "correct": 0,
          "explanation": "Keep it moist and warm."
        },
        {
          "q": "When may an impaled object be removed?",
          "options": [
            "It blocks the airway or prevents CPR",
            "It's heavy",
            "The patient asks",
            "Always"
          ],
          "correct": 0,
          "explanation": "Or through the cheek preventing airway or bleeding control."
        },
        {
          "q": "After 4 hours trapped under rubble, the danger on release is:",
          "options": [
            "Hyperkalemia and arrhythmia (crush syndrome)",
            "Hypoglycemia",
            "Hypothermia only",
            "Nothing"
          ],
          "correct": 0,
          "explanation": "IV fluid before release where possible; monitor."
        },
        {
          "q": "Tetanus booster for a dirty wound if the last dose was more than:",
          "options": [
            "5 years ago",
            "10 years ago",
            "1 year ago",
            "20 years ago"
          ],
          "correct": 0,
          "explanation": "10 years for clean minor wounds."
        },
        {
          "q": "A degloving flap attached by a pedicle:",
          "options": [
            "Keep it attached, gently replace, moist dressing",
            "Cut it off",
            "Leave it hanging",
            "Tourniquet first always"
          ],
          "correct": 0,
          "explanation": "It may survive."
        },
        {
          "q": "Earliest sign of compartment syndrome:",
          "options": [
            "Pain out of proportion and on passive stretch",
            "No pulse",
            "Paralysis",
            "Cold limb"
          ],
          "correct": 0,
          "explanation": "Don't wait for pulselessness."
        }
      ],
      "flashcards": [
        {
          "question": "Laceration vs incision vs avulsion",
          "answer": "Laceration: jagged tear. Incision: clean cut. Avulsion: tissue torn away (flap or complete).",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Evisceration",
          "answer": "Don't replace organs; moist sterile dressing plus an occlusive layer; keep warm; transport.",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Amputated part",
          "answer": "Moist saline gauze → sealed bag → on ice or in ice water. Never directly on ice. Label and transport with the patient.",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Removing an impaled object",
          "answer": "Only if it blocks the airway, is through the cheek and blocks airway or bleeding control, or prevents CPR. Otherwise stabilise.",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Compartment syndrome signs",
          "answer": "Pain out of proportion and on passive stretch (earliest), paresthesia, pallor, paralysis, poikilothermia, pulselessness (late).",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Tetanus",
          "answer": "Toxin causes muscle spasm (lockjaw). High-risk wounds: puncture, dirty, crushed, dead tissue, delayed care.",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Tetanus booster timing",
          "answer": "Clean minor: more than 10 years. Other wounds: more than 5 years. Unknown or under 3 doses: vaccine plus immune globulin for dirty wounds.",
          "category": "Soft-Tissue Injuries & Wound Care"
        },
        {
          "question": "Crush syndrome",
          "answer": "After long entrapment, release floods potassium and myoglobin: arrhythmia and kidney injury. IV fluid before release, monitor, ALS.",
          "category": "Soft-Tissue Injuries & Wound Care"
        }
      ],
      "critical": [
        {
          "id": "crit_6_4_1",
          "scenario": "Rebar through the left lower abdomen, still set in a concrete block. BP 98/64, HR 118, pale and sweaty.",
          "question": "Best approach?",
          "options": [
            {
              "t": "Stabilise the rebar with bulky dressings, have rescue cut the debris without moving the bar, transport to a trauma centre",
              "f": "Correct."
            },
            {
              "t": "Pull it out to lighten the load",
              "f": "It may be plugging bleeding vessels."
            },
            {
              "t": "Rock it gently to free it",
              "f": "Every movement causes more damage."
            },
            {
              "t": "Wait for it to be removed on scene by fire crews",
              "f": "Removal happens in theatre."
            }
          ],
          "correct": 0,
          "explanation": "Treat for shock en route.",
          "kpi": "Stabilises an impaled object and coordinates extrication"
        },
        {
          "id": "crit_6_4_2",
          "scenario": "A man with diabetes caught his foot in a farm auger 2 hours ago: wound full of soil. He can't recall his last tetanus shot.",
          "question": "Approach to tetanus?",
          "options": [
            {
              "t": "Clean and dress the wound, document it as high-risk and the unknown vaccination status, and hand over the need for vaccine plus immune globulin",
              "f": "Correct."
            },
            {
              "t": "Not an EMS concern",
              "f": "Your documentation drives hospital treatment."
            },
            {
              "t": "Only if he's had no shot in 20 years",
              "f": "Dirty wound: more than 5 years or unknown."
            },
            {
              "t": "Pour alcohol into the wound",
              "f": "Irrigate with clean water or saline."
            }
          ],
          "correct": 0,
          "explanation": "Contaminated, crushed and delayed: all high-risk.",
          "kpi": "Recognizes a tetanus-prone wound and documents risk"
        },
        {
          "id": "crit_6_4_3",
          "scenario": "A motorcyclist has a large lower-leg degloving: an 8 × 10 cm flap hanging by a pedicle, active bleeding, exposed muscle. BP 88/60, HR 130.",
          "question": "Management?",
          "options": [
            {
              "t": "Control bleeding with pressure (tourniquet if it's life-threatening), gently replace the flap, moist dressing, treat for shock, trauma centre",
              "f": "Correct."
            },
            {
              "t": "Cut the flap off",
              "f": "It may survive."
            },
            {
              "t": "Leave the wound open",
              "f": "Cover it."
            },
            {
              "t": "Clean it thoroughly on scene first",
              "f": "Shock comes first."
            }
          ],
          "correct": 0,
          "explanation": "A tourniquet is for bleeding pressure can't control.",
          "kpi": "Manages an avulsion while prioritizing shock"
        }
      ]
    },
    {
      "id": "c6s5",
      "shortTitle": "6.5 Burns",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Burns",
        "lead": "Stop the burning, cool the burn, cover it and keep the patient warm. The burn itself rarely kills in the first hour; the airway and the smoke do. Estimate the size, look for inhalation, carbon monoxide and other trauma, and know who belongs in a burn centre.",
        "sections": [
          {
            "type": "steps",
            "title": "First minutes",
            "icon": "thermometer-sun",
            "steps": [
              {
                "title": "Stop the burning",
                "text": "Remove from the source; power off for electrical; remove clothing and jewellery."
              },
              {
                "title": "Airway",
                "text": "Hoarse voice, stridor, soot, facial burns: early ALS airway."
              },
              {
                "title": "Cool",
                "text": "Cool running water for 20 minutes (useful up to 3 hours after the burn). No ice."
              },
              {
                "title": "Cover and warm",
                "text": "Clean dry dressing or cling film; blankets."
              },
              {
                "title": "Size and fluids",
                "text": "Large burns: lactated Ringer's at adults 500 mL/h, children 6–13 years 250 mL/h, 5 years or younger 125 mL/h.",
                "level": "ALS"
              }
            ]
          },
          {
            "type": "table",
            "title": "Depth",
            "icon": "list",
            "columns": [
              "Depth",
              "Looks",
              "Feels"
            ],
            "rows": [
              [
                "Superficial",
                "Red, dry, no blisters (not counted)",
                "Painful"
              ],
              [
                "Partial-thickness",
                "Blisters, moist, red",
                "Very painful"
              ],
              [
                "Full-thickness",
                "White, leathery or charred",
                "Painless"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Rule of nines (adult)",
            "icon": "ruler",
            "columns": [
              "Area",
              "%"
            ],
            "rows": [
              [
                "Head and neck",
                "9"
              ],
              [
                "Each arm",
                "9"
              ],
              [
                "Front of trunk",
                "18"
              ],
              [
                "Back of trunk",
                "18"
              ],
              [
                "Each leg",
                "18"
              ],
              [
                "Perineum",
                "1"
              ]
            ],
            "notes": [
              "Infants: head 18%, each leg 13.5% (use a Lund-Browder chart for children).",
              "Patient's palm with fingers is about 1%: good for scattered burns."
            ]
          },
          {
            "type": "groups",
            "title": "Special burns",
            "icon": "zap",
            "groups": [
              {
                "title": "Inhalation / smoke",
                "items": [
                  "100% oxygen for carbon monoxide",
                  "Consider cyanide: hydroxocobalamin 5 g IV (ALS)"
                ]
              },
              {
                "title": "Electrical",
                "items": [
                  "Small skin wounds, deep muscle damage",
                  "Cardiac monitoring; dark urine = rhabdomyolysis"
                ]
              },
              {
                "title": "Chemical",
                "items": [
                  "Brush off powder, then irrigate at least 20 minutes",
                  "Hydrofluoric acid: calcium gluconate gel 2.5%, cardiac monitor"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Burn centre",
            "icon": "hospital",
            "items": [
              "Partial-thickness 10% TBSA or more; any full-thickness",
              "Face, hands, feet, genitals, perineum, major joints; circumferential",
              "Electrical, chemical, inhalation; burns with trauma",
              "Children, significant illness, suspected abuse"
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
                    "label": "EMS tools: burns",
                    "sub": "TBSA and fluid calculator",
                    "href": "../pages/ems-tools.html",
                    "icon": "scale"
                  }
                ]
              },
              {
                "title": "Electrical injury",
                "items": [
                  {
                    "ecg": "afib",
                    "label": "Atrial fibrillation",
                    "sub": "Arrhythmia after electrical injury"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Partial-thickness burns to the front of the trunk, the whole right arm and the front of the right leg. TBSA?",
          "options": [
            "36%",
            "27%",
            "40.5%",
            "45%"
          ],
          "correct": 0,
          "explanation": "18 + 9 + 9 = 36%."
        },
        {
          "q": "4-year-old with burns to the head and front of trunk. Best size method?",
          "options": [
            "Lund-Browder chart (or child-adjusted rule of nines): children's heads are proportionally bigger",
            "Adult rule of nines",
            "Patient's height",
            "Guessing"
          ],
          "correct": 0,
          "explanation": "Infant head and neck is 18%."
        },
        {
          "q": "High-voltage contact: small charred hand wound, bigger foot wound, confused, frequent PVCs. Priority?",
          "options": [
            "Hidden deep injury and cardiac irritability: monitor, IV access, rapid transport to a burn centre",
            "Dress the wounds and discharge",
            "Let him refuse: he's talking",
            "The foot wound because it's bigger"
          ],
          "correct": 0,
          "explanation": "Skin wounds underestimate electrical damage."
        },
        {
          "q": "8% partial-thickness burns to both hands and the perineum from a chemical. Destination?",
          "options": [
            "Burn centre: hands, perineum and chemical burns qualify whatever the size",
            "Any ED",
            "Scene discharge",
            "Clinic"
          ],
          "correct": 0,
          "explanation": "Location and type matter, not just size."
        },
        {
          "q": "How long should a burn be cooled?",
          "options": [
            "20 minutes with cool running water",
            "1 minute",
            "Until it's numb with ice",
            "Not at all"
          ],
          "correct": 0,
          "explanation": "Useful up to 3 hours after the burn."
        },
        {
          "q": "A white, leathery, painless burn is:",
          "options": [
            "Full-thickness",
            "Superficial",
            "Partial-thickness",
            "Not a burn"
          ],
          "correct": 0,
          "explanation": "Nerve endings are destroyed."
        },
        {
          "q": "Hoarse voice, singed nasal hair and soot after an enclosed-space fire:",
          "options": [
            "Inhalation injury: early airway management, 100% oxygen",
            "Normal: treat skin burns first",
            "Anxiety",
            "A cold"
          ],
          "correct": 0,
          "explanation": "Swelling can close the airway quickly."
        },
        {
          "q": "Dry chemical powder on the skin:",
          "options": [
            "Brush off first, then irrigate",
            "Irrigate immediately",
            "Leave it",
            "Neutralise with vinegar"
          ],
          "correct": 0,
          "explanation": "Then at least 20 minutes of water."
        },
        {
          "q": "Prehospital starting fluid rate for a large burn in an adult (ALS):",
          "options": [
            "500 mL/h",
            "50 mL/h",
            "2000 mL bolus",
            "None"
          ],
          "correct": 0,
          "explanation": "Children 6–13 years 250 mL/h, 5 years or younger 125 mL/h."
        },
        {
          "q": "Smoke-inhalation patient with collapse and low BP. Consider:",
          "options": [
            "Cyanide: hydroxocobalamin 5 g IV (ALS)",
            "Naloxone",
            "Glucagon",
            "Atropine only"
          ],
          "correct": 0,
          "explanation": "Plus 100% oxygen for carbon monoxide."
        }
      ],
      "flashcards": [
        {
          "question": "Burn depths",
          "answer": "Superficial: red, dry, painful. Partial-thickness: blisters, moist, very painful. Full-thickness: white, leathery or charred, painless.",
          "category": "Burns"
        },
        {
          "question": "Rule of nines",
          "answer": "Adult: head 9%, each arm 9%, front trunk 18%, back trunk 18%, each leg 18%, perineum 1%. Infant: head 18%, each leg 13.5%.",
          "category": "Burns"
        },
        {
          "question": "Palm method",
          "answer": "The patient's palm with fingers is about 1% TBSA: for scattered or irregular burns.",
          "category": "Burns"
        },
        {
          "question": "Burn centre referral",
          "answer": "Partial-thickness 10% or more; full-thickness; face, hands, feet, genitals, perineum, major joints; circumferential; electrical, chemical, inhalation; trauma; children; suspected abuse.",
          "category": "Burns"
        },
        {
          "question": "Signs of inhalation injury",
          "answer": "Enclosed-space fire, facial burns, singed nasal hair, soot, hoarseness, stridor, hypoxia. Early airway; 100% oxygen.",
          "category": "Burns"
        },
        {
          "question": "Circumferential burns",
          "answer": "Act like a tourniquet on a limb or restrict breathing on the chest: escharotomy in hospital.",
          "category": "Burns"
        },
        {
          "question": "Electrical burns",
          "answer": "Hidden deep damage; cardiac monitoring; arrhythmias; rhabdomyolysis (dark urine); fractures from muscle spasm.",
          "category": "Burns"
        },
        {
          "question": "Dry vs liquid chemical",
          "answer": "Dry: brush off first, then irrigate. Liquid: irrigate at least 20 minutes (longer for alkali).",
          "category": "Burns"
        }
      ],
      "critical": [
        {
          "id": "crit_6_5_1",
          "scenario": "From a house fire: facial burns, singed nasal hair, soot in the mouth, hoarse voice. SpO₂ 91%, RR 26. About 27% partial-thickness burns.",
          "question": "Most immediate threat and priority?",
          "options": [
            {
              "t": "Inhalation injury threatening the airway: 100% oxygen, sit up, early ALS airway, burn centre with pre-alert",
              "f": "Correct."
            },
            {
              "t": "Pain: treat pain before anything else",
              "f": "Airway first."
            },
            {
              "t": "Cool all burns for an hour on scene",
              "f": "Don't delay the airway or let him get cold."
            },
            {
              "t": "Large fluid bolus now",
              "f": "Airway first; fluids by rate."
            }
          ],
          "correct": 0,
          "explanation": "The window to intubate closes as swelling grows. Treat for carbon monoxide too.",
          "kpi": "Prioritizes inhalation injury and airway in a burn patient"
        },
        {
          "id": "crit_6_5_2",
          "scenario": "Rust remover splashed on a forearm: pain 10/10 and worsening despite a rinse, skin turning white and firm, pulse irregular.",
          "question": "Likely chemical and management?",
          "options": [
            {
              "t": "Hydrofluoric acid: keep irrigating, calcium gluconate gel 2.5% per protocol, cardiac monitor, emergency transport",
              "f": "Correct."
            },
            {
              "t": "Simple acid: dry dressing and routine transport",
              "f": "Severe pain and arrhythmia suggest hydrofluoric acid."
            },
            {
              "t": "Neutralise with an alkali",
              "f": "Never."
            },
            {
              "t": "Anxiety causing the irregular pulse",
              "f": "Low calcium causes arrhythmias."
            }
          ],
          "correct": 0,
          "explanation": "Fluoride binds calcium: deep damage and dangerous arrhythmias.",
          "kpi": "Recognizes hydrofluoric acid exposure and its systemic risk"
        },
        {
          "id": "crit_6_5_3",
          "scenario": "Electrical panel shock: small palm wound, larger shoulder exit wound, confused, irregular pulse 124, dark brown urine, can't move the right arm.",
          "question": "Three main concerns?",
          "options": [
            {
              "t": "Arrhythmia (cardiac monitoring), hidden deep tissue and compartment injury, and rhabdomyolysis (fluids, burn centre)",
              "f": "Correct."
            },
            {
              "t": "Dress the wounds, splint the arm, treat as concussion",
              "f": "That misses the cardiac and muscle damage."
            },
            {
              "t": "Discharge if the ECG settles",
              "f": "Delayed problems are common."
            },
            {
              "t": "Ice the arm",
              "f": "No."
            }
          ],
          "correct": 0,
          "explanation": "Small skin wounds hide large internal injuries.",
          "kpi": "Identifies the hidden dangers of electrical injury"
        }
      ]
    },
    {
      "id": "c6s6",
      "shortTitle": "6.6 Head & Brain Injury",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Head & Brain Injury",
        "lead": "You can't fix the injury from the impact, but you can stop the second one. Prevent hypoxia, hypotension and over-ventilation, then get the patient to neurosurgery. One episode of low oxygen or low BP can double the damage.",
        "sections": [
          {
            "type": "table",
            "title": "Protect the brain",
            "icon": "brain",
            "columns": [
              "Target",
              "Avoid"
            ],
            "rows": [
              [
                "SpO₂ 90% or more (aim 94–98%)",
                "Hypoxia"
              ],
              [
                "Systolic at least 110 mmHg in most adults",
                "Hypotension"
              ],
              [
                "EtCO₂ 35–45 mmHg (adult about 10 breaths/min)",
                "Hyperventilation"
              ],
              [
                "Normal glucose",
                "Hypo- or hyperglycemia"
              ],
              [
                "Head of stretcher up 30° if the spine allows",
                "Tight collars, lying flat with vomiting"
              ]
            ]
          },
          {
            "type": "gate",
            "title": "Signs of herniation?",
            "icon": "triangle-alert",
            "question": "Any one of these signs?",
            "items": [
              "One or both pupils dilated and fixed, or unequal",
              "Extensor posturing or no motor response",
              "GCS falling by more than 2 points in a patient already below 9",
              "Cushing's triad: rising BP, slowing pulse, irregular breathing"
            ],
            "yes": "Brief hyperventilation to EtCO₂ 30–35 mmHg (adult about 20 breaths/min, child 25, infant 30) as a bridge; pre-alert neurosurgery.",
            "no": "Ventilate normally to EtCO₂ 35–45 mmHg."
          },
          {
            "type": "table",
            "title": "GCS",
            "icon": "list",
            "columns": [
              "",
              "Score"
            ],
            "rows": [
              [
                "Eyes",
                "1–4"
              ],
              [
                "Verbal",
                "1–5"
              ],
              [
                "Motor",
                "1–6"
              ],
              [
                "Mild / moderate / severe",
                "13–15 / 9–12 / 8 or less"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Patterns",
            "icon": "eye",
            "groups": [
              {
                "title": "Epidural",
                "items": [
                  "Arterial; lucid interval, then rapid decline"
                ]
              },
              {
                "title": "Subdural",
                "items": [
                  "Venous; slower; older adults, alcohol, anticoagulants"
                ]
              },
              {
                "title": "Basal skull fracture",
                "items": [
                  "Raccoon eyes, Battle's sign, CSF from nose or ears"
                ]
              },
              {
                "title": "Sport concussion",
                "items": [
                  "Remove from play; no return the same day",
                  "Helmet stays on unless the airway needs it"
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
                    "sub": "Score and trend",
                    "href": "../pages/GCS.html",
                    "icon": "brain"
                  },
                  {
                    "label": "Trauma assessment",
                    "sub": "Head injury exam",
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
          "q": "GCS E1 V1 M2 = 4 after a motorcycle crash. Interpretation?",
          "options": [
            "Severe TBI with extensor posturing: trauma centre with neurosurgery; prevent secondary injury",
            "Moderate TBI",
            "Concussion",
            "Can't be assessed"
          ],
          "correct": 0,
          "explanation": "8 or less is severe."
        },
        {
          "q": "Brief unconsciousness, then talking, then drowsy, vomiting and a fixed dilated right pupil. Most likely?",
          "options": [
            "Epidural hematoma",
            "Concussion",
            "Chronic subdural",
            "Migraine"
          ],
          "correct": 0,
          "explanation": "Lucid interval, then rapid decline."
        },
        {
          "q": "On warfarin, hit her head, GCS 14 and \"a little confused\". Management?",
          "options": [
            "Transport for CT: high risk of intracranial bleeding",
            "Allow refusal",
            "Watch overnight at home",
            "Blame dementia"
          ],
          "correct": 0,
          "explanation": "Any anticoagulated head injury needs a scan."
        },
        {
          "q": "GCS 6, no signs of herniation. Ventilation rate (adult)?",
          "options": [
            "About 10 breaths/min to EtCO₂ 35–45 mmHg",
            "20–25/min to lower ICP",
            "4–6/min",
            "As fast as possible"
          ],
          "correct": 0,
          "explanation": "Hyperventilation constricts brain vessels."
        },
        {
          "q": "Minimum systolic BP target in adult TBI:",
          "options": [
            "110 mmHg",
            "80 mmHg",
            "60 mmHg",
            "No target"
          ],
          "correct": 0,
          "explanation": "Hypotension worsens outcome."
        },
        {
          "q": "Cushing's triad:",
          "options": [
            "Rising BP, slowing pulse, irregular breathing",
            "Low BP, fast pulse, fast breathing",
            "Fever, rash, stiff neck",
            "Hypoglycemia, sweating, tremor"
          ],
          "correct": 0,
          "explanation": "A late sign of rising pressure."
        },
        {
          "q": "Severe TBI is a GCS of:",
          "options": [
            "8 or less",
            "13–15",
            "9–12",
            "15"
          ],
          "correct": 0,
          "explanation": "They often can't protect their airway."
        },
        {
          "q": "Herniation signs: brief hyperventilation target EtCO₂:",
          "options": [
            "30–35 mmHg",
            "20 mmHg",
            "45–50 mmHg",
            "None"
          ],
          "correct": 0,
          "explanation": "A bridge to surgery only."
        },
        {
          "q": "A footballer is confused after a hit but wants to play on:",
          "options": [
            "Remove from play; no return the same day",
            "Let him play if he feels better",
            "Ice the head and continue",
            "Remove the helmet to check"
          ],
          "correct": 0,
          "explanation": "Second impacts can be fatal."
        },
        {
          "q": "Head-injured adult with BP 84/56 and pale, cool skin:",
          "options": [
            "Look for bleeding elsewhere: head injury rarely causes shock",
            "It's from the head injury",
            "Hyperventilate",
            "Lower the head of the stretcher"
          ],
          "correct": 0,
          "explanation": "Treat the shock."
        }
      ],
      "flashcards": [
        {
          "question": "Skull fractures",
          "answer": "Linear, depressed, basal. Basal signs: raccoon eyes, Battle's sign, CSF from nose or ears, blood behind the eardrum.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "Primary vs secondary brain injury",
          "answer": "Primary: at impact, irreversible. Secondary: from hypoxia, hypotension, glucose problems and raised pressure – preventable.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "Cushing's triad",
          "answer": "Rising BP (widening pulse pressure), bradycardia, irregular breathing: late sign of raised intracranial pressure.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "GCS ranges",
          "answer": "Eyes 1–4, verbal 1–5, motor 1–6 (total 3–15). Mild 13–15, moderate 9–12, severe 8 or less.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "Lucid interval",
          "answer": "Normal consciousness after injury, then rapid decline: classic for epidural hematoma.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "Epidural vs subdural",
          "answer": "Epidural: arterial, rapid. Subdural: venous, slower; older adults, alcohol use, anticoagulants.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "Signs of herniation",
          "answer": "Any one of: unequal or fixed dilated pupil, extensor posturing or no motor response, GCS falling by more than 2 points when already below 9, Cushing's triad.",
          "category": "Head & Brain Injury"
        },
        {
          "question": "Ventilation in TBI",
          "answer": "Normally EtCO₂ 35–45 mmHg (adult about 10 breaths/min). With herniation signs only: briefly to 30–35 mmHg (adult about 20 breaths/min).",
          "category": "Head & Brain Injury"
        }
      ],
      "critical": [
        {
          "id": "crit_6_6_1",
          "scenario": "Fell 20 feet; GCS 12 then dropping. BP rises to 168/82, pulse 56, irregular breathing 8/min. Right pupil 6 mm and fixed; right-sided extension to pain.",
          "question": "What's happening and what now?",
          "options": [
            {
              "t": "Herniation: secure the airway, ventilate to EtCO₂ 30–35 mmHg as a bridge, head up 30°, emergency transport to neurosurgery",
              "f": "Correct."
            },
            {
              "t": "A seizure: glucose and recovery position",
              "f": "Cushing's triad and a blown pupil mean herniation."
            },
            {
              "t": "Lower his BP",
              "f": "The BP is keeping the brain perfused."
            },
            {
              "t": "Normal ventilation only",
              "f": "Brief hyperventilation is justified with herniation signs."
            }
          ],
          "correct": 0,
          "explanation": "Every minute of herniation damages the brainstem.",
          "kpi": "Recognizes herniation and applies bridge therapy"
        },
        {
          "id": "crit_6_6_2",
          "scenario": "After a side-impact crash, an alert driver with a splinted leg drops from GCS 15 to 10 over 8 minutes. BP 84/56, HR 124, pale and cool. Pupils equal.",
          "question": "Differential and priority?",
          "options": [
            {
              "t": "Hemorrhagic shock reducing brain perfusion: find and treat bleeding (chest, abdomen, pelvis), pelvic binder if indicated, fluids, don't hyperventilate",
              "f": "Correct."
            },
            {
              "t": "Head injury: hyperventilate",
              "f": "Hypotension in trauma is bleeding until proven otherwise."
            },
            {
              "t": "Lower the head and wait",
              "f": "Treat the shock."
            },
            {
              "t": "Anxiety",
              "f": "GCS 10 isn't anxiety."
            }
          ],
          "correct": 0,
          "explanation": "His GCS may improve once perfusion is restored.",
          "kpi": "Attributes altered mental status with hypotension to hemorrhage"
        },
        {
          "id": "crit_6_6_3",
          "scenario": "A 17-year-old footballer after a helmet-to-helmet hit: confused, repeating questions, can't remember the play. GCS 14, normal exam. The coach wants him back in.",
          "question": "Management?",
          "options": [
            {
              "t": "Suspected concussion: remove from play, no return today, serial neuro checks, transport for assessment, helmet on unless needed for the airway",
              "f": "Correct."
            },
            {
              "t": "Return to play with observation",
              "f": "Never the same day."
            },
            {
              "t": "Remove the helmet to examine",
              "f": "Leave it on unless the airway needs access."
            },
            {
              "t": "Send him home alone",
              "f": "He needs assessment and a responsible adult."
            }
          ],
          "correct": 0,
          "explanation": "With neck pain or tenderness, add spinal motion restriction.",
          "kpi": "Applies concussion removal-from-play principles"
        }
      ]
    },
    {
      "id": "c6s7",
      "shortTitle": "6.7 Spine & Motion Restriction",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Spine & Spinal Motion Restriction",
        "lead": "Restrict spinal movement for the patients who need it, not everyone in a crash. Use clear criteria, then a collar and a scoop or vacuum mattress. Long backboards are for getting people out, not for the ride. Watch the breathing and BP in high cord injuries.",
        "sections": [
          {
            "type": "criteria",
            "title": "Blunt trauma: who needs SMR?",
            "icon": "bone",
            "include": [
              "Altered consciousness or intoxication",
              "Midline spinal pain or tenderness",
              "New numbness, weakness or tingling",
              "Spinal deformity",
              "Distracting injury or circumstances"
            ],
            "exclude": [
              "None of the above (NEXUS-negative): no SMR needed",
              "Penetrating trauma without neuro deficit: no SMR (it delays care)"
            ]
          },
          {
            "type": "steps",
            "title": "How",
            "icon": "wrench",
            "steps": [
              {
                "title": "Manual in-line stabilisation",
                "text": "Head neutral, unless that causes pain or resistance."
              },
              {
                "title": "Collar",
                "text": "Size from the angle of the jaw to the top of the shoulder."
              },
              {
                "title": "Move as a unit",
                "text": "Scoop stretcher or minimal log roll."
              },
              {
                "title": "Transport",
                "text": "Vacuum mattress or stretcher with head blocks; take the long board out as soon as practical."
              }
            ]
          },
          {
            "type": "table",
            "title": "Cord injuries",
            "icon": "activity",
            "stack": true,
            "columns": [
              "Finding",
              "Means"
            ],
            "rows": [
              [
                "Belly breathing, weak chest movement",
                "Injury around C3–C5: breathing may fail; above C3: apnea"
              ],
              [
                "Low BP, slow pulse, warm dry skin",
                "Neurogenic shock: fluids, vasopressors, atropine (ALS); avoid systolic below 90 mmHg"
              ],
              [
                "Arms weaker than legs",
                "Central cord syndrome"
              ],
              [
                "Same-side weakness, opposite-side pain loss",
                "Brown-Séquard syndrome"
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
                    "label": "Trauma assessment",
                    "sub": "Spinal assessment",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "ITLS course",
                    "sub": "Spine management",
                    "href": "../pages/itls.html",
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
          "q": "Low-speed rear-end crash: GCS 15, no neck pain or tenderness, no neuro signs, no distracting injury, sober. SMR?",
          "options": [
            "No: all criteria negative",
            "Collar and backboard for every crash",
            "Collar only",
            "Backboard regardless"
          ],
          "correct": 0,
          "explanation": "Document your assessment."
        },
        {
          "q": "Ejected, GCS 6, rebar through the chest, BP 76/50, SpO₂ 88%. Priority?",
          "options": [
            "Penetrating chest trauma in shock: stabilise the rebar, oxygen, airway support, emergency transport; SMR only without delaying care",
            "Full backboard immobilisation first",
            "Remove the rebar, then immobilise",
            "Collar only and wait"
          ],
          "correct": 0,
          "explanation": "Don't let SMR delay life-saving care."
        },
        {
          "q": "Alert after a crash: neck pain, tingling hands, BP 86/52, pulse 56, warm dry skin. Cause of the low BP?",
          "options": [
            "Neurogenic shock from a cervical cord injury",
            "Hemorrhagic shock",
            "Cardiogenic shock",
            "Dehydration"
          ],
          "correct": 0,
          "explanation": "Still look for bleeding."
        },
        {
          "q": "NEXUS clears a patient when:",
          "options": [
            "No midline tenderness, not intoxicated, alert, no neuro deficit, no distracting injury",
            "The crash was slow",
            "They can walk",
            "They refuse a collar"
          ],
          "correct": 0,
          "explanation": "All five must be negative."
        },
        {
          "q": "Long backboards today are mainly for:",
          "options": [
            "Extrication",
            "Transport of all trauma patients",
            "Comfort",
            "CPR only"
          ],
          "correct": 0,
          "explanation": "Pressure injuries and breathing restriction."
        },
        {
          "q": "Collar sizing:",
          "options": [
            "Angle of the jaw to the top of the shoulder",
            "Chin to sternum",
            "Ear to shoulder tip",
            "Any size fits"
          ],
          "correct": 0,
          "explanation": "Too big flexes, too small extends."
        },
        {
          "q": "Stab wound to the neck, no neuro deficit. SMR?",
          "options": [
            "No: it delays care and doesn't help",
            "Full immobilisation",
            "Collar only",
            "Backboard only"
          ],
          "correct": 0,
          "explanation": "Penetrating trauma without deficit."
        },
        {
          "q": "A diver can't move arms or legs and breathes with the belly only. Level?",
          "options": [
            "High cervical (around C3–C5)",
            "Lumbar",
            "Thoracic",
            "Sacral"
          ],
          "correct": 0,
          "explanation": "Be ready to assist ventilation."
        },
        {
          "q": "Arms weaker than legs after a neck hyperextension injury:",
          "options": [
            "Central cord syndrome",
            "Brown-Séquard",
            "Anterior cord",
            "Normal"
          ],
          "correct": 0,
          "explanation": "Common in older adults after falls."
        },
        {
          "q": "Minimum systolic BP to avoid in spinal cord injury:",
          "options": [
            "Below 90 mmHg",
            "Below 60 mmHg",
            "Below 140 mmHg",
            "None"
          ],
          "correct": 0,
          "explanation": "Hypotension worsens cord injury."
        }
      ],
      "flashcards": [
        {
          "question": "NEXUS criteria",
          "answer": "Cleared only if all negative: midline tenderness, intoxication, altered alertness, focal neuro deficit, distracting injury.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "Spinal vs neurogenic shock",
          "answer": "Spinal shock: temporary loss of all cord function below the injury. Neurogenic shock: hypotension, bradycardia, warm dry skin from lost sympathetic tone.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "Neurogenic vs hypovolemic shock",
          "answer": "Neurogenic: bradycardia, warm dry skin. Hypovolemic: tachycardia, cool pale clammy skin.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "Incomplete cord syndromes",
          "answer": "Central: arms weaker than legs. Anterior: motor and pain loss, position sense kept. Brown-Séquard: same-side motor loss, opposite-side pain loss.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "Problems with long backboards",
          "answer": "Pain, pressure injuries, restricted breathing, anxiety. Use them for extrication, not transport.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "SMR in penetrating trauma",
          "answer": "Not recommended without a neuro deficit: it delays care and increases mortality.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "Moving a patient with SMR",
          "answer": "In-line stabilisation; scoop stretcher or minimal log roll as a unit; vacuum mattress or stretcher with head blocks.",
          "category": "Spine & Motion Restriction"
        },
        {
          "question": "Collar sizing",
          "answer": "Angle of the jaw to the top of the shoulder (trapezius); head neutral.",
          "category": "Spine & Motion Restriction"
        }
      ],
      "critical": [
        {
          "id": "crit_6_7_1",
          "scenario": "A belted driver hit a guardrail at about 70 km/h. Alert, no neck or back pain, no midline tenderness, normal neuro exam, sober, a minor forehead cut. He asks if he really needs a board.",
          "question": "How do you apply current guidance?",
          "options": [
            {
              "t": "He's NEXUS-negative: no SMR needed; document the assessment and still transport for evaluation",
              "f": "Correct."
            },
            {
              "t": "Everyone at highway speed gets a board",
              "f": "Mechanism alone isn't an indication."
            },
            {
              "t": "No transport needed",
              "f": "Airbag and frontal impact still warrant assessment."
            },
            {
              "t": "Collar and board to be safe",
              "f": "Unneeded SMR has harms."
            }
          ],
          "correct": 0,
          "explanation": "A minor forehead cut isn't a distracting injury.",
          "kpi": "Applies selective spinal motion restriction criteria"
        },
        {
          "id": "crit_6_7_2",
          "scenario": "A man dived into shallow water: can't move arms or legs, no sensation below the shoulders, belly breathing. BP 84/58, pulse 52, SpO₂ 92%, warm dry skin.",
          "question": "Level and priorities?",
          "options": [
            {
              "t": "High cervical cord injury with neurogenic shock: in-line stabilisation and collar, scoop or vacuum mattress, support breathing (BVM if failing), fluids and ALS for vasopressors/atropine, keep warm",
              "f": "Correct."
            },
            {
              "t": "Lumbar injury from anxiety",
              "f": "Arm involvement and belly breathing mean high cervical."
            },
            {
              "t": "Sit him up to breathe",
              "f": "Keep the spine aligned."
            },
            {
              "t": "Fluids only, no breathing support",
              "f": "He's tiring."
            }
          ],
          "correct": 0,
          "explanation": "The diaphragm (C3–C5) is all that's working: watch him closely.",
          "kpi": "Recognizes high cervical cord injury with respiratory and neurogenic shock risk"
        },
        {
          "id": "crit_6_7_3",
          "scenario": "Frontal crash: alert, neck pain with midline tenderness at C5–C6, no neuro signs, and an obviously broken ankle.",
          "question": "SMR approach?",
          "options": [
            {
              "t": "SMR (midline tenderness and a distracting injury): sized collar, scoop stretcher and vacuum mattress or stretcher with head blocks; splint the ankle",
              "f": "Correct."
            },
            {
              "t": "Wait for the ankle pain to settle, then recheck the neck",
              "f": "Midline tenderness alone means SMR."
            },
            {
              "t": "No SMR: no neuro signs",
              "f": "Midline tenderness is a criterion."
            },
            {
              "t": "Long backboard for transport",
              "f": "Use a scoop or vacuum mattress."
            }
          ],
          "correct": 0,
          "explanation": "Document the findings and decision.",
          "kpi": "Applies SMR for midline tenderness and distracting injury"
        }
      ]
    },
    {
      "id": "c6s8",
      "shortTitle": "6.8 Chest Trauma",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Chest Trauma",
        "lead": "Chest injuries kill quickly, but several are fixable in minutes: seal an open wound, decompress a tension pneumothorax, ventilate a failing flail chest. Look, listen and feel both sides every time, and reassess often because things change fast.",
        "sections": [
          {
            "type": "table",
            "title": "The immediate killers",
            "icon": "heart-pulse",
            "stack": true,
            "columns": [
              "Injury",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Tension pneumothorax",
                "Absent breath sounds one side, hyperresonant, distended neck veins, low BP, hypoxia",
                "Needle decompression (ALS)"
              ],
              [
                "Open pneumothorax",
                "Wound sucking or bubbling",
                "Vented chest seal (or occlusive dressing taped on three sides)"
              ],
              [
                "Massive hemothorax",
                "Absent breath sounds, dull, flat neck veins, shock",
                "Rapid transport; 1500 mL or more of blood"
              ],
              [
                "Cardiac tamponade",
                "Muffled heart sounds, distended neck veins, low BP, equal breath sounds",
                "Rapid transport for surgery"
              ],
              [
                "Flail chest",
                "Paradoxical segment, hypoxia (contusion)",
                "Oxygen, analgesia, assist ventilation if failing"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Needle decompression (ALS)",
            "icon": "syringe",
            "steps": [
              {
                "title": "Adults",
                "text": "4th or 5th intercostal space just in front of the mid-axillary line (or 2nd intercostal space, mid-clavicular line)."
              },
              {
                "title": "Children",
                "text": "2nd intercostal space, mid-clavicular line."
              },
              {
                "title": "Technique",
                "text": "Over the top of the rib; listen for air; leave the catheter; reassess."
              }
            ]
          },
          {
            "type": "list",
            "title": "Remember",
            "icon": "triangle-alert",
            "items": [
              "Never tape or bind a flail chest",
              "CPAP only if awake and protecting the airway; otherwise BVM",
              "Commotio cordis: a blow to the chest causes VF – CPR and defibrillation",
              "High-speed deceleration: think aortic injury even if stable"
            ]
          },
          {
            "type": "tools",
            "title": "See it",
            "icon": "monitor",
            "groups": [
              {
                "title": "Rhythms",
                "items": [
                  {
                    "ecg": "vfCoarse",
                    "label": "Ventricular fibrillation",
                    "sub": "Commotio cordis: shock now"
                  },
                  {
                    "ecg": "alternans",
                    "label": "Electrical alternans",
                    "sub": "Tamponade clue"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Sucking stab wound to the left chest, SpO₂ 88%. Management?",
          "options": [
            "Vented chest seal (or three-sided occlusive dressing), oxygen, watch for tension, transport",
            "Tape an airtight dressing on all four sides",
            "Finger in the wound",
            "Leave it open"
          ],
          "correct": 0,
          "explanation": "Lift or \"burp\" the seal if tension develops."
        },
        {
          "q": "Collapsed after a baseball hit the chest; the AED advises a shock. Cause?",
          "options": [
            "Commotio cordis: VF from a blow at a vulnerable moment",
            "Heart attack",
            "Pulmonary contusion",
            "Unrelated arrhythmia"
          ],
          "correct": 0,
          "explanation": "Immediate CPR and defibrillation."
        },
        {
          "q": "A chest segment moves in on inspiration; SpO₂ 86% on a non-rebreather. Primary problem and fix?",
          "options": [
            "Flail chest with pulmonary contusion: oxygen, analgesia, assisted ventilation if failing",
            "Simple pneumothorax: decompress",
            "Rib fracture: bind the chest",
            "Ignore the movement"
          ],
          "correct": 0,
          "explanation": "The bruised lung causes the hypoxia."
        },
        {
          "q": "Stab wound to the left chest: distended neck veins, BP 82/54, equal breath sounds, midline trachea:",
          "options": [
            "Cardiac tamponade",
            "Tension pneumothorax",
            "Massive hemothorax",
            "Simple pneumothorax"
          ],
          "correct": 0,
          "explanation": "Equal breath sounds separate it from tension."
        },
        {
          "q": "Adult needle decompression site (ATLS 10):",
          "options": [
            "4th or 5th intercostal space just in front of the mid-axillary line",
            "Below the rib",
            "8th intercostal space",
            "Through the sternum"
          ],
          "correct": 0,
          "explanation": "Or 2nd intercostal space, mid-clavicular line."
        },
        {
          "q": "Massive hemothorax is at least:",
          "options": [
            "1500 mL of blood",
            "150 mL",
            "50 mL",
            "5000 mL"
          ],
          "correct": 0,
          "explanation": "Dull percussion, flat neck veins, shock."
        },
        {
          "q": "Hyperresonant chest with distended neck veins suggests:",
          "options": [
            "Tension pneumothorax",
            "Hemothorax",
            "Tamponade",
            "Flail chest"
          ],
          "correct": 0,
          "explanation": "Hemothorax is dull."
        },
        {
          "q": "Flail chest is:",
          "options": [
            "2 or more adjacent ribs broken in 2 or more places",
            "One broken rib",
            "A broken sternum only",
            "A bruised chest"
          ],
          "correct": 0,
          "explanation": "Paradoxical movement."
        },
        {
          "q": "Should you tape or bind a flail chest?",
          "options": [
            "No",
            "Yes, tightly",
            "Only in children",
            "Only on the right"
          ],
          "correct": 0,
          "explanation": "It restricts breathing."
        },
        {
          "q": "Children: needle decompression site:",
          "options": [
            "2nd intercostal space, mid-clavicular line",
            "8th intercostal space",
            "Abdomen",
            "No decompression in children"
          ],
          "correct": 0,
          "explanation": "ALS skill."
        }
      ],
      "flashcards": [
        {
          "question": "Immediately life-threatening chest injuries",
          "answer": "Airway obstruction, tension pneumothorax, open pneumothorax, massive hemothorax, cardiac tamponade, flail chest with pulmonary contusion.",
          "category": "Chest Trauma"
        },
        {
          "question": "Tension pneumothorax vs massive hemothorax",
          "answer": "Tension: hyperresonant, distended neck veins. Hemothorax: dull, flat neck veins with shock. Both: absent breath sounds.",
          "category": "Chest Trauma"
        },
        {
          "question": "Open pneumothorax dressing",
          "answer": "Vented chest seal; if unavailable, occlusive dressing taped on three sides. Watch for tension and lift the seal if it develops.",
          "category": "Chest Trauma"
        },
        {
          "question": "Tension pneumothorax treatment",
          "answer": "Clinical diagnosis. Needle decompression (ALS): adults 4th/5th intercostal space anterior to the mid-axillary line or 2nd space mid-clavicular; over the rib.",
          "category": "Chest Trauma"
        },
        {
          "question": "Beck's triad",
          "answer": "Hypotension, distended neck veins, muffled heart sounds: cardiac tamponade (often incomplete).",
          "category": "Chest Trauma"
        },
        {
          "question": "Tamponade vs tension at the scene",
          "answer": "Tamponade: equal breath sounds, midline trachea, muffled heart sounds. Tension: absent breath sounds one side, hyperresonance.",
          "category": "Chest Trauma"
        },
        {
          "question": "Flail chest",
          "answer": "2 or more adjacent ribs broken in 2 or more places; paradoxical movement; contusion causes the hypoxia. Never tape or bind.",
          "category": "Chest Trauma"
        },
        {
          "question": "Commotio cordis",
          "answer": "VF from a blow to the chest, often young athletes. Immediate CPR and defibrillation.",
          "category": "Chest Trauma"
        }
      ],
      "critical": [
        {
          "id": "crit_6_8_1",
          "scenario": "Stab wound to the left lateral chest: severe distress, BP 78/50, SpO₂ 82%, absent left breath sounds, hyperresonant left chest, distended neck veins, trachea shifted right.",
          "question": "Diagnosis and intervention?",
          "options": [
            {
              "t": "Left tension pneumothorax: immediate needle decompression (ALS) on the left, oxygen, emergency transport",
              "f": "Correct."
            },
            {
              "t": "Hemothorax: pressure dressing and transport",
              "f": "Hyperresonance and distended veins mean air."
            },
            {
              "t": "Wait for an X-ray",
              "f": "Clinical diagnosis: act now."
            },
            {
              "t": "Decompress the right side",
              "f": "The injured, silent side is left."
            }
          ],
          "correct": 0,
          "explanation": "A rush of air and improving BP confirm it.",
          "kpi": "Recognizes and treats tension pneumothorax"
        },
        {
          "id": "crit_6_8_2",
          "scenario": "Gunshot to the left parasternal chest: BP 86/58, HR 124, distended neck veins, midline trachea, equal breath sounds, very quiet heart sounds.",
          "question": "Most likely injury, and the key difference from tension?",
          "options": [
            {
              "t": "Cardiac tamponade: equal breath sounds and midline trachea rule out tension; rapid transport to cardiothoracic surgery",
              "f": "Correct."
            },
            {
              "t": "Tension pneumothorax: decompress",
              "f": "Breath sounds are equal."
            },
            {
              "t": "Massive hemothorax",
              "f": "Neck veins are distended, not flat."
            },
            {
              "t": "Anxiety",
              "f": "He's in shock."
            }
          ],
          "correct": 0,
          "explanation": "Wounds in the \"cardiac box\" carry the highest risk.",
          "kpi": "Differentiates tamponade from tension pneumothorax"
        },
        {
          "id": "crit_6_8_3",
          "scenario": "Driver hit a tree at about 80 km/h: 4-rib flail segment on the left with crackles beneath, SpO₂ 84% on a non-rebreather, RR 32 and shallow, awake. No tracheal shift; neck veins flat.",
          "question": "Cause of the hypoxia, and ventilation plan?",
          "options": [
            {
              "t": "Pulmonary contusion under the flail: positive-pressure support (BVM; CPAP only while he stays awake and protects his airway), analgesia, no binding, trauma centre",
              "f": "Correct."
            },
            {
              "t": "Tension pneumothorax: decompress",
              "f": "No signs of tension."
            },
            {
              "t": "Tape the segment",
              "f": "Never bind the chest."
            },
            {
              "t": "Nothing: the segment will settle",
              "f": "He's hypoxic now."
            }
          ],
          "correct": 0,
          "explanation": "The contusion worsens over hours: reassess often.",
          "kpi": "Manages flail chest and pulmonary contusion with appropriate ventilation"
        }
      ]
    },
    {
      "id": "c6s9",
      "shortTitle": "6.9 Abdominal & Pelvic Trauma",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Abdominal & Pelvic Trauma",
        "lead": "The abdomen and pelvis hide large amounts of blood with few outside signs. Let the mechanism, the seat-belt sign and the vital signs guide you. Bind a broken pelvis, don't rock it, and get the patient to a surgeon.",
        "sections": [
          {
            "type": "table",
            "title": "Solid or hollow?",
            "icon": "target",
            "columns": [
              "",
              "Solid organs",
              "Hollow organs"
            ],
            "rows": [
              [
                "Examples",
                "Liver, spleen, kidneys, pancreas",
                "Bowel, stomach, bladder"
              ],
              [
                "Problem",
                "Bleeding: early shock",
                "Leak: peritonitis over hours"
              ],
              [
                "Clues",
                "Tachycardia, distension, Kehr's sign",
                "Rigidity, fever later"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Pelvic fracture with shock",
            "icon": "bone",
            "steps": [
              {
                "title": "Suspect it",
                "text": "High-energy mechanism, pelvic or groin pain, leg length difference, shock."
              },
              {
                "title": "Don't rock it",
                "text": "No repeated springing of the pelvis."
              },
              {
                "title": "Bind it",
                "text": "Pelvic binder centred on the greater trochanters (not the iliac crests)."
              },
              {
                "title": "Move carefully",
                "text": "Scoop stretcher; minimise log rolls."
              },
              {
                "title": "Permissive fluids, trauma centre",
                "text": "Blood at the urethral opening: urethral injury – report it."
              }
            ]
          },
          {
            "type": "groups",
            "title": "Watch for",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Seat-belt sign",
                "items": [
                  "Bowel, mesenteric and lumbar spine injury"
                ]
              },
              {
                "title": "Thoracoabdominal wound",
                "items": [
                  "Below the nipple line (front) or scapula tip (back): chest and abdomen"
                ]
              },
              {
                "title": "Impaled object / evisceration",
                "items": [
                  "Stabilise; don't remove",
                  "Moist dressing plus an occlusive layer; don't replace organs"
                ]
              },
              {
                "title": "Pregnancy over 20 weeks",
                "items": [
                  "Any trauma: hospital and fetal monitoring",
                  "Left uterine displacement"
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
                    "sub": "Abdomen and pelvis",
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
          "q": "Seat-belt sign, distended abdomen, BP 96/60, HR 124, confused. Most likely?",
          "options": [
            "Solid organ bleeding (liver or spleen)",
            "Abdominal wall bruise only",
            "Early peritonitis only",
            "Nothing serious"
          ],
          "correct": 0,
          "explanation": "Rigidity isn't needed for major bleeding."
        },
        {
          "q": "Stab wound to the left lower chest at the anterior axillary line, absent breath sounds, hypotension. Suspect:",
          "options": [
            "Both chest and abdominal injuries (thoracoabdominal)",
            "Chest only",
            "Diaphragm only",
            "Nothing abdominal"
          ],
          "correct": 0,
          "explanation": "Below the nipple line can reach the abdomen."
        },
        {
          "q": "32 weeks pregnant, minor rear-end crash, no symptoms, normal vital signs. Management?",
          "options": [
            "Transport for evaluation and fetal monitoring: abruption can follow minor trauma",
            "Discharge on scene",
            "Reassess in 15 minutes",
            "Transport only if symptoms develop"
          ],
          "correct": 0,
          "explanation": "Monitoring lasts several hours in hospital."
        },
        {
          "q": "Crushed by a forklift: deformed pelvis, blood at the urethral opening, BP 78/50. Priority?",
          "options": [
            "Pelvic binder at the greater trochanters, oxygen, permissive fluids, rapid transport",
            "Insert a urinary catheter",
            "Log-roll to inspect the back",
            "Traction splint"
          ],
          "correct": 0,
          "explanation": "Blood at the urethra suggests urethral injury."
        },
        {
          "q": "Where does a pelvic binder go?",
          "options": [
            "Centred on the greater trochanters",
            "On the iliac crests",
            "Around the waist",
            "Around the thighs"
          ],
          "correct": 0,
          "explanation": "The widest part of the pelvis."
        },
        {
          "q": "Hollow organ injury usually causes:",
          "options": [
            "Peritonitis over hours",
            "Immediate massive bleeding",
            "No symptoms ever",
            "Bradycardia"
          ],
          "correct": 0,
          "explanation": "Solid organs bleed early."
        },
        {
          "q": "Why avoid repeated pelvic examination?",
          "options": [
            "It can disrupt clots and worsen bleeding",
            "It's painful only",
            "It's never useful",
            "It wastes time only"
          ],
          "correct": 0,
          "explanation": "One gentle check at most."
        },
        {
          "q": "Kehr's sign suggests injury to the:",
          "options": [
            "Spleen",
            "Liver",
            "Kidney",
            "Bladder"
          ],
          "correct": 0,
          "explanation": "Left shoulder pain."
        },
        {
          "q": "Bowel protruding through a wound:",
          "options": [
            "Moist sterile dressing plus an occlusive layer",
            "Push it back",
            "Dry dressing",
            "Leave it exposed"
          ],
          "correct": 0,
          "explanation": "Keep it moist and warm."
        },
        {
          "q": "Best way to move a suspected pelvic fracture:",
          "options": [
            "Scoop stretcher with minimal movement",
            "Repeated log rolls",
            "Walk to the stretcher",
            "Drag by the legs"
          ],
          "correct": 0,
          "explanation": "Bind before moving."
        }
      ],
      "flashcards": [
        {
          "question": "Solid vs hollow organ injury",
          "answer": "Solid (liver, spleen, kidney, pancreas): bleeding and early shock. Hollow (bowel, stomach, bladder): leak and peritonitis over hours.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Kehr's sign",
          "answer": "Left shoulder pain from blood under the diaphragm: think spleen.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Evisceration",
          "answer": "Don't replace organs; moist sterile dressing plus an occlusive layer; transport.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Why pelvic fractures kill",
          "answer": "Large vessels and veins bleed into the retroperitoneum, which can hold several litres before tamponade.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Pelvic binder position",
          "answer": "Centred on the greater trochanters, not the iliac crests.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Supine hypotension in pregnancy",
          "answer": "After about 20 weeks the uterus compresses the vena cava when flat: manual left uterine displacement or tilt.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Commonest cause of fetal death after trauma",
          "answer": "Placental abruption: can follow minor trauma; bleeding may be concealed.",
          "category": "Abdominal & Pelvic Trauma"
        },
        {
          "question": "Log rolls and pelvic fractures",
          "answer": "Each roll can disrupt clots: bind first, use a scoop, minimise rolls.",
          "category": "Abdominal & Pelvic Trauma"
        }
      ],
      "critical": [
        {
          "id": "crit_6_9_1",
          "scenario": "A worker fell onto rebar now impaled in his right lower abdomen; moderate bleeding around it. HR 124, BP 106/68. The foreman wants to pull it out.",
          "question": "Management?",
          "options": [
            {
              "t": "Stabilise the rebar with bulky dressings, don't remove it, oxygen to target, IV access en route, permissive fluids, trauma centre with pre-alert",
              "f": "Correct."
            },
            {
              "t": "Pull it out and apply pressure",
              "f": "It may be plugging the iliac vessels."
            },
            {
              "t": "Pack tightly around it to push it in",
              "f": "Don't push it deeper."
            },
            {
              "t": "Transport without securing it",
              "f": "Movement causes more damage."
            }
          ],
          "correct": 0,
          "explanation": "Early shock signs: watch closely en route.",
          "kpi": "Stabilises an abdominal impaled object"
        },
        {
          "id": "crit_6_9_2",
          "scenario": "Unrestrained driver, head-on at about 80 km/h: severe lower abdominal and pelvic pain, seat-belt sign, left flank bruising, left leg shortened. HR 118. Still in the car.",
          "question": "Suspected injuries and order of interventions?",
          "options": [
            {
              "t": "Pelvic fracture, hip injury and abdominal bleeding: pelvic binder before extrication, splint the leg as found (no traction with a pelvic injury), scoop out with minimal movement, trauma centre",
              "f": "Correct."
            },
            {
              "t": "Femur fracture only: traction splint",
              "f": "Traction is contraindicated with pelvic injury."
            },
            {
              "t": "Spring the pelvis repeatedly to confirm",
              "f": "Never."
            },
            {
              "t": "Extricate first, bind later",
              "f": "Bind before moving."
            }
          ],
          "correct": 0,
          "explanation": "Flank bruising suggests retroperitoneal bleeding.",
          "kpi": "Sequences pelvic binding and extrication in high-energy trauma"
        },
        {
          "id": "crit_6_9_3",
          "scenario": "28 weeks pregnant, punched in the abdomen 30 minutes ago: firm, tender uterus, less fetal movement, fetal heart rate 174. No vaginal bleeding. HR 104.",
          "question": "Likely complication and priority?",
          "options": [
            {
              "t": "Placental abruption (bleeding can be concealed): manual left uterine displacement, oxygen, IV access, emergency transport to obstetric care, document the assault",
              "f": "Correct."
            },
            {
              "t": "UTI: routine transport",
              "f": "A firm tender uterus after trauma is abruption until proven otherwise."
            },
            {
              "t": "Normal: no bleeding",
              "f": "Abruption is often concealed."
            },
            {
              "t": "Lie her flat on her back",
              "f": "That compresses the vena cava."
            }
          ],
          "correct": 0,
          "explanation": "Fetal tachycardia is an early distress sign. Consider safeguarding.",
          "kpi": "Recognizes placental abruption after abdominal trauma in pregnancy"
        }
      ]
    },
    {
      "id": "c6s10",
      "shortTitle": "6.10 Musculoskeletal Injuries & Splinting",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Musculoskeletal Injuries & Splinting",
        "lead": "Splints ease pain, limit bleeding and protect nerves and vessels. Check circulation, movement and sensation before and after, immobilise above and below, and know which leg needs traction and which must never have it. Watch for compartment syndrome.",
        "sections": [
          {
            "type": "steps",
            "title": "Splinting principles",
            "icon": "wrench",
            "steps": [
              {
                "title": "CMS before",
                "text": "Circulation, motor, sensation distal to the injury."
              },
              {
                "title": "Position",
                "text": "Splint as found; one gentle realignment per protocol only if pulseless or impossible to transport."
              },
              {
                "title": "Above and below",
                "text": "Joints above and below a fracture; bones above and below a joint."
              },
              {
                "title": "Pad and secure",
                "text": "Open fracture: moist sterile dressing first; never push bone back."
              },
              {
                "title": "CMS after",
                "text": "And after every move; cold pack wrapped in cloth."
              }
            ]
          },
          {
            "type": "table",
            "title": "Leg deformity: traction or not?",
            "icon": "bone",
            "stack": true,
            "columns": [
              "Injury",
              "Looks",
              "Splint"
            ],
            "rows": [
              [
                "Mid-shaft femur fracture",
                "Thigh deformity and swelling, often shortened",
                "Traction splint (if isolated)"
              ],
              [
                "Hip (neck of femur) fracture",
                "Shortened, externally rotated; older adult after a fall",
                "Padded immobilisation; no traction"
              ],
              [
                "Posterior hip dislocation",
                "Shortened, internally rotated, flexed",
                "Splint as found; no traction"
              ],
              [
                "Pelvic fracture",
                "Pelvic or groin pain, shock",
                "Pelvic binder; no traction"
              ]
            ],
            "notes": [
              "No traction with knee, lower leg or ankle injury on the same side, or partial amputation.",
              "Femur fracture can lose 1–1.5 L of blood."
            ]
          },
          {
            "type": "groups",
            "title": "Compartment syndrome",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Early",
                "items": [
                  "Pain out of proportion",
                  "Pain on passive stretch"
                ]
              },
              {
                "title": "Late",
                "items": [
                  "Pallor, paralysis, pulselessness"
                ]
              },
              {
                "title": "Do",
                "items": [
                  "Loosen splints and dressings",
                  "Limb at heart level",
                  "Urgent surgery: pre-alert"
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
                    "label": "Trauma assessment",
                    "sub": "Extremity exam and CMS",
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
          "q": "Fall from a ladder: obvious mid-thigh deformity and swelling, leg shortened, CMS intact, no other injuries. Splint?",
          "options": [
            "Traction splint for an isolated mid-shaft femur fracture; CMS before and after",
            "Pelvic binder",
            "No splint",
            "Walk him to the ambulance"
          ],
          "correct": 0,
          "explanation": "Check for hip, pelvic and knee injuries first."
        },
        {
          "q": "Open lower-leg fracture with bone showing:",
          "options": [
            "Moist sterile dressing over the bone, splint as found, cold pack, transport",
            "Push the bone back in",
            "Straighten and splint",
            "Tourniquet first always"
          ],
          "correct": 0,
          "explanation": "Never push bone back."
        },
        {
          "q": "Deformed thigh, groin pain, tender pubic bone, flank bruising, HR 118. The crew wants a traction splint. Best action?",
          "options": [
            "No traction: suspected pelvic injury – pelvic binder, rigid splint, trauma centre",
            "Traction splint: pelvis felt stable",
            "Both binder and traction",
            "No splint"
          ],
          "correct": 0,
          "explanation": "A \"stable\" pelvis on exam doesn't rule out fracture."
        },
        {
          "q": "Two hours after splinting a tibia: pain 10/10, pain on passive toe movement, pale tingling toes, weak pulse. Diagnosis and action?",
          "options": [
            "Compartment syndrome: loosen the splint, limb at heart level, emergency transport for fasciotomy",
            "Normal pain: more analgesia",
            "DVT: warm pack",
            "Tighten the splint"
          ],
          "correct": 0,
          "explanation": "Don't wait for pulselessness."
        },
        {
          "q": "Older woman, fell from standing: leg shortened and externally rotated, groin pain. Splint?",
          "options": [
            "Padded immobilisation (pillows, vacuum mattress); no traction",
            "Traction splint",
            "Short leg splint only",
            "Let her walk"
          ],
          "correct": 0,
          "explanation": "Hip fracture: traction is contraindicated."
        },
        {
          "q": "Shortened, internally rotated, flexed leg after a dashboard impact:",
          "options": [
            "Posterior hip dislocation: splint as found",
            "Femur fracture: traction",
            "Ankle sprain",
            "Normal"
          ],
          "correct": 0,
          "explanation": "No traction."
        },
        {
          "q": "Squared-off shoulder after a fall on an outstretched hand:",
          "options": [
            "Anterior shoulder dislocation: sling and swathe, check deltoid sensation, don't reduce",
            "Clavicle fracture only",
            "Traction splint the arm",
            "Reduce it on scene"
          ],
          "correct": 0,
          "explanation": "Axillary nerve: sensation over the deltoid."
        },
        {
          "q": "Before and after splinting, always check:",
          "options": [
            "Circulation, motor and sensation",
            "Blood glucose",
            "Pupils",
            "Temperature"
          ],
          "correct": 0,
          "explanation": "Document both."
        },
        {
          "q": "Earliest compartment syndrome sign:",
          "options": [
            "Pain on passive stretch",
            "No pulse",
            "Paralysis",
            "Pale skin"
          ],
          "correct": 0,
          "explanation": "Pulselessness is late."
        },
        {
          "q": "Which is a contraindication to a traction splint?",
          "options": [
            "Ankle injury on the same leg",
            "Isolated mid-shaft femur fracture",
            "Thigh swelling",
            "Severe pain"
          ],
          "correct": 0,
          "explanation": "The ankle hitch goes there."
        }
      ],
      "flashcards": [
        {
          "question": "Splinting principles",
          "answer": "CMS before and after; splint as found; immobilise above and below; pad; cover open wounds; cold pack; reassess after every move.",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Signs of a fracture",
          "answer": "Deformity, crepitus, swelling, bruising, point tenderness, loss of function, CMS changes.",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Closed vs open fracture",
          "answer": "Closed: skin intact. Open: bone through the skin or a wound reaching the fracture; moist sterile dressing, never push bone back.",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Traction splint contraindications",
          "answer": "Hip or pelvic fracture, hip dislocation, knee or lower leg/ankle injury on the same side, partial amputation.",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Compartment syndrome signs",
          "answer": "Pain out of proportion and on passive stretch (early); paresthesia, pallor, paralysis, poikilothermia, pulselessness (late).",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Hip dislocation vs hip fracture",
          "answer": "Posterior dislocation: shortened, internally rotated, flexed. Hip fracture: shortened, externally rotated. Neither gets traction.",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Anterior shoulder dislocation",
          "answer": "Squared-off shoulder, arm held out and rotated outward. Sling and swathe, check deltoid sensation, don't reduce.",
          "category": "Musculoskeletal Injuries & Splinting"
        },
        {
          "question": "Fasciotomy",
          "answer": "Surgical release of a tight compartment: the treatment for compartment syndrome. Don't wait for pulselessness.",
          "category": "Musculoskeletal Injuries & Splinting"
        }
      ],
      "critical": [
        {
          "id": "crit_6_10_1",
          "scenario": "A tackled 16-year-old has an obviously deformed, swollen mid-thigh, leg shortened, CMS intact, no other injuries. Your partner gets the traction splint.",
          "question": "What must you verify and do?",
          "options": [
            {
              "t": "Confirm an isolated mid-shaft femur fracture (no hip, pelvic, knee or lower leg injury), CMS, manual traction, apply the splint, CMS again, document",
              "f": "Correct."
            },
            {
              "t": "Apply it fast without checking: any leg deformity gets traction",
              "f": "Missing a hip or pelvic injury causes harm."
            },
            {
              "t": "Pull until the leg is fully the same length",
              "f": "Comfortable alignment, not full reduction."
            },
            {
              "t": "No splint: transport as is",
              "f": "Traction relieves pain and bleeding."
            }
          ],
          "correct": 0,
          "explanation": "A femur fracture can lose 1–1.5 L.",
          "kpi": "Applies traction splint with correct indications and CMS checks"
        },
        {
          "id": "crit_6_10_2",
          "scenario": "An 18-year-old fell on an outstretched hand: squared-off shoulder, arm held away from the body, humeral head felt at the front. Normal deltoid sensation and radial pulse.",
          "question": "Injury and management?",
          "options": [
            {
              "t": "Anterior shoulder dislocation: sling and swathe as found, CMS including deltoid sensation, cold pack, transport; don't reduce",
              "f": "Correct."
            },
            {
              "t": "Traction splint the arm",
              "f": "Not for the arm."
            },
            {
              "t": "Reduce it on scene",
              "f": "Not within EMS scope; risk of fracture or nerve injury."
            },
            {
              "t": "No transport if he self-reduces",
              "f": "Still needs X-ray."
            }
          ],
          "correct": 0,
          "explanation": "Recurrent dislocators may self-reduce: document it.",
          "kpi": "Recognizes and immobilises an anterior shoulder dislocation"
        },
        {
          "id": "crit_6_10_3",
          "scenario": "Pinned 20 minutes by a forklift: open mid-tibia fracture splinted 30 minutes ago. Pain now unbearable, pale tingling toes, no foot pulse, screams on toe movement.",
          "question": "Complication and immediate action?",
          "options": [
            {
              "t": "Compartment syndrome: remove or loosen the splint and dressings, note the time pulses were lost, limb at heart level, emergency transport with pre-alert",
              "f": "Correct."
            },
            {
              "t": "Normal fracture pain: elevate the leg",
              "f": "Elevation lowers perfusion pressure."
            },
            {
              "t": "Tighten the splint",
              "f": "That worsens it."
            },
            {
              "t": "More analgesia only",
              "f": "It needs surgery."
            }
          ],
          "correct": 0,
          "explanation": "Crush mechanism: also watch for crush syndrome and high potassium.",
          "kpi": "Recognizes compartment syndrome and acts"
        }
      ]
    },
    {
      "id": "c6s11",
      "shortTitle": "6.11 Multisystem Trauma & Pregnancy",
      "guide": {
        "group": "c6",
        "groupLabel": "Chapter 6 · Trauma Emergencies",
        "title": "Multisystem Trauma, Older Adults & Pregnancy",
        "lead": "The sickest trauma patients need a team working in parallel, a short scene time and a surgeon. Older adults hide shock and bleed more. In pregnancy, saving the mother saves the baby: keep the uterus off the vena cava and move fast.",
        "sections": [
          {
            "type": "steps",
            "title": "Time-critical multisystem trauma",
            "icon": "timer",
            "steps": [
              {
                "title": "Parallel, not sequential",
                "text": "Team members take bleeding, airway and breathing at the same time."
              },
              {
                "title": "Only life-saving interventions on scene",
                "text": "Tourniquet, airway, chest seal or decompression, pelvic binder."
              },
              {
                "title": "Short scene time",
                "text": "Everything else en route."
              },
              {
                "title": "Pre-alert",
                "text": "Trauma team ready on arrival."
              }
            ]
          },
          {
            "type": "table",
            "title": "Traumatic cardiac arrest: fix the cause",
            "icon": "heart-pulse",
            "columns": [
              "Cause",
              "Do"
            ],
            "rows": [
              [
                "Hypoxia",
                "Airway and ventilation"
              ],
              [
                "Hypovolemia",
                "Stop bleeding, pelvic binder, fluids or blood"
              ],
              [
                "Tension pneumothorax",
                "Bilateral decompression (ALS)"
              ],
              [
                "Tamponade",
                "Rapid transport for surgery"
              ]
            ],
            "notes": [
              "Treat these at the same time as CPR."
            ]
          },
          {
            "type": "groups",
            "title": "Older adults",
            "icon": "user",
            "groups": [
              {
                "title": "Hidden shock",
                "items": [
                  "Beta-blockers hide tachycardia",
                  "Systolic below 110 mmHg may be shock at 65 or older"
                ]
              },
              {
                "title": "Bleeding risk",
                "items": [
                  "Anticoagulants: any head injury needs CT",
                  "Falls from standing can cause serious injury"
                ]
              }
            ]
          },
          {
            "type": "groups",
            "title": "Pregnancy over 20 weeks",
            "icon": "baby",
            "groups": [
              {
                "title": "Positioning",
                "items": [
                  "Manual left uterine displacement or tilt",
                  "Lying flat compresses the vena cava"
                ]
              },
              {
                "title": "Any trauma",
                "items": [
                  "Hospital assessment and fetal monitoring",
                  "Abruption: firm painful uterus; bleeding may be hidden"
                ]
              },
              {
                "title": "Cardiac arrest",
                "items": [
                  "CPR with continuous left uterine displacement",
                  "No ROSC by 4 minutes: aim for delivery within 5 minutes in a capable setting"
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
                    "sub": "Run a multisystem case",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "ITLS course",
                    "sub": "Special populations",
                    "href": "../pages/itls.html",
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
          "q": "32 weeks pregnant after a head-on crash: abdominal pain, less fetal movement, firm tender uterus, no bleeding. Diagnosis and priority?",
          "options": [
            "Placental abruption (concealed): left uterine displacement, oxygen, trauma centre with obstetrics, pre-alert",
            "Uterine rupture: no special care",
            "Normal Braxton-Hicks",
            "Amniotic fluid embolism"
          ],
          "correct": 0,
          "explanation": "No bleeding doesn't rule it out."
        },
        {
          "q": "On warfarin, fell and hit her head; GCS 15, small scalp cut. Can she stay home?",
          "options": [
            "No: transport for CT; anticoagulated head injury is high risk",
            "Yes, with family watching",
            "Only if she vomits",
            "See her GP tomorrow"
          ],
          "correct": 0,
          "explanation": "Delayed bleeding is common."
        },
        {
          "q": "Penetrating left chest wound, sucking, BP 90/68, RR 28. Non-trauma hospital 12 minutes; trauma centre 32 minutes. Plan?",
          "options": [
            "Chest seal, watch for tension, trauma centre: penetrating torso injury needs a surgeon",
            "Closest hospital",
            "Wait for a helicopter on scene",
            "Leave the wound open"
          ],
          "correct": 0,
          "explanation": "Penetrating torso injury is a high-risk (red) criterion."
        },
        {
          "q": "Which patient meets a high-risk (red) physiology criterion (Field Triage 2021)?",
          "options": [
            "Systolic below 90 mmHg after a crash",
            "GCS 15, normal vital signs",
            "Forearm gunshot with normal vital signs",
            "GCS 14 after a bike fall"
          ],
          "correct": 0,
          "explanation": "Systolic below 90 mmHg; also respiratory rate below 10 or above 29/min, SpO₂ below 90%, unable to follow commands."
        },
        {
          "q": "Reversible causes in traumatic cardiac arrest:",
          "options": [
            "Hypoxia, hypovolemia, tension pneumothorax, tamponade",
            "Hypoglycemia only",
            "Stroke",
            "Anaphylaxis"
          ],
          "correct": 0,
          "explanation": "Treat them during CPR."
        },
        {
          "q": "Why can't you rely on heart rate in older trauma patients?",
          "options": [
            "Beta-blockers and age blunt tachycardia",
            "They always have fast pulses",
            "Their pulse is never measurable",
            "It's equally reliable"
          ],
          "correct": 0,
          "explanation": "Systolic below 110 mmHg may be shock at 65 or older."
        },
        {
          "q": "Best position for a pregnant trauma patient over 20 weeks:",
          "options": [
            "Manual left uterine displacement or tilt",
            "Flat on the back",
            "Prone",
            "Trendelenburg"
          ],
          "correct": 0,
          "explanation": "Prevents vena cava compression."
        },
        {
          "q": "Cardiac arrest at 34 weeks with no ROSC by 4 minutes:",
          "options": [
            "Aim for delivery within 5 minutes in a capable setting",
            "Stop CPR",
            "Wait 30 minutes",
            "Turn her prone"
          ],
          "correct": 0,
          "explanation": "Delivery helps the mother's circulation too."
        },
        {
          "q": "Multisystem trauma on scene should be:",
          "options": [
            "Short: life-saving interventions only, the rest en route",
            "Long: splint everything first",
            "Full head-to-toe before moving",
            "Wait for ALS"
          ],
          "correct": 0,
          "explanation": "The cure is in the operating theatre."
        },
        {
          "q": "Leading cause of fetal death after maternal trauma:",
          "options": [
            "Placental abruption",
            "Fetal skull fracture",
            "Cord prolapse",
            "Hypoglycemia"
          ],
          "correct": 0,
          "explanation": "Often after seemingly minor trauma."
        }
      ],
      "flashcards": [
        {
          "question": "Sequential vs simultaneous assessment",
          "answer": "Sequential: one step at a time. Simultaneous: team members work in parallel – needed in unstable multisystem trauma.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Reversible causes of traumatic arrest",
          "answer": "Hypoxia, hypovolemia, tension pneumothorax, tamponade: treat them during CPR.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Supine hypotension in pregnancy",
          "answer": "After about 20 weeks the uterus compresses the vena cava when flat: manual left uterine displacement or tilt.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Leading cause of fetal death after trauma",
          "answer": "Placental abruption: firm painful uterus, bleeding may be concealed, fetal distress.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Resuscitative hysterotomy",
          "answer": "Cardiac arrest in late pregnancy with no ROSC by 4 minutes: aim for delivery within 5 minutes in a capable setting.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Anticoagulants in older trauma patients",
          "answer": "Higher bleeding risk; any head injury needs CT even if well.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Field triage 2021 structure",
          "answer": "High-risk (red): injury patterns and physiology. Moderate-risk (yellow): mechanism and patient factors. Plus EMS judgement.",
          "category": "Multisystem Trauma & Pregnancy"
        },
        {
          "question": "Shock in older adults",
          "answer": "Systolic below 110 mmHg may be shock at 65 or older; beta-blockers hide tachycardia.",
          "category": "Multisystem Trauma & Pregnancy"
        }
      ],
      "critical": [
        {
          "id": "crit_6_11_1",
          "scenario": "Head-on crash: GCS 6, right-sided flail chest, rigid distended abdomen, shortened right leg, tourniquet on a left forearm amputation. HR 136, BP 74/40, RR 6, SpO₂ 82%. Scene time already 12 minutes.",
          "question": "Priority sequence?",
          "options": [
            {
              "t": "Parallel care: ventilate with a BVM, check the tourniquet, pelvic binder, IV/IO and permissive fluids, keep warm, leave now and do the rest en route; pre-alert",
              "f": "Correct."
            },
            {
              "t": "Full head-to-toe and splint everything before moving",
              "f": "The scene time is already too long."
            },
            {
              "t": "Long backboard, then think",
              "f": "Life-saving interventions first."
            },
            {
              "t": "Wait for ALS on scene",
              "f": "Meet them en route."
            }
          ],
          "correct": 0,
          "explanation": "Definitive care is in theatre; your job is to keep him alive until then.",
          "kpi": "Prioritizes parallel life-saving interventions and short scene time"
        },
        {
          "id": "crit_6_11_2",
          "scenario": "A 78-year-old on warfarin fell at home: can't remember exactly what happened, left leg shortened and externally rotated, groin pain, CMS intact.",
          "question": "Suspected injuries and transport decision?",
          "options": [
            {
              "t": "Hip fracture plus a possible unwitnessed head strike on warfarin: padded immobilisation (no traction), gentle handling, hospital with CT capability, bring her medications",
              "f": "Correct."
            },
            {
              "t": "Simple hip fracture: closest clinic tomorrow",
              "f": "Anticoagulation and memory gap need CT."
            },
            {
              "t": "Traction splint",
              "f": "Not for hip fractures."
            },
            {
              "t": "Help her to bed",
              "f": "She can't weight-bear."
            }
          ],
          "correct": 0,
          "explanation": "Ask why she fell: syncope or arrhythmia may be the cause.",
          "kpi": "Recognizes geriatric trauma risks including anticoagulation"
        },
        {
          "id": "crit_6_11_3",
          "scenario": "A woman about 34 weeks pregnant is in cardiac arrest after choking (food now cleared). Bystander CPR for 3 minutes. You have an AED, BVM and monitor.",
          "question": "Priorities?",
          "options": [
            {
              "t": "High-quality CPR with continuous manual left uterine displacement, AED and standard drugs, airway and oxygen; no ROSC by 4 minutes – rapid transport for delivery within 5 minutes",
              "f": "Correct."
            },
            {
              "t": "Standard CPR with no pregnancy changes",
              "f": "The uterus blocks venous return."
            },
            {
              "t": "Don't defibrillate in pregnancy",
              "f": "Defibrillation is safe."
            },
            {
              "t": "Tilt her 90° onto her side for compressions",
              "f": "Manual displacement keeps compressions effective."
            }
          ],
          "correct": 0,
          "explanation": "Delivery helps the mother's circulation as well as the baby.",
          "kpi": "Adapts resuscitation for pregnancy"
        }
      ]
    }
  ]
};
