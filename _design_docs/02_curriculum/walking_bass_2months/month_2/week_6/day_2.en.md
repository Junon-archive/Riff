---
title: "Root enclosure — wrap the starting point of the walk and land"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — Root enclosure, wrapping the starting point of the walk and landing

## ① 이론/설명

Yesterday you learned the concept of enclosure. Today you aim that enclosure at the **starting point of the walk** — the **root** of the chord. You've spent the past month and a half learning that beat 1 of every bar lands on the root. <mark>When you enclose that beat-1 root</mark>, the first step of the bar becomes far more solid.

In the key of F, the root of the ii chord **Gm7** is **G**. Let's enclose this G — pass through the half-step above, **Ab**, and the half-step below, **F#**, then **land on G**. When the upper Ab and lower F# close in on G from both sides, the beat-1 root feels <mark>impossible to resist</mark>.

The order is the same as yesterday — **above → below → land**. What's special today is that the landing point is the chord's **root**. The root is each chord's home address, so <mark>when you enclose it, the step into the next chord becomes clearer</mark>. Today you complete a wrap-and-land with the root as your target.

First, see the three notes that wrap the root **G** — the upper **Ab**, the lower **F#**, and the landing root **G** — on the fretboard.

```json
{
  "id": "m2.w6.d2.enclosure_root_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around G (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** Upper **Ab** (4th string, fret 4), lower **F#** (4th string, fret 2), landing root **G** (4th string, fret 3). The green dot is the landing target.

```json
{
  "id": "m2.w6.d2.enclosure_root_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around G (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now lay the root enclosure **onto time** and walk it. Walk the upper Ab → lower F# → landing G one beat each, and on the last beat 4 continue to Gm7's **b3, Bb**. <mark>Feel whether the beat-1 root, wrapped, settles in strongly</mark>. Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w6.d2.enclosure_root_4",
  "type": "tab",
  "meta": { "title": "Root enclosure on G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Beat 1 **Ab** → beat 2 **F#** → beat 3 **land on G** → beat 4 **Bb (b3)**. After squeezing from above and below, you settle firmly onto the root G.

```json
{
  "id": "m2.w6.d2.enclosure_root_5",
  "type": "tab",
  "meta": { "title": "Root enclosure on G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. You can lay a heavier low end with the low B.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's F enclosure once at BPM 72 to bring back the feel of wrapping and landing.

**10–20 min · Brain training**
Press the root enclosure with the prep example below at a slow swing-quarter **BPM 60**. <mark>Check by ear that the upper Ab and lower F# squeeze exactly onto the root G</mark>.

```json
{
  "id": "m2.w6.d2.enclosure_root_slow_4",
  "type": "tab",
  "meta": { "title": "Root enclosure on G, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The root enclosure, slowly. Pass through the upper Ab and lower F# and land exactly on G.

```json
{
  "id": "m2.w6.d2.enclosure_root_slow_5",
  "type": "tab",
  "meta": { "title": "Root enclosure on G, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **root enclosure** above at BPM 80. <mark>See whether the landing root G sounds as solid as the pillar of the bar</mark>. Learn it on 4-string, then check on 5-string too.

**40–50 min · Record / feedback**
Record 30 seconds and listen for whether the root G, once wrapped, lands clearly. If the landing is blurry, try cutting the two neighbor notes above and below a little shorter.

**Done when:** you can wrap the root G with a half-step above (Ab) and below (F#) and land firmly on the root in swing quarters on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **You miss the lower neighbor F#.** It's easy to go from the upper Ab straight to G. You must pass through F# (4th string, fret 2) for the flavor of closing in from below to come alive.
- **The root gets buried under the other notes.** If you hit the two wrapping notes (Ab, F#) hard, the landing G itself weakens. Keep the wrapping notes light and the landing root clear — split the dynamics.

Keep today's wrapped root, the single point G, in your eye. Every beat 1 of a walk is a landing point you can enclose like this.

```json
{
  "id": "m2.w6.d2.target_g_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target G (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** Today's landing root, G (4th string, fret 3). This one green dot is the starting point of the bar.

```json
{
  "id": "m2.w6.d2.target_g_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target G (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** Same position as the 4-string. You can also gauge a lower G with the low B.

- **You're walking well on day two.** Now that you've learned the feel of enclosing the root, the starting point of your walk is much more solid. Tomorrow you'll aim this enclosure at the chord's **third** to make a landing with deeper color.
