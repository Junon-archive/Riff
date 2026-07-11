---
title: "Chromatic enclosure — squeeze the target from above and below to land"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — Chromatic enclosure, squeezing the target from above and below to land

## ① 이론/설명

At last, week 6, the final week of walking bass. If last week you walked all the way to ii-V-I, this week you learn to approach the target note **even more magnetically**. That technique is called **chromatic enclosure**. It's an advanced approach in jazz walking that <mark>squeezes the target from a half-step above and below, then lands</mark>.

The principle is simple. If the target is **F**, first you press the half-step above, **Gb**, then the half-step below, **E**, and finally **land on F**. Once from above, once from below — two neighbor notes wrap the target and close in from both sides. <mark>That closing-in tension makes the landing stronger</mark>.

Carve the order into your body — **above → below → land**. Enclosure is an all-purpose tool you can use no matter what the target is (a root, a third). Today, as a first step, let's wrap the target **F** and land once. Above Gb and below E carry you home to F, <mark>as if closing a door from both sides</mark>.

First, see the three notes that wrap the target **F** — the upper **Gb**, the lower **E**, and the landing point **F** — on the fretboard.

```json
{
  "id": "m2.w6.d1.enclosure_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" },
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** Upper **Gb** (4th string, fret 2), lower **E** (4th string, open), landing **F** (4th string, fret 1). The green dot is the landing target.

```json
{
  "id": "m2.w6.d1.enclosure_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" },
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now let's lay this enclosure **onto time** and walk it. Walk the upper Gb → lower E → landing F one beat each, and on the last beat 4 continue to F's **third, A**. <mark>Feel the flow of the three notes closing in on the target</mark> with your ears. Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w6.d1.enclosure_land_4",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Beat 1 **Gb** → beat 2 **E** → beat 3 **land on F** → beat 4 **A (third)**. After wrapping and squeezing, you settle firmly onto F.

```json
{
  "id": "m2.w6.d1.enclosure_land_5",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can lay a heavier low end with the low B.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk last week's ii-V-I once at BPM 72 to bring the swing-quarter feel back to your fingertips.

**10–20 min · Brain training**
Press the enclosure with the prep example below at a slow swing-quarter **BPM 60**, note by note. <mark>Check by ear that the two upper and lower neighbors squeeze exactly onto F</mark>.

```json
{
  "id": "m2.w6.d1.enclosure_land_slow_4",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The enclosure, slowly. Pass through the upper Gb and lower E and land exactly on F.

```json
{
  "id": "m2.w6.d1.enclosure_land_slow_5",
  "type": "tab",
  "meta": { "title": "Enclosure and land on F, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 2, "duration": "quarter", "label": "Gb", "role": "passing" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "role": "passing" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **wrap-and-land** above at BPM 80. <mark>See whether the landing F sounds clearer and stronger than the two notes before it</mark>. Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / feedback**
Record 30 seconds and listen for whether the moment of settling onto F after the squeeze is clear. If the landing is weak, try cutting the two neighbor notes a little shorter.

**Done when:** you can wrap the target F with a half-step above (Gb) and below (E) and land firmly on F in swing quarters on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **You rush the landing.** While wrapping above and below it's easy to get excited and pull beat-3 F early. Give each neighbor exactly one beat, and let F settle right on its beat.
- **You skip the lower neighbor.** If you press only the upper Gb and jump straight to F, it isn't an enclosure. You have to pass through both above and below for the closing-in tension to appear.

Keep today's wrapped target, the single point F, in your eye. Enclosure is, after all, a technique that carries you to this one point.

```json
{
  "id": "m2.w6.d1.target_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** Today's landing point, F (4th string, fret 1). Every enclosure gathers into this one green dot.

```json
{
  "id": "m2.w6.d1.target_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same position as the 4-string. You can also gauge a lower F with the low B.

- **Give yourself credit for day one.** Just opening the door to the advanced approach of enclosure is a big step. Tomorrow you'll aim this enclosure at a chord's **root** and make the starting point of your walk even more solid.
