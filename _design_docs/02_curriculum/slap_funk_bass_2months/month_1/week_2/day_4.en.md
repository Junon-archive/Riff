---
title: "Your First Slap Groove — The Octave Draft"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — Your First Slap Groove, The Octave Draft

## ① Theory

It's the final day of Week 2! Up to yesterday you learned the octave T-P and dressed it in rhythm. Today you connect those pieces into one and complete your **first slap groove**. The name sounds big, but it's really a very simple **eighth-note groove** where <mark>thumb (root)-rest-pop (octave)-rest</mark> repeats.

Why leave a **rest (empty slot)** in between? You leave it empty for now, but **in Week 3 you'll fill that slot with ghosts (mutes)**. You're setting up the gap in advance. So today the key is to stamp only the thumb and pop clearly while <mark>keeping the empty rests exactly</mark>. The hand shape stays the **octave**.

The tempo is **BPM 70**. It's a touch faster than the past few days, but don't rush — run it only within the range where <mark>the boom-snap stays even and the groove doesn't wobble</mark>. First warm the hand with the quarter-note prep, then move to the eighth-note groove. When the two measures repeat smoothly, that's this week's completed piece. In fact, these eight notes you play today are the **skeleton of your first real groove**, one you'll refine all month. It isn't flashy, but add the Week-3 ghosts and the variations to come on top, and it becomes a proper funk line. So for now, focus only on standing that skeleton up straight and solid.

On **a 5-string**, the notes are exactly the same as on a 4-string — keep the low B deadened with the thumb, or once comfortable, move the same groove to a B-string root and try it heavier. All right, complete what you built this week into a single groove.

## ② Visuals

Today you build **this week's completed piece**. Play the octave hand shape once, warm the hand with the quarter-note prep, then run the <mark>pinned octave groove</mark>. Each example comes in **both a 4-string and a 5-string version**.

First, the **octave hand shape**. The lower blue is the root E (4th string) you slap with the thumb; the upper blue is the octave E (2nd string, 2nd fret) you pop.

```json
{
  "id": "m1.w2.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Root E below (thumb), octave E above (pop). It's the hand shape you drilled all week.

```json
{
  "id": "m1.w2.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is the same as on a 4-string. Keep the low B deadened with the thumb.

**Prep — quarter-note octave T-P.** Before the groove, warm up root (thumb)-octave (pop) one beat each, slowly.

```json
{
  "id": "m1.w2.d4.groove_prep_4",
  "type": "tab",
  "meta": { "title": "Octave groove prep (quarters) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Don't rush; re-set the octave jump cleanly again.

```json
{
  "id": "m1.w2.d4.groove_prep_5",
  "type": "tab",
  "meta": { "title": "Octave groove prep (quarters) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same note and position as the 4-string. Keep the low B deadened with the thumb.

**This week's completed piece — rough octave slap groove.** Now in eighth notes. Repeat <mark>thumb (root)-rest-pop (octave)-rest</mark> over two measures. You'll fill the empty slots with ghosts in Week 3.

```json
{
  "id": "m1.w2.d4.octave_groove_rough_4",
  "type": "tab",
  "meta": { "title": "Octave slap groove (rough) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Repeat thumb (root)-rest-pop (octave)-rest. You'll fill the empty slots with ghosts in Week 3.

```json
{
  "id": "m1.w2.d4.octave_groove_rough_5",
  "type": "tab",
  "meta": { "title": "Octave slap groove (rough) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** Same note and position as the 4-string. You can also try the same groove on a B-string root for a heavier feel.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen up yesterday's two rhythms (sixteenth double, offbeat) lightly at BPM 60 to wake the hand.

**10–20 min · Brain training**
With the octave hand shape, play the prep example (quarters) very slowly. Check <mark>whether the jump is clean and the rests are exact</mark>.

**20–40 min · Real play (this week's piece)**
Repeat the pinned groove at **BPM 70**. The goal is the two measures connecting smoothly — if it wobbles, go back to the prep example. Learn it on the 4-string, then confirm the same feel on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for <mark>whether the boom-snap is even and the rests are clear</mark>. Note the BPM you reached this week.

**Done when:** you can play the rough octave slap groove (thumb root + pop octave, eighths) at BPM 70, keeping even the rests, smoothly over two measures, on both a 4-string and a 5-string. (Week 2 complete!)

## ④ Tips / Common mistakes

- **Can't stand the rests.** If you keep filling the empty slots with notes, there's no room for the Week-3 ghosts. For now, keep the silence exactly.
- **Rushing at 70.** The slightly faster tempo drags the boom-snap forward. If it wobbles, drop to the prep example (quarters) and rebuild evenness first.
- **Pop too loud.** The pop pops out, so it easily sounds louder. Give the thumb a bit more push to match the two sizes.
- **Neglecting low B (5-string).** The more the groove repeats, the more B leaks. Always keep B covered with the thumb.
