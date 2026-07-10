---
title: "Power chords 101 — a brick from two fingers"
dayKey: "m1.w3.d1"
estMinutes: 30
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — A brick from two fingers

## ① Theory

You cleared single-note riffs through Week 2, so this week the <mark>'rock sound'</mark> finally arrives. A power chord sounds fancy, but it's really <mark>a single brick built from two fingers</mark>. One root note plus the 5th right above it — ring just those two and that's a power chord. It's neither bright nor dark, so it sits on any song, like the heart of rock. No need to fear the word 'chord' at all.

Today you learn two shapes. One puts the **root on the 6th string**, the other on the 5th string. Fret the root, then press the 5th two frets up on the string right below it — done. We start on open strings, so barely any fingers are needed. Open 6th string is E5, open 5th string is A5 — two power chords already in your hands.

The real skill of a power chord isn't the pressing, it's <mark>killing the strings you don't use</mark>. Only two notes should ring clearly while the other four stay silent. Drape the flesh of your fretting fingers lightly over the neighboring strings, and let your picking-hand palm hush the lower strings. Keep your unused left-hand fingers laid lightly across the strings, and aim your pick at just the two power-chord strings — the noise drops away fast. A little noise at first is fine. Once you can keep just two notes at a slow tempo, riffs like 〈You Really Got Me〉 and 〈Iron Man〉 land in your hands from this one shape. Once one brick is laid, the next one sits down far more easily.

## ② Visuals

Two shapes to learn today. First E5 with the <mark>root on the 6th string</mark>, then A5 with the root on the 5th. The finger shape is identical; only the strings shift over by one.

```json
{
  "id": "m1.w3.d1.e5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "E5 power chord (6th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ Ring only the two blue dots (root R · 5th) and kill the four X-marked strings. Stand your fingertips up to lightly cover the neighbors.

```json
{
  "id": "m1.w3.d1.a5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "A5 power chord (5th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ Now the root has moved to the 5th string. The 6th is X too — be sure to hush it with your picking-hand palm.

Now that you've seen the shape, let's actually play it. Strike E5 once per beat, four crisp times.

```json
{
  "id": "m1.w3.d1.e5_quarters",
  "type": "tab",
  "meta": { "title": "E5 — four clean strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. One strike per beat; check that both notes sound together. Downpicks.

Now the same on A5.

```json
{
  "id": "m1.w3.d1.a5_quarters",
  "type": "tab",
  "meta": { "title": "A5 — four clean strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. Even with the root down on the 5th string, keep just two notes clear. Check the 6th isn't ringing.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Set the metronome to BPM 60 and lightly repeat Week 2's palm-muted chug on the 6th string to loosen your hands. Reset your picking-hand palm position first.

**7–17 min · Today's skill**
Grab and release the E5 and A5 shapes very slowly, checking that <mark>only two notes</mark> ring clearly. Inspect string by string that the other four stay silent.

**17–27 min · Applying it**
Repeat the examples (four E5 strums · four A5 strums) four times each at BPM 70 → once there's no noise, raise it one step. Focus only on both notes sounding together.

**27–30 min · Check**
Write down the BPM you reached, and if you like, record 30 seconds to hear whether any stray strings leak.

**Done when:** you can ring one power chord (E5 or A5) as two clean notes with no stray noise.

## ④ Tips / common mistakes

- **Four strings ringing.** If unused strings ring along, the power chord smears into mush. Kill the strings you don't use, always.
- **Laying fingers flat.** Stand your fingertips up — it keeps the notes clear and makes it easy to mute neighbors with your finger flesh.
- **Pressing too hard.** Press a power chord only as hard as it takes to sound. Squeezing just tires your hand faster.
- **Chasing speed.** Today the cleanliness of the two notes matters more than any BPM number. Speed is what the next days take care of.
