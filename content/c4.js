/* ========== Chapter 4 – Cardiovascular & Resuscitation ========== */
window.CPG_DATA = {
    id: "c4",
    title: "Cardiovascular & Resuscitation",
    shortTitle: "4. Cardiovascular & Resuscitation",
    sections: [
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
},
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
                    "Yes — a new LBBB with ischemic symptoms is treated as a STEMI equivalent (confirm with Sgarbossa criteria where available). Activate the cath lab and expedite transport",
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
    },
    {
        id: "c4s9",
        shortTitle: "4.9 Post-Cardiac-Arrest (ROSC) Care",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Post-Cardiac-Arrest (ROSC) Care</h3>

            <h4>Recognising Return of Spontaneous Circulation (ROSC)</h4>
            <p><strong>Return of Spontaneous Circulation (ROSC)</strong> is the resumption of a perfusing cardiac rhythm after cardiac arrest. It is the immediate goal of resuscitation and marks a critical transition from the arrest algorithm to post-arrest care. Recognising ROSC early prevents unnecessary interruptions in care and guides the post-resuscitation treatment plan. The definitive sign of ROSC is a <strong>palpable central pulse</strong> (carotid or femoral) accompanied by a measurable blood pressure. However, ROSC may be identified through several converging findings:</p>
            <ul>
                <li><strong>Palpable pulse:</strong> A sudden appearance of a strong carotid or femoral pulse indicates mechanical cardiac activity has returned. Check no longer than 10 seconds — if you are unsure, resume CPR.</li>
                <li><strong>Sudden rise in EtCO₂:</strong> A sharp increase in end-tidal carbon dioxide (typically >35–40 mmHg) suggests that pulmonary blood flow has been restored. This is often the first objective sign of ROSC visible on the capnograph.</li>
                <li><strong>Measurable blood pressure:</strong> A systolic BP becomes obtainable (even if initially low). Post-arrest hypotension is common and requires immediate attention.</li>
                <li><strong>Spontaneous breathing or gasping:</strong> Gasping (agonal respirations) may be present and does NOT alone indicate ROSC, but the return of regular, purposeful breathing efforts is a positive sign.</li>
                <li><strong>Sudden improvement in skin colour:</strong> The patient may transition from pale/cyanotic to pink as perfusion returns.</li>
                <li><strong>Movement or eye-opening:</strong> The patient may begin to move, cough, groan, or open their eyes.</li>
            </ul>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Critical Point:</strong> Do NOT stop CPR to check for ROSC until it is time for a rhythm check (every 2 minutes). If the AED/ monitor prompts "no shock advised" or you see an organised rhythm AND the patient has a pulse, ROSC has been achieved. EtCO₂ rising above 35–40 mmHg during CPR often precedes ROSC by 30–60 seconds — continue high-quality CPR until the rhythm check confirms it.
            </div>

            <h4>Post-ROSC: The "H's and T's" Prevention Phase</h4>
            <p>Once ROSC is achieved, the focus shifts to preventing rearrest and preserving end-organ function. Post-cardiac-arrest syndrome involves four key pathological processes: post-arrest brain injury, myocardial dysfunction, systemic ischaemia/reperfusion injury, and the underlying precipitating pathology. The EMT's goal is to stabilise the patient and transport to an appropriate facility while avoiding three common pitfalls: <strong>hypotension, hypoxia, and hyperoxia</strong>.</p>

            <h4>Oxygenation and Ventilation Targets</h4>
            <p>Titrate oxygen delivery carefully. Both hypoxia AND hyperoxia are harmful in the post-arrest patient:</p>
            <ul>
                <li><strong>SpO₂ target:</strong> Maintain 94–98%. While the patient is being stabilised, use a non-rebreather mask at 10–15 L/min or assist with BVM if breathing is inadequate. Once SpO₂ is reliably above 94%, reduce FIO₂ to avoid hyperoxia.</li>
                <li><strong>Ventilation rate:</strong> 10–12 breaths/min (1 breath every 5–6 seconds). <strong>Avoid hyperventilation</strong> — excessive ventilation rates decrease venous return, reduce cardiac output, worsen cerebral perfusion, and cause respiratory alkalosis. Each breath should produce gentle, visible chest rise.</li>
                <li><strong>EtCO₂ target:</strong> Maintain 35–45 mmHg if waveform capnography is available. Both hypo- and hypercapnia worsen neurological outcomes.</li>
                <li><strong>Advanced airway:</strong> Consider insertion of a supraglottic airway or assist ventilations with BVM if the patient's respiratory effort is inadequate.</li>
            </ul>

            <h4>Blood Pressure Support</h4>
            <p>Post-arrest hypotension (SBP &lt;90 mmHg) is common due to myocardial stunning and vasodilation. Hypotension significantly worsens neurological outcomes:</p>
            <ul>
                <li><strong>SBP target:</strong> Maintain ≥90 mmHg (or MAP ≥65 mmHg).</li>
                <li><strong>Fluid bolus:</strong> Administer a 20 mL/kg bolus of normal saline or lactated Ringer's if the patient is hypotensive and not in overt cardiogenic pulmonary oedema.</li>
                <li>If available per local protocol, paramedic-level vasopressor support (norepinephrine, dopamine) may be indicated for refractory hypotension.</li>
                <li><strong>Rearrest prevention:</strong> Hypotension is a strong predictor of rearrest during transport. Reassess blood pressure every 5 minutes.</li>
            </ul>

            <h4>12-Lead ECG — Identifying STEMI</h4>
            <p>Obtain a <strong>12-lead ECG</strong> as soon as possible after ROSC is achieved. Up to 70% of out-of-hospital cardiac arrest patients have significant coronary artery disease. A 12-lead ECG identifies ST-segment elevation myocardial infarction (STEMI), which requires immediate transport to a <strong>percutaneous coronary intervention (PCI) capable centre</strong>. If a STEMI is identified, activate the catheterisation lab from the field per local protocol.</p>

            <h4>Targeted Temperature Management (TTM)</h4>
            <p>Targeted temperature management (therapeutic hypothermia) is the controlled cooling of the post-arrest patient to 32–36°C for 24 hours to reduce neurological injury. In the prehospital setting:</p>
            <ul>
                <li><strong>EMS role:</strong> Initiate passive cooling if ordered by medical direction — remove the patient's clothing, avoid active external warming, and administer cold (4°C) IV saline boluses per protocol.</li>
                <li><strong>Shivering:</strong> Shivering counteracts cooling and increases metabolic demand. Report shivering to the receiving team.</li>
                <li><strong>Contraindications:</strong> TTM is generally not initiated in patients who are awake and following commands, or in those with do-not-resuscitate (DNR) orders / terminal illness.</li>
                <li><strong>Transport destination:</strong> Patients with ROSC should be transported to a facility capable of post-arrest care, including TTM, PCI, and critical care. If these are not available at the closest ED, consider bypass per protocol to a <strong>cardiac arrest centre</strong>.</li>
            </ul>

            <h4>Transport Decision: Cardiac Arrest Centre vs. Closest ED</h4>
            <p>After ROSC, the transport destination decision significantly affects outcomes:</p>
            <table>
                <thead>
                    <tr><th>Factor</th><th>Go to Cardiac Arrest Centre</th><th>Go to Closest ED</th></tr>
                </thead>
                <tbody>
                    <tr><td>STEMI identified on 12-lead</td><td>Yes — PCI capability essential</td><td>Only if cardiac centre is >30 min away</td></tr>
                    <tr><td>ROSC with haemodynamic instability</td><td>Yes — if within reasonable transport time</td><td>Closest ED for stabilisation, then transfer</td></tr>
                    <tr><td>Rearrest during transport</td><td>Consider closest ED</td><td>Yes — rearrest requires immediate ED care</td></tr>
                    <tr><td>No ROSC in the field</td><td>Follow local termination / transport protocol</td><td>Per local protocol</td></tr>
                </tbody>
            </table>
            <p>In general, post-ROSC patients benefit from transport to a comprehensive cardiac arrest centre with PCI, TTM, and critical care capabilities. However, prolonged transport times (&gt;30 minutes) in haemodynamically unstable patients may favour the closest ED for initial stabilisation.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Warning — The "Triple H" Threat:</strong> Three preventable complications commonly cause rearrest or neurological worsening in post-ROSC patients. Memorise them: <strong>Hypotension</strong> (SBP &lt;90 — give fluids, support BP), <strong>Hypoxia</strong> (SpO₂ &lt;94% — increase oxygen), <strong>Hyperoxia</strong> (SpO₂ 100% on high-flow O₂ — wean oxygen to 94–98%). Equally dangerous: <strong>Hyperventilation</strong> (reduces cardiac output and cerebral perfusion — ventilate at 10–12/min, not faster).
            </div>
        </div>`,
        flashcards: [
            { question: "What is the definitive sign that ROSC has been achieved?", answer: "A palpable central pulse (carotid or femoral) accompanied by a measurable blood pressure", category: "ROSC Recognition" },
            { question: "What capnography finding often precedes ROSC by 30–60 seconds?", answer: "A sudden sharp rise in EtCO₂ above 35–40 mmHg, indicating restored pulmonary blood flow", category: "ROSC Recognition" },
            { question: "What is the target SpO₂ range for a post-ROSC patient?", answer: "94–98% — both hypoxia and hyperoxia are harmful", category: "Post-ROSC Management" },
            { question: "What ventilation rate should be used for an adult post-ROSC patient with a pulse?", answer: "10–12 breaths/min (1 breath every 5–6 seconds) — avoid hyperventilation", category: "Post-ROSC Management" },
            { question: "What is the minimum systolic blood pressure target in the post-ROSC patient?", answer: "SBP ≥90 mmHg (or MAP ≥65 mmHg) to ensure cerebral and coronary perfusion", category: "Post-ROSC Management" },
            { question: "Why is a 12-lead ECG obtained as soon as possible after ROSC?", answer: "To identify STEMI, which requires transport to a PCI-capable centre for emergent coronary intervention", category: "Post-ROSC Management" },
            { question: "What is the purpose of targeted temperature management (TTM) after cardiac arrest?", answer: "Controlled cooling to 32–36°C for 24 hours to reduce neurological injury and improve survival outcomes", category: "TTM" },
            { question: "What are the 'Triple H' threats in post-ROSC care?", answer: "Hypotension (SBP <90), Hypoxia (SpO₂ <94%), and Hyperoxia (excessive O₂) — all worsen outcomes", category: "Post-ROSC Management" }
        ],
        quiz: [
            { q: "Which of the following is the EARLIEST objective sign that ROSC may be occurring during CPR?", options: ["Return of spontaneous breathing", "A sharp rise in EtCO₂ on the capnograph", "The patient opens their eyes", "The monitor shows a sinus rhythm"], correct: 1 },
            { q: "A post-ROSC patient has an SpO₂ of 100% on a non-rebreather at 15 L/min. The MOST appropriate action is:", options: ["Continue the same oxygen delivery — 100% saturation is ideal", "Wean oxygen to target SpO₂ 94–98% to avoid hyperoxia", "Switch to a nasal cannula at 6 L/min regardless of saturation", "Remove oxygen entirely since saturation is adequate"], correct: 1 },
            { q: "[HARD] A 58-year-old male achieves ROSC after 18 minutes of CPR for witnessed VF arrest. The 12-lead ECG shows 4 mm ST elevation in leads V1–V4. His SBP is 82 mmHg, HR 110, SpO₂ 96% on NRB. Which combination of transport destination and immediate intervention is MOST appropriate?", options: ["Transport to the closest ED — the patient is hypotensive and needs stabilisation first", "Initiate fluid bolus of 20 mL/kg NS, notify the PCI-capable centre of a STEMI alert, and transport there for emergent catheterisation", "Begin TTM with cold saline, transport to closest ED regardless of ECG findings", "Continue BVM ventilation at 20/min to lower the EtCO₂ and reduce reperfusion injury"], correct: 1 }
        ],
        critical: [
            {
                id: "crit_4_9_1",
                scenario: "You are performing high-quality CPR on a 64-year-old female who collapsed at home. Witnessed arrest, bystander CPR initiated immediately. After 8 minutes, the AED advises 'no shock advised' and you pause to check for a pulse. You feel a strong carotid pulse. The waveform capnograph suddenly jumps from 28 mmHg to 52 mmHg. The patient begins to gasp irregularly. Her skin is still pale but less mottled. Your partner prepares to move the patient to the stretcher.",
                question: "What is the PRIORITY action immediately after confirming ROSC in this patient?",
                options: [
                    {t: "Reassess pulse, obtain vital signs (including BP), titrate oxygen to SpO₂ 94–98%, and prepare for 12-lead ECG acquisition", f: "Correct — After confirming ROSC, the priority is reassessment and stabilisation: confirm a sustained pulse, obtain a blood pressure to assess for hypotension, ensure adequate oxygenation (but avoid hyperoxia), acquire a 12-lead ECG to identify STEMI, and prepare the patient for transport to an appropriate facility."},
                    {t: "Immediately apply cold packs to the patient's groin and axillae to initiate therapeutic hypothermia", f: "Incorrect — While TTM is an important post-ROSC intervention, the immediate priorities are A (airway patency), B (adequate ventilation at 10–12/min), and C (blood pressure support). TTM should be initiated per protocol but does not take priority over haemodynamic stabilisation and 12-lead acquisition."}
                ],
                correct: 0,
                explanation: "The immediate post-ROSC phase is fragile. The priority is: 1) Confirm sustained ROSC (palpable pulse, BP). 2) Manage airway/breathing — titrate O₂ to SpO₂ 94–98%, ventilate at 10–12/min. 3) Support circulation — obtain BP, give fluid bolus if hypotensive. 4) Acquire 12-lead ECG. 5) Make transport destination decision. TTM is important but is initiated after initial haemodynamic stabilisation. The capnography rise (+52) confirms ROSC — do not interrupt care to celebrate; the patient is at high risk of rearrest.",
                kpi: "Prioritises post-ROSC reassessment and stabilisation over secondary interventions"
            },
            {
                id: "crit_4_9_2",
                scenario: "Your team achieves ROSC in a 52-year-old man following a witnessed cardiac arrest. A 12-lead shows an acute inferior STEMI. The patient's BP is 88/52, HR 115 sinus tachycardia, RR 14, SpO₂ 98% on a non-rebreather. The nearest hospital is 8 minutes away but does not have PCI capability. The nearest PCI centre is 22 minutes away. Your partner suggests going to the closest ED because the BP is low and the patient might rearrest. The patient is still not fully conscious (opens eyes to pain only).",
                question: "Which transport decision BEST balances the need for definitive care with haemodynamic risk?",
                options: [
                    {t: "Transport to the PCI centre (22 min) — the STEMI requires emergent catheterisation, and the transport time is reasonable. Administer fluid bolus (20 mL/kg NS) en route to support BP", f: "Correct — This patient has a STEMI with a field-identified indication for emergent PCI. Transport to a non-PCI hospital delays definitive care and exposes the patient to a second transfer. A 22-minute transport is reasonable if BP is supported en route with fluids. Notify the PCI centre for a STEMI alert."},
                    {t: "Transport to the closest ED (8 min) — the patient is hypotensive and semi-conscious, at high risk of rearrest. The closest ED can stabilise and transfer for PCI later", f: "Incorrect — While the patient is at risk of rearrest, transport to the closest ED (non-PCI) delays definitive care by at least 60–90 minutes (ED evaluation, transfer arrangements, second ambulance transport). A 22-minute transport to the PCI centre with fluid resuscitation en route is the preferred approach for STEMI post-ROSC."}
                ],
                correct: 0,
                explanation: "Post-ROSC patients with STEMI benefit from direct transport to a PCI-capable centre when transport time is ≤30 minutes. The field-to-balloon time directly affects survival. Manage hypotension en route with 20 mL/kg NS bolus. Monitor for rearrest and be prepared to resume CPR. The closest ED without PCI capability would delay definitive coronary intervention by a median of 90 minutes.",
                kpi: "Transport destination decision-making in post-ROSC STEMI"
            },
            {
                id: "crit_4_9_3",
                scenario: "A 70-year-old woman achieves ROSC after a prolonged arrest (estimated 25 minutes of CPR). She has been intubated by a paramedic and is being ventilated. As you prepare for transport, you note that the respiratory therapist on your team is ventilating at a rate of approximately 22 breaths/min with visibly large chest rise. The patient's SpO₂ is 99%, BP is 118/74, and EtCO₂ reads 22 mmHg. The patient is groaning and trying to move.",
                question: "What is the MOST important ventilation change to make in this post-ROSC patient?",
                options: [
                    {t: "Reduce the ventilation rate to 10–12 breaths/min with gentler volumes — hyperventilation causes respiratory alkalosis, reduced cerebral blood flow, and decreased cardiac output", f: "Correct — The current rate of 22/min is far too fast. Hyperventilation in the post-ROSC patient: 1) Decreases venous return (reduced preload → lower cardiac output). 2) Causes cerebral vasoconstriction (hypocapnia → reduced cerebral blood flow). 3) Worsens neurological injury. The low EtCO₂ (22 mmHg) confirms significant hypocapnia from excessive ventilation. Target 10–12 breaths/min and gentle chest rise."},
                    {t: "Increase the rate further to 26–28/min — the patient is groaning and moving, which indicates high metabolic demand requiring more ventilation", f: "Incorrect — The patient's movement indicates neurological activity (a good sign), but increased ventilation rate worsens outcomes. The EtCO₂ of 22 mmHg already confirms severe hypocapnia. Hyperventilation does not increase oxygen delivery — it decreases cardiac output and cerebral perfusion. Target a rate of 10–12/min with an EtCO₂ of 35–45 mmHg."}
                ],
                correct: 0,
                explanation: "Hyperventilation is one of the most common and most harmful errors in post-ROSC care. Excess ventilation increases intrathoracic pressure, reducing venous return and cardiac output. Each positive-pressure breath also reduces cerebral perfusion directly. The resulting hypocapnia causes cerebral vasoconstriction. Target: 10–12 breaths/min, enough volume for gentle chest rise, EtCO₂ 35–45 mmHg. The patient's SpO₂ is already 99% — aggressive ventilation is not improving oxygenation, it is harming circulation.",
                kpi: "Avoidance of hyperventilation in post-arrest care"
            }
        ]
    },
    {
        id: "c4s10",
        shortTitle: "4.10 Shock & Hemorrhage",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Shock & Hemorrhage</h3>

            <h4>What Is Shock?</h4>
            <p><strong>Shock</strong> (hypoperfusion) is a life-threatening condition in which the circulatory system fails to deliver enough oxygen and nutrients to meet the metabolic demands of the body's tissues. It is not a single disease — it is a final common pathway resulting from various underlying causes. If untreated, shock progresses through three stages: <strong>compensated</strong> (the body activates mechanisms to maintain perfusion), <strong>decompensated</strong> (compensatory mechanisms fail and vital signs deteriorate), and <strong>irreversible</strong> (cell death and organ failure occur despite intervention). Early recognition by the EMT is critical because <strong>shock is easier to treat in its compensated stage than in decompensation</strong>.</p>

            <h4>The Four Categories of Shock</h4>
            <table>
                <thead>
                    <tr><th>Category</th><th>Mechanism</th><th>Common Causes</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hypovolemic</strong></td><td>Loss of intravascular volume (blood or fluids)</td><td>Haemorrhage (trauma, GI bleed, ruptured aneurysm), dehydration, burns, vomiting/diarrhoea</td></tr>
                    <tr><td><strong>Cardiogenic</strong></td><td>Failure of the heart to pump adequately</td><td>Acute MI / STEMI, heart failure, dysrhythmia, myocarditis, valvular disease</td></tr>
                    <tr><td><strong>Distributive</strong></td><td>Severe vasodilation with relative hypovolaemia</td><td>Sepsis, anaphylaxis, spinal cord injury (neurogenic shock), adrenal crisis</td></tr>
                    <tr><td><strong>Obstructive</strong></td><td>Mechanical obstruction preventing cardiac output</td><td>Tension pneumothorax, cardiac tamponade, pulmonary embolism, restrictive pericarditis</td></tr>
                </tbody>
            </table>

            <h4>Haemorrhagic Shock: Classes of Blood Loss</h4>
            <p>Haemorrhagic shock is a subset of hypovolaemic shock caused specifically by blood loss. The <strong>ATLS classification</strong> divides haemorrhagic shock into four classes based on the percentage of blood volume lost (total adult blood volume ≈ 70 mL/kg or about 5 litres in a 70 kg male):</p>
            <table>
                <thead>
                    <tr><th>Class</th><th>Blood Loss</th><th>Volume Lost (70 kg)</th><th>Clinical Signs</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>I</strong></td><td>Up to 15%</td><td>~750 mL</td><td>Minimal — mild anxiety, slight HR increase. BP normal, cap refill normal</td></tr>
                    <tr><td><strong>II</strong></td><td>15–30%</td><td>~750–1500 mL</td><td>Tachycardia (HR >100), tachypnoea, narrowed pulse pressure, delayed cap refill (>2 s), mild anxiety</td></tr>
                    <tr><td><strong>III</strong></td><td>30–40%</td><td>~1500–2000 mL</td><td>Severe tachycardia (HR >120), marked tachypnoea, hypotension (SBP drops), confusion/agitation, pallor, cool extremities. <strong>This is the decompensation threshold.</strong></td></tr>
                    <tr><td><strong>IV</strong></td><td>&gt;40%</td><td>&gt;2000 mL</td><td>Extreme tachycardia, marked hypotension, depressed mental status to unconsciousness, absent peripheral pulses, cold/clammy skin. <strong>Immediate surgical intervention required.</strong></td></tr>
                </tbody>
            </table>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Clinical Pearl:</strong> Hypotension is a <strong>LATE sign of shock</strong>. By the time the systolic BP drops below 90 mmHg, the patient has lost at least 30% of their blood volume (Class III). Do not rely on a normal blood pressure to rule out shock — look for tachycardia, delayed cap refill, skin changes, and altered mental status as EARLY warning signs.
            </div>

            <h4>Recognition of Shock — What the EMT Looks For</h4>
            <p>The signs of shock reflect the body's attempt to compensate and the eventual failure of those mechanisms:</p>
            <ul>
                <li><strong>Tachycardia:</strong> The first measurable sign. The heart rate increases to maintain cardiac output as stroke volume drops. However, an elderly patient or those on beta-blockers may not mount a tachycardia — the absence of tachycardia does NOT rule out shock.</li>
                <li><strong>Delayed capillary refill:</strong> Greater than 2 seconds in adults (narrowed pulse pressure causes delayed peripheral perfusion). Also check skin temperature — cool extremities indicate peripheral vasoconstriction (compensation).</li>
                <li><strong>Pale, cool, clammy skin:</strong> Catecholamine release causes peripheral vasoconstriction (shunting blood to core organs) and diaphoresis (sweating from sympathetic activation).</li>
                <li><strong>Altered mental status:</strong> Anxiety, agitation, confusion, or unresponsiveness — the brain is sensitive to hypoperfusion.</li>
                <li><strong>Weak or absent peripheral pulses:</strong> As perfusion pressure drops, radial pulses become weak then absent. Check the carotid/femoral pulse if peripheral pulses cannot be felt.</li>
                <li><strong>Hypotension:</strong> As noted, this is a LATE finding. SBP &lt;90 mmHg or a drop of &gt;30 mmHg from baseline.</li>
                <li><strong>Narrowed pulse pressure:</strong> The difference between systolic and diastolic BP narrows early in shock (e.g. 100/85 gives a pulse pressure of only 15 mmHg, suggesting increased systemic vascular resistance). A widening pulse pressure may indicate the beginning of decompensation.</li>
                <li><strong>Increased respiratory rate:</strong> Tachypnoea compensates for metabolic acidosis caused by anaerobic metabolism.</li>
            </ul>

            <h4>Treatment of Shock — The EMT's Priorities</h4>
            <p>The management of shock focuses on identifying and treating the underlying cause while supporting the circulation. The following steps apply to all shock patients and are within the EMT scope:</p>
            <p><strong>1. Scene safety and BSI:</strong> Ensure scene safety, wear appropriate PPE, and control any external haemorrhage immediately upon arrival — bleeding control takes priority over everything else.</p>
            <p><strong>2. Airway and Breathing:</strong> Open the airway, suction if needed, and administer <strong>high-flow oxygen</strong> via non-rebreather at 12–15 L/min. Assist ventilations with BVM if the respiratory rate is inadequate or the patient is in respiratory failure. In haemorrhagic shock, oxygen delivery is limited by blood loss — supplemental oxygen maximises the oxygen content of the remaining circulating volume.</p>
            <p><strong>3. Circulation — Haemorrhage Control:</strong> For external bleeding, the sequence of haemorrhage control is: <strong>direct pressure → haemostatic gauze (if available) → tourniquet (for extremity haemorrhage not controlled by pressure)</strong>. Do not remove blood-soaked bandages — apply additional dressings on top (layering). For internal bleeding, recognise the signs (rigid/distended abdomen, bruising over the flank or pelvis, deformed femur) and provide rapid transport.</p>
            <p><strong>4. Fluid Resuscitation:</strong> Per local protocol, administer IV crystalloid (NS or LR) at 20 mL/kg if the patient shows signs of shock without evidence of fluid overload. In haemorrhagic shock, the goal is <strong>permissive hypotension</strong> — enough volume to maintain a palpable radial pulse and SBP ~80–90 mmHg, without achieving full normalisation that could worsen bleeding by disrupting clots.</p>
            <p><strong>5. Positioning:</strong> Place the patient <strong>supine</strong>. If there is no suspicion of spinal injury, elevate the legs 6–12 inches (Trendelenburg position is no longer routinely recommended, but leg elevation can provide autotransfusion). Do NOT elevate the legs if there is lower extremity trauma or suspected pelvic fracture.</p>
            <p><strong>6. Keep the patient warm:</strong> Hypothermia worsens coagulopathy. Cover the patient with blankets, use warmed fluids if available, and keep the ambulance compartment warm.</p>
            <p><strong>7. Transport:</strong> Rapid transport to the appropriate facility — trauma centre for haemorrhagic shock, STEMI centre for cardiogenic shock, etc. Notify the receiving hospital of the patient's condition and estimated time of arrival. Reassess every 5 minutes, including vital signs and mental status.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Critical — "Shock is a Symptom, Not a Diagnosis":</strong> Identifying that a patient is in shock is only the first step. The EMT must determine the <em>type</em> of shock to guide treatment. A patient with cardiogenic shock should not receive the same fluid volume as one with hypovolaemic shock. A patient with anaphylactic shock needs epinephrine. Always identify and treat the underlying cause while providing general shock care.
            </div>

            <h4>Special Considerations</h4>
            <ul>
                <li><strong>Cardiogenic shock:</strong> Fluid restriction (may have pulmonary oedema), position patient upright if tolerated, cautious fluid bolus (e.g. 250 mL and reassess), and transport to a PCI centre.</li>
                <li><strong>Neurogenic shock:</strong> Hypotension with bradycardia (paradoxical — most shock causes tachycardia). Occurs after spinal cord injury above T6. Treatment: fluid resuscitation and vasopressors (ALS). The patient may also need spinal motion restriction.</li>
                <li><strong>Septic shock:</strong> History suggestive of infection (fever, chills). Early goal is fluid resuscitation and transport. The skin may be warm and flushed (early distributive) rather than cool and pale.</li>
                <li><strong>Obstructive shock:</strong> Identify and treat tension pneumothorax (needle decompression), cardiac tamponade (pericardiocentesis), or massive PE — all are ALS interventions; EMT's role is recognition, oxygen, and rapid transport.</li>
            </ul>
        </div>`,
        flashcards: [
            { question: "What are the four categories of shock?", answer: "Hypovolaemic, cardiogenic, distributive, and obstructive", category: "Shock Classification" },
            { question: "Why is hypotension considered a LATE sign of shock?", answer: "It generally appears only after ≥30% blood volume loss (Class III haemorrhage), after compensatory mechanisms have been overwhelmed", category: "Shock Recognition" },
            { question: "What is the first measurable sign of compensated shock?", answer: "Tachycardia — the heart rate increases as stroke volume drops to maintain cardiac output", category: "Shock Recognition" },
            { question: "What is the difference between Class II and Class III haemorrhagic shock?", answer: "Class II (15–30% loss): tachycardia, delayed cap refill, normal BP. Class III (30–40% loss): hypotension, confusion, marked tachycardia — the decompensation threshold", category: "Haemorrhagic Shock" },
            { question: "What is the recommended sequence for controlling external haemorrhage?", answer: "Direct pressure → haemostatic gauze (if available) → tourniquet for extremity wounds not controlled by pressure", category: "Haemorrhage Control" },
            { question: "What is permissive hypotension in fluid resuscitation for haemorrhagic shock?", answer: "Administering enough fluid to maintain a palpable radial pulse and SBP ~80–90 mmHg without fully normalising BP, to avoid disrupting clots", category: "Fluid Resuscitation" },
            { question: "What skin findings are characteristic of compensated shock?", answer: "Pale, cool, clammy skin — caused by peripheral vasoconstriction (shunting blood to core) and diaphoresis (sympathetic activation)", category: "Shock Recognition" },
            { question: "Why should you keep a shock patient warm?", answer: "Hypothermia worsens coagulopathy, which is particularly dangerous in haemorrhagic shock and impairs all resuscitation efforts", category: "Shock Management" }
        ],
        quiz: [
            { q: "Which of the following clinical findings is MOST consistent with Class III haemorrhagic shock?", options: ["Normal blood pressure, mild anxiety, capillary refill <2 seconds", "Hypotension, confusion, tachycardia >120, and delayed cap refill", "Bradycardia, warm flushed skin, and normal mental status", "SBP >160, bounding pulses, and respiratory rate 14"], correct: 1 },
            { q: "A 45-year-old male is found lying on the ground after falling from a ladder. He is awake but confused, with cool clammy skin, HR 124, BP 88/60, and a deformed right femur. The EMT should FIRST:", options: ["Apply a traction splint to the femur", "Administer high-flow oxygen and begin fluid resuscitation en route to a trauma centre", "Elevate the legs to 45 degrees and apply pelvic binder", "Insert an NPA and hyperventilate with BVM"], correct: 1 },
            { q: "[HARD] A patient with spinal cord injury at the T3 level presents with hypotension (SBP 82), bradycardia (HR 52), and warm, flushed skin below the level of injury. This presentation is MOST consistent with which type of shock?", options: ["Hypovolaemic shock from occult haemorrhage", "Cardiogenic shock from neurogenic myocardial depression", "Neurogenic shock caused by loss of sympathetic tone — treat with fluids and vasopressors", "Distributive shock from sepsis secondary to the injury"], correct: 2 }
        ],
        critical: [
            {
                id: "crit_4_10_1",
                scenario: "Your ambulance is flagged down by a bystander at a construction site. A 38-year-old male worker has fallen approximately 12 feet onto rebar, causing a large open wound to his right upper thigh. There is significant bright red blood spurting from the wound with each heartbeat. The patient is pale, diaphoretic, and agitated. HR is approximately 130, and you cannot palpate a radial pulse. Your partner is preparing the stretcher.",
                question: "What is the FIRST intervention the EMT should perform upon reaching this patient?",
                options: [
                    {t: "Apply direct pressure to the wound, then apply a tourniquet 2–3 inches proximal to the wound if direct pressure does not control the bleeding — haemorrhage control takes priority over everything else", f: "Correct — This patient has arterial haemorrhage with signs of decompensated shock (absent radial pulse, tachycardia, altered mental status). The immediate priority is haemorrhage control. Apply direct pressure with gauze (consider haemostatic gauze if available). If the bleeding continues, apply a tourniquet high on the thigh. Do not delay haemorrhage control for oxygen, fluids, or vitals — the patient is bleeding out."},
                    {t: "Administer high-flow oxygen via NRB and obtain a full set of vital signs to quantify the severity of shock", f: "Incorrect — Oxygen and vitals are important but haemorrhage control is the absolute priority for a patient with active arterial bleeding. Every second of ongoing haemorrhage worsens the shock state. Control the bleeding first, then apply oxygen, obtain vitals, and initiate transport."}
                ],
                correct: 0,
                explanation: "Exsanguinating extremity haemorrhage is the number one preventable cause of death in trauma. The EMT must control the haemorrhage immediately. Direct pressure is the first step; if bleeding is arterial and not controlled, a tourniquet should be applied. Once haemorrhage is controlled: high-flow oxygen, fluid resuscitation per protocol (permissive hypotension), rapid transport to a trauma centre. The patient's agitation is cerebral hypoperfusion — not a 'personality issue.'",
                kpi: "Prioritises haemorrhage control over other interventions in exsanguinating extremity injury"
            },
            {
                id: "crit_4_10_2",
                scenario: "You are called to a nursing home for an 82-year-old female with weakness and altered mental status. Staff report she has had dark, tarry stools for three days and vomited coffee-ground emesis this morning. Vital signs: HR 112, BP 90/68, RR 22, SpO₂ 95% on room air. The patient is confused and pale with cool extremities. You suspect an upper GI bleed causing hypovolaemic shock. The nursing home is 25 minutes from the nearest hospital.",
                question: "What is the MOST appropriate sequence of interventions for this patient?",
                options: [
                    {t: "Administer high-flow oxygen, establish IV access en route, give 20 mL/kg NS bolus if SBP remains <90, transport, and keep the patient warm. Monitor for worsening hypotension and mental status changes", f: "Correct — This patient's presentation (melena, haematemesis, tachycardia, hypotension, confusion) is consistent with significant GI bleeding causing decompensated hypovolaemic shock. The priority is oxygen supplementation (maximises O₂ content of the remaining blood), IV access and fluid resuscitation per protocol (permissive hypotension — target SBP ~80–90 to avoid disrupting formed clots), and prompt transport."},
                    {t: "Administer oxygen and transport without fluid resuscitation — giving fluids to a bleeding patient will increase bleeding and worsen outcomes", f: "Incorrect — The principle of permissive hypotension does not mean 'no fluids.' This patient is already in decompensated shock (hypotension + confusion). The brain and heart are at immediate risk. The evidence supports judicious fluid resuscitation to maintain core perfusion (target SBP ~80–90 mmHg) without fully normalising BP. Complete withholding of fluids in a hypotensive patient with altered mental status increases the risk of cardiac arrest en route."}
                ],
                correct: 0,
                explanation: "In haemorrhagic shock from presumed GI bleeding: 1) Supplement oxygen to maximise O₂ content. 2) Establish IV access. 3) Give fluid boluses as needed to maintain SBP 80–90 mmHg (permissive hypotension). 4) Rapid transport. 5) Keep the patient warm. The risks of not treating hypotension (cerebral/cardiac ischaemia, rearrest) generally outweigh the risks of disrupting a clot when following a permissive hypotension strategy. Reassess after each bolus.",
                kpi: "Applies permissive hypotension principle in non-traumatic haemorrhagic shock"
            },
            {
                id: "crit_4_10_3",
                scenario: "You respond to a private residence for a 60-year-old male with chest pain and difficulty breathing for the past 2 hours. He describes crushing substernal chest pain radiating to his left arm. He is anxious, pale, and diaphoretic. Vital signs: HR 118, BP 88/60, RR 24, SpO₂ 91%, lungs have crackles in the bilateral bases. He is coughing up pink frothy sputum. His ECG shows ST-elevation in leads V1–V4. Your partner says, 'He's hypotensive — let's get a line and give him a full bolus.'",
                question: "What is the MOST appropriate fluid management for this patient?",
                options: [
                    {t: "Proceed with cautious fluid administration — give a small bolus (250 mL) and reassess. This patient likely has cardiogenic shock from an extensive anterior STEMI with pulmonary oedema. Excessive fluids will worsen the pulmonary congestion", f: "Correct — This patient has cardiogenic shock (pump failure) with clear signs of pulmonary oedema (crackles, pink frothy sputum, hypoxia). A large, aggressive fluid bolus could precipitate respiratory failure by worsening pulmonary congestion. A cautious 250 mL challenge with close reassessment is appropriate. The definitive treatment for cardiogenic shock from STEMI is emergent PCI — this patient needs rapid transport to a PCI centre."},
                    {t: "Administer 20 mL/kg NS full bolus immediately — the SBP is 88 and tachycardia indicates shock. The patient needs volume to maintain perfusion", f: "Incorrect — In cardiogenic shock, the problem is not volume loss but pump failure. Aggressive fluid administration worsens pulmonary oedema without improving cardiac output. The crackles and frothy sputum are red flags for left heart failure. A full bolus (typically ~1400 mL in this patient) could cause flash pulmonary oedema and require intubation."}
                ],
                correct: 0,
                explanation: "Cardiogenic shock management differs fundamentally from hypovolaemic shock: 1) The patient has pulmonary oedema — fluids worsen oxygenation. 2) A cautious fluid challenge (250 mL) may help if there is also some component of relative hypovolaemia, but a full 20 mL/kg bolus is contraindicated. 3) The definitive treatment is emergent PCI. 4) En route: monitor for worsening respiratory distress, assist ventilations with BVM if needed, position upright if tolerated, and notify the receiving facility. ALS may administer vasopressors.",
                kpi: "Identifies cardiogenic shock and avoids fluid overload in the setting of pulmonary oedema"
            }
        ]
    },
    {
        id: "c4s11",
        shortTitle: "4.11 Fluid Resuscitation",
        summary: `<div class="sum-card">
            <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart-pulse"/></svg> Fluid Resuscitation</h3>

            <h4>IV Access Basics for the EMT-A Scope</h4>
            <p>Intravenous (IV) access is a fundamental skill for administering fluids and medications in the prehospital setting. While the specific scope of IV access varies by state and local protocol, many EMT-A (EMT-Basic) levels are now permitted to <strong>establish peripheral IV access</strong> and administer crystalloid fluids under standing orders or online medical direction. Even where EMTs do not start IVs, understanding IV basics is essential because you will assist ALS providers and need to monitor IV sites during transport.</p>
            <ul>
                <li><strong>Cannula selection:</strong> Larger-gauge catheters (14–18 gauge) are preferred for trauma and resuscitation because they allow faster flow rates. Smaller gauges (20–22 gauge) may be used for patients with small or fragile veins (elderly, paediatric).</li>
                <li><strong>Preferred sites:</strong> The <strong>antecubital fossa</strong> (AC) and <strong>forearm</strong> are the most common sites, followed by the dorsal hand veins. In critical patients, the AC provides the largest access for rapid fluid administration.</li>
                <li><strong>IV tubing:</strong> Standard macrodrip tubing delivers 10–15 drops/mL for rapid administration. <strong>Blood tubing</strong> (with an in-line filter) is used when transfusing blood products (not typically in the EMT scope).</li>
                <li><strong>Saline lock (heparin lock):</strong> A capped IV catheter that can be flushed with normal saline for intermittent access without continuous IV fluids running.</li>
            </ul>

            <h4>Crystalloid Fluids: Normal Saline and Lactated Ringer's</h4>
            <p>Crystalloids are electrolyte solutions that can pass through a semipermeable membrane into the interstitial space. They are the primary resuscitative fluids in prehospital care:</p>
            <ul>
                <li><strong>Normal Saline (0.9% NaCl):</strong> Isotonic crystalloid containing 154 mEq/L of sodium and chloride. It is the most widely used prehospital fluid. Each litre of NS expands plasma volume by approximately 250–300 mL (the remainder moves to the interstitium). Side effect: large volumes can cause <strong>hyperchloraemic metabolic acidosis</strong> (because the chloride concentration is higher than plasma).</li>
                <li><strong>Lactated Ringer's (LR):</strong> Isotonic solution with a composition closer to plasma (sodium, chloride, potassium, calcium, and lactate as a buffer). It is preferred by some protocols for trauma resuscitation because it causes less hyperchloraemic acidosis than NS. It is <strong>contraindicated</strong> (or used with caution) in patients with liver disease (cannot metabolise lactate) or those with significantly elevated potassium.</li>
                <li><strong>D5W (5% Dextrose in Water):</strong> Not a resuscitation fluid — it is hypotonic and distributes into total body water. Used for maintenance fluids or to correct hypoglycaemia, not for volume expansion in shock.</li>
            </ul>

            <h4>The 20 mL/kg Bolus</h4>
            <p>The standard initial fluid bolus for hypotensive patients is <strong>20 mL/kg of isotonic crystalloid</strong>. This is a rapid infusion administered as quickly as possible (using pressure bag or manual squeeze if needed). For a 70 kg adult, this equals approximately 1400 mL (one 1000 mL bag + one 500 mL bag or part of a second bag). After the bolus, the patient is reassessed. If signs of shock persist and there are no signs of fluid overload, a <strong>second 20 mL/kg bolus</strong> may be administered per protocol.</p>

            <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                <strong>Key Calculation:</strong> 20 mL/kg × patient weight (kg) = initial bolus volume. For a 70 kg adult: 20 × 70 = 1400 mL. For an 80 kg adult: 20 × 80 = 1600 mL. For a 50 kg patient: 20 × 50 = 1000 mL. Always estimate weight carefully — a 10 kg error leads to a 200 mL dosing error.
            </div>

            <h4>Signs of Fluid Responsiveness</h4>
            <p>Not all hypotensive patients respond to fluids. Before and after each bolus, assess for clinical signs that indicate whether the patient is "volume responsive":</p>
            <ul>
                <li><strong>Improvement in mental status:</strong> The patient becomes more alert and oriented — a positive sign of volume responsiveness.</li>
                <li><strong>Improvement in heart rate:</strong> Tachycardia decreases toward normal as stroke volume improves.</li>
                <li><strong>Improvement in blood pressure:</strong> SBP rises above 90–100 mmHg and stabilises.</li>
                <li><strong>Improvement in peripheral perfusion:</strong> Capillary refill improves (<2 s), skin becomes warmer and less diaphoretic.</li>
                <li><strong>Stronger peripheral pulses:</strong> Radial pulses that were weak or absent return and strengthen.</li>
                <li><strong>Increase in urine output:</strong> Not assessable in most prehospital settings (requires catheterisation), but useful information if available from a hospitalised patient.</li>
            </ul>
            <p><strong>Signs of fluid NON-responsiveness or fluid overload:</strong> Continued hypotension after two boluses (suggests ongoing bleeding or non-hypovolaemic shock), worsening respiratory distress, new or worsening crackles on lung auscultation, increasing jugular venous distension (JVD), or the development of peripheral oedema. In a patient with any of these signs, slow or stop fluid administration and consider other causes of shock.</p>

            <h4>Fluid Warming</h4>
            <p>Administration of cold IV fluids contributes to hypothermia, which worsens coagulopathy and increases mortality in trauma patients. <strong>Fluid warming</strong> devices warm crystalloids to approximately 37–40°C before infusion. If a fluid warmer is not available, store IV bags in a warm environment or use an in-line warming system. For non-trauma patients, room-temperature fluids are generally acceptable unless the patient is already hypothermic.</p>

            <h4>Intraosseous (IO) Access — Overview</h4>
            <p>Intraosseous access is the <strong>alternative vascular access route</strong> when IV access cannot be obtained and the patient is critically ill or injured. The IO space (the bone marrow cavity) acts as a non-collapsible vein, allowing rapid absorption of fluids and medications into the central circulation. Key facts:</p>
            <ul>
                <li><strong>Indications:</strong> Cardiac arrest, severe shock with failed IV attempts (typically after 2 attempts or 90 seconds), paediatric emergencies where IV access is difficult, burns with no accessible veins.</li>
                <li><strong>Insertion sites:</strong> Proximal tibia (most common), distal femur, humeral head (gives rapid central-like flow rates), and sternum (used in some military protocols).</li>
                <li><strong>Device types:</strong> Manual needles (Jamshidi), spring-loaded (EZ-IO®), and drill-powered devices.</li>
                <li><strong>Considerations:</strong> Contraindicated in fractured bones, at or above the fracture site, in bones with previous orthopaedic hardware, or in bones with infection (cellulitis/osteomyelitis) over the insertion site.</li>
                <li><strong>At the EMT-A level:</strong> IO access is generally NOT within the basic EMT scope in most states (it is an AEMT/paramedic skill). However, EMTs must understand the indications, sites, and complications to assist the ALS provider.</li>
            </ul>

            <h4>Caution: Fluid Overload in Cardiogenic Shock</h4>
            <p><strong>Not all shock is hypovolaemic.</strong> Administering large fluid volumes to a patient in cardiogenic shock (pump failure) can cause iatrogenic pulmonary oedema (fluid backing up into the lungs because the heart cannot pump the volume forward). Signs of fluid overload during resuscitation include:</p>
            <ul>
                <li>Shortness of breath / increased work of breathing</li>
                <li>Crackles (rales) on lung auscultation — beginning at the bases</li>
                <li>Pink frothy sputum (late sign — indicates severe pulmonary oedema)</li>
                <li>Jugular venous distension (JVD)</li>
                <li>Worsening hypoxia despite increasing oxygen delivery</li>
                <li>Peripheral oedema (a later sign in acute overload)</li>
            </ul>
            <p>If you suspect cardiogenic shock (history of heart disease, chest pain, crackles, JVD, ST-elevation on ECG): <strong>give fluids cautiously</strong> — a 250–500 mL challenge rather than a full 20 mL/kg bolus — and reassess frequently. The EMT's best tool in cardiogenic shock is <strong>recognition and rapid transport to a PCI centre</strong>.</p>

            <h4>Reassessment After Each Bolus</h4>
            <p>Fluid resuscitation is not a 'set and forget' intervention. After <strong>every</strong> fluid bolus, the EMT must reassess:</p>
            <table>
                <thead>
                    <tr><th>Parameter</th><th>What to Look For</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>Mental status</td><td>Improving, stable, or worsening</td><td>Deterioration → re-evaluate oxygenation, perfusion, and need for airway support</td></tr>
                    <tr><td>Heart rate</td><td>Trending down vs. unchanged vs. rising</td><td>No improvement → consider need for second bolus or blood products</td></tr>
                    <tr><td>Blood pressure</td><td>≥90 systolic, MAP ≥65</td><td>If still low → second bolus or vasopressors (ALS)</td></tr>
                    <tr><td>Respiratory status</td><td>Rate, effort, SpO₂, lung sounds</td><td>New crackles or JVD → signs of fluid overload → slow/stop fluids</td></tr>
                    <tr><td>Peripheral pulses</td><td>Radial pulse strength</td><td>Return of strong radial pulse = good response</td></tr>
                    <tr><td>Skin</td><td>Warmth, colour, moisture</td><td>Pink, warm, dry = improved perfusion</td></tr>
                </tbody>
            </table>

            <h4>MAST / PASG — Historical Context</h4>
            <p>The <strong>Military Anti-Shock Trousers (MAST)</strong> — also called Pneumatic Anti-Shock Garment (PASG) — were large inflatable trousers that wrapped around the patient's legs and abdomen. They were hypothesised to: 1) Autotransfuse blood from the lower extremities to the core (adding approximately 250–500 mL of circulating volume), and 2) Splint pelvic and lower extremity fractures. However, large studies found that MAST/PASG did NOT improve survival and, in some cases, increased mortality (by increasing bleeding in thoracic injuries, causing compartment syndrome, and delaying other care). Modern EMS guidelines have largely abandoned their use. The current standard is <strong>haemorrhage control, judicious crystalloid resuscitation, and rapid transport to definitive care</strong>.</p>

            <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                <strong>Historical Lesson:</strong> MAST/PASG is an important example of an intervention that made physiological sense in theory — "squeeze blood back to the heart" — but did not survive evidence-based scrutiny. It reminds us to base prehospital practice on outcomes, not assumptions. Today, the emphasis is on early haemorrhage control (tourniquets, haemostatic gauze) and permissive hypotension rather than mechanical autotransfusion.
            </div>
        </div>`,
        flashcards: [
            { question: "What is the standard initial fluid bolus volume per kilogram for a hypotensive patient?", answer: "20 mL/kg of isotonic crystalloid (normal saline or lactated Ringer's)", category: "Fluid Dosing" },
            { question: "What is the primary difference between normal saline and lactated Ringer's?", answer: "LR has a composition closer to plasma and contains lactate as a buffer; NS has higher chloride content, and large volumes may cause hyperchloraemic metabolic acidosis", category: "Crystalloids" },
            { question: "What are three clinical signs that indicate a patient is responding to fluid resuscitation?", answer: "Improving mental status, decreasing heart rate, and rising blood pressure (also: stronger peripheral pulses, faster cap refill, warmer skin)", category: "Fluid Assessment" },
            { question: "What are two signs of fluid overload that should cause the EMT to slow or stop fluid administration?", answer: "Worsening respiratory distress with new crackles (pulmonary oedema) and increasing jugular venous distension (JVD)", category: "Fluid Assessment" },
            { question: "What is intraosseous (IO) access and when is it indicated?", answer: "Vascular access through the bone marrow cavity, used when IV access fails in critical patients (cardiac arrest, severe shock, paediatric emergencies)", category: "IO Access" },
            { question: "What is the primary concern when administering large fluid volumes to a patient with suspected cardiogenic shock?", answer: "Iatrogenic pulmonary oedema — the failing heart cannot pump the volume forward, causing fluid to back up into the lungs", category: "Cardiogenic Shock" },
            { question: "Why was the MAST/PASG device largely abandoned in modern EMS?", answer: "Studies showed it did not improve survival and could increase mortality by worsening bleeding, causing compartment syndrome, and delaying other care", category: "Historical" }
        ],
        quiz: [
            { q: "A 70 kg adult male in haemorrhagic shock requires a 20 mL/kg fluid bolus. Approximately how much volume should be administered?", options: ["700 mL", "1000 mL", "1400 mL", "2000 mL"], correct: 2 },
            { q: "Which of the following is a contraindication to lactated Ringer's administration?", options: ["Hypotension", "Known liver disease (cannot metabolise lactate)", "Tachycardia", "History of diabetes mellitus"], correct: 1 },
            { q: "[HARD] You are treating a 55-year-old female with suspected cardiogenic shock secondary to an anterior MI. Her BP is 86/58, HR 112, and lung sounds reveal crackles halfway up both lung fields. She is in respiratory distress with an SpO₂ of 88% on a non-rebreather. What is the MOST appropriate fluid strategy?", options: ["Withhold fluids entirely — any fluid administration will cause pulmonary oedema and worsen oxygenation", "Administer a 20 mL/kg NS bolus — the hypotension must be treated to perfuse the heart", "Give a cautious 250 mL fluid challenge, reassess for worsening respiratory status and signs of overload, and transport emergently to a PCI centre", "Administer 500 mL of D5W to provide glucose for myocardial metabolism"], correct: 2 }
        ],
        critical: [
            {
                id: "crit_4_11_1",
                scenario: "You are treating a 28-year-old male who was stabbed in the left lower abdomen. The wound is actively bleeding (dark red blood). He is awake but anxious, HR 116, BP 98/72, RR 20, SpO₂ 97%. You apply a pressure dressing to the wound and it slows the bleeding. The patient weight is approximately 80 kg. Per protocol, you may administer a fluid bolus for signs of shock. The receiving trauma centre is 15 minutes away.",
                question: "What fluid resuscitation strategy is MOST appropriate for this patient?",
                options: [
                    {t: "Establish IV access, administer a 20 mL/kg bolus of NS (≈1600 mL) en route, but titrate to maintain SBP ~80–90 mmHg (permissive hypotension). If BP improves and bleeding does not worsen, no second bolus is needed", f: "Correct — This patient has compensated (early decompensated) haemorrhagic shock from an abdominal stab wound. The goal is permissive hypotension: enough volume to maintain core perfusion (SBP 80–90) without disrupting formed clots. A full 20 mL/kg bolus is appropriate but infuse judiciously. If BP normalises (>100), slow the infusion — over-resuscitation can increase bleeding by raising hydrostatic pressure on the wound."},
                    {t: "Give the full 20 mL/kg NS bolus as fast as possible — the patient is tachycardic and hypotensive, and needs aggressive volume replacement to restore normal perfusion", f: "Incorrect — While this patient needs fluids, aggressive resuscitation to normotension can worsen haemorrhage through the 'pop the clot' effect (increased hydrostatic pressure dislodges newly formed clots). Permissive hypotension targets SBP 80–90 mmHg. The wound is abdominal (cannot be tourniqueted), so avoiding clot disruption is critical. Give the bolus but slow the rate once a radial pulse returns and mental status improves."}
                ],
                correct: 0,
                explanation: "In haemorrhagic shock from penetrating trauma, the principle of permissive hypotension applies: fluids are given to maintain adequate (not normal) perfusion. Target: palpable radial pulse, SBP 80–90 mmHg, improving mental status. Administer the 20 mL/kg bolus but titrate the rate based on clinical response. Rapid transport to a trauma centre is the definitive treatment — this patient likely needs surgery for internal haemorrhage control.",
                kpi: "Applies permissive hypotension with appropriate crystalloid dosing in penetrating trauma"
            },
            {
                id: "crit_4_11_2",
                scenario: "You are treating a 65-year-old male with a history of CHF and COPD who is in respiratory distress. He has crackles throughout all lung fields, JVD, and is coughing up pink frothy sputum. His BP is 110/70, HR 104, RR 28, SpO₂ 84% on a non-rebreather. A paramedic student on scene suggests starting two large-bore IVs and giving a 20 mL/kg NS bolus for the tachycardia and 'relative hypotension.' The patient's weight is approximately 75 kg.",
                question: "What is the correct fluid management for this patient?",
                options: [
                    {t: "Withhold IV fluids — this patient is in acute cardiogenic pulmonary oedema (pump failure with fluid overload). Fluids will worsen his condition. The priority is CPAP/BiPAP, nitroglycerin (per protocol), and rapid transport", f: "Correct — This patient has all the hallmarks of acute cardiogenic pulmonary oedema: known CHF, crackles throughout, JVD, pink frothy sputum, hypoxia. This is NOT hypovolaemic shock — the problem is pump failure. IV fluids will worsen pulmonary congestion. The treatment is CPAP (positive pressure ventilation), nitroglycerin (if BP permits and per protocol), and transport. IV access can be established as a 'lifeline' but fluids should not be administered."},
                    {t: "Establish IV access and administer a 250 mL NS challenge — the patient is tachycardic with a normal BP but needs a small fluid challenge to see if there is a hypovolaemic component", f: "Incorrect — While a 250 mL challenge is theoretically less dangerous than a full bolus, this patient's presentation is unequivocally cardiogenic pulmonary oedema. The crackles throughout all fields and pink frothy sputum indicate severe left heart failure. Any additional fluid will worsen gas exchange. Establish a saline lock for medication access but do not administer a fluid bolus. CPAP and nitroglycerin are the indicated treatments."}
                ],
                correct: 0,
                explanation: "Acute cardiogenic pulmonary oedema is a state of fluid overload, not hypovolaemia. Administering fluids — even small amounts — can precipitate respiratory failure requiring intubation. The EMT's priorities: 1) CPAP/BiPAP to improve oxygenation and reduce preload. 2) Nitroglycerin per protocol (vasodilation reduces preload and afterload). 3) Position patient upright. 4) Transport. IV access is for medication administration, not fluid resuscitation.",
                kpi: "Identifies cardiogenic pulmonary oedema and appropriately withholds fluids"
            }
        ]
    }
    ,
{
    id: "c4s12",
    shortTitle: "4.12 Pediatric Cardiac Arrest & BLS",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Cardiac Arrest & BLS</h3>

        <p>Unlike adults (usually a primary cardiac/electrical event), most pediatric arrests result from <strong>respiratory failure and progressive hypoxia</strong>. The priority is therefore high-quality compressions <em>and</em> effective oxygenation/ventilation. Recognize and treat respiratory distress early to prevent arrest.</p>

        <h4>High-Quality CPR Parameters by Age</h4>
        <table>
            <thead><tr><th>Parameter</th><th>Infant (&lt;1 yr)</th><th>Child (1 yr–puberty)</th><th>Adult</th></tr></thead>
            <tbody>
                <tr><td>Rate</td><td>100–120/min</td><td>100–120/min</td><td>100–120/min</td></tr>
                <tr><td>Depth</td><td>~1.5 in (4 cm), ~⅓ AP diameter</td><td>~2 in (5 cm), ~⅓ AP diameter</td><td>≥2 in (5 cm)</td></tr>
                <tr><td>Hand position</td><td>2 fingers (1 rescuer) / 2-thumb encircling (2 rescuers)</td><td>1 or 2 hands</td><td>2 hands</td></tr>
                <tr><td>Ratio (single rescuer)</td><td>30:2</td><td>30:2</td><td>30:2</td></tr>
                <tr><td>Ratio (2 rescuers)</td><td><strong>15:2</strong></td><td><strong>15:2</strong></td><td>30:2</td></tr>
            </tbody>
        </table>

        <h4>Key Points</h4>
        <ul>
            <li>Allow full chest recoil; minimize interruptions; rotate compressors ~every 2 minutes.</li>
            <li><strong>AED:</strong> Use a pediatric dose attenuator/pads for children &lt;8 yr (or &lt;25 kg) if available; if not, use a standard adult AED.</li>
            <li>Because hypoxia is the usual cause, ensure an open airway and effective ventilations (~1 breath every 2–3 seconds when an advanced airway/2-rescuer BVM is in place).</li>
        </ul>

        <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
            <strong>Clinical Pearl:</strong> A bradycardic child with poor perfusion despite adequate oxygenation and ventilation is treated like cardiac arrest — begin CPR if the heart rate is below 60/min with signs of poor perfusion.
        </div>
    </div>`,
    flashcards: [
        {question: "What is the most common underlying cause of pediatric cardiac arrest?", answer: "Respiratory failure and progressive hypoxia (not a primary cardiac event).", category: "Pediatric Resus"},
        {question: "What is the 2-rescuer compression-to-ventilation ratio for an infant or child?", answer: "15:2 (versus 30:2 for adults).", category: "Pediatric Resus"},
        {question: "What is the correct compression depth for a child?", answer: "About 2 inches (5 cm), or roughly one-third of the chest's anterior-posterior diameter.", category: "Pediatric Resus"},
        {question: "Which compression technique is preferred for a 2-rescuer infant resuscitation?", answer: "The 2-thumb encircling-hands technique.", category: "Pediatric Resus"},
        {question: "How is an AED used on a child under 8 years (or <25 kg)?", answer: "Use a pediatric dose attenuator/pads if available; if not, use a standard adult AED.", category: "Pediatric Resus"},
        {question: "When do you start CPR on a child with a pulse?", answer: "When the heart rate is below 60/min with signs of poor perfusion despite adequate oxygenation and ventilation.", category: "Pediatric Resus"},
        {question: "What is the single-rescuer compression-to-ventilation ratio for a child?", answer: "30:2 (the same as adults).", category: "Pediatric Resus"}
    ],
    quiz: [
        {q: "The most common cause of cardiac arrest in children is:", options: ["A primary heart rhythm problem", "Respiratory failure/hypoxia", "Congenital heart disease", "Drug overdose"], correct: 1, explanation: "Pediatric arrests are usually the end result of respiratory failure, so airway and ventilation are critical."},
        {q: "The 2-rescuer compression-to-ventilation ratio for a child is:", options: ["30:2", "15:2", "5:1", "10:2"], correct: 1, explanation: "Two-rescuer pediatric CPR uses 15:2; single-rescuer uses 30:2."},
        {q: "You should begin CPR on an infant who has a pulse when the heart rate is:", options: ["Below 100/min", "Below 80/min", "Below 60/min with poor perfusion", "Below 40/min only"], correct: 2, explanation: "A heart rate under 60 with poor perfusion despite oxygenation/ventilation is treated as arrest in infants and children."}
    ],
    critical: [
        {id: "crit_4_12_1", scenario: "A 6-month-old is unresponsive and not breathing. Two EMTs are present and begin CPR.", question: "Which technique and ratio are correct?", options: [{t: "Heel of one hand, 30:2", f: "Incorrect. That is adult technique; 2-rescuer infant CPR differs."}, {t: "2-thumb encircling-hands technique at a 15:2 ratio", f: "Correct. Two rescuers use the 2-thumb technique and a 15:2 ratio for infants."}], correct: 1, explanation: "Two-rescuer infant CPR uses the 2-thumb encircling-hands technique with a 15:2 compression-to-ventilation ratio.", kpi: "Applies correct pediatric 2-rescuer CPR technique and ratio"},
        {id: "crit_4_12_2", scenario: "A 3-year-old in respiratory distress becomes limp; the heart rate is 40/min with mottled skin and no central pulse improvement despite good BVM ventilation with oxygen.", question: "What is the next step?", options: [{t: "Continue ventilations only and reassess in 2 minutes", f: "Incorrect. A HR <60 with poor perfusion despite ventilation requires compressions."}, {t: "Begin chest compressions (CPR) now", f: "Correct. HR <60 with poor perfusion despite oxygenation/ventilation is treated as arrest."}], correct: 1, explanation: "In children, a heart rate below 60/min with poor perfusion despite adequate oxygenation and ventilation is an indication to start CPR.", kpi: "Initiates CPR for pediatric bradycardia with poor perfusion"},
        {id: "crit_4_12_3", scenario: "You must defibrillate a 5-year-old in ventricular fibrillation, but your AED has only adult pads and no pediatric attenuator.", question: "What should you do?", options: [{t: "Withhold defibrillation because pediatric pads are unavailable", f: "Incorrect. Defibrillation should not be delayed; an adult AED is acceptable if pediatric equipment is unavailable."}, {t: "Use the standard adult AED, ensuring pads do not touch each other (anterior-posterior placement if needed)", f: "Correct. A standard AED is preferred over no defibrillation when pediatric equipment is unavailable."}], correct: 1, explanation: "If a pediatric attenuator/pads are unavailable, use a standard adult AED rather than withhold defibrillation; position pads so they do not touch.", kpi: "Defibrillates a child appropriately when pediatric equipment is unavailable"}
    ]
},
{
    id: "c4s13",
    shortTitle: "4.13 Termination of Resuscitation & Verification of Death",
    summary: `<div class="sum-card">
        <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#file-text"/></svg> Termination of Resuscitation & Verification of Death</h3>

        <p>Not every cardiac arrest should be resuscitated, and not every resuscitation should continue indefinitely. Decisions to withhold or terminate resuscitation follow local protocol and medical direction. Always know your service's specific policy.</p>

        <h4>When NOT to Begin Resuscitation</h4>
        <ul>
            <li><strong>Obvious/irreversible death:</strong> Decapitation, decomposition, incineration, rigor mortis, or dependent lividity (livor mortis) with injuries incompatible with life.</li>
            <li><strong>A valid DNR / POLST order</strong> directing no resuscitation.</li>
        </ul>

        <h4>Field Termination of Resuscitation (TOR)</h4>
        <p>When started, resuscitation may be terminated under medical direction. Commonly considered factors (per protocol) include:</p>
        <ul>
            <li>Arrest not witnessed by EMS, no return of spontaneous circulation (ROSC) after adequate resuscitation, and no shock delivered (BLS TOR criteria).</li>
            <li>Persistent asystole after high-quality CPR and reversible causes addressed.</li>
            <li>Online medical direction / physician order to cease efforts.</li>
        </ul>

        <h4>After a Death</h4>
        <ul>
            <li>Communicate clearly and compassionately with family; use the word "died/dead" (avoid euphemisms).</li>
            <li>Preserve the scene if a crime is suspected; minimize disturbance of the body and surroundings.</li>
            <li>Follow protocol for notification (medical examiner/coroner, law enforcement) and documentation.</li>
        </ul>

        <div class="highlight-box" style="background:#f8d7da; border-left-color:#721c24;">
            <strong>Protocol First:</strong> EMT authority to withhold or terminate resuscitation varies by jurisdiction and usually requires medical direction. When in doubt, begin resuscitation and contact medical control.
        </div>
    </div>`,
    flashcards: [
        {question: "Name four signs of obvious/irreversible death where resuscitation is withheld.", answer: "Decapitation, decomposition, incineration, rigor mortis (also dependent lividity and injuries incompatible with life).", category: "TOR"},
        {question: "What is dependent lividity (livor mortis)?", answer: "Pooling of blood in dependent body parts after death, producing a reddish-purple discoloration — a sign of obvious death.", category: "TOR"},
        {question: "What document directs you to withhold resuscitation?", answer: "A valid DNR (Do Not Resuscitate) order or POLST.", category: "TOR"},
        {question: "What are the BLS termination-of-resuscitation criteria?", answer: "Arrest not witnessed by EMS, no ROSC after adequate resuscitation, and no shock delivered — terminate per medical direction.", category: "TOR"},
        {question: "How should you communicate a death to family?", answer: "Clearly and compassionately, using the words 'died' or 'dead' rather than euphemisms.", category: "TOR"},
        {question: "What must you preserve if a death may involve a crime?", answer: "The scene and evidence — minimize disturbance of the body and surroundings and notify law enforcement.", category: "TOR"}
    ],
    quiz: [
        {q: "Which finding allows an EMT to withhold resuscitation?", options: ["Cool skin", "Rigor mortis with dependent lividity", "A weak pulse", "Agonal breathing"], correct: 1, explanation: "Rigor mortis and dependent lividity are signs of obvious, irreversible death."},
        {q: "Before terminating resuscitation in the field, an EMT generally must:", options: ["Decide alone", "Obtain medical direction per protocol", "Wait 60 minutes", "Transport regardless"], correct: 1, explanation: "Field termination typically requires online medical direction and follows local protocol."},
        {q: "A patient presents a valid DNR order during a cardiac arrest. You should:", options: ["Begin full resuscitation anyway", "Honor the DNR and provide comfort/supportive care", "Ignore it without family present", "Transport with CPR"], correct: 1, explanation: "A valid DNR directs that resuscitation be withheld; provide comfort care and follow protocol."}
    ],
    critical: [
        {id: "crit_4_13_1", scenario: "You arrive to find a pulseless, apneic patient who is cold with obvious rigor mortis and dependent lividity.", question: "What is the appropriate action?", options: [{t: "Begin CPR and transport immediately", f: "Incorrect. Rigor mortis and lividity are signs of obvious, irreversible death."}, {t: "Withhold resuscitation, follow death-in-the-field protocol, and support the family", f: "Correct. Obvious death signs mean resuscitation is not indicated; follow protocol."}], correct: 1, explanation: "Rigor mortis with dependent lividity indicates obvious, irreversible death; resuscitation is withheld and the death-in-the-field protocol is followed.", kpi: "Recognizes obvious death and withholds futile resuscitation"},
        {id: "crit_4_13_2", scenario: "During resuscitation of an unwitnessed arrest, after adequate CPR there has been no ROSC and the AED has advised 'no shock' on every analysis.", question: "What is the most appropriate next step?", options: [{t: "Continue indefinitely until the patient is in the ED", f: "Incorrect. Protocols allow consideration of termination when BLS TOR criteria are met."}, {t: "Contact medical direction to consider termination of resuscitation per protocol", f: "Correct. Unwitnessed arrest, no ROSC, and no shocks meet BLS TOR criteria for consideration."}], correct: 1, explanation: "Meeting the BLS TOR criteria (unwitnessed, no ROSC, no shock) is a reason to contact medical direction to consider termination per protocol.", kpi: "Applies BLS termination criteria with medical direction"},
        {id: "crit_4_13_3", scenario: "A family produces a valid DNR/POLST as you prepare to resuscitate their pulseless relative.", question: "What do you do?", options: [{t: "Resuscitate anyway because family may change their mind", f: "Incorrect. A valid DNR must be honored."}, {t: "Honor the DNR, withhold resuscitation, and provide compassionate support and documentation", f: "Correct. A valid DNR directs that resuscitation be withheld."}], correct: 1, explanation: "A valid DNR/POLST must be honored; withhold resuscitation, support the family, and document per protocol.", kpi: "Honors a valid DNR order"}
    ]
}
    ]
};