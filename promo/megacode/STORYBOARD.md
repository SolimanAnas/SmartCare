# SmartCare Megacode — "The Rhythm Changes. Your Decisions Matter."

**Format:** 55 s · 1920×1080 master (+ 1080×1920 social cut) · 30 fps
**Audience:** EMTs, paramedics, nurses, emergency clinicians, ACLS learners
**One message:** SmartCare Megacode lets you practise critical resuscitation decisions in a realistic, interactive clinical scenario.

## Why this scenario

No Megacode case in `pages/megacode-scenarios.js` *opens* in VF, so per the brief I picked the closest
clinically coherent case the engine already supports, without changing the engine:

**Megacode 7 · Crescendo Angina** (in-hospital, cardiology ward, M 66 y)
`Unstable VT → VF → PEA → ROSC`

It is literally "the rhythm changes": a symptomatic monomorphic VT with a pulse is cardioverted
(synchronised, 100 J), the engine degenerates it to VF on delivery, the learner defibrillates
(unsynchronised 200 J) and resumes CPR immediately, and at a later rhythm check finds an organised
rhythm without a pulse (PEA).

Played in **Quick Code** mode: the learner is Team Leader and picks one of four calls each time,
and the engine gives an explanation for every pick.

Every on-screen interface frame is a screenshot of the real `pages/megacode.html` running locally,
driven by Playwright on a virtual clock (`scripts/record.js`). Option order, feedback text, vitals,
waveforms, the code record and the debrief score all come from the engine. The run is reproducible
(seeded `Math.random`).

## Shot list

| # | Time | On-screen text | Picture (all UI = genuine capture) | Sound |
|---|------|----------------|-------------------------------------|-------|
| 1 | 0:00–0:05 | "Would you know what to do next?" | Cold open: a dark, stylised resus-bay backdrop (bokeh lights, a red alarm wash) with the **real Megacode monitor** in perspective showing VT at 160/min. Slow push-in, shallow depth of field. | The engine's alarm pattern ×2, the engine's QRS beeps, a sub heartbeat, a drone. VO1 |
| 2 | 0:05–0:06.5 | — | Briefing card: *Megacode 7 · Crescendo Angina*, vitals, assessment; tap Quick Code, then Start scenario. | Impact, whoosh, UI taps |
| 3 | 0:06.5–0:12 | **Recognize the rhythm.** | The monitor shows wide-complex tachycardia, and the Rhythm check appears: *What rhythm is on the monitor?* Tap **Monomorphic VT**: "✅ Correct — Regular, wide-complex tachycardia with uniform QRS morphology." Then *Is the patient stable?* Tap **Unstable / symptomatic**. | 120 BPM pulse begins. VO2 |
| 4 | 0:12–0:21 | **Make the call.** | "✅ Unstable signs: ischemic chest discomfort." Macro of the real ECG trace. *Decision 1: Wide-complex tachycardia with a pulse and signs of instability. Treatment?* Tap **Synchronized cardioversion** ✅. Macro of HR 160. *Set up the cardioversion:* Tap **Sedate if it won't delay · SYNC ON · 100 J** ✅. | Kick enters. VO3 |
| 5 | 0:21–0:33 | **Act with purpose.** | "Team working…": the defibrillator charges and the synchronised shock is delivered (flash). **The rhythm changes:** the monitor shows VF and the code record logs it. VF rhythm check ✅. *VF — pulseless. Next?* Tap **Defibrillate 200 J — unsynchronized**. Charge, shock, "Shock delivered. Next?", tap **Resume CPR immediately — 2 minutes**. CPR artefact on the trace. | The engine's charge whine, ready tone and shock, with impacts layered under. VO4 |
| 6 | 0:33–0:43 | **Every decision is a learning opportunity.** | Rhythm check: PEA ✅. *PEA — no pulse. Next?* The learner taps **Atropine 1 mg IV** and the engine answers: "⛔ Atropine is no longer recommended in PEA or asystole. −10 s — try again." The learner corrects to **Resume CPR now** ✅. Later pulse check: "Pulse present — ROSC!" | Pad progression. VO5 |
| 7 | 0:43–0:48 | **Train your decisions. Strengthen your readiness.** | The genuine debrief (score banner, decisions right on the first try, checklist) floats out on a glass screen. | Riser, then a D-major bloom. VO6 |
| 8 | 0:48–0:55 | SmartCare Megacode · *Practice. Decide. Learn.* · **Challenge yourself. Try the Megacode.** · GET IT ON GOOGLE PLAY · play.google.com/…smartcare · disclaimer | End card with the SmartCare icon from `icons/icon-512x512.png`. | Final chord. VO7 |

## Clinical-accuracy notes

* Sequence and wording come from the engine (scenario adapted from the AHA ACLS megacode testing cases):
  unstable monomorphic VT → synchronised cardioversion starting at 100 J; VF → unsynchronised
  defibrillation, then immediate CPR with no pulse check; PEA → CPR + epinephrine, no atropine; ROSC
  confirmed by a pulse check.
* No doses, energies or outcomes were invented for the ad. The only numbers on screen are the
  engine's own.
* The ROSC and the pass are the engine's genuine scripted progression for this case. The narration
  sells practice, not outcomes, and the end card says the simulation does not certify competence.
* The deliberate wrong pick (atropine) is shown with the engine's own corrective feedback. That is
  the "learning opportunity" beat, and it is why the debrief score is below 100%.

## What is stylised (and labelled as such)

There is no live-action footage. The resus-bay atmosphere (bokeh, alarm light, perspective monitor)
is a motion-graphics treatment built around real app frames. No ECG waveform or interface was
generated or redrawn; macro shots are crops of captured frames. Tap rings mark where the learner
tapped and are not UI.
