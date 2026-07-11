---
title: "Building short phrases inside Box 1"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — Build 3–4 note phrases inside Box 1

## ① Theory

You've memorized Box 1 and you've got the blue note in hand. But just running the scale up and down is still 'practice,' not 'music' yet. From today, let's <mark>build short phrases inside Box 1.</mark> A phrase is **a few notes — 3 or 4 — chosen and strung together like one short saying**. Like speaking a single sentence, you make a small story out of a handful of notes. If the scale is the ingredients, a phrase is one dish cooked from them.

The blues is a conversation, remember? Phrases have **a question and an answer** too. When the notes climb upward, <mark>they get a 'floating' feeling — that's the question.</mark> Come back down and arrive on a stable note like **the root or the 5th**, and that's the 'answer,' and the mind settles. That's why good phrases mostly **end on a stable note**. Just choosing the last note well makes a phrase feel complete. Keep asking questions and the listener gets restless; string only answers and it gets dull. Alternating the two is exactly the push-and-pull of the blues.

You don't need many notes. <mark>Three notes are plenty for a fine phrase.</mark> If anything, the fewer notes you spend, the more clearly each one is heard. Today we'll build small phrases around the center of Box 1 — near **the root A on the 4th string (7th fret)**. It's fine to slip up. Picking a few notes and coming back to the root — that's the whole of today. So, let's first hear a very short three-note phrase.

```json
{
  "id": "m2.w5.d3.phrase_seed",
  "type": "tab",
  "meta": { "title": "A tiny 3-note phrase — 4 b3 R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **Short as it is, this is already a phrase.** From 4 (D) down to b3 (C), landing on the root A. Three notes sound like one short sentence.

## ② Visuals

Let's look at a slightly clearer phrase. This time it's a 'question' climbing up from the root. <mark>R→b3→4→5, four notes climbing step by step, stacking tension.</mark>

```json
{
  "id": "m2.w5.d3.call",
  "type": "tab",
  "meta": { "title": "The call — ascending R b3 4 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **The rising question phrase.** Start from the root on the 4th string and climb to the 5th on the 2nd string. If the end feels 'floating,' you've got it.

This question has no answer yet. <mark>Next we'll answer it back, coming down to the root to make the reply.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 70. Wake up your hand by running one bar of **Box 1** low strings up and down. <mark>Feel whether your hand has settled comfortably at the 5th fret.</mark>

```json
{
  "id": "m2.w5.d3.warmup",
  "type": "tab",
  "meta": { "title": "Box 1 low string warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 70, shuffle feel.** From the 6th string root to the 5th on the 5th string. Just loosen the hand lightly.

**10–20 min · Brain training (today's target = land on the root)**
Decide ahead of time which note the phrase will end on. <mark>Make the last note the root A or the 5th</mark> and you can't fail.

**20–40 min · Real practice: making question and answer (BPM 70)**
A rising question, a falling answer. Play the two bars back to back.

```json
{
  "id": "m2.w5.d3.call_answer",
  "type": "tab",
  "meta": { "title": "Call and answer — up then home to R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70, shuffle feel.** The first bar is the rising question, the second the falling answer. Stop right on the final root.

<mark>Check that the question and answer sound like a pair</mark> and repeat it many times.

**40–50 min · Recording (today's mission)**
Record the two-bar question-and-answer: <mark>listen for the settling landing on the final root.</mark>

**Today's completion criteria:** You linked a rising question and a falling answer over two bars inside Box 1, and landed the ending steadily on the root A.

## ④ Tips / Common Mistakes

Here are the common mistakes when building phrases. More notes doesn't mean better.

```json
{
  "id": "m2.w5.d3.land_tip",
  "type": "scale_shape",
  "meta": { "title": "The phrase pocket — land on R or 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **End on the root or the 5th.** These spots are where a phrase rests easy. Wherever you start, come back here.

- **Cramming in too many notes.** Three notes are enough. Space is what makes each note come alive.
- **Ending on any old note.** Fix the last note as the root or the 5th and the phrase sounds complete.
- **Playing nonstop.** A brief silence between notes is part of the phrase too. Give it room to breathe.
- **Playing the same thing for fear of mistakes.** Shift the note order a little. That's how it becomes your own phrase.
