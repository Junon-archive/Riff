---
title: "Boogie Round Trip — Up, Then Back Down"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — The Boogie Walk Round Trip, Ascent and Descent

## ① Theory

Yesterday you climbed the stairs with **R-5-6-b7**. Today you don't stop at the top — you <mark>walk right back down the stairs.</mark> This **round trip**, up then down, turns the boogie walk into one complete phrase. The stairs you only climbed now circle up and down with a bounce.

The descent is a mirror of the ascent. Where climbing was **R→5→6→b7**, coming down you step **b7→6→5→R**. You pass frets **5, 4, and 2** on the 3rd string and land on open **E** on the 4th string. <mark>You just retrace the same stairs with the order flipped.</mark> There are no new notes — it's the exact shape you memorized yesterday.

Roll it in two measures. **Measure 1 is the ascent** (R-5-6-b7), **measure 2 is the descent** (b7-6-5-R). One note per beat, eight notes connecting like climbing and descending a hill. The seam matters — <mark>the moment you turn back from b7 to 6 must be smooth</mark> for the round trip to feel natural.

Your right hand still lays a touch of long-short feel with **two fingers**. Once it's a round trip, it really starts to sound like a "bassline" — the **E boogie shuffle groove** you finish tomorrow is right around the corner. On a **5-string** the fingering is the same; only keep the low **B** deadened. **Forget speed** and just smooth the up-and-down so it never breaks.

## ② Visuals

Today has two parts. First check the **boogie shape (R-5-6-b7)** again, then roll the **boogie round trip** that joins ascent and descent. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

Fix yesterday's **boogie shape** in your eyes once more — today you go up and down these stairs. Three blues and one uncolored **b7 (D)**, unchanged. <mark>Scout the spots you'll come back down too.</mark>

```json
{
  "id": "m1.w2.d3.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** Root **E** → **5th B** (2nd fret) → **6th C#** (4th fret) → **b7 D** (5th fret). Bottom to top going up, top to bottom coming down.

```json
{
  "id": "m1.w2.d3.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Keep the low **B** deadened and focus only on the stairs you go up and down.

Now the **boogie round trip**. Climb in measure 1, descend in measure 2. <mark>Join the seam where you turn back at the top b7 smoothly.</mark>

```json
{
  "id": "m1.w2.d3.boogie_roundtrip_4",
  "type": "tab",
  "meta": { "title": "Boogie round trip R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75, shuffle.** Measure 1 **R→5→6→b7** (ascent), measure 2 **b7→6→5→R** (descent). Take the eight notes up and down like a hill.

```json
{
  "id": "m1.w2.d3.boogie_roundtrip_5",
  "type": "tab",
  "meta": { "title": "Boogie round trip R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Keep the low **B** covered with the thumb so it doesn't leak through the round trip.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Climb yesterday's **boogie ascent** on open E at BPM 60 to loosen up. Check the four notes are even before you start.

**10–20 min · Brain training**
Silently fret only the **descent** (b7→6→5→R), coming down very slowly. Focus on <mark>whether the finger order stays clear on the way down</mark>.

**20–40 min · Real play**
Repeat the **boogie round trip** at **BPM 75**. The goal is a smooth seam between going up and coming down. Learn it on the 4-string, then confirm the same round trip on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the up-and-down connects without breaking**. Note the BPM you reached today.

**Done when:** you can roll the R-5-6-b7 boogie round trip at BPM 75 with a smooth join between ascent and descent, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **You hesitate at the top.** The beat easily empties when you turn back at b7. Prepare the turn early and cross over smoothly.
- **The descent rushes.** It's easy to speed up in the fun of coming down. Descend at the same spacing you climbed.
- **The landing is fuzzy.** The final root E ends weak. Fret the root, the round trip's arrival point, clearly.
- **Neglecting low B (5-string).** Keep B deadened with the thumb all the way up and down.
