---
title: "Putting It Together: Targeting the 3rd for Each Chord in an A7-D7 Blues + Connecting the Neck with 3rd Intervals"
dayKey: "m3.w10.d4"
estMinutes: 50
i18nKey: "lesson.m3.w10.d4"
lang: en
---

# Day 4 — When the Chord Changes, the 3rd Changes Too: C# for A7, F# for D7

## ① Theory / Explanation

Here's why we're doing this today: all week, you've practiced landing on C# (major 3rd) over a single A7 chord. But real blues actually **moves.** The most basic move is the **<mark>A7 → D7</mark>** back-and-forth. This is exactly where plateaued players get stuck — the chord changes to D7, but they keep chasing C# out of A Mixolydian habit. The problem is, C# is the **major 7th** over D7, and it floats. Remember that principle from Month 2? **<mark>When the chord changes, the target (3rd) changes too.</mark>**

Let's do the math.
- **<mark>A7's major 3rd = C#</mark>** (A·**C#**·E·G)
- **<mark>D7's major 3rd = F#</mark>** (D·**F#**·A·C)

So during the A7 section, you land on C#, and the instant you shift into the D7 section, you switch your landing spot to **F#.** Get just this one thing right, and your solo starts "singing along with the chords." Good news: **A Mixolydian already contains both C# and F#** (A B C# D E F# G). You don't need to change scales at all — just move **<mark>the landing note</mark>** along with the chord. A7 means C#, D7 means F#. Your hand shape stays the same; only your aim shifts.

There's a hidden bonus here too. Our blue note **C (♭3)** is a crooked blue note over A7, but over **<mark>D7, it becomes D7's ♭7 (C).</mark>** In other words, that same C you were casually brushing past as a blue note during the A7 section suddenly changes status into a **legitimate color tone (♭7)** once you're over D7. Same note, different role. Knowing this makes your solo sound a lot smarter.

Finally, let's add **3rd interval** training too. If the 4-note sequence was "clumps of four notes," the 3rd interval is a pattern that "skips one note and climbs up in pairs" (A-C#, B-D, C#-E ...). Once this gets into your hands, the scale stops sounding like a flat staircase and starts sounding like **harmony,** instantly making your improv sound more sophisticated. Today, we'll sweep across the neck using this 3rd interval to connect both forms.

Today's goal: over the A7↔D7 backing, land on the 3rd (C#/F#) for each chord, and sing the scale like harmony using the 3rd interval pattern. This is the wrap-up for the whole week.

## ② Visual Reference

First, a **<mark>dominant 3rd target map.</mark>** A7's 3rd, C# (green), and D7's 3rd, F# (green), are scattered across both forms. Scope out ahead of time where the "nearest C# or F#" is whenever the chord changes.

```json
{
  "id": "m3.w10.d4.dominant_thirds_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Dominant 3rd targets: A7-3(C#) & D7-3(F#) across positions",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 4, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 3, "fret": 11, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true }
    ]
  }
}
```

Second, today's main event, the **<mark>A7 → D7 target lick.</mark>** Bar 1: over A7, hang tension with ♭7 G → half-step bend the blue note C → land on **C# (A7's 3rd).** Bar 2 moves into D7, where that same **C now becomes D7's ♭7**, coloring the sound before landing on **F# (D7's 3rd).** Same scale — the only thing that changes is your landing spot, from C# to F#. That's the whole point.

