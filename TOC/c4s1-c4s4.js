/* ========== Chapter 4 – Cardiovascular & Resuscitation (Sections 1-4) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [

/* ──────────────────────────────────────────────────────────────────────────────
 * c4s1 – Cardiac Anatomy & Physiology
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c4s1",
    shortTitle: "4.1 Cardiac Anatomy & Physiology",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Cardiac Anatomy & Physiology</h3>

        <p>The heart is a four-chambered muscular pump about the size of a fist, located in the mediastinum between the lungs. It beats approximately 100,000 times per day, pumping blood through over 60,000 miles of blood vessels. Understanding cardiac anatomy and the conduction system is foundational to recognizing and managing every cardiovascular emergency you will encounter as an EMT.</p>

        <h4>Heart Chambers</h4>
        <p>The heart contains four chambers that work in coordinated sequence. The upper chambers are the <strong>atria</strong> (receiving chambers), and the lower chambers are the <strong>ventricles</strong> (pumping chambers). The right side of the heart pumps deoxygenated blood to the lungs; the left side pumps oxygenated blood to the body.</p>
        <table>
            <thead>
                <tr><th>Chamber</th><th>Receives Blood From</th><th>Pumps Blood To</th><th>Wall Thickness</th></tr>
            </thead>
            <tbody>
                <tr><td>Right Atrium (RA)</td><td>Superior vena cava, inferior vena cava, coronary sinus</td><td>Right ventricle (via tricuspid valve)</td><td>Thin-walled</td></tr>
                <tr><td>Right Ventricle (RV)</td><td>Right atrium</td><td>Pulmonary artery (via pulmonic valve) → lungs</td><td>Moderate (pumps against low pulmonary resistance)</td></tr>
                <tr><td>Left Atrium (LA)</td><td>Pulmonary veins (from lungs)</td><td>Left ventricle (via mitral valve)</td><td>Thin-walled</td></tr>
                <tr><td>Left Ventricle (LV)</td><td>Left atrium</td><td>Aorta (via aortic valve) → entire body</td><td><strong>Thickest</strong> (pumps against high systemic resistance)</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> The left ventricle has the thickest myocardial wall because it must generate enough pressure to pump blood to the entire body against high systemic resistance. This makes the LV the most common site of myocardial infarction — and the most common chamber to fail in cardiogenic shock.
        </div>

        <h4>Cardiac Valves</h4>
        <p>Four valves ensure one-way blood flow through the heart. The <strong>atrioventricular (AV) valves</strong> separate the atria from the ventricles. The <strong>semilunar valves</strong> separate the ventricles from the great arteries.</p>
        <table>
            <thead>
                <tr><th>Valve</th><th>Location</th><th>Prevents Backflow Into</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Tricuspid Valve</strong></td><td>Between RA and RV</td><td>Right atrium during ventricular systole</td></tr>
                <tr><td><strong>Pulmonic Valve</strong></td><td>Between RV and pulmonary artery</td><td>Right ventricle during diastole</td></tr>
                <tr><td><strong>Mitral Valve</strong> (bicuspid)</td><td>Between LA and LV</td><td>Left atrium during ventricular systole</td></tr>
                <tr><td><strong>Aortic Valve</strong></td><td>Between LV and aorta</td><td>Left ventricle during diastole</td></tr>
            </tbody>
        </table>

        <h4>Coronary Arteries</h4>
        <p>The heart receives its own blood supply through the <strong>coronary arteries</strong>, which originate from the base of the aorta (just above the aortic valve). The coronary arteries fill during <strong>diastole</strong> (when the aortic valve is closed and the myocardium is relaxed).</p>
        <ul>
            <li><strong>Left Main Coronary Artery (LMCA)</strong> — divides into two major branches:
                <ul>
                    <li><strong>Left Anterior Descending (LAD):</strong> Supplies the anterior wall of the LV, the interventricular septum, and part of the RV. Known as the "widow maker" because proximal LAD occlusion can cause massive anterior MI.</li>
                    <li><strong>Left Circumflex (LCx):</strong> Supplies the lateral and posterior walls of the LV.</li>
                </ul>
            </li>
            <li><strong>Right Coronary Artery (RCA):</strong> Supplies the right ventricle, the inferior wall of the LV, the SA node (in ~60% of people), and the AV node (in ~80-90% of people). RCA occlusion causes inferior MI, often with bradycardia or heart block due to AV nodal involvement.</li>
        </ul>

        <h4>Blood Flow Through the Heart</h4>
        <p>Deoxygenated blood returns to the heart → <strong>Superior/Inferior Vena Cava</strong> → <strong>Right Atrium</strong> → <strong>Tricuspid Valve</strong> → <strong>Right Ventricle</strong> → <strong>Pulmonic Valve</strong> → <strong>Pulmonary Arteries</strong> → <strong>Lungs</strong> (gas exchange: CO₂ out, O₂ in) → <strong>Pulmonary Veins</strong> → <strong>Left Atrium</strong> → <strong>Mitral Valve</strong> → <strong>Left Ventricle</strong> → <strong>Aortic Valve</strong> → <strong>Aorta</strong> → Body.</p>

        <h4>Cardiac Cycle: Systole and Diastole</h4>
        <p>The cardiac cycle consists of two alternating phases:</p>
        <ul>
            <li><strong>Systole:</strong> The ventricles contract, ejecting blood. The AV valves (tricuspid, mitral) are closed, and the semilunar valves (pulmonic, aortic) are open. This is when you hear S1 ("lub") — the sound of the AV valves closing.</li>
            <li><strong>Diastole:</strong> The ventricles relax and fill with blood. The semilunar valves are closed, and the AV valves are open. This is when you hear S2 ("dub") — the sound of the semilunar valves closing. Coronary artery perfusion occurs during diastole.</li>
        </ul>

        <h4>Cardiac Conduction System</h4>
        <p>The heart has an intrinsic electrical system that generates and conducts impulses, coordinating the contraction of the chambers. This system functions independently of the nervous system, though it is modulated by the autonomic nervous system (sympathetic increases rate, parasympathetic decreases rate).</p>
        <ol>
            <li><strong>Sinoatrial (SA) Node:</strong> Located in the right atrial wall near the SVC junction. The SA node is the <strong>natural pacemaker</strong> with an intrinsic rate of 60–100 bpm. It generates an electrical impulse that spreads across both atria, causing atrial contraction.</li>
            <li><strong>Atrioventricular (AV) Node:</strong> Located in the lower interatrial septum. The AV node <strong>delays</strong> the impulse by ~0.1 second to allow the atria to fully contract and empty blood into the ventricles before ventricular contraction begins (atrial kick). Intrinsic rate: 40–60 bpm.</li>
            <li><strong>Bundle of His:</strong> The impulse travels from the AV node through the Bundle of His in the interventricular septum.</li>
            <li><strong>Right and Left Bundle Branches:</strong> The Bundle of His divides into right and left bundle branches, carrying the impulse down the interventricular septum toward the apex of the heart.</li>
            <li><strong>Purkinje Fibers:</strong> The terminal branches of the conduction system that rapidly distribute the impulse throughout the ventricular myocardium, causing coordinated ventricular contraction from the apex upward (like squeezing a tube of toothpaste). Intrinsic rate: 20–40 bpm.</li>
        </ol>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Key Concept:</strong> The conduction system has a hierarchy of pacemakers. If the SA node fails, the AV node can take over at 40–60 bpm (junctional rhythm). If both fail, Purkinje fibers can fire at 20–40 bpm (idioventricular rhythm). Lower pacemakers are slower and less reliable — they can sustain life but often with significantly reduced cardiac output.
        </div>

        <h4>Autonomic Regulation of the Heart</h4>
        <p>The heart rate and contractility are regulated by the autonomic nervous system:</p>
        <ul>
            <li><strong>Sympathetic nervous system</strong> (fight or flight): Releases norepinephrine, which binds to beta-1 receptors in the heart, increasing heart rate (chronotropy), contractility (inotropy), and conduction velocity (dromotropy). Activated by stress, pain, hypovolemia, hypoxia, and medications like epinephrine.</li>
            <li><strong>Parasympathetic nervous system</strong> (rest and digest): The vagus nerve releases acetylcholine, which binds to muscarinic receptors, decreasing heart rate. This is why vagal maneuvers (bearing down, carotid massage) can slow tachycardia.</li>
        </ul>
    </div>`,
    flashcards: [
        { question: "What are the four chambers of the heart, and which has the thickest wall?", answer: "Right atrium, right ventricle, left atrium, left ventricle. The left ventricle has the thickest wall because it pumps against high systemic resistance.", category: "Cardiac Anatomy" },
        { question: "Which valves are the atrioventricular (AV) valves, and which are the semilunar valves?", answer: "AV valves: tricuspid (right) and mitral/bicuspid (left). Semilunar valves: pulmonic (right) and aortic (left).", category: "Cardiac Anatomy" },
        { question: "What are the three major coronary arteries and which parts of the heart does each supply?", answer: "LAD (anterior LV wall, septum), Left Circumflex / LCx (lateral/posterior LV), Right Coronary Artery / RCA (right ventricle, inferior LV, SA node in ~60%, AV node in ~80-90%).", category: "Coronary Arteries" },
        { question: "Trace the path of blood flow through the heart from vena cava to aorta.", answer: "Vena Cavae → RA → Tricuspid Valve → RV → Pulmonic Valve → Pulmonary Arteries → Lungs → Pulmonary Veins → LA → Mitral Valve → LV → Aortic Valve → Aorta → Body.", category: "Cardiac Physiology" },
        { question: "What is the difference between systole and diastole?", answer: "Systole: ventricles contract, AV valves closed, blood ejected. Diastole: ventricles relax, semilunar valves closed, coronary perfusion occurs, ventricles fill.", category: "Cardiac Cycle" },
        { question: "List the components of the cardiac conduction system in order.", answer: "SA node (pacemaker, 60-100 bpm) → AV node (delay, 40-60 bpm) → Bundle of His → Right and Left Bundle Branches → Purkinje Fibers (20-40 bpm).", category: "Conduction System" },
        { question: "Why is the AV node delay important?", answer: "It delays the impulse by ~0.1 second, allowing the atria to fully contract (atrial kick) and empty blood into the ventricles before ventricular contraction.", category: "Conduction System" },
        { question: "What effect does the sympathetic nervous system have on the heart?", answer: "Increases heart rate (chronotropy), contractility (inotropy), and conduction velocity (dromotropy) via beta-1 receptor activation by norepinephrine.", category: "Cardiac Physiology" }
    ],
    quiz: [
        { q: "Which valve separates the left atrium from the left ventricle?", options: ["Tricuspid valve", "Pulmonic valve", "Mitral valve", "Aortic valve"], correct: 2 },
        { q: "Which part of the cardiac conduction system is known as the natural pacemaker with an intrinsic rate of 60-100 bpm?", options: ["AV node", "Bundle of His", "SA node", "Purkinje fibers"], correct: 2 },
        { q: "What sound does S1 ('lub') represent during the cardiac cycle?", options: ["Semilunar valves closing", "AV valves (mitral and tricuspid) closing", "Blood flowing through the coronary arteries", "The atria contracting"], correct: 1 }
    ],
    critical: [
        {
            id: "crit_4_1_1",
            scenario: "You are assessing a 58-year-old male with crushing substernal chest pain radiating to his left arm that began 45 minutes ago while shoveling snow. Vital signs: BP 104/68, HR 118, RR 20, SpO₂ 96%. The 12-lead ECG obtained by your paramedic partner shows ST-segment elevation in leads V1-V4. Your partner notes that this is consistent with an anterior wall STEMI. The patient becomes increasingly short of breath and you note crackles in the bilateral lung bases.",
            question: "Given the ECG findings localizing the infarction to the anterior wall, which coronary artery is most likely occluded, and why is the patient now developing pulmonary congestion?",
            options: [
                {t: "The LAD (Left Anterior Descending) artery — anterior wall MI with pulmonary congestion suggests left ventricular dysfunction from loss of a large amount of anterior wall myocardium, causing acute pump failure", f: "Correct. The LAD supplies the anterior LV wall and septum. A proximal LAD occlusion affects a large area of myocardium, causing acute LV systolic dysfunction that backs blood into the pulmonary circulation, producing pulmonary edema."},
                {t: "The RCA (Right Coronary Artery) — anterior wall infarction indicates RCA occlusion, and pulmonary congestion is caused by right ventricular failure", f: "Incorrect. The RCA supplies the inferior wall, not the anterior wall. Anterior ST elevation in V1-V4 localizes to the LAD territory. Pulmonary congestion in anterior MI results from LV failure, not RV failure."}
            ],
            correct: 0,
            explanation: "The LAD artery supplies the anterior wall of the left ventricle and the interventricular septum. ST elevation in V1-V4 is the classic pattern for anterior STEMI. When a large portion of the LV is ischemic or infarcted, the LV cannot pump effectively, causing increased left ventricular end-diastolic pressure that is transmitted backward through the left atrium and pulmonary veins. This results in pulmonary congestion (crackles, dyspnea). Extensive anterior MI can rapidly progress to cardiogenic shock.",
            kpi: "Correlates ECG territory with coronary anatomy and recognizes acute pump failure"
        },
        {
            id: "crit_4_1_2",
            scenario: "You are called to a 72-year-old female with syncope. Her husband states she 'passed out' while watching television and was unresponsive for about 15 seconds before waking up confused. She now feels fatigued but has no chest pain or shortness of breath. Vital signs: BP 102/64, HR 38 (slow and regular), RR 16, SpO₂ 97%. The cardiac monitor shows a regular rhythm with P waves that are not followed by QRS complexes — the atria and ventricles appear to be beating independently. The QRS complexes are wide and occur at a rate of 38 bpm. The patient's skin is warm and dry, but she complains of feeling lightheaded.",
            question: "Based on the heart rate, conduction finding, and the fact that the atria and ventricles are beating independently, what is the most likely underlying cause related to the cardiac conduction system?",
            options: [
                {t: "Third-degree (complete) heart block — the SA node is firing normally (P waves present) but no impulses are conducted through the AV node; the ventricles are paced by a slow Purkinje escape rhythm (idioventricular, ~20-40 bpm), resulting in drastically reduced cardiac output", f: "Correct. Complete heart block means no atrial impulses reach the ventricles. P waves are dissociated from QRS complexes. The ventricles rely on a Purkinje escape rhythm (wide QRS, slow rate), which cannot maintain adequate cardiac output, causing syncope and fatigue."},
                {t: "Sinus bradycardia with first-degree AV block — the P-R interval is prolonged and the heart rate is slow, but the atria and ventricles are still coordinated", f: "Incorrect. In first-degree AV block, every P wave IS followed by a QRS (just with a prolonged PR interval). The description of P waves not conducted at all — with independent atrial and ventricular rates — is diagnostic of third-degree AV block, not first-degree."}
            ],
            correct: 0,
            explanation: "Third-degree (complete) heart block is a failure of the AV node/conduction system to transmit any atrial impulses to the ventricles. The atria contract at the SA node's rate (60-100 bpm) while the ventricles are paced by an escape rhythm originating below the block — either from the AV junction (40-60 bpm, narrow QRS) or, more seriously, from the Purkinje system (20-40 bpm, wide QRS). This patient has a wide-complex escape rhythm at 38 bpm, indicating a ventricular (Purkinje) pacemaker. This can be caused by inferior MI (RCA/AV nodal ischemia), anterior MI (extensive septal damage), or degenerative conduction disease. Treatment includes transcutaneous pacing if symptomatic.",
            kpi: "Recognizes complete heart block and its impact on cardiac output from conduction system dysfunction"
        },
        {
            id: "crit_4_1_3",
            scenario: "A 45-year-old male presents with sudden onset of severe, tearing chest pain that radiates to his back between his shoulder blades. He describes the pain as 'the worst pain I've ever felt.' He has a history of poorly controlled hypertension. Vital signs: BP 188/104 in the right arm, BP 146/88 in the left arm, HR 112, RR 22, SpO₂ 95%. You note that his left radial pulse feels weaker than his right. There are no ECG changes suggestive of STEMI. Lung sounds are clear.",
            question: "The difference in blood pressure between arms and the pulse deficit suggest a pathology involving which part of the cardiovascular anatomy?",
            options: [
                {t: "Aortic dissection — a tear in the intimal layer of the aorta allows blood to track along the vessel wall, creating a false lumen that can compress branch vessels, leading to unequal BP readings and pulse deficits between arms", f: "Correct. Aortic dissection is a life-threatening condition where a tear in the aortic intima allows blood to dissect along the media. If it involves the aortic arch, it can occlude the subclavian arteries, causing BP differential and pulse deficits between arms. The tearing pain radiating to the back is the classic presentation."},
                {t: "Acute coronary syndrome from left main coronary artery occlusion — the pulse deficit is caused by decreased left ventricular output", f: "Incorrect. While ACS can cause chest pain, the tearing quality radiating to the back, BP differential between arms, pulse deficit, and lack of STEMI criteria are classic for aortic dissection, not ACS. An aortic dissection can secondarily involve the coronary ostia (causing MI), but the primary pathology is aortic."}
            ],
            correct: 0,
            explanation: "Aortic dissection occurs when a tear in the intimal layer of the aorta allows blood to enter the media, creating a false lumen that propagates along the vessel. A BP differential (>20 mmHg) between arms is a critical finding suggesting involvement of the aortic arch branches. Pulse deficits occur when the false lumen compresses or occludes branch vessels. Aortic dissection is a time-critical emergency requiring immediate surgical evaluation. High-flow oxygen, IV access, heart rate control (if per protocol), and rapid transport to a facility with cardiothoracic surgery capabilities are essential.",
            kpi: "Recognizes aortic dissection anatomy and the significance of BP differential/pulse deficits"
        }
    ]
},

/* ──────────────────────────────────────────────────────────────────────────────
 * c4s2 – Chest Pain / Acute Coronary Syndrome
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c4s2",
    shortTitle: "4.2 Chest Pain / Acute Coronary Syndrome",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Chest Pain / Acute Coronary Syndrome</h3>

        <p><strong>Acute Coronary Syndrome (ACS)</strong> is a term encompassing the spectrum of conditions caused by reduced blood flow to the myocardium due to coronary artery plaque rupture, thrombosis, and vasospasm. ACS is a time-critical emergency — every minute of delay in reperfusion results in irreversible myocardial cell death. As an EMT, your role in early recognition, aspirin administration, and appropriate destination selection directly impacts patient survival.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical Concept:</strong> Time is muscle. Myocardial cells begin to die within 20-40 minutes of complete coronary occlusion. The goal of EMS is to identify potential STEMI patients, administer aspirin, and transport to a PCI-capable facility as rapidly as possible. Door-to-balloon time should be ≤90 minutes.
        </div>

        <h4>The ACS Spectrum</h4>
        <p>ACS encompasses three conditions that differ in severity and the presence of myocardial damage:</p>
        <table>
            <thead>
                <tr><th>Condition</th><th>Pathophysiology</th><th>ECG Findings</th><th>Biomarkers</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Unstable Angina</strong></td><td>Plaque rupture with partial thrombosis — blood flow is reduced but not completely occluded. Pain occurs at rest or with minimal exertion, is new in onset, or is more severe/frequent than prior angina.</td><td>ST depression, T-wave inversion, or normal; <strong>no ST elevation</strong></td><td>Negative (no myocardial necrosis)</td></tr>
                <tr><td><strong>NSTEMI</strong> (Non-ST-Elevation MI)</td><td>Subtotal occlusion — severe reduction in blood flow causing some myocardial necrosis, but not transmural (does not extend through full wall thickness).</td><td>ST depression, T-wave inversion, or normal; <strong>no ST elevation</strong></td><td>Positive (troponin elevated)</td></tr>
                <tr><td><strong>STEMI</strong> (ST-Elevation MI)</td><td>Complete occlusion of a coronary artery causing transmural myocardial infarction (full wall thickness necrosis).</td><td><strong>ST-segment elevation</strong> ≥1 mm in two or more contiguous leads; new LBBB</td><td>Positive (troponin elevated)</td></tr>
            </tbody>
        </table>

        <h4>Typical vs. Atypical Chest Pain Presentation</h4>
        <p>Not all ACS presents with classic crushing chest pain. Be alert for atypical presentations, especially in certain populations:</p>
        <table>
            <thead>
                <tr><th>Presentation Type</th><th>Characteristics</th><th>Population at Risk</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Typical</strong></td><td>Substernal chest pressure, squeezing, heaviness, or tightness; may radiate to left arm, jaw, neck, back, or epigastrium; associated with dyspnea, diaphoresis, nausea, and/or lightheadedness; often brought on by exertion and relieved by rest or nitroglycerin</td><td>General population</td></tr>
                <tr><td><strong>Atypical</strong></td><td>Epigastric pain, indigestion, sharp/stabbing pain, pleuritic pain, isolated dyspnea, extreme fatigue, syncope, or 'just not feeling right.' Pain may be absent. May present as flu-like symptoms or anxiety.</td><td><strong>Women</strong>, elderly (>75 years), diabetics (autonomic neuropathy blunts pain perception), and patients with dementia</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> Diabetics often have silent ischemia or atypical presentations due to autonomic neuropathy that blunts cardiac pain perception. In a diabetic patient with unexplained dyspnea, nausea, fatigue, or altered mental status — suspect ACS until proven otherwise.
        </div>

        <h4>OPQRST for Chest Pain Assessment</h4>
        <p>The OPQRST mnemonic is a systematic approach to characterizing pain and is especially critical for chest pain assessment:</p>
        <ul>
            <li><strong>O</strong>nset: When did the pain start? What were you doing when it began? Was onset sudden or gradual?</li>
            <li><strong>P</strong>rovocation / Palliation: What makes it worse (exertion, deep breathing, movement, palpation)? What makes it better (rest, position, medication already taken)?</li>
            <li><strong>Q</strong>uality: Describe the pain — is it crushing, squeezing, sharp, dull, tearing, burning, or pressure-like? Use the patient's own words.</li>
            <li><strong>R</strong>egion / Radiation: Where exactly is the pain, and does it radiate anywhere (arm, jaw, back, neck, epigastrium)?</li>
            <li><strong>S</strong>everity: On a scale of 0-10, how bad is the pain right now? At its worst?</li>
            <li><strong>T</strong>ime / Timing: How long has this episode lasted? Has it been constant or intermittent? Have you had similar episodes before? Have you taken any medications for it?</li>
        </ul>

        <h4>Cardiac Risk Factors</h4>
        <p>Risk factors increase the likelihood that a patient's chest pain is cardiac in origin. They are divided into modifiable and non-modifiable:</p>
        <table>
            <thead>
                <tr><th>Non-Modifiable</th><th>Modifiable</th></tr>
            </thead>
            <tbody>
                <tr><td>Age (men ≥45 yr, women ≥55 yr)</td><td>Hypertension</td></tr>
                <tr><td>Family history of premature CAD</td><td>Hypercholesterolemia / dyslipidemia</td></tr>
                <tr><td>Male sex</td><td>Diabetes mellitus</td></tr>
                <tr><td>Personal history of CAD/MI</td><td>Smoking / tobacco use</td></tr>
                <tr><td></td><td>Obesity (BMI ≥30)</td></tr>
                <tr><td></td><td>Sedentary lifestyle</td></tr>
                <tr><td></td><td>Cocaine or amphetamine use (can cause coronary vasospasm)</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>NREMT Tip:</strong> The presence of multiple risk factors increases clinical suspicion for ACS, but the ABSENCE of risk factors does NOT rule out ACS, especially in young patients with cocaine use or patients with atypical presentations. Always err on the side of caution.
        </div>

        <h4>EMS Management of Chest Pain / Suspected ACS</h4>
        <p>The following steps represent the standard EMT approach to suspected ACS (follow your local protocols):</p>
        <ul>
            <li><strong>Oxygen:</strong> Administer only if SpO₂ &lt;94% or if the patient is in respiratory distress. Routine oxygen for all chest pain patients is no longer recommended — oxygen can cause vasoconstriction and may increase infarct size in normoxic patients.</li>
            <li><strong>Aspirin:</strong> 160-325 mg (usually 2-4 baby aspirin 81 mg or 1 adult aspirin 325 mg) chewed and swallowed. Aspirin inhibits platelet aggregation, reducing thrombus propagation. It is the single most important prehospital intervention for ACS. Do not give if the patient has a true allergy (not just upset stomach) or active GI bleeding. <strong>Chewing, not swallowing whole, speeds absorption.</strong></li>
            <li><strong>Nitroglycerin (GTN):</strong> If the patient has a prescribed nitroglycerin (sublingual spray or tablet) and the EMT is authorized by protocol and/or medical direction to assist. Check for contraindications: hypotension (SBP &lt;90-100 mmHg per protocol), severe bradycardia or tachycardia, suspected right ventricular infarction, or recent PDE-5 inhibitor use (sildenafil, tadalafil, vardenafil within 24-48 hours — can cause severe refractory hypotension).</li>
            <li><strong>12-Lead ECG:</strong> Obtain per local protocol. Many EMS systems allow EMTs to apply leads and obtain a 12-lead for transmission to the receiving hospital. Early ECG acquisition reduces door-to-balloon time.</li>
            <li><strong>Transport Decision:</strong> Patients with suspected STEMI should be transported directly to a <strong>PCI-capable (percutaneous coronary intervention) center</strong> — often called a STEMI receiving center or cardiac catheterization lab facility — bypassing closer hospitals that cannot perform PCI. Know your local STEMI network and destination protocols.</li>
        </ul>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical Warning — GTN + PDE-5 Inhibitors:</strong> Patients who have taken sildenafil (Viagra), tadalafil (Cialis), or vardenafil (Levitra) within 24-48 hours (72 hours for tadalafil) CANNOT receive nitroglycerin. The combination causes profound, refractory hypotension. Always ask male patients with chest pain about recent erectile dysfunction medication use.
        </div>

        <h4>Transport Considerations</h4>
        <ul>
            <li><strong>STEMI:</strong> Emergency transport (lights and sirens if safe) to a PCI-capable hospital. Pre-notify the receiving facility so the catheterization lab team can be activated before arrival.</li>
            <li><strong>Non-STEMI / Unstable Angina:</strong> Urgent transport (non-emergent but timely) to an appropriate facility capable of managing ACS. These patients still require admission, monitoring, and cardiology evaluation.</li>
            <li><strong>All ACS patients:</strong> Keep the patient calm, position them comfortably (usually semi-Fowler's if tolerating), monitor vital signs every 5 minutes if unstable, every 15 minutes if stable, have the AED ready, and be prepared for dysrhythmias or cardiac arrest.</li>
        </ul>
    </div>`,
    flashcards: [
        { question: "What are the three conditions that make up the ACS spectrum?", answer: "Unstable angina (reversible ischemia, no necrosis, no ST elevation), NSTEMI (subtotal occlusion, some necrosis, no ST elevation), STEMI (complete occlusion, transmural necrosis, ST elevation).", category: "ACS Spectrum" },
        { question: "What is the single most important prehospital intervention for suspected ACS and what is the dose?", answer: "Aspirin 160-325 mg (2-4 baby aspirin or 1 adult aspirin) chewed and swallowed. Chewing speeds absorption. It inhibits platelet aggregation.", category: "ACS Management" },
        { question: "What contraindications must be checked before assisting a patient with nitroglycerin?", answer: "Hypotension (SBP < 90-100 per protocol), severe bradycardia/tachycardia, suspected RV infarction, and PDE-5 inhibitor use (sildenafil/tadalafil/vardenafil) within 24-72 hours.", category: "ACS Management" },
        { question: "What is the STEMI transport destination priority?", answer: "Direct transport to a PCI-capable (cardiac catheterization) center, bypassing closer hospitals without PCI capability, to achieve door-to-balloon time ≤90 minutes.", category: "ACS Transport" },
        { question: "List the components of the OPQRST pain assessment mnemonic.", answer: "Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time/Timing.", category: "Pain Assessment" },
        { question: "Why might a diabetic patient with ACS present atypically or without chest pain?", answer: "Autonomic neuropathy from chronic diabetes can blunt or eliminate cardiac pain perception, leading to 'silent ischemia' — presenting with dyspnea, nausea, fatigue, or altered mental status instead of chest pain.", category: "ACS Recognition" },
        { question: "What are the non-modifiable cardiac risk factors for ACS?", answer: "Age (men ≥45, women ≥55), family history of premature CAD, male sex, and personal history of CAD/MI.", category: "Risk Factors" },
        { question: "Is routine oxygen administration recommended for all chest pain patients?", answer: "No. Oxygen is only indicated if SpO₂ < 94% or the patient is in respiratory distress. Routine oxygen can cause vasoconstriction and may worsen outcomes in normoxic patients.", category: "ACS Management" }
    ],
    quiz: [
        { q: "Which of the following best describes the pathophysiology of a STEMI?", options: ["Partial coronary artery occlusion with reversible myocardial ischemia", "Complete coronary artery occlusion causing transmural myocardial necrosis", "Coronary artery vasospasm without plaque rupture", "Myocardial oxygen demand exceeding supply without occlusion"], correct: 1 },
        { q: "Aspirin should be administered to a suspected ACS patient in what dose and route?", options: ["325 mg swallowed whole with water", "81 mg chewed and swallowed", "160-325 mg chewed and swallowed", "500 mg IV push"], correct: 2 },
        { q: "[HARD] A 55-year-old male with crushing substernal chest pain has ST elevation in leads II, III, and aVF on the 12-lead ECG. After establishing IV access and administering aspirin, EMS administers nitroglycerin 0.4 mg SL. Five minutes later, the patient's blood pressure drops from 128/78 to 72/40 and he becomes diaphoretic and confused. What is the most likely cause?", options: ["Anaphylactic reaction to nitroglycerin", "Right ventricular infarction — nitrates reduce preload in a preload-dependent RV, causing severe hypotension", "Nitroglycerin-induced stroke", "Vasovagal syncope from the IV insertion"], correct: 1, explanation: "Inferior STEMI (leads II, III, aVF) often involves the right ventricle. The RV is preload-dependent; nitrates reduce preload and can cause catastrophic hypotension in RV infarction. This is why checking for RV involvement before giving nitrates is critical." }
    ],
    critical: [
        {
            id: "crit_4_2_1",
            scenario: "You are dispatched to a 58-year-old male with chest pain for the past hour. He is pale, diaphoretic, and clutching his chest. He describes the pain as 'an elephant sitting on my chest' that radiates to his left jaw. He has a history of hypertension and high cholesterol. Vital signs: BP 142/88, HR 104, RR 18, SpO₂ 97% on room air. He took one of his wife's nitroglycerin tablets before you arrived without improvement. He denies any other medications. When asked about erectile dysfunction medications, he says he takes tadalafil (Cialis) 'a couple of times a week' — he took it yesterday.",
            question: "What is the most appropriate sequence of actions for this patient?",
            options: [
                {t: "Administer aspirin 162-325 mg chewed, do NOT administer nitroglycerin (recent tadalafil use within 24-72 hours contraindicates nitrates), apply oxygen only for hypoxia (SpO₂ 97% — none needed), obtain 12-lead ECG, and transport to a PCI-capable center with prenotification", f: "Correct. Tadalafil has a long half-life and contraindicates nitroglycerin for 72+ hours due to risk of refractory hypotension. Aspirin is safe and indicated. Oxygen is not needed with SpO₂ ≥94%. The patient needs rapid transport to a STEMI center."},
                {t: "Administer aspirin and nitroglycerin — the tadalafil interaction is a minor concern. Apply high-flow oxygen for all chest pain patients. Transport to the closest hospital regardless of PCI capability", f: "Incorrect. Tadalafil with nitroglycerin can cause severe, refractory hypotension that may not respond to fluids or pressors. Oxygen should not be given routinely when SpO₂ is normal. Destination should be a PCI-capable center if possible."}
            ],
            correct: 0,
            explanation: "This is a critical and commonly tested interaction. Tadalafil has a much longer half-life than sildenafil or vardenafil — it can interact with nitrates for up to 72+ hours (some protocols say 96 hours). The combination causes profound vasodilation and severe hypotension that is often resistant to treatment. Aspirin is safe and should be given promptly. High-flow oxygen is not indicated when SpO₂ is ≥94%. The classic chest pain description (substernal pressure, radiating to jaw, diaphoresis) is highly concerning for STEMI. Early 12-lead acquisition and transport to a PCI-capable facility are essential.",
            kpi: "Applies contraindication knowledge for nitrate administration and prioritizes aspirin"
        },
        {
            id: "crit_4_2_2",
            scenario: "You respond to a 65-year-old female with 'weakness and nausea.' She states she felt fine this morning but started feeling 'flu-like' symptoms about 2 hours ago: nausea, indigestion, and unusual fatigue. She says she feels like she 'just ran a marathon' even though she has been sitting in a chair. She has a history of type 2 diabetes and hypertension. Vital signs: BP 106/70, HR 108, RR 20, SpO₂ 95%. She denies chest pain or pressure. Her skin is cool and slightly diaphoretic. When you ask if she thinks she might be having a heart attack, she says, 'No, it doesn't hurt — it's just indigestion and I'm really tired.'",
            question: "Given this patient's presentation, what is the most appropriate interpretation and plan?",
            options: [
                {t: "This is a classic atypical ACS presentation in a diabetic woman — 'flu-like' symptoms, fatigue, nausea, diaphoresis without chest pain. Administer aspirin, obtain 12-lead ECG, and transport emergently to a PCI-capable facility", f: "Correct. Diabetic patients often have silent ischemia or atypical symptoms due to autonomic neuropathy. Extreme fatigue ('I feel like I ran a marathon'), indigestion, nausea, and diaphoresis are classic atypical ACS presentations."},
                {t: "The patient has no chest pain, so ACS is unlikely. This is probably a viral illness or GI issue. Transport to the closest ED without priority", f: "Incorrect. Up to 33% of MIs — especially in women and diabetics — present without chest pain. This patient has multiple risk factors (age, diabetes, hypertension) and clinical signs (tachycardia, diaphoresis, fatigue). ACS is the priority until proven otherwise."}
            ],
            correct: 0,
            explanation: "Diabetic autonomic neuropathy blunts cardiac pain perception, leading to 'silent ischemia' or atypical presentations. Women also more commonly experience non-chest-pain ACS symptoms. The combination of unexplained fatigue, nausea, indigestion, diaphoresis, and tachycardia in a patient with cardiac risk factors should immediately raise suspicion for ACS. Administer aspirin per protocol, obtain a 12-lead ECG, provide supportive care, and transport to a facility capable of managing ACS. Time is muscle — even without chest pain.",
            kpi: "Recognizes atypical ACS presentation in high-risk populations (diabetics, women)"
        },
        {
            id: "crit_4_2_3",
            scenario: "You are on the scene with a 52-year-old male with substernal chest pain that began 30 minutes ago while he was watching television. He is pale, anxious, and diaphoretic. Vital signs: BP 154/92, HR 116, RR 22, SpO₂ 93%. He has no history of prior cardiac events. Your partner obtains a 12-lead ECG, which shows ST elevation in leads V1-V4. The nearest hospital is a community facility with no PCI capability — it is 8 minutes away. The nearest STEMI receiving center with a cath lab is 28 minutes away in the opposite direction. Your agency's protocol states that patients with suspected STEMI should be transported to a PCI-capable facility if transport time is 30 minutes or less.",
            question: "What is the most appropriate destination decision for this patient?",
            options: [
                {t: "Transport directly to the PCI-capable STEMI center 28 minutes away — this patient is within the 30-minute protocol window and will receive definitive reperfusion (PCI) faster than going to a non-PCI hospital and requiring transfer", f: "Correct. Transport to a STEMI center within the protocol time window (≤30 min) is preferred over taking the patient to a non-PCI hospital where they will need a secondary transfer, which significantly delays reperfusion. Pre-notify the STEMI center to activate the cath lab."},
                {t: "Transport to the closest community hospital 8 minutes away — closer is always better for chest pain patients, and they can manage the patient there", f: "Incorrect. Transporting a STEMI patient to a non-PCI facility only to require a secondary transfer can add 60-120+ minutes to reperfusion time (door-in-door-out delays). Direct transport to a PCI center within a reasonable time frame (typically ≤30 minutes additional travel) is the standard of care."}
            ],
            correct: 0,
            explanation: "Research shows that direct transport to a PCI-capable facility, even with longer transport times (up to 30-45 minutes additional), results in better outcomes than taking a STEMI patient to a non-PCI hospital first. The 'door-to-balloon' time target is ≤90 minutes. Taking the patient to the community hospital would mean: arrive at ED, evaluation, ECG interpretation (already done), cardiology consult, transfer decision, ambulance transfer to PCI center — easily adding 60-120+ minutes. En route to the STEMI center, continue monitoring, have the AED ready, and manage complications (dysrhythmias, hypotension, pulmonary edema).",
            kpi: "Applies STEMI destination protocols and understands the importance of primary PCI over secondary transfer"
        }
    ]
},

/* ──────────────────────────────────────────────────────────────────────────────
 * c4s3 – Heart Failure & Pulmonary Edema
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c4s3",
    shortTitle: "4.3 Heart Failure & Pulmonary Edema",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Heart Failure & Pulmonary Edema</h3>

        <p><strong>Heart failure (HF)</strong> is a chronic, progressive condition in which the heart cannot pump enough blood to meet the body's metabolic demands. It affects over 6 million Americans and is a leading cause of hospital admissions. <strong>Acute decompensated heart failure (ADHF)</strong> — an acute exacerbation of chronic HF — is a common EMS presentation. Pulmonary edema (fluid accumulation in the lungs) is the hallmark of left-sided HF and represents a life-threatening emergency requiring immediate intervention.</p>

        <h4>Left-Sided vs. Right-Sided Heart Failure</h4>
        <p>Heart failure is classified by which ventricle is primarily affected. While both can occur together (biventricular failure), the distinction guides assessment and treatment:</p>
        <table>
            <thead>
                <tr><th>Feature</th><th>Left-Sided Heart Failure</th><th>Right-Sided Heart Failure</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Pathophysiology</strong></td><td>LV cannot pump blood effectively into the aorta → blood backs up into the left atrium → pulmonary veins → pulmonary capillaries → fluid leaks into lung tissue (pulmonary edema)</td><td>RV cannot pump blood effectively into the pulmonary artery → blood backs up into the right atrium → systemic venous system → peripheral edema and JVD</td></tr>
                <tr><td><strong>Primary Symptoms</strong></td><td>Dyspnea, orthopnea (difficulty breathing when lying flat), paroxysmal nocturnal dyspnea (PND — waking up gasping for air), cough (may produce pink frothy sputum)</td><td>Peripheral edema (swelling in feet, ankles, legs, sacrum), JVD, hepatomegaly (enlarged liver from congestion), ascites, fatigue</td></tr>
                <tr><td><strong>Lung Sounds</strong></td><td><strong>Crackles/rales</strong> (bilateral, starting at bases) — the hallmark of pulmonary edema. May also have wheezing ('cardiac asthma')</td><td>Clear (unless concurrent left-sided failure)</td></tr>
                <tr><td><strong>JVD</strong></td><td>May be present (if left-sided pressure is transmitted backward)</td><td><strong>Prominent JVD</strong> — distended neck veins when the patient is at 45°</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical Recognition:</strong> Acute pulmonary edema is a life-threatening emergency. The patient will appear anxious, pale, and diaphoretic — sitting upright, gasping for air, using accessory muscles, with audible crackles and possibly pink frothy sputum. This is the heart failing as a pump, and the lungs are drowning. Immediate CPAP/BiPAP and aggressive management are required.
        </div>

        <h4>Acute Decompensated Heart Failure — Key Signs and Symptoms</h4>
        <p>ADHF can develop over hours to days. Common triggers include: medication non-compliance (stopping diuretics), dietary sodium excess, acute MI (new onset HF), infection, uncontrolled hypertension, and dysrhythmias (especially atrial fibrillation). Key assessment findings include:</p>
        <ul>
            <li><strong>Dyspnea:</strong> Usually the chief complaint. Assess for orthopnea (how many pillows does the patient sleep on? — 'two-pillow orthopnea') and PND.</li>
            <li><strong>Positioning:</strong> Patients with ADHF instinctively sit upright (tripod position) to optimize lung expansion and reduce venous return to the heart. A patient lying flat is a reassuring sign that HF is unlikely.</li>
            <li><strong>Jugular Venous Distention (JVD):</strong> Assess with the patient at a 45-degree angle. The jugular vein should not be visible when the patient is upright. JVD >4 cm above the sternal angle indicates elevated central venous pressure.</li>
            <li><strong>Peripheral Edema:</strong> Pitting edema in the lower extremities, sacrum, or scrotum. Grade on a scale of 1+ (trace) to 4+ (severe, deep pitting).</li>
            <li><strong>Crackles/Rales:</strong> Bubbling sounds on auscultation, beginning at the lung bases and progressing upward as pulmonary edema worsens. May be accompanied by wheezing ('cardiac asthma' due to bronchial wall edema).</li>
            <li><strong>Pink Frothy Sputum:</strong> A late and ominous sign indicating that fluid has entered the alveoli and mixed with red blood cells from capillary rupture.</li>
            <li><strong>Vital Sign Changes:</strong> Hypertension (from catecholamine surge) is common in acute HF; hypotension is a worse prognostic sign indicating cardiogenic shock. Tachycardia, tachypnea, and low SpO₂ are typical.</li>
        </ul>

        <h4>Prehospital Management of ADHF / Pulmonary Edema</h4>
        <p>The goals of prehospital treatment are to reduce preload (venous return to the heart), support oxygenation and ventilation, and rapidly transport. Management depends on local protocols but generally includes:</p>

        <h5>1. Positioning</h5>
        <p>Place the patient in an <strong>upright sitting position</strong> (semi-Fowler's or high Fowler's) with legs dependent (hanging down). This position uses gravity to reduce venous return (preload) and improves diaphragmatic excursion for better lung expansion. <strong>Never lay a patient with acute pulmonary edema flat</strong> — this will worsen hypoxia and respiratory distress.</p>

        <h5>2. Oxygen and Positive-Pressure Ventilation</h5>
        <p><strong>Oxygen:</strong> Administer high-flow oxygen via non-rebreather mask to maintain SpO₂ ≥94%. However, oxygen alone is often insufficient because the fundamental problem is mechanical (fluid in the alveoli blocks gas exchange).</p>
        <p><strong>CPAP (Continuous Positive Airway Pressure) / BiPAP:</strong> Non-invasive positive pressure ventilation (NIPPV) is the single most effective prehospital intervention for acute pulmonary edema. CPAP (typically 5-10 cmH₂O) or BiPAP (IPAP 10-15 / EPAP 5-8) provides:</p>
        <ul>
            <li><strong>Pneumatic splinting of airways:</strong> Positive pressure keeps alveoli open, improving gas exchange and oxygenation.</li>
            <li><strong>Reduced preload:</strong> Positive intrathoracic pressure decreases venous return to the heart, reducing pulmonary congestion.</li>
            <li><strong>Reduced work of breathing:</strong> The device assists with ventilation, reducing respiratory muscle fatigue.</li>
            <li><strong>Improved cardiac function:</strong> By reducing afterload (LV must pump against less resistance), CPAP can improve cardiac output in HF patients.</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> CPAP alone can reduce the need for endotracheal intubation in acute pulmonary edema by 50% or more. Early application — even before leaving the scene — is associated with better outcomes. Contraindications include: altered mental status (cannot protect airway), respiratory arrest, hypotension, vomiting, facial trauma, or pneumothorax.
        </div>

        <h5>3. Medication Considerations</h5>
        <p>The following medications may be administered per local protocol or by ALS providers. As an EMT, you should understand their purpose:</p>
        <ul>
            <li><strong>Nitroglycerin (sublingual or topical):</strong> Venodilator that reduces preload (venous pooling) and, at higher doses, reduces afterload (arterial dilation). Given if SBP >100 mmHg (or per local protocol). Contraindications: hypotension, severe bradycardia, RV infarction, recent PDE-5 inhibitor use.</li>
            <li><strong>Furosemide (Lasix):</strong> Loop diuretic that reduces intravascular volume by increasing urine output. Traditionally given IV in the ED; some ALS protocols allow prehospital administration. Note that furosemide takes 20-30 minutes to begin working and primarily reduces preload through venodilation before it produces diuresis. Over-diuresis can cause hypokalemia and hypotension.</li>
            <li><strong>Morphine Sulfate:</strong> Reduces preload through venodilation and reduces anxiety/work of breathing. Use has declined due to risk of respiratory depression; used cautiously, usually by ALS, in severe cases.</li>
        </ul>

        <h5>4. Transport Considerations</h5>
        <p>Patients with ADHF require transport to an emergency department capable of managing acute HF. Consider ALS intercept if the patient is unstable (hypotension, refractory hypoxia, altered mental status). Monitor for deterioration — respiratory failure may require BVM ventilation or advanced airway management. Reassess vitals and lung sounds frequently. CPAP should be continued throughout transport if the patient tolerates it.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Key Warning:</strong> A patient with ADHF who becomes hypotensive (SBP &lt;90 mmHg) despite hypertension being common in early HF — this is a sign of worsening cardiac function and potential cardiogenic shock. These patients have a high mortality rate and require rapid transport with ALS involvement.
        </div>
    </div>`,
    flashcards: [
        { question: "What is the difference between left-sided and right-sided heart failure?", answer: "Left-sided HF: LV fails → blood backs up into pulmonary circulation → pulmonary edema (crackles, dyspnea, orthopnea). Right-sided HF: RV fails → blood backs up into systemic circulation → peripheral edema, JVD, hepatomegaly.", category: "Heart Failure Types" },
        { question: "What are the key signs and symptoms of acute decompensated heart failure?", answer: "Dyspnea, orthopnea, PND, JVD, peripheral edema (pitting), bilateral crackles/rales, pink frothy sputum, tachycardia, hypertension (early), hypotension (ominous), and upright positioning (tripod).", category: "HF Assessment" },
        { question: "What is the single most effective prehospital intervention for acute pulmonary edema?", answer: "CPAP (Continuous Positive Airway Pressure) or BiPAP — it pneumatically splints airways open, reduces preload, reduces work of breathing, and can reduce intubation rates by 50%.", category: "HF Management" },
        { question: "Why should a patient with acute pulmonary edema be kept in an upright sitting position?", answer: "Gravity reduces venous return (preload) to the heart, decreases pulmonary congestion, and optimizes diaphragmatic excursion for better lung expansion. Laying them flat worsens hypoxia.", category: "HF Management" },
        { question: "List common triggers for acute decompensated heart failure.", answer: "Medication non-compliance (stopping diuretics), dietary sodium excess, acute MI/ischemia, infection, uncontrolled hypertension, and dysrhythmias (especially atrial fibrillation).", category: "HF Triggers" },
        { question: "What is the purpose of administering nitroglycerin in ADHF?", answer: "Nitroglycerin is a venodilator (and at higher doses an arterial vasodilator) that reduces preload — decreasing the volume of blood returning to the heart and reducing pulmonary congestion. Given if SBP >100 mmHg per protocol.", category: "HF Medications" },
        { question: "What is the primary mechanism of action of furosemide (Lasix) in heart failure?", answer: "Furosemide is a loop diuretic that increases urine output to reduce intravascular volume. It also causes early venodilation (reducing preload before diuresis begins). Onset is 20-30 minutes IV.", category: "HF Medications" },
        { question: "What does the presence of pink frothy sputum indicate in a patient with respiratory distress?", answer: "It indicates severe pulmonary edema — fluid has entered the alveoli and mixed with red blood cells from capillary rupture. This is a late and ominous sign of acute heart failure.", category: "HF Assessment" }
    ],
    quiz: [
        { q: "Which of the following is the MOST effective prehospital intervention for acute pulmonary edema?", options: ["High-flow oxygen via NRB", "IV furosemide", "CPAP / BiPAP", "Nitroglycerin SL"], correct: 2 },
        { q: "Jugular venous distention (JVD) in a patient with suspected heart failure suggests:", options: ["Left-sided heart failure predominance", "Right-sided heart failure and elevated central venous pressure", "Hypovolemia", "Pneumothorax"], correct: 1 }
    ],
    critical: [
        {
            id: "crit_4_3_1",
            scenario: "You are dispatched to a 78-year-old female with 'difficulty breathing.' She is sitting upright on the edge of her bed, leaning forward with her hands on her knees (tripod position), using accessory muscles, and is unable to speak in full sentences. Her family states she has a history of CHF and 'ran out of her water pills' about 5 days ago. She has been eating salty foods and gained 8 pounds over the past week. Vital signs: BP 168/100, HR 112, RR 32, SpO₂ 84% on room air. Lung auscultation reveals bilateral crackles halfway up both lung fields. You note 3+ pitting edema in both lower extremities and visible JVD at 45°. She has a dry cough but no sputum production yet.",
            question: "What is the most likely cause of this acute decompensation, and what is the priority intervention?",
            options: [
                {t: "Acute decompensated heart failure triggered by medication non-compliance and dietary sodium excess — priority intervention is CPAP/BiPAP to support oxygenation, reduce preload, and decrease work of breathing, combined with high-flow oxygen and upright positioning", f: "Correct. This patient has classic ADHF: she stopped her diuretic, had sodium overload (weight gain), and now presents with severe pulmonary edema. CPAP is the priority intervention and has been shown to dramatically reduce intubation rates."},
                {t: "This is an acute asthma exacerbation — the tripod positioning and wheezing (cardiac asthma) suggest bronchospasm. Priority is albuterol nebulizer treatment", f: "Incorrect. While she has a history of CHF and is in distress, the bilateral crackles (not wheezing), JVD, peripheral edema, weight gain, and diuretic non-compliance are diagnostic of ADHF. 'Cardiac asthma' can cause wheezing but the primary problem is heart failure, not reactive airway disease."}
            ],
            correct: 0,
            explanation: "Medication non-compliance is one of the most common triggers for ADHF exacerbations. Loop diuretics (furosemide) remove excess fluid; when stopped, fluid accumulates, leading to pulmonary and systemic congestion. Physical findings confirm left-sided (crackles, dyspnea) and right-sided (JVD, peripheral edema) failure. CPAP/BiPAP should be applied as early as possible — it provides positive pressure that keeps alveoli open (improving oxygenation), reduces preload (reducing pulmonary congestion), and decreases the work of breathing. Nitroglycerin (if SBP adequate) can further reduce preload. Transport with continued CPAP and frequent reassessment.",
            kpi: "Recognizes ADHF from history and exam, initiates CPAP as priority intervention"
        },
        {
            id: "crit_4_3_2",
            scenario: "You are called to a 72-year-old male with respiratory distress. He is sitting upright in a chair, breathing rapidly, and appears exhausted. His wife states he has been increasingly short of breath over the past 2 days and cannot lie flat. He has a history of CHF, COPD, and hypertension. On exam, he has bilateral wheezes throughout all lung fields with some fine crackles at the bases. He has mild JVD and 1+ ankle edema. Vital signs: BP 148/88, HR 104, RR 28, SpO₂ 89% on room air. He is alert but can only speak 2-3 words between breaths. You note he uses a home oxygen concentrator at 2 L/min at baseline.",
            question: "The presence of both wheezes and crackles in this patient presents a diagnostic challenge. How should the EMT interpret these findings and proceed?",
            options: [
                {t: "This is likely a CHF exacerbation with secondary 'cardiac asthma' from bronchial wall edema — the crackles and JVD point to fluid overload as the primary problem. Apply CPAP, which will treat both the pulmonary edema and the bronchospasm by reducing preload and pneumatic splinting of airways", f: "Correct. In patients with both HF and COPD, distinguishing exacerbations can be difficult. Crackles and JVD point to ADHF as the primary driver. CPAP/BiPAP is beneficial for both conditions and is the appropriate initial intervention."},
                {t: "This is a COPD exacerbation — the wheezes are predominant and the crackles are minimal. Give albuterol nebulizer treatments first and reassess. CPAP may cause pneumothorax in COPD patients", f: "Incorrect. While COPD and CHF frequently coexist, the presence of crackles (even if mild), JVD, ankle edema, and orthopnea suggests ADHF as at least a component. Albuterol alone will not address the fluid overload. CPAP is safe and effective in COPD exacerbations as well (it reduces air trapping and work of breathing). The risk of pneumothorax from CPAP is very low and does not outweigh the benefit."}
            ],
            correct: 0,
            explanation: "'Cardiac asthma' refers to wheezing caused by bronchial wall edema in heart failure — the edema narrows the airways, producing wheezes that can mimic asthma or COPD. The presence of crackles (even fine), JVD, peripheral edema, and orthopnea helps differentiate ADHF from a primary respiratory exacerbation. CPAP/BiPAP is effective in both HF (reduces preload, improves oxygenation) and COPD (reduces air trapping, decreases work of breathing). Albuterol can be given in addition if wheezing is prominent, but it should not delay CPAP in a patient with suspected ADHF. Transport to an ED capable of managing both conditions. Close monitoring for deterioration is essential.'",
            kpi: "Differentiates ADHF from COPD exacerbation and applies CPAP appropriately"
        },
        {
            id: "crit_4_3_3",
            scenario: "You have applied CPAP at 10 cmH₂O to a 68-year-old female with acute pulmonary edema. She initially improved — SpO₂ rose from 82% to 94% and her respiratory rate decreased from 34 to 22. After 8 minutes of transport, she becomes increasingly lethargic and hypotensive. Vital signs now: BP 72/40, HR 56, RR 18 but shallow, SpO₂ 89% on CPAP at 10 cmH₂O. The capnography waveform shows a gradually decreasing EtCO₂ from 38 mmHg to 28 mmHg. Her mental status declines — she is now responding only to painful stimuli.",
            question: "What is the most appropriate interpretation of this deterioration and the correct next action?",
            options: [
                {t: "The patient is deteriorating despite CPAP — worsening oxygenation, hypotension, bradycardia, decreasing EtCO₂, and declining mental status indicate impending respiratory and cardiac arrest. Remove CPAP, begin BVM ventilation with 100% oxygen, and prepare for possible advanced airway management and CPR", f: "Correct. This patient is decompensating with signs of cardiogenic shock and respiratory failure. CPAP may be reducing preload excessively in a preload-dependent patient, or the underlying MI is causing pump failure. Decreasing EtCO₂ with hypotension suggests decreasing cardiac output. BVM ventilation is needed now."},
                {t: "Increase CPAP to 15 cmH₂O to improve oxygenation and treat the hypotension — the patient needs more positive pressure since her SpO₂ dropped", f: "Incorrect. Increasing CPAP would further reduce preload (venous return), likely worsening the hypotension. The combination of hypotension, bradycardia, declining mental status, falling EtCO₂, and dropping SpO₂ despite CPAP signals that the patient is transitioning from compensated to decompensated. More CPAP is not the answer — active ventilation and support of circulation are needed."}
            ],
            correct: 0,
            explanation: "This is a dangerous clinical crossroads. The patient has deteriorated from acute pulmonary edema into cardiogenic shock. The falling EtCO₂ (from 38 to 28 mmHg) with hypotension and declining mental status indicates decreasing cardiac output — less CO₂ is being delivered to the lungs. CPAP, while reducing preload to help pulmonary edema, may have reduced preload too much in a patient whose cardiac output is already tenuous. The patient now needs: removal of CPAP, BVM ventilation with 100% O₂, preparation for advanced airway if needed, consideration of fluid bolus (cautiously, as lungs are wet — ALS judgment needed), and immediate transport. Be prepared for cardiac arrest — have the AED ready.",
            kpi: "Recognizes transition from ADHF to cardiogenic shock and initiates appropriate rescue ventilation"
        }
    ]
},

/* ──────────────────────────────────────────────────────────────────────────────
 * c4s4 – Hypertensive Emergencies
 * ────────────────────────────────────────────────────────────────────────────── */
{
    id: "c4s4",
    shortTitle: "4.4 Hypertensive Emergencies",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Hypertensive Emergencies</h3>

        <p><strong>Hypertension</strong> (elevated blood pressure) is one of the most common medical conditions in the United States, affecting nearly half of all adults. Most patients with chronic hypertension are asymptomatic, and mildly elevated blood pressure discovered incidentally during an EMS call for another complaint generally does not require emergency intervention. However, <strong>severely elevated blood pressure with evidence of acute end-organ damage</strong> constitutes a hypertensive emergency — a life-threatening condition requiring immediate recognition and transport.</p>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical Concept:</strong> The blood pressure number alone does not determine urgency. What matters is whether the elevated pressure is CAUSING acute organ damage. A patient with a BP of 220/120 who is asymptomatic and has no end-organ damage has hypertensive urgency (HTN urgency). A patient with a BP of 180/110 who has acute chest pain, shortness of breath, or neurological symptoms has a hypertensive EMERGENCY.
        </div>

        <h4>Hypertensive Urgency vs. Hypertensive Emergency</h4>
        <table>
            <thead>
                <tr><th>Feature</th><th>Hypertensive Urgency</th><th>Hypertensive Emergency</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Definition</strong></td><td>Severely elevated BP (SBP >180 or DBP >110) WITHOUT evidence of acute end-organ damage</td><td>Severely elevated BP WITH evidence of acute end-organ damage — the elevated pressure is actively damaging organs</td></tr>
                <tr><td><strong>End-Organ Damage</strong></td><td>None</td><td>Present — involving one or more organ systems</td></tr>
                <tr><td><strong>Symptoms</strong></td><td>May have headache, anxiety, or be asymptomatic (incidental finding)</td><td>Specific symptoms related to the affected organ system (see below)</td></tr>
                <tr><td><strong>EMS Urgency</strong></td><td>Non-emergent transport — the patient should be evaluated by a physician but treatment can be gradual (hours to days of oral medication adjustment)</td><td><strong>Emergency transport</strong> — immediate intervention required to prevent irreversible organ damage. Rapid transport with continuous monitoring</td></tr>
                <tr><td><strong>Prehospital Tx</strong></td><td>Supportive care, reassurance, transport for medical evaluation. Do NOT attempt to rapidly lower BP prehospitally</td><td>Supportive care, treat the presenting symptoms (chest pain, dyspnea, etc.), rapid transport. Rapidly lowering BP is an in-hospital intervention</td></tr>
            </tbody>
        </table>

        <h4>End-Organ Damage in Hypertensive Emergency</h4>
        <p>Extremely high blood pressure can damage blood vessels throughout the body, leading to dysfunction in multiple organ systems. The specific symptoms depend on which organs are affected:</p>
        <table>
            <thead>
                <tr><th>Organ System</th><th>Condition</th><th>Signs and Symptoms</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>Central Nervous System</strong></td><td>Hypertensive encephalopathy, intracerebral hemorrhage, ischemic stroke</td><td>Severe headache (especially occipital), visual disturbances (blurred vision, diplopia, vision loss), altered mental status, confusion, seizures, focal neurological deficits (facial droop, unilateral weakness, slurred speech)</td></tr>
                <tr><td><strong>Cardiovascular</strong></td><td>Acute coronary syndrome, acute pulmonary edema, aortic dissection</td><td>Chest pain (may indicate ACS or aortic dissection), dyspnea (from pulmonary edema), tearing back pain (aortic dissection), BP differential between arms (aortic dissection)</td></tr>
                <tr><td><strong>Renal</strong></td><td>Acute kidney injury</td><td>Decreased urine output (oliguria), flank pain, hematuria (usually silent — detected by lab work, not field assessment)</td></tr>
                <tr><td><strong>Ocular</strong></td><td>Hypertensive retinopathy (papilledema)</td><td>Blurred vision, visual scotomata (blind spots), headache — often noted by the patient as 'sudden vision change'</td></tr>
            </tbody>
        </table>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
            <strong>Critical Warning — Aortic Dissection:</strong> Aortic dissection is a catastrophic complication of hypertensive emergency. Suspect it when a patient presents with sudden, severe, tearing or ripping chest pain that radiates to the back, between the shoulder blades, or into the abdomen. A BP differential (>20 mmHg difference between arms) or a pulse deficit is a critical diagnostic clue. These patients are extremely unstable and need immediate surgical intervention.
        </div>

        <h4>Common Causes of Hypertensive Emergency</h4>
        <ul>
            <li><strong>Essential (primary) hypertension:</strong> Chronic hypertension that has been poorly controlled or untreated. This is the most common cause. Patients may have run out of medications or stopped taking them.</li>
            <li><strong>Medication non-compliance:</strong> The most common trigger for a hypertensive crisis. Patients who suddenly stop their antihypertensive medications (especially beta-blockers or clonidine) can experience severe rebound hypertension.</li>
            <li><strong>Renal disease:</strong> Renovascular hypertension, renal artery stenosis, glomerulonephritis, or chronic kidney disease can cause severe hypertension.</li>
            <li><strong>Preeclampsia/Eclampsia:</strong> Hypertensive emergency in pregnancy (2nd or 3rd trimester or postpartum). Defined as BP ≥160/110 with proteinuria. Eclampsia = preeclampsia + seizures. Life-threatening to both mother and fetus.</li>
            <li><strong>Substance use:</strong> Cocaine, amphetamines, methamphetamine, phencyclidine (PCP), and other stimulants can cause severe hypertension through sympathetic overstimulation and vasoconstriction.</li>
            <li><strong>Thyroid storm:</strong> Severe hyperthyroidism causing extreme hypertension, tachycardia, fever, and altered mental status.</li>
            <li><strong>Increased intracranial pressure (ICP) — Cushing's reflex:</strong> The body's response to rising ICP: hypertension (with a <strong>widening pulse pressure</strong>), bradycardia, and irregular breathing. This is a late sign of impending brain herniation.</li>
        </ul>

        <h4>Assessment of the Patient with Severe Hypertension</h4>
        <p>Your assessment should focus on identifying end-organ damage rather than obsessing over the exact BP number:</p>
        <ul>
            <li><strong>History:</strong> History of hypertension? Medications? Compliance? Recent changes? Recreational drug use? Pregnancy? Headache, vision changes, chest pain, dyspnea?</li>
            <li><strong>Physical Exam:</strong> Full set of vital signs — BP in BOTH arms (differential >20 mmHg is concerning for aortic dissection), heart rate, respiratory rate, SpO₂. Neurological exam (cranial nerves, motor/sensory, GCS). Cardiac exam (chest pain, JVD, lung sounds for crackles).</li>
            <li><strong>BP Measurement:</strong> Use the correct cuff size. Take a manual BP to confirm the monitor reading. Recheck in the other arm. Document carefully.</li>
        </ul>

        <h4>Prehospital Management and Transport Considerations</h4>
        <p>Crucially, the role of the EMT in hypertensive emergencies is <strong>recognition, supportive care, and transport</strong> — not aggressive BP reduction. Rapidly lowering blood pressure in the prehospital setting can actually worsen outcomes by reducing perfusion to vital organs that have become accustomed to high pressures (the brain's autoregulation curve has shifted rightward in chronic hypertension).</p>
        <ul>
            <li><strong>Recognition:</strong> Identify that the patient has a hypertensive emergency (high BP + end-organ damage), not just high numbers.</li>
            <li><strong>Supportive care:</strong> Position of comfort (usually semi-Fowler's to avoid increasing ICP), high-flow oxygen if hypoxic, treat specific symptoms per protocol (e.g., chest pain → aspirin, dyspnea → CPAP).</li>
            <li><strong>Calm the patient:</strong> Anxiety increases sympathetic output, which further elevates BP. Speak calmly, explain what you are doing, and keep the environment quiet.</li>
            <li><strong>Destination:</strong> Transport to an emergency department capable of managing hypertensive emergencies. Patients with neurological symptoms (stroke, seizure, altered mental status) should go to a stroke center if available. Patients with suspected aortic dissection need a facility with cardiothoracic surgery.</li>
            <li><strong>Monitoring:</strong> Recheck vital signs every 5 minutes (unstable) or every 15 minutes (stable). Watch for any deterioration in neurological status, new chest pain, or increasing respiratory distress.</li>
            <li><strong>What NOT to do:</strong> Do NOT attempt to forcefully lower BP in the field (except per specific ALS protocol). Do NOT give nitroglycerin solely to lower BP — it is for ACS or ADHF. Do NOT give the patient their own antihypertensive medication without medical direction. Do NOT waste scene time — rapid transport is indicated for true hypertensive emergencies.</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl — Cushing's Reflex:</strong> If you encounter a patient with hypertension, bradycardia, and irregular respirations — suspect <strong>increased intracranial pressure</strong> (Cushing's triad). This is a pre-terminal sign of brain herniation. The hypertension is the body's attempt to maintain cerebral perfusion pressure against rising ICP. Do NOT try to lower the BP — this could cause brain death by reducing cerebral perfusion. Rapid transport to a neurosurgical center is the priority.
        </div>
    </div>`,
    flashcards: [
        { question: "What is the difference between hypertensive urgency and hypertensive emergency?", answer: "Both have severely elevated BP (SBP >180 or DBP >110). Urgency has NO acute end-organ damage. Emergency HAS acute end-organ damage affecting CNS, cardiovascular, renal, or ocular systems.", category: "HTN Classification" },
        { question: "List the signs and symptoms of end-organ damage in hypertensive emergency.", answer: "CNS: severe headache, vision changes, altered mental status, seizures, focal neuro deficits. CV: chest pain, dyspnea, tearing back pain (aortic dissection). Renal: decreased urine output.", category: "HTN Emergency Recognition" },
        { question: "What is the most common trigger for a hypertensive crisis?", answer: "Medication non-compliance — patients who stop their antihypertensives (especially beta-blockers or clonidine) can experience severe rebound hypertension.", category: "HTN Causes" },
        { question: "Should an EMT attempt to aggressively lower a patient's blood pressure in the field?", answer: "No. Rapidly lowering BP can reduce perfusion to vital organs and worsen outcomes. The EMT's role is recognition, supportive care, and transport — not BP reduction.", category: "HTN Management" },
        { question: "What is Cushing's triad, and why is it important?", answer: "Cushing's triad: hypertension (widening pulse pressure), bradycardia, and irregular respirations. It indicates increased ICP and impending brain herniation. Do NOT lower the BP — it is protecting cerebral perfusion.", category: "HTN Recognition" },
        { question: "What are the key features of aortic dissection on history and exam?", answer: "Sudden, severe, tearing/ripping chest pain radiating to the back; BP differential >20 mmHg between arms; pulse deficits; history of hypertension. Requires immediate surgical evaluation.", category: "HTN Emergency" },
        { question: "How should an EMT manage a patient with hypertensive emergency?", answer: "Supportive care, position of comfort, oxygen if hypoxic, treat presenting symptoms per protocol (aspirin for chest pain, CPAP for pulmonary edema), calm the patient, and transport to an appropriate facility. Do NOT lower BP prehospitally.", category: "HTN Management" },
        { question: "What is preeclampsia/eclampsia and how is it defined in terms of blood pressure?", answer: "Preeclampsia is pregnancy-induced hypertension (BP ≥160/110 with proteinuria) in the 2nd/3rd trimester or postpartum. Eclampsia = preeclampsia + seizures. A true obstetric and hypertensive emergency.", category: "HTN Special Populations" }
    ],
    quiz: [
        { q: "Which of the following is the defining feature that distinguishes hypertensive emergency from hypertensive urgency?", options: ["The absolute systolic blood pressure value", "The diastolic blood pressure value", "The presence of acute end-organ damage", "The patient's age"], correct: 2 },
        { q: "[HARD] A 62-year-old male with a history of hypertension presents with a sudden, severe 'ripping' chest pain that radiates to his back. BP is 186/94 in the right arm and 142/78 in the left arm. HR is 108 and regular. Lung sounds are clear. What is the most likely diagnosis and correct transport decision?", options: ["Acute coronary syndrome — transport to the nearest PCI-capable hospital", "Aortic dissection with a significant BP differential between arms — transport emergently to a facility with cardiothoracic surgery capability", "Pulmonary embolism — transport for CT angiography", "Pericarditis — transport for anti-inflammatory treatment"], correct: 1, explanation: "A tearing/ripping chest pain radiating to the back with a BP differential >20 mmHg between arms is classic for aortic dissection until proven otherwise. The pulse deficit occurs when the dissection flap occludes the subclavian artery. These patients need a surgeon, not just a cardiologist." },
        { q: "Cushing's triad (hypertension, bradycardia, irregular breathing) indicates:", options: ["Aortic dissection", "Increased intracranial pressure with impending herniation", "Acute myocardial infarction", "Hypertensive urgency"], correct: 1 }
    ],
    critical: [
        {
            id: "crit_4_4_1",
            scenario: "You are called to a 55-year-old male with a severe headache. He states the headache started about 2 hours ago and is 'the worst headache of my life.' He describes it as a pounding, occipital headache that is not relieved by over-the-counter pain medication. He has a history of hypertension but admits he stopped taking his medications about 3 weeks ago because 'they made me feel tired.' He is accompanied by his wife, who says he has been acting 'confused and irritable' all day. Vital signs: BP 224/128, HR 96, RR 18, SpO₂ 96%. On exam, he is awake but confused, and you note he does not track well when you ask him to follow your finger. He denies chest pain, dyspnea, or focal weakness.",
            question: "Does this patient have hypertensive urgency or hypertensive emergency, and what is the most appropriate prehospital management?",
            options: [
                {t: "Hypertensive EMERGENCY — the patient has evidence of CNS end-organ damage (severe headache, confusion, visual changes) from severely elevated BP. Provide supportive care, calm the patient, position semi-Fowler's, and transport emergently to a facility capable of managing hypertensive emergencies. Do NOT attempt to lower BP prehospitally", f: "Correct. Severe headache + confusion + visual changes + BP 224/128 + medication non-compliance = hypertensive emergency with hypertensive encephalopathy. A true emergency requiring rapid transport and hospital-based BP management."},
                {t: "Hypertensive URGENCY — the patient has high BP but no end-organ damage since he has no chest pain, dyspnea, or focal weakness. The confusion is from his headache, not end-organ damage. Transport non-emergent", f: "Incorrect. Severe headache, confusion, and visual changes ARE end-organ damage (CNS involvement = hypertensive encephalopathy). End-organ damage does not require chest pain or focal weakness. Altered mental status alone is a serious sign of CNS damage from accelerated hypertension."}
            ],
            correct: 0,
            explanation: "This patient has classic features of hypertensive encephalopathy — severe headache (often occipital), confusion/irritability, and visual changes in the setting of severely elevated BP with medication non-compliance. Hypertensive encephalopathy is a form of CNS end-organ damage caused by failure of cerebral autoregulation. The brain's blood vessels cannot maintain constant perfusion at such high pressures, leading to cerebral edema and neurological symptoms. Prehospital management focuses on recognition, supportive care, and rapid transport. Do NOT give antihypertensives in the field — rapid BP lowering can cause cerebral hypoperfusion and stroke. The patient needs hospital-based IV antihypertensives (e.g., nicardipine, labetalol) with close neurological monitoring. Notify the receiving hospital of the suspected hypertensive emergency.",
            kpi: "Differentiates hypertensive emergency from urgency and identifies CNS end-organ damage"
        },
        {
            id: "crit_4_4_2",
            scenario: "You are dispatched to a 30-year-old female who is 32 weeks pregnant complaining of a severe headache and 'spots in her vision.' She states the headache began this morning and has progressively worsened. She has had no prenatal care and is not sure if she has had high blood pressure before. Vital signs: BP 178/112, HR 104, RR 20, SpO₂ 97%. She is awake, alert, and oriented but appears anxious. She has 2+ pitting edema in both lower extremities. Her husband states she has been more irritable than usual. She denies chest pain or dyspnea. She denies any seizure activity.",
            question: "What is the most likely diagnosis, and what specific risks must the EMT consider during transport?",
            options: [
                {t: "Preeclampsia — a hypertensive emergency of pregnancy (BP ≥160/110 with proteinuria/symptoms). The patient is at risk for progression to eclampsia (seizures), stroke, and placental abruption. Transport emergently with lights dimmed, minimize stimulation, position left lateral recumbent to optimize uterine blood flow, and have seizure precautions ready", f: "Correct. BP ≥160/110 with symptoms (headache, visual changes, edema) in a pregnant patient in the 2nd/3rd trimester meets criteria for preeclampsia. Eclampsia (seizures) can develop suddenly. Magnesium sulfate is the in-hospital treatment for seizure prophylaxis."},
                {t: "This is a normal pregnancy finding — BP can be slightly elevated in the third trimester, and the headache and vision changes are likely from fatigue and stress. Transport without priority", f: "Incorrect. BP ≥160/110 in pregnancy with headache, visual changes, and edema is NOT normal. Preeclampsia is a life-threatening condition for both mother and fetus and requires urgent evaluation. Delayed recognition can lead to eclampsia, stroke, or maternal death."}
            ],
            correct: 0,
            explanation: "Preeclampsia is defined as new-onset hypertension (BP ≥140/90) with proteinuria after 20 weeks of gestation. Severe preeclampsia is BP ≥160/110 with symptoms (headache, visual changes, right upper quadrant pain, pulmonary edema, or thrombocytopenia). This patient meets criteria for severe preeclampsia and is at imminent risk for eclampsia (preeclampsia + generalized seizures). EMS management includes: left lateral recumbent positioning (prevents supine hypotensive syndrome — compression of the IVC by the gravid uterus reduces cardiac output), dim lights and minimize stimulation (bright lights/noise can trigger seizures), oxygen to maintain SpO₂ ≥94%, have seizure precautions ready (suction, airway equipment), and transport emergently to a facility with obstetrics capabilities. Do not administer any medications without direct medical direction.",
            kpi: "Recognizes preeclampsia as a hypertensive emergency and implements seizure precautions"
        },
        {
            id: "crit_4_4_3",
            scenario: "You are called to a 63-year-old male found unresponsive by his wife. She states he was watching television and suddenly collapsed to the floor about 10 minutes ago. On arrival, he is lying supine on the floor. He is unconscious with snoring respirations. You open his airway with a jaw thrust and note that his left side is flaccid — his left arm and leg do not move and his left facial droop is present. Vital signs: BP 198/118, HR 52 (regular), RR 8 (irregular with periodic pauses), SpO₂ 88% on room air. Pupils: right pupil is 5 mm and reactive, left pupil is 2 mm and sluggish.",
            question: "What does the combination of hypertension, bradycardia, and irregular respirations (Cushing's triad) suggest, and what is the EMT's priority?",
            options: [
                {t: "Cushing's triad indicates significantly increased intracranial pressure from a likely intracerebral hemorrhage — the hypertension is compensatory to maintain cerebral perfusion. The EMT's priority is airway management (ventilate at 10/min with BVM to maintain mild hyperventilation if signs of herniation), elevate the head of the stretcher 30°, and transport rapidly to a stroke center with neurosurgical capability. Do NOT treat the hypertension", f: "Correct. Cushing's triad = hypertension, bradycardia, irregular breathing = rising ICP. The high BP is protecting brain perfusion. Lowering it could cause brain death. The flaccid left side, anisocoria (unequal pupils), and decreased LOC confirm a catastrophic intracranial event."},
                {t: "The patient is having a heart attack with cardiogenic shock — the hypertension is from pain and the bradycardia is from the inferior wall MI. Treat with aspirin and transport to a PCI-capable center", f: "Incorrect. The focal neurological findings (left-sided weakness, facial droop, anisocoria) point to a neurological cause, not a primary cardiac cause. Cushing's triad is a classic finding of elevated ICP. Aspirin would be contraindicated if there is intracranial hemorrhage. The hypertension is compensatory, not a primary problem."}
            ],
            correct: 0,
            explanation: "Cushing's triad (hypertension with widening pulse pressure, bradycardia, irregular respirations) is a late and ominous sign of elevated intracranial pressure. It represents the body's desperate attempt to maintain cerebral perfusion pressure (CPP) against rising ICP (CPP = MAP - ICP). As ICP rises, the body increases MAP to keep blood flowing to the brain. This patient likely has a large intracerebral hemorrhage (hypertensive bleed) causing mass effect and brainstem compression (anisocoria suggests third nerve compression from uncal herniation). The EMT's priorities: protect the airway (the patient is unconscious with irregular, inadequate breathing — BVM ventilation is indicated), mild hyperventilation (not aggressive — 16-20/min can be considered if signs of herniation are present, though this is controversial), elevate the head 30° to promote venous drainage, and transport emergently to a stroke center with neurosurgery. Do NOT lower the BP. The combination of hypertension + bradycardia in this context is a neurological emergency, not a primary cardiac problem.",
            kpi: "Recognizes Cushing's triad as a sign of elevated ICP and prioritizes neurological management over BP control"
        }
    ]
}

];
