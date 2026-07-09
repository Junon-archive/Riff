---
title: "Mixolydian 4-Note Sequences + Turning Major 3rd Targeting into Muscle Memory"
dayKey: "m3.w10.d2"
estMinutes: 50
i18nKey: "lesson.m3.w10.d2"
lang: en
---

# Day 2 — Turning Position 1 into a "Song": 4-Note Sequences and the C# Landing Reflex

## ① Theory / Explanation

Here's why we're doing this today: yesterday you got A Mixolydian Position 1 into your hands and found where C# (major 3rd) and G (♭7) live. But knowing the location and having **<mark>your hand automatically go to C# while you're playing</mark>** are two completely different things. Today is about closing that gap.

There are two approaches. First, **<mark>the 4-note sequence</mark>**. Instead of just running the scale up and down, it's a pattern that pushes upward "in groups of four, sliding over by one note each time": A-B-C#-D → B-C#-D-E → C#-D-E-F# … like that. Why does this matter? If you memorize the whole block at once, when you improvise it comes out as a "chunk" instead of "individual notes," and it feels stiff. Break it into 4-note groups, and the scale comes alive in your fingers as **<mark>small phrase-sized units</mark>**. And as you cycle through this sequence, C# (major 3rd) keeps brushing under your fingers over and over, so "C# always lives here" gets burned into your body naturally.

Second, **<mark>turning major 3rd targeting into muscle memory</mark>**. Yesterday you consciously thought "C# at the end of the phrase" — today, we lock that in as a reflex. You need to be able to fret C# (3rd) and G (♭7) on the fretboard "without thinking," and that's what makes improv feel easy. So today's brain training is a targeting game that only pinpoints C# and G.

A little blue note review too. Yesterday you attached C (♭3) to C# with a **<mark>bend</mark>** — today, let's also try a **<mark>hammer-on</mark>**. Pick C (3rd string, 5th fret), then hammer immediately up to C# (3rd string, 6th fret) — a quick "tap" with your finger to slide up a half step. Bends are sticky and expressive; hammer-ons are smooth and clean. Having both textures gives the same blue note two different expressions.

Today's goal: run the 4-note sequence smoothly at 90 BPM, fret C# and G instantly with your eyes closed, and attach the blue note to the major 3rd both by bending and by hammering on.

## ② Visual Reference

First, today's warm-up, the **<mark>A Mixolydian 4-note sequence</mark>**. Within Position 1, ascend by grouping four notes and sliding up one note at a time. C# (major 3rd) and G (♭7) are highlighted, so stay aware of the colors every time you pass through. One bar = sixteen sixteenth notes.

```json
{
  "id": "m3.w10.d2.four_note_sequence_pos1",
  "type": "tab",
  "meta": {
    "title": "A Mixolydian 4-note sequence (Position 1, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "role": "scale" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 4, "duration": "sixteenth", "label": "3", "role": "target", "highlight": true },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 4, "duration": "sixteenth", "label": "6", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 4, "duration": "sixteenth", "label": "6", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

Second, the **<mark>C# & G target map</mark>**. Within Position 1, the major 3rd C# (green, resolution) and ♭7 G (yellow, tension) each appear in two spots. The root A and the blue note C are layered in lightly, too. Today's brain training is done when this picture pops into your head with your eyes closed.

```json
{
  "id": "m3.w10.d2.third_and_b7_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Position 1 target map: major 3rd(C#) & b7(G) locations",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true }
    ]
  }
}
```

Third, today's bluesy lick. Attach C→C# with a **hammer-on** (bar 1), then attach C→C# again with a **bend** and finish with vibrato (bar 2). Feel the same blue note in two different textures.

```json
{
  "id": "m3.w10.d2.blue_note_hammer_vs_bend",
  "type": "tab",
  "meta": {
    "title": "Blue note to major 3rd: hammer-on vs bend (b3 C -> 3 C#)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_line",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "hammer_on", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "2", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 90) — 4-note sequence**
Ascend through the 4-note sequence above at 90. It's fine to start at 80. The point is **<mark>precise timing and even volume.</mark>** Every single sixteenth note should come out clear and the same size. Slightly emphasize C# and G as you pass through, staying color-aware — "here!" Once it's smooth, try improvising a descending version too.

**10–20 min · Brain training (C# & G map game)**
Look at the second map, and with the metronome off, fret **<mark>just C#</mark>** in its two spots (5th string 4th fret, 3rd string 6th fret), then **just G** in its two spots (4th string 5th fret, 2nd string 8th fret), alternating. Say each note name out loud. Then close your eyes: when you say "C#!" fret one spot within 3 seconds, when you say "G!" fret one within 3 seconds. Pass with 5 successes in a row.

**20–40 min · Real-world feel (A7 vamp / 85–90 BPM) — ♭7 emphasis mission**
Put on an "A7 vamp backing track," with two missions today: (1) still land phrases on C#, and (2) work in **<mark>at least one emphasized ♭7 G in the middle of a phrase.</mark>** Keep building that back-and-forth of hanging tension with G → releasing it into C#. Freely mix in the blue note licks (hammer and bend) too. Success is when you can hear "tension (G) → resolution (C#)" clearly.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of a jam with any recorder. Two checkpoints: (1) was the timing even in the 4-note warm-up, and (2) <mark>after playing G, did you really resolve to C#</mark>, or did it end up floating on G with no resolution? If needed, slow down playback and zoom in on the moment of the G→C# transition.

**Today's completion criteria:** Pass the 4-note sequence at 90 BPM without stopping. Fret C# and G instantly with eyes closed, 5 times in a row. Attach the blue note to the major 3rd using both hammer-on and bend.

## ④ Tips / Common Mistakes

- **Trying to play the 4-note sequence "fast" only.** **Evenness** comes before speed. If only the first of the four notes is loud and the rest get mushy, it's not a sequence — it's just noise. Even slow, all four notes should be clear.
- **The hammer-on doesn't ring out.** If the finger tapping down on C# (6th fret) doesn't have enough force and speed, the sound dies. Hit right behind the fret precisely with your fingertip — a bit hard, and fast.
- **Ending on G.** Caught up in the mission, it's easy to slip into ending a phrase on G by mistake. G is always a note that's "on its way somewhere." Always resolve and end on C# (or the 5th E, or the root A).
- **Keeping the warm-up and the improv separate.** The hand shapes you drill in the 4-note sequence only matter if they show up in your improv too. Deliberately drop in pieces of the 4-note pattern during your jam sometimes. That's how "practice becomes vocabulary."
