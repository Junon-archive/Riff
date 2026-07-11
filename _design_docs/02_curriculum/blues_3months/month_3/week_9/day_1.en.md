---
title: "First step of chord following — landing on the root A over A7"
dayKey: "m3.w9.d1"
estMinutes: 50
i18nKey: "lesson.m3.w9.d1"
---

# Day 1 — landing on the root A over A7

## ① Theory

The first day that opens Month 3. For the past two months we've run the pentatonic freely up and down inside **Box 1**. But there's one thing we haven't tried yet — reacting at **the moment the chord changes**. <mark>A solo that just runs the pentatonic up and down and a solo that follows the changes sound completely different.</mark> What makes that difference is exactly one thing: the **landing note**. Instead of stopping the phrase just anywhere, you settle gently onto a tone of the chord ringing right now.

Today's chord is just **A7**. The 'home' of A7 is the root **A**. While A7 rings across the twelve-bar blues, place the end of your phrase on the root A and <mark>you feel the solo settle right onto the chord</mark>. There are several A's inside Box 1, and of them we'll take the handiest, **string 4 fret 7**, as today's landing spot. Besides the root, settling on chord tones like the 5th **E** or the b7 **G** also sits comfortably over A7.

The method is simpler than you'd think. Roll the pentatonic in Box 1 as usual, and at the end of the bar bring your finger to the **root A**. What matters is 'when you settle.' Too early and the chord hasn't fully rung yet; too late and you've already moved on to the next bar. <mark>Land on a strong beat, especially the first beat of the bar, and the chord comes through clearly.</mark> Today, over the single chord A7, get only the feel of landing on the root A into your hand. The chord changes start tomorrow — today, feel enough of that 'coming home' stability first.

```json
{
  "id": "m3.w9.d1.land_on_a7",
  "type": "tab",
  "meta": { "title": "Landing on the A7 home (root A)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Roll the pentatonic and land on the root A (string 4 fret 7) at the end of the bar. The note shown in green is today's landing spot — the home of A7.

## ② Visuals

Let's see on the map where **the home of A7** sits inside Box 1. The **string 4 fret 7 A** glowing green is where today's phrase returns.

```json
{
  "id": "m3.w9.d1.a7_home_map",
  "type": "scale_shape",
  "meta": { "title": "Where A7 lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" }
  ]}
}
```
▶ **The green A is today's home.** The blue notes (5th E, b7 G) are chord tones of A7, so it's fine to land on them too.

<mark>Place the end of your phrase on this green spot while the chord rings, and the solo starts to follow the changes.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 70. Repeat the shortest landing: start on the 5th E and settle onto the root A.

```json
{
  "id": "m3.w9.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: roll and land on A", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Ring the 5th E for a half beat and settle onto the root A (string 4 fret 7) for a half beat. Carve the 'coming home' feel into your hand.

**10–20 min · Brain training (today's target = landing on the root A)**
Before real practice, close your eyes and find where the root A sits inside Box 1. <mark>Know the landing spot ahead of time and, whatever phrase you play, you can bring its end to A.</mark>

**20–40 min · Real practice: an A7 landing phrase (BPM 70)**
Roll the pentatonic for two bars, then land the last note on the root A. Even with A7 as the only chord, just placing the end on A makes the sound clearer.

```json
{
  "id": "m3.w9.d1.a7_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that lands on A7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** Roll the pentatonic in bar 1, and land on the root A at the end of bar 2. Make the half beat crossing from the note just before (b3) to A especially clear.

<mark>However long the phrase, once its end touches the root A it sounds like sitting gently on top of A7.</mark>

**40–50 min · Recording**
Record the landing phrase over an A7 backing (or a metronome). Check by ear that the end sits exactly on the root A.

**Today's completion criteria:** Over A7 you rolled a pentatonic phrase and then landed the end of the phrase clearly on the root A.

## ④ Tips / Common Mistakes

Common mistakes in landing over A7. Most come from the habit of 'leaving the end just anywhere.'

```json
{
  "id": "m3.w9.d1.land_home",
  "type": "scale_shape",
  "meta": { "title": "End your phrase on the A7 home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **Every phrase to the root A.** The green A is the home to return to over A7. Once you open a phrase, always close it on A.

- **Stopping on any note.** If the end isn't A, the sense of following the chord blurs. Always bring the last note to the root A.
- **Placing the landing on a weak beat.** It has to sit on a strong beat, especially the first, for the chord to come through clearly.
- **Brushing past A in a hurry.** The landing note needs to ring for at least half a beat to feel like 'home.'
- **Pushing the tempo first.** Until the end sits exactly on A at BPM 70, going faster comes later.
