---
title: "The high three strings — funk's shimmering sound"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — Why funk lives on the thin three strings

## ① Theory

That shimmering, crisp cutting sound of funk never comes from thick six-string chords. It comes only from the thin high strings — the **1st, 2nd, and 3rd.**

The reason is simple. The high strings are light and bright, so cutting them gives a crisp sound like rolling glass beads. The low strings, by contrast, are dull and heavy, and won't produce funk's signature sparkle. So pros kill the 4th, 5th, and 6th strings entirely and stab only the top three. It's like dotting with a fine pen instead of painting a wall with a broad brush.

Today's first shape is the **E major triad** (three strings). The root is on the 3rd string, with the 3rd and 5th stacked above (diagram below). Just three notes, three strings. This week's real battleground is the **control to hit that narrow target (three strings) accurately.** It takes far more precise aim than sweeping all six.

Hitting only the three strings while not touching the lower ones is, of course, hard at first — the neighbors keep leaking. That's normal. Today it's fine if the sound is a little messy; just grab the feel of landing the right hand cleanly on the top three. This sound is the legendary cutting-funk tone typified by Nile Rodgers. It's surprising, the first time you play it today, that three thin strings make a sound this sophisticated. Think of it as the first day of breaking the habit of gripping all six strings.

## ② Visuals

Today's shape, the E major triad. Use only the 1st/2nd/3rd strings and mute the 4th/5th/6th firmly (✕).

**E major triad (high three strings).** The 3rd string is the root (R), with the 3rd and 5th above. Kill the 4th/5th/6th strings.

```json
{
  "id": "m2.w5.d1.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**Example 1 — three-string triad cutting (1 bar).** Ring the triad cleanly on each beat's head, mute-cut the rest. Only the top three, crisp.

```json
{
  "id": "m2.w5.d1.cut_motor",
  "type": "tab",
  "meta": { "title": "3-string triad cutting (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** Land the right hand on the three strings only, 4×. Check by ear the lower strings don't leak.

**Example 2 — off-beat cutting (2 bars).** Ring the triad on the '&', not the beat. A slightly delayed cut pulls in a funky way.

```json
{
  "id": "m2.w5.d1.cut_offbeat",
  "type": "tab",
  "meta": { "title": "Triad cutting on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** Enjoy the off-beat cut, 4×. Let the rest flow muted.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Hold the E major triad and cut in 16ths. Focus-check that the lower strings (4/5/6) don't leak.

**10–20 min · Brain training (today's target = three-string aim)**
Eyes closed, practice grazing only the top three strings with the right hand. Burn in the feel of landing cleanly on the three without touching the lower ones.

**20–40 min · Real groove (Examples 1·2 / BPM 68)**
Repeat **Example 1** (three-string cutting) 4× at BPM 68 → then **Example 2** (off-beat cutting). Once easy, move the triad to another spot to vary it.

**40–50 min · Record & reflect (recommended)**
Record and check: did only the 1/2/3 strings ring cleanly / is there no lower-string noise / is the cutting crisp?

**Done when:** with the E major triad, you can hit only the top three strings accurately and hold a 16th cut with no lower-string noise.

## ④ Tips / common mistakes

- **Lower strings leak.** The right hand swept too wide or the left mute is weak. Cover the 4/5/6 firmly.
- **Not all three ring.** The right hand didn't graze all three. Adjust the angle to land on all three.
- **Arm instead of wrist.** Cutting is also a wrist snap. The same feel as Week 1.
- **Greed for speed.** The three-string aim must be accurate for the sound to live. Slow, clean.
