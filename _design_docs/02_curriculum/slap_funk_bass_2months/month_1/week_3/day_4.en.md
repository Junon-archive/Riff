---
title: "The Ghost Groove — A Bouncing Octave, Complete"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — The Ghost Groove, A Bouncing Octave Complete

## ① Theory

It's the final day of Week 3! You gather this week's **dead note ("chick")**, **thumb-ghost-pop**, and **two-hand muting** into one to complete the <mark>ghost groove</mark>. Remember the rough octave groove you made in Week 2? Today's piece is the **version with those two empty slots now all filled by ghosts**.

The pattern repeats **slap-chick-pop-chick**. Thumb the root E for "boom," "chick" on the 3rd string, pop the octave for "snap," "chick" again — these four strikes roll without a rest in eighth notes. Last week the gap between boom and snap was hollow and choppy; now that "chick" fills it, the groove suddenly starts to <mark>pop funky</mark>. This filler is exactly slap's bounce engine.

The tempo is **BPM 75** — the fastest of the week. Don't rush; first warm the hand with the quarter-note prep, then move to the eighth-note groove. Hit the **ghost a touch softer than boom and snap** so it's light like a filler, and deaden the unplayed strings with both hands to kill the noise. When the two measures repeat smoothly, that's this week's completed piece. This groove you finish today is the first fruit where **the thumb, pop, and ghost you built over three weeks lock into one**. So rather than showing off speed, focus on carving into your body the feel of the four strikes rolling evenly.

On **a 5-string**, the notes are the same as on a 4-string. Keep muting the low B with the thumb, or once comfortable, try the same groove on a heavier low string. Now, complete the "chick" you built this week into one <mark>bouncing groove</mark>.

## ② Visuals

Today you build **this week's completed piece**. Play the octave hand shape once, warm the hand with the quarter-note prep, then run the <mark>pinned ghost groove</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, the **octave hand shape**. The lower blue is the root E you slap with the thumb, the upper blue is the octave E you pop. The "chick" between them comes from the 3rd string.

```json
{
  "id": "m1.w3.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Root E below (thumb), octave E above (pop). The "chick" comes from the 3rd string.

```json
{
  "id": "m1.w3.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low B deadened with the thumb.

**Prep — slap-chick-pop-chick quarters.** Before the groove, warm the four strikes one beat each, slowly.

```json
{
  "id": "m1.w3.d4.ghost_groove_prep_4",
  "type": "tab",
  "meta": { "title": "Ghost groove prep (quarters) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Don't rush; re-set the order of boom-chick-snap-chick and the muting.

```json
{
  "id": "m1.w3.d4.ghost_groove_prep_5",
  "type": "tab",
  "meta": { "title": "Ghost groove prep (quarters) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Note and position are the same as on a 4-string. Keep the low B deadened with the thumb.

**This week's completed piece — the bouncing octave ghost groove.** Now in eighth notes. Repeat <mark>slap-chick-pop-chick</mark> over two measures. It's the Week-2 empty slots filled with ghosts.

```json
{
  "id": "m1.w3.d4.ghost_octave_groove_4",
  "type": "tab",
  "meta": { "title": "Octave slap groove with ghosts — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** Repeat slap-chick-pop-chick. Make the ghost ("chick") by laying the left hand lightly, no pitch. This filler brings the groove to life.

```json
{
  "id": "m1.w3.d4.ghost_octave_groove_5",
  "type": "tab",
  "meta": { "title": "Octave slap groove with ghosts — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75, 5-string.** Note and position are the same as on a 4-string. You can also try it heavier while keeping the low B muted.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Flow yesterday's slap-chick-pop-chick lightly at BPM 60 to wake the hand. Check that the ghost is a touch softer than boom and snap.

**10–20 min · Brain training**
Play the prep example (quarters) very slowly. Check <mark>whether the order of the four strikes and the muting stay intact</mark>.

**20–40 min · Real play (this week's piece)**
Repeat the pinned ghost groove at **BPM 75**. The goal is the two measures connecting smoothly — if it wobbles, go back to the prep example. Learn it on the 4-string, then confirm the same feel on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the ghost lives and the groove bounces, and the unplayed strings stay quiet</mark>. Note the BPM you reached this week.

**Done when:** you can play the bouncing octave ghost groove (slap-chick-pop-chick, eighths) at BPM 75 with no noise, smoothly over two measures, on both a 4-string and a 5-string. — Weekly deliverable: a full run of the bouncing ghost octave groove. (Week 3 complete!)

## ④ Tips / Common mistakes

- **Ghost too loud.** If the "chick" is as loud as boom and snap, the groove turns dull. Hit the ghost a touch softer, light like a filler.
- **Rushing at 75.** The faster tempo slams the four strikes together. If it wobbles, drop to the prep example (quarters) and start from the order.
- **Low hum after the pop.** When you pop, the lower strings ring along. Deaden the low strings with the side of the right thumb.
- **Neglecting low B (5-string).** The more the groove repeats, the more B leaks. Always keep B covered with the thumb.
