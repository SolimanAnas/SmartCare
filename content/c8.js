/* ========== Chapter 8 – Environmental & Disaster ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c8.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c8",
  "title": "Environmental & Disaster",
  "shortTitle": "8. Environmental & Disaster",
  "sections": [
    {
      "id": "c8s1",
      "shortTitle": "8.1 Heat-Related Illness",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Heat-Related Illness",
        "lead": "Mental status separates the mild from the deadly. A hot patient who is confused has heat stroke until proven otherwise: cool them hard and fast, on scene, before you transport. Antipyretics don't work in heat illness.",
        "sections": [
          {
            "type": "gate",
            "title": "Heat stroke?",
            "icon": "thermometer-sun",
            "question": "Hot environment or exertion, and any change in behaviour, confusion, seizure or coma?",
            "yes": "Heat stroke: cool first, transport second. Aim to get the core below 39 °C within 30 minutes of collapse.",
            "no": "Heat exhaustion or cramps: shade, lie down, remove excess clothing, oral fluids with salt, watch for change."
          },
          {
            "type": "table",
            "title": "Heat illness ladder",
            "icon": "trending-up",
            "stack": true,
            "columns": [
              "Condition",
              "Signs",
              "Do"
            ],
            "rows": [
              [
                "Heat cramps",
                "Painful spasms (calves, thighs, abdomen), alert",
                "Rest, stretch, oral fluids with electrolytes"
              ],
              [
                "Heat exhaustion",
                "Weak, dizzy, nauseated, sweating, fast pulse; normal mental status; core under 40 °C",
                "Shade, lie flat, cool, oral fluids; IV if vomiting"
              ],
              [
                "Heat stroke",
                "Core usually above 40 °C (104 °F) with confusion, seizures or coma; skin may be dry or still sweating",
                "Immediate aggressive cooling; airway, glucose, rapid transport after cooling"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Cooling heat stroke",
            "icon": "snowflake",
            "steps": [
              {
                "title": "Exertional (young, exercising)",
                "text": "Cold-water immersion up to the neck – the fastest method. Stir the water; protect the airway."
              },
              {
                "title": "No tub?",
                "text": "Rotate ice-water-soaked towels over the whole body, or tarp-assisted cooling. Ice packs to neck, armpits and groin are an add-on only."
              },
              {
                "title": "Classic (older, during heat waves)",
                "text": "Evaporative cooling: strip, mist with water, fan hard; ice packs; cold IV fluids per protocol."
              },
              {
                "title": "Stop at 39 °C",
                "text": "Remove from the water at about 39 °C (102 °F) to avoid overshoot; keep monitoring – temperature can rebound."
              },
              {
                "title": "Measure properly",
                "text": "Rectal temperature is the reliable field core measure; oral, ear and skin readings underestimate."
              }
            ]
          },
          {
            "type": "list",
            "title": "Don't",
            "icon": "ban",
            "items": [
              "Give acetaminophen or ibuprofen: the set point is normal, so they don't help",
              "Use alcohol rubs",
              "Delay cooling to transport an exertional heat stroke when you can cool on site"
            ]
          },
          {
            "type": "list",
            "title": "Watch for",
            "icon": "triangle-alert",
            "items": [
              "Risk: older adults, infants, heat waves without air conditioning",
              "Medicines: anticholinergics, antihistamines, diuretics, beta-blockers, antipsychotics, stimulants",
              "Confused runner with normal temperature who drank a lot: exercise-associated hyponatremia – no free water, check sodium in hospital",
              "Drug-induced hyperthermia: MDMA, cocaine, serotonin syndrome, neuroleptic malignant syndrome"
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
                    "ecg": "stach",
                    "label": "Sinus tachycardia",
                    "sub": "Expected in heat illness; a slowing rate with confusion is worrying.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Medical assessment",
                    "sub": "Mental status and history",
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
          "q": "Football player collapses in humid heat: confused, combative, sweating, core temperature 41.1 °C (106 °F). Diagnosis and action?",
          "options": [
            "Heat stroke: cold-water immersion on scene, then transport",
            "Heat exhaustion: shade and oral fluids",
            "Dehydration: water and rest",
            "Seizure disorder: transport for neurology"
          ],
          "correct": 0,
          "explanation": "Sweating doesn't rule out exertional heat stroke."
        },
        {
          "q": "Older woman in a hot flat during a heat wave: confused, hot dry skin, on a beta-blocker. Why is she at risk?",
          "options": [
            "Age and medicines impair heat loss and the heart's response",
            "She took tablets without food",
            "Dry skin means she's well hydrated",
            "Heat stroke is milder in older adults"
          ],
          "correct": 0,
          "explanation": "Classic heat stroke: evaporative cooling and rapid transport."
        },
        {
          "q": "During cooling, a runner's core temperature falls to 39 °C. Next?",
          "options": [
            "Stop active cooling, keep monitoring for rebound, transport",
            "Rewarm her",
            "Give acetaminophen",
            "Release her on scene"
          ],
          "correct": 0,
          "explanation": "Stopping at about 39 °C avoids overshoot."
        },
        {
          "q": "Which cooling statement is correct?",
          "options": [
            "Cold-water immersion is the gold standard for exertional heat stroke",
            "Alcohol rubs work best",
            "Ice packs on the chest are enough",
            "Give antipyretics first"
          ],
          "correct": 0,
          "explanation": "It cools fastest."
        },
        {
          "q": "What separates heat stroke from heat exhaustion?",
          "options": [
            "Altered mental status",
            "Sweating",
            "Heart rate",
            "Thirst"
          ],
          "correct": 0,
          "explanation": "Any CNS change in a hot patient means heat stroke."
        },
        {
          "q": "Heat stroke is usually a core temperature above:",
          "options": [
            "40 °C (104 °F)",
            "37.5 °C",
            "38 °C",
            "45 °C only"
          ],
          "correct": 0,
          "explanation": "With CNS dysfunction."
        },
        {
          "q": "The most reliable field measure of core temperature is:",
          "options": [
            "Rectal",
            "Oral",
            "Forehead",
            "Ear"
          ],
          "correct": 0,
          "explanation": "Others read falsely low."
        },
        {
          "q": "Why don't antipyretics help in heat stroke?",
          "options": [
            "The hypothalamic set point is normal; the body is overwhelmed by heat",
            "They work too slowly",
            "They cause sweating",
            "They raise blood pressure"
          ],
          "correct": 0,
          "explanation": "They only help fever."
        },
        {
          "q": "Marathon runner: confused, vomiting, temperature 38.3 °C, drank water at every station. Suspect:",
          "options": [
            "Exercise-associated hyponatremia",
            "Heat stroke",
            "Heat cramps",
            "Normal fatigue"
          ],
          "correct": 0,
          "explanation": "No free water; hospital for sodium measurement."
        },
        {
          "q": "Heat cramps are treated with:",
          "options": [
            "Rest, stretching and oral electrolyte fluids",
            "Ice baths",
            "IV dantrolene",
            "Antipyretics"
          ],
          "correct": 0,
          "explanation": "Usually alert and otherwise well."
        }
      ],
      "flashcards": [
        {
          "question": "Four ways the body loses heat",
          "answer": "Conduction, convection, radiation, evaporation. Evaporation of sweat dominates in heat and exercise and fails in high humidity.",
          "category": "Heat-Related Illness"
        },
        {
          "question": "Heat exhaustion vs heat stroke",
          "answer": "Mental status. Exhaustion: alert, sweating, core under 40 °C. Stroke: confusion, seizures or coma, core usually above 40 °C (104 °F).",
          "category": "Heat-Related Illness"
        },
        {
          "question": "Heat stroke priorities",
          "answer": "Cool first, transport second: below 39 °C within 30 minutes of collapse. Airway, glucose, monitor; stop cooling at about 39 °C.",
          "category": "Heat-Related Illness"
        },
        {
          "question": "Exertional vs classic heat stroke",
          "answer": "Exertional: young, active, rapid, often sweating – cold-water immersion. Classic: older adults and infants in heat waves, slower, often dry skin – evaporative cooling.",
          "category": "Heat-Related Illness"
        },
        {
          "question": "Heat cramps",
          "answer": "Painful spasms from salt and fluid loss with heavy sweating. Rest, stretch, oral electrolyte fluids.",
          "category": "Heat-Related Illness"
        },
        {
          "question": "Medicines that raise heat risk",
          "answer": "Anticholinergics and antihistamines (less sweating), beta-blockers, diuretics, antipsychotics, stimulants (cocaine, MDMA).",
          "category": "Heat-Related Illness"
        },
        {
          "question": "Malignant hyperthermia vs neuroleptic malignant syndrome",
          "answer": "MH: rapid, after volatile anaesthetics or succinylcholine – dantrolene. NMS: days to weeks after antipsychotics – rigidity, fever, confusion, unstable vital signs.",
          "category": "Heat-Related Illness"
        },
        {
          "question": "No antipyretics in heat stroke",
          "answer": "They lower a raised set point in fever. In heat stroke the set point is normal, so they do nothing and may harm the liver.",
          "category": "Heat-Related Illness"
        }
      ],
      "critical": [
        {
          "id": "crit_8_1_1",
          "scenario": "Hot, humid afternoon practice: a 17-year-old lineman collapsed in the third hour. Confused and combative, hot sweaty skin, HR 140. The trainer has a cold-water tub on the sideline.",
          "question": "Use the tub?",
          "options": [
            {
              "t": "Yes: exertional heat stroke – immerse to the neck now, stir, protect the airway, check rectal temperature, remove at about 39 °C, then transport",
              "f": "Correct."
            },
            {
              "t": "No: transport first and cool in hospital",
              "f": "Delay to cooling is what kills."
            },
            {
              "t": "Ice packs to the armpits only",
              "f": "Too slow on their own."
            },
            {
              "t": "Give acetaminophen",
              "f": "No effect in heat stroke."
            }
          ],
          "correct": 0,
          "explanation": "Cool first, transport second.",
          "kpi": "Initiates on-scene cold-water immersion for exertional heat stroke"
        },
        {
          "id": "crit_8_1_2",
          "scenario": "75-year-old in a flat without air conditioning for 3 days of heat: confused, hot dry skin. Takes a diuretic and diphenhydramine for sleep.",
          "question": "Type of heat stroke and management?",
          "options": [
            {
              "t": "Classic heat stroke: strip, mist and fan, ice packs, cold IV fluids per protocol, airway and glucose, rapid transport",
              "f": "Correct."
            },
            {
              "t": "Heat exhaustion: oral fluids at home",
              "f": "Confusion means heat stroke."
            },
            {
              "t": "Antipyretics and rest",
              "f": "Ineffective."
            },
            {
              "t": "Transport without cooling",
              "f": "Start cooling now."
            }
          ],
          "correct": 0,
          "explanation": "Age, the diuretic and the anticholinergic all impair heat loss.",
          "kpi": "Recognizes classic heat stroke and risk factors"
        },
        {
          "id": "crit_8_1_3",
          "scenario": "Warm 10 km race: a 34-year-old collapses near the finish, confused, nauseated and vomiting; skin clammy; rectal temperature 38.3 °C. Friends say he drank at every station 'to be safe'.",
          "question": "What do you suspect?",
          "options": [
            {
              "t": "Exercise-associated hyponatremia: no free water, check glucose, oxygen, IV access, rapid transport for sodium measurement",
              "f": "Correct."
            },
            {
              "t": "Heat stroke: ice bath",
              "f": "His temperature isn't high."
            },
            {
              "t": "Heat exhaustion: more water",
              "f": "Water worsens hyponatremia."
            },
            {
              "t": "Normal post-race fatigue",
              "f": "Confusion is never normal."
            }
          ],
          "correct": 0,
          "explanation": "Confused and hot = heat stroke; confused and not hot after over-drinking = think sodium.",
          "kpi": "Differentiates exercise-associated hyponatremia from heat stroke"
        }
      ]
    },
    {
      "id": "c8s2",
      "shortTitle": "8.2 Cold Exposure & Hypothermia",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Cold Exposure & Hypothermia",
        "lead": "Handle the cold patient like glass: rough movement can trigger VF. Stage by consciousness and shivering, insulate and warm the trunk, take up to a minute to find a pulse, and remember that a cold heart can recover after very long CPR.",
        "sections": [
          {
            "type": "table",
            "title": "Stage it (Swiss staging)",
            "icon": "thermometer",
            "columns": [
              "Stage",
              "Clinical",
              "Core"
            ],
            "rows": [
              [
                "Mild",
                "Alert, shivering",
                "32–35 °C"
              ],
              [
                "Moderate",
                "Drowsy, shivering stops",
                "28–32 °C"
              ],
              [
                "Severe",
                "Unconscious, vital signs present",
                "Below 28 °C"
              ],
              [
                "Arrest",
                "No signs of life",
                "Often below 24 °C"
              ]
            ],
            "notes": [
              "No thermometer? Stage by consciousness and shivering."
            ]
          },
          {
            "type": "steps",
            "title": "Everyone",
            "icon": "snowflake",
            "steps": [
              {
                "title": "Gentle",
                "text": "Keep horizontal; avoid rough handling and jolts."
              },
              {
                "title": "Stop heat loss",
                "text": "Remove wet clothing (cut it), insulate top and bottom, vapour barrier, cover the head."
              },
              {
                "title": "Warm the trunk",
                "text": "Heat packs or blankets to chest, armpits and back; warm IV fluids (38–42 °C) per protocol. Mild and shivering: warm sweet drinks if able to swallow."
              },
              {
                "title": "Destination",
                "text": "Severe or unstable: a centre with ECLS (bypass) if possible."
              }
            ]
          },
          {
            "type": "steps",
            "title": "Hypothermic cardiac arrest",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Check for life",
                "text": "Breathing and pulse for up to 1 minute: severe bradycardia can feel like no pulse."
              },
              {
                "title": "CPR",
                "text": "Standard rate and depth; mechanical CPR helps long transports. Rigid chest is expected."
              },
              {
                "title": "Shocks",
                "text": "Below 30 °C: up to 3 shocks; if VF persists, hold further shocks until above 30 °C (ERC). AHA allows standard defibrillation alongside rewarming."
              },
              {
                "title": "Drugs",
                "text": "Below 30 °C: withhold epinephrine. 30–35 °C: double the interval (every 6–10 minutes) (ERC)."
              },
              {
                "title": "Don't stop early",
                "text": "Not dead until warm and dead – unless injuries incompatible with life, a frozen chest, or an avalanche burial over 60 minutes with a blocked airway."
              }
            ]
          },
          {
            "type": "table",
            "title": "Local cold injuries",
            "icon": "hand",
            "stack": true,
            "columns": [
              "Injury",
              "Signs",
              "Do"
            ],
            "rows": [
              [
                "Frostnip",
                "Pale, numb, soft; recovers with warming",
                "Skin-to-skin warming"
              ],
              [
                "Frostbite",
                "White or grey, hard, waxy; blisters after thawing",
                "Treat hypothermia first. Thaw only if it won't refreeze: water at 37–39 °C for 15–30 minutes. No rubbing, no dry heat. Ibuprofen, pad and protect blisters"
              ],
              [
                "Trench (immersion) foot",
                "Cold, wet, numb for days, then red and painful",
                "Dry gently, warm, elevate; don't rub"
              ]
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
                    "ecg": "sbrady",
                    "label": "Bradycardia",
                    "sub": "Expected in moderate and severe hypothermia; pacing rarely needed.",
                    "lead": "II"
                  },
                  {
                    "ecg": "afib",
                    "label": "Atrial fibrillation",
                    "sub": "Common below 32 °C; usually settles with rewarming.",
                    "lead": "II"
                  },
                  {
                    "ecg": "vfCoarse",
                    "label": "VF",
                    "sub": "Rough handling can trigger it; up to 3 shocks below 30 °C.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "ACLS review",
                    "sub": "Special circumstances",
                    "href": "../pages/acls.html",
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
          "q": "Found outside on a freezing night: unresponsive, not shivering, pupils dilated. After a long check you feel a slow carotid pulse. You:",
          "options": [
            "Don't start CPR: handle gently, insulate, warm the trunk, transport",
            "Start CPR",
            "Defibrillate",
            "Give atropine"
          ],
          "correct": 0,
          "explanation": "Compressions on a perfusing heart can trigger VF."
        },
        {
          "q": "Core 25.6 °C, pulseless; VF persists after 3 shocks. Per ERC you:",
          "options": [
            "Hold further shocks until above 30 °C and continue CPR with rewarming",
            "Shock every 2 minutes regardless",
            "Give amiodarone",
            "Stop CPR"
          ],
          "correct": 0,
          "explanation": "AHA allows standard shocks alongside rewarming."
        },
        {
          "q": "Moderate hypothermia with frozen hands. Priority?",
          "options": [
            "Rewarm the core first; protect the hands",
            "Thaw the hands first",
            "Rub the hands",
            "Warm hands and core together in hot water"
          ],
          "correct": 0,
          "explanation": "Hypothermia kills; frostbite doesn't in the short term."
        },
        {
          "q": "Correct statement about hypothermic arrest:",
          "options": [
            "Check for a pulse for up to 1 minute; prolonged CPR with rewarming can succeed",
            "Shock up to 10 times",
            "Give standard drugs at any temperature",
            "Treat exactly like normothermic arrest"
          ],
          "correct": 0,
          "explanation": "Not dead until warm and dead."
        },
        {
          "q": "A patient who is drowsy and has stopped shivering is in which stage?",
          "options": [
            "Moderate",
            "Mild",
            "Severe",
            "Normal"
          ],
          "correct": 0,
          "explanation": "Mild: alert and shivering."
        },
        {
          "q": "Why handle a hypothermic patient gently?",
          "options": [
            "The cold heart is irritable and VF can be triggered",
            "To avoid frostbite",
            "To save energy",
            "Because of afterdrop only"
          ],
          "correct": 0,
          "explanation": "Keep them horizontal."
        },
        {
          "q": "Frostbite should be thawed in water at:",
          "options": [
            "37–39 °C",
            "50 °C",
            "Cold water",
            "Snow"
          ],
          "correct": 0,
          "explanation": "Only if it won't refreeze."
        },
        {
          "q": "Epinephrine in hypothermic arrest below 30 °C (ERC):",
          "options": [
            "Withhold",
            "Every 3–5 minutes",
            "Double dose",
            "Every minute"
          ],
          "correct": 0,
          "explanation": "30–35 °C: double the interval."
        },
        {
          "q": "Best destination for a hypothermic arrest:",
          "options": [
            "A centre with ECLS (bypass)",
            "Nearest clinic",
            "Any ED",
            "Home for warming"
          ],
          "correct": 0,
          "explanation": "ECLS rewarms and supports circulation."
        },
        {
          "q": "Afterdrop is prevented by:",
          "options": [
            "Gentle handling and warming the trunk, not the limbs",
            "Rubbing limbs",
            "Hot baths for limbs",
            "Walking the patient"
          ],
          "correct": 0,
          "explanation": "Cold blood from the limbs returns to the core."
        }
      ],
      "flashcards": [
        {
          "question": "Hypothermia stages",
          "answer": "Mild 32–35 °C (alert, shivering); moderate 28–32 °C (drowsy, shivering stops); severe below 28 °C (unconscious); arrest often below 24 °C.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Gentle handling",
          "answer": "The cold heart is irritable: jolts, rough moves and aggressive suction can trigger VF. Keep the patient horizontal.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Afterdrop",
          "answer": "Core temperature keeps falling after rescue as cold blood returns from the limbs. Handle gently and warm the trunk first.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Frostbite care",
          "answer": "No rubbing, no dry heat. Thaw only if it won't refreeze: 37–39 °C water for 15–30 minutes. Ibuprofen, pain relief, protect blisters.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Shocks and drugs below 30 °C",
          "answer": "ERC: up to 3 shocks, then wait until above 30 °C; withhold epinephrine below 30 °C, double the interval at 30–35 °C. AHA: standard shocks with rewarming.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Pulse check in hypothermia",
          "answer": "Up to 1 minute for breathing and pulse: profound bradycardia is easy to miss.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Rewarming",
          "answer": "Insulate and stop heat loss; heat packs to the trunk; warm IV fluids; warm drinks only if alert and swallowing. Arrest or unstable: ECLS centre.",
          "category": "Cold Exposure & Hypothermia"
        },
        {
          "question": "Trench (immersion) foot",
          "answer": "Non-freezing injury from days of cold, wet feet: numb and pale, then red and painful. Dry, warm gently, elevate, don't rub.",
          "category": "Cold Exposure & Hypothermia"
        }
      ],
      "critical": [
        {
          "id": "crit_8_2_1",
          "scenario": "Lost hiker found after 4 hours in sub-zero wind: unresponsive, not shivering, rigid. After 20 seconds you can't feel a pulse.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Keep checking breathing and pulse for up to 1 minute (monitor too); if none, start CPR, handle gently, insulate and head for an ECLS centre",
              "f": "Correct."
            },
            {
              "t": "Start CPR immediately at 20 seconds",
              "f": "Profound bradycardia needs a longer check."
            },
            {
              "t": "Declare death",
              "f": "Not dead until warm and dead."
            },
            {
              "t": "Rub his limbs to warm him",
              "f": "Causes afterdrop."
            }
          ],
          "correct": 0,
          "explanation": "Mechanical CPR makes long transports possible.",
          "kpi": "Performs prolonged pulse check and appropriate hypothermic resuscitation"
        },
        {
          "id": "crit_8_2_2",
          "scenario": "68-year-old in an unheated flat during a power cut: confused, shivering, cold pale skin, can swallow.",
          "question": "Stage and rewarming?",
          "options": [
            {
              "t": "Mild hypothermia: remove wet clothes, insulate, warm room or ambulance, warm sweet drinks, heat to the trunk, transport",
              "f": "Correct."
            },
            {
              "t": "Severe: ECLS now",
              "f": "She's alert and shivering."
            },
            {
              "t": "Hot bath",
              "f": "Can drop blood pressure."
            },
            {
              "t": "No treatment needed",
              "f": "Older adults decompensate."
            }
          ],
          "correct": 0,
          "explanation": "Shivering is the body's best heater: support it with calories.",
          "kpi": "Stages hypothermia and selects passive and active external rewarming"
        },
        {
          "id": "crit_8_2_3",
          "scenario": "52-year-old slept outside in freezing weather: confused, hands white and hard, feet frozen. He walked to the shelter on them; your transport is 2 hours with no reliable heating.",
          "question": "Correct management?",
          "options": [
            {
              "t": "Treat hypothermia first; don't thaw the hands and feet if they may refreeze – protect, pad and splint them, ibuprofen, transport",
              "f": "Correct."
            },
            {
              "t": "Thaw in hot water now",
              "f": "Refreezing does more damage."
            },
            {
              "t": "Rub them with snow",
              "f": "Harmful myth."
            },
            {
              "t": "Have him walk to the ambulance",
              "f": "He's already walked on them; carry him now."
            }
          ],
          "correct": 0,
          "explanation": "Thaw once in a controlled setting, ideally with specialist care.",
          "kpi": "Manages frostbite with refreeze risk correctly"
        }
      ]
    },
    {
      "id": "c8s3",
      "shortTitle": "8.3 Drowning & Submersion Injury",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Drowning & Submersion Injury",
        "lead": "Drowning is a breathing problem. The fix is oxygen: start rescue breaths as soon as it's safe, give ventilation priority in CPR, and never waste time draining water. Anyone with symptoms afterwards goes to hospital, because they can worsen over hours.",
        "sections": [
          {
            "type": "list",
            "title": "Rescue safely",
            "icon": "triangle-alert",
            "items": [
              "Reach, throw, row – then go (trained rescuers only)",
              "Spinal care only if there's a diving, fall or high-energy mechanism, or signs of injury",
              "Cold water: limit your own time in it"
            ]
          },
          {
            "type": "steps",
            "title": "Not breathing",
            "icon": "wind",
            "steps": [
              {
                "title": "Open the airway and breathe",
                "text": "Start with rescue breaths: 5 initial breaths (ERC). Suction only what blocks the airway.",
                "level": "BLS"
              },
              {
                "title": "No signs of life",
                "text": "CPR with ventilations: 30:2 adults; 15:2 children with two rescuers. Oxygen as soon as possible.",
                "level": "BLS"
              },
              {
                "title": "Breathing but not adequately",
                "text": "Bag-mask ventilation; child: 1 breath every 2–3 seconds; adult: 1 every 6 seconds.",
                "level": "BLS"
              },
              {
                "title": "Advanced airway",
                "text": "Early if ventilation is hard; expect foam – keep ventilating through it.",
                "level": "ALS"
              },
              {
                "title": "Vomit",
                "text": "Common: turn to the side, suction, continue."
              }
            ]
          },
          {
            "type": "list",
            "title": "Don't",
            "icon": "ban",
            "items": [
              "Abdominal thrusts to 'drain' water: they cause vomiting and delay breaths",
              "Worry about fresh vs salt water: care is the same",
              "Stop early in ice-water submersion, especially in children"
            ]
          },
          {
            "type": "list",
            "title": "Who goes to hospital?",
            "icon": "hospital",
            "items": [
              "Anyone who needed rescue breaths or CPR",
              "Any cough, foam, breathlessness, abnormal lung sounds, SpO₂ below 95% or altered mental status",
              "\"Dry\" or \"secondary\" drowning are no longer recognised terms: symptoms start early and can worsen over hours"
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
                    "ecg": "sbrady",
                    "label": "Hypoxic bradycardia",
                    "sub": "Ventilate: the heart rate usually rises with oxygen.",
                    "lead": "II"
                  },
                  {
                    "ecg": "asystole",
                    "label": "Asystole",
                    "sub": "The usual drowning arrest rhythm: CPR with good ventilations.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "BLS review",
                    "sub": "CPR and rescue breathing",
                    "href": "../pages/bls.html",
                    "icon": "heart-pulse"
                  },
                  {
                    "label": "PALS review",
                    "sub": "Pediatric resuscitation",
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
          "q": "3-year-old pulled from a pool after 3–4 minutes: unresponsive, not breathing, no pulse. First?",
          "options": [
            "Open the airway and give rescue breaths, then CPR with strong ventilations",
            "Compressions only",
            "Abdominal thrusts to drain water",
            "Collar before anything"
          ],
          "correct": 0,
          "explanation": "Hypoxia caused the arrest; oxygen fixes it."
        },
        {
          "q": "Adult rescued after 2 minutes underwater: alert, coughing, frothy sputum, SpO₂ 91%. He wants to go home. You:",
          "options": [
            "Explain he needs hospital: symptoms can worsen over hours",
            "Let him refuse",
            "Observe 30 minutes then release",
            "Abdominal thrusts"
          ],
          "correct": 0,
          "explanation": "Cough and low SpO₂ mean lung injury."
        },
        {
          "q": "Child pulled from an icy pond after about 20 minutes: pulseless. You:",
          "options": [
            "Full resuscitation with rewarming: cold-water submersion has had good outcomes",
            "Comfort care only",
            "Rewarm the limbs first",
            "Shock immediately"
          ],
          "correct": 0,
          "explanation": "Transport to a centre with ECLS if possible."
        },
        {
          "q": "Correct drowning statement:",
          "options": [
            "Rescue breathing is the priority; no abdominal thrusts",
            "Thrusts first to remove water",
            "Fresh and salt water need different care",
            "Release after 30 minutes if well"
          ],
          "correct": 0,
          "explanation": "Ventilation first."
        },
        {
          "q": "Initial rescue breaths in drowning (ERC):",
          "options": [
            "5",
            "1",
            "10",
            "None"
          ],
          "correct": 0,
          "explanation": "Then 30:2."
        },
        {
          "q": "Bag-mask rate for a child with a pulse but inadequate breathing:",
          "options": [
            "1 breath every 2–3 seconds",
            "1 every 6 seconds",
            "1 every 10 seconds",
            "As fast as possible"
          ],
          "correct": 0,
          "explanation": "20–30 breaths/min."
        },
        {
          "q": "Spinal motion restriction after drowning is needed when:",
          "options": [
            "There is a diving, fall or high-energy mechanism or signs of injury",
            "Always",
            "Never",
            "Only in salt water"
          ],
          "correct": 0,
          "explanation": "Routine collars delay ventilation."
        },
        {
          "q": "The usual cardiac arrest rhythm after drowning:",
          "options": [
            "Asystole or PEA",
            "VF",
            "VT",
            "Atrial flutter"
          ],
          "correct": 0,
          "explanation": "Hypoxic arrest."
        },
        {
          "q": "Foam pouring from the airway during ventilation. You:",
          "options": [
            "Keep ventilating through it; suction only what blocks",
            "Stop to suction continuously",
            "Abdominal thrusts",
            "Turn prone"
          ],
          "correct": 0,
          "explanation": "Foam is fluid from the lungs; it will keep coming."
        },
        {
          "q": "'Secondary drowning' is:",
          "options": [
            "Not a recognised medical term: symptoms appear early and can worsen",
            "A sudden death days later without symptoms",
            "Drowning in a second body of water",
            "A type of salt-water drowning"
          ],
          "correct": 0,
          "explanation": "Anyone symptomatic needs hospital."
        }
      ],
      "flashcards": [
        {
          "question": "Definition of drowning",
          "answer": "Respiratory impairment from submersion or immersion in liquid. Outcomes: death, or survival with or without injury. \"Dry\", \"wet\" and \"secondary\" drowning are outdated terms.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Priority in drowning",
          "answer": "Ventilation. Rescue breaths as soon as safe; ventilation-first CPR; oxygen early.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Who goes to hospital?",
          "answer": "Anyone who needed breaths or CPR, or has cough, foam, breathlessness, abnormal lung sounds, low SpO₂ or altered mental status. Symptoms can worsen over hours.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Fresh vs salt water",
          "answer": "Different lung mechanisms, identical prehospital care: oxygen and ventilation.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Diving reflex",
          "answer": "Cold water on the face slows the heart and shunts blood to the brain and heart; strongest in children. One reason for good outcomes after ice-water submersion.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Drowning sequence",
          "answer": "Breath-holding and panic, laryngospasm, then aspiration as hypoxia deepens, lung injury, bradycardia, arrest.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Abdominal thrusts in drowning?",
          "answer": "No: they cause vomiting and aspiration and delay ventilation. Water in the lungs is absorbed.",
          "category": "Drowning & Submersion Injury"
        },
        {
          "question": "Drowning management steps",
          "answer": "Safe rescue; spinal care only for trauma; airway and breaths; CPR emphasising ventilation; remove wet clothes and warm; hospital for anyone symptomatic.",
          "category": "Drowning & Submersion Injury"
        }
      ],
      "critical": [
        {
          "id": "crit_8_3_1",
          "scenario": "4-year-old pulled from a pool 2 minutes ago: unresponsive, not breathing, weak carotid pulse about 50/min.",
          "question": "Management?",
          "options": [
            {
              "t": "Bag-mask with oxygen at 1 breath every 2–3 seconds; if HR stays below 60 with poor perfusion, start CPR; no abdominal thrusts",
              "f": "Correct."
            },
            {
              "t": "Breaths every 6 seconds",
              "f": "That's the adult rate."
            },
            {
              "t": "Abdominal thrusts first",
              "f": "Delays oxygen."
            },
            {
              "t": "Transport without ventilation",
              "f": "Ventilate now."
            }
          ],
          "correct": 0,
          "explanation": "Hypoxic bradycardia usually responds to ventilation.",
          "kpi": "Provides pediatric rescue breathing for drowning with bradycardia"
        },
        {
          "id": "crit_8_3_2",
          "scenario": "22-year-old pulled from a river after 5–7 minutes underwater; friends were drinking and swimming. Pulseless, apnoeic.",
          "question": "Sequence and special considerations?",
          "options": [
            {
              "t": "Rescue breaths first, then CPR with good ventilations; suction vomit, early advanced airway, oxygen; consider injury if he dived; warm and transport",
              "f": "Correct."
            },
            {
              "t": "Compressions-only CPR",
              "f": "Ventilation is the key in drowning."
            },
            {
              "t": "Abdominal thrusts",
              "f": "No."
            },
            {
              "t": "Stop: too long underwater",
              "f": "Resuscitate."
            }
          ],
          "correct": 0,
          "explanation": "Alcohol and diving raise the chance of a neck injury.",
          "kpi": "Performs ventilation-focused resuscitation in drowning"
        },
        {
          "id": "crit_8_3_3",
          "scenario": "7-year-old pool drowning, intubated by the first crew, still in arrest. Absent left breath sounds, distended neck veins, trachea deviated to the right; ventilation getting harder.",
          "question": "What is happening?",
          "options": [
            {
              "t": "Left tension pneumothorax from ventilation: needle decompression on the left per protocol, then reassess tube position",
              "f": "Correct."
            },
            {
              "t": "Right main-stem intubation only",
              "f": "That causes absent left sounds but not a deviated trachea and distended veins."
            },
            {
              "t": "Normal drowning findings",
              "f": "These are signs of tension."
            },
            {
              "t": "Stop ventilating",
              "f": "Fix the cause."
            }
          ],
          "correct": 0,
          "explanation": "Also check DOPE: displacement, obstruction, pneumothorax, equipment.",
          "kpi": "Recognizes tension pneumothorax during drowning resuscitation"
        }
      ]
    },
    {
      "id": "c8s4",
      "shortTitle": "8.4 Diving & Altitude Emergencies",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Diving & Altitude Emergencies",
        "lead": "Gas laws cause both. Divers who become ill after surfacing need 100% oxygen, lying flat, and a hyperbaric chamber. At altitude, the cure for anything serious is going down; drugs and bags only buy time.",
        "sections": [
          {
            "type": "table",
            "title": "After a dive",
            "icon": "clock",
            "stack": true,
            "columns": [
              "Problem",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Arterial gas embolism",
                "Within minutes of surfacing (usually under 10): collapse, stroke-like signs, seizures, chest pain",
                "100% oxygen, lie flat, ABCs, rapid transport to a hyperbaric centre"
              ],
              [
                "Decompression sickness",
                "Usually within 6 hours (up to 24): joint pain, itchy or marbled rash, numbness, weakness, breathlessness",
                "100% oxygen, lie flat, fluids (oral if alert, IV per protocol), hyperbaric centre"
              ],
              [
                "Pneumothorax",
                "Chest pain, breathlessness, reduced breath sounds",
                "Oxygen; decompress a tension pneumothorax"
              ],
              [
                "Ear and sinus squeeze",
                "Pain, blood, vertigo during descent",
                "Usually minor; hospital if vertigo or deafness"
              ]
            ],
            "notes": [
              "Lying flat replaced head-down or left-side positioning. Bring the dive profile and computer. Air transport: fly low or in a pressurised cabin."
            ]
          },
          {
            "type": "table",
            "title": "Altitude illness",
            "icon": "mountain",
            "stack": true,
            "columns": [
              "Illness",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Acute mountain sickness",
                "Headache plus nausea, fatigue or dizziness, 6–12 hours after ascent; normal neuro exam",
                "Stop ascending, rest, simple pain relief; descend if worse. Acetazolamide per protocol"
              ],
              [
                "High-altitude cerebral oedema",
                "Ataxia (can't walk heel-to-toe), confusion, drowsiness",
                "Descend now; oxygen; dexamethasone 8 mg, then 4 mg every 6 hours"
              ],
              [
                "High-altitude pulmonary oedema",
                "Breathless at rest, cough, crackles, low SpO₂, worse at night",
                "Descend now; oxygen; keep warm, minimise exertion; nifedipine ER 30 mg every 12 hours"
              ]
            ],
            "notes": [
              "Descend 300–1000 m or until symptoms resolve. Portable hyperbaric bag if descent is impossible."
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
                    "sub": "Dexamethasone, nifedipine",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  },
                  {
                    "label": "Medical assessment",
                    "sub": "Neuro exam for divers and climbers",
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
          "q": "Diver surfaces from a deep dive and within 2 minutes collapses with right-sided weakness and slurred speech. Most likely?",
          "options": [
            "Arterial gas embolism: 100% oxygen, lie flat, hyperbaric centre",
            "Decompression sickness only",
            "Heart attack: aspirin and nearest ED",
            "Fatigue"
          ],
          "correct": 0,
          "explanation": "Symptoms within minutes point to gas embolism."
        },
        {
          "q": "8 hours after arriving at a ski resort: headache 4/10, nausea, fatigue, normal walking. Most likely?",
          "options": [
            "Acute mountain sickness: stop ascending, rest, pain relief",
            "High-altitude cerebral oedema",
            "High-altitude pulmonary oedema",
            "Viral illness"
          ],
          "correct": 0,
          "explanation": "No ataxia, no breathlessness at rest."
        },
        {
          "q": "Diver with deep shoulder and elbow pain and an itchy marbled rash 20 minutes after a repeat dive; normal neuro exam. Diagnosis and care?",
          "options": [
            "Decompression sickness (mild): 100% oxygen, lie flat, fluids, hyperbaric assessment",
            "Overexertion: rest and NSAIDs",
            "Gas embolism",
            "Allergy"
          ],
          "correct": 0,
          "explanation": "Joint and skin symptoms; check neuro function repeatedly."
        },
        {
          "q": "Climber at 4300 m: severe headache, vomiting, can't walk a straight line, drowsy; lungs clear. Plan?",
          "options": [
            "High-altitude cerebral oedema: descend now, oxygen, dexamethasone 8 mg",
            "Acute mountain sickness: acetazolamide and rest",
            "Pulmonary oedema: nifedipine",
            "Carbon monoxide only"
          ],
          "correct": 0,
          "explanation": "Ataxia is the key sign."
        },
        {
          "q": "Position for a diver with suspected gas embolism:",
          "options": [
            "Lying flat",
            "Head-down",
            "Sitting up",
            "Left side, head down"
          ],
          "correct": 0,
          "explanation": "Head-down positions are no longer recommended."
        },
        {
          "q": "Single most important prehospital treatment for diving illness:",
          "options": [
            "100% oxygen",
            "Aspirin",
            "Steroids",
            "Diuretics"
          ],
          "correct": 0,
          "explanation": "Speeds nitrogen elimination and shrinks bubbles."
        },
        {
          "q": "Definitive treatment for gas embolism and decompression sickness:",
          "options": [
            "Recompression in a hyperbaric chamber",
            "Surgery",
            "Antibiotics",
            "Rest only"
          ],
          "correct": 0,
          "explanation": "Transfer even if symptoms improve on oxygen."
        },
        {
          "q": "Breathless at rest with a cough and crackles on day 3 at altitude. Treatment?",
          "options": [
            "Descend, oxygen, keep warm; nifedipine if descent is delayed",
            "Acetazolamide only",
            "Exercise to acclimatise",
            "Diuretics"
          ],
          "correct": 0,
          "explanation": "High-altitude pulmonary oedema."
        },
        {
          "q": "How far to descend for serious altitude illness?",
          "options": [
            "300–1000 m or until symptoms resolve",
            "50 m",
            "Only to the next camp",
            "Descent doesn't help"
          ],
          "correct": 0,
          "explanation": "Descent is the definitive treatment."
        },
        {
          "q": "Flying a diver with decompression sickness:",
          "options": [
            "Low altitude or pressurised cabin",
            "As high as possible",
            "It doesn't matter",
            "Only after 48 hours"
          ],
          "correct": 0,
          "explanation": "Lower pressure enlarges bubbles."
        }
      ],
      "flashcards": [
        {
          "question": "Gas embolism vs decompression sickness timing",
          "answer": "Gas embolism: within minutes of surfacing (usually under 10), often sudden collapse. DCS: usually within 6 hours, up to 24.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Most important prehospital treatment in diving illness",
          "answer": "100% oxygen, as high a concentration as possible, for the whole transport.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Pulmonary barotrauma",
          "answer": "Breath-holding on ascent ruptures alveoli: gas embolism, pneumothorax, or mediastinal and subcutaneous emphysema.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Definitive treatment for DCS and gas embolism",
          "answer": "Recompression in a hyperbaric chamber. Before it: 100% oxygen, lie flat, fluids, treat pneumothorax, bring the dive computer.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Three altitude illnesses",
          "answer": "AMS: headache plus nausea, fatigue or dizziness; normal neuro. HACE: AMS plus ataxia or confusion. HAPE: breathless at rest, cough, crackles, low SpO₂.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Treatment of HACE and HAPE",
          "answer": "Descend 300–1000 m. HACE: oxygen, dexamethasone 8 mg then 4 mg every 6 hours. HAPE: oxygen, nifedipine ER 30 mg every 12 hours. Portable hyperbaric bag if stuck.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Nifedipine in HAPE",
          "answer": "Lowers pulmonary artery pressure, the driver of HAPE. Second line to descent and oxygen.",
          "category": "Diving & Altitude Emergencies"
        },
        {
          "question": "Lake Louise Score",
          "answer": "Rates headache, GI symptoms, fatigue and dizziness (0–3 each). AMS: headache with a total of 3 or more after recent ascent.",
          "category": "Diving & Altitude Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_8_4_1",
          "scenario": "Diver surfaces from a 50-minute dive to 18 m with a safety stop. 3 minutes later he loses consciousness on deck and has a brief seizure. A hyperbaric centre is farther than the local hospital.",
          "question": "Diagnosis and transport?",
          "options": [
            {
              "t": "Arterial gas embolism: 100% oxygen, lie flat, ABCs, transport toward the hyperbaric-capable centre (or stabilise locally if unstable and transfer)",
              "f": "Correct."
            },
            {
              "t": "Nearest hospital always, no oxygen",
              "f": "Oxygen is the key treatment."
            },
            {
              "t": "Head-down left side",
              "f": "No longer recommended."
            },
            {
              "t": "Observe on the boat",
              "f": "Emergency."
            }
          ],
          "correct": 0,
          "explanation": "Contact a diving medicine service for advice.",
          "kpi": "Recognizes arterial gas embolism and chooses a hyperbaric destination"
        },
        {
          "id": "crit_8_4_2",
          "scenario": "Hut at 3800 m on day 3: breathless at rest, productive pink cough, crackles, SpO₂ 68%. Descent requires a 4-hour hike at night.",
          "question": "Plan?",
          "options": [
            {
              "t": "HAPE: oxygen, keep warm and still, nifedipine ER; portable hyperbaric bag if available; descend as soon as safely possible",
              "f": "Correct."
            },
            {
              "t": "Rest and reassess tomorrow",
              "f": "HAPE kills overnight."
            },
            {
              "t": "Make him hike fast",
              "f": "Exertion worsens HAPE: carry if possible."
            },
            {
              "t": "Acetazolamide only",
              "f": "Not a treatment for HAPE."
            }
          ],
          "correct": 0,
          "explanation": "Descent is definitive; the rest buys time.",
          "kpi": "Manages high-altitude pulmonary oedema when descent is delayed"
        },
        {
          "id": "crit_8_4_3",
          "scenario": "Diver flies home 6 hours after a day of repeat dives. On landing: numb legs, difficulty urinating, back pain.",
          "question": "What is this, and the plan?",
          "options": [
            {
              "t": "Spinal decompression sickness (worsened by flying): 100% oxygen, lie flat, fluids, urgent hyperbaric centre",
              "f": "Correct."
            },
            {
              "t": "Muscle strain",
              "f": "Neuro deficits after diving and flying mean DCS."
            },
            {
              "t": "Wait until morning",
              "f": "Neurological DCS is an emergency."
            },
            {
              "t": "Steroids and home",
              "f": "Needs recompression."
            }
          ],
          "correct": 0,
          "explanation": "Flying soon after diving lowers pressure and enlarges bubbles.",
          "kpi": "Recognizes neurological decompression sickness"
        }
      ]
    },
    {
      "id": "c8s5",
      "shortTitle": "8.5 Bites, Stings & Envenomation",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Bites, Stings & Envenomation",
        "lead": "Most bites and stings need wound care and calm. The killers are anaphylaxis, which needs IM epinephrine immediately, and venomous snakes, which need immobilisation, rapid transport and antivenom – not cutting, sucking, ice or tourniquets.",
        "sections": [
          {
            "type": "gate",
            "title": "Anaphylaxis?",
            "icon": "triangle-alert",
            "question": "After a sting or bite: breathing difficulty, throat or tongue swelling, low blood pressure, or collapse – with or without hives?",
            "yes": "Epinephrine IM into the outer thigh now (0.01 mg/kg, maximum 0.5 mg; auto-injector 0.3 mg, or 0.15 mg for small children). Repeat after 5 minutes if no better. Lie flat (or sit up if breathless), oxygen, IV fluids.",
            "no": "Local reaction: remove the sting, wash, cold pack, antihistamine for itch; watch for spread."
          },
          {
            "type": "steps",
            "title": "Snakebite",
            "icon": "triangle-alert",
            "steps": [
              {
                "title": "Away from the snake",
                "text": "Don't try to catch or kill it; a photo from a distance helps."
              },
              {
                "title": "Calm and still",
                "text": "Remove rings and watches; splint the limb at about heart level; carry, don't walk."
              },
              {
                "title": "Mark it",
                "text": "Outline the edge of swelling with the time every 15 minutes."
              },
              {
                "title": "Neurotoxic snakes (elapids: coral snakes, cobras, kraits, Australian snakes)",
                "text": "A firm pressure-immobilisation bandage over the whole limb where local guidelines advise. Not for North American pit vipers."
              },
              {
                "title": "Go",
                "text": "Rapid transport to a hospital with antivenom; watch airway (paralysis), bleeding and blood pressure."
              }
            ]
          },
          {
            "type": "list",
            "title": "Never",
            "icon": "ban",
            "items": [
              "Cut and suck",
              "Tourniquet or tight band (except pressure-immobilisation where indicated)",
              "Ice",
              "Electric shock",
              "Alcohol"
            ]
          },
          {
            "type": "table",
            "title": "Other bites and stings",
            "icon": "search",
            "stack": true,
            "columns": [
              "Creature",
              "Clues",
              "Do"
            ],
            "rows": [
              [
                "Bee, wasp",
                "Pain, swelling; anaphylaxis risk",
                "Remove a bee sting fast by any method – speed matters more than scraping"
              ],
              [
                "Black widow",
                "Severe cramps, rigid abdomen without peritonitis, sweating",
                "Pain relief, benzodiazepines for spasm per protocol, hospital"
              ],
              [
                "Brown recluse",
                "Painless bite, later red-white-blue lesion, necrosis",
                "Wound care, hospital follow-up"
              ],
              [
                "Jellyfish",
                "Painful lines of welts",
                "Vinegar for box jellyfish and many tropical species; then hot water (about 45 °C) for pain"
              ],
              [
                "Stingray, stonefish, lionfish",
                "Severe pain out of proportion",
                "Hot water as hot as tolerated (about 45 °C) for 30–90 minutes; wound care, X-ray for spine fragments"
              ],
              [
                "Dog, cat, human",
                "Puncture or tear",
                "Irrigate well; cat and human bites infect easily; rabies and tetanus per local guidance"
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
                    "sub": "Epinephrine by weight",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  },
                  {
                    "label": "Medical emergencies",
                    "sub": "Anaphylaxis review",
                    "href": "../pages/medical.html",
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
          "q": "Snakebite to the hand: two punctures, mild pain, little swelling, normal vital signs. Best care?",
          "options": [
            "Remove rings, splint at about heart level, mark the swelling, transport",
            "Tourniquet, cut and suck",
            "Ice packs",
            "Epinephrine IM"
          ],
          "correct": 0,
          "explanation": "Calm, still, transport for possible antivenom."
        },
        {
          "q": "Bee sting: hives, lip and tongue swelling, wheeze, BP 80/50. Priority?",
          "options": [
            "Epinephrine IM into the outer thigh",
            "Diphenhydramine IV",
            "Oxygen and transport only",
            "Albuterol"
          ],
          "correct": 0,
          "explanation": "Epinephrine first; the others are add-ons."
        },
        {
          "q": "Surfer steps on something in shallow sea water: a foot puncture with pain out of proportion. Most likely, and care?",
          "options": [
            "Stingray: hot water as hot as tolerated (about 45 °C) for 30–90 minutes, irrigate, X-ray",
            "Jellyfish: vinegar",
            "Sea urchin: steroids",
            "Will settle alone"
          ],
          "correct": 0,
          "explanation": "Heat breaks down the venom."
        },
        {
          "q": "A child bitten by an unidentified snake: no pain or swelling, then drooping eyelids and slurred speech 2 hours later. Most likely?",
          "options": [
            "Neurotoxic (elapid, e.g. coral snake) envenomation: airway watch, antivenom",
            "Pit viper with tourniquet needed",
            "Non-venomous bite with anxiety",
            "Dry bite"
          ],
          "correct": 0,
          "explanation": "Minimal local signs don't exclude neurotoxic venom."
        },
        {
          "q": "Adult IM epinephrine for anaphylaxis:",
          "options": [
            "0.01 mg/kg, maximum 0.5 mg (auto-injector 0.3 mg)",
            "1 mg IV push",
            "0.1 mg IM",
            "5 mg IM"
          ],
          "correct": 0,
          "explanation": "Repeat after 5 minutes if no improvement."
        },
        {
          "q": "Pressure-immobilisation bandaging is recommended for:",
          "options": [
            "Neurotoxic snakes such as Australian elapids, per local guidance",
            "North American pit vipers",
            "Bee stings",
            "Dog bites"
          ],
          "correct": 0,
          "explanation": "It slows lymphatic spread of neurotoxic venom."
        },
        {
          "q": "Removing a honeybee sting:",
          "options": [
            "As fast as possible by any method",
            "Only by scraping, never pinching",
            "Leave it",
            "Cut it out"
          ],
          "correct": 0,
          "explanation": "Delay matters more than method."
        },
        {
          "q": "Severe abdominal cramps and rigidity without tenderness after a spider bite. Suspect:",
          "options": [
            "Black widow",
            "Brown recluse",
            "Tarantula",
            "Appendicitis"
          ],
          "correct": 0,
          "explanation": "Pain relief and benzodiazepines for spasm."
        },
        {
          "q": "Box jellyfish sting: first treatment?",
          "options": [
            "Vinegar to inactivate stinging cells",
            "Fresh water rinse",
            "Rub with sand",
            "Urine"
          ],
          "correct": 0,
          "explanation": "Then hot water for pain."
        },
        {
          "q": "Which bite most often becomes infected?",
          "options": [
            "Cat (and human) bites",
            "Dog bite always",
            "Snakebite",
            "Mosquito bite"
          ],
          "correct": 0,
          "explanation": "Deep punctures; irrigate well."
        }
      ],
      "flashcards": [
        {
          "question": "Venomous snake types",
          "answer": "Vipers (rattlesnakes, adders, Russell's viper): local swelling, bleeding, low BP. Elapids (cobras, kraits, coral snakes, most Australian snakes): neurotoxic paralysis, often little local reaction.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Snakebite DON'Ts",
          "answer": "No cutting, sucking, tourniquets (except pressure-immobilisation where advised), ice, electric shock or alcohol. Don't chase the snake.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Black widow",
          "answer": "Severe cramps, rigid abdomen without peritonitis, sweating, high BP. Pain relief, benzodiazepines, hospital.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Brown recluse",
          "answer": "Painless bite that becomes a red, white and blue lesion and may necrose. Wound care and follow-up.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Anaphylaxis treatment",
          "answer": "Epinephrine IM into the outer thigh: 0.01 mg/kg, maximum 0.5 mg (auto-injector 0.3 mg; 0.15 mg for small children). Repeat after 5 minutes. Oxygen, fluids.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Bee stings",
          "answer": "Remove fast by any method. Watch for anaphylaxis.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Jellyfish vs stingray",
          "answer": "Jellyfish: vinegar (box jellyfish and many tropical species), then hot water. Stingray and venomous fish: hot water about 45 °C for 30–90 minutes.",
          "category": "Bites, Stings & Envenomation"
        },
        {
          "question": "Viper vs coral snake bite",
          "answer": "Viper: immediate pain, swelling, bruising, bleeding. Coral snake: little local reaction; neurotoxic signs (ptosis, slurred speech, weakness) may be delayed for hours.",
          "category": "Bites, Stings & Envenomation"
        }
      ],
      "critical": [
        {
          "id": "crit_8_5_1",
          "scenario": "Hiker bitten on the lower leg by a rattlesnake 20 minutes ago: swelling spreading up the shin, tingling lips, metallic taste.",
          "question": "Complete prehospital care?",
          "options": [
            {
              "t": "Remove jewellery, splint at about heart level, mark the swelling edge and time, carry him, IV access, monitor, rapid transport to an antivenom hospital; no cut, suck, tourniquet or ice",
              "f": "Correct."
            },
            {
              "t": "Tourniquet above the knee",
              "f": "Worsens local damage."
            },
            {
              "t": "Ice the bite",
              "f": "Harmful."
            },
            {
              "t": "Walk him out quickly",
              "f": "Exertion spreads venom."
            }
          ],
          "correct": 0,
          "explanation": "Tingling lips and metallic taste mean systemic envenomation.",
          "kpi": "Provides correct prehospital snakebite care"
        },
        {
          "id": "crit_8_5_2",
          "scenario": "7-year-old (22 kg) stung by a bee 15 minutes ago: widespread hives, hoarse voice, wheeze, lips swelling.",
          "question": "Assessment and treatment?",
          "options": [
            {
              "t": "Anaphylaxis: epinephrine IM 0.01 mg/kg into the outer thigh (or the 0.15 mg auto-injector), oxygen, position of comfort, repeat after 5 minutes if needed, transport",
              "f": "Correct."
            },
            {
              "t": "Antihistamine and watch",
              "f": "Airway involvement needs epinephrine."
            },
            {
              "t": "Albuterol only",
              "f": "Doesn't treat the swelling or shock."
            },
            {
              "t": "Wait to see if it settles",
              "f": "Delay kills."
            }
          ],
          "correct": 0,
          "explanation": "Observe in hospital; reactions can return.",
          "kpi": "Recognizes pediatric anaphylaxis and gives IM epinephrine"
        },
        {
          "id": "crit_8_5_3",
          "scenario": "Traveller in northern Australia bitten on the ankle by a brown snake while walking; little pain, no swelling.",
          "question": "First aid?",
          "options": [
            {
              "t": "Pressure-immobilisation bandage over the whole limb and a splint, keep still, call for transport to an antivenom hospital",
              "f": "Correct."
            },
            {
              "t": "Nothing: no swelling means no venom",
              "f": "Australian elapids cause little local reaction."
            },
            {
              "t": "Tourniquet",
              "f": "Not recommended."
            },
            {
              "t": "Wash the bite thoroughly",
              "f": "Don't wash: hospitals may test venom from the site."
            }
          ],
          "correct": 0,
          "explanation": "Watch for bleeding and paralysis.",
          "kpi": "Applies pressure-immobilisation for an elapid bite"
        }
      ]
    },
    {
      "id": "c8s6",
      "shortTitle": "8.6 Hazardous Materials & Radiation",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Hazardous Materials & Radiation",
        "lead": "Don't become a casualty. Approach from upwind and uphill, stop at a distance, identify the substance from placards and the Emergency Response Guidebook, and work in the cold zone. Strip patients – removing clothing removes most contamination – and remember that irradiated patients are not radioactive.",
        "sections": [
          {
            "type": "steps",
            "title": "Arriving",
            "icon": "triangle-alert",
            "steps": [
              {
                "title": "Upwind, uphill, upstream",
                "text": "Stop well back: at least 100 m (330 feet) until the guidebook gives a distance."
              },
              {
                "title": "Identify from afar",
                "text": "Placards, UN numbers, labels, shipping papers, binoculars. Look them up in the Emergency Response Guidebook."
              },
              {
                "title": "Isolate and deny entry",
                "text": "Keep people out; call hazmat; report with METHANE."
              },
              {
                "title": "Zones",
                "text": "Hot (contamination), warm (decontamination), cold (treatment and staging). EMS works in the cold zone unless trained and equipped."
              }
            ]
          },
          {
            "type": "table",
            "title": "Placard colours",
            "icon": "flag",
            "stack": true,
            "columns": [
              "Colour",
              "Hazard"
            ],
            "rows": [
              [
                "Orange",
                "Explosives (class 1)"
              ],
              [
                "Red",
                "Flammable gas or liquid (classes 2.1 and 3)"
              ],
              [
                "Green",
                "Non-flammable gas (2.2)"
              ],
              [
                "White with skull",
                "Toxic gas or poison (2.3, 6)"
              ],
              [
                "Red and white stripes",
                "Flammable solid (4.1)"
              ],
              [
                "Yellow",
                "Oxidiser (5)"
              ],
              [
                "Yellow and white with trefoil",
                "Radioactive (7)"
              ],
              [
                "Black and white",
                "Corrosive (8)"
              ]
            ]
          },
          {
            "type": "table",
            "title": "PPE levels",
            "icon": "shield",
            "stack": true,
            "columns": [
              "Level",
              "Protection"
            ],
            "rows": [
              [
                "A",
                "Fully encapsulated, vapour-tight suit with SCBA"
              ],
              [
                "B",
                "SCBA with a splash suit: highest breathing protection"
              ],
              [
                "C",
                "Air-purifying respirator and splash suit: known agent, enough oxygen"
              ],
              [
                "D",
                "Work uniform: no respiratory hazard"
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Decontamination",
            "icon": "droplet",
            "steps": [
              {
                "title": "Strip",
                "text": "Removing clothing removes most contamination (up to 90%). Bag it."
              },
              {
                "title": "Rinse",
                "text": "Plenty of lukewarm, low-pressure water; soap for oily agents. Dry powders: brush off first."
              },
              {
                "title": "Life before decon",
                "text": "Airway, bleeding control and antidotes can't wait – done by protected staff."
              }
            ]
          },
          {
            "type": "table",
            "title": "Common toxic exposures",
            "icon": "flask-conical",
            "stack": true,
            "columns": [
              "Agent",
              "Signs",
              "Treat"
            ],
            "rows": [
              [
                "Organophosphates, nerve agents",
                "SLUDGEM: secretions, sweating, small pupils, slow pulse, twitching",
                "Atropine until secretions dry; pralidoxime; benzodiazepine for seizures"
              ],
              [
                "Cyanide (fires, industry)",
                "Sudden collapse, seizures, high lactate, little cyanosis",
                "Oxygen; hydroxocobalamin 5 g IV over 15 minutes (child 70 mg/kg)"
              ],
              [
                "Carbon monoxide",
                "Headache, confusion; SpO₂ normal",
                "100% oxygen; hyperbaric if severe"
              ],
              [
                "Chlorine, ammonia",
                "Eye and airway burning, cough, wheeze",
                "Remove from area, oxygen, bronchodilators"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Radiation",
            "icon": "zap",
            "stack": true,
            "columns": [
              "Term or sign",
              "Meaning"
            ],
            "rows": [
              [
                "Irradiated",
                "Exposed but carries no radioactive material: no risk to you"
              ],
              [
                "Contaminated",
                "Radioactive material on or in them: strip and wash, but treat life threats first"
              ],
              [
                "Protection",
                "Time (less), distance (more), shielding"
              ],
              [
                "Vomiting within 10 minutes",
                "Very high dose, likely fatal (over 8 Gy)"
              ],
              [
                "Vomiting within 1–2 hours",
                "Moderate dose (about 2–4 Gy)"
              ],
              [
                "Vomiting after 2 hours, or none",
                "Low dose, likely under 2 Gy"
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
                    "label": "METHANE report",
                    "sub": "First report from a hazmat scene",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  },
                  {
                    "label": "BDLS review",
                    "sub": "Disaster life support",
                    "href": "../pages/bdls.html",
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
          "q": "Truck crash with a greenish-yellow cloud and bleach smell; the driver is coughing near the truck. You:",
          "options": [
            "Stop upwind and uphill at a distance, identify from afar, call hazmat",
            "Run to the driver",
            "Approach from downwind to read the placard",
            "Treat the driver where he is"
          ],
          "correct": 0,
          "explanation": "Likely chlorine; don't become a casualty."
        },
        {
          "q": "Your role in the warm zone helping decontaminate patients exposed to a known agent with adequate oxygen. Usual PPE?",
          "options": [
            "Level C: splash suit with air-purifying respirator (Level B if unknown)",
            "Level D",
            "None",
            "Street clothes and gloves"
          ],
          "correct": 0,
          "explanation": "Level C needs a known agent."
        },
        {
          "q": "Sprayed with farm pesticide: drooling, tearing, vomiting, diarrhoea, small pupils, wheeze, slow pulse. Treatment?",
          "options": [
            "Decontaminate (protected), atropine until secretions dry, pralidoxime, oxygen",
            "Oxygen only",
            "Naloxone",
            "Milk eye rinse"
          ],
          "correct": 0,
          "explanation": "Cholinergic crisis from organophosphate."
        },
        {
          "q": "Firefighter from a smoky fire: confused, seizure, low BP, SpO₂ normal. Besides CO, suspect:",
          "options": [
            "Cyanide: hydroxocobalamin 5 g IV",
            "Heat exhaustion",
            "Anxiety",
            "Asthma"
          ],
          "correct": 0,
          "explanation": "Smoke contains cyanide from burning plastics."
        },
        {
          "q": "A yellow placard indicates:",
          "options": [
            "An oxidiser (class 5)",
            "Flammable liquid",
            "Radioactive material",
            "Corrosive"
          ],
          "correct": 0,
          "explanation": "Radioactive placards are yellow and white with a trefoil."
        },
        {
          "q": "Subway chemical release: people streaming out coughing, some collapsed inside. You:",
          "options": [
            "Set up triage and decontamination upwind outside; don't enter without proper PPE",
            "Go in to rescue",
            "Triage inside",
            "Send everyone to hospital undecontaminated"
          ],
          "correct": 0,
          "explanation": "Contaminated patients spread the hazard to hospitals."
        },
        {
          "q": "Worker splashed with hydrogen cyanide, unconscious and seizing. You:",
          "options": [
            "Protected staff remove him and decontaminate; oxygen and hydroxocobalamin",
            "Wait for hazmat to treat",
            "Activated charcoal",
            "Large amounts of water to drink"
          ],
          "correct": 0,
          "explanation": "Rescuers need SCBA-level protection."
        },
        {
          "q": "A vial of radioactive iodine broke in a lab; no visible contamination on the worker. Most accurate?",
          "options": [
            "Survey him; if not contaminated he's simply irradiated and poses no risk",
            "Full decontamination is always needed",
            "Evacuate a 1-mile radius",
            "He's radioactive: isolate him"
          ],
          "correct": 0,
          "explanation": "Irradiated people don't emit radiation."
        },
        {
          "q": "The single most effective decontamination step:",
          "options": [
            "Removing clothing",
            "Scrubbing hard",
            "Hot water",
            "Bleach on skin"
          ],
          "correct": 0,
          "explanation": "Removes up to 90% of contamination."
        },
        {
          "q": "Vomiting within 10 minutes of radiation exposure suggests:",
          "options": [
            "A very high, likely fatal dose",
            "A low dose",
            "Anxiety only",
            "No exposure"
          ],
          "correct": 0,
          "explanation": "Earlier vomiting means a higher dose."
        },
        {
          "q": "Placard with a skull and crossbones on white:",
          "options": [
            "Toxic gas or poison",
            "Flammable solid",
            "Oxidiser",
            "Corrosive"
          ],
          "correct": 0,
          "explanation": "Red and white stripes are flammable solids."
        }
      ],
      "flashcards": [
        {
          "question": "Hazmat zones",
          "answer": "Hot (contamination; trained entry only), warm (decontamination), cold (treatment, command, staging). EMS treats in the cold zone.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Most effective decontamination step",
          "answer": "Remove the clothing (up to 90% of contamination), then rinse with plenty of low-pressure lukewarm water.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Irradiation vs contamination",
          "answer": "Irradiated: exposed, not radioactive – no risk to you. Contaminated: radioactive material on or in them – decontaminate, but treat life threats first.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "SLUDGEM",
          "answer": "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis – cholinergic crisis from organophosphates or nerve agents. Watch the killer Bs: bronchorrhoea, bronchospasm, bradycardia.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Nerve agent antidotes",
          "answer": "Atropine (dries secretions, titrate to dry chest), pralidoxime (reactivates the enzyme), benzodiazepine for seizures.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Cyanide antidote",
          "answer": "Hydroxocobalamin 5 g IV over 15 minutes (child 70 mg/kg). Turns skin and urine red.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Toxic gas placard",
          "answer": "White with a skull and crossbones (class 2.3). Flammable gas: red. Non-flammable gas: green.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Four PPE levels",
          "answer": "A: vapour-tight with SCBA. B: SCBA with splash suit. C: air-purifying respirator, known agent. D: work uniform.",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Time to vomiting after radiation",
          "answer": "Within 10 minutes: likely fatal dose. Within 1–2 hours: moderate (about 2–4 Gy). After 2 hours or none: low dose (under 2 Gy).",
          "category": "Hazardous Materials & Radiation"
        },
        {
          "question": "Emergency Response Guidebook",
          "answer": "The orange book on every response vehicle: look up UN numbers or names for hazards, isolation distances and first aid.",
          "category": "Hazardous Materials & Radiation"
        }
      ],
      "critical": [
        {
          "id": "crit_8_6_1",
          "scenario": "Factory 'chemical exposure': a worker in a stained suit walks toward your ambulance carrying an unlabelled container, coughing.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Stop him at a distance, tell him to put the container down, stay upwind, isolate the area, call hazmat; decontaminate before treatment",
              "f": "Correct."
            },
            {
              "t": "Bring him into the ambulance",
              "f": "Contaminates you and the vehicle."
            },
            {
              "t": "Take the container to identify it",
              "f": "Never handle it."
            },
            {
              "t": "Enter the building to find others",
              "f": "Unknown hazard."
            }
          ],
          "correct": 0,
          "explanation": "A contaminated ambulance is out of service.",
          "kpi": "Recognizes hazmat red flags and prevents secondary contamination"
        },
        {
          "id": "crit_8_6_2",
          "scenario": "City park: about 20 people vomiting, coughing, with watery eyes; some seizing. You have no hazmat PPE.",
          "question": "Plan?",
          "options": [
            {
              "t": "Stay upwind at a distance, declare a mass-casualty chemical incident, call hazmat, direct walking patients upwind to a safe spot, prepare antidotes and triage after decontamination",
              "f": "Correct."
            },
            {
              "t": "Rush in to treat the seizing",
              "f": "You'll become a casualty."
            },
            {
              "t": "Transport the first patients undecontaminated",
              "f": "Spreads contamination."
            },
            {
              "t": "Leave the scene",
              "f": "Command and coordinate from safety."
            }
          ],
          "correct": 0,
          "explanation": "Suspect a nerve agent: miosis and secretions help confirm.",
          "kpi": "Manages a chemical mass-casualty incident safely"
        },
        {
          "id": "crit_8_6_3",
          "scenario": "Postal facility 'white powder': patients have been stripped, washed and are well. One is anxious and asks if he will die.",
          "question": "Management?",
          "options": [
            {
              "t": "Reassure, check vital signs, record his details for public health follow-up; most such incidents are hoaxes, but the substance will be tested",
              "f": "Correct."
            },
            {
              "t": "Start antibiotics yourself",
              "f": "Public health decides on prophylaxis."
            },
            {
              "t": "Isolate him: he's contagious",
              "f": "Anthrax doesn't spread person to person."
            },
            {
              "t": "Repeat decontamination with bleach on skin",
              "f": "Harmful."
            }
          ],
          "correct": 0,
          "explanation": "Fear spreads faster than agents: clear communication matters.",
          "kpi": "Manages psychological impact after a suspected biological exposure"
        }
      ]
    },
    {
      "id": "c8s7",
      "shortTitle": "8.7 CBRNE & Terrorism Response",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "CBRNE & Terrorism Response",
        "lead": "Chemical, biological, radiological, nuclear and explosive events start the same way: several people sick or hurt at once, at one place. Think of a deliberate attack, expect a second device, stay out until police say it's safe, and treat the agent you can recognise.",
        "sections": [
          {
            "type": "list",
            "title": "Suspect an attack when",
            "icon": "triangle-alert",
            "items": [
              "Many casualties with the same signs at once",
              "Unexplained odours, mists, powders or dead animals",
              "An explosion at a crowded or symbolic place",
              "Unusual illness clusters (anthrax, plague, smallpox)"
            ]
          },
          {
            "type": "steps",
            "title": "Explosions and active threats",
            "icon": "siren",
            "steps": [
              {
                "title": "Stage",
                "text": "Out of sight, upwind, away from vehicles and bins; police clear the area for secondary devices."
              },
              {
                "title": "Enter with protection",
                "text": "In a warm zone only with police escort (rescue task force)."
              },
              {
                "title": "Stop bleeding first",
                "text": "Tourniquets, packing, airway; move casualties out fast."
              },
              {
                "title": "Blast injuries",
                "text": "Primary (lungs, ears, bowel), secondary (fragments), tertiary (thrown), quaternary (burns, crush)."
              }
            ]
          },
          {
            "type": "table",
            "title": "Chemical agents",
            "icon": "flask-conical",
            "stack": true,
            "columns": [
              "Agent",
              "Signs",
              "Treat"
            ],
            "rows": [
              [
                "Nerve agents (sarin, VX)",
                "SLUDGEM, pinpoint pupils, wheeze, twitching, seizures",
                "Atropine 2–6 mg IM/IV, repeat every 5 minutes until secretions dry; pralidoxime; midazolam or diazepam for seizures"
              ],
              [
                "Cyanide",
                "Sudden collapse, gasping, seizures",
                "Oxygen; hydroxocobalamin 5 g IV"
              ],
              [
                "Choking agents (chlorine, phosgene)",
                "Chlorine: immediate burning and cough. Phosgene: mild, then lung oedema hours later",
                "Rest, oxygen, observe; anyone exposed to phosgene to hospital"
              ],
              [
                "Blister agents (mustard)",
                "Painless at first; redness and blisters hours later; eyes and lungs",
                "Decontaminate fast; burn-style care"
              ]
            ],
            "notes": [
              "Auto-injector kits (DuoDote and similar) hold atropine 2.1 mg and pralidoxime 600 mg; benzodiazepines are separate."
            ]
          },
          {
            "type": "table",
            "title": "Biological agents",
            "icon": "search",
            "stack": true,
            "columns": [
              "Agent",
              "Clues",
              "Spread"
            ],
            "rows": [
              [
                "Anthrax (inhaled)",
                "Flu-like illness, then shock and a widened mediastinum",
                "Not person to person"
              ],
              [
                "Plague (pneumonic)",
                "Severe pneumonia with bloody sputum",
                "Droplets: masks"
              ],
              [
                "Smallpox",
                "Fever, then a rash densest on the face and limbs, all lesions at the same stage",
                "Airborne and contact: N95"
              ]
            ],
            "notes": [
              "Chickenpox lesions appear in crops at different stages and cluster on the trunk."
            ]
          },
          {
            "type": "list",
            "title": "Radiological and nuclear",
            "icon": "zap",
            "items": [
              "Time, distance, shielding",
              "Treat injuries first: contamination is rarely immediately dangerous to you",
              "Strip and wash; survey if equipment is available"
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
                    "ecg": "sbrady",
                    "label": "Bradycardia",
                    "sub": "Nerve agents slow the heart: atropine.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "BDLS review",
                    "sub": "Disaster life support",
                    "href": "../pages/bdls.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "METHANE report",
                    "sub": "First report",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Many people drooling, tearing, incontinent, with pinpoint pupils after a release. Likely agent and treatment?",
          "options": [
            "Nerve agent (sarin): decontaminate, atropine and pralidoxime",
            "Mustard: burn dressings",
            "Cyanide: hydroxocobalamin",
            "Chlorine: oxygen only"
          ],
          "correct": 0,
          "explanation": "SLUDGEM with miosis."
        },
        {
          "q": "Metal-plating worker: sudden headache, breathlessness, confusion, seizure, flushed skin. Treatment?",
          "options": [
            "Cyanide: hydroxocobalamin 5 g IV",
            "Carbon monoxide: oxygen only",
            "Phosgene: observe",
            "Nerve agent: atropine"
          ],
          "correct": 0,
          "explanation": "Cyanide is used in metal plating."
        },
        {
          "q": "Market explosion; police haven't cleared the scene; a woman with a leg amputation lies near the blast site. You:",
          "options": [
            "Stage safely until police clear the area or escort you in",
            "Run in now",
            "Treat the nearest patient first",
            "Never enter at all"
          ],
          "correct": 0,
          "explanation": "Secondary devices target responders."
        },
        {
          "q": "Smallpox rash vs chickenpox:",
          "options": [
            "Smallpox: densest on face and limbs, all lesions at the same stage",
            "Identical",
            "Smallpox centripetal, chickenpox centrifugal",
            "Smallpox only on palms and soles"
          ],
          "correct": 0,
          "explanation": "Chickenpox: crops at different stages, mainly on the trunk."
        },
        {
          "q": "What does CBRNE stand for?",
          "options": [
            "Chemical, Biological, Radiological, Nuclear, Explosive",
            "Cardiac, Breathing, Respiratory, Neuro, Endocrine",
            "Chemical, Bacterial, Radiation, Noise, Electrical",
            "Contaminated, Burned, Radiated, Nuclear, Exposed"
          ],
          "correct": 0,
          "explanation": "Weapons of mass effect."
        },
        {
          "q": "Nerve agent auto-injector kits contain:",
          "options": [
            "Atropine and pralidoxime",
            "Atropine and diazepam",
            "Epinephrine and atropine",
            "Naloxone and atropine"
          ],
          "correct": 0,
          "explanation": "Benzodiazepines are given separately."
        },
        {
          "q": "Endpoint for atropine in nerve agent poisoning:",
          "options": [
            "Drying of bronchial secretions and easier breathing",
            "Normal pupil size",
            "Heart rate above 150",
            "Patient awake"
          ],
          "correct": 0,
          "explanation": "Pupils may stay small."
        },
        {
          "q": "Phosgene exposure: mild cough now, feels fine. You:",
          "options": [
            "Transport and observe: lung oedema can develop hours later",
            "Release him",
            "Atropine",
            "Hydroxocobalamin"
          ],
          "correct": 0,
          "explanation": "Rest; exertion worsens it."
        },
        {
          "q": "Is inhalational anthrax spread person to person?",
          "options": [
            "No",
            "Yes, by droplets",
            "Yes, airborne",
            "Yes, by touch"
          ],
          "correct": 0,
          "explanation": "Standard precautions are enough."
        },
        {
          "q": "Mustard agent exposure typically shows:",
          "options": [
            "Little at first; redness and blisters hours later",
            "Instant blisters",
            "Pinpoint pupils",
            "Cherry-red skin"
          ],
          "correct": 0,
          "explanation": "Decontaminate even without symptoms."
        }
      ],
      "flashcards": [
        {
          "question": "CBRNE",
          "answer": "Chemical, Biological, Radiological, Nuclear, Explosive.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "SLUDGEM",
          "answer": "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis, Miosis: nerve agents and organophosphates.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "Nerve agent auto-injector kits",
          "answer": "Atropine 2.1 mg and pralidoxime 600 mg (DuoDote and similar; the older Mark I kit was the same pair). Benzodiazepine separately for seizures.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "Mustard (blister agent)",
          "answer": "Delayed: redness and blisters hours after exposure; eyes and lungs too. Decontaminate quickly even if no symptoms.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "Hydroxocobalamin",
          "answer": "Cyanide antidote: 5 g IV over 15 minutes. Turns skin and urine red for days.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "Chlorine vs phosgene",
          "answer": "Chlorine: immediate burning, cough, bleach smell. Phosgene: mild at first, then lung oedema hours later – rest and observe.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "Anthrax forms",
          "answer": "Cutaneous (painless black eschar), inhalational (most lethal: flu-like then shock), gastrointestinal. Not contagious person to person.",
          "category": "CBRNE & Terrorism Response"
        },
        {
          "question": "Radiation protection",
          "answer": "Time (less), distance (more), shielding.",
          "category": "CBRNE & Terrorism Response"
        }
      ],
      "critical": [
        {
          "id": "crit_8_7_1",
          "scenario": "Community centre: about 30 people suddenly drooling, tearing, vomiting, incontinent, some twitching and seizing. Your partner heads inside with the kit.",
          "question": "First action and sequence?",
          "options": [
            {
              "t": "Stop your partner; stay upwind outside, declare a chemical mass-casualty incident, call hazmat, protected staff decontaminate, then atropine and pralidoxime and seizure control",
              "f": "Correct."
            },
            {
              "t": "Follow your partner inside",
              "f": "Two more casualties."
            },
            {
              "t": "Transport the first five without decontamination",
              "f": "Spreads the agent."
            },
            {
              "t": "Wait for a lab diagnosis",
              "f": "Treat by syndrome."
            }
          ],
          "correct": 0,
          "explanation": "Nerve agents kill by secretions and respiratory failure: atropine until dry.",
          "kpi": "Recognizes a nerve agent incident and protects responders"
        },
        {
          "id": "crit_8_7_2",
          "scenario": "A family across two households has fever, severe headache, aches and cough over 24 hours; the father is coughing blood and hypoxic. Similar calls are coming in.",
          "question": "Suspicion and precautions?",
          "options": [
            {
              "t": "Possible pneumonic plague (or another biological agent): masks for patients, N95, gown, gloves and eye protection for you, oxygen, notify hospital and public health",
              "f": "Correct."
            },
            {
              "t": "Ordinary flu: standard care",
              "f": "Clusters with bloody sputum are a red flag."
            },
            {
              "t": "No PPE needed",
              "f": "Plague spreads by droplets."
            },
            {
              "t": "Treat only the sickest",
              "f": "Report the cluster."
            }
          ],
          "correct": 0,
          "explanation": "Early public health notification saves lives.",
          "kpi": "Recognizes a possible bioterrorism cluster and applies precautions"
        },
        {
          "id": "crit_8_7_3",
          "scenario": "Small bin explosion at a public event: a 9-year-old has a deep bleeding thigh wound and a white powder on his clothes. Police are still checking the area.",
          "question": "How do you balance the risks?",
          "options": [
            {
              "t": "Treat him where police allow: pressure or a tourniquet for the bleeding, remove the powdered clothing and bag it, protect yourself, notify hazmat and hospital",
              "f": "Correct."
            },
            {
              "t": "Ignore the powder",
              "f": "Possible contamination."
            },
            {
              "t": "Delay bleeding control until decontamination",
              "f": "Bleeding kills first."
            },
            {
              "t": "Enter the blast area for other victims",
              "f": "Wait for clearance."
            }
          ],
          "correct": 0,
          "explanation": "Life-saving care and gross decontamination happen together.",
          "kpi": "Balances hemorrhage control, contamination and scene safety"
        }
      ]
    },
    {
      "id": "c8s8",
      "shortTitle": "8.8 Mass-Casualty Incidents & Triage",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Mass-Casualty Incidents & Triage",
        "lead": "When patients outnumber resources, the goal changes from the best for each to the most for all. The first crew sets up command, declares the incident and calls for help before treating anyone. Triage quickly, fix only what kills in seconds, and keep re-triaging.",
        "sections": [
          {
            "type": "steps",
            "title": "First crew on scene",
            "icon": "siren",
            "steps": [
              {
                "title": "Safety and size-up",
                "text": "Hazards, number of patients, access."
              },
              {
                "title": "Declare and request",
                "text": "Announce a mass-casualty incident and send a METHANE report; ask for more ambulances early."
              },
              {
                "title": "Command",
                "text": "Take command until relieved; set up triage, treatment and transport areas and staging."
              },
              {
                "title": "Triage, don't treat",
                "text": "Move through everyone; only life-saving actions as you go."
              }
            ]
          },
          {
            "type": "pathways",
            "title": "START (adults)",
            "icon": "list",
            "paths": [
              {
                "title": "Sort",
                "tone": "noshock",
                "steps": [
                  {
                    "text": "Walking: green (minor)."
                  },
                  {
                    "text": "Not breathing: open the airway. Still not breathing: black. Breathing now: red."
                  }
                ]
              },
              {
                "title": "Red if any",
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
            "type": "list",
            "title": "JumpSTART (children)",
            "icon": "baby",
            "items": [
              "For children who look under about 8 years",
              "Not breathing but has a pulse: 5 rescue breaths – breathing returns: red; still not: black",
              "Red if respiratory rate below 15 or above 45/min, no palpable pulse, or inappropriate response to pain (AVPU P or U)"
            ]
          },
          {
            "type": "table",
            "title": "Colours",
            "icon": "flag",
            "stack": true,
            "columns": [
              "Tag",
              "Means"
            ],
            "rows": [
              [
                "Red: immediate",
                "Life threat that can be fixed now"
              ],
              [
                "Yellow: delayed",
                "Serious but can wait"
              ],
              [
                "Green: minor",
                "Walking wounded"
              ],
              [
                "Black: dead or expectant",
                "Comfort care when resources allow"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Life-saving actions during triage",
            "icon": "hand",
            "items": [
              "Control major bleeding (tourniquet)",
              "Open the airway; recovery position",
              "Decompress a tension pneumothorax (ALS)",
              "Auto-injector antidotes"
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
                    "label": "START triage",
                    "sub": "EMS tools",
                    "href": "../pages/ems-tools.html",
                    "icon": "list"
                  },
                  {
                    "label": "METHANE report",
                    "sub": "First report",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  },
                  {
                    "label": "MCI review",
                    "sub": "Major incident questions",
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
          "q": "First EMS unit at a mass-casualty incident should first:",
          "options": [
            "Establish command, declare the incident and request resources",
            "Triage the nearest patient",
            "Set up treatment",
            "Load the most critical patient"
          ],
          "correct": 0,
          "explanation": "Without help coming, triage won't matter."
        },
        {
          "q": "START: not walking, RR 28/min, radial pulse present, doesn't follow commands. Tag?",
          "options": [
            "Red",
            "Green",
            "Yellow",
            "Black"
          ],
          "correct": 0,
          "explanation": "Can't follow commands is a red criterion."
        },
        {
          "q": "JumpSTART: a 6-year-old is not breathing but has a pulse. You:",
          "options": [
            "Give 5 rescue breaths: breathing returns → red; if not → black",
            "Tag black immediately",
            "Start CPR",
            "Tag red and move on"
          ],
          "correct": 0,
          "explanation": "Children often arrest from breathing problems."
        },
        {
          "q": "Walking woman looking for her daughter, small forearm cut. Tag and action?",
          "options": [
            "Green: send her to the green area",
            "Red",
            "Yellow",
            "Black"
          ],
          "correct": 0,
          "explanation": "Reassess later; she may help."
        },
        {
          "q": "Definition of a mass-casualty incident:",
          "options": [
            "Patients outnumber the resources available",
            "More than 100 patients",
            "Any bus crash",
            "Any terror attack"
          ],
          "correct": 0,
          "explanation": "Depends on local resources."
        },
        {
          "q": "START red criteria (RPM):",
          "options": [
            "RR above 30, no radial pulse or refill over 2 seconds, can't follow commands",
            "Any bleeding",
            "Age over 65",
            "Pain score over 7"
          ],
          "correct": 0,
          "explanation": "Respirations, Perfusion, Mental status."
        },
        {
          "q": "In START, the first step that shrinks the patient pool:",
          "options": [
            "Ask everyone who can walk to move to a set area",
            "Check each pulse",
            "Count respirations",
            "Ask names"
          ],
          "correct": 0,
          "explanation": "They're green until re-triaged."
        },
        {
          "q": "JumpSTART respiratory rate that makes a child red:",
          "options": [
            "Below 15 or above 45/min",
            "Above 30/min",
            "Below 10/min only",
            "Above 20/min"
          ],
          "correct": 0,
          "explanation": "Different from the adult cut-off."
        },
        {
          "q": "Triage principle in disasters:",
          "options": [
            "The greatest good for the greatest number",
            "Sickest first always",
            "First come, first served",
            "Youngest first"
          ],
          "correct": 0,
          "explanation": "Resources go where they save most lives."
        },
        {
          "q": "During triage you may stop to:",
          "options": [
            "Apply a tourniquet or open an airway",
            "Splint fractures",
            "Start IVs",
            "Take a full history"
          ],
          "correct": 0,
          "explanation": "Only quick life-saving actions."
        }
      ],
      "flashcards": [
        {
          "question": "Mass-casualty incident",
          "answer": "Any event where patients outnumber the available resources (people, equipment, transport).",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "RPM in START",
          "answer": "Respirations above 30/min, Perfusion (no radial pulse or refill over 2 seconds), Mental status (can't follow commands): any one = red.",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "Triage colours",
          "answer": "Red: immediate. Yellow: delayed. Green: minor (walking wounded). Black: dead or expectant.",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "First step in START",
          "answer": "Everyone who can walk goes to a set area: green.",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "JumpSTART",
          "answer": "For children under about 8: 5 rescue breaths for a child not breathing with a pulse; red if RR below 15 or above 45/min, no pulse, or P/U on AVPU.",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "START respiratory criterion",
          "answer": "Respiratory rate above 30/min: red.",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "Disaster triage principle",
          "answer": "The greatest good for the greatest number.",
          "category": "Mass-Casualty Incidents & Triage"
        },
        {
          "question": "Disaster cycle",
          "answer": "Mitigation, preparedness, response, recovery.",
          "category": "Mass-Casualty Incidents & Triage"
        }
      ],
      "critical": [
        {
          "id": "crit_8_8_1",
          "scenario": "First unit at a highway crash with a school bus and two cars: about 30 patients, chaos, people screaming and wandering.",
          "question": "Sequence of actions?",
          "options": [
            {
              "t": "Safety, declare a mass-casualty incident with a METHANE report and request resources, take command, set up areas and staging, then START triage",
              "f": "Correct."
            },
            {
              "t": "Start treating the first patient",
              "f": "No one coordinates the other 29."
            },
            {
              "t": "Load two red patients and leave",
              "f": "Command first."
            },
            {
              "t": "Wait for a supervisor",
              "f": "The first unit leads until relieved."
            }
          ],
          "correct": 0,
          "explanation": "The first 10 minutes shape the whole incident.",
          "kpi": "Initiates MCI command, notification and triage"
        },
        {
          "id": "crit_8_8_2",
          "scenario": "Building collapse: you've triaged 22 patients. A yellow patient is now breathing 34/min and confused.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Re-triage to red and move him to the red area: triage is continuous",
              "f": "Correct."
            },
            {
              "t": "Leave him yellow",
              "f": "His condition changed."
            },
            {
              "t": "Tag black",
              "f": "He's salvageable."
            },
            {
              "t": "Treat him in place for 20 minutes",
              "f": "Move him to treatment."
            }
          ],
          "correct": 0,
          "explanation": "Re-triage at every handover and transfer.",
          "kpi": "Recognizes the dynamic nature of triage"
        },
        {
          "id": "crit_8_8_3",
          "scenario": "Shooting with 15 victims, scene secure. Three reds: a sucking chest wound with distress; a leg wound with a tourniquet, now stable; an abdominal wound with shock.",
          "question": "Transport order?",
          "options": [
            {
              "t": "Seal the chest wound (vented seal) and send him first; then the abdominal wound in shock; the controlled leg wound last of the reds",
              "f": "Correct."
            },
            {
              "t": "Leg wound first: it was bleeding most",
              "f": "It's controlled now."
            },
            {
              "t": "Abdomen first, ignore the chest",
              "f": "Airway and breathing first."
            },
            {
              "t": "All three in one ambulance",
              "f": "Spread them across hospitals."
            }
          ],
          "correct": 0,
          "explanation": "Distribute patients so no hospital is overwhelmed.",
          "kpi": "Prioritizes transport among immediate patients"
        }
      ]
    },
    {
      "id": "c8s9",
      "shortTitle": "8.9 Incident Command System (ICS)",
      "guide": {
        "group": "c8",
        "groupLabel": "Chapter 8 · Environmental & Disaster",
        "title": "Incident Command System",
        "lead": "ICS gives every incident the same shape, so people from different services can slot in. Know who you report to, stay in your role, and use plain language. As an EMS provider you will usually work in the Medical Branch of Operations: triage, treatment, transport or staging.",
        "sections": [
          {
            "type": "groups",
            "title": "Structure",
            "icon": "layout-grid",
            "groups": [
              {
                "title": "Incident Commander",
                "items": [
                  "Overall responsibility; sets objectives",
                  "Unified Command when several agencies or jurisdictions share authority over one incident"
                ]
              },
              {
                "title": "Command Staff (3)",
                "items": [
                  "Safety Officer: can stop unsafe work",
                  "Public Information Officer: media",
                  "Liaison Officer: other agencies"
                ]
              },
              {
                "title": "General Staff (4 sections)",
                "items": [
                  "Operations: does the work",
                  "Planning: incident action plan, tracking",
                  "Logistics: supplies, food, fuel",
                  "Finance/Administration: costs",
                  "Intelligence/Investigations may be added"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "Medical Branch",
            "icon": "ambulance",
            "stack": true,
            "columns": [
              "Unit",
              "Job"
            ],
            "rows": [
              [
                "Triage",
                "Sort and tag patients; move them to treatment"
              ],
              [
                "Treatment",
                "Red, yellow and green areas; re-triage"
              ],
              [
                "Transport",
                "Assign ambulances and hospitals; track every patient"
              ],
              [
                "Staging",
                "Holds available vehicles until called"
              ],
              [
                "Morgue",
                "With police and coroner"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Principles",
            "icon": "lightbulb",
            "items": [
              "Span of control: 3–7 people per supervisor (about 5 is ideal)",
              "Unity of command: one boss each",
              "Common, plain language – no codes",
              "Command is handed over face to face with a briefing",
              "Resources: assigned, available (in staging) or out of service",
              "Check in when you arrive; check out when released"
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
                    "label": "MCI review",
                    "sub": "Command and triage questions",
                    "href": "../pages/mci.html",
                    "icon": "siren"
                  },
                  {
                    "label": "METHANE report",
                    "sub": "First report to command",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  }
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "A more senior chief arrives 30 minutes into an incident. Command transfers:",
          "options": [
            "After a face-to-face briefing on status, objectives and resources",
            "Automatically by rank",
            "To a second command post",
            "Never during an incident"
          ],
          "correct": 0,
          "explanation": "Announce the change on the radio."
        },
        {
          "q": "Who tracks ambulances and decides which hospital each patient goes to?",
          "options": [
            "Transport Unit Leader",
            "Logistics Section Chief",
            "Planning Section Chief",
            "Public Information Officer"
          ],
          "correct": 0,
          "explanation": "Part of the Medical Branch in Operations."
        },
        {
          "q": "A spill threatens two counties and a state water supply. Command structure?",
          "options": [
            "Unified Command",
            "County A only",
            "State only",
            "Area Command"
          ],
          "correct": 0,
          "explanation": "Shared authority, one plan."
        },
        {
          "q": "Resources in Staging are:",
          "options": [
            "Available: ready for immediate assignment",
            "Out of service",
            "Assigned",
            "Released"
          ],
          "correct": 0,
          "explanation": "Stay with your vehicle and ready."
        },
        {
          "q": "ICS is:",
          "options": [
            "A standard on-scene management structure for any incident",
            "Only for fires",
            "A federal funding programme",
            "A radio system"
          ],
          "correct": 0,
          "explanation": "Scales up and down."
        },
        {
          "q": "Ideal span of control:",
          "options": [
            "3–7, about 5",
            "1–2",
            "10–15",
            "Unlimited"
          ],
          "correct": 0,
          "explanation": "Add supervisors beyond 7."
        },
        {
          "q": "How many Command Staff positions?",
          "options": [
            "3: Safety, Public Information, Liaison",
            "4",
            "5",
            "1"
          ],
          "correct": 0,
          "explanation": "General Staff are the sections."
        },
        {
          "q": "Who can stop any unsafe operation?",
          "options": [
            "Safety Officer",
            "Liaison Officer",
            "Finance Chief",
            "Staging Manager"
          ],
          "correct": 0,
          "explanation": "Stop-work authority."
        },
        {
          "q": "Area Command vs Unified Command:",
          "options": [
            "Area Command oversees several separate incidents; Unified Command shares command of one incident",
            "They are the same",
            "Unified Command is for small incidents only",
            "Area Command is one agency only"
          ],
          "correct": 0,
          "explanation": "Both coordinate, at different levels."
        },
        {
          "q": "Before leaving an incident you must:",
          "options": [
            "Be released and check out (demobilisation)",
            "Just drive away",
            "Tell a colleague",
            "Wait for the media"
          ],
          "correct": 0,
          "explanation": "Accountability for everyone."
        }
      ],
      "flashcards": [
        {
          "question": "Incident Command System",
          "answer": "A standard, all-hazards, on-scene structure that expands and contracts with the incident.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "Span of control",
          "answer": "3–7 people per supervisor, about 5 ideal. More than 7: add a supervisor.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "Command Staff",
          "answer": "Three positions: Safety Officer, Public Information Officer, Liaison Officer.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "General Staff sections",
          "answer": "Four: Operations, Planning, Logistics, Finance/Administration. Intelligence/Investigations may be added as a fifth.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "Where EMS works in ICS",
          "answer": "Operations Section, Medical Branch: triage, treatment, transport, staging.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "Area vs Unified Command",
          "answer": "Area Command oversees several separate incidents. Unified Command: several agencies share command of one incident with one plan.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "Safety Officer authority",
          "answer": "Can stop any operation with an imminent danger, outside the normal chain of command.",
          "category": "Incident Command System (ICS)"
        },
        {
          "question": "Demobilisation",
          "answer": "Orderly, safe release of resources; nobody leaves without being released and checking out.",
          "category": "Incident Command System (ICS)"
        }
      ],
      "critical": [
        {
          "id": "crit_8_9_1",
          "scenario": "You're in the red treatment area after a tornado. A volunteer tells you the 'Incident Commander' wants you to go and search houses.",
          "question": "How do you respond?",
          "options": [
            {
              "t": "Stay in role and check the order through your supervisor (Treatment Unit Leader); move only if it's confirmed",
              "f": "Correct."
            },
            {
              "t": "Go immediately",
              "f": "Unverified orders break unity of command."
            },
            {
              "t": "Ignore it completely",
              "f": "Pass it up the chain."
            },
            {
              "t": "Send your patients to the volunteer",
              "f": "Never abandon patients."
            }
          ],
          "correct": 0,
          "explanation": "Freelancing leaves gaps and puts people at risk.",
          "kpi": "Maintains unity of command and chain of command"
        },
        {
          "id": "crit_8_9_2",
          "scenario": "You're Staging Manager. Operations wants 4 ambulances; you have 8 – but a fire captain has already sent all 8 to the scene without telling you, and 12 more patients need transport.",
          "question": "Response?",
          "options": [
            {
              "t": "Tell Operations staging is empty, request more ambulances, and raise the freelancing through the chain of command",
              "f": "Correct."
            },
            {
              "t": "Say nothing and wait",
              "f": "Operations needs accurate status."
            },
            {
              "t": "Go and take ambulances back",
              "f": "Coordinate through command."
            },
            {
              "t": "Drive patients in your own car",
              "f": "Not safe."
            }
          ],
          "correct": 0,
          "explanation": "Accurate resource status is the point of staging.",
          "kpi": "Communicates resource status and addresses freelancing"
        },
        {
          "id": "crit_8_9_3",
          "scenario": "Unified Command at an apartment fire. A police officer orders you to leave your treatment area and move patients to a bus.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Politely decline and refer him to the Treatment Unit Leader; follow your own chain of command",
              "f": "Correct."
            },
            {
              "t": "Obey: police outrank you",
              "f": "Rank doesn't override the ICS chain."
            },
            {
              "t": "Argue publicly",
              "f": "Stay professional."
            },
            {
              "t": "Leave your patients",
              "f": "Abandonment."
            }
          ],
          "correct": 0,
          "explanation": "Unified Command shares decisions at the top; everyone else follows one supervisor.",
          "kpi": "Applies unity of command within unified command"
        }
      ]
    }
  ]
};
