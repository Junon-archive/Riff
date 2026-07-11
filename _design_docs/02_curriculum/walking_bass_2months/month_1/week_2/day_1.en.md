---
title: "Root line — walking the progression in whole notes"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — Roots only, following the progression in whole notes

## ① Theory

Welcome to Week 2. Last week you got the **chord tones (R·3·5·b7)** you can step on for each chord into your hands. This week's one sentence is this — <mark>walking doesn't fill everything from the start.</mark> You raise the density one step at a time: **roots only (whole) → root-5th (half) → chord tones in quarters**. Like standing before you walk and sitting before you stand. Today is that first step — you follow the progression stepping just **one root in whole notes**.

Stepping only the roots may look plain, but this is the **skeleton** of walking. The feel of landing exactly on each chord's **home (root)** on the first beat of every measure — once you have it, you can add the rest of the notes later, as many as you like. Today's progression is **F7 → Bb7 → F7 → C7**, one root per measure. If you just keep <mark>landing on the root on beat 1 of every measure</mark>, today is a success.

Let's look at the three homes on the fretboard. On a 4-string, **the root F is the 4th string, 1st fret**, **Bb is the 3rd string, 1st fret**, **C is the 3rd string, 3rd fret**. See how the three spots gather close together? It means you can move between the three chords without big hand moves. A whole note rings for the full measure, so **keep the note held with your left hand to the end** and pluck it once, clearly, with two fingers in your right hand.

First, firmly grab today's starting point, the **root F**, one spot.

```json
{
  "id": "m1.w2.d1.f_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F root — home of F7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The root F is the 4th string, 1st fret. It's the starting point and home of today's progression.

```json
{
  "id": "m1.w2.d1.f_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F root — home of F7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The position is the same as on a 4-string. There's just one more low B string.

Even on **a 5-string**, the root positions are the same as on a 4-string. The string numbers stay 4th (E) to 1st (G), with just one more low B at the bottom. Today, cover the low B for a moment and focus on setting **the three homes' positions** into your eyes and hands.

## ② Visuals

Now take in today's **root line** with your eyes. First check where the three chords' homes — **the F·Bb·C roots** — gather on the fretboard. <mark>The three homes sit within a hand's reach of each other.</mark> Then listen to the line that follows the progression in whole notes. Every example comes in **both a 4-string and a 5-string version**.

```json
{
  "id": "m1.w2.d1.roots_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots — F, Bb, C — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** The three blue dots are each chord's home — F (4th string, 1st fret), Bb (3rd string, 1st fret), C (3rd string, 3rd fret).

```json
{
  "id": "m1.w2.d1.roots_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots — F, Bb, C — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The positions are the same as on a 4-string. You can drop to the low B to grab lower roots too.

Now connect the three homes in the order of the progression. **F7 → Bb7 → F7 → C7**, one root per measure, ringing full in whole notes. Just focus on whether <mark>beat 1 of every measure is the exact root</mark>.

```json
{
  "id": "m1.w2.d1.root_walk_4",
  "type": "tab",
  "meta": { "title": "Root line — whole notes over F7-Bb7-F7-C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 4-string.** F (4th string, 1st fret) - Bb (3rd string, 1st fret) - F - C (3rd string, 3rd fret), one per measure in whole notes. Ring them without a break into the next measure.

```json
{
  "id": "m1.w2.d1.root_walk_5",
  "type": "tab",
  "meta": { "title": "Root line — whole notes over F7-Bb7-F7-C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

## ③ Practice (50-minute routine)

**0–10 min · Warm-up**
Check the three roots F·Bb·C on the fretboard with your fingertips. Before pitch, **an accurate landing** comes first.

**10–20 min · Brain training**
Call out the chord names of the progression **F7 → Bb7 → F7 → C7** aloud while pressing each root ahead of time with your fingertips. With the prep example below, move slowly between just the two homes F and Bb.

```json
{
  "id": "m1.w2.d1.root_prep_4",
  "type": "tab",
  "meta": { "title": "Root prep — F to Bb whole notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 63, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 63, 4-string.** Move between just the two roots F and Bb, very slowly. Learn the feel of holding a whole note to the end of the measure.

```json
{
  "id": "m1.w2.d1.root_prep_5",
  "type": "tab",
  "meta": { "title": "Root prep — F to Bb whole notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 63, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 63, 5-string.** Same notes and positions as the 4-string. Rest your hand over the low B.

**20–40 min · Real play (today's product)**
Repeat the **root line** above at **BPM 70**. One root per measure, ringing so that <mark>the whole note carries unbroken into the next measure</mark>. Learn it on a 4-string, then confirm the same feel on a 5-string.

**40–50 min · Record/feedback**
Record 30 seconds and listen for whether **beat 1 of every measure** lands on the exact root. If a measure wavers, repeat just that one on its own.

**Done when:** you can walk the F7 → Bb7 → F7 → C7 progression as root whole notes at BPM 70, landing exactly on beat 1 of every measure, on both a 4-string and a 5-string.

## ④ Tips / Common mistakes

- **Beat 1 wavers.** A whole note looks relaxed, but if the measure's first beat is late, the whole progression gets pushed back. Place the root exactly on beat 1 of the metronome.

```json
{
  "id": "m1.w2.d1.c_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C root — home of C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4-string.** C7's home (root C) is the 3rd string, 3rd fret. Unlike F, it starts on the 3rd string.

```json
{
  "id": "m1.w2.d1.c_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C root — home of C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5-string.** The position is the same as on a 4-string. You can drop to the low B to find a lower C too.

- **You release the note early.** A whole note must fill the whole measure. Hold with your left hand until just before you move to the next root.
- **You confuse root positions.** F and C are on different strings — F is the 4th string, C is the 3rd string. Check your starting string first.
- **Neglecting the 5-string low B.** If you brush B while focused on the root, the low end leaks. Always keep the unused B covered.
</content>
