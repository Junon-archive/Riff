---
title: "Scale approach & dominant approach — the three faces of the approach note"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Scale approach and dominant approach, widening how you bridge

## ① Theory

Yesterday you learned the **chromatic approach** that aims at the next root by a half step. Today you add two more kinds of approach note. <mark>The approach note isn't only chromatic.</mark> One step from the scale, and one big leap from the chord — you learn two new bridges.

The first is the **scale approach**. You place the scale note right next to the next root (a whole step away) on beat 4. If the next chord is Bb, step down from **C** (a whole step above Bb) inside the F scale and enter Bb. It's more spacious than chromatic, and being inside the key it <mark>sounds very natural to the ear</mark>.

The second is the **dominant approach**. You place the note a fifth above the next root — that chord's dominant — on beat 4, then leap up a fourth (or down a fifth). Bb's dominant is **F**. Put F on beat 4 and you get a strong sense of resolving into Bb. Instead of tiptoeing in like a half step, it's a way of <mark>declaring the next chord with a leap</mark>.

To sum up, there are three kinds of approach note — **chromatic** (half step), **scale** (whole step), **dominant** (fifth leap). Today you get the latter two into your hands. All three follow the same rule — <mark>approach on beat 4, land on the next beat 1</mark>.

First look at the two approach notes toward the next chord, **Bb** — scale C and dominant F — on the fretboard.

```json
{
  "id": "m1.w3.d2.approach_types_bb_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to Bb — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" },
    { "string": 2, "fret": 3, "label": "F", "role": "passing" }
  ]}
}
```

▶ **4-string.** The root Bb (3rd string, 1st fret), plus the scale approach C (3rd string, 3rd fret) and the dominant approach F (2nd string, 3rd fret).

```json
{
  "id": "m1.w3.d2.approach_types_bb_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to Bb — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" },
    { "string": 2, "fret": 3, "label": "F", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

## ② Visuals

Now put the two approach notes into a line. The first example is the **scale approach** (C→Bb), the second the **dominant approach** (F→Bb). <mark>Both put the approach on beat 4 and land on Bb on the next beat 1.</mark> Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w3.d2.approach_scale_4",
  "type": "tab",
  "meta": { "title": "Scale approach (C to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** Beat 4 C (3rd string, 3rd fret) steps down one whole step from above Bb. Land on Bb on the next beat 1.

```json
{
  "id": "m1.w3.d2.approach_scale_5",
  "type": "tab",
  "meta": { "title": "Scale approach (C to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

This time it's the **dominant approach**. From beat 4 F, leap a fifth up into Bb.

```json
{
  "id": "m1.w3.d2.approach_dom_4",
  "type": "tab",
  "meta": { "title": "Dominant approach (F to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "F", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** Beat 4 F (2nd string, 3rd fret) is Bb's dominant. From a fifth above it resolves strongly into Bb.

```json
{
  "id": "m1.w3.d2.approach_dom_5",
  "type": "tab",
  "meta": { "title": "Dominant approach (F to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "F", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk yesterday's chromatic approach (half step above and below) once at BPM 72. Warm up your hands before learning a third approach note.

**10–20 min · Brain training**
With the prep example below, isolate one **scale approach** and learn it slowly. It's the feel of <mark>settling down softly</mark> from beat 4 C to the whole-note Bb.

```json
{
  "id": "m1.w3.d2.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Scale approach and land, slow (C to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 4-string.** No beat 4 rush needed — from the F root, through C, settle very slowly onto the whole-note Bb.

```json
{
  "id": "m1.w3.d2.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Scale approach and land, slow (C to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "C", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Alternate the two examples above (scale, dominant) at **BPM 76**. Compare <mark>which approach calls the next chord more strongly</mark>. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen to the three approach notes (chromatic, scale, dominant) side by side. It helps to imagine which approach suits which mood of a tune.

**Done when:** you can place the scale approach (whole step) and the dominant approach (fifth leap) on beat 4 and land on the next measure's beat 1, and explain the difference among all three approach notes, chromatic included, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The scale approach sounds flat.** A whole-step approach is smooth by nature, but you have to ring the landing note clearly to keep the direction alive. The next beat 1 must be bigger than the approach.
- **The dominant leap misfires.** When you jump from F to Bb, a rushed hand blurs the note. Spot the landing position with your eyes before the leap.

It's the same when returning to F. Below are the scale approach **G** and the dominant approach **C**, aimed at F.

```json
{
  "id": "m1.w3.d2.approach_types_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "G", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" }
  ]}
}
```

▶ **4-string.** The root F (4th string, 1st fret), plus the scale approach G (2nd string, 5th fret) and the dominant approach C (3rd string, 3rd fret).

```json
{
  "id": "m1.w3.d2.approach_types_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Scale & dominant approach to F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "G", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

- **Choose among the three approaches.** Chromatic tiptoes, scale is smooth, dominant is forceful — even for the same landing, the color differs. Today it's enough just to tell the three faces apart. Tomorrow you'll put these approach notes into an actual walking line.
