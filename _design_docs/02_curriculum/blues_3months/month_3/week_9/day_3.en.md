---
title: "Landing while switching between two homes — walking the changes across A7 and D7"
dayKey: "m3.w9.d3"
estMinutes: 50
i18nKey: "lesson.m3.w9.d3"
---

# Day 3 — landing while switching between A7 and D7

## ① Theory

Over two days we built two homes. A7's home **A**, and D7's home **D**. Today we land while **switching** between the two. <mark>Every time the chord changes from A7 to D7, the home you land on moves house too, from A to D.</mark> Over one chord almost any note fits well enough, but the moment the chord changes, the 'right home' and the 'wrong home' split apart clearly. This is exactly 'walking the changes.' A feel you couldn't sense while staying on one chord only comes alive when you go between two chords.

Let's see again how close the two homes are. A is **string 4 fret 7**, D is **string 3 fret 7** — the very next string, at the same fret. <mark>Without moving your hand, just cross one string and the home switches from A to D.</mark> So there's no need to panic when the chord changes. You only change the one string you aim at. On the A7 bar, to A on string 4; on the D7 bar, to D on string 3 — this 'one-string move' is today's key.

At first, call up the next home just before the chord changes. As A7 nears its end, get ready by thinking 'next is D.' <mark>Rather than reacting after you hear the chord change, you know it ahead of time and go out to meet it.</mark> Being half a beat late is fine at first. As long as you reach home even a little late, the timing pulls forward on its own as you repeat. Once you're used to it, going **A→D→A** becomes as natural as breathing. Today, going between the two chords, carve into your hand the feel of the landing note moving house every time the chord changes.

```json
{
  "id": "m3.w9.d3.switch_landing",
  "type": "tab",
  "meta": { "title": "Switching landings: A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** On the A7 bar 1 land on the root A (string 4 fret 7); on the D7 bar 2 land on the root D (string 3 fret 7). The two green notes are the two homes you go between.

## ② Visuals

Let's look together at the **two homes** inside one box. Green A (string 4) and green D (string 3) sit right next to each other.

```json
{
  "id": "m3.w9.d3.two_homes",
  "type": "scale_shape",
  "meta": { "title": "Two homes in one box: A and D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **Green A is A7's home, green D is D7's home.** Cross one string and the home switches. The blue 5th E is a stepping stone to both homes.

<mark>Since the two homes sit side by side on neighboring strings, even when the chord changes your hand stays put and just swaps homes.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 72. From the root A to the root D, repeat the shortest move between the two homes, one string at a time.

```json
{
  "id": "m3.w9.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: land on A, then on D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** A (string 4 fret 7) for a half beat, D (string 3 fret 7) for a half beat — get the feel of swapping homes on the next string at the same fret.

**10–20 min · Brain training (today's target = moving A↔D along the chords)**
Before real practice, practice calling up the next home in the order A7→D7→A7. <mark>Think of the next home one beat before the chord changes, and your landing won't be late.</mark>

**20–40 min · Real practice: four bars going A7·D7 (BPM 72)**
Across four bars, A7·D7·A7·D7 ring in turn. Land the end of each bar on that chord's home — A, D, A, D.

```json
{
  "id": "m3.w9.d3.switch_four_bars",
  "type": "tab",
  "meta": { "title": "Four bars: A7 D7 A7 D7 landings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "A", "isRoot": true, "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** Odd bars land on the root A, even bars on the root D. Even with the same lead-in notes, just changing the end note makes the chord follow clearly.

<mark>Same lead-in, different landing — swap just the one end note and the two chords come through distinctly.</mark>

**40–50 min · Recording**
Record the four-bar switch over an A7·D7 backing. Check by ear that the landing note moves house every time the chord changes.

**Today's completion criteria:** Across four bars where A7·D7 ring in turn, you moved the landing note to A and D exactly every time the chord changed.

## ④ Tips / Common Mistakes

Common mistakes when going between two homes. Most come from the 'timing of swapping homes.'

```json
{
  "id": "m3.w9.d3.aim_two_homes",
  "type": "scale_shape",
  "meta": { "title": "Aim: A for A7, D for D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "isRoot": true, "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "role": "target", "highlight": true }
  ]}
}
```
▶ **A for A7, D for D7.** Swap the two green homes to match the chord. Same fret on the next string, so your hand barely moves.

- **Landing on the previous home even after the chord changed.** Sitting on A while D7 rings stops the walk. When it changes, move house to D.
- **Moving your whole hand to swap homes.** It's the next string, same fret. Change only the string you aim at.
- **Landing a beat late each time.** Call up the next home before the chord changes and you won't be late.
- **Pushing the tempo first.** Until you go between the two homes exactly at BPM 72, going faster comes later.
