# Google Flow image plan

How to produce the 247 images listed in `docs/images.md`. Start here, then work through `batches/` in order.


## Current state and how to resume

This section replaces the manual steps further down wherever they differ.

- **Generation is scripted.** `node run-batch.mjs --queue priority.json` sends prompts one at a time in priority order through the dedicated Chrome window and skips finished ones. It stops a model at its limit and carries on with the other.
- **Before running:** the dedicated Chrome window must be open on the Flow project and stay in front. The runner turns the Agent pill off and refuses any non-image model.
- **Files** are saved as `incoming/<batch>/<id>-<letter>.jpg`, not `.png`. A rerun takes the next free letter and keeps the earlier images.
- **Reruns one by one:** `node run-batch.mjs --model "Nano Banana 2.1" --ids 36,50`.
- **After changing prompts:** run `node generate-batches.js`, then `node update-tracker.js`, because the generator resets `tracker.csv`.
- **Picks and open problems** are in `picks.json` and copied into `tracker.csv`. They come from visual checks only, so every image still needs clinician sign-off.
- **The cast step is not used.** Consistency comes from the prompt text: navy uniform, blue gloves.
- **The limit counts images, not prompts.** Pro stopped at exactly 100 images, which is 50 prompts at 2 images each.
- **One warning so far:** Flow answered one prompt (#70) with "We noticed some unusual activity". The next prompts worked. If it comes back, stop and do not try to work around it.

## The plan at a glance

| Route | Entries | What happens |
|---|---:|---|
| Flow, finished as generated | 150 | Generated, reviewed, exported |
| Flow, then overlay | 44 | Generated with no text, then exact words and numbers are added on top |
| Code-drawn SVG | 35 | Never sent to Flow: charts, waveforms, flowcharts, sensitive child-protection diagrams |
| Reuse | 18 | Shares another entry's image |
| **Total** | **247** | **194 Flow prompts in 28 batches** |

Why not send all 247 to Flow:

- **Exact numbers can't be left to an image model.** A wrong digit in a dose or a waveform is a clinical error that looks correct at a glance, so numbers are added separately.
- **Duplicates waste quota.** For example, #148 and #12 show the same infant choking sequence.

## Files

| Path | Purpose |
|---|---|
| `STYLE.md` | Style rules, and the cast and style prompts to run first |
| `REVIEW.md` | Acceptance checks, sensitive images, and problems found in `images.md` |
| `batches/P00.md` to `B27.md` | Copy-paste prompts with model, ratio and placement |
| `NOT-FLOW.md` | The SVG list and the reuse map |
| `tracker.csv` | One row per entry: status, final filename, medical sign-off |
| `cast/` | Approved cast and style images |
| `incoming/<batch>/` | Chosen raw downloads, named `<id>.png` |
| `final/` | Exported images, waiting to move to `images/guides/` |
| `generate-batches.js` | Rebuilds the batches from `images.md`. **It also overwrites `tracker.csv`, so back that up first** |

## What Flow allows

Confirmed on Google's help pages:

| | No plan | AI Plus or Pro | AI Ultra |
|---|---:|---:|---:|
| Nano Banana Pro, per day | 20 | 100 | 500 |
| Nano Banana 2.1 + 2 Lite (shared), per day | 400 | 1,000 | 1,000 |

- Generating and upscaling images doesn't currently use Flow credits or AI credits.
- Limits reset 24 hours after your first generation with that model or pool, not at midnight.
- Failed and safety-blocked generations don't count. Short-term rate limits may apply.
- Reference images can be added to a prompt, and saved characters can be called with `@name`.

Reported only by third parties, so **test these in the pilot**:

- Fixed ratios of 16:9, 4:3, 1:1, 3:4 and 9:16.
- Native size of about 1 megapixel (around 1200×896 at 4:3).
- New prompts accepted while earlier ones are still running.

Not documented anywhere I could find:

- The maximum outputs per prompt, and whether each output counts separately against the limit (this plan assumes it does).
- The maximum number of reference images.
- Whether downloads carry a visible watermark.

Sources: [image help](https://support.google.com/flow/answer/16729550), [models](https://support.google.com/flow/answer/16352836), [credits](https://support.google.com/flow/answer/16526234), and third-party notes from [nano-banana-mcp](https://glama.ai/mcp/servers/frannkurt/nano-banana-mcp/tree). Checked 2026-11-02. Limits change often, so recheck before starting.

## Quota

The budget is 2 outputs per prompt, plus 25% for reruns:

| Model | Used for | Prompts | Generations |
|---|---|---:|---:|
| Nano Banana Pro | Anatomy, labelled art, overlay art, cast | 104 | 260 |
| Nano Banana 2.1 | Everything else | 93 | 233 |

| Your plan | Minimum days of generating | Bottleneck |
|---|---:|---|
| No plan | 13 | Pro, at 20 a day |
| AI Plus or Pro | 3 | Pro, at 100 a day |
| AI Ultra | 1 | Review time, not quota |

On no plan, that's about 8 Pro prompts a day once reruns are allowed for. You could also try 2.1 for non-anatomy prompts if the pilot shows it holds up. Medical review will probably set the real pace on any plan.

## How to run a batch

Each batch has at most 8 prompts, all from one chapter so they share an accent color, and sorted so similar images sit together.

1. **Open the chapter's Flow project.** Use one project per chapter, plus one for the pilot, and add the approved style image and cast.
2. **Check the model** in the prompt box. Google's pages disagree on the default, and the wrong model uses the wrong quota.
3. **Paste the prompts one at a time**, setting the ratio and output count listed. Leave a few seconds between them, and stop if a rate-limit notice appears.
4. **Wait for the whole batch, then review** with `REVIEW.md`. Download the best image of each as `incoming/<batch>/<id>.png`.
5. **Fix failures once** with a targeted edit in Flow. If it's still wrong, rerun the prompt once. After that, mark it `blocked` and move on.
6. **Update `tracker.csv`** before starting the next batch: `todo`, `generated`, `overlay-needed`, `approved` or `blocked`.

Please don't use the third-party "batch generator" Chrome extensions that come up in searches. They run inside your signed-in Google session, and rapid automated generation could run into the short-term rate limits.

## Phases

### 1. Set up and pilot (stop here for review)

1. Run the three prompts in `STYLE.md` and approve a style image and cast.
2. Run `P00`. These 8 prompts were picked to stress the hard cases:

   | Entry | What it tests |
   |---|---|
   | #1 | Anatomy with many labels |
   | #5, #22 | Hand positions |
   | #12 | Infant, with a safety-critical technique |
   | #14 | Equipment accuracy |
   | #31 | Consistent people across two views |
   | #40 | Blank dial, ready for overlay |
   | #64 | Six icons in one image |

3. Answer these before going further:
   - Do ratio and native size match the third-party notes?
   - Does each output count against the limit?
   - Is there a visible watermark?
   - Do the labels on #1 spell correctly?
   - Does 2.1 hold up against Pro?
   - Does the image look right in all five app themes, and at 360 px wide?

Adjust `STYLE.md` and the batch sizes based on the answers. **It's far cheaper to change the style now than after 194 prompts.**

### 2. Build the display support (before any image ships)

`cpg-guide.js` has no way to show an image in a guide today. Its section types are list, criteria, steps, gate, pathways, doses, table, groups, related and tools. It needs:

- An optional figure field that works before or after a section, and inside a step, row, group or path, because `images.md` places images in all of those.
- Required alt text, drawn from each entry's Image description.
- `loading="lazy"`, explicit width and height, and a light rounded card so the art reads on dark themes.
- A decision on offline use. `sw.js` already caches `/images/` as cache-first. Up to about 34 MB of art shouldn't be precached, so check that the new folder isn't picked up by the precache rules.

Build this against the pilot images. Guide content lives in `content/cN.js` and `content/formulary.js`. Run `node scripts/split_content.js` after editing a chapter.

### 3. Generate

Run `B01` to `B27` in order:

| Batch | Chapter | Prompts | Mix |
|---|---|---:|---|
| P00 | Pilot (mixed chapters) | 8 | 1 anatomy, 2 object, 4 procedure, 1 scene |
| B01 | Chapter 3 – Airway & Ventilation | 8 | 6 anatomy, 2 object |
| B02 | Chapter 3 – Airway & Ventilation | 8 | 2 object, 6 procedure |
| B03 | Chapter 3 – Airway & Ventilation | 6 | 4 procedure, 2 scene |
| B04 | Chapter 4 – Cardiovascular & Resuscitation | 8 | 8 anatomy |
| B05 | Chapter 4 – Cardiovascular & Resuscitation | 8 | 2 object, 6 procedure |
| B06 | Chapter 4 – Cardiovascular & Resuscitation | 6 | 2 procedure, 4 scene |
| B07 | Chapter 5 – Medical Emergencies | 8 | 4 anatomy, 4 object |
| B08 | Chapter 5 – Medical Emergencies | 8 | 1 object, 7 procedure |
| B09 | Chapter 5 – Medical Emergencies | 8 | 5 procedure, 3 scene |
| B10 | Chapter 2 – Patient Assessment | 8 | 2 anatomy, 5 procedure, 1 scene |
| B11 | Chapter 2 – Patient Assessment | 4 | 4 scene |
| B12 | Chapter 6 – Trauma Emergencies | 8 | 8 anatomy |
| B13 | Chapter 6 – Trauma Emergencies | 8 | 1 anatomy, 2 object, 5 procedure |
| B14 | Chapter 6 – Trauma Emergencies | 7 | 4 procedure, 3 scene |
| B15 | Chapter 7 – Special Populations | 8 | 1 anatomy, 1 object, 6 procedure |
| B16 | Chapter 7 – Special Populations | 8 | 7 procedure, 1 scene |
| B17 | Chapter 7 – Special Populations | 5 | 5 scene |
| B18 | Chapter 1 – Foundations of Care | 8 | 1 anatomy, 2 object, 5 procedure |
| B19 | Chapter 1 – Foundations of Care | 6 | 1 procedure, 5 scene |
| B20 | Chapter 8 – Environmental & Disaster | 8 | 2 object, 6 procedure |
| B21 | Chapter 8 – Environmental & Disaster | 8 | 3 procedure, 5 scene |
| B22 | Chapter 9 – Emergency Pharmacology | 8 | 1 anatomy, 4 object, 3 procedure |
| B23 | Chapter 9 – Emergency Pharmacology | 1 | 1 procedure |
| B24 | Chapter 10 – Clinical Procedures & Skills | 8 | 1 anatomy, 1 object, 6 procedure |
| B25 | Chapter 10 – Clinical Procedures & Skills | 3 | 2 procedure, 1 scene |
| B26 | Drug Formulary | 8 | 3 object, 5 procedure |
| B27 | Drug Formulary | 4 | 4 procedure |

The order follows `images.md`. Chapter 7 (`B15`–`B17`) holds most of the sensitive images, so expect more blocks there.

### 4. Finish

1. **Overlay:** add the words and numbers to the 44 overlay images, copying values from the topic's guide text.
2. **SVG:** draw the 35 images in `NOT-FLOW.md`.
3. **Export:** make WebP at 1200 px wide, under 150 KB, named as in `tracker.csv` (`images/guides/<topic>-<id>.webp`). Pillow is installed and can do this. `cwebp` and ImageMagick aren't. 1200 px matches the reported native width at 4:3, so 2K upscaling shouldn't be needed. Confirm this in the pilot, and note that 1:1 images may come out narrower.
4. **Sign off:** a clinician checks every final image and fills in `medical_signoff`.

### 5. Add to the app

1. Add images chapter by chapter in the order above, each as its own commit.
2. Run `graphify update .` after the code changes, as `CLAUDE.md` requires.
3. Check each chapter in all five themes, at 360 px, and offline.
4. Remove each entry from `docs/images.md` as its image ships, so that file keeps showing what's left.

## Decisions for you

| Decision | Recommendation |
|---|---|
| Which Flow plan will you use? | It sets the pace above. AI Plus or Pro is enough |
| Who signs off medically? | Needs a named clinician before anything ships |
| Reused images keep their original chapter's accent. Is that OK? | Accept it, and shift the hue in export for any that look wrong |
| Should the sensitive obstetric images go ahead in Flow? | Try them as written. Any that get blocked move to SVG or a commissioned illustrator |
