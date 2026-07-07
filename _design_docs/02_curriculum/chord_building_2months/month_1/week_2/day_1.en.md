---
title: "Dissecting the 5th-string root (A-form) — moving the home to the 5th string"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — When the root drops to the 5th string, where do R·3·5 go?

## ① Theory

All last week the root sat on the **6th string.** This week we move that home to the **5th string.** Not one rule changes — it's still "stack the 3rd and 5th over the root." But when the root moves to another string, the 3rd and 5th move to new spots too, so today is about learning that new map.

Our example is **C major (A-form)** with the root on the 5th string, 3rd fret. Broken down by interval, the fretted spots are:

- **R (root)** — 5th string, fret 3 (C). This week's new home.
- **5 (5th)** — 4th string, fret 5 (G). The string just above the root.
- **R (root)** — 3rd string, fret 5 (C). The octave root.
- **3 (3rd)** — 2nd string, fret 5 (E). Today's expression note (green).

And **the 6th string is unused.** The key A-form habit is **killing the 6th string firmly.** If a string lower than the root leaks through, the chord blurs. Mute it with a light thumb over the top, or with the tip of your root finger touching the 6th string.

## ② Visuals

**C major (A-form)** with the root on the 5th string. The 6th and 1st strings are ✕ (muted); the green is the **3rd (E)** on the 2nd string.

```json
{
  "id": "m1.w2.d1.c_major_aform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major — 5th-string root (A-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**Example 1 — the R·3·5 check line.** Fret the three ingredients one at a time in the new layout. Since the root dropped to the 5th string, confirm by eye and ear that the 3rd and 5th sit differently than yesterday.

```json
{
  "id": "m1.w2.d1.c_chordtones_line",
  "type": "tab",
  "meta": {
    "title": "C chord tones (R·3·5) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70.** "Root (5th string) → 3rd (2nd string) → 5th (4th string) → root (3rd string)." Plant the feel that the root is on the 5th string. Repeat 4×.

**Example 2 — C comping rhythm + 6th-string mute.** On each marked note **strum the whole C chord,** keeping the **6th string absolutely silent.** Make the groove with a palm mute after the eighth rest.

```json
{
  "id": "m1.w2.d1.c_comp_rhythm",
  "type": "tab",
  "meta": {
    "title": "C comping rhythm (mute 6th) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75, repeat 4×.** Hold the groove from the root (5th string), constantly checking the strum doesn't leak to the 6th. Once comfortable, move the root to the 5th string, fret 5 (D) and keep the same rhythm.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret C (A-form) and ring the strings one at a time from the 5th to the 2nd. Top priority: **are the 6th and 1st strings firmly dead?** Only the four used strings, clean.

**10–20 min · Brain training (today's target = the 3rd, E)**
Fret **Example 1** naming R·3·5 aloud, then isolate just the **3rd (E)** on the 2nd string, fret 5, over and over. You pass when you can find, eyes closed, where the 3rd went now that the root is on the 5th string.

**20–40 min · Real comping (Example 2 / 70–80 BPM)**
**Repeat Example 2 at BPM 75 4×.** Stay aware that the 6th string is dead on every strum. Once comfortable, move just the root to the 5th string, fret 5 (D) and apply the same pattern. Today adapts your hand to the new coordinate "root on the 5th string."

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the C comp. Check: **did the low 6th string leak through,** and are the four strings clear? If the 6th rang, fix your mute position tomorrow.

**Done when:** you can ring C (A-form) cleanly with the 6th string muted, and fret R·3·5 from the 5th-string root with your eyes closed.

## ④ Tips / common mistakes

- **The 6th string leaking.** This is the A-form's biggest enemy. Tilt your root fingertip to touch the 6th string, or cover it with your thumb.
- **Confusing it with the 6th-string form (last week).** When the root string changes, all the 3rd/5th spots move. Approach by "which string is the root?", not by "shape."
- **A-form barre ache.** At first your fingers hurt. Don't force everything down — today, four clean strings (5·4·3·2) is enough.
- **Letting the 3rd slip.** The 2nd-string 3rd (E) is the note that moves when you go minor tomorrow. Fix it in your eye now.
