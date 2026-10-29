/* ========== Chapter 7 – Special Populations ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c7.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c7",
  "title": "Special Populations",
  "shortTitle": "7. Special Populations",
  "sections": [
    {
      "id": "c7s1",
      "shortTitle": "7.1 Obstetrics & Childbirth",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Obstetrics & Childbirth",
        "lead": "Most births need little from you: a warm room, clean hands and patience. Know when birth is too close to move, handle the few true emergencies (cord, breech, stuck shoulders, bleeding, seizures), and remember you now have two patients.",
        "sections": [
          {
            "type": "gate",
            "title": "Deliver here or go?",
            "icon": "clock",
            "question": "Crowning, an urge to push, or contractions 2 minutes apart or closer?",
            "yes": "Birth is imminent: prepare to deliver on scene (or stop the ambulance). Call for a second crew for the newborn.",
            "no": "Transport on her left side. Ask: how many weeks, how many babies, waters broken (and colour), bleeding, problems in this pregnancy."
          },
          {
            "type": "steps",
            "title": "Normal delivery",
            "icon": "baby",
            "steps": [
              {
                "title": "Set up",
                "text": "Warm the room or ambulance (23–25 °C). Delivery kit, two towels, a hat, and a bag-mask with a newborn mask ready."
              },
              {
                "title": "Head",
                "text": "A flat hand on the head prevents an explosive delivery. If the sac is still intact over the head, tear it."
              },
              {
                "title": "Neck",
                "text": "Feel for a cord. Loose: slip it over the head. Too tight: clamp twice and cut between."
              },
              {
                "title": "Shoulders",
                "text": "Guide the head gently down to free the top shoulder, then up for the bottom one. The body follows fast and is slippery."
              },
              {
                "title": "Baby",
                "text": "Dry, skin-to-skin on the mother, cover, hat. Suction only if the airway is blocked (mouth before nose). Check breathing and tone."
              },
              {
                "title": "Cord",
                "text": "Vigorous baby: wait at least 60 seconds before clamping. Clamp about 10 cm from the baby and again 5 cm further out; cut between."
              },
              {
                "title": "Placenta",
                "text": "Usually within 30 minutes. Never pull the cord, and don't wait on scene for it. Bag it and bring it."
              },
              {
                "title": "After",
                "text": "Fundal massage until the uterus is firm, let the baby breastfeed, count soaked pads, recheck vital signs often."
              }
            ]
          },
          {
            "type": "table",
            "title": "APGAR (at 1 and 5 minutes)",
            "icon": "clipboard-list",
            "columns": [
              "Sign",
              "0",
              "1",
              "2"
            ],
            "rows": [
              [
                "Appearance",
                "Blue or pale all over",
                "Blue hands and feet",
                "Pink all over"
              ],
              [
                "Pulse",
                "None",
                "Below 100",
                "100 or more"
              ],
              [
                "Grimace",
                "None",
                "Grimace",
                "Cries, coughs, sneezes"
              ],
              [
                "Activity",
                "Floppy",
                "Some flexion",
                "Active movement"
              ],
              [
                "Respiration",
                "None",
                "Weak, irregular",
                "Strong cry"
              ]
            ],
            "notes": [
              "7–10 is reassuring. Don't wait for the APGAR to start resuscitation: breathing, heart rate and tone decide that."
            ]
          },
          {
            "type": "table",
            "title": "Delivery emergencies",
            "icon": "triangle-alert",
            "stack": true,
            "columns": [
              "Problem",
              "You see",
              "Do"
            ],
            "rows": [
              [
                "Prolapsed cord",
                "Cord at the opening before the baby",
                "Knee-chest position or hips raised. Gloved hand lifts the presenting part off the cord. Keep the cord warm and moist; don't push it back. Go."
              ],
              [
                "Breech",
                "Buttocks or legs first",
                "Hands off until the body is out to the umbilicus, then support it. Head not out after 3 minutes: two fingers in a V either side of the nose to make an airway, and go."
              ],
              [
                "Arm or single leg first",
                "Limb presentation",
                "Can't be delivered in the field: knee-chest position, go."
              ],
              [
                "Shoulder dystocia",
                "Head delivers, then pulls back (turtle sign)",
                "McRoberts (her knees pulled to her chest) plus firm pressure just above the pubic bone. Never pull hard on the head."
              ],
              [
                "Twins",
                "Uterus still large after the first baby",
                "Expect a second baby within minutes and more bleeding. Call for more help."
              ],
              [
                "Meconium",
                "Green or brown fluid",
                "Vigorous baby: routine care. Floppy baby: start breaths within the first minute; no routine suction."
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Bleeding and blood pressure in pregnancy",
            "icon": "droplet",
            "groups": [
              {
                "title": "Bleeding after 20 weeks",
                "items": [
                  "Placenta previa: painless, bright red bleeding",
                  "Placental abruption: pain, hard tender uterus; bleeding may be hidden",
                  "Never do a vaginal exam. Left side, oxygen to target, IV, go"
                ]
              },
              {
                "title": "Pre-eclampsia",
                "items": [
                  "BP 140/90 mmHg or more after 20 weeks, and up to 6 weeks after birth",
                  "Severe: 160/110 mmHg or more, headache, vision changes, upper abdominal pain, confusion",
                  "Eclampsia: a seizure. Left side, airway, oxygen, glucose check, quiet transport"
                ]
              }
            ]
          },
          {
            "type": "steps",
            "title": "Postpartum hemorrhage",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Recognise",
                "text": "1000 mL or more, or any bleeding with signs of shock. A soft, boggy uterus (atony) is the usual cause."
              },
              {
                "title": "Massage",
                "text": "Firm fundal massage until the uterus is hard. Let the baby breastfeed.",
                "level": "BLS"
              },
              {
                "title": "Drugs",
                "text": "Per protocol.",
                "doses": [
                  {
                    "drug": "Oxytocin",
                    "dose": "10 IU IM",
                    "note": "After the baby is born",
                    "level": "ALS"
                  },
                  {
                    "drug": "Tranexamic acid",
                    "dose": "1 g IV over 10 minutes",
                    "note": "Within 3 hours of birth; a second 1 g after 30 minutes if still bleeding",
                    "level": "ALS"
                  }
                ]
              },
              {
                "title": "Shock",
                "text": "Two IVs, keep her warm, small fluid boluses, rapid transport and pre-alert. Don't pack the vagina."
              }
            ]
          },
          {
            "type": "doses",
            "title": "Eclampsia",
            "icon": "syringe",
            "rows": [
              {
                "drug": "Magnesium sulfate",
                "dose": "4–6 g IV over 20–30 minutes",
                "note": "Or 10 g IM (5 g in each buttock) if there is no IV",
                "level": "ALS"
              },
              {
                "drug": "Calcium gluconate",
                "dose": "1 g IV",
                "note": "Magnesium toxicity: knee reflexes gone, respiratory rate below 12/min",
                "level": "ALS"
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
                    "label": "APGAR score",
                    "sub": "EMS tools",
                    "href": "../pages/ems-tools.html",
                    "icon": "baby"
                  },
                  {
                    "label": "Drug calculator",
                    "sub": "Magnesium, oxytocin, tranexamic acid",
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
          "q": "38 weeks, contractions 2 minutes apart, urge to push, head crowning. You should:",
          "options": [
            "Prepare to deliver on scene",
            "Transport supine at once",
            "Apply fundal pressure to slow delivery",
            "Tell her to cross her legs"
          ],
          "correct": 0,
          "explanation": "Crowning means birth will happen before you reach hospital."
        },
        {
          "q": "34 weeks: severe headache, blurred vision, upper abdominal pain, BP 172/108. Most likely?",
          "options": [
            "Pre-eclampsia with severe features",
            "Gestational diabetes",
            "Migraine",
            "Anxiety"
          ],
          "correct": 0,
          "explanation": "160/110 mmHg or more with symptoms is severe. She can seize at any moment: left side, quiet, rapid transport."
        },
        {
          "q": "Pink all over, heart rate 120, cries when stimulated, moving all limbs, crying strongly. APGAR?",
          "options": [
            "10",
            "8",
            "6",
            "4"
          ],
          "correct": 0,
          "explanation": "2 points in each of the five signs."
        },
        {
          "q": "Thick green fluid; the baby is floppy, not breathing, heart rate 80. Priority?",
          "options": [
            "Start PPV within the first minute; suction only if the airway is blocked",
            "Intubate and suction the trachea before any breaths",
            "Rub the back until the baby cries",
            "Chest compressions"
          ],
          "correct": 0,
          "explanation": "Routine tracheal suction for meconium is no longer recommended. Ventilation is the priority."
        },
        {
          "q": "You see the cord at the opening before the baby. Best action?",
          "options": [
            "Knee-chest position, lift the presenting part off the cord with a gloved hand, go",
            "Push the cord back in",
            "Pull gently on the cord",
            "Have her push hard"
          ],
          "correct": 0,
          "explanation": "Keep the cord warm and moist; keep your hand in place until hospital."
        },
        {
          "q": "Breech: the body has delivered but the head hasn't after 3 minutes. Next?",
          "options": [
            "Two fingers in a V either side of the baby's nose to make an airway, and go",
            "Pull firmly on the legs",
            "Push the body back in",
            "Wait another 10 minutes"
          ],
          "correct": 0,
          "explanation": "Keep the airway open until the head delivers or you reach hospital."
        },
        {
          "q": "The head delivers, then pulls back against the perineum. First manoeuvre?",
          "options": [
            "McRoberts plus pressure just above the pubic bone",
            "Pull hard on the head",
            "Fundal pressure",
            "Push the head back in"
          ],
          "correct": 0,
          "explanation": "This is shoulder dystocia (the turtle sign)."
        },
        {
          "q": "Heavy bleeding after birth, uterus soft and boggy. First action?",
          "options": [
            "Firm fundal massage",
            "Pack the vagina",
            "Pull the cord to deliver the placenta",
            "Raise her head"
          ],
          "correct": 0,
          "explanation": "Atony is the most common cause. Massage until firm, breastfeed, oxytocin per protocol."
        },
        {
          "q": "32 weeks, painless bright red vaginal bleeding. Suspect:",
          "options": [
            "Placenta previa: no vaginal exam",
            "Normal labour",
            "Urinary infection",
            "Placental abruption with a hard uterus"
          ],
          "correct": 0,
          "explanation": "Abruption is usually painful with a tender, hard uterus."
        },
        {
          "q": "Why transport a pregnant patient over 20 weeks on her left side?",
          "options": [
            "The uterus compresses the inferior vena cava when she lies flat",
            "To protect the baby's head",
            "It speeds up labour",
            "It lowers her blood sugar"
          ],
          "correct": 0,
          "explanation": "Supine hypotension. If she must be flat, push the uterus to her left by hand."
        },
        {
          "q": "During magnesium for eclampsia, her knee reflexes disappear and her breathing slows. Antidote?",
          "options": [
            "Calcium gluconate 1 g IV",
            "Naloxone",
            "More magnesium",
            "Glucose"
          ],
          "correct": 0,
          "explanation": "Stop the magnesium and support breathing."
        }
      ],
      "flashcards": [
        {
          "question": "Supine hypotension",
          "answer": "After 20 weeks the uterus compresses the inferior vena cava when she lies flat, cutting venous return. Turn her onto her left side, or push the uterus to the left by hand.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Stages of labour",
          "answer": "1st: the cervix opens fully. 2nd: the baby is born. 3rd: the placenta delivers. Some add a 4th: the first hours after birth.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "APGAR",
          "answer": "Appearance, Pulse, Grimace, Activity, Respiration; 0–2 each, at 1 and 5 minutes. 7–10 is reassuring. Resuscitation is guided by breathing, heart rate and tone, not the APGAR.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Suctioning a newborn",
          "answer": "Only if the airway is blocked or the baby needs breaths. Mouth before nose, gently with a bulb; deep suction can slow the heart.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Prolapsed cord",
          "answer": "Knee-chest position or hips raised, gloved hand lifts the presenting part off the cord, keep the cord warm and moist, don't push it back, rapid transport.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Postpartum hemorrhage",
          "answer": "1000 mL or more, or bleeding with shock. Usually atony: fundal massage, breastfeeding, oxytocin 10 IU IM, tranexamic acid 1 g IV within 3 hours, rapid transport.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Signs the placenta is separating",
          "answer": "A gush of blood, the cord lengthens, the uterus becomes firm and rises. Never pull on the cord.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Nuchal cord",
          "answer": "Slip it over the head. If too tight, clamp twice, cut between, unwind it and deliver the baby promptly.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Shoulder dystocia",
          "answer": "The head delivers then pulls back (turtle sign). McRoberts plus pressure just above the pubic bone; never pull hard on the head.",
          "category": "Obstetrics & Childbirth"
        },
        {
          "question": "Pre-eclampsia and eclampsia",
          "answer": "BP 140/90 mmHg or more after 20 weeks (and up to 6 weeks after birth). Severe: 160/110 mmHg or more with headache, vision changes or upper abdominal pain. Eclampsia: seizure – magnesium sulfate per protocol.",
          "category": "Obstetrics & Childbirth"
        }
      ],
      "critical": [
        {
          "id": "crit_7_1_1",
          "scenario": "39 weeks, waters broke 4 hours ago, crowning. As the head delivers you feel the cord wrapped tightly twice around the neck; it won't slip over the head.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Clamp the cord twice, cut between, unwind it and deliver the baby without delay",
              "f": "Correct."
            },
            {
              "t": "Transport with the head delivered",
              "f": "The baby can't breathe or deliver with a tight cord."
            },
            {
              "t": "Pull harder on the head",
              "f": "That tightens the cord and injures the baby."
            },
            {
              "t": "Wait for the next contraction",
              "f": "The cord is strangling the baby now."
            }
          ],
          "correct": 0,
          "explanation": "Then dry, warm, skin-to-skin, check breathing and tone, and record the nuchal cord.",
          "kpi": "Manages a tight nuchal cord during field delivery"
        },
        {
          "id": "crit_7_1_2",
          "scenario": "10 minutes after a field birth, the placenta hasn't delivered. Bright red blood soaks the towels; the uterus is soft and boggy. HR 124, BP 96/62, pale and sweaty.",
          "question": "Diagnosis and priorities?",
          "options": [
            {
              "t": "Postpartum hemorrhage from atony: firm fundal massage, breastfeeding, oxytocin and tranexamic acid per protocol, IV, rapid transport with pre-alert",
              "f": "Correct."
            },
            {
              "t": "Normal bleeding: monitor and transport routinely",
              "f": "Shock signs make this an emergency."
            },
            {
              "t": "Pull the cord to deliver the placenta",
              "f": "That can invert the uterus."
            },
            {
              "t": "Pack the vagina",
              "f": "Not recommended."
            }
          ],
          "correct": 0,
          "explanation": "Tone, trauma, tissue and thrombin are the four causes; tone is the most common.",
          "kpi": "Recognizes postpartum hemorrhage and starts uterine massage and rapid transport"
        },
        {
          "id": "crit_7_1_3",
          "scenario": "32 weeks, first pregnancy: severe headache, blurred vision, swollen for a week, BP 178/114, vomiting. As you move her she has a generalized seizure.",
          "question": "What is this, and your priorities?",
          "options": [
            {
              "t": "Eclampsia: left side, protect the airway, oxygen, check glucose, magnesium sulfate per protocol, rapid quiet transport",
              "f": "Correct."
            },
            {
              "t": "Panic attack: reassure",
              "f": "A seizure with severe hypertension is eclampsia."
            },
            {
              "t": "Restrain her limbs",
              "f": "Never restrain a seizure."
            },
            {
              "t": "Give a glucose drink",
              "f": "Nothing by mouth during a seizure."
            }
          ],
          "correct": 0,
          "explanation": "Magnesium is the drug of choice for eclamptic seizures. Ask about fetal movements once she wakes.",
          "kpi": "Recognizes eclampsia and protects mother and fetus"
        }
      ]
    },
    {
      "id": "c7s2",
      "shortTitle": "7.2 Gynecologic Emergencies",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Gynecologic Emergencies",
        "lead": "Anyone who could be pregnant and has abdominal pain, fainting or shock has a ruptured ectopic pregnancy until proven otherwise. Treat the shock rather than chase the diagnosis. After an assault, care for the person first and protect the evidence second.",
        "sections": [
          {
            "type": "gate",
            "title": "Could this be a ruptured ectopic?",
            "icon": "triangle-alert",
            "question": "Of childbearing age with lower abdominal pain, vaginal bleeding or fainting – and could be pregnant (missed period, even on contraception)?",
            "yes": "Treat as a ruptured ectopic: lie flat, oxygen to target, IV, nothing by mouth, rapid transport, pre-alert. Shoulder-tip pain (Kehr's sign) and shock mean blood in the abdomen.",
            "no": "Still think of ovarian torsion, pelvic infection, a ruptured cyst, appendicitis and kidney stones."
          },
          {
            "type": "table",
            "title": "Pelvic pain: what fits?",
            "icon": "search",
            "stack": true,
            "columns": [
              "Condition",
              "Clues",
              "Priority"
            ],
            "rows": [
              [
                "Ruptured ectopic",
                "Missed period (often 6–8 weeks), one-sided pain, spotting, shoulder-tip pain, fainting",
                "Time-critical: shock"
              ],
              [
                "Miscarriage",
                "Bleeding and cramps before 20 weeks; tissue passed",
                "Count pads, bring any tissue, support"
              ],
              [
                "Ovarian torsion",
                "Sudden severe one-sided pain that comes in waves, vomiting, can't keep still",
                "Time-critical: surgery saves the ovary"
              ],
              [
                "Pelvic inflammatory disease",
                "Pain on both sides, fever, discharge, pain on movement or during sex",
                "Antibiotics; untreated it causes infertility and ectopic pregnancy"
              ],
              [
                "Ruptured ovarian cyst",
                "Sudden pain, often mid-cycle or after sex or exercise",
                "Can bleed like an ectopic"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Vaginal bleeding: always ask",
            "icon": "message-circle-question",
            "items": [
              "Could you be pregnant? When was your last period?",
              "How many pads, and how fast are they soaking?",
              "Pain, fever, dizziness or fainting?",
              "Blood thinners or a bleeding disorder?"
            ]
          },
          {
            "type": "steps",
            "title": "Sexual assault",
            "icon": "shield",
            "steps": [
              {
                "title": "Safety and injuries first",
                "text": "Make the scene safe and treat injuries. Police if the patient wants it or the law requires it."
              },
              {
                "title": "Consent and control",
                "text": "Explain everything and ask before touching. Offer a provider of the gender they prefer when you can."
              },
              {
                "title": "Protect evidence",
                "text": "Ask them not to wash, change, eat, drink, brush teeth or urinate if possible. Put removed clothing in separate paper bags. Don't examine the genitals unless bleeding is severe."
              },
              {
                "title": "Document",
                "text": "Their words in quotes, injuries described objectively, who handled each item of evidence."
              },
              {
                "title": "Destination",
                "text": "A centre with a forensic examiner. HIV prevention must start within 72 hours; emergency contraception works up to 120 hours, better the earlier it is given."
              },
              {
                "title": "Reporting",
                "text": "Adults usually decide whether to report. Children and vulnerable adults are reported according to local law."
              }
            ]
          },
          {
            "type": "list",
            "title": "Don't",
            "icon": "ban",
            "items": [
              "Pack the vagina",
              "Do a vaginal exam",
              "Rely on a negative home pregnancy test when the story fits an ectopic",
              "Throw away passed tissue: bring it in a clean container"
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
                    "label": "Medical assessment",
                    "sub": "Abdominal and pelvic history",
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
          "q": "24-year-old: sudden left lower abdominal pain, spotting, light-headed, 'might be pregnant', BP 86/54, HR 124, left shoulder pain. Most likely?",
          "options": [
            "Ruptured ectopic pregnancy",
            "Ovarian torsion",
            "Pelvic inflammatory disease",
            "Kidney stone"
          ],
          "correct": 0,
          "explanation": "Shoulder-tip pain (Kehr's sign) and shock mean blood in the abdomen: rapid transport."
        },
        {
          "q": "Pain on both sides of the lower abdomen, fever, discharge, pain when the cervix is moved. Most likely?",
          "options": [
            "Pelvic inflammatory disease",
            "Appendicitis",
            "Ectopic pregnancy",
            "Ovarian torsion"
          ],
          "correct": 0,
          "explanation": "Usually sexually transmitted (chlamydia, gonorrhoea)."
        },
        {
          "q": "After a sexual assault she asks to wash and change before hospital. You:",
          "options": [
            "Explain that washing destroys evidence, offer a blanket, and let her decide",
            "Help her shower",
            "Clean the wounds thoroughly",
            "Wait for police before any care"
          ],
          "correct": 0,
          "explanation": "Treat injuries first; preserve evidence where you can; she keeps control."
        },
        {
          "q": "Kehr's sign is:",
          "options": [
            "Shoulder-tip pain from blood under the diaphragm",
            "Bruising around the umbilicus",
            "Pain on moving the cervix",
            "Rebound tenderness"
          ],
          "correct": 0,
          "explanation": "In a woman of childbearing age with abdominal pain, think ruptured ectopic."
        },
        {
          "q": "An ectopic pregnancy usually ruptures:",
          "options": [
            "About 6–8 weeks after the last period",
            "In the third trimester",
            "During labour",
            "After birth"
          ],
          "correct": 0,
          "explanation": "Often before she knows she is pregnant."
        },
        {
          "q": "Sudden severe one-sided pain coming in waves, vomiting, writhing, normal temperature. Suspect:",
          "options": [
            "Ovarian torsion",
            "Pelvic inflammatory disease",
            "Miscarriage",
            "Gastroenteritis"
          ],
          "correct": 0,
          "explanation": "A surgical emergency: the ovary loses its blood supply."
        },
        {
          "q": "She passed tissue during a miscarriage. You:",
          "options": [
            "Bring it to hospital in a clean container",
            "Throw it away",
            "Put it in formalin",
            "Leave it at home"
          ],
          "correct": 0,
          "explanation": "The hospital checks whether the miscarriage is complete."
        },
        {
          "q": "HIV prevention after sexual assault must start within:",
          "options": [
            "72 hours",
            "7 days",
            "30 days",
            "6 months"
          ],
          "correct": 0,
          "explanation": "So go to a centre that can start it."
        },
        {
          "q": "Heavy vaginal bleeding with shock. Which is wrong?",
          "options": [
            "Pack the vagina",
            "Lie her flat",
            "Count pads",
            "IV access and rapid transport"
          ],
          "correct": 0,
          "explanation": "Don't pack; use external pads and count them."
        },
        {
          "q": "Removed clothing after an assault goes into:",
          "options": [
            "Separate paper bags",
            "One plastic bag",
            "The laundry",
            "The patient's handbag"
          ],
          "correct": 0,
          "explanation": "Plastic traps moisture and degrades evidence."
        }
      ],
      "flashcards": [
        {
          "question": "Ectopic pregnancy: classic triad",
          "answer": "Missed period, abdominal or pelvic pain, vaginal bleeding. Rupture causes shock, fainting and shoulder-tip pain (Kehr's sign).",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Kehr's sign",
          "answer": "Shoulder-tip pain from blood irritating the diaphragm. With abdominal pain in a woman of childbearing age: ruptured ectopic (or spleen).",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Evidence after sexual assault",
          "answer": "Treat injuries first. Ask the patient not to wash, change, eat, drink or urinate if possible; separate paper bags for clothing; quote their words; record who handled evidence; centre with a forensic examiner.",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Pelvic inflammatory disease",
          "answer": "Infection of the uterus, tubes and ovaries, usually chlamydia or gonorrhoea: lower abdominal pain, pain on moving the cervix, fever, discharge.",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Ovarian torsion",
          "answer": "The ovary twists on its blood supply: sudden severe one-sided pain, vomiting, often in waves. Time-critical surgery.",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Leading cause of maternal death in the first trimester",
          "answer": "Ruptured ectopic pregnancy. Abdominal pain or fainting in anyone who could be pregnant is ectopic until proven otherwise.",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Types of miscarriage",
          "answer": "Threatened, inevitable, incomplete, complete, missed. You can't tell them apart in the field: treat the bleeding, bring any tissue, support.",
          "category": "Gynecologic Emergencies"
        },
        {
          "question": "Reporting sexual assault",
          "answer": "Adults usually decide whether to report. Suspected abuse of children or vulnerable adults must be reported according to local law.",
          "category": "Gynecologic Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_7_2_1",
          "scenario": "20-year-old, sudden right lower abdominal pain for 2 hours, vomited twice, guarding. BP 106/68, HR 118. Last period 6 weeks ago (usually regular); on the pill.",
          "question": "What must you rule out first, and how?",
          "options": [
            {
              "t": "Ectopic pregnancy: treat as time-critical – oxygen to target, IV, nothing by mouth, rapid transport, pre-alert for ultrasound",
              "f": "Correct."
            },
            {
              "t": "Appendicitis only: routine transport",
              "f": "A missed period makes ectopic the first concern."
            },
            {
              "t": "Ovarian cyst: reassure, no transport",
              "f": "Pain with tachycardia needs hospital."
            },
            {
              "t": "The pill rules out pregnancy",
              "f": "Contraception can fail; ectopic risk remains."
            }
          ],
          "correct": 0,
          "explanation": "Appendicitis is possible, but ectopic rupture can kill within the hour.",
          "kpi": "Considers ectopic pregnancy in a woman of childbearing age with abdominal pain"
        },
        {
          "id": "crit_7_2_2",
          "scenario": "10 weeks pregnant: heavy bleeding with clots since morning; passed tissue 30 minutes ago and saved it. BP 108/72 lying, 92/60 sitting, HR 116.",
          "question": "Diagnosis and management?",
          "options": [
            {
              "t": "Miscarriage with significant blood loss: lie her flat, IV, count pads, bring the tissue, recheck vital signs, emotional support, transport",
              "f": "Correct."
            },
            {
              "t": "Normal early pregnancy spotting",
              "f": "Postural drop and tachycardia mean real blood loss."
            },
            {
              "t": "Pack the vagina",
              "f": "Not recommended."
            },
            {
              "t": "Throw away the tissue",
              "f": "The hospital needs it."
            }
          ],
          "correct": 0,
          "explanation": "Acknowledge the loss; many patients blame themselves.",
          "kpi": "Manages miscarriage with hemodynamic compromise and provides emotional support"
        },
        {
          "id": "crit_7_2_3",
          "scenario": "30-year-old, sudden severe left lower abdominal pain for 3 hours, coming in waves, vomiting, pacing. Negative pregnancy test yesterday; normal period 2 weeks ago. BP 118/76, HR 102, afebrile.",
          "question": "Most likely diagnosis and plan?",
          "options": [
            {
              "t": "Ovarian torsion: rapid transport to a hospital with gynaecology, analgesia per protocol, nothing by mouth",
              "f": "Correct."
            },
            {
              "t": "Kidney stone: routine transport",
              "f": "Possible, but torsion must be excluded urgently."
            },
            {
              "t": "Gastroenteritis: fluids at home",
              "f": "Sudden one-sided pain isn't gastroenteritis."
            },
            {
              "t": "Wait to see if it settles",
              "f": "Every hour reduces the chance of saving the ovary."
            }
          ],
          "correct": 0,
          "explanation": "Partial twisting and untwisting makes the pain come in waves.",
          "kpi": "Recognizes ovarian torsion as a time-sensitive surgical emergency"
        }
      ]
    },
    {
      "id": "c7s3",
      "shortTitle": "7.3 Neonatal Resuscitation",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Neonatal Resuscitation",
        "lead": "Most newborns only need drying, warmth and watching. About 1 in 10 need help to start breathing, and good ventilation fixes almost all of them. Get breaths in within the first minute; compressions and epinephrine are rarely needed.",
        "sections": [
          {
            "type": "gate",
            "title": "The first 30 seconds",
            "icon": "baby",
            "question": "Term, good tone, breathing or crying?",
            "yes": "Stay with the mother: skin-to-skin, dry, cover, hat. Watch breathing, colour and tone. Delay cord clamping at least 60 seconds.",
            "no": "Warm, dry and stimulate. Position the head neutral (\"sniffing\"); clear secretions only if they block the airway."
          },
          {
            "type": "steps",
            "title": "Newborn resuscitation",
            "icon": "heart-pulse",
            "steps": [
              {
                "title": "Not breathing, gasping, or HR below 100",
                "text": "Start PPV within 60 seconds of birth: 40–60 breaths/min at 20–25 cmH₂O. Room air (21%) at 35 weeks or more; 21–30% under 35 weeks. Pulse oximeter on the right hand.",
                "level": "BLS"
              },
              {
                "title": "Is the chest rising?",
                "text": "If not, MR. SOPA: Mask seal, Reposition, Suction, Open the mouth, Pressure up (to 40 cmH₂O at most), Alternative airway.",
                "level": "BLS"
              },
              {
                "title": "HR below 60 after 30 seconds of breaths that move the chest",
                "text": "Compressions: two thumbs on the lower third of the sternum, one-third of the chest depth, 3:1 (90 compressions and 30 breaths per minute). Oxygen to 100%. Recheck HR every 60 seconds.",
                "level": "BLS"
              },
              {
                "title": "HR still below 60",
                "text": "Epinephrine and, if blood loss is likely, volume.",
                "level": "ALS",
                "doses": [
                  {
                    "drug": "Epinephrine",
                    "dose": "0.02 mg/kg IV/IO (0.01–0.03 mg/kg)",
                    "note": "0.1 mg/mL; every 3–5 minutes. Via ET tube 0.1 mg/kg while access is obtained",
                    "level": "ALS"
                  },
                  {
                    "drug": "Normal saline",
                    "dose": "10 mL/kg over 5–10 minutes",
                    "note": "Suspected blood loss or shock",
                    "level": "ALS"
                  }
                ]
              },
              {
                "title": "HR 60 or more",
                "text": "Stop compressions. Keep ventilating until HR is 100 or more and the baby breathes."
              }
            ]
          },
          {
            "type": "table",
            "title": "Pre-ductal SpO₂ targets (right hand)",
            "icon": "target",
            "columns": [
              "After birth",
              "Target"
            ],
            "rows": [
              [
                "1 minute",
                "60–65%"
              ],
              [
                "2 minutes",
                "65–70%"
              ],
              [
                "3 minutes",
                "70–75%"
              ],
              [
                "4 minutes",
                "75–80%"
              ],
              [
                "5 minutes",
                "80–85%"
              ],
              [
                "10 minutes",
                "85–95%"
              ]
            ],
            "notes": [
              "Healthy newborns take about 10 minutes to reach normal saturation. Blue hands and feet (acrocyanosis) are normal at first."
            ]
          },
          {
            "type": "list",
            "title": "Keep warm (36.5–37.5 °C)",
            "icon": "thermometer",
            "items": [
              "Dry, then remove the wet towel",
              "Skin-to-skin on the mother, cover both, hat on",
              "Room or ambulance 23–25 °C",
              "Under 32 weeks: plastic bag up to the neck without drying, then a hat"
            ]
          },
          {
            "type": "table",
            "title": "Airway sizes",
            "icon": "ruler",
            "columns": [
              "Gestation",
              "Weight",
              "ET tube"
            ],
            "rows": [
              [
                "Under 28 weeks",
                "Under 1 kg",
                "2.5 mm"
              ],
              [
                "28–34 weeks",
                "1–2 kg",
                "3.0 mm"
              ],
              [
                "Over 34 weeks",
                "Over 2 kg",
                "3.5 mm"
              ]
            ],
            "notes": [
              "Tube depth at the lip: weight in kg + 6 cm.",
              "A size 1 laryngeal mask works from 34 weeks or 2 kg."
            ]
          },
          {
            "type": "list",
            "title": "Don't",
            "icon": "ban",
            "items": [
              "Routine suction of the mouth, nose or trachea, including for meconium",
              "Slap, shake or hold the baby upside down",
              "Naloxone during resuscitation: ventilate instead",
              "100% oxygen for the first breaths of a term baby"
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
                    "sub": "In a newborn, slow heart rate means poor breathing: ventilate first.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "APGAR score",
                    "sub": "EMS tools",
                    "href": "../pages/ems-tools.html",
                    "icon": "baby"
                  },
                  {
                    "label": "PEPP review",
                    "sub": "Pediatric prehospital care",
                    "href": "../pages/pepp.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "Drug calculator",
                    "sub": "Weight-based doses",
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
          "q": "After drying and stimulating, a term baby has poor breathing and HR 80. Next?",
          "options": [
            "PPV at 40–60 breaths/min",
            "Chest compressions",
            "Epinephrine",
            "Tracheal suction"
          ],
          "correct": 0,
          "explanation": "HR below 100 or poor breathing means PPV. Compressions only if HR stays below 60 after 30 seconds of good breaths."
        },
        {
          "q": "32 weeks, breathing, HR 110, blue hands and feet, pink body at 2 minutes. Best care?",
          "options": [
            "Keep warm and monitor SpO₂ against the minute targets",
            "Start PPV",
            "Start compressions",
            "Give naloxone"
          ],
          "correct": 0,
          "explanation": "Blue hands and feet are normal early. Breathing with HR 100 or more doesn't need PPV."
        },
        {
          "q": "HR stays at 50 after 30 seconds of PPV that moves the chest. Next?",
          "options": [
            "Compressions at 3:1 with 100% oxygen; prepare epinephrine",
            "Another 30 seconds of PPV only",
            "Stop resuscitation",
            "Use an adult bag-mask"
          ],
          "correct": 0,
          "explanation": "Epinephrine if HR is still below 60 after compressions and ventilation."
        },
        {
          "q": "Starting oxygen for PPV in a term baby:",
          "options": [
            "21% (room air)",
            "100%",
            "50%",
            "No oxygen source needed"
          ],
          "correct": 0,
          "explanation": "21–30% under 35 weeks; titrate to the SpO₂ targets."
        },
        {
          "q": "Newborn compression-to-ventilation ratio:",
          "options": [
            "3:1",
            "30:2",
            "15:2",
            "5:1"
          ],
          "correct": 0,
          "explanation": "90 compressions and 30 breaths per minute."
        },
        {
          "q": "IV/IO epinephrine dose for a newborn:",
          "options": [
            "0.02 mg/kg (0.01–0.03 mg/kg)",
            "1 mg",
            "0.1 mg/kg IV",
            "0.5 mg/kg"
          ],
          "correct": 0,
          "explanation": "0.1 mg/kg is the ET-tube dose, not the IV dose."
        },
        {
          "q": "Target pre-ductal SpO₂ at 5 minutes:",
          "options": [
            "80–85%",
            "95–100%",
            "60–65%",
            "70–75%"
          ],
          "correct": 0,
          "explanation": "85–95% by 10 minutes."
        },
        {
          "q": "A 29-week baby should be kept warm by:",
          "options": [
            "A plastic bag up to the neck without drying, plus a hat",
            "Drying vigorously and a blanket only",
            "A cold room to reduce oxygen use",
            "A bath"
          ],
          "correct": 0,
          "explanation": "Under 32 weeks: plastic wrap; target 36.5–37.5 °C."
        },
        {
          "q": "No chest rise during PPV despite a good mask seal. First fixes?",
          "options": [
            "Reposition the head, suction if blocked, open the mouth, then raise the pressure",
            "Start compressions",
            "Stop ventilating",
            "Give epinephrine"
          ],
          "correct": 0,
          "explanation": "MR. SOPA: compressions without ventilation won't help."
        },
        {
          "q": "Stop chest compressions when the heart rate is:",
          "options": [
            "60 or more",
            "Above 30",
            "Above 160",
            "Only when the baby cries"
          ],
          "correct": 0,
          "explanation": "Continue PPV until HR is 100 or more and breathing is effective."
        }
      ],
      "flashcards": [
        {
          "question": "Fetal shunts at birth",
          "answer": "Ductus venosus, foramen ovale, ductus arteriosus. Breathing lowers lung pressure: the foramen ovale closes and the ductus arteriosus starts to constrict.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "Newborn resuscitation sequence",
          "answer": "Warm, dry, stimulate, position. Apnoea or HR below 100 → PPV within 60 seconds. HR below 60 after 30 seconds of good breaths → compressions 3:1. Still below 60 → epinephrine.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "Preventing hypothermia",
          "answer": "Dry, remove wet towels, skin-to-skin, hat, room 23–25 °C. Under 32 weeks: plastic bag up to the neck. Target 36.5–37.5 °C.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "PPV settings",
          "answer": "40–60 breaths/min, 20–25 cmH₂O to start, room air at 35 weeks or more. Watch for chest rise; no rise → MR. SOPA.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "Newborn compressions",
          "answer": "Two thumbs on the lower third of the sternum, one-third of the chest depth, 3:1 (90 compressions and 30 breaths per minute). Oxygen to 100%.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "Meconium",
          "answer": "Vigorous baby: routine care. Floppy baby: start PPV within the first minute. Routine tracheal suction is no longer recommended; suction only if the airway is blocked.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "Newborn epinephrine",
          "answer": "0.02 mg/kg IV/IO (range 0.01–0.03 mg/kg) of 0.1 mg/mL, every 3–5 minutes, if HR stays below 60. ET tube: 0.1 mg/kg.",
          "category": "Neonatal Resuscitation"
        },
        {
          "question": "Newborn ET tube size",
          "answer": "Under 28 weeks 2.5 mm; 28–34 weeks 3.0 mm; over 34 weeks 3.5 mm. Depth at the lip: weight in kg + 6 cm.",
          "category": "Neonatal Resuscitation"
        }
      ],
      "critical": [
        {
          "id": "crit_7_3_1",
          "scenario": "Born at home 5 minutes ago, term, covered in thick green fluid: floppy, not breathing, HR 70 after drying and stimulating.",
          "question": "Priority sequence?",
          "options": [
            {
              "t": "PPV now (40–60 breaths/min, room air), check chest rise; suction only if the airway is blocked; compressions if HR stays below 60 after 30 seconds of good breaths",
              "f": "Correct."
            },
            {
              "t": "Intubate and suction the trachea before any breaths",
              "f": "No longer recommended: it delays ventilation."
            },
            {
              "t": "Keep stimulating until the baby cries",
              "f": "Stimulation alone wastes the first minute."
            },
            {
              "t": "Compressions first",
              "f": "HR 70 needs ventilation, not compressions."
            }
          ],
          "correct": 0,
          "explanation": "Ventilation is the most important step; keep the baby warm and transport with the mother.",
          "kpi": "Starts PPV promptly in a non-vigorous meconium-stained newborn"
        },
        {
          "id": "crit_7_3_2",
          "scenario": "35 weeks, limp and apnoeic. After 30 seconds of PPV at 20 cmH₂O, HR is 55 and the chest isn't rising. The mask seal looks good.",
          "question": "What next?",
          "options": [
            {
              "t": "Fix ventilation first: reposition, suction if blocked, open the mouth, increase pressure (up to 40 cmH₂O), consider an alternative airway – then reassess HR",
              "f": "Correct."
            },
            {
              "t": "Start compressions now",
              "f": "Without chest rise, compressions won't oxygenate the heart."
            },
            {
              "t": "Epinephrine first",
              "f": "The problem is ventilation."
            },
            {
              "t": "Stop: the baby isn't viable",
              "f": "Effective ventilation usually works."
            }
          ],
          "correct": 0,
          "explanation": "Compressions start only after 30 seconds of breaths that move the chest.",
          "kpi": "Applies MR. SOPA ventilation corrective steps before escalating"
        },
        {
          "id": "crit_7_3_3",
          "scenario": "32 weeks, born at home, room 17 °C. Breathing with mild nasal flaring, HR 110, pale, thin translucent skin.",
          "question": "Biggest threats and priorities?",
          "options": [
            {
              "t": "Hypothermia, breathing problems and low glucose: plastic wrap or skin-to-skin with a hat, warm ambulance, SpO₂ monitoring, CPAP or PPV if breathing worsens, check glucose, neonatal centre",
              "f": "Correct."
            },
            {
              "t": "Stable: transport without extra measures",
              "f": "Preterm babies lose heat fast."
            },
            {
              "t": "Bath to clean the baby",
              "f": "That causes heat loss."
            },
            {
              "t": "Routine deep suction",
              "f": "Harmful and not needed."
            }
          ],
          "correct": 0,
          "explanation": "Cold preterm babies die more often; warmth is the first treatment.",
          "kpi": "Prioritizes thermoregulation and monitoring in a preterm newborn"
        }
      ]
    },
    {
      "id": "c7s4",
      "shortTitle": "7.4 Pediatric Assessment & Emergencies",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Pediatric Assessment & Emergencies",
        "lead": "Children compensate well, then crash. Most pediatric arrests start as a breathing problem or shock, so spot distress early from the doorway, treat it calmly with the parent close by, and use length-based doses.",
        "sections": [
          {
            "type": "groups",
            "title": "Pediatric Assessment Triangle (from the doorway)",
            "icon": "eye",
            "groups": [
              {
                "title": "Appearance (TICLS)",
                "items": [
                  "Tone",
                  "Interactiveness",
                  "Consolability",
                  "Look or gaze",
                  "Speech or cry"
                ]
              },
              {
                "title": "Work of breathing",
                "items": [
                  "Noises: stridor, grunting, wheeze",
                  "Position: tripod, sniffing",
                  "Retractions, nasal flaring, head bobbing"
                ]
              },
              {
                "title": "Circulation to skin",
                "items": [
                  "Pallor",
                  "Mottling",
                  "Cyanosis"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "What the triangle tells you",
            "icon": "search",
            "stack": true,
            "columns": [
              "Triangle",
              "Impression"
            ],
            "rows": [
              [
                "Appearance normal, breathing hard",
                "Respiratory distress"
              ],
              [
                "Appearance abnormal, breathing hard or too slow",
                "Respiratory failure"
              ],
              [
                "Appearance normal, skin abnormal",
                "Compensated shock"
              ],
              [
                "Appearance and skin abnormal",
                "Decompensated shock"
              ],
              [
                "Appearance abnormal only",
                "Brain or metabolic problem: check glucose"
              ],
              [
                "All three abnormal",
                "Cardiopulmonary failure"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Normal vital signs (awake)",
            "icon": "activity",
            "stack": true,
            "columns": [
              "Age",
              "Heart rate",
              "Breathing",
              "Hypotension: systolic"
            ],
            "rows": [
              [
                "Newborn (to 28 days)",
                "100–205",
                "30–53",
                "Below 60 mmHg"
              ],
              [
                "Infant (to 1 year)",
                "100–180",
                "30–53",
                "Below 70 mmHg"
              ],
              [
                "Toddler (1–2 years)",
                "98–140",
                "22–37",
                "Below 70 + (2 × age in years)"
              ],
              [
                "Preschool (3–5 years)",
                "80–120",
                "20–28",
                "Below 70 + (2 × age in years)"
              ],
              [
                "School age (6–11 years)",
                "75–118",
                "18–25",
                "Below 70 + (2 × age) to 10 years; then below 90 mmHg"
              ],
              [
                "Adolescent (12–15 years)",
                "60–100",
                "12–20",
                "Below 90 mmHg"
              ]
            ],
            "notes": [
              "Tachycardia comes first; low blood pressure is a late sign.",
              "Use a length-based tape (up to about 36 kg) for weight, doses and equipment."
            ]
          },
          {
            "type": "table",
            "title": "Stridor: croup or epiglottitis?",
            "icon": "wind",
            "stack": true,
            "columns": [
              "Feature",
              "Croup",
              "Epiglottitis"
            ],
            "rows": [
              [
                "Onset",
                "Over days, after a cold",
                "Hours, high fever, looks toxic"
              ],
              [
                "Cough",
                "Barking",
                "Little or none"
              ],
              [
                "Drooling, tripod",
                "No",
                "Yes; muffled voice"
              ],
              [
                "Do",
                "Keep calm on the parent's lap; nebulized epinephrine for stridor at rest; dexamethasone",
                "Don't look in the throat or lay the child down; oxygen as tolerated; go with pre-alert"
              ]
            ]
          },
          {
            "type": "doses",
            "title": "Breathing drugs",
            "icon": "syringe",
            "rows": [
              {
                "drug": "Albuterol (asthma)",
                "dose": "2.5–5 mg nebulized",
                "note": "Or 4–8 puffs with a spacer; repeat as needed"
              },
              {
                "drug": "Ipratropium (asthma)",
                "dose": "250–500 mcg nebulized",
                "note": "With albuterol for moderate or severe attacks",
                "level": "ALS"
              },
              {
                "drug": "Epinephrine (croup)",
                "dose": "0.5 mL/kg of 1 mg/mL nebulized",
                "note": "Maximum 5 mL; stridor at rest",
                "level": "ALS"
              },
              {
                "drug": "Dexamethasone (croup, asthma)",
                "dose": "0.6 mg/kg",
                "note": "Maximum 16 mg; oral, IM or IV",
                "level": "ALS"
              }
            ]
          },
          {
            "type": "gate",
            "title": "Choking",
            "icon": "triangle-alert",
            "question": "Coughing forcefully, crying or speaking?",
            "yes": "Mild obstruction: let them cough, keep things calm, transport and watch for change.",
            "no": "Severe: over 1 year, abdominal thrusts; under 1 year, 5 back blows and 5 chest thrusts. Unresponsive: start CPR."
          },
          {
            "type": "steps",
            "title": "Shock and dehydration",
            "icon": "droplet",
            "steps": [
              {
                "title": "Recognise",
                "text": "Fast heart rate, capillary refill over 2 seconds, cold hands, sunken eyes or fontanelle, lethargy, few wet nappies."
              },
              {
                "title": "Fluids",
                "text": "Isotonic bolus, reassess after each: lungs, liver, perfusion.",
                "level": "ALS",
                "doses": [
                  {
                    "drug": "Normal saline or balanced crystalloid",
                    "dose": "10–20 mL/kg over 5–20 minutes",
                    "note": "10 mL/kg if heart disease is possible",
                    "level": "ALS"
                  }
                ]
              },
              {
                "title": "Glucose",
                "text": "Check it in every sick child.",
                "doses": [
                  {
                    "drug": "Dextrose 10%",
                    "dose": "5 mL/kg IV/IO",
                    "note": "Glucose below 60 mg/dL",
                    "level": "ALS"
                  }
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Also common",
            "icon": "list",
            "items": [
              "Febrile seizure: 6 months to 5 years, usually short. Treat any seizure lasting 5 minutes or more; look for meningitis.",
              "Bronchiolitis: under 2 years. Suction the nose, oxygen if SpO₂ is below 90%; albuterol isn't routine.",
              "BRUE: an infant under 1 year briefly stopped breathing or changed colour or tone, and is now well. Transport for assessment.",
              "SVT: heart rate 220/min or more in infants, 180/min or more in children, no variability."
            ]
          },
          {
            "type": "doses",
            "title": "Arrest and rhythm",
            "icon": "zap",
            "rows": [
              {
                "drug": "CPR",
                "dose": "15:2 with two rescuers, 30:2 alone",
                "note": "100–120/min. Infant about 4 cm deep (two thumbs encircling or heel of one hand); child about 5 cm"
              },
              {
                "drug": "Epinephrine",
                "dose": "0.01 mg/kg IV/IO",
                "note": "Every 3–5 minutes; maximum 1 mg",
                "level": "ALS"
              },
              {
                "drug": "Defibrillation",
                "dose": "2 J/kg, then 4 J/kg",
                "note": "Later shocks up to 10 J/kg or the adult dose",
                "level": "ALS"
              },
              {
                "drug": "Adenosine (SVT)",
                "dose": "0.1 mg/kg rapid push (maximum 6 mg)",
                "note": "Then 0.2 mg/kg (maximum 12 mg)",
                "level": "ALS"
              },
              {
                "drug": "Synchronized cardioversion",
                "dose": "0.5–1 J/kg, then 2 J/kg",
                "note": "Unstable SVT",
                "level": "ALS"
              }
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
                    "sub": "Infant: narrow, regular, 220/min or more. Vagal manoeuvres, then adenosine.",
                    "lead": "II"
                  },
                  {
                    "ecg": "sbrady",
                    "label": "Bradycardia",
                    "sub": "Below 60 with poor perfusion despite oxygen and ventilation: start CPR.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "PALS review",
                    "sub": "Pediatric advanced life support",
                    "href": "../pages/pals.html",
                    "icon": "heart-pulse"
                  },
                  {
                    "label": "PEPP review",
                    "sub": "Pediatric prehospital care",
                    "href": "../pages/pepp.html",
                    "icon": "graduation-cap"
                  },
                  {
                    "label": "Drug calculator",
                    "sub": "Weight-based doses",
                    "href": "../pages/drug-calculator.html",
                    "icon": "syringe"
                  },
                  {
                    "label": "Breathing patterns",
                    "sub": "Fast breathing",
                    "href": "../pages/respiratory-patterns.html?p=tachypnea",
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
          "q": "3-year-old: barking cough, stridor only when crying, hoarse, worse at night, playing on the parent's lap. Most likely?",
          "options": [
            "Croup: keep calm, position of comfort, transport",
            "Epiglottitis: secure the airway now",
            "Foreign body: abdominal thrusts",
            "Bronchiolitis"
          ],
          "correct": 0,
          "explanation": "A playful, non-toxic child with a barking cough is croup."
        },
        {
          "q": "5-year-old: drooling, muffled voice, sitting forward with the mouth open, high fever since 4 hours ago. Best action?",
          "options": [
            "Don't examine the throat; keep upright, oxygen as tolerated, rapid transport with pre-alert",
            "Look in the throat with a tongue depressor",
            "Abdominal thrusts",
            "Lay supine"
          ],
          "correct": 0,
          "explanation": "Epiglottitis: upsetting the child can cause complete obstruction."
        },
        {
          "q": "2-year-old with retractions, flaring, head bobbing, grunting, now pale and lethargic. PAT impression?",
          "options": [
            "Respiratory failure",
            "Respiratory distress",
            "Compensated shock",
            "Stable"
          ],
          "correct": 0,
          "explanation": "Abnormal appearance plus abnormal work of breathing means failure."
        },
        {
          "q": "6-month-old after 2 days of vomiting and diarrhoea: lethargic, sunken fontanelle, capillary refill 4 seconds, HR 180. Fluids?",
          "options": [
            "IV/IO isotonic bolus 10–20 mL/kg, reassess, rapid transport",
            "Small sips of oral fluid",
            "No fluids: these are normal infant findings",
            "A bottle of formula"
          ],
          "correct": 0,
          "explanation": "Shock: don't wait for low blood pressure, which comes late."
        },
        {
          "q": "The Pediatric Assessment Triangle is done:",
          "options": [
            "From the doorway, hands-off, in seconds",
            "After full vital signs",
            "Only by paramedics",
            "Only for trauma"
          ],
          "correct": 0,
          "explanation": "Appearance, work of breathing, circulation to skin."
        },
        {
          "q": "A 4-year-old is hypotensive below a systolic of:",
          "options": [
            "78 mmHg (70 + 2 × age)",
            "90 mmHg",
            "60 mmHg",
            "100 mmHg"
          ],
          "correct": 0,
          "explanation": "For ages 1–10 years: below 70 + (2 × age in years)."
        },
        {
          "q": "A 7-month-old is choking and can't cry. Do:",
          "options": [
            "5 back blows, then 5 chest thrusts",
            "Abdominal thrusts",
            "Blind finger sweep",
            "Wait for it to pass"
          ],
          "correct": 0,
          "explanation": "No abdominal thrusts under 1 year."
        },
        {
          "q": "Infant, HR 240, narrow regular complexes, poor feeding, perfusion OK. Treatment?",
          "options": [
            "Vagal manoeuvre (ice to the face), then adenosine 0.1 mg/kg",
            "Defibrillation",
            "Epinephrine",
            "Observe only"
          ],
          "correct": 0,
          "explanation": "SVT in infants is 220/min or more; unstable → synchronized cardioversion."
        },
        {
          "q": "18-month-old, fever, 2-minute generalized seizure, now waking up. Most likely?",
          "options": [
            "Febrile seizure: cool environment, check glucose, transport and look for infection",
            "Status epilepticus: intubate",
            "Child abuse",
            "Nothing needed"
          ],
          "correct": 0,
          "explanation": "Treat a seizure lasting 5 minutes or more."
        },
        {
          "q": "Infant with bronchiolitis, SpO₂ 92%, nose blocked. Most useful?",
          "options": [
            "Suction the nose",
            "Albuterol",
            "Steroids",
            "Antibiotics"
          ],
          "correct": 0,
          "explanation": "Oxygen if SpO₂ is below 90%."
        },
        {
          "q": "Infant CPR compressions (AHA 2025):",
          "options": [
            "Two thumbs encircling the chest, or the heel of one hand",
            "Two fingers on the sternum",
            "Two hands like an adult",
            "Fist on the sternum"
          ],
          "correct": 0,
          "explanation": "The two-finger technique is no longer recommended."
        }
      ],
      "flashcards": [
        {
          "question": "Pediatric Assessment Triangle",
          "answer": "Hands-off, from the doorway: Appearance (TICLS: tone, interactiveness, consolability, look, speech/cry), Work of breathing, Circulation to skin.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "Child airway differences",
          "answer": "Large head and occiput (pad under the shoulders), large tongue, small narrow airway, floppy epiglottis, higher larynx. Small swelling causes big obstruction.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "Commonest cause of cardiac arrest in children",
          "answer": "Respiratory failure or shock, not a primary heart problem. Recognise and treat distress early.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "Croup vs epiglottitis",
          "answer": "Croup: days, barking cough, stridor, hoarse. Epiglottitis: hours, high fever, drooling, tripod, muffled voice, no cough – don't look in the throat.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "Severe dehydration",
          "answer": "Lethargy, sunken eyes and fontanelle, dry mouth, capillary refill over 2 seconds, fast heart rate, few wet nappies. Low BP is late.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "Length-based tape",
          "answer": "Estimates weight (up to about 36 kg) and gives doses and equipment sizes. Children are not small adults.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "BRUE",
          "answer": "Brief resolved unexplained event: an infant under 1 year briefly stopped breathing or changed colour or tone, now well. Take a careful history and transport.",
          "category": "Pediatric Assessment & Emergencies"
        },
        {
          "question": "Normal heart rates (awake)",
          "answer": "Newborn 100–205; infant 100–180; toddler 98–140; preschool 80–120; school age 75–118; adolescent 60–100.",
          "category": "Pediatric Assessment & Emergencies"
        }
      ],
      "critical": [
        {
          "id": "crit_7_4_1",
          "scenario": "2-year-old, 2 days of cold symptoms, now wheezing with retractions and nasal flaring. Pink, fussy but consolable on the mother's lap; worse when crying. Known asthma, inhaler ran out. HR 152, RR 44, SpO₂ 92%.",
          "question": "PAT impression and plan?",
          "options": [
            {
              "t": "Respiratory distress: keep with the parent, albuterol by nebulizer or spacer, blow-by oxygen if tolerated, upright, reassess, transport",
              "f": "Correct."
            },
            {
              "t": "Respiratory failure: intubate now",
              "f": "Appearance is normal."
            },
            {
              "t": "Start an IV first",
              "f": "Crying worsens the wheeze; treat first."
            },
            {
              "t": "Lay flat for transport",
              "f": "Upright helps breathing."
            }
          ],
          "correct": 0,
          "explanation": "Avoid upsetting procedures until breathing improves.",
          "kpi": "Uses the PAT to classify respiratory distress and treats asthma appropriately"
        },
        {
          "id": "crit_7_4_2",
          "scenario": "4-year-old choking on a grape: coughing forcefully, making sounds, face red. Bystanders shout to do the Heimlich.",
          "question": "What do you do?",
          "options": [
            {
              "t": "Mild obstruction: encourage coughing, calm the scene, watch closely, ready to act if the cough fails; transport",
              "f": "Correct."
            },
            {
              "t": "Abdominal thrusts now",
              "f": "Not while the cough is effective."
            },
            {
              "t": "Blind finger sweep",
              "f": "Can push the grape deeper."
            },
            {
              "t": "Give water",
              "f": "Nothing by mouth."
            }
          ],
          "correct": 0,
          "explanation": "If the cough becomes silent or weak: abdominal thrusts (over 1 year).",
          "kpi": "Distinguishes partial from complete airway obstruction"
        },
        {
          "id": "crit_7_4_3",
          "scenario": "8-month-old found blue and not breathing in a cot 5 minutes ago after a nap face-down on a soft pillow. Limp, apnoeic, no pulse, cool skin; no rigor or lividity.",
          "question": "Priorities?",
          "options": [
            {
              "t": "Start CPR (two thumbs encircling or heel of one hand, 15:2), bag-mask with oxygen, IO, epinephrine 0.01 mg/kg, transport; support the family and note the scene",
              "f": "Correct."
            },
            {
              "t": "Pronounce death",
              "f": "No obvious signs of death; resuscitate."
            },
            {
              "t": "Two-finger compressions at 30:2 with two rescuers",
              "f": "Two rescuers use 15:2; two fingers is no longer recommended."
            },
            {
              "t": "Wait for police before touching the baby",
              "f": "Resuscitate first."
            }
          ],
          "correct": 0,
          "explanation": "Most pediatric arrests are asystole or PEA. Leave the bedding; record how and where the baby was found.",
          "kpi": "Initiates pediatric resuscitation and preserves scene information in SUID"
        }
      ]
    },
    {
      "id": "c7s5",
      "shortTitle": "7.5 Child Abuse & Neglect Recognition",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Child Abuse & Neglect",
        "lead": "You may be the only professional who sees inside the home. Look for injuries that don't fit the story or the child's development, treat the child, write down exactly what you see and hear, and report your concern. You don't need proof: reasonable suspicion is enough.",
        "sections": [
          {
            "type": "list",
            "title": "Red flags in the story",
            "icon": "triangle-alert",
            "items": [
              "No explanation, or one that changes",
              "The mechanism doesn't fit the child's development (\"he rolled off the couch\" at 2 weeks)",
              "Delay in seeking care",
              "Blaming a sibling or the child",
              "Caregiver hostile, indifferent or unwilling to leave",
              "Many previous visits for injuries"
            ]
          },
          {
            "type": "groups",
            "title": "Bruises: TEN-4-FACESp",
            "icon": "search",
            "groups": [
              {
                "title": "TEN-4",
                "items": [
                  "Torso, Ears or Neck in a child under 4 years",
                  "Any bruise in a baby 4 months or younger"
                ]
              },
              {
                "title": "FACESp",
                "items": [
                  "Frenulum (torn)",
                  "Angle of the jaw",
                  "Cheeks (fleshy part)",
                  "Eyelids",
                  "Subconjunctival bleeding",
                  "patterned bruises (hand, loop, belt, bite)"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "Injuries that suggest abuse",
            "icon": "bone",
            "stack": true,
            "columns": [
              "Injury",
              "Suspicious when"
            ],
            "rows": [
              [
                "Bruises",
                "On protected areas (TEN-4-FACESp), patterned, clustered, or in a baby who can't cruise. Don't try to date bruises by colour."
              ],
              [
                "Burns",
                "Immersion with sharp lines (stocking or glove pattern), spared skin creases or buttock centre, small round cigarette-sized burns, object shapes (iron, grill)."
              ],
              [
                "Fractures",
                "Posterior ribs, metaphyseal corner fractures, femur or humerus in a child who can't walk, several fractures of different ages."
              ],
              [
                "Head",
                "Abusive head trauma: vomiting, irritability, lethargy, seizures, apnoea, bulging fontanelle – often without marks. Most common under 1 year."
              ],
              [
                "Abdomen",
                "Bruising, vomiting or shock with no clear story."
              ]
            ]
          },
          {
            "type": "steps",
            "title": "What you do",
            "icon": "clipboard-list",
            "steps": [
              {
                "title": "Treat",
                "text": "ABCs and a full exam, with a second person present. Keep the child warm and covered."
              },
              {
                "title": "Listen, don't interview",
                "text": "Open questions only (\"Tell me what happened\"). Write the child's and caregiver's exact words."
              },
              {
                "title": "Don't confront",
                "text": "No accusations. Explain that the injuries need hospital care."
              },
              {
                "title": "Document",
                "text": "Objective findings and a body map, each explanation word for word, the home's condition, times."
              },
              {
                "title": "Report",
                "text": "To child protection or police according to local law, and tell the receiving clinician. Reports made in good faith are protected in most countries."
              },
              {
                "title": "Keep the child safe",
                "text": "If the child is in immediate danger, don't leave them there; call police."
              }
            ]
          },
          {
            "type": "groups",
            "title": "Neglect and fabricated illness",
            "icon": "house",
            "groups": [
              {
                "title": "Neglect",
                "items": [
                  "Failure to thrive, hunger, hoarding food",
                  "Poor hygiene, wrong clothing for the weather",
                  "Untreated illness or dental problems, missed immunizations",
                  "Left unsupervised; unsafe home"
                ]
              },
              {
                "title": "Fabricated or induced illness",
                "items": [
                  "Symptoms only ever seen by the caregiver",
                  "Many hospitals and tests, no cause found",
                  "Caregiver unusually knowledgeable and keen on procedures"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Sudden unexpected infant death",
            "icon": "baby",
            "items": [
              "Record position, bedding, room temperature, who found the baby and when",
              "Leave bedding and objects in place; don't wash the baby",
              "Support the family; avoid blame",
              "Safe sleep: on the back, own flat cot, no soft bedding or pillows"
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
                    "sub": "Head-to-toe exam",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "Burns calculator",
                    "sub": "EMS tools",
                    "href": "../pages/ems-tools.html",
                    "icon": "thermometer-sun"
                  },
                  {
                    "label": "PEPP review",
                    "sub": "Pediatric prehospital care",
                    "href": "../pages/pepp.html",
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
          "q": "6-month-old, irritable and vomiting, 'rolled off the couch'. No marks, lethargic, bulging fontanelle. Suspect:",
          "options": [
            "Abusive head trauma",
            "Gastroenteritis",
            "A harmless fall",
            "Colic"
          ],
          "correct": 0,
          "explanation": "Head injury without marks is common in abusive head trauma; meningitis is the other must-not-miss."
        },
        {
          "q": "To report suspected child abuse you need:",
          "options": [
            "Reasonable suspicion",
            "Proof",
            "A confession",
            "Permission from the parent"
          ],
          "correct": 0,
          "explanation": "Reports in good faith are protected in most countries."
        },
        {
          "q": "3-year-old with many bruises, including a handprint on the face; 'falls a lot'. Best action?",
          "options": [
            "Document objectively, transport, and report your concern",
            "Accept the explanation",
            "Confront the parent",
            "Refuse transport"
          ],
          "correct": 0,
          "explanation": "A handprint on the cheek is a patterned bruise in a protected area."
        },
        {
          "q": "Which is NOT a sign of neglect?",
          "options": [
            "A clean child dressed for the weather",
            "Failure to thrive",
            "Untreated infections",
            "Constant hunger and hoarding food"
          ],
          "correct": 0,
          "explanation": "The others are classic neglect signs."
        },
        {
          "q": "Burns on both feet with a sharp line above the ankles and even depth; 'stepped in the bath'. This suggests:",
          "options": [
            "Forced immersion: suspicious for abuse",
            "An accidental splash",
            "A skin condition",
            "Nothing; the story decides"
          ],
          "correct": 0,
          "explanation": "Accidental scalds are irregular with splash marks."
        },
        {
          "q": "Many admissions for 'seizures' and 'allergies' only when the mother is present; no cause found despite many specialists. Consider:",
          "options": [
            "Fabricated or induced illness (medical child abuse)",
            "Rare genetic disease",
            "Epilepsy",
            "Normal anxiety"
          ],
          "correct": 0,
          "explanation": "Also called factitious disorder imposed on another."
        },
        {
          "q": "The father of a child with suspected abuse keeps asking if you'll call the police and becomes agitated. You:",
          "options": [
            "Stay calm, say you follow the law, keep him away from the patient area, call police if safety is at risk",
            "Promise no report",
            "Stop and refuse to transport",
            "Show him your report"
          ],
          "correct": 0,
          "explanation": "Your and the child's safety come first."
        },
        {
          "q": "A bruise on the ear of a 2-year-old:",
          "options": [
            "Is a TEN-4 red flag",
            "Is normal from play",
            "Only matters with a fracture",
            "Should be dated by its colour"
          ],
          "correct": 0,
          "explanation": "Torso, ears and neck bruising under 4 years suggests abuse."
        },
        {
          "q": "Dating bruises by their colour is:",
          "options": [
            "Unreliable: describe them, don't date them",
            "Accurate to the day",
            "Required in the report",
            "Only possible in infants"
          ],
          "correct": 0,
          "explanation": "Healing varies too much."
        },
        {
          "q": "Which fracture is most specific for abuse in infants?",
          "options": [
            "Posterior rib fractures",
            "Clavicle fracture in a 6-year-old",
            "Wrist buckle fracture after a fall",
            "Toddler's tibia fracture"
          ],
          "correct": 0,
          "explanation": "They come from squeezing the chest."
        }
      ],
      "flashcards": [
        {
          "question": "Abusive head trauma: classic findings",
          "answer": "Subdural bleeding, retinal haemorrhages and brain swelling. Signs: vomiting, irritability, lethargy, seizures, apnoea – often no external marks.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Bruises suggesting abuse",
          "answer": "TEN-4-FACESp: torso, ears, neck under 4 years; any bruise at 4 months or younger; frenulum, jaw angle, cheeks, eyelids, subconjunctival; patterned marks.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Your legal duty",
          "answer": "Report reasonable suspicion to child protection or police according to local law. No proof needed; good-faith reports are protected. Don't accuse; document objectively.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Fractures suspicious for abuse",
          "answer": "Posterior ribs, metaphyseal corner fractures, femur or humerus in a child who can't walk, multiple fractures of different ages.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Fabricated or induced illness",
          "answer": "A caregiver invents, exaggerates or causes illness in a child. Red flags: symptoms only when the caregiver is there, many hospitals and tests, no cause found.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Documenting suspected abuse",
          "answer": "Describe, don't diagnose. Exact words in quotes, each explanation, body map, scene, who you reported to and when.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Signs of neglect",
          "answer": "Failure to thrive, poor hygiene, wrong clothing, untreated illness, missed immunizations, no supervision, unsafe home, hunger.",
          "category": "Child Abuse & Neglect Recognition"
        },
        {
          "question": "Burns suggesting abuse",
          "answer": "Immersion with sharp lines (stocking or glove), spared skin creases, small round cigarette-sized burns, object-shaped burns. Accidental scalds are irregular with splashes.",
          "category": "Child Abuse & Neglect Recognition"
        }
      ],
      "critical": [
        {
          "id": "crit_7_5_1",
          "scenario": "4-month-old with the mother's boyfriend: 'won't stop crying', vomiting, lethargic, weak cry, bulging fontanelle, no bruises. His story changes to 'I had to shake him a little'. He wants to wait for the mother.",
          "question": "Your priority?",
          "options": [
            {
              "t": "Suspected abusive head trauma: transport now, involve police (he admitted shaking), record his exact words, don't leave the baby with him",
              "f": "Correct."
            },
            {
              "t": "Wait for the mother",
              "f": "The baby has a life-threatening head injury."
            },
            {
              "t": "Advise a doctor's visit tomorrow",
              "f": "Lethargy and a bulging fontanelle need hospital now."
            },
            {
              "t": "Ask child protection for permission to transport",
              "f": "Treat and transport first; report en route."
            }
          ],
          "correct": 0,
          "explanation": "Monitor the airway; seizures and apnoea are common.",
          "kpi": "Recognizes abusive head trauma and ensures transport and reporting"
        },
        {
          "id": "crit_7_5_2",
          "scenario": "6-year-old 'burned his hand playing with matches'. Round, deep, uniform burns on the palm and three more on the forearm, some fresh and some healed. He's quiet and avoids eye contact.",
          "question": "Interpretation and plan?",
          "options": [
            {
              "t": "Cigarette-type burns of different ages that don't fit the story: treat the burns, transport, document objectively, report; don't confront",
              "f": "Correct."
            },
            {
              "t": "Accept the matches story",
              "f": "Matches don't cause several uniform round burns of different ages."
            },
            {
              "t": "Refer to a dermatologist",
              "f": "These are burns."
            },
            {
              "t": "Insist the child explains before you decide",
              "f": "Don't interview the child."
            }
          ],
          "correct": 0,
          "explanation": "Patterned burns of different ages are a strong abuse indicator.",
          "kpi": "Identifies patterned burn injuries inconsistent with history"
        },
        {
          "id": "crit_7_5_3",
          "scenario": "7-year-old with a deformed forearm 'from gym class'. The school nurse documents a black eye and facial bruises in the past months, hunger, the same clothes, many missed days. The child is withdrawn and flinches.",
          "question": "Your obligation?",
          "options": [
            {
              "t": "Treat and transport; report suspected abuse and neglect; document each injury, the child's words and the school's records",
              "f": "Correct."
            },
            {
              "t": "Treat the fracture only; social issues aren't your role",
              "f": "You are often a mandated reporter."
            },
            {
              "t": "Call the parents to explain first",
              "f": "That can put the child at risk."
            },
            {
              "t": "Leave reporting to the school",
              "f": "Each professional reports their own concern."
            }
          ],
          "correct": 0,
          "explanation": "A pattern over time is more telling than any single injury.",
          "kpi": "Fulfils reporting duties when abuse and neglect indicators coexist"
        }
      ]
    },
    {
      "id": "c7s6",
      "shortTitle": "7.6 Geriatrics",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Geriatrics",
        "lead": "Older adults present quietly: a heart attack as weakness, sepsis without fever, a fracture after a 'simple' fall. Ask why they fell, what they take and what is new compared with their usual self. Never put new confusion down to age.",
        "sections": [
          {
            "type": "table",
            "title": "Ageing changes what you see",
            "icon": "search",
            "stack": true,
            "columns": [
              "System",
              "Change",
              "So"
            ],
            "rows": [
              [
                "Heart",
                "Stiffer, slower response; beta-blockers blunt tachycardia",
                "A normal heart rate doesn't rule out shock; a 'normal' BP may be low for someone with hypertension"
              ],
              [
                "Lungs",
                "Weaker cough, less reserve",
                "Pneumonia and aspiration; they desaturate quickly"
              ],
              [
                "Brain",
                "Shrinks; bridging veins stretch",
                "Slow subdural bleeds days after minor falls, especially on anticoagulants"
              ],
              [
                "Kidneys and liver",
                "Slower drug clearance",
                "More side effects; lower doses"
              ],
              [
                "Temperature",
                "Less fever, less shivering",
                "Sepsis may come without fever, or with hypothermia"
              ],
              [
                "Skin and bones",
                "Thin skin, osteoporosis",
                "Fractures and pressure injuries from small forces: pad everything"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Delirium, dementia or depression?",
            "icon": "brain",
            "stack": true,
            "columns": [
              "Feature",
              "Delirium",
              "Dementia",
              "Depression"
            ],
            "rows": [
              [
                "Onset",
                "Hours to days",
                "Months to years",
                "Weeks to months"
              ],
              [
                "Attention",
                "Poor, fluctuating",
                "Usually normal early",
                "Normal but slowed"
              ],
              [
                "Alertness",
                "Drowsy or agitated",
                "Normal",
                "Normal"
              ],
              [
                "Meaning",
                "Medical emergency: infection, drugs, hypoxia, glucose, urinary retention, pain",
                "Chronic; but delirium often sits on top of it",
                "Treatable; ask about suicide"
              ]
            ],
            "notes": [
              "Ask the carer: is this new? Use the 4AT if your service has it."
            ]
          },
          {
            "type": "steps",
            "title": "After a fall",
            "icon": "bone",
            "steps": [
              {
                "title": "Why did they fall?",
                "text": "Dizziness, palpitations, chest pain, fainting, new weakness, infection, medicines, or a trip. A fall is a symptom."
              },
              {
                "title": "Long lie",
                "text": "On the floor for 1 hour or more: pressure injury, rhabdomyolysis, hypothermia, dehydration, pneumonia."
              },
              {
                "title": "Injuries",
                "text": "Hip (short, externally rotated leg: padded splint, no traction), wrist, ribs, head. On anticoagulants, any head strike goes to hospital even if they look well."
              },
              {
                "title": "Where to",
                "text": "Age 65 or older with systolic below 110 mmHg is high-risk; anticoagulants are a moderate-risk factor (Field Triage 2021)."
              },
              {
                "title": "Staying home?",
                "text": "Only if the cause is clear and they can cope: hazards, help, a way to call. Refer per local pathway."
              }
            ]
          },
          {
            "type": "list",
            "title": "Medicines to ask about (5 or more = polypharmacy)",
            "icon": "pill",
            "items": [
              "Anticoagulants and antiplatelets: bleeding",
              "Beta-blockers, calcium-channel blockers, digoxin: slow heart, blunted response to shock",
              "Diuretics, ACE inhibitors: dehydration, abnormal sodium and potassium",
              "Insulin, sulfonylureas: hypoglycaemia",
              "Benzodiazepines, opioids, sleeping tablets: falls and confusion",
              "Anticholinergics: delirium, urinary retention",
              "Bring all the medicines or a list"
            ]
          },
          {
            "type": "groups",
            "title": "Elder abuse (about 1 in 6 people aged 60 or older, WHO)",
            "icon": "shield",
            "groups": [
              {
                "title": "Signs",
                "items": [
                  "Injuries of different ages, grip marks on the arms",
                  "Pressure injuries, dehydration, poor hygiene",
                  "Missing glasses, hearing aids or dentures",
                  "Money or belongings controlled by someone else"
                ]
              },
              {
                "title": "Do",
                "items": [
                  "Speak with the patient alone",
                  "Document what you see and hear",
                  "Report per local law (adult protective services)"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "Advance directives",
            "icon": "clipboard-list",
            "items": [
              "DNR (DNACPR): no CPR if they arrest. Still treat everything else – oxygen, pain, infection – unless the document says otherwise.",
              "POLST, MOLST or local forms (such as ReSPECT) set the level of care: full, limited or comfort.",
              "A valid document or the legal decision-maker outweighs other family wishes. Unsure? Start care and call medical direction."
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
                    "sub": "Weakness, nausea or confusion may be the only symptom. 12-lead early.",
                    "lead": "III"
                  },
                  {
                    "ecg": "afib",
                    "label": "Atrial fibrillation",
                    "sub": "Common cause of falls, stroke and anticoagulant use.",
                    "lead": "II"
                  },
                  {
                    "ecg": "chb",
                    "label": "Complete heart block",
                    "sub": "Think of drugs: beta-blockers, calcium-channel blockers, digoxin.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Medical assessment",
                    "sub": "History and medicines",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  },
                  {
                    "label": "Trauma assessment",
                    "sub": "Falls and hip injuries",
                    "href": "../pages/trauma.html",
                    "icon": "ambulance"
                  },
                  {
                    "label": "GCS",
                    "sub": "Track mental status",
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
          "q": "74-year-old with diabetes: sudden confusion and weakness, no chest pain, ST elevation in the anterior leads. This is:",
          "options": [
            "An atypical presentation of acute MI",
            "A stroke",
            "Hypoglycaemia",
            "Normal ageing"
          ],
          "correct": 0,
          "explanation": "Older adults and people with diabetes often have no chest pain."
        },
        {
          "q": "Nursing home: man with Alzheimer's, confused since yesterday and now seeing bugs on the wall. 'It's just his dementia.' You:",
          "options": [
            "Treat as possible delirium: look for a medical cause and transport",
            "Leave him at the facility",
            "Restrain him",
            "Sedate and review tomorrow"
          ],
          "correct": 0,
          "explanation": "New hallucinations and fluctuating attention suggest delirium."
        },
        {
          "q": "88-year-old on the floor for 'a day or two', confused, red areas on the buttocks and heels. Main concern?",
          "options": [
            "Long-lie complications: rhabdomyolysis, pressure injury, dehydration, hypothermia, pneumonia",
            "Only a hip fracture",
            "A glass of water and help up",
            "Normal confusion for her age"
          ],
          "correct": 0,
          "explanation": "Plus the reason she fell."
        },
        {
          "q": "76-year-old with heart failure, COPD and AF: weak, 'not right', BP 96/58, HR 110, RR 24, SpO₂ 89%, no fever. Suspect:",
          "options": [
            "Sepsis: fever is often absent in older adults",
            "Normal ageing",
            "Panic attack",
            "Mild dehydration only"
          ],
          "correct": 0,
          "explanation": "Treat and transport as sepsis."
        },
        {
          "q": "85-year-old with a valid DNR has pneumonia and SpO₂ 85%. The family says 'do everything'. You:",
          "options": [
            "Treat the pneumonia (oxygen, transport); withhold only CPR if she arrests",
            "Withhold all treatment",
            "Start CPR now",
            "Ignore the DNR"
          ],
          "correct": 0,
          "explanation": "DNR means no CPR, not no care."
        },
        {
          "q": "92-year-old 'fell out of bed': grip-mark bruises on both wrists, black eye, withdrawn; son answers everything and refuses to leave. Suspect:",
          "options": [
            "Elder abuse: speak with her alone and report",
            "A simple fall",
            "Normal bruising of age",
            "Depression"
          ],
          "correct": 0,
          "explanation": "Patterned bruises and a controlling caregiver are red flags."
        },
        {
          "q": "A 'long lie' is commonly defined as being on the floor for:",
          "options": [
            "1 hour or more",
            "5 minutes",
            "24 hours only",
            "Overnight only"
          ],
          "correct": 0,
          "explanation": "Complications start early."
        },
        {
          "q": "Bleeding older patient on a beta-blocker, HR 72, BP 104/60 (usually 160/90). You conclude:",
          "options": [
            "Possible shock: the beta-blocker hides tachycardia and the BP is low for her",
            "Normal vital signs",
            "Anxiety",
            "Over-treated hypertension only"
          ],
          "correct": 0,
          "explanation": "Compare with their usual numbers."
        },
        {
          "q": "80-year-old on an anticoagulant tripped and hit his head; feels fine. Best plan?",
          "options": [
            "Transport for assessment and imaging",
            "No transport",
            "Review in a week",
            "Only if he vomits"
          ],
          "correct": 0,
          "explanation": "Bleeds can be delayed."
        },
        {
          "q": "Suspected hip fracture (short, externally rotated leg). Splint with:",
          "options": [
            "A padded splint or scoop with the legs secured together – no traction",
            "A traction splint",
            "Nothing; walk her",
            "A tight bandage over the hip"
          ],
          "correct": 0,
          "explanation": "Traction is for mid-shaft femur fractures, not hips."
        }
      ],
      "flashcards": [
        {
          "question": "Ageing changes that matter in EMS",
          "answer": "Blunted heart rate response, less lung reserve, slower drug clearance, poor temperature control (less fever), brain shrinkage (subdural risk), thin skin, osteoporosis, sensory loss.",
          "category": "Geriatrics"
        },
        {
          "question": "MI in older adults",
          "answer": "Often no chest pain: weakness, fainting, confusion, breathlessness, nausea or upper abdominal pain. Do a 12-lead early.",
          "category": "Geriatrics"
        },
        {
          "question": "Delirium, dementia, depression",
          "answer": "Delirium: sudden, fluctuating attention, altered alertness – a medical emergency. Dementia: slow and progressive, alert. Depression: withdrawn, slowed, aware; ask about suicide.",
          "category": "Geriatrics"
        },
        {
          "question": "Falls in older adults",
          "answer": "A symptom, not a diagnosis. Ask why: dizziness, heart, infection, stroke, medicines, hazards. Look for injury and long-lie complications.",
          "category": "Geriatrics"
        },
        {
          "question": "Polypharmacy",
          "answer": "5 or more medicines. Watch anticoagulants, beta-blockers, diuretics, insulin, sedatives and anticholinergics. Bring all medicines to hospital.",
          "category": "Geriatrics"
        },
        {
          "question": "Elder abuse",
          "answer": "Physical, emotional, sexual, financial and neglect. Speak with the patient alone, document, and report according to local law.",
          "category": "Geriatrics"
        },
        {
          "question": "DNR vs POLST",
          "answer": "DNR: no CPR if they arrest. POLST or equivalent (MOLST, ReSPECT): sets the wider level of care – full, limited or comfort.",
          "category": "Geriatrics"
        },
        {
          "question": "Dementia patient confused since this morning",
          "answer": "Delirium until proven otherwise: infection (often urinary or chest), low glucose, low oxygen, drugs, retention, stroke. Transport.",
          "category": "Geriatrics"
        }
      ],
      "critical": [
        {
          "id": "crit_7_6_1",
          "scenario": "80-year-old with diabetes and a coronary stent: weak, diarrhoea all morning, 'a stomach bug'. BP 88/54, HR 106, SpO₂ 94%, temperature normal; got lost in his own home.",
          "question": "Stomach bug or more?",
          "options": [
            {
              "t": "Shock with new confusion: think MI, sepsis or dehydration – 12-lead, glucose, IV, fluids per protocol, transport",
              "f": "Correct."
            },
            {
              "t": "Viral gastroenteritis: fluids at home",
              "f": "Hypotension and confusion need hospital."
            },
            {
              "t": "Antiemetic and leave him",
              "f": "Not safe."
            },
            {
              "t": "Call his GP tomorrow",
              "f": "He's in shock now."
            }
          ],
          "correct": 0,
          "explanation": "Absent chest pain and fever don't reassure in older adults.",
          "kpi": "Recognizes atypical presentations and shock in older adults"
        },
        {
          "id": "crit_7_6_2",
          "scenario": "90-year-old with Alzheimer's: fine yesterday, now agitated, picking at the air, 'spiders on the ceiling'. HR 104, warm, smell of urine; recurrent urinary infections. Staff suggest a sleeping pill.",
          "question": "What is this?",
          "options": [
            {
              "t": "Delirium, probably from infection: transport for assessment",
              "f": "Correct."
            },
            {
              "t": "Her usual dementia: give the sleeping pill",
              "f": "Sedation hides the cause and causes falls."
            },
            {
              "t": "End-stage dementia: hospice",
              "f": "Acute change is not progression."
            },
            {
              "t": "Oxygen and wait",
              "f": "She needs a cause found."
            }
          ],
          "correct": 0,
          "explanation": "Acute onset with fluctuating attention is delirium; urinary infection is a common trigger.",
          "kpi": "Differentiates delirium from dementia"
        },
        {
          "id": "crit_7_6_3",
          "scenario": "79-year-old fell; left leg short and externally rotated. She felt dizzy first, tired and with 'indigestion' for days. On a diuretic. BP 100/62. She says she'll just rest; her daughter disagrees.",
          "question": "Plan?",
          "options": [
            {
              "t": "Splint (no traction) and transport; look for the cause – 12-lead, glucose, electrolytes risk from the diuretic; assess capacity if she still refuses",
              "f": "Correct."
            },
            {
              "t": "Mechanical fall: splint, no further workup",
              "f": "The dizziness and 'indigestion' need explaining."
            },
            {
              "t": "Accept refusal immediately",
              "f": "A suspected hip fracture needs treatment; check capacity and explain risks."
            },
            {
              "t": "Pain relief and leave her home",
              "f": "She can't walk on a broken hip."
            }
          ],
          "correct": 0,
          "explanation": "The hip is the injury; the dizziness may be an MI or arrhythmia.",
          "kpi": "Investigates the medical cause of a fall while managing the injury"
        }
      ]
    },
    {
      "id": "c7s7",
      "shortTitle": "7.7 Patients with Special Challenges",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Patients with Special Challenges",
        "lead": "Disability, mental illness, sensory loss, language, poverty and home medical technology change how you assess and communicate, not what the patient deserves. Ask what is normal for them, look for the medical cause behind a change in behaviour, and use the expertise of whoever lives with the device.",
        "sections": [
          {
            "type": "table",
            "title": "Communicating",
            "icon": "message-circle-question",
            "stack": true,
            "columns": [
              "Patient",
              "Do"
            ],
            "rows": [
              [
                "Deaf or hard of hearing",
                "Face them in good light and ask how they communicate. Write, type, or use a qualified sign language interpreter (in person or video). Don't shout; don't use children to interpret."
              ],
              [
                "Blind or low vision",
                "Say who you are; explain before touching; describe the surroundings; offer your arm. Keep the guide dog with them."
              ],
              [
                "Different language",
                "A professional interpreter by phone or video. Speak to the patient in short sentences. Family only for urgent basics."
              ],
              [
                "Autism",
                "Quiet, low light, few people. Explain each step before you do it and give time. Ask carers how pain shows; let them keep comfort items."
              ],
              [
                "Intellectual disability",
                "Speak to the patient first, in plain words; check understanding. Carers know the baseline."
              ],
              [
                "Dementia",
                "Introduce yourself each time; one question at a time; calm voice."
              ]
            ]
          },
          {
            "type": "gate",
            "title": "Behaviour change: medical first?",
            "icon": "brain",
            "question": "Abnormal glucose, SpO₂, temperature or vital signs; new confusion; injury; toxins or a change in medicines?",
            "yes": "Treat it as medical. Hypoglycaemia, hypoxia, sepsis, head injury, pain and drug toxicity (lithium, anticholinergics) all look 'behavioural'.",
            "no": "De-escalate: your name, their name, calm voice, real choices, safe distance and an exit. Restraint only as a last resort, per protocol, never face-down."
          },
          {
            "type": "table",
            "title": "Technology at home",
            "icon": "plug",
            "stack": true,
            "columns": [
              "Device",
              "Problem",
              "Do"
            ],
            "rows": [
              [
                "Tracheostomy",
                "Distress, blocked or out",
                "DOPE: Displacement, Obstruction, Pneumothorax, Equipment. Oxygen to the face and stoma; suction to the pre-measured depth for under 15 seconds; change the inner tube. Still blocked: replace the tube (same size or one smaller), or ventilate via the stoma or by mask over the face with the stoma covered."
              ],
              [
                "Home ventilator",
                "Alarm or distress",
                "Disconnect and ventilate by bag through the trach with oxygen. Bring the ventilator and its settings."
              ],
              [
                "Shunt for hydrocephalus",
                "Blocked",
                "Headache, vomiting, drowsiness, irritability, bulging fontanelle: neurosurgical centre."
              ],
              [
                "Gastrostomy tube",
                "Fallen out",
                "Cover the site and bring the tube: the tract starts to close within hours."
              ],
              [
                "Central line",
                "Bleeding, fever, break",
                "Pressure for bleeding; clamp a broken line; fever with a line is sepsis until proven otherwise."
              ],
              [
                "LVAD",
                "Collapse",
                "There may be no palpable pulse: judge by mental state and skin. Listen for the pump hum, call the coordinator number on the device, follow their advice on compressions."
              ],
              [
                "Dialysis fistula",
                "Access arm",
                "No BP, IV or tight dressing on that arm. Bleeding: firm pressure. Missed dialysis: high potassium, fluid overload."
              ],
              [
                "Insulin pump",
                "Low glucose",
                "Suspend or disconnect the pump, then treat the glucose."
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Specific conditions",
            "icon": "user",
            "groups": [
              {
                "title": "Down syndrome",
                "items": [
                  "Atlantoaxial instability: careful with the neck",
                  "Large tongue, small airway",
                  "Heart disease, early dementia, low thyroid"
                ]
              },
              {
                "title": "Homelessness and poverty",
                "items": [
                  "Cold and heat injury, infections, wounds, TB, untreated chronic disease, substance use",
                  "Treat with dignity; ask what would make hospital easier"
                ]
              },
              {
                "title": "Capacity to refuse",
                "items": [
                  "Can they understand, retain and weigh the information, and communicate a choice?",
                  "Sepsis, hypoxia, head injury and intoxication can remove capacity"
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
                "title": "Rhythm",
                "items": [
                  {
                    "ecg": "hyperK",
                    "label": "Hyperkalemia",
                    "sub": "Missed dialysis: peaked T waves, then wide QRS. Treat before arrest.",
                    "lead": "V3"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Medical assessment",
                    "sub": "History from patient and carers",
                    "href": "../pages/medical-asm.html",
                    "icon": "stethoscope"
                  },
                  {
                    "label": "Medication index",
                    "sub": "Look up home medicines",
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
          "q": "Non-verbal 5-year-old with autism: crying, pulling at his ears, hitting his head. Consider first:",
          "options": [
            "Pain or illness, such as an ear infection",
            "A tantrum: restrain",
            "Psychiatric emergency: sedate",
            "Normal behaviour: nothing to do"
          ],
          "correct": 0,
          "explanation": "Behaviour is how many autistic children show pain."
        },
        {
          "q": "Man with schizophrenia: agitated and confused; BP 88/56, SpO₂ 91%, glucose 42 mg/dL. Most likely cause?",
          "options": [
            "Hypoglycaemia",
            "Psychosis",
            "Panic attack",
            "Medication not working"
          ],
          "correct": 0,
          "explanation": "Check glucose in every patient with altered behaviour."
        },
        {
          "q": "42-year-old with Down syndrome after a minor crash has midline neck tenderness. Priority?",
          "options": [
            "Spinal motion restriction: atlantoaxial instability is possible",
            "Clear the neck because the crash was minor",
            "Focus on concussion only",
            "Reassurance only"
          ],
          "correct": 0,
          "explanation": "Midline tenderness alone requires it."
        },
        {
          "q": "Best approach to a blind patient:",
          "options": [
            "Say who you are and explain before touching",
            "Guide them silently by the arm",
            "Speak loudly",
            "Avoid touching"
          ],
          "correct": 0,
          "explanation": "Describe the surroundings and offer your arm."
        },
        {
          "q": "Homeless man asleep outside at 2 °C: confused, cold, mottled, shivering. You:",
          "options": [
            "Treat as hypothermia and transport; look for injury, infection, alcohol and low glucose",
            "Give a blanket and leave him",
            "Call police for a welfare check only",
            "Give hot coffee and walk him"
          ],
          "correct": 0,
          "explanation": "Treat with dignity."
        },
        {
          "q": "Dialysis patient with a left-arm fistula needs an IV. Where?",
          "options": [
            "The right arm",
            "The left arm, above the fistula",
            "The left hand",
            "Into the fistula"
          ],
          "correct": 0,
          "explanation": "No BP, IV or blood draws on the fistula arm."
        },
        {
          "q": "22-year-old autistic man with asthma pulls off his mask; SpO₂ 89%, diffuse wheeze. Mother says he's just scared. You:",
          "options": [
            "Explain it's a real emergency, reduce stimulation, explain each step, involve his mother, continue treatment and transport",
            "Leave him at home",
            "Restrain him",
            "Sedate him"
          ],
          "correct": 0,
          "explanation": "Hypoxia and fear both drive his agitation."
        },
        {
          "q": "Deaf patient who uses sign language; her mother offers to interpret. Best?",
          "options": [
            "A qualified interpreter (in person or video); write in the meantime",
            "Use her mother throughout",
            "Talk to the mother only",
            "Rely on lip-reading"
          ],
          "correct": 0,
          "explanation": "Family interpreters filter and miss details."
        },
        {
          "q": "Child with a tracheostomy is in distress and you hear gurgling. First?",
          "options": [
            "Oxygen and suction the tube to its pre-measured depth",
            "Remove the tube immediately",
            "Start compressions",
            "Wait for the parents"
          ],
          "correct": 0,
          "explanation": "DOPE: Displacement, Obstruction, Pneumothorax, Equipment."
        },
        {
          "q": "Capacity to refuse care needs the patient to:",
          "options": [
            "Understand, retain and weigh the information, and communicate a choice",
            "Agree with you",
            "Be sober and over 65",
            "Have a relative present"
          ],
          "correct": 0,
          "explanation": "Sepsis or hypoxia can remove capacity."
        }
      ],
      "flashcards": [
        {
          "question": "Autism: EMS approach",
          "answer": "May be non-verbal or use devices. Reduce light, noise and touch; explain each step; allow time; ask carers about baseline and pain. Don't assume they don't understand.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "Down syndrome: atlantoaxial instability",
          "answer": "Some people with Down syndrome have an unstable C1–C2 joint. Handle the neck carefully in trauma and airway management.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "De-escalation",
          "answer": "Calm voice, use their name, acknowledge feelings, give real choices, don't argue with delusions, keep distance and an exit. Check for medical causes first.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "Deaf or hard of hearing",
          "answer": "Face them in good light, write or type, use a qualified interpreter. Normal voice – don't shout. Don't use children to interpret.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "Using an interpreter",
          "answer": "Professional, not family. Speak to the patient, not the interpreter; short sentences; allow time.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "AV fistula",
          "answer": "No BP, IV or blood draws on that arm: it can clot the access. Bleeding: firm direct pressure.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "Aggressive or self-injuring autistic patient",
          "answer": "Consider pain or illness. Reduce stimulation, simple calm language, assess for injury, ask carers, transport if needed.",
          "category": "Patients with Special Challenges"
        },
        {
          "question": "Medical first",
          "answer": "New behaviour may be hypoglycaemia, hypoxia, infection, head injury or drug toxicity. Check vital signs and glucose in everyone.",
          "category": "Patients with Special Challenges"
        }
      ],
      "critical": [
        {
          "id": "crit_7_7_1",
          "scenario": "Group home: 28-year-old with autism and intellectual disability, hitting his head, shouting, rocking; flushed, warm, breathing fast. Known seizures. Staff say he just needs to be left alone.",
          "question": "Priority?",
          "options": [
            {
              "t": "Look for a medical cause: vital signs, glucose, temperature, injury, post-ictal state; reduce stimulation; transport if he can't be assessed safely",
              "f": "Correct."
            },
            {
              "t": "Leave him to calm down",
              "f": "Fever and fast breathing need assessment."
            },
            {
              "t": "Restrain immediately",
              "f": "Only as a last resort."
            },
            {
              "t": "Police first",
              "f": "This is a medical call."
            }
          ],
          "correct": 0,
          "explanation": "Fever plus behaviour change can be infection or meningitis.",
          "kpi": "Looks for medical causes of behavioural change"
        },
        {
          "id": "crit_7_7_2",
          "scenario": "45-year-old on lithium for bipolar disorder: confused, slurred speech, unsteady, a week of feeling worse and 2 days of vomiting and diarrhoea. Nurse thinks it's mania. BP 100/62, HR 108, glucose normal.",
          "question": "Most likely cause?",
          "options": [
            {
              "t": "Lithium toxicity worsened by dehydration: medical emergency, IV fluids per protocol, transport",
              "f": "Correct."
            },
            {
              "t": "Mania",
              "f": "Ataxia and GI symptoms point to toxicity."
            },
            {
              "t": "Panic attack",
              "f": "Not with ataxia and confusion."
            },
            {
              "t": "Alcohol",
              "f": "Check, but lithium fits."
            }
          ],
          "correct": 0,
          "explanation": "Vomiting and diarrhoea reduce lithium clearance; so do NSAIDs, diuretics and ACE inhibitors.",
          "kpi": "Recognizes lithium toxicity presenting as altered mental status"
        },
        {
          "id": "crit_7_7_3",
          "scenario": "Homeless man with a swollen, red, foul-smelling shin wound and blisters to the knee; fever, HR 112, confused. Smells of alcohol. Refuses: 'I'll clean it with whiskey.'",
          "question": "How do you handle the refusal?",
          "options": [
            {
              "t": "Explain the risk plainly, address his worries (belongings, friends), assess capacity – confusion from sepsis may remove it – and involve medical direction and police per protocol",
              "f": "Correct."
            },
            {
              "t": "He's talking, so accept the refusal",
              "f": "Conversation isn't capacity."
            },
            {
              "t": "Leave a first-aid kit",
              "f": "This may be necrotizing infection."
            },
            {
              "t": "Force him onto the stretcher",
              "f": "Only with lack of capacity and legal authority."
            }
          ],
          "correct": 0,
          "explanation": "Document capacity, information given and who you consulted.",
          "kpi": "Assesses decision-making capacity in a septic patient refusing care"
        }
      ]
    },
    {
      "id": "c7s8",
      "shortTitle": "7.8 Bariatric Considerations",
      "guide": {
        "group": "c7",
        "groupLabel": "Chapter 7 · Special Populations",
        "title": "Bariatric Considerations",
        "lead": "Obesity changes the airway, breathing, access, drug doses and how you move the patient. Plan early: sit them up, pre-oxygenate well, bring the right cuff, needles and cot, and call for people before you need them. Keep the patient's dignity throughout.",
        "sections": [
          {
            "type": "list",
            "title": "Definitions (WHO)",
            "icon": "scale",
            "items": [
              "BMI = weight in kg ÷ height in metres squared",
              "Obesity: BMI 30 or more",
              "Severe (class III) obesity: BMI 40 or more"
            ]
          },
          {
            "type": "steps",
            "title": "Airway and breathing",
            "icon": "wind",
            "steps": [
              {
                "title": "Sit up",
                "text": "Lying flat pushes the abdomen into the chest. Keep them upright or semi-upright."
              },
              {
                "title": "Ramp for airway work",
                "text": "Blankets under the shoulders and head until the ear canal is level with the sternal notch; head up 25–30°."
              },
              {
                "title": "Pre-oxygenate",
                "text": "They desaturate fast (less lung reserve, more oxygen use). High-flow oxygen or CPAP for at least 3 minutes; keep a nasal cannula at 15 L/min on during intubation attempts.",
                "level": "BLS"
              },
              {
                "title": "Bag-mask",
                "text": "Two people: two-hand mask seal with oral and nasal airways; early second-generation supraglottic airway if ventilation fails."
              }
            ]
          },
          {
            "type": "table",
            "title": "Assessment",
            "icon": "stethoscope",
            "stack": true,
            "columns": [
              "Task",
              "Adjust"
            ],
            "rows": [
              [
                "Blood pressure",
                "Cuff bladder about 40% of the arm circumference, length 80%. Too small reads falsely high; use a forearm cuff if needed."
              ],
              [
                "Listening",
                "Thick tissue muffles breath and heart sounds: listen at the sides and back."
              ],
              [
                "Abdomen",
                "Guarding and masses are hard to feel; tachycardia may be the only sign."
              ],
              [
                "ECG and defibrillation",
                "Low voltage is common; anterior-posterior pads if needed; standard energies."
              ],
              [
                "Skin",
                "Check folds for pressure injury and infection; DVT and PE risk is high."
              ],
              [
                "After weight-loss surgery",
                "Unexplained tachycardia, pain or vomiting: leak, obstruction or internal hernia until proven otherwise."
              ]
            ]
          },
          {
            "type": "table",
            "title": "Access and drugs",
            "icon": "syringe",
            "stack": true,
            "columns": [
              "Item",
              "Use"
            ],
            "rows": [
              [
                "IV",
                "Longer catheter; external jugular; ultrasound if available."
              ],
              [
                "IO",
                "45 mm needle (humerus or tibia); confirm landmarks."
              ],
              [
                "IM",
                "Needle 38 mm (1.5 inch) or longer into the anterolateral thigh. Auto-injectors may not reach muscle."
              ],
              [
                "Doses",
                "Most emergency drugs are fixed doses. For weight-based drugs, follow protocol on which weight to use (actual, ideal or adjusted)."
              ]
            ]
          },
          {
            "type": "steps",
            "title": "Moving the patient",
            "icon": "move-vertical",
            "steps": [
              {
                "title": "Plan the route",
                "text": "Doors, stairs, lift size, floor strength. Know the rated limits of your cot and stair chair."
              },
              {
                "title": "Call early",
                "text": "4–6 or more people and a bariatric ambulance or fire service support before you start lifting."
              },
              {
                "title": "Use equipment",
                "text": "Slide sheets, air-assisted transfer mats, mechanical lifts. Never exceed equipment ratings."
              },
              {
                "title": "Dignity",
                "text": "Cover the patient, talk to them, explain the plan. No comments about weight."
              }
            ]
          },
          {
            "type": "list",
            "title": "Cardiac arrest",
            "icon": "heart-pulse",
            "items": [
              "Same CPR depth, rate and defibrillation energies",
              "Firm surface; rotate compressors every 2 minutes – it is harder work",
              "Early advanced airway by the most skilled provider"
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
                    "sub": "After weight-loss surgery, unexplained tachycardia may be the only sign of a leak.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "BLS review",
                    "sub": "CPR and airway",
                    "href": "../pages/bls.html",
                    "icon": "heart-pulse"
                  },
                  {
                    "label": "Drug calculator",
                    "sub": "Weight-based doses",
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
          "q": "Patient with BMI 48 needs bag-mask ventilation, lying flat. Most important change?",
          "options": [
            "Ramp: ear canal level with the sternal notch",
            "Smaller mask",
            "Ventilate at 20 breaths/min",
            "Head-down tilt"
          ],
          "correct": 0,
          "explanation": "Ramping improves both ventilation and the laryngeal view."
        },
        {
          "q": "Standard cuff on a large arm reads 168/94. Most likely?",
          "options": [
            "The cuff is too small and reads falsely high",
            "Hypertensive emergency",
            "White-coat effect",
            "An accurate reading"
          ],
          "correct": 0,
          "explanation": "Bladder about 40% of the arm circumference."
        },
        {
          "q": "145 kg patient, two failed IVs, needs a drug. Next?",
          "options": [
            "IO with a 45 mm needle, or IM with a long needle if appropriate",
            "Keep trying IVs",
            "Transport without the drug",
            "Butterfly needle"
          ],
          "correct": 0,
          "explanation": "Don't delay critical drugs."
        },
        {
          "q": "Patient with obstructive sleep apnoea in respiratory distress. Position?",
          "options": [
            "Sitting upright",
            "Flat on the back",
            "Left side",
            "Head down"
          ],
          "correct": 0,
          "explanation": "Lying flat pushes the abdomen into the chest."
        },
        {
          "q": "IM epinephrine for a large patient in anaphylaxis: needle length?",
          "options": [
            "38 mm (1.5 inch) or longer, anterolateral thigh",
            "16 mm",
            "Insulin needle",
            "Any length"
          ],
          "correct": 0,
          "explanation": "Short needles inject into fat, which absorbs slowly."
        },
        {
          "q": "BMI 52: SpO₂ falls from 95% to 80% within 90 seconds of laryngoscopy. Why?",
          "options": [
            "Low lung reserve and high oxygen use: rapid desaturation is expected",
            "Pneumothorax",
            "Faulty oximeter",
            "Too much pre-oxygenation"
          ],
          "correct": 0,
          "explanation": "Pre-oxygenate head-up and keep nasal oxygen on during attempts."
        },
        {
          "q": "Abdominal pain in a large patient: what limitation should you expect?",
          "options": [
            "Guarding and masses may not be felt despite serious disease",
            "The exam is easier",
            "Bowel sounds are louder",
            "The exam is always reliable"
          ],
          "correct": 0,
          "explanation": "Rely on vital signs, especially tachycardia."
        },
        {
          "q": "Severe (class III) obesity is a BMI of:",
          "options": [
            "40 or more",
            "25 or more",
            "30–34",
            "35 only"
          ],
          "correct": 0,
          "explanation": "Obesity starts at 30 (WHO)."
        },
        {
          "q": "Three weeks after weight-loss surgery: HR 128, abdominal pain, normal BP. Think of:",
          "options": [
            "Anastomotic leak until proven otherwise",
            "Anxiety",
            "Normal recovery",
            "Dehydration only"
          ],
          "correct": 0,
          "explanation": "Tachycardia can be the first and only sign."
        },
        {
          "q": "CPR on a patient with severe obesity:",
          "options": [
            "Same depth, rate and energies; firm surface; rotate compressors often",
            "Halve the depth",
            "Double the energy",
            "Don't defibrillate"
          ],
          "correct": 0,
          "explanation": "Change compressors every 2 minutes."
        }
      ],
      "flashcards": [
        {
          "question": "Ramped position",
          "answer": "Raise the head and shoulders until the ear canal is level with the sternal notch. Improves the airway view, bag-mask ventilation and oxygenation.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "Why rapid desaturation?",
          "answer": "Less lung reserve (the abdomen pushes up the diaphragm) and more oxygen use. Pre-oxygenate head-up for at least 3 minutes; nasal oxygen during attempts.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "Bariatric equipment",
          "answer": "Large cuffs, long IV catheters, 45 mm IO needles, long IM needles, bariatric cot, lifting aids, transfer mats, bariatric ambulance.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "Difficult IV access",
          "answer": "Longer catheters, external jugular, ultrasound. Low threshold for IO. Don't delay critical drugs: IO or IM.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "Obesity and drug doses",
          "answer": "Fat-soluble drugs (benzodiazepines, fentanyl, propofol) spread into fat and last longer. Follow protocol on which weight to use.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "Moving a bariatric patient",
          "answer": "Plan the route, call 4–6 or more people early, use lifts and transfer mats, never exceed equipment ratings, protect dignity.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "Listening through thick tissue",
          "answer": "Breath, heart and bowel sounds are quieter. Listen at the sides and back; silence doesn't rule out disease.",
          "category": "Bariatric Considerations"
        },
        {
          "question": "IM injections",
          "answer": "Use a 38 mm (1.5 inch) or longer needle into the anterolateral thigh so the drug reaches muscle.",
          "category": "Bariatric Considerations"
        }
      ],
      "critical": [
        {
          "id": "crit_7_8_1",
          "scenario": "Man about 180 kg (BMI 55), heart failure and sleep apnoea, CPAP broken. Upright, accessory muscles, 2–3 words, SpO₂ 86%. Second-floor flat with narrow stairs; your cot's rating is below his weight.",
          "question": "Management sequence?",
          "options": [
            {
              "t": "Oxygen, keep upright, CPAP if available, call fire service and a bariatric ambulance now, bag-mask if he tires, plan the route; protect his dignity",
              "f": "Correct."
            },
            {
              "t": "Bag-mask immediately and rush him down the stairs",
              "f": "Treat first; moving unsafely risks everyone."
            },
            {
              "t": "Refuse transport",
              "f": "Never: get the right resources."
            },
            {
              "t": "Use the standard cot anyway",
              "f": "Never exceed ratings."
            }
          ],
          "correct": 0,
          "explanation": "Resources take time: request them as soon as you see the need.",
          "kpi": "Treats respiratory distress while planning bariatric extrication"
        },
        {
          "id": "crit_7_8_2",
          "scenario": "BMI 46, severe asthma, tiring after nebulized albuterol; SpO₂ 90%. Your partner can't get a mask seal; SpO₂ drops to 84%.",
          "question": "Next steps?",
          "options": [
            {
              "t": "Two-person bag-mask with a two-hand seal and airway adjuncts, ramped position; supraglottic airway if still failing; ALS backup; continue albuterol",
              "f": "Correct."
            },
            {
              "t": "Press the mask harder",
              "f": "One-hand seals fail in large faces."
            },
            {
              "t": "Intubate immediately without fixing oxygenation",
              "f": "She'll desaturate further during attempts."
            },
            {
              "t": "Stop and go back to a non-rebreather",
              "f": "She's failing on it."
            }
          ],
          "correct": 0,
          "explanation": "Fix position and seal first.",
          "kpi": "Uses two-person BVM and airway alternatives in a bariatric patient"
        },
        {
          "id": "crit_7_8_3",
          "scenario": "Nursing facility: woman about 170 kg (BMI 50), recent hip replacement, confused, glucose 52 mg/dL. Third floor; your bariatric cot fits the doors and lift. Her daughter asks you to protect her dignity.",
          "question": "Best approach?",
          "options": [
            {
              "t": "Treat the hypoglycaemia first (IM glucagon 1 mg if no IV), then plan the move with enough people, a lift or slide sheet, covered and spoken to respectfully",
              "f": "Correct."
            },
            {
              "t": "Leave her at the facility",
              "f": "Unexplained hypoglycaemia with confusion needs assessment."
            },
            {
              "t": "Move first, treat in the ambulance",
              "f": "Treat the brain's fuel first."
            },
            {
              "t": "Wait for a specialty team before treating",
              "f": "Treat now."
            }
          ],
          "correct": 0,
          "explanation": "Protect the new hip during the transfer.",
          "kpi": "Prioritizes medical treatment and dignity during bariatric transfer"
        }
      ]
    }
  ]
};
