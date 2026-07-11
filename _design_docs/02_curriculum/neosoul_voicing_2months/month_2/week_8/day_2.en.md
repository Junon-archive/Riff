---
title: "Song form — Dm9 comping + G13 + smear fill (2 bars)"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — Song form: widening to two bars

## ① Theory

Day two. You widen yesterday's one bar into the **song form**. Connect the neo-soul signature vamp **Dm9 → G13** across two bars. <mark>Bar 1 is Dm9 comping, bar 2 caps G13 with a smear fill.</mark>

**G13** is a hand shape with a root on the 6th string fret 3, and b7·3·13 stacked on top. Its **hand position differs** from Dm9 — that move is today's gateway. <mark>When the two chords connect smoothly, the song starts to flow.</mark>

The end of bar 2 closes with the **b3→3 smear fill**. One line sliding over the tail of G13 ties the two bars into one. <mark>The fill opens the door to the next repeat.</mark>

```json
{
  "id": "m2.w8.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ The G13 comping grip: 6th string fret 3 (R) with b7·3·13 stacked on top.

## ② Visuals

**Dm9 comping + G13 + smear fill**, the two-bar form of the song to come. <mark>Lay it back in bar 1, then tint and slide in bar 2.</mark>

```json
{
  "id": "m2.w8.d2.two_bar_form",
  "type": "tab",
  "meta": { "title": "Two-bar song form", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72, swing 16.** Bar 1 Dm9 laid-back comping → bar 2 G13 then **b3→3 smear fill**. The two bars connect like one song.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
At **BPM 60**, grip Dm9 and **G13** alternately. <mark>Let your body memorize the move between the two shapes first.</mark>

**10–20 min · Brain training (chord change)**
Isolate just the **Dm9 → G13** move and repeat it slowly. Let your fingers prepare the next spot in advance.

**20–40 min · Real two bars (BPM 72)**
Loop the **two-bar form** above. Firm up the chord change with the transition drill below, then join it. <mark>When the beat doesn't wobble at the change, the form stands.</mark>

```json
{
  "id": "m2.w8.d2.transition_drill",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 transition drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** Move Dm9 ↔ G13 one beat each, big. Fingers plant the next spot ahead of time.

**40–50 min · Recording / self-feedback (recommended)**
Record and listen back. Check that the two bars flow like one song without a break.

**Done when:** You can join the two-bar song form without a break at BPM 72, swing 16 — including the Dm9 → G13 change and the b3→3 smear fill.

## ④ Tips / Common mistakes

Just the mistakes that show up most as you join the two bars.

```json
{
  "id": "m2.w8.d2.fill_check",
  "type": "tab",
  "meta": { "title": "Smear fill check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ Isolate the smear fill and draw the b3→3→5→b7 line slowly.

- **You collapse at the change.** The beat wobbles easily where the chord changes. Learn the move spot into your body.
- **The fill smears.** Draw b3→3→5→b7 clearly, opening it like a door into the bar.
- **G13's lower strings leak.** Keep only the 6th string root clear and lightly mute the unused strings.
- **You raise speed first.** Firm up the change and fill at BPM 60, then raise to 72.
