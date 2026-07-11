---
title: "F7→Bb7 arpeggio walk — Week 2 product"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — F7→Bb7 arpeggio walk, completing the week

## ① Theory

It's the last day of Week 2. All week you've raised the density one step at a time — roots only (whole) → root-5th (half) → chord tones in quarters. Today you climb that final step and make the **F7→Bb7 arpeggio walk**, an arpeggio walked **across two chords**, this week's product. <mark>The arpeggio that used to end on one chord now carries over to the next chord</mark> and walks on like real walking.

The finished line is two measures. Step **measure 1, F7's R-3-5-b7**, then **measure 2, Bb7's R-3-5-b7**, in quarter notes. The rule is the one you've kept all week — <mark>beat 1 of each measure must land on the root</mark>. The fun part is the moment you cross from measure 1's final b7 (Eb) to measure 2's first beat, Bb. The last note acts as a **bridge** to the next chord. This is the heart of walking.

The two chords' hand shapes are ones you fully learned last week, but today you grab Bb7's **3rd D as the open 2nd string (0 fret)**. Being an open string, your left hand stays comfortable and the note rings well. F7 starts on the 4th string and Bb7 starts on the 3rd string, so just learn ahead of time **the point where the starting string changes**.

First, grab measure 1's star, the **F7 chord tones**, again.

```json
{
  "id": "m1.w2.d4.f_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Measure 1's F7 R-3-5-b7. It starts from the root F (4th string, 1st fret).

```json
{
  "id": "m1.w2.d4.f_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Even on **a 5-string**, both chords are the same in notes and positions as on a 4-string. Cover the low B again today and focus only on **connecting the two chords smoothly**. Complete these two measures cleanly and Week 2 is wrapped up.

## ② Visuals

Now you make this week's product. First check measure 2's star, the **Bb7 chord tones**, then run the <mark>arpeggio walk that connects the two chords</mark> as the finished line. Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w2.d4.bb_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Measure 2's Bb7 R-3-5-b7. Grab the 3rd D as the open 2nd string (0 fret).

```json
{
  "id": "m1.w2.d4.bb_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 0, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Now this week's product, the **F7→Bb7 arpeggio walk**. Across two measures, step R-3-5-b7 in swing quarters at **BPM 80**. <mark>Beat 1 of each measure must land on the root</mark>.

```json
{
  "id": "m1.w2.d4.arp_walk_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Step measure 1 F7 and measure 2 Bb7's chord tones in R-3-5-b7 order. Beat 1 of each measure must land on the root.

```json
{
  "id": "m1.w2.d4.arp_walk_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 arpeggio walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** Same notes and positions as the 4-string. Drop to the low B to try the same walk in a heavier low register too.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk yesterday's F7 and Bb7 arpeggios once each at BPM 76. Bring **the two chords' feel** back to your fingertips.

**10–20 min · Brain training**
Looking at the F7 and Bb7 fretboards, check each chord from R to b7 with your fingertips. Then, with the prep example below, connect the two chords slowly, **holding each note a half measure long**.

```json
{
  "id": "m1.w2.d4.arp_prep_4",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 walk prep (long notes) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4-string.** Connect the two chords' R-3-5-b7 a half measure at a time. Learn the bridge from F7 to Bb7 with room to spare.

```json
{
  "id": "m1.w2.d4.arp_prep_5",
  "type": "tab",
  "meta": { "title": "F7 to Bb7 walk prep (long notes) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

**20–40 min · Real play (this week's product)**
Repeat the **F7→Bb7 arpeggio walk** above at **BPM 80**. The goal is for the two measures to carry on <mark>in one breath without a break</mark>, with beat 1 of each measure landing on the exact root. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether the **bridge from F7 to Bb7 (measure 1 b7 → measure 2 root)** is natural. Noting the BPM you reached this week gives you a starting point for next week.

**Done when:** you can walk the F7→Bb7 arpeggio walk (R-3-5-b7) in swing quarters at BPM 80, landing the root on beat 1 of each measure, without a break, on both a 4-string and a 5-string. (Week 2 complete!)

## ④ Tips / Common mistakes

- **It breaks when the chord changes.** It's easy for your hand to stop when crossing from measure 1's b7 to measure 2's root. While the final b7 rings, move your left hand ahead to the Bb root.

```json
{
  "id": "m1.w2.d4.roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The two measures' landings — F (4th string, 1st fret) and Bb (3rd string, 1st fret). If these two homes are solid, the rest follows.

```json
{
  "id": "m1.w2.d4.roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F to Bb roots — the two landings — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. You can drop to the low B to grab lower roots too.

- **You miss Bb7's open 3rd.** The open D on the 2nd string needs no left-hand press, so it's actually easy to forget. Ring it clearly with your right-hand timing.
- **You speed up toward the end.** It's the finish, so it's easy to get excited and rush measure 2. Having all eight beats as even as a ruler comes first.
- **Praise yourself for the week.** Raising the density step by step from whole notes to quarters is real progress. Next week you'll add passing tones to this arpeggio and move on to real walking lines.
</content>
