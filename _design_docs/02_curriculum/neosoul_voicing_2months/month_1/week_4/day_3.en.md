---
title: "Top note as melody — move the highest note like a song"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — Top note as melody: move the highest note like a song

## ① Theory

Until yesterday each chord had one top note. Today you **link that top note across several notes** into a melody. <mark>Leave the chord laid down and move only the 1st-string top note up and down, and a song flows over the chord.</mark> This is exactly **the top line**, the heart of chord melody.

Over **Dm9**, raise the top note on the 1st string **5→8→10 fret**. In note names that's **A→C→D (5th→b7→root)**. <mark>The chord stays parked in one spot, yet the top note walking upward makes a flat vamp start to tell a story.</mark> Over **G13**, it climbs and falls on the 1st string **7→10→7 fret (3rd→5th→3rd)**.

Today keep the chord still and let only **the top line** sing. At **BPM 70**, listen for the top note linking clearly note by note. <mark>Once the top line links smoothly, tomorrow it joins the chord to become the M1 finishing vamp.</mark> First, draw the top line over **Dm9**.

```json
{
  "id": "m1.w4.d3.dm9_top_line",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 top-note line — 5 to b7 to R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 10, "label": "R", "role": "target", "highlight": true }
  ]}
}
```
▶ **The top line over Dm9.** 1st string 5→8→10 fret; the green notes (5th·root) are the line's landings.

## ② Visuals

The top line over **G13**. On the 1st string **7→10→7 fret**, in note names **B→D→B (3rd→5th→3rd)**, it climbs and comes back down. <mark>Starting on the 3rd, climbing to the 5th, and returning to the 3rd closes one bar like a little song.</mark>

```json
{
  "id": "m1.w4.d3.g13_top_line",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 top-note line — 3 to 5 to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 5, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 10, "label": "5", "role": "scale" }
  ]}
}
```
▶ **The top line over G13.** It moves between 1st string 7↔10 fret; the green 3rd is the start and the end.

Now drop the chord and listen to **just the top line** in a row. The two bars flow as one short melody. <mark>Check with the ear whether the top line alone becomes a song even without the chord.</mark>

```json
{
  "id": "m1.w4.d3.top_melody",
  "type": "tab",
  "meta": { "title": "Top-note melody only", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Sing just the 1st-string top line without the chord. Listen for the green notes (landings) arriving clearly.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
**BPM 65.** Warm the hand by slowly moving between frets 5·8·10 and 7·10 on the 1st string. <mark>Check with the ear that the gaps between the top-line notes link smoothly.</mark>

**10–20 min · Brain training (drawing the top line)**
Silently follow only the 1st string with your eyes and set the **top line**'s path (5→8→10, 7→10→7) into the hand.

**20–40 min · Real chord + top line (BPM 70)**
Repeat the four bars below **without a break**. Lay the chord for the first 2 beats, then move the top note on the last 2. Watch just one thing: <mark>whether the top line walks over the chord</mark>.

```json
{
  "id": "m1.w4.d3.top_melody_practice",
  "type": "tab",
  "meta": { "title": "Chord + top line x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70.** Loop chord + top line twice. Let the chord be the background and the top note sing out front.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Compare yesterday's chord-only sound with today's — how much more like a song it sounds with the top line laid on.

**Done when:** You can move the top line (1st string 5→8→10, 7→10) over Dm9 and G13 smoothly at BPM 70 and make a melody that walks over the chord.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you move the **top line**.

```json
{
  "id": "m1.w4.d3.top_line_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Where the top line travels", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 top", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "pass", "role": "scale" },
    { "string": 1, "fret": 10, "label": "peak", "role": "scale" },
    { "string": 1, "fret": 7, "label": "G13 top", "role": "target", "highlight": true }
  ]}
}
```
▶ The green notes (frets 5·7) are each chord's top-line start; frets 8·10 are the passing and peak that link between them.

- **The chord breaks while you move the top note.** Keep the chord fingers pressed and move only the finger fretting the 1st string.
- **The line jerks apart.** Pluck smoothly and connect the notes so it sounds like a walking melody.
- **The top note is too soft.** The top is a song, so ring the 1st string a touch clearer than the chord.
- **You raise the speed first.** If the line breaks, drop to BPM 65 and win back the note-to-note connection first.
