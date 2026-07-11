---
title: "Dorian's Secret in One Note: Meeting the Major 6th, F#"
dayKey: "m3.w9.d1"
estMinutes: 50
i18nKey: "lesson.m3.w9.d1"
lang: en
---

# Day 1 — The One Note That Turns Dark Minor Sophisticated: A Dorian's Major 6th, F#

## ① Theory / Explanation

Here's why we're doing this today. Over the last 8 weeks, you've gotten comfortable with minor, chord tones, and guide tones. But have your solos been stuck circling around "dark minor" the whole time? Sad, heavy, always the same color. Starting today, we change that color. With just **<mark>one note</mark>**.

The natural minor (Aeolian) we already know looks like this, based on A:

- **A Aeolian**: A B C D E **F** G → the 6th note is **F (minor 6th, b6)**

Now let's raise that 6th note by a half step. F becomes F#.

- **A Dorian**: A B C D E **F#** G → the 6th note is **<mark>F# (major 6th, ♮6)</mark>**

That's it. Just one note in the scale changes: **<mark>b6 → ♮6</mark>**. But this single note transforms the entire sound. Aeolian's F sits dark and pressed-down over the root A, while Dorian's F# opens up much brighter and **more sophisticated**. That F# is exactly what Santana uses when he gets that "jazzy, Latin" feel out of a minor progression.

```json
{
  "id": "m3.w9.d1.aeolian_vs_dorian_6th",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Aeolian b6(F) vs Dorian natural 6(F#) - hear the difference",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "quarter", "label": "b6", "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

Why is this particular note so special? F# is the **<mark>characteristic note</mark>** — it's what makes Dorian, Dorian. All the other notes (A B C D E G) are identical to Aeolian. So to get the Dorian color, you need to **<mark>actively spotlight</mark>** F#. Avoid it, and you're right back to plain dark minor. All week long, we'll use this F# like a paintbrush.

Today's goal is just two things. First, get one A Dorian position under your fingers. Second, be able to find **<mark>where F# (the major 6th) lives</mark>** with your eyes closed. We'll use a backing track that's just one Am7 chord looping forever (a vamp). Today, hear it with your own ears — why laying F# over a minor chord makes it brighter.

## ② Visual Reference

Here's A Dorian **Position 1** (starting at fret 5, three notes per string). There are two kinds of highlights. **<mark>F# (the 6th, the color note)</mark>** is today's star, so it's marked in yellow; **C (the b3)** is the 3rd of Am7, so it's marked in green as a landing target. The root A appears in three spots (string 6 fret 5, string 4 fret 7, string 2 fret 10).

```json
{
  "id": "m3.w9.d1.a_dorian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Dorian - Position 1 (natural 6th F# color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "scale": "A Dorian",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 4, "label": "2", "role": "scale" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 1, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

Second, here's a short line for <mark>comparing Aeolian vs. Dorian by ear</mark>. Both bars go 5th (E) → the 6th note → 5th (E) → root (A) — identical except for that one 6th-scale-degree note. Bar 1 has **F (b6, dark)**, bar 2 has **F# (♮6, bright)**. Listen to how a single fret's difference (fret 8 vs. fret 9) completely changes the color.

```json
{
  "id": "m3.w9.d1.aeolian_vs_dorian_6th",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Aeolian b6(F) vs Dorian natural 6(F#) - hear the difference",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "quarter", "label": "b6", "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 70) — opening up the hand with a 4-note sequence**
With the metronome at 70, warm up Position 1 using groups of four notes. A-B-C-D / B-C-D-E / C-D-E-F# … grouping four notes at a time and moving up one step. Don't just memorize the whole run up and down — think in **groups of four**. Every time F# comes up (string 5 fret 9, string 2 fret 7), say it out loud: "F-sharp!" The whole point of today's warm-up is <mark>putting a name tag on F#</mark>.

**10–20 min · Brain training (locking in the F# locations)**
Metronome off. Look at and fret <mark>just the two F# spots</mark> in Position 1 (string 5 fret 9, string 2 fret 7). Then do the same with the three root A spots (string 6 fret 5, string 4 fret 7, string 2 fret 10). Finally, close your eyes: "one A → the nearest F#" — if you can find it within 3 seconds, you pass. The point is to make your hand remember which direction F# sits from the root.

**20–40 min · Real-world improv (Am7 vamp / 70 BPM)**
Put on "Am7 vamp backing track slow" (Am7 looping forever). One rule: forget everything else, play the **Aeolian line (the one that feels like it ends on F)** a few times → then right on the same spot, **<mark>slip in F#</mark>**. Feel free to lay the second comparison line (5-6-5-R) straight over the backing track too. There's just one goal: hear with your own ears that "swapping F for F# brightens things up."

**40–50 min · Record & reflect (recommended)**
Record just the last 30 seconds of your jam with any recorder you've got (even a phone voice memo). Listen back and check just one thing: **<mark>does the section with F# actually sound more "open and bright"</mark>?** If it doesn't jump out, try again holding F# longer and clearer. Today, all that matters is burning F#'s color into your ear.

**Today's finish line:** Play through Position 1 once in groups of four. Find both F# spots with your eyes closed within 3 seconds. Over Am7, hear yourself switch from the F line to the F# line and confirm "yep, that got brighter."

## ④ Tips / Common Mistakes

- **Dodging F#.** This is the most common mistake. Even with the Dorian scale turned on, if you slide past F# without really landing on it, it just sounds like plain dark minor to the ear. F# isn't a note to hide — it's a note to **show off**. Hold it long, make it clear, even add vibrato.
- **Mixing up F and F# with your hand.** On the 5th string, F is fret 8, F# is fret 9. Just one fret apart, so it's easy to blur them when you're rushing. Burn "Dorian = one fret up (F#)" into your body. If you slide down a fret, you're out of Dorian.
- **Memorizing positions without note names.** If you only memorize "string 5 fret 9," you won't be able to find F# anywhere else on the neck. Always call it by name: "this is F#, the major 6th." The name is what connects it across the whole fretboard.
- **Rushing the tempo.** 70 might look slow, but today is entirely about burning F#'s color into your ear. Skim through fast, and you'll miss the brightness of that one note. Go slow, and really savor that single note.
