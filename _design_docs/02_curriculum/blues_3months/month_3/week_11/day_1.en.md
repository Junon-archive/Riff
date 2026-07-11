---
title: "Sliding in — entering a note by gliding"
dayKey: "m3.w11.d1"
estMinutes: 50
i18nKey: "lesson.m3.w11.d1"
---

# Day 1 — sliding into a lick by gliding in

## ① Theory

Week 11 begins. Over the past ten weeks you've learned scales, found the blue note, and taken even the BB color into your hand. From here you learn to make those notes **'speak' more beautifully**. Today's topic is the **slide** — instead of pressing a note flat and starting it there, you glide in from a fret or two below and arrive at your target. <mark>A slide is a way to 'enter' a note — you don't just arrive, you show up gliding in.</mark> Even the same root A feels completely different when you strike it flat versus when you slide up into it from below.

Today's slide glides up **from b7 to the root A**. Place a finger on fret 5 of string 4, **G (b7)**, and without lifting your hand off the string, push it smoothly up to fret 7, the **root A**. <mark>Your fingertip has to stay connected to the fretboard so the two notes join into one smooth line.</mark> Keep the pressing force steady — if it drops the moment you arrive, the note vanishes.

The charm of a slide is **tension and arrival**. In that short moment of gliding from the lower note toward the target, the listener leans in, wondering 'where is it going?' Then when it lands right on the target, <mark>a refreshing release of the wait</mark> appears. Today you practice entering a lick with this one slide. Slowly, at **BPM 70**, savoring the feel of your fingertip flowing along the fretboard. This one small glide will add expression to your lick.

```json
{
  "id": "m3.w11.d1.slide_map",
  "type": "scale_shape",
  "meta": { "title": "Slide entry: b7 up to root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" }
  ]}
}
```
▶ Glide up from **b7 (string 4, fret 5)** to the **green root A (fret 7)**. This is the slide's start and arrival.

## ② Visuals

The slide lives in the familiar **box 1**. Centered on the **b7 → root A** slide on string 4, the b3, 4, and 5 sit within one hand. <mark>No new position to memorize — just add a glide to the home you always use.</mark>

```json
{
  "id": "m3.w11.d1.box_slides",
  "type": "scale_shape",
  "meta": { "title": "Box 1 with slide targets", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ The **green root A** is the slide's arrival, and the **b7** below it is the start. The rest are the familiar box 1 notes.

<mark>That short moment of gliding in decides the expression of today's lick.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. Focus on that one thing — gliding **from b7 to the root A**. Check by ear that the arrival note stays clearly alive.

```json
{
  "id": "m3.w11.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: slide into root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** After gliding up from b7 to the root A, pass through b3 and settle onto the root with vibrato.

**10–20 min · Brain training (today's target = the slide entry)**
Before real practice, draw the trajectory of gliding from the lower note to the target in your head first. <mark>When your ear imagines the moment of 'glide → arrival' first, your hand just needs to follow that line.</mark>

**20–40 min · Real practice: Slide entry lick (BPM 70)**
Today's finished piece, the **slide entry lick**. Open the door with the **b7 → root A** slide, pass through the 4 and b3, and land on the root with vibrato. Because it shows up gliding from the very first note, the whole lick sounds far smoother.

```json
{
  "id": "m3.w11.d1.slide_lick",
  "type": "tab",
  "meta": { "title": "Slide entry lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** Enter by gliding from **b7 (string 4, fret 5)** into the root → 4 (string 3, fret 7) → b3 → land on the root with vibrato.

<mark>The moment the first note glides in, the lick starts to sound not like 'playing' but like 'speech.'</mark>

**40–50 min · Recording**
Record the slide entry lick over an A7 backing. Listen for whether that expression of the first note gliding in came through well.

**Today's completion criteria:** Over A7 you entered the lick with a b7 → root A slide and completed and recorded a slide lick that shows up gliding from the very first note.

## ④ Tips / Common Mistakes

Common mistakes with the slide. Most come from **missing the arrival note**.

```json
{
  "id": "m3.w11.d1.slide_timing",
  "type": "scale_shape",
  "meta": { "title": "Land the slide on the beat", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true }
  ]}
}
```
▶ **Arrive on the beat.** Gliding is free, but the target has to land at the exact right timing.

- **Gliding too fast.** Then the middle smears. Slowly, push while feeling the distance to the target.
- **Force drops the instant you arrive.** Then the arrival note vanishes. It has to stay alive even after the glide.
- **Gliding while lifting your hand off the fretboard.** That's not a slide but two separate presses. Keep the fingertip on the string and connect.
- **Grabbing the start fret anywhere.** You have to start from b7 (fret 5) for the distance to the root to fit exactly.
