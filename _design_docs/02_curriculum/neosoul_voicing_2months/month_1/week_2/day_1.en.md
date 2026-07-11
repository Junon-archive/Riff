---
title: "The 9th's color — add9 and m9"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — The 9th's color: add9 and m9

## ① Theory

This week is where the tinting begins. Onto the **Dm9 → G13** vamp you got last week, from today we drop **tension** — a splash of color — one drop at a time. The first color is the **9th**. <mark>Just laying on a single 9th makes a flat chord bloom soft and round.</mark> **add9** adds only the 9th to a triad; **m9** adds the 9th to a 7th chord (with the **b7**) — the same 9th, but held in a different vessel.

In D minor, **the 9th is E**. **Dm(add9)** rings just R, b3, and the **9** — a clear sound. Add the **b7 (C)** and it becomes **Dm9** at once. <mark>The moment the b7 enters, the sound grows deeper and jazzier.</mark> Remember with hand and ear that the difference between the two chords is exactly **one b7**.

Today's goal is simple. <mark>To tell the 9th's color of **add9** and **m9** apart by ear.</mark> No speed needed. Ring the two chords slowly in turn, and listen separately for the soft color the 9th makes and the depth the b7 adds. So first, let's lay the **Dm(add9)** grip on the hand.

```json
{
  "id": "m1.w2.d1.dm_add9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm(add9) grip — no b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Dm(add9)** — only R, b3, and the **9** ring. It's a triad plus the 9th, with **no b7**.

## ② Visuals

Now add the **b7** on top and tint it into **Dm9**. <mark>You only lay one more finger (3rd string, 5th fret), yet the depth of the sound changes completely.</mark> The 9th (E) stays put; you're just filling in the b7.

```json
{
  "id": "m1.w2.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — add b7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Dm9** = Dm(add9) with just the **b7** (3rd string, 5th fret) added.

Let's hear the two chords side by side. <mark>Bar 1 is add9, bar 2 is m9 — the 9th stays, only the b7 comes and goes.</mark>

```json
{
  "id": "m1.w2.d1.add9_vs_m9",
  "type": "tab",
  "meta": { "title": "Dm(add9) - Dm9", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** Bar 1 add9, bar 2 adds the **b7** to make m9. The **9th (E)** stays alive in both bars.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Warm your hand by grabbing Dm(add9) and Dm9 in turn. <mark>Get the feel of one finger on the 3rd string going in and out into your body.</mark>

**10–20 min · Brain training (telling the 9th's color apart)**
With the left hand only, silently move between the two chords. Check with your eyes first: the difference of having the **b7 (3rd string)** or not.

**20–40 min · Real color drill (BPM 70)**
Repeat the four bars below, moving add9 → m9 twice. Chase by ear <mark>the moment the b7's depth spreads over the 9th's soft color</mark>.

```json
{
  "id": "m1.w2.d1.color_drill",
  "type": "tab",
  "meta": { "title": "add9 / m9 color drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm(add9)", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** Move add9 → m9 twice and hear how the **9th's color** deepens.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Check whether add9 and m9 sound like different colors.

**Done when:** You can ring Dm(add9) and Dm9 in turn and tell the 9th's color difference apart by ear.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most when handling the **9th**.

```json
{
  "id": "m1.w2.d1.ninth_spot",
  "type": "fretboard_diagram",
  "meta": { "title": "The 9th (E) — string 2 fret 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ The **9th (E)** is the 2nd string, 5th fret — one octave and one step above the root.

- **The 9th gets buried.** The 2nd string 5th fret must ring clearly for the color to come out. Stand the finger up slightly so other strings don't cover it.
- **It's add9 but the b7 sneaks in.** Mute the 3rd string firmly to get the pure add9 sound.
- **The two chords sound the same.** Drop the BPM to 55, ring one chord at a time long, and open your ears.
- **Your hand hurts.** If force piles onto the pinky (2nd string), lower the wrist a touch to share the weight.
