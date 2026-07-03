---
title: "Blue Note (♭5) Basics + Accurate-Pitch Bending"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
lang: en
---

# Day 1 — ♭5: The One Note That Turns Pentatonic into Blues

## ① Theory / Explanation

Here's why we're doing this today. Over the past three weeks, we've chewed through A minor pentatonic pretty thoroughly — and honestly, it's a very "safe" scale. Land anywhere in it and you can't really go wrong. But that's exactly the problem. Since nothing's wrong, it can feel **flat.** That gritty, "this sounds like real blues" color just isn't there yet. And one single note creates that color: **♭5 (E♭, relative to A)** — the blue note.

♭5 isn't officially part of the scale. It's a **deliberately dissonant half-step wedged between the 4th (D) and the 5th (E).** But when you brush past this crooked little note, your ear goes "wait, that's tense... ah, resolved" — and that tension-to-release is the heartbeat of the blues. So starting today, we're adding one rule: **♭5 is a passing tone, not a destination.** Sit on it, and it just sounds wrong. It only comes alive when you **glide through it** — 4 → ♭5 → 5 — or slide into it and immediately exit to ♭3 (C) or the root (A).

And now for today's real main event. We've been quietly *using* bends all along without ever formally teaching them, right? Today we fix that. A bend isn't just "pushing a string." It's **pushing it up to an exact target pitch.** Just remember these three keys:

1. **Reference first, then match by ear.** Before you bend, play the target note (say, the 5th, E) somewhere else on the neck first — **ping it and plant that pitch in your ear.** Then bend up until it matches that exact height. Your ear is the judge, not your eyes. If the target note and the bent note sound like they're sitting at the "same pitch," that's a success.
2. **Push with backup fingers behind you.** When you bend with your ring finger, line your middle and index fingers up right behind it on the same string, and **push together as a trio.** Struggling with just one finger makes the pitch inaccurate and tires your hand fast. Sharing the load is the real secret to accuracy.
3. **Know half-step vs. whole-step.** A half-step bend is a small push; a whole-step (full) bend goes further — about one extra fret's worth. Today's favorite combo: **push the 4th (D) up just a half step → you get ♭5 (E♭).** In other words, you can *create* the blue note purely through bending. Push it a full step and you land on the 5th (E).

To sum up: today we're finding where ♭5 lives in Box 1, and learning to **sound it out through accurate bending.**

## ② Visual Reference

Here's A blues scale Box 1. Two new ♭5 spots (highlighted in red) have joined the five pentatonic notes — 5th string 6th fret, and 3rd string 8th fret. Those two are today's stars.

```json
{
  "id": "m1.w4.d1.a_blues_scale_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A blues scale — Box 1 (pentatonic + b5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Here's today's mini bending lesson phrase. Measure 1 trains you to **play the reference (5th, E) first → then bend the 4th (D) a full step to match that pitch.** Measure 2 has you **bend the 4th just a half step to create the ♭5 blue note**, release it to land on ♭3, then finish with vibrato on the root.

```json
{
  "id": "m1.w4.d1.accurate_bend_phrase",
  "type": "tab",
  "meta": {
    "title": "Accurate bending — full bend to 5 (match reference) & half bend to b5",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 70)**
With the metronome at 70, run A blues scale Box 1 ascending in sixteenth notes, once through. One thing's different from last week — **every time you pass through ♭5 (5th string 6th fret, 3rd string 8th fret), never sit on it — just brush past it.** Let "4 – ♭5 – 5" flow out in one breath. If it gets muddy, drop to 65.

**10–20 min · Brain training (today's target: the two ♭5 spots)**
Turn off the metronome. In Box 1, find and fret **only the ♭5 notes** — just two spots: 5th string 6th fret, 3rd string 8th fret. Every time you fret one, say out loud, "this is a passing tone, it can't stay long," and immediately move to the neighboring 5th or ♭3 as part of the motion. Pass when you can find both spots with your eyes closed.

**20–40 min · Real-world feel — improv (Am7 one-chord backing, 65–70 BPM) + bending accuracy focus**
Pull up an "Am7 blues backing track slow" on YouTube or an app. Today's mission is one thing only: **bending accuracy.** Repeat the phrase above over the backing track, and every time you do the full bend (4→5), **first ping the 2nd string 5th fret (E) to plant the target pitch in your ear**, then match your bend precisely to that height. When pushing with your ring finger, line up your middle and index behind it and push as a trio. Mix in the half-step bend (4→♭5) too, and try "making" the blue note yourself.

**40–50 min · Record & reflect (recommended)**
Record just 30 seconds of the bending phrase with any recorder you've got (a phone voice memo is fine). Listen back and check one thing: **did the bent note land exactly on the target pitch?** If it fell short (pitch too low), your finger strength wasn't enough; if it overshot, you pushed too far. Slow down the playback if you need to, so you can zoom in with your ear on the exact moment the bend arrives.

**Today's finish line:** find both ♭5 spots in Box 1 with your eyes closed. Match the full bend (4→5) precisely to the reference E, 5+ times. Successfully create ♭5 with a half-step bend.

## ④ Tips / Common Mistakes

- **Sitting on ♭5.** This is the #1 mistake today. The moment you linger on ♭5, it turns into a "wrong note." Always brush past it or exit immediately to ♭3, 5, or the root. Keep the tension short, and make the release definite.
- **Bending with just your fingers, straining.** A bend isn't powered by finger strength — it's powered by **rotating your wrist and forearm.** Twist your wrist slightly like turning a doorknob, and back it up with two extra fingers behind, pushing as a trio. Push with one finger alone and your pitch will never land right.
- **Pushing without deciding on a target first.** If you don't decide "how far" by ear beforehand, your pitch will be all over the map every time. Whole step or half step — plant the destination in your head first, then push. Playing the reference note first is 90% of bending accuracy.
- **Thumb position.** When bending, hook your thumb slightly over the top of the neck instead of keeping it flat behind — that gives you leverage and makes the push far more stable. Sticking rigidly to classical form (thumb centered behind the neck) will wear your wrist out.
