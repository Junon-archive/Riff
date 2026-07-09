---
title: "Blues Phrasing — 3rd Intervals + ♭5 Passing Tone + Bend/Vibrato"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
lang: en
---

# Day 3 — Turning Scale into Phrase: Melting ♭5 In

## ① Theory / Explanation

Here's why we're doing this today. Over the past two days, we've gathered all the ingredients: where ♭5 lives (Day 1), bending (Day 1), vibrato (Day 2). But no matter how good the ingredients are, they're just sitting in the fridge until you actually cook something. Today, we cook these ingredients into a single **phrase** — a musical sentence. This is where real improvisation actually begins.

The backbone of blues phrasing is the **3rd interval** we've been drilling for the past three weeks straight. Remember — don't crawl along to the next-door note, hop around instead. Today, we thread ♭5 into that as a passing tone. There's a classic formula: descending, you slide down chromatically — **5th (E) → ♭5 (E♭) → 4th (D).** The instant these three notes fall together, the sound turns thick and gritty. About 80% of blues licks come out of this one fragment. The key, again, is **not lingering on ♭5.** It's only a passing tone if you brush right through it.

```json
{
  "id": "m1.w4.d3.blues_phrasing_map",
  "type": "scale_shape",
  "meta": {
    "title": "A blues Box 1 — phrasing material (3rds + b5 passing)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

And a phrase needs **punctuation.** Think of a bend as the **exclamation point (!)** in the middle of a sentence, and vibrato as the **period (.)** at the end. You develop the story with 3rds, then punch a bend in the middle to push the emotion up once (!), then land on ♭3 or the root and close the sentence with vibrato (.). With this flow — "develop → exclamation point → period" — even the same 5–6 notes become **music.**

Today's goal is one single thing: engrave the 3-measure phrase below into your body so deeply that you can **hum it with your voice.** The key is memorizing it as a "song," not as finger exercise. What your hands memorize doesn't come out in improv — only what your ears memorize does.

## ② Visual Reference

Here's the ingredient map for the phrase — 3rd-interval stepping stones (scale notes), the ♭5 passing tone (purple), and the ♭3 landing point (green), all on one board.

```json
{
  "id": "m1.w4.d3.blues_phrasing_map",
  "type": "scale_shape",
  "meta": {
    "title": "A blues Box 1 — phrasing material (3rds + b5 passing)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

Here's today's centerpiece — a 3-measure blues phrase. Measure 1 = **5 → ♭5 → 4 chromatic descending passing tones** + landing on ♭3. Measure 2 = **development via ascending 3rd intervals.** Measure 3 = punching the **♭5 exclamation point with a half-step bend**, landing on ♭3, and closing with a vibrato period.

```json
{
  "id": "m1.w4.d3.blues_phrase_full",
  "type": "tab",
  "meta": {
    "title": "Blues phrase — 3rd intervals + b5 passing + bend/vibrato punctuation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 80)**
Run A blues scale Box 1 in 3rd intervals, once ascending and once descending. That's one notch faster than last week, at 80. Touch ♭5 only lightly, as a passing tone between the 3rd-interval jumps. If it gets muddy, drop to 75.

**10–20 min · Brain training (memorizing the phrase as a "song")**
Turn off the metronome and get the 3-measure phrase above into your hands, very slowly. Focus especially on whether the "5-♭5-4" chromatic descent in measure 1 flows smoothly, and whether the half-step bend (4→♭5) in measure 3 hits the exact pitch. Now here's the part that really matters — **put the guitar down and hum the phrase out loud with your voice.** If you can hum it, your ears have memorized it. That's today's pass bar.

```json
{
  "id": "m1.w4.d3.blues_phrase_full",
  "type": "tab",
  "meta": {
    "title": "Blues phrase — 3rd intervals + b5 passing + bend/vibrato punctuation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20–40 min · Real-world improv (Am7 one-chord backing, 75–80 BPM)**
Play the backing track and start by repeating the phrase above exactly. Once it feels comfortable, try changing **just one measure out of the three at a time.** Keep the descending passing tone in measure 1, but move the 3rd-interval development in measure 2 to a different string, or swap the measure 3 landing from ♭3 to the root. Only two rules: **① ♭5 stays a passing tone (brush past it) ② always close the phrase with either a bend exclamation point or a vibrato period.**

**40–50 min · Record & reflect (recommended)**
Record the phrase over the backing track for 30 seconds. Check: ① Does the "5-♭5-4" descent come through as three separate grains, not a blur? ② Does the half-step bend land exactly on the ♭5 pitch (ear-matching, like yesterday)? ③ Does the phrase feel like a "sentence" — beginning, development, ending — or just a string of notes? If anything snags, isolate that part and run it 10 times on its own.

**Today's finish line:** play the 3-measure phrase at BPM 80 without a hitch. Hum the phrase with your voice. Build a new phrase over the backing track by varying at least one measure.

## ④ Tips / Common Mistakes

- **Hesitating on ♭5.** In the "5-♭5-4" descent, if you unconsciously hold ♭5 a bit longer, it sounds like a landing note rather than a passing tone, and it feels off. All three notes need to **roll by at the same, even length.**
- **Memorizing with your hands only, not your ears.** A phrase memorized purely by finger muscle memory will never come out in improv. Keep going until you can genuinely hum it. If you can't hum it, it's not really yours yet.
- **Just laying out notes flatly, with no exclamation point or period.** String out notes with no bend (!) and no vibrato (.), and you're right back to three weeks ago. Every phrase needs **at least one piece of expression** — a bend or a vibrato — built in.
- **Getting greedy with variations.** Trying to change everything at once during the 20–40 min block will just make the phrase fall apart. Change **one measure at a time.** Keeping the skeleton and only changing the flesh is the textbook way to train phrasing.
