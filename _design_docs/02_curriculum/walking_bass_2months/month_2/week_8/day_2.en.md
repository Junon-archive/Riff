---
title: "Walking the changes — landing on chord tones, bridging with approach notes"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — Walking the changes (chord tones + approach)

## ① 이론/설명

Yesterday you got the progression's roots into your hands; today you truly walk over them. The philosophy of walking is always one sentence — <mark>land on the chord on every downbeat, and build a bridge to the next chord on the last beat</mark>. On beat 1 set the chord clearly with the **root**, on beats 2 and 3 fill the chord's color with **chord tones** (3rd, 5th, 7th), and on beat 4 step a half step toward the next bar's root with an **approach note**. The roles of these four beats are the grammar of one walking bar.

Let's match it to the progression. Bar 1 **Gm7** steps from root G through b3 (Bb) and the 5th (D), then approaches C7's root C with B on beat 4. Bar 2 **C7** passes from root C through the 3rd (E) and 5th (G), then approaches Fmaj7's root F a half step away with F# on beat 4. Bar 3 **Fmaj7** steps from root F through the 3rd (A) and 5th (C), and again approaches bar 4's C7 with B. Then the bar-4 C7 turnaround passes through b7 (Bb) and A and returns with F# to the root G of bar-1 Gm7. <mark>Chord tones are landings, approach notes are bridges</mark> — the two alternate to make the step.

The most important thing today is the **order**. First set each bar's beat-1 **chord-tone landing** without wobble, then build a bridge toward the next bar with the beat-4 approach note. However flashy an approach note looks, if the chord-tone skeleton isn't clear the step loses its way. Today, get the four-bar walking line fully into your hands and build <mark>the feel of walking smoothly over the changes</mark>.

First, look at where each chord's landing tones — root and 3rd — sit on the fretboard.

```json
{
  "id": "m2.w8.d2.landing_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I landing tones — root & 3rd (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The landing tones of ii-V-I. Gm7 has **G·b3**, C7 has **C·3**, Fmaj7 has **F·3** — the beat-1 root and the 3rd that sets its color.

```json
{
  "id": "m2.w8.d2.landing_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "ii-V-I landing tones — root & 3rd (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** Same spots as the 4-string. Back the landings more heavily with the low B string.

## ② 시각 자료

Now connect approach notes to those landing tones and walk a **four-bar walking line**. The flow of beat-1 chord tone → beat-4 approach note runs through all four bars. <mark>Even when the chord changes, the step never breaks and carries on.</mark> Each example comes in **both 4- and 5-string versions**.

```json
{
  "id": "m2.w8.d2.changes_walk_4",
  "type": "tab",
  "meta": { "title": "Walking the changes (Gm7-C7-Fmaj7-C7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 85, 4-string, swing quarters.** Bar 1 Gm7 (**R-b3-5-B**) → bar 2 C7 (**R-3-5-F#**) → bar 3 Fmaj7 (**R-3-5-B**) → bar 4 C7 (**R-b7-A-F#**). Land on a chord tone on every downbeat and build a bridge with the beat-4 approach note.

```json
{
  "id": "m2.w8.d2.changes_walk_5",
  "type": "tab",
  "meta": { "title": "Walking the changes (Gm7-C7-Fmaj7-C7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 85, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Back the low end more with the low B string.

## ③ 오늘의 연습 (50분 루틴)

**0–10 min · Warm-up**
Walk yesterday's whole-note progression once at BPM 72 to bring the loop back into your hands.

**10–20 min · Brain training**
Press the four-bar walk with the example below at a slow swing **BPM 60**. <mark>Check by ear that the beat-1 chord tone is clear and the beat-4 approach note lands exactly on the next root.</mark>

```json
{
  "id": "m2.w8.d2.changes_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Walking the changes, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** The four-bar walk, slowly. Carve the chord-tone landings and the approach-note spots into your hands one by one.

```json
{
  "id": "m2.w8.d2.changes_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Walking the changes, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "F#", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5-string.** Same notes and spots as the 4-string.

**20–40 min · Real play**
Repeat the **four-bar walk** above as a loop at BPM 85. Watch that <mark>the chord-tone skeleton doesn't wobble</mark>, and learn it on 4-string, then check on 5-string too.

**40–50 min · Review / record**
Record today's four-bar walk two or three times around without stopping, and keep the smoothest take. Keep both 4- and 5-string and today is done.

**Done when:** you can walk four bars over the Gm7-C7-Fmaj7-C7 progression with chord-tone landings and approach notes, cycling on both 4- and 5-string. — Today's deliverable: your first walking line over the changes.

## ④ 팁 / 흔한 실수

Keep the **approach-note** spots that lead into the next chord separately in your eye. B·F#·B·F# — these four approach notes build bridges between bar and bar.

```json
{
  "id": "m2.w8.d2.approach_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach notes into each chord (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 4, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "A", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" }
  ]}
}
```

▶ **4-string.** The approach notes that link the bars. B (→C), F# (→F), A·F# (→G) build a bridge to the next root at the end of each bar.

```json
{
  "id": "m2.w8.d2.approach_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach notes into each chord (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 4, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "A", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" }
  ]}
}
```

▶ **5-string.** Same spots as the 4-string. Back the low end more with the low B string.

- **You hold the approach note as long as a chord tone.** An approach note is a passing note that hands off to the next root, so step it briefly on beat 4 and move straight to beat 1 of the next bar. Hold it too long and the chord's color blurs.
- **You put in the approach note before the chord tone.** Keep the order — the beat-1 chord tone must stand first for the beat-4 approach note to act as a bridge. If the landing wobbles, the approach note loses its destination too.

Two months ago you held on with a single root when the chord changed; now you walk between them with chord tones and approach notes. Tomorrow you'll breathe into this walk with a ghost and eighth fill, and make the line sing.
