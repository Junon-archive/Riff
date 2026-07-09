---
title: "Am ↔ C Chord Tone Connections — Linking 3rds with Minimal Movement"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
lang: en
---

# Day 3 — The Moment the Chord Changes: Just a Small Shift from 3rd to 3rd

## ① Theory / Explanation

Here's why we're doing this today — up until yesterday, you drew the Am map and the C map **separately**. But real songs keep changing chords. You play Am, move to C, come back to Am. **How you handle that exact moment of change** is what real improv skill is made of. Beginners leave their hand where it was when the chord changes, so a wrong note slips out; the pros slide their hand onto the **<mark>3rd of the new chord</mark>** right at that instant.

Here's the key idea. Am's 3rd is **C**; C's 3rd is **E**. So when moving from Am to C, there's exactly one move we're aiming for: **<mark>C → E</mark>**. This is called a "<mark>guide tone</mark>" — like a thread guiding you through the chord progression. It's also a preview of the ii-V-I guide-tone lines coming next week (W8).

```json
{
  "id": "m2.w7.d3.am_c_guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am 3rd (C) <-> C 3rd (E) guide-tone landing map across the neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "E", "role": "target", "highlight": true }
    ]
  }
}
```

And here's the magic part: on the fretboard, this **C → E move is absurdly close.** The classic example: **<mark>string 3 fret 5 (C) → string 2 fret 5 (E).</mark>** Same fret, just shift one finger to the neighboring string. The chord changes, but your hand barely moves at all. We're going to burn that "minimal movement" thrill into your body today.

One more time: this isn't speed practice. It's timing training for **<mark>landing exactly on the 3rd</mark>** the instant the chord changes — so if anything, we go even slower. If the landing's off, it doesn't matter how fast you play, it's a bust.

## ② Visual Reference

This is a "guide-tone map" plotting Am's 3rd (**C**) and C's 3rd (**E**) together across the whole neck. Both are landing targets (in green), and A marks the anchor point (root) that orients you. Pair up <mark>the C-E's that sit close together</mark> with your eyes.

```json
{
  "id": "m2.w7.d3.am_c_guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am 3rd (C) <-> C 3rd (E) guide-tone landing map across the neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "E", "role": "target", "highlight": true }
    ]
  }
}
```

Now the real connection. Measure 1: Am (land on the 3rd, C) → Measure 2: C (a small shift to the neighboring string, land on the 3rd, E). Moving from measure 1's last note, **string 3 fret 5 (C)**, to measure 2's first note, **string 2 fret 5 (E)**, is <mark>today's key hand move</mark>.

```json
{
  "id": "m2.w7.d3.am_to_c_connection",
  "type": "tab",
  "meta": {
    "title": "Am -> C connection: land 3rd C, minimal move to 3rd E",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
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

**0–10 min · Warm-up (BPM 68)**
With the metronome at 68, repeat the connecting phrase above in eighth notes. Focus on just one spot: the move from measure 1 to 2, **<mark>string 3 fret 5 (C) → string 2 fret 5 (E).</mark>** Same fret, neighboring string. Just slide one finger over. Keep going until this move is smooth, with no gap in the sound.

```json
{
  "id": "m2.w7.d3.am_to_c_connection",
  "type": "tab",
  "meta": {
    "title": "Am -> C connection: land 3rd C, minimal move to 3rd E",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10–20 min · Brain training (finding minimal C→E moves)**
Turn off the metronome and find three nearby **<mark>C-E pairs</mark>** on the map. For example: (string 3 fret 5 · string 2 fret 5), (string 5 fret 3 · string 5 fret 7), (string 2 fret 1 · string 2 fret 5), (string 1 fret 8 · string 1 fret 12). For each pair, go back and forth saying "C for Am, E when the chord changes." You pass if you can go back and forth within a pair in 3 seconds, even with your eyes closed.

**20–40 min · Real-world feel — Am–C two-chord backing (BPM 68–72)**
Put on an "Am C backing track" or "Am to C vamp" (one that alternates each measure). Rule: **<mark>land on C during Am, land on E during C.</mark>** All you're doing is sliding onto the 3rd right as the chord changes. No need for flashy phrases — two or three notes per chord, ending on that chord's 3rd.

**40–50 min · Record & reflect (recommended)**
Record 30–60 seconds of your jam with any recorder. Check: **<mark>did I land on the 3rd right on time at each chord change?</mark>** If you switch late, the old chord's note bleeds over into the new chord and sounds "off." Slow down playback and loop just that spot. Jot down a note to practice shifting your timing half a beat earlier tomorrow.

**Today's goal:** In the Am–C backing track, land cleanly on the 3rd (C↔E) at every chord change with no slip, and move back and forth between three minimal C-E pairs with your eyes closed.

## ④ Tips / Common Mistakes

- **Late to switch.** If the chord's already changed to C but your hand's still on an Am note, you'll clash. Build a sense of anticipation — move your hand to the 3rd **half a beat before** the chord actually changes.
- **Hunting only for distant 3rds.** C→E is usually right under your nose. Don't jump across the neck — aim first for "the E nearest to where your hand already is." That's the whole point of minimal movement.
- **Playing it safe on the root.** If you keep landing on the root (A, C) just because you feel unsure, your guide-tone sense won't grow. Today, deliberately settle on the 3rd only.
- **Fleeing into speed.** If the switch feels awkward and you rush past it, your ear can't catch the mismatch. The slower you go, the more clearly landing accuracy shows up. Stay locked at 68.
