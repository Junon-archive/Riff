---
title: "Walking the full 12-bar F blues and recording it — Month 1 graduation"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — Walking the full 12-bar F blues and recording it, Month 1 graduation

## ① 이론/설명

At last, the final day of Week 4, your **Month 1 graduation**! There's just one thing to do today — walk the **12-bar F blues** you've linked over these four days from start to finish, and <mark>keep it as a recording</mark>. Think back to your very first day a month ago. Back then even landing a single root took focus, and today you walk three chords in swing quarters through twelve bars to completion. This is exactly what **growth** looks like.

Today's deliverable has two parts. First, place the <mark>pinned first four bars</mark> (F7-Bb7-F7-F7) exactly — land the root on each beat 1, bridge to the next chord on beat 4 (**B, E, b7, B**). Then run the **full 12-bar** version that extends this approach across the whole form. The walking principle has been the same all four days. **Land on beat 1, bridge on beat 4.** This relationship between the two beats threads the 12 bars into one.

Recording is not hard. One phone is enough. What matters isn't perfection but **leaving something behind**. Just like yesterday's full run-through, turn on the metronome at a comfortable tempo and go around two or three times. Even if you miss a note, if the walk stays alive it's a good recording. <mark>Rather than waiting for one perfect take, record several times and pick the best one</mark>. Next month you'll widen these 12 bars with more varied approaches and rhythms. Today's recording is the starting line for that.

First, see the whole 12-bar map at a glance — the three landings **F, Bb, and C**.

```json
{
  "id": "m1.w4.d4.blues_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F blues — three landings map — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The 12 bars' three landings — F (4th string, fret 1), Bb (3rd string, fret 1), C (3rd string, fret 3).

```json
{
  "id": "m1.w4.d4.blues_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F blues — three landings map — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can also grab a lower root on the low B.

## ② 시각 자료

Now record **this month's deliverable**. First place the <mark>pinned first four bars</mark>, then run the **full 12-bar** version that extends them. Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m1.w4.d4.f_blues_walk_4",
  "type": "tab",
  "meta": { "title": "F blues walking (bars 1-4) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Bar 1 F7, bar 2 Bb7, bars 3 and 4 F7. Land the root on each beat 1, bridge on beat 4 (B, E, b7, B). The full 12 bars extend this approach across the whole form.

```json
{
  "id": "m1.w4.d4.f_blues_walk_5",
  "type": "tab",
  "meta": { "title": "F blues walking (bars 1-4) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 5-string.** Same notes and positions as the 4-string. Keep the low B covered.

Now the **full 12-bar** version that extends across the form. These twelve bars are today's recording target.

```json
{
  "id": "m1.w4.d4.full_12_4",
  "type": "tab",
  "meta": { "title": "F blues full 12-bar walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string.** Following the form (F7, Bb7, F7, F7, Bb7, Bb7, F7, F7, C7, Bb7, F7, C7), link the twelve bars with a root on beat 1 and a bridge on beat 4. Bar 12's beat-4 Gb returns to bar 1's F.

```json
{
  "id": "m1.w4.d4.full_12_5",
  "type": "tab",
  "meta": { "title": "F blues full 12-bar walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "Gb", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 5-string.** Same notes and positions as the 4-string. You can also record a version on the deep low B for extra weight.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Let yesterday's full run-through flow lightly at BPM 70 to wake up your hands. Today you'll <mark>capture that same flow in a recording</mark>.

**10–20 min · Brain training**
With the prep below, place the first four bars at a slow **BPM 70** and re-align the bridges (B, E, b7, B) and chord shifts. Check that <mark>the seams don't wobble</mark>.

```json
{
  "id": "m1.w4.d4.record_prep_4",
  "type": "tab",
  "meta": { "title": "Recording prep, first 4 bars, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** First four bars only, slow. Re-align whether the beat-4 bridges slide into the next beat 1.

```json
{
  "id": "m1.w4.d4.record_prep_5",
  "type": "tab",
  "meta": { "title": "Recording prep, first 4 bars, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **full 12-bar** walk above at a comfortable tempo (BPM 70–85). When the twelve bars link without stopping, you're ready to record. Learn it on 4-string, then confirm the same flow on 5-string.

**40–50 min · Record / graduation**
At last, the recording. At a comfortable tempo, record two or three laps of the 12 bars without stopping, and keep the best one as <mark>your first walking bass line</mark>. Leave both a 4-string and a 5-string take, and Month 1 is complete.

**Done when:** you can walk and record the full F blues 12-bar line at a comfortable swing-quarter tempo on both 4- and 5-string without stopping. — Monthly deliverable: a recording of your first 12-bar F blues walking bass. (M1 graduation!)

## ④ 팁 / 흔한 실수

- **You freeze the moment you hit record.** Hands stiffen in front of the mic. Forget you're recording and run it several times, relaxed, like practice.
- **You try to nail it in one take.** Don't obsess over the first take. Record several passes and pick the best.
- **You rush the turnaround.** It's easy to speed up in excitement near the end (bars 11 and 12). Warm the seams back up with the prep, then record.

See the four bridges used across the 12 bars (B, E, A, Gb) at a glance. These approach notes are the stars that linked the chords.

```json
{
  "id": "m1.w4.d4.bridges_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The four bridges (B, E, A, Gb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" },
    { "string": 2, "fret": 4, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **4-string.** B (3rd string, fret 2), E (2nd string, fret 2), A (3rd string, open), Gb (2nd string, fret 4) — the four bridges.

```json
{
  "id": "m1.w4.d4.bridges_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The four bridges (B, E, A, Gb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 3, "fret": 0, "label": "A", "role": "passing" },
    { "string": 2, "fret": 4, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

- **Give yourself big credit for the month.** You started with a single root, walked with chord tones, aimed at the next chord with approach notes, and now you've walked the twelve-bar F blues in swing quarters and even left a recording. That's a huge step. From next month you'll widen this walk with more varied chord progressions and rhythms into real jazz and blues lines.
