---
title: "The 9th chord — add a refined color to the boogie"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Add a refined color to the boogie with A9

## ① Theory

It's the first day of Week 3. For the last two weeks you walked 12 bars with the boogie, right? This week we add expression on top. Today's star is the **9th chord**, and specifically **A9**. <mark>A 9th chord is just the A7 you've been using with one more note stacked on.</mark> If A7 is A·C#·E·G (1·3·5·b7), A9 adds **B, the 9th**, on top. That one note gives a much hipper, more urban color with a jazz-and-soul flavor.

Let's look at the shape. If the open A7 was `x 0 2 0 2 0` from the 5th string, **A9** is `x 0 2 4 2 3`. The open 5th string is the **root A**, and the newly added 3rd string 4th fret is exactly the **9th (B)**. <mark>This single 9th is what changes the color of the sound, so we've highlighted it in yellow on the score.</mark> The rest are familiar chord tones, shown in blue.

Today, just focus on ringing this one chord cleanly. If you play **A7** and then **A9** right after, <mark>you can hear it suddenly turn urban and refined</mark>. That one chord changing the whole mood is the first button of this week's rhythm variation. If your fingers don't choke each other and all five notes ring clearly, today is a success. At first, four fingers crowding into a tight spot can feel awkward. Don't rush — check slowly that each note rings clearly, one by one, and your hand will remember this shape before long.

First, let's look at the familiar A7 shape again.

```json
{
  "id": "m1.w3.d1.a7_recall",
  "type": "fretboard_diagram",
  "meta": { "title": "Open A7 — the chord you know", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **Open A7 = `x 0 2 0 2 0`.** The open 5th string is the root, and you don't strike the 6th string. Keep this shape in mind.

## ② Visuals

Today's finish-line goal, the **A9** chord. <mark>The aim is for all four fingers to find their spots and all five strings to ring clearly at once.</mark> You don't strike the 6th string, so lightly mute it with a fingertip.

```json
{
  "id": "m1.w3.d1.a9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "Open A9 — x 0 2 4 2 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" },
    { "string": 2, "fret": 2, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **A9 = `x 0 2 4 2 3`.** The open 5th string is the root, and the **yellow dot on the 3rd string 4th fret is the 9th (B)**.

Pluck each string slowly to check all five notes are alive, then sweep it in one go. <mark>When the 9th pokes out slightly like a nasal voice, you've got it right.</mark>

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 65. Loosen up by playing one bar of the familiar **A7**. Check with your foot that the shuffle's long-short is alive.

Now switch to **A9** and sweep four beats with the shuffle.

```json
{
  "id": "m1.w3.d1.a9_comp",
  "type": "tab",
  "meta": { "title": "A9 comp — four shuffle strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** All four beats are **A9** downstrokes. Feel the color of the 9th with your ears.

**10–20 min · Brain training (today's target = locking in the A9 shape)**
With your eyes closed, form and release the **A9** shape over and over. <mark>Once your fingers remember the spots, you grab the chord faster.</mark>

**20–40 min · Real A9 comping (BPM 80)**
Repeat the example above <mark>without a break</mark>, alternating A7 and A9 to feel the difference in color.

**40–50 min · Recording / self-feedback (recommended)**
Record one bar of A9: <mark>do all five notes ring clearly</mark>.

**Today's completion criteria:** You can cleanly grab the open **A9** (`x 0 2 4 2 3`) so all five notes ring clearly, and play one bar with a shuffle.

## ④ Tips / Common mistakes

These are the mistakes that show up most when you first grab **A9**.

```json
{
  "id": "m1.w3.d1.a9_finger_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep the 9th ringing, mute string 6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" }
  ]}
}
```
▶ **Don't strike the 6th string.** Ring from the open 5th-string root, and keep the **9th (B)** on the 3rd string 4th fret from dying.

- **Fingers lie flat.** If the 3rd and 4th fingers lie flat they touch the neighboring strings. Stand your fingertips up.
- **The 9th dies.** If the finger pressing the 3rd string 4th fret touches the neighboring string, the color vanishes.
- **The 6th string leaks.** A9's root is the 5th string. If the 6th string rings, the sound gets muddy.
- **Mixing it up with A7.** In A9 the 3rd string is fret 4 and the 1st string is fret 3. Don't confuse it with the open one.
