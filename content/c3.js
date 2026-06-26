/* ========== Chapter 3 – Airway & Ventilation ========== */
window.CPG_DATA = {
    id: "c3",
    title: "Airway & Ventilation",
    shortTitle: "3. Airway & Ventilation",
    sections: [
{
    id: "c3s1",
    shortTitle: "3.1 Airway Anatomy & Physiology",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg> Airway Anatomy & Physiology</h3>

        <p>A patent (open, unobstructed) airway is the single highest priority in every patient. Without a clear path for air to reach the alveoli, oxygenation and ventilation are impossible and brain injury begins within minutes. The airway is divided into an upper and a lower portion.</p>

        <h4>Upper Airway</h4>
        <p>The upper airway warms, humidifies, and filters inhaled air and protects the lower airway from aspiration.</p>
        <ul>
            <li><strong>Nasopharynx / Oropharynx:</strong> Air passages behind the nose and mouth. In an unresponsive supine patient the tongue (attached to the mandible) falls back against the posterior pharynx — the most common cause of airway obstruction.</li>
            <li><strong>Epiglottis:</strong> A leaf-shaped flap that closes over the glottic opening during swallowing, directing food into the esophagus and protecting the trachea.</li>
            <li><strong>Larynx:</strong> Houses the vocal cords (the narrowest point of the adult airway) and marks the transition to the lower airway.</li>
        </ul>

        <h4>Lower Airway</h4>
        <ul>
            <li><strong>Trachea</strong> → divides at the <strong>carina</strong> into right and left <strong>mainstem bronchi</strong> → <strong>bronchioles</strong> → <strong>alveoli</strong>.</li>
            <li>The right mainstem bronchus is straighter and more vertical — aspirated objects and over-inserted ET tubes tend to enter the right lung.</li>
            <li><strong>Alveoli</strong> are the site of gas exchange (O₂ in, CO₂ out) across a thin capillary membrane.</li>
        </ul>

        <table>
            <thead><tr><th>Feature</th><th>Adult</th><th>Pediatric (key differences)</th></tr></thead>
            <tbody>
                <tr><td>Tongue</td><td>Proportionate</td><td>Proportionally larger → obstructs more easily</td></tr>
                <tr><td>Airway diameter</td><td>Wider</td><td>Narrower → small swelling causes large resistance</td></tr>
                <tr><td>Occiput</td><td>Neutral when supine</td><td>Large → flexes the neck; pad under shoulders to keep neutral</td></tr>
                <tr><td>Narrowest point</td><td>Vocal cords (glottis)</td><td>Cricoid cartilage (in young children)</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> In an unresponsive patient, the tongue is the most common airway obstruction. A simple head-tilt/chin-lift (or jaw-thrust if trauma is suspected) lifts the tongue off the posterior pharynx and may be all that is needed to restore a patent airway.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the most common cause of airway obstruction in an unresponsive supine patient?", answer: "The tongue falling back against the posterior pharynx.", category: "Anatomy"},
        {question: "What is the function of the epiglottis?", answer: "It closes over the glottic opening during swallowing to keep food and liquid out of the trachea and lower airway.", category: "Anatomy"},
        {question: "Where does gas exchange occur in the lungs?", answer: "At the alveoli, across the thin alveolar-capillary membrane (O₂ in, CO₂ out).", category: "Physiology"},
        {question: "Why do aspirated objects more often enter the right lung?", answer: "The right mainstem bronchus is straighter and more vertical than the left.", category: "Anatomy"},
        {question: "What is the narrowest point of the adult airway?", answer: "The vocal cords (glottic opening). In young children it is the cricoid cartilage.", category: "Anatomy"},
        {question: "How does a child's tongue affect airway management?", answer: "It is proportionally larger than an adult's, so it obstructs the airway more easily.", category: "Pediatric"},
        {question: "How should a small child be positioned to keep the airway neutral?", answer: "Place padding under the shoulders to offset the large occiput and prevent neck flexion.", category: "Pediatric"}
    ],
    quiz: [
        {q: "In an unresponsive supine patient, the most common airway obstruction is:", options: ["Vomit", "The tongue", "Blood", "Dentures"], correct: 1, explanation: "The tongue is attached to the mandible; when muscle tone is lost it falls back against the posterior pharynx."},
        {q: "Gas exchange between the lungs and bloodstream occurs in the:", options: ["Trachea", "Bronchioles", "Alveoli", "Larynx"], correct: 2, explanation: "Alveoli provide the thin membrane across which O₂ and CO₂ diffuse."},
        {q: "In a young child, the narrowest part of the airway is the:", options: ["Vocal cords", "Cricoid cartilage", "Carina", "Nostrils"], correct: 1, explanation: "Unlike adults (narrowest at the cords), young children are narrowest at the cricoid cartilage."}
    ],
    critical: [
        {id: "crit_3_1_1", scenario: "An unresponsive adult is supine and making loud snoring sounds with each breath. SpO₂ is 90%.", question: "What is the most likely cause and your first action?", options: [{t: "Fluid in the airway — suction immediately", f: "Incorrect. Snoring indicates soft-tissue (tongue) obstruction, not fluid (which gurgles)."}, {t: "The tongue obstructing the airway — open it with a head-tilt/chin-lift", f: "Correct. Snoring = the tongue; a manual airway maneuver lifts it off the pharynx."}], correct: 1, explanation: "Snoring respirations indicate partial obstruction by the tongue. Reposition the airway first; insert an adjunct if needed.", kpi: "Recognizes tongue obstruction and performs a manual airway maneuver"},
        {id: "crit_3_1_2", scenario: "A 2-year-old is unresponsive. A new EMT places a folded towel under the head as they would for an adult.", question: "What is the problem?", options: [{t: "Nothing — head padding is correct for all ages", f: "Incorrect. A child's large occiput already flexes the neck."}, {t: "Padding under the head flexes the child's neck and can obstruct the airway; pad under the shoulders instead", f: "Correct. The large occiput means shoulder padding keeps the airway neutral."}], correct: 1, explanation: "Children have a proportionally large occiput. Padding the head worsens flexion; pad the shoulders to maintain a neutral, open airway.", kpi: "Applies age-appropriate airway positioning"},
        {id: "crit_3_1_3", scenario: "After an intubation attempt by a paramedic, breath sounds are heard only over the right chest and the left chest is silent.", question: "What is the most likely explanation?", options: [{t: "The tube is in the esophagus", f: "Incorrect. Esophageal placement produces no breath sounds and gurgling over the stomach."}, {t: "The tube was advanced too far into the right mainstem bronchus", f: "Correct. The right mainstem is straighter; over-insertion ventilates only the right lung."}], correct: 1, explanation: "Right-sided-only breath sounds suggest right mainstem intubation. The tube should be withdrawn slightly until bilateral sounds return.", kpi: "Recognizes right mainstem intubation from unilateral breath sounds"}
    ]
},
{
    id: "c3s2",
    shortTitle: "3.2 Airway Assessment",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Airway Assessment</h3>

        <p>Assess the airway by <strong>looking, listening, and feeling</strong> for adequate air movement. The sounds a patient makes are a fast, reliable guide to both the problem and its solution. Act on early signs — cyanosis is a late and ominous finding.</p>

        <h4>Airway Sounds → Cause → Action</h4>
        <table>
            <thead><tr><th>Sound</th><th>Indicates</th><th>Action</th></tr></thead>
            <tbody>
                <tr><td>Snoring</td><td>Partial obstruction by the tongue</td><td>Reposition airway; insert an adjunct (OPA/NPA)</td></tr>
                <tr><td>Gurgling</td><td>Fluid (blood, vomit, secretions)</td><td>Suction immediately</td></tr>
                <tr><td>Stridor (high-pitched, inspiratory)</td><td>Upper-airway narrowing/swelling</td><td>Oxygen, gentle handling, rapid transport; anticipate obstruction</td></tr>
                <tr><td>Wheezing</td><td>Lower-airway narrowing (bronchospasm)</td><td>Bronchodilator per protocol; assist ventilation if inadequate</td></tr>
                <tr><td>Crowing / hoarseness</td><td>Laryngeal irritation or edema</td><td>Treat as an airway threat; rapid transport</td></tr>
            </tbody>
        </table>

        <h4>Signs of Inadequate Breathing</h4>
        <ul>
            <li>Rate outside the normal range (adult 12–20/min), shallow depth, or irregular pattern.</li>
            <li>Accessory-muscle use, retractions, nasal flaring, see-saw (paradoxical) breathing.</li>
            <li>Only able to speak in one- or two-word sentences; tripod positioning.</li>
            <li>Altered mental status, restlessness/agitation (early hypoxia), cyanosis (late).</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> Restlessness and anxiety are often the <em>earliest</em> signs of hypoxia — long before cyanosis. A patient who becomes suddenly calm and sleepy after a period of agitation may be deteriorating, not improving.
        </div>
    </div>`,
    flashcards: [
        {question: "What does snoring indicate and how is it fixed?", answer: "Partial obstruction by the tongue — reposition the airway and consider an adjunct.", category: "Sounds"},
        {question: "What does gurgling indicate and how is it fixed?", answer: "Fluid (blood, vomit, secretions) in the airway — suction immediately.", category: "Sounds"},
        {question: "What does stridor suggest?", answer: "Upper-airway narrowing from swelling (e.g., anaphylaxis, croup, epiglottitis) — a true airway emergency.", category: "Sounds"},
        {question: "What is the difference between stridor and wheezing?", answer: "Stridor is upper-airway (above the cords), usually inspiratory; wheezing is lower-airway bronchospasm, usually expiratory.", category: "Sounds"},
        {question: "What is the earliest sign of hypoxia?", answer: "Restlessness, anxiety, or altered mental status — cyanosis is a late sign.", category: "Assessment"},
        {question: "List three physical signs of inadequate breathing.", answer: "Accessory-muscle use/retractions, one- or two-word speech, abnormal rate or depth (also nasal flaring, tripod position, cyanosis).", category: "Assessment"},
        {question: "Why is a suddenly calm, sleepy patient after agitation concerning?", answer: "It may signal worsening hypoxia and impending respiratory failure, not improvement.", category: "Assessment"}
    ],
    quiz: [
        {q: "Gurgling respirations are best managed by:", options: ["High-flow oxygen", "Suctioning", "An oropharyngeal airway", "Chest compressions"], correct: 1, explanation: "Gurgling means fluid in the airway; suction before it is aspirated."},
        {q: "High-pitched inspiratory stridor most strongly suggests:", options: ["Lower-airway bronchospasm", "Upper-airway narrowing/swelling", "Normal breathing", "Hyperventilation"], correct: 1, explanation: "Stridor localizes to the upper airway and signals possible impending obstruction."},
        {q: "Which is the EARLIEST sign of hypoxia?", options: ["Cyanosis", "Restlessness/anxiety", "Bradycardia", "Cardiac arrest"], correct: 1, explanation: "Mental-status change (restlessness) precedes cyanosis, which is a late finding."}
    ],
    critical: [
        {id: "crit_3_2_1", scenario: "A patient with a severe allergic reaction develops a hoarse voice and high-pitched inspiratory stridor.", question: "What does this indicate?", options: [{t: "A minor reaction that will resolve on its own", f: "Incorrect. Stridor with anaphylaxis signals laryngeal edema."}, {t: "Impending airway obstruction from swelling — a critical emergency", f: "Correct. Hoarseness and stridor mean the airway is closing; give epinephrine per protocol and transport rapidly."}], correct: 1, explanation: "Stridor and voice change in anaphylaxis indicate laryngeal edema and impending obstruction. Epinephrine, oxygen, and rapid transport are urgent.", kpi: "Recognizes anaphylactic airway swelling as a critical threat"},
        {id: "crit_3_2_2", scenario: "An anxious, restless trauma patient has clear lungs and an SpO₂ that reads 96%.", question: "What should you consider?", options: [{t: "The patient is fine because SpO₂ is normal", f: "Incorrect. Restlessness can be early hypoxia or shock before SpO₂ drops."}, {t: "Restlessness may be early hypoxia/shock — reassess airway, breathing, and perfusion", f: "Correct. Treat agitation as a warning sign and look for a cause."}], correct: 1, explanation: "Anxiety and restlessness can be the first sign of hypoxia or hypoperfusion even with a 'normal' SpO₂. Reassess and trend.", kpi: "Treats altered mental status as a possible early hypoxia sign"},
        {id: "crit_3_2_3", scenario: "An asthma patient who was loudly wheezing becomes quiet with a barely audible chest and is now drowsy.", question: "What does the 'silent chest' indicate?", options: [{t: "The asthma attack is resolving", f: "Incorrect. With fatigue and drowsiness, a silent chest is ominous."}, {t: "Severe airflow limitation and impending respiratory failure", f: "Correct. Minimal air movement plus declining mental status is a pre-arrest sign — assist ventilation and expedite transport."}], correct: 1, explanation: "A silent chest means almost no air is moving. Combined with fatigue/drowsiness it signals respiratory failure; begin assisted ventilation.", kpi: "Recognizes the silent chest as a sign of decompensation"}
    ]
},
{
    id: "c3s3",
    shortTitle: "3.3 Foreign Body Airway Obstruction (FBAO)",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#alert-octagon"/></svg> Foreign Body Airway Obstruction (Choking)</h3>

        <p>FBAO is a sudden mechanical blockage of the airway by food or an object. It is a leading cause of preventable death, especially in young children and the elderly. Rapid recognition of severity and the correct age-appropriate technique can be immediately lifesaving.</p>

        <h4>Recognize Severity</h4>
        <table>
            <thead><tr><th>Mild (good air exchange)</th><th>Severe (poor/no air exchange)</th></tr></thead>
            <tbody>
                <tr><td>Forceful cough, able to speak, wheeze between coughs</td><td>Silent or weak cough, unable to speak/breathe, stridor, cyanosis</td></tr>
                <tr><td><strong>Encourage coughing — do NOT interfere</strong></td><td><strong>Act immediately</strong> (thrusts)</td></tr>
            </tbody>
        </table>

        <h4>Technique by Patient</h4>
        <ul>
            <li><strong>Responsive adult or child (over 1 yr):</strong> Abdominal thrusts (Heimlich) until the object is expelled or the patient becomes unresponsive.</li>
            <li><strong>Responsive infant (under 1 yr):</strong> Alternate <strong>5 back blows</strong> and <strong>5 chest thrusts</strong>; never abdominal thrusts (risk of organ injury).</li>
            <li><strong>Pregnant or markedly obese:</strong> Use <strong>chest thrusts</strong> in place of abdominal thrusts.</li>
            <li><strong>Becomes unresponsive:</strong> Lower to the ground and begin <strong>CPR</strong>; before each set of ventilations, look in the mouth and remove an object only if you can <strong>see</strong> it.</li>
        </ul>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
            <strong>Critical Point:</strong> Never perform a blind finger sweep — it can push the object deeper. Remove only a visible object. The universal sign of choking is both hands clutching the throat.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the universal sign of choking?", answer: "Both hands clutching the throat, unable to speak or cough effectively.", category: "FBAO"},
        {question: "How do you manage a MILD airway obstruction (good air exchange, forceful cough)?", answer: "Encourage the patient to keep coughing; do not interfere.", category: "FBAO"},
        {question: "What is the technique for a responsive choking adult with severe obstruction?", answer: "Abdominal thrusts (Heimlich) until the object is expelled or the patient becomes unresponsive.", category: "FBAO"},
        {question: "How do you relieve a severe airway obstruction in a responsive infant under 1 year?", answer: "Alternate 5 back blows and 5 chest thrusts; never use abdominal thrusts.", category: "FBAO"},
        {question: "What replaces abdominal thrusts in a pregnant or markedly obese choking patient?", answer: "Chest thrusts.", category: "FBAO"},
        {question: "What do you do when a choking patient becomes unresponsive?", answer: "Lower them to the ground and begin CPR; check the mouth before ventilations and remove a visible object only.", category: "FBAO"},
        {question: "Are blind finger sweeps recommended?", answer: "No — only remove an object you can see; a blind sweep can push it deeper.", category: "FBAO"}
    ],
    quiz: [
        {q: "A choking adult is coughing forcefully and can still speak. You should:", options: ["Begin abdominal thrusts immediately", "Encourage continued coughing and monitor", "Perform a blind finger sweep", "Start CPR"], correct: 1, explanation: "A strong cough means a mild obstruction with good air exchange — do not interfere; let the cough clear it."},
        {q: "The correct technique for a responsive choking 6-month-old infant is:", options: ["Abdominal thrusts", "5 back blows and 5 chest thrusts", "Blind finger sweep", "A single sharp slap"], correct: 1, explanation: "Infants receive alternating back blows and chest thrusts; abdominal thrusts risk organ injury."},
        {q: "A choking adult becomes unresponsive during abdominal thrusts. Your next step is to:", options: ["Continue standing thrusts", "Lower them and begin CPR, checking the mouth before breaths", "Perform a deep blind finger sweep", "Wait for ALS"], correct: 1, explanation: "When the patient becomes unresponsive, begin CPR; compressions help expel the object, and you remove it only if visible."}
    ],
    critical: [
        {id: "crit_3_3_1", scenario: "At a restaurant, a man suddenly stands, clutches his throat, cannot speak, and is turning blue.", question: "What is your immediate action?", options: [{t: "Encourage him to cough", f: "Incorrect. A silent, ineffective cough with cyanosis is a severe obstruction — coughing will not clear it."}, {t: "Begin abdominal thrusts (Heimlich) immediately", f: "Correct. Severe obstruction in a responsive adult requires immediate abdominal thrusts."}], correct: 1, explanation: "Inability to speak, a silent cough, and cyanosis indicate a severe obstruction; begin abdominal thrusts at once and continue until relieved or unresponsive.", kpi: "Differentiates mild from severe FBAO and acts appropriately"},
        {id: "crit_3_3_2", scenario: "A 30-week-pregnant woman is choking on food, cannot speak, and is panicking.", question: "Which technique do you use?", options: [{t: "Standard abdominal thrusts", f: "Incorrect. The gravid uterus makes abdominal thrusts unsafe and ineffective."}, {t: "Chest thrusts in place of abdominal thrusts", f: "Correct. Use chest thrusts for pregnant or markedly obese patients."}], correct: 1, explanation: "In late pregnancy (or marked obesity), abdominal thrusts are replaced by chest thrusts to avoid harm and remain effective.", kpi: "Selects chest thrusts for the pregnant choking patient"},
        {id: "crit_3_3_3", scenario: "You are giving back blows to a choking infant. The infant goes limp and stops responding.", question: "What do you do next?", options: [{t: "Perform a blind finger sweep to find the object", f: "Incorrect. Blind sweeps can push the object deeper."}, {t: "Begin infant CPR; look in the mouth before each set of breaths and remove the object only if visible", f: "Correct. Start CPR and remove the object only under direct vision."}], correct: 1, explanation: "An unresponsive choking infant needs CPR; chest compressions help dislodge the object, which is removed only if you can see it.", kpi: "Transitions to CPR for the unresponsive choking infant"}
    ]
},
{
    id: "c3s4",
    shortTitle: "3.4 Airway Adjuncts",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#git-merge"/></svg> Basic Airway Adjuncts</h3>

        <p>Airway adjuncts hold the airway open after a manual maneuver by keeping the tongue off the posterior pharynx. They <strong>maintain</strong> an airway but do <strong>not protect against aspiration</strong> — keep suction ready.</p>

        <table>
            <thead><tr><th></th><th>Oropharyngeal Airway (OPA)</th><th>Nasopharyngeal Airway (NPA)</th></tr></thead>
            <tbody>
                <tr><td>Use when</td><td>Unresponsive, <strong>no gag reflex</strong></td><td>Gag reflex intact / semi-conscious</td></tr>
                <tr><td>Sizing</td><td>Corner of the mouth to the angle of the jaw (or earlobe)</td><td>Tip of the nose to the earlobe; diameter of the nostril</td></tr>
                <tr><td>Insertion</td><td>Upside-down then rotate 180° (adult); sideways with tongue blade (child)</td><td>Lubricate; bevel toward the septum; insert into the larger nostril</td></tr>
                <tr><td>Avoid when</td><td>Gag reflex present (causes vomiting)</td><td>Suspected basal skull fracture / major facial trauma</td></tr>
            </tbody>
        </table>

        <h4>Key Principles</h4>
        <ul>
            <li>Always open the airway manually first; the adjunct keeps it open.</li>
            <li>If the patient gags or retches during OPA insertion, <strong>remove it immediately</strong> and be ready to suction; consider an NPA.</li>
            <li>An incorrectly sized OPA can worsen obstruction: too long can push the epiglottis down; too short can push the tongue back.</li>
        </ul>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
            <strong>Contraindication Alert:</strong> Avoid the NPA in suspected basal skull fracture (raccoon eyes, Battle's sign, CSF from nose/ears) — the catheter can pass through the fracture into the cranial vault.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the contraindication to an oropharyngeal airway (OPA)?", answer: "An intact gag reflex — it can induce vomiting and aspiration.", category: "Adjuncts"},
        {question: "How is an OPA sized?", answer: "From the corner of the mouth to the angle of the jaw (or the tip of the earlobe).", category: "Adjuncts"},
        {question: "How is an OPA inserted in an adult?", answer: "Upside-down (tip toward the roof of the mouth), then rotated 180° as it is advanced.", category: "Adjuncts"},
        {question: "When is a nasopharyngeal airway (NPA) preferred over an OPA?", answer: "When the patient has an intact gag reflex but still needs help keeping the airway open.", category: "Adjuncts"},
        {question: "What is a key contraindication to an NPA?", answer: "Suspected basal skull fracture or significant midface/facial trauma.", category: "Adjuncts"},
        {question: "How is an NPA sized?", answer: "Length: tip of the nose to the earlobe. Diameter: roughly the size of the patient's nostril (or little finger).", category: "Adjuncts"},
        {question: "Do airway adjuncts protect against aspiration?", answer: "No — they keep the airway open but do not seal the trachea. Keep suction ready.", category: "Adjuncts"}
    ],
    quiz: [
        {q: "An OPA should only be used in a patient who:", options: ["Has an intact gag reflex", "Is unresponsive with no gag reflex", "Is alert and talking", "Has facial trauma"], correct: 1, explanation: "An OPA is tolerated only when the gag reflex is absent."},
        {q: "Which finding is a contraindication to inserting an NPA?", options: ["Snoring respirations", "Suspected basal skull fracture", "Unresponsiveness", "An intact gag reflex"], correct: 1, explanation: "An NPA can pass through a basal skull fracture into the cranium."},
        {q: "If a patient gags during OPA insertion, you should:", options: ["Push it in further", "Tape it in place", "Remove it and be ready to suction", "Insert a second OPA"], correct: 2, explanation: "A gag reflex means the OPA is not tolerated; remove it and protect the airway."}
    ],
    critical: [
        {id: "crit_3_3_1", scenario: "You insert an OPA in a semi-conscious overdose patient. He immediately gags and begins to retch.", question: "What is your action?", options: [{t: "Tape the OPA in place to secure the airway", f: "Incorrect. A gag reflex means the OPA is not tolerated and risks aspiration."}, {t: "Remove the OPA, be ready to suction, and consider an NPA", f: "Correct. Remove it, protect against aspiration, and use an NPA if an adjunct is still needed."}], correct: 1, explanation: "A present gag reflex contraindicates the OPA. Remove it, suction as needed, and switch to an NPA, which is better tolerated.", kpi: "Selects the correct adjunct based on gag reflex"},
        {id: "crit_3_3_2", scenario: "A patient with obvious facial trauma, raccoon eyes, and clear fluid draining from the nose needs an airway adjunct.", question: "Which adjunct is appropriate?", options: [{t: "NPA — it is gentler than an OPA", f: "Incorrect. These signs suggest a basal skull fracture; an NPA is contraindicated."}, {t: "OPA if no gag reflex; avoid the NPA due to suspected basal skull fracture", f: "Correct. Raccoon eyes and CSF rhinorrhea suggest a basal skull fracture — avoid the nasal route."}], correct: 1, explanation: "Raccoon eyes and CSF leak indicate a possible basal skull fracture; the NPA could enter the cranial vault. Use an OPA if tolerated.", kpi: "Applies NPA contraindication in suspected skull fracture"},
        {id: "crit_3_3_3", scenario: "After inserting an OPA, the patient's snoring worsens and air movement decreases.", question: "What is the most likely problem?", options: [{t: "The OPA is working correctly", f: "Incorrect. Worsening obstruction signals an incorrectly sized or positioned device."}, {t: "The OPA is the wrong size or malpositioned and is pushing the tongue back", f: "Correct. Remove it, re-measure, and reinsert the correct size."}], correct: 1, explanation: "An OPA that is too long or short can worsen obstruction. Remove, re-size against the jaw/earlobe, and reinsert.", kpi: "Troubleshoots a malpositioned airway adjunct"}
    ]
},
{
    id: "c3s5",
    shortTitle: "3.5 Oxygen Therapy",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg> Oxygen Therapy</h3>

        <p>Oxygen is a drug: titrate it to a target saturation rather than giving high-flow to everyone. The goal is adequate tissue oxygenation, not the highest possible SpO₂.</p>

        <h4>Saturation Targets</h4>
        <ul>
            <li><strong>General:</strong> SpO₂ 94–98%.</li>
            <li><strong>COPD / chronic CO₂ retainers:</strong> 88–92% — excessive oxygen can blunt the hypoxic respiratory drive and reduce ventilation in a minority of these patients.</li>
        </ul>

        <h4>Delivery Devices</h4>
        <table>
            <thead><tr><th>Device</th><th>Flow Rate</th><th>Approx. O₂ Delivered</th><th>Use</th></tr></thead>
            <tbody>
                <tr><td>Nasal cannula</td><td>1–6 L/min</td><td>~24–44%</td><td>Mild hypoxia; patient who won't tolerate a mask</td></tr>
                <tr><td>Simple face mask</td><td>6–10 L/min</td><td>~40–60%</td><td>Moderate hypoxia (min. 6 L to flush CO₂)</td></tr>
                <tr><td>Non-rebreather mask (NRB)</td><td>10–15 L/min</td><td>~60–90%</td><td>Severe hypoxia; critically ill (keep the reservoir bag inflated)</td></tr>
                <tr><td>Bag-valve mask (BVM)</td><td>15 L/min</td><td>~100%</td><td>Inadequate/absent breathing — delivers ventilation</td></tr>
            </tbody>
        </table>

        <h4>Hazards</h4>
        <ul>
            <li>Oxygen supports combustion — no smoking or open flame near tanks.</li>
            <li>Cylinders are under high pressure — secure them and protect the valve.</li>
            <li>Over-oxygenation can be harmful (e.g., in uncomplicated ACS or stroke with normal SpO₂).</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> Never withhold oxygen from a critically hypoxic COPD patient out of fear of "knocking out their drive." Treat life-threatening hypoxia, then titrate down toward 88–92% and watch the respiratory rate and mental status.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the general target SpO₂ for most patients?", answer: "94–98%.", category: "Oxygen"},
        {question: "What is the target SpO₂ for an acute COPD exacerbation?", answer: "88–92%, to avoid blunting the hypoxic respiratory drive.", category: "Oxygen"},
        {question: "What flow rate does a non-rebreather mask require, and what O₂ does it deliver?", answer: "10–15 L/min, delivering roughly 60–90% oxygen.", category: "Oxygen"},
        {question: "Why must a simple face mask run at least 6 L/min?", answer: "To flush exhaled CO₂ out of the mask and prevent rebreathing.", category: "Oxygen"},
        {question: "What flow rate does a nasal cannula use?", answer: "1–6 L/min (~24–44% O₂).", category: "Oxygen"},
        {question: "Name two safety hazards of oxygen cylinders.", answer: "Oxygen supports combustion (fire risk near flame/smoking) and cylinders are under high pressure (secure them; protect the valve).", category: "Safety"},
        {question: "Should a critically hypoxic COPD patient be denied oxygen?", answer: "No — treat the life-threatening hypoxia, then titrate toward 88–92% and monitor ventilation.", category: "Oxygen"}
    ],
    quiz: [
        {q: "A general medical patient should be oxygenated to a target SpO₂ of:", options: ["88–92%", "94–98%", "100% always", "Below 90%"], correct: 1, explanation: "94–98% is the standard target; routine 100% is unnecessary and can be harmful."},
        {q: "A non-rebreather mask should be run at:", options: ["2 L/min", "6 L/min", "10–15 L/min", "1 L/min"], correct: 2, explanation: "10–15 L/min keeps the reservoir inflated and delivers the highest passive O₂ concentration."},
        {q: "For a COPD patient in mild distress with SpO₂ 90%, the appropriate target is:", options: ["100%", "94–98%", "88–92%", "No oxygen"], correct: 2, explanation: "Titrate COPD patients to 88–92% to avoid suppressing the respiratory drive, while still correcting hypoxia."}
    ],
    critical: [
        {id: "crit_3_4_1", scenario: "A known COPD patient is short of breath with SpO₂ 86%. A colleague applies an NRB at 15 L/min; minutes later the patient becomes drowsy with a slowing respiratory rate.", question: "What is the concern and action?", options: [{t: "Nothing — more oxygen is always better", f: "Incorrect. In some COPD patients, excess O₂ can reduce respiratory drive and ventilation."}, {t: "Possible CO₂ retention/over-oxygenation; titrate toward 88–92% and be ready to assist ventilation", f: "Correct. Titrate down and support ventilation if the rate falls."}], correct: 1, explanation: "A small subset of COPD patients hypoventilate with high-flow O₂. Titrate to 88–92% and assist ventilation if the rate/mental status decline.", kpi: "Titrates oxygen and monitors ventilation in COPD"},
        {id: "crit_3_4_2", scenario: "A critically ill trauma patient with SpO₂ 80% has an NRB applied, but the reservoir bag collapses completely with each breath.", question: "What is wrong?", options: [{t: "The mask is working normally", f: "Incorrect. The bag should stay partially inflated."}, {t: "Flow is too low — increase O₂ until the reservoir stays inflated", f: "Correct. Raise the flow (10–15 L/min) so the bag does not fully collapse on inspiration."}], correct: 1, explanation: "If the reservoir collapses, flow is inadequate and the patient rebreathes exhaled air. Increase the flow to keep the bag inflated.", kpi: "Recognizes and corrects inadequate NRB flow"},
        {id: "crit_3_4_3", scenario: "An alert chest-pain patient has an SpO₂ of 97% on room air. A new EMT wants to apply high-flow oxygen 'because it's a heart attack.'", question: "What is the best approach?", options: [{t: "Apply a non-rebreather at 15 L/min", f: "Incorrect. Routine high-flow O₂ in normoxic ACS offers no benefit and may cause harm."}, {t: "Withhold supplemental oxygen and monitor, since SpO₂ is ≥94%", f: "Correct. Give oxygen only if SpO₂ falls below 94% or distress develops."}], correct: 1, explanation: "Current evidence does not support routine oxygen in normoxic ACS; give it only for SpO₂ <94% or respiratory distress.", kpi: "Avoids unnecessary oxygen in a normoxic patient"}
    ]
},
{
    id: "c3s6",
    shortTitle: "3.6 Ventilation",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#activity"/></svg> Assisted Ventilation</h3>

        <p>When breathing is absent or inadequate, the EMT must provide positive-pressure ventilation, most often with a <strong>bag-valve mask (BVM)</strong> connected to high-flow oxygen and a reservoir. Good ventilation is gentle, controlled, and well-sealed.</p>

        <h4>BVM Principles</h4>
        <ul>
            <li><strong>Rate (with a pulse):</strong> ~1 breath every 6 seconds (≈10/min) for adults; ~1 every 3 seconds (≈20/min) for infants and children.</li>
            <li><strong>Volume:</strong> Just enough to produce gentle, visible chest rise — over-inflation forces air into the stomach.</li>
            <li><strong>Seal:</strong> The two-rescuer technique (one maintains the mask seal with both hands using the E-C clamp while the other squeezes) is far more effective than one rescuer alone.</li>
            <li>Connect to oxygen at 15 L/min with the reservoir attached to deliver near-100% O₂.</li>
        </ul>

        <h4>Hazards & Troubleshooting</h4>
        <table>
            <thead><tr><th>Problem</th><th>Cause</th><th>Fix</th></tr></thead>
            <tbody>
                <tr><td>Gastric distension</td><td>Ventilating too fast / too much volume</td><td>Slow down; smaller volumes; reassess airway</td></tr>
                <tr><td>Poor chest rise</td><td>Inadequate mask seal</td><td>Two-rescuer BVM; reposition airway; insert adjunct</td></tr>
                <tr><td>Falling blood pressure</td><td>Excessive rate/volume reduces venous return</td><td>Ventilate at the correct rate, not faster</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> The most common and most fixable BVM error is a poor mask seal. If the chest is not rising, the answer is almost always a better seal (two-rescuer technique) and airway repositioning — <em>not</em> squeezing harder or faster.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the ventilation rate for an adult in respiratory failure with a pulse?", answer: "About 1 breath every 6 seconds (~10 per minute).", category: "Ventilation"},
        {question: "What is the ventilation rate for an infant or child with a pulse?", answer: "About 1 breath every 3 seconds (~20 per minute).", category: "Ventilation"},
        {question: "How much volume should each BVM breath deliver?", answer: "Just enough for gentle, visible chest rise — avoid over-inflation.", category: "Ventilation"},
        {question: "Why is two-rescuer BVM superior to one rescuer?", answer: "One rescuer can use both hands to maintain a tight mask seal (E-C clamp) while the other delivers controlled breaths.", category: "Ventilation"},
        {question: "What causes gastric distension during BVM ventilation?", answer: "Ventilating too fast or with too much volume/pressure, forcing air into the stomach.", category: "Ventilation"},
        {question: "What is the most common cause of poor chest rise with a BVM?", answer: "An inadequate mask seal — fix it with two-rescuer technique and airway repositioning.", category: "Ventilation"},
        {question: "How do you achieve ~100% oxygen with a BVM?", answer: "Connect it to oxygen at 15 L/min with the reservoir bag attached.", category: "Ventilation"}
    ],
    quiz: [
        {q: "The correct ventilation rate for an adult in respiratory failure with a pulse is:", options: ["1 breath every 3 seconds", "1 breath every 6 seconds", "1 breath every 10 seconds", "As fast as possible"], correct: 1, explanation: "≈10/min (1 every 6 s) provides adequate ventilation without compromising circulation."},
        {q: "A common complication of ventilating too fast and too forcefully is:", options: ["Bradycardia", "Gastric distension and aspiration", "Hypertension", "Hyperoxia only"], correct: 1, explanation: "Excess pressure inflates the stomach, increasing vomiting and aspiration risk."},
        {q: "A single rescuer cannot maintain a BVM seal and the chest barely rises. The best fix is to:", options: ["Squeeze the bag harder", "Ventilate faster", "Switch to two-rescuer BVM", "Stop ventilating"], correct: 2, explanation: "A poor seal is corrected by a two-rescuer technique, not more force."}
    ],
    critical: [
        {id: "crit_3_5_1", scenario: "You are ventilating an apneic adult with a BVM at about 30 breaths per minute. The patient's pulse begins to weaken.", question: "What is the problem?", options: [{t: "Ventilation rate is fine; continue", f: "Incorrect. Hyperventilation raises intrathoracic pressure and reduces venous return."}, {t: "You are ventilating too fast — slow to about 1 breath every 6 seconds", f: "Correct. Excessive rate reduces cardiac output; ventilate at ~10/min."}], correct: 1, explanation: "Over-ventilation increases intrathoracic pressure, decreasing venous return and cardiac output. Slow to ~10/min with gentle volumes.", kpi: "Ventilates at the correct rate to preserve circulation"},
        {id: "crit_3_5_2", scenario: "During single-rescuer BVM, you cannot maintain a seal and the abdomen is becoming distended.", question: "What two corrections are most important?", options: [{t: "Squeeze harder and faster to overcome the leak", f: "Incorrect. That worsens gastric distension and still leaks."}, {t: "Use two-rescuer BVM for a better seal and ventilate with smaller, slower breaths", f: "Correct. A better seal and gentler breaths fix both problems."}], correct: 1, explanation: "Gastric distension and a poor seal are both solved by two-rescuer technique with controlled, smaller breaths and airway repositioning.", kpi: "Optimizes BVM seal and avoids gastric insufflation"},
        {id: "crit_3_5_3", scenario: "A patient in respiratory failure has an OPA in place but the chest still does not rise with BVM ventilation despite a good two-hand seal.", question: "What should you do next?", options: [{t: "Assume the lungs are stiff and continue", f: "Incorrect. Always troubleshoot for obstruction first."}, {t: "Reposition the head/airway and check for an obstruction; suction if needed", f: "Correct. Reposition, confirm the adjunct, and clear any obstruction before assuming a lung problem."}], correct: 1, explanation: "If a sealed BVM does not produce chest rise, reposition the airway and rule out obstruction (suction) before concluding the lungs are the issue.", kpi: "Systematically troubleshoots failed ventilation"}
    ]
},
{
    id: "c3s7",
    shortTitle: "3.7 Suction",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#filter"/></svg> Airway Suctioning</h3>

        <p>Suctioning removes blood, vomit, and secretions that repositioning alone cannot clear. A patient who needs suctioning needs it <em>now</em> — fluid in the airway can be aspirated into the lungs within seconds.</p>

        <h4>Devices</h4>
        <ul>
            <li><strong>Rigid (Yankauer / "tonsil tip"):</strong> For the mouth and oropharynx; best for thick secretions and vomit.</li>
            <li><strong>Soft (French) catheter:</strong> For the nasopharynx or through an airway adjunct/ET tube.</li>
        </ul>

        <h4>Technique & Time Limits</h4>
        <table>
            <thead><tr><th>Step</th><th>Key point</th></tr></thead>
            <tbody>
                <tr><td>Measure depth</td><td>Corner of the mouth to the earlobe; do not insert past the base of the visible tongue</td></tr>
                <tr><td>Apply suction</td><td><strong>Only while withdrawing</strong> the catheter (insert without suction)</td></tr>
                <tr><td>Time limit</td><td>≤15 s adult, ≤10 s child, ≤5 s infant per attempt</td></tr>
                <tr><td>Oxygenate</td><td>Pre-oxygenate before and re-oxygenate/ventilate between attempts</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> Suctioning removes oxygen along with fluid and can trigger a vagal response (bradycardia) — especially in children. Keep attempts brief, monitor the heart rate and SpO₂, and re-oxygenate between passes.
        </div>
    </div>`,
    flashcards: [
        {question: "When is suction applied — on insertion or withdrawal?", answer: "Only while withdrawing the catheter. Insert without suction.", category: "Suction"},
        {question: "Maximum suction time per attempt for an adult?", answer: "≤15 seconds (≤10 s for a child, ≤5 s for an infant).", category: "Suction"},
        {question: "How do you measure suction catheter insertion depth?", answer: "From the corner of the mouth to the earlobe; do not go past the base of the visible tongue.", category: "Suction"},
        {question: "Which suction device is best for thick vomit in the mouth?", answer: "A rigid Yankauer (tonsil-tip) catheter.", category: "Suction"},
        {question: "Two complications of prolonged suctioning?", answer: "Hypoxia (oxygen is removed) and bradycardia (vagal stimulation), especially in children.", category: "Suction"},
        {question: "What should you do between suction attempts?", answer: "Re-oxygenate / ventilate the patient before the next pass.", category: "Suction"}
    ],
    quiz: [
        {q: "Suction should be applied:", options: ["While inserting the catheter", "Only while withdrawing the catheter", "Continuously the entire time", "Only in infants"], correct: 1, explanation: "Applying suction only on withdrawal limits hypoxia and tissue trauma."},
        {q: "The maximum suction time for a single attempt in an adult is:", options: ["5 seconds", "15 seconds", "30 seconds", "60 seconds"], correct: 1, explanation: "Limit adult attempts to ≤15 s (children ≤10 s, infants ≤5 s)."},
        {q: "Prolonged suctioning can cause which two complications?", options: ["Hypertension and tachycardia", "Hypoxia and bradycardia", "Fever and seizures", "Hyperglycemia and vomiting"], correct: 1, explanation: "Suction removes oxygen and can stimulate a vagal (bradycardic) response."}
    ],
    critical: [
        {id: "crit_3_6_1", scenario: "A patient vomits during BVM ventilation; the airway fills with fluid and ventilation becomes difficult.", question: "What is your immediate action?", options: [{t: "Continue ventilating through the fluid to maintain oxygenation", f: "Incorrect. This forces vomit into the lungs."}, {t: "Stop, roll the patient (if no spinal concern) or suction the airway clear, then resume ventilation", f: "Correct. Clear the airway before resuming ventilation to prevent aspiration."}], correct: 1, explanation: "A fluid-filled airway must be cleared with suction (and positioning) before resuming ventilation to prevent aspiration pneumonitis.", kpi: "Prioritizes airway clearance over continued ventilation"},
        {id: "crit_3_6_2", scenario: "While suctioning an infant's airway for 20 seconds, the heart rate drops from 140 to 80.", question: "What happened and what do you do?", options: [{t: "Normal response — keep suctioning until clear", f: "Incorrect. Prolonged suction caused vagal bradycardia and hypoxia."}, {t: "Stop suctioning, oxygenate/ventilate; limit infant attempts to ≤5 seconds", f: "Correct. Stop, re-oxygenate, and keep future passes brief."}], correct: 1, explanation: "Prolonged suctioning caused hypoxia and a vagal bradycardia. Stop, oxygenate, and limit infant attempts to ≤5 s.", kpi: "Recognizes suction-induced bradycardia and limits attempt time"},
        {id: "crit_3_6_3", scenario: "You are about to suction but cannot see how far to insert the rigid catheter in an adult.", question: "How do you determine insertion depth?", options: [{t: "Insert as far as it will go to remove all secretions", f: "Incorrect. Deep insertion stimulates gagging/vomiting and trauma."}, {t: "Measure from the corner of the mouth to the earlobe and stay within the visible field", f: "Correct. Do not insert past the base of the tongue you can see."}], correct: 1, explanation: "Measuring corner-of-mouth to earlobe and staying in the visible field avoids deep insertion, gagging, and trauma.", kpi: "Measures suction depth correctly"}
    ]
},
{
    id: "c3s8",
    shortTitle: "3.8 Advanced Airways",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#layers"/></svg> Advanced Airways</h3>

        <p>When basic measures (positioning, adjuncts, BVM) are inadequate, a trained provider may place an advanced airway. At the EMT level the role is often to <strong>assist</strong>: prepare equipment, pre-oxygenate, monitor, and help confirm placement.</p>

        <h4>Device Types</h4>
        <table>
            <thead><tr><th>Type</th><th>Examples</th><th>Notes</th></tr></thead>
            <tbody>
                <tr><td>Supraglottic</td><td>i-gel, King LT, LMA</td><td>Sit above the cords; faster, blind insertion, fewer CPR interruptions</td></tr>
                <tr><td>Endotracheal tube (ETT)</td><td>Direct/video laryngoscopy</td><td>Definitive airway through the cords; advanced scope of practice</td></tr>
            </tbody>
        </table>

        <h4>Confirming & Monitoring Placement</h4>
        <ul>
            <li><strong>Waveform capnography (EtCO₂):</strong> The gold standard to confirm placement and continuously monitor it.</li>
            <li>Auscultate over both lungs (breath sounds present) and the epigastrium (no gurgling).</li>
            <li>Watch for tube displacement with every patient move; secure the device.</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl — DOPE:</strong> If an intubated patient deteriorates, think <strong>D</strong>isplacement (tube moved/dislodged), <strong>O</strong>bstruction (mucus/kink), <strong>P</strong>neumothorax, <strong>E</strong>quipment failure (O₂ source, BVM, capnography). A sudden loss of the capnography waveform means displacement until proven otherwise.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the gold-standard method to confirm and monitor an advanced airway?", answer: "Continuous waveform capnography (EtCO₂).", category: "Advanced"},
        {question: "Give two examples of supraglottic airways.", answer: "i-gel, King LT, or LMA (any two).", category: "Advanced"},
        {question: "How does a supraglottic airway differ from an endotracheal tube?", answer: "A supraglottic device sits above the vocal cords (blind insertion); an ETT passes through the cords (definitive, advanced scope).", category: "Advanced"},
        {question: "What does the mnemonic DOPE stand for?", answer: "Displacement, Obstruction, Pneumothorax, Equipment failure — causes of deterioration in an intubated patient.", category: "Advanced"},
        {question: "Besides capnography, how do you confirm placement?", answer: "Bilateral breath sounds on auscultation and absence of gurgling over the epigastrium, plus chest rise.", category: "Advanced"},
        {question: "What does a sudden loss of the capnography waveform indicate?", answer: "Airway displacement (or no circulation) — reassess the tube immediately.", category: "Advanced"}
    ],
    quiz: [
        {q: "The most reliable way to confirm and monitor an advanced airway is:", options: ["Chest rise alone", "Pulse oximetry", "Waveform capnography", "Skin color"], correct: 2, explanation: "Continuous EtCO₂ confirms placement and instantly detects displacement."},
        {q: "A supraglottic airway (e.g., i-gel) is positioned:", options: ["Through the vocal cords", "Above the vocal cords", "In the esophagus intentionally", "In a bronchus"], correct: 1, explanation: "Supraglottic devices sit above the glottis and are inserted blindly."},
        {q: "In the DOPE mnemonic, the 'P' stands for:", options: ["Position", "Pneumothorax", "Pulse", "Pressure"], correct: 1, explanation: "DOPE = Displacement, Obstruction, Pneumothorax, Equipment failure."}
    ],
    critical: [
        {id: "crit_3_7_1", scenario: "After moving an intubated patient onto the stretcher, the capnography waveform suddenly disappears.", question: "What does this most likely mean?", options: [{t: "The capnography monitor needs recalibration", f: "Incorrect. Assume an airway problem until proven otherwise."}, {t: "Tube displacement — reassess placement and breath sounds immediately", f: "Correct. A lost waveform after movement signals displacement (the 'D' in DOPE)."}], correct: 1, explanation: "A sudden loss of EtCO₂ waveform after movement indicates displacement until proven otherwise; reconfirm placement at once.", kpi: "Recognizes loss of capnography waveform as airway displacement"},
        {id: "crit_3_7_2", scenario: "An intubated patient suddenly becomes harder to ventilate, with high resistance and falling SpO₂. Breath sounds are absent on the right with tracheal deviation to the left.", question: "Which DOPE cause is most likely?", options: [{t: "Obstruction from mucus", f: "Incorrect. Unilateral absent sounds with deviation suggest pneumothorax."}, {t: "Pneumothorax (tension) — the 'P' in DOPE", f: "Correct. Absent unilateral sounds, high resistance, and tracheal deviation indicate tension pneumothorax."}], correct: 1, explanation: "Absent breath sounds on one side with tracheal deviation and rising resistance point to a (tension) pneumothorax — escalate immediately.", kpi: "Differentiates DOPE causes of post-intubation deterioration"},
        {id: "crit_3_7_3", scenario: "A paramedic asks you (EMT) to assist with intubation. Just before the attempt, the SpO₂ is 88%.", question: "What is the most appropriate assisting action first?", options: [{t: "Proceed with the attempt to save time", f: "Incorrect. Intubating a hypoxic patient risks dangerous desaturation."}, {t: "Pre-oxygenate with BVM/NRB to raise the SpO₂ before the attempt", f: "Correct. Optimize oxygenation first to extend the safe apnea time."}], correct: 1, explanation: "Pre-oxygenation before an intubation attempt extends safe apnea time and reduces peri-intubation hypoxia. Optimize SpO₂ first.", kpi: "Pre-oxygenates before an advanced airway attempt"}
    ]
},
{
    id: "c3s9",
    shortTitle: "3.9 Respiratory Failure",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#alert-triangle"/></svg> Respiratory Distress vs Failure</h3>

        <p>Respiratory <strong>distress</strong> is the body compensating to maintain oxygenation. Respiratory <strong>failure</strong> is when those mechanisms fail and the patient can no longer oxygenate or ventilate adequately. Recognizing the transition early — and acting before arrest — saves lives.</p>

        <table>
            <thead><tr><th></th><th>Distress (compensating)</th><th>Failure (decompensating)</th></tr></thead>
            <tbody>
                <tr><td>Mental status</td><td>Alert, anxious</td><td>Drowsy, confused, unresponsive</td></tr>
                <tr><td>Effort</td><td>Increased work of breathing</td><td>Tiring, slowing, or irregular effort</td></tr>
                <tr><td>Speech</td><td>Short sentences</td><td>Single words or none</td></tr>
                <tr><td>Air movement</td><td>Adequate (audible)</td><td>Poor / "silent chest"</td></tr>
                <tr><td>SpO₂</td><td>Maintained on oxygen</td><td>Falling despite oxygen</td></tr>
                <tr><td>Treatment</td><td>Oxygen, position, treat cause</td><td><strong>Assist ventilation (BVM) now</strong></td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
            <strong>Act Early:</strong> Do not wait for apnea. A patient with a declining mental status, a slowing respiratory rate, or a falling SpO₂ despite oxygen has entered respiratory failure — begin assisted ventilation with a BVM immediately and prepare for rapid transport.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the difference between respiratory distress and respiratory failure?", answer: "Distress is compensating (increased work, maintaining oxygenation); failure is decompensation where the patient can no longer oxygenate/ventilate adequately.", category: "Failure"},
        {question: "What is the key treatment when a patient enters respiratory failure?", answer: "Immediate assisted ventilation with a BVM (do not wait for apnea).", category: "Failure"},
        {question: "Name three signs that distress has progressed to failure.", answer: "Declining mental status (drowsiness), slowing or irregular respiratory rate, and falling SpO₂ despite oxygen (also single-word speech, silent chest).", category: "Failure"},
        {question: "Why is a 'silent chest' in asthma ominous?", answer: "It means almost no air is moving — severe airflow limitation and impending respiratory failure.", category: "Failure"},
        {question: "A drowsy patient with a slowing respiratory rate after distress indicates what?", answer: "Respiratory failure — begin BVM ventilation immediately.", category: "Failure"},
        {question: "Should you wait for a patient to stop breathing before assisting ventilation?", answer: "No — assist as soon as breathing becomes inadequate (failure), not after arrest.", category: "Failure"}
    ],
    quiz: [
        {q: "A patient in respiratory distress becomes drowsy with a slowing respiratory rate. This indicates:", options: ["Improvement", "Respiratory failure — assist ventilations", "A normal response to oxygen", "Anxiety only"], correct: 1, explanation: "Drowsiness with a slowing rate signals failure; begin BVM ventilation."},
        {q: "The treatment for a patient who has progressed from distress to failure is:", options: ["More reassurance", "A nasal cannula", "Assisted ventilation with a BVM", "Wait and reassess in 15 minutes"], correct: 2, explanation: "Inadequate breathing requires positive-pressure ventilation, not just supplemental oxygen."},
        {q: "In a severe asthma attack, a sudden 'silent chest' with fatigue means:", options: ["The attack is resolving", "Impending respiratory failure", "Mild bronchospasm", "A normal exam"], correct: 1, explanation: "Minimal air movement plus fatigue is a pre-arrest sign requiring immediate ventilatory support."}
    ],
    critical: [
        {id: "crit_3_8_1", scenario: "A COPD patient in obvious distress on an NRB gradually becomes confused, then drowsy; the respiratory rate falls from 28 to 8.", question: "What is happening and what do you do?", options: [{t: "The patient is finally relaxing — continue the NRB", f: "Incorrect. Drowsiness and a falling rate signal failure/CO₂ retention."}, {t: "Respiratory failure — begin assisted ventilation with a BVM and transport rapidly", f: "Correct. A declining mental status and slowing rate require ventilatory support now."}], correct: 1, explanation: "A falling respiratory rate with declining mental status is respiratory failure. Assist ventilation with a BVM and expedite transport.", kpi: "Escalates to assisted ventilation at the onset of failure"},
        {id: "crit_3_8_2", scenario: "A young asthmatic who was loudly wheezing and tripoding is now quiet, sitting back, and barely moving air.", question: "How do you interpret the change?", options: [{t: "The wheezing stopped, so the bronchospasm resolved", f: "Incorrect. With fatigue, a quiet chest means almost no air movement."}, {t: "Decompensation — a silent chest and fatigue signal impending arrest; assist ventilation", f: "Correct. The 'silent chest' is a danger sign; support ventilation and transport emergently."}], correct: 1, explanation: "A previously noisy asthmatic going quiet with fatigue indicates severe airflow limitation and impending failure — begin ventilatory support.", kpi: "Recognizes the silent chest as decompensation, not improvement"},
        {id: "crit_3_8_3", scenario: "A near-drowning patient is breathing 6 times per minute with shallow effort and an SpO₂ of 84% on a non-rebreather.", question: "What is the most appropriate next step?", options: [{t: "Increase the NRB flow and continue to monitor", f: "Incorrect. A rate of 6 with shallow effort is inadequate ventilation regardless of FiO₂."}, {t: "Begin assisted ventilation with a BVM at ~10/min", f: "Correct. The minute ventilation is inadequate; positive-pressure ventilation is required."}], correct: 1, explanation: "A rate of 6 with shallow breaths is inadequate ventilation; supplemental oxygen alone is insufficient. Assist with a BVM at ~10/min.", kpi: "Identifies inadequate minute ventilation and assists breathing"}
    ]
}
    ]
};
