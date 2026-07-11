---
title: "Linking the two grips — Dm9 to G13 changes"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — Dm9 to G13, a smooth change

## ① Theory

You're past the halfway point of Week 1. Now you link the two grips into one flow. <mark>The real flavor of a neosoul vamp lives in the "seam" where the chord changes.</mark> **Dm9 → G13** — grab the two grips in choppy jumps and the vamp stumbles, but link them smoothly and it spreads like flowing water. Today is the day you polish that short moment of switching the hand shape until it's **smooth**. You learned the two chords separately through yesterday, so today you just lay the bridge between them.

Knowing **what moves and what stays** between the two grips first makes the change easy. <mark>The 2nd string 5th fret (E) is held in both chords — leave your pinky fixed right there.</mark> Only the other fingers move. The root drops from the 5th string (**Dm9**) to the 6th string (**G13**), the 4th string stays at the 3rd fret, and the 3rd string pulls back half a step from the 5th fret to the 4th.

Today, don't push the speed. All you need is the feel of <mark>the three other fingers moving as one block, pivoting on the pinky anchor</mark>. So first, let's check the **Dm9** grip again.

```json
{
  "id": "m1.w1.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — x5355x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Dm9 has its root on the 5th string.** Remember the pinky laid on the 2nd string 5th fret (9).

## ② Visuals

Next is the **G13** grip. Set the two diagrams side by side and you'll see at a glance how the fingers move — everything except the **2nd string 5th fret**. <mark>The root slides diagonally, from the 5th string to the 6th.</mark>

```json
{
  "id": "m1.w1.d3.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 3x345x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13 has its root on the 6th string.** The pinky on the 2nd string 5th fret (13) stays put.

Now let's grab the two chords in turn. One chord per bar, **don't lift the pinky**, move only the rest. <mark>Just before the chord changes, picture the next hand shape ahead of time.</mark>

```json
{
  "id": "m1.w1.d3.change_drill",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 change drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 65.** Alternate Dm9 → G13, one per bar. Pivot on the pinky anchor and glide the rest across.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Loosen your hand by grabbing each grip once. Check that <mark>the pinky (2nd string 5th fret) never lifts across the two chords</mark>.

**10–20 min · Brain training (change path, slow)**
Before changing chords, say **what moves** out loud: "Root 5th→6th, 3rd string 5th→4th fret, pinky stays."

**20–40 min · Real changes (BPM 65)**
This time ring twice per bar to drill the change more tightly. Watch just one thing: <mark>does the sound break when it changes</mark>.

```json
{
  "id": "m1.w1.d3.change_half",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 twice-per-bar drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 65.** Same chord twice per bar. On the second hit, let your hand get ready to move to the next chord.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds, then check. <mark>Does the space between Dm9 and G13 join without a break</mark>.

**Done when:** You can change between the Dm9 and G13 grips without a break, keeping the pinky anchor held.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most in the **change**.

```json
{
  "id": "m1.w1.d3.anchor",
  "type": "fretboard_diagram",
  "meta": { "title": "Shared note anchor — string 2 fret 5 (E)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 4, "label": "E", "role": "color" }
  ]}
}
```
▶ **This one note (2nd string 5th fret, E) is the pivot of the change.** Don't lift your pinky across the two chords.

- **The sound breaks when you change.** Not lifting the pinky shrinks the gap dramatically.
- **The whole hand wobbles.** Pivot on the anchor and move only the three other fingers as one block.
- **The 3rd string is off.** Make the half-step move from 5th to 4th fret with only the fingertip, finely.
- **The timing drags.** Set the next chord in your head one beat early.
