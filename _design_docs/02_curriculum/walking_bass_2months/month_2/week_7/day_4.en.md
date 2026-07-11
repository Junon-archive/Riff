---
title: "Ornamented walk — breathe life into F7 with ghost and eighth fill (week 7 complete)"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — Ornamented walk (F7, ghost + eighth fill)

## ① 이론/설명

It's the final day of week 7. Gathering the feel of the three ornaments learned this week — **ghost**, **eighth-note fill**, and hammer-on — today we weave them into one bar of an **ornamented walk**. Over the F7 quarter-note skeleton we lay a ghost ("chka") and an eighth fill: this week's finished piece. Here everything learned this week — the ghost, the fill, and the approach note — gathers in this one bar: how the skeleton and the ornaments blend within a single measure. <mark>The straight step breathes with each little ornament.</mark>

The flow of the bar is this. Beat 1 **F** (root) → front of beat 2 A (third), then on the back "and" a **ghost ("chka")** → beat 3 C (fifth) → beat 4 **B** (an approach note into the next chord). The two eighths on beat 2 (A + ghost) breathe into the step like a fill, and the B on beat 4 builds a bridge into the next bar. <mark>The quarter-note skeleton stays as is; only the ornaments seep in between.</mark>

This bar circles over the single chord F7, so it loops on its own when you repeat it. What still matters is the order. **Skeleton first**, ghost and fill lightly on top. Today, get this one bar fully into your hands and close out week 7 with a recording. <mark>The walk of your two-month journey now starts to breathe.</mark>

First, look at today's skeleton tones and the ghost spot on the **fretboard**.

```json
{
  "id": "m2.w7.d4.ornament_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornamented walk map (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4-string.** Today's map: the skeleton — root **F**, third **A**, fifth **C** — plus the ghost spot (open 3rd string, x) and the approach note **B** (3rd string, fret 2).

```json
{
  "id": "m2.w7.d4.ornament_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornamented walk map (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can back the low end more with the low B string.

## ② 시각 자료

Now, this week's finished piece — one bar of an **ornamented walk**. Over the F7 quarters we lay the ghost and eighth fill on beat 2 and the approach note on beat 4. <mark>Three steps stay firm and even, and between them the in-between note breathes.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w7.d4.ornament_walk_4",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string, swing quarters.** Beat 1 **F** (root) → beat 2 **A** (third) + **ghost ("chka")** → beat 3 **C** (fifth) → beat 4 **B** (approach note). Slip the ghost in gently behind beat 2 to make an in-between step, and keep the quarter-note skeleton as is.

```json
{
  "id": "m2.w7.d4.ornament_walk_5",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can back the low end more with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's hammer-on walk once at BPM 72 to bring back the feel of laying ornaments over the quarter-note skeleton.

**10–20 min · Brain training**
Press the ornamented walk with the prep example below at a slow swing **BPM 60**. <mark>Check by ear that the beat-2 ghost never pushes the beat aside and the beat-4 B approaches clearly.</mark>

```json
{
  "id": "m2.w7.d4.ornament_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The ornamented walk, slowly. Keep the quarter-note skeleton, slip the "chka" behind beat 2, and bridge with the B on beat 4.

```json
{
  "id": "m2.w7.d4.ornament_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Walking with ghost + fill (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **ornamented walk** above at BPM 80. <mark>Watch that the quarter-note skeleton stays rock-steady and only the ghost breathes in like an in-between step.</mark> Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / graduation**
At last, recording time. Record one bar of the ornamented walk two or three times around without stopping, and keep the best take as your first ornamented walk. Keep both 4- and 5-string and week 7 is complete.

**Done when:** you can record the ornamented walk — ghost ("chka") and eighth fill laid over the F7 quarter-note walk — on both 4- and 5-string without shaking the quarter-note skeleton. — Weekly deliverable: your first ornamented walking bass recording. (Week 7 complete!)

## ④ 팁 / 흔한 실수

- **You try to cram every ornament in at once.** For today's one bar, one ghost and an eighth fill on beat 2 are plenty. Stuffing all three ornaments onto every beat makes the step chatty. The quarter-note skeleton first, ornaments only as much as needed.
- **You rush the beat-4 B.** The B on beat 4 is an approach note into the next chord, so you must step it firmly on its beat for it to lead naturally into the next bar. Don't pull the B early in your excitement; close the end of the bar calmly.

Keep today's ornamented walk, the map of that one bar, in your eye. Over the skeleton F·A·C, the ghost and approach note seep in — the picture of a straight step that breathes.

```json
{
  "id": "m2.w7.d4.ornament_summary_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Week 7 ornamented walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4-string.** The week 7 completion map. Over the skeleton **F·A·C**, the ghost ("chka") and approach note **B** blend in so the line breathes.

```json
{
  "id": "m2.w7.d4.ornament_summary_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Week 7 ornamented walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can back the low end more with the low B string.

- **Give yourself big credit for week 7.** You added ghost ("chka"), eighth fill, and hammer-on to a walk that used to be only straight quarters, and made the line breathe. Now your walk is a singing bass, with an in-between step alive in every stride. What a wonderful two-month journey you've walked.
