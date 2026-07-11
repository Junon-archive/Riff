---
title: "Am Pentatonic Box 1 Review — Chewing It Again With '3rd Intervals,' Not Up-and-Down"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
lang: en
---

# Day 1 — Making the Familiar 5 Notes Feel Strange Again, With '3rd Intervals'

## ① Theory / Explanation

Here's why we're doing this today. This week's goal is to expand A minor pentatonic into **<mark>A natural minor</mark>** by adding the 2nd (B) and the 6th (F). But before we add new notes, we need to check that **<mark>the foundation is solid</mark>** first — and that foundation is pentatonic Box 1. It's easy to feel like you already "know" this box. But running up and down it, la-la-la, isn't really knowing it — that's just your hand coasting on muscle memory. We kept saying this all last month.

So today we're going to run through the same 5 notes (**A·C·D·E·G**) using **<mark>3rd intervals only</mark>**. What's a 3rd interval? Instead of playing the very next note, you **skip one and play the note after that.** Not A then C, but A then D; not C then D, but C then E — you climb up in these "skip-one" pairs. Why does this matter? When you move to the next-door note in order, your brain doesn't need to memorize positions — your fingers just run on autopilot. But skip one, and that autopilot breaks. Your brain is forced to **<mark>memorize each note's coordinates individually</mark>.** That's the real raw material of improvisation.

And today's landing spot is, as always, **<mark>C (♭3)</mark>** — the 3rd of the Am chord, our home base for the whole three months. Whenever you want to stop mid-climb through the 3rd-interval pairs, stop on C, no exceptions. Tomorrow we bring in B, the day after F — and we're going to make sure those new notes flow right back into this same C. So think of today as the day we plant "the destination the new notes will eventually arrive at" firmly into your hands and ears.

## ② Visual Reference

This is A minor pentatonic Box 1 (root on the 5th fret). The three green highlights are, once again, <mark>today's destination: **C (♭3)**</mark>.

```json
{
  "id": "m2.w5.d1.aminor_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (review)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
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

Today's key weapon: the **<mark>3rd-interval sequence</mark>.** You climb in skip-one pairs (A–D, C–E, D–G…), and every phrase ends by landing on **C (♭3)**.

```json
{
  "id": "m2.w5.d1.pentatonic_thirds_sequence",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Pentatonic 3rd-interval (skip-one) sequence landing on b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80)**
Set the metronome to 80 and run the 3rd-interval sequence above from the 6th string up to the 1st string and back. Each beat gets two eighth notes — a "dud-da" pair locking exactly onto the click. Keep <mark>alternate picking</mark> (down–up) fixed. If your hand hesitates because the pairing feels unfamiliar, that's completely normal — that's the sound of old muscle memory breaking apart.

**10–20 min · Brain training (today's target = C / ♭3)**
Metronome off. Inside Box 1, find and fret **<mark>only C (♭3)</mark>.** 6th string 8th fret, 3rd string 5th fret, 1st string 8th fret — three spots. Say it out loud each time you fret it: "C!" Then add the approach: climb up through the 3rd-interval pair right before each C and **<mark>land exactly on C</mark>.** Pass when you can find all three spots in under 3 seconds with your eyes closed.

**20–40 min · Real-world improv (Am one-chord backing, 75–80 BPM)**
Put on any "Am backing track." One rule only: **<mark>move exclusively in 3rd-interval pairs, and whenever you stop, stop on C or A</mark>.** If the old habit of stepping through neighboring notes sneaks back in, stop immediately and return to the pairs. Don't worry about "cool phrases" yet — just get the skip-one feeling into your body.

**40–50 min · Record & reflect (recommended)**
Record just the last 30 seconds of jamming with any recorder you have (a phone voice memo is fine). Listen back and check one thing only: **<mark>did you really move in 3rds</mark>, or did you quietly slip back into stepwise motion?** If you slipped into stepwise motion, try again tomorrow at BPM 75.

**Today's done-when:** you can run the 3rd-interval sequence at BPM 80 without breaking, find the three C spots with your eyes closed, and land every stop in the jam on C or A.

## ④ Tips / Common Mistakes

- **Sliding back into stepwise motion.** If the 3rd-interval pairing feels frustrating and you catch yourself running la-la-la through neighboring notes, that's your brain taking the easy road. That frustration is actually the sound of a new circuit forming — stick with the pairs.
- **Chasing speed too soon.** 80 might feel comfortably slow, but resist the urge. Today's goal is "engraving accurate coordinates," not speed. Playing slow and clear beats fast and blurry — that pays off all week.
- **Letting C slide by unnoticed.** C is the drain — the convergence point — that B and F will flow into starting tomorrow. Every time you fret it, press just a touch harder and hold it just a touch longer, so your ear engraves "this is the destination."
- **Tension in the picking hand.** Pick shallow, from the wrist, not the arm. Even though these 8th-note pairs feel relaxed, an arm-driven picking habit will trip you up the moment you hit tomorrow's 16th-note groups of four.
