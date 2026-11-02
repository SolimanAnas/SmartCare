# Style rules

> **Update:** the cast images and `@rescuer` references below were not used. Consistency now comes from the prompt text. See "Current state" in README.md.

Every prompt in `batches/` already includes these rules, so you don't need to add them. Change the wording here and in `generate-batches.js` together.

## House style

| Rule | How it's handled |
|---|---|
| Flat, clean, not photographic | In every prompt |
| Reads in all five themes | Plain off-white `#F8F9FA` background, shown on a light card in the app |
| Chapter accent as the highlight | Hex value in every prompt. Models only approximate it, so judge by eye |
| Short, readable labels | Only where an entry asks for them. Exact numbers go in the overlay step |
| Diverse people, gloves on when touching a patient | In every prompt, and repeated by the cast |
| 4:3, or 1:1 for single objects | Set per prompt |

**Why not transparent backgrounds?** `images.md` allows either. Generated art with dark outlines would disappear on the dark and AMOLED themes, and cutting out backgrounds adds a slow step with messy edges. A light card works everywhere.

## Accent colors

| Chapter | Accent | Chapter | Accent |
|---|---|---|---|
| 1 Foundations | `#d63384` | 6 Trauma | `#d9a400` |
| 2 Assessment | `#0891b2` | 7 Special Populations | `#f06595` |
| 3 Airway | `#0ca678` | 8 Environmental | `#845ef7` |
| 4 Cardiovascular | `#e03131` | 9 Pharmacology | `#2f9e44` |
| 5 Medical | `#f76707` | 10 Skills | `#6741d9` |
| | | Formulary | `#64748b` |

## Run these first

Use Nano Banana Pro at 4:3 with 4 outputs if the plan allows it. Save your picks in `cast/` and add them to each Flow project.

### 1. Style image

```text
Flat, clean vector-style medical illustration, not photographic. Plain solid off-white background (#F8F9FA) filling the whole image, no border, no frame, no drop shadow. Clean dark outlines of even weight, soft limited palette of neutral skin tones and greys, with #0ca678 as the single highlight color.
Subject: A paramedic in a plain navy uniform and blue gloves kneels beside a seated adult patient and places a pulse oximeter on the patient's fingertip, with an oxygen cylinder and a closed response bag on the floor.
Text: no words, letters or numbers anywhere in the image.
```

### 2. Rescuers

Save the approved result as Flow characters `@rescuer1` and `@rescuer2`.

```text
Character reference sheet in a flat, clean vector-style medical illustration, using the same style as the attached image. Plain solid off-white background (#F8F9FA). Two EMS rescuers, each shown standing from the front and from the side, in a plain navy uniform, blue gloves and black boots with no patches or logos. Rescuer one is a Black woman in her thirties with short natural hair. Rescuer two is a South Asian man in his forties with short dark hair and a trimmed beard.
Text: no words, letters or numbers anywhere in the image.
```

### 3. Patients

Save the approved result as Flow characters `@adultpatient` and `@olderpatient`.

```text
Character reference sheet in a flat, clean vector-style medical illustration, using the same style as the attached image. Plain solid off-white background (#F8F9FA). Two fully clothed adult patients in plain everyday clothes, each shown standing from the front and from the side. The first is a Latino man in his fifties of average build. The second is an East Asian woman in her seventies with short grey hair.
Text: no words, letters or numbers anywhere in the image.
```

## Using references in batches

- Attach the style image to every prompt, because it does more for consistency than extra wording.
- Add a cast member when the entry has an adult rescuer or patient: "The rescuer is `@rescuer1`."
- Don't use the cast for infants, children, or entries that specify a person, such as #37 or #165.
- Don't use a reference on small icons or cutaway anatomy, because it can pull in unwanted people.
