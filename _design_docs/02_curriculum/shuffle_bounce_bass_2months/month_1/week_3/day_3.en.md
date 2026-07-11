---
title: "Cycling 12 Bars — Smooth Chord Changes"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — Cycling 12 Bars, Smooth Chord Changes

## ① Theory

Now all three spots are in your hands — I(E7)·IV(A7)·V(B7). Today you connect them **in order** to go <mark>once around 12 bars.</mark> In blues, 12 bars make one lap. Learn just the order in your body and it becomes a tune. Where until yesterday you learned each spot on its own, today you thread those spots together into a single line.

The 12-bar order goes like this. **| E7 | A7 | E7 | E7 |** then **| A7 | A7 | E7 | E7 |** and **| B7 | A7 | E7 | B7 |** — not four rows, but three groups. <mark>At each measure, you just lay that chord's boogie shape as is.</mark> Memorizing all twelve at once is overwhelming, but splitting them into three groups of four makes it far lighter. First get used to how the chords flow within each group.

The key is **the moment a chord changes**. Today's real practice isn't the boogie but that **seam**. If you <mark>find the next chord's root with your eyes one beat ahead</mark>, your hand is ready and the change is smooth. The boogie itself is already familiar, so now you gather all your attention onto the bridges that join measure to measure. Once the seams are smooth, the whole tune comes alive.

Forget speed. Today the goal is passing through 12 bars **without stopping**. At first it's fine to pause at each measure. <mark>Go very slowly only right before a change, then join it up.</mark> As you fill in the broken spots one by one, at some point the twelve bars connect in one breath. On a **5-string** the fingering is the same.

## ② Visuals

Today has two parts. First see the **map of the three roots, I·IV·V**, on the fretboard, then learn a **change example** — the first 4 bars where chords shift. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **spots of the three roots**. **E** (open 4th string) is I, **A** (open 3rd string) is IV, and **B** (3rd string, 2nd fret) is V. <mark>Know just these three spots and you can go anywhere in the 12 bars.</mark>

```json
{
  "id": "m1.w3.d3.i_iv_v_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "I-IV-V roots E A B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The three blues are the I(E)·IV(A)·V(B) roots. Lay the boogie staircase on any of them and that chord is complete.

```json
{
  "id": "m1.w3.d3.i_iv_v_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "I-IV-V roots E A B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Rest the low B string and just fix the three roots in your eyes.

Now the **change example**. It joins the first 4 bars of the 12, **E7 → A7 → E7 → E7**. <mark>Focus only on the seam where the chord changes.</mark>

```json
{
  "id": "m1.w3.d3.change_4bars_4",
  "type": "tab",
  "meta": { "title": "First 4 bars E7-A7-E7-E7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
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
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, shuffle.** From measure 1 (E7) to measure 2 (A7), the root crosses from the 4th string to the 3rd. Prepare that crossing one beat ahead.

```json
{
  "id": "m1.w3.d3.change_4bars_5",
  "type": "tab",
  "meta": { "title": "First 4 bars E7-A7-E7-E7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
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
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Cover the low **B** with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll the **three boogies** you've learned, one by one at BPM 60, to loosen up. Press the E·A·B spots in turn.

**10–20 min · Brain training**
Practice only the chord changes very slowly. Join the **E7 → A7** and **A7 → B7** seams <mark>while looking at the next root one beat ahead</mark>.

**20–40 min · Real play**
Repeat the first-4-bars **change example** at **BPM 80**. The goal is a long-short that doesn't break even as the chord changes. Once comfortable, extend it to the full 12 bars.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the chord changes are smooth**. Mark where it broke.

**Done when:** you can move the boogie shape in I-IV-V order and pass through the first 4 bars at BPM 80 without the long-short breaking at the chord changes.

## ④ Tips / Common mistakes

- **Hesitating at the change.** You find the next chord with your eyes too late. Build the habit of looking at the root one beat ahead.
- **Mixing up the spots.** E is the 4th string, A is the open 3rd string, B is the 3rd string 2nd fret — keep the three clearly apart.
- **The long-short breaks at the change.** It's easy to lose the shuffle feel the moment a chord changes. Keep the front note long even at the seam.
- **Neglecting low B (5-string).** The more you move spots in a day, the more you should keep the unused low string covered with the thumb.
