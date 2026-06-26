/* ========== Chapter 9 – Emergency Pharmacology ========== */
window.CPG_DATA = {
    id: "c9",
    title: "Emergency Pharmacology",
    shortTitle: "9. Emergency Pharmacology",
    sections: [
        /* ------------------------------------------------------------------------------
         * c9s1 - Principles of Pharmacology & Drug Classes
         * ------------------------------------------------------------------------------ */
        {
            id: "c9s1",
            shortTitle: "9.1 Principles of Pharmacology & Drug Classes",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Principles of Pharmacology & Drug Classes</h3>

                <h4>Drug Naming - Generic vs. Trade vs. Chemical</h4>
                <p>Every medication has three names. The <strong>chemical name</strong> describes the drug molecular structure (e.g., <em>N-acetyl-para-aminophenol</em>). The <strong>generic name</strong> is the official, non-proprietary name assigned by the United States Adopted Names (USAN) Council this is the name used in NREMT exams and EMS protocols (e.g., <em>acetaminophen</em>). The <strong>trade (brand) name</strong> is the proprietary name given by the manufacturer (e.g., Tylenol). EMTs must know the generic name of every medication they carry and administer NREMT tests generic names exclusively.</p>

                <table>
                    <thead>
                        <tr><th>Drug</th><th>Generic Name</th><th>Trade/Brand Name</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Epinephrine</td><td>Epinephrine</td><td>Adrenalin, EpiPen</td></tr>
                        <tr><td>Albuterol</td><td>Albuterol</td><td>Proventil, Ventolin</td></tr>
                        <tr><td>Naloxone</td><td>Naloxone</td><td>Narcan</td></tr>
                        <tr><td>Nitroglycerin</td><td>Nitroglycerin</td><td>Nitrostat, Nitrolingual</td></tr>
                        <tr><td>Ondansetron</td><td>Ondansetron</td><td>Zofran</td></tr>
                        <tr><td>Diphenhydramine</td><td>Diphenhydramine</td><td>Benadryl</td></tr>
                    </tbody>
                </table>

                <h4>Pharmacodynamics - How Drugs Produce Their Effects</h4>
                <p><strong>Pharmacodynamics</strong> is the study of how drugs interact with the body to produce a biochemical or physiological effect. Most drugs act by binding to <strong>receptors</strong> specialised protein molecules on cell surfaces or within cells that trigger a response. Key receptor interaction types include:</p>
                <ul>
                    <li><strong>Agonist:</strong> A drug that binds to a receptor and activates it, producing a response. Example: <em>epinephrine</em> activates beta-adrenergic receptors to cause bronchodilation and increased heart rate. <em>Morphine</em> activates mu-opioid receptors to produce analgesia.</li>
                    <li><strong>Antagonist:</strong> A drug that binds to a receptor but does NOT activate it; instead, it blocks the receptor and prevents agonists from binding. Example: <em>naloxone</em> is a competitive antagonist at mu-opioid receptors it reverses opioid overdose by displacing opioids from the receptor site.</li>
                    <li><strong>Partial agonist:</strong> A drug that activates a receptor but produces a weaker response than a full agonist, even at maximal receptor occupancy. Example: <em>buprenorphine</em> partially activates opioid receptors produces some analgesia but with a ceiling effect that reduces respiratory depression risk.</li>
                    <li><strong>Competitive antagonism:</strong> The antagonist competes with the agonist for the same binding site. The effect can be overcome by increasing the concentration of the agonist. Naloxone is a competitive antagonist at opioid receptors higher doses of naloxone may be needed for synthetic opioids like fentanyl.</li>
                    <li><strong>Non-competitive antagonism:</strong> The antagonist binds to a different site (allosteric site) and changes the receptor shape so the agonist cannot produce its effect, regardless of agonist concentration. This type of blockade cannot be overcome by giving more agonist.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Key NREMT Concept:</strong> Understand the difference between <strong>agonists and antagonists</strong>. EMT-level medications that are agonists: epinephrine (adrenergic), albuterol (beta-2 adrenergic), morphine (opioid). EMT-level antagonists: naloxone (opioid antagonist), flumazenil (benzodiazepine antagonist typically not in EMT scope but good to know). Atropine is an <strong>anticholinergic</strong> (blocks parasympathetic muscarinic receptors).
                </div>

                <h4>Pharmacokinetics - What the Body Does to the Drug (ADME)</h4>
                <p><strong>Pharmacokinetics</strong> describes the movement of a drug through the body over time, summarised by the acronym <strong>ADME</strong>:</p>
                <table>
                    <thead>
                        <tr><th>Phase</th><th>Description</th><th>Clinical Relevance for EMTs</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>A</strong>bsorption</td><td>Movement of drug from administration site into the bloodstream</td><td>Route determines speed: IV/IO (immediate), inhalation (rapid), IM (moderate), PO (slow, variable)</td></tr>
                        <tr><td><strong>D</strong>istribution</td><td>Movement of drug from bloodstream into tissues and organs</td><td>Factors: blood flow, protein binding, blood-brain barrier. Onset of effect depends on distribution speed</td></tr>
                        <tr><td><strong>M</strong>etabolism</td><td>Chemical conversion of drug into metabolites (primarily in the liver)</td><td>First-pass metabolism reduces bioavailability of oral drugs. Liver disease impairs metabolism drug accumulation</td></tr>
                        <tr><td><strong>E</strong>xcretion</td><td>Removal of drug and metabolites from the body</td><td>Primarily renal (urine). Renal impairment drug accumulation. Also: bile, sweat, breast milk, exhaled air</td></tr>
                    </tbody>
                </table>

                <h4>First-Pass Metabolism</h4>
                <p><strong>First-pass metabolism</strong> refers to the metabolism of a drug by the liver <em>before</em> it reaches the systemic circulation. When a drug is taken <strong>orally (PO)</strong>, it is absorbed from the gastrointestinal tract into the portal vein, which carries it directly to the liver. The liver may metabolise a significant portion of the drug before it ever reaches the general circulation, reducing the <strong>bioavailability</strong> (the fraction of the administered dose that reaches systemic circulation unchanged). This is why some drugs require much higher oral doses than IV doses to achieve the same effect and why certain drugs (e.g., naloxone, epinephrine) cannot be given orally because they would be completely metabolised before reaching their target. Routes that <strong>bypass first-pass metabolism</strong> include IV, SL (sublingual), IN (intranasal), inhaled, IM, and PR (rectal though some rectal dosing may partially bypass first-pass).</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical for NREMT:</strong> First-pass metabolism is why <strong>nitroglycerin is given sublingually (SL)</strong> if swallowed, NTG undergoes extensive first-pass metabolism in the liver and would be ineffective. The sublingual route allows direct absorption into the systemic circulation via the oral mucosa, bypassing the portal circulation and the liver.
                </div>

                <h4>Half-Life, Steady State, and Onset/Peak/Duration</h4>
                <p><strong>Half-life (T1/2)</strong> is the time required for the plasma concentration of a drug to decrease by 50%. It determines the dosing interval: a drug with a short half-life (e.g., epinephrine ~2 minutes) must be given frequently or by continuous infusion, while a drug with a long half-life (e.g., diazepam ~20-50 hours) can be given less frequently. <strong>Steady state</strong> is reached after approximately <strong>4-5 half-lives</strong> of regular dosing, when the rate of drug administration equals the rate of elimination. At steady state, plasma concentrations remain relatively consistent between doses.</p>
                <p>The <strong>therapeutic index (TI)</strong> is the ratio of the toxic dose to the effective dose (TI = TD50 / ED50). A narrow therapeutic index means the difference between an effective dose and a toxic dose is small these drugs require careful monitoring. Examples of narrow-TI drugs: <strong>digoxin, lithium, warfarin, phenytoin, theophylline</strong>. A wide TI means the drug is relatively safe (e.g., penicillin, acetaminophen at therapeutic doses).</p>
                <p><strong>Onset</strong> is the time from administration until the drug begins to produce its therapeutic effect. <strong>Peak</strong> is the time at which the drug reaches its maximum concentration in the bloodstream and produces its maximum effect. <strong>Duration</strong> is the length of time the drug produces its therapeutic effect. These parameters vary significantly by route: IV epinephrine has an onset of seconds and duration of ~5-10 minutes; IM epinephrine has an onset of ~5-10 minutes and duration of ~1 hour.</p>

                <h4>DEA Drug Schedules - Controlled Substances Act</h4>
                <p>The <strong>Controlled Substances Act (CSA)</strong> classifies drugs into five schedules (I-V) based on their medical use, abuse potential, and safety profile. EMTs must understand the scheduling of the medications they carry for proper storage, documentation, and security:</p>
                <table>
                    <thead>
                        <tr><th>Schedule</th><th>Definition</th><th>Examples</th><th>EMT Relevance</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>C-I</strong></td><td>High abuse potential, NO accepted medical use</td><td>Heroin, LSD, marijuana (federal), ecstasy, peyote</td><td>Never carried by EMTs. No legitimate medical prescription</td></tr>
                        <tr><td><strong>C-II</strong></td><td>High abuse potential, accepted medical use with severe restrictions</td><td>Morphine, fentanyl, oxycodone, hydromorphone, cocaine, methamphetamine, methylphenidate</td><td>Some EMT services carry morphine or fentanyl under paramedic-level protocols. Strict inventory requirements</td></tr>
                        <tr><td><strong>C-III</strong></td><td>Moderate abuse potential, accepted medical use</td><td>Tylenol with codeine, buprenorphine (Suboxone), ketamine, anabolic steroids</td><td>Less commonly carried by EMTs. Ketamine may be used for analgesia/dissociation at ALS level</td></tr>
                        <tr><td><strong>C-IV</strong></td><td>Low abuse potential, accepted medical use</td><td>Diazepam (Valium), midazolam (Versed), lorazepam (Ativan), alprazolam (Xanax), zolpidem (Ambien)</td><td>Benzodiazepines may be carried for seizures (diazepam, midazolam). Moderate documentation requirements</td></tr>
                        <tr><td><strong>C-V</strong></td><td>Lowest abuse potential, accepted medical use</td><td>Codeine-containing cough syrups (with &le;200 mg codeine/100 mL), pregabalin (Lyrica), lacosamide</td><td>Rarely carried by EMTs. Some states allow dispensing without prescription for certain C-V preparations</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> EMTs must follow <strong>controlled substance protocols</strong> meticulously. Controlled medications (typically C-II through C-IV on EMS units) require: <strong>dual documentation</strong> (two providers witness administration and count), <strong>secure storage</strong> (locked box or compartment on the rig), <strong>wasting documentation</strong> (partially used controlled substances are wasted with a witness), and <strong>inventory counts</strong> at every shift change. Any discrepancy must be reported immediately.
                </div>

                <h4>EMT Medication Classes</h4>
                <p>Below are the major drug classes relevant to the EMT scope of practice. Know the <strong>indication, contraindication, dose, route, and side effects</strong> for each medication your service carries:</p>

                <h5>Sympathomimetics (Adrenergic Agonists)</h5>
                <p>Drugs that mimic the sympathetic nervous system (fight-or-flight response). Act on alpha- and beta-adrenergic receptors.</p>
                <ul>
                    <li><strong>Epinephrine:</strong> Non-selective adrenergic agonist (alpha-1, alpha-2, beta-1, beta-2). Indications: anaphylaxis (IM auto-injector or 1:1000 solution), cardiac arrest (IV/IO 1:10,000 solution at ALS level), severe asthma exacerbation. Side effects: tachycardia, hypertension, anxiety, tremor, palpitations. Reversal: rapidly metabolised, effect short-lived.</li>
                    <li><strong>Albuterol:</strong> Selective beta-2 adrenergic agonist. Indication: asthma exacerbation, COPD exacerbation with bronchospasm, anaphylaxis (as adjunct to epinephrine). Route: nebulised inhalation. Side effects: tachycardia (beta-1 cross-stimulation at high doses), tremor, nervousness, hypokalaemia.</li>
                </ul>

                <h5>Parasympatholytics (Anticholinergics)</h5>
                <p>Drugs that block the parasympathetic nervous system (rest-and-digest).</p>
                <ul>
                    <li><strong>Atropine:</strong> Muscarinic acetylcholine receptor antagonist. Indications: bradycardia with haemodynamic instability (0.5 mg IV push q3-5 min, max 3 mg), organophosphate poisoning (high doses), nerve agent exposure. Side effects: tachycardia, dry mouth, blurred vision, urinary retention, flushing, hyperthermia (anticholinergic toxidrome). Note: removed from ACLS cardiac arrest algorithms in 2010 for PEA/asystole but still used for symptomatic bradycardia.</li>
                </ul>

                <h5>Vasodilators</h5>
                <p>Drugs that dilate blood vessels, reducing preload and/or afterload.</p>
                <ul>
                    <li><strong>Nitroglycerin (NTG):</strong> Venous (primarily) and arterial vasodilator. Indication: angina pectoris, acute coronary syndrome (ACS), acute cardiogenic pulmonary oedema (preload reduction). Route: SL tablet or spray. <strong>Contraindications:</strong> SBP &lt;90-100 mmHg (depending on protocol), recent PDE-5 inhibitor use (sildenafil/Viagra, tadalafil/Cialis within 24-48 hours risk of severe hypotension), right ventricular infarction. Side effects: hypotension, headache, dizziness, reflex tachycardia.</li>
                    <li><strong>Aspirin (acetylsalicylic acid, ASA):</strong> Not a vasodilator per se but an antiplatelet agent. Indication: acute coronary syndrome (chest pain of suspected cardiac origin). Route: PO (chewed, not swallowed whole faster absorption). Dose: 162-324 mg (typically 4 x 81 mg baby aspirin or 1 x 325 mg adult aspirin). Contraindications: active bleeding, known allergy, recent GI bleed, suspected aortic dissection.</li>
                </ul>

                <h5>Narcotics / Analgesics</h5>
                <ul>
                    <li><strong>Morphine sulfate:</strong> Mu-opioid receptor agonist (Schedule II). Indication: moderate to severe pain, acute coronary syndrome (analgesia + vasodilation). Route: IV, IM. Side effects: respiratory depression, hypotension, nausea/vomiting, constipation, miosis (pinpoint pupils), histamine release (itching, flushing), bradycardia. Reversal: naloxone.</li>
                    <li><strong>Fentanyl:</strong> Synthetic mu-opioid agonist (Schedule II), ~100x more potent than morphine. Indication: moderate to severe pain. Route: IV, IM, IN. Advantages: faster onset than morphine (~60 seconds IV), less histamine release (less hypotension), shorter duration (~30-60 min). Side effects: respiratory depression (can be profound with rapid IV push), chest wall rigidity (rare with rapid high-dose IV), nausea, bradycardia.</li>
                </ul>

                <h5>Benzodiazepines</h5>
                <ul>
                    <li><strong>Diazepam (Valium):</strong> Long-acting benzodiazepine (Schedule IV). Indication: seizures (status epilepticus). Route: IV, PR (rectal gel). Onset: rapid IV, moderate PR. Side effects: respiratory depression, hypotension, sedation, dizziness. Duration: ~20-50 hour half-life (active metabolites extend effect).</li>
                    <li><strong>Midazolam (Versed):</strong> Short-acting benzodiazepine (Schedule IV). Indication: seizures (status epilepticus), procedural sedation, premedication. Route: IV, IM, IN. Advantages: faster onset than diazepam, shorter duration, water-soluble. Side effects: respiratory depression, hypotension, amnesia (anterograde), paradoxical excitement (rare).</li>
                </ul>

                <h5>Antiemetics</h5>
                <ul>
                    <li><strong>Ondansetron (Zofran):</strong> Serotonin 5-HT3 receptor antagonist. Indication: nausea and vomiting. Route: ODT (orally disintegrating tablet), IV, IM. Advantages: very effective, relatively few side effects compared to older antiemetics. Side effects: headache, dizziness, constipation, QT prolongation (dose-dependent, caution with other QT-prolonging drugs).</li>
                </ul>

                <h5>Antihistamines</h5>
                <ul>
                    <li><strong>Diphenhydramine (Benadryl):</strong> H1-histamine receptor antagonist. Indication: allergic reactions, anaphylaxis (adjunct to epinephrine), dystonic reactions. Route: IM, IV, PO. Side effects: sedation (most common), dry mouth, blurred vision, urinary retention, confusion in elderly, anticholinergic toxidrome in overdose.</li>
                </ul>

                <h5>Corticosteroids</h5>
                <ul>
                    <li><strong>Dexamethasone (Decadron):</strong> Long-acting glucocorticoid. Indication: asthma exacerbation, croup (paediatric), allergic reactions, anaphylaxis (as anti-inflammatory adjunct). Route: IV, IM, PO. Onset: hours (does not work immediately anti-inflammatory effect takes 1-4 hours). Not a first-line treatment for acute anaphylaxis (epinephrine is first).</li>
                    <li><strong>Methylprednisolone (Solu-Medrol):</strong> Intermediate-acting glucocorticoid. Indication: severe asthma/COPD exacerbation, allergic reactions, spinal cord injury (controversial). Route: IV, IM.</li>
                </ul>

                <h4>Drug References for EMTs</h4>
                <p>EMTs should be familiar with the following drug reference resources. In the field, always follow your <strong>local protocols</strong> (medical director approved drug list) they supersede all other references:</p>
                <ul>
                    <li><strong>Physicians Desk Reference (PDR):</strong> Comprehensive print/digital reference of FDA-approved drug information. Contains full prescribing information, including indications, contraindications, dosing, and adverse effects.</li>
                    <li><strong>Lexicomp:</strong> Regularly updated digital drug database available through many EMS subscription services. Provides concise monographs, dosing calculators, and IV compatibility information.</li>
                    <li><strong>Epocrates:</strong> Popular mobile drug reference app. Provides drug monographs, interaction checks, dosing calculators, and pill identification.</li>
                    <li><strong>Local protocols / drug cards:</strong> Your EMS service should provide a drug reference card or manual specific to your state and medical director approved formulary. This is your <strong>primary reference</strong> in the field.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>NREMT Focus:</strong> For the NREMT cognitive exam, know:<br/>
                    - The <strong>generic name</strong> of every medication listed in the National EMS Scope of Practice Model for EMTs<br/>
                    - The <strong>indication</strong> (why you give it), <strong>contraindication</strong> (when you must NOT give it), <strong>dose</strong> (how much), <strong>route</strong> (how you give it), and <strong>side effects/adverse effects</strong> (what to watch for)<br/>
                    - Drug classifications (e.g., sympathomimetic, anticholinergic, benzodiazepine, opioid)<br/>
                    - The difference between a drug trade name and generic name
                </div>
            </div>`,

            flashcards: [
                { question: "What are the three names a drug can have, and which does NREMT test on?", answer: "Chemical name (molecular structure), generic name (official non-proprietary name), and trade/brand name (manufacturer proprietary name). NREMT tests on generic names exclusively.", category: "Drug Naming" },
                { question: "What is the difference between an agonist and an antagonist?", answer: "An agonist binds to a receptor and activates it, producing a response (e.g., epinephrine activates beta-receptors). An antagonist binds but does NOT activate the receptor; it blocks it (e.g., naloxone blocks opioid receptors).", category: "Pharmacodynamics" },
                { question: "What does ADME stand for and why is it important?", answer: "Absorption (drug enters bloodstream), Distribution (drug travels to tissues), Metabolism (liver converts drug), Excretion (drug removed from body). It describes what the body does to a drug over time.", category: "Pharmacokinetics" },
                { question: "What is first-pass metabolism and which routes bypass it?", answer: "First-pass metabolism is the liver metabolism of an orally absorbed drug before it reaches systemic circulation. Routes that bypass it: IV, IO, SL, IN, inhaled, IM, and PR (partial).", category: "Pharmacokinetics" },
                { question: "How many half-lives are required to reach steady state?", answer: "Approximately 4-5 half-lives of regular dosing are required to reach steady state, where drug administration equals elimination.", category: "Half-Life" },
                { question: "What is a narrow therapeutic index and which drugs have one?", answer: "A narrow TI means the toxic dose is close to the effective dose small errors can be dangerous. Examples: digoxin, lithium, warfarin, phenytoin, theophylline.", category: "Therapeutic Index" },
                { question: "What are the five DEA drug schedules (I-V) and which do EMTs most commonly encounter?", answer: "C-I: no medical use, high abuse (heroin). C-II: high abuse, medical use (morphine, fentanyl). C-III: moderate (codeine, ketamine). C-IV: low abuse (diazepam, midazolam). C-V: lowest (codeine cough syrups). EMTs encounter C-II through C-IV.", category: "Drug Schedules" },
                { question: "What is the primary indication, route, and contraindication of nitroglycerin?", answer: "Indication: angina/ACS. Route: SL tablet or spray. Contraindications: SBP <90-100 mmHg, recent PDE-5 inhibitor use (Viagra/Cialis within 24-48 hours), RV infarction.", category: "EMT Drug Classes" }
            ],

            quiz: [
                {
                    q: "A patient with chest pain has been prescribed nitroglycerin. Which instruction is MOST important for the EMT to give the patient about how to take this medication?",
                    options: [
                        "Swallow the tablet with a full glass of water for fastest absorption",
                        "Place the tablet under the tongue (sublingual) and allow it to dissolve do NOT swallow it",
                        "Crush the tablet and mix it with applesauce for easier administration",
                        "Place the tablet between the cheek and gum and suck on it slowly"
                    ],
                    correct: 1,
                    explanation: "Nitroglycerin is administered sublingually (under the tongue) to bypass first-pass metabolism in the liver. If swallowed, it is metabolised by the liver before reaching systemic circulation and becomes ineffective. The sublingual route allows direct absorption into the bloodstream through the oral mucosa."
                },
                {
                    q: "A 72-year-old male on warfarin (Coumadin) and digoxin presents with new-onset confusion and nausea. His vital signs are stable. Which drug characteristic is MOST relevant to the risk profile of these medications?",
                    options: [
                        "Both drugs are Schedule II controlled substances",
                        "Both drugs have a narrow therapeutic index small changes in dose or metabolism can cause toxicity",
                        "Both drugs are beta-blockers that slow the heart rate",
                        "Both drugs are eliminated entirely by the kidneys without liver metabolism"
                    ],
                    correct: 1,
                    explanation: "Warfarin and digoxin both have a narrow therapeutic index, meaning the difference between an effective dose and a toxic dose is small. ANY patient on these drugs presenting with symptoms of toxicity (confusion, nausea, vomiting, bradycardia for digoxin; easy bruising/bleeding for warfarin) requires careful evaluation and transport. Nausea, vomiting, and confusion are classic early signs of digoxin toxicity."
                },
                {
                    q: "[HARD] A 45-year-old female is experiencing anaphylaxis after a bee sting. She has stridor, urticaria, and hypotension (SBP 82). Which EMT-level medication is the FIRST-LINE treatment, and through what receptor mechanism does it work?",
                    options: [
                        "Diphenhydramine (Benadryl) H1-histamine receptor antagonist that blocks the allergic response at the receptor level",
                        "Epinephrine IM non-selective adrenergic agonist that causes bronchodilation (beta-2), vasoconstriction (alpha-1), and increased cardiac output (beta-1)",
                        "Albuterol nebulised selective beta-2 agonist that reverses bronchoconstriction",
                        "Dexamethasone IV corticosteroid that reduces airway inflammation over 1-4 hours"
                    ],
                    correct: 1,
                    explanation: "Epinephrine is the FIRST-LINE treatment for anaphylaxis. It acts as a non-selective adrenergic agonist: alpha-1 stimulation causes peripheral vasoconstriction (reverses hypotension/hives), beta-1 increases heart rate and contractility, and beta-2 causes bronchodilation (reverses stridor/wheezing). Antihistamines (diphenhydramine) and corticosteroids (dexamethasone) are SECOND-LINE adjuncts they work too slowly to treat the acute life-threatening reaction."
                },
                {
                    q: "A 30-year-old male with a history of opioid use disorder is found unresponsive with pinpoint pupils and respiratory rate of 4 breaths/min. Naloxone is administered. The NALOXONE is best described as which type of pharmacologic agent?",
                    options: [
                        "A partial agonist at the mu-opioid receptor it produces some opioid effect while blocking others",
                        "A non-competitive antagonist at the mu-opioid receptor it permanently deactivates the receptor",
                        "A competitive antagonist at the mu-opioid receptor it displaces opioids from the receptor and can be overcome by higher opioid concentrations",
                        "An agonist at the kappa-opioid receptor that counteracts the mu-opioid effects"
                    ],
                    correct: 2,
                    explanation: "Naloxone is a COMPETITIVE antagonist at mu-opioid receptors. It binds to the same receptor site as opioid agonists (morphine, heroin, fentanyl) but does not activate it instead, it physically blocks the receptor and displaces any bound opioid. Because it is competitive, a sufficiently high dose of opioid (e.g., large fentanyl exposure) can overcome the blockade, which is why repeat or high-dose naloxone may be needed."
                }
            ],

            critical: [
                {
                    id: "crit_9_1_1",
                    scenario: "You are called to a skilled nursing facility for an 80-year-old female with altered mental status. Her medications include digoxin, warfarin, furosemide, and lisinopril. Staff report she has been nauseous and vomiting for two days, and this morning she is confused and weak. Vital signs: HR 44 (irregular), BP 100/62, RR 16, SpO2 95% on room air. The staff suspect she may have missed a few doses of her medications due to the vomiting. The nurse asks, Do you think she needs more digoxin her heart rate is very low?",
                    question: "How should the EMT respond to this question, and what is the MOST appropriate prehospital management?",
                    options: [
                        {t: "Do NOT administer digoxin the patient presentation (bradycardia, nausea/vomiting, confusion, altered mental status) is highly suspicious for digoxin toxicity, not under-dosing. Digoxin has a narrow therapeutic index and these are classic signs of toxicity. Transport for cardiac monitoring and electrolyte evaluation", f: "Correct Digoxin toxicity classically presents with GI symptoms (nausea, vomiting, anorexia) followed by neurological symptoms (confusion, weakness, visual disturbances yellow-green halos) and cardiac effects (bradycardia, heart blocks, ventricular dysrhythmias). Dehydration and electrolyte disturbances (hypokalaemia from furosemide) worsen toxicity. The EMT should NOT administer more digoxin. Provide cardiac monitoring, IV access, and transport."},
                        {t: "The patient likely needs her digoxin a heart rate of 44 is dangerously low and digoxin is prescribed for heart rate control. Administer the missed dose from the medication cart and transport for evaluation", f: "Incorrect Bradycardia in a patient on digoxin with nausea/vomiting and confusion is a red flag for digoxin toxicity, not under-treatment. Digoxin slows heart rate giving more would worsen the bradycardia. The patient presentation with the classic triad of GI symptoms, neurological changes, and bradycardia should immediately alert the EMT to toxicity. Transport with monitoring; do NOT administer additional digoxin."}
                    ],
                    correct: 0,
                    explanation: "This scenario highlights the critical concept of therapeutic index. Digoxin has a narrow TI the toxic dose is very close to the therapeutic dose. Any patient on digoxin presenting with nausea/vomiting + bradycardia + altered mental status has digoxin toxicity until proven otherwise. Risk factors: dehydration (vomiting, diuretics), hypokalaemia (furosemide), renal impairment, advanced age. The EMT should: 1) NOT administer digoxin. 2) Cardiac monitor watch for bradycardia, heart blocks, ventricular ectopy. 3) IV access. 4) Transport. 5) Report suspected toxicity to the receiving facility.",
                    kpi: "Recognises digoxin toxicity presentation and avoids administering a drug with a narrow therapeutic index when toxicity is suspected"
                },
                {
                    id: "crit_9_1_2",
                    scenario: "You are working a 12-lead ECG on a 62-year-old male with chest pressure radiating to his left arm. He is pale and diaphoretic. HR 96, BP 148/92, RR 18, SpO2 97%. The ECG shows ST-elevation in leads II, III, and aVF (inferior STEMI). Per protocol, you may administer aspirin and assist the patient with his prescribed nitroglycerin. After the NTG 0.4 mg SL, the patient BP drops to 82/58 and his chest pressure worsens. The rhythm now shows bradycardia at 48/min. The patient becomes lightheaded.",
                    question: "What is the MOST likely cause of this deterioration, and what should the EMT do next?",
                    options: [
                        {t: "The patient likely has a right ventricular (RV) infarction complicating his inferior STEMI. NTG reduced preload, which is critical for RV preload-dependent cardiac output. Stop NTG, give a 250-500 mL NS fluid bolus, and prepare for possible transcutaneous pacing for the bradycardia", f: "Correct Inferior STEMI often involves the right ventricle. RV infarction makes the patient preload-dependent (the RV cannot pump against high resistance). NTG reduces venous return (preload), which can cause severe hypotension in RV infarction. Treatment: stop NTG, give IV fluids aggressively (500 mL-1 L NS bolus to restore preload), monitor for worsening bradycardia, and transport to a PCI centre."},
                        {t: "The NTG was too strong for this patient. The EMT should have started with a lower dose. Administer epinephrine 0.3 mg IM to raise the blood pressure and continue transport per protocol", f: "Incorrect The BP drop after NTG in a patient with an inferior STEMI is classic for RV infarction until proven otherwise. Inferior STEMI + NTG-induced hypotension = suspect RV infarction. The appropriate response is to stop NTG, give IV fluids, and notify the receiving facility. Epinephrine would increase myocardial oxygen demand and could worsen the infarction size."}
                    ],
                    correct: 0,
                    explanation: "This scenario tests understanding of pharmacodynamics and contraindications. NTG reduces preload (venous dilation) and afterload (arterial dilation). In RV infarction (common with inferior STEMI), the right ventricle cannot generate enough pressure to pump against resistance it relies on adequate preload (venous return). NTG removes that preload, causing catastrophic hypotension. The 3 signs of RV infarction: 1) Inferior STEMI on ECG, 2) Hypotension after NTG, 3) Clear lung fields (no pulmonary oedema). Treatment: fluids, stop NTG, consider pacing, transport to PCI centre.",
                    kpi: "Identifies RV infarction as a contraindication to NTG and manages NTG-induced hypotension with fluids"
                },
                {
                    id: "crit_9_1_3",
                    scenario: "You respond to an overdose call. A 24-year-old male is found by his roommate unresponsive with snoring respirations. There are empty pill bottles nearby: one labelled Oxycodone 30mg (C-II) and one labelled Alprazolam 1mg (C-IV). The patient respiratory rate is 6 breaths/min, shallow. Pupils are 1 mm and reactive. HR 64, BP 100/68, SpO2 88% on room air. The patient does not respond to sternal rub. Your partner asks, Should I give naloxone, or is this a mixed overdose that needs flumazenil too?",
                    question: "What is the correct pharmacologic approach to this patient?",
                    options: [
                        {t: "Administer naloxone (IN or IM per protocol) the patient has opioid-induced respiratory depression (pinpoint pupils, bradypnoea, unresponsiveness). Naloxone is a competitive antagonist at the mu-opioid receptor. DO NOT give flumazenil reversal of benzodiazepines in a mixed overdose can precipitate seizures, especially in the presence of opioids", f: "Correct The patient has clear signs of opioid overdose (respiratory depression, pinpoint pupils, unresponsiveness). Naloxone is the appropriate reversal agent. Flumazenil is NOT recommended in routine prehospital overdose management because: 1) It can precipitate acute withdrawal seizures in benzodiazepine-dependent patients. 2) In a mixed overdose, seizure activity from flumazenil is dangerous. 3) Supportive care (airway, ventilation) is the mainstay for benzodiazepine overdose."},
                        {t: "Administer both naloxone AND flumazenil the patient has overdosed on both an opioid (oxycodone) and a benzodiazepine (alprazolam), so both reversal agents are indicated to prevent respiratory arrest", f: "Incorrect While the patient has a mixed overdose, giving both reversal agents is NOT the correct approach. Naloxone is indicated for the opioid component causing respiratory depression. Flumazenil is relatively contraindicated in prehospital care due to the risk of seizure induction. Supportive airway management (BVM ventilation, OPA/NPA) plus naloxone is the appropriate treatment. The benzodiazepine component is managed with airway support and transport."}
                    ],
                    correct: 0,
                    explanation: "This scenario tests understanding of pharmacodynamics: naloxone is a competitive mu-opioid antagonist that reverses respiratory depression. Flumazenil is a competitive benzodiazepine antagonist that should be used with extreme caution it can cause seizures, especially in patients with underlying seizure disorder, benzodiazepine dependence, tricyclic antidepressant co-ingestion, or mixed overdoses. The standard of care for suspected polysubstance overdose: 1) Airway management (BVM, OPA). 2) Naloxone for opioid-induced respiratory depression. 3) Supportive care for other agents. 4) Transport for monitoring.",
                    kpi: "Appropriately selects naloxone for opioid overdose and correctly avoids flumazenil in a mixed overdose setting"
                }
            ]
        },

        /* ------------------------------------------------------------------------------
         * c9s2 - Routes of Administration
         * ------------------------------------------------------------------------------ */
        {
            id: "c9s2",
            shortTitle: "9.2 Routes of Administration",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Routes of Administration</h3>

                <h4>Overview - Matching Route to Clinical Need</h4>
                <p>The <strong>route of administration</strong> determines how quickly a drug takes effect, what dose is needed, and which clinical situations it is appropriate for. EMTs must select the correct route based on the patient condition a patient in cardiac arrest cannot take oral medication, and a patient with anaphylaxis needs IM epinephrine immediately, not a slow IV infusion. The route affects <strong>bioavailability</strong>, <strong>onset of action</strong>, <strong>peak concentration</strong>, and <strong>duration of effect</strong>.</p>

                <table>
                    <thead>
                        <tr><th>Route</th><th>Speed of Onset</th><th>Bypasses First-Pass?</th><th>Common EMT Uses</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>IV</strong> (Intravenous)</td><td>Immediate (15-60 sec)</td><td>Yes</td><td>Cardiac arrest, severe shock, any critical medication</td></tr>
                        <tr><td><strong>IO</strong> (Intraosseous)</td><td>Immediate (15-60 sec)</td><td>Yes</td><td>Alternative when IV fails cardiac arrest, shock</td></tr>
                        <tr><td><strong>IN</strong> (Intranasal)</td><td>Rapid (1-5 min)</td><td>Yes</td><td>Naloxone, midazolam, fentanyl</td></tr>
                        <tr><td><strong>Inhaled/Nebulised</strong></td><td>Rapid (3-10 min)</td><td>Yes</td><td>Albuterol for asthma/COPD</td></tr>
                        <tr><td><strong>SL</strong> (Sublingual)</td><td>Rapid (2-5 min)</td><td>Yes</td><td>Nitroglycerin for angina</td></tr>
                        <tr><td><strong>IM</strong> (Intramuscular)</td><td>Moderate (5-15 min)</td><td>Yes</td><td>Epinephrine for anaphylaxis, glucagon for hypoglycaemia</td></tr>
                        <tr><td><strong>PO</strong> (Oral)</td><td>Slow (15-60 min)</td><td>No</td><td>Aspirin for ACS, activated charcoal (rare)</td></tr>
                        <tr><td><strong>PR</strong> (Rectal)</td><td>Moderate (5-15 min)</td><td>Partial</td><td>Diazepam for seizure (if IV/IN not available)</td></tr>
                        <tr><td><strong>Topical/Transdermal</strong></td><td>Slow (30 min-hours)</td><td>Yes</td><td>Not commonly used by EMTs; patient may have a patch (NTG, fentanyl, nicotine)</td></tr>
                    </tbody>
                </table>

                <h4>Oral (PO) Route</h4>
                <p>The oral route is the most common medication route in medicine but the <strong>least desirable in most prehospital emergencies</strong>. Absorption is slow and variable because the drug must pass through the GI tract and undergo <strong>first-pass metabolism in the liver</strong>. The patient must be conscious, alert, and able to swallow safely aspiration risk is significant in patients with altered mental status, seizures, or vomiting. <strong>EMT uses:</strong> aspirin for chest pain (chewed for faster buccal absorption, not swallowed whole), oral glucose for hypoglycaemia (buccal route between cheek and gum).</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl:</strong> When giving aspirin for ACS, instruct the patient to <strong>chew the tablet(s)</strong> rather than swallowing them whole. Chewing breaks the tablet into small particles, increasing the surface area for absorption through the buccal mucosa and stomach. This achieves therapeutic antiplatelet effect in ~10-15 minutes versus ~30 minutes for whole tablets.
                </div>

                <h4>Inhaled / Nebulised Route</h4>
                <p>Drugs delivered by inhalation are absorbed directly through the alveolar-capillary membrane in the lungs, providing <strong>rapid systemic absorption equivalent to IV</strong> for some drugs (e.g., albuterol). The drug is mixed with normal saline in a nebuliser compressed oxygen or air creates a fine mist that the patient breathes in over 5-15 minutes. <strong>Benefits:</strong> delivers drug directly to the site of action (lungs) for respiratory conditions, rapid absorption, minimal systemic side effects compared to systemic administration. <strong>EMT uses:</strong> albuterol (beta-2 agonist) for asthma, COPD exacerbation, and anaphylaxis-associated wheezing. <strong>Metered-dose inhalers (MDIs)</strong> with a spacer or holding chamber may also be used per protocol (assist patient with their own inhaler).</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Important:</strong> Nebulised albuterol is a <strong>beta-2 selective agonist</strong>, but at high doses it can cross-stimulate beta-1 receptors, causing tachycardia, palpitations, and tremors. Monitor the patient heart rate and cardiac rhythm during administration. In patients with known cardiac disease, use caution and be prepared to stop if significant tachycardia or dysrhythmias develop.
                </div>

                <h4>Intravenous (IV) Route</h4>
                <p>The IV route delivers medication <strong>directly into the bloodstream</strong> through a cannula inserted into a peripheral vein. It provides the <strong>fastest onset of action</strong> (immediate to 60 seconds) and allows precise dose titration. IV access is the preferred route for critical medications in cardiac arrest, severe shock, and other emergencies. <strong>Needle gauge:</strong> larger gauge = smaller number = faster flow. 14G (largest) used for massive trauma resuscitation. 16G trauma, surgery. 18G most common for adult medical/resuscitation IVs. 20G general medical, smaller veins. 22G paediatric, elderly with fragile veins. 24G (smallest) neonatal, tiny veins. <strong>Preferred sites:</strong> antecubital fossa (AC largest, best for resuscitation), forearm veins, dorsal hand veins (for slower infusions).</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Best Practice:</strong> In critical patients (cardiac arrest, trauma), choose the <strong>largest gauge catheter the vein can accommodate</strong> typically 14-18G in the antecubital fossa. Flow rate increases dramatically with larger gauge: an 18G catheter at gravity runs ~50-60 mL/min of NS; a 14G at gravity runs ~150 mL/min. With a pressure bag, these rates can double or triple.
                </div>

                <h4>Intraosseous (IO) Route</h4>
                <p>The IO route delivers medication directly into the <strong>bone marrow cavity</strong>, which acts as a non-collapsible vein. Medications and fluids enter the central circulation rapidly because the marrow cavity is rich in venous sinusoids that drain directly into the venous system. <strong>IO absorption is essentially equivalent to IV</strong> all medications that can be given IV can be given IO, at the same doses. This is a critical concept for NREMT. <strong>Indications:</strong> cardiac arrest when IV access is not obtainable <strong>after 2 attempts or 90 seconds</strong> (whichever comes first), severe shock with inaccessible veins, burns covering potential IV sites, paediatric emergencies, status epilepticus. <strong>Insertion sites:</strong> proximal tibia (most common 1-2 cm below and medial to the tibial tuberosity), distal femur, humeral head (anterior shoulder gives central-like flow rates), sternum (military/specialised). <strong>Contraindications:</strong> fracture in the target bone, recent orthopaedic surgery/hardware at the site (within 24 hours), infection/cellulitis over the insertion site, insufficient bone landmarks (paediatric less than 3 kg).</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical NREMT Concept:</strong> <strong>All medications that can be given IV can also be given IO at the same dose.</strong> IO is indicated when IV access fails after 2 attempts or 90 seconds in a critically ill patient. Do NOT delay vascular access in cardiac arrest if you cannot get an IV quickly, the IO route should be obtained immediately. Do not waste time on multiple failed IV attempts.
                </div>

                <h4>Intramuscular (IM) Route</h4>
                <p>The IM route delivers medication into a <strong>skeletal muscle belly</strong>, which has a rich blood supply providing moderate absorption speed (faster than SQ/PO but slower than IV/IO). <strong>Needle size for IM:</strong> 22-25 gauge, length varies by injection site and patient size 1 inch for deltoid (average adult), 1-1.5 inches for vastus lateralis, 1.5-2 inches for ventrogluteal (larger patients may need longer needles to reach muscle). Volume limit: deltoid up to 1 mL, vastus lateralis up to 2 mL, ventrogluteal up to 3-4 mL in adults. <strong>Sites:</strong> deltoid (upper arm epinephrine auto-injectors, vaccines), vastus lateralis (lateral thigh preferred in children, glucagon IM), ventrogluteal (hip large muscle, minimal risk of hitting nerves/vessels, preferred for larger volumes). <strong>EMT uses:</strong> epinephrine 1:1000 for anaphylaxis, glucagon for hypoglycaemia (if no IV access), diphenhydramine for allergic reactions, naloxone IM (if IN not available).</p>

                <table>
                    <thead>
                        <tr><th>IM Site</th><th>Location</th><th>Needle Length (Adult)</th><th>Max Volume</th><th>Best For</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Deltoid</td><td>Upper arm, 2-3 finger-widths below acromion</td><td>5/8-1 inch / 16-25 mm</td><td>1 mL</td><td>Epinephrine auto-injector, vaccines</td></tr>
                        <tr><td>Vastus Lateralis</td><td>Lateral mid-thigh, midpoint between greater trochanter and lateral knee</td><td>1-1.5 inch / 25-38 mm</td><td>2 mL</td><td>Children, glucagon, large-volume IM</td></tr>
                        <tr><td>Ventrogluteal</td><td>Gluteus medius locate with palm on greater trochanter, index finger on ASIS, middle finger on iliac crest</td><td>1.5-2 inch / 38-50 mm</td><td>3-4 mL</td><td>Largest volume, safest (avoids sciatic nerve)</td></tr>
                    </tbody>
                </table>

                <h4>Sublingual (SL) Route</h4>
                <p>The sublingual route places the medication <strong>under the tongue</strong>, where it is absorbed directly through the sublingual mucosa into the systemic circulation. This route <strong>bypasses first-pass metabolism</strong> because venous drainage from the sublingual area goes directly into the superior vena cava, avoiding the portal circulation. Onset is rapid (2-5 minutes). The patient must have an intact oral mucosa and be able to cooperate (hold the medication under the tongue without swallowing). <strong>EMT use:</strong> nitroglycerin tablets or spray for angina/ACS. The spray is administered onto or under the tongue. Advise the patient not to swallow or rinse the mouth after administration.</p>

                <h4>Intranasal (IN) Route</h4>
                <p>The intranasal route delivers medication <strong>onto the nasal mucosa</strong>, which is rich in blood vessels, allowing rapid absorption directly into the systemic circulation. It <strong>bypasses first-pass metabolism</strong> and provides an onset nearly as fast as IV for some drugs (1-5 minutes). <strong>Advantages:</strong> no needles required, easy to administer, rapid absorption, no IV access needed. <strong>Limitations:</strong> volume-limited (max ~1 mL per nostril in adults, less in children), may be less effective in patients with nasal congestion, epistaxis, or facial trauma. <strong>EMT uses:</strong> naloxone (Narcan) for opioid overdose, midazolam for seizures, fentanyl for pain. <strong>Administration technique:</strong> use a mucosal atomisation device (MAD) attached to a syringe the atomiser creates fine droplets that coat the nasal mucosa. Administer half the dose in each nostril. Gently close the nostril after administration to minimise runoff.</p>

                <h4>Rectal (PR) Route</h4>
                <p>The rectal route is used when <strong>no other route is available</strong> the patient is actively seizing (cannot take PO/IN), has no IV access, and IM is not appropriate. The rectal mucosa is vascular and provides moderate absorption. Some (but not all) rectal absorption bypasses first-pass metabolism (approximately 50% of rectal venous drainage goes into the systemic circulation directly). <strong>EMT use:</strong> diazepam rectal gel (Diastat) for status epilepticus typically used in paediatric patients or when IV/IN/IM routes are not feasible. <strong>Administration:</strong> lubricate the rectal tip, insert 2-4 cm (less in children), administer the dose, and hold the buttocks together for 3-5 minutes to retain the medication.</p>

                <h4>Topical / Transdermal Route</h4>
                <p>The topical/transdermal route delivers medication through the skin for <strong>slow, sustained absorption</strong>. This route bypasses first-pass metabolism but has a very slow onset (30 minutes to hours). It is not commonly used by EMTs for medication administration, but EMTs must be aware of <strong>transdermal patches</strong> that patients may be wearing: nitroglycerin (angina), fentanyl (chronic pain), nicotine (smoking cessation), scopolamine (motion sickness), clonidine (hypertension), estrogen (HRT). <strong>Key warning:</strong> if a patient becomes unstable, check for transdermal patches and <strong>remove them</strong> a patient with an NTG patch on during cardiac arrest or hypotension may have excessive vasodilation contributing to shock. Wear gloves when removing patches to avoid absorbing the medication yourself.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical for NREMT - Route Comparison:</strong><br/>
                    - <strong>Fastest onset:</strong> IV / IO (immediate)<br/>
                    - <strong>Needle-free rapid onset:</strong> IN (intranasal), SL (sublingual), inhaled<br/>
                    - <strong>Moderate onset:</strong> IM<br/>
                    - <strong>Slowest onset:</strong> PO (oral), PR (rectal), transdermal<br/>
                    - <strong>IO is the alternative when IV fails</strong> all IV drugs can be given IO at the same dose<br/>
                    - <strong>Routes that bypass first-pass metabolism:</strong> IV, IO, IM, IN, SL, inhaled, PR (partial), transdermal
                </div>
            </div>`,

            flashcards: [
                { question: "Which routes of administration have the fastest onset of action (immediate to 60 seconds)?", answer: "IV (intravenous) and IO (intraosseous) drug is delivered directly into the bloodstream or bone marrow cavity, which drains directly into the venous system.", category: "Routes Onset Speed" },
                { question: "What is the indication for IO access and how does it relate to IV access?", answer: "IO is indicated when IV access cannot be obtained after 2 attempts or 90 seconds in a critical patient. ALL medications that can be given IV can be given IO at the SAME dose.", category: "IO Route" },
                { question: "What are the three IM injection sites and which is safest for large volumes?", answer: "Deltoid (up to 1 mL), vastus lateralis (up to 2 mL), and ventrogluteal (up to 3-4 mL, safest avoids sciatic nerve).", category: "IM Route" },
                { question: "Why is aspirin given orally but instructed to be CHEWED rather than swallowed whole?", answer: "Chewing increases surface area for faster buccal and gastric absorption, achieving therapeutic antiplatelet effect in ~10-15 min versus ~30 min for whole tablets.", category: "PO Route" },
                { question: "What are the needle gauge sizes (largest to smallest) commonly used for IV access?", answer: "14G (largest, trauma) > 16G > 18G (most common adult resuscitation) > 20G > 22G > 24G (smallest, neonates). Remember: larger gauge = smaller number = faster flow.", category: "Needle Sizes" },
                { question: "Which medication routes bypass first-pass metabolism?", answer: "IV, IO, IM, IN (intranasal), SL (sublingual), inhaled, PR (partial), and transdermal. Only PO (oral) does NOT bypass first-pass metabolism.", category: "First-Pass Bypass" },
                { question: "How is a medication administered via the intranasal (IN) route, and what device is used?", answer: "A mucosal atomisation device (MAD) attached to a syringe creates a fine mist. Half the dose is given in each nostril. Onset is rapid (1-5 min). Common for naloxone, midazolam, and fentanyl.", category: "IN Route" },
                { question: "What is a critical safety consideration regarding transdermal patches in unstable patients?", answer: "If a patient becomes unstable (hypotension, cardiac arrest), check for and REMOVE transdermal patches (NTG, fentanyl, etc.). A hidden patch may contribute to refractory hypotension. Wear gloves.", category: "Transdermal" }
            ],

            quiz: [
                {
                    q: "You are treating a 6-year-old child in status epilepticus with no IV access. The parents report the seizure has been ongoing for 10 minutes. The child weighs approximately 20 kg. Which medication route is MOST appropriate if you have midazolam available?",
                    options: [
                        "Oral (PO) mix the medication with juice and administer with a dropper",
                        "Intranasal (IN) use a mucosal atomisation device, half in each nostril. Rapid onset, no needle, bypasses first-pass metabolism",
                        "Intramuscular (IM) into the deltoid but it will take 15-20 minutes to take effect",
                        "Subcutaneous (SQ) the slowest route but safest in children"
                    ],
                    correct: 1,
                    explanation: "Intranasal midazolam is an excellent choice for status epilepticus when IV access is unavailable: it is needle-free (reduces risk to provider and child), has rapid absorption through the nasal mucosa (~1-5 min onset), bypasses first-pass metabolism, and is simple to administer. The MAD atomiser creates a fine mist for optimal absorption. Half the dose in each nostril. Oral is contraindicated in an actively seizing child (aspiration risk)."
                },
                {
                    q: "A 45-year-old male in cardiac arrest has received two attempts at IV access by your partner, both unsuccessful. According to NREMT guidelines and AHA recommendations, what should be done next?",
                    options: [
                        "Continue CPR and attempt IV access again the third attempt is often successful",
                        "Establish IO access immediately after 2 failed IV attempts or 90 seconds, move to the IO route. All IV medications can be given IO at the same dose",
                        "Administer all medications via the endotracheal (ET) route as a last resort",
                        "Transport immediately without vascular access medications can be given in the ED"
                    ],
                    correct: 1,
                    explanation: "The AHA recommends moving to IO access after 2 failed IV attempts or 90 seconds in cardiac arrest. The IO route is equivalent to IV for both medications and fluids same drugs, same doses. Benefits: non-collapsible vein (bone marrow), rapid absorption, high success rate. The endotracheal route is no longer recommended for routine medication administration in cardiac arrest (inconsistent absorption, higher doses required)."
                },
                {
                    q: "[HARD] A 72-year-old female with known CAD presents with chest pressure. She has a prescription for nitroglycerin 0.4 mg SL spray. The patient tells you, I always just spray it on top of my tongue and swallow it it works best that way. What should the EMT do?",
                    options: [
                        "Instruct the patient that NTG must be sprayed ONTO or UNDER the tongue (sublingually) and not swallowed the sublingual route bypasses first-pass metabolism in the liver, which would otherwise inactivate the drug",
                        "The patient method is acceptable any contact with oral mucosa will provide absorption. Reassure the patient and continue",
                        "Tell the patient to hold the spray in her mouth for 10 seconds then swallow to maximise both buccal and GI absorption",
                        "Administer the NTG via the inhaled route instead the patient will absorb it faster through her lungs"
                    ],
                    correct: 0,
                    explanation: "Nitroglycerin must be given sublingually to bypass first-pass metabolism. If swallowed, NTG is absorbed through the GI tract into the portal vein and delivered to the liver, where it undergoes extensive first-pass metabolism rendering it mostly ineffective. The sublingual route drains directly into the systemic circulation via the superior vena cava, bypassing the liver entirely. The spray should be directed onto or under the tongue, and the patient should not swallow or rinse afterward."
                },
                {
                    q: "Which injection site is preferred for IM administration of a 3 mL volume in a 70 kg adult, and why?",
                    options: [
                        "Deltoid it is the most accessible and has the best blood supply",
                        "Vastus lateralis it can accommodate up to 2 mL in adults, making it suitable for most injections",
                        "Ventrogluteal it can accommodate up to 3-4 mL, avoids the sciatic nerve, and is the preferred site for larger-volume IM injections in adults",
                        "Dorsogluteal (buttock) it can hold up to 5 mL and is the traditional site for large IM injections"
                    ],
                    correct: 2,
                    explanation: "For a 3 mL injection in an adult, the ventrogluteal site is preferred because: 1) It can accommodate up to 3-4 mL. 2) It avoids the sciatic nerve (safe). 3) It provides consistent landmarks. The deltoid is limited to 1 mL. The vastus lateralis is good for up to 2 mL but is more commonly used in children. The dorsogluteal site is no longer recommended due to the risk of sciatic nerve injury."
                }
            ],

            critical: [
                {
                    id: "crit_9_2_1",
                    scenario: "You respond to a 34-year-old female with anaphylaxis after eating shrimp at a restaurant. She has diffuse urticaria, stridor, wheezing, and angioedema of the lips and tongue. She is sitting upright, frightened, and struggling to breathe. HR 130, BP 88/56, RR 28, SpO2 90% on room air. Your protocol calls for IM epinephrine 0.3 mg (1:1000) for anaphylaxis. You have an epinephrine auto-injector and a vial/syringe for manual IM administration available.",
                    question: "Which IM injection site is MOST appropriate for this patient, and why is the IM route chosen over other routes?",
                    options: [
                        {t: "Administer IM epinephrine into the ANTEROLATERAL MID-THIGH (vastus lateralis) this site provides rapid absorption due to large muscle mass and rich blood supply, even in shock. IM is preferred because it is rapid, safe, and does not require IV access. Do NOT use the deltoid in anaphylaxis as peripheral vasoconstriction may reduce absorption", f: "Correct The vastus lateralis is the preferred IM site for epinephrine in anaphylaxis because: 1) It is a large muscle with robust blood flow, providing rapid absorption even in hypotensive patients. 2) The deltoid may have reduced perfusion during shock. 3) The auto-injector is designed for the thigh. IM epinephrine works within 5-10 minutes, which is appropriate for this patient who has stridor and hypotension but is still conscious and maintaining an airway."},
                        {t: "Administer the epinephrine via the INTRANSAL (IN) route using a MAD device this is needle-free and will provide faster absorption than IM in a patient with poor peripheral perfusion", f: "Incorrect Intranasal epinephrine is not a standard formulation, and the volume required for an effective dose (typically several mL of 1:1000) cannot be delivered intranasally (max ~1 mL per nostril). The IM route is the established prehospital treatment for anaphylaxis. Auto-injectors and manual IM injections are designed for this purpose. IV epinephrine would require IV access, which may be difficult in a shocked patient."}
                    ],
                    correct: 0,
                    explanation: "The IM route is the standard for prehospital epinephrine in anaphylaxis. The vastus lateralis (anterolateral thigh) is preferred because: 1) It is accessible even in a seated patient. 2) Large muscle with good blood flow ensures reliable absorption even during shock. 3) Auto-injectors are specifically designed for this site. Dose: 0.3 mg IM (0.3 mL of 1:1000) for adults, 0.15 mg for children. If no improvement after 5-15 minutes, a second dose may be given per protocol. Simultaneously: high-flow oxygen, IV access if possible, consider nebulised albuterol for wheezing, transport.",
                    kpi: "Selects the correct IM site (vastus lateralis) for epinephrine in anaphylaxis and understands the rationale"
                },
                {
                    id: "crit_9_2_2",
                    scenario: "You and your partner are managing a 58-year-old male in cardiac arrest. Your partner has attempted IV access twice once in the AC and once in the forearm with no success. Approximately 2 minutes have elapsed since the start of the arrest. The patient rhythm is PEA at 40/min. You have a mechanical CPR device in place. Your partner says, I think I can get a better IV in the external jugular vein.",
                    question: "What is the MOST appropriate next step for vascular access?",
                    options: [
                        {t: "Stop wasting time on IV attempts establish IO access in the proximal tibia or humeral head NOW. After 2 failed IV attempts or 90 seconds in cardiac arrest, the IO route is indicated. All resuscitation drugs can be given IO at the same doses as IV", f: "Correct The AHA guidelines clearly state that if IV access cannot be obtained after 2 attempts or 90 seconds, IO access should be established. In cardiac arrest, every minute without vascular access delays epinephrine and other resuscitation drugs, which worsens outcomes. The IO route provides equivalent drug absorption. Do not spend additional time on difficult IV access the patient needs medications now."},
                        {t: "Allow your partner one more attempt at external jugular IV access a large EJ line can deliver medications rapidly and is worth the extra minute or two. If that fails, then move to IO", f: "Incorrect While EJ access is a valid technique, spending additional time on IV attempts in a cardiac arrest wastes precious minutes. The recommended threshold is 2 attempts or 90 seconds, after which IO should be obtained. The IO route is proven to be effective for all resuscitation drugs. Continuing IV attempts delays critical epinephrine administration. Move to IO now."}
                    ],
                    correct: 0,
                    explanation: "In cardiac arrest, time to first medication dose is critical. The AHA recommends: 1) Attempt IV access. 2) If unsuccessful after 2 attempts or 90 seconds or sooner if the provider determines IV will be difficult establish IO access. 3) Administer all medications (epinephrine, amiodarone, etc.) at the same doses through IO as through IV. 4) Do NOT delay medication administration for transport to the hospital. Common IO sites: proximal tibia (medial flat surface 2 cm below the patella), humeral head (anterolateral shoulder gives higher flow rates resembling central access).",
                    kpi: "Follows AHA guidelines for timely transition from IV to IO in cardiac arrest"
                },
                {
                    id: "crit_9_2_3",
                    scenario: "Your unit is called to a 22-year-old male found unresponsive with suspected opioid overdose. Bystanders report he shot up about 15 minutes ago. The patient has a respiratory rate of 4-6/min, pinpoint pupils, and is minimally responsive to sternal rub. SpO2 is 85% and dropping. Your protocol allows naloxone via IN, IM, or IV. You have a MAD (mucosal atomisation device) and a vial of naloxone (2 mg/2 mL). The patient has visible injection sites in both antecubital fossae but you cannot find a suitable vein for IV access quickly.",
                    question: "Which route and technique should the EMT choose for naloxone administration?",
                    options: [
                        {t: "Administer intranasal (IN) naloxone using the MAD device 1 mg (1 mL) in each nostril. This route is needle-free, rapid (1-5 min onset), and bypasses first-pass metabolism. It is ideal for opioid overdose where speed is critical and IV access is not immediately available", f: "Correct IN naloxone is an excellent first-line choice for suspected opioid overdose. The MAD atomiser creates a fine mist for rapid absorption across the nasal mucosa. Advantages: no needle stick (important for a patient with known IV drug use reduces bloodborne pathogen risk), rapid onset, easy administration, no IV access needed. Dose: 2 mg total (1 mg/nostril). If no response in 2-3 minutes, repeat per protocol (may need higher doses for fentanyl)."},
                        {t: "Attempt IV access in a foot vein or external jugular IV naloxone has the fastest onset and allows precise dose titration. IO access should be established if IV is not quickly obtainable", f: "Incorrect While IV would provide the fastest onset, the question states IV access is not quickly obtainable. In the patient with respiratory rate of 4/min, spending time trying to access a difficult vein delays life-saving treatment. IN naloxone is rapid enough (1-5 min) and can be administered within seconds. IM is also an option (5-15 min onset) but IN is generally preferred for first-line treatment in uncomplicated opioid overdose. Begin BVM ventilation while the naloxone takes effect."}
                    ],
                    correct: 0,
                    explanation: "Intranasal naloxone is a first-line treatment for opioid overdose in many EMS systems. It provides rapid, needle-free administration that is easy to use and effective. The MAD atomiser ensures the drug coats the nasal mucosa for optimal absorption. Key points: 1) Administer half the dose in each nostril. 2) Onset is 1-5 minutes. 3) BVM ventilation is still needed naloxone does not work instantly. 4) If no response after 2-3 minutes, repeat or escalate (higher doses for synthetic opioids like fentanyl). 5) Be prepared for withdrawal (agitation, vomiting, combativeness) when the patient wakes up.",
                    kpi: "Selects intranasal naloxone for opioid overdose when IV access is not immediately available"
                }
            ]
        },

        /* ------------------------------------------------------------------------------
         * c9s3 - Rights of Medication Administration
         * ------------------------------------------------------------------------------ */
        {
            id: "c9s3",
            shortTitle: "9.3 Rights of Medication Administration",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Rights of Medication Administration</h3>

                <h4>The 5 Original Rights (and Their Expanded Versions)</h4>
                <p>Medication administration is one of the highest-risk skills in EMS. Errors can cause patient harm, legal liability, and loss of certification. The <strong>Rights of Medication Administration</strong> form a systematic framework that, when followed consistently, prevents the vast majority of medication errors. There are <strong>5 original rights</strong>, and modern practice recognises <strong>10 expanded rights</strong>:</p>

                <table>
                    <thead>
                        <tr><th>#</th><th>Right</th><th>Original</th><th>Expanded What This Really Means</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td><strong>Right Patient</strong></td><td>Verify patient identity</td><td>Check ID band (if available), ask patient to state name and DOB, use at least 2 identifiers. For unconscious/unidentified patients, use a temporary identifier and document description</td></tr>
                        <tr><td>2</td><td><strong>Right Drug</strong></td><td>Confirm the correct medication</td><td>Use the <strong>3-check system</strong> check label when 1) removing from storage, 2) preparing the medication, 3) before administration. Check expiration date. Verify against the medication order/protocol</td></tr>
                        <tr><td>3</td><td><strong>Right Dose</strong></td><td>Confirm the correct amount</td><td>Verify dose calculations, check drug reference, consider weight-based dosing (especially paediatrics). Have another provider double-check your calculation</td></tr>
                        <tr><td>4</td><td><strong>Right Route</strong></td><td>Confirm the correct route</td><td>Verify the route is appropriate for the drug and the patient condition. Some drugs have multiple routes ensure you are using the correct one</td></tr>
                        <tr><td>5</td><td><strong>Right Time</strong></td><td>Administer at the correct time</td><td>Document the time of administration accurately. Note: document AFTER giving the medication, not before pre-documentation can lead to double-dosing if the administration is interrupted</td></tr>
                        <tr><td>6</td><td><strong>Right Indication</strong></td><td>Verify the medication is indicated</td><td>Confirm the patient condition matches the drug indication per protocol. Does this patient meet the criteria for this medication?</td></tr>
                        <tr><td>7</td><td><strong>Right Documentation</strong></td><td>Record the administration accurately</td><td>Complete the medication administration record (MAR) and patient care report (PCR) with drug name, dose, route, time, patient response, and any adverse effects</td></tr>
                        <tr><td>8</td><td><strong>Right to Refuse</strong></td><td>Respect patient autonomy</td><td>A patient with capacity has the right to refuse any medication. The EMT must: ensure the patient has capacity, explain the risks of refusal, obtain informed refusal, and document thoroughly</td></tr>
                        <tr><td>9</td><td><strong>Right Assessment</strong></td><td>Assess BEFORE giving the drug</td><td>Obtain baseline vital signs and perform protocol-specific assessments: BP before NTG, lung sounds before albuterol, blood glucose before glucagon/glucose</td></tr>
                        <tr><td>10</td><td><strong>Right Evaluation</strong></td><td>Reassess AFTER giving the drug</td><td>Monitor for therapeutic response AND adverse effects. Recheck vital signs at appropriate intervals. Document the patient response</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical NREMT Concept The Three-Check System:</strong> The single most effective error-prevention strategy in EMS is the <strong>3-check system</strong>. Every time you pick up a medication, CHECK THE LABEL. This means three separate label checks:<br/>
                    <strong>Check 1:</strong> When removing the medication from the storage (drug box, cabinet, or kit).<br/>
                    <strong>Check 2:</strong> When preparing the medication (drawing up into syringe, removing from packaging).<br/>
                    <strong>Check 3:</strong> Immediately before administering to the patient (after all preparation is complete).<br/>
                    Each check verifies: drug name, concentration, dose, expiration date, and route compatibility. <strong>Never administer a medication you did not prepare or verify yourself.</strong>
                </div>

                <h4>Right Patient - Verification Methods</h4>
                <p>Medication errors often occur when a medication intended for one patient is given to another. In the prehospital setting, this is especially dangerous because you may have multiple patients on a single call (MCI, nursing home evacuations). Use <strong>at least two patient identifiers</strong>:</p>
                <ul>
                    <li><strong>Patient identification band:</strong> Check the name, date of birth, and medical record number on the wristband.</li>
                    <li><strong>Ask the patient:</strong> Can you please state your name and date of birth for me? a conscious patient can confirm their identity.</li>
                    <li><strong>Family/caregiver confirmation:</strong> If the patient cannot confirm, ask a family member or staff member to identify the patient.</li>
                    <li><strong>Unconscious/unidentified patients:</strong> Use a temporary identifier (e.g., Unknown male, 22:00 hours, found at 123 Main Street). Document a thorough description (clothing, age estimate, distinguishing features).</li>
                    <li><strong>Do not use:</strong> The patient room number, bed number, or location as an identifier these can change and cause errors.</li>
                </ul>

                <h4>Right Drug - The 3-Check System in Detail</h4>
                <p>The 3-check system is the backbone of medication safety. Each check is a full, independent verification do not rush through it just because you have given the drug hundreds of times before. Complacency is the leading cause of medication errors.</p>
                <p><strong>Check 1 - Removal from storage:</strong> When you take the medication from the drug box, read the label: This is albuterol sulfate 2.5 mg/3 mL solution for nebulisation. The expiration date is current. It matches the protocol for this patient condition.</p>
                <p><strong>Check 2 - Preparation:</strong> As you draw up the medication or remove it from packaging, check the label again. I am preparing the same medication I selected albuterol 2.5 mg. The concentration is correct. I am using the correct preparation technique (no touch technique for sterility).</p>
                <p><strong>Check 3 - Before administration:</strong> With the prepared medication in hand, at the patient side, check the label one final time. I am about to administer albuterol 2.5 mg via nebuliser to Mrs. Smith. The drug, dose, route, and patient are all correct. No contraindications are present.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl - The Read Back Rule:</strong> A common safety practice is to <strong>read the label out loud</strong> to your partner during each check. Verbalising forces you to actively read rather than passively glance at the label. Studies show that silent visual inspection of medication labels is unreliable we see what we expect to see, not always what is actually there. Say it out loud: Albuterol 2.5 mg... albuterol 2.5 mg... albuterol 2.5 mg.
                </div>

                <h4>Right Dose - Avoiding Calculation Errors</h4>
                <p>Dose errors are among the most common and most dangerous medication errors. Decimal point mistakes are notorious <strong>a decimal point error can deliver 10x the intended dose</strong>. Prevention strategies:</p>
                <ul>
                    <li><strong>Double-check calculations:</strong> Have your partner calculate the dose independently and compare results. If they differ, recalculate together.</li>
                    <li><strong>Use weight-based dosing for paediatrics:</strong> All paediatric doses should be calculated per kilogram (mg/kg). Use the Broselow tape for weight estimation in children.</li>
                    <li><strong>Watch for leading/trailing zeros:</strong> Always write a leading zero for doses less than 1 (0.5 mg, not .5 mg). NEVER write a trailing zero (2 mg, not 2.0 mg) 2.0 can be misread as 20.</li>
                    <li><strong>Use drug references:</strong> Check your protocol or drug reference for the correct dose do not rely on memory alone, even for drugs you give frequently.</li>
                    <li><strong>Know your conversions:</strong> 1 g = 1000 mg, 1 mg = 1000 mcg. A 10 mg dose is NOT the same as 0.1 mg. A 1 mg dose is NOT the same as 1 mL (concentration-dependent).</li>
                </ul>

                <h4>Right Route - Verify Before Giving</h4>
                <p>Each medication has a specific route of administration that ensures safe and effective delivery. Some drugs can be given by multiple routes (e.g., naloxone IV, IM, IN), but the dose and concentration differ by route. <strong>Examples of route-specific errors:</strong></p>
                <ul>
                    <li><strong>Epinephrine 1:1000 (1 mg/mL)</strong> is for IM use in anaphylaxis. <strong>Epinephrine 1:10,000 (0.1 mg/mL)</strong> is for IV use in cardiac arrest. Giving 1:1000 IV would deliver 10x the intended dose (1 mg instead of 0.1 mg), potentially causing fatal hypertension, dysrhythmia, or cerebral haemorrhage.</li>
                    <li><strong>Naloxone:</strong> IN dose (2 mg) differs from IV/IM dosing protocols. Always verify the concentration and dose for the selected route.</li>
                    <li><strong>Midazolam:</strong> IN dose is typically higher than IV/IM dose because of absorption differences.</li>
                </ul>

                <h4>Right Assessment - BEFORE Medication Administration</h4>
                <p>Assessment before medication administration is a safety check AND a legal requirement. The EMT must confirm that the drug is safe and indicated for this specific patient at this specific time. <strong>Pre-administration assessments by medication:</strong></p>
                <table>
                    <thead>
                        <tr><th>Medication</th><th>Required Pre-Assessment</th><th>What You Must Verify</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Nitroglycerin</td><td>Blood pressure, recent ED drug use</td><td>SBP >=90-100 mmHg (per protocol). No PDE-5 inhibitors (Viagra, Cialis) in past 24-48 hours</td></tr>
                        <tr><td>Albuterol</td><td>Lung sounds, heart rate, SpO2</td><td>Wheezing or bronchospasm present. Caution if HR >150 or known cardiac dysrhythmia</td></tr>
                        <tr><td>Epinephrine (anaphylaxis)</td><td>Signs of anaphylaxis (urticaria, angioedema, stridor, wheezing, hypotension)</td><td>Confirmed anaphylaxis do NOT give for simple allergic rhinitis or mild local reactions</td></tr>
                        <tr><td>Glucagon / Oral glucose</td><td>Blood glucose level</td><td>Confirmed hypoglycaemia (BG <70 mg/dL or per protocol). Glucagon IM requires the patient to have a blood glucose level confirming hypoglycaemia</td></tr>
                        <tr><td>Naloxone</td><td>Respiratory rate, pupil size, level of consciousness</td><td>Signs of opioid-induced respiratory depression (bradypnoea, pinpoint pupils, unresponsiveness)</td></tr>
                        <tr><td>Aspirin</td><td>Chest pain history, allergies, bleeding</td><td>Symptoms consistent with ACS. No active bleeding, no known allergy, no recent GI bleed, no suspected aortic dissection</td></tr>
                        <tr><td>Ondansetron</td><td>Nausea/vomiting assessment, ECG (if available)</td><td>Known QT prolongation is a relative contraindication. Nausea/vomiting present</td></tr>
                    </tbody>
                </table>

                <h4>Right Evaluation - AFTER Medication Administration</h4>
                <p>Medication administration is not complete when the drug enters the patient it is complete when you have <strong>evaluated the patient response</strong>. This reassessment provides critical information about the drug effectiveness and any adverse effects:</p>
                <ul>
                    <li><strong>Reassess vital signs</strong> at appropriate intervals (typically within 5 minutes of administration, then every 5-15 minutes depending on the drug and clinical situation).</li>
                    <li><strong>Document therapeutic effects:</strong> Chest pain relieved? Breathing easier? Blood glucose improved? Seizure stopped? Pain reduced?</li>
                    <li><strong>Document adverse effects:</strong> Hypotension after NTG? Tachycardia after albuterol? Vomiting after naloxone? Rash? Change in mental status?</li>
                    <li><strong>Compare pre- and post-administration findings:</strong> A formal reassessment demonstrates whether the intervention had the desired effect and whether complications have developed.</li>
                </ul>

                <h4>Right to Refuse</h4>
                <p>A patient with decision-making capacity has the legal and ethical right to refuse any medical treatment, including life-saving medications. The EMT role is not to force treatment but to <strong>ensure the patient is making an informed decision</strong>:</p>
                <ul>
                    <li><strong>Assess capacity:</strong> Does the patient understand their situation, the proposed treatment, the risks of refusal, and the alternatives? Can they communicate a reasoned decision? Patients with altered mental status, dementia, intoxication, or severe hypoxia may lack capacity.</li>
                    <li><strong>Inform the patient:</strong> Explain in clear terms what the medication is, what it is for, what happens if they do not take it, and what alternatives exist (if any).</li>
                    <li><strong>Attempt to find common ground:</strong> Address the patient concerns. If they are afraid of needles, explain that the injection is quick and necessary. If they think their chest pain is nothing, explain the risk of heart attack.</li>
                    <li><strong>Involve medical direction:</strong> For high-risk refusals (e.g., a patient with STEMI refusing aspirin/NTG), contact online medical control for guidance.</li>
                    <li><strong>Document thoroughly:</strong> The refusal, the patient stated reasons, your explanation of risks/benefits, the patient capacity assessment, and any conversations with medical direction.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Documentation Rule:</strong> <strong>Document after administering the medication, not before.</strong> Pre-documenting (charting the medication as given before actually giving it) is a dangerous practice. If the administration is interrupted the patient refuses, you are called away, the drug is dropped you may forget you did not actually give it and later believe you did. This can lead to a missed dose or, worse, a double dose. <strong>Rule: medication goes in the patient first, then on the PCR.</strong>
                </div>

                <h4>Summary - The Medication Administration Checklist</h4>
                <p>Before giving any medication, the EMT should mentally (or verbally, with a partner) run through this checklist:</p>
                <ol>
                    <li><strong>Right patient:</strong> Verified identity using >=2 identifiers</li>
                    <li><strong>Right drug:</strong> 3-check system completed (label checked x 3)</li>
                    <li><strong>Right dose:</strong> Dose calculated, double-checked, appropriate for weight</li>
                    <li><strong>Right route:</strong> Route confirmed safe and appropriate for this drug and patient</li>
                    <li><strong>Right time:</strong> Indicated now not already given recently by another provider</li>
                    <li><strong>Right indication:</strong> Patient condition matches the protocol indication</li>
                    <li><strong>Right assessment:</strong> Baseline vitals and specific pre-administration checks completed</li>
                    <li><strong>Right to refuse:</strong> Patient has capacity and has consented (or implied consent in emergency)</li>
                    <li><strong>Administer the medication</strong></li>
                    <li><strong>Right evaluation:</strong> Reassess vitals, document therapeutic effects and adverse effects</li>
                    <li><strong>Right documentation:</strong> Drug name, dose, route, time, patient response on PCR</li>
                </ol>
            </div>`,

            flashcards: [
                { question: "What are the 5 original rights of medication administration?", answer: "Right patient, right drug, right dose, right route, right time.", category: "5 Rights" },
                { question: "What are the 5 additional expanded rights of medication administration?", answer: "Right indication, right documentation, right to refuse, right assessment (before), and right evaluation (after).", category: "Expanded Rights" },
                { question: "What is the 3-check system and when are the three checks performed?", answer: "Check 1: when removing medication from storage. Check 2: when preparing the medication. Check 3: immediately before administering. Each check verifies drug name, concentration, dose, expiration date.", category: "3-Check System" },
                { question: "How should an EMT verify patient identity before giving a medication?", answer: "Use at least 2 patient identifiers: check the ID band, ask the patient to state name and DOB, or verify with family/caregiver. Do NOT use room number or bed number.", category: "Right Patient" },
                { question: "What pre-administration assessments are required before giving nitroglycerin, albuterol, and glucagon?", answer: "NTG: BP (must be >=90-100 mmHg), no PDE-5 inhibitor use. Albuterol: lung sounds (wheezing), heart rate, SpO2. Glucagon: confirmed blood glucose level <70 mg/dL.", category: "Right Assessment" },
                { question: "What is the correct timing for documenting a medication on the PCR?", answer: "Document AFTER administering the medication, not before. Pre-documentation can lead to double-dosing if the administration is interrupted.", category: "Right Documentation" },
                { question: "What are the three components of an informed medication refusal?", answer: "1) Patient has decision-making capacity. 2) Patient understands the risks of refusal and benefits of treatment. 3) Refusal is documented thoroughly on the PCR with the patient stated reasons.", category: "Right to Refuse" },
                { question: "What is the difference between epinephrine 1:1000 and 1:10,000, and why does this matter?", answer: "1:1000 = 1 mg/mL (IM for anaphylaxis). 1:10,000 = 0.1 mg/mL (IV for cardiac arrest). Giving 1:1000 IV delivers 10x the intended dose this is a classic, potentially fatal medication error.", category: "Right Dose" }
            ],

            quiz: [
                {
                    q: "An EMT is preparing to administer albuterol to a 6-year-old child with asthma. Which of the following represents the CORRECT application of the 3-check system?",
                    options: [
                        "Check the label once when selecting the medication from the drug box since you are familiar with albuterol, additional checks are unnecessary",
                        "Check the label when removing from storage, again when preparing the nebuliser, and a third time at the patient bedside before administration verbalising the drug name and concentration each time",
                        "Check the label only if you are unfamiliar with the medication routine medications do not require three checks",
                        "Ask your partner to read the label once that counts as all three checks if you heard them say it"
                    ],
                    correct: 1,
                    explanation: "The 3-check system requires THREE independent label verifications: 1) when removing from storage, 2) when preparing, and 3) before administration. Verbalising each check out loud with a partner (read back) is a best practice that improves accuracy. Checking only once or relying on familiarity is a common source of medication errors even experienced providers make mistakes when they skip checks."
                },
                {
                    q: "You are called to a 55-year-old male with chest pain. He has a prescription for nitroglycerin 0.4 mg SL. His SBP is 96 mmHg. He tells you he took Viagra (sildenafil) about 36 hours ago for erectile dysfunction. What should the EMT do?",
                    options: [
                        "Administer NTG the SBP is above 90 and 36 hours is long enough since the Viagra",
                        "Do NOT administer NTG PDE-5 inhibitors (sildenafil, tadalafil) are contraindicated with NTG. Even 36 hours may be within the window (tadalafil up to 48 hours). Contact medical control for guidance",
                        "Administer a half-dose of NTG (0.2 mg) reduced dose is safe with recent PDE-5 inhibitor use",
                        "Administer the NTG but monitor the blood pressure closely the benefit of treating the chest pain outweighs the risk of hypotension"
                    ],
                    correct: 1,
                    explanation: "This tests the right assessment and right indication rights. PDE-5 inhibitors (sildenafil/Viagra, tadalafil/Cialis, vardenafil/Levitra) potentiate the hypotensive effect of nitroglycerin the combination can cause severe, refractory hypotension. Sildenafil/vardenafil contraindication: within 24 hours. Tadalafil contraindication: within 48 hours (longer half-life). The proper action is: do NOT give NTG, contact medical control for direction, and transport."
                },
                {
                    q: "[HARD] A 68-year-old female with confusion is brought from a nursing home. The nurse hands you a pre-filled syringe and says, This is Mrs. Johnson midazolam she been seizing. Please give it IM. You read the label and it says Midazolam 5 mg/mL, 2 mL total (10 mg). According to your protocol, IM midazolam for status epilepticus in a 70 kg adult is 0.1 mg/kg. You note the patient is not actively seizing but is drowsy and confused. What is the CORRECT course of action?",
                    options: [
                        "Administer the full 10 mg IM as requested the nurse knows the patient and the protocol for status epilepticus",
                        "Verify the patient identity using at least 2 identifiers, confirm that the patient is actively seizing (she is not currently), check the dose (10 mg exceeds 0.1 mg/kg = 7 mg for a 70 kg patient), and do NOT give the medication until the indication and dose are both verified against your protocol",
                        "Administer 7 mg (1.4 mL) instead of 10 mg this is the weight-based dose",
                        "Call medical control to confirm the order, but administer the medication while waiting time is brain"
                    ],
                    correct: 1,
                    explanation: "Multiple rights are being violated: 1) Right patient verify identity independently. 2) Right indication the patient is not currently seizing. 3) Right dose 10 mg exceeds the weight-based protocol (0.1 mg/kg x 70 kg = 7 mg). 4) Right assessment no confirmation of active seizure activity. The EMT must independently verify all rights before administering. The fact that a nurse handed you the medication does not relieve you of your responsibility to perform the checks yourself."
                },
                {
                    q: "After administering nebulised albuterol to a 10-year-old with asthma, what is the MOST important post-administration assessment the EMT should perform?",
                    options: [
                        "Check the blood glucose level albuterol can cause hypoglycaemia",
                        "Reassess lung sounds, respiratory rate, SpO2, and heart rate evaluate for improvement in air movement AND for adverse effects (tachycardia, tremor)",
                        "Apply a cardiac monitor and obtain a 12-lead ECG albuterol causes ST-elevation",
                        "Document the administration immediately before reassessing the patient"
                    ],
                    correct: 1,
                    explanation: "The right evaluation requires reassessment after medication administration. For albuterol, this means: 1) Lung sounds did wheezing improve? 2) Respiratory rate and work of breathing is the patient breathing more comfortably? 3) SpO2 is oxygenation improving? 4) Heart rate albuterol (beta-2 agonist) can cause tachycardia, especially at higher doses. Document AFTER reassessment, not before."
                }
            ],

            critical: [
                {
                    id: "crit_9_3_1",
                    scenario: "You and your partner respond to a 77-year-old female with shortness of breath at a skilled nursing facility. The nurse reports the patient has COPD and is having a flare-up. As you assess the patient, your partner opens the drug box and takes out the albuterol nebuliser. Without checking the patient identity or vital signs, he hands you the nebuliser and says, Get this going. The patient is confused and cannot confirm her name. The nurse points and says, That Mrs. Garcia.",
                    question: "What is the MOST appropriate response to this situation?",
                    options: [
                        {t: "Before administering, STOP and perform the required checks: verify the patient identity using at least 2 identifiers (check ID band, ask the nurse to confirm name/DOB from the chart), assess lung sounds to confirm wheezing, and obtain baseline vital signs (HR, RR, SpO2, BP). If wheezing is present, administer albuterol. If not present or unknown, hold the medication and reassess", f: "Correct The EMT must independently verify all 10 rights before administering any medication. The partner speed is not an excuse to skip safety checks. Even in a routine COPD patient, the nurse could be wrong about the patient identity or condition. The patient confusion makes identification even more critical check the ID band and the chart. Assess lung sounds if no wheezing is present, albuterol is not indicated."},
                        {t: "Administer the albuterol as your partner instructed time is critical in a COPD exacerbation and the nurse has confirmed the identity. You can document the vitals after starting the treatment", f: "Incorrect Skipping patient identification and pre-administration assessment is a medication error waiting to happen. The nurse may be mistaken, the patient may have had a different condition (CHF exacerbation sounds similar but requires different treatment), and giving albuterol without confirming wheezing is against protocol. Always perform the rights in order: identify the patient, assess the indication, then administer."}
                    ],
                    correct: 0,
                    explanation: "This scenario illustrates the tension between speed and safety in EMS. While time matters in respiratory distress, the rights of medication administration are not optional they exist to prevent errors. The correct sequence: 1) Identify the patient (ID band + nurse confirmation + chart check). 2) Right indication (auscultate lungs confirm wheezing). 3) Right assessment (baseline vitals). 4) Right drug (3-check). 5) Right dose/route/time. 6) Administer. 7) Right evaluation (reassess vitals post-treatment). Document everything on the PCR.",
                    kpi: "Prioritises medication safety checks over speed, even in a time-sensitive respiratory emergency"
                },
                {
                    id: "crit_9_3_2",
                    scenario: "You are treating a 42-year-old male with severe abdominal pain. Per protocol, you may administer ondansetron (Zofran) ODT 4 mg for nausea and fentanyl 50 mcg IV for pain. The patient weight is approximately 80 kg. You have established IV access. As you draw up the fentanyl, you note the vial says Fentanyl 100 mcg/2 mL (50 mcg/mL). You plan to give 1 mL (50 mcg). Your partner says, That bag says 100 mcg per 2 mL you only need 1 mL, so that 50 mcg. Looks good. However, you note that you accidentally grabbed a vial labelled Fentanyl 250 mcg/5 mL (50 mcg/mL) both concentrations are 50 mcg/mL, just different total volumes. You originally thought the concentration was different.",
                    question: "What does this near-miss scenario teach about medication safety, and what should the EMT do?",
                    options: [
                        {t: "Recalculate: 50 mcg dose at 50 mcg/mL concentration = 1 mL. While the total vial volume differs, the concentration is the same, so the prepared volume (1 mL) is correct. However, this near-miss highlights why reading the LABEL CONCENTRATION (not just the total dose on the bag) during the 3-check system is critical always verify both concentration AND total volume", f: "Correct In this case, the dose calculation is still correct because both vials have the same concentration (50 mcg/mL). However, the near-miss demonstrates a common error pattern: checking only the total drug amount on the vial (Fentanyl 100 mcg) without noting the concentration and volume. If the concentration had been different (e.g., 100 mcg/mL vs. 50 mcg/mL), the same volume would have delivered double the intended dose. Always verify: concentration + volume = total dose."},
                        {t: "Discard the drawn-up medication and start over you used the wrong vial. Administering medication from a vial you accidentally grabbed is unsafe, even if the dose calculation works out. Document the near-miss in your PCR", f: "Incorrect While acknowledging the near-miss is good, discarding the correctly prepared medication is unnecessary in this specific case because the concentration is identical (50 mcg/mL in both vials). The real lesson is about the 3-check system: the EMT must verify the label during preparation (check 2) and notice not just the drug name but the concentration. The near-miss should reinforce the read every word on the label habit."}
                    ],
                    correct: 0,
                    explanation: "This scenario tests understanding of the 3-check system and near-miss analysis. The key learning point: when checking a medication label, verify ALL of the following: 1) Drug name. 2) Concentration (mg/mL, mcg/mL). 3) Total volume in the vial/ampule. 4) Total dose (concentration x volume). 5) Expiration date. 6) Route compatibility. A common error is looking only at the large-print drug name and total dose while ignoring the concentration. Different vials of the same drug may have different concentrations, and confusing them is a frequent cause of medication errors.",
                    kpi: "Demonstrates proper label reading during the 3-check system and identifies the importance of verifying concentration in addition to drug name"
                },
                {
                    id: "crit_9_3_3",
                    scenario: "You are called to a private residence for a 60-year-old male with chest pain. He describes substernal chest pressure radiating to his left arm, which started 2 hours ago during yard work. He is pale and diaphoretic. HR 98, BP 146/90, RR 18, SpO2 97%. The patient has no known drug allergies. He refuses aspirin, saying I do not want to take any pills. I will be fine. Just take me to the hospital. He is alert and oriented x 3, understands the risks of not taking aspirin (increased chance of heart damage), and firmly states he prefers not to take medication. He correctly repeats back that aspirin reduces the risk of death from heart attack.",
                    question: "How should the EMT manage this patient refusal of aspirin?",
                    options: [
                        {t: "Respect the patient right to refuse he has decision-making capacity (alert, oriented, understands the risks, can communicate a reasoned decision). Explain the risks once more, document the refusal including capacity assessment and the patient stated reasons, transport, and notify the receiving facility of the refusal", f: "Correct This patient demonstrates decision-making capacity: he can understand his situation and the proposed treatment, he understands the risks of refusal (cardiac damage, death), and he can communicate a consistent decision. The EMT cannot force treatment on a capacitated patient. Document thoroughly: capacity assessment, education provided, risks explained, patient response, and time of refusal. Transport and notify the ED of the refusal."},
                        {t: "The patient clearly lacks capacity because he is refusing a life-saving treatment. Activate implied consent and administer the aspirin. A reasonable person would want aspirin for a heart attack. Document the implied consent on the PCR", f: "Incorrect Refusing a recommended treatment does NOT mean the patient lacks capacity. Capacity is determined by the patient ability to understand, appreciate, reason, and express a choice not by whether they agree with you. This patient is alert, oriented, understands the risks, and can articulate a decision. Implied consent applies only when the patient is unable to consent (unconscious, altered mental status, severe cognitive impairment). A capacitated refusal must be honoured."}
                    ],
                    correct: 0,
                    explanation: "The right to refuse is one of the 10 expanded rights. Key principles: 1) Capacity is decision-specific a patient may have capacity to refuse aspirin but lack capacity to refuse intubation. 2) A bad decision is not the same as incapacity. 3) The EMT job is to ensure informed refusal, not to coerce compliance. 4) Document: capacity assessment findings, risks explained in terms the patient understood, patient stated reasons, conversations with medical control (if any), and the final disposition. 5) Transport for evaluation the patient may change their mind en route.",
                    kpi: "Correctly assesses decision-making capacity and honours a capacitated patient right to refuse medication"
                }
            ]
        },

        /* ------------------------------------------------------------------------------
         * c9s4 - Dose & Simple Calculations
         * ------------------------------------------------------------------------------ */
        {
            id: "c9s4",
            shortTitle: "9.4 Dose & Simple Calculations",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Dose & Simple Calculations</h3>

                <h4>Basic Math Refresher - Fractions, Decimals, and Percentages</h4>
                <p>Medication calculations require comfort with basic arithmetic. A decimal point error can be fatal the difference between 0.1 mg and 1 mg is a factor of 10, which can mean the difference between a therapeutic dose and a lethal overdose.</p>
                <ul>
                    <li><strong>Converting fractions to decimals:</strong> Divide numerator by denominator. 1/2 = 0.5. 1/4 = 0.25. 1/3 = 0.33.</li>
                    <li><strong>Multiplying decimals:</strong> Multiply normally, then count decimal places. 2.5 x 0.5 = 1.25.</li>
                    <li><strong>Dividing decimals:</strong> Move the decimal in both numbers the same number of places. 2.5 / 0.5 = 25 / 5 = 5.</li>
                    <li><strong>Percentages:</strong> 1% = 0.01. 0.9% saline = 0.9 g NaCl per 100 mL water = 9 g per litre.</li>
                    <li><strong>Rounding:</strong> Round to the nearest practical unit. For syringes: round to the tenth (0.1 mL) for volumes less than 1 mL, to the whole number for larger volumes. Do NOT round mid-calculation round only the final answer.</li>
                </ul>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical Warning:</strong> <strong>Leading and trailing zeros save lives.</strong> Always use a LEADING ZERO for doses less than 1: write <strong>0.5 mg</strong>, not .5 mg (the decimal can be missed). NEVER use a TRAILING ZERO: write <strong>2 mg</strong>, not 2.0 mg (2.0 can be misread as 20). The Joint Commission considers a trailing zero a do not use abbreviation using one is a reportable safety violation.
                </div>

                <h4>Metric System - Essential Conversions</h4>
                <p>The metric system is used for all medication calculations in EMS. Memorise these conversions you will use them on every call involving drug calculations.</p>
                <table>
                    <thead>
                        <tr><th>Category</th><th>Conversion</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Weight</strong></td><td>1 kg = 2.2 lbs<br/>1 g = 1000 mg<br/>1 mg = 1000 mcg</td><td>154 lb / 2.2 = 70 kg<br/>0.5 g = 500 mg<br/>0.1 mg = 100 mcg</td></tr>
                        <tr><td><strong>Volume</strong></td><td>1 L = 1000 mL<br/>1 mL = 1 cc</td><td>0.9 L = 900 mL<br/>3 mL = 3 cc (syringe reading)</td></tr>
                        <tr><td><strong>Household</strong></td><td>1 tsp = 5 mL<br/>1 tbsp = 15 mL<br/>1 cup = 240 mL</td><td>2 tsp = 10 mL (paediatric suspension dosing)</td></tr>
                        <tr><td><strong>Length</strong></td><td>1 inch = 2.54 cm<br/>1 cm = 10 mm</td><td>Catheter length markings, Broselow tape</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Memory Aid - Metric Prefixes:</strong> <strong>KHD</strong> (kilo, hecto, deca) base unit (gram, litre, metre) <strong>dcm</strong> (deci, centi, milli, micro).<br/>
                    Each step = factor of 10. To go from a larger unit to a smaller unit: multiply by 1000 per step (kg to g: x1000, g to mg: x1000, mg to mcg: x1000).<br/>
                    Example: 0.5 g = ? mcg. 0.5 g 500 mg (x1000) 500,000 mcg (x1000). Answer: 500,000 mcg.
                </div>

                <h4>The Desired Dose Formula</h4>
                <p>The <strong>desired dose formula</strong> is the most commonly used calculation in EMS for determining how much of a prepared medication to administer:</p>
                <p style="font-size:1.1em; font-weight:bold; text-align:center; padding:12px; background:#f8f9fa; border-radius:6px; margin:16px 0;">
                    Dose Ordered / Available Dose x Volume = Amount to Give
                </p>
                <p>Or more simply: <strong>What you WANT / What you HAVE x What it IN = What you GIVE</strong></p>

                <p><strong>Example 1 - Tablet:</strong> The protocol orders aspirin 162 mg for chest pain. You have 81 mg tablets. How many tablets do you give?</p>
                <ul>
                    <li>Dose ordered: 162 mg</li>
                    <li>Available dose: 81 mg/tablet</li>
                    <li>Volume: 1 tablet</li>
                    <li>Calculation: 162 / 81 x 1 = <strong>2 tablets</strong></li>
                </ul>

                <p><strong>Example 2 - Liquid/Syringe:</strong> The protocol orders fentanyl 50 mcg IV. You have a vial labelled Fentanyl 100 mcg/2 mL. How many mL do you administer?</p>
                <ul>
                    <li>Dose ordered: 50 mcg</li>
                    <li>Available dose: 100 mcg</li>
                    <li>Volume: 2 mL</li>
                    <li>Calculation: 50 / 100 x 2 = 0.5 x 2 = <strong>1 mL</strong></li>
                </ul>

                <p><strong>Example 3 - Concentration First:</strong> The protocol orders ondansetron (Zofran) 4 mg IV. The vial contains 2 mg/mL. How many mL do you give?</p>
                <ul>
                    <li>Dose ordered: 4 mg</li>
                    <li>Concentration: 2 mg/mL</li>
                    <li>First, find what you HAVE per unit volume: 2 mg per 1 mL. So available dose = 2 mg, volume = 1 mL</li>
                    <li>Calculation: 4 / 2 x 1 = <strong>2 mL</strong></li>
                </ul>

                <h4>Weight-Based Dosing (mg/kg)</h4>
                <p>Many EMS medications especially for paediatric patients are dosed per kilogram of body weight. This ensures the dose is proportional to the patient size. The formula:</p>
                <p style="font-size:1.1em; font-weight:bold; text-align:center; padding:12px; background:#f8f9fa; border-radius:6px; margin:16px 0;">
                    Patient Weight (kg) x Dose per kg (mg/kg) = Total Dose (mg)
                </p>

                <p><strong>Example - Paediatric midazolam:</strong> Protocol orders midazolam 0.1 mg/kg IM for seizures. The child weighs 22 kg. How many mg do you administer?</p>
                <ul>
                    <li>22 kg x 0.1 mg/kg = <strong>2.2 mg</strong></li>
                    <li>If midazolam is supplied as 5 mg/mL, continue: 2.2 mg / 5 mg/mL = <strong>0.44 mL</strong> (round to 0.44 mL on a 1 mL syringe)</li>
                </ul>

                <p><strong>Example - Adult ondansetron:</strong> Some protocols use weight-based dosing. If ondansetron is dosed at 0.1 mg/kg and the patient weighs 80 kg: 80 x 0.1 = 8 mg. But if your protocol caps the dose at 4 mg (standard adult dose), you give 4 mg <strong>not</strong> 8 mg. Always check protocol maximum doses.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl - Paediatric Weight Estimation:</strong> When you cannot weigh a child, use the <strong>Broselow tape</strong> (measures length and estimates weight based on colour-coded zones). Alternatively, use the <strong>age-based formula</strong>: (Age in years + 4) x 2 = weight in kg (for ages 1-14). For infants less than 1 year: weight (kg) = (age in months + 9) / 2. <strong>Do NOT guess</strong> paediatric doses are weight-based for a reason. A 20% weight error translates to a 20% dose error.
                </div>

                <h4>Infusion Rate Calculations</h4>
                <p>Infusion rates tell you how fast to run a continuous IV drip. The formula:</p>
                <p style="font-size:1.1em; font-weight:bold; text-align:center; padding:12px; background:#f8f9fa; border-radius:6px; margin:16px 0;">
                    mL/hr = Total Volume (mL) / Total Time (hrs)
                </p>

                <p><strong>Example:</strong> You need to infuse 1000 mL of normal saline over 8 hours. What is the rate?</p>
                <ul>
                    <li>1000 mL / 8 hrs = <strong>125 mL/hr</strong></li>
                    <li>Set the IV pump to 125 mL/hr, or use drip rate calculation if no pump is available</li>
                </ul>

                <h4>Drip Rate (Drop Rate) Calculation</h4>
                <p>When an IV pump is not available, you must calculate the drip rate (gtts/min) to deliver the correct volume over time. The formula:</p>
                <p style="font-size:1.1em; font-weight:bold; text-align:center; padding:12px; background:#f8f9fa; border-radius:6px; margin:16px 0;">
                    Drops/min = (Volume in mL x Drop Factor) / Time in minutes
                </p>

                <p>The <strong>drop factor</strong> (also called drip factor) is the number of drops (gtts) per millilitre delivered by the IV tubing. It is printed on the IV tubing package. Common drop factors:</p>
                <table>
                    <thead>
                        <tr><th>Type</th><th>Drop Factor</th><th>Use</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Macrodrip - Blood tubing</strong></td><td>10 gtts/mL</td><td>Rapid infusion, blood products</td></tr>
                        <tr><td><strong>Macrodrip - Standard</strong></td><td>15 gtts/mL</td><td>General adult IV infusions</td></tr>
                        <tr><td><strong>Macrodrip</strong></td><td>20 gtts/mL</td><td>Standard in some systems</td></tr>
                        <tr><td><strong>Microdrip</strong></td><td>60 gtts/mL</td><td>Paediatric infusions, precise low-rate infusions</td></tr>
                    </tbody>
                </table>

                <p><strong>Example - Macrodrip (15 gtts/mL):</strong> Infuse 1000 mL NS over 8 hours. Drop factor = 15 gtts/mL.</p>
                <ul>
                    <li>8 hours = 480 minutes</li>
                    <li>Drops/min = (1000 x 15) / 480 = 15,000 / 480 = <strong>31.25 gtts/min</strong> (round to 31 gtts/min)</li>
                    <li>Adjust the roller clamp to deliver approximately 31 drops per minute (count drops for 15 seconds and multiply by 4)</li>
                </ul>

                <p><strong>Example - Microdrip (60 gtts/mL):</strong> Infuse 500 mL LR over 4 hours. Drop factor = 60 gtts/mL (microdrip).</p>
                <ul>
                    <li>4 hours = 240 minutes</li>
                    <li>Drops/min = (500 x 60) / 240 = 30,000 / 240 = <strong>125 gtts/min</strong></li>
                    <li>Note: with microdrip tubing, the gtts/min rate equals the mL/hr rate (because 60 gtts/mL / 60 min/hr = 1). In this case, 500 mL / 4 hrs = 125 mL/hr = 125 gtts/min with microdrip.</li>
                </ul>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Quick Trick - Microdrip Equivalence:</strong> With <strong>microdrip (60 gtts/mL) tubing</strong>, the drip rate in gtts/min is <strong>equal to the infusion rate in mL/hr</strong>. So if you need to run an IV at 75 mL/hr using microdrip tubing, you simply count 75 drops per minute. No calculation needed! This equivalence only works because 60 (gtts/mL) / 60 (min/hr) = 1.
                </div>

                <h4>mg to mL Conversion Using Concentration</h4>
                <p>This is the most common calculation in EMS: you know the dose in mg (or mcg) that you need to give, and you know the concentration of the medication. Calculate the volume to draw up:</p>
                <p style="font-size:1.1em; font-weight:bold; text-align:center; padding:12px; background:#f8f9fa; border-radius:6px; margin:16px 0;">
                    Volume (mL) = Dose (mg) / Concentration (mg/mL)
                </p>

                <p><strong>Example - Epinephrine:</strong> The protocol orders epinephrine 0.3 mg IM for anaphylaxis. You have epinephrine 1:1000 (1 mg/mL). How many mL do you draw up?</p>
                <ul>
                    <li>Volume = 0.3 mg / 1 mg/mL = <strong>0.3 mL</strong></li>
                    <li>Using an auto-injector: the EpiPen delivers 0.3 mg in 0.3 mL automatically no drawing up needed.</li>
                </ul>

                <p><strong>Example - Cardiac arrest epinephrine:</strong> The protocol orders epinephrine 1 mg IV. In cardiac arrest, you use epinephrine 1:10,000 (0.1 mg/mL). How many mL?</p>
                <ul>
                    <li>Volume = 1 mg / 0.1 mg/mL = <strong>10 mL</strong></li>
                    <li>Note: this is why cardiac arrest epinephrine comes in a 10 mL pre-filled syringe it contains 1 mg of epinephrine in 10 mL of solution (concentration 0.1 mg/mL).</li>
                </ul>

                <p><strong>Example - Naloxone:</strong> The protocol orders naloxone 2 mg IN. You have naloxone 2 mg/2 mL (1 mg/mL). How many mL?</p>
                <ul>
                    <li>Volume = 2 mg / 1 mg/mL = <strong>2 mL total</strong></li>
                    <li>Administer: 1 mL (1 mg) per nostril using the MAD device.</li>
                </ul>

                <h4>IV Bolus vs. IV Piggyback vs. Continuous Infusion</h4>
                <p>Understanding the difference between these methods of IV drug delivery is important for proper administration:</p>
                <table>
                    <thead>
                        <tr><th>Method</th><th>Description</th><th>Rate</th><th>EMT Examples</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>IV Bolus</strong></td><td>Concentrated drug given rapidly via syringe into the IV port</td><td>Over 1-5 minutes (varies by drug some must be given slowly)</td><td>Ondansetron 4 mg IV push, fentanyl 50 mcg slow IV push</td></tr>
                        <tr><td><strong>IV Piggyback</strong></td><td>Small-volume (50-250 mL) infusion piggybacked into the main IV line via a secondary port</td><td>Over 15-60 minutes (per protocol)</td><td>Antibiotics (not common at EMT level), some medications that require slower infusion</td></tr>
                        <tr><td><strong>Continuous Infusion</strong></td><td>Ongoing infusion of medication diluted in IV fluid, run at a specific rate (mL/hr)</td><td>Continuous, rate set by pump or drip rate</td><td>Fluid resuscitation (NS bolus at 20 mL/kg), medication drips (higher level of care)</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>NREMT Focus - Calculation Safety:</strong><br/>
                    - <strong>Double-check all calculations</strong> have your partner independently verify. A decimal point error can kill.<br/>
                    - <strong>Paediatric doses must always be weight-based</strong> never estimate or use adult doses for children.<br/>
                    - <strong>Use the Broselow tape</strong> for weight estimation in children do NOT guess.<br/>
                    - <strong>Write leading zeros:</strong> 0.5 mg (not .5 mg). <strong>Never write trailing zeros:</strong> 2 mg (not 2.0 mg).<br/>
                    - <strong>Know your conversions:</strong> 1 g = 1000 mg, 1 mg = 1000 mcg, 1 kg = 2.2 lbs, 1 mL = 1 cc, 1 tsp = 5 mL.<br/>
                    - <strong>Dose ordered / Available dose x Volume = Amount to give</strong> memorise this formula.
                </div>
            </div>`,

            flashcards: [
                { question: "What is the desired dose formula?", answer: "Dose Ordered / Available Dose x Volume = Amount to Give. (What you WANT / What you HAVE x What it IN = What you GIVE)", category: "Dose Formula" },
                { question: "How many mg are in 1 g? How many mcg are in 1 mg?", answer: "1 g = 1000 mg. 1 mg = 1000 mcg. 1 g = 1,000,000 mcg.", category: "Metric Conversions" },
                { question: "How do you convert pounds to kilograms?", answer: "Divide weight in pounds by 2.2. Example: 154 lbs / 2.2 = 70 kg.", category: "Weight Conversion" },
                { question: "What are the common macrodrip and microdrip drop factors?", answer: "Macrodrip: 10, 15, or 20 gtts/mL. Microdrip: 60 gtts/mL (used for paediatric and precise infusions).", category: "Drop Factors" },
                { question: "What is the quick trick for calculating drip rate with microdrip (60 gtts/mL) tubing?", answer: "With microdrip tubing, the gtts/min rate equals the mL/hr infusion rate. So 125 mL/hr = 125 gtts/min. No calculation needed.", category: "Drip Rate" },
                { question: "A protocol orders fentanyl 100 mcg IV. You have fentanyl 50 mcg/mL. How many mL do you administer?", answer: "Volume = Dose / Concentration = 100 mcg / 50 mcg/mL = 2 mL.", category: "Dose Calculation" },
                { question: "A child weighs 40 lbs and the protocol orders a drug at 5 mg/kg. What is the dose?", answer: "40 lbs / 2.2 = 18.2 kg. 18.2 kg x 5 mg/kg = 91 mg. (Always convert to kg before calculating weight-based doses.)", category: "Weight-Based Dosing" },
                { question: "What is the Broselow tape and why is it used?", answer: "A colour-coded tape that estimates a child weight based on length (height). Used for accurate weight-based dosing in paediatric emergencies when a scale is not available.", category: "Paediatric Dosing" }
            ],

            quiz: [
                {
                    q: "A 68-year-old male with chest pain is prescribed aspirin 324 mg. You have 81 mg chewable tablets. How many tablets should the EMT administer?",
                    options: [
                        "2 tablets",
                        "3 tablets",
                        "4 tablets",
                        "5 tablets"
                    ],
                    correct: 2,
                    explanation: "Using the desired dose formula: 324 mg / 81 mg/tablet x 1 tablet = 4 tablets. Aspirin 324 mg = four 81 mg baby aspirin. This is a standard antiplatelet dose for ACS (which ranges from 162-324 mg per protocol)."
                },
                {
                    q: "An 8 kg infant has been seizing for 12 minutes. Your protocol orders midazolam 0.1 mg/kg IN. The midazolam vial is labelled 5 mg/mL. How many mL should the EMT administer intranasally?",
                    options: [
                        "0.08 mL",
                        "0.16 mL",
                        "0.8 mL",
                        "1.6 mL"
                    ],
                    correct: 1,
                    explanation: "Step 1: Calculate the dose in mg. 8 kg x 0.1 mg/kg = 0.8 mg total dose. Step 2: Convert mg to mL. 0.8 mg / 5 mg/mL = 0.16 mL total. Step 3: For IN route, administer half in each nostril (0.08 mL per nostril). Note: the total volume (0.16 mL) is easily manageable for IN administration (limit ~0.5 mL per nostril in infants)."
                },
                {
                    q: "You need to run a 500 mL bag of Normal Saline over 4 hours. Your IV tubing has a drop factor of 15 gtts/mL. What is the drip rate in drops per minute?",
                    options: [
                        "21 gtts/min",
                        "31 gtts/min",
                        "42 gtts/min",
                        "125 gtts/min"
                    ],
                    correct: 1,
                    explanation: "Drops/min = (Volume x Drop Factor) / Time in minutes = (500 mL x 15 gtts/mL) / (4 hrs x 60 min/hr) = 7500 / 240 = 31.25 gtts/min (round to 31 gtts/min). To verify: count drops for 15 seconds you should see approximately 7-8 drops (31 / 4 = 7.75)."
                },
                {
                    q: "[HARD] A confused nursing home patient requires 1 mg of epinephrine IV during a cardiac arrest resuscitation. Your drug box contains two epinephrine vials: Vial A is labelled Epinephrine 1:1000 (1 mg/mL) and Vial B is labelled Epinephrine 1:10,000 (0.1 mg/mL). Which vial should the EMT use and how much should be drawn up?",
                    options: [
                        "Use Vial A (1:1000) and draw up 1 mL it contains 1 mg/mL, which is 1 mg in 1 mL",
                        "Use Vial B (1:10,000) and draw up 10 mL it contains 0.1 mg/mL, so you need 10 mL to get 1 mg. This is the correct concentration for IV cardiac arrest epinephrine",
                        "Use Vial A (1:1000) and draw up 0.1 mL a smaller volume is safer for IV push",
                        "Use Vial B (1:10,000) and draw up 1 mL 1 mL contains 0.1 mg, which is sufficient for cardiac arrest"
                    ],
                    correct: 1,
                    explanation: "For IV cardiac arrest epinephrine, the standard concentration is 1:10,000 (0.1 mg/mL). The dose is 1 mg, which requires 10 mL of the 1:10,000 solution. Giving 1 mL of 1:1000 (1 mg/mL) is technically the same dose but concentrated into a smaller volume the 1:1000 concentration is intended for IM use in anaphylaxis. The standard preparation in cardiac arrest is the 10 mL prefilled syringe of 1:10,000. Always use the concentration and preparation specified in your protocol."
                }
            ],

            critical: [
                {
                    id: "crit_9_4_1",
                    scenario: "Your unit is dispatched to a 5-year-old child having a seizure. On arrival, the child is actively convulsing generalised tonic-clonic activity with eyes rolled back. The mother reports the seizure started approximately 8 minutes ago. The child has no known medical history and takes no medications. Vital signs: HR 140, BP 100/68, RR laboured, SpO2 92% on room air. The child appears to weigh approximately 18 kg (Mom reports about 40 pounds). Your protocol states: Midazolam 0.1 mg/kg IM for status epilepticus. You have a 5 mL vial of midazolam 5 mg/mL.",
                    question: "What is the correct dose to administer, and what calculation steps should the EMT perform?",
                    options: [
                        {t: "Dose = 18 kg x 0.1 mg/kg = 1.8 mg. Volume to draw up = 1.8 mg / 5 mg/mL = 0.36 mL. Administer 0.36 mL IM into the vastus lateralis. Double-check: 18 kg / 2.2 = 40 lbs (matches Mom report). Always confirm patient weight before calculating", f: "Correct The calculation is: 18 kg (weight) x 0.1 mg/kg (protocol dose) = 1.8 mg (total dose). Then convert mg to mL: 1.8 mg / 5 mg/mL (concentration) = 0.36 mL. Administer IM into the vastus lateralis. The EMT should: 1) Verify weight (confirm with Mom + estimate by observation). 2) Calculate dose. 3) Have partner independently calculate. 4) Draw up using the 3-check system. 5) Administer."},
                        {t: "The child weighs 40 lbs, so the dose is 40 x 0.1 = 4 mg. Volume = 4 / 5 = 0.8 mL. This is a standard paediatric dose for seizure", f: "Incorrect The weight-based formula uses kilograms, not pounds. 40 lbs / 2.2 = ~18 kg, not 40 kg. Using 40 as the weight in kg would overestimate the dose by more than double (4 mg instead of 1.8 mg). This is a classic calculation error failing to convert from pounds to kilograms. Always convert to kg before calculating mg/kg doses."}
                    ],
                    correct: 0,
                    explanation: "This scenario tests the critical step of weight-based dose calculation in paediatrics. Common error: using pounds instead of kilograms in the mg/kg formula. Steps: 1) Estimate/confirm weight in kg. The Broselow tape would be ideal. 2) Total dose (mg) = weight (kg) x dose (mg/kg). 3) Volume to administer = total dose / concentration. 4) Have a partner independently verify the calculation. 5) Use the 3-check system. 6) Administer IM into the vastus lateralis (preferred site in children). 7) Document and reassess.",
                    kpi: "Correctly calculates weight-based paediatric dose and identifies the common pitfall of pound-kilogram confusion"
                },
                {
                    id: "crit_9_4_2",
                    scenario: "You are treating a 45-year-old female with severe dehydration from vomiting and diarrhoea. She is lethargic, tachycardic (HR 118), and has dry mucous membranes. Her BP is 94/58. Her estimated weight is 70 kg. Your protocol allows a 20 mL/kg NS bolus for signs of hypovolaemic shock. Your IV pump is not working, so you need to use gravity with a macrodrip set (15 gtts/mL).",
                    question: "How much fluid does the patient need, and what is the drip rate if you plan to infuse the bolus over 1 hour?",
                    options: [
                        {t: "Total volume: 70 kg x 20 mL/kg = 1400 mL. Drip rate: (1400 mL x 15 gtts/mL) / 60 min = 21,000 / 60 = 350 gtts/min. This is very fast use a pressure bag or squeeze the bag to deliver the bolus more rapidly (permissive hypotension, target SBP ~90). For a 20 mL/kg bolus in shock, run it wide open time is not 1 hour but as fast as possible", f: "Correct The 20 mL/kg bolus should be given rapidly, not over 1 hour. Total volume = 1400 mL. While the drip rate calculation for 1 hour is 350 gtts/min, for a shock bolus the EMT should open the roller clamp fully (wide open) or use a pressure bag and monitor the patient. The goal is rapid volume expansion to restore perfusion. Reassess after the bolus: if still hypotensive, a second bolus may be indicated per protocol."},
                        {t: "Total volume: 1400 mL. Drip rate: 1400 / 60 = 23 mL/hr, which with 15 gtts/mL tubing = 23 gtts/min. Set the drip at 23 drops per minute for 1 hour", f: "Incorrect 1400 mL / 60 min gives the rate in mL/min (23.3 mL/min), not mL/hr. The correct drip rate calculation is (Volume x Drop Factor) / Time in minutes. More importantly, a 20 mL/kg bolus is a rapid infusion it should be given wide open over 15-30 minutes, not slowly over 1 hour. The calculated drip rate of 23 gtts/min would take much too long (over 60 minutes) and fail to treat the shock state."}
                    ],
                    correct: 0,
                    explanation: "This scenario tests: 1) Volume calculation (20 mL/kg x 70 kg = 1400 mL). 2) Understanding that a bolus means rapid administration not slow infusion. 3) Drip rate formula application. 4) Clinical judgment: a patient in hypovolaemic shock needs volume quickly. In practice, use a pressure bag inflated to 300 mmHg or manually squeeze the bag to hasten flow. Reassess vitals after each 500-1000 mL. Watch for signs of fluid overload (crackles, increased work of breathing).",
                    kpi: "Correctly calculates fluid bolus volume and drip rate while recognising that shock boluses should be given rapidly, not as slow infusions"
                },
                {
                    id: "crit_9_4_3",
                    scenario: "Your paramedic partner asks you to draw up ondansetron 4 mg IV from a vial labelled Ondansetron 2 mg/mL. After drawing up the medication, your partner says, Actually, the protocol just changed our new ondansetron vials are 4 mg/2 mL. Let me see what you drew up. You show her the 2 mL you have drawn up. She says, That looks about right for 4 mg. You both realise the new concentration (4 mg/2 mL = 2 mg/mL) is the SAME concentration as the old vials your 2 mL draw contains 4 mg. However, at shift change, you hear that another crew accidentally gave a patient 8 mg (the full 4 mg/2 mL vial) because they thought the vial contained 4 mg in total rather than 4 mg per 2 mL.",
                    question: "What safety system failed, and what can EMTs do to prevent this type of error?",
                    options: [
                        {t: "The label was misread: 4 mg/2 mL means 4 mg per 2 mL (concentration = 2 mg/mL). The crew mistakenly read it as 4 mg total in vial. The 3-check system should catch this: each check must verify the CONCENTRATION, not just the total drug amount. Read the label as 4 mg in 2 mL so 2 mg per mL. Always check: What is the concentration (mg per mL)? What volume do I need for the ordered dose?", f: "Correct This is a classic concentration error. The label 4 mg/2 mL means 4 mg in every 2 mL, equalling a concentration of 2 mg/mL. The crew that misread it thought the entire 2 mL vial contained 4 mg total which was correct! But the dangerous scenario would be if the protocol called for 4 mg and they had a vial labelled 4 mg/mL then a full vial (1 mL) is correct, but the 2 mg/mL concentration requires 2 mL. ALWAYS verify concentration, not just total vial content."},
                        {t: "The crew should have asked the paramedic to draw up the medication rather than doing it themselves. EMTs should never prepare medications this prevents errors", f: "Incorrect EMTs can and should prepare medications under their scope of practice when properly trained. The issue is not who prepares it but HOW it is prepared. The 3-check system applies to everyone: EMT, AEMT, and paramedic alike. The solution is better label reading habits, not restricting who can prepare medications."}
                    ],
                    correct: 0,
                    explanation: "This scenario highlights a common and dangerous medication error pattern: confusing total vial content with concentration. When a label says 4 mg/2 mL, it means 4 mg per 2 mL (concentration 2 mg/mL). The EMT must calculate: I need 4 mg. The concentration is 2 mg/mL. Volume = 4 mg / 2 mg/mL = 2 mL. The 3-check system should include verifying the concentration, not just the drug name. Best practice: read the label as X mg per Y mL and calculate the needed volume. Never assume the entire vial is a single dose.",
                    kpi: "Identifies concentration labelling errors and applies the correct 3-check system to verify both drug name and concentration"
                }
            ]
        },
        /* ──────────────────────────────────────────────────────────────────────────────
         * c9s5 – Emergency Drug Formulary
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c9s5",
            shortTitle: "9.5 Emergency Drug Formulary",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Emergency Drug Formulary</h3>

                <p>Every EMT must have a working knowledge of the medications they are authorized to carry and administer. This section provides a comprehensive reference for ALL drugs an EMT may administer or assist with — from foundational BLS drugs like oxygen and oral glucose to advanced medications carried at the ALS level that the EMT may need to assist with or understand. <strong>The NREMT expects you to know the generic name, class, indication, contraindications, dose, route, and key side effects for every drug on your scope.</strong></p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> Know the <strong>5–10 drugs most commonly used at the EMT scope level</strong>: oxygen, aspirin, nitroglycerin, epinephrine, albuterol, naloxone, oral glucose, and glucagon. For each drug, you must understand <strong>WHY</strong> it is given (indication), <strong>WHEN</strong> it should NOT be given (contraindication), and <strong>WHAT</strong> to monitor for after administration (side effects / adverse effects).
                </div>

                <h4>Drug Administration — The "Seven Rights"</h4>
                <p>Before administering ANY medication, the EMT must verify the <strong>Seven Rights</strong> of medication administration. These are the foundation of safe medication practice:</p>
                <ol>
                    <li><strong>Right Patient</strong> — Confirm patient identity using two identifiers (e.g., name + date of birth). Do NOT rely on room number or bed position.</li>
                    <li><strong>Right Drug</strong> — Check the medication label THREE times (when removing from storage, when preparing, and before administration). Read the label aloud.</li>
                    <li><strong>Right Dose</strong> — Verify the dose against the order/protocol. Be vigilant about decimal errors (0.1 mg vs 1 mg is a TENFOLD difference).</li>
                    <li><strong>Right Route</strong> — Confirm the ordered route is appropriate and safe. Never give a PO drug IV, or an IV drug IM without protocol authorization.</li>
                    <li><strong>Right Time</strong> — Administer the medication at the correct time and interval (e.g., nitroglycerin q5min, not all at once).</li>
                    <li><strong>Right Documentation</strong> — Record the drug, dose, route, time, and patient response (including any adverse effects).</li>
                    <li><strong>Right to Refuse</strong> — The patient has the right to refuse any medication after being informed of the risks and benefits (if they are competent to do so).</li>
                </ol>

                <h4>Emergency Drug Formulary — Complete Reference Table</h4>
                <p>The following table provides comprehensive information for every drug an EMT may encounter in the field. Drugs are organized by category. <strong>Bold text</strong> indicates the generic name; trade names are in parentheses.</p>

                <h4>Oxygen &amp; Respiratory Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Oxygen (O₂)</strong></td>
                            <td>Medical gas</td>
                            <td><strong>Hypoxia / hypoxaemia</strong> from any cause (respiratory distress, cardiac arrest, shock, trauma, carbon monoxide poisoning, anaphylaxis). Every acutely ill or injured patient should receive oxygen if SpO₂ &lt; 94%.</td>
                            <td><strong>Relative:</strong> COPD patients with chronic CO₂ retention — use cautiously with titrated O₂ to SpO₂ 88-92% (high-flow O₂ may blunt hypoxic drive). <strong>Absolute:</strong> None in an emergency — oxygen is a drug but life-saving hypoxia trumps all.</td>
                            <td>2–15 L/min depending on device. NRB: 12–15 L/min. NC: 1–6 L/min. BVM: 15 L/min + reservoir</td>
                            <td>Inhalation via NC, NRB, BVM, CPAP</td>
                            <td>Immediate / Immediate / Continuous while administered</td>
                            <td>Drying of mucous membranes, absorption atelectasis (prolonged high FiO₂), oxygen toxicity at FiO₂ &gt; 0.6 for &gt; 24 hours. In neonates: retrolental fibroplasia (avoid high O₂ in prematurity).</td>
                        </tr>
                        <tr>
                            <td><strong>Albuterol</strong> (Proventil, Ventolin)</td>
                            <td>Beta-2 adrenergic agonist, bronchodilator</td>
                            <td><strong>Asthma exacerbation, COPD exacerbation with bronchospasm</strong>, wheezing from any cause (bronchiolitis, allergic reaction). Also used in hyperkalemia to shift K⁺ intracellularly (ALS).</td>
                            <td><strong>Relative:</strong> Tachyarrhythmias (sinus tachycardia is expected but atrial fibrillation/flutter may worsen). Known hypersensitivity.</td>
                            <td>2.5–5 mg (0.5–1 mL of 0.5% solution) nebulized. May repeat q20min × 3</td>
                            <td>Nebulized inhalation</td>
                            <td>Onset: 5–15 min / Peak: 30–60 min / Duration: 3–6 hrs</td>
                            <td><strong>Tachycardia (most common), palpitations, tremors, nervousness, headache</strong>. Hypokalemia (dose-dependent, usually mild). Hyperglycemia at high doses. Paradoxical bronchospasm (rare but serious — discontinue if occurs).</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Cardiovascular Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Aspirin (ASA)</strong> (Bayer, Ecotrin)</td>
                            <td>Antiplatelet, NSAID, COX inhibitor</td>
                            <td><strong>Acute coronary syndrome (ACS) — suspected MI, unstable angina.</strong> Reduces mortality by inhibiting platelet aggregation (blocks thromboxane A₂). Give ASAP in any patient with chest pain suggestive of cardiac ischaemia.</td>
                            <td><strong>Absolute:</strong> Known allergy (including AERD/nasal polyps), active GI bleeding, suspected aortic dissection. <strong>Relative:</strong> Severe hepatic impairment, bleeding disorders (haemophilia).</td>
                            <td>162–324 mg (2–4 × 81 mg OR 1 × 325 mg) <strong>chewed and swallowed</strong> — chewing speeds absorption via buccal route</td>
                            <td>PO (chewed)</td>
                            <td>Onset: 5–15 min (chewed) / Peak: 20–30 min / Duration: 4–6 hrs</td>
                            <td><strong>GI irritation, nausea, heartburn.</strong> Increased bleeding risk. Tinnitus (overdose). Allergic reactions (urticaria, bronchospasm — especially in asthmatics with nasal polyps). Reye syndrome (avoid in children with viral illness).</td>
                        </tr>
                        <tr>
                            <td><strong>Nitroglycerin (NTG)</strong> (Nitrostat, Nitrolingual)</td>
                            <td>Nitrate, venodilator</td>
                            <td><strong>Angina pectoris, ACS with ongoing chest pain, acute pulmonary oedema with hypertension (preload reduction).</strong> Venodilation reduces preload → decreases myocardial O₂ demand.</td>
                            <td><strong>Absolute:</strong> SBP &lt; 90 mmHg, severe bradycardia (HR &lt; 50), suspected RV infarction, increased ICP, <strong>PDE-5 inhibitor use within 24–48 hrs</strong> (sildenafil/Viagra, tadalafil/Cialis — potentiates nitrates causing severe refractory hypotension).</td>
                            <td>0.4 mg (400 mcg) SL tablet or 1 spray. <strong>May repeat q5min × 3 total doses</strong> if SBP ≥ 90 mmHg. Do NOT shake spray bottle.</td>
                            <td>Sublingual (SL)</td>
                            <td>Onset: 1–3 min / Peak: 5 min / Duration: 30–60 min</td>
                            <td><strong>Headache (throbbing, very common), hypotension, dizziness, syncope, reflex tachycardia, flushing</strong>. Methemoglobinemia (rare, high cumulative doses). Burning under tongue is NOT a reliable indicator of potency.</td>
                        </tr>
                        <tr>
                            <td><strong>Atropine</strong></td>
                            <td>Anticholinergic (muscarinic antagonist)</td>
                            <td><strong>Symptomatic bradycardia with haemodynamic instability</strong> — after vagal manoeuvres and pacing consideration. Also: organophosphate poisoning (high-dose atropine), premedication for RSI in paediatrics.</td>
                            <td><strong>DO NOT use for PEA or asystole</strong> — removed from ACLS algorithm for pulseless arrest (no evidence of benefit). <strong>Relative:</strong> Tachycardia, hypothermic bradycardia, acute myocardial ischaemia.</td>
                            <td><strong>Adult:</strong> 0.5–1 mg IV/IO q3–5min, max 3 mg. <strong>Paediatric:</strong> 0.02 mg/kg IV/IO q3–5min, min 0.1 mg, max single 0.5 mg (child) / 1 mg (adolescent).</td>
                            <td>IV, IO</td>
                            <td>Onset: &lt; 2 min IV / Peak: 2–4 min / Duration: 1–4 hrs</td>
                            <td><strong>Tachycardia, dry mouth/skin, blurred vision (mydriasis), urinary retention, decreased GI motility, flushing, hyperthermia.</strong> CNS: agitation, hallucinations, delirium at high doses. Central anticholinergic syndrome (rare).</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Anaphylaxis &amp; Allergic Reaction Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Epinephrine (1:1,000)</strong> (Adrenalin, EpiPen)</td>
                            <td>Sympathomimetic, non-selective adrenergic agonist</td>
                            <td><strong>Anaphylaxis (FIRST-LINE — drug of choice, do NOT delay)</strong>. Severe allergic reaction with airway compromise, respiratory distress, hypotension, or shock. Also: severe asthma, croup (nebulized racemic epi).</td>
                            <td><strong>Relative (no absolute contraindications in anaphylaxis):</strong> Hypertension, hyperthyroidism, tachyarrhythmias, CAD — <strong>do NOT withhold in anaphylaxis</strong> — condition is far more immediately dangerous.</td>
                            <td><strong>Anaphylaxis:</strong> 0.3–0.5 mg IM (0.3–0.5 mL of 1:1,000). Auto-injector: 0.3 mg (adult), 0.15 mg (child). <strong>Cardiac arrest:</strong> 1 mg IV/IO (1:10,000) q3–5min.</td>
                            <td>IM (vastus lateralis — lateral thigh). <strong>DO NOT inject into gluteal or deltoid</strong> (slower absorption). IV/IO for cardiac arrest.</td>
                            <td>Onset: 1–5 min IM / Peak: 5–10 min / Duration: 20–30 min (short — may need repeat)</td>
                            <td><strong>Tachycardia, palpitations, hypertension, pallor, tremor, headache, anxiety, N/V.</strong> High doses/accidental IV: hypertensive crisis, ventricular arrhythmias, myocardial ischaemia. Hyperglycemia, hypokalemia. <strong>EpiPen may be given through clothing in an emergency.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Diphenhydramine</strong> (Benadryl)</td>
                            <td>H₁-antihistamine (first-generation)</td>
                            <td><strong>Allergic reactions, urticaria, angioedema</strong> (adjunct to epinephrine, NOT a replacement). <strong>Extrapyramidal/dystonic reactions</strong> (from antipsychotics — acute muscle spasms, oculogyric crisis).</td>
                            <td>Newborns/premature infants, breastfeeding. <strong>Relative:</strong> Acute asthma (can dry secretions), narrow-angle glaucoma, prostatic hypertrophy, MAOI use.</td>
                            <td><strong>Adult:</strong> 25–50 mg IV/IM. <strong>Paediatric:</strong> 1 mg/kg IV/IM (max 50 mg).</td>
                            <td>IV, IM</td>
                            <td>Onset: 1–3 min IV, 15–30 min IM / Peak: 15–30 min / Duration: 4–8 hrs</td>
                            <td><strong>Sedation/drowsiness (very common — crosses BBB), dry mouth, blurred vision, urinary retention, constipation.</strong> Overdose: anticholinergic toxidrome (hyperthermia, flushing, dilated pupils, agitation, hallucinations, seizures, coma).</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Opioid Reversal</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Naloxone</strong> (Narcan)</td>
                            <td>Competitive opioid receptor antagonist</td>
                            <td><strong>Opioid overdose with respiratory depression.</strong> Reverses opioid-induced respiratory depression. Does NOT reverse non-opioid CNS depressants (benzodiazepines, alcohol, barbiturates).</td>
                            <td><strong>No absolute contraindications in life-threatening respiratory depression.</strong> <strong>Relative:</strong> Suspected opioid dependence (precipitated withdrawal — use lower titrated doses).</td>
                            <td>0.4–2 mg IV/IM/IN. May repeat q2–3min. <strong>Partial reversal:</strong> 0.04–0.1 mg IV titrated to RR &gt; 12. <strong>IN:</strong> 2 mg via atomiser (1 mg per nostril).</td>
                            <td>IV, IM, IN, IO</td>
                            <td>Onset: 1–2 min IV, 2–5 min IM, 5–10 min IN / Peak: 5–15 min / Duration: 30–90 min (<strong>shorter than most opioids</strong>)</td>
                            <td><strong>Precipitated opioid withdrawal (N/V/D, piloerection, myalgias, agitation, hypertension, tachycardia).</strong> Pulmonary oedema (rare). <strong>DURATION SHORTER THAN MOST OPIOIDS — patient may re-narcotise.</strong> Do NOT give large boluses to opioid-tolerant patients unnecessarily.</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Glucose Management Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Oral Glucose</strong> (Insta-Glucose)</td>
                            <td>Simple sugar</td>
                            <td><strong>Mild hypoglycemia</strong> (BG &lt; 70 mg/dL) in patients with intact gag reflex who can swallow and follow commands.</td>
                            <td><strong>Absolute:</strong> Unconscious patient, inability to protect airway, absent gag reflex. Suspected stroke with dysphagia.</td>
                            <td>15–30 g PO (one tube = 15 g). May repeat after 15 min. Apply to buccal mucosa.</td>
                            <td>PO (buccal)</td>
                            <td>Onset: 5–15 min / Peak: 15–30 min / Duration: 30–60 min</td>
                            <td>Nausea, vomiting (if swallowed too quickly). Aspiration if airway not protected. Transient hyperglycemia.</td>
                        </tr>
                        <tr>
                            <td><strong>Glucagon</strong></td>
                            <td>Pancreatic hormone, hyperglycemic agent</td>
                            <td><strong>Severe hypoglycemia when IV access unavailable</strong> (unconscious, seizing, or unable to take PO). Stimulates hepatic glycogenolysis.</td>
                            <td><strong>Absolute:</strong> Pheochromocytoma. <strong>Relative:</strong> Starvation/adrenal insufficiency (depleted glycogen stores — may not work). Alcoholics (depleted liver glycogen).</td>
                            <td><strong>Adult:</strong> 1 mg IM. <strong>Paediatric:</strong> 0.5 mg IM (&lt; 20 kg) or 1 mg IM (&gt; 20 kg). May repeat once after 15 min.</td>
                            <td>IM (preferred), SC, IV</td>
                            <td>Onset: 5–15 min IM / Peak: 10–20 min / Duration: 15–30 min (short)</td>
                            <td><strong>Nausea/vomiting (very common — up to 50% — stimulates CTZ).</strong> Aspiration risk. Hypokalemia (mild). Do NOT rely on glucagon alone — bridge to IV dextrose or PO glucose.</td>
                        </tr>
                        <tr>
                            <td><strong>Dextrose 50% (D50)</strong></td>
                            <td>Hypertonic sugar solution (25 g in 50 mL)</td>
                            <td><strong>Severe hypoglycemia with altered mental status</strong> — unconscious, seizing, or unable to take PO. Definitive treatment when IV access available.</td>
                            <td>Intracranial haemorrhage (relative — do NOT withhold if hypoglycemia is suspected/confirmed). <strong>Do NOT confuse with D10 or D5.</strong> D50 is hypertonic — causes tissue necrosis if extravasates.</td>
                            <td><strong>Adult:</strong> 25 g IV (one 50 mL prefilled syringe). May repeat once after 15 min.</td>
                            <td>IV (large bore). <strong>DO NOT give IM or SC — tissue necrosis.</strong></td>
                            <td>Onset: &lt; 1 min IV / Peak: 1–2 min / Duration: 60–120 min</td>
                            <td><strong>Tissue necrosis if extravasation occurs (hypertonic — give through well-flowing large vein).</strong> Transient hyperglycemia, hypokalemia. Warm sensation along vein is normal.</td>
                        </tr>
                        <tr>
                            <td><strong>Dextrose 10% (D10)</strong></td>
                            <td>Isotonic/ slightly hypertonic sugar solution</td>
                            <td><strong>Neonatal and paediatric hypoglycemia.</strong> Preferred over D50 in children — less concentrated, less irritating.</td>
                            <td>Same as D50. Do NOT use for adults (volume required is excessive).</td>
                            <td><strong>Neonate:</strong> 2–5 mL/kg IV. <strong>Child:</strong> 2–5 mL/kg IV (max 25 g).</td>
                            <td>IV</td>
                            <td>Onset: &lt; 1 min IV / Peak: 1–2 min / Duration: 60–120 min</td>
                            <td>Local irritation at IV site (less than D50). Hyperglycemia, hypokalemia.</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Antiemetic</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Ondansetron</strong> (Zofran)</td>
                            <td>5-HT₃ receptor antagonist</td>
                            <td><strong>Nausea and vomiting</strong> from any cause (gastroenteritis, ACS, pain).</td>
                            <td><strong>Relative:</strong> <strong>QT prolongation</strong> (congenital long QT, hypokalemia, hypomagnesemia, concurrent QT-prolonging drugs). Max single dose 16 mg IV (higher doses = more QT prolongation).</td>
                            <td><strong>Adult:</strong> 4 mg ODT/IV/IM. May repeat once after 15 min. <strong>Paediatric:</strong> 0.1 mg/kg IV/IM/PO (max 4 mg).</td>
                            <td>ODT, IV, IM</td>
                            <td>Onset: 5–10 min ODT, &lt; 2 min IV / Peak: 15–30 min / Duration: 4–8 hrs</td>
                            <td><strong>Headache, dizziness, constipation, fatigue.</strong> QT prolongation (dose-dependent). Serotonin syndrome (rare, with other serotonergic drugs).</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Sedation, Seizure &amp; Psychiatric Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Diazepam</strong> (Valium)</td>
                            <td>Benzodiazepine, GABA-A PAM</td>
                            <td><strong>Seizures (status epilepticus), severe anxiety/agitation, alcohol withdrawal, muscle spasms.</strong> Nerve agent poisoning (anticonvulsant).</td>
                            <td><strong>Absolute:</strong> Acute narrow-angle glaucoma, severe respiratory depression without ventilatory support. <strong>Relative:</strong> Myasthenia gravis, hepatic impairment, concurrent CNS depressants.</td>
                            <td><strong>Seizures:</strong> 5–10 mg IV/IM/PR. May repeat once. <strong>Paediatric:</strong> 0.1–0.3 mg/kg IV. 0.5 mg/kg PR (Diastat).</td>
                            <td>IV, IM, PR</td>
                            <td>Onset: &lt; 2 min IV / Peak: 15–30 min IV / Duration: 4–8 hrs (half-life 20–80 hrs)</td>
                            <td><strong>Respiratory depression (dose-dependent, synergistic), hypotension, sedation, ataxia, confusion, paradoxical agitation.</strong> Dependence with prolonged use.</td>
                        </tr>
                        <tr>
                            <td><strong>Midazolam</strong> (Versed)</td>
                            <td>Benzodiazepine, GABA-A PAM</td>
                            <td><strong>Seizures (often preferred over diazepam for IM/IN), severe agitation, procedural sedation, RSI premedication.</strong></td>
                            <td>Same as diazepam. <strong>Relative:</strong> Acute ethanol intoxication, shock, coma.</td>
                            <td><strong>Seizures:</strong> 2–5 mg IV/IM/IN. <strong>IN:</strong> 5 mg via atomiser. <strong>Paediatric:</strong> 0.1–0.3 mg/kg IV/IM/IN.</td>
                            <td>IV, IM, IN</td>
                            <td>Onset: 1–2 min IV, 5–10 min IM, 5–10 min IN / Peak: 5–15 min / Duration: 2–6 hrs</td>
                            <td><strong>Respiratory depression (more potent than diazepam — use lower doses in elderly/COPD), hypotension, sedation, amnesia.</strong> Flumazenil is reversal agent — use cautiously.</td>
                        </tr>
                        <tr>
                            <td><strong>Flumazenil</strong> (Romazicon)</td>
                            <td>Benzodiazepine receptor antagonist</td>
                            <td><strong>Benzodiazepine overdose with respiratory depression.</strong> Reversal of procedural sedation.</td>
                            <td><strong>Absolute — use with EXTREME caution:</strong> Known seizure disorder (especially on chronic benzodiazepines — can precipitate life-threatening seizures), TCA co-ingestion, elevated ICP.</td>
                            <td>0.2 mg IV over 30 sec. If no response, 0.3 mg. May repeat 0.5 mg q1min, max 3 mg.</td>
                            <td>IV</td>
                            <td>Onset: 1–2 min IV / Peak: 5–10 min / Duration: 30–90 min (<strong>shorter than most BZDs — re-sedation risk</strong>)</td>
                            <td><strong>Can precipitate SEIZURES in BZD-dependent patients.</strong> Seizures may be refractory (BZD receptor blocked). N/V, dizziness, agitation. <strong>Many EMS protocols have REMOVED flumazenil — follow local protocol.</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Propofol</strong> (Diprivan)</td>
                            <td>IV sedative-hypnotic (GABA-A agonist)</td>
                            <td><strong>Induction/maintenance of sedation for RSI, procedural sedation, sedation of intubated patients.</strong> Refractory status epilepticus (ALS).</td>
                            <td><strong>Absolute:</strong> Known allergy (egg lecithin/soybean oil). Propofol infusion syndrome (prolonged high-dose). <strong>Relative:</strong> Haemodynamic instability (causes hypotension — use ketamine for RSI in unstable patients).</td>
                            <td><strong>RSI:</strong> 1–2 mg/kg IV. <strong>Moderate sedation:</strong> 0.5–1 mg/kg IV.</td>
                            <td>IV</td>
                            <td>Onset: 15–30 sec IV / Peak: 1–2 min / Duration: 3–10 min (ultra-short)</td>
                            <td><strong>Hypotension (dose-dependent), respiratory depression/apnoea (rapid onset — be prepared to ventilate), pain on injection, myoclonus.</strong> Propofol infusion syndrome (rare, lethal — metabolic acidosis, rhabdomyolysis, cardiac failure).</td>
                        </tr>
                        <tr>
                            <td><strong>Ketamine</strong> (Ketalar)</td>
                            <td>Dissociative anaesthetic, NMDA antagonist</td>
                            <td><strong>RSI (haemodynamically stable), severe agitation (chemical restraint), analgesia (sub-dissociative), refractory status epilepticus.</strong></td>
                            <td><strong>Absolute:</strong> Known hypersensitivity, severe/poorly controlled hypertension. <strong>Relative:</strong> Schizophrenia/psychosis (can worsen), increased ICP/IOP (controversial — recent evidence suggests safe), tachyarrhythmias.</td>
                            <td><strong>Dissociative:</strong> 1–2 mg/kg IV. <strong>Analgesia:</strong> 0.1–0.3 mg/kg IV/IM. <strong>Agitation (IM):</strong> 4–5 mg/kg IM.</td>
                            <td>IV, IM</td>
                            <td>Onset: 30–60 sec IV, 3–5 min IM / Peak: 1–5 min / Duration: 5–15 min (dissociative), 30–60 min (analgesic)</td>
                            <td><strong>Emergence phenomenon (hallucinations, vivid dreams — mitigate with BZD).</strong> Hypertension, tachycardia, laryngospasm (rare — jaw thrust, PPV), increased salivation, nystagmus, myoclonus.</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Analgesic Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Fentanyl</strong> (Sublimaze)</td>
                            <td>Synthetic opioid, mu-agonist</td>
                            <td><strong>Moderate to severe pain</strong> (trauma, burns, MI). <strong>Much shorter duration than morphine</strong> — ideal for brief procedures or when neuro checks needed.</td>
                            <td><strong>Absolute:</strong> Severe respiratory depression without ventilatory support, MAOI use within 14 days. <strong>Relative:</strong> Hypotension, bradycardia, head injury with elevated ICP, opioid dependence.</td>
                            <td>50–100 mcg IV/IM/IN. May repeat q5–10min. <strong>IN:</strong> 100–200 mcg via atomiser. <strong>Paediatric:</strong> 1–2 mcg/kg IV/IM/IN.</td>
                            <td>IV, IM, IN</td>
                            <td>Onset: &lt; 1 min IV / Peak: 3–5 min IV / Duration: 30–60 min</td>
                            <td><strong>Respiratory depression (dose-dependent), hypotension, bradycardia, chest wall rigidity (rare — rapid IV high doses; treat with naloxone + PPV), N/V, pruritus.</strong> 50–100× more potent than morphine.</td>
                        </tr>
                        <tr>
                            <td><strong>Morphine</strong> (MS Contin)</td>
                            <td>Opioid analgesic, mu-agonist</td>
                            <td><strong>Moderate to severe pain</strong> (trauma, burns, MI — also reduces preload and anxiety in ACS). Pulmonary oedema (reduces preload).</td>
                            <td><strong>Absolute:</strong> Severe respiratory depression, hypotension (SBP &lt; 90), hypovolaemia, MAOI use within 14 days. <strong>Relative:</strong> Asthma/COPD, head injury, known opioid dependence, ileus, biliary colic.</td>
                            <td>2–5 mg IV/IM/SC. May repeat q5–15min. <strong>Paediatric:</strong> 0.05–0.1 mg/kg IV/IM.</td>
                            <td>IV, IM, SC</td>
                            <td>Onset: 3–5 min IV / Peak: 10–20 min IV / Duration: 3–5 hrs</td>
                            <td><strong>Respiratory depression (peak effect delayed 20–30 min after IV — watch for delayed decompensation), hypotension (histamine release — especially with rapid IV push), N/V, constipation, pruritus, miosis.</strong> Histamine release can cause urticaria along the vein — NOT allergy, treat by slowing rate.</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Other Important Drugs</h4>
                <table>
                    <thead>
                        <tr><th>Drug</th><th>Class</th><th>Indications</th><th>Contraindications</th><th>Dose (Adult)</th><th>Route</th><th>Onset / Peak / Duration</th><th>Key Side Effects</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Sodium Bicarbonate</strong></td>
                            <td>Alkalinizing agent, buffer</td>
                            <td><strong>Severe metabolic acidosis (pH &lt; 7.1–7.2), hyperkalemia, TCA overdose (QRS &gt; 100 ms), sodium channel blocker overdose.</strong></td>
                            <td><strong>Absolute:</strong> Respiratory alkalosis, known metabolic alkalosis. <strong>Relative:</strong> Hypocalcemia (decreases ionized Ca²⁺), CHF (sodium load), hypernatremia.</td>
                            <td><strong>Metabolic acidosis:</strong> 1 mEq/kg IV/IO. <strong>TCA overdose:</strong> 1–2 mEq/kg IV until QRS narrows.</td>
                            <td>IV, IO</td>
                            <td>Onset: 5–10 min IV / Peak: 15–30 min / Duration: 1–2 hrs</td>
                            <td><strong>Hypernatremia, hyperosmolality, metabolic alkalosis (overcorrection), decreased ionized Ca²⁺, paradoxical intracellular acidosis (must ventilate adequately to blow off CO₂).</strong> Extravasation causes tissue necrosis.</td>
                        </tr>
                        <tr>
                            <td><strong>Activated Charcoal</strong></td>
                            <td>GI decontaminant, adsorbent</td>
                            <td><strong>Toxic ingestion / overdose</strong> — adsorbs many drugs. Most effective within 1 hour of ingestion. Useful: TCA, NSAIDs, aspirin, theophylline, phenytoin, carbamazepine, barbiturates, digoxin.</td>
                            <td><strong>Absolute:</strong> <strong>Airway not protected (unconscious, seizing, absent gag reflex — aspiration risk)</strong>, hydrocarbon ingestion, caustic ingestion. <strong>Ineffective for:</strong> alcohols, iron, lithium, potassium, lead, arsenic, cyanide.</td>
                            <td><strong>Adult/Paediatric:</strong> 1 g/kg PO (25–50 g). Mix with water to form slurry.</td>
                            <td>PO (or via NG tube)</td>
                            <td>Immediate binding / Excreted in stool over 12–48 hrs</td>
                            <td><strong>Nausea, vomiting (black vomit — alarming but expected), black stools.</strong> <strong>ASPIRATION — charcoal pneumonitis can be fatal.</strong> Only give to awake, alert patients with intact gag reflex.</td>
                        </tr>
                        <tr>
                            <td><strong>Magnesium Sulfate</strong></td>
                            <td>Electrolyte, anticonvulsant, antiarrhythmic</td>
                            <td><strong>Eclampsia/preeclampsia (drug of choice), torsades de pointes (first-line), severe asthma, hypomagnesemia.</strong></td>
                            <td><strong>Absolute:</strong> Heart block (symptomatic), severe renal impairment. <strong>Relative:</strong> Myasthenia gravis, bradycardia, hypotension.</td>
                            <td><strong>Eclampsia:</strong> 4–6 g IV over 15–20 min. <strong>Torsades:</strong> 2 g IV over 1–2 min. <strong>Asthma:</strong> 2 g IV over 15–20 min.</td>
                            <td>IV</td>
                            <td>Onset: 1–5 min IV / Peak: 5–15 min / Duration: 30–60 min</td>
                            <td><strong>Flushing, warmth (rapid IV push), hypotension, bradycardia, muscle weakness, areflexia (loss of DTRs — monitor patellar reflex), respiratory depression (at high levels), cardiac arrest (extreme levels — give calcium gluconate as antidote).</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Drug Formulary Rules for EMTs:</strong>
                    <ul>
                        <li><strong>Know your scope:</strong> BLS drugs (oxygen, aspirin, oral glucose, IM epinephrine for anaphylaxis, naloxone, albuterol) are carried by most EMT services. ALS drugs (narcotics, paralytics, sedatives, vasopressors) vary by state and local protocol.</li>
                        <li><strong>When in doubt, do NOT give:</strong> If you are unsure about the drug, dose, route, or indication — STOP. Ask your partner, contact medical control, or consult your drug reference. It is perfectly acceptable to say "I don't know — let me check."</li>
                        <li><strong>Read the label THREE times:</strong> when you pick up the drug, when you prepare it, and before administration. Read it ALOUD — this engages another sense and catches look-alike errors.</li>
                        <li><strong>Document everything:</strong> Drug name, dose, route, time, patient response, any adverse effects. If you did not document it, it did not happen.</li>
                    </ul>
                </div>
            </div>`,
            flashcards: [
                { question: "What are the Seven Rights of medication administration?", answer: "Right Patient, Right Drug, Right Dose, Right Route, Right Time, Right Documentation, Right to Refuse.", category: "Drug Administration" },
                { question: "What is the dose and route of nitroglycerin for angina/ACS? Key contraindication?", answer: "0.4 mg SL q5min × 3. Contraindicated if SBP < 90 mmHg or PDE-5 inhibitor (Viagra/Cialis) within 24-48 hours.", category: "Cardiovascular" },
                { question: "What is the dose and route of epinephrine for anaphylaxis vs cardiac arrest?", answer: "Anaphylaxis: 0.3-0.5 mg IM (1:1,000) in vastus lateralis. Cardiac arrest: 1 mg IV/IO q3-5min (1:10,000).", category: "Anaphylaxis" },
                { question: "What is the dose of aspirin for ACS and why should it be chewed?", answer: "162-324 mg PO chewed. Chewing speeds absorption via buccal mucosa for faster antiplatelet effect.", category: "Cardiovascular" },
                { question: "What is the critical concern about naloxone's duration of action?", answer: "Duration is 30-90 minutes — SHORTER than most opioids. Patients can re-narcotise after naloxone wears off.", category: "Opioid Reversal" },
                { question: "What is the dose of glucagon for severe hypoglycemia without IV access?", answer: "1 mg IM (adult). Onset ~10 min. May cause N/V (up to 50%). Only works if liver glycogen stores present.", category: "Glucose Management" },
                { question: "What is the dose of albuterol for asthma/COPD exacerbation?", answer: "2.5-5 mg nebulized q20min × 3. Side effects: tachycardia, tremors, nervousness.", category: "Respiratory" },
                { question: "Why is atropine NOT used in cardiac arrest (PEA/asystole)?", answer: "It was removed from ACLS algorithm — no evidence of benefit for pulseless arrest. Used only for symptomatic bradycardia.", category: "Cardiovascular" },
                { question: "What is the dose of ondansetron (Zofran) and its key warning?", answer: "4 mg ODT/IV/IM. QT prolongation warning — avoid high doses with electrolyte abnormalities or QT-prolonging drugs.", category: "Antiemetics" },
                { question: "How does fentanyl differ from morphine in duration and potency?", answer: "Duration 30-60 min vs 3-5 hrs for morphine. 50-100× more potent. Ideal for brief procedures or when neuro checks needed.", category: "Analgesics" }
            ],
            quiz: [
                {
                    q: "A 62-year-old male with chest pain radiating to his left arm rates his pain 7/10. He has a history of hypertension and angina. Vital signs: HR 98, BP 132/84, RR 18, SpO₂ 97%. He took sildenafil (Viagra) approximately 18 hours ago. The EMT should:",
                    options: [
                        "Administer nitroglycerin 0.4 mg SL and aspirin 324 mg PO (chewed)",
                        "Administer aspirin 324 mg PO chewed but withhold nitroglycerin — sildenafil within 24-48 hours is an absolute contraindication to nitrates due to risk of severe refractory hypotension",
                        "Administer oxygen via NRB at 15 L/min and transport — no medications are indicated",
                        "Administer nitroglycerin 0.4 mg SL only — aspirin is contraindicated in chest pain"
                    ],
                    correct: 1,
                    explanation: "The use of PDE-5 inhibitors within 24-48 hours is an ABSOLUTE contraindication to nitroglycerin. The interaction potentiates NO-mediated vasodilation causing severe refractory hypotension. Aspirin should still be given — 162-324 mg PO chewed — because it reduces mortality in ACS. Oxygen given only if SpO₂ < 94% (patient is 97%). Always ask about PDE-5 inhibitor use before giving nitroglycerin."
                },
                {
                    q: "A 28-year-old female with asthma is in respiratory distress after eating shellfish. She has urticaria, audible wheezing, facial oedema, and SpO₂ 88% on room air. BP 88/54, HR 122. What is the FIRST medication the EMT should administer?",
                    options: [
                        "Albuterol 2.5 mg nebulized for bronchodilation",
                        "Diphenhydramine 50 mg IM for the allergic reaction",
                        "Epinephrine 0.3 mg IM (1:1,000) in the lateral thigh — this is anaphylaxis and epinephrine is the first-line, life-saving treatment",
                        "Oxygen 15 L/min via NRB — medications are secondary to oxygenation"
                    ],
                    correct: 2,
                    explanation: "This is anaphylaxis: allergen + cutaneous + respiratory + haemodynamic involvement. Epinephrine IM is FIRST-LINE and should NOT be delayed. Epi works on alpha-1 (vasoconstriction), beta-1 (positive inotrope/chronotrope), and beta-2 (bronchodilation, decreased mediator release). Albuterol is beta-2 only — helps wheezing but does NOT treat anaphylaxis or hypotension. Diphenhydramine is an adjunct, NOT a replacement. Oxygen should be given but AFTER/DURING epinephrine — do NOT delay epinephrine."
                },
                {
                    q: "[HARD] A 55-year-old homeless male is found unresponsive with pinpoint pupils and RR 6. Friends report he 'does heroin sometimes.' EMT administers naloxone 2 mg IN. Two minutes later, he wakes up extremely agitated, tries to pull out the IV, and attempts to punch the EMT. HR 132, BP 164/98. What is the explanation and appropriate action?",
                    options: [
                        "The patient is seizing — administer diazepam 5 mg IV",
                        "This is precipitated opioid withdrawal from rapid reversal. Use verbal de-escalation, provide reassurance, consider additional naloxone only if respiratory depression recurs. Withdrawal is expected and self-limited",
                        "The patient is having an adverse reaction to naloxone — stop all medications and transport",
                        "The patient is intoxicated on a stimulant as well — administer an antipsychotic"
                    ],
                    correct: 1,
                    explanation: "Precipitated opioid withdrawal — sudden displacement of heroin from mu-receptors by naloxone causes acute withdrawal (agitation, hypertension, tachycardia). Extremely unpleasant but NOT life-threatening (unless combativeness causes injury). Naloxone should be TITRATED in opioid-dependent patients — start with 0.04-0.1 mg IV and titrate to RR > 12. Once awake and breathing adequately, no MORE naloxone is needed. Key: withdrawal is awful but hypoxia kills."
                },
                {
                    q: "A 7-year-old child with type 1 diabetes is found lethargic and confused. He is sweaty and tachycardic. Blood glucose is 'LOW.' He has a gag reflex and can swallow. The EMT should FIRST:",
                    options: [
                        "Administer oral glucose 15 g buccal and transport",
                        "Establish IV and give D50 25 g IV",
                        "If no IV, give glucagon 0.5 mg IM. If IV available, give D10 2-5 mL/kg IV. Do NOT give PO to a lethargic patient — aspiration risk",
                        "Transport without glucose — the hospital will manage it"
                    ],
                    correct: 2,
                    explanation: "This child is severely hypoglycemic with altered mental status. Although described as having a gag reflex, the patient is 'lethargic and confused' — oral glucose is NOT safe because airway protection may be impaired. Paediatric hypoglycemia: (1) If IV access, give D10 2-5 mL/kg IV (NOT D50 — too concentrated for children). (2) If no IV, give glucagon 0.5 mg IM (< 20 kg). Do NOT delay treatment for transport."
                }
            ],
            critical: [
                {
                    id: "crit_9_5_1",
                    scenario: "You are called to a nursing home for a 78-year-old male with altered mental status. Staff reports he has CAD, hypertension, type 2 diabetes, and COPD. Meds: metformin, lisinopril, metoprolol, aspirin. He was found confused and diaphoretic. Vitals: HR 88, BP 142/78, RR 14, SpO₂ 94%. Blood glucose 56 mg/dL. Patient is awake but confused, follows commands, and has palpable gag reflex. He has a peripheral IV in place.",
                    question: "How should the EMT manage this hypoglycemic patient?",
                    options: [
                        {t: "Give oral glucose 15 g buccal since he has a gag reflex and can swallow — he is confused but follows commands and can protect airway. Recheck BG in 15 min. If not improved, consider glucagon 1 mg IM or D50 25 g IV", f: "Correct — This patient has mild hypoglycemia with intact airway reflexes. Oral glucose is safest: 15 g buccal. He follows commands and has a gag reflex — prerequisites for PO glucose. If mental status worsens, switch to IM glucagon or IV D50. Giving D50 to a patient who can take PO is 'overkill' with IV site risks."},
                        {t: "Do NOT give oral glucose — a confused patient with BG 56 should get D50 25 g IV immediately through the existing IV", f: "Incorrect — While D50 works quickly, this patient follows commands with intact gag reflex. Oral glucose is appropriate and less invasive. D50 is for unconscious/seizing patients or those who cannot take PO. Confused but follows commands = try PO first."}
                    ],
                    correct: 0,
                    explanation: "Hypoglycemia management is stratified by mental status. PO glucose is first-line for mild-moderate hypoglycemia with intact airway. The key assessment: can this patient PROTECT HIS AIRWAY? If yes, oral glucose is safe. If ANY doubt, go with IM glucagon or IV D50/D10.",
                    kpi: "Selects appropriate hypoglycemia treatment based on mental status and airway assessment"
                },
                {
                    id: "crit_9_5_2",
                    scenario: "A 24-year-old female having a 'panic attack' after a breakup. Hyperventilating, crying, 'I can't breathe.' HR 110, BP 128/76, RR 28, SpO₂ 100%. Lung sounds clear. No urticaria, no oedema, no wheezing, no stridor. No medical history. MedicAlert bracelet: 'ANAPHYLAXIS — EPINEPHRINE — SHELLFISH.'",
                    question: "Does this patient need epinephrine?",
                    options: [
                        {t: "No — this patient does NOT have anaphylaxis. No signs of allergic reaction. She has isolated tachypnea with hyperventilation and normal SpO₂. Management: calm reassurance, breathing control. Do NOT give epinephrine — it would cause tachycardia, hypertension, anxiety, and could cause harm", f: "Correct — MedicAlert indicates RISK, not active anaphylaxis. Zero signs of allergic reaction. Symptoms classic for panic attack. Giving epinephrine without anaphylaxis would be a serious medication error."},
                        {t: "Give epinephrine 0.3 mg IM — the bracelet indicates she is at risk, and RR 28 with anaphylaxis history warrants treatment. Better to overtreat than miss anaphylaxis", f: "Incorrect — This would be a medication error. She has NO signs of anaphylaxis: no rash, no wheezing, no hypotension, no hypoxia. 'Better to overtreat' applies when there is reasonable suspicion — not when presentation is classic for panic attack."}
                    ],
                    correct: 0,
                    explanation: "The MedicAlert bracelet tells you she has a known allergy and carries epinephrine, but it does NOT mean every respiratory symptom is anaphylaxis. Assess the CURRENT presentation: trigger (emotional), symptoms (hyperventilation, no allergic signs), lungs (clear), skin (no rash), haemodynamics (normal BP, appropriate tachycardia), SpO₂ (100%). This is a panic attack. Do NOT give epinephrine.",
                    kpi: "Correctly differentiates anaphylaxis from panic attack and avoids unnecessary epinephrine"
                },
                {
                    id: "crit_9_5_3",
                    scenario: "A 66-year-old male with altered mental status and history of AFib, hypertension, and heart failure. Meds: warfarin, metoprolol, lisinopril, digoxin. Family reports diarrhoea for 3 days, poor PO intake. Vitals: HR 52 (irregular), BP 82/56, RR 16, SpO₂ 95%. Confused, unable to follow commands. EKG: AFib with slow ventricular response, multiple PVCs. Glucose 132 mg/dL.",
                    question: "Most likely cause of bradycardia and hypotension? What medication should the EMT consider?",
                    options: [
                        {t: "Cardiogenic shock from acute MI — give aspirin 324 mg, oxygen, transport emergently", f: "Incorrect — Presentation is more consistent with toxic/metabolic cause. Multiple risk factors for digoxin toxicity: dehydration (diarrhoea, poor PO), advanced age, concurrent meds that slow AV conduction. Digoxin toxicity: bradycardia, AV block, PVCs, GI symptoms, altered mental status."},
                        {t: "Suspect digoxin toxicity due to dehydration causing prerenal azotemia → elevated digoxin levels. Toxicity causes bradycardia, AV block, ventricular ectopy, and altered MS. Management: supportive care (O₂, IV, monitor), atropine 0.5-1 mg IV if symptomatic bradycardia. Notify hospital — Digibind is definitive antidote", f: "Correct — Classic digoxin toxicity: elderly, dehydrated, on digoxin + beta-blocker. Signs: bradyarrhythmias + PVCs (hallmark), altered MS, GI symptoms. Management: supportive care, atropine for symptomatic bradycardia, transport. Do NOT give calcium for hyperkalemia in digoxin toxicity (stone heart risk)."}
                    ],
                    correct: 1,
                    explanation: "Digoxin toxicity in an elderly patient with volume depletion. Key clues: AFib (digoxin for rate control), diarrhoea/dehydration (prerenal azotemia → reduced GFR → digoxin accumulates), bradycardia + PVCs (hallmark), altered MS. Digoxin has narrow therapeutic index. Prehospital: O₂, monitor, atropine for bradycardia, transport with toxicity notification.",
                    kpi: "Recognises digoxin toxicity from clinical presentation and ECG findings"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c9s6 – Medication-Assisted Treatment
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c9s6",
            shortTitle: "9.6 Medication-Assisted Treatment",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Medication-Assisted Treatment</h3>

                <p><strong>Medication-Assisted Treatment (MAT)</strong> is the use of FDA-approved medications, in combination with counselling and behavioural therapies, to treat substance use disorders (SUDs). MAT is considered the <strong>gold standard</strong> for opioid use disorder (OUD) and alcohol use disorder (AUD). It reduces mortality, decreases illicit drug use, improves treatment retention, and reduces infectious disease transmission (HIV, hepatitis C). As an EMT, you will increasingly encounter patients on MAT — understanding these medications is essential for safe and effective care.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point:</strong> MAT medications are NOT 'replacing one addiction with another' — they are evidence-based treatments for a chronic medical condition. <strong>Patients on buprenorphine can still experience pain and can still suffer an overdose.</strong> Naloxone should still be given for respiratory depression regardless of MAT status. Do NOT withhold pain management from a patient on MAT — they may need HIGHER doses of opioids to achieve adequate analgesia.
                </div>

                <h4>Opioid Use Disorder (OUD) — The Three FDA-Approved Medications</h4>
                <table>
                    <thead>
                        <tr><th>Medication</th><th>Mechanism</th><th>How It Works</th><th>Regulation</th><th>EMS Considerations</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Methadone</strong> (Dolophine, Methadose)</td>
                            <td><strong>Full mu-opioid agonist</strong></td>
                            <td>Activates mu-receptors fully — same mechanism as heroin but with long half-life (24-36 hrs) that prevents withdrawal and reduces cravings. Daily oral dosing at certified OTPs.</td>
                            <td><strong>Highly regulated by DEA.</strong> Only dispensed at certified OTPs (not regular pharmacy). Patients attend clinic daily. Strict federal regulations.</td>
                            <td><strong>Prolonged overdose risk.</strong> Respiratory depression from methadone can last > 24 hrs. QT prolongation at high doses. Patients have significant opioid tolerance — may need higher doses for pain. Do NOT give naloxone unless respiratory depression present.</td>
                        </tr>
                        <tr>
                            <td><strong>Buprenorphine</strong> (Suboxone, Subutex, Sublocade — often with naloxone)</td>
                            <td><strong>Partial mu-opioid agonist + kappa antagonist</strong></td>
                            <td>Partially activates mu-receptor — enough to stop withdrawal and reduce cravings but with a <strong>ceiling effect</strong> limiting respiratory depression risk. Naloxone added to deter IV misuse.</td>
                            <td>Prescribed by waivered providers (X-waiver eliminated 2023 — any DEA-registered prescriber with SIII authority can prescribe). Sublocade: once-monthly injection.</td>
                            <td><strong>PRECIPITATED WITHDRAWAL is greatest risk</strong> if given while full agonist still on receptors. Patients CAN still experience respiratory depression from other opioids. May need HIGHER doses of full agonists for pain. Give naloxone if indicated — be prepared for withdrawal.</td>
                        </tr>
                        <tr>
                            <td><strong>Naltrexone</strong> (Vivitrol, Revia)</td>
                            <td><strong>Competitive mu-opioid antagonist</strong></td>
                            <td>Completely BLOCKS mu-receptor — if patient uses opioids, no euphoric effect. Used for both OUD and AUD. Monthly injection (Vivitrol) or daily oral.</td>
                            <td>No special DEA restrictions. Patient must be opioid-free 7-10 days before starting (to avoid precipitating withdrawal). No abuse potential.</td>
                            <td><strong>Patients cannot get opioid analgesia from standard doses.</strong> Need non-opioid modalities (ketamine, regional anaesthesia, NSAIDs) or very high opioid doses under monitoring. Naltrexone does NOT block naloxone.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Precipitated Withdrawal:</strong> Occurs when naloxone or buprenorphine displaces a full agonist from mu-receptors. Results: N/V/D, severe myalgias, abdominal cramping, agitation, hypertension, tachycardia. Not directly life-threatening but can cause aspiration, dehydration, hyperthermia. Management: supportive care — IV fluids, antiemetics, benzodiazepines for agitation. Prevention: use LOWEST effective naloxone dose, titrated to RR, not full arousal.
                </div>

                <h4>Naloxone Distribution — Take-Home Naloxone Programs</h4>
                <ul>
                    <li><strong>OTC availability:</strong> Naloxone (Narcan nasal spray 4 mg) available OTC in most US states without prescription.</li>
                    <li><strong>Family education:</strong> EMTs should teach recognition of opioid OD signs, naloxone administration (IN preferred for laypersons), and importance of calling 911 (naloxone wears off in 30-90 min — re-narcotisation risk).</li>
                    <li><strong>EMS:</strong> If bystander already gave naloxone, assess how much, time of administration, and response. May need MORE naloxone (especially for synthetic opioids like fentanyl). Monitor for re-narcotisation during transport.</li>
                    <li><strong>Good Samaritan Laws:</strong> Most states provide limited legal protection from prosecution for the person who calls 911. EMTs should be aware of these laws.</li>
                </ul>

                <h4>Alcohol Use Disorder (AUD) Medications</h4>
                <table>
                    <thead>
                        <tr><th>Medication</th><th>Mechanism</th><th>Effect on Drinking</th><th>EMS Considerations</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Disulfiram</strong> (Antabuse)</td>
                            <td>Inhibits aldehyde dehydrogenase → blocks acetaldehyde metabolism</td>
                            <td><strong>Aversive therapy.</strong> Drinking alcohol → acetaldehyde accumulation → flushing, N/V, headache, palpitations, chest pain, dyspnoea. Deters drinking.</td>
                            <td><strong>Disulfiram reaction is a medical emergency.</strong> Treatment: IV fluids, antiemetics, vasopressors if hypotensive, cardiac monitoring. Most reactions self-limited (30 min to several hours) but can be severe (MI, arrhythmia, death — rare).</td>
                        </tr>
                        <tr>
                            <td><strong>Acamprosate</strong> (Campral)</td>
                            <td>Modulates glutamate/NMDA receptor activity</td>
                            <td><strong>Reduces cravings and negative affect during abstinence.</strong> Does NOT cause adverse effects if alcohol consumed.</td>
                            <td>Very safe — no sedation, no interaction with alcohol. Most common: diarrhoea (dose-dependent). Minimal overdose risk.</td>
                        </tr>
                        <tr>
                            <td><strong>Naltrexone</strong> (Vivitrol — same as OUD)</td>
                            <td>Mu-opioid antagonist — blocks endorphin-mediated reward</td>
                            <td><strong>Reduces heavy drinking days and cravings.</strong> Decreases rewarding effects of alcohol. More effective at reducing heavy drinking than achieving complete abstinence.</td>
                            <td>Same OUD considerations. Do NOT give opioids for pain (ineffective). Monitor for hepatotoxicity (black box warning). No disulfiram-like reaction with alcohol.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — MAT and Pain Management:</strong> A common EMS dilemma: patient on buprenorphine (Suboxone) with acute severe pain. <strong>Do NOT withhold pain management.</strong> Buprenorphine occupies but partially activates mu-receptors — full agonists can still work but may need HIGHER doses. Options: fentanyl (titrated to effect), ketamine (sub-dissociative 0.1-0.3 mg/kg), regional anaesthesia. Never tell a patient on MAT 'I can't give you pain medication because you're on Suboxone' — this is incorrect and cruel.
                </div>

                <h4>MAT and EMS — Important Clinical Scenarios</h4>

                <h5>Scenario 1: The Patient on Buprenorphine Who Overdoses</h5>
                <p>Can a patient on buprenorphine overdose? <strong>Yes.</strong> Despite the ceiling effect: (1) Polysubstance use (BZDs + buprenorphine is especially dangerous), (2) Potent full agonists (fentanyl analogues can overcome partial block), (3) Accidental exposure in opioid-naive individuals. <strong>Give naloxone regardless of MAT status.</strong> Higher/repeated doses may be needed. Be prepared for precipitated withdrawal — but do NOT withhold naloxone.</p>

                <h5>Scenario 2: The Patient in Withdrawal</h5>
                <p>Opioid withdrawal features: yawning, piloerection, myalgias, diarrhoea, N/V, abdominal cramping, anxiety, hypertension, tachycardia, diaphoresis, rhinorrhea. Extremely unpleasant but <strong>NOT life-threatening</strong>. Management: supportive care — IV fluids, antiemetics, BZDs for severe agitation. Do NOT give naloxone for withdrawal alone.</p>

                <h5>Scenario 3: The Patient on Vivitrol Who Needs Pain Relief</h5>
                <p>Naltrexone block lasts ~28 days. Standard opioid doses will be COMPLETELY ineffective. Options: non-opioid analgesia (ketamine, NSAIDs, regional anaesthesia) or high-dose opioids under monitored conditions. Notify receiving hospital.</p>

                <h4>Stigma Reduction in EMS — Person-First Language</h4>
                <p>Substance use disorder is a <strong>chronic medical condition</strong>, not a moral failing. Stigma in healthcare leads to patients concealing drug use, avoiding care, and providers providing substandard care.</p>
                <table>
                    <thead>
                        <tr><th>Stigmatising Language</th><th>Person-First Alternative</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>"Addict," "Junkie," "User"</td><td>"Person with substance use disorder"</td></tr>
                        <tr><td>"Clean" vs. "Dirty" (drug screens)</td><td>"Negative" vs. "Positive"</td></tr>
                        <tr><td>"Substituting one addiction" (MAT)</td><td>"Evidence-based treatment for a chronic condition"</td></tr>
                        <tr><td>"Drug-seeking behaviour"</td><td>"Requesting pain relief" (describe neutrally)</td></tr>
                        <tr><td>"Relapse" / "Failed treatment"</td><td>"Return to use" / "Disease exacerbation"</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Stigma Kills:</strong> Studies show patients with SUD receive LESS aggressive pain management, LESS diagnostic testing, and WORSE care. An EMT's job is to treat the medical condition in front of them — not to judge. A patient with SUD is entitled to the SAME standard of care as any other patient.
                </div>

                <h4>NREMT Key Points — MAT Summary</h4>
                <ul>
                    <li>MAT is evidence-based treatment — NOT 'replacing one addiction with another.'</li>
                    <li><strong>Patients on buprenorphine can still experience pain and overdose.</strong> Treat their acute condition — do not withhold analgesia or naloxone.</li>
                    <li><strong>Naloxone should still be given for respiratory depression regardless of MAT status.</strong> Higher/repeated doses may be needed.</li>
                    <li><strong>Precipitated withdrawal</strong> is awful but not life-threatening. Use lowest effective naloxone dose (titrate to RR > 12).</li>
                    <li><strong>Patients on naltrexone cannot get opioid analgesia</strong> — use non-opioid modalities.</li>
                    <li><strong>Use person-first language</strong> — treat SUD as a chronic medical condition.</li>
                </ul>
            </div>`,
            flashcards: [
                { question: "What are the three FDA-approved medications for OUD?", answer: "Methadone (full agonist, daily at OTP), Buprenorphine/Suboxone (partial agonist, prescribed), Naltrexone/Vivitrol (antagonist, monthly injection).", category: "OUD Medications" },
                { question: "What is the ceiling effect of buprenorphine?", answer: "As a PARTIAL mu-agonist, higher doses produce no additional effect. This limits respiratory depression risk but also means patients need higher doses of full agonists for pain.", category: "OUD — Buprenorphine" },
                { question: "What is precipitated withdrawal and when does it occur?", answer: "Sudden, intense withdrawal when an antagonist/partial agonist displaces a full agonist from mu-receptors. Symptoms: N/V/D, myalgias, cramping, agitation, hypertension. Management: supportive care.", category: "OUD — Withdrawal" },
                { question: "Can a patient on buprenorphine still overdose?", answer: "Yes — concurrent BZDs/alcohol, potent full agonists (fentanyl), or accidental exposure in opioid-naive individuals can cause respiratory depression. Give naloxone if indicated.", category: "OUD — Overdose" },
                { question: "Why can't standard opioid painkillers work for patients on naltrexone?", answer: "Naltrexone is a competitive mu-antagonist — it blocks the receptor completely. Standard doses cannot overcome the block. Use ketamine, NSAIDs, regional anaesthesia instead.", category: "OUD — Naltrexone" },
                { question: "What are the three FDA-approved medications for AUD?", answer: "Disulfiram (Antabuse — aversive), Acamprosate (Campral — reduces cravings), Naltrexone (reduces heavy drinking and reward).", category: "AUD Medications" },
                { question: "What is a disulfiram reaction and how is it managed?", answer: "Alcohol + disulfiram → acetaldehyde accumulation → flushing, N/V, chest pain, tachycardia, hypotension/hypertension. Treatment: IV fluids, antiemetics, vasopressors if needed, cardiac monitoring.", category: "AUD — Disulfiram" },
                { question: "What is person-first language for a patient with SUD?", answer: "'Person with substance use disorder' not 'addict/junkie.' 'Positive/negative' not 'clean/dirty.' 'Return to use' not 'relapse/failure.'", category: "Stigma Reduction" }
            ],
            quiz: [
                {
                    q: "A 38-year-old male on Suboxone (buprenorphine/naloxone) for OUD is found unresponsive with RR 8 and SpO₂ 86%. He 'relapsed and used heroin.' The EMT should:",
                    options: [
                        "Withhold naloxone — buprenorphine already provides protection against respiratory depression, and naloxone would precipitate withdrawal",
                        "Administer naloxone — he has opioid-induced respiratory depression. Higher/repeated doses may be needed. Be prepared for precipitated withdrawal, but do NOT withhold naloxone — respiratory depression kills",
                        "Give oxygen and transport only — the combination is complex and naloxone may cause complications",
                        "Give flumazenil — the problem may be BZD co-ingestion"
                    ],
                    correct: 1,
                    explanation: "A patient on buprenorphine CAN suffer life-threatening respiratory depression from additional opioids. Naloxone MUST be given. Higher/repeated doses may be needed because buprenorphine occupies mu-receptors. Precipitated withdrawal is likely but NOT a reason to withhold naloxone — hypoxia kills, withdrawal does not."
                },
                {
                    q: "A 45-year-old female on Vivitrol (naltrexone injection) presents with severe abdominal pain from suspected kidney stone. She asks for pain relief. The EMT knows:",
                    options: [
                        "Morphine 5 mg IV will not be effective — naltrexone blocks mu-receptors. Use non-opioid alternatives (ketamine 0.1-0.3 mg/kg, NSAIDs per protocol) and notify the hospital",
                        "Give morphine 10 mg IV — a double dose will overcome the block",
                        "Do not give any pain medication — patients on naltrexone cannot receive analgesia",
                        "Give fentanyl 100 mcg IV — fentanyl is more potent and will work despite the naltrexone"
                    ],
                    correct: 0,
                    explanation: "Naltrexone competitively blocks mu-receptors — standard (or even double) doses of morphine/fentanyl will be completely ineffective. Simply increasing the dose is dangerous (when the naltrexone wears off, the accumulated opioid may cause respiratory depression). Use non-opioid analgesics: ketamine, NSAIDs, regional anaesthesia. Notify hospital."
                },
                {
                    q: "[HARD] A 30-year-old male with OUD is found with profound respiratory depression (RR 4). Family gave 8 mg IN naloxone (two Narcan sprays). On EMS arrival, he is awake, agitated, vomiting profusely, sweating, with severe diarrhoea. HR 134, BP 172/104. What is the priority concern and management?",
                    options: [
                        "Precipitated withdrawal from aggressive naloxone. Priority: airway protection — position in recovery position, suction, ondansetron 4 mg IV, monitor for recurrence of respiratory depression, transport. Do NOT give more naloxone unless RR drops again",
                        "Give more naloxone — the patient is still toxic",
                        "Give diazepam 5 mg IV to sedate the agitation",
                        "Transport emergently with lights and sirens — the hypertension suggests overdose complication"
                    ],
                    correct: 0,
                    explanation: "Classic precipitated withdrawal from aggressive naloxone (8 mg). Priority: AIRWAY PROTECTION — patient vomiting, at risk of aspiration. Recovery position, suction, antiemetics. Do NOT give more naloxone unless respiratory depression recurs. Diazepam may be considered for severe agitation but weigh risks. This highlights why naloxone should be TITRATED: give lowest dose that restores RR > 12, not largest dose that fully reverses the opioid."
                },
                {
                    q: "A 55-year-old male with AUD presents with confusion, ataxia, slurred speech. Strong alcohol odour. Family reports he started a 'new medication for drinking.' Vitals: HR 104, BP 138/86, RR 16, SpO₂ 97%, BG 98 mg/dL. What is MOST important for the EMT to determine?",
                    options: [
                        "Whether he is on disulfiram (Antabuse) — if he has been drinking, he may have a disulfiram reaction. However, his presentation is more consistent with alcohol intoxication than a disulfiram reaction. Rule out other causes of AMS and provide supportive care",
                        "Whether he is on naltrexone — this affects pain management",
                        "The specific medication does not matter — treat the intoxication",
                        "Whether he is on acamprosate — it can cause severe interactions with alcohol"
                    ],
                    correct: 0,
                    explanation: "While presentation is most consistent with alcohol intoxication, knowing about disulfiram is important: (1) A disulfiram reaction can present with AMS (though typically cardiovascular/GI). (2) Avoid giving alcohol-containing medications. (3) If having a disulfiram reaction, management is supportive. Acamprosate and naltrexone do NOT cause reactions with alcohol."
                }
            ],
            critical: [
                {
                    id: "crit_9_6_1",
                    scenario: "A 28-year-old female on Suboxone for OUD (stable 2 years) presents with severe RLQ abdominal pain, N/V, fever 38.5°C. She is in significant distress, HR 118, BP 106/72, RR 20, SpO₂ 98%. Rebound tenderness and guarding in RLQ. Suspected appendicitis. She rates pain 9/10 and is asking for pain relief.",
                    question: "EMT's approach to pain management in a patient on buprenorphine with acute severe abdominal pain?",
                    options: [
                        {t: "Tell her she cannot receive opioids because the buprenorphine will block it. She should not be in severe pain because the buprenorphine provides baseline analgesia", f: "Incorrect — Both clinically wrong and stigmatising. Buprenorphine does NOT provide adequate analgesia for acute severe pain (partial agonist with ceiling effect). Patients on MAT CAN and DO experience severe pain. Withholding pain medication is discriminatory and substandard."},
                        {t: "This patient needs pain relief. Buprenorphine does NOT eliminate opioid analgesia. Ketamine (sub-dissociative 0.1-0.3 mg/kg) is an excellent non-opioid option. If opioids needed, fentanyl (titrated to effect — may need higher doses). Do NOT withhold pain management. Notify receiving hospital about MAT status", f: "Correct — Patients on MAT are entitled to the SAME standard of pain management. Buprenorphine does NOT contraindicate opioid analgesia — higher doses of full agonists may be needed. Never deny pain medication to a patient because of SUD history."}
                    ],
                    correct: 1,
                    explanation: "Common misconception: patients on buprenorphine cannot receive opioids. FALSE. Buprenorphine is a PARTIAL agonist — full agonists can still produce additional effect by competing for the receptor. Higher doses may be needed. Ketamine is an excellent non-opioid option. Key: (1) Treat pain, (2) Use multimodal approach, (3) Be prepared for higher opioid requirements, (4) Notify hospital, (5) Monitor for respiratory depression.",
                    kpi: "Provides appropriate pain management for a patient on buprenorphine MAT"
                },
                {
                    id: "crit_9_6_2",
                    scenario: "A 34-year-old male is agitated, confused, and vomiting. He stopped heroin ~18 hours ago trying to 'get clean' at home. He is sweating profusely, has diarrhoea, severe muscle cramps, and is yelling he 'can't take it anymore.' HR 124, BP 156/94, RR 22. Skin diaphoretic with piloerection. Pupils dilated (6 mm). No trauma or infection signs.",
                    question: "Diagnosis and appropriate EMS management?",
                    options: [
                        {t: "Opioid withdrawal syndrome — abrupt cessation of heroin ~18 hrs ago. Classic: piloerection, mydriasis, diarrhoea, N/V, myalgias, hypertension, tachycardia, agitation. Management: supportive care (IV fluids, ondansetron, consider BZD for severe agitation). Do NOT give naloxone (no respiratory depression). Transport for MAT evaluation. Provide reassurance", f: "Correct — Opioid withdrawal. Extremely unpleasant but not life-threatening. Key: (1) No naloxone — withdrawal is NOT overdose. (2) Supportive care: IV fluids, antiemetics, BZDs for agitation. (3) Reassurance. (4) Transport for potential MAT initiation. Use person-first language."},
                        {t: "Opioid overdose with paradoxical reaction — give naloxone 0.4 mg IM", f: "Incorrect — This is NOT overdose. Differentiating features: OVERDOSE = depressed MS, RR < 12, pinpoint pupils, cyanosis. WITHDRAWAL = awake, agitated, dilated pupils, N/V/D, piloerection, hypertension. These are OPPOSITE presentations. Giving naloxone in withdrawal would be a medication error."}
                    ],
                    correct: 0,
                    explanation: "Classic opioid withdrawal after abrupt heroin cessation (~18 hrs). Heroin withdrawal onset: 6-12 hrs, peak: 24-48 hrs. Differential: (1) Withdrawal vs overdose: opposite presentations. (2) Other causes of agitation: psychiatric illness, hypoglycemia, sepsis, thyrotoxicosis. Management: supportive care, transport for MAT evaluation. Treat with compassion.",
                    kpi: "Correctly differentiates opioid withdrawal from overdose"
                },
                {
                    id: "crit_9_6_3",
                    scenario: "A 52-year-old male with chest pain and flushing. On Antabuse (disulfiram) for AUD for 3 months. He drank 'several beers' ~2 hours ago. Within 30 minutes: severe facial flushing, throbbing headache, N/V, chest tightness, palpitations. Vitals: HR 126, BP 88/62, RR 24, SpO₂ 94%. EKG: sinus tachycardia with ST depression in inferior leads. Wife is panicking — 'is he having a heart attack?'",
                    question: "Diagnosis and management?",
                    options: [
                        {t: "Disulfiram reaction — alcohol + Antabuse → acetaldehyde accumulation → flushing, headache, N/V, chest pain, tachycardia, hypotension. Management: O₂, cardiac monitor, IV access, IV fluids (NS 500-1000 mL) for hypotension, ondansetron for N/V, monitor for arrhythmias. ST depression likely demand ischaemia. Transport. Do NOT give alcohol-containing meds", f: "Correct — Disulfiram-ethanol reaction. Acetaldehyde accumulation causes flushing (vasodilation → hypotension), throbbing headache, N/V, chest pain (demand ischaemia from tachycardia + hypotension), palpitations. Supportive care: IV fluids, antiemetics, cardiac monitoring. Reaction usually self-limited (30 min to several hours)."},
                        {t: "Acute MI — give aspirin 324 mg, nitroglycerin 0.4 mg SL, alert STEMI centre", f: "Incorrect — Clinical context strongly suggests disulfiram reaction, not primary ACS. Giving NTG to a hypotensive patient (BP 88/62) would be dangerous. ST depression is from demand ischaemia (tachycardia + hypotension), not coronary occlusion. Primary problem is acetaldehyde toxicity. Supportive care is the key."}
                    ],
                    correct: 0,
                    explanation: "Disulfiram-ethanol reaction severity is dose-dependent. This patient has moderate-to-severe reaction with haemodynamic compromise and demand ischaemia. Priorities: (1) ABCs, (2) IV fluids for hypotension from vasodilation, (3) Antiemetics, (4) Cardiac monitoring for arrhythmias, (5) No alcohol-containing medications, (6) Transport. Reaction self-resolves as acetaldehyde is metabolised.",
                    kpi: "Recognises disulfiram-ethanol reaction and provides appropriate supportive care"
                }
            ]
        },

        /* ──────────────────────────────────────────────────────────────────────────────
         * c9s7 – Medication Safety & Error Prevention
         * ────────────────────────────────────────────────────────────────────────────── */
        {
            id: "c9s7",
            shortTitle: "9.7 Medication Safety & Error Prevention",
            summary: `<div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Medication Safety &amp; Error Prevention</h3>

                <p>Medication errors are a leading cause of preventable morbidity and mortality in healthcare. In the United States, <strong>medication errors affect at least 1.5 million people per year</strong> and cause thousands of deaths annually. The majority of these errors are PREVENTABLE by following standard safety protocols, maintaining situational awareness, and fostering a culture where safety is prioritised over speed. For the EMT, medication safety is especially critical because EMS operates in chaotic, uncontrolled environments with limited supervision, time pressure, and high patient acuity — a perfect storm for errors.</p>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — The Reality of Medication Errors:</strong> Medication errors are NOT rare — studies suggest that EMS medication errors occur in 1-5% of all medication administrations. Common types: wrong dose (decimal errors — 0.1 vs 1 mg is a 10× difference), wrong drug (look-alike packaging), wrong route, and wrong patient. The good news: MOST errors are preventable with simple, consistent safety habits. The bad news: when an error occurs, it can be fatal — especially with high-alert medications like epinephrine, narcotics, and insulin.
                </div>

                <h4>Scope of the Problem</h4>
                <ul>
                    <li>Medication errors cause <strong>thousands of deaths per year</strong> in the US — more than motor vehicle collisions or breast cancer.</li>
                    <li>EMS medication errors occur at a rate of approximately <strong>1-5% of all administrations</strong> (comparable to hospital rates).</li>
                    <li>Common contributing factors in EMS: <strong>high-stress environment, night shifts/fatigue, noisy chaotic scenes, look-alike packaging, similar drug names, poor lighting, lack of double-check systems, and inadequate drug knowledge.</strong></li>
                    <li>The majority of errors involve <strong>high-alert medications</strong> — those most likely to cause significant patient harm when used in error.</li>
                </ul>

                <h4>High-Alert Medications</h4>
                <p><strong>High-alert medications</strong> are drugs that bear a heightened risk of causing significant patient harm when used in error. Special safeguards are required for these medications. The Institute for Safe Medication Practices (ISMP) identifies the following high-alert drug classes relevant to EMS:</p>
                <table>
                    <thead>
                        <tr><th>Category</th><th>Examples</th><th>Why High-Alert</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Look-Alike Sound-Alike (LASA) Drugs</strong></td><td>epinephrine vs ephedrine, hydralazine vs hydroxyzine, dobutamine vs dopamine, NTG vs GTN, amiodarone vs amlodipine</td><td>Similar names or packaging lead to wrong drug selection. Read labels carefully — do NOT rely on memory or package colour alone. Tall-man lettering (e.g., <strong>DOBUTamine</strong> vs <strong>DOPamine</strong>) helps differentiate.</td></tr>
                        <tr><td><strong>Concentrated Electrolytes</strong></td><td>Potassium chloride (KCl), sodium chloride &gt; 0.9%, calcium gluconate, magnesium sulfate</td><td>Concentrated KCl given IV push can cause cardiac arrest. These must be diluted and given as infusions. NEVER give KCl IV push unless in a code situation per protocol.</td></tr>
                        <tr><td><strong>Opioids</strong></td><td>Morphine, fentanyl, hydromorphone, methadone</td><td>Respiratory depression risk — especially when given with other CNS depressants. Dose calculation errors are common (mcg vs mg confusion).</td></tr>
                        <tr><td><strong>Insulin</strong></td><td>All insulin formulations (rapid-acting, short-acting, intermediate, long-acting)</td><td>Hypoglycemia from overdose can cause brain damage or death. U-500 confusion with U-100 is a known error. Always verify insulin concentration and dose with a second person.</td></tr>
                        <tr><td><strong>Anticoagulants</strong></td><td>Heparin, enoxaparin (Lovenox), warfarin, apixaban (Eliquis), rivaroxaban (Xarelto)</td><td>Haemorrhage risk. Heparin is measured in units — verify concentration carefully. Decimal errors with weight-based dosing are common.</td></tr>
                        <tr><td><strong>Vasopressors</strong></td><td>Epinephrine, norepinephrine, vasopressin, dopamine</td><td>Potent cardiovascular effects — wrong dose can cause hypertensive crisis, arrhythmia, or cardiac arrest. Epinephrine is the most common high-alert drug involved in EMS errors.</td></tr>
                    </tbody>
                </table>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point — LASA Drugs:</strong> <strong>Look-alike, sound-alike drug names are a leading cause of medication errors.</strong> Examples you MUST know: <em>epinephrine vs ephedrine</em>, <em>dobutamine vs dopamine</em>, <em>hydralazine vs hydroxyzine</em>, <em>NTG vs GTN</em>. Never rely on memory or packaging colour alone — <strong>read the label three times and read it aloud.</strong> When in doubt, ask a partner to verify.
                </div>

                <h4>Common EMT Medication Errors — Case Examples</h4>

                <h5>Right Patient Errors</h5>
                <p><strong>Case:</strong> An EMT is called to a residence for a '54-year-old male with chest pain.' On arrival, two men of similar age are in the living room. The EMT asks 'Are you the patient?' One nods yes. The EMT administers aspirin and nitroglycerin. Only later does he discover he treated the wrong person — the actual patient was the other man, who had a different history and had not given consent.</p>
                <p><strong>Prevention:</strong> Always verify the patient's identity using <strong>two identifiers</strong> — ask for name AND date of birth, or check a wristband. Do NOT rely on a nod or a pointing finger. 'Mr. Jones, can you confirm your name and date of birth for me?' In multi-patient scenarios (MCI, nursing home), this is especially critical.</p>

                <h5>Right Drug Errors</h5>
                <p><strong>Case:</strong> An EMT reaches for 'epinephrine' for a patient in anaphylaxis but grabs the look-alike vial of ephedrine instead. The patient does not improve. The error is caught when the EMT goes to document and notices the wrong vial.</p>
                <p><strong>Prevention:</strong> <strong>Read the label THREE times:</strong> when removing from storage, when drawing up/preparing, and before administration. Read it <strong>aloud</strong>. Use tall-man lettering on medication labels. Organize your drug kit so look-alike drugs are not stored next to each other.</p>

                <h5>Right Dose Errors — The Decimal Danger</h5>
                <p><strong>Case:</strong> An order reads 'morphine 2 mg IV.' The EMT reads the syringe — 10 mg/mL — and draws up 2 mL, thinking '2 mL = 2 mg.' But 2 mL × 10 mg/mL = <strong>20 mg</strong> — a tenfold overdose. The patient develops respiratory depression requiring naloxone and bag-valve-mask ventilation.</p>
                <p><strong>Prevention:</strong> ALWAYS calculate the dose BEFORE drawing up the medication. Use the formula: <strong>Dose = (Ordered Dose / Concentration)</strong>. For morphine 2 mg from a 10 mg/mL vial: 2 mg ÷ 10 mg/mL = 0.2 mL (NOT 2 mL). <strong>Never use 'one syringe = one dose' logic</strong> — always verify the actual volume needed. Be especially vigilant with paediatric doses (weight-based) and decimal placement (0.1 mg vs 1.0 mg).</p>

                <h5>Right Route Errors</h5>
                <p><strong>Case:</strong> An EMT is asked to give 'D50 25 g IV' for severe hypoglycemia. He is distracted, grabs the D50 syringe, and administers it into the patient's deltoid muscle (IM). The result: severe tissue necrosis at the injection site requiring surgical debridement.</p>
                <p><strong>Prevention:</strong> Confirm the route BEFORE administration. D50 is hypertonic — IV ONLY. Never give hypertonic solutions IM or SC. Other route-specific dangers: epinephrine 1:1,000 IV (can cause hypertensive crisis — used SC/IM), KCl IV push (cardiac arrest — must be diluted and infused), PO meds via IV (particulate matter can cause emboli). If you are unsure about the route, STOP and verify.</p>

                <h5>Right Time Errors</h5>
                <p><strong>Case:</strong> A patient with chest pain receives nitroglycerin 0.4 mg SL. After 5 minutes, pain is unchanged. The EMT administers a second dose. Then a third dose at 10 minutes. At 12 minutes, pain is still 5/10 and the EMT considers giving a FOURTH dose — exceeding protocol (max 3 doses).</p>
                <p><strong>Prevention:</strong> Know the maximum dose and interval for every drug. Set timers/alarms. Document each dose immediately after administration (including time and response). Never exceed protocol maximums without medical control authorization.</p>

                <h4>Error Prevention Strategies — The Three-Check System</h4>
                <p>The <strong>three-check system</strong> is the cornerstone of medication safety. It requires the EMT to check the medication label at three distinct points:</p>
                <ol>
                    <li><strong>Check 1 — When removing the medication from storage:</strong> Verify the drug name, concentration, expiry date, and appearance. Is this the right drug for the patient's condition?</li>
                    <li><strong>Check 2 — When preparing the medication:</strong> Check the label again. Calculate the dose. Draw up the correct volume. Verify the dose with the label.</li>
                    <li><strong>Check 3 — Before administering to the patient:</strong> The final check. Re-read the label. Confirm the patient's identity (two identifiers). Confirm the route. Then administer.</li>
                </ol>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>Clinical Pearl — Read It Aloud:</strong> Reading the medication label <strong>aloud</strong> during the three-check process engages an additional sense (hearing) and has been shown to catch more errors than silent reading alone. When you read 'Epinephrine' aloud, your brain processes the information differently than when you read it silently. Make this a habit — it takes 2 seconds and can save a life.
                </div>

                <h4>Second Person Verification for High-Alert Drugs</h4>
                <p>For <strong>high-alert medications</strong> (opioids, insulin, vasopressors, concentrated electrolytes), a <strong>second person verification</strong> is strongly recommended. This means:</p>
                <ul>
                    <li>Another EMT or paramedic independently reads the medication label, calculates the dose, and confirms it is correct for the patient</li>
                    <li>The second person does NOT simply watch — they independently verify: 'I confirm this is epinephrine 0.3 mg IM for anaphylaxis. The dose is appropriate for this patient.'</li>
                    <li>If a second person is not available (single-provider unit), call medical control for a verbal verification</li>
                    <li>NEVER be rushed into skipping the verification — 'We need the drug NOW!' is exactly when errors happen. Take the extra 15 seconds to verify.</li>
                </ul>

                <h4>Drug Interactions — What EMTs Need to Know</h4>
                <p><strong>Polypharmacy</strong> (use of multiple medications) is especially common in elderly patients and significantly increases the risk of drug interactions. Key interactions relevant to EMS:</p>
                <table>
                    <thead>
                        <tr><th>Drug Combination</th><th>Interaction</th><th>Clinical Effect</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Nitroglycerin + PDE-5 inhibitors</td><td>Potentiation of NO-mediated vasodilation</td><td><strong>Severe, refractory hypotension</strong> — can be fatal. Always ask about ED drug use.</td></tr>
                        <tr><td>Opioids + Benzodiazepines</td><td>Synergistic respiratory depression</td><td><strong>Life-threatening respiratory depression</strong> even at therapeutic doses. Use lower doses of each. Monitor RR and SpO₂ closely.</td></tr>
                        <tr><td>Epinephrine + Beta-Blockers</td><td>Beta-1 receptors are blocked; unopposed alpha-1 effect</td><td>Epinephrine may cause <strong>severe hypertension</strong> instead of the usual beta-mediated HR increase. Give epinephrine but monitor BP carefully.</td></tr>
                        <tr><td>MAOIs + Sympathomimetics (epinephrine, dopamine)</td><td>MAOIs prevent breakdown of catecholamines</td><td><strong>Hypertensive crisis</strong> possible. Use reduced doses of sympathomimetics. Be aware patients on MAOIs may have exaggerated response.</td></tr>
                        <tr><td>Warfarin + NSAIDs (aspirin, ibuprofen, ketorolac)</td><td>NSAIDs impair platelet function + gastritis</td><td><strong>Increased bleeding risk.</strong> Avoid NSAIDs in patients on warfarin if possible. Aspirin for ACS is still indicated (benefit outweighs risk).</td></tr>
                        <tr><td>CYP450 interactions (many drugs)</td><td>Drugs metabolised by CYP3A4, CYP2D6, etc. can be induced or inhibited by other drugs</td><td>Common interactions: azole antifungals, macrolide antibiotics, anticonvulsants, St. John's Wort can increase/decrease levels of opioids, benzodiazepines, and other drugs.</td></tr>
                    </tbody>
                </table>

                <h4>Error Reporting — If an Error Occurs</h4>
                <p>Despite all precautions, errors can still happen. When a medication error is discovered:</p>
                <ol>
                    <li><strong>STOP</strong> — Stop any further medication administration. Stabilise the patient (ABCs). Call for help if needed.</li>
                    <li><strong>ASSESS THE PATIENT</strong> — Assess vital signs, level of consciousness, and any adverse effects. Provide supportive care (O₂, monitor, IV access).</li>
                    <li><strong>NOTIFY MEDICAL CONTROL</strong> — Contact medical control immediately. Be honest: 'I made a medication error. I gave [drug] [dose] [route] instead of the intended drug. The patient's current status is...' Do NOT try to cover up or minimise the error — concealment is worse than the error itself and can harm the patient if the receiving team does not know what was given.</li>
                    <li><strong>DOCUMENT</strong> — Document exactly what happened in the patient care report: what drug was given, what was intended, the dose, route, time, patient response, who was notified, and any orders received. Do NOT alter records.</li>
                    <li><strong>COMPLETE AN INCIDENT REPORT</strong> — File an internal incident report (also called a 'critical incident report' or 'adverse event report'). This is a confidential, non-punitive document used for system improvement — it helps identify root causes and prevent future errors.</li>
                    <li><strong>DEBRIEF</strong> — Mental health support may be needed. Medication errors are emotionally devastating for clinicians. Critical incident stress debriefing (CISD) can help.</li>
                </ol>

                <div class="highlight-box" style="background:#f8d7da; border-left-color:#dc3545;">
                    <strong>Critical — Transparency, Not Punishment:</strong> The goal of error reporting is <strong>learning and system improvement</strong>, not individual blame. A 'just culture' model recognises that most errors result from system failures (look-alike packaging, fatigue, poor lighting, inadequate training) rather than individual negligence. Reporting is ENCOURAGED — you will NOT be punished for honest errors. Concealing an error, however, is a separate misconduct issue that CAN result in discipline. <strong>Be honest. Report errors. Learn from them. Improve the system.</strong>
                </div>

                <h4>Medication Storage and Security</h4>
                <p>Proper medication storage prevents errors and ensures drug potency:</p>
                <ul>
                    <li><strong>Temperature control:</strong> Most medications should be stored at 20-25°C (68-77°F). Some require refrigeration (insulin, certain antibiotics). NEVER leave medications in direct sunlight or in a hot vehicle — heat degrades many drugs (epinephrine, nitroglycerin, insulin). Temperature-sensitive drugs should be in an insulated drug bag.</li>
                    <li><strong>Expiration monitoring:</strong> Check expiration dates at the beginning of every shift. Expired drugs may be less potent (category change: some require re-verification with a new batch). Rotate stock — first-expired, first-out (FEFO).</li>
                    <li><strong>Secure storage:</strong> Controlled substances (opioids, benzodiazepines) must be stored in a locked compartment or safe with controlled access. Document all wastage per protocol (witnessed waste for opioids).</li>
                    <li><strong>Proper labelling and segregation:</strong> Do NOT store look-alike drugs next to each other. Use colour-coding or tall-man lettering. Keep oral and injectable medications separate. Keep patient-specific medications separated from stock medications.</li>
                    <li><strong>Single-use vials:</strong> Most EMS medications are single-use vials — once opened, use immediately and discard any remaining drug. Do NOT reuse vials or combine partial doses from multiple vials.</li>
                </ul>

                <h4>Workplace Culture — The Just Culture Model</h4>
                <p>The <strong>Just Culture</strong> model balances accountability with learning. It distinguishes three types of errors:</p>
                <table>
                    <thead>
                        <tr><th>Type</th><th>Definition</th><th>Response</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Human error</strong></td><td>Unintentional slip, lapse, or mistake (e.g., grabbing wrong vial despite checking — the drug was in the wrong place in the kit)</td><td><strong>Comfort, support, and system redesign.</strong> Ask: 'Why did the system allow this error? How can we prevent it?'</td></tr>
                        <tr><td><strong>At-risk behaviour</strong></td><td>Behavioural choice that increases risk where risk is not recognised or is mistakenly believed to be justified (e.g., skipping the three-check because 'we're in a hurry')</td><td><strong>Coach, educate, and remove incentives for risky behaviour.</strong> Ask: 'What led you to believe this was acceptable?'</td></tr>
                        <tr><td><strong>Reckless behaviour</strong></td><td>Conscious disregard for a substantial and unjustifiable risk (e.g., intentionally giving the wrong drug, falsifying records, working under the influence)</td><td><strong>Disciplinary action.</strong> This is the only category where individual blame is appropriate.</td></tr>
                    </tbody>
                </table>

                <p>The Just Culture model is essential because: (1) <strong>Punishing human error discourages reporting</strong> — if you fear punishment, you will hide your error, and the system will never improve. (2) <strong>Most errors are system problems</strong> — look-alike packaging, confusing labels, inadequate lighting, excessive workload, fatigue. Fix the system, prevent the error. (3) <strong>Reporting is essential for learning</strong> — every reported error is an opportunity to prevent the same error from happening to another patient.</p>

                <div class="highlight-box" style="background:#fff3cd; border-left-color:#856404;">
                    <strong>NREMT Key Point — Final Word on Safety:</strong> <strong>If you are unsure about any medication — do NOT give it.</strong> Ask a partner. Call medical control. Consult a drug reference. It is perfectly acceptable to say <strong>'I don't know — let me check.'</strong> In EMS, there is no penalty for pausing to verify — there IS a penalty for giving the wrong drug. Safety is everyone's responsibility. The three-check system takes 30 seconds and can save a life. Use it every time, for every drug, for every patient — no exceptions.
                </div>
            </div>`,
            flashcards: [
                { question: "What are the 'Seven Rights' of medication administration?", answer: "Right Patient, Right Drug, Right Dose, Right Route, Right Time, Right Documentation, Right to Refuse.", category: "Medication Safety" },
                { question: "What are LASA drugs and why are they dangerous?", answer: "Look-Alike Sound-Alike drugs (e.g., epinephrine vs ephedrine, dobutamine vs dopamine). Similar names/packaging lead to wrong drug selection. Read labels carefully — use tall-man lettering.", category: "High-Alert Medications" },
                { question: "What is the three-check system for medication administration?", answer: "Check 1: When removing from storage. Check 2: When preparing. Check 3: Before administration. Read the label aloud each time.", category: "Error Prevention" },
                { question: "What should an EMT do if a medication error occurs?", answer: "STOP, assess patient, notify medical control (be honest), document accurately, complete incident report, debrief. Transparency and learning — not punishment.", category: "Error Reporting" },
                { question: "What is the decimal danger in medication dosing?", answer: "Confusing 0.1 mg vs 1.0 mg = TENFOLD difference. Always calculate dose using formula: Dose / Concentration = Volume. Verify calculations with a partner.", category: "Right Dose" },
                { question: "What is the Just Culture model for error management?", answer: "Distinguishes: Human Error (support + system fix), At-Risk Behaviour (coach), Reckless Behaviour (discipline). Encourages reporting to improve safety.", category: "Workplace Culture" },
                { question: "What are examples of high-alert medications in EMS?", answer: "LASA drugs, concentrated electrolytes (KCl), opioids, insulin, anticoagulants (heparin/warfarin), vasopressors (epinephrine). Special safeguards required.", category: "High-Alert Medications" },
                { question: "What is the most important thing to do if unsure about a medication?", answer: "Do NOT give it. Ask a partner, call medical control, or consult a drug reference. 'I don't know — let me check' is always acceptable.", category: "Medication Safety" }
            ],
            quiz: [
                {
                    q: "An EMT has just administered epinephrine 0.3 mg IM to a patient in anaphylaxis. The patient's condition improves. On documenting the medication, the EMT realises she accidentally grabbed a vial of ephedrine instead of epinephrine — the vials look nearly identical. What should she do NEXT?",
                    options: [
                        "Nothing — the patient improved, so no harm done. Documenting the error would only cause problems",
                        "Immediately notify medical control, inform the receiving hospital, document the error accurately in the PCR, and complete an incident report. The patient improved but needs monitoring as ephedrine has different effects (longer duration, more CNS stimulation)",
                        "Wait until the end of the shift to tell a supervisor",
                        "Discard the ephedrine vial so nobody knows — no evidence, no problem"
                    ],
                    correct: 1,
                    explanation: "Even though the patient improved, a medication error occurred (wrong drug). The EMT must: (1) Notify medical control immediately — be honest about the error. (2) Inform the receiving hospital so they can monitor for the different effects of ephedrine (longer duration, more CNS stimulation vs epinephrine). (3) Document exactly what happened in the PCR — do NOT alter records. (4) Complete an incident report for system improvement. Concealing an error is misconduct and deprives the system of a learning opportunity. Transparency and patient safety come first."
                },
                {
                    q: "An EMT is preparing to give morphine 4 mg IV for a patient with severe pain. The morphine vial is 10 mg/mL. What volume should the EMT draw up?",
                    options: [
                        "0.4 mL — Dose ÷ Concentration = Volume. 4 mg ÷ 10 mg/mL = 0.4 mL",
                        "4 mL — the dose ordered is 4 mg, so draw up 4 mL",
                        "0.04 mL — morphine is potent, so a small volume is correct",
                        "2 mL — half the concentration is half the volume"
                    ],
                    correct: 0,
                    explanation: "The correct calculation: Ordered Dose / Concentration = Volume. 4 mg / (10 mg/mL) = 0.4 mL. The common error is confusing the volume with the dose — '4 mg ordered = draw up 4 mL' would result in a 40 mg dose (10× the intended amount). Always calculate: Dose ÷ Concentration = Volume. Verify with a partner. Decimal placement errors are among the most common and dangerous medication errors in EMS."
                },
                {
                    q: "[HARD] An EMT is called to the scene of a nightclub where a 22-year-old female is found unresponsive with suspected overdose. The scene is dark, loud, and crowded. The EMT's partner is holding a flashlight while the EMT prepares naloxone. The drug kit has both naloxone (2 mg prefilled syringe) and ondansetron (4 mg vial) — the packaging is similar in size and colour. The EMT picks up a syringe and administers it IN. After 2 minutes, the patient is still unresponsive with RR 6. What most likely happened and what should the EMT do now?",
                    options: [
                        "The EMT likely grabbed ondansetron instead of naloxone due to similar packaging in a dark, chaotic environment. Immediately re-check the drug kit, confirm the drug administered, and give naloxone now. Report the error to medical control. This illustrates why look-alike packaging should be separated, and why medication preparation should never be done in poor lighting",
                        "Give another dose of naloxone — sometimes two doses are needed",
                        "The patient's overdose is not opioid-related — consider other causes",
                        "The naloxone was expired — check the expiration date"
                    ],
                    correct: 0,
                    explanation: "This scenario illustrates several contributing factors to medication errors: poor lighting (dark nightclub), chaotic scene (loud, crowded), look-alike packaging (naloxone and ondansetron syringes similar in size/colour), and rushing. Ondansetron will NOT reverse an opioid overdose. The EMT should: (1) Immediately re-check the drug kit to confirm what was given. (2) Administer the correct drug (naloxone). (3) Report the error to medical control. Prevention: (a) Never prepare medications in poor lighting — move to a well-lit area or use a headlamp. (b) Separate look-alike drugs in the drug kit. (c) Read the label aloud three times. (d) Use a second person to verify in high-stress situations."
                },
                {
                    q: "A paramedic tells an EMT, 'Just grab me a 10 mL syringe of epinephrine — the patient is coding, hurry!' The EMT reaches into the drug box, quickly grabs a prefilled syringe labelled 'Epinephrine 1:10,000,' and hands it to the paramedic. The paramedic administers it. Later, they realise the syringe was actually 'Epinephrine 1:1,000' — a tenfold concentration difference. Which of the following safety steps would have MOST likely prevented this error?",
                    options: [
                        "Waiting for the paramedic to retrieve their own drugs",
                        "Reading the label aloud when picking up the syringe — 'Epinephrine 1 colon 10,000' — before handing it to the paramedic. This would have caught the error before administration",
                        "The EMT should have refused to hand over any medication without a written order",
                        "Having a 'no verbal orders' policy in the drug box"
                    ],
                    correct: 1,
                    explanation: "Reading the label ALOUD would have caught the concentration error. The prefilled syringes for epinephrine 1:1,000 and 1:10,000 look similar — the difference is subtle on the label. Reading aloud ('Epinephrine ONE colon TEN THOUSAND' vs 'Epinephrine ONE colon ONE THOUSAND') engages auditory processing and makes the concentration difference more apparent. The 'hurry-up' factor is high in cardiac arrest — this is exactly when errors happen. The three-check system (including reading aloud) is most critical when you feel rushed. If an EMT is asked to retrieve a drug, they are still responsible for verifying the drug before handing it over."
                }
            ],
            critical: [
                {
                    id: "crit_9_7_1",
                    scenario: "You are a newly certified EMT working your first week on a busy 911 ambulance. Your paramedic partner asks you to 'grab a tube of oral glucose' for a diabetic patient with mild hypoglycemia. The drug box is disorganised — medications are not separated, and several tubes and vials are mixed together. You find a tube that looks like oral glucose (same size, similar label) and hand it to your partner, who administers it to the patient. After 10 minutes, the patient's blood glucose has not improved. Your partner looks at the tube and says, 'This isn't oral glucose — it's KY jelly.' Both you and your partner missed the label. The patient is still awake but confused. BG is still 62 mg/dL.",
                    question: "What should happen now, and what system failures contributed to this error?",
                    options: [
                        {t: "Retrieve the correct oral glucose and administer it now. The patient is stable and will be fine. Do NOT report the error — it was a minor mistake and no harm was done. Just be more careful next time", f: "Incorrect — Even though no direct harm occurred (KY jelly is not toxic), this is a medication error that should be reported. A 'near miss' that could have been much worse (imagine if it was a concentrated electrolyte or a paralytic instead of KY jelly). System failures: (1) Disorganised drug box — non-medical items mixed with medications. (2) No three-check system used. (3) Labels not read aloud. (4) The drug box should not contain non-medication items that look like medication packaging."},
                        {t: "Immediately administer the correct oral glucose (15 g) to the patient. Then: (1) Notify medical control of the error — even though no harm occurred. (2) Document accurately in the PCR. (3) Complete an incident report. System failures to address: the drug box should be organised with medications separated and clearly labelled; non-medication items should NOT be stored in the drug box; both clinicians failed to read the label aloud; the three-check system was not used. This is a 'near miss' — learn from it to prevent a future error with a dangerous drug", f: "Correct — This scenario illustrates multiple system failures: (1) The drug box was disorganised. (2) A non-medication item (KY jelly) was stored in the drug box — this should NEVER happen. (3) Neither clinician read the label aloud. (4) The three-check system was skipped because 'it's just oral glucose.' The correct response: fix the immediate problem (give the right drug), report the error (even 'near misses' are important for safety), identify system issues, and implement fixes. A 'near miss' is a gift — it shows you a weakness in your system without a patient being harmed."}
                    ],
                    correct: 1,
                    explanation: "This 'near miss' (wrong substance but no patient harm) is a critical learning opportunity. System failures: (1) NO non-medication items should be stored in the drug box — this is a basic safety rule. KY jelly should be in the supply bag, not the drug box. (2) A disorganised drug box increases error risk — medications should be organised and segregated. (3) The three-check system was not followed — neither clinician read the label aloud. (4) Complacency ('it's just oral glucose') led to shortcuts. Appropriate actions: (1) Give the correct medication. (2) Report the error — near misses are essential for system improvement. (3) Restock/organise the drug box. (4) Debrief with your partner. (5) File an incident report so the organisation can address the systemic issues.",
                    kpi: "Recognises system failures contributing to a near-miss medication error and reports appropriately"
                },
                {
                    id: "crit_9_7_2",
                    scenario: "You respond to a 68-year-old female with chest pain and shortness of breath. She has a history of CAD, hypertension, diabetes, and COPD. Her medications include metoprolol, lisinopril, metformin, and tadalafil (Cialis) 'as needed.' She last took tadalafil 2 days ago. Vitals: HR 104, BP 146/92, RR 22, SpO₂ 93% on room air. She has rales in the lung bases. She rates her chest pain 6/10. Your partner tells you, 'She's having an MI — give her aspirin, nitro, and oxygen.' You begin preparing the medications.",
                    question: "Which medications are indicated and which are contraindicated? What safety checks should you perform?",
                    options: [
                        {t: "Give aspirin 324 mg PO chewed, nitroglycerin 0.4 mg SL, and oxygen 4 L/min NC. All three are standard for ACS", f: "Incorrect — Nitroglycerin is potentially contraindicated. She took tadalafil (Cialis) 2 days ago. Tadalafil has a longer half-life than sildenafil — the PDE-5 inhibition can last up to 48-96 hours (depending on dose and renal function). The standard 24-hour rule for sildenafil does NOT apply to tadalafil — many protocols extend the window to 48-96 hours for tadalafil. Giving NTG could cause severe refractory hypotension."},
                        {t: "Aspirin 324 mg PO chewed is indicated (reduces mortality in ACS). Oxygen 4 L/min NC is indicated (SpO₂ 93% < 94%). Nitroglycerin is LIKELY CONTRAINDICATED due to tadalafil use 2 days ago. Tadalafil has a longer half-life than sildenafil and can interact with nitrates for up to 48-96 hours. The EMT should: (1) Confirm the exact timing of the tadalafil dose, (2) Consult medical control before giving NTG, (3) Ask about any other nitroglycerin or NTG spray use before EMS arrival, (4) If NTG is given despite the interaction risk (rare, with medical control approval), monitor BP closely every 2 minutes", f: "Correct — This requires knowledge of both the standard ACS protocol AND the nuances of PDE-5 inhibitor interactions. Sildenafil (Viagra): 24-hour window. Tadalafil (Cialis): 48-96 hour window (longer half-life 17.5 hrs vs 4 hrs). The EMT must: (1) Identify the drug interaction risk by asking about ED medications. (2) Know the specific timing windows for different PDE-5 inhibitors. (3) Consult medical control before giving NTG if there is any concern. (4) Document the interaction risk and medical control decision. Aspirin and oxygen (for SpO₂ < 94%) are still indicated."}
                    ],
                    correct: 1,
                    explanation: "This scenario tests knowledge of drug interactions and the importance of medication reconciliation. Tadalafil (Cialis) has a much longer half-life (~17.5 hours) than sildenafil (Viagra, ~4 hours) — the interaction window is longer (48-96 hours depending on dose and renal function). The EMT must: (1) Ask about ALL medications, including PRN/occasional use drugs like ED medications. (2) Know that different PDE-5 inhibitors have different interaction windows. (3) Consult medical control if any concern exists. (4) Monitor BP closely if NTG is given after medical control approval. Aspirin and oxygen are still indicated. This highlights why the 'Right Drug' check includes checking for drug-drug interactions.",
                    kpi: "Identifies drug-drug interaction risk between NTG and tadalafil with extended half-life"
                },
                {
                    id: "crit_9_7_3",
                    scenario: "You are working a night shift (3 AM) and are dispatched to a call for 'difficulty breathing.' On the way, dispatch updates: 'Patient is a 6-year-old male, severe asthma exacerbation, not improving with home inhaler.' You arrive to find a boy who is in severe respiratory distress — accessory muscle use, tripod positioning, audible wheezing, SpO₂ 86% on room air. He is awake but can only speak 1-2 words between breaths. Your partner says, 'Get the albuterol neb ready — 2.5 mg.' The drug box has albuterol unit-dose vials of 2.5 mg/3 mL and 5 mg/3 mL. In the dim light of the ambulance, you grab a vial and are about to twist off the top when your partner says, 'Wait — let me see that vial.' She looks at it and says, 'That's the 5 mg vial — for this 6-year-old, we want the 2.5 mg. Good thing I checked.'",
                    question: "What does this scenario illustrate about medication safety and what should the team do to prevent similar errors in the future?",
                    options: [
                        {t: "The error was caught — no harm done. The team should continue with patient care and move on. The partner's vigilance prevented the error, which is great teamwork", f: "Incomplete — While it is true the error was caught and is a 'near miss' (great teamwork by the partner), this should still be discussed as a learning opportunity. The scenario highlights several contributing factors that can be improved: (1) Night shift fatigue increases error risk. (2) Dim lighting in the ambulance. (3) Drug box has multiple concentrations of the same drug — these should be clearly separated and labelled. (4) The team was rushing due to patient acuity. These factors should be addressed systemically — not just accepted as 'normal EMS conditions.'"},
                        {t: "This is a crucial 'near miss' that reveals several safety vulnerabilities. The team should: (1) Immediately treat the patient with the correct dose (2.5 mg albuterol neb). (2) After the call, debrief the incident — discuss fatigue, lighting, and the risk of having multiple concentrations of the same drug in the box. (3) Report a 'good catch' — many services have a system to report near misses so the organisation can address systemic issues. (4) Consider systemic changes: separate 2.5 mg and 5 mg albuterol vials with different labelling/coding, improve lighting in the medication preparation area, and encourage the routine use of the 'second person verification' for all paediatric doses", f: "Correct — This scenario illustrates multiple classic factors contributing to medication errors: (1) Fatigue (3 AM shift). (2) Poor lighting (ambulance dim light). (3) Multiple concentrations of the same drug. (4) Time pressure (sick child). (5) Paediatric dosing (weight-based calculations add complexity). The 'near miss' was caught by a second-person verification — this is exactly why double-checking is so important, especially for paediatric patients and high-alert drugs. After the call, the team should debrief and report the 'good catch' so systemic fixes can be implemented."}
                    ],
                    correct: 1,
                    explanation: "This 'good catch' (near miss caught before administration) is a textbook example of why second-person verification is critical. Contributing factors: (1) Fatigue — 3 AM shift, the EMT's cognitive function is impaired. (2) Poor lighting — dimly lit ambulance. (3) Multiple concentrations of the same drug in the box. (4) High-acuity patient causing time pressure. (5) Paediatric case adds complexity (weight-based dosing). The partner's verification prevented a potential overdose of a 6-year-old (5 mg vs 2.5 mg = double dose). After the call: debrief the team, report the 'good catch' to the quality/safety department, and consider system changes (separating concentrations, improving lighting, making second-person verification mandatory for paediatric doses). A 'good catch' is a success of the safety system — it shows safety barriers working as intended.",
                    kpi: "Recognises fatigue, lighting, and multi-concentration drugs as error contributors; promotes near-miss reporting"
                }
            ]
        }
    ]
};
