---
title: "Relative Keys — Same Shape, Just Move Your Center from A to C (Dual-Key Degree Labels)"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
lang: en
---

# Day 1 — Same Hands, Just Move Your Mind from A to C

## ① Theory / Explanation

Here's why we're doing this today: your hands already know the answer — it's just your head that hasn't caught up yet. Last week you really dug into A natural minor, right? That same fretboard shape, that same fingering — you can use it for C major starting today, without moving a single finger. Why? Because A minor and C major share <mark>the exact same seven notes (A B C D E F G)</mark>. They're called "relative keys" for a reason. The notes are 100% identical. The only thing that changes is <mark>which note you feel as "home" (the tonal center)</mark>.

Think of it like an apartment complex. Same building, same everything — if you call Building A "home," that's A minor; if you call Building C "home," that's C major. The building itself (the fretboard shape) never changes — only which door you walk through when you head home. In Am, you land at <mark>the dark b3, C</mark>. In C major, you land at <mark>the bright 3rd, E</mark>. Today's the day we memorize both of these addresses in our fingers.

So from today on, we're going to <mark>read every label in both keys at once</mark>. Take the note C: in C major, it's the R (home); in A minor, it's the b3. That's why the labels are marked as (C degree / Am degree). Get used to seeing how the exact same dot on the fretboard plays a completely different role depending on your perspective. Nail this, and next week's chord-tone targeting becomes almost effortless.

## ② Visual Reference

Same fretboard (5th-fret position), one single shape. Labels are marked as (C major degree / A minor degree). See <mark>the two tonal centers</mark>? We've highlighted C (bright view = R, dark view = b3) and C major's bright 3rd, E.

```json
{
  "id": "m2.w6.d1.relative_dual_center_shape",
  "type": "scale_shape",
  "meta": {
    "title": "Same shape (A minor = C major) — dual-degree labels, centers C & E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C (R/b3)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E (3/5)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C (R/b3)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E (3/5)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C (R/b3)", "role": "target", "highlight": true }
    ]
  }
}
```

And here's a short example to hear "same shape, different landing" with your own ears. Measure 1 plays around with the same notes and then resolves home to A (Am center); measure 2 <mark>uses the exact same fingers and resolves to C instead (C major center)</mark>. Listen for how the mood of the sound shifts.

```json
{
  "id": "m2.w6.d1.same_shape_two_centers",
  "type": "tab",
  "meta": {
    "title": "Same shape, two centers — resolve to A (Am) vs resolve to C (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "center_shift_demo",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C (b3 in Am)", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B (2)", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A (R)", "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E (5)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D (4)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C (b3)", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "A = R(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C (R in C major)", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A (6)", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G (5)", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "F (4)", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E = 3(C)", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D (2)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = R(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 76)**
With the metronome at 76, run through the whole fretboard shape above using 3rd intervals. No simple up-and-down runs allowed — always skip one note and jump a 3rd instead. It's the exact same hand shape you built last week. Don't chase speed today; this is just time to confirm <mark>"this shape already lives in my hands"</mark>.

**10–20 min · Brain training (same fretboard, switch center A↔C)**
Turn off the metronome, keep the shape exactly as-is, and switch only what's happening in your head. First, for 30 seconds, <mark>think of A as home</mark> — fret whatever notes you like, then resolve to A (6th string 5th fret, 4th string 7th fret). Then for 30 seconds, <mark>think of C as home</mark> — play around the same way, then resolve to C (6th string 8th fret, 3rd string 5th fret, 1st string 8th fret). Every time you land, say it out loud: "this is Building A, this is Building C." You pass once you can feel the mood of the sound shift even though your hands never change.

**20–40 min · Real-world improv (Am ↔ C switching backing track / BPM 70–76)**
Search "Am to C backing track" or "relative major minor jam" and put one on. The rule: when the chord is Am, land on C (b3); when it's C, <mark>land on E (the bright 3rd)</mark>. Never change your hand shape — the only thing that changes is where you stop. That back-and-forth feeling between the two landing notes is everything today.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of that last jam with any recording app (a phone voice memo works fine). Listen back and check just one thing: <mark>when you land on E in the C section, does it actually sound "bright"</mark>? Does it feel like a different color than landing on C in the Am section? If you're not sure, slow down playback a little and loop just the landing moments.

**Today's finish line:** With your eyes closed, switch between the A-center and C-center on the same fretboard shape and land accurately on the target notes (C, E, A). Over the backing track, switch landing notes with the chord changes for 8 bars.

## ④ Tips / Common Mistakes

- **Trying to change the shape.** The moment you think "it's C major, so I need a different form," today's whole lesson falls apart. The whole point is changing nothing at all. Keep reminding yourself: your hands stay put — only your ears and your landing spot move house.
- **Trying to feel A and C as home at the same time.** That just makes the sound feel unmoored. Pick one home at a time. Lock onto A/C during the Am section, and only C/E during the C section.
- **Rushing past the bright 3rd, E.** This E is literally C major's identity. It sits right next to F, the b6 (2nd string 6th fret), so it's easy to mix up — but landing on F gives you that same ungrounded sound. Make sure your fingers can tell E and F apart without hesitation.
- **Only reading the dual-degree labels with your eyes.** Every time you fret a note, say both names out loud: "C is the b3 in A minor, the root in C major." Your mouth needs to memorize it too — that's what lets it pop out naturally when you improvise.
