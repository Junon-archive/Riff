---
title: "Chromatic approach — to the next root from a half step above or below"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Chromatic approach, bridging to the next chord

## ① Theory

Week 3 begins. For the past two weeks we learned to walk with chord tones — that feel of landing on the chord on every beat 1. This week you learn one real secret of walking. It's the <mark>approach note you place on the last beat (beat 4)</mark>. An **approach note** is a single note you set down like a stepping stone, right before you cross to the next chord.

Today's topic is the strongest approach note, the **chromatic approach**. The method is very simple. You place a note **a half step above or below the next chord's root** on beat 4. For example, if the next chord is Bb, put B (3rd string, 2nd fret) a half step above, or A (3rd string, open) a half step below, on beat 4. Then that note gets <mark>pulled in as if sliding</mark> into the next measure's beat 1, Bb.

Why does this work? A half step is the closest distance to our ears. When a note a half step away sounds, the ear starts to expect the target note that comes next. So the approach note acts like **an arrow aimed ahead** at the next chord. It doesn't have to be a chord tone — the beat 4 approach is a passing note, so as long as you land properly on the next beat 1, it actually makes the line smoother.

Remember just one thing. <mark>Approach on beat 4, land on the next beat 1</mark>. The relationship of these two beats is the **core** that carries through this whole week. Today, get both directions — **a half step above** and **a half step below** — into your hands.

Look first at the fretboard for the three notes aimed at the next chord, **Bb** — the root and the half steps on either side.

```json
{
  "id": "m1.w3.d1.approach_bb_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to Bb — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" }
  ]}
}
```

▶ **4-string.** The next root Bb (3rd string, 1st fret), plus B a half step above (2nd fret) and A a half step below (open).

```json
{
  "id": "m1.w3.d1.approach_bb_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to Bb — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

## ② Visuals

Now put the approach note into an actual line. The first example enters the next root Bb from **a half step above**, the second from **a half step below**. <mark>Both put the approach on beat 4 and land on the next beat 1.</mark> Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w3.d1.approach_above_4",
  "type": "tab",
  "meta": { "title": "Chromatic approach from above (B to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** Beats 1–3 are F7 chord tones; beat 4 B (3rd string, 2nd fret) aims at Bb from a half step above. Land on Bb on the next beat 1.

```json
{
  "id": "m1.w3.d1.approach_above_5",
  "type": "tab",
  "meta": { "title": "Chromatic approach from above (B to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

This time, in reverse, come up from **a half step below**, A, into Bb.

```json
{
  "id": "m1.w3.d1.approach_below_4",
  "type": "tab",
  "meta": { "title": "Chromatic approach from below (A to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** Beat 4 A (3rd string, open) aims at Bb from a half step below. Push up a half step from below and land.

```json
{
  "id": "m1.w3.d1.approach_below_5",
  "type": "tab",
  "meta": { "title": "Chromatic approach from below (A to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk Week 2's F7→Bb7 arpeggio walk once at BPM 72. Bring the walking feel back to your fingertips.

**10–20 min · Brain training**
With the prep example below, isolate just the approach note. Feel how you <mark>slide slowly and land</mark> from measure 1's beat 4 **B** to measure 2's whole-note Bb.

```json
{
  "id": "m1.w3.d1.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Approach and land, slow (B to Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 4-string.** Beat 4 B gets pulled into the next measure's whole-note Bb. Feel that pull very slowly.

```json
{
  "id": "m1.w3.d1.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Approach and land, slow (B to Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 66, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Alternate the two examples above (half step above, half step below) at **BPM 76**. Check by ear whether <mark>the beat 4 approach slides into the next beat 1</mark>. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether the approach note naturally calls the next chord. Note which you prefer, a half step above or below.

**Done when:** you can place the chromatic approach note a half step above or below the next chord's root on beat 4, land exactly on the next measure's beat 1, and walk it on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The approach note is as loud as a chord tone.** Keep the beat 4 approach short and light, and ring the next beat 1 landing more clearly. The approach must not become the star.
- **You place the approach too early.** The approach note is always on beat 4. On beat 2 or 3 it blurs the chord tones and weakens the landing.

Look ahead at the approach note for returning to F, too. Below, aimed at F, are **E** a half step below and **F#** a half step above.

```json
{
  "id": "m1.w3.d1.approach_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4-string.** F (4th string, 1st fret), plus F# a half step above (2nd fret) and E a half step below (2nd string, 2nd fret).

```json
{
  "id": "m1.w3.d1.approach_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic approach to F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

- **Aim at the next chord ahead of time.** The approach note's destination is always the next chord's root. When the walk cycles back, use the same principle in the measure returning to F. Getting just the two directions — above and below — into your hands today is a big step.
