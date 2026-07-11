---
title: "Am Chord Tones (A·C·E) — Mapping the Whole Neck, Spotting the 3rd (C)"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
lang: en
---

# Day 1 — Mapping Where Am's A·C·E Hide All Over the Neck

## ① Theory / Explanation

Here's why we're doing this today — time for a little confession. You've had the pentatonic box in your hands for six weeks now, right? But if your improv still feels like it's "only playing inside the box," there's one reason: **you don't yet know where <mark>the chord's actual skeleton notes</mark> live across the whole neck.**

Every chord boils down to three notes as its skeleton. For Am, that's **<mark>A (root) · C (♭3) · E (5th)</mark>**. We call these three notes "chord tones." The instant Am rings out in a backing track, these three notes land beautifully no matter where you play them. The problem is, you only know them in one spot — Box 1. So today, we're scattering A·C·E **<mark>across the whole neck</mark>, from the 6th string to the 1st,** and drawing the full map.

Let's clear up one misunderstanding first. This is **not** sweep-picking speed practice. The goal isn't to rip through it fast — it's **<mark>brain training to recognize positions</mark>**: "oh, that's a C here, and that's a C there too." That's why the BPM stays very slow all day today. Speed has never once been the star of this curriculum.

And today's real star is **<mark>C (♭3)</mark>**. The 3rd is <mark>the note that decides a chord's expression</mark>. A and E stay the same whether the chord is major or minor, but it's C that makes this chord "minor." So we're marking C in green as your **landing candidate (target)** going forward. If you can put your finger on all three C spots with your eyes closed, today's a total win.

## ② Visual Reference

This is a map of Am's chord tones (A·C·E) across the whole neck (frets 0–12). The green highlight is **C**, the 3rd — that's <mark>today's landing target</mark>.

```json
{
  "id": "m2.w7.d1.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (A-C-E) across the neck, 3rd (C) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

Now, at the 5th-fret position (Box 1's home), pick out just A·C·E and run them up and down as a **<mark>1-3-5 arpeggio</mark>**. The 3rd (C) is highlighted as the target. Get a feel for the skip as you jump between 3rds.

```json
{
  "id": "m2.w7.d1.am_arpeggio_1_3_5",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Am arpeggio 1-3-5 (A -> C -> E), 5th position",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 66)**
With the metronome at 66, repeat the 1-3-5 arpeggio above in eighth notes, up then down. Make sure two eighth notes ("da-da") land crisply on each click. The goal isn't speed — it's **<mark>saying the scale degree (R-3-5)</mark> in your head as you fret each note.** Mouthing it silently is totally fine.

**10–20 min · Brain training (today's target = C / ♭3)**
Turn off the metronome and find just the **<mark>C (♭3)</mark>** spots on the map. At least three: string 5 fret 3, string 3 fret 5, string 1 fret 8. Call out "C!" out loud every time you fret one. Once you're comfortable, close your eyes and go random: "C, next C, next C" — you pass if your hand reaches a different C position within 3 seconds. If you've got extra time, do the same with the three E (5th) spots.

```json
{
  "id": "m2.w7.d1.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (A-C-E) across the neck, 3rd (C) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

**20–40 min · Real-world feel — Am one-chord backing (BPM 66–70)**
Put on any "Am backing track slow" you find. Just one rule: **<mark>use only the three notes A·C·E.</mark>** Passing tones (the pentatonic's D and G) are off-limits today. Instead of just noodling around with three notes, whenever you feel like stopping, **<mark>land on C</mark>** — and try picking a different position each time.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your jam with any recorder you've got (a voice memo app is fine). Listen back and check just one thing: **<mark>was the note I landed on really C?</mark>** If it's unclear, slow down playback and re-locate the last note on the fretboard. If the ending note trailed off vague and mushy, hold it a little longer next time so it rings out.

**Today's goal:** Play the 1-3-5 arpeggio up and down at BPM 66 without stumbling, and fret all three C (♭3) positions with your eyes closed.

## ④ Tips / Common Mistakes

- **Slipping back into box habits.** If you catch yourself running the pentatonic up and down during improv without meaning to, that's the "three notes only" rule breaking. Feeling restricted is normal — that constraint is exactly what glues your ear to the chord tones.
- **Letting the 3rd (C) slide by like just a passing note.** C is what makes Am sound "minor." When you land on it, play it a touch stronger, hold it a touch longer. Burn it into your ear starting today, and the rest of the week gets a lot easier.
- **Reaching for speed.** Even if 66 feels painfully slow, don't bump it up. This is map-drawing, not a speed run. If your positions are still fuzzy, going fast just cements bad habits in your hands.
- **Settling into just one position.** Don't just stay comfortable at the 5th fret — deliberately reach for the C's near the 2nd fret and 10th fret too. The wider your map, the freer your improv becomes.
