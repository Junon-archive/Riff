---
title: "Integrating the expressive lick — sing one bar with bend, vibrato, and slide"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — Merging the three expressive tools into the whole-step bend lick

## ① Theory

The final day of Week 6. This week you learned one by one the **bend** that pushes a note up, the **vibrato** that makes a note sing, and the **slide** that connects note to note. Today we merge these three inside one phrase. <mark>When the three tools come together, even the same Box 1 notes start speaking in a completely different 'voice.'</mark> Using the techniques separately and using them flowing naturally within one line give a different density of sound. Today we practice that 'connecting.'

The lick you'll finish today is the **whole-step bend lick** inside Box 1. Push the **4th (D)** at the 3rd string 7th fret up a whole step to sound the 5th (E), come down 5th–b3, and land on the root A with **vibrato**. <mark>Ask with the bend, resolve with the descent, close with the vibrato — a story exactly one bar long.</mark> It's short, but all of this week's expression is packed inside. More than fretting every note exactly, the whole of this lick is that 'expression' where the bend reaches its target and the vibrato steadies.

Why this lick is special: after four weeks learning to 'ask' with rhythm and Week 5 gaining the 'vocabulary' of the scale, it's finally the **first sentence** that speaks that vocabulary 'in your own voice.' <mark>Expression before exact pitch — this is the heart of blues lead.</mark> It's fine if it isn't perfect. If the bend reaches the 5th and the final root lives with vibrato, that's **enough**. So, let's get the one bar that wraps up this week into your hands.

```json
{
  "id": "m2.w6.d4.three_voices",
  "type": "tab",
  "meta": { "title": "Three expressive tools in two beats", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **Three tools in two beats.** Slide from b3 into the 4th, push that 4th a whole step to sound the 5th, and land on the root with vibrato. Slide, bend, and vibrato connect into one flow.

## ② Visuals

First let's see the **big picture** of where today's lick passes on the fretboard. The **4th at the 3rd string, 7th fret** marked green is the starting point of the whole-step bend.

```json
{
  "id": "m2.w6.d4.lick_map",
  "type": "scale_shape",
  "meta": { "title": "The bend lick on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **The bend's start is green.** Push the 4th a whole step to sound the 5th, pass 5th–b3, and come down to the root.

<mark>These four notes are the backbone of today's lick.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 70. Warm up the two leads of today's lick, **the whole-step bend and the vibrato**, separately.

```json
{
  "id": "m2.w6.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the bend and vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** Push the 4th a whole step to sound the 5th, then shake the root with vibrato. The two ingredients of the lick.

**10–20 min · Brain training (today's target = re-tune the bend pitch)**
Before entering the lick, recheck whether the whole-step bend reaches the 5th exactly. Play **the 5th at the 2nd string 5th fret** first, hold it in your ear, and compare. <mark>Remember that only when the bend touches the target does the whole lick come alive.</mark>

**20–40 min · Real practice: the whole-step bend lick (BPM 70)**
This week's finished piece. Open with the bend, resolve with the descent, close with the vibrato.

```json
{
  "id": "m2.w6.d4.bend_lick",
  "type": "tab",
  "meta": { "title": "Whole-step bend lick (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
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
▶ **BPM 70.** Push the 4th (D) at the 3rd string 7th fret a **whole step up** to sound the 5th (E) — exactly to the target. Then come down 5th–b3 and land on the root A with **vibrato**. This is the blues's 'one-bar story.'

<mark>When the bend reaches the 5th and the final root sings with vibrato, this week's voice is complete.</mark>

**40–50 min · Recording (Week 6 graduation mission!)**
Record the whole-step bend lick from start to finish. Whether the bend reaches the target, whether the vibrato is stable — listen for just these two.

**Today's completion criteria:** The whole-step bend reached the 5th target exactly, and you landed on the root A with vibrato to complete the lick as one flow. — This week's result: the whole-step bend lick (bend + vibrato integrated), complete (Week 6 complete!)

## ④ Tips / Common Mistakes

Common mistakes in the integrated lick. Trying to cram in every technique tends to break the flow instead.

```json
{
  "id": "m2.w6.d4.aim_and_land",
  "type": "scale_shape",
  "meta": { "title": "Bend to the 5th, land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Bend to the 5th, home on the root.** The bend goes up to the green 5th; the ending lands on the root with vibrato.

- **The bend falls short of the 5th.** If the lick's first note is hazy, the whole thing is hazy. Push all the way to the target.
- **Leaving the landing root plain.** With no vibrato on the last note, the story feels suddenly cut off. Always shake it to close.
- **Trying to play too fast.** BPM 70 is plenty. Bend pitch and vibrato come before speed.
- **Stopping after one mistake.** Expression grows from repetition. Even if the bend strays a little, carry through to finish the bar.
