---
title: "Root-5th line — one step up in half notes"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — Adding the 5th to the root, walking in half notes

## ① Theory

Yesterday you walked the progression with just the root in whole notes. Today you climb the second step of the density ramp — you add the **5th** to the root and walk in **half notes**. You split each measure half root, half 5th. <mark>Just one more note, yet the line feels far more like walking.</mark>

Why the 5th, of all notes? **The 5th is the root's steadiest partner.** If the root is home, the 5th is the house next door — put it over any chord and it stays rock-solid. That's why in walking, the **root-5th (R-5)** is the very first skeleton of skeletons you learn. Today's rule is the same as yesterday's — <mark>beat 1 of every measure must land on the root</mark>, and on beat 3 you build a bridge to the 5th.

The fretboard has one very handy rule. **The 5th sits one string up and two frets up from the root.** For F7, from the root F (4th string, 1st fret), **the 5th C is the 3rd string, 3rd fret**; for Bb7, from the root Bb (3rd string, 1st fret), **the 5th F is the 2nd string, 3rd fret**; for C7, from the root C (3rd string, 3rd fret), **the 5th G is the 2nd string, 5th fret**. The hand shape is the same for all three chords, right?

First, grab F7's **root and 5th**.

```json
{
  "id": "m1.w2.d2.f_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The root F (4th string, 1st fret) and the 5th C (3rd string, 3rd fret). One string up, two frets up.

```json
{
  "id": "m1.w2.d2.f_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Even on **a 5-string**, the R-5 hand shape is the same as on a 4-string. Thanks to the low B string, you can later press the 5th in a lower octave too. Today, focus on burning the **one string up, two frets up** rule into your hands.

## ② Visuals

Now take in the three chords' **root-5th** and walk the progression in half notes. First check Bb7's R-5 hand shape. <mark>It's the F7 shape moved one string over</mark>, so there's nothing new to memorize. Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w2.d2.bb_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The root Bb (3rd string, 1st fret) and the 5th F (2nd string, 3rd fret) — the F7 shape moved one string up.

```json
{
  "id": "m1.w2.d2.bb_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Now walk the progression as a **half-note R-5 line**. In each measure, split the root (beats 1-2) and the 5th (beats 3-4) half and half. Just keep <mark>beat 1 always on the root</mark>.

```json
{
  "id": "m1.w2.d2.r5_walk_4",
  "type": "tab",
  "meta": { "title": "Root-5th line — half notes over F7-Bb7-F7-C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4-string.** In each measure, R (beats 1-2) → 5 (beats 3-4), half and half. It's the R-5 line of F7-Bb7-F7-C7.

```json
{
  "id": "m1.w2.d2.r5_walk_5",
  "type": "tab",
  "meta": { "title": "Root-5th line — half notes over F7-Bb7-F7-C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk yesterday's root line once at BPM 70. Bring **the root-landing feel** back to your fingertips.

**10–20 min · Brain training**
Check the three chords' R-5 hand shapes on the fretboard with your fingertips. Get to where you can picture the **one string up, two frets up** rule with your eyes closed. With the prep example below, walk just F7's R-5 slowly.

```json
{
  "id": "m1.w2.d2.r5_prep_4",
  "type": "tab",
  "meta": { "title": "Root-5th prep — F7 half notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 66, 4-string.** Repeat just F7's R-5 for two measures. Move between the two notes a half measure at a time, with room to spare.

```json
{
  "id": "m1.w2.d2.r5_prep_5",
  "type": "tab",
  "meta": { "title": "Root-5th prep — F7 half notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 66, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

**20–40 min · Real play (today's product)**
Repeat the **R-5 line** above at **BPM 72**. Half root, half 5th per measure. Make <mark>the beat-1 root and the beat-3 5th ring at the same, even volume</mark>. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the 5th is as clear as the root**. If the 5th gets buried, beat 3 goes fuzzy, so pluck both notes with the same strength.

**Done when:** you can walk the F7-Bb7-F7-C7 progression as an R-5 half-note line at BPM 72, landing exactly on the beat-1 root and beat-3 5th, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The 5th is too quiet.** It's easy to pluck the familiar root hard and touch the 5th softly. Both notes must ring at the same volume for the line to stay balanced.

```json
{
  "id": "m1.w2.d2.c_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** C7's root C (3rd string, 3rd fret) and 5th G (2nd string, 5th fret). Here too it's one string up, two frets up.

```json
{
  "id": "m1.w2.d2.c_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. You can drop to the low B to find a lower 5th too.

- **You move on early at beat 2.** The root must ring fully through beat 3. If you jump to the 5th too soon, the measure wobbles.
- **You hunt for the shape each time.** R-5 is the same shape for all three chords. Move the shape you grabbed once as a whole.
- **Neglecting the 5-string low B.** If you brush B while focused on the 5th, the low end leaks. Always keep the unused B covered.
</content>
