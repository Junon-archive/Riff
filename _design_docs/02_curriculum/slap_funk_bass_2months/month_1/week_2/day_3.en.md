---
title: "T-P Wearing Rhythm — Push-Pull of 8ths and 16ths"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — T-P Wearing Rhythm, 8ths and 16ths

## ① Theory

Yesterday you learned a **clean jump** with the octave shape. Today you dress that T-P in **rhythm**. Until now you struck steadily on the beat; today you make the groove's "flavor" with a <mark>placement that slips slightly off the beat</mark>. Slap sounds exciting not because the notes are fancy, but thanks to the rhythm of **8ths and 16ths pushing and pulling**.

Today you learn two rhythms. The first is the **sixteenth pop double** — glue two quick pops "snap-snap" to fill a beat tightly. The second is the **offbeat pop (syncopation)** — place the pop not on the beat but <mark>between the beats (the "&")</mark> so the groove bounces. The hand shape stays yesterday's **octave**; all that changes is "when you strike." Even with the same two notes, **just changing where you strike** flips the feel completely — that's the real fun of funk rhythm. Start the habit today: make the groove by moving placement, not by adding notes. The two rhythms you learn today will become the material for the finished groove you build next week.

You don't add **ghosts (mutes) yet** — leave the empty slots as rests (you fill them in Week 3). Instead, <mark>keeping the silence of the rests exactly</mark> is today's hidden task. Silence is as much rhythm as sound. Start from **BPM 60**, counting the beat with your foot, slowly.

On **a 5-string**, the fingering is exactly the same as on a 4-string. Keep the low B deadened with the thumb, and once comfortable, move the same rhythm to a B-string root and try it as heavier funk.

## ② Visuals

Today you keep the octave hand shape and change only the **rhythm**. After a quick review of the shape, learn two patterns in tab — the <mark>sixteenth pop double</mark> and the <mark>offbeat pop</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, review yesterday's **octave hand shape** once more. The lower blue is the root E (4th string); the upper blue is the octave E (2nd string, 2nd fret).

```json
{
  "id": "m1.w2.d3.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The hand shape is the same as yesterday — root E below (thumb), octave E above (pop). Today you keep this form and change only the rhythm.

```json
{
  "id": "m1.w2.d3.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same as the 4-string. Keep the low B deadened with the thumb.

**Example 1 — sixteenth pop double.** Strike the root with the thumb, then on beat 2 glue two quick pops <mark>"snap-snap" as sixteenths</mark>.

```json
{
  "id": "m1.w2.d3.rhythm_sixteenth_4",
  "type": "tab",
  "meta": { "title": "T-P rhythm — sixteenth pop double — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Let the two pops on beat 2 split clearly into "snap-snap" without gluing together. Keep the empty rests exactly empty.

```json
{
  "id": "m1.w2.d3.rhythm_sixteenth_5",
  "type": "tab",
  "meta": { "title": "T-P rhythm — sixteenth pop double — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Keep the low B deadened with the thumb.

**Example 2 — offbeat pop.** This time place the pop not on the beat but on <mark>the "&" of beats 2 and 4</mark>. This one-step push makes the groove bounce.

```json
{
  "id": "m1.w2.d3.rhythm_offbeat_4",
  "type": "tab",
  "meta": { "title": "T-P rhythm — offbeat pop — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** Thumb on the beat, pop off the beat. Count the beat with your foot and check the pop lands exactly on the "&".

```json
{
  "id": "m1.w2.d3.rhythm_offbeat_5",
  "type": "tab",
  "meta": { "title": "T-P rhythm — offbeat pop — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same note and position as the 4-string. Keep the low B deadened with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen up yesterday's octave **T-P** a few times at BPM 60 to wake the hand shape. Check that the jump is still clean.

**10–20 min · Brain training**
Play Examples 1 and 2 silently on your knee, rhythm only. First count <mark>the timing of the sixteenth double and the offbeat pop</mark> with your body.

**20–40 min · Real play**
Repeat Example 1 (sixteenth double) at **BPM 60** → once it's clear, move to Example 2 (offbeat) at **BPM 65**. If the rests smear, drop back to slow.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the rhythm is alive, pushing and pulling</mark>. Note the BPM you reached today.

**Done when:** you can play both the sixteenth pop double and the offbeat pop with the octave T-P at BPM 60–65, keeping even the rests exactly.

## ④ Tips / Common mistakes

- **The sixteenths smear.** If the pop "snap-snap" glues into one lump, the rhythm dies. Delay the second pop a touch to split it clearly.
- **Pulling the offbeat onto the beat.** If the offbeat pop keeps getting dragged forward, it goes flat. Count the beat with your foot and wait for the "&".
- **Letting the rests slide.** If you fill the empty slots loosely, there's no room for the Week-3 ghosts. For now, keep the silence exactly.
- **Neglecting low B (5-string).** The busier the rhythm, the more B leaks. Always keep B covered with the thumb.
