---
title: "Grace notes give a chord expression — a short front note bleeds into the target"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — Grace notes give a chord expression

## ① Theory

Week 6. This week's theme is the **grace note (appoggiatura)** — a very short ornament note right before the target. <mark>Like a short breath that slips out just before you speak, flick the **front note** in quickly and let it bleed into the **target note**.</mark>

Today's grace note brushes **b3 (F)** briefly and immediately **hammers on** to **3 (F#)** to bleed — a single ornament. The guitar has no dedicated grace-note symbol, so <mark>we approximate it with a **short front note + hammer-on**.</mark> The front note is quick like an eighth note, and you hold the target note long.

Today's goal is to place this grace note once, clearly, at **BPM 72**. <mark>Not speed — when the short front note bleeds cleanly into the target, you've done your part for today.</mark> First, learn where your hand sits.

```json
{
  "id": "m2.w6.d1.grace_position",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace note hand position", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ The 4th string fret 3 (b3) and fret 4 (green 3rd) are the grace note's spot; the 3rd string fret 2 is the following 5th.

## ② Visuals

Here's today's grace note. Brush **b3** briefly and **hammer on** to the **3rd**, letting the short front note bleed into the target. <mark>The front note is a fleeting brush; the target note rings long and leaves an expression.</mark>

```json
{
  "id": "m2.w6.d1.grace_note",
  "type": "tab",
  "meta": { "title": "Grace note into the 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** Brush **b3 (4th string fret 3)** briefly and **hammer on to the 3rd (fret 4)** — a grace note. Then flow to the 5th and rest one beat.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, fret the grace note's two notes (**b3·3**) one at a time. Check the sound first, without the hammer-on. <mark>Hear first whether the two notes, a half step apart, sound clearly.</mark>

**10–20 min · Brain training (grace note slowly)**
Now add the **b3→3** hammer-on with **one pick stroke**. Don't let the front note get too long; flick it quickly so the target note stays the star.

**20–40 min · Real grace note (BPM 72)**
Repeat the two bars below. Bar 1 is the grace note; bar 2 lands on the **root (D)** and rests. <mark>Feel the flow of settling comfortably onto the root after the grace note.</mark>

```json
{
  "id": "m2.w6.d1.grace_note_loop",
  "type": "tab",
  "meta": { "title": "Grace note with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** Bar 1 grace note → bar 2 root landing and rest. After the ornament, settle onto the root and take one breath.

**40–50 min · Recording / self-feedback (recommended)**
Record the grace note and listen back. Compare the flat sound without a front note to today's ornament.

**Done when:** At BPM 72 you can place the b3→3 grace note once clearly and settle comfortably onto the root.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you add the grace note.

```json
{
  "id": "m2.w6.d1.grace_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace note path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ The grace note bleeds from the 4th string fret 3 (b3) to fret 4 (green 3rd).

- **The front note is too long.** Let the front note brush by briefly and hold the target note long.
- **The hammer-on is weak.** Drop your left finger firmly onto the target fret to make it bleed.
- **The sound cuts out.** Don't lift the finger that struck the front note; hammer on from there.
- **You raise speed first.** Drop to BPM 60 and finish the grace note bleeding cleanly first.
