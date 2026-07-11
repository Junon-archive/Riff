---
title: "Placing the licks over twelve bars — your first solo sketch"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — the day you place licks over twelve bars

## ① Theory

Over two days you got **two licks**. Lick 1 that opens with a bend, lick 2 that answers by descending. Today you finally lay these two over **twelve bars**. <mark>The materials are ready, so now it's time to place the licks on the stage that is twelve bars.</mark> What you make today isn't a finished solo but a **solo sketch** — a day to draw the big picture first of where to place licks and where to leave space. The licks and the space you learned separately meet for the first time inside one flow today.

The blues **twelve bars** change chords from A7 to D7 and E7, but there's very good news. Box **1** alone lets you play over the whole twelve bars. <mark>Even when the chords change, Box 1 stays home — so a lick fits wherever you place it.</mark> The key is not to cram every bar full of notes. One bar asks with a lick; the next drags the root long and gives **space**. This balance of filling and emptying is what lets a solo breathe. Today you feel firsthand that the courage to play fewer notes actually makes a solo sound finer.

Today's sketch is four bars. **Bar 1** opens with the bend lick (the question); **bar 2** drags the root long and gives it a breath (space). **Bar 3** answers with the descending lick, and bar 4 lands on the root. <mark>Lick–space–lick–landing: this flow of four boxes is a miniature of a twelve-bar solo.</mark> It's fine if it isn't perfect. Today's goal is to make your hand remember where to place the licks. So, let's draw the first sketch on the stage.

```json
{
  "id": "m2.w8.d3.solo_sketch",
  "type": "tab",
  "meta": { "title": "Placing the licks over the 12-bar form (sketch)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, shuffle feel.** Bar 1 opens with the bend lick; bar 2 drags the root as a whole note to give space. Bar 3 answers with the descending lick, and bar 4 lands on the root A with vibrato.

## ② Visuals

Let's see how the four-bar sketch travels on the fretboard, on the **Box 1 map**. The green 4th is where the lick pushes up or passes; the blue **root A** is the home the lick returns to each time.

```json
{
  "id": "m2.w8.d3.form_map",
  "type": "scale_shape",
  "meta": { "title": "Box 1 is home over all 12 bars", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Box 1 is home.** Even when the chords change, you open the lick from this one place and come back to the root.

<mark>However the chords change, if you open and close within Box 1, that is a twelve-bar solo.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 75. Warm up in sequence only the two anchors of the sketch, the **bend and the landing root**.

```json
{
  "id": "m2.w8.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up both anchors: the bend and the landing root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** Bend the 4th for a half beat to open, and shake the root A for a half beat to close. Learn the opening note and the closing note side by side.

**10–20 min · Brain training (today's target = placing the licks)**
Before entering the real practice, picture in your head the **order** of where among the four bars you play a lick and where you leave space. Open–space–answer–landing: sort out these four boxes with your head before your hand. <mark>Know the order of the boxes first, and twelve bars feel far less daunting.</mark>

**20–40 min · Real practice: 12-bar solo sketch (BPM 75)**
This is today's finished piece. Play the four-bar sketch over the backing from start to finish without a break.

```json
{
  "id": "m2.w8.d3.sketch_take",
  "type": "tab",
  "meta": { "title": "12-bar sketch, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** Bar 1 opens with the bend lick; bar 2 drags the root long to give space. Bar 3 answers with the descending lick, and bar 4 lands on the root A with vibrato. Be sure to feel the space between the licks.

<mark>When the lick opens, the space makes a breath, and the descent closes on the root, the skeleton of a twelve-bar solo is complete.</mark>

**40–50 min · Recording**
Record the four-bar sketch over the backing. Listen for whether the lick fits the chords and whether the space stays alive without feeling stuffy.

**Today's completion criteria:** You played and recorded the four-bar sketch — bend lick, space, descending lick, root landing — from start to finish over a twelve-bar backing. — Today's result: 12-bar solo sketch complete

## ④ Tips / Common Mistakes

Common mistakes when laying licks over twelve bars. Most are the problem of "cramming too full."

```json
{
  "id": "m2.w8.d3.place_map",
  "type": "scale_shape",
  "meta": { "title": "Call in the bars, leave space, answer home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Open, empty, answer.** Open the lick on the green 4th, come back to the root A, and close the answer.

- **Cramming every bar full of notes.** Then there's no room to breathe. Leave a bar or two empty by dragging the root long.
- **Placing the lick anywhere regardless of the chord change.** A lick sounds natural when it starts on the bar's first beat. Open it in time with one beat of the backing.
- **Not tolerating the space.** Even if the moment of empty sound feels awkward, that space brings the next lick to life. Don't rush the emptied bar.
- **Trying to do all four bars at once.** Splitting it into two bars of opening and two bars of answering makes it far easier.
