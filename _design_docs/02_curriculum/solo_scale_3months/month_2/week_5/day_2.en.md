---
title: "Adding the 2nd (B) — a Four-Note Run That Passes Through B and Lands on the 3rd (C)"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
lang: en
---

# Day 2 — Building a Bridge Called 'B' Into the Pentatonic

## ① Theory / Explanation

Here's why we're doing this today. In the pentatonic scale we've been using through yesterday, there's a **gaping hole** between A and C. To get from the root A (6th string, 5th fret) to the next note C (6th string, 8th fret), you had to leap across three whole frets. That gap is part of what gives pentatonic its signature open, spacious flavor — but if you're always leaping like that, your solos can start to sound a little **stiff and staircase-like.** So today we're building a bridge across that gap: **B, the 2nd**, sitting right between A and C.

Here's an important principle: B is **a bridge, not the star of the show** (a passing tone). If you settle on B, it sounds like it's floating over the Am chord — because B isn't one of Am's chord tones (A·C·E). So B only ever gets used as a **note you pass through.** Start on A, brush past B → land immediately on C (♭3, the 3rd chord tone). This "A-B-C" motion is today's whole story. The moment B delivers you to C, it's done its job. This is exactly why we drilled C as home base yesterday.

Our practice pattern is **four-note groups (16th notes in fours).** If the 3rd interval was "skipping," the four-note group is "filling in the gaps densely." Now that B connects A and C, you can run it in tight 16th notes and the notes flow instead of clumping together. Starting today, memorize B's location on the fretboard for good — in Box 1 that's just two spots: **6th string 7th fret** and **1st string 7th fret.** Picture each of those B's sliding one fret up into the neighboring C, and you're set.

```json
{
  "id": "m2.w5.d2.pentatonic_add_2nd",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 2nd (B) as passing tone to b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
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
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② Visual Reference

Pentatonic Box 1, now with two new **B (2nd, highlighted in green)** spots — 6th string 7th fret, 1st string 7th fret. Each is a bridge flowing straight into the C (♭3, green) right above it.

```json
{
  "id": "m2.w5.d2.pentatonic_add_2nd",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 2nd (B) as passing tone to b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
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
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Today's four-note drill. Loop **A-B-C** to build the feel of passing through B and arriving at C, then land long on C at the end.

```json
{
  "id": "m2.w5.d2.b_passing_to_third_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence: 2nd(B) passing tone resolving to Am 3rd (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80)**
Set the metronome to 80 and loosen up your hand with **yesterday's 3rd-interval sequence** first — 5 minutes. Then spend 5 minutes on today's A-B-C four-note drill, slow. Each beat gets four 16th notes ("dud-a-da-da") locking exactly onto one click. If it clumps together, drop to BPM 70.

```json
{
  "id": "m2.w5.d2.b_passing_to_third_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence: 2nd(B) passing tone resolving to Am 3rd (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (today's target = the two B spots)**
Metronome off. In Box 1, find and fret **only B (2nd).** 6th string 7th fret, 1st string 7th fret — just two spots. Every time you fret it, say out loud "this is a bridge, I can't stay here," and add the motion of **immediately sliding one fret up to C.** Pass when you can find both B's with your eyes closed and resolve each one to C.

**20–40 min · Real-world improv (Am one-chord backing, 75–80 BPM)**
Put on an "Am backing track." One rule only: **every time you use B, resolve it to C.** Ending a phrase on B is off-limits. Use A-B-C as a seed motif and vary it by shifting positions. It's also great to slip A-B-C in between yesterday's 3rd-interval pairs here and there.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of jamming with any recorder. Listen back and check one thing only: **were there any moments where B was left hanging, unresolved?** If you find a spot where it ended on B and it feels like "wait, that didn't resolve," mark it, and next time wrap it up on C. Slow down playback if you need to zoom in on the B→C timing by ear.

**Today's done-when:** you can find the two B spots with your eyes closed, run the A-B-C four-note drill without breaking at BPM 80, and resolve every B to C during the jam.

## ④ Tips / Common Mistakes

- **Settling on B.** This is the #1 mistake today. Since B isn't an Am chord tone, lingering on it makes it sound like a "wrong note" floating in space. Always brush past it into C. Keep the tension brief, the resolution definite.
- **Mistaking B for the root.** B sits right above A, so it can get confused with the root A by ear. The root is always A (6th string 5th fret, 4th string 7th fret, 1st string 5th fret) — B is just the bridge connecting A and C, never home base.
- **Finger placement falling apart.** On the 6th string, use fingers 1-3-4 for frets 5-7-8. If you grab the 7th fret with finger 2, the 8th-fret C gets too far away and A-B-C ends up choppy. Stick to 1-3-4 and the three notes flow smoothly.
- **Blurring the 16th notes.** Since A-B-C is now connected, you'll want to speed through it — but if it clumps, the bridge turns into a slide. Keep every note distinct; drop to 70 if you need clarity.
