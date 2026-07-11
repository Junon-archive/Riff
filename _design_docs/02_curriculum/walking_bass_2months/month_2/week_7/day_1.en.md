---
title: "Slipping in a ghost note — a small in-between step to make the line breathe"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — Slipping in a ghost note ("chka")

## ① 이론/설명

Welcome to week 7. Until last week we got a **straight quarter-note walk** into our hands, stepping firmly over the chords. This week it's time to breathe **life** into that straight step. Today's ingredient is the **ghost note**, the little in-between step often called a "chka." <mark>This one pitchless, lightly scraped note breathes air into the line.</mark>

A ghost note is made with the **dead-note** technique. Your fretting hand touches the string but **doesn't press it down**, resting lightly so it never reaches the fret, and your plucking hand taps it. Instead of a pitch, you get only a "chka" attack. In the schema we write `technique: "dead_note"` and give it no note-name label. Like a drummer's hi-hat, this "chka" lightly fills the space between steps and adds fine grain to the rhythm. <mark>The ghost goes not on the beat but on a weak beat — especially the "and" between two beats.</mark>

What matters most is the order. **The quarter-note skeleton comes first.** If the skeleton wobbles, the ghost collapses too. So today we lay **just one** ghost over a steady quarter-note line. The step stays firm and even, and with one in-between note the groove <mark>starts to breathe.</mark>

First, look at the skeleton tones of today's **F7 arpeggio** — root F, third A, fifth C, ♭7 E♭ — on the fretboard.

```json
{
  "id": "m2.w7.d1.f7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 arpeggio skeleton — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Root **F** (4th string, fret 1), third **A** (4th string, fret 5), fifth **C** (3rd string, fret 3), ♭7 **Eb** (2nd string, fret 1). The ghost slips in between these skeleton tones.

```json
{
  "id": "m2.w7.d1.f7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 arpeggio skeleton — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can back a heavier F with the low B string.

## ② 시각 자료

Now, today's finished piece — one bar of a **ghost-note walk**. Walk the F7 arpeggio in quarter notes, then slip one ghost lightly onto the "and" behind beat 2. <mark>The step stays the same, yet one in-between note brings the groove alive.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w7.d1.ghost_walk_4",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string, swing quarters.** Beat 1 **F** (root) → front of beat 2 **A** (third) → back of beat 2 **ghost ("chka")** → beat 3 **C** (fifth) → beat 4 **Eb** (♭7). The ghost is a soft tap with no pitch; the rest stay firm quarters.

```json
{
  "id": "m2.w7.d1.ghost_walk_5",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can back a deeper low end with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk week 6's enclosure walk once at BPM 72 to bring back the feel of firm, even quarter notes.

**10–20 min · Brain training**
Press the ghost walk with the prep example below at a slow swing **BPM 60**. <mark>Check by ear that the ghost never pushes the beat aside and lands only on the "and."</mark>

```json
{
  "id": "m2.w7.d1.ghost_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The ghost walk, slowly. Keep the quarter-note skeleton and slip the "chka" gently behind beat 2.

```json
{
  "id": "m2.w7.d1.ghost_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **ghost walk** above at BPM 80. <mark>Watch that the quarter notes stay rock-steady and only the ghost slips in like an in-between step.</mark> Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / feedback**
Record one bar of the ghost walk two or three times around without stopping. Listen back and check whether the line breathes and whether the quarter-note skeleton stays steady.

**Done when:** you can add one ghost note ("chka") on a weak beat of the straight quarter-note F7 walk and walk it on both 4- and 5-string without shaking the quarter-note skeleton. — Today's result: a ghost walk.

## ④ 팁 / 흔한 실수

- **You hit the ghost too hard.** The "chka" is a pitchless in-between step. If it stands out more than the notes on the beat, the step just gets noisy. Take half the force out of your plucking hand and keep it quieter than the on-beat notes.
- **The ghost pushes the beat aside.** If the in-between step grows too big, the quarter-note skeleton wobbles. Skeleton first, ghost lightly between. If it gets confusing, drop the ghost and walk just the quarters, firm and even, first.

Keep today's in-between step, that one point, in your eye. Right next to root F, on the open 3rd string, one "chka" breathes air into the groove.

```json
{
  "id": "m2.w7.d1.ghost_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ghost spot next to root F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" }
  ]}
}
```

▶ **4-string.** Root **F** (4th string, fret 1) and the ghost spot (3rd string, x). It's the picture of laying one "chka" beside the on-beat F.

```json
{
  "id": "m2.w7.d1.ghost_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ghost spot next to root F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" }
  ]}
}
```

▶ **5-string.** Same position as the 4-string. Keep the low B string covered.

- **Give yourself credit today.** You added just one in-between step to the straight quarters, and the line came right alive. Tomorrow we grow this in-between step into a two-note eighth "fill."
