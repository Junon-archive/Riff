---
title: "High-register inversions — which of R·3·5 goes on top?"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — Same chord, different top note = different color

## ① Theory

Even the same G chord sounds completely different depending on **<mark>which of R·3·5 you put on the highest note (the top note)</mark>.** This is called <mark>an inversion</mark>. Today you view a G triad on the thin strings (1·2·3) in three places, climbing the neck:

- **<mark>Top = R (G)</mark>** — stable, a "finished" feel. (around fret 3)
- **<mark>Top = 3 (B)</mark>** — bright, singing. (around fret 7)
- **<mark>Top = 5 (D)</mark>** — open, floating. (around fret 10)

```json
{
  "id": "m2.w5.d3.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d3.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d3.g_top_fifth",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 5", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 9, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 12, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 12, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 10, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

All three are the same G (G-B-D), yet one top note changes the color. Pros **<mark>choose the top note</mark>** to place chords within a progression (Week 7 connects these into a melody). Today, just lock in the feel that <mark>"changing the top note changes the color."</mark> No need to memorize all three positions right now. Isn't it something that the same chord sounds this different from one position alone? The moment this feel connects the top notes in Week 7, a melody starts flowing over your comping.

## ② Visuals

**Voicing ① top = R (G).** <mark>Green is the top note (root)</mark>.

```json
{
  "id": "m2.w5.d3.g_top_root",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note R", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 2, "label": "R", "role": "target", "highlight": true }
  ]}
}
```

**Voicing ② top = 3 (B).** <mark>Bright, singing</mark>.

```json
{
  "id": "m2.w5.d3.g_top_third",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 3", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**Voicing ③ top = 5 (D).** <mark>Open, floating</mark>.

```json
{
  "id": "m2.w5.d3.g_top_fifth",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note 5", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 9, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 12, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 12, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 10, "finger": 1, "label": "5", "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — top-note melody (R → 3 → 5).** On the 1st string, play just the three top notes: fret 3 (R, G) → fret 7 (3, B) → fret 10 (5, D). A first taste of the top note becoming a melody.

```json
{
  "id": "m2.w5.d3.top_note_melody",
  "type": "tab",
  "meta": { "title": "Top-note melody (R-3-5) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70.** 1st string 3 → 7 → 10. The three notes of G (R·3·5) climb as a top-note melody. Feel each color (stable, bright, floating). Repeat 4×.

**Example 2 — three-voicing comp.** Fret each voicing low-note → top-note to compare the colors.

```json
{
  "id": "m2.w5.d3.inversion_comp",
  "type": "tab",
  "meta": { "title": "Three inversions comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 12, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 10, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 12, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** Play the three voicings in turn (top R → 3 → 5). Fret the low note and lay the top note on it, comparing how differently the same G sounds in each place. Repeat 4×.

**Example 3 — full-chord comping.** The three voicings (top R → 3 → 5) that Example 2 fretted as just a low note + top note now ring as the full triad. The top note still sings on top, unchanged.

```json
{
  "id": "m2.w5.d3.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full triad comp (3 inversions) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "half", "role": "chord_tone", "label": "3", "chord": [{ "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "target", "label": "R" }] },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "half", "role": "chord_tone", "label": "5", "chord": [{ "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 3, "fret": 7, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 12, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 12, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 10, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 12, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 2, "fret": 12, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 10, "role": "target", "label": "5" }] },
      { "string": 3, "fret": 12, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** Same rhythm as Example 2, but now every voicing rings as the full chord. Feel the sound fill out.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret each voicing (top R·3·5) and check only the 1·2·3 strings ring clean. <mark>Adjust to the hand travel up and down the neck</mark>.

**10–20 min · Brain training (today's target = the top note's identity)**
In each voicing, name aloud **<mark>whether the top note is R, 3, or 5</mark>** as you fret it. You pass when, on "top = 3!", you grab the fret-7 voicing instantly with eyes closed.

**20–40 min · Real comping (Examples 1 & 2 / 70–80 BPM)**
Repeat **Example 2's three-voicing comp at BPM 76,** comparing colors. Then play **Example 1's top-note melody** connecting the three notes. Once comfortable, <mark>find the three voicings for other chords (C, D) too</mark>.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the three voicings. Check: <mark>is the top note clearly different in each</mark>, and does the hand travel stay clean?

**Done when:** you can grab the same G with three top notes (R·3·5) and tell the color difference of each by ear.

## ④ Tips / common mistakes

- **Mistaking an inversion for a "different chord."** All three are the same G — only the order (who's on top) differs.
- **Can't find the voicing up the neck.** Search by the top note: "I want 5 on top → find D on the 1st string."
- **Mute/pitch at high frets.** Frets 10–12 have tight spacing. Stand the fingertips up so only the three strings ring.
- **Not listening to the top note.** Today's core is the ear. Be sure to feel the same chord sounding different in each place.
