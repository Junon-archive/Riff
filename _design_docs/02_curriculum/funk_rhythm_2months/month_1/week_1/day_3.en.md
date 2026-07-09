---
title: "Up/down balance and empty picking — the hand never stops"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — Even where you don't strike, the hand keeps swinging

## ① Theory

The motor is spinning, so today we make it **even.** Two keys — the balance of down and up, and "empty picking."

For most people the downstroke is strong and clear while the upstroke is weak and vague. Then the 16ths limp along like "BOOM-tick-BOOM-tick." Good funk keeps down and up **as even as twins in volume and timing.** Close your eyes and play downs only, then ups only, and match their size.

The second key is **empty picking (ghost strokes).** You don't sound every 16th — at some spots you **pass without striking the strings.** Yet the right hand never stops here: it keeps swinging through the air, grazing the strings only where a note should sound. The rests in the notation are exactly those "the hand moves but the strings aren't struck" spots.

```json
{
  "id": "m1.w1.d3.downbeat_pick",
  "type": "tab",
  "meta": { "title": "Play the beat, empty-pick the rest (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

Why it matters: if the hand stops and restarts, the beat *will* drag. Keep the swing and merely choose the "strike spots," and your timing locks in tight. Confusion at first is normal — the hand must move on a spot where you don't play. Slowly, keep the hand swinging and count only the "strike spots" aloud. This feel is the foundation for next week's ghost notes. So don't blame yourself if you fumble today. This awkwardness of hand and head working apart is a gate everyone passes through.

## ② Visuals

Tell 'strike spots' from 'empty spots' with your eyes. In the notation below, notes are where you actually graze the strings; rests are empty-picking spots where the hand moves but the strings aren't struck.

**Example 1 — strike the beat only (1 bar).** Sound only the first sixteenth of each beat (the down); the other three are empty picking. The hand keeps swinging in 16ths.

```json
{
  "id": "m1.w1.d3.downbeat_pick",
  "type": "tab",
  "meta": { "title": "Play the beat, empty-pick the rest (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 68.** "Strike-rest-rest-rest" four times. Only four sounds, but the hand must swing sixteen times.

**Example 2 — beat and "and" (2 bars).** Sound the beat (down) and the "and" (up). It's an eighth-note feel laid over the 16th grid.

```json
{
  "id": "m1.w1.d3.eighth_feel",
  "type": "tab",
  "meta": { "title": "Down and up-beat (eighth feel, 2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 68.** "Strike-rest-strike-rest." Check by ear that down and up are twins in volume.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Play downs only 16×, ups only 16×, matching their volume. Then alternate down-up.

**10–20 min · Brain training (today's target = empty picking)**
Keep the hand swinging in 16ths but count only the "strike spots" aloud (e.g. "1...&..."). Train the feel of the hand not stopping while you pick out only the sounds.

**20–40 min · Real groove (Examples 1·2 / BPM 68)**
Repeat **Example 1** (strike the beat) 4× at BPM 68 → then **Example 2** (beat and "and"). The point is that the hand still swings on the rest spots.

**40–50 min · Record & reflect (recommended)**
Record and check: is the timing of struck notes accurate / did the hand stop on empty spots / are down and up even?

**Done when:** keeping the right-hand swing, you can pick out only the spots you want (empty picking) and play down and up at even volume.

## ④ Tips / common mistakes

- **Weak upstroke.** Playing only strong downs makes it limp. Make the up as clear as the down.
- **Stopping on rests.** Empty picking isn't "stopping the hand," it's "not striking the strings." Keep swinging.
- **Grazing too hard.** Accidentally catching strings on empty spots gets messy. Keep the left-hand mute on.
- **Not counting aloud.** By eye alone it gets confusing. Counting the "strike spots" out loud is far more accurate.
