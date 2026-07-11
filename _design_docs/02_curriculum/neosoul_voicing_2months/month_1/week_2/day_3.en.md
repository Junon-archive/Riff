---
title: "The tension of sus4 → the resolution of the 3rd"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — The sus4 tension, melting into the 3rd

## ① Theory

Today is this week's highlight. **sus4** is a sound that **briefly delays the chord's 3rd into the 4th**. <mark>When the 4th takes over the seat where the 3rd should be, a slightly floating tension arises.</mark> And the moment that **4th settles a half-step down onto the 3rd**, the melting resolution unique to neosoul blooms. Tension and resolution stuck together as one body — that's the charm of sus.

Let's look at the G chord in our vamp. The 4th of **G13sus4** is **C (3rd string, 5th fret)**; the 3rd of G13 is **B (3rd string, 4th fret)**. <mark>Just one finger sliding a half-step on the 3rd string, from fret 5 to fret 4, lets the tension unwind.</mark> From the 4th (C) to the 3rd (B) — this one-fret move is all of today.

The point is **not to rush**. Let the floating tension of the sus4 ring fully, then settle slowly onto the 3rd. <mark>Only by tasting the tension first and then releasing it does the resolution sound sweeter.</mark> First, let's grab the tension hand shape with the **G13sus4** grip.

```json
{
  "id": "m1.w2.d3.g13sus4_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13sus4 grip — 4th (C) on string 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "4", "role": "color" },
    { "string": 2, "fret": 5, "finger": 3, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13sus4** — the 3rd string 5th fret is the **4th (C)**. A tension sound where the 4th takes over the 3rd's seat.

## ② Visuals

Now here's the **G13** that unwinds that tension. Move only the 3rd-string finger a half-step, **fret 5 → fret 4**, and you arrive at the **3rd (B)**. <mark>Leave the other fingers as they are and move just one.</mark>

```json
{
  "id": "m1.w2.d3.g13_resolve",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 — 3rd (B) resolved", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13** — the 3rd string settled onto fret 4, the **3rd (B)**. The tension is unwound.

Now link the two chords inside one bar. The first two beats are **G13sus4**, the last two are **G13**. <mark>That single moment melting from the 4th to the 3rd is today's result.</mark>

```json
{
  "id": "m1.w2.d3.sus_resolve",
  "type": "tab",
  "meta": { "title": "G13sus4 -> G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** First 2 beats G13sus4 (4th, C), last 2 beats G13 (3rd, B). One fret on the 3rd string melts down.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Warm your hand moving only the 3rd string back and forth, fret 5 ↔ fret 4. <mark>Get the half-step move of one finger into your body.</mark>

**10–20 min · Brain training (drawing tension → resolution)**
With the left hand only, silently move G13sus4 → G13. Check with your eyes that the **other three fingers stay fixed** and only the 3rd string moves.

**20–40 min · Real vamp (BPM 72)**
Repeat the four bars below. In bars 2 and 4, let the sus4 sound first, then melt into the 3rd. Chase by ear <mark>that sweetness of release after tasting the tension fully</mark>.

```json
{
  "id": "m1.w2.d3.sus_vamp_drill",
  "type": "tab",
  "meta": { "title": "Dm9 - G13sus -> G13 vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** Dm9 → (G13sus4 → G13) twice. Let the sus4 sound first, then melt into the 3rd.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds and listen back. Check whether the sus4 tension and the 3rd's resolution both ring clearly.

**Done when:** You can play the resolution smoothly — sounding the G13sus4 tension, then settling a half-step onto the 3rd (B).

## ④ Tips / Common mistakes

Here are just the mistakes that show up most in the **sus resolution**.

```json
{
  "id": "m1.w2.d3.melt_move",
  "type": "fretboard_diagram",
  "meta": { "title": "The melt — string 3 fret 5 to fret 4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "label": "4 (sus)", "role": "color" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ The 3rd string, **fret 5 (4th) → fret 4 (3rd)**. One finger settles a half-step down and melts.

- **The resolution isn't heard.** If you hit the sus4 too briefly, tension doesn't build. Ring the first two beats fully.
- **Other fingers move too.** Only the 3rd string should move. Keep the rest pressed like anchors.
- **You overshoot the 3rd.** Stop right at fret 4. Going down to fret 3 blurs the sound.
- **Too fast.** Drop to BPM 60 and find the melting feel first.
