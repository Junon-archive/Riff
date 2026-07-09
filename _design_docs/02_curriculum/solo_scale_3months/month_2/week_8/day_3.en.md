---
title: "Improvising 3rd Landings — Arriving Exactly on the Chord Change Beat"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
lang: en
---

# Day 3 — It's About "When": Landing the 3rd Right on the Chord Change Beat

## ① Theory / Explanation

Here's why we're doing this today. Yesterday, the F→B→E line got into your hands. One thing worth noticing: a lot of people **fret the right note and still get a wrong-sounding result.** Why? Because the **<mark>timing</mark>** is off. If the chord has already changed to Cmaj7 but you fret E half a beat late, that half beat still rings a note meant for G7 — and it sounds like a stumble to the ear. Fretting too early feels awkward too.

So today's topic isn't which note — it's **<mark>"when."</mark>** There's exactly one goal: **<mark>make the 3rd ring out on the exact beat (the downbeat)</mark> the chord changes.** F the instant it's Dm7, B the instant it's G7, E the instant it's Cmaj7. Get this right, and your solo suddenly sounds like it's "having a conversation with the chords." That feeling of being perfectly in sync with the backing track.

There are two secrets to etching this into your body.

- **<mark>Prep ahead:</mark>** One or two beats before the chord changes, already "rest" your finger on the next 3rd. If you wait to see it and then move, you're always late. Your hand has to get there first.
- **<mark>Don't be afraid of space:</mark>** After fretting the 3rd, **it's totally fine to pause for a moment.** In fact, leaving space after the landing makes that 3rd ring out clearly, and buys you time to prep the next chord's 3rd. Three accurate landings are a hundred times better than cramming in notes and missing all your timing.

Today we'll also tackle a fast ii-V (Dm7 and G7 each getting two beats within one measure). Since the chords change twice as fast, your timing sense gets sharper. Don't worry — the only notes you're fretting are still just F, B, and E.

## ② Visual Reference

First, a **<mark>fast ii-V-I landing timing drill</mark>**. Within one measure, Dm7 (beats 1–2) and G7 (beats 3–4) each pass by in two beats. **The 3rd arrives exactly on the first beat** of each chord: F (beat 1) → B (beat 3) → E on the first beat of measure 2. The eighth notes in between are connecting notes, but the highlighted landing notes must always land exactly on the beat.

```json
{
  "id": "m2.w8.d3.landing_timing",
  "type": "tab",
  "meta": {
    "title": "Fast ii-V-I landing on the beat (Dm7/G7 two beats each)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "eighth", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 3, "duration": "eighth", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 2, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "quarter", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

Second, a **<mark>landing drill using space</mark>**. This time, we do the opposite — we don't cram in notes. Fret each chord's 3rd right on the first beat, follow it with a short connecting note, then leave **space with a rest**. This space buys time to prep the next 3rd, and makes the landing note ring out clearly.

```json
{
  "id": "m2.w8.d3.arrival_with_space",
  "type": "tab",
  "meta": {
    "title": "Land the 3rd, then leave space (arrival drill with rests)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 2, "duration": "half", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 76) — 3rd intervals + the feel of prepping ahead**
Loosen up your hands with yesterday's 3rds sequence, but add one rule today: while your fingers are fretting one phrase, **<mark>look ahead at the next landing note.</mark>** Even while your hand is still here, build the habit of having your eyes already on the next F (or B, or E). This "looking ahead" is 80% of good timing.

**10–20 min · Brain training (fretting the downbeat landing out loud)**
Metronome at 76, quarter notes. Fret F (beat 1) ... B (beat 1) ... E (beat 1) in time with the click, but **<mark>stomp your foot down</mark> the instant you fret each note.** Get your hand, the click, and your foot all landing on the same point. Start in quarter notes; once it feels comfortable, speed it up so the chord changes every two beats. If your landing lines up exactly with the click, that's a pass.

**20–40 min · Real-world feel — improv (Dm7-G7-Cmaj7 backing track / BPM 70–76)**
Start with the **space drill** above, over the backing track. "Land the 3rd → rest → prep the next 3rd." The silence might feel scary, but that silence is on your side. Once it feels comfortable, move on to the **fast landing line (the first JSON)** and fill in more notes. The rule stays the same: **connecting notes are free, but <mark>the first beat of every chord change is always the 3rd</mark>.** If you feel like you were late, give yourself more space on the next chord to get ready.

```json
{
  "id": "m2.w8.d3.arrival_with_space",
  "type": "tab",
  "meta": {
    "title": "Land the 3rd, then leave space (arrival drill with rests)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "half", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 2, "duration": "half", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record 30 seconds. Play it back and track just one thing with your ears: **<mark>does the moment the chord changes line up with my 3rd</mark>?** If you find a spot that's off, slow down playback just for that chord and check "how late/early was I?" If you have a habit of being late, correct it by practicing resting your hand on the note one beat before that chord arrives.

**Today's completion criteria:** F, B, E landings line up exactly with the click at metronome 76. Land "downbeat 3rd" across all three chords in a row, over the backing track, at least 6 times. Complete the space drill from start to finish without wavering.

## ④ Tips / Common Mistakes

- **Landing half a beat late.** The most common issue. The cause: "moving only after hearing the chord change." The only fix is **prepping ahead** — your finger has to already be on that 3rd before the change happens. If you're reacting by ear, you'll always be late.
- **Not tolerating space, cramming it full.** If silence feels awkward and you stuff in random notes, all your timing falls apart. Space is a skill. Three accurate landings beat thirty off-time notes.
- **Losing everything when it speeds up.** If a fast ii-V flusters you, you end up giving up even on the 3rds. When this happens, drop all the connecting notes and just **fret the three 3rds** on the beat. Music stands even on bones alone.
- **Using only your hands, not your foot or the click.** Feeling the beat with a big muscle group (your foot) dramatically improves landing accuracy. Don't try to catch the beat with just your fingertips.
