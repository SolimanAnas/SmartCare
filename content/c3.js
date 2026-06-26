/* ========== Chapter 3 – Airway & Ventilation ========== */
window.CPG_DATA = {
    id: "c3",
    title: "Airway & Ventilation",
    shortTitle: "3. Airway & Ventilation",
    sections: [
        {
            id: "c3s1",
            shortTitle: "3.1 Airway Anatomy",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg> Airway Anatomy & Physiology</h3>
                            <p>A patent airway is the first priority in every patient. Air must travel unobstructed from the nose and mouth to the alveoli, where gas exchange occurs.</p>
                            <h4>1. Upper Airway</h4>
                            <ul>
                                <li><strong>Pharynx:</strong> Nasopharynx and oropharynx; the tongue is the most common obstruction in an unresponsive patient.</li>
                                <li><strong>Epiglottis:</strong> Covers the trachea during swallowing to protect the lower airway.</li>
                                <li><strong>Larynx:</strong> Houses the vocal cords; marks the start of the lower airway.</li>
                            </ul>
                            <h4>2. Lower Airway</h4>
                            <ul>
                                <li><strong>Conduction:</strong> Trachea → mainstem bronchi → bronchioles.</li>
                                <li><strong>Gas exchange:</strong> Occurs at the alveoli (O₂ in, CO₂ out).</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Anatomy', 'question': 'Most common airway obstruction in an unresponsive supine patient?', 'answer': 'The tongue falling back against the posterior pharynx.'}, {'category': 'Anatomy', 'question': 'Where does gas exchange occur?', 'answer': 'At the alveoli.'}],
            quiz: [{'q': 'The structure that covers the trachea during swallowing is the:', 'options': ['Uvula', 'Epiglottis', 'Carina'], 'correct': 1, 'explanation': 'The epiglottis protects the lower airway during swallowing.'}],
            critical: [{'id': 'crit_3_1_1', 'scenario': 'An unresponsive patient is supine and making snoring sounds with each breath.', 'question': 'What is the most likely cause and first action?', 'options': [{'t': 'Fluid in the airway — suction immediately', 'f': 'Incorrect. Snoring indicates the tongue, not fluid.'}, {'t': 'The tongue obstructing the airway — reposition the airway', 'f': 'Correct. Snoring = tongue; open the airway with a manual maneuver.'}], 'correct': 1, 'explanation': 'Snoring respirations indicate partial obstruction by the tongue; reposition the airway first.', 'kpi': 'Airway obstruction recognition'}]
        },
        {
            id: "c3s2",
            shortTitle: "3.2 Airway Assessment",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Recognising the Compromised Airway</h3>
                            <p>Look, listen, and feel for adequate air movement. Act on early signs — cyanosis is a late finding.</p>
                            <h4>Airway Sounds & Their Meaning</h4>
                            <ul>
                                <li><strong>Snoring:</strong> Tongue → reposition / insert an adjunct.</li>
                                <li><strong>Gurgling:</strong> Fluid → suction.</li>
                                <li><strong>Stridor:</strong> Upper-airway swelling → oxygen, gentle handling, rapid transport.</li>
                                <li><strong>Wheezing:</strong> Lower-airway narrowing (bronchospasm).</li>
                            </ul>
                            <h4>Signs of Inadequate Breathing</h4>
                            <ul>
                                <li>Rate outside 12–20/min (adult), shallow depth, accessory-muscle use, retractions.</li>
                                <li>Altered mental status, cyanosis (late), one- or two-word speech.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Assessment', 'question': 'What does stridor indicate?', 'answer': 'Upper-airway narrowing/swelling — a true emergency.'}, {'category': 'Assessment', 'question': 'Is cyanosis an early or late sign?', 'answer': 'A late sign of hypoxia — act before it appears.'}],
            quiz: [{'q': 'Gurgling respirations are best managed by:', 'options': ['High-flow oxygen', 'Suctioning', 'Chest compressions'], 'correct': 1, 'explanation': 'Gurgling indicates fluid in the airway; suction immediately.'}],
            critical: [{'id': 'crit_3_2_1', 'scenario': 'A patient with a severe allergic reaction develops a hoarse voice and high-pitched stridor.', 'question': 'What does this indicate?', 'options': [{'t': 'A minor reaction that will resolve', 'f': 'Incorrect. Stridor signals airway swelling.'}, {'t': 'Impending airway obstruction from swelling — emergency', 'f': 'Correct. Stridor with anaphylaxis is a critical airway threat.'}], 'correct': 1, 'explanation': 'Stridor in anaphylaxis indicates laryngeal edema and impending obstruction.', 'kpi': 'Airway threat recognition'}]
        },
        {
            id: "c3s3",
            shortTitle: "3.3 Airway Adjuncts",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#git-merge"/></svg> Basic Airway Adjuncts</h3>
                            <p>Adjuncts hold the airway open after a manual maneuver. They do not protect against aspiration.</p>
                            <h4>Oropharyngeal Airway (OPA)</h4>
                            <ul>
                                <li><strong>Use:</strong> Unresponsive patients with NO gag reflex.</li>
                                <li><strong>Size:</strong> Corner of the mouth to the angle of the jaw / earlobe.</li>
                            </ul>
                            <h4>Nasopharyngeal Airway (NPA)</h4>
                            <ul>
                                <li><strong>Use:</strong> Tolerated with an intact gag reflex.</li>
                                <li><strong>Caution:</strong> Avoid in suspected basal skull fracture / major facial trauma; lubricate before insertion.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Adjuncts', 'question': 'Contraindication for an OPA?', 'answer': 'An intact gag reflex (risks vomiting and aspiration).'}, {'category': 'Adjuncts', 'question': 'Key contraindication for an NPA?', 'answer': 'Suspected basal skull fracture / significant facial trauma.'}],
            quiz: [{'q': 'How is an OPA sized?', 'options': ['Nostril to earlobe', 'Corner of mouth to angle of jaw', 'Chin to sternum'], 'correct': 1, 'explanation': 'Measure from the corner of the mouth to the angle of the jaw (or earlobe).'}],
            critical: [{'id': 'crit_3_3_1', 'scenario': 'You insert an OPA and the semi-conscious patient gags and begins to retch.', 'question': 'What is your action?', 'options': [{'t': 'Tape the OPA in place', 'f': 'Incorrect. A gag reflex means the OPA is not tolerated.'}, {'t': 'Remove the OPA, be ready to suction, consider an NPA', 'f': 'Correct. Remove it and protect against aspiration.'}], 'correct': 1, 'explanation': 'A gag reflex contraindicates the OPA; remove it and consider an NPA.', 'kpi': 'Adjunct selection'}]
        },
        {
            id: "c3s4",
            shortTitle: "3.4 Oxygen Therapy",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg> Oxygen Delivery</h3>
                            <p>Titrate oxygen to target saturation rather than giving high-flow to everyone.</p>
                            <h4>Targets</h4>
                            <ul>
                                <li><strong>General:</strong> SpO₂ 94–98%.</li>
                                <li><strong>COPD / chronic CO₂ retainers:</strong> 88–92% to avoid blunting respiratory drive.</li>
                            </ul>
                            <h4>Delivery Devices</h4>
                            <ul>
                                <li><strong>Nasal cannula:</strong> 1–6 L/min (~24–44%).</li>
                                <li><strong>Simple mask:</strong> 6–10 L/min (~40–60%).</li>
                                <li><strong>Non-rebreather mask:</strong> 10–15 L/min (~60–90%) for the critically hypoxic.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Oxygen', 'question': 'Target SpO₂ for an acute COPD exacerbation?', 'answer': '88–92%.'}, {'category': 'Oxygen', 'question': 'Flow rate for a non-rebreather mask?', 'answer': '10–15 L/min.'}],
            quiz: [{'q': 'A general medical patient should be oxygenated to a target SpO₂ of:', 'options': ['88–92%', '94–98%', '100% always'], 'correct': 1, 'explanation': '94–98% is the general target; over-oxygenation has its own harms.'}],
            critical: [{'id': 'crit_3_4_1', 'scenario': 'A known COPD patient is short of breath with an SpO₂ of 86%. A colleague applies a non-rebreather at 15 L/min and the patient becomes drowsy.', 'question': 'What is the concern?', 'options': [{'t': 'Nothing — more oxygen is always better', 'f': 'Incorrect. Excess O₂ can blunt the hypoxic drive in some COPD patients.'}, {'t': 'Over-oxygenation; titrate to 88–92% and monitor', 'f': 'Correct. Titrate to target and watch ventilation.'}], 'correct': 1, 'explanation': 'In chronic CO₂ retainers, titrate oxygen to 88–92% and monitor mental status/ventilation.', 'kpi': 'Oxygen titration'}]
        },
        {
            id: "c3s5",
            shortTitle: "3.5 Ventilation",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#activity"/></svg> Assisted Ventilation</h3>
                            <p>When breathing is absent or inadequate, provide positive-pressure ventilation with a bag-valve mask (BVM).</p>
                            <h4>BVM Principles</h4>
                            <ul>
                                <li><strong>Rate:</strong> About 1 breath every 6 seconds (~10/min) for an adult with a pulse.</li>
                                <li><strong>Volume:</strong> Enough to produce visible, gentle chest rise — avoid over-inflation.</li>
                                <li><strong>Seal:</strong> Two-rescuer technique (E-C clamp) improves the mask seal.</li>
                            </ul>
                            <h4>Hazards</h4>
                            <ul>
                                <li>Gastric insufflation → vomiting/aspiration (from too fast/too much).</li>
                                <li>Reduced cardiac output from excessive rate or volume.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Ventilation', 'question': 'Ventilation rate for an adult in respiratory failure with a pulse?', 'answer': 'About 1 breath every 6 seconds (~10/min).'}, {'category': 'Ventilation', 'question': 'How much volume should each BVM breath deliver?', 'answer': 'Just enough for gentle, visible chest rise.'}],
            quiz: [{'q': 'A common complication of ventilating too fast and too forcefully is:', 'options': ['Bradycardia only', 'Gastric distension and aspiration', 'Hypertension'], 'correct': 1, 'explanation': 'Excess pressure/volume inflates the stomach, raising aspiration risk.'}],
            critical: [{'id': 'crit_3_5_1', 'scenario': 'A patient in respiratory failure is being ventilated by a single rescuer who cannot maintain a seal; the chest barely rises.', 'question': 'What improves ventilation?', 'options': [{'t': 'Squeeze the bag harder and faster', 'f': 'Incorrect. That causes gastric distension, not better ventilation.'}, {'t': 'Switch to two-rescuer BVM for a better seal', 'f': 'Correct. Two-rescuer technique improves the seal and chest rise.'}], 'correct': 1, 'explanation': 'A poor seal is best fixed with two-rescuer BVM, not more force.', 'kpi': 'Effective ventilation'}]
        },
        {
            id: "c3s6",
            shortTitle: "3.6 Suction",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#filter"/></svg> Airway Suctioning</h3>
                            <p>Suction clears blood, vomit, and secretions a manual maneuver cannot.</p>
                            <h4>Technique</h4>
                            <ul>
                                <li><strong>Devices:</strong> Rigid Yankauer for the mouth; soft catheter for the nose/tube.</li>
                                <li><strong>Depth:</strong> Insert only as far as you can see (corner of mouth to earlobe).</li>
                                <li><strong>Apply on withdrawal only;</strong> limit to ≤15 s adult, ≤10 s child, ≤5 s infant.</li>
                                <li>Pre-oxygenate and re-oxygenate between attempts.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Suction', 'question': 'Maximum suction time per attempt for an adult?', 'answer': '≤15 seconds (≤10 s child, ≤5 s infant).'}, {'category': 'Suction', 'question': 'When is suction applied — insertion or withdrawal?', 'answer': 'Only while withdrawing the catheter.'}],
            quiz: [{'q': 'Two risks of prolonged suctioning are:', 'options': ['Hypertension and tachycardia', 'Hypoxia and bradycardia', 'Fever and seizures'], 'correct': 1, 'explanation': 'Suction removes oxygen and may trigger a vagal response (bradycardia).'}],
            critical: [{'id': 'crit_3_6_1', 'scenario': 'A patient vomits during BVM ventilation; the airway fills with fluid and ventilation becomes difficult.', 'question': 'What is your immediate action?', 'options': [{'t': 'Continue ventilating through the fluid', 'f': 'Incorrect. This forces vomit into the lungs.'}, {'t': 'Suction the airway clear, then resume ventilation', 'f': 'Correct. Clear the airway before resuming ventilation.'}], 'correct': 1, 'explanation': 'Clear the airway with suction before resuming ventilation to prevent aspiration.', 'kpi': 'Airway clearance'}]
        },
        {
            id: "c3s7",
            shortTitle: "3.7 Advanced Airways",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#layers"/></svg> Advanced Airway Overview</h3>
                            <p>When basic measures are inadequate, trained providers may place an advanced airway. Confirm placement and monitor continuously.</p>
                            <h4>Device Types</h4>
                            <ul>
                                <li><strong>Supraglottic:</strong> i-gel, King LT, LMA — sit above the cords; faster, fewer interruptions.</li>
                                <li><strong>Endotracheal tube:</strong> Definitive airway placed through the cords (advanced scope).</li>
                            </ul>
                            <h4>Confirmation & Monitoring</h4>
                            <ul>
                                <li><strong>Waveform capnography (EtCO₂):</strong> The gold standard to confirm and monitor placement.</li>
                                <li>Auscultate breath sounds bilaterally; watch for tube displacement with movement.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Advanced', 'question': 'Gold-standard confirmation of advanced airway placement?', 'answer': 'Waveform capnography (continuous EtCO₂).'}, {'category': 'Advanced', 'question': 'Give an example of a supraglottic airway.', 'answer': 'i-gel, King LT, or LMA.'}],
            quiz: [{'q': 'The most reliable way to confirm and monitor an advanced airway is:', 'options': ['Chest rise alone', 'Waveform capnography', 'Pulse oximetry'], 'correct': 1, 'explanation': 'Continuous EtCO₂ confirms placement and detects displacement immediately.'}],
            critical: [{'id': 'crit_3_7_1', 'scenario': 'After moving a patient with a supraglottic airway, the capnography waveform suddenly disappears.', 'question': 'What does this most likely mean?', 'options': [{'t': 'The monitor needs recalibration', 'f': 'Incorrect. Assume an airway problem until proven otherwise.'}, {'t': 'Airway displacement — reassess and re-confirm immediately', 'f': 'Correct. Loss of waveform signals displacement/obstruction.'}], 'correct': 1, 'explanation': 'A lost capnography waveform signals airway displacement; reassess at once.', 'kpi': 'Airway monitoring'}]
        },
        {
            id: "c3s8",
            shortTitle: "3.8 Respiratory Failure",
            summary: `<div class="sum-card">
                            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#alert-triangle"/></svg> Respiratory Distress vs Failure</h3>
                            <p>Distress is the body compensating; failure is when compensation fails and the patient can no longer oxygenate or ventilate.</p>
                            <h4>Distress (compensating)</h4>
                            <ul>
                                <li>Increased work of breathing, able to speak, alert, maintaining saturation.</li>
                            </ul>
                            <h4>Failure (decompensating)</h4>
                            <ul>
                                <li>Falling SpO₂ despite oxygen, declining mental status, slowing or irregular breathing, fatigue.</li>
                                <li><strong>Action:</strong> Begin assisted ventilation (BVM) immediately — do not wait for arrest.</li>
                            </ul>
                        </div>`,
            flashcards: [{'category': 'Failure', 'question': 'A key sign that distress has become failure?', 'answer': 'Declining mental status and/or a falling respiratory rate despite oxygen.'}, {'category': 'Failure', 'question': 'Treatment when a patient enters respiratory failure?', 'answer': 'Immediate assisted ventilation with a BVM.'}],
            quiz: [{'q': 'A patient in respiratory distress becomes drowsy with a slowing respiratory rate. This indicates:', 'options': ['Improvement', 'Respiratory failure — assist ventilations', 'A normal response to oxygen'], 'correct': 1, 'explanation': 'Drowsiness with a slowing rate signals failure; begin BVM ventilation.'}],
            critical: [{'id': 'crit_3_8_1', 'scenario': 'An asthma patient who was loudly wheezing and anxious becomes quiet, sleepy, and has a barely audible chest.', 'question': 'What does the "silent chest" indicate?', 'options': [{'t': 'The attack is resolving', 'f': 'Incorrect. A silent chest with fatigue is ominous.'}, {'t': 'Severe airflow limitation and impending respiratory failure', 'f': 'Correct. Minimal air movement plus fatigue signals failure — assist ventilation and expedite transport.'}], 'correct': 1, 'explanation': 'A silent chest with declining mental status is a pre-arrest sign of respiratory failure.', 'kpi': 'Recognising decompensation'}]
        }
    ]
};
