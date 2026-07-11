---
title: "Swing quarter-note feel — even, forward-moving steps"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — Swing quarter notes, even and forward-moving

## ① 이론/설명

At last, the final week of Month 1. Think back to your very first day a month ago. Back then even landing a single **root** took focus, and now you walk with chord tones and aim at the next chord with approach notes. This week we gather it all and <mark>walk the whole 12-bar F blues from start to finish</mark>. That first step is today's topic, the **swing quarter-note feel**.

The heart of walking is the **quarter note**. Four to a bar, one note per beat, stepping steadily. But jazz and blues quarters aren't ruler-even lengths — they carry a slight **swing**. The front beat a touch longer, the back beat a touch shorter, like a walker with a gentle bounce. Our score is written straight, with just a **swing** instruction on top. Don't over-roll it like triplets; <mark>just riding the groove comfortably</mark> is plenty.

The two things that matter most in swing quarters are **evenness** and **forward drive**. The four beats must stay equal in size so the walk doesn't wobble, and each beat should feel like it pushes toward the next so the steps come alive. Today we glue only this feel into your hands over a single F7 chord. Climb up with **R-3-5-b7** and come back down, making four beats that press forward as one. Once this settles into your body, walking 12 bars over the next three days is only a matter of time.

First, see F7's four chord tones on the fretboard — **R, 3, 5, and b7**.

```json
{
  "id": "m1.w4.d1.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** F7's R (4th string, fret 1), 3 (4th string, fret 5), 5 (3rd string, fret 3), and b7 (3rd string, fret 6).

```json
{
  "id": "m1.w4.d1.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now walk that swing quarter over a single F7. Climb with **R-3-5-b7**, come down with **5-3-R**, and place the approach note **E** on the last beat 4 to lead back to F. <mark>Check by ear that all four beats roll evenly, pushing forward</mark>. Every example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m1.w4.d1.swing_walk_f7_4",
  "type": "tab",
  "meta": { "title": "F7 swing quarter-note walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Bar 1 climbs F7's chord tones, bar 2 comes down and aims at F with beat-4 E (2nd string, fret 2). Keep all four beats steadily even.

```json
{
  "id": "m1.w4.d1.swing_walk_f7_5",
  "type": "tab",
  "meta": { "title": "F7 swing quarter-note walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. Keep the low B covered.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk Week 3's approach-note line once at BPM 72. Bring the walking feel back to your fingertips.

**10–20 min · Brain training**
With the prep below, place F7's chord tones as slow swing quarters at **BPM 60**. Tap the beat with your foot and feel <mark>whether all four beats are the same size</mark>.

```json
{
  "id": "m1.w4.d1.swing_prep_4",
  "type": "tab",
  "meta": { "title": "Even swing quarters on F7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** F7's chord tones, one per beat. Don't rush — place the four beats ruler-even.

```json
{
  "id": "m1.w4.d1.swing_prep_5",
  "type": "tab",
  "meta": { "title": "Even swing quarters on F7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **swing walk** above as a two-bar cycle at **BPM 80**. Check that <mark>every beat carries a forward push</mark>. Learn it on 4-string, then confirm on 5-string.

**40–50 min · Record / feedback**
Record 30 seconds and listen for whether the four beats stay even and step forward like a walk. Jot down today's comfortable BPM — it's tomorrow's starting point for the 12 bars.

**Done when:** you can walk the F7 swing quarter-note line (R-3-5-b7 up and down) at BPM 80, even and forward-driving, on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **The back beat drags.** Fussing over the swing can stretch the back beat and slow the walk. Lock the front beat to the click and keep the back beat just gently attached.
- **You roll too hard.** Bouncing it like heavy triplets makes the walk stagger. A very slight swing is plenty.

Mapping F across two octaves makes the walk's ups and downs easier. See the low F together with the F an octave up.

```json
{
  "id": "m1.w4.d1.f_octave_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F root, two octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The low F (4th string, fret 1) and the F an octave up (2nd string, fret 3).

```json
{
  "id": "m1.w4.d1.f_octave_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F root, two octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can also reach a lower F on the low B.

- **Give yourself credit for a month of walking.** You started landing only roots, and now you walk chords in swing quarter notes. Once this feel settles, walking the 12 bars over the next three days follows naturally.
