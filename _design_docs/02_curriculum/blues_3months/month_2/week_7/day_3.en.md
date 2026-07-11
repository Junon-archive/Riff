---
title: "Leaving space — a place to rest makes the next words heard"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — Phrasing that puts breath between the sounds

## ① Theory

So far you've built two phrases that ask and answer. But a good conversation needs one more thing — **space**. That brief resting moment between words. <mark>In the blues a rest isn't doing nothing; it's the preparation that makes the next words heard.</mark> If you keep pouring out notes without resting, even the finest phrase comes out mashed together. Today let's deliberately put a **rest** — stopping your hand — inside the phrase. In notation we mark this rest as **rest**.

There are set places to put a rest. The most important one is **between question and answer**. Don't answer right after tossing the question; stop your hand for a beat or a half beat. <mark>This brief silence is the signal "I heard the question just now," and the breath that prepares the answer.</mark> Another is after the phrase ends. Once you've said your line, empty a moment and let what you just said linger in the air. A rest isn't a note, but it's as much **part of the playing** as any note. In fact, what separates a beginner from a fluent player is how they handle this rest.

At first resting will feel awkward. Your hand keeps trying to move to the next note. When that happens, think of the rest not as "empty time" but as **breathing time**. <mark>To play as if singing, you need places to breathe like a song.</mark> With the metronome on, the beat keeps flowing even while you rest, so it's easy to hold the rest's length exactly. Today, more than a flashy phrase, the goal is to make one bar that rests well. So, let's put breath between the sounds.

```json
{
  "id": "m2.w7.d3.breath_phrase",
  "type": "tab",
  "meta": { "title": "A phrase that breathes (rests as space)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Play the root and b3 short, and rest the whole remaining half bar. This silence leaves what you just said hanging in the air.

## ② Visuals

Let's see the **big picture** of where today's phrase passes on the fretboard. The notes are like yesterday's, but today's lead isn't the notes — it's the **silence between** note and note. Picture the flow of opening the question on the green **4th**, resting a moment, then answering with the root.

```json
{
  "id": "m2.w7.d3.space_map",
  "type": "scale_shape",
  "meta": { "title": "The notes around the silence (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **Few notes, wide gaps.** Open on the 4th (green), pass through the rest, and come down to the root. The spots on the fretboard are the familiar Box 1.

<mark>You can't see it on the fretboard, but the space between these notes is today's real lead.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 70. Today, warm up from the **basic breathing** of play-rest-play. Count the beat inside even while you rest.

```json
{
  "id": "m2.w7.d3.warmup",
  "type": "tab",
  "meta": { "title": "Play, rest, play — feel the silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "duration": "half", "rest": true },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** Play the root once, rest the whole half bar, then play the root again. Feel the beat flowing during the rest.

**10–20 min · Brain training (today's target = holding the rest's length)**
The most common mistake when resting is going to the next note too soon. Carve into your body that a rest also has an **exact length**. <mark>When you count the resting beats clearly inside, the space doesn't waver.</mark>

**20–40 min · Real practice: phrasing with space (BPM 70)**
This is today's finished piece. Toss the question, **rest**, then answer.

```json
{
  "id": "m2.w7.d3.space_phrase",
  "type": "tab",
  "meta": { "title": "Question, breath, answer (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** Bar 1 asks up to the 4th and rests a beat. Bar 2 rests a beat, then passes 5th-b3 and answers with the root. The rest separates question and answer.

<mark>When the rest clearly separates question and answer, the phrasing with breath is complete.</mark>

**40–50 min · Recording (today's mission)**
Record the phrasing with space three times. Whether the rest holds its exact length, whether that silence feels natural rather than stiff — listen for those.

**Today's completion criteria:** You put an exact-length rest between question and answer, and thanks to that space the two phrases split clearly to make phrasing with breath.

## ④ Tips / Common Mistakes

Common mistakes when handling space. Most come from not being able to bear the rest.

```json
{
  "id": "m2.w7.d3.where_to_breathe",
  "type": "scale_shape",
  "meta": { "title": "Breathe after the question, before the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Breathe right here.** After asking with the 4th (green), empty a moment before answering with the root.

- **Filling the silence because you can't wait.** If you add notes because the empty spot makes you anxious, the space disappears. Stopping your hand is playing too.
- **Passing over the rest too quickly.** If it's one beat, rest the whole beat. Brushing past it makes the conversation look rushed.
- **Resting without a metronome.** With no reference beat, the rest's length changes every time. Count it to BPM 70.
- **Stopping after one slip.** Space gets comfortable through practice. Even if the rest wobbles a little, carry through to finish the bar.
</content>
