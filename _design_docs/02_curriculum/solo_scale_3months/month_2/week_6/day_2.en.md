---
title: "C Major 3rd-Interval Sequence — Landing on the Bright 3rd (E)"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
lang: en
---

# Day 2 — Leap Through C Major in 3rds, Land Softly on Bright E

## ① Theory / Explanation

Here's why we're doing this today: yesterday you confirmed that "C is already in our hands too." But if we stop at just confirming it, muscle memory quietly drags us right back to old A minor habits. So today we're going to plant a real, unmistakable identity for C major. And that identity is the bright 3rd — E.

99% of why a major sound feels "bright" comes down to this one 3rd (E). Minor lands on the dark b3 (C) and feels wistful; major lands on the bright 3rd (E) and feels radiant. But if we just run notes up and down like yesterday, E gets buried as "just one of seven passing notes." So today's weapon is once again the 3rd interval — skip the very next scale note and hop straight to the one after it.

Jumping in 3rds creates a little magic. Jump from C, you land on E; from D, you land on F; from E, you land on G — and every landing spot keeps landing right on a chord tone (C, E, G). The C→E jump in particular IS the core move of C major: going from root to bright 3rd. Today we're going to make your hands remember that C→E jump like a melody, and finish by attaching the feeling of stretching E out long on the landing.

## ② Visual Reference

This is the C major position. Same fretboard as yesterday, but today the labels are purely from C major's point of view. We've highlighted root C and today's star, the bright 3rd, E.

```json
{
  "id": "m2.w6.d2.c_major_shape",
  "type": "scale_shape",
  "meta": {
    "title": "C major position — root C & bright 3rd E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "scale": "C major (Ionian)",
    "tempoBpm": 84
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "6", "role": "scale" },
      { "string": 6, "fret": 7, "finger": 3, "label": "7", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "2", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "4", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "6", "role": "scale" },
      { "string": 3, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "4", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "6", "role": "scale" },
      { "string": 1, "fret": 7, "finger": 3, "label": "7", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

Here's today's main event — a C major 3rd-interval sequence climbing upward. C→E, D→F, E→G… hop, hop, hop, and finally stretch out and land on the bright 3rd, E.

```json
{
  "id": "m2.w6.d2.c_major_third_interval",
  "type": "tab",
  "meta": {
    "title": "C major 3rd-interval line resolving to bright 3rd (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 84
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "half", "technique": "vibrato", "label": "3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 84)**
With the metronome at 84, run the ascending 3rd-interval sequence from the 6th string up to the 1st. Two eighth notes make one "hop-skip" set. Play every C→E jump just a touch more clearly. If your fingers tangle, it's fine to drop to 80 for a bit and build back up.

**10–20 min · Brain training (today's target = E / bright 3rd)**
Turn off the metronome and hunt down only the E notes on the fretboard — 5th string 7th fret, and 2nd string 5th fret, just these two spots. Every time you fret one, call it out loud: "E!" and make sure you can clearly tell it apart from the neighboring 4th, F (2nd string 6th fret). Then spend 3 minutes fretting whatever notes you like and always resolving home to E. Every time you arrive at E, consciously stamp in the feeling of "bright."

**20–40 min · Real-world improv (C major one-chord backing / BPM 80–84)**
Put on a "C major backing track." One rule: only jump in 3rds, and always land on E to end a phrase. No adjacent stepping allowed — always skip one. Try adding a light vibrato when you land on E, and that radiant feeling really comes alive. This is your first taste of "landing on the bright 3rd."

**40–50 min · Record & reflect (recommended)**
Record 30 seconds, then play it back. Check: did the E you landed on stay steady and in tune, with no wobble? And did you accidentally scrape the middle note while jumping a 3rd? If you hear extra noise sneaking in, build the habit of lightly muting the strings you're not picking with the heel of your picking hand.

**Today's finish line:** Play the C major ascending 3rd sequence at BPM 84 all the way to the 1st string without breaking. Over the backing track, fill 8 bars using only 3rd jumps and finish with vibrato on E.

## ④ Tips / Common Mistakes

- **Landing only on C (the root) instead of E.** Root landings are safe, but they don't give you that "bright" flavor. Today is specifically about practicing landing on the 3rd (E) on purpose. Root feels solid; the 3rd feels radiant — feeling that difference in your body is today's goal.
- **Stopping on F (the 4th).** It's right next to E, so your finger keeps sliding one fret over — landing on F leaves the sound hanging, "unresolved." Build the habit of glancing at the fret just before you land.
- **Hitting the middle note along with the 3rd.** The whole point of a 3rd is leaving that middle note empty. Only the empty space brings out the sophisticated flavor of the jump. Play it stepwise and you're right back to yesterday's plain run.
- **Your whole hand wobbles when you jump.** Anchor your index finger (5th fret) and move only the other fingers. This matters especially for the C→E jump between the 3rd and 2nd strings — if your hand shakes there, your landing accuracy falls apart.
