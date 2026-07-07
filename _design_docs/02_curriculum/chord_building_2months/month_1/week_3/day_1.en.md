---
title: "Introducing ii–V–I — pop's heart, and root-string crossing"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Why do chords change without going far?

## ① Theory

Half the songs in the world stand on one chord progression: **ii–V–I.** In C that's **Dm7 → G7 → Cmaj7.** Pop, jazz, ballads, city-pop… this three-chord cluster repeats everywhere. So if your hands can connect it smoothly, you can accompany half the songs out there.

The problem is that beginners **jump** their hand across the neck to play it — over there for Dm7, here for G7, over there again for Cmaj7. The changes stutter. Pros don't. Their secret is twofold:

1. **They choose the root string.** By **crossing** the 6th-string-root and 5th-string-root chords from the last two weeks, they tie the hand to one fret region. E.g., Dm7 (5th) → G7 (6th) → Cmaj7 (5th). The root travels across the 5th, 6th, and 5th strings, but the hand stays nearly in place.
2. **The guide tones (3rd & 7th) move only a half step.** When chords change, only the 3rd and 7th slide the shortest distance. Today we plant these two feelings as seeds.

## ② Visuals

The three ii–V–I chords. The green marks each chord's **guide tones (3rd & 7th)** — the notes that hold the character and move a half step into the next chord.

```json
{
  "id": "m1.w3.d1.dm7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d1.g7",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d1.cmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**Example 1 — the guide-tone line (barely moves).** On the 3rd string, connect Dm7's 7th (C) → G7's 3rd (B) → Cmaj7's 7th (B). Fret 5 → 4 → 4 — one fret and done. This is voice leading.

```json
{
  "id": "m1.w3.d1.guide_tone_line",
  "type": "tab",
  "meta": { "title": "Guide-tone line (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66.** One note per bar. 3rd string 5→4→4. Catch by ear that "the chords change, but this note barely moves." Repeat 4×.

**Example 2 — ii–V–I comp.** Strum each chord one bar at a time. The root travels the **5th (Dm7) → 6th (G7) → 5th (Cmaj7)** string, but your hand stays in the fret 3–7 region.

```json
{
  "id": "m1.w3.d1.ii_v_i_comp",
  "type": "tab",
  "meta": { "title": "ii-V-I comp (roots) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72.** Strum all of Dm7 → G7 → Cmaj7, one per bar. Stay aware of only the root string (5·6·5) and check your hand isn't running up the neck. Repeat 4×.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Fret each of Dm7 · G7 · Cmaj7 and check the sound — especially the muted 6th on Dm7/Cmaj7 and all six strings on G7.

**10–20 min · Brain training (today's target = guide tones)**
Fret **Example 1** and follow the 3rd string 5→4→4 by eye. In each chord, fret the 3rd and 7th (green) to confirm where they are. "The chords change, but the guide tones stay close."

**20–40 min · Real comping (Example 2 / 66–76 BPM)**
**Repeat Example 2 at BPM 72 4×.** Stay aware the root string shifts 5·6·5, but keep your hand tied to one region. Once comfortable, strum the whole chords smoothly connected.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of the ii–V–I cycle. Check: did your hand **jump unnecessarily** at the changes, and did the change timing stay clean?

**Done when:** you can hold Dm7·G7·Cmaj7 in one region and cycle ii–V–I slowly while fretting where the guide tones (3rd & 7th) are.

## ④ Tips / common mistakes

- **Running up the neck.** Without choosing root strings, your hand jumps around. Decide "which string is this chord's root?" first and your hand stays in one region.
- **Ignoring the guide tones.** The 3rd and 7th are the chord's identity and its connecting line. Don't watch only the root — follow the guide tones' motion.
- **Cranking speed first.** ii–V–I is all about change accuracy. Smooth at 66 beats stuttering at 100.
- **The 6th on Dm7/Cmaj7.** These are 5th-string chords, so the 6th must be muted.
