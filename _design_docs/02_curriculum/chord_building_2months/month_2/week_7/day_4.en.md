---
title: "Voice-leading integration — make the top note sing, like a pro"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — Comp the progression as a song, holding the melody

## ① Theory

The week's finish line. Comp the C-Am-F-G progression **holding the top-note melody (G-A-A-G)** with three-note voicings, like a pro — adding the feel of Week 5 (top note) + Week 6 (tensions).

- **The top is the song.** Across the progression, the topmost note flows G-A-A-G.
- **Below is support.** Keep common tones planted, move minimally.
- **Color if you want (the 9th).** For example, add a 9th (D) to C for a shimmer. Skeleton (melody + chord) stays; only color is added — exactly Week 6.

Month recap: you moved the root up to the 4th string to open the high register (Week 5), added color with the 9th (Week 6), and now connected the top note into a melody (Week 7). Next week (8), you mix it all to **record your own comping.** Getting here means you now use chords not as "memorized shapes" but as "tools that support a melody." Compared to two months ago — when your hand ran up and down the neck just to change one chord — you've become an entirely different player.

## ② Visuals

**F — top = 3 (A).** Its top (A) matches Am, so they connect easily. Green is the top.

```json
{
  "id": "m2.w7.d4.f_top_a",
  "type": "fretboard_diagram",
  "meta": { "title": "F triad — top note A (3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "F" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 5, "finger": 1, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**G — top = R (G).** The top steps down one note from A to G, closing the progression.

```json
{
  "id": "m2.w7.d4.g_top_r",
  "type": "fretboard_diagram",
  "meta": { "title": "G triad — top note G (R)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — top-note melody (G-A-A-G).** Just the progression's song line. This is the tune to hold today.

```json
{
  "id": "m2.w7.d4.top_line",
  "type": "tab",
  "meta": { "title": "Top-note line (G-A-A-G) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 3, "duration": "quarter", "label": "5(G)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "3(A)", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "R(G)", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 1st string 3-5-5-3. Get this melody into hand and ear first. Repeat 4×.

**Example 2 — C-Am-F-G triad comp (holding the top).** Roll each chord low → middle → top, so the top G-A-A-G sings.

```json
{
  "id": "m2.w7.d4.full_triad_comp",
  "type": "tab",
  "meta": { "title": "C-Am-F-G triad comp (top line) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "half", "label": "R", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80, repeat 4×.** Roll the three notes from the bottom, but let the top (G-A-A-G) sing all the way. Hand in one region (frets 3–6). Once comfortable, add a 9th (D) to C for a splash of color.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play **Example 1's** top melody (G-A-A-G) on the 1st string. Then the four spots C-Am-F-G in order, confirming the top connects into that melody.

**10–20 min · Brain training (today's target = holding the melody)**
Confirm the top is G·A·A·G per chord, and map where the common tones stay. Cycle the progression eyes-closed, making the top sing.

**20–40 min · Real comping (Example 2 / 76–86 BPM)**
**Repeat Example 2 at BPM 80 4×.** Lay it over a backing like a real song. Focus on the top-note melody singing clearly. If you have room, add a 9th to a chord for color.

**40–50 min · Record & reflect + week recap (recommended)**
Record two laps. Check: did the top melody connect smoothly / did the top not cut off at changes / did the hand stay in one region.

**Done when:** you can comp C-Am-F-G like a pro with three-note voicings, holding the top-note melody (G-A-A-G). (Week 7 complete!)

## ④ Tips / common mistakes

- **The top cutting off mid-progression.** If you lose the top note at a change, the melody vanishes. Keep the top as connected as possible.
- **Changing in blocks.** Still the amateur trap. Keep the sense of "choosing" and connecting the top.
- **Chasing color and losing the melody.** The 9th is optional. Today's star is the top-note melody.
- **Skipping the recap.** Spend ten minutes on how Weeks 5·6·7 merged into one. It's the material for next week's recording challenge.
