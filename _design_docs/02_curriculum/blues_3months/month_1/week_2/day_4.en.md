---
title: "Completing the 12-bar boogie — the Week 2 finish line"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — Connect the boogie across 12 bars and complete it

## ① Theory

Here's Week 2's finish line. Today you combine all the pieces so far. Onto the **12-bar form** (D3), you stack the **moved boogie** (D2) to complete one lap. <mark>Each time the chord changes, you just switch the boogie's root string 5 → 4 → 6.</mark> There's nothing new to learn. You're only connecting what's already in your hands.

Today's core is the **move**. Keep the boogie hand shape as is, and the moment the chord changes, move **only the root string up or down one string**. For example, going from bar 1's A7 to bar 2's D7, the hand walking on the 5th string lifts wholesale to the 4th string. <mark>The finger spacing doesn't change one bit.</mark>

Let's look at the root spots of the three boogies once more.

```json
{
  "id": "m1.w2.d4.boogie_roots",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie roots — A7 str5, D7 str4, E7 str6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **A7 = 5th, D7 = 4th, E7 = 6th string root.** The same hand shape walks over these three open strings.

The representative move to complete today is **A7 → D7**. If these two bars are smooth, the other chord moves follow the same principle and connect right away.

## ② Visuals

This week's finished piece, the representative move. <mark>A whole blues song is really just this one lump moved around by changing chords.</mark> Bar 1 the **A7 boogie**, bar 2 the **D7 boogie** — the same hand shape moving over one string each.

```json
{
  "id": "m1.w2.d4.boogie_move",
  "type": "tab",
  "meta": { "title": "Boogie move A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
▶ **BPM 80, shuffle.** Bar 1 A7 (5th-string root), bar 2 D7 (4th-string root) — just **the same hand shape moved up one string each**. E7 uses the same shape with the 6th-string root.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 65. Revive the shuffle with one bar of the A7 boogie. Check with your foot that <mark>the long-short is alive</mark>.

This time connect the turnaround move, **E7 → D7**. It's the spot dropping from the V to the IV.

```json
{
  "id": "m1.w2.d4.boogie_move_e7_d7",
  "type": "tab",
  "meta": { "title": "Boogie move E7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
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
▶ **BPM 80, shuffle.** Bar 1 E7 (6th-string root), bar 2 D7 (4th-string root). Start from the low end and drop to the 4th string.

**10–20 min · Brain training (today's target = switching the root string per chord)**
Run the 12 bars in your head, and the moment the chord changes, get the **root string (5 → 4 → 6)** ready in advance.

**20–40 min · Real 12-bar boogie (BPM 80)**
Stack the boogie onto D3's 12-bar map and go around once <mark>without a break</mark>. Watch that <mark>the boogie doesn't cut out when the chord changes</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Be sure to record one lap of the 12-bar boogie: <mark>do the moves between the three chords sound smooth</mark>.

**Today's completion criteria:** You can stack the A7, D7, and E7 boogies onto the 12-bar form and play and record one lap with a shuffle, without a break. — This week's deliverable: the 12-bar boogie in A blues (Week 2 complete!)

## ④ Tips / Common mistakes

These are the mistakes that show up most when you connect the 12-bar boogie.

```json
{
  "id": "m1.w2.d4.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep only the boogie strings ringing", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "muted": true }
  ]}
}
```
▶ **Ring only the boogie strings.** If the 6th and 3rd strings leak in the A7 boogie, the sound gets muddy. Block the unused strings with your fingertips.

- **The rhythm cuts out at the move.** Even when the chord changes, the shuffle doesn't stop. Keep stomping long-short with your foot.
- **You find the root string late.** Get the next chord's root string ready one beat early.
- **The low end is heavy on E7.** The 6th-string root is fine, but if the 4th and 3rd strings leak it gets stuffy.
- **Skipping the recording.** Week 2's result is this 12-bar boogie. Keep even a short one and compare with next week.
