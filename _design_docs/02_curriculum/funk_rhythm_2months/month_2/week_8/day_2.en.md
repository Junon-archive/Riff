---
title: "Building the cutting part — three strings + ghosts + accents"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — Build the cutting block that becomes the 'verse'

## ① Theory

From today you build parts in earnest. The first is a **chord-based cutting part.** Onto Week 5's three-string triad cutting, lay Weeks 2–3's ghosts and accents to complete a block that fits the challenge track.

The goal is a **repeatable four-bar block** — like a 'verse,' a solid cutting groove you can loop without getting bored. You've learned all the material: cut only the top three crisply (killing the lower strings with the left mute), fill the gaps with ghosts, and stab accents on the beat 2/4 snare spots. When these three layers roll over three strings, one guitar alone becomes a full rhythm part.

What matters here is completeness. This isn't experiment but making **one finished block**, so polish four bars unbroken, with no lower-string noise, and the accent locked tight to the snare. The more solid this block, the more the contrast with tomorrow's riff part comes alive.

Of course it won't be perfect from the start. Lower strings leak while cutting, accents drag, the fourth bar wobbles. Of course. Today, using the example as a skeleton, polish it bit by bit to complete one cutting block "you can keep looping." Once one finished part is in your hands, you'll feel that making a tune is closer than you thought.

## ② Visuals

The cutting part that becomes the verse. Lay ghosts and accents on the three-string triad to build a repeatable block.

**E major triad (cutting).** Cut only these three strings, mute the lower ones. Root/chord tones = blue; accents green on the snare.

```json
{
  "id": "m2.w8.d2.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (cutting, top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
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

**Example 1 — cutting build 1 (1 bar).** Cutting with accents on beats 2 and 4. The skeleton of the basic block.

```json
{
  "id": "m2.w8.d2.cut1",
  "type": "tab",
  "meta": { "title": "Cutting groove — build 1 (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78.** Over the track 4×. Check the accent locks with the snare.

**Example 2 — cutting build 2 (2 bars).** Real notes, ghosts, and accents denser. Extend to four bars to complete the 'verse' block.

```json
{
  "id": "m2.w8.d2.cut2",
  "type": "tab",
  "meta": { "title": "Cutting groove — build 2 (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78.** Link two bars twice for four. Polish it unbroken and clean into your own cutting part.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Drop ghosts and accents onto three-string cutting to warm up. Check the lower-string mute.

**10–20 min · Brain training (today's target = designing the cutting block)**
Listening to the track, design the cutting part's accent spots and ghost density. Sketch a four-bar structure.

**20–40 min · Real groove (Examples 1·2 / BPM 78)**
Set the skeleton with **Example 1** (cutting build 1) → extend **Example 2** (build 2) to four bars and complete it over the track. Polish it to loop.

**40–50 min · Record & reflect (recommended)**
Record the cutting block and check: only three ring crisply / does the accent lock with the snare / are four bars unbroken / does it not get boring?

**Done when:** with ghosts and accents on three-string cutting, you can complete a repeatable four-bar cutting part (verse) over the track.

## ④ Tips / common mistakes

- **Lower-string noise.** As cutting gets complex the mute loosens. Left mute to the end.
- **Accent drags.** The accent gets vague by the fourth bar. Keep minding beats 2 and 4.
- **Packing too full.** You need space to loop without boredom. Leave room to breathe with ghosts.
- **Experiment without completion.** Today the goal is a 'finished block.' Pick one and polish it.
