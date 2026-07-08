---
title: "Only three strings ring — killing the lower strings is the battle"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — The hard part isn't making sound, it's not making it

## ① Theory

The real difficulty of high three-string cutting isn't making sound — it's **stopping the sound.** However wide the right hand sweeps in 16ths, the 4th, 5th, and 6th strings must never ring.

Here's the problem. To cut crisply you must swing the right hand wide, and that naturally grazes the lower strings too. The pro's secret here is the **left-hand mute.** With the side of the triad-holding fingers and the tip of the index, you lightly cover the unused lower strings and pre-kill them. Then even if the right hand sweeps all six, only the top three actually ring. Right hand crisp, left hand covering firmly — this division of labor is the core of clean cutting.

This actually makes it easier. The right hand no longer has to mind "only three strings" and can sweep wide. The left-hand mute lifts the burden of aim. The secret to why cutting funk sounds so effortlessly crisp lies exactly in this left-hand mute.

Having the left hand both hold the chord and mute is overwhelming at first. Especially covering the 6th with the index tip and the 4th/5th with the side of the triad fingers is unfamiliar. Of course. Today, even if it's not perfect, just feeling that lower-string noise "dropped sharply" when you cut wide is big progress. Once this left-hand mute sits in your hand, the right hand can actually swing freely and crisp. The firmer the covering hand, the freer the striking hand.

## ② Visuals

Only three strings ring under a wide cutting stroke — the left-hand mute kills the lower strings. Right hand crisp, left hand firm.

**E major triad (review).** Only these three ring; mute the 4/5/6 firmly with the side of the left fingers and the index tip.

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

**Example 1 — mute-centered cutting (1 bar).** Ring the triad sparingly, mostly mute-cut. The key: only three ring even sweeping wide.

```json
{
  "id": "m2.w5.d3.mute_1bar",
  "type": "tab",
  "meta": { "title": "Mute-heavy triad cutting (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** Swing the right hand deliberately wide and check the lower strings don't sound, 4×.

**Example 2 — wide cutting (2 bars).** Real notes sparse, mute-cuts dense. Right hand big, sound only three strings.

```json
{
  "id": "m2.w5.d3.mute_2bar",
  "type": "tab",
  "meta": { "title": "Wide cutting, three strings only (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** Keep the left-hand mute firm, 4×. Once easy, move the triad to another spot to vary it.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Holding the triad, cover the lower strings with the left hand and check only three ring even sweeping all six.

**10–20 min · Brain training (today's target = the left-hand mute)**
Sweeping the right hand wide, burn in the feel of killing the lower strings with the left mute alone. Confirm the index-tip (6th) and finger-side (4/5) positions.

**20–40 min · Real groove (Examples 1·2 / BPM 72)**
Repeat **Example 1** (mute cutting) 4× at BPM 72 → then **Example 2** (wide cutting). The point is only three ring even sweeping wide.

**40–50 min · Record & reflect (recommended)**
Record and check: is there no lower-string noise / do the three ring crisply / is the right hand crisply wide?

**Done when:** with the lower strings killed by the left mute, you can cut only the top three cleanly even sweeping the right hand wide.

## ④ Tips / common mistakes

- **Lower strings keep leaking.** The left mute is weak. Lay the index tip lightly across the 6th to cover it.
- **Triad dies from muting.** Too much mute force pressed the chord notes too. Top three clear, lower strings only lightly.
- **Right hand narrows.** Shrinking away from the lower strings makes cutting stiff. Trust the left and sweep wide.
- **Speed first.** A firm mute lets you go fast. Slow, zero lower strings.
