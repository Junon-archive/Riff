---
title: "m7, then Maj7 arrives — the b7 vs 7 half-step duel on the 3rd string"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — One half step splits 7 from Maj7

## ① Theory

Yesterday you learned the two switches (2nd-string 3rd, 3rd-string 7th). Today, first lower both to complete **Cm7** (b3 + b7), then invite this week's new guest, **<mark>Maj7</mark>.** The names look confusingly alike, right? Amazingly, the spots are just one fret apart.

It's all on the **<mark>3rd string</mark>** — this string is the 7th's "three-way":

- **<mark>3rd string, fret 5 = R</mark>** (octave root) → plain major/minor
- **<mark>3rd string, fret 4 = 7</mark>** (major 7th) → **Maj7**
- **<mark>3rd string, fret 3 = b7</mark>** (minor 7th) → **dominant 7**

```json
{
  "id": "m1.w2.d3.cmaj7_aform",
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

So **the b7 (fret 3) and the Maj7's 7 (fret 4) are exactly one fret — a half step — apart.** Yet that half step makes completely different emotions. The b7 (dominant) is an <mark>antsy tension</mark> that "wants to resolve fast"; the Maj7's 7 is a "floating, <mark>dreamy, sophisticated</mark>" unfinished. City-pop's wistfulness, that hazy color of a jazz ballad — it all comes from this one Maj7. If the half-step difference sounds subtle at first, that's fine. Today you place the two side by side on the 3rd string and lock in, by ear, the emotional difference that one half step makes.

## ② Visuals

First, **Cm7 (A-form)** with both switches lowered — <mark>the greens are b3 and b7</mark>.

```json
{
  "id": "m1.w2.d3.cm7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

Today's new chord, **Cmaj7 (A-form)** — the 3rd string is the **<mark>7 (fret 4)</mark>,** not the b7 (fret 3). Just one fret higher (green = 7).

```json
{
  "id": "m1.w2.d3.cmaj7_aform",
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

**Example 1 — the b7 vs 7 half-step compare line (3rd string).** Fret 3 (b7) next to fret 4 (7) on the 3rd string. Burn the color that one fret makes into your ear.

```json
{
  "id": "m1.w2.d3.b7_vs_7_line",
  "type": "tab",
  "meta": { "title": "b7 vs 7 on 3rd string — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "Root → b7 (tension) → 7 (dreamy) → root." Catch the sound shift from "wants to resolve" to "floating sophistication" as you go up one fret from 3 to 4. Repeat 4×.

**Example 2 — C7 → Cmaj7 switch comp (3rd string).** Bar 1 C7, bar 2 Cmaj7. Strum the whole chord; only **one finger on the 3rd string (fret 3↔4)** moves.

```json
{
  "id": "m1.w2.d3.dom7_maj7_comp",
  "type": "tab",
  "meta": { "title": "C7 to Cmaj7 switch comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80, repeat 4×.** Bar 1 itchy C7 → bar 2 dreamy Cmaj7. Only one 3rd-string finger, fret 3↔4. That one fret splits blues from city-pop.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
On the 3rd string only, move 5 (R) → 4 (Maj7) → 3 (b7) up and down to <mark>learn the three branches</mark>. Keep the other fingers fixed.

**10–20 min · Brain training (today's target = b7 vs 7)**
With **Example 1,** alternate b7 (fret 3) and 7 (fret 4) and compare the sounds. You pass when, on call ("7! b7!"), <mark>you land instantly on the 3rd string</mark> with eyes closed.

**20–40 min · Real comping (Example 2 / 75–85 BPM)**
**Repeat Example 2 at BPM 80 4×** (C7↔Cmaj7). Then <mark>add Cm7 and cycle Cm7 → C7 → Cmaj7</mark>. Move the root along the 5th string for other keys too.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of b7 ↔ 7. Check: do the two chords sound **<mark>emotionally different</mark>,** and does the 3rd-string note ring clearly?

**Done when:** you can fret R·7·b7 on the 3rd string with eyes closed and tell the color of 7 from Maj7 by ear.

## ④ Tips / common mistakes

- **Hearing b7 and 7 as the same.** They're a half step apart but functionally opposite. b7 = wants to resolve, 7 = floating stability. Alternate many times to open your ear.
- **Mistaking Maj7 for plain major.** The Maj7's 7 (fret 4) sits just one fret below the root (fret 5). Clashing a half step with the root is where the "wistfulness" comes from.
- **Reshaping the whole hand.** C7↔Cmaj7 is one 3rd-string fret. Leave the rest planted.
- **Slacking on the 6th mute.** The A-form always means killing the 6th string.
