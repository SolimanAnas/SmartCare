/* ========== M1-38 – Medication Formulary (SmartCare) ========== */
window.CPG_DATA = {
    id: "m1-38",
    title: "Medication Formulary",
    shortTitle: "M1–38 Formulary",
    sections: [
        {
            id: "m1-38s1",
            shortTitle: "M1–38 Drug Formulary",
            summary: `
                <div class="sum-card" style="text-align:center;padding:28px 20px;">
                    <div style="font-size:2.8rem;margin-bottom:12px;"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg></div>
                    <h3 style="color:var(--primary-accent);font-size:1.2rem;margin-bottom:8px;">SmartCare Medication Formulary</h3>
                    <p style="color:var(--text-secondary);font-size:.85rem;line-height:1.6;margin-bottom:20px;">
                        The full interactive drug reference — all 31 medications across 6 clinical categories with indications, dosing tables, and pediatric weight-based doses — is available in the Medication Index. For the complete M1–38 monograph on every individual drug (classification, mechanism, contraindications, scope of practice), use the M1–M38 tabs above.
                    </p>
                    <a href="../pages/med-index.html" style="display:inline-flex;align-items:center;gap:8px;background:var(--primary-accent);color:#fff;text-decoration:none;padding:12px 24px;border-radius:12px;font-weight:700;font-size:.9rem;box-shadow:0 4px 16px rgba(0,86,179,.35);transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
                        <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Open Medication Index <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg>
                    </a>
                    <div style="margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;text-align:center;">
                        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">31</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Medications</div>
                        </div>
                        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">6</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">Categories</div>
                        </div>
                        <div style="background:var(--card-bg);border:1px solid var(--border);border-radius:12px;padding:10px;">
                            <div style="font-size:1.3rem;font-weight:900;color:var(--primary-accent);">2026</div>
                            <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);font-weight:700;">CPG Edition</div>
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
                id: "m1-38s2",
                shortTitle: "M1 ActiMaris",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#test-tube"/></svg> ActiMaris (Wound Irrigation Solution)</h3>
                <h4>Classification</h4>
                <p>Topical Antiseptic</p>
                <h4>Presentation</h4>
                <p>300 mL bottle containing: water, sea salt (1.2%), sodium hypochlorite NaOCl (0.04%) and hypochlorous acid HOCl (0.004%).</p>
                <h4>Mechanism of Action</h4>
                <p>Has an eliminating effect on wound pathogens.</p>
                <h4>Indications</h4>
                <p>Irrigation of traumatic and chronic wounds.</p>
                <h4>Contraindications</h4>
                <p>Known allergy to ActiMaris ingredients.</p>
                <h4>Precautions</h4>
                <p>None noted.</p>
                <h4>Side Effects</h4>
                <p>Slight, temporary burning sensation around wound area.</p>
                <h4>Adult Dose & Administration</h4>
                <p>Use ample amount to provide sufficient wound irrigation.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Use ample amount to provide sufficient wound irrigation.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Safety has not been demonstrated. Sterile water or saline is preferred if available.</p>
                <h4>Additional Information</h4>
                <p>Cross contamination between patients may occur with incorrect handling of ActiMaris bottle.</p>
                <h4>Scope of Practice</h4>
                <p>All clinical levels (EMR, EMT, EMT‑A, P, AP, EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s3",
                shortTitle: "M2 Adenosine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Adenosine</h3>
                <h4>Classification</h4>
                <p>Antiarrhythmic</p>
                <h4>Presentation</h4>
                <p>6 mg/2 mL vial</p>
                <h4>Mechanism of Action</h4>
                <p>Slows impulse formation in the sinoatrial (SA) node; slows conduction time through the atrioventricular (AV) node; can interrupt reentry pathways through the AV node.<br>Onset: Immediate / Peak: 20 seconds / Duration: 40 seconds.</p>
                <h4>Indications</h4>
                <p>Chemical cardioversion of narrow complex Supraventricular Tachycardias (SVT) and regular monomorphic Ventricular Tachycardias.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; Wolf‑Parkinson‑White Syndrome with Atrial Fibrillation; known Sick Sinus Syndrome (without a pacemaker); previous 2nd or 3rd degree heart block (without a pacemaker).</p>
                <h4>Precautions</h4>
                <p>Asthma or Severe Reactive Airway Disease (COPD).</p>
                <h4>Side Effects</h4>
                <p>Bradycardia / Asystole (usually transient) / VF/VT; hypotension; difficulty of breathing; chest pain; facial flushing.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>1st Dose:</strong> 6 mg rapid IV/IO push over 1‑2 seconds.<br><strong>2nd Dose:</strong> 12 mg rapid IV/IO push over 1‑2 seconds.<br>Each dose should be followed by a 10‑20 mL Normal Saline flush. Consider elevation of the arm.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>1st Dose:</strong> 0.1 mg/kg (maximum 6 mg) rapid IV/IO push over 1‑2 seconds.<br><strong>2nd Dose:</strong> 0.2 mg/kg (maximum 12 mg) rapid IV/IO push over 1‑2 seconds.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal risk cannot be ruled out. Lactation: Fetal risk cannot be ruled out. Safety has not been demonstrated, however if indicated, the balance of risk is generally in favour of administration.</p>
                <h4>Additional Information</h4>
                <p>At the time of conversion to normal sinus rhythm, a variety of new rhythms may appear on ECG including: short period of asystole, premature ventricular contractions, atrial premature contractions, sinus bradycardia, sinus tachycardia, skipped beats, AV nodal block.</p>
                <h4>Scope of Practice</h4>
                <p>Paramedic (P) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s4",
                shortTitle: "M3 Amiodarone",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Amiodarone</h3>
                <h4>Classification</h4>
                <p>Antiarrhythmic</p>
                <h4>Presentation</h4>
                <p>150 mg/3 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Amiodarone is a wide‑acting antiarrhythmic drug, mainly classified as class III. It extends the action potential duration, lowers automaticity, and increases the refractory period in atrial, nodal, and ventricular tissues. Its electrophysiological effects reduce irregular electrical activity, slow down electrical conduction, decrease heart rate, and stabilize the SA and AV nodes. Amiodarone also slightly reduces myocardial oxygen demand by decreasing inotropy.</p>
                <h4>Indications</h4>
                <p>Cardiac Arrest (refractory VF or VT); rate control/reversion of wide complex tachyarrhythmias.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; VT or VF secondary to Tricyclic Antidepressant Overdose.</p>
                <h4>Precautions</h4>
                <p>None if the patient is in cardiac arrest. Otherwise: hypotension; sick sinus syndrome (without a pacemaker); previous 2nd or 3rd degree heart block (without a pacemaker).</p>
                <h4>Side Effects</h4>
                <p>Hypotension; lightheadedness; arrhythmias – particularly bradyarrhythmias.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Cardiac Arrest:</strong> 1st Dose: 300 mg IV/IO push; 2nd Dose: 150 mg IV/IO push.<br><strong>Wide Complex Tachycardia:</strong> 150 mg/10 minutes. Dilute 150 mg (3 mL) of amiodarone with 100 mL D5W and administer over 10 minutes.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Cardiac Arrest:</strong> 1st Dose: 5 mg/kg IV/IO. Dose may be repeated twice (maximum 15 mg/kg total).</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: fetal harm has been demonstrated. Administration is not recommended unless significantly clinically indicated. Amiodarone should not be withheld in cardiac arrest in pregnancy.<br>Lactation: May be administered during pregnancy, however the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Administer into a large vein where possible. If hypotension occurs slow or stop the rate of administration. The full dose should be administered even if the rhythm reverts to sinus rhythm (unless hypotension or bradycardia develops).</p>
                <h4>Scope of Practice</h4>
                <p>EMT (for cardiac arrest) and above; Advanced Paramedic (AP) and above for infusion.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s5",
                shortTitle: "M4 Aspirin",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Aspirin</h3>
                <h4>Classification</h4>
                <p>Platelet aggregator inhibitor</p>
                <h4>Presentation</h4>
                <p>81 mg/tablet</p>
                <h4>Mechanism of Action</h4>
                <p>Aspirin provides antiplatelet, fever‑reducing, and pain‑relieving effects. In this formulary, aspirin is used solely for its antiplatelet properties. Aspirin blocks the cyclooxygenase enzyme, which leads to a decrease in the production of prostaglandin and thromboxane.</p>
                <h4>Indications</h4>
                <p>Acute Coronary Syndrome</p>
                <h4>Contraindications</h4>
                <p>Known allergy; pregnancy; active peptic ulcer disease.</p>
                <h4>Precautions</h4>
                <p>Asthma/COPD (previous history of worsening bronchospasm after NSAID administration); clinically significant active bleeding (e.g., GI bleeding) – aspirin will increase bleeding.</p>
                <h4>Side Effects</h4>
                <p>Increased bleeding.</p>
                <h4>Adult Dose & Administration</h4>
                <p>324 mg (4 tablets). Tablets should be chewed before swallowing.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not to be administered to pediatrics.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: has demonstrated fetal harm in the third trimester. The likelihood of myocardial infarction or ischemia in pregnancy is very low, aspirin should generally be withheld.<br>Lactation: May be administered during pregnancy, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>If the patient has taken aspirin within the last 60 minutes: confirm the dose they have received. Administer additional Aspirin to reach a maximum total dose of 324 mg.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Responder (EMR) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s6",
                shortTitle: "M5 Atropine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Atropine</h3>
                <h4>Classification</h4>
                <p>Anticholinergic</p>
                <h4>Presentation</h4>
                <p>0.5 mg/5 mL (prefilled syringe)</p>
                <h4>Mechanism of Action</h4>
                <p>Atropine blocks muscarinic acetylcholine receptors reducing vagal tone. This results in: increased heart rate; drying of salivary and bronchial secretions; bronchodilation.</p>
                <h4>Indications</h4>
                <p>Compromised Bradycardia; Organophosphate poisoning.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Myocardial Ischemia – Atropine will increase myocardial oxygen demand. Glaucoma – Atropine will increase intraocular pressure.</p>
                <h4>Side Effects</h4>
                <p>Tachycardia and palpitations; confusion; dry mouth; blurred vision.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Bradycardia:</strong> 1 mg IV every 3‑5 minutes.<br><strong>Organophosphate Poisoning:</strong> 2 mg IV Initial Dose. Double each subsequent dose (e.g., 4 mg/6 mg/8 mg) until resolution of symptoms.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Bradycardia:</strong> 0.02 mg/kg IV/IO every 3‑5 minutes.<br><strong>Organophosphate Poisoning:</strong> 0.02‑0.05 mg/kg IV/IO every 3‑5 minutes.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated. However, atropine should not be withheld if the patient is significantly compromised. Transcutaneous pacing is preferred if available.<br>Lactation: Infant harm cannot be ruled out. Atropine may be administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Administer as a fast IV push. Slow administration may result in further (transient) bradycardia.</p>
                <h4>Scope of Practice</h4>
                <p>EMT‑Advanced (EMT‑A) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s7",
                shortTitle: "M6 Combivent",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Combivent</h3>
                <h4>Classification</h4>
                <p>β2 Agonist and Anticholinergic</p>
                <h4>Presentation</h4>
                <p>2.5 mL nebule containing: 2.5 mg Salbutamol, 0.5 mg Ipratropium Bromide.</p>
                <h4>Mechanism of Action</h4>
                <p>Salbutamol agonizes β2 adrenergic receptors causing bronchodilation. Ipratropium Bromide blocks the action of acetylcholine at muscarinic receptors, resulting in bronchodilation.</p>
                <h4>Indications</h4>
                <p>Asthma; COPD.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Tachycardia; palpitations; headache; dry mouth.</p>
                <h4>Adult Dose & Administration</h4>
                <p>2.5 mL nebulized (2.5 mg Salbutamol, 0.5 mg Ipratropium Bromide). Dilute dose with normal saline or sterile water to a maximum of 5 mL.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not recommended for pediatrics.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Combivent should be administered if clinically indicated.<br>Lactation: may be administered in lactation however, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Combivent does not have a significant role in the management of bronchospasm associated with smoke inhalation or chest infections. However, if significant bronchospasm is present, Combivent may be administered.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s8",
                shortTitle: "M7 D5W",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Dextrose 5% Water (D5W)</h3>
                <h4>Classification</h4>
                <p>Carbohydrate</p>
                <h4>Presentation</h4>
                <p>5 g in 100 mL bottle</p>
                <h4>Mechanism of Action</h4>
                <p>Prevents precipitation of solutes during infusions.</p>
                <h4>Indications</h4>
                <p>Dilution of medications (amiodarone) for infusion.</p>
                <h4>Contraindications</h4>
                <p>Administration as treatment for Hypoglycemia.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Hyperglycemia.</p>
                <h4>Adult Dose & Administration</h4>
                <p>Dosage as required by infusion amount.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Dosage as required by infusion amount.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: may cause fetal harm. However, should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>None noted.</p>
                <h4>Scope of Practice</h4>
                <p>Advanced Paramedic (AP) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s9",
                shortTitle: "M8 Dextrose 10%",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Dextrose 10%</h3>
                <h4>Classification</h4>
                <p>Carbohydrate</p>
                <h4>Presentation</h4>
                <p>50 g in 500 mL bottle; 25 g in 250 mL bottle.</p>
                <h4>Mechanism of Action</h4>
                <p>Provides glucose for cellular metabolism, raising blood glucose levels rapidly in hypoglycemia.</p>
                <h4>Indications</h4>
                <p>Hypoglycemia (RBS <70 mg/dL).</p>
                <h4>Contraindications</h4>
                <p>Hyperglycemia.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Hyperglycemia.</p>
                <h4>Adult Dose & Administration</h4>
                <p>125‑250 mL (12.5‑25 g) IV/IO. May be repeated if hypoglycemia persists.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>10 mL/kg IV/IO (maximum 125 mL). May be repeated if hypoglycemia persists.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: may cause fetal harm. However, should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>To prevent rebound hyperglycemia, avoid excessive doses of Dextrose 10% – titrate the dose based on the patient’s GCS and RBS. If GCS remains abnormal despite normalized glucose, investigate alternative causes of the patient’s condition.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s10",
                shortTitle: "M9 Diazepam",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Diazepam</h3>
                <h4>Classification</h4>
                <p>Benzodiazepine</p>
                <h4>Presentation</h4>
                <p>10 mg/2 mL ampule; 5 mg/2.5 mL rectal tube.</p>
                <h4>Mechanism of Action</h4>
                <p>Potentiates the action of the GABA neurotransmitter producing sedation and seizure inhibition.</p>
                <h4>Indications</h4>
                <p>Seizures; sedation of agitated or combative patients.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Respiratory distress; shock and/or hypotension.</p>
                <h4>Side Effects</h4>
                <p>Reduced level of consciousness; respiratory depression; hypotension.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Seizures:</strong> 5 mg IV.<br><strong>Sedation:</strong> 5 mg IV. Doses should be reduced if agitation is secondary to traumatic brain injury.<br><strong>Dilution for IV/IO Administration:</strong> In a 10 mL syringe, draw up 8 mL normal saline. Add 2 mL (10 mg) of Diazepam. Solution concentration is then 1 mg/1 mL.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Seizures:</strong> 0.1 mg/kg IV/IO (max 5 mg); 0.5 mg/kg PR (maximum 20 mg).<br>Dilution as for adults.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated however, diazepam should be administered if clinically indicated.<br>Lactation: Safety has not been established however, diazepam should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Diazepam is not recommended to be given IM due to its slow onset of action. Use IM midazolam. Benzodiazepines may cause airway, breathing and circulation compromise. If administered, all possible monitoring should be in place. An IV (if not available in place) should be established as soon as possible after administration.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s11",
                shortTitle: "M10 Diclofenac",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Diclofenac (Voltaren)</h3>
                <h4>Classification</h4>
                <p>Non‑Steroidal Anti‑inflammatory (NSAID)</p>
                <h4>Presentation</h4>
                <p>75 mg/3 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Inhibits cyclooxygenase (COX‑1 and COX‑2) enzymes, which stops the production of prostaglandins causing a reduction in pain, inflammation, and fever.</p>
                <h4>Indications</h4>
                <p>Moderate to Severe Pain</p>
                <h4>Contraindications</h4>
                <p>Known allergy; previous reaction to NSAIDs; renal insufficiency; pregnancy.</p>
                <h4>Precautions</h4>
                <p>Asthma/COPD (history of a previous worsening of asthma or COPD after NSAID administration).</p>
                <h4>Side Effects</h4>
                <p>Pain at injection site.</p>
                <h4>Adult Dose & Administration</h4>
                <p>75 mg IM (into a large muscle); 75 mg IV (diluted into 100 mL normal saline, administered over 10 minutes).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not to be administered to pediatrics.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated. Diclofenac should not be administered.<br>Lactation: Safety has not been established. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Intravenous administration should be avoided due to an increased risk of thromboembolic events.</p>
                <h4>Scope of Practice</h4>
                <p>EMT‑Advanced (EMT‑A) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s12",
                shortTitle: "M11 Diphenhydramine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Diphenhydramine</h3>
                <h4>Classification</h4>
                <p>Antihistamine</p>
                <h4>Presentation</h4>
                <p>50 mg/1 mL vial</p>
                <h4>Mechanism of Action</h4>
                <p>Blocks the action of histamine at H1 receptors reducing histamine induced symptoms (such as itching, urticaria and edema).</p>
                <h4>Indications</h4>
                <p>Moderate to Severe Allergic Reactions / Anaphylaxis.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; lactation; children less than 4 weeks.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Drowsiness / CNS depression; pain associated with IV injection.</p>
                <h4>Adult Dose & Administration</h4>
                <p>1 mg/kg IM/IV (maximum 50 mg). IM administration is preferred. For IV administration, dilute in 100 mL Normal Saline and administer as an infusion over 5 minutes.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>1 mg/kg IM/IV (maximum 50 mg). IM administration is preferred. For IV administration, dilute in 1 mL/kg of Normal Saline and administer as an infusion over 5 minutes.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated. Should not be routinely administered in pregnancy.<br>Lactation: Safety has not been established. Should not be routinely administered in lactation.</p>
                <h4>Additional Information</h4>
                <p>IV administration is highly associated with pain at the injection site – avoid undiluted administration.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s13",
                shortTitle: "M12 Dopamine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Dopamine</h3>
                <h4>Classification</h4>
                <p>Catecholamine, Positive Inotrope, Vasopressor</p>
                <h4>Presentation</h4>
                <p>200 mg/5 mL ampule (note: ampule presentation in mg, dose calculation in mcg).</p>
                <h4>Mechanism of Action</h4>
                <p>Dopamine stimulates dopaminergic (D1 & D2), adrenergic (α1 & β1) receptors, causing:<br>
                – At low doses (1–5 mcg/kg/min): dopamine receptors <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> increased blood flow to kidneys, improved urine output.<br>
                – At medium doses (5–10 mcg/kg/min): beta‑1 adrenergic receptors <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> increased heart rate and contractility (inotropic effect), improving cardiac output.<br>
                – At high doses (10–20 mcg/kg/min): alpha‑1 adrenergic receptors <svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#arrow-right"/></svg> vasoconstriction, increasing blood pressure.</p>
                <h4>Indications</h4>
                <p>Hypotension/Shock associated with: cardiogenic shock / congestive heart failure; bradycardia; post cardiac arrest; sepsis.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; pheochromocytoma.</p>
                <h4>Precautions</h4>
                <p>Arrhythmias are associated with high doses required for vasoconstriction.</p>
                <h4>Side Effects</h4>
                <p>Arrhythmias (particularly with high doses – including VF); chest pain; palpitations; widening of the QRS complex.</p>
                <h4>Adult Dose & Administration</h4>
                <p>2‑20 mcg/kg/min IV/IO. Use syringe driver wherever possible.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>2‑20 mcg/kg/min IV/IO. Use syringe driver wherever possible.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: May cause fetal harm. However, dopamine should be administered where clinically indicated.<br>Lactation: May be excreted in breast milk. However, dopamine should be administered where clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Due to difficulties in administration without a syringe driver, carefully evaluate the requirement for dopamine rather than using an alternative (e.g. adrenaline) which may be easier to administer accurately.</p>
                <h4>Scope of Practice</h4>
                <p>Advanced Paramedic (AP) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s14",
                shortTitle: "M13 Epinephrine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Epinephrine (Adrenaline)</h3>
                <h4>Classification</h4>
                <p>Adrenergic agonist</p>
                <h4>Presentation</h4>
                <p>IM EpiPen Auto‑Injector: Adult 0.3 mg, Pediatric 0.15 mg; Prefilled Syringe: 1 mg/10 mL; Ampule: 1 mg/1 mL. Note: Presentation in mg, adrenaline infusions in mcg.</p>
                <h4>Mechanism of Action</h4>
                <p>Adrenaline agonizes adrenergic receptors resulting in: bronchodilation; increased heart rate and contractility; vasoconstriction. Adrenaline also directly stabilizes mast cell degranulation in anaphylaxis.</p>
                <h4>Indications</h4>
                <p>Cardiac Arrest; shock not responsive to fluids or fluid refractory; bradycardia; anaphylaxis; life‑threatening asthma.</p>
                <h4>Contraindications</h4>
                <p>None in the emergency context.</p>
                <h4>Precautions</h4>
                <p>High risk of arrhythmias; adrenaline will increase myocardial oxygen consumption and myocardial ischemia.</p>
                <h4>Side Effects</h4>
                <p>Tachycardia; arrhythmias; tremors, anxiety and sweating; nausea and vomiting.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Cardiac Arrest:</strong> 1 mg IV/IO every 3‑5 minutes.<br>
                <strong>Septic Shock:</strong> IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.<br>
                <strong>Bradycardia:</strong> IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.<br>
                <strong>Anaphylaxis:</strong> IM 0.3‑0.5 mg (via auto injector or 1:1,000 ampule); IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.<br>
                <strong>Asthma:</strong> IM 0.3‑0.5 mg (via auto injector or 1:1,000 ampule); IV/IO push dose: 0.01 mg every 2‑5 minutes; IV/IO infusion: 2‑10 mcg/min.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Cardiac Arrest:</strong> 0.01 mg/kg IV/IO every 3‑5 minutes.<br>
                <strong>Septic Shock:</strong> IV/IO push dose: 0.005 mg/kg; IV/IO infusion: 0.05‑0.3 mcg/kg/min.<br>
                <strong>Bradycardia:</strong> 0.01 mg/kg IV/IO every 3‑5 minutes.<br>
                <strong>Anaphylaxis:</strong> IM 0.15‑0.3 mg (via auto injector or 1:1,000 ampule); IV/IO push dose: 0.005 mg/kg; IV/IO infusion: 0.05‑0.3 mcg/kg/min.<br>
                <strong>Asthma:</strong> IM 0.15‑0.3 mg; IV infusion: 0.1‑1 mcg/kg/min.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>If clinically indicated, adrenaline should be administered.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above for IM/IV/IO (as per specific indication). Advanced Paramedic (AP) for infusions.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s15",
                shortTitle: "M14 Ethyl Chloride",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#snowflake"/></svg> Ethyl Chloride (Chloroethane)</h3>
                <h4>Classification</h4>
                <p>Topical Anesthetic</p>
                <h4>Presentation</h4>
                <p>100 mL Chloroethane without propellant bottle</p>
                <h4>Mechanism of Action</h4>
                <p>Chloroethane evaporates rapidly, cooling the skin surface, which temporarily desensitizes nerve endings by slowing their ability to transmit pain signals. May dissolve into nerve membranes, interfering with voltage‑gated sodium channels preventing nerve depolarization and blocking pain signals.</p>
                <h4>Indications</h4>
                <p>Topical anesthesia associated with minor contusions, sprains or IV cannulation.</p>
                <h4>Contraindications</h4>
                <p>Hypersensitivity to ethyl chloride products.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Changes in skin pigmentation; frosting of the skin causing tissue necrosis.</p>
                <h4>Adult Dose & Administration</h4>
                <p>Topically apply for 3‑7 seconds from distance of 3‑9 inches until just before skin begins to turn white.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Topically apply for 3‑7 seconds from distance of 3‑9 inches until just before skin begins to turn white.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Crossing the placenta is unlikely.<br>Lactation: Safety has not been established.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Responder (EMR) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s16",
                shortTitle: "M15 Furosemide",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Furosemide</h3>
                <h4>Classification</h4>
                <p>Loop Diuretic</p>
                <h4>Presentation</h4>
                <p>20 mg/2 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Inhibits sodium reabsorption in the ascending loop of Henle in the kidneys resulting in increased urinary output and fluid excretion.</p>
                <h4>Indications</h4>
                <p>Acute pulmonary edema with signs of fluid overload.</p>
                <h4>Contraindications</h4>
                <p>Liver cirrhosis; anuria.</p>
                <h4>Precautions</h4>
                <p>Pulmonary edema without symptoms of fluid overload.</p>
                <h4>Side Effects</h4>
                <p>Hypotension; increased urine output; dehydration; electrolyte imbalances.</p>
                <h4>Adult Dose & Administration</h4>
                <p>40 mg IV (slow over 1‑2 minutes).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric use.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: May cause fetal harm. Administration in the prehospital setting is not advised.<br>Lactation: Minimal infant risk. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Furosemide should be administered only if signs of fluid overload are present. Administration to non‑fluid overloaded patients is highly associated with in‑hospital dehydration and electrolyte imbalances and has not demonstrated significant improvement in patient outcomes.</p>
                <h4>Scope of Practice</h4>
                <p>Paramedic (P) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s17",
                shortTitle: "M16 Glucagon",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Glucagon</h3>
                <h4>Classification</h4>
                <p>Hormone</p>
                <h4>Presentation</h4>
                <p>1 mg/1 mL vial</p>
                <h4>Mechanism of Action</h4>
                <p>Glucagon stimulates glycogenolysis (the breakdown of glycogen into glucose) predominantly in the liver, increasing blood glucose levels.</p>
                <h4>Indications</h4>
                <p>Hypoglycemia; Beta‑blocker overdose; Calcium Channel Blocker overdose.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Patients where glycogen stores may be depleted (see additional information).</p>
                <h4>Side Effects</h4>
                <p>Reported difficulty maintaining stable glucose levels for up to two weeks following administration.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Hypoglycemia:</strong> 1 mg IM/SC.<br>
                <strong>Beta‑blocker & Calcium Channel Blocker Overdose:</strong> 1 mg IM. Administer up to 5 mg IM (at different injection sites) if additional IM glucagon is available. Repeat every 10‑15 minutes if required.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Hypoglycemia:</strong> >6 years (or >25 kg): 1 mg IM/SC; <6 years (or <25 kg): 0.5 mg IM/SC.<br>
                <strong>Beta‑blocker & Calcium Channel Blocker Overdose:</strong> >6 years (or >25 kg): 1 mg IM; <6 years (or <25 kg): 0.5 mg IM. Repeat every 10‑15 minutes if required.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However, glucagon should be administered if clinically indicated.<br>Lactation: Safety has not been established. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Patients whose glycogen stores may already be depleted: non‑diabetics, septic patients, young children, following extreme exercise, has not eaten in >12 hours, adrenal insufficiency, chronic hypoglycemia, alcohol induced hypoglycemia. Glucagon is unlikely to be effective in these patients, however glucagon may be considered if no IV access can be obtained, the patient remains significantly hypoglycemic, and/or a reduced level of consciousness is causing airway, breathing or circulatory compromise.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s18",
                shortTitle: "M17 Glucose Paste",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#candy"/></svg> Glucose 40% Oral Paste</h3>
                <h4>Classification</h4>
                <p>Carbohydrate</p>
                <h4>Presentation</h4>
                <p>Plastic tube containing 15 g glucose</p>
                <h4>Mechanism of Action</h4>
                <p>Provides glucose for cellular metabolism, raising blood glucose levels rapidly in hypoglycemia.</p>
                <h4>Indications</h4>
                <p>Hypoglycemia (RBS <70 mg/dL).</p>
                <h4>Contraindications</h4>
                <p>Known allergy; unresponsive patients or patients unable to swallow.</p>
                <h4>Precautions</h4>
                <p>Airway occlusion in semi‑conscious patients (particularly children <2 years old).</p>
                <h4>Side Effects</h4>
                <p>May cause vomiting.</p>
                <h4>Adult Dose & Administration</h4>
                <p>1 tube PO – adjusting amount of paste inserted according to space available. Repeat after 5‑10 minutes (if required).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>½ tube PO – adjusting amount of paste inserted according to space available. Repeat after 5‑10 minutes (if required).</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However, glucose should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, glucose should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Glucose paste is not absorbed via the buccal mucosa and must be swallowed to be effective. In very young children/neonates, if the patient is able to suck, apply a small amount of glucose paste to the end of a gloved finger and allow the child to suck the paste.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Responder (EMR) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s19",
                shortTitle: "M18 GTN",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Glyceryl Trinitrate (GTN)</h3>
                <h4>Classification</h4>
                <p>Organic Nitrate / Vasodilator</p>
                <h4>Presentation</h4>
                <p>0.4 mg (per spray) spray bottle</p>
                <h4>Mechanism of Action</h4>
                <p>GTN acts upon vascular smooth muscle to cause venous dilation (and arterial dilation to a lesser extent). This results in: reduced venous return (preload) reduces ventricular filling and cardiac output which reduces myocardial oxygen demand; reduced peripheral resistance (afterload) through arterial dilation; dilation to coronary arteries which may increase myocardial blood flow.</p>
                <h4>Indications</h4>
                <p>Cardiac Chest Pain; Pulmonary edema.</p>
                <h4>Contraindications</h4>
                <p>Known allergy to corn or corn products; SBP <90 mmHg; use of phosphodiesterase inhibitors within the last 24 hours (e.g. Viagra); right ventricular infarct; heart rate <50 or >150.</p>
                <h4>Precautions</h4>
                <p>Physiologically unstable patients / patients with signs of poor perfusion.</p>
                <h4>Side Effects</h4>
                <p>Hypotension; headache; tachycardia; lightheaded feeling.</p>
                <h4>Adult Dose & Administration</h4>
                <p>SL: 0.4 mg (1x spray) every 3‑5 minutes (max 1.2 mg/3x sprays).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric administration.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Safety has not been established. The likelihood of myocardial infarction or ischemia in pregnancy or lactation is very low, GTN should generally be withheld.</p>
                <h4>Additional Information</h4>
                <p>Before administering GTN SL spray, do not shake the bottle as this may lead to sub‑therapeutic dosing. Consider performing a Right Sided 12‑Lead ECG to rule out right ventricular infarction.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s20",
                shortTitle: "M19 Haloperidol",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Haloperidol</h3>
                <h4>Classification</h4>
                <p>Antipsychotic</p>
                <h4>Presentation</h4>
                <p>5 mg/1 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Haloperidol binds to dopamine D1 and D2 receptors in the mesolimbic pathway, reducing excessive dopamine activity that can cause hallucinations, delusions, or severe agitation. Haloperidol also affects other histamine receptors leading to sedation, aiding in the management of acute agitation.</p>
                <h4>Indications</h4>
                <p>Acute psychosis suspected to be secondary to a worsening mental health illness.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; Parkinson's disease; dementia.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Extrapyramidal effects; hyperactive behavior; increased muscle tone; prolonged QT; Torsade's de pointes.</p>
                <h4>Adult Dose & Administration</h4>
                <p>5 mg IM (IM administration only).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric use.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated, not recommended for use in pregnancy.<br>Lactation: Safety has not been established, not recommended for use in lactation.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s21",
                shortTitle: "M20 Hydrocortisone",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Hydrocortisone</h3>
                <h4>Classification</h4>
                <p>Corticosteroid</p>
                <h4>Presentation</h4>
                <p>100 mg/2 mL (act‑o‑vial)</p>
                <h4>Mechanism of Action</h4>
                <p>Hydrocortisone has anti‑inflammatory and immunosuppressive effects. It reduces the production of inflammatory substances namely prostaglandins and leukotrienes, leading to a decrease in inflammation and immune activity.</p>
                <h4>Indications</h4>
                <p>Asthma; COPD; Anaphylaxis.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Concurrent fungal infections.</p>
                <h4>Side Effects</h4>
                <p>Fatigue; hypertension.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Asthma:</strong> Moderate: 100 mg IV/IM; Severe or life‑threatening: 200 mg IV/IM/IO.<br>
                <strong>Anaphylaxis:</strong> 100‑200 mg IV/IM/IO.<br>
                <strong>COPD:</strong> 100‑200 mg IM/IV/IO.<br>
                IV doses should be given slowly over 2 minutes or diluted in 100 mL normal saline and administered over 2‑5 minutes.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Asthma & Anaphylaxis:</strong> Moderate: 2 mg/kg IV/IM/IO; or for ease of dilution: <1 year 25 mg, 1‑5 years 50 mg, >5 years 100 mg. Severe: 4 mg/kg IV/IM/IO.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated. Hydrocortisone should only be administered in severe or life‑threatening cases.<br>Lactation: Safety has not been established. If essential to be administered the mother should be advised to stop breastfeeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>In severe asthma the dose may be increased to Adults: 200 mg and Pediatrics: 4 mg/kg and should be given IV.</p>
                <h4>Scope of Practice</h4>
                <p>EMT‑Advanced (EMT‑A) for IM; Emergency Medical Technician (EMT) for IV – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s22",
                shortTitle: "M21 Hyoscine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Hyoscine Butyl bromide</h3>
                <h4>Classification</h4>
                <p>Anticholinergic (antimuscarinic)</p>
                <h4>Presentation</h4>
                <p>20 mg/1 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Blocks muscarinic acetylcholine receptors (primarily M3) on smooth muscle, reducing parasympathetic‑mediated contractions.</p>
                <h4>Indications</h4>
                <p>Lower abdominal cramping associated with gastroenteritis, renal colic, irritable bowel disease and dysmenorrhea.</p>
                <h4>Contraindications</h4>
                <p>Tachyarrhythmias; narrow angle glaucoma; stenosis of the GI or urinary tract; myasthenia gravis; hypertrophy of the prostate; renal impairment.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Tachycardia; bradycardia; hypotension; urinary urgency; dry mouth; constipation; drowsiness.</p>
                <h4>Adult Dose & Administration</h4>
                <p>20 mg IV/IM/SC</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric administration.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Administration in pregnancy is not advised.<br>Lactation: Safety has not been established. Administration in lactation is not advised.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Paramedic (P) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s23",
                shortTitle: "M22 Ketamine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Ketamine</h3>
                <h4>Classification</h4>
                <p>Dissociative Anesthetic</p>
                <h4>Presentation</h4>
                <p>500 mg/10 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Predominantly blocks the action of glutamate on NMDA receptors, resulting in dose dependent analgesia, amnesia, disassociation and anesthesia.</p>
                <h4>Indications</h4>
                <p>Sedation of agitated patients.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; significant hypertension.</p>
                <h4>Precautions</h4>
                <p>Active psychosis – ketamine may make this worse; coadministration with haloperidol or benzodiazepines (enhanced sedative effect).</p>
                <h4>Side Effects</h4>
                <p>Laryngospasm; respiratory depression (usually associated with large or rapid IV doses); emergence phenomena; increase airway secretions; nystagmus; transient hypertension.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Sedation for Abnormal Behavior:</strong> IM: 1‑4 mg/kg (repeat after 10 minutes, once only); IV/IO: 1 mg/kg bolus over 1‑2 minutes. Maximum dose 100 mg.<br>
                <strong>Sedation for Agitation (e.g. ROSC/TBI/Cardioversion/Pacing):</strong> 0.25‑1 mg/kg IV/IO.<br>
                <strong>Dilution for IV Administration:</strong> In a 10 mL syringe, draw up 8 mLs of normal saline. Add 2 mL (100 mg) of Ketamine. Final concentration is 10 mg/1 mL.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric administration.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been demonstrated. Administration in pregnancy is not recommended.<br>Lactation: Safety has not been demonstrated. Administration in lactation is not recommended.</p>
                <h4>Additional Information</h4>
                <p>Ketamine must not be administered to facilitate intubation. Many of the adverse effects of ketamine are related to high doses or rapid IV administration. Where possible slowly administer IV doses slowly. Emergence phenomena only requires management if it is impeding patient care. Low dose benzodiazepines may be administered if required however this may cause significant lowering of consciousness. Benzodiazepines should be administered IV to enable lower and more accurate dosages.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s24",
                shortTitle: "M23 Labetalol",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Labetalol</h3>
                <h4>Classification</h4>
                <p>Beta Blocker</p>
                <h4>Presentation</h4>
                <p>100 mg/20 mL ampule (5 mg/mL solution)</p>
                <h4>Mechanism of Action</h4>
                <p>Blocks beta‑1 adrenergic receptors in the heart causing a decrease in heart rate and contractility, resulting in reduced blood pressure. Weakly blocks adrenergic receptors causing vasodilation resulting in reduced blood pressure.</p>
                <h4>Indications</h4>
                <p>Pre‑eclampsia with severe hypertension; Eclampsia.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; asthma; COPD; 2nd or 3rd degree heart block (without pacemaker); known sick sinus syndrome (without internal pacemaker); patient taking non‑dihydropyridine calcium channel blockers; heart failure.</p>
                <h4>Precautions</h4>
                <p>1st degree heart block (may cause bradycardia).</p>
                <h4>Side Effects</h4>
                <p>Hypotension; nausea; dizziness; headache.</p>
                <h4>Adult Dose & Administration</h4>
                <p>20 mg IV/IO over 2 minutes (maximum 80 mg). May repeat every 10 minutes as required.<br>
                <strong>Dilution:</strong> In a 20 mL syringe, add 12 mLs of normal saline. Add 8 mLs of Labetalol. The syringe concentration is now 40 mg/20 mL (2 mg/mL). Administer 10 mLs (20 mg) of the preparation over 2 minutes.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric administration.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Labetalol should be administered if clinically indicated.<br>Lactation: Infant harm is possible. If administered mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>The dilution guideline above is intended to maintain cleanliness, minimize contamination risk, and eliminates the need to handle an open ampule if repeat dosing is required. Label both syringes with “Labetalol 2 mg/mL”.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s25",
                shortTitle: "M24 Magnesium Sulphate",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Magnesium Sulphate</h3>
                <h4>Classification</h4>
                <p>Electrolyte</p>
                <h4>Presentation</h4>
                <p>5 g in 10 mL ampule; 500 mg in 2 mL vial</p>
                <h4>Mechanism of Action</h4>
                <p>Reduces bronchial smooth muscle contraction resulting in bronchodilation. Blocks calcium channels reducing calcium influx into cardiac myocytes, slowing abnormal electrical activity which causes Torsades de Pointes. Dilates cerebral blood vessels, improving blood flow to the brain and reducing hypertension‑related seizures, and as a central nervous system depressant, reducing neuronal excitability.</p>
                <h4>Indications</h4>
                <p>Asthma (severe or life‑threatening); Eclampsia; Torsades de pointes.</p>
                <h4>Contraindications</h4>
                <p>Previous severe reaction to magnesium; toxemia of pregnancy within the first 2 hours preceding delivery.</p>
                <h4>Precautions</h4>
                <p>Hypotension.</p>
                <h4>Side Effects</h4>
                <p>Arrhythmias; hypotension (usually associated with fast administration); muscle weakness; CNS depression.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Asthma:</strong> 2 g IV/IO/IM. IV/IO doses should be administered as an infusion over 20 minutes.<br>
                <strong>Eclampsia:</strong> 4 g IV/IO over 5‑10 minutes (dilute in 100 mL NaCl or use syringe driver); 8 g IM (4 g into each gluteal muscle).<br>
                <strong>Torsades de Pointes:</strong> 1‑2 g IV/IO over 5‑20 minutes. May repeat once if required.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Asthma:</strong> 40 mg/kg IV/IO/IM.<br>
                <strong>Torsades de Pointes:</strong> 25‑50 mg/kg IV/IO over 5‑20 minutes. May repeat once if required.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Magnesium should be administered if clinically indicated.<br>Lactation: Safety has not been established. Magnesium should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Do not run magnesium through the same line as adrenaline as precipitation may occur.</p>
                <h4>Scope of Practice</h4>
                <p>Advanced Paramedic (AP) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s26",
                shortTitle: "M25 Penthrox",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Methoxyflurane (Penthrox)</h3>
                <h4>Classification</h4>
                <p>Inhaled Anesthetic</p>
                <h4>Presentation</h4>
                <p>3 mL vial</p>
                <h4>Mechanism of Action</h4>
                <p>Depresses the central nervous system primarily through enhancing GABA‑A receptor activity to increase inhibitory neurotransmission. Inhibits NMDA receptors to reduce excitatory pain signals.</p>
                <h4>Indications</h4>
                <p>Moderate to Severe Pain; Moderate Pain with occasional Severe Pain associated with procedures.</p>
                <h4>Contraindications</h4>
                <p>Patients unable to obey commands, or are unable to self‑administer; history of malignant hyperthermia (rare); known renal impairment; severe liver disease; hypersensitivity to anesthetics.</p>
                <h4>Precautions</h4>
                <p>Age >75 years – elderly patients are more likely to have renal impairment; pre‑eclampsia – renal impairment is likely in pre‑eclampsia.</p>
                <h4>Side Effects</h4>
                <p>Dizziness; headache; mild and temporary sedation.</p>
                <h4>Adult Dose & Administration</h4>
                <p>3 mLs Methoxyflurane self‑administered (repeat dose once if required). Adult maximum dose in 24 hours is 6 mL (2 doses).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Pediatric maximum dose 3 mL (single dose). Generally, pediatrics should be greater than 5 years old to understand how to self‑administer methoxyflurane. Administration in pediatrics has not been widely studied. However, methoxyflurane is widely administered in the pre‑hospital setting with minimal reported adverse effects. When administered to pediatrics, methoxyflurane should be administered sparingly and more appropriate analgesics should be used once they are available.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Administration during labor is not recommended.<br>Lactation: Safety has not been established. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Methoxyflurane is an effective analgesic provided adequate coaching is provided. The analgesic effect of methoxyflurane will wear off approximately 30 seconds after inhalation has stopped. Constant inhalation is required to provide on‑going analgesia.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s27",
                shortTitle: "M26 Metoclopramide",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Metoclopramide</h3>
                <h4>Classification</h4>
                <p>Antiemetic</p>
                <h4>Presentation</h4>
                <p>10 mg/2 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Antagonizes dopamine‑2 receptors in the chemoreceptor trigger zone (CTZ) reducing nausea. Metoclopramide also (weakly) blocks stimulation of the 5‑HT3 receptors in the gastro‑intestinal system further reducing nausea and increasing gastric motility.</p>
                <h4>Indications</h4>
                <p>Nausea and Vomiting.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; epilepsy; Parkinson's disease; tardive dyskinesia; suspected gastro‑intestinal hemorrhage or obstruction; pheochromocytoma; recent gastro‑intestinal surgery; age <1 year; allergy to procainamide.</p>
                <h4>Precautions</h4>
                <p>Pediatrics (extrapyramidal effects).</p>
                <h4>Side Effects</h4>
                <p>Extrapyramidal effects (common in children); rash; hypotension; dyspnea; drowsiness and dizziness.</p>
                <h4>Adult Dose & Administration</h4>
                <p>10 mg IV/IM (slow IV over 3 minutes, or diluted in 100 mL normal saline and administered as an infusion).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Generally not recommended for routine pediatric administration (significant risk of extrapyramidal effects). 0.1 mg/kg IV/IM (slow IV over 3 minutes).</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Routine administration in pregnancy is not recommended.<br>Lactation: Safety has not been established. Routine administration in lactation is not recommended. If essential to be administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Metoclopramide should not be mixed with morphine. Metoclopramide should not be administered prophylactically after opiate administration. Only administer if nausea occurs.</p>
                <h4>Scope of Practice</h4>
                <p>Paramedic (P) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s28",
                shortTitle: "M27 Midazolam",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Midazolam</h3>
                <h4>Classification</h4>
                <p>Benzodiazepine</p>
                <h4>Presentation</h4>
                <p>5 mg/1 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Potentiates the action of the GABA neurotransmitter producing sedation and seizure inhibition.</p>
                <h4>Indications</h4>
                <p>Seizures; sedation of agitated or combative patients.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Respiratory distress; shock and/or hypotension.</p>
                <h4>Side Effects</h4>
                <p>Reduced level of consciousness; respiratory depression; hypotension.</p>
                <h4>Adult Dose & Administration</h4>
                <p><strong>Seizures:</strong> 5 mg IV/IO/IM (repeat once after 10 minutes if required).<br>
                <strong>Sedation:</strong> 1‑5 mg IV/IO/IM.<br>
                <strong>Dilution for IV/IO administration:</strong> In a 5 mL syringe, draw up 4 mL of normal saline. Add 1 mL (5 mg) of Midazolam. Concentration is now 1 mg/1 mL.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><strong>Seizures:</strong> 0.1 mg/kg IV (max 5 mg – may repeat once after 10 minutes if required); 0.2 mg/kg IM (max 5 mg – may repeat once after 10 minutes if required).<br>
                Dilution as for adults.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Fetal harm has been demonstrated however, midazolam should be administered if clinically indicated.<br>Lactation: Safety has not been established however, midazolam should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Benzodiazepines may cause airway, breathing and circulation compromise. If administered, all possible monitoring should be in place, including nasal end‑tidal CO₂ monitoring. An IV (if not available in place) should be established as soon as possible after administration.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s29",
                shortTitle: "M28 Morphine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Morphine</h3>
                <h4>Classification</h4>
                <p>Opiate Analgesic (opiate agonist)</p>
                <h4>Presentation</h4>
                <p>10 mg/1 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Binds with Mu opioid pain receptors producing analgesia.</p>
                <h4>Indications</h4>
                <p>Severe pain.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; respiratory depression; SBP <90 mmHg.</p>
                <h4>Precautions</h4>
                <p>Respiratory distress or difficulty; elderly >65 years old; pediatrics age <1 year (increased risk of respiratory depression); morbid obesity; moderate hypotension / shock.</p>
                <h4>Side Effects</h4>
                <p>Respiratory depression; hypotension; drowsiness / reduced level of consciousness; rash.</p>
                <h4>Adult Dose & Administration</h4>
                <p>2.5 mg increments IV/IO (repeat every 5 minutes, maximum 10 mg); 2‑10 mg IM (maximum 20 mg).<br>
                <strong>Dilution for IV/IO Administration:</strong> In a 10 mL syringe, draw up 9 mL of normal saline. Add 1 mL (10 mg) Morphine. Concentration is now 1 mg/1 mL.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>0.1 mg/kg IV/IM/IO.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: May cause fetal harm. Morphine should only be administered when the benefit outweighs the risk. This should be discussed with the mother and/or family wherever possible. Morphine should not be administered in labor. Morphine crosses the placenta and may result in respiratory depression of the newborn.<br>Lactation: Safety has not been established. Morphine should only be administered when the benefit outweighs the risk. This should be discussed with the mother and/or family wherever possible.</p>
                <h4>Additional Information</h4>
                <p>Morphine should be administered with caution to patients with respiratory distress or difficulty (including chest injuries), the elderly >65 years, infants <1 year and morbidly obese individuals as it may suppress respiratory drive. Use lower, carefully titrated doses and monitor closely for respiratory depression.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s30",
                shortTitle: "M29 Naloxone",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Naloxone</h3>
                <h4>Classification</h4>
                <p>Opiate Antagonist / Opiate Antidote</p>
                <h4>Presentation</h4>
                <p>0.4 mg/1 mL ampule; 4 mg pre‑filled intranasal spray</p>
                <h4>Mechanism of Action</h4>
                <p>Naloxone competitively binds with opiate receptors reversing the effect of opiate agonists such as morphine.</p>
                <h4>Indications</h4>
                <p>Opiate overdose.</p>
                <h4>Contraindications</h4>
                <p>Known allergy.</p>
                <h4>Precautions</h4>
                <p>Severe hypoxia prior to administration.</p>
                <h4>Side Effects</h4>
                <p>Withdrawal symptoms (including arrhythmias and seizures); hypoxia‑related agitation after rapid reversal without pre‑oxygenation.</p>
                <h4>Adult Dose & Administration</h4>
                <p>0.4 mg IV/IO/IM (repeated every 3 minutes as required, maximum 2 mg); 4 mg IN (repeated every 3 minutes as required).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>0.01 mg/kg IV/IO/IM (repeated every 3 minutes as required).</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However, naloxone should be administered when clinically indicated.<br>Lactation: Safety has not been established. However, naloxone should be administered when clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>IV or IN is the preferred method of administration. All cases of opiate overdose should be transferred to hospital even if naloxone has been effective. If maximum dose has been reached, strongly consider other causes of unconsciousness before further administration. For intranasal pre‑filled spray: Do not ‘test’ or ‘prime’ before use. Titrate naloxone carefully to reverse respiratory depression only, while monitoring to prevent fully awakening the patient which may cause excessive aggression.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s31",
                shortTitle: "M30 Nefopam",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Nefopam</h3>
                <h4>Classification</h4>
                <p>Non‑opioid analgesic</p>
                <h4>Presentation</h4>
                <p>20 mg/2 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Acts as a serotonin, norepinephrine, and dopamine reuptake inhibitor in the central nervous system, dampening pain signals.</p>
                <h4>Indications</h4>
                <p>Moderate to severe pain.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; history of epilepsy; pain associated with STEMI/NSTEMI; renal impairment; pediatrics <13 years.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Nausea; vomiting; tremors; dry mouth.</p>
                <h4>Adult Dose & Administration</h4>
                <p>20 mg IV (once only, dilute with 100 mL Normal Saline and administer as an infusion over 5 minutes).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Not for pediatric administration.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. Nefopam is not recommended for use in pregnancy.<br>Lactation: Safety has not been established. Nefopam is not recommended for use during lactation.</p>
                <h4>Additional Information</h4>
                <p>Nefopam must not be administered in the same IV line as Diclofenac as there is a chance of precipitation.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s32",
                shortTitle: "M31 Oxygen",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#wind"/></svg> Oxygen</h3>
                <h4>Classification</h4>
                <p>Gas</p>
                <h4>Presentation</h4>
                <p>Black colour cylinder with white shoulder</p>
                <h4>Mechanism of Action</h4>
                <p>Oxygen administration delivers supplemental oxygen to patients with low blood oxygen levels (hypoxemia) to improve tissue oxygenation and support vital organ function.</p>
                <h4>Indications</h4>
                <p>SpO₂ <94%.</p>
                <h4>Contraindications</h4>
                <p>Bleomycin lung injury.</p>
                <h4>Precautions</h4>
                <p>Administration to newborns.</p>
                <h4>Side Effects</h4>
                <p>Prolonged use in COPD patients may lead to a reduction in ventilation stimulus.</p>
                <h4>Adult Dose & Administration</h4>
                <p>As determined by relevant CPG to maintain targeted oxygen levels.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>As determined by relevant CPG to maintain targeted oxygen levels.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safe to use in pregnancy and should be administered when clinically indicated.<br>Lactation: Safe to use in lactation and should be administered when clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>All clinical levels – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s33",
                shortTitle: "M32 Paracetamol",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Paracetamol (Acetaminophen)</h3>
                <h4>Classification</h4>
                <p>Non‑opioid analgesic and antipyretic</p>
                <h4>Presentation</h4>
                <p>Oral Tablets: 500 mg/tablet; Rectal Suppositories: 125 mg and 250 mg/suppository; Bottle for IV administration: 1000 mg/100 mL.</p>
                <h4>Mechanism of Action</h4>
                <p>Paracetamol works primarily by inhibiting prostaglandin synthesis in the central nervous system.</p>
                <h4>Indications</h4>
                <p>Moderate to Severe Pain; Fever >38°C.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; if patient has already taken paracetamol within the last 4 hours, or if the maximum daily dose has already been reached.</p>
                <h4>Precautions</h4>
                <p>Nil.</p>
                <h4>Side Effects</h4>
                <p>Rapid administration of IV paracetamol may cause hypotension; pruritus; nausea; vomiting.</p>
                <h4>Adult Dose & Administration</h4>
                <p>IV/PO: 1000 mg (maximum 4 g in 24 hours). IV doses should be administered slowly over 10 minutes to avoid toxicity.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>PR: <5 years: 125 mg; >5 years: 250 mg. IV: 10 mg/kg. IV doses should be administered slowly over 10‑15 minutes to avoid toxicity.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However, paracetamol is generally considered safe to use in pregnancy and may be administered when clinically indicated.<br>Lactation: Safety has not been established. However, paracetamol is generally considered safe to use in lactation and may be administered when clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Caution should be utilised when administering IV paracetamol to pediatrics without a syringe driver, infusion pump or micro‑drip set due to the inability to accurately administer the dose. IV administration to pediatrics <33 kg is generally not recommended due to the risk of toxicity.</p>
                <h4>Scope of Practice</h4>
                <p>EMR for PO; EMT for IV/PR – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s34",
                shortTitle: "M33 Pethidine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Pethidine</h3>
                <h4>Classification</h4>
                <p>Opiate Analgesic</p>
                <h4>Presentation</h4>
                <p>50 mg/1 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Binds with Mu opioid pain receptors creating analgesia.</p>
                <h4>Indications</h4>
                <p>Moderate to Severe Pain.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; respiratory depression; SBP <90 mmHg; renal impairment; concurrent use of Mono Amine Oxidase Inhibitors; suspected bowel obstruction.</p>
                <h4>Precautions</h4>
                <p>Respiratory distress or difficulty; elderly; pediatrics age <1 year (increased risk of respiratory depression); morbid obesity; moderate hypotension / shock.</p>
                <h4>Side Effects</h4>
                <p>Respiratory depression; hypotension; drowsiness / reduced level of consciousness; arrhythmias.</p>
                <h4>Adult Dose & Administration</h4>
                <p>IM: 25‑100 mg (maximum 400 mg/24 hours). IV: 25‑50 mg. Administer slowly over 2 minutes. (maximum 200 mg/24 hours).<br>
                <strong>Dilution for IV administration:</strong> In a 10 mL syringe, draw up 9 mL of normal saline. Add 1 mL (50 mg) of Pethidine. Concentration is 5 mg/1 mL (50 mg in 10 mL).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>IM: 0.5‑2 mg/kg (repeat after 4 hours).</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: May cause fetal harm. Pethidine should not be administered during pregnancy.<br>Lactation: Safety has not been established. Pethidine should only be administered if the benefit outweighs the risk. If administered, the mother should be advised to stop breast feeding until advised by their physician.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Physician (EP) – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s35",
                shortTitle: "M34 Racemic Epinephrine",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Racemic Epinephrine (Adrenaline)</h3>
                <h4>Classification</h4>
                <p>Adrenergic Agonist</p>
                <h4>Presentation</h4>
                <p>0.5 mL nebule containing 2.25% racemic epinephrine</p>
                <h4>Mechanism of Action</h4>
                <p>Adrenaline acts on alpha‑1 adrenergic receptors in the mucosal blood vessels of the larynx and trachea. This causes vasoconstriction, reducing blood flow to the inflamed tissues and decreasing edema (swelling) in the airway.</p>
                <h4>Indications</h4>
                <p>Croup.</p>
                <h4>Contraindications</h4>
                <p>Known allergy to racemic epinephrine preparation.</p>
                <h4>Precautions</h4>
                <p>Heart disease or structural abnormalities; hypertension; thyroid disease.</p>
                <h4>Side Effects</h4>
                <p>Tachycardia; arrhythmias; tremors; arrhythmias (including VF); pulmonary edema; headache.</p>
                <h4>Adult Dose & Administration</h4>
                <p>0.5 mL Nebulized (diluted in 3 mL normal saline or sterile water).</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>>4 years: 0.5 mL Nebulized (diluted in 3 mL normal saline or sterile water).<br><4 years: 0.05 mL/kg (max 0.5 mL, diluted in 3 mL normal saline or sterile water).</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However racemic epinephrine should be administered when clinically indicated.<br>Lactation: Safety has not been established. However racemic epinephrine should be administered when clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s36",
                shortTitle: "M35 Ringers Lactate",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg> Ringers Lactate</h3>
                <h4>Classification</h4>
                <p>Isotonic Crystalloid</p>
                <h4>Presentation</h4>
                <p>250 mL bottle</p>
                <h4>Mechanism of Action</h4>
                <p>Replaces intravascular volume to maintain organ perfusion.</p>
                <h4>Indications</h4>
                <p>Maintenance of blood pressure / intravascular volume and end organ perfusion as per relevant CPG.</p>
                <h4>Contraindications</h4>
                <p>Hypersensitivity to Ringers Lactate; pediatrics <1 month; Diabetic Ketoacidosis (DKA); hypervolemia.</p>
                <h4>Precautions</h4>
                <p>Crush Injuries; Renal Failure; Liver Failure.</p>
                <h4>Side Effects</h4>
                <p>Hyperkalemia; hypervolemia; hyponatremia.</p>
                <h4>Adult Dose & Administration</h4>
                <p>Administration as per relevant CPG.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>Administration as per relevant CPG. Routine administration to pediatrics should be avoided. Normal Saline is preferred.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However, Ringers Lactate should be administered when clinically indicated.<br>Lactation: Safety has not been established. However, Ringers Lactate should be administered when clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s37",
                shortTitle: "M36 Salbutamol",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Salbutamol</h3>
                <h4>Classification</h4>
                <p>Bronchodilator (Beta‑2 selective adrenergic agonist)</p>
                <h4>Presentation</h4>
                <p>2.5 mg/2.5 mL nebule</p>
                <h4>Mechanism of Action</h4>
                <p>Binds with B‑2 adrenergic receptors causing bronchodilation.</p>
                <h4>Indications</h4>
                <p>Bronchospasm associated with: Asthma; COPD; Anaphylaxis; Post Drowning/water inhalation; Tocolysis associated with prolapsed umbilical cord.</p>
                <h4>Contraindications</h4>
                <p>Known allergy to salbutamol.</p>
                <h4>Precautions</h4>
                <p>Hypertension; tachyarrhythmias; last trimester pregnancy.</p>
                <h4>Side Effects</h4>
                <p>Angina; tachycardia; tachyarrhythmias.</p>
                <h4>Adult Dose & Administration</h4>
                <p>5 mg Nebulized, repeat as required. Dilute dose with normal saline or sterile water to a maximum of 5 mL.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p><5 years: 2.5 mg nebulized, repeat as required; >5 years: 5 mg nebulized, repeat as required. Dilute dose with normal saline or sterile water to a maximum of 5 mL.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However, salbutamol should be administered if clinically indicated.<br>Lactation: Safety has not been established. However, salbutamol should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s38",
                shortTitle: "M37 Normal Saline",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#droplet"/></svg> Sodium Chloride 0.9% (Normal Saline)</h3>
                <h4>Classification</h4>
                <p>Isotonic Crystalloid</p>
                <h4>Presentation</h4>
                <p>250 mL bottle or bag; 100 mL bottle</p>
                <h4>Mechanism of Action</h4>
                <p>Replaces intravascular volume to maintain organ perfusion.</p>
                <h4>Indications</h4>
                <p>Maintenance of end organ perfusion as per appropriate CPG; Hyperglycemia; Flushing of IV/IO lines; Medication dilution.</p>
                <h4>Contraindications</h4>
                <p>Known allergy to normal saline preparation; Pulmonary edema / Fluid overload.</p>
                <h4>Precautions</h4>
                <p>Cardiovascular disease; Heart Failure; Renal Failure.</p>
                <h4>Side Effects</h4>
                <p>Fluid overload.</p>
                <h4>Adult Dose & Administration</h4>
                <p>As per appropriate CPG.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>As per appropriate CPG.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safe to use in pregnancy.<br>Lactation: Safe to use in lactation.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Emergency Medical Technician (EMT) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            },
            {
                id: "m1-38s39",
                shortTitle: "M38 Tranexamic Acid",
                summary: `
            <div class="sum-card">
                <h3 style="color:var(--primary-accent);"><svg class="lucide" width="1em" height="1em" aria-hidden="true" focusable="false"><use href="../icons/sprite.svg#pill"/></svg> Tranexamic Acid</h3>
                <h4>Classification</h4>
                <p>Antifibrinolytic</p>
                <h4>Presentation</h4>
                <p>500 mg/5 mL ampule</p>
                <h4>Mechanism of Action</h4>
                <p>Tranexamic Acid blocks the conversion of plasminogen to plasmin, reducing fibrinolysis, reducing blood loss.</p>
                <h4>Indications</h4>
                <p>Uncontrolled bleeding secondary to trauma; Significant bleeding associated with post partum hemorrhage.</p>
                <h4>Contraindications</h4>
                <p>Known allergy; >3 hours since time of injury or start of bleeding.</p>
                <h4>Precautions</h4>
                <p>First trimester pregnancy; renal impairment; females taking oral contraceptives; concurrent thromboembolic disease process; suspected subarachnoid hemorrhage.</p>
                <h4>Side Effects</h4>
                <p>Thrombosis; convulsions; hypotension with rapid injections.</p>
                <h4>Adult Dose & Administration</h4>
                <p>1000 mg IV. Once only. Administered within 3 hours since onset of bleeding. Dilute in 100 mL normal saline, administer over 10 minutes.</p>
                <h4>Pediatric Dose & Administration</h4>
                <p>15 mg/kg IV. Once only. Slow IV over 10 minutes.</p>
                <h4>Use in Pregnancy and Lactation</h4>
                <p>Pregnancy: Safety has not been established. However tranexamic acid should be administered if clinically indicated.<br>Lactation: Safety has not been established. However tranexamic acid should be administered if clinically indicated.</p>
                <h4>Additional Information</h4>
                <p>Nil.</p>
                <h4>Scope of Practice</h4>
                <p>Paramedic (P) and above – independent practice.</p>
            </div>
        `,
                flashcards: [],
                quiz: [],
                critical: []
            }
    ]
};
