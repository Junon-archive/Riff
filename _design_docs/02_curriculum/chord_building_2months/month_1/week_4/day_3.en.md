---
title: "5th-string-root shell set — drop the root down to the 5th string"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 5th-string-root shell, change character with the 3rd & 2nd strings

## ① Theory

Yesterday you learned the 6th-string-root shells. Today the root drops to the **5th string.** The principle is identical — keep only R·3·7, drop the 5th. But since the root string changed, the 3rd and 7th move to different strings:

- **3rd string = the 7th switch.** Fret 4 (7, Maj7) ↔ fret 3 (b7).
- **2nd string = the 3rd switch.** Fret 5 (3) ↔ fret 4 (b3).

So the three characters are:

- **Cmaj7 shell** = 3rd string 4 (7) · 2nd string 5 (3)
- **C7 shell** = 3rd string 3 (b7) · 2nd string 5 (3)
- **Cm7 shell** = 3rd string 3 (b7) · 2nd string 4 (b3)

If the 6th-string shell (yesterday) used the 4th & 3rd strings, the 5th-string shell uses the **3rd & 2nd.** When the root string changes, the color notes shift up one set. Once you have both sets (6th & 5th), tomorrow you can connect a whole ii–V–I as shells.

## ② Visuals

Three 5th-string-root shells. Green is the 3rd & 7th; this time the 3rd & 2nd strings are the switches. The 6·4·1 are muted.

```json
{
  "id": "m1.w4.d3.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d3.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — two-switch check line (3rd & 2nd strings).** 3rd string 7↔b7, 2nd string 3↔b3.

```json
{
  "id": "m1.w4.d3.shell_switch_line5",
  "type": "tab",
  "meta": { "title": "5th-root shell switches — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 3rd string (7→b7), 2nd string (3→b3). Same principle as the 6th-string shell, just moved strings. Repeat 4×.

**Example 2 — 5th-root shell-set cycle.** Cmaj7 → C7 → Cm7. Root (5th) fixed, only the 3rd & 2nd strings.

```json
{
  "id": "m1.w4.d3.shell_set_comp5",
  "type": "tab",
  "meta": { "title": "5th-root shell set comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Cmaj7 → C7 → Cm7. Root fixed, only the 3rd/2nd color notes move. Check the 6·4·1 mutes.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play the Cmaj7 → C7 → Cm7 shells, four beats each. Root (5th) fixed, 6·4·1 muted, only 3·2 moving.

**10–20 min · Brain training (today's target = the 3rd/2nd color notes)**
With **Example 1,** confirm the 3rd-string (7/b7) and 2nd-string (3/b3) spots. Sort out by eye the difference between yesterday's 6th shell (4·3) and today's 5th shell (3·2).

**20–40 min · Real comping (Example 2 cycle / 74–84 BPM)**
**Repeat Example 2 at BPM 78 4×.** Then move the root to another 5th-string fret (e.g., D = fret 5). Alternate 6th- and 5th-string shells to learn both in your hands.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the 5th-string shell cycle. Check: do the 6·4·1 stay silent, are the three characters distinct?

**Done when:** with a 5th-string-root shell, you can cycle Cmaj7·C7·Cm7 using only the 3rd & 2nd strings, and move freely between the 6th- and 5th-string shells.

## ④ Tips / common mistakes

- **The 4th string leaking.** The 5th-string shell mutes the 4th (below the root). Lightly cover the 4th with the root fingertip too.
- **Keeping the 6th-shell positions.** On the 5th string, the 7th is the 3rd string and the 3rd is the 2nd string. The root string changes the map.
- **A weak 2nd-string 3rd.** If the 2nd string's fret 5 (the 3rd) dies, a neighbor is leaning on it. Stand the fingertip up.
- **Frustration with the thin sound.** Shells are thin by nature. Their value shows over a band/backing, so don't judge by volume when playing alone.
