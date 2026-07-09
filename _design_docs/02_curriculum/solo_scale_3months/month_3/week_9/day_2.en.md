---
title: "Sweeping Dorian with 3rd Intervals + the F# Color Line"
dayKey: "m3.w9.d2"
estMinutes: 50
i18nKey: "lesson.m3.w9.d2"
lang: en
---

# Day 2 — Making a Scale Sound Like Music: Sweeping A Dorian in 3rds and Coloring It with F#

## ① Theory / Explanation

Here's why we're doing this today. Yesterday you got one A Dorian position and F# (the major 6th) under your fingers. But if you just run the scale straight up and down in order — A-B-C-D-E-F#-G — even with F# in there, it just sounds like an "exercise." It doesn't become music. So starting today, we sweep through it using **<mark>3rd intervals</mark>**.

What's a 3rd interval? Instead of climbing the scale one note at a time, you pair up notes by **<mark>skipping one in between</mark>**. A skips to C, B skips to D, C skips to E... like that.

- A–C, B–D, C–E, **D–F#**, E–G, **F#–A**, G–B …

Playing it this way improves two things at once. First, it stops sounding like flat "do-re-mi" and starts sounding like an actual **<mark>melody</mark>**. Second, your hand automatically learns how the notes pair up across the fretboard, so later, when you improvise, you won't be stuck wondering "where's the next note." If you break down solos by great players, you'll find tons of 3rd leaps in there — because climbing the scale step by step gets boring fast.

And here's today's key point. Look at **D–F#** and **F#–A** in the list above. F# shows up as half of a pair twice. Sweeping in 3rds lets F# pass by naturally, yet it still stands out. Yesterday you showed off F# by **stopping** on it; today's practice is about coloring with F# **<mark>within the flow</mark>**.

Last thing: where you stop while sweeping through 3rds matters too. Today's sequence is built to **<mark>land on C (the b3)</mark>**. C is the 3rd of Am7. Flowing colorfully through F# and then settling right onto the chord's 3rd at the end — that's the grammar we'll keep repeating all week.

## ② Visual Reference

First, here's the **<mark>A Dorian 3rd-interval sequence</mark>** (2 bars, eighth notes). It starts on strings 3–4 and climbs in pairs of 3rds up to the 1st string. Along the way, **F# (the 6th, the color note)** passes by twice (highlighted), and it lands on **C (the b3, the 3rd of Am7)** at the end (highlighted).

```json
{
  "id": "m3.w9.d2.third_interval_dorian",
  "type": "tab",
  "meta": {
    "title": "3rd-interval sequence in A Dorian (F# color, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 78
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

Second, here's the **<mark>F# color line</mark>**. Over Am7, it flows down from the top: R(A) → b7(G) → sing **F# (the 6th, the color note)** long with vibrato → then 5(E) → 4(D) → land on **C (the b3, the 3rd of Am7)**. This is today's summary in a nutshell: show off F# by stopping on it, then "resolve" with a 3rd.

```json
{
  "id": "m3.w9.d2.f_sharp_color_line",
  "type": "tab",
  "meta": {
    "title": "A Dorian color line - sing the natural 6th (F#), resolve to b3",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 78
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 78) — 3rd-interval sequence**
With the metronome at 78, run the first 3rd-interval sequence up and back in eighth notes. Once you've gone up, come back down the same way (keeping the 3rd pairing, just reversed). Whenever F# (string 2 fret 7) comes up, add just a little extra emphasis to make it clear. The goal isn't your fingers — it's your **ear** <mark>feeling the "swing of the 3rd leap"</mark>.

**10–20 min · Brain training (mapping F# pairs)**
Metronome off. Within the position, pick out just the **<mark>3rd pairs that end on F#</mark>**. D–F# (string 3 fret 7 → string 2 fret 7), and **F#–A** (string 2 fret 7 → string 2 fret 10). Repeat these two pairs until you can grab them with your eyes closed. Once your hand memorizes which notes F# pairs with, front and back, you can "aim" for F# during improv.

**20–40 min · Real-world improv (Am7 vamp / 74–78 BPM)**
Put on the Am7 vamp backing track. Mission: build a short phrase with **<mark>at least one 3rd leap</mark>**, make sure **F# passes through once** inside that phrase, then **<mark>land on C (the b3)</mark>**. Feel free to start by dropping the second color line right onto the backing track. Today's rule: don't just flow step by step (do-re-mi) the whole time.

**40–50 min · Record & reflect (recommended)**
Record the last 30 seconds of your jam with any recorder. Listen back and check just two things: **① Can you hear the 3rd leap (does it swing instead of stepping flatly)? <mark>② Did F# "sparkle" as it passed through the flow</mark>?** If you need to, slow playback down to 0.75x to check the timing of F#.

**Today's finish line:** Run the 3rd-interval sequence up and back at 78. Find both F#-ending 3rd pairs with your eyes closed. Successfully play "3rd leap + F# passage + land on C" phrases at least 3 times over Am7.

## ④ Tips / Common Mistakes

- **Treating the 3rd sequence as just finger exercise.** A 3rd is a "musical leap" — it only means something if it's heard. If you just stomp frets like a machine, you won't be able to use it tomorrow when you improvise. Keep your ear open for that "swing" on every single leap.
- **Letting F# slip by too quickly.** As you flow through 3rds, F# can go by way too fast. Like today's color line, sometimes **stop on F# and add vibrato** to say "I'm right here."
- **Landing anywhere at random.** If you flow colorfully through 3rds but end on an ambiguous note (the 4th D, or the b7 G), it feels like it's floating in the air. This week, always end on **C (the b3, the 3rd of Am7)** or **A (the root)**. A precise landing is what makes all that earlier color pay off.
- **Losing sync between your hands.** 3rd leaps skip strings, so picking can easily slip. If 78 feels like too much, drop to 70 and nail **accuracy** first. Speed comes after accuracy is locked in.
