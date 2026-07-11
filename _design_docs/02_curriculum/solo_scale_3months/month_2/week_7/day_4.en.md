---
title: "Chord-Tone-Only Backing Jam + Recording Analysis — Checking Your 3rd-Landing Accuracy"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
lang: en
---

# Day 4 — This Week's Wrap-Up: Sing with Chord Tones Alone, Then Grade Yourself with the Recording

## ① Theory / Explanation

Here's why we're doing this today — you spent the whole week drawing the maps (Day 1–2) and learning connections (Day 3), so now it's time to **<mark>prove it with actual playing</mark>**. There's barely any new concept today. Instead, over an Am–C backing track, you'll build something that actually feels like a solo **<mark>using chord tones alone</mark>**, record it, and **grade yourself.** Since there's no instructor standing next to you like in a paid lesson, today the recording is your instructor.

There's exactly one grading criterion: **did you properly <mark>land on that chord's 3rd</mark> every time the chord changed?** C during Am sections, E during C sections. Everything from this week converges into this one line. Flashiness, speed, number of notes — none of it matters. Today you'll hear with your own ears how surprisingly "musical" just three chord tones (plus landing on the 3rd) can sound.

Here's a tip in advance: a good solo isn't about playing lots of notes, it's about **<mark>sitting well.</mark>** Two or three notes per chord, ending with a little vibrato shimmer on the 3rd. That restraint is what actually sounds professional. It's also the bridge to next month (modes and phrasing).

## ② Visual Reference

Today's "jam home base" — inside one box spanning frets 5–8, all of Am's and C's chord tones are gathered together. The green highlights are <mark>the landing targets for both chords' 3rds</mark> (**C** and **E**). You can cover the whole tune using just this small area.

```json
{
  "id": "m2.w7.d4.jam_home_base_box",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am/C jam home base (5th-position box), 3rd targets C & E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "C:5(G)", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "C:5(G)", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true }
    ]
  }
}
```

This is a sample lick that sums up the whole week. Am | C | Am | C, four measures — <mark>landing on that chord's 3rd (C or E)</mark> each time. Since it only moves inside the home-base box, your hand stays relaxed.

```json
{
  "id": "m2.w7.d4.chord_tone_jam_lick",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Am|C|Am|C chord-tone jam - land the 3rd every change",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ Today's Practice (50-minute routine)

**0–10 min · Warm-up (BPM 72)**
With the metronome at 72, repeat the 4-measure sample lick above. <mark>Hold each measure's last note (the 3rd)</mark> a touch longer and more clearly. Re-cement the timing of switching to the 3rd at the chord changes — measures 1→2 and 3→4.

**10–20 min · Brain training (instant 3rd recall in the home-base box)**
Turn off the metronome. Inside the home-base box (frets 5–8), <mark>instantly fret C</mark> (string 3 fret 5 · string 6 fret 8 · string 1 fret 8) when you call out "Am's 3rd!" and E (string 5 fret 7 · string 2 fret 5) when you call out "C's 3rd!" Test yourself by calling these out randomly with your eyes closed. You pass if your hand reaches the correct 3rd within 3 seconds.

**20–40 min · Real-world feel — Am–C backing (BPM 72)**
Put on an "Am C vamp backing track" and take a free solo using **<mark>chord tones only (A·C·E / C·E·G).</mark>** Keep passing scale tones to a minimum. Rule: 2–4 notes per chord, and the last one is **<mark>always that chord's 3rd.</mark>** Start in the home-base box, and if you've got room, try landing on the other 3rd positions you found back on Day 3.

**40–50 min · Record & self-grade (strongly recommended today)**
Record 1–2 minutes of your jam with any recorder (a voice memo app works fine), then <mark>grade yourself</mark> on these three points.
1. **3rd-landing rate** — did you settle on the 3rd (C/E) at every chord change? How many hits out of how many tries?
2. **Timing** — did the switch line up exactly with the chord change, or was it late?
3. **Ending treatment** — did you let the 3rd ring with vibrato, or cut it off flat?
If anything's unclear, slow down playback and re-locate the landing note on the fretboard. Note down the one weakest item for next week.

**Today's goal:** Solo for a full minute or more on the Am–C backing using only chord tones, no getting stuck — and when you play back the recording, your ear confirms a 3rd-landing at most of the chord changes.

## ④ Tips / Common Mistakes

- **Playing too many notes.** Restraint is today's virtue. Two or three notes per chord, ending on the 3rd. Don't be afraid of leaving space — it's the seed for next month's phrasing.
- **Skipping the recording playback.** While you're playing, everything can feel like it went fine — but the recording is honest. Off landings, late switches, all of it shows up. Listening back is half of today's practice.
- **Cutting the 3rd off flat.** The landing note (C/E) is this week's finish line. Give it a little vibrato shimmer and the same note sounds a lot more like "singing."
- **Wandering out of the box and getting lost.** Keep the home base (frets 5–8) as your anchor, but whenever you step outside it, spot your next 3rd with your eyes before you move. Wander the neck without a map, and your landings fall apart.
