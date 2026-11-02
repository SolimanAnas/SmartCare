# Drug Formulary: reference notes

The facts the rewritten drug pages rely on, each with its source. Every number
on a formulary drug page must appear here (`tests/test_content_guides.py`).
Doses are general international adult and pediatric emergency doses; local
protocols decide who may give what.

Sources:

- **AHA 2025** – adult and pediatric ALS (arrest drugs, bradycardia,
  tachycardia, post-ROSC care); **ERC 2025**; **PALS**.
- **ACC/AHA and ESC** – STEMI and ACS guidelines (antiplatelets, heparin,
  nitrates).
- **ACOG** – hypertension in pregnancy (labetalol).
- **WAO / EAACI** – anaphylaxis.
- **BNF / BNFc, Lexicomp** – product strengths, routes, precautions.
- **UK Renal Association / KDIGO** – emergency hyperkalaemia (calcium).
- **Toxicology references (Goldfrank's)** – sodium bicarbonate in
  sodium-channel blocker toxicity.
- **Surviving Sepsis Campaign** – vasopressors (norepinephrine first,
  vasopressin 0.03 units/min).
- **Teleflex (EZ-IO)** – IO lidocaine.

## Group A: cardiac and resuscitation

- **Adenosine** – 6 mg/2 mL. Adult 6 mg rapid IV push, then 12 mg, each with
  a 20 mL saline flush; child 0.1 mg/kg (maximum 6 mg), then 0.2 mg/kg
  (maximum 12 mg). Reduce to 3 mg in heart transplant or with dipyridamole
  or carbamazepine. Avoid in irregular or polymorphic tachycardia, AF with
  WPW, 2nd or 3rd degree block, severe asthma. (AHA 2025, PALS, BNF)
- **Amiodarone** – 150 mg/3 mL. VF/pVT after the 3rd shock 300 mg IV/IO, then
  150 mg after the 5th shock. Stable wide-complex tachycardia 150 mg over
  10 minutes in 100 mL D5W. Child 5 mg/kg, repeat to 15 mg/kg. (AHA 2025,
  ERC 2025, PALS)
- **Aspirin** – 81 mg chewable (or 300 mg). 162–325 mg chewed (4 × 81 mg =
  324 mg); top up to 324 mg if some was taken within the last hour.
  (AHA/ACC)
- **Atropine** – 0.5 mg/5 mL or 1 mg/10 mL; onset 1–2 minutes. Bradycardia
  1 mg IV every 3–5 minutes, maximum 3 mg. Organophosphates 2 mg IV/IM,
  doubling every 5 minutes until secretions dry. Child 0.02 mg/kg
  (minimum 0.1 mg, maximum single dose 0.5 mg); organophosphates
  0.02–0.05 mg/kg. (AHA 2025, PALS, CHEMM)
- **Calcium chloride 10%** – 1 g/10 mL; about 3 times the calcium of
  gluconate. Adult 1 g (10 mL) slow IV/IO over 5 minutes, push in arrest,
  may repeat once. Child 20 mg/kg (0.2 mL/kg), maximum 1 g. (AHA, PALS)
- **Calcium gluconate 10%** – 10 mL (1 g). Adult 30 mL (3 g) over
  5–10 minutes; child 0.5 mL/kg (50 mg/kg), maximum 20 mL. Hydrofluoric acid
  burns: 2.5% gel. (UK Renal Association, BNFc)
- **Clopidogrel** – 75 mg and 300 mg tablets. STEMI for primary PCI 600 mg;
  with fibrinolysis 300 mg; 75 mg if over 75 years with fibrinolysis.
  (ESC, ACC/AHA)
- **Diltiazem** – 25 mg/5 mL; onset 2–5 minutes. 0.25 mg/kg over 2 minutes
  (about 15–20 mg), then 0.35 mg/kg (about 20–25 mg) after 15 minutes.
  Avoid if SBP below 90 mmHg, heart failure, WPW, 2nd or 3rd degree block.
  (AHA 2025)
- **Dopamine** – 200 mg/5 mL. 5–10 mcg/kg/min mainly inotropic,
  10–20 mcg/kg/min vasoconstriction; adult 5–20 mcg/kg/min, child
  2–20 mcg/kg/min. (AHA, PALS)
- **Epinephrine** – 1 mg/mL; 0.1 mg/mL 10 mL syringe; auto-injectors 0.3 mg
  and 0.15 mg (under 25 kg). Arrest 1 mg IV/IO every 3–5 minutes (child
  0.01 mg/kg, 0.1 mL/kg of 0.1 mg/mL, maximum 1 mg); non-shockable as soon as
  possible, shockable after the 2nd shock. Anaphylaxis 0.5 mg IM
  (0.5 mL of 1 mg/mL) or 0.3 mg auto-injector, repeat after 5 minutes; child
  0.01 mg/kg IM, maximum 0.5 mg. Push dose 10–20 mcg every 2–5 minutes;
  infusion 2–10 mcg/min; child 0.05–0.3 mcg/kg/min. (AHA 2025, WAO, PALS)
- **Glyceryl trinitrate** – 0.4 mg per spray; onset 1–3 minutes. 0.4 mg
  sublingual every 5 minutes, up to 3; pulmonary oedema 0.4–0.8 mg repeated.
  Avoid if SBP below 90 mmHg (or 30 below baseline), HR below 50 or above
  100, RV infarction, sildenafil or vardenafil within 24 hours, tadalafil
  within 48 hours. (AHA/ACC)
- **Heparin** – 5,000 units/mL. Primary PCI 70–100 units/kg (often
  5,000 units); with fibrinolysis 60 units/kg, maximum 4,000 units.
  (ACC/AHA, ESC)
- **Labetalol** – 100 mg/20 mL (5 mg/mL); onset 5–10 minutes. Severe
  hypertension in pregnancy (160/110 mmHg or more): 20 mg IV over 2 minutes,
  then 40 mg after 10 minutes, then 80 mg every 10 minutes, maximum 300 mg.
  (ACOG)
- **Lidocaine 2%** – 100 mg/5 mL. VF/pVT 1–1.5 mg/kg, then 0.5–0.75 mg/kg,
  maximum 3 mg/kg; child 1 mg/kg. IO pain 40 mg (2 mL of 2%), wait about
  60 seconds, flush, 20 mg more if needed; child 0.5 mg/kg, maximum 40 mg.
  (AHA 2025, PALS, Teleflex)
- **Metoprolol** – 5 mg/5 mL. 2.5–5 mg IV over 2 minutes, every 5 minutes,
  maximum 15 mg. Avoid if SBP below 100 mmHg or HR below 60, 2nd or 3rd
  degree block, heart failure. (AHA 2025)
- **Norepinephrine** – 4 mg/4 mL; 4 mg in 250 mL = 16 mcg/mL.
  0.1–0.5 mcg/kg/min (about 2–20 mcg/min) to MAP 65 mmHg or more; child
  0.05–0.5 mcg/kg/min. (AHA 2025, Surviving Sepsis)
- **Procainamide** – 1 g/10 mL (100 mg/mL). 20–50 mg/min until the
  arrhythmia stops, hypotension, QRS widens over 50%, or 17 mg/kg;
  maintenance 1–4 mg/min. Child 15 mg/kg over 30–60 minutes. (AHA 2025,
  PALS)
- **Sodium bicarbonate 8.4%** – 50 mEq/50 mL. 1–2 mEq/kg (child 1 mEq/kg,
  4.2% for infants); QRS over 100 ms in TCA toxicity; target pH
  7.45–7.55 in hospital. Not routine in arrest. (AHA 2025, Goldfrank's)
- **Ticagrelor** – 90 mg tablets. 180 mg (2 × 90 mg); aspirin 100 mg or less
  daily afterwards. (ESC, ACC/AHA)
- **Vasopressin** – 20 units/mL. 40 units once in arrest only where local
  protocol lists it (no advantage over epinephrine); septic shock
  0.03 units/min. (AHA 2025, Surviving Sepsis)

## Group B: respiratory and allergy

- **Budesonide** – 0.5 mg/2 mL and 1 mg/2 mL nebules. Croup: 2 mg nebulised
  once when oral or IM steroid isn't possible. (BNFc, NICE CKS croup)
- **Chlorphenamine** – 10 mg/mL injection; 4 mg tablets; 2 mg/5 mL syrup;
  onset 30 minutes orally. Adult 10 mg IM or slow IV (4 mg orally). Child
  6 months to 6 years 2.5 mg; 6–12 years 5 mg; over 12 years 10 mg. Not
  first-line in anaphylaxis. (BNF/BNFc, RCUK 2021)
- **Combivent** – 2.5 mL nebule: salbutamol 2.5 mg + ipratropium 0.5 mg;
  ipratropium up to 3 doses in the first hour; COPD oxygen 88–92%. (GINA,
  GOLD)
- **Dexamethasone** – 4 mg/mL; onset 1–2 hours, lasts about 3 days. Adult
  10 mg; croup 0.15–0.6 mg/kg (maximum 16 mg); asthma 0.6 mg/kg (maximum
  16 mg). (AAP, GINA)
- **Diphenhydramine** – 50 mg/mL; onset 15–30 minutes IM. Adult 25–50 mg IM
  or slow IV over 5 minutes; child 1 mg/kg (maximum 50 mg). Dystonic
  reactions 25–50 mg. (Lexicomp)
- **Hydrocortisone** – 100 mg. Adrenal crisis 100 mg IM/IV; child under
  1 year 25 mg, 1–5 years 50 mg, 6 years or more 100 mg. Severe asthma
  100 mg; child 4 mg/kg (maximum 100 mg). (Society for Endocrinology 2020,
  BNFc)
- **Ipratropium** – 250 mcg/2 mL and 500 mcg/2 mL; onset 15–20 minutes.
  Adult 500 mcg; child under 12 years 250 mcg, 12 years or more 500 mcg;
  every 20 minutes up to 3 doses. (GINA, PALS)
- **Magnesium sulfate** – 50% (5 g/10 mL); 500 mg/2 mL. Asthma 2 g IV over
  20 minutes; child 40 mg/kg (maximum 2 g). Eclampsia 4–6 g IV over
  20–30 minutes or 10 g IM (5 g each buttock, WHO). Torsades 1–2 g over
  5–20 minutes; child 25–50 mg/kg (maximum 2 g). Toxicity: knee reflexes
  lost, respiratory rate below 12/min; calcium gluconate 1 g. (BTS/SIGN,
  ACOG, WHO, AHA 2025)
- **Methylprednisolone** – 40 mg and 125 mg vials. Adult 125 mg IV/IM over at
  least 1 minute; child 1–2 mg/kg (maximum 125 mg). (Lexicomp, NAEPP)
- **Oxygen** – targets 94–98%, 88–92% in CO₂ retainers; Venturi 24–28%;
  high-flow 15 L/min or 100% in CO poisoning and arrest; newborn 21% at
  35 weeks or more, 21–30% under 35 weeks. (BTS 2017, NRP 2025)
- **Prednisolone** – 5 mg tablets; 5 mg/5 mL and 15 mg/5 mL; onset 4–6 hours.
  Adult 40–50 mg; child 1–2 mg/kg (maximum 40 mg); croup 1 mg/kg. (GINA,
  BTS/SIGN)
- **Racemic epinephrine 2.25%** – 0.5 mL nebule in 3 mL saline; child
  0.05 mL/kg (maximum 0.5 mL). Alternative epinephrine 1 mg/mL 0.5 mL/kg
  (maximum 5 mL). Rebound after about 2 hours. (AAP, PALS)
- **Salbutamol (albuterol)** – 2.5 mg/2.5 mL and 5 mg/2.5 mL; 100 mcg
  inhaler. Adult 5 mg every 20 minutes or 4–10 puffs; child under 5 years
  2.5 mg (2–6 puffs), 5 years or older 2.5–5 mg (4–10 puffs). (BTS/SIGN,
  GINA)
- **Terbutaline** – 1 mg/mL; onset 5–15 minutes SC. Adult 0.25 mg SC, repeat
  once after 15–30 minutes (maximum 0.5 mg in 4 hours); child 0.01 mg/kg
  (maximum 0.25 mg). (NAEPP, Lexicomp)

## Group C: sedation, seizures, airway drugs, analgesia and antiemetics

- **Diazepam** – 10 mg/2 mL; rectal 5 mg and 10 mg; onset 1–3 minutes IV,
  5–10 minutes rectal. Seizure 0.15–0.2 mg/kg IV (usually 10 mg), repeat
  once after 5 minutes, maximum 10 mg per dose; child 0.1–0.2 mg/kg IV (maximum 10 mg) or 0.5 mg/kg
  rectally (maximum 20 mg). Agitation 5 mg IV. (AES 2016, BNF)
- **Diclofenac** – 75 mg/3 mL; onset 15–30 minutes IM; 75 mg deep IM. (BNF)
- **Droperidol** – 2.5 mg/mL; onset 3–10 minutes IV, 10–15 minutes IM.
  Agitation 5–10 mg IM or 2.5–5 mg IV, repeat once after 15 minutes; nausea
  0.625–1.25 mg IV. (ACEP, Lexicomp)
- **Ethyl chloride** – 100 mL spray; spray 3–7 seconds from 8–23 cm
  (3–9 inches). (Manufacturer)
- **Etomidate** – 2 mg/mL (20 mg/10 mL); onset 30–60 seconds, lasts
  3–5 minutes; 0.3 mg/kg IV; child 0.2–0.3 mg/kg. (Lexicomp)
- **Fentanyl** – 100 mcg/2 mL; onset 1–2 minutes, lasts 30–60 minutes. Adult
  25–50 mcg IV every 5 minutes (maximum 200 mcg); 1–2 mcg/kg IN/IM. Child
  1 mcg/kg IV (maximum single dose 50 mcg); 1.5 mcg/kg IN (maximum
  100 mcg). (NASEMSO)
- **Haloperidol** – 5 mg/mL; onset 15–30 minutes IM; 5 mg IM; older adults
  0.5–2 mg. (BNF)
- **Hyoscine butylbromide** – 20 mg/mL; onset 10–15 minutes IM; 20 mg IV, IM
  or SC, repeat after 30 minutes, maximum 100 mg a day. (BNF)
- **Ibuprofen** – 200 mg and 400 mg; 100 mg/5 mL; onset 30–60 minutes. Adult
  400 mg; child 10 mg/kg (maximum 400 mg) over 3 months and 5 kg; ask about
  NSAIDs in the last 6 hours. (BNFc)
- **Ketamine** – 50 mg/mL (500 mg/10 mL); 10 mg/mL; onset 1 minute IV,
  3–5 minutes IM. Analgesia 0.1–0.3 mg/kg IV or 0.5–1 mg/kg IN (child
  1 mg/kg IN); agitation 4–5 mg/kg IM or 1–2 mg/kg IV; RSI 1–2 mg/kg IV.
  (ACEP, NASEMSO)
- **Ketorolac** – 30 mg/mL; onset 30 minutes, full effect 1–2 hours; 15 mg IV
  or 30 mg IM; age under 17 excluded. (FDA label, ACEP)
- **Lorazepam** – 2 mg/mL or 4 mg/mL; onset 2–3 minutes IV; 4 mg (0.1 mg/kg)
  over 2 minutes, repeat once after 5–10 minutes; child 0.1 mg/kg (maximum
  4 mg). (AES 2016)
- **Methoxyflurane** – 3 mL; 6–10 breaths to onset; one more 3 mL, maximum
  6 mL a day. (Product information)
- **Metoclopramide** – 10 mg/2 mL; onset 1–3 minutes IV, 10–15 minutes IM;
  10 mg slow IV over 3 minutes; child 0.1–0.15 mg/kg, not under 1 year.
  (BNF/BNFc)
- **Midazolam** – 5 mg/mL; onset 1–3 minutes IV, 5–10 minutes IM/IN. Seizure
  10 mg IM over 40 kg, 5 mg IM for 13–40 kg, 0.2 mg/kg IN (maximum 10 mg),
  IV 0.1–0.2 mg/kg (maximum 10 mg per dose), repeat once after 5–10 minutes. Sedation 1–5 mg IV,
  5–10 mg IM. (AES 2016)
- **Morphine** – 10 mg/mL; onset 5 minutes IV, lasts 3–5 hours. 2.5–5 mg IV
  every 5 minutes (0.1 mg/kg), maximum 10–20 mg per protocol; 5–10 mg IM;
  child 0.1 mg/kg (maximum single dose 5 mg); avoid if SBP below 90 mmHg.
  (NASEMSO)
- **Naloxone** – 0.4 mg/mL; 4 mg spray; onset 1–2 minutes IV, lasts
  30–90 minutes. 0.04–0.4 mg IV every 2–3 minutes, up to 2 mg; 0.4 mg IM;
  child 0.01 mg/kg titrated to 0.1 mg/kg (maximum 2 mg). (AHA 2025, PALS)
- **Nefopam** – 20 mg/2 mL; 20 mg IV infusion over 15 minutes in 100 mL;
  onset 15–20 minutes. (BNF)
- **Nitrous oxide 50% / oxygen 50%** – onset 2–3 minutes; self-administered,
  usually from 5 years; avoid in the first 16 weeks of pregnancy
  (relative); below 10 °C invert the cylinder. (BOC Entonox, JRCALC)
- **Ondansetron** – 4 mg/2 mL; 4 mg ODT; onset 15–30 minutes ODT. 4 mg over
  2–5 minutes, maximum 8 mg; child 0.1 mg/kg (maximum 4 mg); ODT 8–15 kg
  2 mg, 15–30 kg 4 mg, over 30 kg 4–8 mg. (Lexicomp)
- **Paracetamol** – 500 mg tablets; 125 mg and 250 mg suppositories; 1 g/100 mL
  IV; onset 30–60 minutes orally, 5–10 minutes IV. Adult 1 g over
  15 minutes (15 mg/kg under 50 kg), maximum 4 g a day; fever above 38 °C;
  not if taken in the last 4 hours. Child 15 mg/kg (maximum 1 g); IV under
  10 kg 7.5 mg/kg. (BNF/BNFc)
- **Pethidine** – 50 mg/mL; onset 5 minutes IV, 10–15 minutes IM;
  25–50 mg IV or 25–100 mg IM, maximum 400 mg a day; child 0.5–1 mg/kg IM;
  avoid with MAO inhibitors in the last 2 weeks. (BNF)
- **Promethazine** – 25 mg/mL; onset 20 minutes IM; 12.5–25 mg deep IM; child
  2 years or older 0.25–0.5 mg/kg (maximum 25 mg); not under 2 years. (FDA
  boxed warning, Lexicomp)
- **Propofol** – 10 mg/mL; onset 30 seconds. Induction 1–2 mg/kg (child
  1–2.5 mg/kg); sedation 5–50 mcg/kg/min (0.3–3 mg/kg/h); discard after
  6 hours. (Lexicomp)
- **Rocuronium** – 10 mg/mL; onset 45–60 seconds, lasts 30–60 minutes; RSI
  1–1.2 mg/kg; maintenance 0.1–0.2 mg/kg. (Lexicomp)
- **Succinylcholine** – 50 mg/mL; onset 45–60 seconds, lasts 5–10 minutes;
  1.5 mg/kg (maximum 200 mg); IM 4 mg/kg; child 2 mg/kg under 10 kg,
  1–1.5 mg/kg; avoid in burns, spinal injury or stroke more than 72 hours
  old. (Lexicomp)

## Group D: fluids, glucose, antidotes, obstetric and other drugs

- **Activated charcoal** – 50 g in 250 mL; ideally within 1 hour; adult 50 g,
  child 1 g/kg (maximum 50 g). (AACT/EAPCCT position statement)
- **Ceftriaxone** – 1 g and 2 g vials; 2 g IV over 2–4 minutes or IM split;
  child 80 mg/kg (maximum 2 g); not with calcium fluids in newborns under
  28 days. (NICE meningitis, Lexicomp)
- **Dextrose 5%** – 100 mL (5 g); amiodarone 150 mg in 100 mL. (BNF)
- **Dextrose 10%** – 25 g/250 mL, 50 g/500 mL; onset 1–2 minutes. Adult
  100–250 mL (10–25 g) titrated, recheck after 10 minutes; child 5 mL/kg
  (maximum 250 mL), glucose below 60 mg/dL in children, below 70 mg/dL in
  adults; newborn 2 mL/kg. (ADA, PALS, JRCALC)
- **Dextrose 50%** – 25 g/50 mL; 12.5–25 g (25–50 mL) slow IV; child: use
  D10 5 mL/kg. (ADA)
- **Furosemide** – 20 mg/2 mL; onset 5 minutes (venodilation), diuresis
  30 minutes; 40 mg IV over 1–2 minutes. (ESC heart failure)
- **Glucagon** – 1 mg kit; 3 mg nasal powder (from 4 years); onset about
  10 minutes. Hypoglycaemia 1 mg IM/SC; child 0.5 mg under 25 kg, 1 mg
  25 kg or more. Beta-blocker or calcium-channel blocker overdose 50 mcg/kg
  (3–5 mg) IV over 1–2 minutes, repeat once, then infusion. (ADA,
  toxicology references)
- **Oral glucose** – 15 g tube (40% gel); onset 10–15 minutes; 15–20 g,
  recheck after 15 minutes. (ADA)
- **Hydroxocobalamin** – 5 g mixed with 200 mL saline; 5 g IV over
  15 minutes, second 5 g (maximum 10 g); child 70 mg/kg (maximum 5 g).
  (Cyanokit label)
- **Hypertonic saline 3%** – 250 mL and 500 mL; 250 mL over 10–20 minutes;
  child 3–5 mL/kg (maximum 250 mL). TBI targets: SpO₂ 94% or more, ETCO₂
  35–45 mmHg, SBP 110 mmHg or more. (BTF, NAEMSP)
  Severe symptomatic hyponatraemia (seizures or coma) is dosed separately:
  adult 100 mL of 3% IV over 10 minutes, repeated up to 3 doses until
  symptoms stop; child 2 mL/kg over 10 minutes (maximum 100 mL per dose),
  up to 3 doses. Raise sodium by no more than 10 mmol/L in 24 hours.
  (US Hyponatremia Expert Panel 2013, ESE/ESICM/ERA-EDTA 2014, Moritz & Ayus)
- **Misoprostol** – 200 mcg tablets; 800 mcg sublingual once. (WHO 2023)
- **Sodium chloride 0.9%** – sodium 154 and chloride 154 mmol/L; 100 mL,
  250 mL, 500 mL and 1 L; adult boluses 250–500 mL; trauma SBP 80–90 mmHg
  (110 mmHg with head injury); child 10–20 mL/kg, 10 mL/kg if heart disease.
  (ATLS, PALS)
- **Oxytocin** – 10 IU/mL; onset 2–3 minutes IM; 10 IU IM; infusion 40 IU in
  1 L. (WHO 2023)
- **Pralidoxime** – 1 g vial; auto-injector 600 mg with atropine 2.1 mg;
  30 mg/kg (1–2 g) IV over 15–30 minutes or up to 3 auto-injectors; child
  25–50 mg/kg (maximum 2 g). (CHEMM)
- **Ringer's lactate** – sodium 130, potassium 4, calcium 3 mmol/L; 250 mL,
  500 mL and 1 L; 250–500 mL boluses; child 10–20 mL/kg. (PALS, Surviving
  Sepsis)
- **Thiamine** – 100 mg/mL; 100 mg slow IV over 5 minutes or IM. (BNF, RCP)
- **Tranexamic acid** – 500 mg/5 mL; within 3 hours. Trauma or TBI 1 g IV over
  10 minutes then 1 g over 8 hours; postpartum haemorrhage 1 g, second 1 g
  after 30 minutes; child 15 mg/kg (maximum 1 g). (CRASH-2, CRASH-3, WOMAN,
  WHO 2023)

## Overview page

The overview groups the 77 drugs: cardiac and resuscitation 20, respiratory
and allergy 14, sedation, pain and nausea 26, fluids, glucose, antidotes and
other 17. Its study set reuses the doses above.

- Adenosine half-life is under 10 seconds (AHA 2025): push fast and flush.
- Sildenafil taken 20 hours ago is still inside the 24 hour window for GTN.
- Worked examples: an 18 kg child seizing gets midazolam 0.2 mg/kg intranasal
  = 3.6 mg, or rectal diazepam 0.5 mg/kg = 9 mg; a 22 kg child gets dextrose
  10% 5 mL/kg = 110 mL.
