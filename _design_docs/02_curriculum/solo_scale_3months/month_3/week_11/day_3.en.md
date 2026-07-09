---
title: "Mixolydian Switching Over a Rock Backing Track + Powerful Long Tones & Bold Bends"
dayKey: "m3.w11.d3"
estMinutes: 50
i18nKey: "lesson.m3.w11.d3"
lang: en
---

# Day 3 — Rock: Bend Big into the 3rd, Then Milk It Long

## ① Theory / Explanation

Here's why we're doing this today: blues dragged, funk chopped. Today's rock is different again. Rock's weapon is **directness** — powerful long tones, bold bends, big fat vibrato. Rock's charm isn't fancy technique — it's the guts to **bend one note way up and milk it long.** New backing, so today we swap the entire phrasing mood again.

Today's rock backing is a power-chord riff: **A5 → G5 → D5** (I-♭VII-IV) — the classic rock skeleton. Power chords have no 3rd, so major/minor stays ambiguous, but this ♭VII (G) move calls for a Mixolydian color, hands down. So base camp is **A Mixolydian (A B C# D E F# G)**. The ♭7 (G) inside it gives you that unmistakable rock brightness.

Switching by chord, here's how it breaks down:

- **On A5 (A) → aim for C# (major 3rd).** Bend B (3rd string, 4th fret) up a whole step boldly into C#, and you get that classic thrilling rock-solo entrance.
- **Once it shifts to G5 (G) → land on B (major 3rd).** (B already lives right inside A Mixolydian.)
- **On D5 (D) → land on F# (major 3rd).**
- The color tone is **♭7 (G, 2nd string, 8th fret)** — lay it down as a long tone and A Mixolydian's identity really pops.

### 🎙️ Space & Phrasing Mini-Lesson — Rock Edition: Powerful Long Tones & Bold Bends

Rock has space too — but that space is **"the silence right before you fire the next cannon shot."** Here are the four things to grab today.

- **Dramatic rest:** Leave an entire beat of empty silence right before you fire off a big bend. That silence turns the long tone that follows into the star of the show. Not choppy little rests like yesterday — one big, wide-open gap.
- **Powerful long tones:** Once you land on the 3rd, push it out long as a whole note or half note. Don't cut it short — milk it until the amp itself is ringing.
- **Bold bends:** Don't push timidly. Bend B a full whole step, all the way up to C# (the 3rd), and once you arrive, lay on a big vibrato. Land the pitch exactly (check it against the target note by ear) — but make the expression fearless.
- **Motif & dynamics:** Fire off one big bent long tone, then answer it softly right after — that contrast makes even the same line sound way more dramatic.

So today's the day you land on the 3rds of A5, G5, and D5 (C#, B, F#) — but sing them powerfully, with bold bends, long tones, and big vibrato.

## ② Visual Reference

First up, a **target note map** for the rock riff. The 3rds of A5, G5, and D5 all cluster near the 5th fret, and the ♭7 (G) color tone is marked too. **3rd string 4th fret B → whole-step bend → 6th fret C# (A5's 3rd)** is today's signature move.

```json
{
  "id": "m3.w11.d3.rock_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Rock target map A5 -> G5 -> D5 (A Mixolydian, 3rds + b7 color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (rock I-bVII-IV)",
    "scale": "A Mixolydian",
    "tempoBpm": 120
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A5 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A5-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "G5-3(B) / bend to C#", "highlight": true, "role": "target" },
      { "string": 5, "fret": 10, "finger": 4, "label": "G5 R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D5 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D5-3(F#)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7(G color)", "highlight": true, "role": "color" }
    ]
  }
}
```

Second, today's **rock long-tone bend phrase.** In measure 1, over A5, you leave a beat of empty space → bend B up a whole step into a big, held C# for a half note → then finish C# off with vibrato. Measure 2 switches to D5 — you land long on F# with a vibrato long tone. There aren't many rests, but each one is wide open, like the stage going dark for a moment.

```json
{
  "id": "m3.w11.d3.rock_longtone_bend_phrase",
  "type": "tab",
  "meta": {
    "title": "Rock long-tone bend phrase (A5 B>C# / D5 F#) with dramatic space",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (rock)",
    "tempoBpm": 120
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 3, "fret": 4, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "B>C#(A5-3)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A5-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "eighth", "rest": true, "label": "breath" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "D5-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "D5-3(F#)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 120) — 4-note sequence + bend tuning**
At the rock tempo of 120, run through A Mixolydian in a 4-note sequence once, then do 10 reps of **bending 3rd string 4th fret B a full step to match the actual pitch of 6th fret C#.** First, pluck C# (3rd string, 6th fret) to plant the target in your ear, then bend up to match that exact pitch. Bold expression, dead-on pitch.

**10–20 min · Brain training — mapping the A5/G5/D5 3rds**
Metronome off. On the target map, spot and fret **A5→C# (3rd string, 6th fret), G5→B (3rd string, 4th fret), D5→F# (2nd string, 7th fret).** Play ♭7 (G, 2nd string, 8th fret) once too, to hear the color. Say "this chord, this note" out loud as you go.

```json
{
  "id": "m3.w11.d3.rock_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Rock target map A5 -> G5 -> D5 (A Mixolydian, 3rds + b7 color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (rock I-bVII-IV)",
    "scale": "A Mixolydian",
    "tempoBpm": 120
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 7,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A5 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A5-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "G5-3(B) / bend to C#", "highlight": true, "role": "target" },
      { "string": 5, "fret": 10, "finger": 4, "label": "G5 R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D5 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D5-3(F#)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7(G color)", "highlight": true, "role": "color" }
    ]
  }
}
```

**20–40 min · Real-world improv (A5–G5–D5 rock backing / 116–120 BPM) — long-tone & bend mission**
Put on "rock backing track A5 G5 D5" or "A Mixolydian rock jam." Two missions. ① Switch 3rds C#→B→F# whenever the chord changes. ② **Don't play a lot of notes — boldly bend one note and milk it long as a sustained tone.** Before every big bend, leave a full beat empty to build the drama.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your jam. Listen back for just two things — ① Did your bend land exactly on the target pitch (C#)? (Falling short means not enough push; overshooting means too much.) ② **Did the long tone stay alive with big vibrato all the way through, without going flat?** Slow down playback if needed to zoom in on the moment your bend lands and how you finish the long tone.

**Today's finish line:** Fret the 3rds of A5, G5, and D5 with your eyes closed. Match the B→C# whole-step bend exactly to the real pitch at least 5 times, plus land on a long tone at least 4 times over the backing track (no cutting them short).

## ④ Tips / Common Mistakes

- **Bending too timidly.** Boldness is rock's lifeblood. A half-hearted push means bad pitch and no power. Back your ring finger with your middle and index fingers, use all three, and rotate from your wrist and forearm to push firmly all the way up a full step.
- **Playing too many notes.** Rock solos live by "fewer, bigger." One big bent long tone hits harder than ten little fill notes. Even if your hands are itching, hold back and milk one note.
- **Letting the long tone go flat and lifeless.** Keep it alive with big vibrato the whole time it's ringing. Leave it still and it's a dead note. How you finish a note is rock's pride.
- **Bending without a target in mind.** Plant the destination (C#) in your ear first, then push. Expression can be bold, but the landing pitch needs to be exact, or rock starts sounding sloppy.
