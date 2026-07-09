---
title: "6th-string-root shell set — Maj7·7·m7 with three fingers"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 6th-string root, change character with the two inner strings

## ① Theory

Yesterday you dieted G7 into a shell (R·b7·3). Today you build a **set** of 6th-string-root shells. The root stays on the 6th string, and the two inner strings are each a switch:

- **4th string = the 7th switch.** Fret 4 (7, Maj7) ↔ fret 3 (b7, dominant/minor 7).
- **3rd string = the 3rd switch.** Fret 4 (3, major) ↔ fret 3 (b3, minor).

The combination of these two strings gives all three characters:

```json
{
  "id": "m1.w4.d2.gmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gmaj7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.gm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

- **Gmaj7 shell** = 4th string 4 (7) · 3rd string 4 (3)
- **G7 shell** = 4th string 3 (b7) · 3rd string 4 (3)
- **Gm7 shell** = 4th string 3 (b7) · 3rd string 3 (b3)

The two switches (3rd & 7th) you've used for three weeks are alive in the shell too. It's just that with no 5th or doubled note, you now operate only the **two remaining color notes** clearly. Looks complicated? But there are only two things to remember — the "7th string" and the "3rd string." Get these two switches into your hands and you can flip between major, dominant, and minor with a single finger. You're not memorizing three chords; you're learning two switches.

## ② Visuals

Three 6th-string-root shells. Green is the 3rd & 7th; move just two strings and the character changes.

```json
{
  "id": "m1.w4.d2.gmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gmaj7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.gm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — two-switch check line.** 4th string 7↔b7, 3rd string 3↔b3. Hear how the color notes change on the two strings.

```json
{
  "id": "m1.w4.d2.shell_switch_line",
  "type": "tab",
  "meta": { "title": "Shell switches (7/b7, 3/b3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 4th string (7→b7), 3rd string (3→b3). Learn the motion of the two color notes. Repeat 4×.

**Example 2 — shell-set cycle comp.** Gmaj7 → G7 → Gm7. The root (6th) stays fixed; only the 4th and 3rd strings change.

```json
{
  "id": "m1.w4.d2.shell_set_comp",
  "type": "tab",
  "meta": { "title": "6th-root shell set comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 4, "role": "target", "label": "7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 4, "role": "target", "label": "7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 4, "role": "target", "label": "7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 4, "role": "target", "label": "7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }] }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Gmaj7 → G7 → Gm7. The root stays; only the two color notes move inside. Hear the three characters clearly distinct.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play the Gmaj7 → G7 → Gm7 shells in order, four beats each. Root (6th) fixed, 5·2·1 muted, only 4·3 moving.

**10–20 min · Brain training (today's target = the two color notes)**
With **Example 1,** confirm the 4th-string (7/b7) and 3rd-string (3/b3) positions. Eyes closed, on "Gm7!" both strings jump straight to fret 3.

**20–40 min · Real comping (Example 2 cycle / 74–84 BPM)**
**Repeat Example 2 at BPM 78 4×.** Then move just the root to another fret (e.g., A = fret 5) and apply the same set. Get used to the thin, fast shell comp.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the three-shell cycle. Check: do dropped strings stay silent, are the three characters distinct, are the changes fast?

**Done when:** with a 6th-string-root shell, you can cycle Gmaj7·G7·Gm7 using only the 4th and 3rd strings while the root stays fixed.

## ④ Tips / common mistakes

- **Keep lifting the root.** The 6th-string root is fixed. Move only the 4th and 3rd.
- **Confusing 7th and 3rd.** The 4th string is the 7th, the 3rd string is the 3rd. Upper (4th) = seven, lower (3rd) = third.
- **Dropped strings leaking.** Cover the 5·2·1 firmly with finger flesh.
- **Memorizing the shell as a shape.** Think "root + 7th (4th) + 3rd (3rd)." Knowing the identity makes it work on the 5th-string root too (tomorrow).
