---
title: "Locking In Pentatonic Box 2 + Sliding the Box 1↔2 Bridge"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
lang: en
---

# Day 1 — Moving One Room Up the Fretboard: Box 2, and Building the Bridge

## ① Theory / Explanation

Here's why we're doing this today. Last week, we didn't just memorize Box 1 (fret 5) with our hands — we burned it into our ears. Here's the thing: if you only ever dig into Box 1, you're likely to end up trapped in that narrow 5-to-8-fret cage. That's the real reason improv feels so stifling — having the freedom to *choose* your notes requires a wider fretboard. So this week, we're moving up the neck. Today's the first new home: **Box 2 (frets 7–10).**

```json
{
  "id": "m1.w2.d1.pentatonic_box2",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 2 (connects up from Box 1)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

Here's where most people slip up, though: they try to memorize Box 2 the same way — running up and down, la-la-la-la. That just gives you two cages instead of one. What we actually want isn't a cage — it's a **highway**. A smooth lane change from Box 1 straight into Box 2. And the tool that builds that road is the **slide**.

Here's the key idea: Box 1 and Box 2 sit right next to each other and **share notes**. Take the 4th string, for example — Box 1's A (fret 7, the root) and Box 2's C (fret 10, the ♭3) live on that same string. So if you just **slide** the finger that's fretting A all the way up to fret 10, you land in Box 2 automatically — and that landing note is our forever-target, **C (the ♭3)**. One slide does two jobs at once: moving boxes *and* landing on the target. Today, we're building that one bridge until it's rock solid.

## ② Visual Reference

First, here's the map of Box 2. Feels unfamiliar, right? The root A sits on the 4th string, fret 7, and the green C's (the ♭3) are scattered throughout. These C's are your landing pads from here on out.

```json
{
  "id": "m1.w2.d1.pentatonic_box2",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 2 (connects up from Box 1)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

Now for today's main dish. Starting in Box 1, you **slide** the A on the 4th string (fret 7) up to fret 10, crossing over into Box 2. See how you land right on C (the ♭3)? At the end, you land on the higher C inside Box 2 and finish it off with vibrato.

```json
{
  "id": "m1.w2.d1.box1_to_box2_slide",
  "type": "tab",
  "meta": {
    "title": "Box 1 -> Box 2 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "slide", "slideToFret": 10, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 70)**
With the metronome at 70, run through Box 2 in eighth notes, once up and once down — just to get familiar. The goal isn't memorizing the up-and-down pattern; it's **getting the lay of this new land**. Call out the root A (4th string, fret 7) out loud each time — "A!" — so your hand learns exactly where this box's center is. This warm-up is the only place today where up-and-down runs are allowed.

**10–20 min · Brain training (today's target = C / ♭3, and the slide bridge)**
Metronome off. Just repeat **the one key move** from the connecting line above: fret the A on the 4th string, fret 7, with your index finger → slide up to C at fret 10. Do this slide 20 times. Two things to watch: ① Stop **exactly** at fret 10 so the C rings out clean. ② Don't let up the pressure on the string while sliding (ease off and the sound cuts out). You pass once you can land dead-on at fret 10 with your eyes closed.

```json
{
  "id": "m1.w2.d1.box1_to_box2_slide",
  "type": "tab",
  "meta": {
    "title": "Box 1 -> Box 2 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "slide", "slideToFret": 10, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20–40 min · Real-world feel (Am one-chord backing track, BPM 70)**
Put on an "Am backing track slow." Only one rule: **start in Box 1, cross into Box 2 using today's 4th-string slide, then land and stop on C (the ♭3) inside Box 2.** Don't worry about fancy phrasing yet — if the single journey "Box 1 → bridge → Box 2 → land on C" flows without a hitch, today's a total win. Once that feels natural, try it in reverse: start in Box 2 and slide back down into Box 1 (C at fret 10 → A at fret 7).

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of a jam that includes the connecting line, with any recording tool (a phone voice memo works fine). Listen back and check just one thing: **did the slide's landing note (C) come through clean and defined, or did it blur together?** If it blurred, your slide speed is too fast. Tomorrow, try easing off the speed a touch right before you land.

**Today's finish line:** Fret Box 2's root A (4th string, fret 7) with your eyes closed. Land accurately on C at least 3 times while going back and forth between Box 1 and Box 2 via the 4th-string A→C slide.

## ④ Tips / Common Mistakes

- **Turning the new box into another "up-and-down cage."** If you only ever run Box 2 up and down, you've just added a second cage. Today's real goal isn't the box itself — it's the **bridge between boxes**. Get a rough feel for the positions, then spend most of your time on the slide connection.
- **Letting up pressure mid-slide.** If your finger lifts off the string while sliding, you get a "blip" and the sound cuts out. Move like you're pressing an iron across fabric — keep steady pressure on the string the whole way. That's the exact difference between a slide and just "moving your hand."
- **Overshooting or undershooting the landing fret.** You need to stop exactly at fret 10 for the C to ring true. It's fine to check the fret visually at first, but the real goal is confirming the landing **by ear**. If the pitch is right, your hand has stopped in the right place.
- **Cutting the landing note short.** Remember from last week? Once you land on C, stay there for at least one beat and sing it with vibrato. A new box doesn't change the rule of landing — no matter where you go on the neck, **you always end on a chord tone**.
