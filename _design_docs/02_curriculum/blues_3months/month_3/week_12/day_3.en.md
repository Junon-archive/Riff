---
title: "The whole 12 bars as a conversation — a non-stop run-through"
dayKey: "m3.w12.d3"
estMinutes: 50
i18nKey: "lesson.m3.w12.d3"
---

# Day 3 — holding the conversation across all 12 bars in one pass

## ① Theory

Now that you've got the four-bar conversation, today you spread it across **all twelve bars**. Trade asking with comping and answering with solo three times, and a twelve-bar piece is complete. <mark>Today is a rehearsal — practice letting it flow from start to finish in one pass without stopping.</mark> You've done enough part practice; now it's time to roll **a whole piece at once**.

The twelve-bar blues moves on three chords — **A7 (I), D7 (IV), E7 (V)**. The comping boogie shifts to each chord's root whenever the chord changes. A7 rolls the same 5→6→b7 shape from the open A on string 5, **D7 from the open D on string 4, E7 from the open E on string 6**. <mark>Just change the root you press, and the same boogie hand shape works for all three chords.</mark> The answering solo can stay in box 1 the whole time — box 1 fits all twelve bars even as the chords change.

The heart of a rehearsal is **not stopping**. If you miss a note in the middle or your hands tangle, just keep tapping the shuffle with your foot. <mark>The moment you stop to fix a mistake the conversation breaks, but if you just let it flow the piece stays alive.</mark> Today, at **BPM 80, shuffle**, aim to pass through the twelve bars from start to finish in one go. It doesn't have to be perfect — the very experience of flowing to the end prepares you for tomorrow's graduation recording.

```json
{
  "id": "m3.w12.d3.three_roots",
  "type": "fretboard_diagram",
  "meta": { "title": "Three boogie roots: A7, D7, E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "A", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "D", "isRoot": true, "role": "root" }
  ]}
}
```
▶ The three roots of **A7, D7, E7**. Roll the same 5→6→b7 boogie over each root and the comping follows the chords.

## ② Visuals

Now look again at the box 1 where the answering solo lives. Remarkably, this **one box 1** fits over all three chords — A7, D7, E7. <mark>Even as the chords change, the solo hand stays put — no need to find a new place to answer.</mark>

```json
{
  "id": "m3.w12.d3.answer_box",
  "type": "scale_shape",
  "meta": { "title": "One box 1 answers all twelve bars", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ With this one **box 1** you can answer all twelve bars. No need to move it along with the chords.

<mark>The comping moves with the chords, the solo stays in box 1 — this division of labor makes a one-person blues easy.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. First practice just moving the root when the chord changes. A7 → D7 → E7, rolling the boogie one bar at a time.

```json
{
  "id": "m3.w12.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: move the boogie root A7-D7-E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60, shuffle.** A7 → D7 → E7. Move the root to strings 5, 4, and 6, rolling the same boogie hand shape.

**10–20 min · Brain training (today's target = a non-stop run-through)**
Before real practice, draw the whole twelve-bar map in your head. Recall in advance where you comp and where you solo, and where the chords change. <mark>With the map in your head, you won't lose your way mid-play and can flow to the end.</mark>

**20–40 min · Real practice: full 12-bar run-through (BPM 80)**
Today's finished piece, the **full 12-bar run-through**. Ask with two bars of comping and answer with two bars of solo, repeating three times as the chords move. **Don't stop** — let it flow from start to finish in one pass.

```json
{
  "id": "m3.w12.d3.full_twelve",
  "type": "tab",
  "meta": { "title": "Full 12-bar dialogue run-through", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 7, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 8, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 12, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** 1–2 A7 comp → 3–4 solo → 5–6 D7 comp → 7–8 solo → 9 E7, 10 D7 comp → 11–12 solo. Pass through in one go without stopping.

<mark>If you pass through the twelve bars without stopping even once, tomorrow's graduation recording is already more than half ready.</mark>

**40–50 min · Recording**
Record the full 12-bar run-through whole. It doesn't have to be perfect — capture that flow of moving to the end without stopping.

**Today's completion criteria:** Over A7, D7, E7 you passed through the comp↔solo conversation across all twelve bars in one go without stopping, and recorded the full run-through.

## ④ Tips / Common Mistakes

Common mistakes in the full run-through. Most come from **stopping to fix a mistake**.

```json
{
  "id": "m3.w12.d3.dont_stop",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep moving: A7 to D7 root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "A", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "D", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Keep moving to the next chord.** Even if you slip, move the root on time and the piece keeps flowing.

- **Stopping to fix a mistake.** Stopping kills the piece. Even if you miss, just move to the next bar.
- **Missing the chord change.** The root moves at bars 5 and 9. Prepare your hand in advance.
- **Leaving the box in the solo.** For answering, staying in box 1 is plenty. Don't wander far.
- **Putting off recording.** Waiting to record when it's perfect means never doing it. Capture today's flow as it is.
