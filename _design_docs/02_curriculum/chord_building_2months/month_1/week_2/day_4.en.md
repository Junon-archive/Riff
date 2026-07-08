---
title: "5th-string root integration — cycle five characters in one spot"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — Two strings (2nd & 3rd) command Maj·m·7·m7·Maj7

## ① Theory

The week's finish line. Today isn't new memorizing either — over the 5th-string root, combine the two switches into **five characters** cycled in one spot. Get here and the 5th-string root is fully yours.

- **2nd string = the 3rd switch.** Fret 5 (3) ↔ fret 4 (b3).
- **3rd string = the 7th three-way.** Fret 5 (R) · fret 4 (7) · fret 3 (b7).

The combination of these two strings alone gives all five chords:

- **C (major)** = 2nd string 5 (3) · 3rd string 5 (R)
- **Cm** = 2nd string 4 (b3) · 3rd string 5 (R)
- **C7** = 2nd string 5 (3) · 3rd string 3 (b7)
- **Cm7** = 2nd string 4 (b3) · 3rd string 3 (b7)
- **Cmaj7** = 2nd string 5 (3) · 3rd string 4 (7)

See — the five chords are, in the end, just the **position combination of two fingers (2nd & 3rd strings).** Not five shapes to memorize, but a question of where to put two strings. Today you spin them freely over one root, confirming by hand that the feel you gained on the 6th string last week works exactly the same on the 5th.

## ② Visuals

Today's reference chord, **Cmaj7 (A-form)** — the 3rd-string 7 (fret 4, green) clashes wistfully just below the root.

```json
{
  "id": "m1.w2.d4.cmaj7_ref",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**Example 1 — two-switch tour.** Bar 1 is the 2nd string (3↔b3), bar 2 is the 3rd string (R·7·b7). Sort out by hand what each string handles.

```json
{
  "id": "m1.w2.d4.two_switch_tour",
  "type": "tab",
  "meta": { "title": "Two switches tour — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72.** Bar 1 = bright/dark (2nd string), bar 2 = stable/dreamy/tense (3rd string). Repeat 4×.

**Example 2 — Cmaj7 comp + five-character cycle.** Root → 7 → 3rd puts Maj7's wistful color into a rhythm.

```json
{
  "id": "m1.w2.d4.cmaj7_comp",
  "type": "tab",
  "meta": { "title": "Cmaj7 comp groove — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80, repeat 4×.** Once the groove settles, expand to the **integration cycle:** in the same spot, change only the 2nd-string (3↔b3) and 3rd-string (R/7/b7) fingers to play **C → Cm → C7 → Cm7 → Cmaj7,** one bar each.

**Example 3 — full-chord comping.** Same rhythm as Example 2, but each hit (root, 7th, 3rd) rings the whole Cmaj7 chord instead of a single note.

```json
{
  "id": "m1.w2.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (Cmaj7) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
      { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80.** Same groove as Example 2, now with the whole chord. Once the root-7-3 comp feels comfortable, move on to this.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play C → Cm → C7 → Cm7 → Cmaj7 in order, four beats each. Keep the root (5th string) and the 6th-string mute fixed; move only the 2nd and 3rd strings.

**10–20 min · Brain training (today's target = the two-switch combination)**
Distinguish the five with two questions: "Is the 3rd down? Is the 7th R, 7, or b7?" Use **Example 1** to name each string's job aloud.

**20–40 min · Real comping (Example 2 + integration cycle / 75–85 BPM)**
**Repeat Example 2's Cmaj7 groove at BPM 80 4×,** then expand to the **integration cycle** (five chords, one bar each). Then move the root along the 5th string and cycle in other keys.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the five-chord cycle. Check: are all five characters clearly distinct, and does the 6th string stay silent?

**Done when:** in one 5th-string-root spot, you can cycle C → Cm → C7 → Cm7 → Cmaj7 using only the 2nd- and 3rd-string fingers. (Week 2 complete!)

## ④ Tips / common mistakes

- **Memorizing the five as separate shapes.** Remember them as the combination of two switches (2nd & 3rd strings) so they work in any key.
- **Mixing it up with the 6th-string form.** On the 5th string, the 3rd is the 2nd string, the 7th is the 3rd string. The root string sets the map.
- **Dropping the root / 6th mute while cycling.** Those two are your anchors. Keep them throughout.
- **Speed greed.** If the five mush, drop to BPM 70. The correct combination comes first.
