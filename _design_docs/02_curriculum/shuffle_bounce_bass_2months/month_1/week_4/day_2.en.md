---
title: "Dynamics and Fill — An Expressive Shuffle"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — Dynamics and Fill, An Expressive Shuffle

## ① Theory

Yesterday the turnaround put the knot of the 12 bars in your hands. <mark>A month ago even one note felt like a lot; now you loop four bars back smoothly.</mark> Today you add **expression** on top. Even pressing the same notes, one touch of dynamics and a small fill make the shuffle come alive.

The first is **dynamics**. Play every note at the same strength and the line goes flat. <mark>Hit the root a bit harder and the passing b7 a little softer</mark> — this small difference adds another grain on top of the long-short. When the shuffle's bounce overlaps with a wave of dynamics, a flat line starts to breathe.

The second is the **fill**. In the last B7 bar of the 12, on that **last beat**, add a small variation. Chop the b7 and the 6th <mark>into eighths and roll them with a bounce</mark>, and a door opens for the tune to cross back to the top. The notes all live inside the boogie staircase you know, so there's nothing new to memorize.

Don't overdo it. Keep both the dynamics and the fill <mark>subtle enough not to hurt the groove</mark>. Push the strength too hard and the tempo wobbles; add too much fill and the shuffle gets cluttered. On a **5-string** add the same expression while resting the low B. Today's goal isn't flash — it's an expressive shuffle.

## ② Visuals

Today has two parts. First check the **spot where the fill sits** on the fretboard, then pass through the **expressive turnaround** with dynamics and a fill. Each example comes in <mark>both a 4-string and a 5-string version</mark>.

First, the **B7 bar where the fill sits**. On the last beat, <mark>chop the b7 and the 6th into eighths and roll them</mark> to loop back to the top.

```json
{
  "id": "m1.w4.d2.fill_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 turnaround bar fill notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4-string.** The four notes of the B7 boogie (root on the 3rd string, 2nd fret). Of these, the **b7** (2nd string, 7th fret) and the **6th** (6th fret) become the last-beat fill.

```json
{
  "id": "m1.w4.d2.fill_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 turnaround bar fill notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5-string.** The spots are the same as the 4-string. Rest the low **B** with your thumb.

Now the **expressive turnaround** with dynamics and a fill. Hit the root a bit harder, and at the end of the last bar <mark>cross over with a bouncing fill.</mark>

```json
{
  "id": "m1.w4.d2.turnaround_fill_4",
  "type": "tab",
  "meta": { "title": "Turnaround with fill B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, shuffle.** Over B7-A7-E7-B7, the root strong and the b7 soft. On the last beat of the final B7, roll **b7-6** as eighths to link back to the top.

```json
{
  "id": "m1.w4.d2.turnaround_fill_5",
  "type": "tab",
  "meta": { "title": "Turnaround with fill B7-A7-E7-B7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **5-string.** Same notes and spots as the 4-string. Cover the low **B** with the thumb.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Roll yesterday's **turnaround** at BPM 60 to loosen up. Check the four bars connect smoothly.

**10–20 min · Brain training**
Play the same turnaround with **just the root a bit harder**. Listen with your ears for whether <mark>the difference in strength gives the sound a grain</mark>.

**20–40 min · Real play**
Repeat the **turnaround with the fill** at **BPM 70**. The goal is a last-beat eighth fill that won't wobble. Learn it on the 4-string, then confirm on the 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **the dynamics and fill are alive**. Note the BPM you reached today.

**Done when:** you can add dynamics and a last-beat fill to the turnaround and roll it expressively at BPM 70, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Overdoing the strength.** Trying to hit the root hard easily wobbles the tempo. A very slight difference is plenty.
- **The fill drags.** When you chop into eighths, it tends to slip late. Keep the two fill notes inside the long-short grain too.
- **Too much fill.** Adding a fill in every bar clutters the shuffle. Keep the fill only in the last B7, and gently.
- **Neglecting low B (5-string).** Focused on expression, it's easy to lose the unused low string. Keep B covered with the thumb.
