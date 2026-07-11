---
title: "Finishing the Full Solo and Your First Recording — Stitching 8 Bars into One"
dayKey: "m3.w12.d3"
estMinutes: 50
i18nKey: "lesson.m3.w12.d3"
lang: en
---

# Day 3 — Pieces into One Song: Finishing the 8-Bar Original Solo & First Recording

## ① Theory / Explanation

Here's why we're doing this today. All the ingredients are gathered now — the landing map (Day 1), the motif and space (Day 2). Today, you stitch them together to finish **<mark>one 8-bar solo that flows from start to finish.</mark>** And for the first time, you'll **<mark>record it whole.</mark>**

There are exactly three principles to remember when stitching a song together.

1. **<mark>Draw an arc.</mark>** Don't run flat through all 8 bars. Start quiet (motif + big rest), hit a **peak (climax)** at the bar-5 A7 switch, then come back down, landing on the root at the end. Think of it as drawing a mountain.
2. **<mark>Bar 5 is the twist point.</mark>** Bars 1-4 are Dorian (C, F#). At bar 5's A7, switch to C#, and layer in a blue-note bend (C→C#) to push the song upward. This one bar is the "chorus" of your solo.
3. **<mark>Always end with a landing.</mark>** End the 8th bar by singing a long, vibrato-filled root A. End without landing, and it sounds like "wait, is that it?" Put a clear period at the end.

The tab below is the **finished version.** Memorize it as-is, or swap in your own Day 2 variations — either works. What matters is the structure: **<mark>motif → Dorian response → development → A7 climax (bend) → resolution → root landing.</mark>** This is the crystallization of your three months.

## ② Visual Reference

First, the **<mark>completed 8-bar original solo.</mark>** At the end of each bar, that chord's 3rd lands, there's a blue-note bend climax in bar 5, and a root vibrato finish in bar 8. Notice how the rests (`rest`) breathe throughout, too.

```json
{
  "id": "m3.w12.d3.original_solo_full",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo - full 8 bars (Am7 D7 Am7 D7 | A7 D7 Am7 Am7)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 7, "duration": "eighth", "technique": "none", "label": "2", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 4, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 5, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]},
      { "measure": 6, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

Second, the **<mark>landing pillar roadmap.</mark>** Just the four landing pillars that run through the 8 bars, pulled out. C (Dorian ♭3) → F# (major 6th color) → C# (Mixolydian major 3rd, the climax) → A (root, the finish). Think of your solo as moving between these four pillars and you'll never lose your way.

```json
{
  "id": "m3.w12.d3.solo_landing_roadmap",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Solo landing pillars roadmap (b3 -> 6 -> 3 -> R)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 92) — four-note sequence + bend warm-up**
Run one lap of the four-note sequence at metronome 92, then warm up the bar-5 bend (pushing C at 1st string 8th fret up a half step to the C# pitch) 5 times. Bend while <mark>checking by ear that the pitch rises exactly to C#</mark>. If the climax wobbles, the whole song wobbles.

**10–20 min · Brain training (assembling bar by bar)**
Learn the finished tab **<mark>two bars at a time.</mark>** Bars 1-2 → 3-4 → 5-6 → 7-8. Smooth out each chunk, then stitch them together. Especially drill the seam where bar 4's ending C crosses into bar 5's C# (the one-fret switch) 5 times to burn it into your hands.

```json
{
  "id": "m3.w12.d3.original_solo_full",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo - full 8 bars (Am7 D7 Am7 D7 | A7 D7 Am7 Am7)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 7, "duration": "eighth", "technique": "none", "label": "2", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 4, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 5, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]},
      { "measure": 6, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

**20–40 min · Real finishing run (Am7-D7-A7 backing / 88–92 BPM)**
Aim to run all 8 bars over the backing track **<mark>without stopping.</mark>** Start at 88, bump to 92 once it's smooth. Stay conscious of the arc: quiet with lots of space up front, push hard at bar 5, land on the root at bar 8 and let your breath settle down. Run it at least 5 times to burn the flow into your body.

**40–50 min · First recording (recommended → today it's strongly recommended)**
With whatever recording tool you've got (voice memo, laptop recorder, anything), record the finished solo over the backing track **<mark>as one complete take.</mark>** Today's goal isn't perfection — <mark>it's "making it to the end"</mark>. This first recording becomes tomorrow's raw material for self-feedback. Listen back and just note your first impression: "which part did I like best, and where did I wobble?"

**Today's finish line:** Run the 8-bar solo over the backing track without stopping, once, and record that take whole, one time.

### Self-feedback checklist (today's focus: finishing and flow)
- [ ] **3rd-landing accuracy** — arrived at all four landing pillars (C·F#·C#·A) right on the beat in each bar.
- [ ] **Color tone use** — F# (major 6th), G (♭7), and the blue-note C came through as the song's color.
- [ ] **Vibrato stability** — the long landing notes in bars 2, 6, and 8 had steady vibrato.
- [ ] **Rhythm timing** — the bend climax (bar 5) and the final landing (bar 8) stayed locked to the beat.

## ④ Tips / Common Mistakes

- **Finishing flat, with no arc.** Just playing all 8 bars isn't the goal. Draw a mountain of dynamics. Play the opening deliberately soft so the bar-5 climax can really land.
- **Bend pitch coming up short.** If the bar-5 bend doesn't reach all the way to C#, the climax feels half-baked. Fret the target note first (1st string, 9th fret, C#) to get it in your ear, then bend precisely up to that exact pitch.
- **Letting the ending trail off.** Sing the bar-8 root A out proudly with vibrato all the way to the end. A strong final note is what makes it sound like "this person finished a song."
- **Expecting perfection on the first take.** Today's recording is a record of finishing. Even if you stumble, keep going to the end and save it. One imperfect complete take is precious raw material for tomorrow's operating table.
