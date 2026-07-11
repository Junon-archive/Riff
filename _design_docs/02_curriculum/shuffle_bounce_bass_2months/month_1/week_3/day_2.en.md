---
title: "B Boogie — Moving to V(B7)"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Moving to V, the B Boogie

## ① Theory

Yesterday you learned the IV spot with the A boogie. Today you move the shape to the last spot, **V(B7)**. The method is the same — <mark>keep the shape and change only the root spot.</mark> Now all three spots, I·IV·V, are in your hands. Once you have all three, whatever measure of the 12 bars comes up, your hand knows in advance where to go.

The root of B7, **B**, is the **3rd string, 2nd fret**. Where the A boogie started on the open 3rd string, the B boogie starts on the same string two frets up. The rest, **5-6-b7**, sits on the 2nd string at frets 4, 6, and 7. <mark>It's the A boogie staircase pushed up two frets as a whole.</mark> Your whole hand just slid up a little; the shape of the staircase hasn't changed one bit. So even a new spot doesn't feel strange.

In 12 bars, V is the spot of tension that **drives the tune forward**. When B7 arrives, it's the signal that "the lap is nearly over." The spot is a bit higher, but the **R-5-6-b7** staircase doesn't change one bit. <mark>By the time you reach here, you really feel that all three chords are the same shape.</mark> It's just one shape moved to three spots, yet the flow of a whole blues tune is already drawn in your hands.

Forget speed. Today, focus on rolling the B boogie clearly and, since this spot has no open string, on your **left hand pressing the frets precisely**. <mark>From the 2nd fret to the 7th, it's easier if you spread your hand ahead of time.</mark> With no open string, your left hand needs a little more effort, but the notes come out clearer and firmer for it. On a **5-string** the fingering is the same; just rest the low B.

## ② Visuals

Today has two parts too. Check the **B boogie shape** on the fretboard, then learn the **B boogie shuffle** that rolls that shape. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **B boogie shape**. The lower blue is the root **B** (3rd string, 2nd fret), above it are the 5th and 6th, and the uncolored one is the **b7**. <mark>It's the A boogie moved up two frets.</mark>

```json
{
  "id": "m1.w3.d2.b_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B boogie shape R-5-6-b7 (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 8, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** Root **B** (3rd string, 2nd fret) → **5th F#** (2nd string, 4th fret) → **6th G#** (6th fret) → **b7 A** (7th fret).

```json
{
  "id": "m1.w3.d2.b_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B boogie shape R-5-6-b7 (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 8, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Rest the low **B** and focus on the B root.

Now the **B boogie shuffle** that rolls that shape. Climb in measure 1 and descend in measure 2, <mark>rolling long-short with a bounce.</mark>

```json
{
  "id": "m1.w3.d2.b_boogie_4",
  "type": "tab",
  "meta": { "title": "B boogie shuffle (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, shuffle.** From the root **B** (3rd string, 2nd fret), climb and descend the **5-6-b7** staircase (2nd string, frets 4, 6, 7). It's two frets higher than the A boogie.

```json
{
  "id": "m1.w3.d2.b_boogie_5",
  "type": "tab",
  "meta": { "title": "B boogie shuffle (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Cover the low **B** with the thumb so it doesn't leak.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll yesterday's **A boogie shuffle** at BPM 60 to loosen up. Check the spot moves are smooth before you start.

**10–20 min · Brain training**
Press the **B boogie shape** very slowly. Since there's no open string, memorize it while checking <mark>whether your left hand presses frets 2, 4, 6, 7 precisely</mark>.

**20–40 min · Real play**
Repeat the **B boogie shuffle** at **BPM 70**. The goal is pressing clearly so the frets don't go fuzzy. Learn it on the 4-string, then confirm on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the B boogie's notes are clear**. Note the BPM you reached today.

**Done when:** you can roll the B boogie shuffle (R-5-6-b7) at the V(B7) spot at BPM 70 with a long-short, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The notes go fuzzy.** With no open string, under-pressing frets smears the sound. Press clearly with the fingertip.
- **Your hand is far, so the b7 lags.** Spread your hand up to the 7th fret ahead of time and the back note won't fall behind.
- **The long-short goes flat.** The shuffle feel stays the same even at a higher spot. Keep the front of each note firmly long.
- **Neglecting low B (5-string).** In B7 the root B is busy, but keep the unused low string covered with the thumb.
