---
title: "4-Note Sequences + Landing on Chord 3rds: C for Am7, F# for D7"
dayKey: "m3.w9.d3"
estMinutes: 50
i18nKey: "lesson.m3.w9.d3"
lang: en
---

# Day 3 — Dorian's Magic Trick: D7's 3rd (F#) Is Also Dorian's Color Note

## ① Theory / Explanation

Here's why we're doing this today. So far, we've only been playing over a single Am7 chord. But the moment Dorian really shines is when the chord moves **Am7 → D7 → Am7**. Today we're introducing that progression, and along with it, I'm going to show you something that'll give you chills.

First, the 4-note sequence. Yesterday we swept through 3rds, so today it's **4-note groups**. You take the scale in groups of four and shift up one step at a time.

- A-B-C-D / B-C-D-E / **C-D-E-F#** / **D-E-F#-G** …

If 3rds are a "swinging leap," 4-note groups are a "rolling wave." Your fingers roll tightly through the whole scale, and starting from the third and fourth groups, **F# (the major 6th)** naturally rises up onto the surface of that wave. Today's warm-up rolls your hand through exactly this.

Now, the real heart of today. When the backing shifts from **Am7 → D7**, let's look at the 3rd of each chord:

- **Am7's 3rd = C** (out of A-C-E-G, C is the b3, the minor 3rd)
- **D7's 3rd = F#** (out of D-F#-A-C, it's F#)

See it? **D7's 3rd is exactly F#.** And F# is the very note we've been treasuring all week — **A Dorian's major 6th (the color note)**. In other words, the moment the chord changes to D7, if you simply **land on F#** — that's targeting D7's 3rd, and **at the same time** it's the moment Dorian's color explodes. Two birds meet in one note. That's the secret behind why Dorian sounds so "sophisticated" over a minor progression.

So here's today's grammar in a nutshell: **land on C (the b3) during the Am7 section, land on F# (the 6th = D7's 3rd) during the D7 section.** The chord changes, so the landing note changes — that same sense you learned with guide tones last week, now combined with modal color.

## ② Visual Reference

First, here's the **A Dorian 4-note sequence** (2 bars, eighth notes). It rolls up starting from the 6th string. In the third and fourth groups, **F# (the 6th, the color note)** rises up onto the wave (highlighted).

```json
{
  "id": "m3.w9.d3.four_note_sequence_dorian",
  "type": "tab",
  "meta": {
    "title": "A Dorian 4-note sequence (F# rises in groups 3-4)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
      ]}
    ]
  }
}
```

Second, here's the **Am7 vs. D7 target-3rds map**. Two kinds of highlights: **C (Am7's 3rd)** in green and **F# (D7's 3rd = the Dorian color)** in yellow. See with your own eyes how F# plays double duty. The roots A and D are marked too, for reference.

```json
{
  "id": "m3.w9.d3.am7_d7_target_thirds",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Target 3rds: Am7-b3(C) and D7-3(F#) which is the Dorian color",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 5, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 6, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

Third, here's a 4-bar line that burns "chord change = landing change" into your body. The two Am7 bars land on **C (the b3)**, the two D7 bars land on **F# (the 6th)**. Sing each landing note with vibrato.

```json
{
  "id": "m3.w9.d3.chord_change_targeting",
  "type": "tab",
  "meta": {
    "title": "Am7 lands on C(b3), D7 lands on F#(6) - target the changes",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80) — 4-note sequence**
With the metronome at 80, roll through the first 4-note sequence. Keep that tight, rolling feel in your fingers, and add just a touch of clarity when F# (string 5 fret 9) rises up onto the wave. Doing it both up and back (climb, then come back down the same pattern) really loosens your hand up.

```json
{
  "id": "m3.w9.d3.four_note_sequence_dorian",
  "type": "tab",
  "meta": {
    "title": "A Dorian 4-note sequence (F# rises in groups 3-4)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (mapping landing 3rds)**
Looking at the second map, alternate between fretting **Am7's C** (three spots) and **D7's F#** (two spots). Say it out loud as you go: "Am7 means C, D7 means F#." Finally, close your eyes: "D7 now! → the nearest F#" — if you can find it within 3 seconds, you pass. The goal is making "chord name → landing note" into a reflex.

```json
{
  "id": "m3.w9.d3.am7_d7_target_thirds",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Target 3rds: Am7-b3(C) and D7-3(F#) which is the Dorian color",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 5, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 6, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

**20–40 min · Real-world improv (Am7-D7 vamp / 76–80 BPM)**
Put on an "Am7 D7 vamp backing track" (alternating every two bars). One mission: **land on that chord's 3rd every time the chord changes.** C at the end of the Am7 section, F# at the end of the D7 section. Feel free to start by dropping the third 4-bar line straight on top. Fill the space in between freely — just make sure the **landing note** always matches the chord.

```json
{
  "id": "m3.w9.d3.chord_change_targeting",
  "type": "tab",
  "meta": {
    "title": "Am7 lands on C(b3), D7 lands on F#(6) - target the changes",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record the last 30 seconds of your jam. Listen back and check two things: **① did you land on F# the moment it switched to D7? ② did the sound "sparkle" brighter right then?** Slow playback to 0.75x to check whether the chord change and your landing line up.

**Today's finish line:** Run the 4-note sequence up and back at 80. Point to "chord name → landing note (C/F#)" within 3 seconds. Successfully land on the right 3rd at least 6 times per chord over the Am7-D7 backing track.

## ④ Tips / Common Mistakes

- **Not changing the landing note when the chord changes.** This is the most common mistake. If you keep landing on C no matter whether it's Am7 or D7, the D7 section falls flat. Remember: **D7 = F#**. This switch is everything today.
- **Feeling "scared" of F#.** Over Am7, F# is a color note (the major 6th); over D7, it's an actual chord tone (the 3rd). That means during the D7 section, F# is **the safest note there is**. Don't be afraid — lean right into F# when D7 arrives.
- **Playing the 4-note groups too fast.** 4-note groups are tightly packed, so even 80 can tangle your fingers. If you tangle, drop to 70 and roll through **without smudging a single note** — accuracy first. A smudged 4-note run is useless.
- **Focusing only on landings, letting the in-between get choppy.** The landing note is the destination, but the road there (the in-between notes) needs to be smooth too. In the note or two right before a landing, step in stepwise (right next to the landing note) so you glide in naturally.
