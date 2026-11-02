# Review guide

Generated medical art can look convincing and still be wrong, so check each image against the entry in `docs/images.md`, not just by eye.

## Accept an image only if

**Every image**

- [ ] It shows what the entry describes, including everything in its Notes.
- [ ] Hands are correct: five fingers, and no merged or extra limbs.
- [ ] Rescuers wear gloves when touching a patient.
- [ ] Nothing shows a logo, a brand name, or stray or invented text.
- [ ] The background is plain, with no frame or shadow.
- [ ] It still reads at 360 px wide.

**Labelled images**

- [ ] Every word is spelled correctly, and is the term the guide uses.
- [ ] Each label points at the right structure.

**Overlay images**

- [ ] The art has no words or digits. Gauges and tags are blank.
- [ ] There's room for the labels.
- [ ] Values come from the topic's guide text, and a second person checks them.

**Anatomy**

- [ ] Left and right are correct. Remember that the patient's left appears on the viewer's right from the front.
- [ ] Structures are in the right place and have the right relative size. For example, the right mainstem bronchus is shorter, wider and more vertical (#1), and the left ventricle wall is thicker (#33).

**Technique**

- [ ] Hand position and landmark match the guide text.
- [ ] Ticks and crosses are on the correct views. Models sometimes swap them, and that teaches the wrong thing.
- [ ] Nothing shows a two-finger infant technique, except the crossed-out inset in #149.

## Sensitive images

Keep these clinical and non-graphic. Patients keep their dignity in every one. The prompts already add draping and clothing, and those lines shouldn't be removed to get past a block.

| Entries | Topic | Rule |
|---|---|---|
| #3, #8, #12, #58, #59, #142–145, #149 | Infants and children in procedures | Schematic and clinical, clothed or wrapped as far as the technique allows. Never realistic bare bodies. #145 keeps the face fully clear of the wrap |
| #135–139 | Childbirth | Mother draped, with no genital anatomy shown |
| #11, #133 | Pregnancy | Clothed |
| #141 | Sexual assault evidence | Focus on the bags. Patient wrapped and at a distance |
| #85 | Restraint | Calm and non-violent |
| #118, #170 | Wounds and evidence | No gore |
| #183 | Cooling an older patient | Shorts and a sheet |

**#150 and #151 (child abuse recognition) never go to Flow.** Generating an injured or abused child with AI isn't appropriate, so they're drawn as simple zone diagrams:

- #150 is a plain outline with shaded zones.
- #151 shows only the burn patterns on outlined feet.

**If an image is blocked:** don't reword it to get around the filter. Mark it `blocked`, then draw it as an SVG schematic or commission an illustrator. Blocked generations don't count against the limit.

## Problems found in images.md

| Entry | Problem | How the plan handles it | Your action |
|---|---|---|---|
| #148 | Shows infant chest thrusts "with two thumbs", but `c3s3` and #12 say the heel of one hand | Reuses #12's image | Correct the entry |
| #245 | Shows a second 1 g of TXA at 30 minutes beside "injury or birth". The formulary gives that second dose only for postpartum bleeding. Trauma is 1 g over 8 hours in hospital | Listed as an SVG | Label it postpartum only, or show both paths |
| #145, #146, #154, #222 | The quoted section titles are shortened, for example "Keep warm" is "Keep warm (36.5–37.5 °C)" | No effect on generation | Use the full title when placing the image |
| #206 | Asks for maximum volumes but doesn't give them | Overlay step | Copy them from the "IM sites" table |
| #219 | Asks for "the worked calculation" but doesn't give it | Overlay step | Copy it from the "Cylinder time" step |

A script checked the chapter placements: all 96 topics exist, and 228 of the 232 quoted section titles match exactly (the other four are above). The 15 formulary placements (#233–247) weren't checked this way. Clinical content was spot-checked only for the items in this table, so **this isn't a medical review of `images.md`**.

`docs/google-flow.md` and `docs/google-flow/` are both empty, so this plan doesn't draw on them.
