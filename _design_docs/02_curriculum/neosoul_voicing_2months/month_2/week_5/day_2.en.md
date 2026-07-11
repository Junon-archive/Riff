---
title: "A smear on two notes — bleeding a 3rd / 6th double-stop"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — A smear on two notes (double-stop)

## ① Theory

Yesterday you smeared with one note. Today you lay a smear onto a **double-stop**, two notes held together. <mark>Keep one note still and push only the other from **b3→3**, and the two notes bleed together.</mark>

First, the **3rd double-stop**. Hold **b3 (F)** on the **4th string** with the **5th (A)** on the **3rd string**. The two notes sit a **3rd** apart. Leave the **5th** alone and raise only the **4th string** to F# with a **hammer-on**. <mark>While the lower note bleeds, the upper note holds its place like an anchor.</mark>

Today's goal is one **double-stop smear**. Slowly at **BPM 72**, hear two notes ring together while only one climbs a half step. <mark>When the balance of the two notes lives, the thick color unique to neosoul appears.</mark> Learn the hand shape first.

```json
{
  "id": "m2.w5.d2.third_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "3rd double-stop with smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **3rd double-stop.** Hold 4th string fret 3 (b3) with 3rd string fret 2 (5), and hammer only the 4th string to the green fret 4 (3rd).

## ② Visuals

Now the **6th double-stop**. Hold **b3 (F)** on the **4th string** with the **root (D)** on the **2nd string**, skipping the middle **3rd string**. <mark>A 6th with one string skipped opens the sound wide, and neosoul loves it especially.</mark>

```json
{
  "id": "m2.w5.d2.sixth_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "6th double-stop with smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 3, "label": "R", "role": "chord_tone" }
  ]}
}
```
▶ **6th double-stop.** Hold 4th string fret 3 (b3) with 2nd string fret 3 (root), mute the 3rd string, and hammer only the 4th string to the green fret 4 (3rd).

Now link the two hand shapes by ear. Smear once as a **3rd**, once as a **6th**. <mark>In both bars the lower two notes ring together and only one bleeds to the green 3rd.</mark>

```json
{
  "id": "m2.w5.d2.doublestop_smear",
  "type": "tab",
  "meta": { "title": "Double-stop smear (3rd & 6th)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** Bar 1 is the **3rd** double-stop, bar 2 the **6th** double-stop. Leave the upper note and let only the lower note bleed a half step.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, form both hand shapes silently. The **3rd** is strings 4·3, the **6th** is strings 4·2 (3rd string muted). <mark>First check that the two notes ring cleanly at the same time.</mark>

**10–20 min · Brain training (hammer smear slowly)**
Keep the lower note pressed and raise only **one finger** a half step with a **hammer-on**. If the upper note gets dragged and wobbles, force is leaking. Feel each finger's force separately.

**20–40 min · Real double-stop smear (BPM 72)**
Repeat the two bars below, alternating a **3rd** and a **6th** smear. <mark>Watch just one thing: that the upper note doesn't wobble in either bar.</mark>

```json
{
  "id": "m2.w5.d2.doublestop_loop",
  "type": "tab",
  "meta": { "title": "Double-stop smear loop x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on", "chord": [ { "string": 2, "fret": 3, "role": "chord_tone", "label": "R" } ] },
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** Loop the 3rd → 6th double-stop smear twice. The upper note is the anchor; let only the lower note bleed.

**40–50 min · Recording / self-feedback (recommended)**
Record both double-stop smears and listen back. Check that the two notes ring together and the upper note doesn't wobble.

**Done when:** You can sound the 3rd and 6th double-stop smears once each at BPM 72 without the upper note wobbling.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most in the double-stop smear.

```json
{
  "id": "m2.w5.d2.doublestop_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop landing map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "R", "role": "chord_tone" }
  ]}
}
```
▶ The green dot (4th string, the 3rd) is where both double-stops land together. The 3rd-string 5th and 2nd-string root are the anchors ringing along.

- **The upper note gets dragged up.** Keep the lower-note finger in place and move only the hammer-on finger.
- **The 3rd string rings in the 6th.** Lightly touch the skipped 3rd string to mute it.
- **The two notes ring separately.** Pick both notes at exactly the same instant so the double-stop sounds as one.
- **You raise speed first.** Drop to BPM 60 and build the balance of the two notes first.
