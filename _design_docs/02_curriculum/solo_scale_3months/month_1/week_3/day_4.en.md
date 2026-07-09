---
title: "Improvising Across the Whole Neck + Landing on the Nearest 3rd"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
lang: en
---

# Day 4 — This Week's Finish Line: Wherever You Are on the Neck, Land on the Nearest C

## ① Theory / Explanation

Here's why we're doing this today. Over the past three days this week, you expanded the neck up and down — you planted Box 4 and Box 5, and connected the five rooms into one hallway. But if you stop at just "expanding," you've only done half the job. Today you need to learn <mark>how not to get lost on this newly widened neck</mark>, and that's what completes the week. The compass for that is the same thing we've been saying since Week 1 — <mark>landing on the 3rd (C, ♭3)</mark>.

Just make sure one core idea is crystal clear. Right now, you can start improvising from anywhere on the neck — fret 5, fret 15, doesn't matter. The problem shows up when you have to close the phrase. There's exactly one thing that separates an awkward solo from a professional one: "Do you <mark>land on the nearest chord tone (especially C, ♭3)</mark> to wherever your hand already is?" Someone who's happily playing at fret 15 and then insists on crawling all the way down to fret 5 to land, missing the beat in the process — that's an amateur. Someone who <mark>just grabs the C right next to them and lands</mark> — that's a pro.

So today's training is your "nearest-3rd reflex." Remember how yesterday you saw that C is packed densely across the whole neck? That map pays off today. Playing up high (Box 5)? Drop onto the C at the 3rd string 17th fret or the 5th string 15th fret. Playing in the middle (Box 4)? Drop onto the C at the 2nd string 13th fret or the 5th string 15th fret — <mark>without moving your body much, just landing right on the nearby C</mark>. Once you've got this down, you'll never get lost no matter how wide the neck gets, because a landing pad is always within reach, wherever you are.

This week's graduation test is this: over an Am backing track, open phrases in different sections of the neck (high/middle), and at each spot, land on the nearest C (♭3) and sing it with vibrato. Your hand uses the whole neck as its stage, but the landing is always the nearest 3rd. This is the period at the end of this week's chapter in the 3-month curriculum — "Owning the Pentatonic Neck."

## ② Visual Reference

First, today's compass: <mark>the full-neck Am chord tone map</mark> (from the open strings to fret 15). Out of the scale's five notes, this pulls out just the three chord tones (R · ♭3 · 5). C (♭3), highlighted in green, is your "landing pad." Wherever you are on the neck, practice hunting for the nearest green dot with your eyes.

```json
{
  "id": "m1.w3.d4.am_chord_tone_full_neck",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) across the full neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 15,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 14, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

Here's an example lick for <mark>"nearest-3rd landing"</mark>. Measure 1 plays at the top of the neck (Box 5) and lands on the nearby C (3rd string, 17th fret). Measure 2 moves down and plays in Box 4, landing on that spot's nearby C (5th string, 15th fret). Neither landing requires much movement at all.

```json
{
  "id": "m1.w3.d4.nearest_3rd_landing",
  "type": "tab",
  "meta": {
    "title": "Nearest-3rd landing over Am (high box -> mid box)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 14, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 15, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 17, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 17, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 14, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 17, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 14, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 85)**
Run through this week's weapons — the Box 4 and 5 sequences, and the full-neck 3rd-interval run — once each, quickly, at BPM 85. Your hands should already remember all of this. Today's warm-up can be short — the real test is coming up.

**10–20 min · Brain training (nearest-C reflex)**
No metronome. Looking at the compass map, run this challenge: place your hand at any random spot on the neck (say, the 4th string 12th fret), and <mark>within one second, fret the nearest C (♭3)</mark>. Is it the 5th string 15th fret? The 2nd string 13th fret? Instantly aim for a C you can reach without moving much. Repeat this at 3–4 different spots up the neck. Pass when you can snag the nearest C within one second, every time. This is today's core skill.

```json
{
  "id": "m1.w3.d4.am_chord_tone_full_neck",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) across the full neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 15,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 14, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

**20–40 min · Real-world improv (Am one-chord backing, 80–90 BPM)**
Today's main event — this week's graduation test. Play the backing track, rule: ① <mark>Open a phrase up high on the neck (frets 12–17) → land right there on the nearest C</mark>, with vibrato. ② <mark>Open the next phrase in the middle of the neck (frets 7–12) → land there on that spot's nearby C</mark>. Use the example lick above as a starting point, but try it like a call-and-response — "ask up high, answer down below." Never run away to fret 5 — this is training you to land right where you already are. At least 6 phrases, landing on a nearby C every time.

```json
{
  "id": "m1.w3.d4.nearest_3rd_landing",
  "type": "tab",
  "meta": {
    "title": "Nearest-3rd landing over Am (high box -> mid box)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 14, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 15, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 17, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 17, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 14, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 17, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 14, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Make sure to record today. This is your proof of graduation for this week's "Owning the Pentatonic Neck" chapter. Listen back and check: ① <mark>Did every phrase end on a chord tone (C or A)</mark>? ② Did you ever miss the beat while dragging your hand far away just to land — if so, aim for a closer C next time. ③ <mark>Did you use the top, middle, and bottom of the neck fairly evenly</mark>? Slow down playback and any lag in your landing timing will jump right out at you.

**Done when (= Week 3 graduation criteria):** over an Am backing track, you open phrases in at least two different sections of the neck (high and middle), and land deliberately on the nearest C (♭3) with vibrato at least 6 times — without ever retreating to fret 5.

## ④ Tips / Common Mistakes

- **Teleporting to a familiar spot just to land.** This is today's biggest mistake. You're playing at fret 15, but you insist on crawling all the way down to the familiar C at fret 5, and end up missing the beat entirely. Use the nearest C, right where you already are — that's the whole point of the reflex you're building today.
- **Running to root A instead of the nearby C.** Landing on A feels safe, so you keep drifting there — but it's landing on C (♭3) that brings out that aching minor color. This week's goal is still "deliberately landing on the scary C." Try closing at least half your phrases on C.
- **The landing note sounds thin and weak up the neck.** C in the high frets has a thin tone, so if you fret it plainly without vibrato, the landing falls flat. Sing it out with a wide, slow vibrato to give it real weight.
- **Widening the neck but ending up playing in just one room anyway.** You opened up all five rooms this week, so today make sure you actually travel between at least two or three of them. "A widened neck you never use might as well not be widened." Play once up high, once in the middle — deliberately switch spots as you improvise.
