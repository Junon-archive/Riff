---
title: "Ornamenting a chord — an expressive Dm9 with one front note"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — Ornamenting a chord

## ① Theory

Day three. Today you ornament not a single note but **the whole Dm9 chord**. <mark>Just before the chord rings, put a short **front note** ahead of the lowest **bass note** so the chord enters as if "speaking."</mark>

The moment you brush **b7 (C)** in the bass briefly and **hammer on** to the **root (D)**, the **b3·b7·9** stacked above ring together. <mark>When the lowest note slides in as a grace note, even the same chord suddenly comes alive with expression.</mark> Keep the front note short and hold the chord long for resonance.

Today's goal is to ring this **ornamented chord** expressively at **BPM 72**. <mark>Not speed — when the front note bleeds cleanly into the bass and the chord rings with it, you've done your part for today.</mark> First, learn the chord grip and the front note's spot.

```json
{
  "id": "m2.w6.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip with bass grace note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 3, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ The 5th string fret 3 (front note b7)→fret 5 (root), with the 4th·3rd·2nd strings above as b3·b7·9 — the Dm9 grip.

## ② Visuals

Here's the ornamented **Dm9** chord. Brush the bass **b7** briefly and **hammer on to the root**, and the **b3·b7·9** above ring at once. <mark>One grace note on the lowest voice paints the whole chord with expression.</mark>

```json
{
  "id": "m2.w6.d3.chord_ornament",
  "type": "tab",
  "meta": { "title": "Grace into Dm9 chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "half", "dotted": true, "isRoot": true, "role": "root", "technique": "hammer_on", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** Brush the 5th string **fret 3 (b7)** briefly and **hammer on to fret 5 (root)** — at that moment the three notes above ring together and **Dm9** enters with expression.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, ring the **Dm9** chord clearly, without the front note. Check that the four notes (**R·b3·b7·9**) sound evenly. <mark>Before adding the ornament, hear whether the chord itself sounds clean.</mark>

**10–20 min · Brain training (front note slowly)**
Now add the bass **b7→root** hammer-on. Don't let the **front note** get too long; slide it in quickly so the chord rings right after.

**20–40 min · Real ornamented chord (BPM 72)**
Repeat the two bars below. Bar 1 is the ornamented chord; bar 2 rings the same **Dm9** plainly for comparison. <mark>Feel the difference in expression between the chord with a front note and the one without.</mark>

```json
{
  "id": "m2.w6.d3.chord_ornament_loop",
  "type": "tab",
  "meta": { "title": "Ornamented vs plain Dm9", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "half", "dotted": true, "isRoot": true, "role": "root", "technique": "hammer_on", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "isRoot": true, "role": "root", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** Bar 1 ornamented chord → bar 2 plain Dm9. Feel the difference in expression from one front note.

**40–50 min · Recording / self-feedback (recommended)**
Record the two chords side by side and listen back. Compare how much one front note changes the chord's expression.

**Done when:** At BPM 72 you can add the bass front note (b7→root) to ring the Dm9 chord with expression, playing it distinctly from the plain chord.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you ornament a chord.

```json
{
  "id": "m2.w6.d3.dm9_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 ornament map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 3, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ From the 5th string front note (b7) to the root, with the three notes above as Dm9's color.

- **Only the front note is loud.** Brush the front note briefly and ring it together so the chord stays the star.
- **The chord scatters.** Hold the three upper fingers in chord shape in advance while you hammer on.
- **The bass gets buried.** Ring the lowest string clearly so the front note is heard.
- **You raise speed first.** Drop to BPM 60 and finish with the front note and chord ringing cleanly together first.
