---
title: "Connecting the Guide Tone Line — F→B→E, the Shortest Path"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
lang: en
---

# Day 2 — Connecting Three Notes Into a Line: The F→B→E Guide Tone Line

## ① Theory / Explanation

Here's why we're doing this today. Yesterday, the locations of F, B, and E got into your hands. But if you keep fretting these three notes as separate, isolated "dots," over a backing track it sounds less like music and more like a "fretting test." Plunk... plunk... plunk. Today we connect these three dots into a single **<mark>line</mark>**. This is the real guide tone line.

The secret lies in why yesterday's "home" position was set up the way it was. Let's look again.

- F = string 4, fret 3
- B = string 3, fret 4
- E = string 4, fret 2

See the magic here? **<mark>F (string 4, fret 3) → E (string 4, fret 2)</mark>** is just **one fret** apart on the same string. That's a half step! So when moving from G7 to Cmaj7, all you have to do is slide F down to E. This is the famous **<mark>F→E resolution</mark>** — G7's 7th (F) dropping a half step down to Cmaj7's 3rd (E), one of the prettiest voice leadings in jazz.

And the heart of it all, which we mentioned yesterday: the **<mark>B→E lead</mark>**. When you fret the 3rd, B, on G7, the ear already expects "next comes E, right?" Fill that expectation exactly with E, and it'll give the listener chills. Today's line is designed to etch both of these flows — the F→E half-step resolution and the B→E lead — into your hands and ears at the same time.

The approach follows our curriculum's philosophy exactly: **<mark>no simple up-and-down scale memorization.</mark>** Instead, we build the line with 3rd intervals and short connecting notes, but **each chord's measure always <mark>lands on that chord's 3rd</mark>.** We've specifically designed the timing so the 3rd rings out right at the moment the measure changes — the chord change itself.

## ② Visual Reference

First, here's a warm-up **<mark>diatonic 3rds sequence</mark>**. It climbs up C major grouped in 3rds, and the guide tones B, E, and F naturally pop out along the way. The highlighted notes are our targets.

```json
{
  "id": "m2.w8.d2.third_interval_warmup",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Diatonic 3rds warmup surfacing guide tones (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 0, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 0, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 1, "fret": 1, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A", "role": "scale" }
      ]}
    ]
  }
}
```

Now for today's main event: the **<mark>guide tone line</mark>**. Three measures = three chords. On the **first beat of each measure (the moment of the chord change), that chord's 3rd lands**, then a short connecting note carries you to the next 3rd. Pay special attention to how the F (string 4, fret 3) at the end of measure 2 **resolves by a half step** into the E (string 4, fret 2) on the first beat of measure 3.

```json
{
  "id": "m2.w8.d2.guide_tone_line",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "ii-V-I guide tone line (Dm7 F -> G7 B -> Cmaj7 E)",
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
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 76) — 3rds sequence**
Play the `3rd_interval` warm-up above at metronome 76, in eighth notes. Get used to the hand shape of moving in 3rds (back and forth between the lower and higher string), and give a slight extra emphasis whenever a highlighted note (B, E, F) comes up. This is your time to hear, with your own ears, that "<mark>moving in 3rds hides the guide tones inside</mark>."

```json
{
  "id": "m2.w8.d2.third_interval_warmup",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Diatonic 3rds warmup surfacing guide tones (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 0, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 0, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 1, "fret": 1, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A", "role": "scale" }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (finding the shortest F→B→E path)**
Turn off the metronome and connect just the **three landing notes** of the main line: F (string 4, fret 3) → B (string 3, fret 4) → E (string 4, fret 2). Your hand barely moves, right? All three notes fit within a handful of frets. Feel with your fingertips, especially, that **<mark>F→E is just one fret on the same string.</mark>** Close your eyes and fret these three notes in order without hesitation — that's a pass.

**20–40 min · Real-world feel — improv (Dm7-G7-Cmaj7 backing track / BPM 72–76)**
Play the backing track and run through the main line as-is a few times to get it into your body. Once it feels comfortable, start **changing just the connecting notes (the notes in between), while <mark>never touching the landing notes F, B, E</mark>.** For example, you can fill the middle of measure 1 with a different Dm7 note, but the end of the measure → first beat of the next measure must always land on the 3rd. "Bones are F·B·E, flesh is free" is today's improv rule.

```json
{
  "id": "m2.w8.d2.guide_tone_line",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "ii-V-I guide tone line (Dm7 F -> G7 B -> Cmaj7 E)",
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
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40–50 min · Record & reflect (recommended)**
Record 30 seconds, then play it back. Check two things: ① When the chord changed, did the 3rd **<mark>ring out exactly right</mark>**, or was it half a beat late? ② When measure 2's F moved into measure 3's E, did the half step **<mark>slide smoothly</mark>**, or did it cut off abruptly? If needed, slow down playback to zoom in on that seam with your ears.

**Today's completion criteria:** Play through all 3 measures of the main guide tone line at BPM 76 without breaking. Connect the three landing notes F→B→E with your eyes closed. Improvise over the backing track at least 4 times using "change the connecting notes, keep the landing 3rd fixed."

## ④ Tips / Common Mistakes

- **Changing even the landing notes.** If you shake up F, B, E in the name of "improvising," the whole line collapses. Today's contract is "flesh is free, bones (the 3rd) are fixed." If the bones wobble, the music can't stand up.
- **Cutting the F→E half step off abruptly.** Since it's the same string and just one fret, try not lifting your finger off completely — just shift the weight instead, so it connects smoothly. When the half-step resolution sounds like it's sliding, that's a pro sound.
- **Hesitating on B.** Prep string 3, fret 4 (B) with your ring finger ahead of time. If you "rest" your finger on it right before the change to G7, you won't be late at the moment of the chord change.
- **Skipping the warm-up.** The 3rds sequence isn't just a general warm-up — it's the groundwork that lays down today's line's hand shape ahead of time. Once the 3rd interval feels natural to your hand, the connecting notes between guide tones will flow naturally too.
