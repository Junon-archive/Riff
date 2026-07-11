---
title: "Carving Box 1, the home of your lead, into your hands"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — Imprint the A minor pentatonic Box 1 (5th fret)

## ① Theory

For four weeks we learned how to ask a 'question' with rhythm. From now on it's your turn to **answer with a lead**. To build an answer you first need a map that tells you which notes to reach for, and that map is the **minor pentatonic Box 1**. <mark>Box 1 is the playground where a solo runs free.</mark> In A blues this playground opens up at the **5th fret**. Once your hand sits here, any note you press sounds right for the blues, so there's no wrong note to worry about.

Box 1 is just five kinds of note — **R (root)·b3·4·5·b7** — a shape that repeats across two octaves. The hand shape is very simple too. Your **1st finger (index) takes the 5th fret** and your **4th finger (pinky) takes the 8th fret**, and most notes are handled inside that narrow fret span. <mark>You can run up and down all six strings without moving your hand much at all.</mark> That's why this shape sticks to your hand fast, even in a single focused day.

The most reassuring landmark of all is the position of the **root A**. **6th string 5th fret**, plus 4th string 7th fret and 1st string 5th fret — these three spots are home you can always come back to. If you get lost in a solo, just return to the root. <mark>Today we're not building phrases. Carving this shape into your hand — that one thing is enough.</mark> It's fine if notes come out choppy at first. Once the positions settle in, the sound smooths out on its own. First, find the three home roots with your eyes.

```json
{
  "id": "m2.w5.d1.roots",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 — the three home roots", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Box 1's home — the three A roots.** Start at the 6th string 5th fret, then 4th string 7th fret, then 1st string 5th fret. Memorize these three spots first.

## ② Visuals

Now let's see the whole shape — how Box 1's five notes repeat across six strings. <mark>The blue dots are the root A, the rest are scale notes.</mark> Remember the **shape**, not the colors — this one box is the starting point of every solo to come.

```json
{
  "id": "m2.w5.d1.box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **The full 5th-fret Box 1 shape.** From the 6th string R to the 1st string b3, scan low strings to high with your eyes. It all fits inside a two-fret span (5–8).

The three blue roots are the pillars of the box. <mark>Grab the pillars first, and the rest of the notes just fill in between them.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 70. No rush. Wake up your hand by pressing the **three A roots** one by one. <mark>Check that you can find all three roots with your eyes closed.</mark>

**10–20 min · Brain training (today's target = imprint the Box 1 position)**
Without looking at the score, <mark>draw the Box 1 shape once in your head.</mark> Saying out loud which string and fret each dot lands on makes it stick faster.

**20–40 min · Real practice: run Box 1 up and down (BPM 70)**
Now go up Box 1 one note at a time from the low strings to the high, then back down.

```json
{
  "id": "m2.w5.d1.box1_ascend",
  "type": "tab",
  "meta": { "title": "A minor pentatonic Box 1 — ascending", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70, shuffle feel.** Start from the 6th string 5th fret root and climb to the 1st string. Let each note ring clean, on your fingertips.

<mark>One note at a time, clearly</mark> — even if it breaks up, don't stop; go all the way up and back down.

**40–50 min · Recording (today's mission)**
Record one pass up and down Box 1: <mark>listen for whether all twelve notes ring.</mark>

**Today's completion criteria:** You ran the A minor pentatonic Box 1 up and down from low strings to high without stopping, and you can find the three roots with your eyes closed.

## ④ Tips / Common Mistakes

Here are the mistakes that come up most when memorizing Box 1. Nail the hand shape alone and you're halfway there.

```json
{
  "id": "m2.w5.d1.finger_tip",
  "type": "scale_shape",
  "meta": { "title": "Box 1 low string — 1st and 4th finger", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **Index on 5, pinky on 8.** Make this finger layout your default on the 6th string and the other strings get easier too.

- **Pressing everything with one finger.** 5th fret is the index, 8th fret is the pinky — split the work between fingers and it goes much faster.
- **Notes ring out muddy.** Stand your fingertip up and press just behind the fret. Even a light graze against a string muddies the sound.
- **Trying to memorize it all at once.** Today it's the three roots and the low strings. The rest sticks on its own with repetition.
- **Cranking up the speed first.** Today's goal is position. Add speed slowly across the week.
