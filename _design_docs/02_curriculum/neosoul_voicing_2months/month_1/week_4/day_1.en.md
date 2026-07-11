---
title: "Voice leading — keep the common tones, move the minimum"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — Voice leading: keep the common tones, move the minimum

## ① Theory

Week 4. This week you take **the first step of chord melody** — laying a melody on top of the chords. Its foundation is **voice leading**. <mark>When you change chords, don't move the whole hand; leave the overlapping notes (common tones) in place and move only the notes you truly need.</mark> Drill it into the body with the signature vamp **Dm9 → G13**.

Overlay the two chords and it's surprising. **Dm9**'s **F** (4th string fret 3) and **E** (2nd string fret 5) live on unchanged in **G13**. <mark>The two common tones never leave your fingers; move just one inner note a half-step and the chord changes.</mark> Link them with this **minimal movement** and the sound flows like water instead of jerking apart.

Today it's about **the smooth transition**, not speed. Slowly at **BPM 70**, watch with your eyes how little the hand moves when the chord changes. <mark>Once the feel of keeping the common tones settles into the hand, the stage for the top-note melody is set.</mark> First, lay the home chord **Dm9** on the hand.

```json
{
  "id": "m1.w4.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **The home chord Dm9.** 5th string fret 5 root; the 9th on the 2nd string makes the soft color.

## ② Visuals

Now the target chord **G13**. Overlay it with **Dm9** and the common tones **F** and **E** hold their spots while only an inner note drops a half-step. <mark>Capture with your eyes how one finger's move flips the chord.</mark>

```json
{
  "id": "m1.w4.d1.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13.** 6th string fret 3 root; only the inner **b7** dropped a half-step to the **3rd**.

Now let's join the two bars. Bar 1 **Dm9**, bar 2 **G13**. <mark>Link them while keeping the common tones and the two chords flow as one.</mark>

```json
{
  "id": "m1.w4.d1.voice_leading",
  "type": "tab",
  "meta": { "title": "Voice leading Dm9 - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** Going from bar 1 Dm9 to bar 2 G13, leave the 4th and 2nd strings put and drop only one inner note a half-step.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
**BPM 65.** Warm the hand by grabbing Dm9 and G13 in turn. <mark>Rehearse just the feel of leaving the common tones F·E in place.</mark>

**10–20 min · Brain training (checking the common tones)**
With the left hand only, move between the two chords silently and check with your eyes where the **common tones** hold.

**20–40 min · Real voice-leading vamp (BPM 70)**
Repeat the four bars below **without a break**. Watch just one thing: <mark>whether the hand moves only the minimum when the chord changes</mark>.

```json
{
  "id": "m1.w4.d1.voice_leading_loop",
  "type": "tab",
  "meta": { "title": "Voice leading vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** Loop the voice-leading vamp twice. Feel how the chord changes even though the hand barely moves.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Check whether the transition links smoothly instead of jerking apart.

**Done when:** You can link Dm9 → G13 at BPM 70, keeping the common tones F·E in place, and make the transition sound smooth.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most as you drill **voice leading**.

```json
{
  "id": "m1.w4.d1.common_tone_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Common tones stay — F and E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "F", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "E", "role": "color" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 4th string fret 3 (F) and 2nd string fret 5 (E) are the two chords' common tones; the 3rd string fret 5→4 is the only note that moves.

- **You move the whole hand.** Lift the common tones too and the sound breaks. Keep F·E planted and move only the inner note.
- **The inner note is late.** Prepare the 3rd string fret 5→4 move ahead and the beat won't drag.
- **You raise the speed first.** Today the smooth transition comes first. Drop to BPM 65 and shrink the movement first.
- **The chord smears.** Stand the fingertips up so every string rings clearly.
