---
title: "Linking C7 → Fmaj7 — from V to I, the resolution that arrives home"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — Linking C7 → Fmaj7, from V to I, the resolution that arrives home

## ① 이론/설명

Yesterday you crossed from Gm7 to C7. Today comes the last bridge, <mark>the V→I resolution that returns from C7 home to Fmaj7</mark>. The most dramatic moment in ii-V-I is exactly this V→I. It's the strongest "arriving home" feeling in music — **C7**, full of tension, releasing into a bright, open **Fmaj7**.

On beat 4 of the C7 bar, place **E**, the half-step below F. E is a note that aches to rise up to F — the so-called **leading tone**. When beat-4 E <mark>gets pulled up a half-step</mark> to the next beat-1 F, the ear feels "we've finally arrived." If the past two days' approach notes came from a half-step above (Db→C), today's bridge lifts up from a half-step below (E→F).

Once home, walk comfortably with **Fmaj7's chord tones** (R·3·5·7). The major 7th **E** (7) especially is the color that lights Fmaj7 up the brightest. It's fun that <mark>the same E was a bridge aiming at the next chord in C7, then becomes the color that lights the home in Fmaj7</mark>. Today, focus on this single C7→Fmaj7 resolution and carve the feel of arriving from V to I into your hands.

First, see the leading tones toward F — the half-step below **E** and the half-step above **Gb** — on the fretboard.

```json
{
  "id": "m2.w5.d3.approach_to_f_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to F (E below, Gb above) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **4-string.** The middle is Fmaj7's landing point F (4th string, fret 1); the leading tone a half-step below E (4th string, open) and the half-step above Gb (4th string, fret 2) are the two bridges.

```json
{
  "id": "m2.w5.d3.approach_to_f_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approaches to F (E below, Gb above) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 0, "label": "E", "role": "passing" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "Gb", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. Keep the low B covered.

## ② 시각 자료

Now walk one bar of C7 and arrive home at the next bar's **Fmaj7** with the beat-4 leading tone **E**. Check by ear whether beat-4 E <mark>resolves up a half-step to F</mark>. Every example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_4",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7 resolution — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Bar 1 walks C7 (C-G-Bb) and, with beat-4 leading tone E (3rd string, fret 7), resolves up a half-step to Fmaj7's F in bar 2.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_5",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7 resolution — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
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
Walk yesterday's Gm7→C7 seam once at BPM 72 to bring the approach-note feel back to your fingertips.

**10–20 min · Brain training**
With the prep below, press the C7→Fmaj7 resolution as slow swing quarters at **BPM 60**. Check by sound <mark>whether beat-4 E rises a half-step and resolves to the next beat-1 F</mark>.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_slow_4",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** From beat-4 E to the next beat-1 F, match by hand and ear the resolution that lifts up a half-step.

```json
{
  "id": "m2.w5.d3.c7_to_fmaj7_slow_5",
  "type": "tab",
  "meta": { "title": "C7 to Fmaj7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
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
Repeat the **resolution** above as a two-bar cycle at BPM 80. Watch <mark>whether C7's tension releases comfortably into Fmaj7 through beat-4 E</mark>. Learn it on 4-string, then confirm on 5-string.

**40–50 min · Record / feedback**
Record 30 seconds and listen for whether you hear the "arriving home" feeling from V to I. If the final F settles down solidly, you've got it.

**Done when:** you can walk one bar of C7 in chord tones and resolve up a half-step onto Fmaj7's root with the beat-4 leading tone E — the V→I seam — in swing quarters on both 4- and 5-string.

## ④ 팁 / 흔한 실수

- **Even after arriving home, the tension won't release.** When you press the Fmaj7 beat-1 F, ease off a little and settle comfortably. The arrival chord is a resting point, so land it softly rather than snapping it hard.
- **You confuse the leading tone E with a chord tone.** E is a bridge (approach note) in C7 but the major 7th (chord tone) in Fmaj7 — different roles. Even at the same spot, rename it in your mind depending on which chord it's over.

Look at the home you arrived at, Fmaj7's chord tones, at a glance. These four notes are where the ii-V-I journey rests easy.

```json
{
  "id": "m2.w5.d3.fmaj7_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 home — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Fmaj7's R (4th string, fret 1), 3 (4th string, fret 5), 5 (3rd string, fret 3), 7 (3rd string, fret 7) — the home of arrival.

```json
{
  "id": "m2.w5.d3.fmaj7_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Fmaj7 home — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same positions as the 4-string. You can also gauge a lower F on the low B.

- **Give yourself credit for another step forward.** Today you got the strongest resolution, arriving from V to I, into your hands. Now all three pieces (chord tones, ii→V, V→I) are ready. Tomorrow you'll link them into one and complete the ii-V-I walk.
