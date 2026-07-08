---
title: "Change the color with one finger — minor and inversions"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — Same three strings, one finger changes the color

## ① Theory

The E major triad you grabbed yesterday — today you change its whole color by **moving just one finger.**

The first change is **minor.** Drop the 2nd string by exactly one fret (9→8) and the bright E major becomes a dark E minor. The 3rd fell a half step to a b3 (green in the diagram). This moment where one finger turns bright into sad is the very principle you saw in last month's chord building. Within these narrow three strings, that switch is alive just the same.

The second is **inversion.** The same E major, but reorder the three notes (which one sits on top) and the feel changes. Today you also taste a low 2nd-inversion shape — the 5th dropped to the bottom instead of the root. Same chord, yet it shimmers with a slightly different color. That such varied expressions come from three narrow strings is the true charm of triad cutting.

Juggling several shapes can confuse the hand. Of course. Today, don't try to memorize them all; just firmly grab "one fret on the 2nd string flips bright and dark." If you can slip that switch in mid-cutting, your one-chord jam suddenly becomes far more colorful. You're not memorizing a new chord — just moving one finger from a shape you know, so there's no burden. Bright or dark: now it's your choice.

## ② Visuals

Same three strings, three colors from different fingers. Green = the changed note (b3). Contrast E minor and the 2nd inversion.

**E minor triad.** From yesterday's major, only the 2nd string 9→8 (green = b3). Bright into dark — one finger's difference.

```json
{
  "id": "m2.w5.d2.emin_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E minor triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 8, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**E major, 2nd inversion.** The same E major but low, the 5th dropped to the bottom. Moving position shifts the color slightly.

```json
{
  "id": "m2.w5.d2.emaj_inv",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad — 2nd inversion (5th in bass)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" }
  ]}
}
```

**Example 1 — color-changing cut (1 bar).** Cut the same rhythm major, then minor. Just change one fret on the 2nd string.

```json
{
  "id": "m2.w5.d2.color_1bar",
  "type": "tab",
  "meta": { "title": "Triad cutting — major/minor color (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Cut the first half major, the second half minor, and hear the color difference. 4×.

**Example 2 — major → minor (2 bars).** Bar 1 major, bar 2 minor. The same cutting, a completely different expression.

```json
{
  "id": "m2.w5.d2.color_2bar",
  "type": "tab",
  "meta": { "title": "Major then minor (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Once easy, move to the inversion shape too. Pick by ear which color you like.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Alternate E major↔minor with one fret on the 2nd string. The inversion shape lightly too.

**10–20 min · Brain training (today's target = the color switch)**
Keeping the cutting, practice slipping major↔minor. Burn in the feel of moving only the 2nd-string finger.

**20–40 min · Real groove (Examples 1·2 / BPM 70)**
Repeat **Example 1** (color-changing cut) 4× at BPM 70 → then **Example 2** (major → minor). Once easy, move to the inversion to vary it.

**40–50 min · Record & reflect (recommended)**
Record and check: is the major↔minor color clearly distinct / does the cutting stay on three strings / is the change smooth?

**Done when:** within the same three strings, you can switch major↔minor with one finger and taste the inversion shape for a different color.

## ④ Tips / common mistakes

- **Lower strings leak on the change.** Moving a finger loosens the mute. Keep the muting fingers on the lower strings.
- **Cutting breaks on the change.** Don't let the right hand freeze changing shape. Keep cutting; only the left moves.
- **Perfectionism about inversions.** It's a taste today. The major↔minor switch is the core.
- **Changing too often.** Color is most effective rationed. Once or twice a tune is enough.
