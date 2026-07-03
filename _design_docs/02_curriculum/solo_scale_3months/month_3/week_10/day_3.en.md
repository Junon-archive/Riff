---
title: "Mixolydian Position 2 + Widening the Neck by Connecting Forms (Position Shift)"
dayKey: "m3.w10.d3"
estMinutes: 50
i18nKey: "lesson.m3.w10.d3"
lang: en
---

# Day 3 — Not Getting Stuck in One Spot: Connecting Two Forms with Position 2 and a Slide

## ① Theory / Explanation

Here's why we're doing this today: for two days you've handled C# and G nicely inside Position 1 (around the 5th fret). But if you solo only inside that one box, no matter how pretty it sounds, it still ends up reading as "wandering around in a small space." Real soloists treat the whole neck like their own home. So today, we open up the **second form (Position 2)**, and learn how to **connect the two forms with a slide.**

Position 2 places the root A on the **4th string, 7th fret.** It covers roughly frets 7-11. The note names of the scale are still identical here — **A B C# D E F# G.** But because the hand shape is different, the same C# (major 3rd) and G (♭7) show up in different spots. Sounds confusing, right? But there's a trick. **If you remember them by note name, the form can change and you won't get lost.** Instead of memorizing "5th string, 4th fret," memorize "this is C# (major 3rd)" — and then you'll be able to find C# by feel even in Position 2. Yesterday's brain training was built exactly for this.

And today's key technique: **the position shift (slide).** The best way to smoothly connect two forms is to **slide your finger straight along one string.** Cut abruptly and teleport, and it shows; connect with a slide, and it feels natural — "oh, we're up there now." Today's connection lands beautifully. **A slide on the 1st string from the 5th fret (root A) to the 9th fret (C#)** — in other words, sliding up from Position 1's root lands you exactly on Position 2's **major 3rd C#.** You arrive at your target note the very moment you shift positions. Two birds, one stone.

Don't forget the blue note either. Position 2 also has the blue note C (♭3). For example, bend **the 4th string, 10th fret (C)** up a half step, and you get **C# (major 3rd) at the 4th string, 11th fret.** Even as the form moves up the neck, the formula "blue note → half-step resolution to major 3rd" carries right along with it.

Today's goal: get Position 2 into your hands, go back and forth between the two forms with a slide on the 1st string, and land on C# at the end of the shift.

## ② Visual Reference

First, **A Mixolydian Position 2.** The root A is at the 4th string, 7th fret. Get the locations of the major 3rd C# (red) and ♭7 G (red) into your eyes here too. Same note names as Position 1, just a different shape.

```json
{
  "id": "m3.w10.d3.a_mixolydian_pos2",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 2 (root on 4th string, frets 7-11)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 6, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 3, "label": "6", "role": "scale" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 3, "label": "2", "role": "scale" },
      { "string": 4, "fret": 11, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 11, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

Second, a **connection map** linking the two forms. The roots (A), major 3rd C# (red), and ♭7 G (red) of Position 1 and Position 2 are scattered together across the neck. The root at the 4th string, 7th fret is the "shared link" between the two forms. And the 1st string slide from the 5th fret (A) to the 9th fret (C#) is today's travel route.

```json
{
  "id": "m3.w10.d3.position_connection_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Connecting Position 1 & 2: shared root and slide path (1st string 5->9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

Third, today's **position shift lick.** Bar 1 plays around in Position 1 and hangs tension with ♭7 G; bar 2 rides **a slide on the 1st string from the 5th fret (A) to the 9th fret (C#)** up into Position 2. It finishes by half-step bending Position 2's blue note C (4th string, 10th fret) to resolve on C# (11th fret), capped with vibrato.

```json
{
  "id": "m3.w10.d3.position_shift_lick",
  "type": "tab",
  "meta": {
    "title": "Position shift lick: Pos1 -> slide -> Pos2, land on major 3rd",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 9, "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 9, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 10, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 4, "fret": 11, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 90) — Position 2 4-note sequence**
Take the 4-note sequence you ran in Position 1 yesterday and run it in **Position 2** today. Ascend in groups of four within the 7-11 fret zone. Your hand will still feel unfamiliar, so it's fine to start at 80. Stay color-aware every time you pass C# (6th string 9th fret, 4th string 11th fret, 1st string 9th fret).

**10–20 min · Brain training (linking C# across forms)**
Looking at the connection map, practice fretting **Position 1's C# (3rd string, 6th fret)** → then moving your hand to **Position 2's C# (1st string, 9th fret).** Go back and forth between two C#s that share a name but sit in different spots. Then do the same with G (4th string 5th fret ↔ 5th string 10th fret). Finally, repeat the 1st string 5→9 slide 10 times on its own, making sure the slide lands precisely on the 9th fret (C#) every time.

**20–40 min · Real-world feel (A7 vamp / 80–90 BPM) — form-shifting mission**
Put on an "A7 vamp backing track," with today's mission: **move from Position 1 → (slide) → Position 2 at least once within a single phrase.** Play around down below, slide up, land on C# up top, then slide back down again. It's fine if the movement feels choppy at first. Pick a set slide point and repeat it, and it'll get smoother and smoother.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds with any recorder. Check: (1) did the slide stop exactly on the target fret (9) — not falling short or overshooting, and (2) after switching forms, did you land well on C#? Slow down playback and zoom in with your ear on the moment the slide arrives.

**Today's completion criteria:** Pass the Position 2 4-note sequence. Go back and forth fretting C# and G in both forms. Land on C# at least 5 times after shifting with the 1st string 5→9 slide.

## ④ Tips / Common Mistakes

- **The slide doesn't stop on target.** The whole point of a shift slide is **stopping exactly on that fret.** At first, watch your target fret (9) with your eyes and go slowly; once it's ingrained, rely on hand feel. Overshoot to the 10th fret and you get D instead of C#.
- **Forgetting note names when the form changes.** Moving up to Position 2, it's easy to freeze up thinking "wait, what note is this again?" Remember by **note name (C#, G, A)**, not by location. This is exactly where yesterday's brain training pays off.
- **Settling into just one form.** You keep running back to the comfortable Position 1. Today, deliberately start up top, or force half your phrases to happen in Position 2. Discomfort is what widens the neck.
- **Slide pressure.** If your finger pressure on the string weakens while sliding, the sound cuts out mid-way. Keep firm pressure all the way to your destination. That said, press too hard and your finger locks up, killing your speed — balance matters.
