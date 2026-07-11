---
title: "Top-note recognition — find the highest note in the chord"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — Top-note recognition: find the highest note in the chord

## ① Theory

Yesterday you learned the smooth transition that keeps the common tones. Today you find **the highest note, the top note**, in the chord. <mark>The top note is the voice laid on top of the chord — the note the ear hears first and remembers longest.</mark> The chord becomes the background, and **the top note** leads the song.

The top-note spots of the two chords are fixed. **Dm9**'s top note is the 1st string **fret 5 (A, the 5th)**; **G13**'s top note is the 1st string **fret 7 (B, the 3rd)**. <mark>On the same 1st string, just two frets apart — 5 and 7 — the voice of the two chords changes.</mark> Don't move it yet; first burn **where the top note lives** into the hand.

Today you grab the chord and pluck **just the top note** on top of it. At **BPM 70**, lay the chord and ring the 1st-string top note clearly. <mark>Once you can press the top note accurately, tomorrow's readiness to move it as a melody is complete.</mark> First, find **Dm9**'s top note.

```json
{
  "id": "m1.w4.d2.dm9_top",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 — find the top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **Dm9's top note is the 1st string fret 5 (A, the 5th).** The green note is the voice laid on top of the chord.

## ② Visuals

Now **G13**'s top note. The 1st string **fret 7 (B, the 3rd)**, two frets above Dm9's top note. <mark>The 3rd sets a chord's expression, so on top it sings bright.</mark>

```json
{
  "id": "m1.w4.d2.g13_top",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 — find the top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" },
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **G13's top note is the 1st string fret 7 (B, the 3rd).** The green note lays the chord's bright expression on top.

Now lay the chord, then press the top note. Chord on the first 2 beats, top note on the last 2. <mark>This is the first link where chord and top note ring as one body.</mark>

```json
{
  "id": "m1.w4.d2.top_recognize",
  "type": "tab",
  "meta": { "title": "Chord then top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Lay the chord for 2 beats, then ring the 1st-string top note (green) for 2 beats. Listen for the top note rising clearly above the chord.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
**BPM 65.** Grab Dm9 and G13 and pluck only the 1st-string top note. <mark>Check with the ear that the top note stays clear and isn't buried under other strings.</mark>

**10–20 min · Brain training (locating the top note)**
Silently grab the two chords and spot with your eyes whether each chord's 1st-string **top note** sits on fret 5 or fret 7.

**20–40 min · Real chord + top note (BPM 70)**
Repeat the four bars below **without a break**. Watch just one thing: <mark>whether the top note sounds a notch louder than the chord</mark>.

```json
{
  "id": "m1.w4.d2.top_recognize_loop",
  "type": "tab",
  "meta": { "title": "Chord then top note x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Loop chord + top note twice. Don't miss the top note rising clearly every time.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Check whether the top note sounds like a voice instead of being buried in the chord.

**Done when:** You can press each chord's top note (1st string fret 5·7) accurately on Dm9 and G13 and ring it clearly above the chord.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you press the **top note**.

```json
{
  "id": "m1.w4.d2.top_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Top notes — Dm9 5, G13 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 6, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 5", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "label": "G13 3", "role": "target", "highlight": true }
  ]}
}
```
▶ 1st string fret 5 is Dm9's top note (the 5th); fret 7 is G13's top note (the 3rd).

- **The top note gets buried in the chord.** Pluck the 1st string a touch harder and clearer. The top is a voice, so it should come forward.
- **You can't find the top note.** Keep the chord hand as it is and check only the 1st string — the spot appears.
- **The chord breaks.** Keep the chord fingers pressed even while you press the top note.
- **You raise the speed first.** If the top note is faint, drop to BPM 65 and make the sound clear first.
