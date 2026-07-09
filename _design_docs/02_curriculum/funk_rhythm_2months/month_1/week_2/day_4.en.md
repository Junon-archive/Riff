---
title: "Completing the ghost groove — making the guitar sound like a drum"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — Real notes are the snare, ghosts are the hi-hat

## ① Theory

The week's finish line. Today you complete a groove of alternating real notes and ghosts over a backing track, so that **<mark>one guitar sounds like a drum kit</mark>.**

Picture it: the even ghosts ("chick") are <mark>the hi-hat</mark>, and the occasional clear real note ("ta") is <mark>the snare</mark>. Lock those two together and, without any fancy chord changes, the guitar alone sounds like a whole rhythm section. Overlay a real drum track and the moment your "ta" stacks with the snare and your "chick" with the hi-hat, a spine-tingling groove appears.

To recap the week: a ghost note is <mark>a relaxed "chuck"</mark> (D1). Lay ghosts evenly and you get <mark>a hi-hat carpet</mark> (D2). Ration real notes on top and it becomes <mark>a groove</mark> (D3). Today you roll all three at once against a backing.

There's still only one small stab of a chord, yet it will already start to sound "funky." Next week you'll add **<mark>accents</mark>**, stabbing certain "ta"s harder to bring the groove alive further. If today, over the backing, you feel for the first time that "my guitar sounds like a drum," this week is a big success. In just two weeks you've stacked a left-hand drum onto the right-hand motor — you're coming along fast. It's still only one chord, yet you're already playing something that "sounds like funk."

## ② Visuals

A finished groove of alternating <mark>real notes (snare) and ghosts (hi-hat)</mark>. From the stab spot below, play both grooves via pressure on/off.

**High-E stab (review).** Same 2nd/3rd-string spot. Press for a real note (ta = snare), release for a ghost (chick = hi-hat).

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — ghost groove A (2 bars).** "Ta" on the beat head and the off-beat, the rest "chick." The skeleton of the most basic funk groove.

```json
{
  "id": "m1.w2.d4.groove_a",
  "type": "tab",
  "meta": { "title": "Ghost-note groove A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Over a backing track 4×+. Feel your "ta" line up with the snare.

**Example 2 — ghost groove B (2 bars).** A drum-like version with real notes mixed in more densely. "Ta" and "chick" alternate fast.

```json
{
  "id": "m1.w2.d4.groove_b",
  "type": "tab",
  "meta": { "title": "Ghost-note groove B — drum-like (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** Once easy, shift the "ta" spots into your own version. Check that the guitar sounds like a drum.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Lightly review <mark>the ghost/real contrast</mark> from D1–D3. Check that pressure on/off sits in your hand.

**10–20 min · Brain training (today's target = hearing it as a drum)**
Sing the pattern imagining "ta" as the snare and "chick" as the hi-hat. Picture the real notes landing on <mark>the snare spots (usually beats 2 and 4)</mark>.

**20–40 min · Real groove (Examples 1·2 / BPM 70)**
Repeat **Example 1** (groove A) over a backing 4× → then **Example 2** (groove B). The point is <mark>your "ta" locking with the snare and "chick" with the hi-hat</mark>.

**40–50 min · Record & reflect (recommended)**
Record two passes of two bars with the backing and check: <mark>are ghosts clean "chucks"</mark> / <mark>do real notes lock with the snare</mark> / <mark>does the guitar sound like a drum</mark>?

**Done when:** you can hold a groove of alternating real notes and ghosts over a backing track so the guitar sounds like a drum. (Week 2 complete!)

## ④ Tips / common mistakes

- **Real note off the snare.** If "ta" misaligns with the backing snare (usually beats 2 and 4), the groove wobbles. Stack "ta" on the snare.
- **Ghosts buried.** A weak background "chick" kills the contrast. Keep it clear like a hi-hat.
- **Packing it too full.** You need negative space to sound like a drum. Don't fill everything; leave room to breathe.
- **Practicing without a backing.** The groove truly comes alive stacked with drums. Always match it over a track.
