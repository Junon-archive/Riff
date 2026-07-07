---
title: "Your own arrangement — reharmonize with 9ths and top notes"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — Turn a plain progression into something sophisticated

## ① Theory

Through yesterday you chose voicings and rhythms. Today it's **arranging.** Onto the plain skeleton of a basic ii–V–I (Dm7-G7-Cmaj7), lay Week 6's **9th tensions** and Week 7's **top-note melody** to make your own refined version.

Two tools:
- **Color with 9ths.** Dm7 → **Dm9,** Cmaj7 → **Cmaj9.** The progression shimmers like R&B/city-pop.
- **Sing with the top note.** Carry the topmost note as a melody across the progression (e.g., the guide tones C-B-B singing on top).

There's no right answer. Today's challenge is designing it yourself: "to make this progression cooler, where do I add a 9th, and what do I put on top?" You're no longer someone who plays a song "as handed to you" — you redraw it "your way." At first, changing just one spot is plenty. Those small choices pile up and eventually become "your sound."

## ② Visuals

**Dm9 (9th on the ii).** Yellow is the 9th (E), green the guide tones.

```json
{
  "id": "m2.w8.d3.dm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 (ii + 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cmaj9 (9th on the I).** Yellow is the 9th (D). A plain Cmaj7 turns shimmering.

```json
{
  "id": "m2.w8.d3.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I + 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — 9th reharmonization (Dm9 - G7 - Cmaj9).** Add 9ths to the ii and I to brighten the progression. Yellow is the color.

```json
{
  "id": "m2.w8.d3.reharm_9",
  "type": "tab",
  "meta": { "title": "ii-V-I reharmonized with 9ths — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "9", "role": "color" },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "9", "role": "color" },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, repeat 4×.** Dm9 → G7 → Cmaj9. Adding the 9ths (yellow) makes the same progression far more refined. Whether to add a 9 to G7 too is your choice.

**Example 2 — top-note melody line.** The topmost note sings over the progression: C (Dm7) → B (G7) → B (Cmaj7). 1st string 8 → 7 → 7, a barely-moving guide-tone melody.

```json
{
  "id": "m2.w8.d3.top_line_reharm",
  "type": "tab",
  "meta": { "title": "Top-note line over ii-V-I — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 1, "fret": 8, "duration": "whole", "label": "b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 72.** 1st string 8 → 7 → 7. The chords change but the top note stays nearly put at C-B-B. Lay this melody on top as you comp and the progression sings. Repeat 4×.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret Dm9·Cmaj9 and check the 9th rings cleanly. Then learn Example 2's top-note line (C-B-B) on the 1st string.

**10–20 min · Brain training (today's target = your own color)**
Ask yourself, "where do I add a 9th? What goes on top?" Write out the basic ii–V–I and design how to lay 9ths / top notes on each chord.

**20–40 min · Real comping (Examples 1 & 2 / 74–84 BPM)**
**Spin Example 1's 9th reharmonization at BPM 78** to add color, and **lay Example 2's top-note line on top** to sing. Combine both tools into your own four-bar arrangement.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of your arrangement. Check: do the 9ths shimmer / does the top-note melody connect / is it more refined than the plain original?

**Done when:** you can lay 9ths and a top-note melody onto a basic ii–V–I to design and comp your own reharmonized version.

## ④ Tips / common mistakes

- **Cramming in every tension.** The 9th is seasoning. Add it in one or two spots to stay refined; adding it everywhere muddies it.
- **Color but forgetting the top note.** Use 9ths and top notes together. Color (9th) + song (top) meeting is real arranging.
- **Not comparing to the original.** Alternate the plain version and your arrangement to hear the difference.
- **Hunting for a right answer.** Your version is the right answer. Try several arrangements.
