---
title: "Ab13 → G13 — the half-step slide approach"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Sliding in with a half-step

## ① Theory

Now let's **move** the **Ab13** you built yesterday. The whole point of an approach chord is that it doesn't stand still. <mark>Set Ab13 briefly, then slide the whole hand down a half-step to G13 — that's all of today.</mark> On guitar, this gliding move is called a **slide**.

A slide moves only the fret **without lifting your finger off the string**. So the two notes don't cut off — they **link into a single line.** <mark>Rather than landing flat on the target, it feels like skating in.</mark> That one step where the 6th-string root connects from **fret 4 (Ab)** to **fret 3 (G)** is today's star.

First, practice the slide on the 6th string alone. Press **fret 4**, sound it, then **without lifting** your finger, push all the way to **fret 3**. <mark>Success is when a single pick stroke links the two frets smoothly.</mark>

```json
{
  "id": "m1.w3.d2.root_slide",
  "type": "tab",
  "meta": { "title": "Root slide — Ab to G (6th string)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "Ab", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "half", "label": "G", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** Hit the 6th string fret 4 and push to fret 3 with the finger kept down. Get the feel of one slide.

## ② Visuals

Now slide not just one string but the **whole chord**. Hold the **Ab13** grip as one block, push the whole hand down a half-step, and it becomes **G13** just like that. <mark>All four fingers slide one step at the same time.</mark> First, let's put the approach-chord grip back in your eye.

```json
{
  "id": "m1.w3.d2.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — before the slide", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **The Ab13 grip.** Keep this hand shape and get ready to push down a half-step.

Now the real chord slide. Press **Ab13** on the first two beats, slide **down a half-step to G13**, and it <mark>lands smoothly</mark>. Following the slide mark (the diagonal line over the string), the whole hand drops one step.

```json
{
  "id": "m1.w3.d2.chord_slide",
  "type": "tab",
  "meta": { "title": "Ab13 slide to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Press Ab13 (6th string fret 4) and slide the whole hand down a half-step to G13 (fret 3).

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
**BPM 65.** Repeat the **fret 4→3** slide on the 6th string alone. <mark>Keep the finger from lifting off the string</mark> — push with it planted.

**10–20 min · Brain training (drawing the glide)**
Silently draw the **Ab13 → G13** slide with the left hand only. Trace with your eyes the path of all four fingers sliding one step at once.

**20–40 min · Real slide approach (BPM 75)**
Repeat the **slide approach** below. Watch just one thing: <mark>whether it links unbroken from Ab13 to G13</mark>.

```json
{
  "id": "m1.w3.d2.chord_slide_loop",
  "type": "tab",
  "meta": { "title": "Ab13 slide to G13 x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Loop the slide approach twice in a row. Don't miss the sliding landing each time.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Compare whether the two chords cut off abruptly or slid into a single line.

**Done when:** You can half-step-slide the whole hand from **Ab13** to **G13** and link the two chords into one unbroken line.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most in the chord **slide**.

```json
{
  "id": "m1.w3.d2.slide_path",
  "type": "fretboard_diagram",
  "meta": { "title": "Slide path — fret 4 to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab b7", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "G b7", "role": "chord_tone" }
  ]}
}
```
▶ 6th string fret 4→3 and 4th string fret 4→3 are the slide paths that glide together.

- **The finger lifts off the string.** Releasing pressure mid-slide cuts the sound. Keep it lightly planted all the way.
- **You press too hard.** Too much force makes it stiff and it won't glide. Press only as much as you need to push.
- **The landing overshoots.** Stop exactly at fret 3. Slide past to fret 2 and the chord changes.
- **The tempo rushes.** It's just a half-step, so there's no need to hurry. Learn the glide slowly at **BPM 65** first.
