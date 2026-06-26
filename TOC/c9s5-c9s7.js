/* ========== Chapter 9 – Emergency Pharmacology (Sections 5-7) ========== */
/* Generated for SmartCare EMT study app — NREMT curriculum aligned */

window.CPG_SECTIONS = [

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
];

console.log("✅ c9s5-c9s7 generated");
