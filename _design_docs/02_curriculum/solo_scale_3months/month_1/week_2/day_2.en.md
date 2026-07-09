---
title: "Locking In Pentatonic Box 3 + Sliding the Box 2↔3 Bridge"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
lang: en
---

# Day 2 — The Third Home: Box 3, and Your Second Bridge

## ① Theory / Explanation

Here's why we're doing this today. Yesterday, while building the Box 1↔2 bridge, you probably felt it: "oh, the fretboard really does connect room by room." But two boxes still only cover about half the neck. Today we're climbing one more level, up to **<mark>Box 3 (frets 9–13)</mark>.** Once this box feels familiar, your playground stretches all the way to the middle of the neck (around fret 12).

Box 3 has a friendly face waiting for you: the root A sits right on the **<mark>5th string, fret 12</mark>.** Fret 12 is dead center on the fretboard — the spot with two inlay dots. Super easy to spot by eye. That actually makes Box 3 surprisingly easy to memorize — lock in <mark>"fret 12 = A"</mark> and everything else falls into place around it.

```json
{
  "id": "m1.w2.d2.pentatonic_box3",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 3 (connects up from Box 2)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 9,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

Now, today's bridge. Yesterday you slid A→C on the 4th string. Today's Box 2↔3 connection uses the **2nd string (B string)** instead. Fret Box 2's A (2nd string, fret 10) and **<mark>slide up to fret 13</mark>** — the landing note is C (the ♭3) again. Another target landing. Here's the fun part: no matter which box you're in, the note we're chasing is always the same C. Only the position on the neck changes — **<mark>the principle of "landing on the chord's 3rd" never changes</mark>, not once, across all three months.** Today's about confirming that principle again, this time in Box 3.

## ② Visual Reference

Here's the map of Box 3. First, burn this into your eyes: the root A sits at the <mark>5th string, fret 12 — dead center on the fretboard</mark>. The green C's (the ♭3) are at 4th string fret 10 and 2nd string fret 13.

```json
{
  "id": "m1.w2.d2.pentatonic_box3",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 3 (connects up from Box 2)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 9,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

Here's today's connecting line. You run up through Box 2, then **<mark>slide the 2nd string's A (fret 10) up to fret 13</mark>**, entering Box 3. The landing note — C (the ♭3)! At the end, you land back on that C inside Box 3 and sing it out with vibrato.

```json
{
  "id": "m1.w2.d2.box2_to_box3_slide",
  "type": "tab",
  "meta": {
    "title": "Box 2 -> Box 3 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "quarter", "technique": "slide", "slideToFret": 13, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 72)**
Metronome at 72, run through Box 3 once up and once down in eighth notes. Before you start, fret **<mark>the A at 5th string, fret 12</mark>** with your index finger and say "this is home base" out loud three times. Get in the habit of eyeballing those two inlay dots at fret 12, and you'll never get lost in Box 3 again. Same rule as before — up-and-down runs are only for this warm-up.

**10–20 min · Brain training (today's target = C / ♭3, the 2nd-string bridge)**
Metronome off — just repeat **<mark>the 2nd string's A (fret 10) → C (fret 13) slide</mark>** 20 times. Same move as yesterday's 4th string, but this time on the thinner 2nd string. Thin strings slide easier, so it's easy to overshoot. Focus on stopping **exactly** at fret 13. Then alternate between Box 3's two C spots (4th string fret 10, 2nd string fret 13), calling out "C! C!" as you fret them. You pass once you can find every C in Box 3 with your eyes closed.

**20–40 min · Real-world feel (Am one-chord backing track, BPM 70–72)**
Put on a backing track. Rule: **hang out in Box 2, then <mark>use the 2nd-string slide to climb into Box 3 and land on C (the ♭3)</mark>.** If you've got room to spare, chain yesterday's Box 1↔2 bridge with today's Box 2↔3 bridge and go for the full climb — **<mark>Box 1 → Box 2 → Box 3</mark>**, all in one go. That's already half the neck traveled. Always end by landing on C.

```json
{
  "id": "m1.w2.d2.box2_to_box3_slide",
  "type": "tab",
  "meta": {
    "title": "Box 2 -> Box 3 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "quarter", "technique": "slide", "slideToFret": 13, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record 30 seconds, then play it back. Check: did the 2nd-string slide land precisely on fret 13, or did it slip to 12 or 14? Slides on thin strings are prone to pitch wobble, so use your ear to confirm <mark>the landing note "locks in" with the Am backing track</mark>.

**Today's finish line:** Fret Box 3's root A (5th string, fret 12) with your eyes closed. Land accurately on C at least 3 times while going back and forth between Box 2 and Box 3 via the 2nd-string A→C slide. (Bonus, if you have room) Successfully climb Box 1 → 2 → 3 in one continuous run.

## ④ Tips / Common Mistakes

- **Not using fret 12 as your anchor.** Most people who get lost in Box 3 simply aren't looking at the fret-12 inlay. Two dots dead center on the fretboard = A. That one anchor pulls the whole box into place. Use your eyes actively here.
- **Sliding too fast on the thin string.** The 2nd string has lower tension, so your hand can overshoot right past fret 13. Tap the brakes gently just before you land — be even more careful than you were on the 4th string yesterday.
- **Assuming the target changes when the box changes.** It doesn't. Whether you're in Box 1, 2, or 3, Am's 3rd is always **C**. Only the location changes — the note you're chasing stays the same. That consistency is your compass for improv.
- **Rushing the connection before the position sticks.** If Box 3's root position still feels fuzzy and you jump straight to connecting it, things will fall apart later. Treat "locking in Box 3's root" as today's minimum bar — the connection is a bonus.
