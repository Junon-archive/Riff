---
title: "m7 → m9 — lay a 9th on a minor for that neo-soul color"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — One more finger on the m7 you already know

## ① Theory

Yesterday you laid the 9th on Maj7 to make Maj9. Today you lay the same 9th (D) onto a **minor chord (m7).** The result is **m9** — that soft, sophisticated color of R&B, neo-soul, and city-pop.

- **The Cm7 skeleton** = R (C) · b3 (E♭) · b7 (B♭). (The dark color of minor.)
- **Add the 9th (D)** = **Cm9.** Dark yet shimmering, curiously open.

The point: the 9th lands on the **same spot (2nd string).** Yesterday's Maj9 9th was D, today's m9 9th is D too — with the root at C, the 9th is always D. Only the skeleton (3rd & 7th) turns minor; the **color (9th) stays on top.** Once the formula is in your hand, the motion to add the 9th is identical for maj9 or m9. So today you're not learning a new chord — you're moving yesterday's motion straight over to minor. On a spot your hand already remembers, you just darken the skeleton and leave the color on top. If you got Maj9 yesterday, you'll get m9 today for sure.

## ② Visuals

First, the **Cm7 skeleton** (R·b3·b7). Blue is the minor frame.

```json
{
  "id": "m2.w6.d2.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 skeleton (R·b3·b7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

Now **Cm9** — the 9th (D) laid on the 2nd string. Yellow is the 9th tension, a color sprinkled over the dark.

```json
{
  "id": "m2.w6.d2.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
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

**Example 1 — R·b3·b7·9 line.** Lay the 9th (D) onto the three minor skeleton notes. Confirm the 9th (D) is the same note as yesterday's Maj9 — only the skeleton turned dark.

```json
{
  "id": "m2.w6.d2.m9_line",
  "type": "tab",
  "meta": { "title": "Cm9 tones (R·b3·b7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 72.** "Root → minor 3rd → minor 7th → 9th (color)." Feel the sound open softly as the 9th lands over the dark skeleton. Repeat 4×.

**Example 2 — m7 → m9 comp.** Bar 1 Cm7, bar 2 lays the 9th on (Cm9). Compare color added to the dark.

```json
{
  "id": "m2.w6.d2.m7_m9_comp",
  "type": "tab",
  "meta": { "title": "Cm7 to Cm9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Bar 1 plain Cm7 → bar 2 sophisticated Cm9. One 9th (yellow) over minor's dark gives that neo-soul color.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Alternate Cm7 → Cm9 (add 9). Check the 2nd-string 9th rings cleanly and the b3 (4th string) doesn't choke.

**10–20 min · Brain training (today's target = m9's 9th)**
In Cm9, fret and name where b3·b7·9 each are. Confirm the **9th (2nd string, fret 3) is the same spot** as yesterday's Maj9. You pass when you can add the 9th eyes-closed.

**20–40 min · Real comping (Example 2 / 74–84 BPM)**
**Repeat Example 2's Cm7↔Cm9 at BPM 78 4×.** Once comfortable, move the root to another fret. Over a slow soul/city-pop backing, its value shows.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of Cm7↔Cm9. Check: does the 9th die, and did adding the tension mute the b3 or b7?

**Done when:** you can lay the 9th onto Cm7 to make Cm9, and understand m9's 9th is the same note (D) as Maj9's.

## ④ Tips / common mistakes

- **Memorizing maj9 and m9 as different formulas.** The motion to add the 9th is identical. Only the skeleton (3rd & 7th) turns minor.
- **The 9th dies.** The minor skeleton crowds the frets, so fingers easily cover each other. Stand the fingertips up so each string is clear.
- **Confusing b3 and 9.** The b3 (E♭, 4th string) and the 9 (D, 2nd string) are different strings, different notes.
- **Hitting hard because it's dark.** m9 is a soft, open sound. Ring it lightly for the color to shine.
