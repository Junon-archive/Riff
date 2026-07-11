---
title: "Feel the Triangle — Split One Beat into Three"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — The Triplet Grid, One Beat into Three

## ① Theory

It's the first day of the shuffle & bounce track. There's no boogie or fancy chord move yet this week. Instead, you start by **feeling the beat as a triangle**. If you've split eighth notes into **even halves** so far, today you'll divide one beat into **three**. <mark>This sense of feeling one beat as three is the root of every groove this week.</mark>

Splitting one beat (a **quarter note**) evenly into three is called a **triplet note**, or simply a **triplet**. Out loud, count three notes over one beat like **"1-and-a"**. Picture the **"da-ga-dun"** clip-clop of a galloping horse and it gets easy. This grid rolling in threes is exactly <mark>the triplet grid you'll use all week</mark>.

The one note you lay on top is just one — the **E root**. This week's stage is the **key of E**, and the **open (0-fret) E** on the 4th string is our home tone. Your left hand frets nothing — just one open string — so today you focus only on the **timing of your right-hand two fingers**. <mark>Alternate index and middle</mark> and roll three even notes at the same size.

Not swing yet. Today it's all about rolling the three notes **at the same size and even spacing**, crisp and steady. **Forget speed entirely.** Once the three roll evenly, tomorrow you'll drop the middle of the three and turn it into the famous **long-short shuffle**. No need to rush — **once you truly feel this one triangle today**, the other three days this week stack naturally on top. The triplet is the **most fundamental rhythmic sense** underpinning shuffle, boogie, and bounce — the whole of these two months. Today is the day you carve that triangle into your body.

## ② Visuals

First, check today's home tone, the **E root**, on the fretboard; feel the basic pulse of **four steady beats**; then roll the **triplet grid that splits that beat into three**. Each example comes in <mark>both a 4-string and a 5-string version</mark>, so any bass follows right along.

First, the **E root position**. The open (0-fret) 4th string is our home all week.

```json
{
  "id": "m1.w1.d1.e_root_position_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E root position — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The blue dot is the root **E** (4th string open). Your left hand frets nothing — fix this spot in your eyes.

```json
{
  "id": "m1.w1.d1.e_root_position_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E root position — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The spot is the same as the 4-string. Keep the low **B** at the bottom deadened for now and focus on the E root.

Now the **basic pulse**. Play one beat as four steady quarter notes, even like a metronome.

```json
{
  "id": "m1.w1.d1.quarter_pulse_4",
  "type": "tab",
  "meta": { "title": "Quarter-note beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Open **E** in quarter notes, "1·2·3·4," steady. This is the **one beat** we'll split into three.

```json
{
  "id": "m1.w1.d1.quarter_pulse_5",
  "type": "tab",
  "meta": { "title": "Quarter-note beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **5-string.** Same note and spot as the 4-string. Rest the low **B** with the side of your right hand so it doesn't leak.

Now the **triplet grid**. Split that one beat into **three** and, <mark>keeping all three notes the same size</mark>, lay the open E three times per beat.

```json
{
  "id": "m1.w1.d1.triplet_grid_4",
  "type": "tab",
  "meta": { "title": "Triplet grid (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4-string.** Count **"1-and-a"** and play three times per beat. Don't roll yet — just lay them evenly.

```json
{
  "id": "m1.w1.d1.triplet_grid_5",
  "type": "tab",
  "meta": { "title": "Triplet grid (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]}
  ]}
}
```

▶ **5-string.** Same note and spot as the 4-string. Keep **B** deadened so the low end doesn't shake your count of three.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Play open **E** in quarter notes at BPM 60, steady. Check that your right-hand index and middle come out **at the same size**, alternating.

**10–20 min · Brain training**
Count **"1-and-a"** out loud and repeat the triplet grid very slowly. Focus only on the evenness — <mark>whether the three notes are all the same size</mark>.

**20–40 min · Real play**
Repeat the triplet grid at **BPM 60**. Three open E's per beat — don't try to speed up, just care about rolling them **evenly**. Learn it on the 4-string, then confirm the same feel on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the three notes sound even**. When one beat splits clearly into three, today's goal is met.

**Done when:** counting "1-and-a," you can roll open E three times per beat with the three notes even, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Counting in four.** If you count in four like sixteenth notes, it's not a triplet. Count only three notes: "1-and-a."
- **Weak middle.** The middle of the three easily gets quiet. Match all three notes to the same size.
- **Rolling already.** Today isn't swing — it's even threes. You'll learn long-short tomorrow.
- **Craving speed.** If the three aren't even at 60 and you push higher, it all falls apart. As all week, balance comes first.
