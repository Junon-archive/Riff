---
title: "Completing the one-chord jam — minutes on a single chord"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — Chord unchanged, minutes carried on rhythm alone

## ① Theory

The month's finish line. Today you complete and record a groove mixing ghosts, real notes, and accents on one chord — E9 (or Em7) — over a backing track. Carrying minutes on rhythm alone, without changing a single chord — this is <mark>the essence of funk</mark>.

Let's look back over the month. Week 1 you built <mark>a right-hand 16th motor that never stops</mark>; Week 2 you laid <mark>a hi-hat</mark> with left-hand ghosts; Week 3 you stabbed <mark>a snare</mark> with accents; Week 4 you set <mark>a real chord, E9</mark>, on top. Now you hold both a **<mark>rhythm engine and a real chord</mark>.** Without any fancy chord progression, the right hand alone can fill a room with groove.

There's no right answer to today's jam. Take the examples as a skeleton, then shift the accent spots, slip to Em7 for color now and then, and adjust the ghost density to build <mark>"your groove."</mark> And be sure to record. The moment the backing's drums and bass lock with your guitar as one body, you'll get goosebumps yourself.

You made it here — genuinely impressive. The hand that two months ago fretted "why won't my funk groove" now designs a groove on a single chord. Next month, onto this solid rhythm you'll add **<mark>minimal three-string voicings, single notes, staccato, and shuffle</mark>** to widen your expression dramatically. Be sure to keep the groove you recorded today — it's the proof of a month.

## ② Visuals

A finished jam mixing all three layers on the one chord E9. Not an answer but a skeleton — vary it into <mark>your own groove</mark>.

**E9 (review).** Root at 5th string, 7th fret; yellow = the 9th. Today's jam rolls on this one chord (and Em7 at times).

```json
{
  "id": "m1.w4.d1.e9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E9 — the funk chord (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 6, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 7, "finger": 2, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — one-chord jam A (2 bars).** A basic jam with real notes, ghosts, and accents evenly mixed. The beat 2/4 accent locks with the snare.

```json
{
  "id": "m1.w4.d4.jam_a",
  "type": "tab",
  "meta": { "title": "E9 one-chord jam A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** Over a backing 4×+. Feel it as one body with drums and bass, and record.

**Example 2 — one-chord jam B (2 bars).** A variation with the accent pulled further. Once easy, vary the Em7 and ghost density into your own jam.

```json
{
  "id": "m1.w4.d4.jam_b",
  "type": "tab",
  "meta": { "title": "E9 one-chord jam B (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** Start from this skeleton and vary freely. Carry minutes on a single chord.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Lightly run through <mark>the month's motor, ghosts, accents, and E9</mark>. Check that the hand remembers.

**10–20 min · Brain training (today's target = designing your own jam)**
Using the examples as a skeleton, picture how you'll place <mark>the accent spots, Em7 color changes, and ghost density</mark>.

**20–40 min · Real groove (Examples 1·2 / BPM 72)**
Play **Examples 1·2** over a backing, then vary freely from that skeleton, rolling four-plus bars unbroken. <mark>Minutes on a single chord</mark>.

**40–50 min · Record & reflect (recommended)**
Record 1–2 minutes of your own jam and check: <mark>did the hand never stop</mark> / <mark>does the accent lock with the snare</mark> / <mark>are all three layers audible</mark> / <mark>did you vary it so it isn't dull</mark>?

**Done when:** on the one chord E9 (or Em7), you can roll your own groove mixing ghosts + real notes + accents over a backing for a minute or more, and record it. (Month 1 complete!)

## ④ Tips / common mistakes

- **Repeating without variation.** The same two bars forever gets dull. Nudge the accent spots, Em7, and density.
- **Accent off the snare.** The longer the jam, the vaguer the accent gets. Keep minding beats 2 and 4.
- **Wanting to fill everything.** You need space for the groove to live. Leave spots to flow as ghosts.
- **Skipping the recording.** The month's result is proven by the recording. Keep it and compare with next month.
