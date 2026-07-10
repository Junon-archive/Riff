---
title: "The Octave Shape — One Rung Your Hand Remembers"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — The Octave Shape, 80% of a Slap Groove

## ① Theory

Yesterday you made **T-P** even on two open notes. Today you take the heart of the slap groove into your hand — the **octave shape**. This one hand shape is <mark>80% of a slap groove</mark>. **Root with the thumb, its octave with the pop** — exactly this pair is the most common basic form in slap.

The hand shape is this. **Thumb on the root E (open 4th string)**, **pop on the E an octave up (2nd string, 2nd fret)**. Fret the 2nd string, 2nd fret with your index (or ring) finger; the thumb "booms" the lower 4th string, and index/middle "snap" the upper 2nd string. This spread of the hand is <mark>one rung your hand remembers</mark> — once learned, the form stays the same on any fret. Once this form is in your hand, the shape is identical **whatever root you move to — A, D, G**, so most slap grooves you'll learn from now grow right on top of this octave. Carve the form in accurately today and later, whatever song you meet, gets far easier. So today, put all the value on the accuracy of the form and the jump rather than on speed.

Today's goal is not speed but a **clean octave jump**. After the thumb strikes the 4th string and rebounds, the fingers hook and pop the 2nd-string octave right away. Lightly cover the string between (**the 3rd string, A**) **with the side of your left index** so it makes no noise. If <mark>the boom and snap stay equal in size and clean</mark>, today is a success. Start from **BPM 60**, slowly.

On **a 5-string**, the hand shape is exactly the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, move this octave groove to a B-string root and try it heavier.

## ② Visuals

Today you first imprint the **octave hand shape** on the fretboard, learn a <mark>clean octave jump</mark> in quarters, then glue it into eighths. Each example comes in **both a 4-string and a 5-string version**.

First, the **octave hand-shape map**. The lower blue is the root E (4th string) you slap with the thumb; the upper blue is the octave E (2nd string, 2nd fret) you pop.

```json
{
  "id": "m1.w2.d2.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The lower blue is the root E (4th string, thumb slap), the upper blue is the octave E (2nd string, 2nd fret, index/middle pop). Fix this hand spread in your eyes.

```json
{
  "id": "m1.w2.d2.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, move it to a B-string root too.

**Example 1 — octave T-P quarters.** Alternate root (thumb)-octave (pop) one beat each. Whether <mark>the jump is clean</mark> is the whole point.

```json
{
  "id": "m1.w2.d2.octave_quarter_4",
  "type": "tab",
  "meta": { "title": "Octave T-P quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Root E with the thumb, octave E with the pop. Lightly cover the string between with your left hand so it doesn't ring.

```json
{
  "id": "m1.w2.d2.octave_quarter_5",
  "type": "tab",
  "meta": { "title": "Octave T-P quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Keep the low B deadened with the thumb.

**Example 2 — octave T-P eighths.** One boom-snap pair per beat, jump a little quicker. Even faster, only push to the point where <mark>the octave still catches cleanly</mark>.

```json
{
  "id": "m1.w2.d2.octave_eighth_4",
  "type": "tab",
  "meta": { "title": "Octave T-P eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** Even as the jump speeds up, don't let the boom and snap sizes fall apart.

```json
{
  "id": "m1.w2.d2.octave_eighth_5",
  "type": "tab",
  "meta": { "title": "Octave T-P eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same notes as the 4-string. Here too, keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen up yesterday's open **T-P (E·G)** a few times at BPM 60 to wake both hands. Check that the boom and snap are both alive.

**10–20 min · Brain training**
Take the octave hand shape and play Example 1 very slowly. Focus only on <mark>whether the hand spreads smoothly from thumb to pop</mark>.

**20–40 min · Real play**
Repeat Example 1 (quarters) at **BPM 60** → once the jump is clean, move to Example 2 (eighths) at **BPM 65**. If the string between makes noise, drop back to slow.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the octave jump is clean with no noise</mark>. Note the BPM you reached today.

**Done when:** you can alternate the root-octave T-P with the octave shape at BPM 60–65, cleanly, with no noise from the string between.

## ④ Tips / Common mistakes

- **The string between rings.** If the 3rd string (A) between the octave leaks, the sound gets messy. Lightly cover it with the side of your left index.
- **Hand too narrow.** If you can't set the octave spread, the pop catches the wrong string. Learn the 4th↔2nd string span in your hand.
- **Pop too loud.** The pop pops out, so it easily sounds louder. Give the thumb a bit more push to balance them.
- **Neglecting low B (5-string).** As the hand spreads, B leaks easily. Always keep B covered with the thumb.
