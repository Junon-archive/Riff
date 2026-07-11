---
title: "Combining elements — comping + decoration in one bar"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — Combining elements: adding decoration to comping

## ① Theory

The first day of the neo-soul **graduation week**. This week you gather two months of pieces into one song. Today is the first step — you fit **comping** and **decoration** into one bar together. <mark>Add a b3→3 smear to the Dm9 comping, and the chord starts to sing.</mark>

The materials are already in your hands. The **Dm9** voicing, the **muted cutting** between stabs, and the **smear** sliding from b3 to 3. <mark>Naturally connecting these three pieces inside one bar is all of today.</mark> No need to rush.

First, carve the **Dm9** grip into your eye again. This hand shape is your **home base** all week. <mark>Once your fingers know the spot on their own, you get the room to add decoration.</mark>

```json
{
  "id": "m2.w8.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ The Dm9 comping grip: 5th string fret 5 (R) with b3·b7·9 stacked on top.

## ② Visuals

Here's **comping** and **decoration** tied into one, the **one-bar combination**. Dm9 stabs and cuts roll along, then get lightly tinted by the b3→3 smear. <mark>It's the first feel of caressing the chord rather than striking it.</mark>

```json
{
  "id": "m2.w8.d1.combined_bar",
  "type": "tab",
  "meta": { "title": "Combined bar — comping + decoration", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 72, swing 16.** On beat 3, between the Dm9 stabs and cuts, the b3→3 smear spreads. Comping and decoration live in one bar.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, play the **Dm9** stabs cleanly on the beat. <mark>The on-beat has to be solid before the decoration can stay steady.</mark>

**10–20 min · Brain training (adding decoration)**
Slot a **muted cut** between stabs, and add just one b3→3 **smear** on beat 3. Slowly, one at a time.

**20–40 min · Real one-bar combination (BPM 72)**
Loop the **one-bar combination** above. Feel the smear spot big with the slow version below, then add speed. <mark>When comping and decoration connect into one flow, you've reached today's goal.</mark>

```json
{
  "id": "m2.w8.d1.slow_combine",
  "type": "tab",
  "meta": { "title": "Combine slowly", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** Stab → cut → b3→3 smear → stab. Feel the smear spot big.

**40–50 min · Recording / self-feedback (recommended)**
Record and listen back. Compare yesterday's stab-only bar with today's bar that has decoration on top.

**Done when:** You can play the one-bar combination without a break at BPM 72, swing 16, adding a b3→3 smear onto the Dm9 comping.

## ④ Tips / Common mistakes

Just the mistakes that show up most as you start combining.

```json
{
  "id": "m2.w8.d1.combine_check",
  "type": "tab",
  "meta": { "title": "Combine check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ Hold the Dm9 half a beat longer and feel the smear alone, big.

- **The smear rushes.** Snap b3→3 too fast and the slide vanishes. Let it spread slowly with the hammer.
- **The cutting disappears.** Focus only on the stabs and the grid empties. Put a "chick" in every gap.
- **The comping breaks.** Don't drop the stab while adding decoration — keep the hand shape as is.
- **You raise speed first.** Connect the three pieces comfortably at BPM 60, then raise to 72.
