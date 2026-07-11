---
title: "An ornament lick between chords — slipping a smear into the vamp"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — An ornament lick between chords

## ① Theory

The past two days you built the smear. Today you bring it into the **vamp**. The signature vamp is **Dm9→G13**. <mark>Lay the chord on beat 1 and slip a **smear ornament lick** into the remaining beats, and the space between chords bleeds like paint.</mark>

The method is simple. Each bar, strike the chord briefly on **beat 1**, then run the **b3→3** smear lick you've built into **beats 2–4**. <mark>The chord is background; the ornament lick is the voice that fills over it.</mark> Over Dm9 it flows **b3→3→5**; over G13 it flows **b3→3→b7**.

Today's goal is **one line of ornament in the vamp**. Slowly at **BPM 72**, hear the chord and ornament link in one breath. <mark>When the hand slides smoothly from chord to ornament, today is a success.</mark> First, lay the home chord Dm9 again.

```json
{
  "id": "m2.w5.d3.dm9_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 vamp home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **Bar 1 home chord Dm9.** Lay the chord from the 5th-string root and start the smear lick right away on the 4th string.

## ② Visuals

Now link chord and ornament. Strike **Dm9** on **beat 1**, move to the **b3→3** smear from **beat 2**, and flow to the **5th**. The next bar strikes **G13** and flows through the same smear to the **b7**. <mark>Chord short, and the ornament bleeding to the green 3rd sings behind it.</mark>

```json
{
  "id": "m2.w5.d3.vamp_ornament",
  "type": "tab",
  "meta": { "title": "Vamp with smear ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** Beat 1 chord → beats 2–4 smear ornament. The lick flows to the **5th** over Dm9 and to the **b7** over G13.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, alternate just the two chords (**Dm9**·**G13**). Strike briefly on beat 1 and lift to prepare the next chord. <mark>Learn first the feel of the chord cutting short and clear.</mark>

**10–20 min · Brain training (joining the smear)**
Silently fret the chord, then draw the path from that hand into the **b3→3** smear. Find where the chord fingers and the smear fingers overlap.

**20–40 min · Real vamp ornament (BPM 72)**
Repeat the four bars below without a break — one chord, one smear each. <mark>Watch just one thing: that the beat doesn't drag as you move from chord to ornament.</mark>

```json
{
  "id": "m2.w5.d3.vamp_ornament_loop",
  "type": "tab",
  "meta": { "title": "Vamp with ornament x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** Two loops of the vamp. The chord is short on beat 1; the remaining beats are filled by the smear ornament.

**40–50 min · Recording / self-feedback (recommended)**
Record the four bars and listen back. Check that chord and ornament read as one flow and the beat doesn't drag.

**Done when:** You can slip the b3→3 smear ornament into the Dm9·G13 vamp at BPM 72 and loop chord and ornament as one flow.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most when slipping ornament into the vamp.

```json
{
  "id": "m2.w5.d3.ornament_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament insert map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ After the chord, move on the 4th string into the smear (green 3rd), then flow to the 5th over Dm9 and the b7 over G13.

- **The chord is too long.** Keep the chord to just beat 1 and move straight into the ornament.
- **The beat drags in the ornament.** Don't rush the smear; place it clearly on the beat.
- **All the chord fingers release.** Moving into the smear, shift only the fingers you need and leave the rest relaxed in place.
- **You raise speed first.** Drop to BPM 60 and make the chord→ornament path smooth first.
