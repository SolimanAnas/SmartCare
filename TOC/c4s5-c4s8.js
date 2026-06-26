/* ========== Chapter 4 – Cardiovascular & Resuscitation (Sections 5-8) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [
    /* ──────────────────────────────────────────────────────────────────
     * c4s5 – Dysrhythmia Recognition
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c4s5",
        shortTitle: "4.5 Dysrhythmia Recognition",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Dysrhythmia Recognition</h3>

            <h4>Reading an ECG Strip Systematically</h4>
            <p>A systematic approach to rhythm analysis prevents missed findings. Use the <strong>Rate-Rhythm-Axis-Intervals-Morphology</strong> framework every time you look at a strip:</p>
            <ol>
                <li><strong>Rate:</strong> Count the number of QRS complexes in a 6-second strip and multiply by 10 (for a rough estimate). Normal sinus rate is 60–100/min. Bradycardia is <60/min; tachycardia is >100/min.</li>
                <li><strong>Rhythm:</strong> Are the R-R intervals regular or irregular? Measure from one R wave to the next. If the spacing varies, the rhythm is irregular.</li>
                <li><strong>P waves:</strong> Are P waves present? Does every P wave have a QRS following it? What is the P-wave morphology? Normal P waves are upright in lead II.</li>
                <li><strong>PR Interval:</strong> Measure from the beginning of the P wave to the beginning of the QRS complex. Normal: 0.12–0.20 seconds (3–5 small boxes).</li>
                <li><strong>QRS Duration:</strong> Measure from the beginning of the Q wave to the end of the S wave. Normal: <0.12 seconds (<3 small boxes). Wide QRS (>0.12 s) indicates a ventricular origin or conduction delay.</li>
            </ol>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> An ECG strip shows the electrical activity of the heart, not mechanical contraction. A patient can have electrical activity on the monitor but no pulse (PEA). Always assess the patient — not just the monitor.
            </div>

            <h4>Sinus Rhythms</h4>
            <p><strong>Normal Sinus Rhythm (NSR):</strong> Rate 60–100/min, regular R-R intervals, one P wave before every QRS, upright P waves in lead II, PR interval 0.12–0.20 s, QRS <0.12 s. This is the normal, healthy rhythm.</p>
            <p><strong>Sinus Bradycardia:</strong> Rate <60/min with all other features of NSR. Common in athletes at rest, during sleep, or from medications (beta-blockers, calcium channel blockers). <em>Symptomatic</em> bradycardia — hypotension, altered mental status, chest pain, or signs of shock — requires treatment. Atropine 0.5 mg IV is the first-line ACLS drug for symptomatic bradycardia.</p>
            <p><strong>Sinus Tachycardia:</strong> Rate >100/min with all other normal features. Usually a physiological response to stress, pain, fever, dehydration, anxiety, blood loss, or hypoxia. Treat the underlying cause rather than the rate itself.</p>

            <table>
                <thead>
                    <tr><th>Rhythm</th><th>Rate</th><th>Regularity</th><th>P Waves</th><th>QRS</th><th>Clinical Significance</th></tr>
                </thead>
                <tbody>
                    <tr><td>NSR</td><td>60–100</td><td>Regular</td><td>Normal, 1:1</td><td>Narrow</td><td>Normal — no treatment needed</td></tr>
                    <tr><td>Sinus Brady</td><td><60</td><td>Regular</td><td>Normal, 1:1</td><td>Narrow</td><td>Treat only if symptomatic (atropine/pacing)</td></tr>
                    <tr><td>Sinus Tachy</td><td>>100</td><td>Regular</td><td>Normal, 1:1</td><td>Narrow</td><td>Treat underlying cause (fever, pain, bleeding, hypoxia)</td></tr>
                </tbody>
            </table>

            <h4>Atrial Rhythms</h4>
            <p><strong>Atrial Fibrillation (A-Fib):</strong> Chaotic, disorganized electrical activity in the atria. The atria quiver rather than contract effectively. ECG shows <strong>no discernible P waves</strong> — the baseline has irregular, rapid fibrillation waves (f waves). The ventricular response is irregularly irregular. Rate can be controlled (60–100) or rapid (>100 = A-fib with RVR). Clinical concerns include loss of atrial "kick" (reducing cardiac output by 10–20%) and thromboembolic stroke risk from blood stasis in the atria. Patients may need anticoagulation and rate/rhythm control.</p>
            <p><strong>Atrial Flutter (A-Flutter):</strong> A re-entrant circuit in the right atrium producing rapid, regular atrial depolarizations. ECG shows a characteristic <strong>"sawtooth" flutter wave pattern</strong> in leads II, III, and aVF, typically at ~300/min. The AV node usually blocks some impulses, creating a fixed conduction ratio (2:1, 3:1, or 4:1). A 2:1 block produces a ventricular rate of ~150/min — a classic presentation of undiagnosed atrial flutter. Treatment includes rate control, cardioversion, or ablation.</p>

            <h4>Ventricular Rhythms</h4>
            <p><strong>Ventricular Tachycardia (V-Tach):</strong> Three or more consecutive ventricular ectopic beats at a rate >100/min. ECG shows a <strong>wide QRS (>0.12 s)</strong>, no P waves associated with the wide complexes, and a regular or slightly irregular rhythm. Monomorphic V-tach looks identical beat-to-beat; polymorphic V-tach (including Torsades de Pointes) varies. Pulseless V-tach is treated as a shockable rhythm — defibrillate immediately. Stable V-tach with a pulse may be treated with amiodarone or synchronized cardioversion.</p>
            <p><strong>Ventricular Fibrillation (V-Fib):</strong> Chaotic, disorganized ventricular electrical activity with no coordinated contraction — effectively cardiac arrest. ECG shows <strong>no organized QRS complexes</strong> — only irregular, varying-amplitude waveforms. Coarse V-fib has larger amplitude and is more likely to be defibrillated successfully. Fine V-fib may look close to asystole. V-fib is a <strong>shockable rhythm</strong> — defibrillation is the only definitive treatment. Survival decreases 7–10% for every minute defibrillation is delayed.</p>
            <p><strong>Asystole:</strong> The absence of any electrical activity — a flat line. ECG shows <strong>no P waves, no QRS complexes</strong> — a straight baseline (confirm by checking gain, leads, and power). Asystole is <strong>not a shockable rhythm</strong>. Treatment is high-quality CPR, airway management, IV/IO access, and epinephrine 1 mg q3–5 min. Consider reversible causes (the Hs and Ts).</p>
            <p><strong>Pulseless Electrical Activity (PEA):</strong> Organized electrical activity on the monitor <em>without</em> a palpable pulse. The heart has electrical rhythm but no mechanical contraction. PEA can look like any organized rhythm (sinus, atrial, even wide-complex). <strong>PEA is not shockable.</strong> Treatment focuses on identifying and correcting the underlying cause (the Hs and Ts: hypovolemia, hypoxia, hydrogen ion [acidosis], hypo-/hyperkalemia, hypothermia, tension pneumothorax, tamponade [cardiac], toxins, thrombosis [pulmonary or coronary]).</p>

            <table>
                <thead>
                    <tr><th>Rhythm</th><th>Shockable?</th><th>Rate</th><th>Key ECG Feature</th><th>Initial Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>V-Fib</td><td>Yes</td><td>None (chaotic)</td><td>Irregular, no QRS</td><td>Defibrillate → CPR → shock q2min</td></tr>
                    <tr><td>Pulseless V-Tach</td><td>Yes</td><td>>100</td><td>Wide QRS, no pulse</td><td>Defibrillate → CPR → shock q2min</td></tr>
                    <tr><td>Asystole</td><td>No</td><td>0</td><td>Flat line</td><td>CPR, epinephrine, treat cause</td></tr>
                    <tr><td>PEA</td><td>No</td><td>Variable</td><td>Organized rhythm, no pulse</td><td>CPR, epinephrine, identify/treat cause (Hs & Ts)</td></tr>
                </tbody>
            </table>

            <h4>Heart Blocks (AV Blocks)</h4>
            <p><strong>First-Degree AV Block:</strong> A prolonged PR interval (>0.20 seconds) — every P wave still conducts to the ventricles. The delay is in the AV node. Usually benign and asymptomatic. Can be caused by increased vagal tone, medications (beta-blockers, calcium channel blockers), or underlying heart disease. No specific treatment is needed for the block itself — monitor and treat the patient.</p>
            <p><strong>Second-Degree AV Block Type I (Wenckebach / Mobitz I):</strong> Progressive PR interval lengthening until a QRS is dropped (a non-conducted P wave). The cycle then repeats. The block is at the AV node level. Often transient and related to increased vagal tone, inferior MI, or medication effect. Usually hemodynamically stable and may not require pacing. Monitor and observe; treat the underlying cause.</p>
            <p><strong>Second-Degree AV Block Type II (Mobitz II):</strong> Fixed PR interval with <em>intermittent non-conducted P waves</em> — a QRS drops out without preceding PR lengthening. This block is below the AV node (infranodal — in the bundle of His/Purkinje system) and indicates significant conduction system disease. Type II often progresses suddenly to complete heart block and is <strong>less stable</strong> than Type I. Requires transcutaneous pacing and cardiology consultation — often a pacemaker is indicated.</p>
            <p><strong>Third-Degree AV Block (Complete Heart Block):</strong> <strong>No atrial impulses conduct to the ventricles</strong>. The atria and ventricles beat independently (AV dissociation). P waves appear regularly at one rate, and QRS complexes appear regularly at a slower, independent rate (escape rhythm). If the escape rhythm originates in the AV junction, QRS may be narrow at 40–60/min. If it originates in the ventricles (ventricular escape), QRS is wide at 20–40/min. Complete heart block is hemodynamically significant — patients are often hypotensive, altered, and symptomatic. Treatment is transcutaneous pacing and/or IV infusion of chronotropic agents (e.g., dopamine, epinephrine). This is a true emergency.</p>

            <table>
                <thead>
                    <tr><th>Block</th><th>PR Interval</th><th>Pattern</th><th>QRS</th><th>Treatment</th></tr>
                </thead>
                <tbody>
                    <tr><td>1st Degree</td><td>Prolonged (>0.20 s)</td><td>All P waves conducted</td><td>Narrow</td><td>None — observe</td></tr>
                    <tr><td>2nd I (Wenckebach)</td><td>Progressive lengthening</td><td>Dropped QRS, then reset</td><td>Narrow</td><td>Usually none; treat cause</td></tr>
                    <tr><td>2nd II (Mobitz II)</td><td>Fixed, normal</td><td>Intermittent dropped QRS</td><td>Often wide</td><td>Pacing indicated</td></tr>
                    <tr><td>3rd Degree</td><td>None (AV dissociation)</td><td>P & QRS independent</td><td>Wide (ventricular escape)</td><td>Pacing — emergency!</td></tr>
                </tbody>
            </table>

            <h4>Clinical Significance at the EMT Level</h4>
            <p>As an EMT, you are not expected to diagnose every dysrhythmia — but you must recognize <strong>lethal rhythms</strong> (V-fib, pulseless V-tach, asystole, third-degree block with instability) and know when to apply the AED, start CPR, and expedite transport. You should also recognize stable tachycardias and bradycardias and report your findings to ALS providers or the receiving physician. Always correlate the monitor with the patient's clinical status — <em>treat the patient, not the monitor</em>.</p>
        </div>`,
        flashcards: [
            {
                question: "What are the five components of systematic ECG strip interpretation?",
                answer: "Rate, Rhythm, P waves, PR Interval, QRS Duration — assessed in order every time you look at a strip.",
                category: "ECG Basics"
            },
            {
                question: "What distinguishes sinus tachycardia from sinus bradycardia?",
                answer: "Sinus tachycardia: rate >100/min. Sinus bradycardia: rate <60/min. Both have normal P waves, regular rhythm, and normal PR and QRS intervals.",
                category: "Sinus Rhythms"
            },
            {
                question: "What is the key ECG finding that differentiates atrial fibrillation from atrial flutter?",
                answer: "A-fib: no discernible P waves, irregularly irregular baseline, irregular R-R intervals. A-flutter: sawtooth flutter waves (especially in II, III, aVF) with regular or fixed-ratio conduction.",
                category: "Atrial Rhythms"
            },
            {
                question: "What rhythm is characterized by a wide QRS (>0.12 s) at a rate >100/min with no P waves and is shockable if pulseless?",
                answer: "Ventricular tachycardia (V-tach). If the patient has no pulse, defibrillate immediately. If a pulse is present, consider synchronized cardioversion or amiodarone.",
                category: "Ventricular Rhythms"
            },
            {
                question: "What are the shockable rhythms in cardiac arrest?",
                answer: "Ventricular fibrillation (V-fib) and pulseless ventricular tachycardia (pulseless V-tach). Asystole and PEA are NOT shockable.",
                category: "Ventricular Rhythms"
            },
            {
                question: "What is PEA and how is it treated?",
                answer: "Pulseless Electrical Activity — organized electrical activity on the monitor without a palpable pulse. Not shockable. Treatment focuses on high-quality CPR, epinephrine, and correcting the underlying reversible cause (Hs and Ts).",
                category: "Ventricular Rhythms"
            },
            {
                question: "What is the difference between Mobitz I (Wenckebach) and Mobitz II second-degree AV block?",
                answer: "Mobitz I: progressive PR lengthening until a QRS is dropped — usually benign, at the AV node. Mobitz II: fixed PR interval with intermittent dropped QRS — infranodal, more dangerous, often requires pacing.",
                category: "Heart Blocks"
            },
            {
                question: "What ECG finding characterizes third-degree (complete) AV block?",
                answer: "Complete AV dissociation — P waves march out at one rate, QRS complexes at a slower, independent rate (escape rhythm). No relationship between P waves and QRS complexes. Requires immediate pacing.",
                category: "Heart Blocks"
            }
        ],
        quiz: [
            {
                q: "A patient's ECG shows a regular rhythm at 48/min with normal P waves, normal PR interval (0.16 s), and narrow QRS. The patient is dizzy with a BP of 82/50. What is the rhythm and initial treatment?",
                options: [
                    "Sinus tachycardia — treat the underlying cause",
                    "Sinus bradycardia — atropine 0.5 mg or transcutaneous pacing if symptomatic",
                    "First-degree AV block — no treatment needed",
                    "Junctional escape rhythm — pace immediately"
                ],
                correct: 1
            },
            {
                q: "Which of the following rhythms is characterized by a 'sawtooth' pattern of atrial activity best seen in leads II, III, and aVF?",
                options: [
                    "Atrial fibrillation",
                    "Atrial flutter",
                    "Ventricular tachycardia",
                    "Wandering atrial pacemaker"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 72-year-old patient is found unresponsive with a BP of 70/40. The monitor shows P waves marching out at 90/min and wide QRS complexes at 38/min with no relationship between them. What rhythm is this and what is the priority treatment?",
                options: [
                    "Sinus bradycardia with PJCs — administer atropine",
                    "Third-degree AV block with ventricular escape rhythm — prepare for transcutaneous pacing and transport",
                    "Second-degree AV block Mobitz II — monitor and observe",
                    "Idioventricular rhythm — defibrillate at 200 J"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_4_5_1",
                scenario: "You and your partner are called to a nursing home for a 'sick person.' The 82-year-old male patient is pale, diaphoretic, and confused. His BP is 78/44, HR is 38, and SpO2 is 91% on room air. The nurse hands you an ECG strip showing a regular rhythm at 38/min with normal P waves, normal PR interval, and narrow QRS. She says, 'His vitals were fine two hours ago.' The patient's medications include metoprolol, lisinopril, and warfarin.",
                question: "Based on the ECG and clinical presentation, what rhythm is most likely present and what is your immediate treatment?",
                options: [
                    {t: "Sinus bradycardia — the rate is <60 and P waves are present. Administer atropine 0.5 mg and prepare for transcutaneous pacing if no response.", f: "Correct. This is symptomatic sinus bradycardia (rate <60 with hypotension and altered mental status). The first-line ACLS treatment is atropine. If atropine fails, transcutaneous pacing is indicated."},
                    {t: "Junctional escape rhythm — the rate is too slow for sinus. Administer amiodarone 300 mg IV push.", f: "Incorrect. Normal P waves before each QRS with a normal PR interval indicate sinus rhythm — not junctional. Amiodarone is used for tachyarrhythmias, not bradycardia."}
                ],
                correct: 0,
                explanation: "Symptomatic bradycardia with a pulse is treated with atropine 0.5 mg IV q3-5 min (max 3 mg) followed by transcutaneous pacing if there is no response. Always correlate the monitor with clinical findings — this patient is hypotensive and altered because the heart cannot maintain adequate cardiac output at this rate.",
                kpi: "Symptomatic bradycardia management"
            },
            {
                id: "crit_4_5_2",
                scenario: "You are called to a private residence for a 68-year-old female with 'palpitations and dizziness.' She is alert but anxious. Her BP is 108/72, HR is approximately 170 on the monitor, and SpO2 is 96%. The monitor shows wide QRS complexes (>0.16 s) at ~170/min with no visible P waves. The rhythm is regular. She has a palpable radial pulse. The patient has a history of coronary artery disease and has had a previous MI. Her daughter says she has been feeling 'fluttering in her chest' for about 45 minutes.",
                question: "Which rhythm do you suspect and what is the appropriate ALS-level treatment (anticipate for medical direction)?",
                options: [
                    {t: "Supraventricular tachycardia with aberrancy — synchronized cardioversion at 50-100 J", f: "Incorrect. While SVT with aberrancy is in the differential, the history of CAD and prior MI plus wide QRS at this rate strongly suggests V-tach."},
                    {t: "Monomorphic ventricular tachycardia — stable with a pulse. ALS may administer amiodarone 150 mg IV or perform synchronized cardioversion per protocol.", f: "Correct. Monomorphic V-tach with a pulse is stable. Treatment options include amiodarone 150 mg IV over 10 minutes or synchronized cardioversion (start at 100 J biphasic). This patient needs ALS-level care and rapid transport."}
                ],
                correct: 1,
                explanation: "A wide-complex tachycardia in a patient with known structural heart disease (CAD, prior MI) is V-tach until proven otherwise. While the patient is currently stable with a pulse, V-tach can degenerate into V-fib. An EMT should recognize this rhythm, monitor closely, provide oxygen, and transport rapidly to an ALS-intercept or STEMI-capable facility.",
                kpi: "Wide-complex tachycardia recognition"
            },
            {
                id: "crit_4_5_3",
                scenario: "You are dispatched to a cardiac arrest. A bystander is performing CPR. The AED was applied and advised 'no shock.' You take over and apply your monitor. The ECG shows organized electrical activity at ~70/min with narrow QRS complexes. There is no palpable carotid or femoral pulse. The patient's skin is warm and pink. The family reports the patient had sudden-onset severe chest pain and shortness of breath about 20 minutes before collapsing. There is no history of trauma or any known medical conditions.",
                question: "What rhythm is present and what is the likely underlying cause?",
                options: [
                    {t: "Normal sinus rhythm — the monitor is showing a perfusing rhythm. Continue CPR, check pulse again in 2 minutes.", f: "Correct. This is PEA — organized electrical activity without a pulse. The sudden onset of chest pain and dyspnea suggesting massive pulmonary embolism is a likely cause (obstructive shock preventing cardiac output)."},
                    {t: "Ventricular fibrillation — the AED was incorrect. Defibrillate immediately.", f: "Incorrect. The monitor clearly shows organized narrow-complex electrical activity. This is PEA, not V-fib. Defibrillating PEA is harmful and wastes time."}
                ],
                correct: 0,
                explanation: "PEA is organized electrical activity on the monitor without a palpable pulse. It is NOT shockable. Treatment focuses on high-quality CPR, epinephrine 1 mg q3-5 min, and identifying the reversible cause. In this case, the presentation suggests massive PE (obstructive shock) — a thrombolytic may be indicated by medical direction. Other common causes of PEA are the Hs and Ts (hypovolemia, hypoxia, acidosis, hypo-/hyperkalemia, hypothermia, tension pneumothorax, tamponade, toxins, thrombosis).",
                kpi: "PEA recognition and management"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────
     * c4s6 – ECG Basics & 12-Lead / STEMI
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c4s6",
        shortTitle: "4.6 ECG Basics & 12-Lead / STEMI",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> ECG Basics & 12-Lead / STEMI</h3>

            <h4>ECG Paper and Calibration</h4>
            <p>ECG paper is a grid of small and large boxes. At standard speed of <strong>25 mm/s</strong>, the paper moves at 25 millimeters per second:</p>
            <ul>
                <li><strong>Small box:</strong> 1 mm × 1 mm = 0.04 seconds (40 ms)</li>
                <li><strong>Large box:</strong> 5 mm × 5 mm = 0.20 seconds (200 ms)</li>
                <li><strong>Voltage calibration:</strong> Standard is <strong>10 mm = 1 mV</strong>. A 10 mm tall square wave should appear at the beginning of each lead grouping. If the calibration mark is half-standard (5 mm = 1 mV), the tracing may appear smaller, which can mimic low voltage.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Memory Trick:</strong> At 25 mm/s, 1 large box = 0.20 s, so 5 large boxes = 1 second. Count 30 large boxes (6 seconds) from a rhythm strip to estimate heart rate: multiply QRS complexes in 6 seconds by 10.
            </div>

            <h4>The P-QRS-T Waves</h4>
            <p>A normal cardiac cycle on ECG consists of the following waveforms and intervals:</p>
            <ul>
                <li><strong>P wave:</strong> Atrial depolarization. Normal duration <0.12 s (3 small boxes). Upright in leads I, II, aVF, V4–V6. Inverted in aVR.</li>
                <li><strong>PR interval:</strong> From start of P wave to start of QRS — time for the impulse to travel from SA node through the atria and AV node to the ventricles. Normal: 0.12–0.20 s (3–5 small boxes).</li>
                <li><strong>QRS complex:</strong> Ventricular depolarization. Normal duration <0.12 s (<3 small boxes). Represents electrical activation of the ventricles. The Q wave is the first negative deflection; R wave is the first positive deflection; S wave is the negative deflection following the R wave.</li>
                <li><strong>ST segment:</strong> From end of QRS to beginning of T wave — period when the ventricles are depolarized. Normally isoelectric (at baseline). Elevation or depression is clinically significant.</li>
                <li><strong>T wave:</strong> Ventricular repolarization. Normally upright in the same leads as the QRS. Peaked T waves suggest hyperkalemia; inverted T waves can indicate ischemia, strain, or prior MI.</li>
                <li><strong>QT interval:</strong> From start of QRS to end of T wave — total time for ventricular depolarization and repolarization. Varies with heart rate. Prolonged QT increases risk of Torsades de Pointes.</li>
            </ul>

            <h4>ECG Leads</h4>
            <p>The standard 12-lead ECG uses 10 electrodes to record 12 different electrical views of the heart:</p>
            <p><strong>Limb Leads (6):</strong> Record in the frontal plane. Bipolar leads I, II, III (two limbs at a time) and augmented unipolar leads aVR, aVL, aVF (one limb referenced to the other two).</p>
            <ul>
                <li>Lead I: Left arm (+) to right arm (−) — views the lateral wall of the LV</li>
                <li>Lead II: Left leg (+) to right arm (−) — views the inferior wall; best for rhythm monitoring</li>
                <li>Lead III: Left leg (+) to left arm (−) — views the inferior wall</li>
                <li>aVR: Right arm (+) — inverted view, looks at the right heart from above; ST elevation in aVR suggests left main or proximal LAD occlusion</li>
                <li>aVL: Left arm (+) — views the high lateral wall</li>
                <li>aVF: Left leg (+) — views the inferior wall</li>
            </ul>
            <p><strong>Precordial (Chest) Leads (6):</strong> Record in the horizontal plane. V1 through V6 are placed on the chest wall over the heart:</p>
            <ul>
                <li><strong>V1:</strong> 4th intercostal space, right sternal border — views the right ventricle and septum</li>
                <li><strong>V2:</strong> 4th intercostal space, left sternal border — views the septum</li>
                <li><strong>V3:</strong> Midway between V2 and V4 — anterior wall transition zone</li>
                <li><strong>V4:</strong> 5th intercostal space, midclavicular line — anterior wall</li>
                <li><strong>V5:</strong> 5th intercostal space, anterior axillary line — lateral wall</li>
                <li><strong>V6:</strong> 5th intercostal space, midaxillary line — lateral wall</li>
            </ul>

            <h4>12-Lead Placement</h4>
            <p>Correct electrode placement is essential for accurate interpretation:</p>
            <ol>
                <li><strong>Prepare the skin:</strong> Clean, dry, and shave hair as needed. Abrade gently to improve contact.</li>
                <li><strong>Limb leads:</strong> Place on the fleshy portions of the limbs — not over bone. RA (right arm, white), LA (left arm, black), RL (right leg, green — ground), LL (left leg, red). To reduce motion artifact in the prehospital setting, some protocols allow placement on the torso (slightly medial on the shoulders and lower abdomen).</li>
                <li><strong>Precordial leads:</strong> Palpate the intercostal spaces to locate correct anatomical positions. V1 and V2 are placed first in the 4th intercostal space. V4 is placed next in the 5th intercostal space at the midclavicular line, then V3 midway between V2 and V4. V5 and V6 follow at the same horizontal level as V4 (5th intercostal space) at the anterior and midaxillary lines.</li>
                <li><strong>Right-sided leads (V1R–V6R):</strong> For suspected right ventricular MI (inferior MI with hypotension), mirror the precordial positions to the right side. V4R is most commonly used.</li>
            </ol>

            <h4>STEMI Criteria</h4>
            <p>The diagnosis of ST-elevation myocardial infarction (STEMI) requires <strong>ST-segment elevation in 2 or more contiguous leads</strong> (leads that look at the same anatomical region):</p>
            <ul>
                <li><strong>Threshold:</strong> ≥1 mm ST elevation in limb leads, or ≥2 mm in precordial leads V2–V3 (≥2.5 mm in men <40, ≥1.5 mm in women). Measured 60–80 ms (0.06–0.08 s) after the J point (end of QRS).</li>
                <li><strong>Contiguous leads:</strong> Leads that are adjacent to each other on the ECG and anatomically adjacent on the chest wall. For example, II, III, aVF (inferior) or V1–V4 (anterior).</li>
                <li><strong>Reciprocal ST depression:</strong> ST depression in leads opposite to the infarct territory is highly specific for STEMI. For example, ST depression in leads I and aVL with inferior ST elevation confirms inferior STEMI.</li>
            </ul>

            <h4>MI Patterns by Territory</h4>
            <table>
                <thead>
                    <tr><th>Location</th><th>Leads with ST Elevation</th><th>Coronary Artery</th><th>Clinical Notes</th></tr>
                </thead>
                <tbody>
                    <tr><td>Anterior (Septal)</td><td>V1–V4</td><td>LAD (left anterior descending)</td><td>Large territory — high risk of HF, shock; may see new LBBB</td></tr>
                    <tr><td>Inferior</td><td>II, III, aVF</td><td>RCA (right coronary artery)</td><td>Often involves RV (right ventricle); check V4R; may see bradycardia from increased vagal tone</td></tr>
                    <tr><td>Lateral</td><td>I, aVL, V5–V6</td><td>LCx (left circumflex)</td><td>Often accompanies anterior or inferior MI — isolated lateral is rare</td></tr>
                    <tr><td>Posterior</td><td>V7–V9 (reciprocal: tall R, ST depression V1–V2)</td><td>LCx or RCA</td><td>Suspected when V1–V2 show tall R waves and horizontal ST depression; obtain posterior leads V7–V9</td></tr>
                    <tr><td>Right Ventricular</td><td>V4R (right-sided V4)</td><td>RCA proximal</td><td>Suspected in inferior MI with hypotension; do NOT give nitroglycerin — preload dependent</td></tr>
                </tbody>
            </table>

            <h4>STEMI Mimics</h4>
            <p>Not all ST elevation is STEMI. Conditions that can cause ST elevation include:</p>
            <ul>
                <li><strong>Early repolarization:</strong> Diffuse, mild ST elevation with upward concavity, often with notched J point — common in young, healthy adults, especially in anterior leads. No reciprocal depression. No clinical symptoms.</li>
                <li><strong>Pericarditis:</strong> Diffuse, concave ST elevation across most leads with PR depression. Associated with chest pain that is sharp, positional, worse with inspiration. May have a pericardial friction rub.</li>
                <li><strong>Left ventricular hypertrophy (LVH):</strong> Prominent ST-T changes with voltage criteria for LVH. ST elevation in V1–V3 with deep S waves and ST depression in lateral leads.</li>
                <li><strong>Left bundle branch block (LBBB):</strong> Wide QRS (≥0.12 s) with appropriate discordant ST elevation. New LBBB in the setting of ischemic symptoms is treated as a STEMI equivalent.</li>
                <li><strong>Ventricular aneurysm:</strong> Persistent ST elevation days to years after a prior MI in the same leads as the infarct — no dynamic change.</li>
                <li><strong>Brugada syndrome:</strong> ST elevation in V1–V3 with a distinctive "saddleback" or "coved" pattern — associated with risk of sudden cardiac death.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl for EMTs:</strong> Do not try to interpret every 12-lead yourself. Your role is to acquire a high-quality 12-lead, transmit it to the receiving hospital (if your system has that capability), and recognize whether the tracing shows obvious ST elevation. If there is any concern for STEMI, expedite transport to a PCI-capable center. Time is muscle.
            </div>

            <h4>Prehospital 12-Lead Acquisition</h4>
            <p>Prehospital 12-lead ECG acquisition is a powerful tool that reduces door-to-balloon time for STEMI patients. Key points for EMTs:</p>
            <ul>
                <li>Acquire and transmit the 12-lead <strong>within 10 minutes</strong> of patient contact for chest pain / suspected ACS</li>
                <li>The goal is to identify STEMI early so the receiving hospital can activate the catheterization lab team before the patient arrives</li>
                <li>Minimize patient movement during acquisition — movement creates artifact that can mimic ST elevation</li>
                <li>If the initial 12-lead is non-diagnostic but symptoms persist, repeat the 12-lead q5–10 minutes or with any change in symptoms</li>
                <li>Always assess the right-sided leads (V4R) if inferior STEMI is suspected — RV infarction changes management (no nitrates, aggressive fluid resuscitation)</li>
                <li>Document the time of first medical contact and the time of 12-lead acquisition — these are critical quality metrics</li>
            </ul>
        </div>`,
        flashcards: [
            {
                question: "At standard paper speed of 25 mm/s, how many seconds does one large box (5 mm) represent?",
                answer: "0.20 seconds (200 ms). Each small box = 0.04 s, and 5 small boxes = 1 large box = 0.20 s.",
                category: "ECG Paper"
            },
            {
                question: "What is the normal PR interval and what does it represent?",
                answer: "0.12–0.20 seconds (3–5 small boxes). It represents the time for electrical conduction from the SA node through the atria, AV node, and bundle of His to the ventricles.",
                category: "P-QRS-T Waves"
            },
            {
                question: "How is a standard voltage calibration represented on an ECG?",
                answer: "10 mm of vertical deflection = 1 mV. A 10 mm tall square wave at the beginning of each lead group confirms correct calibration.",
                category: "ECG Paper"
            },
            {
                question: "Where are precordial leads V1 and V2 placed on the chest?",
                answer: "V1: 4th intercostal space, right sternal border. V2: 4th intercostal space, left sternal border.",
                category: "Lead Placement"
            },
            {
                question: "What is the STEMI criterion for ST elevation in limb leads vs precordial leads?",
                answer: "≥1 mm ST elevation in two or more contiguous limb leads. ≥2 mm in two or more contiguous precordial leads (V2–V3 has sex-specific criteria).",
                category: "STEMI Criteria"
            },
            {
                question: "Which ECG leads correspond to the (a) inferior, (b) anterior, (c) lateral, and (d) posterior walls of the left ventricle?",
                answer: "(a) Inferior: II, III, aVF. (b) Anterior: V1–V4. (c) Lateral: I, aVL, V5–V6. (d) Posterior: V7–V9 (or reciprocal changes in V1–V2).",
                category: "MI Territories"
            },
            {
                question: "Name three common STEMI mimics that can cause ST elevation on ECG without acute infarction.",
                answer: "Early repolarization (diffuse concave ST elevation in young healthy patients), pericarditis (diffuse ST elevation with PR depression, positional pain), and left ventricular hypertrophy (voltage criteria with appropriate discordant ST changes).",
                category: "STEMI Mimics"
            }
        ],
        quiz: [
            {
                q: "An ECG is running at 25 mm/s with normal calibration. The PR interval measures 4 small boxes. What is the PR interval in seconds and is it normal?",
                options: [
                    "0.08 seconds — too short (abnormal)",
                    "0.16 seconds — normal (0.12–0.20 s is normal)",
                    "0.20 seconds — borderline prolonged",
                    "0.04 seconds — cannot be measured"
                ],
                correct: 1
            },
            {
                q: "A patient with inferior ST elevation in leads II, III, and aVF has a BP of 82/50. What additional ECG leads should be obtained and what medication should be avoided?",
                options: [
                    "Obtain posterior leads V7–V9; avoid furosemide",
                    "Obtain right-sided leads V4R; avoid nitroglycerin (preload dependent)",
                    "Obtain high lateral leads; avoid aspirin",
                    "Obtain additional rhythm strip; avoid oxygen"
                ],
                correct: 1
            },
            {
                q: "[HARD] A 58-year-old male with crushing substernal chest pain has an ECG showing 3 mm ST elevation in V1–V4 with new left bundle branch block. The paramedic asks if this meets STEMI criteria. What is your response?",
                options: [
                    "No — LBBB makes STEMI criteria unreliable, wait for the hospital",
                    "Yes — new LBBB with ischemic symptoms is a STEMI equivalent. Activate the cath lab and expedite transport",
                    "No — <4 mm ST elevation in precordial leads does not meet STEMI threshold",
                    "Yes — but only if reciprocal depression is present in the inferior leads"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_4_6_1",
                scenario: "You are called to a 55-year-old male with 'indigestion' that started 90 minutes ago. He describes substernal chest pressure radiating to his left arm, associated with nausea. He is diaphoretic and anxious. His BP is 146/90, HR 88, RR 18, SpO2 97%. You apply a 12-lead ECG and see ST elevation of 3 mm in leads II, III, and aVF. There is ST depression in leads I and aVL. The patient has no known cardiac history and has allergies to aspirin.",
                question: "What territory is affected, what complication should you anticipate, and how should you manage the aspirin allergy?",
                options: [
                    {t: "Inferior wall STEMI (II, III, aVF). Anticipate bradycardia and hypotension; RV involvement is possible — check right-sided leads. Aspirin allergy: administer 325 mg of enteric-coated aspirin if available, or contact medical direction for alternative antiplatelet.", f: "Correct. Inferior STEMI can involve the right ventricle (RCA occlusion), causing preload-dependent hypotension. Reciprocal ST depression confirms STEMI. For true aspirin allergy, clopidogrel 300–600 mg loading dose may be used per medical direction."},
                    {t: "Anterior wall STEMI (reciprocal changes in I, aVL). Administer 324 mg aspirin rectally since the patient cannot take oral aspirin.", f: "Incorrect. ST elevation in II, III, and aVF indicates inferior STEMI, not anterior. Reciprocal ST depression in I and aVL actually confirms the inferior MI. Do not give aspirin rectally without specific orders."}
                ],
                correct: 0,
                explanation: "ST elevation in II, III, and aVF with reciprocal depression in I and aVL is diagnostic of inferior STEMI (RCA occlusion). In inferior MI, always suspect right ventricular involvement — check V4R. RV infarction makes the patient preload dependent: nitroglycerin can cause catastrophic hypotension. For patients with true aspirin allergy, medical direction may authorize clopidogrel as an alternative. This patient needs immediate transport to a PCI-capable center with cath lab activation.",
                kpi: "Inferior STEMI recognition and RV involvement"
            },
            {
                id: "crit_4_6_2",
                scenario: "A 42-year-old previously healthy female presents with sharp, pleuritic chest pain that is worse when lying flat and better when leaning forward. She had an upper respiratory infection about 10 days ago. Her BP is 122/78, HR 92, RR 16, temperature 99.8°F, SpO2 99%. The 12-lead ECG shows diffuse, concave ST elevation in leads I, II, III, aVF, and V2–V6. There is PR depression in lead II. There is no reciprocal ST depression. The computerized interpretation reads '***ACUTE MI***'.",
                question: "What is the most likely diagnosis and what should the EMT do?",
                options: [
                    {t: "Acute STEMI — activate the cath lab, administer aspirin, and transport emergently to a PCI center", f: "Incorrect. While the computer reads STEMI, the diffuse, concave ST elevation with PR depression, the absence of reciprocal changes, the clinical history of preceding URI, and the positional pleuritic pain pattern strongly suggest pericarditis, not STEMI."},
                    {t: "Acute pericarditis — notify the hospital of your suspicion, transport to an appropriate facility, and administer aspirin per protocol for pain. Recognize this as a STEMI mimic.", f: "Correct. Pericarditis causes diffuse concave ST elevation and PR depression — often with a preceding viral illness. The pain is positional and pleuritic. While the computer may flag it as STEMI, the pattern and history are classic for pericarditis. Aspirin treats both the pain and inflammation. Transport to an ED for further evaluation is still appropriate."}
                ],
                correct: 1,
                explanation: "Pericarditis is a classic STEMI mimic. Key distinguishing features: diffuse concave ST elevation (vs. regional in STEMI), PR depression (vs. PR isoelectric in STEMI), no reciprocal changes, pleuritic/positional pain, history of preceding viral illness, and often a pericardial friction rub on auscultation. While the EMT should not definitively diagnose, recognizing this pattern helps ensure the right triage. The patient still needs ED evaluation to rule out MI.",
                kpi: "STEMI vs. mimic differentiation"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────
     * c4s7 – Cardiac Arrest & High-Quality CPR
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c4s7",
        shortTitle: "4.7 Cardiac Arrest & High-Quality CPR",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Cardiac Arrest & High-Quality CPR</h3>

            <h4>Adult Chain of Survival</h4>
            <p>The Chain of Survival describes the critical actions that must occur rapidly and sequentially to maximize the chance of survival from cardiac arrest. Each link depends on the strength of the others — a weak link reduces survival:</p>
            <ol>
                <li><strong>Immediate recognition of cardiac arrest and activation of the EMS system</strong> — Bystander recognition that the victim is unresponsive and not breathing normally (agonal gasping is not normal breathing). Call 9-1-1 immediately.</li>
                <li><strong>Early high-quality CPR</strong> — Bystander CPR doubles or triples survival from cardiac arrest. Push hard, push fast, allow full chest recoil, minimize interruptions.</li>
                <li><strong>Rapid defibrillation</strong> — For shockable rhythms (V-fib, pulseless V-tach), defibrillation within 3–5 minutes of collapse produces the highest survival rates. Public-access AED programs are critical.</li>
                <li><strong>Advanced resuscitation (ALS)</strong> — Advanced airway placement, IV/IO access, drug administration (epinephrine, amiodarone), and identification of reversible causes.</li>
                <li><strong>Post-cardiac-arrest care</strong> — Targeted temperature management (therapeutic hypothermia), optimization of oxygenation and ventilation, hemodynamic support, and early cardiac catheterization for STEMI patients.</li>
                <li><strong>Recovery</strong> — Survivors need comprehensive care including neurological assessment, cardiac rehabilitation, psychosocial support, and planning for secondary prevention.</li>
            </ol>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Bystander CPR is the most important link in the chain for most communities. It takes EMS an average of 6–10 minutes to arrive. Without bystander CPR, the patient's brain goes 6–10 minutes without perfusion. With effective bystander CPR, that time is still critical — but survival is 2–3 times higher.
            </div>

            <h4>Compression Rate: 100–120/min</h4>
            <p>Compressions must be delivered at a rate of <strong>100–120 compressions per minute</strong>. This is faster than previously recommended (prior guidelines said "at least 100"). Compressions faster than 120/min lead to:</p>
            <ul>
                <li>Incomplete chest recoil (the chest does not fully expand between compressions)</li>
                <li>Reduced coronary perfusion pressure</li>
                <li>Increased rescuer fatigue</li>
                <li>Decreased compression depth</li>
            </ul>
            <p>Use metronome guidance — chest compressions to the beat of "Stayin' Alive" (Bee Gees) or "Another One Bites the Dust" (Queen) are at approximately the correct rate. Many modern defibrillators and monitor/defibrillators have built-in metronomes and rate feedback.</p>

            <h4>Compression Depth: 2–2.4 inches (5–6 cm)</h4>
            <p>Compressions must be <strong>at least 2 inches (5 cm)</strong> deep but should not exceed <strong>2.4 inches (6 cm)</strong>. Excessive depth can cause injuries (rib fractures, sternal fractures, liver lacerations, cardiac contusions).</p>
            <ul>
                <li>Use the heel of one hand, with the other hand on top, fingers interlocked</li>
                <li>Position hands on the lower half of the sternum (between the nipples at the center of the chest)</li>
                <li>Keep arms straight, shoulders directly over the patient's chest</li>
                <li>Use upper body weight, not just arm muscles, to drive compressions</li>
                <li>Avoid leaning on the chest between compressions</li>
            </ul>

            <h4>Full Chest Recoil</h4>
            <p>Complete chest recoil between each compression allows the heart to refill with blood. Incomplete recoil (<strong>leaning</strong>) reduces venous return to the right heart, decreases cardiac output, and increases intrathoracic pressure. The chest wall should fully expand to its neutral position after each compression. This is often the most neglected element of high-quality CPR.</p>

            <h4>Minimize Interruptions (Chest Compression Fraction >80%)</h4>
            <p><strong>Chest Compression Fraction (CCF)</strong> is the percentage of total resuscitation time spent performing compressions. The target is <strong>>80%</strong>. Every pause in compressions — even for ventilation, defibrillation, or pulse checks — reduces coronary and cerebral perfusion pressure. Strategies to minimize interruptions:</p>
            <ul>
                <li>Coordinate compressor changes every 2 minutes (or sooner if fatigued)</li>
                <li>Defibrillate with <strong>minimal pause</strong> — ideally <5 seconds before and after shock</li>
                <li>Limit pulse checks to ≤10 seconds — performed during rhythm analysis if using a monitor</li>
                <li>Prepare for the next intervention (IV, airway) during ongoing compressions</li>
                <li>Assign a team leader to monitor CCF and give real-time feedback</li>
            </ul>

            <h4>Compression-to-Ventilation Ratio: 30:2</h4>
            <p>For single-rescuer and two-rescuer CPR in adults, the ratio is <strong>30 compressions to 2 ventilations</strong>. This ratio prioritizes continuous blood flow while providing adequate ventilation:</p>
            <ul>
                <li>30 compressions should take approximately 15–18 seconds (at 100–120/min)</li>
                <li>Each ventilation should be delivered over 1 second, producing visible chest rise</li>
                <li>Avoid excessive ventilation — it increases intrathoracic pressure (decreasing venous return) and causes gastric insufflation</li>
                <li>If an advanced airway (ET tube, supraglottic airway) is in place, ventilations are given at 1 breath every 6 seconds (~10/min) with continuous compressions (no pause)</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> Do NOT stop CPR to establish IV access or place an advanced airway. These procedures should be performed with ongoing chest compressions. The only reasons to pause chest compressions are: (1) rhythm analysis/shock delivery, (2) pulse check (≤10 s), (3) moving the patient, or (4) compressor switch (ideally <5 s pause).
            </div>

            <h4>2-Minute Cycles and Pulse Checks</h4>
            <p>CPR is organized into <strong>2-minute cycles</strong> of continuous compressions (with 2 ventilations inserted after every 30 compressions). After each 2-minute cycle:</p>
            <ul>
                <li>Pause briefly for <strong>rhythm analysis</strong> by the monitor/defibrillator</li>
                <li>Check for a <strong>pulse</strong> (carotid or femoral) — this should take ≤10 seconds</li>
                <li>If a shockable rhythm is present: defibrillate, then immediately resume CPR for another 2 minutes</li>
                <li>If a non-shockable rhythm (PEA, asystole): resume CPR immediately — no shock</li>
                <li>If a pulse is present (ROSC): begin post-cardiac-arrest care</li>
                <li>Switch the compressor at each 2-minute mark to prevent fatigue-related quality decline</li>
            </ul>

            <h4>Return of Spontaneous Circulation (ROSC)</h4>
            <p>ROSC is the resumption of a perfusing heart rhythm with a palpable pulse. Signs of ROSC include:</p>
            <ul>
                <li>Sudden or sustained rise in EtCO₂ (typically >40 mmHg) — <strong>the most sensitive early indicator</strong></li>
                <li>Visible arterial waveform on invasive monitoring (if available)</li>
                <li>Palpable carotid or femoral pulse</li>
                <li>Sudden increase in BP (if monitored)</li>
                <li>Spontaneous movements, breathing, or groaning</li>
            </ul>
            <p>When ROSC is achieved: start post-cardiac-arrest care (optimize oxygenation to SpO₂ 94–98%, maintain BP, consider therapeutic hypothermia, transport to PCI-capable center). Do <strong>not</strong> re-check a pulse that was already positive — focus on stabilization.</p>

            <h4>Compression Quality Monitoring (EtCO₂)</h4>
            <p><strong>End-tidal carbon dioxide (EtCO₂) monitoring via waveform capnography</strong> is the most valuable real-time feedback tool during CPR:</p>
            <ul>
                <li><strong>EtCO₂ >10–20 mmHg:</strong> Compressions are generating adequate cardiac output and pulmonary blood flow</li>
                <li><strong>EtCO₂ <10 mmHg:</strong> Compressions may be inadequate — adjust depth, rate, recoil; consider switch in compressor or addressing reversible causes</li>
                <li><strong>Sudden rise in EtCO₂ (to >40 mmHg):</strong> Highly suggestive of ROSC — stop compressions and check pulse</li>
                <li><strong>Sudden drop in EtCO₂:</strong> May indicate tube displacement (if advanced airway), pulmonary embolism, or loss of cardiac output</li>
                <li>If available, arterial line diastolic pressure >25 mmHg correlates with adequate coronary perfusion pressure</li>
            </ul>
            <p>Other feedback devices include: accelerometer-based compression sensors (provide real-time depth and rate feedback), defibrillator impedance waveform analysis, and CPR feedback pads (e.g., ZOLL R Series, Philips HeartStart MRx).</p>
        </div>`,
        flashcards: [
            {
                question: "What are the six links in the Adult Chain of Survival?",
                answer: "(1) Recognition of arrest + activation of EMS, (2) Early high-quality CPR, (3) Rapid defibrillation, (4) Advanced resuscitation (ALS), (5) Post-cardiac-arrest care, (6) Recovery.",
                category: "Chain of Survival"
            },
            {
                question: "What is the recommended compression rate and compression depth for adult CPR?",
                answer: "Rate: 100–120 compressions per minute. Depth: 2–2.4 inches (5–6 cm). Compressions faster than 120/min reduce recoil, depth, and coronary perfusion.",
                category: "Compression Quality"
            },
            {
                question: "What is Chest Compression Fraction (CCF) and what is the target?",
                answer: "CCF is the percentage of total resuscitation time spent performing compressions. The target is >80% — meaning compressions are being performed for more than 80% of the arrest time.",
                category: "Compression Quality"
            },
            {
                question: "What is the adult compression-to-ventilation ratio for single-rescuer and two-rescuer CPR?",
                answer: "30 compressions to 2 ventilations (30:2). If an advanced airway is in place, ventilate at 1 breath every 6 seconds (~10/min) with continuous compressions.",
                category: "CPR Technique"
            },
            {
                question: "What is the duration of a CPR cycle and when should the compressor be switched?",
                answer: "Each cycle is 2 minutes. The compressor should be switched every 2 minutes (or sooner if fatigued) to maintain compression quality.",
                category: "CPR Technique"
            },
            {
                question: "What does an EtCO₂ value below 10 mmHg during CPR indicate?",
                answer: "Inadequate cardiac output — compressions may be ineffective. Reassess compression depth, rate, and recoil. Consider switch in compressor or identifying reversible causes of arrest.",
                category: "Quality Monitoring"
            },
            {
                question: "What is the most sensitive early indicator of ROSC?",
                answer: "A sudden, sustained rise in EtCO₂ to >40 mmHg during CPR. This suggests the heart has resumed pumping blood and CO₂ is being delivered to the lungs for exhalation. Check for a pulse.",
                category: "Quality Monitoring"
            },
            {
                question: "Why is full chest recoil important during CPR?",
                answer: "Full chest recoil allows the heart to refill with blood during the relaxation phase. Incomplete recoil (leaning) reduces venous return, decreases cardiac output, and increases intrathoracic pressure.",
                category: "Compression Quality"
            }
        ],
        quiz: [
            {
                q: "During a cardiac arrest, the monitor shows no change in EtCO₂ (stays at 8 mmHg) despite 6 minutes of CPR. The compressor appears fatigued and depth is decreasing. What should the team do?",
                options: [
                    "Continue with the same compressor since changing hands interrupts compressions",
                    "Switch the compressor, verify compression depth and rate, and reassess EtCO₂",
                    "Increase the compression rate to 140/min to improve cardiac output",
                    "Administer a second dose of epinephrine before switching compressors"
                ],
                correct: 1
            },
            {
                q: "A patient in cardiac arrest has been intubated. What ventilation rate should be used with continuous chest compressions?",
                options: [
                    "1 breath every 3 seconds (20/min) to maximize oxygenation",
                    "1 breath every 6 seconds (~10/min) to avoid excessive ventilation",
                    "2 breaths every 30 compressions, pausing for each breath",
                    "No ventilation — only compressions until ROSC is achieved"
                ],
                correct: 1
            },
            {
                q: "During a 2-minute rhythm check, the monitor shows organized rhythm and the EtCO₂ suddenly rises from 12 mmHg to 52 mmHg. What is the most likely explanation?",
                options: [
                    "The patient is being hyperventilated by the BVM",
                    "The patient has achieved ROSC — check for a pulse",
                    "The EtCO₂ monitor is malfunctioning — replace the sensor",
                    "Epinephrine administration has increased metabolic CO₂ production"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_4_7_1",
                scenario: "You and your partner respond to a witnessed cardiac arrest at a gym. A bystander started CPR immediately — approximately 2 minutes ago according to the time on the AED. The patient is a 60-year-old male with no known medical history who collapsed while running on a treadmill. The AED was placed and gave one shock before your arrival. You take over the scene. The patient is now in the 'CPR' phase of the AED cycle. Your partner begins high-quality compressions while you prepare airway equipment and apply your monitor. The EtCO₂ reading on your monitor shows 14 mmHg after 1 minute of your team's compressions.",
                question: "What actions should you prioritize at this point, and how do you interpret the EtCO₂ value?",
                options: [
                    {t: "Stop CPR to place an advanced airway, then resume compressions. The EtCO₂ of 14 mmHg indicates adequate perfusion — no changes needed.", f: "Incorrect. CPR should not be stopped for airway placement. An EtCO₂ of 14 mmHg is borderline — acceptable (>10) but not optimal. Focus on maximizing compression quality."},
                    {t: "Continue high-quality CPR with 30:2 ratio, minimize interruptions, and analyze rhythm on the monitor when the AED cycle completes. The EtCO₂ of 14 mmHg suggests adequate but not optimal compressions — coach the compressor on depth and rate.", f: "Correct. An EtCO₂ >10 mmHg indicates compressions are generating some cardiac output. The goal is to optimize quality (depth 2-2.4\", rate 100-120, full recoil, CCF >80%) while preparing for rhythm analysis and defibrillation if indicated. Place the advanced airway during ongoing compressions, not during a pause."}
                ],
                correct: 1,
                explanation: "An EtCO₂ >10 mmHg during CPR suggests compressions are generating measurable pulmonary blood flow. Values >20 mmHg are associated with improved outcomes. The team should optimize compression quality, ventilate at 1 breath q6s (if advanced airway) or 30:2 (if BVM), and prepare for rhythm analysis. If EtCO₂ falls below 10 mmHg, the compressor should be switched and depth/rate/recoil reassessed.",
                kpi: "Compression quality assessment via EtCO₂"
            },
            {
                id: "crit_4_7_2",
                scenario: "You are performing two-rescuer CPR on a 72-year-old female in cardiac arrest. The cardiac monitor shows fine V-fib. The EtCO₂ reading is 8 mmHg after 4 minutes of CPR. Your partner is the compressor and is visibly tiring — compressions are becoming visibly shallower (about 1.5 inches deep) and the rate is dropping to around 90/min. You notice your partner is leaning on the patient's chest between compressions. The nearest hospital is 15 minutes away. ALS is 8 minutes out.",
                question: "What is the most critical immediate action to improve the quality of resuscitation?",
                options: [
                    {t: "Continue with the same compressor — changing hands wastes time. Increase the ventilation rate to compensate for poor compressions.", f: "Incorrect. Fatigued compressors produce inadequate depth, improper rate, and leaning — all of which dramatically reduce survival. Continuing with a fatigued compressor is harmful."},
                    {t: "Switch compressors immediately — have the new compressor focus on achieving 2\" depth, 100–120/min rate, and full chest recoil. Coach the previous compressor on proper technique. Prepare to defibrillate at the next rhythm check.", f: "Correct. Fatigued compressors cannot maintain high-quality CPR. Studies show compression quality degrades within 1–2 minutes. Rotating every 2 minutes (or sooner if visibly fatigued) is essential. The EtCO₂ of 8 mmHg suggests inadequate cardiac output — improving compression quality should increase it. Fine V-fib may become coarse V-fib with better compressions, increasing defibrillation success."}
                ],
                correct: 1,
                explanation: "Compressor fatigue is one of the most common causes of poor CPR quality. The EtCO₂ of 8 mmHg (<10) confirms that compressions are inadequate. The team should switch compressors, correct the depth (2 inches minimum) and recoil (no leaning), and prepare for defibrillation at the next analysis. If ALS arrives in 8 minutes, they can establish IV/IO access and administer epinephrine and amiodarone.",
                kpi: "Compressor fatigue management"
            },
            {
                id: "crit_4_7_3",
                scenario: "You are treating a 55-year-old male in cardiac arrest. The arrest was witnessed, bystander CPR was started within 2 minutes, and you have been on scene for 10 minutes. The patient has received one shock for V-fib and 2 doses of epinephrine. Your partner is performing compressions at a rate of 115/min with good depth. During the next rhythm check, you see organized P waves at 80/min with narrow QRS complexes. The EtCO₂, which was 11 mmHg, has rapidly risen to 48 mmHg. Your partner stops compressions and you feel a strong carotid pulse.",
                question: "What phase of care are you now entering and what are your immediate priorities?",
                options: [
                    {t: "This is ROSC. Your immediate priorities are: check for a pulse (if confirmed, stop compressions), optimize oxygenation (SpO₂ target 94–98%), maintain BP (IV fluids/vasopressors if hypotensive), obtain a 12-lead ECG, and transport to a PCI-capable center. Consider therapeutic hypothermia.", f: "Correct. ROSC has been achieved (organized rhythm + EtCO₂ rise + palpable pulse). Compressions stop. The focus shifts to post-cardiac-arrest care: airway management, hemodynamic support, reperfusion (cath lab activation), and temperature management. Do not re-check the pulse — you have confirmed it."},
                    {t: "This is PEA with an organized rhythm — the rising EtCO₂ is from the epinephrine. Continue CPR and administer a third dose of epinephrine. Do not stop compressions.", f: "Incorrect. A sudden rise in EtCO₂ to >40 mmHg with an organized rhythm and palpable pulse is ROSC — not PEA. Continuing CPR after ROSC can cause injury (rib fractures, organ damage). The epinephrine does not cause a sudden EtCO₂ rise."}
                ],
                correct: 0,
                explanation: "ROSC is defined by the presence of a palpable pulse with organized cardiac activity. The sudden EtCO₂ rise (from 11 to 48 mmHg) is the earliest objective indicator — it signals that cardiac output has resumed and CO₂ is being transported to the lungs. Post-ROSC care priorities: oxygenate to SpO₂ 94–98% (avoid hyperoxia), maintain systolic BP >90–100 mmHg (fluids, norepinephrine if available), obtain 12-lead ECG to identify STEMI, transport to PCI-capable center, and initiate targeted temperature management (32–36°C) per protocol.",
                kpi: "ROSC recognition and post-arrest care transition"
            }
        ]
    },

    /* ──────────────────────────────────────────────────────────────────
     * c4s8 – AED & Defibrillation
     * ────────────────────────────────────────────────────────────────── */
    {
        id: "c4s8",
        shortTitle: "4.8 AED & Defibrillation",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> AED & Defibrillation</h3>

            <h4>Defibrillation: The Critical Link</h4>
            <p>Defibrillation is the only treatment that converts V-fib and pulseless V-tach to a perfusing rhythm. Each minute of delay reduces survival by <strong>7–10%</strong>. With rapid defibrillation within 3–5 minutes, survival rates as high as 50–70% have been reported. Public-access AED programs have been the single most impactful innovation in out-of-hospital cardiac arrest survival since the introduction of CPR.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Concept:</strong> Defibrillation does NOT restart the heart. It momentarily stuns (depolarizes) ALL myocardial cells simultaneously, allowing the heart's natural pacemaker (usually the SA node) to resume coordinated electrical activity. For this to succeed, the myocardium must be well-oxygenated and perfused — which is why high-quality CPR before and after defibrillation is essential.
            </div>

            <h4>AED Operation: The 4-Step Sequence</h4>
            <p>Automated External Defibrillators (AEDs) are designed for use by minimally trained laypeople and healthcare providers. All AEDs follow the same basic operating sequence:</p>
            <ol>
                <li><strong>POWER ON</strong> — Open the lid or press the power button. Many AEDs power on automatically when the lid is opened. Once powered on, the AED begins delivering audible voice prompts.</li>
                <li><strong>ATTACH PADS</strong> — Expose the patient's bare chest. Remove any medication patches, and dry the chest if wet or excessively diaphoretic. Shave excessive chest hair if the pads cannot adhere. Apply the pads to the correct positions (see below). The AED pad connector plugs into the unit. Some pads are pre-connected.</li>
                <li><strong>ANALYZE</strong> — The AED automatically analyzes the heart rhythm. <strong>No one may touch the patient</strong> during analysis — any motion or vibration can cause artifact, leading to inaccurate analysis ("motion artifact"). The AED will say "Analyzing heart rhythm — do not touch the patient."</li>
                <li><strong>SHOCK or CPR</strong> — If a shockable rhythm (V-fib or pulseless V-tach) is detected, the AED will say "Shock advised — charging." It will automatically charge and then say "Stand clear — press the shock button." Ensure no one is touching the patient (visual sweep, say "CLEAR!"), then press the shock button. After the shock, immediately resume CPR starting with compressions — do not re-check the rhythm or pulse. If no shock is advised, immediately resume CPR.</li>
            </ol>

            <h4>Pad Placement</h4>
            <p><strong>Anterolateral (Standard):</strong> One pad placed on the right upper chest (just below the clavicle, to the right of the sternum) and the other on the left lower ribcage (to the left of the nipple, in the mid-axillary line, approximately at the V6 position). This is the preferred placement because it delivers current through the largest mass of ventricular myocardium.</p>
            <p><strong>Anteroposterior (AP):</strong> One pad placed anteriorly on the left precordium (over the heart) and the other posteriorly behind the heart (between the left scapula and the spine). AP placement may be used when:</p>
            <ul>
                <li>Anterior pads cannot be placed due to a wound, dressing, or device (e.g., pacemaker)</li>
                <li>The patient has an implanted ICD/pacemaker on the left side (place the anterior pad at least 1 inch from the device)</li>
                <li>Pediatric patients require the AP position more often (small chest size)</li>
                <li>Some protocols prefer AP for elective synchronized cardioversion</li>
            </ul>

            <p><strong>Important pad placement rules:</strong></p>
            <ul>
                <li>Pads must not touch each other (at least 1–3 inches apart)</li>
                <li>Pads must not overlap or be placed on top of an implanted device (pacemaker/ICD)</li>
                <li>Remove any medication patches (nitroglycerin, nicotine, fentanyl) and wipe the area clean</li>
                <li>Do not place pads directly over a breast (in women with large breasts, place the left pad underneath the breast tissue)</li>
                <li>Ensure pads adhere completely — air bubbles under the pad can cause arcing</li>
            </ul>

            <h4>Pediatric Defibrillation</h4>
            <p>Children (age 1–8 years) should be defibrillated with <strong>pediatric pads</strong> or a <strong>pediatric attenuator</strong> (dose-reducing system) that delivers ~50–75 J. If pediatric pads are not available, adult pads may be used but must be placed in the <strong>anteroposterior position</strong> to prevent the pads from touching (to avoid arcing). For infants (<1 year), a manual defibrillator is preferred, but if only an AED is available, use pediatric pads/attenuator if available. If neither is available, use adult pads in the AP position. Do not delay defibrillation to determine exact pediatric dosing — use the best available option.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> For pediatric cardiac arrest, perform 5 cycles / 2 minutes of CPR before using the AED. Children commonly arrest from respiratory causes first — CPR addresses the underlying hypoxia and increases the chance that defibrillation will be successful.
            </div>

            <h4>Safety — Clear! No Oxygen Near!</h4>
            <p>Safety during defibrillation is non-negotiable. Follow these steps before every shock:</p>
            <ul>
                <li><strong>Visual sweep:</strong> Look around the patient. No one is in contact with the patient, the stretcher, or any equipment touching the patient.</li>
                <li><strong>Say "CLEAR!"</strong> loudly and clearly — multiple times if necessary. Make eye contact with every team member. Point to the patient as you say "CLEAR!"</li>
                <li><strong>Remove oxygen:</strong> Move the oxygen delivery device (BVM, nasal cannula, non-rebreather) at least <strong>3–4 feet away</strong> from the patient's chest. Oxygen supports combustion — a spark from a defibrillation pad in an oxygen-rich environment can cause a fire. This is a documented cause of patient burns and airway fires.</li>
                <li><strong>Remove nitroglycerin patches</strong> — they can cause arcing and explosion.</li>
                <li><strong>Dry the chest</strong> if wet — water or sweat can conduct current across the chest wall, reducing the energy delivered to the heart and causing burns.</li>
                <li><strong>Implanted devices:</strong> If the patient has a pacemaker or ICD, you may see a visible bump under the skin (usually left upper chest). Place the AED pads at least 1 inch (3 cm) away from the device.</li>
                <li><strong>Do not shock over hairy chest:</strong> If chest hair prevents pad adhesion, shave the areas before applying pads. If you must defibrillate emergently and pads cannot adhere, press firmly, deliver the shock, and then shave for subsequent shocks.</li>
            </ul>

            <h4>Shockable Rhythms</h4>
            <p>AEDs are designed to recognize <strong>shockable rhythms</strong> (those caused by disorganized or extremely rapid electrical activity that cannot produce cardiac output):</p>
            <ul>
                <li><strong>Ventricular Fibrillation (V-Fib):</strong> Chaotic, disorganized electrical activity — no QRS complexes. AED will advise shock. Coarse V-fib is more likely to convert than fine V-fib.</li>
                <li><strong>Pulseless Ventricular Tachycardia (V-Tach):</strong> Regular or slightly irregular wide-complex tachycardia without a pulse. AED will advise shock. The AED distinguishes V-tach from other wide-complex rhythms using proprietary algorithms.</li>
            </ul>
            <p><strong>Non-shockable rhythms:</strong> Asystole (flat line) and PEA (organized rhythm without pulse) are NOT shockable. Defibrillating these rhythms wastes time and can harm the myocardium. The AED will clearly say "No shock advised — continue CPR."</p>

            <h4>Energy Levels</h4>
            <p>Modern defibrillators use <strong>biphasic waveforms</strong>, which are more effective and require less energy than older monophasic defibrillators:</p>
            <ul>
                <li><strong>Biphasic (most modern AEDs):</strong> 120–200 J for adults. The specific energy level depends on the manufacturer. If the energy level is unknown, the default is 200 J. Subsequent shocks may be given at the same or escalated energy level (per manufacturer guidelines).</li>
                <li><strong>Monophasic (older units):</strong> 360 J for adults. Very few monophasic AEDs remain in service.</li>
                <li><strong>Pediatric:</strong> 2–4 J/kg of ideal body weight. AEDs with pediatric attenuators deliver approximately 50–75 J.</li>
            </ul>
            <p>On biphasic defibrillators, the first shock converts V-fib to an organized rhythm approximately 90% of the time. If the first shock is unsuccessful, continue CPR for 2 minutes, then re-analyze and shock again.</p>

            <h4>When to Shock vs. Continue CPR</h4>
            <p>The decision to shock is entirely rhythm-based — the AED makes this determination automatically. The rescuer's role is to <strong>minimize the pre-shock and post-shock pause</strong>:</p>
            <ul>
                <li><strong>Pre-shock pause:</strong> The time between stopping compressions and delivering the shock. Target <5 seconds. Pre-charge the defibrillator so the shock is ready when compressions stop.</li>
                <li><strong>Post-shock pause:</strong> The time between shock delivery and resuming compressions. Target <5 seconds. <strong>Resume compressions immediately after the shock</strong> — do not check the rhythm or pulse. It takes 30–60 seconds for the heart to show organized activity after a shock.</li>
                <li>Continue CPR for 2 minutes before performing another rhythm check/pulse check.</li>
            </ul>

            <h4>AED Troubleshooting</h4>
            <table>
                <thead>
                    <tr><th>Problem</th><th>Cause</th><th>Solution</th></tr>
                </thead>
                <tbody>
                    <tr><td>AED says "Check electrodes"</td><td>Poor pad contact with skin</td><td>Press firmly on pads; shave hair; dry skin; replace pads if needed</td></tr>
                    <tr><td>AED keeps analyzing or won't analyze</td><td>Motion artifact from CPR or patient movement</td><td>Stop all motion — say "CLEAR" — ensure no one touches the patient</td></tr>
                    <tr><td>AED says "No shock advised" but patient is in arrest</td><td>Rhythm is PEA or asystole (non-shockable)</td><td>Resume CPR immediately; identify and treat reversible causes</td></tr>
                    <tr><td>AED pads won't adhere</td><td>Excessive chest hair, diaphoresis, or wound exudate</td><td>Shave hair; dry skin; use a second set of pads if available</td></tr>
                    <tr><td>AUDIBLE tones but no voice prompts</td><td>Speaker failure or low battery</td><td>Follow visual prompts if available; replace battery if necessary</td></tr>
                    <tr><td>AED does not power on</td><td>Dead battery or expired battery</td><td>Replace battery immediately; have a backup AED available</td></tr>
                    <tr><td>Sparks/smoke during shock</td><td>Pads touching, poor adhesion, or arcing</td><td>Stop — ensure pads are separated and fully adhered; check for metal jewelry or pacemaker</td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Safety Warning:</strong> Never defibrillate a patient in a moving vehicle. The vehicle motion can cause the AED pad connection to intermittently lose contact, creating arcing and fire risk. If defibrillation is required, stop the vehicle, confirm pad adhesion, deliver the shock, then resume CPR and transport.
            </div>
        </div>`,
        flashcards: [
            {
                question: "What are the four basic steps of AED operation?",
                answer: "(1) Power ON, (2) Attach pads to patient's bare chest, (3) Analyze rhythm (no one touch the patient), (4) Shock (if advised) or resume CPR (if no shock advised).",
                category: "AED Operation"
            },
            {
                question: "Where are AED pads placed in the standard anterolateral position?",
                answer: "One pad on the right upper chest (below clavicle, right of sternum). The other pad on the left lower ribcage (left of nipple, mid-axillary line).",
                category: "Pad Placement"
            },
            {
                question: "What two cardiac arrest rhythms are shockable by an AED?",
                answer: "Ventricular fibrillation (V-fib) and pulseless ventricular tachycardia (pulseless V-tach). Asystole and PEA are NOT shockable.",
                category: "Shockable Rhythms"
            },
            {
                question: "What safety precautions must be taken before delivering a shock with an AED?",
                answer: "Clear all personnel from contact with the patient (visual sweep + say 'CLEAR!'), move oxygen source at least 3–4 feet away, remove nitroglycerin patches, dry the chest if wet, and ensure pads are fully adhered and not touching.",
                category: "AED Safety"
            },
            {
                question: "How should pediatric pads be used in a child (1–8 years) and what is the alternative if pediatric pads are unavailable?",
                answer: "Use pediatric pads or a pediatric attenuator. If unavailable, adult pads may be used in the anteroposterior (AP) position to prevent them from touching. Perform 2 minutes of CPR before AED analysis in children.",
                category: "Pediatric Defibrillation"
            },
            {
                question: "What should you do immediately after the AED delivers a shock?",
                answer: "Resume CPR immediately, starting with chest compressions. Do NOT check the rhythm or pulse — it takes 30–60 seconds for organized activity to appear. Continue CPR for 2 full minutes before the next rhythm analysis.",
                category: "CPR Integration"
            },
            {
                question: "What is the typical energy level for a biphasic AED defibrillation?",
                answer: "120–200 J for adults (specific level depends on manufacturer; default is 200 J if unknown). Monophasic: 360 J. Pediatric: 2–4 J/kg.",
                category: "Energy Levels"
            }
        ],
        quiz: [
            {
                q: "An AED is applied to a patient in cardiac arrest. The AED analyzes the rhythm and says 'Shock advised.' After charging, the AED says 'Stand clear.' The team leader visually confirms no one is touching the patient, says 'CLEAR!', and presses the shock button. What should happen immediately after the shock?",
                options: [
                    "Check for a pulse immediately to see if the shock worked",
                    "Resume chest compressions immediately — do not check pulse or rhythm",
                    "Re-analyze the rhythm to see if the shock converted the rhythm",
                    "Ventilate the patient 5 times before resuming compressions"
                ],
                correct: 1
            },
            {
                q: "A 6-year-old child is in cardiac arrest. The only AED available has adult pads. There is no pediatric attenuator or pediatric pads available. What should the rescuer do?",
                options: [
                    "Do not use the AED — transport to the hospital while performing CPR",
                    "Use the adult pads placed in the anteroposterior (front-back) position so they do not touch",
                    "Use the adult pads in the standard anterolateral position — it is fine for children",
                    "Cut the adult pads in half to reduce the energy delivered"
                ],
                correct: 1
            },
            {
                q: "[HARD] During a cardiac arrest, the AED says 'Check electrodes' repeatedly and refuses to analyze the rhythm. The chest is very hairy, and the pads were applied directly over the hair without shaving. What is the BEST course of action?",
                options: [
                    "Ignore the message — the AED will eventually analyze correctly",
                    "Rapidly remove the pads, shave the chest hair where the pads were placed, apply new pads firmly, and continue",
                    "Press harder on the existing pads with your gloved hands during analysis",
                    "Abandon the AED and perform manual CPR-only resuscitation"
                ],
                correct: 1
            }
        ],
        critical: [
            {
                id: "crit_4_8_1",
                scenario: "You respond to a cardiac arrest at a shopping mall. Security officers have already applied their public-access AED. The AED pads are applied to the patient's chest in standard anterolateral position. As you arrive, the AED is analyzing. It advises a shock. You clear the area and press the shock button. After the shock, the AED voice prompt says 'It is now safe to touch the patient — begin CPR.' Your partner immediately starts compressions. After about 30 seconds, you notice a faint, irregular ECG waveform on your monitor (which is connected via the AED pads) that looks like fine V-fib. Your partner asks if you should shock again since V-fib is still present.",
                question: "Should you deliver a second shock immediately, or continue CPR?",
                options: [
                    {t: "Shock again immediately since V-fib is still present on the monitor — a second shock is more likely to convert", f: "Incorrect. After a shock, resume CPR for 2 full minutes before re-analyzing. The time to deliver a second shock would deprive the brain and heart of perfusion. The brief appearance of an organized rhythm is expected. Check again at the 2-minute mark."},
                    {t: "Continue CPR for 2 minutes — do not re-analyze or shock until the 2-minute cycle is complete. The AED will guide the next rhythm check when it is time.", f: "Correct. After defibrillation, immediately resume CPR for 2 minutes. Do not re-check the rhythm or pulse during this time. The only exception would be if the patient shows clear signs of ROSC (moving, coughing, waking up, or EtCO₂ rising suddenly). Interrupting compressions too soon after a shock reduces the chance of successful conversion."}
                ],
                correct: 1,
                explanation: "The AHA Guidelines emphasize that post-shock CPR must be delivered for 2 full minutes before rhythm re-analysis. This is because: (1) it takes time for organized electrical activity to return after defibrillation, (2) even if organized activity returns, it may not produce a pulse immediately, and (3) compressions are needed to perfuse the heart and brain during this transition. The pre-shock and post-shock pauses should each be <5 seconds. Total interruption (hands-off time) should be minimized.",
                kpi: "Post-shock CPR timing"
            },
            {
                id: "crit_4_8_2",
                scenario: "You are called to a private residence for a cardiac arrest. The patient is a 68-year-old female who collapsed about 5 minutes ago. Bystanders are doing CPR but the quality is poor. You take over and apply your AED. The chest is very diaphoretic (sweaty). As you apply the pads, they keep sliding off. You dry the chest with a towel, but the pads still do not adhere well. The AED powers on and says 'Check electrodes — poor contact.' The patient is in cardiac arrest with no pulse.",
                question: "How should you troubleshoot the pad adhesion problem and proceed with defibrillation?",
                options: [
                    {t: "Use a second set of pads if available, press firmly to ensure good contact, consider shaving if hair is present, and if the AED still will not analyze, use your manual defibrillator pads instead if available", f: "Correct. Poor pad adhesion is a common problem with diaphoretic or hairy chests. Solutions: dry aggressively, shave if needed, apply firm pressure, use a second pad set. If the AED still cannot analyze, switch to a manual defibrillator if available (the rescuer interprets the rhythm). Never defibrillate through poorly-adherent pads — risk of arcing and burns."},
                    {t: "The AED will still shock even with poor pad contact — ignore the 'Check electrodes' warning and continue with the analysis. The shock will still work.", f: "Incorrect. An AED will not analyze or charge if it detects high impedance from poor pad contact. It is designed to prevent shocking through inadequate contact to avoid arcing, burns, and ineffective defibrillation. The warning must be addressed before proceeding."}
                ],
                correct: 0,
                explanation: "AEDs have an impedance-check feature that ensures the pads have adequate skin contact before analyzing or charging. If pad adhesion is poor, the higher impedance may prevent the AED from functioning. Solutions include: drying the chest completely, shaving excessive hair, applying new pads from a second set, pressing firmly (especially around the edges), or switching to a manual defibrillator with separate paddles/gel pads. Ensuring good pad contact is essential for both patient safety (preventing burns) and effective defibrillation.",
                kpi: "AED troubleshooting — pad adhesion"
            }
        ]
    }
];
