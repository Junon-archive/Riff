---
title: "C Chord Tones (C·E·G) — Mapping the Whole Neck, Spotting the 3rd (E)"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
lang: en
---

# Day 2 — This Time It's C's C·E·G: Planting the 3rd (E) on the Neck

## ① Theory / Explanation

Here's why we're doing this today — you mapped Am yesterday, so now it's time to map its partner chord, **C major**. Why C, specifically? Because Am and C are actually **relative keys that share the same notes.** You already got a taste of this back in Week 6, remember? Today we're revisiting it through the lens of "chord tones."

C major's skeleton notes are **C (root) · E (3rd) · G (5th)**. Yesterday, Am was A·C·E. If you're quick, you'll already see it: **C shows up in both chords.** In Am, C was the 3rd (♭3); in the C chord, it's the root (R). Same note, different job. This turns out to be the secret passage for gliding freely between Am and C — we'll dig into that properly tomorrow (Day 3). For today, just focus on drawing the C chord-tone map.

Today's real star is the 3rd, **E**. Just like C made Am sound "minor" yesterday, E is what brightens up C into sounding "major." So we're marking E in green as today's landing target. Fun fact: this E is the exact same note that was the 5th of Am yesterday. Same fret, different role once the chord changes — get a feel for that in your body today.

Once more for emphasis: this isn't speed practice. It's **brain training for recognizing positions.** At a slow BPM, all you're doing is drawing a clear map: "there's an E here, and there's one there too."

## ② Visual Reference

This maps C's chord tones (C·E·G) across the whole neck (frets 0–12). The green highlight is **E**, the 3rd — today's landing target.

```json
{
  "id": "m2.w7.d2.c_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major chord tones (C-E-G) across the neck, 3rd (E) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 8, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 7, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 8, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

In open position, pick out just C·E·G and run them up and down as a **1-3-5 arpeggio**. With open strings mixed in, it rings out beautifully. The 3rd (E) is highlighted as the target.

```json
{
  "id": "m2.w7.d2.c_arpeggio_1_3_5",
  "type": "tab",
  "meta": {
    "title": "C major arpeggio 1-3-5 (C -> E -> G), open position",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 0, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 66)**
With the metronome at 66, run the open C arpeggio above in eighth notes, up then down. Call out the scale degree (R-3-5) in your head with every note. Since open strings are mixed in, notice the flow of your picking hand moving ahead to the next string while your left hand gets a breather.

**10–20 min · Brain training (today's target = E / 3rd)**
Turn off the metronome and find just the **E (3rd)** spots on the map. At least three: string 4 fret 2, string 2 fret 5, string 1 fret 0 (open). Call out "E!" out loud every time you fret one. Once comfortable, close your eyes and go random: E → E → E. You pass if your hand reaches a different E position within 3 seconds. Repeating to yourself that **the E that was Am's 5th yesterday is today's 3rd of C** makes the map in your head stick harder.

```json
{
  "id": "m2.w7.d2.c_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major chord tones (C-E-G) across the neck, 3rd (E) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 8, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 7, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 8, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**20–40 min · Real-world feel — C one-chord backing (BPM 66–70)**
Put on any "C major backing track slow" you find. Rule: **only C·E·G.** Whenever you stop, **land on E.** Don't just stay in open position — reach for the E's around frets 5–9 too (string 2 fret 5, string 3 fret 9).

**40–50 min · Record & reflect (recommended)**
Record 30 seconds with any recorder. Check point: **was the note you landed on really E?** Ending on E over a C chord should feel bright and settled, like it clicks into place. If that feeling's missing, you probably landed back on the root, C. Slow down playback to double-check the last note on the fretboard.

**Today's goal:** Play the open C arpeggio up and down at BPM 66 without stumbling, and fret all three E (3rd) positions with your eyes closed.

## ④ Tips / Common Mistakes

- **The habit of always landing on the root (C).** The root is safe but flat. You need to settle on the 3rd (E) for the "major brightness" to come alive. Deliberately aim for E when you wrap up a phrase.
- **Open-string noise.** If the unused open 6th and 4th strings hum along during the open C arpeggio, lightly mute them with the side of your picking hand or a spare left-hand finger.
- **Trying to memorize yesterday and today separately.** A·C·E and C·E·G overlap a lot (C, E). Instead of memorizing from scratch, think "same notes, different roles" — you already know half this map.
- **Reaching for speed.** Stay locked at 66 today too. If positions still feel fuzzy, dropping to 55 is fine. Clarity always comes first.
