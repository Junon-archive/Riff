---
title: "Boogie Ascent — Climbing the R-5-6-b7 Stairs"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — The Boogie Walk Ascent, R-5-6-b7

## ① Theory

Yesterday you laid the first two stairs with the root and the **5th**. Today you add two more stairs on top and <mark>climb the R-5-6-b7 stairs with a bounce.</mark> This ascending move is the **boogie walk** — the very backbone of the shuffle blues. Today you memorize the whole hand shape that walks up one step at a time from the root.

The two new notes are the **6th** and the **b7**. The **6th** is **C#** (3rd string, 4th fret), and the **b7** is **D** (3rd string, 5th fret). Your fingers climb one fret at a time right above the **5th B** (3rd string, 2nd fret) you learned yesterday. <mark>Step on frets 2, 4, and 5 in order on the 3rd string and 5-6-b7 is done.</mark>

Your right hand alternates index and middle with **two fingers** just like yesterday. One note per beat, climbing steadily in the order **R (open E) → 5 (B) → 6 (C#) → b7 (D)**. Rather than rolling the shuffle hard yet, <mark>focus first on the four notes connecting evenly like stairs.</mark> Once your fingers remember the order, the roll follows on its own.

The best thing about this **R-5-6-b7** shape is that <mark>it stays the same in any chord.</mark> Today you learn it in the key of **E**, but move the root to A and the same shape works right there. So memorize it once and use it forever. On a **5-string** the fingering is the same; only keep the low **B** deadened. **Forget speed** and burn in stepping the stairs cleanly first.

## ② Visuals

Today has two parts. First see the whole **boogie walk shape (R-5-6-b7)** on the fretboard, then walk those four notes up one beat at a time as an **ascent**. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **boogie shape map**. The three blues are the root, 5th, and 6th; the one uncolored is the **b7 (D)**. <mark>It's a staircase running from the 4th string open to frets 2, 4, and 5 on the 3rd string.</mark>

```json
{
  "id": "m1.w2.d2.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** Root **E** (4th string open) → **5th B** (2nd fret) → **6th C#** (4th fret) → **b7 D** (5th fret). Burn the spots your fingers step on into your eyes.

```json
{
  "id": "m1.w2.d2.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Keep the low **B** deadened and focus only on the four stairs.

Now the **boogie ascent**. One note per beat, walking up the stairs from R to b7. <mark>Feel the flow of the four notes connecting without a gap.</mark>

```json
{
  "id": "m1.w2.d2.boogie_ascent_4",
  "type": "tab",
  "meta": { "title": "Boogie ascent R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, shuffle.** **R (E) → 5 (B) → 6 (C#) → b7 (D)**, one beat each, cleanly. Lay just a touch of long-short feel on it as you climb.

```json
{
  "id": "m1.w2.d2.boogie_ascent_5",
  "type": "tab",
  "meta": { "title": "Boogie ascent R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Keep the low **B** covered with the thumb so it doesn't leak through the ascent.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll yesterday's **R-5 shuffle** on open E at BPM 60 to loosen up. Check the long-short is alive before you start.

**10–20 min · Brain training**
Silently fret only the **R-5-6-b7** shape, climbing very slowly. Check <mark>whether your fingers remember the order of frets 2, 4, and 5</mark> even with your eyes closed.

**20–40 min · Real play**
Repeat the **boogie ascent** at **BPM 70**. The goal is the four notes connecting evenly like stairs — don't rush faster. Learn it on the 4-string, then confirm the same shape on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the four notes climb clearly like stairs**. Note the BPM you reached today.

**Done when:** you can climb the R-5-6-b7 boogie ascent at BPM 70 with the four notes connecting evenly, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The 6th and b7 get confused.** Frets 4 and 5 sit next to each other, so it's easy to miss the spot. Fret 2, 4, and 5 very slowly to lock the order.
- **You speed up as you climb.** It's easy to rush at the top of the stairs. Keep the spacing of the four notes the same.
- **The notes break up.** A finger arrives late and a gap opens between stairs. Prepare the next note early and step on connected.
- **Neglecting low B (5-string).** Keep B deadened with the thumb even as your hand gets busy up the 3rd string.
