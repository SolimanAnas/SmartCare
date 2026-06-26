import os
import json

CHAPTERS_DATA = {
    "c02": {
        "title": "Trauma Assessment and Management",
        "shortTitle": "Ch 2: Trauma Assessment",
        "sections": [
            {
                "id": "itls-c02s1",
                "shortTitle": "2.1 Primary & Secondary Surveys",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#search"/></svg> Trauma Surveys</h3>
    <p>ITLS assessment is divided into the **Primary Survey** (Initial Assessment, Rapid Trauma Survey or Focused Exam, and Evaluation) and the **Secondary Survey** (detailed head-to-toe exam).</p>
    <ul>
        <li><strong>Initial Assessment:</strong> Form general impression, assess LOC (AVPU), Airway, Breathing, and Circulation (ABC). Identify and manage immediate life threats.</li>
        <li><strong>Rapid Trauma Survey:</strong> A quick head-to-toe scan to identify major system injuries. Done if there is a significant MOI or altered mental status.</li>
        <li><strong>Focused Exam:</strong> Targeted exam of a specific injury site. Done if the MOI is minor and the patient is alert and oriented.</li>
        <li><strong>Secondary Survey:</strong> A comprehensive physical exam and vitals assessment, typically performed en route to the hospital.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Assessment", "question": "What is the goal of the Primary Survey?", "answer": "To identify and immediately treat life-threatening conditions (airway, breathing, major hemorrhage)." },
            { "category": "Assessment", "question": "When is a Rapid Trauma Survey performed?", "answer": "When there is a significant mechanism of injury (MOI), multi-system trauma, or altered mental status." }
        ],
        "quiz": [
            {
                "q": "Which of the following is performed during the Initial Assessment portion of the primary survey?",
                "options": ["Obtaining a full set of vital signs", "Assessing the airway, breathing, and circulation (ABCs)", "Performing a detailed neurological exam", "Splinting minor extremity fractures"],
                "correct": 1,
                "explanation": "The Initial Assessment focuses exclusively on general impression, level of consciousness (AVPU), and the critical ABCs to detect immediate life threats."
            }
        ],
        "critical": [
            {
                "id": "crit_2_1",
                "scenario": "You are treating a driver who struck a tree at 50 mph. He is unresponsive, breathing shallowly at 8/minute, and has a weak radial pulse.",
                "question": "What is your immediate priority?",
                "options": [
                    {"t": "Start a secondary survey to check for fractures.", "f": "Incorrect. Focus on primary life threats first."},
                    {"t": "Insert an airway adjunct, assist ventilations with a BVM, and perform a Rapid Trauma Survey.", "f": "Correct. Assist ventilations immediately for respiratory depression and complete the Primary Survey."}
                ],
                "correct": 1,
                "explanation": "Assisting ventilations is the immediate priority for an unresponsive patient with inadequate respiration.",
                "kpi": "Primary survey priority"
            }
        ]
    },
    "c03": {
        "title": "Assessment Skills",
        "shortTitle": "Ch 3: Assessment Skills",
        "sections": [
            {
                "id": "itls-c03s1",
                "shortTitle": "3.1 Clinical Assessment Techniques",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#activity"/></svg> Assessment Skills</h3>
    <p>Physical assessment relies on four core techniques: **Inspection, Palpation, Percussion, and Auscultation**.</p>
    <ul>
        <li><strong>Inspection:</strong> Look for deformities, contusions, abrasions, penetrations, burns, tenderness, lacerations, and swelling (DCAP-BTLS).</li>
        <li><strong>Palpation:</strong> Feel for instability, crepitus, subcutaneous emphysema, and tenderness.</li>
        <li><strong>Auscultation:</strong> Listen to breath sounds (bilaterally, equal, presence of adventitious sounds).</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Skills", "question": "What does DCAP-BTLS stand for?", "answer": "Deformities, Contusions, Abrasions, Penetrations, Burns, Tenderness, Lacerations, Swelling." },
            { "category": "Skills", "question": "Define crepitus.", "answer": "A grating sensation or sound caused by fractured bone ends rubbing together." }
        ],
        "quiz": [
            {
                "q": "Which assessment technique is used to detect subcutaneous emphysema in the neck or chest?",
                "options": ["Auscultation", "Palpation", "Inspection", "Percussion"],
                "correct": 1,
                "explanation": "Subcutaneous emphysema (air under the skin) produces a crackling, bubble-wrap sensation that is felt during palpation."
            }
        ],
        "critical": [
            {
                "id": "crit_3_1",
                "scenario": "While assessing a patient's chest, you palpate a crackling sensation along the clavicle and upper ribs.",
                "question": "What does this indicate?",
                "options": [
                    {"t": "Cardiogenic shock.", "f": "Incorrect. This is subcutaneous emphysema, implying air leakage."},
                    {"t": "Subcutaneous emphysema, suggesting pneumothorax or airway injury.", "f": "Correct. Subcutaneous emphysema is indicative of air leaking into the tissues."}
                ],
                "correct": 1,
                "explanation": "Palpating subcutaneous emphysema indicates air leaking from the respiratory tract, suggesting pneumothorax or trachea/bronchial injury.",
                "kpi": "Subcutaneous emphysema detection"
            }
        ]
    },
    "c04": {
        "title": "Airway Management",
        "shortTitle": "Ch 4: Airway Management",
        "sections": [
            {
                "id": "itls-c04s1",
                "shortTitle": "4.1 Airway Assessment & Interventions",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#wind"/></svg> Airway Management</h3>
    <p>Airway patency is the single most critical component of trauma resuscitation. Oxygen deprivation causes irreversible brain damage in minutes.</p>
    <ul>
        <li><strong>Basic Airway:</strong> Jaw-thrust (trauma patient), suction, OPA/NPA insertion.</li>
        <li><strong>Advanced Airway:</strong> Supraglottic airways (King LTS-D, i-gel, LMA) or Endotracheal Intubation (ETT).</li>
        <li><strong>Ventilation:</strong> Target 10-12 breaths/min (1 breath every 5-6 seconds) for adults. Avoid hyperventilation.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Airway", "question": "What airway opening maneuver is indicated for a trauma patient?", "answer": "The modified jaw-thrust maneuver (avops head/neck hyperextension)." },
            { "category": "Airway", "question": "What is the primary indicator for advanced airway management?", "answer": "Inability to maintain a patent airway or adequately ventilate using basic methods." }
        ],
        "quiz": [
            {
                "q": "What is the recommended ventilation rate for an adult trauma patient in respiratory failure?",
                "options": ["10 to 12 breaths per minute", "20 to 24 breaths per minute", "6 to 8 breaths per minute", "15 to 18 breaths per minute"],
                "correct": 0,
                "explanation": "Adequate adult ventilation targets 10-12 breaths per minute. Hyperventilation must be avoided as it increases intrathoracic pressure and decreases cardiac output."
            }
        ],
        "critical": [
            {
                "id": "crit_4_1",
                "scenario": "An unresponsive patient has blood and vomit pooling in the oropharynx, obstructing breathing.",
                "question": "What is your immediate action?",
                "options": [
                    {"t": "Insert a supraglottic airway immediately.", "f": "Incorrect. Suction must precede airway placement."},
                    {"t": "Suction the airway for up to 15 seconds, then insert an OPA.", "f": "Correct. Clear the airway first with rigid suction before placing adjuncts."}
                ],
                "correct": 1,
                "explanation": "Suctioning is mandatory to clear fluid/obstruction before airway adjunct placement.",
                "kpi": "Airway clearing sequence"
            }
        ]
    },
    "c05": {
        "title": "Airway Skills",
        "shortTitle": "Ch 5: Airway Skills",
        "sections": [
            {
                "id": "itls-c05s1",
                "shortTitle": "5.1 Airway Management Skills",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#wind"/></svg> Airway Skills</h3>
    <p>Practice-based airway procedures including basic suctioning, supraglottic device placement, and confirmation techniques.</p>
    <ul>
        <li><strong>Suctioning:</strong> Max 15 seconds. Suction only on withdrawal of the catheter.</li>
        <li><strong>Device Confirmation:</strong> Auscultate epigastrium and lungs bilaterally, monitor waveform capnography (EtCO2). Waveform capnography is the gold standard.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Skills", "question": "What is the gold standard for verifying ETT placement?", "answer": "Continuous waveform capnography (measuring exhaled carbon dioxide)." },
            { "category": "Skills", "question": "How long should you suction a patient's airway?", "answer": "No longer than 15 seconds at a time to prevent hypoxia." }
        ],
        "quiz": [
            {
                "q": "Which of the following is the most reliable method to confirm and monitor the placement of an endotracheal tube?",
                "options": ["Auscultation of breath sounds", "Chest rise and fall", "Continuous waveform capnography", "Checking for condensation in the tube"],
                "correct": 2,
                "explanation": "Continuous waveform capnography is the gold standard. Auscultation is secondary and can be misleading in noisy environments."
            }
        ],
        "critical": [
            {
                "id": "crit_5_1",
                "scenario": "You have just placed a supraglottic airway. Waveform capnography shows a flat line, and you hear gurgling over the epigastrium.",
                "question": "What is the most likely problem?",
                "options": [
                    {"t": "The tube is placed correctly, start hyperventilating.", "f": "Incorrect. Epigastric gurgling and flat capnography indicate esophageal placement."},
                    {"t": "The device is in the esophagus; deflate cuffs, remove the device, and ventilate with BVM.", "f": "Correct. Esophageal placement must be corrected immediately."}
                ],
                "correct": 1,
                "explanation": "Esophageal placement must be corrected by removing the device and returning to basic BVM ventilations before attempting placement again.",
                "kpi": "Esophageal device detection"
            }
        ]
    },
    "c06": {
        "title": "Thoracic Trauma",
        "shortTitle": "Ch 6: Thoracic Trauma",
        "sections": [
            {
                "id": "itls-c06s1",
                "shortTitle": "6.1 Chest Injuries & Tension Pneumothorax",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#heart"/></svg> Thoracic Trauma</h3>
    <p>Chest injuries can compromise breathing and circulation rapidly. Life-threats must be managed immediately.</p>
    <ul>
        <li><strong>Open Pneumothorax (Sucking Chest Wound):</strong> Treat with a three-sided occlusive dressing or commercial chest seal.</li>
        <li><strong>Flail Chest:</strong> Two or more adjacent ribs fractured in two or more places, causing paradoxical chest wall movement. Treat with positive pressure ventilation (BVM/CPAP).</li>
        <li><strong>Tension Pneumothorax:</strong> Air accumulates in the pleural space, compressing the lungs and great vessels (hypotension, jugular venous distention, decreased/absent breath sounds, tracheal deviation). Treat with immediate **Needle Decompression**.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Thoracic", "question": "What is a flail chest?", "answer": "A segment of the chest wall that is detached due to multiple rib fractures, moving paradoxically during respiration." },
            { "category": "Thoracic", "question": "What are the signs of a Tension Pneumothorax?", "answer": "Severe dyspnea, absent breath sounds on the affected side, JVD, hypotension (shock), and tracheal deviation (late sign)." }
        ],
        "quiz": [
            {
                "q": "What is the immediate treatment for a patient with an open pneumothorax (sucking chest wound)?",
                "options": ["Auscultation of the back", "Applying a chest seal or three-sided occlusive dressing", "Immediate needle chest decompression", "Endotracheal intubation under pressure"],
                "correct": 1,
                "explanation": "An open chest wound must be sealed immediately to prevent air entering the pleural space, using a commercial chest seal or occlusive dressing taped on three sides."
            }
        ],
        "critical": [
            {
                "id": "crit_6_1",
                "scenario": "A patient has a puncture wound to the right chest. You note tracheal deviation to the left, JVD, absent breath sounds on the right, and a blood pressure of 80/40.",
                "question": "What is your immediate action?",
                "options": [
                    {"t": "Cover the wound completely with plastic wrap and tape all sides.", "f": "Incorrect. This will worsen tension. The patient needs needle decompression."},
                    {"t": "Perform immediate needle chest decompression on the right side.", "f": "Correct. The patient has a tension pneumothorax and requires urgent decompression."}
                ],
                "correct": 1,
                "explanation": "Tension pneumothorax signs (hypotension, JVD, absent breath sounds) dictate immediate needle decompression on the affected side.",
                "kpi": "Tension pneumothorax management"
            }
        ]
    },
    "c07": {
        "title": "Thoracic Trauma Skills",
        "shortTitle": "Ch 7: Thoracic Skills",
        "sections": [
            {
                "id": "itls-c07s1",
                "shortTitle": "7.1 Thoracic Interventions",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#heart"/></svg> Thoracic Skills</h3>
    <p>Hands-on chest procedures. Decompression is performed at the **2nd intercostal space, mid-clavicular line**, or the **4th/5th intercostal space, anterior axillary line**.</p>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Skills", "question": "Where is the primary site for needle chest decompression?", "answer": "The second intercostal space, mid-clavicular line, just over the top of the third rib." },
            { "category": "Skills", "question": "Why do you insert the needle over the top of the rib?", "answer": "To avoid damaging the intercostal nerves and blood vessels that run along the bottom of each rib." }
        ],
        "quiz": [
            {
                "q": "When performing needle chest decompression, the needle should be inserted:",
                "options": ["Directly below the second rib", "Directly over the top of the third rib (2nd intercostal space)", "In the 5th intercostal space, mid-clavicular line", "Directly through the sternum"],
                "correct": 1,
                "explanation": "The neurovascular bundle runs along the bottom of the ribs. To avoid bleeding and nerve damage, insert the needle just over the top of the rib."
            }
        ],
        "critical": [
            {
                "id": "crit_7_1",
                "scenario": "You are preparing to decompress a right-sided tension pneumothorax.",
                "question": "What is the correct location?",
                "options": [
                    {"t": "5th intercostal space, mid-clavicular line on the left side.", "f": "Incorrect. Must be on the affected side (right)."},
                    {"t": "Right side, 2nd intercostal space, mid-clavicular line.", "f": "Correct. This is the primary decompression landmark."}
                ],
                "correct": 1,
                "explanation": "Decompress on the affected side (right) at the 2nd intercostal space, mid-clavicular line.",
                "kpi": "Decompression landmarking"
            }
        ]
    },
    "c08": {
        "title": "Shock",
        "shortTitle": "Ch 8: Shock",
        "sections": [
            {
                "id": "itls-c08s1",
                "shortTitle": "8.1 Pathophysiology of Shock & Resuscitation",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#heart-pulse"/></svg> Shock Pathophysiology</h3>
    <p>Shock is defined as inadequate tissue perfusion. In trauma, shock is assumed to be **Hypovolemic (Hemorrhagic)** until proven otherwise.</p>
    <ul>
        <li><strong>Compensated Shock:</strong> Body maintains BP via vasoconstriction and tachycardia. Vitals: normal BP, tachycardia, cool/pale/diaphoretic skin.</li>
        <li><strong>Decompensated Shock:</strong> Blood pressure drops (hypotension). Organ damage begins. Vitals: Systolic BP &lt;90 mmHg, altered LOC.</li>
        <li><strong>Resuscitation:</strong> Control bleeding first. Use Tourniquets, wound packing, and pressure dressings. Administer IV fluids to maintain **Permissive Hypotension** (target radial pulse/systolic BP 80-90 mmHg) to avoid popping clots.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Shock", "question": "What is the most common type of shock in trauma?", "answer": "Hypovolemic (hemorrhagic) shock due to blood loss." },
            { "category": "Shock", "question": "Define Permissive Hypotension.", "answer": "Maintaining a lower-than-normal blood pressure (systolic 80-90 mmHg) during active internal bleeding to prevent clot disruption." }
        ],
        "quiz": [
            {
                "q": "Which of the following findings indicates that a trauma patient has entered decompensated shock?",
                "options": ["A heart rate of 110 beats per minute", "Cool, pale, and clammy skin", "A systolic blood pressure of 84 mmHg", "Anxiety and restlessness"],
                "correct": 2,
                "explanation": "Hypotension (systolic BP < 90 mmHg) is the hallmark transition from compensated to decompensated shock."
            }
        ],
        "critical": [
            {
                "id": "crit_8_1",
                "scenario": "A patient has an active arterial bleed from a thigh laceration. Direct pressure is failing to control the bleeding.",
                "question": "What is your next action?",
                "options": [
                    {"t": "Apply a pressure bandage and elevate the leg.", "f": "Incorrect. Direct pressure has failed; apply a tourniquet immediately."},
                    {"t": "Apply a tourniquet proximal to the wound immediately.", "f": "Correct. Apply a tourniquet if direct pressure fails to control severe extremity bleeding."}
                ],
                "correct": 1,
                "explanation": "Apply a tourniquet immediately when direct pressure fails to control catastrophic extremity hemorrhage.",
                "kpi": "Hemorrhage control cascade"
            }
        ]
    },
    "c09": {
        "title": "Vascular Access Skills",
        "shortTitle": "Ch 9: Vascular Skills",
        "sections": [
            {
                "id": "itls-c09s1",
                "shortTitle": "9.1 IV & IO Access",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#syringe"/></svg> Vascular Access</h3>
    <p>Trauma resuscitation requires rapid vascular access. Establish IV/IO lines en route, not on scene (unless extrication is prolonged).</p>
    <ul>
        <li><strong>IV:</strong> Large-bore catheters (14G or 16G).</li>
        <li><strong>IO (Intraosseous):</strong> Proximal tibia, humeral head, or distal femur (pediatrics).</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Skills", "question": "What catheter size is preferred for trauma fluid resuscitation?", "answer": "Large-bore catheters, typically 14G or 16G." },
            { "category": "Skills", "question": "When should vascular access be established in trauma?", "answer": "Ideally en route to the hospital, to avoid delaying transport of a critical patient." }
        ],
        "quiz": [
            {
                "q": "What is the preferred route of vascular access if an IV cannot be established within 90 seconds in a critical trauma patient?",
                "options": ["Central venous line", "Intraosseous (IO) access", "External jugular vein cannulation", "Surgical saphenous cutdown"],
                "correct": 1,
                "explanation": "Intraosseous access provides rapid, reliable vascular entry in critical patients when peripheral IV access is delayed."
            }
        ],
        "critical": [
            {
                "id": "crit_9_1",
                "scenario": "A patient in hemorrhagic shock needs immediate fluid resuscitation. You are in the back of the ambulance en route.",
                "question": "What vascular access is most appropriate?",
                "options": [
                    {"t": "Establish a 22G IV in the hand.", "f": "Incorrect. Too small for resuscitation."},
                    {"t": "Insert a 14G/16G IV in the antecubital fossa, or perform an IO if unsuccessful.", "f": "Correct. Large-bore IV or IO is indicated for shock resuscitation."}
                ],
                "correct": 1,
                "explanation": "Catheter gauge dictates flow rate. Use 14G or 16G for rapid fluid administration.",
                "kpi": "Vascular access gauge selection"
            }
        ]
    },
    "c10": {
        "title": "Head Trauma and Traumatic Brain Injury",
        "shortTitle": "Ch 10: Head Trauma",
        "sections": [
            {
                "id": "itls-c10s1",
                "shortTitle": "10.1 Traumatic Brain Injury (TBI)",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#activity"/></svg> TBI & ICP</h3>
    <p>Managing head trauma focuses on preventing **Secondary Brain Injury** (hypoxia and hypotension).</p>
    <ul>
        <li><strong>Cushing's Triad (Increasing ICP):</strong> Hypertension (widening pulse pressure), bradycardia, and irregular respirations (Cheyne-Stokes).</li>
        <li><strong>Hyperventilation Rules:</strong> Only hyperventilate (rate 20/min for adults) if there are active signs of herniation (blown pupil, decerebrate posturing, sudden GCS drop). Otherwise, maintain normal ventilation (10-12/min).</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Head Trauma", "question": "What is Cushing's Triad?", "answer": "Bradycardia, hypertension (widening pulse pressure), and irregular respirations, indicating increased intracranial pressure (ICP)." },
            { "category": "Head Trauma", "question": "What is the danger of hyperventilating a head-injured patient?", "answer": "Hyperventilation causes cerebral vasoconstriction, which reduces cerebral blood flow and worsens brain ischemia." }
        ],
        "quiz": [
            {
                "q": "Which of the following sets of vital signs is classic for Cushing's Triad?",
                "options": [
                    "BP 90/60, HR 120/min, RR 24/min",
                    "BP 180/90, HR 48/min, RR 10/min (irregular)",
                    "BP 120/80, HR 72/min, RR 16/min",
                    "BP 70/40, HR 50/min, RR 8/min"
                ],
                "correct": 1,
                "explanation": "Cushing's triad involves hypertension (usually with a widening pulse pressure), bradycardia, and irregular/slow breathing, indicating high ICP."
            }
        ],
        "critical": [
            {
                "id": "crit_10_1",
                "scenario": "A patient with a head injury has a GCS of 7, a blown right pupil, and is posturing. Oxygen saturations are 92%.",
                "question": "What is your immediate respiratory strategy?",
                "options": [
                    {"t": "Hyperventilate the patient at 30 breaths/minute using room air.", "f": "Incorrect. Hyperventilation is too fast and room air is inadequate."},
                    {"t": "Administer high-flow oxygen, assist ventilations with BVM at 10-12/min, and only hyperventilate (20/min) if active herniation signs persist.", "f": "Correct. Ensure oxygenation first. Mild hyperventilation (20/min) is only reserved for active brain herniation."}
                ],
                "correct": 1,
                "explanation": "Provide high-flow oxygen and normal ventilation rates. Avoid aggressive hyperventilation unless active herniation is present.",
                "kpi": "TBI ventilation control"
            }
        ]
    },
    "c11": {
        "title": "Spinal Trauma and SMR",
        "shortTitle": "Ch 11: Spinal Trauma",
        "sections": [
            {
                "id": "itls-c11s1",
                "shortTitle": "11.1 Spinal Motion Restriction (SMR)",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#shield"/></svg> Spinal Care</h3>
    <p>Routine use of rigid backboards is no longer recommended. **Spinal Motion Restriction (SMR)** focuses on limiting spine movement using cervical collars, vacuum mattresses, or regular stretchers.</p>
    <ul>
        <li><strong>SMR Indications:</strong> Spinal pain/tenderness, focal neurological deficits (numbness, weakness), altered mental status, alcohol/drug intoxication, or communication barriers.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Spinal", "question": "What is the primary goal of SMR?", "answer": "To minimize movement of the spinal column to prevent secondary neurological injury." },
            { "category": "Spinal", "question": "Why is the routine use of rigid backboards discouraged?", "answer": "They cause pressure ulcers, respiratory compromise, and pain, without providing better immobilization than a vacuum mattress or stretcher." }
        ],
        "quiz": [
            {
                "q": "Which of the following patients requires Spinal Motion Restriction?",
                "options": [
                    "An alert patient with a minor finger injury from a fall.",
                    "An intoxicated patient who fell and complains of mid-back pain.",
                    "A patient with a laceration who is fully oriented and has no spine pain.",
                    "An alert patient with no neck pain and normal motor/sensory exams."
                ],
                "correct": 1,
                "explanation": "Spine pain and intoxication are key indications for spinal motion restriction, as the patient cannot reliably complete a spinal clearance exam."
            }
        ],
        "critical": [
            {
                "id": "crit_11_1",
                "scenario": "A patient fell from a ladder. He is alert and oriented, complains of right wrist pain, but denies neck or back pain. He has full sensation and motor function in all limbs.",
                "question": "Do you apply a cervical collar?",
                "options": [
                    {"t": "Yes, always apply a collar for any fall.", "f": "Incorrect. The patient meets criteria for spinal clearance."},
                    {"t": "No. The patient has no neck pain, no neurological deficits, is sober, and alert.", "f": "Correct. Spinal motion restriction is not indicated based on clinical spinal clearance."}
                ],
                "correct": 1,
                "explanation": "Alert, sober patients with no spine pain or neurological deficits do not require cervical collars.",
                "kpi": "Spinal clearance evaluation"
            }
        ]
    },
    "c12": {
        "title": "Spine Management Skills",
        "shortTitle": "Ch 12: Spine Skills",
        "sections": [
            {
                "id": "itls-c12s1",
                "shortTitle": "12.1 Spine Immobilization Procedures",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#shield"/></svg> Spine Skills</h3>
    <p>Procedures for applying cervical collars, log-rolling, and transferring patients using scoop stretchers or vacuum mattresses.</p>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Skills", "question": "What is the correct method for log-rolling a patient?", "answer": "One provider maintains manual cervical stabilization and directs the roll; at least two other providers roll the torso and legs in alignment." },
            { "category": "Skills", "question": "When should manual stabilization of the head be released?", "answer": "Only after the patient is fully secured in SMR (cervical collar applied and head block straps secured)." }
        ],
        "quiz": [
            {
                "q": "Who directs the movement of the patient during a log-roll or transfer maneuver?",
                "options": [
                    "The provider at the patient's feet",
                    "The provider maintaining manual cervical stabilization at the head",
                    "The team leader standing at the side",
                    "The transport driver"
                ],
                "correct": 1,
                "explanation": "The provider holding the head controls the airway and alignment, making them responsible for coordinating all movement commands."
            }
        ],
        "critical": [
            {
                "id": "crit_12_1",
                "scenario": "You are preparing to log-roll a patient onto a scoop stretcher. You are holding manual stabilization of the head.",
                "question": "What is your responsibility?",
                "options": [
                    {"t": "Let go of the head to pull the scoop stretcher under the patient.", "f": "Incorrect. Never release manual stabilization until SMR is complete."},
                    {"t": "Maintain stabilization, coordinate the count, and direct the team to roll the patient on your command.", "f": "Correct. The provider at the head directs all movements."}
                ],
                "correct": 1,
                "explanation": "The person holding cervical stabilization coordinates the roll count.",
                "kpi": "Movement coordination"
            }
        ]
    },
    "c13": {
        "title": "Abdominal Trauma",
        "shortTitle": "Ch 13: Abdominal Trauma",
        "sections": [
            {
                "id": "itls-c13s1",
                "shortTitle": "13.1 Abdominal & Pelvic Trauma",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#search"/></svg> Abdominal Trauma</h3>
    <p>Abdominal trauma causes massive internal hemorrhage. Pelvic fractures are high-risk injuries due to vascular injury.</p>
    <ul>
        <li><strong>Hollow Organs:</strong> Stomach, intestines, bladder. Rupture causes peritonitis.</li>
        <li><strong>Solid Organs:</strong> Spleen, liver, kidneys. Injury causes rapid bleeding and hemorrhagic shock.</li>
        <li><strong>Pelvic Fractures:</strong> Can hold up to 2 liters of blood in the retroperitoneal space. Bind the pelvis immediately using a commercial **Pelvic Binder** or bedsheet if unstable.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Abdominal", "question": "Which organ is most commonly injured in blunt abdominal trauma?", "answer": "The spleen (located in the left upper quadrant)." },
            { "category": "Abdominal", "question": "What is the danger of an unstable pelvic fracture?", "answer": "Rupture of internal iliac vessels leading to rapid, life-threatening internal hemorrhage." }
        ],
        "quiz": [
            {
                "q": "What is the most appropriate device to stabilize an unstable pelvic fracture in the field?",
                "options": ["A traction splint", "A commercial pelvic binder or sheet wrap", "A rigid backboard with straps", "Air splints applied to both legs"],
                "correct": 1,
                "explanation": "A pelvic binder compresses the pelvic ring, reducing internal volume and promoting tamponade of pelvic bleeding."
            }
        ],
        "critical": [
            {
                "id": "crit_13_1",
                "scenario": "A patient has bruising over the pelvis, pain on palpation, and a blood pressure of 85/50.",
                "question": "What is your immediate intervention?",
                "options": [
                    {"t": "Perform a pelvic rock test to check for stability.", "f": "Incorrect. Do not perform a pelvic rock on suspected fractures; this can worsen bleeding. Bind it immediately."},
                    {"t": "Apply a pelvic binder immediately, control external bleeding, and start rapid transport.", "f": "Correct. Apply a binder for suspected pelvic fracture and shock."}
                ],
                "correct": 1,
                "explanation": "Suspected pelvic fractures must be bound immediately. Avoid repeated physical manipulation (pelvic rocking).",
                "kpi": "Pelvic fracture binding"
            }
        ]
    },
    "c14": {
        "title": "Extremity Trauma",
        "shortTitle": "Ch 14: Extremity Trauma",
        "sections": [
            {
                "id": "itls-c14s1",
                "shortTitle": "14.1 Musculoskeletal Injuries",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#bone"/></svg> Extremity Injuries</h3>
    <p>Extremity injuries are rarely life-threatening, but can cause permanent disability. **Femur fractures** and **compartment syndrome** are critical emergencies.</p>
    <ul>
        <li><strong>Femur Fractures:</strong> Can lose up to 1000-1500 mL of blood per femur. Treat mid-shaft fractures with a **Traction Splint** to align bone ends and decrease muscle spasm.</li>
        <li><strong>Compartment Syndrome:</strong> Increased pressure within a muscle compartment (severe pain out of proportion, pallor, pulselessness, paresthesia, paralysis).</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Extremity", "question": "What is the blood loss estimate for a closed femur fracture?", "answer": "1000 to 1500 mL of blood per femur." },
            { "category": "Extremity", "question": "When is a traction splint indicated?", "answer": "For isolated, mid-shaft femur fractures without hip, knee, or ankle involvement." }
        ],
        "quiz": [
            {
                "q": "Which of the following is a contraindication to using a traction splint for a femur fracture?",
                "options": [
                    "An open femur fracture",
                    "An associated ankle or foot fracture on the same leg",
                    "Severe pain in the thigh",
                    "Blood loss under 500 mL"
                ],
                "correct": 1,
                "explanation": "Traction splints rely on an intact ankle, foot, and hip to apply tension. Injuries to these structures contraindicate its use."
            }
        ],
        "critical": [
            {
                "id": "crit_14_1",
                "scenario": "A patient has an open, mid-shaft femur fracture with severe angulation. The foot is cold and has no palpable pedal pulse.",
                "question": "What is your action?",
                "options": [
                    {"t": "Apply a cardboard splint in the angulated position.", "f": "Incorrect. Compromised distal circulation requires gentle traction to restore pulse."},
                    {"t": "Apply manual traction to align the limb, apply a traction splint, and reassess distal pulses.", "f": "Correct. Apply traction to restore alignment and pulses for compromised limbs."}
                ],
                "correct": 1,
                "explanation": "If distal circulation is absent, apply manual traction to align the limb and restore perfusion before splinting.",
                "kpi": "Circulatory compromise management"
            }
        ]
    },
    "c15": {
        "title": "Extremity Trauma Skills",
        "shortTitle": "Ch 15: Extremity Skills",
        "sections": [
            {
                "id": "itls-c15s1",
                "shortTitle": "15.1 Splinting & Tourniquets",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#bone"/></svg> Extremity Skills</h3>
    <p>Skills for applying board splints, traction splints, and applying commercial tourniquets.</p>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Skills", "question": "What should you check before and after applying any splint?", "answer": "Distal pulse, motor function, and sensory function (PMS)." },
            { "category": "Skills", "question": "How tight should a tourniquet be applied?", "answer": "Tight enough to completely stop arterial bleeding and eliminate the distal pulse." }
        ],
        "quiz": [
            {
                "q": "What is the first step when preparing to splint an injured extremity?",
                "options": [
                    "Applying cold packs to the area",
                    "Assessing Pulse, Motor, and Sensory function (PMS) distally",
                    "Administering pain medication",
                    "Measuring the splint on the injured side"
                ],
                "correct": 1,
                "explanation": "PMS must be assessed before any manipulation of the limb, and reassessed after splinting to ensure nerves/vessels are not compromised."
            }
        ],
        "critical": [
            {
                "id": "crit_15_1",
                "scenario": "You have just applied a traction splint to a patient's leg. Upon reassessing PMS, you find the pedal pulse has disappeared.",
                "question": "What should you do?",
                "options": [
                    {"t": "Ignore it, this is a normal effect of traction.", "f": "Incorrect. Pulse loss means the splint is compromising vessels."},
                    {"t": "Release traction slightly, adjust the ankle hitch, and check the pulse again. If still absent, notify medical control.", "f": "Correct. Adjust the splint to restore circulation immediately."}
                ],
                "correct": 1,
                "explanation": "If pulses are lost after splinting, adjust the device immediately to restore blood flow.",
                "kpi": "Post-splint pulse loss"
            }
        ]
    },
    "c16": {
        "title": "Burns",
        "shortTitle": "Ch 16: Burns",
        "sections": [
            {
                "id": "itls-c16s1",
                "shortTitle": "16.1 Burn Severity & Treatment",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#fire"/></svg> Burn Management</h3>
    <p>Burns are classified by depth (Superficial, Partial-Thickness, Full-Thickness) and size (using the **Rule of Nines**).</p>
    <ul>
        <li><strong>Airway Burns (Inhalation):</strong> Watch for soot around the mouth/nose, singed nasal hairs, hoarseness, stridor. Proactive intubation is critical before edema closes the airway.</li>
        <li><strong>Rule of Nines (Adult):</strong> Head 9%, Chest/Abdomen 18%, Back 18%, Each Arm 9%, Each Leg 18%, Genitalia 1%.</li>
        <li><strong>Fluid Resuscitation (Parkland Formula):</strong> \(4 \text{ mL} \times \text{weight (kg)} \times \% \text{ TBSA (Partial/Full thickness)}\). Give half in the first 8 hours.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Burns", "question": "What is the Parkland formula for burn fluids?", "answer": "4 mL * weight (kg) * % TBSA burned, with half given in the first 8 hours." },
            { "category": "Burns", "question": "What are the indicators of an inhalation injury?", "answer": "Soot in airway, singed nasal hairs, hoarse voice, stridor, wheezing, or facial burns." }
        ],
        "quiz": [
            {
                "q": "Using the Rule of Nines, what is the estimated burn size for an adult patient with partial-thickness burns covering the entire anterior chest, abdomen, and the front of one leg?",
                "options": ["18%", "27%", "36%", "45%"],
                "correct": 1,
                "explanation": "Anterior chest and abdomen = 18%. Front of one leg = 9%. Total = 18 + 9 = 27% TBSA."
            }
        ],
        "critical": [
            {
                "id": "crit_16_1",
                "scenario": "A patient was pulled from a house fire. He has facial burns, soot in his spit, and a hoarse, raspy voice.",
                "question": "What is your priority?",
                "options": [
                    {"t": "Apply wet dressings to the face and start an IV.", "f": "Incorrect. Airway compromise is imminent; address the airway first."},
                    {"t": "Administer 100% oxygen and prepare for early advanced airway management (intubation).", "f": "Correct. Early intubation is indicated for inhalation injury signs before airway edema blocks access."}
                ],
                "correct": 1,
                "explanation": "Early advanced airway placement is vital for airway burns to prevent total occlusion from edema.",
                "kpi": "Inhalation injury priority"
            }
        ]
    },
    "c17": {
        "title": "Pediatric Trauma",
        "shortTitle": "Ch 17: Pediatric Trauma",
        "sections": [
            {
                "id": "itls-c17s1",
                "shortTitle": "17.1 Pediatric Assessment Triangle (PAT)",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Trauma</h3>
    <p>Children have different anatomy and physiology than adults. Use the **Pediatric Assessment Triangle (PAT)** for general impression:</p>
    <ul>
        <li><strong>PAT Components:</strong> Appearance, Work of Breathing, Circulation to Skin.</li>
        <li><strong>Physiology:</strong> Children compensate for shock extremely well by vasoconstriction, then deteriorate rapidly. Hypotension is a very late sign of pediatric shock.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Pediatrics", "question": "What is the PAT?", "answer": "Pediatric Assessment Triangle: Appearance, Work of Breathing, and Circulation to Skin." },
            { "category": "Pediatrics", "question": "Why is hypotension a late sign of shock in children?", "answer": "Children have strong compensatory mechanisms that maintain blood pressure until they have lost up to 30% of their blood volume, followed by sudden cardiovascular collapse." }
        ],
        "quiz": [
            {
                "q": "Which of the following indicates decompensated hemorrhagic shock in a pediatric patient?",
                "options": ["A heart rate of 140/minute", "Cool, pale extremities", "A systolic blood pressure of 60 mmHg", "Restlessness and crying"],
                "correct": 2,
                "explanation": "Hypotension (systolic BP < 70 + 2*age) is a late, decompensated sign of shock in children, representing critical failure."
            }
        ],
        "critical": [
            {
                "id": "crit_17_1",
                "scenario": "A 5-year-old female was hit by a car. She is lethargic, tachycardic at 160/min, has cool extremities, and a blood pressure of 82/50.",
                "question": "How do you evaluate her shock status?",
                "options": [
                    {"t": "She is not in shock because her blood pressure is above 80.", "f": "Incorrect. Tachycardia and cool skin in a trauma child represent compensated shock."},
                    {"t": "She is in shock; her mental status, tachycardia, and cool skin indicate perfusion failure.", "f": "Correct. Perfusion signs (HR, skin, LOC) indicate shock before hypotension develops."}
                ],
                "correct": 1,
                "explanation": "Evaluate perfusion (skin, mental state, heart rate) to detect shock early in children; do not wait for hypotension.",
                "kpi": "Pediatric shock detection"
            }
        ]
    },
    "c18": {
        "title": "Geriatric Trauma",
        "shortTitle": "Ch 18: Geriatric Trauma",
        "sections": [
            {
                "id": "itls-c18s1",
                "shortTitle": "18.1 Geriatric Trauma Physiology",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#users"/></svg> Geriatric Trauma</h3>
    <p>Aging reduces physiological reserve. Geriatric patients have a higher mortality rate for similar injury severities.</p>
    <ul>
        <li><strong>Cardiovascular:</strong> Beta-blockers can prevent tachycardia, masking shock. Hypertension is common, so a 'normal' blood pressure of 120/80 can represent shock for a hypertensive geriatric patient.</li>
        <li><strong>Skeletal:</strong> Osteoporosis increases fracture risk from minor falls.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Geriatrics", "question": "Why can geriatric shock be masked?", "answer": "Beta-blockers or pacemakers prevent the heart rate from rising, masking the classic sign of tachycardia." },
            { "category": "Geriatrics", "question": "What is the significance of a BP of 110/70 in an elderly trauma patient?", "answer": "If their baseline systolic BP is 160-180 mmHg (chronic hypertension), a BP of 110 represents relative hypotension and potential shock." }
        ],
        "quiz": [
            {
                "q": "Why is an elderly trauma patient taking beta-blockers at higher risk during shock?",
                "options": [
                    "Beta-blockers cause severe internal bleeding.",
                    "They prevent the heart rate from increasing to compensate for blood loss.",
                    "They cause sudden hypothermia.",
                    "They interfere with oxygen administration."
                ],
                "correct": 1,
                "explanation": "Beta-blockers inhibit sympathetic stimulation, preventing the tachycardic response that compensates for hypovolemia."
            }
        ],
        "critical": [
            {
                "id": "crit_18_1",
                "scenario": "An 82-year-old male fell from a standing position. He is taking blood thinners (warfarin), is alert, has a normal heart rate of 70/min, and a blood pressure of 110/60.",
                "question": "What is your clinical concern?",
                "options": [
                    {"t": "He has no serious injuries since his heart rate is normal.", "f": "Incorrect. Blood thinners increase risk of internal hemorrhage from minor falls."},
                    {"t": "He is at high risk for intracranial hemorrhage; evaluate GCS closely and transport.", "f": "Correct. Elderly patients on anticoagulants require high index of suspicion for head trauma."}
                ],
                "correct": 1,
                "explanation": "Anticoagulated geriatric patients can bleed severely from minor head trauma, requiring rapid evaluation.",
                "kpi": "Anticoagulant risk management"
            }
        ]
    },
    "c19": {
        "title": "Trauma in Pregnancy",
        "shortTitle": "Ch 19: Pregnancy Trauma",
        "sections": [
            {
                "id": "itls-c19s1",
                "shortTitle": "19.1 Maternal & Fetal Resuscitation",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#heart-pulse"/></svg> Pregnancy Trauma</h3>
    <p>Resuscitating a pregnant trauma patient requires managing two patients: the mother and the fetus. **Treat the mother first** to save the fetus.</p>
    <ul>
        <li><strong>Supine Hypotension Syndrome:</strong> The heavy uterus compresses the inferior vena cava when supine, reducing cardiac output by 30%. Tilt the backboard 15-30 degrees to the left, or manually displace the uterus to the left.</li>
        <li><strong>Physiology:</strong> Maternal blood volume increases by 50%. A mother can lose up to 35% of her blood volume before showing signs of shock, but the fetus is already suffering from severe hypoxia.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Pregnancy", "question": "What is Supine Hypotension Syndrome?", "answer": "Compression of the inferior vena cava by the pregnant uterus when the patient is supine, reducing venous return and causing hypotension." },
            { "category": "Pregnancy", "question": "How do you prevent supine hypotension in a pregnant patient?", "answer": "Transport the patient with a left lateral tilt (tilt the backboard or stretcher 15-30 degrees to the left) or manually shift the uterus to the left." }
        ],
        "quiz": [
            {
                "q": "Which of the following is the correct transport position for a pregnant trauma patient in her third trimester?",
                "options": [
                    "Flat supine on a backboard",
                    "Semi-Fowler's position with legs elevated",
                    "Supine with the right side of the backboard tilted up 15 to 30 degrees (left lateral tilt)",
                    "Prone position"
                ],
                "correct": 2,
                "explanation": "Tilted position (left lateral tilt) moves the uterus off the vena cava, restoring maternal venous return and fetal perfusion."
            }
        ],
        "critical": [
            {
                "id": "crit_19_1",
                "scenario": "A 28-week pregnant female is involved in an MVC. She is supine, secured on a backboard, and her blood pressure is 88/50.",
                "question": "What is your immediate correction?",
                "options": [
                    {"t": "Elevate her legs using pillows.", "f": "Incorrect. Legs elevation does not relieve vena cava compression."},
                    {"t": "Manually displace her uterus to the left, or tilt the right side of the backboard up 15-30 degrees.", "f": "Correct. Relieve inferior vena cava compression immediately."}
                ],
                "correct": 1,
                "explanation": "A left lateral tilt is necessary for pregnant patients in later stages of gestation to prevent supine hypotension.",
                "kpi": "Maternal positioning"
            }
        ]
    },
    "c20": {
        "title": "The Impaired Patient",
        "shortTitle": "Ch 20: Impaired Patient",
        "sections": [
            {
                "id": "itls-c20s1",
                "shortTitle": "20.1 Assessing Impaired Patients",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#users"/></svg> Impaired Patients</h3>
    <p>Alcohol, drugs, or medical conditions (hypoglycemia, hypoxia) can impair a patient's mental status, making pain reporting unreliable.</p>
    <ul>
        <li><strong>Rule:</strong> Never assume altered mental status is due solely to alcohol or drugs. Always rule out head injury, hypoxia, hypoglycemia, and shock first.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Impaired", "question": "What is the primary danger when assessing an intoxicated trauma patient?", "answer": "The patient may not perceive or report pain from serious internal injuries (like cervical spine fractures or abdominal bleeding)." },
            { "category": "Impaired", "question": "What must be ruled out before attributing altered LOC to alcohol?", "answer": "Hypoxia, hypoglycemia, shock, carbon monoxide poisoning, and traumatic brain injury." }
        ],
        "quiz": [
            {
                "q": "You are treating an intoxicated patient who fell down a flight of stairs. He is combative and refuses to cooperate. Your physical exam must assume:",
                "options": [
                    "The patient has no serious injuries.",
                    "The patient has a cervical spine injury and internal injuries until proven otherwise.",
                    "The patient is only seeking attention.",
                    "The patient can be cleared of spinal restrictions immediately."
                ],
                "correct": 1,
                "explanation": "Intoxication masks pain signals. You must assume serious injuries (especially cervical spine fractures) are present and implement appropriate SMR."
            }
        ],
        "critical": [
            {
                "id": "crit_20_1",
                "scenario": "A patient smells of alcohol and has a minor head laceration from a fall. He is aggressive and says he is fine.",
                "question": "How do you proceed?",
                "options": [
                    {"t": "Let the patient go since he is alert and refusing care.", "f": "Incorrect. Intoxicated patients lack capacity to refuse care for head injuries."},
                    {"t": "Assess airway, breathing, circulation, test blood glucose, and maintain SMR due to unreliable exam.", "f": "Correct. Assess for organic causes of alteration and protect the spine."}
                ],
                "correct": 1,
                "explanation": "Intoxication makes physical assessment unreliable. Assess ABCs, check glucose, and maintain spinal motion restriction.",
                "kpi": "Impaired capacity management"
            }
        ]
    },
    "c21": {
        "title": "Trauma Arrest",
        "shortTitle": "Ch 21: Trauma Arrest",
        "sections": [
            {
                "id": "itls-c21s1",
                "shortTitle": "21.1 Traumatic Cardiac Arrest",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#siren"/></svg> Trauma Arrest</h3>
    <p>Traumatic cardiac arrest has an extremely low survival rate. Focus on **reversible causes** immediately on scene before transport.</p>
    <ul>
        <li><strong>Reversible Causes (H&Ts):</strong> Hypovolemia (control bleeding), Hypoxia (oxygen/intubation), Tension Pneumothorax (needle decompression), Cardiac Tamponade.</li>
        <li><strong>CPR:</strong> Perform CPR but prioritize airway control and bilateral chest decompression if tension pneumothorax is suspected.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Arrest", "question": "What are the primary reversible causes of traumatic cardiac arrest?", "answer": "Hypoxia, hypovolemia, tension pneumothorax, and cardiac tamponade." },
            { "category": "Arrest", "question": "What is the priority in traumatic cardiac arrest compared to medical arrest?", "answer": "Address mechanical causes immediately (control hemorrhage, decompress the chest, open the airway) rather than focusing solely on chest compressions." }
        ],
        "quiz": [
            {
                "q": "Which of the following interventions is the highest priority in a patient in traumatic cardiac arrest from a chest crush injury?",
                "options": [
                    "Administering IV epinephrine",
                    "Performing immediate bilateral needle chest decompression",
                    "Defibrillating the patient",
                    "Performing continuous chest compressions for 10 minutes"
                ],
                "correct": 1,
                "explanation": "In traumatic arrest from chest injuries, tension pneumothorax or airway obstruction is highly likely. Bilateral chest decompression addresses this mechanical cause immediately."
            }
        ],
        "critical": [
            {
                "id": "crit_21_1",
                "scenario": "A patient becomes pulseless and apneic immediately after extrication from a vehicle. You note flat neck veins and tracheal deviation.",
                "question": "What is your immediate intervention?",
                "options": [
                    {"t": "Start chest compressions and prepare to administer epinephrine.", "f": "Incorrect. epineprhine does not fix a mechanical tension pneumothorax."},
                    {"t": "Open the airway, perform bilateral needle chest decompression, and control any major bleeding.", "f": "Correct. Resolve mechanical causes first in traumatic arrest."}
                ],
                "correct": 1,
                "explanation": "In traumatic arrest, correct airway obstruction and perform chest decompression to address reversible causes.",
                "kpi": "Trauma arrest reversible cause"
            }
        ]
    },
    "c22": {
        "title": "Standard Precautions",
        "shortTitle": "Ch 22: Precautions",
        "sections": [
            {
                "id": "itls-c22s1",
                "shortTitle": "22.1 Universal & Standard Precautions",
                "summary": """<div class="sum-card">
    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em"><use href="../icons/sprite.svg#shield"/></svg> Precautions</h3>
    <p>Standard precautions protect the provider and prevent the spread of infectious disease.</p>
    <ul>
        <li><strong>Hand Hygiene:</strong> Wash hands before and after patient contact.</li>
        <li><strong>Airborne Precautions:</strong> Wear N95 respirator for tuberculosis, chickenpox, measles.</li>
    </ul>
</div>"""
            }
        ],
        "flashcards": [
            { "category": "Precautions", "question": "What is the purpose of Standard Precautions?", "answer": "To protect healthcare workers from exposure to blood and body fluids, assuming all patients are potentially infectious." },
            { "category": "Precautions", "question": "What should you do after an accidental needle stick injury?", "answer": "Wash the area immediately with soap and water, report the exposure to your supervisor, and seek medical evaluation." }
        ],
        "quiz": [
            {
                "q": "What type of mask is required when caring for a trauma patient with a suspected active tuberculosis infection?",
                "options": [
                    "A simple surgical mask",
                    "An N95 or HEPA respirator mask",
                    "A plastic face shield only",
                    "No mask is needed if gloves are worn"
                ],
                "correct": 1,
                "explanation": "Airborne precautions require fit-tested N95 or HEPA respirator masks to filter small infectious droplets."
            }
        ],
        "critical": [
            {
                "id": "crit_22_1",
                "scenario": "While starting an IV on a patient, you accidentally stick your thumb with the used needle.",
                "question": "What is your immediate action?",
                "options": [
                    {"t": "Apply a band-aid and finish the transport.", "f": "Incorrect. Exposure requires immediate washing and reporting."},
                    {"t": "Wash the puncture site immediately with soap and water, report the exposure, and follow post-exposure protocol.", "f": "Correct. Wash, report, and seek post-exposure medical attention immediately."}
                ],
                "correct": 1,
                "explanation": "Immediate decontamination (washing) and reporting are essential steps after any needle-stick exposure.",
                "kpi": "Needle stick management"
            }
        ]
    }
}

def main():
    target_dir = r"d:\Apps\SmartCare\courses\itls\chapters"
    os.makedirs(target_dir, exist_ok=True)
    
    for ch_id, ch_data in CHAPTERS_DATA.items():
        filename = f"{ch_id}.js"
        filepath = os.path.join(target_dir, filename)
        
        js_content = f"""/* ========== ITLS Chapter {ch_id[1:]}: {ch_data['title']} Reviewer Dataset ========== */
window.CPG_DATA = {json.dumps({
            "id": f"itls-{ch_id}",
            "title": ch_data["title"],
            "shortTitle": ch_data["shortTitle"],
            "sections": ch_data["sections"],
            "flashcards": ch_data["flashcards"],
            "quiz": ch_data["quiz"],
            "critical": ch_data["critical"]
        }, indent=4)};
"""
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(js_content)
        print(f"Generated {filename} successfully.")

if __name__ == "__main__":
    main()
