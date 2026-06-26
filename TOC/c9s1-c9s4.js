/* ========== Chapter 9 - Emergency Pharmacology (Sections 1-4) ========== */
/* Generated for SmartCare EMT study app - NREMT curriculum aligned */

window.CPG_SECTIONS = [

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
}
];

console.log("c9s1-c9s4 generated");
