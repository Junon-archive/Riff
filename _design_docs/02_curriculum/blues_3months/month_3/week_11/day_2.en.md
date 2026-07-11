---
title: "Weaving bend and vibrato into a 'crying lick'"
dayKey: "m3.w11.d2"
estMinutes: 50
i18nKey: "lesson.m3.w11.d2"
---

# Day 2 — weaving bend and vibrato into one

## ① Theory

Yesterday you slid into a note. Today you weave together the two most iconic tools of the blues, the **bend** and **vibrato**. A bend pushes the string up to raise the pitch; vibrato shakes a note finely so it trembles. <mark>When these two meet, the guitar 'cries' like a person — the most emotionally charged moment in the blues.</mark> Today's goal is to hold that crying sound inside one lick.

The note you'll bend today is the **4 (string 3, fret 7, D)**. Push it up a whole step and it reaches the pitch of the **5 (E)**. What matters is **bending all the way to the exact pitch** — bend too little and it's an in-between note; too much and it turns sharp. <mark>When the pushed-up note lands right on the 5, that tension rings most beautifully.</mark> Push with two or three fingers stacked rather than one, and the force steadies and the pitch gets accurate.

Once you've made tension by bending up to the 5, come down to the root and finish with **vibrato**. Shake the landing note finely and it trembles as if breathing alive. <mark>If the bend is 'tension pulled upward,' vibrato is the finish that 'releases it and sings.'</mark> When these two connect inside one lick, a short phrase sounds like a single sigh. Today, at **BPM 70**, repeat slowly until the crying sound comes out naturally. Don't rush — handle each note with emotion. This crying sound makes your blues deeper and richer still.

```json
{
  "id": "m3.w11.d2.cry_map",
  "type": "scale_shape",
  "meta": { "title": "Bend the 4 up to the 5 pitch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "target", "highlight": true },
    { "string": 4, "fret": 7, "finger": 2, "label": "R", "role": "root" }
  ]}
}
```
▶ Push the **4 (string 3, fret 7)** up a whole step until it reaches the **green 5 (fret 9) pitch**. This is today's bend target.

## ② Visuals

Look at the notes of the crying lick inside box 1. Centered on the **4** you'll bend, the **5**, b3, and root gather within one hand. <mark>You're not learning a new note — you're taking one familiar box 1 note and 'pushing it up' into a crying sound.</mark>

```json
{
  "id": "m3.w11.d2.bend_map",
  "type": "scale_shape",
  "meta": { "title": "Crying lick notes in box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "root" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ The **green 4** is the note you'll bend today. The other 5, b3, and root you just press as they are, without bending.

<mark>Add bend and vibrato to one familiar note, and that's exactly the crying sound.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. First press the **5 (fret 9)** to fix the target pitch in your ear, then push the **4** up to that pitch. You're checking the answer by sound.

```json
{
  "id": "m3.w11.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: bend to pitch, then vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** Hear the 5 pitch first → bend the 4 a whole step up to that pitch → finish with vibrato on the root.

**10–20 min · Brain training (today's target = the bend pitch)**
Before real practice, sing in your head first the pitch of pushing the 4 up to the 5. <mark>When your ear already knows the target pitch, your hand only has to push exactly that much — this is the secret of an accurate bend.</mark>

**20–40 min · Real practice: Crying lick (BPM 70)**
Today's finished piece, the **crying lick**. Make tension by bending the **4 up to the 5** a whole step, pass through the 5 and b3, and land on the root with vibrato. The tension of the bend and the tremble of the vibrato meet inside one sentence.

```json
{
  "id": "m3.w11.d2.crying_lick",
  "type": "tab",
  "meta": { "title": "Crying lick: bend and vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** **4 (string 3, fret 7)** whole-step bend → 5 → b3 → land on root with vibrato. The tension you pushed up releases into vibrato.

<mark>That sound of pulling up with the bend and shaking with vibrato is your guitar's crying voice.</mark>

**40–50 min · Recording**
Record the crying lick over an A7 backing. Listen for whether the bend reaches the 5 pitch exactly and whether the vibrato on the landing note feels natural.

**Today's completion criteria:** Over A7 you completed and recorded a crying lick that bends the 4 up to the 5 a whole step and lands on the root with vibrato.

## ④ Tips / Common Mistakes

Common mistakes with the bend. Most come from **not pushing all the way to pitch**.

```json
{
  "id": "m3.w11.d2.bend_pitch",
  "type": "scale_shape",
  "meta": { "title": "Bend all the way to the 5 pitch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **Push all the way to the 5 pitch.** A half push gives an in-between note — the bend is only complete when it reaches the target pitch.

- **The pitch doesn't rise enough.** If you can't push the full whole step, you won't reach the 5. Stack two or three fingers to add force.
- **Pushing too far.** Past the 5 it turns sharp. Stop exactly at the target pitch.
- **Adding vibrato the instant you bend.** Push to pitch and 'arrive' first, then shake — that's what makes it steady.
- **Not shaking the landing note.** Without vibrato on the root the lick falls flat. That final tremble completes the crying sound.
