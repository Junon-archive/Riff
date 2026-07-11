---
title: "ii-V-I chord tones — Gm7, C7, Fmaj7, the skeleton of three chords"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — ii-V-I chord tones, the skeleton of Gm7, C7, Fmaj7

## ① 이론/설명

At last, Month 2 — the first week of sailing the changes. Last month you learned to walk within a single chord; this week you walk a road where the chords change. That road is called **ii-V-I**, the most common and most important progression in jazz. In the key of F, that road is <mark>Gm7 → C7 → Fmaj7</mark>. It's a journey that sets out from ii (Gm7), passes through V (C7), and comes home to I (Fmaj7).

Today we start by getting these three chords' **chord tones** into your hands. Chord tones are the skeleton notes that build each chord. Gm7 is R·b3·5·b7 (G·Bb·D·F), C7 is R·3·5·b7 (C·E·G·Bb), and Fmaj7 is R·3·5·7 (F·A·C·E). Remember just one thing — <mark>the first note of every chord lands on the root (R)</mark>. The **root** is where each step starts and the home address of each chord.

The key that tells the three chords apart is the **3rd and the 7th**. Gm7 has a minor 3rd (b3), so it's dark; C7 has a major 3rd (3) with a minor 7th (b7), so it holds tension; Fmaj7 has a major 3rd with a major 7th (7), so it opens up bright. This <mark>color spreading from b3 to 3 and on to 7</mark> is the map of ii-V-I heading home. Today we press each chord's tones one by one, carving their sound and position into your ears and hands.

First, see the starting point of this week's three chords, Gm7's chord tones, on the fretboard — **R·b3·5·b7**.

```json
{
  "id": "m2.w5.d1.gm7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Gm7's R (4th string, fret 3), b3 (3rd string, fret 1), 5 (3rd string, fret 5), b7 (2nd string, fret 3).

```json
{
  "id": "m2.w5.d1.gm7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Once Gm7's sound is in your hands, look at **C7** and **Fmaj7**'s chord tones side by side too. Then walk the three chords' tones in order, <mark>climbing one note at a time from low to high</mark>. Every example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w5.d1.c7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** C7's R (3rd string, fret 3), 3 (2nd string, fret 2), 5 (2nd string, fret 5), b7 (1st string, fret 3).

```json
{
  "id": "m2.w5.d1.c7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

```json
{
  "id": "m2.w5.d1.fmaj7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Fmaj7's R (4th string, fret 1), 3 (4th string, fret 5), 5 (3rd string, fret 3), 7 (3rd string, fret 7).

```json
{
  "id": "m2.w5.d1.fmaj7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

Now here's an arpeggio that climbs each chord's tones, one bar per chord. The first beat of every bar is that chord's root.

```json
{
  "id": "m2.w5.d1.three_chord_arp_4",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Bar 1 Gm7 (G-Bb-D-F), bar 2 C7 (C-E-G-Bb), bar 3 Fmaj7 (F-A-C-E). Beat 1 of every bar lands on the root.

```json
{
  "id": "m2.w5.d1.three_chord_arp_5",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. Keep the low B covered.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk last week's F blues once at BPM 72 to bring the swing quarter-note feel back to your fingertips.

**10–20 min · Brain training**
With the prep below, press each chord's tones as slow swing quarters at **BPM 60**. Check by sound <mark>whether beat 1 of each bar is the root</mark>.

```json
{
  "id": "m2.w5.d1.three_chord_arp_slow_4",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 arpeggio, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Each chord's tones, one per beat, slowly. When the chord changes, grab the root first.

```json
{
  "id": "m2.w5.d1.three_chord_arp_slow_5",
  "type": "tab",
  "meta": { "title": "Gm7-C7-Fmaj7 arpeggio, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **arpeggio** above as a three-bar cycle at BPM 80. Notice whether <mark>the sound differences between Gm7, C7, and Fmaj7</mark> reach your ear. Learn it on 4-string, then confirm on 5-string.

**40–50 min · Record / feedback**
Record 30 seconds and listen for whether each chord's root lands clearly. Jot down which chord feels most unfamiliar — it becomes tomorrow's starting point for connecting them.

**Done when:** you can press the chord tones of Gm7, C7, and Fmaj7, landing beat 1 of each bar on the root, in swing quarters on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **You miss the moment the chord changes.** If you don't secure the root first when a bar turns over, the walk falls apart. Decide that beat 1 of every new bar always lands on the root.
- **You confuse b3 and 3.** Gm7's b3 (Bb) and the major 3rd of C7 and Fmaj7 have completely different colors. Press slowly and tell the dark 3rd from the bright 3rd by ear.

Look at the three chords' home addresses — their three roots — at a glance. These three landing points are the pillars of this week's walk.

```json
{
  "id": "m2.w5.d1.three_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7-C7-Fmaj7 three roots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** Gm7's G (4th string, fret 3), C7's C (3rd string, fret 3), Fmaj7's F (4th string, fret 1).

```json
{
  "id": "m2.w5.d1.three_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7-C7-Fmaj7 three roots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can also gauge a lower root on the low B.

- **Give yourself credit on day one.** Just getting the three chords' tones into your hands already begins half the ii-V-I voyage. Tomorrow you'll link these chords with approach notes and make it truly feel like "walking."
