---
title: "Combining It All: An 8-Bar Improv with Major 6th Color + Chord 3rd Landings"
dayKey: "m3.w9.d4"
estMinutes: 50
i18nKey: "lesson.m3.w9.d4"
lang: en
---

# Day 4 — Bringing It All Together: An 8-Bar Solo Weaving F# Color and 3rd Landings Over Am7–D7

## ① Theory / Explanation

Here's why we're doing this today. Over the past three days, you've built every piece of the puzzle: F# (major 6th) color (Day 1), 3rd intervals and the color line (Day 2), 4-note sequences and per-chord 3rd landings (Day 3). Today, we assemble all these pieces into **<mark>one solo</mark>**. This is this week's graduation piece.

The stage is an **<mark>Am7–D7 vamp</mark>**, two bars each, eight bars total.

- Bars 1–2: Am7 → Bars 3–4: D7 → Bars 5–6: Am7 → Bars 7–8: D7

Today's solo only needs to follow two lines of grammar:

- **<mark>Land on C (the b3) during Am7 sections.</mark>** It's minor's 3rd, the "home" of this progression.
- **<mark>Land on F# (the 6th) during D7 sections.</mark>** It's D7's 3rd and Dorian's color note at the same time — this is where the sound bursts open bright.

And there's one new feeling we're adding today: **<mark>space and vibrato.</mark>** Don't try to cram all eight bars full of notes. When you arrive at a landing note, **rest for a moment**, and let the landing note **sing with vibrato**. Lining up scale notes nonstop is "practicing," not "soloing." Landing → space → next phrase — you need that breathing pattern for it to become music. (We'll dig into space and phrasing properly starting Week 11, but today, take an early taste.)

The 8 bars below aren't "the answer" — they're a **<mark>model</mark>**. Play through it as-is first, and really feel in your body: "oh, that's how bright an F# landing sounds," "that's how space opens up room to breathe." Then start reshaping it into your own line. That's the real goal this week.

## ② Visual Reference

First, here's the **<mark>landing map</mark>**. It only highlights the two targets you'll aim for across these 8 bars: **C (Am7's 3rd)** and **F# (D7's 3rd = the Dorian color)**. The root A is marked as an orientation point. Just get these two colors into your head before you start.

```json
{
  "id": "m3.w9.d4.landing_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Landing map - C for Am7, F#(color) for D7",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

Second, here's the **<mark>8-bar improv model</mark>**. The Am7 sections land on C, the D7 sections land on F#, each landing note gets vibrato, and there's space (a rest) at the top of bars 3 and 7. The 8 bars wrap up by settling long onto **F#**, Dorian's identity note.

```json
{
  "id": "m3.w9.d4.eight_bar_dorian_solo",
  "type": "tab",
  "meta": {
    "title": "8-bar A Dorian solo over Am7-D7 (F# color + 3rd targeting)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 5, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 6, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 85) — warming up the two landing notes**
With the metronome at 85, alternate between just the two targets on the landing map. C (string 3 fret 5) ↔ F# (string 2 fret 7), each with vibrato, in quarter notes. Say it out loud as you go: "Am7, C — D7, F-sharp." At the end of the day, these two notes are <mark>what your hand needs to remember</mark>.

```json
{
  "id": "m3.w9.d4.landing_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Landing map - C for Am7, F#(color) for D7",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

**10–20 min · Brain training (getting the 8-bar model under your fingers)**
Without the backing track yet, go through the 8-bar model slowly, bar by bar. Repeat any bar you get stuck on five times. Pay special attention to getting the **landing notes (with vibrato)** in bars 2, 4, 6, and 8, and the **space (rest)** at the top of bars 3 and 7, exactly right. That space shouldn't feel awkward, like an accidental stop — leave it empty confidently, like an **<mark>intentional breath</mark>**.

```json
{
  "id": "m3.w9.d4.eight_bar_dorian_solo",
  "type": "tab",
  "meta": {
    "title": "8-bar A Dorian solo over Am7-D7 (F# color + 3rd targeting)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 5, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 6, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

**20–40 min · Real-world improv (Am7-D7 vamp / 80–85 BPM)**
Put on an "Am7 D7 vamp backing track." First, play through the 8-bar model exactly as-is, **twice**, over the backing track. Then comes the real thing: drop the model and **improvise your own 8 bars**, following just two rules — **<mark>① land on C at the end of Am7, F# at the end of D7.</mark> ② leave at least one beat of space at the end of every phrase.** Fill the rest however you like, with 3rds or 4-note groups or anything else. Try something a little different each time through.

**40–50 min · Record & reflect (recommended)**
Record whichever of your improvised 8-bar takes came out best. Listen back and check three things: **① did you land on the right chord tone (C/F#) each time? <mark>② did the sound burst brighter on F# during D7</mark>? ③ did the space give you room to breathe (or was it packed tight with no rest at all)?** Slow playback to 0.75x to check whether your landing timing and vibrato cycle line up. Whatever one improvement you find here is your homework before heading into next week (W10, Mixolydian).

**Today's finish line:** Play through the 8-bar model start to finish over the backing track. Then, in your own **improvised 8 bars**, keep landing on each chord's 3rd (C/F#), add at least one space per phrase, and finish with a recording.

## ④ Tips / Common Mistakes

- **Missing the D7 landing and staying in minor mode the whole way.** If you play all 8 bars like it's just Am7 the whole time, D7's section — the Dorian highlight — dies. When D7 comes, **consciously steer toward F#**. That color shift is the heart of today's solo.
- **Filling every gap because space feels scary.** The clearest sign of a beginner is a "solo that can't rest." Don't erase the rests in bars 3 and 7. Emptiness is exactly what makes the next phrase come alive. Space is a skill, not laziness.
- **Cutting landing notes off abruptly.** Without vibrato, landings on C and F# sound like a "stop" rather than an "arrival." Shake steadily and widely from your wrist to make the landing note sing. When that one note sings, the whole 8 bars come alive.
- **Clinging to the model as "the answer."** The model is a stepping stone. Repeat it exactly forever, and your improv skills won't grow. Half model, half your own line — and shift that ratio more toward your own line every time through. That's the direction for these three months.
- **Being greedy with tempo.** If 85 feels like too much, drop to 78. Landing accuracy and the ease of your spaces matter more than speed. A solo that lands precisely on every chord, even slow, is a hundred times more musical than a fast, smudged run.
