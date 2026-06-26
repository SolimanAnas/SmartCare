/* ========== Chapter 2 – Patient Assessment: Sections 2.5–2.7 ========== */
/* Vital Signs | Monitoring Devices | History Taking (SAMPLE / OPQRST) */

window.CPG_SECTIONS = [
    /* ------------------------------------------------------------------ */
    /*  c2s5 — Vital Signs                                                 */
    /* ------------------------------------------------------------------ */
    {
        id: "c2s5",
        shortTitle: "2.5 Vital Signs",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Vital Signs</h3>

            <p>Vital signs are objective measurements of the body's basic physiological functions. They are the cornerstone of patient assessment — providing critical information about the patient's current condition, helping you identify life threats, and serving as a baseline to track changes over time. Every EMT must master the measurement, interpretation, and trending of vital signs across all age groups.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> A single set of vital signs is a snapshot. Trending vital signs over time — comparing serial measurements — reveals the patient's trajectory (improving, stable, or deteriorating). This is far more valuable than any single reading.
            </div>

            <h4>Normal Vital Sign Ranges by Age Group</h4>
            <p>The following ranges are the accepted NREMT reference standards. Remember that normal ranges vary with age, and individual patients may fall outside these ranges for benign reasons (e.g., an athlete's resting heart rate may be 45–50 bpm). Always interpret vital signs in the context of the patient's overall presentation.</p>

            <table>
                <thead>
                    <tr><th>Vital Sign</th><th>Adult (≥12 yr)</th><th>Child (1–11 yr)</th><th>Infant (0–12 mo)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Heart Rate (bpm)</td><td>60–100</td><td>80–120</td><td>100–160</td></tr>
                    <tr><td>Respiratory Rate (breaths/min)</td><td>12–20</td><td>15–30</td><td>30–60</td></tr>
                    <tr><td>Systolic Blood Pressure (mmHg)</td><td>90–120</td><td>80–110</td><td>70–100</td></tr>
                    <tr><td>SpO₂ (%)</td><td>94–100</td><td>94–100</td><td>94–100</td></tr>
                    <tr><td>Temperature (°F / °C)</td><td>97.0–99.6°F (36.1–37.5°C)</td><td>96.8–99.6°F (36.0–37.5°C)</td><td>97.0–100.4°F (36.1–38.0°C)</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>NREMT Tip:</strong> You will be expected to recall normal ranges for testing. A useful memory aid: <strong>"60–100 for the big one (adult HR), 80–120 for the middle one (child HR), 100–160 for the little one (infant HR)."</strong> For respiratory rates, remember rates roughly double the heart rate expectation: adult 12–20, child 15–30, infant 30–60.
            </div>

            <h4>Measuring Vital Signs</h4>

            <h5>Heart Rate (Pulse)</h5>
            <p>Assess the pulse for <strong>rate</strong>, <strong>rhythm</strong>, and <strong>quality</strong> (strong/weak, regular/irregular). The preferred site for initial assessment in a conscious patient is the <strong>radial artery</strong> (thumb side of the wrist). If the radial pulse is weak, absent, or the patient is unresponsive, check the <strong>carotid artery</strong> (side of the neck, between the trachea and the sternocleidomastoid muscle). In infants, use the <strong>brachial artery</strong> (inner aspect of the upper arm between elbow and shoulder). Count for <strong>30 seconds and multiply by 2</strong>; if the rhythm is irregular, count for the full 60 seconds. For pediatric patients, always count for a full 30–60 seconds due to naturally variable rates.</p>

            <ul>
                <li><strong>Tachycardia:</strong> Heart rate above normal range. Causes include: fever, pain, anxiety, hypovolemia, hypoxia, shock, cardiac arrhythmias, medications, caffeine, and stimulants.</li>
                <li><strong>Bradycardia:</strong> Heart rate below normal range. Causes include: athletic conditioning, medications (beta-blockers), increased intracranial pressure, hypoxia (a late sign in children), and conduction disorders.</li>
            </ul>

            <h5>Respiratory Rate</h5>
            <p>Count the number of breaths in <strong>30 seconds and multiply by 2</strong>. Observe the patient's chest rise — do not announce that you are counting breaths, as patients may unconsciously alter their breathing pattern. Assess for <strong>rate</strong>, <strong>rhythm</strong> (regular vs. irregular), <strong>depth</strong> (shallow, normal, deep — Kussmaul breathing is deep and labored seen in DKA), and <strong>effort</strong> (work of breathing). Note accessory muscle use, retractions (intercostal, supraclavicular, substernal), nasal flaring (especially in children), and paradoxical breathing (see-saw motion suggesting airway obstruction).</p>

            <ul>
                <li><strong>Tachypnea:</strong> Rate above normal. Causes include: fever, anxiety, pain, hypoxia, respiratory infection, pulmonary embolism, compensation for metabolic acidosis.</li>
                <li><strong>Bradypnea:</strong> Rate below normal. Causes include: opioid overdose, CNS depression, head injury, severe hypoxia (a pre-terminal sign), hypothermia.</li>
            </ul>

            <h5>Blood Pressure</h5>
            <p>Blood pressure is measured using a <strong>sphygmomanometer</strong> (blood pressure cuff) and <strong>stethoscope</strong>. Select the correct cuff size — the bladder should encircle at least 80% of the upper arm. A cuff that is too small will give an <strong>artificially high</strong> reading; a cuff that is too large will give an <strong>artificially low</strong> reading.</p>

            <p><strong>Technique:</strong> Palpate the brachial artery in the antecubital space. Place the stethoscope over the artery. Inflate the cuff to approximately 30 mmHg above the point where the pulse disappears (the estimated systolic pressure). Slowly release pressure at 2–3 mmHg per second. The first Korotkoff sound (tapping) is the <strong>systolic</strong> pressure. The point where sounds disappear is the <strong>diastolic</strong> pressure. If you cannot hear the pressure (noisy environment, weak pulses), obtain a <strong>palpated systolic pressure</strong> by noting the point where the radial pulse returns during deflation — document as "Palpated systolic: 90 mmHg."</p>

            <ul>
                <li><strong>Hypertension:</strong> Persistently elevated BP. May be chronic (essential hypertension) or acute (pain, anxiety, increased ICP, preeclampsia).</li>
                <li><strong>Hypotension:</strong> Systolic BP below 90 mmHg in adults. A sign of shock (hypoperfusion) until proven otherwise. Look for other signs of poor perfusion: altered mental status, cool/clammy skin, tachycardia, weak pulses.</li>
                <li><strong>Orthostatic Hypotension:</strong> A drop in systolic BP of ≥20 mmHg when moving from lying to standing. Indicates volume depletion.</li>
            </ul>

            <h5>SpO₂ (Oxygen Saturation)</h5>
            <p>Measured with a <strong>pulse oximeter</strong> placed on a finger, toe, or earlobe. Normal SpO₂ is <strong>94–100%</strong>. Readings of 91–93% are borderline and require close monitoring. Readings ≤90% represent <strong>hypoxemia</strong> and require immediate intervention (oxygen therapy, assessment of airway/breathing). Be aware that pulse oximetry has limitations — see c2s6 for a detailed discussion of pitfalls.</p>

            <h5>Temperature</h5>
            <p>Temperature can be measured orally (sublingual), tympanically (ear), temporally (forehead artery), axillary (armpit — least accurate), or rectally (core temperature — most accurate). In the prehospital setting, <strong>tympanic</strong> and <strong>temporal</strong> thermometers are most common for speed and patient comfort. Temperature extremes are medical emergencies:</p>

            <ul>
                <li><strong>Hypothermia:</strong> Core temperature &lt;95°F (35°C). Patients may be shivering (mild) or shivering may stop as hypothermia deepens. Remove wet clothing, cover passively, handle gently (rough handling can trigger V-fib below 86°F/30°C).</li>
                <li><strong>Hyperthermia / Heat Stroke:</strong> Core temperature &gt;104°F (40°C) with altered mental status. This is a life-threatening emergency. Aggressive cooling measures while transporting.</li>
                <li><strong>Fever:</strong> Temperature &gt;100.4°F (38°C). The body's normal response to infection. In infants &lt;3 months, fever warrants high suspicion for serious bacterial infection.</li>
            </ul>

            <h4>Factors That Affect Vital Signs</h4>
            <p>Many non-pathological factors can alter vital signs. Always consider these when interpreting your readings:</p>
            <table>
                <thead>
                    <tr><th>Factor</th><th>Effect on Vital Signs</th></tr>
                </thead>
                <tbody>
                    <tr><td>Age</td><td>Baselines change across the lifespan as noted in the table above.</td></tr>
                    <tr><td>Physical Exertion/Activity</td><td>Increases HR, RR, and BP temporarily. Allow the patient to rest 2–5 minutes before reassessing.</td></tr>
                    <tr><td>Emotional State (Anxiety, Fear)</td><td>Can significantly elevate HR, RR, and BP. Pain has a similar effect.</td></tr>
                    <tr><td>Medications</td><td>Beta-blockers blunt HR response; antihypertensives lower BP; bronchodilators increase HR.</td></tr>
                    <tr><td>Position</td><td>BP is higher when sitting/standing than lying. Orthostatic changes indicate volume issues.</td></tr>
                    <tr><td>Environment</td><td>Heat/exercise increase temperature; cold can lower temperature and initially raise BP.</td></tr>
                    <tr><td>Time of Day</td><td>Core body temperature is lowest in early morning and highest in late afternoon/evening.</td></tr>
                    <tr><td>Pregnancy</td><td>HR increases 10–20 bpm; BP decreases in 2nd trimester, normalizes by term.</td></tr>
                    <tr><td>Fitness Level</td><td>Well-conditioned athletes often have lower resting HR and BP.</td></tr>
                </tbody>
            </table>

            <h4>When to Recheck Vital Signs</h4>
            <p>Serial vital sign measurements are essential for tracking the patient's status. Follow these general guidelines:</p>
            <ul>
                <li><strong>Stable patient:</strong> Recheck every 15 minutes during transport.</li>
                <li><strong>Unstable patient</strong> (any abnormal vital sign, altered mental status, suspected shock): Recheck every 5 minutes and after every intervention.</li>
                <li><strong>After any intervention:</strong> Recheck to assess response (e.g., after oxygen administration, fluid resuscitation, medication administration, splinting of a fracture).</li>
                <li><strong>At any change in patient condition:</strong> If the patient's status changes — new symptoms, deterioration, improvement — obtain a full set of vital signs immediately.</li>
                <li><strong>Before and after any significant movement:</strong> Moving a trauma patient, standing a patient up, or transferring to a hospital bed should be preceded and followed by vital sign assessment.</li>
            </ul>

            <p>Document all vital signs with the time they were obtained. Trend analysis — looking at how vital signs change over time — is one of the most powerful diagnostic tools you have as an EMT. A patient who starts with HR 110, BP 100/70, RR 22 and over 15 minutes progresses to HR 130, BP 88/50, RR 28 is clearly deteriorating, even if the initial vital signs were not alarming in isolation.</p>
        </div>`,
        flashcards: [
            { question: "What is the normal heart rate range for an adult?", answer: "60–100 beats per minute at rest", category: "Vital Signs" },
            { question: "What are the normal respiratory rate ranges for adult, child, and infant?", answer: "Adult: 12–20; Child (1–11 yr): 15–30; Infant (0–12 mo): 30–60 breaths per minute", category: "Vital Signs" },
            { question: "What is the preferred pulse site for an unresponsive adult patient?", answer: "The carotid artery — located lateral to the trachea, medial to the sternocleidomastoid muscle", category: "Vital Signs" },
            { question: "What pulse site is used for infants?", answer: "The brachial artery — on the inner aspect of the upper arm between the elbow and shoulder", category: "Vital Signs" },
            { question: "What happens to blood pressure readings when using a cuff that is too small?", answer: "The reading will be artificially high — the cuff bladder must encircle at least 80% of the upper arm", category: "Vital Signs" },
            { question: "How often should vital signs be rechecked in an unstable patient?", answer: "Every 5 minutes, and after every intervention", category: "Vital Signs" },
            { question: "What is the normal SpO₂ range for a healthy patient on room air?", answer: "94–100%. Readings of 91–93% are borderline; ≤90% is hypoxemia requiring immediate intervention.", category: "Vital Signs" },
            { question: "Define orthostatic hypotension.", answer: "A drop in systolic BP of ≥20 mmHg when moving from lying to standing, indicating possible volume depletion", category: "Vital Signs" }
        ],
        quiz: [
            { q: "What is the most common cause of a falsely elevated blood pressure reading in the field?", options: ["Stethoscope placed incorrectly", "BP cuff that is too small for the patient's arm", "BP cuff that is too large for the patient's arm", "Taking the pressure over a vein"], correct: 1 },
            { q: "A 6-month-old infant has a heart rate of 150 bpm. The EMT should:", options: ["Consider this normal for an infant and assess other vital signs", "Immediately start CPR", "Administer oxygen and request ALS", "Suspect sepsis and transport emergently"], correct: 0 },
            { q: "A patient with a suspected opioid overdose would most likely exhibit which pattern of vital sign abnormality?", options: ["Tachypnea and tachycardia", "Bradypnea and bradycardia", "Hypertension and tachypnea", "Hyperthermia and tachycardia"], correct: 1 },
            { q: "[HARD] A trauma patient has an initial BP of 118/72 and HR of 96. Fifteen minutes later, the BP is 96/62 and HR is 122. The skin is cool and clammy. This trend most likely indicates:", options: ["The patient is stabilizing and improving", "Compensated shock progressing toward decompensation — intervene immediately", "A normal stress response to injury", "Medication side effects from pain medication"], correct: 1, explanation: "Falling BP with rising HR and cool, clammy skin is the classic progression from compensated to decompensated (hypotensive) shock." }
        ],
        critical: [
            {
                id: "crit_2_5_1",
                scenario: "You are called to a residence for a 72-year-old male with weakness and dizziness. His initial vital signs while sitting on the couch: HR 88, BP 112/70, RR 16, SpO₂ 96%. He states he felt fine lying down but became dizzy when he stood up. You assist him to standing and immediately note he becomes pale and diaphoretic. Repeat standing vital signs: HR 122, BP 84/56, RR 20, SpO₂ 95%. He feels faint and you help him back to a seated position.",
                question: "What do these vital sign trends indicate and what is the most likely pathophysiology?",
                options: [
                    { t: "The patient is having a heart attack — administer aspirin and transport emergently", f: "Incorrect. While cardiac ischemia can cause these findings, the orthostatic pattern suggests volume depletion." },
                    { t: "Orthostatic hypotension with a significant BP and HR change indicating volume depletion/dehydration — transport for evaluation and IV fluids", f: "Correct. The drop in systolic BP of >20 mmHg and compensatory tachycardia upon standing is classic for volume depletion." }
                ],
                correct: 1,
                explanation: "A drop in systolic BP ≥20 mmHg with a concurrent HR increase ≥20 bpm upon standing is diagnostic of orthostatic hypotension, most commonly from volume depletion (dehydration, blood loss). This patient requires transport for further evaluation.",
                kpi: "Orthostatic vital sign interpretation"
            },
            {
                id: "crit_2_5_2",
                scenario: "A 5-year-old child is brought to the ambulance by her mother with complaints of fever and vomiting for 24 hours. The child is lying still on the stretcher, appears lethargic, and has dry mucous membranes. Initial vital signs: HR 148, BP 82/58, RR 28, SpO₂ 98%, temp 102.4°F (39.1°C). Capillary refill is 4 seconds. The mother states the child has not urinated in over 8 hours.",
                question: "Based on the vital signs and clinical presentation, what is the most appropriate interpretation and next action?",
                options: [
                    { t: "The fever is the main concern — focus on cooling the child and transport non-emergent", f: "Incorrect. While the fever is present, the HR is elevated out of proportion to fever alone, and the signs point to hypovolemia." },
                    { t: "Tachycardia, borderline hypotension with signs of poor perfusion (lethargy, delayed cap refill, dry mucous membranes, oliguria) indicate hypovolemic shock — provide oxygen, keep warm, and transport rapidly with fluid resuscitation ALS intercept if available", f: "Correct. This child has signs of compensated shock (tachycardia, cool skin, delayed cap refill) progressing toward hypotension. Fever increases fluid losses; vomiting causes direct volume loss." }
                ],
                correct: 1,
                explanation: "Children compensate for shock by increasing heart rate and systemic vascular resistance. Hypotension is a LATE sign in pediatric decompensation. These vital signs + physical findings = hypovolemic shock from dehydration.",
                kpi: "Pediatric shock recognition"
            },
            {
                id: "crit_2_5_3",
                scenario: "You are assessing a 34-year-old male involved in a high-speed MVC. He is confused, with cool/clammy skin. His initial vital signs in the ambulance: HR 128, BP 104/70, RR 24, SpO₂ 94%. While en route (8 minutes later), repeat vitals: HR 136, BP 86/56, RR 28, SpO₂ 91%. You are 12 minutes from the trauma center. Your partner asks if you should turn on the lights and sirens.",
                question: "What is the most appropriate interpretation and action based on the vital sign trends?",
                options: [
                    { t: "These vitals show the patient is compensating — continue routine transport at normal speed", f: "Incorrect. The trend shows decompensation from compensated shock to hypotensive shock." },
                    { t: "The patient has progressed from compensated to decompensated (hypotensive) shock — initiate high-flow oxygen, repeat vital signs every 5 minutes, and request ALS intercept while expediting transport", f: "Correct. Falling BP + rising HR + dropping SpO₂ + altered mental status = decompensated hemorrhagic shock." }
                ],
                correct: 1,
                explanation: "The trend from BP 104/70 → 86/56 with HR climbing from 128 → 136 signals that compensatory mechanisms are failing. This is decompensated (hypotensive) shock — a critical phase where rapid transport and hemorrhage control are essential.",
                kpi: "Shock trend recognition"
            }
        ]
    },

    /* ------------------------------------------------------------------ */
    /*  c2s6 — Monitoring Devices                                          */
    /* ------------------------------------------------------------------ */
    {
        id: "c2s6",
        shortTitle: "2.6 Monitoring Devices",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> Monitoring Devices</h3>

            <p>Modern prehospital care depends on monitoring devices that provide real-time data about the patient's physiological status. These devices supplement — but never replace — your clinical assessment. Understanding how each device works, what the numbers mean, and when to trust them (or be suspicious) is essential for safe patient care. This section covers the four monitoring devices you will use most as an EMT: pulse oximetry, capnography, blood glucose monitoring, and cardiac monitoring (ECG).</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Rule:</strong> Monitoring devices provide <strong>data points</strong>, not <strong>diagnoses</strong>. Use them to support your clinical assessment, not to replace it. A normal SpO₂ does not rule out respiratory failure. A normal EtCO₂ does not rule out a pulmonary embolism. Always treat the patient, not the monitor.
            </div>

            <h4>1. Pulse Oximetry (SpO₂)</h4>

            <h5>How It Works</h5>
            <p>Pulse oximetry uses <strong>spectrophotometry</strong> — light-emitting diodes (LEDs) shine two wavelengths of light (red and infrared) through a perfused tissue bed (typically a fingertip, toe, or earlobe). <strong>Oxyhemoglobin</strong> and <strong>deoxyhemoglobin</strong> absorb these wavelengths differently. The device calculates the ratio of oxygenated to total hemoglobin and displays it as a percentage. It also displays a <strong>plethysmographic waveform (pleth)</strong> — a visual representation of the pulse that confirms the device is detecting a pulsatile signal.</p>

            <h5>Normal Values and Targets</h5>
            <table>
                <thead>
                    <tr><th>Patient Category</th><th>Target SpO₂</th><th>Action if Below Target</th></tr>
                </thead>
                <tbody>
                    <tr><td>General medical patient</td><td>94–98%</td><td>Increase O₂; assess airway/breathing</td></tr>
                    <tr><td>COPD / chronic CO₂ retainer</td><td>88–92%</td><td>Titrate carefully — avoid over-oxygenation</td></tr>
                    <tr><td>Acute stroke patient</td><td>≥94%</td><td>Supplement O₂ to maintain target</td></tr>
                    <tr><td>Acute MI / cardiac patient</td><td>≥94%</td><td>Supplement O₂ only if hypoxic</td></tr>
                    <tr><td>Neonatal / infant</td><td>90–95%</td><td>More cautious — avoid hyperoxia toxicity</td></tr>
                </tbody>
            </table>

            <h5>Pitfalls and Common Errors</h5>
            <p>Pulse oximetry has important limitations that every EMT must know:</p>
            <table>
                <thead>
                    <tr><th>Problem</th><th>Effect on Reading</th><th>Solution</th></tr>
                </thead>
                <tbody>
                    <tr><td>Poor perfusion (shock, cold extremity, vasoconstriction)</td><td>Falsely low or no reading; weak/flat pleth waveform</td><td>Warm the extremity, try earlobe or nasal probe, assess for perfusion problem</td></tr>
                    <tr><td>Patient movement / shivering</td><td>Artifact — erratic or fluctuating readings</td><td>Stabilize the hand, use the earlobe site, wait for patient to be still</td></tr>
                    <tr><td>Nail polish (especially dark blue, black, green, or acrylic nails)</td><td>May cause falsely low reading</td><td>Remove polish from the test finger or rotate the probe 90° (side-to-side reading)</td></tr>
                    <tr><td>Carbon monoxide (CO) poisoning</td><td>Falsely high SpO₂ (COHb reads as oxyhemoglobin)</td><td>SpO₂ will be normal despite severe hypoxia — suspect CO from history/exposure, use CO-oximeter if available</td></tr>
                    <tr><td>Anemia / severe blood loss</td><td>SpO₂ may remain normal until late (O₂ is carried but there is less total hemoglobin)</td><td>Do not rely on SpO₂ alone — look for signs of shock, tissue hypoxia, and low CO₂</td></tr>
                    <tr><td>Bright ambient light (sunlight, surgical lights)</td><td>May interfere with sensor</td><td>Cover the sensor site with opaque material</td></tr>
                    <tr><td>Hypothermia</td><td>Poor perfusion → unreliable reading</td><td>Restore perfusion, use core temperature probe site</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> Always check the <strong>pleth waveform</strong> before trusting a SpO₂ number. If the waveform is weak, erratic, or absent, the number is unreliable. The pleth is your confirmation that the device is detecting pulsatile blood flow.
            </div>

            <h4>2. Capnography (EtCO₂)</h4>

            <h5>How It Works</h5>
            <p>Capnography measures the concentration of carbon dioxide (CO₂) in exhaled breath. <strong>End-tidal CO₂ (EtCO₂)</strong> is the peak CO₂ concentration at the end of exhalation, measured in mmHg. The device displays a <strong>capnogram waveform</strong> — a graphic representation of CO₂ concentration throughout the respiratory cycle. Normal EtCO₂ is <strong>35–45 mmHg</strong>.</p>

            <h5>What the Waveform Tells You</h5>
            <p>A normal capnogram has four phases: (1) ascending phase — dead space CO₂ at start of exhalation, (2) alveolar plateau — CO₂-rich alveolar air reaches the sensor, (3) peak (EtCO₂) — end of exhalation, (4) descending phase — inhalation begins, CO₂ drops sharply. The waveform shape provides important diagnostic information:</p>
            <ul>
                <li><strong>Normal rectangular waveform:</strong> Normal ventilation-perfusion matching.</li>
                <li><strong>"Shark-fin" waveform (slow upslope):</strong> Bronchospasm (asthma, COPD) — air trapping causes prolonged, incomplete exhalation.</li>
                <li><strong>Sudden drop to near zero:</strong> Airway displacement, tube obstruction, apnea, or cardiac arrest (loss of pulmonary blood flow).</li>
                <li><strong>Gradual decreasing EtCO₂:</strong> Hyperventilation, decreasing cardiac output, hypovolemia, pulmonary embolism.</li>
                <li><strong>Increasing EtCO₂:</strong> Hypoventilation, rising metabolic rate (fever, seizure), or rebreathing CO₂.</li>
            </ul>

            <h5>EMT Applications of Capnography</h5>
            <ul>
                <li><strong>Confirming and monitoring advanced airway placement:</strong> Waveform capnography is the <strong>gold standard</strong> for confirming endotracheal tube placement and monitoring for displacement. Six exhaled breaths with a consistent waveform confirms placement in the trachea.</li>
                <li><strong>Monitoring CPR quality:</strong> EtCO₂ ≥10–20 mmHg during CPR indicates adequate chest compressions. A sudden increase in EtCO₂ during CPR often signals <strong>return of spontaneous circulation (ROSC)</strong> before a pulse is palpable.</li>
                <li><strong>Assessing ventilation adequacy:</strong> In a spontaneously breathing patient, EtCO₂ provides real-time feedback about whether the patient is breathing too fast (low EtCO₂) or too slow/shallow (high EtCO₂).</li>
            </ul>

            <h5>Pitfalls</h5>
            <ul>
                <li><strong>Colorimetric devices (color-change detectors):</strong> These are single-use, disposable devices that change color based on CO₂ presence. Purple = low CO₂ (possible esophageal intubation), tan = moderate CO₂, yellow = high CO₂ (correct tracheal placement). These are less reliable than waveform capnography and cannot provide quantitative values or trend data.</li>
                <li><strong>Nasal cannula capnography:</strong> In a breathing patient, the EtCO₂ reading may be diluted by room air if the patient breathes through the mouth. Consider using a combined O₂/CO₂ mask.</li>
                <li><strong>Massive pulmonary embolism:</strong> Can cause a low EtCO₂ despite normal minute ventilation due to increased dead space — CO₂ cannot reach the alveoli to be exhaled.</li>
            </ul>

            <h4>3. Blood Glucose Monitoring</h4>

            <h5>How It Works</h5>
            <p>A <strong>glucometer</strong> measures the concentration of glucose in a small capillary blood sample (usually from a fingertip). The device applies the blood to a test strip containing glucose oxidase; an electrochemical reaction produces a current proportional to the glucose level. Normal fasting blood glucose is <strong>70–110 mg/dL</strong>, though postprandial (after eating) levels may be slightly higher.</p>

            <h5>EMT Indications for Blood Glucose Testing</h5>
            <ul>
                <li><strong>Altered mental status of unknown cause</strong> — this is the most critical indication. Hypoglycemia (&lt;60 mg/dL) is a rapidly reversible cause of AMS that can mimic stroke, intoxication, seizure, head injury, and psychiatric conditions.</li>
                <li><strong>Known diabetic with suspected hypoglycemia or hyperglycemia</strong> — symptoms of hypoglycemia (sweating, tachycardia, confusion, seizure, coma) require immediate glucose administration if the patient can safely take oral glucose or has an order for IM glucagon or IV dextrose.</li>
                <li><strong>Seizure — to rule out hypoglycemia as the cause.</strong></li>
                <li><strong>Any patient with syncope or near-syncope of unclear etiology.</strong></li>
                <li><strong>Patients on insulin or oral hypoglycemic agents with any change in mental status.</strong></li>
            </ul>

            <h5>Interpreting Results</h5>
            <table>
                <thead>
                    <tr><th>Result</th><th>Interpretation</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>&lt;60 mg/dL</td><td>Severe hypoglycemia</td><td>Give oral glucose (if conscious, able to swallow) or IM glucagon per protocol. Transport.</td></tr>
                    <tr><td>60–70 mg/dL</td><td>Mild hypoglycemia</td><td>Monitor closely; consider oral glucose if symptomatic. Transport.</td></tr>
                    <tr><td>70–180 mg/dL</td><td>Normal to mildly elevated</td><td>No glucose intervention needed; assess for other causes of symptoms.</td></tr>
                    <tr><td>&gt;180 mg/dL</td><td>Hyperglycemia</td><td>May be associated with DKA/HHS. Check for ketones, provide transport. Do NOT give glucose.</td></tr>
                    <tr><td>&gt;400–500 mg/dL</td><td>Severe hyperglycemia</td><td>Usually indicates DKA or HHS. Provide transport; monitor ABCs.</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> In hypoglycemia, the brain runs out of fuel. Minutes matter. If a patient with altered mental status has a blood glucose &lt;60 mg/dL, administer glucose immediately per your protocol. Do not wait for a doctor's order if standing orders authorize it. Brain cells can suffer irreversible damage within 30 minutes of severe hypoglycemia.
            </div>

            <h5>Pitfalls</h5>
            <ul>
                <li><strong>Inadequate blood sample:</strong> Too little blood yields an error or falsely low reading. Use the side of the fingertip (not the pad — more painful, less blood).</li>
                <li><strong>Hemoconcentration from poor perfusion:</strong> In shock, capillary glucose may not reflect venous glucose accurately.</li>
                <li><strong>Contaminated skin:</strong> Alcohol wipes, food residue, or lotion on the finger can contaminate the sample. Clean with soap and water or alcohol, then dry thoroughly.</li>
                <li><strong>Expired test strips:</strong> Always check the expiration date. Expired strips give inaccurate results.</li>
                <li><strong>Reagent strip vs. photometric devices:</strong> Know which type your agency uses. Reagent strips (visually read) are less accurate than electronic meters.</li>
            </ul>

            <h4>4. Cardiac Monitoring (ECG Basics for EMTs)</h4>

            <h5>How It Works</h5>
            <p>An <strong>electrocardiogram (ECG or EKG)</strong> records the electrical activity of the heart through electrodes placed on the patient's skin. The heart's electrical conduction system — SA node → AV node → Bundle of His → Purkinje fibers — generates a characteristic waveform that can be analyzed for rate, rhythm, and ischemia. As an EMT, your role in cardiac monitoring focuses on <strong>lead placement</strong>, <strong>basic rhythm interpretation</strong>, and <strong>recognition of life-threatening arrhythmias</strong>.</p>

            <h5>EMT Scope — Cardiac Monitoring</h5>
            <p>The EMT scope of practice for cardiac monitoring generally includes:</p>
            <ul>
                <li>Applying ECG electrodes correctly and obtaining a <strong>3-lead or 4-lead tracing</strong> for rhythm monitoring.</li>
                <li>Obtaining a <strong>12-lead ECG</strong> (in some systems — know your local protocol). In most systems, paramedics or trained EMTs obtain 12-leads, but the skill of proper lead placement is valuable.</li>
                <li>Identifying the <strong>basic rhythm</strong>: normal sinus rhythm, sinus tachycardia, sinus bradycardia, and the life-threatening rhythms listed below.</li>
                <li>Assisting with <strong>AED analysis and defibrillation</strong>.</li>
                <li>Recognizing <strong>artifacts</strong> (patient movement, loose leads, 60-cycle interference) that can mimic dangerous rhythms.</li>
            </ul>

            <h5>Life-Threatening Rhythms to Recognize</h5>
            <table>
                <thead>
                    <tr><th>Rhythm</th><th>Characteristics</th><th>Treatment</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Ventricular Fibrillation (V-Fib)</strong></td><td>Chaotic, irregular waveform — no identifiable P waves, QRS complexes, or T waves. The heart is quivering, not pumping. No pulse.</td><td>CPR + AED (defibrillate) + epinephrine per protocol</td></tr>
                    <tr><td><strong>Pulseless Ventricular Tachycardia (V-Tach)</strong></td><td>Wide, bizarre QRS complexes at a rate &gt;150 bpm. No pulse palpated.</td><td>CPR + AED (defibrillate) — treated same as V-Fib</td></tr>
                    <tr><td><strong>Asystole</strong></td><td>Flat line (must confirm in at least two leads to rule out fine V-Fib). No electrical activity, no pulse.</td><td>CPR + epinephrine — do NOT defibrillate (no shockable rhythm)</td></tr>
                    <tr><td><strong>Pulseless Electrical Activity (PEA)</strong></td><td>Organized electrical activity seen on monitor but NO pulse. The heart has electrical function but no mechanical output.</td><td>CPR + epinephrine + treat the underlying cause</td></tr>
                    <tr><td><strong>Third-Degree (Complete) Heart Block</strong></td><td>Atria and ventricles beat independently — P waves with no relationship to QRS complexes. Rate is often slow.</td><td>Treat causes, external pacing if severely symptomatic</td></tr>
                </tbody>
            </table>

            <h5>Lead Placement for 3-Lead/4-Lead Monitoring</h5>
            <ul>
                <li><strong>White (RA):</strong> Right arm (right clavicle, upper chest).</li>
                <li><strong>Black (LA):</strong> Left arm (left clavicle, upper chest).</li>
                <li><strong>Red (LL):</strong> Left leg (left lower rib margin or lower abdomen).</li>
                <li><strong>Green (RL):</strong> Right leg (ground lead — right lower rib margin or lower abdomen).</li>
            </ul>
            <p>Memo: <strong>"White on right, smoke over fire"</strong> — white (RA) on right, black (LA) to the left of white, red (LL) below the heart.</p>

            <h5>Common Artifacts and Troubleshooting</h5>
            <ul>
                <li><strong>Wandering baseline (respiratory variation):</strong> The tracing moves up and down with breathing. Move leads closer to the heart center (torso placement instead of limbs).</li>
                <li><strong>60-cycle interference:</strong> Fine, regular 60 Hz artifact from nearby electrical equipment. Switch to battery power; plug the monitor into a different outlet; move away from large electrical devices.</li>
                <li><strong>Muscle tremor artifact:</strong> Coarse baseline from patient shivering or movement. Warm the patient, ask them to stay still, or use the "monitor" lead filter.</li>
                <li><strong>Loose lead:</strong> Sudden flat line in one lead with normal tracings in others. Check electrode connections.</li>
                <li><strong>Chest hair:</strong> Poor electrode-to-skin contact. Shave small patches of hair for electrode placement.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> A common EMS pitfall is mistaking <strong>artifact for V-Fib</strong>. Before shocking, always check the patient — confirm unresponsiveness + apnea + pulselessness. If the patient is talking to you or has a pulse, the "V-Fib" on the monitor is artifact. <strong>Treat the patient, not the monitor.</strong>
            </div>

            <h4>General Principles — Using Any Monitoring Device</h4>
            <ul>
                <li><strong>Correlate with the patient:</strong> Every abnormal reading should be verified against the patient's clinical condition. A SpO₂ of 88% in a patient who is talking comfortably and has pink, warm skin deserves investigation of the equipment, not immediate intubation.</li>
                <li><strong>Trend over time is more valuable than a single reading:</strong> A single EtCO₂ of 38 mmHg is less informative than a trend from 32 → 38 → 42 suggesting hypoventilation.</li>
                <li><strong>Document device, reading, and time:</strong> Your PCR should include the device used, the values obtained, and the time of measurement.</li>
                <li><strong>Batteries fail:</strong> Carry spare batteries for every portable device. A device with a dead battery is useless.</li>
                <li><strong>Clean and maintain equipment:</strong> Follow your agency's protocol for cleaning monitoring devices between patients. Blood and body fluids on sensors can cause inaccurate readings and transmit infection.</li>
            </ul>
        </div>`,
        flashcards: [
            { question: "What is the normal end-tidal CO₂ (EtCO₂) range for a healthy adult?", answer: "35–45 mmHg", category: "Monitoring Devices" },
            { question: "What does a 'shark-fin' capnography waveform indicate?", answer: "Bronchospasm — seen in asthma and COPD exacerbations due to air trapping and incomplete exhalation", category: "Monitoring Devices" },
            { question: "What is the most critical EMT indication for blood glucose monitoring?", answer: "Altered mental status of unknown cause — hypoglycemia is a rapidly reversible cause of AMS", category: "Monitoring Devices" },
            { question: "What is the treatment threshold for hypoglycemia in a patient with altered mental status?", answer: "Blood glucose <60 mg/dL — administer oral glucose (if conscious/swallowing) or IM glucagon per protocol", category: "Monitoring Devices" },
            { question: "What does a sudden increase in EtCO₂ during CPR typically indicate?", answer: "Return of spontaneous circulation (ROSC) — a rise in EtCO₂ indicates that cardiac output has returned and CO₂ is being delivered to the lungs", category: "Monitoring Devices" },
            { question: "What is the mnemonic for ECG lead placement?", answer: "'White on right, smoke over fire' — White (RA) on right clavicle, Black (LA) on left clavicle, Red (LL) below the heart", category: "Monitoring Devices" },
            { question: "Why can pulse oximetry give a falsely normal SpO₂ reading in a patient with carbon monoxide poisoning?", answer: "CO-oxygen (COHb) is read by the pulse oximeter as oxyhemoglobin — the SpO₂ appears normal even though the patient is severely hypoxic", category: "Monitoring Devices" },
            { question: "What is the minimum EtCO₂ value during CPR that indicates adequate chest compressions?", answer: "≥10–20 mmHg — a value below this suggests inadequate compression depth or rate", category: "Monitoring Devices" }
        ],
        quiz: [
            { q: "A pulse oximeter is reading 92% on a patient with cool, pale hands and a weak radial pulse. The pleth waveform is low-amplitude and irregular. What is the most appropriate action?", options: ["Accept the reading — it is likely accurate", "Warm the patient's hands, try the earlobe site, and correlate with clinical signs before interpreting", "Immediately administer high-flow oxygen", "Replace the pulse oximeter battery"], correct: 1 },
            { q: "During CPR, the EtCO₂ monitor shows a sudden rise from 12 mmHg to 42 mmHg. This most likely indicates:", options: ["The patient is hyperventilating", "Return of spontaneous circulation (ROSC)", "The capnography device needs recalibration", "The airway has become displaced"], correct: 1 },
            { q: "[HARD] A 55-year-old asthmatic patient has an EtCO₂ reading of 52 mmHg with a shark-fin waveform visible on the capnogram. The patient is awake but using accessory muscles and speaking in 2-word sentences. This combination of findings indicates:", options: ["Normal ventilation — no intervention needed", "Bronchospasm causing hypoventilation with CO₂ retention — this patient is tiring and may need BVM assistance", "Hyperventilation from anxiety", "A pulmonary embolism — transport to a PCI center"], correct: 1, explanation: "The elevated EtCO₂ (>45 mmHg) plus shark-fin waveform indicates air trapping and CO₂ retention from severe bronchospasm. When paired with accessory muscle use and inability to speak full sentences, this signals impending respiratory failure." },
            { q: "Which of the following cardiac rhythms is NOT shockable (should NOT be defibrillated)?", options: ["Ventricular Fibrillation (V-Fib)", "Pulseless Ventricular Tachycardia (V-Tach)", "Asystole", "AED analysis advised 'shock'"], correct: 2 }
        ],
        critical: [
            {
                id: "crit_2_6_1",
                scenario: "You are called to a house fire for a 45-year-old male who was rescued by firefighters. He was trapped in a smoke-filled room for approximately 10 minutes. He is awake but confused, coughing, and complaining of a headache. His vitals: HR 108, BP 138/84, RR 24, SpO₂ 98% on high-flow oxygen via non-rebreather mask. The pulse oximeter shows a strong pleth waveform. His skin is pink and warm. The fire department reports the fire involved synthetic materials.",
                question: "Given the SpO₂ reading of 98% in a patient with significant smoke exposure, what is the most critical concern?",
                options: [
                    { t: "The patient is well-oxygenated and does not require further treatment — SpO₂ 98% confirms adequate oxygenation", f: "Incorrect. In smoke inhalation, CO poisoning is suspected, and pulse oximetry cannot distinguish COHb from oxyhemoglobin." },
                    { t: "Pulse oximetry is unreliable with smoke inhalation — the patient likely has carbon monoxide poisoning with a falsely normal SpO₂. Administer high-flow oxygen, monitor for deterioration, and transport to an appropriate facility", f: "Correct. In CO poisoning, SpO₂ is falsely elevated. Treat with high-flow O₂ and transport for CO-oximetry and hyperbaric evaluation." }
                ],
                correct: 1,
                explanation: "Carbon monoxide (CO) binds to hemoglobin 200–250× more strongly than oxygen. The pulse oximeter reads CO-oxygen as oxygenated hemoglobin, giving a falsely normal SpO₂. High-flow oxygen is the primary treatment to displace CO from hemoglobin (half-life on room air = 4–6 hours; on 100% O₂ = 60–90 minutes).",
                kpi: "CO poisoning recognition"
            },
            {
                id: "crit_2_6_2",
                scenario: "You are transporting a 68-year-old female with difficulty breathing. She has a history of CHF and COPD. She is sitting upright, using accessory muscles, with audible wheezes. She can only speak 2–3 words between breaths. You have placed her on a non-rebreather at 15 L/min and applied a pulse oximeter and capnography. Her SpO₂ is 91% and the capnogram shows a shark-fin waveform with an EtCO₂ reading that has risen from 46 to 54 mmHg over the last 8 minutes of transport. She is becoming increasingly drowsy.",
                question: "Based on these monitoring trends, what is the most appropriate next action?",
                options: [
                    { t: "Continue monitoring — the SpO₂ is above 90% and the patient is just tired from the work of breathing", f: "Incorrect. The rising EtCO₂ plus increasing drowsiness signals respiratory failure, not fatigue alone." },
                    { t: "The rising EtCO₂, shark-fin waveform, and declining mental status despite high-flow O₂ indicate respiratory failure from bronchospasm — initiate positive-pressure ventilation (BVM with CPAP if available) and prepare for possible advanced airway management", f: "Correct. Rising EtCO₂ with deteriorating mental status means the patient is tiring and can no longer maintain adequate ventilation. Assisted ventilation is needed immediately." }
                ],
                correct: 1,
                explanation: "An EtCO₂ rising above 45 mmHg with declining mental status signals hypoventilatory respiratory failure. In this COPD/asthma patient, the shark-fin waveform indicates bronchospasm causing air trapping. The patient needs CPAP/BiPAP or BVM ventilation, not just continued passive oxygen.",
                kpi: "Capnography trend interpretation"
            },
            {
                id: "crit_2_6_3",
                scenario: "You are called to a nursing home for a 78-year-old male with a history of type 2 diabetes and dementia. Staff report he has been 'more confused than usual' since this morning and refused breakfast. He has not had his insulin today. On arrival, he is sitting in a chair, awake but confused, unable to answer questions appropriately. His skin is warm and dry. Vitals: HR 96, BP 130/78, RR 16, SpO₂ 97%, temp 98.6°F. Staff state his blood sugar was checked 2 hours ago and was 'normal.' You perform a finger-stick glucose reading of 48 mg/dL. The staff insists, 'That can't be right — we checked it two hours ago and it was 132.'",
                question: "What is the most appropriate interpretation and action?",
                options: [
                    { t: "Trust the nursing home staff's prior reading — the glucometer reading must be wrong", f: "Incorrect. Blood glucose can drop rapidly, especially in patients who miss meals. The current reading takes priority." },
                    { t: "Blood glucose changes over time — the current reading of 48 mg/dL is valid and explains his AMS. Administer oral glucose per protocol (if he can swallow safely) or IM glucagon, and transport for evaluation", f: "Correct. The current reading reflects the patient's condition now. Hypoglycemia (&lt;60 mg/dL) is a medical emergency requiring immediate treatment." }
                ],
                correct: 1,
                explanation: "Hypoglycemia (&lt;60 mg/dL) is a rapidly reversible cause of altered mental status. The fact that the glucose was normal 2 hours ago is irrelevant — the current value is diagnostic. Missing a meal + insulin or hypoglycemic agent = rapid glucose drop. Treat immediately and transport.",
                kpi: "Hypoglycemia diagnosis and treatment"
            }
        ]
    },

    /* ------------------------------------------------------------------ */
    /*  c2s7 — History Taking (SAMPLE / OPQRST)                            */
    /* ------------------------------------------------------------------ */
    {
        id: "c2s7",
        shortTitle: "2.7 History Taking (SAMPLE / OPQRST)",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#stethoscope"/></svg> History Taking (SAMPLE / OPQRST)</h3>

            <p>Patient history taking is one of the most important skills you will develop as an EMT. The information you gather from the patient — and from family members, bystanders, and the scene — often determines the diagnosis, the treatment you provide, and the destination you choose. Unlike vital signs and physical exam findings, the history provides the <strong>context</strong> for everything else you observe. A well-taken history can distinguish between a stroke and hypoglycemia, between cardiac chest pain and GERD, between anaphylaxis and a panic attack.</p>

            <p>Two structured mnemonic tools — <strong>SAMPLE</strong> and <strong>OPQRST</strong> — help you gather a complete and organized history every time. They are not checklists to be recited robotically; they are frameworks that ensure you do not miss critical information while allowing the conversation to flow naturally.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> History taking is not a one-time event — it is an ongoing process. You will gather initial information during the primary assessment, add detail during the secondary assessment, and fill in gaps during reassessment. It is acceptable and expected to ask the same question in different ways as the patient's condition evolves or as you build rapport.
            </div>

            <h4>The SAMPLE History</h4>
            <p>The <strong>SAMPLE</strong> mnemonic is used to obtain a comprehensive medical history. It is indicated for <strong>every patient</strong>, regardless of the nature of the call — medical or trauma.</p>

            <table>
                <thead>
                    <tr><th>Letter</th><th>Stands For</th><th>Key Questions / Details to Gather</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>S</strong></td>
                        <td><strong>Signs & Symptoms</strong></td>
                        <td>
                            What is the patient experiencing? "Why did you call today?" "What's bothering you most?" Distinguish between <strong>signs</strong> (objective — what you observe: bleeding, swelling, abnormal vital signs) and <strong>symptoms</strong> (subjective — what the patient feels: pain, nausea, dizziness).<br>
                            For pain, use OPQRST (see below).
                        </td>
                    </tr>
                    <tr>
                        <td><strong>A</strong></td>
                        <td><strong>Allergies</strong></td>
                        <td>
                            "Are you allergic to any medications?" "Any food or environmental allergies?"<br>
                            Specifically ask about <strong>penicillin, sulfa drugs, aspirin, latex, and iodine</strong> — these are common triggers. Document the type of reaction (rash, anaphylaxis, GI upset). This is critical if you plan to administer any medication.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>M</strong></td>
                        <td><strong>Medications</strong></td>
                        <td>
                            "What medications do you take?" "Have you taken any today?" Include prescriptions, over-the-counter (OTC), herbal supplements, and recreational drugs.<br>
                            Ask about <strong>beta-blockers</strong> (can blunt HR response to shock), <strong>anticoagulants/blood thinners</strong> (warfarin, apixaban, rivaroxaban — major bleeding risk after trauma), <strong>insulin/oral hypoglycemics</strong>, and <strong>nitroglycerin</strong> (cardiac history). Bring all medication bottles to the hospital if possible.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>P</strong></td>
                        <td><strong>Past Medical History</strong></td>
                        <td>
                            "Do you have any medical conditions?" "Have you ever been hospitalized or had surgery?"<br>
                            Ask specifically about <strong>cardiac disease, diabetes, hypertension, COPD/asthma, seizures, stroke, cancer, kidney disease, and bleeding disorders</strong>. Also ask about <strong>pregnancy</strong> in female patients of childbearing age — pregnancy changes anatomy, physiology, and treatment options.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>L</strong></td>
                        <td><strong>Last Oral Intake</strong></td>
                        <td>
                            "When did you last eat or drink anything?" "What was it?"<br>
                            This matters for: (1) aspiration risk if sedation or surgery is needed, (2) diabetic patients (last meal timing relates to hypoglycemia/hyperglycemia), (3) determining if nausea/vomiting is related to food poisoning.<br>
                            Also ask about <strong>last bowel movement and urination</strong> — especially in elderly or bedridden patients (constipation can cause AMS in the elderly; lack of urination suggests dehydration or obstruction).
                        </td>
                    </tr>
                    <tr>
                        <td><strong>E</strong></td>
                        <td><strong>Events Leading to Illness/Injury</strong></td>
                        <td>
                            "What were you doing when this started?" "What happened right before you felt ill?"<br>
                            For trauma: mechanism of injury (MVC height, fall distance, speed, restraint use, intrusion, airbag deployment). For medical: what activity preceded symptoms? Was the patient at rest or active? Did anything make it better or worse? Was there any recent illness, travel, or unusual stress?
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> When a patient tells you "I'm allergic to everything," ask: "What specific medication caused a reaction, and what happened?" True anaphylaxis (hives, swelling, breathing difficulty) is different from nausea or headache — which may be a side effect, not a true allergy. Document the specific reaction.
            </div>

            <h4>The OPQRST Pain/Discomfort Assessment</h4>
            <p>When the chief complaint involves <strong>pain or discomfort</strong> — chest pain, abdominal pain, headache, back pain — the <strong>OPQRST</strong> mnemonic helps you characterize the pain in detail. This information is critical for differential diagnosis and for communicating effectively with the receiving hospital.</p>

            <table>
                <thead>
                    <tr><th>Letter</th><th>Stands For</th><th>Questions to Ask</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>O</strong></td>
                        <td><strong>Onset</strong></td>
                        <td>"When did the pain start?" "What were you doing when it began?" "Did it come on suddenly or gradually?"<br>
                        <strong>Sudden onset</strong> (like a "tearing" sensation) suggests: aortic dissection, pulmonary embolism, acute MI, ruptured aneurysm, pneumothorax. <strong>Gradual onset</strong> suggests: infections, inflammatory conditions, musculoskeletal pain.</td>
                    </tr>
                    <tr>
                        <td><strong>P</strong></td>
                        <td><strong>Provocation / Palliation</strong></td>
                        <td>"What makes the pain worse?" "What makes it better?"<br>
                        Worse with movement? Deep breathing? Eating? Lying flat? Better with rest? Specific position? Medications? Nitroglycerin that relieves chest pain is suggestive of cardiac ischemia. Pain worsened by breathing (pleuritic) suggests pulmonary origin.</td>
                    </tr>
                    <tr>
                        <td><strong>Q</strong></td>
                        <td><strong>Quality</strong></td>
                        <td>"Can you describe the pain?" "What does it feel like?"<br>
                        Use patient's own words, but offer descriptors if they struggle: sharp, dull, stabbing, burning, crushing, tearing, pressure, squeezing, throbbing. <strong>Crushing/pressure</strong> = cardiac. <strong>Tearing</strong> = aortic dissection. <strong>Burning</strong> = GERD or cardiac (atypical). <strong>Sharp/stabbing</strong> = pulmonary or musculoskeletal.</td>
                    </tr>
                    <tr>
                        <td><strong>R</strong></td>
                        <td><strong>Radiation</strong></td>
                        <td>"Does the pain travel anywhere?" "Is it in one spot or does it move?"<br>
                        Classic cardiac radiation: left arm, jaw, neck, back, epigastrium. Biliary pain: radiates to right shoulder/scapula. Renal colic: radiates from flank to groin. Aortic dissection: radiates to back or into legs.</td>
                    </tr>
                    <tr>
                        <td><strong>S</strong></td>
                        <td><strong>Severity</strong></td>
                        <td>"On a scale of 0 to 10, with 0 being no pain and 10 being the worst pain imaginable, how would you rate your pain?"<br>
                        Use standardized pain scales: <strong>Numeric Rating Scale (NRS)</strong> for adults/older children; <strong>Wong-Baker FACES</strong> for younger children; <strong>FLACC</strong> (Face, Legs, Activity, Cry, Consolability) for pre-verbal children or cognitively impaired patients. Track severity over time — is it getting better or worse?</td>
                    </tr>
                    <tr>
                        <td><strong>T</strong></td>
                        <td><strong>Time / Timing</strong></td>
                        <td>"When did the pain start exactly?" "Is it constant or does it come and go?" "How long does it last?" "Is this the first time you've had this pain?"<br>
                        Constant vs. intermittent is a key distinction. <strong>Constant, unrelenting pain</strong> suggests ischemia, infarction, or surgical abdomen. <strong>Intermittent/colicky</strong> suggests hollow-organ obstruction (kidney stones, gallstones, bowel obstruction).</td>
                    </tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical Warning:</strong> Never lower the severity of a pain assessment because the patient appears comfortable or is not "acting" like they are in pain. Patient presentations vary widely — some patients with myocardial infarction have a "silent" presentation (especially diabetics, women, and the elderly). Their pain score is their truth. Document it accurately.
            </div>

            <h4>Communication Techniques for History Taking</h4>

            <p>Effective history taking is not just about asking the right questions — it is about <strong>how</strong> you ask them. Your communication style directly affects the quality and accuracy of the information you receive.</p>

            <h5>Open-Ended vs. Closed Questions</h5>
            <ul>
                <li><strong>Open-ended questions</strong> encourage the patient to tell their story: "Tell me what happened today." "Can you describe the pain?" These questions yield the richest information and should be used <strong>first</strong>.</li>
                <li><strong>Closed questions</strong> elicit specific yes/no or short-answer responses: "Did the pain start suddenly?" "Have you taken your nitroglycerin?" Use these to <strong>clarify and fill in details</strong> after open-ended questions.</li>
                <li>Balance: Start open-ended, then narrow with closed questions. Avoid leading questions that suggest an answer: "The pain doesn't radiate to your arm, does it?" Instead ask: "Does the pain travel anywhere?"</li>
            </ul>

            <h5>Active Listening Techniques</h5>
            <ul>
                <li><strong>Facilitation:</strong> Use neutral prompts to encourage the patient to continue: "Go on…" "Tell me more about that." "Mm-hmm." Nodding and maintaining eye contact communicates that you are listening.</li>
                <li><strong>Reflection/Repetition:</strong> Repeat the patient's last few words back as a question: Patient: "The pain started after I ate lunch." EMT: "After you ate lunch…?" This encourages elaboration without leading.</li>
                <li><strong>Clarification:</strong> When the patient uses vague terms: "What do you mean by 'feeling funny'?" "You said the medication was 'a little blue pill' — do you know the name on the bottle?"</li>
                <li><strong>Summarization:</strong> Periodically summarize what you have heard to confirm accuracy: "Let me make sure I understand — the chest pain started about 2 hours ago while you were watching TV, it's a dull pressure that radiates to your left shoulder, and it's about a 6 out of 10. Did I get that right?"</li>
                <li><strong>Empathic statements:</strong> "This sounds very scary. I'm here to help you." "I can see you are in a lot of pain — we are going to do everything we can to help you." Empathy builds trust and encourages more honest disclosure.</li>
            </ul>

            <h5>Interviewing Patients with Special Needs</h5>
            <table>
                <thead>
                    <tr><th>Patient Population</th><th>Strategies</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pediatric</strong></td><td>Get on their eye level. Use simple language. Ask about what the child likes to do. If possible, interview the parent/caregiver separately for the history. Use the child's favorite toy or blanket for comfort. For pain, use the Wong-Baker FACES scale or FLACC.</td></tr>
                    <tr><td><strong>Elderly</strong></td><td>Speak clearly and face the patient (they may lip-read). Allow extra time — processing may be slower. Check for hearing aids and glasses. Be aware of polypharmacy and cognitive impairment. Ask about fall history, medication changes, and functional decline.</td></tr>
                    <tr><td><strong>Cognitively Impaired (Dementia, Intellectual Disability)</strong></td><td>Approach slowly, use calm voice, and identify yourself repeatedly if needed. Use short, concrete sentences. Avoid testing (e.g., "Do you know where you are?") — focus on comfort and observation. Gather history from caregivers, family, or facility staff.</td></tr>
                    <tr><td><strong>Non-English Speaking / Limited English Proficiency</strong></td><td>Use a <strong>medical interpreter</strong> — in person, by phone, or by video (available in many systems). Do NOT use family members as interpreters for sensitive information (they may filter or misunderstand). Learn key phrases in common languages: "Where does it hurt?" "Take this medication." Use picture-based communication tools if available.</td></tr>
                    <tr><td><strong>Hearing Impaired</strong></td><td>Face the patient directly, speak clearly, and ensure good lighting on your face. If the patient reads lips, do not obstruct your mouth. Use written communication (pen/paper, smartphone screen) as a backup. ASL interpreters can be accessed via video services.</td></tr>
                    <tr><td><strong>Visually Impaired</strong></td><td>Identify yourself by name and role immediately. Describe what you are doing before you do it: "I am going to take your blood pressure now — you'll feel the cuff squeeze your arm." Guide the patient's hand to your arm or equipment so they know what is happening.</td></tr>
                    <tr><td><strong>Emotionally Distressed / Crying</strong></td><td>Allow the patient to express emotion — do not rush to "fix it" with false reassurance. Use empathic silence. Acknowledge their distress: "This is a very difficult situation. Take your time." Then gently redirect to the history.</td></tr>
                </tbody>
            </table>

            <h4>Dealing with Difficult Patients</h4>
            <p>Not every patient encounter is cooperative. You will encounter patients who are angry, combative, intoxicated, in denial, or simply frightened in ways that manifest as hostility. Your approach to these patients can mean the difference between gaining their cooperation and escalating the situation.</p>

            <h5>General Principles for Difficult Encounters</h5>
            <ul>
                <li><strong>Stay calm.</strong> Your calm demeanor is contagious. If you become angry or defensive, the situation will escalate. Take a deep breath. Speak slowly and quietly — a calm voice lowers the emotional temperature of the room.</li>
                <li><strong>Do not take it personally.</strong> The patient is not angry at <em>you</em> — they are angry at their situation, their pain, their fear, or their loss of control. Separate the person from their behavior.</li>
                <li><strong>Set clear boundaries.</strong> "I understand you are frustrated, but I need you to sit on the stretcher so I can help you. I cannot help you if you are walking away." Use respectful, direct language.</li>
                <li><strong>Use the patient's name.</strong> Addressing a patient by name (with permission) humanizes the interaction and establishes rapport.</li>
                <li><strong>Give the patient choices</strong> to restore a sense of control: "Would you like to sit or lie on the stretcher?" "Would you like me to call your daughter?" Autonomy reduces resistance.</li>
            </ul>

            <h5>The Difficult Patient by Type</h5>
            <table>
                <thead>
                    <tr><th>Patient Type</th><th>Characteristics</th><th>Approach</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Anxious / Fearful</strong></td><td>Rapid speech, hyperventilation, repetitive questions, inability to focus</td><td>Be calm and reassuring. Explain everything before you do it. Give simple, direct instructions. Avoid overwhelming with too much information at once. Use grounding: "Focus on my voice. Take a slow breath with me."</td></tr>
                    <tr><td><strong>Angry / Hostile</strong></td><td>Loud voice, threatening posture, blaming language, refuses care</td><td>Maintain a safe distance. Do not turn your back. Keep an exit route open. Use a low, calm voice. Acknowledge their anger: "I can see you are very upset." Do not argue. Set limits: "I want to help you, but I need you to lower your voice." Request law enforcement if you feel threatened.</td></tr>
                    <tr><td><strong>Intoxicated / Substance-Impaired</strong></td><td>Slurred speech, unsteady gait, erratic behavior, denial of intoxication</td><td>Speak slowly and clearly. Be patient — they may not process information quickly. Do not lecture about substance use. Maintain safety — intoxicated patients can become violent unpredictably. Assume co-existing medical problem (head injury, hypoglycemia, overdose) until proven otherwise.</td></tr>
                    <tr><td><strong>Denies Illness / Refuses Care</strong></td><td>States "I'm fine," minimizes symptoms, refuses transport</td><td>Do not argue. Explain your concerns in simple terms: "Your blood pressure is very low and your heart rate is very fast — these are signs your body is under stress." Describe what could happen without care. Offer alternatives: "You don't have to go to the ER, but let me at least check your blood pressure again before I leave." Document refusal thoroughly if they still refuse.</td></tr>
                    <tr><td><strong>Manipulative / Demanding</strong></td><td>Makes excessive requests, uses flattery or threats, demands specific treatments (e.g., "Give me morphine" or "Take me to the hospital across town")</td><td>Be professional and consistent. Do not reward demanding behavior — explain what you can and cannot do within your protocol. Do not argue. "I understand you would like to go to City Hospital. Our protocol requires us to transport to the closest appropriate facility, which is County General. I will document your request."</td></tr>
                    <tr><td><strong>Confused / Demented</strong></td><td>Disoriented, unable to give coherent history, may be agitated</td><td>Orient the patient gently: "My name is John, I'm an EMT, and I'm here to help you." Use short, simple sentences. Avoid asking multiple questions at once. Gather history from family/caregivers. Look for medical causes of sudden confusion (infection, hypoxia, hypoglycemia, stroke, medication change).</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> When a patient refuses care, <strong>do not argue</strong>. Arguing damages rapport and makes the patient more resistant. Instead: (1) acknowledge their autonomy ("I understand you do not want to go to the hospital"), (2) explain your concerns ("I am worried because your blood pressure is low and you passed out"), (3) offer alternatives ("Will you let me check your blood pressure one more time?"), (4) if they still refuse, document thoroughly and have them sign a refusal (or document witnessed verbal refusal). Leave the door open: "If you change your mind, call 9-1-1 again. We will come back."
            </div>

            <h4>Putting It All Together — A Systematic Approach</h4>
            <p>Your scene size-up and primary assessment have already identified and managed life threats. Now you shift to the <strong>secondary assessment</strong>, where history taking is the centerpiece. Here is how the SAMPLE and OPQRST fit into the overall patient assessment process:</p>
            <ol>
                <li><strong>Scene Size-Up</strong> — Ensure safety; note mechanism of injury or nature of illness.</li>
                <li><strong>Primary Assessment (XABCDE)</strong> — Identify and manage life threats; get initial chief complaint and general impression.</li>
                <li><strong>History Taking</strong> — Obtain SAMPLE history and OPQRST (if pain is present). This is where 80% of diagnostic information comes from.</li>
                <li><strong>Secondary Assessment</strong> — Focused physical exam based on the chief complaint and history.</li>
                <li><strong>Reassessment</strong> — Repeat vital signs, re-evaluate interventions, fill in any history gaps.</li>
            </ol>
            <p>Remember: History taking is an <strong>active conversation</strong>, not an interrogation. The patient is the expert on their own body and their own experience. Your job is to guide the conversation, listen carefully, and extract the information you need to provide safe, appropriate care.</p>
        </div>`,
        flashcards: [
            { question: "What does the SAMPLE mnemonic stand for?", answer: "Signs & Symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to illness/injury", category: "History Taking" },
            { question: "What does the OPQRST mnemonic stand for?", answer: "Onset, Provocation/Palliation, Quality, Radiation, Severity, Time/Timing", category: "History Taking" },
            { question: "Why is it important to ask about anticoagulant use in a trauma patient?", answer: "Anticoagulants (warfarin, apixaban, rivaroxaban) significantly increase the risk of life-threatening bleeding, even from minor injuries", category: "History Taking" },
            { question: "What pain scale is recommended for pre-verbal children or cognitively impaired patients?", answer: "The FLACC scale (Face, Legs, Activity, Cry, Consolability) — it uses observable behaviors to assess pain when the patient cannot self-report", category: "History Taking" },
            { question: "What is the recommended approach when a patient refuses care and transport?", answer: "Acknowledge their autonomy, explain your concerns, offer alternatives, document thoroughly (signed refusal or witnessed verbal refusal), and leave the door open for them to call back", category: "History Taking" },
            { question: "A patient describes chest pain as 'tearing' in quality. What condition should you suspect?", answer: "Aortic dissection — tearing or ripping chest/back pain is a classic descriptor for this life-threatening condition", category: "History Taking" },
            { question: "What is the difference between an open-ended and a closed question in history taking?", answer: "Open-ended questions (e.g., 'Tell me what happened') encourage narrative and yield richer information. Closed questions (e.g., 'Did the pain start suddenly?') elicit specific yes/no answers and are used to clarify details.", category: "History Taking" },
            { question: "List three subgroups of patients who are more likely to have a 'silent' or atypical presentation of myocardial infarction.", answer: "Diabetics (neuropathy blunts pain), women (more likely to have atypical symptoms like fatigue, nausea, back pain), and the elderly (may present with altered mental status or weakness alone)", category: "History Taking" }
        ],
        quiz: [
            { q: "In the SAMPLE mnemonic, what does the 'P' stand for?", options: ["Pain assessment", "Past medical history", "Prior medications", "Physical exam"], correct: 1 },
            { q: "A trauma patient has a known history of atrial fibrillation and takes warfarin. This information is MOST relevant for assessing the risk of:", options: ["Allergic reaction to pain medication", "Life-threatening bleeding from internal injuries due to anticoagulation", "Hypoglycemia during transport", "Seizure activity"], correct: 1 },
            { q: "[HARD] A 65-year-old male with chest pain tells you the pain started 3 hours ago while shoveling snow, is a 'heavy pressure' in the center of his chest that radiates to his left arm, rates it 7/10, and notes nitroglycerin gave partial relief. Which of the following is the MOST concerning element of this history?", options: ["The pain started during physical exertion", "The pain radiates to the left arm", "The duration is 3 hours — prolonged chest pain suggests evolving MI rather than stable angina", "The nitroglycerin gave partial relief"], correct: 2, explanation: "Angina typically lasts 5–15 minutes and resolves with rest or nitroglycerin. Pain lasting >20 minutes despite NTG is concerning for acute coronary syndrome / evolving MI. This patient needs emergent transport to a PCI-capable center." },
            { q: "[HARD] A patient with sudden onset severe lower back pain describes it as 'the worst pain of my life' and rates it 10/10. It radiates into the left groin. Onset was sudden while sitting at rest. He is pale, diaphoretic, HR 122, BP 84/56. What condition must be at the TOP of your differential?", options: ["Muscle spasm", "Renal colic (kidney stone)", "Ruptured abdominal aortic aneurysm (AAA) — the combination of sudden tearing back/flank pain, hypotension, and pallor in an older patient is classic", "Herniated disc"], correct: 2, explanation: "Sudden severe back/flank pain with hypotension, diaphoresis, and pallor in an older patient is a ruptured AAA until proven otherwise. This is a time-critical surgical emergency. Do not delay transport." }
        ],
        critical: [
            {
                id: "crit_2_7_1",
                scenario: "You are called to a home for a 58-year-old male with a chief complaint of 'weakness.' On arrival, the patient is lying on the couch, alert but subdued. He states he has felt 'weak and tired' for the past 2 days but didn't think much of it. He has a history of diabetes and hypertension. His wife mentions he had 'a little stomach bug' but is otherwise healthy. As you begin your SAMPLE history, the patient becomes increasingly vague and says, 'I just need to rest.' The wife quietly pulls you aside and tells you that he had dark, tarry stools yesterday and again this morning — which he told her not to mention. Your assessment reveals: HR 108, BP 96/60, RR 18, SpO₂ 96%, skin pale and cool.",
                question: "What piece of SAMPLE information changes your clinical picture most dramatically, and what is your next action?",
                options: [
                    { t: "The history of diabetes — check blood glucose and give orange juice if low", f: "Incorrect. While diabetes is relevant, the critical new information is the melena (dark tarry stools), which explains the vital sign abnormalities." },
                    { t: "The 'E' (Events) information — the wife's disclosure of dark tarry stools (melena) indicates GI bleeding, explaining the tachycardia and borderline hypotension. Initiate high-flow oxygen, place patient supine, and transport emergently", f: "Correct. Melena = upper GI bleeding. The patient's 'weakness' is actually hemorrhagic shock from blood loss. This changes the urgency from a routine assessment to a time-sensitive transport." }
                ],
                correct: 1,
                explanation: "The wife's supplemental history (melena) is the key finding. The combination of melena + tachycardia + borderline hypotension + pallor = GI hemorrhage with early hypovolemic shock. The patient may have been minimizing his symptoms. Always seek collateral history from family/caregivers.",
                kpi: "Collateral history gathering"
            },
            {
                id: "crit_2_7_2",
                scenario: "A 45-year-old male was the unrestrained driver in a high-speed MVC (estimated 60 mph into a tree). He has a deformed steering wheel and a starred windshield. He is conscious and alert, with obvious deformity of his right femur. He is in significant pain. As you begin your history, he becomes angry and shouts, 'Why are you asking me all these stupid questions? I was in a car accident! My leg is broken! Just take me to the hospital! Stop wasting time!' He refuses to answer any more questions and demands you 'drive now.'",
                question: "How should you manage this difficult patient encounter while still obtaining essential history?",
                options: [
                    { t: "Ignore his outburst and continue asking SAMPLE questions — the history is mandatory", f: "Incorrect. Pushing through resistance in an already angry patient will escalate the situation and damage rapport." },
                    { t: "Acknowledge his frustration and pain, explain briefly why you need a few answers ('I need to know your allergies and medications to give you safe pain treatment'), prioritize critical SAMPLE elements (allergies + meds + events), and defer non-critical questions to en route", f: "Correct. Meet the patient where they are, explain the 'why' behind your questions, prioritize the safety-critical information, and defer what can wait. Build rapport en route." }
                ],
                correct: 1,
                explanation: "When a patient is hostile, acknowledge their feelings, explain your reasoning, and prioritize. Allergies and medications are safety-critical before any treatment. Past medical history and last oral intake can be asked en route after the patient has calmed and trust has been established.",
                kpi: "Difficult patient management"
            },
            {
                id: "crit_2_7_3",
                scenario: "You respond to a 78-year-old female who 'fell and can't get up.' She lives alone. Upon arrival, she is on the floor in her kitchen, alert but confused. She says she 'must have tripped' but cannot remember exactly what happened. She has no visible injuries, states she does not need an ambulance, and just wants help getting back into her chair. Her vitals: HR 82, BP 124/78, RR 16, SpO₂ 97%. She is pleasant but insistent: 'I'm fine, dear. Just help me up.' As you talk with her, you notice she seems more confused than you would expect for a simple mechanical fall — she cannot remember what day it is and keeps asking why you are there. There is an empty pill bottle on the counter for lisinopril. The house is cluttered, and the refrigerator appears empty.",
                question: "What is the most appropriate approach to history taking and decision-making in this scenario?",
                options: [
                    { t: "Help her back into the chair and have her sign a refusal — she is alert and has a right to refuse", f: "Incorrect. Her confusion and poor recall suggest an underlying medical problem that caused the fall, not a simple slip." },
                    { t: "Use OPQRST for the fall mechanism, gather collateral from what you can observe (empty fridge suggests poor nutrition/hydration; empty lisinopril bottle suggests she may have stopped her BP medication), notice her confusion may indicate the cause rather than the result of the fall, and explain why transport is needed: 'You seem a bit confused, which may be a sign of an infection or other medical problem. I'd like to have a doctor check you to make sure you're safe'", f: "Correct. The patient's confusion, poor recall, and empty house suggest systemic illness (UTI, dehydration, medication issue) that caused the fall. Refusing transport is not appropriate for a patient who may lack the capacity to make that decision due to underlying AMS." }
                ],
                correct: 1,
                explanation: "When a patient's decision-making capacity is questionable (confusion, poor recall, inability to understand their situation), allowing them to refuse transport is unsafe. The EMT has a duty to act and should proceed with transport, explaining concerns to the patient calmly and clearly. The 'E' in SAMPLE (Events) — why she actually fell — is the key question.",
                kpi: "Capacity assessment and refusal management"
            }
        ]
    }
];
