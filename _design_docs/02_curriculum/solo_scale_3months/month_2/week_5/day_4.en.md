---
title: "A Natural Minor Integration Jam — B and F as Color, Landing on C"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
lang: en
---

# Day 4 — Bringing It All Together: Pentatonic's 5 Notes + 2 Notes, One Singing Scale

## ① Theory / Explanation

Here's why we're doing this today. If we sum up everything we've done this week in one line: **we built two bridges — B (2nd) and F (6th) — into the pentatonic (5 notes), <mark>completing all 7 notes of A natural minor (A·B·C·D·E·F·G)</mark>.** Today, instead of treating those 7 notes separately, we're merging them into **<mark>one singing scale</mark>** and running it over an Am backing track like a real solo.

The core idea is still **<mark>division of roles</mark>.** The skeleton is the pentatonic's 5 notes (A·C·D·E·G), and B and F are the color — the connective passing tones between them. B flows up (A→B→C), F flows down (F→E), each smoothly linking the skeleton together. And every one of these flows eventually converges on one spot — **<mark>C (♭3), Am's 3rd landing point</mark>**, the same home base we've talked about for three months straight. Today there's just one thing to confirm for yourself: the feeling that **"the two added notes didn't make the scale more complicated — they actually made the landing smoother and more song-like."**

So today isn't about drills — it's about making **music.** Running straight up and down is still banned. Instead, mix the 3rd intervals, the four-note runs, and the B/F passing tones freely — but **<mark>every phrase must end by landing on C, wrapped up with vibrato</mark>.** Shaking the landing note with vibrato is what turns a scale exercise into "a song," right in that moment. This is the first checkpoint of the month, right before we move into the relative major/minor relationship (Am↔C) next week.

## ② Visual Reference

This week's result: the **<mark>complete A natural minor Box 1</mark>.** The pentatonic skeleton (white) + passing tones B and F (green) + the landing note C (green). All 7 notes gathered into one shape.

```json
{
  "id": "m2.w5.d4.a_natural_minor_box1_full",
  "type": "scale_shape",
  "meta": {
    "title": "A natural minor — Box 1 (pentatonic + added 2nd B & 6th F)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Today's integration lick. Measure 1 uses both **A-B-C** (the bridge going up) and **F-E** (the bridge coming down); measure 2 lets F flow through one more time, then **<mark>lands on C (♭3) with vibrato</mark>.**

```json
{
  "id": "m2.w5.d4.natural_minor_jam_lick",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "A natural minor jam lick — B & F as color, resolving to b3 (C) with vibrato",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 90)**
Set the metronome to 90 and run through the **<mark>complete A natural minor Box 1</mark>** once in 3rd intervals. Just don't settle on B or F as you pass them — let them flow: B up to C, F down to E. This is a warm-up that confirms this week's two directions in your body. Drop to BPM 80 if it clumps.

**10–20 min · Brain training (today's target = landing on C + the four B/F positions)**
Metronome off. Get the integration lick above into your hands, especially the final **<mark>C (3rd string, 5th fret) vibrato landing</mark>.** Vibrato is a gentle side-to-side shake of the wrist that makes the note "tremble." No need for a big shake — keep it even. Then fret all four B and F spots (B: 6/7, 1/7; F: 5/8, 2/6) with your eyes closed, confirming each one's resolution direction (B up to C, F down to E) once more.

```json
{
  "id": "m2.w5.d4.natural_minor_jam_lick",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "A natural minor jam lick — B & F as color, resolving to b3 (C) with vibrato",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20–40 min · Real-world improv (Am one-chord backing, 85–90 BPM)**
Put on an "Am backing track" and today, use the **<mark>complete 7 notes freely</mark>.** Two rules: ① B and F are passing tones only (no settling on them), ② **<mark>every phrase ends with a vibrato landing on C</mark>.** Snap together this week's building blocks (3rd-interval pairs, A-B-C, F-E) like Lego pieces and improvise a short 4-bar solo. It's fine to repeat the same thing — today's goal is simply the **first experience of a complete scale turning into a song in your hands.**

**40–50 min · Record & reflect (recommended)**
Record your 4-bar solo with any recorder. Listen back and check two things: ① **<mark>were there any spots where B or F was left floating, unresolved</mark>?** ② **was the final C vibrato even and steady (not shaky and uneven)?** If the vibrato wobbles, you're likely pressing with finger strength instead of your wrist. Slow down playback if you need to zoom in on the landing moment by ear.

**Today's done-when:** you can complete the integration lick at BPM 90 through the C vibrato landing, improvise a 4-bar solo in the jam with every phrase landing on C, and never leave B or F floating unresolved.

## ④ Tips / Common Mistakes

- **Falling back into up-and-down runs now that there are 7 notes.** More notes means a bigger temptation to "run through them all." But straight runs have been banned all week. Remember: B and F are just bridges connecting the skeleton — the skeleton is still the pentatonic's 5 notes.
- **Trailing off without landing anywhere.** If improvising feels intimidating and you stop on whatever note happens to come, your solo ends up sounding like "trailing off mid-sentence." The ending is always C, no exceptions. A clear landing makes even a short phrase sound complete.
- **Doing vibrato with finger strength.** Vibrato is a rotation of the wrist. Press hard with your fingers instead and the pitch wobbles unevenly and you tire out fast. Rest your thumb lightly behind the neck and rotate your wrist steadily, like turning a doorknob.
- **Overusing B and F at once.** Cram in too many passing tones together and the skeleton blurs, making it unclear "what key this even is." Use the bridges only when needed. A ratio of about 70% skeleton (pentatonic) to 30% color (B/F) is just right.
