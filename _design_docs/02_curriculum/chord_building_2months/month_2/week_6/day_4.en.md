---
title: "9th integration — color stays on top, only the skeleton cycles"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — Maj9 → 9 → m9, the 9th always on top

## ① Theory

The week's finish line. Cycle Maj9·9·m9 over one root. The amazing part: the **<mark>9th (D) stays on the 2nd string, on top, the whole time</mark>.** Only the skeleton below changes:

- **<mark>3rd string = the 7th switch</mark>.** Fret 4 (7, Maj9) ↔ fret 3 (b7, 9·m9).
- **<mark>4th string = the 3rd switch</mark>.** Fret 2 (3, Maj9·9) ↔ fret 1 (b3, m9).

So:
- **Cmaj9** = 3rd string 4 (7) · 4th string 2 (3)
- **C9** = 3rd string 3 (b7) · 4th string 2 (3)
- **Cm9** = 3rd string 3 (b7) · 4th string 1 (b3)

```json
{
  "id": "m2.w6.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m2.w6.d4.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

```json
{
  "id": "m2.w6.d4.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

<mark>The color (9th) stays on top; only the skeleton (3rd & 7th) switches with your fingers</mark> — the two switches from month 1 are alive in the 9-chords too. Add Week 5's top-note feel, and next week (7) you'll connect these upper notes into a **melody.** In a single week you've come to flip between maj9, 9, and m9 with a two-finger switch. <mark>Why city-pop comping always sounded so polished — that secret now sits in your hands</mark>.

## ② Visuals

**Cmaj9** — <mark>3rd string 7 (fret 4), 4th string 3 (fret 2), 2nd string 9 (yellow)</mark>.

```json
{
  "id": "m2.w6.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**C9** — <mark>only the 3rd string to b7 (fret 3)</mark>. The 9th stays on top.

```json
{
  "id": "m2.w6.d4.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**Cm9** — <mark>the 4th string also to b3 (fret 1)</mark>. The 9th still on top.

```json
{
  "id": "m2.w6.d4.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — 7-switch under a constant 9th.** On the 3rd string, go 7 (4) ↔ b7 (3), while the 2nd-string 9th (D) stays. Feel the color fixed on top, only the skeleton moving.

```json
{
  "id": "m2.w6.d4.switch_over_9",
  "type": "tab",
  "meta": { "title": "7-switch under constant 9 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 74.** 3rd string 7 → 9 (color) → b7 → 9 (color). The 9th stays put; only the 7th below moves a half step. Repeat 4×.

**Example 2 — Maj9 → 9 → m9 cycle comp.** The 9th always on top; only the 3rd & 4th strings switch.

```json
{
  "id": "m2.w6.d4.nine_cycle_comp",
  "type": "tab",
  "meta": { "title": "Maj9-9-m9 cycle comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 80, repeat 4×.** Cmaj9 → C9 → Cm9. The 9th (yellow) stays on top; only the 3rd & 4th-string skeleton changes. Hear all three shimmer yet differ in character.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play Cmaj9 → C9 → Cm9 in order, four beats each. <mark>Root and 9th (2nd string) fixed, only the 3rd & 4th strings moving</mark>. Check the 9th keeps ringing cleanly.

**10–20 min · Brain training (today's target = constant 9th + skeleton switch)**
<mark>"The 9th stays, the 7th 4↔3, the 3rd 2↔1."</mark> On "m9!", grab the 3rd & 4th strings instantly while holding the 9th. Confirm with **Example 1.**

**20–40 min · Real comping (Example 2 cycle / 76–86 BPM)**
**Repeat Example 2's three-9-chord cycle at BPM 80 4×.** Then move the root for other keys. <mark>Over a soul/city-pop backing, enjoy the shimmering progression</mark>.

**40–50 min · Record & reflect + week recap (recommended)**
Record 30 seconds of the three-9-chord cycle. Check: does the 9th stay alive, and does another string die during the skeleton switch? Then sum up: <mark>"How much did one 9th change the sound?"</mark>

**Done when:** over one root, you can cycle Maj9 → 9 → m9 using only the 3rd & 4th strings while holding the 9th. (Week 6 complete!)

## ④ Tips / common mistakes

- **Re-finding the 9th every time.** The 9th doesn't move. Only the skeleton (3rd & 7th) switches. Keep the 9th finger planted.
- **The 9th dies during the switch.** If the upper 9th lifts while you move the lower fingers, the color vanishes. Keep the 9th pressed.
- **Memorizing the three 9-chords separately.** They're a combination of two switches — the same month-1 principle.
- **Emphasizing the 9th while neglecting the skeleton.** The 3rd & 7th set the character. A blurry skeleton loses the maj/dom/m distinction.
