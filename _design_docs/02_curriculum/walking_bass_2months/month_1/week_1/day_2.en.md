---
title: "Bb7 & C7 chord tones — same shape, different home"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — Bb7 & C7 chord tones, sliding the hand shape

## ① Theory

Yesterday you got F7's chord tones into your hands. Today you move the same idea to **Bb7** and **C7**. The F blues turns on these three chords — **F7·Bb7·C7** — so once you add today's two, all the stones on this week's stage are in your hands. The good news: <mark>the chord-tone recipe is the same as yesterday — R·3·5·b7.</mark> Only the home (the root) changes; the way you step stays the same. The hand shape you learned on one chord works on the others just as well, so really the only new thing today is where to move your hand.

**Bb7** is the four notes **Bb·D·F·Ab**. On the fretboard, **the root Bb is the 3rd string, 1st fret**, **the 3rd D is the 3rd string, 5th fret**, **the 5th F is the 2nd string, 3rd fret**, and **the b7 Ab is the 2nd string, 6th fret**. It's yesterday's F7 shape moved up one string as a whole, so <mark>the spacing between your fingers stays the same</mark> — you just shift the position.

**C7** is the four notes **C·E·G·Bb**. **The root C is the 3rd string, 3rd fret**, **the 3rd E is the 3rd string, 7th fret**, **the 5th G is the 2nd string, 5th fret**, and **the b7 Bb is the 2nd string, 8th fret**. Push the very same Bb7 shape up two frets and it becomes C7. This sense of moving **one single shape** to grab all three chords makes walking much easier down the road.

First, press **Bb7's home (the root Bb)**.

```json
{
  "id": "m1.w1.d2.bb7_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root on the A string — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The root Bb is the 3rd string, 1st fret — a home moved one string up and one step over from yesterday's F7.

```json
{
  "id": "m1.w1.d2.bb7_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root on the A string — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The position is the same as on a 4-string. There's just one more low B string.

If you play **a 5-string**, these positions are also exactly the same as on a 4-string. Only, thanks to the low B string, you'll later be able to grab low roots like Bb·C in a lower octave too. For today, focus on getting **the 4-string positions** into your eyes.

## ② Visuals

Now check **Bb7's and C7's chord tones** on the fretboard and the score. First look at the two maps side by side and confirm with your eyes that <mark>the same hand shape only changes position</mark>, then make some sound with the Bb7 arpeggio. Every example comes in **both a 4-string and a 5-string version**.

First, the **Bb7 chord-tone map**. The four blue dots are Bb·D·F·Ab.

```json
{
  "id": "m1.w1.d2.bb7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** From the root Bb (3rd string, 1st fret) up to the 3rd D, 5th F, and b7 Ab — yesterday's F7 shape climbed one string up.

```json
{
  "id": "m1.w1.d2.bb7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Next is the **C7 chord-tone map**. The four blue dots are C·E·G·Bb.

```json
{
  "id": "m1.w1.d2.c7_tones_4",
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

▶ **4-string.** From the root C (3rd string, 3rd fret) up to the 3rd E, 5th G, and b7 Bb — the Bb7 shape pushed up two frets.

```json
{
  "id": "m1.w1.d2.c7_tones_5",
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

▶ **5-string.** The positions are the same as on a 4-string. Rest your hand over the low B.

Now confirm the sound with the **Bb7 arpeggio**. Step up R-3-5-b7 one beat at a time, clearly.

```json
{
  "id": "m1.w1.d2.bb7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 70, 4-string.** Bb7's four chord tones from low to high. Same footwork as F7, just a different position.

```json
{
  "id": "m1.w1.d2.bb7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string. Rest the low B, and once comfortable, try extending to a lower register.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Run the F7 arpeggio you learned yesterday once at BPM 70. Bring **yesterday's feel** back to your fingertips.

**10–20 min · Brain training**
Looking at the Bb7·C7 maps, check both chords' positions with your fingertips in the order **root → 3rd → 5th → b7**. Feel with your hand that <mark>it's just the same shape being moved</mark>.

**20–40 min · Real play (today's product)**
Repeat the C7 arpeggio below at **BPM 70**, then alternate it with the Bb7 arpeggio. Today's goal is to have all the chord tones of **the three chords F7·Bb7·C7** in your hands.

```json
{
  "id": "m1.w1.d2.c7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "C7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** C7's four chord tones from low to high, clearly. Now all three chords' stones are gathered.

```json
{
  "id": "m1.w1.d2.c7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "C7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string. Rest the low B, and once comfortable, extend lower.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether the Bb7 and C7 arpeggios ring **all at an even volume**. If a chord trips you up, check its map again.

**Done when:** you can find the chord tones (R-3-5-b7) of the three chords F7·Bb7·C7 on the fretboard and play each chord's arpeggio cleanly at BPM 70.

## ④ Tips / Common mistakes

- **You mix up the three chords.** Bb7 and C7 share the same hand shape, so it's easy to misjudge the position. Confirm where the root is first, and the other three notes follow on their own.

```json
{
  "id": "m1.w1.d2.thirds_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 & C7 thirds (landing targets) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 5, "label": "Bb7-3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "C7-3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4-string.** The two green notes are each chord's 3rd — Bb7's D (3rd string, 5th fret) and C7's E (3rd string, 7th fret). Get these landing notes down first.

```json
{
  "id": "m1.w1.d2.thirds_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 & C7 thirds (landing targets) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 5, "label": "Bb7-3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "C7-3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. You can drop to the low B to try a lower octave too.

- **You drop the b7 again.** As yesterday, the b7 is the heart of the dominant color. Don't forget Bb7's Ab or C7's Bb.
- **You trust the shape but don't listen.** Even with the same shape, each chord rings differently. Take the sound into your ear every time.
- **Neglecting low B (5-string).** If you brush B while shifting positions, the low end leaks. Always keep the unused B covered.
