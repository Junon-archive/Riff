---
title: "Designing Your Original Solo — Chord Progression and Finding Your 'One Home' Position"
dayKey: "m3.w12.d1"
estMinutes: 50
i18nKey: "lesson.m3.w12.d1"
lang: en
---

# Day 1 — 11 Weeks Into One Song: Building the Chord Progression and Drawing Your Landing Map

## ① Theory / Explanation

Here's why we're doing this today. This is finally the last week. Over the past 11 weeks, we've really built up a lot — connecting the five pentatonic boxes, learning the blues ♭5 with bending and vibrato, chord-tone targeting, ii-V-I guide tones, the Dorian major 6th, the Mixolydian ♭7, and mode-switching across genres. But all of that has just been **scattered parts floating around in your head.** This week, we're gathering those parts into **<mark>one original solo, entirely yours.</mark>** Not a cover — a solo you actually composed.

Know what the most common mistake is when writing a real piece? **<mark>Starting by playing notes first.</mark>** Stack bricks without a blueprint and the house collapses. So today includes some time with the instrument set aside. First we lock in the **<mark>skeleton (chord progression)</mark>**, then draw a **map of where to land** on top of it.

Here's our song's progression. A as the center, eight bars, short and solid.

**Am7 | D7 | Am7 | D7 | A7 | D7 | Am7 | Am7**

Why build it this way? Because this progression has **<mark>Dorian and Mixolydian living inside it at the same time.</mark>** Let's look at it one piece at a time.

- **Am7 → the 3rd is C (♭3).** A minor color, centered on A. This is Dorian's home turf.
- **D7 → the 3rd is F#.** And surprisingly, this F# is **<mark>A's major 6th (♮6).</mark>** That's the sophisticated Dorian color tone we learned back in Week 9! Which means the instant you land on D7, the Dorian color kicks in automatically. Free bonus.
- **A7 → the 3rd is C#.** This is the twist. A moment ago it was minor with C (♭3) — but the instant it becomes A7, that 3rd jumps a half step up to **C# (major 3rd).** This is the identity of the Mixolydian we covered in Week 10.

Here's the core of it. **<mark>C (♭3) and C# (major 3rd) sit just one fret apart on the 3rd string</mark> (fret 5 → fret 6).** That one fret is the Dorian ↔ Mixolydian switch. Nudge one finger and the whole expression of the song changes. Today, you'll get comfortable with a **<mark>map that gathers every landing point — switch included — into one hand position.</mark>**

## ② Visual Reference

First, **<mark>today's key landing map.</mark>** All the 3rds you need to aim for when the chord changes are gathered here — C (Am7 landing · ♭3), F# (D7 landing = A's major 6th color), C# (A7 landing · major 3rd), and even the ♭7 color tone G. Get familiar with just the highlighted dots and you're already halfway through this week.

```json
{
  "id": "m3.w12.d1.original_solo_target_tones",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Original solo - key target tones (Dorian + Mixolydian composite)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "Composite (Dorian + Mixolydian)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

Second, the **<mark>"one home" position</mark>** where these landing points live. It's a combined fretboard overlaying A Dorian and A Mixolydian in one spot (frets 5-9). See how C (♭3) and C# (major 3rd) sit right next to each other on the 3rd string? Master this one spot and your hand won't wander for all eight bars.

```json
{
  "id": "m3.w12.d1.composite_position",
  "type": "scale_shape",
  "meta": {
    "title": "A composite position (Dorian + Mixolydian merged, frets 5-9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "scale": "A Dorian + A Mixolydian",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 92) — warm up your hands with a four-note sequence**
To the metronome at 92 (our song's tempo), run a four-note sequence within the "one home" position. Starting from the 6th string, four notes per string (e.g., 5·7·8·... then the next string) in sixteenth notes, going up and back down. Don't just memorize the up-and-down pattern — focus on <mark>the feel of "rolling it in groups of four"</mark>. Let your fingers settle naturally into the 5-9 fret zone.

```json
{
  "id": "m3.w12.d1.composite_position",
  "type": "scale_shape",
  "meta": {
    "title": "A composite position (Dorian + Mixolydian merged, frets 5-9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "scale": "A Dorian + A Mixolydian",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

**10–20 min · Brain training (locking in the landing map) — instrument down to start**
Look at the first map and memorize it out loud: "Am7 is C, D7 is F#, A7 is C#." Then pick up the guitar and call out chord names to yourself, no backing track. Say "Am7!" and fret C (3rd string, 5th fret), "D7!" and fret F# (2nd string, 7th fret), "A7!" and fret C# (3rd string, 6th fret). Confirming with your fingertips that **<mark>C and C# are just one fret apart</mark>** is today's highlight.

```json
{
  "id": "m3.w12.d1.original_solo_target_tones",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Original solo - key target tones (Dorian + Mixolydian composite)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "Composite (Dorian + Mixolydian)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

**20–40 min · Real-world improv (Am7-D7-A7 backing / 92 BPM)**
Find something like "A minor Dorian jam" or "A7 groove backing track" (slow tempo) on YouTube or an app — it doesn't have to match our exact progression, anything in the Am7/D7/A7 family works fine. Just one rule: **don't try to build a melody — <mark>just land long on that chord's 3rd every time the chord changes</mark>.** Today isn't about composing, it's about "walking the map."

**40–50 min · Record & reflect (recommended)**
With whatever recording tool you've got (a voice memo app works great), save just the last 30 seconds of your jam. Listen back and check one thing only: **<mark>was I on the 3rd the instant the chord changed?</mark>** If you were off, just note which chord you were late on. We'll fix that all week.

**Today's finish line:** Memorize the 8-bar progression, and fret all three landing notes (C·F#·C#) in the "one home" position within 3 seconds, eyes closed. Land on the 3rd successfully at least 8 times over the backing track as the chords change.

### Self-feedback checklist (today's focus: landing accuracy)
- [ ] **3rd-landing accuracy** — fretted Am7=C, D7=F#, A7=C# without mixing them up.
- [ ] **Color tone use** — landed while aware that D7's F# is A's major 6th (the Dorian color).
- [ ] **Vibrato stability** — (just a warm-up level today) added a light vibrato to a sustained landing note.
- [ ] **Rhythm timing** — the landing lined up exactly on the beat where the chord changed.

## ④ Tips / Common Mistakes

- **Playing notes before designing anything.** Today, the most important things are the 8-bar progression and the three landing notes. Skip this and jump straight to improvising, and you'll be lost all week. Write the progression on paper and stick it on your music stand.
- **Mistaking C and C# for the same note.** That one fret is the heartbeat of this song. Fret C# over Am7 and it clashes; fret C over A7 and it's bluesy but not really "landed." Distinguish the 3rd string's 5th vs. 6th fret precisely, based on the chord.
- **Trying to use all five boxes.** This week isn't a trip up and down the whole neck. The goal is to sing within the "one home" (frets 5-9). Narrowing your space is exactly what lets you compose.
- **Filling your warm-up with plain up-and-down runs.** Don't fall into the habit of just scaling up and down — make sure you're grouping it in fours. That's what leaves real phrase material in your hands.
