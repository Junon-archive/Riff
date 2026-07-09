---
title: "Intro to Mixolydian + Two Identity Notes: the Tension of ♭7 (G) and the Resolution of the Major 3rd (C#)"
dayKey: "m3.w10.d1"
estMinutes: 50
i18nKey: "lesson.m3.w10.d1"
lang: en
---

# Day 1 — Two Notes That Make a Dominant Chord "Sing": ♭7 G and the Major 3rd C#

## ① Theory / Explanation

Here's why we're doing this today: last week, we colored minor chords with the Dorian ♮6. This week, it's the other side's turn — the **dominant 7th chord**. Put on an A7 backing track and just scrape through A minor pentatonic... it's not wrong, exactly, but it's a little flat, right? That "sounds bluesy but kind of bland" feeling. Today's scale is what flips that switch: **A Mixolydian**.

A Mixolydian = **A B C# D E F# G**. It's the major scale with exactly one note lowered a half step — the 7th (major 7th G# drops to minor 7th G). So this scale's whole identity comes down to just two notes.

- **Major 3rd = C#** — the note that announces "this is major." It's bright, and when you land on it, your ear goes "ah, we're home" — it's the **resolution**.
- **Minor 7th (♭7) = G** — Mixolydian's signature. This note tells the chord "you're not just major, you're **dominant** — you want to go somewhere," giving it that itchy **tension**.

The key is the **relationship** between the two. You hang tension with G (♭7), then release it with C# (major 3rd). If you've been living only in minor pentatonic territory, you probably **never touch this C# (major 3rd)** at all. So everything comes out sounding dark, like minor. New rule starting today: **over A7, always use C# as a landing note.** The instant you arrive on C#, your solo stops sounding like "blues impersonation" and starts being "real dominant."

And one spoonful of blues seasoning. We'll slip in the minor 3rd, **C (♭3)**, as a **blue note**. C isn't an official scale member — it's the crooked note sitting a half step below C# (the major 3rd). Brush past it, or bend it up a half step to resolve **C → C#**, and you get that famous "gritty" bluesy Mixolydian sound. Same rule as Week 4: **a blue note is a waypoint on the road to the major 3rd, not the destination.** Camp out on it and it's a wrong note; pass through it and it's a great lick.

Today, the goal is to get **Position 1** comfortable in your hands, and be able to find G (♭7) and C# (major 3rd) inside it with your eyes closed.

## ② Visual Reference

First, here's A Mixolydian **Position 1**. The root A sits at the 6th string, 5th fret. Pay close attention to the two kinds of highlights — **the major 3rd C# (resolution, green)** and **the ♭7 G (tension, yellow)**. These two colors are today's stars.

```json
{
  "id": "m3.w10.d1.a_mixolydian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 1 (major 3rd C# & b7 G)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 4, "label": "2", "role": "scale" },
      { "string": 5, "fret": 4, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 2, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 4, "finger": 1, "label": "6", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 1, "label": "2", "role": "scale" },
      { "string": 3, "fret": 6, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 4, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 4, "label": "2", "role": "scale" }
    ]
  }
}
```

Second, a **tension-resolution map** of the two identity notes. G (♭7, tension) and C# (major 3rd, resolution) are placed side by side within one hand position, plus the blue note C (♭3) layered in between. See how C (3rd string, 5th fret) resolves up just one fret to C# (3rd string, 6th fret)? That's today's picture to burn into your ear.

```json
{
  "id": "m3.w10.d1.identity_tension_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Identity notes: b7(G) tension -> major 3rd(C#) resolution, with b3(C) blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

Third, today's bluesy lick. Bar 1 starts on the root, then **half-step bends the blue note C up to resolve on C# (major 3rd)**; bar 2 **hangs tension on the ♭7 G, then settles down onto C#**, finishing with vibrato. This one lick is a summary of everything we covered today.

```json
{
  "id": "m3.w10.d1.bluesy_mixolydian_lick",
  "type": "tab",
  "meta": {
    "title": "Bluesy Mixolydian lick (b3 blue note -> major 3rd, b7 tension -> 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_line",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 90) — waking up the shape with a 4-note sequence**
With the metronome at 90, run Position 1 ascending in groups of four sixteenth notes. No just scraping up and down the block. Push upward "four notes at a time": A-B-C#-D / B-C#-D-E … like that. Every time you pass through C# (major 3rd), mentally stamp it: "this is the bright one!" If your hand tenses up, drop to BPM 80.

```json
{
  "id": "m3.w10.d1.a_mixolydian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 1 (major 3rd C# & b7 G)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 4, "label": "2", "role": "scale" },
      { "string": 5, "fret": 4, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 2, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 4, "finger": 1, "label": "6", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 1, "label": "2", "role": "scale" },
      { "string": 3, "fret": 6, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 4, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 4, "label": "2", "role": "scale" }
    ]
  }
}
```

**10–20 min · Brain training (targets = G and C#)**
Metronome off. In Position 1, find just **♭7 G** in its two spots (4th string 5th fret, 2nd string 8th fret) and fret them, saying "this is tension" out loud each time. Next, find just **major 3rd C#** in its two spots (5th string 4th fret, 3rd string 6th fret), saying "this is resolution." Finally, fret one G, then move to the nearest C# — repeat this move 5 times. You pass when you can fret G and C# with your eyes closed within 3 seconds.

```json
{
  "id": "m3.w10.d1.identity_tension_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Identity notes: b7(G) tension -> major 3rd(C#) resolution, with b3(C) blue note",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 4,
    "dots": [
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

**20–40 min · Real-world feel (A7 one-chord backing / 80–90 BPM)**
Put on an "A7 vamp backing track" or "A7 groove jam." One mission: **always land on C# (major 3rd) whenever you end a phrase.** Feel free to play around like pentatonic in the middle. But the period at the end of every sentence is always C#. If you've got room, weave in today's bluesy lick (C→C# half-step bend) two or three times. Success is when landing on C# gives you that "click" feeling of locking into the backing track.

```json
{
  "id": "m3.w10.d1.bluesy_mixolydian_lick",
  "type": "tab",
  "meta": {
    "title": "Bluesy Mixolydian lick (b3 blue note -> major 3rd, b7 tension -> 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_line",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "color", "highlight": true },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 6, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your last jam with any recorder (voice memo app works fine). Listen back and check just one thing: **did my phrase endings really stop on C#, or did they habitually drift to the root A or the ♭3 C?** If they didn't stop on C#, that's the habit to fix tomorrow.

**Today's completion criteria:** Fret G and C# individually in Position 1 with your eyes closed. Land phrases on C# at least 8 times over the A7 backing. Successfully resolve the blue note C→C# with a half-step bend.

## ④ Tips / Common Mistakes

- **The C# (major 3rd) skip.** The most common one. Minor pentatonic muscle memory makes you unconsciously skip C# and stay stuck on C (♭3). That makes it sound like plain minor, not dominant. Today, consciously plant C# at the end of your sentences.
- **Camping out on the blue note C.** C is a waypoint to the major 3rd, not a final stop. Bend it up a half step to resolve to C#, or just brush past it. Linger too long and it becomes a "wrong note."
- **Scattering ♭7 G everywhere.** G is a strong tension note, and if you hold it as a landing note too long, it feels floaty and unresolved. Use G as a light seasoning of tension, then quickly release it to C# or the 5th, E.
- **Chasing tempo.** Even if 90 feels frustratingly slow, today is all about burning in the positions and colors. Fretting slowly while saying "C#... G..." out loud will do more for this whole week than fast, sloppy scraping.
