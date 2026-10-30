/* ========== Chapter 1 – Foundations of Care ==========
 * Each topic's page is a `guide` rendered by cpg-guide.js. Facts and numbers
 * follow data/references/c1.md (checked by tests/test_content_guides.py). */
window.CPG_DATA = {
  "id": "c1",
  "title": "Foundations of Care",
  "shortTitle": "1. Foundations of Care",
  "sections": [
    {
      "id": "c1s1",
      "shortTitle": "1.1 EMS, Systems & Professionalism",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "EMS, Systems & Professionalism",
        "lead": "An EMS system is a chain: someone recognises the emergency and calls, a dispatcher sends the right help and coaches the caller, crews treat under medical direction, hospitals take over, and quality review closes the loop. Know your link in the chain and exactly what you're authorised to do.",
        "sections": [
          {
            "type": "steps",
            "title": "The chain",
            "icon": "link",
            "steps": [
              {
                "title": "Public access",
                "text": "A bystander recognises the emergency and calls the emergency number (112, 911, 999 or local). Enhanced systems show the caller's location and callback number automatically."
              },
              {
                "title": "Dispatch",
                "text": "The emergency medical dispatcher asks structured questions, sends the right resources and gives pre-arrival instructions: CPR, bleeding control, childbirth."
              },
              {
                "title": "Response",
                "text": "First responders, then BLS and ALS crews as needed. Scene safety comes first on every call."
              },
              {
                "title": "Care under medical direction",
                "text": "Protocols and standing orders (offline) or a physician by radio or phone (online)."
              },
              {
                "title": "Destination",
                "text": "The right hospital, not just the nearest: trauma, stroke, STEMI, burns, pediatrics."
              },
              {
                "title": "Quality improvement",
                "text": "Review calls, find system problems, change protocols and training, measure again."
              }
            ]
          },
          {
            "type": "table",
            "title": "Provider levels (US model)",
            "icon": "user",
            "stack": true,
            "columns": [
              "Level",
              "Typical skills"
            ],
            "rows": [
              [
                "Emergency Medical Responder",
                "CPR, AED, bleeding control, basic airway, oxygen, naloxone"
              ],
              [
                "EMT",
                "Adds full assessment, supraglottic airways where allowed, CPAP, some medicines (aspirin, oral glucose, epinephrine auto-injector, naloxone)"
              ],
              [
                "Advanced EMT",
                "Adds IV and IO access and a few more medicines"
              ],
              [
                "Paramedic",
                "Advanced life support: intubation, manual defibrillation, pacing, cardiac and analgesic medicines"
              ]
            ],
            "notes": [
              "Other countries use similar tiers under different names. Your scope is set by your licence, local law and your medical director."
            ]
          },
          {
            "type": "table",
            "title": "Three terms that get confused",
            "icon": "scale",
            "stack": true,
            "columns": [
              "Term",
              "Means"
            ],
            "rows": [
              [
                "Scope of practice",
                "What the law and your medical director authorise you to do. Going outside it is practising medicine without a licence."
              ],
              [
                "Standard of care",
                "What a reasonable provider with your training would do in the same situation. You can be inside scope and still below standard (right drug, wrong dose)."
              ],
              [
                "Duty to act",
                "On duty, you must respond and care within your scope. Leaving a patient without handing over is abandonment."
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Medical direction",
            "icon": "stethoscope",
            "groups": [
              {
                "title": "Online (direct)",
                "items": [
                  "Real-time advice from a physician by radio or phone",
                  "Needed for orders outside your standing orders"
                ]
              },
              {
                "title": "Offline (indirect)",
                "items": [
                  "Written protocols and standing orders",
                  "Training, credentialing and case review"
                ]
              }
            ]
          },
          {
            "type": "list",
            "title": "A professional",
            "icon": "user",
            "items": [
              "Integrity: tells the truth, including about mistakes",
              "Empathy and respect for every patient",
              "Teamwork, clear communication and calm under stress",
              "Patient advocacy: the patient's interest first",
              "Physically fit, rested and well presented",
              "Keeps learning: in the US, NREMT certification renews every 2 years"
            ]
          },
          {
            "type": "list",
            "title": "Where EMS came from (US)",
            "icon": "book-open",
            "items": [
              "1966: the white paper \"Accidental Death and Disability: The Neglected Disease of Modern Society\" exposed poor prehospital care",
              "1966: the Highway Safety Act required states to build highway safety programmes, including EMS",
              "1973: the EMS Systems Act funded regional EMS systems",
              "Today: community paramedicine, mobile integrated health and data-driven quality improvement"
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
                    "label": "EMS tools",
                    "sub": "Scores and calculators",
                    "href": "../pages/ems-tools.html",
                    "icon": "wrench"
                  },
                  {
                    "label": "Courses",
                    "sub": "Certification reviews",
                    "href": "../pages/courses.html",
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
          "q": "Which 1966 publication started the modernisation of EMS in the United States?",
          "options": [
            "\"Accidental Death and Disability: The Neglected Disease of Modern Society\"",
            "The Highway Safety Act",
            "The National EMS Scope of Practice Model",
            "The EMS Systems Act"
          ],
          "correct": 0,
          "explanation": "Known as the white paper."
        },
        {
          "q": "The highest of the four US EMS provider levels is:",
          "options": [
            "Paramedic",
            "EMT",
            "Advanced EMT",
            "Emergency Medical Responder"
          ],
          "correct": 0,
          "explanation": "EMR, EMT, AEMT, paramedic."
        },
        {
          "q": "Written orders that let you treat without calling a physician first are:",
          "options": [
            "Standing orders",
            "Online medical direction",
            "Protocol waivers",
            "Standard of care"
          ],
          "correct": 0,
          "explanation": "Part of offline medical direction."
        },
        {
          "q": "Enhanced emergency-number systems give the dispatcher:",
          "options": [
            "The caller's location and callback number automatically",
            "The caller's medical history",
            "Live video",
            "Hospital bed availability"
          ],
          "correct": 0,
          "explanation": "Useful when the caller can't speak."
        },
        {
          "q": "Which part of the system recognises an emergency and activates it?",
          "options": [
            "Public access",
            "Dispatch",
            "First responders",
            "Medical direction"
          ],
          "correct": 0,
          "explanation": "The bystander and the emergency number."
        },
        {
          "q": "The physician responsible for an EMS system's clinical care is the:",
          "options": [
            "Medical director",
            "Chief executive",
            "EMS manager",
            "Attending physician"
          ],
          "correct": 0,
          "explanation": "Sets protocols, training and review."
        },
        {
          "q": "In the US model, IV and IO access starts at which level?",
          "options": [
            "Advanced EMT",
            "EMT",
            "Emergency Medical Responder",
            "First responder"
          ],
          "correct": 0,
          "explanation": "Paramedics have it too."
        },
        {
          "q": "Calling a physician before giving a particular drug is:",
          "options": [
            "Online medical direction",
            "Offline medical direction",
            "Standard of care",
            "A standing order"
          ],
          "correct": 0,
          "explanation": "Real-time contact by radio or phone."
        },
        {
          "q": "Which medicine is within the EMT scope (US model)?",
          "options": [
            "Naloxone for suspected opioid overdose",
            "Adenosine",
            "Fentanyl",
            "Lorazepam"
          ],
          "correct": 0,
          "explanation": "The others are paramedic medicines."
        },
        {
          "q": "The 1966 Highway Safety Act affected EMS mainly by:",
          "options": [
            "Requiring states to build highway safety programmes, including EMS",
            "Creating the first paramedic course",
            "Creating the National Registry",
            "Funding air ambulances"
          ],
          "correct": 0,
          "explanation": "It also created the federal transportation department's role in EMS."
        },
        {
          "q": "Continuous quality improvement (CQI) in EMS is mainly about:",
          "options": [
            "Reviewing care to find and fix system problems",
            "Punishing staff",
            "Increasing response times",
            "Replacing volunteers"
          ],
          "correct": 0,
          "explanation": "Non-punitive and data-driven."
        },
        {
          "q": "A community paramedic would most likely:",
          "options": [
            "Make home visits for medicine checks and chronic disease follow-up",
            "Perform surgery in the field",
            "Dispense prescriptions",
            "Run a mobile CT scanner"
          ],
          "correct": 0,
          "explanation": "Reduces avoidable emergency visits."
        },
        {
          "q": "Your first priority on arriving at any scene:",
          "options": [
            "Scene safety",
            "Patient assessment",
            "Gloves",
            "Calling medical direction"
          ],
          "correct": 0,
          "explanation": "An injured rescuer helps no one."
        },
        {
          "q": "The legal obligation of an on-duty provider to give care is:",
          "options": [
            "Duty to act",
            "Standard of care",
            "Good Samaritan law",
            "Scope of practice"
          ],
          "correct": 0,
          "explanation": "Leaving without handover is abandonment."
        },
        {
          "q": "The range of skills you are legally authorised to perform is your:",
          "options": [
            "Scope of practice",
            "Standard of care",
            "Protocol set",
            "Medical direction"
          ],
          "correct": 0,
          "explanation": "Set by law and your medical director."
        },
        {
          "q": "Performing a skill outside your legal scope is:",
          "options": [
            "Practising medicine without a licence",
            "A protocol variance",
            "Negligence only if harm occurs",
            "Acceptable if no paramedic is available"
          ],
          "correct": 0,
          "explanation": "Even if the patient does well."
        },
        {
          "q": "Which best shows the difference between scope of practice and standard of care?",
          "options": [
            "An EMT gives a drug in scope but at the wrong dose: within scope, below standard",
            "An EMT does good CPR",
            "A paramedic intubates",
            "An EMT refuses a violent patient"
          ],
          "correct": 0,
          "explanation": "Scope is what you may do; standard is how well you do it."
        },
        {
          "q": "How often does NREMT certification renew?",
          "options": [
            "Every 2 years",
            "Every year",
            "Every 5 years",
            "Never: it's lifelong"
          ],
          "correct": 0,
          "explanation": "Through continuing education or exam."
        }
      ],
      "flashcards": [
        {
          "question": "The 1966 white paper",
          "answer": "\"Accidental Death and Disability: The Neglected Disease of Modern Society\": exposed poor prehospital care in the US and led to EMS reform.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Four US EMS provider levels",
          "answer": "Emergency Medical Responder, EMT, Advanced EMT, Paramedic. Other countries use similar tiers.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Online vs offline medical direction",
          "answer": "Online: real-time advice from a physician by radio or phone. Offline: protocols, standing orders, training and case review.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Enhanced emergency-number systems",
          "answer": "Show the caller's location and callback number automatically, even if the caller can't speak.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Continuous quality improvement",
          "answer": "A cycle: review care, find problems, feed back, change the system, measure again. Non-punitive.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "1966 Highway Safety Act",
          "answer": "Required states to build highway safety programmes, including EMS.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Emergency medical dispatcher",
          "answer": "Answers the call, asks structured questions, sends the right resources and gives pre-arrival instructions (CPR, bleeding control).",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "EMT vs paramedic scope",
          "answer": "EMT: basic life support – assessment, bleeding control, basic and supraglottic airways, CPAP, limited medicines. Paramedic: advanced life support – intubation, IV/IO, manual defibrillation, pacing, advanced medicines.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Scope of practice vs standard of care",
          "answer": "Scope: what you are legally allowed to do. Standard: what a reasonable provider with your training would do in the same situation.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Duty to act",
          "answer": "On duty you must respond and care within your scope. Ending care without handing over to an equal or higher provider is abandonment.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "National certification (US)",
          "answer": "The National Registry of Emergency Medical Technicians (NREMT); renews every 2 years. Licensing is by the state.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "First action on every scene",
          "answer": "Scene safety: for you, your partner, the patient and bystanders.",
          "category": "EMS, Systems & Professionalism"
        },
        {
          "question": "Traits of a professional",
          "answer": "Integrity, empathy, respect, teamwork, communication, calm under stress, patient advocacy, fitness, lifelong learning.",
          "category": "EMS, Systems & Professionalism"
        }
      ],
      "critical": [
        {
          "id": "crit_1_1_1",
          "scenario": "Rural crash: an unconscious driver found by a passer-by. The dispatcher stayed on the line and coached the caller to open the airway and press on an arm wound. You're 20 minutes from a community hospital and 45 from a trauma centre.",
          "question": "The dispatcher's coaching is an example of:",
          "options": [
            {
              "t": "Emergency medical dispatch giving pre-arrival instructions",
              "f": "Correct."
            },
            {
              "t": "Online medical direction",
              "f": "No physician was involved."
            },
            {
              "t": "Offline medical direction",
              "f": "Those are protocols for clinicians."
            },
            {
              "t": "Quality improvement",
              "f": "That happens after the call."
            }
          ],
          "correct": 0,
          "explanation": "Dispatchers turn bystanders into the first link of care.",
          "kpi": "Identifies the role of emergency medical dispatch in the EMS system"
        },
        {
          "id": "crit_1_1_2",
          "scenario": "Your medical director adds CPAP for respiratory distress without needing to call. A 68-year-old with crackles and SpO₂ 88% improves to 94% on CPAP.",
          "question": "Treating without calling a physician is:",
          "options": [
            {
              "t": "Offline medical direction through a standing order",
              "f": "Correct."
            },
            {
              "t": "Online medical direction",
              "f": "You didn't call anyone."
            },
            {
              "t": "Expanding your own scope",
              "f": "The medical director authorised it."
            },
            {
              "t": "A deviation needing special documentation",
              "f": "It's the protocol."
            }
          ],
          "correct": 0,
          "explanation": "Standing orders are written in advance by the medical director.",
          "kpi": "Distinguishes online from offline medical direction"
        },
        {
          "id": "crit_1_1_3",
          "scenario": "A case review finds a ROSC patient went to a hospital without a cath lab and had to be transferred. Protocols had no post-arrest destination rule. A new rule sends ROSC patients to a PCI centre, adding 8 minutes of transport.",
          "question": "What does this show about CQI?",
          "options": [
            {
              "t": "It finds system problems and makes evidence-based changes",
              "f": "Correct."
            },
            {
              "t": "It punishes individuals",
              "f": "No one was at fault: the protocol was missing."
            },
            {
              "t": "It reduces transport times at all costs",
              "f": "The new rule adds time to save more."
            },
            {
              "t": "It replaces medical direction",
              "f": "The medical director led it."
            }
          ],
          "correct": 0,
          "explanation": "Good CQI fixes systems, not people.",
          "kpi": "Explains system-level continuous quality improvement"
        },
        {
          "id": "crit_1_1_4",
          "scenario": "During a transfer, a patient with a valid DNR you have seen goes into cardiac arrest. Your experienced partner says 'just start CPR – nobody checks the paperwork'.",
          "question": "Most professional decision?",
          "options": [
            {
              "t": "Honour the valid DNR, give comfort care, and explain your decision to your partner",
              "f": "Correct."
            },
            {
              "t": "Follow your partner because they're more experienced",
              "f": "Experience doesn't override the patient's legal wishes."
            },
            {
              "t": "Start CPR to protect yourself",
              "f": "Ignoring a valid DNR is a breach of the patient's rights."
            },
            {
              "t": "Call the dialysis centre first",
              "f": "They have no authority here."
            }
          ],
          "correct": 0,
          "explanation": "Document the DNR and the time of death per protocol.",
          "kpi": "Honors a valid DNR order under peer pressure"
        },
        {
          "id": "crit_1_1_5",
          "scenario": "Minor crash: a 35-year-old driver denies injury, is upset, must get to work, refuses assessment and signing, and walks away.",
          "question": "Most professional approach?",
          "options": [
            {
              "t": "Explain the risks if she will listen, then document her refusal, what you told her, and that she left without signing",
              "f": "Correct."
            },
            {
              "t": "Physically stop her",
              "f": "That's false imprisonment if she has capacity."
            },
            {
              "t": "Ask police to detain her",
              "f": "Not without a reason she lacks capacity."
            },
            {
              "t": "Follow her down the street",
              "f": "Unsafe and unhelpful."
            }
          ],
          "correct": 0,
          "explanation": "Witnesses (police, bystanders) strengthen the record.",
          "kpi": "Manages and documents a refusal from a patient who leaves"
        }
      ]
    },
    {
      "id": "c1s3",
      "shortTitle": "1.2 Workforce Safety & Wellness",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Workforce Safety & Wellness",
        "lead": "You can't help anyone if you become a patient. Read every scene before you walk in, park to protect yourself on roads, wait for police when violence is possible, and look after your body and mind over a long career.",
        "sections": [
          {
            "type": "gate",
            "title": "Safe to enter?",
            "icon": "triangle-alert",
            "question": "Violence or weapons, traffic, fire, hazardous materials, unstable structures, animals – or a situation you can't read?",
            "yes": "Stay back. Stage out of sight and out of range, call police, fire or hazmat, and enter only when it's safe or with a police escort into a protected (warm) zone.",
            "no": "Enter, keep scanning, keep an exit behind you, and stay with your partner."
          },
          {
            "type": "steps",
            "title": "Roadway scenes",
            "icon": "construction",
            "steps": [
              {
                "title": "Block",
                "text": "Park upstream at an angle so the vehicle shields the work area."
              },
              {
                "title": "Be seen",
                "text": "High-visibility vests on everyone; warning lights on; cones or flares upstream."
              },
              {
                "title": "Watch traffic",
                "text": "Never turn your back to traffic; load from the protected side."
              },
              {
                "title": "Belt up",
                "text": "Seat belts in the patient compartment whenever care allows: vehicle incidents are the leading cause of on-duty EMS deaths."
              }
            ]
          },
          {
            "type": "steps",
            "title": "Hazardous materials",
            "icon": "flask-conical",
            "steps": [
              {
                "title": "Stay away",
                "text": "Upwind, uphill and upstream."
              },
              {
                "title": "Identify from a distance",
                "text": "Placards, labels, shipping papers, binoculars; look it up in the Emergency Response Guidebook."
              },
              {
                "title": "Isolate and deny entry",
                "text": "Keep people out; call hazmat."
              },
              {
                "title": "Treat after decontamination",
                "text": "Patients come to you in the cold zone."
              }
            ]
          },
          {
            "type": "table",
            "title": "Three kinds of stress",
            "icon": "brain",
            "stack": true,
            "columns": [
              "Type",
              "Looks like",
              "Do"
            ],
            "rows": [
              [
                "Acute",
                "Fight or flight during or right after a call: racing heart, shaking, tunnel vision",
                "Breathe, take a break, talk with a peer; it usually settles"
              ],
              [
                "Delayed",
                "Flashbacks, nightmares, avoidance weeks later (possible PTSD)",
                "Seek help; trauma-focused therapy works"
              ],
              [
                "Cumulative (burnout)",
                "Exhaustion, cynicism, less empathy, feeling ineffective, drinking more",
                "Act early: rest, support, professional help"
              ]
            ]
          },
          {
            "type": "list",
            "title": "After a critical incident",
            "icon": "hand-heart",
            "items": [
              "Psychological first aid: safety, calm, connection, practical help",
              "Peer support and watchful waiting: most reactions settle within weeks",
              "Routine single-session debriefing (CISD) is no longer recommended; any session should be voluntary",
              "Symptoms beyond 1 month, or getting worse: get professional help",
              "Thoughts of suicide: tell someone today"
            ]
          },
          {
            "type": "list",
            "title": "Everyday wellness",
            "icon": "heart",
            "items": [
              "Sleep and fatigue management between shifts",
              "Real meals and water on shift; not energy drinks",
              "Strength and flexibility training for lifting",
              "Vaccinations up to date",
              "Time off, family and life outside EMS"
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
                    "sub": "Scene report for major incidents",
                    "href": "../pages/methane.html",
                    "icon": "megaphone"
                  },
                  {
                    "label": "MCI review",
                    "sub": "Major incident response",
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
          "q": "Gradual burnout over months or years of EMS work is:",
          "options": [
            "Cumulative stress",
            "Acute stress",
            "Delayed stress",
            "Critical incident stress"
          ],
          "correct": 0,
          "explanation": "Exhaustion, cynicism, less empathy."
        },
        {
          "q": "CISM stands for:",
          "options": [
            "Critical Incident Stress Management",
            "Critical Injury Scene Management",
            "Crisis Intervention for Stressed Medics",
            "Coordinated Incident Safety Measures"
          ],
          "correct": 0,
          "explanation": "A set of support services after critical incidents."
        },
        {
          "q": "First action when you suspect hazardous materials:",
          "options": [
            "Isolate the area and deny entry",
            "Approach to identify the substance",
            "Put on a hazmat suit and enter",
            "Treat visible patients"
          ],
          "correct": 0,
          "explanation": "Stay upwind, uphill, upstream; call hazmat."
        },
        {
          "q": "Current guidance on routine single-session debriefing (CISD) after a critical incident:",
          "options": [
            "Not recommended routinely; offer psychological first aid, peer support and follow-up",
            "Mandatory within 2 hours",
            "Mandatory for everyone at 24–72 hours",
            "Only for pediatric calls"
          ],
          "correct": 0,
          "explanation": "Traditionally held 24–72 hours after; WHO and NICE now advise against routine debriefing."
        },
        {
          "q": "Which is NOT a sign of cumulative stress?",
          "options": [
            "More empathy and compassion",
            "Emotional exhaustion",
            "Cynicism",
            "Feeling ineffective"
          ],
          "correct": 0,
          "explanation": "Burnout reduces empathy."
        },
        {
          "q": "The leading cause of on-duty EMS deaths is:",
          "options": [
            "Vehicle incidents: ambulance crashes and being struck by traffic",
            "Heart attack",
            "Violence",
            "Needlestick injury"
          ],
          "correct": 0,
          "explanation": "Belts, safe driving and roadway protection save lives."
        },
        {
          "q": "Best ambulance position at a roadway incident:",
          "options": [
            "Upstream, as a barrier between traffic and the scene",
            "Behind the scene with lights only",
            "Across the road",
            "Lights off to avoid distracting drivers"
          ],
          "correct": 0,
          "explanation": "Plus high-visibility vests and cones."
        },
        {
          "q": "After 8 years in EMS a provider feels numb, dreads work, snaps at family and drinks more after shifts. Most likely?",
          "options": [
            "Burnout that needs active help",
            "Normal adjustment",
            "A personality disorder",
            "Simple fatigue"
          ],
          "correct": 0,
          "explanation": "Act early: rest, support, professional help."
        },
        {
          "q": "After a traumatic pediatric arrest, what support helps most?",
          "options": [
            "Psychological first aid and peer support now, with follow-up and referral if symptoms persist",
            "Mandatory group debriefing that night",
            "Nothing: it'll pass",
            "Time off without contact"
          ],
          "correct": 0,
          "explanation": "Watchful waiting with support; help if symptoms last beyond 1 month."
        },
        {
          "q": "Best on-duty nutrition:",
          "options": [
            "Pack healthy meals and snacks; stay hydrated",
            "Skip meals",
            "Energy drinks",
            "One big meal at the end"
          ],
          "correct": 0,
          "explanation": "Steady energy and better decisions."
        },
        {
          "q": "Fight-or-flight during a critical call is:",
          "options": [
            "Acute stress",
            "Cumulative stress",
            "Delayed stress",
            "Chronic stress"
          ],
          "correct": 0,
          "explanation": "It usually settles after the call."
        },
        {
          "q": "Active shooter at a school; police still searching. You should:",
          "options": [
            "Stage safely until police declare it safe or escort you into a protected zone",
            "Rush in",
            "Wait in the ambulance with the doors open",
            "Put on a vest and go in alone"
          ],
          "correct": 0,
          "explanation": "Rescue task forces enter only with police protection."
        }
      ],
      "flashcards": [
        {
          "question": "Three types of stress",
          "answer": "Acute (during or right after a call), delayed (weeks later; possible PTSD), cumulative (burnout from long exposure).",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "CISM",
          "answer": "Critical Incident Stress Management: support after critical incidents. Today the focus is psychological first aid, peer support and follow-up rather than routine debriefing.",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "Defusing vs debriefing",
          "answer": "Defusing: short and informal, within hours. Debriefing (CISD): structured, traditionally 24–72 hours later – no longer recommended routinely; voluntary only.",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "Leading cause of on-duty EMS deaths",
          "answer": "Vehicle incidents: ambulance crashes and being struck by traffic.",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "Signs of burnout",
          "answer": "Emotional exhaustion, cynicism, less empathy (compassion fatigue), feeling ineffective, more alcohol.",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "Suspected hazardous materials",
          "answer": "Upwind, uphill, upstream; identify from a distance; isolate and deny entry; call hazmat; treat after decontamination.",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "Domains of wellness",
          "answer": "Physical (sleep, food, fitness), emotional and mental – all linked.",
          "category": "Workforce Safety & Wellness"
        },
        {
          "question": "When to get help after a bad call",
          "answer": "Symptoms lasting beyond 1 month, getting worse, or affecting work and home – or any thoughts of suicide.",
          "category": "Workforce Safety & Wellness"
        }
      ],
      "critical": [
        {
          "id": "crit_1_2_1",
          "scenario": "2 a.m., 'person down' in a dark alley; caller hung up. Several people stand in the shadows at the far end. Police are 8 minutes away. Your partner wants to go in.",
          "question": "Best decision?",
          "options": [
            {
              "t": "Stage at a safe distance and wait for police to secure the scene",
              "f": "Correct."
            },
            {
              "t": "Go in carefully",
              "f": "An unknown group in the dark is a threat."
            },
            {
              "t": "Send your partner alone",
              "f": "Never split up."
            },
            {
              "t": "Floodlights on and announce yourselves",
              "f": "That makes you a target."
            }
          ],
          "correct": 0,
          "explanation": "Scene safety comes before patient care.",
          "kpi": "Recognizes scene hazards and stages until secure"
        },
        {
          "id": "crit_1_2_2",
          "scenario": "End of a 14-hour shift: a 3-year-old drowning didn't survive. Your partner, whose child is the same age, says 'I'm fine, I'll have a beer and forget it' – hands shaking, voice unsteady.",
          "question": "Best action?",
          "options": [
            {
              "t": "Stay with them, offer peer support now and the employee support service, and check in over the next days",
              "f": "Correct."
            },
            {
              "t": "Let them go home alone",
              "f": "Support helps; alcohol doesn't."
            },
            {
              "t": "Tell them to toughen up",
              "f": "Harmful."
            },
            {
              "t": "Report them as unfit for duty",
              "f": "Acute stress reactions are normal."
            }
          ],
          "correct": 0,
          "explanation": "Watchful waiting with support; refer if symptoms persist beyond 1 month.",
          "kpi": "Supports a colleague after a critical incident"
        },
        {
          "id": "crit_1_2_3",
          "scenario": "Dusk, two-lane highway, traffic passing at speed. Car into a tree, smoke from the engine. The driver has a deformed femur and difficulty breathing; no police or fire yet.",
          "question": "Most critical safety step besides care?",
          "options": [
            {
              "t": "Park to block the lane, high-visibility vests on, cones out, request fire",
              "f": "Correct."
            },
            {
              "t": "Call the family",
              "f": "Not a safety measure."
            },
            {
              "t": "Start an IV first",
              "f": "Protect the scene first."
            },
            {
              "t": "Pull him out because of the smoke",
              "f": "Smoke alone isn't fire; assess and get fire service."
            }
          ],
          "correct": 0,
          "explanation": "If fire develops, an emergency move is justified.",
          "kpi": "Establishes roadway scene protection"
        }
      ]
    },
    {
      "id": "c1s4",
      "shortTitle": "1.3 Infection Prevention & PPE",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Infection Prevention & PPE",
        "lead": "Treat every patient's blood and body fluids as infectious, clean your hands constantly, and add PPE for how the germ spreads: contact, droplet or airborne. After an exposure, act within minutes and report it the same shift.",
        "sections": [
          {
            "type": "list",
            "title": "Standard precautions: every patient",
            "icon": "shield",
            "items": [
              "Hand hygiene before and after every contact",
              "Gloves for blood and body fluids",
              "Eye and face protection for splashes, suction and airway work",
              "Gown when clothing may be soiled",
              "Sharps: never recap; straight into a sharps container",
              "Mask the coughing patient",
              "Clean and disinfect equipment and the stretcher after each patient"
            ]
          },
          {
            "type": "table",
            "title": "Add for the route",
            "icon": "wind",
            "stack": true,
            "columns": [
              "Route",
              "Examples",
              "Add"
            ],
            "rows": [
              [
                "Contact",
                "MRSA wounds, C. difficile, norovirus, scabies",
                "Gloves and gown"
              ],
              [
                "Droplet",
                "Influenza, meningococcal disease, pertussis, mumps",
                "Surgical mask (and on the patient); eye protection for close airway work"
              ],
              [
                "Airborne",
                "Tuberculosis, measles, chickenpox, disseminated shingles",
                "Fit-tested N95 or higher, mask on the patient, maximum ventilation in the ambulance"
              ]
            ],
            "notes": [
              "N95: fit-tested every year and seal-checked every time you put it on."
            ]
          },
          {
            "type": "steps",
            "title": "Hand hygiene",
            "icon": "hand",
            "steps": [
              {
                "title": "Alcohol rub",
                "text": "At least 60% alcohol; rub all surfaces until dry."
              },
              {
                "title": "Soap and water instead",
                "text": "When hands are visibly soiled, after C. difficile or norovirus, and after the toilet: at least 20 seconds."
              }
            ]
          },
          {
            "type": "steps",
            "title": "PPE on and off",
            "icon": "shield",
            "steps": [
              {
                "title": "On",
                "text": "Gown → mask or respirator → eye protection → gloves."
              },
              {
                "title": "Off",
                "text": "Gloves → eye protection → gown → mask or respirator (last) → hand hygiene. Clean hands again if they get contaminated at any step."
              }
            ]
          },
          {
            "type": "steps",
            "title": "Needlestick or splash",
            "icon": "syringe",
            "steps": [
              {
                "title": "Clean",
                "text": "Wash with soap and water; don't scrub, squeeze or use bleach. Flush eyes, nose or mouth with water or saline."
              },
              {
                "title": "Report now",
                "text": "To your supervisor, the same shift. Note the source patient."
              },
              {
                "title": "Get assessed",
                "text": "HIV post-exposure prophylaxis as soon as possible – ideally within 2 hours, no later than 72 hours. Hepatitis B vaccine or immune globulin if not immune; hepatitis C follow-up testing."
              }
            ]
          },
          {
            "type": "table",
            "title": "Bloodborne viruses",
            "icon": "droplet",
            "stack": true,
            "columns": [
              "Virus",
              "Know"
            ],
            "rows": [
              [
                "Hepatitis B",
                "Survives on surfaces up to 7 days. Vaccine – employers must offer it free to at-risk staff (US OSHA)."
              ],
              [
                "Hepatitis C",
                "No vaccine. More than half of infections become chronic; now curable with treatment."
              ],
              [
                "HIV",
                "Risk after a needlestick from an HIV-positive source is about 0.3%; PEP lowers it further."
              ]
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Standard precautions apply to:",
          "options": [
            "Every patient, whatever their infection status",
            "Only known infections",
            "Only hospital patients",
            "Only symptomatic patients"
          ],
          "correct": 0,
          "explanation": "Assume all blood and body fluids are infectious."
        },
        {
          "q": "Which disease needs airborne precautions?",
          "options": [
            "Tuberculosis",
            "Influenza",
            "MRSA skin infection",
            "C. difficile"
          ],
          "correct": 0,
          "explanation": "Also measles, chickenpox and disseminated shingles."
        },
        {
          "q": "Minimum alcohol content for an effective hand rub:",
          "options": [
            "60%",
            "40%",
            "30%",
            "20%"
          ],
          "correct": 0,
          "explanation": "Rub until dry."
        },
        {
          "q": "After a needlestick, HIV post-exposure prophylaxis should start:",
          "options": [
            "As soon as possible – ideally within 2 hours, no later than 72 hours",
            "Within 7 days",
            "Only if the source tests positive",
            "At the end of the week"
          ],
          "correct": 0,
          "explanation": "Report immediately so assessment can start."
        },
        {
          "q": "Which US OSHA standard requires free hepatitis B vaccine for at-risk staff?",
          "options": [
            "Bloodborne Pathogens Standard",
            "Hazard Communication Standard",
            "Respiratory Protection Standard",
            "General Duty Clause"
          ],
          "correct": 0,
          "explanation": "29 CFR 1910.1030."
        },
        {
          "q": "Immediately after a needlestick:",
          "options": [
            "Wash with soap and water and report to your supervisor now",
            "Report at the end of the shift",
            "Bandage and carry on",
            "Soak in bleach"
          ],
          "correct": 0,
          "explanation": "Don't scrub or squeeze."
        },
        {
          "q": "Which virus can survive on surfaces for up to 7 days?",
          "options": [
            "Hepatitis B",
            "HIV",
            "Influenza",
            "Hepatitis C only in blood bags"
          ],
          "correct": 0,
          "explanation": "Clean surfaces thoroughly."
        },
        {
          "q": "Patient with a productive cough, night sweats and weight loss; you have only gloves. You:",
          "options": [
            "Put on an N95, mask the patient, and maximise ventilation",
            "Carry on with gloves",
            "Refuse transport",
            "Ask the patient to hold their breath"
          ],
          "correct": 0,
          "explanation": "Suspect tuberculosis: airborne precautions."
        },
        {
          "q": "Contact precautions are for:",
          "options": [
            "A patient with an MRSA wound infection",
            "Influenza",
            "Tuberculosis",
            "Measles"
          ],
          "correct": 0,
          "explanation": "Gloves and gown; clean the stretcher afterwards."
        },
        {
          "q": "Which is true of hepatitis C?",
          "options": [
            "No vaccine, and more than half of infections become chronic",
            "A vaccine exists",
            "It spreads through the air",
            "It can't survive outside the body"
          ],
          "correct": 0,
          "explanation": "Modern treatment cures most people."
        },
        {
          "q": "Handwashing with soap and water should last:",
          "options": [
            "At least 20 seconds",
            "5 seconds",
            "2 minutes",
            "Until the water is warm"
          ],
          "correct": 0,
          "explanation": "Cover all surfaces."
        },
        {
          "q": "Suspected meningococcal disease: your protection is mainly:",
          "options": [
            "A surgical mask (droplet precautions), with eye protection for close airway work",
            "Gloves only",
            "N95 and full hazmat suit",
            "Nothing: it isn't contagious"
          ],
          "correct": 0,
          "explanation": "Unprotected airway exposure needs preventive antibiotics."
        }
      ],
      "flashcards": [
        {
          "question": "Standard vs transmission-based precautions",
          "answer": "Standard: every patient. Transmission-based: added for contact, droplet or airborne spread.",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "Three transmission-based precautions",
          "answer": "Contact (gloves, gown), droplet (surgical mask), airborne (fit-tested N95 or higher).",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "Soap and water instead of alcohol rub",
          "answer": "Visibly soiled hands, C. difficile, norovirus, after the toilet.",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "Order for removing PPE",
          "answer": "Gloves → eye protection → gown → mask or respirator last → hand hygiene.",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "HIV post-exposure prophylaxis timing",
          "answer": "As soon as possible – ideally within 2 hours, no later than 72 hours.",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "Bloodborne pathogen law (US)",
          "answer": "OSHA Bloodborne Pathogens Standard (29 CFR 1910.1030): exposure plan, PPE, free hepatitis B vaccine, post-exposure care.",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "Airborne diseases",
          "answer": "Tuberculosis, measles, chickenpox, disseminated shingles.",
          "category": "Infection Prevention & PPE"
        },
        {
          "question": "N95 respirator",
          "answer": "Needed for airborne precautions. Fit-tested every year; seal-check every time you put it on.",
          "category": "Infection Prevention & PPE"
        }
      ],
      "critical": [
        {
          "id": "crit_1_3_1",
          "scenario": "Nursing home: 78-year-old on contact precautions for MRSA in a sacral wound, incontinent, needs full help to move. Your partner goes in with gloves only: 'We're just picking her up.'",
          "question": "Best infection-control action?",
          "options": [
            {
              "t": "Gloves and gown before entering; clean and disinfect the stretcher and ambulance after transport",
              "f": "Correct."
            },
            {
              "t": "Gloves only for a quick pickup",
              "f": "Close contact soils clothing."
            },
            {
              "t": "Mask only",
              "f": "MRSA spreads by contact."
            },
            {
              "t": "Ask staff to clean her first",
              "f": "Doesn't remove the need for PPE."
            }
          ],
          "correct": 0,
          "explanation": "Tell the hospital about the MRSA at handover.",
          "kpi": "Applies contact precautions and decontaminates equipment"
        },
        {
          "id": "crit_1_3_2",
          "scenario": "In the moving ambulance the patient jerks his arm and a used IV catheter punctures your gloved hand. He injects drugs; hepatitis and HIV status unknown. 15 minutes to hospital.",
          "question": "Correct sequence?",
          "options": [
            {
              "t": "Remove the glove, wash with soap and water (don't squeeze or scrub), tell your partner, report, and get assessed for PEP at the receiving hospital",
              "f": "Correct."
            },
            {
              "t": "Finish care and report after the shift",
              "f": "PEP works best early."
            },
            {
              "t": "Bandage and continue",
              "f": "Every exposure must be reported."
            },
            {
              "t": "Alcohol wipe and carry on",
              "f": "Wash, report, assess."
            }
          ],
          "correct": 0,
          "explanation": "HIV PEP ideally within 2 hours, no later than 72 hours; hepatitis B protection if not immune.",
          "kpi": "Follows post-exposure procedure after a needlestick"
        },
        {
          "id": "crit_1_3_3",
          "scenario": "30-year-old with fever, sore throat, coughing, and a fine rash; others at work are sick. You can't rule out measles. SpO₂ 94%.",
          "question": "PPE and infection control?",
          "options": [
            {
              "t": "N95, eye protection, gloves and gown; surgical mask on the patient; maximum ventilation in the ambulance",
              "f": "Correct."
            },
            {
              "t": "Gloves and a surgical mask on you",
              "f": "Measles is airborne."
            },
            {
              "t": "Gloves only",
              "f": "Not enough."
            },
            {
              "t": "Wait for a diagnosis",
              "f": "Protect yourself on suspicion."
            }
          ],
          "correct": 0,
          "explanation": "Warn the hospital so they can isolate him on arrival.",
          "kpi": "Selects airborne precautions for a suspected airborne disease"
        }
      ]
    },
    {
      "id": "c1s5",
      "shortTitle": "1.4 Medical, Legal & Ethical Issues",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Medical, Legal & Ethical Issues",
        "lead": "Most legal trouble in EMS comes from three things: not caring for someone you had a duty to, care below the standard, and careless records or talk. Know the elements of negligence, protect privacy, report what the law requires, and when principles collide, act in the patient's interest and call medical direction.",
        "sections": [
          {
            "type": "table",
            "title": "Negligence: all four must be proved",
            "icon": "scale",
            "stack": true,
            "columns": [
              "Element",
              "Means"
            ],
            "rows": [
              [
                "Duty",
                "You had an obligation to care (on duty, or once you started)"
              ],
              [
                "Breach",
                "You fell below the standard of care"
              ],
              [
                "Damages",
                "The patient was harmed"
              ],
              [
                "Causation",
                "Your breach caused the harm"
              ]
            ],
            "notes": [
              "Malicious intent is not needed."
            ]
          },
          {
            "type": "table",
            "title": "Terms to know",
            "icon": "book-open",
            "stack": true,
            "columns": [
              "Term",
              "Means"
            ],
            "rows": [
              [
                "Abandonment",
                "Ending care without handing over to an equal or higher provider"
              ],
              [
                "Assault / battery",
                "Threatening / touching without consent"
              ],
              [
                "False imprisonment",
                "Moving or holding a capable person against their will"
              ],
              [
                "Good Samaritan laws",
                "Protect off-duty helpers who act in good faith, within their training, without payment and without gross negligence"
              ]
            ]
          },
          {
            "type": "groups",
            "title": "Confidentiality",
            "icon": "key-round",
            "groups": [
              {
                "title": "Share with",
                "items": [
                  "Those caring for the patient",
                  "Billing and quality review",
                  "Whoever the law requires (courts, mandatory reports)"
                ]
              },
              {
                "title": "Never",
                "items": [
                  "Names on open radio channels",
                  "Talk in public – even without names if the patient could be identified",
                  "Photos or social media posts"
                ]
              }
            ],
            "notes": [
              "Laws differ (HIPAA in the US, GDPR in Europe); the principle is the same."
            ]
          },
          {
            "type": "list",
            "title": "Must report (varies by jurisdiction)",
            "icon": "megaphone",
            "items": [
              "Suspected child abuse or neglect",
              "Abuse of older or vulnerable adults",
              "Certain infectious diseases",
              "Gunshot and stab wounds in many places",
              "Animal bites",
              "Some crimes and domestic violence"
            ]
          },
          {
            "type": "steps",
            "title": "Crime scenes",
            "icon": "search",
            "steps": [
              {
                "title": "Safe first",
                "text": "Police secure the scene before you enter."
              },
              {
                "title": "Patient care comes first",
                "text": "But touch only what you need, and use one path in and out."
              },
              {
                "title": "Preserve evidence",
                "text": "Cut around bullet and knife holes; put clothing in separate paper bags; don't move weapons unless needed for safety."
              },
              {
                "title": "Document",
                "text": "What you moved, where, and who you handed things to."
              }
            ]
          },
          {
            "type": "table",
            "title": "Four ethical principles",
            "icon": "heart",
            "stack": true,
            "columns": [
              "Principle",
              "Means"
            ],
            "rows": [
              [
                "Autonomy",
                "Capable patients decide for themselves"
              ],
              [
                "Beneficence",
                "Act in the patient's best interest"
              ],
              [
                "Non-maleficence",
                "Do no harm"
              ],
              [
                "Justice",
                "Treat everyone fairly, whatever their race, money or status"
              ]
            ],
            "notes": [
              "A capable patient refusing care for a heart attack is autonomy against beneficence."
            ]
          },
          {
            "type": "list",
            "title": "End of life",
            "icon": "clipboard-list",
            "items": [
              "Valid out-of-hospital DNR: no CPR; give comfort care, even if family asks for more",
              "Living will alone (no DNR or POLST): start CPR and call medical direction, per local law",
              "DNR mentioned but not produced: start care; document your attempts to find it",
              "Organ donor: resuscitate exactly as you would anyone else"
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Scope of practice is best defined as:",
          "options": [
            "The range of duties authorised by law and medical direction",
            "What a reasonable provider would do",
            "Your ethical duties",
            "Minimum training hours"
          ],
          "correct": 0,
          "explanation": "Standard of care is what a reasonable provider would do."
        },
        {
          "q": "To prove negligence, a plaintiff does NOT need to show:",
          "options": [
            "Malicious intent",
            "Duty",
            "Breach",
            "Harm caused by the breach"
          ],
          "correct": 0,
          "explanation": "Duty, breach, damages, causation."
        },
        {
          "q": "Off duty, a shopper collapses. Good Samaritan protection does NOT cover:",
          "options": [
            "A procedure you are not trained for",
            "Care within your training",
            "Helping without payment",
            "Acting in good faith"
          ],
          "correct": 0,
          "explanation": "Gross negligence and acts beyond your training aren't protected."
        },
        {
          "q": "Discussing a patient in a restaurant without using the name is:",
          "options": [
            "A privacy breach if the patient could be identified",
            "Fine without a name",
            "Fine with healthcare friends",
            "Protected free speech"
          ],
          "correct": 0,
          "explanation": "Context can identify a patient."
        },
        {
          "q": "Which usually does NOT have to be reported?",
          "options": [
            "A patient who stopped taking blood pressure tablets",
            "Suspected child abuse",
            "Unexplained bruising in an older adult",
            "A gunshot wound"
          ],
          "correct": 0,
          "explanation": "Reporting rules vary; abuse and violence are the usual ones."
        },
        {
          "q": "Cardiac arrest with a valid out-of-hospital DNR; the family begs you to 'do something'. You:",
          "options": [
            "Follow the DNR and give comfort care",
            "Start CPR",
            "Call medical direction for permission to resuscitate",
            "Start and sort out the paperwork later"
          ],
          "correct": 0,
          "explanation": "Support the family; the patient's wishes stand."
        },
        {
          "q": "Refusing to treat a patient because of their race violates:",
          "options": [
            "Justice",
            "Autonomy",
            "Beneficence",
            "Non-maleficence"
          ],
          "correct": 0,
          "explanation": "Fair treatment for all."
        },
        {
          "q": "You must cut a shirt with a bullet hole. Best approach?",
          "options": [
            "Cut around the hole",
            "Cut through the hole",
            "Pull it over the head",
            "Leave it on"
          ],
          "correct": 0,
          "explanation": "Preserve evidence without delaying care."
        },
        {
          "q": "A registered organ donor is in cardiac arrest. You:",
          "options": [
            "Resuscitate exactly as for anyone else",
            "Withhold resuscitation",
            "Go only to a transplant centre",
            "Call medical direction before any care"
          ],
          "correct": 0,
          "explanation": "Donor status never changes your care."
        },
        {
          "q": "Cardiac arrest; the spouse shows a living will saying 'no heroic measures' but there is no DNR. You:",
          "options": [
            "Start CPR and contact medical direction",
            "Withhold CPR",
            "Start CPR and never call anyone",
            "Phone the family doctor before acting"
          ],
          "correct": 0,
          "explanation": "A living will is not a DNR order in most places."
        },
        {
          "q": "A parent refuses to let you assess a child you suspect is being abused. True statement:",
          "options": [
            "Call police and document what you saw and heard",
            "You can't do anything",
            "Leave and respect the parent",
            "Implied consent lets you examine the child against the parent's wishes"
          ],
          "correct": 0,
          "explanation": "Police can act to protect the child; report the concern."
        },
        {
          "q": "Which is a conflict between autonomy and beneficence?",
          "options": [
            "A capable patient with a likely heart attack refuses transport",
            "Family wants CPR despite a valid DNR",
            "Choosing between patients at a mass casualty",
            "A paramedic acting outside scope"
          ],
          "correct": 0,
          "explanation": "Respect the choice; keep trying to persuade; document."
        }
      ],
      "flashcards": [
        {
          "question": "Scope of practice vs standard of care",
          "answer": "Scope: what the law and your medical director allow. Standard: what a reasonable provider with your training would do in the same situation.",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Four elements of negligence",
          "answer": "Duty, breach, damages, causation. All four must be proved.",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Good Samaritan protection",
          "answer": "Good faith, within your training, no payment, no gross negligence. Mostly for off-duty help.",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Mandatory reports",
          "answer": "Child abuse, abuse of older or vulnerable adults, certain infections, often gunshot and stab wounds, animal bites, some crimes – per local law.",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Four ethical principles",
          "answer": "Autonomy, beneficence (do good), non-maleficence (do no harm), justice (fairness).",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Family says there's a DNR but can't find it",
          "answer": "Start resuscitation and contact medical direction. Document your attempts to find it.",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Crime scene priorities",
          "answer": "Scene safety first (police), then patient care, then evidence: touch little, cut around holes, paper bags, document what you moved.",
          "category": "Medical, Legal & Ethical Issues"
        },
        {
          "question": "Patient privacy",
          "answer": "Share only with those caring for the patient, billing, quality review or as the law requires. Breaches bring fines, dismissal and, for deliberate misuse, criminal charges (HIPAA, GDPR and others).",
          "category": "Medical, Legal & Ethical Issues"
        }
      ],
      "critical": [
        {
          "id": "crit_1_4_1",
          "scenario": "Police have secured a home: a woman with a gunshot wound to the lower abdomen, weak radial pulse. You need to expose the wound. She begs: 'Don't tell my husband I was here with someone else.'",
          "question": "How do you balance care, evidence and confidentiality?",
          "options": [
            {
              "t": "Cut around the bullet hole, bag the clothing, give full care, document; explain that you'll share only what her care and the law require",
              "f": "Correct."
            },
            {
              "t": "Transport fully clothed to preserve evidence",
              "f": "Care comes first."
            },
            {
              "t": "Cut through the hole and promise total secrecy",
              "f": "You can't promise that, and evidence is lost."
            },
            {
              "t": "Wait for police photos before care",
              "f": "She's in shock."
            }
          ],
          "correct": 0,
          "explanation": "Her personal life isn't yours to share with her husband.",
          "kpi": "Balances patient care, evidence preservation and confidentiality"
        },
        {
          "id": "crit_1_4_2",
          "scenario": "Nursing home: 82-year-old, fever, RR 28, SpO₂ 88%. Staff say there's a DNR but can't find it. His daughter says 'no oxygen, no hospital'; his son says 'do everything – DNR means no CPR only'.",
          "question": "Best course?",
          "options": [
            {
              "t": "Oxygen and transport; explain that a DNR covers CPR only and can't be confirmed; withhold CPR only if a valid DNR is produced",
              "f": "Correct."
            },
            {
              "t": "Follow the daughter and withhold care",
              "f": "A DNR isn't 'do not treat', and it isn't confirmed."
            },
            {
              "t": "Ask medical direction whether to ignore the DNR",
              "f": "You can contact them, but treat first."
            },
            {
              "t": "Transport without oxygen",
              "f": "He's hypoxic."
            }
          ],
          "correct": 0,
          "explanation": "Contact medical direction if the family conflict continues.",
          "kpi": "Distinguishes DNR from withholding treatment"
        },
        {
          "id": "crit_1_4_3",
          "scenario": "A 19-year-old took pills after a break-up; now awake. She begs you not to tell her strict parents, who are waiting at the hospital.",
          "question": "How do you handle confidentiality?",
          "options": [
            {
              "t": "Tell her you must give the hospital the full facts for her safety, document accurately, and leave what is shared with her parents to the hospital team",
              "f": "Correct."
            },
            {
              "t": "Tell her parents it was food poisoning",
              "f": "Lying endangers her."
            },
            {
              "t": "Ask police to inform the parents",
              "f": "Not their role."
            },
            {
              "t": "Leave the overdose out of the report",
              "f": "Falsifying records is illegal and unsafe."
            }
          ],
          "correct": 0,
          "explanation": "Don't discuss details with family yourself; suicide risk needs full assessment.",
          "kpi": "Maintains confidentiality while ensuring accurate clinical handover"
        }
      ]
    },
    {
      "id": "c1s6",
      "shortTitle": "1.5 Consent, Refusal & Advance Directives",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Consent, Refusal & Advance Directives",
        "lead": "Every touch needs consent. Adults with capacity decide for themselves, even when you disagree; unconscious patients in an emergency are treated under implied consent. When someone refuses, make sure the refusal is informed, capable and voluntary – and write it down.",
        "sections": [
          {
            "type": "table",
            "title": "Types of consent",
            "icon": "handshake",
            "stack": true,
            "columns": [
              "Type",
              "When"
            ],
            "rows": [
              [
                "Expressed (informed)",
                "A capable adult agrees after you explain what you'll do, why, and the risks – in words or by actions"
              ],
              [
                "Implied",
                "Unconscious or unable to decide, with a serious threat: the law assumes they would agree"
              ],
              [
                "Minors",
                "A parent or guardian decides. Emancipated minors (married, in the military, financially independent, or a parent) decide for themselves. Emergency with no parent: implied consent"
              ],
              [
                "Involuntary",
                "Court order, emergency mental health hold or police custody, per local law"
              ]
            ]
          },
          {
            "type": "gate",
            "title": "Can this patient refuse?",
            "icon": "brain",
            "question": "An adult (or emancipated minor) who can understand, retain and weigh the information and communicate a choice – not impaired by low oxygen, low glucose, head injury, intoxication or shock?",
            "yes": "Respect the decision. Explain the risks (including death) in plain words, offer alternatives and a way back, involve family if they agree, call medical direction, document.",
            "no": "They lack capacity for this decision: treat in their best interest under your protocol, with police and medical direction as needed."
          },
          {
            "type": "steps",
            "title": "Refusal checklist",
            "icon": "clipboard-list",
            "steps": [
              {
                "title": "Assess",
                "text": "Full assessment and vital signs if they allow; mental status and glucose."
              },
              {
                "title": "Inform",
                "text": "What you think is wrong, what could happen, what treatment offers, other options."
              },
              {
                "title": "Persuade",
                "text": "Try again, involve family or friends, and ask medical direction to speak to them."
              },
              {
                "title": "Leave a safety net",
                "text": "Call back any time; signs that mean call now."
              },
              {
                "title": "Document",
                "text": "Capacity, what you explained, their words, signature or refusal to sign, a witness."
              }
            ]
          },
          {
            "type": "table",
            "title": "Advance directives",
            "icon": "scroll",
            "stack": true,
            "columns": [
              "Document",
              "Covers"
            ],
            "rows": [
              [
                "DNR (DNACPR)",
                "No CPR if they arrest. Everything else is still offered."
              ],
              [
                "POLST / MOLST and similar",
                "A medical order for the level of treatment: full, limited or comfort; CPR, intubation, antibiotics, tube feeding"
              ],
              [
                "Living will",
                "The patient's wishes, often vague (\"no heroic measures\"). Without a DNR or POLST: start care and call medical direction"
              ],
              [
                "Healthcare power of attorney",
                "A named person decides when the patient can't"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Rules of thumb",
            "icon": "lightbulb",
            "items": [
              "Not sure a document is valid or present? Start care and call medical direction",
              "A DNR is not \"do not treat\"",
              "A valid directive outweighs family wishes",
              "Organ donor status never changes resuscitation",
              "A patient on a legal mental health hold can't refuse transport"
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Unconscious, unidentified crash victim with head trauma. Which consent applies?",
          "options": [
            "Implied consent",
            "Expressed consent",
            "Involuntary consent",
            "Court-ordered consent"
          ],
          "correct": 0,
          "explanation": "Serious threat and unable to decide."
        },
        {
          "q": "Who can give consent for their own care?",
          "options": [
            "A married, financially independent 17-year-old",
            "A 16-year-old living with parents",
            "A mature 10-year-old",
            "A 15-year-old with a school trip form"
          ],
          "correct": 0,
          "explanation": "Emancipated minors decide for themselves."
        },
        {
          "q": "A capable patient who agreed earlier now says 'stop'. You:",
          "options": [
            "Stop and explain the risks of refusing",
            "Continue because they agreed first",
            "Call police to force care",
            "Continue under implied consent"
          ],
          "correct": 0,
          "explanation": "Consent can be withdrawn at any time."
        },
        {
          "q": "A patient on a legal mental health hold:",
          "options": [
            "Can't refuse transport for the evaluation",
            "Can sign out against advice",
            "Must go to a medical hospital first",
            "Doesn't need assessment"
          ],
          "correct": 0,
          "explanation": "Still assess and treat medical problems."
        },
        {
          "q": "90-year-old in arrest; the nurse shows a valid out-of-hospital DNR. You:",
          "options": [
            "Withhold CPR and give comfort care per protocol",
            "Compress while you read it",
            "Transport without care",
            "Ask medical direction for permission to honour it"
          ],
          "correct": 0,
          "explanation": "A valid DNR is followed."
        },
        {
          "q": "A capable man with chest pain refused, signed after being told he could die, and died 2 hours later. Most accurate?",
          "options": [
            "A capable, informed, voluntary, documented refusal protects the crew",
            "The crew is automatically negligent",
            "Police should have forced him",
            "The crew can't be protected because he died"
          ],
          "correct": 0,
          "explanation": "Capacity, information and documentation are the defence."
        },
        {
          "q": "Living will says 'no heroic measures'; SpO₂ 82% in respiratory distress; no DNR or POLST. You:",
          "options": [
            "Treat fully with oxygen and transport; contact medical direction",
            "Withhold oxygen",
            "Oxygen but no transport",
            "Follow the living will word for word"
          ],
          "correct": 0,
          "explanation": "Oxygen isn't heroic, and a living will isn't a medical order."
        },
        {
          "q": "Under organ donation law, you should:",
          "options": [
            "Give all patients the same full resuscitation",
            "Withhold CPR from donors",
            "Call the transplant service before treating",
            "Take donors to a transplant centre"
          ],
          "correct": 0,
          "explanation": "Donation is considered only after death."
        },
        {
          "q": "Combative, psychotic patient on a police mental health hold refuses the stretcher. Your role:",
          "options": [
            "Police handle safety and restraint; you assess, treat and transport under the hold",
            "Restrain him yourselves",
            "Refuse to transport",
            "Only persuade"
          ],
          "correct": 0,
          "explanation": "Monitor closely if restrained."
        },
        {
          "q": "DNR vs POLST:",
          "options": [
            "DNR covers CPR only; POLST also covers intubation, antibiotics and tube feeding",
            "They are the same",
            "POLST applies only in hospitals",
            "POLST is valid only in nursing homes"
          ],
          "correct": 0,
          "explanation": "POLST is a broader medical order."
        },
        {
          "q": "After a crash, an alert woman smelling of alcohol wants to sign out. You:",
          "options": [
            "Assess capacity carefully – alcohol can impair it – and involve medical direction",
            "Let her sign: she's oriented",
            "Have police force her",
            "Let her sign and note the alcohol"
          ],
          "correct": 0,
          "explanation": "Intoxication doesn't always remove capacity, but you must check."
        },
        {
          "q": "92-year-old with dementia and possible sepsis; DNR says 'no CPR'; family wants her to die at home. You:",
          "options": [
            "Explain options; comfort care and treatment of the sepsis are allowed – the DNR covers only CPR; follow her known wishes with medical direction",
            "Leave immediately: she has a DNR",
            "Full ACLS and intubation",
            "Ignore the DNR"
          ],
          "correct": 0,
          "explanation": "If a POLST or proxy chooses comfort care at home, palliative pathways may apply."
        }
      ],
      "flashcards": [
        {
          "question": "Expressed vs implied consent",
          "answer": "Expressed: a capable, informed adult agrees. Implied: unconscious or unable to decide in an emergency – the law assumes they would agree.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "A valid refusal",
          "answer": "Capable (not impaired by hypoxia, glucose, head injury, intoxication or illness), informed of the risks, voluntary, and documented.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "Consent for minors",
          "answer": "Parent, guardian or person in that role. Emancipated minors decide for themselves. Emergency with no parent: implied consent.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "POLST vs DNR",
          "answer": "DNR: CPR only. POLST (or MOLST and similar): a medical order covering CPR, intubation, antibiotics, tube feeding and the overall level of care.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "Documenting a refusal",
          "answer": "Assessment and vital signs, capacity, what you recommended, risks explained, their words, signature or refusal to sign, witness, medical direction contact.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "Mental health hold",
          "answer": "A patient on a valid legal hold can't refuse transport for evaluation. Assess and treat medical problems; police manage safety.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "Treating regardless of ability to pay",
          "answer": "Care can't be refused or delayed for insurance, money or status. In US hospitals, EMTALA requires screening and stabilisation for everyone.",
          "category": "Consent, Refusal & Advance Directives"
        },
        {
          "question": "Healthcare power of attorney",
          "answer": "The person the patient chose to decide for them when they can't. Follow their decisions within the law and your protocol.",
          "category": "Consent, Refusal & Advance Directives"
        }
      ],
      "critical": [
        {
          "id": "crit_1_5_1",
          "scenario": "68-year-old, pale and sweaty, 8/10 chest pain to the left arm for 45 minutes. BP 100/68, HR 104. 'I know it's a heart attack. I'm not going.' His son says he's not confused.",
          "question": "How do you manage the refusal?",
          "options": [
            {
              "t": "Check capacity carefully (perfusion, glucose, understanding), explain the risks plainly, keep persuading, involve medical direction; if he still refuses with capacity, document fully with witnesses",
              "f": "Correct."
            },
            {
              "t": "Have him sign and leave at once",
              "f": "Make every effort first."
            },
            {
              "t": "Force him under implied consent",
              "f": "He's conscious and may have capacity."
            },
            {
              "t": "Mental health hold for refusing",
              "f": "Refusing care isn't a mental illness."
            }
          ],
          "correct": 0,
          "explanation": "Leave aspirin per protocol and tell the family to call back immediately.",
          "kpi": "Assesses capacity and manages a high-risk refusal"
        },
        {
          "id": "crit_1_5_2",
          "scenario": "85-year-old with advanced dementia, glucose 42 then 38 mg/dL, increasingly drowsy. The daughter says a living will says 'no extraordinary measures'; nobody can find it. You have standing orders for glucagon.",
          "question": "How do you proceed?",
          "options": [
            {
              "t": "Treat the hypoglycaemia now (IM glucagon), explain that without a valid order you must give emergency care, and contact medical direction if she objects",
              "f": "Correct."
            },
            {
              "t": "Withhold treatment",
              "f": "No valid document, and glucose isn't extraordinary."
            },
            {
              "t": "Transport without treatment",
              "f": "She's deteriorating now."
            },
            {
              "t": "Oral glucose only",
              "f": "Not safe in a drowsy patient."
            }
          ],
          "correct": 0,
          "explanation": "Simple, reversible treatment fits almost anyone's wishes.",
          "kpi": "Provides emergency care when an advance directive is unverified"
        },
        {
          "id": "crit_1_5_3",
          "scenario": "2 a.m., a 19-year-old international student: slurred speech, unsteady, smells of alcohol; vital signs stable. She refuses: she fears losing her scholarship and visa.",
          "question": "How do you handle the refusal?",
          "options": [
            {
              "t": "Assess capacity; with slurred speech and ataxia she probably lacks it. Reassure her about confidentiality, contact medical direction, transport in her best interest, and document accurately",
              "f": "Correct."
            },
            {
              "t": "Let her sign: she explains herself well",
              "f": "Clear reasons don't prove capacity when intoxicated."
            },
            {
              "t": "Mental health hold",
              "f": "Wrong tool."
            },
            {
              "t": "Leave the drinking out of the report",
              "f": "Never alter the record; confidentiality protects her instead."
            }
          ],
          "correct": 0,
          "explanation": "Hospitals don't report patients to universities; tell her so.",
          "kpi": "Assesses capacity in an intoxicated patient and documents truthfully"
        }
      ]
    },
    {
      "id": "c1s7",
      "shortTitle": "1.6 Communication & Handoff",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Communication & Handoff",
        "lead": "Good care is lost in bad handovers. Use a fixed structure on the radio and at the bedside, close the loop on every order, speak up clearly when something is wrong, and talk to the patient – at their level and in their language.",
        "sections": [
          {
            "type": "steps",
            "title": "Radio report (keep it under 30 seconds)",
            "icon": "radio",
            "steps": [
              {
                "title": "Who and where",
                "text": "Your unit and destination; ETA."
              },
              {
                "title": "Patient",
                "text": "Age and sex – never the name."
              },
              {
                "title": "Problem",
                "text": "Chief complaint and relevant history (risk factors, medicines)."
              },
              {
                "title": "Findings",
                "text": "Key assessment findings and vital signs."
              },
              {
                "title": "Treatment",
                "text": "What you gave and how they responded."
              },
              {
                "title": "Ask",
                "text": "Requests (orders, team activation), then confirm you were heard."
              }
            ]
          },
          {
            "type": "table",
            "title": "Handover formats",
            "icon": "clipboard-list",
            "stack": true,
            "columns": [
              "Format",
              "Parts"
            ],
            "rows": [
              [
                "SBAR",
                "Situation, Background, Assessment, Recommendation"
              ],
              [
                "ATMIST (trauma)",
                "Age, Time of injury, Mechanism, Injuries, Signs (vital signs), Treatment"
              ],
              [
                "Hands-off handover",
                "On arrival the team listens while one person speaks; then the transfer of the patient"
              ]
            ],
            "notes": [
              "Add trends, response to treatment, scene details, pertinent negatives, and where belongings are."
            ]
          },
          {
            "type": "groups",
            "title": "Team communication",
            "icon": "message-circle-question",
            "groups": [
              {
                "title": "Closed loop",
                "items": [
                  "Order: \"Give 0.3 mg epinephrine IM\"",
                  "Read back: \"0.3 mg epinephrine IM\"",
                  "Confirm: \"Correct\""
                ]
              },
              {
                "title": "Speaking up: CUS",
                "items": [
                  "I'm Concerned…",
                  "I'm Uncomfortable…",
                  "This is a Safety issue",
                  "Say it twice; then escalate"
                ]
              }
            ]
          },
          {
            "type": "table",
            "title": "Talking to patients",
            "icon": "user",
            "stack": true,
            "columns": [
              "Patient",
              "Do"
            ],
            "rows": [
              [
                "Children",
                "Get to eye level, use simple honest words, explain before you touch, keep the parent close"
              ],
              [
                "Older adults",
                "Introduce yourself, address them respectfully, check hearing aids and glasses, allow time"
              ],
              [
                "Hearing loss",
                "Face them in good light, write key questions, gesture; don't shout"
              ],
              [
                "Another language",
                "Professional interpreter (phone or video); family only for basics"
              ],
              [
                "Anxious or angry",
                "Calm voice, use their name, acknowledge feelings, offer choices"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Asking questions",
            "icon": "message-circle-question",
            "items": [
              "Start open: \"Tell me what happened\"",
              "Then closed to clarify: \"Does it spread to your arm?\"",
              "Listen actively; repeat back what you heard",
              "No jargon"
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
                    "sub": "Structured major-incident message",
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
          "q": "A radio report to hospital should NOT include:",
          "options": [
            "The patient's full name and ID number",
            "Chief complaint",
            "Vital signs",
            "Treatment and response"
          ],
          "correct": 0,
          "explanation": "Radio channels can be overheard."
        },
        {
          "q": "SBAR in order:",
          "options": [
            "Situation, Background, Assessment, Recommendation",
            "Situation, Assessment, Background, Recommendation",
            "Background, Situation, Assessment, Recommendation",
            "Situation, Background, Recommendation, Assessment"
          ],
          "correct": 0,
          "explanation": "A standard handover structure."
        },
        {
          "q": "'Give 0.3 mg epinephrine' – '0.3 mg epinephrine' – 'Correct.' This is:",
          "options": [
            "Closed-loop communication",
            "Open-ended questioning",
            "SBAR",
            "Therapeutic communication"
          ],
          "correct": 0,
          "explanation": "Order, read-back, confirm."
        },
        {
          "q": "Which is an open-ended question?",
          "options": [
            "\"Can you tell me what happened before the pain?\"",
            "\"Did you take your medicine today?\"",
            "\"Does your chest hurt?\"",
            "\"Are you allergic to anything?\""
          ],
          "correct": 0,
          "explanation": "It can't be answered yes or no."
        },
        {
          "q": "Best approach to a 7-year-old who fell off a bike:",
          "options": [
            "Get to eye level, use simple words, explain what you're doing",
            "Talk only to the parent",
            "Use medical terms",
            "Ignore the tears"
          ],
          "correct": 0,
          "explanation": "Honest and simple builds trust."
        },
        {
          "q": "Blood pressure is falling during transport. Using CUS, a team member says:",
          "options": [
            "\"I'm concerned about the falling pressure, I'm uncomfortable continuing without acting – this is a safety issue.\"",
            "\"Hey, BP's dropping.\"",
            "\"Should we do something?\"",
            "\"It's 88/50, not sure it matters.\""
          ],
          "correct": 0,
          "explanation": "Clear words that can't be ignored."
        },
        {
          "q": "Radio communication:",
          "options": [
            "Keep transmissions brief – typically under 30 seconds",
            "Use your own codes",
            "Give the patient's name",
            "Profanity is acceptable under stress"
          ],
          "correct": 0,
          "explanation": "Plain language, no names."
        },
        {
          "q": "'History of COPD and heart failure; SpO₂ 88% on room air, 94% on 4 L/min by nasal cannula.' Which SBAR part is the history?",
          "options": [
            "Background",
            "Situation",
            "Assessment",
            "Recommendation"
          ],
          "correct": 0,
          "explanation": "The oxygen findings and response belong to the assessment."
        },
        {
          "q": "Best way to communicate with a severely hearing-impaired patient:",
          "options": [
            "Face them, write key questions and use gestures",
            "Shout in their ear",
            "Use family for everything",
            "Speak normally and hope they lip-read"
          ],
          "correct": 0,
          "explanation": "Use a qualified sign language interpreter if available."
        },
        {
          "q": "The physician asks why you gave aspirin; you never mentioned hypertension, smoking or family history. Your report missed:",
          "options": [
            "Relevant history",
            "Assessment findings",
            "Treatment response",
            "ETA"
          ],
          "correct": 0,
          "explanation": "History explains your treatment."
        },
        {
          "q": "Communicating with command at a major incident:",
          "options": [
            "Use incident command terms and send only essential information",
            "Use any open channel",
            "Give a full report on every patient",
            "Give patients' names"
          ],
          "correct": 0,
          "explanation": "Short, structured messages; METHANE for the first report."
        },
        {
          "q": "'68-year-old, left-sided weakness from 2 hours ago, AF, stroke score 12, meets stroke alert – we need CT and the stroke team.' This covers:",
          "options": [
            "Situation and Recommendation",
            "Only Assessment",
            "Only Background",
            "Situation only"
          ],
          "correct": 0,
          "explanation": "AF is background; the request is the recommendation."
        }
      ],
      "flashcards": [
        {
          "question": "Radio report contents",
          "answer": "Unit and destination, age and sex (no name), chief complaint, relevant history, findings and vital signs, treatment and response, ETA, requests.",
          "category": "Communication & Handoff"
        },
        {
          "question": "SBAR",
          "answer": "Situation, Background, Assessment, Recommendation: a structure for handover.",
          "category": "Communication & Handoff"
        },
        {
          "question": "Closed-loop communication",
          "answer": "Sender gives the order, receiver reads it back, sender confirms. Prevents errors in drugs and procedures.",
          "category": "Communication & Handoff"
        },
        {
          "question": "No names on the radio",
          "answer": "Radio traffic can be overheard; protect confidentiality.",
          "category": "Communication & Handoff"
        },
        {
          "question": "Therapeutic communication",
          "answer": "Active listening, open-ended questions, empathy without judgement, plain language.",
          "category": "Communication & Handoff"
        },
        {
          "question": "Language barriers",
          "answer": "Use a professional interpreter (phone or video). Avoid family, especially children. Speak to the patient in short sentences.",
          "category": "Communication & Handoff"
        },
        {
          "question": "CUS words",
          "answer": "Concerned, Uncomfortable, Safety issue: a clear signal that the team must stop and act.",
          "category": "Communication & Handoff"
        },
        {
          "question": "Beyond SBAR at handover",
          "answer": "Trends and response to treatment, changes en route, scene details, pertinent negatives, family statements, belongings. Trauma: ATMIST.",
          "category": "Communication & Handoff"
        }
      ],
      "critical": [
        {
          "id": "crit_1_6_1",
          "scenario": "Chest pain patient: after nitroglycerin his BP drops from 128/78 to 82/50, HR 94 to 46; sweaty and confused, pulling at his mask. You're alone in the back.",
          "question": "How do you handle communication?",
          "options": [
            {
              "t": "Treat first, then give the hospital a brief update on the change and treatment (or ask your partner or dispatch to); use closed-loop with any orders",
              "f": "Correct."
            },
            {
              "t": "Wait until arrival to report",
              "f": "The team needs to prepare."
            },
            {
              "t": "Long full report before treating",
              "f": "Patient first; keep it short."
            },
            {
              "t": "Ignore the radio entirely",
              "f": "A brief pre-alert matters."
            }
          ],
          "correct": 0,
          "explanation": "A 20-second update lets the cath lab and team get ready.",
          "kpi": "Prioritizes care and gives a concise update on deterioration"
        },
        {
          "id": "crit_1_6_2",
          "scenario": "72-year-old with sudden confusion, mixing English and Mandarin, terrified: 'No hospital.' Her husband's English is limited. You need a stroke assessment.",
          "question": "How do you manage the language barrier?",
          "options": [
            {
              "t": "Use a phone or video interpreter service; meanwhile simple words, gestures and her husband for basics; continue the interpreter en route",
              "f": "Correct."
            },
            {
              "t": "Rely on the husband for everything",
              "f": "Medical accuracy needs a professional."
            },
            {
              "t": "Skip the neuro exam",
              "f": "Stroke timing and deficits matter."
            },
            {
              "t": "Wait for a Mandarin-speaking crew",
              "f": "Delay is dangerous in stroke."
            }
          ],
          "correct": 0,
          "explanation": "Get last known well time from the husband.",
          "kpi": "Uses professional interpretation to complete a time-critical assessment"
        },
        {
          "id": "crit_1_6_3",
          "scenario": "Rear-end crash: alert driver with a forehead bruise and midline neck tenderness refuses a collar and transport – she has to collect her children in an hour.",
          "question": "How do you communicate for the best outcome?",
          "options": [
            {
              "t": "Explain your specific concern (midline tenderness could mean a fracture), the real risk in plain words, offer to call the babysitter, and document a refusal with a witness if she still declines",
              "f": "Correct."
            },
            {
              "t": "Tell her she has no choice",
              "f": "She has capacity."
            },
            {
              "t": "Transport without the collar",
              "f": "She hasn't agreed to transport either."
            },
            {
              "t": "Request an involuntary hold",
              "f": "Not a mental health issue."
            }
          ],
          "correct": 0,
          "explanation": "Concrete, caring explanations change more minds than threats.",
          "kpi": "Uses therapeutic communication to address a refusal"
        }
      ]
    },
    {
      "id": "c1s8",
      "shortTitle": "1.7 Documentation & the Patient Care Report",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Documentation & the Patient Care Report",
        "lead": "Your report is the only lasting record of what you found and did. Write it soon, write what you saw rather than what you think, and never write anything that didn't happen. If it wasn't documented, it wasn't done.",
        "sections": [
          {
            "type": "list",
            "title": "Why it matters",
            "icon": "clipboard-list",
            "items": [
              "Continuity of care: the hospital reads it",
              "Legal record: it may be read in court years later",
              "Billing",
              "Research and system data",
              "Quality improvement"
            ]
          },
          {
            "type": "table",
            "title": "Narrative formats",
            "icon": "notebook-pen",
            "stack": true,
            "columns": [
              "Format",
              "Parts"
            ],
            "rows": [
              [
                "SOAP",
                "Subjective (the patient's words), Objective (your findings), Assessment (your impression), Plan (treatment and transport)"
              ],
              [
                "CHART",
                "Chief complaint, History, Assessment, Rx (treatment), Transport"
              ],
              [
                "Chronological",
                "Events in time order: useful for long or complex calls"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Describe, don't judge",
            "icon": "eye",
            "stack": true,
            "columns": [
              "Instead of",
              "Write"
            ],
            "rows": [
              [
                "\"Drunk\"",
                "\"Slurred speech, unsteady gait, smell of alcohol on breath\""
              ],
              [
                "\"Frequent flyer\"",
                "Leave it out"
              ],
              [
                "\"Combative\"",
                "\"Struck at the crew twice; restrained with soft limb restraints\" – with times"
              ],
              [
                "\"Patient was difficult\"",
                "Quote what was said and done"
              ]
            ]
          },
          {
            "type": "list",
            "title": "Every report",
            "icon": "list",
            "items": [
              "Times: call, arrival, patient contact, departure, arrival at hospital",
              "At least two sets of vital signs, with times",
              "Pertinent negatives (\"denies chest pain\")",
              "Each treatment: time, dose, route, who gave it, response",
              "Who you handed over to",
              "One report per patient"
            ]
          },
          {
            "type": "steps",
            "title": "Corrections",
            "icon": "notebook-pen",
            "steps": [
              {
                "title": "Paper",
                "text": "One line through the error, initial and date it, write the correct entry. Never erase or use correction fluid."
              },
              {
                "title": "Electronic",
                "text": "Add a time-stamped addendum; never delete the original."
              },
              {
                "title": "Late entries",
                "text": "Label them as late, with the time written."
              }
            ]
          },
          {
            "type": "groups",
            "title": "Special situations",
            "icon": "triangle-alert",
            "groups": [
              {
                "title": "Refusal",
                "items": [
                  "Capacity and how you assessed it",
                  "Risks explained in their words",
                  "Signature or refusal to sign; witness"
                ]
              },
              {
                "title": "Restraint",
                "items": [
                  "Why it was needed and what you tried first",
                  "Type, time on and off",
                  "Regular checks of breathing, circulation and limbs"
                ]
              },
              {
                "title": "Never",
                "items": [
                  "Make up or estimate missing vital signs",
                  "Record care that wasn't given",
                  "Combine patients on one report"
                ]
              }
            ]
          }
        ]
      },
      "quiz": [
        {
          "q": "Which is NOT a function of the patient care report?",
          "options": [
            "Deciding the hospital discharge diagnosis",
            "Continuity of care",
            "Legal record",
            "Quality improvement"
          ],
          "correct": 0,
          "explanation": "Also billing and research."
        },
        {
          "q": "A report is subpoenaed. Which principle applies?",
          "options": [
            "If it wasn't documented, it wasn't done",
            "Minor details can be left out",
            "Only ALS care needs recording",
            "Reports can't be used in court"
          ],
          "correct": 0,
          "explanation": "Write it as if a court will read it."
        },
        {
          "q": "In SOAP, 'A' is:",
          "options": [
            "Assessment: your impression",
            "Actions taken",
            "Administrative data",
            "Arrival time"
          ],
          "correct": 0,
          "explanation": "Subjective, Objective, Assessment, Plan."
        },
        {
          "q": "Correcting an error on a paper report:",
          "options": [
            "One line through it, initial and date it",
            "Correction fluid",
            "Erase and rewrite",
            "Rewrite the whole report and throw away the original"
          ],
          "correct": 0,
          "explanation": "The original must stay readable."
        },
        {
          "q": "Capable patient refuses after a minor fall. Most important to document:",
          "options": [
            "That they understood the risks and had capacity",
            "That they were difficult",
            "Your opinion that they needed transport",
            "That police were called"
          ],
          "correct": 0,
          "explanation": "Plus their signature or refusal to sign."
        },
        {
          "q": "Which is objective documentation?",
          "options": [
            "\"Slurred speech and a strong smell of alcohol on his breath\"",
            "\"Completely intoxicated\"",
            "\"Frequent flyer who abuses the system\"",
            "\"A drunk mess\""
          ],
          "correct": 0,
          "explanation": "Describe what you saw, heard and smelled."
        },
        {
          "q": "Main advantage of electronic reports:",
          "options": [
            "Required fields reduce omissions",
            "Less to write",
            "They write the narrative for you",
            "They can't be used in court"
          ],
          "correct": 0,
          "explanation": "And they're legible."
        },
        {
          "q": "When should you complete the report?",
          "options": [
            "As soon as possible after the call, ideally before the next one",
            "Within 72 hours",
            "By end of shift only",
            "Only if asked"
          ],
          "correct": 0,
          "explanation": "Memory fades fast."
        },
        {
          "q": "Which belongs in every report?",
          "options": [
            "Serial vital signs with times",
            "Insurance details",
            "Home address",
            "Next of kin"
          ],
          "correct": 0,
          "explanation": "At least two sets."
        },
        {
          "q": "Documenting a restrained, combative patient:",
          "options": [
            "Why, what type, how long, and repeated checks of breathing and circulation",
            "Only that restraints were used",
            "\"Patient was dangerous\"",
            "Their criminal record"
          ],
          "correct": 0,
          "explanation": "Restraint can kill; the record must show you monitored."
        },
        {
          "q": "In CHART, 'H' is:",
          "options": [
            "History",
            "Hospital",
            "Hypothesis",
            "Handover"
          ],
          "correct": 0,
          "explanation": "Chief complaint, History, Assessment, Rx, Transport."
        },
        {
          "q": "A colleague wants to record a treatment that wasn't given 'because it looks better'. You:",
          "options": [
            "Refuse: falsifying a report is illegal and unethical",
            "Agree",
            "Record it as 'not performed'",
            "Record it if they were busy"
          ],
          "correct": 0,
          "explanation": "Report it if they persist."
        }
      ],
      "flashcards": [
        {
          "question": "PCR",
          "answer": "Patient care report: the legal and clinical record of the call.",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "The documentation rule",
          "answer": "If it wasn't documented, it wasn't done.",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "SOAP",
          "answer": "Subjective (the patient's words), Objective (your findings), Assessment (your impression), Plan (treatment and transport).",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "Correcting a paper report",
          "answer": "One line through the error, initial and date, then the correct entry. Never erase. Electronic: time-stamped addendum.",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "Five functions of the report",
          "answer": "Continuity of care, legal record, billing, research, quality improvement.",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "CHART",
          "answer": "Chief complaint, History, Assessment, Rx (treatment), Transport.",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "Documenting a refusal",
          "answer": "Capacity and how you checked it, risks explained, alternatives offered, their words, signature or refusal to sign, witness, medical direction contact.",
          "category": "Documentation & the Patient Care Report"
        },
        {
          "question": "Why objective language",
          "answer": "Judgemental words are unprofessional, often wrong, and damaging in court. Describe what you saw, heard and smelled; quote the patient.",
          "category": "Documentation & the Patient Care Report"
        }
      ],
      "critical": [
        {
          "id": "crit_1_7_1",
          "scenario": "Inferior STEMI call: you gave oxygen, aspirin and nitroglycerin; pain 8/10 to 4/10. Back at base your partner can't remember the en-route vital signs and says 'I'll make up something close'.",
          "question": "Correct course?",
          "options": [
            {
              "t": "Record only the values you're sure of, note that en-route vital signs weren't recorded, talk to your partner, and report it if they insist",
              "f": "Correct."
            },
            {
              "t": "Estimate them – they were normal",
              "f": "That's falsification."
            },
            {
              "t": "Leave them blank without comment",
              "f": "Explain the gap honestly."
            },
            {
              "t": "Don't submit until you remember",
              "f": "Delay doesn't fix it."
            }
          ],
          "correct": 0,
          "explanation": "Monitors often store vital signs: check the device memory.",
          "kpi": "Maintains documentation integrity"
        },
        {
          "id": "crit_1_7_2",
          "scenario": "A capable driver with neck pain refused a collar and transport and signed. Two days later she's diagnosed with a C5 fracture. Your supervisor reviews your report.",
          "question": "What will defend your care best?",
          "options": [
            {
              "t": "Detailed mental status, neuro findings, the specific risks you explained, her signature and a witness",
              "f": "Correct."
            },
            {
              "t": "That police were told",
              "f": "Not enough."
            },
            {
              "t": "\"Patient was difficult\"",
              "f": "Judgemental and unhelpful."
            },
            {
              "t": "\"Recommended transport, declined\"",
              "f": "Too thin to show an informed refusal."
            }
          ],
          "correct": 0,
          "explanation": "Specifics show the refusal was informed.",
          "kpi": "Documents an informed refusal defensibly"
        },
        {
          "id": "crit_1_7_3",
          "scenario": "Three patients from one crash: a child with a scalp cut, a man with chest pain from the airbag, an older woman with hip pain. A colleague suggests one report for all three.",
          "question": "Best response?",
          "options": [
            {
              "t": "A separate report for each patient, with the right findings and care matched to each",
              "f": "Correct."
            },
            {
              "t": "Combine them: same incident",
              "f": "Mixes up patients' records."
            },
            {
              "t": "Only the child's",
              "f": "Every patient needs a record."
            },
            {
              "t": "Skip the least injured",
              "f": "Every contact is documented."
            }
          ],
          "correct": 0,
          "explanation": "Cross-reference the shared incident number.",
          "kpi": "Completes separate reports for multiple patients"
        }
      ]
    },
    {
      "id": "c1s9",
      "shortTitle": "1.8 Medical Terminology",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Medical Terminology",
        "lead": "Medical words are built from parts: prefix, root and suffix. Learn the common parts and you can decode most words you'll hear. On the radio and in your report, though, plain language and approved abbreviations keep patients safe.",
        "sections": [
          {
            "type": "table",
            "title": "Prefixes",
            "icon": "arrow-left",
            "columns": [
              "Prefix",
              "Means",
              "Example"
            ],
            "rows": [
              [
                "a-, an-",
                "Without",
                "Apnoea"
              ],
              [
                "brady-",
                "Slow",
                "Bradycardia"
              ],
              [
                "tachy-",
                "Fast",
                "Tachypnoea"
              ],
              [
                "dys-",
                "Difficult, painful",
                "Dyspnoea"
              ],
              [
                "hyper- / hypo-",
                "Above / below",
                "Hypoglycaemia"
              ],
              [
                "hemi-",
                "Half",
                "Hemiparesis"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Roots",
            "icon": "tree-pine",
            "columns": [
              "Root",
              "Means",
              "Example"
            ],
            "rows": [
              [
                "cardi/o",
                "Heart",
                "Cardiomegaly"
              ],
              [
                "pulm/o, pneum/o",
                "Lungs",
                "Pulmonary oedema"
              ],
              [
                "hepat/o",
                "Liver",
                "Hepatomegaly"
              ],
              [
                "nephr/o, ren/o",
                "Kidney",
                "Renal failure"
              ],
              [
                "cerebr/o",
                "Brain",
                "Cerebral"
              ],
              [
                "rhin/o",
                "Nose",
                "Rhinorrhoea"
              ],
              [
                "hem/o",
                "Blood",
                "Haemoptysis"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Suffixes",
            "icon": "arrow-right",
            "columns": [
              "Suffix",
              "Means",
              "Example"
            ],
            "rows": [
              [
                "-itis",
                "Inflammation",
                "Appendicitis"
              ],
              [
                "-algia",
                "Pain",
                "Myalgia"
              ],
              [
                "-megaly",
                "Enlargement",
                "Hepatomegaly"
              ],
              [
                "-ectomy",
                "Removal",
                "Appendectomy"
              ],
              [
                "-otomy",
                "Cutting into",
                "Cricothyrotomy"
              ],
              [
                "-ostomy",
                "Making an opening",
                "Tracheostomy"
              ],
              [
                "-rrhoea",
                "Flow, discharge",
                "Rhinorrhoea"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Directions and positions",
            "icon": "move-vertical",
            "stack": true,
            "columns": [
              "Term",
              "Means"
            ],
            "rows": [
              [
                "Medial / lateral",
                "Towards / away from the midline"
              ],
              [
                "Proximal / distal",
                "Closer to / farther from the trunk"
              ],
              [
                "Anterior / posterior",
                "Front / back"
              ],
              [
                "Superior / inferior",
                "Above / below"
              ],
              [
                "Supine / prone",
                "Face up / face down"
              ],
              [
                "Fowler's",
                "Sitting up; semi-Fowler's is partly reclined"
              ],
              [
                "Lateral recumbent",
                "On the side (recovery position)"
              ]
            ],
            "notes": [
              "Planes: sagittal (left and right), frontal or coronal (front and back), transverse (top and bottom)."
            ]
          },
          {
            "type": "list",
            "title": "Abbreviations",
            "icon": "triangle-alert",
            "items": [
              "Use only your service's approved list",
              "Write \"units\" in full, never U or IU",
              "Leading zero always (0.5 mg); no trailing zero (1 mg, never 1.0 mg)",
              "If in doubt, write it out"
            ]
          },
          {
            "type": "tools",
            "title": "Tools",
            "icon": "monitor",
            "groups": [
              {
                "title": "Words on a strip",
                "items": [
                  {
                    "ecg": "sbrady",
                    "label": "brady- + cardi/o",
                    "sub": "Bradycardia: slow heart, under 60/min.",
                    "lead": "II"
                  },
                  {
                    "ecg": "stach",
                    "label": "tachy- + cardi/o",
                    "sub": "Tachycardia: fast heart, over 100/min.",
                    "lead": "II"
                  }
                ]
              },
              {
                "title": "Practice",
                "items": [
                  {
                    "label": "Breathing patterns",
                    "sub": "Tachypnoea, bradypnoea, apnoea",
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
          "q": "The prefix 'brady-' means:",
          "options": [
            "Slow",
            "Fast",
            "Painful",
            "Without"
          ],
          "correct": 0,
          "explanation": "Bradycardia: slow heart rate."
        },
        {
          "q": "Which suffix means inflammation?",
          "options": [
            "-itis",
            "-osis",
            "-algia",
            "-oma"
          ],
          "correct": 0,
          "explanation": "Appendicitis."
        },
        {
          "q": "Hepatomegaly means:",
          "options": [
            "Enlarged liver",
            "Liver disease",
            "Liver pain",
            "Liver inflammation"
          ],
          "correct": 0,
          "explanation": "hepat/o + -megaly."
        },
        {
          "q": "Rhinorrhoea is:",
          "options": [
            "Runny nose",
            "Nosebleed",
            "Blocked nose",
            "Nasal fracture"
          ],
          "correct": 0,
          "explanation": "rhin/o + -rrhoea (flow)."
        },
        {
          "q": "Towards the midline is:",
          "options": [
            "Medial",
            "Lateral",
            "Distal",
            "Posterior"
          ],
          "correct": 0,
          "explanation": "Lateral is away from it."
        },
        {
          "q": "The transverse plane divides the body into:",
          "options": [
            "Top and bottom (superior and inferior)",
            "Front and back",
            "Left and right",
            "Proximal and distal"
          ],
          "correct": 0,
          "explanation": "Frontal: front and back; sagittal: left and right."
        },
        {
          "q": "The suffix '-algia' means:",
          "options": [
            "Pain",
            "Inflammation",
            "Enlargement",
            "Repair"
          ],
          "correct": 0,
          "explanation": "Myalgia: muscle pain."
        },
        {
          "q": "Cyanosis is:",
          "options": [
            "Bluish skin from low oxygen",
            "Fever",
            "Jaundice",
            "Pallor"
          ],
          "correct": 0,
          "explanation": "Central cyanosis: lips and tongue."
        },
        {
          "q": "Lying face up is:",
          "options": [
            "Supine",
            "Prone",
            "Trendelenburg",
            "Lateral recumbent"
          ],
          "correct": 0,
          "explanation": "Prone is face down."
        },
        {
          "q": "The root 'pulm/o' refers to:",
          "options": [
            "Lungs",
            "Pulse",
            "The heart",
            "Pus"
          ],
          "correct": 0,
          "explanation": "Pulmonary."
        },
        {
          "q": "The prefix 'a-' in apnoea means:",
          "options": [
            "Without",
            "Above",
            "Against",
            "Abnormal"
          ],
          "correct": 0,
          "explanation": "No breathing."
        },
        {
          "q": "A cricothyrotomy is:",
          "options": [
            "An incision through the cricothyroid membrane to make an airway",
            "Removal of the cricoid",
            "An opening in the trachea below the cricoid",
            "Repair of the trachea"
          ],
          "correct": 0,
          "explanation": "-otomy: cutting into."
        }
      ],
      "flashcards": [
        {
          "question": "Parts of a medical word",
          "answer": "Prefix, root, suffix (often joined by a combining vowel).",
          "category": "Medical Terminology"
        },
        {
          "question": "tachy-",
          "answer": "Fast: tachycardia (heart rate over 100/min), tachypnoea.",
          "category": "Medical Terminology"
        },
        {
          "question": "-ectomy",
          "answer": "Surgical removal: appendectomy.",
          "category": "Medical Terminology"
        },
        {
          "question": "cardi/o",
          "answer": "Heart: cardiac, cardiology, cardiomegaly.",
          "category": "Medical Terminology"
        },
        {
          "question": "-otomy vs -ostomy",
          "answer": "-otomy: cutting into (incision). -ostomy: making an opening (stoma).",
          "category": "Medical Terminology"
        },
        {
          "question": "Proximal",
          "answer": "Closer to the trunk: the elbow is proximal to the wrist.",
          "category": "Medical Terminology"
        },
        {
          "question": "Plane that divides front from back",
          "answer": "The frontal (coronal) plane.",
          "category": "Medical Terminology"
        },
        {
          "question": "dys-",
          "answer": "Difficult, abnormal or painful: dyspnoea, dysphagia.",
          "category": "Medical Terminology"
        }
      ],
      "critical": [
        {
          "id": "crit_1_8_1",
          "scenario": "A nurse hands over: 'Two days of dysuria, pyrexia, acute confusion; history of CKD stage 3, CHF, type 2 DM; on furosemide, metformin, lisinopril.' Your new partner whispers that they understood half of it.",
          "question": "Best action?",
          "options": [
            {
              "t": "Ask about any term you're unsure of; recognise the key ones (kidney disease, heart failure, diabetes) and what they mean for your care",
              "f": "Correct."
            },
            {
              "t": "Nod and look it up later",
              "f": "Misunderstanding harms patients."
            },
            {
              "t": "Copy it verbatim without understanding",
              "f": "You need to act on it."
            },
            {
              "t": "Tell your partner to study later",
              "f": "Clarify now."
            }
          ],
          "correct": 0,
          "explanation": "Urinary infection with confusion in an older adult: think sepsis.",
          "kpi": "Interprets medical terminology in a clinical handover"
        },
        {
          "id": "crit_1_8_2",
          "scenario": "A man fell from a ladder with a deformity halfway between his left elbow and wrist. You radio the hospital.",
          "question": "Most precise description?",
          "options": [
            {
              "t": "\"Deformity of the left forearm, distal to the elbow and proximal to the wrist\"",
              "f": "Correct."
            },
            {
              "t": "\"Left arm injury\"",
              "f": "Too vague."
            },
            {
              "t": "\"Looks broken halfway down\"",
              "f": "Unprofessional and imprecise."
            },
            {
              "t": "\"Deformity of the left radial region\"",
              "f": "Ambiguous."
            }
          ],
          "correct": 0,
          "explanation": "Add pulse, movement and sensation below the injury.",
          "kpi": "Uses anatomical terms to describe injury location"
        },
        {
          "id": "crit_1_8_3",
          "scenario": "Your report reads: '68 y/o F c/o SOB x 2 d. Hx COPD, HTN. SpO₂ 88% RA. Tx: O₂ 4 LPM NC, BVM.' A colleague can't interpret several abbreviations.",
          "question": "Which principle does this highlight?",
          "options": [
            {
              "t": "Use abbreviations sparingly and only from your service's approved list",
              "f": "Correct."
            },
            {
              "t": "Always abbreviate to save time",
              "f": "Ambiguity causes errors."
            },
            {
              "t": "Everyone understands abbreviations",
              "f": "They don't."
            },
            {
              "t": "Make up your own",
              "f": "Never."
            }
          ],
          "correct": 0,
          "explanation": "If in doubt, write it out.",
          "kpi": "Applies safe abbreviation practice"
        }
      ]
    },
    {
      "id": "c1s10",
      "shortTitle": "1.9 Lifting, Moving & Positioning",
      "guide": {
        "group": "c1",
        "groupLabel": "Chapter 1 · Foundations of Care",
        "title": "Lifting, Moving & Positioning",
        "lead": "Back injuries end more EMS careers than anything else. Plan the lift, get enough people and the right device, keep the load close, lift with your legs and never twist. Choose the move by the danger: emergency, urgent or non-urgent.",
        "sections": [
          {
            "type": "steps",
            "title": "Before every lift",
            "icon": "dumbbell",
            "steps": [
              {
                "title": "Size it up",
                "text": "Patient weight, route, stairs, doors, your equipment's limits."
              },
              {
                "title": "Get help early",
                "text": "More people or a lifting team before you need them."
              },
              {
                "title": "One leader",
                "text": "Agree the plan; one person counts."
              },
              {
                "title": "Body mechanics",
                "text": "Feet shoulder-width apart, back straight, load close, lift with your legs (power lift). Pivot your whole body – never twist your spine."
              }
            ]
          },
          {
            "type": "table",
            "title": "Which move?",
            "icon": "move-vertical",
            "stack": true,
            "columns": [
              "Move",
              "When",
              "How"
            ],
            "rows": [
              [
                "Emergency",
                "Immediate danger: fire, explosion, hazmat, traffic, or you can't reach other patients or do CPR",
                "Drag along the body's long axis: clothes, blanket or shoulder drag. Spinal care is secondary"
              ],
              [
                "Urgent",
                "A life threat that needs moving quickly, e.g. rapid extrication of an unstable patient",
                "Fast, with as much spinal care as possible"
              ],
              [
                "Non-urgent",
                "Stable patient, no danger",
                "Planned transfers: draw sheet, direct ground lift, extremity lift"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Devices",
            "icon": "bed",
            "stack": true,
            "columns": [
              "Device",
              "Use"
            ],
            "rows": [
              [
                "Wheeled stretcher",
                "Always strap the patient: shoulders, chest or waist, legs"
              ],
              [
                "Stair chair",
                "Stairs, for patients who can sit"
              ],
              [
                "Scoop stretcher",
                "Splits in two; lifts with little movement (hips, spine)"
              ],
              [
                "Vacuum mattress",
                "Moulds to the body for spinal and hip injuries"
              ],
              [
                "Long board",
                "Extrication only, not for transport"
              ],
              [
                "Basket stretcher",
                "Rough terrain and rope rescue"
              ],
              [
                "Bariatric equipment",
                "Rated cots and lifts, extra people"
              ]
            ]
          },
          {
            "type": "table",
            "title": "Positions",
            "icon": "user",
            "stack": true,
            "columns": [
              "Patient",
              "Position"
            ],
            "rows": [
              [
                "Breathing difficulty",
                "Fowler's or semi-Fowler's (sitting up)"
              ],
              [
                "Unresponsive but breathing",
                "Recovery position on the side"
              ],
              [
                "Shock",
                "Supine, kept warm"
              ],
              [
                "Pregnant over 20 weeks",
                "Left side, or a wedge under the right hip so she tilts left"
              ],
              [
                "Nausea or vomiting",
                "Sitting up or on the side"
              ],
              [
                "Possible spinal injury",
                "Supine with spinal motion restriction"
              ],
              [
                "Chest pain",
                "Position of comfort"
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
                    "sub": "Before you move an injured patient",
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
          "q": "The main cause of career-ending injuries in EMS:",
          "options": [
            "Back injuries from lifting",
            "Needlesticks",
            "Infections",
            "Stress"
          ],
          "correct": 0,
          "explanation": "Plan lifts and get help."
        },
        {
          "q": "Priority in an emergency move:",
          "options": [
            "Get the patient away from immediate danger fast",
            "Full spinal immobilisation first",
            "Wait for more people",
            "Collar first"
          ],
          "correct": 0,
          "explanation": "Drag along the long axis."
        },
        {
          "q": "Correct lifting posture:",
          "options": [
            "Back straight, feet shoulder-width apart, lift with your legs",
            "Legs straight, bend at the waist",
            "Twist to reach",
            "Feet together"
          ],
          "correct": 0,
          "explanation": "The power lift."
        },
        {
          "q": "Severe shortness of breath: position?",
          "options": [
            "Fowler's (sitting up)",
            "Supine",
            "Prone",
            "Head-down"
          ],
          "correct": 0,
          "explanation": "Lets the diaphragm work."
        },
        {
          "q": "Rapid extrication from a vehicle is:",
          "options": [
            "An urgent move",
            "An emergency move",
            "A non-urgent move",
            "An elective move"
          ],
          "correct": 0,
          "explanation": "Life threat but no immediate scene danger."
        },
        {
          "q": "Which device splits in two to slide under a patient?",
          "options": [
            "Scoop stretcher",
            "Long board",
            "Stair chair",
            "Basket stretcher"
          ],
          "correct": 0,
          "explanation": "Minimal movement."
        },
        {
          "q": "Best device for carrying a seated patient down stairs:",
          "options": [
            "Stair chair",
            "Wheeled stretcher",
            "Scoop stretcher",
            "Long board"
          ],
          "correct": 0,
          "explanation": "Use tracks if fitted."
        },
        {
          "q": "The recovery position is for:",
          "options": [
            "Unresponsive patients who are breathing with a pulse",
            "Cardiac arrest",
            "Suspected spinal injury",
            "Respiratory distress"
          ],
          "correct": 0,
          "explanation": "Protects the airway."
        },
        {
          "q": "Lifting a bariatric patient:",
          "options": [
            "Extra people, bariatric-rated equipment, and lifts if available",
            "Two providers with standard equipment",
            "A sheet drag only",
            "The family lifts"
          ],
          "correct": 0,
          "explanation": "Never exceed equipment ratings."
        },
        {
          "q": "Third-trimester pregnant patient lying down: best position?",
          "options": [
            "Tilted to her left, e.g. a wedge under the right hip",
            "Prone",
            "Flat on her back",
            "Head-down"
          ],
          "correct": 0,
          "explanation": "Keeps the uterus off the inferior vena cava."
        },
        {
          "q": "Most important safety rule for wheeled stretchers:",
          "options": [
            "Always secure the patient with straps",
            "Keep it clean",
            "Only for critical patients",
            "Fold it before loading"
          ],
          "correct": 0,
          "explanation": "Unsecured patients fall."
        },
        {
          "q": "You need to turn while carrying a patient. You:",
          "options": [
            "Pivot your whole body",
            "Twist slowly at the waist",
            "Twist quickly",
            "Let the stronger person twist"
          ],
          "correct": 0,
          "explanation": "Never twist your spine under load."
        }
      ],
      "flashcards": [
        {
          "question": "Body mechanics rule",
          "answer": "Lift with your legs, not your back: feet apart, back straight, load close, no twisting.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "When to use an emergency move",
          "answer": "Immediate danger to patient or rescuer (fire, explosion, hazmat, traffic), or you must reach other patients or start CPR.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "Emergency move example",
          "answer": "Clothes drag: grab the clothing at the shoulders and pull along the long axis of the body.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "Urgent vs non-urgent moves",
          "answer": "Urgent: a life threat needing quick movement (rapid extrication). Non-urgent: stable patient, planned transfer.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "Position for respiratory distress",
          "answer": "Fowler's or semi-Fowler's: sitting up so the diaphragm can work.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "Unresponsive but breathing",
          "answer": "Recovery position on the side: keeps the airway open and lets fluids drain.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "Pregnancy over 20 weeks",
          "answer": "Left side, or a wedge under the right hip so she tilts left: keeps the uterus off the inferior vena cava.",
          "category": "Lifting, Moving & Positioning"
        },
        {
          "question": "Power lift",
          "answer": "From a squat with the back straight, feet flat, load close: the legs do the work.",
          "category": "Lifting, Moving & Positioning"
        }
      ],
      "critical": [
        {
          "id": "crit_1_9_1",
          "scenario": "Rollover: the car is on its roof with thickening smoke from the engine. The confused driver hangs upside down in his belt with a bleeding scalp wound.",
          "question": "Which move, and why?",
          "options": [
            {
              "t": "Emergency move: immediate fire risk – get him out fast along the long axis, spinal care secondary",
              "f": "Correct."
            },
            {
              "t": "Non-urgent: collar and board first",
              "f": "Smoke means there may be no time."
            },
            {
              "t": "Wait for fire service",
              "f": "He may burn."
            },
            {
              "t": "Urgent extrication with full spinal care",
              "f": "Danger to the scene comes first."
            }
          ],
          "correct": 0,
          "explanation": "Support his head as you release the belt so he doesn't fall on his neck.",
          "kpi": "Selects an emergency move for immediate scene danger"
        },
        {
          "id": "crit_1_9_2",
          "scenario": "72-year-old with COPD, SpO₂ 82%, 2-word sentences, sitting in a chair at home. You need to move her to the ambulance.",
          "question": "Position and move?",
          "options": [
            {
              "t": "Keep her upright: stair chair or carry chair, then sitting up on the stretcher with continuous oxygen",
              "f": "Correct."
            },
            {
              "t": "Lay her flat",
              "f": "Worsens breathing."
            },
            {
              "t": "Let her walk",
              "f": "Exertion will make her worse."
            },
            {
              "t": "Head-down tilt",
              "f": "Harmful."
            }
          ],
          "correct": 0,
          "explanation": "Don't make a breathless patient walk.",
          "kpi": "Chooses position and device for a patient in respiratory distress"
        },
        {
          "id": "crit_1_9_3",
          "scenario": "Second floor, narrow hallway, two flights of stairs: a 115 kg man can't bear weight with a likely hip fracture.",
          "question": "Safest plan?",
          "options": [
            {
              "t": "Pad and support the hip, use a stair chair (or scoop) with enough people, tracks if available; call for help if needed",
              "f": "Correct."
            },
            {
              "t": "Help him hop down",
              "f": "Risks a fall and more injury."
            },
            {
              "t": "Slide him down on a long board",
              "f": "Unsafe and painful."
            },
            {
              "t": "Let him scoot down the steps",
              "f": "Painful and slow."
            }
          ],
          "correct": 0,
          "explanation": "Pain relief before moving if your protocol allows.",
          "kpi": "Plans a safe move for an injured patient on stairs"
        }
      ]
    }
  ]
};
