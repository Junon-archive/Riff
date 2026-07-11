---
title: "A Boogie — Moving to IV(A7)"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Moving to IV, the A Boogie

## ① Theory

The boogie shape is finally in your hands. This week you **move it around** to go once around 12 bars. Today's first step is moving to **IV(A7)**. <mark>Don't change the shape at all — just move the whole thing to a new place.</mark> The staircase stays the same; only where it sits changes. Think of it as laying the R-5-6-b7 staircase you memorized last week onto a different chord, exactly as is, and it feels much lighter.

The root of A7, **A**, is the **open 3rd string**. Where last week's E boogie started on the open 4th string, the A boogie starts one string up, on the 3rd string. The rest, **5-6-b7**, sits the same way on the 2nd string, frets 2, 4, and 5. <mark>The whole staircase has just moved up one string.</mark> The gaps between your fingers and the order you press are all identical, so the same shape falls into place even with your eyes closed. Only the starting string has changed.

Why A7 of all chords? In a 12-bar blues, **IV** is the spot that shows up most after I. Change only the root to **A** and the **R-5-6-b7** staircase you learned last week works exactly the same. <mark>The only new thing to memorize is the one starting spot.</mark> You're not relearning the shape — just moving it. This sense of carrying one shape from place to place is the key to circling all 12 bars this week.

Forget speed completely. Today it's all about rolling the A boogie clearly with a long-short. <mark>Move slowly between the two spots, E and A, and let your hand memorize the path.</mark> At first it's fine to pause briefly between the two chords. As the pauses shrink, that's exactly what a smooth change is. On a **5-string** the fingering is the same; just rest the low B with your thumb. This A boogie is the second stair of the 12-bar lap.

## ② Visuals

Today has two parts. First check the **A boogie shape** on the fretboard, then learn the **A boogie shuffle** that rolls that shape long-short. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **A boogie shape**. The lower blue is the root **A** (open 3rd string), the two blues above are the 5th and 6th, and the uncolored one is the **b7**. <mark>The same staircase as the E boogie has moved up one string.</mark>

```json
{
  "id": "m1.w3.d1.a_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "A boogie shape R-5-6-b7 (A7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** Root **A** (open 3rd string) → **5th E** (2nd string, 2nd fret) → **6th F#** (4th fret) → **b7 G** (5th fret). It's the E boogie moved up one string.

```json
{
  "id": "m1.w3.d1.a_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "A boogie shape R-5-6-b7 (A7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Rest the low **B** with your thumb and focus on the A root.

Now the **A boogie shuffle** that rolls that shape. Climb in measure 1 and descend in measure 2, <mark>rolling long-short with a bounce.</mark>

```json
{
  "id": "m1.w3.d1.a_boogie_4",
  "type": "tab",
  "meta": { "title": "A boogie shuffle (A7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, shuffle.** From the root **A** (open 3rd string), climb and descend the **5-6-b7** staircase (2nd string, frets 2, 4, 5). The shape is identical to the E boogie.

```json
{
  "id": "m1.w3.d1.a_boogie_5",
  "type": "tab",
  "meta": { "title": "A boogie shuffle (A7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Cover the low **B** with the thumb so it doesn't leak.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll last week's **E boogie shuffle** on open E at BPM 60 to loosen up. Check the up-and-down connects before you start.

**10–20 min · Brain training**
Press the **A boogie shape** very slowly. Memorize the path climbing from the root **A** (open 3rd string) up through 5-6-b7, <mark>placing it side by side with the E boogie</mark> to compare.

**20–40 min · Real play**
Repeat the **A boogie shuffle** at **BPM 70**. The goal is a long-short that won't wobble. Learn it on the 4-string, then confirm the same groove on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the A boogie bounces**. Note the BPM you reached today.

**Done when:** you can roll the A boogie shuffle (R-5-6-b7) at the IV(A7) spot at BPM 70 with a long-short, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Mixing up the spot.** Out of E boogie habit, it's easy to start on the 4th string. Carve into your hand that A starts on the open 3rd string.
- **The b7 is fuzzy.** Your finger may not reach the 2nd string's 5th fret. Spread your hand ahead of time and press the b7 clearly.
- **The long-short goes flat.** When the spot changes, it's easy to lose the shuffle feel. Keep the front of each note firmly long.
- **Neglecting low B (5-string).** Even while busy moving spots, keep B covered with the thumb.
