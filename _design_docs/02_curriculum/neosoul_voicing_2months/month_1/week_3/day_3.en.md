---
title: "Inserting the approach into the vamp — Dm9 → Ab13 → G13"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — Putting the slide approach into the vamp

## ① Theory

Finally we drop this week's **slide approach** into the vamp. In the signature progression **Dm9 → G13**, instead of arriving flat on G13, you <mark>slide in from Ab13 a half-step above</mark> to add color. Today you make the approach flow naturally inside a two-bar vamp.

Here's the flow. **Bar 1** rings the home chord **Dm9** comfortably as a whole note; on the first two beats of **bar 2** you press **Ab13**, then slide to **G13** for the last two beats. <mark>Bar 1's stability against bar 2's glide contrasts and brings the vamp to life.</mark> The approach always sits **right before** the target chord.

First, lay the home chord **Dm9** on the hand again. On the 5th string, **fret 5** is the root, and the **9th** on the 2nd string makes the soft color. <mark>Starting from this comfortable spot makes the next glide stand out more.</mark>

```json
{
  "id": "m1.w3.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — home chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Home chord Dm9.** 5th string 5th fret root; the 9th on the 2nd string makes the soft color.

## ② Visuals

Before moving to bar 2, re-check the **approach chord Ab13** you'll slide from. <mark>Press this grip, push it down a half-step, and it's G13 right away.</mark>

```json
{
  "id": "m1.w3.d3.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — the approach chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **The Ab13 grip.** The spot you press on bar 2's first two beats, then soon push down a half-step.

Now join the two bars into one. It's the **finished approach vamp** where bar 1 **Dm9** and bar 2's **Ab13 → G13** slide flow as a single stream. <mark>You feel a round trip: resting comfortably at home, then sliding back in from a half-step above.</mark>

```json
{
  "id": "m1.w3.d3.approach_vamp",
  "type": "tab",
  "meta": { "title": "Dm9 - Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Bar 1 Dm9; in bar 2, press Ab13 and slide down a half-step to G13.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
**BPM 65.** Warm the hand by grabbing Dm9 and the Ab13 → G13 slide in turn. <mark>Loosen up the hand move between the home chord and the approach in advance.</mark>

**10–20 min · Brain training (checking the spots)**
Silently draw the order **Dm9 → Ab13 → G13** with the left hand only. Check with your eyes the move from the 5th-string root to the 6th-string root.

**20–40 min · Real approach vamp (BPM 75)**
Repeat the four bars below **without a break**. Watch just one thing: <mark>whether the slide approach rings clearly every second bar</mark>.

```json
{
  "id": "m1.w3.d3.approach_vamp_loop",
  "type": "tab",
  "meta": { "title": "Approach vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Loop the approach vamp twice. Don't miss the sliding landing every second bar.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Compare last week — jumping flat to G13 — with today's vamp that slid in.

**Done when:** You can loop the **Dm9 → Ab13 → G13** vamp at BPM 75 without a break and link bar 2's slide approach smoothly.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you roll the **approach vamp**.

```json
{
  "id": "m1.w3.d3.transition_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Transition zone — Dm9 to Ab-G", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "Dm9 R", "role": "root" },
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ It's the transition point that moves from the 5th string fret 5 (Dm9) to the 6th string fret 4→3 (Ab→G).

- **You're late from bar 1 to bar 2.** Move the hand toward the 6th string on Dm9's fourth beat and you won't be late.
- **The approach sounds flat.** Drag Ab13 too long and it sounds like a separate chord, not an approach. Press it only briefly on the first two beats.
- **The slide breaks.** In bar 2, don't lift the finger — push it down a half-step.
- **It gets messy when the speed rises.** Drop the BPM to 65 and make the move clean first.
