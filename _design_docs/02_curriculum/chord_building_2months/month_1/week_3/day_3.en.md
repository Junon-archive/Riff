---
title: "Moving to another key — ii–V–I is a pattern that slides whole"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — The same hand shape, two frets up: D-key ii–V–I

## ① Theory

Through yesterday you connected the C-key ii–V–I (Dm7-G7-Cmaj7) in one region. Today's point is thrilling: **slide that hand shape whole, a few frets, and it becomes another key's ii–V–I.**

Push C up a whole step (two frets) and you get **D key:**

- **Em7 (ii)** — 5th-string root, fret 7. (C's Dm7, two frets up)
- **A7 (V)** — 6th-string root, fret 5. (C's G7, two frets up)
- **Dmaj7 (I)** — 5th-string root, fret 5. (C's Cmaj7, two frets up)

```json
{
  "id": "m1.w3.d3.em7",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.a7",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.dmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 7, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

Not one finger shape changes. The root-string crossing (5·6·5) and the half-step guide-tone motion are identical. **Because you learned a "pattern," not a memorized shape,** you can slide it to any of the 12 keys. That's the privilege of learning chords by interval. In other words, no need to memorize 12 keys separately — nail this one pattern today and the rest of the keys come nearly free.

## ② Visuals

The three D-key ii–V–I chords. Only shifted two frets up from C — the layout and the green (guide-tone) positions are exactly the same relationship.

```json
{
  "id": "m1.w3.d3.em7",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.a7",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.dmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 7, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — D-key guide-tone line.** On the 3rd string, Em7's 7th (D) → A7's 3rd (C#) → Dmaj7's 7th (C#). **Frets 7→6→6.** The exact same shape as C's 5→4→4, just shifted two frets up.

```json
{
  "id": "m1.w3.d3.guide_tone_line_d",
  "type": "tab",
  "meta": { "title": "Guide-tone line (D key ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 7, "duration": "whole", "label": "Em7-b7(D)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 6, "duration": "whole", "label": "A7-3(C#)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 6, "duration": "whole", "label": "Dmaj7-7(C#)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66.** 3rd string 7→6→6. Exactly the same motion as C, two frets up. Feel "the pattern moves." Repeat 4×.

**Example 2 — D-key ii–V–I comp.** Roots travel 5·6·5 (frets 7·5·5); strum the three chords. The hand shape is identical to C.

```json
{
  "id": "m1.w3.d3.ii_v_i_comp_d",
  "type": "tab",
  "meta": { "title": "ii-V-I comp (D key) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 7, "role": "target", "label": "b7" }, { "string": 2, "fret": 8, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 7, "role": "target", "label": "b7" }, { "string": 2, "fret": 8, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 7, "role": "target", "label": "b7" }, { "string": 2, "fret": 8, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "target", "label": "b7" }, { "string": 3, "fret": 6, "role": "target", "label": "3" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "target", "label": "b7" }, { "string": 3, "fret": 6, "role": "target", "label": "3" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "target", "label": "b7" }, { "string": 3, "fret": 6, "role": "target", "label": "3" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 5, "role": "root", "label": "R" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 6, "role": "target", "label": "7" }, { "string": 2, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 6, "role": "target", "label": "7" }, { "string": 2, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 6, "role": "target", "label": "7" }, { "string": 2, "fret": 7, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 74.** In D too, the hand is tied to one region (frets 5–9). The same feel you learned in C. Repeat 4×.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play Em7 → A7 → Dmaj7 in order. Check the sound while feeling the hand shape is identical to C.

**10–20 min · Brain training (today's target = pattern shifting)**
Alternate grabbing the C-key ii–V–I (fret-3 region) and the D-key (fret-5 region). **One hand shape, position two frets apart.** You pass when you can switch between the two keys with eyes closed.

**20–40 min · Real comping (Example 2 / 70–80 BPM)**
**Repeat Example 2 (D key) at BPM 74 4×.** Then cycle back and forth between C and D to burn in "same pattern, different spot." Push to F (fret 1) or G (three frets up) if you like.

**40–50 min · Record & reflect (recommended)**
Record 15 seconds each of the C and D ii–V–I. Check: is the hand-movement feel identical in both keys, and are the changes smooth?

**Done when:** you can slide the C-key hand shape two frets up to cycle the D-key ii–V–I, and you understand "the pattern is movable."

## ④ Tips / common mistakes

- **Trying to re-memorize per key.** ii–V–I is one hand shape. Put the root at the fret you want and it's that key's ii–V–I. No need to memorize 12 keys separately.
- **Weak mute in high frets.** Frets 5–9 have tight spacing, so fingers crowd. Mind the 6th-string mute (5th-string chords) even more.
- **Mistaking the root position.** The V (A7) is a 6th-string root; the ii and I are 5th-string roots. Confuse the root string and the spot shifts wrong.
- **Speed greed.** Even if the new region feels awkward, stay accurate at 66–74. Speed comes on its own once it's comfortable.
