---
title: "Intensive Training: 3rd-Interval (Skip) Patterns"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
lang: en
---

# Day 2 — Skipping a Note: The Taste of 3rd Intervals

## ① Theory / Explanation

Here's why we're doing this today. Yesterday's 4-note sequences broke up some of that autopilot habit, right? But 4-note sequences still move "next note, next note, next note" — step by step — so the sound still comes out flat, like walking up stairs. That real solo feeling, the one that actually "sings," comes from **hopping** between notes. That's exactly what a 3rd interval is.

A 3rd interval isn't complicated at all. It's just **skipping the very next note in the scale and jumping to the one after that.** Not A to C, but A to D. Not C to D, but C to E. Think of it as a "skip one" game. Do this, and even the same five-note pentatonic scale suddenly sounds a lot slicker. Whether it's B.B. King or Slash, most of those licks that grab your ear start from exactly this kind of 3rd jump.

And there's a hidden bonus here. As you jump by 3rds through our scale — A lands you on D, C lands you on E — you'll notice **C (♭3) and A (root)** keep showing up as landing points. In other words, 3rd-interval training secretly plants the sense of "landing on a target note" all by itself. Yesterday you burned C into your eyes — today, we're going to make your fingers remember it in your body.

## ② Visual Reference

First, the same box from yesterday — same shape, same positions. One more look as the "launchpad" for today's 3rd jumps.

```json
{
  "id": "m1.w1.d2.pentatonic_box1_ref",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (reference)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 65
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

Here's today's main event — a 3rd-interval ascending sequence. You'll hop up two notes at a time (eighth notes). Notice how the landing points C and A are highlighted?

```json
{
  "id": "m1.w1.d2.third_interval_seq",
  "type": "tab",
  "meta": {
    "title": "3rd-interval ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 65
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
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 65)**
Spend 2 minutes loosening up with yesterday's 4-note sequence, then move straight into the 3rd-interval ascending pattern. Two eighth notes make one "hop-skip" set. Your fingers will probably tangle up at first — that's normal. Focus first on **keeping the jump itself unbroken**, before worrying about landing exactly on the click.

**10–20 min · Brain training (today's target = C·A / ♭3·root)**
Every time you jump a 3rd, say the landing note's name out loud: "A-D, C-E, D-G…" like that. When you land specifically on C or A, raise your voice a notch to emphasize it. Syncing your hands, your mouth, and your ears is the real point of today's session.

**20–40 min · Real-world feel — one-chord improv (Am backing track, BPM 65–70)**
Put on a backing track and follow this rule: **today, never play two adjacent scale notes in a row — jump only by 3rds.** Feels restrictive, right? That constraint is exactly what pushes your hands onto a new path. And whenever you end a phrase, make sure to land on C (♭3) and stop there. Remember that "click into place" feeling — that's your first taste of landing on a chord tone.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds and play it back. Check one thing: **does each landing note come out clean and in tune, with no wobble?** If you catch a little "shhk" noise from brushing a string mid-skip, build the habit of lightly muting the strings you're not picking with the side of your picking-hand palm.

**Today's finish line:** run the 3rd-interval ascending sequence at BPM 65 unbroken all the way to the 1st string, and over the backing track, fill 8 bars using nothing but 3rd jumps, finishing on C.

## ④ Tips / Common Mistakes

- **Accidentally hitting the note you're supposed to skip.** The whole point of a 3rd is **leaving that middle note empty.** That empty space is what makes the jump feel like a jump. Fill it in, and you're right back to yesterday's 4-note sequence.
- **Your whole hand wobbling on the jump.** Keep your index finger anchored at the 5th fret and move only the other fingers. If your whole hand is scrambling around, your landing accuracy falls apart.
- **Letting go of the landing note too fast.** Once you land on C or A, linger there just a beat longer. That extra 0.2 seconds is what separates "singing" from "practicing."
- **Only doing the ascending pattern.** If you have extra time, try the same pattern descending too. But today, ascending accuracy comes first — we'll bring descending in on Day 3, together with speed.
