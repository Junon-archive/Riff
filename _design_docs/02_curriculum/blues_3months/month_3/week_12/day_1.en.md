---
title: "From comping to solo — crossing between question and answer"
dayKey: "m3.w12.d1"
estMinutes: 50
i18nKey: "lesson.m3.w12.d1"
---

# Day 1 — carrying the comping groove into the solo

## ① Theory

At last, the final week, Week 12. This week's goal is just one thing — **completing a whole blues on your own.** You've learned comping and you've learned soloing, and now one person moves between the two to fill twelve bars. <mark>Comping is the question, soloing is the answer — a conversation that asks with rhythm and answers with lead.</mark> Today is the first step: getting the **switch from comping to solo** into your hands.

The switch has two 'homes.' One is the **comping home** — the A7 boogie that lays the **5th, 6th, b7** on the 4th string over the open 5th-string root A. The other is the **solo home** — the familiar **box 1** around fret 5. <mark>The two homes sit close together, so you can move between them without shifting your hand much.</mark> When comping, your hand stays near the open strings; when moving to solo, it climbs a touch up to box 1. Once it's familiar, the two homes feel one step apart.

What matters is that **the groove doesn't break at the moment of the switch.** If you stop comping and hesitate — 'okay, now solo!' — the conversation snaps. <mark>The last beat of the comp and the first note of the solo must ride the same flow for the conversation to feel natural.</mark> At first it's fine if the timing wobbles a little during the switch. As long as the shuffle groove you tap with your foot never stops, the solo notes just settle on top of it. Today, at **BPM 80, shuffle**, slowly smooth out just that seam of comping one bar and moving into the solo.

```json
{
  "id": "m3.w12.d1.comp_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Comping home: A7 boogie shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ Over the **open 5th-string root A**, moving the 4th string through **5→6→b7** makes the A7 boogie comp.

## ② Visuals

Now look again at the solo home where the answer lives, on the fretboard. The comp rang near the open strings, but the solo comes out of **box 1 around fret 5**. <mark>The two homes are just a few frets apart — keep the right-hand groove and only move the left hand.</mark>

```json
{
  "id": "m3.w12.d1.solo_home",
  "type": "scale_shape",
  "meta": { "title": "Solo home: box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ This is the **box 1** where the answer lives. From the comping home, just raise the left hand to around fret 5 and you're here.

<mark>When your hand rises and falls naturally between comping and this box 1, question and answer join into one.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. First take out just the comp and practice it. Over the root A, roll the 5→6→b7 boogie slowly with a shuffle groove.

```json
{
  "id": "m3.w12.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: A7 boogie comp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60, shuffle.** The A7 boogie moving 5→6→b7→6 over the root A. Get the right-hand groove into your body first.

**10–20 min · Brain training (today's target = comp↔solo switch)**
Before real practice, draw in your head the picture of the left hand climbing to box 1 on the last beat of the comp. <mark>Draw the spot the hand will move to in advance, and the timing won't wobble at the moment of the switch.</mark>

**20–40 min · Real practice: comp→solo switch (BPM 80)**
Today's goal, the **comp→solo switch**. Bar 1 throws the question with the A7 boogie; bar 2 answers with a box 1 lick. On the **last beat of the comp**, raise the left hand to box 1 and connect smoothly into the first solo note.

```json
{
  "id": "m3.w12.d1.comp_to_solo",
  "type": "tab",
  "meta": { "title": "Comp to solo switch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** Bar 1 is comp (question), bar 2 is solo (answer). On the last beat of the comp, raise the left hand to box 1 and connect into the first solo note.

<mark>When comping and solo connect on one flow, half of your one-person blues is already done.</mark>

**40–50 min · Recording**
No A7 backing is fine. Record the switch of comping one bar and moving into a solo bar, and listen for whether the seam is smooth.

**Today's completion criteria:** You switched smoothly from one comp bar into one solo bar without losing the beat, and recorded the comp→solo switch.

## ④ Tips / Common Mistakes

Common mistakes in the switch. Most come from **stopping the groove as you move into the solo**.

```json
{
  "id": "m3.w12.d1.keep_groove",
  "type": "scale_shape",
  "meta": { "title": "Keep the groove into the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **Don't stop the groove.** If silence opens up between comping and solo, the conversation breaks.

- **Not counting the beat as you move to the solo.** Your foot must keep tapping the shuffle. If the groove stops, the switch shows.
- **Moving the left hand too far.** The comping home and box 1 are a few frets apart. Move the minimum.
- **Late because you press the first solo note hard.** The first note is timing, not force. Land it right on the beat.
- **Raising the speed first.** A smooth switch at BPM 80 comes first. Tempo is a later matter.
