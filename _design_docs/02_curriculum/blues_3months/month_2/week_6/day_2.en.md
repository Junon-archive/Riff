---
title: "Vibrato — make the note tremble and sing"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — Making a note sing with wrist vibrato

## ① Theory

Yesterday you pushed a note up; today you'll make a note 'tremble.' **Vibrato** is a technique that repeatedly raises and lowers a fretted note by a tiny amount, making **a single note** waver. <mark>Vibrato is exactly like a singer trembling the voice on a long-held note to breathe life into the song.</mark> A note you just fret dies out fast, but give it a little shake and it keeps living and breathing. When you hold the last note of a phrase in the blues, whether this vibrato is there or not changes the expression completely.

The heart of vibrato is 'where it comes from.' Twitch only the fingertip and the sound is shallow and unsteady, but come from the **wrist** and it's deep and stable. <mark>Like gently turning a doorknob, rotate the wrist slowly to push the note up and let it back.</mark> At first drop the urge to shake fast, and make just one that's **slow and wide**. Wide once, wide again — this regular shake is the start of a stable vibrato.

Vibrato isn't put on just any note. When a phrase **lands on a stable note**, hold that note long and apply it. In Box 1 the **root (A)** and the b3 suit it especially well — notes as comfortable as home, so they sound good even shaken long. <mark>A note that only brushes by has neither the room nor the reason for vibrato.</mark> So today, just practice picking one long note and laying vibrato on it. Making one note sing — that's today's goal.

```json
{
  "id": "m2.w6.d2.vibrato_intro",
  "type": "tab",
  "meta": { "title": "Vibrato on the root (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** Hold the root (A) at the 4th string 7th fret as a whole note and shake it slowly and wide from the wrist. Listen for whether the note sings instead of dying.

## ② Visuals

Let's look at the 'strong notes' good for vibrato on the fretboard. The **root (A) at the 4th string, 7th fret** is the most comfortable, and the **b3 at the 3rd string, 5th fret** marked green also cries beautifully.

```json
{
  "id": "m2.w6.d2.vibrato_spots",
  "type": "scale_shape",
  "meta": { "title": "Strong notes to sing with vibrato (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **Vibrato on a long note.** Hold the root or b3 (green) long and shake it slowly from the wrist.

<mark>Pick just one note to shake, and start shaking before that note dies.</mark>

## ③ Today's Practice (50-min routine)

**0–10 min · Warm-up**
BPM 60. Without vibrato, stretch the root and b3 long and listen to the sound. You're getting to know the **'plain note' before the shake** first.

```json
{
  "id": "m2.w6.d2.warmup",
  "type": "tab",
  "meta": { "title": "Long tones on Box 1 anchors", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 60.** Stretch the root and b3 long as half notes — don't shake yet, just let the sound out.

**10–20 min · Brain training (today's target = slow and wide from the wrist)**
Check that the wrist moves, not the fingertip. Rotate **only the wrist slowly**, like turning a doorknob. <mark>Don't try to shake fast; start from one wide, regular waver.</mark>

**20–40 min · Real vibrato practice (BPM 60)**
Now lay vibrato on the long notes. Hold the root and b3 long and shake from the wrist.

```json
{
  "id": "m2.w6.d2.vibrato_practice",
  "type": "tab",
  "meta": { "title": "Add vibrato to the long tones", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **Vibrato on the root and b3.** Hold each note as a half note and shake wide and slow from the wrist.

Once the shake steadies, try landing on the root at the end of a short phrase with vibrato.

```json
{
  "id": "m2.w6.d2.vibrato_lick",
  "type": "tab",
  "meta": { "title": "Land a phrase and sing it with vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **Land on the last note.** Pass through b7-5-4, arrive at the root, then hold it and sing with vibrato.

<mark>When the final root keeps singing instead of dying, you've got it.</mark>

**40–50 min · Recording**
Record a phrase that lands on the root with vibrato. Listen for whether the waver is regular and whether the pitch wobbles and collapses.

**Today's completion criteria:** You made a wide, regular vibrato from the wrist on a long note, and held the final root of a phrase singing with vibrato.

## ④ Tips / Common Mistakes

Common mistakes with vibrato. Shaking fast isn't doing it well — one stable shake is far cooler.

```json
{
  "id": "m2.w6.d2.wrist_not_finger",
  "type": "scale_shape",
  "meta": { "title": "Vibrato comes from the wrist, on a strong note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target" }
  ]}
}
```
▶ **From the wrist, on a strong note.** Pick a stable note like the root or b3 (green) and shake it slowly.

- **Only fluttering with the fingertip.** The sound turns shallow and unsteady. Move big from the wrist to make a deep shake.
- **Shaking too fast.** Rush and the pitch wobbles and sounds unstable. Slow and wide, regular, comes first.
- **Putting it on any note.** Not a short brushing note — lay it only on a stable note you hold long.
- **The pitch only rising.** Vibrato must go up and down around the fretted note. Always come back to the original pitch.
