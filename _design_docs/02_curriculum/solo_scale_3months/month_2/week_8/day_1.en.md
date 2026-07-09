---
title: "ii-V-I Guide Tone Concept + Locking In F·B·E"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
lang: en
---

# Day 1 — When the Chord Changes, Nail Just One Note: Guide Tones F·B·E

## ① Theory / Explanation

Here's why we're doing this today. Over the past seven weeks, you've mapped chord tones (1, 3, 5) across the fretboard. But the moment a backing track starts flipping through chords, your hands freeze, right? You're thinking "wait, what chord is this, where do I put my finger" — and by the time you figure it out, the beat's already gone. The reason is that when the chord changes, **you're trying to track all five notes at once**. Your brain just can't keep up with that.

So here's a cheat code jazz players have been using for a hundred years: **guide tones**. You grab just one note per chord — the **3rd**. Why the 3rd, of all things? Because the 3rd is the note that decides whether a chord is major or minor — its whole character. The root is in every chord, so it's kind of flat and generic. The 5th overlaps most of the time too. But the 3rd is the chord's "facial expression." Nail just the 3rd, and your ear immediately goes "ah, that's this chord."

This week we're conquering a progression that shows up everywhere — jazz, pop, ballads, you name it: the famous **ii-V-I**. In C major, that's **Dm7 → G7 → Cmaj7**. Here's the 3rd — the guide tone — of each chord:

- Dm7's 3rd = F (out of D–F–A–C, that's the "F")
- G7's 3rd = B (out of G–B–D–F, that's the "B")
- Cmaj7's 3rd = E (out of C–E–G–B, that's the "E")

So this week, you're not memorizing an entire scale — just these three notes: **F → B → E**. Dm7 means F, the instant it's G7 means B, the instant it's Cmaj7 means E. Land just these three notes right on the beat, and people will hear "this player actually knows the chords."

And here's a little spoonful of magic to plant today: **G7's B wants to flow into Cmaj7's E.** That's the heart of ii-V-I. That feeling of tension (G7) resolving into release (Cmaj7) — we'll be etching this B→E pull into your ear all week long. For today, though, let's just get the **locations** of these three notes into your hands.

## ② Visual Reference

First up, today's main map. All three chords' roots and 3rds are gathered within a single hand position (frets 2–4). The highlighted notes are the guide tones. **F is on string 4, fret 3. B is on string 3, fret 4. E is on string 4, fret 2.** These three spots are our "home base" for the week.

```json
{
  "id": "m2.w8.d1.guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "ii-V-I guide tones home shape (Dm7 F / G7 B / Cmaj7 E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 0, "label": "Dm7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "finger": 3, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 0, "label": "G7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 4, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 1, "label": "Cmaj7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "finger": 2, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
    ]
  }
}
```

Second, those same F, B, and E notes show up all over the neck. We've scattered several positions here so that no matter where you're improvising, you can instantly find "where's the nearest F (or B, or E) to my hand right now?" Today, don't try to memorize all of them — just get a feel for "ah, there's another one over there."

```json
{
  "id": "m2.w8.d1.guide_tone_positions",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Guide tones F/B/E across the neck (multiple positions)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 3, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 1, "fret": 1, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 6, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 0, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 2, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 4, "fret": 2, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
      { "string": 1, "fret": 0, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 76) — Warming up your sense of the 3rd**
With the metronome at 76, fret just the three guide tones in the "home" position, alternating in quarter notes: F (string 4, fret 3) → B (string 3, fret 4) → E (string 4, fret 2), one note per click. Every time you fret one, say it out loud: "F! B! E!" Attaching the note names to your voice is the whole point of today's warm-up.

```json
{
  "id": "m2.w8.d1.guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "ii-V-I guide tones home shape (Dm7 F / G7 B / Cmaj7 E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 0, "label": "Dm7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "finger": 3, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 0, "label": "G7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 4, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 1, "label": "Cmaj7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "finger": 2, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
    ]
  }
}
```

**10–20 min · Brain training (instantly finding F, B, E across multiple positions)**
Turn off the metronome. Looking at the second map, spot **just the F's** with your eyes — three positions (string 4 fret 3, string 1 fret 1, string 2 fret 6) — and fret each one. Then do the same for **just B**, then **just E**. The point is finding the shortest path from "nearest spot → next spot" for each note. Finish by closing your eyes and fretting the three "home" spots — F, B, E — within 3 seconds. That's a pass.

```json
{
  "id": "m2.w8.d1.guide_tone_positions",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Guide tones F/B/E across the neck (multiple positions)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 3, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 1, "fret": 1, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 6, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 0, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 2, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 4, "fret": 2, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
      { "string": 1, "fret": 0, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
    ]
  }
}
```

**20–40 min · Real-world feel — improv (Dm7-G7-Cmaj7 backing track / BPM 70–76)**
Find and play a "ii V I backing track C major slow" video or app. Just one rule: **don't do anything else — every time the chord changes, hold the 3rd (F/B/E) of that chord, played from the "home" position, for a long note.** Forget about melody, forget about rhythm — you're only building one reflex: "chord change = fret the 3rd." It's totally fine if you're off. Today's goal is locking in the locations.

**40–50 min · Record & reflect (recommended)**
Record just 30 seconds of your last jam with any recording app (a voice memo app works fine). Listen back and check just one thing: **did the moment the chord changed roughly line up with the moment you fretted the 3rd?** If you were late, feel free to drop the BPM to 65 tomorrow. We'll nail the exact timing on Day 3.

**Today's completion criteria:** Fret the "home" F, B, E with your eyes closed within 3 seconds. Successfully land the 3rd on chord changes at least 8 times over the backing track.

## ④ Tips / Common Mistakes

- **Trying to track all five notes.** Today it's just the 3rd. Forget about the root, 5th, and 7th completely. Nail the 3rd, and the rest will fall into place naturally throughout the week.
- **Memorizing positions without note names.** If you only memorize "string 4, fret 3," you won't be able to find the other F's elsewhere on the neck. Always attach the label — "this is F." The name is what connects the whole neck together.
- **Mixing up B and E.** B (string 3, fret 4) and E (string 4, fret 2) have similar hand shapes, so it's easy to confuse them at first. Etch the direction into your body: B is "higher string, higher fret," E is "lower string, lower fret."
- **Rushing the tempo.** Even if 76 looks slow, today locking in the locations is everything. Fretting slowly while calling out the names beats fretting fast and sloppy — and it'll pay off for the whole week.
