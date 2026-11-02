/* ========== Medication Formulary (SmartCare) ========== */
window.CPG_DATA = {
    id: "formulary",
    title: "Medication Formulary",
    shortTitle: "Drug Formulary",
    sections: [
        {
            id: "formulary-overview",
            shortTitle: "Full Drug Formulary",
            summary: `
                <div class="fx-hero">
                    <div class="fx-top">
                        <div class="fx-text">
                            <span class="fx-eyebrow"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book-open"/></svg> Chapter 11</span>
                            <h2 class="fx-title">Medication <span>Formulary</span></h2>
                            <p class="fx-lead">Every prehospital drug with its full monograph, plus weight-based dosing for pediatric patients.</p>
                        </div>
                        <div class="fx-art"><img src="../images/formulary-capsule.webp" alt="" width="420" height="382" decoding="async"></div>
                    </div>
                    <div class="fx-stats">
                        <div class="fx-stat"><b>77</b><small>Medications</small></div>
                        <div class="fx-stat"><b>6</b><small>Categories</small></div>
                        <div class="fx-stat"><b>31</b><small>Calculators</small></div>
                    </div>
                    <div class="fx-actions">
                        <a class="fx-btn fx-btn-primary" href="../pages/drug-index.html"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book"/></svg> Browse all</a>
                        <a class="fx-btn fx-btn-ghost" href="../pages/med-index.html"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#scale"/></svg> Calculator</a>
                    </div>
                    <p class="fx-hint"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-up"/></svg> Or open any medication from the tabs above</p>
                </div>
                <div class="sum-card">
                    <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg> Cardiac / Resus</h3>
                    <ul>
                        <li><strong>Adenosine:</strong> SVT — 0.1 mg/kg IV rapid push (max 6 mg); 2nd dose 0.2 mg/kg (max 12 mg). Follow with NS flush.</li>
                        <li><strong>Amiodarone:</strong> Arrest (VT/VF) 5 mg/kg IV/IO; Wide-complex tachycardia 5 mg/kg over 20 min.</li>
                        <li><strong>Atropine:</strong> Bradycardia 0.02 mg/kg IV/IO q3-5 min (min 0.1 mg, max 0.5 mg peds / 3 mg adult); Organophosphate 2–4 mg IV until secretions dry.</li>
                        <li><strong>Epinephrine:</strong> Arrest 0.01 mg/kg (1:10,000) IV/IO q3-5 min; Anaphylaxis 0.01 mg/kg (1:1,000) IM (max 0.5 mg).</li>
                        <li><strong>Labetalol:</strong> Pre-eclampsia/eclampsia hypertension — 20 mg IV over 2 min, repeat q10 min (max 80 mg).</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#10b981;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg> Airway / Respiratory</h3>
                    <ul>
                        <li><strong>Salbutamol:</strong> Bronchospasm — Nebulized: Adult 5 mg; Peds &lt;5y 2.5 mg, ≥5y 5 mg.</li>
                        <li><strong>Combivent:</strong> Asthma/COPD — 2.5 ml nebulized (Salbutamol 2.5 mg + Ipratropium 0.5 mg).</li>
                        <li><strong>Racemic Epi:</strong> Croup — &gt;4y: 0.5 ml; &lt;4y: 0.05 ml/kg nebulized in 3 ml NS.</li>
                        <li><strong>Hydrocortisone:</strong> Anaphylaxis/Asthma — 2 mg/kg IV/IM/IO.</li>
                        <li><strong>Magnesium Sulphate:</strong> Severe asthma/eclampsia — Adult 2 g IV over 20 min; Peds 40 mg/kg.</li>
                        <li><strong>Methoxyflurane (Penthrox inhaler):</strong> Pain — 3 ml inhaled, self-administered (max 6 ml/24 h adult).</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#8b5cf6;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg> Neuro / Sedation</h3>
                    <ul>
                        <li><strong>Diazepam:</strong> Seizures — Adult 5 mg IV; Peds 0.1 mg/kg IV/IO (max 5 mg) or 0.5 mg/kg PR (max 20 mg).</li>
                        <li><strong>Haloperidol:</strong> Acute psychosis — 5 mg IM only. Not IV. Not pediatric.</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#f97316;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Pain Management</h3>
                    <ul>
                        <li><strong>Morphine:</strong> Severe pain — IV 2.5 mg q5 min (max 10 mg); Peds 0.1 mg/kg IV/IM/IO.</li>
                        <li><strong>Paracetamol:</strong> Pain/Fever — Adult 1 g IV/PO (max 4 g/24h); Peds 10 mg/kg IV slow.</li>
                        <li><strong>Diclofenac:</strong> Moderate-severe pain — 75 mg IM or IV in 100 ml NS over 10 min.</li>
                        <li><strong>GTN:</strong> Cardiac chest pain — 0.4 mg SL spray q3-5 min (max 3 sprays). No hypotension.</li>
                        <li><strong>Nefopam:</strong> Moderate pain — 20 mg IV in 100 ml NS over 5 min. Avoid in epilepsy/renal impairment.</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#06b6d4;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg> Metabolic / Fluids</h3>
                    <ul>
                        <li><strong>Dextrose 10%:</strong> Hypoglycemia (&lt;70 mg/dl) — 10 ml/kg IV/IO (max 125 ml peds); Adult 125–250 ml.</li>
                        <li><strong>Glucose 40% Oral Paste:</strong> Hypoglycemia (conscious) — Adult 1 tube (15 g); Peds ½ tube. Swallow only.</li>
                        <li><strong>Glucagon:</strong> Hypoglycemia/BB overdose — &gt;25 kg: 1 mg IM/SC; &lt;25 kg: 0.5 mg IM/SC.</li>
                        <li><strong>Normal Saline:</strong> Volume replacement — Peds 10 ml/kg bolus (max 500 ml).</li>
                        <li><strong>Lactated Ringers:</strong> Volume replacement — Not for age &lt;1 month, DKA, or liver failure.</li>
                    </ul>
                </div>
                <div class="sum-card">
                    <h3 style="color:#94a3b8;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg> Other Medications</h3>
                    <ul>
                        <li><strong>Aspirin:</strong> ACS — 324 mg (4×81 mg) chewed. Not if already taken in last 60 min.</li>
                        <li><strong>Naloxone:</strong> Opioid overdose — IV/IM 0.4 mg q3 min (max 2 mg); IN 4 mg q3 min. Titrate to respiratory effort.</li>
                        <li><strong>TXA:</strong> Trauma/PPH bleeding — 1 g IV over 10 min (within 3 h of onset); Peds 15 mg/kg.</li>
                        <li><strong>Furosemide:</strong> Pulmonary edema — 40 mg IV slow over 1–2 min. Adult only.</li>
                        <li><strong>Diphenhydramine:</strong> Allergic reaction — 1 mg/kg IM/IV (max 50 mg).</li>
                        <li><strong>Metoclopramide:</strong> Nausea/vomiting — 10 mg IV/IM adult slow over 3 min.</li>
                        <li><strong>Hyoscine:</strong> Abdominal cramping — 20 mg IV/IM/SC. Not pediatric.</li>
                    </ul>
                </div>
                <div class="sum-card red-flag">
                    <h3><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg>️ High-Alert Drug Reminders</h3>
                    <ul>
                        <li><strong>Adenosine:</strong> Must be given as a RAPID IV push + 10–20 ml NS flush immediately after.</li>
                        <li><strong>Amiodarone:</strong> Always dilute in D5W (NOT NS). Incompatible with NS.</li>
                        <li><strong>GTN:</strong> Contraindicated if SBP &lt;100 mmHg or patient took PDE-5 inhibitor in 24–48 h.</li>
                        <li><strong>Haloperidol:</strong> IM only in prehospital setting — never IV push.</li>
                        <li><strong>Morphine:</strong> Monitor RR closely — have Naloxone ready.</li>
                        <li><strong>TXA:</strong> Must be given within 3 hours of injury/PPH onset — ineffective after.</li>
                        <li><strong>Glucose 40% paste:</strong> Swallow only — NOT buccally absorbed.</li>
                    </ul>
                </div>
            `,

            flashcards: [
                /* ── CARDIAC / RESUS ── */
                { category: "Cardiac", question: "Adenosine: SVT 1st dose (adult)?", answer: "6 mg IV rapid push\n(0.1 mg/kg pediatric)\nFollow immediately with 10–20 ml NS flush" },
                { category: "Cardiac", question: "Adenosine: SVT 2nd dose (adult)?", answer: "12 mg IV rapid push\n(0.2 mg/kg pediatric, max 12 mg)" },
                { category: "Cardiac", question: "Adenosine: Critical administration tip?", answer: "Must be given as RAPID PUSH — the faster the better.\nFlush immediately with 10–20 ml NS.\nConsider arm elevation." },
                { category: "Cardiac", question: "Amiodarone: Cardiac arrest dose?", answer: "5 mg/kg IV/IO\n(after 3rd shock in VF/VT)" },
                { category: "Cardiac", question: "Amiodarone: Stable wide-complex tachycardia dose?", answer: "5 mg/kg IV/IO over 20 minutes" },
                { category: "Cardiac", question: "Amiodarone: What is the correct diluent?", answer: "Dextrose 5% Water (D5W) ONLY\nNever Normal Saline — incompatible" },
                { category: "Cardiac", question: "Atropine: Bradycardia dose?", answer: "0.02 mg/kg IV/IO q3-5 min\nMin: 0.1 mg | Peds max: 0.5 mg | Adult max: 3 mg" },
                { category: "Cardiac", question: "Atropine: Organophosphate poisoning dose?", answer: "2–4 mg IV q5-10 min\nTitrate until secretions dry (not HR)" },
                { category: "Cardiac", question: "Epinephrine: Cardiac arrest dose?", answer: "0.01 mg/kg (1:10,000) IV/IO\nAdult: 1 mg IV/IO every 3–5 min" },
                { category: "Cardiac", question: "Epinephrine: Anaphylaxis dose?", answer: "0.01 mg/kg (1:1,000) IM (lateral thigh)\nMax: 0.3 mg pediatric / 0.5 mg adult" },
                { category: "Cardiac", question: "Epinephrine: Push-dose for bradycardia?", answer: "10–20 mcg IV bolus (1:100,000 dilution)\nRepeat q2-5 min as needed" },
                { category: "Cardiac", question: "Labetalol: Indication in obstetrics?", answer: "Pre-eclampsia with severe hypertension / Eclampsia\n(SBP ≥160 or DBP ≥110 mmHg)" },
                { category: "Cardiac", question: "Labetalol: Dose?", answer: "20 mg IV over 2 minutes\nRepeat 40–80 mg q10 min — max 80 mg total" },

                /* ── AIRWAY / RESPIRATORY ── */
                { category: "Airway", question: "Salbutamol: Dose for adult bronchospasm?", answer: "5 mg nebulized in max 5 ml NS\nRepeat q20 min x3 if needed" },
                { category: "Airway", question: "Salbutamol: Pediatric dose?", answer: "<5 years: 2.5 mg nebulized\n≥5 years: 5 mg nebulized" },
                { category: "Airway", question: "Combivent: Contents?", answer: "Salbutamol 2.5 mg + Ipratropium 0.5 mg\nNebulize 2.5 ml, dilute to max 5 ml NS" },
                { category: "Airway", question: "Racemic Epinephrine: Indication?", answer: "Croup (stridor, barking cough)\nPost-extubation stridor" },
                { category: "Airway", question: "Racemic Epinephrine: Dose?", answer: ">4 years: 0.5 ml nebulized in 3 ml NS\n<4 years: 0.05 ml/kg (max 0.5 ml) in 3 ml NS" },
                { category: "Airway", question: "Hydrocortisone: Dose for anaphylaxis/asthma?", answer: "2 mg/kg IV/IM/IO\nAlternative: <1y 25 mg, 1-5y 50 mg, >5y 100 mg" },
                { category: "Airway", question: "Magnesium Sulphate: Severe asthma dose?", answer: "Adult: 2 g IV/IO over 20 min\nPediatric: 40 mg/kg IV/IO over 20 min" },
                { category: "Airway", question: "Magnesium Sulphate: Eclampsia dose?", answer: "4 g IV over 5-10 min (loading)\nMonitor for loss of reflexes and respiratory depression" },
                { category: "Airway", question: "Methoxyflurane (Penthrox inhaler): Route and dose?", answer: "Inhaled, self-administered via green whistle inhaler\n3 ml per episode, max 6 ml/24 h (adult)\nPediatric: max 3 ml" },

                /* ── NEURO / SEDATION ── */
                { category: "Neuro", question: "Diazepam: Seizure dose (adult)?", answer: "5 mg IV slow (over 2 min)\nRepeat once if no effect after 5 min" },
                { category: "Neuro", question: "Diazepam: Seizure dose (pediatric)?", answer: "IV/IO: 0.1 mg/kg (max 5 mg)\nPR (rectal): 0.5 mg/kg (max 20 mg)" },
                { category: "Neuro", question: "Diazepam: What is the reversal agent?", answer: "Flumazenil (not prehospital)\nSupport airway — have BVM ready" },
                { category: "Neuro", question: "Haloperidol: Indication?", answer: "Acute psychosis / agitated patient (suspected mental health illness)" },
                { category: "Neuro", question: "Haloperidol: Dose and route?", answer: "5 mg IM only\nNEVER IV in prehospital setting\nNot for pediatric use" },

                /* ── PAIN ── */
                { category: "Pain", question: "Morphine: Adult dose for severe pain?", answer: "IV: 2.5 mg increments q5 min (max 10 mg)\nIM: 2–10 mg (max 20 mg)\nMonitor RR — Naloxone reversal ready" },
                { category: "Pain", question: "Morphine: Pediatric dose?", answer: "0.1 mg/kg IV/IM/IO\nMax single dose 5 mg" },
                { category: "Pain", question: "GTN: Indication?", answer: "Cardiac chest pain (ACS/suspected MI)\nAcute pulmonary edema" },
                { category: "Pain", question: "GTN: Dose and route?", answer: "0.4 mg SL spray q3-5 min\nMax 3 sprays (1.2 mg total)\nDo NOT shake bottle" },
                { category: "Pain", question: "GTN: Contraindications?", answer: "SBP <100 mmHg\nPDE-5 inhibitor use in last 24-48 h (Sildenafil/Viagra)\nRV infarction" },
                { category: "Pain", question: "Paracetamol: Adult dose?", answer: "1000 mg IV over 10-15 min or PO\nMax 4 g per 24 hours\nReduce dose in hepatic impairment" },
                { category: "Pain", question: "Paracetamol: Pediatric IV dose?", answer: "10 mg/kg IV slow over 10-15 min\nPR: <5y 125 mg, ≥5y 250 mg" },
                { category: "Pain", question: "Diclofenac: Dose and route?", answer: "75 mg IM (large muscle) OR IV diluted in 100 ml NS over 10 min\nDo not repeat dose prehospital" },
                { category: "Pain", question: "Nefopam: Dose and contraindications?", answer: "20 mg IV in 100 ml NS over 5 min\nContraindicated: Epilepsy, STEMI/NSTEMI, Renal impairment, <13 years" },

                /* ── METABOLIC / FLUIDS ── */
                { category: "Metabolic", question: "Dextrose 10%: Hypoglycemia threshold?", answer: "Blood glucose <70 mg/dl" },
                { category: "Metabolic", question: "Dextrose 10%: Adult dose?", answer: "125–250 ml IV/IO\nRecheck glucose after 5-10 min" },
                { category: "Metabolic", question: "Dextrose 10%: Pediatric dose?", answer: "10 ml/kg IV/IO (max 125 ml in children)\nNeonates: 2 ml/kg D10W" },
                { category: "Metabolic", question: "Glucose 40% Oral Paste: Indication?", answer: "Hypoglycemia in a CONSCIOUS patient who can swallow\nNOT for unconscious patients" },
                { category: "Metabolic", question: "Glucose 40% Oral Paste: Dose?", answer: "Adult: 1 tube (15 g)\nPediatric: ½ tube\nMust be SWALLOWED — not buccally absorbed" },
                { category: "Metabolic", question: "Glucagon: Dose by weight?", answer: ">6 years or >25 kg: 1 mg IM/SC\n<6 years or <25 kg: 0.5 mg IM/SC\nRepeat q10-15 min; up to 5 mg for BB/CCB overdose" },
                { category: "Metabolic", question: "Normal Saline: Pediatric fluid bolus?", answer: "10 ml/kg IV/IO bolus\nMax 500 ml — reassess after each bolus" },
                { category: "Metabolic", question: "Lactated Ringers: Key contraindications?", answer: "<1 month of age\nDKA (may worsen)\nHypervolemia\nLiver failure" },

                /* ── OTHER MEDICATIONS ── */
                { category: "Other", question: "Aspirin: Dose for ACS?", answer: '324 mg (4 × 81 mg tablets) CHEWED\nIf already taken in last 60 min <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> give additional to reach 324 mg total' },
                { category: "Other", question: "Naloxone: Opioid overdose dose?", answer: "IV/IM: 0.4 mg q3 min (max 2 mg)\nIN: 4 mg q3 min\nPeds: 0.01 mg/kg IV/IM/IO q3 min\nTitrate to restore respirations ONLY — do not over-reverse" },
                { category: "Other", question: "Naloxone: Why titrate carefully?", answer: "Over-reversal causes acute withdrawal: agitation, vomiting, tachycardia, hypertension\nGoal: adequate spontaneous respirations, not full consciousness" },
                { category: "Other", question: "Tranexamic Acid (TXA): Indication?", answer: "Uncontrolled traumatic bleeding OR postpartum hemorrhage\nMust be within 3 hours of onset of bleeding" },
                { category: "Other", question: "TXA: Dose?", answer: "Adult: 1 g IV in 100 ml NS over 10 min (single dose)\nPediatric: 15 mg/kg IV over 10 min" },
                { category: "Other", question: "Furosemide: Indication and dose?", answer: "Acute pulmonary edema with fluid overload\n40 mg IV slowly over 1–2 min\nADULT ONLY — not for pediatric prehospital use" },
                { category: "Other", question: "Diphenhydramine: Dose?", answer: "1 mg/kg IM/IV (max 50 mg)\nIM preferred\nIV: dilute in 100 ml NS adult (1 ml/kg NS peds) over 5 min" },
                { category: "Other", question: "Metoclopramide: Dose?", answer: "Adult: 10 mg IV/IM slow (3 min) or diluted in 100 ml NS\nPeds: 0.1 mg/kg IV/IM — generally not recommended (extrapyramidal risk)" },
                { category: "Other", question: "Hyoscine Butylbromide: Indication?", answer: "Lower abdominal cramping: gastroenteritis, renal colic, IBS, dysmenorrhea\n20 mg IV/IM/SC — adult only" }
            ],

            quiz: [
                /* CARDIAC */
                { q: "Adenosine for SVT: what is the FIRST dose for an adult?", options: ["3 mg IV slow push", "6 mg IV rapid push", "12 mg IV slow push", "0.1 mg IV over 1 min"], correct: 1, explanation: "Adenosine 6 mg is the adult 1st dose for SVT, given as a RAPID push followed immediately by a 10–20 ml NS flush." },
                { q: "Adenosine must be administered:", options: ["Slowly over 1–2 minutes", "As a rapid IV push with immediate NS flush", "Diluted in 100 ml NS", "Via IM injection only"], correct: 1, explanation: "Adenosine has a half-life of <10 seconds. It must be pushed rapidly and flushed immediately to reach the heart before it is metabolized." },
                { q: "What diluent must be used for Amiodarone infusion?", options: ["Normal Saline", "Lactated Ringers", "Dextrose 5% Water", "Sterile water"], correct: 2, explanation: "Amiodarone is incompatible with Normal Saline and must be diluted in D5W only." },
                { q: "Amiodarone dose for cardiac arrest (refractory VF/VT)?", options: ["1 mg/kg IV", "3 mg/kg IV/IO", "5 mg/kg IV/IO", "300 mg flat dose adult only"], correct: 2, explanation: "The SmartCare dose is 5 mg/kg IV/IO given after the 3rd shock in refractory VF/VT." },
                { q: "Atropine for organophosphate poisoning: treatment endpoint is:", options: ["Heart rate >60", "Pupil dilation", "Drying of secretions", "BP normalization"], correct: 2, explanation: "In organophosphate poisoning, atropine is titrated until secretions dry — not to heart rate. Doses may be very high (2–4 mg q5-10 min)." },
                { q: "Epinephrine for anaphylaxis: correct concentration and route?", options: ["1:10,000 IV", "1:1,000 IM lateral thigh", "1:1,000 IV push", "1:10,000 IM"], correct: 1, explanation: "Anaphylaxis: 1:1,000 (1 mg/ml) given IM into the lateral thigh. The 1:10,000 concentration is for cardiac arrest via IV/IO." },
                { q: "GTN is CONTRAINDICATED in which scenario?", options: ["Anterior STEMI", "BP 110/70 with chest pain", "Patient took sildenafil 20 hours ago", "Pulmonary edema with normal BP"], correct: 2, explanation: "GTN + PDE-5 inhibitors (sildenafil/Viagra) causes severe refractory hypotension. Contraindicated within 24–48 hours of sildenafil use." },
                { q: "Labetalol prehospital use: indication?", options: ["Hypertensive emergency in stroke", "Pre-eclampsia with severe hypertension", "Hypertension with tachycardia in all adults", "Post-cardiac arrest hypertension"], correct: 1, explanation: "Labetalol in SmartCare is indicated for pre-eclampsia with severe hypertension (SBP ≥160 or DBP ≥110) or eclampsia." },

                /* AIRWAY */
                { q: "Salbutamol pediatric dose for a 3-year-old?", options: ["1.25 mg nebulized", "2.5 mg nebulized", "5 mg nebulized", "Same as adult"], correct: 1, explanation: "Children under 5 years receive 2.5 mg salbutamol nebulized. Children ≥5 years receive 5 mg (adult dose)." },
                { q: "Racemic epinephrine is indicated for:", options: ["Anaphylaxis", "Asthma exacerbation", "Croup (stridor)", "Post-intubation hypertension"], correct: 2, explanation: "Racemic epinephrine is nebulized for croup — it reduces upper airway edema and stridor. It is not used for asthma or anaphylaxis in SmartCare." },
                { q: "Magnesium sulphate adult dose for severe asthma?", options: ["1 g IV over 10 min", "2 g IV over 20 min", "4 g IV over 5 min", "40 mg/kg IV"], correct: 1, explanation: "2 g IV over 20 minutes for adults with severe/life-threatening asthma not responding to bronchodilators." },
                { q: "Methoxyflurane (Penthrox inhaler) maximum adult dose per episode?", options: ["3 ml", "6 ml", "9 ml", "12 ml"], correct: 1, explanation: "Maximum 6 ml per 24 hours in adults (one use of 3 ml + one repeat). Pediatric max is 3 ml total." },

                /* NEURO */
                { q: "Diazepam rectal (PR) dose for a 20 kg child in status epilepticus?", options: ["2 mg", "5 mg", "10 mg", "20 mg"], correct: 2, explanation: "PR dose is 0.5 mg/kg. For a 20 kg child: 0.5 × 20 = 10 mg PR (max 20 mg)." },
                { q: "Haloperidol: which route is used in prehospital care?", options: ["IV slow push", "IM only", "Oral", "Sublingual"], correct: 1, explanation: "Haloperidol is given IM only in the prehospital setting. IV administration carries risks of QT prolongation and torsades — not used prehospital." },
                { q: "A patient is seizing. You give Diazepam 5 mg IV. After 5 minutes the seizure continues. What next?", options: ["Repeat Diazepam 5 mg IV", "Give Haloperidol 5 mg IM", "Give Atropine", "Transport — no further drug"], correct: 0, explanation: "A single repeat dose of Diazepam 5 mg IV is appropriate if seizure continues after 5 minutes. Request ALS backup." },

                /* PAIN */
                { q: "Morphine maximum IV dose for an adult?", options: ["5 mg", "10 mg", "20 mg", "No maximum"], correct: 1, explanation: "Maximum IV dose is 10 mg (given as 2.5 mg increments q5 min). The IM maximum is 20 mg." },
                { q: "Paracetamol adult IV dose?", options: ["500 mg", "750 mg", "1000 mg", "1500 mg"], correct: 2, explanation: "1000 mg (1 g) IV over 10–15 min. Maximum 4 g per 24 hours. Reduce in hepatic impairment." },
                { q: "Nefopam is contraindicated in all EXCEPT:", options: ["Epilepsy", "STEMI", "Moderate fracture pain with normal renal function", "Age 10 years"], correct: 2, explanation: "Nefopam can be used for moderate-severe pain with normal renal function. It is contraindicated in epilepsy, STEMI/NSTEMI, renal impairment, and patients under 13 years." },
                { q: "GTN maximum number of SL sprays prehospital?", options: ["1 spray (0.4 mg)", "2 sprays (0.8 mg)", "3 sprays (1.2 mg)", "5 sprays (2 mg)"], correct: 2, explanation: "Maximum 3 sprays (0.4 mg each = 1.2 mg total) at 3–5 minute intervals, provided SBP remains ≥100 mmHg." },

                /* METABOLIC */
                { q: "Blood glucose threshold to treat hypoglycemia?", options: ["<50 mg/dl", "<60 mg/dl", "<70 mg/dl", "<80 mg/dl"], correct: 2, explanation: "Treat hypoglycemia when blood glucose is <70 mg/dl regardless of symptoms in SmartCare." },
                { q: "Dextrose 10% pediatric dose?", options: ["5 ml/kg", "10 ml/kg (max 125 ml)", "20 ml/kg", "2 ml/kg"], correct: 1, explanation: "10 ml/kg IV/IO (max 125 ml in children). Neonates receive 2 ml/kg of D10W." },
                { q: "Glucose 40% oral paste: which patient CANNOT receive it?", options: ["A 70 kg adult", "A 20 kg child", "An unconscious patient", "A diabetic on insulin"], correct: 2, explanation: "Oral paste requires a conscious patient who can swallow. It must be swallowed — not buccally absorbed — so it cannot be given to unconscious patients." },
                { q: "Glucagon dose for a 20 kg child?", options: ["1 mg IM", "0.5 mg IM", "2 mg IM", "0.1 mg/kg IM"], correct: 1, explanation: "Children under 6 years OR under 25 kg receive 0.5 mg IM/SC. Children over 25 kg receive 1 mg." },
                { q: "Lactated Ringers is contraindicated in:", options: ["Hemorrhagic shock", "Burns", "Diabetic ketoacidosis", "Sepsis"], correct: 2, explanation: "LR is contraindicated in DKA (risk of worsening acidosis), <1 month of age, hypervolemia, and liver failure." },

                /* OTHER */
                { q: "Aspirin for ACS: correct dose and method?", options: ["600 mg swallowed whole", "325 mg chewed", "324 mg (4×81 mg) chewed", "162 mg sublingual"], correct: 2, explanation: "324 mg (4 × 81 mg) must be CHEWED (not swallowed whole) for rapid absorption. Do not give if patient already had 324 mg in the past 60 minutes." },
                { q: "Naloxone: goal of titration in opioid overdose?", options: ["Full consciousness", "Normal BP", "Adequate spontaneous respirations", "HR >60"], correct: 2, explanation: "Titrate Naloxone to restore adequate spontaneous respirations ONLY. Over-reversal causes acute withdrawal (agitation, vomiting, tachycardia) and is dangerous." },
                { q: "TXA must be given within how many hours of injury?", options: ["1 hour", "2 hours", "3 hours", "6 hours"], correct: 2, explanation: "Tranexamic Acid must be given within 3 hours of injury or onset of PPH. After 3 hours it may actually increase mortality." },
                { q: "Furosemide 40 mg IV: which patient is it indicated for?", options: ["8-year-old with anaphylaxis", "Adult with acute pulmonary edema and fluid overload", "Any patient with dyspnea", "Pediatric septic shock"], correct: 1, explanation: "Furosemide is indicated for adults with acute pulmonary edema accompanied by signs of fluid overload. Not for pediatric prehospital use." },
                { q: "Metoclopramide is generally avoided in pediatrics due to risk of:", options: ["Respiratory depression", "Extrapyramidal effects", "Hypoglycemia", "Hypertension"], correct: 1, explanation: "Metoclopramide causes extrapyramidal effects (dystonia, akathisia) especially in children and young adults — generally avoid prehospital in pediatrics." }
            ],

            critical: [
                {
                    scenario: "32F, 8 months pregnant. BP 178/112, severe headache, visual changes. GCS 15. No active seizure.",
                    question: "Which drug is indicated FIRST?",
                    options: [
                        { t: "Diazepam 5 mg IV", f: "Diazepam is for active seizure (eclampsia), not prophylaxis here." },
                        { t: "Labetalol 20 mg IV over 2 min", f: "Correct. Pre-eclampsia with severe hypertension — Labetalol is first-line to reduce BP." },
                        { t: "GTN 0.4 mg SL", f: "GTN is not indicated in obstetric hypertension." },
                        { t: "Magnesium 4 g IV over 5 min", f: "Magnesium is for active eclampsia seizure, not isolated hypertension." }
                    ],
                    correct: 1,
                    explanation: "Pre-eclampsia with severe features: SBP ≥160 or DBP ≥110 requires antihypertensive treatment. Labetalol 20 mg IV over 2 minutes per SmartCare.",
                    kpi: "Administer Labetalol within 5 min of recognition of severe hypertension."
                },
                {
                    scenario: "58M, witnessed cardiac arrest. VF on monitor. 3 shocks delivered, CPR ongoing. IV access established.",
                    question: "After the 3rd shock, which drug is given?",
                    options: [
                        { t: "Atropine 1 mg IV", f: "Atropine is not indicated in VF/VT arrest." },
                        { t: "Amiodarone 5 mg/kg IV/IO", f: "Correct. Amiodarone 5 mg/kg IV/IO is given after the 3rd shock in refractory VF/VT." },
                        { t: "Adenosine 6 mg IV rapid push", f: "Adenosine is for SVT — never used in cardiac arrest." },
                        { t: "Lidocaine 1 mg/kg IV", f: "Lidocaine is an alternative, but SmartCare specifies Amiodarone." }
                    ],
                    correct: 1,
                    explanation: "Amiodarone 5 mg/kg IV/IO is the anti-arrhythmic of choice after the 3rd defibrillation in refractory VF/pulseless VT. Must be diluted in D5W, never NS.",
                    kpi: "Do not interrupt CPR to draw up Amiodarone — prepare during compressions."
                },
                {
                    scenario: "4-year-old, 18 kg. History of febrile seizures. Active generalized tonic-clonic seizure × 4 min. IV access not established.",
                    question: "What is the MOST appropriate immediate intervention?",
                    options: [
                        { t: "Diazepam 5 mg IV — attempt IV access first", f: "No IV access is established. Attempting IV during active seizure wastes critical time." },
                        { t: "Diazepam PR 9 mg (0.5 mg/kg)", f: 'Correct. No IV <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> rectal Diazepam 0.5 mg/kg = 9 mg. Fast, effective, atraumatic.' },
                        { t: "Haloperidol 5 mg IM", f: "Haloperidol is for psychosis — never for seizures." },
                        { t: "Intranasal Midazolam", f: "Not in SmartCare formulary for this indication." }
                    ],
                    correct: 1,
                    explanation: "When IV access is unavailable: rectal Diazepam 0.5 mg/kg (max 20 mg). For 18 kg: 9 mg PR. This is the fastest and safest route in a seizing child without IV access.",
                    kpi: "Airway management takes priority — position patient, suction if needed, O2 via mask."
                },
                {
                    scenario: "25M, found unresponsive. RR 4/min, pinpoint pupils, bradycardia. Suspected heroin overdose.",
                    question: "Naloxone dose and route?",
                    options: [
                        { t: "0.4 mg IV — full dose at once to wake the patient", f: "Giving full dose at once risks acute withdrawal. Titrate to respirations, not consciousness." },
                        { t: "0.4 mg IV/IM — titrate to adequate spontaneous respirations", f: "Correct. Start 0.4 mg, reassess in 3 min, repeat if needed. Goal: RR ≥10, not full consciousness." },
                        { t: "2 mg IV — maximum dose immediately", f: "Start with 0.4 mg and titrate. 2 mg maximum is the total allowed, not the starting dose." },
                        { t: "4 mg IN — intranasal only, avoid IV", f: "IV/IM is faster in this scenario. IN 4 mg is an option but IV is preferred with access." }
                    ],
                    correct: 1,
                    explanation: "Titrate Naloxone 0.4 mg IV/IM q3 min. Do NOT over-reverse — goal is spontaneous respirations ≥10/min. Over-reversal causes acute withdrawal (vomiting, agitation, pulmonary edema) and is dangerous.",
                    kpi: "Support airway with BVM before and during Naloxone administration."
                },
                {
                    scenario: "19F, known asthma. Severe exacerbation, SpO2 82% on 15L O2 NRB. Accessory muscle use, tripod position, unable to speak in sentences. Salbutamol × 2 rounds given.",
                    question: "What is the NEXT drug indicated?",
                    options: [
                        { t: "Repeat Salbutamol only", f: "Already given × 2. Add Ipratropium (Combivent) and consider Magnesium." },
                        { t: "Magnesium Sulphate 2 g IV over 20 min", f: 'Correct. Life-threatening asthma not responding to bronchodilators <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> Magnesium 2 g IV/IO over 20 min.' },
                        { t: "Haloperidol 5 mg IM for anxiety", f: "Never — causes respiratory depression in a patient already in extremis." },
                        { t: "Furosemide 40 mg IV", f: "Not indicated — this is bronchoconstriction, not pulmonary edema." }
                    ],
                    correct: 1,
                    explanation: "Life-threatening asthma not responding to repeated Salbutamol: add Combivent, Hydrocortisone 2 mg/kg IV, and Magnesium Sulphate 2 g IV over 20 min. Consider RSI and ALS backup.",
                    kpi: "Request ALS backup immediately for life-threatening asthma. Do not delay transport."
                },
                {
                    scenario: "70M, STEMI confirmed on 12-lead. BP 126/78. Patient took sildenafil (Viagra) last night.",
                    question: "Can you give GTN?",
                    options: [
                        { t: "Yes — STEMI always gets GTN regardless", f: "Incorrect. PDE-5 inhibitor use within 24-48 h is an absolute contraindication for GTN." },
                        { t: "No — sildenafil use within 24 hours is a contraindication to GTN", f: "Correct. GTN + sildenafil causes severe, refractory hypotension that does not respond to fluid." },
                        { t: "Yes, but use half the dose", f: "There is no safe dose of GTN after recent sildenafil. Contraindicated." },
                        { t: "Yes — only contraindicated if BP <90 mmHg", f: "BP alone is not the only contraindication. PDE-5 inhibitors within 24-48 h are absolute CI." }
                    ],
                    correct: 1,
                    explanation: "GTN + PDE-5 inhibitors (sildenafil, tadalafil, vardenafil) causes profound hypotension refractory to fluids. Absolute contraindication within 24 h (sildenafil) or 48 h (tadalafil). Manage pain with Morphine instead.",
                    kpi: "ALWAYS ask about erectile dysfunction medications before giving GTN in male patients with chest pain."
                },
                {
                    scenario: "6-year-old, 22 kg. BG 48 mg/dl. Altered mental status but responding to voice. IV access established.",
                    question: "Which treatment is MOST appropriate?",
                    options: [
                        { t: "Glucose 40% oral paste ½ tube", f: "Altered mental status means uncertain airway protection — oral paste unsafe if at risk of aspiration." },
                        { t: "Dextrose 10% 220 ml IV (10 ml/kg)", f: "Correct. 10 ml/kg = 220 ml D10W IV/IO for a 22 kg child with hypoglycemia and altered mental status." },
                        { t: "Glucagon 1 mg IM", f: "Glucagon is for patients without IV access. With IV access, dextrose is preferred (faster and more reliable)." },
                        { t: "Normal Saline bolus 220 ml", f: "NS does not treat hypoglycemia." }
                    ],
                    correct: 1,
                    explanation: "With IV access: D10W 10 ml/kg (220 ml) is the preferred treatment for pediatric hypoglycemia. Recheck BG after 5-10 minutes. Glucagon IM is the backup when no IV access is available.",
                    kpi: "Recheck blood glucose 5-10 minutes after treatment. Aim for BG >80 mg/dl."
                },
                {
                    scenario: "28F, 36 weeks pregnant. Active postpartum hemorrhage post-delivery on scene. Estimated blood loss >1L. Time since delivery: 45 minutes.",
                    question: "Is TXA indicated? If so, what is the dose?",
                    options: [
                        { t: "No — TXA is only for trauma, not obstetric hemorrhage", f: "Incorrect. SmartCare includes TXA for postpartum hemorrhage within 3 hours of onset." },
                        { t: "Yes — 1 g IV in 100 ml NS over 10 min", f: "Correct. TXA is indicated for PPH within 3 hours. 1 g IV over 10 min as a single dose." },
                        { t: "Yes — 2 g IV bolus immediately", f: "Incorrect dose. The standard clinical dose is 1 g over 10 min (not bolus, not 2 g)." },
                        { t: "No — too much time has passed", f: "45 minutes is well within the 3-hour window. TXA should be given." }
                    ],
                    correct: 1,
                    explanation: "TXA is indicated for PPH within 3 hours of delivery. Dose: 1 g IV diluted in 100 ml NS over 10 minutes (single dose). Infusing too fast may cause nausea/hypotension. Time-critical — do not delay.",
                    kpi: "Document exact time of PPH onset for TXA eligibility. Must be within 3 hours."
                }
            ]
        },
            {
                id: "formulary-72",
                shortTitle: "Activated Charcoal",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Activated Charcoal</h3>
                    </div>
                    <div class="rx-scope" title="Emergency Medical Technician (EMT) and above – independent practice.">
                        <span class="rx-scope-badge">EMT+</span>
                        <div class="rx-scope-bar"><span style="width:20%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Adsorbent / Antidote</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">50 g in 250 mL suspension (200 mg/mL).</span></div>
                </div>

                <p class="rx-moa">Adsorbs many drugs and toxins within the gut lumen, preventing their absorption into the bloodstream.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Recent (ideally within 1 hour) ingestion of a potentially toxic amount of an adsorbable substance, on Poison Center or medical advice.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>50 g PO.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>1 g/kg PO (max 50 g).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Altered level of consciousness or unprotected airway; caustic (acid/alkali) ingestion; hydrocarbons; bowel obstruction or perforation; substances not adsorbed (iron, lithium, alcohols, metals).</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Vomiting (aspiration risk); seizure‑inducing ingestions.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Vomiting; constipation; black stools; aspiration pneumonitis.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: not absorbed systemically; administer if clinically indicated.<br>Lactation: compatible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Shake the container well. Charcoal is tasteless but gritty — offer through a straw in an opaque cup. Do not delay transport to give it.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-2",
                shortTitle: "Adenosine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Adenosine",
                    "lead": "Briefly blocks the AV node to stop re-entry SVT. Give it fast, flush it fast, and warn the patient: a few seconds of asystole and chest discomfort are expected.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiarrhythmic (AV nodal blocker)"
                                ],
                                [
                                    "Presentation",
                                    "6 mg/2 mL vial"
                                ],
                                [
                                    "Onset",
                                    "Seconds; lasts under a minute"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Regular narrow-complex SVT",
                                    "dose": "6 mg rapid IV push",
                                    "note": "Then 12 mg if needed. Each with a 20 mL saline flush; arm raised",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Regular monomorphic wide-complex tachycardia",
                                    "dose": "6 mg, then 12 mg",
                                    "note": "Only if regular and monomorphic",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "SVT",
                                    "dose": "0.1 mg/kg rapid IV/IO (maximum 6 mg)",
                                    "note": "Then 0.2 mg/kg (maximum 12 mg)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable regular narrow-complex tachycardia after vagal manoeuvres",
                                "Regular monomorphic wide-complex tachycardia (diagnostic and therapeutic)"
                            ],
                            "exclude": [
                                "Irregular or polymorphic tachycardia",
                                "AF with WPW (pre-excitation)",
                                "2nd or 3rd degree block or sick sinus without a pacemaker",
                                "Severe asthma (bronchospasm)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Transient asystole, flushing, chest pressure, breathlessness",
                                "Heart transplant patients and dipyridamole or carbamazepine: smaller dose (3 mg) per protocol",
                                "Record the rhythm strip during the dose"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "svt",
                                            "label": "SVT",
                                            "sub": "Regular narrow tachycardia: adenosine after vagal manoeuvres.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-3",
                shortTitle: "Amiodarone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Amiodarone",
                    "lead": "The first-line antiarrhythmic for VF or pulseless VT that persists after shocks, and an option for stable wide-complex tachycardia.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiarrhythmic (mainly class III)"
                                ],
                                [
                                    "Presentation",
                                    "150 mg/3 mL ampoule"
                                ],
                                [
                                    "Effect",
                                    "Prolongs repolarisation; slows the AV node"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "VF or pulseless VT after 3 shocks",
                                    "dose": "300 mg IV/IO push",
                                    "note": "Then 150 mg after the 5th shock",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Stable wide-complex tachycardia",
                                    "dose": "150 mg IV over 10 minutes",
                                    "note": "Diluted in 100 mL D5W; may repeat per protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "VF or pulseless VT",
                                    "dose": "5 mg/kg IV/IO",
                                    "note": "Repeat up to a total of 15 mg/kg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Shock-refractory VF or pulseless VT",
                                "Stable regular wide-complex tachycardia"
                            ],
                            "exclude": [
                                "Known allergy",
                                "Arrhythmia from tricyclic antidepressant overdose (use sodium bicarbonate)",
                                "Outside arrest: hypotension, 2nd or 3rd degree block without a pacemaker"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and bradycardia during infusion: slow or stop it",
                                "QT prolongation: avoid with other QT-prolonging drugs (procainamide)",
                                "Large vein if possible: irritant"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "In pregnancy, don't withhold it in cardiac arrest"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "vfCoarse",
                                            "label": "VF",
                                            "sub": "After the 3rd shock: amiodarone 300 mg.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "vt",
                                            "label": "Monomorphic VT",
                                            "sub": "Stable: amiodarone 150 mg over 10 minutes.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-4",
                shortTitle: "Aspirin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Aspirin",
                    "lead": "Blocks platelet thromboxane for the life of the platelet. In suspected acute coronary syndrome, chewed aspirin early reduces deaths.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiplatelet (COX inhibitor)"
                                ],
                                [
                                    "Presentation",
                                    "81 mg chewable tablets (or 300 mg)"
                                ],
                                [
                                    "Onset",
                                    "Minutes when chewed"
                                ],
                                [
                                    "Scope",
                                    "Emergency medical responder and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Suspected ACS",
                                    "dose": "162–325 mg chewed (e.g. 4 × 81 mg = 324 mg)",
                                    "note": "Top up to a total of 324 mg if some was taken in the last hour",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children (Reye syndrome risk; ACS is rare)."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Chest pain or equivalent suspected to be ACS"
                            ],
                            "exclude": [
                                "Allergy or aspirin-induced asthma",
                                "Active bleeding or bleeding peptic ulcer",
                                "Third trimester of pregnancy unless directed"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Bronchospasm in aspirin-sensitive asthma"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Give even if the patient takes another antiplatelet or anticoagulant, unless bleeding"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "stemiAnt",
                                            "label": "Anterior STEMI",
                                            "sub": "Aspirin plus a cath-lab pre-alert.",
                                            "lead": "V3"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-5",
                shortTitle: "Atropine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Atropine",
                    "lead": "Blocks the vagus nerve: speeds a slow sinus or AV nodal rhythm and dries secretions. First-line for unstable bradycardia; large doses for organophosphate poisoning.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Anticholinergic (muscarinic antagonist)"
                                ],
                                [
                                    "Presentation",
                                    "0.5 mg/5 mL or 1 mg/10 mL prefilled syringe"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes IV"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Symptomatic bradycardia",
                                    "dose": "1 mg IV every 3–5 minutes",
                                    "note": "Maximum 3 mg; push fast",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Organophosphate or nerve agent",
                                    "dose": "2 mg IV/IM, doubling every 5 minutes",
                                    "note": "Until bronchial secretions dry",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Bradycardia (vagal or AV block)",
                                    "dose": "0.02 mg/kg IV/IO",
                                    "note": "Minimum 0.1 mg; maximum single dose 0.5 mg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Organophosphate",
                                    "dose": "0.02–0.05 mg/kg IV/IO",
                                    "note": "Repeat every 5 minutes until secretions dry",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Symptomatic sinus bradycardia or AV nodal block",
                                "Cholinergic crisis (organophosphates, nerve agents)"
                            ],
                            "exclude": [
                                "Cardiac arrest (no benefit)",
                                "Heart transplant (no vagal effect)",
                                "Wide-complex escape or Mobitz II and complete block: often ineffective – pace"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia and increased myocardial oxygen demand in ischaemia",
                                "Confusion, dry mouth, urinary retention, blurred vision",
                                "Angle-closure glaucoma"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "sbrady",
                                            "label": "Sinus bradycardia",
                                            "sub": "Symptomatic: atropine 1 mg.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "chb",
                                            "label": "Complete heart block",
                                            "sub": "Atropine often fails: pace.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-60",
                shortTitle: "Budesonide (Nebulized)",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Budesonide (nebulised)",
                    "lead": "An inhaled steroid for croup when the child can't take oral or injected dexamethasone. It doesn't act fast: severe stridor still needs nebulised epinephrine.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Inhaled corticosteroid"
                                ],
                                [
                                    "Presentation",
                                    "0.5 mg/2 mL and 1 mg/2 mL nebules"
                                ],
                                [
                                    "Onset",
                                    "Hours"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Croup when oral or IM steroid isn't possible",
                                    "dose": "2 mg nebulised once",
                                    "note": "Keep the child calm on the carer's lap",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe croup when dexamethasone can't be given"
                            ],
                            "exclude": [
                                "Allergy",
                                "As the only treatment for stridor at rest (give nebulised epinephrine)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Cough, hoarseness",
                                "Agitation worsens stridor: blow-by if a mask upsets the child"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Oral dexamethasone is the first-line croup steroid"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-39",
                shortTitle: "Calcium Chloride",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Calcium Chloride",
                    "lead": "Stabilises the heart muscle membrane within minutes. Use it for hyperkalaemia with ECG changes and for calcium-channel blocker or magnesium toxicity – not routinely in arrest.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Electrolyte"
                                ],
                                [
                                    "Presentation",
                                    "10% solution, 1 g/10 mL"
                                ],
                                [
                                    "Strength",
                                    "About 3 times the calcium of the same volume of gluconate"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hyperkalaemia with ECG changes, CCB or magnesium toxicity",
                                    "dose": "1 g (10 mL of 10%) slow IV/IO over 5 minutes",
                                    "note": "Push in cardiac arrest; may repeat once",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same indications",
                                    "dose": "20 mg/kg (0.2 mL/kg of 10%) slow IV/IO",
                                    "note": "Maximum 1 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hyperkalaemia with ECG changes (peaked T, wide QRS)",
                                "Calcium-channel blocker or magnesium overdose",
                                "Symptomatic hypocalcaemia"
                            ],
                            "exclude": [
                                "Same line as sodium bicarbonate (precipitates)",
                                "Routine use in cardiac arrest without a reason"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Extravasation causes tissue necrosis: large vein or IO",
                                "Bradycardia and hypotension if pushed fast",
                                "Patients on digoxin: give slowly, with monitoring"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "hyperK",
                                            "label": "Hyperkalaemia",
                                            "sub": "Peaked T waves or wide QRS: calcium first.",
                                            "lead": "V3"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-69",
                shortTitle: "Calcium Gluconate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Calcium Gluconate",
                    "lead": "A gentler calcium for peripheral veins. Same uses as calcium chloride but three times the volume for the same effect – and the topical gel for hydrofluoric acid burns.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Electrolyte"
                                ],
                                [
                                    "Presentation",
                                    "10% solution, 10 mL ampoule (1 g)"
                                ],
                                [
                                    "Strength",
                                    "About one-third of calcium chloride's calcium"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hyperkalaemia, CCB or magnesium toxicity",
                                    "dose": "30 mL (3 g) of 10% IV/IO over 5–10 minutes",
                                    "note": "Push in cardiac arrest; may repeat",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same indications",
                                    "dose": "0.5 mL/kg (50 mg/kg) of 10% IV/IO",
                                    "note": "Maximum 20 mL",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Hyperkalaemia with ECG changes",
                                "Calcium-channel blocker or magnesium toxicity",
                                "Hydrofluoric acid burns (topical gel 2.5%)"
                            ],
                            "exclude": [
                                "Same line as sodium bicarbonate",
                                "Hypercalcaemia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bradycardia, hypotension if fast",
                                "Less irritant than chloride but still avoid extravasation"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-76",
                shortTitle: "Ceftriaxone",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Ceftriaxone</h3>
                    </div>
                    <div class="rx-scope" title="Advanced Paramedic (AP) and above – independent practice.">
                        <span class="rx-scope-badge">AP+</span>
                        <div class="rx-scope-bar"><span style="width:80%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antibiotic (Third‑Generation Cephalosporin)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">1 g / 2 g vial (powder for reconstitution).</span></div>
                </div>

                <p class="rx-moa">Inhibits bacterial cell wall synthesis; broad‑spectrum bactericidal activity including meningococcus.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Suspected meningococcal sepsis (non‑blanching rash with signs of sepsis) or severe sepsis / septic shock with prolonged transport, per local protocol.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>2 g IV/IO over 2–4 min, or 2 g IM (divided between two sites).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>80 mg/kg IV/IO/IM (max 2 g).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known anaphylaxis to cephalosporins or penicillins; neonates &lt;28 days receiving calcium‑containing IV fluids.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Do not mix with or give in the same line as calcium‑containing fluids (Ringers Lactate). History of minor penicillin allergy.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Allergic reaction; injection‑site pain; diarrhea.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: considered safe.<br>Lactation: compatible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Do not delay transport. Obtain blood cultures only if it does not delay the antibiotic. Notify the receiving hospital and document the time given.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-77",
                shortTitle: "Chlorphenamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Chlorphenamine",
                    "lead": "An antihistamine for itch and hives. In anaphylaxis it's an optional add-on after epinephrine – it does nothing for the airway or blood pressure.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "H1 antihistamine (sedating)"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL injection; 4 mg tablets; 2 mg/5 mL syrup"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 30 minutes orally"
                                ],
                                [
                                    "Scope",
                                    "Advanced EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Allergic skin symptoms",
                                    "dose": "10 mg IM or slow IV",
                                    "note": "4 mg orally for mild reactions",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "6 months to 6 years",
                                    "dose": "2.5 mg IM or slow IV",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "6–12 years",
                                    "dose": "5 mg IM or slow IV",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Over 12 years",
                                    "dose": "10 mg IM or slow IV",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Urticaria, itch, mild angioedema without airway or circulation problems",
                                "After epinephrine in anaphylaxis, for skin symptoms"
                            ],
                            "exclude": [
                                "Infants under 6 months",
                                "Instead of epinephrine in anaphylaxis"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Drowsiness – no driving",
                                "Hypotension if pushed fast IV",
                                "Older adults: falls and confusion; glaucoma and urinary retention"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-53",
                shortTitle: "Clopidogrel",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Clopidogrel",
                    "lead": "A second antiplatelet (P2Y12 inhibitor) added to aspirin for STEMI when your cath-lab pathway asks for it. Only one P2Y12 drug, only by protocol.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiplatelet (irreversible P2Y12 inhibitor)"
                                ],
                                [
                                    "Presentation",
                                    "75 mg and 300 mg tablets"
                                ],
                                [
                                    "Use",
                                    "STEMI pathway, with medical direction"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "STEMI for primary PCI",
                                    "dose": "600 mg orally",
                                    "note": "300 mg with fibrinolysis; 75 mg if over 75 years with fibrinolysis",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not indicated in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "STEMI on a 12-lead, with aspirin, per the receiving PCI centre"
                            ],
                            "exclude": [
                                "Active bleeding or previous intracranial haemorrhage",
                                "Already on another P2Y12 inhibitor (ticagrelor, prasugrel)",
                                "Severe liver disease"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Possible urgent bypass surgery: check with the cath lab first"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-6",
                shortTitle: "Combivent",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Combivent (salbutamol + ipratropium)",
                    "lead": "A combined nebule of a beta-2 agonist and an anticholinergic for moderate to severe asthma or COPD attacks. Don't add separate ipratropium on top.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-2 agonist plus anticholinergic"
                                ],
                                [
                                    "Presentation",
                                    "2.5 mL nebule: salbutamol 2.5 mg + ipratropium 0.5 mg"
                                ],
                                [
                                    "Onset",
                                    "Minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe bronchospasm (asthma, COPD)",
                                    "dose": "1 nebule (2.5 mL)",
                                    "note": "Repeat salbutamol alone as needed; ipratropium up to 3 doses in the first hour",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used in children: give salbutamol and ipratropium separately at pediatric doses."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe asthma or COPD exacerbation"
                            ],
                            "exclude": [
                                "Allergy to either component"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, dry mouth",
                                "Eyes: avoid mist in the eyes (glaucoma)",
                                "COPD: drive with air or titrate oxygen to 88–92%"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-7",
                shortTitle: "D5W",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Dextrose 5% Water (D5W)</h3>
                    </div>
                    <div class="rx-scope" title="Advanced Paramedic (AP) and above – independent practice.">
                        <span class="rx-scope-badge">AP+</span>
                        <div class="rx-scope-bar"><span style="width:80%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Carbohydrate</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">5 g in 100 mL bottle</span></div>
                </div>

                <p class="rx-moa">Prevents precipitation of solutes during infusions.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Dilution of medications (amiodarone) for infusion.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>Dosage as required by infusion amount.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Dosage as required by infusion amount.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Administration as treatment for Hypoglycemia.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hyperglycemia.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: may cause fetal harm. However, should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>None noted.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-40",
                shortTitle: "Dexamethasone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Dexamethasone",
                    "lead": "A long-acting steroid: one dose treats croup for days and helps asthma and COPD attacks recover. It takes hours to work, so it never replaces bronchodilators or epinephrine.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid (long-acting)"
                                ],
                                [
                                    "Presentation",
                                    "4 mg/mL injection; tablets or oral solution"
                                ],
                                [
                                    "Onset",
                                    "1–2 hours; lasts about 3 days"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Asthma or COPD exacerbation",
                                    "dose": "10 mg IV, IM or orally",
                                    "note": "Single dose",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Croup",
                                    "dose": "0.15–0.6 mg/kg orally (or IM/IV)",
                                    "note": "Maximum 16 mg; oral preferred in a calm child",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Asthma",
                                    "dose": "0.6 mg/kg orally or IV/IM",
                                    "note": "Maximum 16 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Croup of any severity",
                                "Moderate to severe asthma or COPD exacerbation"
                            ],
                            "exclude": [
                                "Allergy",
                                "Instead of epinephrine in anaphylaxis or croup with stridor at rest"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia in diabetes",
                                "Agitation"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-8",
                shortTitle: "Dextrose 10%",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Dextrose 10%</h3>
                    </div>
                    <div class="rx-scope" title="Emergency Medical Technician (EMT) and above – independent practice.">
                        <span class="rx-scope-badge">EMT+</span>
                        <div class="rx-scope-bar"><span style="width:20%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Carbohydrate</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">50 g in 500 mL bottle; 25 g in 250 mL bottle.</span></div>
                </div>

                <p class="rx-moa">Provides glucose for cellular metabolism, raising blood glucose levels rapidly in hypoglycemia.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Hypoglycemia (RBS <70 mg/dL).</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>125‑250 mL (12.5‑25 g) IV/IO. May be repeated if hypoglycemia persists.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>10 mL/kg IV/IO (maximum 125 mL). May be repeated if hypoglycemia persists.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Hyperglycemia.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hyperglycemia.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: may cause fetal harm. However, should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>To prevent rebound hyperglycemia, avoid excessive doses of Dextrose 10% – titrate the dose based on the patient’s GCS and RBS. If GCS remains abnormal despite normalized glucose, investigate alternative causes of the patient’s condition.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-68",
                shortTitle: "Dextrose 50%",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Dextrose 50% (D50)</h3>
                    </div>
                    <div class="rx-scope" title="EMT‑Advanced (EMT‑A) and above – independent practice.">
                        <span class="rx-scope-badge">EMT-A+</span>
                        <div class="rx-scope-bar"><span style="width:40%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Carbohydrate</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">25 g/50 mL prefilled syringe.</span></div>
                </div>

                <p class="rx-moa">Hypertonic glucose that rapidly raises blood glucose concentration.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Symptomatic hypoglycemia (BGL &lt;70 mg/dL) in an adult unable to take oral glucose, when Dextrose 10% is not available.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>12.5–25 g (25–50 mL) slow IV push via a large, patent vein; recheck BGL after 10 min.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not recommended — use Dextrose 10% (5 mL/kg).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known hyperglycemia; no secure IV access.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Highly irritant — extravasation causes tissue necrosis. Suspected stroke without confirmed hypoglycemia; possible alcohol‑dependent patient (give Thiamine).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Phlebitis; tissue necrosis on extravasation; hyperglycemia.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: administer if clinically indicated.<br>Lactation: compatible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Dextrose 10% is preferred where available — equally effective with less risk of rebound hyperglycemia and tissue injury.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-9",
                shortTitle: "Diazepam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Diazepam",
                    "lead": "A benzodiazepine for seizures – IV, or rectally when there's no access. For IM or intranasal use choose midazolam: diazepam is absorbed poorly from muscle.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Benzodiazepine"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/2 mL injection; 5 mg and 10 mg rectal tubes"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes IV; 5–10 minutes rectal"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Seizure lasting 5 minutes or more",
                                    "dose": "0.15–0.2 mg/kg IV (usually 10 mg)",
                                    "note": "Repeat once after 5 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Severe agitation",
                                    "dose": "5 mg IV, titrated",
                                    "note": "Reduce in head injury and older adults",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Seizure, IV",
                                    "dose": "0.1–0.2 mg/kg IV/IO",
                                    "note": "Maximum 10 mg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Seizure, no access",
                                    "dose": "0.5 mg/kg rectally",
                                    "note": "Maximum 20 mg",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Seizure lasting 5 minutes or more",
                                "Severe agitation (where protocol allows)"
                            ],
                            "exclude": [
                                "IM route",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: bag-mask ready, ETCO₂",
                                "Hypotension",
                                "Worse with alcohol or opioids"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-10",
                shortTitle: "Diclofenac",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Diclofenac",
                    "lead": "An injectable anti-inflammatory for moderate to severe pain, especially renal colic. Avoid in kidney disease, dehydration, bleeding and late pregnancy.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "NSAID"
                                ],
                                [
                                    "Presentation",
                                    "75 mg/3 mL"
                                ],
                                [
                                    "Onset",
                                    "15–30 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain (renal colic, musculoskeletal)",
                                    "dose": "75 mg deep IM",
                                    "note": "IV only as a diluted infusion where protocol allows",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used prehospital in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Renal colic and musculoskeletal pain"
                            ],
                            "exclude": [
                                "NSAID allergy or NSAID-induced asthma",
                                "Kidney disease, dehydration or shock",
                                "Active bleeding, anticoagulants, peptic ulcer",
                                "Third trimester of pregnancy",
                                "Heart failure or recent MI"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bronchospasm in sensitive asthma",
                                "Injection-site pain; same line as nefopam can precipitate"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-50",
                shortTitle: "Diltiazem",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Diltiazem",
                    "lead": "Slows the AV node to control the rate of AF or flutter in a stable patient. Never for wide-complex or pre-excited rhythms, and never in heart failure or shock.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Calcium-channel blocker (non-dihydropyridine)"
                                ],
                                [
                                    "Presentation",
                                    "25 mg/5 mL (5 mg/mL)"
                                ],
                                [
                                    "Onset",
                                    "2–5 minutes"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Rate control of AF or flutter; refractory narrow SVT",
                                    "dose": "0.25 mg/kg IV over 2 minutes (about 15–20 mg)",
                                    "note": "After 15 minutes: 0.35 mg/kg (about 20–25 mg)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not recommended prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable AF or flutter with rapid ventricular response",
                                "Narrow-complex SVT not responding to vagal manoeuvres and adenosine"
                            ],
                            "exclude": [
                                "SBP below 90 mmHg or shock",
                                "Decompensated heart failure",
                                "Wide-complex tachycardia or AF with WPW",
                                "2nd or 3rd degree block or sick sinus without a pacemaker"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and bradycardia: calcium can reverse",
                                "Recent IV beta-blocker: risk of heart block",
                                "12-lead before and after"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "afibRvr",
                                            "label": "AF with fast ventricular rate",
                                            "sub": "Stable: diltiazem for rate control.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-11",
                shortTitle: "Diphenhydramine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Diphenhydramine",
                    "lead": "A sedating antihistamine for allergic itch and hives, and an add-on after epinephrine in anaphylaxis. Also used for acute dystonic reactions.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "H1 antihistamine (sedating, anticholinergic)"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 15–30 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Allergic reaction (after epinephrine if anaphylaxis)",
                                    "dose": "25–50 mg IM or slow IV",
                                    "note": "IV diluted over 5 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Acute dystonic reaction",
                                    "dose": "25–50 mg IV or IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Allergic reaction",
                                    "dose": "1 mg/kg IM or slow IV",
                                    "note": "Maximum 50 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Urticaria, itch, angioedema without airway or circulation compromise",
                                "Skin symptoms after epinephrine in anaphylaxis",
                                "Dystonic reactions to antipsychotics or antiemetics"
                            ],
                            "exclude": [
                                "Newborns",
                                "Instead of epinephrine in anaphylaxis"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Drowsiness, confusion in older adults",
                                "Anticholinergic effects: urinary retention, dry mouth, glaucoma",
                                "Pain if given undiluted IV"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Pregnancy and breastfeeding: may be given when needed; short-term use"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-12",
                shortTitle: "Dopamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Dopamine",
                    "lead": "A dose-dependent inotrope and vasopressor. Most services now prefer norepinephrine for shock and epinephrine for bradycardia; dopamine causes more arrhythmias.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Catecholamine (dopamine, beta-1 and alpha-1 agonist)"
                                ],
                                [
                                    "Presentation",
                                    "200 mg/5 mL for infusion"
                                ],
                                [
                                    "Effect by dose",
                                    "5–10 mcg/kg/min mainly heart; 10–20 mcg/kg/min vasoconstriction"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Shock after fluids; symptomatic bradycardia",
                                    "dose": "5–20 mcg/kg/min IV/IO infusion",
                                    "note": "Pump only; titrate to blood pressure and perfusion",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Shock after fluids",
                                    "dose": "2–20 mcg/kg/min IV/IO infusion",
                                    "note": "Pump only",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Cardiogenic or distributive shock after fluids",
                                "Symptomatic bradycardia not responding to atropine (alternative to epinephrine)"
                            ],
                            "exclude": [
                                "Uncorrected hypovolaemia",
                                "Phaeochromocytoma",
                                "VF or VT"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachyarrhythmias including VT and VF",
                                "Extravasation necrosis: large vein or IO"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Without a pump, choose a drug you can give accurately (push-dose epinephrine)"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-62",
                shortTitle: "Droperidol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Droperidol",
                    "lead": "A fast, reliable sedative for severe acute behavioural disturbance, and a low-dose antiemetic. Monitor the ECG once it's safe to approach.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Butyrophenone antipsychotic"
                                ],
                                [
                                    "Presentation",
                                    "2.5 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "3–10 minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe agitation",
                                    "dose": "5–10 mg IM or 2.5–5 mg IV",
                                    "note": "May repeat once after 15 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Refractory nausea",
                                    "dose": "0.625–1.25 mg IV",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not recommended prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe agitation threatening safety",
                                "Nausea not responding to other antiemetics"
                            ],
                            "exclude": [
                                "Known long QT",
                                "Parkinson's disease",
                                "Coma"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "QT prolongation: 12-lead and monitor",
                                "Dystonia, akathisia (treat with diphenhydramine)",
                                "Hypotension; older adults"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-13",
                shortTitle: "Epinephrine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Epinephrine",
                    "lead": "The most important emergency drug: IM for anaphylaxis, IV/IO in cardiac arrest, small push doses or an infusion for shock and bradycardia. Check the concentration every time.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Alpha and beta adrenergic agonist"
                                ],
                                [
                                    "Presentations",
                                    "1 mg/mL (IM); 0.1 mg/mL 10 mL syringe (IV arrest); auto-injectors 0.3 and 0.15 mg"
                                ],
                                [
                                    "Effect",
                                    "Vasoconstriction, stronger faster heart, bronchodilation, mast-cell stabilising"
                                ],
                                [
                                    "Scope",
                                    "EMT (auto-injector); paramedic (IV)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Cardiac arrest",
                                    "dose": "1 mg IV/IO every 3–5 minutes",
                                    "note": "0.1 mg/mL. Non-shockable: as soon as possible; shockable: after the 2nd shock",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Anaphylaxis",
                                    "dose": "0.5 mg IM (0.5 mL of 1 mg/mL), or 0.3 mg auto-injector",
                                    "note": "Outer thigh; repeat after 5 minutes",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Refractory anaphylaxis, shock, bradycardia",
                                    "dose": "Push dose 10–20 mcg IV every 2–5 minutes, or infusion 2–10 mcg/min",
                                    "note": "Titrate; monitor closely",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Life-threatening asthma",
                                    "dose": "0.5 mg IM",
                                    "note": "When inhaled therapy fails",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Cardiac arrest",
                                    "dose": "0.01 mg/kg IV/IO (0.1 mL/kg of 0.1 mg/mL)",
                                    "note": "Maximum 1 mg; every 3–5 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Anaphylaxis",
                                    "dose": "0.01 mg/kg IM (maximum 0.5 mg)",
                                    "note": "Auto-injector 0.15 mg (under 25 kg) or 0.3 mg",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Shock or bradycardia infusion",
                                    "dose": "0.05–0.3 mcg/kg/min",
                                    "note": "Pump",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Cardiac arrest",
                                "Anaphylaxis",
                                "Shock or bradycardia not responding to first-line treatment",
                                "Life-threatening asthma",
                                "Croup with stridor at rest (nebulised)"
                            ],
                            "exclude": [
                                "No absolute contraindication in an emergency"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tenfold errors: 1 mg/mL is never pushed IV",
                                "Tachycardia, arrhythmias, myocardial ischaemia, hypertension",
                                "Anxiety, tremor, vomiting"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "vfCoarse",
                                            "label": "VF",
                                            "sub": "After the 2nd shock: epinephrine 1 mg.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "asystole",
                                            "label": "Asystole",
                                            "sub": "Epinephrine as soon as possible.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        },
                                        {
                                            "label": "PALS review",
                                            "sub": "Pediatric resuscitation",
                                            "href": "../pages/pals.html",
                                            "icon": "baby"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-14",
                shortTitle: "Ethyl Chloride",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ethyl Chloride (vapocoolant spray)",
                    "lead": "A cold spray that numbs skin for seconds – enough for a cannula in a needle-anxious patient or a minor sprain. Stop before the skin frosts.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Topical vapocoolant"
                                ],
                                [
                                    "Presentation",
                                    "100 mL spray bottle"
                                ],
                                [
                                    "Duration",
                                    "Seconds to a minute"
                                ],
                                [
                                    "Scope",
                                    "All levels"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Cannulation or minor soft-tissue pain",
                                    "dose": "Spray 3–7 seconds from 8–23 cm (3–9 inches)",
                                    "note": "Stop just before the skin whitens",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Cannulation",
                                    "dose": "Same as adults",
                                    "note": "Explain the cold first",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Pain from cannulation or minor contusions and sprains"
                            ],
                            "exclude": [
                                "Broken skin, eyes, mucous membranes",
                                "Hypersensitivity",
                                "Poor circulation to the area"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Frostbite and skin damage if over-sprayed",
                                "Flammable"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-41",
                shortTitle: "Etomidate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Etomidate",
                    "lead": "An induction agent for rapid sequence intubation that barely moves the blood pressure. One dose only, and it gives no pain relief.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Sedative-hypnotic (induction agent)"
                                ],
                                [
                                    "Presentation",
                                    "2 mg/mL (20 mg/10 mL)"
                                ],
                                [
                                    "Onset",
                                    "30–60 seconds; lasts 3–5 minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care / RSI-credentialed"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "RSI induction",
                                    "dose": "0.3 mg/kg IV",
                                    "note": "Have the paralytic and airway ready",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "RSI induction",
                                    "dose": "0.2–0.3 mg/kg IV",
                                    "note": "Physician order or local RSI protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "RSI induction, especially in unstable patients",
                                "Procedural sedation for cardioversion"
                            ],
                            "exclude": [
                                "Allergy",
                                "Repeated doses or infusions (adrenal suppression)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Myoclonus",
                                "Vomiting on emergence",
                                "No analgesia: pair with an opioid"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-42",
                shortTitle: "Fentanyl",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Fentanyl",
                    "lead": "A fast, short-acting opioid that's kinder to blood pressure than morphine. Titrate small IV doses, or give it intranasally when there's no line.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Synthetic opioid"
                                ],
                                [
                                    "Presentation",
                                    "100 mcg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes IV; lasts 30–60 minutes"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "25–50 mcg IV every 5 minutes, titrated",
                                    "note": "Maximum 200 mcg (1 mcg/kg doses)",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV access",
                                    "dose": "1–2 mcg/kg intranasal or IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "1 mcg/kg IV (maximum single dose 50 mcg)",
                                    "note": "Every 5 minutes, titrated",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV access",
                                    "dose": "1.5 mcg/kg intranasal",
                                    "note": "Maximum 100 mcg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe pain, including chest pain and trauma",
                                "Analgesia before painful procedures"
                            ],
                            "exclude": [
                                "Breathing depression without ventilation support",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: naloxone and bag-mask ready",
                                "Hypotension, nausea, sedation",
                                "Chest wall rigidity with rapid large doses"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-15",
                shortTitle: "Furosemide",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Furosemide</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Loop Diuretic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">20 mg/2 mL ampule</span></div>
                </div>

                <p class="rx-moa">Inhibits sodium reabsorption in the ascending loop of Henle in the kidneys resulting in increased urinary output and fluid excretion.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Acute pulmonary edema with signs of fluid overload.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>40 mg IV (slow over 1‑2 minutes).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric use.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Liver cirrhosis; anuria.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Pulmonary edema without symptoms of fluid overload.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hypotension; increased urine output; dehydration; electrolyte imbalances.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: May cause fetal harm. Administration in the prehospital setting is not advised.<br>Lactation: Minimal infant risk. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Furosemide should be administered only if signs of fluid overload are present. Administration to non‑fluid overloaded patients is highly associated with in‑hospital dehydration and electrolyte imbalances and has not demonstrated significant improvement in patient outcomes.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-16",
                shortTitle: "Glucagon",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Glucagon</h3>
                    </div>
                    <div class="rx-scope" title="Emergency Medical Technician (EMT) and above – independent practice.">
                        <span class="rx-scope-badge">EMT+</span>
                        <div class="rx-scope-bar"><span style="width:20%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Hormone</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">1 mg/1 mL vial</span></div>
                </div>

                <p class="rx-moa">Glucagon stimulates glycogenolysis (the breakdown of glycogen into glucose) predominantly in the liver, increasing blood glucose levels.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Hypoglycemia; Beta‑blocker overdose; Calcium Channel Blocker overdose.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Hypoglycemia:</strong> 1 mg IM/SC.<br>
                <strong>Beta‑blocker & Calcium Channel Blocker Overdose:</strong> 1 mg IM. Administer up to 5 mg IM (at different injection sites) if additional IM glucagon is available. Repeat every 10‑15 minutes if required.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Hypoglycemia:</strong> >6 years (or >25 kg): 1 mg IM/SC; <6 years (or <25 kg): 0.5 mg IM/SC.<br>
                <strong>Beta‑blocker & Calcium Channel Blocker Overdose:</strong> >6 years (or >25 kg): 1 mg IM; <6 years (or <25 kg): 0.5 mg IM. Repeat every 10‑15 minutes if required.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Patients where glycogen stores may be depleted (see additional information).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Reported difficulty maintaining stable glucose levels for up to two weeks following administration.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However, glucagon should be administered if clinically indicated.<br>Lactation: Safety has not been established. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Patients whose glycogen stores may already be depleted: non‑diabetics, septic patients, young children, following extreme exercise, has not eaten in >12 hours, adrenal insufficiency, chronic hypoglycemia, alcohol induced hypoglycemia. Glucagon is unlikely to be effective in these patients, however glucagon may be considered if no IV access can be obtained, the patient remains significantly hypoglycemic, and/or a reduced level of consciousness is causing airway, breathing or circulatory compromise.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-17",
                shortTitle: "Glucose Paste",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Glucose 40% Oral Paste</h3>
                    </div>
                    <div class="rx-scope" title="Emergency Medical Responder (EMR) and above – independent practice.">
                        <span class="rx-scope-badge">EMR+</span>
                        <div class="rx-scope-bar"><span style="width:0%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Carbohydrate</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">Plastic tube containing 15 g glucose</span></div>
                </div>

                <p class="rx-moa">Provides glucose for cellular metabolism, raising blood glucose levels rapidly in hypoglycemia.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Hypoglycemia (RBS <70 mg/dL).</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>1 tube PO – adjusting amount of paste inserted according to space available. Repeat after 5‑10 minutes (if required).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>½ tube PO – adjusting amount of paste inserted according to space available. Repeat after 5‑10 minutes (if required).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; unresponsive patients or patients unable to swallow.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Airway occlusion in semi‑conscious patients (particularly children <2 years old).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>May cause vomiting.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However, glucose should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, glucose should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Glucose paste is not absorbed via the buccal mucosa and must be swallowed to be effective. In very young children/neonates, if the patient is able to suck, apply a small amount of glucose paste to the end of a gloved finger and allow the child to suck the paste.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-18",
                shortTitle: "GTN",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Glyceryl Trinitrate (Nitroglycerin)",
                    "lead": "Dilates veins (and coronary arteries) to cut preload and relieve ischaemic pain and pulmonary oedema. The danger is hypotension: check pressure, PDE-5 drugs and the right ventricle first.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Nitrate vasodilator"
                                ],
                                [
                                    "Presentation",
                                    "0.4 mg per spray or tablet"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes sublingual"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Ischaemic chest pain",
                                    "dose": "0.4 mg sublingual every 5 minutes",
                                    "note": "Up to 3 doses",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Acute pulmonary oedema with high BP",
                                    "dose": "0.4–0.8 mg sublingual, repeat",
                                    "note": "Higher doses or infusion per protocol",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Ischaemic chest pain with adequate blood pressure",
                                "Hypertensive pulmonary oedema"
                            ],
                            "exclude": [
                                "SBP below 90 mmHg (or 30 below baseline)",
                                "Heart rate below 50 or above 100",
                                "Right ventricular infarction",
                                "Sildenafil or vardenafil in 24 hours; tadalafil in 48 hours"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension: lie flat, fluids",
                                "Headache, flushing, dizziness",
                                "Do a right-sided ECG (V4R) in inferior STEMI first"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Spray: don't shake; under the tongue, not swallowed"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "stemiInfRv",
                                            "label": "Inferior STEMI with RV infarction",
                                            "sub": "ST elevation in V4R: no nitrates.",
                                            "lead": "V4R"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-19",
                shortTitle: "Haloperidol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Haloperidol",
                    "lead": "An antipsychotic for agitation driven by psychosis. Slower and with more side effects than droperidol or midazolam for undifferentiated agitation.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Butyrophenone antipsychotic"
                                ],
                                [
                                    "Presentation",
                                    "5 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "15–30 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Agitation from psychosis",
                                    "dose": "5 mg IM",
                                    "note": "Older adults 0.5–2 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe agitation from a known psychotic illness"
                            ],
                            "exclude": [
                                "Parkinson's disease or Lewy body dementia",
                                "Known long QT",
                                "Coma or CNS depression"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dystonia and akathisia",
                                "QT prolongation and torsades",
                                "Neuroleptic malignant syndrome (rare)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Older adults with dementia: higher risk of death and stroke – avoid unless essential"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-55",
                shortTitle: "Heparin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Heparin (unfractionated)",
                    "lead": "An anticoagulant given on some STEMI pathways before PCI or with fibrinolysis. A high-alert drug: units, not milligrams, and only with medical direction.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Anticoagulant"
                                ],
                                [
                                    "Presentation",
                                    "5,000 units/mL"
                                ],
                                [
                                    "Reversal",
                                    "Protamine (hospital)"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic, per STEMI pathway"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "STEMI for primary PCI",
                                    "dose": "70–100 units/kg IV bolus (often 5,000 units)",
                                    "note": "With fibrinolysis: 60 units/kg, maximum 4,000 units",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not indicated prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "STEMI on a pathway that uses prehospital heparin, with medical direction"
                            ],
                            "exclude": [
                                "Active bleeding or haemorrhagic stroke",
                                "Recent major trauma or surgery",
                                "Heparin-induced thrombocytopenia",
                                "Already fully anticoagulated"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Units errors: double-check every dose"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-20",
                shortTitle: "Hydrocortisone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Hydrocortisone",
                    "lead": "A fast-acting steroid with one life-saving prehospital use – adrenal crisis – and supporting roles in severe asthma and COPD. Give it early to anyone with known adrenal insufficiency who is unwell.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid (with mineralocorticoid effect)"
                                ],
                                [
                                    "Presentation",
                                    "100 mg powder or 100 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "Hours for anti-inflammatory effect"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Adrenal crisis",
                                    "dose": "100 mg IM or IV",
                                    "note": "Plus fluids; don't delay for transport",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Severe asthma or COPD exacerbation",
                                    "dose": "100 mg IV or IM",
                                    "note": "If oral steroid can't be taken",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Adrenal crisis",
                                    "dose": "Under 1 year 25 mg; 1–5 years 50 mg; 6 years or more 100 mg",
                                    "note": "IM or IV",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Severe asthma",
                                    "dose": "4 mg/kg IV (maximum 100 mg)",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Known adrenal insufficiency (Addison's, long-term steroids) with vomiting, shock or collapse",
                                "Severe asthma or COPD when oral steroid isn't possible"
                            ],
                            "exclude": [
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia",
                                "Not a first-line anaphylaxis drug: epinephrine is"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Patients with adrenal insufficiency often carry an emergency card and their own injection: help them use it"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-73",
                shortTitle: "Hydroxocobalamin",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Hydroxocobalamin (Cyanokit)</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antidote (Cyanide)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">5 g vial (powder) for reconstitution with 200 mL NS.</span></div>
                </div>

                <p class="rx-moa">Binds cyanide to form cyanocobalamin (Vitamin B12), which is excreted in the urine.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Known or suspected cyanide poisoning — e.g. smoke inhalation from an enclosed‑space fire with altered consciousness, seizures, hypotension, cardiac arrest or high lactate.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>5 g IV/IO over 15 min; a second 5 g dose may be given based on severity (max 10 g).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>70 mg/kg IV/IO over 15 min (max 5 g).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy (relative — benefit outweighs risk in life‑threatening poisoning).</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Administer through a dedicated line — incompatible with many drugs. Interferes with colorimetric lab tests and pulse oximetry.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Red discoloration of skin, mucous membranes and urine; transient hypertension; rash.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: administer in life‑threatening poisoning.<br>Lactation: no data; treatment takes priority.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Give high‑flow Oxygen and consider concurrent carbon monoxide poisoning. Take a blood sample before administration if possible.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-21",
                shortTitle: "Hyoscine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Hyoscine Butylbromide",
                    "lead": "An antispasmodic for colicky abdominal pain from bowel, biliary or renal spasm. It doesn't cross into the brain, so it doesn't sedate.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antimuscarinic antispasmodic"
                                ],
                                [
                                    "Presentation",
                                    "20 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Colicky abdominal or renal pain",
                                    "dose": "20 mg IV, IM or SC",
                                    "note": "May repeat after 30 minutes (maximum 100 mg a day)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not used prehospital in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Spasm pain: renal colic, gastroenteritis cramps, biliary colic, period pain"
                            ],
                            "exclude": [
                                "Tachyarrhythmia",
                                "Angle-closure glaucoma",
                                "Myasthenia gravis",
                                "Prostatic enlargement or urinary retention",
                                "Bowel obstruction"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, dry mouth, blurred vision",
                                "Hypotension when given IV"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-71",
                shortTitle: "Hypertonic Saline 3%",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Hypertonic Saline 3%</h3>
                    </div>
                    <div class="rx-scope" title="Advanced Paramedic (AP) and above – independent practice.">
                        <span class="rx-scope-badge">AP+</span>
                        <div class="rx-scope-bar"><span style="width:80%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Hyperosmolar Crystalloid</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">3% sodium chloride, 250 mL / 500 mL bag.</span></div>
                </div>

                <p class="rx-moa">Creates an osmotic gradient drawing water from brain tissue into the vascular space, lowering intracranial pressure and expanding plasma volume.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Severe traumatic brain injury with signs of herniation (unequal / dilated pupils, extensor posturing, Cushing’s response); symptomatic severe hyponatremia (seizures).</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>250 mL IV/IO over 10–20 min (TBI with herniation signs).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>3–5 mL/kg IV/IO over 10–20 min (max 250 mL).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known hypernatremia; no signs of raised ICP.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Use a large vein or IO; heart failure and fluid overload; repeated doses need sodium monitoring.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hypernatremia; fluid overload; phlebitis.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: administer if clinically indicated.<br>Lactation: compatible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Hypertonic saline is a bridge to definitive neurosurgical care. Maintain SpO2 ≥94%, normocapnia (EtCO2 35–40 mmHg) and SBP ≥110 mmHg in TBI.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-66",
                shortTitle: "Ibuprofen",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ibuprofen",
                    "lead": "An oral anti-inflammatory for mild to moderate pain and fever. Combine with paracetamol for better effect – but not in bleeding, kidney trouble or dehydration.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "NSAID"
                                ],
                                [
                                    "Presentation",
                                    "200 mg and 400 mg tablets; 100 mg/5 mL suspension"
                                ],
                                [
                                    "Onset",
                                    "30–60 minutes"
                                ],
                                [
                                    "Scope",
                                    "All levels, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Mild to moderate pain or fever",
                                    "dose": "400 mg orally",
                                    "note": "Check NSAID use in the last 6 hours",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Pain or fever (over 3 months and 5 kg)",
                                    "dose": "10 mg/kg orally",
                                    "note": "Maximum 400 mg",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Musculoskeletal pain, minor trauma, fever"
                            ],
                            "exclude": [
                                "NSAID allergy or aspirin-sensitive asthma",
                                "Active bleeding, peptic ulcer, anticoagulants",
                                "Kidney disease, dehydration, shock",
                                "Third trimester of pregnancy",
                                "Suspected major haemorrhage"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Indigestion, GI bleeding",
                                "Bronchospasm in sensitive asthma"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-56",
                shortTitle: "Ipratropium Bromide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Ipratropium Bromide",
                    "lead": "An anticholinergic bronchodilator added to salbutamol for moderate to severe asthma and COPD attacks. Never on its own as the rescue drug.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Anticholinergic bronchodilator"
                                ],
                                [
                                    "Presentation",
                                    "250 mcg/2 mL and 500 mcg/2 mL nebules"
                                ],
                                [
                                    "Onset",
                                    "15–20 minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe bronchospasm",
                                    "dose": "500 mcg nebulised with salbutamol",
                                    "note": "Every 20 minutes, up to 3 doses",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Moderate to severe asthma",
                                    "dose": "Under 12 years 250 mcg; 12 years or more 500 mcg",
                                    "note": "With salbutamol; up to 3 doses",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe asthma or COPD exacerbation, with a beta-2 agonist"
                            ],
                            "exclude": [
                                "Allergy to ipratropium or atropine",
                                "Combivent already given (contains ipratropium)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dry mouth, blurred vision; keep mist out of the eyes (glaucoma)",
                                "Urinary retention"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-22",
                shortTitle: "Ketamine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ketamine",
                    "lead": "A dissociative drug with three doses for three jobs: low dose for pain, a moderate dose for severe agitation, and a full dose for RSI induction. Breathing and blood pressure are usually preserved.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Dissociative anaesthetic (NMDA antagonist)"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL (500 mg/10 mL); 10 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "1 minute IV; 3–5 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic (analgesia); critical care (RSI)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Analgesia",
                                    "dose": "0.1–0.3 mg/kg IV slowly",
                                    "note": "Or 0.5–1 mg/kg intranasal",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Severe agitation",
                                    "dose": "4–5 mg/kg IM, or 1–2 mg/kg IV",
                                    "note": "Be ready to manage the airway",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "RSI induction",
                                    "dose": "1–2 mg/kg IV",
                                    "note": "Useful in shock and bronchospasm",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Analgesia",
                                    "dose": "0.1–0.3 mg/kg IV or 1 mg/kg intranasal",
                                    "note": "Per protocol",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "RSI induction",
                                    "dose": "1–2 mg/kg IV",
                                    "note": "Critical care",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe pain, especially trauma and burns",
                                "Severe acute behavioural disturbance",
                                "RSI induction, especially in hypotension or asthma"
                            ],
                            "exclude": [
                                "Allergy",
                                "Uncontrolled severe hypertension or acute coronary syndrome (relative)",
                                "Active psychosis for analgesia (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Laryngospasm, hypersalivation",
                                "Emergence reactions: calm environment; small benzodiazepine dose if needed",
                                "Vomiting; rising BP and HR"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-43",
                shortTitle: "Ketorolac",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ketorolac",
                    "lead": "An injectable anti-inflammatory for renal colic and musculoskeletal pain without sedation. Low doses work as well as high ones.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "NSAID"
                                ],
                                [
                                    "Presentation",
                                    "30 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "30 minutes; full effect 1–2 hours"
                                ],
                                [
                                    "Scope",
                                    "Advanced EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate pain (renal colic, musculoskeletal, migraine)",
                                    "dose": "15 mg IV or 30 mg IM",
                                    "note": "Single dose; 15 mg IV is as effective as higher doses",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for prehospital use in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Renal colic, musculoskeletal pain, migraine"
                            ],
                            "exclude": [
                                "NSAID allergy or NSAID-induced asthma",
                                "Bleeding, anticoagulants, peptic ulcer",
                                "Kidney disease, dehydration",
                                "Third trimester of pregnancy",
                                "Age under 17"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding risk",
                                "Older adults: kidney injury"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-23",
                shortTitle: "Labetalol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Labetalol",
                    "lead": "A combined alpha- and beta-blocker that lowers dangerous blood pressure smoothly. Prehospital use is mainly severe hypertension in pre-eclampsia.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Alpha-1 and beta-blocker"
                                ],
                                [
                                    "Presentation",
                                    "100 mg/20 mL (5 mg/mL)"
                                ],
                                [
                                    "Onset",
                                    "5–10 minutes IV"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe hypertension in pregnancy (160/110 mmHg or more)",
                                    "dose": "20 mg IV over 2 minutes",
                                    "note": "Then 40 mg after 10 minutes, then 80 mg every 10 minutes; maximum 300 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe hypertension in pre-eclampsia or eclampsia, per protocol"
                            ],
                            "exclude": [
                                "Asthma or active bronchospasm",
                                "Bradycardia, 2nd or 3rd degree block",
                                "Acute heart failure or shock",
                                "Cocaine or stimulant toxicity"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension: aim to lower, not normalise",
                                "Bradycardia; dizziness; nausea",
                                "Neonatal bradycardia after delivery"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Magnesium is still the drug for eclamptic seizures"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-44",
                shortTitle: "Lidocaine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Lidocaine",
                    "lead": "An alternative antiarrhythmic for shock-refractory VF or pulseless VT, and the local anaesthetic that makes IO infusion bearable for conscious patients.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Class Ib antiarrhythmic; local anaesthetic"
                                ],
                                [
                                    "Presentation",
                                    "2% (100 mg/5 mL)"
                                ],
                                [
                                    "Toxicity signs",
                                    "Perioral numbness, tinnitus, confusion, seizures"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Refractory VF or pulseless VT (alternative to amiodarone)",
                                    "dose": "1–1.5 mg/kg IV/IO",
                                    "note": "Then 0.5–0.75 mg/kg; maximum total 3 mg/kg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "IO pain in a conscious patient",
                                    "dose": "40 mg (2 mL of 2%) slowly into the IO",
                                    "note": "Wait about 60 seconds, flush, then 20 mg more if needed",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Refractory VF or pulseless VT",
                                    "dose": "1 mg/kg IV/IO",
                                    "note": "Alternative to amiodarone",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "IO pain",
                                    "dose": "0.5 mg/kg slowly into the IO",
                                    "note": "Maximum 40 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Shock-refractory VF or pulseless VT when amiodarone is unavailable",
                                "IO infusion pain in conscious patients"
                            ],
                            "exclude": [
                                "Allergy to amide local anaesthetics",
                                "High-grade AV block without a pacemaker",
                                "Bradycardia with ventricular escape beats"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Reduce dose in liver disease, heart failure and older adults",
                                "Seizures at toxic doses"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "pulselessVt",
                                            "label": "Pulseless VT",
                                            "sub": "Shock-refractory: amiodarone or lidocaine.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-61",
                shortTitle: "Lorazepam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Lorazepam",
                    "lead": "A first-line IV benzodiazepine for status epilepticus with a longer action than midazolam. It must be refrigerated; without IV access, use midazolam IM or intranasally.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Benzodiazepine"
                                ],
                                [
                                    "Presentation",
                                    "2 mg/mL or 4 mg/mL (refrigerated)"
                                ],
                                [
                                    "Onset",
                                    "2–3 minutes IV; lasts hours"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Seizure lasting 5 minutes or more",
                                    "dose": "4 mg IV over 2 minutes (0.1 mg/kg)",
                                    "note": "Repeat once after 5–10 minutes",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Seizure",
                                    "dose": "0.1 mg/kg IV/IO",
                                    "note": "Maximum 4 mg; repeat once",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Status epilepticus with IV access",
                                "Severe agitation or stimulant toxicity (per protocol)"
                            ],
                            "exclude": [
                                "Breathing depression without support",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression and hypotension",
                                "Additive with opioids and alcohol"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-24",
                shortTitle: "Magnesium Sulphate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Magnesium Sulfate",
                    "lead": "Three emergencies: severe asthma that isn't responding, eclamptic seizures, and torsades de pointes. Give it slowly unless the patient is in arrest.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Electrolyte"
                                ],
                                [
                                    "Presentation",
                                    "50% (5 g/10 mL); 500 mg/2 mL"
                                ],
                                [
                                    "Toxicity",
                                    "Loss of knee reflexes, respiratory rate below 12/min, low BP – antidote calcium"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe or life-threatening asthma",
                                    "dose": "2 g IV over 20 minutes",
                                    "note": "",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Eclampsia",
                                    "dose": "4–6 g IV over 20–30 minutes",
                                    "note": "Or 10 g IM (5 g in each buttock) if no IV (WHO)",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Torsades de pointes",
                                    "dose": "1–2 g IV over 5–20 minutes",
                                    "note": "Push in pulseless torsades",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe asthma",
                                    "dose": "40 mg/kg IV over 20 minutes",
                                    "note": "Maximum 2 g",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Torsades de pointes",
                                    "dose": "25–50 mg/kg IV/IO",
                                    "note": "Maximum 2 g",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Life-threatening asthma not responding to bronchodilators",
                                "Eclamptic seizure or severe pre-eclampsia",
                                "Torsades de pointes"
                            ],
                            "exclude": [
                                "Heart block",
                                "Myasthenia gravis",
                                "Severe kidney failure (risk of toxicity)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension and flushing if fast",
                                "Respiratory depression and loss of reflexes: stop, give calcium gluconate 1 g",
                                "Same line as epinephrine: may precipitate"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "torsades",
                                            "label": "Torsades de pointes",
                                            "sub": "Magnesium 1–2 g.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-25",
                shortTitle: "Methoxyflurane (Penthrox inhaler)",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Methoxyflurane (Penthrox)",
                    "lead": "A hand-held inhaled analgesic the patient controls: quick to start, quick to wear off. It needs a cooperative patient and healthy kidneys.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Inhaled anaesthetic (low dose)"
                                ],
                                [
                                    "Presentation",
                                    "3 mL vial with inhaler"
                                ],
                                [
                                    "Onset",
                                    "6–10 breaths; wears off within minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe trauma or procedural pain",
                                    "dose": "3 mL, self-administered",
                                    "note": "One more 3 mL if needed; maximum 6 mL a day",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Pain, child able to self-administer",
                                    "dose": "3 mL (single vial)",
                                    "note": "Where licensed; switch to other analgesia when available",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate to severe pain in a cooperative patient"
                            ],
                            "exclude": [
                                "Can't follow instructions or hold the inhaler",
                                "Kidney or severe liver disease",
                                "Personal or family history of malignant hyperthermia",
                                "Pre-eclampsia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dizziness, drowsiness, headache",
                                "Ventilate the vehicle"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-58",
                shortTitle: "Methylprednisolone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Methylprednisolone",
                    "lead": "A potent IV steroid for severe asthma or COPD attacks when oral steroids aren't possible. One systemic steroid only, and never before epinephrine.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid"
                                ],
                                [
                                    "Presentation",
                                    "40 mg and 125 mg powder vials"
                                ],
                                [
                                    "Onset",
                                    "Hours"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe asthma or COPD exacerbation",
                                    "dose": "125 mg IV or IM",
                                    "note": "Give slowly (at least 1 minute)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe asthma",
                                    "dose": "1–2 mg/kg IV or IM",
                                    "note": "Maximum 125 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe asthma or COPD when oral steroid can't be taken"
                            ],
                            "exclude": [
                                "Allergy",
                                "Systemic fungal infection",
                                "A second systemic steroid"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia, agitation",
                                "Arrhythmia with rapid large IV doses"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-26",
                shortTitle: "Metoclopramide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Metoclopramide",
                    "lead": "A dopamine-blocking antiemetic that also speeds gastric emptying. Watch for dystonic reactions, especially in young people.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Dopamine antagonist antiemetic"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Nausea and vomiting",
                                    "dose": "10 mg slow IV over 3 minutes, or IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Nausea (only if others unsuitable)",
                                    "dose": "0.1–0.15 mg/kg slow IV or IM",
                                    "note": "Not under 1 year",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Nausea and vomiting, including migraine"
                            ],
                            "exclude": [
                                "Bowel obstruction or GI bleeding",
                                "Parkinson's disease",
                                "Phaeochromocytoma",
                                "Epilepsy (relative)",
                                "Under 1 year"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Dystonia and akathisia: diphenhydramine",
                                "Drowsiness, hypotension if fast"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-51",
                shortTitle: "Metoprolol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Metoprolol",
                    "lead": "A cardioselective beta-blocker for rate control of stable AF or flutter. Avoid it in heart failure, bronchospasm, low blood pressure and stimulant toxicity.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-1 selective blocker"
                                ],
                                [
                                    "Presentation",
                                    "5 mg/5 mL"
                                ],
                                [
                                    "Antidote",
                                    "Glucagon for beta-blocker toxicity"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Rate control of stable AF or flutter; refractory narrow SVT",
                                    "dose": "2.5–5 mg IV over 2 minutes",
                                    "note": "Repeat every 5 minutes; maximum 15 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not recommended prehospital."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable AF or flutter with fast ventricular rate",
                                "Narrow-complex SVT not responding to adenosine"
                            ],
                            "exclude": [
                                "SBP below 100 mmHg or HR below 60",
                                "2nd or 3rd degree block",
                                "Acute heart failure or cardiogenic shock",
                                "Acute bronchospasm",
                                "Cocaine or stimulant toxicity",
                                "Recent IV calcium-channel blocker"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bradycardia, block, hypotension",
                                "Masks hypoglycaemia warning signs",
                                "Monitor and recheck BP between doses"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "afibRvr",
                                            "label": "AF with fast rate",
                                            "sub": "Stable: beta-blocker or diltiazem.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-27",
                shortTitle: "Midazolam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Midazolam",
                    "lead": "The benzodiazepine for every route: IM and intranasal for seizures without IV access, and small IV doses for sedation. Have the bag-mask ready.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Benzodiazepine"
                                ],
                                [
                                    "Presentation",
                                    "5 mg/mL (also 1 mg/mL)"
                                ],
                                [
                                    "Onset",
                                    "1–3 minutes IV; 5–10 minutes IM/IN"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Seizure lasting 5 minutes or more",
                                    "dose": "10 mg IM (over 40 kg), or 0.2 mg/kg intranasal (maximum 10 mg)",
                                    "note": "IV 0.1–0.2 mg/kg; repeat once after 5–10 minutes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Sedation or agitation",
                                    "dose": "1–5 mg IV, titrated; 5–10 mg IM",
                                    "note": "Lower in older adults",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Seizure",
                                    "dose": "5 mg IM (13–40 kg), or 0.2 mg/kg intranasal (maximum 10 mg)",
                                    "note": "IV 0.1–0.2 mg/kg; repeat once",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Seizure lasting 5 minutes or more",
                                "Severe agitation",
                                "Procedural sedation (with analgesia)"
                            ],
                            "exclude": [
                                "Breathing depression without support",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: ETCO₂ and bag-mask",
                                "Hypotension, especially with opioids",
                                "Paradoxical agitation"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-78",
                shortTitle: "Misoprostol",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Misoprostol</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Uterotonic (Prostaglandin E1 Analog)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">200 mcg tablets.</span></div>
                </div>

                <p class="rx-moa">Prostaglandin analog that stimulates uterine contraction; heat‑stable and does not need IV access.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Postpartum hemorrhage when Oxytocin is unavailable or ineffective.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>800 mcg sublingual (4 × 200 mcg tablets) once.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not applicable.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Undelivered fetus (including possible twin); known allergy to prostaglandins.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Asthma (rare bronchospasm); cardiovascular disease.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Shivering; fever; nausea; diarrhea.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: indicated only after delivery of the baby.<br>Lactation: small amounts excreted; short‑term use compatible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Shivering and fever are common and transient after a dose. Continue fundal massage and give Tranexamic Acid per PPH protocol.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-28",
                shortTitle: "Morphine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Morphine",
                    "lead": "The classic opioid for severe pain: titrate small IV doses to effect. It drops blood pressure more than fentanyl and lasts longer.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Opioid agonist"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "5 minutes IV; lasts 3–5 hours"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "2.5–5 mg IV every 5 minutes, titrated (0.1 mg/kg)",
                                    "note": "Typical maximum 10–20 mg per protocol",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV access",
                                    "dose": "5–10 mg IM",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "0.1 mg/kg IV, titrated",
                                    "note": "Maximum single dose 5 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe pain from injury, burns, ischaemia"
                            ],
                            "exclude": [
                                "Breathing depression or SBP below 90 mmHg",
                                "Allergy",
                                "Head injury with reduced consciousness (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: naloxone ready",
                                "Hypotension, nausea, itching",
                                "Older adults and kidney disease: smaller doses"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-29",
                shortTitle: "Naloxone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Naloxone",
                    "lead": "Reverses opioid breathing depression. Ventilate first, then titrate to adequate breathing – not to full wakefulness – and watch for re-sedation because it wears off first.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Opioid antagonist"
                                ],
                                [
                                    "Presentation",
                                    "0.4 mg/mL; 4 mg intranasal spray"
                                ],
                                [
                                    "Onset",
                                    "1–2 minutes IV; lasts 30–90 minutes"
                                ],
                                [
                                    "Scope",
                                    "All levels (spray); EMT and above (injection)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Opioid breathing depression",
                                    "dose": "0.04–0.4 mg IV, titrated every 2–3 minutes",
                                    "note": "Up to 2 mg, then think of other causes",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "No IV",
                                    "dose": "0.4 mg IM or 4 mg intranasal spray",
                                    "note": "Repeat every 2–3 minutes as needed",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Opioid breathing depression",
                                    "dose": "0.01 mg/kg, titrated; up to 0.1 mg/kg for full reversal",
                                    "note": "Maximum 2 mg per dose",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Opioid overdose with slow or inadequate breathing"
                            ],
                            "exclude": [
                                "Allergy",
                                "Newborn resuscitation (ventilate instead)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Precipitated withdrawal: vomiting, agitation",
                                "Re-sedation with long-acting opioids: hospital observation",
                                "Pulmonary oedema (rare)"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Opioid slow breathing",
                                            "href": "../pages/respiratory-patterns.html?p=bradypnea",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-30",
                shortTitle: "Nefopam",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Nefopam",
                    "lead": "A non-opioid, non-NSAID analgesic for moderate pain where those drugs are unsuitable. Not available in every country.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Centrally acting non-opioid analgesic"
                                ],
                                [
                                    "Presentation",
                                    "20 mg/2 mL"
                                ],
                                [
                                    "Onset",
                                    "15–20 minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "20 mg IV infusion over 15 minutes",
                                    "note": "Diluted in 100 mL saline; once only",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not for children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Moderate pain when opioids or NSAIDs are unsuitable"
                            ],
                            "exclude": [
                                "Epilepsy or seizures",
                                "Acute MI or ischaemic chest pain",
                                "Severe kidney disease",
                                "Glaucoma or urinary retention",
                                "Children"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Nausea, sweating, tachycardia, dry mouth",
                                "Same line as diclofenac can precipitate"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-67",
                shortTitle: "Nitrous Oxide (Entonox)",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Nitrous Oxide / Oxygen (Entonox)",
                    "lead": "Self-administered 50:50 gas for fast, short pain relief – splinting, labour, burns dressing. It expands gas spaces, so not with pneumothorax, diving illness or bowel obstruction.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Inhaled analgesic gas"
                                ],
                                [
                                    "Presentation",
                                    "50% nitrous oxide / 50% oxygen with demand valve"
                                ],
                                [
                                    "Onset",
                                    "2–3 minutes; wears off in minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "Self-administered via demand valve until comfortable",
                                    "note": "Patient holds the mouthpiece",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Pain, child able to self-administer (usually 5 years or more)",
                                    "dose": "Self-administered",
                                    "note": "",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Trauma, burns, labour and procedural pain"
                            ],
                            "exclude": [
                                "Reduced consciousness or can't self-administer",
                                "Pneumothorax, chest injury with suspected air",
                                "Diving illness, bowel obstruction, middle-ear or sinus problems",
                                "Head injury with reduced GCS",
                                "First 16 weeks of pregnancy (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Light-headedness, nausea",
                                "Below 10 °C gases separate: invert the cylinder several times before use",
                                "Ventilate the vehicle"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-49",
                shortTitle: "Norepinephrine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Norepinephrine",
                    "lead": "The first-choice vasopressor for shock that persists after fluids, including after ROSC. Always an infusion, never an undiluted bolus.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Vasopressor (alpha-1 more than beta-1)"
                                ],
                                [
                                    "Presentation",
                                    "4 mg/4 mL; often 4 mg in 250 mL (16 mcg/mL)"
                                ],
                                [
                                    "Target",
                                    "MAP 65 mmHg or more (adults)"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic, critical care"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Shock after fluids; post-ROSC hypotension",
                                    "dose": "0.1–0.5 mcg/kg/min IV/IO infusion (about 2–20 mcg/min)",
                                    "note": "Start low; titrate to MAP 65 mmHg or more",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Fluid-refractory shock",
                                    "dose": "0.05–0.5 mcg/kg/min IV/IO",
                                    "note": "Titrate to perfusion and age-appropriate BP",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Septic, cardiogenic or neurogenic shock after fluids",
                                "Hypotension after ROSC"
                            ],
                            "exclude": [
                                "Uncorrected hypovolaemia as the only treatment",
                                "Undiluted bolus"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Extravasation necrosis: secure large vein or IO",
                                "Hypertension, reflex bradycardia, arrhythmias",
                                "Label the infusion; double-check concentration and rate"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-37",
                shortTitle: "Normal Saline",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Sodium Chloride 0.9% (Normal Saline)</h3>
                    </div>
                    <div class="rx-scope" title="Emergency Medical Technician (EMT) and above – independent practice.">
                        <span class="rx-scope-badge">EMT+</span>
                        <div class="rx-scope-bar"><span style="width:20%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Isotonic Crystalloid</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">250 mL bottle or bag; 100 mL bottle</span></div>
                </div>

                <p class="rx-moa">Replaces intravascular volume to maintain organ perfusion.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Maintenance of end organ perfusion as per appropriate CPG; Hyperglycemia; Flushing of IV/IO lines; Medication dilution.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>As per appropriate CPG.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>As per appropriate CPG.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy to normal saline preparation; Pulmonary edema / Fluid overload.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Cardiovascular disease; Heart Failure; Renal Failure.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Fluid overload.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safe to use in pregnancy.<br>Lactation: Safe to use in lactation.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Nil.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-45",
                shortTitle: "Ondansetron",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Ondansetron",
                    "lead": "A non-sedating antiemetic for almost any cause of nausea. The dissolving tablet works without an IV. Caution with long QT.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "5-HT3 antagonist"
                                ],
                                [
                                    "Presentation",
                                    "4 mg/2 mL; 4 mg dissolving tablet"
                                ],
                                [
                                    "Onset",
                                    "Minutes IV; 15–30 minutes ODT"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Nausea and vomiting",
                                    "dose": "4 mg IV over 2–5 minutes, IM or ODT",
                                    "note": "May repeat once (maximum 8 mg)",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "IV",
                                    "dose": "0.1 mg/kg",
                                    "note": "Maximum 4 mg",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Dissolving tablet",
                                    "dose": "8–15 kg 2 mg; 15–30 kg 4 mg; over 30 kg 4–8 mg",
                                    "note": "",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Nausea and vomiting from any cause"
                            ],
                            "exclude": [
                                "Congenital long QT",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "QT prolongation with other QT drugs or low potassium or magnesium",
                                "Headache, constipation"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-31",
                shortTitle: "Oxygen",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Oxygen",
                    "lead": "Treat hypoxaemia, not breathlessness. Titrate to a target saturation; too much oxygen harms patients with CO₂ retention and after cardiac arrest, stroke and MI.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Medical gas"
                                ],
                                [
                                    "Presentation",
                                    "Cylinders (colour codes vary by country); concentrators"
                                ],
                                [
                                    "Targets",
                                    "SpO₂ 94–98%; 88–92% if at risk of CO₂ retention"
                                ],
                                [
                                    "Scope",
                                    "All levels"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Hypoxaemia",
                                    "dose": "Titrate to SpO₂ 94–98%",
                                    "note": "Nasal cannula, mask or non-rebreather as needed",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "COPD or other CO₂ retainers",
                                    "dose": "Titrate to SpO₂ 88–92%",
                                    "note": "Venturi mask 24–28% where available",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Carbon monoxide, cardiac arrest, critical illness",
                                    "dose": "High-flow (15 L/min) or 100%",
                                    "note": "Titrate after ROSC",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Hypoxaemia",
                                    "dose": "Titrate to SpO₂ 94–98%",
                                    "note": "Blow-by if a mask upsets the child",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Newborn resuscitation",
                                    "dose": "Start with 21% (35 weeks or more)",
                                    "note": "21–30% under 35 weeks; titrate to minute targets",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "SpO₂ below target",
                                "Shock, carbon monoxide, cardiac arrest, major trauma (initially high flow)"
                            ],
                            "exclude": [
                                "Routine oxygen for normal saturations (MI, stroke)",
                                "Paraquat or bleomycin lung injury (titrate low)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "CO₂ retention in COPD: drowsiness, rising ETCO₂",
                                "Fire risk: no smoking, no grease"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "O₂ duration calculator",
                                            "sub": "Cylinder time remaining",
                                            "href": "../pages/Carevent.html",
                                            "icon": "clock"
                                        },
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-75",
                shortTitle: "Oxytocin",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Oxytocin</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Uterotonic Hormone</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">10 units/mL ampule.</span></div>
                </div>

                <p class="rx-moa">Stimulates uterine smooth muscle contraction, compressing uterine blood vessels and reducing postpartum bleeding.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Postpartum hemorrhage; prophylaxis after delivery of the baby once a second fetus is excluded.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>10 units IM; or 10–40 units in 1,000 mL NS IV infusion titrated to uterine tone and bleeding.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not applicable.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Undelivered fetus (including possible twin); known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Rapid IV bolus causes hypotension and tachycardia — avoid. Pre‑eclampsia; cardiovascular disease.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Nausea; vomiting; hypotension; tachycardia; uterine cramping.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: indicated only after delivery of the baby.<br>Lactation: compatible (promotes milk let‑down).</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Combine with fundal massage, bladder emptying and Tranexamic Acid for PPH. Always palpate the abdomen to exclude a second fetus before administration.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-32",
                shortTitle: "Paracetamol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Paracetamol (Acetaminophen)",
                    "lead": "A safe first step for pain and fever, and a useful partner to opioids and NSAIDs. Check what's already been taken today.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Non-opioid analgesic and antipyretic"
                                ],
                                [
                                    "Presentation",
                                    "500 mg tablets; 125 mg and 250 mg suppositories; 1 g/100 mL IV"
                                ],
                                [
                                    "Onset",
                                    "30–60 minutes orally; 5–10 minutes IV"
                                ],
                                [
                                    "Scope",
                                    "All levels (oral); paramedic (IV)"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Pain or fever above 38 °C",
                                    "dose": "1 g orally or IV over 15 minutes",
                                    "note": "15 mg/kg if under 50 kg; maximum 4 g a day",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Oral or rectal",
                                    "dose": "15 mg/kg",
                                    "note": "Maximum 1 g per dose",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "IV",
                                    "dose": "15 mg/kg (7.5 mg/kg if under 10 kg)",
                                    "note": "Over 15 minutes, by pump or syringe",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Mild to severe pain (with other analgesics)",
                                "Fever above 38 °C with discomfort"
                            ],
                            "exclude": [
                                "Paracetamol in the last 4 hours, or the daily maximum reached",
                                "Severe liver disease",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension with fast IV infusion",
                                "Dosing errors in small children: use a pump or syringe"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-33",
                shortTitle: "Pethidine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Pethidine (Meperidine)",
                    "lead": "An older opioid now rarely first choice: its metabolite can cause seizures and it interacts dangerously with MAO inhibitors. Use only where protocol still lists it.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Opioid agonist"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "5 minutes IV; 10–15 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Paramedic, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Moderate to severe pain",
                                    "dose": "25–50 mg slow IV, or 25–100 mg IM",
                                    "note": "Maximum 400 mg a day",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe pain",
                                    "dose": "0.5–1 mg/kg IM",
                                    "note": "Only per protocol; prefer other opioids",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Severe pain where other opioids are unavailable"
                            ],
                            "exclude": [
                                "MAO inhibitors in the last 2 weeks (serotonin syndrome)",
                                "Breathing depression or SBP below 90 mmHg",
                                "Kidney disease or seizures (metabolite toxicity)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Breathing depression: naloxone ready",
                                "Tremor, twitching, seizures",
                                "Hypotension"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-74",
                shortTitle: "Pralidoxime",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Pralidoxime (2‑PAM)</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antidote (Cholinesterase Reactivator)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">1 g vial; 600 mg auto‑injector (DuoDote / Mark I kit with Atropine).</span></div>
                </div>

                <p class="rx-moa">Reactivates acetylcholinesterase inhibited by organophosphates before the enzyme–toxin bond ‘ages’, reversing nicotinic effects (muscle weakness, fasciculations).</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Organophosphate insecticide or nerve agent poisoning with moderate to severe symptoms, given with Atropine.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>30 mg/kg (1–2 g) IV over 15–30 min, or 600 mg IM auto‑injector (up to 3 for severe symptoms).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>25–50 mg/kg IV over 15–30 min (max 2 g), or IM per auto‑injector weight guidance.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy (relative in life‑threatening poisoning).</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Rapid IV administration causes laryngospasm, muscle rigidity and tachycardia. Renal impairment. Not effective for carbamate poisoning alone.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Blurred vision; dizziness; hypertension; tachycardia; muscle weakness.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: treatment of poisoning takes priority.<br>Lactation: no data; treatment takes priority.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Atropine treats the muscarinic ‘wet’ signs and is titrated to dry secretions; Pralidoxime treats muscle weakness. Decontaminate and protect crew with PPE first.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-57",
                shortTitle: "Prednisolone",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Prednisolone",
                    "lead": "The standard oral steroid for asthma and COPD attacks and an alternative for croup. Effect starts in hours, so bronchodilators continue.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Corticosteroid"
                                ],
                                [
                                    "Presentation",
                                    "5 mg tablets; 5 mg/5 mL and 15 mg/5 mL oral solution"
                                ],
                                [
                                    "Onset",
                                    "4–6 hours"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Asthma or COPD exacerbation",
                                    "dose": "40–50 mg orally",
                                    "note": "Single daily dose",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Asthma",
                                    "dose": "1–2 mg/kg orally",
                                    "note": "Maximum 40 mg",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "Croup",
                                    "dose": "1 mg/kg orally",
                                    "note": "Dexamethasone preferred",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Asthma, COPD or croup in a patient who can swallow"
                            ],
                            "exclude": [
                                "Unable to swallow or protect the airway",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hyperglycaemia",
                                "Mood changes, nausea"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-52",
                shortTitle: "Procainamide",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Procainamide",
                    "lead": "An option for stable monomorphic wide-complex tachycardia and AF with pre-excitation (WPW). Slow infusion with constant QRS and BP monitoring.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Class Ia antiarrhythmic"
                                ],
                                [
                                    "Presentation",
                                    "1 g/10 mL (100 mg/mL) for dilution"
                                ],
                                [
                                    "Stop when",
                                    "Arrhythmia stops, hypotension, QRS widens over 50%, or 17 mg/kg given"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Stable monomorphic VT; AF with WPW",
                                    "dose": "20–50 mg/min IV infusion",
                                    "note": "Maximum 17 mg/kg; maintenance 1–4 mg/min",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Stable wide-complex tachycardia",
                                    "dose": "15 mg/kg IV/IO over 30–60 minutes",
                                    "note": "With expert consultation",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Stable regular monomorphic wide-complex tachycardia",
                                "AF with pre-excitation (WPW)"
                            ],
                            "exclude": [
                                "Long QT or torsades",
                                "2nd or 3rd degree block without a pacemaker",
                                "With amiodarone or other QT-prolonging drugs",
                                "Heart failure (relative)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension",
                                "QRS and QT widening; torsades"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "vt",
                                            "label": "Monomorphic VT",
                                            "sub": "Stable: procainamide or amiodarone.",
                                            "lead": "II"
                                        },
                                        {
                                            "ecg": "torsades",
                                            "label": "Torsades de pointes",
                                            "sub": "Never procainamide: give magnesium.",
                                            "lead": "II"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-46",
                shortTitle: "Promethazine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Promethazine",
                    "lead": "A sedating antihistamine-antiemetic for nausea that hasn't responded to others. Give it IM: IV extravasation or arterial injection causes severe tissue damage.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Phenothiazine antihistamine"
                                ],
                                [
                                    "Presentation",
                                    "25 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "20 minutes IM"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Refractory nausea and vomiting",
                                    "dose": "12.5–25 mg deep IM",
                                    "note": "IV only diluted into a free-running large vein",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Nausea, 2 years or older",
                                    "dose": "0.25–0.5 mg/kg IM",
                                    "note": "Maximum 25 mg",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Nausea not responding to other antiemetics",
                                "Allergic itch (adjunct)"
                            ],
                            "exclude": [
                                "Children under 2 years (fatal respiratory depression)",
                                "Severe CNS depression",
                                "IV push into small veins"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Sedation – affects neuro assessment",
                                "Hypotension, dystonia",
                                "Tissue injury with IV"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-65",
                shortTitle: "Propofol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Propofol",
                    "lead": "A short-acting sedative for sedation after intubation in critical care transport, and induction in stable patients. It drops blood pressure and gives no pain relief.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Sedative-hypnotic"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL emulsion"
                                ],
                                [
                                    "Onset",
                                    "30 seconds; lasts minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Induction (stable patient)",
                                    "dose": "1–2 mg/kg IV",
                                    "note": "Lower in older or unwell patients",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Sedation after intubation",
                                    "dose": "5–50 mcg/kg/min (0.3–3 mg/kg/h)",
                                    "note": "Pump; with analgesia",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Induction",
                                    "dose": "1–2.5 mg/kg IV",
                                    "note": "Infusion per physician",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Sedation of intubated patients",
                                "RSI induction when blood pressure is stable"
                            ],
                            "exclude": [
                                "Shock or hypotension",
                                "Allergy to propofol (egg and soy allergy are generally not a problem)"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Hypotension, apnoea, bradycardia",
                                "Strict asepsis; discard opened product after 6 hours"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-34",
                shortTitle: "Racemic Epinephrine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Racemic Epinephrine (nebulised)",
                    "lead": "Shrinks swollen airway mucosa within minutes in croup with stridor at rest. The effect wears off in about 2 hours, so the child needs observation after.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Adrenergic agonist"
                                ],
                                [
                                    "Presentation",
                                    "2.25% solution (0.5 mL nebule)"
                                ],
                                [
                                    "Alternative",
                                    "Epinephrine 1 mg/mL: 0.5 mL/kg nebulised (maximum 5 mL)"
                                ],
                                [
                                    "Scope",
                                    "EMT and above, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Upper airway swelling (post-extubation, angioedema adjunct)",
                                    "dose": "0.5 mL of 2.25% in 3 mL saline nebulised",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Croup with stridor at rest",
                                    "dose": "0.05 mL/kg of 2.25% (maximum 0.5 mL) in 3 mL saline",
                                    "note": "Or epinephrine 1 mg/mL 0.5 mL/kg (maximum 5 mL)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Croup with stridor at rest or significant distress",
                                "Upper airway swelling"
                            ],
                            "exclude": [
                                "Allergy to the preparation"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, arrhythmias",
                                "Rebound after about 2 hours: observe"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Good to know",
                            "icon": "lightbulb",
                            "items": [
                                "Give dexamethasone as well"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "PALS review",
                                            "sub": "Pediatric resuscitation",
                                            "href": "../pages/pals.html",
                                            "icon": "baby"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-35",
                shortTitle: "Ringers Lactate",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Ringers Lactate</h3>
                    </div>
                    <div class="rx-scope" title="Emergency Medical Technician (EMT) and above – independent practice.">
                        <span class="rx-scope-badge">EMT+</span>
                        <div class="rx-scope-bar"><span style="width:20%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Isotonic Crystalloid</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">250 mL bottle</span></div>
                </div>

                <p class="rx-moa">Replaces intravascular volume to maintain organ perfusion.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Maintenance of blood pressure / intravascular volume and end organ perfusion as per relevant CPG.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>Administration as per relevant CPG.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Administration as per relevant CPG. Routine administration to pediatrics should be avoided. Normal Saline is preferred.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Hypersensitivity to Ringers Lactate; pediatrics <1 month; Diabetic Ketoacidosis (DKA); hypervolemia.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Crush Injuries; Renal Failure; Liver Failure.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hyperkalemia; hypervolemia; hyponatremia.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However, Ringers Lactate should be administered when clinically indicated.<br>Lactation: Safety has not been established. However, Ringers Lactate should be administered when clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Nil.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-63",
                shortTitle: "Rocuronium",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Rocuronium",
                    "lead": "A non-depolarising paralytic for RSI with few contraindications. Paralysis lasts 30–60 minutes, so a failed airway plan must be ready – and sedation must continue.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Non-depolarising neuromuscular blocker"
                                ],
                                [
                                    "Presentation",
                                    "10 mg/mL (refrigerated)"
                                ],
                                [
                                    "Onset",
                                    "45–60 seconds at RSI dose; lasts 30–60 minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care / RSI-credentialed"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "1–1.2 mg/kg IV/IO",
                                    "note": "After induction",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Maintenance",
                                    "dose": "0.1–0.2 mg/kg IV",
                                    "note": "Only with ongoing sedation",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "1–1.2 mg/kg IV/IO",
                                    "note": "",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "RSI, especially when suxamethonium is contraindicated"
                            ],
                            "exclude": [
                                "No plan for a failed airway",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Awareness: always continue sedation and analgesia",
                                "Anaphylaxis (rare)",
                                "Sugammadex reverses it (hospital)"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-36",
                shortTitle: "Salbutamol",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Salbutamol (Albuterol)",
                    "lead": "The rescue bronchodilator. Give it early and often for wheeze in asthma, COPD and anaphylaxis – and by spacer if a nebuliser isn't available.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-2 agonist"
                                ],
                                [
                                    "Presentation",
                                    "2.5 mg/2.5 mL and 5 mg/2.5 mL nebules; 100 mcg inhaler"
                                ],
                                [
                                    "Onset",
                                    "Minutes"
                                ],
                                [
                                    "Scope",
                                    "EMT and above"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Bronchospasm (asthma, COPD, anaphylaxis)",
                                    "dose": "5 mg nebulised",
                                    "note": "Repeat every 20 minutes or back-to-back if severe; or 4–10 puffs by spacer",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Under 5 years",
                                    "dose": "2.5 mg nebulised",
                                    "note": "Or 2–6 puffs by spacer",
                                    "level": "BLS"
                                },
                                {
                                    "drug": "5 years or older",
                                    "dose": "2.5–5 mg nebulised",
                                    "note": "Or 4–10 puffs by spacer",
                                    "level": "BLS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Wheeze or bronchospasm in asthma, COPD, anaphylaxis, smoke or water inhalation"
                            ],
                            "exclude": [
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, anxiety",
                                "Hypokalaemia with repeated doses",
                                "Lactic acidosis with very frequent dosing"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-47",
                shortTitle: "Sodium Bicarbonate",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Sodium Bicarbonate",
                    "lead": "A targeted drug, not a routine arrest drug: tricyclic overdose with wide QRS, hyperkalaemia, and crush injury. Ventilate well and keep it away from calcium.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Alkalinising agent"
                                ],
                                [
                                    "Presentation",
                                    "8.4%, 50 mEq/50 mL (1 mEq/mL)"
                                ],
                                [
                                    "Mechanism",
                                    "Sodium load and alkalosis narrow the QRS; shifts potassium into cells"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "TCA overdose with QRS over 100 ms; hyperkalaemia; crush",
                                    "dose": "1–2 mEq/kg IV/IO",
                                    "note": "Repeat to narrow the QRS (pH 7.45–7.55 in hospital)",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Same indications",
                                    "dose": "1 mEq/kg IV/IO",
                                    "note": "Dilute to 4.2% for infants",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Sodium-channel blocker overdose (tricyclics) with wide QRS or arrhythmia",
                                "Severe hyperkalaemia",
                                "Crush syndrome; prolonged arrest with known acidosis or hyperkalaemia"
                            ],
                            "exclude": [
                                "Routine use in cardiac arrest",
                                "Same line as calcium or catecholamines",
                                "Hypokalaemia or alkalosis"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Ventilate: it produces CO₂",
                                "Hypokalaemia, hypernatraemia, extravasation injury"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Rhythms",
                                    "items": [
                                        {
                                            "ecg": "hyperK",
                                            "label": "Hyperkalaemia",
                                            "sub": "Calcium first, then bicarbonate and insulin-glucose in hospital.",
                                            "lead": "V3"
                                        }
                                    ]
                                },
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-64",
                shortTitle: "Succinylcholine",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Sedation, Pain & Nausea",
                    "title": "Succinylcholine (Suxamethonium)",
                    "lead": "The fastest, shortest paralytic for RSI. It raises potassium, so avoid it in hyperkalaemia, crush, old burns, spinal injury, neuromuscular disease and malignant hyperthermia.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Depolarising neuromuscular blocker"
                                ],
                                [
                                    "Presentation",
                                    "50 mg/mL (refrigerated)"
                                ],
                                [
                                    "Onset",
                                    "45–60 seconds; lasts 5–10 minutes"
                                ],
                                [
                                    "Scope",
                                    "Critical care / RSI-credentialed"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "1.5 mg/kg IV/IO (maximum 200 mg)",
                                    "note": "IM 4 mg/kg if no access",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "RSI",
                                    "dose": "2 mg/kg (infants under 10 kg); 1–1.5 mg/kg (children)",
                                    "note": "Atropine ready for bradycardia",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "RSI when there's no contraindication"
                            ],
                            "exclude": [
                                "Known or suspected hyperkalaemia (kidney failure, crush)",
                                "Burns, spinal cord injury or stroke more than 72 hours old",
                                "Neuromuscular disease",
                                "Personal or family history of malignant hyperthermia"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bradycardia (children, repeat doses)",
                                "Hyperkalaemia, fasciculations, muscle pain",
                                "Prolonged paralysis with pseudocholinesterase deficiency"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        },
                                        {
                                            "label": "Airway (chapter 3)",
                                            "sub": "Advanced airway and RSI",
                                            "href": "../chapters/c3.html",
                                            "icon": "wind"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-59",
                shortTitle: "Terbutaline",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Respiratory & Allergy",
                    "title": "Terbutaline",
                    "lead": "A subcutaneous beta-2 agonist for severe asthma when the patient can't take a nebuliser effectively. IM epinephrine is the alternative.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Beta-2 agonist"
                                ],
                                [
                                    "Presentation",
                                    "1 mg/mL"
                                ],
                                [
                                    "Onset",
                                    "5–15 minutes SC"
                                ],
                                [
                                    "Scope",
                                    "Advanced paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Severe asthma not responding to nebulised therapy",
                                    "dose": "0.25 mg SC",
                                    "note": "May repeat once after 15–30 minutes; maximum 0.5 mg in 4 hours",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Child doses",
                            "icon": "baby",
                            "rows": [
                                {
                                    "drug": "Severe asthma",
                                    "dose": "0.01 mg/kg SC (maximum 0.25 mg)",
                                    "note": "May repeat once after 15–30 minutes",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Life-threatening asthma with poor air entry"
                            ],
                            "exclude": [
                                "Tachyarrhythmia",
                                "Allergy"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Tachycardia, tremor, hypokalaemia",
                                "Continue nebulised therapy and monitor the ECG"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "Breathing patterns",
                                            "sub": "Recognise respiratory distress",
                                            "href": "../pages/respiratory-patterns.html?p=tachypnea",
                                            "icon": "wind"
                                        },
                                        {
                                            "label": "Drug calculator",
                                            "sub": "Weight-based doses and volumes",
                                            "href": "../pages/drug-calculator.html",
                                            "icon": "syringe"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-70",
                shortTitle: "Thiamine",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Metabolic / Fluids</div>
                        <h3 class="rx-name">Thiamine (Vitamin B1)</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Vitamin</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">100 mg/mL ampule.</span></div>
                </div>

                <p class="rx-moa">Essential coenzyme for carbohydrate metabolism; prevents or treats Wernicke’s encephalopathy in thiamine‑deficient patients.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Suspected Wernicke’s encephalopathy; altered consciousness or hypoglycemia in a patient with chronic alcohol use or malnutrition (before or with glucose).</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>100 mg IV slow over 5 min or IM.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not routinely indicated.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Rare anaphylaxis with IV use — give slowly and have resuscitation equipment available.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Injection‑site pain; flushing; rarely anaphylaxis.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: safe; indicated in hyperemesis gravidarum.<br>Lactation: compatible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Never delay glucose in a hypoglycemic patient to give Thiamine first — give both.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-54",
                shortTitle: "Ticagrelor",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Ticagrelor",
                    "lead": "A fast, reversible P2Y12 antiplatelet given with aspirin on STEMI pathways for primary PCI. Not with fibrinolysis, and never with another P2Y12 drug.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Antiplatelet (reversible P2Y12 inhibitor)"
                                ],
                                [
                                    "Presentation",
                                    "90 mg tablets"
                                ],
                                [
                                    "Use",
                                    "STEMI pathway with medical direction"
                                ],
                                [
                                    "Scope",
                                    "Paramedic"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "STEMI for primary PCI",
                                    "dose": "180 mg orally (2 × 90 mg)",
                                    "note": "With aspirin; keep daily aspirin at 100 mg or less afterwards",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not indicated in children."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "STEMI on a 12-lead going for primary PCI, per pathway"
                            ],
                            "exclude": [
                                "Active bleeding or previous intracranial haemorrhage",
                                "Planned fibrinolysis (use clopidogrel)",
                                "Already on another P2Y12 inhibitor",
                                "Severe liver disease"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Bleeding",
                                "Breathlessness (common, usually benign)",
                                "Bradyarrhythmias"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "AHA algorithms",
                                            "sub": "Step-by-step algorithms",
                                            "href": "../pages/aha.html",
                                            "icon": "activity"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-38",
                shortTitle: "Tranexamic Acid",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Other Medications</div>
                        <h3 class="rx-name">Tranexamic Acid</h3>
                    </div>
                    <div class="rx-scope" title="Paramedic (P) and above – independent practice.">
                        <span class="rx-scope-badge">P+</span>
                        <div class="rx-scope-bar"><span style="width:60%"></span></div>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antifibrinolytic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">500 mg/5 mL ampule</span></div>
                </div>

                <p class="rx-moa">Tranexamic Acid blocks the conversion of plasminogen to plasmin, reducing fibrinolysis, reducing blood loss.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Uncontrolled bleeding secondary to trauma; Significant bleeding associated with post partum hemorrhage.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>1000 mg IV. Once only. Administered within 3 hours since onset of bleeding. Dilute in 100 mL normal saline, administer over 10 minutes.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>15 mg/kg IV. Once only. Slow IV over 10 minutes.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; >3 hours since time of injury or start of bleeding.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>First trimester pregnancy; renal impairment; females taking oral contraceptives; concurrent thromboembolic disease process; suspected subarachnoid hemorrhage.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Thrombosis; convulsions; hypotension with rapid injections.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However tranexamic acid should be administered if clinically indicated.<br>Lactation: Safety has not been established. However tranexamic acid should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Nil.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-48",
                shortTitle: "Vasopressin",
                guide: {
                    "group": "formulary",
                    "groupLabel": "Drug Formulary · Cardiac & Resuscitation",
                    "title": "Vasopressin",
                    "lead": "A non-adrenergic vasopressor. In cardiac arrest it adds nothing over epinephrine and has left most algorithms; it's still used in refractory septic shock in critical care.",
                    "sections": [
                        {
                            "type": "table",
                            "title": "At a glance",
                            "icon": "pill",
                            "stack": true,
                            "columns": [
                                "Item",
                                "Detail"
                            ],
                            "rows": [
                                [
                                    "Class",
                                    "Vasopressor (V1 agonist)"
                                ],
                                [
                                    "Presentation",
                                    "20 units/mL"
                                ],
                                [
                                    "Arrest guidelines",
                                    "No advantage over epinephrine (AHA)"
                                ],
                                [
                                    "Scope",
                                    "Critical care, per protocol"
                                ]
                            ]
                        },
                        {
                            "type": "doses",
                            "title": "Adult doses",
                            "icon": "syringe",
                            "rows": [
                                {
                                    "drug": "Cardiac arrest (only where protocol still lists it)",
                                    "dose": "40 units IV/IO once",
                                    "note": "Instead of or with epinephrine per local protocol",
                                    "level": "ALS"
                                },
                                {
                                    "drug": "Catecholamine-refractory septic shock",
                                    "dose": "0.03 units/min infusion",
                                    "note": "Physician-directed",
                                    "level": "ALS"
                                }
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Children",
                            "icon": "baby",
                            "items": [
                                "Not established for children: epinephrine remains first-line."
                            ]
                        },
                        {
                            "type": "criteria",
                            "title": "Give or not?",
                            "icon": "circle-check-big",
                            "include": [
                                "Refractory septic shock in critical care transport",
                                "Arrest only if your protocol includes it"
                            ],
                            "exclude": [
                                "Allergy",
                                "As a replacement for good CPR and defibrillation"
                            ]
                        },
                        {
                            "type": "list",
                            "title": "Watch for",
                            "icon": "triangle-alert",
                            "items": [
                                "Peripheral and mesenteric ischaemia",
                                "Hyponatraemia with prolonged use"
                            ]
                        },
                        {
                            "type": "tools",
                            "title": "Tools",
                            "icon": "monitor",
                            "groups": [
                                {
                                    "title": "Use it",
                                    "items": [
                                        {
                                            "label": "ACLS review",
                                            "sub": "Arrest and arrhythmia algorithms",
                                            "href": "../pages/acls.html",
                                            "icon": "heart-pulse"
                                        },
                                        {
                                            "label": "Drug index",
                                            "sub": "All emergency drugs",
                                            "href": "../pages/drug-index.html",
                                            "icon": "book-open"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                flashcards: [],
                quiz: [],
                critical: []
            }
    ]
};
