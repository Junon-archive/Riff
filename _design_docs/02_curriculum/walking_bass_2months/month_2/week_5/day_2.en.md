---
title: "Linking Gm7 → C7 — from ii to V with an approach note"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Linking Gm7 → C7, from ii to V with an approach note

## ① 이론/설명

Yesterday you got the three chords' tones into your hands. Today you connect the first two of them, <mark>joining Gm7 and C7 into one</mark>. Just listing chord tones makes the notes sound choppy, cut off one from the next. To make the walk flow, you have to lay a **bridge** between chords, and that bridge is the **approach note**.

An approach note is the note **right next to the next chord's root**. To cross over to C7, place the note a half-step above C — **Db** (or the half-step below, B) — on the last beat 4 of the Gm7 bar. Then beat 4's Db gets pulled into the next bar's beat-1 C as if it <mark>slid a half-step</mark>. That half-step pull is your "bridge across to V."

The rule is the same as last month — **beat 1 lands, beat 4 bridges.** Fill beats 1, 2, and 3 of the Gm7 bar with chord tones (R·b3·5), and place the approach note only on the last beat 4 to aim at C. The approach note doesn't have to be a chord tone — <mark>it's just one beat, a stepping stone to the next chord</mark>. Today, focus on this single Gm7→C7 seam and glue the feel of crossing from ii to V into your hands.

First, see the two bridges toward C — the half-step above **Db** and the half-step below **B** — on the fretboard.

```json
{
  "id": "m2.w5.d2.approach_to_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to C (B below, Db above) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" }
  ]}
}
```

▶ **4-string.** The middle is C7's landing point C (3rd string, fret 3); the half-step below B (3rd string, fret 2) and half-step above Db (3rd string, fret 4) are the two bridges.

```json
{
  "id": "m2.w5.d2.approach_to_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to C (B below, Db above) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now walk one bar of Gm7 and cross to the next bar's **C7** with the beat-4 approach note **Db**. Check by ear whether beat 4's Db <mark>slides a half-step into C</mark>. Every example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_4",
  "type": "tab",
  "meta": { "title": "Gm7 to C7 with approach — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Bar 1 walks Gm7 (G-Bb-D) and lays a bridge with beat-4 Db (3rd string, fret 4), landing a half-step onto C7's C in bar 2.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_5",
  "type": "tab",
  "meta": { "title": "Gm7 to C7 with approach — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. Keep the low B covered.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's Gm7·C7 arpeggio once at BPM 72 to bring both chords' tones back to your fingertips.

**10–20 min · Brain training**
With the prep below, press the Gm7→C7 seam as slow swing quarters at **BPM 60**. Check by sound <mark>whether beat-4 Db attaches a half-step to the next beat-1 C</mark>.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_slow_4",
  "type": "tab",
  "meta": { "title": "Gm7 to C7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** From beat-4 Db to the next beat-1 C, match by hand and ear whether the single half-step connects.

```json
{
  "id": "m2.w5.d2.gm7_to_c7_slow_5",
  "type": "tab",
  "meta": { "title": "Gm7 to C7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Repeat the **seam** above as a two-bar cycle at BPM 80. Watch <mark>whether the Gm7 walk crosses naturally to C at beat-4 Db</mark>. Learn it on 4-string, then confirm on 5-string.

**40–50 min · Record / feedback**
Record 30 seconds and listen for whether the two-bar seam is smooth. If the beat-4 approach note feels like it announces the next chord, you've got it.

**Done when:** you can walk one bar of Gm7 in chord tones and land a half-step onto C7's root with the beat-4 approach note Db — the ii→V seam — in swing quarters on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **You place the approach note too early.** The approach note is only beat 4, the very last beat. Using approach notes on beats 2 and 3 blurs the chord's sound. Keep beats 1, 2, and 3 as chord tones and only beat 4 as the bridge.
- **You land late off the bridge.** If your hand hesitates when moving from beat-4 Db to the next C, the beat drags. It's a single half-step, so spot the next C's position with your eyes ahead of time.

Look at the last three steps — from Gm7's 5th D down through the approach note Db to C — at a glance. It's a path that slides a half-step at a time.

```json
{
  "id": "m2.w5.d2.bridge_d_db_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "D to Db to C, the last three steps — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 5, "label": "D", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** Gm7's 5th D (3rd string, fret 5) → approach note Db (3rd string, fret 4) → C7's C (3rd string, fret 3), a bridge coming down a half-step at a time.

```json
{
  "id": "m2.w5.d2.bridge_d_db_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "D to Db to C, the last three steps — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 5, "label": "D", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

- **Give yourself credit for one step forward.** Today you joined two chords into one. All that's left is the last bridge, from C7 home to Fmaj7. Tomorrow you'll add that V→I resolution and carry ii-V-I to completion.
