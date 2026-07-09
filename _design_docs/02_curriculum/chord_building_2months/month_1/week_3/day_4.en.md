---
title: "ii–V–I integration — cycling smoothly with no jumps"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — A ii–V–I that sings, spun in one region

## ① Theory

The week's finish line. Today isn't new learning — it's <mark>tying together everything you've learned</mark>. Get here and the ii–V–I is nearly yours. You gather three things at once.

- Use **<mark>root-string crossing (5·6·5)</mark>** to bind your hand to one region,
- feel the **<mark>guide tones (3rd & 7th)</mark>** move only a half step,
- and cycle the three chords **<mark>without jumping</mark>.**

Today you spin the ii–V–I as a 4-bar loop (Dm7 → G7 → Cmaj7 → back to Dm7). Most songs repeat this cluster, so burning it into your hands is where real accompaniment begins. The goal isn't speed — it's **<mark>smoothness of connection</mark>**: the sound doesn't cut off at the change, and the guide tones sing from one chord to the next.

## ② Visuals

This week's home, **Cmaj7 (I).** <mark>The tension built by ii–V resolves here</mark>. Green = guide tones (7th & 3rd).

```json
{
  "id": "m1.w3.d4.cmaj7_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 (I) — home", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — guide-tone loop (4 bars).** On the 3rd string, 5→4→4→5. It reaches Cmaj7 then returns to Dm7 — a cycle. Feel one note stay attached as it goes around.

```json
{
  "id": "m1.w3.d4.guide_tone_loop",
  "type": "tab",
  "meta": { "title": "Guide-tone loop (ii-V-I-ii) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 68.** 3rd string 5→4→4→5. As the loop turns, hear this guide tone sing from chord to chord. Repeat 4×.

**Example 2 — ii–V–I comp loop.** Root + guide tone cycling 4 bars (Dm7-G7-Cmaj7, last bar holds Cmaj7). Roots go 5·6·5·5; the guide tone (3rd string) stays nearly in place at 5·4·4·4.

```json
{
  "id": "m1.w3.d4.ii_v_i_loop",
  "type": "tab",
  "meta": { "title": "ii-V-I comp loop — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76, repeat 4×.** Spin the loop, feeling with your hand that the guide tone stays attached even as the root string travels. Enjoy the "arrived home" stability on the final Cmaj7.

**Example 3 — full-chord comping.** Same 4-bar loop as Example 2, but each bar rings the whole chord (Dm7 → G7 → Cmaj7 → Cmaj7) instead of just the root.

```json
{
  "id": "m1.w3.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp loop (ii-V-I-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 76.** Same loop as Example 2, now with the whole chord. Once the root + guide-tone comp feels natural, cycle this instead.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Spin the Dm7-G7-Cmaj7 loop very slowly (BPM 64), one lap at a time. <mark>Check only that your hand doesn't leave the region</mark>.

**10–20 min · Brain training (today's target = smooth connection)**
Play **Example 1's** guide-tone loop eyes-closed on the 3rd string, 5→4→4→5. <mark>Know in advance where this note goes at each change and fret it</mark>.

**20–40 min · Real comping (Example 2 loop / 72–82 BPM)**
Over a backing track (if you have one), spin **Example 2's loop at BPM 76** several times. <mark>Keep the sound unbroken at the change, fingers minimal</mark>. Once comfortable, spin the loop in D key too (last session).

**40–50 min · Record & reflect (recommended)**
Record two laps of the ii–V–I loop. Check: did the hand jump big at changes / did change timing blur / <mark>did the guide tone sing from chord to chord</mark>?

**Done when:** you can cycle ii–V–I smoothly in one region with no jumps, comping while aware of the guide tone's flow. (Week 3 complete!)

## ④ Tips / common mistakes

- **Lifting the whole hand at the change.** Keep common and near notes planted, move only the needed finger. The sound cuts far less.
- **Sloppy loop ending.** If the last Cmaj7 (home) is blurry, the cycle doesn't close. Make the arrival at the I clear.
- **Obsessing over speed.** The loop is all smoothness. Singing at 76 is closer to a pro than stuttering at 100.
- **Staying in one key.** If you have room, spin the loop in both C and D to cement the movable pattern.
