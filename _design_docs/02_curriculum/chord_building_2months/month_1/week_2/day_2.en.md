---
title: "Minor + dominant 7 on the 5th-string root — same principle, new layout"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — Minor on the 2nd string, 7 on the 3rd string

## ① Theory

Good news today — there's **no new principle to learn.** We reuse last week's two switches on the 5th-string root. Only one thing is new to memorize: the new "address" of **which string you switch on.**

- **Minor switch = 2nd string.** Lower the 3rd (2nd string, fret 5, E) a half step to b3 (fret 4, E♭). → **Cm**
- **Dominant-7 switch = 3rd string.** Lower the octave root (3rd string, fret 5, C) two frets to b7 (fret 3, B♭). → **C7**

```json
{
  "id": "m1.w2.d2.cm_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

```json
{
  "id": "m1.w2.d2.c7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

In the 6th-string form the 3rd was on the 3rd string and the 7th on the 4th. In the 5th-string form (A-form), the **3rd simply moved to the 2nd string and the 7th to the 3rd string.** When the root changes, the switches' home addresses change too — feeling that in your hands is all today asks. The principle (lower the 3rd for minor, add the b7 for 7) is 100% identical to last week, so you just get comfortable with the new spots. Once it's in your hands, 6th-string or 5th-string, you're free either way.

## ② Visuals

First, **C minor (A-form)** — only the 2nd-string 3rd dropped from fret 5 to 4 (green = b3).

```json
{
  "id": "m1.w2.d2.cm_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

Now **C7 (A-form)** — the 3rd-string octave root dropped from fret 5 to 3 to get the b7 (green = b7).

```json
{
  "id": "m1.w2.d2.c7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**Example 1 — the 3 → b3 minor-switch line (2nd string).** Fret 5 (3) next to fret 4 (b3) on the 2nd string.

```json
{
  "id": "m1.w2.d2.minor_switch_line",
  "type": "tab",
  "meta": { "title": "3 to b3 on 2nd string — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "Root → 3rd → minor 3rd → root." One fret on the 2nd string turns bright into sad. Repeat 4×.

**Example 2 — Major → 7 switch comp (3rd string).** Bar 1 C, bar 2 C7. Strum the whole chord, but only the **3rd string (fret 5→3)** moves.

```json
{
  "id": "m1.w2.d2.dom7_switch_comp",
  "type": "tab",
  "meta": { "title": "C to C7 switch comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 3, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 78, repeat 4×.** Bar 1 stable C → bar 2 itchy C7. Only the 3rd-string finger moves from fret 5 to 3.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate C → Cm (2nd string 5↔4) and C → C7 (3rd string 5↔3), four beats each. Keep the 6th string muted.

**10–20 min · Brain training (today's target = 2nd-string b3 · 3rd-string b7)**
Use **Examples 1 & 2** to fix the two switch spots. "Minor is the 2nd string, 7 is the 3rd string." You pass when you can fret each with eyes closed.

**20–40 min · Real comping (Example 2 / 75–85 BPM)**
**Repeat Example 2 at BPM 78 4×** (C↔C7). Then add the Cm switch (Example 1) over a backing track and move freely between C↔Cm↔C7. Move the root along the 5th string for other keys too.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of C↔Cm↔C7. Check: does a string die at the switch, and does the 6th leak?

**Done when:** over the 5th-string root, you can switch minor on the 2nd string and 7 on the 3rd string with eyes closed.

## ④ Tips / common mistakes

- **Using the 6th-string form's switch spots.** On the 5th string, the 3rd is the 2nd string and the 7th is the 3rd string. New root string, new map.
- **Touching the 3rd while fretting b7.** C7 lowers only the 3rd string. Leave the 2nd-string 3rd alone.
- **The b3 won't ring.** If the 2nd string's fret 4 dies, a neighbor is leaning on it. Stand the fingertip up.
- **A-form fatigue.** If your fingers ache, just get four strings (5·4·3·2) solid. Don't overdo it.
