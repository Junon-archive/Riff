---
title: "Connecting Dm7-G7-Cmaj7 in one region — minimal finger movement"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Tie the hand with root-string crossing, connect with guide tones

## ① Theory

Yesterday you saw the ii–V–I concept. Today you actually connect **Dm7 (5th) → G7 (6th) → Cmaj7 (5th)** in one fret region (frets 3–7) with <mark>minimal hand movement</mark>. Focus on two things.

**① Root-string crossing.** Dm7's root is on the 5th string, G7's on the 6th, Cmaj7's back on the 5th. Alternating 6th/5th-string chords like this <mark>keeps your hand off the neck-running</mark>.

**② Guide tones move a half step.** Yesterday on the 3rd string, 7th→3rd→7th barely moved (5→4→4). Today, see **<mark>another guide-tone line</mark>.** On the 2nd string, Dm7's 3rd (F) → G7's 7th (F) → Cmaj7's 3rd (E): **frets 6→6→5.** F stays, then drops a half step to E. Two guide-tone lines (3rd & 2nd strings) sliding almost in place at once — that's the reality of voice leading. Isn't that something? Three whole chords change, yet <mark>the notes singing on top stay nearly glued in place</mark>. Get this feel into your hands and any progression turns smooth.

```json
{
  "id": "m1.w3.d2.guide_tone_line2",
  "type": "tab",
  "meta": { "title": "Guide-tone line #2 (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "Dm7-b3(F)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "G7-b7(F)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 2, "fret": 5, "duration": "whole", "label": "Cmaj7-3(E)", "role": "target", "highlight": true } ]}
  ]}
}
```

## ② Visuals

The middle chord, **G7 (V, 6th-string root)** — <mark>the bridge connecting the ii and the I</mark>. Green = guide tones (3rd & 7th).

```json
{
  "id": "m1.w3.d2.g7_pivot",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 (V) — pivot, 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**Example 1 — the second guide-tone line (2nd string).** Dm7's 3rd (F) → G7's 7th (F) → Cmaj7's 3rd (E). 2nd string 6→6→5. F stays, then only a half step to E at the end.

```json
{
  "id": "m1.w3.d2.guide_tone_line2",
  "type": "tab",
  "meta": { "title": "Guide-tone line #2 (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "Dm7-b3(F)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "G7-b7(F)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 2, "fret": 5, "duration": "whole", "label": "Cmaj7-3(E)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66.** 2nd string 6→6→5. The common tone F stays across Dm7 and G7, then a half step to E on the I. "Barely moves," once more. Repeat 4×.

**Example 2 — root + guide-tone comp.** In each chord, fret the root then the guide tone. The root travels 5·6·5, but feel with your hand that the **guide tone (3rd string) stays nearly in place at 5→4→4.**

```json
{
  "id": "m1.w3.d2.root_guide_comp",
  "type": "tab",
  "meta": { "title": "Root + guide-tone comp (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 74.** Alternate the root (5·6·5) and the 3rd-string guide tone (5·4·4). Confirm the guide tone barely moves and repeat 4×. Then strum the whole chords.

**Example 3 — full-chord comping.** Same rhythm as Example 2, but now each hit rings the whole chord for that bar (Dm7 → G7 → Cmaj7) instead of just the root.

```json
{
  "id": "m1.w3.d2.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
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
    ]}
  ]}
}
```

▶ **BPM 74.** Same rhythm as Example 2, now with the whole chord. Once root comping feels natural, move on to this.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
Play Dm7 → G7 → Cmaj7 in order in one region. <mark>Say the root string (5·6·5) aloud each time</mark>.

**10–20 min · Brain training (today's target = the two guide-tone lines)**
Fret both **Example 1** (2nd string 6→6→5) and yesterday's 3rd string (5→4→4). <mark>Watch both lines slide almost in place at once</mark>.

**20–40 min · Real comping (Example 2 / 70–80 BPM)**
**Repeat Example 2 at BPM 74 4×.** <mark>Feel with your hand that the root travels but the guide tone stays close</mark>. Then comp the three whole chords smoothly connected (Example 3). If your hand leaves the region, it's a fail.

**40–50 min · Record & reflect (recommended)**
Record 30 seconds of ii–V–I. Check: <mark>is hand jump minimal at the changes</mark>, and do the guide tones connect smoothly?

**Done when:** you can connect Dm7-G7-Cmaj7 in one fret 3–7 region with no hand jump, and fret both guide-tone lines.

## ④ Tips / common mistakes

- **Chasing only the root.** The root actually moves a lot (5·6·5). What ties your hand is the guide tones. Put your eyes on the barely-moving 3rd- and 2nd-string notes.
- **Leaving the region.** Dm7 at fret 5, G7 at fret 3 dips slightly, but that's all. A big neck jump means you chose the wrong root string.
- **Sound breaking at the change.** Moving one finger at a time, minimally, keeps the sound connected. Don't lift the whole hand.
- **6th mute (5th-string chords).** Always kill the 6th on Dm7/Cmaj7.
