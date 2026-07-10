---
title: "Adding the octave — completing R-5-8 with the octave box"
dayKey: "m1.w4.d2"
estMinutes: 30
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — Adding the octave, opening the line with the octave box

## ① Theory

Yesterday you added the **fifth** to the root and the line widened a notch. Today you lay on the last ingredient, the **octave**, to complete **<mark>R–5–8</mark>**. The **octave** sounds the same-named note **an octave higher** — the octave of open E is **still E**, just higher. This one note opens the line wide, up and down. If the root is the floor and the fifth a pillar, the octave is **a bright roof** laid on top.

The shape for finding the octave is today's core. **From the root, two strings up and two frets up** is the octave — you don't cross just one string like the fifth, you **skip a string** and go to the string two over. From open E (**4th string**), you pass the 3rd string and land on the **2nd string, 2nd fret**, the octave E. This is called the <mark>octave box</mark> — the root and octave sit in your hand like a little square box.

Because you skip a string, **muting matters even more**. If the skipped 3rd string rings along, the sound smears, so cover the unplayed string lightly with a finger to keep it asleep. In return, once the octave comes in, <mark>the line bounces up and down</mark> and gets much more fun. Root, fifth, and octave together — that's a proper bassline now. The three notes rise and fall within one hand, so the line sounds far more three-dimensional.

Today too, **the fingering is identical on a 4- or 5-string**. On a 5-string, keep the low B (5th string) asleep with your thumb. **Four weeks ago even one note was a stretch**, and today your hand travels three — so don't rush, just learn the octave's spot exactly.

## ② Visuals

Today you look at **two examples for learning the octave by hand**. First you fret the **octave box** half a bar each to learn <mark>the string-skipping shape</mark>, then you roll it **R–5–8–5** to build today's finished piece. Each example is laid out in **both a 4-string and a 5-string version**.

Before the examples, let's burn the **octave box hand shape** into your eyes with a diagram first. In the picture below, from the blue root E (4th string) go **two strings up and two frets up** to the octave E (2nd string, 2nd fret) — root, fifth, and octave sit in one hand like a little square box.

```json
{
  "id": "m1.w4.d2.octave_box_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box hand shape on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4-string.** Root E → fifth B → octave E. The 3rd string in between is the spot you leave empty (asleep).

```json
{
  "id": "m1.w4.d2.octave_box_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box hand shape on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5-string.** The hand shape is identical to the 4-string. The low B (5th string) at the bottom is ×, keep it asleep with your thumb.

**Example 1 — the octave box.** Fret the open E (**4th string**) root for half a bar, and the octave on the **2nd string, 2nd fret** for half a bar. Move your hand **leaving the 3rd string in between untouched and asleep**.

```json
{
  "id": "m1.w4.d2.octave_shape_4",
  "type": "tab",
  "meta": { "title": "Octave box on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** Blue root E → green octave. Learn the box shape by eye — **two strings up, two frets up**.

```json
{
  "id": "m1.w4.d2.octave_shape_5",
  "type": "tab",
  "meta": { "title": "Octave box on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** The fingering is identical to the 4-string. Cover the low B with your thumb to keep it asleep.

**Example 2 — R–5–8–5 bounce (today's finished piece).** Roll it root→fifth→octave→fifth, bouncing. In quarter notes, feel <mark>the line springing up</mark> at the octave.

```json
{
  "id": "m1.w4.d2.root_fifth_octave_4",
  "type": "tab",
  "meta": { "title": "R-5-8 bounce on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75, 4-string.** Root, fifth, octave (all blue) in one bar. The instant you skip a string, **keep the unplayed string from leaking**.

```json
{
  "id": "m1.w4.d2.root_fifth_octave_5",
  "type": "tab",
  "meta": { "title": "R-5-8 bounce on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75, 5-string.** The notes and positions are identical to the 4-string. Keep the low B asleep throughout.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Loosen up yesterday's root–fifth alternating at BPM 60. Warm your hand while checking that **the two notes split evenly**.

**7–17 min · Today's skill**
Repeat Example 1 (the octave box) at BPM 70. Watch whether <mark>the hand skipping the 3rd string to the octave</mark> is smooth and whether **the skipped string stays quiet**.

**17–27 min · Applying it (today's finished piece)**
Play Example 2 (R–5–8–5) 4 times at BPM 70 → when **the string-skip is clean**, raise it to BPM 75 for 4 more. Learn it on the 4-string, then confirm the same feel on the 5-string.

**27–30 min · Check**
Write down the BPM you reached, and record 30 seconds to hear **whether the line bounces at the octave**.

**Done when:** you can roll an R–5–8 (root, fifth, octave) one-chord figure (E) two-finger, keeping the skipped string in the octave box asleep, clearly at 70–75 on both a 4- and 5-string.

## ④ Tips / common mistakes

- **Only the octave is weak.** Skipping a string tends to make the octave quieter. Pluck the 2nd string firmly with your picking hand so all three notes come out at the same strength.
- **The skipped 3rd string rings.** If the 3rd string rings along on the way to the octave, it smears. Cover the 3rd string lightly with the tip of your fretting index or your picking hand to keep it asleep.
- **Your hand can't find the octave's spot.** Repeat the "two strings up, two frets up" box shape until you can grab it with your eyes closed. Wherever the root is, the octave is always inside that box.
- **Getting careless with the low B (5-string).** Focus on the octave and drop the B, and the low end leaks. Keep your thumb resting on the B at all times.
