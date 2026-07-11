---
title: "The blues sound — the three dominant 7 chords A7, D7, E7"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — The blues color that dominant 7 creates

## ① Theory

The door to Week 2 is open. This week's goal is just two things. Learn the **12-bar blues form**, and move last week's boogie to D7 and E7. Today, as the first step, you'll get the three **dominant 7 chords** that make the blues its own sound into your hands. <mark>In the blues, the I, IV, and V are all 7 chords.</mark> In ordinary music the tonic is a bright major, but the blues paints a slightly tense color by adding a **b7** on top. That b7 is the very voice of the blues. If a bright major chord is a wide-open smile, the dominant 7 with its b7 on top is a smile with the eyes slightly narrowed. That subtle tension keeps holding your ear. Even if the theory feels hard, don't worry. Today is simply the day you meet these three chords with your fingertips.

The three pillars of A blues are **A7** (I), **D7** (IV), and **E7** (V). A7 is home, D7 is one step out, and E7 is the most tense, making you want to come back home. All three are built from root, 3rd, 5th, and b7 — only the name changes, the character stays the same. <mark>So the hand feel of grabbing one carries straight into the other two.</mark>

Today, don't mind the speed or the rhythm. Your only goal is to ring each of the three chords **cleanly**, one by one. If you just remember **which string is the root** in each chord, it'll help a lot when you move the boogie tomorrow. This time spent checking each chord by sound makes next week's 12 bars far more comfortable.

Let's start with home, the I chord, **A7**. The open A on the 5th string is the root.

```json
{
  "id": "m1.w2.d1.a7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 open chord — I of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **The open A on the 5th string** is the root. Fret the 4th string 2nd fret (5th), 3rd string open (b7), and 2nd string 2nd fret (3rd) together. Mute the 6th string.

## ② Visuals

Next come **D7**, one step out, and **E7**, the most tense.

```json
{
  "id": "m1.w2.d1.d7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "D7 open chord — IV of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 1, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **The open D on the 4th string** is the root. Fret the 3rd string 2nd fret (5th), 2nd string 1st fret (b7), and 1st string 2nd fret (3rd). Mute the 5th and 6th strings.

<mark>The root string of each chord differs — the 5th, 4th, and 6th string.</mark> **E7** has the open E on the 6th string as its root, so the low end rings heavy.

```json
{
  "id": "m1.w2.d1.e7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 open chord — V of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 1, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **The open E on the 6th string** is the root. Fret the 5th string 2nd fret (5th), 4th string open (b7), and 3rd string 1st fret (3rd). You may ring all six strings.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Loosen your hand by pressing and releasing the three chords. Check one by one that <mark>only the strings that should ring come out cleanly</mark>.

Change slowly in this order, one whole note per chord, with plenty of room.

```json
{
  "id": "m1.w2.d1.change_drill",
  "type": "tab",
  "meta": { "title": "A7 - D7 - E7 change drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** Play A7 → D7 → E7, one per bar, with a single downstroke each. Get your hand shape ready before the chord changes.

**10–20 min · Brain training (today's target = each chord's root string)**
Before changing chords, say out loud **which string is the root** (A7 = 5th, D7 = 4th, E7 = 6th).

**20–40 min · Real chord cycling (BPM 60)**
Move A7 → D7 → E7 <mark>without a break</mark>. Watch just two things: <mark>are there any fluffed notes when the chord changes</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds, then check: <mark>do all three chords ring cleanly</mark>.

**Today's completion criteria:** You can ring each of the three dominant 7 chords A7, D7, and E7 cleanly, and change between them without a break.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most across the three chords.

```json
{
  "id": "m1.w2.d1.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute the unused low strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **On D7, mute the 6th and 5th strings.** If the low end rings, the chord gets muddy. Lightly block the 6th string with your thumb.

- **The 2nd string of A7 won't ring.** If the 3rd (C#) drops out, the bright blues flavor disappears. Stand your fingertip up to press it.
- **The two low strings leak out on D7.** Block the 6th and 5th strings firmly so it rings from the D root.
- **E7 is blurry.** Press the 3rd string 1st fret (3rd, G#) precisely with your index.
- **The chord change is late.** Picture the next chord shape one beat early.
