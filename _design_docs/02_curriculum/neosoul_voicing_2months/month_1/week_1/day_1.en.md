---
title: "The first neosoul grip — the Dm9 voicing"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — Dm9, neosoul's soft first color

## ① Theory

Welcome to Week 1 of the neosoul track. This week's goal is to get the two grips of the signature vamp **Dm9 → G13** into your hands. <mark>Neosoul chords are soft grips in the middle register.</mark> Ordinary chords stack up from the root, but neosoul **leaves the root to the bass** and your hand holds only the 3rd, the 7th, and the **tensions**. Since the bass lays down the floor, your hand just **paints the color** on top. Today's chord is **Dm9**. The name may feel new, but it's really just Dm7 with a single grain of **9th** added to tint it a soft, dreamy color. Even if the theory feels hard, that's okay. Today is simply the day you meet this one grip with your fingertips.

Let's open up **Dm9**. Its notes are just four — **root (D), b3, b7, 9**. The 5th string 5th fret is the root **D**, the 4th string 3rd fret is **b3 (F)**, the 3rd string 5th fret is **b7 (C)**, and the 2nd string 5th fret is **9 (E)**. <mark>That 9th is exactly the soft, dreamy ring that defines neosoul.</mark> Keep the root light, and feel the color with your ears.

Today, don't mind the speed or the rhythm. Your only goal is to <mark>ring this one Dm9 grip cleanly</mark>. If you just remember **which string is the root** (the 5th string), moving to the next grip gets far easier. So let's lay the **Dm9** grip on the hand.

```json
{
  "id": "m1.w1.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — x5355x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ The **5th string 5th fret** is the root D. Press the 4th string 3rd fret (b3), 3rd string 5th fret (b7), and 2nd string 5th fret (9) together. Mute the 6th and 1st strings.

## ② Visuals

Picking the grip apart one note at a time makes the color even clearer. Ring it one note at a time in this order: **root → b3 → b7 → 9**. <mark>When the 9th (E) lands last, the soft color blooms wide open.</mark>

```json
{
  "id": "m1.w1.d1.dm9_arp",
  "type": "tab",
  "meta": { "title": "Dm9 note-by-note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```
▶ **BPM 60.** Ring the four notes low to high, one by one, checking that each one comes out clear.

Now let's ring all four at once. Rolling them **gently low to high** as an arpeggio gives that rolling feel unique to neosoul. <mark>Relax the wrist and sweep up slowly.</mark>

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Loosen your hand by pressing and releasing the **Dm9** grip. Check one by one that <mark>only the four strings that should ring come out cleanly</mark>.

**10–20 min · Brain training (grip shape, slow)**
As you form the grip, say the order your fingers land out loud: **root (5th string) → b3 (4th string) → b7 (3rd string) → 9 (2nd string)**.

**20–40 min · Real comping (BPM 70)**
Ring **Dm9** once per bar, gently. Watch just one thing: <mark>do all the notes ring evenly</mark>.

```json
{
  "id": "m1.w1.d1.dm9_strum",
  "type": "tab",
  "meta": { "title": "Dm9 whole-note comping", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** Both bars are Dm9. Sweep low to high with a gentle arpeggio stroke.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds, then check. <mark>Do all four strings ring soft and full</mark>.

**Done when:** You can ring the Dm9 voicing cleanly on all four strings.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most on the **Dm9** grip.

```json
{
  "id": "m1.w1.d1.dm9_mute",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute strings 6 and 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Mute the 6th and 1st strings firmly.** If those two leak, the soft color turns muddy.

- **The 5th-string root won't ring.** Stand your middle finger up and press the 5th fret precisely.
- **The 2nd-string 9th sounds crushed.** Stand your pinky tip up on the 5th fret so the color stays alive.
- **Your hand feels stiff.** The grip isn't a tight squeeze — it's a light rest on the strings.
- **The 1st string is ringing.** Let the inside of your pinky lightly cover the 1st string.
