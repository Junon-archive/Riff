---
title: "Putting an approach on beat 4 — a walking line where the approach note lives"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — Putting an approach on beat 4, completing the walking line

## ① Theory

For two days you learned the three kinds of approach note — chromatic, scale, dominant. Today you finally put those approach notes <mark>into an actual walking line</mark>. Until now you practiced one approach note in isolation, but from today you walk with chord tones and then **place an approach note on beat 4 to bridge to the next chord**.

The rule is simple. Fill one measure like this — **beat 1 root, beats 2 and 3 chord tones, beat 4 approach note**. The first three beats stand firmly on the current chord, and the last beat reaches out to the next chord. Then the next measure's beat 1 <mark>lands as if it had been waiting</mark>. This is the complete form of one walking measure.

Today's line is two measures, F7→Bb7. Measure 1 steps F7's R-3-5 and bridges on beat 4 with **A** (a half step below Bb). Measure 2 steps Bb7's R-3-5 and bridges on beat 4 with **E** (a half step below F), returning to the first F. The approach notes become a loop that <mark>links the two chords without a break</mark>.

When you choose an approach note, think of just one thing — **the next chord's root**. Put one of these on beat 4: a half step above or below, a whole step above, or a fifth above that root. Today start with the **chromatic** you're used to. Once it's comfortable, you can swap in scale or dominant and the line still lives.

First look at today's line as a map — the two landings **F and Bb**, and the two approach notes before them, B and E.

```json
{
  "id": "m1.w3.d3.approach_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Walk targets & bridges (F, Bb) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4-string.** The two landings F (4th string, 1st fret) and Bb (3rd string, 1st fret), plus the approach notes B (3rd string, 2nd fret) and E (2nd string, 2nd fret).

```json
{
  "id": "m1.w3.d3.approach_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Walk targets & bridges (F, Bb) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

## ② Visuals

Now here's today's walking line. Walk each measure in the order **beat 1 root → beats 2·3 chord tones → beat 4 approach note**. Play it feeling <mark>whether the beat 4 approach note calls the next measure's beat 1</mark>. Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w3.d3.approach_line_4",
  "type": "tab",
  "meta": { "title": "Walking line with approaches (F7-Bb7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** Measure 1 beat 4 A aims at Bb and measure 2 beat 4 E aims at F, each from a half step below. Every beat 1 lands on the root.

```json
{
  "id": "m1.w3.d3.approach_line_5",
  "type": "tab",
  "meta": { "title": "Walking line with approaches (F7-Bb7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk yesterday's scale and dominant approaches once each at BPM 72. Bring the feel of the three approach notes back to your fingertips.

**10–20 min · Brain training**
With the prep example below, repeat just **root → approach note**. Learn that one step — where each measure's beat 4 approach calls the next root — <mark>very slowly</mark>.

```json
{
  "id": "m1.w3.d3.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Root to approach drill, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 66, 4-string.** One step from each measure's root to its approach note (A, E). Feel the pull as the approach calls the next measure's root.

```json
{
  "id": "m1.w3.d3.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Root to approach drill, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "half", "label": "A", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 66, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play**
Walk the line above at **BPM 76** as a two-measure loop. Check <mark>whether a bridge is placed to the next chord on every beat 4</mark>. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether the beat 1 landing and the beat 4 approach note are clearly distinct. Try swapping the approach note from A to B (a half step above) and note the difference in feel.

**Done when:** you can loop the two measures of F7→Bb7 in the order beat 1 root, beats 2·3 chord tones, beat 4 approach note, and produce the feel of the approach note calling the next chord on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Your hand stops on beat 4.** It's easy to break when moving from the approach note to the next root. While beat 4 rings, move your left hand ahead to the next root.
- **You drag the approach note long.** The beat 4 approach note is a quarter note, same as the others. If it alone gets long, the beat wobbles.

The line's backbone is the two landings. If just the **F** and **Bb** on the fretboard below are solid, the rest follows.

```json
{
  "id": "m1.w3.d3.roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The two measures' landings — F (4th string, 1st fret) and Bb (3rd string, 1st fret).

```json
{
  "id": "m1.w3.d3.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. You can drop to the low B for lower roots too.

- **Try swapping the approach note.** Today's line is chromatic (a half step below), but you can put a scale or dominant on the same beat 4. The approach note is an interchangeable part. Tomorrow you'll polish this line into this week's product.
