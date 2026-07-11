---
title: "Intro and ending tag — opening and closing the tune's door"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — Announce the start, close the end for sure

## ① Theory

Yesterday you learned to tie off the 12 bars with a turnaround, <mark>the knot that loops them into the next lap</mark>. Today you dress up the beginning and the end: the **intro** that announces the start, and the **ending tag** that closes it for sure. Neither is a new skill — you're just rearranging the boogie you already have, so it sticks fast.

The intro is the signal that says "here we go." The most common blues intro is <mark>walking from I to V, like a turnaround, and pinning it in front of the tune</mark>. In A blues, play **one bar of A7 → one bar of E7** first, and the tension of that **E7** hands off naturally into the tune's first bar, A7. With just a two-bar intro, the song kicks off as if a band counted you in, even alone. So the intro is short, yet these two bars shape the tune's first impression.

The ending tag is the opposite. It's <mark>the flourish that clearly says the endlessly circling 12 bars stop right here</mark>. Give one last squeeze of tension on V (E7), then ring home — **A7** — big, once, "bang," and the tune closes cleanly. Four weeks ago even one chord stumbled; now you're grabbing the very doors that open and close the song. There is no rush at all in the speed. Today, cleanly attaching the intro just once is plenty.

Let's start with the intro. Two bars — one of A7, one of E7 — that open the door of the tune.

```json
{
  "id": "m1.w4.d2.intro",
  "type": "tab",
  "meta": { "title": "Intro — A7 to E7 into the tune", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** Bar 1 **A7**, bar 2 **E7**. These two bars open the door of the tune. The last E7 hands off to the first bar, A7.

## ② Visuals

Now the **ending tag** that closes the tune. <mark>Squeeze tension on V (E7), then ring home (A7) big to knot it off with "the end!"</mark>

```json
{
  "id": "m1.w4.d2.ending_tag",
  "type": "tab",
  "meta": { "title": "Ending tag — E7 to a big A7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** Bar 1 **E7** boogie, bar 2 **A7** in a whole-note "bang." This last A7 is the tune's full stop.

The intro opens with V, the ending closes with I. <mark>The same two chords play opposite roles at the start and the end</mark>.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 65. Loosen up with one bar of the **A7 boogie**. Check that <mark>the root rings clearly on every beat</mark>.

```json
{
  "id": "m1.w4.d2.warmup",
  "type": "tab",
  "meta": { "title": "A7 boogie warmup — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65, shuffle.** One bar of A7 boogie. Over the 5th-string root, walk 5→6→b7→6.

Now practice the seam where the intro's E7 hands into the tune's first bar, A7.

```json
{
  "id": "m1.w4.d2.intro_to_top",
  "type": "tab",
  "meta": { "title": "Intro E7 into the top (A7)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, shuffle.** Bar 1 **E7** (end of intro), bar 2 **A7** (start of tune). The V's tension releasing home.

**10–20 min · Brain training (today's target = the opening door, the closing door)**
Picture that the intro **opens with V** and the ending **closes with I**. <mark>The same chord changes its role depending on where it sits.</mark>

**20–40 min · Real intro + top of the tune (BPM 80)**
Attach the two-bar intro and carry it <mark>into the tune's first bar without a break</mark>.

**40–50 min · Recording / self-feedback (recommended)**
Record the two-bar intro: <mark>does the starting signal come through clearly</mark>.

**Today's completion criteria:** You can attach the two-bar intro (A7-E7) and move smoothly into the tune's first bar.

## ④ Tips / Common mistakes

The common mistakes in intros and endings. Close the last **A7** faintly and it won't feel finished.

```json
{
  "id": "m1.w4.d2.final_chord",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 — the home chord to end big", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **End big, at home (A7).** Ring that last hit for sure and the tune closes. The open A on the 5th string is the root.

- **The intro runs too long.** Two bars is enough; longer and the tune sags.
- **The ending A7 is weak.** Ring the last one out big, with confidence.
- **The seam between intro and tune breaks.** Go straight from E7 to A7 with no gap.
- **The shuffle collapses.** Fussing over the decoration flattens the long-short. Keep the beat with your foot.
