---
title: "Single-note funk — drop the chord, just one string"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — Funk guitar isn't only chords

## ① Theory

If you thought funk guitar was all chords, today's a twist. Like Nile Rodgers or Curtis Mayfield, pros pick out one string at a time to draw a **<mark>bass-line-like single-note line</mark>.** They drop the chord entirely and build a groove note by note.

The principle: kill the other five strings completely (left- and right-hand mute) and ring only one string clearly. If a chord is a brush painting broadly, single notes are <mark>a pen drawing a fine line</mark>. Over the same right-hand motor, this time you place one clear note instead of a chord.

Today you draw a short E line on **<mark>the 5th string alone</mark>.** The root E sits at the 5th string, 7th fret — the same spot as last week's E9 root. Make a short riff from a few notes around it (note map below). Two things are key. First, <mark>mute the unused strings perfectly for zero noise</mark>. Second, <mark>aim one string accurately and ring it clearly</mark>.

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

Hitting just one string accurately is surprisingly hard. Neighbors leak, or too much force smears the note. That's normal. Today, even if the line isn't flashy, grab the feel of "one string clear, the rest silent." <mark>The moment this line locks with the bass</mark>, your funk suddenly gets thick and solid. The hand that only comped with chords now starts to draw lines. Awkward at first, but once this single-note world opens, what you can express doubles.

## ② Visuals

A map of today's notes. Blue = the root E (5th string, 7th fret) and the 5th; the rest are pentatonic notes. <mark>Draw the line on the 5th string alone</mark>.

**E funk note box (strings 5-4).** Blue is the root R (5th, 7th) and the 5th. Today use the 5th-string notes only (b7·R·b3).

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**Example 1 — 5th-string line (1 bar).** A short riff moving E·G·D, ghosts "chuck" between notes. One string, clear.

```json
{
  "id": "m2.w6.d1.line5_1bar",
  "type": "tab",
  "meta": { "title": "Single-note line on the 5th string (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Press the left hand only on the line notes, mute the rest. Check neighbors don't leak, 4×.

**Example 2 — 5th-string riff (2 bars).** The same line over two bars. Repeating, it settles in like a bass-line.

```json
{
  "id": "m2.w6.d1.line5_2bar",
  "type": "tab",
  "meta": { "title": "5th-string riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Two bars unbroken. Once easy, add other notes into your own riff.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Pluck only the 5th string and <mark>mute the other five perfectly</mark>. Focus-check for zero noise.

**10–20 min · Brain training (today's target = one-string aim + mute)**
Using the note map, burn in the 5th-string notes (b7·R·b3). Train the left hand to <mark>press only the line notes and cover the rest</mark>.

**20–40 min · Real groove (Examples 1·2 / BPM 70)**
Repeat **Example 1** (5th-string line) 4× at BPM 70 → then **Example 2** (2-bar riff). <mark>One string clear</mark>, <mark>the rest silent</mark>, is the key.

**40–50 min · Record & reflect (recommended)**
Record and check: <mark>did only one string ring clearly</mark> / <mark>is there no noise from the others</mark> / <mark>is the line clear like a bass</mark>?

**Done when:** you can play a short E line on the 5th string alone, clearly and with no noise from the other strings.

## ④ Tips / common mistakes

- **Neighbors leak.** The left/right mute is weak. Cover unused strings with the finger side and palm.
- **Note smears.** Too much force. The line note clear, but light.
- **Right hand stops.** Fixating on the line breaks the motor. Keep the right hand going between notes (ghosts).
- **Greed for speed.** One-string aim must be accurate for the line to live. Slow, zero noise.
