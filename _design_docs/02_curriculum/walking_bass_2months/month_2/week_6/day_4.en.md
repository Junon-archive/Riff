---
title: "Enclosure walking — wrap the target C from above and below to land (week 6 complete)"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — Enclosure walking, wrapping and landing on the target C

## ① 이론/설명

On the final day of week 6, you weave the enclosure you've learned into an actual walking bar. Today's target is **C** — the root of the V chord **C7** in the key of F. Wrap this C with the half-step above, **Db**, and below, **B**, then <mark>land on C and add color with the third</mark> to complete a bar.

The flow of the bar is this. Beat 1 **Db** (above) → beat 2 **B** (below) → beat 3 **land on C** (root) → beat 4 **E (third)**. Closing in a half-step from above and below and then settling onto C creates a tension that <mark>pulls you inevitably into the next chord</mark>. It's the moment enclosure comes alive as a bar of walking.

One thing to note. Because this bar isolates just the enclosure motion, <mark>beat 1 starts on an approach note (Db)</mark>. But in real walking, this enclosure **rides the weak beats (3–4) of the previous bar** and lands on beat 1 (C) of the next chord. Today, focus on getting the enclosure itself fully into your hands, and remember that in real play it attaches to the end of the previous bar.

First, see the three notes that wrap the target **C** — the upper **Db**, the lower **B**, and the landing root **C** — on the fretboard.

```json
{
  "id": "m2.w6.d4.enclosure_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around C (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** Upper **Db** (3rd string, fret 4), lower **B** (3rd string, fret 2), landing root **C** (3rd string, fret 3). The green dot is the landing target.

```json
{
  "id": "m2.w6.d4.enclosure_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around C (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now, this week's finished piece — one bar of **enclosure walking**. Wrap the target C with the upper Db and lower B and land, then add color with the third E on beat 4. <mark>The closing-in tension makes the landing strong</mark>. Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w6.d4.enclosure_4",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string, swing quarters.** Wrap the target **C (3rd string, fret 3)** with the half-step above, **Db (fret 4)**, → the half-step below, **B (fret 2)**, then land. The closing-in tension makes the landing strong. ※ Because this bar isolates just the enclosure motion, beat 1 starts on an approach note — in real walking this enclosure **rides the weak beats (3–4) of the previous bar** and lands on beat 1 (C) of the next chord.

```json
{
  "id": "m2.w6.d4.enclosure_5",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can lay a heavier low end with the low B.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's third enclosure once at BPM 72 to bring back the feel of wrapping and landing.

**10–20 min · Brain training**
Press the enclosure walk with the prep example below at a slow swing-quarter **BPM 60**. <mark>Check by ear that the upper Db and lower B squeeze exactly onto the root C</mark>.

```json
{
  "id": "m2.w6.d4.enclosure_slow_4",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The enclosure walk, slowly. Pass through the upper Db and lower B, land exactly on C, and continue to the third E.

```json
{
  "id": "m2.w6.d4.enclosure_slow_5",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **enclosure walk** above at BPM 80. <mark>See whether the landing C sounds clearer and stronger than the two wrapping notes before it</mark>. Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / graduation**
At last, recording time. Record one bar of the enclosure walk two or three times around without stopping, and keep the best take as your first enclosure walk. Keep both 4- and 5-string and week 6 is complete.

**Done when:** you can wrap the target C with a half-step above (Db) and below (B) and land firmly on C, recording it, in swing quarters on both 4- and 5-string. — Weekly deliverable: your first enclosure walking bass recording. (Week 6 complete!)

## ④ 팁 / 흔한 실수

- **You rush the landing from beat 1.** Since this bar starts on an approach note, it's easy to get excited and pull beat-3 C early. Give Db and B one beat each, and let C settle right on its beat.
- **You force the enclosure onto the previous bar.** Today is a day for getting the enclosure itself into your hands. Riding beats 3–4 of the previous bar in real play is something you attach naturally once this single bar feels comfortable.

Keep today's wrapped target, the single point C, in your eye. The enclosure you've learned all through week 6 is, in the end, completed by this one landing.

```json
{
  "id": "m2.w6.d4.target_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target C (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** Today's landing root, C (3rd string, fret 3). This one green dot gathers all of this week's enclosures.

```json
{
  "id": "m2.w6.d4.target_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target C (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same position as the 4-string. You can also gauge a lower C with the low B.

- **Give yourself big credit for week 6.** You took the advanced approach of wrapping a target a half-step above and below — starting from the concept, moving through the root and the third, and completing it as a bar of real walking. Now your walk has gained the power to pull inevitably into the target note. What a wonderful two-month journey you've walked.
