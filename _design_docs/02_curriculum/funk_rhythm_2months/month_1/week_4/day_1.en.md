---
title: "E9 — funk's emblem, and the color the 9th gives"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — Finally a real chord: grabbing E9

## ① Theory

For three weeks we dug only into the "rhythm" of the right and left hands. The sounds were mostly dead "chicks" and "chucks." Today you finally grab a **real chord** — funk's emblem, **E9.**

E9 is an E dominant 7 (E·G#·D) with a **9th (F#)** added on top. That 9th is exactly what gives funk its signature "shimmering, sophisticated" color — the note marked yellow in the diagram below is the star. The root sits at the 5th string, 7th fret; press the 5th and 3rd strings lightly with your index. Mute the 6th and 1st strings firmly.

Today's mission is to **re-lay Week 1's 16th motor onto this E9.** You're finally pouring the fuel of "real sound" into the rhythm engine you built over three weeks. Now, every time the right hand swings, it's not a dead scratch but E9's sophisticated chord that rings. You'll already feel a strong "this is funky."

Pressing four strings at once will feel stiff at first, and some strings may not sound. Of course — it takes a few days for the fingers to settle. Today, focus less on a perfect chord and more on keeping the right-hand motor from stopping while holding E9. The magic of funk — carrying minutes on one chord — begins here. If the last three weeks were "rhythm practice," from today it's "music." You only grabbed one E9, yet feel how the air in the room changes.

## ② Visuals

Today's star, E9. Yellow is the 9th (F#) — the note that makes funk's color.

**E9 (the funk chord).** Root at 5th string, 7th fret. Blue = root/chord tones (3rd, b7), yellow = the 9th. Mute the 6th and 1st strings firmly.

```json
{
  "id": "m1.w4.d1.e9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E9 — the funk chord (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 6, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 7, "finger": 2, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Example 1 — E9 16th motor (1 bar).** Sound E9 on each beat's head, ghosts elsewhere. Week 1's motor with a real chord on top.

```json
{
  "id": "m1.w4.d1.e9_motor",
  "type": "tab",
  "meta": { "title": "E9 16th motor (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** Hold E9 and keep the right hand swinging. Check the chord rings clearly on each beat, 4×.

**Example 2 — E9 on the off-beat (2 bars).** Sound the chord on the '&', not the beat. A slightly delayed E9 pulls in a funky way.

```json
{
  "id": "m1.w4.d1.e9_offbeat",
  "type": "tab",
  "meta": { "title": "E9 on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** Enjoy the chord landing off the beat, 4×. Let the rest flow as ghosts.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Grab and release E9, checking all four strings ring cleanly. Confirm the 6th/1st-string mutes too.

**10–20 min · Brain training (today's target = the E9 shape)**
Holding E9, close your eyes and pluck each string to check the sound. Find which string dies and adjust your finger angle.

**20–40 min · Real groove (Examples 1·2 / BPM 66)**
Repeat **Example 1** (E9 motor) 4× at BPM 66 → then **Example 2** (off-beat E9). The key is the right-hand motor never stopping while holding E9.

**40–50 min · Record & reflect (recommended)**
Record and check: do E9's four strings ring cleanly / are the 6th/1st muted / did the right hand never stop?

**Done when:** holding a clean E9, you can keep the 16th motor going and ring the chord clearly on each beat.

## ④ Tips / common mistakes

- **A string dies.** Your finger angle flattened or touched another string. Stand the fingertip up to catch each string.
- **6th/1st strings ring.** E9 is four strings only. Ringing extras get messy. Mute with the index tip and palm.
- **Motor stops for the chord.** Don't let the right hand freeze while minding the chord. Keep swinging.
- **Greed for speed.** The chord must be clean for the groove to live. Slow, all four strings ringing.
