---
title: "The 12-bar blues form — going around once"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — Cycle the 12-bar form, quick change and all

## ① Theory

Today you finally go around the stage of the blues, the **12-bar form**, once. A 12-bar blues is <mark>a playground map where three chords turn at fixed spots</mark>. Memorize the spots and you can follow any blues. The map of A blues looks like this.

```
| A7 | D7 | A7 | A7 |
| D7 | D7 | A7 | A7 |
| E7 | D7 | A7 | E7 |
```

One line is four bars, and three lines make **12 bars**. Bars 1–4 are around home (A7), bars 5–8 visit the IV (D7), and bars 9–12 hit their most tense on the V (E7) and come back home. These last four bars are called the **turnaround**.

Today's real point is the **quick change**. <mark>After bar 1's A7, you pop over to D7 once in bar 2.</mark> Without it, bars 1–4 would be four bars of A7, but adding the quick change gives a much more blues-like flavor. Just remember that only bar 2 changes to **D7**.

Let's gather the root spots of the three chords onto one board.

```json
{
  "id": "m1.w2.d3.roots_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots of A blues — A, D, E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **6th = E, 5th = A, 4th = D.** The three open strings are the roots of E7, A7, and D7 respectively.

## ② Visuals

Now let's go around the 12 bars once with roots only. Pressing each bar's root as a whole note puts the map in your hands. The **quick change** (bar 2 D7) is right there too.

```json
{
  "id": "m1.w2.d3.twelve_bar_map",
  "type": "tab",
  "meta": { "title": "12-bar blues in A — root map (quick change)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 2, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 3, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 4, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 5, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 6, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 7, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 8, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 9, "notes": [ { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "E7" } ]},
    { "measure": 10, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 11, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 12, "notes": [ { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "E7" } ]}
  ]}
}
```
▶ **One root per bar, BPM 80.** Follow the chord symbols with your eyes and press the root string (5th, 4th, 6th) precisely. <mark>E7 appears for the first time in bar 9.</mark>

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 65. Loosen your hand moving only the three roots across the 5 → 4 → 6 strings. Watch that <mark>you don't miss the root when you skip strings</mark>.

Practice just the hardest part, the **turnaround** (bars 9–12), on its own. It's E7 → D7 → A7 → E7.

```json
{
  "id": "m1.w2.d3.turnaround",
  "type": "tab",
  "meta": { "title": "Turnaround bars 9-12 — E7 D7 A7 E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 12, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 80.** Bar 9 E7 → bar 10 D7 → bar 11 A7 → bar 12 E7. One downstroke per bar.

**10–20 min · Brain training (today's target = the quick change)**
Memorize in advance that after bar 1's A7, **bar 2 is D7**. Count "A-D-A-A" out loud.

**20–40 min · Real 12-bar cycling (BPM 80)**
Go around the 12 bars with roots only, <mark>without a break</mark>. Watch, counting with your foot, that <mark>you don't lose the bar count</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Record one lap of the 12 bars: <mark>did the quick change and the turnaround land in their places</mark>.

**Today's completion criteria:** You can cycle the 12-bar form, including the quick change, once around with roots only and without a break.

## ④ Tips / Common mistakes

These are the spots that trip you up most when going around the 12 bars.

```json
{
  "id": "m1.w2.d3.quick_change",
  "type": "fretboard_diagram",
  "meta": { "title": "Quick change — bar 2 is D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 1, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **Bar 2 is D7, not A7.** The most common mistake is skipping the quick change and playing four bars of A7.

- **You lose the bar count.** Count 4 beats with your foot and count the bars. Every four bars, one line ends.
- **You miss the bar 9 E7.** The V comes just once, first appearing in bar 9. Get the 6th-string root ready ahead.
- **You can't get back at bar 11.** The end of the turnaround should return to A7 to feel natural.
- **You rush the tempo.** For the 12 bars, one lap matters even if it's slow. Lowering the BPM is fine.
