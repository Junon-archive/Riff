---
title: "Adding ornaments + rehearsal — ghost and eighth fill breathe into the walk, loop without stopping"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — Adding ornaments + rehearsal (full run-through)

## ① 이론/설명

Yesterday you walked over the changes with chord tones and approach notes. Today you lay week 7's vocabulary — a **ghost** ("chka") and an **eighth fill** — onto that four-bar walk, gently, to breathe into the straight step. And today's real goal is the **rehearsal** — turning the four bars <mark>around for as many loops as you like</mark> without stopping at the end. Ornaments make the line sing; the loop keeps the line alive.

Lay ornaments only where they're needed. Behind beat 2 of bar 1 Gm7 (b3, Bb), slip in a **ghost** to make an in-between step, and behind beat 2 of bar 3 Fmaj7 (3rd, A) breathe with the same **ghost**. The rest of the beats stay exactly as yesterday's chord-tone / approach-note skeleton. <mark>The quarter-note skeleton stays firm, and only the ghost, like an in-between step,</mark> seeps between them. One per two bars is plenty — cram ornaments onto every beat and the step turns chatty.

The heart of today's practice is the **full run-through**. When the bar-4 C7 turnaround ends, don't stop; carry straight on to bar 1 Gm7 so that <mark>one loop flows into the next</mark>. Even if you slip in the middle, moving on to the next bar without stopping is the point of a rehearsal. With tomorrow's graduation recording ahead, today get the <mark>non-stop full run-through</mark> into your hands.

First, look at where you'll place today's ghost, using the Gm7 bar as an example, on the fretboard.

```json
{
  "id": "m2.w8.d3.ornament_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament spot over Gm7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4-string.** The map of bar 1 Gm7. Onto the skeleton **R(G)·b3(Bb)·5(D)** we add the ghost spot behind beat 2 (open 3rd string, x) and the approach note **B**.

```json
{
  "id": "m2.w8.d3.ornament_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament spot over Gm7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same spots as the 4-string. Back the low end more with the low B string.

## ② 시각 자료

Now walk the **ornamented walk** — the ghost laid over the four-bar walk. The ghost enters as an in-between step only behind beat 2 of bars 1 and 3; the rest is exactly as yesterday. <mark>The skeleton stays firm and even, and between it the in-between step breathes.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w8.d3.ornamented_walk_4",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string, swing quarters.** Behind beat 2 of bars 1 and 3, a **ghost ("chka")** enters as an eighth. The quarter-note skeleton stays as is, and only the ghost breathes in like an in-between step.

```json
{
  "id": "m2.w8.d3.ornamented_walk_5",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Back the low end more with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's four-bar walk once at BPM 72 to bring the chord-tone skeleton back into your hands.

**10–20 min · Brain training**
Press the ornamented walk at a slow swing **BPM 60** and check by ear that <mark>the ghost never pushes the beat-2 downbeat aside</mark>.

```json
{
  "id": "m2.w8.d3.ornamented_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The ornamented walk, slowly. Keeping the skeleton, carve into your hands the feel of slipping "chka" behind beat 2 of bars 1 and 3.

```json
{
  "id": "m2.w8.d3.ornamented_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Ornamented walk on the changes, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "eighth", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and spots as the 4-string.

**20–40 min · Real play (rehearsal)**
Turn the ornamented walk as a loop at BPM 85, **without stopping**. <mark>When bar 4 ends, carry straight on to bar 1</mark> and walk two or three loops as one flow. Learn it on 4-string, then check on 5-string too.

**40–50 min · Review / record**
Record a full run-through two or three loops around without stopping, and keep the take where the loop is smoothest. Keep both 4- and 5-string and today is done.

**Done when:** you can play a full run-through of the ornamented (ghost, eighth fill) four-bar walk, carrying straight from bar 4 into bar 1 without stopping, cycling on both 4- and 5-string. — Today's deliverable: your first full run-through of the ornamented walk.

## ④ 팁 / 흔한 실수

Keep in your eye the three roots that anchor today's looping rehearsal. Once the picture of turning the three spots **G·C·F** into one loop is in your hands, tomorrow's graduation recording gets much easier.

```json
{
  "id": "m2.w8.d3.loop_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Rehearsal loop anchors — roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The three anchors of the rehearsal loop. Passing through Gm7(G)·C7(C)·Fmaj7(F), the bar-4 C7 turns back to bar one.

```json
{
  "id": "m2.w8.d3.loop_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Rehearsal loop anchors — roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same spots as the 4-string. Back the low end more with the low B string.

- **You put in too many ornaments.** A rehearsal isn't a time to make the line flashy but to make the loop smooth. One ghost per two bars, and the skeleton first.
- **You stop and restart when you slip.** The point of a rehearsal is not perfection but finishing. Even if you miss a note, don't stop; move to the next bar and build the habit of never breaking the loop.

Two months ago you could barely press one bar; now you turn four bars without stopping. Tomorrow you'll record this loop as your graduation piece. Just one day left.
