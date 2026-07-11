---
title: "Expressive bending — push the note exactly to its target pitch"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — Making a note 'cry' with half-step and whole-step bends

## ① Theory

The blues scale you got in Week 5 — now it's time to make those notes 'cry.' Until now you made sound by fretting exactly; from today you'll **push the fretted string upward** to raise the pitch itself. This is **bending**. <mark>Bending is exactly like a voice pushing a note up until it cries.</mark> The same single note sounds plain when you just fret it, but push it up and let it back and you get that blues 'crying' expression. Today we split bending into two sizes and learn to land exactly on the target pitch.

Bending is divided by the 'distance' you push. Push up a half step and it's a **half-step bend**; push up a whole step (= two half steps) and it's a **whole-step bend**. In fret terms, a half step raises the pitch by one fret, a whole step by two. <mark>What matters isn't 'how hard' but 'up to which note.'</mark> Decide first whether the target sits a half step or a whole step above, and push so you arrive right at that pitch. Land halfway and it sounds not like crying but like a slip.

Today's stage is Box 1's **3rd string, 7th fret — the 4th (D)**. You'll practice both bends from this one spot. Push a half step and you get the hazy sound around the blue note (b5); push a whole step and you arrive at the clear target, the **5th (E)**. <mark>Checking by ear whether the bend reaches the target pitch is all of today.</mark> So here's a knack — before you push, play the arrival note somewhere else first and hold it in your ear, and you can instantly compare whether the bend touched it. Trust your **ear** more than your fingertip.

```json
{
  "id": "m2.w6.d1.bend_intro",
  "type": "tab",
  "meta": { "title": "Half-step and whole-step bend on the 4th (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "half" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "target" }
    ]}
  ]}
}
```
▶ **BPM 60.** Bend the 4th (3rd string 7th fret) a half step and release to b3, then bend the 4th a whole step to match the 5th (2nd string 5th fret). Hear the two sizes side by side.

## ② Visuals

Now let's pinpoint today's bending spot on the fretboard. Push **the 4th (D) at the 3rd string, 7th fret** and match its sound to **the 5th (E) at the 2nd string, 5th fret** — that's a successful whole-step bend. The 5th painted green in the score is where the bend must arrive.

```json
{
  "id": "m2.w6.d1.bend_position",
  "type": "scale_shape",
  "meta": { "title": "Bend spot on the 4th and its target 5th (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" }
  ]}
}
```
▶ **Green is the target.** Push the 3rd string 7th fret and arrive at the same pitch as the 5th on the 2nd string 5th fret.

<mark>Holding the arrival note in your ear before you push makes it much easier.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60, very slowly. Loosen up by lightly running **the 3rd and 2nd strings** you'll bend today.

```json
{
  "id": "m2.w6.d1.warmup",
  "type": "tab",
  "meta": { "title": "Box 1 warmup on the G string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 60.** Lightly run the 3rd and 2nd strings up and down to warm the hand.

**10–20 min · Brain training (today's target = hold the arrival note in your ear first)**
Play the target note before you push. The **half-step bend** aims at the blue note (b5), the **whole-step bend** aims at the 5th (E). <mark>Fix these two sounds firmly in your ear and bending gets far easier.</mark>

**20–40 min · Real bending practice (BPM 60)**
First the half-step bend. Push the 3rd string 7th fret (the 4th) up just a half step.

```json
{
  "id": "m2.w6.d1.half_bend",
  "type": "tab",
  "meta": { "title": "Half-step bend: 4 up to the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "half" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **Half-step bend.** Push the 4th a half step to make the hazy sound around the blue note (b5).

Now the whole-step bend. Play the target 5th first, then push until the same sound comes out.

```json
{
  "id": "m2.w6.d1.whole_bend",
  "type": "tab",
  "meta": { "title": "Whole-step bend: 4 up to the 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "target" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" }
    ]}
  ]}
}
```
▶ **Whole-step bend.** Play the 5th first, then push the 4th up a whole step to that pitch.

<mark>When the pushed note sounds exactly like the target, you've got it.</mark>

**40–50 min · Recording**
Record the whole-step bend and listen for whether the 5th you played first and the bent note match in pitch. If not, push more or less to match.

**Today's completion criteria:** You pushed the 4th at the 3rd string 7th fret a whole step to sound the 5th exactly, and can clearly tell it apart from the half-step bend.

## ④ Tips / Common Mistakes

Common mistakes when bending. Don't lead with force; build the habit of catching the target by ear.

```json
{
  "id": "m2.w6.d1.push_from_wrist",
  "type": "scale_shape",
  "meta": { "title": "Aim the bend at the real 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" }
  ]}
}
```
▶ **Target note in the ear first.** Play the 5th (green), then push the 4th toward that sound.

- **Overshooting the target.** Push a whole step plus another half and the note floats away. Stop right at the target 5th.
- **Pushing with one finger only.** Push with finger 3 but back it up with fingers 1 and 2 pushing together — far more stable.
- **Hiding the thumb behind the neck.** Hook the thumb slightly over the top of the neck for leverage and it takes less force.
- **Pushing but not listening.** Bending is finished by the ear, not the hand. Always push while comparing with the arrival note.
