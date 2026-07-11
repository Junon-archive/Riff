---
title: "Chord-tone arpeggio — the feel of quarter-note walking"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — Chord-tone arpeggio, walking in quarter notes

## ① Theory

It's the third step of the density ramp. Yesterday you walked with root-5th (half notes); today you finally step **in quarter notes**, one note per beat, hitting **all four chord tones R-3-5-b7**. <mark>Quarter-note walking is the real stride of jazz walking bass.</mark> It's the moment the skeleton gets flesh and the line starts striding.

Four notes fit in one measure, so the rhythm seems faster, but the rule is the same as yesterday — **beat 1 is the root**, and on beats 2, 3, 4 you lay the 3rd, 5th, b7 in order. The **3rd** in particular is the note that sets whether the chord is major or minor, so it's the most audible color in the arpeggio. Once you <mark>land firmly on the beat-1 root</mark>, just connect the other three notes evenly.

The spots you'll step today are ones you fully learned last week. For F7, **R (4th string, 1st fret) - 3 (4th string, 5th fret) - 5 (3rd string, 3rd fret) - b7 (3rd string, 6th fret)**; for Bb7, the same hand shape moved one string up. You're not memorizing new positions — you're practicing **putting four known spots on a quarter-note rhythm**.

First, take F7's four chord-tone spots back into your eyes.

```json
{
  "id": "m1.w2.d3.f_shape_4",
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

▶ **4-string.** The four blue dots are F7's R-3-5-b7. Today you step these four spots in quarter notes.

```json
{
  "id": "m1.w2.d3.f_shape_5",
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

Even on **a 5-string**, the four spots are exactly the same as on a 4-string. Cover the low B again today and focus only on connecting **the four notes as even quarter notes**. The positions are already in your hands, so today's task is nothing but rhythmic evenness.

## ② Visuals

Now walk the chord tones in quarter notes. First the **F7 arpeggio**, then the **Bb7 arpeggio**, checked by ear. <mark>The two chords are the same hand shape with only the position moved</mark>, so the feel carries straight over. Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w2.d3.f_arp_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** F7's R-3-5-b7, one per beat. Land on the beat-1 root, then climb evenly.

```json
{
  "id": "m1.w2.d3.f_arp_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

Next is the **Bb7 arpeggio**. Step the same R-3-5-b7 from the spot where the F7 shape moved one string up.

```json
{
  "id": "m1.w2.d3.bb_arp_4",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 4-string.** Bb7's R (3rd string, 1st fret) - 3 - 5 - b7. The hand shape is identical to F7.

```json
{
  "id": "m1.w2.d3.bb_arp_5",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Walk yesterday's R-5 line once at BPM 72. Bring **the beat-1 root landing** back to your fingertips.

**10–20 min · Brain training**
Check F7's four chord-tone spots with your fingertips, and with the prep example below, learn the arpeggio slowly **going up and coming back down**. Re-engrave the positions into your hands.

```json
{
  "id": "m1.w2.d3.arp_prep_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down prep — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 72, 4-string.** Measure 1 goes up, measure 2 comes down. Going up and down, cement the four spots in your hand.

```json
{
  "id": "m1.w2.d3.arp_prep_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down prep — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 72, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

**20–40 min · Real play (today's product)**
Repeat the **F7 arpeggio** and the **Bb7 arpeggio** above alternately at **BPM 76**. The goal is for <mark>all four quarter notes to connect at the same, even length</mark>. Learn it on a 4-string, then confirm on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the spacing of the four notes is even**. If one note runs late or early, repeat just that beat slowly on its own.

**Done when:** you can walk the F7 and Bb7 chord-tone arpeggios (R-3-5-b7) evenly in swing quarters at BPM 76, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **You speed up toward the end.** R-3 stays clean, then it's easy to rush 5-b7. The four beats must be as evenly spaced as if measured with a ruler.

```json
{
  "id": "m1.w2.d3.c_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** C7 is the same hand shape — R (3rd string, 3rd fret) - 3 - 5 - b7. If you have room, step the C7 arpeggio in quarter notes too.

```json
{
  "id": "m1.w2.d3.c_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Drop to the low B to try a lower octave too.

- **You cut the b7 short.** The final b7 must also ring fully into the next beat for the measure to feel complete. Don't lift your finger in a hurry.
- **You let the 3rd slip.** The 3rd is the note that sets the chord's color. Pluck it clearly so it isn't buried under the other notes.
- **Neglecting the 5-string low B.** If you brush B while focused on the four notes, the low end leaks. Always keep the unused B covered.
</content>
