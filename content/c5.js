/* ========== Chapter 5 – Medical Emergencies ========== */
window.CPG_DATA = {
    id: "c5",
    title: "Medical Emergencies",
    shortTitle: "5. Medical Emergencies",
    sections: [
    {
        id: "c5s1",
        shortTitle: "5.1 Respiratory Emergencies",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Respiratory Emergencies</h3>

            <h4>Asthma</h4>
            <p><strong>Asthma</strong> is a chronic inflammatory disorder of the airways characterized by episodes of reversible bronchospasm, airway hyperresponsiveness, and mucus production. Acute exacerbations are triggered by allergens, exercise, respiratory infections, cold air, or stress. The hallmark symptom is <strong>expiratory wheezing</strong> — a high-pitched musical sound heard on auscultation caused by turbulent airflow through narrowed bronchioles.</p>
            <p>Key assessment findings in an acute asthma exacerbation include:</p>
            <ul>
                <li><strong>Wheezing</strong> — Expiratory (or both inspiratory/expiratory in severe cases); <em>absence of wheezing in a deteriorating patient is ominous</em></li>
                <li><strong>Accessory muscle use</strong> — Intercostal, supraclavicular, and substernal retractions; nasal flaring; tripod positioning</li>
                <li><strong>Prolonged expiratory phase</strong> — The expiratory time is significantly longer than inspiration due to air trapping</li>
                <li><strong>Tachypnea and tachycardia</strong> — Compensatory responses to hypoxemia and increased work of breathing</li>
                <li><strong>Pulsus paradoxus</strong> — An exaggerated drop in systolic blood pressure (>10 mmHg) during inspiration</li>
                <li><strong>Inability to speak in full sentences</strong> — Indicates moderate-to-severe obstruction</li>
                <li><strong>Silent chest</strong> — A <span style="color:var(--danger);font-weight:700;">late and ominous sign</span> indicating severely limited airflow; the patient is too fatigued or obstructed to generate audible wheezing → impending respiratory failure</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Silent Chest = Emergency:</strong> A patient who was wheezing loudly and is now quiet, drowsy, and has minimal chest movement has decompensated from respiratory distress into respiratory failure. Begin assisted ventilation immediately and expedite transport.
            </div>

            <h4>COPD Exacerbation</h4>
            <p><strong>Chronic Obstructive Pulmonary Disease (COPD)</strong> is a progressive lung disease encompassing emphysema and chronic bronchitis. Patients have chronic dyspnea and may retain carbon dioxide (CO₂), blunting their hypoxic respiratory drive. An <strong>acute exacerbation</strong> presents with a sudden worsening of baseline dyspnea, increased sputum volume, and/or purulent sputum. Differentiating chronic from acute dyspnea is critical:</p>
            <table>
                <thead>
                    <tr><th>Feature</th><th>Chronic (Baseline)</th><th>Acute Exacerbation</th></tr>
                </thead>
                <tbody>
                    <tr><td>Dyspnea onset</td><td>Gradual, progressive over years</td><td>Sudden worsening (hours to days)</td></tr>
                    <tr><td>Sputum</td><td>Minimal, clear/white</td><td>Increased volume, purulent (yellow/green)</td></tr>
                    <tr><td>Mental status</td><td>Baseline (may be normal)</td><td>Often altered (confusion, drowsiness from CO₂ retention)</td></tr>
                    <tr><td>Oxygen requirement</td><td>Stable baseline SpO₂</td><td>Declining SpO₂ requiring increased FiO₂</td></tr>
                    <tr><td>Response to bronchodilators</td><td>Minimal change</td><td>May show some improvement</td></tr>
                </tbody>
            </table>

            <h4>Pneumonia</h4>
            <p><strong>Pneumonia</strong> is an infection of the lung parenchyma caused by bacteria, viruses, or fungi. It inflames the alveoli, filling them with fluid and inflammatory cells, impairing gas exchange. The classic presentation includes:</p>
            <ul>
                <li><strong>Fever and chills</strong> — Often high-grade with shaking rigors</li>
                <li><strong>Crackles (rales)</strong> — Heard on auscultation over the affected lung region; caused by fluid in the alveoli</li>
                <li><strong>Productive cough</strong> — Purulent (yellow/green/rust-colored) sputum</li>
                <li><strong>Pleuritic chest pain</strong> — Sharp pain worsened by deep breathing or coughing (if inflammation extends to the pleura)</li>
                <li><strong>Tachypnea, tachycardia, and hypoxemia</strong> — Dependent on severity</li>
                <li><strong>Dullness to percussion</strong> — Over consolidated lung tissue</li>
                <li><strong>Bronchial breath sounds</strong> — Heard over consolidated areas</li>
            </ul>
            <p>EMT management: place in position of comfort, titrate oxygen to SpO₂ ≥94%, assist ventilations if deteriorating, and transport. Be alert for sepsis criteria (altered mental status, fever, hypotension, tachycardia).</p>

            <h4>Pulmonary Embolism</h4>
            <p>A <strong>pulmonary embolism (PE)</strong> occurs when a thrombus (usually from the deep veins of the legs) travels to the pulmonary circulation, obstructing blood flow and causing ventilation-perfusion mismatch. PE can be rapidly fatal if massive. Classic presentation:</p>
            <ul>
                <li><strong>Sudden onset dyspnea</strong> — Often out of proportion to exam findings</li>
                <li><strong>Pleuritic chest pain</strong> — Sharp, worsens with inspiration</li>
                <li><strong>Tachypnea and tachycardia</strong> — Common compensatory responses</li>
                <li><strong>Hemoptysis</strong> — Coughing up blood (may occur with pulmonary infarction)</li>
                <li><strong>Hypoxemia</strong> — Low SpO₂ despite supplemental oxygen</li>
                <li><strong>Risk factors</strong> — Include prolonged immobility (long flights, bed rest), recent surgery, pregnancy, cancer, oral contraceptive use, obesity, smoking, and history of DVT</li>
                <li><strong>Signs of DVT</strong> — Unilateral leg swelling, warmth, erythema, and calf tenderness</li>
            </ul>
            <p><strong>Saddle embolus</strong> — a massive PE lodged at the bifurcation of the pulmonary artery — can cause abrupt cardiovascular collapse, syncope, and cardiac arrest (PEA). EMT management: high-flow oxygen, position of comfort, rapid transport, and be prepared to perform CPR.</p>

            <h4>Hyperventilation Syndrome</h4>
            <p><strong>Hyperventilation syndrome (HVS)</strong> is a pattern of rapid, deep breathing driven by anxiety or panic, not by a physiological need to increase oxygenation. The increased respiratory rate blows off excessive CO₂, leading to <strong>respiratory alkalosis</strong>, which causes:</p>
            <ul>
                <li>Perioral and distal extremity paresthesias (tingling around the mouth and in the fingers)</li>
                <li>Carpo-pedal spasm (tetany — painful cramping of the hands and feet)</li>
                <li>Lightheadedness and dizziness</li>
                <li>Chest tightness or palpitations</li>
            </ul>
            <p><strong>Critical:</strong> Hyperventilation syndrome is a DIAGNOSIS OF EXCLUSION. You must first rule out life-threatening causes of tachypnea including PE, asthma exacerbation, DKA, pneumonia, and hypoxia. <span style="color:var(--danger);font-weight:600;">NEVER use the "paper bag" rebreathing technique</span> — it is dangerous and has caused deaths from hypoxia. Management: calm reassurance, encourage the patient to slow their breathing, rule out organic causes, and transport if symptoms persist or diagnosis is uncertain.</p>

            <h4>EMT Management of Respiratory Emergencies</h4>
            <ul>
                <li><strong>Position of comfort:</strong> Sitting upright (tripod position) optimizes diaphragmatic excursion and air movement. Avoid supine positioning in patients with respiratory distress.</li>
                <li><strong>Oxygen titration:</strong> General patients: titrate to SpO₂ ≥94%. Known COPD patients: titrate to 88-92% to avoid blunting hypoxic drive. Use nasal cannula, simple mask, or non-rebreather as needed.</li>
                <li><strong>Bronchodilator administration:</strong> EMTs may administer a nebulized bronchodilator (e.g., albuterol 2.5 mg in 3 mL normal saline via small-volume nebulizer with O₂ at 6-8 L/min). Monitor for tachycardia and tremor. Repeat doses per protocol.</li>
                <li><strong>CPAP (Continuous Positive Airway Pressure):</strong> Used for pulmonary edema and COPD exacerbation. CPAP splints open alveoli, improves oxygenation, reduces work of breathing, and can decrease the need for intubation. Contraindications: apnea, hypotension, facial trauma, vomiting, altered mental status.</li>
                <li><strong>Assisted ventilation:</strong> If the patient deteriorates into respiratory failure (falling SpO₂, decreasing respiratory rate, declining mental status), begin BVM ventilation with supplemental oxygen and prepare for rapid transport.</li>
            </ul>
        </div>`,
        flashcards: [
            {
                question: "What are the classic signs of an acute asthma exacerbation?",
                answer: "Expiratory wheezing, accessory muscle use (retractions, nasal flaring, tripod), prolonged expiratory phase, tachypnea, tachycardia, inability to speak in full sentences, and pulsus paradoxus.",
                category: "Respiratory — Asthma"
            },
            {
                question: "What does a 'silent chest' in an asthma patient indicate?",
                answer: "A late and ominous sign of severe airflow limitation — the patient is too fatigued or obstructed to generate audible wheezing. It indicates impending respiratory failure requiring immediate assisted ventilation.",
                category: "Respiratory — Asthma"
            },
            {
                question: "How do you differentiate chronic vs acute dyspnea in a COPD patient?",
                answer: "Chronic dyspnea is gradual and stable at baseline. Acute exacerbation involves sudden worsening of dyspnea, increased sputum volume, purulent sputum (yellow/green), altered mental status (CO₂ retention), and declining SpO₂.",
                category: "Respiratory — COPD"
            },
            {
                question: "What are the classic signs of pneumonia?",
                answer: "Fever and chills, crackles (rales) on auscultation, productive cough with purulent sputum, pleuritic chest pain, tachypnea, hypoxemia, dullness to percussion, and bronchial breath sounds.",
                category: "Respiratory — Pneumonia"
            },
            {
                question: "What is the classic presentation of a pulmonary embolism?",
                answer: "Sudden onset dyspnea, pleuritic chest pain, tachypnea, tachycardia, hypoxemia, and possible hemoptysis. Risk factors include prolonged immobility, recent surgery, pregnancy, cancer, and oral contraceptive use.",
                category: "Respiratory — PE"
            },
            {
                question: "What is hyperventilation syndrome and how should an EMT manage it?",
                answer: "A pattern of rapid breathing driven by anxiety causing respiratory alkalosis (paresthesias, tetany, lightheadedness). It is a diagnosis of exclusion — rule out PE, asthma, DKA, and hypoxia first. NEVER use paper bag rebreathing. Manage with calm reassurance.",
                category: "Respiratory — Hyperventilation"
            },
            {
                question: "What is the role of CPAP in prehospital respiratory emergencies?",
                answer: "CPAP provides positive pressure to splint open alveoli, improving oxygenation and reducing work of breathing. It is used for pulmonary edema and severe COPD exacerbations. Contraindications include apnea, hypotension, and altered mental status.",
                category: "Respiratory — Management"
            },
            {
                question: "What is the target SpO₂ for oxygen titration in a known COPD patient vs a general patient?",
                answer: "General patients: titrate to SpO₂ ≥94%. Known COPD patients (chronic CO₂ retainers): titrate to 88-92% to avoid blunting the hypoxic respiratory drive.",
                category: "Respiratory — Management"
            }
        ],
        quiz: [
            {
                q: "A 22-year-old female with asthma is in respiratory distress. You hear faint expiratory wheezing, but her breath sounds are much quieter than they were 5 minutes ago. She is drowsy and using accessory muscles. What does this change MOST likely indicate?",
                options: [
                    "The asthma exacerbation is resolving with treatment",
                    "Impending respiratory failure — the 'silent chest'",
                    "She is developing pneumonia",
                    "The bronchodilator is working"
                ],
                correct: 1,
                explanation: "A silent chest with declining mental status signals severe airflow limitation and impending respiratory failure, not improvement."
            },
            {
                q: "A 68-year-old male with known COPD presents with acute onset of severe dyspnea, sharp right-sided chest pain, and an SpO₂ of 84% on room air. He recently returned from a 12-hour flight. What condition should you suspect?",
                options: [
                    "Acute asthma exacerbation",
                    "Pneumothorax",
                    "Pulmonary embolism",
                    "Hyperventilation syndrome"
                ],
                correct: 2,
                explanation: "Sudden dyspnea + pleuritic chest pain + hypoxemia + recent prolonged immobility (flight) is classic for pulmonary embolism."
            },
            {
                q: "[HARD] A 72-year-old female with COPD presents with acute dyspnea, SpO₂ 85%, and a respiratory rate of 28. Your partner applies a non-rebreather at 15 L/min. Five minutes later, the patient becomes drowsy and her respiratory rate drops to 10. What is the MOST likely cause?",
                options: [
                    "She is improving and able to rest now",
                    "Over-oxygenation has blunted her hypoxic respiratory drive",
                    "She has developed a pneumothorax from the oxygen mask",
                    "She is having a stroke"
                ],
                correct: 1,
                explanation: "In chronic CO₂ retainers, excessive O₂ can blunt the hypoxic drive, leading to hypoventilation and CO₂ narcosis. Titrate O₂ to 88-92%."
            }
        ],
        critical: [
            {
                id: "crit_5_1_1",
                scenario: "You are treating a 24-year-old male with a history of asthma who presents with severe respiratory distress. He is sitting in the tripod position, using accessory muscles, and is only able to speak 2-3 words between breaths. You hear loud expiratory wheezing on auscultation. His SpO₂ is 89% on room air, respiratory rate is 32, and heart rate is 124. You administer nebulized albuterol via small-volume nebulizer with oxygen. Five minutes after the treatment, the patient becomes noticeably quieter. His wheezing is now barely audible, his respiratory rate has dropped to 14, and he is increasingly drowsy. His SpO₂ has fallen to 84% despite ongoing oxygen.",
                question: "What does the 'silent chest' with declining mental status indicate, and what is your immediate action?",
                options: [
                    {t: "The albuterol has resolved the bronchospasm — the patient is improving; continue monitoring", f: "Incorrect. A silent chest with declining SpO₂ and mental status is the opposite of improvement — it signals decompensation."},
                    {t: "The patient has entered respiratory failure — begin assisted ventilation with BVM, request ALS backup, and expedite transport", f: "Correct. The silent chest, falling SpO₂, and drowsiness are signs of impending respiratory arrest. Assist ventilations immediately."}
                ],
                correct: 1,
                explanation: "A silent chest with declining mental status is a pre-arrest sign. The patient has exhausted his compensatory mechanisms. Begin BVM ventilation immediately, continue oxygen, and transport rapidly.",
                kpi: "Recognising respiratory decompensation"
            },
            {
                id: "crit_5_1_2",
                scenario: "You are dispatched to a 72-year-old female with difficulty breathing. Her family reports she has had a cough with green sputum for 4 days and spiked a fever of 102°F this morning. On exam, she is tachycardic (118 bpm), tachypneic (28/min), and has an SpO₂ of 86% on room air. Her blood pressure is 104/68. Auscultation reveals crackles in the right lower lobe. Her skin is warm and flushed. When asked simple questions, she is confused and unable to tell you what year it is — her family says this is new.",
                question: "Given the fever, productive cough, focal crackles, and new-onset confusion, what condition do you suspect and what is your priority treatment?",
                options: [
                    {t: "Simple febrile illness — provide cooling and transport non-emergently", f: "Incorrect. Focal crackles, productive cough, hypoxia, and new confusion suggest pneumonia with possible sepsis."},
                    {t: "Pneumonia with possible sepsis — apply high-flow oxygen, position of comfort, monitor for hypotension, and transport rapidly to the closest emergency department", f: "Correct. The presentation is classic for pneumonia with sepsis criteria (infection + altered mental status + tachypnea)."}
                ],
                correct: 1,
                explanation: "Pneumonia with sepsis requires early recognition, oxygen, and rapid transport. New confusion in a patient with infection is a red flag for sepsis.",
                kpi: "Sepsis recognition in pneumonia"
            },
            {
                id: "crit_5_1_3",
                scenario: "You respond to a 45-year-old female who suddenly developed sharp, stabbing chest pain and difficulty breathing while at rest. She is anxious, tachypneic (32/min), and her SpO₂ is 88% on room air. She has tachycardia at 122 bpm. She reports no cough or fever. Her past medical history includes a DVT two months ago for which she was prescribed blood thinners, but she stopped taking them last week. On exam, you note mild swelling in her left calf.",
                question: "Which condition is most consistent with this presentation and what is the appropriate management?",
                options: [
                    {t: "Anxiety attack — calm reassurance and reassess", f: "Incorrect. The hypoxia, tachycardia, and DVT history with medication non-compliance point strongly to pulmonary embolism."},
                    {t: "Pulmonary embolism — high-flow oxygen, position of comfort, rapid transport, and be prepared to manage cardiac arrest", f: "Correct. Sudden dyspnea + pleuritic pain + hypoxemia + DVT history + recent immobility is classic for PE."}
                ],
                correct: 1,
                explanation: "PE is a high-risk, time-sensitive condition. The patient has multiple risk factors including recent DVT and anticoagulant non-compliance. Provide oxygen and transport rapidly.",
                kpi: "PE recognition and risk stratification"
            }
        ]
    },
    {
        id: "c5s2",
        shortTitle: "5.2 Neurological Emergencies",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg> Neurological Emergencies</h3>

            <h4>Stroke (Cerebrovascular Accident)</h4>
            <p>Stroke is a sudden disruption of blood flow to the brain, causing neurological deficits. It is a <strong>time-critical emergency</strong> — "time is brain." There are two main types:</p>
            <ul>
                <li><strong>Ischemic stroke (~87%):</strong> A thrombus or embolus occludes a cerebral artery. Onset may be gradual (thrombotic) or sudden (embolic). Treatment: thrombolytics (tPA) within a narrow window (typically 0-4.5 hours from symptom onset).</li>
                <li><strong>Hemorrhagic stroke (~13%):</strong> A cerebral blood vessel ruptures, causing bleeding into the brain tissue or subarachnoid space. Associated with hypertension, aneurysm, or AV malformation. Presents with a sudden severe headache ("thunderclap"), vomiting, rapid deterioration, and higher mortality.</li>
            </ul>
            <p><strong>Stroke screening tools:</strong></p>
            <ul>
                <li><strong>Cincinnati Prehospital Stroke Scale (CPSS):</strong> Facial droop (have the patient smile), arm drift (close eyes, hold arms out for 10 seconds), speech (repeat a simple phrase). Any one abnormal finding = high probability of stroke.</li>
                <li><strong>FAST:</strong> Face, Arms, Speech, Time — same as CPSS with added emphasis on time of onset.</li>
                <li><strong>BEFAST:</strong> Balance (sudden dizziness/loss of coordination), Eyes (sudden vision loss/diplopia), Face (droop), Arms (weakness), Speech (slurred/difficulty), Time — expands FAST to detect posterior circulation strokes.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> Document the exact time the patient was LAST KNOWN WELL (not just when symptoms were discovered). This determines eligibility for thrombolytic therapy. If the patient woke up with symptoms, the last known well time is when they went to bed.
            </div>

            <h4>Seizures</h4>
            <p>A <strong>seizure</strong> is a transient episode of abnormal electrical activity in the brain. Seizure types include:</p>
            <ul>
                <li><strong>Tonic-clonic (grand mal):</strong> Generalized stiffening (tonic phase, 10-30 seconds) followed by rhythmic jerking (clonic phase, 1-3 minutes). Loss of consciousness, possible cyanosis, incontinence, and tongue biting. Postictal confusion follows.</li>
                <li><strong>Absence (petit mal):</strong> Brief (5-10 seconds) loss of awareness with staring, no convulsions. Common in children. May appear as daydreaming. No postictal state.</li>
                <li><strong>Focal (partial) seizures:</strong> Originate in one area of the brain. Simple focal: no loss of consciousness (e.g., jerking of one limb). Complex focal: altered awareness with automatisms (lip smacking, picking at clothes).</li>
            </ul>

            <h4>Status Epilepticus</h4>
            <p><strong>Status epilepticus</strong> is defined as a single seizure lasting <strong>>5 minutes</strong> or two or more seizures without a return to baseline consciousness in between. It is a <strong>life-threatening medical emergency</strong> — prolonged seizure activity can cause brain damage, rhabdomyolysis, hyperthermia, and respiratory failure. EMT management:</p>
            <ul>
                <li>Protect the airway — position the patient on their side (recovery position) if possible</li>
                <li>Do NOT restrain the patient or put anything in their mouth</li>
                <li>Clear the area of hazards</li>
                <li>Administer oxygen and monitor SpO₂</li>
                <li>Check blood glucose — treat hypoglycemia if present</li>
                <li>Request ALS for medication (benzodiazepines: diazepam, midazolam, lorazepam)</li>
                <li>Expedite transport</li>
            </ul>

            <h4>Seizure Precautions</h4>
            <ul>
                <li><strong>DO</strong> protect the head with padding</li>
                <li><strong>DO</strong> time the seizure duration</li>
                <li><strong>DO</strong> loosen tight clothing</li>
                <li><strong>DO</strong> stay with the patient until the seizure ends</li>
                <li><strong>DO NOT</strong> restrain the patient</li>
                <li><strong>DO NOT</strong> place anything in the mouth (including oral airways, tongue blades, or your fingers)</li>
                <li><strong>DO NOT</strong> attempt to hold the tongue — it cannot be swallowed</li>
                <li><strong>DO NOT</strong> give the patient anything by mouth during or immediately after the seizure</li>
            </ul>

            <h4>Postictal State</h4>
            <p>The <strong>postictal state</strong> is the recovery period following a seizure. It can last minutes to hours and is characterized by confusion, drowsiness, headache, nausea, transient focal deficits (Todd's paralysis — temporary weakness on one side), and amnesia for the event. Management: monitor airway and mental status, reorient the patient, check blood glucose, and assess for injury. Transport for evaluation of first-time seizures, prolonged postictal state, or any complication.</p>

            <h4>Altered Mental Status — The Differential (AEIOU-TIPS)</h4>
            <p>When confronted with a patient with altered mental status, use the <strong>AEIOU-TIPS</strong> mnemonic to systematically consider causes:</p>
            <table>
                <thead>
                    <tr><th>Letter</th><th>Causes</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>A</strong></td><td>Alcohol, Abuse (intoxication/withdrawal)</td></tr>
                    <tr><td><strong>E</strong></td><td>Epilepsy (seizure/postictal), Electrolytes (imbalance)</td></tr>
                    <tr><td><strong>I</strong></td><td>Insulin (hypo/hyperglycemia) — always check blood glucose!</td></tr>
                    <tr><td><strong>O</strong></td><td>Overdose, Oxygen (hypoxia — check SpO₂)</td></tr>
                    <tr><td><strong>U</strong></td><td>Uremia (kidney failure), Underdose (missed medications)</td></tr>
                    <tr><td><strong>T</strong></td><td>Trauma (head injury, intracranial bleed), Temperature (hyper/hypothermia), Tumor</td></tr>
                    <tr><td><strong>I</strong></td><td>Infection (meningitis, encephalitis, sepsis)</td></tr>
                    <tr><td><strong>P</strong></td><td>Psychiatric (acute psychosis, catatonia), Poison</td></tr>
                    <tr><td><strong>S</strong></td><td>Stroke (ischemic/hemorrhagic), Shock (hypoperfusion), Subarachnoid hemorrhage, SAH</td></tr>
                </tbody>
            </table>

            <h4>Meningitis</h4>
            <p><strong>Meningitis</strong> is inflammation of the meninges (the protective layers surrounding the brain and spinal cord), usually caused by bacterial or viral infection. Bacterial meningitis is a medical emergency. Key signs include:</p>
            <ul>
                <li><strong>Fever</strong> — Often high-grade</li>
                <li><strong>Nuchal rigidity</strong> — Neck stiffness and pain with flexion (cannot touch chin to chest)</li>
                <li><strong>Severe headache</strong> — Often described as the worst headache of life</li>
                <li><strong>Altered mental status</strong> — Confusion, lethargy, or irritability</li>
                <li><strong>Photophobia</strong> — Sensitivity to light</li>
                <li><strong>Petechial or purpuric rash</strong> — Especially in meningococcal meningitis (Neisseria meningitidis); a non-blanching rash is an ominous sign</li>
                <li><strong>Kernig sign</strong> — Pain with knee extension when the hip is flexed to 90 degrees</li>
                <li><strong>Brudzinski sign</strong> — Involuntary hip/knee flexion when the neck is flexed supine</li>
            </ul>
            <p>EMT management: rapid transport, droplet precautions (mask the patient and yourself), supportive care, and monitoring for deterioration.</p>

            <h4>Hypoglycemia and Altered Mental Status</h4>
            <p>Hypoglycemia (blood glucose <70 mg/dL) is a common and reversible cause of altered mental status. It can mimic stroke, seizure, or intoxication. Always check blood glucose in any patient with altered mental status, focal neurological deficits, or seizure activity. Signs include diaphoresis, tachycardia, tremors, confusion, combativeness, or unconsciousness. EMT management: if the patient is awake and can swallow, administer oral glucose. If unconscious or unable to swallow, administer glucagon IM (per protocol) and transport.</p>
        </div>`,
        flashcards: [
            {
                question: "What is the difference between ischemic and hemorrhagic stroke?",
                answer: "Ischemic stroke (~87%) is caused by a clot obstructing a cerebral artery. Hemorrhagic stroke (~13%) is caused by a ruptured vessel. Hemorrhagic stroke typically presents with a sudden severe headache ('thunderclap'), vomiting, and more rapid deterioration.",
                category: "Neurological — Stroke"
            },
            {
                question: "What does BEFAST stand for and how does it differ from FAST?",
                answer: "BEFAST: Balance (sudden dizziness/ataxia), Eyes (sudden vision loss/diplopia), Face (droop), Arm (weakness), Speech (slurred), Time. It adds Balance and Eyes to FAST to detect posterior circulation strokes.",
                category: "Neurological — Stroke"
            },
            {
                question: "Describe the phases of a tonic-clonic seizure.",
                answer: "Tonic phase (10-30 sec): stiffening of all muscles, loss of consciousness, possible cyanosis. Clonic phase (1-3 min): rhythmic jerking, incontinence, tongue biting. Postictal phase: confusion, drowsiness, headache, amnesia for the event.",
                category: "Neurological — Seizures"
            },
            {
                question: "What is status epilepticus and why is it an emergency?",
                answer: "A single seizure lasting >5 minutes or multiple seizures without return to baseline. It is life-threatening because prolonged seizure activity can cause brain damage, rhabdomyolysis, hyperthermia, and respiratory failure.",
                category: "Neurological — Seizures"
            },
            {
                question: "What are the key seizure precautions (DOs and DON'Ts)?",
                answer: "DO: protect the head, time the seizure, loosen clothing, stay with the patient. DO NOT: restrain, put anything in the mouth, hold the tongue, or give anything by mouth during/seizing.",
                category: "Neurological — Seizures"
            },
            {
                question: "What does the AEIOU-TIPS mnemonic help you remember?",
                answer: "Causes of altered mental status: Alcohol, Epilepsy/Electrolytes, Insulin (glucose), Overdose/Oxygen, Uremia, Trauma/Temperature/Tumor, Infection, Psychiatric/Poison, Stroke/Shock/SAH.",
                category: "Neurological — AMS"
            },
            {
                question: "What are the classic signs of bacterial meningitis?",
                answer: "Fever, nuchal rigidity (neck stiffness), severe headache, altered mental status, photophobia, and petechial/purpuric rash (meningococcal). Kernig and Brudzinski signs may be positive.",
                category: "Neurological — Meningitis"
            },
            {
                question: "How should an EMT manage a hypoglycemic patient with altered mental status who is unconscious?",
                answer: "Ensure airway patency, check blood glucose (<70 mg/dL confirms), administer glucagon IM (per protocol), position in recovery position, monitor for seizure activity, and transport. Do NOT attempt oral glucose in an unconscious patient.",
                category: "Neurological — Hypoglycemia"
            }
        ],
        quiz: [
            {
                q: "An EMT uses the Cincinnati Prehospital Stroke Scale to assess a patient. Which three findings are evaluated?",
                options: [
                    "Balance, vision changes, and headache",
                    "Facial droop, arm drift, and speech abnormalities",
                    "Grip strength, pupil reactivity, and gait",
                    "Blood pressure, heart rate, and respiratory rate"
                ],
                correct: 1,
                explanation: "The Cincinnati Prehospital Stroke Scale (CPSS) assesses facial droop, arm drift, and speech. BEFAST adds Balance and Eyes for posterior circulation strokes."
            },
            {
                q: "A patient is found unresponsive with rhythmic jerking of all four limbs. A witness states the jerking has been continuous for approximately 6 minutes. What is this condition called?",
                options: [
                    "Simple focal seizure",
                    "Absence seizure",
                    "Status epilepticus",
                    "Postictal state"
                ],
                correct: 2,
                explanation: "A seizure lasting >5 minutes defines status epilepticus — a life-threatening emergency requiring immediate intervention."
            },
            {
                q: "A 65-year-old male with diabetes is found confused and diaphoretic. He has slurred speech and right-sided arm weakness. His blood glucose is 48 mg/dL. After administering oral glucose (he is able to swallow), his symptoms completely resolve. What does this presentation most likely represent?",
                options: [
                    "An ischemic stroke that resolved spontaneously",
                    "Hypoglycemia mimicking a stroke — the glucose corrected the neurological deficits",
                    "A transient ischemic attack (TIA) unrelated to his blood sugar",
                    "A complex partial seizure with postictal weakness"
                ],
                correct: 1,
                explanation: "Hypoglycemia can mimic stroke with focal neurological deficits. Always check blood glucose in any patient with stroke-like symptoms — correction of hypoglycemia may resolve the deficits."
            }
        ],
        critical: [
            {
                id: "crit_5_2_1",
                scenario: "You are called to a 72-year-old female whose daughter found her on the living room floor 30 minutes ago. The patient is confused, has slurred speech, and cannot lift her left arm. Her left facial droop is obvious. She is able to follow simple commands with her right side. Blood glucose is 112 mg/dL. The daughter reports the patient was fine at breakfast 2 hours ago and has no history of seizures or diabetes. She takes medication for hypertension.",
                question: "Given the acute onset of unilateral weakness, facial droop, and speech deficit with a negative hypoglycemia screen, what is the most likely diagnosis and what is the critical information you need to document?",
                options: [
                    {t: "Bell's palsy — reassure and transport non-emergently", f: "Incorrect. Bell's palsy affects only the face (not arm/speech) and has a different onset pattern. This is a stroke until proven otherwise."},
                    {t: "Acute ischemic stroke — document the exact time the patient was LAST KNOWN WELL (2 hours ago at breakfast), perform BEFAST assessment, place in position of comfort, give oxygen if SpO₂ <94%, and transport rapidly to a stroke center", f: "Correct. Time of last known well determines thrombolytic eligibility. Rapid transport to a stroke-capable center is critical."}
                ],
                correct: 1,
                explanation: "Every minute counts in stroke care. Document last known well time precisely — this determines eligibility for tPA. Transport to the highest-level stroke center available.",
                kpi: "Stroke recognition and time documentation"
            },
            {
                id: "crit_5_2_2",
                scenario: "You respond to a 30-year-old male who had a seizure at work. Coworkers report he suddenly stiffened, fell to the ground, and began jerking rhythmically for approximately 3 minutes. He is now confused, drowsy, and does not know where he is. He has a small laceration on his tongue. His vital signs are stable and his blood glucose is 96 mg/dL. He has no prior history of seizures according to his coworkers.",
                question: "The patient is now in the postictal phase. What are your management priorities for this first-time seizure?",
                options: [
                    {t: "The seizure has ended and he is stable — no transport needed; have him follow up with his primary care doctor", f: "Incorrect. First-time seizures require emergency department evaluation to rule out serious underlying causes (tumor, bleed, infection, metabolic)."},
                    {t: "Monitor airway and mental status, provide reassurance, assess for injury (tongue laceration), check blood glucose, and transport for medical evaluation of this first-time seizure", f: "Correct. First-time seizures require ED evaluation. Continue monitoring for recurrent seizure activity during transport."}
                ],
                correct: 1,
                explanation: "Any first-time seizure warrants ED evaluation to identify the cause (tumor, bleed, infection, metabolic). Protect the airway, monitor closely for recurrent seizure, and transport.",
                kpi: "Seizure management and transport decision"
            },
            {
                id: "crit_5_2_3",
                scenario: "You are called to a college dormitory for a 19-year-old female with fever and confusion. Her roommate reports she has had a severe headache, fever, and has been vomiting for 24 hours. On exam, the patient is confused and irritable. Her temperature is 103.2°F. When you ask her to touch her chin to her chest, she cannot do so without severe pain. As you examine her further, you notice a non-blanching petechial rash on her trunk and lower extremities.",
                question: "What is the most likely diagnosis and what precautions should you take?",
                options: [
                    {t: "Viral upper respiratory infection — provide supportive care and transport routinely", f: "Incorrect. Fever + nuchal rigidity + petechial rash + altered mental status = meningococcal meningitis until proven otherwise."},
                    {t: "Bacterial meningitis (meningococcal) — place a mask on the patient, wear a mask yourself (droplet precautions), provide oxygen, monitor for deterioration, and transport rapidly", f: "Correct. Meningococcal meningitis is highly contagious via droplets and can progress rapidly. Apply droplet precautions and expedite transport."}
                ],
                correct: 1,
                explanation: "Bacterial meningitis, especially meningococcal, is a medical emergency requiring immediate antibiotics and droplet precautions. The classic triad is fever, nuchal rigidity, and altered mental status; a petechial rash is an ominous sign.",
                kpi: "Meningitis recognition and infection control"
            }
        ]
    },
    {
        id: "c5s3",
        shortTitle: "5.3 Endocrine Emergencies",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg> Endocrine Emergencies</h3>

            <h4>Diabetes Mellitus Overview</h4>
            <p><strong>Diabetes mellitus</strong> is a chronic metabolic disorder characterized by hyperglycemia resulting from defects in insulin secretion, insulin action, or both. The two main types:</p>
            <ul>
                <li><strong>Type 1:</strong> Autoimmune destruction of pancreatic beta cells → absolute insulin deficiency. Onset typically in childhood or adolescence. Patients are dependent on exogenous insulin and prone to DKA.</li>
                <li><strong>Type 2:</strong> Insulin resistance with relative insulin deficiency. Onset typically in adulthood (though increasing in younger populations). Managed with oral medications, diet, and sometimes insulin. More prone to HHS.</li>
            </ul>

            <h4>Hypoglycemia vs Hyperglycemia — Comparison</h4>
            <table>
                <thead>
                    <tr><th>Feature</th><th>Hypoglycemia (Low Blood Sugar)</th><th>Hyperglycemia (High Blood Sugar)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Onset</strong></td><td>Rapid (minutes to hours)</td><td>Slow (hours to days)</td></tr>
                    <tr><td><strong>Blood glucose</strong></td><td>&lt;70 mg/dL</td><td>>250 mg/dL (DKA); >600 mg/dL (HHS)</td></tr>
                    <tr><td><strong>Skin</strong></td><td>Pale, cool, clammy (diaphoretic)</td><td>Warm, dry, flushed</td></tr>
                    <tr><td><strong>Mentation</strong></td><td>Confusion, agitation, coma (early CNS effects)</td><td>Drowsy, lethargic, coma (late CNS effects)</td></tr>
                    <tr><td><strong>Breathing</strong></td><td>Normal or shallow</td><td>Deep, rapid (Kussmaul respirations in DKA)</td></tr>
                    <tr><td><strong>Breath odor</strong></td><td>Normal</td><td>Fruity/acetone (DKA with ketones)</td></tr>
                    <tr><td><strong>Thirst/urination</strong></td><td>Normal</td><td>Polyuria, polydipsia (frequent urination, extreme thirst)</td></tr>
                    <tr><td><strong>Heart rate</strong></td><td>Tachycardia (sympathetic response)</td><td>Tachycardia (dehydration)</td></tr>
                    <tr><td><strong>Common triggers</strong></td><td>Missed meal, excess insulin, exercise</td><td>Infection, missed insulin, illness (sick day)</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> If you cannot differentiate hypoglycemia from hyperglycemia in an altered patient with diabetes, <em>treat for hypoglycemia</em>. It is more immediately dangerous (brain damage can occur within 30 minutes) and can be rapidly corrected. Hyperglycemia develops slowly and is less immediately life-threatening.
            </div>

            <h4>Diabetic Ketoacidosis (DKA)</h4>
            <p><strong>DKA</strong> is a life-threatening complication of diabetes (more common in Type 1) characterized by hyperglycemia, ketosis, and metabolic acidosis. It develops over hours to days, often triggered by infection, missed insulin, or stress. Key features:</p>
            <ul>
                <li>Blood glucose typically 250-500 mg/dL (can be higher)</li>
                <li>Polyuria, polydipsia, and polyphagia (the "three P's")</li>
                <li><strong>Kussmaul respirations</strong> — Deep, rapid breathing as the body attempts to blow off CO₂ to compensate for acidosis</li>
                <li><strong>Fruity (acetone) breath odor</strong> — From ketones (acetoacetate) in the blood</li>
                <li>Nausea, vomiting, and abdominal pain — common presenting symptoms</li>
                <li>Warm, dry, flushed skin from dehydration</li>
                <li>Altered mental status ranging from alert to coma (correlates with severity)</li>
            </ul>

            <h4>Hyperosmolar Hyperglycemic State (HHS)</h4>
            <p><strong>HHS</strong> is a life-threatening complication seen in Type 2 diabetes. It presents with extreme hyperglycemia (>600 mg/dL) and severe dehydration but <em>without significant ketosis or acidosis</em>. Onset is slower (days to weeks) than DKA. Key features:</p>
            <ul>
                <li>Blood glucose often >600 mg/dL (can exceed 1,000 mg/dL)</li>
                <li>Profound dehydration — dry mucous membranes, poor skin turgor, hypotension, tachycardia</li>
                <li>Altered mental status common (lethargy, confusion, coma) — correlates with serum osmolality</li>
                <li>No Kussmaul respirations (no acidosis)</li>
                <li>No fruity breath odor (no ketones)</li>
                <li>Common triggers: infection, stroke, MI, non-adherence to medications, corticosteroids</li>
            </ul>

            <h4>Blood Glucose Monitoring</h4>
            <p>EMTs are trained to measure capillary blood glucose using a glucometer. Technique matters:</p>
            <ul>
                <li>Use the side of the fingertip (fewer nerve endings, less painful)</li>
                <li>Wipe away the first drop of blood (contains interstitial fluid that may dilute the sample)</li>
                <li>Use the second drop for testing</li>
                <li>Clean the site with alcohol and allow it to dry completely before pricking</li>
                <li>Document the reading and the time it was obtained</li>
                <li>Check blood glucose in ALL patients with: altered mental status, seizure, stroke-like symptoms, or known diabetes with any complaint</li>
            </ul>

            <h4>EMT Management of Diabetic Emergencies</h4>
            <p><strong>Hypoglycemia — awake and able to swallow:</strong></p>
            <ul>
                <li>Administer oral glucose (15-20 grams) — typically a single tube of glucose gel squeezed into the buccal pouch (between cheek and gum)</li>
                <li>Encourage the patient to swallow slowly; monitor for airway compromise</li>
                <li>Recheck blood glucose in 10-15 minutes; may repeat once per protocol</li>
                <li>Transport for evaluation, even if symptoms resolve</li>
            </ul>
            <p><strong>Hypoglycemia — unconscious or unable to swallow:</strong></p>
            <ul>
                <li>Do NOT give oral glucose — aspiration risk</li>
                <li>Administer <strong>glucagon IM</strong> (1 mg intramuscularly) — typically in the deltoid or anterolateral thigh</li>
                <li>Position the patient in the recovery position (lateral recumbent)</li>
                <li>Monitor for return of consciousness (usually within 5-15 minutes)</li>
                <li>Transport — the effects of glucagon are temporary; blood glucose will drop again</li>
            </ul>
            <p><strong>Hyperglycemia (DKA/HHS):</strong></p>
            <ul>
                <li>Support airway, breathing, and circulation</li>
                <li>Provide oxygen if hypoxic</li>
                <li>Transport for definitive care (IV fluids, insulin, electrolyte management)</li>
                <li>Do NOT give oral glucose (blood glucose is already high)</li>
                <li>Do NOT give insulin (out-of-hospital insulin administration is not in the EMT scope)</li>
            </ul>

            <h4>Sick Day Rules for Diabetic Patients</h4>
            <ul>
                <li>Check blood glucose more frequently (every 2-4 hours)</li>
                <li>Stay hydrated with sugar-free or low-sugar fluids</li>
                <li>Continue taking insulin — may need dose adjustment; NEVER stop insulin entirely</li>
                <li>If oral diabetes medications are used, continue as prescribed unless instructed otherwise</li>
                <li>If vomiting, unable to eat, or blood glucose persistently >250 mg/dL, seek medical attention</li>
                <li>Have a plan for ketone testing if prescribed</li>
                <li>Know when to call the healthcare provider — worsening symptoms, fever >101°F, persistent vomiting</li>
            </ul>
            <p>EMTs should be aware that non-adherence to sick day rules is a common precipitant for DKA and HHS.</p>

            <h4>Altered Mental Status and Diabetes</h4>
            <p>Altered mental status in a patient with diabetes is a diabetic emergency until proven otherwise. Key assessment points:</p>
            <ul>
                <li>Check blood glucose IMMEDIATELY as part of the primary assessment</li>
                <li>Obtain a history of diabetes type, usual medications, last meal, recent illness</li>
                <li>Look for a medical alert bracelet/necklace</li>
                <li>If blood glucose is low (<70 mg/dL) and patient has an altered mental status, <strong>treat immediately</strong></li>
                <li>If blood glucose is high (>250 mg/dL), assess for signs of DKA (Kussmaul, fruity breath, abdominal pain) vs HHS (profound dehydration, no ketosis)</li>
                <li>Document blood glucose readings and time of administration of any treatment</li>
            </ul>
        </div>`,
        flashcards: [
            {
                question: "What is the difference between DKA and HHS?",
                answer: "DKA: hyperglycemia + ketosis + acidosis, rapid onset (hours-days), Kussmaul respirations, fruity breath, seen in Type 1. HHS: extreme hyperglycemia (>600) without ketosis, slower onset (days-weeks), profound dehydration, seen in Type 2.",
                category: "Endocrine — Hyperglycemia"
            },
            {
                question: "What are the classic signs of hypoglycemia?",
                answer: "Rapid onset, pale cool clammy skin, tachycardia, confusion/agitation, hunger, tremor, weakness. Can progress to unconsciousness and seizures if untreated. Blood glucose <70 mg/dL.",
                category: "Endocrine — Hypoglycemia"
            },
            {
                question: "At what blood glucose level is hypoglycemia defined, and what is the treatment for an awake patient?",
                answer: "Hypoglycemia is defined as blood glucose <70 mg/dL. For an awake patient able to swallow: administer oral glucose gel (15-20 g) into the buccal pouch. Recheck in 10-15 minutes; may repeat once per protocol.",
                category: "Endocrine — Management"
            },
            {
                question: "How is glucagon administered and when is it indicated?",
                answer: "Glucagon 1 mg is administered IM (intramuscularly) in the deltoid or anterolateral thigh. It is indicated for unconscious hypoglycemic patients who cannot safely take oral glucose. Onset is 5-15 minutes.",
                category: "Endocrine — Management"
            },
            {
                question: "What are Kussmaul respirations and what do they indicate?",
                answer: "Deep, rapid breathing (panting-like pattern) that represents a compensatory respiratory alkalosis for metabolic acidosis. Classic finding in DKA — the body attempts to blow off CO₂ to correct the acidosis.",
                category: "Endocrine — DKA"
            },
            {
                question: "What are the 'three P's' of hyperglycemia?",
                answer: "Polyuria (frequent urination), Polydipsia (extreme thirst), Polyphagia (increased hunger despite weight loss). Caused by osmotic diuresis from high blood glucose.",
                category: "Endocrine — Hyperglycemia"
            },
            {
                question: "What are 'sick day rules' for diabetic patients?",
                answer: "Check blood glucose more frequently, stay hydrated, continue insulin (never stop entirely), seek medical help if vomiting/unable to eat or if blood glucose >250 mg/dL. Fever >101°F or worsening symptoms require provider contact.",
                category: "Endocrine — Sick Day Rules"
            },
            {
                question: "What is the most important first step when assessing an altered patient with diabetes?",
                answer: "Check blood glucose immediately as part of the primary assessment. Hypoglycemia can cause permanent brain damage within 30 minutes and is rapidly reversible with treatment. Treat low blood sugar first, worry about the cause second.",
                category: "Endocrine — Assessment"
            }
        ],
        quiz: [
            {
                q: "A 45-year-old female with Type 1 diabetes is found unconscious. Her skin is warm and dry, and her breath has a fruity odor. Her respiratory rate is 30 and her breaths are deep. Which condition is most likely?",
                options: [
                    "Hypoglycemic crisis",
                    "Diabetic ketoacidosis (DKA)",
                    "Hyperosmolar hyperglycemic state (HHS)",
                    "Pancreatitis"
                ],
                correct: 1,
                explanation: "Warm dry skin, fruity breath, and deep rapid (Kussmaul) respirations in a Type 1 diabetic are classic for DKA with compensation for metabolic acidosis."
            },
            {
                q: "An EMT administers oral glucose to a confused but conscious diabetic patient. Ten minutes later, the patient becomes unconscious. What is the EMT's next action?",
                options: [
                    "Wait another 10 minutes for the glucose to take effect",
                    "Administer oral glucose again since the first dose may have been insufficient",
                    "Protect the airway, administer glucagon IM, and begin transport",
                    "Start CPR and prepare the AED"
                ],
                correct: 2,
                explanation: "If a patient loses consciousness after oral glucose, protect the airway, give glucagon IM (since the patient can no longer safely swallow), and transport."
            },
            {
                q: "[HARD] A 62-year-old male with Type 2 diabetes is found lethargic with severe dehydration. His blood glucose is 940 mg/dL. He has no Kussmaul respirations and no fruity breath odor. Which condition is MOST consistent with these findings?",
                options: [
                    "Diabetic ketoacidosis (DKA)",
                    "Hyperosmolar hyperglycemic state (HHS)",
                    "Simple hyperglycemia without complications",
                    "Hypoglycemic rebound (Somogyi effect)"
                ],
                correct: 1,
                explanation: "Extreme hyperglycemia (>600) with severe dehydration but WITHOUT ketosis/acidosis (no Kussmaul, no fruity breath) in a Type 2 diabetic is classic for HHS."
            }
        ],
        critical: [
            {
                id: "crit_5_3_1",
                scenario: "You respond to a 28-year-old female with Type 1 diabetes found by her roommate. The roommate reports the patient was acting confused and irritable about 20 minutes ago and then became unresponsive. On exam, the patient is unconscious, breathing shallowly at 14/min, with pale, cool, diaphoretic skin. Her pulse is 112 and bounding. A medical alert bracelet indicates Type 1 diabetes. You quickly check her blood glucose and it reads 32 mg/dL.",
                question: "What is the correct management for an unconscious hypoglycemic patient?",
                options: [
                    {t: "Administer oral glucose gel into the buccal pouch despite unconsciousness", f: "Incorrect. Never give oral glucose to an unconscious patient — high aspiration risk. Oral glucose requires the patient to be awake and able to swallow."},
                    {t: "Open the airway, position in recovery position, administer glucagon 1 mg IM in the anterolateral thigh, monitor for return of consciousness, and transport", f: "Correct. Glucagon IM is the appropriate treatment for unconscious hypoglycemia. The patient should begin to awaken within 5-15 minutes."}
                ],
                correct: 1,
                explanation: "Unconscious hypoglycemia requires glucagon IM — never oral glucose. Position in recovery position, administer glucagon, monitor airway, and transport. Effects of glucagon are temporary.",
                kpi: "Hypoglycemia treatment — unconscious patient"
            },
            {
                id: "crit_5_3_2",
                scenario: "You are called to a 20-year-old male with Type 1 diabetes who has been vomiting for 2 days with abdominal pain. His friends say he ran out of insulin 3 days ago and hasn't been able to refill his prescription. On exam, he is drowsy and confused. His skin is warm, dry, and flushed. His respiratory rate is 32 with very deep breaths. You note a fruity odor on his breath. His blood glucose is 480 mg/dL. His SpO₂ is 97% on room air.",
                question: "What condition is this patient most likely experiencing, and what is the appropriate prehospital management?",
                options: [
                    {t: "Hypoglycemia — administer oral glucose and transport", f: "Incorrect. Blood glucose is 480 (very high, not low). The fruity breath and deep breathing indicate DKA, not hypoglycemia."},
                    {t: "Diabetic ketoacidosis (DKA) — support airway, provide high-flow oxygen if hypoxic (currently SpO₂ is adequate), position of comfort, and transport rapidly for IV fluids and insulin therapy", f: "Correct. DKA requires definitive hospital care. Support ABCs and transport. Do not give insulin in the prehospital setting (outside EMT scope)."}
                ],
                correct: 1,
                explanation: "DKA from insulin non-compliance with vomiting/dehydration. Transport for IV fluids, electrolyte replacement, and insulin therapy. Do not attempt to treat with oral glucose (would worsen hyperglycemia).",
                kpi: "DKA recognition and transport priority"
            },
            {
                id: "crit_5_3_3",
                scenario: "You respond to a 55-year-old female with Type 2 diabetes who is confused and lethargic. Her husband reports she has had a urinary tract infection for the past week and has been eating very little. She takes metformin and glyburide. On exam, her blood glucose is 65 mg/dL, skin is cool and clammy, and she is confused but able to follow simple commands. She is able to swallow safely.",
                question: "This patient has hypoglycemia likely triggered by poor oral intake during illness. What is the most appropriate treatment?",
                options: [
                    {t: "Administer oral glucose gel (15-20 g) into the buccal pouch, recheck blood glucose in 10-15 minutes, and transport", f: "Correct. She is awake and can swallow safely. Oral glucose is appropriate for this hypoglycemic patient."},
                    {t: "She has Type 2 diabetes so hypoglycemia is not possible — no treatment needed; transport for the infection instead", f: "Incorrect. Type 2 diabetics on sulfonylureas (glyburide) can absolutely become hypoglycemic, especially when eating poorly."}
                ],
                correct: 0,
                explanation: "Hypoglycemia in a Type 2 diabetic, especially on sulfonylureas with poor oral intake, requires prompt treatment. Oral glucose is appropriate since she is awake and can swallow safely.",
                kpi: "Hypoglycemia in Type 2 diabetes"
            }
        ]
    },
    {
        id: "c5s4",
        shortTitle: "5.4 Allergy & Anaphylaxis",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#syringe"/></svg> Allergy & Anaphylaxis</h3>

            <h4>Allergic Reaction vs. Anaphylaxis</h4>
            <p>Differentiating a mild allergic reaction from life-threatening anaphylaxis is a critical EMT skill. The key distinction is <strong>organ system involvement</strong>:</p>
            <ul>
                <li><strong>Mild allergic reaction:</strong> Limited to one organ system — typically skin only (urticaria/hives, itching, localized angioedema). No respiratory or cardiovascular compromise.</li>
                <li><strong>Anaphylaxis:</strong> A severe, potentially fatal systemic hypersensitivity reaction involving <strong>two or more organ systems</strong> (skin/mucosal, respiratory, cardiovascular, gastrointestinal) <strong>OR</strong> hypotension alone after exposure to a known allergen. Onset is usually rapid (minutes to hours after exposure).</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Anaphylaxis Criteria (2+ organ systems OR hypotension):</strong> If a patient has hives (skin) AND wheezing (respiratory) after exposure to an allergen — that is anaphylaxis. Do not wait for all signs to develop. Epinephrine is the ONLY first-line treatment.
            </div>

            <h4>Signs and Symptoms — The ABCs of Anaphylaxis</h4>
            <table>
                <thead>
                    <tr><th>Category</th><th>Findings</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>A — Airway</strong></td><td>Tongue swelling, lip/tongue/uvula angioedema, stridor (high-pitched inspiratory sound), hoarseness, sensation of throat closing, drooling, dysphagia</td></tr>
                    <tr><td><strong>B — Breathing</strong></td><td>Wheezing (bronchospasm), dyspnea, tachypnea, hypoxia, accessory muscle use, cyanosis (late finding)</td></tr>
                    <tr><td><strong>C — Circulation</strong></td><td>Hypotension (anaphylactic shock), tachycardia, weak/thready pulse, dizziness, syncope, pallor, cardiovascular collapse</td></tr>
                    <tr><td><strong>D — Disability</strong></td><td>Altered mental status (from hypoxia or hypotension), anxiety, sense of impending doom</td></tr>
                    <tr><td><strong>E — Exposure/Skin</strong></td><td>Urticaria (hives), flushing, erythema, pruritus (itching), angioedema (periorbital, perioral), diaphoresis</td></tr>
                    <tr><td><strong>GI</strong></td><td>Nausea, vomiting, abdominal cramps, diarrhea (from mast cell mediators in the gut)</td></tr>
                </tbody>
            </table>

            <h4>Common Triggers</h4>
            <ul>
                <li><strong>Foods:</strong> Peanuts, tree nuts, shellfish, fish, milk, eggs, soy, wheat</li>
                <li><strong>Insect stings:</strong> Bees, wasps, hornets, fire ants (Hymenoptera)</li>
                <li><strong>Medications:</strong> Penicillin, cephalosporins, NSAIDs, aspirin, ACE inhibitors, contrast dye</li>
                <li><strong>Latex:</strong> Gloves, catheters, tubing</li>
                <li><strong>Idiopathic:</strong> No identifiable trigger in some cases</li>
            </ul>

            <h4>Epinephrine Auto-Injector — The First-Line Treatment</h4>
            <p>Epinephrine is the ONLY medication that reverses all aspects of anaphylaxis simultaneously: it causes bronchodilation (B-2 effect), vasoconstriction (alpha effect to raise blood pressure), and decreases mediator release from mast cells. <strong>Delayed epinephrine administration is the most common cause of fatal anaphylaxis.</strong></p>
            <ul>
                <li><strong>Adult dose:</strong> 0.3 mg IM (auto-injector, typically EpiPen or generic equivalent)</li>
                <li><strong>Pediatric dose:</strong> 0.15 mg IM (for children weighing <30 kg / ~66 lb)</li>
                <li><strong>Route:</strong> Intramuscular (IM) — the <strong>anterolateral thigh</strong> (mid-outer thigh) is the only recommended site</li>
                <li><strong>Technique:</strong> Press firmly into the thigh (can be administered through clothing if necessary). Hold in place for 3-5 seconds (until the device signals complete). Massage the injection site for 10 seconds to promote absorption.</li>
                <li><strong>Repeat dosing:</strong> May be repeated every 5-15 minutes if symptoms persist, recur, or worsen. Many patients require a second dose before arrival at the hospital.</li>
                <li><strong>Side effects:</strong> Tachycardia, palpitations, pallor, tremor, anxiety, headache, hypertension — these are expected effects of epinephrine, not allergic reactions to the medication</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Critical Instruction:</strong> Administer epinephrine FIRST, THEN call medical direction if required by your protocol. Do not delay epinephrine to obtain orders — seconds matter in anaphylaxis. Most protocols have standing orders for epinephrine administration in suspected anaphylaxis.
            </div>

            <h4>Additional Medications and Management</h4>
            <ul>
                <li><strong>Antihistamines (H₁ blockers):</strong> Diphenhydramine (Benadryl) — helps with urticaria and itching but does NOT reverse airway edema, bronchospasm, or hypotension. It is a SECONDARY treatment, never a substitute for epinephrine. Often given PO or IM.</li>
                <li><strong>H₂ blockers:</strong> Famotidine (Pepcid) — some protocols include H₂ blockade as an adjunct to H₁ antihistamines.</li>
                <li><strong>Oxygen:</strong> High-flow oxygen via non-rebreather mask for all patients with respiratory symptoms or hypoxia. Be prepared to assist ventilation if the patient deteriorates.</li>
                <li><strong>Position:</strong> Position of comfort — sitting upright if respiratory distress, supine with legs elevated if hypotensive (if tolerated). Do NOT sit a hypotensive patient upright — it can worsen hypotension.</li>
                <li><strong>IV access:</strong> ALS providers may establish IV access for fluid boluses in hypotensive patients.</li>
            </ul>

            <h4>Biphasic Anaphylaxis</h4>
            <p><strong>Biphasic anaphylaxis</strong> is the recurrence of anaphylactic symptoms 4-12 hours after the initial reaction, even after complete resolution of the first episode. It occurs in up to 20% of cases. This is why ALL patients with anaphylaxis must be transported to the hospital and observed for a minimum of 6-12 hours, even if symptoms resolve completely after treatment. EMTs should monitor for recurrence during transport and be prepared to administer a second dose of epinephrine.</p>

            <h4>Transport Priority</h4>
            <p>Anaphylaxis is a high-priority transport (emergency / lights-and-siren when appropriate). Key points:</p>
            <ul>
                <li>Administer epinephrine <strong>before</strong> transport — do not delay the first dose</li>
                <li>Monitor ABCs continuously during transport</li>
                <li>Be prepared for the patient to deteriorate suddenly — airway edema can progress rapidly</li>
                <li>Have a second dose of epinephrine ready</li>
                <li>Provide a thorough handoff report including the trigger (if known), time of epinephrine administration, number of doses, and patient response</li>
                <li>Document all vital signs, interventions, and times meticulously</li>
            </ul>
        </div>`,
        flashcards: [
            {
                question: "What is the definition of anaphylaxis?",
                answer: "A severe, potentially fatal systemic hypersensitivity reaction involving 2+ organ systems (skin, respiratory, cardiovascular, GI) OR hypotension alone after exposure to a known allergen. Onset is rapid (minutes to hours).",
                category: "Allergy — Definition"
            },
            {
                question: "What are the ABC signs of anaphylaxis?",
                answer: "Airway: tongue swelling, stridor, hoarseness. Breathing: wheezing, dyspnea, hypoxia. Circulation: hypotension, tachycardia, shock. Skin: urticaria, flushing, angioedema. GI: nausea, vomiting, cramps.",
                category: "Allergy — Signs"
            },
            {
                question: "What is the first-line treatment for anaphylaxis?",
                answer: "Epinephrine IM 0.3 mg (adult) or 0.15 mg (pediatric <30 kg) into the anterolateral thigh. It is the ONLY medication that reverses all aspects of anaphylaxis. Delayed epinephrine is the most common cause of fatal anaphylaxis.",
                category: "Allergy — Epinephrine"
            },
            {
                question: "What is the dose of epinephrine for adults vs children?",
                answer: "Adults: 0.3 mg IM. Children <30 kg (~66 lb): 0.15 mg IM. Both are injected into the anterolateral thigh (mid-outer thigh).",
                category: "Allergy — Epinephrine"
            },
            {
                question: "Can epinephrine be repeated?",
                answer: "Yes. Epinephrine may be repeated every 5-15 minutes if symptoms persist, recur, or worsen. Many patients require a second dose before hospital arrival.",
                category: "Allergy — Epinephrine"
            },
            {
                question: "What is the role of antihistamines in anaphylaxis?",
                answer: "Antihistamines (H₁ blockers like diphenhydramine) are SECONDARY treatments. They help with urticaria and itching but do NOT reverse airway edema, bronchospasm, or hypotension. They are never a substitute for epinephrine.",
                category: "Allergy — Adjuncts"
            },
            {
                question: "What is biphasic anaphylaxis?",
                answer: "Recurrence of anaphylactic symptoms 4-12 hours after the initial reaction, even after complete resolution. Occurs in up to 20% of cases. All anaphylaxis patients must be transported and observed for 6-12 hours.",
                category: "Allergy — Biphasic"
            },
            {
                question: "What is the appropriate positioning for a patient in anaphylaxis?",
                answer: "Sitting upright if respiratory distress is the primary concern. Supine with legs elevated (Trendelenburg) if hypotensive. Do NOT sit a hypotensive patient upright — it can worsen hypotension.",
                category: "Allergy — Management"
            }
        ],
        quiz: [
            {
                q: "A 36-year-old male was stung by a bee 10 minutes ago. He has generalized urticaria, audible wheezing, and is hypotensive (BP 88/50). What is the FIRST treatment the EMT should administer?",
                options: [
                    "Diphenhydramine (Benadryl) IM",
                    "Epinephrine 0.3 mg IM in the anterolateral thigh",
                    "High-flow oxygen via non-rebreather",
                    "Supine positioning with legs elevated"
                ],
                correct: 1,
                explanation: "Epinephrine is the first-line treatment for anaphylaxis. This patient has 2+ organ systems involved (skin + respiratory + hypotension = anaphylaxis). Epinephrine MUST be given first."
            },
            {
                q: "A 22-year-old female ate a cookie containing peanuts and developed hives and mild wheezing. She is alert, has an SpO₂ of 95%, and her BP is 118/76. Is this anaphylaxis?",
                options: [
                    "No — this is a mild allergic reaction since her vitals are stable",
                    "Yes — involvement of 2 organ systems (skin + respiratory) defines anaphylaxis, regardless of stability",
                    "No — anaphylaxis requires hypotension to be present",
                    "Yes — any reaction to peanuts is automatically anaphylaxis"
                ],
                correct: 1,
                explanation: "Anaphylaxis is defined by 2+ organ systems (skin + respiratory), not by vital sign severity. Even with stable vitals, this meets the definition and requires epinephrine."
            },
            {
                q: "[HARD] A 30-year-old male with anaphylaxis received epinephrine 0.3 mg IM and improved significantly. Ten minutes later, his wheezing returns and his SpO₂ drops to 89%. His BP is now 96/60. What should the EMT do?",
                options: [
                    "Administer diphenhydramine and wait 15 minutes",
                    "Repeat epinephrine 0.3 mg IM immediately",
                    "Start CPR since the patient is deteriorating",
                    "Increase oxygen flow and continue monitoring"
                ],
                correct: 1,
                explanation: "Recurrent or persistent symptoms after epinephrine require a REPEAT dose every 5-15 minutes. Do not delay — epinephrine is the only medication that reverses anaphylactic physiology."
            }
        ],
        critical: [
            {
                id: "crit_5_4_1",
                scenario: "You respond to a restaurant for a 24-year-old female who ate shrimp 15 minutes ago. On arrival, she is sitting upright, anxious, and has audible wheezing. She has hives covering her chest and arms, and her lips are visibly swollen. She tells you, 'I can't breathe — my throat feels like it's closing.' Her SpO₂ is 91% on room air, BP is 104/68, heart rate is 118, and respiratory rate is 28. She has no known allergies per her friends, but admits she has never eaten shrimp before.",
                question: "Given her presentation (urticaria, lip swelling, wheezing, subjective throat tightness), what is the correct sequence of treatments?",
                options: [
                    {t: "Start with diphenhydramine IM to treat the allergic reaction, then reassess before considering epinephrine", f: "Incorrect. Antihistamines do not reverse airway edema or bronchospasm. Delaying epinephrine in favor of antihistamines is dangerous."},
                    {t: "Administer epinephrine 0.3 mg IM in the anterolateral thigh immediately, apply high-flow oxygen, position for comfort, and transport. This patient meets anaphylaxis criteria (skin + respiratory + airway)", f: "Correct. Epinephrine is the first and only appropriate first-line treatment for anaphylaxis. Delay increases mortality."}
                ],
                correct: 1,
                explanation: "This patient meets anaphylaxis criteria (2+ systems: skin + respiratory + airway edema). Epinephrine is the ONLY first-line treatment. Administer immediately and transport.",
                kpi: "Anaphylaxis recognition and epinephrine administration"
            },
            {
                id: "crit_5_4_2",
                scenario: "You are called to a 7-year-old boy (28 kg) who was stung by a wasp in his backyard. His mother says he has a known allergy to bee/wasp stings and has been prescribed an epinephrine auto-injector. On arrival, the child has hives on his face and arms, is wheezing, and is vomiting. He is anxious and crying. His SpO₂ is 93%, heart rate is 130, and respiratory rate is 32. The mother hands you the child's epinephrine auto-injector and asks you to administer it.",
                question: "What dose and route of epinephrine is appropriate for this child?",
                options: [
                    {t: "0.15 mg IM in the anterolateral thigh — the appropriate pediatric dose for a child weighing <30 kg", f: "Correct. The pediatric auto-injector (0.15 mg) is appropriate for this 28 kg child. Inject into the anterolateral thigh."},
                    {t: "0.3 mg IM in the deltoid — the adult dose is safe for a 7-year-old", f: "Incorrect. The adult dose (0.3 mg) is too high for a 28 kg child. Use the pediatric dose (0.15 mg). The deltoid is not the preferred site — use the anterolateral thigh."}
                ],
                correct: 0,
                explanation: "For children <30 kg, use the pediatric epinephrine auto-injector (0.15 mg) in the anterolateral thigh. This child meets anaphylaxis criteria (skin + respiratory + GI) and needs epinephrine immediately.",
                kpi: "Pediatric anaphylaxis dosing"
            },
            {
                id: "crit_5_4_3",
                scenario: "You are transporting a 34-year-old female with anaphylaxis who received epinephrine 0.3 mg IM 8 minutes ago. Her symptoms initially improved — the wheezing stopped and her SpO₂ rose from 88% to 97%. However, she now reports that her throat is feeling tight again, wheezing is returning on auscultation, and her SpO₂ has dropped to 91%. Her BP is 98/64, down from 118/74 after the first dose. You still have 12 minutes of transport time to the hospital and have a second epinephrine auto-injector available.",
                question: "The patient appears to be experiencing refractory or biphasic anaphylaxis. What is your next action?",
                options: [
                    {t: "Wait until you arrive at the hospital — the first dose will start working again soon", f: "Incorrect. Recurrent symptoms require re-treatment. Do not passively wait while the patient deteriorates."},
                    {t: "Repeat epinephrine 0.3 mg IM in the other anterolateral thigh, continue high-flow oxygen, monitor ABCs, and notify the receiving hospital", f: "Correct. Recurrent anaphylaxis requires repeat epinephrine every 5-15 minutes. The second dose should be given promptly."}
                ],
                correct: 1,
                explanation: "Recurrent or worsening symptoms after initial improvement require repeat epinephrine. Never withhold a second dose when symptoms recur. Notify the hospital of the patient's status and number of epinephrine doses given.",
                kpi: "Repeat epinephrine for refractory anaphylaxis"
            }
        ]
    },
    {
        id: "c5s5",
        shortTitle: "5.5 Toxicology & Overdose",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Toxicology & Overdose</h3>

            <p>Toxicologic emergencies occur when a patient is exposed to a substance — medication, drug of abuse, toxin, or poison — in a quantity that causes harmful effects. The EMT's priority in all overdose and poisoning situations is <strong>airway, breathing, and circulation (ABCs)</strong>. Identify the substance if possible, but never delay life-saving interventions to identify a toxin.</p>

            <h4>Opioid Overdose</h4>
            <p>Opioids (heroin, fentanyl, morphine, oxycodone, hydrocodone) bind to mu-opioid receptors in the central nervous system, causing respiratory depression, CNS depression, and miosis (pinpoint pupils). The classic opioid overdose triad is: <strong>respiratory depression, CNS depression (unconsciousness), and pinpoint pupils</strong>. Opioid-induced respiratory depression is the primary cause of death — patients may be breathing as slowly as 2–4 breaths per minute or be completely apneic.</p>
            <p><strong>Naloxone (Narcan)</strong> is a competitive antagonist at mu-opioid receptors. It reverses opioid effects within 1–3 minutes of administration. EMT doses typically range from <strong>0.4–2 mg</strong> administered via IM (intramuscular), IN (intranasal), or IV (intravenous) routes. IN administration is common in the prehospital setting because it avoids needle stick risk. The half-life of naloxone (30–90 minutes) is shorter than that of many opioids (hours), so patients may relapse into respiratory depression after the naloxone wears off — transport is mandatory even if the patient awakens.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Airway management comes FIRST. Before administering naloxone, ensure the airway is open and ventilate with a BVM if respirations are inadequate. Naloxone is not a substitute for ventilation — it treats the cause of respiratory depression, but the patient needs oxygen and ventilation support until the medication takes effect.
            </div>

            <h4>Alcohol Intoxication & Withdrawal</h4>
            <p><strong>Acute alcohol intoxication</strong> presents with slurred speech, ataxia, nystagmus, confusion, nausea/vomiting, and potentially respiratory depression at high blood alcohol levels. Intoxicated patients are at high risk for head injury (falls, assaults), hypoglycemia (alcohol impairs gluconeogenesis), and aspiration (vomiting with impaired gag reflex). Blood glucose measurement is essential in all altered patients.</p>
            <p><strong>Alcohol withdrawal</strong> occurs within 6–24 hours after the last drink in dependent individuals. Symptoms range from mild (tremor, anxiety, diaphoresis, tachycardia) to severe (hallucinations, seizures, <strong>delirium tremens</strong> — DTs). DTs are a medical emergency with a mortality rate of up to 5% if untreated, characterized by severe confusion, autonomic hyperactivity (fever, tachycardia, hypertension), and visual/tactile hallucinations.</p>

            <h4>Stimulant Overdose (Cocaine, Methamphetamine)</h4>
            <p>Stimulants cause excessive sympathomimetic activation: <strong>hypertension, tachycardia, tachypnea, hyperthermia, mydriasis (dilated pupils), diaphoresis, and agitation</strong>. Severe toxicity can cause seizures, myocardial ischemia/infarction (cocaine is a potent vasoconstrictor), aortic dissection, intracranial hemorrhage, hyperthermia, and rhabdomyolysis. Management focuses on cooling (if hyperthermic), protecting the airway, and rapid transport. Avoid physical restraint if possible — the isometric muscle contraction increases lactic acidosis and can worsen hyperthermia.</p>

            <h4>Sedative-Hypnotic Overdose</h4>
            <p>Benzodiazepines (diazepam, lorazepam, alprazolam), barbiturates, and other sedative-hypnotics cause CNS depression, respiratory depression, drowsiness, slurred speech, ataxia, and coma. Unlike opioid overdose, pupils are usually normal or small (not pinpoint), and the patient may be hypotensive due to peripheral vasodilation. Management is supportive: airway, breathing, circulation. There is no reversal agent for benzodiazepines in the EMT scope (flumazenil is used by advanced providers but is relatively contraindicated in chronic users due to seizure risk).</p>

            <h4>Antidepressant Overdose — TCA (Tricyclic Antidepressants)</h4>
            <p>Tricyclic antidepressants (amitriptyline, nortriptyline, imipramine) are among the most dangerous overdoses an EMT may encounter. They cause <strong>sodium channel blockade</strong> in the heart, producing <strong>wide QRS complex</strong> on ECG (>100 ms), ventricular arrhythmias, hypotension, seizures, and anticholinergic effects (hyperthermia, dilated pupils, flushed skin, urinary retention). A classic sign is the patient seizing and then arresting — <strong>seizure followed by cardiac arrest</strong> is characteristic of severe TCA toxicity. Aggressive airway management and rapid transport to a facility capable of sodium bicarbonate therapy are critical.</p>

            <h4>Acetaminophen (Tylenol) Overdose</h4>
            <p>Acetaminophen is the most common pharmaceutical overdose in the United States. Early symptoms (first 24 hours) are non-specific: nausea, vomiting, malaise, anorexia. The patient may appear deceptively well. Hepatic toxicity develops 24–72 hours post-ingestion and can progress to fulminant liver failure. The antidote is <strong>N-acetylcysteine (NAC)</strong>, which is most effective when given within 8 hours of ingestion. EMS role: obtain the time and amount of ingestion, transport to a facility with NAC availability, and provide supportive care.</p>

            <h4>Carbon Monoxide (CO) Poisoning</h4>
            <p>CO is a colorless, odorless gas produced by incomplete combustion (car exhaust, generators, furnaces, charcoal grills). It binds to hemoglobin with 200–250 times the affinity of oxygen, forming carboxyhemoglobin (COHb), which reduces oxygen-carrying capacity. Presenting symptoms include <strong>headache, nausea, dizziness, confusion, and chest pain</strong> — often described as "flu-like" symptoms in multiple household members. <strong>Pulse oximetry is unreliable</strong> in CO poisoning — standard pulse oximeters cannot distinguish between oxyhemoglobin and carboxyhemoglobin and will display a falsely elevated SpO₂. Treatment is <strong>high-flow oxygen via non-rebreather at 15 L/min</strong> to displace CO from hemoglobin (half-life decreases from 4–6 hours on room air to 60–90 minutes on 100% O₂). Transport to a facility with hyperbaric oxygen therapy may be indicated for severe cases.</p>

            <h4>Toxidrome Recognition</h4>
            <p>A <strong>toxidrome</strong> is a constellation of signs and symptoms that suggests a particular class of poison. Recognizing toxidromes helps you anticipate complications and communicate effectively with the receiving physician:</p>
            <table>
                <thead>
                    <tr><th>Toxidrome</th><th>Vital Signs</th><th>Pupils</th><th>Skin</th><th>Mental Status</th><th>Common Causes</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Opioid</strong></td><td>↓ RR, ↓ HR, ↓ BP</td><td>Pinpoint (miosis)</td><td>Normal, may be cyanotic</td><td>Coma / CNS depression</td><td>Heroin, fentanyl, oxycodone, morphine</td></tr>
                    <tr><td><strong>Sympathomimetic</strong></td><td>↑ HR, ↑ BP, ↑ RR, ↑ Temp</td><td>Dilated (mydriasis)</td><td>Diaphoretic, flushed</td><td>Agitation, paranoia, psychosis</td><td>Cocaine, methamphetamine, MDMA</td></tr>
                    <tr><td><strong>Cholinergic</strong></td><td>Variable</td><td>Pinpoint</td><td>Diaphoretic</td><td>Confusion, coma</td><td>Organophosphates, nerve agents</td></tr>
                    <tr><td><strong>Anticholinergic</strong></td><td>↑ HR, ↑ Temp</td><td>Dilated</td><td>Flushed, dry skin</td><td>Agitation, delirium, hallucinations</td><td>Antihistamines, TCA, antispasmodics</td></tr>
                    <tr><td><strong>Sedative-Hypnotic</strong></td><td>↓ RR, ↓ HR, ↓ BP</td><td>Normal to small</td><td>Normal</td><td>Somnolence, coma</td><td>Benzodiazepines, barbiturates, alcohol</td></tr>
                </tbody>
            </table>

            <h4>General Approach to the Overdose Patient</h4>
            <p>Follow the <strong>ABCDE</strong> approach: Airway (open and maintain), Breathing (assess, assist with BVM if inadequate), Circulation (pulse, BP, ECG monitoring if available), Disability (mental status, pupils, glucose), Exposure (full body assessment for patches, injection sites, pills, containers). Contact <strong>medical direction</strong> or <strong>poison control (1-800-222-1222)</strong> for specific guidance on unusual toxins. Bring all medications, pill bottles, syringes, and suspected substances to the hospital. Never induce vomiting — activated charcoal is rarely indicated in the prehospital setting and is not in the EMT scope of practice.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> A patient who awakens after naloxone may become agitated, combative, and may attempt to leave — this is "naloxone-precipitated withdrawal," not a resolved emergency. The opioid may return as naloxone wears off. Transport is mandatory. Document the pre-naloxone respiratory status and the patient's response.
            </div>
        </div>`,
        flashcards: [
            { question: "What is the classic opioid overdose triad?", answer: "Respiratory depression (bradypnea/apnea), CNS depression (unconsciousness), and pinpoint pupils (miosis).", category: "Opioid Overdose" },
            { question: "What is the EMT dose range and routes for naloxone?", answer: "0.4–2 mg via IM (intramuscular), IN (intranasal), or IV (intravenous). IN is common in prehospital settings to avoid needle sticks.", category: "Opioid Overdose" },
            { question: "Why must an opioid overdose patient be transported even if they awaken after naloxone?", answer: "Naloxone's half-life (30–90 min) is shorter than most opioids (hours). Patients can relapse into respiratory depression when naloxone wears off.", category: "Opioid Overdose" },
            { question: "What are the signs and symptoms of alcohol withdrawal delirium tremens (DTs)?", answer: "Severe confusion, autonomic hyperactivity (fever, tachycardia, hypertension), and visual/tactile hallucinations. Mortality up to 5% if untreated.", category: "Alcohol Emergencies" },
            { question: "How does stimulant overdose (cocaine/methamphetamine) typically present?", answer: "Hypertension, tachycardia, tachypnea, hyperthermia, dilated pupils, diaphoresis, agitation, and potential seizures, myocardial ischemia, or intracranial hemorrhage.", category: "Stimulant Overdose" },
            { question: "What ECG finding is characteristic of tricyclic antidepressant (TCA) overdose?", answer: "Wide QRS complex (>100 ms) due to sodium channel blockade. TCA overdose can cause seizure followed by cardiac arrest.", category: "Antidepressant Overdose" },
            { question: "Why is pulse oximetry unreliable in carbon monoxide poisoning?", answer: "Standard pulse oximeters cannot distinguish oxyhemoglobin from carboxyhemoglobin, displaying a falsely elevated SpO₂. Treatment is high-flow O₂ at 15 L/min.", category: "Carbon Monoxide" }
        ],
        quiz: [
            {
                q: "An EMT arrives to find a 28-year-old male unresponsive with shallow breathing at 6 breaths per minute and pinpoint pupils. What is the FIRST intervention?",
                options: [
                    "Administer naloxone immediately",
                    "Open the airway and begin BVM ventilation at 10–12 breaths per minute, then administer naloxone",
                    "Apply a non-rebreather mask at 15 L/min",
                    "Start chest compressions"
                ],
                correct: 1
            },
            {
                q: "A family of three presents with headache, nausea, dizziness, and confusion. Their furnace was serviced two days ago and has been running continuously. Pulse oximetry shows SpO₂ of 98% on all three patients. What is the most likely cause?",
                options: [
                    "Viral gastroenteritis",
                    "Carbon monoxide poisoning — standard pulse ox is falsely elevated; treat with high-flow oxygen",
                    "Food poisoning from a shared meal",
                    "Anxiety reaction to the cold weather"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 35-year-old female with a history of depression is found unresponsive with empty bottles of amitriptyline nearby. She is seizing and has a wide-complex tachycardia on the monitor. Which of the following BEST explains the relationship between these findings?",
                options: [
                    "The patient is having a psychiatric seizure unrelated to the overdose",
                    "Tricyclic antidepressant overdose causes sodium channel blockade leading to wide QRS, seizures, and a high risk of cardiac arrest — this is a critical emergency",
                    "The wide QRS is from hyperkalemia caused by the seizure activity",
                    "Amitriptyline overdose causes only CNS depression without cardiac effects"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_5_5_1",
                scenario: "You are dispatched to a residence for a 24-year-old male found unresponsive by his roommate. On arrival, the patient is lying supine on the floor with a respiratory rate of 4 breaths per minute, shallow. His SpO₂ is 80% on room air, pulse is 62, and pupils are constricted to 1 mm bilaterally. The roommate states the patient has a history of heroin use and may have 'used something' about an hour ago. There is a syringe on the nightstand. The patient does not respond to painful stimulus.",
                question: "What is the sequence of interventions for this patient?",
                options: [
                    {t: "Immediately administer naloxone 0.4–2 mg IM/IN, then begin BVM ventilation if breathing does not improve", f: "Incorrect — while naloxone is needed, airway and ventilation are the priority. The patient is severely hypoventilating (RR 4) and hypoxic (SpO₂ 80%). Opening the airway and providing BVM ventilation with supplemental O₂ must precede or occur simultaneously with naloxone administration. Naloxone can take 1–3 minutes to work — the patient needs oxygenation NOW."},
                    {t: "Open the airway with a head-tilt chin-lift, begin BVM ventilation at ~10 breaths/min with high-flow O₂ attached, then administer naloxone 0.4–2 mg IM/IN while continuing ventilations", f: "Correct — the ABC approach dictates that airway and breathing take priority. BVM ventilation provides immediate oxygen delivery and clears CO₂. Naloxone is administered concurrently but is not a substitute for ventilation. Continuous monitoring for return of spontaneous respirations is essential."}
                ],
                correct: 1,
                explanation: "The opioid overdose triad (respiratory depression, CNS depression, pinpoint pupils) is fully present. The most critical threat is hypoventilation causing hypoxia and hypercarbia. BVM ventilation at 10–12 breaths per minute with high-flow O₂ provides immediate life support. Naloxone should be administered while ventilating. The patient must be transported even if he awakens, as naloxone's duration of action is shorter than that of most opioids. Monitor for recurrent respiratory depression en route.",
                kpi: "Prioritizes airway and ventilation before medication administration in opioid overdose"
            },
            {
                id: "crit_5_5_2",
                scenario: "You are called to a house party for a 22-year-old male who is agitated, hot to the touch, and confused. Bystanders report he 'did a line of cocaine about 30 minutes ago and then started acting crazy.' Vital signs: BP 180/104, P 138, R 24, SpO₂ 96%, temperature 103.2°F rectally. His skin is flushed and diaphoretic, pupils are 6 mm bilaterally. He is yelling incoherently, thrashing on the bed, and has pulled off his shirt. As you attempt to assess him, he becomes more agitated and tries to get off the bed to leave. His friends are trying to hold him down.",
                question: "How should the EMT manage this patient?",
                options: [
                    {t: "Have the friends physically restrain the patient's arms and legs to enable IV access and cooling measures", f: "Incorrect — physical restraint in stimulant overdose, especially against resistance, causes isometric muscle contraction that increases heat production, lactic acidosis, and the risk of rhabdomyolysis and cardiac arrest. The patient already has severe hyperthermia (103.2°F), tachycardia (138), and hypertension (180/104) — restraint will worsen all of these."},
                    {t: "Request law enforcement assistance for safety, clear the room of excessive bystanders, attempt verbal de-escalation from a calm distance, apply cool packs to the neck/axillae/groin for cooling, and transport with lights and sirens to the emergency department", f: "Correct — management priorities are: scene safety (request law enforcement), reducing stimulation, active cooling (evaporative cooling with mist and fan, cold packs to major vessels), monitoring for seizures, and rapid transport. Avoid physical restraint. Consider high-flow oxygen and cardiac monitoring if available."}
                ],
                correct: 1,
                explanation: "This patient is experiencing severe sympathomimetic toxicity from cocaine. The combination of extreme hypertension, tachycardia, hyperthermia, and agitation creates a high risk for myocardial ischemia, intracranial hemorrhage, seizures, and cardiac arrest. Active cooling is a priority — hyperthermia worsens every aspect of stimulant toxicity. Physical restraint should be avoided or used minimally because isometric muscle exertion generates more heat and metabolic acidosis. Law enforcement presence may be necessary for patient and provider safety. Transport to a facility capable of managing acute stimulant toxicity.",
                kpi: "Recognizes the dangers of physical restraint in hyperthermic stimulant overdose"
            },
            {
                id: "crit_5_5_3",
                scenario: "You are transporting a 45-year-old female who intentionally ingested an unknown quantity of her husband's heart medications 90 minutes ago. She is awake, alert, and denies any symptoms — 'I feel fine, I just want to go to sleep.' She admits to taking 'some of his pills' but cannot identify them. Her vital signs are currently: BP 112/74, P 72, R 16, SpO₂ 99%. You locate several empty pill bottles: metoprolol (beta blocker), lisinopril (ACE inhibitor), and amiodarone (antiarrhythmic). The patient is now becoming drowsy and her heart rate has dropped to 58.",
                question: "What is the EMT's concern and appropriate action?",
                options: [
                    {t: "The patient appears to be relaxing after the emotional stress of the overdose — drowsiness is expected. Continue transport without intervention since vital signs are stable", f: "Incorrect — beta blocker and amiodarone overdoses can cause delayed cardiac toxicity including severe bradycardia, heart block, and hypotension. The patient's report of 'feeling fine' in the first 90 minutes is deceptive — deterioration can occur rapidly. The decreasing heart rate (72 → 58) is a red flag."},
                    {t: "The patient may be developing toxicity from beta blocker overdose (metoprolol), which can cause bradycardia, hypotension, and altered mental status. Closely monitor vital signs every 5 minutes, prepare for possible deterioration, contact medical direction, and ensure rapid transport to a cardiac-capable emergency department", f: "Correct — beta blocker overdose causes bradycardia and negative inotropy, with delayed toxicity possible. Amiodarone also has negative chronotropic effects. The combination of multiple cardiac medications is especially dangerous. The EMT should monitor for hypotension, worsening bradycardia, and altered mental status; have atropine available if in scope; and provide early notification to the receiving hospital."}
                ],
                correct: 1,
                explanation: "Patients with beta blocker and calcium channel blocker overdoses can appear well initially before decompensating into profound bradycardia and shock. Polypharmacy overdoses involving cardiac medications warrant a high index of suspicion. The EMT should continuously reassess ABCs, obtain a 12-lead ECG if available, monitor blood pressure frequently, and alert the receiving hospital early. All pill bottles must be brought to the hospital. Contact medical direction or poison control (1-800-222-1222) for specific management guidance.",
                kpi: "Recognizes delayed toxicity in polypharmacy overdose despite initial normal vital signs"
            }
        ]
    },
    {
        id: "c5s6",
        shortTitle: "5.6 Gastrointestinal & Abdominal",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Gastrointestinal & Abdominal Emergencies</h3>

            <p>Abdominal complaints are among the most common reasons patients call 9-1-1. The abdominal cavity contains multiple organ systems, and pain can arise from the gastrointestinal, hepatobiliary, genitourinary, vascular, and reproductive systems. A systematic approach to abdominal pain assessment helps the EMT identify life-threatening conditions and provide appropriate care.</p>

            <h4>Abdominal Pain Assessment — Location, Quality, Timing</h4>
            <p>When assessing abdominal pain, use the <strong>OPQRST</strong> and <strong>SAMPLE</strong> frameworks with attention to:</p>
            <ul>
                <li><strong>Location:</strong> Where did the pain start? Has it moved (e.g., periumbilical to RLQ in appendicitis)? Use the four abdominal quadrants to describe location.</li>
                <li><strong>Quality:</strong> Sharp/dull/cramping/colicky/burning. Colicky pain (waves of severe pain) suggests hollow organ obstruction (kidney stone, bowel obstruction). Constant severe pain suggests inflammation or ischemia.</li>
                <li><strong>Timing:</strong> When did it start? Sudden vs. gradual onset? Constant vs. intermittent? Pain that awakens the patient from sleep is more concerning.</li>
                <li><strong>Radiation:</strong> Pain radiating to the right shoulder suggests biliary or hepatic origin (phrenic nerve irritation). Pain radiating to the back suggests pancreatitis or AAA.</li>
                <li><strong>Associated symptoms:</strong> Nausea, vomiting, diarrhea, constipation, fever, blood in stool/vomitus.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> In the prehospital setting, do not administer anything by mouth (NPO), do not give pain medications (outside scope), and do not apply direct heat or cold to the abdomen. Transport the patient in a position of comfort — typically on their side with knees drawn up if there is vomiting risk, or supine if hypotensive.
            </div>

            <h4>Peritonitis — Signs of Peritoneal Irritation</h4>
            <p>Peritonitis is inflammation of the peritoneal lining, usually caused by infection, perforation of a hollow organ, or chemical irritation (e.g., ruptured appendix, perforated ulcer, pancreatitis). It is a surgical emergency. Classic signs include:</p>
            <ul>
                <li><strong>Guarding:</strong> Involuntary contraction of abdominal muscles over the inflamed area. Voluntary guarding (the patient tightens muscles intentionally) may indicate fear or anxiety; involuntary guarding persists despite distraction and suggests true peritoneal irritation.</li>
                <li><strong>Rigidity:</strong> Board-like hardness of the abdominal wall — severe, involuntary guarding. A rigid, board-like abdomen is a sign of diffuse peritoneal irritation and is a surgical emergency.</li>
                <li><strong>Rebound tenderness:</strong> Pain that worsens when pressure is released from the abdomen. This is a classic sign of peritonitis but may be difficult to assess in the prehospital setting.</li>
                <li>The patient often lies very still and prefers to avoid any movement — peritoneal irritation is aggravated by motion. This contrasts with colicky pain (kidney stone, bowel obstruction), where the patient writhes and cannot find a comfortable position.</li>
            </ul>

            <h4>Gastrointestinal Bleeding</h4>
            <p>GI bleeding ranges from minor to immediately life-threatening. The source and appearance guide assessment:</p>
            <table>
                <thead>
                    <tr><th>Type</th><th>Appearance</th><th>Likely Source</th><th>Concern</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hematemesis</strong></td><td>Vomiting blood — bright red ("coffee-ground" if partially digested)</td><td>Upper GI: esophageal varices, gastric ulcer, Mallory-Weiss tear</td><td>Can be massive; variceal bleeding has high mortality</td></tr>
                    <tr><td><strong>Melena</strong></td><td>Black, tarry, foul-smelling stools</td><td>Upper GI bleeding (blood digested as it passes through intestines)</td><td>Indicates at least 50–100 mL of blood loss; may be slow or brisk</td></tr>
                    <tr><td><strong>Hematochezia</strong></td><td>Bright red or maroon blood per rectum</td><td>Lower GI bleeding (hemorrhoids, diverticulitis, colon cancer, AV malformation)</td><td>May be massive in diverticular bleeding</td></tr>
                </tbody>
            </table>
            <p><strong>Management:</strong> Establish IV access (if in scope), administer oxygen if signs of shock or hypoxia, monitor vitals closely, and transport promptly. Patients with GI bleeding can deteriorate rapidly — the first sign of significant bleeding may be orthostatic hypotension (dizziness upon sitting/standing) or syncope. Do not give anything by mouth.</p>

            <h4>Acute Abdomen Conditions</h4>

            <h5>Appendicitis</h5>
            <p>Inflammation of the appendix, most common in adolescents and young adults (peak age 10–30). Classic presentation: <strong>periumbilical pain that migrates to the right lower quadrant (RLQ)</strong>, associated with nausea, vomiting, anorexia (loss of appetite), and low-grade fever. Pain may be worsened by coughing or movement (McBurney's point tenderness). Atypical presentations are common in elderly patients and young children.</p>

            <h5>Cholecystitis (Gallbladder Inflammation)</h5>
            <p>Presents with severe <strong>right upper quadrant (RUQ) pain</strong> that may radiate to the right shoulder or scapula. Often occurs after a fatty meal. Associated symptoms include nausea, vomiting, fever, and tenderness to palpation in the RUQ (Murphy's sign). More common in women, particularly those who are "fair, fat, forty, and fertile" — though it can occur in any patient with gallstones.</p>

            <h5>Pancreatitis</h5>
            <p>Inflammation of the pancreas, most commonly caused by <strong>gallstones or alcohol abuse</strong>. Presents with severe <strong>epigastric pain that radiates to the back</strong>, worsened by lying supine; the patient often prefers to sit up and lean forward. Associated with nausea, vomiting, fever, and tachycardia. Severe pancreatitis can cause hypovolemic shock from third-spacing of fluids.</p>

            <h5>Bowel Obstruction</h5>
            <p>Mechanical blockage of the intestinal tract. Presents with <strong>colicky abdominal pain, distention, nausea/vomiting (often bilious or feculent), and constipation/inability to pass gas</strong>. High-pitched or tinkling bowel sounds may be heard early; bowel sounds may be absent in late obstruction. Strangulated bowel (ischemic) is a surgical emergency with high mortality.</p>

            <h4>Abdominal Aortic Aneurysm (AAA)</h4>
            <p>AAA is a dilation of the abdominal aorta that can rupture with catastrophic bleeding. It is most common in <strong>men over 65 with hypertension, smoking history, and atherosclerotic disease</strong>. A leaking or ruptured AAA presents with:</p>
            <ul>
                <li><strong>Severe tearing or ripping pain</strong> in the abdomen, back, or flank</li>
                <li><strong>Pulsatile abdominal mass</strong> — the most specific finding (may be felt on palpation above the umbilicus)</li>
                <li><strong>Shock out of proportion to visible blood loss</strong> — the retroperitoneum can hold several liters of blood</li>
                <li>Pain that radiates to the back or groin</li>
                <li>Syncope or near-syncope</li>
            </ul>
            <p><strong>Management:</strong> Do NOT palpate deeply if AAA is suspected — deep palpation may precipitate rupture. Transport emergently to a facility with vascular surgery capability. Keep the patient supine or in a position of comfort. Give oxygen and establish IV access en route. The mortality rate for ruptured AAA exceeds 50% even with surgical intervention.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Do NOT give anything by mouth (NPO) to any patient with abdominal pain. Do not administer laxatives or enemas. Do not apply heat or cold to the abdomen. Transport in position of comfort. These patients often need surgery — keep them NPO for the operating room.
            </div>
        </div>`,
        flashcards: [
            { question: "What are the three classic signs of peritonitis?", answer: "Guarding (involuntary muscle contraction), rigidity (board-like abdomen), and rebound tenderness (pain worsens when pressure is released).", category: "Peritonitis" },
            { question: "What is the difference between melena and hematochezia?", answer: "Melena is black, tarry stool from upper GI bleeding (blood digested during passage). Hematochezia is bright red/maroon blood per rectum from lower GI bleeding.", category: "GI Bleeding" },
            { question: "What is the classic presentation of appendicitis?", answer: "Periumbilical pain that migrates to the right lower quadrant (RLQ), with nausea, vomiting, anorexia, and low-grade fever. McBurney's point tenderness.", category: "Appendicitis" },
            { question: "How does acute cholecystitis typically present?", answer: "Severe right upper quadrant (RUQ) pain radiating to the right shoulder/scapula, often after a fatty meal. Associated with nausea, vomiting, and fever. More common in women.", category: "Cholecystitis" },
            { question: "What are the signs and symptoms of pancreatitis?", answer: "Severe epigastric pain radiating to the back, worsened by lying supine (relieved by leaning forward), with nausea, vomiting, and fever. Most common causes: gallstones and alcohol.", category: "Pancreatitis" },
            { question: "What is the most specific physical finding for an abdominal aortic aneurysm (AAA)?", answer: "A pulsatile abdominal mass on palpation above the umbilicus. However, do NOT palpate deeply if AAA is suspected — this may precipitate rupture.", category: "AAA" },
            { question: "How should an EMT manage a patient with signs of GI bleeding and shock?", answer: "Establish IV access if in scope, administer oxygen, monitor vitals closely, keep NPO, transport promptly. Do not give anything by mouth. Patients can deteriorate rapidly from GI bleeding.", category: "GI Bleeding" }
        ],
        quiz: [
            {
                q: "A 30-year-old male presents with severe abdominal pain that started around his belly button 8 hours ago and has now moved to the right lower quadrant. He has nausea, vomiting, and a low-grade fever of 100.4°F. What is the most likely diagnosis?",
                options: [
                    "Cholecystitis",
                    "Appendicitis — periumbilical pain migrating to RLQ is the classic presentation",
                    "Pancreatitis",
                    "Diverticulitis"
                ],
                correct: 1
            },
            {
                q: "A 70-year-old male with a history of hypertension and smoking complains of sudden-onset severe 'tearing' pain in his abdomen radiating to his back. He is pale and diaphoretic. BP is 90/58, P 112. On palpation, you note a pulsatile mass in his upper abdomen. What is the MOST appropriate action?",
                options: [
                    "Palpate deeply to confirm the pulsatile mass, then transport",
                    "Do not palpate deeply, provide high-flow oxygen, establish IV access en route, and transport emergently to a vascular surgery-capable facility",
                    "Apply cold packs to the abdomen to reduce swelling",
                    "Give the patient water to drink to rule out indigestion"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 55-year-old female with a history of atrial fibrillation on warfarin presents with coffee-ground emesis and black, tarry stools. Her BP is 104/68 supine but drops to 84/52 when she sits up. P 108, R 20. What do these findings indicate?",
                options: [
                    "The patient has a minor upper GI bleed that is resolving on its own",
                    "The patient has a significant upper GI bleed with orthostatic hypotension indicating substantial blood loss — transport with IV access and close monitoring",
                    "The coffee-ground emesis indicates the bleeding has stopped and is no longer a concern",
                    "The vital sign changes are from anxiety and do not indicate volume loss"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_5_6_1",
                scenario: "You are dispatched to a 24-year-old male with sudden-onset severe abdominal pain. He is lying completely still on the couch, breathing shallowly, and is reluctant to move. He states the pain started 4 hours ago in the center of his abdomen but has now moved to the right lower side. He has vomited twice and has no appetite. Vital signs: BP 126/78, P 102, R 18 and shallow, SpO₂ 98%, temperature 100.6°F. When you gently palpate the right lower quadrant, he winces and the muscles in that area feel tight and rigid. He jerks when you release pressure quickly.",
                question: "What does this clinical picture suggest, and what is the appropriate management?",
                options: [
                    {t: "This is likely gastritis from something he ate — encourage fluids and transport without urgency", f: "Incorrect — the migration of pain (periumbilical to RLQ), fever, tachycardia, guarding, and rebound tenderness are classic for appendicitis with peritoneal irritation. Gastritis does not produce guarding, rebound tenderness, or pain migration."},
                    {t: "This patient has signs of peritoneal irritation consistent with acute appendicitis — the migration of pain, guarding, rebound tenderness, and fever are classic. Transport with NPO status, position of comfort (lying still with knees drawn up), and close monitoring. Do not give anything by mouth", f: "Correct — the classic triad of periumbilical-to-RLQ pain migration, anorexia, and RLQ tenderness has 90% positive predictive value for appendicitis in young adults. Guarding and rebound indicate peritoneal involvement. Surgical evaluation is needed."}
                ],
                correct: 1,
                explanation: "This presentation is textbook acute appendicitis with localized peritonitis. The patient's preference to lie completely still (peritoneal irritation worsens with movement) is an important clinical clue distinguishing peritonitis from colicky pain. Management priorities: keep NPO, transport in position of comfort (supine with knees bent to relax abdominal wall), monitor vital signs, and provide a clear report to the receiving facility. Fever and tachycardia suggest inflammation may be progressing. Ruptured appendix is a surgical emergency with high morbidity.",
                kpi: "Recognizes peritoneal signs including guarding, rigidity, and rebound tenderness"
            },
            {
                id: "crit_5_6_2",
                scenario: "You respond to a nursing home for an 82-year-old male with weakness and near-syncope. The staff report he has been complaining of abdominal discomfort for two days and had a dark, tarry stool this morning. He has a history of hypertension, coronary artery disease, and osteoarthritis for which he takes 'anti-inflammatory medication' (naproxen, an NSAID). Vital signs: BP 100/64 sitting, P 104, R 18, SpO₂ 96%. When you sit him up for transport, he becomes dizzy and his BP drops to 84/50. He then vomits approximately 300 mL of dark material that resembles coffee grounds.",
                question: "What is the likely source of bleeding and how should the EMT manage this?",
                options: [
                    {t: "The dark tarry stool and coffee-ground emesis suggest an upper GI bleed — likely a gastric ulcer exacerbated by NSAID use. This patient has orthostatic hypotension indicating significant blood loss. Place supine, high-flow O₂, IV access en route, and transport emergently", f: "Correct — NSAIDs (naproxen) inhibit mucosal prostaglandins, predisposing to gastric ulcer formation and bleeding. Melena (tarry stool) indicates at least 50–100 mL of blood loss. Coffee-ground emesis (hematemesis) confirms upper GI source. Orthostatic hypotension (>20 mmHg systolic drop upon sitting) indicates significant volume loss and need for rapid transport."},
                    {t: "The patient likely has a lower GI bleed from hemorrhoids — the coffee-ground emesis is unrelated. Give oral fluids and transport non-emergently", f: "Incorrect — melena is almost always from an upper GI source (blood must traverse the small intestine to become black and tarry). Coffee-ground emesis confirms upper GI bleeding. Lower GI bleeds (e.g., hemorrhoids) produce bright red blood (hematochezia), not melena. NSAID-induced gastric ulcers are a common cause of upper GI bleeding in the elderly."}
                ],
                correct: 0,
                explanation: "This patient has a significant upper GI bleed, likely from a naproxen-induced gastric ulcer. The combination of melena and coffee-ground emesis is diagnostic of an upper GI source. Orthostatic hypotension suggests at least 15–20% blood volume loss (Class II hemorrhage). The elderly patient has limited physiologic reserve and may decompensate rapidly. Management: supine position (Trendelenburg if hypotensive), high-flow oxygen, IV access, serial vital signs every 5 minutes, and emergent transport. Bring the naproxen bottle to the hospital. Notify the receiving facility of the suspected GI bleed with hemodynamic instability.",
                kpi: "Recognizes upper GI bleeding from melena and hematemesis with orthostatic hypotension"
            },
            {
                id: "crit_5_6_3",
                scenario: "You are called to a 72-year-old male who collapsed in his garage. He is conscious but pale, diaphoretic, and complaining of severe 'ripping' pain in his lower abdomen and lower back that started suddenly about 20 minutes ago. He has a history of hypertension, hyperlipidemia, and smoked two packs per day for 45 years. Vital signs: BP 82/56, P 118 and weak, R 24, SpO₂ 93%. His abdomen is tender in the midline above the umbilicus, where you can feel a firm, pulsatile mass approximately 6 cm wide. The patient is becoming increasingly confused.",
                question: "What is the MOST likely diagnosis and the priority intervention?",
                options: [
                    {t: "This is likely a kidney stone causing referred back pain — the pulsatile mass is the patient's aortic pulsation transmitted through a thin abdominal wall. Give pain medication and transport", f: "Incorrect — a pulsatile abdominal mass in a 72-year-old male with vascular risk factors (hypertension, smoking, hyperlipidemia) and sudden tearing back pain is a rupturing AAA until proven otherwise. The shock, severe pain, and pulsatile mass form a classic AAA triad. A normal aortic diameter is 2 cm or less — 6 cm is aneurysmal and at high risk of rupture."},
                    {t: "Ruptured abdominal aortic aneurysm (AAA) — the triad of hypotension, tearing abdominal/back pain, and pulsatile abdominal mass is classic. Do not palpate deeply, supine position, high-flow oxygen, IV access en route, and emergent transport to a vascular surgery-capable facility", f: "Correct — AAA rupture is a surgical emergency with >50% mortality even with surgery. The retroperitoneum can hold several liters of blood, so visible blood loss is absent. The patient's confusion indicates cerebral hypoperfusion from hemorrhagic shock. Keep the patient supine (do not elevate legs — this may increase intra-abdominal pressure). Transport with maximum urgency."}
                ],
                correct: 1,
                explanation: "This patient has a ruptured AAA — a catastrophic surgical emergency. The classic presentation includes the triad of: (1) sudden severe abdominal/back pain described as ripping or tearing, (2) palpable pulsatile abdominal mass, and (3) signs of shock (hypotension, tachycardia, altered mental status). Risk factors: age >65, male, hypertension, smoking history. Management: minimum handling, gentle transport (rough roads can worsen rupture), high-flow oxygen, two large-bore IVs if in scope (but do not delay transport for IV), and direct transport to a facility with immediate vascular surgery capability. Do not palpate the abdomen deeply — this can complete the rupture.",
                kpi: "Identifies ruptured AAA by the triad of shock, tearing pain, and pulsatile mass"
            }
        ]
    },
    {
        id: "c5s7",
        shortTitle: "5.7 Genitourinary & Renal",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Genitourinary & Renal Emergencies</h3>

            <p>Genitourinary (GU) and renal emergencies involve the kidneys, ureters, bladder, urethra, and the male and female reproductive organs. These conditions are common in both the prehospital and emergency department settings. EMTs must be able to differentiate between minor infections and life-threatening conditions such as sepsis from pyelonephritis or dialysis emergencies.</p>

            <h4>Urinary Tract Infection (UTI)</h4>
            <p>UTIs are infections of the lower urinary tract (urethra, bladder). Common presenting symptoms include <strong>dysuria (painful urination), urinary frequency, urgency, suprapubic discomfort, and cloudy or foul-smelling urine</strong>. In otherwise healthy adults, UTIs are uncomfortable but not life-threatening. However, in <strong>elderly patients, UTIs often present atypically</strong> — instead of urinary symptoms, they may present with <strong>acute confusion, altered mental status, falls, or generalized weakness</strong>. An altered elderly patient with a suspected UTI requires transport for evaluation — UTI is a common cause of sepsis in the elderly population.</p>

            <h4>Pyelonephritis (Kidney Infection)</h4>
            <p>Pyelonephritis is an infection of the upper urinary tract (kidney). It presents with the classic triad: <strong>fever, flank pain (unilateral or bilateral), and nausea/vomiting</strong>. Patients appear toxic — they may have rigors (shaking chills), costovertebral angle (CVA) tenderness on the affected side, tachycardia, and signs of dehydration. Pyelonephritis can progress to <strong>urosepsis</strong>, a life-threatening condition with high mortality in elderly and immunocompromised patients. These patients require transport with IV access and close monitoring of vital signs.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> Elderly patients with UTIs may have NO urinary symptoms. The only sign may be confusion or a fall. Always consider UTI as a cause of altered mental status in the elderly — measure vital signs including temperature, check blood glucose, and transport for evaluation.
            </div>

            <h4>Kidney Stones (Renal Colic/Urolithiasis)</h4>
            <p>Kidney stones form when minerals crystallize in the urinary tract. The hallmark presentation is: <strong>sudden onset of severe, colicky (waxing and waning) flank pain that radiates to the groin or lower abdomen</strong>. The pain is often described as "the worst pain of my life." Associated symptoms include <strong>nausea/vomiting, hematuria (blood in urine), and urinary urgency</strong>. The patient cannot sit still — they writhe in pain, pacing and attempting to find a comfortable position (in contrast to peritonitis, where the patient lies still). Most stones pass spontaneously if ≤5 mm in diameter. EMT management includes transport, supportive care, and position of comfort.</p>

            <h4>Acute Renal Failure (ARF)</h4>
            <p>Acute renal failure (also called acute kidney injury, AKI) is a sudden decline in kidney function. Prehospital signs include <strong>oliguria (decreased urine output), edema (peripheral or pulmonary), hypertension, metabolic disturbances (hyperkalemia), and altered mental status</strong>. Causes are classified as:</p>
            <ul>
                <li><strong>Pre-renal:</strong> Decreased blood flow to the kidneys (dehydration, hemorrhage, heart failure, sepsis) — the most common cause</li>
                <li><strong>Renal (intrinsic):</strong> Direct damage to kidney tissue (toxins, medications like NSAIDs, contrast dye, glomerulonephritis)</li>
                <li><strong>Post-renal:</strong> Obstruction of urine outflow (kidney stones, enlarged prostate, tumor)</li>
            </ul>

            <h4>Dialysis Patients — Special Considerations</h4>
            <p>Patients with end-stage renal disease (ESRD) on dialysis have unique medical needs and complications. The EMT should understand these common dialysis-related emergencies:</p>

            <h5>Dialysis Access Complications</h5>
            <p>Dialysis access (arteriovenous fistula, AV graft, or central venous catheter) is the patient's lifeline. Complications include:</p>
            <ul>
                <li><strong>Bleeding:</strong> A bleeding access site can be life-threatening because these are high-flow connections between arteries and veins. Apply direct pressure and transport.</li>
                <li><strong>Thrombosis/clotting:</strong> Loss of the thrill or bruit over the fistula indicates clotting — this requires surgical intervention but is not immediately life-threatening.</li>
                <li><strong>Infection:</strong> Redness, warmth, purulent drainage at the access site. Can progress to sepsis rapidly.</li>
            </ul>
            <p><strong>Critical rule:</strong> Never take a blood pressure or start an IV on the arm with a dialysis fistula or graft. Use the opposite arm. If both arms have access, use a lower extremity for BP or IV.</p>

            <h5>Fluid Overload</h5>
            <p>Dialysis patients have limited ability to excrete fluid. Missed dialysis sessions can lead to severe fluid overload presenting with <strong>pulmonary edema (dyspnea, crackles, hypoxia, JVD), peripheral edema, and hypertension</strong>. Management: high-flow oxygen, upright position, consider CPAP if in scope, and transport for emergent dialysis.</p>

            <h5>Hyperkalemia (Life-Threatening)</h5>
            <p>Hyperkalemia (high potassium) is the most immediate life-threatening electrolyte disturbance in dialysis patients. It occurs when dialysis is missed or when dietary potassium is not restricted. Severe hyperkalemia causes <strong>cardiac arrhythmias including bradycardia, heart block, and cardiac arrest</strong>. ECG changes (if monitoring available) progress from <strong>peaked T waves → widened QRS → sine wave → ventricular fibrillation/asystole</strong>. Any dialysis patient who is weak, dizzy, or has palpitations should be evaluated. Transport emergently — hyperkalemia is reversible with dialysis and medical therapy but is fatal if unrecognized.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Dialysis patients who have missed treatments are at high risk for life-threatening hyperkalemia and pulmonary edema. A dialysis patient who complains of weakness, chest pressure, or shortness of breath may be hours away from cardiac arrest from hyperkalemia. These are high-priority transports.
            </div>
        </div>`,
        flashcards: [
            { question: "How does a UTI typically present in an elderly patient, and why is this important?", answer: "Elderly patients with UTIs may present with only confusion, altered mental status, or falls — without classic urinary symptoms. Always consider UTI as a cause of AMS in the elderly.", category: "UTI" },
            { question: "What are the classic signs of pyelonephritis?", answer: "Fever, flank pain (CVA tenderness), and nausea/vomiting. Patients may have rigors and appear toxic. Can progress to urosepsis.", category: "Pyelonephritis" },
            { question: "How does renal colic (kidney stone pain) typically present?", answer: "Sudden onset of severe, colicky flank pain radiating to the groin, with nausea/vomiting and hematuria. The patient is restless and cannot find a comfortable position.", category: "Kidney Stones" },
            { question: "On which arm should an EMT NOT take a blood pressure or start an IV in a dialysis patient?", answer: "The arm with the dialysis fistula or AV graft. Use the opposite arm. If both arms have fistula/grafts, use a lower extremity.", category: "Dialysis" },
            { question: "What are the signs of fluid overload in a dialysis patient who has missed treatment?", answer: "Dyspnea, crackles in lungs, hypoxia, JVD, peripheral edema, and hypertension. Can progress to pulmonary edema. High-flow O₂, upright position, transport.", category: "Dialysis" },
            { question: "Why is hyperkalemia immediately life-threatening in dialysis patients?", answer: "Hyperkalemia causes cardiac arrhythmias (bradycardia, heart block, VF, asystole). ECG progresses from peaked T waves → wide QRS → sine wave → arrest.", category: "Dialysis" },
            { question: "What are the three categories of acute renal failure causes?", answer: "Pre-renal (decreased blood flow: dehydration, hemorrhage, heart failure), Renal (direct kidney damage: toxins, NSAIDs), and Post-renal (obstruction: stones, enlarged prostate).", category: "Renal Failure" }
        ],
        quiz: [
            {
                q: "A 78-year-old female from a nursing home is confused and has a fever of 101.8°F. She does not complain of dysuria or frequency. Her family says she was 'fine this morning.' What should the EMT suspect?",
                options: [
                    "A stroke — confusion with fever is classic for CVA",
                    "A UTI presenting atypically with confusion — elderly patients often lack urinary symptoms. Transport for evaluation",
                    "Dehydration from not drinking enough water — give oral fluids",
                    "Hypoglycemia — check blood glucose and give oral glucose"
                ],
                correct: 1
            },
            {
                q: "A 65-year-old male with end-stage renal disease who missed his last two dialysis sessions complains of weakness, nausea, and palpitations. His ECG shows peaked T waves. He is awake with a BP of 138/82 and P 58. What is the EMT's priority?",
                options: [
                    "This is a non-urgent situation — he can wait for his next scheduled dialysis session tomorrow",
                    "This is a hyperkalemic emergency with ECG changes — transport emergently. Hyperkalemia from missed dialysis can cause cardiac arrest within hours",
                    "Give him oral potassium-binding medication and observe",
                    "The peaked T waves are normal for dialysis patients — no intervention needed"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_5_7_1",
                scenario: "You respond to a nursing home for an 82-year-old female with 'increased confusion' since this morning. The staff note she has been eating poorly and seems 'off.' Her vital signs: BP 90/58, P 108, R 22, SpO₂ 94%, temperature 101.4°F. Blood glucose is 142 mg/dL. She is unable to give a clear history. The nurse reports the patient has a history of dementia, hypertension, and recurrent UTIs. She does not complain of pain but is moaning softly and pulling away when you palpate her lower abdomen. Her skin is warm and dry.",
                question: "What is the most likely cause of this patient's deterioration?",
                options: [
                    {t: "Worsening dementia — elderly patients with dementia often become more confused without any medical cause. No transport needed", f: "Incorrect — the patient has fever (101.4°F), tachycardia (108), hypotension (90/58), and abdominal tenderness. This is not a dementia exacerbation — it is an acute infectious process that has progressed to sepsis. Acute confusion in the elderly is a classic presentation of UTI/sepsis."},
                    {t: "This patient likely has urosepsis from a UTI — the atypical presentation (confusion without urinary symptoms), fever, tachycardia, hypotension, and suprapubic tenderness are classic for a UTI that has progressed to sepsis in an elderly patient. Urgent transport with IV access, oxygen, and close monitoring", f: "Correct — elderly patients with UTIs often present with altered mental status as their only symptom. The combination of fever, hypotension, tachycardia, and suprapubic tenderness strongly suggests a UTI that has progressed to urosepsis. This is a medical emergency requiring prompt IV antibiotics and fluid resuscitation at the hospital."}
                ],
                correct: 1,
                explanation: "This patient has septic shock from a suspected urinary source. The altered mental status is a sign of cerebral hypoperfusion from the sepsis syndrome. Key features: fever (or hypothermia in severe sepsis), tachycardia, hypotension, and an infectious source (UTI by history and suprapubic tenderness). The 'warm shock' phase of early sepsis explains the warm, dry skin. Management: high-flow oxygen, IV access, serial vital signs, transport to an emergency department capable of managing sepsis. Elderly patients with sepsis can decompensate rapidly — this is a high-priority transport.",
                kpi: "Recognizes urosepsis presenting as altered mental status in an elderly patient"
            },
            {
                id: "crit_5_7_2",
                scenario: "You are called for a 58-year-old female with end-stage renal disease on hemodialysis who missed her last three dialysis sessions. She is extremely short of breath and cannot speak in full sentences. She is sitting upright on the edge of the bed, using accessory muscles to breathe. Vital signs: BP 178/96, P 112, R 32, SpO₂ 86% on room air. You hear widespread crackles in both lungs, and her neck veins are distended at 45 degrees. Her lower extremities have 3+ pitting edema to the knees. She has a left forearm AV fistula with a palpable thrill.",
                question: "What is the primary problem and what is the EMT's management plan?",
                options: [
                    {t: "This is congestive heart failure exacerbation — the patient is fluid overloaded from missed dialysis. Apply high-flow O₂, position upright, consider CPAP if in scope, do NOT start an IV in the left arm (fistula arm), and transport emergently for dialysis", f: "Correct — missed dialysis causes fluid and electrolyte accumulation. This patient has pulmonary edema from fluid overload: dyspnea, crackles, JVD, hypertension, hypoxia. CPAP (if in scope) can improve oxygenation and reduce preload. Protect the fistula arm."},
                    {t: "The patient is having an asthma exacerbation — apply a non-rebreather mask and administer nebulized albuterol", f: "Incorrect — while the patient is in respiratory distress, the widespread crackles, JVD, hypertension, and peripheral edema indicate fluid overload, not bronchoconstriction. Wheezing, not crackles, would be expected in asthma. This is cardiac/pulmonary congestion from hypervolemia due to missed dialysis."}
                ],
                correct: 0,
                explanation: "This patient has acute pulmonary edema from fluid overload secondary to missed hemodialysis. The kidneys cannot excrete fluid, and fluid accumulates in the vascular space, overwhelming the heart's ability to pump. Management: high-flow oxygen (15 L via non-rebreather), CPAP if available (reduces preload and improves oxygenation), upright/sitting position, monitor vitals, and emergent transport for dialysis. Protect the fistula arm — do not take BP or start IV in the left arm. If IV access is needed, use the right arm or a lower extremity. Notify the receiving hospital of the patient's dialysis status and missed treatments.",
                kpi: "Recognizes pulmonary edema from fluid overload in a missed-dialysis patient"
            }
        ]
    },
    {
        id: "c5s8",
        shortTitle: "5.8 Hematologic Emergencies",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Hematologic Emergencies</h3>

            <p>Hematologic emergencies involve disorders of the blood and blood-forming organs. These conditions affect the blood's ability to carry oxygen (anemia), clot properly (coagulopathies, hemophilia, anticoagulant therapy), or maintain normal blood flow (sickle cell disease, DVT). While some hematologic conditions are chronic, acute exacerbations can be life-threatening and require prompt recognition and appropriate prehospital management.</p>

            <h4>Anemia</h4>
            <p>Anemia is a deficiency of red blood cells (RBCs) or hemoglobin, reducing the blood's oxygen-carrying capacity. The most common presenting symptom is <strong>fatigue</strong>, but in the acute or severe setting, patients may report <strong>dyspnea on exertion, pallor (pale skin, conjunctiva, nail beds), tachycardia, dizziness, and chest pain</strong>. Severe anemia (Hb <7 g/dL) can cause high-output heart failure. Prehospital assessment: look for pallor, check conjunctival color, assess vital signs for tachycardia or hypotension, and ask about the onset and duration of symptoms. Causes include iron deficiency (most common), vitamin B12/folate deficiency, chronic disease, blood loss, and hemolysis (RBC destruction). Transport for evaluation — anemia has many causes and some (like GI bleeding) are emergencies.</p>

            <h4>Sickle Cell Disease (SCD) and Sickle Cell Crisis</h4>
            <p>Sickle cell disease is a genetic disorder in which abnormal hemoglobin S (HbS) causes red blood cells to deform into a sickle shape under conditions of low oxygen, dehydration, or stress. Sickled cells occlude small blood vessels, causing tissue ischemia, severe pain, and end-organ damage. A <strong>sickle cell crisis (vaso-occlusive crisis)</strong> presents with:</p>
            <ul>
                <li><strong>Severe pain</strong> — often in the bones, chest, abdomen, or back. Pain is the hallmark of a crisis.</li>
                <li><strong>Possible triggers:</strong> Infection, dehydration, cold exposure, hypoxia, stress, high altitude, alcohol consumption.</li>
                <li><strong>Acute chest syndrome:</strong> A medical emergency presenting with chest pain, fever, cough, dyspnea, and new infiltrates on chest X-ray. It is the leading cause of death in sickle cell patients. It can be mistaken for pneumonia but involves pulmonary vaso-occlusion.</li>
                <li><strong>Priapism:</strong> Painful, sustained erection caused by sickling in the penile veins. This is a medical emergency requiring prompt intervention.</li>
            </ul>
            <p><strong>Management of sickle cell crisis:</strong> High-flow oxygen (even if SpO₂ is normal — hypoxia triggers sickling), transport in position of comfort, keep the patient warm (cold triggers sickling), and provide gentle handling. Pain management is critical — these patients often have significant opioid requirements and are known to their hematology teams. If the patient has a pain management plan, attempt to follow it. Do not withhold oxygen because the patient has chronic pain — acute chest syndrome is a life-threatening complication.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Sickle cell disease affects multiple organ systems. Patients are at increased risk for stroke, acute chest syndrome, pulmonary hypertension, renal failure, avascular necrosis, and infection (especially from encapsulated organisms — functional asplenia). These patients are often on hydroxyurea, chronic transfusion programs, and have complex medical histories.
            </div>

            <h4>Anticoagulant Therapy Complications</h4>
            <p>Millions of patients take anticoagulant medications for conditions such as atrial fibrillation, DVT, pulmonary embolism, mechanical heart valves, and stroke prevention. Common anticoagulants include:</p>
            <ul>
                <li><strong>Warfarin (Coumadin):</strong> Vitamin K antagonist. Reversed with vitamin K or fresh frozen plasma (FFP).</li>
                <li><strong>DOACs (Direct Oral Anticoagulants):</strong> Apixaban (Eliquis), rivaroxaban (Xarelto), dabigatran (Pradaxa), edoxaban (Savaysa). These have shorter half-lives than warfarin but lack simple reversal in some cases.</li>
                <li><strong>Antiplatelet agents:</strong> Aspirin, clopidogrel (Plavix), ticagrelor (Brilinta). These inhibit platelet aggregation.</li>
            </ul>
            <p><strong>Bleeding complications:</strong> Anticoagulated patients are at high risk for bleeding, even from minor trauma. <strong>Intracranial hemorrhage</strong> is the most feared complication — any anticoagulated patient with a fall or head trauma, even seemingly minor, requires transport and CT evaluation. Signs of bleeding include: external bleeding that is difficult to control, large ecchymoses (bruises), hematemesis, melena, hematuria, or altered mental status (potential intracranial bleed).</p>

            <h4>Deep Vein Thrombosis (DVT)</h4>
            <p>DVT is the formation of a blood clot in a deep vein, most commonly in the lower extremities. The classic presentation is: <strong>unilateral leg swelling, warmth, redness, and pain/tenderness in the calf or thigh</strong>. The affected extremity may appear larger than the unaffected side (measure circumference if needed). <strong>Homan's sign</strong> (pain with dorsiflexion of the foot) is historically described but is unreliable and should not be used to rule in or rule out DVT. The primary risk of DVT is <strong>pulmonary embolism (PE)</strong> — if the clot dislodges and travels to the pulmonary circulation. Risk factors include: prolonged immobility (long flights, post-surgery), cancer, pregnancy, obesity, smoking, and inherited thrombophilia. Management: transport (the ambulance ride is typically the safest mode), do not massage the affected leg (massage can dislodge the clot), and monitor for signs of PE (sudden dyspnea, chest pain, hypoxia, hemoptysis).</p>

            <h4>Hemophilia & Bleeding Disorders</h4>
            <p>Hemophilia is an inherited X-linked bleeding disorder caused by deficiency of clotting factor VIII (hemophilia A, 80% of cases) or factor IX (hemophilia B, Christmas disease). Severity correlates with the level of clotting factor activity. Patients with severe hemophilia (<1% factor activity) can bleed spontaneously into joints (hemarthrosis), muscles, and the brain. <strong>Head trauma in a hemophiliac is a critical emergency</strong> — they can develop a life-threatening intracranial hemorrhage from seemingly minor head injuries. Management: transport, apply direct pressure to external bleeding, immobilize suspected bleeding joints, and avoid IM injections. Notify the receiving hospital that the patient has hemophilia. These patients often carry factor replacement concentrate — bring it to the hospital with them.</p>

            <h4>Transfusion Reactions</h4>
            <p>Patients receiving blood transfusions can develop reactions ranging from mild allergic reactions to life-threatening hemolytic reactions. Signs of a transfusion reaction include: <strong>fever, chills, urticaria (hives), hypotension, dyspnea, chest pain, back pain, dark urine (hemoglobinuria), and anxiety</strong>. An acute hemolytic transfusion reaction (usually from ABO incompatibility) is a medical emergency causing intravascular hemolysis, DIC, renal failure, and shock. Management: <strong>stop the transfusion immediately</strong>, maintain IV access (new tubing, do not transfuse through old tubing), administer oxygen, monitor vital signs, and transport emergently. Bring the blood bag and all transfusion documentation to the hospital.</p>

            <h4>Thrombophilia</h4>
            <p>Thrombophilia refers to inherited or acquired conditions that increase the risk of abnormal blood clotting. Common inherited thrombophilias include Factor V Leiden mutation (most common), prothrombin gene mutation, and deficiencies of protein C, protein S, or antithrombin. These patients are at increased risk for DVT, PE, and recurrent miscarriages. They are typically maintained on long-term anticoagulation. The EMT's role is to recognize the signs of thrombotic complications (DVT, PE, stroke) and manage accordingly.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Any patient on anticoagulant therapy who sustains a fall or head trauma — no matter how minor — requires transport and CT evaluation. Intracranial hemorrhage can develop gradually and may not be immediately apparent. Anticoagulated patients with a headache, vomiting, or any alteration in mental status after head trauma are in a high-risk category.
            </div>
        </div>`,
        flashcards: [
            { question: "What are the signs and symptoms of severe anemia?", answer: "Fatigue, pallor (pale conjunctiva/nail beds), tachycardia, dyspnea on exertion, dizziness, and chest pain. Severe anemia can cause high-output heart failure.", category: "Anemia" },
            { question: "What is acute chest syndrome in sickle cell disease, and why is it dangerous?", answer: "Acute chest syndrome is pulmonary vaso-occlusion presenting with chest pain, fever, cough, dyspnea, and hypoxia. It is the leading cause of death in sickle cell patients.", category: "Sickle Cell Disease" },
            { question: "What are the triggers for a sickle cell vaso-occlusive crisis?", answer: "Infection, dehydration, cold exposure, hypoxia, stress, high altitude, and alcohol consumption. Prevention includes hydration, warmth, and avoiding hypoxia.", category: "Sickle Cell Disease" },
            { question: "Why must an anticoagulated patient with a minor head injury be transported for evaluation?", answer: "Anticoagulants significantly increase the risk of intracranial hemorrhage. Signs may be delayed. Any head trauma in an anticoagulated patient requires CT evaluation.", category: "Anticoagulant Complications" },
            { question: "What is the classic presentation of a deep vein thrombosis (DVT)?", answer: "Unilateral leg swelling, warmth, redness, and pain/tenderness. Do not massage the affected leg — this can dislodge the clot and cause pulmonary embolism.", category: "DVT" },
            { question: "What is the EMT's first action when a patient has a suspected transfusion reaction?", answer: "STOP the transfusion immediately. Maintain IV access with new tubing, administer oxygen, monitor vitals, and transport emergently. Bring the blood bag to the hospital.", category: "Transfusion Reactions" },
            { question: "What is the critical concern in a hemophilia patient with head trauma?", answer: "Intracranial hemorrhage from even minor head trauma. Hemophilia patients lack clotting factors and can bleed uncontrollably. Transport emergently; bring factor replacement if available.", category: "Hemophilia" }
        ],
        quiz: [
            {
                q: "A 16-year-old male with sickle cell disease complains of severe bone pain in his arms and legs. He has a low-grade fever of 100.2°F and SpO₂ of 94% on room air. What is the EMT's priority intervention?",
                options: [
                    "Administer aspirin for pain and fever",
                    "Apply cold packs to the painful areas to reduce inflammation",
                    "Apply high-flow oxygen, keep the patient warm, transport in position of comfort, and provide gentle handling",
                    "Encourage the patient to walk around to 'work out' the pain"
                ],
                correct: 2
            },
            {
                q: "[HARD] A 75-year-old male on warfarin for atrial fibrillation tripped and struck his head on a table edge 30 minutes ago. He has a 2 cm scalp laceration with bleeding that stopped with direct pressure. He is alert and oriented, with no headache, vomiting, or neurological deficits. What should the EMT do?",
                options: [
                    "Suture the laceration, apply a bandage, and allow the patient to refuse transport if he wishes since he is asymptomatic",
                    "Control bleeding, perform a thorough neurological assessment, and transport for CT evaluation — anticoagulated patients with head trauma require imaging even if asymptomatic",
                    "Give the patient vitamin K to reverse the warfarin and observe for 4 hours",
                    "Clean the wound and discharge the patient with a head injury instruction sheet"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_5_8_1",
                scenario: "A 22-year-old female with known sickle cell disease presents with severe chest pain, difficulty breathing, and a cough. She states the pain started 12 hours ago and has been getting worse. Vital signs: BP 108/70, P 114, R 26, SpO₂ 90% on room air, temperature 101.8°F. She appears anxious and is splinting her chest with her hands. She reports that she had a mild cold last week and has been unable to keep fluids down for the past two days due to nausea. She is not on any home oxygen.",
                question: "What is the most likely diagnosis and the appropriate management?",
                options: [
                    {t: "This is acute chest syndrome, a life-threatening pulmonary vaso-occlusive complication of sickle cell disease. Apply high-flow oxygen, transport with the patient sitting upright, and provide gentle handling. Do not withhold oxygen — acute chest syndrome is the leading cause of death in sickle cell patients", f: "Correct — acute chest syndrome presents with chest pain, fever, cough, dyspnea, and hypoxia in a sickle cell patient. The trigger is often infection and dehydration (both present here). It requires urgent hospital management including possibly exchange transfusion and aggressive pulmonary support."},
                    {t: "This is a simple vaso-occlusive crisis affecting the chest wall bones. Give oxygen at 2 L via nasal cannula and transport non-emergently. The fever is from her recent cold", f: "Incorrect — while sickle cell patients can have bone pain crises involving the ribs, the combination of fever, cough, hypoxia (SpO₂ 90%), and chest pain is highly concerning for acute chest syndrome (ACS). ACS has a mortality rate of 3–10% and requires aggressive hospital care. Hypoxia is a key distinguishing feature from a simple vaso-occlusive crisis."}
                ],
                correct: 0,
                explanation: "Acute chest syndrome (ACS) is defined as a new pulmonary infiltrate on chest X-ray with fever and respiratory symptoms in a sickle cell patient. It is caused by pulmonary vaso-occlusion, infection, or fat embolism (from bone marrow infarction). This patient has multiple risk factors: recent infection and dehydration. Management includes high-flow oxygen (do not withhold — hypoxia drives further sickling), pain management, transport in position of comfort (likely sitting upright), and notification of the receiving hospital. These patients often require exchange transfusion and may need ICU-level care. Do not apply cold (promotes sickling). Do not withhold pain medication.",
                kpi: "Differentiates acute chest syndrome from simple vaso-occlusive crisis in sickle cell disease"
            },
            {
                id: "crit_5_8_2",
                scenario: "You respond to a 70-year-old male who fell down three stairs and struck his head on a concrete floor. He is on apixaban (Eliquis) for atrial fibrillation. He is alert and oriented, with a GCS of 15, and denies any headache, nausea, or visual changes. He has a small bruise on the back of his head but no bleeding. Vital signs: BP 148/86, P 76, R 16, SpO₂ 97%. His wife says, 'He seems fine — he just wants to go to bed and sleep it off. He doesn't want to go to the hospital for a little bump.' The patient states he feels fine and wishes to refuse transport.",
                question: "How should the EMT manage this situation?",
                options: [
                    {t: "The patient appears well and has no signs of head injury — allow him to refuse transport after explaining the risks of refusal and documenting thoroughly", f: "Incorrect — a patient on a DOAC (apixaban/Eliquis) anticoagulant who has fallen and struck their head, even with normal mental status, is at high risk for delayed intracranial hemorrhage. The anticoagulant prevents clot formation, allowing even a small bleed to expand. DOACs do not have simple reversal agents that are available in the prehospital setting."},
                    {t: "The patient is on a DOAC anticoagulant and has sustained head trauma — this is a high-risk situation for delayed intracranial hemorrhage. Explain that the anticoagulant masks symptoms of bleeding and that CT evaluation is medically necessary. If he still refuses, involve medical direction and document extensively. Transport is strongly recommended", f: "Correct — anticoagulated patients with head trauma require CT evaluation regardless of symptoms. The EMT should explain that the medication (apixaban) prevents blood from clotting, so even a small head bleed can become dangerous. If the patient continues to refuse, contact medical direction for guidance. Document the mechanism, medication, assessment, explanation of risks, and the patient's decision."}
                ],
                correct: 1,
                explanation: "Anticoagulant therapy (especially DOACs like apixaban) dramatically increases the risk of intracranial hemorrhage after head trauma. Intracranial bleeding can develop insidiously — the patient may be asymptomatic initially and then deteriorate rapidly as the bleed expands. The EMT has a duty to inform the patient of this specific risk. The safest course is transport for CT evaluation. If the patient refuses, contact medical direction (online medical direction may authorize transport or provide additional reasoning to convince the patient). Document all findings, the specific risks explained, the patient's response, and any physician contact clearly on the PCR.",
                kpi: "Recognizes the danger of seemingly minor head trauma in anticoagulated patients"
            },
            {
                id: "crit_5_8_3",
                scenario: "A 68-year-old female, post-operative day 1 from hip replacement surgery, complains of sudden-onset shortness of breath and left-sided chest pain that started approximately 20 minutes ago. She is visibly anxious and diaphoretic. Vital signs: BP 102/68, P 118, R 28, SpO₂ 88% on room air. Her left lower extremity is notably swollen, warm, and red compared to the right. The patient's husband mentions she was immobilized for most of yesterday after surgery and just started walking today. He asks, 'Could this be a blood clot?'",
                question: "What is the likely sequence of events and how should the EMT manage this?",
                options: [
                    {t: "The patient likely has a DVT in the left leg that has dislodged and traveled to the lungs (pulmonary embolism). This is a life-threatening emergency. Apply high-flow oxygen, position the patient upright, and transport emergently. Do not massage the leg", f: "Correct — post-surgical immobilization is a major risk factor for DVT. The unilateral leg swelling/warmth/redness suggests DVT, and the sudden dyspnea, chest pain, tachycardia, and hypoxia suggest the clot has embolized to the pulmonary circulation. This is a pulmonary embolism — a high-mortality condition requiring prompt hospital management."},
                    {t: "The leg swelling is normal after hip surgery. The shortness of breath is likely from post-operative pain and anxiety. Reassure the patient and transport non-emergently", f: "Incorrect — While mild leg swelling can be normal post-operatively, the sudden onset of dyspnea, chest pain, hypoxia (88%), and tachycardia in the setting of unilateral leg findings strongly suggests pulmonary embolism. This is not 'just anxiety' — it is a potentially fatal condition that requires rapid assessment and transport with high-flow oxygen."}
                ],
                correct: 0,
                explanation: "This patient has a classic presentation of DVT (unilateral leg swelling, warmth, erythema, pain) complicated by PE (sudden dyspnea, pleuritic chest pain, tachycardia, hypoxia). Hip surgery patients are at very high risk for DVT due to prolonged immobility, surgical trauma, and hypercoagulable state. Management: high-flow oxygen (target SpO₂ ≥94%), transport in position of comfort (sitting upright), do NOT massage or manipulate the affected leg (can dislodge more clot), establish IV access en route, and notify the receiving hospital of suspected PE. Monitor for deterioration — massive PE can cause obstructive shock and cardiac arrest.",
                kpi: "Recognizes the progression from DVT to pulmonary embolism with characteristic findings"
            }
        ]
    },
    {
        id: "c5s9",
        shortTitle: "5.9 Infectious Disease & Sepsis",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Infectious Disease & Sepsis</h3>

            <p>Infectious diseases are caused by pathogenic microorganisms — bacteria, viruses, fungi, or parasites — that invade the body and cause illness. EMTs must recognise both the systemic response to infection (sepsis) and protect themselves and others from transmission through standard precautions.</p>

            <h4>Sepsis — Definition and Recognition</h4>
            <p><strong>Sepsis</strong> is a life-threatening organ dysfunction caused by a dysregulated host response to infection. Early recognition by EMTs is critical — sepsis is a time-sensitive emergency where every hour of delayed treatment increases mortality by 4–8%. The <strong>qSOFA (quick Sequential Organ Failure Assessment)</strong> is a bedside screening tool that identifies patients at high risk of poor outcomes. A positive qSOFA screen requires <strong>2 or more</strong> of the following three criteria:</p>
            <ul>
                <li><strong>Altered mental status</strong> — Glasgow Coma Scale (GCS) <15 or any new confusion, disorientation, or decreased level of consciousness</li>
                <li><strong>Respiratory rate ≥22 breaths per minute</strong> — Tachypnoea is a compensatory response to metabolic acidosis from tissue hypoperfusion</li>
                <li><strong>Systolic blood pressure ≤100 mmHg</strong> — Hypotension indicating inadequate perfusion pressure</li>
            </ul>
            <p>A qSOFA score ≥2 in a patient with suspected infection identifies those at high risk for prolonged ICU stay, mechanical ventilation, or death. qSOFA is quick and does not require laboratory tests, making it ideal for prehospital use.</p>

            <h4>SIRS Criteria (Systemic Inflammatory Response Syndrome)</h4>
            <p>While qSOFA is now preferred for prehospital sepsis screening, understanding the <strong>SIRS criteria</strong> provides context for recognising systemic inflammation. SIRS is diagnosed when two or more of the following are present:</p>
            <table>
                <thead>
                    <tr><th>Parameter</th><th>Criterion</th></tr>
                </thead>
                <tbody>
                    <tr><td>Temperature</td><td>&gt;38°C (100.4°F) or &lt;36°C (96.8°F)</td></tr>
                    <tr><td>Heart rate</td><td>&gt;90 beats per minute (tachycardia)</td></tr>
                    <tr><td>Respiratory rate</td><td>&gt;20 breaths per minute OR PaCO₂ &lt;32 mmHg</td></tr>
                    <tr><td>White blood cell count</td><td>&gt;12,000/mm³ or &lt;4,000/mm³ or &gt;10% bands (immature forms)</td></tr>
                </tbody>
            </table>
            <p>SIRS can be triggered by infection (sepsis) or non-infectious causes (trauma, burns, pancreatitis, autoimmune disease). The presence of SIRS criteria plus a suspected infection defines <strong>sepsis</strong>.</p>

            <h4>Septic Shock</h4>
            <p><strong>Septic shock</strong> is sepsis with persisting hypotension despite adequate fluid resuscitation, requiring vasopressors to maintain mean arterial pressure ≥65 mmHg, and with a serum lactate level &gt;2 mmol/L. In the prehospital setting, septic shock is identified by:</p>
            <ul>
                <li>Sepsis (suspected infection + qSOFA ≥2 or SIRS criteria) PLUS:</li>
                <li><strong>Hypotension (SBP &lt;90 mmHg or MAP &lt;65 mmHg)</strong> that does not improve after fluid resuscitation (typically 20–30 mL/kg crystalloid)</li>
                <li><strong>Signs of end-organ hypoperfusion:</strong> Altered mental status, decreased urine output, cool/ mottled extremities, delayed cap refill</li>
                <li><strong>Elevated lactate:</strong> &gt;2 mmol/L (measured in the hospital; suspect in patients with severe metabolic acidosis)</li>
            </ul>
            <p>Septic shock carries a mortality rate of 40% or higher. EMTs must identify these patients and transport rapidly to a facility capable of early goal-directed therapy (IV fluids, antibiotics, vasopressors, source control).</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Sepsis can progress to septic shock rapidly — within hours. Do not be falsely reassured by a normal blood pressure in the presence of infection with tachycardia, tachypnoea, or altered mental status. Hypotension is a LATE sign in sepsis, just as in haemorrhagic shock.
            </div>

            <h4>Common Sources of Infection Leading to Sepsis</h4>
            <table>
                <thead>
                    <tr><th>Source</th><th>Signs to Identify</th><th>High-Risk Populations</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pneumonia</strong></td><td>Cough (productive), fever, crackles, hypoxia, pleuritic chest pain</td><td>Elderly, COPD, immunocompromised, post-operative</td></tr>
                    <tr><td><strong>Urinary Tract Infection (UTI)</strong></td><td>Dysuria, frequency, suprapubic/flank pain, fever, confusion in elderly</td><td>Elderly, catheterised patients, pregnant women, diabetics</td></tr>
                    <tr><td><strong>Skin / Soft Tissue</strong></td><td>Cellulitis: erythema, warmth, swelling, purulent drainage; necrotising fasciitis: severe pain out of proportion, crepitus, rapid spread</td><td>Diabetics, IV drug users, immunocompromised, post-surgical</td></tr>
                    <tr><td><strong>Abdominal</strong></td><td>Abdominal pain, guarding, rigidity, nausea/vomiting, fever</td><td>Elderly, post-operative, cirrhosis, immunocompromised</td></tr>
                </tbody>
            </table>

            <h4>Fever Management</h4>
            <p>Fever is the body's natural response to infection — it enhances immune function and inhibits pathogen growth. In most patients, fever does not require aggressive prehospital treatment. However, consider cooling measures (remove excessive clothing, tepid sponging, cool packs to the neck/axillae/groin) in:</p>
            <ul>
                <li><strong>Extreme hyperthermia (temperature >40°C / 104°F)</strong> — Risk of heat stroke, seizures, and end-organ damage</li>
                <li><strong>Paediatric patients with febrile seizures</strong> — Especially ages 6 months to 5 years</li>
                <li><strong>Patients with known cardiovascular compromise</strong> — Fever increases metabolic demand and heart rate</li>
                <li><strong>Patients with altered mental status and hyperthermia</strong> — To distinguish sepsis-associated encephalopathy from heat stroke</li>
            </ul>
            <p>Avoid aggressive cooling that causes shivering — shivering increases metabolic demand and core temperature. Antipyretic medications (acetaminophen, ibuprofen) are not typically administered by EMTs in the prehospital setting but should be documented if the patient has taken them prior to arrival.</p>

            <h4>Standard Precautions and PPE</h4>
            <p><strong>Body Substance Isolation (BSI)</strong> precautions are the foundation of infection prevention in EMS. EMTs must assume that <strong>all patients and all body substances are potentially infectious</strong>. Standard precautions include:</p>
            <ul>
                <li><strong>Hand hygiene:</strong> Wash with soap and water or use alcohol-based hand rub before and after every patient contact</li>
                <li><strong>Gloves:</strong> Wear non-sterile examination gloves for any contact with blood, body fluids, mucous membranes, or non-intact skin. Change gloves between patients and between different procedures on the same patient.</li>
                <li><strong>Eye protection:</strong> Wear goggles or face shield when there is risk of splash or spray (suctioning, intubation, wound irrigation, uncontrolled bleeding)</li>
                <li><strong>Masks and respirators:</strong> Surgical mask for droplet precautions (meningitis, influenza, COVID-19); N95 or higher respirator for airborne precautions (suspected TB, measles, chickenpox)</li>
                <li><strong>Gowns:</strong> Wear fluid-resistant or impermeable gowns when there is risk of extensive blood or body fluid exposure</li>
                <li><strong>Sharps disposal:</strong> Dispose of all needles and sharp objects immediately in designated sharps containers — never recap needles</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> The single most important infection-prevention measure is <strong>hand hygiene</strong>. Hand washing or alcohol-based hand rub before and after patient contact significantly reduces transmission of healthcare-associated infections. Soap and water are required for C. difficile (alcohol does not kill spores).
            </div>

            <h4>Additional Transmission-Based Precautions</h4>
            <table>
                <thead>
                    <tr><th>Precaution Type</th><th>When to Use</th><th>Examples</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Contact</strong></td><td>Known or suspected infections transmitted by direct contact</td><td>MRSA (wounds), C. difficile (diarrhoea), scabies, VRE, RSV</td></tr>
                    <tr><td><strong>Droplet</strong></td><td>Infections transmitted by large respiratory droplets (&gt;5 microns, travel &le;3–6 feet)</td><td>Meningococcal meningitis, influenza, COVID-19, pertussis, mumps, rubella</td></tr>
                    <tr><td><strong>Airborne</strong></td><td>Infections transmitted by small droplet nuclei (&lt;5 microns, remain suspended in air)</td><td>Tuberculosis (TB), measles (rubeola), chickenpox (varicella), disseminated zoster</td></tr>
                </tbody>
            </table>

            <h4>Transport to Appropriate Facility</h4>
            <p>Patients with suspected sepsis or septic shock should be transported to a hospital capable of providing early goal-directed therapy: IV fluids, broad-spectrum antibiotics, lactate measurement, blood cultures, and intensive care. Consider the following when making destination decisions:</p>
            <ul>
                <li><strong>qSOFA ≥2 with hypotension:</strong> Transport to the closest appropriate ED with ICU capability — do not bypass for a facility with "better" sepsis care if it significantly prolongs transport time</li>
                <li><strong>Immunocompromised patients:</strong> May require transport to a facility with specialist infectious disease support and oncology services</li>
                <li><strong>Paediatric sepsis:</strong> Transport to a children's hospital or paediatric-capable ED when possible</li>
                <li><strong>Notify the receiving hospital early</strong> with a "sepsis alert" — pre-notification allows the ED to prepare antibiotics, IV fluids, and critical care resources before your arrival</li>
            </ul>

            <h4>Common Infectious Diseases</h4>

            <h5>Meningococcal Meningitis</h5>
            <p>Bacterial infection of the meninges caused by <em>Neisseria meningitidis</em>. Presents with the classic triad of <strong>fever, nuchal rigidity (neck stiffness), and altered mental status</strong>, often accompanied by a <strong>non-blanching petechial or purpuric rash</strong>. It is highly contagious via respiratory droplets and can progress from healthy to dead within hours. <strong>Droplet precautions are essential</strong> — place a mask on the patient and wear a mask yourself.</p>

            <h5>MRSA (Methicillin-Resistant <em>Staphylococcus aureus</em>)</h5>
            <p>A strain of <em>S. aureus</em> resistant to beta-lactam antibiotics (methicillin, oxacillin, cephalosporins). MRSA causes skin and soft tissue infections (abscesses, cellulitis, wound infections) and can cause invasive disease (pneumonia, bloodstream infection, endocarditis). <strong>Contact precautions</strong> are required — wear gloves and gown when touching wounds or draining lesions. In healthcare settings, MRSA is a common cause of line-associated and post-surgical infections.</p>

            <h5><em>Clostridioides difficile</em> (C. diff)</h5>
            <p>A spore-forming bacterium that causes antibiotic-associated diarrhoea and colitis. C. diff is transmitted via the faecal-oral route and spores persist on environmental surfaces for months. <strong>Contact precautions</strong> are required. <strong>Alcohol-based hand rubs do NOT kill C. diff spores</strong> — wash hands with soap and water after contact with a suspected C. diff patient. Key risk factor: recent antibiotic use (especially broad-spectrum antibiotics like fluoroquinolones, clindamycin, and cephalosporins).</p>

            <h5>Tuberculosis (TB)</h5>
            <p>An airborne bacterial infection caused by <em>Mycobacterium tuberculosis</em>, primarily affecting the lungs. Active TB presents with <strong>chronic cough (≥3 weeks), night sweats, weight loss, haemoptysis, and fever</strong>. <strong>Airborne precautions</strong> are required — wear an N95 respirator (or higher), place a surgical mask on the patient, and transport with the ambulance ventilation system set to non-recirculating mode if possible. High-risk populations include homeless, incarcerated, and immunocompromised individuals.</p>

            <h5>COVID-19 (SARS-CoV-2)</h5>
            <p>A viral respiratory illness with a wide spectrum of severity — from asymptomatic infection to severe pneumonia, acute respiratory distress syndrome (ARDS), and death. Typical symptoms include <strong>fever, cough, shortness of breath, fatigue, loss of taste/smell (anosmia), and myalgias</strong>. Transmission is primarily through respiratory droplets and aerosols. Use <strong>droplet + contact precautions</strong> (surgical mask, eye protection, gloves, gown). N95 respirators are recommended for aerosol-generating procedures (nebulised treatments, BVM ventilation, suctioning, intubation). Transport patients with oxygen as needed and monitor for respiratory deterioration.</p>
        </div>`,
        flashcards: [
            { question: "What are the three qSOFA criteria used for prehospital sepsis screening?", answer: "Altered mental status (GCS <15), respiratory rate ≥22 breaths/min, and systolic blood pressure ≤100 mmHg. A score ≥2 indicates high risk of poor outcomes.", category: "Sepsis Screening" },
            { question: "What are the four SIRS criteria?", answer: "Temperature >38°C or <36°C, heart rate >90 bpm, respiratory rate >20/min or PaCO₂ <32 mmHg, and WBC >12,000 or <4,000/mm³ or >10% bands.", category: "Sepsis — SIRS" },
            { question: "What distinguishes septic shock from sepsis?", answer: "Septic shock is sepsis with persisting hypotension despite adequate fluid resuscitation, requiring vasopressors to maintain MAP ≥65 mmHg, and with serum lactate >2 mmol/L.", category: "Septic Shock" },
            { question: "What are the three most common sources of infection leading to sepsis?", answer: "Pneumonia (respiratory), urinary tract infections (genitourinary), and skin/soft tissue infections (cellulitis, wound infections).", category: "Sepsis Sources" },
            { question: "Which infectious disease requires airborne precautions (N95 respirator)?", answer: "Tuberculosis (TB), measles (rubeola), and chickenpox (varicella) require airborne precautions with an N95 or higher respirator.", category: "Infection Control" },
            { question: "Why is hand washing with soap and water required instead of alcohol-based hand rub for C. difficile?", answer: "C. difficile spores are not killed by alcohol-based hand rubs. Soap and water physically remove the spores from the hands.", category: "Infection Control" },
            { question: "What are the classic signs of meningococcal meningitis?", answer: "Fever, nuchal rigidity (neck stiffness), altered mental status, severe headache, photophobia, and a non-blanching petechial/purpuric rash. Droplet precautions are essential.", category: "Infectious Diseases" },
            { question: "What is the EMT's role in managing a patient with suspected sepsis?", answer: "Early recognition using qSOFA, supporting ABCs (oxygen, IV access if in scope), fluid resuscitation per protocol, monitoring for deterioration, and rapid transport with early hospital notification.", category: "Sepsis Management" }
        ],
        quiz: [
            {
                q: "A 74-year-old female from a nursing home presents with confusion, respiratory rate 24, and blood pressure 98/62. Staff report she has been urinating more frequently and has a foul smell to her urine. Her temperature is 38.9°C. What is the BEST interpretation of these findings?",
                options: [
                    "The patient has a simple UTI with age-related confusion — treat supportively",
                    "qSOFA = 2 (altered mental status + RR ≥22 + SBP ≤100) — this patient has suspected sepsis requiring rapid transport and early notification",
                    "The vital signs are within normal limits for a patient of her age",
                    "The patient likely has dementia and the UTI is incidental"
                ],
                correct: 1,
                explanation: "With infection (UTI) plus qSOFA ≥2 (altered mental status, RR 24, SBP 98/62), this patient meets criteria for suspected sepsis requiring emergent transport and early hospital notification."
            },
            {
                q: "Which transmission-based precaution is required for a patient with suspected active tuberculosis?",
                options: [
                    "Standard precautions only",
                    "Droplet precautions (surgical mask)",
                    "Airborne precautions (N95 respirator)",
                    "Contact precautions (gloves and gown)"
                ],
                correct: 2,
                explanation: "TB is transmitted via airborne droplet nuclei that remain suspended in the air. An N95 or higher respirator is required. The patient should also wear a surgical mask."
            },
            {
                q: "[HARD] A 62-year-old male with diabetes presents with fever, tachycardia, and a red, swollen, warm area on his lower leg that has been spreading over 24 hours. His BP is 104/68, RR 22, HR 108, and he is confused — his wife states this is new. You start an IV and begin fluid resuscitation. After 500 mL of normal saline, his BP drops to 92/56. What does this change MOST likely indicate?",
                options: [
                    "The fluid bolus is causing an allergic reaction",
                    "The patient is progressing from sepsis to septic shock — refractory hypotension despite fluid resuscitation is a hallmark of septic shock",
                    "The BP drop is expected and will resolve with additional fluids",
                    "The patient is having a vasovagal response to the IV insertion"
                ],
                correct: 1,
                explanation: "Persisting or worsening hypotension despite adequate fluid resuscitation in a patient with suspected infection indicates progression to septic shock. This is a high-mortality emergency requiring rapid transport, continued fluid resuscitation, and early hospital notification for ICU level care."
            }
        ],
        critical: [
            {
                id: "crit_5_9_1",
                scenario: "You are dispatched to a private residence for a 68-year-old male with weakness and confusion. His wife reports he has been feeling unwell for 3 days with a cough producing green sputum, and has been increasingly confused over the past 6 hours. He has a history of hypertension, COPD, and type 2 diabetes. Vital signs: HR 118, BP 104/70, RR 26, SpO₂ 89% on room air, temperature 39.4°C. Lung auscultation reveals crackles in the right lower lobe. He is unable to tell you what year it is and does not recognise his wife of 40 years. His blood glucose is 142 mg/dL.",
                question: "What is the most likely diagnosis and what is the priority management?",
                options: [
                    {t: "Acute exacerbation of COPD — administer nebulised bronchodilator and transport with oxygen", f: "Incorrect — While the patient has COPD and crackles, the constellation of high fever, productive cough, new confusion, and tachycardia suggests pneumonia with sepsis, not a simple COPD exacerbation. The confusion and qSOFA ≥2 are red flags for sepsis-associated encephalopathy."},
                    {t: "Pneumonia with suspected sepsis — this patient has an infection (crackles, fever, productive cough) plus qSOFA ≥2 (altered mental status + RR 26 + SBP 104 borderline). Apply high-flow O₂, initiate fluid resuscitation per protocol, monitor vitals every 5 minutes, and transport with early hospital notification", f: "Correct — qSOFA = 2 (altered mental status + RR ≥22). The presentation is classic for pneumonia progressing to sepsis. The patient has multiple risk factors (age >65, diabetes, COPD). Apply oxygen to target SpO₂ ≥94%, establish IV access, give fluid bolus 20 mL/kg if hypotensive, and request a sepsis alert to the receiving ED."}
                ],
                correct: 1,
                explanation: "This patient has pneumonia with sepsis (infection + qSOFA ≥2). Altered mental status in the elderly with infection is often due to sepsis-associated encephalopathy, not dementia or age-related changes. Management focuses on oxygenation, fluid resuscitation, close monitoring for septic shock, and rapid transport with early hospital notification. Patients with sepsis benefit from ED preparedness — a 'sepsis alert' can mobilise resources before arrival.",
                kpi: "Recognises sepsis using qSOFA in a patient with pneumonia"
            },
            {
                id: "crit_5_9_2",
                scenario: "You are called to a college dormitory for a 19-year-old female with severe headache, fever, and confusion. Her roommate states she has been vomiting and complaining of a stiff neck for the past 8 hours. On exam, the patient is lethargic and irritable. Temperature is 40.1°C (104.2°F), HR 124, BP 100/66, RR 22. When you ask her to touch her chin to her chest, she cries out in pain and cannot do so. As you examine her, you notice scattered purplish-red spots on her trunk and legs that do not blanch when pressed.",
                question: "What is the most likely diagnosis and what precautions must you take?",
                options: [
                    {t: "Viral meningitis — this is less serious than bacterial. Provide supportive care, standard precautions, and transport routinely", f: "Incorrect — The combination of fever, nuchal rigidity, altered mental status, and a non-blanching petechial/purpuric rash is meningococcal meningitis until proven otherwise. Viral meningitis does not produce a petechial rash and is far less likely to cause this rapid onset and high fever."},
                    {t: "Bacterial meningitis (likely meningococcal) — this is a life-threatening emergency requiring immediate droplet precautions (mask the patient and yourself), high-flow oxygen, rapid transport, and early hospital notification. The petechial rash is an ominous sign of meningococcaemia", f: "Correct — Meningococcal meningitis can kill a healthy young adult within hours of symptom onset. The classic triad (fever, nuchal rigidity, altered mental status) plus a non-blanching petechial rash is virtually diagnostic. Droplet precautions are critical — the bacteria spread via respiratory droplets. Notify the receiving ED of a suspected meningococcal meningitis case so they can prepare isolation and antibiotics."}
                ],
                correct: 1,
                explanation: "This is meningococcal meningitis until proven otherwise — a rapidly fatal infection. The classic presentation includes: 1) Fever, 2) Nuchal rigidity (cannot touch chin to chest), 3) Altered mental status, and 4) A non-blanching petechial/purpuric rash (meningococcaemia). Droplet precautions are essential: place a surgical mask on the patient and wear a mask + eye protection. Transport with urgency — this patient needs IV antibiotics (ceftriaxone) within minutes to hours of ED arrival. Close contacts (including EMS crew with unprotected exposure) may require prophylactic antibiotics.",
                kpi: "Identifies meningococcal meningitis and applies appropriate droplet precautions"
            },
            {
                id: "crit_5_9_3",
                scenario: "You are called to a homeless shelter for a 55-year-old male with a chronic cough and difficulty breathing. The shelter manager states he has been coughing for approximately 6 weeks with night sweats and has lost a significant amount of weight. The patient appears thin and pale, coughing frequently with scant blood-tinged sputum. He is using a tissue to cover his mouth. His temperature is 38.5°C (101.3°F), HR 104, RR 22, SpO₂ 92% on room air, BP 118/74. He has no known medical history and has been living at the shelter for 3 months.",
                question: "What is the most likely diagnosis and what precautions should the EMT take?",
                options: [
                    {t: "This is likely pneumonia from poor living conditions — apply oxygen, standard precautions, and transport", f: "Incorrect — While pneumonia is possible, the 6-week duration of cough, night sweats, weight loss, and haemoptysis are classic for active tuberculosis. TB requires airborne precautions, not just standard or droplet precautions."},
                    {t: "Suspected active tuberculosis — apply an N95 respirator on yourself, place a surgical mask on the patient, apply supplemental oxygen to target SpO₂ ≥94%, limit time in the enclosed ambulance compartment, and transport to a respiratory isolation-capable facility", f: "Correct — The classic TB presentation includes: chronic cough (≥3 weeks), night sweats, weight loss, haemoptysis, and low-grade fever. This patient has multiple risk factors (homeless shelter, poor nutrition). Airborne precautions are essential: N95 respirator for provider, surgical mask on patient, maximise ventilation in the patient compartment."}
                ],
                correct: 1,
                explanation: "Active pulmonary TB is an airborne infection requiring N95 or higher respirator protection. The classic presentation of cough >3 weeks, night sweats, weight loss, haemoptysis, and fever should trigger a high index of suspicion. Management: apply high-flow oxygen, place a surgical mask on the patient to reduce droplet nuclei, wear an N95 respirator, drive with the patient compartment ventilation on non-recirculating mode if possible, and notify the receiving hospital for airborne isolation room preparation. Close contacts require TB skin testing or IGRA screening.",
                kpi: "Recognises tuberculosis and applies appropriate airborne precautions"
            }
        ]
    },
    {
        id: "c5s10",
        shortTitle: "5.10 Behavioral & Psychiatric",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Behavioral & Psychiatric Emergencies</h3>

            <p>A <strong>behavioural emergency</strong> is a situation in which a patient's behaviour is so unusual, bizarre, threatening, or dangerous that it interferes with their ability to function safely or presents a risk to themselves or others. Behavioural emergencies can have <strong>primary psychiatric causes</strong> (mental illness) or <strong>secondary medical causes</strong> (an underlying medical condition presenting with psychiatric symptoms). As an EMT, your first priority is to rule out life-threatening medical causes before assuming a psychiatric aetiology.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Rule:</strong> <em>"There is no such thing as a psychiatric patient until you have ruled out medical causes."</em> Hypoglycaemia, hypoxia, intoxication, head injury, and infection can all present with agitated, confused, or psychotic behaviour. Always check blood glucose, SpO₂, vital signs, and perform a focused physical exam.
            </div>

            <h4>Medical Causes of Psychiatric Symptoms (The "Must Not Miss" Differential)</h4>
            <p>Before labelling a patient's behaviour as psychiatric, consider and rule out these medical causes — often recalled by the mnemonic <strong>NEW MOP</strong> or similar frameworks:</p>
            <table>
                <thead>
                    <tr><th>Cause</th><th>Key Features</th><th>Screening Tool</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hypoglycaemia</strong></td><td>Confusion, agitation, combativeness, diaphoresis, tachycardia</td><td>Blood glucose check — treat if &lt;70 mg/dL</td></tr>
                    <tr><td><strong>Hypoxia</strong></td><td>Confusion, restlessness, agitation, cyanosis (late)</td><td>Pulse oximetry — SpO₂ &lt;94% is concerning</td></tr>
                    <tr><td><strong>Intoxication / Overdose</strong></td><td>Agitation or sedation, slurred speech, pupils abnormal, odours</td><td>Toxidrome recognition; check for paraphernalia</td></tr>
                    <tr><td><strong>Head Injury (Trauma)</strong></td><td>Altered mental status, headache, unequal pupils, vomiting</td><td>Focused neurological exam, signs of trauma</td></tr>
                    <tr><td><strong>Infection (CNS/Sepsis)</strong></td><td>Fever, confusion, nuchal rigidity (meningitis), rash</td><td>Temperature, neck exam, skin assessment</td></tr>
                    <tr><td><strong>Electrolyte imbalance</strong></td><td>Weakness, confusion, seizures, cardiac dysrhythmia</td><td>History (renal disease, diuretics), ECG if available</td></tr>
                    <tr><td><strong>Seizure (postictal)</strong></td><td>Confusion, drowsiness, incontinence, tongue biting</td><td>History from bystanders, check for injury</td></tr>
                    <tr><td><strong>Stroke</strong></td><td>Acute focal neurological deficit, confusion, aphasia</td><td>BEFAST / CPSS screening</td></tr>
                </tbody>
            </table>

            <h4>Mental Status Assessment</h4>
            <p>A systematic assessment of a patient's mental status helps differentiate psychiatric from medical causes and establishes a baseline for monitoring. The <strong>AVPU</strong> scale (Alert, Verbal, Painful, Unresponsive) is a quick screening tool, but a more thorough mental status exam should include:</p>
            <ul>
                <li><strong>Appearance:</strong> Grooming, hygiene, dress appropriate for weather and setting? Signs of self-neglect?</li>
                <li><strong>Behaviour:</strong> Calm, agitated, withdrawn, restless? Eye contact? Cooperative or hostile?</li>
                <li><strong>Speech:</strong> Rate (slow/rapid/pressured), volume, clarity, coherence? Rambling or tangential?</li>
                <li><strong>Orientation:</strong> Person (who are you?), Place (where are you?), Time (what day/year is it?), Event (what happened?) — the "four W's"</li>
                <li><strong>Mood and affect:</strong> Depressed, euphoric, anxious, flat, labile?</li>
                <li><strong>Thought content:</strong> Paranoid ideation, delusions (fixed false beliefs), hallucinations (seeing or hearing things that are not there)?</li>
                <li><strong>Cognition:</strong> Can the patient follow simple commands (e.g., "squeeze my hand")? Memory (recent and remote)?</li>
                <li><strong>Insight and judgment:</strong> Does the patient understand that they need help? Can they make safe decisions?</li>
            </ul>

            <h4>Danger to Self or Others — Suicidal Ideation</h4>
            <p>Assessing the risk of self-harm is a critical EMT responsibility. Suicidal ideation ranges from passive thoughts of death to active plans with lethal means. Use a direct, non-judgemental approach:</p>
            <ul>
                <li><strong>Ask directly:</strong> "Are you thinking about hurting yourself or killing yourself?" Research shows asking about suicide does NOT plant the idea — it opens communication.</li>
                <li><strong>Assess lethality:</strong> Do you have a plan? What is the method? Do you have access to the means? When do you plan to do it?</li>
                <li><strong>Identify protective factors:</strong> Family, friends, pets, religious faith, future plans, reason to live</li>
                <li><strong>Identify risk factors:</strong> Previous suicide attempt (strongest predictor), male gender, age >65, access to firearms, recent loss, chronic pain, substance use, social isolation</li>
                <li><strong>Never leave the patient alone</strong> — constant observation is essential. Remove potentially dangerous objects (belts, shoelaces, medications, sharp objects) from the patient's environment</li>
                <li><strong>Transport</strong> for psychiatric evaluation — the emergency department is the safest destination</li>
            </ul>

            <h4>Psychosis</h4>
            <p><strong>Psychosis</strong> is a break from reality characterised by <strong>hallucinations</strong> (sensory perceptions without external stimuli — most commonly auditory) and <strong>delusions</strong> (fixed, false beliefs not based in reality — e.g., belief that they are being followed, watched, or controlled by external forces). The patient may be paranoid, frightened, or withdrawn. Approach calmly:</p>
            <ul>
                <li>Speak slowly, clearly, and respectfully — do not argue with delusions or challenge hallucinations</li>
                <li>Acknowledge the patient's feelings without validating false content: "I can see you are very scared right now. I am here to help you."</li>
                <li>Do not lie or make promises you cannot keep</li>
                <li>Maintain a safe distance and keep an exit path clear</li>
                <li>Rule out medical causes — psychosis can be caused by intoxication (methamphetamine, PCP, LSD), tumours, metabolic disorders, and infections</li>
            </ul>

            <h4>Agitation and Excited Delirium</h4>
            <p><strong>Agitation</strong> is a state of extreme physical or verbal activity characterised by restlessness, pacing, shouting, or threatening behaviour. It exists on a spectrum from mild anxiety to violent aggression. <strong>Excited delirium (hyperactive delirium with autonomic dysregulation)</strong> is a severe, life-threatening medical emergency that presents with:</p>
            <ul>
                <li>Extreme agitation and aggression</li>
                <li>Superhuman strength and pain tolerance</li>
                <li>Tachycardia, hypertension, hyperthermia</li>
                <li>Profuse diaphoresis (sweating)</li>
                <li>Incoherent speech, screaming, stripping off clothing</li>
                <li>Paranoid or bizarre behaviour (e.g., crawling on the ground, breaking glass)</li>
                <li><strong>Rapid progression to cardiorespiratory arrest</strong> if not recognised and treated</li>
            </ul>
            <p>Excited delirium is most commonly associated with stimulant drug use (cocaine, methamphetamine), psychiatric illness, and improper restraint. The combination of hyperthermia, acidosis, and catecholamine excess creates a perfect storm for sudden death. Management: request law enforcement and ALS backup, attempt verbal de-escalation, consider sedation (ALS), aggressive cooling, and rapid transport.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning — Positional Asphyxia:</strong> Never restrain a patient in a prone position (face down) or "hog-tie" (knees bent back toward handcuffs). Restraint in these positions restricts diaphragmatic movement, impairs ventilation, and can cause sudden death from positional asphyxia — even in patients who seemed to be "calming down." If restraints are necessary, place the patient on their <strong>side (lateral recumbent)</strong> and monitor their breathing continuously. Once restrained, patients should never be left unattended.
            </div>

            <h4>Panic Attack</h4>
            <p>A <strong>panic attack</strong> is an abrupt surge of intense fear or discomfort that peaks within minutes. Symptoms include: palpitations, sweating, trembling, shortness of breath, chest pain or tightness, choking sensation, nausea, dizziness, derealisation (feeling unreal), fear of losing control or dying, paresthesias, and chills or hot flushes. Panic attacks are extremely frightening for the patient — they often believe they are having a heart attack, stroke, or "going crazy."</p>
            <p><strong>Critical:</strong> Panic attack is a <strong>diagnosis of exclusion</strong> in the prehospital setting. You must first rule out life-threatening conditions that mimic panic (especially <strong>pulmonary embolism, acute coronary syndrome, asthma exacerbation, anaphylaxis, hyperthyroidism, and hypoglycaemia</strong>) before attributing symptoms to anxiety. Management includes: calm reassurance, encouraging slow breathing, ruling out medical causes, and transport if symptoms persist or the diagnosis is uncertain.</p>

            <h4>De-escalation Techniques</h4>
            <p>Verbal de-escalation is the safest and most effective tool for managing agitated patients. It avoids physical confrontation, reduces the risk of injury to all parties, and preserves patient dignity. The following approach — summarised as <strong>DE-ESCALATE</strong> — is recommended:</p>
            <table>
                <thead>
                    <tr><th>Step</th><th>Action</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>D</strong> — Distance</td><td>Maintain personal space (at least arm's length); position yourself at an angle, not directly face-to-face</td><td>"I'm going to stay right here so we can talk."</td></tr>
                    <tr><td><strong>E</strong> — Eye contact</td><td>Non-threatening, intermittent eye contact (avoid staring)</td><td>Make brief eye contact, then look to the side</td></tr>
                    <tr><td><strong>E</strong> — Empathy</td><td>Validate feelings without agreeing with distortions</td><td>"I can see you are really frustrated. Let's work through this."</td></tr>
                    <tr><td><strong>S</strong> — Slow down</td><td>Speak slowly, calmly, with a low pitch; allow pauses</td><td>"Take your time. There's no rush."</td></tr>
                    <tr><td><strong>C</strong> — Choices</td><td>Offer simple, safe choices to restore a sense of control</td><td>"Would you like to sit in the chair or on the stretcher?"</td></tr>
                    <tr><td><strong>A</strong> — Active listening</td><td>Listen to the patient's concerns; paraphrase back what you hear</td><td>"So I hear you saying you feel people are following you."</td></tr>
                    <tr><td><strong>L</strong> — Low stimulation</td><td>Reduce lights, noise, and number of people around the patient</td><td>Turn off the siren, dim lights in the patient compartment</td></tr>
                    <tr><td><strong>A</strong> — Ask for help</td><td>Call for additional resources before the situation escalates</td><td>Request law enforcement or ALS backup early</td></tr>
                    <tr><td><strong>T</strong> — Transport</td><td>Transport to an appropriate facility even if symptoms resolve</td><td>"Let's go together to the hospital to make sure you're safe."</td></tr>
                    <tr><td><strong>E</strong> — Exit strategy</td><td>Always maintain a clear path to the exit for yourself</td><td>Position yourself between the patient and the door</td></tr>
                </tbody>
            </table>

            <h4>Involuntary Holds and Transport Considerations</h4>
            <p>When a patient poses a danger to themselves or others due to a mental health condition, they may be placed on an <strong>involuntary hold</strong> (also called a psychiatric hold, 5150, Section 12, etc. — the name varies by jurisdiction). Key points:</p>
            <ul>
                <li><strong>Criteria</strong> for involuntary hold typically include: danger to self, danger to others, or grave disability (unable to provide for basic needs — food, shelter, safety)</li>
                <li><strong>EMT-initiated holds:</strong> In some jurisdictions, an EMT may initiate an emergency hold to transport a patient against their will for psychiatric evaluation. Know your local protocols.</li>
                <li><strong>Law enforcement:</strong> If a patient is violent or refuses transport despite meeting hold criteria, law enforcement should be involved. EMTs should not physically force a patient into an ambulance unless trained and authorised.</li>
                <li><strong>Documentation:</strong> Meticulously document the patient's behaviour, statements (verbatim quotes are powerful), your assessment, the rationale for the hold/transport, and the receiving facility (if known).</li>
                <li><strong>Transport destination:</strong> Most emergency departments can initiate a psychiatric hold and provide a medical clearance evaluation before transfer to a psychiatric facility. Alternatively, transport directly to a psychiatric receiving centre if your system has one and the patient is medically cleared.</li>
            </ul>

            <h4>Restraint Considerations — Preventing Positional Asphyxia</h4>
            <p>Physical restraints are a last resort and carry significant risk. If restraints are necessary:</p>
            <ul>
                <li><strong>Position the patient on their side (lateral recumbent)</strong> — NEVER prone (face down). Prone positioning restricts chest wall expansion and diaphragmatic movement, leading to hypoventilation, respiratory acidosis, and cardiac arrest.</li>
                <li><strong>Never use "hog-tie" restraints</strong> (tying wrists to ankles behind the back) — this position severely impairs respiration and is associated with sudden death.</li>
                <li><strong>Monitor continuously:</strong> Check pulse oximetry, respiratory rate, and level of consciousness. Any decrease in SpO₂ or change in mental status requires immediate repositioning.</li>
                <li><strong>Apply soft restraints</strong> (not metal handcuffs — these are law enforcement's role) and secure them to the stretcher frame, not the side rails (so side rails can be lowered without releasing the patient).</li>
                <li><strong>Document:</strong> The indication for restraints, the type applied, the position, the time applied, and frequent reassessments (every 5–15 minutes).</li>
                <li><strong>Remove as soon as safely possible</strong> — restraints are not a treatment; they are a temporary safety measure.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> The best restraint is <strong>verbal de-escalation</strong>. Most agitated patients can be calmed with a respectful, patient-centred approach. Request additional resources early — it is better to have law enforcement present and not need them than to need them and not have them. Scene safety is always the highest priority.
            </div>
        </div>`,
        flashcards: [
            { question: "What medical causes must be ruled out before assuming a behavioural emergency is psychiatric?", answer: "Hypoglycaemia, hypoxia, intoxication/overdose, head injury, infection (CNS/sepsis), electrolyte imbalance, postictal state, and stroke. Always check blood glucose, SpO₂, and vital signs.", category: "Medical Causes" },
            { question: "What is excited delirium and why is it a medical emergency?", answer: "A severe state of agitation with hyperthermia, tachycardia, hypertension, diaphoresis, and bizarre behaviour. It can rapidly progress to cardiorespiratory arrest due to hyperthermia, acidosis, and catecholamine excess.", category: "Excited Delirium" },
            { question: "What is the MOST important safety consideration when restraining a patient?", answer: "NEVER restrain in a prone (face-down) position — this causes positional asphyxia. Always place the patient on their side (lateral recumbent) and monitor breathing continuously.", category: "Restraints" },
            { question: "What questions should an EMT ask when assessing suicidal ideation?", answer: "Ask directly: 'Are you thinking about hurting yourself?' Assess plan, method, access to means, and timing. Identify risk factors (prior attempts, male, >65, access to firearms) and protective factors.", category: "Suicidal Ideation" },
            { question: "How should an EMT approach a patient experiencing psychosis?", answer: "Speak calmly and respectfully, acknowledge feelings without arguing with delusions, do not validate false content, maintain safe distance, keep an exit path clear, and rule out medical causes.", category: "Psychosis" },
            { question: "What is the difference between a panic attack and a life-threatening medical emergency?", answer: "Panic attack is a diagnosis of exclusion — PE, ACS, asthma, anaphylaxis, and hypoglycaemia can all mimic panic. Rule out medical causes before attributing symptoms to anxiety.", category: "Panic Attack" },
            { question: "What is the DE-ESCALATE framework for managing agitated patients?", answer: "Distance, Eye contact, Empathy, Slow down, Choices, Active listening, Low stimulation, Ask for help, Transport, Exit strategy.", category: "De-escalation" },
            { question: "What are the criteria for an involuntary psychiatric hold?", answer: "Typically: danger to self, danger to others, or grave disability (unable to provide for basic needs like food, shelter, safety). Criteria vary by jurisdiction.", category: "Involuntary Holds" }
        ],
        quiz: [
            {
                q: "A 45-year-old male is found wandering in the street, agitated and shouting at unseen people. He is diaphoretic, tachycardic (HR 124), and his skin is warm and flushed. He pulls off his shirt despite the cold weather. His blood glucose is 82 mg/dL and SpO₂ is 96% on room air. What condition should the EMT suspect as the HIGHEST priority?",
                options: [
                    "Acute psychosis from schizophrenia — transport for psychiatric evaluation",
                    "Hypoglycaemia — despite the normal reading, symptoms suggest low blood sugar",
                    "Excited delirium with possible stimulant intoxication — this is a medical emergency requiring aggressive cooling, de-escalation, and rapid transport",
                    "Panic attack — provide reassurance and calm the patient"
                ],
                correct: 2,
                explanation: "Agitation, hyperthermia, tachycardia, diaphoresis, and bizarre behaviour (stripping off clothes, shouting at unseen people) with normal glucose and SpO₂ is classic for excited delirium. This is a medical emergency, not a primary psychiatric condition, and can progress to cardiorespiratory arrest."
            },
            {
                q: "You are called to assess a 22-year-old female who suddenly developed chest tightness, shortness of breath, palpitations, tingling in her hands, and a feeling that she is 'going to die.' She has no significant medical history. Vital signs: HR 118, BP 132/84, RR 26, SpO₂ 99%, temperature 36.8°C. Her symptoms started 15 minutes ago during a final exam. What is the MOST appropriate next step?",
                options: [
                    "Reassure the patient that she is having a panic attack and have her breathe into a paper bag",
                    "Rule out life-threatening medical causes (PE, ACS, asthma, anaphylaxis) by focused assessment, then provide calm reassurance and encourage slow breathing",
                    "Administer oxygen via non-rebreather — the tachypnoea and tachycardia indicate hypoxia",
                    "Transport emergently with lights and sirens — this sounds like a pulmonary embolism"
                ],
                correct: 1,
                explanation: "Panic attack is a diagnosis of exclusion. Before attributing symptoms to anxiety, systematically rule out PE (sudden dyspnoea, pleuritic pain), ACS (chest pain, risk factors), asthma (wheezes, cough), and anaphylaxis (rash, oedema). The paper bag technique is dangerous and should NEVER be used. If medical causes are excluded, calm reassurance and slow breathing are appropriate."
            },
            {
                q: "[HARD] An EMT crew and law enforcement are managing a highly agitated 32-year-old male suspected of methamphetamine intoxication. He is combative, profusely diaphoretic, and has pulled off his shirt. Law enforcement has subdued him and placed him prone on the ground with handcuffs. He is still struggling against the restraints. What is the EMT's MOST important immediate concern and action?",
                options: [
                    "The patient needs chemical sedation — request ALS for benzodiazepine administration; this is the only way to safely calm a methamphetamine-intoxicated patient",
                    "The patient is at imminent risk of positional asphyxia from the prone restraint — request immediate repositioning to a side-lying (lateral recumbent) position, and monitor breathing and SpO₂ continuously",
                    "The patient is fighting the restraints, indicating he still has adequate respiratory effort — no immediate action is needed as long as he is handcuffed",
                    "Apply cold packs to reduce hyperthermia; the restraint position does not affect respiratory status"
                ],
                correct: 1,
                explanation: "Prone restraint is dangerous and potentially fatal. When a patient is restrained prone, the ability to breathe is compromised by: 1) Restricted chest wall expansion, 2) Restricted diaphragmatic movement from abdominal compression, 3) Increased oxygen demand from struggling against restraints. The combination of prone positioning + stimulant intoxication + hyperthermia + struggling creates a high risk of sudden death from positional asphyxia. The patient must be repositioned to a side-lying (lateral recumbent) position immediately. SpO₂, respiratory rate, and level of consciousness must be monitored continuously."
            }
        ],
        critical: [
            {
                id: "crit_5_10_1",
                scenario: "You are called to a community centre for a 38-year-old male who is yelling at staff and other patrons. On arrival, he is standing in the middle of the room, gesturing wildly, and shouting that 'the government is watching me through the lights.' He is pacing back and forth and will not let any staff approach him. A crowd of approximately 15 people is watching. He is well-known to the centre's staff as having a history of paranoid schizophrenia but has not taken his medication in several weeks. The centre manager asks you to 'come and calm him down' so he can be removed from the premises.",
                question: "What is the safest initial approach for the EMT?",
                options: [
                    {t: "Approach the patient directly with your partner, speaking firmly and telling him he needs to leave the premises or the police will be called", f: "Incorrect — A direct, confrontational approach with a paranoid patient can escalate the situation rapidly. The patient perceives authority figures as threatening. Speaking firmly and issuing ultimatums is likely to increase his agitation."},
                    {t: "Clear the room of bystanders to reduce stimulation, maintain a safe distance, position yourself between the patient and the exit, speak with a calm low voice, introduce yourself, acknowledge his distress without challenging his delusions, and offer choices (such as sitting down or walking to a quieter area). Request law enforcement as a safety backup before engaging", f: "Correct — This is a textbook application of de-escalation principles: 1) Reduce stimulation (clear bystanders, dim/noise reduction), 2) Maintain safe distance and exit path, 3) Calm, non-threatening tone, 4) Acknowledge feelings without arguing about delusions, 5) Offer choices to restore a sense of control, 6) Have law enforcement staged nearby in case the situation escalates."}
                ],
                correct: 1,
                explanation: "De-escalation is the priority in managing this patient. Paranoid psychosis requires a non-threatening approach. Key steps: clear the room to reduce stimulation, maintain distance, speak calmly, acknowledge feelings without validating delusions ('I can see you are very scared. No one here wants to hurt you.'), offer choices, and have law enforcement ready as backup — not as the first approach. Never argue with delusions or use a confrontational tone. The goal is to build enough trust to assess the patient and determine if transport is needed.",
                kpi: "Applies de-escalation principles in a patient with paranoid psychosis"
            },
            {
                id: "crit_5_10_2",
                scenario: "You are called to a private residence where a 55-year-old female is found sitting on her bed crying. She tells you she 'just can't do this anymore' and that she has been thinking about 'ending it all.' She states she has a plan — she has been saving her blood pressure pills to take all at once, and there are 30 tablets in her bedside drawer. Her husband died 6 months ago and she lives alone. She has no family nearby. Her vital signs are stable and she is alert and oriented. She is willing to come to the hospital 'if you think it will help.' Her son lives in another state and she does not want to call him.",
                question: "What are the EMT's priorities in managing this suicidal patient?",
                options: [
                    {t: "The patient is willing to come to the hospital voluntarily — there is no immediate danger. Place her in the ambulance and transport without further intervention. No need to involve the son or remove the pills since she is coming voluntarily", f: "Incorrect — Voluntary cooperation does not eliminate the need for safety precautions. The patient has a clear plan (overdose), the means (30 tablets), and significant risk factors (recent loss, social isolation, living alone). She must be under constant observation, dangerous items must be removed, and family should be notified."},
                    {t: "This patient is at high risk for suicide — she has a plan and the means, significant risk factors (widow, isolated, living alone), and expressed intent. Do not leave her alone. Remove the pills from her environment with her permission. Maintain constant observation during transport. Notify her son as a protective contact. Document her verbatim statements", f: "Correct — This patient has multiple high-risk features: suicidal ideation with a clear plan, access to means (30 tablets), recent loss (husband), social isolation, and living alone. Management includes: 1) Constant observation — never leave her alone, 2) Remove means (the pills) with her permission or by involving law enforcement if needed, 3) Notify family (son) as a protective resource, 4) Transport for psychiatric evaluation, 5) Document her verbatim statements — this is critical medical-legal documentation."}
                ],
                correct: 1,
                explanation: "Suicidal patients with a plan and means represent a high acute risk. The strongest predictor of completed suicide is a previous attempt, but the presence of a specific plan with access to lethal means is the next highest risk. Never leave the patient alone — even for a moment. Remove dangerous items from the environment (medications, sharp objects, belts, shoelaces). Notify family or close contacts when possible. Transport for ED evaluation. Document verbatim patient statements — quotes are essential for the psychiatric assessment and legal documentation.",
                kpi: "Recognises high suicide risk and implements safety precautions including constant observation and means removal"
            },
            {
                id: "crit_5_10_3",
                scenario: "You respond to a grocery store parking lot for a 'man down.' Upon arrival, you find a 28-year-old male lying supine on the pavement, confused and disoriented. His pupils are constricted (1–2 mm), he is bradycardic (HR 54), and his breathing is shallow at 8 breaths per minute. His SpO₂ is 88% on room air. Bystanders report they saw him staggering and acting 'strange' before collapsing. There is a small blue pill on the ground next to him that you cannot identify. His skin is cool and pale. A medical alert bracelet reads 'Seizure Disorder — takes Dilantin.'",
                question: "What is the priority assessment and management for this patient, considering the differential diagnosis?",
                options: [
                    {t: "The medical alert bracelet indicates a seizure disorder — this is likely a postictal state. Provide supportive care, apply oxygen, and transport. The pill on the ground is unrelated", f: "Incorrect — While the bracelet is important information, a postictal state does not typically produce pinpoint pupils, bradycardia, and respiratory depression. The combination of pinpoint pupils, bradycardia, hypoventilation, and confusion strongly suggests opioid overdose. Medical alert bracelets tell you about the patient's history, not their current presentation. Opioid overdose can occur in any patient, regardless of their medical history."},
                    {t: "The presenting signs (pinpoint pupils, bradycardia, respiratory depression, altered mental status) are classic for opioid overdose, despite the seizure history. Open the airway, begin BVM ventilation at 10–12 breaths/min with high-flow oxygen attached, and administer naloxone 0.4–2 mg IM/IN per protocol while ventilating. Transport for ongoing monitoring", f: "Correct — This is a case where the presenting signs override the medical history. The toxidrome (opioid triad: respiratory depression, CNS depression, pinpoint pupils) is unmistakable. The medical alert bracelet may be a red herring, or the patient may have both conditions. Follow the ABC approach: airway/BVM first (the patient is hypoventilating at 8/min with SpO₂ 88%), then administer naloxone. Transport is mandatory even if he awakens — naloxone's half-life is shorter than most opioids."}
                ],
                correct: 1,
                explanation: "Never let the medical history override the presenting clinical picture. The classic opioid toxidrome is present. The seizure history may be coincidental or the patient may have taken opioids recreationally or accidentally. The EMT's priority is managing the ABC threat — the hypoventilation is immediately life-threatening. BVM ventilation with high-flow oxygen provides immediate support. Naloxone is administered while ventilating. The pill on the ground should be brought to the hospital for identification. After naloxone, monitor for return of spontaneous breathing and prepare for possible agitation during withdrawal.",
                kpi: "Prioritises presenting toxidrome over medical history when managing altered mental status"
            }
        ]
    },
    {
        id: "c5s11",
        shortTitle: "5.11 Pain Management",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Pain Management</h3>

            <p>Pain is one of the most common reasons patients seek emergency care. It is a complex, subjective experience that involves both sensory and emotional components. Effective pain management is a core EMT responsibility — unrelieved pain causes unnecessary suffering, increases physiological stress (tachycardia, hypertension, increased oxygen demand), impairs immune function, and can prolong recovery. The EMT's goal is to assess pain systematically, provide appropriate interventions within the scope of practice, and reassess the patient's response.</p>

            <p>Pain is often described as the <strong>"fifth vital sign"</strong> — along with temperature, pulse, respiration, and blood pressure — and should be assessed and documented in every patient encounter where pain is present.</p>

            <h4>Pain Assessment Tools</h4>
            <p>Pain is subjective — you cannot measure it with a monitor. Reliable assessment depends on using validated tools appropriate to the patient's age, developmental level, and clinical status.</p>

            <h5>Numeric Rating Scale (NRS) — Ages 8 and Up</h5>
            <p>The patient rates their pain from 0 to 10, where 0 = no pain and 10 = the worst pain imaginable. This is the most commonly used pain scale in prehospital and emergency care. Categories:</p>
            <ul>
                <li><strong>0:</strong> No pain</li>
                <li><strong>1–3:</strong> Mild pain (interferes minimally with function)</li>
                <li><strong>4–6:</strong> Moderate pain (interferes significantly with function)</li>
                <li><strong>7–10:</strong> Severe pain (incapacitating, unable to function)</li>
            </ul>
            <p>A reduction of 2 or more points on the NRS after an intervention is considered clinically meaningful. Many protocols use a target of NRS ≤4 or a reduction of ≥2 points as the goal for pain management.</p>

            <h5>Wong-Baker FACES Pain Rating Scale — Children Ages 3–8</h5>
            <p>The FACES scale uses six cartoon faces ranging from a smiling face (0 = no hurt) to a crying face (10 = hurts worst). The child points to the face that best represents their pain. It is validated for children aged 3–8 years and is also useful for patients with limited language or cognitive impairment. Each face has a corresponding number (0, 2, 4, 6, 8, 10) for documentation.</p>

            <h5>FLACC Scale — Non-Verbal Patients (Infants, Dementia, Intubated)</h5>
            <p>The <strong>FLACC</strong> scale assesses pain in patients who cannot self-report. It evaluates five categories, each scored 0–2, for a total of 0–10:</p>
            <table>
                <thead>
                    <tr><th>Category</th><th>0</th><th>1</th><th>2</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>F</strong> — Face</td><td>No particular expression or smile</td><td>Occasional grimace or frown, withdrawn</td><td>Frequent to constant quivering chin, clenched jaw</td></tr>
                    <tr><td><strong>L</strong> — Legs</td><td>Normal position or relaxed</td><td>Uneasy, restless, tense</td><td>Kicking, or legs drawn up</td></tr>
                    <tr><td><strong>A</strong> — Activity</td><td>Lying quietly, normal position, moves easily</td><td>Squirming, shifting back and forth, tense</td><td>Arched, rigid, or jerking</td></tr>
                    <tr><td><strong>C</strong> — Cry</td><td>No cry (awake or asleep)</td><td>Moans or whimpers, occasional complaint</td><td>Crying steadily, screams or sobs, frequent complaints</td></tr>
                    <tr><td><strong>CC</strong> — Consolability</td><td>Content, relaxed</td><td>Reassured by occasional touching, hugging, or being talked to; distractible</td><td>Difficult to console or comfort</td></tr>
                </tbody>
            </table>
            <p>FLACC is widely used in paediatric, geriatric, and critical care settings. A score ≥4 indicates moderate-to-severe pain requiring intervention.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> If a patient can report their pain, use the Numeric Rating Scale or FACES (self-report is the gold standard). Use FLACC only when the patient <em>cannot</em> self-report — for example, infants, patients with advanced dementia, or intubated/sedated patients.
            </div>

            <h4>Non-Pharmacological Pain Management</h4>
            <p>Before or alongside medication, the EMT has several powerful non-pharmacological tools to reduce pain. These interventions are within every EMT's scope and should not be overlooked:</p>
            <ul>
                <li><strong>Splinting and immobilisation:</strong> Immobilising a fractured or injured extremity reduces pain by preventing movement at the injury site. Use rigid splints, vacuum splints, traction splints (for femur fractures), or board splints. A well-applied splint can reduce pain by 2–4 points on the NRS.</li>
                <li><strong>Ice (cold therapy):</strong> Apply cold packs to acute injuries (fractures, sprains, burns) for 15–20 minutes to reduce swelling and provide analgesic effect by slowing nerve conduction velocity. Always place a barrier (e.g., cloth or towel) between the cold pack and the skin to prevent frostbite or ice burn.</li>
                <li><strong>Position of comfort:</strong> Allow the patient to find the position that minimises their pain. For example, a patient with peritonitis will prefer lying still with knees drawn up; a patient with COPD will prefer sitting upright (tripod position).</li>
                <li><strong>Reassurance and calm communication:</strong> Fear and anxiety amplify the perception of pain. Explaining what you are doing, being honest about what will hurt, and providing calm, confident reassurance can significantly reduce a patient's pain experience.</li>
                <li><strong>Distraction:</strong> Engaging the patient in conversation, asking about their family or interests, or having them focus on slow, deep breathing can reduce pain perception, especially in paediatric patients.</li>
                <li><strong>Smooth transport:</strong> Avoiding sudden acceleration, braking, and sharp turns reduces pain from fractures, abdominal conditions, and spinal injuries.</li>
            </ul>

            <h4>EMT-Level Pain Medications</h4>
            <p>The specific medications available to EMTs for pain management vary by jurisdiction and local protocol. The following are common EMT-level analgesics:</p>

            <h5>Penthrox (Methoxyflurane) — Inhalational Analgesic</h5>
            <p>Penthrox is a self-administered, inhalational analgesic approved for pain relief in trauma patients. The patient inhales the vapour through a handheld inhaler (the "green whistle"). Key facts:</p>
            <ul>
                <li><strong>Indications:</strong> Moderate-to-severe acute pain from trauma (fractures, burns, lacerations, dislocations) in conscious, spontaneously breathing patients</li>
                <li><strong>Dose:</strong> Self-administered via the Penthrox inhaler — the patient inhales intermittently as needed. Max cumulative dose: 3 inhalers (6 mL) per week, 2 inhalers (4 mL) per day, 1 inhaler (3 mL) per single event.</li>
                <li><strong>Onset:</strong> Rapid — within 2–5 inhalations (60–90 seconds)</li>
                <li><strong>Duration:</strong> Short — 3–5 minutes after the last inhalation (titratable)</li>
                <li><strong>Contraindications:</strong> Known hypersensitivity; patients with clinically significant renal impairment; history of malignant hyperthermia; concurrent use of tetracycline antibiotics; patients who are unconscious or unable to follow commands (requires patient cooperation to self-administer)</li>
                <li><strong>Side effects:</strong> Drowsiness, dizziness, metallic taste, headache. Less common: nausea/vomiting.</li>
                <li><strong>EMT responsibility:</strong> Explain use to the patient, supervise self-administration, monitor for side effects, document pain scores before and after.</li>
            </ul>

            <h5>Paracetamol (Acetaminophen) — Oral Analgesic</h5>
            <p>Paracetamol is a non-opioid analgesic commonly given orally for mild-to-moderate pain. It can be administered by EMTs under standing orders in many systems:</p>
            <ul>
                <li><strong>Indications:</strong> Mild-to-moderate pain (NRS 1–6), headache, musculoskeletal pain, as an adjunct to other analgesics</li>
                <li><strong>Dose (adult):</strong> 500–1000 mg orally (tablets or liquid suspension)</li>
                <li><strong>Onset:</strong> 30–60 minutes after ingestion</li>
                <li><strong>Duration:</strong> 4–6 hours</li>
                <li><strong>Maximum daily dose:</strong> 4,000 mg in adults (lower in patients with liver disease, chronic alcohol use, or malnutrition)</li>
                <li><strong>Contraindications:</strong> Known hypersensitivity, known liver disease or failure, concurrent paracetamol-containing medications already taken by the patient (always ask what the patient has taken before arrival)</li>
                <li><strong>Caution:</strong> Many over-the-counter cold and flu medications contain paracetamol — inadvertent stacking can lead to hepatotoxicity</li>
            </ul>

            <h5>Nitrous Oxide (Entonox / "Gas and Air") — Inhalational Analgesic</h5>
            <p>Nitrous oxide (N₂O) is a gas with analgesic and anxiolytic properties, self-administered via a demand-valve mask or mouthpiece. It is typically delivered as a 50:50 mixture with oxygen (Entonox). Key facts:</p>
            <ul>
                <li><strong>Indications:</strong> Moderate pain, procedural pain, anxiety associated with pain (especially useful for childbirth, burns, dressing changes, fracture reduction)</li>
                <li><strong>Dose:</strong> Self-administered by the patient via demand valve (the patient must be able to understand and follow instructions — the demand valve only opens when the patient inhales)</li>
                <li><strong>Onset:</strong> Very rapid — 30–60 seconds</li>
                <li><strong>Duration:</strong> 2–3 minutes after cessation (rapid elimination)</li>
                <li><strong>Contraindications:</strong> Altered mental status / inability to self-administer; pneumothorax (N₂O can expand a pneumothorax); bowel obstruction; decompression sickness; head injury with altered consciousness; maxillofacial injuries (cannot create a seal)</li>
                <li><strong>Safety:</strong> Demand-valve design prevents overdose — if the patient becomes drowsy and releases the mask, flow stops. Scavenging systems should be used to reduce occupational exposure. Chronic exposure is associated with vitamin B₁₂ depletion (bone marrow suppression, neuropathy).</li>
            </ul>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Important:</strong> Penthrox and nitrous oxide are self-administered by the patient — this is a safety feature. The patient controls the dose based on their pain level. If the patient becomes too drowsy to hold the inhaler or mask, they release it and the drug administration stops. <strong>Never force or hold a mask over a patient's face</strong> — this bypasses the safety feature and can lead to over-sedation.
            </div>

            <h4>Contraindications to EMT-Level Analgesics</h4>
            <table>
                <thead>
                    <tr><th>Medication</th><th>Contraindications / Cautions</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Penthrox</strong></td><td>Renal impairment, malignant hyperthermia history, tetracycline use, unconscious/uncooperative patient, cumulative dose limits</td></tr>
                    <tr><td><strong>Paracetamol</strong></td><td>Known liver disease, allergy, already taken paracetamol-containing medications, caution with chronic alcohol use</td></tr>
                    <tr><td><strong>Nitrous Oxide</strong></td><td>Altered mental status, pneumothorax, bowel obstruction, decompression sickness, head injury, maxillofacial injury (cannot seal), inability to self-administer</td></tr>
                </tbody>
            </table>

            <h4>Reassessment After Intervention</h4>
            <p>After any pain management intervention — pharmacological or non-pharmacological — the EMT must <strong>reassess</strong> the patient's pain level and vital signs. This is not optional; it is standard of care. The reassessment should include:</p>
            <ul>
                <li><strong>Pain score:</strong> Re-assess using the same scale as the initial assessment. A reduction of ≥2 points (or to NRS ≤4) is a typical target.</li>
                <li><strong>Qualitative change:</strong> "Is the pain better, worse, or the same?" "What is your pain level now?"</li>
                <li><strong>Location and quality:</strong> Has the pain changed location or character? (New pain could signal a change in pathology.)</li>
                <li><strong>Vital signs:</strong> Heart rate and blood pressure may decrease as pain is relieved. A persistently tachycardic or hypertensive patient may have inadequate pain relief or an ongoing pathological process.</li>
                <li><strong>Side effects:</strong> Nausea, drowsiness, dizziness, or respiratory depression (especially if nitrous oxide or other agents were used)</li>
                <li><strong>Documentation:</strong> Record the initial pain score, the intervention, the time, and the re-assessed pain score in the patient care report (PCR)</li>
            </ul>

            <h4>Documentation of Pain Scores</h4>
            <p>Pain assessment and management must be documented in the PCR. Key elements to document:</p>
            <ul>
                <li><strong>Initial pain assessment:</strong> Scale used (NRS, FACES, FLACC), score obtained, location, quality, radiation, aggravating/relieving factors (OPQRST)</li>
                <li><strong>Intervention:</strong> Non-pharmacological (splinting, ice, positioning) and/or pharmacological (medication name, dose, route, time, batch number for controlled drugs)</li>
                <li><strong>Reassessment:</strong> Pain score after intervention, time of reassessment, any side effects or adverse reactions</li>
                <li><strong>Patient response:</strong> Verbatim quotes are powerful — "Patient stated, 'My pain went from an 8 to a 4 after the splint was applied'"</li>
                <li><strong>Ongoing plan:</strong> Continue monitoring during transport, report to receiving facility</li>
            </ul>
            <p>Pain documentation is not just good clinical practice — it matters for quality improvement, regulatory compliance, and medical-legal protection. Inadequate pain documentation is one of the most common deficiencies found in EMS chart audits.</p>

            <h4>Barriers to Adequate Pain Management</h4>
            <p>Despite the availability of effective interventions, pain is frequently undertreated in the prehospital setting. Common barriers include:</p>
            <ul>
                <li><strong>Oligoanalgesia (under-treatment of pain):</strong> The most common barrier — pain is often dismissed, minimised, or not treated because providers are focused on other priorities (ABCs, transport). Treating pain is treating the patient.</li>
                <li><strong>Age-related disparities:</strong> Both the very young (infants and children) and the very old (elderly) are systematically undertreated. Children may not be asked about pain, and elderly patients may be assumed to have less pain or be unable to benefit from treatment.</li>
                <li><strong>Cultural and language barriers:</strong> Patients from different cultural backgrounds may express pain differently (some cultures encourage stoicism, others encourage vocal expression). Language barriers can prevent accurate assessment. Use interpreter services when available.</li>
                <li><strong>Substance use history:</strong> Patients with a history of substance use disorder are often undertreated due to concerns about drug-seeking behaviour or addiction. All patients deserve appropriate pain management regardless of their history.</li>
                <li><strong>Provider bias:</strong> Unconscious bias related to race, ethnicity, gender, age, or socioeconomic status can affect pain assessment and treatment decisions. Awareness of these biases is the first step to overcoming them.</li>
                <li><strong>Logistical barriers:</strong> Protocol restrictions, medication availability, lack of appropriate pain assessment tools, and short transport times may limit pain management options.</li>
                <li><strong>Knowledge and training gaps:</strong> Some EMTs may not be trained in available pain management options or may not know how to use pain assessment scales effectively.</li>
            </ul>
            <p>Overcoming these barriers requires a systematic approach: assess pain in every patient, use validated tools, provide both pharmacological and non-pharmacological interventions, reassess, and document. Every patient deserves adequate pain management.</p>
        </div>`,
        flashcards: [
            { question: "What is the Numeric Rating Scale (NRS) for pain and how is it interpreted?", answer: "Patient rates pain 0–10 (0 = no pain, 10 = worst imaginable). Mild = 1–3, Moderate = 4–6, Severe = 7–10. A reduction of ≥2 points is clinically meaningful.", category: "Pain Assessment" },
            { question: "What is the Wong-Baker FACES scale and when is it used?", answer: "A pain scale using six cartoon faces (0–10) for children aged 3–8 or patients with limited language/cognitive ability. The child points to the face that matches their pain.", category: "Pain Assessment" },
            { question: "What does the FLACC scale assess and when should it be used?", answer: "FLACC assesses Face, Legs, Activity, Cry, Consolability — each scored 0–2 (total 0–10). Used for non-verbal patients: infants, advanced dementia, or intubated/sedated patients.", category: "Pain Assessment" },
            { question: "What non-pharmacological pain management techniques are available to EMTs?", answer: "Splinting/immobilisation, ice (cold therapy with barrier), position of comfort, calm reassurance, distraction, and smooth transport technique.", category: "Non-Pharmacological" },
            { question: "What is Penthrox (methoxyflurane) and what are its contraindications?", answer: "A self-administered inhalational analgesic ('green whistle') for moderate-to-severe trauma pain. Contraindications: renal impairment, malignant hyperthermia, tetracycline use, unconscious patients.", category: "Penthrox" },
            { question: "What are the contraindications to nitrous oxide (Entonox) administration?", answer: "Altered mental status, inability to self-administer, pneumothorax, bowel obstruction, decompression sickness, head injury, and maxillofacial injuries preventing a mask seal.", category: "Nitrous Oxide" },
            { question: "What are common barriers to adequate pain management in the prehospital setting?", answer: "Oligoanalgesia (under-treatment), age disparities (children/elderly undertreated), cultural/language barriers, provider bias, substance use stigma, protocol restrictions, and knowledge gaps.", category: "Barriers" },
            { question: "What must be documented after a pain management intervention?", answer: "Initial pain score and scale used, the intervention (type, medication/dose/route/time), reassessed pain score, side effects, and patient response (including verbatim quotes).", category: "Documentation" }
        ],
        quiz: [
            {
                q: "A 6-year-old child with a forearm fracture is crying and holding her arm. She cannot describe her pain in numbers. What is the MOST appropriate pain assessment tool for this patient?",
                options: [
                    "Numeric Rating Scale (0–10)",
                    "Wong-Baker FACES Pain Rating Scale — point to the face that shows how much it hurts",
                    "FLACC scale — assess face, legs, activity, cry, consolability",
                    "Adult verbal numeric scale with caregiver proxy report"
                ],
                correct: 1,
                explanation: "The Wong-Baker FACES scale is validated for children aged 3–8. It uses cartoon faces to help children communicate their pain level without needing to understand numbers. Numeric scales are appropriate for age ≥8. FLACC is for non-verbal patients who cannot self-report at all."
            },
            {
                q: "An EMT applies a rigid splint to a patient's fractured forearm. Before splinting, the patient rated their pain as 8/10. After splinting, the patient reports the pain is now 5/10. What does this change indicate?",
                options: [
                    "The splint was applied incorrectly — a properly applied splint should eliminate all pain",
                    "The patient's pain has reduced by 3 points, which is a clinically meaningful improvement — the splint is effective",
                    "The pain score is still >4, so the splint is not working and should be removed",
                    "The patient is exaggerating their pain level — a fracture cannot decrease by 3 points from splinting alone"
                ],
                correct: 1,
                explanation: "A reduction of ≥2 points on the NRS is considered a clinically meaningful improvement. Splinting reduces pain by immobilising the fracture and preventing movement at the injury site. A 3-point reduction (8 → 5) is an excellent response. Continue to monitor and consider additional interventions (ice, pharmacological) if indicated."
            },
            {
                q: "[HARD] Which of the following patients is an appropriate candidate for nitrous oxide (Entonox) administration by an EMT?",
                options: [
                    "A 32-year-old male with a pneumothorax after a stabbing who needs pain relief for transport",
                    "A 24-year-old female in active labour with severe pain who is alert, oriented, and able to follow commands",
                    "An 18-year-old male with a head injury and GCS 12 who is confused and combative",
                    "A 7-year-old child with a deformed forearm who is crying and cannot hold the mask on their own"
                ],
                correct: 1,
                explanation: "Nitrous oxide (Entonox) is appropriate for the labouring patient who is alert, following commands, and can self-administer via the demand-valve mask. It is contraindicated in: pneumothorax (N₂O can expand the gas pocket), head injury with altered consciousness (N₂O increases intracranial pressure), and patients who cannot self-administer (child needs to hold the mask themselves — the demand-valve design requires the patient's inspiratory effort)."
            }
        ],
        critical: [
            {
                id: "crit_5_11_1",
                scenario: "You are called to a playground for a 4-year-old girl who fell from the monkey bars and is holding her left arm. She is crying and will not let anyone touch her arm. Her mother is present and very anxious. The arm appears angulated at the mid-forearm, suggesting a fracture of the radius and ulna. The child cannot describe her pain using numbers. Your partner suggests 'just splinting it quickly while she's distracted.' The mother asks you to 'do something for the pain.'",
                question: "How should the EMT assess this child's pain and manage the injury?",
                options: [
                    {t: "Assess pain using the Wong-Baker FACES scale by showing the child the faces and asking her to point to one. Use calm reassurance and distraction (let her hold a stuffed toy or phone with a video). Apply a well-padded rigid splint with gentle handling. Apply a cold pack (with a barrier) to the fracture site. Reassess pain using FACES after splinting", f: "Correct — Pain assessment in a 4-year-old should use the FACES scale (validated for ages 3–8). Management combines pharmacological and non-pharmacological approaches: distraction (toy, video), calm reassurance, gentle handling during splint application, cold therapy for pain and swelling, and reassessment using the same scale. If available and per protocol, consider Penthrox (self-administered inhalational analgesic) for procedural pain during splinting."},
                    {t: "The child is too young for pain assessment — paediatric pain is difficult to measure. Apply the splint quickly and transport. The pain will stop once the arm is immobilised", f: "Incorrect — Children at age 4 CAN self-report pain using the FACES scale. Paediatric pain is systematically undertreated ('oligoanalgesia'), and this child deserves appropriate assessment and management. 'Splinting quickly' without preparation, distraction, or pain control causes unnecessary suffering and may make the child uncooperative for the rest of the assessment."}
                ],
                correct: 0,
                explanation: "Children as young as 3 years can self-report pain using the FACES scale — age is not a reason to skip pain assessment. Management for this paediatric fracture: 1) Assess with FACES (establish baseline), 2) Distract and calm the child (toy, phone video, calm voice), 3) Apply a well-padded rigid splint with gentle handling (a second person to help is ideal), 4) Apply a cold pack (with cloth barrier) for 15–20 minutes, 5) Reassess pain with FACES, 6) Document all assessments and interventions. Consider Penthrox per protocol for procedural analgesia during splinting if the child is old enough to cooperate with self-administration (typically ≥5–6 years).",
                kpi: "Appropriate paediatric pain assessment using age-validated tool with multi-modal management"
            },
            {
                id: "crit_5_11_2",
                scenario: "You are called to a nursing home for an 82-year-old female with a suspected hip fracture after a fall. She is lying on the floor, alert but in obvious distress, moaning, and unable to move her right leg, which is shortened and externally rotated. The staff has not given her any pain medication. Her vital signs are: HR 104, BP 148/88, RR 20, SpO₂ 95%. She has a history of dementia and is unable to reliably use the Numeric Rating Scale. She flinches and groans when anyone approaches her right hip. The nursing home has a long, narrow hallway and you need to move her to the ambulance.",
                question: "What pain management approach is most appropriate for this patient?",
                options: [
                    {t: "Pain assessment is not reliable in this patient due to her dementia — the hip fracture is obvious. Splint the leg with a traction splint or long board splint, apply a cold pack to the hip area, pad the stretcher, handle gently, and transport smoothly. Use the FLACC scale to assess pain non-verbally before and after splinting", f: "Correct — This patient cannot self-report due to dementia, so the FLACC scale is the appropriate assessment tool (score based on face, legs, activity, cry, consolability). Management priorities: 1) Immobilise the suspected hip fracture with a traction splint (if no contraindications) or long spine board with padding, 2) Apply cold pack to the hip, 3) Use a scoop stretcher or log-roll for minimal movement, 4) Pad the stretcher well, 5) Transport with gentle, smooth driving, 6) Reassess pain using FLACC after immobilisation."},
                    {t: "The patient has dementia and cannot report pain — there is no reliable way to assess or manage her pain. Focus on immobilisation and transport. Pain medication cannot be given without a pain score", f: "Incorrect — The FLACC scale is specifically designed for non-verbal patients, including those with dementia. Pain is assessable and treatable in this population. Assuming a patient with dementia cannot benefit from pain management is a form of age-related oligoanalgesia. The flinching and groaning are signs of significant pain and should be treated."}
                ],
                correct: 0,
                explanation: "Patients with dementia are frequently undertreated for pain because they cannot self-report using standard scales. The FLACC scale provides a validated observational assessment. This patient's FLACC score would likely be high (flinching = face 2, leg externally rotated/tense = legs 2, moaning = cry 2, guarding = activity 2, not consoled by staff = consolability 2). Management: 1) Traction splint (for mid-shaft femur fracture) or padded immobilisation (for suspected hip fracture), 2) Cold therapy, 3) Gentle handling (scoop stretcher, log roll), 4) Smooth transport, 5) Reassess FLACC, 6) Document all findings and interventions. Consider pharmacological analgesia per protocol.",
                kpi: "Uses FLACC scale for pain assessment in a non-verbal elderly patient with dementia"
            },
            {
                id: "crit_5_11_3",
                scenario: "You are treating a 28-year-old male with an isolated, closed mid-shaft femur fracture from a motorcycle crash. He is alert, oriented, and in severe pain (NRS 9/10). Vital signs: HR 118, BP 138/84, RR 22, SpO₂ 97%. He has no other injuries, no known allergies, and no significant medical history. He is asking for pain relief. Your protocol allows Penthrox (methoxyflurane) via self-administered inhaler for trauma pain. You explain the device and he understands how to use it. He takes several inhalations and after 3 minutes reports his pain is now 6/10. He asks if he can 'use it more.' His vital signs are unchanged.",
                question: "What is the appropriate next step in managing this patient's pain?",
                options: [
                    {t: "The patient has already received the maximum benefit from Penthrox — tell him the pain will not improve further and he must wait for hospital analgesia", f: "Incorrect — Penthrox is titratable; the patient can continue to self-administer as needed up to cumulative dose limits (1 inhaler per event, 2 per day). The patient-controlled nature means he can increase his dose by taking more frequent or deeper inhalations. A reduction from 9 to 6 is a good start, but further improvement may be possible. Additionally, non-pharmacological measures should be employed."},
                    {t: "Encourage the patient to continue using the Penthrox inhaler as needed (it is self-titrating), apply a traction splint to immobilise the femur fracture (this may significantly reduce pain), apply a cold pack to the thigh, position him comfortably for transport, and reassess pain and vital signs every 5 minutes. Document initial NRS, intervention, and reassessment scores", f: "Correct — Penthrox is self-titrated by the patient based on their pain level. He can continue to use it as needed (up to 1 inhaler per event). The most powerful non-pharmacological intervention for a femur fracture is a traction splint — which provides inline traction, reduces muscle spasm, and can dramatically reduce pain (often by 3–5 points). Combining pharmacological (Penthrox) and non-pharmacological (traction splint, ice, positioning) approaches provides the best pain relief."}
                ],
                correct: 1,
                explanation: "Multi-modal analgesia is the standard of care — combining pharmacological and non-pharmacological interventions provides better pain relief than either alone. For this patient: 1) Continue Penthrox as needed (self-titrated, patient-controlled), 2) Apply a traction splint — this is the single most effective pain intervention for a femur fracture as it provides inline traction, reduces muscle spasm, and immobilises the fracture fragments, 3) Cold pack to the thigh for analgesia and swelling reduction, 4) Position of comfort and smooth transport, 5) Reassess NRS and vital signs every 5 minutes, 6) Document all assessments and interventions. The patient's vital signs (mild tachycardia) may improve as pain is better controlled.",
                kpi: "Combines pharmacological and non-pharmacological interventions for multi-modal pain management"
            }
        ]
    }
    ]
};