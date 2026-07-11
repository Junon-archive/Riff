---
title: "Pull-off descending ornament — notes flow down in a stream"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — Pull-off descending ornament

## ① Theory

Day two. Today's ornament **descends**, dropping notes one at a time with **pull-offs**. <mark>Scrape the finger that struck the string slightly downward to sound the next note — the notes flow down in a stream without picking.</mark>

On the 3rd string, chain **pull-offs** down through **R (D)→b7 (C)→5 (A)**, pass the open-string **4th (G)**, and land on **b3 (F)**. <mark>When four notes flow from a single pick, the descent runs like water.</mark> Don't lift your finger; fret the next fret in advance.

Today's goal is to flow this descending ornament without a break at **BPM 72**. <mark>Not speed — when the pull-offs link smoothly and the notes stream down, you've done your part for today.</mark> First, learn where the descent travels.

```json
{
  "id": "m2.w6.d2.descent_position",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off descent path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ Descend on the 3rd string from fret 7 (R) through frets 5 and 2, then land on the 4th string fret 3 (green b3).

## ② Visuals

Here's today's descending ornament. From the 3rd string **fret 7 (R)**, flow down with **pull-offs** and land on **b3**. <mark>You pick only the first note; your left hand streams the rest.</mark>

```json
{
  "id": "m2.w6.d2.pulloff_descent",
  "type": "tab",
  "meta": { "title": "Pull-off descending ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale", "technique": "pull_off" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "pull_off" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 72.** From the 3rd string **fret 7 (D)**, flow down with three **pull-offs**, pass the open-string 4th, and land on **b3**.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, pick the 3rd string's four notes (**R·b7·5·4**) one at a time. Check the sound first, without pull-offs. <mark>Hear first whether the four notes link clearly in a descent.</mark>

**10–20 min · Brain training (pull-offs slowly)**
Now pick **only the first note** and stream the rest with **pull-offs**. If the sound cuts, put a touch more of that downward-scraping feel into your left finger.

**20–40 min · Real descending ornament (BPM 72)**
Repeat the two bars below. Bar 1 is the descending ornament; bar 2 lands on the **root (D)** and rests. <mark>Feel the flow of settling comfortably onto the root after the notes stream down.</mark>

```json
{
  "id": "m2.w6.d2.pulloff_descent_loop",
  "type": "tab",
  "meta": { "title": "Pull-off descent with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale", "technique": "pull_off" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "pull_off" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** Bar 1 descending ornament → bar 2 root landing and rest. After the stream down, settle onto the root and take one breath.

**40–50 min · Recording / self-feedback (recommended)**
Record the descending ornament and listen back. Compare the choppy sound with today's smooth descent.

**Done when:** You can flow the pull-off descending ornament (R→b7→5→4→b3) at BPM 72 without the sound cutting out, and settle comfortably onto the root.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you flow the descending ornament.

```json
{
  "id": "m2.w6.d2.descent_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off descent map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ The 3rd string b7 and 5th are the descent path; the 4th string green b3 is the landing.

- **The pull-off is weak.** Don't just lift the finger; scrape the string slightly downward to sound the next note.
- **The sound gets choppy.** Fret the next fret in advance so the pull-offs link smoothly.
- **The descent rushes.** Don't rush the four notes; stream them down evenly.
- **You raise speed first.** Drop to BPM 60 and finish with the notes linking without a break.
