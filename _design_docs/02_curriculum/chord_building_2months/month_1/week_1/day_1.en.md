---
title: "Dissecting the 6th-string root — a chord is assembled, not memorized"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — Taking G apart to learn "assembly over a root"

## ① Theory

Here's why we're doing this today: it's not that we can't play chords because we can't memorize them. It's that memorizing them **as shapes only** kills our ability to adapt. Memorize twenty — "G is this shape, C is that shape" — and the twenty-first chord stops you cold again. You've probably hit that frustrating wall at least once. So starting today we change the rule entirely. We stop seeing a chord as a shape and start seeing it as **<mark>notes stacked over a root</mark>.**

There's exactly one reference point: the **root (R).** Today we dissect a chord whose root sits on the **6th string** (the one people call the "E-form"). Our example is **G major** at the 3rd fret. Don't be intimidated — even inside this big chord there are really only <mark>three kinds of notes</mark>.

```json
{
  "id": "m1.w1.d1.g_major_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G major — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

- **R (root)** — the G on the 6th, 4th, and 1st strings. The chord's name, and its home.
- **3 (3rd)** — the B on the 3rd string. The note that sets **<mark>the chord's expression</mark>.** Bright or dark is entirely decided by this **<mark>3rd</mark>**.
- **5 (5th)** — the D on the 5th and 2nd strings. A pillar that thickens the chord. It doesn't change the character.

So G major isn't a "complicated six-finger shape" — it's just **the three ingredients R·3·5 placed over a 6th-string root.** Not six unfamiliar dots, but three familiar ingredients — see it that way and a chord suddenly feels light. Today, fully break down by eye where these three notes live. Pay special attention to the **<mark>3rd (B)</mark>.** All week long, **every change happens at just two spots — <mark>the 3rd and the 7th</mark>** — "lower this a half step for minor, add that for a 7." Put this map in your head today, and the next three days are a breeze.

## ② Visuals

First, today's star: the 6th-string-root G major (E-form). Blue is root/chord-tones; among them the **3rd (B)** on the 3rd string <mark>holds the expression</mark> (highlighted green).

```json
{
  "id": "m1.w1.d1.g_major_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G major — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**Example 1 — chord-tone check line (R·3·5·R).** Confirm the three ingredients one note at a time. Since **staff and tab appear together,** watch both how high each note actually rises (staff) and which string/fret it is (tab).

```json
{
  "id": "m1.w1.d1.g_chordtones_line",
  "type": "tab",
  "meta": {
    "title": "G chord tones (R·3·5) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **At BPM 70, one clean note at a time,** say each name out loud ("root–third–fifth–root"). Burn the sound of the green-highlighted **3rd (B)** into your ear as the chord's expression. Repeat 4×.

**Example 2 — G comping rhythm skeleton.** Now an actual accompaniment rhythm. On each marked note, **strum the whole G chord,** and make the groove with the palm-muted (P.M.) ghost after the eighth rest. Read the beat from the note durations on the staff.

```json
{
  "id": "m1.w1.d1.g_comp_rhythm",
  "type": "tab",
  "meta": {
    "title": "G comping rhythm skeleton — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **Repeat 4× at BPM 75.** Feel it as "chunk — (rest) — tuck — chunk — (rest)," choking the third palm-muted hit slightly to give the groove its breath. Once it's comfortable, move just the root to the 5th string (C, etc.) and apply the same rhythm.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret G major (E-form) at the 3rd fret and ring out all six strings one at a time. Check that each rings <mark>cleanly without choking</mark> — especially that the index barre is pressing. If a string is dead, just tilt your finger angle up slightly.

**10–20 min · Brain training (today's target = the 3rd, B)**
Fret **Example 1** without a metronome, saying "root–third–fifth–root" aloud. Then isolate just the **3rd (B)** on the 3rd string and fret it repeatedly. This note is <mark>the switch for the whole week</mark>. You pass once you can land on the 3rd with your eyes closed.

**20–40 min · Real comping (Example 2 / 70–80 BPM)**
Put on a "G major backing track" and **repeat Example 2's comping rhythm 4× at BPM 75.** Keep naming "root–third–fifth" in your head, staying aware of what's ringing. Once the rhythm settles, move just the root to the 5th string and apply the same pattern. Don't change chords yet — today is only the feel that "<mark>this sound is made of R·3·5</mark>," plus the groove.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your last comp and play it back. Check just one thing: **<mark>are all six strings alive</mark>,** or did one die and choke? If one's dead, just fix that finger's angle tomorrow.

**Done when:** you can ring G major (E-form) cleanly on all six strings, fret and name R·3·5 with your eyes closed, and repeat Example 2's comping rhythm steadily at BPM 75.

## ④ Tips / common mistakes

- **Sliding back into "shape."** When the urge to memorize "just the G shape" creeps up, deliberately fret R·3·5 while naming them aloud. Adaptation begins the moment you attach names.
- **Letting the 3rd slip by.** The 3rd (B) is this week's lead. Give it a touch more attention each time you fret it, and tomorrow's "3 → b3" minor comes for free.
- **A weak index barre.** The E-form presses several strings with one index finger. If the 1st/2nd strings die, roll the index onto its side rather than its tip.
- **A flat comp.** In Example 2, if you don't honor the palm-muted ghost and the rests, it mushes into "chunk-chunk-chunk-chunk." Remember a rest isn't empty — it's the groove's breath.
