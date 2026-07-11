---
title: "The Turnaround — Looping Back with the Last Four Bars"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — The Turnaround, Looping Back with the Last Four Bars

## ① Theory

This is the **final week of M1**. A month ago even the shuffle's long-short felt foreign; today you stand at the spot where you tie off the 12 bars yourself. The last key is the **turnaround** — <mark>the last four bars of the 12 that loop the tune back to the top</mark>. Once this knot is in your hands, instead of ending, one lap flows naturally into the next.

The turnaround order is **V(B7)-IV(A7)-I(E7)-V(B7)**. Start at bar 9 on **B7**, come down through bar 10 (A7) and bar 11 (E7), then rise back to B7 at bar 12. <mark>Leaving the last bar open on B7 makes the ear feel, "not done yet — go back to the top."</mark> That lingering pull is what sends the tune around one more lap.

Your hands already know the work. Just move the **boogie shape** to the B, A, E, and B spots. B7 has its root on the **3rd string, 2nd fret**, A7 on the open 3rd string, E7 on the open 4th string — <mark>all three spots are staircases your hands memorized last week</mark>. The only new thing to memorize is the order.

Forget speed. Today it's all about tracing the last four bars very slowly and <mark>carving the order into your body</mark>, even if you stop. From B to A, A to E, then E back to B — it's fine to rest briefly at each seam. On a **5-string** the fingering is the same; just rest the low B. These four bars are the last knot that binds the 12 into one.

## ② Visuals

Today has two parts. First check the **B7 boogie shape** on the fretboard, then pass through the **turnaround shuffle** that links the last four bars. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **B7 boogie shape**. The lower blue is the root **B** (3rd string, 2nd fret), the two blues above are the 5th and 6th, and the uncolored one is the **b7**. <mark>The same staircase as the E and A boogies has moved to the B spot.</mark>

```json
{
  "id": "m1.w4.d1.b7_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 boogie shape R-5-6-b7 (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** Root **B** (3rd string, 2nd fret) → **5th** (2nd string, 4th fret) → **6th** (6th fret) → **b7** (7th fret). It's the E and A boogie staircase moved to the B spot.

```json
{
  "id": "m1.w4.d1.b7_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 boogie shape R-5-6-b7 (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Rest the low **B** with your thumb and focus on the B7 root.

Now the **turnaround shuffle** that links the last four bars. Move the boogie shape in the B7-A7-E7-B7 order and <mark>loop the tune back to the top.</mark>

```json
{
  "id": "m1.w4.d1.turnaround_4",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, shuffle.** Bar 9 B7 (3rd string, 2nd fret) - bar 10 A7 (open 3rd string) - bar 11 E7 (open 4th string) - bar 12 B7. The same boogie shape shifts spots for each chord.

```json
{
  "id": "m1.w4.d1.turnaround_5",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Cover the low **B** with the thumb so it doesn't leak.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll this week's **three boogies** in E·A·B order at BPM 60 to loosen up. Check all three spots come out.

**10–20 min · Brain training**
Press the **turnaround order (B7-A7-E7-B7)** very slowly. Check whether <mark>the seams where the root moves from B to A and on to E</mark> are smooth.

**20–40 min · Real play**
Repeat today's piece, the **turnaround**, at **BPM 70**. The goal is four bars that connect without stopping. Learn it on the 4-string, then confirm on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the four bars stay unbroken**. Note the BPM you reached today.

**Done when:** you can pass through the turnaround (V-IV-I-V) in the B7-A7-E7-B7 order at BPM 70 without stopping, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Mixing up the order.** B7-A7-E7-B7 is easy to muddle. Carve the rise and fall of the sound into your body as "high-low-lower-high again."
- **Missing the B7 root.** It's easy to play the 3rd string, 2nd fret as an open string. B is a note you have to press.
- **The long-short goes flat at the seam.** It's easy to lose the shuffle feel the moment a chord changes. Keep the front note long even at the seam.
- **Neglecting low B (5-string).** Even while busy moving spots, keep the unused low string covered with the thumb.
