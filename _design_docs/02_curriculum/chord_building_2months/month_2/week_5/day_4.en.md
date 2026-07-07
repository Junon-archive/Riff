---
title: "High-register integration — comping a bright progression, thin and pretty"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — Slide the D-shape sideways to make a bright vibe

## ① Theory

The week's finish line. The 4th-string-root D-shape is **one shape,** so sliding it sideways makes any chord (the same "movable pattern" idea as Week 3). Today you comp a bright high-register progression with it.

The simplest example: a **G → A** vibe. Slide the same D-shape **up two frets** and G (root at fret 5) becomes A (root at fret 7). Same hand shape, moved whole. Both chords have the 3rd (the bright note) on top, so going back and forth feels crisp and pop. When one hand shape pops out a mood like a pop-song intro, you're reaching the moment where "comping turns into music." Last week's shells were clean inside a band; this week's D-shape sparkles even played alone — a different stage entirely.

Week recap: the root went up to the 4th string, opening the high register, and you gained the new R·3·5 layout plus the idea of the **top note.** Next week (6), you lay a **9th tension** onto this high register to make the color shimmer.

## ② Visuals

**G (D-shape, root at fret 5).** Top note = 3rd (B, green).

```json
{
  "id": "m2.w5.d4.g_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**A (D-shape, root at fret 7).** The same shape two frets up. Top note = 3rd (C#, green).

```json
{
  "id": "m2.w5.d4.a_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "A major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A" },
  "fretboard": { "startFret": 6, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 9, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**Example 1 — top-note move (G → A).** Just the 1st-string top note: fret 7 (G's 3rd, B) → fret 9 (A's 3rd, C#). See the top note climb with the chord.

```json
{
  "id": "m2.w5.d4.top_move_line",
  "type": "tab",
  "meta": { "title": "Top note move G to A — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 74.** 1st string 7 → 9. The top note climbs two frets from G's 3rd (B) to A's 3rd (C#). Repeat 4×.

**Example 2 — G → A high-register vibe comp.** Bar 1 G, bar 2 A. Same four thin strings, moved whole two frets up.

```json
{
  "id": "m2.w5.d4.g_a_vamp",
  "type": "tab",
  "meta": { "title": "G-A high-register vamp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A", "tempoBpm": 82, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 9, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 82, repeat 4×.** G ↔ A, thin and bright. One hand shape, only two frets up and down. That crisp high-register comp of pop and city-pop.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play G (D-shape) → A (D-shape) two frets up and down. Feel it's one hand shape; only 4·3·2·1 clean, 6th & 5th muted.

**10–20 min · Brain training (today's target = top-note move)**
With **Example 1,** confirm the top note climbs 7→9 from G to A. You pass when you can fret both chords' top notes with eyes closed.

**20–40 min · Real comping (Example 2 vibe / 78–88 BPM)**
**Repeat Example 2's G-A vibe at BPM 82 4×.** Once comfortable, add D (fret 12) to extend like G-A-D, or lay it over another bright backing freely. Enjoy the high-register crispness.

**40–50 min · Record & reflect + week recap (recommended)**
Record two laps of the vibe. Check: do low strings stay silent / are changes smooth / is the top note clear? Then sum up for yourself: "What changed once the root went up to the 4th string?"

**Done when:** you can slide the D-shape sideways to comp the G-A high-register vibe smoothly. (Week 5 complete!)

## ④ Tips / common mistakes

- **Hunting a new shape per chord.** The D-shape is one shape. Put the root at the fret you want and it's that chord. Just slide sideways.
- **Slacking on the low strings.** As you slide, the mute loosens. Firmly mute the 6th & 5th on every chord.
- **A heavy vibe.** The high register should be light and crisp. Don't scrape hard — let the top note sing.
- **Missing the top note.** This preps next week's tensions and the following week's top-note melody. Always be aware of the topmost note.
