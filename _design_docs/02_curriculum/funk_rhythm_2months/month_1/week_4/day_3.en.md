---
title: "Accents on E9, plus a spoonful of m7"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — One chord, yet accents complete the groove

## ① Theory

Now you apply Week 3's **accents** to E9. There's only one chord, E9, yet accents alone can complete a full funk groove.

Lay ghosts for the background (hi-hat), ring the real E9 here and there (kick), and stab one or two spots hard for the accent (snare). All three layers come from one chord, so the tune rolls on rhythm alone without changing chords. As yesterday, the key is the accent locking with the backing snare (beats 2 and 4).

To this, today you add a spoonful of **Em7.** If E9 is a bright, tense dominant, Em7 is a dark, soft minor (diagram below). When a one-chord jam gets a little dull, slipping from E9 to Em7 now and then changes the color dramatically. Both have their root at the 5th string, 7th fret, so the hand position barely moves — just shift a couple of inner fingers. This one small change gives a flat repetition room to breathe.

Juggling two chords plus accents will keep your hands busy. That's fine. Em7 is a "taste" today. You don't need to switch perfectly; if your E9 groove is solid, that's enough. Just feel "oh, there's this color too" with Em7. Tomorrow's final jam, you'll draw on it only as much as you like. Two chords and a few accents — that's all the material, yet it will already start to sound like the accompaniment of a real funk tune.

## ② Visuals

Accents (green) over E9, plus Em7 to change color. Both chords have their root at the 5th string, 7th fret.

**Em7 shell (for changing color).** Root at the same 5th string, 7th fret as E9. Just R·b3·b7 — a dark, soft minor. Alternate with E9 to shift color.

```json
{
  "id": "m1.w4.d3.em7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 shell (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — E9 + accent (1 bar).** Ghost background, E9 real note on beats 1 and 3, an accent (green) on the '&' of 2 and 4. The accent locks with the snare.

```json
{
  "id": "m1.w4.d3.e9_accent1",
  "type": "tab",
  "meta": { "title": "E9 + accent on the snare (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Only the green spot hard. Feel it stack with the backing snare, 4×.

**Example 2 — E9 accent groove (2 bars).** A variation with the accent pulled. Once easy, slip to Em7 mid-way to widen the color.

```json
{
  "id": "m1.w4.d3.e9_accent2",
  "type": "tab",
  "meta": { "title": "E9 accent groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** After 4× on E9, play the same groove once or twice on Em7. Feel the color difference.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Drop accents onto the E9 groove to warm up dynamics. Lightly practice the E9↔Em7 change too.

**10–20 min · Brain training (today's target = accent + chord color)**
Set the accent spots to the backing snare, and picture in advance where you'll change color between E9 and Em7.

**20–40 min · Real groove (Examples 1·2 / BPM 70)**
Repeat **Example 1** (E9 + accent) 4× at BPM 70 → move to **Example 2** and, once easy, mix in Em7. The key is the accent locking with the snare.

**40–50 min · Record & reflect (recommended)**
Record and check: does the accent lock with the snare / is the E9↔Em7 color change audible / are the three layers distinct?

**Done when:** over the one chord E9, you can complete a groove with accents and occasionally switch to Em7 for a different color.

## ④ Tips / common mistakes

- **Big move for the Em7 change.** The root is the same spot. Don't move the whole hand — just the inner fingers.
- **Accent off the snare.** Exactly on beats 2 and 4. Miss it and the groove floats.
- **Motor breaks on the change.** Don't let the right hand freeze switching to Em7. Keep swinging.
- **Perfectionism about Em7.** It's a taste today. A solid E9 groove is enough.
