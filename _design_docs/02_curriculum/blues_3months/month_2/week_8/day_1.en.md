---
title: "Box 1 lick 1 — open your first sentence with a whole-step bend"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — the signature lick that opens with a bend

## ① Theory

Week 8 at last. The final week of Month 2, and the week you complete your first solo. Just a few weeks ago your hand could barely memorize where the notes of the **pentatonic scale** sat, and now that same hand is ready to sing over twelve bars. <mark>The hand that only knew the pentatonic now sings over twelve bars — this week is exactly that moment.</mark> This week's goal is just one thing. To weave the scale, bending, and phrasing you've learned into a single **blues lick**, lay it over the twelve-bar form, and finish your first solo. The first step of that is today's **signature lick 1**.

Today's lick opens its door with a **whole-step bend**. On the 3rd string, 7th fret of Box 1 — that is, the **4th (D)** — you press down and push the string up a whole tone, and out comes the sound of the **5th (E)**. <mark>The moment you push the 4th up a whole step, one finger gives birth to the blues' own "crying" sound.</mark> Once the bend opens the door, you come down gently through the b3 (C) to the root A. The tension of pushing up and the release of settling on the root — the contrast of these two gives one short lick its expression.

It's fine if the bend's pitch is a little off at first. Checking by ear whether you rose exactly a **whole step (two frets)** is all it takes. <mark>Push up to the exact note, then land on the root, and one lick is fully complete.</mark> The tempo is **BPM 75**, and an easy shuffle feel is plenty. Once you get this one lick into your hand today, it joins tomorrow's **descending lick** to fill half of this week's first solo. So, let's open the first sentence with a bend.

```json
{
  "id": "m2.w8.d1.bend_lick",
  "type": "tab",
  "meta": { "title": "Box 1 lick 1: the whole-step bend", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75, shuffle feel.** Bar 1 opens by pushing the 4th (D) up a whole step to the 5th, then catches its breath on the b3. Bar 2 bends again and lands on the root A with vibrato.

## ② Visuals

Let's see where this lick passes on the fretboard, on the **Box 1 map**. The green **4th (D)** is the spot you push up with the bend; the blue root A is the home you land on.

```json
{
  "id": "m2.w8.d1.bend_map",
  "type": "scale_shape",
  "meta": { "title": "The bend note on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **The bend is on the green.** Push the 4th (green) up to make the 5th sound, then come down through the b3 to the root.

<mark>On this map, opening with the bend and closing on the root is the whole of today's lick.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 75. Warm up only the heart of today's lick, the **whole-step bend**. Carve into your hand the feel of pushing the 4th exactly up to the 5th.

```json
{
  "id": "m2.w8.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the whole-step bend", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 75.** Bend the 4th a whole step for a half beat, then press the 5th for a half beat to check. Match by ear whether the top of the bend is the same height as the 5th.

**10–20 min · Brain training (today's target = bend pitch)**
Before entering the real practice, picture in your head whether the bent 4th reached exactly the same height as the **5th (E)**. Imagine the arrival sound before you push, and the pitch becomes far more accurate. <mark>Hear the target note ahead of time, and your hand pushes up searching for that sound.</mark>

**20–40 min · Real practice: signature lick 1 (BPM 75)**
This is today's finished piece. Play the two bars as a whole — open with the bend, pass the b3, and land on the root.

```json
{
  "id": "m2.w8.d1.lick1_take",
  "type": "tab",
  "meta": { "title": "Box 1 lick 1, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75.** Bar 1 opens with the bend and catches its breath on the b3. Bar 2 bends again and closes on the root A with vibrato. Don't rush — focus on the bend's pitch.

<mark>When the bend reaches the exact note and closes trembling on the root, today's lick is complete.</mark>

**40–50 min · Recording**
Record signature lick 1 from start to finish. Listen for whether the bend reached exactly up to the 5th and whether the root's vibrato stays alive.

**Today's completion criteria:** You played and recorded signature lick 1 over two bars — opening by pushing the 4th up to the 5th with a bend, passing the b3, and landing on the root A with vibrato. — Today's result: signature lick 1 (bend) complete

## ④ Tips / Common Mistakes

Common mistakes in the bend lick. Most are problems of pitch and force control.

```json
{
  "id": "m2.w8.d1.bend_target",
  "type": "scale_shape",
  "meta": { "title": "Bend the 4th up to the 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Push to the 5th, release to the root.** Push the 4th (green) to make the 5th sound, then come down to the root A and close with vibrato.

- **Under-bending or over-bending.** A whole step is exactly two frets high. Check by ear whether the top of the bend matches the 5th.
- **Pushing with only one finger.** A bend needs two or three fingers together for power. Use the ring and middle fingers together.
- **Losing the root after the bend.** The lick has to land on the root for the sentence to close. Always close the final A with vibrato.
- **Trying to play too fast.** BPM 75 is plenty. The bend's pitch comes before speed.
