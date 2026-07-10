---
title: "Four-chord navigation — E-C-G-D roots without stopping"
dayKey: "m1.w4.d3"
estMinutes: 30
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — Four-chord root navigation, without stopping

## ① Theory

Yesterday you bounced one chord with **R–5–8**. But a song doesn't stay on one chord — you have to **move the root to a new spot every time the chord changes** and navigate, and then it becomes a real song. Today's progression is <mark>E–C–G–D</mark>, four chords cycling one per bar. Even if the four chords sound different, your job is always the same — **fretting each chord's root exactly**.

Memorize the four roots' spots. **E is the open 4th string**, **C is the 3rd string, 3rd fret**, **G is the 4th string, 3rd fret**, and **D is the 3rd string, 5th fret**. This progression is actually <mark>the same progression as the beginner electric graduation song</mark> — when your guitar-playing friend holds the chords, you back them with the roots and **you're jamming right away**.

Today's real goal is **not stopping**. If your hand hesitates at the bar boundary, the song cuts off. The trick is to **prepare the next root one beat ahead** — while you play this bar's last note, your eyes and hand already head to the next spot. <mark>Even if you slip, don't stop</mark> and flow into the next bar — that's the whole of today. Even if you slip in one bar, the next bar's first beat is always a chance to start fresh.

Today too, **the fingering is identical on a 4- or 5-string**. On a 5-string, keep the low B (5th string) asleep with your thumb. **Four weeks ago one open string** was everything, and today your hand navigates four spots — go slow, and build the unbroken flow first. Once the four spots are in your hand, this hand can follow any song by its roots.

## ② Visuals

Today you look at **two examples of navigating the four chords by root**. First you <mark>learn the four spots slowly</mark> in whole notes, one per chord, then you roll it in quarter notes to carve **an unbroken flow** into your hand. Each example is laid out in **both a 4-string and a 5-string version**.

**Example 1 — root navigation (slow).** E→C→G→D, one per bar, long in whole notes. While a note rings, your hand **finds the next spot in advance**. Land on the final **green D**.

```json
{
  "id": "m1.w4.d3.root_navigation_4",
  "type": "tab",
  "meta": { "title": "Root navigation E-C-G-D — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 75, 4-string.** Four blue roots, one per bar. E(4th)→C(3rd)→G(4th)→D(3rd), landing on the final green D.

```json
{
  "id": "m1.w4.d3.root_navigation_5",
  "type": "tab",
  "meta": { "title": "Root navigation E-C-G-D — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 3, "notes": [ { "string": 4, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 75, 5-string.** The fingering is identical to the 4-string. Cover the low B with your thumb to keep it asleep.

**Example 2 — navigating in quarters (today's finished piece).** Now each root four times in quarter notes. At the bar boundary, cross to the next root <mark>without pushing the beat</mark>.

```json
{
  "id": "m1.w4.d3.root_quarters_4",
  "type": "tab",
  "meta": { "title": "Root walk E-C-G-D in quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80, 4-string.** Each chord's root four times. At the bar's last note, **prepare the next string in advance** so it never breaks.

```json
{
  "id": "m1.w4.d3.root_quarters_5",
  "type": "tab",
  "meta": { "title": "Root walk E-C-G-D in quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80, 5-string.** The notes and positions are identical to the 4-string. Keep the low B asleep throughout.

## ③ Today's practice (30-minute routine)

**0–7 min · Warm-up**
Roll yesterday's R–5–8 again at BPM 60. Warm your hand while checking **whether the octave box is clean**.

**7–17 min · Today's skill**
Repeat Example 1 (root navigation) at BPM 75. Watch <mark>whether your hand moves exactly to the four spots</mark> and whether the **one-beat-ahead prep** works.

**17–27 min · Applying it (today's finished piece)**
Play Example 2 (quarter navigation) 4 times at BPM 75 → when **it doesn't break at the boundaries**, raise it to BPM 80 for 4 more. Learn it on the 4-string, then confirm the same feel on the 5-string.

**27–30 min · Check**
Write down the BPM you reached, and record 30 seconds to hear **whether you passed the four chords without stopping**.

**Done when:** you can pass the four-chord progression E–C–G–D by root, without stopping at the bar boundaries, unbroken at 75–80 on both a 4- and 5-string.

## ④ Tips / common mistakes

- **Beat lag at the change.** If the next chord's first note is late, the flow cuts off. Fret the next string and fret in advance at this bar's last note.
- **You stop when you slip.** Halt over one wrong note and the song dies. Let the wrong note go and keep going to the next root.
- **You confuse G and C.** Both are at fret 3, only the string differs — G is the 4th string, C is the 3rd. Build the habit of telling them apart by string number.
- **Getting careless with the low B (5-string).** Keep the B covered with your thumb the whole way as you move spots. Focus on navigating and drop the B, and the low end leaks.
