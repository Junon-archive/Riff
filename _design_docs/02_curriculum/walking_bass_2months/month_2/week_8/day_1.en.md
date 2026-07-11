---
title: "Reading the graduation changes — an original ii-V-I + turnaround loop"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — Reading the graduation changes (ii-V-I + turnaround)

## ① 이론/설명

At last, week 8 — the final week of walking bass. Think back two months — back then, even when the chord changed, pressing a single **root** to hold the beat was the whole job. But now, every time the chord changes, you land on chord tones and bridge with approach notes to <mark>walk the changes</mark>. This track is your **bass jazz / harmony capstone**. This week gathers all the vocabulary you've collected into one place, completing a walk over an original progression and recording it on the last day — your **graduation**.

This week's progression goes like this. **Gm7 → C7 → Fmaj7**, a **ii-V-I** in the key of F. Gm7 (ii) opens the story, C7 (V) builds tension, and Fmaj7 (I) releases it. It's the most-used flow in jazz, so once this one cycle is in your hands you're walking the skeleton of countless tunes. Then a fourth-bar **C7** sounds once more, a <mark>turnaround</mark> that leads back to the Gm7 of bar one. So the four bars connect end to start and <mark>loop without stopping</mark>.

Today, before walking the line with any flourish, first get the **progression itself** into your hands and ears. Feeling where each chord's **root** sits on the fretboard, and how the four bars turn into one loop, is all of today. Chord tones and ornaments we'll layer on step by step from tomorrow. Today, press <mark>just the roots, evenly</mark> and draw the map of the progression in your head. Once that map is clear, laying chord tones and approach notes on top follows naturally.

First, look at where each chord's root sits on the fretboard.

```json
{
  "id": "m2.w8.d1.progression_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** Gm7's root **G** (4th string, fret 3), C7's root **C** (3rd string, fret 3), Fmaj7's root **F** (4th string, fret 1). The progression circles among these three spots.

```json
{
  "id": "m2.w8.d1.progression_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same spots as the 4-string. Back the root of the progression more heavily with the low B string.

## ② 시각 자료

Now place those roots one per bar, as **whole notes**, and see one loop of the progression with your eyes. **Four bars** is one cycle of ii-V-I + turnaround. <mark>The last bar connects to the first and circles back.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w8.d1.progression_walk_4",
  "type": "tab",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]}
  ]}
}
```

▶ **BPM 90, 4-string, swing quarters.** Bar 1 **Gm7(G)** → bar 2 **C7(C)** → bar 3 **Fmaj7(F)** → bar 4 **C7(C)** turnaround. Feel the skeleton of the progression with one root per bar.

```json
{
  "id": "m2.w8.d1.progression_walk_5",
  "type": "tab",
  "meta": { "title": "ii-V-I + turnaround roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Back the low end more with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk week 7's ornamented walk once at BPM 72 to wake up your hands and ears.

**10–20 min · Brain training**
With the example below, press each chord's root evenly in **quarter notes** to memorize the progression. <mark>Check that your hand finds the next root in advance the moment the chord changes.</mark>

```json
{
  "id": "m2.w8.d1.progression_pulse_4",
  "type": "tab",
  "meta": { "title": "ii-V-I roots, quarter pulse (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Split each bar's root into four beats. It's practice for memorizing where the progression turns, in your body.

```json
{
  "id": "m2.w8.d1.progression_pulse_5",
  "type": "tab",
  "meta": { "title": "ii-V-I roots, quarter pulse (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and spots as the 4-string.

**20–40 min · Real play**
Repeat the **whole-note progression** above at BPM 90 and watch that <mark>the root doesn't wobble</mark> when the bar changes. Learn it on 4-string, then check on 5-string too.

**40–50 min · Review / record**
Today is a day for memorizing the progression, so record four bars of roots only, two or three times around without stopping. If the loop feels natural to your ear, today is done.

**Done when:** you can press the roots of the Gm7-C7-Fmaj7-C7 progression on both 4- and 5-string, cycling without a hitch, and you hear the four bars turn into one loop. — Today's deliverable: your first progression-loop root recording.

## ④ 팁 / 흔한 실수

Keep today's progression map in your eye. Once you can see at a glance where the three roots **G·C·F** sit, laying chord tones on top tomorrow gets much easier.

```json
{
  "id": "m2.w8.d1.progression_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround loop map (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The three roots of ii-V-I + turnaround. Gm7(G)·C7(C)·Fmaj7(F), and in bar 4 the C7 turns back to Gm7.

```json
{
  "id": "m2.w8.d1.progression_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I + turnaround loop map (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same spots as the 4-string. Back the low end more with the low B string.

- **You change the root too hastily.** Rushing just before the chord changes pushes the beat. Step out the fourth beat of the bar fully, and land evenly on the new root at beat 1 of the next bar.
- **You forget the loop and stop.** The bar-4 C7 isn't the end but a bridge back to bar one. Don't stop at the last bar; carry straight on to the Gm7 of bar 1 to complete a full turn.

Two months ago you had no idea where to press when the chord changed; now one loop of the progression is plain to your eye. Tomorrow you'll lay chord tones and approach notes on top and walk it as a real walk.
