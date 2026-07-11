---
title: "Walking Day 1 — F7's safe stones (chord tones)"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — F7 chord tones, four stones you can step on

## ① Theory

Today you take your very first step into walking bass. If walking bass felt hard, remember just one sentence — **walking bass is walking over the chord.** When you walk, stepping just anywhere sinks your foot, but if you pick only **the safe stones you're allowed to step on**, you can cross anywhere with ease. On bass, those safe stones are exactly the **chord tones (R·3·5·b7)**. Today you'll get the chord tones of **F7**, the first chord of this week's stage, the **F blues**, into your hands.

F7 is made of four notes — **root F, 3rd A, 5th C, b7 Eb**. These four are the stones that never sink under you on F7. <mark>The root is the chord's name and its home.</mark> On F7, **F** is home, and the remaining 3·5·b7 are the stepping stones set around the house. In particular, **the 3rd A** decides whether the chord feels major or minor, so it becomes the target you land on most often in walking.

Let's see the positions on the fretboard. On a 4-string, **the root F is the 4th string, 1st fret**, **the 3rd A is the 4th string, 5th fret**, **the 5th C is the 3rd string, 3rd fret**, and **the b7 Eb is the 3rd string, 6th fret**. At first, don't try to memorize all four at once — <mark>start by pressing and checking the root F with your fingertip</mark> and add them one by one. With your right hand, pluck alternately with index and middle finger — **two-finger** style — sounding each note clearly.

First, lock in just the one spot that is home — **the root F**.

```json
{
  "id": "m1.w1.d1.f7_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root on the E string — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The root F is the 4th string, 1st fret — the starting point and home of every chord tone.

```json
{
  "id": "m1.w1.d1.f7_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root on the E string — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The position is the same as on a 4-string. There's just one more low B string.

If you play **a 5-string**, the fingering is exactly the same as on a 4-string. The string numbers stay 4th (E) to 1st (G), with just one more low B string at the bottom. Once you're comfortable, that low B lets you extend your walking to a lower register, but today just focus on carving **the four chord-tone positions of F7** into your eyes and hands. Because these four stones become the path we'll step and walk all week long.

## ② Visuals

Today you carve **F7's chord tones** into your eyes on both the fretboard and the score. First check <mark>the four safe-stone positions</mark> on the fretboard, then step on those stones one by one in quarter notes. Every example is laid out in **both a 4-string and a 5-string version**.

First, the **F7 chord-tone map**. The blue dots are the chord tones — starting from **the root F**, take in at a glance where the 3rd, 5th, and b7 sit.

```json
{
  "id": "m1.w1.d1.f7_tones_4",
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

▶ **4-string.** Starting from the root F (4th string, 1st fret), sweep your eyes across all four spots up to the 3rd A, 5th C, and b7 Eb.

```json
{
  "id": "m1.w1.d1.f7_tones_5",
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

▶ **5-string.** The chord-tone positions are the same as on a 4-string. For now, don't use the low B — rest your hand over it.

Next is an example that goes back and forth between **the root and the 3rd**. <mark>The 3rd (the green note) is the target walking lands on most often</mark>, so get it into your ear first.

```json
{
  "id": "m1.w1.d1.f7_r3_4",
  "type": "tab",
  "meta": { "title": "F7 root and third — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Step back and forth between the root F and the 3rd A, learning the distance between the two notes.

```json
{
  "id": "m1.w1.d1.f7_r3_5",
  "type": "tab",
  "meta": { "title": "F7 root and third — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B so it stays silent.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Loosen your hand by plucking open strings alternately with index and middle finger. For now, **an even two-finger touch** comes before pitch.

**10–20 min · Brain training**
Looking at the F7 chord-tone map, press and check the positions in the order **root F → 3rd A → 5th C → b7 Eb**. Go slowly <mark>until you can find all four spots with your eyes closed</mark>.

**20–40 min · Real play (today's product)**
Repeat the F7 arpeggio below at **BPM 70**. One note per beat, stepping up R-3-5-b7 clearly.

```json
{
  "id": "m1.w1.d1.f7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 70, 4-string.** Play F7's four chord tones from low to high, clearly. These four notes are the "safe stones" over F7.

```json
{
  "id": "m1.w1.d1.f7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string. Rest the low B for now, and once comfortable, try extending to a lower register.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **all four notes ring evenly at the same volume**. Also check that the positions you pressed today were accurate.

**Done when:** you can find F7's chord tones R-3-5-b7 on the fretboard and step up through them as a quarter-note arpeggio at BPM 70.

## ④ Tips / Common mistakes

- **You drop the b7.** You press the familiar R·3·5 and keep forgetting the b7 Eb. The b7 is what brings out the dominant color of "F7," so always grab that fourth stone.

```json
{
  "id": "m1.w1.d1.f7_b7_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 flat-7 (Eb) landmark — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** The b7 Eb is the 3rd string, 6th fret. Only when you add this one note to R·3·5 is F7 complete.

```json
{
  "id": "m1.w1.d1.f7_b7_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 flat-7 (Eb) landmark — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The position is the same as on a 4-string. You can also drop to the low B to find the b7 in another octave.

- **You cut the notes short.** A quarter note should ring well into the next beat to feel like walking. Don't lift your finger in a hurry.
- **You memorize positions but don't listen.** How a note sounds matters more than the fret number. Take the sound into your ear every time you press.
- **Neglecting low B (5-string).** If you brush B while focused on chord tones, the low end rings out. Always keep the unused B covered.
