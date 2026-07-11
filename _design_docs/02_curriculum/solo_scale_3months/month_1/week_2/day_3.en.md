---
title: "A 3rd-Interval Sequence Linking Box 1-2-3 (Connection Accuracy)"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
lang: en
---

# Day 3 — Stringing Three Homes Into One Line: Finishing the Highway

## ① Theory / Explanation

Here's why we're doing this today. Over the past two days, you've built two bridges: Box 1↔2 and Box 2↔3. But "building" a bridge and "driving" across it are two different things. Today, we thread all three boxes into **<mark>one flowing line</mark>** — and not as a flat up-and-down staircase, but using the **<mark>3rd-interval skip</mark>** you learned last week.

Why bother connecting with 3rd intervals specifically? Because if you just slide between boxes, it sounds mechanical, like a "position-shifting drill." But layer 3rd-interval jumps onto that journey, and it suddenly becomes a **<mark>singing line</mark>**. That skipping, hopping feeling as you climb the neck — that's the seed of B.B. King's easy, unhurried strolls up and down the whole fretboard. Box movement + 3rd-interval skips = traveling the neck while singing.

Today's real test is **<mark>accuracy at the connection points</mark>** — the seams where you're hopping in 3rds and then crossing a box boundary with a slide. If the pitch wobbles or the beat drags there, the whole journey stumbles. So today, the grading criterion isn't speed — it's **how smooth those seams are.** And the heart of this curriculum is still beating strong: no matter how many boxes you cross, at every box boundary you **<mark>land on C (the ♭3)</mark>.** Three landings, three C's. That's the nail holding today's whole journey together.

## ② Visual Reference

First, here's the map of the whole neck. From fret 5 to fret 13, we've pulled out and marked just the **<mark>root A's and target C's (♭3)</mark>** scattered across the three boxes. Think of this as your "highway signs." Wherever these green C's pop up during your journey, that's a landing point.

```json
{
  "id": "m1.w2.d3.neck_targets_box1_3",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Root & b3 targets across Box 1-2-3 (the connection highway)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 9,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Today's main line — a <mark>3rd-interval line running through all three boxes</mark>. Start hopping in 3rds in Box 1 → 4th-string slide into Box 2 → 2nd-string slide into Box 3 → land on the high C. Check that you're hitting a C at every seam, measure by measure.

```json
{
  "id": "m1.w2.d3.three_box_3rd_sequence",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "3rd-interval sequence linking Box 1 -> 2 -> 3 (land b3 at each seam)",
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
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 10, "duration": "eighth", "technique": "slide", "slideToFret": 13, "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 70 → climbing in steps)**
First, loosen up with both bridges from the past two days (4th-string A→C, 2nd-string A→C slide) at BPM 70, 5 reps each. Check whether your hands still remember the seams. Then play through the 3-box line above **very slowly**, being especially deliberate at the slide points. Once the seams feel smooth, step up **<mark>75 → 80</mark>**, five clicks at a time. Whichever speed makes you stumble at a seam — that's today's ceiling.

**10–20 min · Brain training (today's target = the three C's, aiming at the seams)**
Metronome at 80. Run through the 3-box line, but **<mark>pause for half a second only on the C (♭3) landing notes</mark>** at the end of each measure — the C at the end of measure 1 (entering Box 2), the C within measure 2's flow, and the high C at the end of measure 3. Treat these three C's as "stations" on your journey, and train yourself to hit them precisely even within a flowing line. Pass once you hit all three stations accurately.

**20–40 min · Real-world feel (Am one-chord backing track, BPM 75–80)**
Put on a backing track. Rule: **start in Box 1, <mark>climb up to Box 3 with two slides</mark>, then come back down and finish by landing on C in whichever box you happen to be in.** You can play the example line above exactly, or improvise by rearranging the order of the 3rd-interval jumps. Just one non-negotiable: **<mark>whenever you cross a box boundary, cross it with a slide</mark>.** Don't hop your hand through the air — today's whole point is burning the feeling of gliding across the string into your body.

**40–50 min · Record & reflect (recommended)**
Record one trip through all three boxes. Play it back and check: ① does the beat drag or "clunk" at either slide seam? ② <mark>do all three C's come through clearly</mark>? If a seam breaks down, isolate the slide between those two boxes and repeat it 10 times on its own. Smooth seams are what make the whole neck feel like one continuous thing.

**Today's finish line:** At your ceiling BPM (aim for at least 75), play through the 1→2→3 3rd-interval line with no breaks at the seams. All three C landings accurate. Successfully complete one round trip, up and back down.

## ④ Tips / Common Mistakes

- **Hopping your hand through the air at a seam.** If you jerk your hand up instead of sliding across a box boundary, the beat drags and the sound cuts right there. Today's rule: **boundaries always get crossed with a slide.** Don't let your finger lift off the string.
- **Sneaking in the skipped note while jumping 3rds.** The whole flavor of a 3rd interval comes from **leaving the middle note out.** Play it stepwise instead, and it just degrades into an ordinary up-and-down run. Hop, hop — leave that gap open.
- **Cranking up speed and smearing the seams.** Today's score isn't about speed — it's about **how smooth the seams are.** If the seams creak at 80, then 75 is your real, honest level. A clean 75 beats a smeared 80, hands down.
- **Getting swept up in the journey and forgetting to land.** If you climb the neck excitedly and then just stop wherever, three days of work goes to waste. No matter how many boxes you cross, the finish line is always C. Accuracy of the landing beats flashiness of the journey.
