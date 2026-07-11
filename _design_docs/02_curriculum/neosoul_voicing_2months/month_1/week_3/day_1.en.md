---
title: "The Ab13 grip — the half-step-above approach chord"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Building the Ab13 grip

## ① Theory

This week you learn <mark>the neosoul signature: instead of grabbing the target chord dead-on, you slide in from a half-step above.</mark> Just a **half-step above** **G13** — last week's landing chord — you lightly set a chord and then push it down: that chord is **Ab13**. Today we start by laying that approach chord's shape onto the hand.

The good news is that **Ab13** isn't a new grip. Just **shift last week's G13 form up one fret** and you already have **Ab13**. <mark>The hand shape is identical; only the position moves up a half-step.</mark> The 6th-string root goes from **fret 3 (G)** to **fret 4 (Ab)**, and every other note follows **+1 fret** too.

First, let's re-check the familiar **G13** form. On the 6th string, **fret 3** is the root G, the 4th string is b7, the 3rd string is the 3rd, and the 2nd string is the **13th**. <mark>Once these four notes are firmly in your eye, all you have to do is push up one fret.</mark>

```json
{
  "id": "m1.w3.d1.g13_base",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 base grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **The familiar G13.** From the 6th-string 3rd-fret root, b7·3rd·13th stack across the 4th·3rd·2nd strings.

## ② Visuals

Now let's shift this whole form **up one fret**. The 6th string **fret 4 (Ab)** becomes the new root, and b7·3rd·13th all climb one step. <mark>The spacing between fingers doesn't change at all — the whole hand just moves up a half-step.</mark>

```json
{
  "id": "m1.w3.d1.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — G13 form +1 fret", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **The Ab13 grip.** Same hand shape as G13, just with the 6th string moved up to fret 4.

Let's confirm it by ear, too. Ring **Ab13** long as a whole note and you'll feel a **slightly floating tension** a half-step higher than G13. <mark>That floating feel is exactly the energy that will slide down the next day.</mark>

```json
{
  "id": "m1.w3.d1.ab13_hold",
  "type": "tab",
  "meta": { "title": "Ab13 — hold", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Ring Ab13 long for a whole bar. Put the floating color of the half-step-above into your ear.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
**BPM 65.** Warm the hand by grabbing **G13** and **Ab13** in turn. <mark>You only move one fret up and down, so it isn't hard.</mark>

**10–20 min · Brain training (a one-fret move)**
With the left hand only, silently draw the **G13 → Ab13** move. Just feel the whole hand sliding up a half-step in one block.

**20–40 min · Grip check (BPM 75)**
Repeat the two bars below. Ring **Ab13** in bar 1 and **G13** in bar 2, each long as a whole note, and practice only <mark>moving smoothly between the two grips</mark>.

```json
{
  "id": "m1.w3.d1.ab13_g13_loop",
  "type": "tab",
  "meta": { "title": "Ab13 to G13 — grip check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Ring Ab13 → G13 one bar each, long. Carve the difference in hand shape between the two grips into your body.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Check whether the pitch difference between Ab13 and G13 is clearly distinct in your ear.

**Done when:** You can shift the G13 form up one fret to grab the **Ab13** grip accurately and ring it cleanly as a whole note.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most when you build the **Ab13** grip.

```json
{
  "id": "m1.w3.d1.shift_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Half-step map — Ab13 vs G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ On the 6th string, fret 4→3 is the Ab→G root; on the 3rd string, fret 5→4 is each chord's 3rd.

- **The sound is muddy.** The 5th and 1st strings are muted. Lightly cover them so they don't ring.
- **You raise one fret too few.** Leaving it as G13 won't do. All four notes are exactly **+1 fret**.
- **Your wrist feels stiff.** Moving up to fret 4 squeezes the hand a bit. Drop the thumb to the center back of the neck to release the tension.
- **The 13th won't press.** The 2nd string fret 6 is the pinky. Tap it with the tip so it doesn't touch the neighboring strings.
