---
title: "A line crossing two strings — the mute stays"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — Change strings, keep the silence

## ① Theory

Yesterday you drew a line on one string. Today it crosses **two strings, the 5th and 4th.** With two strings open, the line sings across a wider range.

The core difficulty: when the line moves from the 5th to the 4th string, you must **quickly kill the 5th you just played and ring only the 4th.** Otherwise the two notes overlap and get messy. The feel of moving your finger to the new string while simultaneously cleaning up the one you just played — that's the real skill of a single-note line. The left hand always opens only "the one string ringing now" and covers the rest.

Today's material is the 5th- and 4th-string notes of the E pentatonic box (yesterday's map). Add the 4th string's 4th and 5th to the 5th string's R and b3, and you can build a line rising and falling like E-G-A-B. A bass-line-or-riff-sounding, thoroughly funky line.

Crossing strings while minding the mute keeps the hands busy at first. Especially just after a string change, the previous string tends to ring on with a "hum." Of course. Today, even if the line is slow, focus on the previous string being cleaned up on every change. Once this settles, your line widens freely to two, three strings. A line once trapped on one string starts to sing across the neck. With just two strings open today, the melodies you can express multiply. Two strings are the stepping stone that soon becomes three, then four.

## ② Visuals

A line crossing the 5th and 4th strings. Killing the previous string on the change is key. Recheck the note positions with the map.

**E note box (review).** Today add the 4th string (4th, 5th) to the 5th string (R, b3). The mute stays even across the change.

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**Example 1 — two-string line (1 bar).** E(5th)→G(5th)→A(4th)→B(4th) up and back down. Clean up behind you the instant the string changes.

```json
{
  "id": "m2.w6.d2.cross_1bar",
  "type": "tab",
  "meta": { "title": "Two-string line, 5th<->4th (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** Check the previous string doesn't ring on across the change, 4×. Keep the line clearly connected.

**Example 2 — cross riff (2 bars).** A riff crossing two strings. A funk line that sounds like a bass-line.

```json
{
  "id": "m2.w6.d2.cross_2bar",
  "type": "tab",
  "meta": { "title": "Crossing-string riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** Once easy, change notes into your own two-string riff. Keeping the mute is the point.

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60–70. Pluck 5th↔4th alternately, checking the previous string dies on the change. Keep the other strings muted.

**10–20 min · Brain training (today's target = string change + mute)**
Burn in the 5th/4th notes with the map. Slowly repeat moving the finger to the new string while covering the previous one.

**20–40 min · Real groove (Examples 1·2 / BPM 72)**
Repeat **Example 1** (two-string line) 4× at BPM 72 → then **Example 2** (cross riff). A clean behind-you on the string change is the key.

**40–50 min · Record & reflect (recommended)**
Record and check: does the previous note not ring on across the change / is the line clearly connected / is there no noise from the other strings?

**Done when:** you can play a line crossing the 5th and 4th strings clearly, keeping the mute even as strings change.

## ④ Tips / common mistakes

- **Previous string rings on.** Cover the previous string quickly with a finger on the change. Overlap is messy.
- **Line breaks.** The right hand hesitates on the change. Keep swinging; only shift the aim.
- **Notes not clear.** You didn't aim the new string accurately. One string at a time, clear.
- **Too fast.** The string change must be accurate for the line to live. Slow, clean up behind you firmly.
