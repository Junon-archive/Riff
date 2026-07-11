---
title: "Second half of the 12 bars — the C7 turnaround and a full run-through"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — Second half of the 12 bars, the C7 turnaround and a full run-through

## ① 이론/설명

Yesterday you walked the first eight bars. Today you walk the remaining four, the **second half, bars 9–12**, and complete the twelve — **| C7 | Bb7 | F7 | C7 |**. Here a new face appears: **C7**. A month ago even one chord was a handful, and now you're walking a third chord.

C7 is the **chord with the most tension** in the blues. It's a sound itching to turn back toward F. So the second half has one special job. The **F7→C7** in bars 11–12 is exactly the <mark>turnaround</mark> — the revolving door that sends the end of the tune back to the top (bar 1, F7). When these four bars are smooth, the 12 bars cycle endlessly.

The walking rule is still the same. **Land on beat 1, bridge on beat 4.** Bar 9's C7 aims at the next Bb with beat-4 **B**, bar 10's Bb7 aims at F with beat-4 **E**. Bar 11's F7 aims at the next C with beat-4 **B**, and the final bar 12 C7 lays <mark>a bridge to the very first F</mark> with beat-4 **Gb** to start the tune again. Today you'll learn this second half, then link it to yesterday's first half for a **12-bar full run-through**.

First, see the chord tones of today's new chord, **C7**, on the fretboard.

```json
{
  "id": "m1.w4.d3.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** C7's R (3rd string, fret 3), 3 (2nd string, fret 2), 5 (2nd string, fret 5), and b7 (1st string, fret 3).

```json
{
  "id": "m1.w4.d3.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now walk the **second half, bars 9–12**. It's C7-Bb7-F7-C7. Walk each bar with R-3-5, place a bridge on beat 4, and let the last bar get ready to return to F. Check by ear <mark>whether the turnaround leads back to the top</mark>. Every example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m1.w4.d3.turnaround_4",
  "type": "tab",
  "meta": { "title": "F blues second half (bars 9-12) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 80, 4-string.** Beat-4 B in bar 9 bridges to Bb, beat-4 E in bar 10 to F, beat-4 B in bar 11 to C. Bar 12's beat-4 Gb (2nd string, fret 4) is the bridge back to the very first F.

```json
{
  "id": "m1.w4.d3.turnaround_5",
  "type": "tab",
  "meta": { "title": "F blues second half (bars 9-12) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. Keep the low B covered.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's first eight bars once at BPM 72. Bring the 12-bar flow back to your fingertips.

**10–20 min · Brain training**
With the prep below, take just the **second half, bars 9–12**, at a slow **BPM 70**. Check that <mark>the C7 spot and the turnaround</mark> are smooth.

```json
{
  "id": "m1.w4.d3.turnaround_prep_4",
  "type": "tab",
  "meta": { "title": "Second half chunk (bars 9-12), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 70, 4-string.** Bars 9–12 only, slow. Feel the pull of the bar 11→12 (F7→C7) turnaround returning to bar 1.

```json
{
  "id": "m1.w4.d3.turnaround_prep_5",
  "type": "tab",
  "meta": { "title": "Second half chunk (bars 9-12), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
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

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play (full run-through)**
Now link yesterday's first half (bars 1–8) with today's second half (bars 9–12) and walk **all 12 bars from start to finish** at BPM 80. Check that <mark>the turnaround returns naturally to bar 1</mark>. Fix just the bars that trip you up slowly, then link them back in. Learn it on 4-string, then confirm on 5-string.

**40–50 min · Record / feedback**
Record one lap of the 12-bar run-through and listen for whether the second-half C7 spot and the turnaround feel natural. Tomorrow you'll walk these 12 bars to completion and record them. Note today's reached BPM.

**Done when:** you can walk the whole F blues 12 bars from start to finish, linking the first and second halves and including the C7 turnaround, at BPM 80 in swing quarters, one lap on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **You can't find the C7 spot.** The C7 root is just two frets above the Bb root (3rd string, fret 1), at the 3rd string, fret 3. Think of it as sitting right next to Bb and your hand won't wander.
- **You rush the turnaround.** When the end of the 12 bars comes into view, it's easy to speed up in excitement. In the last two bars (11 and 12) especially, keep the four beats even and place the bridges (B, Gb) deliberately.

Once the three landings F, Bb, and C are solid, the whole 12 bars won't wobble. See the three roots at a glance.

```json
{
  "id": "m1.w4.d3.three_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F, Bb, C — the three landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
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
  "id": "m1.w4.d3.three_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F, Bb, C — the three landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can also grab a lower root on the low B.

- **Now the 12 bars are all connected.** The path that was half-finished yesterday is one tune today. All that's left is tomorrow: walking these 12 bars at a comfortable tempo and keeping it as a recording. A month of walking is about to bear fruit.
