---
title: "Week 0 · Day 3 — Refresh the Am Pentatonic Box 1 → First Taste of 3rd Intervals"
dayKey: m1.w0.d3
estMinutes: 50
i18nKey: lesson.m1.w0.d3
lang: en
---

# Day 3 — Refreshing the Am Pentatonic Box 1 Positions + A Taste of 3rd Intervals

## ① Theory / Explanation

Here's why we're doing this today: today we're refurbishing the **home base** we'll be living in for the next three months — **<mark>A minor pentatonic, Box 1</mark> (5th fret).** You probably already know this shape, but today we're going beyond "hands that remember the up-and-down pattern" to actually engrave **<mark>what role each note plays</mark>** into your eyes.

```json
{
  "id": "m1.w0.d3.am_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 refresh (with roles)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

### Running up and down is a "warm-up," not the goal

Here's the thing: running the pentatonic box up and down, back and forth, barely helps your improv skills. Why? Because **<mark>music has no rule</mark> that says "go up the strings in order."** If all you do is drill the up-and-down pattern, your hands only learn the reflex of "always move to the next-door note." So during improv, that's literally all that comes out.

That's why we're only allowing it briefly in Week 0, purely as a **hand-loosening** device, and today we open our very first exit route: the **<mark>3rd-interval sequence</mark>.**

### 3rd intervals = skipping over one

Instead of playing the pentatonic scale "in order," we play it by **<mark>"skipping one note."</mark>** Going up from the low end, the Am pentatonic notes go **A – C – D – E – G – A…** and playing "in 3rds" means:

- From A, instead of the next note, **skip one → D**
- From C, skip one → **E**
- From D, skip one → **G**
- From E, skip one → **A**

We're **<mark>pairing up notes and hopping over</mark>.** (Side note: skipping one note like this in a pentatonic scale actually mixes minor 3rds, major 3rds, and 4ths. That's why we just call it a "3rd sequence" as shorthand — don't stress about the exact interval math, just think of it as "skip-one-hopping.")

```json
{
  "id": "m1.w0.d3.third_interval_taste",
  "type": "tab",
  "meta": {
    "title": "3rd-interval taste in Am pentatonic (skip-one pairs, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "finger": 3, "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "finger": 1, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

Why does this small shift matter so much? The instant you skip a note, the sound suddenly starts to feel **<mark>"like a melody."</mark>** Stepwise motion (up-and-down) is a staircase; a 3rd is a little leap, and your ear responds with "oh, this is actually singing something." That's your very first raw material for improv.

## ② Visual Reference

**(a) A minor pentatonic Box 1 — with roles marked**

```json
{
  "id": "m1.w0.d3.am_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 refresh (with roles)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

**(b) A taste of 3rd intervals — pairing and hopping from the lowest string up**

```json
{
  "id": "m1.w0.d3.third_interval_taste",
  "type": "tab",
  "meta": {
    "title": "3rd-interval taste in Am pentatonic (skip-one pairs, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "finger": 3, "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "finger": 1, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 60–72)**
- One set of Day 2's <mark>spider walk 1-2-3-4</mark> to wake up the hands. Start at whatever BPM you reached yesterday.
- Done when: two clean round trips, no buzz.

**10–20 min · Brain training (BPM 70) — box refresh + role check**
- Run the box in (a) up and down just **four times** (keep it short — this is a warm-up!). Maintain alternate picking.
- Then, the important part: pinpoint just the **<mark>3 R (A) positions</mark>** and **<mark>3 ♭3 (C) positions</mark>** on the fretboard, saying "root, third, root, third" out loud as you fret them.
- Done when: your hand can find all 3 R spots and all 3 ♭3 spots instantly, without looking.

**20–40 min · Real-world feel (BPM 70, Am backing track) — 3rd sequence → connecting to improv**
- First, play through the (b) 3rd-interval tab at BPM 70, deliberately, one note at a time. Choppy at first is fine — just open your ears to the sound of the hop.
- Once it feels familiar, put on the backing track and improvise, mixing **<mark>"half up-and-down, half 3rd-hopping."</mark>** Rule: end phrases whenever possible by **<mark>landing on ♭3 (C) or R (A)</mark>.**
- Done when: even one moment of your 3rd-leap sounds "like a melody" — that's a win.

**40–50 min · Record & reflect (recommended)**
- Record 40 seconds of improv mixing in 3rds. Check: **"Did any section end up sounding more like a song than when I was only running up and down?"**
- If there's even a good 2-second stretch, that's today's harvest. Hold onto that feeling.

## ④ Tips / Common Mistakes

- **Don't fall back into pure up-and-down.** If it feels comfortable, it's tempting to just repeat stepwise motion over and over — but that means missing today's whole point. Force yourself to mix in "hopping," even if it feels awkward.
- **Picking gets tangled when hopping by a 3rd** → That's usually because you're crossing strings a lot. Start by dropping to BPM 55 and drilling **just the string-crossing spots** in isolation.
- **Don't let the charm of ♭3 (C) slip by unnoticed.** In Am, C isn't just a scale note — it's **the chord's 3rd (a guide tone).** If you commit the feeling of stability when you land there to muscle memory now, the 3rd-landing training in Month 1 will feel much easier.
- **Too much all at once?** Today is really just two things: "box review + a taste of hopping." It's fine if it's not perfect — you just need a taste.
