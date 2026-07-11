---
title: "Locking In the Am Pentatonic Box 1 + Slow 4-Note Sequences"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
lang: en
---

# Day 1 — Carving Box 1 Into Your Ear, Not Just Your Hands

## ① Theory / Explanation

Here's why we're doing this today. You've probably played the pentatonic Box 1 a hundred times by now — but there's a difference between hands that feel comfortable and a fretboard that's actually memorized. Running up and down, la-la-la-la, back and forth? That's not memorizing the fretboard — that's your **<mark>finger muscles cruising on autopilot</mark>**. And that's exactly why improvising feels impossible. The moment someone says "go ahead, play whatever you want" over a track, your hands just shuttle back and forth on that same autopilot track.

So starting today, we're setting one rule: **<mark>no more simple up-and-down runs</mark>.** Instead, we're going to chew through the box using 4-note sequences (groups of four 16th notes). Why 4-note groups? Because instead of moving through the box in one straight direction, you'll go "four notes forward, one note back, forward again" — and that forces your brain to start memorizing each note's position as an **<mark>individual coordinate</mark>**, not a habit. That's how we break the autopilot.

The coordinates you need to remember are just the 5 notes of A minor pentatonic: **<mark>A (root) · C (♭3) · D (4) · E (5) · G (♭7)</mark>.** Of these, the one to really burn into your eyes today is **<mark>C (♭3)</mark>.** That's the 3rd of the Am chord — the note that's going to be your "landing spot" for the next three months. For now, just let it sink in: "ah, C lights up green right here, here, and here."

```json
{
  "id": "m1.w1.d1.pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 60
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② Visual Reference

Am pentatonic Box 1 (root on the 5th fret). The notes highlighted in green (♭3 = C) are <mark>your target notes going forward</mark>.

```json
{
  "id": "m1.w1.d1.pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 60
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Here's today's core weapon — a <mark>4-note (16th note) ascending sequence</mark>. 1-2-3-4 / 2-3-4-5 / 3-4-5-6 … you shift forward by one note each time as you climb.

```json
{
  "id": "m1.w1.d1.four_note_sequence",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note (16th) ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 60
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 60)**
With the metronome at 60, run the 4-note sequence ascending only, from the 6th string up to the end of the 1st string. No descending yet. Each beat should <mark>land exactly one group of four 16th notes</mark> — "da-da-da-da" — right on the click. Lock in alternate picking (down-up-down-up).

```json
{
  "id": "m1.w1.d1.four_note_sequence",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note (16th) ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 60
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (today's target = C / ♭3)**
Turn off the metronome and hunt down **<mark>just C (♭3)</mark>** on the fretboard. 6th string 8th fret, 3rd string 5th fret, 1st string 8th fret — those three spots. Say it out loud every time you fret it: "C!" This trains your brain to remember the position by name, not just by feel. Pass condition: find all three spots with your eyes closed in under 3 minutes.

**20–40 min · Real-world feel — one-chord improv (Am backing track, BPM 60–65)**
Search "Am backing track slow" and put one on. Only one rule: **<mark>climb using the 4-note sequence</mark>, and whenever you want to stop, <mark>stop only on C or A</mark>.** Don't worry about playing a "cool phrase" yet — just focus on the feeling of moving through the sequence instead of the old autopilot track.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of that last jam with whatever you've got — voice memo app, any recorder. Listen back and check just one thing: **<mark>do the four 16th notes stay crisp and separate</mark>, or do they blur together?** If they're blurring, it's totally fine to drop the BPM to 55 tomorrow.

**Today's finish line:** run the 4-note ascending sequence at BPM 60 without a break all the way to the 1st string, and find all three C spots with your eyes closed.

## ④ Tips / Common Mistakes

- **The old autopilot creeping back in.** If you catch yourself sliding back into a plain "la-la-la-la" up-and-down run, that's just your brain taking the easy road. Feeling confused by the sequence is completely normal — that frustration is the sign a new circuit is being wired.
- **Craving speed.** Even if 60 feels painfully slow, don't push it up today. We'll ramp up on Day 3 this week. Playing slow and clean beats playing fast and sloppy, a hundred times over.
- **Treating ♭3 as just another note.** C is the main character of the next three months. Every time you fret it, hold it a touch harder, a touch longer. Burn it into your ear now, and chord-tone targeting later will feel like a free win.
- **Tension in the picking hand.** Pick shallow, from the wrist — not the arm. Picking 16th notes from the arm will wear you out in 20 minutes flat.
