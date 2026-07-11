---
title: "The 11th and 13th — the roof of tension"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — The 11th and 13th: the roof of tension

## ① Theory

Yesterday you tinted with the 9th. Today you climb higher and meet the **11th** and the **13th**. The 9th, 11th, and 13th are the **roof of tension** stacked on top of a chord. <mark>Even the same chord changes color completely by which tension you lay on the roof.</mark> The **11th** is the 4th raised an octave; the **13th** is the 6th raised an octave. On Dm, **the 11th is G**; on a G chord, **the 13th is E**.

Today's lead is the **13th**. The roof of the **G13** you learned last week already had the 13th (E) laid on it. <mark>Lay just one 13th onto a flat G7, and it opens right up into a warm, wide sound.</mark> So today you'll ring **G7 → G13** side by side and catch by ear how the sound widens when the 13th is added.

The **11th** you'll just taste on the Dm side. **Dm11** swaps Dm9's roof for the 11th (G), giving a slightly wider, more open color. Today, don't be greedy — focus on <mark>telling the 13th's open color apart clearly</mark>. First, let's carve the 11th's location into your eye with the **Dm11** grip.

```json
{
  "id": "m1.w2.d2.dm11_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm11 grip — 11th on top", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 3, "finger": 2, "label": "11", "role": "color" }
  ]}
}
```
▶ **Dm11** — the **11th (G)** laid on the roof. 1st string 3rd fret — the 4th raised an octave.

## ② Visuals

Now look again at today's lead, **G13**. The **13th (E)** on the roof makes this chord's open color. <mark>One note — 2nd string 5th fret — throws the G chord wide open.</mark>

```json
{
  "id": "m1.w2.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 13th on top", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13** — R, b7, 3 with the **13th (E)** laid on as the roof.

To feel the 13th's color for sure, hearing it side by side with a **G7** (no 13th) is best. <mark>The moment the 13th enters in bar 2, you hear the sound widen by a hand's breadth.</mark>

```json
{
  "id": "m1.w2.d2.g7_vs_g13",
  "type": "tab",
  "meta": { "title": "G7 - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G7", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** Bar 1 G7, bar 2 lays the **13th (E)** on as the roof for G13. Hear the moment the sound opens up.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Warm your hand by grabbing G7 and G13 in turn. <mark>Try the 2nd string 5th fret (the 13th) going in and out.</mark>

**10–20 min · Brain training (telling the 13th's color apart)**
With the left hand only, silently move G7 → G13. Check with your eyes how the hand shape widens when the **13th (2nd string)** is laid on.

**20–40 min · Real vamp (BPM 72)**
Repeat the four bars below. Bar 2 is a flat G7, bar 4 is the G13 with tension laid on. Chase by ear <mark>the moment the color throws wide open with one 13th in the same spot</mark>.

```json
{
  "id": "m1.w2.d2.thirteenth_drill",
  "type": "tab",
  "meta": { "title": "G7 vs G13 in the vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G7", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** Dm9 → G7 → Dm9 → G13. In the last bar the **13th's** open color blooms.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Check whether G7 and G13 sound like different widths.

**Done when:** You can ring G7 and G13 in turn and tell the open color the 13th makes apart by ear.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most when handling the **13th**.

```json
{
  "id": "m1.w2.d2.thirteenth_spot",
  "type": "fretboard_diagram",
  "meta": { "title": "The 13th (E) — string 2 fret 5 on G", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ The **13th (E)** is the 2nd string 5th fret — the 6th raised an octave from the root.

- **The 13th gets buried.** The 2nd string 5th fret must ring clearly for the open color to come out.
- **The 11th and 13th get confused.** Memorize the spots separately: 11 = the 4th spot (1st string 3rd fret), 13 = the 6th spot (2nd string 5th fret).
- **G7 and G13 sound the same.** Drop the BPM to 55 and ring one chord at a time long.
- **Your hand gets stiff.** If force piles onto the pinky on the 2nd string, lower the wrist a little.
