---
title: "The double-stop hand shape — two notes as one"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — A thick sound with root+5th and root+6th

## ① Theory

On yesterday's shuffle feel, today we finally add 'notes.' But instead of one note, the star of today is pressing **two notes at once** — the **double stop**. When two fingers ring as tightly as a single sound, that thin open A suddenly turns into a <mark>thick, full blues tone</mark>. Compared to a single note, the weight of the sound lands hard, and your rhythm stays clear even inside a band — that's the real charm.

Today's two pairs are fixed. The **root (R)** always sits on the **open A of the 5th string**, and laying the **5th (E) at the 2nd fret of the 4th string** on top with your index finger completes the 'root+5th' double stop. This becomes the <mark>most stable backbone</mark> of the boogie riff.

Let's learn the root+5th hand shape by eye first.

```json
{
  "id": "m1.w1.d2.dstop_5th",
  "type": "fretboard_diagram",
  "meta": { "title": "A double stop — root + 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Open A + 2nd fret of the 4th string.** Mute strings 6, 3, 2, 1; keep only the two notes clear.

From here, just spread the 4th-string finger **from the 2nd fret (5th) to the 4th fret (6th)** and you get the bouncy 'root+6th' double stop. Fret the 5th with your index and the 6th with your **ring finger**, and reaching to the b7 later becomes easy. Carve the **hand-shape diagram** into your eyes so your hand remembers both shapes.

At first the two strings may not ring together, or a neighboring string may buzz along. That's completely normal. Stand your fingertips up and keep only the **two clear notes**, and you'll get <mark>one sound fused into a single body</mark>. This one hand shape means tomorrow's boogie riff is already half done. And these two hand shapes are the starting point for every boogie and riff to come, so learning them today pays off for a long while.

## ② Visuals

Let's see the two hand shapes side by side. First, 'root+6th' — the shape with only the 4th string moved to the **4th fret**, a <mark>bouncy, bright note</mark>.

```json
{
  "id": "m1.w1.d2.dstop_6th",
  "type": "fretboard_diagram",
  "meta": { "title": "A double stop — root + 6th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Open A + 4th fret of the 4th string (ring finger).** One fret wider than the 5th. Lightly mute the 6th string with your thumb.

Now let's alternate the two double stops. In the order **root+5th → root+6th**, keep every note clear.

```json
{
  "id": "m1.w1.d2.dstop_play",
  "type": "tab",
  "meta": { "title": "Root+5 and Root+6 double stops", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 70, straight.** Confirm by ear that both notes sound at once, note by note.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Loosen up with yesterday's open-A shuffle and check that your right hand strikes only the 5th and 4th strings. <mark>Don't touch the strings you don't need</mark>.

**10–20 min · Brain training (today's target = switching the two hand shapes)**
Between the 5th (2nd fret) and 6th (4th fret), open and close **just your ring finger** and shuttle the hand shape silently, without sound.

Use the slow version below to check that both notes ring together.

```json
{
  "id": "m1.w1.d2.dstop_slow",
  "type": "tab",
  "meta": { "title": "Double stops — slow (half notes)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60, half notes.** Hold root+5th and root+6th each long. Listen to the balance of the two notes.

**20–40 min · Real double stops (BPM 70)**
Alternate root+5th and root+6th and roll them **without a break**. Watch whether <mark>the two notes lock as one</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds, then check: <mark>do both notes ring</mark> / <mark>is there no neighboring-string buzz</mark>.

**Today's completion criteria:** You can alternate the root+5th and root+6th double stops clearly at BPM 70 with no neighboring-string buzz.

## ④ Tips / Common mistakes

Here are just the spots people snag on with double stops.

```json
{
  "id": "m1.w1.d2.dstop_reach",
  "type": "fretboard_diagram",
  "meta": { "title": "4th string reach — 5th (fret 2) to 6th (fret 4)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" }
  ]}
}
```
▶ **Move only the 4th string.** 5th (2nd fret) ↔ 6th (4th fret); keep the open A on the 5th string as is.

- **Only one note rings.** Your fingertip is lying flat or lacking force. Stand the tip up and press both strings evenly.
- **A neighboring string buzzes along.** Strings 6 and 3 are open and humming. Lightly mute with the side of the fretting finger and the right hand.
- **The root wobbles.** Lose the open 5th string and the root disappears. Keep the open A ringing at all times.
- **A stiff wrist.** If the 5th↔6th switch is rigid, open and close just the ring finger softly.