```json
{
  "id": "m3.w10.d4.a7_d7_target_lick",
  "type": "tab",
  "meta": {
    "title": "A7->D7 change: target A7-3(C#) then D7-3(F#), b7 & blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "role": "target", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D7-R(D)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "D7-b7(C)", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "9(E)", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true },
        { "string": 4, "fret": 4, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

Third, the **<mark>3rd interval run.</mark>** Climb through Position 1 pairing up notes of A Mixolydian in 3rds, and finish landing on the major 3rd C#. Hearing the scale sound like harmony is the flavor of a 3rd interval. Two bars, all eighth notes.

```json
{
  "id": "m3.w10.d4.thirds_interval_run",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian diatonic 3rds (ascending, land on major 3rd C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 90) — 3rd interval run**
Ascend through the 3rd interval run above at 90. Start at 80 if you need to. The point is to <mark>make each pair of two notes sound like a "unit"</mark>. Once it's ingrained, try improvising the same 3rd pattern in Position 2 (frets 7-11) as well. Keep staying color-aware as you pass C# and G.

```json
{
  "id": "m3.w10.d4.thirds_interval_run",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian diatonic 3rds (ascending, land on major 3rd C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 4, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (C#↔F# switching)**
Metronome off. Play a game with the first map: say "A7!" and fret the nearest **C#** (3rd string 6th fret or 1st string 9th fret); say "D7!" and fret the nearest **F#** (4th string 4th fret, 2nd string 7th fret, 3rd string 11th fret). Call out "A7-D7-A7-D7" to yourself and alternate your hand. Pass once <mark>your hand goes to the right 3rd within 2 seconds</mark>. This is the time to build a chord-change reflex.

```json
{
  "id": "m3.w10.d4.dominant_thirds_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Dominant 3rd targets: A7-3(C#) & D7-3(F#) across positions",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "label": "A7-3(C#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 4, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 3, "fret": 11, "label": "D7-3(F#)", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true }
    ]
  }
}
```

**20–40 min · Real-world feel (A7-D7 blues backing / 80–90 BPM)**
Put on an "A7 D7 blues backing track slow" (a slow 12-bar blues works great too). Mission: **<mark>land on that chord's 3rd every time the chord changes</mark> — C# for A7, F# for D7.** Play freely in A Mixolydian for the rest. If you've got room, try dropping in today's full A7→D7 lick, and cross between both forms with slides to use both the low and high registers. Enjoy hearing the blue note C transform into D7's ♭7 with your own ears too.

```json
{
  "id": "m3.w10.d4.a7_d7_target_lick",
  "type": "tab",
  "meta": {
    "title": "A7->D7 change: target A7-3(C#) then D7-3(F#), b7 & blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (A7-D7)",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "role": "target", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D7-R(D)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "D7-b7(C)", "role": "color", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "9(E)", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true },
        { "string": 4, "fret": 4, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended, week wrap-up)**
Record one chorus (12 bars, or 30-40 seconds) with any recorder. Three checks: (1) <mark>did you catch the 3rd (C#→F#) in time when the chord changed</mark>, (2) did you use both forms, or get stuck in one box, and (3) did your phrase endings land firmly on the target note instead of floating awkwardly? Compare it with the recording from the first day of this week and you'll be able to hear your growth.

**Today's completion criteria:** Pass the 3rd interval run at 90 BPM. React within 2 seconds when switching C#↔F#. Land on the 3rd for each chord at least 8 times over the A7-D7 backing, using both forms.

## ④ Tips / Common Mistakes

- **Still chasing only C# over D7.** This is the week's biggest trap. Once the chord changes to D7, C# becomes an unresolved major 7th. Be sure to switch your aim to **F#.** Burn "chord change = 3rd change" into your body.
- **Landing timing is late.** If the chord has already changed to D7 but you don't fret F# until a beat later, it sounds slightly off. Anticipate the chord change point ahead of time, and make the 3rd ring out **right on the beat** it changes. If it's tough, drop to BPM 70 and nail the timing first.
- **Getting stuck in one form.** When you get nervous, you tend to run back to the comfortable Position 1. Today is the wrap-up, so deliberately use both forms. Build at least one phrase that starts up top and slides its way back down.
- **The temptation to fill every note.** For a 3rd landing to really land, it needs **a little space** before it. Fill every gap without a breath, and the 3rd gets buried. Think of this as a preview of "space and phrasing," coming next week (W11), and leave a little breath before your target note today too.
