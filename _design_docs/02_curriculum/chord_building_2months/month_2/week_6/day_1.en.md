---
title: "What the 9th is — laying color onto Maj7 to make Maj9"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — One more note over the root, and that's the 9th

## ① Theory

Does "the 9th" sound hard? It's actually very simple. **The 9th = the root's major 2nd, raised one octave.** C's 9th is D (C to D, an octave up). That's all.

Lay this one note onto a chord you already hold and the color turns bright. Today you do **Maj7 → Maj9.**

- **The Maj7 skeleton** = R (C) · 3 (E) · 7 (B). (These are the chord tones from last month.)
- **Add the 9th (D)** = **Maj9.** One D sprinkled bright over R·3·7.

The key: if R·3·7 are the chord's **skeleton (blue),** the 9th is the **color (yellow)** sprinkled on top. Leave the skeleton and just add color. That sophisticated ring of city-pop, jazz, and R&B comes precisely from this 9th. Don't be scared off — you're not memorizing a whole new chord. You add just one finger onto a chord you already hold. It's only sprinkling one sparkle over a chord you know, so today it's enough to feel with your hands that "the 9th isn't hard."

## ② Visuals

First, the **Cmaj7 skeleton** (R·3·7). Blue is the chord's frame.

```json
{
  "id": "m2.w6.d1.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 skeleton (R·3·7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

Now **Cmaj9** — the 9th (D) laid on the 2nd string. Yellow is the freshly sprinkled **9th tension,** today's color.

```json
{
  "id": "m2.w6.d1.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**Example 1 — R·3·7·9 line.** Fret the three skeleton notes, then lay the 9th (D) on the end. Confirm by ear that the 9th is the root's (C) major 2nd, an octave up. Yellow is its color.

```json
{
  "id": "m2.w6.d1.maj9_line",
  "type": "tab",
  "meta": { "title": "Cmaj9 tones (R·3·7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 72.** "Root → 3rd → 7th → 9th (color)." Feel the sound brighten the moment the 9th (D) lands. Repeat 4×.

**Example 2 — Maj7 → Maj9 comp.** Bar 1 is the skeleton (Maj7), bar 2 lays the 9th on (Maj9). Compare by ear how only color is added to the same chord.

```json
{
  "id": "m2.w6.d1.maj7_maj9_comp",
  "type": "tab",
  "meta": { "title": "Cmaj7 to Cmaj9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "chord_tone" },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "9", "role": "color" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "chord_tone" },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Bar 1 plain Maj7 → bar 2 shimmering Maj9. Just one 9th (yellow) added, yet the color changes completely — enjoy it.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate the Cmaj7 skeleton and Cmaj9 (add 9). The key check: does the **9th laid on the 2nd string ring cleanly,** not muted?

**10–20 min · Brain training (today's target = the 9th)**
Fret **where the 9th (D) is** relative to the root C (2nd string, fret 3). Name aloud where the 3rd, 7th, and 9th each are in this chord. You pass when you can lay the 9th on with eyes closed.

**20–40 min · Real comping (Example 2 / 74–84 BPM)**
**Repeat Example 2's Maj7↔Maj9 at BPM 78 4×,** feeling the color difference. Once comfortable, move the root to another fret (e.g., a 5th-string position) and apply the same formula. Over a bright backing it's pure city-pop.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of Maj7↔Maj9. Check: does the 9th ring (not die), and did adding the tension collapse the hand so another string got muted?

**Done when:** you can lay the 9th onto the Cmaj7 skeleton to make Cmaj9, and name that the 9th is the root + major 2nd (an octave up).

## ④ Tips / common mistakes

- **The 9th dies.** If the added finger leans over or lacks pressure, the 9th won't ring. Stand the fingertip up so only the 2nd string is clean.
- **Being scared of the 9th as "hard."** The 9th = C to D, one note. Know the formula and you can add it in any of the 12 keys.
- **Shaking the skeleton.** Don't let R·3·7 collapse while adding the 9th. Leave the skeleton; just add color.
- **Confusing the 9th with the 3rd.** The 9th (D) is the root's (C) major 2nd up. It's a different note from the 3rd (E).
