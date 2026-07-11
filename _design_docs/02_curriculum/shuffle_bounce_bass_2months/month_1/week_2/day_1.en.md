---
title: "Root + 5th — the R-5 Shuffle"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — Adding a 5th to the Root, the R-5 Shuffle

## ① Theory

Last week you rolled a shuffle root with just open **E**. This week you stack notes on that root, one at a time, growing it into a <mark>bouncing boogie bass</mark>. Today's new note is a single **5th**. Just laying a 5th over the root makes a one-note pulse suddenly sound like a "moving" bassline.

The **5th** is the fifth note up from the root **E** — that's **B**. Its spot is the **3rd string, 2nd fret** — right next to open E on the 4th string, so your hand barely moves. Today you only memorize this one **B**. <mark>Root on the lower string, 5th on the string above — the two notes form a pair.</mark>

Here's how to roll it. Split the beat long-short: put the **root E on the front (long) note** and the **5th B on the back (short, "a") note**. So every beat alternates **R-5**. The shuffle feel is the same as last week — <mark>keep the long-short alive and the 5th bounces on its own.</mark>

**Forget speed completely.** Today's goal isn't tempo but the root and 5th rolling in a clear pair over the long-short. <mark>Just smooth the string move between the 4th and 3rd strings, very slowly.</mark> On a **5-string** the fingering is the same; only keep the low **B** deadened with the thumb. This **R-5** pair is the first two stairs of this week's boogie walk.

## ② Visuals

Today has two parts. First check the **positions of the root (E) and the 5th (B)** side by side on the fretboard, then learn the **R-5 shuffle** that rolls the two long-short. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **map of the two notes**. The lower blue is the root **E** (4th string open), the upper blue is the **5th B** (3rd string, 2nd fret). <mark>The 5th sits right next to and above the root.</mark>

```json
{
  "id": "m1.w2.d1.root_fifth_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Root and 5th — E and B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The lower one is the root **E**, the upper is the **5th B** (3rd string, 2nd fret). Fix in your eyes how close the two notes sit.

```json
{
  "id": "m1.w2.d1.root_fifth_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Root and 5th — E and B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The spot is the same as the 4-string. Keep the low **B** deadened and focus only on the root and the 5th.

Now the **R-5 shuffle**. Root **E** on the front of the beat, 5th **B** on the back — roll long-short and the two notes come out bouncing in pairs. <mark>The one-note shuffle now widens into a two-note move.</mark>

```json
{
  "id": "m1.w2.d1.r5_shuffle_4",
  "type": "tab",
  "meta": { "title": "R-5 shuffle (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, shuffle (long-short).** Open **E** on the front note of the beat, **5th B** (3rd string, 2nd fret) on the back note. Roll the front long, the back short.

```json
{
  "id": "m1.w2.d1.r5_shuffle_5",
  "type": "tab",
  "meta": { "title": "R-5 shuffle (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **5-string.** Same note and spot as the 4-string. Keep the low **B** covered with the thumb so it doesn't leak through the shuffle.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll yesterday's **shuffle root** on open E at BPM 60 to wake the long-short. Check the front note is long and the back short before you start.

**10–20 min · Brain training**
Fret the root **E** (4th string) and the **5th B** (3rd string, 2nd fret) alternately, very slowly. <mark>Whether the long-short stays the same even as you cross strings</mark> — focus only on holding that.

**20–40 min · Real play**
Repeat the **R-5 shuffle** at **BPM 70**. Root on the front, 5th on the back — the goal is the two notes rolling evenly in pairs. Learn it on the 4-string, then confirm the same feel on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the root and 5th alternate clearly**. Note the BPM you reached today.

**Done when:** you can put the root E on the front of the beat and the 5th B on the back to roll the R-5 shuffle long-short at BPM 70, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **The 5th comes in late.** Moving your hand to the 3rd string easily drags the back note. Move between the two strings very slowly and smooth the shift first.
- **The two notes are uneven.** The root gets loud while the 5th goes small. Match the front and back strengths.
- **The long-short goes flat.** Adding one note makes it easy to lose the shuffle feel. Keep the front note firmly long.
- **Neglecting low B (5-string).** Keep B deadened with the thumb while you cross strings. As the hand gets busy, B leaks easily.
