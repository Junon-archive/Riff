---
title: "7 → 9 — lay a 9th on a dominant for a shimmer"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — When the tension comes on top, the sound sparkles

## ① Theory

Now you lay the 9th onto a dominant 7 (C7) to make **C9.** Add the 9th's (D) color over the dominant's tension (b7) and you get that sparkling comp sound of funk, soul, and Motown.

- **The C7 skeleton** = R (C) · 3 (E) · b7 (B♭). (A dominant holding tension.)
- **Add the 9th (D)** = **C9.** The tension stays; only the color turns bright.

Today's point: the **9th comes on top (the top note).** In plain C7 the top was the b7, but in C9 the 9th (D) sits above it, brightening the chord's impression sharply. A tension on top sounds especially shimmering — this is the seed of next week's (7) top-note leading. It's fine if you can't fully digest it right now. Just confirm by ear that "putting the 9th on top brightens it," and connecting these notes into a melody next week gets much easier. Think of today as the day all three siblings — maj9, m9, 9 — are gathered.

```json
{
  "id": "m2.w6.d3.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

## ② Visuals

First, the **C7 skeleton** (R·3·b7). Blue frame, top is the b7.

```json
{
  "id": "m2.w6.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 skeleton (R·3·b7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

Now **C9** — the 9th (D) laid on top on the 2nd string. Yellow is that shimmering 9th.

```json
{
  "id": "m2.w6.d3.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — 7 vs 9 contrast line.** R·3·b7 is C7; add the 9th at the end for C9. Hear the top climb from b7 to the 9th and brighten.

```json
{
  "id": "m2.w6.d3.c9_line",
  "type": "tab",
  "meta": { "title": "C9 tones (R·3·b7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 74.** "Root → 3rd → b7 (tension) → 9th (color, top)." Feel the shimmer the moment the 9th lands on top. Repeat 4×.

**Example 2 — C7 → C9 comp.** Bar 1 C7, bar 2 lays the 9th on top (C9). Compare the shimmer of a tension on top.

```json
{
  "id": "m2.w6.d3.c7_c9_comp",
  "type": "tab",
  "meta": { "title": "C7 to C9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 82, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 82, repeat 4×.** Bar 1 plain C7 → bar 2 sparkling C9. With the 9th (yellow) on top, you get the shimmer of funk/soul comping.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate C7 → C9 (add 9 on top). Check the 2nd-string 9th rings clearly on top and the skeleton doesn't collapse.

**10–20 min · Brain training (today's target = the 9th on top)**
In C9, fret where 3·b7·9 are, and especially confirm **the topmost note is the 9th (the top note).** Alternate the top of plain C7 (b7) and C9 (9) to hear the brightness difference.

**20–40 min · Real comping (Example 2 / 78–88 BPM)**
**Repeat Example 2's C7↔C9 at BPM 82 4×.** Once comfortable, move the root (e.g., G, F) for other 9-chords. Over a funk/Motown backing, the shimmer comes alive.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of C7↔C9. Check: does the top 9th die, and did the change timing blur?

**Done when:** you can lay the 9th on top of C7 to make C9, and hear the brightness when the tension is on top.

## ④ Tips / common mistakes

- **The top 9th dies.** If the topmost note dies, you can't hear the shimmer. Stand the 2nd-string fingertip up for clarity.
- **Being scared of C9 as a "brand-new chord."** It's the C7 skeleton + one 9th. Same formula as maj9·m9; only the skeleton is dominant.
- **Shaking the 3rd.** If the 3rd (4th string) gets muted while adding the 9th, the dominant feel blurs.
- **Not listening to the top note.** This preps next week's top-note leading. Be sure to feel the brightness of the top.
