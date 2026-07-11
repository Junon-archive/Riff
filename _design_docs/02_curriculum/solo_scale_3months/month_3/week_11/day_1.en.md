---
title: "Mixolydian Switching Over a Blues Backing Track + Sticky Layback Phrasing"
dayKey: "m3.w11.d1"
estMinutes: 50
i18nKey: "lesson.m3.w11.d1"
lang: en
---

# Day 1 — Blues: Land on the 3rd, but Sing It Sticky and Behind the Beat

## ① Theory / Explanation

Here's why we're doing this today: over the past two weeks (W9 Dorian, W10 Mixolydian), you learned how to "paint with modes." But here's the real-world catch — backing tracks roll differently depending on the genre. This week, we swap in a new genre's backing track every day, building the muscle to <mark>switch scales in real time (mode switching)</mark> the instant the chord changes. Day one is our home turf: blues.

The blues progression here is dominant-flavored in A: **<mark>A7 → D7 → E7</mark>** (I-IV-V). Whenever you run into a dominant/blues backing track, the call is almost automatic — **<mark>Mixolydian + blue note.</mark>** So today's base camp is **A Mixolydian (A B C# D E F# G)**, with a dash of the blue note C (♭3) sprinkled on top.

The core move is still the same: <mark>land on that chord's 3rd</mark> the moment it changes. In blues, here's how you switch:

- **On A7 → aim for C# (major 3rd).** Slide up into it from the blue note C (♭3) a half step below, and you get that famous "greasy" blues color.
- **<mark>Once it shifts to D7 → land on F# (major 3rd).</mark>** The move from A7's C# to D7's F# is today's switching point.
- **On E7 → G# (major 3rd).**

But today's real topic isn't "the right note" — it's **"how you sing that note."** Blues's whole identity is **<mark>stickiness (layback)</mark>**.

### 🎙️ Space & Phrasing Mini-Lesson — Blues Edition: Layback & Long Sustain

If mode switching is "picking the right note," this week we're layering something on top — the expressive layer that turns a string of notes into music. Here are the four things to grab today in blues.

- **<mark>Rests (space):</mark>** Play blues without pauses and it dies. Toss out one 3rd, then **rest for a full beat.** That silence is what gives the next note its weight. Today's tab is loaded with `rest` on purpose.
- **<mark>Layback (coming in late):</mark>** Don't lock in razor-sharp on the downbeat — ease in a touch **behind it.** Land half a beat behind the click, and suddenly you sound like a bluesman.
- **Long sustain:** Once you land on the 3rd, don't cut it short — let it ring with a **long, wide vibrato.** Keep a single note alive all the way through, like a vocal line.
- **Motif & call-and-response:** Toss out the short two-note motif "C→C# (♭3→3)," rest a beat, then answer it back with a slight twist. You're having a one-person conversation — asking and answering.

So today's the day you land on the 3rds of A7 and D7 (C# and F#) — but sing them sticky, with space, layback, and long vibrato.

## ② Visual Reference

First up, a **<mark>target note map</mark>** for the blues backing. From one spot near the 5th fret, you can reach the 3rds of A7, D7, and E7 all at once. The green-highlighted notes are the 3rds you're landing on; the C right next to them is the blue note (♭3). **3rd string, frets 5–6 (C→C#)** are today's two key notes.

```json
{
  "id": "m3.w11.d1.blues_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Blues target map A7 -> D7 -> E7 (A Mixolydian, 3rds + blue note)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (blues I-IV-V)",
    "scale": "A Mixolydian + b3 blue note",
    "tempoBpm": 63
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A7-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3(C blue)", "highlight": true, "role": "blue_note" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D7-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 6, "finger": 2, "label": "E7-3(G#)", "highlight": true, "role": "target" }
    ]
  }
}
```

Second, today's **<mark>layback blues phrase.</mark>** Notice how loaded it is with rests? In measure 1, over A7, you rest a beat → slide the blue note C up a half step into C# → then let C# ring out with a long vibrato. Measure 2 switches to D7 — you land on F# as a long half note, leave a full beat of silence, then wrap up on the root D. The data itself shows you that rests are half the music.

```json
{
  "id": "m3.w11.d1.blues_layback_phrase",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Blues layback phrase (A7 C# / D7 F#) with breathing space",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (blues)",
    "tempoBpm": 63
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3>3(C>C#)", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "A7 R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "D7-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "D7 R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 63) — loosen up with a 4-note sequence**
At the slow blues tempo of 63, run through A Mixolydian in **4-note groups** (A-B-C#-D / B-C#-D-E …) once. Don't just memorize it up and down — roll it in chunks of four. One rule for today's warm-up though: **<mark>leave a half-beat rest at the end of each group</mark>** to plant that layback feel early. Your ears need to relax before your hands can play blues.

**10–20 min · Brain training — mapping each chord's 3rd and blue note**
Metronome off. On the target map, spot and fret just three notes: **A7→C# (3rd string, 6th fret), D7→F# (2nd string, 7th fret), E7→G# (4th string, 6th fret).** Then do 10 reps of sliding the blue note C (3rd string, 5th fret) up a half step into C#. Say "this chord, this note" out loud as you go — it doubles how fast it sticks.

```json
{
  "id": "m3.w11.d1.blues_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Blues target map A7 -> D7 -> E7 (A Mixolydian, 3rds + blue note)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian (blues I-IV-V)",
    "scale": "A Mixolydian + b3 blue note",
    "tempoBpm": 63
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "A7-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3(C blue)", "highlight": true, "role": "blue_note" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D7-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 6, "finger": 2, "label": "E7-3(G#)", "highlight": true, "role": "target" }
    ]
  }
}
```

**20–40 min · Real-world improv (A blues backing / 60–63 BPM) — layback mission**
Put on any "slow blues in A backing track" you can find. Two missions only. ① Every time the chord shifts A7→D7→E7, land on its 3rd (C#→F#→G#). ② **<mark>Come in slightly behind the click on every landing note (layback)</mark>, then let it ring with a long vibrato.** Don't try to play a lot of notes. Always leave a full beat of rest after each phrase.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your jam with whatever's on hand. Listen back for just two things — ① Did you actually land on the 3rd every time the chord changed? ② **<mark>Can you hear the rests?</mark>** If it's packed wall-to-wall with no breathing room, that's today's fix. Slow down playback if you need to, to zoom in on your layback timing and where you placed your rests.

**Today's finish line:** Fret the 3rds of A7, D7, and E7 with your eyes closed. Land on a 3rd at least 6 times over the backing track, plus at least 4 deliberate rests between phrases.

## ④ Tips / Common Mistakes

- **Filling every gap with no rests.** This is mistake #1 today. Blues is half space. Practice the courage to toss out one 3rd and then freeze your hand. Silence is what brings the next note to life.
- **Parking on the blue note C.** C (♭3) isn't the destination — it's a passing/ornament tone on the way to C# (3). Slide it up a half step straight into C#. Linger there and it just sounds like a wrong note.
- **Snapping exactly onto the downbeat.** Blues gets sticky when you come in a touch late (layback). Let go of the urge to be perfectly on time for a second, and try dragging half a beat behind.
- **Cutting the landing note short.** Once you hit the 3rd, sing it all the way through with vibrato. How you finish a note is the face of blues.
