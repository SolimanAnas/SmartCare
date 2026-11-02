/* ========== Medication Formulary (SmartCare) ========== */
window.CPG_DATA = {
    id: "formulary",
    title: "Medication Formulary",
    shortTitle: "Drug Formulary",
    sections: [
        {
            id: "formulary-overview",
            shortTitle: "Full Drug Formulary",
            guide: {
                "group": "formulary",
                "groupLabel": "Drug Formulary",
                "title": "Drug Formulary",
                "lead": "77 emergency drugs, each on its own page: what it's for, adult and child doses, who should not get it, and what to watch for. Doses follow general international (AHA, ERC, WHO, BNF) practice; your local protocol decides who may give what.",
                "sections": [
                    {
                        "type": "table",
                        "title": "Drug groups",
                        "icon": "pill",
                        "stack": true,
                        "columns": [
                            "Group",
                            "Drugs"
                        ],
                        "rows": [
                            [
                                "Cardiac & resuscitation (20)",
                                "Adenosine, amiodarone, aspirin, atropine, calcium chloride and gluconate, clopidogrel, diltiazem, dopamine, epinephrine, GTN, heparin, labetalol, lidocaine, metoprolol, norepinephrine, procainamide, sodium bicarbonate, ticagrelor, vasopressin"
                            ],
                            [
                                "Respiratory & allergy (14)",
                                "Budesonide, chlorphenamine, Combivent, dexamethasone, diphenhydramine, hydrocortisone, ipratropium, magnesium sulfate, methylprednisolone, oxygen, prednisolone, racemic epinephrine, salbutamol, terbutaline"
                            ],
                            [
                                "Sedation, pain & nausea (26)",
                                "Diazepam, diclofenac, droperidol, ethyl chloride, etomidate, fentanyl, haloperidol, hyoscine, ibuprofen, ketamine, ketorolac, lorazepam, methoxyflurane, metoclopramide, midazolam, morphine, naloxone, nefopam, Entonox, ondansetron, paracetamol, pethidine, promethazine, propofol, rocuronium, succinylcholine"
                            ],
                            [
                                "Fluids, glucose, antidotes & other (17)",
                                "Activated charcoal, ceftriaxone, D5W, D10, D50, furosemide, glucagon, oral glucose, hydroxocobalamin, hypertonic saline, misoprostol, normal saline, oxytocin, pralidoxime, Ringer's lactate, thiamine, tranexamic acid"
                            ]
                        ]
                    },
                    {
                        "type": "steps",
                        "title": "Before every drug",
                        "icon": "clipboard-list",
                        "steps": [
                            {
                                "title": "Five rights",
                                "text": "Right patient, drug, dose, route and time – and write it down."
                            },
                            {
                                "title": "Ask",
                                "text": "Allergies and what they already took (aspirin, GTN, sildenafil, insulin)."
                            },
                            {
                                "title": "Read the vial",
                                "text": "Check the concentration: epinephrine 1 mg/mL is IM, 0.1 mg/mL is IV."
                            },
                            {
                                "title": "Children",
                                "text": "Weigh or estimate the weight, use the calculator and say the dose out loud."
                            },
                            {
                                "title": "Reassess",
                                "text": "After every dose: vital signs, ETCO₂ and the effect you wanted."
                            }
                        ]
                    },
                    {
                        "type": "list",
                        "title": "High-alert reminders",
                        "icon": "triangle-alert",
                        "items": [
                            "Adenosine: rapid push with a saline flush – it lasts seconds",
                            "Amiodarone: dilute only in D5W, never saline",
                            "GTN: not if SBP is below 90 mmHg, or after sildenafil in 24 hours (tadalafil 48 hours)",
                            "Naloxone: titrate to breathing, not to waking up",
                            "Opioids and benzodiazepines: bag-mask and ETCO₂ ready",
                            "Tranexamic acid: only within 3 hours of injury or birth",
                            "Oral glucose: only if awake and able to swallow"
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
                                        "sub": "Weight-based doses and volumes",
                                        "href": "../pages/drug-calculator.html",
                                        "icon": "syringe"
                                    },
                                    {
                                        "label": "Drug index",
                                        "sub": "All emergency drugs",
                                        "href": "../pages/drug-index.html",
                                        "icon": "book-open"
                                    },
                                    {
                                        "label": "Medication index",
                                        "sub": "Find a drug fast",
                                        "href": "../pages/med-index.html",
                                        "icon": "search"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            flashcards: [
                {
                    "category": "Cardiac",
                    "question": "Adenosine: SVT 1st dose (adult)?",
                    "answer": "6 mg rapid IV push with a 20 mL saline flush (child 0.1 mg/kg, maximum 6 mg)"
                },
                {
                    "category": "Cardiac",
                    "question": "Adenosine: SVT 2nd dose (adult)?",
                    "answer": "12 mg rapid IV push (child 0.2 mg/kg, maximum 12 mg)"
                },
                {
                    "category": "Cardiac",
                    "question": "Adenosine: key administration tip?",
                    "answer": "Rapid push and immediate flush, arm raised; record the strip during the dose."
                },
                {
                    "category": "Cardiac",
                    "question": "Amiodarone: cardiac arrest dose?",
                    "answer": "Adult 300 mg IV/IO after the 3rd shock, then 150 mg after the 5th. Child 5 mg/kg."
                },
                {
                    "category": "Cardiac",
                    "question": "Amiodarone: stable wide-complex tachycardia dose?",
                    "answer": "150 mg IV over 10 minutes in 100 mL D5W"
                },
                {
                    "category": "Cardiac",
                    "question": "Amiodarone: which diluent?",
                    "answer": "Dextrose 5% (D5W), not saline"
                },
                {
                    "category": "Cardiac",
                    "question": "Atropine: bradycardia dose?",
                    "answer": "Adult 1 mg IV every 3–5 minutes (maximum 3 mg). Child 0.02 mg/kg (minimum 0.1 mg, maximum 0.5 mg)."
                },
                {
                    "category": "Cardiac",
                    "question": "Atropine: organophosphate dose?",
                    "answer": "2 mg IV/IM, doubling every 5 minutes until secretions dry"
                },
                {
                    "category": "Cardiac",
                    "question": "Epinephrine: cardiac arrest dose?",
                    "answer": "Adult 1 mg (0.1 mg/mL) IV/IO every 3–5 minutes. Child 0.01 mg/kg."
                },
                {
                    "category": "Cardiac",
                    "question": "Epinephrine: anaphylaxis dose?",
                    "answer": "0.01 mg/kg of 1 mg/mL IM in the outer thigh: adult 0.5 mg, child maximum 0.5 mg"
                },
                {
                    "category": "Cardiac",
                    "question": "Epinephrine: push dose for bradycardia or shock?",
                    "answer": "10–20 mcg IV every 2–5 minutes"
                },
                {
                    "category": "Cardiac",
                    "question": "Labetalol: obstetric indication?",
                    "answer": "Severe hypertension in pregnancy: 160/110 mmHg or more"
                },
                {
                    "category": "Cardiac",
                    "question": "Labetalol: dose?",
                    "answer": "20 mg IV over 2 minutes, then 40 mg, then 80 mg every 10 minutes; maximum 300 mg"
                },
                {
                    "category": "Airway",
                    "question": "Salbutamol: adult dose?",
                    "answer": "5 mg nebulised, repeat every 20 minutes or back-to-back if severe; or 4–10 puffs by spacer"
                },
                {
                    "category": "Airway",
                    "question": "Salbutamol: child dose?",
                    "answer": "Under 5 years 2.5 mg; 5 years or older 2.5–5 mg nebulised"
                },
                {
                    "category": "Airway",
                    "question": "Combivent: contents?",
                    "answer": "Salbutamol 2.5 mg + ipratropium 0.5 mg in one 2.5 mL nebule (adults)"
                },
                {
                    "category": "Airway",
                    "question": "Racemic epinephrine: indication?",
                    "answer": "Croup with stridor at rest; post-extubation stridor"
                },
                {
                    "category": "Airway",
                    "question": "Racemic epinephrine: dose?",
                    "answer": "0.05 mL/kg of 2.25% (maximum 0.5 mL) in 3 mL saline nebulised"
                },
                {
                    "category": "Airway",
                    "question": "Hydrocortisone: doses?",
                    "answer": "Severe asthma: 4 mg/kg IV (maximum 100 mg). Adrenal crisis: under 1 year 25 mg, 1–5 years 50 mg, 6 years or more 100 mg."
                },
                {
                    "category": "Airway",
                    "question": "Magnesium sulfate: severe asthma dose?",
                    "answer": "Adult 2 g IV over 20 minutes. Child 40 mg/kg (maximum 2 g)."
                },
                {
                    "category": "Airway",
                    "question": "Magnesium sulfate: eclampsia dose?",
                    "answer": "4–6 g IV over 20–30 minutes, or 10 g IM if no IV. Watch reflexes and breathing."
                },
                {
                    "category": "Airway",
                    "question": "Methoxyflurane (Penthrox): route and dose?",
                    "answer": "Self-administered inhaler: 3 mL, one more 3 mL if needed; maximum 6 mL a day"
                },
                {
                    "category": "Neuro",
                    "question": "Diazepam: seizure dose (adult)?",
                    "answer": "0.15–0.2 mg/kg IV, maximum 10 mg per dose; repeat once after 5 minutes"
                },
                {
                    "category": "Neuro",
                    "question": "Diazepam: seizure dose (child)?",
                    "answer": "IV/IO 0.1–0.2 mg/kg (maximum 10 mg). Rectal 0.5 mg/kg (maximum 20 mg)."
                },
                {
                    "category": "Neuro",
                    "question": "Benzodiazepine overdose: what do you do?",
                    "answer": "Support the airway and breathing with a bag-mask; flumazenil is not a prehospital drug"
                },
                {
                    "category": "Neuro",
                    "question": "Haloperidol: indication?",
                    "answer": "Severe agitation from psychosis"
                },
                {
                    "category": "Neuro",
                    "question": "Haloperidol: dose and route?",
                    "answer": "5 mg IM (older adults 0.5–2 mg); not for children prehospital"
                },
                {
                    "category": "Pain",
                    "question": "Morphine: adult dose for severe pain?",
                    "answer": "2.5–5 mg IV every 5 minutes, titrated; 5–10 mg IM if no IV. Naloxone ready."
                },
                {
                    "category": "Pain",
                    "question": "Morphine: child dose?",
                    "answer": "0.1 mg/kg IV, titrated; maximum single dose 5 mg"
                },
                {
                    "category": "Pain",
                    "question": "GTN: indications?",
                    "answer": "Ischaemic chest pain; acute pulmonary oedema with high BP"
                },
                {
                    "category": "Pain",
                    "question": "GTN: dose and route?",
                    "answer": "0.4 mg sublingual every 5 minutes, up to 3 doses"
                },
                {
                    "category": "Pain",
                    "question": "GTN: contraindications?",
                    "answer": "SBP below 90 mmHg; sildenafil or vardenafil in 24 hours, tadalafil in 48 hours; right ventricular infarction"
                },
                {
                    "category": "Pain",
                    "question": "Paracetamol: adult dose?",
                    "answer": "1 g orally or IV over 15 minutes; maximum 4 g a day"
                },
                {
                    "category": "Pain",
                    "question": "Paracetamol: child IV dose?",
                    "answer": "15 mg/kg (7.5 mg/kg if under 10 kg) over 15 minutes"
                },
                {
                    "category": "Pain",
                    "question": "Diclofenac: dose and route?",
                    "answer": "75 mg deep IM; IV only as a diluted infusion where protocol allows"
                },
                {
                    "category": "Pain",
                    "question": "Nefopam: dose and contraindications?",
                    "answer": "20 mg IV in 100 mL saline over 15 minutes. Not with seizures, MI, severe kidney disease or in children."
                },
                {
                    "category": "Metabolic",
                    "question": "Hypoglycaemia threshold?",
                    "answer": "Below 70 mg/dL in adults (below 60 mg/dL in children)"
                },
                {
                    "category": "Metabolic",
                    "question": "Dextrose 10%: adult dose?",
                    "answer": "100–250 mL (10–25 g) IV/IO, titrated; recheck glucose after 10 minutes"
                },
                {
                    "category": "Metabolic",
                    "question": "Dextrose 10%: child dose?",
                    "answer": "5 mL/kg IV/IO (maximum 250 mL); newborns 2 mL/kg"
                },
                {
                    "category": "Metabolic",
                    "question": "Oral glucose: indication?",
                    "answer": "Hypoglycaemia in a patient who is awake and can swallow"
                },
                {
                    "category": "Metabolic",
                    "question": "Oral glucose: dose?",
                    "answer": "Adult 15–20 g (1 tube); child half to one tube. Recheck after 15 minutes."
                },
                {
                    "category": "Metabolic",
                    "question": "Glucagon: doses?",
                    "answer": "Hypoglycaemia: 1 mg IM (0.5 mg if under 25 kg). Beta-blocker overdose: 50 mcg/kg IV."
                },
                {
                    "category": "Metabolic",
                    "question": "Normal saline: child fluid bolus?",
                    "answer": "10–20 mL/kg, then reassess (10 mL/kg if heart disease is possible)"
                },
                {
                    "category": "Metabolic",
                    "question": "Ringer's lactate: cautions?",
                    "answer": "Not in the same line as ceftriaxone; fluid overload; severe hyperkalaemia (prefer saline)"
                },
                {
                    "category": "Other",
                    "question": "Aspirin: ACS dose?",
                    "answer": "324 mg (4 × 81 mg) chewed; top up to 324 mg if some was taken in the last hour"
                },
                {
                    "category": "Other",
                    "question": "Naloxone: opioid overdose dose?",
                    "answer": "Adult 0.04–0.4 mg IV titrated (up to 2 mg), or 0.4 mg IM, or 4 mg intranasal. Child 0.01 mg/kg."
                },
                {
                    "category": "Other",
                    "question": "Naloxone: why titrate?",
                    "answer": "Over-reversal causes vomiting, agitation and withdrawal; the goal is adequate breathing"
                },
                {
                    "category": "Other",
                    "question": "Tranexamic acid: indication?",
                    "answer": "Major trauma bleeding or postpartum haemorrhage, within 3 hours"
                },
                {
                    "category": "Other",
                    "question": "Tranexamic acid: dose?",
                    "answer": "1 g IV over 10 minutes (child 15 mg/kg). PPH: a second 1 g after 30 minutes if bleeding continues."
                },
                {
                    "category": "Other",
                    "question": "Furosemide: indication and dose?",
                    "answer": "Adult pulmonary oedema with fluid overload: 40 mg slow IV over 1–2 minutes"
                },
                {
                    "category": "Other",
                    "question": "Diphenhydramine: dose?",
                    "answer": "Adult 25–50 mg IM or slow IV. Child 1 mg/kg (maximum 50 mg)."
                },
                {
                    "category": "Other",
                    "question": "Metoclopramide: dose?",
                    "answer": "Adult 10 mg slow IV over 3 minutes or IM. Child 0.1–0.15 mg/kg only if others unsuitable; not under 1 year."
                },
                {
                    "category": "Other",
                    "question": "Hyoscine butylbromide: indication and dose?",
                    "answer": "Colicky abdominal or renal pain: 20 mg IV, IM or SC (adults)"
                }
            ],
            quiz: [
                {
                    "q": "Adenosine for SVT: what is the FIRST dose for an adult?",
                    "options": [
                        "6 mg IV rapid push",
                        "3 mg IV slow push",
                        "12 mg IV slow push",
                        "0.1 mg IV over 1 minute"
                    ],
                    "correct": 0,
                    "explanation": "6 mg rapid IV push with an immediate 20 mL saline flush; then 12 mg if needed."
                },
                {
                    "q": "Adenosine must be given:",
                    "options": [
                        "As a rapid IV push with an immediate saline flush",
                        "Slowly over 1–2 minutes",
                        "Diluted in 100 mL saline",
                        "IM only"
                    ],
                    "correct": 0,
                    "explanation": "Its half-life is under 10 seconds, so push fast and flush."
                },
                {
                    "q": "Which fluid is used to dilute an amiodarone infusion?",
                    "options": [
                        "Dextrose 5% (D5W)",
                        "Normal saline",
                        "Ringer's lactate",
                        "Sterile water"
                    ],
                    "correct": 0,
                    "explanation": "Amiodarone infusions are diluted in D5W, for example 150 mg in 100 mL."
                },
                {
                    "q": "Adult amiodarone dose in VF or pulseless VT after the 3rd shock?",
                    "options": [
                        "300 mg IV/IO push",
                        "5 mg/kg IV/IO",
                        "150 mg over 10 minutes",
                        "1 mg/kg IV"
                    ],
                    "correct": 0,
                    "explanation": "300 mg IV/IO after the 3rd shock, then 150 mg after the 5th. Children: 5 mg/kg."
                },
                {
                    "q": "Atropine in organophosphate poisoning: what is the endpoint?",
                    "options": [
                        "Dry bronchial secretions",
                        "Heart rate above 60",
                        "Dilated pupils",
                        "Normal blood pressure"
                    ],
                    "correct": 0,
                    "explanation": "Start 2 mg IV/IM and double every 5 minutes until the chest is dry, whatever the pupils or heart rate."
                },
                {
                    "q": "Epinephrine for anaphylaxis: concentration and route?",
                    "options": [
                        "1 mg/mL IM in the outer thigh",
                        "0.1 mg/mL IV",
                        "1 mg/mL IV push",
                        "0.1 mg/mL IM"
                    ],
                    "correct": 0,
                    "explanation": "0.5 mg IM (0.5 mL of 1 mg/mL) in adults; 0.1 mg/mL is the IV arrest strength."
                },
                {
                    "q": "GTN is CONTRAINDICATED in which patient?",
                    "options": [
                        "Took sildenafil 20 hours ago",
                        "Anterior STEMI, BP 130/80",
                        "Chest pain, BP 110/70",
                        "Pulmonary oedema, BP 170/100"
                    ],
                    "correct": 0,
                    "explanation": "Sildenafil or vardenafil in 24 hours, tadalafil in 48 hours: severe hypotension."
                },
                {
                    "q": "Labetalol prehospital: main indication?",
                    "options": [
                        "Severe hypertension in pregnancy (160/110 mmHg or more)",
                        "Hypertension in stroke in all patients",
                        "Hypertension with tachycardia",
                        "Hypertension after cardiac arrest"
                    ],
                    "correct": 0,
                    "explanation": "20 mg IV over 2 minutes, then 40 mg, then 80 mg every 10 minutes; maximum 300 mg."
                },
                {
                    "q": "Salbutamol nebuliser dose for a 3-year-old?",
                    "options": [
                        "2.5 mg",
                        "1.25 mg",
                        "5 mg",
                        "10 mg"
                    ],
                    "correct": 0,
                    "explanation": "Under 5 years: 2.5 mg. 5 years or older: 2.5–5 mg."
                },
                {
                    "q": "Racemic epinephrine is mainly used for:",
                    "options": [
                        "Croup with stridor at rest",
                        "Asthma",
                        "Anaphylaxis instead of IM epinephrine",
                        "Hypertension after intubation"
                    ],
                    "correct": 0,
                    "explanation": "It shrinks upper airway swelling. Anaphylaxis always gets IM epinephrine."
                },
                {
                    "q": "Magnesium sulfate adult dose for life-threatening asthma?",
                    "options": [
                        "2 g IV over 20 minutes",
                        "1 g IV over 10 minutes",
                        "4 g IV over 5 minutes",
                        "40 mg/kg IV push"
                    ],
                    "correct": 0,
                    "explanation": "2 g IV over 20 minutes; children 40 mg/kg (maximum 2 g)."
                },
                {
                    "q": "Methoxyflurane (Penthrox): adult maximum?",
                    "options": [
                        "6 mL a day (two 3 mL doses)",
                        "3 mL a day",
                        "9 mL a day",
                        "12 mL a day"
                    ],
                    "correct": 0,
                    "explanation": "3 mL, then one more 3 mL if needed; maximum 6 mL a day."
                },
                {
                    "q": "Rectal diazepam for a 20 kg child in status epilepticus?",
                    "options": [
                        "10 mg",
                        "2 mg",
                        "5 mg",
                        "20 mg"
                    ],
                    "correct": 0,
                    "explanation": "0.5 mg/kg rectally, maximum 20 mg: 0.5 × 20 = 10 mg. Intranasal or IM midazolam is an equal first choice."
                },
                {
                    "q": "Prehospital route for haloperidol?",
                    "options": [
                        "IM",
                        "IV push",
                        "Sublingual",
                        "Rectal"
                    ],
                    "correct": 0,
                    "explanation": "5 mg IM; IV use raises the QT and torsades risk."
                },
                {
                    "q": "Adult seizing for 5 minutes. You gave diazepam 0.15 mg/kg IV; 5 minutes later the seizure continues. Next?",
                    "options": [
                        "Repeat the benzodiazepine once",
                        "Haloperidol 5 mg IM",
                        "Atropine",
                        "No more drugs, just transport"
                    ],
                    "correct": 0,
                    "explanation": "Repeat once after 5 minutes (diazepam maximum 10 mg per dose), protect the airway and call ALS."
                },
                {
                    "q": "Adult morphine for severe pain: how is it given IV?",
                    "options": [
                        "2.5–5 mg every 5 minutes, titrated",
                        "10 mg single push",
                        "20 mg over 1 minute",
                        "0.5 mg/kg bolus"
                    ],
                    "correct": 0,
                    "explanation": "Titrate small doses (typical maximum 10–20 mg per protocol) with naloxone ready."
                },
                {
                    "q": "Paracetamol adult IV dose?",
                    "options": [
                        "1 g",
                        "500 mg",
                        "750 mg",
                        "1500 mg"
                    ],
                    "correct": 0,
                    "explanation": "1 g over 15 minutes (15 mg/kg under 50 kg); maximum 4 g a day."
                },
                {
                    "q": "Nefopam is contraindicated in all EXCEPT:",
                    "options": [
                        "Moderate fracture pain, normal kidneys",
                        "Epilepsy",
                        "Acute MI",
                        "A 10-year-old"
                    ],
                    "correct": 0,
                    "explanation": "Nefopam is avoided in seizures, MI, severe kidney disease, glaucoma and children."
                },
                {
                    "q": "GTN sublingual: maximum prehospital doses for chest pain?",
                    "options": [
                        "3 doses of 0.4 mg",
                        "1 dose",
                        "2 doses",
                        "5 doses"
                    ],
                    "correct": 0,
                    "explanation": "0.4 mg every 5 minutes up to 3 doses, while SBP stays at 90 mmHg or above."
                },
                {
                    "q": "Adult blood glucose threshold to treat hypoglycaemia?",
                    "options": [
                        "Below 70 mg/dL",
                        "Below 50 mg/dL",
                        "Below 90 mg/dL",
                        "Below 110 mg/dL"
                    ],
                    "correct": 0,
                    "explanation": "Treat below 70 mg/dL (below 60 mg/dL in children) or any low with symptoms."
                },
                {
                    "q": "Dextrose 10% dose for a child?",
                    "options": [
                        "5 mL/kg (maximum 250 mL)",
                        "10 mL/kg (maximum 125 mL)",
                        "20 mL/kg",
                        "1 mL/kg"
                    ],
                    "correct": 0,
                    "explanation": "5 mL/kg IV/IO, maximum 250 mL; newborns 2 mL/kg."
                },
                {
                    "q": "Who must NOT get oral glucose?",
                    "options": [
                        "An unresponsive patient",
                        "A 70 kg adult who is alert",
                        "A 20 kg child who is alert",
                        "A diabetic on insulin who can swallow"
                    ],
                    "correct": 0,
                    "explanation": "Oral glucose needs a patient who is awake and can swallow."
                },
                {
                    "q": "Glucagon dose for hypoglycaemia in a 20 kg child?",
                    "options": [
                        "0.5 mg IM",
                        "1 mg IM",
                        "2 mg IM",
                        "0.1 mg/kg IM"
                    ],
                    "correct": 0,
                    "explanation": "0.5 mg IM if under 25 kg; 1 mg if 25 kg or more."
                },
                {
                    "q": "Ringer's lactate: what must you avoid?",
                    "options": [
                        "Running it in the same line as ceftriaxone",
                        "Giving it in burns",
                        "Giving it in sepsis",
                        "Giving it in trauma"
                    ],
                    "correct": 0,
                    "explanation": "Its calcium precipitates with ceftriaxone. It is a good fluid for burns, sepsis and trauma."
                },
                {
                    "q": "Aspirin for suspected ACS: dose and method?",
                    "options": [
                        "324 mg (4 × 81 mg) chewed",
                        "600 mg swallowed whole",
                        "162 mg sublingual",
                        "75 mg swallowed"
                    ],
                    "correct": 0,
                    "explanation": "Chewed for fast absorption; top up to 324 mg if some was taken in the last hour."
                },
                {
                    "q": "Naloxone in opioid overdose: what is the goal?",
                    "options": [
                        "Adequate breathing",
                        "Full consciousness",
                        "Normal BP",
                        "Heart rate above 60"
                    ],
                    "correct": 0,
                    "explanation": "Titrate small doses; over-reversal causes vomiting, agitation and withdrawal."
                },
                {
                    "q": "Tranexamic acid must start within how long of injury or birth?",
                    "options": [
                        "3 hours",
                        "1 hour",
                        "6 hours",
                        "12 hours"
                    ],
                    "correct": 0,
                    "explanation": "Given later it may do harm. 1 g IV over 10 minutes."
                },
                {
                    "q": "Furosemide 40 mg IV is indicated for:",
                    "options": [
                        "Adult pulmonary oedema with fluid overload",
                        "Anaphylaxis in a child",
                        "Any breathless patient",
                        "Septic shock"
                    ],
                    "correct": 0,
                    "explanation": "Give slowly over 1–2 minutes; never in hypotension or shock."
                },
                {
                    "q": "Metoclopramide is avoided in children mainly because of:",
                    "options": [
                        "Dystonia and other movement reactions",
                        "Breathing depression",
                        "Hypoglycaemia",
                        "Hypertension"
                    ],
                    "correct": 0,
                    "explanation": "Extrapyramidal reactions are common in the young; ondansetron is preferred."
                }
            ],
            critical: [
                {
                    "id": "crit_fx_1",
                    "scenario": "32-year-old, 34 weeks pregnant. BP 178/112, severe headache, visual changes. GCS 15, no seizure.",
                    "question": "Which drugs are indicated?",
                    "options": [
                        {
                            "t": "Labetalol 20 mg IV over 2 minutes, plus magnesium 4–6 g IV over 20–30 minutes",
                            "f": "Correct."
                        },
                        {
                            "t": "Diazepam IV",
                            "f": "Benzodiazepines are for an active seizure; magnesium prevents it."
                        },
                        {
                            "t": "GTN 0.4 mg sublingual",
                            "f": "GTN is not the drug for hypertension in pregnancy."
                        },
                        {
                            "t": "No drugs until she seizes",
                            "f": "Severe pre-eclampsia needs BP control and magnesium now."
                        }
                    ],
                    "correct": 0,
                    "explanation": "BP 160/110 mmHg or more in pregnancy is an emergency: labetalol lowers it, magnesium prevents eclampsia.",
                    "kpi": "Treats severe hypertension in pregnancy within minutes"
                },
                {
                    "id": "crit_fx_2",
                    "scenario": "58-year-old, witnessed VF arrest. 3 shocks given, CPR ongoing, IV in place, epinephrine given after the 2nd shock.",
                    "question": "Which drug now?",
                    "options": [
                        {
                            "t": "Amiodarone 300 mg IV push",
                            "f": "Correct."
                        },
                        {
                            "t": "Atropine 1 mg IV",
                            "f": "Atropine has no role in arrest."
                        },
                        {
                            "t": "Adenosine 6 mg",
                            "f": "Adenosine is for SVT with a pulse."
                        },
                        {
                            "t": "Amiodarone 5 mg/kg in saline",
                            "f": "5 mg/kg is the child dose, and amiodarone is diluted in D5W, not saline."
                        }
                    ],
                    "correct": 0,
                    "explanation": "300 mg after the 3rd shock, then 150 mg after the 5th; prepare it during compressions.",
                    "kpi": "Gives the antiarrhythmic without pausing CPR"
                },
                {
                    "id": "crit_fx_3",
                    "scenario": "4-year-old, 18 kg, known febrile seizures. Generalised seizure for 5 minutes, no IV access.",
                    "question": "Best immediate drug?",
                    "options": [
                        {
                            "t": "Midazolam 0.2 mg/kg intranasal (3.6 mg), or diazepam 0.5 mg/kg rectally (9 mg)",
                            "f": "Correct."
                        },
                        {
                            "t": "Wait for IV access, then diazepam",
                            "f": "Don't delay: intranasal, IM or rectal routes work now."
                        },
                        {
                            "t": "Haloperidol 5 mg IM",
                            "f": "Haloperidol is not an anticonvulsant."
                        },
                        {
                            "t": "Paracetamol rectally first",
                            "f": "Stop the seizure first; fever treatment comes later."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Seizures of 5 minutes or more need a benzodiazepine by the fastest route; protect the airway and check glucose.",
                    "kpi": "Gives a benzodiazepine by the fastest route"
                },
                {
                    "id": "crit_fx_4",
                    "scenario": "25-year-old found unresponsive: RR 4/min, pinpoint pupils, heroin suspected.",
                    "question": "Naloxone plan?",
                    "options": [
                        {
                            "t": "Bag-mask first, then 0.04–0.4 mg IV (or 0.4 mg IM) titrated to breathing",
                            "f": "Correct."
                        },
                        {
                            "t": "2 mg IV at once to wake him",
                            "f": "Large doses cause violent withdrawal and vomiting."
                        },
                        {
                            "t": "Intranasal only; IV is dangerous",
                            "f": "Any route works; titrate."
                        },
                        {
                            "t": "Naloxone before any ventilation",
                            "f": "Oxygenate first; hypoxia kills."
                        }
                    ],
                    "correct": 0,
                    "explanation": "The aim is adequate breathing, not full waking. Long-acting opioids can re-sedate: transport.",
                    "kpi": "Ventilates first and titrates naloxone"
                },
                {
                    "id": "crit_fx_5",
                    "scenario": "19-year-old with asthma. SpO₂ 82% on oxygen, tripod position, single words. Two salbutamol nebulisers given.",
                    "question": "Next drugs?",
                    "options": [
                        {
                            "t": "Continue salbutamol with ipratropium, hydrocortisone 100 mg IV, magnesium 2 g IV over 20 minutes",
                            "f": "Correct."
                        },
                        {
                            "t": "Salbutamol alone",
                            "f": "Life-threatening asthma needs more."
                        },
                        {
                            "t": "Haloperidol for anxiety",
                            "f": "Sedation can stop her breathing."
                        },
                        {
                            "t": "Furosemide 40 mg IV",
                            "f": "This is not fluid overload."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Consider IM epinephrine 0.5 mg if she is tiring; call ALS early.",
                    "kpi": "Escalates asthma treatment in the right order"
                },
                {
                    "id": "crit_fx_6",
                    "scenario": "70-year-old, inferior STEMI on the 12-lead. BP 126/78. Took sildenafil last night.",
                    "question": "GTN?",
                    "options": [
                        {
                            "t": "No: sildenafil in the last 24 hours; treat pain with an opioid",
                            "f": "Correct."
                        },
                        {
                            "t": "Yes, STEMI always gets GTN",
                            "f": "The combination causes profound hypotension."
                        },
                        {
                            "t": "Half the dose",
                            "f": "Still contraindicated."
                        },
                        {
                            "t": "Yes, only contraindicated if BP below 90 mmHg",
                            "f": "PDE-5 inhibitors are a separate contraindication."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Sildenafil or vardenafil 24 hours, tadalafil 48 hours. Get a right-sided ECG (V4R) in inferior STEMI too.",
                    "kpi": "Asks about PDE-5 inhibitors before GTN"
                },
                {
                    "id": "crit_fx_7",
                    "scenario": "6-year-old, 22 kg. Glucose 48 mg/dL, responds to voice only. IV in place.",
                    "question": "Best treatment?",
                    "options": [
                        {
                            "t": "Dextrose 10% 5 mL/kg = 110 mL IV",
                            "f": "Correct."
                        },
                        {
                            "t": "Oral glucose",
                            "f": "Not safe with reduced consciousness."
                        },
                        {
                            "t": "Glucagon 1 mg IM",
                            "f": "IV access is available, and dextrose works faster."
                        },
                        {
                            "t": "Saline 220 mL bolus",
                            "f": "This doesn't treat hypoglycaemia."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Recheck glucose after 10 minutes and repeat if still low.",
                    "kpi": "Doses dextrose by weight in children"
                },
                {
                    "id": "crit_fx_8",
                    "scenario": "28-year-old, delivered 45 minutes ago. Postpartum haemorrhage, estimated loss over 1 L.",
                    "question": "Tranexamic acid?",
                    "options": [
                        {
                            "t": "Yes: 1 g IV over 10 minutes; a second 1 g after 30 minutes if bleeding continues",
                            "f": "Correct."
                        },
                        {
                            "t": "No: only for trauma",
                            "f": "It is proven in postpartum haemorrhage too."
                        },
                        {
                            "t": "2 g IV push now",
                            "f": "Too fast causes hypotension."
                        },
                        {
                            "t": "No: too late",
                            "f": "It works within 3 hours."
                        }
                    ],
                    "correct": 0,
                    "explanation": "Uterine massage and oxytocin first; record the time of birth.",
                    "kpi": "Gives TXA early in postpartum haemorrhage"
                }
            ]
        },
            {
                id: "formulary-72",
                shortTitle: "Activated Charcoal",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Activated Charcoal",
                    "lead": "Binds many drugs in the gut if given early (ideally within 1 hour) to a patient who is awake and can protect their airway – and only on poison-centre or medical advice.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Adsorbent"
                                ],
                                [
                                    "Presentation",
                                    "50 g in 250 mL suspension"
                                ],
                                [
                                    "Best within",
                                    "1 hour of ingestion"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, with advice"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Recent toxic ingestion of an adsorbable substance",
                                    "dose": "50 g orally",
                                    "note": "Shake well; straw and opaque cup",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Recent toxic ingestion",
                                    "dose": "1 g/kg orally",
                                    "note": "Maximum 50 g",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Recent ingestion of a dangerous amount of a drug charcoal binds, in an alert patient, on poison-centre or medical advice"
                            ],
                            "exclude": [
                                "Reduced consciousness or unprotected airway",
                                "Caustics or hydrocarbons",
                                "Bowel obstruction",
                                "Substances not bound: iron, lithium, alcohols, metals"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Vomiting and aspiration",
                                "Don't delay transport to give it"
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
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-2",
                shortTitle: "Adenosine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Adenosine",
                    "lead": "Briefly blocks the AV node to stop re-entry SVT. Give it fast, flush it fast, and warn the patient: a few seconds of asystole and chest discomfort are expected.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiarrhythmic (AV nodal blocker)"
                                ],
                                [
                                    "Presentation",
                                    "6 mg/2 mL vial"
                                ],
                                [
                                    "Onset",
                                    "Seconds; lasts under a minute"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Regular narrow-complex SVT",
                                    "dose": "6 mg rapid IV push",
                                    "note": "Then 12 mg if needed. Each with a 20 mL saline flush; arm raised",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Regular monomorphic wide-complex tachycardia",
                                    "dose": "6 mg, then 12 mg",
                                    "note": "Only if regular and monomorphic",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "SVT",
                                    "dose": "0.1 mg/kg rapid IV/IO (maximum 6 mg)",
                                    "note": "Then 0.2 mg/kg (maximum 12 mg)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable regular narrow-complex tachycardia after vagal manoeuvres",
                                "Regular monomorphic wide-complex tachycardia (diagnostic and therapeutic)"
                            ],
                            "exclude": [
                                "Irregular or polymorphic tachycardia",
                                "AF with WPW (pre-excitation)",
                                "2nd or 3rd degree block or sick sinus without a pacemaker",
                                "Severe asthma (bronchospasm)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Transient asystole, flushing, chest pressure, breathlessness",
                                "Heart transplant patients and dipyridamole or carbamazepine: smaller dose (3 mg) per protocol",
                                "Record the rhythm strip during the dose"
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
                                            "sub": "Regular narrow tachycardia: adenosine after vagal manoeuvres.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-3",
                shortTitle: "Amiodarone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Amiodarone",
                    "lead": "The first-line antiarrhythmic for VF or pulseless VT that persists after shocks, and an option for stable wide-complex tachycardia.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiarrhythmic (mainly class III)"
                                ],
                                [
                                    "Presentation",
                                    "150 mg/3 mL ampoule"
                                ],
                                [
                                    "Effect",
                                    "Prolongs repolarisation; slows the AV node"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "VF or pulseless VT after 3 shocks",
                                    "dose": "300 mg IV/IO push",
                                    "note": "Then 150 mg after the 5th shock",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Stable wide-complex tachycardia",
                                    "dose": "150 mg IV over 10 minutes",
                                    "note": "Diluted in 100 mL D5W; may repeat per protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "VF or pulseless VT",
                                    "dose": "5 mg/kg IV/IO",
                                    "note": "Repeat up to a total of 15 mg/kg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Shock-refractory VF or pulseless VT",
                                "Stable regular wide-complex tachycardia"
                            ],
                            "exclude": [
                                "Known allergy",
                                "Arrhythmia from tricyclic antidepressant overdose (use sodium bicarbonate)",
                                "Outside arrest: hypotension, 2nd or 3rd degree block without a pacemaker"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and bradycardia during infusion: slow or stop it",
                                "QT prolongation: avoid with other QT-prolonging drugs (procainamide)",
                                "Large vein if possible: irritant"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "In pregnancy, don't withhold it in cardiac arrest"
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
                                            "ecg": "vfCoarse",
                                            "label": "VF",
                                            "sub": "After the 3rd shock: amiodarone 300 mg.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "vt",
                                            "label": "Monomorphic VT",
                                            "sub": "Stable: amiodarone 150 mg over 10 minutes.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-4",
                shortTitle: "Aspirin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Aspirin",
                    "lead": "Blocks platelet thromboxane for the life of the platelet. In suspected acute coronary syndrome, chewed aspirin early reduces deaths.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiplatelet (COX inhibitor)"
                                ],
                                [
                                    "Presentation",
                                    "81 mg chewable tablets (or 300 mg)"
                                ],
                                [
                                    "Onset",
                                    "Minutes when chewed"
                                ],
                                [
                                    "Scope",
                                    "Emergency medical responder and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Suspected ACS",
                                    "dose": "162–325 mg chewed (e.g. 4 × 81 mg = 324 mg)",
                                    "note": "Top up to a total of 324 mg if some was taken in the last hour",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children (Reye syndrome risk; ACS is rare)."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Chest pain or equivalent suspected to be ACS"
                            ],
                            "exclude": [
                                "Allergy or aspirin-induced asthma",
                                "Active bleeding or bleeding peptic ulcer",
                                "Third trimester of pregnancy unless directed"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Bronchospasm in aspirin-sensitive asthma"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Give even if the patient takes another antiplatelet or anticoagulant, unless bleeding"
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
                                            "ecg": "stemiAnt",
                                            "label": "Anterior STEMI",
                                            "sub": "Aspirin plus a cath-lab pre-alert.",
                                            "lead": "V3"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-5",
                shortTitle: "Atropine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Atropine",
                    "lead": "Blocks the vagus nerve: speeds a slow sinus or AV nodal rhythm and dries secretions. First-line for unstable bradycardia; large doses for organophosphate poisoning.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Anticholinergic (muscarinic antagonist)"
                                ],
                                [
                                    "Presentation",
                                    "0.5 mg/5 mL or 1 mg/10 mL prefilled syringe"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes IV"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Symptomatic bradycardia",
                                    "dose": "1 mg IV every 3–5 minutes",
                                    "note": "Maximum 3 mg; push fast",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Organophosphate or nerve agent",
                                    "dose": "2 mg IV/IM, doubling every 5 minutes",
                                    "note": "Until bronchial secretions dry",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Bradycardia (vagal or AV block)",
                                    "dose": "0.02 mg/kg IV/IO",
                                    "note": "Minimum 0.1 mg; maximum single dose 0.5 mg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Organophosphate",
                                    "dose": "0.02–0.05 mg/kg IV/IO",
                                    "note": "Repeat every 5 minutes until secretions dry",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Symptomatic sinus bradycardia or AV nodal block",
                                "Cholinergic crisis (organophosphates, nerve agents)"
                            ],
                            "exclude": [
                                "Cardiac arrest (no benefit)",
                                "Heart transplant (no vagal effect)",
                                "Wide-complex escape or Mobitz II and complete block: often ineffective – pace"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia and increased myocardial oxygen demand in ischaemia",
                                "Confusion, dry mouth, urinary retention, blurred vision",
                                "Angle-closure glaucoma"
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
                                            "label": "Sinus bradycardia",
                                            "sub": "Symptomatic: atropine 1 mg.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "chb",
                                            "label": "Complete heart block",
                                            "sub": "Atropine often fails: pace.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-60",
                shortTitle: "Budesonide (Nebulized)",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Budesonide (nebulised)",
                    "lead": "An inhaled steroid for croup when the child can't take oral or injected dexamethasone. It doesn't act fast: severe stridor still needs nebulised epinephrine.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Inhaled corticosteroid"
                                ],
                                [
                                    "Presentation",
                                    "0.5 mg/2 mL and 1 mg/2 mL nebules"
                                ],
                                [
                                    "Onset",
                                    "Hours"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Croup when oral or IM steroid isn't possible",
                                    "dose": "2 mg nebulised once",
                                    "note": "Keep the child calm on the carer's lap",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe croup when dexamethasone can't be given"
                            ],
                            "exclude": [
                                "Allergy",
                                "As the only treatment for stridor at rest (give nebulised epinephrine)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Cough, hoarseness",
                                "Agitation worsens stridor: blow-by if a mask upsets the child"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Oral dexamethasone is the first-line croup steroid"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-39",
                shortTitle: "Calcium Chloride",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Calcium Chloride",
                    "lead": "Stabilises the heart muscle membrane within minutes. Use it for hyperkalaemia with ECG changes and for calcium-channel blocker or magnesium toxicity – not routinely in arrest.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Electrolyte"
                                ],
                                [
                                    "Presentation",
                                    "10% solution, 1 g/10 mL"
                                ],
                                [
                                    "Strength",
                                    "About 3 times the calcium of the same volume of gluconate"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hyperkalaemia with ECG changes, CCB or magnesium toxicity",
                                    "dose": "1 g (10 mL of 10%) slow IV/IO over 5 minutes",
                                    "note": "Push in cardiac arrest; may repeat once",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same indications",
                                    "dose": "20 mg/kg (0.2 mL/kg of 10%) slow IV/IO",
                                    "note": "Maximum 1 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hyperkalaemia with ECG changes (peaked T, wide QRS)",
                                "Calcium-channel blocker or magnesium overdose",
                                "Symptomatic hypocalcaemia"
                            ],
                            "exclude": [
                                "Same line as sodium bicarbonate (precipitates)",
                                "Routine use in cardiac arrest without a reason"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Extravasation causes tissue necrosis: large vein or IO",
                                "Bradycardia and hypotension if pushed fast",
                                "Patients on digoxin: give slowly, with monitoring"
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
                                            "ecg": "hyperK",
                                            "label": "Hyperkalaemia",
                                            "sub": "Peaked T waves or wide QRS: calcium first.",
                                            "lead": "V3"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-69",
                shortTitle: "Calcium Gluconate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Calcium Gluconate",
                    "lead": "A gentler calcium for peripheral veins. Same uses as calcium chloride but three times the volume for the same effect – and the topical gel for hydrofluoric acid burns.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Electrolyte"
                                ],
                                [
                                    "Presentation",
                                    "10% solution, 10 mL ampoule (1 g)"
                                ],
                                [
                                    "Strength",
                                    "About one-third of calcium chloride's calcium"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hyperkalaemia, CCB or magnesium toxicity",
                                    "dose": "30 mL (3 g) of 10% IV/IO over 5–10 minutes",
                                    "note": "Push in cardiac arrest; may repeat",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same indications",
                                    "dose": "0.5 mL/kg (50 mg/kg) of 10% IV/IO",
                                    "note": "Maximum 20 mL",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hyperkalaemia with ECG changes",
                                "Calcium-channel blocker or magnesium toxicity",
                                "Hydrofluoric acid burns (topical gel 2.5%)"
                            ],
                            "exclude": [
                                "Same line as sodium bicarbonate",
                                "Hypercalcaemia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bradycardia, hypotension if fast",
                                "Less irritant than chloride but still avoid extravasation"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-76",
                shortTitle: "Ceftriaxone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Ceftriaxone",
                    "lead": "A broad-spectrum antibiotic for suspected meningococcal disease or septic shock when the hospital is far away. One dose early saves lives; don't delay transport for it.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Third-generation cephalosporin"
                                ],
                                [
                                    "Presentation",
                                    "1 g and 2 g powder vials"
                                ],
                                [
                                    "Onset",
                                    "Bactericidal within hours"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Suspected meningococcal disease or septic shock with long transport",
                                    "dose": "2 g IV/IO over 2–4 minutes",
                                    "note": "Or 2 g IM split between two sites",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same",
                                    "dose": "80 mg/kg IV/IO or IM",
                                    "note": "Maximum 2 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Non-blanching rash with signs of sepsis",
                                "Septic shock with long transport, per protocol"
                            ],
                            "exclude": [
                                "Anaphylaxis to cephalosporins or penicillins",
                                "Newborns under 28 days receiving calcium-containing IV fluids"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Allergic reactions",
                                "Never in the same line as calcium-containing fluids (Ringer's lactate)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Record the time given and tell the hospital"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-77",
                shortTitle: "Chlorphenamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Chlorphenamine",
                    "lead": "An antihistamine for itch and hives. In anaphylaxis it's an optional add-on after epinephrine – it does nothing for the airway or blood pressure.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "H1 antihistamine (sedating)"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL injection; 4 mg tablets; 2 mg/5 mL syrup"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 30 minutes orally"
                                ],
                                [
                                    "Scope",
                                    "Advanced EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Allergic skin symptoms",
                                    "dose": "10 mg IM or slow IV",
                                    "note": "4 mg orally for mild reactions",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "6 months to 6 years",
                                    "dose": "2.5 mg IM or slow IV",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "6–12 years",
                                    "dose": "5 mg IM or slow IV",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Over 12 years",
                                    "dose": "10 mg IM or slow IV",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Urticaria, itch, mild angioedema without airway or circulation problems",
                                "After epinephrine in anaphylaxis, for skin symptoms"
                            ],
                            "exclude": [
                                "Infants under 6 months",
                                "Instead of epinephrine in anaphylaxis"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Drowsiness – no driving",
                                "Hypotension if pushed fast IV",
                                "Older adults: falls and confusion; glaucoma and urinary retention"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-53",
                shortTitle: "Clopidogrel",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Clopidogrel",
                    "lead": "A second antiplatelet (P2Y12 inhibitor) added to aspirin for STEMI when your cath-lab pathway asks for it. Only one P2Y12 drug, only by protocol.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiplatelet (irreversible P2Y12 inhibitor)"
                                ],
                                [
                                    "Presentation",
                                    "75 mg and 300 mg tablets"
                                ],
                                [
                                    "Use",
                                    "STEMI pathway, with medical direction"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "STEMI for primary PCI",
                                    "dose": "600 mg orally",
                                    "note": "300 mg with fibrinolysis; 75 mg if over 75 years with fibrinolysis",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not indicated in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "STEMI on a 12-lead, with aspirin, per the receiving PCI centre"
                            ],
                            "exclude": [
                                "Active bleeding or previous intracranial haemorrhage",
                                "Already on another P2Y12 inhibitor (ticagrelor, prasugrel)",
                                "Severe liver disease"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Possible urgent bypass surgery: check with the cath lab first"
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
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-6",
                shortTitle: "Combivent",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Combivent (salbutamol + ipratropium)",
                    "lead": "A combined nebule of a beta-2 agonist and an anticholinergic for moderate to severe asthma or COPD attacks. Don't add separate ipratropium on top.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-2 agonist plus anticholinergic"
                                ],
                                [
                                    "Presentation",
                                    "2.5 mL nebule: salbutamol 2.5 mg + ipratropium 0.5 mg"
                                ],
                                [
                                    "Onset",
                                    "Minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe bronchospasm (asthma, COPD)",
                                    "dose": "1 nebule (2.5 mL)",
                                    "note": "Repeat salbutamol alone as needed; ipratropium up to 3 doses in the first hour",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used in children: give salbutamol and ipratropium separately at pediatric doses."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe asthma or COPD exacerbation"
                            ],
                            "exclude": [
                                "Allergy to either component"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, dry mouth",
                                "Eyes: avoid mist in the eyes (glaucoma)",
                                "COPD: drive with air or titrate oxygen to 88–92%"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-7",
                shortTitle: "D5W",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Dextrose 5% (D5W)",
                    "lead": "A carrier fluid for drugs that must not be mixed with saline, such as amiodarone infusions. It is not a treatment for hypoglycaemia or a resuscitation fluid.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Carbohydrate solution"
                                ],
                                [
                                    "Presentation",
                                    "100 mL (5 g glucose)"
                                ],
                                [
                                    "Use",
                                    "Drug dilution"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Diluent",
                                    "dose": "As needed for the infusion",
                                    "note": "e.g. amiodarone 150 mg in 100 mL",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "As needed for drug dilution only."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Diluting drugs that need dextrose (amiodarone)"
                            ],
                            "exclude": [
                                "Treating hypoglycaemia (too little glucose)",
                                "Volume resuscitation or head injury (it becomes free water)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia with large volumes"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-40",
                shortTitle: "Dexamethasone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Dexamethasone",
                    "lead": "A long-acting steroid: one dose treats croup for days and helps asthma and COPD attacks recover. It takes hours to work, so it never replaces bronchodilators or epinephrine.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid (long-acting)"
                                ],
                                [
                                    "Presentation",
                                    "4 mg/mL injection; tablets or oral solution"
                                ],
                                [
                                    "Onset",
                                    "1–2 hours; lasts about 3 days"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Asthma or COPD exacerbation",
                                    "dose": "10 mg IV, IM or orally",
                                    "note": "Single dose",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Croup",
                                    "dose": "0.15–0.6 mg/kg orally (or IM/IV)",
                                    "note": "Maximum 16 mg; oral preferred in a calm child",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Asthma",
                                    "dose": "0.6 mg/kg orally or IV/IM",
                                    "note": "Maximum 16 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Croup of any severity",
                                "Moderate to severe asthma or COPD exacerbation"
                            ],
                            "exclude": [
                                "Allergy",
                                "Instead of epinephrine in anaphylaxis or croup with stridor at rest"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia in diabetes",
                                "Agitation"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-8",
                shortTitle: "Dextrose 10%",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Dextrose 10%",
                    "lead": "The preferred IV glucose for hypoglycaemia: as effective as D50, kinder to veins and easier to titrate. Recheck glucose and consciousness after each portion.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Carbohydrate"
                                ],
                                [
                                    "Presentation",
                                    "25 g/250 mL; 50 g/500 mL"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypoglycaemia (below 70 mg/dL) unable to take oral glucose",
                                    "dose": "100–250 mL (10–25 g) IV/IO, titrated",
                                    "note": "Recheck glucose after 10 minutes; repeat if needed",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Hypoglycaemia (below 60 mg/dL in children)",
                                    "dose": "5 mL/kg IV/IO",
                                    "note": "Maximum 250 mL; repeat if needed",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Newborn",
                                    "dose": "2 mL/kg IV/IO",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hypoglycaemia in a patient who can't take oral glucose"
                            ],
                            "exclude": [
                                "Hyperglycaemia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "If consciousness doesn't recover with normal glucose, look for another cause",
                                "Give thiamine as well in alcohol use or malnutrition"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-68",
                shortTitle: "Dextrose 50%",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Dextrose 50% (D50)",
                    "lead": "Concentrated glucose for adults when D10 isn't available. It's very irritant: secure, large vein only.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Hypertonic carbohydrate"
                                ],
                                [
                                    "Presentation",
                                    "25 g/50 mL syringe"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes"
                                ],
                                [
                                    "Scope",
                                    "Advanced EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypoglycaemia (below 70 mg/dL), no D10",
                                    "dose": "12.5–25 g (25–50 mL) slow IV",
                                    "note": "Recheck glucose after 10 minutes",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children: use dextrose 10% (5 mL/kg)."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Adult hypoglycaemia when D10 is unavailable"
                            ],
                            "exclude": [
                                "No secure IV",
                                "Children"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Extravasation causes necrosis",
                                "Rebound hyperglycaemia"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-9",
                shortTitle: "Diazepam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Diazepam",
                    "lead": "A benzodiazepine for seizures – IV, or rectally when there's no access. For IM or intranasal use choose midazolam: diazepam is absorbed poorly from muscle.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Benzodiazepine"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/2 mL injection; 5 mg and 10 mg rectal tubes"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes IV; 5–10 minutes rectal"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Seizure lasting 5 minutes or more",
                                    "dose": "0.15–0.2 mg/kg IV, maximum 10 mg per dose",
                                    "note": "Repeat once after 5 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Severe agitation",
                                    "dose": "5 mg IV, titrated",
                                    "note": "Reduce in head injury and older adults",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Seizure, IV",
                                    "dose": "0.1–0.2 mg/kg IV/IO",
                                    "note": "Maximum 10 mg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Seizure, no access",
                                    "dose": "0.5 mg/kg rectally",
                                    "note": "Maximum 20 mg",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Seizure lasting 5 minutes or more",
                                "Severe agitation (where protocol allows)"
                            ],
                            "exclude": [
                                "IM route",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: bag-mask ready, ETCO₂",
                                "Hypotension",
                                "Worse with alcohol or opioids"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-10",
                shortTitle: "Diclofenac",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Diclofenac",
                    "lead": "An injectable anti-inflammatory for moderate to severe pain, especially renal colic. Avoid in kidney disease, dehydration, bleeding and late pregnancy.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "NSAID"
                                ],
                                [
                                    "Presentation",
                                    "75 mg/3 mL"
                                ],
                                [
                                    "Onset",
                                    "15–30 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain (renal colic, musculoskeletal)",
                                    "dose": "75 mg deep IM",
                                    "note": "IV only as a diluted infusion where protocol allows",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used prehospital in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Renal colic and musculoskeletal pain"
                            ],
                            "exclude": [
                                "NSAID allergy or NSAID-induced asthma",
                                "Kidney disease, dehydration or shock",
                                "Active bleeding, anticoagulants, peptic ulcer",
                                "Third trimester of pregnancy",
                                "Heart failure or recent MI"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bronchospasm in sensitive asthma",
                                "Injection-site pain; same line as nefopam can precipitate"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-50",
                shortTitle: "Diltiazem",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Diltiazem",
                    "lead": "Slows the AV node to control the rate of AF or flutter in a stable patient. Never for wide-complex or pre-excited rhythms, and never in heart failure or shock.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Calcium-channel blocker (non-dihydropyridine)"
                                ],
                                [
                                    "Presentation",
                                    "25 mg/5 mL (5 mg/mL)"
                                ],
                                [
                                    "Onset",
                                    "2–5 minutes"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Rate control of AF or flutter; refractory narrow SVT",
                                    "dose": "0.25 mg/kg IV over 2 minutes (about 15–20 mg)",
                                    "note": "After 15 minutes: 0.35 mg/kg (about 20–25 mg)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not recommended prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable AF or flutter with rapid ventricular response",
                                "Narrow-complex SVT not responding to vagal manoeuvres and adenosine"
                            ],
                            "exclude": [
                                "SBP below 90 mmHg or shock",
                                "Decompensated heart failure",
                                "Wide-complex tachycardia or AF with WPW",
                                "2nd or 3rd degree block or sick sinus without a pacemaker"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and bradycardia: calcium can reverse",
                                "Recent IV beta-blocker: risk of heart block",
                                "12-lead before and after"
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
                                            "ecg": "afibRvr",
                                            "label": "AF with fast ventricular rate",
                                            "sub": "Stable: diltiazem for rate control.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-11",
                shortTitle: "Diphenhydramine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Diphenhydramine",
                    "lead": "A sedating antihistamine for allergic itch and hives, and an add-on after epinephrine in anaphylaxis. Also used for acute dystonic reactions.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "H1 antihistamine (sedating, anticholinergic)"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 15–30 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Allergic reaction (after epinephrine if anaphylaxis)",
                                    "dose": "25–50 mg IM or slow IV",
                                    "note": "IV diluted over 5 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Acute dystonic reaction",
                                    "dose": "25–50 mg IV or IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Allergic reaction",
                                    "dose": "1 mg/kg IM or slow IV",
                                    "note": "Maximum 50 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Urticaria, itch, angioedema without airway or circulation compromise",
                                "Skin symptoms after epinephrine in anaphylaxis",
                                "Dystonic reactions to antipsychotics or antiemetics"
                            ],
                            "exclude": [
                                "Newborns",
                                "Instead of epinephrine in anaphylaxis"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Drowsiness, confusion in older adults",
                                "Anticholinergic effects: urinary retention, dry mouth, glaucoma",
                                "Pain if given undiluted IV"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Pregnancy and breastfeeding: may be given when needed; short-term use"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-12",
                shortTitle: "Dopamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Dopamine",
                    "lead": "A dose-dependent inotrope and vasopressor. Most services now prefer norepinephrine for shock and epinephrine for bradycardia; dopamine causes more arrhythmias.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Catecholamine (dopamine, beta-1 and alpha-1 agonist)"
                                ],
                                [
                                    "Presentation",
                                    "200 mg/5 mL for infusion"
                                ],
                                [
                                    "Effect by dose",
                                    "5–10 mcg/kg/min mainly heart; 10–20 mcg/kg/min vasoconstriction"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Shock after fluids; symptomatic bradycardia",
                                    "dose": "5–20 mcg/kg/min IV/IO infusion",
                                    "note": "Pump only; titrate to blood pressure and perfusion",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Shock after fluids",
                                    "dose": "2–20 mcg/kg/min IV/IO infusion",
                                    "note": "Pump only",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Cardiogenic or distributive shock after fluids",
                                "Symptomatic bradycardia not responding to atropine (alternative to epinephrine)"
                            ],
                            "exclude": [
                                "Uncorrected hypovolaemia",
                                "Phaeochromocytoma",
                                "VF or VT"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachyarrhythmias including VT and VF",
                                "Extravasation necrosis: large vein or IO"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Without a pump, choose a drug you can give accurately (push-dose epinephrine)"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-62",
                shortTitle: "Droperidol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Droperidol",
                    "lead": "A fast, reliable sedative for severe acute behavioural disturbance, and a low-dose antiemetic. Monitor the ECG once it's safe to approach.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Butyrophenone antipsychotic"
                                ],
                                [
                                    "Presentation",
                                    "2.5 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "3–10 minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe agitation",
                                    "dose": "5–10 mg IM or 2.5–5 mg IV",
                                    "note": "May repeat once after 15 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Refractory nausea",
                                    "dose": "0.625–1.25 mg IV",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not recommended prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe agitation threatening safety",
                                "Nausea not responding to other antiemetics"
                            ],
                            "exclude": [
                                "Known long QT",
                                "Parkinson's disease",
                                "Coma"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "QT prolongation: 12-lead and monitor",
                                "Dystonia, akathisia (treat with diphenhydramine)",
                                "Hypotension; older adults"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-13",
                shortTitle: "Epinephrine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Epinephrine",
                    "lead": "The most important emergency drug: IM for anaphylaxis, IV/IO in cardiac arrest, small push doses or an infusion for shock and bradycardia. Check the concentration every time.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Alpha and beta adrenergic agonist"
                                ],
                                [
                                    "Presentations",
                                    "1 mg/mL (IM); 0.1 mg/mL 10 mL syringe (IV arrest); auto-injectors 0.3 and 0.15 mg"
                                ],
                                [
                                    "Effect",
                                    "Vasoconstriction, stronger faster heart, bronchodilation, mast-cell stabilising"
                                ],
                                [
                                    "Scope",
                                    "EMT (auto-injector); paramedic (IV)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Cardiac arrest",
                                    "dose": "1 mg IV/IO every 3–5 minutes",
                                    "note": "0.1 mg/mL. Non-shockable: as soon as possible; shockable: after the 2nd shock",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Anaphylaxis",
                                    "dose": "0.5 mg IM (0.5 mL of 1 mg/mL), or 0.3 mg auto-injector",
                                    "note": "Outer thigh; repeat after 5 minutes",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Refractory anaphylaxis, shock, bradycardia",
                                    "dose": "Push dose 10–20 mcg IV every 2–5 minutes, or infusion 2–10 mcg/min",
                                    "note": "Titrate; monitor closely",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Life-threatening asthma",
                                    "dose": "0.5 mg IM",
                                    "note": "When inhaled therapy fails",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Cardiac arrest",
                                    "dose": "0.01 mg/kg IV/IO (0.1 mL/kg of 0.1 mg/mL)",
                                    "note": "Maximum 1 mg; every 3–5 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Anaphylaxis",
                                    "dose": "0.01 mg/kg IM (maximum 0.5 mg)",
                                    "note": "Auto-injector 0.15 mg (under 25 kg) or 0.3 mg",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Shock or bradycardia infusion",
                                    "dose": "0.05–0.3 mcg/kg/min",
                                    "note": "Pump",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Cardiac arrest",
                                "Anaphylaxis",
                                "Shock or bradycardia not responding to first-line treatment",
                                "Life-threatening asthma",
                                "Croup with stridor at rest (nebulised)"
                            ],
                            "exclude": [
                                "No absolute contraindication in an emergency"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tenfold errors: 1 mg/mL is never pushed IV",
                                "Tachycardia, arrhythmias, myocardial ischaemia, hypertension",
                                "Anxiety, tremor, vomiting"
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
                                            "ecg": "vfCoarse",
                                            "label": "VF",
                                            "sub": "After the 2nd shock: epinephrine 1 mg.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "asystole",
                                            "label": "Asystole",
                                            "sub": "Epinephrine as soon as possible.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
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
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-14",
                shortTitle: "Ethyl Chloride",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ethyl Chloride (vapocoolant spray)",
                    "lead": "A cold spray that numbs skin for seconds – enough for a cannula in a needle-anxious patient or a minor sprain. Stop before the skin frosts.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Topical vapocoolant"
                                ],
                                [
                                    "Presentation",
                                    "100 mL spray bottle"
                                ],
                                [
                                    "Duration",
                                    "Seconds to a minute"
                                ],
                                [
                                    "Scope",
                                    "All levels"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Cannulation or minor soft-tissue pain",
                                    "dose": "Spray 3–7 seconds from 8–23 cm (3–9 inches)",
                                    "note": "Stop just before the skin whitens",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Cannulation",
                                    "dose": "Same as adults",
                                    "note": "Explain the cold first",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Pain from cannulation or minor contusions and sprains"
                            ],
                            "exclude": [
                                "Broken skin, eyes, mucous membranes",
                                "Hypersensitivity",
                                "Poor circulation to the area"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Frostbite and skin damage if over-sprayed",
                                "Flammable"
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
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-41",
                shortTitle: "Etomidate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Etomidate",
                    "lead": "An induction agent for rapid sequence intubation that barely moves the blood pressure. One dose only, and it gives no pain relief.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Sedative-hypnotic (induction agent)"
                                ],
                                [
                                    "Presentation",
                                    "2 mg/mL (20 mg/10 mL)"
                                ],
                                [
                                    "Onset",
                                    "30–60 seconds; lasts 3–5 minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care / RSI-credentialed"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "RSI induction",
                                    "dose": "0.3 mg/kg IV",
                                    "note": "Have the paralytic and airway ready",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "RSI induction",
                                    "dose": "0.2–0.3 mg/kg IV",
                                    "note": "Physician order or local RSI protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "RSI induction, especially in unstable patients",
                                "Procedural sedation for cardioversion"
                            ],
                            "exclude": [
                                "Allergy",
                                "Repeated doses or infusions (adrenal suppression)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Myoclonus",
                                "Vomiting on emergence",
                                "No analgesia: pair with an opioid"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-42",
                shortTitle: "Fentanyl",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Fentanyl",
                    "lead": "A fast, short-acting opioid that's kinder to blood pressure than morphine. Titrate small IV doses, or give it intranasally when there's no line.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Synthetic opioid"
                                ],
                                [
                                    "Presentation",
                                    "100 mcg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes IV; lasts 30–60 minutes"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "25–50 mcg IV every 5 minutes, titrated",
                                    "note": "Maximum 200 mcg (1 mcg/kg doses)",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV access",
                                    "dose": "1–2 mcg/kg intranasal or IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "1 mcg/kg IV (maximum single dose 50 mcg)",
                                    "note": "Every 5 minutes, titrated",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV access",
                                    "dose": "1.5 mcg/kg intranasal",
                                    "note": "Maximum 100 mcg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe pain, including chest pain and trauma",
                                "Analgesia before painful procedures"
                            ],
                            "exclude": [
                                "Breathing depression without ventilation support",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: naloxone and bag-mask ready",
                                "Hypotension, nausea, sedation",
                                "Chest wall rigidity with rapid large doses"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-15",
                shortTitle: "Furosemide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Furosemide",
                    "lead": "A loop diuretic for pulmonary oedema with clear fluid overload. CPAP and nitrates come first; many breathless patients aren't overloaded and are harmed by it.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Loop diuretic"
                                ],
                                [
                                    "Presentation",
                                    "20 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "5 minutes (venodilation); diuresis 30 minutes"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Pulmonary oedema with fluid overload",
                                    "dose": "40 mg slow IV over 1–2 minutes",
                                    "note": "Or double the usual daily dose for patients already taking it, per protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used prehospital in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Acute pulmonary oedema with signs of fluid overload (weight gain, oedema, raised JVP)"
                            ],
                            "exclude": [
                                "Hypotension or shock",
                                "Dehydration, anuria",
                                "Pneumonia or COPD mimicking heart failure"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension, low potassium, dehydration"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-16",
                shortTitle: "Glucagon",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Glucagon",
                    "lead": "Raises glucose without an IV by releasing liver glycogen – and in much larger IV doses, it supports the heart in beta-blocker and calcium-channel blocker overdose.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Hormone"
                                ],
                                [
                                    "Presentation",
                                    "1 mg kit; 3 mg nasal powder"
                                ],
                                [
                                    "Onset",
                                    "About 10 minutes for glucose"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypoglycaemia, no IV",
                                    "dose": "1 mg IM or SC",
                                    "note": "Or 3 mg intranasal; feed when awake",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Beta-blocker or CCB overdose with shock",
                                    "dose": "50 mcg/kg (3–5 mg) IV over 1–2 minutes",
                                    "note": "Repeat once; then infusion; vomiting is common",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Hypoglycaemia",
                                    "dose": "0.5 mg IM if under 25 kg; 1 mg if 25 kg or more",
                                    "note": "Nasal 3 mg from 4 years",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hypoglycaemia without IV access",
                                "Shock from beta-blocker or calcium-channel blocker toxicity"
                            ],
                            "exclude": [
                                "Phaeochromocytoma",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Works poorly with low glycogen: starvation, alcohol, liver disease, prolonged hypoglycaemia",
                                "Nausea and vomiting – protect the airway"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-17",
                shortTitle: "Glucose Paste",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Oral Glucose (gel or paste)",
                    "lead": "Fast sugar by mouth for hypoglycaemia in a patient who is awake enough to swallow safely. It must be swallowed: it isn't absorbed through the cheek.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Carbohydrate"
                                ],
                                [
                                    "Presentation",
                                    "15 g tube (40% gel)"
                                ],
                                [
                                    "Onset",
                                    "10–15 minutes"
                                ],
                                [
                                    "Scope",
                                    "All levels"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypoglycaemia (below 70 mg/dL), alert and swallowing",
                                    "dose": "15–20 g (1 tube)",
                                    "note": "Recheck after 15 minutes; repeat; then a meal",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same",
                                    "dose": "Half to one tube",
                                    "note": "Infants: small amounts on a gloved fingertip to suck",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hypoglycaemia in a patient who can swallow and protect the airway"
                            ],
                            "exclude": [
                                "Unresponsive or unable to swallow"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Aspiration in drowsy patients",
                                "Vomiting"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-18",
                shortTitle: "GTN",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Glyceryl Trinitrate (Nitroglycerin)",
                    "lead": "Dilates veins (and coronary arteries) to cut preload and relieve ischaemic pain and pulmonary oedema. The danger is hypotension: check pressure, PDE-5 drugs and the right ventricle first.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Nitrate vasodilator"
                                ],
                                [
                                    "Presentation",
                                    "0.4 mg per spray or tablet"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes sublingual"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Ischaemic chest pain",
                                    "dose": "0.4 mg sublingual every 5 minutes",
                                    "note": "Up to 3 doses",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Acute pulmonary oedema with high BP",
                                    "dose": "0.4–0.8 mg sublingual, repeat",
                                    "note": "Higher doses or infusion per protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Ischaemic chest pain with adequate blood pressure",
                                "Hypertensive pulmonary oedema"
                            ],
                            "exclude": [
                                "SBP below 90 mmHg (or 30 below baseline)",
                                "Heart rate below 50 or above 100",
                                "Right ventricular infarction",
                                "Sildenafil or vardenafil in 24 hours; tadalafil in 48 hours"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension: lie flat, fluids",
                                "Headache, flushing, dizziness",
                                "Do a right-sided ECG (V4R) in inferior STEMI first"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Spray: don't shake; under the tongue, not swallowed"
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
                                            "ecg": "stemiInfRv",
                                            "label": "Inferior STEMI with RV infarction",
                                            "sub": "ST elevation in V4R: no nitrates.",
                                            "lead": "V4R"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-19",
                shortTitle: "Haloperidol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Haloperidol",
                    "lead": "An antipsychotic for agitation driven by psychosis. Slower and with more side effects than droperidol or midazolam for undifferentiated agitation.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Butyrophenone antipsychotic"
                                ],
                                [
                                    "Presentation",
                                    "5 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "15–30 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Agitation from psychosis",
                                    "dose": "5 mg IM",
                                    "note": "Older adults 0.5–2 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe agitation from a known psychotic illness"
                            ],
                            "exclude": [
                                "Parkinson's disease or Lewy body dementia",
                                "Known long QT",
                                "Coma or CNS depression"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dystonia and akathisia",
                                "QT prolongation and torsades",
                                "Neuroleptic malignant syndrome (rare)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Older adults with dementia: higher risk of death and stroke – avoid unless essential"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-55",
                shortTitle: "Heparin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Heparin (unfractionated)",
                    "lead": "An anticoagulant given on some STEMI pathways before PCI or with fibrinolysis. A high-alert drug: units, not milligrams, and only with medical direction.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Anticoagulant"
                                ],
                                [
                                    "Presentation",
                                    "5,000 units/mL"
                                ],
                                [
                                    "Reversal",
                                    "Protamine (hospital)"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic, per STEMI pathway"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "STEMI for primary PCI",
                                    "dose": "70–100 units/kg IV bolus (often 5,000 units)",
                                    "note": "With fibrinolysis: 60 units/kg, maximum 4,000 units",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not indicated prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "STEMI on a pathway that uses prehospital heparin, with medical direction"
                            ],
                            "exclude": [
                                "Active bleeding or haemorrhagic stroke",
                                "Recent major trauma or surgery",
                                "Heparin-induced thrombocytopenia",
                                "Already fully anticoagulated"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Units errors: double-check every dose"
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
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-20",
                shortTitle: "Hydrocortisone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Hydrocortisone",
                    "lead": "A fast-acting steroid with one life-saving prehospital use – adrenal crisis – and supporting roles in severe asthma and COPD. Give it early to anyone with known adrenal insufficiency who is unwell.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid (with mineralocorticoid effect)"
                                ],
                                [
                                    "Presentation",
                                    "100 mg powder or 100 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "Hours for anti-inflammatory effect"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Adrenal crisis",
                                    "dose": "100 mg IM or IV",
                                    "note": "Plus fluids; don't delay for transport",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Severe asthma or COPD exacerbation",
                                    "dose": "100 mg IV or IM",
                                    "note": "If oral steroid can't be taken",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Adrenal crisis",
                                    "dose": "Under 1 year 25 mg; 1–5 years 50 mg; 6 years or more 100 mg",
                                    "note": "IM or IV",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Severe asthma",
                                    "dose": "4 mg/kg IV (maximum 100 mg)",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Known adrenal insufficiency (Addison's, long-term steroids) with vomiting, shock or collapse",
                                "Severe asthma or COPD when oral steroid isn't possible"
                            ],
                            "exclude": [
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia",
                                "Not a first-line anaphylaxis drug: epinephrine is"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Patients with adrenal insufficiency often carry an emergency card and their own injection: help them use it"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-73",
                shortTitle: "Hydroxocobalamin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Hydroxocobalamin (Cyanokit)",
                    "lead": "Binds cyanide to form vitamin B12. Give it early to smoke-inhalation patients with collapse, seizures, shock or arrest – alongside 100% oxygen for carbon monoxide.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Cyanide antidote"
                                ],
                                [
                                    "Presentation",
                                    "5 g powder, mixed with 200 mL saline"
                                ],
                                [
                                    "Onset",
                                    "Minutes"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Suspected cyanide poisoning",
                                    "dose": "5 g IV/IO over 15 minutes",
                                    "note": "Second 5 g by severity (maximum 10 g)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Suspected cyanide poisoning",
                                    "dose": "70 mg/kg IV/IO over 15 minutes",
                                    "note": "Maximum 5 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Enclosed-space fire with reduced consciousness, seizures, hypotension or arrest",
                                "Known cyanide exposure"
                            ],
                            "exclude": [
                                "Known allergy (relative in life-threatening poisoning)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Red skin and urine for days; interferes with SpO₂ and lab tests",
                                "Separate line: incompatible with many drugs",
                                "Transient hypertension"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-21",
                shortTitle: "Hyoscine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Hyoscine Butylbromide",
                    "lead": "An antispasmodic for colicky abdominal pain from bowel, biliary or renal spasm. It doesn't cross into the brain, so it doesn't sedate.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antimuscarinic antispasmodic"
                                ],
                                [
                                    "Presentation",
                                    "20 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Colicky abdominal or renal pain",
                                    "dose": "20 mg IV, IM or SC",
                                    "note": "May repeat after 30 minutes (maximum 100 mg a day)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used prehospital in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Spasm pain: renal colic, gastroenteritis cramps, biliary colic, period pain"
                            ],
                            "exclude": [
                                "Tachyarrhythmia",
                                "Angle-closure glaucoma",
                                "Myasthenia gravis",
                                "Prostatic enlargement or urinary retention",
                                "Bowel obstruction"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, dry mouth, blurred vision",
                                "Hypotension when given IV"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-71",
                shortTitle: "Hypertonic Saline 3%",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Hypertonic Saline 3%",
                    "lead": "Draws water out of the brain to buy time for a patient with signs of herniation after head injury, and treats seizures from severe low sodium.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Hyperosmolar crystalloid"
                                ],
                                [
                                    "Presentation",
                                    "3% sodium chloride, 250 mL and 500 mL"
                                ],
                                [
                                    "Onset",
                                    "Minutes"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic, critical care"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "TBI with herniation signs",
                                    "dose": "250 mL IV/IO over 10–20 minutes",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Seizures or coma from severe hyponatraemia",
                                    "dose": "100 mL IV/IO over 10 minutes",
                                    "note": "Repeat up to 3 doses until symptoms stop; raise sodium by no more than 10 mmol/L in 24 hours (8 mmol/L if at high risk)",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Moderate symptoms of hyponatraemia (confusion, headache, vomiting), on medical advice",
                                    "dose": "100 mL IV/IO over 10 minutes, once",
                                    "note": "Escalate to the seizure dose if seizures or coma develop",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "TBI with herniation signs",
                                    "dose": "3–5 mL/kg IV/IO over 10–20 minutes",
                                    "note": "Maximum 250 mL",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Seizures from severe hyponatraemia",
                                    "dose": "2 mL/kg IV/IO over 10 minutes",
                                    "note": "Maximum 100 mL per dose; repeat up to 3 doses",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Head injury with signs of herniation (unequal or fixed pupils, extensor posturing, Cushing's triad)",
                                "Seizures or coma from severe hyponatraemia (known low sodium or a strong history, on medical advice)",
                                "Moderate symptoms of hyponatraemia (confusion, headache, vomiting), on medical advice"
                            ],
                            "exclude": [
                                "Hypernatraemia",
                                "No signs of raised intracranial pressure",
                                "Hyponatraemia with no or only mild symptoms (too-fast correction damages the brain)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Fluid overload in heart failure",
                                "Large vein or IO",
                                "Hyponatraemia: stop once symptoms improve; over-correction causes osmotic demyelination",
                                "High risk of osmotic demyelination (alcohol use, malnutrition, low potassium, liver disease): limit the rise to 8 mmol/L in 24 hours"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "A bridge to neurosurgery: keep SpO₂ 94% or more, ETCO₂ 35–45 mmHg and SBP 110 mmHg or more"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "GCS",
                                            "sub": "Track consciousness",
                                            "href": "../pages/GCS.html",
                                            "icon": "brain"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-66",
                shortTitle: "Ibuprofen",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ibuprofen",
                    "lead": "An oral anti-inflammatory for mild to moderate pain and fever. Combine with paracetamol for better effect – but not in bleeding, kidney trouble or dehydration.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "NSAID"
                                ],
                                [
                                    "Presentation",
                                    "200 mg and 400 mg tablets; 100 mg/5 mL suspension"
                                ],
                                [
                                    "Onset",
                                    "30–60 minutes"
                                ],
                                [
                                    "Scope",
                                    "All levels, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Mild to moderate pain or fever",
                                    "dose": "400 mg orally",
                                    "note": "Check NSAID use in the last 6 hours",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Pain or fever (over 3 months and 5 kg)",
                                    "dose": "10 mg/kg orally",
                                    "note": "Maximum 400 mg",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Musculoskeletal pain, minor trauma, fever"
                            ],
                            "exclude": [
                                "NSAID allergy or aspirin-sensitive asthma",
                                "Active bleeding, peptic ulcer, anticoagulants",
                                "Kidney disease, dehydration, shock",
                                "Third trimester of pregnancy",
                                "Suspected major haemorrhage"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Indigestion, GI bleeding",
                                "Bronchospasm in sensitive asthma"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-56",
                shortTitle: "Ipratropium Bromide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Ipratropium Bromide",
                    "lead": "An anticholinergic bronchodilator added to salbutamol for moderate to severe asthma and COPD attacks. Never on its own as the rescue drug.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Anticholinergic bronchodilator"
                                ],
                                [
                                    "Presentation",
                                    "250 mcg/2 mL and 500 mcg/2 mL nebules"
                                ],
                                [
                                    "Onset",
                                    "15–20 minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe bronchospasm",
                                    "dose": "500 mcg nebulised with salbutamol",
                                    "note": "Every 20 minutes, up to 3 doses",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Moderate to severe asthma",
                                    "dose": "Under 12 years 250 mcg; 12 years or more 500 mcg",
                                    "note": "With salbutamol; up to 3 doses",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe asthma or COPD exacerbation, with a beta-2 agonist"
                            ],
                            "exclude": [
                                "Allergy to ipratropium or atropine",
                                "Combivent already given (contains ipratropium)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dry mouth, blurred vision; keep mist out of the eyes (glaucoma)",
                                "Urinary retention"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-22",
                shortTitle: "Ketamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ketamine",
                    "lead": "A dissociative drug with three doses for three jobs: low dose for pain, a moderate dose for severe agitation, and a full dose for RSI induction. Breathing and blood pressure are usually preserved.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Dissociative anaesthetic (NMDA antagonist)"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL (500 mg/10 mL); 10 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "1 minute IV; 3–5 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic (analgesia); critical care (RSI)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Analgesia",
                                    "dose": "0.1–0.3 mg/kg IV slowly",
                                    "note": "Or 0.5–1 mg/kg intranasal",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Severe agitation",
                                    "dose": "4–5 mg/kg IM, or 1–2 mg/kg IV",
                                    "note": "Be ready to manage the airway",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "RSI induction",
                                    "dose": "1–2 mg/kg IV",
                                    "note": "Useful in shock and bronchospasm",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Analgesia",
                                    "dose": "0.1–0.3 mg/kg IV or 1 mg/kg intranasal",
                                    "note": "Per protocol",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "RSI induction",
                                    "dose": "1–2 mg/kg IV",
                                    "note": "Critical care",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe pain, especially trauma and burns",
                                "Severe acute behavioural disturbance",
                                "RSI induction, especially in hypotension or asthma"
                            ],
                            "exclude": [
                                "Allergy",
                                "Uncontrolled severe hypertension or acute coronary syndrome (relative)",
                                "Active psychosis for analgesia (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Laryngospasm, hypersalivation",
                                "Emergence reactions: calm environment; small benzodiazepine dose if needed",
                                "Vomiting; rising BP and HR"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-43",
                shortTitle: "Ketorolac",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ketorolac",
                    "lead": "An injectable anti-inflammatory for renal colic and musculoskeletal pain without sedation. Low doses work as well as high ones.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "NSAID"
                                ],
                                [
                                    "Presentation",
                                    "30 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "30 minutes; full effect 1–2 hours"
                                ],
                                [
                                    "Scope",
                                    "Advanced EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate pain (renal colic, musculoskeletal, migraine)",
                                    "dose": "15 mg IV or 30 mg IM",
                                    "note": "Single dose; 15 mg IV is as effective as higher doses",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for prehospital use in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Renal colic, musculoskeletal pain, migraine"
                            ],
                            "exclude": [
                                "NSAID allergy or NSAID-induced asthma",
                                "Bleeding, anticoagulants, peptic ulcer",
                                "Kidney disease, dehydration",
                                "Third trimester of pregnancy",
                                "Age under 17"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding risk",
                                "Older adults: kidney injury"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-23",
                shortTitle: "Labetalol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Labetalol",
                    "lead": "A combined alpha- and beta-blocker that lowers dangerous blood pressure smoothly. Prehospital use is mainly severe hypertension in pre-eclampsia.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Alpha-1 and beta-blocker"
                                ],
                                [
                                    "Presentation",
                                    "100 mg/20 mL (5 mg/mL)"
                                ],
                                [
                                    "Onset",
                                    "5–10 minutes IV"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe hypertension in pregnancy (160/110 mmHg or more)",
                                    "dose": "20 mg IV over 2 minutes",
                                    "note": "Then 40 mg after 10 minutes, then 80 mg every 10 minutes; maximum 300 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe hypertension in pre-eclampsia or eclampsia, per protocol"
                            ],
                            "exclude": [
                                "Asthma or active bronchospasm",
                                "Bradycardia, 2nd or 3rd degree block",
                                "Acute heart failure or shock",
                                "Cocaine or stimulant toxicity"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension: aim to lower, not normalise",
                                "Bradycardia; dizziness; nausea",
                                "Neonatal bradycardia after delivery"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Magnesium is still the drug for eclamptic seizures"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-44",
                shortTitle: "Lidocaine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Lidocaine",
                    "lead": "An alternative antiarrhythmic for shock-refractory VF or pulseless VT, and the local anaesthetic that makes IO infusion bearable for conscious patients.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Class Ib antiarrhythmic; local anaesthetic"
                                ],
                                [
                                    "Presentation",
                                    "2% (100 mg/5 mL)"
                                ],
                                [
                                    "Toxicity signs",
                                    "Perioral numbness, tinnitus, confusion, seizures"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Refractory VF or pulseless VT (alternative to amiodarone)",
                                    "dose": "1–1.5 mg/kg IV/IO",
                                    "note": "Then 0.5–0.75 mg/kg; maximum total 3 mg/kg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "IO pain in a conscious patient",
                                    "dose": "40 mg (2 mL of 2%) slowly into the IO",
                                    "note": "Wait about 60 seconds, flush, then 20 mg more if needed",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Refractory VF or pulseless VT",
                                    "dose": "1 mg/kg IV/IO",
                                    "note": "Alternative to amiodarone",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "IO pain",
                                    "dose": "0.5 mg/kg slowly into the IO",
                                    "note": "Maximum 40 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Shock-refractory VF or pulseless VT when amiodarone is unavailable",
                                "IO infusion pain in conscious patients"
                            ],
                            "exclude": [
                                "Allergy to amide local anaesthetics",
                                "High-grade AV block without a pacemaker",
                                "Bradycardia with ventricular escape beats"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Reduce dose in liver disease, heart failure and older adults",
                                "Seizures at toxic doses"
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
                                            "ecg": "pulselessVt",
                                            "label": "Pulseless VT",
                                            "sub": "Shock-refractory: amiodarone or lidocaine.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-61",
                shortTitle: "Lorazepam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Lorazepam",
                    "lead": "A first-line IV benzodiazepine for status epilepticus with a longer action than midazolam. It must be refrigerated; without IV access, use midazolam IM or intranasally.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Benzodiazepine"
                                ],
                                [
                                    "Presentation",
                                    "2 mg/mL or 4 mg/mL (refrigerated)"
                                ],
                                [
                                    "Onset",
                                    "2–3 minutes IV; lasts hours"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Seizure lasting 5 minutes or more",
                                    "dose": "4 mg IV over 2 minutes (0.1 mg/kg)",
                                    "note": "Repeat once after 5–10 minutes",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Seizure",
                                    "dose": "0.1 mg/kg IV/IO",
                                    "note": "Maximum 4 mg; repeat once",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Status epilepticus with IV access",
                                "Severe agitation or stimulant toxicity (per protocol)"
                            ],
                            "exclude": [
                                "Breathing depression without support",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression and hypotension",
                                "Additive with opioids and alcohol"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-24",
                shortTitle: "Magnesium Sulphate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Magnesium Sulfate",
                    "lead": "Three emergencies: severe asthma that isn't responding, eclamptic seizures, and torsades de pointes. Give it slowly unless the patient is in arrest.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Electrolyte"
                                ],
                                [
                                    "Presentation",
                                    "50% (5 g/10 mL); 500 mg/2 mL"
                                ],
                                [
                                    "Toxicity",
                                    "Loss of knee reflexes, respiratory rate below 12/min, low BP – antidote calcium"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe or life-threatening asthma",
                                    "dose": "2 g IV over 20 minutes",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Eclampsia",
                                    "dose": "4–6 g IV over 20–30 minutes",
                                    "note": "Or 10 g IM (5 g in each buttock) if no IV (WHO)",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Torsades de pointes",
                                    "dose": "1–2 g IV over 5–20 minutes",
                                    "note": "Push in pulseless torsades",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe asthma",
                                    "dose": "40 mg/kg IV over 20 minutes",
                                    "note": "Maximum 2 g",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Torsades de pointes",
                                    "dose": "25–50 mg/kg IV/IO",
                                    "note": "Maximum 2 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Life-threatening asthma not responding to bronchodilators",
                                "Eclamptic seizure or severe pre-eclampsia",
                                "Torsades de pointes"
                            ],
                            "exclude": [
                                "Heart block",
                                "Myasthenia gravis",
                                "Severe kidney failure (risk of toxicity)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and flushing if fast",
                                "Respiratory depression and loss of reflexes: stop, give calcium gluconate 1 g",
                                "Same line as epinephrine: may precipitate"
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
                                            "ecg": "torsades",
                                            "label": "Torsades de pointes",
                                            "sub": "Magnesium 1–2 g.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-25",
                shortTitle: "Methoxyflurane (Penthrox inhaler)",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Methoxyflurane (Penthrox)",
                    "lead": "A hand-held inhaled analgesic the patient controls: quick to start, quick to wear off. It needs a cooperative patient and healthy kidneys.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Inhaled anaesthetic (low dose)"
                                ],
                                [
                                    "Presentation",
                                    "3 mL vial with inhaler"
                                ],
                                [
                                    "Onset",
                                    "6–10 breaths; wears off within minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe trauma or procedural pain",
                                    "dose": "3 mL, self-administered",
                                    "note": "One more 3 mL if needed; maximum 6 mL a day",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Pain, child able to self-administer",
                                    "dose": "3 mL (single vial)",
                                    "note": "Where licensed; switch to other analgesia when available",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe pain in a cooperative patient"
                            ],
                            "exclude": [
                                "Can't follow instructions or hold the inhaler",
                                "Kidney or severe liver disease",
                                "Personal or family history of malignant hyperthermia",
                                "Pre-eclampsia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dizziness, drowsiness, headache",
                                "Ventilate the vehicle"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-58",
                shortTitle: "Methylprednisolone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Methylprednisolone",
                    "lead": "A potent IV steroid for severe asthma or COPD attacks when oral steroids aren't possible. One systemic steroid only, and never before epinephrine.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid"
                                ],
                                [
                                    "Presentation",
                                    "40 mg and 125 mg powder vials"
                                ],
                                [
                                    "Onset",
                                    "Hours"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe asthma or COPD exacerbation",
                                    "dose": "125 mg IV or IM",
                                    "note": "Give slowly (at least 1 minute)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe asthma",
                                    "dose": "1–2 mg/kg IV or IM",
                                    "note": "Maximum 125 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe asthma or COPD when oral steroid can't be taken"
                            ],
                            "exclude": [
                                "Allergy",
                                "Systemic fungal infection",
                                "A second systemic steroid"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia, agitation",
                                "Arrhythmia with rapid large IV doses"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-26",
                shortTitle: "Metoclopramide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Metoclopramide",
                    "lead": "A dopamine-blocking antiemetic that also speeds gastric emptying. Watch for dystonic reactions, especially in young people.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Dopamine antagonist antiemetic"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Nausea and vomiting",
                                    "dose": "10 mg slow IV over 3 minutes, or IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Nausea (only if others unsuitable)",
                                    "dose": "0.1–0.15 mg/kg slow IV or IM",
                                    "note": "Not under 1 year",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Nausea and vomiting, including migraine"
                            ],
                            "exclude": [
                                "Bowel obstruction or GI bleeding",
                                "Parkinson's disease",
                                "Phaeochromocytoma",
                                "Epilepsy (relative)",
                                "Under 1 year"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dystonia and akathisia: diphenhydramine",
                                "Drowsiness, hypotension if fast"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-51",
                shortTitle: "Metoprolol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Metoprolol",
                    "lead": "A cardioselective beta-blocker for rate control of stable AF or flutter. Avoid it in heart failure, bronchospasm, low blood pressure and stimulant toxicity.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-1 selective blocker"
                                ],
                                [
                                    "Presentation",
                                    "5 mg/5 mL"
                                ],
                                [
                                    "Antidote",
                                    "Glucagon for beta-blocker toxicity"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Rate control of stable AF or flutter; refractory narrow SVT",
                                    "dose": "2.5–5 mg IV over 2 minutes",
                                    "note": "Repeat every 5 minutes; maximum 15 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not recommended prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable AF or flutter with fast ventricular rate",
                                "Narrow-complex SVT not responding to adenosine"
                            ],
                            "exclude": [
                                "SBP below 100 mmHg or HR below 60",
                                "2nd or 3rd degree block",
                                "Acute heart failure or cardiogenic shock",
                                "Acute bronchospasm",
                                "Cocaine or stimulant toxicity",
                                "Recent IV calcium-channel blocker"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bradycardia, block, hypotension",
                                "Masks hypoglycaemia warning signs",
                                "Monitor and recheck BP between doses"
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
                                            "ecg": "afibRvr",
                                            "label": "AF with fast rate",
                                            "sub": "Stable: beta-blocker or diltiazem.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-27",
                shortTitle: "Midazolam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Midazolam",
                    "lead": "The benzodiazepine for every route: IM and intranasal for seizures without IV access, and small IV doses for sedation. Have the bag-mask ready.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Benzodiazepine"
                                ],
                                [
                                    "Presentation",
                                    "5 mg/mL (also 1 mg/mL)"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes IV; 5–10 minutes IM/IN"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Seizure lasting 5 minutes or more",
                                    "dose": "10 mg IM (over 40 kg), or 0.2 mg/kg intranasal (maximum 10 mg)",
                                    "note": "IV 0.1–0.2 mg/kg (maximum 10 mg per dose); repeat once after 5–10 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Sedation or agitation",
                                    "dose": "1–5 mg IV, titrated; 5–10 mg IM",
                                    "note": "Lower in older adults",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Seizure",
                                    "dose": "5 mg IM (13–40 kg), or 0.2 mg/kg intranasal (maximum 10 mg)",
                                    "note": "IV 0.1–0.2 mg/kg (maximum 10 mg per dose); repeat once",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Seizure lasting 5 minutes or more",
                                "Severe agitation",
                                "Procedural sedation (with analgesia)"
                            ],
                            "exclude": [
                                "Breathing depression without support",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: ETCO₂ and bag-mask",
                                "Hypotension, especially with opioids",
                                "Paradoxical agitation"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-78",
                shortTitle: "Misoprostol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Misoprostol",
                    "lead": "A heat-stable tablet that makes the uterus contract when oxytocin isn't available or hasn't worked in postpartum haemorrhage. Exclude a second baby first.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Prostaglandin E1 analogue (uterotonic)"
                                ],
                                [
                                    "Presentation",
                                    "200 mcg tablets"
                                ],
                                [
                                    "Onset",
                                    "Minutes sublingually"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Postpartum haemorrhage",
                                    "dose": "800 mcg sublingual (4 tablets) once",
                                    "note": "With fundal massage and tranexamic acid",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not applicable."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Postpartum haemorrhage when oxytocin is unavailable or ineffective"
                            ],
                            "exclude": [
                                "Baby not yet delivered (including a possible twin)",
                                "Prostaglandin allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Shivering and fever (common, brief)",
                                "Nausea, diarrhoea"
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
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-28",
                shortTitle: "Morphine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Morphine",
                    "lead": "The classic opioid for severe pain: titrate small IV doses to effect. It drops blood pressure more than fentanyl and lasts longer.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Opioid agonist"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "5 minutes IV; lasts 3–5 hours"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "2.5–5 mg IV every 5 minutes, titrated (0.1 mg/kg)",
                                    "note": "Typical maximum 10–20 mg per protocol",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV access",
                                    "dose": "5–10 mg IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "0.1 mg/kg IV, titrated",
                                    "note": "Maximum single dose 5 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe pain from injury, burns, ischaemia"
                            ],
                            "exclude": [
                                "Breathing depression or SBP below 90 mmHg",
                                "Allergy",
                                "Head injury with reduced consciousness (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: naloxone ready",
                                "Hypotension, nausea, itching",
                                "Older adults and kidney disease: smaller doses"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-29",
                shortTitle: "Naloxone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Naloxone",
                    "lead": "Reverses opioid breathing depression. Ventilate first, then titrate to adequate breathing – not to full wakefulness – and watch for re-sedation because it wears off first.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Opioid antagonist"
                                ],
                                [
                                    "Presentation",
                                    "0.4 mg/mL; 4 mg intranasal spray"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes IV; lasts 30–90 minutes"
                                ],
                                [
                                    "Scope",
                                    "All levels (spray); EMT and above (injection)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Opioid breathing depression",
                                    "dose": "0.04–0.4 mg IV, titrated every 2–3 minutes",
                                    "note": "Up to 2 mg, then think of other causes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV",
                                    "dose": "0.4 mg IM or 4 mg intranasal spray",
                                    "note": "Repeat every 2–3 minutes as needed",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Opioid breathing depression",
                                    "dose": "0.01 mg/kg, titrated; up to 0.1 mg/kg for full reversal",
                                    "note": "Maximum 2 mg per dose",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Opioid overdose with slow or inadequate breathing"
                            ],
                            "exclude": [
                                "Allergy",
                                "Newborn resuscitation (ventilate instead)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Precipitated withdrawal: vomiting, agitation",
                                "Re-sedation with long-acting opioids: hospital observation",
                                "Pulmonary oedema (rare)"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Opioid slow breathing",
                                            "href": "../pages/respiratory-patterns.html?p=bradypnea",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-30",
                shortTitle: "Nefopam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Nefopam",
                    "lead": "A non-opioid, non-NSAID analgesic for moderate pain where those drugs are unsuitable. Not available in every country.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Centrally acting non-opioid analgesic"
                                ],
                                [
                                    "Presentation",
                                    "20 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "15–20 minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "20 mg IV infusion over 15 minutes",
                                    "note": "Diluted in 100 mL saline; once only",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate pain when opioids or NSAIDs are unsuitable"
                            ],
                            "exclude": [
                                "Epilepsy or seizures",
                                "Acute MI or ischaemic chest pain",
                                "Severe kidney disease",
                                "Glaucoma or urinary retention",
                                "Children"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Nausea, sweating, tachycardia, dry mouth",
                                "Same line as diclofenac can precipitate"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-67",
                shortTitle: "Nitrous Oxide (Entonox)",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Nitrous Oxide / Oxygen (Entonox)",
                    "lead": "Self-administered 50:50 gas for fast, short pain relief – splinting, labour, burns dressing. It expands gas spaces, so not with pneumothorax, diving illness or bowel obstruction.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Inhaled analgesic gas"
                                ],
                                [
                                    "Presentation",
                                    "50% nitrous oxide / 50% oxygen with demand valve"
                                ],
                                [
                                    "Onset",
                                    "2–3 minutes; wears off in minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "Self-administered via demand valve until comfortable",
                                    "note": "Patient holds the mouthpiece",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Pain, child able to self-administer (usually 5 years or more)",
                                    "dose": "Self-administered",
                                    "note": "",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Trauma, burns, labour and procedural pain"
                            ],
                            "exclude": [
                                "Reduced consciousness or can't self-administer",
                                "Pneumothorax, chest injury with suspected air",
                                "Diving illness, bowel obstruction, middle-ear or sinus problems",
                                "Head injury with reduced GCS",
                                "First 16 weeks of pregnancy (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Light-headedness, nausea",
                                "Below 10 °C gases separate: invert the cylinder several times before use",
                                "Ventilate the vehicle"
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
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-49",
                shortTitle: "Norepinephrine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Norepinephrine",
                    "lead": "The first-choice vasopressor for shock that persists after fluids, including after ROSC. Always an infusion, never an undiluted bolus.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Vasopressor (alpha-1 more than beta-1)"
                                ],
                                [
                                    "Presentation",
                                    "4 mg/4 mL; often 4 mg in 250 mL (16 mcg/mL)"
                                ],
                                [
                                    "Target",
                                    "MAP 65 mmHg or more (adults)"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic, critical care"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Shock after fluids; post-ROSC hypotension",
                                    "dose": "0.1–0.5 mcg/kg/min IV/IO infusion (about 2–20 mcg/min)",
                                    "note": "Start low; titrate to MAP 65 mmHg or more",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Fluid-refractory shock",
                                    "dose": "0.05–0.5 mcg/kg/min IV/IO",
                                    "note": "Titrate to perfusion and age-appropriate BP",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Septic, cardiogenic or neurogenic shock after fluids",
                                "Hypotension after ROSC"
                            ],
                            "exclude": [
                                "Uncorrected hypovolaemia as the only treatment",
                                "Undiluted bolus"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Extravasation necrosis: secure large vein or IO",
                                "Hypertension, reflex bradycardia, arrhythmias",
                                "Label the infusion; double-check concentration and rate"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-37",
                shortTitle: "Normal Saline",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Sodium Chloride 0.9% (Normal Saline)",
                    "lead": "The standard isotonic fluid for volume, flushing and dilution. Give in small boluses with reassessment; large volumes cause acidosis and overload.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Isotonic crystalloid"
                                ],
                                [
                                    "Presentation",
                                    "100 mL, 250 mL, 500 mL and 1 L"
                                ],
                                [
                                    "Contains",
                                    "Sodium 154 mmol/L, chloride 154 mmol/L"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypovolaemia or shock",
                                    "dose": "250–500 mL boluses, reassess",
                                    "note": "Trauma: titrate to radial pulse or SBP 80–90 mmHg (110 mmHg with head injury)",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Flush and drug dilution",
                                    "dose": "As needed",
                                    "note": "",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Shock",
                                    "dose": "10–20 mL/kg bolus, reassess",
                                    "note": "10 mL/kg if heart disease is possible",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hypovolaemia, sepsis, dehydration, DKA",
                                "Flushing lines and diluting drugs"
                            ],
                            "exclude": [
                                "Pulmonary oedema or fluid overload"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Overload in heart and kidney failure",
                                "Hyperchloraemic acidosis with large volumes"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-45",
                shortTitle: "Ondansetron",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ondansetron",
                    "lead": "A non-sedating antiemetic for almost any cause of nausea. The dissolving tablet works without an IV. Caution with long QT.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "5-HT3 antagonist"
                                ],
                                [
                                    "Presentation",
                                    "4 mg/2 mL; 4 mg dissolving tablet"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 15–30 minutes ODT"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Nausea and vomiting",
                                    "dose": "4 mg IV over 2–5 minutes, IM or ODT",
                                    "note": "May repeat once (maximum 8 mg)",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "IV",
                                    "dose": "0.1 mg/kg",
                                    "note": "Maximum 4 mg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Dissolving tablet",
                                    "dose": "8–15 kg 2 mg; 15–30 kg 4 mg; over 30 kg 4–8 mg",
                                    "note": "",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Nausea and vomiting from any cause"
                            ],
                            "exclude": [
                                "Congenital long QT",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "QT prolongation with other QT drugs or low potassium or magnesium",
                                "Headache, constipation"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-31",
                shortTitle: "Oxygen",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Oxygen",
                    "lead": "Treat hypoxaemia, not breathlessness. Titrate to a target saturation; too much oxygen harms patients with CO₂ retention and after cardiac arrest, stroke and MI.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Medical gas"
                                ],
                                [
                                    "Presentation",
                                    "Cylinders (colour codes vary by country); concentrators"
                                ],
                                [
                                    "Targets",
                                    "SpO₂ 94–98%; 88–92% if at risk of CO₂ retention"
                                ],
                                [
                                    "Scope",
                                    "All levels"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypoxaemia",
                                    "dose": "Titrate to SpO₂ 94–98%",
                                    "note": "Nasal cannula, mask or non-rebreather as needed",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "COPD or other CO₂ retainers",
                                    "dose": "Titrate to SpO₂ 88–92%",
                                    "note": "Venturi mask 24–28% where available",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Carbon monoxide, cardiac arrest, critical illness",
                                    "dose": "High-flow (15 L/min) or 100%",
                                    "note": "Titrate after ROSC",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Hypoxaemia",
                                    "dose": "Titrate to SpO₂ 94–98%",
                                    "note": "Blow-by if a mask upsets the child",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Newborn resuscitation",
                                    "dose": "Start with 21% (35 weeks or more)",
                                    "note": "21–30% under 35 weeks; titrate to minute targets",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "SpO₂ below target",
                                "Shock, carbon monoxide, cardiac arrest, major trauma (initially high flow)"
                            ],
                            "exclude": [
                                "Routine oxygen for normal saturations (MI, stroke)",
                                "Paraquat or bleomycin lung injury (titrate low)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "CO₂ retention in COPD: drowsiness, rising ETCO₂",
                                "Fire risk: no smoking, no grease"
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
                                            "sub": "Cylinder time remaining",
                                            "href": "../pages/Carevent.html",
                                            "icon": "clock"
                                        },
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-75",
                shortTitle: "Oxytocin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Oxytocin",
                    "lead": "The first-line drug to prevent and treat postpartum haemorrhage by contracting the uterus. Make sure there isn't a second baby, and never give a rapid IV bolus.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Uterotonic hormone"
                                ],
                                [
                                    "Presentation",
                                    "10 IU/mL"
                                ],
                                [
                                    "Onset",
                                    "2–3 minutes IM; about 1 minute IV"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "After birth (prevention) or postpartum haemorrhage",
                                    "dose": "10 IU IM",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Ongoing haemorrhage",
                                    "dose": "40 IU in 1 L saline IV infusion",
                                    "note": "Titrate to uterine tone",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not applicable."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Postpartum haemorrhage",
                                "Prevention after the baby is born, once a second baby is excluded"
                            ],
                            "exclude": [
                                "Undelivered baby (including a possible twin)",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and tachycardia with IV bolus – avoid",
                                "Nausea, cramping"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Combine with fundal massage, an empty bladder and tranexamic acid"
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
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-32",
                shortTitle: "Paracetamol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Paracetamol (Acetaminophen)",
                    "lead": "A safe first step for pain and fever, and a useful partner to opioids and NSAIDs. Check what's already been taken today.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Non-opioid analgesic and antipyretic"
                                ],
                                [
                                    "Presentation",
                                    "500 mg tablets; 125 mg and 250 mg suppositories; 1 g/100 mL IV"
                                ],
                                [
                                    "Onset",
                                    "30–60 minutes orally; 5–10 minutes IV"
                                ],
                                [
                                    "Scope",
                                    "All levels (oral); paramedic (IV)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Pain or fever above 38 °C",
                                    "dose": "1 g orally or IV over 15 minutes",
                                    "note": "15 mg/kg if under 50 kg; maximum 4 g a day",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Oral or rectal",
                                    "dose": "15 mg/kg",
                                    "note": "Maximum 1 g per dose",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "IV",
                                    "dose": "15 mg/kg (7.5 mg/kg if under 10 kg)",
                                    "note": "Over 15 minutes, by pump or syringe",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Mild to severe pain (with other analgesics)",
                                "Fever above 38 °C with discomfort"
                            ],
                            "exclude": [
                                "Paracetamol in the last 4 hours, or the daily maximum reached",
                                "Severe liver disease",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension with fast IV infusion",
                                "Dosing errors in small children: use a pump or syringe"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-33",
                shortTitle: "Pethidine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Pethidine (Meperidine)",
                    "lead": "An older opioid now rarely first choice: its metabolite can cause seizures and it interacts dangerously with MAO inhibitors. Use only where protocol still lists it.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Opioid agonist"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "5 minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "25–50 mg slow IV, or 25–100 mg IM",
                                    "note": "Maximum 400 mg a day",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "0.5–1 mg/kg IM",
                                    "note": "Only per protocol; prefer other opioids",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe pain where other opioids are unavailable"
                            ],
                            "exclude": [
                                "MAO inhibitors in the last 2 weeks (serotonin syndrome)",
                                "Breathing depression or SBP below 90 mmHg",
                                "Kidney disease or seizures (metabolite toxicity)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: naloxone ready",
                                "Tremor, twitching, seizures",
                                "Hypotension"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-74",
                shortTitle: "Pralidoxime",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Pralidoxime (2-PAM)",
                    "lead": "Reactivates the enzyme blocked by organophosphates and nerve agents, treating the muscle weakness that atropine can't. Always with atropine, after decontamination.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Cholinesterase reactivator"
                                ],
                                [
                                    "Presentation",
                                    "1 g vial; 600 mg auto-injector (with atropine 2.1 mg)"
                                ],
                                [
                                    "Best given",
                                    "Early, before the poison 'ages'"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Organophosphate or nerve agent with moderate to severe signs",
                                    "dose": "30 mg/kg (1–2 g) IV over 15–30 minutes",
                                    "note": "Or 600 mg IM auto-injector, up to 3",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same",
                                    "dose": "25–50 mg/kg IV over 15–30 minutes",
                                    "note": "Maximum 2 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Organophosphate or nerve agent poisoning with weakness, twitching or breathing failure, alongside atropine"
                            ],
                            "exclude": [
                                "Carbamate poisoning alone (limited benefit)",
                                "Allergy (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Rapid IV: laryngospasm, rigidity, tachycardia",
                                "Kidney impairment: lower dose"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Atropine dries secretions; pralidoxime restores muscle strength"
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
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-57",
                shortTitle: "Prednisolone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Prednisolone",
                    "lead": "The standard oral steroid for asthma and COPD attacks and an alternative for croup. Effect starts in hours, so bronchodilators continue.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid"
                                ],
                                [
                                    "Presentation",
                                    "5 mg tablets; 5 mg/5 mL and 15 mg/5 mL oral solution"
                                ],
                                [
                                    "Onset",
                                    "4–6 hours"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Asthma or COPD exacerbation",
                                    "dose": "40–50 mg orally",
                                    "note": "Single daily dose",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Asthma",
                                    "dose": "1–2 mg/kg orally",
                                    "note": "Maximum 40 mg",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Croup",
                                    "dose": "1 mg/kg orally",
                                    "note": "Dexamethasone preferred",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Asthma, COPD or croup in a patient who can swallow"
                            ],
                            "exclude": [
                                "Unable to swallow or protect the airway",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia",
                                "Mood changes, nausea"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-52",
                shortTitle: "Procainamide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Procainamide",
                    "lead": "An option for stable monomorphic wide-complex tachycardia and AF with pre-excitation (WPW). Slow infusion with constant QRS and BP monitoring.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Class Ia antiarrhythmic"
                                ],
                                [
                                    "Presentation",
                                    "1 g/10 mL (100 mg/mL) for dilution"
                                ],
                                [
                                    "Stop when",
                                    "Arrhythmia stops, hypotension, QRS widens over 50%, or 17 mg/kg given"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Stable monomorphic VT; AF with WPW",
                                    "dose": "20–50 mg/min IV infusion",
                                    "note": "Maximum 17 mg/kg; maintenance 1–4 mg/min",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Stable wide-complex tachycardia",
                                    "dose": "15 mg/kg IV/IO over 30–60 minutes",
                                    "note": "With expert consultation",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable regular monomorphic wide-complex tachycardia",
                                "AF with pre-excitation (WPW)"
                            ],
                            "exclude": [
                                "Long QT or torsades",
                                "2nd or 3rd degree block without a pacemaker",
                                "With amiodarone or other QT-prolonging drugs",
                                "Heart failure (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension",
                                "QRS and QT widening; torsades"
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
                                            "ecg": "vt",
                                            "label": "Monomorphic VT",
                                            "sub": "Stable: procainamide or amiodarone.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "torsades",
                                            "label": "Torsades de pointes",
                                            "sub": "Never procainamide: give magnesium.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-46",
                shortTitle: "Promethazine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Promethazine",
                    "lead": "A sedating antihistamine-antiemetic for nausea that hasn't responded to others. Give it IM: IV extravasation or arterial injection causes severe tissue damage.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Phenothiazine antihistamine"
                                ],
                                [
                                    "Presentation",
                                    "25 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "20 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Refractory nausea and vomiting",
                                    "dose": "12.5–25 mg deep IM",
                                    "note": "IV only diluted into a free-running large vein",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Nausea, 2 years or older",
                                    "dose": "0.25–0.5 mg/kg IM",
                                    "note": "Maximum 25 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Nausea not responding to other antiemetics",
                                "Allergic itch (adjunct)"
                            ],
                            "exclude": [
                                "Children under 2 years (fatal respiratory depression)",
                                "Severe CNS depression",
                                "IV push into small veins"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Sedation – affects neuro assessment",
                                "Hypotension, dystonia",
                                "Tissue injury with IV"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-65",
                shortTitle: "Propofol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Propofol",
                    "lead": "A short-acting sedative for sedation after intubation in critical care transport, and induction in stable patients. It drops blood pressure and gives no pain relief.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Sedative-hypnotic"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL emulsion"
                                ],
                                [
                                    "Onset",
                                    "30 seconds; lasts minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Induction (stable patient)",
                                    "dose": "1–2 mg/kg IV",
                                    "note": "Lower in older or unwell patients",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Sedation after intubation",
                                    "dose": "5–50 mcg/kg/min (0.3–3 mg/kg/h)",
                                    "note": "Pump; with analgesia",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Induction",
                                    "dose": "1–2.5 mg/kg IV",
                                    "note": "Infusion per physician",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Sedation of intubated patients",
                                "RSI induction when blood pressure is stable"
                            ],
                            "exclude": [
                                "Shock or hypotension",
                                "Allergy to propofol (egg and soy allergy are generally not a problem)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension, apnoea, bradycardia",
                                "Strict asepsis; discard opened product after 6 hours"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-34",
                shortTitle: "Racemic Epinephrine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Racemic Epinephrine (nebulised)",
                    "lead": "Shrinks swollen airway mucosa within minutes in croup with stridor at rest. The effect wears off in about 2 hours, so the child needs observation after.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Adrenergic agonist"
                                ],
                                [
                                    "Presentation",
                                    "2.25% solution (0.5 mL nebule)"
                                ],
                                [
                                    "Alternative",
                                    "Epinephrine 1 mg/mL: 0.5 mL/kg nebulised (maximum 5 mL)"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Upper airway swelling (post-extubation, angioedema adjunct)",
                                    "dose": "0.5 mL of 2.25% in 3 mL saline nebulised",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Croup with stridor at rest",
                                    "dose": "0.05 mL/kg of 2.25% (maximum 0.5 mL) in 3 mL saline",
                                    "note": "Or epinephrine 1 mg/mL 0.5 mL/kg (maximum 5 mL)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Croup with stridor at rest or significant distress",
                                "Upper airway swelling"
                            ],
                            "exclude": [
                                "Allergy to the preparation"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, arrhythmias",
                                "Rebound after about 2 hours: observe"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Give dexamethasone as well"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
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
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-35",
                shortTitle: "Ringers Lactate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Ringer's Lactate (Hartmann's)",
                    "lead": "A balanced crystalloid, closer to plasma than saline. Good for trauma, burns, sepsis and children; its small potassium content isn't a problem in practice.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Balanced isotonic crystalloid"
                                ],
                                [
                                    "Presentation",
                                    "250 mL, 500 mL and 1 L"
                                ],
                                [
                                    "Contains",
                                    "Sodium 130, potassium 4, calcium 3 mmol/L, lactate"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypovolaemia, burns, sepsis",
                                    "dose": "250–500 mL boluses, reassess",
                                    "note": "Burns: ABLS starting rates (chapter 6)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Shock",
                                    "dose": "10–20 mL/kg bolus, reassess",
                                    "note": "Balanced or isotonic saline are both acceptable",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Volume replacement in trauma, burns, sepsis and dehydration"
                            ],
                            "exclude": [
                                "Same line as ceftriaxone (calcium)",
                                "Fluid overload",
                                "Severe hyperkalaemia (prefer saline)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Overload in heart and kidney failure"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-63",
                shortTitle: "Rocuronium",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Rocuronium",
                    "lead": "A non-depolarising paralytic for RSI with few contraindications. Paralysis lasts 30–60 minutes, so a failed airway plan must be ready – and sedation must continue.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Non-depolarising neuromuscular blocker"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL (refrigerated)"
                                ],
                                [
                                    "Onset",
                                    "45–60 seconds at RSI dose; lasts 30–60 minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care / RSI-credentialed"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "1–1.2 mg/kg IV/IO",
                                    "note": "After induction",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Maintenance",
                                    "dose": "0.1–0.2 mg/kg IV",
                                    "note": "Only with ongoing sedation",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "1–1.2 mg/kg IV/IO",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "RSI, especially when suxamethonium is contraindicated"
                            ],
                            "exclude": [
                                "No plan for a failed airway",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Awareness: always continue sedation and analgesia",
                                "Anaphylaxis (rare)",
                                "Sugammadex reverses it (hospital)"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-36",
                shortTitle: "Salbutamol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Salbutamol (Albuterol)",
                    "lead": "The rescue bronchodilator. Give it early and often for wheeze in asthma, COPD and anaphylaxis – and by spacer if a nebuliser isn't available.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-2 agonist"
                                ],
                                [
                                    "Presentation",
                                    "2.5 mg/2.5 mL and 5 mg/2.5 mL nebules; 100 mcg inhaler"
                                ],
                                [
                                    "Onset",
                                    "Minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Bronchospasm (asthma, COPD, anaphylaxis)",
                                    "dose": "5 mg nebulised",
                                    "note": "Repeat every 20 minutes or back-to-back if severe; or 4–10 puffs by spacer",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Under 5 years",
                                    "dose": "2.5 mg nebulised",
                                    "note": "Or 2–6 puffs by spacer",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "5 years or older",
                                    "dose": "2.5–5 mg nebulised",
                                    "note": "Or 4–10 puffs by spacer",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Wheeze or bronchospasm in asthma, COPD, anaphylaxis, smoke or water inhalation"
                            ],
                            "exclude": [
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, anxiety",
                                "Hypokalaemia with repeated doses",
                                "Lactic acidosis with very frequent dosing"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-47",
                shortTitle: "Sodium Bicarbonate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Sodium Bicarbonate",
                    "lead": "A targeted drug, not a routine arrest drug: tricyclic overdose with wide QRS, hyperkalaemia, and crush injury. Ventilate well and keep it away from calcium.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Alkalinising agent"
                                ],
                                [
                                    "Presentation",
                                    "8.4%, 50 mEq/50 mL (1 mEq/mL)"
                                ],
                                [
                                    "Mechanism",
                                    "Sodium load and alkalosis narrow the QRS; shifts potassium into cells"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "TCA overdose with QRS over 100 ms; hyperkalaemia; crush",
                                    "dose": "1–2 mEq/kg IV/IO",
                                    "note": "Repeat to narrow the QRS (pH 7.45–7.55 in hospital)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same indications",
                                    "dose": "1 mEq/kg IV/IO",
                                    "note": "Dilute to 4.2% for infants",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Sodium-channel blocker overdose (tricyclics) with wide QRS or arrhythmia",
                                "Severe hyperkalaemia",
                                "Crush syndrome; prolonged arrest with known acidosis or hyperkalaemia"
                            ],
                            "exclude": [
                                "Routine use in cardiac arrest",
                                "Same line as calcium or catecholamines",
                                "Hypokalaemia or alkalosis"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Ventilate: it produces CO₂",
                                "Hypokalaemia, hypernatraemia, extravasation injury"
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
                                            "ecg": "hyperK",
                                            "label": "Hyperkalaemia",
                                            "sub": "Calcium first, then bicarbonate and insulin-glucose in hospital.",
                                            "lead": "V3"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-64",
                shortTitle: "Succinylcholine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Succinylcholine (Suxamethonium)",
                    "lead": "The fastest, shortest paralytic for RSI. It raises potassium, so avoid it in hyperkalaemia, crush, old burns, spinal injury, neuromuscular disease and malignant hyperthermia.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Depolarising neuromuscular blocker"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL (refrigerated)"
                                ],
                                [
                                    "Onset",
                                    "45–60 seconds; lasts 5–10 minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care / RSI-credentialed"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "1.5 mg/kg IV/IO (maximum 200 mg)",
                                    "note": "IM 4 mg/kg if no access",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "2 mg/kg (infants under 10 kg); 1–1.5 mg/kg (children)",
                                    "note": "Atropine ready for bradycardia",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "RSI when there's no contraindication"
                            ],
                            "exclude": [
                                "Known or suspected hyperkalaemia (kidney failure, crush)",
                                "Burns, spinal cord injury or stroke more than 72 hours old",
                                "Neuromuscular disease",
                                "Personal or family history of malignant hyperthermia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bradycardia (children, repeat doses)",
                                "Hyperkalaemia, fasciculations, muscle pain",
                                "Prolonged paralysis with pseudocholinesterase deficiency"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-59",
                shortTitle: "Terbutaline",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Terbutaline",
                    "lead": "A subcutaneous beta-2 agonist for severe asthma when the patient can't take a nebuliser effectively. IM epinephrine is the alternative.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-2 agonist"
                                ],
                                [
                                    "Presentation",
                                    "1 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "5–15 minutes SC"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe asthma not responding to nebulised therapy",
                                    "dose": "0.25 mg SC",
                                    "note": "May repeat once after 15–30 minutes; maximum 0.5 mg in 4 hours",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe asthma",
                                    "dose": "0.01 mg/kg SC (maximum 0.25 mg)",
                                    "note": "May repeat once after 15–30 minutes",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Life-threatening asthma with poor air entry"
                            ],
                            "exclude": [
                                "Tachyarrhythmia",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, hypokalaemia",
                                "Continue nebulised therapy and monitor the ECG"
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
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-70",
                shortTitle: "Thiamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Thiamine (Vitamin B1)",
                    "lead": "Prevents and treats Wernicke's encephalopathy in people with alcohol dependence or malnutrition. Give it with glucose – never delay the glucose to give thiamine first.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Vitamin"
                                ],
                                [
                                    "Presentation",
                                    "100 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "Hours to days"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Alcohol dependence or malnutrition with confusion or hypoglycaemia",
                                    "dose": "100 mg slow IV over 5 minutes or IM",
                                    "note": "Higher doses in hospital for Wernicke's",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not routinely indicated."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Confusion, ataxia or eye signs in alcohol use or malnutrition",
                                "Hypoglycaemia in those patients, alongside glucose"
                            ],
                            "exclude": [
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Rare anaphylaxis with IV: give slowly",
                                "Injection-site pain"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-54",
                shortTitle: "Ticagrelor",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Ticagrelor",
                    "lead": "A fast, reversible P2Y12 antiplatelet given with aspirin on STEMI pathways for primary PCI. Not with fibrinolysis, and never with another P2Y12 drug.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiplatelet (reversible P2Y12 inhibitor)"
                                ],
                                [
                                    "Presentation",
                                    "90 mg tablets"
                                ],
                                [
                                    "Use",
                                    "STEMI pathway with medical direction"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "STEMI for primary PCI",
                                    "dose": "180 mg orally (2 × 90 mg)",
                                    "note": "With aspirin; keep daily aspirin at 100 mg or less afterwards",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not indicated in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "STEMI on a 12-lead going for primary PCI, per pathway"
                            ],
                            "exclude": [
                                "Active bleeding or previous intracranial haemorrhage",
                                "Planned fibrinolysis (use clopidogrel)",
                                "Already on another P2Y12 inhibitor",
                                "Severe liver disease"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Breathlessness (common, usually benign)",
                                "Bradyarrhythmias"
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
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-38",
                shortTitle: "Tranexamic Acid",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Fluids, Glucose, Antidotes & Other",
                    "title": "Tranexamic Acid",
                    "lead": "Slows clot breakdown. It saves lives in trauma, head injury and postpartum haemorrhage only if given early – within 3 hours.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antifibrinolytic"
                                ],
                                [
                                    "Presentation",
                                    "500 mg/5 mL"
                                ],
                                [
                                    "Time limit",
                                    "Within 3 hours of injury or birth"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Major trauma bleeding or TBI",
                                    "dose": "1 g IV over 10 minutes",
                                    "note": "Then 1 g over 8 hours in hospital",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Postpartum haemorrhage",
                                    "dose": "1 g IV over 10 minutes",
                                    "note": "Second 1 g after 30 minutes if bleeding continues",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Major trauma bleeding",
                                    "dose": "15 mg/kg IV over 10 minutes",
                                    "note": "Maximum 1 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Significant bleeding after trauma within 3 hours",
                                "Moderate TBI within 3 hours",
                                "Postpartum haemorrhage within 3 hours of birth"
                            ],
                            "exclude": [
                                "More than 3 hours since injury or birth",
                                "Allergy",
                                "Active thromboembolism"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension if given fast",
                                "Seizures at high doses"
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
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Trauma assessment",
                                            "sub": "Find the bleeding",
                                            "href": "../pages/trauma.html",
                                            "icon": "ambulance"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-48",
                shortTitle: "Vasopressin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Vasopressin",
                    "lead": "A non-adrenergic vasopressor. In cardiac arrest it adds nothing over epinephrine and has left most algorithms; it's still used in refractory septic shock in critical care.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Vasopressor (V1 agonist)"
                                ],
                                [
                                    "Presentation",
                                    "20 units/mL"
                                ],
                                [
                                    "Arrest guidelines",
                                    "No advantage over epinephrine (AHA)"
                                ],
                                [
                                    "Scope",
                                    "Critical care, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Cardiac arrest (only where protocol still lists it)",
                                    "dose": "40 units IV/IO once",
                                    "note": "Instead of or with epinephrine per local protocol",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Catecholamine-refractory septic shock",
                                    "dose": "0.03 units/min infusion",
                                    "note": "Physician-directed",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not established for children: epinephrine remains first-line."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Refractory septic shock in critical care transport",
                                "Arrest only if your protocol includes it"
                            ],
                            "exclude": [
                                "Allergy",
                                "As a replacement for good CPR and defibrillation"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Peripheral and mesenteric ischaemia",
                                "Hyponatraemia with prolonged use"
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
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            }
    ]
};
