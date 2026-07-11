---
title: "Approach-note walk F7↔Bb7 — Week 3 product"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — Approach-note walk F7↔Bb7, completing the week

## ① Theory

It's the last day of Week 3. This week you completely changed your walk with a single approach note — you learned three bridges (chromatic, scale, dominant) and yesterday put them into a line. Today you gather it all and make <mark>this week's product</mark>. It's the **approach-note walk F7↔Bb7**.

The finished line is two measures. Both measures follow the same rule — **beat 1 root, beats 2·3 chord tones, beat 4 chromatic approach note**. Measure 1 steps F7 and bridges on beat 4 with **B** (a half step above Bb); measure 2 steps Bb7 and bridges on beat 4 with **E** (a half step below F), returning to F.

The fun part is that the directions differ. Measure 1 comes down from a half step **above** and sits on Bb; measure 2 comes up from a half step **below** and sits on F. Above or below, the principle is the same — <mark>you aim at the next chord's root from a half step away</mark>. When these two measures keep cycling, the approach notes become a walk that links the two chords endlessly.

This line is the crystallization of everything you built all week. The power to walk with chord tones (Week 2) and the feel of bridging to the next chord (Week 3) live in one line. <mark>When the two measures cycle without a break at BPM 80</mark>, you are already walking a **real walk**.

First look at measure 1's F7 notes — R-3-5 and the beat 4 approach note **B**.

```json
{
  "id": "m1.w3.d4.bar1_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 1 — F7 with approach B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **4-string.** Measure 1's F7 R-3-5 (4th string 1st and 5th frets, 3rd string 3rd fret), plus the beat 4 approach note B (3rd string, 2nd fret).

```json
{
  "id": "m1.w3.d4.bar1_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 1 — F7 with approach B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

## ② Visuals

Now here's this week's product. First look at measure 2's Bb7 notes — R-3-5 and the beat 4 approach note **E** — then run the <mark>approach-note walk that links the two measures</mark> as the finished line. Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w3.d4.bar2_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 2 — Bb7 with approach E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **4-string.** Measure 2's Bb7 R-3-5 (3rd string 1st fret, 2nd string open and 3rd fret), plus the beat 4 approach note E (2nd string, 2nd fret).

```json
{
  "id": "m1.w3.d4.bar2_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Measure 2 — Bb7 with approach E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Now this week's product, the **approach-note walk F7↔Bb7**. Walk the two measures in swing quarters at **BPM 80**. <mark>Each measure's beat 4 bridges to the next chord.</mark>

```json
{
  "id": "m1.w3.d4.approach_walk_4",
  "type": "tab",
  "meta": { "title": "Approach-note walk F7-Bb7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
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

▶ **BPM 80, 4-string.** Measure 1 beat 4 B (3rd string, 2nd fret) is the half-step-above approach to Bb → land on Bb in measure 2. Measure 2 beat 4 E (2nd string, 2nd fret) is the half-step-below approach to F → back to F.

```json
{
  "id": "m1.w3.d4.approach_walk_5",
  "type": "tab",
  "meta": { "title": "Approach-note walk F7-Bb7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" }
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

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. Drop to the low B and try the same walk with more weight.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk yesterday's walking line once at BPM 76. Bring the two-measure cycle feel back to your fingertips.

**10–20 min · Brain training**
With the prep example below, isolate just the **two approach notes** (B, E) and connect them slowly. Feel <mark>slowly</mark> how each measure's beat 4 calls the next root.

```json
{
  "id": "m1.w3.d4.approach_prep_4",
  "type": "tab",
  "meta": { "title": "Two bridges drill, slow (B, E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 72, 4-string.** From F to B in measure 1, from Bb to E in measure 2. Learn with room to spare the pull as the two approach notes call the next root.

```json
{
  "id": "m1.w3.d4.approach_prep_5",
  "type": "tab",
  "meta": { "title": "Two bridges drill, slow (B, E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "B", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string.

**20–40 min · Real play (this week's product)**
Repeat the **approach-note walk** above at **BPM 80** as a two-measure cycle. Check <mark>whether each beat 4 slides into the next beat 1</mark>. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether the two bridges (B→Bb, E→F) connect naturally. Noting the BPM you reached this week gives you a starting point for next week.

**Done when:** you can cycle the two measures of the approach-note walk F7↔Bb7 in swing quarters at BPM 80 — landing the root on every beat 1, a chromatic approach on every beat 4 — without a break, on both a 4-string and a 5-string. (Week 3 complete!)

## ④ Tips / Common mistakes

- **You mix up above and below.** Measure 1 comes down from above (B); measure 2 comes up from below (E). Just remember the directions are opposite and your hand won't lose the path.
- **Beat 4 rushes.** It's the finish, so it's easy to get excited and rush on beat 4. All four beats being even as a ruler comes before the approach.

If just the two landings, **F and Bb**, are solid, the whole line won't wobble.

```json
{
  "id": "m1.w3.d4.roots_4",
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
  "id": "m1.w3.d4.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. You can drop to the low B for lower roots too.

- **Praise yourself for the month.** You started stepping roots only, then walked with chord tones, and now you aim all the way to the next chord with approach notes. That's a big stride. From next week you'll layer longer chord progressions and varied approaches onto this walk and widen it into real jazz lines.
