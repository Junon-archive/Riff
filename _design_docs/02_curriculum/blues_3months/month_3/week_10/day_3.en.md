---
title: "Choosing the 3rd for the chord — over A7, C# is a chord tone"
dayKey: "m3.w10.d3"
estMinutes: 50
i18nKey: "lesson.m3.w10.d3"
---

# Day 3 — choosing the major 3rd (C#) over A7 and landing on a chord tone

## ① Theory

Today we find out why that **major 3rd C#** fit so well yesterday. The **A7 chord** we're playing over is made of four notes: A, C#, E, G. Right there inside it sits **C#** — it is A7's 3rd. <mark>When you land on C#, you're really sitting on the chord itself.</mark> That's why it sounded so comfortable and 'right' yesterday. It was a note that already lived inside the chord.

Here the two notes' characters split. **b3 (C)** is a color note from outside the chord, a 'crying' note that adds a little tension. In contrast, **3 (C#)** is a chord tone inside the chord, a note that 'sits' comfortably. <mark>Over A7, choosing 3 resolves, and choosing b3 turns plaintive — both are fine tools.</mark> Today we **deliberately choose 3** and learn the chord-tone color that fits A7 perfectly. Neither is wrong; the goal is choosing the one you want when you want it. When your ear knows both colors, your range of expression grows much wider.

Until now you landed with the root A as home. Today you gain **one more home** over A7 — the major 3rd **C#**. Settle onto C# with vibrato and you get a <mark>more mature, more settled sound</mark> than sitting on the root. The ear that only aimed at the root can now aim at the 3rd too. Knowing the chord and choosing a note inside it to sit on — that's today's one step. This feel opens the door to the chord progressions you'll meet ahead.

```json
{
  "id": "m3.w10.d3.a7_chord_tones",
  "type": "scale_shape",
  "meta": { "title": "A7 chord tones and C# as the major 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **A7 = A, C#, E, G.** Of these, the **green C# is the 3rd**, a note that was inside the chord all along.

## ② Visuals

Look together at the **chord tones of A7** on the fretboard. The blue root A, and around the **green 3rd C#**, the 5th E and b7 G build the chord together.

```json
{
  "id": "m3.w10.d3.cs_over_a7",
  "type": "fretboard_diagram",
  "meta": { "title": "C# is the 3rd of A7 — a chord tone", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ The root (blue), 5th, and b7 are chord tones, and the **green C# is the 3rd you'll aim at today**.

<mark>C# isn't a guest from outside A7 — it's family that always lived inside the chord.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. Press the **chord tones of A7** one by one in order: root A → 3rd C# → 5th E → b7 G.

```json
{
  "id": "m3.w10.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: A7 chord tones with C#", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 60.** Press the four chord tones slowly and feel that **C# blends in naturally** among them.

**10–20 min · Brain training (today's target = C# as a chord tone over A7)**
Before real practice, recall that when A7 rings, **C# is a note inside the chord**. <mark>Decide on C# as your landing note in advance, and your hand finds the spot far more comfortably.</mark>

**20–40 min · Real practice: landing on C# over A7 (BPM 65)**
This is today's finish. Start from the root A, **brush past b3**, and **land on the major 3rd C# with vibrato**. Sit on C# while A7 rings and you get a mature color that fits the chord perfectly.

```json
{
  "id": "m3.w10.d3.land_on_cs",
  "type": "tab",
  "meta": { "title": "Over A7, land on C# (the major 3rd)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 65.** Root A → b3 (string 3, fret 5) → **major 3rd C# (string 3, fret 6) vibrato**. It's the chord-tone color of sitting on the 3rd over A7.

<mark>Even sitting on the 3rd instead of the root feels at ease — because A7 supports that sound.</mark>

**40–50 min · Recording**
Record yourself landing on C# over an A7 backing. Check in a single file whether that chord-tone color of sitting on the 3rd sounds at ease.

**Today's completion criteria:** While A7 rang, you chose the major 3rd C# (string 3, fret 6) and landed on it with vibrato, producing a chord-tone color that fits the chord perfectly, and recorded it.

## ④ Tips / Common Mistakes

Common mistakes when choosing the 3rd for the chord. Most come from thinking of the **chord and the note separately**.

```json
{
  "id": "m3.w10.d3.choose_the_3rd",
  "type": "scale_shape",
  "meta": { "title": "On A7, choose the major 3rd C#", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **On A7, C# is a chord tone.** Don't be afraid to sit on the 3rd.

- **Always landing only on the root.** The root is fine, but over A7 the 3rd C# is an equally comfortable home.
- **Mistaking C# for a tension note.** C# was inside A7 all along. It's resolution, not tension.
- **Placing C# on a weak beat.** It has to sit on a strong beat for the 'fits the chord' feel to come through clearly.
- **Using C# over every chord.** Today is when it's A7. That the 3rd changes when the chord changes belongs to the next journey.
