---
title: "Chord tones up and down — arpeggio walking"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — Chord tones up and down, walking through three chords

## ① Theory

So far you've only stepped chord tones from low to high. Today you add **going up and down** — coming back down the very path you climbed, **retracing your steps**. Walking doesn't move in only one direction. Going up and then <mark>coming back down to build a bridge into the next chord</mark> is the real walk. Knowing only how to go up is half of it; knowing how to come down too lets you connect anywhere.

The method is simple. On F7, climb **R-3-5-b7**, then take the top **b7** as the peak and come down in the order **b7-5-3-R**. You're just retracing the spots you pressed on the way up, so there's nothing new to memorize. The key here is <mark>turning direction smoothly at the peak b7</mark>. Notes tend to blur on the way down, so step just as clearly as you did going up.

Let's take one more step. **Arpeggio walking** — sweep one chord's chord tones in quarter notes, then move naturally into the next chord's chord tones. Today you'll walk in the order **F7 → Bb7 → C7**, one chord per measure, linking the arpeggios. When the chord changes, <mark>just start stepping again from that chord's root</mark>. This is the most basic skeleton of walking bass.

Sketch **F7's up-and-down path** in your eyes with the map below.

```json
{
  "id": "m1.w1.d3.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (up and down path) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Climb from the root F, turn direction at the b7 Eb, and come back down to R. You're making a round trip across the same four spots.

```json
{
  "id": "m1.w1.d3.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (up and down path) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

If you play **a 5-string**, this up-and-down is also the same as on a 4-string. Once comfortable, you can use the low B string to try an alternate line starting from a lower root. For today, focus on **an even round trip** and the links between chords.

## ② Visuals

Now learn it by sound. First play the **F7 up and down**, then practice a two-chord walk that moves **from F7 to Bb7**. <mark>The moment the chord changes</mark> is the most thrilling spot in walking. Every example comes in **both a 4-string and a 5-string version**.

First, **F7 up and down**. Climb R-3-5-b7, then come down b7-5-3-R.

```json
{
  "id": "m1.w1.d3.f7_updown_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72, 4-string.** The first measure climbs, the second comes down. Turn direction smoothly at the peak b7.

```json
{
  "id": "m1.w1.d3.f7_updown_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string. Rest the low B, and once comfortable, extend lower.

Next is a **two-chord walk, F7 → Bb7**. Walk each chord as an arpeggio, one measure each.

```json
{
  "id": "m1.w1.d3.f7_bb7_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4-string.** First measure F7, second measure Bb7. When the chord changes, start again from that chord's root.

```json
{
  "id": "m1.w1.d3.f7_bb7_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Run each of the three chord arpeggios you learned yesterday once, ascending, at BPM 70. Bring **the three homes' positions** back to your fingertips.

**10–20 min · Brain training**
Repeat the F7 up-and-down very slowly, getting **the turnaround at the peak b7** into your hand. The goal is <mark>coming down just as clearly as going up</mark>.

**20–40 min · Real play (today's product)**
Repeat the F7 → Bb7 → C7 arpeggio walk below at **BPM 72**. One chord per measure; when the chord changes, step again from the root to connect it naturally.

```json
{
  "id": "m1.w1.d3.three_chord_walk_4",
  "type": "tab",
  "meta": { "title": "F7-Bb7-C7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4-string.** Walk the three chords as arpeggios, one measure each. Keep it flowing so it doesn't break at the chord boundaries.

```json
{
  "id": "m1.w1.d3.three_chord_walk_5",
  "type": "tab",
  "meta": { "title": "F7-Bb7-C7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string. Rest the low B, and once comfortable, extend lower.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the seams are smooth** where the chord changes. If a spot breaks or drags, re-walk only that part slowly.

**Done when:** you can take F7·Bb7·C7's chord tones up and down in quarter notes, and walk the three-chord arpeggio (one measure each) without breaks at BPM 72.

## ④ Tips / Common mistakes

- **It blurs on the way down.** It's clear going up but the notes smear coming down. Practice the downhill on its own, slowly.

```json
{
  "id": "m1.w1.d3.f7_down_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio descending only — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **4-string.** This is the way down, in the order b7-5-3-R. Step each note just as clearly as you did going up.

```json
{
  "id": "m1.w1.d3.f7_down_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio descending only — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

- **The beat drags at the chord boundary.** If your hand is late the instant the chord changes, the groove collapses. Aim at the next root one beat before the change.
- **You rush the tempo.** If you push past 72 while the seams aren't smooth, everything wobbles. Smoothness comes first.
- **Neglecting low B (5-string).** If you brush B while moving up and down, the low end leaks. Always keep the unused B covered.
