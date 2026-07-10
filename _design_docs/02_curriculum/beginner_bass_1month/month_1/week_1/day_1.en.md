---
title: "Saying hello to your bass — posture, 4- vs 5-string, two-finger"
dayKey: "m1.w1.d1"
estMinutes: 30
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — Saying hello to your bass

## ① Theory

Today's the day you finally pick up a bass for the first time. Flashy slap and fast lines can wait. Today's one and only star is **<mark>one clean low note</mark>**. In a band, the bass joins hands with the drums and **lays down the floor of the song**. So don't try to play well from day one — just say a relaxed hello to your bass first.

Sit down, rest the bass's curved waist on your right thigh, and tilt the neck up just slightly so it's **nearly level with the floor**. If you play standing, set the strap to the <mark>same height</mark> as when seated so your wrist stays comfortable. Let your shoulders drop. Before you make a sound, tune all four strings (five if it's a 5-string) with a clip-on tuner or a tuner app. **Only when the tuning is right** will today's note finally sound like "your" note.

Basses come as **4-string and 5-string**. A 4-string has four strings from low to high — E·A·D·G; a 5-string just adds <mark>one more low B string</mark> below them. Don't be scared — the position and hand shape of **the E·A·D·G strings** are exactly the same on a 4- or 5-string. The 5-string simply has one extra string for lower notes as a bonus. That's why every score in this curriculum shows the 4- and 5-string side by side. Whichever bass you're holding, just watch your own instrument's block and follow along.

Your right hand plucks the string with no pick, using **<mark>two fingers, index and middle</mark>**. Think of it as two fingers taking turns walking — index then middle, middle then index. Your thumb rests lightly on the pickup or the 4th string to support your hand. Today your left hand rests, and you'll ring out **the thickest E string (4th string) open**, evenly. Sore fingertips are normal, so don't worry — calluses form in a few days. This one even note becomes the floor of every line you'll learn later.

## ② Visuals

Today your left hand rests; you play only **the open E on the 4th string** with your right hand. The example below is a course that narrows the same note <mark>from quarter notes to eighth notes</mark>. Each example is laid out in **both a 4-string and a 5-string version**.

Before we move to the score, let's map out **where each string lives** first. Below is an open-string diagram — **the E·A·D·G spots are the same on a 4- or 5-string**, and the 5-string just adds one low B at the very bottom.

```json
{
  "id": "m1.w1.d1.string_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Open string map — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A" },
    { "string": 2, "fret": 0, "label": "D" },
    { "string": 1, "fret": 0, "label": "G" }
  ]}
}
```

▶ **4-string.** Blue is the root E (4th string). A·D·G sit in a row above it.

```json
{
  "id": "m1.w1.d1.string_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Open string map — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 0, "label": "B" },
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A" },
    { "string": 2, "fret": 0, "label": "D" },
    { "string": 1, "fret": 0, "label": "G" }
  ]}
}
```

▶ **5-string.** E·A·D·G are the same spots as the 4-string. Only one more low B (5th string) at the very bottom.

**Example 1 — quarter notes.** Pluck the open E once per beat. Just remember to alternate index and middle.

```json
{
  "id": "m1.w1.d1.open_e_quarter_4",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** One pluck per click of the metronome. Listen for whether all four are the same volume.

```json
{
  "id": "m1.w1.d1.open_e_quarter_5",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** The note and position are identical to the 4-string. You won't use the low B (5th string) today, so cover it lightly with your thumb to keep it silent.

**Example 2 — eighth notes.** Split each beat into two, eight plucks total. Even when faster, keep both fingers the same volume — only as far as the sound doesn't smear.

```json
{
  "id": "m1.w1.d1.open_e_eighth_4",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65, 4-string.** Two plucks per beat, crisp and clear. Let the index-middle sounds sit like a matched pair.

```json
{
  "id": "m1.w1.d1.open_e_eighth_5",
  "type": "tab",
  "meta": { "title": "Open E root pulse — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 65, 5-string.** Same note as the 4-string. Here too, cover the low B with your thumb to keep it quiet — the one homework unique to the 5-string that the 4-string doesn't have.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Set the metronome to BPM 60 and loosen up your hand while relaxing your shoulder and arm. **A comfortable posture** comes before the sound for now.

**7–17 min · Today's skill**
Pluck the open E on the 4th string very slowly, **alternating index and middle**. Whether the two fingers' <mark>volume stays steady</mark> is today's goal.

**17–27 min · Applying it**
Repeat Example 1 (quarter notes) four times at BPM 60 → once comfortable, move to Example 2 (eighth notes) and do it four times at BPM 65. **If the sound smears**, drop back down to quarter notes.

**27–30 min · Check**
Write down the BPM you reached, and if you like, record 30 seconds to hear whether the eight notes are even in size.

**Done when:** you can play the open E on the 4th string as two-finger eighth notes at 60–70 with an even, unwavering volume.

## ④ Tips / common mistakes

- **Sore fingertips are normal.** Aching fingertips for the first few days is expected. If it hurts, rest a moment and pick the bass back up.
- **Can't find where to put the thumb.** Rest it on the 4th string or the pickup to support your hand. Once it has a home, your right hand gets far steadier.
- **Using only one finger.** Keep using just the index and the sound clumps up and tires fast. Always walk the index and middle in turns.
- **Chasing speed.** An even sound at 60 is far more pro than a scratchy one at 100. Speed comes on its own later.
