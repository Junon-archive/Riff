---
title: "Moving the shape — sliding the brick sideways"
dayKey: "m1.w3.d2"
estMinutes: 30
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Sliding the brick sideways

## ① Theory

Yesterday you built one brick. Today's magic is this — just <mark>slide that brick sideways along the neck</mark> and the whole chord changes. **You don't change the finger shape at all**; you slide the entire form. This is exactly why power chords are so loved in rock. Memorize one shape and **twelve chords** come free. In weeks 1 and 2 you hunted for each note fresh, but from power chords on you only need to remember the shape's position — far more economical.

From today you leave the open strings and use a <mark>movable shape</mark>. Put the 6th-string root shape at the **3rd fret and it's G5, at the 5th fret it's A5**. Put the 5th-string root shape at the 3rd fret and it's C5, at the 5th fret D5. **The note name of the fret where the root sits is the chord's name.** So once you know the fret, the chord name follows on its own.

The key to moving is <mark>sliding the whole thing while keeping the hand shape</mark>. Don't lift a finger to re-fret one at a time; keep both fingers **stuck together as one block** and slide. In the instant you move, release the pressure a touch so you float just off the strings — it's far smoother. After you move, check once that the gap between your two fingers hasn't widened and that the 5th still rings clear — then it's perfect. Get today's two round trips, **G5↔A5 and C5↔D5**, clean, and half of rock's songs roll along on those two.

## ② Visuals

First, look at two movable shapes. The 6th-string root <mark>G5</mark> and the 5th-string root C5 — just yesterday's shapes with the **open string swapped for a fret**.

```json
{
  "id": "m1.w3.d2.g5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "G5 power chord (movable 6th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ 6th-string 3rd-fret root (blue R) and 5th-string 5th-fret 5th (blue 5). Slide this shape to the 5th fret and it's A5.

```json
{
  "id": "m1.w3.d2.c5_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "C5 power chord (movable 5th-string root)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "C" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

▶ C5 with the root down on the 5th string, 3rd fret. The 6th is X, so kill it with the palm. Slide this shape to the 5th fret and it's D5.

Now round-trip the 6th-string shape. Slide from **G5 up to A5**, then back.

```json
{
  "id": "m1.w3.d2.g5_a5_move",
  "type": "tab",
  "meta": { "title": "G5 to A5 — slide the 6th-string shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. Two beats per chord. In the moment you move, slide the whole thing while holding the hand shape.

Now the 5th-string shape, C5↔D5. Tomorrow's riff climb is exactly this move.

```json
{
  "id": "m1.w3.d2.c5_d5_move",
  "type": "tab",
  "meta": { "title": "C5 to D5 — slide the 5th-string shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "C", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 70. Keep the 6th string killed with the palm. Glide between the two frets, keeping just two notes clear.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
At BPM 60, grab and release yesterday's E5 and A5 shapes again to revive the feel of ringing just two notes.

**7–17 min · Today's skill**
Hold the G5 and C5 shapes, then <mark>slide the whole thing</mark> to the next fret to make **A5 and D5**. Check both notes stay clear at the new spot too.

**17–27 min · Applying it**
Repeat the examples (G5↔A5 · C5↔D5 round trips) four times each at BPM 70 → once there's **no hesitation**, raise it one step. Don't let the beat lag at the moment the chord changes.

**27–30 min · Check**
Write down the BPM you reached, and if you like, record 30 seconds to hear whether noise creeps in during the move.

**Done when:** you can round-trip two power chords (G5↔A5 or C5↔D5), sliding while holding the shape, with no stray noise.

## ④ Tips / common mistakes

- **Re-fretting.** Lifting your fingers to re-place them one by one is slow. Keep both fingers stuck together and slide the whole block.
- **Leaving sound during the move.** Ease the pressure a touch in the instant you move so you float off the strings — it cuts the scraping noise.
- **Confusing chord names.** The fret where the root sits = the chord name. 3rd fret on the 6th string is G, 5th fret is A.
- **Forgetting the 6th string.** On the 5th-string root shapes (C5·D5) the 6th rings easily. Keep it draped under your palm.
