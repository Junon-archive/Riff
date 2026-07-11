---
title: "A drop of the blue note — adding a tear to the minor pentatonic"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Learn the position and sound of the blue note (b5)

## ① Theory

Today we add one note to the Box 1 you learned yesterday. It's the **blue note**. In A blues the blue note is **b5, that is Eb**. It's a note the minor pentatonic doesn't originally have, and the moment it's added the color of the scale changes completely. <mark>The blue note is a single tear the blues sheds.</mark> That distinctive 'crying' sound — half sad, half tense, hard to put into words — comes from right here. Old blues guitarists brushed against this one note just so, letting sound say the feelings that words couldn't.

Its position is very easy to remember. On the **5th string of Box 1, between the 4 (5th fret) and the 5 (7th fret)**, the exact middle — the **6th fret** — is the blue note. Just lay your **middle finger (2nd)** on it lightly. <mark>Think of it as a stepping stone set on the path climbing from 4 up to 5.</mark> Since it's a note tucked secretly between two notes that were already there, your hand remembers it easily too. Look at the 5th string alone and 4·b5·5 sit side by side on the 5th·6th·7th frets, so pressing the three notes in a row on one string lands the position in your hand fast.

The blue note comes with one knack. <mark>This is not a note to sit on — it's a note you brush past.</mark> Lead it into a stable note like the 4, the 5, or the root, and its tension resolves beautifully. Stop dead on the blue note instead and it can sound awkward. Tension from the blue note isn't a mistake; it's a device that makes the stable note that follows feel more welcome. So today, focus only on the **position and the sound**. Weaving it into phrases is for tomorrow. First, confirm with your ears where this single tear lives.

```json
{
  "id": "m2.w5.d2.blue_spot",
  "type": "scale_shape",
  "meta": { "title": "The blue note b5 between 4 and 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **The blue note b5=Eb lives here.** Between the 4 (5th fret) and the 5 (7th fret) on the 5th string, it's the 6th fret. Press it lightly with your 2nd finger.

## ② Visuals

Now let's see the map with the blue note laid over the whole Box 1. <mark>The single purple dot is the blue note (b5) we added today.</mark> Get your eye used to where this one purple dot sits among the blue roots and the other scale notes.

```json
{
  "id": "m2.w5.d2.box1_blue",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **Box 1 + blue note.** The purple dot on the 5th string 6th fret is the new arrival. The rest is exactly the box from yesterday.

There's only one purple dot. <mark>This one alone turns the minor pentatonic into the sound of the blues.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 70. Loosen up by running yesterday's **Box 1** up and down once. <mark>Keep an eye on the 5th string 6th fret spot ahead of time.</mark>

**10–20 min · Brain training (today's target = fretting the blue note)**
Press 4→b5→5 slowly on the 5th string and <mark>feel the 'crying' color of the blue note with your ears.</mark>

**20–40 min · Real practice: passing through the blue note (BPM 70)**
This is practice brushing past the blue note and leading into a stable note.

```json
{
  "id": "m2.w5.d2.blue_slide",
  "type": "tab",
  "meta": { "title": "Passing through the blue note — 4 b5 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70, shuffle feel.** From 4 through b5 to 5, then come down to the root A at the end to finish.

<mark>Don't stop on the blue note</mark> — pass through it like flowing water. Land comfortably on the final root.

**40–50 min · Recording (today's mission)**
Record 4→b5→5→root once: <mark>listen for whether the blue note gives a slight tension like a tear and then resolves.</mark>

**Today's completion criteria:** You fretted the blue note on the 5th string 6th fret accurately with your 2nd finger, and brushed through 4→b5→5→root to land on a stable note.

## ④ Tips / Common Mistakes

Here are the common mistakes when using the blue note. This note is seasoning, not the main ingredient.

```json
{
  "id": "m2.w5.d2.blue_tip",
  "type": "scale_shape",
  "meta": { "title": "Resolve off the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **The blue note is a passing tone.** Lead from the 6th fret straight into the neighboring 5 (7th fret) or the root and the tension resolves beautifully.

- **Sitting too long on the blue note.** Brush it briefly and move to a stable note, and the 'crying' flavor comes alive.
- **Looking for b5 on the 3rd fret.** The b5 of A blues is the 5th string 6th fret. Don't mix up the spot.
- **Not using the 2nd finger.** The 4 is the index, the b5 is the middle — fix the fingers and you hit the same spot fast every time.
- **Avoiding it because tension feels scary.** That tension is exactly the blues. Brush it lightly and resolve, and it's actually gorgeous.
