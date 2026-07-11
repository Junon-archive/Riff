---
title: "Complete and record your first solo — sing twelve bars with the signature lick (Month 2 complete)"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — completing your first solo over twelve bars

## ① Theory

Today at last. The final day of Month 2, and the day you play through and record your **first solo**. Two months ago, this hand found even the note positions of the pentatonic scale unfamiliar, let alone **twelve bars**. And today that same hand tells its own story over twelve bars. <mark>The hand that only knew the pentatonic now sings over twelve bars — today is exactly that graduation moment.</mark> The scale, bending, phrasing, and licks you've stacked so far come together today into a single **solo**. Not flashy fast runs — even a few bars with heart in them make a fine solo.

Today's star is the **signature lick**. It's the blues' "money lick," fusing the bend and the descent you learned this week into one body. Bar 1 opens the door with a **whole-step bend (4→5)**, and bar 2 comes down and lands on the root A with **vibrato**. <mark>Inside these two bars that open and close sits everything you learned this week.</mark> Place this one short lick here and there across twelve bars, and that is your completed first solo. It's fine to repeat the same lick several times — repetition actually gives the solo its "you-ness."

Today you finish in two stages. First get the **signature lick** fully into your hand, then, with this lick as the axis, play a **twelve-bar solo** from start to finish. <mark>It doesn't have to be perfect — if the bend opens, the space breathes, and it closes on the root, that's enough.</mark> And finally, **record** that solo. It's the moment two months of the journey remain as a single file. So, let's go complete your first solo.

```json
{
  "id": "m2.w8.d4.signature_lick",
  "type": "tab",
  "meta": { "title": "Signature blues lick (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, shuffle feel.** Bar 1 opens with a whole-step bend (4→5), bar 2 descends and lands on the root A with vibrato. Place this two-bar lick here and there across twelve bars and the first solo is complete.

## ② Visuals

Let's see where this signature lick travels across the whole twelve-bar solo, on the **Box 1 map**. The green root A is the **home** every phrase eventually returns to.

```json
{
  "id": "m2.w8.d4.solo_map",
  "type": "scale_shape",
  "meta": { "title": "The whole solo lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **The whole solo is inside Box 1.** Across twelve bars, every lick opens from this one place and returns to the root.

<mark>The whole solo is born inside this one small box — that is the power of Box 1.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 75. Warm up in sequence the two axes of the signature lick, the **bend and the landing root**.

```json
{
  "id": "m2.w8.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the signature: bend then land", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** Bend the 4th for a half beat to open, and shake the root A for a half beat to close. Get the start and the end of the signature lick into your hand.

**10–20 min · Brain training (today's target = placing the signature lick across twelve bars)**
Before entering the real practice, picture in your head where among the twelve bars you'll place the signature lick. Open at the start, leave the middle empty, and make the climax with the signature lick at **bars 9–10**. <mark>Decide where to place the licks ahead of time, and twelve bars become a reliable map.</mark>

**20–40 min · Real practice: the 12-bar first solo (BPM 75)**
Your first solo at last. With the signature lick as the axis, play all twelve bars in one flow — open, space, answer, climax, landing.

```json
{
  "id": "m2.w8.d4.first_solo",
  "type": "tab",
  "meta": { "title": "First 12-bar solo over A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 7, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 10, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 12, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** Open with bars 1–4, carry on with bars 5–8, make the climax with the signature lick at bars 9–10, then finish on the root A with vibrato at bars 11–12. Don't rush — feel the space between the licks.

<mark>The moment you connect twelve bars into one flow and close on the root, "your solo" is complete for the very first time.</mark>

**40–50 min · Recording (Month 2 graduation mission!)**
Record your first solo from start to finish. Whether the bend opens, whether the space stays alive, whether it closes on the root — capture two months of growth in a single file.

**Today's completion criteria:** You played the 12-bar first solo from start to finish with the signature lick as the axis, finished on the root A with vibrato, and recorded it. — This week's result: the signature lick + the 12-bar first solo, played through and recorded (Month 2 complete!)

## ④ Tips / Common Mistakes

Common mistakes when playing through your first solo. Most are a matter of the mind that "can't stop."

```json
{
  "id": "m2.w8.d4.close_map",
  "type": "scale_shape",
  "meta": { "title": "Every phrase comes home to the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **Every phrase comes home to the root.** The green root A is the home to return to anywhere in twelve bars. Once you open a lick, always close on the root.

- **Stopping when you slip.** A solo is a flow. Even if one note slips, don't stop — carry on to the next root.
- **Filling notes because you can't stand a resting bar.** Space is part of the solo too. In the emptied bar, the next lick comes to life instead.
- **Not closing the end on the root.** The end must be tied on the root A with vibrato for the solo to be complete.
- **Trying to record perfectly in one go.** Record several times comfortably and keep the one take you like best.
