---
title: "Building the riff part — single notes + staccato"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — Build a riff that contrasts the cutting, and join them

## ① Theory

Yesterday you completed the cutting part (verse). Today you complete the second part — a **single-note riff** — and **join it** to yesterday's cutting part.

Onto Week 6's single-note line, lay Week 7's staccato to make a clear riff that converses with the bass. The key here is 'contrast.' Where yesterday's cutting was a broad, shimmering chord block, today's riff is a pointed single-note line. If cutting is the 'verse,' this riff is the 'hook' or 'bridge' — a part giving the tune a different color and tension. Cutting notes short with staccato makes the line crisper and tighter.

And today's real mission is **joining the two parts.** Cutting 4 bars → riff 4 bars → cutting again, and alternating the two blocks already creates a 'song structure.' Join them so the beat doesn't wobble at the switch and the cutting/riff contrast rings clearly. This is the moment you step past accompaniment into 'composing.'

Joining the two smoothly is hard at first — especially moving from chords (cutting) to single notes (riff), the hand shape and mute change sharply. Of course. Today, rather than a perfect transition, the goal is to set the tune's skeleton: "two parts that contrast and connect." Once this skeleton stands, tomorrow's final recording is just capturing this flow in one take.

## ② Visuals

A single-note riff contrasting the cutting. Cut clearly with staccato and join it to yesterday's cutting part.

**E note box (single-note).** A single-note line on the 5th/4th strings. Blue = root/5th. Cut short with staccato to keep the riff clear.

```json
{
  "id": "m2.w8.d3.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (single-note, strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**Example 1 — riff building (1 bar).** A single-note line cut short with staccato. A clarity that contrasts the cutting.

```json
{
  "id": "m2.w8.d3.riff1",
  "type": "tab",
  "meta": { "title": "Single-note riff, staccato (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78.** Over the track 4×. Check the staccato keeps the line clear and tight.

**Example 2 — long-short riff (2 bars).** A riff mixing staccato and legato. Once easy, alternate and join with the cutting part.

```json
{
  "id": "m2.w8.d3.riff2",
  "type": "tab",
  "meta": { "title": "Riff with long-short mix (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 4, "fret": 7, "duration": "quarter", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 4, "fret": 7, "duration": "quarter", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]}
  ]}
}
```

▶ **BPM 78.** Cutting 4 bars → this riff 4 bars. Keep the beat steady across the part switch.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Lay staccato onto the single-note line to warm up. Lightly practice the cutting↔single-note hand change.

**10–20 min · Brain training (today's target = riff + joining)**
Design the riff part and sketch how to join it with yesterday's cutting (cutting→riff→cutting).

**20–40 min · Real groove (Examples 1·2 / BPM 78)**
Complete **Examples 1·2** (riff) over the track, then **alternate and join with yesterday's cutting part** into an eight-bar structure. Keeping the beat across the switch is the key.

**40–50 min · Record & reflect (recommended)**
Record the joined cutting+riff and check: is the riff clear / is the two-part contrast audible / does the beat hold at the switch?

**Done when:** you can complete a single-note riff with staccato and join it to yesterday's cutting part to make a song structure (verse + hook).

## ④ Tips / common mistakes

- **Cutting and riff don't contrast.** Too similar and the structure dies. Cutting broad, riff pointed — contrast them.
- **Beat wobbles at the switch.** Chords→single notes tends to hesitate. Decide the switch point in advance.
- **Staccato is vague.** The riff must be cut short to be tight. Kill the ring right after playing.
- **Not joining, kept apart.** Today's core is 'joining.' Be sure to alternate the two parts.
