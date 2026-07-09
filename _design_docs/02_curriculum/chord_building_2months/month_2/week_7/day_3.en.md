---
title: "The reverse — melody first, chords underneath"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — Dress the tune you want to sing with chords

## ① Theory

Yesterday the progression was given and you connected the top notes minimally. Today you go the **other way.** **<mark>Set a top-note melody first</mark>,** then put chords under it to support that melody. This is the real order of songwriting and arranging — <mark>the song (melody) first, chords are the clothing</mark>.

Today's melody descends: **C → B → A → G** (1st string frets 8 → 7 → 5 → 3). A very natural, step-down tune. Keep these four notes on top and harmonize below:

- **C (top) ← C chord** (C is C's R)
- **B (top) ← G chord** (B is G's 3rd)
- **A (top) ← F chord** (A is F's 3rd)
- **G (top) ← C chord** (G is C's 5th)

```json
{
  "id": "m2.w7.d3.c_top_c",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note C (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 7, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 8, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w7.d3.g_top_b",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note B (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

So the progression is **C - G - F - C.** <mark>The same melody changes color depending on which chord you lay beneath</mark>. Today you learn the feel that <mark>"the melody comes first; chords support it."</mark> It's only yesterday reversed in direction — the materials are the same, so don't feel pressured. Try this once and your ear starts noticing, before your head does, why the chords in a song you love sit so close together. <mark>It's the first step to hearing music from a songwriter's point of view</mark>.

## ② Visuals

**C — top = R (C).** <mark>The melody's first note C sits on top, with 3 (E) · 5 (G) below</mark>. Green is the top (melody).

```json
{
  "id": "m2.w7.d3.c_top_c",
  "type": "fretboard_diagram",
  "meta": { "title": "C triad — top note C (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 7, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 8, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**G — top = 3 (B).** <mark>Put the melody's second note B on top and a G chord sits naturally below</mark>.

```json
{
  "id": "m2.w7.d3.g_top_b",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note B (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — the top-note melody set first (C-B-A-G).** On the 1st string, sing just the descending tune first. This is today's "song" to be dressed with chords.

```json
{
  "id": "m2.w7.d3.melody_first",
  "type": "tab",
  "meta": { "title": "Top melody first (C-B-A-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 8, "duration": "quarter", "label": "R(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3(B)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70.** 1st string 8 → 7 → 5 → 3. C-B-A-G descending. Learn this tune first, like singing (the parens show the note's degree in each chord). Repeat 4×.

**Example 2 — harmonize the melody (C-G-F-C).** Now lay a chord beneath each top note. Melody above, support below.

```json
{
  "id": "m2.w7.d3.harmonize_comp",
  "type": "tab",
  "meta": { "title": "Harmonize the melody (C-G-F-C) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 8, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 6, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76, repeat 4×.** The top C-B-A-G keeps singing while C-G-F-C supports below. Feel the order: sing the melody first, then lay the chords on.

**Example 3 — full-chord comping.** The C - G - F - C you harmonized under the melody now rings as the full triad. The top-note melody (C-B-A-G) still sings on top, unchanged.

```json
{
  "id": "m2.w7.d3.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (harmonize C-G-F-C) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 8, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 8, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 9, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 8, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 8, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 9, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 8, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 6, "role": "root", "label": "R" }, { "string": 1, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 2, "fret": 6, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** Same rhythm as Example 2, but now the full chord rings. The chords supporting the melody feel richer.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play **Example 1's** melody (C-B-A-G) on the 1st string several times. <mark>Burn the descending tune into hand and ear</mark>.

**10–20 min · Brain training (today's target = melody → chord)**
Confirm each top note's degree in its chord (C = C's R, B = G's 3, A = F's 3, G = C's 5). Ask yourself, <mark>"to put this note on top, which chord fits?"</mark>

**20–40 min · Real comping (Example 2 / 72–82 BPM)**
**Repeat Example 2 at BPM 76 4×.** Keep the top melody, support below with chords. Once comfortable, tweak the melody slightly (e.g., C-B-A-A) and <mark>choose fitting chords yourself</mark>.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of melody+chords. Check: <mark>does the top melody sing clearly</mark>, and do the chords below support it well?

**Done when:** you can set a top-note melody (C-B-A-G) first, then comp chords (C-G-F-C) underneath it.

## ④ Tips / common mistakes

- **Thinking chords first.** Today the melody comes first. Decide the tune you want to sing, chords later.
- **The top melody buried.** Hit the upper note a touch harder, the lower notes softly. The melody must be heard to matter.
- **Thinking one melody note = one chord.** For C on top, not only C but Am, F, etc. fit. Today is just one example.
- **Rushing the neck travel.** You descend from fret 8 (C) to fret 3 (G). Look ahead to the next spot and move smoothly.
