---
title: "Vibrato Technique (Wrist vs. Finger) + Mapping ♭5 Across Every Box"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
lang: en
---

# Day 2 — Vibrato: Making a Note 'Sing,' Plus ♭5 Across the Whole Neck

## ① Theory / Explanation

Here's why we're doing this today. Yesterday you learned how to "create" ♭5 with a bend, right? But no matter how good the note you land on is, if it just cuts off flat and dead, it still sounds like a practice exercise. The last 1% that separates pros from amateurs is vibrato — the technique of subtly shaking a landing note to make it "sing." Today we're learning it properly.

There are two kinds of vibrato.

- **Finger vibrato (classical/narrow):** With the fretting fingertip, you shake very slightly **parallel to the string (along the neck), not sideways across it.** It's narrow and delicate. Used a lot in classical and jazz. But in electric blues, the width is often too small to really hear.
- **Wrist vibrato (blues/wide):** This is today's main event. Instead of shaking with your finger, you keep the fret held down and **rotate your wrist slightly, like turning a doorknob**, nudging the pitch up and back down repeatedly. It's essentially "repeating a tiny bend" — that's exactly why it comes right after yesterday's bending lesson. It's wide and full of presence — B.B. King, Slash, they all use this.

There are two control knobs: **speed** (fast/slow) and **width** (narrow/wide). The key is adjusting both to fit the moment.
- **Slow and wide** = aching, singing feel (ballads, long landing notes). Our default this week.
- **Fast and narrow** = tense, intense feel (up-tempo songs, high-gain tones).
- **Banned:** a "scared vibrato" where the speed wobbles unevenly. Like a steady heartbeat, the shake needs a **consistent rhythm.** At first, practice locked to the metronome, counting "up–down–up–down" in time.

And today's second mission. Yesterday we only looked at ♭5 in Box 1, but ♭5 is actually **hiding in every box across the whole neck.** No matter where you're improvising, you need to be able to instantly answer "where's the nearest blue note?" So today, we'll learn the ♭5 map for the whole neck, then practice **sliding or bending into those ♭5s** the way we learned yesterday, and topping it off with vibrato to fully 'express' each one.

## ② Visual Reference

Here's the ♭5 map for the whole neck. Between the root A notes, ♭5 = E♭ (highlighted in purple) sits once on each string. No matter which box you're in, the nearest purple dot is your local blue note.

```json
{
  "id": "m1.w4.d2.b5_neck_map_all_blocks",
  "type": "scale_shape",
  "meta": {
    "title": "A blues b5 map across the whole neck (all 5 boxes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 13,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 6, "fret": 17, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 6, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 13, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 8, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 16, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 17, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

Here's a vibrato expression phrase. Measure 1 slides from the 4th into ♭5 and sings that blue note with vibrato, then lands on ♭3 for another round of vibrato. Measure 2 layers vibrato onto the landing note after a full-step bend. All vibrato here is "slow and wide."

```json
{
  "id": "m1.w4.d2.vibrato_expression_phrase",
  "type": "tab",
  "meta": {
    "title": "Vibrato expression — slide into b5 + wide slow vibrato on landings",
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
        { "string": 5, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 6, "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "quarter", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 70) — vibrato isolation drill**
Set the scale aside for a moment and focus on vibrato alone. Fret the 3rd string 5th fret (♭3 = C) with your ring finger, and at 70 BPM, rotate your wrist like turning a doorknob — **"up (click) – down (click)"** — on a quarter-note cycle. Once it feels natural, double the speed to eighth notes. Also shift the width from narrow to wide. Keep checking that it's your **wrist** rotating, not your finger.

**10–20 min · Brain training (mapping ♭5 across the whole neck)**
Looking at the map above, work through strings 6 to 1, fretting each string's one ♭5 (purple dot) in order. Every time you fret one, lock in the location by saying "this is the blue note in this zone." Then close your eyes and find them: start with 5th string 6th fret and 3rd string 8th fret (the two Box 1 spots), and if you've got room, keep going through the other strings. Pass when you can fret 5 or more spots with your eyes closed.

```json
{
  "id": "m1.w4.d2.b5_neck_map_all_blocks",
  "type": "scale_shape",
  "meta": {
    "title": "A blues b5 map across the whole neck (all 5 boxes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 13,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 6, "fret": 17, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 6, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 13, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 8, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 16, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 17, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**20–40 min · Real-world improv (Am7 one-chord backing, 65–70 BPM) — expressing ♭5 through slide/bend**
Play the backing track and follow this rule: **always "enter" ♭5 via a slide or bend, and always finish landing notes with slow, wide vibrato.** Don't let a single note today cut off flat and dead. End each phrase landing on ♭3 (C) or the root (A) → sing it with wrist vibrato. Use the phrase above as your skeleton and vary it little by little.

```json
{
  "id": "m1.w4.d2.vibrato_expression_phrase",
  "type": "tab",
  "meta": {
    "title": "Vibrato expression — slide into b5 + wide slow vibrato on landings",
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
        { "string": 5, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 6, "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "quarter", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record 30 seconds, then listen back. Check: ① Is the vibrato shaking a nice, **consistent rhythm**, or is it uneven and scared-sounding? ② Did every landing note get vibrato, or did some just cut off? ③ Did ♭5 enter naturally via slide or bend? Slow down playback if you need to, so you can zoom in with your ear on the vibrato cycle.

**Today's finish line:** wrist vibrato at a consistent rhythm on the metronome at 70, both quarter-note and eighth-note speeds. Fret 5+ ♭5 spots across the whole neck with your eyes closed. Land the "slide/bend → ♭5 → landing vibrato" combo 4+ times over the backing track.

## ④ Tips / Common Mistakes

- **A "scared vibrato" shaking just with your fingers.** Shaking only your fingertip gives you no width and an uneven rhythm. It has to come from **wrist rotation.** Picture your forearm and wrist moving as one solid piece, turning a doorknob.
- **Uneven vibrato rhythm.** Vibrato is a regular wave in pitch. At first, always lock it to the metronome, counting "up–down" in beats. Once the cycle is consistent, then let it loosen up freely.
- **Just plunking ♭5 down flat-footed.** How you approach ♭5 matters. It only sounds bluesy if you **slide into it or push up into it with a half-step bend.** Just fretting it flatly makes it sound like a slip — a mistaken note.
- **Wearing yourself out trying to memorize the whole neck map at once.** Today, nail down just the two Box 1 spots (5th string 6th fret, 3rd string 8th fret) solidly. For the rest, a loose "ah, it's around there" familiarity is plenty for now — it'll naturally sink in from Week 5 onward.
