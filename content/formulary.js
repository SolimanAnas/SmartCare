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
                <div class="sum-card" style="text-align:center;padding:28px 20px;">
                    <div style="font-size:2.8rem;margin-bottom:12px;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <h3 style="color:var(--primary-accent);font-size:1.2rem;margin-bottom:8px;">SmartCare Medication Formulary</h3>
                    <p style="color:var(--text-secondary);font-size:.85rem;line-height:1.6;margin-bottom:20px;">
                        Browse the complete 48-drug formulary by clinical category, or jump straight to a weight-based dose calculator for the 31 medications with pediatric dosing tables. Every drug also has its own full monograph — classification, mechanism, indications, contraindications, dosing — in the Drug 1–48 tabs above.
                    </p>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
                        <a href="../pages/drug-index.html" style="display:inline-flex;align-items:center;gap:8px;background:var(--primary-accent);color:#fff;text-decoration:none;padding:12px 24px;border-radius:12px;font-weight:700;font-size:.9rem;box-shadow:0 4px 16px rgba(0,86,179,.35);transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
                            <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#book"/></svg> Browse Full Formulary <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg>
                        </a>
                        <a href="../pages/med-index.html" style="display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--primary-accent);border:1.5px solid var(--primary-accent);text-decoration:none;padding:11px 24px;border-radius:12px;font-weight:700;font-size:.9rem;transition:opacity .2s;" onmouseover="this.style.opacity='.7'" onmouseout="this.style.opacity='1'">
                            <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#scale"/></svg> Dose Calculator
                        </a>
                    </div>
                    <div style="margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;">
                        <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">48</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Medications</div>
                        </div>
                        <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">6</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Categories</div>
                        </div>
                        <div style="background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">31</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Calculator-Ready</div>
                        </div>
                    </div>
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
                        <li><strong>Methoxyflurane (Penthrox):</strong> Pain — 3 ml inhaled, self-administered (max 6 ml/24 h adult).</li>
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
                { category: "Airway", question: "Methoxyflurane (Penthrox): Route and dose?", answer: "Inhaled, self-administered via green whistle inhaler\n3 ml per episode, max 6 ml/24 h (adult)\nPediatric: max 3 ml" },

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
                { q: "Methoxyflurane (Penthrox) maximum adult dose per episode?", options: ["3 ml", "6 ml", "9 ml", "12 ml"], correct: 1, explanation: "Maximum 6 ml per 24 hours in adults (one use of 3 ml + one repeat). Pediatric max is 3 ml total." },

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
                id: "formulary-1",
                shortTitle: "Drug 1 ActiMaris",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 1 &middot; Other Medications</div>
                        <h3 class="rx-name">ActiMaris (Wound Irrigation Solution)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Topical Antiseptic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">300 mL bottle containing: water, sea salt (1.2%), sodium hypochlorite NaOCl (0.04%) and hypochlorous acid HOCl (0.004%).</span></div>
                </div>

                <p class="rx-moa">Has an eliminating effect on wound pathogens.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Irrigation of traumatic and chronic wounds.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>Use ample amount to provide sufficient wound irrigation.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Use ample amount to provide sufficient wound irrigation.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy to ActiMaris ingredients.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>None noted.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Slight, temporary burning sensation around wound area.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Safety has not been demonstrated. Sterile water or saline is preferred if available.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Cross contamination between patients may occur with incorrect handling of ActiMaris bottle.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-2",
                shortTitle: "Drug 2 Adenosine",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 2 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Adenosine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antiarrhythmic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">6 mg/2 mL vial</span></div>
                </div>

                <p class="rx-moa">Slows impulse formation in the sinoatrial (SA) node; slows conduction time through the atrioventricular (AV) node; can interrupt reentry pathways through the AV node.<br>Onset: Immediate / Peak: 20 seconds / Duration: 40 seconds.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Chemical cardioversion of narrow complex Supraventricular Tachycardias (SVT) and regular monomorphic Ventricular Tachycardias.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>1st Dose:</strong> 6 mg rapid IV/IO push over 1‑2 seconds.<br><strong>2nd Dose:</strong> 12 mg rapid IV/IO push over 1‑2 seconds.<br>Each dose should be followed by a 10‑20 mL Normal Saline flush. Consider elevation of the arm.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>1st Dose:</strong> 0.1 mg/kg (maximum 6 mg) rapid IV/IO push over 1‑2 seconds.<br><strong>2nd Dose:</strong> 0.2 mg/kg (maximum 12 mg) rapid IV/IO push over 1‑2 seconds.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; Wolf‑Parkinson‑White Syndrome with Atrial Fibrillation; known Sick Sinus Syndrome (without a pacemaker); previous 2nd or 3rd degree heart block (without a pacemaker).</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Asthma or Severe Reactive Airway Disease (COPD).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Bradycardia / Asystole (usually transient) / VF/VT; hypotension; difficulty of breathing; chest pain; facial flushing.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal risk cannot be ruled out. Lactation: Fetal risk cannot be ruled out. Safety has not been demonstrated, however if indicated, the balance of risk is generally in favour of administration.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>At the time of conversion to normal sinus rhythm, a variety of new rhythms may appear on ECG including: short period of asystole, premature ventricular contractions, atrial premature contractions, sinus bradycardia, sinus tachycardia, skipped beats, AV nodal block.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-3",
                shortTitle: "Drug 3 Amiodarone",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 3 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Amiodarone</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antiarrhythmic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">150 mg/3 mL ampule</span></div>
                </div>

                <p class="rx-moa">Amiodarone is a wide‑acting antiarrhythmic drug, mainly classified as class III. It extends the action potential duration, lowers automaticity, and increases the refractory period in atrial, nodal, and ventricular tissues. Its electrophysiological effects reduce irregular electrical activity, slow down electrical conduction, decrease heart rate, and stabilize the SA and AV nodes. Amiodarone also slightly reduces myocardial oxygen demand by decreasing inotropy.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Cardiac Arrest (refractory VF or VT); rate control/reversion of wide complex tachyarrhythmias.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Cardiac Arrest:</strong> 1st Dose: 300 mg IV/IO push; 2nd Dose: 150 mg IV/IO push.<br><strong>Wide Complex Tachycardia:</strong> 150 mg/10 minutes. Dilute 150 mg (3 mL) of amiodarone with 100 mL D5W and administer over 10 minutes.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Cardiac Arrest:</strong> 1st Dose: 5 mg/kg IV/IO. Dose may be repeated twice (maximum 15 mg/kg total).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; VT or VF secondary to Tricyclic Antidepressant Overdose.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>None if the patient is in cardiac arrest. Otherwise: hypotension; sick sinus syndrome (without a pacemaker); previous 2nd or 3rd degree heart block (without a pacemaker).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hypotension; lightheadedness; arrhythmias – particularly bradyarrhythmias.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: fetal harm has been demonstrated. Administration is not recommended unless significantly clinically indicated. Amiodarone should not be withheld in cardiac arrest in pregnancy.<br>Lactation: May be administered during pregnancy, however the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Administer into a large vein where possible. If hypotension occurs slow or stop the rate of administration. The full dose should be administered even if the rhythm reverts to sinus rhythm (unless hypotension or bradycardia develops).</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-4",
                shortTitle: "Drug 4 Aspirin",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 4 &middot; Other Medications</div>
                        <h3 class="rx-name">Aspirin</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Platelet aggregator inhibitor</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">81 mg/tablet</span></div>
                </div>

                <p class="rx-moa">Aspirin provides antiplatelet, fever‑reducing, and pain‑relieving effects. In this formulary, aspirin is used solely for its antiplatelet properties. Aspirin blocks the cyclooxygenase enzyme, which leads to a decrease in the production of prostaglandin and thromboxane.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Acute Coronary Syndrome</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>324 mg (4 tablets). Tablets should be chewed before swallowing.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not to be administered to pediatrics.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; pregnancy; active peptic ulcer disease.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Asthma/COPD (previous history of worsening bronchospasm after NSAID administration); clinically significant active bleeding (e.g., GI bleeding) – aspirin will increase bleeding.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Increased bleeding.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: has demonstrated fetal harm in the third trimester. The likelihood of myocardial infarction or ischemia in pregnancy is very low, aspirin should generally be withheld.<br>Lactation: May be administered during pregnancy, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>If the patient has taken aspirin within the last 60 minutes: confirm the dose they have received. Administer additional Aspirin to reach a maximum total dose of 324 mg.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-5",
                shortTitle: "Drug 5 Atropine",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 5 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Atropine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Anticholinergic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">0.5 mg/5 mL (prefilled syringe)</span></div>
                </div>

                <p class="rx-moa">Atropine blocks muscarinic acetylcholine receptors reducing vagal tone. This results in: increased heart rate; drying of salivary and bronchial secretions; bronchodilation.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Compromised Bradycardia; Organophosphate poisoning.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Bradycardia:</strong> 1 mg IV every 3‑5 minutes.<br><strong>Organophosphate Poisoning:</strong> 2 mg IV Initial Dose. Double each subsequent dose (e.g., 4 mg/6 mg/8 mg) until resolution of symptoms.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Bradycardia:</strong> 0.02 mg/kg IV/IO every 3‑5 minutes.<br><strong>Organophosphate Poisoning:</strong> 0.02‑0.05 mg/kg IV/IO every 3‑5 minutes.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Myocardial Ischemia – Atropine will increase myocardial oxygen demand. Glaucoma – Atropine will increase intraocular pressure.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Tachycardia and palpitations; confusion; dry mouth; blurred vision.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated. However, atropine should not be withheld if the patient is significantly compromised. Transcutaneous pacing is preferred if available.<br>Lactation: Infant harm cannot be ruled out. Atropine may be administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Administer as a fast IV push. Slow administration may result in further (transient) bradycardia.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-6",
                shortTitle: "Drug 6 Combivent",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 6 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Combivent</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">β2 Agonist and Anticholinergic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">2.5 mL nebule containing: 2.5 mg Salbutamol, 0.5 mg Ipratropium Bromide.</span></div>
                </div>

                <p class="rx-moa">Salbutamol agonizes β2 adrenergic receptors causing bronchodilation. Ipratropium Bromide blocks the action of acetylcholine at muscarinic receptors, resulting in bronchodilation.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Asthma; COPD.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>2.5 mL nebulized (2.5 mg Salbutamol, 0.5 mg Ipratropium Bromide). Dilute dose with normal saline or sterile water to a maximum of 5 mL.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not recommended for pediatrics.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Tachycardia; palpitations; headache; dry mouth.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Combivent should be administered if clinically indicated.<br>Lactation: may be administered in lactation however, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Combivent does not have a significant role in the management of bronchospasm associated with smoke inhalation or chest infections. However, if significant bronchospasm is present, Combivent may be administered.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-7",
                shortTitle: "Drug 7 D5W",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 7 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Dextrose 5% Water (D5W)</h3>
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
                id: "formulary-8",
                shortTitle: "Drug 8 Dextrose 10%",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 8 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Dextrose 10%</h3>
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
                id: "formulary-9",
                shortTitle: "Drug 9 Diazepam",
                summary: `
            <div class="rx-card" style="--rx-cat:#8b5cf6;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 9 &middot; Neuro / Sedation</div>
                        <h3 class="rx-name">Diazepam</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Benzodiazepine</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">10 mg/2 mL ampule; 5 mg/2.5 mL rectal tube.</span></div>
                </div>

                <p class="rx-moa">Potentiates the action of the GABA neurotransmitter producing sedation and seizure inhibition.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Seizures; sedation of agitated or combative patients.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Seizures:</strong> 5 mg IV.<br><strong>Sedation:</strong> 5 mg IV. Doses should be reduced if agitation is secondary to traumatic brain injury.<br><strong>Dilution for IV/IO Administration:</strong> In a 10 mL syringe, draw up 8 mL normal saline. Add 2 mL (10 mg) of Diazepam. Solution concentration is then 1 mg/1 mL.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Seizures:</strong> 0.1 mg/kg IV/IO (max 5 mg); 0.5 mg/kg PR (maximum 20 mg).<br>Dilution as for adults.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Respiratory distress; shock and/or hypotension.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Reduced level of consciousness; respiratory depression; hypotension.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated however, diazepam should be administered if clinically indicated.<br>Lactation: Safety has not been established however, diazepam should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Diazepam is not recommended to be given IM due to its slow onset of action. Use IM midazolam. Benzodiazepines may cause airway, breathing and circulation compromise. If administered, all possible monitoring should be in place. An IV (if not available in place) should be established as soon as possible after administration.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-10",
                shortTitle: "Drug 10 Diclofenac",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 10 &middot; Pain</div>
                        <h3 class="rx-name">Diclofenac (Voltaren)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Non‑Steroidal Anti‑inflammatory (NSAID)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">75 mg/3 mL ampule</span></div>
                </div>

                <p class="rx-moa">Inhibits cyclooxygenase (COX‑1 and COX‑2) enzymes, which stops the production of prostaglandins causing a reduction in pain, inflammation, and fever.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate to Severe Pain</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>75 mg IM (into a large muscle); 75 mg IV (diluted into 100 mL normal saline, administered over 10 minutes).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not to be administered to pediatrics.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; previous reaction to NSAIDs; renal insufficiency; pregnancy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Asthma/COPD (history of a previous worsening of asthma or COPD after NSAID administration).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Pain at injection site.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated. Diclofenac should not be administered.<br>Lactation: Safety has not been established. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Intravenous administration should be avoided due to an increased risk of thromboembolic events.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-11",
                shortTitle: "Drug 11 Diphenhydramine",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 11 &middot; Other Medications</div>
                        <h3 class="rx-name">Diphenhydramine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antihistamine</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">50 mg/1 mL vial</span></div>
                </div>

                <p class="rx-moa">Blocks the action of histamine at H1 receptors reducing histamine induced symptoms (such as itching, urticaria and edema).</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate to Severe Allergic Reactions / Anaphylaxis.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>1 mg/kg IM/IV (maximum 50 mg). IM administration is preferred. For IV administration, dilute in 100 mL Normal Saline and administer as an infusion over 5 minutes.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>1 mg/kg IM/IV (maximum 50 mg). IM administration is preferred. For IV administration, dilute in 1 mL/kg of Normal Saline and administer as an infusion over 5 minutes.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; lactation; children less than 4 weeks.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Drowsiness / CNS depression; pain associated with IV injection.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated. Should not be routinely administered in pregnancy.<br>Lactation: Safety has not been established. Should not be routinely administered in lactation.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>IV administration is highly associated with pain at the injection site – avoid undiluted administration.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-12",
                shortTitle: "Drug 12 Dopamine",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 12 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Dopamine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Catecholamine, Positive Inotrope, Vasopressor</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">200 mg/5 mL ampule (note: ampule presentation in mg, dose calculation in mcg).</span></div>
                </div>

                <p class="rx-moa">Dopamine stimulates dopaminergic (D1 & D2), adrenergic (α1 & β1) receptors, causing:<br>
                – At low doses (1–5 mcg/kg/min): dopamine receptors <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> increased blood flow to kidneys, improved urine output.<br>
                – At medium doses (5–10 mcg/kg/min): beta‑1 adrenergic receptors <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> increased heart rate and contractility (inotropic effect), improving cardiac output.<br>
                – At high doses (10–20 mcg/kg/min): alpha‑1 adrenergic receptors <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> vasoconstriction, increasing blood pressure.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Hypotension/Shock associated with: cardiogenic shock / congestive heart failure; bradycardia; post cardiac arrest; sepsis.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>2‑20 mcg/kg/min IV/IO. Use syringe driver wherever possible.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>2‑20 mcg/kg/min IV/IO. Use syringe driver wherever possible.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; pheochromocytoma.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Arrhythmias are associated with high doses required for vasoconstriction.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Arrhythmias (particularly with high doses – including VF); chest pain; palpitations; widening of the QRS complex.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: May cause fetal harm. However, dopamine should be administered where clinically indicated.<br>Lactation: May be excreted in breast milk. However, dopamine should be administered where clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Due to difficulties in administration without a syringe driver, carefully evaluate the requirement for dopamine rather than using an alternative (e.g. adrenaline) which may be easier to administer accurately.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-13",
                shortTitle: "Drug 13 Epinephrine",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 13 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Epinephrine (Adrenaline)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Adrenergic agonist</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">IM EpiPen Auto‑Injector: Adult 0.3 mg, Pediatric 0.15 mg; Prefilled Syringe: 1 mg/10 mL; Ampule: 1 mg/1 mL. Note: Presentation in mg, adrenaline infusions in mcg.</span></div>
                </div>

                <p class="rx-moa">Adrenaline agonizes adrenergic receptors resulting in: bronchodilation; increased heart rate and contractility; vasoconstriction. Adrenaline also directly stabilizes mast cell degranulation in anaphylaxis.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Cardiac Arrest; shock not responsive to fluids or fluid refractory; bradycardia; anaphylaxis; life‑threatening asthma.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Cardiac Arrest:</strong> 1 mg IV/IO every 3‑5 minutes.<br>
                <strong>Septic Shock:</strong> IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.<br>
                <strong>Bradycardia:</strong> IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.<br>
                <strong>Anaphylaxis:</strong> IM 0.3‑0.5 mg (via auto injector or 1:1,000 ampule); IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.<br>
                <strong>Asthma:</strong> IM 0.3‑0.5 mg (via auto injector or 1:1,000 ampule); IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Cardiac Arrest:</strong> 0.01 mg/kg IV/IO every 3‑5 minutes.<br>
                <strong>Septic Shock:</strong> IV/IO push dose: 0.005 mg/kg; IV/IO infusion: 0.05‑0.3 mcg/kg/min.<br>
                <strong>Bradycardia:</strong> 0.01 mg/kg IV/IO every 3‑5 minutes.<br>
                <strong>Anaphylaxis:</strong> IM 0.15‑0.3 mg (via auto injector or 1:1,000 ampule); IV/IO push dose: 0.005 mg/kg; IV/IO infusion: 0.05‑0.3 mcg/kg/min.<br>
                <strong>Asthma:</strong> IM 0.15‑0.3 mg; IV infusion: 0.1‑1 mcg/kg/min.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>None in the emergency context.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>High risk of arrhythmias; adrenaline will increase myocardial oxygen consumption and myocardial ischemia.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Tachycardia; arrhythmias; tremors, anxiety and sweating; nausea and vomiting.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>If clinically indicated, adrenaline should be administered.</p></div>
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
                id: "formulary-14",
                shortTitle: "Drug 14 Ethyl Chloride",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 14 &middot; Other Medications</div>
                        <h3 class="rx-name">Ethyl Chloride (Chloroethane)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Topical Anesthetic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">100 mL Chloroethane without propellant bottle</span></div>
                </div>

                <p class="rx-moa">Chloroethane evaporates rapidly, cooling the skin surface, which temporarily desensitizes nerve endings by slowing their ability to transmit pain signals. May dissolve into nerve membranes, interfering with voltage‑gated sodium channels preventing nerve depolarization and blocking pain signals.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Topical anesthesia associated with minor contusions, sprains or IV cannulation.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>Topically apply for 3‑7 seconds from distance of 3‑9 inches until just before skin begins to turn white.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Topically apply for 3‑7 seconds from distance of 3‑9 inches until just before skin begins to turn white.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Hypersensitivity to ethyl chloride products.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Changes in skin pigmentation; frosting of the skin causing tissue necrosis.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Crossing the placenta is unlikely.<br>Lactation: Safety has not been established.</p></div>
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
                id: "formulary-15",
                shortTitle: "Drug 15 Furosemide",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 15 &middot; Other Medications</div>
                        <h3 class="rx-name">Furosemide</h3>
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
                shortTitle: "Drug 16 Glucagon",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 16 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Glucagon</h3>
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
                shortTitle: "Drug 17 Glucose Paste",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 17 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Glucose 40% Oral Paste</h3>
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
                shortTitle: "Drug 18 GTN",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 18 &middot; Pain</div>
                        <h3 class="rx-name">Glyceryl Trinitrate (GTN)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Organic Nitrate / Vasodilator</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">0.4 mg (per spray) spray bottle</span></div>
                </div>

                <p class="rx-moa">GTN acts upon vascular smooth muscle to cause venous dilation (and arterial dilation to a lesser extent). This results in: reduced venous return (preload) reduces ventricular filling and cardiac output which reduces myocardial oxygen demand; reduced peripheral resistance (afterload) through arterial dilation; dilation to coronary arteries which may increase myocardial blood flow.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Cardiac Chest Pain; Pulmonary edema.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>SL: 0.4 mg (1x spray) every 3‑5 minutes (max 1.2 mg/3x sprays).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric administration.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy to corn or corn products; SBP <90 mmHg; use of phosphodiesterase inhibitors within the last 24 hours (e.g. Viagra); right ventricular infarct; heart rate <50 or >150.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Physiologically unstable patients / patients with signs of poor perfusion.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hypotension; headache; tachycardia; lightheaded feeling.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Safety has not been established. The likelihood of myocardial infarction or ischemia in pregnancy or lactation is very low, GTN should generally be withheld.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Before administering GTN SL spray, do not shake the bottle as this may lead to sub‑therapeutic dosing. Consider performing a Right Sided 12‑Lead ECG to rule out right ventricular infarction.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-19",
                shortTitle: "Drug 19 Haloperidol",
                summary: `
            <div class="rx-card" style="--rx-cat:#8b5cf6;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 19 &middot; Neuro / Sedation</div>
                        <h3 class="rx-name">Haloperidol</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antipsychotic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">5 mg/1 mL ampule</span></div>
                </div>

                <p class="rx-moa">Haloperidol binds to dopamine D1 and D2 receptors in the mesolimbic pathway, reducing excessive dopamine activity that can cause hallucinations, delusions, or severe agitation. Haloperidol also affects other histamine receptors leading to sedation, aiding in the management of acute agitation.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Acute psychosis suspected to be secondary to a worsening mental health illness.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>5 mg IM (IM administration only).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric use.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; Parkinson's disease; dementia.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Extrapyramidal effects; hyperactive behavior; increased muscle tone; prolonged QT; Torsade's de pointes.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated, not recommended for use in pregnancy.<br>Lactation: Safety has not been established, not recommended for use in lactation.</p></div>
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
                id: "formulary-20",
                shortTitle: "Drug 20 Hydrocortisone",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 20 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Hydrocortisone</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Corticosteroid</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">100 mg/2 mL (act‑o‑vial)</span></div>
                </div>

                <p class="rx-moa">Hydrocortisone has anti‑inflammatory and immunosuppressive effects. It reduces the production of inflammatory substances namely prostaglandins and leukotrienes, leading to a decrease in inflammation and immune activity.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Asthma; COPD; Anaphylaxis.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Asthma:</strong> Moderate: 100 mg IV/IM; Severe or life‑threatening: 200 mg IV/IM/IO.<br>
                <strong>Anaphylaxis:</strong> 100‑200 mg IV/IM/IO.<br>
                <strong>COPD:</strong> 100‑200 mg IM/IV/IO.<br>
                IV doses should be given slowly over 2 minutes or diluted in 100 mL normal saline and administered over 2‑5 minutes.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Asthma & Anaphylaxis:</strong> Moderate: 2 mg/kg IV/IM/IO; or for ease of dilution: <1 year 25 mg, 1‑5 years 50 mg, >5 years 100 mg. Severe: 4 mg/kg IV/IM/IO.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Concurrent fungal infections.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Fatigue; hypertension.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated. Hydrocortisone should only be administered in severe or life‑threatening cases.<br>Lactation: Safety has not been established. If essential to be administered the mother should be advised to stop breastfeeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>In severe asthma the dose may be increased to Adults: 200 mg and Pediatrics: 4 mg/kg and should be given IV.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-21",
                shortTitle: "Drug 21 Hyoscine",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 21 &middot; Other Medications</div>
                        <h3 class="rx-name">Hyoscine Butyl bromide</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Anticholinergic (antimuscarinic)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">20 mg/1 mL ampule</span></div>
                </div>

                <p class="rx-moa">Blocks muscarinic acetylcholine receptors (primarily M3) on smooth muscle, reducing parasympathetic‑mediated contractions.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Lower abdominal cramping associated with gastroenteritis, renal colic, irritable bowel disease and dysmenorrhea.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>20 mg IV/IM/SC</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric administration.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Tachyarrhythmias; narrow angle glaucoma; stenosis of the GI or urinary tract; myasthenia gravis; hypertrophy of the prostate; renal impairment.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Tachycardia; bradycardia; hypotension; urinary urgency; dry mouth; constipation; drowsiness.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Administration in pregnancy is not advised.<br>Lactation: Safety has not been established. Administration in lactation is not advised.</p></div>
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
                id: "formulary-22",
                shortTitle: "Drug 22 Ketamine",
                summary: `
            <div class="rx-card" style="--rx-cat:#8b5cf6;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 22 &middot; Neuro / Sedation</div>
                        <h3 class="rx-name">Ketamine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Dissociative Anesthetic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">500 mg/10 mL ampule</span></div>
                </div>

                <p class="rx-moa">Predominantly blocks the action of glutamate on NMDA receptors, resulting in dose dependent analgesia, amnesia, disassociation and anesthesia.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Sedation of agitated patients.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Sedation for Abnormal Behavior:</strong> IM: 1‑4 mg/kg (repeat after 10 minutes, once only); IV/IO: 1 mg/kg bolus over 1‑2 minutes. Maximum dose 100 mg.<br>
                <strong>Sedation for Agitation (e.g. ROSC/TBI/Cardioversion/Pacing):</strong> 0.25‑1 mg/kg IV/IO.<br>
                <strong>Dilution for IV Administration:</strong> In a 10 mL syringe, draw up 8 mLs of normal saline. Add 2 mL (100 mg) of Ketamine. Final concentration is 10 mg/1 mL.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric administration.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; significant hypertension.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Active psychosis – ketamine may make this worse; coadministration with haloperidol or benzodiazepines (enhanced sedative effect).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Laryngospasm; respiratory depression (usually associated with large or rapid IV doses); emergence phenomena; increase airway secretions; nystagmus; transient hypertension.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been demonstrated. Administration in pregnancy is not recommended.<br>Lactation: Safety has not been demonstrated. Administration in lactation is not recommended.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Ketamine must not be administered to facilitate intubation. Many of the adverse effects of ketamine are related to high doses or rapid IV administration. Where possible slowly administer IV doses slowly. Emergence phenomena only requires management if it is impeding patient care. Low dose benzodiazepines may be administered if required however this may cause significant lowering of consciousness. Benzodiazepines should be administered IV to enable lower and more accurate dosages.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-23",
                shortTitle: "Drug 23 Labetalol",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 23 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Labetalol</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Beta Blocker</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">100 mg/20 mL ampule (5 mg/mL solution)</span></div>
                </div>

                <p class="rx-moa">Blocks beta‑1 adrenergic receptors in the heart causing a decrease in heart rate and contractility, resulting in reduced blood pressure. Weakly blocks adrenergic receptors causing vasodilation resulting in reduced blood pressure.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Pre‑eclampsia with severe hypertension; Eclampsia.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>20 mg IV/IO over 2 minutes (maximum 80 mg). May repeat every 10 minutes as required.<br>
                <strong>Dilution:</strong> In a 20 mL syringe, add 12 mLs of normal saline. Add 8 mLs of Labetalol. The syringe concentration is now 40 mg/20 mL (2 mg/mL). Administer 10 mLs (20 mg) of the preparation over 2 minutes.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric administration.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; asthma; COPD; 2nd or 3rd degree heart block (without pacemaker); known sick sinus syndrome (without internal pacemaker); patient taking non‑dihydropyridine calcium channel blockers; heart failure.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>1st degree heart block (may cause bradycardia).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Hypotension; nausea; dizziness; headache.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Labetalol should be administered if clinically indicated.<br>Lactation: Infant harm is possible. If administered mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>The dilution guideline above is intended to maintain cleanliness, minimize contamination risk, and eliminates the need to handle an open ampule if repeat dosing is required. Label both syringes with “Labetalol 2 mg/mL”.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-24",
                shortTitle: "Drug 24 Magnesium Sulphate",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 24 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Magnesium Sulphate</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Electrolyte</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">5 g in 10 mL ampule; 500 mg in 2 mL vial</span></div>
                </div>

                <p class="rx-moa">Reduces bronchial smooth muscle contraction resulting in bronchodilation. Blocks calcium channels reducing calcium influx into cardiac myocytes, slowing abnormal electrical activity which causes Torsades de Pointes. Dilates cerebral blood vessels, improving blood flow to the brain and reducing hypertension‑related seizures, and as a central nervous system depressant, reducing neuronal excitability.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Asthma (severe or life‑threatening); Eclampsia; Torsades de pointes.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Asthma:</strong> 2 g IV/IO/IM. IV/IO doses should be administered as an infusion over 20 minutes.<br>
                <strong>Eclampsia:</strong> 4 g IV/IO over 5‑10 minutes (dilute in 100 mL NaCl or use syringe driver); 8 g IM (4 g into each gluteal muscle).<br>
                <strong>Torsades de Pointes:</strong> 1‑2 g IV/IO over 5‑20 minutes. May repeat once if required.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Asthma:</strong> 40 mg/kg IV/IO/IM.<br>
                <strong>Torsades de Pointes:</strong> 25‑50 mg/kg IV/IO over 5‑20 minutes. May repeat once if required.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Previous severe reaction to magnesium; toxemia of pregnancy within the first 2 hours preceding delivery.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Hypotension.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Arrhythmias; hypotension (usually associated with fast administration); muscle weakness; CNS depression.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Magnesium should be administered if clinically indicated.<br>Lactation: Safety has not been established. Magnesium should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Do not run magnesium through the same line as adrenaline as precipitation may occur.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-25",
                shortTitle: "Drug 25 Penthrox",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 25 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Methoxyflurane (Penthrox)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Inhaled Anesthetic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">3 mL vial</span></div>
                </div>

                <p class="rx-moa">Depresses the central nervous system primarily through enhancing GABA‑A receptor activity to increase inhibitory neurotransmission. Inhibits NMDA receptors to reduce excitatory pain signals.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate to Severe Pain; Moderate Pain with occasional Severe Pain associated with procedures.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>3 mLs Methoxyflurane self‑administered (repeat dose once if required). Adult maximum dose in 24 hours is 6 mL (2 doses).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Pediatric maximum dose 3 mL (single dose). Generally, pediatrics should be greater than 5 years old to understand how to self‑administer methoxyflurane. Administration in pediatrics has not been widely studied. However, methoxyflurane is widely administered in the pre‑hospital setting with minimal reported adverse effects. When administered to pediatrics, methoxyflurane should be administered sparingly and more appropriate analgesics should be used once they are available.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Patients unable to obey commands, or are unable to self‑administer; history of malignant hyperthermia (rare); known renal impairment; severe liver disease; hypersensitivity to anesthetics.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Age >75 years – elderly patients are more likely to have renal impairment; pre‑eclampsia – renal impairment is likely in pre‑eclampsia.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Dizziness; headache; mild and temporary sedation.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Administration during labor is not recommended.<br>Lactation: Safety has not been established. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Methoxyflurane is an effective analgesic provided adequate coaching is provided. The analgesic effect of methoxyflurane will wear off approximately 30 seconds after inhalation has stopped. Constant inhalation is required to provide on‑going analgesia.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-26",
                shortTitle: "Drug 26 Metoclopramide",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 26 &middot; Other Medications</div>
                        <h3 class="rx-name">Metoclopramide</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antiemetic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">10 mg/2 mL ampule</span></div>
                </div>

                <p class="rx-moa">Antagonizes dopamine‑2 receptors in the chemoreceptor trigger zone (CTZ) reducing nausea. Metoclopramide also (weakly) blocks stimulation of the 5‑HT3 receptors in the gastro‑intestinal system further reducing nausea and increasing gastric motility.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Nausea and Vomiting.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>10 mg IV/IM (slow IV over 3 minutes, or diluted in 100 mL normal saline and administered as an infusion).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Generally not recommended for routine pediatric administration (significant risk of extrapyramidal effects). 0.1 mg/kg IV/IM (slow IV over 3 minutes).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; epilepsy; Parkinson's disease; tardive dyskinesia; suspected gastro‑intestinal hemorrhage or obstruction; pheochromocytoma; recent gastro‑intestinal surgery; age <1 year; allergy to procainamide.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Pediatrics (extrapyramidal effects).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Extrapyramidal effects (common in children); rash; hypotension; dyspnea; drowsiness and dizziness.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Routine administration in pregnancy is not recommended.<br>Lactation: Safety has not been established. Routine administration in lactation is not recommended. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Metoclopramide should not be mixed with morphine. Metoclopramide should not be administered prophylactically after opiate administration. Only administer if nausea occurs.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-27",
                shortTitle: "Drug 27 Midazolam",
                summary: `
            <div class="rx-card" style="--rx-cat:#8b5cf6;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 27 &middot; Neuro / Sedation</div>
                        <h3 class="rx-name">Midazolam</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Benzodiazepine</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">5 mg/1 mL ampule</span></div>
                </div>

                <p class="rx-moa">Potentiates the action of the GABA neurotransmitter producing sedation and seizure inhibition.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Seizures; sedation of agitated or combative patients.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p><strong>Seizures:</strong> 5 mg IV/IO/IM (repeat once after 10 minutes if required).<br>
                <strong>Sedation:</strong> 1‑5 mg IV/IO/IM.<br>
                <strong>Dilution for IV/IO administration:</strong> In a 5 mL syringe, draw up 4 mL of normal saline. Add 1 mL (5 mg) of Midazolam. Concentration is now 1 mg/1 mL.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><strong>Seizures:</strong> 0.1 mg/kg IV (max 5 mg – may repeat once after 10 minutes if required); 0.2 mg/kg IM (max 5 mg – may repeat once after 10 minutes if required).<br>
                Dilution as for adults.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Respiratory distress; shock and/or hypotension.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Reduced level of consciousness; respiratory depression; hypotension.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Fetal harm has been demonstrated however, midazolam should be administered if clinically indicated.<br>Lactation: Safety has not been established however, midazolam should be administered if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Benzodiazepines may cause airway, breathing and circulation compromise. If administered, all possible monitoring should be in place, including nasal end‑tidal CO₂ monitoring. An IV (if not available in place) should be established as soon as possible after administration.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-28",
                shortTitle: "Drug 28 Morphine",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 28 &middot; Pain</div>
                        <h3 class="rx-name">Morphine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Opiate Analgesic (opiate agonist)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">10 mg/1 mL ampule</span></div>
                </div>

                <p class="rx-moa">Binds with Mu opioid pain receptors producing analgesia.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Severe pain.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>2.5 mg increments IV/IO (repeat every 5 minutes, maximum 10 mg); 2‑10 mg IM (maximum 20 mg).<br>
                <strong>Dilution for IV/IO Administration:</strong> In a 10 mL syringe, draw up 9 mL of normal saline. Add 1 mL (10 mg) Morphine. Concentration is now 1 mg/1 mL.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>0.1 mg/kg IV/IM/IO.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; respiratory depression; SBP <90 mmHg.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Respiratory distress or difficulty; elderly >65 years old; pediatrics age <1 year (increased risk of respiratory depression); morbid obesity; moderate hypotension / shock.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Respiratory depression; hypotension; drowsiness / reduced level of consciousness; rash.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: May cause fetal harm. Morphine should only be administered when the benefit outweighs the risk. This should be discussed with the mother and/or family wherever possible. Morphine should not be administered in labor. Morphine crosses the placenta and may result in respiratory depression of the newborn.<br>Lactation: Safety has not been established. Morphine should only be administered when the benefit outweighs the risk. This should be discussed with the mother and/or family wherever possible.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Morphine should be administered with caution to patients with respiratory distress or difficulty (including chest injuries), the elderly >65 years, infants <1 year and morbidly obese individuals as it may suppress respiratory drive. Use lower, carefully titrated doses and monitor closely for respiratory depression.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-29",
                shortTitle: "Drug 29 Naloxone",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 29 &middot; Other Medications</div>
                        <h3 class="rx-name">Naloxone</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Opiate Antagonist / Opiate Antidote</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">0.4 mg/1 mL ampule; 4 mg pre‑filled intranasal spray</span></div>
                </div>

                <p class="rx-moa">Naloxone competitively binds with opiate receptors reversing the effect of opiate agonists such as morphine.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Opiate overdose.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>0.4 mg IV/IO/IM (repeated every 3 minutes as required, maximum 2 mg); 4 mg IN (repeated every 3 minutes as required).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>0.01 mg/kg IV/IO/IM (repeated every 3 minutes as required).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Severe hypoxia prior to administration.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Withdrawal symptoms (including arrhythmias and seizures); hypoxia‑related agitation after rapid reversal without pre‑oxygenation.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However, naloxone should be administered when clinically indicated.<br>Lactation: Safety has not been established. However, naloxone should be administered when clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>IV or IN is the preferred method of administration. All cases of opiate overdose should be transferred to hospital even if naloxone has been effective. If maximum dose has been reached, strongly consider other causes of unconsciousness before further administration. For intranasal pre‑filled spray: Do not ‘test’ or ‘prime’ before use. Titrate naloxone carefully to reverse respiratory depression only, while monitoring to prevent fully awakening the patient which may cause excessive aggression.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-30",
                shortTitle: "Drug 30 Nefopam",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 30 &middot; Pain</div>
                        <h3 class="rx-name">Nefopam</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Non‑opioid analgesic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">20 mg/2 mL ampule</span></div>
                </div>

                <p class="rx-moa">Acts as a serotonin, norepinephrine, and dopamine reuptake inhibitor in the central nervous system, dampening pain signals.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate to severe pain.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>20 mg IV (once only, dilute with 100 mL Normal Saline and administer as an infusion over 5 minutes).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not for pediatric administration.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; history of epilepsy; pain associated with STEMI/NSTEMI; renal impairment; pediatrics <13 years.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Nausea; vomiting; tremors; dry mouth.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. Nefopam is not recommended for use in pregnancy.<br>Lactation: Safety has not been established. Nefopam is not recommended for use during lactation.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Nefopam must not be administered in the same IV line as Diclofenac as there is a chance of precipitation.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-31",
                shortTitle: "Drug 31 Oxygen",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 31 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Oxygen</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Gas</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">Black colour cylinder with white shoulder</span></div>
                </div>

                <p class="rx-moa">Oxygen administration delivers supplemental oxygen to patients with low blood oxygen levels (hypoxemia) to improve tissue oxygenation and support vital organ function.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>SpO₂ <94%.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>As determined by relevant CPG to maintain targeted oxygen levels.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>As determined by relevant CPG to maintain targeted oxygen levels.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Bleomycin lung injury.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Administration to newborns.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Prolonged use in COPD patients may lead to a reduction in ventilation stimulus.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safe to use in pregnancy and should be administered when clinically indicated.<br>Lactation: Safe to use in lactation and should be administered when clinically indicated.</p></div>
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
                id: "formulary-32",
                shortTitle: "Drug 32 Paracetamol",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 32 &middot; Pain</div>
                        <h3 class="rx-name">Paracetamol (Acetaminophen)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Non‑opioid analgesic and antipyretic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">Oral Tablets: 500 mg/tablet; Rectal Suppositories: 125 mg and 250 mg/suppository; Bottle for IV administration: 1000 mg/100 mL.</span></div>
                </div>

                <p class="rx-moa">Paracetamol works primarily by inhibiting prostaglandin synthesis in the central nervous system.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate to Severe Pain; Fever >38°C.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>IV/PO: 1000 mg (maximum 4 g in 24 hours). IV doses should be administered slowly over 10 minutes to avoid toxicity.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>PR: <5 years: 125 mg; >5 years: 250 mg. IV: 10 mg/kg. IV doses should be administered slowly over 10‑15 minutes to avoid toxicity.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; if patient has already taken paracetamol within the last 4 hours, or if the maximum daily dose has already been reached.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Nil.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Rapid administration of IV paracetamol may cause hypotension; pruritus; nausea; vomiting.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However, paracetamol is generally considered safe to use in pregnancy and may be administered when clinically indicated.<br>Lactation: Safety has not been established. However, paracetamol is generally considered safe to use in lactation and may be administered when clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Caution should be utilised when administering IV paracetamol to pediatrics without a syringe driver, infusion pump or micro‑drip set due to the inability to accurately administer the dose. IV administration to pediatrics <33 kg is generally not recommended due to the risk of toxicity.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-33",
                shortTitle: "Drug 33 Pethidine",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 33 &middot; Pain</div>
                        <h3 class="rx-name">Pethidine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Opiate Analgesic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">50 mg/1 mL ampule</span></div>
                </div>

                <p class="rx-moa">Binds with Mu opioid pain receptors creating analgesia.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate to Severe Pain.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>IM: 25‑100 mg (maximum 400 mg/24 hours). IV: 25‑50 mg. Administer slowly over 2 minutes. (maximum 200 mg/24 hours).<br>
                <strong>Dilution for IV administration:</strong> In a 10 mL syringe, draw up 9 mL of normal saline. Add 1 mL (50 mg) of Pethidine. Concentration is 5 mg/1 mL (50 mg in 10 mL).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>IM: 0.5‑2 mg/kg (repeat after 4 hours).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; respiratory depression; SBP <90 mmHg; renal impairment; concurrent use of Mono Amine Oxidase Inhibitors; suspected bowel obstruction.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Respiratory distress or difficulty; elderly; pediatrics age <1 year (increased risk of respiratory depression); morbid obesity; moderate hypotension / shock.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Respiratory depression; hypotension; drowsiness / reduced level of consciousness; arrhythmias.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: May cause fetal harm. Pethidine should not be administered during pregnancy.<br>Lactation: Safety has not been established. Pethidine should only be administered if the benefit outweighs the risk. If administered, the mother should be advised to stop breast feeding until advised by their physician.</p></div>
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
                id: "formulary-34",
                shortTitle: "Drug 34 Racemic Epinephrine",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 34 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Racemic Epinephrine (Adrenaline)</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Adrenergic Agonist</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">0.5 mL nebule containing 2.25% racemic epinephrine</span></div>
                </div>

                <p class="rx-moa">Adrenaline acts on alpha‑1 adrenergic receptors in the mucosal blood vessels of the larynx and trachea. This causes vasoconstriction, reducing blood flow to the inflamed tissues and decreasing edema (swelling) in the airway.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Croup.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>0.5 mL Nebulized (diluted in 3 mL normal saline or sterile water).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>>4 years: 0.5 mL Nebulized (diluted in 3 mL normal saline or sterile water).<br><4 years: 0.05 mL/kg (max 0.5 mL, diluted in 3 mL normal saline or sterile water).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy to racemic epinephrine preparation.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Heart disease or structural abnormalities; hypertension; thyroid disease.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Tachycardia; arrhythmias; tremors; arrhythmias (including VF); pulmonary edema; headache.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However racemic epinephrine should be administered when clinically indicated.<br>Lactation: Safety has not been established. However racemic epinephrine should be administered when clinically indicated.</p></div>
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
                id: "formulary-35",
                shortTitle: "Drug 35 Ringers Lactate",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 35 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Ringers Lactate</h3>
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
                id: "formulary-36",
                shortTitle: "Drug 36 Salbutamol",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 36 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Salbutamol</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Bronchodilator (Beta‑2 selective adrenergic agonist)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">2.5 mg/2.5 mL nebule</span></div>
                </div>

                <p class="rx-moa">Binds with B‑2 adrenergic receptors causing bronchodilation.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Bronchospasm associated with: Asthma; COPD; Anaphylaxis; Post Drowning/water inhalation; Tocolysis associated with prolapsed umbilical cord.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>5 mg Nebulized, repeat as required. Dilute dose with normal saline or sterile water to a maximum of 5 mL.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p><5 years: 2.5 mg nebulized, repeat as required; >5 years: 5 mg nebulized, repeat as required. Dilute dose with normal saline or sterile water to a maximum of 5 mL.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy to salbutamol.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Hypertension; tachyarrhythmias; last trimester pregnancy.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Angina; tachycardia; tachyarrhythmias.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: Safety has not been established. However, salbutamol should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, salbutamol should be administered if clinically indicated.</p></div>
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
                id: "formulary-37",
                shortTitle: "Drug 37 Normal Saline",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 37 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Sodium Chloride 0.9% (Normal Saline)</h3>
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
                id: "formulary-38",
                shortTitle: "Drug 38 Tranexamic Acid",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 38 &middot; Other Medications</div>
                        <h3 class="rx-name">Tranexamic Acid</h3>
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
                id: "formulary-39",
                shortTitle: "Drug 39 Calcium Chloride",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 39 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Calcium Chloride</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Electrolyte</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">1 g/10 mL (10%) prefilled syringe or ampule.</span></div>
                </div>

                <p class="rx-moa">Increases serum ionized calcium, directly stabilizing the cardiac cell membrane and improving myocardial contractility. Antagonizes the cardiotoxic effects of hyperkalemia and calcium channel blocker overdose at the membrane level.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Hyperkalemia with ECG changes; calcium channel blocker or magnesium overdose; hypocalcemia; adjunct in cardiac arrest with suspected hyperkalemia.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>1 g (10 mL of 10%) IV/IO slow push over 5 minutes. May repeat once for refractory hyperkalemia or CCB overdose.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>20 mg/kg (0.2 mL/kg of 10%) IV/IO slow push over 5 minutes (maximum 1 g).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; digoxin toxicity (may precipitate fatal arrhythmia); concurrent sodium bicarbonate in the same line (precipitates).</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Ensure IV is patent — extravasation causes severe tissue necrosis. Administer slowly through a large vein.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Bradycardia; hypotension if given rapidly; local tissue injury on extravasation; metallic taste.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: no evidence of fetal harm; administer if clinically indicated.<br>Lactation: considered compatible; administer if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Flush the line with Normal Saline before and after administration. Never administer through the same line as sodium bicarbonate — the two will precipitate and occlude the line.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-40",
                shortTitle: "Drug 40 Dexamethasone",
                summary: `
            <div class="rx-card" style="--rx-cat:#10b981;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 40 &middot; Airway / Respiratory</div>
                        <h3 class="rx-name">Dexamethasone</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Corticosteroid</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">4 mg/mL vial, typically supplied as a 2 mL (8 mg) or 5 mL (20 mg) vial.</span></div>
                </div>

                <p class="rx-moa">Long-acting glucocorticoid that suppresses inflammatory mediator release and reduces airway edema. Onset is delayed (1–2 hours) relative to hydrocortisone but has a longer duration of action.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate–severe croup; asthma/COPD exacerbation as an adjunct to bronchodilators; anaphylaxis as an adjunct after epinephrine.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>10 mg IV/IM/PO single dose.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>0.6 mg/kg PO/IV/IM (maximum 10 mg) single dose — most commonly used for croup.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Not a substitute for epinephrine in anaphylaxis — give after, not instead of, epinephrine. Use caution in known active infection.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Rare with single prehospital dose; hyperglycemia; mild agitation.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: fetal risk cannot be ruled out; administer if clinically indicated.<br>Lactation: considered compatible with breastfeeding at standard single doses.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Oral and IV routes are considered equally effective for croup — oral is preferred in a cooperative patient to avoid the distress of an injection.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-41",
                shortTitle: "Drug 41 Etomidate",
                summary: `
            <div class="rx-card" style="--rx-cat:#8b5cf6;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#brain"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 41 &middot; Neuro / Sedation</div>
                        <h3 class="rx-name">Etomidate</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Sedative-Hypnotic (Induction Agent)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">2 mg/mL, 10 mL vial (20 mg/10 mL).</span></div>
                </div>

                <p class="rx-moa">Enhances GABA-mediated inhibition in the CNS, producing rapid sedation and unconsciousness with relative hemodynamic stability compared to other induction agents.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Induction agent for Rapid Sequence Intubation (RSI); procedural sedation for cardioversion or reduction where hemodynamic stability is a priority.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>0.3 mg/kg IV push over 30–60 seconds for RSI induction.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>0.2–0.3 mg/kg IV push. Use with caution — limited pediatric prehospital evidence; local RSI protocol and physician order required.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Adrenal suppression with repeated or prolonged dosing — use single-dose only in the prehospital setting. Does not provide analgesia — pair with an opioid for painful procedures.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Myoclonus (transient involuntary muscle movement); injection site pain; nausea/vomiting on emergence; adrenal suppression.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: safety not established; use only if clinically indicated (e.g., maternal RSI).<br>Lactation: safety not established.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Etomidate has minimal effect on blood pressure and heart rate, making it a preferred induction agent in hemodynamically unstable patients. Always have a paralytic and airway equipment ready before administration.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-42",
                shortTitle: "Drug 42 Fentanyl",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 42 &middot; Pain</div>
                        <h3 class="rx-name">Fentanyl</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Opioid Analgesic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">100 mcg/2 mL ampule.</span></div>
                </div>

                <p class="rx-moa">Synthetic opioid agonist that binds mu-opioid receptors in the CNS, producing potent analgesia with rapid onset (1–2 minutes IV) and short duration (30–60 minutes).</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate–severe pain, including traumatic and cardiac chest pain; analgesia prior to painful procedures (e.g., fracture reduction, cardioversion).</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>25–50 mcg IV slow push every 5 minutes, titrated to pain (maximum 200 mcg); 1–2 mcg/kg IN/IM if no IV access.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>1 mcg/kg IV slow push every 5 minutes (maximum single dose 50 mcg); 1.5 mcg/kg IN if no IV access.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; respiratory depression without ventilatory support available.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Hypotension; head injury with altered mental status (may confound neurological exam); renal/hepatic impairment.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Respiratory depression; hypotension; nausea/vomiting; sedation; chest wall rigidity with rapid high-dose administration.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: fetal risk cannot be ruled out; administer if clinically indicated for maternal pain control.<br>Lactation: infant sedation possible; monitor if breastfeeding shortly after administration.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Faster onset and shorter duration than Morphine, making it preferred for procedural analgesia. Have Naloxone and airway equipment immediately available.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-43",
                shortTitle: "Drug 43 Ketorolac",
                summary: `
            <div class="rx-card" style="--rx-cat:#f97316;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 43 &middot; Pain</div>
                        <h3 class="rx-name">Ketorolac</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Non-Steroidal Anti-inflammatory (NSAID)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">30 mg/1 mL vial.</span></div>
                </div>

                <p class="rx-moa">Inhibits cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis and producing analgesic and anti-inflammatory effects without respiratory depression or sedation.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Moderate pain, particularly musculoskeletal, renal colic, and migraine.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>15–30 mg IV over 15 seconds or 30–60 mg IM. Single prehospital dose.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not recommended for pediatric prehospital use.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; previous reaction to NSAIDs; active GI bleeding or peptic ulcer disease; renal insufficiency; pregnancy (third trimester); age under 17.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Asthma/COPD with history of NSAID-induced bronchospasm; concurrent anticoagulant use; dehydration.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>GI upset; injection site discomfort; increased bleeding risk.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: contraindicated, particularly in the third trimester (risk of premature ductus arteriosus closure).<br>Lactation: generally considered compatible in short courses; consult local guidance.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Does not cause sedation or respiratory depression, making it a useful non-opioid option, but onset is slower (30–60 min for full effect) than opioids.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-44",
                shortTitle: "Drug 44 Lidocaine",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 44 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Lidocaine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antiarrhythmic / Local Anesthetic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">100 mg/5 mL (2%) prefilled syringe.</span></div>
                </div>

                <p class="rx-moa">Class Ib antiarrhythmic that blocks fast sodium channels, decreasing automaticity and suppressing ventricular ectopy. As a local anesthetic, it blocks sodium channels in peripheral nerve fibers.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Alternative antiarrhythmic for refractory VF/pulseless VT when Amiodarone is unavailable or contraindicated; local anesthesia prior to IO insertion in a conscious patient.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>Cardiac Arrest: 1–1.5 mg/kg IV/IO push, may repeat 0.5–0.75 mg/kg once (maximum total 3 mg/kg). IO local anesthesia: 20–40 mg (1–2 mL of 2%) slow push into the IO space prior to infusion in a conscious patient.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Cardiac Arrest: 1 mg/kg IV/IO push. IO local anesthesia: 0.5 mg/kg (maximum 20 mg) slow push into the IO space.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy to amide local anesthetics; second- or third-degree heart block without a pacemaker; Wolff-Parkinson-White syndrome.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Reduce dose in hepatic impairment and heart failure — reduced clearance increases toxicity risk. Avoid in wide-complex tachycardia of unclear origin without expert guidance.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>CNS toxicity at high doses (tinnitus, perioral numbness, seizures); bradycardia; hypotension.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: no evidence of fetal harm; administer if clinically indicated.<br>Lactation: considered compatible; administer if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Lidocaine is a second-line alternative to Amiodarone for refractory VF/VT in current resuscitation guidelines — do not administer both agents in the same arrest without medical direction.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-45",
                shortTitle: "Drug 45 Ondansetron",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 45 &middot; Other Medications</div>
                        <h3 class="rx-name">Ondansetron</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antiemetic (5-HT3 Receptor Antagonist)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">4 mg/2 mL vial or 4 mg orally disintegrating tablet (ODT).</span></div>
                </div>

                <p class="rx-moa">Selectively blocks serotonin (5-HT3) receptors in the chemoreceptor trigger zone and vagal afferents in the gut, reducing nausea and vomiting.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Nausea and vomiting of any prehospital etiology.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>4 mg IV slow push over 2–5 minutes or 4 mg ODT sublingual. May repeat once (maximum 8 mg total).</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>0.1 mg/kg IV (maximum 4 mg) or ODT: 8–15 kg 2 mg, 15–30 kg 4 mg, >30 kg 4–8 mg.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; congenital long QT syndrome.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>QT prolongation — use caution with other QT-prolonging drugs or known electrolyte abnormalities (hypokalemia, hypomagnesemia).</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Headache; constipation; transient QT prolongation; dizziness.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: conflicting data on minor fetal risk with first-trimester use; administer if clinically indicated for severe nausea/vomiting.<br>Lactation: considered compatible; administer if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>The ODT formulation is useful when IV access is not available or not clinically necessary. Does not cause sedation, unlike Metoclopramide.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-46",
                shortTitle: "Drug 46 Promethazine",
                summary: `
            <div class="rx-card" style="--rx-cat:#94a3b8;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#flask-conical"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 46 &middot; Other Medications</div>
                        <h3 class="rx-name">Promethazine</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Antihistamine / Antiemetic</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">25 mg/mL, 1 mL ampule.</span></div>
                </div>

                <p class="rx-moa">Blocks H1 histamine receptors and has central antidopaminergic and anticholinergic activity, producing antiemetic and sedative effects.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Nausea and vomiting refractory to other antiemetics; allergic reaction as an adjunct to Diphenhydramine.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>12.5–25 mg IM (preferred) or slow IV push diluted, deep into a large muscle or well-running large-bore IV.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not recommended under 2 years. Age 2 and above: 0.25–0.5 mg/kg IM (maximum 25 mg) — use with caution and only per local protocol.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; age under 2 years (risk of fatal respiratory depression); severe CNS depression.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Significant sedation — use caution in patients requiring ongoing neurological assessment. Severe tissue injury with IV extravasation or intra-arterial injection — IM route preferred prehospital.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Sedation; hypotension; extrapyramidal symptoms; respiratory depression in young children.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: has been used for hyperemesis; administer if clinically indicated.<br>Lactation: may cause infant sedation; use lowest effective dose.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>IM administration is strongly preferred over IV in the prehospital setting due to the risk of severe tissue necrosis with extravasation or inadvertent intra-arterial injection.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-47",
                shortTitle: "Drug 47 Sodium Bicarbonate",
                summary: `
            <div class="rx-card" style="--rx-cat:#06b6d4;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 47 &middot; Metabolic / Fluids</div>
                        <h3 class="rx-name">Sodium Bicarbonate</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Alkalinizing Agent</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">8.4% solution, 50 mEq/50 mL prefilled syringe.</span></div>
                </div>

                <p class="rx-moa">Buffers hydrogen ions, raising blood and urine pH. In hyperkalemia, alkalinization drives potassium intracellularly. In sodium channel blocker (e.g., tricyclic antidepressant) overdose, the added sodium load and alkalinization narrow the QRS complex.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Severe hyperkalemia with ECG changes; tricyclic antidepressant overdose with wide QRS or arrhythmia; prolonged cardiac arrest with suspected hyperkalemia or known pre-arrest acidosis; crush syndrome.</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>1 mEq/kg IV/IO slow push. In TCA overdose, repeat to maintain arterial pH 7.45–7.55 per medical direction.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>1 mEq/kg IV/IO slow push (dilute 1:1 with sterile water in neonates and infants to reduce osmolar load).</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy; hypokalemia; metabolic or respiratory alkalosis.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Do not mix or co-administer through the same line as Calcium Chloride or catecholamines (epinephrine/dopamine) — will precipitate or inactivate. Flush the line thoroughly before and after.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Metabolic alkalosis; hypokalemia; hypernatremia; tissue necrosis on extravasation.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: no evidence of fetal harm; administer if clinically indicated.<br>Lactation: considered compatible; administer if clinically indicated.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Ensure adequate ventilation before administration — bicarbonate generates CO2, which requires effective ventilation to be cleared, or paradoxical intracellular acidosis can result.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "formulary-48",
                shortTitle: "Drug 48 Vasopressin",
                summary: `
            <div class="rx-card" style="--rx-cat:#ef4444;">
                <div class="rx-topbar"></div>
                <div class="rx-head">
                    <div class="rx-head-icon"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#heart"/></svg></div>
                    <div class="rx-head-text">
                        <div class="rx-eyebrow">Drug 48 &middot; Cardiac / Resus</div>
                        <h3 class="rx-name">Vasopressin</h3>
                    </div>
                </div>

                <div class="rx-quickfacts">
                    <div class="rx-fact"><span class="rx-fact-lbl">Classification</span><span class="rx-fact-val">Vasopressor (Antidiuretic Hormone Analog)</span></div>
                    <div class="rx-fact"><span class="rx-fact-lbl">Presentation</span><span class="rx-fact-val">20 units/mL, 1 mL ampule.</span></div>
                </div>

                <p class="rx-moa">Direct V1-receptor agonist causing peripheral vasoconstriction independent of adrenergic receptors, increasing coronary and cerebral perfusion pressure during cardiac arrest and in catecholamine-refractory shock.</p>

                <div class="rx-box rx-box-go">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#circle-check-big"/></svg> Indications</h4>
                    <p>Cardiac arrest as an alternative or adjunct to Epinephrine per local protocol; catecholamine-refractory septic shock (physician-directed, critical care transport).</p>
                </div>

                <div class="rx-dose-grid">
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#user"/></svg> Adult Dose</h4>
                        <p>40 units IV/IO push, single dose, may be substituted for either the first or second dose of Epinephrine in cardiac arrest per local protocol.</p>
                    </div>
                    <div class="rx-dose-card">
                        <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#baby"/></svg> Pediatric Dose</h4>
                        <p>Not established for pediatric cardiac arrest — Epinephrine remains first-line.</p>
                    </div>
                </div>

                <div class="rx-box rx-box-stop">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#ban"/></svg> Contraindications</h4>
                    <p>Known allergy.</p>
                </div>
                <div class="rx-box rx-box-caution">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#triangle-alert"/></svg> Precautions</h4>
                    <p>Not a substitute for high-quality CPR and defibrillation. Extravasation can cause severe local ischemia.</p>
                </div>

                <div class="rx-two-col">
                    <div class="rx-mini"><h4>Side Effects</h4><p>Peripheral and mesenteric ischemia; hyponatremia with prolonged use; arrhythmia.</p></div>
                    <div class="rx-mini"><h4>Pregnancy &amp; Lactation</h4><p>Pregnancy: use only in cardiac arrest where maternal survival is the priority.<br>Lactation: not applicable in the arrest setting.</p></div>
                </div>

                <div class="rx-box rx-box-info">
                    <h4><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#notebook-pen"/></svg> Additional Information</h4>
                    <p>Current resuscitation guidelines regard Vasopressin as having no significant advantage over Epinephrine alone in cardiac arrest; use per local medical direction only.</p>
                </div>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            }
    ]
};
