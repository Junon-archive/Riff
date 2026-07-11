---
title: "Move the boogie — D7 and E7 boogie"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — Move the same hand shape to D7 and E7

## ① Theory

Now that you have the three chords in hand, today you move last week's **boogie riff** straight to D7 and E7. One amazing fact. <mark>The boogie hand shape stays the same even when the chord changes.</mark> Fret the root, then open and close your fingers on the very next string as **5th → 6th → b7 → 6th** — remember that shape? You just place it as is on each chord, changing only the root string.

The key is the root string. On A7 it's the 5th string, on D7 the 4th, on E7 the 6th. <mark>When the root moves over one string, the walking string moves over one string right alongside it.</mark> So the A7 boogie walks on the **5th and 4th strings**, the D7 boogie on the **4th and 3rd strings**, and the E7 boogie on the **6th and 5th strings** — all the same way.

Today, learn the D7 and E7 boogie one clear bar each. You may roll it with a **shuffle feel** already, or press it straight. <mark>What matters is the feel that the hand shape carries over across chords.</mark>

First, the hand shape of the **D7 boogie**.

```json
{
  "id": "m1.w2.d2.d7_boogie_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "D7 boogie shape — root on 4th string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **The open D on the 4th string** is the root; index, ring, and pinky walk on the 3rd string.

## ② Visuals

Now check it by sound. Here's one bar of the **D7 boogie**.

```json
{
  "id": "m1.w2.d2.d7_boogie",
  "type": "tab",
  "meta": { "title": "D7 boogie — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle it.** Hold the open D on the 4th string and walk on the 3rd string: 5th (2nd fret) → 6th (4th fret) → b7 (5th fret) → 6th.

Next is the **E7 boogie**. This time the 6th string is the root, so the low end is heavier. <mark>The hand shape is the same as A7 and D7 — only the walking string dropped to the 6th and 5th.</mark>

```json
{
  "id": "m1.w2.d2.e7_boogie",
  "type": "tab",
  "meta": { "title": "E7 boogie — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle it.** Hold the open E on the 6th string and walk on the 5th string: 5th (2nd fret) → 6th (4th fret) → b7 (5th fret) → 6th.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 65. Warm your hand with one bar of the A7 boogie. Check with your foot that <mark>the long-short shuffle is alive</mark>.

Slowly connect the move from yesterday's A7 boogie into the D7 boogie.

```json
{
  "id": "m1.w2.d2.warmup",
  "type": "tab",
  "meta": { "title": "Boogie move A7 to D7 — slow warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65, shuffle it.** Bar 1 A7 (5th-string root), bar 2 D7 (4th-string root) — the same hand shape just moved up one string.

**10–20 min · Brain training (today's target = moving the root string)**
Keep the boogie order (5-6-b7-6) the same, and picture in your head **moving only the root string 5 → 4 → 6**.

**20–40 min · Real D7 and E7 boogie (one bar each / BPM 80)**
Alternate the D7 boogie and the E7 boogie. Watch: <mark>does the root ring on every beat</mark> / <mark>is the walking string clean</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds of each boogie: <mark>do all three chords' boogies sound like the same hand shape</mark>.

**Today's completion criteria:** You can roll the D7 boogie (4th-string root) and the E7 boogie (6th-string root) one bar each with a shuffle.

## ④ Tips / Common mistakes

These are the mistakes that show up most when you move the boogie.

```json
{
  "id": "m1.w2.d2.e7_mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 boogie — keep it on strings 6 and 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 0, "muted": true }
  ]}
}
```
▶ **Keep the E7 boogie on the 6th and 5th strings only.** If the 4th and 3rd strings leak, the sound gets messy. Block the unused strings with your fingertips.

- **You mix up the root string.** A7 = 5th, D7 = 4th, E7 = 6th. Find the root string first before you move.
- **The hand shape changes.** Even when the chord changes, the 5-6-b7-6 order stays. Keep the fret spacing identical.
- **The walking string is blurry on D7.** Press the 3rd string 4th fret (6th) precisely with your ring finger.
- **The low end leaks.** If the 4th string rings in the E7 boogie, it gets stuffy. Cover it lightly with your right hand.
